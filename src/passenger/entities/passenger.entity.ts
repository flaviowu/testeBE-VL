import { Flight } from '../../flight/entities/flight.entity';

export class Passenger {
  id?: number;
  name: string;
  birthday: Date;
  nationality: string;
  idNumber: string;
  cpf: string;
  passport: string;
  Flights?: Flight[];
}
