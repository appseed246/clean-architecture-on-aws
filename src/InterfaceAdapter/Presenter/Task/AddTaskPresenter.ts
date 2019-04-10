import IAddTaskPresenter from "../../../Application/Task/Add/IAddTaskPresenter";
import { injectable } from "inversify";
import "reflect-metadata";
import { Client, TextMessage } from "@line/bot-sdk";

@injectable()
export default class AddTaskPresenter implements IAddTaskPresenter {
  private client: Client = new Client({
    channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
    channelSecret: process.env.LINE_SECRET
  });

  async output(token: string) {
    const message: TextMessage = {
      type: "text",
      text: "タスクを登録しました。"
    };
    await this.client.replyMessage(token, message);
  }
}
