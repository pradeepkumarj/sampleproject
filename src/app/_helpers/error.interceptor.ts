// created by : Kumaran V
// Created At: 22-07-2019  (12:15 pm) 
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err,res) => {
            console.log(res)
            if (err.status === 401) {
                console.log('error response')
            }
            console.log(err)
            const error = err.error || err.statusText;
            return throwError(error);
        }))
      
    }
}


