import { Controller, Get, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User } from '../../../model/user';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async createUser(user: User): Promise<ObjectId> {
    return await this.userService.createUser(user);
  }

  @Post('/login')
  async login(user: User): Promise<ObjectId> {
    return await this.userService.login(user);
  }
}
