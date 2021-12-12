import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Passenger } from './entities/passenger.entity';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePassengerDto): Promise<Passenger> {
    const data: Prisma.PassengerUncheckedCreateInput = {
      ...dto,
    };
    const createPassenger = await this.prisma.passenger.create({ data });
    return { ...createPassenger };
  }

  findAll() {
    return this.prisma.passenger.findMany();
  }

  findOne(id: number) {
    return this.prisma.passenger.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdatePassengerDto) {
    const data: Prisma.PassengerUncheckedUpdateInput = { ...dto };
    return this.prisma.passenger.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.passenger.delete({ where: { id } });
  }
}
