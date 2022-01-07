import { Module } from '@nestjs/common';
import { ContactListModule } from './contact-list/contact-list.module';

@Module({
  imports: [ContactListModule],
})
export class AppModule {}
