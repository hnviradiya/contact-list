import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { ContactListModule } from './api/contact-list/contact-list.module';
import { ClientAppModule } from './client-app/client-app.module';

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
  providers: [ConfigService],
})
export class AppModule {}
