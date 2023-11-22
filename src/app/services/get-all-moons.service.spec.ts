import { TestBed } from '@angular/core/testing';

import { GetAllMoonsService } from './get-all-moons.service';

describe('GetAllMoonsService', () => {
  let service: GetAllMoonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllMoonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
