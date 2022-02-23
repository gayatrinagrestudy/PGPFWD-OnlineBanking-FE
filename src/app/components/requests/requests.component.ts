import { ServiceRequest } from './../../services/interfaces/ServiceRequest';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestDetails: any[] ;
  accountNumber : string;
  accountDetails: any[] ;
  chequeBookPages = 0;
  serviceReq: ServiceRequest;
  alert:boolean;
  constructor(private user: UserService) {
    this.serviceReq = new ServiceRequest();
   
   }

  ngOnInit(): void {
    this.getAccountSummary();
 
  }
  
  getAccountSummary() {
    this.user.getAccountSummary().subscribe((account:any) =>
      {
        this.accountDetails=account;
      },
      error =>{
        console.log(error);
      }
    )
  }

  getServiceRequests(accountNumber:any) {  
    this.serviceReq.reqStatus = 0;
    this.serviceReq.requestedDated = new Date();
    this.serviceReq.accountNumber = accountNumber;
    this.user.getServiceRequests(accountNumber).subscribe((reqDetails:any) =>
      {
        this.requestDetails=reqDetails;
      
      },
      error =>{
        console.log(error);
      }
    )
  }

  onSubmit(){
    this.serviceReq.chequeBookPages = this.chequeBookPages;
    this.user.createServiceRequests(this.serviceReq).subscribe((result:ServiceRequest) =>
    {
      this.requestDetails.push(result);
      this.alert=true;
    },
    error =>{
      console.log(error);
      this.alert=false;
    }
    )
  }

}
