import { Controller, Body, Post, Res } from '@nestjs/common';
import { type Response } from 'express';
import { ChatService } from './chat.service';
import { ChatRequestDto } from './dto/chat-request.dto';
import { ChatResponseDto } from './dto/chat-response.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createReply(@Body() body: ChatRequestDto): Promise<ChatResponseDto> {
    return await this.chatService.createReply(body);
  }

  @Post('stream')
  async streamReply(
    @Body() body: ChatRequestDto,
    @Res() response: Response,
  ): Promise<void> {
    await this.chatService.streamReply(body, response);
  }
}
