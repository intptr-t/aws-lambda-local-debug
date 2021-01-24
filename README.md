# AWS Lambda Debug

本ドキュメントは、Visual Studio Code, AWS SAM CLI, JavaScript/TypeScriptを使った開発時におけるデバッグ方法の資料です。

ゴールは、AWSが公式に出している[Node.js 12.XのDockerイメージ](https://hub.docker.com/r/amazon/aws-sam-cli-emulation-image-nodejs12.x)を使って、
SAM(Serverless Application Model)以外のデプロイ環境(例: CDK + TypeScript)でも、SAM CLIを使ってローカルでデバッグできるようになることです。

- [Step 1 環境インストール](./docs/01-installation.md)
- [Step 2 最小限入門](./docs/02-minimum-getting-started.md)
- [Step 3 解説とカスタマイズ](./docs/03-instruction-customize.md)
- [Step 4 環境変数とイベント引数](./docs/04-env-event.md)
- [Step 5 TypeScriptでデバッグ](./docs/05-typescript.md)
- [Step 6 CDK + TypeScriptでデバッグ](./docs/06-cdk-typescript.md)

- [トラブルシューティング](./docs/xx-trouble-shoot.md)

## LICENSE

See: [LICENSE.md](./LICENSE.md)

Created by: [intptr-t](https://github.com/intptr-t)
