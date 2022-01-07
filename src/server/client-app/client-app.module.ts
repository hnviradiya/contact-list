import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';

@Module({
  controllers: [ClientAppController],
  providers: [ClientAppService, ConfigService],
})
export class ClientAppModule {}
