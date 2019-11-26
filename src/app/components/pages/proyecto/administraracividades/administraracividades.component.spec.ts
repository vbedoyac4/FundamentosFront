import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraracividadesComponent } from './administraracividades.component';

describe('AdministraracividadesComponent', () => {
  let component: AdministraracividadesComponent;
  let fixture: ComponentFixture<AdministraracividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministraracividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministraracividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
