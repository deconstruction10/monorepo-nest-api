import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ name: 'id' })
  id: number;
  @ApiProperty({ name: 'username' })
  username: string;
  @ApiProperty({ name: 'email' })
  email: string;
  @ApiProperty({ name: 'password' })
  password: string;
}
