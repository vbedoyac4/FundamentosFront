import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocasoComponent } from './nuevocaso.component';

describe('NuevocasoComponent', () => {
  let component: NuevocasoComponent;
  let fixture: ComponentFixture<NuevocasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevocasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevocasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
