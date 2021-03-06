import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../api/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      return { id: user.id };
    }
    return null;
  }

  async login(user: any): Promise<string> {
    const payload = { userId: user.id };
    return this.jwtService.sign(payload);
  }
}
