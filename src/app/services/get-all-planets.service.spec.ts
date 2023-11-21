import { TestBed } from '@angular/core/testing';

import { GetAllPlanetsService } from './get-all-planets.service';

describe('GetAllPlanetsService', () => {
  let service: GetAllPlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
