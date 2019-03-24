import Task from "../../../Domain/Task/Task";

export default interface IListTaskPresenter {
  output(token: string, tasks: Task[]): Promise<void>;
}
