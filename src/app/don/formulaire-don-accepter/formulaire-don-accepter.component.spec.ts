import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDonAccepterComponent } from './formulaire-don-accepter.component';

describe('FormulaireDonAccepterComponent', () => {
  let component: FormulaireDonAccepterComponent;
  let fixture: ComponentFixture<FormulaireDonAccepterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDonAccepterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDonAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
