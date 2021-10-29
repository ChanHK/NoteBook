import { Router } from '@angular/router';
import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-home-notes',
  templateUrl: './home-notes.component.html',
  styleUrls: ['./home-notes.component.scss'],
})
export class HomeNotesComponent implements OnInit {
  notes = [];
  newNote = {
    title: '',
    description: '',
    effort: '',
  };

  constructor(
    private note: NoteService,
    private token: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.token.getToken()) this.router.navigate(['/login']);
  }

  onSubmit(): void {
    const { title, description, effort } = this.newNote;
    this.note.addNewNotes(title, description, parseInt(effort)).subscribe(
      (data) => {
        this.notes = data;
        this.newNote.title = '';
        this.newNote.description = '';
        this.newNote.effort = '';
      },
      (err) => {
        console.log('insert new note into database failed');
      }
    );
  }
}
