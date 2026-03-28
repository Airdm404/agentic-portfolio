import { Injectable } from '@nestjs/common';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response.dto';

@Injectable()
export class ChatService {
  createReply(body: ChatRequestDto): ChatResponseDto {
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
