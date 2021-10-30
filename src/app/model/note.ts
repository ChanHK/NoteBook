export class Note {
  public title: string;
  public description: string;
  public effort: number;
  public _id: string;

  constructor(title: string, description: string, effort: number, id: string) {
    this.title = title;
    this.description = description;
    this.effort = effort;
    this._id = id;
  }
}
