import { TestBed } from '@angular/core/testing';

import { CrearproyectoService } from './crearproyecto.service';

describe('CrearproyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearproyectoService = TestBed.get(CrearproyectoService);
    expect(service).toBeTruthy();
  });
});
