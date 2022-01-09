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

const dayName: Array<string> = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss'],
})
export class HomeCalendarComponent implements OnInit {
  public calendarBoxNum: Array<number> = [];
  public selectedMonth: number;
  public selectedYear: number;

  constructor() {
    this.selectedMonth = new Date().getMonth();
    this.selectedYear = new Date().getFullYear();
    this.setCalendarBoxNum();
  }

  ngOnInit(): void {}

  increMonth() {
    if (this.selectedMonth == 11) this.selectedMonth = 0;
    else this.selectedMonth = this.selectedMonth + 1;
    this.setCalendarBoxNum();
  }

  decreMonth() {
    if (this.selectedMonth == 0) this.selectedMonth = 11;
    else this.selectedMonth = this.selectedMonth - 1;
    this.setCalendarBoxNum();
  }

  showMonth() {
    return month[this.selectedMonth];
  }

  increYear() {
    this.selectedYear = this.selectedYear + 1;
  }

  decreYear() {
    if (this.selectedYear - 1 >= new Date().getFullYear() - 1) {
      this.selectedYear = this.selectedYear - 1;
    }
  }

  showYear() {
    return this.selectedYear;
  }

  showDay(i: number) {
    let index: number = i + 1;
    let dateString: string =
      this.selectedMonth + 1 + '/' + index + '/' + this.selectedYear;

    return dayName[new Date(dateString).getDay()];
  }

  setCalendarBoxNum() {
    this.calendarBoxNum = Array(
      this.numberOfDaysInMonth(this.selectedYear, this.selectedMonth)
    )
      .fill(0)
      .map((x, i) => i);
  }

  numberOfDaysInMonth(year: number, month: number) {
    return 32 - new Date(year, month, 32).getDate();
  }
}
