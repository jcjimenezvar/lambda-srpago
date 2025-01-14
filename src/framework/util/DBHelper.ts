import { DynamoDB } from "aws-sdk";
import { IDBHelper } from "../../core/interfaces/IDBHelper";
import { Constants } from "../../core/common/Constants";

export class DBHelper implements IDBHelper {
  private docClient: DynamoDB.DocumentClient;

  constructor() {
    this.docClient = new DynamoDB.DocumentClient();
  }

  put = async (tableName: string, item: { [key: string]: any }) => {
    console.log("Table", tableName);
    console.log("item", item);
    console.log("---- insertado o actualizado en DBHelper ----");
    // const input: DynamoDB.DocumentClient.PutItemInput = {
    //   TableName: tableName,
    //   Item: item,
    // };
    // await this.docClient.put(input).promise();
  };
}
