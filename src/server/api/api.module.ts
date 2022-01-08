import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ContactModule, UserModule],
})
export class ApiModule {}
