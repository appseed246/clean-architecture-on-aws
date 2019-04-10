import ITaskRepository from "../../../Domain/Task/ITaskRepository";
import Task from "../../../Domain/Task/Task";
import "reflect-metadata";
import { injectable } from "inversify";
import DynamoDBClient from "../DynamoDBClient/DynamoDBClient";

@injectable()
export default class TaskRepository implements ITaskRepository {
  private client: DynamoDBClient = new DynamoDBClient();

  private readonly tableName = "tasks";
  private readonly userId = "userId";

  public async save(task: Task) {
    console.log(task);

    // タスクを追加
    await this.client.update({
      TableName: this.tableName,
      Key: { userId: this.userId },
      ExpressionAttributeNames: {
        "#status": "status"
      },
      ExpressionAttributeValues: {
        ":taskId": task.id,
        ":content": task.content,
        ":status": task.status,
        ":createAt": task.createAt.toDateString() || new Date().toDateString(),
        ":updateAt": new Date().toDateString()
      },
      UpdateExpression:
        "SET taskId = :taskId, content = :content, #status = :status, createAt = :createAt, updateAt = :updateAt"
    });
  }

  public async findAll() {
    // WIP: 実装する
    const task = new Task("id", "タスク 001", "ongoing");
    return [task];
  }

  public async findByTaskId(taskId: string) {
    const result = await this.client.get({
      TableName: this.tableName,
      Key: { taskId: taskId }
    });
    if (result.Item == null) throw new Error("");
    const { content, status, createAt, updateAt } = result.Item;
    return new Task(taskId, content, status, createAt, updateAt);
  }

  public async delete(taskId: string) {
    // WIP: 実装する
    console.log(taskId);
    return;
  }
}
