/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusinessUnitService } from './business-unit.service';

describe('Service: BusinessUnit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessUnitService],
    });
  });

  it('should ...', inject([BusinessUnitService], (service: BusinessUnitService) => {
    expect(service).toBeTruthy();
  }));
});
