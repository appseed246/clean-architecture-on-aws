import Task from "./Task";

export default interface ITaskRepository {
  save(task: Task[]): void;
  findAll(): Task[];
  delete(taskId: string): void;
}
