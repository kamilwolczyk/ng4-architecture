import { Injectable } from '@angular/core';

@Injectable()
export class DateExtensionsService {

  addMonths(date: Date, value: number): Date {
    date.setMonth(date.getMonth() + value);
    return date;
  }

}
