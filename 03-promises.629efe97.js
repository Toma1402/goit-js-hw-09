var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("eWCmQ");const r=document.querySelector(".form"),l=document.querySelector("button");function d(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}console.dir(r),r.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.target.elements;let r=Number(t.value);l.disabled=!0;for(let e=1;e<=n.value;e+=1)d(e,r).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),r+=Number(o.value);setTimeout((()=>{l.disabled=!1}),r)}));
//# sourceMappingURL=03-promises.629efe97.js.map
