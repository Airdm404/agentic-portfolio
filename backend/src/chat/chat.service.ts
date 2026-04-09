import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { openai } from '@ai-sdk/openai';
import {
  createUIMessageStream,
  convertToModelMessages,
  generateText,
  Output,
  pipeUIMessageStreamToResponse,
  streamText,
  generateId,
  type UIMessage,
  validateUIMessages,
} from 'ai';

import { countTokens } from 'gpt-tokenizer';
import { type Response } from 'express';
import { ChatRequestDto } from './dto/chat-request.dto';
import {
  BASE_SYSTEM_PROMPT,
  CLASSIFIER_SYSTEM_PROMPT,
  getInjectionReply,
  getOffTopicReply,
  getRouteInstruction,
  getTooLongReply,
} from './chat.prompts';
import { classifyIntentSchema } from './chat.schemas';
import { ProfileService } from '../profile/profile.service';
import { z } from 'zod';

const MAX_LATEST_USER_TEXT_TOKENS = 80;
const MAX_HISTORY_MESSAGES = 8;
const MAX_HISTORY_TOKENS = 1200;

@Injectable()
export class ChatService {
  constructor(private readonly profileService: ProfileService) {}

  async streamReply(body: ChatRequestDto, response: Response): Promise<void> {
    let messages: UIMessage[];

    try {
      messages = await validateUIMessages<UIMessage>({
        messages: body.messages,
      });
    } catch (error) {
      console.error('validateUIMessages failed:', error);
      throw new BadRequestException('Invalid chat message payload.');
    }

    const latestUserMessage = this.getLatestUserMessage(messages);
    if (latestUserMessage == null) {
      throw new BadRequestException('A user message is required.');
    }

    const latestUserText = this.getTextFromMessage(latestUserMessage);
    if (latestUserText.length === 0) {
      throw new BadRequestException('A text user message is required.');
    }

    if (countTokens(latestUserText) > MAX_LATEST_USER_TEXT_TOKENS) {
      this.sendFixedReply(response, messages, getTooLongReply());
      return;
    }

    let classification: z.infer<typeof classifyIntentSchema>;

    try {
      classification = await this.classifyIntent(latestUserText);
    } catch (error) {
      console.error('Intent classification failed:', error);
      throw new InternalServerErrorException('Failed to classify user intent.');
    }

    if (classification.intent === 'OFF_TOPIC') {
      this.sendFixedReply(response, messages, getOffTopicReply());
      return;
    }

    if (classification.intent === 'INJECTION') {
      this.sendFixedReply(response, messages, getInjectionReply());
      return;
    }

    const profileContext = this.profileService.getChatContext(
      classification.intent,
    );

    try {
      const messagesForModel = this.getMessagesForModel(messages);

      const result = streamText({
        model: openai('gpt-5.4-nano'),
        system: [
          BASE_SYSTEM_PROMPT,
          `Resolved intent: ${classification.intent}`,
          getRouteInstruction(classification.intent),
          'Portfolio context:',
          profileContext,
        ].join('\n\n'),
        messages: await convertToModelMessages(messagesForModel),
      });

      result.pipeUIMessageStreamToResponse(response, {
        sendReasoning: false,
        sendSources: false,
      });
    } catch (error) {
      console.error('streamReply failed:', error);
      throw new InternalServerErrorException('Failed to stream chat response.');
    }
  }

  private getLatestUserMessage(messages: UIMessage[]): UIMessage | undefined {
    return [...messages].reverse().find((message) => message.role === 'user');
  }

  private getTextFromMessage(message: UIMessage): string {
    return message.parts
      .filter(
        (
          part,
        ): part is Extract<(typeof message.parts)[number], { type: 'text' }> =>
          part.type === 'text',
      )
      .map((part) => part.text)
      .join('')
      .trim();
  }

  private getMessagesForModel(messages: UIMessage[]): UIMessage[] {
    const selectedMessages: UIMessage[] = [];
    let tokenCount = 0;

    for (let index = messages.length - 1; index >= 0; index -= 1) {
      const message = messages[index];
      const messageText = this.getTextFromMessage(message);
      const messageTokenCount = countTokens(messageText);
      const nextMessageCount = selectedMessages.length + 1;
      const nextTokenCount = tokenCount + messageTokenCount;
      const exceedsMessageLimit = nextMessageCount > MAX_HISTORY_MESSAGES;
      const exceedsTokenLimit =
        selectedMessages.length > 0 && nextTokenCount > MAX_HISTORY_TOKENS;

      if (exceedsMessageLimit && exceedsTokenLimit) {
        break;
      }

      selectedMessages.push(message);
      tokenCount = nextTokenCount;
    }

    return selectedMessages.reverse();
  }

  private async classifyIntent(text: string) {
    const { output } = await generateText({
      model: openai('gpt-5.4-nano'),
      system: CLASSIFIER_SYSTEM_PROMPT,
      prompt: text,
      output: Output.object({
        schema: classifyIntentSchema,
      }),
    });

    return output;
  }

  private sendFixedReply(
    response: Response,
    messages: UIMessage[],
    text: string,
  ): void {
    const textPartId = generateId();
    const stream = createUIMessageStream<UIMessage>({
      originalMessages: messages,
      execute: ({ writer }) => {
        writer.write({ type: 'start' });
        writer.write({ type: 'text-start', id: textPartId });
        writer.write({ type: 'text-delta', id: textPartId, delta: text });
        writer.write({ type: 'text-end', id: textPartId });
        writer.write({ type: 'finish', finishReason: 'stop' });
      },
    });

    pipeUIMessageStreamToResponse({
      response,
      stream,
    });
  }
}
