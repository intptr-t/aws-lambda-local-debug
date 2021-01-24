# Step 1 環境準備

## インストール
それぞれすでにインストール済みの場合はスキップして問題ありません。
また、使い慣れた代替のツールがある場合そちらを使用しても問題ありません。

### Visual Studio Code
- <https://code.visualstudio.com/>

コマンドで動作確認
(※バージョンの値は2021/01/25時点の情報です)

```zsh
% code -v
1.52.1
ea3859d4ba2f3e577a159bc91e3074c5d85c0523
x64
```

### Docker Desktop
- <https://www.docker.com/get-started>

コマンドで動作確認
(※バージョンの値は2021/01/25時点の情報です)

```zsh
% docker -v
Docker version 20.10.2, build 2291f61
```

### AWS CLI
- <https://aws.amazon.com/jp/cli/>

コマンドで動作確認
(※バージョンの値は2021/01/25時点の情報です)

```zsh
% aws --version
aws-cli/2.1.8 Python/3.7.4 Darwin/19.6.0 exe/x86_64 prompt/off
```

### SAM CLIインストール
- <https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html>

コマンドで動作確認
(※バージョンの値は2021/01/25時点の情報です)

```zsh
% sam --version
SAM CLI, version 1.15.0
```

### Git
- <https://git-scm.com/downloads>

```
% git --version
git version 2.24.3 (Apple Git-128)
```

## 環境設定

- AWS CLI

このドキュメント全体で `local-test` という名称でプロファイルを作成します。
別の名前で作成した場合、適宜読み替えてください。

```
% aws configure --profile local-test
AWS Access Key ID [None]: local-id
AWS Secret Access Key [None]: local-secret
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

- Docker network

このドキュメント全体で、 `sam-local` という名称でネットワークの設定作成します。
別の名前で作成した場合は、適宜読み替えてください。

```
% docker network create sam-local
```

Back to [README](../README.md)

Next to [Step 2 最小限入門](02-minimum-getting-started.md)
