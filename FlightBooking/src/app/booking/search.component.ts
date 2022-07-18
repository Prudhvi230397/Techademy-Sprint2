import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { search } from '../models/search.model';
import { Onward, RoundTrip, SearchResults } from '../models/searchresults.model';
import { urls } from '../models/urls';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
 
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient, private _router:Router) { }
SearchModel:search =new search();
urlsModel:urls = new urls();
SearchResultsModel:SearchResults =new SearchResults();
OnwardModels:Array<Onward> = new Array<Onward>()
RoundTripModels: Array<RoundTrip> = new Array<RoundTrip>();
OnwardModel: Onward=new Onward();
RoundTripModel:RoundTrip=new RoundTrip();
  ngOnInit(): void {
  }
  SearchFlight()
  {
    var searchDetails = {
      boardingPlace: this.SearchModel.boardingPlace,
      destination: this.SearchModel.destination,
      startDateTime: (this.SearchModel.startDateTime),
      isRoundTrip: Boolean(this.SearchModel.isRoundTrip),
      roundStartDateTime: this.SearchModel.roundStartDateTime,
    }
    console.log(this.SearchResultsModel);
    console.log(searchDetails);
   console.log(this.SearchModel);
  
   
    this.http.post(this.urlsModel.urlsearch, searchDetails).subscribe(res => this.GetFromServer(res),  res => console.log(res));
   // this.SearchModel = new search();
  }
  GetFromServer(res: any) {
    console.log(res);
    this.OnwardModels = res.onward;
    this.RoundTripModels = res.roundTrip;
  }
  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.SearchModel.formSearchGroup.controls[controlname].hasError(typeofvalidator);
  }
  selectedRowOnward(res:Onward)
  {
  this.OnwardModel=res;
  }
  selectedRowRoundTrip(res:RoundTrip)
  {
  this.RoundTripModel=res;
  }
  navigateToBookTicket()
  {

    var toData={
      boarding:this.SearchModel.boardingPlace,
      destination:this.SearchModel.destination,
      isRoundTrip:this.SearchModel.isRoundTrip,
      startDateTime:this.SearchModel.startDateTime,
      endDateTime:this.OnwardModel.startDateTime,
      roundTripStartDateTime:this.SearchModel.roundStartDateTime,
      roundTripEndDateTime:this.RoundTripModel.startDateTime,
      flightNo:this.OnwardModel.flightNo,
      roundTripFlightNo:this.RoundTripModel.flightNo,
    }
    console.log(toData);
    this._router.navigate(['Booking/BookFlight'], {state:toData});
  }

  
}
