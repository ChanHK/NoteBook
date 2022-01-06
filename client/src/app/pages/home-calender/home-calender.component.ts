import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-calender',
  templateUrl: './home-calender.component.html',
  styleUrls: ['./home-calender.component.scss']
})
export class HomeCalenderComponent implements OnInit {
  public calenderBoxNum: Array<number>;

  constructor() {
    this.calenderBoxNum = Array(35).fill(0).map((x, i) => i);
   }

  ngOnInit(): void {
  }

}
