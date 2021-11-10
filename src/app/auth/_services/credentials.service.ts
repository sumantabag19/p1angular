import { Credentials } from './../_models/credentials';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  jwtHelper = new JwtHelperService();

  private _credentials: Credentials | null = null;

  constructor() {
    const user = sessionStorage.getItem('user') || localStorage.getItem('user');
    const token = sessionStorage.getItem('id_token') || localStorage.getItem('id_token');
    const refresh_token = sessionStorage.getItem('refresh_token') || localStorage.getItem('refresh_token');
    const expires_in = sessionStorage.getItem('expires_in') || localStorage.getItem('expires_in');

    this._credentials = {
      user: user ? JSON.parse(JSON.stringify(user)) : null,
      token: token ? JSON.parse(JSON.stringify(token)) : null,
      refresh_token: refresh_token ? JSON.parse(JSON.stringify(refresh_token)) : null,
      expires_in: expires_in ? JSON.parse(JSON.stringify(expires_in)) : null,
    };
  }

  setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem('user', JSON.stringify(credentials.user));
      storage.setItem('id_token', JSON.stringify(credentials.token));
      storage.setItem('refresh_token', JSON.stringify(credentials.refresh_token));
      storage.setItem('expires_in', JSON.stringify(credentials.expires_in));

      localStorage.setItem('remember', JSON.stringify(remember));
    } else {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('id_token');
      sessionStorage.removeItem('refresh_token');
      sessionStorage.removeItem('expires_in');

      localStorage.removeItem('user');
      localStorage.removeItem('id_token');
      localStorage.removeItem('remember');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('expires_in');
    }
  }

  isAuthenticated(): boolean {
    const storage = JSON.parse(localStorage.getItem('remember')) ? localStorage : sessionStorage;
    const token = storage.getItem('id_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  get currentUser(): any {
    return this._credentials.user;
  }

  get token(): string {
    return this._credentials.token;
  }

  get decodedToken(): any {
    return this.jwtHelper.decodeToken(this._credentials.token);
  }

  get orgId(): number {
    return this.jwtHelper.decodeToken(this._credentials.token).orgId;
  }
}
