import { Component, OnInit } from '@angular/core';
import { Payee } from 'src/app/services/interfaces/Payee';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payeelist',
  templateUrl: './payeelist.component.html',
  styleUrls: ['./payeelist.component.css']
})
export class PayeelistComponent implements OnInit {
  
  accountNumber : string;
  recipientAccountNo :  string;
  accountDetails: any[] ;
  payeeDetails: any[] ;
  fromAccount:string;
  amountTransfer:string;
  remark:string;
  payee:Payee;
  alert:boolean;

  constructor(private user: UserService) {
    this.getAccountSummary();
    this.payee = new Payee();
    }

  ngOnInit(): void {
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

  getPayeeDetails(accountNo:any) {  
    this.payee.payeeAccount=accountNo;
    this.user.getRecipients(accountNo).subscribe((payee:any) =>
      {
        this.payeeDetails=payee;
 
      },
      error =>{
        console.log(error);
      }
    )
  }
 
  selectedPayee(payeeAcctNo:any){
    this.recipientAccountNo = payeeAcctNo;
  }
  onSubmit(){
    this.payee.transferDate = new Date();
    this.payee.accountNumber = this.recipientAccountNo;
    this.payee.amountTransfer = this.amountTransfer;
    this.payee.remark = this.remark;
    this.user.updateRecipient(this.payee).subscribe((repDetails:any) => {
      this.getPayeeDetails(repDetails.payeeAccount);
      this.alert=true;
    },
      error =>{
        this.alert=false;
        console.log(error);
      }
  )
  
  }
 

}
