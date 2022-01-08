import { Controller, Get } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact } from 'src/model/contact';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/getContacts')
  async getContacts(userId: ObjectId): Promise<Contact[]> {
    return await this.contactService.getContacts(userId);
  }
}
