import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirlineModule } from './airline/airline.module';
import { FlightModule } from './flight/flight.module';
import { SeatModule } from './seat/seat.module';
import { PassengerModule } from './passenger/passenger.module';
import { PrismaModule } from './prisma/prisma.module';
import { AirportcounterService } from './airportcounter/airportcounter.service';
import { AirportcounterModule } from './airportcounter/airportcounter.module';

@Module({
  imports: [AirlineModule, FlightModule, SeatModule, PassengerModule, PrismaModule, AirportcounterModule],
  controllers: [AppController],
  providers: [AppService, AirportcounterService],
})
export class AppModule {}
