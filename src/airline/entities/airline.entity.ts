import { Flight } from '../../flight/entities/flight.entity';

export class Airline {
  id?: number;
  companyName: string;
  iataCode: string;
  flights?: Flight[];
}
