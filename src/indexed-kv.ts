/* eslint-disable no-async-promise-executor */
export class IndexedKv {
  private DB_NAME = "unikki_db";
  private TABLE_NAME = "kvs";
  constructor(dbName: string = "indexed_db", tableName: string = "kvs") {
    this.DB_NAME = dbName;
    this.TABLE_NAME = tableName;
  }

  private getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const dbOpenRequest = indexedDB.open(this.DB_NAME, 1);
      dbOpenRequest.onerror = reject;
      dbOpenRequest.onupgradeneeded = () => {
        const db = dbOpenRequest.result;
        const store = db.createObjectStore(this.TABLE_NAME, {
          keyPath: "key"
        });
        store.createIndex(this.TABLE_NAME, ["key", "value"]);
      };
      dbOpenRequest.onsuccess = () => resolve(dbOpenRequest.result);
    });
  }

  private getStore(db: IDBDatabase, mode: IDBTransactionMode): IDBObjectStore {
    const transaction = db.transaction([this.TABLE_NAME], mode);
    return transaction.objectStore(this.TABLE_NAME);
  }

  private closeDB() {}

  set(key: string, value: string): Promise<void> {
    return new Promise(async resolve => {
      const db = await this.getDB();
      const store = this.getStore(db, "readwrite");
      const request = store.put({ key, value });
      request.onsuccess = () => {
        db.close();
        resolve();
      };
    });
  }

  get(key: string): Promise<string> {
    return new Promise(async resolve => {
      const db = await this.getDB();
      const store = this.getStore(db, "readonly");
      const data = store.get(key);
      data.onsuccess = () => {
        db.close();
        resolve(data.result ? data.result.value : "");
      };
    });
  }
}
