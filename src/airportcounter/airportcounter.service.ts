import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPassengerToFlightDto } from './dto/addPassengerToFlight.dto';
import { RemovePassengerFromFlightDto } from './dto/removePassengerFromFlight.dto';

@Injectable()
export class AirportcounterService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.SeatInclude = {
    passenger: true,
  };

  async addPassenger(id: number, dto: AddPassengerToFlightDto) {
    const flight = await this.prisma.flight.findUnique({ where: { id } });

    const currentTime = new Date(dto.currentTime);
    const timeDifference =
      flight.etd.getMilliseconds() - currentTime.getMilliseconds();

    const seat = await this.prisma.seat.findUnique({
      where: { id: dto.seatId },
    });

    if (flight.availableSeats < 0) {
      throw new Error('There are no available seats in this flight.');
    } else if (timeDifference <= 3600000) {
      throw new Error('The flight departure is within one hour from now.');
    } else if (seat.available === false) {
      throw new Error('The seat is not available');
    } else {
      const passengerData = { id: dto.passengerId };
      const updatedSeat = await this.prisma.seat.update({
        where: { id: dto.seatId },
        data: { passenger: { connect: { ...passengerData } } },
        include: this._include,
      });
      return updatedSeat;
    }
  }

  async removePassenger(id: number, dto: RemovePassengerFromFlightDto) {
    const updatedSeat = await this.prisma.seat.update({
      where: { id: dto.seatId },
      data: { passenger: { disconnect: true } },
      include: this._include,
    });

    return updatedSeat;
  }
}
