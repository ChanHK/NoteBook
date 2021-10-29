export class Note {
  private _title: string;
  private _description: string;
  private _effort: number;
  private id: string;

  constructor(title: string, description: string, effort: number, id: string) {
    this._title = title;
    this._description = description;
    this._effort = effort;
    this.id = id;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  get effort(): number {
    return this._effort;
  }
  set effort(value: number) {
    this._effort = value;
  }

  get _id(): string {
    return this.id;
  }
  set _id(value: string) {
    this.id = value;
  }
}
