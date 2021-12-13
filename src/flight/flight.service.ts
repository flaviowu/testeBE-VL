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
    const seats = async () => {
      for (let i = 1; i == dto.availableSeats; i++) {
        await this.prisma.seat.create({ number: i });
      }
      return;
    };
    const data = { ...dto, seats };
    const createdFlight = await this.prisma.flight.create({ ...data });
    return 'This action adds a new flight';
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

  update(id: number, dto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return this.prisma.flight.delete({ where: { id } });
  }
}
