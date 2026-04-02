import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ProfileModule } from '../profile/profile.module';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
  imports: [ProfileModule],
})
export class ChatModule {}
