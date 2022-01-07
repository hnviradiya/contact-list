import { Module } from '@nestjs/common';
import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';

@Module({
  controllers: [ClientAppController],
  providers: [ClientAppService]
})
export class ClientAppModule {}