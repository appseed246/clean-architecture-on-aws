import IAddTaskUseCase from "./IAddTaskUseCase";
import IAddTaskPresenter from "./IAddTaskPresenter";
import ITaskRepository from "../../../Domain/Task/ITaskRepository";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../../Types";
import AddTaskRequest from "./AddTaskRequest";

@injectable()
export default class AddTaskUseCase implements IAddTaskUseCase {
  constructor(
    @inject(TYPES.IAddTaskPresenter) private presenter: IAddTaskPresenter,
    @inject(TYPES.ITaskRepository) private repository: ITaskRepository
  ) {}

  public async handle(request: AddTaskRequest) {
    const tasks = await this.repository.findAll();
    await this.presenter.output(request.token, tasks);
  }
}
