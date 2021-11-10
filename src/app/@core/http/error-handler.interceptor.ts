import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { Logger } from '../logger.service';
import { Router } from '@angular/router';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request).pipe(catchError((error:any) => this.errorHandler(error)));
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error.status === 0) {
          this.router.navigate(['/home']);
        }
        if (error.status === 401) {
          const errorMessage = error.error === null ? error.statusText : error.error;
          return throwError(errorMessage);
        }
        let modelStateError = '';

        if (error.status === 400) {
          const serverError = error.error;
          if (typeof serverError.errors === 'object') {
            for (const key in serverError.errors) {
              if (serverError.errors[key]) {
                modelStateError += serverError.errors[key][0] + '\n';
              }
            }
          } else if (serverError !== '') {
            return throwError(serverError);
          }
        }
        return throwError(modelStateError || 'Server error');
      })
    );
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    throw response;
  }
}
