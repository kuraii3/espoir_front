import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDonComponent } from './edit-don.component';

describe('EditDonComponent', () => {
  let component: EditDonComponent;
  let fixture: ComponentFixture<EditDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
