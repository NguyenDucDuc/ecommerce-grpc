import { CreateUserDto, LoginDto } from '@app/common/dtos';
import {
  UserPackageName,
  UserServiceClient,
  UserServiceName,
} from '@app/common/types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private userServiceClient: UserServiceClient;
  constructor(@Inject(UserPackageName) private userClient: ClientGrpc) {}
  onModuleInit() {
    this.userServiceClient =
      this.userClient.getService<UserServiceClient>(UserServiceName);
  }

  createUser(body: CreateUserDto) {
    try {
      return firstValueFrom(this.userServiceClient.createUser(body));
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  login(body: LoginDto) {
    try {
      return firstValueFrom(this.userServiceClient.loginUser(body));
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  createAdmin(payload: CreateUserDto) {
    try {
      return firstValueFrom(this.userServiceClient.createAdmin(payload));
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
