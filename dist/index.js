"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var l=o(function(I,f){
var w=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function O(t,r){return w(r)?x(r,"iter")&&(t.iter=r.iter,!y(r.iter))?new TypeError(s('0Zt2t',"iter",r.iter)):null:new TypeError(s('0Zt2V',r));}f.exports=O
});var g=o(function(N,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/symbol-iterator/dist'),E=require('@stdlib/math-base-assert-is-composite/dist'),P=l(),T=1e308;function c(t){var r,e,v,n,i,a;if(r={iter:T},arguments.length&&(n=P(r,t),n))throw n;return a=0,i=3,e={},u(e,"next",q),u(e,"return",p),m&&u(e,m,b),e;function q(){if(a+=1,v||a>r.iter)return{done:!0};for(i+=1;E(i)===!1;)i+=1;return{value:i,done:!1}}function p(h){return v=!0,arguments.length?{value:h,done:!0}:{done:!0}}function b(){return c(r)}}d.exports=c
});var j=g();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
