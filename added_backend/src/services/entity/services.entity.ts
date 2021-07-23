import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('services')
export class Services {
  @ApiProperty({ name: 'id', type: 'number' })
  @PrimaryColumn('int', { unique: true })
  id: number;
  @ApiProperty({ name: 'name', type: 'string' })
  @Column('varchar', { length: 100, nullable: true })
  name: string;
  @ApiProperty({ name: 'description', type: 'string' })
  @Column('varchar', { length: 400, nullable: true })
  description: string;
  @ApiProperty({ name: 'price', type: 'number' })
  @Column('bigint', { nullable: true })
  price: number;
}
