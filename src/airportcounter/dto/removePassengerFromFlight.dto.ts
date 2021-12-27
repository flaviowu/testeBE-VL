import { IsNotEmpty, IsNumber } from 'class-validator';

export class RemovePassengerFromFlightDto {
  @IsNotEmpty()
  @IsNumber()
  passengerId: number;

  @IsNotEmpty()
  @IsNumber()
  seatId: number;
}
