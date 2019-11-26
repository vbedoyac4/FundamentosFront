import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformadocumentalComponent } from './plataformadocumental.component';

describe('PlataformadocumentalComponent', () => {
  let component: PlataformadocumentalComponent;
  let fixture: ComponentFixture<PlataformadocumentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformadocumentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformadocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
