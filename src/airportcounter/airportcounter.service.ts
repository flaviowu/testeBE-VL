import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prisma, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPassengerToFlightDto } from './dto/addPassengerToFlight.dto';
import { RemovePassengerFromFlightDto } from './dto/removePassengerFromFlight.dto';

@Injectable()
export class AirportcounterService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.FlightInclude = {
    airline: true,
    seats: true,
    passengers: true,
  };

  async addPassenger(id: number, dto: AddPassengerToFlightDto) {
    const flight = await this.prisma.flight.findUnique({ where: { id } });

    const currentTime = new Date(dto.currentTime);
    const timeDifference = flight.etd.getTime() - currentTime.getTime();

    const seat = await this.prisma.seat.findUnique({
      where: { id: dto.seatId },
    });

    if (flight.availableSeats < 0) {
      throw new HttpException(
        'There are no available seats in this flight.',
        HttpStatus.BAD_REQUEST,
      );
    } else if (timeDifference <= 3600000) {
      throw new HttpException(
        'The flight departure is less than one hour from your local time.',
        HttpStatus.BAD_REQUEST,
      );
    } else if (seat.available === false) {
      throw new HttpException(
        'The seat is not available',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const passengerData = { id: dto.passengerId };

      const updatedFlight = await this.prisma.flight.update({
        where: { id },
        include: this._include,
        data: {
          availableSeats: flight.availableSeats - 1,
          passengers: { connect: { ...passengerData } },
          seats: {
            update: {
              where: { id: dto.seatId },
              data: {
                available: false,
                passenger: { connect: { ...passengerData } },
              },
            },
          },
        },
      });
      return updatedFlight;
    }
  }

  async removePassenger(id: number, dto: RemovePassengerFromFlightDto) {
    const flight = await this.prisma.flight.findUnique({ where: { id } });

    const passengerData = { id: dto.passengerId };
    const updatedFlight = await this.prisma.flight.update({
      where: { id },
      include: this._include,
      data: {
        availableSeats: flight.availableSeats + 1,
        passengers: { disconnect: { ...passengerData } },
        seats: {
          update: {
            where: { id: dto.seatId },
            data: { available: true, passenger: { disconnect: true } },
          },
        },
      },
    });

    return updatedFlight;
  }
}
