import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  userDetails: any[] ;
  accountDetails: any[] ;
  txnDetails: any[] ;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.user.getAllUserDetails().subscribe((user:any) =>
      {
        this.userDetails=user;
      },
      error =>{
        console.log(error);
      }
    )
  }

  updateUserAccount(status:string,accNum:string){
    this.user.updateUserAcctStatus(status,accNum).subscribe(() => {
      this.getUserDetails();
    },error =>{
      console.log(error);
    }
    )
  }

}
