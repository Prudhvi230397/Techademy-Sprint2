import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { History, historyDetails } from '../models/history.model';
import { urls } from '../models/urls';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  
})
export class HistoryComponent implements OnInit {
HistoryModel:History = new History();
HistoryModels:Array<historyDetails> = new Array<historyDetails>();
urlModel: urls=new urls();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  GetDetails() {
    const urlHistory = this.urlModel.urlHistory + this.HistoryModel.emailId;
    this.http.get(urlHistory).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.HistoryModels = res;
  }
  CancelTicket(pnr:string)
  {
    const urlCancel = this.urlModel.urlCancel + pnr;
    this.http.delete(urlCancel).subscribe(res => { console.log(res) }, res => console.log(res));
  }
}
