import { Controller, Get } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact } from 'src/model/contact';
import { ContactListService } from './contact-list.service';

@Controller()
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Get('/getContacts')
  async getContacts(userId: ObjectId): Promise<Contact[]> {
    return await this.contactListService.getContacts(userId);
  }
}
