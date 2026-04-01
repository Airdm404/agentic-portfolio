import { Controller, Body, Post, Res } from '@nestjs/common';
import { type Response } from 'express';
import { ChatService } from './chat.service';
import { ChatRequestDto } from './dto/chat-request.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async streamChat(
    @Body() body: ChatRequestDto,
    @Res() response: Response,
  ): Promise<void> {
    await this.chatService.streamReply(body, response);
  }
}
