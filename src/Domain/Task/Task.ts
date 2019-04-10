import { Status } from "./Status";

export default class Task {
  constructor(
    private _id: string,
    private _content: string,
    private _status: Status,
    private _createAt: Date = new Date(),
    private _updateAt: Date = new Date()
  ) {}

  get id(): string {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get status(): Status {
    return this._status;
  }

  get createAt(): Date {
    return this._createAt;
  }

  get updateAt(): Date {
    return this._updateAt;
  }
}
