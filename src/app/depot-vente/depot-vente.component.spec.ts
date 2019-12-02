import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotVenteComponent } from './depot-vente.component';

describe('DepotVenteComponent', () => {
  let component: DepotVenteComponent;
  let fixture: ComponentFixture<DepotVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
