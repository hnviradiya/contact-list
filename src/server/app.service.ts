import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect } from 'mongoose';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    try {
      await connect(this.configService.get<string>('MONGO_URI'));
    } catch (error) {
      console.error(error);
    }
  }
}
