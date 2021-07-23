import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('services')
@UseGuards(JwtAuthGuard)
export class ServicesController {
  constructor(private readonly services: ServicesService) {}

  @Get(':id')
  @ApiResponse({ description: 'Get services by id', status: 200 })
  async showServicesById(@Param('id') id: number) {
    return await this.services.getServiceById(id);
  }
}
