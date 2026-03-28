import { Controller, Body, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  createReply(@Body() body: ChatRequestDto): ChatResponseDto {
    return this.chatService.createReply(body);
  }
}
