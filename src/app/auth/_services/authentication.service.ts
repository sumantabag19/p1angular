import { CredentialsService } from './credentials.service';
import { environment } from './../../../environments/environment';
import { EVAAuthorizeUserRequest, EVAConnectTokenResponse } from './../_models/login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UrlConstant } from '@app/constant/url.constant';
import { map } from 'rxjs/internal/operators/map';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.serverUrl + 'auth/';
  constructor(private http: HttpClient, private credentialsService: CredentialsService) {}

  getBUListForUser(username: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('username', username);
    return this.http.get(this.baseUrl + 'getBuListByUsername', { params: httpParams });
  }

  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }

  /// <summary>
  /// Authenticate user details and generate code
  /// </summary>
  authorizeUser(inputBody: EVAAuthorizeUserRequest) {
    let bodyString =
      'username=' +
      inputBody.username +
      '&password=' +
      encodeURIComponent(inputBody.password) +
      '&redirect_uri=' +
      environment.redirect_uri +
      '&response_type=' +
      environment.response_type +
      '&client_id=' +
      environment.client_id +
      '&state=' +
      Guid.create() +
      '&scope=' +
      environment.scope;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        WithCredentials: 'false',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    return this.http.post(UrlConstant.evaAuthorizeUserUrl, bodyString, httpOptions);
  }
  /// <summary>
  /// Authenticate user details and generate token
  /// </summary>
  getAccessToken(code: string): Observable<EVAConnectTokenResponse> {
    let bodyString =
      'grant_type=' +
      environment.grant_type +
      '&redirect_uri=' +
      environment.redirect_uri +
      '&client_id=' +
      environment.client_id +
      '&code=' +
      encodeURIComponent(code);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        WithCredentials: 'false',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    return this.http
      .post(UrlConstant.evaAuthorizeConnectTokenUrl, bodyString, httpOptions)
      .pipe(map((res: EVAConnectTokenResponse) => res));
  }
}
