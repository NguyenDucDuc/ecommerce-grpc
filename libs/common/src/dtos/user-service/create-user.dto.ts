import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user1@gmail.com' })
  @IsString()
  username: string;

  @ApiProperty({ example: '' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'Nguyen Duc' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Duc' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '0981132231' })
  @IsString()
  phone: string;
}
