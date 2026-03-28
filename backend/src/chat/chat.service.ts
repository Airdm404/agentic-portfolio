import { Injectable } from '@nestjs/common';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response.dto';

@Injectable()
export class ChatService {
  async createReply(body: ChatRequestDto): Promise<ChatResponseDto> {
    const latest = body.messages[body.messages.length - 1];
    const userCount = body.messages.filter((m) => m.role === 'user').length;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return {
      message: {
        role: 'assistant',
        text: `Mock reply to: "${latest.text}"`,
        timestamp,
      },
      meta: {
        intent: 'PORTFOLIO',
        capReached: false,
        messagesRemaining: Math.max(7 - userCount, 0),
        handoffEmail: null,
      },
    };
  }
}
