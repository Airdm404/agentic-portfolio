import { Injectable } from '@nestjs/common';
import { ChatMessageRequestDto } from './dto/chat-message-request.dto';
import { ChatMessageResponseDto } from './dto/chat-message-response.dto';

@Injectable()
export class ChatService {
  createReply(body: ChatMessageRequestDto): ChatMessageResponseDto {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return {
      message: {
        role: 'system',
        text: `Mock backend response to: "${body.message}"`,
        timestamp,
      },
    };
  }
}
