import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookFlight } from '../models/bookFlight.model';
import { ticket, ticketDetails } from '../models/ticket';
import { urls } from '../models/urls';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',

})
export class TicketComponent implements OnInit {
  TicketModel: ticket = new ticket()
  TicketDetailsModel: ticketDetails = new ticketDetails();
  TicketDetailsModels: Array<ticketDetails> = new Array<ticketDetails>();

  urlModel: urls = new urls();
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  GetDetails() {
    const urlticket = this.urlModel.urlTickepnr + this.TicketModel.pnr
    this.http.get(urlticket).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.TicketDetailsModels = res;
  }
}
