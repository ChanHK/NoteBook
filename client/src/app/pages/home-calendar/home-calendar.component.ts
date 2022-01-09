import { Component, OnInit } from '@angular/core';

const month: Array<string> = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const day: Array<string> = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss'],
})
export class HomeCalendarComponent implements OnInit {
  public calendarBoxNum: Array<number> = [];
  public monthNum: number;
  public year: number;
  public day: string;
  public firstDay: number;

  constructor() {
    this.monthNum = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.day = day[0];
    this.setCalendarBoxNum();
    this.firstDay = new Date(this.year, this.monthNum).getDay();
  }

  ngOnInit(): void {}

  increMonth() {
    if (this.monthNum == 11) this.monthNum = 0;
    else this.monthNum = this.monthNum + 1;
    this.setCalendarBoxNum();
  }

  decreMonth() {
    if (this.monthNum == 0) this.monthNum = 11;
    else this.monthNum = this.monthNum - 1;
    this.setCalendarBoxNum();
  }

  showMonth() {
    return month[this.monthNum];
  }

  increYear() {
    this.year = this.year + 1;
  }

  decreYear() {
    if (this.year - 1 >= new Date().getFullYear() - 1)
      this.year = this.year - 1;
  }

  showYear() {
    return this.year;
  }

  showDay(i: number) {
    let index: number = i + 1;
    this.day =
      day[
        new Date(
          (this.monthNum + 1).toString() +
            '/' +
            index.toString() +
            '/' +
            this.year.toString()
        ).getDay()
      ];
    return this.day;
  }

  setCalendarBoxNum() {
    this.calendarBoxNum = Array(this.daysInMonth(this.year, this.monthNum))
      .fill(0)
      .map((x, i) => i);
  }

  daysInMonth(year: number, month: number) {
    return 32 - new Date(year, month, 32).getDate();
  }
}
