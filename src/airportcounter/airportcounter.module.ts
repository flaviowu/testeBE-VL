import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AirportcounterService } from './airportcounter.service';
import { AirportcounterController } from './airportcounter.controller';

@Module({
  controllers: [AirportcounterController],
  providers: [PrismaService, AirportcounterService],
})
export class AirportcounterModule {}
