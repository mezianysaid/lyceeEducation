import { TestBed } from '@angular/core/testing';

import { BakService } from './bak.service';

describe('BakService', () => {
  let service: BakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
