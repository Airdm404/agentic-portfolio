import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { openai } from '@ai-sdk/openai';
import {
  convertToModelMessages,
  createIdGenerator,
  createUIMessageStream,
  generateText,
  Output,
  pipeUIMessageStreamToResponse,
  streamText,
  validateUIMessages,
} from 'ai';
import { type Response } from 'express';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response.dto';
import {
  BASE_SYSTEM_PROMPT,
  CLASSIFIER_SYSTEM_PROMPT,
  getRouteInstruction,
} from './chat.prompts';
import { classifyIntentSchema } from './chat.schemas';
import {
  chatDataPartsSchemas,
  chatMessageMetadataSchema,
  type ChatUIMessage,
} from './chat.ui';

@Injectable()
export class ChatService {
  async createReply(body: ChatRequestDto): Promise<ChatResponseDto> {
    // const latest = body.messages[body.messages.length - 1];
    // const userCount = body.messages.filter((m) => m.role === 'user').length;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return {
      message: {
        role: 'assistant',
        text: `Mock reply to"`,
        timestamp,
      },
      meta: {
        intent: 'PORTFOLIO',
        capReached: false,
        messagesRemaining: 0,
        handoffEmail: null,
      },
    };
  }

  async streamReply(body: ChatRequestDto, response: Response): Promise<void> {
    let messages: ChatUIMessage[];

    try {
      messages = await validateUIMessages({
        messages: body.messages,
        metadataSchema: chatMessageMetadataSchema,
        dataSchemas: chatDataPartsSchemas,
      });
    } catch (error) {
      console.error('validateUIMessages failed:', error);
      throw new BadRequestException('Invalid chat message payload.');
    }

    const latestUserText = messages[messages.length - 1];
    console.log('Latest message:', latestUserText);
    if (latestUserText.role !== 'user') {
      throw new BadRequestException('A user message is required.');
    }

    try {
      const stream = createUIMessageStream<ChatUIMessage>({
        originalMessages: messages,
        generateId: createIdGenerator({
          prefix: 'msg',
          size: 16,
        }),
        execute: async ({ writer }) => {
          writer.write({
            type: 'data-status',
            data: {
              stage: 'classifying',
              label: 'Analyzing your question...',
            },
            transient: true,
          });

          const classification = await this.classifyIntent([latestUserText]);
          console.log(classification);

          console.log('first write');
          writer.write({
            type: 'data-decision',
            id: 'decision',
            data: {
              intent: classification.intent,
              replyKind: 'answer',
              capReached: false,
              handoffEmail: null,
            },
          });

          console.log('second write');

          writer.write({
            type: 'data-status',
            data: {
              stage: 'answering',
              label: 'Generating response...',
            },
            transient: true,
          });

          console.log('api answer call');

          const result = streamText({
            model: openai('gpt-5-mini'),
            system: `${BASE_SYSTEM_PROMPT}\n\n${getRouteInstruction(classification.intent)}`,
            messages: await convertToModelMessages(messages),
          });

          console.log('write merge');

          writer.merge(
            result.toUIMessageStream({
              messageMetadata: ({ part }) => {
                if (part.type === 'start') {
                  return {
                    createdAt: Date.now(),
                  };
                }

                if (part.type === 'finish') {
                  return {
                    totalTokens: part.totalUsage.totalTokens,
                  };
                }
                return undefined;
              },
            }),
          );
        },
      });

      console.log('stream created');

      pipeUIMessageStreamToResponse({
        response,
        stream,
      });
    } catch (error) {
      console.error('streamReply failed:', error);
      throw new InternalServerErrorException('Failed to stream chat response.');
    }
  }

  private async classifyIntent(messages: ChatUIMessage[]) {
    const { output } = await generateText({
      model: openai('gpt-5-nano'),
      system: CLASSIFIER_SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
      output: Output.object({
        schema: classifyIntentSchema,
      }),
    });

    return output;
  }
}
