import { TokenService } from './../../service/token.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    username: '',
    password: '',
  };
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.token.getToken()) this.router.navigate(['/home']);
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.auth.login(username, password).subscribe(
      (data) => {
        this.token.saveToken(data.accessToken);

        this.isLoginFailed = false;
        this.router.navigate(['/home']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
