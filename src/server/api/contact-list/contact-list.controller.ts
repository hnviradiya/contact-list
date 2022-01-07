import { Controller, Get } from '@nestjs/common';
import { ContactListService } from './contact-list.service';

@Controller()
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Get('/getContacts')
  getContacts(): Array<any> {
    return this.contactListService.getContacts();
  }
}
