import { CreateUserDto } from '@app/common/dtos';
import { User, UserDocument } from '@app/common/schemas';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(body: CreateUserDto) {
    try {
      const password = await bcrypt.hash(body.password, 10);
      const user = await this.userModel.create({ ...body, password });
      return user;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
