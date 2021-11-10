/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HmacInterceptorService } from './hmac-interceptor.service';

describe('Service: HmacInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HmacInterceptorService],
    });
  });

  it('should ...', inject([HmacInterceptorService], (service: HmacInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
