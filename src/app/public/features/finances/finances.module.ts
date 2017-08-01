import { NgModule } from '@angular/core';
import { AppCommonModule } from '../../../app-common/app-common.module';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';
import { CreditCalculatorService } from "../../../domain/finances/credit-calculator.service";

@NgModule({
  imports: [
    AppCommonModule
  ],
  exports: [
    CreditCalculatorComponent
  ],
  providers:[
    CreditCalculatorService
  ],
  declarations: [CreditCalculatorComponent]
})
export class FinancesModule { }
