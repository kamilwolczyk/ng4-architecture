import { TimeDifference } from './time-difference';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

interface IHolidayCounterFormValue {
  startDate: Date;
}

@Component({
  selector: 'app-holiday-counter',
  templateUrl: './holiday-counter.component.html',
  styleUrls: ['./holiday-counter.component.scss']
})
export class HolidayCounterComponent implements OnInit {
  counterForm: FormGroup;
  timer: Observable<number>;
  remainingTime: TimeDifference;

  constructor(builder: FormBuilder) {
    this.counterForm = builder.group({
      startDate: [new Date(), [], []]
    });
  }

  ngOnInit() {
  }

  selectDate(value: IHolidayCounterFormValue) {
    const holidayTime = new Date(value.startDate.getFullYear(), value.startDate.getMonth(), value.startDate.getDay(), 16, 0, 0);
    this.timer = Observable.timer(0, 1000);

    this.timer.subscribe(() => {
      this.remainingTime = new TimeDifference(new Date(), holidayTime);
    });
  }

  restart() {

  }

}
