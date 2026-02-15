const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, QueryCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "Tasks";

class TaskRepository {

  async create(task) {
    await docClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: task
    }));
    return task;
  }

  async getByUser(userId) {
    const result = await docClient.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "userId = :u",
      ExpressionAttributeValues: {
        ":u": userId
      }
    }));
    return result.Items;
  }
}

module.exports = new TaskRepository();
