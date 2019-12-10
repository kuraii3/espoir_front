import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaireDonComponent } from './beneficiaire-don.component';

describe('BeneficiaireDonComponent', () => {
  let component: BeneficiaireDonComponent;
  let fixture: ComponentFixture<BeneficiaireDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaireDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaireDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
