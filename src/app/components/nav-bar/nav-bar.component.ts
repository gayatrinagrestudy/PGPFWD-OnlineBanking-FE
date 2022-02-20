import { DashboardService } from './../../services/dashboard.service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { UserService } from './../../services/user.service';

import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 loggedIn = false;
 loggedUsername = '';



  constructor(private loginService: LoginService, private user: UserService, private dashboard : DashboardService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.loggedUsername = localStorage.getItem('loggedUsername');
   }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
