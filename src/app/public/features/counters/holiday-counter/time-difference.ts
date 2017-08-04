export class TimeDifference {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(startDate: Date, endDate: Date) {
    const diff = endDate.getTime() - startDate.getTime();
    let msec = diff;
    this.hours = Math.floor(msec / 1000 / 60 / 60);
    msec -= this.hours * 1000 * 60 * 60;
    this.minutes = Math.floor(msec / 1000 / 60);
    msec -= this.minutes * 1000 * 60;
    this.seconds = Math.floor(msec / 1000);
    // msec -= ss * 1000;
  }
}
