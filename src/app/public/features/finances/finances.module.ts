import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CreditCalculatorComponent
  ],
  declarations: [CreditCalculatorComponent]
})
export class FinancesModule { }
