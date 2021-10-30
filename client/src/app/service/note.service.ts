import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient, private token: TokenService) {}

  addNewNotes(
    title: string,
    description: string,
    effort: number
  ): Observable<any> {
    return this.http.post(
      '/api/notes/addNew',
      { title, description, effort },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.token.getToken(),
        },
      }
    );
  }

  getAllNotes(): Observable<any> {
    return this.http.get('/api/notes/getNotes', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.token.getToken(),
      },
    });
  }

  deleteNotes(notesID: string): Observable<any> {
    return this.http.post('/api/notes/deleteNotes/' + notesID, null, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.token.getToken(),
      },
    });
  }

  completeNotes(effort: number, notesID: string): Observable<any> {
    return this.http.post(
      '/api/notes/completeNotes/' + effort + '/' + notesID,
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.token.getToken(),
        },
      }
    );
  }
}
