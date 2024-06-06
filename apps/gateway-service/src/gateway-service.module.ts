import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user-service/user/user.module';
import { AddressModule } from './user-service/address/address.module';
import { UserPaymentModule } from './user-service/user-payment/user-payment.module';
import { ResponseTimeMiddleware } from '@app/common/middlewares';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UserModule,
    AddressModule,
    UserPaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class GatewayServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseTimeMiddleware).forRoutes('*');
  }
}
