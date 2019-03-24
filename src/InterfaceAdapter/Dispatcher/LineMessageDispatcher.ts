import { WebhookEvent, MessageEvent, EventMessage } from "@line/bot-sdk";
import IListTaskUseCase from "../../Application/Task/List/IListTaskUseCase";
import ListTaskRequest from "../../Application/Task/List/ListTaskRequest";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../Types";

@injectable()
export default class LineMessageDispatcher {
  constructor(
    @inject(TYPES.IListTaskUseCase) private interactor: IListTaskUseCase
  ) {}

  public async dispatch(event: WebhookEvent) {
    switch (event.type) {
      case "message":
        await this.handleMessage(event);
      default:
        console.log("default");
    }
  }

  private async handleMessage(event: MessageEvent) {
    const message: EventMessage = event.message;
    switch (message.type) {
      case "text":
        if (message.text.match(/^(\/list)/)) {
          const request = new ListTaskRequest(event.replyToken);
          await this.interactor.handle(request);
          break;
        }
      default:
        // 何も行わない
        break;
    }
  }
}
