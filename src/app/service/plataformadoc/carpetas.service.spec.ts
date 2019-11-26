import { TestBed } from '@angular/core/testing';

import { CarpetasService } from './carpetas.service';

describe('CarpetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarpetasService = TestBed.get(CarpetasService);
    expect(service).toBeTruthy();
  });
});
