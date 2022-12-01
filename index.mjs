// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-composite@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function d(e,t){return s(t)?n(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0Hr35","iter",t.iter)):null:new TypeError(o("0Hr2h",t))}var m=1e308;function l(s){var n,i,o,p,j,h;if(n={iter:m},arguments.length&&(p=d(n,s)))throw p;return h=0,j=3,e(i={},"next",a),e(i,"return",f),t&&e(i,t,u),i;function a(){if(h+=1,o||h>n.iter)return{done:!0};for(j+=1;!1===r(j);)j+=1;return{value:j,done:!1}}function f(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map