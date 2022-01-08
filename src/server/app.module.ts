import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { ContactModule } from './api/contact/contact.module';
import { ClientAppModule } from './client-app/client-app.module';
import { AppService } from './app.service';
import { UserService } from './api/user/user.service';
import { UserController } from './api/user/user.controller';
import { UserModule } from './user/user.module';

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
            path: 'contact',
            module: ContactModule,
          },
          {
            path: 'user',
            module: UserModule,
          },
        ],
      },
      {
        path: '',
        module: ClientAppModule,
      },
    ]),
    UserModule,
  ],
  controllers: [UserController],
  providers: [ConfigService, AppService, UserService],
})
export class AppModule {}
