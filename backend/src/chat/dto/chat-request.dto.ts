import { IsArray, IsIn, IsOptional, IsString } from 'class-validator';

export class ChatRequestDto {
  @IsArray()
  messages!: unknown[];

  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsIn(['submit-message', 'regenerate-message'])
  trigger?: 'submit-message' | 'regenerate-message';

  @IsOptional()
  @IsString()
  messageId?: string;
}
