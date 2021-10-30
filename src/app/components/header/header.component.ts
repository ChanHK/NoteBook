import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
