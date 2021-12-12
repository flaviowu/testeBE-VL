export class CreateFlightDto {
  flightNumber: number;
  departure: string;
  destination: string;
  eta: Date;
  etd: Date;
  price: number;
  airlineId: number;
  availableSeats: number;
}
