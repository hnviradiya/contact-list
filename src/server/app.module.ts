import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { ContactListModule } from './api/contact-list/contact-list.module';
import { ClientAppModule } from './client-app/client-app.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ApiModule,
    ClientAppModule,
    ConfigModule.forRoot(),
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
        children: [
          {
            path: 'contact-list',
            module: ContactListModule,
          },
        ],
      },
      {
        path: '',
        module: ClientAppModule,
      },
    ]),
  ],
  controllers: [],
  providers: [ConfigService, AppService],
})
export class AppModule {}
