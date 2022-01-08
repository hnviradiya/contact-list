import { Controller, Get, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User, UserModel } from 'src/model/user';

@Controller()
export class UserController {
  @Get('/create')
  async createUser(user: User): Promise<ObjectId> {
    return (await UserModel.create(user)).id;
  }

  @Post('/login')
  async login(user: User): Promise<ObjectId> {
    return (
      await UserModel.findOne({ user: user.email, password: user.password })
    ).id;
  }
}
