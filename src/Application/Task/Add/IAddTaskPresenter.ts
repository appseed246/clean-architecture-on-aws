import Task from "../../../Domain/Task/Task";

export default interface IAddTaskPresenter {
  output(token: string, tasks: Task[]): Promise<void>;
}
