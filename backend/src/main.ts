import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function getAllowedOrigins(): string[] {
  const configuredOrigins =
    process.env.FRONTEND_URL?.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean) ?? [];

  if (configuredOrigins.length > 0) {
    return configuredOrigins;
  }

  return ['http://localhost:5173', 'http://127.0.0.1:5173'];
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = getAllowedOrigins();
  const port = Number(process.env.PORT) || 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  await app.listen(port, '0.0.0.0');
}
void bootstrap();
