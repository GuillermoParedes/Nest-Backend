import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(
    `🚀  🚀   🚀   🚀 Apollo Server on http://localhost:3000/graphql`,
    'Main',
  );
  await app.listen(3000);
}
bootstrap();
