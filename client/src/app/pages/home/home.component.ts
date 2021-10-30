import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import jwt_decode from 'jwt-decode';

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
    const token = this.token.getToken();

    if (token) {
      const decoded: { exp: number; iat: number; id: string } =
        jwt_decode(token);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.token.signOut();
        this.toLoginPage();
      }
    }
    else this.toLoginPage();
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
