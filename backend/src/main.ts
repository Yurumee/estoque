import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from "dotenv"
import { AppDataSource } from './data-source';

dotenv.config()

AppDataSource.initialize().then(async () =>
  {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3002);
  }
)
.catch(error => console.log(error))

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3002);
// }
// void bootstrap();
