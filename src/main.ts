import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestJSLoggerService } from './common/logger/services/nestjs-logger.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(NestJSLoggerService));
  await app.listen(3000);
}
bootstrap();
