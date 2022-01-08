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

@Component({
  selector: 'app-home-calender',
  templateUrl: './home-calender.component.html',
  styleUrls: ['./home-calender.component.scss'],
})
export class HomeCalenderComponent implements OnInit {
  public calenderBoxNum: Array<number>;
  public monthNum: number;
  public year: number;

  constructor() {
    this.calenderBoxNum = Array(35)
      .fill(0)
      .map((x, i) => i);

    this.monthNum = new Date().getMonth();
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}

  increMonth() {
    if (this.monthNum == 11) this.monthNum = 0;
    else this.monthNum = this.monthNum + 1;
  }

  decreMonth() {
    if (this.monthNum == 0) this.monthNum = 11;
    else this.monthNum = this.monthNum - 1;
  }

  showMonth() {
    return month[this.monthNum];
  }

  increYear() {
    this.year = this.year + 1;
  }

  decreYear() {
    if (this.year - 1 >= new Date().getFullYear() - 1) this.year = this.year - 1;
  }

  showYear() {
    return this.year;
  }
}
