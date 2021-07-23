import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class Users {
  @ApiProperty({ name: 'id', type: 'number' })
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;
  @ApiProperty({ name: 'username', type: 'string' })
  @Column({ name: 'username', length: 30, unique: true, nullable: false })
  username: string;
  @ApiProperty({ name: 'email', type: 'string' })
  @Column({ name: 'email', length: 50, nullable: false })
  email: string;
  @ApiProperty({ name: 'password', type: 'string' })
  @Column({ length: 100, unique: false, nullable: false })
  password: string;
}
