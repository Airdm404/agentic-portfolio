export type ChatRole = 'system' | 'user';

export class ChatMessageResponseDto {
  message!: {
    role: ChatRole;
    text: string;
    timestamp: string;
  };
}