import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/userData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent implements OnInit {

  
  loginModel:userdata=new userdata();
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  Login(){
    var details={
      userName:this.loginModel.userName,
      password:this.loginModel.password,
    }
    this._auth.loginUser(details).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['']);
    }, res => console.log(res));
  }
  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.loginModel.formUserGroup.controls[controlname].hasError(typeofvalidator);
  }
}
