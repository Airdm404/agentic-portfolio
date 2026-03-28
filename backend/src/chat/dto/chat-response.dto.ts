export type ChatIntent =
  | 'PORTFOLIO'
  | 'PROJECT'
  | 'EXPERIENCE'
  | 'HIRING'
  | 'CONTACT'
  | 'SMALL_TALK'
  | 'OFF_TOPIC'
  | 'INJECTION';

export class ChatResponseDto {
  message!: {
    role: 'assistant';
    text: string;
    timestamp: string;
  };

  meta!: {
    intent: ChatIntent;
    capReached: boolean;
    messagesRemaining: number;
    handoffEmail: string | null;
  };
}
