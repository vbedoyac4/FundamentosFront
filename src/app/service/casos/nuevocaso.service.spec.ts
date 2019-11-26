import { TestBed } from '@angular/core/testing';

import { NuevocasoService } from './nuevocaso.service';

describe('NuevocasoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuevocasoService = TestBed.get(NuevocasoService);
    expect(service).toBeTruthy();
  });
});
