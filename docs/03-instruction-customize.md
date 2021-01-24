# Step 3 解説とカスタマイズ

## 解説

1つ前のステップ[Step 2 最小限入門](./02-minimum-getting-started.md) を解説します。

### index.js

このファイルは、AWS Lambda上で実行したい対象のファイルです。
今回は、「hello,world!」を出力するだけのプログラムで、何も返却しない(`return`がない)ため結果は null になります。

### template.yaml

sam initでアプリケーションを作成した時の `template.yaml` の代替です。
`sam local invoke` するのに必要な最低限の設定が記載されたファイルになります。
値の詳細は [CloudFormation のリファレンス](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html) を参照してください。

公式のドキュメントに無いパラメータとして、
キモは [AWS CDK側のドキュメント](https://docs.aws.amazon.com/cdk/latest/guide/assets.html#assets_cfn)の記載にある リソースメタデータ `aws:asset:path` です。
ここに記載されているローカルディレクトリのパスが `sam local invoke` で実行したとき、template.yamlから見て docker上の `/var/task` (LAMBDA_TASK_ROOT) にマウントされるパスになります。

### launch.json

Visual Studio Codeでデバッグするときの構成ファイルです。
キモは2点、
1つ目は [Node.js をリモートでデバッグする時の構成](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_remote-debugging)になっていること。
2つ目は docker上で動いている Lambda 関数をVisual Studio Codeから見たディレクトリへ対応づけるパラメータ `localRoot` を正しく設定することです。

## カスタマイズの例

上記までの内容を総合するとディレクトリ構成をカスタマイズすることが可能になります。
参考の構成を以下に示します。

詳細は本リポジトリの [03-instruction-customize](../src/03-instruction-customize) を参照してください。

### ディレクトリ構成

- template.yaml を デバッグ専用のディレクトリへ配置
- index.js を src 配下に配置

```
.
├── .vscode
│   └── launch.json
├── debug
│   └── template.yaml
└── src
    └── index.js
```

#### 上記構成のtemplate.yaml

aws:asset:path を template.yaml から見た src ディレクトリを指すようにします。
(ターミナルのカレントディレクトリ(`.`)では無い点に注意してください)

```yaml
        aws:asset:path: "../src"
```

#### 上記構成のlaunch.json

Visual Studio Codeワークスペースルートから見て、src を指すようにします。
(はじめの解説で開いた ディレクトリ`02-1-getting-started` とは別に `02-2-getting-started-customize` を Visual Studio Codeルートとして開いている点に注意)

```json
      "localRoot": "${workspaceRoot}/src",
```

#### 実行コマンド

ターミナルから見て debugディレクトリ配下の template.yaml を指定するため、パスが変更になります。
(`--template ./debug/template.yaml`の箇所です)

```
% sam local invoke "test" --template ./debug/template.yaml --docker-network sam-local --no-event --debug-port 5858 --profile local-test
```

Prev to [Step 2 最小限入門](./02-minimum-getting-started.md)

Back to [README](../README.md)

Next To [Step 4 環境変数とイベント引数](./04-env-event.md)
