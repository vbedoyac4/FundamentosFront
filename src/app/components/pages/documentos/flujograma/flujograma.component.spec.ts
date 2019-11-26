import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujogramaComponent } from './flujograma.component';

describe('FlujogramaComponent', () => {
  let component: FlujogramaComponent;
  let fixture: ComponentFixture<FlujogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
