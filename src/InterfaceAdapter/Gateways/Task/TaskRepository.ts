import ITaskRepository from "../../../Domain/Task/ITaskRepository";
import Task from "../../../Domain/Task/Task";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export default class TaskRepository implements ITaskRepository {
  save(task: Task[]): void {
    // WIP: 実装する
    console.log(task);
    return;
  }

  findAll(): Task[] {
    // WIP: 実装する
    const task = new Task("id", "タスク 001");
    return [task];
  }

  delete(taskId: string): void {
    // WIP: 実装する
    console.log(taskId);
    return;
  }
}
