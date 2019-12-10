import { TestBed } from '@angular/core/testing';

import { BeneficiaireDonService } from './beneficiaire-don.service';

describe('BeneficiaireDonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeneficiaireDonService = TestBed.get(BeneficiaireDonService);
    expect(service).toBeTruthy();
  });
});
