import IAddTaskUseCase from "./IAddTaskUseCase";
import IAddTaskPresenter from "./IAddTaskPresenter";
import ITaskRepository from "../../../Domain/Task/ITaskRepository";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../../Types";
import AddTaskRequest from "./AddTaskRequest";
import Task from "../../../Domain/Task/Task";

@injectable()
export default class AddTaskUseCase implements IAddTaskUseCase {
  constructor(
    @inject(TYPES.IAddTaskPresenter) private presenter: IAddTaskPresenter,
    @inject(TYPES.ITaskRepository) private repository: ITaskRepository
  ) {}

  public async handle(request: AddTaskRequest) {
    const task = new Task("taskId", request.content, "ongoing");
    await this.repository.save(task);
    await this.presenter.output(request.token);
  }
}
