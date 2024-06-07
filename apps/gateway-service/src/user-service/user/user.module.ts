import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { GrpcModule } from '@app/common/services/grpc/grpc.module';
import { UserPackageName } from '@app/common/types';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@app/common/strategies';

@Module({
  imports: [
    GrpcModule.register({
      packageName: UserPackageName,
      path: 'gateway-service/user.proto',
      url: process.env.GRPC_USER,
    }),
    PassportModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {}
