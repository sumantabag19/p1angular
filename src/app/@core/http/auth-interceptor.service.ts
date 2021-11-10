import { CredentialsService } from './../../auth/_services/credentials.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logger } from '../logger.service';

const log = new Logger('AuthInterceptorService');

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private credentialsService: CredentialsService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.credentialsService.isAuthenticated()) {
      // log.info(this.credentialsService.token);
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.credentialsService.token),
      });
    }
    return next.handle(req);
  }
}
