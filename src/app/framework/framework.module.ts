import { NgModule } from '@angular/core';
import { NumberExtensionsService } from './extensions/number-extensions.service';
import { DateExtensionsService } from './extensions/date-extensions.service';

@NgModule({
  providers: [
    NumberExtensionsService,
    DateExtensionsService
  ]
})
export class FrameworkModule { }
