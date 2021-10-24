import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selected: string;

  constructor() {
    this.selected = 'home';
  }

  ngOnInit(): void {}

  receiver(x: string) {
    this.selected = x;
  }
}
