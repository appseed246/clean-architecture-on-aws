import IListTaskUseCase from "./IListTaskUseCase";
import IListTaskPresenter from "./IListTaskPresenter";
import ITaskRepository from "../../../Domain/Task/ITaskRepository";
import ListTaskRequest from "./ListTaskRequest";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../../Types";

@injectable()
export default class ListTaskUseCase implements IListTaskUseCase {
  constructor(
    @inject(TYPES.IListTaskPresenter) private presenter: IListTaskPresenter,
    @inject(TYPES.ITaskRepository) private repository: ITaskRepository
  ) {}

  public async handle(request: ListTaskRequest) {
    const tasks = this.repository.findAll();
    await this.presenter.output(request.token, tasks);
  }
}
