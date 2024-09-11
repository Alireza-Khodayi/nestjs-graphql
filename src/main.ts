import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestJSLoggerService } from './common/logger/services/nestjs-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(NestJSLoggerService));
  await app.listen(3000);
}
bootstrap();
