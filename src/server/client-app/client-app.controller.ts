import { Controller, Get, Req, Res } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';
import { ClientAppService } from './client-app.service';

@Controller('/')
export class ClientAppController {
  constructor(private readonly appService: ClientAppService) {}

  @Get('*')
  async getApp(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    await this.appService.handler(req, res);
  }
}
