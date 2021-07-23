import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesRepository } from './services.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesRepository])],
  providers: [ServicesService],
  controllers: [ServicesController],
})
export class ServicesModule {}
