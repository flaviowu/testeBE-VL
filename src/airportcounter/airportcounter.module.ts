import { Module } from '@nestjs/common';
import { AirportcounterController } from './airportcounter.controller';

@Module({
  controllers: [AirportcounterController]
})
export class AirportcounterModule {}
