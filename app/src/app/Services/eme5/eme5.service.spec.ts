import { TestBed } from '@angular/core/testing';

import { Eme5Service } from './eme5.service';

describe('Eme5Service', () => {
  let service: Eme5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eme5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
