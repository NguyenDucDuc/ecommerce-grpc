import { DynamicModule, Module } from '@nestjs/common';
import { GrpcService } from './grpc.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

export interface IGrpcOptions {
  packageName: string;
  path: string;
  url: string;
}

@Module({
  controllers: [],
  providers: [GrpcService],
})
export class GrpcModule {
  static register({ packageName, path, url }: IGrpcOptions): DynamicModule {
    return {
      module: GrpcModule,
      imports: [
        ClientsModule.register([
          {
            name: packageName,
            transport: Transport.GRPC,
            options: {
              package: packageName,
              protoPath: join(__dirname, `../../${path}`),
              url,
              loader: {
                keepCase: true,
              },
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
