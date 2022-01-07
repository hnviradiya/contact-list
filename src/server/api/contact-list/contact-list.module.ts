import { Module } from '@nestjs/common';
import { ContactListController } from './contact-list.controller';
import { ContactListService } from './contact-list.service';

@Module({
  controllers: [ContactListController],
  providers: [ContactListService],
})
export class ContactListModule {}
