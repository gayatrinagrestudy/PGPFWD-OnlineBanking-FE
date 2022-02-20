import { IUser } from 'src/app/services/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  userDetails: any[] ;
  accountDetails: any[] ;
  txnDetails: any[] ;
  constructor( private user: UserService) { }

  ngOnInit(): void {

    this.getUserDetails();
    this.getAccountSummery();

  }

  getUserDetails() {
    this.user.getUser().subscribe((user:any) =>
      {
        this.userDetails=user;
      },
      error =>{
        console.log(error);
      }
    )
  }

  getAccountSummery() {
    this.user.getAccountSummary().subscribe((account:any) =>
      {
        this.accountDetails=account;
        console.log(this.accountDetails[0].accountNumber);
      },
      error =>{
        console.log(error);
      }
    )
  }

  getTransactions() {
    this.user.getAccountSummary().subscribe((txn:any) =>
      {
        this.txnDetails=txn;
        console.log(this.txnDetails);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
