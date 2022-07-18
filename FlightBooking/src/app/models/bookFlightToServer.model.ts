import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class BookFlightServer {
  startDateTime: string = '';
  endDateTime: string = '';
  flightNo: string = '';
 // ticketCost: number = 0;
 boarding: string = '';
  destination: string = '';
  emailId: string = '';
  noOfSeats: number = 0;
  isRoundTrip: boolean = false;
  roundTripStartDateTime: string = '';
  roundTripEndDateTime: string = '';
  roundTripFlightNo: string = '';
  passenger: Array<Passenger> = new Array<Passenger>();
  

  constructor() {
  }
  

  
}

export class Passenger {
  passengerName: string = '';
  gender: string = '';
  seatNo: string = '';
  meal: string = '';
  nationalId: string = '';
  age: number = 0;
}
