import { Injectable } from '@nestjs/common';
import { UserService } from '../api/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<string> {
    const payload = { username: user.email };
    return this.jwtService.sign(payload);
  }
}
