import { CredentialsService } from '@app/auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  baseUrl = environment.serverUrl + 'menu/';
  constructor(private http: HttpClient, private credsService: CredentialsService) {}

  getMenues() {
    let httpParams = new HttpParams();

    if (this.credsService.currentUser.buId > 0) {
      httpParams = httpParams.append('buId', this.credsService.currentUser.buId);
    }

    return this.http.get(this.baseUrl + 'getAll/' + this.credsService.currentUser.id, { params: httpParams });
  }
}
