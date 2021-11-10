import { PaginatedResult } from '@app/@shared/_models/pagination';
import { Observable } from 'rxjs';
import { BusinessUnit } from './../_models/business-unit';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BusinessUnitService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  filter(
    orgId: number,
    page?: number,
    itemsPerPage?: number,
    searchParams?: any
  ): Observable<PaginatedResult<BusinessUnit[]>> {
    const paginatedResult: PaginatedResult<BusinessUnit[]> = new PaginatedResult<BusinessUnit[]>();

    let httpParams = new HttpParams();

    if (page != null && itemsPerPage != null) {
      httpParams = httpParams.append('PageNumber', page.toString());
      httpParams = httpParams.append('PageSize', itemsPerPage.toString());
    }

    if (searchParams != null) {
      httpParams = httpParams.append('Order', searchParams.order);
      httpParams = httpParams.append('OrderBy', searchParams.orderBy);
      httpParams = httpParams.append('SearchText', searchParams.searchText);
    }

    return this.http
      .get<BusinessUnit[]>(this.baseUrl + orgId + '/businessunit/search', { observe: 'response', params: httpParams })
      .pipe(
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }

  getAll(orgId: number) {
    return this.http.get(this.baseUrl + orgId + '/businessunit/getall');
  }

  get(id: number, orgId: number) {
    return this.http.get(this.baseUrl + orgId + '/businessunit/' + id);
  }

  add(data: BusinessUnit, orgId: number) {
    return this.http.post(this.baseUrl + orgId + '/businessunit/add', data);
  }

  update(data: BusinessUnit, id: number, orgId: number) {
    return this.http.post(this.baseUrl + orgId + '/businessunit/update/' + id, data);
  }

  delete(id: number, orgId: number) {
    return this.http.post(this.baseUrl + orgId + '/businessunit/delete/' + id, {});
  }
}
