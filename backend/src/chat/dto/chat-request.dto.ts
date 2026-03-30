import { IsArray, IsOptional, IsString } from 'class-validator';

export class ChatRequestDto {
  @IsArray()
  messages!: unknown[];

  @IsOptional()
  @IsString()
  id?: string;
}
