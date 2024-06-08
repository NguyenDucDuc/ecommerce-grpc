import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { GrpcModule } from '@app/common/services/grpc/grpc.module';
import { CategoryPackageName } from '@app/common/types';

@Module({
  imports: [
    GrpcModule.register({
      packageName: CategoryPackageName,
      path: 'gateway-service/category.proto',
      url: process.env.GRPC_PRODUCT,
    }),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
