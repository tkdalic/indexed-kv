import { IndexedKv } from "./indexed-kv";

let indexedKV: IndexedKv;

beforeAll(() => {
  indexedKV = new IndexedKv();
});

test("should be created", async () => {
  expect(indexedKV).toBeTruthy();
});

test("should be save and load", async () => {
  const key = "key";
  const value = "value";
  await indexedKV.set(key, value);
  expect(await indexedKV.get(key)).toBe(value);
});
