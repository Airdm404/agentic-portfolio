export type ChatRole = 'system' | 'user';

export class ChatResponseDto {
  message!: {
    role: ChatRole;
    text: string;
    timestamp: string;
  };
}
