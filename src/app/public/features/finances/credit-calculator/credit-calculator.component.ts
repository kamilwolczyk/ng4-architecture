import { CreditMonthReport } from '../../../../domain/finances/credit-month-report';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CreditCalculatorService } from "../../../../domain/finances/credit-calculator.service";

export interface CreditDetailsFormValue {
  amount: number;
  months: number
}

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.scss']
})
export class CreditCalculatorComponent implements OnInit {
  creditDetailsForm: FormGroup;
  calculationResult: CreditMonthReport[];

  constructor(private builder: FormBuilder, private calculator: CreditCalculatorService) {
    this.creditDetailsForm = builder.group({
      amount: ['', [], []],
      months: ['', [], []],
    });
  }

  ngOnInit() {
  }

  calculate(value: CreditDetailsFormValue): void {
    this.calculationResult = this.calculator.recalculateCredit(value.amount, value.months);
  }
}
