import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './entity/services.entity';
import { Repository } from 'typeorm';
import { ServicesRepository } from './services.repository';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServicesRepository)
    private readonly serviceRepository: ServicesRepository,
  ) {}

  async getServiceById(servicesId: number): Promise<Services> {
    return await this.serviceRepository.findOne(servicesId);
  }
}
