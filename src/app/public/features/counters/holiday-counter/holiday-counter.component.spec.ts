import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCounterComponent } from './holiday-counter.component';

describe('HolidayCounterComponent', () => {
  let component: HolidayCounterComponent;
  let fixture: ComponentFixture<HolidayCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
