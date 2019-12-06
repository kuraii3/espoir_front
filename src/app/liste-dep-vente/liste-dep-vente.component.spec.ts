import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepVenteComponent } from './liste-dep-vente.component';

describe('ListeDepVenteComponent', () => {
  let component: ListeDepVenteComponent;
  let fixture: ComponentFixture<ListeDepVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDepVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDepVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
