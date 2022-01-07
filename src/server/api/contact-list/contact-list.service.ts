import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactListService {
  getContacts(): Array<any> {
    return ['Hardik Viradiya'];
  }
}
