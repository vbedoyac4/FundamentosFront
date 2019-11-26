import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarcasosComponent } from './administrarcasos.component';

describe('AdministrarcasosComponent', () => {
  let component: AdministrarcasosComponent;
  let fixture: ComponentFixture<AdministrarcasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarcasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarcasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
