import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact, ContactModel } from '../../../model/contact';

@Injectable()
export class ContactListService {
  async getContacts(userId: ObjectId): Promise<Contact[]> {
    return await ContactModel.find({ userId });
  }
}
