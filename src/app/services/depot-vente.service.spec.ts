import { TestBed } from '@angular/core/testing';

import { DepotVenteService } from './depot-vente.service';

describe('DepotVenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepotVenteService = TestBed.get(DepotVenteService);
    expect(service).toBeTruthy();
  });
});
