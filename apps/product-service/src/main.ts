import { NestFactory } from '@nestjs/core';
import { ProductServiceModule } from './product-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CategoryPackageName } from '@app/common/types/category.type';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: [CategoryPackageName],
        protoPath: [join(__dirname, '../../product-service/category.proto')],
        url: process.env.GRPC_PRODUCT,
        loader: {
          keepCase: true,
        },
      },
    },
  );
  await app.listen();
  console.log('Product service running...');
}
bootstrap();
