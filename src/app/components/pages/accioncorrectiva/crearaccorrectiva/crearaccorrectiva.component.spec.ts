import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearaccorrectivaComponent } from './crearaccorrectiva.component';

describe('CrearaccorrectivaComponent', () => {
  let component: CrearaccorrectivaComponent;
  let fixture: ComponentFixture<CrearaccorrectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearaccorrectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearaccorrectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
