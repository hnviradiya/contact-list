import { Controller, Get, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact } from '../../../model/contact';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/get')
  async getContacts(userId: ObjectId): Promise<Contact[]> {
    return await this.contactService.getContacts(userId);
  }

  @Post('/create')
  async createContact(contact: Contact): Promise<ObjectId> {
    return await this.contactService.createContact(contact);
  }
}
