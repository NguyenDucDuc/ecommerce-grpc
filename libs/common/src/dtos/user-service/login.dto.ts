import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user1@gmail.com' })
  @IsString()
  username: string;

  @ApiProperty({ example: '' })
  @IsString()
  password: string;
}
