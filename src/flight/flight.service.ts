import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.FlightInclude = {
    airline: true,
    seats: true,
    passengers: true,
  };

  async create(dto: CreateFlightDto) {
    const eta = new Date(dto.eta);
    const etd = new Date(dto.etd);
    delete dto.eta;
    delete dto.etd;

    const seatNumbers = Array.from(
      { length: dto.availableSeats },
      (x, i) => i + 1,
    );

    const data: Prisma.FlightCreateInput = {
      ...dto,
      eta,
      etd,
      seats: {
        create: seatNumbers.map((seatNumber) => ({ seatNumber: seatNumber })),
      },
    };

    const createdFlight = await this.prisma.flight.create({
      data,
    });

    return createdFlight;
  }

  findAll() {
    return this.prisma.flight.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.flight.findUnique({
      where: { id },
      include: this._include,
    });
  }

  async update(id: number, dto: UpdateFlightDto) {
    const data = { ...dto };
    const updatedFlight = await this.prisma.flight.update({
      where: { id },
      data,
    });
    return updatedFlight;
  }

  remove(id: number) {
    return this.prisma.flight.delete({ where: { id } });
  }
}
