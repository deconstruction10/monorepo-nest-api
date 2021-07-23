import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(UsersRepository)
    private readonly userRepository: Repository<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async getUserByUsername(username: string): Promise<Users> {
    return await this.userRepository.findOne({ username: username });
  }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user = new Users();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    const hashedPass = await this.getHash(createUserDto);
    user.password = hashedPass;
    return this.userRepository.save(user);
  }

  async getHash(createUserDto: CreateUserDto): Promise<string> {
    console.log(createUserDto);
    return bcrypt.hash(createUserDto.password, this.saltRounds);
  }

  async compareHash(
    password: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
