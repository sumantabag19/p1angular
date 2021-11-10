import { Injectable } from '@angular/core';
import { CredentialsService } from './../../auth/_services/credentials.service';

import { catchError } from 'rxjs/operators';
import { BusinessUnitService } from './../_services/business-unit.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BusinessUnit } from './../_models/business-unit';

@Injectable({ providedIn: 'root' })
export class BuListResolver implements Resolve<BusinessUnit[]> {
  pageNumber = 1;
  itemsPerPage = 5;
  orgId = this.credService.orgId;

  constructor(private buService: BusinessUnitService, private credService: CredentialsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BusinessUnit[]> {
    return this.buService.filter(this.orgId, this.pageNumber, this.itemsPerPage, null).pipe(
      catchError(() => {
        console.log('Failed to retrive data');
        return of(null);
      })
    );
  }
}
