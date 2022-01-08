import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User, UserModel } from 'src/model/user';

@Injectable()
export class UserService {
  async createUser(user: User): Promise<ObjectId> {
    return (await UserModel.create(user)).id;
  }
  async login(user: User): Promise<ObjectId> {
    return (
      await UserModel.findOne({ user: user.email, password: user.password })
    ).id;
  }
}
