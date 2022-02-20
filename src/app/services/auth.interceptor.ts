import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.loginService.getToken();
        console.log("AuthInterceptor ====>> " +token);
        if(token!=null){
            req = req.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`}})
                    //Authorization: 'Bearer xx-yy-ss'}})
        }
        console.log("newReq ====>> " +req.headers.get);
        return next.handle(req);
        
       // throw new Error("Method not implemented.");
    }
}