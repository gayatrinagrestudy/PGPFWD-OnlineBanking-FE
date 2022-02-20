import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9595"
  

  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    localStorage.setItem("loggedUsername",credentials.username);
    return this.http.post(`${this.url}/token`, credentials);
  }

  loginUser(token)
  {
    localStorage.setItem("token", token)
    return true;

  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token == '' || token==null){
      return false;
    } 
    return true;
  }

  logout(){
    localStorage.removeItem("loggedUsername");
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getUserName(){
    return localStorage.getItem("loggedUsername");
  }
}
