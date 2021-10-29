import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

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
    if (!this.token.getToken()) this.toLoginPage();
  }

  receiver(x: string) {
    if (x !== 'logout') this.selected = x;
    else {
      this.token.signOut();
      this.toLoginPage();
    }
  }

  toLoginPage() {
    this.router.navigate(['/login']);
  }
}
