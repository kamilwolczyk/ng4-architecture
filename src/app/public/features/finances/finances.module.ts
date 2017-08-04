import { NgModule } from '@angular/core';
import { FrameworkModule } from '../../../framework/framework.module';
import { AppCommonModule } from '../../../app-common/app-common.module';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';
import { CreditCalculatorService } from '../../../domain/finances/credit-calculator.service';
import { MdDatepickerModule, MdTableModule } from '@angular/material';

@NgModule({
  imports: [
    FrameworkModule,
    AppCommonModule,
    MdDatepickerModule,
    MdTableModule
  ],
  exports: [
    CreditCalculatorComponent
  ],
  providers: [
    CreditCalculatorService
  ],
  declarations: [CreditCalculatorComponent]
})
export class FinancesModule { }
