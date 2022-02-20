import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   credentials={
    username:'',
    password:''
  }

  loginfail:boolean;

  constructor(private  loginService :LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.credentials.username!=null && this.credentials.username!=null 
      && this.credentials.username!='' && this.credentials.password!=''){
          this.loginService.generateToken(this.credentials).subscribe(
          (response:any) => {
            this.loginService.loginUser(response.token);  
             window.location.href="/dashboard"
           },
          error => {
            this.loginfail = true;
            console.log("error ------- "+error);
          }
        );

    }
    
  }
}
