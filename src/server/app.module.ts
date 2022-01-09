import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { ContactModule } from './api/contact/contact.module';
import { AppService } from './app.service';
import { ClientAppModule } from './client-app/client-app.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

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
    AuthModule,
  ],
  providers: [
    ConfigService,
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
