import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable()
export class HttpIntersepterService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.basicAuthenticationService.getToken();
    let username = this.basicAuthenticationService.getUser();
    if (token && username) {
     
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }
}
