import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse,HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  token:any

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("In Auth service intercept method");

    
    if (localStorage.getItem('fname') && localStorage.getItem('token')) {
      console.log("Token verified1");
      this.token = localStorage.getItem('token');
      console.log("Token verified2");
      req = req.clone({
        setHeaders: {
          "withCredentials": "true",
          "name": "Nidhi",
          Authorization: this.token
        }
      })
    }
    return next.handle(req);
  }
}
