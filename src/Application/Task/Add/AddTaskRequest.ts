export default class AddTaskRequest {
  constructor(private _token: string) {}

  get token(): string {
    return this._token;
  }
}

export default interface AddTaskRequest {
  token: string;
}
