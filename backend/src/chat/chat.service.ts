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
import { ProfileService } from 'src/profile/profile.service';
import { z } from 'zod';

const MAX_LATEST_USER_TEXT_TOKENS = 250;

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
    console.log('Latest user message extracted:', latestUserText);

    const latestUserTextTokenCount = countTokens(latestUserText);
    console.log('Latest user text tokens:', latestUserTextTokenCount);

    if (latestUserTextTokenCount > MAX_LATEST_USER_TEXT_TOKENS) {
      this.sendFixedReply(response, messages, getTooLongReply());
      return;
    }

    let classification: z.infer<typeof classifyIntentSchema>;

    try {
      classification = await this.classifyIntent(latestUserText);
      console.log('Classification complete:', classification.intent);
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
    console.log('Profile context retrieved');

    try {
      const result = streamText({
        model: openai('gpt-5-mini'),
        system: [
          BASE_SYSTEM_PROMPT,
          `Resolved intent: ${classification.intent}`,
          getRouteInstruction(classification.intent),
          'Portfolio context:',
          profileContext,
        ].join('\n\n'),
        messages: await convertToModelMessages(messages),
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

  private async classifyIntent(text: string) {
    const { output } = await generateText({
      model: openai('gpt-5-nano'),
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
