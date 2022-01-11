import { Body, Controller, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Public } from '../../auth/jwt-auth.guard';
import { User } from '../../../model/user';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/create')
  async createUser(@Body() user: User): Promise<ObjectId> {
    if (await this.userService.findOne(user.email)) {
      return null;
    }

    return await this.userService.createUser(user);
  }
}
