import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.scss'],
})
export class HomeHomeComponent implements OnInit {
  userInfo: User = {
    username: '',
    score: 0,
  };

  constructor(private userSer: UserService) {}

  ngOnInit(): void {
    this.userSer.getUserInfo().subscribe((data) => {
      this.userInfo = data;
    });
  }
}
