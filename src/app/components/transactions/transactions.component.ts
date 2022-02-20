import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  accountNumber : any;
  accountDetails: any[] ;
  transactionDetails: any[] ;

  constructor(private user: UserService) { }

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

  getTransactions(accountNumber:any) {
    console.log(accountNumber);
    this.user.getTransactions(accountNumber).subscribe((txns:any) =>
      {
        this.transactionDetails=txns;
      },
      error =>{
        console.log(error);
      }
    )
  }

  

}
