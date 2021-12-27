import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { AirportcounterService } from './airportcounter.service';
import { AddPassengerToFlightDto } from './dto/addPassengerToFlight.dto';
import { RemovePassengerFromFlightDto } from './dto/removePassengerFromFlight.dto';

@Controller('airportcounter')
export class AirportcounterController {
  constructor(private readonly airportCounterService: AirportcounterService) {}

  @Patch('addPassengerToFlight/:id')
  addPassengerToFlight(
    @Param('id', ParseIntPipe) id: number,
    @Body() addPassengerToFlightDto: AddPassengerToFlightDto,
  ) {
    return this.airportCounterService.addPassenger(id, addPassengerToFlightDto);
  }

  @Patch('removePassengerFromFlight/:id')
  removePassengerFromFlight(
    @Param('id', ParseIntPipe) id: number,
    @Body() removePassengerFromFlightDto: RemovePassengerFromFlightDto,
  ) {
    return this.airportCounterService.removePassenger(
      id,
      removePassengerFromFlightDto,
    );
  }
}
