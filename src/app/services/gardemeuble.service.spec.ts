import { TestBed } from '@angular/core/testing';

import { GardemeubleService } from './gardemeuble.service';

describe('GardemeubleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardemeubleService = TestBed.get(GardemeubleService);
    expect(service).toBeTruthy();
  });
});
