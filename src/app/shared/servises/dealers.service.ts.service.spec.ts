import { TestBed } from '@angular/core/testing';

import { Dealers.Service.TsService } from './dealers.service.ts.service';

describe('Dealers.Service.TsService', () => {
  let service: Dealers.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dealers.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
