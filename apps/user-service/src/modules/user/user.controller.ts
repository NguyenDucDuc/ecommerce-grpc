import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { UserServiceName } from '@app/common/types';
import { CreateUserDto } from '@app/common/dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod(UserServiceName, 'CreateUser')
  async createUser(payload: CreateUserDto) {
    return await this.userService.createUser(payload);
  }
}
