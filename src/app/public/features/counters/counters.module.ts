import { AppCommonModule } from '../../../app-common/app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayCounterComponent } from './holiday-counter/holiday-counter.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    HolidayCounterComponent
  ],
  declarations: [HolidayCounterComponent]
})
export class CountersModule { }
