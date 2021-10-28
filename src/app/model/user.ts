import { Note } from './note';

export class User {
  private _username: string;
  private _password: string;
  private _score: number;
  private _notes: Array<Note>;

  constructor(username: string, password: string, score: number) {
    this._username = username;
    this._password = password;
    this._score = score;
    this._notes = [];
  }

  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }

  get notes(): Array<Note> {
    return this._notes;
  }
  set notes(value: Array<Note>) {
    this._notes = value;
  }
}
