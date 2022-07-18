import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BookFlight, Passenger } from '../models/bookFlight.model';
import { BookFlightServer } from '../models/bookFlightToServer.model';
import { urls } from '../models/urls';

@Component({
    selector: 'app-bookFlight',
    templateUrl: './bookFlight.component.html',

})
export class BookFlightComponent implements OnInit {

    constructor(private http: HttpClient,  private _router:Router) {
        //this.name=this._router.getCurrentNavigation().extras.state.boarding;
        console.log(this._router.getCurrentNavigation());
     }
    BookFlightModel: BookFlight = new BookFlight();
    PassengerModel: Passenger = new Passenger();
    PassengerModels: Array<Passenger> = new Array<Passenger>();
    BookFlightServerModel: BookFlightServer = new BookFlightServer();
    urlsModel: urls=new urls();

    
    ngOnInit(): void {
        this.BookFlightModel.boardingPlace=history.state.boarding;
        this.BookFlightModel.destination=history.state.destination;
        this.BookFlightModel.flightNo=history.state.flightNo;
        this.BookFlightModel.startDateTime=history.state.startDateTime;
        this.BookFlightModel.endDateTime=history.state.endDateTime;
        this.BookFlightModel.isRoundTrip=history.state.isRoundTrip;
        this.BookFlightModel.roundTripFlightNo=history.state.roundTripFlightNo;
        this.BookFlightModel.roundTripStartDateTime=history.state.roundTripStartDateTime;
        this.BookFlightModel.roundTripEndDateTime=history.state.roundTripEndDateTime;
      
       // console.log(this.name+" Oninit")
       
    }
    AddPassenger() {
        this.PassengerModels.push(this.PassengerModel);
        console.log(this.PassengerModels);
        this.PassengerModel = new Passenger();
    }
    BookFlight() {
       
        
        this.BookFlightServerModel.boarding= this.BookFlightModel.boardingPlace,
        this.BookFlightServerModel.flightNo= this.BookFlightModel.flightNo,
        this.BookFlightServerModel.destination= this.BookFlightModel.destination,
        this.BookFlightServerModel.startDateTime= (this.BookFlightModel.startDateTime),
        this.BookFlightServerModel.isRoundTrip= Boolean(this.BookFlightModel.isRoundTrip),
        this.BookFlightServerModel.endDateTime= this.BookFlightModel.endDateTime,
        //this.BookFlightServerModel.ticketCost= Number(this.BookFlightModel.ticketCost),
        this.BookFlightServerModel.emailId= this.BookFlightModel.emailId,
        this.BookFlightServerModel.noOfSeats= this.BookFlightModel.noOfSeats,
        this.BookFlightServerModel.roundTripStartDateTime= this.BookFlightModel.roundTripStartDateTime,
        this.BookFlightServerModel.roundTripEndDateTime= this.BookFlightModel.roundTripEndDateTime,
        this.BookFlightServerModel.roundTripFlightNo= this.BookFlightModel.roundTripFlightNo,
        this.BookFlightServerModel.passenger=this.PassengerModels;
           
        //this.BookFlightModel.passenger=this.PassengerModels;
        //this.BookFlightServerModel. = this.BookFlightModel;
         console.log(this.BookFlightServerModel);
        // console.log(bookflight);
        const urlbook:string=this.urlsModel.urlBook+this.BookFlightModel.flightNo;
        this.http.post(urlbook, this.BookFlightServerModel).subscribe(res => console.log(res), res => console.log(res));
        // this.SearchModel = new search();
    }
}
