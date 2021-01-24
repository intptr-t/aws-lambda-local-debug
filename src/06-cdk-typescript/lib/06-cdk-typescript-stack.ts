import * as os from 'os';
import * as path from 'path';

import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaNodeJs from '@aws-cdk/aws-lambda-nodejs';

export class CdkTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaNodeJs.NodejsFunction(this, "CdkTypeScriptExample", {
      functionName: "cdkTypeScriptExample",
      runtime: lambda.Runtime.NODEJS_12_X,
      entry: `lambda/src/index.ts`,
      handler: 'handler',
      bundling: {
        externalModules: [
          'aws-sdk',
        ],
        nodeModules: [
          'source-map-support'
        ],
        sourceMap: true,
        target: 'es2019', // es2019: Node.js 12.X
        minify: true,
        commandHooks: {
          afterBundling(inputDir, outputDir) {
            return [
              // Copy index.js.map for SAM local debug
              (() => {
                // cdk.out/asset.***に出力した index.js.map を 入力元になった*.tsのあるディレクトリへコピー
                const src = path.resolve(`${outputDir}/index.js.map`);
                const dest = path.resolve(`${inputDir}/lambda/src`);
                // OSの違いを吸収
                if (os.platform() === 'win32') {
                  return `copy ${src} ${dest}`;
                }
                else {
                  return `cp ${src} ${dest}`;
                }
              })(),
            ];
          },
          beforeBundling(_inputDir, _outputDir) { return []; },
          beforeInstall(_inputDir, _outputDir) { return []; }
        }
      },
      environment: {
        Override: "hoge",
        EnvParam: ",world"
      }
    });
  }
}
