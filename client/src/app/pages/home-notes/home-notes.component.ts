import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-home-notes',
  templateUrl: './home-notes.component.html',
  styleUrls: ['./home-notes.component.scss'],
})
export class HomeNotesComponent implements OnInit {
  notes: Array<Note> = [];
  newNote = {
    title: '',
    description: '',
    effort: '',
  };

  constructor(private noteSer: NoteService) {}

  ngOnInit(): void {
    this.noteSer.getAllNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  onComplete = (effort: number, id: string) => {
    this.noteSer.completeNotes(effort, id).subscribe(
      (data) => {
        this.notes = data;
      },
      (err) => {
        console.log('complete failed');
      }
    );
  };

  delete = (id: string) => {
    this.noteSer.deleteNotes(id).subscribe(
      (data) => {
        this.notes = data;
      },
      (err) => {
        console.log('delete failed');
      }
    );
  };

  onSubmit(): void {
    const { title, description, effort } = this.newNote;
    this.noteSer.addNewNotes(title, description, parseInt(effort)).subscribe(
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
