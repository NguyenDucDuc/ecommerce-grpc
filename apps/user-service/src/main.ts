import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserPackageName } from '@app/common/types';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: UserPackageName,
        protoPath: join(__dirname, '../../user-service/user.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
