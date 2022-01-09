import { Controller, Get, Req, Res } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';
import { Public } from '../auth/jwt-auth.guard';
import { ClientAppService } from './client-app.service';

@Controller('/')
export class ClientAppController {
  constructor(private readonly appService: ClientAppService) {}

  @Public()
  @Get('/registration-login')
  async getLoginPage(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    await this.appService.handler(req, res);
  }

  @Public()
  @Get('/_next/static/*')
  async getStaticContent(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.appService.handler(req, res);
  }

  @Get('*')
  async getApp(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    await this.appService.handler(req, res);
  }
}
