import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { openai } from '@ai-sdk/openai';
import {
  convertToModelMessages,
  generateText,
  Output,
  streamText,
  type UIMessage,
  validateUIMessages,
} from 'ai';
import { type Response } from 'express';
import { ChatRequestDto } from './dto/chat-request.dto';
import {
  BASE_SYSTEM_PROMPT,
  CLASSIFIER_SYSTEM_PROMPT,
  getRouteInstruction,
} from './chat.prompts';
import { classifyIntentSchema } from './chat.schemas';

@Injectable()
export class ChatService {
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

    try {
      const classification = await this.classifyIntent(latestUserText);

      const result = streamText({
        model: openai('gpt-5-mini'),
        system: `${BASE_SYSTEM_PROMPT}\n\n${getRouteInstruction(classification.intent)}`,
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
}
