import { Payee } from 'src/app/services/interfaces/Payee';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceRequest } from './interfaces/ServiceRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  dashboardurl="http://localhost:9595/dashboard"
  txnurl="http://localhost:9595/transactions"
  baseurl="http://localhost:9595"

  constructor(private http : HttpClient,private loginService: LoginService) {
    
   }
  
   getUser() {
     console.log(`${this.loginService.getUserName()}`);
     return this.http.get(`${this.dashboardurl}/users/${this.loginService.getUserName()}`) 
   }

   getAccountSummary() {
       return this.http.get(`${this.dashboardurl}/users/accsummary/${this.loginService.getUserName()}`) 
  }

  getTransactions(accountNumber:any) {
    return this.http.get(`${this.txnurl}/account/${accountNumber}`) 
  }

  getRecipients(accountNumber:any) {
    return this.http.get(`${this.baseurl}/user/recipient/${accountNumber}`) 
  }

  getServiceRequests(accountNumber:any) {
    return this.http.get(`${this.baseurl}/user/sericerequests/${accountNumber}`) 
   
  }
  
  getUserAccount() {
    return this.http.get(`${this.baseurl}/user/accts`) 
   
  }

  createServiceRequests(serviceRequest:any): Observable<any>{
    serviceRequest.accountNumber = JSON.stringify(serviceRequest.accountNumber);
    return this.http.post<any>(`${this.baseurl}/user/sericerequests/create`, serviceRequest);  
  }

   updateRecipient(payee:any): Observable<any>{
    return this.http.post<any>(`${this.baseurl}/user/recipient/amtcredited`, payee);  
  }
}
