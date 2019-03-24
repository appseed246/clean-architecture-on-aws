import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { MessageEvent } from "@line/bot-sdk";
import LineMessageDispatcher from "./InterfaceAdapter/Dispatcher/LineMessageDispatcher";
import "reflect-metadata";
import { TYPES } from "./Types";
import { container } from "./inversify.config";

export const line: APIGatewayProxyHandler = async event => {
  console.log({ eventbody: event.body });

  const dispatcher: LineMessageDispatcher = container.get<
    LineMessageDispatcher
  >(TYPES.LineMessageDispatcher);

  // webhook????????
  const body = JSON.parse(event.body);
  const events: MessageEvent[] = body.events;

  // ???????????
  for (const event of events) {
    await dispatcher.dispatch(event);
  }

  // statusCode:200???
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};
