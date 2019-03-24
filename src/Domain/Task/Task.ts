export default class Task {
  constructor(private id: string, private content: string) {}

  public getId(): string {
    return this.id;
  }

  public getContent(): string {
    return this.content;
  }
}
