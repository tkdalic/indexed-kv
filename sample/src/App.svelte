<script>
  import { IndexedKv } from "indexed-kv";
  const indexedKV = new IndexedKv();
  let inputKey;
  let inputValue;
  let outputValue = "";

  async function set() {
    await indexedKV.set(inputKey, inputValue);
    get();
  }

  function get() {
    indexedKV.get(inputKey).then(value => (outputValue = value));
  }
</script>

<style>
  .main {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  .indexed-kv {
    display: flex;
    flex-direction: column;
  }

  .input {
    display: flex;
  }

  .input__label {
    display: flex;
    align-items: center;
  }

  .input__text {
    flex-grow: 1;
  }
</style>

<main class="main">
  <h1>Indexed KV sample</h1>
  <div class="indexed-kv">
    <div class="indexed-kv__key input">
      <div class="input__label">key:</div>
      <input
        class="input__text"
        type="text"
        bind:value={inputKey}
        on:change={get} />
    </div>
    <div class="indexed-kv__value input">
      <div class="input__label">value:</div>
      <input class="input__text" type="text" bind:value={inputValue} />
    </div>
    <button class="indexed-kv__button" on:click={set}>反映</button>
    <div class="indexed-kv__outpupt">indexedDB value: {outputValue}</div>
  </div>

  <p class="description">
    indexed KV のサンプルです。 indexed KV は、indexedDBを Key Value Store
    のように扱うライブラリです。
    <br />
    keyを変更するごとに、indexedDBから該当するキーを探し、 あればindexed-db
    valueを返却します。
    <br />
    キーがなければnullとなります。
    <br />
    <br />
    また、反映を押すことで、該当のkeyのvalueを更新します。
  </p>
</main>
