import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateFlightDto {
  @IsNumber()
  flightNumber: number;

  @IsString()
  departure: string;

  @IsString()
  destination: string;

  @IsDateString()
  eta: Date;

  @IsDateString()
  etd: Date;

  @IsNumber()
  price: number;

  @IsNumber()
  airlineId: number;

  @IsNumber()
  availableSeats: number;
}
