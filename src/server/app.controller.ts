import { Controller, Get, Req, Res } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  async getApp(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    await this.appService.handler(req, res);
  }
}
