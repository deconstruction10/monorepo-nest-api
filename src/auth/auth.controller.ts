import {
  Controller,
  Response,
  Post,
  Body,
  HttpStatus,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Users } from '../users/entity/users.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @Post('login')
  @ApiCreatedResponse({
    status: 200,
    description: 'User has been successfully logged in',
  })
  async loginUser(@Response() res: any, @Body() body: Users) {
    if (!(body && body.username && body.password)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Username and password are required!' });
    }
    const user = await this.usersService.getUserByUsername(body.username);

    if (user) {
      if (await this.usersService.compareHash(body.password, user.password)) {
        return res
          .status(HttpStatus.OK)
          .json(await this.authService.createToken(user.id, user.username));
      }
    }
    return res
      .status(HttpStatus.FORBIDDEN)
      .json({ message: 'Username or password wrong!' });
  }

  @Post('register')
  @Redirect('http://localhost:3000/auth/login', 200)
  @ApiCreatedResponse({
    status: 308,
    description: 'User has been successfully created',
    type: Users,
  })
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return await this.usersService.createUser(createUserDto);
  }
}
