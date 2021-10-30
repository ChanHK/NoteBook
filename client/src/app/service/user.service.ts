import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private token: TokenService) {}

  getUserInfo(): Observable<any> {
    return this.http.get('/api/user/getUserInfo', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.token.getToken(),
      },
    });
  }
}
