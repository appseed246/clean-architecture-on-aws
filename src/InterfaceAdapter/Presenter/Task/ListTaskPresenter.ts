import IListTaskPresenter from "../../../Application/Task/List/IListTaskPresenter";
import Task from "../../../Domain/Task/Task";
import { injectable } from "inversify";
import "reflect-metadata";
import { Client, TextMessage } from "@line/bot-sdk";

@injectable()
export default class ListTaskPresenter implements IListTaskPresenter {
  private client: Client = new Client({
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_SECRET
  });

  async output(token: string, tasks: Task[]) {
    let text: string = "タスク一覧です。\n";
    tasks.forEach(task => {
      const content = task.getContent();
      text += `${content}\n`;
    });

    const message: TextMessage = {
      type: "text",
      text: text
    };
    await this.client.replyMessage(token, message);
  }
}
