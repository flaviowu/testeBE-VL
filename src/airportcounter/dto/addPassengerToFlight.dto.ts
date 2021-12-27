import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class AddPassengerToFlightDto {
  @IsNotEmpty()
  @IsNumber()
  passengerId: number;

  @IsNotEmpty()
  @IsNumber()
  seatId: number;

  @IsNotEmpty()
  @IsDateString()
  currentTime: Date;
}
