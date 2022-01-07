import { NestFactory } from '@nestjs/core';
import createServer from 'next/dist/server/next';
import { AppModule } from './server/app.module';
import { HttpExceptionFilter } from './server/next.filter';
import config from './nest.config.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const nextServer = createServer({
    dev: config.NODE_ENV !== 'production',
    dir: './src/client',
  });
  await nextServer.prepare();

  app.useGlobalFilters(new HttpExceptionFilter(nextServer));
  await app.listen(3000);
}
bootstrap();
