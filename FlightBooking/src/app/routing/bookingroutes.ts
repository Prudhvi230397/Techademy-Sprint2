
import { BookFlightComponent } from "../booking/bookFlight.component";
import { BookingComponent } from "../booking/booking.component";
import { SearchComponent } from "../booking/search.component";
import { HistoryComponent } from "../history/history.component";
import { TicketComponent } from "../ticket/ticket.component";

export const bookingroutes = [
  { path: '', component: BookingComponent },
  { path: 'Search', component: SearchComponent },
   { path: 'BookFlight', component: BookFlightComponent},
   { path: 'Ticket', component: TicketComponent },
   { path: 'History', component: HistoryComponent },
  // {path: 'BookFlight', component: SearchComponent, data: {}}
];


