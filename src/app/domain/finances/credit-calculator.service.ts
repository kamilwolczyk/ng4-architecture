import { Injectable } from '@angular/core';
import { CreditMonthReport } from './credit-month-report';
import { DateExtensionsService } from '../../framework/extensions/date-extensions.service';
import { NumberExtensionsService } from '../../framework/extensions/number-extensions.service';

@Injectable()
export class CreditCalculatorService {

  constructor(
    private dateExtensions: DateExtensionsService,
    private numberExtensions: NumberExtensionsService) { }

  public recalculateCredit(amount: number, monthCount: number, startDate: Date, percentageInterest: number): CreditMonthReport[] {
    const reports: CreditMonthReport[] = [];
    const monthInterest = (1 / 12) * (percentageInterest / 100);
    const monthPayment = this.numberExtensions.round(amount / monthCount, 2);
    let debt = amount;
    let date = startDate;

    for (let i = 1; i <= monthCount; i++) {
      const report = new CreditMonthReport(date);

      report.interest = this.numberExtensions.round(monthInterest * debt, 2);
      report.loanCapital = i === monthCount ? debt : monthPayment;

      debt -= report.loanCapital;
      report.remainingDebt = debt;
      date = this.dateExtensions.addMonths(date, 1);

      reports.push(report);
    }

    return reports;
  }
}
