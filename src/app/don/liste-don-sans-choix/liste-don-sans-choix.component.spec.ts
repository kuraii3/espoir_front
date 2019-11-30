import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDonSansChoixComponent } from './liste-don-sans-choix.component';

describe('ListeDonSansChoixComponent', () => {
  let component: ListeDonSansChoixComponent;
  let fixture: ComponentFixture<ListeDonSansChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDonSansChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDonSansChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
