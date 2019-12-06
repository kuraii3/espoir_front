import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardeMeubleComponent } from './garde-meuble.component';

describe('GardeMeubleComponent', () => {
  let component: GardeMeubleComponent;
  let fixture: ComponentFixture<GardeMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardeMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardeMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
