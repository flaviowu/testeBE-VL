import { Seat } from '../../seat/entities/seat.entity';
import { Passenger } from '../../passenger/entities/passenger.entity';

export class Flight {
  id: number;
  createdAt: Date;
  flightNumber: number;
  departure: string;
  destination: string;
  eta: Date;
  etd: Date;
  price: number;
  airlineId: number;
  availableSeats: number;
  Seats: Seat[];
  Passengers: Passenger[];
}
