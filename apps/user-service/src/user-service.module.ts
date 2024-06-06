import { EDatabaseName } from '@app/common/enums';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AddressModule } from './modules/address/address.module';
import { UserPaymentModule } from './modules/user-payment/user-payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(`${process.env.MONGODB}/${EDatabaseName.USER}`),
    UserModule,
    AddressModule,
    UserPaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class UserServiceModule {}
