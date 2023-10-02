// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-composite@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(e,t){return s(t)?n(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0Zt2t,G9","iter",t.iter)):null:new TypeError(o("0Zt2V,FD",t))}var m=1e308;function l(s){var n,i,o,p,j,h;if(n={iter:m},arguments.length&&(p=d(n,s)))throw p;return h=0,j=3,e(i={},"next",v),e(i,"return",a),t&&e(i,t,f),i;function v(){if(h+=1,o||h>n.iter)return{done:!0};for(j+=1;!1===r(j);)j+=1;return{value:j,done:!1}}function a(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map
