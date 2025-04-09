import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { appConfig } from './config/app.config';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(appConfig.cors);

  app.useGlobalPipes(new ValidationPipe(appConfig.validationPipe));

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(appConfig.port, () =>
    console.log(`🚀 Server runs on port ${appConfig.port}`),
  );
}

bootstrap();
