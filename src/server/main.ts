import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import createServer from 'next/dist/server/next';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './next.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const nextServer = createServer({
    dev: configService.get<string>('NODE_ENV') !== 'production',
    dir: './src/client',
  });
  await nextServer.prepare();

  app.useGlobalFilters(new HttpExceptionFilter(nextServer));
  await app.listen(3000);
}
bootstrap();
