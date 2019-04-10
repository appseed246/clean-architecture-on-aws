import { WebhookEvent, MessageEvent, EventMessage } from "@line/bot-sdk";
import IListTaskUseCase from "../../Application/Task/List/IListTaskUseCase";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../Types";
import IAddTaskUseCase from "../../Application/Task/Add/IAddTaskUseCase";

@injectable()
export default class LineMessageDispatcher {
  constructor(
    @inject(TYPES.IListTaskUseCase) private listInteractor: IListTaskUseCase,
    @inject(TYPES.IAddTaskUseCase) private addInteractor: IAddTaskUseCase
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
          // if (this.matchWith(message.text, "list")) {
          await this.listInteractor.handle({
            token: event.replyToken
          });
          break;
        }
        if (message.text.match(/^(\/add)/)) {
          // if (this.matchWith(message.text, "add")) {
          await this.addInteractor.handle({
            token: event.replyToken,
            content: message.text.split(" ")[1]
          });
          break;
        }

      default:
        // 何も行わない
        break;
    }
  }
}
