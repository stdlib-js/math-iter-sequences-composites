// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=Object.prototype.hasOwnProperty;function p(t,r){return null!=t&&y.call(t,r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,s=Math.sqrt,v=Math.floor,d={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function j(t){return v(t)===t}var m=Number.POSITIVE_INFINITY;function _(t){return j(t)&&t>1&&t!==m&&!1===function(t){var r,e;if(v(t)!==t)return!1;if(t<=3)return t>1;if(t>9007199254740991||t%2==0)return!1;if(t<9)return!0;if(t%3==0)return!1;if(t%5==0)return!1;if(t%7==0)return!1;if(d[t])return!0;for(r=v(s(t)),e=11;e<=r;e+=210)if(t%e==0||t%(e+2)==0||t%(e+6)==0||t%(e+8)==0||t%(e+12)==0||t%(e+18)==0||t%(e+20)==0||t%(e+26)==0||t%(e+30)==0||t%(e+32)==0||t%(e+36)==0||t%(e+42)==0||t%(e+48)==0||t%(e+50)==0||t%(e+56)==0||t%(e+60)==0||t%(e+62)==0||t%(e+68)==0||t%(e+72)==0||t%(e+78)==0||t%(e+86)==0||t%(e+90)==0||t%(e+92)==0||t%(e+96)==0||t%(e+98)==0||t%(e+102)==0||t%(e+110)==0||t%(e+116)==0||t%(e+120)==0||t%(e+126)==0||t%(e+128)==0||t%(e+132)==0||t%(e+138)==0||t%(e+140)==0||t%(e+146)==0||t%(e+152)==0||t%(e+156)==0||t%(e+158)==0||t%(e+162)==0||t%(e+168)==0||t%(e+170)==0||t%(e+176)==0||t%(e+180)==0||t%(e+182)==0||t%(e+186)==0||t%(e+188)==0||t%(e+198)==0||t%(e+200)==0)return!1;return!0}(t)}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return g&&"symbol"==typeof Symbol.toStringTag}var O=Object.prototype.toString;var h="function"==typeof Symbol?Symbol.toStringTag:"";var S=w()?function(t){var r,e,n;if(null==t)return O.call(t);e=t[h],r=p(t,h);try{t[h]=void 0}catch(r){return O.call(t)}return n=O.call(t),r?t[h]=e:delete t[h],n}:function(t){return O.call(t)};var P=Array.isArray?Array.isArray:function(t){return"[object Array]"===S(t)};var E=/./;function T(t){return"boolean"==typeof t}var I=Boolean.prototype.toString;var A=w();function N(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===S(t)))}function B(t){return T(t)||N(t)}function F(){return new Function("return this;")()}a(B,"isPrimitive",T),a(B,"isObject",N);var V="object"==typeof self?self:null,x="object"==typeof window?window:null,C="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},G="object"==typeof C?C:null;var M=function(t){if(arguments.length){if(!T(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return F()}if(V)return V;if(x)return x;if(G)return G;throw new Error("unexpected error. Unable to resolve global object.")}(),k=M.document&&M.document.childNodes,L=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var R=/^\s*function\s*([^(]*)/i;function U(t){return null!==t&&"object"==typeof t}function Y(t){var r,e,n,o;if(("Object"===(e=S(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=R.exec(n.toString()))return r[1]}return U(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(H,"REGEXP",R),a(U,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!P(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(U));var q="function"==typeof E||"object"==typeof L||"function"==typeof k?function(t){return Y(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Y(t).toLowerCase():r};function X(t){return"function"===q(t)}var z,D=Object.getPrototypeOf;z=X(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===S(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!P(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!p(t,"constructor")&&p(r,"constructor")&&X(r.constructor)&&"[object Function]"===S(r.constructor)&&p(r,"isPrototypeOf")&&X(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!p(t,r))return!1;return!0}(t)))}function W(t){return"number"==typeof t}var Z=Number,$=Z.prototype.toString;var tt=w();function rt(t){return"object"==typeof t&&(t instanceof Z||(tt?function(t){try{return $.call(t),!0}catch(t){return!1}}(t):"[object Number]"===S(t)))}function et(t){return W(t)||rt(t)}a(et,"isPrimitive",W),a(et,"isObject",rt);var nt=Z.NEGATIVE_INFINITY;function ot(t){return t<m&&t>nt&&j(t)}function ut(t){return W(t)&&ot(t)}function it(t){return rt(t)&&ot(t.valueOf())}function ct(t){return ut(t)||it(t)}function ft(t){return ut(t)&&t>=0}function lt(t){return it(t)&&t.valueOf()>=0}function at(t){return ft(t)||lt(t)}function yt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function pt(t,r){return Q(r)?p(r,"iter")&&(t.iter=r.iter,!ft(r.iter))?new TypeError(yt("0Hr35","iter",r.iter)):null:new TypeError(yt("0Hr2h",r))}a(ct,"isPrimitive",ut),a(ct,"isObject",it),a(at,"isPrimitive",ft),a(at,"isObject",lt);var bt=1e308;function st(t){var r,e,n,o,u,i;if(r={iter:bt},arguments.length&&(o=pt(r,t)))throw o;return i=0,u=3,a(e={},"next",c),a(e,"return",f),b&&a(e,b,l),e;function c(){if(i+=1,n||i>r.iter)return{done:!0};for(u+=1;!1===_(u);)u+=1;return{value:u,done:!1}}function f(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return st(r)}}export{st as default};
//# sourceMappingURL=mod.js.map
