# indexed-kv

Using an indexedDB as a KV

## 概要

indexed KV は、indexedDB を Key Value Store のように扱うライブラリです。

## API

### `new IndexedKv(dbName: string = "indexed_db", tableName: string = "kvs")`

IndexedKv の初期化関数。
IndexedDB における database の名前とテーブルの名前を指定する。

### `set(key: string, value: string): Promise<void>`

IndexedDB に、key と value の組み合わせで登録する。

### `get(key: string): Promise<string>`

IndexedDB から、key に対応する value を取得する。

## sample

以下の URL でサンプルが確認できます

https://tkdalic.github.io/indexed-kv
