import { Controller, Get } from '@nestjs/common';
import { ContactListService } from './contact-list.service';

@Controller('contact-list')
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Get()
  getContacts(): Array<any> {
    return this.contactListService.getContacts();
  }
}
