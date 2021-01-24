import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

/**
* AWS Serverless Application Model(SAM)のCLIから実行されていることを表すフラグ
*/
const IS_SAM_LOCAL = (process.env.AWS_SAM_LOCAL === "true");

/** Event引数 */
type EventArg = {
  Override: string;
};

/** 応答コード */
type Response = {
  statusCode: number;
};

/**
* エントリーポイント
* @param event 引数
* @param context コンテキスト
*/
exports.handler = async (event: EventArg, context: AWSLambda.Context): Promise<Response> => {
  console.log(`${context.functionName}: ${JSON.stringify(event)}`);

  try {
    if (IS_SAM_LOCAL) {
      throw new Error(process.env.Override + process.env.EnvParam);
    }
    return {statusCode: 200};
  }
  catch (err) {
    console.error(err.stack);
    return {statusCode: 400};
  }
  finally {
    console.log("Exit");
  }
};
