import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selected: string;

  constructor(private token: TokenService, private router: Router) {
    this.selected = 'home';
  }

  ngOnInit(): void {
    if (!this.token.getToken()) this.router.navigate(['/login']);
  }

  receiver(x: string) {
    this.selected = x;
  }
}
