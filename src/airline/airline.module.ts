import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';

@Module({
  controllers: [AirlineController],
  providers: [AirlineService, PrismaService],
})
export class AirlineModule {}
