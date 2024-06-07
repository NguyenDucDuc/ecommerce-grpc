import { CreateUserDto, LoginDto } from '@app/common/dtos';
import { User, UserDocument } from '@app/common/schemas';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ERoles } from '@app/common/enums/role.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async createUser(body: CreateUserDto) {
    try {
      const password = await bcrypt.hash(body.password, 10);
      const user = await this.userModel.create({
        ...body,
        password,
        roles: [ERoles.CUSTOMER],
      });
      return user;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  async loginUser(payload: LoginDto) {
    try {
      const user = await this.userModel
        .findOne({ username: payload.username })
        .lean();
      if (!user) throw new RpcException('User not found!');
      const isValid = await bcrypt.compare(payload.password, user.password);
      if (!isValid) throw new RpcException('Incorrect password!');
      const accessToken = await this.jwtService.signAsync({ ...user });
      return { accessToken };
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  async createAdmin(payload: CreateUserDto) {
    try {
      const password = await bcrypt.hash(payload.password, 10);
      const admin = await this.userModel.create({
        ...payload,
        password,
        roles: [ERoles.ADMIN],
      });
      return admin;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
