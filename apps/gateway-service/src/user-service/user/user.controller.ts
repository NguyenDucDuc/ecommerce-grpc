import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginDto } from '@app/common/dtos/index';
import { JwtAuthGuard } from '@app/common/guards';
import { IRequestWithUser } from '@app/common/interfaces';

@ApiTags('user')
@Controller('user-service/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Post('login')
  loginUser(@Body() body: LoginDto) {
    return this.userService.login(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: IRequestWithUser) {
    return req.user;
  }

  @Post('create-admin')
  createAdmin(@Body() body: CreateUserDto) {
    return this.userService.createAdmin(body);
  }
}
