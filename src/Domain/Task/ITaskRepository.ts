import Task from "./Task";

export default interface ITaskRepository {
  save(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
  findByTaskId(taskId: string): Promise<Task>;
  delete(taskId: string): Promise<void>;
}
