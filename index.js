// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCompositesSeq=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,f,l,s,p,g,d,b;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,C=V.__defineSetter__,$=V.__lookupGetter__,N=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=P;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Object.prototype.hasOwnProperty;function G(r,e){return null!=r&&Z.call(r,e)}var L="function"==typeof Symbol?Symbol:void 0;var M="function"==typeof L&&"symbol"==typeof L("foo")&&G(L,"iterator")&&"symbol"==typeof L.iterator?Symbol.iterator:null,U=Math.sqrt,W=Math.floor,X=9007199254740991,q={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function Y(r){return W(r)===r}var z=Number.POSITIVE_INFINITY;function D(r){return Y(r)&&r>1&&r!==z&&!1===function(r){var e,t;if(W(r)!==r)return!1;if(r<=3)return r>1;if(r>X||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(q[r])return!0;for(e=W(U(r)),t=11;t<=e;t+=210)if(r%t==0||r%(t+2)==0||r%(t+6)==0||r%(t+8)==0||r%(t+12)==0||r%(t+18)==0||r%(t+20)==0||r%(t+26)==0||r%(t+30)==0||r%(t+32)==0||r%(t+36)==0||r%(t+42)==0||r%(t+48)==0||r%(t+50)==0||r%(t+56)==0||r%(t+60)==0||r%(t+62)==0||r%(t+68)==0||r%(t+72)==0||r%(t+78)==0||r%(t+86)==0||r%(t+90)==0||r%(t+92)==0||r%(t+96)==0||r%(t+98)==0||r%(t+102)==0||r%(t+110)==0||r%(t+116)==0||r%(t+120)==0||r%(t+126)==0||r%(t+128)==0||r%(t+132)==0||r%(t+138)==0||r%(t+140)==0||r%(t+146)==0||r%(t+152)==0||r%(t+156)==0||r%(t+158)==0||r%(t+162)==0||r%(t+168)==0||r%(t+170)==0||r%(t+176)==0||r%(t+180)==0||r%(t+182)==0||r%(t+186)==0||r%(t+188)==0||r%(t+198)==0||r%(t+200)==0)return!1;return!0}(r)}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return H&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q="function"==typeof L?L.toStringTag:"";var rr=J()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[Q],e=G(r,Q);try{r[Q]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return K.call(r)};var er=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var tr=/./;function nr(r){return"boolean"==typeof r}var ir=Boolean,or=Boolean.prototype.toString;var ar=J();function cr(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function ur(r){return nr(r)||cr(r)}B(ur,"isPrimitive",nr),B(ur,"isObject",cr);var fr="object"==typeof self?self:null,lr="object"==typeof window?window:null,sr="object"==typeof global?global:null,pr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!nr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(pr)return pr;if(fr)return fr;if(lr)return lr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=gr.document&&gr.document.childNodes,br=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var hr=/^\s*function\s*([^(]*)/i;function vr(r){return null!==r&&"object"==typeof r}function wr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=hr.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(yr,"REGEXP",hr),B(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var mr="function"==typeof tr||"object"==typeof br||"function"==typeof dr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var _r,Er=Object,Or=Object.getPrototypeOf;_r=jr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=_r;var xr=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!er(r)}(r)&&(e=function(r){return null==r?null:(r=Er(r),Sr(r))}(r),!e||!G(r,"constructor")&&G(e,"constructor")&&jr(e.constructor)&&"[object Function]"===rr(e.constructor)&&G(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!G(r,e))return!1;return!0}(r)))}function kr(r){return"number"==typeof r}var Ir=Number,Pr=Ir.prototype.toString;var Vr=J();function Ar(r){return"object"==typeof r&&(r instanceof Ir||(Vr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Fr(r){return kr(r)||Ar(r)}B(Fr,"isPrimitive",kr),B(Fr,"isObject",Ar);var Cr=Ir.NEGATIVE_INFINITY;function $r(r){return r<z&&r>Cr&&Y(r)}function Nr(r){return kr(r)&&$r(r)}function Rr(r){return Ar(r)&&$r(r.valueOf())}function Br(r){return Nr(r)||Rr(r)}function Zr(r){return Nr(r)&&r>=0}function Gr(r){return Rr(r)&&r.valueOf()>=0}function Lr(r){return Zr(r)||Gr(r)}function Mr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}B(Br,"isPrimitive",Nr),B(Br,"isObject",Rr),B(Lr,"isPrimitive",Zr),B(Lr,"isObject",Gr);return function r(e){var t,n,i,o,a,c;if(t={iter:1e308},arguments.length&&(o=function(r,e){return Tr(e)?G(e,"iter")&&(r.iter=e.iter,!Zr(e.iter))?new TypeError(Mr("0Zt2t","iter",e.iter)):null:new TypeError(Mr("0Zt2V",e))}(t,e)))throw o;return c=0,a=3,B(n={},"next",(function(){if(c+=1,i||c>t.iter)return{done:!0};a+=1;for(;!1===D(a);)a+=1;return{value:a,done:!1}})),B(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),M&&B(n,M,(function(){return r(t)})),n}}));
//# sourceMappingURL=index.js.map
