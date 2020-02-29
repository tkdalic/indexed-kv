var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function s(e){return document.createElement(e)}function c(e){return document.createTextNode(e)}function a(){return c(" ")}function l(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){(null!=t||e.value)&&(e.value=t)}let v;function p(e){v=e}const h=[],_=[],x=[],y=[],g=Promise.resolve();let m=!1;function b(e){x.push(e)}let $=!1;const k=new Set;function E(){if(!$){$=!0;do{for(let e=0;e<h.length;e+=1){const t=h[e];p(t),w(t.$$)}for(h.length=0;_.length;)_.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];k.has(t)||(k.add(t),t())}x.length=0}while(h.length);for(;y.length;)y.pop()();m=!1,$=!1,k.clear()}}function w(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const A=new Set;function B(e,t){-1===e.$$.dirty[0]&&(h.push(e),m||(m=!0,g.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(u,i,s,c,a,l,d=[-1]){const f=v;p(u);const h=i.props||{},_=u.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:d};let x=!1;var y,g;_.ctx=s?s(u,h,(e,t,...n)=>{const o=n.length?n[0]:t;return _.ctx&&a(_.ctx[e],_.ctx[e]=o)&&(_.bound[e]&&_.bound[e](o),x&&B(u,e)),t}):[],_.update(),x=!0,o(_.before_update),_.fragment=!!c&&c(_.ctx),i.target&&(i.hydrate?_.fragment&&_.fragment.l(function(e){return Array.from(e.childNodes)}(i.target)):_.fragment&&_.fragment.c(),i.intro&&((y=u.$$.fragment)&&y.i&&(A.delete(y),y.i(g))),function(e,n,u){const{fragment:i,on_mount:s,on_destroy:c,after_update:a}=e.$$;i&&i.m(n,u),b(()=>{const n=s.map(t).filter(r);c?c.push(...n):o(n),e.$$.on_mount=[]}),a.forEach(b)}(u,i.target,i.anchor),E()),p(f)}var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function T(e,t){return e(t={exports:{}},t.exports),t.exports}var K=T((function(e,t){var n=N&&N.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,u){function i(e){try{c(o.next(e))}catch(e){u(e)}}function s(e){try{c(o.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});t.IndexedKv=class{constructor(e="indexed_db",t="kvs"){this.DB_NAME="unikki_db",this.TABLE_NAME="kvs",this.DB_NAME=e,this.TABLE_NAME=t}getDB(){return new Promise((e,t)=>{const n=indexedDB.open(this.DB_NAME,1);n.onerror=t,n.onupgradeneeded=()=>{n.result.createObjectStore(this.TABLE_NAME,{keyPath:"key"}).createIndex(this.TABLE_NAME,["key","value"])},n.onsuccess=()=>e(n.result)})}getStore(e,t){return e.transaction([this.TABLE_NAME],t).objectStore(this.TABLE_NAME)}closeDB(){}set(e,t){return new Promise(o=>n(this,void 0,void 0,(function*(){const n=yield this.getDB();this.getStore(n,"readwrite").put({key:e,value:t}).onsuccess=()=>{n.close(),o()}})))}get(e){return new Promise(t=>n(this,void 0,void 0,(function*(){const n=yield this.getDB(),o=this.getStore(n,"readonly").get(e);o.onsuccess=()=>{n.close(),t(o.result?o.result.value:"")}})))}}}));D(K);K.IndexedKv;var L=T((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedKv=K.IndexedKv}));D(L);var P=L.IndexedKv;function S(t){let n,r,u,v,p,h,_,x,y,g,m,b,$,k,E,w,A,B,M,N,D,T;return{c(){n=s("main"),r=s("h1"),r.textContent="Indexed KV sample",u=a(),v=s("div"),p=s("div"),h=s("div"),h.textContent="key:",_=a(),x=s("input"),y=a(),g=s("div"),m=s("div"),m.textContent="value:",b=a(),$=s("input"),k=a(),E=s("button"),E.textContent="反映",w=a(),A=s("div"),B=c("indexedDB value: "),M=c(t[2]),N=a(),D=s("p"),D.innerHTML="\n    indexed KV のサンプルです。 indexed KV は、indexedDBを Key Value Store\n    のように扱うライブラリです。\n    <br>\n    keyを変更するごとに、indexedDBから該当するキーを探し、 あればindexed-db\n    valueを返却します。\n    <br>\n    キーがなければnullとなります。\n    <br> \n    <br>\n    また、反映を押すことで、該当のkeyのvalueを更新します。\n  ",d(h,"class","input__label svelte-1fe95hv"),d(x,"class","input__text svelte-1fe95hv"),d(x,"type","text"),d(p,"class","indexed-kv__key input svelte-1fe95hv"),d(m,"class","input__label svelte-1fe95hv"),d($,"class","input__text svelte-1fe95hv"),d($,"type","text"),d(g,"class","indexed-kv__value input svelte-1fe95hv"),d(E,"class","indexed-kv__button"),d(A,"class","indexed-kv__outpupt"),d(v,"class","indexed-kv svelte-1fe95hv"),d(D,"class","description"),d(n,"class","main svelte-1fe95hv")},m(e,o){!function(e,t,n){e.insertBefore(t,n||null)}(e,n,o),i(n,r),i(n,u),i(n,v),i(v,p),i(p,h),i(p,_),i(p,x),f(x,t[0]),i(v,y),i(v,g),i(g,m),i(g,b),i(g,$),f($,t[1]),i(v,k),i(v,E),i(v,w),i(v,A),i(A,B),i(A,M),i(n,N),i(n,D),T=[l(x,"input",t[6]),l(x,"change",t[4]),l($,"input",t[7]),l(E,"click",t[3])]},p(e,[t]){1&t&&x.value!==e[0]&&f(x,e[0]),2&t&&$.value!==e[1]&&f($,e[1]),4&t&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(M,e[2])},i:e,o:e,d(e){var t;e&&(t=n).parentNode.removeChild(t),o(T)}}}function j(e,t,n){const o=new P;let r,u,i="";function s(){o.get(r).then(e=>n(2,i=e))}return[r,u,i,async function(){await o.set(r,u),s()},s,o,function(){r=this.value,n(0,r)},function(){u=this.value,n(1,u)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}{constructor(e){super(),M(this,e,j,S,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
