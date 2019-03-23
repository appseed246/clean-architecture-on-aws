import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { Client, TextMessage, MessageEvent } from "@line/bot-sdk";

const client = new Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET
});

const returnMessage = async (event: MessageEvent) => {
  console.log({ request: JSON.stringify(event) });

  const message: TextMessage = {
    type: "text",
    text: event.message.type === "text" ? event.message.text : "やぁ"
  };
  await client.replyMessage(event.replyToken, message);
};

export const line: APIGatewayProxyHandler = async event => {
  console.log({ eventbody: event.body });
  const body = JSON.parse(event.body);
  const events: MessageEvent[] = body.events;
  for (const event of events) {
    await returnMessage(event);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};
