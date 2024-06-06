import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { GrpcModule } from '@app/common/services/grpc/grpc.module';
import { UserPackageName } from '@app/common/types';

@Module({
  imports: [
    GrpcModule.register({
      packageName: UserPackageName,
      path: 'gateway-service/user.proto',
      url: process.env.GRPC_USER,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
