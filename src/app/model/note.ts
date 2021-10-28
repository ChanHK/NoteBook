export class Note {
  private _title: string;
  private _description: string;
  private _effort: number;

  constructor(title: string, description: string, effort: number) {
    this._title = title;
    this._description = description;
    this._effort = effort;
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
}
