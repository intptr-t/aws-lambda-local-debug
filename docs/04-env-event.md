# Step 4 環境変数とイベント引数

本節の説明は、SAM CLI の基本的な使い方の内容のため、すでに把握されている方は飛ばして問題ありません。

対象ディレクトリ: [04-env-event](../src/04-env-event)

## 環境変数設定

まず、template.yaml の Resources > _関数名_ > Properties > Environment > Variables に環境変数を追加します。
これは、AWS Lambda上の環境変数に設定される環境変数に相当します。

ただし、ローカルで実行する際に 認証情報 など秘匿性が高いものを記載するとリポジトリで管理する際に不便になってしまいます。
そこで、SAM CLIの `---env-vars` で 環境変数を上書きします。
注意点として、template.yaml に無い環境変数は**上書きできません**。(UPSERTではなく、UPDATE的であるということです。)

## イベント引数

関数が呼び出されたときに渡される引数のJSONファイルを指定します。

### 実行

- `--no-event` から `--event ./debug/debug-event.json` へ変更
- `--env-vars ./debug/debug-env.json` を追加

```
% sam local invoke "test" --template ./debug/template.yaml --docker-network sam-local --event ./debug/debug-event.json --env-vars ./debug/debug-env.json --debug-port 5858 --profile local-test
```

### 実行結果

```
2021-01-24T20:29:39.502Z        550e5067-c20e-4e63-aa75-68f0561e83ab    INFO    hello,world
END RequestId: 550e5067-c20e-4e63-aa75-68f0561e83ab
REPORT RequestId: 550e5067-c20e-4e63-aa75-68f0561e83ab  Init Duration: 0.78 ms  Duration: 3983.27 ms    Billed Duration: 4000 ms Memory Size: 128 MB     Max Memory Used: 128 MB
"foobar"
```

Prev to [Step 3 解説とカスタマイズ](./03-instruction-customize.md)

Back to [README](../README.md)

Next to [Step 5 TypeScriptでデバッグ](./05-typescript.md)