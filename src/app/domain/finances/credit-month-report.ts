export class CreditMonthReport {
  year: number;
  month: number;

  interest: number;
  loanCapital: number;
  remainingDebt: number;

  constructor(date: Date) {
    this.month = date.getMonth();
    this.year = date.getFullYear();
  }
}
