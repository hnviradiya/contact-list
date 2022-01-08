import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User, UserModel } from '../../../model/user';

@Injectable()
export class UserService {
  async createUser(user: User): Promise<ObjectId> {
    return (await UserModel.create(user)).id;
  }

  async findOne(email: string): Promise<User | undefined> {
    return await UserModel.findOne({ email });
  }

  async login(user: User): Promise<ObjectId> {
    return (
      await UserModel.findOne({ email: user.email, password: user.password })
    ).id;
  }
}
