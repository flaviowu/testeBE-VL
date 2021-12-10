import { Airline } from '../entities/airline.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAirlineDto extends Airline {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  iataCode: string;
}
