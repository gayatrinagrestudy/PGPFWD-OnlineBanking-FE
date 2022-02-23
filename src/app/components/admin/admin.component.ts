import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private  loginService :LoginService) { }

  ngOnInit(): void {
  }

  credentials={
    username:'',
    password:''
  }

  loginfail:boolean;

  onSubmit(){
    if(this.credentials.username!=null && this.credentials.username!=null 
      && this.credentials.username!='' && this.credentials.password!=''){
          this.loginService.generateToken(this.credentials).subscribe(
          (response:any) => {
            this.loginService.loginUser(response.token);  
             window.location.href="/admindashboard"
           },
          error => {
            this.loginfail = true;
            console.log("error ------- "+error);
          }
        );

    }
    
  }

}
