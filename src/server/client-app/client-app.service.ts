import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IncomingMessage, ServerResponse } from 'http';
import createServer, { NextServer } from 'next/dist/server/next';

@Injectable()
export class ClientAppService {
  private nextServer: NextServer;

  constructor(private configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    try {
      this.nextServer = createServer({
        dev: this.configService.get<string>('NODE_ENV') !== 'production',
        dir: './src/client',
      });
      await this.nextServer.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  handler(req: IncomingMessage, res: ServerResponse) {
    return this.nextServer.getRequestHandler()(req, res);
  }
}
