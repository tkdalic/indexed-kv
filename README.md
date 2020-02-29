# indexed-kv

Using an indexedDB as a KV

## 概要

indexed KV は、indexedDBを Key Value Storeのように扱うライブラリです。

## API

### `new IndexedKv(dbName: string = "indexed_db", tableName: string = "kvs")`

IndexedKvの初期化関数。
IndexedDBにおけるdatabaseの名前とテーブルの名前を指定する。

### `set(key: string, value: string): Promise<void>`

IndexedDBに、keyとvalueの組み合わせで登録する。

### `get(key: string): Promise<string>`

IndexedDBから、keyに対応するvalueを取得する。