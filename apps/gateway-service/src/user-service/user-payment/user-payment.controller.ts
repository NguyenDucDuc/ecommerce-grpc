import { Controller } from '@nestjs/common';
import { UserPaymentService } from './user-payment.service';

@Controller('user-payment')
export class UserPaymentController {
  constructor(private readonly userPaymentService: UserPaymentService) {}
}
