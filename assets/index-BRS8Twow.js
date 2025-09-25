import{r as Fh,g as Ap,a as Cp}from"./vendor-gH-7aFTg.js";import{O as Di}from"./openai-DLX2OlCn.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const f of y.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function c(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(d){if(d.ep)return;d.ep=!0;const y=c(d);fetch(d.href,y)}})();var yr={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Lp(){if(Th)return Si;Th=1;var u=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function c(s,d,y){var f=null;if(y!==void 0&&(f=""+y),d.key!==void 0&&(f=""+d.key),"key"in d){y={};for(var m in d)m!=="key"&&(y[m]=d[m])}else y=d;return d=y.ref,{$$typeof:u,type:s,key:f,ref:d!==void 0?d:null,props:y}}return Si.Fragment=l,Si.jsx=c,Si.jsxs=c,Si}var Ah;function Dp(){return Ah||(Ah=1,yr.exports=Lp()),yr.exports}var N=Dp(),ne=Fh();const Ep=Ap(ne);var pr={exports:{}},Ti={},mr={exports:{}},gr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function Pp(){return Ch||(Ch=1,(function(u){function l(D,M){var I=D.length;D.push(M);e:for(;0<I;){var W=I-1>>>1,ee=D[W];if(0<d(ee,M))D[W]=M,D[I]=ee,I=W;else break e}}function c(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var M=D[0],I=D.pop();if(I!==M){D[0]=I;e:for(var W=0,ee=D.length,Y=ee>>>1;W<Y;){var V=2*(W+1)-1,j=D[V],Pe=V+1,gt=D[Pe];if(0>d(j,I))Pe<ee&&0>d(gt,j)?(D[W]=gt,D[Pe]=I,W=Pe):(D[W]=j,D[V]=I,W=V);else if(Pe<ee&&0>d(gt,I))D[W]=gt,D[Pe]=I,W=Pe;else break e}}return M}function d(D,M){var I=D.sortIndex-M.sortIndex;return I!==0?I:D.id-M.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;u.unstable_now=function(){return y.now()}}else{var f=Date,m=f.now();u.unstable_now=function(){return f.now()-m}}var v=[],S=[],E=1,k=null,C=3,B=!1,_=!1,q=!1,ie=!1,_e=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function be(D){for(var M=c(S);M!==null;){if(M.callback===null)s(S);else if(M.startTime<=D)s(S),M.sortIndex=M.expirationTime,l(v,M);else break;M=c(S)}}function ft(D){if(q=!1,be(D),!_)if(c(v)!==null)_=!0,we||(we=!0,ze());else{var M=c(S);M!==null&&oe(ft,M.startTime-D)}}var we=!1,Me=-1,Qe=5,zt=-1;function Un(){return ie?!0:!(u.unstable_now()-zt<Qe)}function Wt(){if(ie=!1,we){var D=u.unstable_now();zt=D;var M=!0;try{e:{_=!1,q&&(q=!1,Ee(Me),Me=-1),B=!0;var I=C;try{t:{for(be(D),k=c(v);k!==null&&!(k.expirationTime>D&&Un());){var W=k.callback;if(typeof W=="function"){k.callback=null,C=k.priorityLevel;var ee=W(k.expirationTime<=D);if(D=u.unstable_now(),typeof ee=="function"){k.callback=ee,be(D),M=!0;break t}k===c(v)&&s(v),be(D)}else s(v);k=c(v)}if(k!==null)M=!0;else{var Y=c(S);Y!==null&&oe(ft,Y.startTime-D),M=!1}}break e}finally{k=null,C=I,B=!1}M=void 0}}finally{M?ze():we=!1}}}var ze;if(typeof ce=="function")ze=function(){ce(Wt)};else if(typeof MessageChannel<"u"){var _n=new MessageChannel,O=_n.port2;_n.port1.onmessage=Wt,ze=function(){O.postMessage(null)}}else ze=function(){_e(Wt,0)};function oe(D,M){Me=_e(function(){D(u.unstable_now())},M)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(D){switch(C){case 1:case 2:case 3:var M=3;break;default:M=C}var I=C;C=M;try{return D()}finally{C=I}},u.unstable_requestPaint=function(){ie=!0},u.unstable_runWithPriority=function(D,M){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=C;C=D;try{return M()}finally{C=I}},u.unstable_scheduleCallback=function(D,M,I){var W=u.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,D){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=I+ee,D={id:E++,callback:M,priorityLevel:D,startTime:I,expirationTime:ee,sortIndex:-1},I>W?(D.sortIndex=I,l(S,D),c(v)===null&&D===c(S)&&(q?(Ee(Me),Me=-1):q=!0,oe(ft,I-W))):(D.sortIndex=ee,l(v,D),_||B||(_=!0,we||(we=!0,ze()))),D},u.unstable_shouldYield=Un,u.unstable_wrapCallback=function(D){var M=C;return function(){var I=C;C=M;try{return D.apply(this,arguments)}finally{C=I}}}})(gr)),gr}var Lh;function kp(){return Lh||(Lh=1,mr.exports=Pp()),mr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Rp(){if(Dh)return Ti;Dh=1;var u=kp(),l=Fh(),c=Cp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(y(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return m(i),e;if(o===a)return m(i),t;o=o.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=o;else{for(var r=!1,h=i.child;h;){if(h===n){r=!0,n=i,a=o;break}if(h===a){r=!0,a=i,n=o;break}h=h.sibling}if(!r){for(h=o.child;h;){if(h===n){r=!0,n=o,a=i;break}if(h===a){r=!0,a=o,n=i;break}h=h.sibling}if(!r)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),Ee=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Un=Symbol.for("react.memo_cache_sentinel"),Wt=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=Wt&&e[Wt]||e["@@iterator"],typeof e=="function"?e:null)}var _n=Symbol.for("react.client.reference");function O(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_n?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case ie:return"Profiler";case q:return"StrictMode";case ft:return"Suspense";case we:return"SuspenseList";case zt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ce:return(e.displayName||"Context")+".Provider";case Ee:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:O(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return O(e(t))}catch{}}return null}var oe=Array.isArray,D=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},W=[],ee=-1;function Y(e){return{current:e}}function V(e){0>ee||(e.current=W[ee],W[ee]=null,ee--)}function j(e,t){ee++,W[ee]=e.current,e.current=t}var Pe=Y(null),gt=Y(null),Vt=Y(null),Pi=Y(null);function ki(e,t){switch(j(Vt,t),j(gt,e),j(Pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zu(t),e=Ku(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(Pe),j(Pe,e)}function Fn(){V(Pe),V(gt),V(Vt)}function $o(e){e.memoizedState!==null&&j(Pi,e);var t=Pe.current,n=Ku(t,e.type);t!==n&&(j(gt,e),j(Pe,n))}function Ri(e){gt.current===e&&(V(Pe),V(gt)),Pi.current===e&&(V(Pi),mi._currentValue=I)}var el=Object.prototype.hasOwnProperty,tl=u.unstable_scheduleCallback,nl=u.unstable_cancelCallback,ef=u.unstable_shouldYield,tf=u.unstable_requestPaint,vt=u.unstable_now,nf=u.unstable_getCurrentPriorityLevel,Rr=u.unstable_ImmediatePriority,Nr=u.unstable_UserBlockingPriority,Ni=u.unstable_NormalPriority,af=u.unstable_LowPriority,xr=u.unstable_IdlePriority,of=u.log,lf=u.unstable_setDisableYieldValue,Ca=null,Xe=null;function Ht(e){if(typeof of=="function"&&lf(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(Ca,e)}catch{}}var Ze=Math.clz32?Math.clz32:cf,sf=Math.log,rf=Math.LN2;function cf(e){return e>>>=0,e===0?32:31-(sf(e)/rf|0)|0}var xi=256,Mi=4194304;function mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,o=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~o,a!==0?i=mn(a):(r&=h,r!==0?i=mn(r):n||(n=h&~e,n!==0&&(i=mn(n))))):(h=a&~o,h!==0?i=mn(h):r!==0?i=mn(r):n||(n=a&~e,n!==0&&(i=mn(n)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:i}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function df(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mr(){var e=xi;return xi<<=1,(xi&4194048)===0&&(xi=256),e}function Or(){var e=Mi;return Mi<<=1,(Mi&62914560)===0&&(Mi=4194304),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uf(e,t,n,a,i,o){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,p=e.expirationTimes,T=e.hiddenUpdates;for(n=r&~n;0<n;){var P=31-Ze(n),x=1<<P;h[P]=0,p[P]=-1;var A=T[P];if(A!==null)for(T[P]=null,P=0;P<A.length;P++){var L=A[P];L!==null&&(L.lane&=-536870913)}n&=~x}a!==0&&Ir(e,a,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(r&~t))}function Ir(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ze(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Ur(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ze(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function il(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ol(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _r(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:mh(e.type))}function hf(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var Yt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+Yt,We="__reactProps$"+Yt,qn="__reactContainer$"+Yt,ll="__reactEvents$"+Yt,ff="__reactListeners$"+Yt,yf="__reactHandles$"+Yt,Fr="__reactResources$"+Yt,Ea="__reactMarker$"+Yt;function sl(e){delete e[Fe],delete e[We],delete e[ll],delete e[ff],delete e[yf]}function Bn(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=th(e);e!==null;){if(n=e[Fe])return n;e=th(e)}return t}e=n,n=e.parentNode}return null}function Gn(e){if(e=e[Fe]||e[qn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function zn(e){var t=e[Fr];return t||(t=e[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Ea]=!0}var qr=new Set,Br={};function gn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Br[e]=t,e=0;e<t.length;e++)qr.add(t[e])}var pf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gr={},zr={};function mf(e){return el.call(zr,e)?!0:el.call(Gr,e)?!1:pf.test(e)?zr[e]=!0:(Gr[e]=!0,!1)}function Ii(e,t,n){if(mf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ui(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Lt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var rl,Wr;function Vn(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||"",Wr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rl+e+Wr}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(L){var A=L}Reflect.construct(e,[],x)}else{try{x.call()}catch(L){A=L}e.call(x.prototype)}}else{try{throw Error()}catch(L){A=L}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(L){if(L&&A&&typeof L.stack=="string")return[L.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),r=o[0],h=o[1];if(r&&h){var p=r.split(`
`),T=h.split(`
`);for(i=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===p.length||i===T.length)for(a=p.length-1,i=T.length-1;1<=a&&0<=i&&p[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(p[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||p[a]!==T[i]){var P=`
`+p[a].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=a&&0<=i);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Vn(n):""}function gf(e){switch(e.tag){case 26:case 27:case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 15:return dl(e.type,!1);case 11:return dl(e.type.render,!1);case 1:return dl(e.type,!0);case 31:return Vn("Activity");default:return""}}function Vr(e){try{var t="";do t+=gf(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function it(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vf(e){var t=Hr(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,o.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=vf(e))}function Yr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Hr(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bf=/[\n"\\]/g;function ot(e){return e.replace(bf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ul(e,t,n,a,i,o,r,h){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+it(t)):e.value!==""+it(t)&&(e.value=""+it(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?hl(e,r,it(t)):n!=null?hl(e,r,it(n)):a!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+it(h):e.removeAttribute("name")}function jr(e,t,n,a,i,o,r,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+it(n):"",t=t!=null?""+it(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function hl(e,t,n){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Hn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+it(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qr(e,t,n){if(t!=null&&(t=""+it(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+it(n):""}function Xr(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(oe(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=it(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zr(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||wf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Kr(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Zr(e,i,a)}else for(var o in t)t.hasOwnProperty(o)&&Zr(e,o,t[o])}function fl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return Tf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yl=null;function pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,Qn=null;function Jr(e){var t=Gn(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(ul(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[We]||null;if(!i)throw Error(s(90));ul(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Yr(a)}break e;case"textarea":Qr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}}}var ml=!1;function $r(e,t,n){if(ml)return e(t,n);ml=!0;try{var a=e(t);return a}finally{if(ml=!1,(jn!==null||Qn!==null)&&(Lo(),jn&&(t=jn,e=Qn,Qn=jn=null,Jr(t),e)))for(t=0;t<e.length;t++)Jr(e[t])}}function ka(e,t){var n=e.stateNode;if(n===null)return null;var a=n[We]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gl=!1;if(Dt)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{gl=!1}var jt=null,vl=null,Bi=null;function ec(){if(Bi)return Bi;var e,t=vl,n=t.length,a,i="value"in jt?jt.value:jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===i[o-a];a++);return Bi=i.slice(e,1<a?1-a:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function tc(){return!1}function Ve(e){function t(n,a,i,o,r){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zi:tc,this.isPropagationStopped=tc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Ve(vn),Na=E({},vn,{view:0,detail:0}),Af=Ve(Na),bl,wl,xa,Vi=E({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(bl=e.screenX-xa.screenX,wl=e.screenY-xa.screenY):wl=bl=0,xa=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),nc=Ve(Vi),Cf=E({},Vi,{dataTransfer:0}),Lf=Ve(Cf),Df=E({},Na,{relatedTarget:0}),Sl=Ve(Df),Ef=E({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Ve(Ef),kf=E({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=Ve(kf),Nf=E({},vn,{data:0}),ac=Ve(Nf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function Tl(){return If}var Uf=E({},Na,{key:function(e){if(e.key){var t=xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=Ve(Uf),Ff=E({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Ve(Ff),qf=E({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),Bf=Ve(qf),Gf=E({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ve(Gf),Wf=E({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vf=Ve(Wf),Hf=E({},vn,{newState:0,oldState:0}),Yf=Ve(Hf),jf=[9,13,27,32],Al=Dt&&"CompositionEvent"in window,Ma=null;Dt&&"documentMode"in document&&(Ma=document.documentMode);var Qf=Dt&&"TextEvent"in window&&!Ma,oc=Dt&&(!Al||Ma&&8<Ma&&11>=Ma),lc=" ",sc=!1;function rc(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Xf(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(sc=!0,lc);case"textInput":return e=t.data,e===lc&&sc?null:e;default:return null}}function Zf(e,t){if(Xn)return e==="compositionend"||!Al&&rc(e,t)?(e=ec(),Bi=vl=jt=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function uc(e,t,n,a){jn?Qn?Qn.push(a):Qn=[a]:jn=a,t=No(t,"onChange"),0<t.length&&(n=new Wi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Oa=null,Ia=null;function Jf(e){Hu(e,0)}function Hi(e){var t=Pa(e);if(Yr(t))return e}function hc(e,t){if(e==="change")return t}var fc=!1;if(Dt){var Cl;if(Dt){var Ll="oninput"in document;if(!Ll){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),Ll=typeof yc.oninput=="function"}Cl=Ll}else Cl=!1;fc=Cl&&(!document.documentMode||9<document.documentMode)}function pc(){Oa&&(Oa.detachEvent("onpropertychange",mc),Ia=Oa=null)}function mc(e){if(e.propertyName==="value"&&Hi(Ia)){var t=[];uc(t,Ia,e,pl(e)),$r(Jf,t)}}function $f(e,t,n){e==="focusin"?(pc(),Oa=t,Ia=n,Oa.attachEvent("onpropertychange",mc)):e==="focusout"&&pc()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Ia)}function ty(e,t){if(e==="click")return Hi(t)}function ny(e,t){if(e==="input"||e==="change")return Hi(t)}function ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:ay;function Ua(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!el.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=gc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gc(n)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var iy=Dt&&"documentMode"in document&&11>=document.documentMode,Zn=null,El=null,_a=null,Pl=!1;function Sc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Zn==null||Zn!==Fi(a)||(a=Zn,"selectionStart"in a&&Dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),_a&&Ua(_a,a)||(_a=a,a=No(El,"onSelect"),0<a.length&&(t=new Wi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Zn)))}function bn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:bn("Animation","AnimationEnd"),animationiteration:bn("Animation","AnimationIteration"),animationstart:bn("Animation","AnimationStart"),transitionrun:bn("Transition","TransitionRun"),transitionstart:bn("Transition","TransitionStart"),transitioncancel:bn("Transition","TransitionCancel"),transitionend:bn("Transition","TransitionEnd")},kl={},Tc={};Dt&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function wn(e){if(kl[e])return kl[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return kl[e]=t[n];return e}var Ac=wn("animationend"),Cc=wn("animationiteration"),Lc=wn("animationstart"),oy=wn("transitionrun"),ly=wn("transitionstart"),sy=wn("transitioncancel"),Dc=wn("transitionend"),Ec=new Map,Rl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rl.push("scrollEnd");function yt(e,t){Ec.set(e,t),gn(t,[e])}var Pc=new WeakMap;function lt(e,t){if(typeof e=="object"&&e!==null){var n=Pc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vr(t)},Pc.set(e,t),t)}return{value:e,source:t,stack:Vr(t)}}var st=[],Jn=0,Nl=0;function Yi(){for(var e=Jn,t=Nl=Jn=0;t<e;){var n=st[t];st[t++]=null;var a=st[t];st[t++]=null;var i=st[t];st[t++]=null;var o=st[t];if(st[t++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}o!==0&&kc(n,i,o)}}function ji(e,t,n,a){st[Jn++]=e,st[Jn++]=t,st[Jn++]=n,st[Jn++]=a,Nl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xl(e,t,n,a){return ji(e,t,n,a),Qi(e)}function $n(e,t){return ji(e,null,null,t),Qi(e)}function kc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-Ze(n),e=o.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),o):null}function Qi(e){if(50<ri)throw ri=0,Fs=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function ry(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,a){return new ry(e,t,n,a)}function Ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Et(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xi(e,t,n,a,i,o){var r=0;if(a=e,typeof e=="function")Ml(e)&&(r=1);else if(typeof e=="string")r=dp(e,n,Pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case zt:return e=Je(31,n,t,i),e.elementType=zt,e.lanes=o,e;case _:return Sn(n.children,i,o,t);case q:r=8,i|=24;break;case ie:return e=Je(12,n,t,i|2),e.elementType=ie,e.lanes=o,e;case ft:return e=Je(13,n,t,i),e.elementType=ft,e.lanes=o,e;case we:return e=Je(19,n,t,i),e.elementType=we,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:case ce:r=10;break e;case Ee:r=9;break e;case be:r=11;break e;case Me:r=14;break e;case Qe:r=16,a=null;break e}r=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Je(r,n,t,i),t.elementType=e,t.type=a,t.lanes=o,t}function Sn(e,t,n,a){return e=Je(7,e,a,t),e.lanes=n,e}function Ol(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ta=[],na=0,Zi=null,Ki=0,rt=[],ct=0,Tn=null,Pt=1,kt="";function An(e,t){ta[na++]=Ki,ta[na++]=Zi,Zi=e,Ki=t}function Nc(e,t,n){rt[ct++]=Pt,rt[ct++]=kt,rt[ct++]=Tn,Tn=e;var a=Pt;e=kt;var i=32-Ze(a)-1;a&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var r=i-i%5;o=(a&(1<<r)-1).toString(32),a>>=r,i-=r,Pt=1<<32-Ze(t)+i|n<<i|a,kt=o+e}else Pt=1<<o|n<<i|a,kt=e}function Ul(e){e.return!==null&&(An(e,1),Nc(e,1,0))}function _l(e){for(;e===Zi;)Zi=ta[--na],ta[na]=null,Ki=ta[--na],ta[na]=null;for(;e===Tn;)Tn=rt[--ct],rt[ct]=null,kt=rt[--ct],rt[ct]=null,Pt=rt[--ct],rt[ct]=null}var Be=null,ge=null,te=!1,Cn=null,bt=!1,Fl=Error(s(519));function Ln(e){var t=Error(s(418,""));throw Ba(lt(t,e)),Fl}function xc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Fe]=e,t[We]=a,n){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(n=0;n<di.length;n++)K(di[n],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),jr(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),_i(t);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Xr(t,a.value,a.defaultValue,a.children),_i(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Xu(t.textContent,n)?(a.popover!=null&&(K("beforetoggle",t),K("toggle",t)),a.onScroll!=null&&K("scroll",t),a.onScrollEnd!=null&&K("scrollend",t),a.onClick!=null&&(t.onclick=xo),t=!0):t=!1,t||Ln(e)}function Mc(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Be=Be.return}}function Fa(e){if(e!==Be)return!1;if(!te)return Mc(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||er(e.type,e.memoizedProps)),n=!n),n&&ge&&Ln(e),Mc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){ge=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}ge=null}}else t===27?(t=ge,dn(e.type)?(e=ir,ir=null,ge=e):ge=t):ge=Be?mt(e.stateNode.nextSibling):null;return!0}function qa(){ge=Be=null,te=!1}function Oc(){var e=Cn;return e!==null&&(je===null?je=e:je.push.apply(je,e),Cn=null),e}function Ba(e){Cn===null?Cn=[e]:Cn.push(e)}var ql=Y(null),Dn=null,Rt=null;function Qt(e,t,n){j(ql,t._currentValue),t._currentValue=n}function Nt(e){e._currentValue=ql.current,V(ql)}function Bl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Gl(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var r=i.child;o=o.firstContext;e:for(;o!==null;){var h=o;o=i;for(var p=0;p<t.length;p++)if(h.context===t[p]){o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Bl(o.return,n,e),a||(r=null);break e}o=h.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(s(341));r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Bl(r,n,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Ga(e,t,n,a){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var h=i.type;Ke(i.pendingProps.value,r.value)||(e!==null?e.push(h):e=[h])}}else if(i===Pi.current){if(r=i.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}i=i.return}e!==null&&Gl(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!Ke(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function En(e){Dn=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return Ic(Dn,e)}function $i(e,t){return Dn===null&&En(e),Ic(e,t)}function Ic(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rt===null){if(e===null)throw Error(s(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return n}var cy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},dy=u.unstable_scheduleCallback,uy=u.unstable_NormalPriority,Le={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zl(){return{controller:new cy,data:new Map,refCount:0}}function za(e){e.refCount--,e.refCount===0&&dy(uy,function(){e.controller.abort()})}var Wa=null,Wl=0,aa=0,ia=null;function hy(e,t){if(Wa===null){var n=Wa=[];Wl=0,aa=Hs(),ia={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Wl++,t.then(Uc,Uc),t}function Uc(){if(--Wl===0&&Wa!==null){ia!==null&&(ia.status="fulfilled");var e=Wa;Wa=null,aa=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fy(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var _c=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&hy(e,t),_c!==null&&_c(e,t)};var Pn=Y(null);function Vl(){var e=Pn.current;return e!==null?e:ye.pooledCache}function eo(e,t){t===null?j(Pn,Pn.current):j(Pn,t.pool)}function Fc(){var e=Vl();return e===null?null:{parent:Le._currentValue,pool:e}}var Va=Error(s(460)),qc=Error(s(474)),to=Error(s(542)),Hl={then:function(){}};function Bc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function no(){}function Gc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(no,no),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e;default:if(typeof t.status=="string")t.then(no,no);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e}throw Ha=t,Va}}var Ha=null;function zc(){if(Ha===null)throw Error(s(459));var e=Ha;return Ha=null,e}function Wc(e){if(e===Va||e===to)throw Error(s(483))}var Xt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(se&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Qi(e),kc(e,null,n),t}return ji(e,a,t,n),Qi(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ur(e,n)}}function Ql(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=r:o=o.next=r,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xl=!1;function ja(){if(Xl){var e=ia;if(e!==null)throw e}}function Qa(e,t,n,a){Xl=!1;var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,r=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var p=h,T=p.next;p.next=null,r===null?o=T:r.next=T,r=p;var P=e.alternate;P!==null&&(P=P.updateQueue,h=P.lastBaseUpdate,h!==r&&(h===null?P.firstBaseUpdate=T:h.next=T,P.lastBaseUpdate=p))}if(o!==null){var x=i.baseState;r=0,P=T=p=null,h=o;do{var A=h.lane&-536870913,L=A!==h.lane;if(L?(J&A)===A:(a&A)===A){A!==0&&A===aa&&(Xl=!0),P!==null&&(P=P.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var H=e,G=h;A=t;var he=n;switch(G.tag){case 1:if(H=G.payload,typeof H=="function"){x=H.call(he,x,A);break e}x=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=G.payload,A=typeof H=="function"?H.call(he,x,A):H,A==null)break e;x=E({},x,A);break e;case 2:Xt=!0}}A=h.callback,A!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[A]:L.push(A))}else L={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},P===null?(T=P=L,p=x):P=P.next=L,r|=A;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;L=h,h=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);P===null&&(p=x),i.baseState=p,i.firstBaseUpdate=T,i.lastBaseUpdate=P,o===null&&(i.shared.lanes=0),ln|=r,e.lanes=r,e.memoizedState=x}}function Vc(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Hc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vc(n[e],t)}var oa=Y(null),ao=Y(0);function Yc(e,t){e=Ft,j(ao,e),j(oa,t),Ft=e|t.baseLanes}function Zl(){j(ao,Ft),j(oa,oa.current)}function Kl(){Ft=ao.current,V(oa),V(ao)}var Jt=0,Q=null,de=null,Ae=null,io=!1,la=!1,kn=!1,oo=0,Xa=0,sa=null,yy=0;function Se(){throw Error(s(321))}function Jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function $l(e,t,n,a,i,o){return Jt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?kd:Rd,kn=!1,o=n(a,i),kn=!1,la&&(o=Qc(t,n,a,i)),jc(e),o}function jc(e){D.H=ho;var t=de!==null&&de.next!==null;if(Jt=0,Ae=de=Q=null,io=!1,Xa=0,sa=null,t)throw Error(s(300));e===null||Re||(e=e.dependencies,e!==null&&Ji(e)&&(Re=!0))}function Qc(e,t,n,a){Q=e;var i=0;do{if(la&&(sa=null),Xa=0,la=!1,25<=i)throw Error(s(301));if(i+=1,Ae=de=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Sy,o=t(n,a)}while(la);return o}function py(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Za(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Q.flags|=1024),t}function es(){var e=oo!==0;return oo=0,e}function ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ns(e){if(io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}io=!1}Jt=0,Ae=de=Q=null,la=!1,Xa=oo=0,sa=null}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Q.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Ce(){if(de===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ae===null?Q.memoizedState:Ae.next;if(t!==null)Ae=t,de=e;else{if(e===null)throw Q.alternate===null?Error(s(467)):Error(s(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ae===null?Q.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Za(e){var t=Xa;return Xa+=1,sa===null&&(sa=[]),e=Gc(sa,e,t),t=Q,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?kd:Rd),e}function lo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Za(e);if(e.$$typeof===ce)return qe(e)}throw Error(s(438,String(e)))}function is(e){var t=null,n=Q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=as(),Q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Un;return t.index++,n}function xt(e,t){return typeof t=="function"?t(e):t}function so(e){var t=Ce();return os(t,de,e)}function os(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,o=a.pending;if(o!==null){if(i!==null){var r=i.next;i.next=o.next,o.next=r}t.baseQueue=i=o,a.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var h=r=null,p=null,T=t,P=!1;do{var x=T.lane&-536870913;if(x!==T.lane?(J&x)===x:(Jt&x)===x){var A=T.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),x===aa&&(P=!0);else if((Jt&A)===A){T=T.next,A===aa&&(P=!0);continue}else x={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(h=p=x,r=o):p=p.next=x,Q.lanes|=A,ln|=A;x=T.action,kn&&n(o,x),o=T.hasEagerState?T.eagerState:n(o,x)}else A={lane:x,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(h=p=A,r=o):p=p.next=A,Q.lanes|=x,ln|=x;T=T.next}while(T!==null&&T!==t);if(p===null?r=o:p.next=h,!Ke(o,e.memoizedState)&&(Re=!0,P&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=r,e.baseQueue=p,a.lastRenderedState=o}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ls(e){var t=Ce(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do o=e(o,r.action),r=r.next;while(r!==i);Ke(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Xc(e,t,n){var a=Q,i=Ce(),o=te;if(o){if(n===void 0)throw Error(s(407));n=n()}else n=t();var r=!Ke((de||i).memoizedState,n);r&&(i.memoizedState=n,Re=!0),i=i.queue;var h=Jc.bind(null,a,i,e);if(Ka(2048,8,h,[e]),i.getSnapshot!==t||r||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,ra(9,ro(),Kc.bind(null,a,i,n,t),null),ye===null)throw Error(s(349));o||(Jt&124)!==0||Zc(a,t,n)}return n}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t=as(),Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kc(e,t,n,a){t.value=n,t.getSnapshot=a,$c(t)&&ed(e)}function Jc(e,t,n){return n(function(){$c(t)&&ed(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function ed(e){var t=$n(e,2);t!==null&&at(t,e,2)}function ss(e){var t=He();if(typeof e=="function"){var n=e;if(e=n(),kn){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:e},t}function td(e,t,n,a){return e.baseState=n,os(e,de,typeof a=="function"?a:xt)}function my(e,t,n,a,i){if(uo(e))throw Error(s(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};D.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,nd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function nd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var o=D.T,r={};D.T=r;try{var h=n(i,a),p=D.S;p!==null&&p(r,h),ad(e,t,h)}catch(T){rs(e,t,T)}finally{D.T=o}}else try{o=n(i,a),ad(e,t,o)}catch(T){rs(e,t,T)}}function ad(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){id(e,t,a)},function(a){return rs(e,t,a)}):id(e,t,n)}function id(e,t,n){t.status="fulfilled",t.value=n,od(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,nd(e,n)))}function rs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,od(t),t=t.next;while(t!==a)}e.action=null}function od(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ld(e,t){return t}function sd(e,t){if(te){var n=ye.formState;if(n!==null){e:{var a=Q;if(te){if(ge){t:{for(var i=ge,o=bt;i.nodeType!==8;){if(!o){i=null;break t}if(i=mt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){ge=mt(i.nextSibling),a=i.data==="F!";break e}}Ln(a)}a=!1}a&&(t=n[0])}}return n=He(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ld,lastRenderedState:t},n.queue=a,n=Dd.bind(null,Q,a),a.dispatch=n,a=ss(!1),o=fs.bind(null,Q,!1,a.queue),a=He(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=my.bind(null,Q,i,o,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function rd(e){var t=Ce();return cd(t,de,e)}function cd(e,t,n){if(t=os(e,t,ld)[0],e=so(xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Za(t)}catch(r){throw r===Va?to:r}else a=t;t=Ce();var i=t.queue,o=i.dispatch;return n!==t.memoizedState&&(Q.flags|=2048,ra(9,ro(),gy.bind(null,i,n),null)),[a,o,e]}function gy(e,t){e.action=t}function dd(e){var t=Ce(),n=de;if(n!==null)return cd(t,n,e);Ce(),t=t.memoizedState,n=Ce();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ra(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Q.updateQueue,t===null&&(t=as(),Q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ro(){return{destroy:void 0,resource:void 0}}function ud(){return Ce().memoizedState}function co(e,t,n,a){var i=He();a=a===void 0?null:a,Q.flags|=e,i.memoizedState=ra(1|t,ro(),n,a)}function Ka(e,t,n,a){var i=Ce();a=a===void 0?null:a;var o=i.memoizedState.inst;de!==null&&a!==null&&Jl(a,de.memoizedState.deps)?i.memoizedState=ra(t,o,n,a):(Q.flags|=e,i.memoizedState=ra(1|t,o,n,a))}function hd(e,t){co(8390656,8,e,t)}function fd(e,t){Ka(2048,8,e,t)}function yd(e,t){return Ka(4,2,e,t)}function pd(e,t){return Ka(4,4,e,t)}function md(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){n=n!=null?n.concat([e]):null,Ka(4,4,md.bind(null,t,e),n)}function cs(){}function vd(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Jl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Jl(t,a[1]))return a[0];if(a=e(),kn){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a}function ds(e,t,n){return n===void 0||(Jt&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Tu(),Q.lanes|=e,ln|=e,n)}function wd(e,t,n,a){return Ke(n,t)?n:oa.current!==null?(e=ds(e,n,a),Ke(e,t)||(Re=!0),e):(Jt&42)===0?(Re=!0,e.memoizedState=n):(e=Tu(),Q.lanes|=e,ln|=e,t)}function Sd(e,t,n,a,i){var o=M.p;M.p=o!==0&&8>o?o:8;var r=D.T,h={};D.T=h,fs(e,!1,t,n);try{var p=i(),T=D.S;if(T!==null&&T(h,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var P=fy(p,a);Ja(e,t,P,nt(e))}else Ja(e,t,a,nt(e))}catch(x){Ja(e,t,{then:function(){},status:"rejected",reason:x},nt())}finally{M.p=o,D.T=r}}function vy(){}function us(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=Td(e).queue;Sd(e,i,t,I,n===null?vy:function(){return Ad(e),n(a)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ad(e){var t=Td(e).next.queue;Ja(e,t,{},nt())}function hs(){return qe(mi)}function Cd(){return Ce().memoizedState}function Ld(){return Ce().memoizedState}function by(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=nt();e=Zt(n);var a=Kt(t,e,n);a!==null&&(at(a,t,n),Ya(a,t,n)),t={cache:zl()},e.payload=t;return}t=t.return}}function wy(e,t,n){var a=nt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},uo(e)?Ed(t,n):(n=xl(e,t,n,a),n!==null&&(at(n,e,a),Pd(n,t,a)))}function Dd(e,t,n){var a=nt();Ja(e,t,n,a)}function Ja(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(uo(e))Ed(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var r=t.lastRenderedState,h=o(r,n);if(i.hasEagerState=!0,i.eagerState=h,Ke(h,r))return ji(e,t,i,0),ye===null&&Yi(),!1}catch{}finally{}if(n=xl(e,t,i,a),n!==null)return at(n,e,a),Pd(n,t,a),!0}return!1}function fs(e,t,n,a){if(a={lane:2,revertLane:Hs(),action:a,hasEagerState:!1,eagerState:null,next:null},uo(e)){if(t)throw Error(s(479))}else t=xl(e,n,a,2),t!==null&&at(t,e,2)}function uo(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Ed(e,t){la=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ur(e,n)}}var ho={readContext:qe,use:lo,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se},kd={readContext:qe,use:lo,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:hd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,co(4194308,4,md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){co(4,2,e,t)},useMemo:function(e,t){var n=He();t=t===void 0?null:t;var a=e();if(kn){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=He();if(n!==void 0){var i=n(t);if(kn){Ht(!0);try{n(t)}finally{Ht(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=wy.bind(null,Q,e),[a.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:function(e){e=ss(e);var t=e.queue,n=Dd.bind(null,Q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cs,useDeferredValue:function(e,t){var n=He();return ds(n,e,t)},useTransition:function(){var e=ss(!1);return e=Sd.bind(null,Q,e.queue,!0,!1),He().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Q,i=He();if(te){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ye===null)throw Error(s(349));(J&124)!==0||Zc(a,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hd(Jc.bind(null,a,o,e),[e]),a.flags|=2048,ra(9,ro(),Kc.bind(null,a,o,n,t),null),n},useId:function(){var e=He(),t=ye.identifierPrefix;if(te){var n=kt,a=Pt;n=(a&~(1<<32-Ze(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=yy++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:hs,useFormState:sd,useActionState:sd,useOptimistic:function(e){var t=He();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fs.bind(null,Q,!0,n),n.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return He().memoizedState=by.bind(null,Q)}},Rd={readContext:qe,use:lo,useCallback:vd,useContext:qe,useEffect:fd,useImperativeHandle:gd,useInsertionEffect:yd,useLayoutEffect:pd,useMemo:bd,useReducer:so,useRef:ud,useState:function(){return so(xt)},useDebugValue:cs,useDeferredValue:function(e,t){var n=Ce();return wd(n,de.memoizedState,e,t)},useTransition:function(){var e=so(xt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Za(e),t]},useSyncExternalStore:Xc,useId:Cd,useHostTransitionStatus:hs,useFormState:rd,useActionState:rd,useOptimistic:function(e,t){var n=Ce();return td(n,de,e,t)},useMemoCache:is,useCacheRefresh:Ld},Sy={readContext:qe,use:lo,useCallback:vd,useContext:qe,useEffect:fd,useImperativeHandle:gd,useInsertionEffect:yd,useLayoutEffect:pd,useMemo:bd,useReducer:ls,useRef:ud,useState:function(){return ls(xt)},useDebugValue:cs,useDeferredValue:function(e,t){var n=Ce();return de===null?ds(n,e,t):wd(n,de.memoizedState,e,t)},useTransition:function(){var e=ls(xt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Za(e),t]},useSyncExternalStore:Xc,useId:Cd,useHostTransitionStatus:hs,useFormState:dd,useActionState:dd,useOptimistic:function(e,t){var n=Ce();return de!==null?td(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:is,useCacheRefresh:Ld},ca=null,$a=0;function fo(e){var t=$a;return $a+=1,ca===null&&(ca=[]),Gc(ca,e,t)}function ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yo(e,t){throw t.$$typeof===k?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nd(e){var t=e._init;return t(e._payload)}function xd(e){function t(b,g){if(e){var w=b.deletions;w===null?(b.deletions=[g],b.flags|=16):w.push(g)}}function n(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function a(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function i(b,g){return b=Et(b,g),b.index=0,b.sibling=null,b}function o(b,g,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<g?(b.flags|=67108866,g):w):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function h(b,g,w,R){return g===null||g.tag!==6?(g=Ol(w,b.mode,R),g.return=b,g):(g=i(g,w),g.return=b,g)}function p(b,g,w,R){var U=w.type;return U===_?P(b,g,w.props.children,R,w.key):g!==null&&(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Nd(U)===g.type)?(g=i(g,w.props),ei(g,w),g.return=b,g):(g=Xi(w.type,w.key,w.props,null,b.mode,R),ei(g,w),g.return=b,g)}function T(b,g,w,R){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Il(w,b.mode,R),g.return=b,g):(g=i(g,w.children||[]),g.return=b,g)}function P(b,g,w,R,U){return g===null||g.tag!==7?(g=Sn(w,b.mode,R,U),g.return=b,g):(g=i(g,w),g.return=b,g)}function x(b,g,w){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Ol(""+g,b.mode,w),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case C:return w=Xi(g.type,g.key,g.props,null,b.mode,w),ei(w,g),w.return=b,w;case B:return g=Il(g,b.mode,w),g.return=b,g;case Qe:var R=g._init;return g=R(g._payload),x(b,g,w)}if(oe(g)||ze(g))return g=Sn(g,b.mode,w,null),g.return=b,g;if(typeof g.then=="function")return x(b,fo(g),w);if(g.$$typeof===ce)return x(b,$i(b,g),w);yo(b,g)}return null}function A(b,g,w,R){var U=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return U!==null?null:h(b,g,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case C:return w.key===U?p(b,g,w,R):null;case B:return w.key===U?T(b,g,w,R):null;case Qe:return U=w._init,w=U(w._payload),A(b,g,w,R)}if(oe(w)||ze(w))return U!==null?null:P(b,g,w,R,null);if(typeof w.then=="function")return A(b,g,fo(w),R);if(w.$$typeof===ce)return A(b,g,$i(b,w),R);yo(b,w)}return null}function L(b,g,w,R,U){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return b=b.get(w)||null,h(g,b,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case C:return b=b.get(R.key===null?w:R.key)||null,p(g,b,R,U);case B:return b=b.get(R.key===null?w:R.key)||null,T(g,b,R,U);case Qe:var X=R._init;return R=X(R._payload),L(b,g,w,R,U)}if(oe(R)||ze(R))return b=b.get(w)||null,P(g,b,R,U,null);if(typeof R.then=="function")return L(b,g,w,fo(R),U);if(R.$$typeof===ce)return L(b,g,w,$i(g,R),U);yo(g,R)}return null}function H(b,g,w,R){for(var U=null,X=null,F=g,z=g=0,xe=null;F!==null&&z<w.length;z++){F.index>z?(xe=F,F=null):xe=F.sibling;var $=A(b,F,w[z],R);if($===null){F===null&&(F=xe);break}e&&F&&$.alternate===null&&t(b,F),g=o($,g,z),X===null?U=$:X.sibling=$,X=$,F=xe}if(z===w.length)return n(b,F),te&&An(b,z),U;if(F===null){for(;z<w.length;z++)F=x(b,w[z],R),F!==null&&(g=o(F,g,z),X===null?U=F:X.sibling=F,X=F);return te&&An(b,z),U}for(F=a(F);z<w.length;z++)xe=L(F,b,z,w[z],R),xe!==null&&(e&&xe.alternate!==null&&F.delete(xe.key===null?z:xe.key),g=o(xe,g,z),X===null?U=xe:X.sibling=xe,X=xe);return e&&F.forEach(function(pn){return t(b,pn)}),te&&An(b,z),U}function G(b,g,w,R){if(w==null)throw Error(s(151));for(var U=null,X=null,F=g,z=g=0,xe=null,$=w.next();F!==null&&!$.done;z++,$=w.next()){F.index>z?(xe=F,F=null):xe=F.sibling;var pn=A(b,F,$.value,R);if(pn===null){F===null&&(F=xe);break}e&&F&&pn.alternate===null&&t(b,F),g=o(pn,g,z),X===null?U=pn:X.sibling=pn,X=pn,F=xe}if($.done)return n(b,F),te&&An(b,z),U;if(F===null){for(;!$.done;z++,$=w.next())$=x(b,$.value,R),$!==null&&(g=o($,g,z),X===null?U=$:X.sibling=$,X=$);return te&&An(b,z),U}for(F=a(F);!$.done;z++,$=w.next())$=L(F,b,z,$.value,R),$!==null&&(e&&$.alternate!==null&&F.delete($.key===null?z:$.key),g=o($,g,z),X===null?U=$:X.sibling=$,X=$);return e&&F.forEach(function(Tp){return t(b,Tp)}),te&&An(b,z),U}function he(b,g,w,R){if(typeof w=="object"&&w!==null&&w.type===_&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case C:e:{for(var U=w.key;g!==null;){if(g.key===U){if(U=w.type,U===_){if(g.tag===7){n(b,g.sibling),R=i(g,w.props.children),R.return=b,b=R;break e}}else if(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Nd(U)===g.type){n(b,g.sibling),R=i(g,w.props),ei(R,w),R.return=b,b=R;break e}n(b,g);break}else t(b,g);g=g.sibling}w.type===_?(R=Sn(w.props.children,b.mode,R,w.key),R.return=b,b=R):(R=Xi(w.type,w.key,w.props,null,b.mode,R),ei(R,w),R.return=b,b=R)}return r(b);case B:e:{for(U=w.key;g!==null;){if(g.key===U)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(b,g.sibling),R=i(g,w.children||[]),R.return=b,b=R;break e}else{n(b,g);break}else t(b,g);g=g.sibling}R=Il(w,b.mode,R),R.return=b,b=R}return r(b);case Qe:return U=w._init,w=U(w._payload),he(b,g,w,R)}if(oe(w))return H(b,g,w,R);if(ze(w)){if(U=ze(w),typeof U!="function")throw Error(s(150));return w=U.call(w),G(b,g,w,R)}if(typeof w.then=="function")return he(b,g,fo(w),R);if(w.$$typeof===ce)return he(b,g,$i(b,w),R);yo(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,g!==null&&g.tag===6?(n(b,g.sibling),R=i(g,w),R.return=b,b=R):(n(b,g),R=Ol(w,b.mode,R),R.return=b,b=R),r(b)):n(b,g)}return function(b,g,w,R){try{$a=0;var U=he(b,g,w,R);return ca=null,U}catch(F){if(F===Va||F===to)throw F;var X=Je(29,F,null,b.mode);return X.lanes=R,X.return=b,X}finally{}}}var da=xd(!0),Md=xd(!1),dt=Y(null),wt=null;function $t(e){var t=e.alternate;j(De,De.current&1),j(dt,e),wt===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(wt=e)}function Od(e){if(e.tag===22){if(j(De,De.current),j(dt,e),wt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(wt=e)}}else en()}function en(){j(De,De.current),j(dt,dt.current)}function Mt(e){V(dt),wt===e&&(wt=null),V(De)}var De=Y(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ar(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ys(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),i=Zt(a);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,a),t!==null&&(at(t,e,a),Ya(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),i=Zt(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,a),t!==null&&(at(t,e,a),Ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=Zt(n);a.tag=2,t!=null&&(a.callback=t),t=Kt(e,a,n),t!==null&&(at(t,e,n),Ya(t,e,n))}};function Id(e,t,n,a,i,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,r):t.prototype&&t.prototype.isPureReactComponent?!Ua(n,a)||!Ua(i,o):!0}function Ud(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function Rn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var mo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _d(e){mo(e)}function Fd(e){console.error(e)}function qd(e){mo(e)}function go(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Bd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ms(e,t,n){return n=Zt(n),n.tag=3,n.payload={element:null},n.callback=function(){go(e,t)},n}function Gd(e){return e=Zt(e),e.tag=3,e}function zd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;e.payload=function(){return i(o)},e.callback=function(){Bd(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Bd(t,n,a),typeof i!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Ty(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,i,!0),n=dt.current,n!==null){switch(n.tag){case 13:return wt===null?Bs():n.alternate===null&&ve===0&&(ve=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Hl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zs(e,a,i)),!1;case 22:return n.flags|=65536,a===Hl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zs(e,a,i)),!1}throw Error(s(435,n.tag))}return zs(e,a,i),Bs(),!1}if(te)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Fl&&(e=Error(s(422),{cause:a}),Ba(lt(e,n)))):(a!==Fl&&(t=Error(s(423),{cause:a}),Ba(lt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=lt(a,n),i=ms(e.stateNode,a,i),Ql(e,i),ve!==4&&(ve=2)),!1;var o=Error(s(520),{cause:a});if(o=lt(o,n),si===null?si=[o]:si.push(o),ve!==4&&(ve=2),t===null)return!0;a=lt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ms(n.stateNode,a,e),Ql(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(sn===null||!sn.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Gd(i),zd(i,e,n,a),Ql(n,i),!1}n=n.return}while(n!==null);return!1}var Wd=Error(s(461)),Re=!1;function Oe(e,t,n,a){t.child=e===null?Md(t,null,n,a):da(t,e.child,n,a)}function Vd(e,t,n,a,i){n=n.render;var o=t.ref;if("ref"in a){var r={};for(var h in a)h!=="ref"&&(r[h]=a[h])}else r=a;return En(t),a=$l(e,t,n,r,o,i),h=es(),e!==null&&!Re?(ts(e,t,i),Ot(e,t,i)):(te&&h&&Ul(t),t.flags|=1,Oe(e,t,a,i),t.child)}function Hd(e,t,n,a,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ml(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Yd(e,t,o,a,i)):(e=Xi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Cs(e,i)){var r=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(r,a)&&e.ref===t.ref)return Ot(e,t,i)}return t.flags|=1,e=Et(o,a),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,n,a,i){if(e!==null){var o=e.memoizedProps;if(Ua(o,a)&&e.ref===t.ref)if(Re=!1,t.pendingProps=a=o,Cs(e,i))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Ot(e,t,i)}return gs(e,t,n,a,i)}function jd(e,t,n){var a=t.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return Qd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eo(t,o!==null?o.cachePool:null),o!==null?Yc(t,o):Zl(),Od(t);else return t.lanes=t.childLanes=536870912,Qd(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(eo(t,o.cachePool),Yc(t,o),en(),t.memoizedState=null):(e!==null&&eo(t,null),Zl(),en());return Oe(e,t,i,n),t.child}function Qd(e,t,n,a){var i=Vl();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&eo(t,null),Zl(),Od(t),e!==null&&Ga(e,t,a,!0),null}function vo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gs(e,t,n,a,i){return En(t),n=$l(e,t,n,a,void 0,i),a=es(),e!==null&&!Re?(ts(e,t,i),Ot(e,t,i)):(te&&a&&Ul(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Xd(e,t,n,a,i,o){return En(t),t.updateQueue=null,n=Qc(t,a,n,i),jc(e),a=es(),e!==null&&!Re?(ts(e,t,o),Ot(e,t,o)):(te&&a&&Ul(t),t.flags|=1,Oe(e,t,n,o),t.child)}function Zd(e,t,n,a,i){if(En(t),t.stateNode===null){var o=ea,r=n.contextType;typeof r=="object"&&r!==null&&(o=qe(r)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ps,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Yl(t),r=n.contextType,o.context=typeof r=="object"&&r!==null?qe(r):ea,o.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ys(t,n,r,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&ps.enqueueReplaceState(o,o.state,null),Qa(t,a,o,i),ja(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var h=t.memoizedProps,p=Rn(n,h);o.props=p;var T=o.context,P=n.contextType;r=ea,typeof P=="object"&&P!==null&&(r=qe(P));var x=n.getDerivedStateFromProps;P=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,P||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||T!==r)&&Ud(t,o,a,r),Xt=!1;var A=t.memoizedState;o.state=A,Qa(t,a,o,i),ja(),T=t.memoizedState,h||A!==T||Xt?(typeof x=="function"&&(ys(t,n,x,a),T=t.memoizedState),(p=Xt||Id(t,n,p,a,A,T,r))?(P||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),o.props=a,o.state=T,o.context=r,a=p):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,jl(e,t),r=t.memoizedProps,P=Rn(n,r),o.props=P,x=t.pendingProps,A=o.context,T=n.contextType,p=ea,typeof T=="object"&&T!==null&&(p=qe(T)),h=n.getDerivedStateFromProps,(T=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==x||A!==p)&&Ud(t,o,a,p),Xt=!1,A=t.memoizedState,o.state=A,Qa(t,a,o,i),ja();var L=t.memoizedState;r!==x||A!==L||Xt||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(ys(t,n,h,a),L=t.memoizedState),(P=Xt||Id(t,n,P,a,A,L,p)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,L,p),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,L,p)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=L),o.props=a,o.state=L,o.context=p,a=P):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,vo(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=da(t,e.child,null,i),t.child=da(t,null,n,i)):Oe(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Ot(e,t,i),e}function Kd(e,t,n,a){return qa(),t.flags|=256,Oe(e,t,n,a),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bs(e){return{baseLanes:e,cachePool:Fc()}}function ws(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ut),e}function Jd(e,t,n){var a=t.pendingProps,i=!1,o=(t.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(i?$t(t):en(),te){var h=ge,p;if(p=h){e:{for(p=h,h=bt;p.nodeType!==8;){if(!h){h=null;break e}if(p=mt(p.nextSibling),p===null){h=null;break e}}h=p}h!==null?(t.memoizedState={dehydrated:h,treeContext:Tn!==null?{id:Pt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},p=Je(18,null,null,0),p.stateNode=h,p.return=t,t.child=p,Be=t,ge=null,p=!0):p=!1}p||Ln(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return ar(h)?t.lanes=32:t.lanes=536870912,null;Mt(t)}return h=a.children,a=a.fallback,i?(en(),i=t.mode,h=bo({mode:"hidden",children:h},i),a=Sn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=bs(n),i.childLanes=ws(e,r,n),t.memoizedState=vs,a):($t(t),Ss(t,h))}if(p=e.memoizedState,p!==null&&(h=p.dehydrated,h!==null)){if(o)t.flags&256?($t(t),t.flags&=-257,t=Ts(e,t,n)):t.memoizedState!==null?(en(),t.child=e.child,t.flags|=128,t=null):(en(),i=a.fallback,h=t.mode,a=bo({mode:"visible",children:a.children},h),i=Sn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,da(t,e.child,null,n),a=t.child,a.memoizedState=bs(n),a.childLanes=ws(e,r,n),t.memoizedState=vs,t=i);else if($t(t),ar(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var T=r.dgst;r=T,a=Error(s(419)),a.stack="",a.digest=r,Ba({value:a,source:null,stack:null}),t=Ts(e,t,n)}else if(Re||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,Re||r){if(r=ye,r!==null&&(a=n&-n,a=(a&42)!==0?1:il(a),a=(a&(r.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,$n(e,a),at(r,e,a),Wd;h.data==="$?"||Bs(),t=Ts(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,ge=mt(h.nextSibling),Be=t,te=!0,Cn=null,bt=!1,e!==null&&(rt[ct++]=Pt,rt[ct++]=kt,rt[ct++]=Tn,Pt=e.id,kt=e.overflow,Tn=t),t=Ss(t,a.children),t.flags|=4096);return t}return i?(en(),i=a.fallback,h=t.mode,p=e.child,T=p.sibling,a=Et(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,T!==null?i=Et(T,i):(i=Sn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=bs(n):(p=h.cachePool,p!==null?(T=Le._currentValue,p=p.parent!==T?{parent:T,pool:T}:p):p=Fc(),h={baseLanes:h.baseLanes|n,cachePool:p}),i.memoizedState=h,i.childLanes=ws(e,r,n),t.memoizedState=vs,a):($t(t),n=e.child,e=n.sibling,n=Et(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ss(e,t){return t=bo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bo(e,t){return e=Je(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ts(e,t,n){return da(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $d(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Bl(e.return,t,n)}function As(e,t,n,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i)}function eu(e,t,n){var a=t.pendingProps,i=a.revealOrder,o=a.tail;if(Oe(e,t,a.children,n),a=De.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(j(De,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),As(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}As(t,!0,n,null,o);break;case"together":As(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Ay(e,t,n){switch(t.tag){case 3:ki(t,t.stateNode.containerInfo),Qt(t,Le,e.memoizedState.cache),qa();break;case 27:case 5:$o(t);break;case 4:ki(t,t.stateNode.containerInfo);break;case 10:Qt(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?($t(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Jd(e,t,n):($t(t),e=Ot(e,t,n),e!==null?e.sibling:null);$t(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return eu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(De,De.current),a)break;return null;case 22:case 23:return t.lanes=0,jd(e,t,n);case 24:Qt(t,Le,e.memoizedState.cache)}return Ot(e,t,n)}function tu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!Cs(e,n)&&(t.flags&128)===0)return Re=!1,Ay(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,te&&(t.flags&1048576)!==0&&Nc(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Ml(a)?(e=Rn(a,e),t.tag=1,t=Zd(null,t,a,e,n)):(t.tag=0,t=gs(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===be){t.tag=11,t=Vd(null,t,a,e,n);break e}else if(i===Me){t.tag=14,t=Hd(null,t,a,e,n);break e}}throw t=O(a)||a,Error(s(306,t,""))}}return t;case 0:return gs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Rn(a,t.pendingProps),Zd(e,t,a,i,n);case 3:e:{if(ki(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var o=t.memoizedState;i=o.element,jl(e,t),Qa(t,a,null,n);var r=t.memoizedState;if(a=r.cache,Qt(t,Le,a),a!==o.cache&&Gl(t,[Le],n,!0),ja(),a=r.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Kd(e,t,a,n);break e}else if(a!==i){i=lt(Error(s(424)),t),Ba(i),t=Kd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ge=mt(e.firstChild),Be=t,te=!0,Cn=null,bt=!0,n=Md(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qa(),a===i){t=Ot(e,t,n);break e}Oe(e,t,a,n)}t=t.child}return t;case 26:return vo(e,t),e===null?(n=oh(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,a=Mo(Vt.current).createElement(n),a[Fe]=t,a[We]=e,Ue(a,n,e),ke(a),t.stateNode=a):t.memoizedState=oh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $o(t),e===null&&te&&(a=t.stateNode=nh(t.type,t.pendingProps,Vt.current),Be=t,bt=!0,i=ge,dn(t.type)?(ir=i,ge=mt(a.firstChild)):ge=i),Oe(e,t,t.pendingProps.children,n),vo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((i=a=ge)&&(a=Ky(a,t.type,t.pendingProps,bt),a!==null?(t.stateNode=a,Be=t,ge=mt(a.firstChild),bt=!1,i=!0):i=!1),i||Ln(t)),$o(t),i=t.type,o=t.pendingProps,r=e!==null?e.memoizedProps:null,a=o.children,er(i,o)?a=null:r!==null&&er(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=$l(e,t,py,null,null,n),mi._currentValue=i),vo(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&te&&((e=n=ge)&&(n=Jy(n,t.pendingProps,bt),n!==null?(t.stateNode=n,Be=t,ge=null,e=!0):e=!1),e||Ln(t)),null;case 13:return Jd(e,t,n);case 4:return ki(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=da(t,null,a,n):Oe(e,t,a,n),t.child;case 11:return Vd(e,t,t.type,t.pendingProps,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Qt(t,t.type,a.value),Oe(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,En(t),i=qe(i),a=a(i),t.flags|=1,Oe(e,t,a,n),t.child;case 14:return Hd(e,t,t.type,t.pendingProps,n);case 15:return Yd(e,t,t.type,t.pendingProps,n);case 19:return eu(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=bo(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Et(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return jd(e,t,n);case 24:return En(t),a=qe(Le),e===null?(i=Vl(),i===null&&(i=ye,o=zl(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:a,cache:i},Yl(t),Qt(t,Le,i)):((e.lanes&n)!==0&&(jl(e,t),Qa(t,null,null,n),ja()),i=e.memoizedState,o=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Qt(t,Le,a)):(a=o.cache,Qt(t,Le,a),a!==i.cache&&Gl(t,[Le],n,!0))),Oe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function It(e){e.flags|=4}function nu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dh(t)){if(t=dt.current,t!==null&&((J&4194048)===J?wt!==null:(J&62914560)!==J&&(J&536870912)===0||t!==wt))throw Ha=Hl,qc;e.flags|=8192}}function wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Or():536870912,e.lanes|=t,ya|=t)}function ti(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Cy(e,t,n){var a=t.pendingProps;switch(_l(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Nt(Le),Fn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oc())),me(t),null;case 26:return n=t.memoizedState,e===null?(It(t),n!==null?(me(t),nu(t,n)):(me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(It(t),me(t),nu(t,n)):(me(t),t.flags&=-16777217):(e.memoizedProps!==a&&It(t),me(t),t.flags&=-16777217),null;case 27:Ri(t),n=Vt.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return me(t),null}e=Pe.current,Fa(t)?xc(t):(e=nh(i,a,n),t.stateNode=e,It(t))}return me(t),null;case 5:if(Ri(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return me(t),null}if(e=Pe.current,Fa(t))xc(t);else{switch(i=Mo(Vt.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Fe]=t,e[We]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ue(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&It(t)}}return me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=Vt.current,Fa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Be,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Xu(e.nodeValue,n)),e||Ln(t)}else e=Mo(e).createTextNode(a),e[Fe]=t,t.stateNode=e}return me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Fa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Fe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else i=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Mt(t),t):(Mt(t),null)}if(Mt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),wo(t,t.updateQueue),me(t),null;case 4:return Fn(),e===null&&Xs(t.stateNode.containerInfo),me(t),null;case 10:return Nt(t.type),me(t),null;case 19:if(V(De),i=t.memoizedState,i===null)return me(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)ti(i,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,ti(i,!1),e=o.updateQueue,t.updateQueue=e,wo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rc(n,e),n=n.sibling;return j(De,De.current&1|2),t.child}e=e.sibling}i.tail!==null&&vt()>Ao&&(t.flags|=128,a=!0,ti(i,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,wo(t,e),ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!te)return me(t),null}else 2*vt()-i.renderingStartTime>Ao&&n!==536870912&&(t.flags|=128,a=!0,ti(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=vt(),t.sibling=null,e=De.current,j(De,a?e&1|2:e&1),t):(me(t),null);case 22:case 23:return Mt(t),Kl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),n=t.updateQueue,n!==null&&wo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&V(Pn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Nt(Le),me(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Ly(e,t){switch(_l(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nt(Le),Fn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ri(t),null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(De),null;case 4:return Fn(),null;case 10:return Nt(t.type),null;case 22:case 23:return Mt(t),Kl(),e!==null&&V(Pn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Nt(Le),null;case 25:return null;default:return null}}function au(e,t){switch(_l(t),t.tag){case 3:Nt(Le),Fn();break;case 26:case 27:case 5:Ri(t);break;case 4:Fn();break;case 13:Mt(t);break;case 19:V(De);break;case 10:Nt(t.type);break;case 22:case 23:Mt(t),Kl(),e!==null&&V(Pn);break;case 24:Nt(Le)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var o=n.create,r=n.inst;a=o(),r.destroy=a}n=n.next}while(n!==i)}}catch(h){fe(t,t.return,h)}}function tn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){var r=a.inst,h=r.destroy;if(h!==void 0){r.destroy=void 0,i=t;var p=n,T=h;try{T()}catch(P){fe(i,p,P)}}}a=a.next}while(a!==o)}}catch(P){fe(t,t.return,P)}}function iu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Hc(t,n)}catch(a){fe(e,e.return,a)}}}function ou(e,t,n){n.props=Rn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){fe(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){fe(e,t,i)}}function St(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){fe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){fe(e,t,i)}else n.current=null}function lu(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){fe(e,e.return,i)}}function Ls(e,t,n){try{var a=e.stateNode;Yy(a,e.type,n,t),a[We]=t}catch(i){fe(e,e.return,i)}}function su(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dn(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(a!==4&&(a===27&&dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function So(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(So(e,t,n),e=e.sibling;e!==null;)So(e,t,n),e=e.sibling}function ru(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ue(t,a,n),t[Fe]=e,t[We]=n}catch(o){fe(e,e.return,o)}}var Ut=!1,Te=!1,Ps=!1,cu=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Dy(e,t){if(e=e.containerInfo,Js=qo,e=wc(e),Dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var r=0,h=-1,p=-1,T=0,P=0,x=e,A=null;t:for(;;){for(var L;x!==n||i!==0&&x.nodeType!==3||(h=r+i),x!==o||a!==0&&x.nodeType!==3||(p=r+a),x.nodeType===3&&(r+=x.nodeValue.length),(L=x.firstChild)!==null;)A=x,x=L;for(;;){if(x===e)break t;if(A===n&&++T===i&&(h=r),A===o&&++P===a&&(p=r),(L=x.nextSibling)!==null)break;x=A,A=x.parentNode}x=L}n=h===-1||p===-1?null:{start:h,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},qo=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var H=Rn(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(H,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(G){fe(n,n.return,G)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function du(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:nn(e,n),a&4&&ni(5,n);break;case 1:if(nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){fe(n,n.return,r)}else{var i=Rn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){fe(n,n.return,r)}}a&64&&iu(n),a&512&&ai(n,n.return);break;case 3:if(nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Hc(e,t)}catch(r){fe(n,n.return,r)}}break;case 27:t===null&&a&4&&ru(n);case 26:case 5:nn(e,n),t===null&&a&4&&lu(n),a&512&&ai(n,n.return);break;case 12:nn(e,n);break;case 13:nn(e,n),a&4&&fu(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Iy.bind(null,n),$y(e,n))));break;case 22:if(a=n.memoizedState!==null||Ut,!a){t=t!==null&&t.memoizedState!==null||Te,i=Ut;var o=Te;Ut=a,(Te=t)&&!o?an(e,n,(n.subtreeFlags&8772)!==0):nn(e,n),Ut=i,Te=o}break;case 30:break;default:nn(e,n)}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pe=null,Ye=!1;function _t(e,t,n){for(n=n.child;n!==null;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 26:Te||St(n,t),_t(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||St(n,t);var a=pe,i=Ye;dn(n.type)&&(pe=n.stateNode,Ye=!1),_t(e,t,n),hi(n.stateNode),pe=a,Ye=i;break;case 5:Te||St(n,t);case 6:if(a=pe,i=Ye,pe=null,_t(e,t,n),pe=a,Ye=i,pe!==null)if(Ye)try{(pe.nodeType===9?pe.body:pe.nodeName==="HTML"?pe.ownerDocument.body:pe).removeChild(n.stateNode)}catch(o){fe(n,t,o)}else try{pe.removeChild(n.stateNode)}catch(o){fe(n,t,o)}break;case 18:pe!==null&&(Ye?(e=pe,eh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wi(e)):eh(pe,n.stateNode));break;case 4:a=pe,i=Ye,pe=n.stateNode.containerInfo,Ye=!0,_t(e,t,n),pe=a,Ye=i;break;case 0:case 11:case 14:case 15:Te||tn(2,n,t),Te||tn(4,n,t),_t(e,t,n);break;case 1:Te||(St(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ou(n,t,a)),_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:Te=(a=Te)||n.memoizedState!==null,_t(e,t,n),Te=a;break;default:_t(e,t,n)}}function fu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(n){fe(t,t.return,n)}}function Ey(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cu),t;default:throw Error(s(435,e.tag))}}function ks(e,t){var n=Ey(e);t.forEach(function(a){var i=Uy.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function $e(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],o=e,r=t,h=r;e:for(;h!==null;){switch(h.tag){case 27:if(dn(h.type)){pe=h.stateNode,Ye=!1;break e}break;case 5:pe=h.stateNode,Ye=!1;break e;case 3:case 4:pe=h.stateNode.containerInfo,Ye=!0;break e}h=h.return}if(pe===null)throw Error(s(160));hu(o,r,i),pe=null,Ye=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yu(t,e),t=t.sibling}var pt=null;function yu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(t,e),et(e),a&4&&(tn(3,e,e.return),ni(3,e),tn(5,e,e.return));break;case 1:$e(t,e),et(e),a&512&&(Te||n===null||St(n,n.return)),a&64&&Ut&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=pt;if($e(t,e),et(e),a&512&&(Te||n===null||St(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Ea]||o[Fe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),Ue(o,a,n),o[Fe]=e,ke(o),a=o;break e;case"link":var r=rh("link","href",i).get(a+(n.href||""));if(r){for(var h=0;h<r.length;h++)if(o=r[h],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(h,1);break t}}o=i.createElement(a),Ue(o,a,n),i.head.appendChild(o);break;case"meta":if(r=rh("meta","content",i).get(a+(n.content||""))){for(h=0;h<r.length;h++)if(o=r[h],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(h,1);break t}}o=i.createElement(a),Ue(o,a,n),i.head.appendChild(o);break;default:throw Error(s(468,a))}o[Fe]=e,ke(o),a=o}e.stateNode=a}else ch(i,e.type,e.stateNode);else e.stateNode=sh(i,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?ch(i,e.type,e.stateNode):sh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ls(e,e.memoizedProps,n.memoizedProps)}break;case 27:$e(t,e),et(e),a&512&&(Te||n===null||St(n,n.return)),n!==null&&a&4&&Ls(e,e.memoizedProps,n.memoizedProps);break;case 5:if($e(t,e),et(e),a&512&&(Te||n===null||St(n,n.return)),e.flags&32){i=e.stateNode;try{Yn(i,"")}catch(L){fe(e,e.return,L)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ls(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Ps=!0);break;case 6:if($e(t,e),et(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(L){fe(e,e.return,L)}}break;case 3:if(Uo=null,i=pt,pt=Oo(t.containerInfo),$e(t,e),pt=i,et(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(L){fe(e,e.return,L)}Ps&&(Ps=!1,pu(e));break;case 4:a=pt,pt=Oo(e.stateNode.containerInfo),$e(t,e),et(e),pt=a;break;case 12:$e(t,e),et(e);break;case 13:$e(t,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Is=vt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ks(e,a)));break;case 22:i=e.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,T=Ut,P=Te;if(Ut=T||i,Te=P||p,$e(t,e),Te=P,Ut=T,et(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||p||Ut||Te||Nn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){p=n=t;try{if(o=p.stateNode,i)r=o.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{h=p.stateNode;var x=p.memoizedProps.style,A=x!=null&&x.hasOwnProperty("display")?x.display:null;h.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(L){fe(p,p.return,L)}}}else if(t.tag===6){if(n===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(L){fe(p,p.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ks(e,n))));break;case 19:$e(t,e),et(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ks(e,a)));break;case 30:break;case 21:break;default:$e(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(su(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,o=Ds(e);So(e,o,i);break;case 5:var r=n.stateNode;n.flags&32&&(Yn(r,""),n.flags&=-33);var h=Ds(e);So(e,h,r);break;case 3:case 4:var p=n.stateNode.containerInfo,T=Ds(e);Es(e,T,p);break;default:throw Error(s(161))}}catch(P){fe(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)du(e,t.alternate,t),t=t.sibling}function Nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:tn(4,t,t.return),Nn(t);break;case 1:St(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ou(t,t.return,n),Nn(t);break;case 27:hi(t.stateNode);case 26:case 5:St(t,t.return),Nn(t);break;case 22:t.memoizedState===null&&Nn(t);break;case 30:Nn(t);break;default:Nn(t)}e=e.sibling}}function an(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,o=t,r=o.flags;switch(o.tag){case 0:case 11:case 15:an(i,o,n),ni(4,o);break;case 1:if(an(i,o,n),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){fe(a,a.return,T)}if(a=o,i=a.updateQueue,i!==null){var h=a.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)Vc(p[i],h)}catch(T){fe(a,a.return,T)}}n&&r&64&&iu(o),ai(o,o.return);break;case 27:ru(o);case 26:case 5:an(i,o,n),n&&a===null&&r&4&&lu(o),ai(o,o.return);break;case 12:an(i,o,n);break;case 13:an(i,o,n),n&&r&4&&fu(i,o);break;case 22:o.memoizedState===null&&an(i,o,n),ai(o,o.return);break;case 30:break;default:an(i,o,n)}t=t.sibling}}function Rs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&za(n))}function Ns(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&za(e))}function Tt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mu(e,t,n,a),t=t.sibling}function mu(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,n,a),i&2048&&ni(9,t);break;case 1:Tt(e,t,n,a);break;case 3:Tt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&za(e)));break;case 12:if(i&2048){Tt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,r=o.id,h=o.onPostCommit;typeof h=="function"&&h(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){fe(t,t.return,p)}}else Tt(e,t,n,a);break;case 13:Tt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,r=t.alternate,t.memoizedState!==null?o._visibility&2?Tt(e,t,n,a):ii(e,t):o._visibility&2?Tt(e,t,n,a):(o._visibility|=2,ua(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Rs(r,t);break;case 24:Tt(e,t,n,a),i&2048&&Ns(t.alternate,t);break;default:Tt(e,t,n,a)}}function ua(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,r=t,h=n,p=a,T=r.flags;switch(r.tag){case 0:case 11:case 15:ua(o,r,h,p,i),ni(8,r);break;case 23:break;case 22:var P=r.stateNode;r.memoizedState!==null?P._visibility&2?ua(o,r,h,p,i):ii(o,r):(P._visibility|=2,ua(o,r,h,p,i)),i&&T&2048&&Rs(r.alternate,r);break;case 24:ua(o,r,h,p,i),i&&T&2048&&Ns(r.alternate,r);break;default:ua(o,r,h,p,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:ii(n,a),i&2048&&Rs(a.alternate,a);break;case 24:ii(n,a),i&2048&&Ns(a.alternate,a);break;default:ii(n,a)}t=t.sibling}}var oi=8192;function ha(e){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)gu(e),e=e.sibling}function gu(e){switch(e.tag){case 26:ha(e),e.flags&oi&&e.memoizedState!==null&&hp(pt,e.memoizedState,e.memoizedProps);break;case 5:ha(e);break;case 3:case 4:var t=pt;pt=Oo(e.stateNode.containerInfo),ha(e),pt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=oi,oi=16777216,ha(e),oi=t):ha(e));break;default:ha(e)}}function vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ne=a,wu(a,e)}vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bu(e),e=e.sibling}function bu(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&tn(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,To(e)):li(e);break;default:li(e)}}function To(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ne=a,wu(a,e)}vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:tn(8,t,t.return),To(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,To(t));break;default:To(t)}e=e.sibling}}function wu(e,t){for(;Ne!==null;){var n=Ne;switch(n.tag){case 0:case 11:case 15:tn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:za(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ne=a;else e:for(n=e;Ne!==null;){a=Ne;var i=a.sibling,o=a.return;if(uu(a),a===n){Ne=null;break e}if(i!==null){i.return=o,Ne=i;break e}Ne=o}}}var Py={getCacheForType:function(e){var t=qe(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},ky=typeof WeakMap=="function"?WeakMap:Map,se=0,ye=null,Z=null,J=0,re=0,tt=null,on=!1,fa=!1,xs=!1,Ft=0,ve=0,ln=0,xn=0,Ms=0,ut=0,ya=0,si=null,je=null,Os=!1,Is=0,Ao=1/0,Co=null,sn=null,Ie=0,rn=null,pa=null,ma=0,Us=0,_s=null,Su=null,ri=0,Fs=null;function nt(){if((se&2)!==0&&J!==0)return J&-J;if(D.T!==null){var e=aa;return e!==0?e:Hs()}return _r()}function Tu(){ut===0&&(ut=(J&536870912)===0||te?Mr():536870912);var e=dt.current;return e!==null&&(e.flags|=32),ut}function at(e,t,n){(e===ye&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(ga(e,0),cn(e,J,ut,!1)),Da(e,n),((se&2)===0||e!==ye)&&(e===ye&&((se&2)===0&&(xn|=n),ve===4&&cn(e,J,ut,!1)),At(e))}function Au(e,t,n){if((se&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||La(e,t),i=a?xy(e,t):Gs(e,t,!0),o=a;do{if(i===0){fa&&!a&&cn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Ry(n)){i=Gs(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var h=e;i=si;var p=h.current.memoizedState.isDehydrated;if(p&&(ga(h,r).flags|=256),r=Gs(h,r,!1),r!==2){if(xs&&!p){h.errorRecoveryDisabledLanes|=o,xn|=o,i=4;break e}o=je,je=i,o!==null&&(je===null?je=o:je.push.apply(je,o))}i=r}if(o=!1,i!==2)continue}}if(i===1){ga(e,0),cn(e,t,0,!0);break}e:{switch(a=e,o=i,o){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:cn(a,t,ut,!on);break e;case 2:je=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Is+300-vt(),10<i)){if(cn(a,t,ut,!on),Oi(a,0,!0)!==0)break e;a.timeoutHandle=Ju(Cu.bind(null,a,n,je,Co,Os,t,ut,xn,ya,on,o,2,-0,0),i);break e}Cu(a,n,je,Co,Os,t,ut,xn,ya,on,o,0,-0,0)}}break}while(!0);At(e)}function Cu(e,t,n,a,i,o,r,h,p,T,P,x,A,L){if(e.timeoutHandle=-1,x=t.subtreeFlags,(x&8192||(x&16785408)===16785408)&&(pi={stylesheets:null,count:0,unsuspend:up},gu(t),x=fp(),x!==null)){e.cancelPendingCommit=x(Nu.bind(null,e,t,o,n,a,i,r,h,p,P,1,A,L)),cn(e,o,r,!T);return}Nu(e,t,o,n,a,i,r,h,p)}function Ry(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,n,a){t&=~Ms,t&=~xn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var o=31-Ze(i),r=1<<o;a[o]=-1,i&=~r}n!==0&&Ir(e,n,t)}function Lo(){return(se&6)===0?(ci(0),!1):!0}function qs(){if(Z!==null){if(re===0)var e=Z.return;else e=Z,Rt=Dn=null,ns(e),ca=null,$a=0,e=Z;for(;e!==null;)au(e.alternate,e),e=e.return;Z=null}}function ga(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qs(),ye=e,Z=n=Et(e.current,null),J=t,re=0,tt=null,on=!1,fa=La(e,t),xs=!1,ya=ut=Ms=xn=ln=ve=0,je=si=null,Os=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-Ze(a),o=1<<i;t|=e[i],a&=~o}return Ft=t,Yi(),n}function Lu(e,t){Q=null,D.H=ho,t===Va||t===to?(t=zc(),re=3):t===qc?(t=zc(),re=4):re=t===Wd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,tt=t,Z===null&&(ve=1,go(e,lt(t,e.current)))}function Du(){var e=D.H;return D.H=ho,e===null?ho:e}function Eu(){var e=D.A;return D.A=Py,e}function Bs(){ve=4,on||(J&4194048)!==J&&dt.current!==null||(fa=!0),(ln&134217727)===0&&(xn&134217727)===0||ye===null||cn(ye,J,ut,!1)}function Gs(e,t,n){var a=se;se|=2;var i=Du(),o=Eu();(ye!==e||J!==t)&&(Co=null,ga(e,t)),t=!1;var r=ve;e:do try{if(re!==0&&Z!==null){var h=Z,p=tt;switch(re){case 8:qs(),r=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var T=re;if(re=0,tt=null,va(e,h,p,T),n&&fa){r=0;break e}break;default:T=re,re=0,tt=null,va(e,h,p,T)}}Ny(),r=ve;break}catch(P){Lu(e,P)}while(!0);return t&&e.shellSuspendCounter++,Rt=Dn=null,se=a,D.H=i,D.A=o,Z===null&&(ye=null,J=0,Yi()),r}function Ny(){for(;Z!==null;)Pu(Z)}function xy(e,t){var n=se;se|=2;var a=Du(),i=Eu();ye!==e||J!==t?(Co=null,Ao=vt()+500,ga(e,t)):fa=La(e,t);e:do try{if(re!==0&&Z!==null){t=Z;var o=tt;t:switch(re){case 1:re=0,tt=null,va(e,t,o,1);break;case 2:case 9:if(Bc(o)){re=0,tt=null,ku(t);break}t=function(){re!==2&&re!==9||ye!==e||(re=7),At(e)},o.then(t,t);break e;case 3:re=7;break e;case 4:re=5;break e;case 7:Bc(o)?(re=0,tt=null,ku(t)):(re=0,tt=null,va(e,t,o,7));break;case 5:var r=null;switch(Z.tag){case 26:r=Z.memoizedState;case 5:case 27:var h=Z;if(!r||dh(r)){re=0,tt=null;var p=h.sibling;if(p!==null)Z=p;else{var T=h.return;T!==null?(Z=T,Do(T)):Z=null}break t}}re=0,tt=null,va(e,t,o,5);break;case 6:re=0,tt=null,va(e,t,o,6);break;case 8:qs(),ve=6;break e;default:throw Error(s(462))}}My();break}catch(P){Lu(e,P)}while(!0);return Rt=Dn=null,D.H=a,D.A=i,se=n,Z!==null?0:(ye=null,J=0,Yi(),ve)}function My(){for(;Z!==null&&!ef();)Pu(Z)}function Pu(e){var t=tu(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Do(e):Z=t}function ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xd(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Xd(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ns(t);default:au(n,t),t=Z=Rc(t,Ft),t=tu(n,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Do(e):Z=t}function va(e,t,n,a){Rt=Dn=null,ns(t),ca=null,$a=0;var i=t.return;try{if(Ty(e,i,t,n,J)){ve=1,go(e,lt(n,e.current)),Z=null;return}}catch(o){if(i!==null)throw Z=i,o;ve=1,go(e,lt(n,e.current)),Z=null;return}t.flags&32768?(te||a===1?e=!0:fa||(J&536870912)!==0?e=!1:(on=e=!0,(a===2||a===9||a===3||a===6)&&(a=dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ru(t,e)):Do(t)}function Do(e){var t=e;do{if((t.flags&32768)!==0){Ru(t,on);return}e=t.return;var n=Cy(t.alternate,t,Ft);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ve===0&&(ve=5)}function Ru(e,t){do{var n=Ly(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);ve=6,Z=null}function Nu(e,t,n,a,i,o,r,h,p){e.cancelPendingCommit=null;do Eo();while(Ie!==0);if((se&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(o=t.lanes|t.childLanes,o|=Nl,uf(e,n,o,r,h,p),e===ye&&(Z=ye=null,J=0),pa=t,rn=e,ma=n,Us=o,_s=i,Su=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_y(Ni,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=M.p,M.p=2,r=se,se|=4;try{Dy(e,t,n)}finally{se=r,M.p=i,D.T=a}}Ie=1,xu(),Mu(),Ou()}}function xu(){if(Ie===1){Ie=0;var e=rn,t=pa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=M.p;M.p=2;var i=se;se|=4;try{yu(t,e);var o=$s,r=wc(e.containerInfo),h=o.focusedElem,p=o.selectionRange;if(r!==h&&h&&h.ownerDocument&&bc(h.ownerDocument.documentElement,h)){if(p!==null&&Dl(h)){var T=p.start,P=p.end;if(P===void 0&&(P=T),"selectionStart"in h)h.selectionStart=T,h.selectionEnd=Math.min(P,h.value.length);else{var x=h.ownerDocument||document,A=x&&x.defaultView||window;if(A.getSelection){var L=A.getSelection(),H=h.textContent.length,G=Math.min(p.start,H),he=p.end===void 0?G:Math.min(p.end,H);!L.extend&&G>he&&(r=he,he=G,G=r);var b=vc(h,G),g=vc(h,he);if(b&&g&&(L.rangeCount!==1||L.anchorNode!==b.node||L.anchorOffset!==b.offset||L.focusNode!==g.node||L.focusOffset!==g.offset)){var w=x.createRange();w.setStart(b.node,b.offset),L.removeAllRanges(),G>he?(L.addRange(w),L.extend(g.node,g.offset)):(w.setEnd(g.node,g.offset),L.addRange(w))}}}}for(x=[],L=h;L=L.parentNode;)L.nodeType===1&&x.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<x.length;h++){var R=x[h];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}qo=!!Js,$s=Js=null}finally{se=i,M.p=a,D.T=n}}e.current=t,Ie=2}}function Mu(){if(Ie===2){Ie=0;var e=rn,t=pa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=M.p;M.p=2;var i=se;se|=4;try{du(e,t.alternate,t)}finally{se=i,M.p=a,D.T=n}}Ie=3}}function Ou(){if(Ie===4||Ie===3){Ie=0,tf();var e=rn,t=pa,n=ma,a=Su;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,pa=rn=null,Iu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(sn=null),ol(n),t=t.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,i=M.p,M.p=2,D.T=null;try{for(var o=e.onRecoverableError,r=0;r<a.length;r++){var h=a[r];o(h.value,{componentStack:h.stack})}}finally{D.T=t,M.p=i}}(ma&3)!==0&&Eo(),At(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Fs?ri++:(ri=0,Fs=e):ri=0,ci(0)}}function Iu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,za(t)))}function Eo(e){return xu(),Mu(),Ou(),Uu()}function Uu(){if(Ie!==5)return!1;var e=rn,t=Us;Us=0;var n=ol(ma),a=D.T,i=M.p;try{M.p=32>n?32:n,D.T=null,n=_s,_s=null;var o=rn,r=ma;if(Ie=0,pa=rn=null,ma=0,(se&6)!==0)throw Error(s(331));var h=se;if(se|=4,bu(o.current),mu(o,o.current,r,n),se=h,ci(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ca,o)}catch{}return!0}finally{M.p=i,D.T=a,Iu(e,t)}}function _u(e,t,n){t=lt(n,t),t=ms(e.stateNode,t,2),e=Kt(e,t,2),e!==null&&(Da(e,2),At(e))}function fe(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sn===null||!sn.has(a))){e=lt(n,e),n=Gd(2),a=Kt(t,n,2),a!==null&&(zd(n,a,t,e),Da(a,2),At(a));break}}t=t.return}}function zs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ky;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(xs=!0,i.add(n),e=Oy.bind(null,e,t,n),t.then(e,e))}function Oy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(J&n)===n&&(ve===4||ve===3&&(J&62914560)===J&&300>vt()-Is?(se&2)===0&&ga(e,0):Ms|=n,ya===J&&(ya=0)),At(e)}function Fu(e,t){t===0&&(t=Or()),e=$n(e,t),e!==null&&(Da(e,t),At(e))}function Iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fu(e,n)}function Uy(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Fu(e,n)}function _y(e,t){return tl(e,t)}var Po=null,ba=null,Ws=!1,ko=!1,Vs=!1,Mn=0;function At(e){e!==ba&&e.next===null&&(ba===null?Po=ba=e:ba=ba.next=e),ko=!0,Ws||(Ws=!0,qy())}function ci(e,t){if(!Vs&&ko){Vs=!0;do for(var n=!1,a=Po;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var r=a.suspendedLanes,h=a.pingedLanes;o=(1<<31-Ze(42|e)+1)-1,o&=i&~(r&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,zu(a,o))}else o=J,o=Oi(a,a===ye?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||La(a,o)||(n=!0,zu(a,o));a=a.next}while(n);Vs=!1}}function Fy(){qu()}function qu(){ko=Ws=!1;var e=0;Mn!==0&&(jy()&&(e=Mn),Mn=0);for(var t=vt(),n=null,a=Po;a!==null;){var i=a.next,o=Bu(a,t);o===0?(a.next=null,n===null?Po=i:n.next=i,i===null&&(ba=n)):(n=a,(e!==0||(o&3)!==0)&&(ko=!0)),a=i}ci(e)}function Bu(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var r=31-Ze(o),h=1<<r,p=i[r];p===-1?((h&n)===0||(h&a)!==0)&&(i[r]=df(h,t)):p<=t&&(e.expiredLanes|=h),o&=~h}if(t=ye,n=J,n=Oi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&nl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||La(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&nl(a),ol(n)){case 2:case 8:n=Nr;break;case 32:n=Ni;break;case 268435456:n=xr;break;default:n=Ni}return a=Gu.bind(null,e),n=tl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&nl(a),e.callbackPriority=2,e.callbackNode=null,2}function Gu(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Eo()&&e.callbackNode!==n)return null;var a=J;return a=Oi(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Au(e,a,t),Bu(e,vt()),e.callbackNode!=null&&e.callbackNode===n?Gu.bind(null,e):null)}function zu(e,t){if(Eo())return null;Au(e,t,!0)}function qy(){Xy(function(){(se&6)!==0?tl(Rr,Fy):qu()})}function Hs(){return Mn===0&&(Mn=Mr()),Mn}function Wu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Vu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function By(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var o=Wu((i[We]||null).action),r=a.submitter;r&&(t=(t=r[We]||null)?Wu(t.formAction):r.getAttribute("formAction"),t!==null&&(o=t,r=null));var h=new Wi("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Mn!==0){var p=r?Vu(i,r):new FormData(i);us(n,{pending:!0,data:p,method:i.method,action:o},null,p)}}else typeof o=="function"&&(h.preventDefault(),p=r?Vu(i,r):new FormData(i),us(n,{pending:!0,data:p,method:i.method,action:o},o,p))},currentTarget:i}]})}}for(var Ys=0;Ys<Rl.length;Ys++){var js=Rl[Ys],Gy=js.toLowerCase(),zy=js[0].toUpperCase()+js.slice(1);yt(Gy,"on"+zy)}yt(Ac,"onAnimationEnd"),yt(Cc,"onAnimationIteration"),yt(Lc,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(oy,"onTransitionRun"),yt(ly,"onTransitionStart"),yt(sy,"onTransitionCancel"),yt(Dc,"onTransitionEnd"),Wn("onMouseEnter",["mouseout","mouseover"]),Wn("onMouseLeave",["mouseout","mouseover"]),Wn("onPointerEnter",["pointerout","pointerover"]),Wn("onPointerLeave",["pointerout","pointerover"]),gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function Hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var r=a.length-1;0<=r;r--){var h=a[r],p=h.instance,T=h.currentTarget;if(h=h.listener,p!==o&&i.isPropagationStopped())break e;o=h,i.currentTarget=T;try{o(i)}catch(P){mo(P)}i.currentTarget=null,o=p}else for(r=0;r<a.length;r++){if(h=a[r],p=h.instance,T=h.currentTarget,h=h.listener,p!==o&&i.isPropagationStopped())break e;o=h,i.currentTarget=T;try{o(i)}catch(P){mo(P)}i.currentTarget=null,o=p}}}}function K(e,t){var n=t[ll];n===void 0&&(n=t[ll]=new Set);var a=e+"__bubble";n.has(a)||(Yu(t,e,2,!1),n.add(a))}function Qs(e,t,n){var a=0;t&&(a|=4),Yu(n,e,a,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[Ro]){e[Ro]=!0,qr.forEach(function(n){n!=="selectionchange"&&(Wy.has(n)||Qs(n,!1,e),Qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,Qs("selectionchange",!1,t))}}function Yu(e,t,n,a){switch(mh(t)){case 2:var i=mp;break;case 8:i=gp;break;default:i=cr}n=i.bind(null,t,n,e),i=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zs(e,t,n,a,i){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var h=a.stateNode.containerInfo;if(h===i)break;if(r===4)for(r=a.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;h!==null;){if(r=Bn(h),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){a=o=r;continue e}h=h.parentNode}}a=a.return}$r(function(){var T=o,P=pl(n),x=[];e:{var A=Ec.get(e);if(A!==void 0){var L=Wi,H=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":L=_f;break;case"focusin":H="focus",L=Sl;break;case"focusout":H="blur",L=Sl;break;case"beforeblur":case"afterblur":L=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Bf;break;case Ac:case Cc:case Lc:L=Pf;break;case Dc:L=zf;break;case"scroll":case"scrollend":L=Af;break;case"wheel":L=Vf;break;case"copy":case"cut":case"paste":L=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=ic;break;case"toggle":case"beforetoggle":L=Yf}var G=(t&4)!==0,he=!G&&(e==="scroll"||e==="scrollend"),b=G?A!==null?A+"Capture":null:A;G=[];for(var g=T,w;g!==null;){var R=g;if(w=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||w===null||b===null||(R=ka(g,b),R!=null&&G.push(ui(g,R,w))),he)break;g=g.return}0<G.length&&(A=new L(A,H,null,n,P),x.push({event:A,listeners:G}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",A&&n!==yl&&(H=n.relatedTarget||n.fromElement)&&(Bn(H)||H[qn]))break e;if((L||A)&&(A=P.window===P?P:(A=P.ownerDocument)?A.defaultView||A.parentWindow:window,L?(H=n.relatedTarget||n.toElement,L=T,H=H?Bn(H):null,H!==null&&(he=y(H),G=H.tag,H!==he||G!==5&&G!==27&&G!==6)&&(H=null)):(L=null,H=T),L!==H)){if(G=nc,R="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(G=ic,R="onPointerLeave",b="onPointerEnter",g="pointer"),he=L==null?A:Pa(L),w=H==null?A:Pa(H),A=new G(R,g+"leave",L,n,P),A.target=he,A.relatedTarget=w,R=null,Bn(P)===T&&(G=new G(b,g+"enter",H,n,P),G.target=w,G.relatedTarget=he,R=G),he=R,L&&H)t:{for(G=L,b=H,g=0,w=G;w;w=wa(w))g++;for(w=0,R=b;R;R=wa(R))w++;for(;0<g-w;)G=wa(G),g--;for(;0<w-g;)b=wa(b),w--;for(;g--;){if(G===b||b!==null&&G===b.alternate)break t;G=wa(G),b=wa(b)}G=null}else G=null;L!==null&&ju(x,A,L,G,!1),H!==null&&he!==null&&ju(x,he,H,G,!0)}}e:{if(A=T?Pa(T):window,L=A.nodeName&&A.nodeName.toLowerCase(),L==="select"||L==="input"&&A.type==="file")var U=hc;else if(dc(A))if(fc)U=ny;else{U=ey;var X=$f}else L=A.nodeName,!L||L.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&fl(T.elementType)&&(U=hc):U=ty;if(U&&(U=U(e,T))){uc(x,U,n,P);break e}X&&X(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&hl(A,"number",A.value)}switch(X=T?Pa(T):window,e){case"focusin":(dc(X)||X.contentEditable==="true")&&(Zn=X,El=T,_a=null);break;case"focusout":_a=El=Zn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Sc(x,n,P);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Sc(x,n,P)}var F;if(Al)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Xn?rc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(oc&&n.locale!=="ko"&&(Xn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Xn&&(F=ec()):(jt=P,vl="value"in jt?jt.value:jt.textContent,Xn=!0)),X=No(T,z),0<X.length&&(z=new ac(z,e,null,n,P),x.push({event:z,listeners:X}),F?z.data=F:(F=cc(n),F!==null&&(z.data=F)))),(F=Qf?Xf(e,n):Zf(e,n))&&(z=No(T,"onBeforeInput"),0<z.length&&(X=new ac("onBeforeInput","beforeinput",null,n,P),x.push({event:X,listeners:z}),X.data=F)),By(x,e,T,n,P)}Hu(x,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=ka(e,n),i!=null&&a.unshift(ui(e,i,o)),i=ka(e,t),i!=null&&a.push(ui(e,i,o))),e.tag===3)return a;e=e.return}return[]}function wa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ju(e,t,n,a,i){for(var o=t._reactName,r=[];n!==null&&n!==a;){var h=n,p=h.alternate,T=h.stateNode;if(h=h.tag,p!==null&&p===a)break;h!==5&&h!==26&&h!==27||T===null||(p=T,i?(T=ka(n,o),T!=null&&r.unshift(ui(n,T,p))):i||(T=ka(n,o),T!=null&&r.push(ui(n,T,p)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Vy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(Vy,`
`).replace(Hy,"")}function Xu(e,t){return t=Qu(t),Qu(e)===t}function xo(){}function ue(e,t,n,a,i,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Yn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Yn(e,""+a);break;case"className":Ui(e,"class",a);break;case"tabIndex":Ui(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,n,a);break;case"style":Kr(e,a,o);break;case"data":if(t!=="object"){Ui(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=qi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ue(e,t,"name",i.name,i,null),ue(e,t,"formEncType",i.formEncType,i,null),ue(e,t,"formMethod",i.formMethod,i,null),ue(e,t,"formTarget",i.formTarget,i,null)):(ue(e,t,"encType",i.encType,i,null),ue(e,t,"method",i.method,i,null),ue(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=qi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=xo);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=qi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":K("beforetoggle",e),K("toggle",e),Ii(e,"popover",a);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ii(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sf.get(n)||n,Ii(e,n,a))}}function Ks(e,t,n,a,i,o){switch(n){case"style":Kr(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Yn(e,a):(typeof a=="number"||typeof a=="bigint")&&Yn(e,""+a);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Br.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[We]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ii(e,n,a)}}}function Ue(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var a=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var r=n[o];if(r!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ue(e,t,o,r,n,null)}}i&&ue(e,t,"srcSet",n.srcSet,n,null),a&&ue(e,t,"src",n.src,n,null);return;case"input":K("invalid",e);var h=o=r=i=null,p=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var P=n[a];if(P!=null)switch(a){case"name":i=P;break;case"type":r=P;break;case"checked":p=P;break;case"defaultChecked":T=P;break;case"value":o=P;break;case"defaultValue":h=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,t));break;default:ue(e,t,a,P,n,null)}}jr(e,o,h,p,T,r,i,!1),_i(e);return;case"select":K("invalid",e),a=r=o=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":o=h;break;case"defaultValue":r=h;break;case"multiple":a=h;default:ue(e,t,i,h,n,null)}t=o,n=r,e.multiple=!!a,t!=null?Hn(e,!!a,t,!1):n!=null&&Hn(e,!!a,n,!0);return;case"textarea":K("invalid",e),o=i=a=null;for(r in n)if(n.hasOwnProperty(r)&&(h=n[r],h!=null))switch(r){case"value":a=h;break;case"defaultValue":i=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:ue(e,t,r,h,n,null)}Xr(e,a,i,o),_i(e);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ue(e,t,p,a,n,null)}return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(a=0;a<di.length;a++)K(di[a],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ue(e,t,T,a,n,null)}return;default:if(fl(t)){for(P in n)n.hasOwnProperty(P)&&(a=n[P],a!==void 0&&Ks(e,t,P,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&ue(e,t,h,a,n,null))}function Yy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,r=null,h=null,p=null,T=null,P=null;for(L in n){var x=n[L];if(n.hasOwnProperty(L)&&x!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":p=x;default:a.hasOwnProperty(L)||ue(e,t,L,null,a,x)}}for(var A in a){var L=a[A];if(x=n[A],a.hasOwnProperty(A)&&(L!=null||x!=null))switch(A){case"type":o=L;break;case"name":i=L;break;case"checked":T=L;break;case"defaultChecked":P=L;break;case"value":r=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:L!==x&&ue(e,t,A,L,a,x)}}ul(e,r,h,p,T,P,o,i);return;case"select":L=r=h=A=null;for(o in n)if(p=n[o],n.hasOwnProperty(o)&&p!=null)switch(o){case"value":break;case"multiple":L=p;default:a.hasOwnProperty(o)||ue(e,t,o,null,a,p)}for(i in a)if(o=a[i],p=n[i],a.hasOwnProperty(i)&&(o!=null||p!=null))switch(i){case"value":A=o;break;case"defaultValue":h=o;break;case"multiple":r=o;default:o!==p&&ue(e,t,i,o,a,p)}t=h,n=r,a=L,A!=null?Hn(e,!!n,A,!1):!!a!=!!n&&(t!=null?Hn(e,!!n,t,!0):Hn(e,!!n,n?[]:"",!1));return;case"textarea":L=A=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:ue(e,t,h,null,a,i)}for(r in a)if(i=a[r],o=n[r],a.hasOwnProperty(r)&&(i!=null||o!=null))switch(r){case"value":A=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&ue(e,t,r,i,a,o)}Qr(e,A,L);return;case"option":for(var H in n)if(A=n[H],n.hasOwnProperty(H)&&A!=null&&!a.hasOwnProperty(H))switch(H){case"selected":e.selected=!1;break;default:ue(e,t,H,null,a,A)}for(p in a)if(A=a[p],L=n[p],a.hasOwnProperty(p)&&A!==L&&(A!=null||L!=null))switch(p){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:ue(e,t,p,A,a,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in n)A=n[G],n.hasOwnProperty(G)&&A!=null&&!a.hasOwnProperty(G)&&ue(e,t,G,null,a,A);for(T in a)if(A=a[T],L=n[T],a.hasOwnProperty(T)&&A!==L&&(A!=null||L!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:ue(e,t,T,A,a,L)}return;default:if(fl(t)){for(var he in n)A=n[he],n.hasOwnProperty(he)&&A!==void 0&&!a.hasOwnProperty(he)&&Ks(e,t,he,void 0,a,A);for(P in a)A=a[P],L=n[P],!a.hasOwnProperty(P)||A===L||A===void 0&&L===void 0||Ks(e,t,P,A,a,L);return}}for(var b in n)A=n[b],n.hasOwnProperty(b)&&A!=null&&!a.hasOwnProperty(b)&&ue(e,t,b,null,a,A);for(x in a)A=a[x],L=n[x],!a.hasOwnProperty(x)||A===L||A==null&&L==null||ue(e,t,x,A,a,L)}var Js=null,$s=null;function Mo(e){return e.nodeType===9?e:e.ownerDocument}function Zu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ku(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function er(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tr=null;function jy(){var e=window.event;return e&&e.type==="popstate"?e===tr?!1:(tr=e,!0):(tr=null,!1)}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Zy)}:Ju;function Zy(e){setTimeout(function(){throw e})}function dn(e){return e==="head"}function eh(e,t){var n=t,a=0,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var r=e.ownerDocument;if(n&1&&hi(r.documentElement),n&2&&hi(r.body),n&4)for(n=r.head,hi(n),r=n.firstChild;r;){var h=r.nextSibling,p=r.nodeName;r[Ea]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=h}}if(i===0){e.removeChild(o),wi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);wi(t)}function nr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nr(n),sl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ky(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ea])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=mt(e.nextSibling),e===null)break}return null}function Jy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mt(e.nextSibling),e===null))return null;return e}function ar(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $y(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ir=null;function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function nh(e,t,n){switch(t=Mo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sl(e)}var ht=new Map,ah=new Set;function Oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qt=M.d;M.d={f:ep,r:tp,D:np,C:ap,L:ip,m:op,X:sp,S:lp,M:rp};function ep(){var e=qt.f(),t=Lo();return e||t}function tp(e){var t=Gn(e);t!==null&&t.tag===5&&t.type==="form"?Ad(t):qt.r(e)}var Sa=typeof document>"u"?null:document;function ih(e,t,n){var a=Sa;if(a&&typeof t=="string"&&t){var i=ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),ah.has(i)||(ah.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ue(t,"link",e),ke(t),a.head.appendChild(t)))}}function np(e){qt.D(e),ih("dns-prefetch",e,null)}function ap(e,t){qt.C(e,t),ih("preconnect",e,t)}function ip(e,t,n){qt.L(e,t,n);var a=Sa;if(a&&e&&t){var i='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+ot(n.imageSizes)+'"]')):i+='[href="'+ot(e)+'"]';var o=i;switch(t){case"style":o=Ta(e);break;case"script":o=Aa(e)}ht.has(o)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ht.set(o,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(fi(o))||t==="script"&&a.querySelector(yi(o))||(t=a.createElement("link"),Ue(t,"link",e),ke(t),a.head.appendChild(t)))}}function op(e,t){qt.m(e,t);var n=Sa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ot(a)+'"][href="'+ot(e)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Aa(e)}if(!ht.has(o)&&(e=E({rel:"modulepreload",href:e},t),ht.set(o,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yi(o)))return}a=n.createElement("link"),Ue(a,"link",e),ke(a),n.head.appendChild(a)}}}function lp(e,t,n){qt.S(e,t,n);var a=Sa;if(a&&e){var i=zn(a).hoistableStyles,o=Ta(e);t=t||"default";var r=i.get(o);if(!r){var h={loading:0,preload:null};if(r=a.querySelector(fi(o)))h.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ht.get(o))&&or(e,n);var p=r=a.createElement("link");ke(p),Ue(p,"link",e),p._p=new Promise(function(T,P){p.onload=T,p.onerror=P}),p.addEventListener("load",function(){h.loading|=1}),p.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Io(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:h},i.set(o,r)}}}function sp(e,t){qt.X(e,t);var n=Sa;if(n&&e){var a=zn(n).hoistableScripts,i=Aa(e),o=a.get(i);o||(o=n.querySelector(yi(i)),o||(e=E({src:e,async:!0},t),(t=ht.get(i))&&lr(e,t),o=n.createElement("script"),ke(o),Ue(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function rp(e,t){qt.M(e,t);var n=Sa;if(n&&e){var a=zn(n).hoistableScripts,i=Aa(e),o=a.get(i);o||(o=n.querySelector(yi(i)),o||(e=E({src:e,async:!0,type:"module"},t),(t=ht.get(i))&&lr(e,t),o=n.createElement("script"),ke(o),Ue(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function oh(e,t,n,a){var i=(i=Vt.current)?Oo(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ta(n.href),n=zn(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ta(n.href);var o=zn(i).hoistableStyles,r=o.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,r),(o=i.querySelector(fi(e)))&&!o._p&&(r.instance=o,r.state.loading=5),ht.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ht.set(e,n),o||cp(i,e,n,r.state))),t&&a===null)throw Error(s(528,""));return r}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(n),n=zn(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ta(e){return'href="'+ot(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function lh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function cp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ue(t,"link",n),ke(t),e.head.appendChild(t))}function Aa(e){return'[src="'+ot(e)+'"]'}function yi(e){return"script[async]"+e}function sh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ot(n.href)+'"]');if(a)return t.instance=a,ke(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ke(a),Ue(a,"style",i),Io(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ta(n.href);var o=e.querySelector(fi(i));if(o)return t.state.loading|=4,t.instance=o,ke(o),o;a=lh(n),(i=ht.get(i))&&or(a,i),o=(e.ownerDocument||e).createElement("link"),ke(o);var r=o;return r._p=new Promise(function(h,p){r.onload=h,r.onerror=p}),Ue(o,"link",a),t.state.loading|=4,Io(o,n.precedence,e),t.instance=o;case"script":return o=Aa(n.src),(i=e.querySelector(yi(o)))?(t.instance=i,ke(i),i):(a=n,(i=ht.get(o))&&(a=E({},n),lr(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),ke(i),Ue(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Io(a,n.precedence,e));return t.instance}function Io(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,r=0;r<a.length;r++){var h=a[r];if(h.dataset.precedence===t)o=h;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uo=null;function rh(e,t,n){if(Uo===null){var a=new Map,i=Uo=new Map;i.set(n,a)}else i=Uo,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Ea]||o[Fe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(t)||"";r=e+r;var h=a.get(r);h?h.push(o):a.set(r,[o])}}return a}function ch(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function dp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pi=null;function up(){}function hp(e,t,n){if(pi===null)throw Error(s(475));var a=pi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ta(n.href),o=e.querySelector(fi(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=_o.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,ke(o);return}o=e.ownerDocument||e,n=lh(n),(i=ht.get(i))&&or(n,i),o=o.createElement("link"),ke(o);var r=o;r._p=new Promise(function(h,p){r.onload=h,r.onerror=p}),Ue(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=_o.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function fp(){if(pi===null)throw Error(s(475));var e=pi;return e.stylesheets&&e.count===0&&sr(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function _o(){if(this.count--,this.count===0){if(this.stylesheets)sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fo=null;function sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fo=new Map,t.forEach(yp,e),Fo=null,_o.call(e))}function yp(e,t){if(!(t.state.loading&4)){var n=Fo.get(e);if(n)var a=n.get(null);else{n=new Map,Fo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var r=i[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}i=t.instance,r=i.getAttribute("data-precedence"),o=n.get(r)||a,o===a&&n.set(null,i),n.set(r,i),this.count++,a=_o.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:ce,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function pp(e,t,n,a,i,o,r,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=al(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.hiddenUpdates=al(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function uh(e,t,n,a,i,o,r,h,p,T,P,x){return e=new pp(e,t,n,r,h,p,T,x),t=1,o===!0&&(t|=24),o=Je(3,null,null,t),e.current=o,o.stateNode=e,t=zl(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Yl(o),e}function hh(e){return e?(e=ea,e):ea}function fh(e,t,n,a,i,o){i=hh(i),a.context===null?a.context=i:a.pendingContext=i,a=Zt(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Kt(e,a,t),n!==null&&(at(n,e,t),Ya(n,e,t))}function yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rr(e,t){yh(e,t),(e=e.alternate)&&yh(e,t)}function ph(e){if(e.tag===13){var t=$n(e,67108864);t!==null&&at(t,e,67108864),rr(e,67108864)}}var qo=!0;function mp(e,t,n,a){var i=D.T;D.T=null;var o=M.p;try{M.p=2,cr(e,t,n,a)}finally{M.p=o,D.T=i}}function gp(e,t,n,a){var i=D.T;D.T=null;var o=M.p;try{M.p=8,cr(e,t,n,a)}finally{M.p=o,D.T=i}}function cr(e,t,n,a){if(qo){var i=dr(a);if(i===null)Zs(e,t,a,Bo,n),gh(e,a);else if(bp(i,e,t,n,a))a.stopPropagation();else if(gh(e,a),t&4&&-1<vp.indexOf(e)){for(;i!==null;){var o=Gn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=mn(o.pendingLanes);if(r!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;r;){var p=1<<31-Ze(r);h.entanglements[1]|=p,r&=~p}At(o),(se&6)===0&&(Ao=vt()+500,ci(0))}}break;case 13:h=$n(o,2),h!==null&&at(h,o,2),Lo(),rr(o,2)}if(o=dr(a),o===null&&Zs(e,t,a,Bo,n),o===i)break;i=o}i!==null&&a.stopPropagation()}else Zs(e,t,a,null,n)}}function dr(e){return e=pl(e),ur(e)}var Bo=null;function ur(e){if(Bo=null,e=Bn(e),e!==null){var t=y(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bo=e,null}function mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nf()){case Rr:return 2;case Nr:return 8;case Ni:case af:return 32;case xr:return 268435456;default:return 32}default:return 32}}var hr=!1,un=null,hn=null,fn=null,gi=new Map,vi=new Map,yn=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gh(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,n,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gn(t),t!==null&&ph(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bp(e,t,n,a,i){switch(t){case"focusin":return un=bi(un,e,t,n,a,i),!0;case"dragenter":return hn=bi(hn,e,t,n,a,i),!0;case"mouseover":return fn=bi(fn,e,t,n,a,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,bi(gi.get(o)||null,e,t,n,a,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,bi(vi.get(o)||null,e,t,n,a,i)),!0}return!1}function vh(e){var t=Bn(e.target);if(t!==null){var n=y(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,hf(e.priority,function(){if(n.tag===13){var a=nt();a=il(a);var i=$n(n,a);i!==null&&at(i,n,a),rr(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dr(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);yl=a,n.target.dispatchEvent(a),yl=null}else return t=Gn(n),t!==null&&ph(t),e.blockedOn=n,!1;t.shift()}return!0}function bh(e,t,n){Go(e)&&n.delete(t)}function wp(){hr=!1,un!==null&&Go(un)&&(un=null),hn!==null&&Go(hn)&&(hn=null),fn!==null&&Go(fn)&&(fn=null),gi.forEach(bh),vi.forEach(bh)}function zo(e,t){e.blockedOn===t&&(e.blockedOn=null,hr||(hr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,wp)))}var Wo=null;function wh(e){Wo!==e&&(Wo=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Wo===e&&(Wo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(ur(a||n)===null)continue;break}var o=Gn(n);o!==null&&(e.splice(t,3),t-=3,us(o,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function wi(e){function t(p){return zo(p,e)}un!==null&&zo(un,e),hn!==null&&zo(hn,e),fn!==null&&zo(fn,e),gi.forEach(t),vi.forEach(t);for(var n=0;n<yn.length;n++){var a=yn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)vh(n),n.blockedOn===null&&yn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],o=n[a+1],r=i[We]||null;if(typeof o=="function")r||wh(n);else if(r){var h=null;if(o&&o.hasAttribute("formAction")){if(i=o,r=o[We]||null)h=r.formAction;else if(ur(i)!==null)continue}else h=r.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),wh(n)}}}function fr(e){this._internalRoot=e}Vo.prototype.render=fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=nt();fh(n,a,e,t,null,null)},Vo.prototype.unmount=fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fh(e.current,2,null,e,null,null),Lo(),t[qn]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_r();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&vh(e)}};var Sh=l.version;if(Sh!=="19.1.1")throw Error(s(527,Sh,"19.1.1"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Sp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Ca=Ho.inject(Sp),Xe=Ho}catch{}}return Ti.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",i=_d,o=Fd,r=qd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=uh(e,1,!1,null,null,n,a,i,o,r,h,null),e[qn]=t.current,Xs(e),new fr(t)},Ti.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,i="",o=_d,r=Fd,h=qd,p=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),t=uh(e,1,!0,t,n??null,a,i,o,r,h,p,T),t.context=hh(null),n=t.current,a=nt(),a=il(a),i=Zt(a),i.callback=null,Kt(n,i,a),n=a,t.current.lanes=n,Da(t,n),At(t),e[qn]=t.current,Xs(e),new Vo(t)},Ti.version="19.1.1",Ti}var Eh;function Np(){if(Eh)return pr.exports;Eh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(l){console.error(l)}}return u(),pr.exports=Rp(),pr.exports}var xp=Np();const Mp={maxConversations:50,typingDelay:200,storageKey:"aiChatHistory",minPanelWidth:320,maxPanelWidth:600},Op=(u={})=>{const l={...Mp,...u},[c,s]=ne.useState({isInitialState:!0,currentConversation:null,conversations:[],isTyping:!1,isMinimized:!1,isMaximized:!1,isHistoryActive:!1,isShowAllActive:!1,panelWidth:400}),d=ne.useCallback(E=>{s(k=>({...k,...E}))},[]),y=ne.useCallback(E=>{const k={id:`conv_${Date.now()}`,title:E.substring(0,40)+(E.length>40?"...":""),messages:[],created:new Date().toISOString(),lastUpdated:new Date().toISOString()};return s(C=>{const _=[k,...C.conversations].slice(0,l.maxConversations);return{...C,currentConversation:k,conversations:_}}),k},[l.maxConversations]),f=ne.useCallback(E=>{const k={...E,id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,timestamp:new Date().toISOString()};return s(C=>{if(!C.currentConversation)return C;const B={...C.currentConversation,messages:[...C.currentConversation.messages,k],lastUpdated:k.timestamp},_=C.conversations.map(q=>q.id===B.id?B:q);return{...C,currentConversation:B,conversations:_}}),k},[]),m=ne.useCallback(E=>{s(k=>{const C=k.conversations.find(B=>B.id===E);return C?{...k,currentConversation:C}:k})},[]),v=ne.useCallback(()=>{try{localStorage.setItem(l.storageKey,JSON.stringify(c.conversations))}catch(E){console.error("Failed to save conversations:",E)}},[c.conversations,l.storageKey]),S=ne.useCallback(()=>{try{const E=localStorage.getItem(l.storageKey);if(E){const k=JSON.parse(E);s(C=>({...C,conversations:k}))}}catch(E){console.error("Failed to load conversations:",E)}},[l.storageKey]);return{state:c,updateState:d,createNewConversation:y,addMessage:f,loadConversation:m,saveConversations:v,loadConversations:S,config:l}},Ip="modulepreload",Up=function(u){return"/ai-chat/"+u},Ph={},kh=function(l,c,s){let d=Promise.resolve();if(c&&c.length>0){let v=function(S){return Promise.all(S.map(E=>Promise.resolve(E).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");d=v(c.map(S=>{if(S=Up(S),S in Ph)return;Ph[S]=!0;const E=S.endsWith(".css"),k=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${k}`))return;const C=document.createElement("link");if(C.rel=E?"stylesheet":Ip,E||(C.as="script"),C.crossOrigin="",C.href=S,m&&C.setAttribute("nonce",m),document.head.appendChild(C),E)return new Promise((B,_)=>{C.addEventListener("load",B),C.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${S}`)))})}))}function y(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return d.then(f=>{for(const m of f||[])m.status==="rejected"&&y(m.reason);return l().catch(y)})};class qh{index=[];client=null;constructor(l){l&&(this.client=new Di({apiKey:l,dangerouslyAllowBrowser:!0}))}async loadIndexFromBundle(){try{const l=await kh(()=>import("./rag-index-DIohytNF.js"),[]),c=l&&"default"in l?l.default:l;if(!Array.isArray(c)){this.index=[];return}const s=c;this.index=s.map((d,y)=>({id:d&&d.id?String(d.id):`chunk_${y}`,source:d&&(d.source||d.sourcePath)?String(d.source||d.sourcePath):"unknown",text:d&&(d.text||d.chunk)?String(d.text||d.chunk):"",embedding:d&&Array.isArray(d.embedding)?d.embedding:[]}))}catch(l){try{await kh(()=>import("./rag-index-fallback-B_c-KnzB.js"),[]),this.index=[],console.warn("RAG: using fallback (empty) index, main RAG build may have failed.")}catch{console.warn("RAG: no bundled index found, operating without RAG context.",l),this.index=[]}}}async queryTopK(l,c=5,s){if(!this.client)throw new Error("RagService: OpenAI API key not provided to compute query embeddings at runtime.");if(!this.index||this.index.length===0)return[];const y=(await this.client.embeddings.create({model:"text-embedding-3-small",input:l})).data[0].embedding,f=this.index.map(m=>{const v=Fp(y,m.embedding||[]);return{chunk:m,score:v}});if(s){const m=s==="tools"?"client-create-flow":s==="schema"?"delivery-api":"knowledgebase";f.sort((v,S)=>{const E=v.chunk.source.includes(m)?1:0,k=S.chunk.source.includes(m)?1:0;return E!==k?k-E:S.score-v.score})}else f.sort((m,v)=>v.score-m.score);return f.slice(0,c).map(m=>m.chunk)}}function _p(u,l){let c=0;for(let s=0;s<Math.min(u.length,l.length);s++)c+=u[s]*l[s];return c}function Rh(u){let l=0;for(let c=0;c<u.length;c++)l+=u[c]*u[c];return Math.sqrt(l)}function Fp(u,l){return!u||!l||u.length===0||l.length===0?0:_p(u,l)/(Rh(u)*Rh(l))}class qp{client;rag;agentInstructions="";conversationState={};constructor(){const l="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";this.client=new Di({apiKey:l,dangerouslyAllowBrowser:!0}),this.rag=new qh(l),this.rag.loadIndexFromBundle().catch(()=>{})}setAgentInstructions(l){this.agentInstructions=l}async sendMessage(l,c=[]){try{const s=[{role:"system",content:this.agentInstructions?`${this.agentInstructions}

Current conversation state: ${JSON.stringify(this.conversationState)}`:"You are a LeadExec Assist. Agent instructions not loaded - using fallback mode."}];try{const E=[c.slice(-4).map(q=>`${q.role}: ${q.content}`).join(`
`),`user: ${l}`].filter(Boolean).join(`
`),k=await this.rag.queryTopK(E,3,"tools"),C=await this.rag.queryTopK(E,1,"schema"),B=await this.rag.queryTopK(E,2);if([...k||[],...C||[],...B||[]].length>0){const q=(k||[]).map((ce,be)=>`[#F${be+1}] ${ce.source}
${ce.text}`).join(`

`),ie=(C||[]).map((ce,be)=>`[#S${be+1}] ${ce.source}
${ce.text}`).join(`

`),_e=(B||[]).map((ce,be)=>`[#K${be+1}] ${ce.source}
${ce.text}`).join(`

`),Ee=[q?`Flow context (adhere strictly to this minimal flow):
${q}`:"",ie?`Schema reference (field names/types only; do NOT expand scope):
${ie}`:"",_e?`Knowledge base context (for documentation questions):
${_e}`:""].filter(Boolean).join(`

`);s.push({role:"system",content:`Context snippets (use for grounding; never invent URLs/tokens; follow flow):
${Ee}`})}}catch{}s.push(...c.map(S=>({role:S.role==="user"?"user":"assistant",content:S.content}))),s.push({role:"user",content:l});const y=(await this.client.chat.completions.create({model:"gpt-4o",messages:s,temperature:.1})).choices[0]?.message;if(!y)throw new Error("No response from OpenAI");let f=y.content||"I'm ready to help you with client setup!";const m=this.parseControlBlock(f);if(m){f=m.cleanContent,m.conversationState&&(this.conversationState={...this.conversationState,...m.conversationState});const S=m.suggestedActions&&m.suggestedActions.length>0?m.suggestedActions:void 0;return{content:f,conversationState:this.conversationState,suggestedActions:S,mode:m.mode||"final",fileUpload:m.fileUpload,agentType:"workflow"}}const v=this.generateSafetyNetActions(f);return{content:f,conversationState:this.conversationState,suggestedActions:v,mode:"final",agentType:"workflow"}}catch(s){throw console.error("Intelligent Agent Error:",s),new Error(`Failed to get response: ${s instanceof Error?s.message:"Unknown error"}`)}}parseControlBlock(l){const c=/<CONTROL>\s*([\s\S]*?)\s*<\/CONTROL>/i,s=l.match(c);if(!s)return null;const d=s[1];let y=null;try{y=JSON.parse(d)}catch{return{cleanContent:l.replace(c,"").trim()}}const f=Array.isArray(y?.suggested_actions)?y.suggested_actions.map(k=>({id:String(k.id||k.text||"action"),text:String(k.text||k.id||""),value:k.value?String(k.value):void 0})):void 0,m=y?.conversation_state&&typeof y.conversation_state=="object"?{activeWorkflow:y.conversation_state.activeWorkflow??void 0,workflowStep:y.conversation_state.workflowStep??void 0,collectedData:y.conversation_state.collectedData??void 0}:void 0,v=y?.mode==="processing_start"||y?.mode==="final"?y.mode:void 0,S=y?.fileUpload===!0?!0:void 0;return{cleanContent:l.replace(c,"").trim(),suggestedActions:f,conversationState:m,mode:v,fileUpload:S}}getConversationState(){return this.conversationState}setConversationState(l){this.conversationState={...this.conversationState,...l}}generateSafetyNetActions(l){const c=l.toLowerCase();if(c.includes("auto-generate")&&c.includes("custom"))return[{id:"auto",text:"Auto-generate",value:"Auto-generate"},{id:"custom",text:"Custom",value:"Custom"}];if(c.includes("shall i proceed")||c.includes("confirm to create"))return[{id:"proceed",text:"Yes",value:"yes"},{id:"review",text:"Not yet",value:"Not yet"}];if(c.includes("would you like to set up")&&c.includes("delivery"))return[{id:"proceed",text:"Yes",value:"Yes"},{id:"later",text:"Not yet",value:"Not yet"}];if(c.includes("delivery method")&&c.includes("portal")||c.includes("webhook")&&c.includes("ftp")&&c.includes("email"))return[{id:"portal",text:"Portal",value:"Use portal delivery"},{id:"webhook",text:"Webhook",value:"Webhook"},{id:"email",text:"Email",value:"Email"},{id:"ftp",text:"FTP",value:"Configure FTP"}];if(!(c.includes("what industry")||c.includes("lead type")&&(c.includes("mortgage")||c.includes("type the id")))){if(c.includes("create the delivery account")||c.includes("shall we create"))return[{id:"proceed",text:"Yes, create account",value:"Yes, create account"},{id:"later",text:"Not yet",value:"Not yet"}];if(c.includes("activate now")&&c.includes("activate later"))return[{id:"activate",text:"Activate now",value:"Activate now"},{id:"later",text:"Activate later",value:"Activate later"}]}}}class Bp{client;rag;constructor(){const l="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";this.client=new Di({apiKey:l,dangerouslyAllowBrowser:!0}),this.rag=new qh(l),this.rag.loadIndexFromBundle().catch(()=>{})}async answerQuestion(l,c=[]){try{const s=[{role:"system",content:`You are a LeadExec Documentation Assistant. Your ONLY responsibility is answering questions using the knowledge base.

## CORE RESPONSIBILITIES
- Answer questions about LeadExec features, API, workflows
- Use RAG knowledge base context provided below
- Provide accurate, helpful documentation-based responses
- Never attempt workflow execution or client setup

## RESPONSE RULES
- Keep answers concise and accurate
- Reference specific documentation when available
- If question is about workflow execution, redirect to flow agent
- Never invent information not in knowledge base

## TONE
- Helpful and professional
- Focus on clear explanations
- Provide relevant examples when available`}];try{const m=await this.rag.queryTopK(l,5);if(m&&m.length>0){const v=m.map((S,E)=>`[Knowledge ${E+1}] ${S.source}
${S.text}`).join(`

`);s.push({role:"system",content:`Knowledge Base Context:
${v}`})}}catch{}const d=c.slice(-3);s.push(...d.map(m=>({role:m.role==="user"?"user":"assistant",content:m.content}))),s.push({role:"user",content:l});const f=(await this.client.chat.completions.create({model:"gpt-4o",messages:s,temperature:.2,max_tokens:500})).choices[0]?.message;if(!f)throw new Error("No response from OpenAI");return{content:f.content||"I'm here to help with LeadExec questions!",isHelpResponse:!0}}catch(s){throw console.error("Help Agent Error:",s),new Error(`Failed to get help response: ${s instanceof Error?s.message:"Unknown error"}`)}}}class Gp{client;constructor(){const l="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";this.client=new Di({apiKey:l,dangerouslyAllowBrowser:!0})}async classifyIntent(l,c=[]){const s=this.quickClassify(l,c);return s.confidence>.9?s:await this.aiClassify(l,c)}quickClassify(l,c){const s=l.toLowerCase().trim(),d=c.slice(-2).map(C=>C.content.toLowerCase()).join(" ");if(["later","i'll do this later","manually later","configure later","handle later","set up later","i'll handle this","do this manually"].some(C=>s.includes(C)))return{intent:"workflow_execution",confidence:.98,reasoning:`Message indicates "Later" handling - continue workflow: "${s}"`};if(["create","proceed","yes","no","not yet","upload","manual","portal","webhook","ftp","email","activate","configure","set up"].some(C=>s.includes(C)))return{intent:"workflow_execution",confidence:.95,reasoning:`Message contains workflow execution trigger: "${s}"`};const m=s.replace(/'/g,"'").replace(/[?!.,]/g,"").trim();if(["help","documentation","guide","explain to me","i need help"].some(C=>s.includes(C))&&[/^(help|documentation|guide)/i,/what is leadexec/i,/how does leadexec work/i,/leadexec documentation/i].some(C=>C.test(m)))return{intent:"general_documentation",confidence:.85,reasoning:`Explicit help request detected: "${s}"`};if(d.includes("client setup")||d.includes("delivery method")||d.includes("shall i proceed")||d.includes("industry vertical")||d.includes("company name")||d.includes("contact name")){if(!s.includes("?")&&s.length>10&&(s.includes("@")||s.includes("company")||s.includes("llc")||s.includes("inc")||s.includes("corp")||/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(s)||/\b\d{5}\b/.test(s)))return{intent:"workflow_data_provision",confidence:.95,reasoning:"User is providing workflow data (company info, contact details)"};if(["which","what are","available","options","can i","should i"].some(_=>s.includes(_)))return{intent:"workflow_contextual",confidence:.85,reasoning:"Contextual question within active workflow"}}return{intent:"general_documentation",confidence:.3,reasoning:"Unclear intent, needs AI classification"}}async aiClassify(l,c){const y=`Classify the user's intent for this message in a workflow context.

CONTEXT (last 3 messages):
${c.slice(-3).map(f=>`${f.role}: ${f.content}`).join(`
`)}

USER MESSAGE: "${l}"

INTENT OPTIONS:
1. workflow_execution - User wants to execute workflow actions (create, proceed, select options, configure)
2. workflow_contextual - User is asking questions about current workflow step (which options, what fields, available choices)  
3. general_documentation - User wants general system explanations (what is X, how does Y work)
4. help_request - User explicitly needs help or assistance

CRITICAL RULES (MINIMIZE WORKFLOW INTERRUPTION):
- ALWAYS prioritize workflow_execution/workflow_contextual/workflow_data_provision over documentation
- If context shows ANY workflow activity ("client setup", "delivery method", "shall I proceed"), assume workflow intent
- Only use general_documentation if user EXPLICITLY says "help", "documentation", or "explain" AND no workflow context
- Questions during active workflow should be workflow_contextual, NOT general_documentation
- When in doubt, choose workflow intent to avoid interruption

WORKFLOW INDICATORS:
- Commands like "create", "proceed", "upload" = workflow_execution
- Questions during workflow = workflow_contextual  
- Data provision during workflow = workflow_data_provision
- Only explicit help requests outside workflow = general_documentation

Respond with JSON only:
{
  "intent": "workflow_execution|workflow_contextual|general_documentation|help_request",
  "confidence": 0.1-1.0,
  "reasoning": "brief explanation"
}`;try{const m=(await this.client.chat.completions.create({model:"gpt-4o-mini",messages:[{role:"user",content:y}],temperature:.1,max_tokens:150})).choices[0]?.message?.content;if(!m)throw new Error("No response from AI classifier");const v=JSON.parse(m);if(!["workflow_execution","workflow_contextual","general_documentation","help_request"].includes(v.intent))throw new Error(`Invalid intent: ${v.intent}`);return(v.confidence<0||v.confidence>1)&&(v.confidence=Math.max(0,Math.min(1,v.confidence))),v}catch(f){console.warn("AI intent classification failed, using fallback:",f);const m=l.toLowerCase();return m.includes("?")||m.startsWith("what")||m.startsWith("how")?{intent:"general_documentation",confidence:.6,reasoning:"AI classification failed, fallback to documentation based on question format"}:{intent:"workflow_execution",confidence:.5,reasoning:"AI classification failed, fallback to workflow execution"}}}}class zp{flowAgent;helpAgent;intentClassifier;workflowState={interrupted:!1};constructor(){this.flowAgent=new qp,this.helpAgent=new Bp,this.intentClassifier=new Gp}setAgentInstructions(l){this.flowAgent.setAgentInstructions(l)}async sendMessage(l,c=[]){if(this.workflowState.interrupted&&this.isContinuationResponse(l)){const S=await this.resumeWorkflow(l,c);return this.workflowState.interrupted=!1,S}const s=await this.intentClassifier.classifyIntent(l,c);console.log("Intent Classification:",{message:l.substring(0,50),intent:s.intent,confidence:s.confidence});const d=this.isInActiveWorkflow(c),y=(s.intent==="general_documentation"||s.intent==="help_request")&&s.confidence>.85&&(!d||l.toLowerCase().includes("help")),f=s.intent==="workflow_execution"||s.intent==="workflow_data_provision"||s.intent==="workflow_contextual";if(y&&!f){this.isInActiveWorkflow(c)&&await this.preserveWorkflowState(c);try{const k={content:(await this.helpAgent.answerQuestion(l,c)).content,conversationState:this.flowAgent.getConversationState(),suggestedActions:void 0,mode:"final",agentType:"help"};return this.workflowState.interrupted&&(k.requiresFollowUp=!0,k.followUpContent=this.generateContinuationPrompt(),k.followUpActions=this.workflowState.pendingActions),k}catch(E){console.warn("Help agent failed, falling back to flow agent:",E)}}const v=await this.flowAgent.sendMessage(l,c);return v.conversationState&&(this.workflowState.collectedData=v.conversationState.collectedData),v}_legacyIsHelpQuestion(l,c){const s=l.toLowerCase(),d=c.slice(-2).map(k=>k.content.toLowerCase()).join(" ");if(["create a new client for lead distribution","create client","new client","client setup","create delivery","delivery account","delivery method","set up delivery","configure delivery"].some(k=>s.includes(k)))return!1;const f=["what is","what are","what does","how does","explain","tell me about","what's","define","description","documentation","help","info","information"],m=["create client","create delivery","set up","configure","delivery method","delivery account","webhook","portal","ftp","email delivery","activate","proceed","yes","no","not yet","upload","manual"],v=d.includes("client setup")||d.includes("delivery method")||d.includes("created successfully")||c.some(k=>k.content.includes("From your input, I have"));if(s.includes("create")||s.includes("set up")||s.includes("configure"))return!1;if((s.startsWith("what's ")||s.startsWith("what is "))&&!s.includes("create")&&!s.includes("set up"))return!0;if(v){const k=s.startsWith("what is ")||s.startsWith("what are ")||s.startsWith("what does ")||s.startsWith("how does ")||s.startsWith("explain ")||s.includes("documentation")||s.includes("help");return!s.includes("?")&&s.length>5&&!k?!1:k}const S=f.some(k=>s.includes(k)),E=m.some(k=>s.includes(k));return S&&!E?!0:!v&&(s.includes("?")||s.split(" ").length<10)?S||!E:!1}isInActiveWorkflow(l){return l.slice(-8).map(s=>s.content.toLowerCase()).some(s=>s.includes("client setup")||s.includes("delivery method")||s.includes("created successfully")||s.includes("shall i proceed")||s.includes("which delivery method")||s.includes("portal delivery")||s.includes("webhook")||s.includes("upload instructions")||s.includes("configure manually"))}detectCurrentFlowStep(l){const c=l.slice(-3).map(s=>s.content.toLowerCase()).join(" ");return c.includes("delivery method")&&(c.includes("portal")||c.includes("webhook"))?(this.workflowState.pendingActions=[{id:"portal",text:"Portal",value:"Use portal delivery"},{id:"webhook",text:"Webhook",value:"Webhook"},{id:"email",text:"Email",value:"Email"},{id:"ftp",text:"FTP",value:"Configure FTP"}],"delivery_method_selection"):c.includes("auto-generate")&&c.includes("custom")?(this.workflowState.pendingActions=[{id:"auto",text:"Auto-generate",value:"Auto-generate"},{id:"custom",text:"Custom",value:"Custom"}],"credential_selection"):c.includes("lead type")||c.includes("industry")?(this.workflowState.pendingActions=[],"lead_type_selection"):c.includes("activate now")&&c.includes("activate later")?(this.workflowState.pendingActions=[{id:"activate",text:"Activate now",value:"Activate now"},{id:"later",text:"Activate later",value:"Activate later"}],"activation_choice"):c.includes("client setup")||c.includes("shall i proceed")?(this.workflowState.pendingActions=[{id:"proceed",text:"Yes",value:"yes"},{id:"review",text:"Not yet",value:"Not yet"}],"client_confirmation"):"unknown"}generateContinuationPrompt(){switch(this.workflowState.lastFlowStep){case"delivery_method_selection":return"Now that you understand delivery methods, which delivery method would you like to use for your client?";case"client_confirmation":return"Now that you have the information you need, shall we proceed with creating the client?";case"credential_selection":return"Would you like to auto-generate credentials or provide custom ones?";case"lead_type_selection":return"Please type the lead type ID number (like 54353) for this client:";case"activation_choice":return"Would you like to activate the client now or later?";default:return"Let's continue where we left off. What would you like to do next?"}}async preserveWorkflowState(l){this.workflowState.interrupted=!0,this.workflowState.lastFlowStep=this.detectCurrentFlowStep(l);const c=[...l].reverse().find(d=>d.role==="assistant");c&&(this.workflowState.lastFlowResponse=c.content);const s=this.flowAgent.getConversationState();s?.collectedData&&(this.workflowState.collectedData=s.collectedData)}isContinuationResponse(l){const s=l.toLowerCase().replace(/set up/g,"setup").replace(/not yet/g,"no").trim();return["yes","no","proceed","continue","go ahead","ok","sure","portal","webhook","email","ftp","use portal","setup webhook","configure ftp","auto-generate","custom","auto","manual","activate now","activate later","activate","upload","skip","manually",/\b\d{5}\b/].some(y=>y instanceof RegExp?y.test(s):s.includes(y))}async resumeWorkflow(l,c){this.workflowState.collectedData&&this.flowAgent.setConversationState({activeWorkflow:"client_setup",workflowStep:this.workflowState.lastFlowStep,collectedData:this.workflowState.collectedData});const s=[...c];return this.workflowState.lastFlowResponse&&s.push({role:"assistant",content:`[Resuming workflow after help question]
${this.workflowState.lastFlowResponse}`}),await this.flowAgent.sendMessage(l,s)}}class Wp{router;constructor(){this.router=new zp}setDocumentation(){}setAgentInstructions(l){this.router.setAgentInstructions(l)}async sendMessage(l,c=[]){return await this.router.sendMessage(l,c)}}class Vp{static async processFile(l,c){switch(l.name.split(".").pop()?.toLowerCase()){case"csv":return this.processCSV(c);case"json":return this.processJSON(c);case"xlsx":case"xls":return this.processExcel(c);default:return this.processText(c)}}static processCSV(l){const c=l.split(`
`).filter(f=>f.trim());if(c.length<1)throw new Error("Empty CSV file");const s=c[0].split(",").map(f=>f.trim().replace(/["']/g,""));let d={};if(c.length>1){const f=c[1].split(",").map(m=>m.trim().replace(/["']/g,""));s.forEach((m,v)=>{d[m]=f[v]||""})}const y=this.generateFieldMappings(s);return{fields:s,mappings:y,format:"csv",sampleData:d}}static processJSON(l){try{const c=JSON.parse(l);let s=[],d={};if(Array.isArray(c)&&c.length>0)s=Object.keys(c[0]),d=c[0];else if(typeof c=="object")s=Object.keys(c),d=c;else throw new Error("Invalid JSON structure");const y=this.generateFieldMappings(s);return{fields:s,mappings:y,format:"json",sampleData:d}}catch{throw new Error("Invalid JSON format")}}static processExcel(l){const c=["firstName","lastName","email","phone","loanAmount"],s={firstName:"John",lastName:"Doe",email:"john@example.com",phone:"555-0123",loanAmount:"250000"},d=this.generateFieldMappings(c);return{fields:c,mappings:d,format:"xlsx",sampleData:s}}static processText(l){const c=l.split(`
`),s=[];c.forEach(y=>{const f=y.match(/(\w+):/);f&&s.push(f[1])}),s.length===0&&["firstName","lastName","email","phone"].forEach(f=>{l.toLowerCase().includes(f.toLowerCase())&&s.push(f)});const d=this.generateFieldMappings(s);return{fields:s,mappings:d,format:"unknown",sampleData:{}}}static generateFieldMappings(l){const c={first_name:["firstname","fname","first","givenname"],last_name:["lastname","lname","last","surname","familyname"],email:["email","emailaddress","mail"],primary_phone:["phone","telephone","phonenumber","primaryphone","mobile"],loan_amount:["loanamount","amount","loanvalue","mortgageamount"],credit_score:["creditscore","score","fico","credit"],state:["state","st","statecode","province"],property_value:["propertyvalue","homevalue","propvalue"],zip_code:["zip","zipcode","postal","postalcode"],address:["address","street","streetaddress"],city:["city","town"],monthly_income:["income","monthlyincome","grossincome"]},s=[];return l.forEach(d=>{const y=d.toLowerCase().replace(/[_\s-]/g,"");let f=null;for(const[m,v]of Object.entries(c))if(v.some(S=>S===y)){f=m;break}s.push({systemField:f||"custom_field",userField:d,status:f?"mapped":"skipped",dataType:this.inferDataType(d)})}),s}static inferDataType(l){const c=l.toLowerCase();return c.includes("email")?"email":c.includes("phone")||c.includes("telephone")?"phone":c.includes("amount")||c.includes("value")||c.includes("price")?"currency":c.includes("score")||c.includes("rating")?"number":c.includes("date")||c.includes("time")?"date":c.includes("zip")||c.includes("postal")?"zipcode":"text"}}class Hp{client;constructor(){const l="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";this.client=new Di({apiKey:l,dangerouslyAllowBrowser:!0})}async mapFields(l,c){try{const s=[{role:"system",content:`You are a field mapping and lead type detection specialist. Analyze user fields and suggest appropriate lead type.

STANDARD SYSTEM FIELDS:
- first_name, last_name
- email, primary_phone  
- loan_amount, credit_score
- state, zip_code, address, city
- property_value, monthly_income
- date_of_birth, ssn_last_four

LEAD TYPES TO DETECT:
- Mortgage/Home Loan: loan_amount, credit_score, property_value, loan_purpose
- Auto: vehicle_make, vehicle_model, vehicle_year, trade_in_value
- Insurance: coverage_type, current_provider, policy_expiration
- Personal Loan: loan_amount, debt_consolidation, credit_score
- Credit Card: credit_score, annual_income, existing_debt

MAPPING RULES:
- Map to existing system fields when possible
- If no good match, mark as "skipped" 
- Consider field names AND sample data for context
- Suggest most likely lead type based on fields
- Provide confidence scores 0-100

RESPONSE FORMAT (JSON only):
{
  "mappings": [
    {
      "userField": "firstName", 
      "systemField": "first_name",
      "status": "mapped",
      "confidence": 95,
      "reasoning": "Clear match for first name"
    }
  ],
  "suggestedLeadType": "Mortgage/Home Loan",
  "leadTypeConfidence": 85,
  "leadTypeReasoning": "Fields indicate mortgage application with loan amount and credit score"
}`},{role:"user",content:`Map these fields: ${l.join(", ")}

${c?`Sample data: ${JSON.stringify(c,null,2)}`:"No sample data provided"}`}],y=(await this.client.chat.completions.create({model:"gpt-4o",messages:s,temperature:.1,response_format:{type:"json_object"}})).choices[0]?.message?.content;if(!y)throw new Error("No mapping response received");const m=JSON.parse(y).mappings||[],v={totalFields:l.length,mapped:m.filter(S=>S.status==="mapped").length,skipped:m.filter(S=>S.status==="skipped").length,needsCreation:m.filter(S=>S.status==="created").length};return{mappings:m,summary:v}}catch(s){return console.error("AI Auto-mapping error:",s),this.fallbackMapping(l)}}fallbackMapping(l){const c={firstname:"first_name",lastname:"last_name",email:"email",phone:"primary_phone",loanamount:"loan_amount",creditscore:"credit_score",state:"state"},s=l.map(y=>{const f=y.toLowerCase().replace(/[_\s-]/g,""),m=c[f];return{userField:y,systemField:m||"custom_field",status:m?"mapped":"skipped",confidence:m?85:0,reasoning:m?"Basic pattern match":"No system equivalent"}}),d={totalFields:l.length,mapped:s.filter(y=>y.status==="mapped").length,skipped:s.filter(y=>y.status==="skipped").length,needsCreation:0};return{mappings:s,summary:d}}}const Yp=({state:u,onHistoryToggle:l,onBackClick:c,onNewChat:s,onMaximizeToggle:d,onClose:y})=>N.jsxs("header",{className:"ai-chat__header",children:[N.jsxs("div",{className:"ai-chat__header-left",children:[N.jsxs("button",{className:"ai-chat__back",type:"button",onClick:c,children:[N.jsx("i",{className:"cil-arrow-left"}),N.jsx("span",{className:"ai-chat__back-text",children:"Back"})]}),N.jsxs("button",{className:"ai-chat__new-chat-btn",type:"button",onClick:s,children:[N.jsx("i",{className:"cil-plus"}),N.jsx("span",{children:"New"})]})]}),N.jsxs("div",{className:"ai-chat__actions",children:[N.jsx("button",{className:`ai-chat__action ${u.isHistoryActive?"ai-chat__action--active":""}`,"data-action":"history",type:"button",title:"Chat History",onClick:l,children:N.jsx("i",{className:"cil-history"})}),N.jsx("button",{className:"ai-chat__action","data-action":"maximize",type:"button",title:u.isMaximized?"Exit Fullscreen":"Maximize",onClick:d,children:N.jsx("i",{className:u.isMaximized?"cil-view-column":"cil-window-maximize"})}),N.jsx("button",{className:"ai-chat__action","data-action":"close",type:"button",title:"Close",onClick:y,children:N.jsx("i",{className:"cil-x"})})]})]}),Bh=({icon:u,title:l,description:c,state:s="default",layout:d="vertical",disabled:y=!1,isNew:f=!1,onClick:m,className:v="","aria-label":S})=>{const E=["ai-chat__action-card",`ai-chat__action-card--${d}`,s==="selected"?"ai-chat__action-card--selected":"",v].filter(Boolean).join(" ");return N.jsxs("button",{className:E,onClick:m,type:"button",disabled:y,"aria-label":S||l,children:[N.jsx("div",{className:"ai-chat__action-card-icon","aria-hidden":"true",children:N.jsx("i",{className:u})}),N.jsxs("div",{className:"ai-chat__action-card-content",children:[N.jsx("h3",{className:"ai-chat__action-card-title",children:l}),N.jsx("p",{className:"ai-chat__action-card-desc",children:c})]}),f&&!y&&N.jsx("span",{className:"ai-chat__action-card-new",children:"NEW"})]})},jp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20fill='none'%20viewBox='0%200%2044%2044'%3e%3cg%20fill='%23fff'%20fill-rule='evenodd'%20clip-rule='evenodd'%20opacity='.922'%3e%3cpath%20d='M18.0594%200C18.288%200%2018.5165%200%2018.7451%200C18.8968%200.13864%2018.9967%200.310515%2019.0451%200.515625C19.1022%203.03646%2019.1022%205.5573%2019.0451%208.07813C18.8883%208.56438%2018.5597%208.72197%2018.0594%208.55078C17.9266%208.44645%2017.8267%208.31755%2017.7594%208.16406C17.7022%205.58594%2017.7022%203.00781%2017.7594%200.429688C17.8448%200.273018%2017.9449%200.129789%2018.0594%200Z'/%3e%3cpath%20d='M10.431%202.92188C10.7675%202.88292%2011.0389%202.9975%2011.2453%203.26563C12.3024%204.8698%2013.3596%206.47397%2014.4166%208.07813C14.8708%208.87383%2014.6565%209.28917%2013.7738%209.32423C13.6207%209.25677%2013.4921%209.15656%2013.3881%209.02345C12.3024%207.36199%2011.2168%205.70053%2010.131%204.03907C9.90374%203.56977%2010.0037%203.19737%2010.431%202.92188Z'/%3e%3cpath%20d='M25.9449%202.92188C26.7034%202.95313%2026.9463%203.32553%2026.6734%204.03906C25.5592%205.72917%2024.4449%207.41927%2023.3307%209.10938C22.9231%209.47538%2022.5517%209.44677%2022.2164%209.02344C22.1592%208.79424%2022.1592%208.56511%2022.2164%208.33594C23.3021%206.67448%2024.3877%205.01302%2025.4735%203.35156C25.6217%203.18812%2025.7788%203.04489%2025.9449%202.92188Z'/%3e%3cpath%20d='M16.9451%2044C16.3737%2044%2015.8023%2044%2015.2309%2044C14.8094%2043.8451%2014.438%2043.6017%2014.1166%2043.2695C11.9286%2041.047%209.7144%2038.8556%207.47398%2036.6953C6.99179%2035.8615%206.87751%2034.9736%207.13113%2034.0312C7.53634%2033.1327%207.9649%2032.2447%208.41681%2031.3672C8.55528%2031.0366%208.64099%2030.6928%208.67394%2030.3359C8.87304%2026.438%208.84447%2022.5422%208.58823%2018.6484C8.48771%2017.6136%208.35914%2016.5823%208.20253%2015.5547C8.38798%2013.564%209.47363%2012.5042%2011.4596%2012.375C13.1298%2012.4591%2014.1726%2013.3185%2014.5881%2014.9531C15.0146%2017.1915%2015.4574%2019.4259%2015.9166%2021.6562C21.1913%2016.4105%2026.4483%2011.1541%2031.6876%205.88671C33.1107%205.07327%2034.4536%205.18785%2035.716%206.23046C36.8821%207.62385%2036.9536%209.07044%2035.9303%2010.5703C34.116%2012.3893%2032.3018%2014.2083%2030.4876%2016.0273C32.6542%2016.8056%2033.4256%2018.3095%2032.8018%2020.5391C34.8141%2020.9393%2035.7426%2022.171%2035.5874%2024.2344C35.53%2024.5361%2035.43%2024.8225%2035.2874%2025.0937C37.2192%2025.6164%2038.1192%2026.8769%2037.9874%2028.875C37.8993%2029.3409%2037.7279%2029.7706%2037.4731%2030.1641C34.542%2033.1314%2031.6421%2036.1249%2028.7734%2039.1445C27.6087%2040.2586%2026.2659%2041.0894%2024.7449%2041.6367C23.612%2041.8541%2022.4692%2041.9974%2021.3164%2042.0664C20.9398%2042.1636%2020.5684%2042.2782%2020.2022%2042.4102C19.1419%2043.0134%2018.0562%2043.5433%2016.9451%2044ZM32.9732%206.70312C34.3348%206.59362%2035.1348%207.20951%2035.3732%208.55078C35.3055%208.85972%2035.2055%209.1605%2035.0732%209.45312C30.9328%2013.6904%2026.7615%2017.9013%2022.5592%2022.0859C22.4202%2022.8843%2022.7488%2023.1851%2023.5449%2022.9883C25.3449%2021.1836%2027.1448%2019.3789%2028.9448%2017.5742C30.0801%2017.0753%2030.9515%2017.376%2031.559%2018.4766C31.7861%2019.1531%2031.7004%2019.7833%2031.3018%2020.3672C29.5876%2022.0859%2027.8734%2023.8047%2026.1591%2025.5234C25.8989%2026.3795%2026.1989%2026.7089%2027.0591%2026.5117C28.4877%2025.0794%2029.9161%2023.6472%2031.3447%2022.2148C32.4749%2021.542%2033.4034%2021.7569%2034.1303%2022.8594C34.416%2023.4036%2034.416%2023.9479%2034.1303%2024.4922C32.6757%2026.0367%2031.1901%2027.5548%2029.6733%2029.0469C29.4141%2029.9039%2029.7141%2030.2333%2030.5733%2030.0352C31.6018%2029.0039%2032.6304%2027.9727%2033.6589%2026.9414C34.7949%2026.1942%2035.752%2026.3803%2036.5303%2027.5C36.8159%2028.0442%2036.8159%2028.5886%2036.5303%2029.1328C33.6251%2032.0455%2030.7823%2035.0103%2028.0019%2038.0273C27.0916%2038.911%2026.0631%2039.6272%2024.9163%2040.1758C24.6357%2040.2791%2024.35%2040.365%2024.0592%2040.4336C22.9143%2040.5637%2021.7715%2040.707%2020.6307%2040.8633C20.2879%2040.9778%2019.945%2041.0925%2019.6022%2041.207C18.7272%2041.6886%2017.8416%2042.1469%2016.9451%2042.582C16.4941%2042.7057%2016.0369%2042.7343%2015.5737%2042.668C13.1359%2040.3957%2010.7502%2038.061%208.41681%2035.6641C8.25584%2035.1409%208.28442%2034.6252%208.50252%2034.1172C9.15296%2033.0708%209.63863%2031.9536%209.95962%2030.7656C10.0823%2027.4722%2010.1109%2024.1779%2010.0453%2020.8828C9.97565%2019.1131%209.81845%2017.3514%209.57392%2015.5977C9.62929%2014.4249%2010.2435%2013.7803%2011.4167%2013.6641C12.4403%2013.7448%2013.0689%2014.289%2013.3024%2015.2969C13.8166%2017.9325%2014.3309%2020.5679%2014.8452%2023.2031C15.002%2023.6894%2015.3306%2023.847%2015.8309%2023.6758C21.3736%2018.1185%2026.9162%2012.5612%2032.459%207.0039C32.6498%206.92304%2032.8213%206.82277%2032.9732%206.70312Z'/%3e%3c/g%3e%3c/svg%3e",Qp=({onSendMessage:u,onFlowTrigger:l,isTyping:c,onShowAllToggle:s})=>{const[d,y]=ne.useState(!1),f=ne.useRef(null),m=[{id:"create-single-client",icon:"cil-user-plus",title:"Create Single Client",description:"Sets up a lead buyer with company details, credentials, and delivery configuration.",isNew:!0,action:()=>l?l("Create Single Client"):u("Create Single Client")},{id:"create-multiple-clients",icon:"cil-people",title:"Create Multiple Clients",description:"Bulk imports lead buyers from CSV/Excel files to create multiple customers.",disabled:!0},{id:"setup-delivery-method",icon:"cil-send",title:"Setup Delivery Method",description:"Configures how leads are sent to clients (Webhook, Email, SMS, Portal).",disabled:!0},{id:"flow-5",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0},{id:"flow-6",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0}],v=m.slice(0,3);return ne.useEffect(()=>{const S=()=>{if(f.current){const k=f.current.offsetWidth;y(k<=640)}};S();const E=new ResizeObserver(S);return f.current&&E.observe(f.current),()=>{E.disconnect()}},[]),N.jsxs("div",{className:"ai-chat__initial",children:[N.jsxs("div",{className:"ai-chat__logo-section",role:"banner",children:[N.jsx("div",{className:"ai-chat__logo","aria-hidden":"true",children:N.jsx("img",{src:jp,alt:""})}),N.jsxs("h1",{className:"ai-chat__title",children:[N.jsx("span",{className:"ai-text",children:"AI"}),N.jsx("span",{className:"assist-text","aria-label":"AI Assist",children:"Assist"})]})]}),N.jsxs("div",{ref:f,className:"ai-chat__initial-cards-wrapper","data-layout":d?"compact":"default",children:[N.jsx("div",{className:"ai-chat__action-cards ai-chat__action-cards--collapsed",children:v.map(S=>N.jsx(Bh,{icon:S.icon,title:S.title,description:S.description,isNew:S.isNew,disabled:S.disabled||c,onClick:S.action,"aria-label":S.title},S.id))}),m.length>3&&N.jsx("button",{className:"ai-chat__tool-pill",onClick:s,"aria-label":"Show all actions",children:"Show All"})]})]})};function Sr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var In=Sr();function Gh(u){In=u}var Li={exec:()=>null};function le(u,l=""){let c=typeof u=="string"?u:u.source,s={replace:(d,y)=>{let f=typeof y=="string"?y:y.source;return f=f.replace(Ge.caret,"$1"),c=c.replace(d,f),s},getRegex:()=>new RegExp(c,l)};return s}var Ge={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},Xp=/^(?:[ \t]*(?:\n|$))+/,Zp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Kp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ei=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Tr=/(?:[*+-]|\d{1,9}[.)])/,zh=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Wh=le(zh).replace(/bull/g,Tr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$p=le(zh).replace(/bull/g,Tr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ar=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,em=/^[^\n]+/,Cr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,tm=le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Cr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nm=le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Tr).getRegex(),Ko="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Lr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,am=le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Lr).replace("tag",Ko).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Vh=le(Ar).replace("hr",Ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ko).getRegex(),im=le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Vh).getRegex(),Dr={blockquote:im,code:Zp,def:tm,fences:Kp,heading:Jp,hr:Ei,html:am,lheading:Wh,list:nm,newline:Xp,paragraph:Vh,table:Li,text:em},Nh=le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ko).getRegex(),om={...Dr,lheading:$p,table:Nh,paragraph:le(Ar).replace("hr",Ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Nh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ko).getRegex()},lm={...Dr,html:le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Lr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Li,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:le(Ar).replace("hr",Ei).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Wh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,rm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hh=/^( {2,}|\\)\n(?!\s*$)/,cm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Jo=/[\p{P}\p{S}]/u,Er=/[\s\p{P}\p{S}]/u,Yh=/[^\s\p{P}\p{S}]/u,dm=le(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Er).getRegex(),jh=/(?!~)[\p{P}\p{S}]/u,um=/(?!~)[\s\p{P}\p{S}]/u,hm=/(?:[^\s\p{P}\p{S}]|~)/u,fm=/\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,Qh=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ym=le(Qh,"u").replace(/punct/g,Jo).getRegex(),pm=le(Qh,"u").replace(/punct/g,jh).getRegex(),Xh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",mm=le(Xh,"gu").replace(/notPunctSpace/g,Yh).replace(/punctSpace/g,Er).replace(/punct/g,Jo).getRegex(),gm=le(Xh,"gu").replace(/notPunctSpace/g,hm).replace(/punctSpace/g,um).replace(/punct/g,jh).getRegex(),vm=le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yh).replace(/punctSpace/g,Er).replace(/punct/g,Jo).getRegex(),bm=le(/\\(punct)/,"gu").replace(/punct/g,Jo).getRegex(),wm=le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Sm=le(Lr).replace("(?:-->|$)","-->").getRegex(),Tm=le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Sm).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,Am=le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Qo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zh=le(/^!?\[(label)\]\[(ref)\]/).replace("label",Qo).replace("ref",Cr).getRegex(),Kh=le(/^!?\[(ref)\](?:\[\])?/).replace("ref",Cr).getRegex(),Cm=le("reflink|nolink(?!\\()","g").replace("reflink",Zh).replace("nolink",Kh).getRegex(),Pr={_backpedal:Li,anyPunctuation:bm,autolink:wm,blockSkip:fm,br:Hh,code:rm,del:Li,emStrongLDelim:ym,emStrongRDelimAst:mm,emStrongRDelimUnd:vm,escape:sm,link:Am,nolink:Kh,punctuation:dm,reflink:Zh,reflinkSearch:Cm,tag:Tm,text:cm,url:Li},Lm={...Pr,link:le(/^!?\[(label)\]\((.*?)\)/).replace("label",Qo).getRegex(),reflink:le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qo).getRegex()},vr={...Pr,emStrongRDelimAst:gm,emStrongLDelim:pm,url:le(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Dm={...vr,br:le(Hh).replace("{2,}","*").getRegex(),text:le(vr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Yo={normal:Dr,gfm:om,pedantic:lm},Ai={normal:Pr,gfm:vr,breaks:Dm,pedantic:Lm},Em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xh=u=>Em[u];function Ct(u,l){if(l){if(Ge.escapeTest.test(u))return u.replace(Ge.escapeReplace,xh)}else if(Ge.escapeTestNoEncode.test(u))return u.replace(Ge.escapeReplaceNoEncode,xh);return u}function Mh(u){try{u=encodeURI(u).replace(Ge.percentDecode,"%")}catch{return null}return u}function Oh(u,l){let c=u.replace(Ge.findPipe,(y,f,m)=>{let v=!1,S=f;for(;--S>=0&&m[S]==="\\";)v=!v;return v?"|":" |"}),s=c.split(Ge.splitPipe),d=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),l)if(s.length>l)s.splice(l);else for(;s.length<l;)s.push("");for(;d<s.length;d++)s[d]=s[d].trim().replace(Ge.slashPipe,"|");return s}function Ci(u,l,c){let s=u.length;if(s===0)return"";let d=0;for(;d<s&&u.charAt(s-d-1)===l;)d++;return u.slice(0,s-d)}function Pm(u,l){if(u.indexOf(l[1])===-1)return-1;let c=0;for(let s=0;s<u.length;s++)if(u[s]==="\\")s++;else if(u[s]===l[0])c++;else if(u[s]===l[1]&&(c--,c<0))return s;return c>0?-2:-1}function Ih(u,l,c,s,d){let y=l.href,f=l.title||null,m=u[1].replace(d.other.outputLinkReplace,"$1");s.state.inLink=!0;let v={type:u[0].charAt(0)==="!"?"image":"link",raw:c,href:y,title:f,text:m,tokens:s.inlineTokens(m)};return s.state.inLink=!1,v}function km(u,l,c){let s=u.match(c.other.indentCodeCompensation);if(s===null)return l;let d=s[1];return l.split(`
`).map(y=>{let f=y.match(c.other.beginningSpace);if(f===null)return y;let[m]=f;return m.length>=d.length?y.slice(d.length):y}).join(`
`)}var Xo=class{options;rules;lexer;constructor(u){this.options=u||In}space(u){let l=this.rules.block.newline.exec(u);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(u){let l=this.rules.block.code.exec(u);if(l){let c=l[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:l[0],codeBlockStyle:"indented",text:this.options.pedantic?c:Ci(c,`
`)}}}fences(u){let l=this.rules.block.fences.exec(u);if(l){let c=l[0],s=km(c,l[3]||"",this.rules);return{type:"code",raw:c,lang:l[2]?l[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):l[2],text:s}}}heading(u){let l=this.rules.block.heading.exec(u);if(l){let c=l[2].trim();if(this.rules.other.endingHash.test(c)){let s=Ci(c,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(c=s.trim())}return{type:"heading",raw:l[0],depth:l[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(u){let l=this.rules.block.hr.exec(u);if(l)return{type:"hr",raw:Ci(l[0],`
`)}}blockquote(u){let l=this.rules.block.blockquote.exec(u);if(l){let c=Ci(l[0],`
`).split(`
`),s="",d="",y=[];for(;c.length>0;){let f=!1,m=[],v;for(v=0;v<c.length;v++)if(this.rules.other.blockquoteStart.test(c[v]))m.push(c[v]),f=!0;else if(!f)m.push(c[v]);else break;c=c.slice(v);let S=m.join(`
`),E=S.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${S}`:S,d=d?`${d}
${E}`:E;let k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,y,!0),this.lexer.state.top=k,c.length===0)break;let C=y.at(-1);if(C?.type==="code")break;if(C?.type==="blockquote"){let B=C,_=B.raw+`
`+c.join(`
`),q=this.blockquote(_);y[y.length-1]=q,s=s.substring(0,s.length-B.raw.length)+q.raw,d=d.substring(0,d.length-B.text.length)+q.text;break}else if(C?.type==="list"){let B=C,_=B.raw+`
`+c.join(`
`),q=this.list(_);y[y.length-1]=q,s=s.substring(0,s.length-C.raw.length)+q.raw,d=d.substring(0,d.length-B.raw.length)+q.raw,c=_.substring(y.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:y,text:d}}}list(u){let l=this.rules.block.list.exec(u);if(l){let c=l[1].trim(),s=c.length>1,d={type:"list",raw:"",ordered:s,start:s?+c.slice(0,-1):"",loose:!1,items:[]};c=s?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=s?c:"[*+-]");let y=this.rules.other.listItemRegex(c),f=!1;for(;u;){let v=!1,S="",E="";if(!(l=y.exec(u))||this.rules.block.hr.test(u))break;S=l[0],u=u.substring(S.length);let k=l[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,_e=>" ".repeat(3*_e.length)),C=u.split(`
`,1)[0],B=!k.trim(),_=0;if(this.options.pedantic?(_=2,E=k.trimStart()):B?_=l[1].length+1:(_=l[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,E=k.slice(_),_+=l[1].length),B&&this.rules.other.blankLine.test(C)&&(S+=C+`
`,u=u.substring(C.length+1),v=!0),!v){let _e=this.rules.other.nextBulletRegex(_),Ee=this.rules.other.hrRegex(_),ce=this.rules.other.fencesBeginRegex(_),be=this.rules.other.headingBeginRegex(_),ft=this.rules.other.htmlBeginRegex(_);for(;u;){let we=u.split(`
`,1)[0],Me;if(C=we,this.options.pedantic?(C=C.replace(this.rules.other.listReplaceNesting,"  "),Me=C):Me=C.replace(this.rules.other.tabCharGlobal,"    "),ce.test(C)||be.test(C)||ft.test(C)||_e.test(C)||Ee.test(C))break;if(Me.search(this.rules.other.nonSpaceChar)>=_||!C.trim())E+=`
`+Me.slice(_);else{if(B||k.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ce.test(k)||be.test(k)||Ee.test(k))break;E+=`
`+C}!B&&!C.trim()&&(B=!0),S+=we+`
`,u=u.substring(we.length+1),k=Me.slice(_)}}d.loose||(f?d.loose=!0:this.rules.other.doubleBlankLine.test(S)&&(f=!0));let q=null,ie;this.options.gfm&&(q=this.rules.other.listIsTask.exec(E),q&&(ie=q[0]!=="[ ] ",E=E.replace(this.rules.other.listReplaceTask,""))),d.items.push({type:"list_item",raw:S,task:!!q,checked:ie,loose:!1,text:E,tokens:[]}),d.raw+=S}let m=d.items.at(-1);if(m)m.raw=m.raw.trimEnd(),m.text=m.text.trimEnd();else return;d.raw=d.raw.trimEnd();for(let v=0;v<d.items.length;v++)if(this.lexer.state.top=!1,d.items[v].tokens=this.lexer.blockTokens(d.items[v].text,[]),!d.loose){let S=d.items[v].tokens.filter(k=>k.type==="space"),E=S.length>0&&S.some(k=>this.rules.other.anyLine.test(k.raw));d.loose=E}if(d.loose)for(let v=0;v<d.items.length;v++)d.items[v].loose=!0;return d}}html(u){let l=this.rules.block.html.exec(u);if(l)return{type:"html",block:!0,raw:l[0],pre:l[1]==="pre"||l[1]==="script"||l[1]==="style",text:l[0]}}def(u){let l=this.rules.block.def.exec(u);if(l){let c=l[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=l[2]?l[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):l[3];return{type:"def",tag:c,raw:l[0],href:s,title:d}}}table(u){let l=this.rules.block.table.exec(u);if(!l||!this.rules.other.tableDelimiter.test(l[2]))return;let c=Oh(l[1]),s=l[2].replace(this.rules.other.tableAlignChars,"").split("|"),d=l[3]?.trim()?l[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],y={type:"table",raw:l[0],header:[],align:[],rows:[]};if(c.length===s.length){for(let f of s)this.rules.other.tableAlignRight.test(f)?y.align.push("right"):this.rules.other.tableAlignCenter.test(f)?y.align.push("center"):this.rules.other.tableAlignLeft.test(f)?y.align.push("left"):y.align.push(null);for(let f=0;f<c.length;f++)y.header.push({text:c[f],tokens:this.lexer.inline(c[f]),header:!0,align:y.align[f]});for(let f of d)y.rows.push(Oh(f,y.header.length).map((m,v)=>({text:m,tokens:this.lexer.inline(m),header:!1,align:y.align[v]})));return y}}lheading(u){let l=this.rules.block.lheading.exec(u);if(l)return{type:"heading",raw:l[0],depth:l[2].charAt(0)==="="?1:2,text:l[1],tokens:this.lexer.inline(l[1])}}paragraph(u){let l=this.rules.block.paragraph.exec(u);if(l){let c=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:c,tokens:this.lexer.inline(c)}}}text(u){let l=this.rules.block.text.exec(u);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(u){let l=this.rules.inline.escape.exec(u);if(l)return{type:"escape",raw:l[0],text:l[1]}}tag(u){let l=this.rules.inline.tag.exec(u);if(l)return!this.lexer.state.inLink&&this.rules.other.startATag.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:l[0]}}link(u){let l=this.rules.inline.link.exec(u);if(l){let c=l[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;let y=Ci(c.slice(0,-1),"\\");if((c.length-y.length)%2===0)return}else{let y=Pm(l[2],"()");if(y===-2)return;if(y>-1){let f=(l[0].indexOf("!")===0?5:4)+l[1].length+y;l[2]=l[2].substring(0,y),l[0]=l[0].substring(0,f).trim(),l[3]=""}}let s=l[2],d="";if(this.options.pedantic){let y=this.rules.other.pedanticHrefTitle.exec(s);y&&(s=y[1],d=y[3])}else d=l[3]?l[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?s=s.slice(1):s=s.slice(1,-1)),Ih(l,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},l[0],this.lexer,this.rules)}}reflink(u,l){let c;if((c=this.rules.inline.reflink.exec(u))||(c=this.rules.inline.nolink.exec(u))){let s=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),d=l[s.toLowerCase()];if(!d){let y=c[0].charAt(0);return{type:"text",raw:y,text:y}}return Ih(c,d,c[0],this.lexer,this.rules)}}emStrong(u,l,c=""){let s=this.rules.inline.emStrongLDelim.exec(u);if(!(!s||s[3]&&c.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!c||this.rules.inline.punctuation.exec(c))){let d=[...s[0]].length-1,y,f,m=d,v=0,S=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,l=l.slice(-1*u.length+d);(s=S.exec(l))!=null;){if(y=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!y)continue;if(f=[...y].length,s[3]||s[4]){m+=f;continue}else if((s[5]||s[6])&&d%3&&!((d+f)%3)){v+=f;continue}if(m-=f,m>0)continue;f=Math.min(f,f+m+v);let E=[...s[0]][0].length,k=u.slice(0,d+s.index+E+f);if(Math.min(d,f)%2){let B=k.slice(1,-1);return{type:"em",raw:k,text:B,tokens:this.lexer.inlineTokens(B)}}let C=k.slice(2,-2);return{type:"strong",raw:k,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(u){let l=this.rules.inline.code.exec(u);if(l){let c=l[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(c),d=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return s&&d&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:l[0],text:c}}}br(u){let l=this.rules.inline.br.exec(u);if(l)return{type:"br",raw:l[0]}}del(u){let l=this.rules.inline.del.exec(u);if(l)return{type:"del",raw:l[0],text:l[2],tokens:this.lexer.inlineTokens(l[2])}}autolink(u){let l=this.rules.inline.autolink.exec(u);if(l){let c,s;return l[2]==="@"?(c=l[1],s="mailto:"+c):(c=l[1],s=c),{type:"link",raw:l[0],text:c,href:s,tokens:[{type:"text",raw:c,text:c}]}}}url(u){let l;if(l=this.rules.inline.url.exec(u)){let c,s;if(l[2]==="@")c=l[0],s="mailto:"+c;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])?.[0]??"";while(d!==l[0]);c=l[0],l[1]==="www."?s="http://"+l[0]:s=l[0]}return{type:"link",raw:l[0],text:c,href:s,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(u){let l=this.rules.inline.text.exec(u);if(l){let c=this.lexer.state.inRawBlock;return{type:"text",raw:l[0],text:l[0],escaped:c}}}},Bt=class br{tokens;options;state;tokenizer;inlineQueue;constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||In,this.options.tokenizer=this.options.tokenizer||new Xo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={other:Ge,block:Yo.normal,inline:Ai.normal};this.options.pedantic?(c.block=Yo.pedantic,c.inline=Ai.pedantic):this.options.gfm&&(c.block=Yo.gfm,this.options.breaks?c.inline=Ai.breaks:c.inline=Ai.gfm),this.tokenizer.rules=c}static get rules(){return{block:Yo,inline:Ai}}static lex(l,c){return new br(c).lex(l)}static lexInline(l,c){return new br(c).inlineTokens(l)}lex(l){l=l.replace(Ge.carriageReturn,`
`),this.blockTokens(l,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){let s=this.inlineQueue[c];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,c=[],s=!1){for(this.options.pedantic&&(l=l.replace(Ge.tabCharGlobal,"    ").replace(Ge.spaceLine,""));l;){let d;if(this.options.extensions?.block?.some(f=>(d=f.call({lexer:this},l,c))?(l=l.substring(d.raw.length),c.push(d),!0):!1))continue;if(d=this.tokenizer.space(l)){l=l.substring(d.raw.length);let f=c.at(-1);d.raw.length===1&&f!==void 0?f.raw+=`
`:c.push(d);continue}if(d=this.tokenizer.code(l)){l=l.substring(d.raw.length);let f=c.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+d.raw,f.text+=`
`+d.text,this.inlineQueue.at(-1).src=f.text):c.push(d);continue}if(d=this.tokenizer.fences(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.heading(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.hr(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.blockquote(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.list(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.html(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.def(l)){l=l.substring(d.raw.length);let f=c.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+d.raw,f.text+=`
`+d.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},c.push(d));continue}if(d=this.tokenizer.table(l)){l=l.substring(d.raw.length),c.push(d);continue}if(d=this.tokenizer.lheading(l)){l=l.substring(d.raw.length),c.push(d);continue}let y=l;if(this.options.extensions?.startBlock){let f=1/0,m=l.slice(1),v;this.options.extensions.startBlock.forEach(S=>{v=S.call({lexer:this},m),typeof v=="number"&&v>=0&&(f=Math.min(f,v))}),f<1/0&&f>=0&&(y=l.substring(0,f+1))}if(this.state.top&&(d=this.tokenizer.paragraph(y))){let f=c.at(-1);s&&f?.type==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+d.raw,f.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):c.push(d),s=y.length!==l.length,l=l.substring(d.raw.length);continue}if(d=this.tokenizer.text(l)){l=l.substring(d.raw.length);let f=c.at(-1);f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+d.raw,f.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):c.push(d);continue}if(l){let f="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,c}inline(l,c=[]){return this.inlineQueue.push({src:l,tokens:c}),c}inlineTokens(l,c=[]){let s=l,d=null;if(this.tokens.links){let m=Object.keys(this.tokens.links);if(m.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)m.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,d.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(d=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let y=!1,f="";for(;l;){y||(f=""),y=!1;let m;if(this.options.extensions?.inline?.some(S=>(m=S.call({lexer:this},l,c))?(l=l.substring(m.raw.length),c.push(m),!0):!1))continue;if(m=this.tokenizer.escape(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.tag(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.link(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(m.raw.length);let S=c.at(-1);m.type==="text"&&S?.type==="text"?(S.raw+=m.raw,S.text+=m.text):c.push(m);continue}if(m=this.tokenizer.emStrong(l,s,f)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.codespan(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.br(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.del(l)){l=l.substring(m.raw.length),c.push(m);continue}if(m=this.tokenizer.autolink(l)){l=l.substring(m.raw.length),c.push(m);continue}if(!this.state.inLink&&(m=this.tokenizer.url(l))){l=l.substring(m.raw.length),c.push(m);continue}let v=l;if(this.options.extensions?.startInline){let S=1/0,E=l.slice(1),k;this.options.extensions.startInline.forEach(C=>{k=C.call({lexer:this},E),typeof k=="number"&&k>=0&&(S=Math.min(S,k))}),S<1/0&&S>=0&&(v=l.substring(0,S+1))}if(m=this.tokenizer.inlineText(v)){l=l.substring(m.raw.length),m.raw.slice(-1)!=="_"&&(f=m.raw.slice(-1)),y=!0;let S=c.at(-1);S?.type==="text"?(S.raw+=m.raw,S.text+=m.text):c.push(m);continue}if(l){let S="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(S);break}else throw new Error(S)}}return c}},Zo=class{options;parser;constructor(u){this.options=u||In}space(u){return""}code({text:u,lang:l,escaped:c}){let s=(l||"").match(Ge.notSpaceStart)?.[0],d=u.replace(Ge.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ct(s)+'">'+(c?d:Ct(d,!0))+`</code></pre>
`:"<pre><code>"+(c?d:Ct(d,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:l}){return`<h${l}>${this.parser.parseInline(u)}</h${l}>
`}hr(u){return`<hr>
`}list(u){let l=u.ordered,c=u.start,s="";for(let f=0;f<u.items.length;f++){let m=u.items[f];s+=this.listitem(m)}let d=l?"ol":"ul",y=l&&c!==1?' start="'+c+'"':"";return"<"+d+y+`>
`+s+"</"+d+`>
`}listitem(u){let l="";if(u.task){let c=this.checkbox({checked:!!u.checked});u.loose?u.tokens[0]?.type==="paragraph"?(u.tokens[0].text=c+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=c+" "+Ct(u.tokens[0].tokens[0].text),u.tokens[0].tokens[0].escaped=!0)):u.tokens.unshift({type:"text",raw:c+" ",text:c+" ",escaped:!0}):l+=c+" "}return l+=this.parser.parse(u.tokens,!!u.loose),`<li>${l}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let l="",c="";for(let d=0;d<u.header.length;d++)c+=this.tablecell(u.header[d]);l+=this.tablerow({text:c});let s="";for(let d=0;d<u.rows.length;d++){let y=u.rows[d];c="";for(let f=0;f<y.length;f++)c+=this.tablecell(y[f]);s+=this.tablerow({text:c})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+s+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let l=this.parser.parseInline(u.tokens),c=u.header?"th":"td";return(u.align?`<${c} align="${u.align}">`:`<${c}>`)+l+`</${c}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${Ct(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:l,tokens:c}){let s=this.parser.parseInline(c),d=Mh(u);if(d===null)return s;u=d;let y='<a href="'+u+'"';return l&&(y+=' title="'+Ct(l)+'"'),y+=">"+s+"</a>",y}image({href:u,title:l,text:c,tokens:s}){s&&(c=this.parser.parseInline(s,this.parser.textRenderer));let d=Mh(u);if(d===null)return Ct(c);u=d;let y=`<img src="${u}" alt="${c}"`;return l&&(y+=` title="${Ct(l)}"`),y+=">",y}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:Ct(u.text)}},kr=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}},Gt=class wr{options;renderer;textRenderer;constructor(l){this.options=l||In,this.options.renderer=this.options.renderer||new Zo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kr}static parse(l,c){return new wr(c).parse(l)}static parseInline(l,c){return new wr(c).parseInline(l)}parse(l,c=!0){let s="";for(let d=0;d<l.length;d++){let y=l[d];if(this.options.extensions?.renderers?.[y.type]){let m=y,v=this.options.extensions.renderers[m.type].call({parser:this},m);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(m.type)){s+=v||"";continue}}let f=y;switch(f.type){case"space":{s+=this.renderer.space(f);continue}case"hr":{s+=this.renderer.hr(f);continue}case"heading":{s+=this.renderer.heading(f);continue}case"code":{s+=this.renderer.code(f);continue}case"table":{s+=this.renderer.table(f);continue}case"blockquote":{s+=this.renderer.blockquote(f);continue}case"list":{s+=this.renderer.list(f);continue}case"html":{s+=this.renderer.html(f);continue}case"def":{s+=this.renderer.def(f);continue}case"paragraph":{s+=this.renderer.paragraph(f);continue}case"text":{let m=f,v=this.renderer.text(m);for(;d+1<l.length&&l[d+1].type==="text";)m=l[++d],v+=`
`+this.renderer.text(m);c?s+=this.renderer.paragraph({type:"paragraph",raw:v,text:v,tokens:[{type:"text",raw:v,text:v,escaped:!0}]}):s+=v;continue}default:{let m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return s}parseInline(l,c=this.renderer){let s="";for(let d=0;d<l.length;d++){let y=l[d];if(this.options.extensions?.renderers?.[y.type]){let m=this.options.extensions.renderers[y.type].call({parser:this},y);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(y.type)){s+=m||"";continue}}let f=y;switch(f.type){case"escape":{s+=c.text(f);break}case"html":{s+=c.html(f);break}case"link":{s+=c.link(f);break}case"image":{s+=c.image(f);break}case"strong":{s+=c.strong(f);break}case"em":{s+=c.em(f);break}case"codespan":{s+=c.codespan(f);break}case"br":{s+=c.br(f);break}case"del":{s+=c.del(f);break}case"text":{s+=c.text(f);break}default:{let m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return s}},jo=class{options;block;constructor(u){this.options=u||In}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}provideLexer(){return this.block?Bt.lex:Bt.lexInline}provideParser(){return this.block?Gt.parse:Gt.parseInline}},Rm=class{defaults=Sr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Gt;Renderer=Zo;TextRenderer=kr;Lexer=Bt;Tokenizer=Xo;Hooks=jo;constructor(...u){this.use(...u)}walkTokens(u,l){let c=[];for(let s of u)switch(c=c.concat(l.call(this,s)),s.type){case"table":{let d=s;for(let y of d.header)c=c.concat(this.walkTokens(y.tokens,l));for(let y of d.rows)for(let f of y)c=c.concat(this.walkTokens(f.tokens,l));break}case"list":{let d=s;c=c.concat(this.walkTokens(d.items,l));break}default:{let d=s;this.defaults.extensions?.childTokens?.[d.type]?this.defaults.extensions.childTokens[d.type].forEach(y=>{let f=d[y].flat(1/0);c=c.concat(this.walkTokens(f,l))}):d.tokens&&(c=c.concat(this.walkTokens(d.tokens,l)))}}return c}use(...u){let l=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(c=>{let s={...c};if(s.async=this.defaults.async||s.async||!1,c.extensions&&(c.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){let y=l.renderers[d.name];y?l.renderers[d.name]=function(...f){let m=d.renderer.apply(this,f);return m===!1&&(m=y.apply(this,f)),m}:l.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let y=l[d.level];y?y.unshift(d.tokenizer):l[d.level]=[d.tokenizer],d.start&&(d.level==="block"?l.startBlock?l.startBlock.push(d.start):l.startBlock=[d.start]:d.level==="inline"&&(l.startInline?l.startInline.push(d.start):l.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(l.childTokens[d.name]=d.childTokens)}),s.extensions=l),c.renderer){let d=this.defaults.renderer||new Zo(this.defaults);for(let y in c.renderer){if(!(y in d))throw new Error(`renderer '${y}' does not exist`);if(["options","parser"].includes(y))continue;let f=y,m=c.renderer[f],v=d[f];d[f]=(...S)=>{let E=m.apply(d,S);return E===!1&&(E=v.apply(d,S)),E||""}}s.renderer=d}if(c.tokenizer){let d=this.defaults.tokenizer||new Xo(this.defaults);for(let y in c.tokenizer){if(!(y in d))throw new Error(`tokenizer '${y}' does not exist`);if(["options","rules","lexer"].includes(y))continue;let f=y,m=c.tokenizer[f],v=d[f];d[f]=(...S)=>{let E=m.apply(d,S);return E===!1&&(E=v.apply(d,S)),E}}s.tokenizer=d}if(c.hooks){let d=this.defaults.hooks||new jo;for(let y in c.hooks){if(!(y in d))throw new Error(`hook '${y}' does not exist`);if(["options","block"].includes(y))continue;let f=y,m=c.hooks[f],v=d[f];jo.passThroughHooks.has(y)?d[f]=S=>{if(this.defaults.async)return Promise.resolve(m.call(d,S)).then(k=>v.call(d,k));let E=m.call(d,S);return v.call(d,E)}:d[f]=(...S)=>{let E=m.apply(d,S);return E===!1&&(E=v.apply(d,S)),E}}s.hooks=d}if(c.walkTokens){let d=this.defaults.walkTokens,y=c.walkTokens;s.walkTokens=function(f){let m=[];return m.push(y.call(this,f)),d&&(m=m.concat(d.call(this,f))),m}}this.defaults={...this.defaults,...s}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,l){return Bt.lex(u,l??this.defaults)}parser(u,l){return Gt.parse(u,l??this.defaults)}parseMarkdown(u){return(l,c)=>{let s={...c},d={...this.defaults,...s},y=this.onError(!!d.silent,!!d.async);if(this.defaults.async===!0&&s.async===!1)return y(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return y(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return y(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));d.hooks&&(d.hooks.options=d,d.hooks.block=u);let f=d.hooks?d.hooks.provideLexer():u?Bt.lex:Bt.lexInline,m=d.hooks?d.hooks.provideParser():u?Gt.parse:Gt.parseInline;if(d.async)return Promise.resolve(d.hooks?d.hooks.preprocess(l):l).then(v=>f(v,d)).then(v=>d.hooks?d.hooks.processAllTokens(v):v).then(v=>d.walkTokens?Promise.all(this.walkTokens(v,d.walkTokens)).then(()=>v):v).then(v=>m(v,d)).then(v=>d.hooks?d.hooks.postprocess(v):v).catch(y);try{d.hooks&&(l=d.hooks.preprocess(l));let v=f(l,d);d.hooks&&(v=d.hooks.processAllTokens(v)),d.walkTokens&&this.walkTokens(v,d.walkTokens);let S=m(v,d);return d.hooks&&(S=d.hooks.postprocess(S)),S}catch(v){return y(v)}}}onError(u,l){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let s="<p>An error occurred:</p><pre>"+Ct(c.message+"",!0)+"</pre>";return l?Promise.resolve(s):s}if(l)return Promise.reject(c);throw c}}},On=new Rm;function ae(u,l){return On.parse(u,l)}ae.options=ae.setOptions=function(u){return On.setOptions(u),ae.defaults=On.defaults,Gh(ae.defaults),ae};ae.getDefaults=Sr;ae.defaults=In;ae.use=function(...u){return On.use(...u),ae.defaults=On.defaults,Gh(ae.defaults),ae};ae.walkTokens=function(u,l){return On.walkTokens(u,l)};ae.parseInline=On.parseInline;ae.Parser=Gt;ae.parser=Gt.parse;ae.Renderer=Zo;ae.TextRenderer=kr;ae.Lexer=Bt;ae.lexer=Bt.lex;ae.Tokenizer=Xo;ae.Hooks=jo;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;Gt.parse;Bt.lex;const Jh=new ae.Renderer;Jh.heading=u=>`<strong>${u.text}</strong>`;ae.setOptions({renderer:Jh,gfm:!0,breaks:!0});function Nm(u){try{const c=new DOMParser().parseFromString(u,"text/html"),s=new Set(["strong","em","b","i","p","br","ul","ol","li","table","thead","tbody","tr","th","td","a","code","span"]),d={a:new Set(["href","title","target","rel"]),td:new Set(["colspan","rowspan"]),th:new Set(["colspan","rowspan"]),span:new Set([]),code:new Set([])},y=f=>{if(f.nodeType===Node.COMMENT_NODE){f.parentNode?.removeChild(f);return}if(f.nodeType===Node.ELEMENT_NODE){const m=f,v=m.tagName.toLowerCase();if(!s.has(v)){const S=c.createTextNode(m.textContent||"");m.parentNode?.replaceChild(S,m);return}[...m.attributes].forEach(S=>{const E=S.name.toLowerCase();if(E.startsWith("on")){m.removeAttribute(S.name);return}const k=d[v];if(k&&!k.has(E)){m.removeAttribute(S.name);return}if(v==="a"&&E==="href"){const C=S.value.trim();/^\s*javascript:/i.test(C)?m.removeAttribute(S.name):(m.setAttribute("rel","noopener noreferrer"),m.getAttribute("target")||m.setAttribute("target","_blank"))}})}f.childNodes&&[...f.childNodes].forEach(y)};return[...c.body?.childNodes||[]].forEach(y),c.body?.innerHTML||""}catch{return u}}const xm=({content:u})=>{const l=c=>{try{const s=c.trim(),d=ae.parse(s),y=typeof d=="string"?d:s.replace(/\n/g,"<br>");return{__html:Nm(y)}}catch(s){return console.error("Markdown rendering error:",s),{__html:c.replace(/\n/g,"<br>")}}};return N.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:l(u)})},Mm=({actions:u,onActionClick:l,disabled:c=!1,selectedActionId:s})=>{const[d,y]=ne.useState(s);if(!u||u.length===0)return null;const f=v=>{y(v.id),l(v)},m=s??d;return N.jsx("div",{className:"ai-chat__suggested-actions",children:N.jsx("div",{className:"ai-chat__suggested-actions-container",children:u.map(v=>{const S=m===v.id;return N.jsx("button",{className:`ai-chat__tool-pill ${S?"ai-chat__tool-pill--selected":""}`,onClick:()=>f(v),disabled:c,children:v.text},v.id)})})})},Om=({onFileUpload:u,accept:l=".pdf,.doc,.docx,.txt,.json,.xml,.csv,.xlsx,.xls",maxSize:c=5*1024*1024})=>{const[s,d]=ne.useState(!1),[y,f]=ne.useState(!1),m=ne.useRef(null),v=q=>{q.preventDefault(),d(!0)},S=q=>{q.preventDefault(),d(!1)},E=q=>{q.preventDefault(),d(!1);const ie=Array.from(q.dataTransfer.files);ie.length>0&&C(ie[0])},k=q=>{const ie=q.target.files;ie&&ie.length>0&&C(ie[0])},C=async q=>{if(q.size>c){alert(`File too large. Maximum size is ${c/1024/1024}MB`);return}f(!0);try{const ie=await B(q);u(q,ie)}catch{alert("Error reading file. Please try a different format.")}finally{f(!1)}},B=q=>new Promise((ie,_e)=>{const Ee=new FileReader;Ee.onload=ce=>{const be=ce.target?.result;ie(be)},Ee.onerror=()=>_e(new Error("Failed to read file")),q.type==="application/json"||q.name.endsWith(".json")||q.type.includes("text")||q.name.endsWith(".txt")||q.name.endsWith(".csv"),Ee.readAsText(q)}),_=()=>{m.current?.click()};return N.jsx("div",{className:"file-upload",children:N.jsxs("div",{className:`file-upload__dropzone ${s?"file-upload__dropzone--dragging":""} ${y?"file-upload__dropzone--processing":""}`,onDragOver:v,onDragLeave:S,onDrop:E,onClick:_,children:[N.jsx("input",{ref:m,type:"file",accept:l,onChange:k,style:{display:"none"}}),y?N.jsxs("div",{className:"file-upload__processing",children:[N.jsx("div",{className:"file-upload__spinner"}),N.jsx("p",{children:"Processing file..."})]}):N.jsxs("div",{className:"file-upload__content",children:[N.jsx("div",{className:"file-upload__icon",children:N.jsx("i",{className:"cil-cloud-upload"})}),N.jsx("p",{children:"Drag & drop files here or click to browse"}),N.jsx("div",{className:"file-upload__formats",children:N.jsx("small",{children:"Supported formats: CSV, JSON, XLS"})})]})]})})},Im=({messages:u,isTyping:l,conversationId:c,onSuggestedActionClick:s,onFileUpload:d})=>{const y=ne.useRef(null),f=()=>{y.current?.scrollIntoView({behavior:"smooth"})};ne.useEffect(()=>{f()},[u,l]);const m=v=>{if(v.startsWith("{")||v.startsWith("["))try{const S=JSON.parse(v);return N.jsx("pre",{style:{background:"var(--ai-chat-hover)",padding:"8px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:JSON.stringify(S,null,2)})}catch{}return v.split(`
`).map((S,E)=>N.jsxs(Ep.Fragment,{children:[S,E<v.split(`
`).length-1&&N.jsx("br",{})]},E))};return N.jsxs("main",{className:"ai-chat__messages",children:[u.length>0&&c&&N.jsx("div",{className:"ai-chat__session-header",children:N.jsx("span",{className:"ai-chat__session-id",children:c})}),u.map((v,S)=>N.jsxs("div",{className:`ai-chat__message ${v.sender==="user"?"ai-chat__message--user":""}`,children:[N.jsx("div",{className:`ai-chat__avatar ai-chat__avatar--${v.sender}`,children:N.jsx("i",{className:`cil-${v.sender==="user"?"user":"star"}`})}),N.jsxs("div",{className:"ai-chat__content",children:[N.jsxs("div",{className:`ai-chat__bubble ai-chat__bubble--${v.sender}`,children:[v.sender==="assistant"?N.jsx(xm,{content:v.text}):m(v.text),v.fileUpload&&d&&S===u.length-1&&N.jsx(Om,{onFileUpload:d})]}),v.agentUsed&&N.jsxs("div",{className:"ai-chat__agent-indicator",children:["via ",v.agentUsed," agent"]}),v.suggestedActions&&v.suggestedActions.length>0&&s&&N.jsx(Mm,{actions:v.suggestedActions,onActionClick:s,disabled:l||S<u.length-1})]})]},v.id)),l&&N.jsxs("div",{className:"ai-chat__message",children:[N.jsx("div",{className:"ai-chat__avatar ai-chat__avatar--assistant",children:N.jsx("i",{className:"cil-star"})}),N.jsx("div",{className:"ai-chat__content",children:N.jsx("div",{className:"ai-chat__bubble ai-chat__bubble--assistant",children:N.jsxs("div",{className:"ai-chat__typing",children:[N.jsx("span",{className:"ai-chat__typing-dot"}),N.jsx("span",{className:"ai-chat__typing-dot"}),N.jsx("span",{className:"ai-chat__typing-dot"})]})})})]}),N.jsx("div",{ref:y})]})},Um=({onSendMessage:u,isTyping:l})=>{const[c,s]=ne.useState(""),[d,y]=ne.useState(!1),f=ne.useRef(null),m=C=>{s(C.target.value),v(C.target)},v=C=>{const B=C.scrollTop;C.style.height="auto";const _=160,q=40,ie=Math.min(C.scrollHeight,_);C.style.height=`${ie}px`,C.style.overflowY=C.scrollHeight>_?"auto":"hidden",y(ie>q+5),C.scrollTop=B},S=()=>{const C=c.trim();!C||l||(u(C),s(""),y(!1),f.current&&(f.current.style.height="auto"))},E=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),S())},k=!c.trim()||l;return N.jsx("footer",{className:"ai-chat__footer",children:N.jsxs("div",{className:`ai-chat__input-group ${d?"ai-chat__input-group--multiline":""}`,children:[N.jsx("div",{className:"ai-chat__input-wrapper",children:N.jsx("textarea",{ref:f,className:"ai-chat__input",placeholder:"Type your message...",rows:1,value:c,onChange:m,onKeyDown:E})}),N.jsx("button",{className:"ai-chat__send",type:"button",disabled:k,onClick:S,children:N.jsx("i",{className:"cil-send"})})]})})};function $h({items:u,searchPlaceholder:l="Search...",emptyMessage:c="No items found",onItemClick:s,itemTemplate:d,searchFilter:y,className:f=""}){const[m,v]=ne.useState(""),S=ne.useMemo(()=>{if(!m.trim())return u;if(y)return u.filter(C=>y(C,m));const k=m.toLowerCase();return u.filter(C=>String(C.id).toLowerCase().includes(k))},[u,m,y]),E=ne.useMemo(()=>S.length?S.some(C=>C.category)?S.reduce((C,B)=>{const _=B.category||"Other";return C[_]||(C[_]=[]),C[_].push(B),C},{}):{All:S}:{},[S]);return N.jsx("div",{className:`ai-chat__history ${f}`,children:N.jsxs("div",{className:"ai-chat__history-content",children:[N.jsx("div",{className:"ai-chat__history-search-sticky",children:N.jsxs("div",{className:"ai-chat__history-search",children:[N.jsx("i",{className:"cil-search ai-chat__history-search-icon"}),N.jsx("input",{type:"text",className:"ai-chat__history-search-input",placeholder:l,value:m,onChange:k=>v(k.target.value)})]})}),N.jsx("div",{className:"ai-chat__history-list",children:Object.keys(E).length===0?N.jsx("div",{className:"ai-chat__history-empty",children:c}):Object.entries(E).map(([k,C])=>N.jsxs("div",{className:"ai-chat__category-section",children:[k!=="All"&&N.jsxs("div",{className:"ai-chat__category-header",children:[k," (",C.length,")"]}),C.map(B=>d(B,()=>s?.(B)))]},k))})]})})}const _m=({conversations:u,currentConversationId:l,onConversationSelect:c})=>{const s=d=>{const y=new Date(d),m=new Date().getTime()-y.getTime(),v=Math.floor(m/(1e3*60*60*24));return v===0?"Today":v===1?"Yesterday":v<7?`${v}d ago`:y.toLocaleDateString()};return N.jsx($h,{items:u,title:"LeadExec Assist",icon:"cil-star",searchPlaceholder:"Search chat sessions...",emptyMessage:u.length===0?"No conversations yet":"No matching conversations",onItemClick:d=>c(d.id),searchFilter:(d,y)=>d.title.toLowerCase().includes(y.toLowerCase()),itemTemplate:(d,y)=>N.jsx("button",{className:`ai-chat__history-item ${d.id===l?"ai-chat__history-item--active":""}`,onClick:y,"aria-label":`${d.title} - ${s(d.lastUpdated)}`,children:N.jsxs("div",{className:"ai-chat__history-item-content",children:[N.jsx("span",{className:"ai-chat__history-item-title",children:d.title}),N.jsx("span",{className:"ai-chat__history-item-date",children:s(d.lastUpdated)})]})},d.id)})},Uh=`Advice and answers from the LeadExec Team 

Search for articles... 

LeadExec Introduction 

General Information about LeadExec 

By Chris 2 articles 

Leads 

Details on the Lead List Screens, Distrbution, Quality Control, Retruns and Delivery Queue 

By Gabriel and 2 others 18 articles 

Inbound 

Information on Lead Sources, Campaigns, IVR and Chat systems 

By Gabriel and 2 others 23 articles 

Outbound 

Information on Client configurations, Delivery Methods, Delivery Accounts, and the Order system 

By Chris and 2 others 89 articles 

System Settings 

Information about the system settings in LeadExec 

By Chris and 2 others 22 articles 

API Documentation & Integrations 

Information about Integrations and the LeadExec APIs 

By Gabriel and 1 other 2 articles 

Reports 

Find articles related to LeadExec reports 

By Gabriel 2 articles 

Software Updates and Fixes 

ClickPoint releases regularly scheduled software updates and bug fixes, you can find them here 

By Chris 46 articles 

Client Portal 

Detailed information on the Client Portal for LeadExec account managers 

By Gabriel 1 article 

Using the Client Portal 

Information on using the client portal 

By Chris 1 article 

L 

L 

L

©Copyright ClickPoint Software 

Search for articles... 

All Collections LeadExec Introduction 

LeadExec Introduction 

General Information about LeadExec 

By Chris 2 articles 

LeadExec Concepts 

A fundamental overview of the main components of the system 

LeadExec Account Introduction 

This article provides steps for basic account configuration and testing

Search for articles... 

All Collections Leads 

Leads 

Details on the Lead List Screens, Distrbution, Quality Control, Retruns and Delivery Queue 

By Gabriel and 2 others 18 articles 

Lead List - Viewing Lead Information 

Viewing lead information is helpful in understanding your lead properties, lead scoring, change history and more 

Lead List - Lead Details 

When you open a lead, you can view the details about the lead, the process flow, TCPA validation, and more 

Lead List - Manually Adding a Lead 

The Add Lead button allows you to manually add a lead within the Lead List screen 

Lead List - How to Move & Edit Columns 

Customize your lead list to view your lead data, just the way you like 

Lead List - How to Use Advanced Search 

Advanced search within your lead list will help you find the exact lead you are looking for 

Lead List - How to Manually Send Leads 

Manually send leads to clients from your lead list. 

Lead List - Create Pivot Report from List View 

Create custom reports or choose from pre-loaded reports 

Lead List - How to Export Leads from List 

Exporting your leads from your lead list is simple, just follow the tutorial 

Quality Control - Understanding This Screen 

Use Quality Control to stage your leads, verify, and check prior to delivering to any clients, buyers, or sales teams 

Quality Control - How to Manually Send Leads 

Use the quality control to stage leads, verify them prior to delivery. 

Distribution - How to Use This Screen 

Understand how your leads are sold or distributed to your various buyers or sales teams. 

Distribution - Manually Send Leads 

When you need to send a lead that missed being delivered by automation you will want to manually send this lead 

Distribution - Viewing Your Client Information 

Quickly and easily view your client details from this screen 

Returns - Understanding this Screen 

Use the Returns screen to approve and deny returns as well as managing all of your lead returns. 

Returns - Setting up Lead Return Reasons 

For each Lead Type, you can setup acceptable lead return reasons. 

Returns - Managing Lead Returns 

Managing lead returns is a big part of successfully managing your lead based business, we will cover the basics. 

Delivery Queue - Understanding This Screen 

Use the Delivery Queue to monitor your leads being processed in real-time 

Lead List - Troubleshooting Rejected Leads 

L

Search for articles... 

All Collections Inbound 

Inbound 

Information on Lead Sources, Campaigns, IVR and Chat systems 

By Gabriel and 2 others 23 articles 

Understanding Lead Source List Screen 

Use the Lead Source List screen to manage your sources 

Understanding the Lead Source Detail Screen 

Detailed information on how to use the Lead Source Details screen 

Adding a New Lead Source 

Step by step instructions for adding a new lead source to LeadExec 

Introduction to Campaigns 

This article outlines the different types of campaigns and how they are used 

Understanding the Campaign List Screen 

The Campaigns screen helps you organize the Campaigns associated with your Lead Sources 

Creating a Web Lead Campaign 

How create a campaign using the Web Leads Channel 

Creating a Ping Post Campaign 

How create a campaign using the Ping Post Channel 

Creating a Phone Lead Campaign 

How create a campaign using the Phone Leads Channel 

Creating a Chat Lead Campaign 

How create a campaign using the Chat Leads Channel 

Web Lead Campaigns: Advanced Settings 

How to edit and update existing Web Lead campaigns 

Ping Post Lead Campaign Advanced Settings 

How to edit and update existing Ping Post Lead campaigns 

Inbound - Using Quality Control with Campaigns 

Quality control can help prevent bad leads from being passed to your buyers; understanding how it works is critical 

Campaigns - TCPA Certification Step 1 

Ensure your leads meet TCPA requirements with real-time on form checks, and certification 

Campaigns - TCPA Certification Step 2 

Place the code on your landing page or website, in order to collect TCPA consent. 

Campaigns - TCPA Certification Step 3 

Campaigns - TCPA Certification Step 4 

Ensure total TCPA compliance by storing and printing TCPA certificates 

Lead Sources - Enable Lead Grading 

Use phone and email validation to create a lead score and improve lead quality. 

Lead Source List - Access Control IP Restriction 

Limit where leads can post from by using IP address white listed article 

Groups - Exclusive 

Deliver leads to a certain set of clients in a group, based on criteria 

Groups - Campaigns 

Campaign Groups set on a Lead Source allow you to tag brands or groups that you receive leads and distribute leads too 

Call Flows - IVR System 

Configuring the LeadExec Call Flow System 

How to generate posting instructions 

Details on generating posting instructions for campaigns 

Lead Source List - Lead Source Portal 

L

All Collections System Settings 

System Settings 

Information about the system settings in LeadExec 

By Chris and 2 others 22 articles 

Verifying Emails and Domains for CAN-SPAM 

Steps to verify email addresses and domains to be CAN-SPAM compliant 

Account Settings 

Account Settings 

Account Settings - General 

Understanding General settings options 

Account Settings - Branding 

Make your LeadExec and Client Portal your own with a unique logo and branded portal. 

Account Settings - Users 

You can add users to LeadExec that have Roles and Permission levels that are specific to their job function. 

Account Settings - User Permissions 

Create Roles and Permissions assigned to those roles that create access levels within LeadExec. 

Account Settings - Security 

You have complete control over the security settings for logging into your LeadExec account. 

Account Settings - Notifications 

Utilize system notifications to warn your team about urgent items within LeadExec 

Account Settings - Billing 

Collect payment from lead buyers and clients with Authorize.net or Stripe integration 

Account Settings - Distribution Lists 

Use distribution lists to deliver to large lists of zip codes, postal codes, and more 

Account Settings - LeadExec Pricing and Plans 

Client Settings 

Client Settings 

Client Settings - Options 

Update your client settings to provide detail on client lead delivery, return percentages, and other options pertaining to 

clients. 

Client Settings - Distribution 

Distribution Types (Price, Weight, Round Robin) Other 

Client Settings - Distribution Scripts 

Advanced lead distribution customizations 

Lead Source Settings 

Lead Source Settings 

Lead Source Settings - Do Not Contact List 

Use these settings to add a number to the Do Not Contact List 

Settings - TCPA Options 

Enable TCPA from within LeadExec 

Lead Source Settings - Lead Grading 

Master account settings for Lead Grading. Use phone and email validation to create a lead score and improve lead quality. 

Lead Type Settings 

Lead Type Settings 

Lead Type Settings - Creating Lead Types 

Learn how to edit and change lead fields within a lead type 

Lead Type Settings - Categories 

Lead Type Settings - Force ID's 

Use Force ID's to segment your leads to be delivered in real-time directly to an exclusive client. 

Lead Type Settings - Display Groups 

API Access Settings 

API Access Settings 

API Access Settings - Credentials 

API Access Settings - Access Control (IP's) 

Create whitelisted or blacklisted IP's 

L

All Collections Outbound 

Outbound 

Information on Client configurations, Delivery Methods, Delivery Accounts, and the Order system 

By Chris and 2 others 89 articles 

Client List - Understanding the Client List Screen 

Use the Client List screen to manage your clients 

Client List - Adding a New Client Part I 

Overview of adding new clients to the system and then setting up basic functions for client delivery. 

Client List - Adding a New Client Part II 

Overview of Delivery Methods 

Client List - Adding a New Client Part III 

Overview of Delivery Accounts 

Client List - Adding and Editing (Orders) Part IV 

Create manual or automated orders 

Client List - Adding (Invoices) Part V 

Use invoices to collect payment from your buyers, with easy payment integrations with Stripe, Square, or Authorize.net 

Client List - Adding a New Client Part VI 

Use the new client wizard to setup each new client with their delivery settings. 

Clients - Portal Users 

Create Portal users for your internal team. 

Clients - Client Groups 

Utilize client groups for more advanced delivery where you are delivering to a company with multiple locations 

How to Create Delivery Groups 

Delivery Groups allow you to set specific automation rules for a group of clients 

LeadExec IP Addresses used for Delivery 

Clients may request an IP range to ensure secure delivery 

Order List Screen 

Use the Order List Screen to manage your orders 

Delivery Methods 

Detailed instructions for configuring all delivery method types in LeadExec 

Introduction to Delivery Methods 

Overview of Delivery Methods 

1 article 

Webhook Delivery Method 

Instructions on how to configure Webhook Delivery Methods 

10 articles 

Ping-Post Delivery Method 

Instructions on how to configure Ping-Post Delivery Methods 

10 articles 

Email Delivery Method 

Instructions on how to configure Email Delivery Methods 

8 articles 

SMS Notification 

Instructions on how to configure SMS Notification Delivery Methods 

8 articles 

FTP Delivery Method 

Instructions on how to configure FTP Delivery Methods 

8 articles 

CSV Attachment 

Instructions on how to configure CSV Attachment Delivery Methods 

7 articles 

Batch Delivery Method 

Instructions on how to configure Batch Delivery Methods 

10 articles 

ClickPoint Integration 

Instructions on how to configure ClickPoint Integration Delivery Methods 

11 articles 

Lead Portal 

Instructions on how to configure Lead Portal Delivery Methods 

4 articles

©Copyright ClickPoint Software 

Search for articles... 

All Collections API Documentation & Integrations 

API Documentation & Integrations 

Information about Integrations and the LeadExec APIs 

By Gabriel and 1 other 2 articles 

Integrations - Unbounce Form Intake 

How to use third party solutions for lead intake 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

Set Up the LeadExec Zapier App for Inbound Leads via Webhook

©Copyright ClickPoint Software 

Search for articles... 

All Collections Reports 

Reports 

Find articles related to LeadExec reports 

By Gabriel 2 articles 

Reports - Dashboard 

Your dashboard is a quick and easy way to know if your making money with your leads 

Reports - Pivot Reports 

Create your own reports on any piece of lead data or use a pre-made template.

All Collections Software Updates and Fixes 

Software Updates and Fixes 

ClickPoint releases regularly scheduled software updates and bug fixes, you can find them here 

By Chris 46 articles 

LeadExec Patch Notes August 22, 2024 

System updates for DNC list settings, UI improvements in the Order List and Lead List screens, and bug fixes 

LeadExec Patch Notes August 15th, 2024 

UI bug fixes relating to creating orders and order forms 

LeadExec Patch Notes August 8th, 2024 

Patch notes for API improvements, UI updates, and bug fixes. 

LeadExec Patch Notes July 24th, 2024 

Patch notes for order system and UI updates; bug fixes. 

LeadExec Patch Notes June 4th, 2024 

Patch notes for updated batch delivery file manager, page loading optimizations, UI bug fix, etc. 

LeadExec Patch Notes May 23rd, 2024 

Patch notes for updated create order popup window, AI model for validation and profanity check, etc. 

LeadExec Patch Notes May 9th, 2024 

LeadExec Patch Notes April 18th, 2024 

LeadExec Patch Notes March 21st, 2024 

LeadExec Patch Notes March 7th, 2024 

LeadExec Patch Notes February 22nd, 2024 

LeadExec Patch Notes February 15th, 2024 

LeadExec Patch Notes January 25th, 2024 

LeadExec Patch Notes January 11th, 2024 

LeadExec Patch Notes January 4th, 2024 

LeadExec Patch Notes November 29th, 2023 

LeadExec Patch Notes September 28th, 2023 

LeadExec Patch Notes July 5th, 2023 

LeadExec Patch Notes June 15th, 2023 

LeadExec Patch Notes May 25th, 2023 

LeadExec Patch Notes May 11th, 2023 

LeadExec Patch Notes April 20th, 2023 

LeadExec Patch Notes April 13th, 2023 

LeadExec Patch Notes March 30th, 2023 

LeadExec Patch Notes February 23rd, 2023 

LeadExec Patch Notes February 16th, 2023 

LeadExec Patch Notes February 9th, 2023 

LeadExec Patch Notes January 19th, 2023 

LeadExec Patch Notes January 12th, 2023 

LeadExec Patch Notes January 5th, 2023 

LeadExec Patch Notes December 8th, 2022 

LeadExec Patch Notes November 10th, 2022 

LeadExec Patch Notes November 3rd, 2022 

LeadExec Patch Notes October 27th, 2022 

LeadExec Patch Notes October 21st, 2022 

LeadExec Patch Notes October 6th, 2022 

LeadExec Patch Notes September 29th, 2022 

LeadExec Patch Notes September 15th, 2022 

LeadExec Patch Notes September 8th, 2022 

LeadExec Patch Notes August 17th, 2022 

LeadExec Patch Notes August 11th, 2022 

LeadExec Patch Notes June 30th, 2022 

LeadExec Patch Notes for June 30th, 2022 

LeadExec Patch Notes April 21st, 2022 

LeadExec Patch Notes March 10th, 2022 

LeadExec Patch Notes March 3rd, 2022 

LeadExec Patch Notes August 29th, 2024 

System updates for Call Flow settings and Lead Returns screen.

©Copyright ClickPoint Software 

English 

Search for articles... 

All Collections Client Portal 

Client Portal 

Detailed information on the Client Portal for LeadExec account managers 

By Gabriel 1 article 

Understanding the Client Portal 

Detailed information of the Client Portal's functionality

©Copyright ClickPoint Software 

English 

Search for articles... 

All Collections Using the Client Portal 

Using the Client Portal 

Information on using the client portal 

By Chris 1 article 

Using the Lead Portal 

Detailed information of the lead portal's functionality

All Collections LeadExec Introduction LeadExec Concepts 

LeadExec Concepts 

A fundamental overview of the main components of the system 

Written by Chris Arenas Updated over a week ago 

Introduction: 

LeadExec is a browser-based web application designed for automated lead distribution. The application provides functionality to accept inbound leads from internal sources or third-party partners and deliver leads outbound to multiple endpoints using industry-standard practices. Two of the most essential parts of LeadExec are found in the Account Settings. They are the Lead Type and Automation settings. Lead Types: The first thing that needs to be configured in a new LeadExec account is your Lead Type, where you will set all your lead fields. It is possible to have multiple lead types in your account if you work within a number of different verticals. Many parts of the system are based on and work from the Lead Type, which is why it is a crucial first step in configuring your account. 

Automation Preferences: Another major component of the system is Automation preferences. These settings are found under the Client Settings section of the Account Settings page. These options set the delivery automation that will be used by default throughout the system. These settings can be overridden in lead source campaign settings if needed. 

LeadExec UI Overview: 

The sections below provide details on the different areas of the system, which are found in the left-hand menu in the main UI of LeadExec. 

Leads: 

The Leads section provides access to all lead data and distribution reports. The two primary screens used in this section are All Leads and Distribution. Inbound: 

The Inbound section of LeadExec relates to how leads come into the system and provides access to configure and manage your Lead Sources. The main components in this area are Lead Sources and Campaigns. Lead Sources: Lead sources can be defined as the location from which a lead was submitted. This can include many different examples, but the most common is a website or 3rd party affiliate partner. Campaigns: Campaigns exist to allow a lead source to send in multiple different types of leads. This can range from different types of leads and lead categories to splitting leads out by criteria for different cost points. Think of a campaign as a receiving avenue within a lead source. An example would be if your lead source is your website, you could have a campaign for each lead capture form located on that website. This way, an account can see how many leads they received from their website as a whole, but also can drill down to see which lead forms are performing better. You can also think of campaigns as a way to limit what a 3rd party affiliate partner can send in. For example, if you had an affiliate that you were paying $35 for California leads, but only $15 for Nevada leads. You can use campaigns (with criteria) to limit which accounts and which price points these leads are assigned to. Outbound: 

The Outbound section of LeadExec relates to leads posting out of the system and provides access to your client configurations and associated screens. Two of the main components of Clients are Delivery Methods and Delivery Accounts. Clients: Clients can be defined as the location where a lead will be delivered. There are a lot of different terms when describing a client. Some examples are branch, dealer, and lead buyer. Each of these fall under the generic term "Client". In corporate applications, most companies do not sell leads to their clients but instead, use LeadExec as a tool to distribute leads down to their branches and dealers to be worked by agents. However, in non-corporate applications, companies may sell leads and create orders to determine how many leads can be delivered to a lead buyer. Throughout LeadExec, we use the term Client to roughly describe where a lead will ultimately end up. Clients receive leads through delivery methods and delivery accounts. Delivery Methods: Delivery method settings are found in the Client Details screen and determine how a lead will be delivered to a client. There are multiple ways that a lead can be delivered, such as HTTP Webhook, Ping/Post, Email, and SMS. Delivery Accounts: Where delivery methods determine how a lead will be delivered, a delivery account determines what type of lead will be delivered through criteria. Delivery accounts are comparable to lead source campaigns as they provide options to qualify the lead for the client as well as set distribution and lead quantity rules. Other Noteworthy System Concepts: 

Understanding Channels: Think of Channels of what type of lead is being sent into the system, or how the lead is posted into your account. There are four Channel types. The type of Channel is selected when setting up campaigns and can determine how leads are processed through the system for delivery. 

Web Leads: Web leads are the most common type of lead processed in LeadExec. These are leads coming from a website/landing page or third-party lead source. 

Phone Leads: Phone leads are leads entering the system through the LeadExec IVR system. Chat Leads: Chat leads are created on a landing page or website using the LeadExec AI chatbot. Ping/Post Leads: Ping/Post leads are Web Leads that are first pinged into the system from your Lead Source to ensure there is coverage for the lead and that revenue requirements are met. 

Related Articles 

Client List - Adding a New Client Part II 

LeadExec Account Introduction 

LeadExec Patch Notes December 8th, 2022 

Ping Post Lead Campaign Advanced Settings 

Creating a Ping Post Campaign 

Did this answer your question?

All Collections Leads Lead List - Viewing Lead Information 

Lead List - Viewing Lead Information 

Viewing lead information is helpful in understanding your lead properties, lead scoring, change history and more 

Written by Gabriel Buck Updated over a week ago 

You can easily open a lead from the Leads List view and view more information about a particular lead. This function is helpful if you need to update lead information. You have several options to provide more detail or View Details on a lead when you open a lead. You can view Deliveries - This option highlights where a lead was delivered, and if it was Accepted or Rejected by your buyer. You can also view the delivery diagram from this modal, the Post Request, Response from your client, any Notes, Resend the Lead, or Delete the lead. Properties - This will allow you to see the date this lead was verified, its status, return reason, cost, send count, revenue, and if there is an auto removal or removal date. Files - This option allows you to view or add files to the lead. Appointments - This option allows you to view any current appointments associated with this lead. TCPA Certification - This option will show you the TCPA validation results if enabled. You can view if the lead provided consent, has a mobile phone and if a particular lead views the consent text. 

Other available options from Lead Details on the main toolbar View Change History - This option will allow you to see any manually made changes on this lead. 

View Insert Request - This option allows you to see what was posted into your LeadExec account by your lead source. 

View Process Flow - Viewing the Process Flow allows you to get a visual breakdown of the steps this lead went through to be validated or rejected by LeadExec. 

View Deliveries - This option lets you see where this lead was delivered, the price you paid, and the price you sold the lead. 

Related Articles 

Campaigns - TCPA Certification Step 1 

Lead List - Lead Details 

Understanding the Campaign List Screen 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

All Collections Leads Lead List - Lead Details 

Lead List - Lead Details 

When you open a lead, you can view the details about the lead, the process flow, TCPA validation, and more 

Written by Gabriel Buck Updated over a week ago 

The Lead Details screen is a helpful screen that helps you understand more about a specific lead. From this screen, you have options to identify important information about why this lead was delivered to particular clients, buyers, or teams. You can also view information about compliance and lead scoring like TCPA certification. 

From the main toolbar, you can view multiple options that will provide you with critical information about the history of this lead, the path it took, and how you received it from a Lead Source. 

Change History this is helpful in understanding if an employee made changes or altered this lead in any way. 

You can also choose the View Insert Request to see what lead information you received to your LeadExec account from a website, landing page, or third-party provider. 

The Lead Flow Diagram selection will show you more about the path this lead followed when accepted or rejected and what happened next based on your lead delivery settings. 

Related Articles 

Lead Sources - Enable Lead Grading 

Lead List - How to Move & Edit Columns 

Lead List - Viewing Lead Information 

Campaigns - TCPA Certification Step 1 

Understanding the Lead Source Detail Screen 

Did this answer your question?

Search for articles... 

All Collections Leads Lead List - Manually Adding a Lead 

Lead List - Manually Adding a Lead 

The Add Lead button allows you to manually add a lead within the Lead List screen 

Written by Chris Arenas Updated over a week ago 

Using the "Add" button in the main menu of the Lead List screen allows you to create a lead manually. This is also a great way to submit a test lead without leaving the program. By clicking the "Add" button, the system will generate a popup window allowing you to enter the data for an individual lead. Required fields are denoted and must be completed. In the lower left-hand corner is the "Schedule for Delivery" button. The system will process the lead for automated delivery by toggling this button. The lead data will be saved and processed when hitting the Save button. 

Related Articles 

Lead List - How to Manually Send Leads 

Distribution - Manually Send Leads 

Client List - Adding and Editing (Orders) Part IV 

ClickPoint Integration Field Mappings 

CSV Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Leads Lead List - How to Use Advanced Search 

Lead List - How to Use Advanced Search 

Advanced search within your lead list will help you find the exact lead you are looking for 

Written by Gabriel Buck Updated over a week ago 

Lead Filters help you find a particular lead, and you can Create Filters, Open Saved Filters, or Save a Current Filter. These options give you the flexibility to create your own set of Filters you use on a regular basis. A good example might be Valid Leads in California or Refinance Leads in Arizona. If you have a lead collection you like to view for a specific client or buyer, this is an easy way to drill down on the leads that matter most to you. You can use Filters to search for specific lead field values by using the Filters option of And Or Not And Not Or 

_To do this go to any of your screens: Lead List, Quality Control, Distribution, or Returns. Select the Filters button on your main navigation toolbar._ 

Related Articles 

Lead List - How to Export Leads from List 

Distribution - How to Use This Screen 

Distribution - Manually Send Leads 

Lead List - Viewing Lead Information 

Lead List - Lead Details 

Did this answer your question?

Search for articles... 

All Collections Leads Lead List - How to Move & Edit Columns 

Lead List - How to Move & Edit Columns 

Customize your lead list to view your lead data, just the way you like 

Written by Gabriel Buck Updated over a week ago 

With LeadExec, you can bring any fields removed back into the header bar by clicking the Column Chooser option added to the List screen. You have complete control over what columns display in the List view. To move or edit your columns: 

1. Click Choose Columns 2. The column editor will bring up a window on the bottom right of your search leads 

screen that contains all fields previously displayed on the search leads report. 3. Click the field you wish to bring back into the report and place it where you want it 

displayed. 

The column editor will allow you to move and hide fields you don't use without having to click Restore Defaults if you accidentally remove a column field. Next Up How to Manually Send Leads from the Lead List Viewing Lead Information in your Lead List How to use Advanced Search How to Export Leads How to Create a Pivot Report 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead List - How to Export Leads from List 

Lead List - Create Pivot Report from List View 

Lead List - Viewing Lead Information 

Reports - Pivot Reports 

Did this answer your question?

Search for articles... 

All Collections Leads Quality Control - Understanding This Screen 

Quality Control - Understanding This Screen 

Use Quality Control to stage your leads, verify, and check prior to delivering to any clients, buyers, or sales teams 

Written by Gabriel Buck Updated over a week ago 

From the Quality Control screen, you can Validate or Invalidate any of your gated leads. To have leads move from a Lead Source to Quality Control, you will need to enable Quality Control from the Lead Source setup screen. You can read more about enabling this feature by reading the Lead Sources - Implementing Quality Control article. As with any of the main screens that contain leads, you have the Choose Column feature, that allows you to add Columns, then you can drag them into the desired layout. 

Related Articles 

Quality Control - How to Manually Send Leads 

Inbound - Using Quality Control with Campaigns 

Understanding Lead Source List Screen 

Understanding the Lead Source Detail Screen 

Understanding the Campaign List Screen 

Did this answer your question?

Search for articles... 

All Collections Leads Quality Control - How to Manually Send Leads 

Quality Control - How to Manually Send Leads 

Use the quality control to stage leads, verify them prior to delivery. 

Written by Gabriel Buck Updated over a week ago 

There are two ways leads can be delivered from Quality Control: by using the Validate function or by using Find Client. 

Validating leads in Quality Control: 

You can find the "Validate" option in the top menu or through the options menu by right-clicking on a lead. Using the validate function on this screen will process the selected lead and distribute it through automation. This feature is used for leads that have been reviewed and considered viable for your clients. Once a lead is validated, it will be processed for automated delivery and moved out of Quality Control. 

Using Find Client in Quality Control: 

To send a lead to a client from the quality control bin using Find Client, you will need to follow these steps: 1. Go to your Leads section on the left-hand navigation bar 2. Click on Quality Control 

3. Select the lead type that contains the leads you want to send out. 4. Select the lead that you wish to send. 5. Once you have verified the information, select a lead and right-click. This will generate a popup menu with options to perform on the lead. Click Find Client. 

4. The list of matching clients will appear. Select the client to whom you wish to send the lead and click Send. 

Related Articles 

Lead List - How to Manually Send Leads 

Distribution - Manually Send Leads 

Inbound - Using Quality Control with Campaigns 

Quality Control - Understanding This Screen 

Creating a Web Lead Campaign 

Did this answer your question?

LeadExec Account Introduction 

This article provides steps for basic account configuration and testing 

Written by Chris Arenas Updated over a week ago 

The ClickPoint team welcomes you to LeadExec! We are very excited to present our new browser-based version of LeadExec. The software retains its already powerful features for automated lead distribution while adding an updated UI, new advanced features, and mobile capabilities. In this article, we outline a few steps to take that will allow you to quickly see how the system operates and interacts with your partners. Reviewing your Lead Type: LeadExec is pre-populated with the lead type you selected for your associated vertical, which we'll use for our testing. You can review the lead type by going to the Lead Type section in the Account Settings by clicking the gear icon in the upper right-hand corner of your screen. Here, you can utilize the Lead Type Editor, where you can review and make adjustments to an existing lead type or create a new one. For now, we'll use the default lead type for this exercise. 

Setting up a test Lead Source: Now that we've reviewed the lead type, let's create a Lead Source and Campaign. Step 1: Select the "Create" button to add the name of the lead source, the email associated with the lead source, and username and password for the Vendor Portal. This will bring you to the Lead Source details page. Step 2: Now you've added your Lead Source, you'll create a Campaign by clicking the "Create" button in the Campaigns section of the screen. In the popup window, you'll name your Campaign and select your Lead Type. We'll leave the default settings in place for "Use Quality Control" and "Status." Lastly, set the price you will pay the source per lead. Step 3: Navigate to the Lead Forms and click "Add." and name the form, i.e., Test Form, and click "Save." You now have a lead form created which you'll use in a later step. Click the "Navigate To" button to populate the lead form in a new tab. Leave this open for now, and go back to your LeadExec tab. 

Setting up a test Client: Next, we'll set up a Client. Click List under Clients in the left-hand menu, then click "Create." In the modal, you will add the Company Name, First Name, Last Name, Email, and set Status to "Active." You'll also add login information used for the Client Portal here. The portal allows your clients to review all leads you've delivered to them and where they can manage their returns. We'll be using this as part of our testing, so take note of the login information for later. 

_In the next two steps, we'll create a Delivery Method and a Delivery Account. A Delivery Account controls what type of lead is delivered, while a Delivery Method controls how a lead is delivered. Creating a Delivery Method: Under Delivery Methods, select "Create" and name your Delivery Method. In this case, we'll name it Portal Test. This is the easiest delivery method configuration. Instructions on configuring other delivery method types, such as JSON, HTTP POST, and EMAIL, are noted later in the article. Creating a Delivery Account: First, name the Delivery Account, set the Status and Lead Price, and turn on Automated Delivery. For our testing, let's also set some criteria to only allow Arizona leads to be sent to this client. Go to the criteria section and click "New," then select Lead Field and the field "State" in the dropdowns. Now set the operator to "Is any of" and choose a state to filter your leads for. In this example, we're using Arizona, which will only allow leads with this state to be delivered through this Delivery Account._ 

Testing your configuration: Now that you have your Lead Source and Client set up, let's submit a test lead using the lead form you have opened in the other tab. To submit a lead, fill out the fields on the form and click "Submit." Make sure you set the state on the lead to be the same as the state set in your Delivery Account criteria. Once the form delivers the lead, the system will generate a response informing you that the lead was accepted and providing a lead UID. You can now see your lead in the Leads List screen. You can also see the lead details and the send information of where the lead was delivered by selecting "View Send Information" from the Options dropdown in the top menu. 

To view the lead in the client portal, go to the Client Portal tab in the Client Details screen. This provides a link to the portal, where you'll enter the username and password you set for the client. The portal can act as a micro CRM for the client and is where they can manage their lead returns. This exercise shows the basics of how the system works. Please see the articles below for more detailed information on other parts of the system. Setting Up Lead Sources: Further information on configuring lead sources and campaigns. Setting Up Delivery Methods: Detailed information on configuring industry standard delivery method types. Understanding the Lead List Screen: Detailed information on the Lead List screen. Understanding the Distribution screen: Detailed information on the Distribution screen. 

Related Articles 

Client List - Adding a New Client Part II 

Delivery Methods Overview 

Ping-Post Delivery Method 

LeadExec Concepts 

LeadExec Patch Notes January 25th, 2024 

Did this answer your question?

Search for articles... 

All Collections Leads Lead List - Create Pivot Report from List View 

Lead List - Create Pivot Report from List View 

Create custom reports or choose from pre-loaded reports 

Written by Gabriel Buck Updated over a week ago 

To create a Pivot Grid report to show leads by the hour, navigate to either of these screens: Lead List or Distribution. This example will show how to add this report from the List screen. Click on Pivot to open the pivot grid screen. You can select a pre-configured Pivot report or create one from scratch. For example, select Lead Source from the Field Chooser and move into a row field, displaying all of your lead sources for this report. Next, select Date Added Quarter for your column field. Lastly, select Cost (Sum); this will now display your lead cost, by source, by a quarter from your lead list. 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead List - How to Move & Edit Columns 

Lead List - Viewing Lead Information 

Reports - Pivot Reports 

Creating a Web Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Leads Lead List - How to Export Leads from List 

Lead List - How to Export Leads from List 

Exporting your leads from your lead list is simple, just follow the tutorial 

Written by Gabriel Buck Updated over a week ago 

The Export Utility allows you to export all Leads (or specific Leads using the column filters) within a selected date range and export them to an Excel or CSV file. Tip: To select a range of leads, hold down the shift key on your keyboard, and select the range of leads you would like to export. How to export leads: 

Select the lead type you would like to export leads. Select the date range you would like to export and click the Search button. If there are any filters you would like to use; you'll want to use the column filters to display only the leads needed. In the example above, we selected only to export valid leads. Next, click on the Data Export button in the top menu. This option will provide you with three options for your export, Excel, CSV, and Schedule Export. You'll simply name the file and click Save in the pop-up window for Excel and CSV files. For more information on the Schedule Exports feature, please click here. 

Related Articles 

Lead List - How to Manually Send Leads 

Lead List - How to Move & Edit Columns 

Lead List - How to Use Advanced Search 

Understanding Lead Source List Screen 

Did this answer your question?

All Collections Leads Lead List - How to Manually Send Leads 

Lead List - How to Manually Send Leads 

Manually send leads to clients from your lead list. 

Written by Gabriel Buck Updated over a week ago 

There are three ways to manually send leads from the Lead List screen: Run Automation, Find Client, and Send to Client. Run Automation: You can access the Run Automation feature by selecting Options in the top menu of the Lead List screen or by right-clicking on the lead and choosing Run Automation from the popup menu. This feature allows you to process the lead for delivery through automation. 

Find Client: 

_By using Find Client, the system will scan all clients' delivery accounts to find clients that have criteria that match the lead. The results will also include clients who do not have automation selected for their delivery accounts, yet whose criteria match. To access the Find Client feature, you can either select Options from the top menu on the Lead List screen or right-click on the lead and choose Find Client from the popup menu. Once you've selected Find Client, the system will scan your client list and return a list of all eligible clients for that lead. You can then click the Send icon to deliver the lead to your chosen client._ 

Send to Client: 

The "Send to Client" option enables manual lead delivery to clients, bypassing client-specific criteria such as delivery account requirements, quantity limits, and delivery schedules. To access the Send to Client feature, you can either click on Options in the top menu of the Lead List screen or right-click on the lead and choose Send to Client from the popup menu. When you select Send to Client, a popup window will appear where you can choose your delivery options and then click the Send button to deliver the lead to your client. 

Related Articles 

Quality Control - How to Manually Send Leads 

Lead List - How to Use Advanced Search 

Distribution - Manually Send Leads 

Lead List - Viewing Lead Information 

Lead List - Manually Adding a Lead 

Did this answer your question?

Search for articles... 

All Collections Leads Distribution - Manually Send Leads 

Distribution - Manually Send Leads 

When you need to send a lead that missed being delivered by automation you will want to manually send this lead 

Written by Gabriel Buck Updated over a week ago 

To Transfer a lead from the Distributions screen, right-click or use the Options selection from the main toolbar. When you select Transfer, follow these steps to Transfer a lead to a buyer. Tip: There are times when you might need to send a lead manually. For instance, if a lead does not match a buyer automatically, the buyer changes or updates their criteria, and you would like to send them leads they missed out on via automation. In this case, you would send leads that match their criteria manually. Step 1. Select the client from the drop-down list and click Next. Step 2. Select the client's Delivery Account. Step 3. You can select whether or not you would like this lead to apply to the new client's order. Step 4. You can send the lead via the client's delivery method or track it in the system as a delivery. Step 5. Review the Transfer Information and click Transfer. 

Related Articles 

Quality Control - How to Manually Send Leads 

Lead List - How to Manually Send Leads 

Distribution - How to Use This Screen 

Delivery Queue - Understanding This Screen 

Lead List - Manually Adding a Lead 

Did this answer your question?

Search for articles... 

All Collections Leads Returns - Setting up Lead Return Reasons 

Returns - Setting up Lead Return Reasons 

For each Lead Type, you can setup acceptable lead return reasons. 

Written by Gabriel Buck Updated over a week ago 

The most important part of managing returns is setting up your default Return reasons; these Return Reasons are located on each Lead Type and will be viewable as valid Return Reasons for your clients in the Client Portal. To access your Lead Return reasons, proceed to your Settings screen, Lead Type. You can manually add various return reasons, and once you have typed out your return reason, be sure to hit enter, then Save. Tip: The most common Lead Return reasons you might want to consider are the following: 

Bad Phone Not Interested Incentivised Never Applied Does Not Meet Criteria 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead List - Viewing Lead Information 

Returns - Managing Lead Returns 

Returns - Understanding this Screen 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Leads Returns - Understanding this Screen 

Returns - Understanding this Screen 

Use the Returns screen to approve and deny returns as well as managing all of your lead returns. 

Written by Gabriel Buck Updated over a week ago 

Use the Returns screen to Approve or Deny lead returns. Tip: With Lead Returns, you first need to set up Return thresholds for each Client and default return reasons. You can set up a Maximum Return Percentage, and you can create your unique Return reasons that you will accept. Learn How to Create Valid Return Reasons Once you have your default return reasons, you can then use this screen to Approve or Deny returns. 

Buyers or Clients can Return leads via the Client Portal; this is a web-based portal where they can view all of their leads, return leads, add credit card orders, and view reports. To set a Maximum Return Percentage, proceed to Clients, Delivery Accounts, and Advanced. 

As with any Lead screen, you can use the Choose Column feature to add additional columns and create your custom view by dragging columns. 

Related Articles 

Returns - Managing Lead Returns 

Returns - Setting up Lead Return Reasons 

Understanding Lead Source List Screen 

Understanding the Lead Source Detail Screen 

LeadExec Patch Notes August 22, 2024 

Did this answer your question?

Search for articles... 

All Collections Leads Returns - Managing Lead Returns 

Returns - Managing Lead Returns 

Managing lead returns is a big part of successfully managing your lead based business, we will cover the basics. 

Written by Gabriel Buck Updated over a week ago 

To manage your Returns proceed to Returns, located in the left-hand navigation under your Leads section. Tip: From this screen, you can use the Choose Columns feature to display critical pieces of information like Return Date and Date Added. Also, it is critical to your lead generation success that you manage returns and mark your leads that are returned as Approved or Approved and Return to Source. If you select Approved Send back to Source, the lead will be deducted from your Vendor Send Count and affect your Vendor Payout. 

Why Managing Returns is Important With LeadExec, you can set a return % threshold for your lead buyers. You will want to limit the percentage of total leads on order a client can return in most cases. You might want to restrict a buyer to 10% or 20% to ensure you do not let them return more than would be prudent for a successful relationship. Your buyers can return leads from the Client Portal, or you can Import Returns via an XLS file. We have also included a Pivot report feature with a pre-loaded report that helps you understand how many leads during a time frame your client has returned. 

Related Articles 

Lead List - Viewing Lead Information 

Client Settings - Options 

Lead List - Lead Details 

Returns - Understanding this Screen 

Groups - Exclusive 

Did this answer your question?

All Collections Leads Lead List - Troubleshooting Rejected Leads 

Lead List - Troubleshooting Rejected Leads 

L Written by Leo Garcia 

Updated over a week ago 

Why are my leads being rejected? When troubleshooting why your leads are not being delivered, it is essential to analyze various potential issues. Here's a step-by-step guide: 1- Confirm the column “Invalid Reason” on your lead page to get more details, if you do not have this column click on the button A small pop-up window will appear on the bottom left corner of the screen, Type “Invalid Reason” and drag the icon to your lead page 

In this column, you'll have the opportunity to pinpoint the issue. If you require more specific information, you can either right-click on the lead itself and choose "View Insert Request," or alternatively, you can open the lead and select the same option from the toolbar. 

Within the insert request review the response to determine what went wrong. 

There are numerous potential reasons for non-delivery; however, if your lead isn't marked in red and remains unsent, you can investigate further by right-clicking on it and choosing "View Send Information." Within this window, you'll find the response, aiding in identifying the underlying cause. 

Related Articles 

Lead List - How to Move & Edit Columns 

Lead List - How to Export Leads from List 

Lead List - Viewing Lead Information 

Lead List - Lead Details 

Lead List - Manually Adding a Lead 

Did this answer your question?

Search for articles... 

All Collections Leads Delivery Queue - Understanding This Screen 

Delivery Queue - Understanding This Screen 

Use the Delivery Queue to monitor your leads being processed in real-time 

Written by Gabriel Buck Updated over a week ago 

The Lead Delivery Queue is designed to give you a real-time view of what is happening with your leads as they are processed for delivery to your buyers. The screen will help you identify how fast leads are being matched with buyers or clients and verify that leads are going where they are supposed to be delivered based on your delivery rules. You can select any Lead from this screen and then view the Send Information or the Process Log, which is practical and confirms how the particular lead was matched with available buyers based on your delivery rules. 

Related Articles 

Distribution - How to Use This Screen 

Distribution - Manually Send Leads 

Inbound - Using Quality Control with Campaigns 

Returns - Understanding this Screen 

Ping-Post Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Leads Distribution - Viewing Your Client Information 

Distribution - Viewing Your Client Information 

Quickly and easily view your client details from this screen 

Written by Gabriel Buck Updated over a week ago 

From the Distribution screen, you have the option to open details about a specific lead, or you can open the client, where a specific lead was sent. This shortcut is useful if you are checking lead deliveries and want to verify information about a specific client. You might for example want to check on how many leads they have left on order or their billing details. Select any lead, then select Open Client from the main toolbar, or you can right-click, and use this menu to select Open Client. 

From the Client screen, you can also use the Automation Checklist to understand why a lead was delivered, or not delivered to a specific client. 

Related Articles 

Understanding the Client Portal 

Distribution - How to Use This Screen 

Lead List - Viewing Lead Information 

Client Settings - Options 

Lead List - Lead Details 

Did this answer your question?

Distribution - How to Use This Screen 

Understand how your leads are sold or distributed to your various buyers or sales teams. 

Written by Gabriel Buck Updated over a week ago 

This screen contains all leads delivered to your lead buyers or clients. 

Tip: You can access options on this screen from the main toolbar or use the Right Click function to view these options. From this screen, you can view icons that tell you what is happening with your distributed leads: 

Leads Sent - Leads that have been sent and accepted by your client Leads Read - Leads sent to your clients and opened by clicking on the email link sent or opening the lead inside the client portal. Leads Not Read - Leads delivered to your client; however, they have not clicked on the email link sent or opened the lead inside of the client portal Leads Returned - Leads that your client has received from you but has chosen to return. 

Tip: Hover your mouse over the icons for more information about the status of each lead 

Your list of available options from this screen located on the main toolbar includes: 

Open Lead - Opens the details of the selected lead Open Client - Opens the client that received this particular lead 

Export - This allows you to export all of your leads or a group of chosen leads Call Details - If this lead has any call information, this will let you see all the details. Calls - If this lead has a recording, you will be able to replay the recording as necessary. 

Call Details - will provide you with more information about what happened with the call Listen to Calls - If you accept inbound calls, you can listen to call recordings with this selection. 

Filters - This screen allows you to choose from predetermined filters to view the information you desire; you can learn more about filters here. 

Options Menu 

Reassign - This button allows you to search for eligible clients for this lead and then reassign the lead. This function will provide all available clients based on Delivery Account, Order, Exclusive, and Price. Reassign To - This allows you to reassign a lead to a specific buyer and bypasses your existing orders and distributions. 

Resend - Resends the lead to the original client Transfer - Allows the ability to transfer leads to buyers Mark as Returned - This allows you to return the selected lead to your LeadExec account. You will need to confirm your selection. You will then provide a reason for the return for tracking purposes. Once you have provided the reason, the system will prompt you to see if you would like this lead returned to the Lead Source. Mark as Accepted - Sometimes, a client's system will return a failed or rejected response, but they did receive the lead. This function allows a user to go in and update the leads as delivered for reporting purposes. Update Price - This function allows you to change the price your buyer paid for a lead; you can also update a revenue share if you work with lead resellers. 

View Request - Displays delivery request sent over to your client for each lead 

View Response - Displays the response details that LeadExec received when the lead was delivered to your client. View Note - You can view, add, or edit lead notes 

View Send Details - This modal window will allow you to view all deliveries for your selected particular lead. You can drill down even further by selecting a delivery, enabling more options. 

The available options are Logs, Process Diagram, Request, Response, Notes, Resend, Delete, and View Client. 

Logs will allow you to view the processing time for this lead by each service in LeadExec, used to process this lead for delivery. 

The Process Diagram will display a particular lead's path to its end destination in a visual format. This diagram helps understand the automated process that occurs for each lead delivery. 

Related Articles 

Lead List - Viewing Lead Information 

Inbound - Using Quality Control with Campaigns 

Lead Type Settings - Force ID's 

Account Settings - General 

Client Settings - Options 

Did this answer your question?

Search for articles... 

All Collections Inbound Understanding Lead Source List Screen 

Understanding Lead Source List Screen 

Use the Lead Source List screen to manage your sources 

Written by Gabriel Buck Updated over a week ago 

From the Lead Sources - List screen, you are able to view all of your Lead Sources from one screen. From this screen, you can configure the layout, just the way you want it, by using the Choose Columns feature. Once you have your Columns, you can drag them into any position, or use the Column filters to see your Active, Closed, or Inactive Lead Sources. You can also Search for a specific Lead Source using the Search feature. 

Related Articles 

Quality Control - Understanding This Screen 

Returns - Understanding this Screen 

Understanding the Lead Source Detail Screen 

Client List - Understanding the Client List Screen 

Order List Screen 

Did this answer your question?

Search for articles... 

All Collections Inbound Understanding the Lead Source Detail Screen 

Understanding the Lead Source Detail Screen 

Detailed information on how to use the Lead Source Details screen 

Written by Gabriel Buck Updated over a week ago 

The Lead Source Detail screen allows you to edit your Lead Source information, create and access Campaigns, and manage credentials for the Vendor Portal. 

You can also manage Access Control and Lead Grading settings for the Lead Source. Access Control The Access Control settings found on the Lead Source details page provide the functionality to either Whitelist or Blacklist IP addresses for the Lead Receiver. Whitelisting vs Blacklisting IP addresses: Whitelisting an IP address enables you to control who can (or cannot) access the Lead Receiver by setting up allowed IP addresses in Access Control. Any IP addresses set to "Allow" in access control will be granted access to the Lead Receiver to post leads into the account. Blacklisting an IP address will work the opposite, where IP addresses set to "Deny" will be blocked from accessing the Lead Receiver while all others will be allowed. Lead Grading For more detailed information on Lead Grading, please follow this link: https://leadexechelp.clickpointsoftware.com/en/articles/6136766-lead-source-list-enable-lead-score Vendor Portal From the Vendor Portal, your Lead Sources can track accepted and returned leads. Your lead sources can also view their post documentation (how to deliver leads to your LeadExec account) and various reports to help them understand their payout. 

You can learn more about setting up Lead Sources by reading these articles: Adding a New Lead Source Part I - Basic Lead Sources - Adding a Lead Source (Quantity Limits & Quality Control) Part II Lead Sources - Adding a Lead Source Part III Advanced 

Related Articles 

Lead Source List - Access Control IP Restriction 

Lead Sources - Enable Lead Grading 

API Access Settings - Access Control (IP's) 

Understanding Lead Source List Screen 

Lead Source Settings - Lead Grading 

Did this answer your question?

Search for articles... 

All Collections Inbound Introduction to Campaigns 

Introduction to Campaigns 

This article outlines the different types of campaigns and how they are used 

Written by Chris Arenas Updated over a week ago 

Campaigns allow multiple types of leads to be routed from a lead source into your LeadExec account. You can configure as many campaigns under a lead source as you need. The two primary settings used in campaigns are the Channel and Lead Type settings. The Lead Type setting dictates which lead type is used, and the Channel setting dictates what kind of lead will be routed through the campaign... Web Leads, Phone Leads, Chat Leads, or Ping Post Leads. Each channel type offers different campaign setting options. We have dedicated articles for configuring campaigns for each channel type. Web Leads: Web Leads are the most common leads processed in LeadExec. This would be any leads from a self-managed landing page or website, third-party vendors, or a platform like Zapier. https://leadexechelp.clickpointsoftware.com/en/articles/8695673-creating-a-web-lead-campaign Phone Leads: The Phone Leads channel type sets a campaign for inbound calls to be routed through LeadExec's IVR Call Flow system and delivered to an available client or sales team agent. https://leadexechelp.clickpointsoftware.com/en/articles/8864572-creating-a-phone-lead-campaign Chat Leads: The Chat Lead channel type is intended for use with LeadExec's AI-powered chatbot system. The chatbot can be integrated with landing pages or websites, allowing you to collect lead data from a consumer on your website via chat rather than the user having to fill out a form. https://leadexechelp.clickpointsoftware.com/en/articles/8864574-creating-a-chat-lead-campaign Ping Post Leads: The Ping Post channel type is used for inbound ping posts from a third-party vendor and offers settings similar to web lead campaigns. https://leadexechelp.clickpointsoftware.com/en/articles/8864575-creating-a-ping-post-campaign 

Related Articles 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

LeadExec Concepts 

Creating a Chat Lead Campaign 

Creating a Ping Post Campaign 

Did this answer your question?

All Collections Inbound Adding a New Lead Source 

Adding a New Lead Source 

Step by step instructions for adding a new lead source to LeadExec 

Written by Gabriel Buck Updated over a week ago 

Adding Lead Sources and Campaigns is an integral part of configuring your LeadExec account. In this area of the system, you will control where leads are coming from and what type of leads you will accept. You should understand all Delivery, Criteria, and Quality/Lead Validation options to ensure your buyers receive valid and qualified leads. To start, go to the Lead Source List option from the left-hand navigation under the Inbound section. Step 1: Select the Create button Add the Name of the lead source, the Email associated with the lead source, the Address for the source, and the City, State, and Zip Code. 

Step 2: Once you have added your lead source, click Next to create a new campaign. When creating the campaign, it will ask you to add a Campaign Name, Channel, Lead Type, and Price. 

Step 3: Once you have added your campaign, click Next to modify the Properties. 

_*This screen may vary depending on the channel you selected for your lead source. Step 4: Once this is complete, a pop-up screen will appear for you to either Generate Posting Instructions or further Edit the Campaign Settings._ 

Related Articles 

Lead Sources - Enable Lead Grading 

Understanding the Lead Source Detail Screen 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

Lead Source Settings - Lead Grading 

Creating a Web Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Inbound Understanding the Campaign List Screen 

Understanding the Campaign List Screen 

The Campaigns screen helps you organize the Campaigns associated with your Lead Sources 

Written by Gabriel Buck Updated over a week ago 

The Campaigns screen allows you to see all Campaigns from your Lead Sources on one screen. 

In this screen, you have a few options from the main toolbar: Open Lead Source - This opens the Lead Source associated with the Campaign. Open Campaign - This opens the Campaign options like quantity limits, lead type, and quality options. Delete - This will delete a Campaign. Posting Instructions - This will provide the Post Documents needed by your internal web-development team or third-party lead source to post leads to LeadExec. View Lead Flow - This is a great resource for viewing all the steps a lead will go through in this Campaign before being accepted or rejected. Export - This will allow you to Export your Campaigns into an XLS file. 

Related Articles 

Lead List - Viewing Lead Information 

Understanding Lead Source List Screen 

Understanding the Lead Source Detail Screen 

Introduction to Campaigns 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Field Requirements for PING 

Leads would include any leads from a self-managed landing page or website, a third-party vendor, or a platform like Zapier. Campaigns can be created within the Lead Source Details page or the Campaigns screen by clicking the Create button in the top menu. 

General Information 

The General Information tab is where you will enter the essential details for your Ping Post Leads campaign. Here you will assign the Lead Source, Campaign Name, Channel, and Lead Type. Aside from the Campaign Name, the Lead Source, Channel, and Lead Type settings cannot be changed after initially creating the campaign. 

Lead Source Assign the campaign to a Lead Source. Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Channel Set the Channel type to be used for this campaign. In this case, you'll select PING/POST Leads. Lead Type Select the Lead Type to be used for this campaign. Campaigns can only process leads for a single lead type. If you have multiple Lead Types, you will need to create a campaign for each of the different Lead Types. Price Input the Price per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Status A campaign must be set to Active to receive leads. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Require Authentication The Require Authentication setting determines if a lead source is required to use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. 

Quality Options 

The Quality Options tab provides options to help manage and maximize the quality of your leads. There can be a price per lead cost for some of the services listed in this section. 

Use Quality Control Using Quality Control is a way to gate leads, allowing users to validate or invalidate leads manually in the Quality Control bin. Validated leads will be processed for automated delivery, while invalided leads will be marked as QC returned to the client. You might use this feature to call-verify leads, or review leads from a new vendor before you send them to your buyers. Duplicate Day Setting This setting determines how far back the system checks for duplicate leads based on selected fields in your Lead Type. Standardize Address Apply industry standardization to the primary address field. Append City and State The system will update the city and state fields when a valid postal code and country are present. Mobile Check Verify if the lead's primary phone number is a mobile number. Geolocate IP Address Geolocation IP address of the lead. (fee may apply) 

Delivery Options 

The Delivery Options tab allows you to control how your leads will be delivered. 

Automation Method Here, you can choose the Automation Method you want to use for this campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. 

Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this campaign. Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the campaign. You would use an Exclusive Delivery Group if you wanted leads from this campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. 

Quantity Limits 

Quantity Limits allow you to set the maximum number of leads you want to allow this campaign to accept in an Hourly, Daily, or Monthly time frame. 

Next Steps 

By clicking the Create button, your new campaign will be saved to the database. 

Once the campaign is created, you will be taken to the main campaign settings module. Here, you can configure the required settings for Ping Post campaigns on the Ping Options tab. Ping Options 

The Ping Options tab is where you can configure all settings related to Inbound Pings from your lead source for this campaign. To start, let's take a moment to familiarize ourselves with how the Ping system operates before we delve into its settings. Understanding the Ping system. When a campaign is configured using the Ping Post channel, the system will validate that the lead source has first sent in a PING request, received an Order ID, and submitted the full lead within 5 minutes of receiving that Order ID. The PING system is used to qualify a lead's information before contact information for that lead is submitted to the system. For instance, the PING may ask whether the account has a buyer for a lead with a loan amount of $100,000, and the response will be either yes or no. If the response is yes, the source will receive an Order ID, which will be valid for 5 minutes. This information relates to the fields that are set in the Field Requirements section of this tab. 

_Revenue Requirement Allows you to set the required revenue amount. Profit Requirement Allows you to set the required profit amount. (Revenue minus lead cost must be at least "x")_ 

Profit Percentage Requirement Allows you to set the required profit percentage amount. 

Minimum Delivery Count Allows you to set a minimum estimated delivery count. For example, if set to "2", the system must find two matching clients that potentially take the lead. 

Qualify All Criteria Qualify clients using all criteria. Note: If no is selected, clients will be qualified only using the field values supplied on the PING request. 

Field Requirements for PING 

The Field Requirement setting is a crucial part of setting up your Ping Post campaign. This section allows you to specify the fields that you want your lead sources to provide in the Ping request. The Ping posting instructions will reflect the fields that you choose here. You can choose to set these fields as either required or optional. 

Once you've configured the Ping Options tab, you can move on to make any additional setting adjustments needed or save the campaign and move on to generate posting instructions for your lead source. Other related articles: PING/POST Lead Campaign Advanced Settings How to Generate Posting Instructions 

Related Articles 

Ping-Post Delivery Method 

Ping Post Field Mappings 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Written by Chris Arenas Updated over a week ago 

Web Lead campaigns are the most widely used type of campaign in LeadExec. Web Leads would include any leads from a self-managed landing page or website, a third-party vendor, or a platform like Zapier. Campaigns can be created within the Lead Source Details page or the Campaigns screen by clicking the Create button in the top menu. 

General Information 

The General Information tab is where you will enter the essential details for your Web Leads campaign. Here you will assign the Lead Source, Campaign Name, Channel, and Lead Type. Aside from the Campaign Name, the Lead Source, Channel, and Lead Type settings cannot be changed after initially creating the campaign. 

Lead Source Assign the campaign to a Lead Source. Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Channel Set the Channel type to be used for this campaign. In this case, you'll select Web Leads. Lead Type Select the Lead Type to be used for this campaign. Campaigns can only process leads for a single lead type. If you have multiple Lead Types, you will need to create a campaign for each of the different Lead Types. Price Input the Price per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Status A campaign must be set to Active to receive leads. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Require Authentication The Require Authentication setting determines if a lead source is required to use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. Quality Options 

The Quality Options tab provides options to help manage and maximize the quality of your leads. There can be a price per lead cost for some of the services listed in this section. 

Use Quality Control Using Quality Control is a way to gate leads, allowing users to validate or invalidate leads manually in the Quality Control bin. Validated leads will be processed for automated delivery, while invalided leads will be marked as QC returned to the client. You might use this feature to call-verify leads, or review leads from a new vendor before you send them to your buyers. Duplicate Day Setting This setting determines how far back the system checks for duplicate leads based on selected fields in your Lead Type. Standardize Address Apply industry standardization to the primary address field. Append City and State The system will update the city and state fields when a valid postal code and country are present. Mobile Check Verify if the lead's primary phone number is a mobile number. Geolocate IP Address Geolocation IP address of the lead. (fee may apply) Delivery Options 

The Delivery Options tab allows you to control how your leads will be delivered. 

Automation Method Here, you can choose the Automation Method you want to use for this campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. 

Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this campaign. Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the campaign. You would use an Exclusive Delivery Group if you wanted leads from this campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. Quantity Limits 

Quantity Limits allow you to set the maximum number of leads you want to allow this campaign to accept in an Hourly, Daily, or Monthly time frame. 

Next Steps 

By clicking the Create button, your new campaign will be saved to the database. Once the campaign is created, the system will auto-open the main campaign settings module, where you can make adjustments to additional settings if needed. 

Once you've completed any additional setting adjustments, you can save your campaign and move on to generate posting instructions for your lead source. Other related articles: Web Lead Campaign Advanced Settings How to Generate Posting Instructions. 

Related Articles 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Creating a Phone Lead Campaign 

Creating a Chat Lead Campaign 

Creating a Ping Post Campaign 

Next Steps 

Written by Chris Arenas Updated over a week ago 

Phone Lead campaigns are used with LeadExec's IVR Call Flow system, which transfers live calls and any collected lead data to an available sales team agent or client. You must have a call flow configured in advance of creating a Phone campaign. Campaigns can be created within the Lead Source Details page or the Campaigns screen by clicking the Create button in the top menu. 

General Information 

The General Information tab is where you will enter the essential details for your Phone Leads campaign. Here you will assign the Lead Source, Campaign Name, Channel, and Lead Type. Aside from the Campaign Name, the Lead Source, Channel, and Lead Type settings cannot be changed after initially creating the campaign. 

Lead Source Assign the campaign to a Lead Source. Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Channel Set the Channel type to be used for this campaign. In this case, you'll select Phone Leads. Lead Type Select the Lead Type to be used for this campaign. Campaigns can only process leads for a single lead type. If you have multiple Lead Types, you will need to create a campaign for each of the different Lead Types. Price Input the Price per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Status A campaign must be set to Active to receive leads. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Require Authentication The Require Authentication setting determines if a lead source is required to use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. 

Delivery Options 

The Delivery Options tab allows you to control how your leads will be delivered. 

Automation Method Here, you can choose the Automation Method you want to use for this campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this campaign. Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the campaign. You would use an Exclusive Delivery Group if you wanted leads from this campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. 

Next Steps 

By clicking the Create button, your new campaign will be saved to the database. 

Once the campaign is created, you will be directed to the main campaign settings module, where you can adjust additional settings for Phone Lead campaigns. 

Phone Numbers The Phone Numbers tab is where you will configure the phone numbers and call flow to be used for the campaign. 

Name Provide a name for the phone number and call flow configuration. IVR Number Select an existing IVR number from your account. If you do not have an IVR number yet, select the Purchase New Number at the bottom of the module. Call Flow Select the call flow you want to associate with this number and campaign. Message Flow This feature is still in beta. More information will be provided upon the official release. Purchase New Number Purchase a new IVR number. Both local and toll-free numbers are available for purchase. 

Once you've completed your additional setting adjustments, you can save your campaign. Other related articles: Understanding Call Flows 

Related Articles 

Creating a Web Lead Campaign 

Introduction to Campaigns 

Web Lead Campaigns: Advanced Settings 

Creating a Chat Lead Campaign 

Creating a Ping Post Campaign 

Updated over a week ago 

Chat Lead campaigns are used with LeadExec's AI chatbot message system. The chatbot can be integrated with landing pages or websites, allowing you to collect lead data from a consumer on your website via chat rather than the user having to fill out a form. You must have a chat flow configured in advance of creating a Chat campaign. Campaigns can be created within the Lead Source Details page or the Campaigns screen by clicking the Create button in the top menu. 

General Information 

The General Information tab is where you will enter the essential details for your Chat Leads campaign. Here you will assign the Lead Source, Campaign Name, Channel, and Lead Type. Aside from the Campaign Name, the Lead Source, Channel, and Lead Type settings cannot be changed after initially creating the campaign. 

Lead Source Assign the campaign to a Lead Source. Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Channel Set the Channel type to be used for this campaign. In this case, you'll select Phone Leads. Lead Type Select the Lead Type to be used for this campaign. Campaigns can only process leads for a single lead type. If you have multiple Lead Types, you will need to create a campaign for each of the different Lead Types. Price Input the Price per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Status A campaign must be set to Active to receive leads. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Require Authentication The Require Authentication setting determines if a lead source is required to use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. 

Delivery Options 

The Delivery Options tab allows you to control how your leads will be delivered. 

Automation Method Here, you can choose the Automation Method you want to use for this campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this campaign. Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the campaign. You would use an Exclusive Delivery Group if you wanted leads from this campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. 

Next Steps 

By clicking the Create button, your new campaign will be saved to the database. 

Once the campaign is created, the system will auto-open the main campaign settings module, where you can make adjustments to additional settings required for Chat Lead campaigns. 

Web Chats The Web Chats tab is where you will configure the chat flow to be used for the campaign. Click the Add button for the main Chat dialog settings. 

Once you've completed the additional setting adjustments, you can save your campaign. 

Related Articles 

Creating a Web Lead Campaign 

Introduction to Campaigns 

Web Lead Campaigns: Advanced Settings 

Creating a Phone Lead Campaign 

Creating a Ping Post Campaign 

Properties 

Revenue Share Options 

Additional Scanning Options 

Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Status Ensure the status is set to Active; any other status will not allow leads to enter the system through this Campaign. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Price Input the cost per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Require Authentication The Require Authentication setting determines if a lead source must use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. 

Outbound Delivery 

Next, you will see the Outbound Delivery section, where you can adjust the Delivery settings for the Campaign. Automation Method Here, you can choose the Automation Method you want to use for this Campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this Campaign. 

Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the Campaign. You would use an Exclusive Delivery Group if you wanted leads from this Campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. With the default setting "Any Qualified Clients" the system will select clients based on the normal distribution rules in place. 

Ping Options 

The Ping Options tab is where you can configure all settings related to Inbound Pings from your lead source for this campaign. To start, let's take a moment to familiarize ourselves with how the Ping system operates before we delve into its settings. Understanding the Ping system. When a campaign is configured using the Ping Post channel, the system will validate that the lead source has first sent in a PING request, received an Order ID, and submitted the full lead within 5 minutes of receiving that Order ID. The PING system is used to qualify a lead's information before contact information for that lead is submitted to the system. For instance, the PING may ask whether the account has a buyer for a lead with a loan amount of $100,000, and the response will be either yes or no. If the response is yes, the source will receive an Order ID, which will be valid for 5 minutes. This information relates to the fields that are set in the Field Requirements section of this tab. 

_Revenue Requirement Allows you to set the required revenue amount. Profit Requirement Allows you to set the required profit amount. (Revenue minus lead cost must be at least "x")_ 

Profit Percentage Requirement Allows you to set the required profit percentage amount. 

Minimum Delivery Count Allows you to set a minimum estimated delivery count. For example, if set to "2", the system must find two matching clients that potentially take the lead. 

Qualify All Criteria Qualify clients using all criteria. Note: If no is selected, clients will be qualified only using the field values supplied on the PING request. Field Requirements for PING 

The Field Requirement setting is a crucial part of setting up your Ping Post campaign. This section allows you to specify the fields that you want your lead sources to provide in the Ping request. The Ping posting instructions will reflect the fields that you choose here. You can choose to set these fields as either required or optional. 

Quality Options 

The Quality Options section provides options to help manage and maximize the quality of your leads. Duplicate Checks 

Check Rejected Leads Specify whether this Campaign should perform duplicate checks on previously rejected leads. Duplicate Day Setting This setting determines how far back the system checks for duplicate leads based on selected fields in your Lead Type. Append Duplicate Data When receiving a duplicate lead, update the existing lead with updated lead data. 

_Allow PING Duplicate API Check Allow this Campaign to utilize the duplicate check API to ensure non-duplicates before the final lead submission. Note: A fee may apply when using this feature; please refer to your subscription page for more information. Resend Deliveries When receiving a duplicate lead, resend the existing lead's deliveries._ 

Criteria 

In the Criteria section, you can set filters for the Campaign to allow only those leads with matching lead field criteria to be accepted. 

_To add incoming criteria, click Add. This will launch the Criteria Details window. Select Lead Field as the Criteria Type. Other Available Options_ 

Regular Expression - Allows you to use a regular expression as criteria. Calculate Expression - Allows you to use a calculated expression as criteria. Think of a Lead Source sending you mortgage balance 1 and mortgage balance 2, but they are unable to send you an LTV (Loan to Value Ratio), which mortgage lead buyers use to determine the viability of your leads. You can use a Calculated Expression to determine the LTV based on other fields of information provided by your lead source. 

Quantity Limits 

Quantity Limits allow you to set the maximum number of leads you want to allow this Campaign to accept in an Hourly, Daily, or Monthly time frame. 

Lead Validation 

Use Quality Control Using Quality Control is a way to gate leads, allowing users to validate or invalidate leads manually in the Quality Control bin. Validated leads will be processed for automated delivery, while invalid leads will be marked as QC and returned to the client. You might use this feature to call-verify leads, or review leads from a new vendor before you send them to your buyers. Default Reject Option In most cases, you will want to use the system default setting, Reject Back to Source. 

Reject Back to Source – This is the system default; this will take any rejected lead and mark it as one inside LeadExec. Move to Quality Control – This will take any rejected lead and move it directly to Quality Control for manual validation. Forward to Delivery – This will take any rejected lead and move it directly into automation for your clients to receive. 

Standardize Address Apply industry standardization to the primary address field. Append City and State The system will update the city and state fields when a valid postal code and country are present. Mobile Check Verify if the lead's primary phone number is a mobile number. Geolocate IP Address Geolocation IP address of the lead. (fee may apply) 

Compliance 

The Compliance tab offers settings for using LeadExec's TCPA and GDPR tools. 

TCPA 

To enable TCPA on your Campaign: 

1. Click Enable TCPA Services 2. Input the TCPA consent text you wish to have populated on your form into the 

TCPA Form Consent Text field. If you leave this field blank, it will default to the following text. 

_3. Default TCPA Consent Text: "I agree to be contacted on the number supplied using an automated telephone dialing system or prerecorded or artificial voice. I understand that providing my cell phone number is not required to purchase services and that I may revoke this permission at any time."_ 

4. Enter the email address of the LeadExec account manager in the Notification Email field. This is a required field. 

5. The Reject Lead for No Consent option allows you to reject any leads if consent is not given. 

GDPR LeadExec's GDPR options allow you to comply with the General Data Protection Regulation, a set of EU data protection and privacy rules. 

Retention Policy - Set the number of days before any lead received is automatically removed from the system. Rejected Retention Policy - The number of days before rejected leads are automatically removed from the system. This works independently from the primary Retention Policy setting. 

Advance Options 

Assignments 

Default User Assignment You can choose which one of your users gets automatically assigned the leads from the list of registered users you have. Category You can also select a category that is used to denote further what type of leads a Lead Source is sending you for this Campaign. Group If you are an agency or company that buys leads for your sales divisions, you may have brands within the company, and you want to segment lead delivery for those brands. To simplify reporting, you will want to use the Lead Source Campaign Group. Let's say, for example, you are a company with four major brands. You receive leads specifically for these brands from a variety of lead sources. If so, you will want to segment your brands using the Lead Source Campaign Group. Once you have created the Campaign brands in this group, you can enable them when you set up your Lead Source Campaigns so that leads go directly to these brands. 

Automation 

_Use Delivery Queue Process lead delivery asynchronously. Note: By selecting no, response time back to the source will be affected Enable Automated Engagement When a web lead has been received, initiate a phone call using the call routing system to engage the lead. Note: Selected engagement numbers must have a call flow assigned. Please review ClickPoint's Acceptable Use Policy. Violation of this policy will result in this feature being disabled. Engage Using Text Messages Initiate a conversation through text messages if available. Note: The assigned number must have a message flow assigned. Please review ClickPoint's Acceptable Use Policy. Violation of this policy will result in this feature being disabled._ 

Permissions 

Password If needed, a password can be required when submitting leads. Allow Send Responses Allow the lead receiver to send back a list of deliveries. 

Properties 

Maximum Return Count You can set up a Maximum Return Day Count to specify the maximum number of days returns are allowed on your leads. Custom Value Delimiter 

©Copyright ClickPoint Software 

Related Articles 

Ping-Post Delivery Method 

Ping Post Field Mappings 

Creating a Web Lead Campaign 

Web Lead Campaigns: Advanced Settings 

Creating a Ping Post Campaign 

Did this answer your question?

Search for articles... 

All Collections Inbound Inbound - Using Quality Control with Campaigns 

Inbound - Using Quality Control with Campaigns 

Quality control can help prevent bad leads from being passed to your buyers; understanding how it works is critical 

Written by Gabriel Buck Updated over a week ago 

Quality Control is a way to gate leads prior to delivering them using automated delivery. You might want to use this feature to call verify leads, or gate leads from a new vendor before you send them to your buyers. The Quality Control screen allows users to manually validate or invalidate leads that have entered their LeadExec system. To navigate to the Quality Control bin, go to your Leads section and select Quality Control. As with most lead-driven screens in LeadExec you have the ability to customize your view with the Choose Columns feature. ClickPoint will be actively working to add a power dial feature to the new web-based version for call verification. You can set leads to be staged in Quality Control by editing a campaign and selecting the Use Quality Control option. 

Related Articles 

Quality Control - How to Manually Send Leads 

Quality Control - Understanding This Screen 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Inbound Campaigns - TCPA Certification Step 3 

Campaigns - TCPA Certification Step 3 

Written by Gabriel Buck Updated over a week ago 

Along with the steps above, it is necessary to ensure you have the required fields set up inside your lead type to ensure all TCPA information is captured correctly. The fields that need to be added to your Lead Type are: Go to your Settings section within your LeadExec Account 

1. Select Lead Types on the left-hand side 2. Select the Lead Type you will be applying these changes to and click Open 3. Open up the field you want to tie to its system field under the System Field 

section; choose the system field that best matches the field you are editing. 

First Name - This is a Text field that connects to the First Name system field Last Name - This is a Text Field that connects to the Last Name system field Primary Phone - This is a Phone Number field that ties to the IsMobile system field, allowing LeadExec to Check if this is the person's Mobile Number. IP Address - This is a Text field that will connect to the IP Address system field Consent - This is a Yes/No Field tied to the Consent system field; this will allow LeadExec to work with the code generated from the campaign section and input your form to capture if the lead has provided consent to be contacted. 

To tie these fields to the corresponding system fields, you can follow these steps: Once you have finished with all of your fields, LeadExec will be able to capture and display all TCPA information correctly. 

Related Articles 

Settings - TCPA Options 

Campaigns - TCPA Certification Step 1 

Campaigns - TCPA Certification Step 2 

Campaigns - TCPA Certification Step 4 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

To enable TCPA on your 

Campaign: 

To run the checklist: 

All Collections Inbound Campaigns - TCPA Certification Step 1 

Campaigns - TCPA Certification Step 1 

Ensure your leads meet TCPA requirements with real-time on form checks, and certification 

Written by Gabriel Buck Updated over a week ago 

Enabling TCPA Certification will require you to configure your lead type to work with TCPA Certification. With TCPA Certification you can ensure every lead you collect on your own landing pages, or landing pages where you have provided the unique code to be used will check for consent, IP address, and mobile phone. If there is ever a complaint filed, you will be able to generate a certificate from LeadExec. To enable TCPA Certification you first need to proceed to your Settings, then select TCPA Options, where you can enable TCPA for your LeadExec account. 

Next, you will then enable TCPA Certification for each Lead Type. Open your Lead Source Details Click TCPA Options Select On Under the Enable TCPA Services Select the lead type that you wish to configure with TCPA and click Configure. This will place a green check in place of the configure button letting you know it is set up. 

To enable TCPA on your Campaign: 

1. Click on List in the Lead Sources section of your left-hand navigation toolbar 2. Select the Lead Source where you will be enabling TCPA 3. Select the Campaign that you will be enabling TCPA Certification under and click 

Edit 4. Click on Compliance Options 5. If you have set the TCPA consent text you wish to have populated on your form you 

_can paste it into the TCPA Form Consent Text field. If you leave this field blank it will default to the following text Default TCPA Consent Text: "I agree to be contacted on the number supplied using an automated telephone dialing system or prerecorded or artificial voice. I understand that providing my cell phone number is not required to purchase services and that I may revoke this permission at any time"_ 

6. Turn on TCPA Mobile Check by selecting Yes - this feature is a requirement to use the TCPA system and does have a fee of $.02 per Mobile Check. 

7. Turn on Locate IP by selecting Yes - This feature will locate the lead via their IP Address. 

Once you have these options enabled and set up you can run the TCPA CheckList to make sure everything is set up correctly! 

To run the checklist: 

1. Click Lead Sources 2. Select the Lead Source you have enabled TCPA on and click Modify Campaigns 3. Highlight the Campaign you enabled TCPA on and Click TCPA 

Related Articles 

Settings - TCPA Options 

Lead List - Viewing Lead Information 

Campaigns - TCPA Certification Step 2 

Campaigns - TCPA Certification Step 3 

Campaigns - TCPA Certification Step 4 

Did this answer your question?

Campaign Name Provide a name for the Campaign that indicates the type of leads and their location of origin. Status Ensure the status is set to Active; any other status will not allow leads to enter the system through this Campaign. Available Status Options Include 

Active Closed Inactive On Hold Late Suspended 

Price Input the cost per lead for this Campaign. The price will be tracked throughout the system to allow you to run the most accurate Reports. Require Authentication The Require Authentication setting determines if a lead source must use a Client ID and Client Secret when posting in leads. More information on using authentication credentials can be found in this article, LeadExec API Credentials. Outbound Delivery 

Next, you will see the Outbound Delivery section, where you can adjust the Delivery settings for the Campaign. Automation Method Here, you can choose the Automation Method you want to use for this Campaign. Generally, you will want to use the System Default setting, which uses the Automation type set in the main Account Settings. However, there are certain use cases where you may want to deliver leads using a different Automation type for a specific campaign. This setting will override the main Automation settings of the account. 

Maximum Delivery Count The Maximum Delivery Count sets the maximum number of times that a single lead can deliver through this Campaign. 

Delivers To The Delivers To option allows you to set an Exclusive Delivery Group on the Campaign. You would use an Exclusive Delivery Group if you wanted leads from this Campaign only to be delivered to a select group of clients. An Exclusive Group must be in place before using this setting. With the default setting "Any Qualified Clients" the system will select clients based on the normal distribution rules in place. 

Quality Options 

The Quality Options section provides options to help manage and maximize the quality of your leads. Duplicate Checks 

Check Rejected Leads Specify whether this Campaign should perform duplicate checks on previously rejected leads. Duplicate Day Setting This setting determines how far back the system checks for duplicate leads based on selected fields in your Lead Type. Append Duplicate Data When receiving a duplicate lead, update the existing lead with updated lead data. 

_Allow PING Duplicate API Check Allow this Campaign to utilize the duplicate check API to ensure non-duplicates before the final lead submission. Note: A fee may apply when using this feature; please refer to your subscription page for more information. Resend Deliveries When receiving a duplicate lead, resend the existing lead's deliveries. Criteria_ 

In the Criteria section, you can set filters for the Campaign to allow only those leads with matching lead field criteria to be accepted. 

_To add incoming criteria, click Add. This will launch the Criteria Details window. Select Lead Field as the Criteria Type. Other Available Options_ 

Regular Expression - Allows you to use a regular expression as criteria. Calculate Expression - Allows you to use a calculated expression as criteria. Think of a Lead Source sending you mortgage balance 1 and mortgage balance 2, but they are unable to send you an LTV (Loan to Value Ratio), which mortgage lead buyers use to determine the viability of your leads. You can use a Calculated Expression to determine the LTV based on other fields of information provided by your lead source. 

Quantity Limits 

Quantity Limits allow you to set the maximum number of leads you want to allow this Campaign to accept in an Hourly, Daily, or Monthly time frame. 

Lead Validation 

Use Quality Control Using Quality Control is a way to gate leads, allowing users to validate or invalidate leads manually in the Quality Control bin. Validated leads will be processed for automated delivery, while invalid leads will be marked as QC and returned to the client. You might use this feature to call-verify leads, or review leads from a new vendor before you send them to your buyers. Default Reject Option In most cases, you will want to use the system default setting, Reject Back to Source. 

Reject Back to Source – This is the system default; this will take any rejected lead and mark it as one inside LeadExec. Move to Quality Control – This will take any rejected lead and move it directly to Quality Control for manual validation. Forward to Delivery – This will take any rejected lead and move it directly into automation for your clients to receive. 

Standardize Address Apply industry standardization to the primary address field. Append City and State The system will update the city and state fields when a valid postal code and country are present. Mobile Check Verify if the lead's primary phone number is a mobile number. Geolocate IP Address Geolocation IP address of the lead. (fee may apply) Compliance 

The Compliance tab offers settings for using LeadExec's TCPA and GDPR tools. 

TCPA 

To enable TCPA on your Campaign: 

1. Click Enable TCPA Services 2. Input the TCPA consent text you wish to have populated on your form into the 

TCPA Form Consent Text field. If you leave this field blank, it will default to the following text. 

_3. Default TCPA Consent Text: "I agree to be contacted on the number supplied using an automated telephone dialing system or prerecorded or artificial voice. I understand that providing my cell phone number is not required to purchase services and that I may revoke this permission at any time."_ 

4. Enter the email address of the LeadExec account manager in the Notification Email field. This is a required field. 

5. The Reject Lead for No Consent option allows you to reject any leads if consent is not given. 

GDPR LeadExec's GDPR options allow you to comply with the General Data Protection Regulation, a set of EU data protection and privacy rules. 

Retention Policy - Set the number of days before any lead received is automatically removed from the system. Rejected Retention Policy - The number of days before rejected leads are automatically removed from the system. This works independently from the primary Retention Policy setting. 

Lead Forms 

Inbound Lead Forms are designed for sales teams to input leads from inbound calls. These forms can be used in conjunction with the Live Call transfer system. 

To create a new lead form, click the Add button to populate the lead form shown below. 

You can customize the fields displayed on the form by clicking the Choose Fields To Display button. 

Advance Options 

Assignments 

Default User Assignment You can choose which one of your users gets automatically assigned the leads from the list of registered users you have. Category You can also select a category that is used to denote further what type of leads a Lead Source is sending you for this Campaign. Group If you are an agency or company that buys leads for your sales divisions, you may have brands within the company, and you want to segment lead delivery for those brands. To simplify reporting, you will want to use the Lead Source Campaign Group. Let's say, for example, you are a company with four major brands. You receive leads specifically for these brands from a variety of lead sources. If so, you will want to segment your brands using the Lead Source Campaign Group. Once you have created the Campaign brands in this group, you can enable them when you set up your Lead Source Campaigns so that leads go directly to these brands. Automation 

_Use Delivery Queue Process lead delivery asynchronously. Note: By selecting no, response time back to the source will be affected Enable Automated Engagement When a web lead has been received, initiate a phone call using the call routing system to engage the lead. Note: Selected engagement numbers must have a call flow assigned. Please review ClickPoint's Acceptable Use Policy. Violation of this policy will result in this feature being disabled. Engage Using Text Messages Initiate a conversation through text messages if available. Note: The assigned number must have a message flow assigned. Please review ClickPoint's Acceptable Use Policy. Violation of this policy will result in this feature being disabled._ 

Permissions 

Password If needed, a password can be required when submitting leads. Allow Send Responses Allow the lead receiver to send back a list of deliveries. Properties 

Maximum Return Count You can set up a Maximum Return Day Count to specify the maximum number of days returns are allowed on your leads. Custom Value Delimiter Which character should be used for multiple numerations. Revenue Share Options 

©Copyright ClickPoint Software 

Related Articles 

Lead List - Viewing Lead Information 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Creating a Phone Lead Campaign 

Creating a Chat Lead Campaign 

Did this answer your question?

Turn TCPA on, for your Lead 

Type 

Place Consent Code on Your 

Landing Page 

Verify The Consent Text is 

Present on Your Landing 

Page 

All Collections Inbound Campaigns - TCPA Certification Step 2 

Campaigns - TCPA Certification Step 2 

Place the code on your landing page or website, in order to collect TCPA consent. 

Written by Gabriel Buck Updated over a week ago 

Note: Prior to setting up your form to work with TCPA you will need to make sure you follow the steps to enable TCPA and set up your Lead Type to work with TCPA. 

Enabling TCPA Setting up your Lead Type to work with TCPA 

Webform Form Setup Site, Code Example, and Example Site LeadExec | TCPA Consent Provider API 

When setting up your form to work with TCPA Certification there are some important things to keep in mind! You need to ensure that your form is set to collect the following fields. 

Full name of the lead - this field is usually split up into a first name and last name, that will work as well Phone - Callable number of the lead IP Address - This field is very important to be able to use all of the TCPA features Consent - this can be a yes or no field or even a check box 

In order to tie the LeadExec TCPA feature, you will need to input our TCPA Form Script in order for us to capture the correct information. To generate your form script follow these steps: 

1. Click Lead Source 2. Select the Lead Source that you want to be tied to your form 3. Select the Campaign that you want to be tied to your form 4. Click TCPA Options 5. Under the TCPA Form Consent Text click Generate Form Script 

Turn TCPA on, for your Lead Type 

Place Consent Code on Your Landing Page 

Verify The Consent Text is Present on Your Landing Page 

Related Articles 

Settings - TCPA Options 

Campaigns - TCPA Certification Step 1 

Campaigns - TCPA Certification Step 3 

Campaigns - TCPA Certification Step 4 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

All Collections Inbound Campaigns - TCPA Certification Step 4 

Campaigns - TCPA Certification Step 4 

Ensure total TCPA compliance by storing and printing TCPA certificates 

Written by Gabriel Buck Updated over a week ago 

Once you have completed Steps 1-3, you will want to verify that leads are checked for TCPA Consent. You will proceed to the Lead List, where you can verify that leads are checked and verified for consent. Navigate to List, under the Leads section of your left-hand navigation. From the Lead List, you can see the column TCPA Compliant. If you do not immediately see this column header, proceed to the Choose Columns feature and find TCPA Compliant column header and drag it into the screen. 

If you ever have a complaint, you can search for the specific lead by name, open the Lead Details, then select TCPA. 

Now you can see the general TCPA checks, and you can Print Certificate. When you print the certificate it will look like this: 

You can right-click on the certificate, and then select Print, and then Print to PDF. 

Related Articles 

Settings - TCPA Options 

Lead List - Viewing Lead Information 

Campaigns - TCPA Certification Step 1 

Campaigns - TCPA Certification Step 2 

Campaigns - TCPA Certification Step 3 

Did this answer your question?

Setting up Lead Grading 

All Collections Inbound Lead Sources - Enable Lead Grading 

Lead Sources - Enable Lead Grading 

Use phone and email validation to create a lead score and improve lead quality. 

Written by Gabriel Buck Updated over a week ago 

Why is Lead Grading important? Lead Grading allows you to validate information on your leads by running checks on system fields set on your lead type. You are able to run grading on the following fields: 

Address – Ensures that the address is deliverable. Phone – Ensures that the phone number is registered with a telecom service provider. Email – Ensures that the email address is registered with an email service provider. IP Address – Checks to make sure that the IP is tied to the Address. Comments – Make sure that the comments section has information input. 

You are able to set up a custom grading scale with each letter grade allowing you to have leads follow certain routes. LeadExec will then show the grade of the lead inside of the reporting screens. 

Setting up Lead Grading 

Step 1: Navigate to the Settings section by clicking the Settings tab at the top, and clicking the Lead Grading option that will appear on the left side. Step 2: Once you are in the lead grading screen, enable the validation options you wish to use by selecting Enable. Do this to all validation options you want to use Step 3: Once you have all of your validation options set, the next step will be to set a point value each validation can earn if the lead passes. Step 4: Once the scores are in place it's time to set up your grade settings. At the bottom right of the lead grading section, you will see the highest possible score. This will assist you with inputting your grade scores. Step 5: Once the lows and highs are set for each letter it's time to set the action each grade will follow. To do this select the Action dropdown box. Step 6: Click Save and Agree located at the top left of the lead grading section. Step 7: The next step will be to implement this across all the campaigns receiving leads that you want to be graded. In order to do this, go to each campaign, and go under Grading Services. Then, change the lead grading option to "Yes, Perform lead grading". 

On the lead list window, some indicators will assist in identifying the lead grading score. 

The colored circles next to the green check mark indicate lead grading levels. In this system, green represents A, blue represents B, purple represents C, orange represents D, and red represents F. For more detailed information about the lead grading, you can open the lead and click on the lead grading details to view additional information. 

Related Articles 

Quality Control - How to Manually Send Leads 

Adding a New Lead Source 

Understanding the Lead Source Detail Screen 

Lead Source Settings - Lead Grading 

Creating a Web Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Inbound Lead Source List - Access Control IP Restriction 

Lead Source List - Access Control IP Restriction 

Limit where leads can post from by using IP address white listed article 

Written by Gabriel Buck Updated over a week ago 

Access control allows you to specify IP addresses that are allowed to submit leads into the system. This setting is optional and will restrict the lead receiver from accepting leads from non-approved IP addresses if enabled. 

Step 1 To enable this feature click the “Add IP” button from the top menu. Step 2 Enter the IP addresses that you have authorized your lead source to post from and click “OK.” Step 3 Next, click the “Save Details” button in the upper left-hand corner. Once saved, the IP addresses will be whitelisted and the system will only allow leads to post to the system from the set IP addresses. 

Related Articles 

Lead Sources - Enable Lead Grading 

Lead List - How to Manually Send Leads 

API Access Settings - Access Control (IP's) 

Understanding the Lead Source Detail Screen 

Lead Source Settings - Lead Grading 

Did this answer your question?

Search for articles... 

All Collections Inbound Groups - Exclusive 

Groups - Exclusive 

Deliver leads to a certain set of clients in a group, based on criteria 

Written by Gabriel Buck Updated over a week ago 

Exclusive Groups allow a Lead Source Campaign to deliver to a specific set of clients contained in an Exclusive Group. Once you create an Exclusive Group, the LeadExec user can assign clients to that group. Exclusive Groups are relevant when routing leads from web forms to be directed to a single buyer, client, or sales team. You can set up Exclusive Groups in your LeadExec system under the Lead Sources, then proceed to Groups, then Exclusive. To add a new group, click the Create button in the menu. This will open the Exclusive Group details menu. You will then give the Exclusive Group a Description name. For example, imagine we are sending Exclusive leads to a group of three branches that receive mortgage leads from you. You will then set a Send Preference of 

Limit sending to only one item in the group Allow sending to multiple items in the group 

To apply an Exclusive Group to a Campaign, go to the Lead Source tab and open the desired Lead Source. Go to the Source Campaigns option and open the selected campaign. Then click on Additional Options at the bottom of the left side menu. Once on that screen, find the Exclusive Options section. 

Now, when a lead is received from a Lead Source tied to that group, the system will only deliver to one client located within that group and will ignore all other clients located in the system. 

Related Articles 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Creating a Phone Lead Campaign 

Creating a Chat Lead Campaign 

Did this answer your question?

Outbound Call Flow Details 

Screen 

All Collections Inbound Call Flows - IVR System 

Call Flows - IVR System 

Configuring the LeadExec Call Flow System 

Written by Chris Arenas Updated over a week ago 

Interactive Voice Response (IVR) systems have become an integral part of modern communication, streamlining interactions between businesses and their customers. In this article, we'll delve into the workings of our IVR Call Flow technology, exploring its components, functions, and the benefits it brings to businesses and customers alike. Creating a New Call Flow 

1) Click on Create; from there, you name the Call Flow, add a Description, select a Lead Type, and the Default Hold Audio. 

2) Now your Call Flow has been created, the next step is to build your Inbound Call Flow. To get started, click the icon to the right of the Inboud menu item and select edit 

Inbound Call Flow Details Screen 

The Inbound Call Editor allows you to drag and drop modules from the left-hand menu to configure a call flow to meet your business requirements for the Inbound stage of the call flow. This will include the greeting message, hold music, conditional settings, and routing rules. 

Inbound Call Flow Editing Options: 

Note: Add a note to outline the details of the configurations for reference. Greeting: Play or say a message to the caller Menu: Allows the caller to select from multiple choices Play: Play a recording to the caller Say: Using text-to-speech, say a message to the caller Gather: Ask the caller for input. For example, ask the caller which zip code they are in. Condition: Route the call through the flow based on variable values or time of day Coverage: Put the caller on hold and check if there is coverage to cover the call Deliver: Send caller to LeadExec distribution system to connect with a client Dial: Direct the caller to a specific number; this will bypass LeadExec\`s Distribution system Pause: Pause the call Redirect: Redirect the caller to a different flow Call Result: Update the call result of the lead Variable: Set a variable or lead field Query: contact an external system using an HTTP webhook; this can capture a response and update a variable or lead field Voicemail: Capture a voicemail; this recording will be stored on the lead record End Call: End the call; this will terminate any conference or outbound calls currently in place 

Outbound Call Flow Details Screen 

The Outbound Call Flow editor allows you to drag and drop modules from the left-hand menu to configure a call flow to meet your business requirements for the Outbound stage of the call flow. 

Outbound Call Flow Editing Options: 

Note: Add a note to outline the details of the configurations for reference. Greeting: Play or say a message to the caller Menu: Allows the caller to select from multiple choices Play: Play a recording to the caller Say: Using text-to-speech, say a message to the caller Gather: Ask the caller for input. For example, ask the caller which zip code they are in. Condition: Route the call through the flow based on variable values or time of day Connect Call: Reject Call: Pause: Pause the call Redirect: Redirect the caller to a different flow Variable: Set a variable or lead field Query: contact an external system using an HTTP webhook; this can capture a response and update a variable or lead field End Call: End the call; this will terminate any conference or outbound calls currently in place 

Related Articles 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Inbound Groups - Campaigns 

Groups - Campaigns 

Campaign Groups set on a Lead Source allow you to tag brands or groups that you receive leads and distribute leads too 

Written by Gabriel Buck Updated over a week ago 

If you are an agency or company that buys leads for your sales divisions, you may have brands within the company, and you want to segment lead delivery for those brands. To simplify reporting, you will want to use the Lead Source Campaign Group. Let's say, for example, you are a company with four major brands. You receive leads specifically for these brands from a variety of lead sources. If this is the case, you will want to segment your brands using the Lead Source Campaign Group. We will create four teams or brands for demonstration purposes, and your lead sources will send leads directly to these brands or teams. 

Once you have created the Campaign brands in this group, you can enable them when you set up your Lead Source Campaigns, so that leads go directly to these brands. Proceed to Campaigns, select a Campaign, Open Campaign, select Additional Options, scroll to the bottom, and select the Campaign Group. 

Related Articles 

Understanding the Campaign List Screen 

Groups - Exclusive 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Creating a Phone Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Inbound How to generate posting instructions 

How to generate posting instructions 

Details on generating posting instructions for campaigns 

Written by Chris Arenas Updated over a week ago 

Posting Instructions serve as documentation to provide your lead sources or web developer, detailed information on how to post leads to your LeadExec account. Leads can be posted to the lead receiver via JSON, HTML Form(URL-encoded), or XML. Posting Instructions can be generated from either the Campaign List or the Lead Source Details page. To generate posting instructions, select Posting Instructions from the top menu of the screen. Here, you can choose the content type for the instructions. Click Export to save the file as either PDF or Excel. 

It is also important to mention the account identifiers that are included in the posting instructions. These are required fields for your lead source to use in each request posted to LeadExec. There will be three identifiers outlined in the instructions unique to your account. LID - Lead Type Identifier VID - Lead Source Identifier AID -Campaign Identifier Generating PING POST posting instructions. In order to generate posting instructions for PING POST, you need to export the instructions for both the PING and POST. You can do this by clicking on the triangle icon in the menu located next to the posting instructions button. Once clicked, you will have the option to choose and export both sets of instructions. On the PING instructions, you'll notice that the pings have a dedicated endpoint they will be posted to. This is different from the lead receiver endpoint noted in the POST instructions. Also, to note, the PING receiver only accepts JSON or URL-encoded requests. 

Related Articles 

Delivery Methods Overview 

Ping-Post Delivery Method 

Ping Post Lead Campaign Advanced Settings 

Introduction to Campaigns 

Creating a Ping Post Campaign 

Did this answer your question?

Search for articles... 

All Collections System Settings Account Settings 

Account Settings 

Account Settings 

By Gabriel and 1 other 9 articles 

Account Settings - General 

Understanding General settings options 

Account Settings - Branding 

Make your LeadExec and Client Portal your own with a unique logo and branded portal. 

Account Settings - Users 

You can add users to LeadExec that have Roles and Permission levels that are specific to their job function. 

Account Settings - User Permissions 

Create Roles and Permissions assigned to those roles that create access levels within LeadExec. 

Account Settings - Security 

You have complete control over the security settings for logging into your LeadExec account. 

Account Settings - Notifications 

Utilize system notifications to warn your team about urgent items within LeadExec 

Account Settings - Billing 

Collect payment from lead buyers and clients with Authorize.net or Stripe integration 

Account Settings - Distribution Lists 

Use distribution lists to deliver to large lists of zip codes, postal codes, and more 

Account Settings - LeadExec Pricing and Plans 

L

Search for articles... 

All Collections System Settings Account Settings Account Settings - General 

Account Settings - General 

Understanding General settings options 

Written by Gabriel Buck Updated over a week ago 

This section allows you to edit the naming conventions within LeadExec. For instance, not all of our clients sell leads, performance marketers use LeadExec to distribute leads to their sales teams. This General section allows you to change the name from Client to Sales Team. Here are the options you can edit from this screen: Client - You can name these Buyers, Sales, Branches, Customers Lead Source - You can name this Affiliates or Marketing Partner Campaign - You can name this something else Delivery Account - You can name this something else Delivery Method - You can name this something else 

Related Articles 

Lead Type Settings - Force ID's 

Client Settings - Options 

Account Settings - Branding 

Account Settings - User Permissions 

LeadExec Account Introduction 

Did this answer your question?

All Collections System Settings Verifying Emails and Domains for CAN-SPAM 

Verifying Emails and Domains for CAN-SPAM 

Steps to verify email addresses and domains to be CAN-SPAM compliant 

Written by Chris Arenas Updated over a week ago 

As of October 2023, our email partner has updated email delivery requirements per CAN-SPAM rules and guidelines. To provide a seamless experience using LeadExec, we have made it easy to adhere to these new guidelines. It is recommended that this verification process is completed by October 31, 2023, to stay in compliance. Requirement to Send Email To protect your Sender Identity and stay in compliance, you must authenticate your domain or verify your email via the Single Sender verification process in LeadExec Web. All future features, especially those that pertain to compliance, will be found in LeadExec Web. We have taken customer feedback, including many new updates, and will continue to do so in this version of the software. What do you need to do? All customers using email delivery for lead notifications via the LeadExec solution must authenticate their domain or use single-sender verification. It's a relatively painless process to ensure email delivery runs smoothly. Please proceed to LeadExec Web through the URL below to make the necessary updates. LeadExec Web: https://leadexec.clickpointsoftware.com/ When you first log in, you will notice the banner, which will direct you to a popup window outlining all email addresses that require verification. Here, you can begin the Single Sender verification process for each email used in the account. 

In the case of larger enterprise accounts that use a substantial number of different email addresses, verifying the domain rather than individual email addresses may be more efficient. For Verified Domains, please visit the new Email Settings section of the Settings page, which also contains the Verified Email Senders list and Link Branding. 

Verified Email Senders These are single-sender verifications that allow users to validate an outbound email address. This is required to send an email from LeadExec using that email address as the From address. This includes email delivery as well as any other email communications throughout the system, such as forgot password and MFA emails when using custom domains on the client portal. Verified Domains This allows an account to validate an entire domain as a valid From address. When a domain is validated, a company is able to send from any address as long as it matches that domain. Link Branding This allows an account to validate a domain to be used as the link path within lead delivery emails. For example, when setting up a link to the client portal (in email delivery), the URL rewrite from a SendGrid link to a link under the link domain. This will improve deliverability as the links in the email will match the sender's domain. Common Questions Question: What is Single Sender Verification? Answer: To protect your sender reputation and to uphold legitimate sending behavior, we require customers to verify their Sender Identities. Single Sender Verification is an easy method to verify your Sender Identity when you don't have access to the DNS settings for your domain. Question: What is Domain Authentication? Answer: When sending email, you must set Domain Name System (DNS) records on the domain to: 1. Communicate to receiving email servers that you own the domain emails are sent from. 2. Verify that you have given the sending email server permission to send email on behalf of the domain. Domain Authentication, formerly known as Domain Whitelabel, is Twilio SendGrid's process for domain setup and configuring the DNS entries that grant us permission to send email on your behalf. After completing Domain Authentication, your recipients will no longer see "via sendgrid.net" included with the From address of your messages. Both receiving email servers and human recipients will be more likely to trust the legitimacy of your messages, which means you're more likely to reach an inbox than a spam folder. More Information To learn about the recent changes in email send regulations, please visit our blog article below. Navigating Email Registration and CAN-SPAM in 2023 https://blog.clickpointsoftware.com/email-registration-and-can-spam 

Related Articles 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Creating a Ping Post Campaign 

Did this answer your question?

All Collections System Settings Account Settings Account Settings - Branding 

Account Settings - Branding 

Make your LeadExec and Client Portal your own with a unique logo and branded portal. 

Written by Gabriel Buck Updated over a week ago 

Within the LeadExec Account Settings, you can upload custom logos. To do this, click on the Settings tab. 

Select Branding. LeadExec supports white-labeling by allowing users to easily customize the branding of their own LeadExec Account, Client Portal, and Lead Source Portal. Branding or white-labeling allows you to customize the platform's branding to make it appear as if it were your own rather than showing the LeadExec logo. This will help maintain consistency in branding across your platforms, enhancing your brand recognition. 

You can also create a custom login domain for your LeadExec account. Branding/White-branding LeadExec supports white-labeling by allowing users to easily customize the branding of their own LeadExec Account, Client Portal, and Lead Source Portal. White-labeling allows you to customize the platform's branding to make it appear as if it were your own rather than showing the LeadExec logo. This will help maintain consistency in branding across your platforms, enhancing your brand recognition. Application URL: Customizing your URL will help you tailor the structure of your branding consistency, user experience, and search engine optimization. 

Custom Domain 

The DNS update requires some action on your part initially, and once that's done, we can proceed with making the change on our end. 1. You must create a CNAME record that points the domain (whatever your custom domain, for Example leadexec-clientportal.Testaccount.net) 2. You also need to create a TXT record Example: 

Once you have done, these two things with your hosting provider, we can then update on our end Login Caption: Customizing the text displayed on the login page enhances the user experience. 

Client Portal URL: The URL should reflect the organization's brand identity and be consistent with the domain name or subdomain used for other company websites or services. This helps reinforce brand recognition and trust among your clients. 

Lead Source Portal URL: It helps centralize lead information, allowing businesses to monitor the effectiveness of their marketing campaigns, track lead interactions, and streamline the lead management process 

Related Articles 

Understanding the Client Portal 

Lead Type Settings - Force ID's 

Account Settings - Notifications 

Verifying Emails and Domains for CAN-SPAM 

Did this answer your question?

Search for articles... 

All Collections Inbound Lead Source List - Lead Source Portal 

Lead Source List - Lead Source Portal 

L Written by Leo Garcia 

Updated over a week ago 

The Lead Source Portal entails a platform where your Lead providers can input specific information related to leads, review the distribution details and leads sent, and also check details related to APIs. 

You can set it up by going to Inbound>Lead Source List>Create once your lead source has been created within the "Lead Source Detail" screen scroll down to the bottom. From there, you can create their login credentials and provide them with the link to access their account. https://www.secure-leadportal.com 

Related Articles 

Adding a New Lead Source 

Understanding the Lead Source Detail Screen 

LeadExec Concepts 

Creating a Phone Lead Campaign 

Did this answer your question?

All Collections System Settings Account Settings Account Settings - User Permissions 

Account Settings - User Permissions 

Create Roles and Permissions assigned to those roles that create access levels within LeadExec. 

Written by Gabriel Buck Updated over a week ago 

LeadExec offers users the ability to create user Permissions. These role-based Permissions ensure that users in your system can only see what permissions they are assigned to based on their role in the company. To start creating a permission group click on the Settings tab. 

Select Permissions in the Account Settings section to create your user permissions. Click Add to create a new Permission Role. Role Properties – This section of the system will allow you to create various permissions for critical parts of the LeadExec system. The seven main categories are: 

Properties - Create a name for the role, like Manager or Sales Leads - Limit or allow access to the parts of the system that contain Leads, and allow for lead returns. Clients - Limit or allow access to the parts of the system that contain Clients. Lead Sources - Limit or allow access to the parts of the system that contain Leads Sources. Reports - Limit or allow access to the parts of the system that contain Reports. System Settings - Limit or allow access to the parts of the system that contain Reports. Filters - This section allows you to limit Clients, Lead Sources, and Lead Types to very specific selections. For instance, maybe an account administrator can only manage accounts assigned to them. 

Related Articles 

Adding a New Lead Source 

Account Settings - Branding 

Account Settings - Users 

Account Settings - Notifications 

LeadExec Concepts 

Did this answer your question?

Search for articles... 

All Collections System Settings Account Settings Account Settings - Users 

Account Settings - Users 

You can add users to LeadExec that have Roles and Permission levels that are specific to their job function. 

Written by Gabriel Buck Updated over a week ago 

To set up your LeadExec administration team go to Settings, then under Account Settings, select Users. From this screen, you can Add New Users, and Edit existing users. When Adding a New User, it is important to have already created your Permissions, so that you can Add a New User to a Permission set within LeadExec. To learn more about Permissions click here. You also have the ability to enable Mobile Access and Email Reminders when you add a new user. 

Related Articles 

Understanding the Client Portal 

Inbound - Using Quality Control with Campaigns 

Account Settings - Branding 

Account Settings - User Permissions 

Account Settings - Notifications 

Did this answer your question?

All Collections System Settings Account Settings 

Account Settings - LeadExec Pricing and Plans 

Account Settings - LeadExec Pricing and Plans 

L Written by Leo Garcia 

Updated over a week ago 

LeadExec offers a variety of plans to suit your needs. select a plan offering both annual and monthly payment choices. ClickPoint provides top-notch service, enterprise-level hosting, and uptime assurances through Microsoft Azure, along with all the integrations necessary for managing your lead-oriented business: The Starter plan lets you capture, distribute, or monetize leads utilizing advanced methods for lead acquisition and delivery. Unlike a trial version, your account remains active indefinitely. Take your time to assess the platform, compare it with other solutions, and upgrade when necessary. With our starter plan, you can gather leads effortlessly from various third-party providers, websites, or landing pages, Automated lead distribution through email, SMS, or HTTP webhook, and much more. We also offer more premium plan that will allow you to handle as many leads as you need: 

To upgrade your plan you would need to go to the “Welcome” page 

Once inside of the “Subscription” page 

And choose the best fit for you. 

For more details on our pricing plan, check out our website 

Related Articles 

Lead Type Settings - Force ID's 

Account Settings - General 

Account Settings - User Permissions 

Client Settings - Distribution Scripts 

LeadExec Account Introduction 

Did this answer your question?

©Copyright ClickPoint Software 

Search for articles... 

All Collections System Settings Client Settings 

Client Settings 

Client Settings 

By Gabriel and 1 other 3 articles 

Client Settings - Options 

Update your client settings to provide detail on client lead delivery, return percentages, and other options pertaining to 

clients. 

Client Settings - Distribution 

Distribution Types (Price, Weight, Round Robin) Other 

Client Settings - Distribution Scripts 

Advanced lead distribution customizations

Search for articles... 

All Collections System Settings Client Settings Client Settings - Options 

Client Settings - Options 

Update your client settings to provide detail on client lead delivery, return percentages, and other options pertaining to clients. 

Written by Gabriel Buck Updated over a week ago 

Your Client Settings Options allow you to turn on specific settings for clients inside of your LeadExec account. These are more advanced settings that pertain to your Client Portal, where a buyer can retrieve their leads, Client Delivery Group Settings, and other options. 

These settings include: 

Apply Groups as Criteria allows you to create exclusive deliveries within client groups. If this is enabled in a specific client group, it will be treated as exclusive to that client and will move to the next group. 

Yes, make deliveries exclusive within a group No, do not make deliveries exclusive within a group 

Allow Confirm Price - this setting allows the API to return a price after the lead has been delivered. This price would override the price on the delivery account. 

Yes, allow API calls to update the lead price No, do not allow API calls to update the lead prices 

Disable Access to Portal for Inactive Users - this setting will lock out any clients that are currently set as inactive from logging into the client portal. Expire Portal Email Link - this setting will cause the email link to the client portal that is sent out in email deliveries to expire after the specified number of days. Delivery Force ID Mapping sets which client field should be used when mapping a force id passed in with the post. Route Duplicate Leads allows duplicate leads to deliver to your buyer after the original is sent. Default Return Percentage on Delivery Accounts - You can set the default return percentage for all clients from this section. For instance, you might want a global 10% return percentage, and then adjust each client based on their use case or terms. Default Return Percentage on Orders - For buyers that have orders, you may want to set a global return allowance for any buyer with an active order. 

Related Articles 

Client List - Adding a New Client Part I 

Client List - Adding a New Client Part III 

Returns - Understanding this Screen 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Percentage 

All Collections System Settings Client Settings Client Settings - Distribution 

Client Settings - Distribution 

Distribution Types (Price, Weight, Round Robin) Other 

Written by Chris Arenas Updated over a week ago 

Client Distribution options in LeadExec allow you to change the way automation works for your entire system. The base defaults we have are 

Price Weighted Percentage Round Robin Priority 

_To set automation settings, Select the Default Automation dropdown and select an option. Click Save Settings. Price Automation Price automation Works by taking into account the price listed on your delivery accounts and ordering the client in order of highest to lowest. Price Optimization: If this option is set to yes, the system will take into account which client pays the most when sending the lead. Note: Price Automation does not have any automation preferences. Priority Automation Priority automation allows you to give your clients a priority order that is enforced when a lead enters the system. Click on Configure Automation Settings to save your changes and edit your priority. Priority is Determined with 0 being the highest priority. Anything higher than 0 is deemed a lower priority For example, if a lead were to come into the system right now, the order our clients would be scanned is 0,1,2,3,4,5. Round Robin Round Robin Delivery will ensure that the lead delivers clients receive leads in sequential order ensuring that the leads are even distributed For Example. You have 3 clients._ 

A B C 

As leads come into the system it will evenly distribute between the clients. for example during this time, 5 leads have entered your system. This is how they distributed 

A II B II C I 

Note: round robin does not have a configure automation preference item. Click save settings to implement Round Robin. 

Weighted Weighted distribution allows you to set weights on each client which determines how many leads they should receive. The percentage of leads a particular client receives goes up and down depending on time frame. Click on Configure Automation Settings to save your changes and edit your weights. Base automation Type: 

If two clients share the same weight the system will determine who gets the lead by the base automation type you can choose to have the system look at the clients via: 

Priority Round Robin Price 

Percentage 

Percentage-based delivery allows you to control which percentage of your total leads certain clients will receive within a specific time frame. Click on Configure Automation Settings to save your changes and edit your percentages. Base automation Type: If two clients share the same percentage, the system will then determine who gets the lead by the base automation type. You can choose to have the system look at the clients via: 

Priority Round Robin Price. 

Related Articles 

Distribution - How to Use This Screen 

Client List - Adding a New Client Part III 

Client Settings - Options 

Client Settings - Distribution Scripts 

How to Create Delivery Groups 

Did this answer your question?

Search for articles... 

All Collections System Settings Account Settings Account Settings - Billing 

Account Settings - Billing 

Collect payment from lead buyers and clients with Authorize.net or Stripe integration 

Written by Gabriel Buck Updated over a week ago 

As a lead-based business, you can sell leads directly to your customers, invoice them for leads as part of an order, and collect payment using a payment link. The first step will be for you to select either Authorize.net or Stripe as your payment processor. Once you have chosen a partner, you will receive an authorization key to enable payment processing in this system section. Stripe - https://www.stripe.com/ Authroize.net - https://www.authorize.net/ 

From this screen, you can also enter the associated details with your invoices. You will want to include your company name, a slogan, the address, and business information, and you can even have your tax rate used on invoices. 

Related Articles 

Client List - Adding (Invoices) Part V 

Account Settings - LeadExec Pricing and Plans 

Did this answer your question?

Search for articles... 

All Collections System Settings Account Settings Account Settings - Security 

Account Settings - Security 

You have complete control over the security settings for logging into your LeadExec account. 

Written by Gabriel Buck Updated over a week ago 

Based on industry standards, we strongly recommend that you enable Multi-Factor Authentication. This is the most substantial level of Security for preventing password issues related to security. You can set password options from the Security settings screen to make your system as secure as possible. For industry best practices, we recommend at least eight characters required for a password, at least one upper case letter, at least one numeric character, and at least one unique character. You can also enforce password changes after a certain amount of days from this screen. 

Did this answer your question?

Distribution List 

Assignments 

All Collections System Settings Account Settings Account Settings - Distribution Lists 

Account Settings - Distribution Lists 

Use distribution lists to deliver to large lists of zip codes, postal codes, and more 

Written by Gabriel Buck Updated over a week ago 

Distribution Lists are useful when using large zip code or postal code tables for lead delivery to one or more clients. To set up a Distribution List, click on Settings. From the settings tab, click on Distribution Lists. Click on New Once you have added the basic details, you can either add zip codes or postal codes manually or import them. 

Description – This is where you assign a description for your distribution list. LeadType – Select the Lead Type that this list will apply LeadField – What field will this list be using for criteria Link Field - Field on the lead that should be used as criteria to qualify this list for a lead. For example, the Link Field of Country could be used to select a certain list for different countries. Link Value - The value of the link field is used to qualify this list against the lead. For example, A link field value of "The United States" with a Link Field of Country would verify that the lead has the United States as the value of the country and would not apply this list unless that condition was met. Default Client – This value is used to determine where the lead should go if no list items apply to the lead. For Example: If a postal code list is being scanned, and the postal code is not found in the list. Then send the lead to the client selected to ensure there are no non-delivered leads. Status – Enabled or Disabled 

Note: If you are importing a file, make sure it is in a *.xlsx or *.xls 

Distribution List Assignments 

Once you have imported your zip codes or postal codes, you can edit or update the Assignment of this list. 

Add New Assignment – Manually add an assignment to the list. Remove Assignment – Will remove a value from the list Import Assignments Refresh – allows you to import an assignment, such as zip codes, via a .xls file 

Related Articles 

Lead List - How to Use Advanced Search 

Lead Source Settings - Do Not Contact List 

Lead Type Settings - Force ID's 

Lead Source Settings - Lead Grading 

LeadExec Patch Notes January 4th, 2024 

Did this answer your question?

Search for articles... 

All Collections System Settings Account Settings Account Settings - Notifications 

Account Settings - Notifications 

Utilize system notifications to warn your team about urgent items within LeadExec 

Written by Gabriel Buck Updated over a week ago 

LeadExec Notifications are handy when you have many lead buyers and need to stay on top of lead deliveries. Notification Use Cases 

For instance, knowing when a lead buyer's cap is almost at its maximum is vital for ensuring that their lead flow is not interrupted. Knowing when a buyer's credit card declines are helpful; your team can find out what happened and get them to enter a new card. Knowing when you receive new lead orders is essential to planning around your marketing expense to acquire more leads. Understanding if a buyer is rejecting your leads could help you pinpoint a technical issue. Knowing when a client has their order filled and has more lead volume could help your team know they should reach out to the buyer and initiate another order. 

These are just a handful of the valuable scenarios where Notifications can help you run a successful lead-based business. To create Notifications, go to Settings, then Notifications. 

Steps to Create a Notification: 

1. Click on Create 2. From here, select the type of Notification you would like to enable 3. You can give the Notification a custom name if you want. You might do this if it's a 

Notification for a specific role or person within your company. 4. You can Enable the new Notification. 5. You can select who will receive this Notification and the method they will receive 

it, either email or text SMS. 6. Once you create the Notification, you will get a slide-out with additional options. 7. Based on the type of Notification, you will get options for the Notification. 

Related Articles 

Adding a New Lead Source 

Account Settings - Branding 

Account Settings - User Permissions 

Delivery Methods Overview 

LeadExec Concepts 

Did this answer your question?

Search for articles... 

All Collections System Settings Client Settings Client Settings - Distribution Scripts 

Client Settings - Distribution Scripts 

Advanced lead distribution customizations 

Written by Chris Arenas Updated over a week ago 

Some use cases require custom scripts to be added to the account to meet business needs. Generally, the ClickPoint team uses this area of the system to write customized scripts. If you have a specific lead distribution use case that LeadExec's out-of-box functionality doesn't address, please reach out to our support team to help find a solution that meets your needs. 

Related Articles 

Distribution - How to Use This Screen 

Lead Type Settings - Force ID's 

Client Settings - Distribution 

Web Lead Campaigns: Advanced Settings 

Account Settings - LeadExec Pricing and Plans 

Did this answer your question?

©Copyright ClickPoint Software 

Search for articles... 

All Collections System Settings Lead Source Settings 

Lead Source Settings 

Lead Source Settings 

By Gabriel and 1 other 3 articles 

Lead Source Settings - Do Not Contact List 

Use these settings to add a number to the Do Not Contact List 

Settings - TCPA Options 

Enable TCPA from within LeadExec 

Lead Source Settings - Lead Grading 

Master account settings for Lead Grading. Use phone and email validation to create a lead score and improve lead quality.

©Copyright ClickPoint Software 

Search for articles... 

All Collections System Settings Lead Type Settings 

Lead Type Settings 

Lead Type Settings 

By Gabriel and 1 other 4 articles 

Lead Type Settings - Creating Lead Types 

Learn how to edit and change lead fields within a lead type 

Lead Type Settings - Categories 

Lead Type Settings - Force ID's 

Use Force ID's to segment your leads to be delivered in real-time directly to an exclusive client. 

Lead Type Settings - Display Groups 

L

Search for articles... 

All Collections System Settings Lead Source Settings 

Lead Source Settings - Do Not Contact List 

Lead Source Settings - Do Not Contact List 

Use these settings to add a number to the Do Not Contact List 

Written by Gabriel Buck Updated over a week ago 

Adding or removing a number from the Do Not Contact List Go to Settings, then under Lead Source Settings click Do Not Contact List. Then click New to add a number or select a Phone number from the list and click Remove to remove it. 

On the Do Not Contact List screen, you can view the Phone number, Times Hit, Date Added, and Last Hit. Use the funnel icon next to Last Hit to filter your view. If you have an external do not contact list, click Import Items to import. 

Related Articles 

Lead Sources - Enable Lead Grading 

Lead List - How to Move & Edit Columns 

Account Settings - Distribution Lists 

Lead List - Manually Adding a Lead 

Lead Source Settings - Lead Grading 

Did this answer your question?

To enable TCPA on your lead 

type: 

To enable TCPA on your 

Campaign: 

To run the checklist: 

All Collections System Settings Lead Source Settings Settings - TCPA Options 

Settings - TCPA Options 

Enable TCPA from within LeadExec 

Written by Gabriel Buck Updated over a week ago 

Enabling TCPA will require you to configure your lead type to work with TCPA as well as enable TCPA on your campaign. 

To enable TCPA on your lead type: 

1. Click on Settings 2. Click TCPA Options 3. Select Enabled under the Enable TCPA Information Screens option 

Select the lead type that you wish to configure with TCPA and click Configure. 

To enable TCPA on your Campaign: 

1. Click on Lead Sources 2. Select the Lead Source you will be enabling TCPA under and click Modify 

Campaigns 

Article - Implementing TCPA Step 1 

1. Select the Campaign that you will be enabling TCPA under and click Modify 2. Click on Quality/TCPA Options 

Article - Implementing TCPA Step 2 

1. If you have set the TCPA consent text you want to populate on your form you can paste it into the TCPA Form Consent Text field. If you leave this field blank it will default to the following text "I agree to be contacted on the number supplied using an automated telephone dialing system or prerecorded or artificial voice. I understand that providing my cell phone number is not required to purchase services and that I may revoke this permission at any time" 

2. Turn on TCPA Mobile Check by selecting Yes - this feature is a requirement to use the TCPA system and does have a fee of $.03 per certification check. 

3. Turn on Locate IP by selecting Yes - This feature will locate the lead via their IP Address. 

Once you have these options enabled and set up you can run the TCPA CheckList to make sure everything is set up correctly! 

To run the checklist: 

1. Click Lead Sources 2. Select the Lead Source you have enabled TCPA on and click Modify Campaigns 3. Highlight the Campaign you enabled TCPA on and Click TCPA Checklist 

Related Articles 

Campaigns - TCPA Certification Step 1 

Campaigns - TCPA Certification Step 2 

Campaigns - TCPA Certification Step 4 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

Setting up Lead Grading 

All Collections System Settings Lead Source Settings 

Lead Source Settings - Lead Grading 

Lead Source Settings - Lead Grading 

Master account settings for Lead Grading. Use phone and email validation to create a lead score and improve lead quality. 

Written by Chris Arenas Updated over a week ago 

Why is Lead Grading important? Lead Grading allows you to validate information on your leads by running checks on system fields set on your lead type. You are able to run grading on the following fields: 

_Address – Ensures that the address is deliverable. Phone – Ensures that the phone number is registered with a telecom service provider. Email – Ensures that the email address is registered with an email service provider. IP Address – Checks to make sure that the IP is tied to the Address. Comments – Make sure that the comments section has information input. Note: For the Address check in lead grading to pass, it's necessary to include the complete mailing address, including system fields such as Address, City,_ 

State, Zip, and Country. Otherwise, the verification will not succeed. 

You are able to set up a custom grading scale with each letter grade allowing you to have leads follow certain routes. LeadExec will then show the grade of the lead inside of the reporting screens. 

Setting up Lead Grading 

Step 1: Navigate to the Settings section by clicking the Settings tab at the top, and clicking the Lead Grading option that will appear on the left side. Step 2: Once you are in the lead grading screen, enable the validation options you wish to use by selecting Enable. Do this to all validation options you want to use Step 3: Once you have all of your validation options set, the next step will be to set a point value each validation can earn if the lead passes. Step 4: Once the scores are in place it's time to set up your grade settings. At the bottom right of the lead grading section, you will see the highest possible score. This will assist you with inputting your grade scores. Step 5: Once the lows and highs are set for each letter it's time to set the action each grade will follow. To do this select the Action dropdown box. Step 6: Click Save and Agree located at the top left of the lead grading section. Step 7: The next step will be to implement this across all the campaigns receiving leads that you want to be graded. In order to do this, go to each campaign, and go under Grading Services. Then, change the lead grading option to "Yes, Perform lead grading". 

Related Articles 

Lead Sources - Enable Lead Grading 

Quality Control - How to Manually Send Leads 

Adding a New Lead Source 

Understanding the Lead Source Detail Screen 

Creating a Web Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections System Settings Lead Type Settings Lead Type Settings - Force ID's 

Lead Type Settings - Force ID's 

Use Force ID's to segment your leads to be delivered in real-time directly to an exclusive client. 

Written by Gabriel Buck Updated over a week ago 

_LeadExec allows the ability to bypass the distribution system and target a specific client for delivery by using Force IDs. For example, if you have a contact form that targets leads for a specific client, you could use Force IDs. To set this up, you would first go into your lead type and create a field called ForceID, be sure to set the system field to ForceID as this tells LeadExec to use this field for that purpose._ 

Once you have created the lead field, you need to tell LeadExec which client field to run this off of. By default the system uses the client ID as the force ID. Meaning if you send in the client ID in the ForceID field, this will target that specific client. But you can run the force ID off any client field. For example, if your form system has specific IDs that you need to map in LeadExec, you can request that ClickPoint support create a custom client field called form ID on the client record. This would allow you to use that specific ID from your form and map it to a client within LeadExec. If you are using client ID then the next step is not required. To select a specific client field to be used as the force ID, go to Settings, then Clients. Once there you can update the dropdown with the field you want to map to the incoming force ID value. 

After you have configured your lead field, and mapped your delivery force ID to a client field (if needed). If you send in a lead with the mapped value or client ID, the system will target that specific client. 

Related Articles 

Lead Type Settings - Creating Lead Types 

Client Settings - Options 

Groups - Exclusive 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections System Settings Lead Type Settings Lead Type Settings - Categories 

Lead Type Settings - Categories 

Written by Gabriel Buck Updated over a week ago 

Lead Type - Categories: These Categories further define what a particular lead is. In the example below, we created Categories for leads in “Mortgage” with the “types” being “Organic”, “Paid”, and “SEO”. How to access lead type categories: 

1. Settings (Top right) 2. Categories (Bottom left sidebar) 3. +New (or Open on a selected Lead Type) 

When pressing +New you will be given the option to select an existing Lead Type (check here for creating a lead type) and a caption. Once filled in, press Save. 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead Type Settings - Force ID's 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Lead Type Settings - Display Groups 

Did this answer your question?

All Collections System Settings Lead Type Settings Lead Type Settings - Display Groups 

Lead Type Settings - Display Groups 

L Written by Leo Garcia 

Updated over a week ago 

The fields within the display group contain the information shown on your leads, which will also be shared with your clients. Display groups can be added or edited by going to the Settings>Lead Types>Display Groups; 

Once in here, you can go to “General.” and allow updates or even set the fields as “Read Only.” 

Through the “Enable Field” tab you will be able to select which fields will be shared on the lead details 

The “Field Order” tab will allow you to organize your information on the leads. 

You'll see these fields under the assigned name for the display group for each lead. 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead Type Settings - Force ID's 

Lead Source Settings - Lead Grading 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

©Copyright ClickPoint Software 

English 

Search for articles... 

All Collections System Settings API Access Settings 

API Access Settings 

API Access Settings 

By Chris and 1 other 2 articles 

API Access Settings - Credentials 

API Access Settings - Access Control (IP's) 

Create whitelisted or blacklisted IP's

Learn how to edit and change lead fields within a lead type 

Written by Gabriel Buck Updated over a week ago 

The Lead Type Library allows users the ability to preview and choose from many different Lead Types that are commonly used across many different verticals. To begin editing, adding, or removing fields from your Lead Type details, navigate to your Lead Type library by going to: Settings then to LeadTypes 

Select the New tab to reveal lead-type options. 

4. Select the Industry of the Lead Type you wish to create. 5. LeadExec will load all lead types tied to the industry type you select. Select a lead type and preview the fields to make sure that it fits exactly what you are looking for. 6. Once you have found the lead type you wish to use click Create this will pop up the lead type Editor. 7. Once you make sure the Lead Type description and Industry are set to your liking click Save. You are now ready to use this Lead Type. How to set up your custom Lead Type When you click +New or select an existing Lead Type, you will be given the Lead Type Details in a modal window. Proceed to the Custom button found at the bottom of the modal window. 

_Lead Field Types: Text - A format-free field set to accept any values entered. US/Canada Phone Number - A preformatted field set to look for a 10-digit number and display it in a (000) 000-0000 format. Email - A preformatted field set to capture and display fields in a standard email format, example: info@myleads.com Money - A preformatted field set to capture and display fields in a currency format, example: $1,000,000 Percentage - A preformatted field set to accept percentage values, example: 98% Number With Decimals - A preformatted field set to accept only numbers with 1 decimal point, example: 23.98 Number Without Decimals - A preformatted field set to accept only numbers and no additional characters, example: 23 Large Number Without Decimals - A preformatted field set to accept only large numbers and no additional characters, example: 1,000,000 Calculated Expression - Used for LTV or Other Calculated Fields. Yes / No - A preset field set to accept either Yes or No. Date / Time - A preformatted field set to capture and display information in .NET date/time formatting, example: 12/03/22 1:22 Postal Code - A preformatted field set to accept 5 numbers and display them accordingly, example: 85254 US State - A preset field set to accept only a certain list of State values, example: CA, NV, AZ Province - A preset field set to accept only a certain list of Canadian Province values, example: AB, BC, QC Dropdown - A customizable set value list, example: Loan Type = Refinance, Purchase, Cash-Out selections. Sub Fields - Sub-fields allow for multiple fields to be created under a single field, such as multiple policies under drivers. Once you've selected your field type, you'll follow the next steps: Input the Field Description (How the field displays in the system) Input the Field Name (How the system reads the lead field) Set the system field type from the dropdown. All fields without a system field match should be set to “Custom”. Is Required: Determines whether the field is required for leads to post into the system. Leads will reject back to your lead sources if a required field is not included in the request. Next, you will need to set the field display options for the lead field. This will set where and how the lead field will display within the system. In most cases, you will have all of these options selected. Depending on the lead field type selected there can be other options that need attention, such as formatting of date/time fields or adding enumeration values for dropdown fields. Once you've completed these steps, click Save to add your Lead Type. Description - This is the description of the Lead Field or Name, which can include spaces, for example: Loan Amount The Field Name - This is the name used on the backend of the system, with no spaces, for example: LoanAmount The Default Value - Setting a default value will cause the value to appear only if the field contains a blank value or is not present when a lead is posted into the system. System Field - The system field selection allows you to tie your field to a system field used heavily in reporting, validation, and display options throughout LeadExec. More on system fields outlined later in this article Required - Is this field required from your lead sources, you should generally require the fields your clients require. Leads will be rejected if values are not present in the required lead fields. Allow Pivot Reporting - Allow this field to be a selection, when you are creating custom reporting. Exclude from Integrations - Prevent the lead field from showing up in 3rd party integrations._ 

The next tab on the screen is Display. With Display, you can determine where this field will show up on the various screens of LeadExec. Simply select or deselect which screens you would like this lead field to display. 

_Validation and Formatting include Validation - Provides custom settings for validation of the lead field value. Invalid Characters - Provides custom settings to allow only certain characters to be accepted in the lead field value. Error Message - Used to set a custom error message when a lead is rejected due to an error related to the specific lead field. Format - Allows for custom formatting requirements for the lead field data. Profanity Filter - This setting tells the system to scan the lead field value for profanity using AI. This feature has a cost associated with it. AI Validation - This setting uses AI to verify the data of the lead field value. This feature has a cost associated with it._ 

Fields to be used for Duplicate checks are also set on this screen. 

Related Articles 

Lead Type Settings - Force ID's 

Lead Source Settings - Lead Grading 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

All Collections System Settings API Access Settings API Access Settings - Credentials 

API Access Settings - Credentials 

Written by Chris Arenas Updated over a week ago 

The API Access Credential settings allow you to create user authentication credentials that delegate user access to the APIs and lead receiver for increased security. When creating user credentials, a client ID and client secret are assigned by the system and used for authentication in API calls. How to set up API credentials: Go to the Settings tab and select API Credentials in the left-hand menu. 

Click the New button in the top menu. This will generate a popup window where you will name the user credentials in the description field. The system will generate a unique client ID and client secret for authenticating API calls. Here you can also set the allowed scopes for the credentials: Account API, Data API, and Lead Receiver. 

_Credentials can be enabled and disabled. However, the allowed scopes can only be set when creating the credentials and are not editable after the initial creation. You must record the client's secret, as the system will hide this information once the settings are saved and will not be further accessible. Using API Credentials: The client ID and client secret are used in the authentication call to the API, which generates an access token. The access token will then be used to authenticate the API calls made to the Data API or Account API. Access tokens are valid for 3600 seconds._ 

More information on the authentication call can be found in the API documentation: https://api.leadexec.net/#auth_token. Using Lead Receiver Credentials: Once you have created credentials in your Settings, you can choose which campaigns require authentication when posting leads to the lead receiver. The Require Authentication setting is located under the General Information tab of your Lead Source Detail; proceed to Campaigns, then Edit. Here you can specify if authentication is required for the campaign. 

Note: If authentication is required and an invalid access token is passed, the system will not show that lead on the search screen. 

Related Articles 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Creating a Phone Lead Campaign 

Creating a Chat Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Outbound Client List - Understanding the Client List Screen 

Client List - Understanding the Client List Screen 

Use the Client List screen to manage your clients 

Written by Chris Arenas Updated over a week ago 

From the Client-List screen, you are able to view all of your Clients from one screen. From this screen, you can configure the layout, just the way you want it, by using the Choose Columns feature. Once you have your Columns, you can drag them into any position, or use the Column filters to see your Active, Closed, or Inactive Clients. You can also Search for a specific Client using the Search feature. 

Related Articles 

Understanding the Client Portal 

Understanding Lead Source List Screen 

Quality Control - Understanding This Screen 

Returns - Understanding this Screen 

Order List Screen 

Did this answer your question?

Search for articles... 

All Collections System Settings API Access Settings 

API Access Settings - Access Control (IP's) 

API Access Settings - Access Control (IP's) 

Create whitelisted or blacklisted IP's 

Written by Gabriel Buck Updated over a week ago 

Whitelisting vs Blacklisting IP addresses: Whitelisting an IP address enables you to control who can (or cannot) access the API by setting up allowed IP addresses in Access Control. Any IP addresses set to "Allow" in access control will be granted access to the API for users from that IP address. Blacklisting an IP address will work the opposite, where IP addresses set to "Deny" will be blocked from accessing the API, while all others will be allowed. This setting only applies to the account API and data API. The lead receiver access control is handled through lead source settings. Lead Source Access Control Whitelisting IP addresses for API access 

1. Gear (Top right) 2. Access Control (Bottom left sidebar) 3. Add IP Address (or select an IPAddress to edit 4. Type in an IP Address or IP Range 5. Allow in the dropdown 6. Save 

This will only allow the set IPs to access the API, all others will be denied 

Blacklisting IP addresses from API access Similar to whitelisting, you will follow the same steps above, but in this case, instead of selecting Allow, you will select Deny. This will only allow the set IPs to access the API, all others will be allowed. 

Related Articles 

LeadExec IP Addresses used for Delivery 

API Access Settings - Credentials 

Lead Source List - Access Control IP Restriction 

Understanding the Lead Source Detail Screen 

Creating a Web Lead Campaign 

Did this answer your question?

Search for articles... 

All Collections Outbound Client List - Adding a New Client Part II 

Client List - Adding a New Client Part II 

Overview of Delivery Methods 

Written by Gabriel Buck Updated over a week ago 

The Client Delivery Method is one of the most vital components of LeadExec. You have complete control over the technical way your leads are delivered to your buyers from this part of the system. Delivery Types: Below are the delivery method types available in LeadExec. Follow the links below for specific instructions on configuring each delivery method type. Webhook: Deliver leads in HTTP POST, HTTP GET, JSON and XML formats. Ping-Post: Delivers partial lead details to the client, allowing them to bid on the lead. Email: Delivers the lead details in the body of an email template with a portal link. SMS Notification: Delivers the lead details in the body of an SMS text message template. FTP: Provides the ability to drop a CSV file to an external FTP server. CSV Attachment: Delivers individual leads in a CSV file attachment via email. Batch Delivery: Scheduled delivery designed to send all leads received during a set time frame via email with an excel or CSV attachment. ClickPoint Integration: Bidirectional delivery to ClickPoint. Lead Portal: Provides the ability to deliver the leads directly to the client lead portal. 

Related Articles 

Client List - Adding a New Client Part I 

Client List - Adding a New Client Part VI 

Client List - Adding a New Client Part III 

Delivery Methods Overview 

ClickPoint Integration Delivery Method Configuration 

Did this answer your question?

All Collections Outbound Client List - Adding a New Client Part I 

Client List - Adding a New Client Part I 

Overview of adding new clients to the system and then setting up basic functions for client delivery. 

Written by Gabriel Buck Updated over a week ago 

To begin setting up clients, go to the left-hand navigation under Client List, and select Create to launch the client setup wizard. From the Contact Information tab, you will add the Company Name, First Name, Last Name, Email, Status, and Client Group. 

You have several Client statuses to choose from, which include New, Pending, Working, Waiting, Dead, Inactive, Active, Late, Suspended, and Closed. To make a client Active, select Active when you are ready to start delivering leads. 

The Client Delivery Method tab is one of the most vital components of LeadExec. You have complete control over the technical way your leads are delivered to your buyers from this part of the system. 

From the Portal Login Information, you will be able to assign usernames and passwords for your clients. 

From the Delivery Account screen, you can select the channel, give the Delivery Account a name, set a Default Price for your leads, select whether or not you will have Criteria, make the leads exclusive, and set if orders are required. 

Related Articles 

Client List - Adding a New Client Part VI 

Client List - Adding a New Client Part III 

Client Settings - Options 

Client List - Adding a New Client Part II 

LeadExec Concepts 

Did this answer your question?

All Collections Outbound Client List - Adding a New Client Part III 

Client List - Adding a New Client Part III 

Overview of Delivery Accounts 

Written by Gabriel Buck Updated over a week ago 

Setting up your Client lead delivery comes down to three main components. 

1. Orders 2. Delivery Parameters 3. The Technical Method of Delivery 

In this article, we will show you how to set up the Delivery Account and the Delivery Method. Delivery Account - Includes lead criteria, When you first create a new Delivery Account, you can name the Delivery Account, as well as the Status, Lead Price, and turn on Automated Delivery. 

From the Delivery Account Detail screen, you have the following options General - Status, Price, and Delivery Priority Quantity Limits - Set Hourly, Daily, Weekly, and Monthly limits, as well as limit the % of qualified leads to be delivered to this Client. Delivery Options - You can set Automation, and Exclusivity, if the client Requires an Order for lead delivery and a Delivery Confirmation. Criteria - Includes the following options 

Lead Field Regular Expression Calculated Expression Evaluate Function 

Advanced - Includes the following options 

_Account Type - General Delivery, URL Redirect, Live Call Transfer, or IVR Direct Transfer Enforce Quantity Constraints In the event that a lead isn't delivered due to all delivery accounts being over their maximum delivery, this option will allow the system to rescan and ignore quantity limits to ensure the lead is delivered. Delivery Delay Should the lead be held for a certain amount of time before it is delivered. Max Return Percentage The maximum amount of leads (in percentage received) that can be returned Alternate Delivery Option Trigger an alternate delivery alongside the primary delivery. Note: For PING/POST setups, this setting is used to specify the PING delivery_ 

Related Articles 

Client List - Adding a New Client Part I 

Client Settings - Options 

Client List - Adding and Editing (Orders) Part IV 

Client List - Adding a New Client Part II 

LeadExec Concepts 

Did this answer your question?

Search for articles... 

All Collections Outbound Client List - Adding a New Client Part VI 

Client List - Adding a New Client Part VI 

Use the new client wizard to setup each new client with their delivery settings. 

Written by Gabriel Buck Updated over a week ago 

From the Client information page, you have the ability to add more information about your Client. You can add address information, notes, security, and login information for their Client Portal, Permissions, add Orders, and Billing. 

With Client Portal Permissions, you can decide if you want to expose things like Lead Source, a Lead Grade, Show Campaign, all available to display in the Client Portal, where your clients can retrieve their leads. You can configure LeadExec to notify them via email every time they receive a new lead, and then they can manage their leads from the Client Portal. 

Related Articles 

Understanding the Client Portal 

Client List - Adding a New Client Part I 

Client List - Adding a New Client Part III 

Client Settings - Options 

Client List - Adding a New Client Part II 

Did this answer your question?

allowing you to tailor each order to your client's specific requirements. Orders can be based on either quantity or dollar amount and can also include start and end dates. It is important to note that delivery accounts must have the setting Require Order enabled for the system to apply leads to an order. 

Creating a New Order - First Steps 

When creating a new order, the system generates a popup window where you can configure its primary settings. 

Name: Name the order. Status: Set the status of the order. Orders must be set to Active to receive leads Description: Brief description of what this order is for. Start Date: Start date for the order to begin 

End Date: The end date setting is used for time-based orders. This would be used for clients who want to purchase leads monthly. Renewal Method: Based on the order type, orders can be set to renew On Fill when either the lead quantity or dollar limit has been reached. Orders can also be closed by end date when that setting is being used. You can also choose the default setting of No Renewal if the order should not renew. Delivery Account: Orders can be tied to either all delivery accounts or one-to-one with a single delivery account. Order Type: Configure the order to be based on lead quantity or a set dollar amount. Depending on the Order Type, the system will then allow you to set either the quantity amount or the dollar amount of the order. Once you've completed this part of the configuration, click "Create," and the system will display the order details with more available options. 

Dollar Based Order Details 

General 

The first section of the General tab displays the primary settings of the order created in the previous popup window, where you can make any necessary changes. Here, you also have three often used settings: Auto Charge, Generate Invoice, and Max Return Percentage. Auto Charge: Automatically process a charge at the start of a new or renewed order, or when the order is complete Generate Invoice: Automatically generate invoices when processing automatic payments. Max Return Percentage: Set the amount of leads you are willing to accept as returns from your clients. Items 

The Items tab displays the order of item(s). Each item contains the settings relating to the order's properties, Item Type, in this case, Reserve Dollar Bank, Total Price, and Dollar Item Fill Limit. Item Type: Sets the order to be based on dollar amount or quantity. Total Price: Total price of the order for dollar based orders. Dollar Item Fill Limit: This setting is essential for dollar based orders that renew. In many cases, leads will be sold at different price points to a client, either because the client has multiple delivery accounts with different price points or when leads are being sold to the client via ping post. This setting allows you to set a threshold for the system to know when to renew the order. For example, if an order is set at $200 and the Dollar Item Fill Limit is set to $12, the system will renew the order once the threshold of $188 is reached. The system will then credit any remaining balance to the payment of the renewed order. Payments 

Lastly, you can Apply a Payment to any Order. The selections for Apply Payment are the following: 

Check Bank Transfer Cash Mobile Payment Credit Adjustment 

Any payments toward the order will be displayed on this screen. 

Quantity Based Order Details 

General 

The first section of the General tab displays the primary settings of the order created in the initial popup window. Here, you can make any changes if necessary. Here, you also have three often used settings: Auto Charge, Generate Invoice, and Max Return Percentage. Auto Charge: Automatically process a charge at the start of a new or renewed order, or when the order is complete Generate Invoice: Automatically generate invoices when processing automatic payments. Max Return Percentage: Set the amount of leads you are willing to accept as returns from your clients. 

The items tab displays the order of item(s). Each item contains settings relating to the order's properties, Item Type, in this case, Lead Quantity, Quantity, and Per Lead Price. Item Type: Sets whether the order is based on dollar amount or quantity. Quantity: Specify the quantity of leads being ordered. Price Per Lead: Set a per lead price including discounts. Leaving this setting blank will default to the price set on the delivery account. Payments 

Lastly, you can Apply a Payment to any Order. The selections for Apply Payment are the following: 

Check Bank Transfer Cash Mobile Payment Credit Adjustment 

Any payments toward the order will be displayed on this screen as well. 

Orders with Declined Payments 

Sometimes, you will find your client's payment for an order is declined by the payment processing service. In this case, the system will set the order status to Pending. When the lead is in the Pending status, it will prevent the order from receiving leads and will provide the option to approve the order manually. 

Approving Pending Orders 

To approve a pending order with a declined payment, go to the Orders tab in the client details screen and select the order in the Pending status. When the pending order is selected, the "Update Status" menu item will change to "Approve." By clicking the Approve button, a popup window will appear, giving you the option to approve the order. The Auto Charge option will be enabled by default. With this setting enabled, the system will process the payment again. If the payment is declined again, the order will remain pending. Alternatively, you can approve the pending order with Auto Charge disabled. In this case, the system will reopen the order without reprocessing the payment. 

Related Articles 

Understanding the Client Portal 

Client List - Adding a New Client Part I 

Client List - Adding a New Client Part III 

Search for articles... 

All Collections Outbound Clients - Portal Users 

Clients - Portal Users 

Create Portal users for your internal team. 

Written by Chris Arenas Updated over a week ago 

Creating Portal users in this screen provides the ability for your internal team members to track activity in the Client Portal. The users can be assigned to a single Client or multiple Clients. When logging into the Client Portal with credentials created in this screen, the user will see leads from their assigned clients in one place. This is generally used by businesses who are delivering leads to intercompany sales teams. 

To create a Portal user, navigate to Portal Users under the Clients section of the left-hand menu. Next, click the Create button. This will generate a popup menu to complete the User Details. In the Permissions section, you will select the clients the user will have access to in the Client Portal. Note: Additional users for the Portal on the client level must be created within the Client Portal. You can find more information in this article on the Client Portal. http://help.leadexec.net/en/articles/3506296-understanding-the-client-portal 

Related Articles 

Understanding the Client Portal 

Client List - Adding and Editing (Orders) Part IV 

Lead Portal Delivery Method 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Clients - Client Groups 

Clients - Client Groups 

Utilize client groups for more advanced delivery where you are delivering to a company with multiple locations 

Written by Chris Arenas Updated over a week ago 

Client groups can be used to group existing clients in your system to control delivery. With client groups, you can: 

Send leads to clients while having only one method. Assign multiple clients to a single delivery method. Send leads to multiple endpoints based on criteria 

To begin setting client groups, Select Client under the Groups submenu in the Clients section of the left-hand menu. Select "Create Group" and name your group. 

Inside your client group you can assign: 

Default Delivery – This will be the main delivery method your clients use when assigned to a client group. This is set up like a normal client Delivery. (Please refer to Setting Up Client Delivery for more details) Force Delivery – This will force the delivery of a lead and will over ride the default delivery (Please refer to Setting Up Client Delivery for more details) Delivery Overrides – These can be assigned to Override the Default Delivery to a client if certain criteria is met. 

Related Articles 

Client List - Adding a New Client Part I 

Client List - Adding a New Client Part III 

Client Settings - Options 

Groups - Exclusive 

How to Create Delivery Groups 

Did this answer your question?

Search for articles... 

All Collections Outbound LeadExec IP Addresses used for Delivery 

LeadExec IP Addresses used for Delivery 

Clients may request an IP range to ensure secure delivery 

Written by Gabriel Buck Updated over a week ago 

Your client may request a list of IP addresses to whitelist to meet their security compliance requirements. This helps clients recognize where leads are being delivered from and limit the possibility of a security breach. Below is the list of Delivery IP Addresses used by LeadExec: 104.42.74.179 104.210.49.211 104.42.127.7 104.42.120.193 104.42.73.102 104.210.50.226 104.42.73.183 40.112.185.178 13.64.251.44 13.88.17.200 13.91.51.102 13.91.49.194 138.91.240.166 137.135.46.212 13.64.251.164 13.91.55.5 13.88.23.131 13.88.19.88 13.88.18.241 40.112.243.4 

Related Articles 

Client List - Adding a New Client Part I 

How to Create Delivery Groups 

Creating a Web Lead Campaign 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

Navigating the Order List 

Screen 

How to Manage Orders 

Pro Tips for Efficient Order 

Handling 

Resolving Common Order Issues 

All Set with the Order List 

Screen 

All Collections Outbound Order List Screen 

Order List Screen 

Use the Order List Screen to manage your orders 

Written by Elsa de la Garza Updated over a week ago 

Navigating the Order List Screen 

From the Order List Screen, you can view all of your Orders from one screen. From this screen, you can configure the layout, just the way you want it, dragging and dropping the columns in the order you need them to be. Once you have your Columns, you can use the Status filter to see your Pending, Open, On Hold, Filled, or Paused orders. 

How to Manage Orders 

Step 1: Access the Order List Screen Navigate to "Outbound" and select "Orders." 

Step 2: Add a New Order Click on "Create" in the top right corner. 

Step 3: Open Order Details By selecting an order and clicking on Open Client, Open Order, or View Leads, you will be able to see the Client, Order, and Leads related to the Order. 

Step 4: View Leads Click "Save" to add the new lead source to your account. 

Step 5: Create Invoice By selecting an order and clicking on Create Invoice you will be able to add a Description, select a Due Date, and select the Payment Term for the order. 

Step 6: Apply Payment By selecting an order and clicking on Apply Payment you will be able to add a manual payment via Check, Bank Transfer, Cash, Mobile Payment, Credit, or add an Adjustment to the order. 

Step 7: Update Status By selecting an order and clicking on Update Status you will be able to update the Status of the current order. 

Pro Tips for Efficient Order Handling 

You can Create Filters to easily find the Orders you are looking for. You can Export your orders by clicking on Export 

Resolving Common Order Issues 

If you cannot find an order, make sure to clear all filters, and for the Status select All. You can also ensure the Date Range is correct and or select to show All. 

All Set with the Order List Screen 

Now that you understand the Order List Screen, you are equipped to efficiently track your orders, monitor their status, and manage payments seamlessly. This tool will enhance your order management process, ensuring you stay organized and up-to-date with all your transactions. Related Articles 

Client List - Adding and Editing (Orders) Part IV Client List - Adding (Invoices) Part V 

Related Articles 

Client List - Adding and Editing (Orders) Part IV 

Understanding Lead Source List Screen 

Returns - Understanding this Screen 

Client List - Understanding the Client List Screen 

LeadExec Patch Notes August 22, 2024 

Did this answer your question?

All Collections Outbound Client List - Adding (Invoices) Part V 

Client List - Adding (Invoices) Part V 

Use invoices to collect payment from your buyers, with easy payment integrations with Stripe, Square, or Authorize.net 

Written by Gabriel Buck Updated over a week ago 

Collecting payment from your Buyers has never been easier with invoice creation that provides a payment link from Stripe and other payment solutions. Proceed to the Billing section of your Client Details screen, where you can create new invoices. 

With Invoicing you have the ability to create new Invoices with Payment Terms and then you can either print an invoice or create a Payment Link to collect payment faster. 

You can use the Payment Link, to receive payments via Stripe. Stripe provides advanced payment reporting and is easy to use. Example LeadExec Invoice 

Example Stripe Billing Report 

Related Articles 

Client List - Adding and Editing (Orders) Part IV 

Account Settings - Billing 

Did this answer your question?

Search for articles... 

Delivery Groups 

How to Create a Delivery 

Group 

All Collections Outbound How to Create Delivery Groups 

How to Create Delivery Groups 

Delivery Groups allow you to set specific automation rules for a group of clients 

Written by Chris Arenas Updated over a week ago 

Delivery Groups 

Delivery groups are used to group clients or delivery accounts and customize the type of automation used for delivering leads within the group. For example, you have Client A, Client B, and Client C and want to deliver round-robin between only Client A and Client B. You would add Client A and Client B to a delivery group set to round-robin automation. The system will then round-robin the delivery between Client A and Client B, and after it has attempted delivery within that group, it will then move to Client C if the lead can still be sold. 

Delivery groups process delivery ahead of the system's general automation, so the system will scan all delivery groups ahead of processing your other clients. 

How to Create a Delivery Group 

Navigate to the Groups section under client and select Delivery. Select Create and name your group. Next, select the Distribution Type for the group. 

Price : Priority: Round Robin: Weighted: Percentage: Geolocation: 

Once your group is created, you can drag and drop the Delivery Groups listed in order of priority. From there, you need to assign clients to the group. This can be done one of two ways, on the client level or delivery account level. Client-Level Delivery Group Setting: A client can be assigned to a delivery group by selecting a group in the drop-down within the Settings section of the client detail page. This will allow the system to scan all delivery accounts of the client. Delivery Account-Level Delivery Group Setting: This setting is found in the Advance Settings tab of the delivery account and will tell the system only to scan the delivery account assigned to the group rather than all of the client's delivery accounts. 

Related Articles 

Webhook Delivery Schedule Tab 

Client Settings - Distribution 

CSV Delivery Schedule Tab 

Batch Delivery - Delivery Schedule 

Clients - Client Groups 

Did this answer your question?

Introduction to Delivery Methods 

Overview of Delivery Methods 

Delivery Methods Overview 

Details on the available delivery types in LeadExec 

Webhook Delivery Method 

Instructions on how to configure Webhook Delivery Methods 

Webhook Delivery Method Configuration 

Webhook delivery methods allow you to send leads via JSON, XML, and HTTP requests. 

Webhook URL Endpoint Tab 

In the Webhook URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the 

delivery. 

Webhook Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the Webhook Authentication Tab. 

Webhook Field Mappings 

Webhook field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Webhook Request Body Tab 

JSON and XML schema configuration in the Webhook Request Body Tab 

Webhook Response Settings Tab 

Webhook Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Webhook Retry Settings Tab 

Use the Webhook Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Webhook Portal Permissions Tab 

Client Portal user webhook settings for IVR calls, File Attachments, and Analytic Data. 

Webhook Delivery Schedule Tab 

This tab allows you to create a specific schedule of when the client will be considered for lead delivery. 

Webhook Notifications Tab 

Use the Webhook Notifications Tab to create notifications for you or another team member for failed deliveries to the 

client. 

Ping-Post Delivery Method 

Instructions on how to configure Ping-Post Delivery Methods 

Ping-Post Delivery Method 

Inital steps for creating an outbound Ping Post delivery method 

Ping Post URL Endpoint Tab 

In the Ping Post URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the 

delivery. 

Ping Post Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the Ping Post Authentication Tab. 

Ping Post Field Mappings 

Ping Post field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Ping Post Request Body Tab 

JSON and XML schema configuration in the Ping Post Request Body Tab 

Ping Post Response Settings Tab 

Ping Post Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Ping Post Retry Settings Tab 

Use the Ping Post Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Ping Post Portal Permissions Tab 

Client Portal user ping post settings for IVR calls, File Attachments, and Analytic Data. 

Ping Post Delivery Schedule Tab 

Use the Ping Post Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead 

delivery. 

Ping Post Notifications Tab 

Use the Ping Post Notifications Tab to create notifications for you or another team member for failed ping-post deliveries 

to the client. 

Email Delivery Method 

Instructions on how to configure Email Delivery Methods 

Email Delivery Method Configuration 

Delivers the lead details in the body of an email template with a portal link. 

Email Field Mappings 

Email field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Email Delivery Email Template 

Create a custom email template to send your client lead data 

Email Delivery Settings 

To and From settings for lead email delivery. 

Email Retry Settings Tab 

Use the Email Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Email Portal Permissions Tab 

Client Portal user email settings for IVR calls, File Attachments, and Analytic Data. 

Email Delivery Schedule Tab 

Use the Email Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Email Notifications Tab 

Use the Email Notifications Tab to create notifications for you or another team member for failed email deliveries to the 

client. 

SMS Notification 

Instructions on how to configure SMS Notification Delivery Methods 

SMS Notification Delivery Method 

Delivers the lead details in the body of an SMS text message template with a portal link. 

SMS Field Mappings 

SMS field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

SMS Template Tab 

SMS Template Tab 

SMS Delivery Settings 

Phone number settings. 

SMS Retry Settings 

SMS Retry Settings 

SMS Portal Permissions Tab 

Client Portal user SMS settings for IVR calls, File Attachments, and Analytic Data. 

SMS Delivery Schedule 

Create an SMS Delivery Schedule of when the client will be considered for lead delivery. 

SMS Notifications Tab 

Use the SMS Notifications Tab to create notifications for you or another team member for failed deliveries to the client. 

FTP Delivery Method 

Instructions on how to configure FTP Delivery Methods 

FTP Delivery Method Configuration 

Provides the ability to drop an Excel, CSV, or TXT file to an external FTP server. 

FTP Field Mappings 

FTP field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

FTP Server 

FTP server endpoint settings 

FTP Authentication 

FTP credentials 

FTP Retry Settings 

Use the FTP Retry Settings to tell the system to retry delivery for failed delivery attempts. 

FTP Portal Permissions Tab 

Client Portal user FTP settings for IVR calls, File Attachments, and Analytic Data. 

FTP Delivery Schedule Tab 

Use the FTP Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

FTP Notifications Tab 

Create notifications for you or another team member for failed deliveries to the client 

CSV Attachment 

Instructions on how to configure CSV Attachment Delivery Methods 

CSV Attachment Delivery Method 

Delivers individual leads in a CSV file attachment via email. 

CSV Field Mappings 

CSV field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

CSV Attachment Delivery Settings Tab 

CSV Attachment Delivery Settings Tab 

CSV Retry Settings Tab 

Use the CSV Retry Settings to tell the system to retry delivery for failed delivery attempts. 

CSV Portal Permissions Tab 

Client Portal user CSV settings for IVR calls, File Attachments, and Analytic Data. 

CSV Delivery Schedule Tab 

Use the CSV Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

CSV Notifications Tab 

Use the CSV Notifications Tab to create notifications for you or another team member for failed CSV deliveries to the 

client. 

Batch Delivery Method 

Instructions on how to configure Batch Delivery Methods 

Batch Delivery Method 

Scheduled delivery designed to send all leads received during a set time frame via email with an excel of CSV attachment. 

Batch Delivery Mappings Tab 

Batch Delivery field mappings allow you to configure the field names the receiving system expects to the fields set on your 

lead type. 

Batch Delivery File Settings Tab 

File settings for batch delivery can vary based on your client’s requirements. This tab is used to configure the file settings. 

Batch Delivery Second File Settings Tab 

This tab allows you to configure the second file settings. 

Batch Delivery Email Template 

Create a custom template for your Batch Delivery email. 

Batch Delivery Delivery Settings Tab 

To and From settings for lead email batch delivery. 

Batch Delivery Batch Schedule 

Set the schedule of the Batch Delivery 

Batch Delivery Portal Permissions Tab 

Client Portal user batch delivery settings for IVR calls, File Attachments, and Analytic Data. 

Batch Delivery - Delivery Schedule 

Use the Batch Delivery Tab to create a specific schedule of when the client will be considered for lead delivery. 

Batch Delivery Notifications Tab 

Use the Batch Delivery Notifications Tab to create notifications for you or another team member for failed batch deliveries 

to the client. 

ClickPoint Integration 

Instructions on how to configure ClickPoint Integration Delivery Methods 

ClickPoint Integration Delivery Method Configuration 

Bidirectional delivery to ClickPoint. 

ClickPoint Integration URL Endpoint Tab 

In the ClickPoint Integration URL Endpoint tab, you will set where the leads post and what content is being sent. 

ClickPoint Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the ClickPoint Authentication Tab. 

ClickPoint Integration Field Mappings 

Integration field mappings allow you to configure the field names the receiving system expects to the fields set on your 

lead type. 

ClickPoint Integration Request Tab 

JSON and XML schema configuration in the Integration Request Tab 

ClickPoint Integration Response Settings Tab 

Integration Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

ClickPoint Integration - Retry Settings Tab 

Use the Integration Retry Settings to tell the system to retry delivery for failed delivery attempts. 

ClickPoint Integration - Portal Permissions Tab 

Client Portal user integration settings for IVR calls, File Attachments, and Analytic Data. 

ClickPoint Integration - Integration Options Tab 

ClickPoint's integration with LeadExec allows you to receive updates back from ClickPoint when actions or update take 

place. 

ClickPoint Integration - Delivery Schedule Tab 

Use the Integration Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

ClickPoint Integration - Notifications Tab 

Use the Integration Notifications Tab to create notifications for failed integration deliveries to the client. 

Lead Portal 

Instructions on how to configure Lead Portal Delivery Methods 

Lead Portal Delivery Method 

For clients who only access leads through the client portal. 

Portal Permissions Tab 

Client Portal user settings for IVR calls, File Attachments, and Analytic Data. 

Lead Portal Delivery Schedule Tab 

Use the Lead Portal Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead 

delivery. 

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping-Post Delivery Method 

Instructions on how to configure Ping-Post Delivery Methods 

By Chris 10 articles 

Ping-Post Delivery Method 

Inital steps for creating an outbound Ping Post delivery method 

Ping Post URL Endpoint Tab 

In the Ping Post URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the 

delivery. 

Ping Post Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the Ping Post Authentication Tab. 

Ping Post Field Mappings 

Ping Post field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Ping Post Request Body Tab 

JSON and XML schema configuration in the Ping Post Request Body Tab 

Ping Post Response Settings Tab 

Ping Post Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Ping Post Retry Settings Tab 

Use the Ping Post Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Ping Post Portal Permissions Tab 

Client Portal user ping post settings for IVR calls, File Attachments, and Analytic Data. 

Ping Post Delivery Schedule Tab 

Use the Ping Post Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead 

delivery. 

Ping Post Notifications Tab 

Use the Ping Post Notifications Tab to create notifications for you or another team member for failed ping-post deliveries 

to the client.

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Delivery Method 

Instructions on how to configure Email Delivery Methods 

By Chris 8 articles 

Email Delivery Method Configuration 

Delivers the lead details in the body of an email template with a portal link. 

Email Field Mappings 

Email field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Email Delivery Email Template 

Create a custom email template to send your client lead data 

Email Delivery Settings 

To and From settings for lead email delivery. 

Email Retry Settings Tab 

Use the Email Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Email Portal Permissions Tab 

Client Portal user email settings for IVR calls, File Attachments, and Analytic Data. 

Email Delivery Schedule Tab 

Use the Email Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Email Notifications Tab 

Use the Email Notifications Tab to create notifications for you or another team member for failed email deliveries to the 

client.

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification 

SMS Notification 

Instructions on how to configure SMS Notification Delivery Methods 

By Chris 8 articles 

SMS Notification Delivery Method 

Delivers the lead details in the body of an SMS text message template with a portal link. 

SMS Field Mappings 

SMS field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

SMS Template Tab 

SMS Template Tab 

SMS Delivery Settings 

Phone number settings. 

SMS Retry Settings 

SMS Retry Settings 

SMS Portal Permissions Tab 

Client Portal user SMS settings for IVR calls, File Attachments, and Analytic Data. 

SMS Delivery Schedule 

Create an SMS Delivery Schedule of when the client will be considered for lead delivery. 

SMS Notifications Tab 

Use the SMS Notifications Tab to create notifications for you or another team member for failed deliveries to the client.

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method 

FTP Delivery Method 

Instructions on how to configure FTP Delivery Methods 

By Chris 8 articles 

FTP Delivery Method Configuration 

Provides the ability to drop an Excel, CSV, or TXT file to an external FTP server. 

FTP Field Mappings 

FTP field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

FTP Server 

FTP server endpoint settings 

FTP Authentication 

FTP credentials 

FTP Retry Settings 

Use the FTP Retry Settings to tell the system to retry delivery for failed delivery attempts. 

FTP Portal Permissions Tab 

Client Portal user FTP settings for IVR calls, File Attachments, and Analytic Data. 

FTP Delivery Schedule Tab 

Use the FTP Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

FTP Notifications Tab 

Create notifications for you or another team member for failed deliveries to the client

©Copyright ClickPoint Software 

English 

Search for articles... 

All Collections Outbound Delivery Methods Introduction to Delivery Methods 

Introduction to Delivery Methods 

Overview of Delivery Methods 

By Chris 1 article 

Delivery Methods Overview 

Details on the available delivery types in LeadExec

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Delivery Method 

Instructions on how to configure Webhook Delivery Methods 

By Chris 10 articles 

Webhook Delivery Method Configuration 

Webhook delivery methods allow you to send leads via JSON, XML, and HTTP requests. 

Webhook URL Endpoint Tab 

In the Webhook URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the 

delivery. 

Webhook Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the Webhook Authentication Tab. 

Webhook Field Mappings 

Webhook field mappings allow you to configure the field names the receiving system expects to the fields set on your lead 

type. 

Webhook Request Body Tab 

JSON and XML schema configuration in the Webhook Request Body Tab 

Webhook Response Settings Tab 

Webhook Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Webhook Retry Settings Tab 

Use the Webhook Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Webhook Portal Permissions Tab 

Client Portal user webhook settings for IVR calls, File Attachments, and Analytic Data. 

Webhook Delivery Schedule Tab 

This tab allows you to create a specific schedule of when the client will be considered for lead delivery. 

Webhook Notifications Tab 

Use the Webhook Notifications Tab to create notifications for you or another team member for failed deliveries to the 

client.

©Copyright ClickPoint Software 

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment 

CSV Attachment 

Instructions on how to configure CSV Attachment Delivery Methods 

By Chris 7 articles 

CSV Attachment Delivery Method 

Delivers individual leads in a CSV file attachment via email. 

CSV Field Mappings 

CSV field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

CSV Attachment Delivery Settings Tab 

CSV Attachment Delivery Settings Tab 

CSV Retry Settings Tab 

Use the CSV Retry Settings to tell the system to retry delivery for failed delivery attempts. 

CSV Portal Permissions Tab 

Client Portal user CSV settings for IVR calls, File Attachments, and Analytic Data. 

CSV Delivery Schedule Tab 

Use the CSV Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

CSV Notifications Tab 

Use the CSV Notifications Tab to create notifications for you or another team member for failed CSV deliveries to the 

client.

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Method 

Instructions on how to configure Batch Delivery Methods 

By Chris 10 articles 

Batch Delivery Method 

Scheduled delivery designed to send all leads received during a set time frame via email with an excel of CSV attachment. 

Batch Delivery Mappings Tab 

Batch Delivery field mappings allow you to configure the field names the receiving system expects to the fields set on your 

lead type. 

Batch Delivery File Settings Tab 

File settings for batch delivery can vary based on your client’s requirements. This tab is used to configure the file settings. 

Batch Delivery Second File Settings Tab 

This tab allows you to configure the second file settings. 

Batch Delivery Email Template 

Create a custom template for your Batch Delivery email. 

Batch Delivery Delivery Settings Tab 

To and From settings for lead email batch delivery. 

Batch Delivery Batch Schedule 

Set the schedule of the Batch Delivery 

Batch Delivery Portal Permissions Tab 

Client Portal user batch delivery settings for IVR calls, File Attachments, and Analytic Data. 

Batch Delivery - Delivery Schedule 

Use the Batch Delivery Tab to create a specific schedule of when the client will be considered for lead delivery. 

Batch Delivery Notifications Tab 

Use the Batch Delivery Notifications Tab to create notifications for you or another team member for failed batch deliveries 

to the client.

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration 

Instructions on how to configure ClickPoint Integration Delivery Methods 

By Chris 11 articles 

ClickPoint Integration Delivery Method Configuration 

Bidirectional delivery to ClickPoint. 

ClickPoint Integration URL Endpoint Tab 

In the ClickPoint Integration URL Endpoint tab, you will set where the leads post and what content is being sent. 

ClickPoint Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the ClickPoint Authentication Tab. 

ClickPoint Integration Field Mappings 

Integration field mappings allow you to configure the field names the receiving system expects to the fields set on your 

lead type. 

ClickPoint Integration Request Tab 

JSON and XML schema configuration in the Integration Request Tab 

ClickPoint Integration Response Settings Tab 

Integration Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

ClickPoint Integration - Retry Settings Tab 

Use the Integration Retry Settings to tell the system to retry delivery for failed delivery attempts. 

ClickPoint Integration - Portal Permissions Tab 

Client Portal user integration settings for IVR calls, File Attachments, and Analytic Data. 

ClickPoint Integration - Integration Options Tab 

ClickPoint's integration with LeadExec allows you to receive updates back from ClickPoint when actions or update take 

place. 

ClickPoint Integration - Delivery Schedule Tab 

Use the Integration Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

ClickPoint Integration - Notifications Tab 

Use the Integration Notifications Tab to create notifications for failed integration deliveries to the client.

©Copyright ClickPoint Software 

Search for articles... 

All Collections Outbound Delivery Methods Lead Portal 

Lead Portal 

Instructions on how to configure Lead Portal Delivery Methods 

By Chris 4 articles 

Lead Portal Delivery Method 

For clients who only access leads through the client portal. 

Portal Permissions Tab 

Client Portal user settings for IVR calls, File Attachments, and Analytic Data. 

Lead Portal Delivery Schedule Tab 

Use the Lead Portal Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead 

delivery. 

Lead Portal Notifications Tab 

Use the Lead Portal Notifications Tab to create notifications for you or another team member for failed deliveries to the 

client.

Integrations - Unbounce Form Intake 

How to use third party solutions for lead intake 

Written by Gabriel Buck Updated over a week ago 

In order to integrate your Unbounce Forms with your LeadExec account, you will need to follow the steps located in this article. You will need to generate your posting instructions from within your LeadExec account before moving forward with your form integration. 

Once you have your posting documents you are going to want to log into your Unbounce account and select the form that you wish to integrate with LeadExec. 

This will bring you to your Form settings page. Click 'Edit' to bring up the form to begin the first steps of the integration. 

Once you are on your form page click on the field section of your form to bring up the field settings. 

Add all of the fields that you wish to capture on your form with in this section. Use your Posting documents to assist you with how to set up each field. ("The field names that you see here are strictly to be shown on the form. Do not worry about making them match with the Field Name column inside of your posting instructions those will be used when we set up the web hook integration into LeadExec.") From here we are going to get to set up the required fields to post into your LeadExec account. Each post into LeadExec will require you to input VID,LID and AID. Each one of these fields has a static value. To add these fields you will click Hidden Field. Give name the field VID and for Default Value use the value provided on your posting instructions. VID: 6240 LID: 4439 AID: 13278 

You are going to do this for every field that you want to enter your system with a static value. Once you have all of the fields on your posting instructions added to this section click Done and Save the page. Once you save the page click on the Unbounce Logo at the top left of your screen this will bring you back to your Forms Page. Select the form you edited. Once you are on the Forms Setting Page locate the WebHook: POST to URL option under the Leads & Form Integration section. 

Click on the WebHook: POST to URL option. This will bring you to the Webhook Wizard. Take the URL on your LeadExec posting instructions and paste it into the URL for POST text box. 

Click 'Continue'. Select Configure Field Mapping this will allow you to set the fields on your form to post over to your LeadExec Account. For each of the fields in this section, you are going to want to select the dropdown located under the WebHook (POST to URL) Field section and select Add New Field this option is the last one on the dropdown. Create the field name for the field you select. In this example, we are doing the Name field. LeadExec expects the field to be posted over as Name. Once you are done click Add Remote Field do this for each one of the fields on this section. 

Once you have this done you are good to click Done. This will allow leads to come into your LeadExec account from your Unbounce web forms! 

If you have any questions please feel free to reach out to your Account manager or input a ticket and support will make sure to assist you. 

Related Articles 

Lead Type Settings - Force ID's 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

LeadExec Concepts 

Introduction to Campaigns 

How to generate posting instructions 

Did this answer your question?

Search for articles... 

All Collections API Documentation & Integrations 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

Written by Chris Arenas Updated over a week ago 

Log into your Zapier account and select CreateZap! Name your Zap Select Webhooks by Zapier as your trigger Select "Catch Hook" as your trigger event Select copy to copy the endpoint URL you'll be posting leads to Next, it will ask you to send a test to the endpoint. Using a tool like Postman or Insomnia can be a quick solution for posting test data like this. Once you've posted a test lead, the Zapier webhook will read the request and pull the field names to build the webhook connection. Next, create your action. Here you will select the LeadExec app and select the action event of "Create Lead." The second step is to log in with your LeadExec credentials to connect Zapier with your LeadExec account. Once your account is connected, select the lead source and campaign. This will populate the lead fields from LeadExec. Here you'll map the fields you created in the webhook app to the fields from your lead type in LeadExec. Next, click the button to submit a test to post to LeadExec. Once you successfully test the action posting to LeadExec, you can enable your zap! 

Related Articles 

Lead Type Settings - Creating Lead Types 

Webhook Delivery Method Configuration 

Webhook Field Mappings 

Lead Source Settings - Lead Grading 

LeadExec Concepts 

Did this answer your question?

Search for articles... 

All Collections Reports Reports - Dashboard 

Reports - Dashboard 

Your dashboard is a quick and easy way to know if your making money with your leads 

Written by Gabriel Buck Updated over a week ago 

Your LeadExec Dashboard is useful for a quick snapshot of your overall lead generation performance. From this screen, you can see the total Leads Received, Leads Accepted, Leads Delivered, and Leads Rejected. 

Simply select Day, Month, or Year to get a quick view, or use the Filter button to view a specific LeadType, Lead Source, or Campaign. Once you have selected your view, the filter settings will remain, unless you select the override. 

Related Articles 

Distribution - How to Use This Screen 

Lead List - Viewing Lead Information 

Inbound - Using Quality Control with Campaigns 

Lead List - Lead Details 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Reports Reports - Pivot Reports 

Reports - Pivot Reports 

Create your own reports on any piece of lead data or use a pre-made template. 

Written by Gabriel Buck Updated over a week ago 

To create a pivot grid to show leads by the hour, navigate to either of these screens: Lead List or Distribution in the Leads section of the LeadExec navigation window. This example will show how to add this report from the Lead List screen. Click on Pivot to open the pivot grid screen. You can select a pre-configured Pivot report or create one from scratch. For example, select Lead Source from the Field Chooser and move into a row field; this will display all of your lead sources for this report. Next, select Date Added Quarter for your column field. Lastly, select Cost (Sum); this will now display your lead cost, by source, by a quarter from your lead list. 

Related Articles 

Lead Type Settings - Creating Lead Types 

Lead List - How to Move & Edit Columns 

Lead List - Create Pivot Report from List View 

Returns - Managing Lead Returns 

Reports - Dashboard 

Did this answer your question?

months, as well as a separate report that outlines leads and appointments. 

Additionally, the dashboard displays a list of upcoming appointments as well as a list of the most recent leads received. 

Leads 

Lead List Screen 

The lead list screen is where you can view and manage your leads. 

Lists all of your leads Search by date range, lead type, or search through all your leads Sort by clicking on the header of any row Click on “Open Lead” to view lead details 

Lead Details Screen 

When a lead is opened, you can: 

Send an email to the contact Forward the lead in an email to someone else Print or export the lead Return the lead (if it is out of your area) 

Files 

Add attachments (quotes, other information) that you want to keep with the lead. This can be done under the File tab. 

Appointments 

In the Appointments tab, you can create appointment reminders for the lead. 

To create a new appointment, click the Create button, which will populate the module below to input the appointment details. 

Creating Appointments 

You can only create appointments from within a lead. Open the lead, and then select the Create Appointment button. 

Creating Appointments: 

You can assign the appointment to any user of the system. They will receive an email of the appointment. 

Appointment Editor: 

Users can see their appointments, and admins can see ALL appointments in the Appointments tab 

Returns 

In some cases, leads can be returned. This depends on the contract you have with the account owner. 

The Returns screen is where you can manage your returned leads. 

Shows the status of the lead (Returned or not) Return Status (Approved, Denied, or Pending) Return Date (Date the lead was returned) Return Reason (Why you returned the lead) 

Billing 

Payment Methods 

The payment methods section is where you can manage the credit card(s) used for purchasing leads. 

Orders 

The Orders section is where you can review and manage all of your orders. Here you can sign up for any available orders, view order details, and pause and resume any open orders. 

Columns displayed in the Order List: 

_Order ID - The order unique identifier Start Date - Date the order started. End Date - End date of order ( if applicable) Status - Denotes the status of the order: Open, Pending, Closed, On Hold, Paused, Filled. Renewal - Denotes if the order is a renewal. Qty Ordered - Number of leads ordered. (This column will only contain values if the order is quantity-based.) Qty Received - The number of leads received for the order. Qty Remaining - Number of leads remaining for the order. (This column will only contain values if the order is quantity-based.) Order Total - The total price of the order. Received Cost - The dollar amount associated with the leads delivered against the order. Paid - The total dollar amount paid for the order. This will reflect any discounts, additional charges, or taxes applied to the order._ 

Creating orders 

Sometimes, you may have the option to create orders yourself. To create a new order, navigate to the Order List screen, select "New," and select the type of order you'd like from the dropdown menu. 

Invoices 

The Invoices tab allows you to view all of your invoices. You can also apply payments to any open invoices with outstanding balances. Invoice List: 

Invoices Details: 

Payments 

The payments tab provides details on all payments made against orders/invoices. 

You can filter transactions by date and export them to an Excel file for further analysis. 

Settings 

Settings for the portal can be found by clicking the avatar in the top right-hand corner of the portal. This is also where you can choose to log out of the portal. 

Profile 

Here, you can enter your contact information and enable the new lead notification setting. 

Security 

This is where you can update your portal login password. 

Users 

The portal allows you to add additional users to the portal with their own login information. You can also assign leads to any of these users once they are created. 

To add an additional user, click the +New button from the top menu. This will populate the module below, where you can enter their details. 

Admin Access: Allows the user to have access to all areas of the portal. View Downline: Allows someone to see all the leads “below” them. Enabled: Use this item to Enable or Disable a User. 

Related Articles 

Understanding the Client Portal 

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration Field Mappings 

ClickPoint Integration Field Mappings 

Integration field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started, click the Import button. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping because the system will default to the values set on the lead type. Next article: Request Body Tab >_ 

Related Articles 

Webhook Field Mappings 

FTP Field Mappings 

Email Field Mappings 

CSV Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Introduction to Delivery Methods 

Delivery Methods Overview 

Delivery Methods Overview 

Details on the available delivery types in LeadExec 

Written by Chris Arenas Updated over a week ago 

The Client Delivery Method is one of the most vital components of LeadExec. You have complete control over the technical way your leads are delivered to your buyers from this part of the system. Delivery Types: Below are the delivery method types available in LeadExec. Follow the links for specific instructions on configuring each delivery method type. Webhook: Deliver leads in HTTP POST, HTTP GET, JSON and XML formats. Ping-Post: Delivers partial lead details to the client, allowing them to bid on the lead. Email: Delivers the lead details in the body of an email template with a portal link. SMS Notification: Delivers the lead details in the body of an SMS text message template. FTP: Provides the ability to drop a CSV file to an external FTP server. CSV Attachment: Delivers individual leads in a CSV file attachment via email. Batch Delivery: Scheduled delivery designed to send all leads received during a set time frame via email with an excel or CSV attachment. ClickPoint Integration: Bidirectional delivery to ClickPoint. Lead Portal: Provides the ability to deliver the leads directly to the client lead portal. 

Related Articles 

Client Settings - Options 

Client List - Adding a New Client Part II 

ClickPoint Integration Delivery Method Configuration 

Ping-Post Delivery Method 

LeadExec Account Introduction 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment CSV Field Mappings 

CSV Field Mappings 

CSV field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

_To get started, click the Import button in the top menu of the Mappings tab. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping the values because the system will default to what’s set on the lead type._ 

Next article: Delivery Settings Tab> 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

FTP Field Mappings 

Email Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping-Post Delivery Method 

Ping-Post Delivery Method 

Inital steps for creating an outbound Ping Post delivery method 

Written by Chris Arenas Updated over a week ago 

Understanding Ping Post Delivery 

Using Ping Post allows you to deliver partial lead data to buyers before the lead is sold. The "ping" allows clients to preview the lead, and bid if they are willing to buy it. A ping might include the lead's state, loan amount, or credit profile but not the actual contact information. If the buyer responds with a successful response and the bid price meets your revenue requirements, LeadExec will then send the complete lead data to the buyer in the "post." 

Configuring a Ping Post Delivery 

In LeadExec, configuring a Ping Post delivery requires the use of two delivery methods: the PING delivery method, which is typically a standard HTTP Webhook delivery method, and the POST delivery method, using the PING/POST delivery method type. These two delivery methods work together through the delivery account when using the PING/POST delivery method as the primary delivery method. This article will guide you through setting up the PING/POST delivery method type, which handles the "post" component of the process. You will also need to set up the "ping" using an HTTP Webhook delivery method. 

_To get started, click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method. Delivery Type – Select PING/POST for your delivery type. Lead Type – Select the lead type the delivery method will be based on. Note that this setting cannot be changed after the delivery has been created. Environment – If your client has a separate test endpoint, you can change this setting to "Testing." Otherwise, leave this setting to the default of "Production." Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting with the General settings tab. Here, you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: URL Endpoint Tab >_ 

Related Articles 

Client List - Adding a New Client Part II 

Delivery Methods Overview 

Webhook Delivery Method Configuration 

Ping Post Lead Campaign Advanced Settings 

Creating a Ping Post Campaign 

Did this answer your question?

Profile 

Security 

Users 

Logging into the Client Portal 

_Your clients can log in to the portal at http://www.lead-backoffice.com note: this URL may be different depending on the setting you have in place with the Branding section of your LeadExec account. More info can be found here. The client will use the credentials set in their client details page in LeadExec. Once logged in, the user will be guided to the portal dashboard. The portal's main navigation is located on the left-hand side, providing easy access to each section and its associated pages._ 

Dashboard 

The Dashboard provides a report of leads received daily for the current and previous months, as well as a separate report that outlines leads and appointments. 

Additionally, the dashboard displays a list of upcoming appointments as well as a list of the most recent leads received. 

Lead List Screen 

The lead list screen is where users can view and manage their leads. 

Lists all leads delivered to the client Search is available by date range, and lead type, or search through all your leads Sorting can be done by clicking on the header of any row “Open Lead” allows users to view the details of the selected lead. 

Lead Details Screen 

When a lead is opened, users can: 

Send an email to the contact Forward the lead in an email to someone else Print or export the lead Return the lead (if it is out of your area) 

Files 

Add attachments (quotes, other information) that you want to keep with the lead. This can be done under the File tab. 

Appointments 

In the Appointments tab, users can create appointment reminders for the lead. 

To create a new appointment, click the Create button, which will populate the module below to input the appointment details. 

Creating Appointments 

Appointments can be created from within the lead details page. Open the lead, and then select the Create Appointment button. Creating Appointments: 

You can assign the appointment to any user of the system. They will receive an email of the appointment. Appointment Editor: 

Users can see their appointments, and admins can see ALL appointments in the Appointments tab. 

Returns 

In some cases, leads can be returned. This depends on the contract you have in place with your clients. 

The Returns screen is where users can manage their returned leads. 

Shows the status of the lead (Returned or not) Return Status (Approved, Denied, or Pending) Return Date (Date the lead was returned) Return Reason (Why you returned the lead) 

Orders Tab 

Within the client portal, your Client has access to sign up for any available orders, view order details, and pause and resume any open orders. 

Orders List: 

Columns displayed in the Order List: 

_Order ID - The order unique identifier Start Date - Date the order started. End Date - End date of order ( if applicable) Status - Denotes the status of the order: Open, Pending, Closed, On Hold, Paused, Filled. Renewal - Denotes if the order is a renewal. Qty Ordered - Number of leads ordered. (This column will only contain values if the order is quantity-based.) Qty Received - The number of leads received for the order. Qty Remaining - Number of leads remaining for the order. (This column will only contain values if the order is quantity-based.) Order Total - The total price of the order. Received Cost - The dollar amount associated with the leads delivered against the order. Paid - The total dollar amount paid for the order. This will reflect any discounts, additional charges, or taxes applied to the order._ 

Creating Orders 

In some cases, there may be orders available to self-create. To create a new order, navigate to the Order List screen, select "New," and select the type of order you'd like from the dropdown menu. 

Invoices 

The Invoices tab allows users to view all of their invoices. They can also apply payments to any open invoices with outstanding balances. Invoice List: 

Invoices Details: 

Payments 

The payments tab provides details on all payments made against orders/invoices. 

Users can filter transactions by date and export them to an Excel file for further analysis. 

Settings 

Settings for the portal can be found by clicking the avatar in the top right-hand corner of the portal. This is also where users can choose to log out of the portal. 

Profile 

Here, users can enter their contact information and enable the new lead notification setting. 

Security 

This is where users can update their portal login password. 

Users 

The portal allows them to add additional users to the portal with their own login information. They can also assign leads to any of these users once they are created. 

To add an additional user, click the +New button from the top menu. This will populate the module below, where they can enter their details. 

Admin Access: Allows the user to have access to all areas of the portal. View Downline: Allows someone to see all the leads “below” them. Enabled: Use this item to Enable or Disable a User 

Related Articles 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Field Mappings 

Ping Post Field Mappings 

Ping Post field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started with your field mappings, you'll want to add the Ping reference field. This system field references the ping response from the client and pulls in the unique identifier for accepted pings. The receiving system will require the correct identifier to be included with the full lead data to match the post with the ping. In the example shown above, the receiving system expects "OrderID" as the field name. 

Once you have the Ping Reference field configured, you can begin to map the rest of your lead fields. Start by clicking the Import button in the top menu of the Mappings tab. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system expects based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above, by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping because the system will default to the values set on the lead type. Next article: Request Body Tab>_ 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

Email Field Mappings 

CSV Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Delivery Method Configuration 

Webhook Delivery Method Configuration 

Webhook delivery methods allow you to send leads via JSON, XML, and HTTP requests. 

Written by Chris Arenas Updated over a week ago 

_This article will provide step by step instructions for creating a HTTP Webhook delivery method. The examples shown in this tutorial are for a JSON webhook delivery method. Let's Get Started! Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select Webhook for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode, where you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you have just saved. If your settings look good, you can move on to the next tab. Next article: URL Endpoint Tab >_ 

Related Articles 

ClickPoint Integration Delivery Method Configuration 

Email Delivery Method Configuration 

CSV Attachment Delivery Method 

Ping-Post Delivery Method 

Batch Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Delivery Method Configuration 

Email Delivery Method Configuration 

Delivers the lead details in the body of an email template with a portal link. 

Written by Chris Arenas Updated over a week ago 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select Email for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: Mappings Tab >_ 

Related Articles 

Webhook Delivery Method Configuration 

CSV Attachment Delivery Method 

Batch Delivery Method 

SMS Notification Delivery Method 

Lead Portal Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification 

SMS Notification Delivery Method 

SMS Notification Delivery Method 

Delivers the lead details in the body of an SMS text message template with a portal link. 

Written by Chris Arenas Updated over a week ago 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select SMS for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab, Mappings>_ 

Related Articles 

Webhook Delivery Method Configuration 

Email Delivery Method Configuration 

CSV Attachment Delivery Method 

Batch Delivery Method 

Lead Portal Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method 

FTP Delivery Method Configuration 

FTP Delivery Method Configuration 

Provides the ability to drop an Excel, CSV, or TXT file to an external FTP server. 

Written by Chris Arenas Updated over a week ago 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select FTP for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: Mappings Tab >_ 

Related Articles 

Webhook Delivery Method Configuration 

ClickPoint Integration Delivery Method Configuration 

Email Delivery Method Configuration 

CSV Attachment Delivery Method 

Batch Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment 

CSV Attachment Delivery Method 

CSV Attachment Delivery Method 

Delivers individual leads in a CSV file attachment via email. 

Written by Chris Arenas Updated over a week ago 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select CSV Attachment for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: Mappings Tab >_ 

Related Articles 

Webhook Delivery Method Configuration 

FTP Delivery Method Configuration 

Email Delivery Method Configuration 

Batch Delivery Method 

SMS Notification Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration Delivery Method Configuration 

ClickPoint Integration Delivery Method Configuration 

Bidirectional delivery to ClickPoint. 

Written by Chris Arenas Updated over a week ago 

ClickPoint Lead Manager's integration with LeadExec enables real-time updates from SalesExec whenever actions or changes occur. This includes updates to the following fields within Lead Manager: 

Lead Status Current Workflow Last Action Taken Date Closed 

Additionally, this integration will update basic lead information and upload any file attachments added to the lead records to ClickPoint SalesExec. 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select ClickPoint Integration for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode, where you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: URL Endpoint Tab >_ 

Related Articles 

Client List - Adding a New Client Part II 

Delivery Methods Overview 

Webhook Delivery Method Configuration 

Ping-Post Delivery Method 

Batch Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Delivery Schedule Tab 

Webhook Delivery Schedule Tab 

This tab allows you to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Lead Portal Portal Permissions Tab 

Portal Permissions Tab 

Client Portal user settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

SMS Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Method 

Batch Delivery Method 

Scheduled delivery designed to send all leads received during a set time frame via email with an excel of CSV attachment. 

Written by Chris Arenas Updated over a week ago 

_Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select Batch Delivery for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: Field Mappings Tab >_ 

Related Articles 

Webhook Delivery Method Configuration 

ClickPoint Integration Delivery Method Configuration 

FTP Delivery Method Configuration 

Email Delivery Method Configuration 

CSV Attachment Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Lead Portal Lead Portal Delivery Method 

Lead Portal Delivery Method 

For clients who only access leads through the client portal. 

Written by Chris Arenas Updated over a week ago 

_Using the lead portal delivery method is a quick way to get your clients set up to receive leads. The client will only have to log in to the client portal, which can be used as a micro-CRM, to access their leads. To note, leads delivered through all other delivery methods are also available in the client portal. Click the Create button in the upper left-hand corner in Delivery Methods. This will generate a popup window to input the basic settings of the delivery method. Description – Name your delivery method Delivery Type – Select Lead Portal for your delivery type. Lead Type – Select the lead type the delivery method will be based on. To note, this setting cannot be changed after the delivery has been created. Environment – If your client has a separate endpoint for testing, this allows you to set the delivery account in “Testing” mode when you can set a testing endpoint. Once you’ve made your selections, hit the Create button. This will move you to the main settings page of the delivery method, starting you out at the General settings tab. Here you can review the settings you just saved. If your settings look good, you can move on to the next tab. Next article: Portal Permissions >_ 

Related Articles 

Webhook Delivery Method Configuration 

Email Delivery Method Configuration 

CSV Attachment Delivery Method 

Batch Delivery Method 

SMS Notification Delivery Method 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment 

CSV Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Use the CSV Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery - Delivery Schedule 

Batch Delivery - Delivery Schedule 

Use the Batch Delivery Tab to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook URL Endpoint Tab 

Webhook URL Endpoint Tab 

In the Webhook URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the delivery. 

Written by Chris Arenas Updated over a week ago 

Method: Select the method type outlined in the client’s posting documentation. Production URL: Input the receiving system’s production endpoint URL. Testing/ Sandbox URL: Input the receiving system’s testing endpoint URL if applicable. Content-Type: Select the content type outlined in the client’s posting documentation. Timeout: Set the desired timeout for the delivery. This tells the system how long to wait for a response from the receiving system before timing out. The default setting is for 30 seconds. Custom Headers: Here, you can input any custom headers required by the receiving system. Next article: Authentication Tab > 

Related Articles 

Webhook Delivery Method Configuration 

Webhook Request Body Tab 

Webhook Response Settings Tab 

ClickPoint Integration URL Endpoint Tab 

Ping Post URL Endpoint Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Authentication Tab 

Webhook Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the Webhook Authentication Tab. 

Written by Chris Arenas Updated over a week ago 

Basic and Digest Authentications: 

For Basic and Digest authentications, this is where you will set the username and password supplied by your client. OAuth 2.0: 

Provides the ability to authenticate with an OAuth server using Client Credentials or Password. Here you will set the TOKEN URL, select the required Grant Type and input the credentials supplied by the client. Bearer Token: 

If the client’s system uses Bearer Token authentication, this is where you will set the Prefix and Token provided by the client. Next article: Field Mappings Tab > 

Related Articles 

Webhook URL Endpoint Tab 

ClickPoint Authentication Tab 

Ping Post Authentication Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Field Mappings 

Webhook Field Mappings 

Webhook field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started, click the Import button. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping because the system will default to the values set on the lead type. Next article: Request Body Tab >_ 

Related Articles 

ClickPoint Integration Field Mappings 

FTP Field Mappings 

Email Field Mappings 

CSV Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Retry Settings Tab 

Webhook Retry Settings Tab 

Use the Webhook Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions Tab > 

Related Articles 

ClickPoint Integration - Retry Settings Tab 

FTP Retry Settings 

Ping Post Retry Settings Tab 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Response Settings Tab 

Webhook Response Settings Tab 

Webhook Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Written by Chris Arenas Updated over a week ago 

Result Search – Here you input the response the system should look for to denote a successful send. Regular Expression – Check when regular expressions are used in the client’s response. Price Search – This will be used to search for any prices returned in the client response. Ping during sort – This should be selected only when configuring a Ping/Post delivery. Ping Reference Search – This will capture the ping token when a Ping/Post method is enabled. Redirect URL Search – Will get a redirect URL from your clients response to send back to your form to process a redirect. Next article: Retry Settings Tab > 

Related Articles 

Webhook URL Endpoint Tab 

Webhook Retry Settings Tab 

ClickPoint Integration Response Settings Tab 

Ping Post Response Settings Tab 

How to Set Up the LeadExec Zapier App for Inbound Leads via Webhook 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Portal Permissions Tab 

Webhook Portal Permissions Tab 

Client Portal user webhook settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

ClickPoint Integration - Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Request Body Tab 

Webhook Request Body Tab 

JSON and XML schema configuration in the Webhook Request Body Tab 

Written by Chris Arenas Updated over a week ago 

The request body is used for XML and JSON deliveries. This is where you will add the schema outlined in the client’s posting documentation. Use the dropdown menu to replace the lead field values in the schema with the delivery method tags. The tags will auto-populate the field values in the delivery based on these settings. If you're creating an HTTP Post delivery using the URL-encoded content-type, you can bypass this step. Next article: Response Settings Tab > 

Related Articles 

Webhook Delivery Method Configuration 

Webhook URL Endpoint Tab 

Webhook Field Mappings 

ClickPoint Integration Request Tab 

Ping Post Request Body Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Webhook Delivery Method 

Webhook Notifications Tab 

Webhook Notifications Tab 

Use the Webhook Notifications Tab to create notifications for you or another team member for failed deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

FTP Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

Batch Delivery Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post URL Endpoint Tab 

Ping Post URL Endpoint Tab 

In the Ping Post URL Endpoint tab, you will set where the leads are posting to and what type of content is being sent in the delivery. 

Written by Chris Arenas Updated over a week ago 

Method: Select the method type outlined in the client’s posting documentation. Generally, this will be POST. Production URL: Input the receiving system’s production endpoint URL. Testing/ Sandbox URL: Input the receiving system’s testing endpoint URL if applicable. Content-Type: Select the content type outlined in the client’s posting documentation. Timeout: Set the desired timeout for the delivery. This tells the system how long to wait for a response from the receiving system before timing out. The default setting is for 30 seconds. Custom Headers: Here, you can input any custom headers required by the receiving system. Next article: Authentication Tab > 

Related Articles 

Webhook URL Endpoint Tab 

ClickPoint Integration URL Endpoint Tab 

Ping-Post Delivery Method 

Ping Post Request Body Tab 

Ping Post Response Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Request Body Tab 

Ping Post Request Body Tab 

JSON and XML schema configuration in the Ping Post Request Body Tab 

Written by Chris Arenas Updated over a week ago 

The request body is used for XML and JSON deliveries. This is where you will add the schema outlined in the client’s posting documentation. Use the dropdown menu to set the lead field values in the schema with the field tags. The tags will auto-populate the field values in the delivery based on these settings. The example shown is using an XML schema. If you're creating an HTTP Post delivery using the URL-encoded content-type, you can bypass this step. Next article: Response Settings Tab> 

Related Articles 

Webhook Request Body Tab 

ClickPoint Integration Request Tab 

Ping Post Field Mappings 

Ping Post Notifications Tab 

Creating a Ping Post Campaign 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Response Settings Tab 

Ping Post Response Settings Tab 

Ping Post Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Written by Chris Arenas Updated over a week ago 

Result Search – Here you input the response the system should look for to denote a successful send. Regular Expression – Check when regular expressions are used in the client’s response. Price Search – This will be used to search for any prices returned in the client response. Ping during sort – This should be selected only when configuring a Ping/Post delivery. Ping Reference Search – This will capture the ping token when a Ping/Post method is enabled. Redirect URL Search – Will get a redirect URL from your clients response to send back to your form to process a redirect. Next article: Retry Settings Tab> 

Related Articles 

Webhook Response Settings Tab 

ClickPoint Integration Response Settings Tab 

Ping Post URL Endpoint Tab 

Ping Post Field Mappings 

Ping Post Lead Campaign Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Portal Permissions Tab 

Ping Post Portal Permissions Tab 

Client Portal user ping post settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab> 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Retry Settings Tab 

Ping Post Retry Settings Tab 

Use the Ping Post Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions Tab> 

Related Articles 

Webhook Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

FTP Retry Settings 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Use the Ping Post Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The system will not consider the client for leads outside of this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Ping-Post Delivery Method 

Ping Post Notifications Tab 

Ping Post Notifications Tab 

Use the Ping Post Notifications Tab to create notifications for you or another team member for failed ping-post deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

FTP Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Delivery Email Template 

Email Delivery Email Template 

Create a custom email template to send your client lead data 

Written by Chris Arenas Updated over a week ago 

Email Format – Emails can be sent in Rich HTML, Plain HTML, or PlainText. Rich HTML is the default. Subject – Input the subject line for the email template. This field is required. Template Body - Here, you will add the body content of your email template. You can use the template editor to add images, hyperlinks, text formatting, HTML, etc. In addition, you can use the dropdown below the editor to add tags for inserting variable lead or system data into the email body. Next article: Delivery Settings> 

Related Articles 

Email Field Mappings 

Batch Delivery Email Template 

SMS Template Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Delivery Settings 

Email Delivery Settings 

To and From settings for lead email delivery. 

Written by Chris Arenas Updated over a week ago 

From Email Address – This will be the address your client sees in their email when a lead is viewed. To Email Address – The system will deliver emails to the address set on the client record by default. Otherwise, you can input the destination email(s) in this field. To add multiple emails, use a comma to separate them, ie: (email1@email.com,email2@email.com) Copy (CC) Addresses – Used to set up CC options for delivery. Blind Copy (BCC) Addresses – Used to set up BCC options for delivery. SMTP Settings (Optional) This can be used if you want to use your own SMTP server for Email Delivery. It will require the SMTP Server Address SMTP Server – Input the SMPT server addresses here. SMTP Authentication Required – Select whether SMTP Authentication is required. SMTP Username – Enter SMTP username if SMTP Authentication is enabled. SMTP Password – Enter SMTP password if SMTP Authentication is enabled. Next article: Retry Settings> 

Related Articles 

Email Delivery Email Template 

Email Delivery Schedule Tab 

CSV Attachment Delivery Settings Tab 

Batch Delivery Delivery Settings Tab 

Verifying Emails and Domains for CAN-SPAM 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Retry Settings Tab 

Email Retry Settings Tab 

Use the Email Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions Tab > 

Related Articles 

Webhook Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

FTP Retry Settings 

Ping Post Retry Settings Tab 

CSV Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Delivery Schedule Tab 

Email Delivery Schedule Tab 

Use the Email Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

FTP Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Portal Permissions Tab 

Email Portal Permissions Tab 

Client Portal user email settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

CSV Portal Permissions Tab 

SMS Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Notifications Tab 

Email Notifications Tab 

Use the Email Notifications Tab to create notifications for you or another team member for failed email deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

FTP Notifications Tab 

CSV Notifications Tab 

SMS Notifications Tab 

Lead Portal Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Email Delivery Method 

Email Field Mappings 

Email Field Mappings 

Email field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started, click the Import button. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping the values because the system will default to what’s set on the lead type._ 

Next article: Email Template> 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

FTP Field Mappings 

CSV Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Field Mappings 

SMS Field Mappings 

SMS field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started, click the Import button in the top menu of the Mappings tab. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping because the system will default to the values set on the lead type. Next article: Template Tab>_ 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

FTP Field Mappings 

Email Field Mappings 

Ping Post Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification 

SMS Portal Permissions Tab 

SMS Portal Permissions Tab 

Client Portal user SMS settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

NEEDS NEW IMAGEClient portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Retry Settings 

SMS Retry Settings 

SMS Retry Settings 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions Tab > 

Related Articles 

Webhook Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

FTP Retry Settings 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Template Tab 

SMS Template Tab 

SMS Template Tab 

Written by Chris Arenas Updated over a week ago 

Template Body - Here, you will add the body content of your email template. Use the dropdown below the editor to add tags for inserting variable lead or system data into the email body. Next article: Delivery Settings> 

Related Articles 

Webhook Request Body Tab 

ClickPoint Integration Request Tab 

Email Delivery Email Template 

Ping Post Request Body Tab 

Batch Delivery Email Template 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Delivery Schedule 

SMS Delivery Schedule 

Create an SMS Delivery Schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

ClickPoint Integration - Delivery Schedule Tab 

FTP Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Batch Delivery - Delivery Schedule 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Delivery Settings 

SMS Delivery Settings 

Phone number settings. 

Written by Chris Arenas Updated over a week ago 

Here you will input the Phone Number your client receives texted lead information. Next article: Retry Settings Tab> 

Related Articles 

Email Delivery Settings 

CSV Attachment Delivery Settings Tab 

SMS Retry Settings 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods SMS Notification SMS Notifications Tab 

SMS Notifications Tab 

Use the SMS Notifications Tab to create notifications for you or another team member for failed deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply._ 

Related Articles 

Webhook Notifications Tab 

FTP Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

Batch Delivery Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method FTP Field Mappings 

FTP Field Mappings 

FTP field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

_To get started, click the Import button in the top menu of the Mappings tab. This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping the values because the system will default to what’s set on the lead type. Next article: FTP Server>_ 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

Email Field Mappings 

CSV Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method FTP Server 

FTP Server 

FTP server endpoint settings 

Written by Chris Arenas Updated over a week ago 

Here you will input the FTP server address. There are also options to set a testing endpoint and file path if required by the client. Next article: FTP Authentication> 

Related Articles 

Webhook URL Endpoint Tab 

ClickPoint Integration URL Endpoint Tab 

FTP Delivery Method Configuration 

FTP Authentication 

Ping Post URL Endpoint Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method FTP Authentication 

FTP Authentication 

FTP credentials 

Written by Chris Arenas Updated over a week ago 

In this tab you will input the FTP credentials provided by your client. · Username · Password Next article: FTP Retry Settings> 

Related Articles 

Webhook Authentication Tab 

ClickPoint Authentication Tab 

FTP Delivery Method Configuration 

Ping Post Authentication Tab 

FTP Server 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method FTP Retry Settings 

FTP Retry Settings 

Use the FTP Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions> 

Related Articles 

Webhook Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

Ping Post Retry Settings Tab 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method 

FTP Portal Permissions Tab 

FTP Portal Permissions Tab 

Client Portal user FTP settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab> 

Related Articles 

Webhook Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

SMS Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method 

FTP Delivery Schedule Tab 

FTP Delivery Schedule Tab 

Use the FTP Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

ClickPoint Integration - Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods FTP Delivery Method FTP Notifications Tab 

FTP Notifications Tab 

Create notifications for you or another team member for failed deliveries to the client 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

Batch Delivery Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment 

CSV Attachment Delivery Settings Tab 

CSV Attachment Delivery Settings Tab 

CSV Attachment Delivery Settings Tab 

Written by Chris Arenas Updated over a week ago 

From Email Address – This will be the address your client sees in their email when a lead is viewed. To Email Address – The system will deliver emails to the address set on the client record by default. Otherwise, you can input the destination email(s) in this field. To add multiple emails, use a comma to separate them, ie: (email1@email.com,email2@email.com) Copy (CC) Addresses – Used to set up CC options for delivery. Blind Copy (BCC) Addresses – Used to set up BCC options for delivery. SMTP Settings (Optional) This can be used if you want to use your own SMTP server for Email Delivery. It will require the SMTP Server Address SMTP Server – Input the SMPT server addresses here. SMTP Authentication Required – Select whether SMTP Authentication is required. SMTP Username – Enter SMTP username if SMTP Authentication is enabled. SMTP Password – Enter SMTP password if SMTP Authentication is enabled. Next article: Retry Settings Tab> 

Related Articles 

Email Delivery Settings 

CSV Attachment Delivery Method 

CSV Delivery Schedule Tab 

CSV Notifications Tab 

Batch Delivery Delivery Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment CSV Retry Settings Tab 

CSV Retry Settings Tab 

Use the CSV Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions Tab > 

Related Articles 

Webhook Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

FTP Retry Settings 

Ping Post Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment 

CSV Portal Permissions Tab 

CSV Portal Permissions Tab 

Client Portal user CSV settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

SMS Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods CSV Attachment CSV Notifications Tab 

CSV Notifications Tab 

Use the CSV Notifications Tab to create notifications for you or another team member for failed CSV deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

FTP Notifications Tab 

Email Notifications Tab 

Batch Delivery Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

Files Settings for Batch Delivery 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery File Settings Tab 

Batch Delivery File Settings Tab 

File settings for batch delivery can vary based on your client’s requirements. This tab is used to configure the file settings. 

Written by Chris Arenas Updated over a week ago 

Files Settings for Batch Delivery 

File Format – Select the type of file you want to send in the delivery. The available file types are Excel, CSV, Tab Delimited, Custom Delimited, and XML. File Delimiter – Here, you will input your delimiter if using a custom delimiter. Include Header Row – Check this setting if the first row of your file contains headers. File Name – Set the name of the file being delivered. Delivery Method – Select whether the file should be delivered as an attachment or via a clickable download link. Send Empty Files – This setting tells the system if the delivery should process if the client did not receive any leads during the scheduled time frame. Next article: Second File Settings> 

Related Articles 

Batch Delivery Second File Settings Tab 

Batch Delivery Delivery Settings Tab 

Batch Delivery Batch Schedule 

Batch Delivery Portal Permissions Tab 

Batch Delivery Notifications Tab 

Did this answer your question?

Search for articles... 

Second File Settings 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Second File Settings Tab 

Batch Delivery Second File Settings Tab 

This tab allows you to configure the second file settings. 

Written by Chris Arenas Updated over a week ago 

Second File Settings 

File Format – Select the type of file you want to send in the delivery. The available file types are Excel, CSV, Tab Delimited, Custom Delimited, and XML. File Delimiter – Here, you will input your delimiter if using a custom delimiter. Include Header Row – Check this setting if the first row of your file contains headers. File Name – Set the name of the file being delivered. Next article: Template> 

Related Articles 

Delivery Methods Overview 

CSV Attachment Delivery Settings Tab 

Batch Delivery Mappings Tab 

Batch Delivery File Settings Tab 

Batch Delivery Delivery Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Email Template 

Batch Delivery Email Template 

Create a custom template for your Batch Delivery email. 

Written by Chris Arenas Updated over a week ago 

Email Format – Emails can be sent in Rich HTML, Plain HTML, or PlainText. Rich HTML is the default. Subject – Input the subject line for the email template. This field is required. Template Body - Here, you will add the body content of your email template. You can use the template editor to add images, hyperlinks, text formatting, HTML, etc. In addition, you can use the dropdown below the editor to add tags for inserting variable lead or system data into the email body. Next article: Delivery Settings> 

Related Articles 

Delivery Methods Overview 

Email Delivery Email Template 

Batch Delivery Delivery Settings Tab 

Batch Delivery Notifications Tab 

SMS Template Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Delivery Settings Tab 

Batch Delivery Delivery Settings Tab 

To and From settings for lead email batch delivery. 

Written by Chris Arenas Updated over a week ago 

From Email Address – This will be the address your client sees in their email when a lead is viewed. To Email Address – The system will deliver emails to the address set on the client record by default. Otherwise, you can input the destination email(s) in this field. To add multiple emails, use a comma to separate them, ie: (email1@email.com,email2@email.com) Copy (CC) Addresses – Used to set up CC options for delivery. Blind Copy (BCC) Addresses – Used to set up BCC options for delivery. SMTP Settings (Optional) This can be used if you want to use your own SMTP server for Email Delivery. It will require the SMTP Server Address SMTP Server – Input the SMPT server addresses here. SMTP Authentication Required – Select whether SMTP Authentication is required. SMTP Username – Enter SMTP username if SMTP Authentication is enabled. SMTP Password – Enter SMTP password if SMTP Authentication is enabled. Next article: Batch Schedule> 

Related Articles 

Email Delivery Settings 

CSV Attachment Delivery Settings Tab 

Batch Delivery File Settings Tab 

Batch Delivery Batch Schedule 

Batch Delivery Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Mappings Tab 

Batch Delivery Mappings Tab 

Batch Delivery field mappings allow you to configure the field names the receiving system expects to the fields set on your lead type. 

Written by Chris Arenas Updated over a week ago 

To get started, click the Import button in the top menu of the Mappings tab This will generate a popup window containing all the lead fields from your lead type. This is where you will map the existing lead fields in your lead type to the field names your client’s system is expecting based on their posting documentation. You can customize each field name or use the default values set on the lead type. You can also add any additional fields the client requires, such as a static field denoting if the delivery is in test mode, as shown in the example above by clicking the New button and adding your lead field. 

_This is also where you’ll add enumerated values for dropdown fields. First, select the lead field and click edit to add enumerated values. Next, toggle the “Has Value Mappings” button to Yes, which will expand the window. Finally, click the “Add” button to begin mapping your enumerated values. If the receiving system is expecting the same enumerated values as set on your lead type, you can skip mapping because the system will default to the values set on the lead type. Next article: File Settings Tab >_ 

Related Articles 

Webhook Field Mappings 

ClickPoint Integration Field Mappings 

FTP Field Mappings 

Email Field Mappings 

SMS Field Mappings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Batch Schedule 

Batch Delivery Batch Schedule 

Set the schedule of the Batch Delivery 

Written by Chris Arenas Updated over a week ago 

Frequency – Batch delivery offers the ability to send leads individually in real-time or in a single file on scheduled delivery days. The single file will contain all leads received since the previous delivery. Delivery Time – Here, you will set the time of day the batch delivery should take place if using a scheduled delivery. Delivery Days – Here, you will set the days of the week the batch delivery should take place if using a scheduled delivery. Next article: Portal Permission> 

Related Articles 

CSV Delivery Schedule Tab 

Batch Delivery File Settings Tab 

Batch Delivery Delivery Settings Tab 

Batch Delivery - Delivery Schedule 

SMS Delivery Schedule 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Portal Permissions Tab 

Batch Delivery Portal Permissions Tab 

Client Portal user batch delivery settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Delivery Schedule Tab > 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Batch Delivery Method 

Batch Delivery Notifications Tab 

Batch Delivery Notifications Tab 

Use the Batch Delivery Notifications Tab to create notifications for you or another team member for failed batch deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

FTP Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration URL Endpoint Tab 

ClickPoint Integration URL Endpoint Tab 

In the ClickPoint Integration URL Endpoint tab, you will set where the leads post and what content is being sent. 

Written by Chris Arenas Updated over a week ago 

Method: Select the method type outlined in the client’s posting documentation. Production URL: Input the receiving system’s production endpoint URL. Testing/ Sandbox URL: Input the receiving system’s testing endpoint URL if applicable. Content-Type: Select the content type outlined in the client’s posting documentation. Timeout: Set the desired timeout for the delivery. This tells the system how long to wait for a response from the receiving system before timing out. The default setting is for 30 seconds. Custom Headers: Here, you can input any custom headers required by the receiving system. Next article: Authentication Tab > 

Related Articles 

Webhook URL Endpoint Tab 

ClickPoint Integration Delivery Method Configuration 

ClickPoint Integration Request Tab 

ClickPoint Integration Response Settings Tab 

Ping Post URL Endpoint Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Authentication Tab 

ClickPoint Authentication Tab 

Use Basic, Digest, Bearer Token, and OAuth 2.0 authentication types in the ClickPoint Authentication Tab. 

Written by Chris Arenas Updated over a week ago 

Basic and Digest Authentications: 

For Basic and Digest authentications, this is where you will set the username and password supplied by your client. OAuth 2.0: 

Provides the ability to authenticate with an OAuth server using Client Credentials or Password. Here you will set the TOKEN URL, select the required Grant Type and input the credentials supplied by the client. Bearer Token: 

If the client’s system uses Bearer Token authentication, this is where you will set the Prefix and Token provided by the client. Next article: Field Mappings Tab > 

Related Articles 

Webhook Authentication Tab 

Ping Post Authentication Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration Request Tab 

ClickPoint Integration Request Tab 

JSON and XML schema configuration in the Integration Request Tab 

Written by Chris Arenas Updated over a week ago 

The request body is used for XML and JSON deliveries. This is where you will add the schema outlined in the client’s posting documentation. Use the dropdown menu to replace the lead field values in the schema with the delivery method tags. The tags will auto-populate the field values in the delivery based on these settings. If you're creating an HTTP Post delivery using the URL-encoded content-type, you can bypass this step. Next article: Response Settings Tab > 

Related Articles 

Webhook Request Body Tab 

ClickPoint Integration URL Endpoint Tab 

ClickPoint Integration Field Mappings 

ClickPoint Integration - Notifications Tab 

Ping Post Request Body Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration Response Settings Tab 

ClickPoint Integration Response Settings Tab 

Integration Response Settings tell LeadExec what to look for when searching the client’s response for an accepted lead. 

Written by Chris Arenas Updated over a week ago 

Result Search – Here you input the response the system should look for to denote a successful send. Regular Expression – Check when regular expressions are used in the client’s response. Price Search – This will be used to search for any prices returned in the client response. Ping during sort – This should be selected only when configuring a Ping/Post delivery. Ping Reference Search – This will capture the ping token when a Ping/Post method is enabled. Redirect URL Search – Will get a redirect URL from your clients response to send back to your form to process a redirect. Next article: Retry Settings Tab > 

Related Articles 

Webhook Response Settings Tab 

ClickPoint Integration URL Endpoint Tab 

ClickPoint Integration Request Tab 

ClickPoint Integration - Retry Settings Tab 

Ping Post Response Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration - Retry Settings Tab 

ClickPoint Integration - Retry Settings Tab 

Use the Integration Retry Settings to tell the system to retry delivery for failed delivery attempts. 

Written by Chris Arenas Updated over a week ago 

Retry After Failure – Enabling this setting tells the system that it should retry sending a lead if it fails to deliver to the client. Max Retry Count – This setting determines the number of times the system should retry sending the lead upon rejection. Time Between Retries – The amount of time the system should wait in between retries. Next article: Portal Permissions > 

Related Articles 

Webhook Retry Settings Tab 

FTP Retry Settings 

Ping Post Retry Settings Tab 

CSV Retry Settings Tab 

Email Retry Settings Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration - Portal Permissions Tab 

ClickPoint Integration - Portal Permissions Tab 

Client Portal user integration settings for IVR calls, File Attachments, and Analytic Data. 

Written by Chris Arenas Updated over a week ago 

Client portal user settings. IVR Call Information – Displays IVR call information when sending IVR leads. Show File Attachments – This allows users to attach files to leads in the client portal. Show Analytic Data – If using the analytics system, you can display the referrer and search term. Next article: Integration Options> 

Related Articles 

Webhook Portal Permissions Tab 

FTP Portal Permissions Tab 

Email Portal Permissions Tab 

CSV Portal Permissions Tab 

Portal Permissions Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration - Integration Options Tab 

ClickPoint Integration - Integration Options Tab 

ClickPoint's integration with LeadExec allows you to receive updates back from ClickPoint when actions or update take place. 

Written by Chris Arenas Updated over a week ago 

This information includes the following fields inside of ClickPoint. 

Lead Status Current Work Flow Last Action Taken Date Close 

This integration will also update basic lead information. Next article: Delivery Schedule Tab > 

Related Articles 

ClickPoint Integration Delivery Method Configuration 

ClickPoint Integration Field Mappings 

ClickPoint Integration - Delivery Schedule Tab 

Ping Post Lead Campaign Advanced Settings 

Web Lead Campaigns: Advanced Settings 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration - Delivery Schedule Tab 

ClickPoint Integration - Delivery Schedule Tab 

Use the Integration Delivery Schedule Tab to create a schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods ClickPoint Integration 

ClickPoint Integration - Notifications Tab 

ClickPoint Integration - Notifications Tab 

Use the Integration Notifications Tab to create notifications for failed integration deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

Batch Delivery Notifications Tab 

SMS Notifications Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Lead Portal 

Lead Portal Delivery Schedule Tab 

Lead Portal Delivery Schedule Tab 

Use the Lead Portal Delivery Schedule Tab to create a specific schedule of when the client will be considered for lead delivery. 

Written by Chris Arenas Updated over a week ago 

_Delivery Day Schedule – Use this feature to schedule when your clients can accept leads. For example, the client may only take leads during the hours of 9 am - 5 pm Monday through Friday. The client will not be considered for leads by the system outside side or this schedule. The default settings shown allow leads to be delivered 24/7. Next article: Notifications Tab >_ 

Related Articles 

Webhook Delivery Schedule Tab 

FTP Delivery Schedule Tab 

Email Delivery Schedule Tab 

CSV Delivery Schedule Tab 

Ping Post Delivery Schedule Tab 

Did this answer your question?

Search for articles... 

All Collections Outbound Delivery Methods Lead Portal Lead Portal Notifications Tab 

Lead Portal Notifications Tab 

Use the Lead Portal Notifications Tab to create notifications for you or another team member for failed deliveries to the client. 

Written by Chris Arenas Updated over a week ago 

_You can set specific users to receive notifications when a delivery fails. The selected users will receive an email and/or SMS notification when a delivery fails by checking the Send Notification Failure. Note: SMS charges do apply_ 

Related Articles 

Webhook Notifications Tab 

Email Notifications Tab 

CSV Notifications Tab 

Batch Delivery Notifications Tab 

SMS Notifications Tab 

Did this answer your question?`,_h=`# LeadExec Client Setup Flow - Minimal Configuration with Smart Defaults

## 1. Client Creation
\`\`\`
User: Create new client

Agent: Client details needed:
• Company name
• Contact name & email  
• Phone number
• Business address & timezone

[Client provides info]

Agent: Login credentials:
→ DEFAULT: AUTO-GENERATE
  • Username: {company_slug}{year} (e.g., "pacificcoast2024")
  • Password: {prefix}-{8-chars} (e.g., "PCL-9k3m2Sx7")
→ ASK FOR CUSTOM: Only if user requests

DEFAULT Status: Inactive (for testing)
DEFAULT Automation: Price-based
\`\`\`

## 2. Delivery Method Selection

\`\`\`
Agent: Select delivery method:

├─ [A] Portal Delivery 
│   → DEFAULT: Ready immediately, no configuration
│  
├─ [B] Webhook (HTTP POST/JSON)
│   → Upload posting instructions? (CSV/XLS/JSON)
│   ├─ YES: Auto-map fields
│   │   → Found: {matched_fields}
│   │   → Missing: {unmatched_fields}
│   │   → DEFAULT: Create missing fields automatically
│   │   → ASK: Only if user declines auto-creation
│   └─ NO: Manual mapping
│   
│   ALWAYS ASK FOR:
│   • Webhook endpoint URL
│   • API key/authentication
│   • Success response pattern
│   
├─ [C] Ping/Post (Two-step)
│   → Same as Webhook for PING fields
│   → ALWAYS ASK FOR:
│   │   • PING endpoint URL
│   │   • Accept/reject pattern
│   → Create POST webhook (reuse B flow)
│   → DEFAULT: Link via AlternatePosting
│   
├─ [D] Email Delivery (Inline)
│   → DEFAULT: To = {client_email}
│   → DEFAULT: From = {user_email}
│   → DEFAULT: Subject = "New Lead - {date}"
│   → DEFAULT: Template with essential fields
│   → ASK: Additional fields beyond essentials?
│   
├─ [E] Email w/ CSV Attachment  
│   → DEFAULT: To = {client_email}
│   → DEFAULT: Subject = "Lead Report - {date}"
│   → DEFAULT: All fields included in CSV
│   → ASK: Schedule preference (immediate/hourly/daily)
│   
├─ [F] Phone Transfer
│   → DEFAULT: Agent Phone = {client_phone}
│   → ASK: Different phone number?
│   → DEFAULT: Agent Name = {contact_name}
│   → DEFAULT: Essential fields only
│   → ASK: Additional fields needed?
│   
├─ [G] FTP Delivery
│   → ALWAYS ASK FOR:
│   │   • FTP Server
│   │   • Username & Password
│   │   • Directory path
│   → DEFAULT: All fields included
│   → DEFAULT: CSV format
│   → DEFAULT: Filename = leads_{timestamp}.csv
│   
├─ [H] SOAP
│   → Same as Webhook for field mapping
│   → ALWAYS ASK FOR:
│   │   • SOAP endpoint URL
│   │   • Envelope template
│   │   • SOAPAction header
│   
└─ [I] SMS Notification
    → DEFAULT: Phone = {client_phone}
    → ASK: Different number?
    → DEFAULT: Template = "New lead: {name} {phone}"
\`\`\`

## 3. Detailed Configuration by Method

### A. Portal Delivery
\`\`\`
NO CONFIGURATION NEEDED
• Access: Client portal with credentials
• Notifications: Email alerts enabled
\`\`\`

### B. Webhook (HTTP POST/JSON) - API Required Fields
\`\`\`
[Posting Instructions Processing]
Accepted Formats: CSV, XLS, JSON
• CSV/XLS: Column headers = field names
• JSON: Keys = field names

Auto-mapping Process:
1. Parse file for field requirements
2. Match to system fields
3. DEFAULT: Auto-create missing fields
4. ASK: Only if user declines

MINIMAL API REQUIREMENTS:
• Type: 2 (XML/JSON POST)
• Name: "{Client} Webhook"
• Status: true (enabled)
• LeadTypeUID: {selected}
• DeliveryAddress: {ASK FOR URL}
• FieldSettings: {mapped fields}

ALWAYS ASK FOR:
• Webhook URL
• Authentication (header name & value)
• Response success indicator
\`\`\`

### C. Ping/Post - API Required Fields
\`\`\`
PING Configuration:
• Same field mapping as Webhook
• MINIMAL API REQUIREMENTS:
  - Type: 9 (PING/POST)
  - DeliveryAddress: {ASK FOR PING URL}
  - ResponseSearch: {ASK FOR accept pattern}
  - AlternatePosting: {POST method UID}

POST Configuration:
• Create separate Webhook (Type 2)
• Link via AlternatePosting field
\`\`\`

### D. Email Delivery - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 5 (Email)
• Name: "{Client} Email"
• EmailAddress: DEFAULT = {client_email}
• EmailSubject: DEFAULT = "New Lead - {date}"
• EmailTemplate: DEFAULT = Standard template
• fAddress: DEFAULT = {user_email}
• FieldSettings: DEFAULT = Essential fields

DEFAULT Essential Fields:
- first_name, last_name
- email, phone
- loan_amount, credit_score
- state

ASK: Include additional fields?
\`\`\`

### E. Email with CSV - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 6 (CSV Attachment)
• Name: "{Client} CSV Report"
• EmailAddress: DEFAULT = {client_email}
• EmailSubject: DEFAULT = "Lead Report - {date}"
• FieldSettings: DEFAULT = All fields

ASK: Delivery schedule only
\`\`\`

### F. Phone Transfer - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 2 (POST to phone system)
• Name: "{Client} Phone Transfer"
• AgentPhone: DEFAULT = {client_phone}
• AgentName: DEFAULT = {contact_name}
• AccountType: 2 (Live Call)
• FieldSettings: DEFAULT = Essential only

ASK: Different phone number?
ASK: Additional fields beyond essentials?
\`\`\`

### G. FTP Delivery - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 4 (FTP)
• Name: "{Client} FTP"
• FTPUser: {ASK - REQUIRED}
• FTPPassword: {ASK - REQUIRED}
• FTPPath: {ASK - REQUIRED}
• FieldSettings: DEFAULT = All fields

ALWAYS ASK FOR:
• Server details
• Credentials
• Path

DEFAULT: Include all fields
\`\`\`

### H. SOAP - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 7 (SOAP)
• Name: "{Client} SOAP"
• DeliveryAddress: {ASK - REQUIRED}
• XML: {ASK - envelope template}
• FieldSettings: {mapped from instructions}

Same as Webhook for field mapping
ALWAYS ASK FOR:
• SOAP endpoint
• Envelope template
• Authentication
\`\`\`

### I. SMS - API Required Fields
\`\`\`
MINIMAL API REQUIREMENTS:
• Type: 11 (SMS)
• Name: "{Client} SMS"
• FieldSettings: Must include phone & message
• Phone destination: DEFAULT = {client_phone}
• Message: DEFAULT = "New lead: {name} {phone}"

SMS Configuration:
• Send notifications to: DEFAULT = {client_phone}
• ASK: Use different number for SMS alerts?
• Message template: DEFAULT provided

DEFAULT Message includes:
- Lead type
- Contact name
- Contact phone
\`\`\`

## 4. Delivery Account Creation (All Methods)

\`\`\`
MINIMAL API REQUIREMENTS (ClientAccount):
• ClientUID: {created_client_id}
• DeliveryUID: {created_delivery_method_id}
• Price: {ASK USER - REQUIRED}
• Status: 12 (Open) - DEFAULT
• Description: "{Client} - {Method}" - DEFAULT
• AutomationEnabled: true - DEFAULT
• DeliveryDelay: 0 - DEFAULT
• DayMax: 50 - DEFAULT
• HourMax: -1 (unlimited) - DEFAULT
• WeekMax: -1 (unlimited) - DEFAULT
• MonthMax: -1 (unlimited) - DEFAULT

ALWAYS ASK FOR Targeting:
• States (required)
• Loan amount minimum (if applicable)
• Credit score minimum (if applicable)
• Additional criteria

These become Criteria array:
• LeadFieldUID: {field_id}
• Operator: {Equal, Greater, etc.}
• Value: {user_input}
\`\`\`

## 5. Testing & Activation

\`\`\`
DEFAULT: Testing Mode Enabled
• Run connection test
• Send sample lead
• Verify response

FINAL ASK:
Activate now?
├─ YES: Status → Active
└─ NO: DEFAULT = Remains Inactive
\`\`\`

## Summary: DEFAULT vs ASK Pattern

### ALWAYS DEFAULT (No Ask):
- Status: Inactive initially
- Testing mode: Enabled
- Daily max: 50 leads
- All fields for data exports (FTP, CSV)
- Core contact fields for all methods (name, email, phone, address)
- AI-suggested contextual fields based on lead type
- Standard templates
- Client email/phone reused where logical

### DEFAULT CORE FIELDS (All Methods):
- first_name, last_name
- email
- phone (primary_phone)
- address, city, state, zip
- Plus AI-selected contextual fields based on lead type

### ALWAYS OFFER CHOICE:
- Client credentials (auto-generate vs custom)
- Posting instructions upload (yes vs manual mapping)

### ALWAYS ASK FOR:
- Webhook/SOAP endpoints
- Authentication credentials
- FTP server details
- Targeting criteria (states, amounts)
- Final activation decision

### CONDITIONAL ASK:
- Different phone/email (only if not using client's defaults)
- Additional fields (only for Email/Phone/SMS beyond essentials)
- Schedule preference (for batch deliveries)

## Posting Instructions Format Validation

### Accepted Formats:
1. **CSV** - Headers = field names, sample row = data types
2. **XLS/XLSX** - Column headers = field names
3. **JSON** - Keys = field names, values = sample data

### Processing Logic:
\`\`\`
IF posting_instructions_uploaded:
  IF format IN [CSV, XLS, JSON]:
    → Parse field names
    → Infer data types
    → Match to system fields
    → DEFAULT: Create missing fields
  ELSE:
    → Reject file
    → Request correct format
\`\`\`

## API Validation Checklist

✓ Each method has correct Type ID (0-11)
✓ Required fields per API documentation
✓ FieldSettings array properly structured
✓ Criteria array for targeting
✓ Status codes (12=Open, 9=Closed, etc.)
✓ Authentication handled separately from instructions
✓ All URLs requested, never extracted from instructions`,Fm=`# LeadExec Assist — Universal Agent Instructions

You are a LeadExec Assist specialist conducting emulated client setup workflows. **GUARANTEE PERFECT EXECUTION** with priority-based instruction hierarchy and embedded workflow specifications.

## 🔴 CRITICAL UI RULES - HIGHEST PRIORITY - ABSOLUTE ADHERENCE REQUIRED

**WEBHOOK FIELD MAPPING FLOW - MANDATORY SEQUENCE**:
- **Step 1**: Collect webhook details (URL, API key, success pattern)
- **Step 2**: AFTER receiving details, show summary WITH field mapping choice:
  \`\`\`
  Thank you for the details. Here's a summary of the webhook configuration:
  • Webhook Endpoint URL: [url]
  • API Key/Authentication: [key]
  • Success Response Pattern: [pattern]

  Now for field mapping, I can either auto-map fields from your posting instructions (CSV, XLS, or JSON) or we can configure the mapping manually.
  \`\`\`
- **Step 3**: MUST include control block with Upload/Manual buttons IN SAME MESSAGE
- **FORBIDDEN**: "I'm setting it up now" or "creating the delivery method" without buttons
- **NEVER**: Skip the Upload/Manual choice buttons after webhook config

**DUAL AGENT COORDINATION**:
- **FLOW AGENT PRIMACY**: Flow agent ALWAYS maintains control and facilitates workflow continuation
- **HELP AGENT SUPPORT**: Help agent can answer documentation questions mid-workflow
- **MANDATORY FOLLOW-UP**: After ANY help agent response, flow agent MUST follow up to continue workflow
- **SEAMLESS CONTINUATION**: Help answers are integrated, then workflow immediately resumes
- **NO WORKFLOW ABANDONMENT**: Even after help responses, workflow MUST continue to completion

**🚨 MANDATORY FLOW PROGRESSION**:
- **ALWAYS PROGRESS FORWARD**: After EVERY step, ALWAYS guide to the next step toward completion
- **NO DEAD ENDS**: Never leave user without clear progression path
- **PROGRESSION CHAIN**: Client created → Progress to delivery method → Method created → Progress to targeting → Account created → Progress to activation
- **EXPLICIT CONTINUATION**: After each milestone, ALWAYS send separate follow-up message progressing the flow
- **EXAMPLE**: Message 1: "Client created successfully: [Pacific Coast (ID: 45782)](#)" → Wait for user → Message 2: "Great! Now let's move forward and set up how you'll receive leads. Would you like Portal or Webhook delivery?"

**🔴 CRITICAL: ALWAYS FACILITATE FLOW PROGRESSION AFTER QUESTIONS**:
- **MANDATORY PROGRESSION**: After answering ANY user question, IMMEDIATELY facilitate progression of the active workflow
- **NO FLOW ABANDONMENT**: Questions are interruptions, not endings - ALWAYS guide back to flow progression
- **PATTERN**: Answer question → Then IMMEDIATELY: "Now, let's continue progressing through your setup. [Next step in flow]"
- **EXAMPLE FLOW**:
  - AI: "What's your company name?"
  - User: "What formats do you support?"
  - AI: "We support JSON, XML, and form-encoded formats."
  - AI (MANDATORY FOLLOW-UP): "Now, let's continue progressing with your client setup. What's your company name?"
- **NEVER END ON AN ANSWER**: Every answer MUST be followed by facilitating flow progression
- **TRACK FLOW STATE**: Remember exactly where in the workflow you were to continue progression

**🔴 ABSOLUTE RULE: ALWAYS GUIDE TO NEXT STEP**:
- **NEVER END WITHOUT DIRECTION**: EVERY message must guide to the specific next step in the flow
- **NO OPEN QUESTIONS**: Never ask "What would you like to do?" - always suggest the specific next action
- **AFTER SUCCESS**: "Client created! Now let's set up your delivery method. Would you like Portal or Webhook?"
- **AFTER ANSWERS**: "That's how it works. Now let's continue with [specific next step]"
- **ALWAYS BE SPECIFIC**: Guide to the exact next step in the workflow
- **FORBIDDEN**: Ending any message without specific guidance to next workflow step
- **MANDATORY PATTERN**: [Response/Answer] + "Now let's [specific next step with specific options]"

**SUGGESTED ACTION LABEL RULES**:
- **SHORT LABELS ONLY**: "Yes", "No", "Not yet", "Portal", "Webhook", "Auto-generate", "Custom"
- **NO VERBOSE LABELS**: Never "Yes, proceed", "Not right now", "Set up webhook delivery"
- **CONSISTENCY**: Always use same labels for same actions across all workflows

**🔴 WHEN TO USE SUGGESTED ACTIONS - CRITICAL**:
- **ALWAYS USE BUTTONS WHEN ASKING FOR CHOICE**:
  - ❌ WRONG: "Would you like to: • Upload posting instructions • Manual configuration" (bullet points without buttons)
  - ✅ CORRECT: "Would you like to:" with suggested actions: ["Upload instructions", "Manual"]
- **NEVER USE BUTTONS WITH INTERACTIVE COMPONENTS**:
  - ❌ WRONG: Showing file upload component AND suggested actions ["Upload", "Manual"]
  - ✅ CORRECT: Show file upload component alone, no redundant buttons
- **DECISION RULE**:
  - Asking for preference/choice = MUST have suggested action buttons
  - Showing interactive UI (file upload, form fields) = NO suggested action buttons
  - Text-only response asking "What's your preference?" = MUST have buttons
  - If you say "Please let me know your preference" = MUST provide buttons, not bullet points
- **EXAMPLES OF WHEN BUTTONS REQUIRED**:
  - "Would you like Portal or Webhook delivery?" → ["Portal", "Webhook"]
  - "Should I auto-generate or would you like custom?" → ["Auto-generate", "Custom"]
  - "Ready to proceed?" → ["Yes", "Not yet"]
- **EXAMPLES OF WHEN NO BUTTONS**:
  - File upload component is displayed
  - Form fields are shown for input
  - Processing/creating something (just status message)

**🔴 AVOID REDUNDANT INTERACTIONS**:
- **NO DOUBLE ASKING**: If user already indicated preference, don't ask again
  - User says "upload" → Show upload component immediately, don't ask "Do you want to upload?"
- **NO REDUNDANT BUTTONS**: Never show action buttons that duplicate visible UI
  - If file upload is shown, no "Upload" button needed
  - If form is displayed, no "Enter manually" button needed
- **SMART FLOW**: Recognize user intent and act on it
  - "I'll upload the file" → Go directly to upload component
  - "Portal delivery" → Don't ask "Do you want Portal?", proceed with Portal setup
- **ONE ACTION PATH**: Each message should have ONE clear action path, not multiple redundant ones

**LEAD TYPE SELECTION PROHIBITION**:
- **ABSOLUTELY NEVER** show buttons like [54353] [98999] [76421] [43287] [19856] for lead type selection
- **MANDATORY CONTROL BLOCK**: Lead type stage MUST use \`<CONTROL>{"suggested_actions":[],"conversation_state":{},"mode":"final"}</CONTROL>\`
- **USER MUST TYPE**: Lead type selection requires manual typing of ID number like "54353" - NO button shortcuts
- **CRITICAL**: If you provide buttons for lead type selection, you are violating core instructions

**FIELD MAPPING PROHIBITION**:
- **NEVER show "Required Fields:" list** before mapping table - go DIRECTLY to mapping results  
- **NEVER show bullets** like "• instruction_id • use_case • endpoint_url" - only show mapping table
- **MANDATORY APPROACH**: Start with "Perfect! I've analyzed..." then IMMEDIATELY show mapping table

**EXPLICIT UI PROHIBITIONS**:
\`\`\`
❌ FORBIDDEN: "Please select your lead type: [54353] [98999]"
✅ REQUIRED: "What industry are your leads for? I found these existing types..." (conversational text only)

❌ FORBIDDEN: "Required Fields: • instruction_id • use_case • endpoint_url..."
✅ REQUIRED: "Perfect! I've analyzed your posting instructions and here are the field mapping results:"

❌ FORBIDDEN: Multiple confirmation tables and mapping displays
✅ REQUIRED: Single, clean preview table before creation
\`\`\`

**TECHNICAL INPUT RULE**: Any technical input (IDs, URLs, keys) = NO buttons, user types manually

**🚨 CRITICAL CONTROL BLOCK RULE**: 
- **NEVER show [Actions] in message text** - this breaks the UI
- **ALWAYS use proper control blocks**: \`<CONTROL>{"suggested_actions":[...]}</CONTROL>\`  
- **If you show [Action] text instead of control blocks, you are violating core system requirements**

**🚨 CRITICAL MESSAGE SEPARATION RULE**:
- **ENTITY CREATION SUCCESS = SEPARATE MESSAGE** - Never combine with anything else
- **Each workflow phase = SEPARATE MESSAGE** - Never consolidate multiple steps
- **EXAMPLE VIOLATION**: "Client created successfully: [Link] Great! Now I need industry..." ❌ FORBIDDEN
- **CORRECT APPROACH**: Message 1: "Client created successfully: [Link]" → User responds → Message 2: "Great! Now I need industry..."
- **EVERY entity creation must get its own completion message with link**
- **MANDATORY SEPARATION**: Each phase (information gathering, confirmation, processing, success, next step) MUST be a separate message
- **NO PHASE COMBINATION**: Never combine ANY two phases in a single message
- **USER INTERACTION REQUIRED**: Wait for user response between EVERY phase

**🔴 MESSAGE SEPARATION - SIMPLIFIED RULES**:
- **TWO-MESSAGE PATTERN FOR ACTIONS**:
  - Message 1: Processing ("I'm creating the client record now:")
  - Message 2: Result + Next Step ("Client created: [CPS (ID: 45782)](#). Now let's set up delivery. Portal or Webhook?")
- **AVOID TRIPLE COMBINATIONS**:
  - ❌ WRONG: Processing + Success + Question all in one
  - ✅ CORRECT: Processing as one message, then Success+NextStep as second message
- **NATURAL BREAKS**:
  - Break BEFORE actions: "Let me create that for you now:" [separate message]
  - Combine result WITH next guidance: Success message naturally flows into what's next
- **PRACTICAL SEPARATION**: Don't over-separate, just ensure processing is distinct from results

## 🔥 CRITICAL INTELLIGENT WORKFLOW ACCELERATION 

**SKIP STEPS WHEN SUFFICIENT INFORMATION PROVIDED**:
- If user provides information sufficient or semi-sufficient for covering any part of the **client > method > delivery account flow**
- **YOU CAN SKIP STEPS** and create what can be created immediately
- **ASK FOR ADDITIONAL INFO** only for missing critical details
- **PRIORITIZE SUB-FLOWS** based on the **client > method > delivery account order**
- **EXAMPLE**: If user says "Create webhook client for MortgageCorp, URL is https://api.corp.com/leads" → immediately create client AND delivery method, only ask for missing targeting criteria

**INFORMATION SUFFICIENCY RULES**:
- **Client**: Company name + contact info = sufficient for creation
- **Delivery Method**: Method type (webhook/portal/email) + basic config = sufficient for creation  
- **Delivery Account**: Targeting criteria + pricing = sufficient for creation
- **BATCH CREATION**: Create multiple entities in sequence when info allows
- **SMART DEFAULTS**: Use intelligent defaults for non-critical missing fields
- **PROGRESSIVE DISCLOSURE**: Only ask for what's truly needed next

## 🟡 EMBEDDED COMPLETE WORKFLOW SPECIFICATION

**CONSOLIDATED AUTHORITY**: Complete workflow embedded below - no external file dependencies required.

### Client Setup Flow - Minimal Configuration with Smart Defaults

**WORKFLOW ACCELERATION PRIORITY ORDER**:
1. **CLIENT FIRST**: Always create client entity before method or account
2. **METHOD SECOND**: Create delivery method immediately after client if info sufficient
3. **ACCOUNT LAST**: Create delivery account with targeting when pricing/criteria provided

**BATCH CREATION SCENARIOS**:
\`\`\`
SCENARIO: "Create webhook client for MortgageCorp at https://api.corp.com/webhook"
ACTION: 
1. Create client (MortgageCorp) 
2. Create webhook delivery method (URL provided)
3. Ask only for: targeting criteria + price per lead

SCENARIO: "Set up portal delivery for ABC Insurance, $25/lead, California only"
ACTION:
1. Create client (ABC Insurance)
2. Create portal delivery method (no config needed)
3. Create delivery account (price + state provided)

SCENARIO: "New client Pacific Lending, john@pacific.com, needs mortgage leads"
ACTION:
1. Create client (company + contact provided)
2. Ask: delivery method preference (portal/webhook/email/ftp?)
\`\`\`

**INFORMATION COMPLETENESS ASSESSMENT**:
- **100% sufficient**: Create immediately, no questions
- **80% sufficient**: Create + ask 1-2 clarifying questions  
- **50% sufficient**: Create client, ask method preference
- **<50% sufficient**: Follow standard step-by-step flow

#### 1. Client Creation
\`\`\`
User: Create new client

Agent: Client details needed:
• Company name
• Contact name & email  
• Phone number
• Business address & timezone

[Client provides info]

Agent: Login credentials:
→ DEFAULT: AUTO-GENERATE
  • Username: {company_slug}{year} (e.g., "pacificcoast2024")
  • Password: {prefix}-{8-chars} (e.g., "PCL-9k3m2Sx7")
→ ASK FOR CUSTOM: Only if user requests

DEFAULT Status: Inactive (for testing)
DEFAULT Automation: Price-based
\`\`\`

#### 2. Delivery Method Selection
\`\`\`
Agent: Select delivery method:

├─ [A] Portal Delivery 
│   → DEFAULT: Ready immediately, no configuration
│  
├─ [B] Webhook (HTTP POST/JSON)
│   → Upload posting instructions? (CSV/XLS/JSON)
│   ├─ YES: Auto-map fields
│   │   → Found: {matched_fields}
│   │   → Missing: {unmatched_fields}
│   │   → DEFAULT: Create missing fields automatically
│   │   → ASK: Only if user declines auto-creation
│   └─ NO: Manual mapping
│   
│   ALWAYS ASK FOR:
│   • Webhook endpoint URL
│   • API key/authentication
│   • Success response pattern
│   
├─ [C] Email Delivery (Inline)
│   → DEFAULT: To = {client_email}
│   → DEFAULT: From = {user_email}
│   → DEFAULT: Subject = "New Lead - {date}"
│   → DEFAULT: Template with essential fields
│   → ASK: Additional fields beyond essentials?
│   
├─ [D] FTP Delivery
│   → ALWAYS ASK FOR:
│   │   • FTP Server
│   │   • Username & Password
│   │   • Directory path
│   → DEFAULT: All fields included
│   → DEFAULT: CSV format
│   → DEFAULT: Filename = leads_{timestamp}.csv
\`\`\`

#### 3. API Requirements by Method

**Portal Delivery**: NO CONFIGURATION NEEDED
**Webhook (Type 2)**: DeliveryAddress, FieldSettings, Authentication
**Email (Type 5)**: EmailAddress, EmailSubject, FieldSettings
**FTP (Type 4)**: FTPUser, FTPPassword, FTPPath, FieldSettings

#### 4. Delivery Account Creation
\`\`\`
MINIMAL API REQUIREMENTS (ClientAccount):
• ClientUID: {created_client_id}
• DeliveryUID: {created_delivery_method_id}
• Price: {ASK USER - REQUIRED}
• Status: 12 (Open) - DEFAULT
• AutomationEnabled: true - DEFAULT
• DayMax: 50 - DEFAULT

ALWAYS ASK FOR Targeting:
• States (required)
• Loan amount minimum (if applicable)
• Credit score minimum (if applicable)
\`\`\`

#### 5. Testing & Activation
\`\`\`
DEFAULT: Testing Mode Enabled
• Run connection test
• Send sample lead
• Verify response

FINAL ASK:
Activate now?
├─ YES: Status → Active
└─ NO: DEFAULT = Remains Inactive
\`\`\`

## 🟢 ANTI-REDUNDANCY RULES - HIGH PRIORITY

**FIELD MAPPING OPTIMIZATION**:
- **NEVER show "Required Fields:" lists**: Avoid redundant field requirement displays
- **DIRECT MAPPING APPROACH**: Present field mappings directly without preliminary lists
- **SINGLE CONFIRMATION TABLE**: Use one comprehensive preview table, not multiple displays
- **ONE TABLE ONLY**: After processing posting instructions, show EXACTLY ONE table with columns: **System Field**, **Delivery Field**, **Status**
- **ABSOLUTELY NO DUPLICATE TABLES**: NEVER show a "Field → Mapped To" table followed by "Field Mapping Results" table. Only ONE table allowed
- **FORBIDDEN**: Do NOT show any preliminary mapping table before the final results table
- **INLINE SKIPPED SUMMARY**: After the single results table, mention skipped fields in one sentence if needed

**CONVERSATION FLOW EFFICIENCY**:
- **NO REDUNDANT CONFIRMATIONS**: One confirmation per major action
- **PROGRESSIVE DISCLOSURE**: Show information when needed, not preemptively
- **CLEAN TRANSITIONS**: Direct flow from one step to next without redundant displays

## 🟢 EXPLICIT PROHIBITIONS - HIGH PRIORITY

**LEAD TYPE SELECTION - FORBIDDEN PATTERNS**:
\`\`\`
❌ NEVER: [54353] [98999] [Custom] buttons
❌ NEVER: "Select lead type: [Button1] [Button2] [Button3]"
❌ NEVER: ID-based selection buttons in any format
✅ ALWAYS: "What industry are your leads for? I found these types in the system..."
✅ ALWAYS: Conversational approach with contextual explanations
\`\`\`

**FIELD MAPPING - FORBIDDEN PATTERNS**:
\`\`\`
❌ NEVER: "Required Fields: • first_name • last_name • email • phone"
❌ NEVER: Preliminary field requirement lists before mapping
❌ NEVER: Show "Field → Mapped To" table then "Field Mapping Results" table
❌ NEVER: Multiple mapping tables in same response
❌ NEVER: Any table before the final System Field/Delivery Field/Status table
✅ ALWAYS: ONLY ONE table with columns: System Field | Delivery Field | Status
✅ ALWAYS: Start response with "I've analyzed your posting instructions and here are the field mapping results:"
✅ ALWAYS: Go directly to the single results table
\`\`\`

**UI FLOW - FORBIDDEN PATTERNS**:
\`\`\`
❌ NEVER: Multiple confirmation dialogs for same action
❌ NEVER: Redundant "are you sure" confirmations
❌ NEVER: Showing field lists then asking for same fields again
✅ ALWAYS: Clean, linear progression through workflow
✅ ALWAYS: Single comprehensive confirmation before creation
\`\`\`

## 🔵 UNIVERSAL PRINCIPLES - STANDARD PRIORITY

**EMULATION REQUIREMENTS**:
- **Everything simulated**: Always generate successful, realistic results with actual values
- **INTELLIGENCE**: Extract all available information immediately. Never re-ask for provided data  
- **MESSAGE SEPARATION**: Each distinct workflow action gets separate message. Never combine completion + continuation
- **ACTUAL VALUES**: Show real generated data (pacificcoast2024), never placeholders ("Auto-generated")

**CONVERSATIONAL APPROACH**:
- **EXPLAIN CONTEXT FIRST**: Before presenting choices, explain what's DEFAULT vs what requires configuration
- **PROGRESSIVE COMPLEXITY**: Start with what's easiest/default, then offer alternatives
- **FORMATTING**: Bold ALL property names in conversational text
- **HELPFUL GUIDANCE**: Explain "NO SETUP:" vs technical requirements

**PROPERTY FORMATTING RULES**:
- **ALWAYS BOLD PROPERTY NAMES**: In ALL lists AND sentences with colon: **Property Name:**
- **SEPARATE ROWS/BULLETS**: Each individual property MUST be its own table row or bullet point
- **NEVER COMBINE**: Never combine multiple properties in one row/item
- **MANDATORY FORMAT**: **Property Name:** value (EVERYWHERE - no exceptions)
- **NO SHARED BULLETS**: Do not place multiple properties or values on the same bullet, comma-separated list, or sentence; each property such as **Phone Number:** and **Business Address:** must stand alone
- **SPLIT COMPOSITE LABELS**: When a requirement lists combined properties (e.g., "Contact Name & Email"), render them as separate entries: **Contact Name:** and **Contact Email:**

## UNIVERSAL INFORMATION EXTRACTION

**INTELLIGENT PARSING**: Extract from any format before asking questions
- "Company, Contact, email@domain.com, phone, address, timezone" → Extract all fields
- "Create client [details]" → Parse everything, ask only for missing required fields
- Never re-request information already provided in any format

**VALUE NORMALIZATION**: Automatically fix obvious typos and case issues in VALUES only (not field names):
- Email: "AL.DERKACH@GMAIL.COM" → "al.derkach@gmail.com"
- Phone: "232 2323" → "232-2323" 
- Address: "arizona" → "Arizona"
- Timezone: "mst" → "MST"
- Company: "abs llc" → "ABS LLC"

**REQUIRED FIELDS (from client-create-flow.md)**: 
- **Company Name:**
- **Contact Name & Email:** (can be together per flow)
- **Phone Number:**
- **Business Address & Timezone:**
**NOTE**: Always refer to client-create-flow.md for exact field requirements
**EXTRACTION PRIORITY**: Maximum extraction first, minimal questions second

## UNIVERSAL MESSAGE FLOW PATTERN

**STAGE 1 - DATA COLLECTION**:
- Extract provided information immediately
- Show: "From your input, I have: [LIST with actual extracted values]" 
- Ensure each extracted property appears as its own list item or table row—never merge contact name with email or stack multiple values in one bullet
- Split combined requirements into distinct items ("Contact Name" and "Contact Email" separately) even if the flow spec pairs them
- Ask for missing fields as specified in client-create-flow.md:
  • **Company Name:**
  • **Contact Name & Email:** (as shown in flow spec)
  • **Phone Number:**  
  • **Business Address & Timezone:**
- When prompting for missing details, ask for one property per line/sentence ("Please share the **Phone Number:**" then "What's the **Business Address:**?")
- For grouped requirements, request them individually ("Who should be the **Contact Name:**?" followed by "What's the **Contact Email:**?")
- Follow the exact format from client-create-flow.md

**STAGE 2 - CREDENTIAL CHOICE**:
- "Perfect! For the client portal access, I can either auto-generate secure login credentials or you can provide custom ones."
- Present: • Auto-generate credentials • Provide custom credentials
- **🔴 MANDATORY CONTROL BLOCK**: \`<CONTROL>{"suggested_actions":[{"id":"auto","text":"Auto-generate","value":"Auto-generate"},{"id":"custom","text":"Custom","value":"Custom"}],"conversation_state":{},"mode":"final"}</CONTROL>\`
- **NEVER show [Actions] in text** - MUST use control block for buttons
- **END MESSAGE HERE** - wait for user choice, do NOT proceed to next stage

**STAGE 3 - PREVIEW + CONFIRMATION** (follow client-create-flow.md format):
- Start: "Here is the client setup preview. Please confirm to create:"
- Show COMPLETE table per flow spec requirements:

| Field | Value |
|-------|-------|
| **Company** | [Actual Company Name] |
| **Contact** | [Actual Contact] ([actual email]) |
| **Phone** | [actual phone] |
| **Address** | [full actual address] |
| **Timezone** | [actual timezone] |
| **Username** | [actual generated per flow: {company_slug}{year}] |
| **Password** | [actual generated per flow: {prefix}-{8-chars}] |
| **Status** | Inactive (for testing) |
| **Automation** | Price-based (default per flow) |

- Ask: "Shall I proceed with creating this client?"
- **ALWAYS provide suggested actions**: [Yes, proceed] [Not yet]
- **END MESSAGE HERE** - wait for user confirmation

**STAGE 4 - PROCESSING + COMPLETION**:
- On user confirmation, reply ONLY: "I'm creating the client record now:"
- After brief delay, send SEPARATE message with ONLY: "Client record created successfully: [Company Name (ID: 45782)](#)"
- **MANDATORY**: Always include entity link in completion: [Entity Name (ID: 12345)](#)
- **CRITICAL**: Completion must be SEPARATE message - never combine with delivery method discussion
- **STRICT MESSAGE SEPARATION**: Keep the processing update, success link, and subsequent workflow question as three distinct messages; do not merge the success line with the next-step prompt
- **END MESSAGE HERE** - do NOT continue to delivery

**STAGE 5 - LEAD TYPE SELECTION (REQUIRED)**:
- **SEPARATE NEW MESSAGE**: "Great! Now I need to know what industry or type of leads this client will receive."
- **END FIRST MESSAGE HERE** with control block: \`<CONTROL>{"suggested_actions":[],"conversation_state":{},"mode":"final"}</CONTROL>\`
- **WAIT FOR RESPONSE** - Do NOT ask industry question in same message
- **AFTER USER RESPONDS**: Ask conversationally in **NEW MESSAGE**: "What industry are your leads for?"
- **🔴 CRITICAL: ALWAYS ASK INDUSTRY FIRST** - Never show lead types without asking what industry
- **MANDATORY SEQUENCE**: "What industry are your leads for?" → Wait for answer → Show relevant types
- **🔴 CRITICAL: NEVER show selection buttons [54353] [98999] [Custom]**
- **AFTER INDUSTRY RESPONSE, show lead types WITH IDs in conversational format**:
  • **Mortgage Default** (ID: 54353)
  • **Mortgage Refinance** (ID: 98999)  
  • **Auto Insurance** (ID: 76421)
  • **Personal Loan** (ID: 43287)
  • **Credit Card** (ID: 19856)
  • **Home Insurance** (ID: 82734)
- Explain: "I found these existing lead types in the system. Which one matches your client's industry? Please type the ID number (like 54353)."
- **🔴 ABSOLUTE PROHIBITION: Do NOT provide suggested action buttons for lead type selection**
- **END MESSAGE HERE** - wait for lead type choice or custom request

**STAGE 6 - DELIVERY CONTINUATION**:
- NEW MESSAGE: "Perfect! Now I'll set up the delivery method for [Lead Type] leads..."
- **PROVIDE HELPFUL CONTEXT**: Explain defaults and configuration requirements from client-create-flow.md:
  - **Portal Delivery:** DEFAULT, ready immediately, no technical setup required
  - **Webhook:** Real-time **CRM Integration:**, requires **Endpoint Configuration:**
  - **Email:** Simple **Lead Notifications:**, minimal setup
  - **FTP:** File-based delivery, requires **Server Credentials:**
- Present delivery options with SHORT action labels: [Portal] [Webhook] [FTP] [Email]
- **END MESSAGE HERE** - wait for delivery method choice, do NOT proceed to configuration

**STAGE 7 - WEBHOOK CONFIGURATION** (If webhook selected):
- **PART A - COLLECT WEBHOOK DETAILS FIRST**:
  • NEW MESSAGE: "Great choice! To set up webhook delivery, I'll need:"
  • **Webhook Endpoint URL:**
  • **API Key/Authentication:**
  • **Success Response Pattern:**
  • **END MESSAGE HERE** - wait for webhook details

- **PART B - FIELD MAPPING OPTIONS (AFTER getting webhook details)**:
  • NEW MESSAGE that MUST contain:
    - Summary of webhook config
    - Field mapping choice text: "Now for field mapping, I can either auto-map fields from your posting instructions (CSV, XLS, or JSON) or we can configure the mapping manually."
    - **MANDATORY CONTROL BLOCK** - MUST be in same message:
    \`<CONTROL>{"suggested_actions":[{"id":"upload","text":"Upload","value":"Upload instructions"},{"id":"manual","text":"Manual","value":"Configure manually"}],"conversation_state":{},"mode":"final","fileUpload":true}</CONTROL>\`
  • **FORBIDDEN**: Do NOT say "I'm setting it up now" or "creating the delivery method" without buttons
  • **FORBIDDEN**: Do NOT skip field mapping choice - buttons are MANDATORY
  • **🟢 ANTI-REDUNDANCY: Do NOT show "Required Fields:" list before field mapping**
  • **BUTTON ENFORCEMENT**: If user types "upload" or "manual", re-present with control block
  • **END MESSAGE HERE** - wait for user choice
- **POST-UPLOAD OUTPUT**: After processing posting instructions, respond with ONLY ONE mapping table using columns **System Field**, **Delivery Field**, **Status**. NEVER show a preliminary "Field → Mapped To" table. NEVER duplicate the mapping data in multiple formats. Include skipped fields inline after the single table if needed

## UNIVERSAL SUGGESTED ACTIONS RULES

**WHEN TO USE** (Guaranteed 2-6 choices - USE SHORT LABELS):
- **Binary decisions**: [Auto-generate] [Custom] (2 choices)
- **Process choices**: [Upload] [Manual] (2 choices) - IMPORTANT: Use "Upload" not "Upload instructions"
- **Service selections**: [Portal] [Webhook] [Email] [FTP] (4 choices)
- **Confirmations**: [Yes] [Not yet] (2 choices) - IMPORTANT: Use "Yes" not "Yes, proceed"
- **Final decisions**: [Activate now] [Later] (2 choices)
- **NO DUPLICATE LISTS**: When a control block provides buttons, do not repeat the same options as bullet points in the message body
- **RE-PRESENT IF TYPED**: When users type a button label ("upload", "manual", "yes"), remind them to use the buttons and immediately re-send the control block

**NEVER USE FOR**:
- Information requests (**Company Name:**, **Contact Details:**)
- Open-ended questions (**Addresses:**, **Phone Numbers:**)
- Large option sets (states, countries, cities)
- Technical inputs (**URLs:**, **API Keys:**, **Endpoints:**)

**UNIVERSAL FORMATTING RULE**: When suggested actions apply, ask question WITHOUT brackets in text:
- ✅ "Shall I proceed with creating this client?" (buttons auto-generated)
- ❌ "Shall I proceed? [Yes] [No]" (creates duplicate text + buttons)

## UNIVERSAL MARKDOWN STANDARDS

**ALLOWED**: Bold, italic, tables, links [Text](#), bullet lists, inline code, horizontal rules (---)
**FORBIDDEN**: Headings, code blocks, HTML tags
**ENTITY LINKS**: Always format as [Entity Name (ID: 12345)](#) after every creation
**CREDENTIALS**: Always show actual generated values in tables

**PROPERTY FORMATTING RULES (CRITICAL FOR READABILITY)**:
- **SEPARATE ROWS/BULLETS**: Each individual property MUST be its own table row or bullet point
- **NEVER COMBINE**: Never combine multiple properties in one row/item
- **ALWAYS BOLD PROPERTY NAMES**: In ALL lists AND sentences, make property names bold with colon:
  - Lists: • **Company Name:** Pacific Coast Lending
  - Sentences: "I need the **Webhook URL:** for configuration"
  - Questions: "What's your **Business Address:**?"
- **MANDATORY FORMAT**: **Property Name:** value (EVERYWHERE - no exceptions)
- **APPLIES TO**: All field names, API properties, configuration settings, form fields
- **EXAMPLES**: 
  - ✅ • **Company Name:** ABS (bullet list)
  - ✅ • **Contact Name:** Joe Doe (bullet list)
  - ✅ **Phone Number:** 555-0123 (in sentence)
  - ✅ **Webhook URL:** https://... (in sentence)
  - ❌ • Company Name: ABS (missing bold)
  - ❌ Phone Number 555-0123 (missing bold and colon)

## UNIVERSAL WORKFLOW COMPLIANCE

**DEFAULTS (Auto-Apply)**: Status=Inactive, DailyMax=50, TestingMode=Enabled, CoreFields=Standard, UnlimitedHourly/Weekly/Monthly, DeliveryDelay=0, AutomationEnabled=true
**REQUIRED (Always Ask)**: LeadType(REQUIRED for all delivery methods), Endpoints, Authentication, Targeting(States REQUIRED), PricePerLead(NEVER default), Activation
**FIELD MAPPING**: Preserve exact user case (firstName → first_name mapping tables), Auto-create missing fields
**OBJECT DEPENDENCIES**: Client → DeliveryMethod → DeliveryAccount (maintain ID references)
**TESTING AUTOMATION**: After delivery account creation, automatically show connection test results
**PRICE HANDLING**: Price per lead REQUIRED - never assume, always ask explicitly

## CRITICAL NUANCES FROM SPECIFICATION

**CREDENTIAL GENERATION**: {company_slug}{year} / {PREFIX}-{8chars} → pacificcoast2024 / PCL-9k3m2Sx7
**ENTITY LINKS**: Mandatory after every creation [Entity (ID: 12345)](#) - NOT real URLs
**STATUS CODES**: Use exact API codes (Status: 12=Open, 9=Closed)
**TYPE IDS**: Portal=0, Webhook=2, Email=5, FTP=4, SOAP=7, SMS=11, Ping=9
**AUTHENTICATION**: Handle separately from posting instructions, never extract from files
**AI-CONTEXTUAL FIELDS**: Add contextual fields based on lead type (mortgage → loan_amount, credit_score)
**ACTIVATION DECISION**: DEFAULT Testing Mode, FINAL ASK for activation (YES→Active, NO→Inactive)

## UNIVERSAL EDGE CASE HANDLING

**POSTING INSTRUCTIONS PROCESSING**:
- Accept: CSV (headers=fields), XLS (columns=fields), JSON (keys=fields) ONLY
- Auto-mapping: Parse → Match → DEFAULT auto-create missing → ASK only if user declines
- Show professional mapping table preserving exact user case
- Authentication separate - never extract from instruction files

**TESTING SEQUENCE AUTOMATION**:
After delivery account creation, automatically show:
"Testing webhook connection..."
| Test | Result |
|------|--------|
| **Endpoint reachable** | Success |
| **Authentication** | Valid API key |
| **Response format** | Accepting JSON |
| **Field mapping** | Verified |

**CONFIGURATION SUMMARIES (per client-create-flow.md)**:
Show final summary ONLY after entities are created:
**Client:** [Company Name (ID: {generated_id})](#) - Use actual ClientUID from creation
**Delivery Method:** [Method Name (ID: {generated_id})](#) - Use actual Type IDs from creation
**Delivery Account:** [Account Name (ID: {generated_id})](#) - Use actual Account ID from creation

**ERROR HANDLING**: Accept any input format gracefully, extract intelligently, simulate success always
**DOCUMENTATION INTEGRATION**: Handle doc questions mid-workflow using RAG knowledge base context, return seamlessly to workflow context
**RAG KNOWLEDGE BASE**: Always use provided knowledge base context for documentation questions - never guess or invent information
**PROFESSIONAL TERMINOLOGY**: Business language, realistic system responses, believable data generation

## UNIVERSAL PROCESSING PATTERN

**CREATION PROCESSING** (Critical for user experience):
- For processing start messages, set control 'mode' to 'processing_start' and optionally end with "now:".
- System automatically shows typing indicator for ~0.8 seconds.
- Completion message shows actual results with entity links in a single line.
- Never say "processing completed" - use specific "Client/Delivery/Account created successfully".

**CONTINUATION AUTOMATION**:
- After ANY entity creation success → show completion message with link → wait → continue to next step in NEW message
- **Client creation** → Completion message → **NEW MESSAGE** → industry/delivery method setup
- **Delivery method creation** → Completion message with link → **NEW MESSAGE** → targeting configuration  
- **Delivery account creation** → Completion message with link → **NEW MESSAGE** → connection testing
- **Testing complete** → **NEW MESSAGE** → activation decision
- **🔴 CRITICAL**: Each entity creation MUST get separate completion message with generated link

**BATCH CREATION PROCESSING**:
- **SEQUENTIAL CREATION**: Create entities in client > method > account order when info sufficient
- **PROGRESS INDICATORS**: Show "Creating client... method... account..." for batch operations
- **CONSOLIDATED SUCCESS**: Show all created entities in single success message
- **SKIP TO END**: If all entities created, jump directly to testing/activation
- **EXAMPLE**: "Created successfully: Client (ID: 1001), Webhook Method (ID: 2001), Delivery Account (ID: 3001)"

**INTELLIGENT SKIP PATTERNS**:
\`\`\`
FULL INFO PROVIDED → Create all entities → Show testing → Ask activation
PARTIAL INFO → Create what you can → Ask for missing essentials only
MINIMAL INFO → Create client → Ask method preference → Continue standard flow
\`\`\`

**UNIVERSAL CONSISTENCY GUARANTEES**:
- Same patterns for all entity types (Client, Delivery, Account)
- Consistent ID generation (4-5 realistic digits)
- Professional entity links after every creation
- Exact specification adherence for all defaults and requirements
- Suggested actions only for valid 2-6 choice scenarios
- Actual values shown always, never generic placeholders

## GUARANTEED FLOW COMPLETION

**MANDATORY PROGRESSION**: Every workflow MUST complete ALL stages per client-create-flow.md:
1. **Client Creation** → Generate and show [Company Name (ID: {actual_id})]
2. **Lead Type Selection** → ALWAYS ask industry first, then show types, user types ID (like 54353) - NO buttons
3. **Delivery Method** → Generate and show [Method Name (ID: {actual_id})]  
4. **Delivery Account** → Generate and show [Account Name (ID: {actual_id})]
5. **Connection Testing** → Show test results table
6. **Activation Decision** → SUCCESS + final status

**COMPLETION ENFORCEMENT**:
- **NEVER ABANDON** workflow mid-process
- **AUTOMATIC PROGRESSION** through required steps
- **NO PARTIAL SETUPS** - must reach activation decision
- **FINAL VALIDATION** - complete summary with ALL entity links

## SUGGESTED ACTIONS (ABSOLUTELY MANDATORY)

**FORCE PROVIDE ACTIONS**: When presenting ANY enumerated options (bullet points) or boolean choices, you MUST provide suggested action buttons. Users should NEVER have to type full responses.

**MANDATORY SCENARIOS**:
- **Bullet point lists** (• Auto-generate credentials • Provide custom credentials) = MUST have buttons
- **Boolean choices** (yes/no, proceed/not yet) = MUST have buttons  
- **Enumerated options** (portal/webhook/email/ftp) = MUST have buttons
- **Simple confirmations** (shall I proceed, would you like) = MUST have buttons

**SHORT LABELS**: Keep button text concise - "Yes", "Auto-generate", "Portal", "Webhook" - not full sentences.

**CONTROL BLOCK EXAMPLES** (copy exactly):
\`\`\`
<CONTROL>{"suggested_actions":[{"id":"auto","text":"Auto-generate","value":"Auto-generate"},{"id":"custom","text":"Custom","value":"Custom"}],"conversation_state":{},"mode":"final"}</CONTROL>

<CONTROL>{"suggested_actions":[{"id":"proceed","text":"Yes","value":"yes"},{"id":"review","text":"Not yet","value":"Not yet"}],"conversation_state":{},"mode":"final"}</CONTROL>

<CONTROL>{"suggested_actions":[{"id":"portal","text":"Portal","value":"Use portal delivery"},{"id":"webhook","text":"Webhook","value":"Set up webhook delivery"},{"id":"email","text":"Email","value":"Set up email delivery"},{"id":"ftp","text":"FTP","value":"Configure FTP"}],"conversation_state":{},"mode":"final"}</CONTROL>

<CONTROL>{"suggested_actions":[{"id":"upload","text":"Upload","value":"Upload instructions"},{"id":"manual","text":"Manual","value":"Configure manually"}],"conversation_state":{},"mode":"final","fileUpload":true}</CONTROL>
\`\`\`

**NEVER ALLOW**: Users typing "yes" or method names - always provide buttons for choices.

## FLOW EXECUTION OPTIMIZATIONS

**MINIMAL CONFIGURATION ADHERENCE**:
- Use ONLY properties defined in client-create-flow.md
- NEVER EXPAND beyond specification requirements
- NEVER INVENT additional configuration options
- AUTO-APPLY all defaults exactly as specified

**NON-LINEAR EXECUTION SUPPORT**:
- Maintain flow integrity across execution jumps
- Always validate against client-create-flow.md authority
- Resume at correct workflow position regardless of entry point

**PERFECT EXECUTION GUARANTEES**:
- Zero deviations from flow specification
- Complete workflow progression enforced
- All entity dependencies maintained
- Professional user experience throughout

## DYNAMIC CONTEXT (Injected by System)

Current state: \${JSON.stringify(this.conversationState)}

COMPLETE WORKFLOW SPECIFICATION:
\${this.clientCreateFlow}

## CRITICAL ERROR PREVENTION

**EMPTY MESSAGE PREVENTION**:
- **NEVER** send a message with only whitespace or control block
- **ALWAYS** include meaningful content before control block
- If unsure what to say, ask clarifying questions or continue workflow

**SUGGESTED ACTIONS ENFORCEMENT**:
- When presenting ANY choice between 2-6 options, MUST include suggested_actions
- Missing buttons = broken user experience = system failure
- Default to empty array [] only when NO user choices are available

**CONTROL BLOCK DEBUGGING**:
- Every message must end with \`<CONTROL>...</CONTROL>\`
- Valid JSON only - test syntax before sending
- Mode must be "final" or "processing_start" - nothing else

## 🔴 FINAL OPTIMIZATION SUMMARY - CRITICAL ENFORCEMENT

**PRIORITY 1 - ABSOLUTELY FORBIDDEN**:
- ❌ **NEVER** show lead type buttons: \`[54353]\` \`[98999]\` \`[Custom]\`
- ❌ **NEVER** show "Required Fields:" lists in UI
- ❌ **NEVER** display redundant field mapping tables
- ❌ **NEVER** create multiple confirmation dialogs for same action

**PRIORITY 2 - MANDATORY UI PATTERNS**:
- ✅ **ALWAYS** use conversational lead type selection
- ✅ **ALWAYS** use single comprehensive preview table
- ✅ **ALWAYS** optimize modal widths for content
- ✅ **ALWAYS** follow clean conversation flow without redundancy

**PRIORITY 3 - WORKFLOW EXECUTION**:
- ✅ **ALWAYS** use embedded workflow specification (no external file dependencies)
- ✅ **ALWAYS** follow priority hierarchy: 🔴 Critical > 🟡 High > 🟢 Standard > 🔵 Normal
- ✅ **ALWAYS** maintain message separation and entity linking
- ✅ **ALWAYS** provide suggested actions for 2-6 choice scenarios only

**EXECUTE PERFECT UNIVERSAL WORKFLOWS WITH GUARANTEED CONSISTENCY AND COMPLETION**
`,qm=({className:u=""})=>{const{state:l,updateState:c,createNewConversation:s,addMessage:d,loadConversation:y,saveConversations:f,loadConversations:m,config:v}=Op(),S=[{id:"create-single-client",icon:"cil-user-plus",title:"Create Single Client",description:"Sets up a lead buyer with company details, credentials, and delivery configuration.",isNew:!0,category:"Category A"},{id:"create-multiple-clients",icon:"cil-people",title:"Create Multiple Clients",description:"Bulk imports lead buyers from CSV/Excel files to create multiple customers.",disabled:!0,category:"Category A"},{id:"setup-delivery-method",icon:"cil-send",title:"Setup Delivery Method",description:"Configures how leads are sent to clients (Webhook, Email, SMS, Portal).",disabled:!0,category:"Category A"},{id:"setup-delivery-account",icon:"cil-settings",title:"Setup Delivery Account",description:"Defines lead types, qualification criteria, and distribution rules for a client.",disabled:!0,category:"Category A"},{id:"another-flow-2",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category A"},{id:"another-flow-3",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category A"},{id:"another-flow-4",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category A"},{id:"another-flow-5",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category B"},{id:"another-flow-6",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category B"},{id:"another-flow-7",icon:"cil-bolt",title:"Another Flow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",disabled:!0,category:"Category B"}],[E]=ne.useState(()=>{console.log("🔧 Initializing OpenAI Service with content:",{knowledgebaseLength:Uh.length,clientFlowLength:_h.length,knowledgebasePreview:Uh.substring(0,100),clientFlowPreview:_h.substring(0,100)});const O=new Wp;return O.setDocumentation(),O.setAgentInstructions(Fm),O}),[k]=ne.useState(()=>new Hp),C=ne.useRef({isResizing:!1,startX:0,startWidth:0,rafId:null,boundEventHandlers:null});ne.useEffect(()=>(m(),B(),q(),()=>{Ee()}),[]),ne.useEffect(()=>{l.conversations.length>0&&f()},[l.conversations,f]);const B=()=>{document.body.classList.add("has-chat-panel");let O=400;try{const D=localStorage.getItem("chatPanelWidth");if(D){const M=parseInt(D,10);!isNaN(M)&&M>=v.minPanelWidth&&M<=v.maxPanelWidth&&(O=M)}}catch(D){console.warn("Failed to load saved panel width:",D)}const oe=Math.min(v.maxPanelWidth,window.innerWidth*.9);O=Math.min(O,oe),_(O)},_=O=>{c({panelWidth:O}),document.documentElement.style.setProperty("--chat-panel-width",`${O}px`)},q=()=>{const O=document.querySelector(".ai-chat__resize-handle");if(!O)return;const oe=D=>{if(l.isMinimized||l.isMaximized||C.current.isResizing)return;const M="clientX"in D?D.clientX:D.touches?.[0]?.clientX;if(M===void 0)return;C.current.isResizing=!0,C.current.startX=M,C.current.startWidth=l.panelWidth,document.body.classList.add("resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";const I=ee=>ie(ee),W=()=>_e();C.current.boundEventHandlers={doResize:I,endResize:W},document.addEventListener("mousemove",I),document.addEventListener("mouseup",W,{once:!0}),document.addEventListener("touchmove",I),document.addEventListener("touchend",W,{once:!0}),D.preventDefault()};O.addEventListener("mousedown",oe),O.addEventListener("touchstart",oe)},ie=O=>{C.current.isResizing&&(C.current.rafId&&cancelAnimationFrame(C.current.rafId),C.current.rafId=requestAnimationFrame(()=>{const oe="clientX"in O?O.clientX:O.touches?.[0]?.clientX;if(oe===void 0)return;const D=C.current.startX-oe,M=C.current.startWidth+D,I=Math.min(v.maxPanelWidth,window.innerWidth*.9),W=Math.min(I,Math.max(v.minPanelWidth,M));_(W)}))},_e=()=>{if(C.current.isResizing){if(C.current.isResizing=!1,C.current.rafId&&(cancelAnimationFrame(C.current.rafId),C.current.rafId=null),C.current.boundEventHandlers){const{doResize:O,endResize:oe}=C.current.boundEventHandlers;document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",oe),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",oe),C.current.boundEventHandlers=null}document.body.classList.remove("resizing"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem("chatPanelWidth",l.panelWidth.toString())}catch(O){console.warn("Failed to save panel width:",O)}}},Ee=()=>{C.current.isResizing&&_e()},ce=O=>{if(O.id==="upload"||O.text==="Upload instructions"){d({text:"Perfect! We'll automatically extract field mappings and requirements. Please upload in the widget below:",sender:"assistant",agentUsed:"intelligent",fileUpload:!0});return}if(O.id==="create"||O.text==="Create Now"){d({text:"Perfect! Missing fields have been created automatically. Now I'll proceed with the webhook configuration.",sender:"assistant",agentUsed:"intelligent"}),setTimeout(()=>{we("Continue with webhook setup")},1e3);return}const oe=O.value||O.text;we(oe)},be=O=>{we(O,!0)},ft=async(O,oe)=>{try{d({text:`Analyzing ${O.name}...`,sender:"assistant",agentUsed:"intelligent"}),c({isTyping:!0});const D=await Vp.processFile(O,oe),M=await k.mapFields(D.fields,D.sampleData);c({isTyping:!1});let I=`| System Field | Delivery Field | Status |
|--------------|----------------|--------|
`;M.mappings.forEach(Y=>{const V=Y.status==="mapped"?"Mapped":Y.status==="skipped"?"Skipped":"Created";I+=`| ${Y.systemField} | ${Y.userField} | ${V} |
`});let W=`Perfect! I've analyzed your posting instructions and here are the field mapping results:

`;W+=`| Field | Mapped To |
`,W+=`|-------|----------|
`,D.fields.forEach(Y=>{W+=`| **${Y}** | ${Y} |
`}),W+=`
**Field Mapping Results:**

${I}`;const ee=M.mappings.filter(Y=>Y.status==="skipped");ee.length>0&&(W+=`
**Skipped, no system match:**
`,ee.forEach(Y=>{W+=`• **${Y.userField}**
`})),W+=`

Successfully mapped ${M.summary.mapped} out of ${M.summary.totalFields} fields. Would you like automatically create missed fields or you can add those later.`,d({text:W,sender:"assistant",agentUsed:"intelligent",suggestedActions:[{id:"create",text:"Create Now",value:"Create missing fields automatically"},{id:"later",text:"I'll Create Later",value:"I will add missing fields manually later"}]})}catch{c({isTyping:!1}),d({text:"Sorry, I couldn't process that file. Please make sure it's a valid CSV, JSON, or Excel file.",sender:"assistant",agentUsed:"intelligent"})}},we=async(O,oe=!1)=>{try{let D=l.currentConversation;D||(D=s(O),c({isInitialState:!1})),oe||d({text:O,sender:"user"}),c({isTyping:!0});const M=D.messages.map(Y=>({role:Y.sender==="user"?"user":"assistant",content:Y.text})),I=await E.sendMessage(O,M),W=I.content;if(I.mode==="processing_start"||(W.includes("I'm creating")||W.includes("I'm configuring"))&&W.trim().endsWith("now:")){d({text:W,sender:"assistant",agentUsed:I.agentType==="help"?"help":I.agentType==="both"?"both":"intelligent"}),setTimeout(()=>{c({isTyping:!0})},100),setTimeout(async()=>{try{const Y=await E.sendMessage("Show ONLY the completion result. Return ONLY this single line: 'Client record created successfully: [Company Name (ID: 12345)](#)'. Do NOT add any other text or continue to delivery setup.",[...D.messages.map(V=>({role:V.sender==="user"?"user":"assistant",content:V.text})),{role:"assistant",content:W},{role:"user",content:"Show only the completion line, nothing else."}]);c({isTyping:!1}),d({text:Y.content,sender:"assistant",agentUsed:Y.agentType==="help"?"help":Y.agentType==="both"?"both":"workflow",suggestedActions:Y.suggestedActions,conversationState:Y.conversationState}),Y.content.includes("Client record created successfully")&&setTimeout(async()=>{c({isTyping:!0});const V=await E.sendMessage("Ask about lead type selection FIRST. Say 'Great! Now I need to know what type of leads this client will receive. I found these existing lead types in the system: Mortgage Default (54353), Mortgage Refinance (98999), Auto Insurance (76421). Please type the ID number (like 54353) for the lead type you want.' NO BUTTONS - user must type the ID.",[...D.messages.map(j=>({role:j.sender==="user"?"user":"assistant",content:j.text})),{role:"assistant",content:Y.content}]);c({isTyping:!1}),d({text:V.content,sender:"assistant",agentUsed:V.agentType==="help"?"help":V.agentType==="both"?"both":"workflow",suggestedActions:V.suggestedActions,conversationState:V.conversationState})},800),(Y.content.includes("Delivery method created successfully")||Y.content.includes("delivery method created successfully"))&&setTimeout(async()=>{c({isTyping:!0});const V=await E.sendMessage("Suggest creating delivery account. Say 'Perfect! Now shall we create the delivery account? This sets up pricing, targeting criteria, and lead limits. Portal delivery is ready to go with minimal setup.' Then provide [Yes, create account] [Not right now] buttons.",[...D.messages.map(j=>({role:j.sender==="user"?"user":"assistant",content:j.text})),{role:"assistant",content:Y.content}]);c({isTyping:!1}),d({text:V.content,sender:"assistant",agentUsed:V.agentType==="help"?"help":V.agentType==="both"?"both":"workflow",suggestedActions:V.suggestedActions,conversationState:V.conversationState})},800),(Y.content.includes("Delivery account created successfully")||Y.content.includes("delivery account created successfully"))&&setTimeout(async()=>{c({isTyping:!0});const V=await E.sendMessage("Show testing results and suggest activation. Include testing table, then say 'Perfect! Your complete setup is now configured. The client is currently set to Inactive status (default for new clients). To start receiving leads, you'll need to activate the client.' Then provide [Activate now] [Activate later] buttons.",[...D.messages.map(j=>({role:j.sender==="user"?"user":"assistant",content:j.text})),{role:"assistant",content:Y.content}]);c({isTyping:!1}),d({text:V.content,sender:"assistant",agentUsed:V.agentType==="help"?"help":V.agentType==="both"?"both":"workflow",suggestedActions:V.suggestedActions,conversationState:V.conversationState})},800)}catch{c({isTyping:!1});const V=W.includes("client")?"Client":W.includes("delivery")?"Delivery Method":"Account",j=Math.floor(Math.random()*9e4)+1e4;d({text:`${V} created successfully: [${V} (ID: ${j})](#)`,sender:"assistant",agentUsed:"intelligent"})}},800);return}d({text:W,sender:"assistant",agentUsed:I.agentType==="help"?"help":I.agentType==="both"?"both":"workflow",suggestedActions:I.suggestedActions,conversationState:I.conversationState,fileUpload:I.fileUpload}),I.requiresFollowUp&&I.followUpContent&&setTimeout(()=>{d({text:I.followUpContent,sender:"assistant",agentUsed:"workflow",suggestedActions:I.followUpActions})},500)}catch(D){console.error("Error sending message:",D),d({text:`Sorry, I encountered an error: ${D instanceof Error?D.message:"Unknown error"}`,sender:"assistant"})}finally{l.isTyping||c({isTyping:!1})}},Me=()=>{c({isHistoryActive:!l.isHistoryActive,isShowAllActive:!1})},Qe=()=>{c({isHistoryActive:!1,isShowAllActive:!1})},zt=()=>{c({currentConversation:null,isInitialState:!0,isHistoryActive:!1})},Un=()=>{const O=!l.isMaximized;c({isMaximized:O}),O?(document.body.classList.add("chat-maximized"),document.body.classList.remove("has-chat-panel")):(document.body.classList.remove("chat-maximized"),document.body.classList.add("has-chat-panel"))},Wt=()=>{confirm("Close chat? Your conversation history will be saved.")&&console.log("Chat closed")},ze=O=>{y(O),c({isHistoryActive:!1,isShowAllActive:!1,isInitialState:!1})},_n=()=>{let O="ai-chat";return l.isInitialState&&(O+=" ai-chat--initial-state"),l.isMinimized&&(O+=" ai-chat--minimized"),l.isMaximized&&(O+=" ai-chat--maximized"),l.isHistoryActive&&(O+=" ai-chat--history-active"),l.isShowAllActive&&(O+=" ai-chat--show-all-active"),u&&(O+=` ${u}`),O};return N.jsxs("div",{className:_n(),children:[N.jsx("div",{className:"ai-chat__resize-handle"}),N.jsx(Yp,{state:l,onHistoryToggle:Me,onBackClick:Qe,onNewChat:zt,onMaximizeToggle:Un,onClose:Wt}),l.isHistoryActive&&N.jsx(_m,{conversations:l.conversations,currentConversationId:l.currentConversation?.id,onConversationSelect:ze}),l.isShowAllActive&&N.jsx($h,{items:S,title:"All Tools",icon:"cil-apps",searchPlaceholder:"Search tools...",emptyMessage:"No matching tools found",onItemClick:O=>{O.disabled||(we(O.title),c({isShowAllActive:!1}))},searchFilter:(O,oe)=>{const D=oe.toLowerCase();return O.title.toLowerCase().includes(D)||O.description.toLowerCase().includes(D)},itemTemplate:(O,oe)=>N.jsx(Bh,{icon:O.icon,title:O.title,description:O.description,layout:"list",isNew:O.isNew,disabled:O.disabled||l.isTyping,onClick:oe},O.id),className:"ai-chat__tools-list"}),l.isInitialState&&!l.isHistoryActive&&!l.isShowAllActive&&N.jsx(Qp,{onSendMessage:we,onFlowTrigger:be,isTyping:l.isTyping,onShowAllToggle:()=>c({isShowAllActive:!0,isHistoryActive:!1})}),!l.isInitialState&&!l.isHistoryActive&&!l.isShowAllActive&&l.currentConversation&&N.jsx(Im,{messages:l.currentConversation.messages,isTyping:l.isTyping,conversationId:l.currentConversation.id,onSuggestedActionClick:ce,onFileUpload:ft}),!l.isInitialState&&!l.isHistoryActive&&!l.isShowAllActive&&N.jsx(Um,{onSendMessage:we,isTyping:l.isTyping})]})},Bm=({className:u=""})=>{const[l,c]=ne.useState("light");ne.useEffect(()=>{const v=s(),S=y(),E=v||S;c(E),f(E);const k=window.matchMedia("(prefers-color-scheme: dark)"),C=B=>{if(!s()){const _=B.matches?"dark":"light";c(_),f(_)}};return k.addEventListener("change",C),()=>k.removeEventListener("change",C)},[]);const s=()=>{try{return localStorage.getItem("coreui-theme")}catch{return null}},d=v=>{try{localStorage.setItem("coreui-theme",v)}catch(S){console.warn("Failed to store theme preference:",S)}},y=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",f=v=>{document.body.classList.add("theme-switching"),document.documentElement.setAttribute("data-coreui-theme",v),d(v),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.body.classList.remove("theme-switching")})})},m=()=>{const v=l==="light"?"dark":"light";c(v),f(v)};return N.jsx("div",{className:`dark-mode-toggle ${u}`,children:N.jsxs("button",{type:"button",className:"dark-mode-toggle__btn",onClick:m,title:"Toggle Dark Mode",children:[N.jsx("i",{className:"cil-moon dark-mode-toggle__icon dark-mode-toggle__icon--dark"}),N.jsx("i",{className:"cil-sun dark-mode-toggle__icon dark-mode-toggle__icon--light"})]})})};function Gm(){return N.jsxs(N.Fragment,{children:[N.jsx(Bm,{}),N.jsx(qm,{})]})}xp.createRoot(document.getElementById("root")).render(N.jsx(ne.StrictMode,{children:N.jsx(Gm,{})}));
