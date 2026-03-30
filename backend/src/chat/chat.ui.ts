import type { UIMessage } from 'ai';
import z from 'zod';

export const chatIntentSchema = z.enum([
  'PORTFOLIO',
  'PROJECT',
  'EXPERIENCE',
  'HIRING',
  'CONTACT',
  'SMALL_TALK',
  'OFF_TOPIC',
  'INJECTION',
]);

export const chatReplyKindSchema = z.enum([
  'answer',
  'redirect',
  'refusal',
  'handoff',
]);

export const chatMessageMetadataSchema = z.object({
  createdAt: z.number().optional(),
  totalTokens: z.number().optional(),
});

export const ChatDataPartsSchemas = {
  decision: z.object({
    intent: chatIntentSchema,
    replyKind: chatReplyKindSchema,
    capReached: z.boolean(),
    handoffEmail: z.email().nullable(),
  }),
  status: z.object({
    stage: z.enum(['classifying', 'answering', 'handoff']),
    label: z.string(),
  }),
};

export type ChatIntent = z.infer<typeof chatIntentSchema>;
export type ChatReplyKind = z.infer<typeof chatReplyKindSchema>;
export type ChatMessageMetadata = z.infer<typeof chatMessageMetadataSchema>;
export type ChatDataParts = {
  decision: z.infer<(typeof ChatDataPartsSchemas)['decision']>;
  status: z.infer<(typeof ChatDataPartsSchemas)['status']>;
};

export type ChatUIMessage = UIMessage<ChatMessageMetadata, ChatDataParts>;
