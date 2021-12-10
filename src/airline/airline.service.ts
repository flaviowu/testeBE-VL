import { Injectable } from '@nestjs/common';
// import { prisma, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';

@Injectable()
export class AirlineService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAirlineDto) {
    const data = { ...dto };
    return this.prisma.airline.create({ data });
  }

  findAll() {
    return this.prisma.airline.findMany();
  }

  findOne(id: number) {
    return this.prisma.airline.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateAirlineDto) {
    const data = { ...dto };
    return this.prisma.airline.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.airline.delete({ where: { id } });
  }
}
