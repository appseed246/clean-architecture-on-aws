import { DocumentClient } from "aws-sdk/clients/dynamodb";

export default class DynamoDBClient {
  private client = new DocumentClient({
    region: process.env.AWS_REGION
  });
  constructor() {}

  public async put(input: DocumentClient.PutItemInput) {
    return await this.client.put(input).promise();
  }

  public async get(input: DocumentClient.GetItemInput) {
    return await this.client.get(input).promise();
  }

  public async update(input: DocumentClient.UpdateItemInput) {
    return await this.client.update(input).promise();
  }
}
