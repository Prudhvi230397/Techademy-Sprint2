import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { airline } from '../models/airline';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
 
})
export class AddAirlineComponent implements OnInit {

  AirLineModel:airline= new airline();
  urlAirline:string="https://localhost:44339/api/Airline/register";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  AddAirline()
  {
    var Airlinedetails = {
      airlineName: this.AirLineModel.airlineName,
      airlineLogo: this.AirLineModel.airlineLogo,
      contactNo: Number(this.AirLineModel.contactNo),
      address: this.AirLineModel.address,
      isBlocked: Boolean(this.AirLineModel.isBlocked)
    }
    console.log(Airlinedetails);
    console.log(this.AirLineModel);
   
    this.http.post(this.urlAirline, Airlinedetails).subscribe(res => { console.log(res) },  res => console.log(res));
    this.AirLineModel = new airline();
  }
GetResponse(res:Object)
{
  alert(res.toString);
  if(res)
  {
alert("inside");
  }
}
  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.AirLineModel.formAirlineGroup.controls[controlname].hasError(typeofvalidator);
  }
}
