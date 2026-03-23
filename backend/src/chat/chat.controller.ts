import { Controller, Body, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatMessageRequestDto } from './dto/chat-message-request.dto';
import { ChatMessageResponseDto } from './dto/chat-message-response.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  createReply(@Body() body: ChatMessageRequestDto): ChatMessageResponseDto {
    return this.chatService.createReply(body);
  }
}
