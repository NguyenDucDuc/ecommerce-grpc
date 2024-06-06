import { CreateUserDto } from '@app/common/dtos';
import {
  UserPackageName,
  UserServiceClient,
  UserServiceName,
} from '@app/common/types';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
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
    return firstValueFrom(this.userServiceClient.createUser(body));
  }
}
