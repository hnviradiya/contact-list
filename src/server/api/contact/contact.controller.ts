import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact } from '../../../model/contact';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/get')
  async getContacts(@Query('userId') userId: ObjectId): Promise<Contact[]> {
    return await this.contactService.getContacts(userId);
  }

  @Post('/create')
  async createContact(@Body() contact: Contact): Promise<ObjectId> {
    return await this.contactService.createContact(contact);
  }
}
