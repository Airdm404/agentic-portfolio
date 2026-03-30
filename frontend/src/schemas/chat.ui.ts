import type {UIMessage} from 'ai';


export type ChatIntent =
  | 'PORTFOLIO'
  | 'PROJECT'
  | 'EXPERIENCE'
  | 'HIRING'
  | 'CONTACT'
  | 'SMALL_TALK'
  | 'OFF_TOPIC'
  | 'INJECTION';

export type ChatReplyKind =
  | 'answer'
  | 'redirect'
  | 'refusal'
  | 'handoff';

export type ChatMessageMetadata = {
  createdAt?: number;
  totalTokens?: number;
};

export type ChatDataParts = {
  decision: {
    intent: ChatIntent;
    replyKind: ChatReplyKind;
    capReached: boolean;
    handoffEmail: string | null;
  };
  status: {
    stage: 'classifying' | 'answering' | 'handoff';
    label: string;
  };
};

export type ChatUIMessage = UIMessage<ChatMessageMetadata, ChatDataParts>;