import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearinconformidadComponent } from './crearinconformidad.component';

describe('CrearinconformidadComponent', () => {
  let component: CrearinconformidadComponent;
  let fixture: ComponentFixture<CrearinconformidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearinconformidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearinconformidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
