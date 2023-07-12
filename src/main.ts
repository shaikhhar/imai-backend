import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://imai-ig.web.app'],
  });
  await app.listen(process.env.port || 3000);
}
bootstrap();
