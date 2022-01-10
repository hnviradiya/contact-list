import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Contact, ContactModel } from '../../../model/contact';

@Injectable()
export class ContactService {
  async getContacts(userId: ObjectId): Promise<Contact[]> {
    return await ContactModel.find({ userId });
  }
  async createContact(contact: Contact): Promise<ObjectId> {
    return (await ContactModel.create(contact)).id;
  }
  async deleteContact(contactId: ObjectId): Promise<boolean> {
    return (await ContactModel.deleteOne(contactId)).acknowledged;
  }
}
