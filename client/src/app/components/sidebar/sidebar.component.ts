import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public selected: string;

  @Output() sender = new EventEmitter();

  constructor() {
    this.selected = '';
  }

  ngOnInit(): void {
    $('.sidebar-link').on('click', (event) => {
      $('.sidebar-link').removeClass('is-active');
      $(event.currentTarget).addClass('is-active');
    });

    $(window)
      .resize(function () {
        let width: any = $(window).width();
        if (width > 1090) {
          $('.sidebar').removeClass('collapse');
        } else {
          $('.sidebar').addClass('collapse');
        }
      })
      .resize();
  }

  handleClick = (x: string) => {
    this.selected = x;
    this.sender.emit(this.selected);
  };
}
