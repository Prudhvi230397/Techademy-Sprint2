import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


import { CommonModule } from '@angular/common';

// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SearchComponent } from './search.component';
import { BookingComponent } from './booking.component';
import { bookingroutes } from '../routing/bookingroutes';
import { BookFlightComponent } from './bookFlight.component';
import { TicketComponent } from '../ticket/ticket.component';
import { HistoryComponent } from '../history/history.component';
import { CancelComponent } from '../cancel/cancel.component';

@NgModule({
  declarations: [
    SearchComponent,
    BookingComponent,
    BookFlightComponent,
    TicketComponent,
    HistoryComponent,
    CancelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(bookingroutes),
    HttpClientModule,
    ReactiveFormsModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // })
  ],
  providers: [AuthService],
  bootstrap: [BookingComponent]
})
export class BookingModule { }
