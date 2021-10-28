import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:4000/api/notes/';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  addNewNotes(
    title: string,
    description: string,
    effort: number
  ): Observable<any> {
    return this.http.post(
      API_URL + 'addNew',
      { title, description, effort },
      { responseType: 'text' }
    );
  }

  getAllNotes(): Observable<any> {
    return this.http.get(API_URL + 'getNotes', { responseType: 'text' });
  }

  deleteNotes(notesID: string): Observable<any> {
    return this.http.post(API_URL + 'deleteNotes/' + notesID, null, {
      responseType: 'text',
    });
  }

  completeNotes(effort: number, notesID: string): Observable<any> {
    return this.http.post(
      API_URL + 'completeNotes/' + effort + '/' + notesID,
      null,
      {
        responseType: 'text',
      }
    );
  }
}
