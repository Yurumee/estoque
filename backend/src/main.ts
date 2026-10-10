import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // valida se o dto e o body condizem em dados e tipos
        new ValidationPipe({
          // dados não presentes no dto são descartados
          whitelist: true
        }))
  await app.listen(process.env.PORT ?? 3002);
}
void bootstrap();
