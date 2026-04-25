(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function $k(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jw={exports:{}},Wu={},Dw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=Symbol.for("react.element"),Wk=Symbol.for("react.portal"),Hk=Symbol.for("react.fragment"),qk=Symbol.for("react.strict_mode"),Gk=Symbol.for("react.profiler"),Kk=Symbol.for("react.provider"),Qk=Symbol.for("react.context"),Yk=Symbol.for("react.forward_ref"),Xk=Symbol.for("react.suspense"),Jk=Symbol.for("react.memo"),Zk=Symbol.for("react.lazy"),Jy=Symbol.iterator;function eS(t){return t===null||typeof t!="object"?null:(t=Jy&&t[Jy]||t["@@iterator"],typeof t=="function"?t:null)}var Ow={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mw=Object.assign,Lw={};function uo(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||Ow}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vw(){}Vw.prototype=uo.prototype;function Mp(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||Ow}var Lp=Mp.prototype=new Vw;Lp.constructor=Mp;Mw(Lp,uo.prototype);Lp.isPureReactComponent=!0;var Zy=Array.isArray,Fw=Object.prototype.hasOwnProperty,Vp={current:null},Uw={key:!0,ref:!0,__self:!0,__source:!0};function zw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fw.call(e,r)&&!Uw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:cl,type:t,key:i,ref:o,props:s,_owner:Vp.current}}function tS(t,e){return{$$typeof:cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===cl}function nS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e_=/\/+/g;function td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nS(""+t.key):e.toString(36)}function mc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cl:case Wk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+td(o,0):r,Zy(s)?(n="",t!=null&&(n=t.replace(e_,"$&/")+"/"),mc(s,e,n,"",function(h){return h})):s!=null&&(Fp(s)&&(s=tS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(e_,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Zy(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+td(i,a);o+=mc(i,e,n,u,s)}else if(u=eS(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+td(i,a++),o+=mc(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $l(t,e,n){if(t==null)return t;var r=[],s=0;return mc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function rS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},gc={transition:null},sS={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:gc,ReactCurrentOwner:Vp};function Bw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:$l,forEach:function(t,e,n){$l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $l(t,function(){e++}),e},toArray:function(t){return $l(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=uo;re.Fragment=Hk;re.Profiler=Gk;re.PureComponent=Mp;re.StrictMode=qk;re.Suspense=Xk;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;re.act=Bw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Vp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Fw.call(e,u)&&!Uw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:cl,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:Qk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kk,_context:t},t.Consumer=t};re.createElement=zw;re.createFactory=function(t){var e=zw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:Yk,render:t}};re.isValidElement=Fp;re.lazy=function(t){return{$$typeof:Zk,_payload:{_status:-1,_result:t},_init:rS}};re.memo=function(t,e){return{$$typeof:Jk,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=gc.transition;gc.transition={};try{t()}finally{gc.transition=e}};re.unstable_act=Bw;re.useCallback=function(t,e){return kt.current.useCallback(t,e)};re.useContext=function(t){return kt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};re.useEffect=function(t,e){return kt.current.useEffect(t,e)};re.useId=function(){return kt.current.useId()};re.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return kt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};re.useRef=function(t){return kt.current.useRef(t)};re.useState=function(t){return kt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return kt.current.useTransition()};re.version="18.3.1";Dw.exports=re;var K=Dw.exports;const iS=$k(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=K,aS=Symbol.for("react.element"),lS=Symbol.for("react.fragment"),cS=Object.prototype.hasOwnProperty,uS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hS={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cS.call(e,r)&&!hS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:aS,type:t,key:i,ref:o,props:s,_owner:uS.current}}Wu.Fragment=lS;Wu.jsx=$w;Wu.jsxs=$w;jw.exports=Wu;var c=jw.exports,ef={},Ww={exports:{}},Wt={},Hw={exports:{}},qw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var ee=B.length;B.push(X);e:for(;0<ee;){var be=ee-1>>>1,Pe=B[be];if(0<s(Pe,X))B[be]=X,B[ee]=Pe,ee=be;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],ee=B.pop();if(ee!==X){B[0]=ee;e:for(var be=0,Pe=B.length,ps=Pe>>>1;be<ps;){var Gt=2*(be+1)-1,ms=B[Gt],ln=Gt+1,gr=B[ln];if(0>s(ms,ee))ln<Pe&&0>s(gr,ms)?(B[be]=gr,B[ln]=ee,be=ln):(B[be]=ms,B[Gt]=ee,be=Gt);else if(ln<Pe&&0>s(gr,ee))B[be]=gr,B[ln]=ee,be=ln;else break e}}return X}function s(B,X){var ee=B.sortIndex-X.sortIndex;return ee!==0?ee:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],f=1,m=null,g=3,b=!1,N=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=B)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function D(B){if(R=!1,k(B),!N)if(n(u)!==null)N=!0,bo(F);else{var X=n(h);X!==null&&Io(D,X.startTime-B)}}function F(B,X){N=!1,R&&(R=!1,E(_),_=-1),b=!0;var ee=g;try{for(k(X),m=n(u);m!==null&&(!(m.expirationTime>X)||B&&!S());){var be=m.callback;if(typeof be=="function"){m.callback=null,g=m.priorityLevel;var Pe=be(m.expirationTime<=X);X=t.unstable_now(),typeof Pe=="function"?m.callback=Pe:m===n(u)&&r(u),k(X)}else r(u);m=n(u)}if(m!==null)var ps=!0;else{var Gt=n(h);Gt!==null&&Io(D,Gt.startTime-X),ps=!1}return ps}finally{m=null,g=ee,b=!1}}var M=!1,v=null,_=-1,x=5,I=-1;function S(){return!(t.unstable_now()-I<x)}function C(){if(v!==null){var B=t.unstable_now();I=B;var X=!0;try{X=v(!0,B)}finally{X?T():(M=!1,v=null)}}else M=!1}var T;if(typeof w=="function")T=function(){w(C)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,zn=et.port2;et.port1.onmessage=C,T=function(){zn.postMessage(null)}}else T=function(){P(C,0)};function bo(B){v=B,M||(M=!0,T())}function Io(B,X){_=P(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||b||(N=!0,bo(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ee=g;g=X;try{return B()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return X()}finally{g=ee}},t.unstable_scheduleCallback=function(B,X,ee){var be=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?be+ee:be):ee=be,B){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=ee+Pe,B={id:f++,callback:X,priorityLevel:B,startTime:ee,expirationTime:Pe,sortIndex:-1},ee>be?(B.sortIndex=ee,e(h,B),n(u)===null&&B===n(h)&&(R?(E(_),_=-1):R=!0,Io(D,ee-be))):(B.sortIndex=Pe,e(u,B),N||b||(N=!0,bo(F))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var X=g;return function(){var ee=g;g=X;try{return B.apply(this,arguments)}finally{g=ee}}}})(qw);Hw.exports=qw;var dS=Hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=K,zt=dS;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gw=new Set,ja={};function Zs(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(ja[t]=e,t=0;t<e.length;t++)Gw.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,pS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t_={},n_={};function mS(t){return tf.call(n_,t)?!0:tf.call(t_,t)?!1:pS.test(t)?n_[t]=!0:(t_[t]=!0,!1)}function gS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yS(t,e,n,r){if(e===null||typeof e>"u"||gS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,zp);it[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,zp);it[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,zp);it[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yS(e,n,s,r)&&(n=null),r||s===null?mS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),Kw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),Yw=Symbol.for("react.offscreen"),r_=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=r_&&t[r_]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,nd;function ra(t){if(nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nd=e&&e[1]||""}return`
`+nd+t}var rd=!1;function sd(t,e){if(!t||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function _S(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=sd(t.type,!1),t;case 11:return t=sd(t.type.render,!1),t;case 1:return t=sd(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case nf:return"Profiler";case $p:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qw:return(t.displayName||"Context")+".Consumer";case Kw:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wS(t){var e=Xw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=wS(t))}function Jw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function s_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zw(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function lf(t,e){Zw(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function i_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ji(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(sa(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function ex(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ql,nx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xS=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){xS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function rx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function sx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=rx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ES=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(ES[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,Di=null,Oi=null;function l_(t){if(t=dl(t)){if(typeof mf!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Qu(e),mf(t.stateNode,t.type,e))}}function ix(t){Di?Oi?Oi.push(t):Oi=[t]:Di=t}function ox(){if(Di){var t=Di,e=Oi;if(Oi=Di=null,l_(t),e)for(t=0;t<e.length;t++)l_(e[t])}}function ax(t,e){return t(e)}function lx(){}var id=!1;function cx(t,e,n){if(id)return t(e,n);id=!0;try{return ax(t,e,n)}finally{id=!1,(Di!==null||Oi!==null)&&(lx(),ox())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var r=Qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var gf=!1;if(nr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){gf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{gf=!1}function TS(t,e,n,r,s,i,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var pa=!1,zc=null,Bc=!1,yf=null,bS={onError:function(t){pa=!0,zc=t}};function IS(t,e,n,r,s,i,o,a,u){pa=!1,zc=null,TS.apply(bS,arguments)}function kS(t,e,n,r,s,i,o,a,u){if(IS.apply(this,arguments),pa){if(pa){var h=zc;pa=!1,zc=null}else throw Error(V(198));Bc||(Bc=!0,yf=h)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ux(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c_(t){if(ei(t)!==t)throw Error(V(188))}function SS(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return c_(s),t;if(i===r)return c_(s),e;i=i.sibling}throw Error(V(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function hx(t){return t=SS(t),t!==null?dx(t):null}function dx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dx(t);if(e!==null)return e;t=t.sibling}return null}var fx=zt.unstable_scheduleCallback,u_=zt.unstable_cancelCallback,NS=zt.unstable_shouldYield,CS=zt.unstable_requestPaint,De=zt.unstable_now,AS=zt.unstable_getCurrentPriorityLevel,Gp=zt.unstable_ImmediatePriority,px=zt.unstable_UserBlockingPriority,$c=zt.unstable_NormalPriority,RS=zt.unstable_LowPriority,mx=zt.unstable_IdlePriority,Hu=null,Rn=null;function PS(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:OS,jS=Math.log,DS=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(jS(t)/DS|0)|0}var Gl=64,Kl=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ia(a):(i&=o,i!==0&&(r=ia(i)))}else o=n&~s,o!==0?r=ia(o):i!==0&&(r=ia(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),s=1<<n,r|=t[n],e&=~s;return r}function MS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-_n(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=MS(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gx(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function VS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-_n(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function yx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _x,Qp,vx,wx,xx,vf=!1,Ql=[],Mr=null,Lr=null,Vr=null,Ma=new Map,La=new Map,Nr=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h_(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function Wo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=dl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function US(t,e,n,r,s){switch(e){case"focusin":return Mr=Wo(Mr,t,e,n,r,s),!0;case"dragenter":return Lr=Wo(Lr,t,e,n,r,s),!0;case"mouseover":return Vr=Wo(Vr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ma.set(i,Wo(Ma.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,La.set(i,Wo(La.get(i)||null,t,e,n,r,s)),!0}return!1}function Ex(t){var e=ks(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=ux(n),e!==null){t.blockedOn=e,xx(t.priority,function(){vx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=dl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function d_(t,e,n){yc(t)&&n.delete(e)}function zS(){vf=!1,Mr!==null&&yc(Mr)&&(Mr=null),Lr!==null&&yc(Lr)&&(Lr=null),Vr!==null&&yc(Vr)&&(Vr=null),Ma.forEach(d_),La.forEach(d_)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,zS)))}function Va(t){function e(s){return Ho(s,t)}if(0<Ql.length){Ho(Ql[0],t);for(var n=1;n<Ql.length;n++){var r=Ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&Ho(Mr,t),Lr!==null&&Ho(Lr,t),Vr!==null&&Ho(Vr,t),Ma.forEach(e),La.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Ex(n),n.blockedOn===null&&Nr.shift()}var Mi=dr.ReactCurrentBatchConfig,Hc=!0;function BS(t,e,n,r){var s=fe,i=Mi.transition;Mi.transition=null;try{fe=1,Yp(t,e,n,r)}finally{fe=s,Mi.transition=i}}function $S(t,e,n,r){var s=fe,i=Mi.transition;Mi.transition=null;try{fe=4,Yp(t,e,n,r)}finally{fe=s,Mi.transition=i}}function Yp(t,e,n,r){if(Hc){var s=wf(t,e,n,r);if(s===null)gd(t,e,r,qc,n),h_(t,r);else if(US(s,t,e,n,r))r.stopPropagation();else if(h_(t,r),e&4&&-1<FS.indexOf(t)){for(;s!==null;){var i=dl(s);if(i!==null&&_x(i),i=wf(t,e,n,r),i===null&&gd(t,e,r,qc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}var qc=null;function wf(t,e,n,r){if(qc=null,t=qp(r),t=ks(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ux(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function Tx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case Gp:return 1;case px:return 4;case $c:case RS:return 16;case mx:return 536870912;default:return 16}default:return 16}}var jr=null,Xp=null,_c=null;function bx(){if(_c)return _c;var t,e=Xp,n=e.length,r,s="value"in jr?jr.value:jr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return _c=s.slice(t,1<r?1-r:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function f_(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yl:f_,this.isPropagationStopped=f_,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Ht(ho),hl=Ce({},ho,{view:0,detail:0}),WS=Ht(hl),ad,ld,qo,qu=Ce({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(ad=t.screenX-qo.screenX,ld=t.screenY-qo.screenY):ld=ad=0,qo=t),ad)},movementY:function(t){return"movementY"in t?t.movementY:ld}}),p_=Ht(qu),HS=Ce({},qu,{dataTransfer:0}),qS=Ht(HS),GS=Ce({},hl,{relatedTarget:0}),cd=Ht(GS),KS=Ce({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=Ht(KS),YS=Ce({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XS=Ht(YS),JS=Ce({},ho,{data:0}),m_=Ht(JS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tN[t])?!!e[t]:!1}function Zp(){return nN}var rN=Ce({},hl,{key:function(t){if(t.key){var e=ZS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sN=Ht(rN),iN=Ce({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=Ht(iN),oN=Ce({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),aN=Ht(oN),lN=Ce({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),cN=Ht(lN),uN=Ce({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hN=Ht(uN),dN=[9,13,27,32],em=nr&&"CompositionEvent"in window,ma=null;nr&&"documentMode"in document&&(ma=document.documentMode);var fN=nr&&"TextEvent"in window&&!ma,Ix=nr&&(!em||ma&&8<ma&&11>=ma),y_=" ",__=!1;function kx(t,e){switch(t){case"keyup":return dN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function pN(t,e){switch(t){case"compositionend":return Sx(e);case"keypress":return e.which!==32?null:(__=!0,y_);case"textInput":return t=e.data,t===y_&&__?null:t;default:return null}}function mN(t,e){if(xi)return t==="compositionend"||!em&&kx(t,e)?(t=bx(),_c=Xp=jr=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ix&&e.locale!=="ko"?null:e.data;default:return null}}var gN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gN[t.type]:e==="textarea"}function Nx(t,e,n,r){ix(r),e=Gc(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ga=null,Fa=null;function yN(t){Fx(t,0)}function Gu(t){var e=bi(t);if(Jw(e))return t}function _N(t,e){if(t==="change")return e}var Cx=!1;if(nr){var ud;if(nr){var hd="oninput"in document;if(!hd){var w_=document.createElement("div");w_.setAttribute("oninput","return;"),hd=typeof w_.oninput=="function"}ud=hd}else ud=!1;Cx=ud&&(!document.documentMode||9<document.documentMode)}function x_(){ga&&(ga.detachEvent("onpropertychange",Ax),Fa=ga=null)}function Ax(t){if(t.propertyName==="value"&&Gu(Fa)){var e=[];Nx(e,Fa,t,qp(t)),cx(yN,e)}}function vN(t,e,n){t==="focusin"?(x_(),ga=e,Fa=n,ga.attachEvent("onpropertychange",Ax)):t==="focusout"&&x_()}function wN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gu(Fa)}function xN(t,e){if(t==="click")return Gu(e)}function EN(t,e){if(t==="input"||t==="change")return Gu(e)}function TN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:TN;function Ua(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!tf.call(e,s)||!Tn(t[s],e[s]))return!1}return!0}function E_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T_(t,e){var n=E_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E_(n)}}function Rx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Px(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bN(t){var e=Px(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rx(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=T_(n,i);var o=T_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IN=nr&&"documentMode"in document&&11>=document.documentMode,Ei=null,xf=null,ya=null,Ef=!1;function b_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Ei==null||Ei!==Uc(r)||(r=Ei,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&Ua(ya,r)||(ya=r,r=Gc(xf,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},dd={},jx={};nr&&(jx=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Ku(t){if(dd[t])return dd[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jx)return dd[t]=e[n];return t}var Dx=Ku("animationend"),Ox=Ku("animationiteration"),Mx=Ku("animationstart"),Lx=Ku("transitionend"),Vx=new Map,I_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function os(t,e){Vx.set(t,e),Zs(e,[t])}for(var fd=0;fd<I_.length;fd++){var pd=I_[fd],kN=pd.toLowerCase(),SN=pd[0].toUpperCase()+pd.slice(1);os(kN,"on"+SN)}os(Dx,"onAnimationEnd");os(Ox,"onAnimationIteration");os(Mx,"onAnimationStart");os("dblclick","onDoubleClick");os("focusin","onFocus");os("focusout","onBlur");os(Lx,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NN=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function k_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kS(r,e,void 0,t),t.currentTarget=null}function Fx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;k_(s,a,h),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;k_(s,a,h),i=u}}}if(Bc)throw t=yf,Bc=!1,yf=null,t}function _e(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(Ux(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),Ux(n,t,r,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Jl]){t[Jl]=!0,Gw.forEach(function(n){n!=="selectionchange"&&(NN.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,md("selectionchange",!1,e))}}function Ux(t,e,n,r){switch(Tx(e)){case 1:var s=BS;break;case 4:s=$S;break;default:s=Yp}n=s.bind(null,e,n,t),s=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=ks(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}cx(function(){var h=i,f=qp(n),m=[];e:{var g=Vx.get(t);if(g!==void 0){var b=Jp,N=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":b=sN;break;case"focusin":N="focus",b=cd;break;case"focusout":N="blur",b=cd;break;case"beforeblur":case"afterblur":b=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=aN;break;case Dx:case Ox:case Mx:b=QS;break;case Lx:b=cN;break;case"scroll":b=WS;break;case"wheel":b=hN;break;case"copy":case"cut":case"paste":b=XS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=g_}var R=(e&4)!==0,P=!R&&t==="scroll",E=R?g!==null?g+"Capture":null:g;R=[];for(var w=h,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,E!==null&&(D=Oa(w,E),D!=null&&R.push(Ba(w,D,k)))),P)break;w=w.return}0<R.length&&(g=new b(g,N,null,n,f),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&n!==pf&&(N=n.relatedTarget||n.fromElement)&&(ks(N)||N[rr]))break e;if((b||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,b?(N=n.relatedTarget||n.toElement,b=h,N=N?ks(N):null,N!==null&&(P=ei(N),N!==P||N.tag!==5&&N.tag!==6)&&(N=null)):(b=null,N=h),b!==N)){if(R=p_,D="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=g_,D="onPointerLeave",E="onPointerEnter",w="pointer"),P=b==null?g:bi(b),k=N==null?g:bi(N),g=new R(D,w+"leave",b,n,f),g.target=P,g.relatedTarget=k,D=null,ks(f)===h&&(R=new R(E,w+"enter",N,n,f),R.target=k,R.relatedTarget=P,D=R),P=D,b&&N)t:{for(R=b,E=N,w=0,k=R;k;k=hi(k))w++;for(k=0,D=E;D;D=hi(D))k++;for(;0<w-k;)R=hi(R),w--;for(;0<k-w;)E=hi(E),k--;for(;w--;){if(R===E||E!==null&&R===E.alternate)break t;R=hi(R),E=hi(E)}R=null}else R=null;b!==null&&S_(m,g,b,R,!1),N!==null&&P!==null&&S_(m,P,N,R,!0)}}e:{if(g=h?bi(h):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var F=_N;else if(v_(g))if(Cx)F=EN;else{F=wN;var M=vN}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=xN);if(F&&(F=F(t,h))){Nx(m,F,n,f);break e}M&&M(t,g,h),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&cf(g,"number",g.value)}switch(M=h?bi(h):window,t){case"focusin":(v_(M)||M.contentEditable==="true")&&(Ei=M,xf=h,ya=null);break;case"focusout":ya=xf=Ei=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,b_(m,n,f);break;case"selectionchange":if(IN)break;case"keydown":case"keyup":b_(m,n,f)}var v;if(em)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else xi?kx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ix&&n.locale!=="ko"&&(xi||_!=="onCompositionStart"?_==="onCompositionEnd"&&xi&&(v=bx()):(jr=f,Xp="value"in jr?jr.value:jr.textContent,xi=!0)),M=Gc(h,_),0<M.length&&(_=new m_(_,t,null,n,f),m.push({event:_,listeners:M}),v?_.data=v:(v=Sx(n),v!==null&&(_.data=v)))),(v=fN?pN(t,n):mN(t,n))&&(h=Gc(h,"onBeforeInput"),0<h.length&&(f=new m_("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Fx(m,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Oa(t,n),i!=null&&r.unshift(Ba(t,i,s)),i=Oa(t,e),i!=null&&r.push(Ba(t,i,s))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function S_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,s?(u=Oa(n,i),u!=null&&o.unshift(Ba(n,u,a))):s||(u=Oa(n,i),u!=null&&o.push(Ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CN=/\r\n?/g,AN=/\u0000|\uFFFD/g;function N_(t){return(typeof t=="string"?t:""+t).replace(CN,`
`).replace(AN,"")}function Zl(t,e,n){if(e=N_(e),N_(t)!==e&&n)throw Error(V(425))}function Kc(){}var Tf=null,bf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kf=typeof setTimeout=="function"?setTimeout:void 0,RN=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,PN=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(jN)}:kf;function jN(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Va(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function A_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Cn="__reactFiber$"+fo,$a="__reactProps$"+fo,rr="__reactContainer$"+fo,Sf="__reactEvents$"+fo,DN="__reactListeners$"+fo,ON="__reactHandles$"+fo;function ks(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=A_(t);t!==null;){if(n=t[Cn])return n;t=A_(t)}return e}t=n,n=t.parentNode}return null}function dl(t){return t=t[Cn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Qu(t){return t[$a]||null}var Nf=[],Ii=-1;function as(t){return{current:t}}function Ee(t){0>Ii||(t.current=Nf[Ii],Nf[Ii]=null,Ii--)}function ge(t,e){Ii++,Nf[Ii]=t.current,t.current=e}var Xr={},_t=as(Xr),Pt=as(!1),Ls=Xr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function Qc(){Ee(Pt),Ee(_t)}function R_(t,e,n){if(_t.current!==Xr)throw Error(V(168));ge(_t,e),ge(Pt,n)}function zx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(V(108,vS(t)||"Unknown",s));return Ce({},n,r)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Ls=_t.current,ge(_t,t),ge(Pt,Pt.current),!0}function P_(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=zx(t,e,Ls),r.__reactInternalMemoizedMergedChildContext=t,Ee(Pt),Ee(_t),ge(_t,t)):Ee(Pt),ge(Pt,n)}var Wn=null,Yu=!1,_d=!1;function Bx(t){Wn===null?Wn=[t]:Wn.push(t)}function MN(t){Yu=!0,Bx(t)}function ls(){if(!_d&&Wn!==null){_d=!0;var t=0,e=fe;try{var n=Wn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,Yu=!1}catch(s){throw Wn!==null&&(Wn=Wn.slice(t+1)),fx(Gp,ls),s}finally{fe=e,_d=!1}}return null}var ki=[],Si=0,Xc=null,Jc=0,Kt=[],Qt=0,Vs=null,qn=1,Gn="";function Es(t,e){ki[Si++]=Jc,ki[Si++]=Xc,Xc=t,Jc=e}function $x(t,e,n){Kt[Qt++]=qn,Kt[Qt++]=Gn,Kt[Qt++]=Vs,Vs=t;var r=qn;t=Gn;var s=32-_n(r)-1;r&=~(1<<s),n+=1;var i=32-_n(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,qn=1<<32-_n(e)+s|n<<s|r,Gn=i+t}else qn=1<<i|n<<s|r,Gn=t}function nm(t){t.return!==null&&(Es(t,1),$x(t,1,0))}function rm(t){for(;t===Xc;)Xc=ki[--Si],ki[Si]=null,Jc=ki[--Si],ki[Si]=null;for(;t===Vs;)Vs=Kt[--Qt],Kt[Qt]=null,Gn=Kt[--Qt],Kt[Qt]=null,qn=Kt[--Qt],Kt[Qt]=null}var Vt=null,Lt=null,Ie=!1,dn=null;function Wx(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function j_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Lt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vs!==null?{id:qn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Lt=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(Ie){var e=Lt;if(e){var n=e;if(!j_(t,e)){if(Cf(t))throw Error(V(418));e=Fr(n.nextSibling);var r=Vt;e&&j_(t,e)?Wx(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Vt=t)}}else{if(Cf(t))throw Error(V(418));t.flags=t.flags&-4097|2,Ie=!1,Vt=t}}}function D_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function ec(t){if(t!==Vt)return!1;if(!Ie)return D_(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=Lt)){if(Cf(t))throw Hx(),Error(V(418));for(;e;)Wx(t,e),e=Fr(e.nextSibling)}if(D_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Vt?Fr(t.stateNode.nextSibling):null;return!0}function Hx(){for(var t=Lt;t;)t=Fr(t.nextSibling)}function Qi(){Lt=Vt=null,Ie=!1}function sm(t){dn===null?dn=[t]:dn.push(t)}var LN=dr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function tc(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function O_(t){var e=t._init;return e(t._payload)}function qx(t){function e(E,w){if(t){var k=E.deletions;k===null?(E.deletions=[w],E.flags|=16):k.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function s(E,w){return E=$r(E,w),E.index=0,E.sibling=null,E}function i(E,w,k){return E.index=k,t?(k=E.alternate,k!==null?(k=k.index,k<w?(E.flags|=2,w):k):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,k,D){return w===null||w.tag!==6?(w=Id(k,E.mode,D),w.return=E,w):(w=s(w,k),w.return=E,w)}function u(E,w,k,D){var F=k.type;return F===wi?f(E,w,k.props.children,D,k.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===kr&&O_(F)===w.type)?(D=s(w,k.props),D.ref=Go(E,w,k),D.return=E,D):(D=kc(k.type,k.key,k.props,null,E.mode,D),D.ref=Go(E,w,k),D.return=E,D)}function h(E,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=kd(k,E.mode,D),w.return=E,w):(w=s(w,k.children||[]),w.return=E,w)}function f(E,w,k,D,F){return w===null||w.tag!==7?(w=Os(k,E.mode,D,F),w.return=E,w):(w=s(w,k),w.return=E,w)}function m(E,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Id(""+w,E.mode,k),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wl:return k=kc(w.type,w.key,w.props,null,E.mode,k),k.ref=Go(E,null,w),k.return=E,k;case vi:return w=kd(w,E.mode,k),w.return=E,w;case kr:var D=w._init;return m(E,D(w._payload),k)}if(sa(w)||Bo(w))return w=Os(w,E.mode,k,null),w.return=E,w;tc(E,w)}return null}function g(E,w,k,D){var F=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:a(E,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wl:return k.key===F?u(E,w,k,D):null;case vi:return k.key===F?h(E,w,k,D):null;case kr:return F=k._init,g(E,w,F(k._payload),D)}if(sa(k)||Bo(k))return F!==null?null:f(E,w,k,D,null);tc(E,k)}return null}function b(E,w,k,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(k)||null,a(w,E,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Wl:return E=E.get(D.key===null?k:D.key)||null,u(w,E,D,F);case vi:return E=E.get(D.key===null?k:D.key)||null,h(w,E,D,F);case kr:var M=D._init;return b(E,w,k,M(D._payload),F)}if(sa(D)||Bo(D))return E=E.get(k)||null,f(w,E,D,F,null);tc(w,D)}return null}function N(E,w,k,D){for(var F=null,M=null,v=w,_=w=0,x=null;v!==null&&_<k.length;_++){v.index>_?(x=v,v=null):x=v.sibling;var I=g(E,v,k[_],D);if(I===null){v===null&&(v=x);break}t&&v&&I.alternate===null&&e(E,v),w=i(I,w,_),M===null?F=I:M.sibling=I,M=I,v=x}if(_===k.length)return n(E,v),Ie&&Es(E,_),F;if(v===null){for(;_<k.length;_++)v=m(E,k[_],D),v!==null&&(w=i(v,w,_),M===null?F=v:M.sibling=v,M=v);return Ie&&Es(E,_),F}for(v=r(E,v);_<k.length;_++)x=b(v,E,_,k[_],D),x!==null&&(t&&x.alternate!==null&&v.delete(x.key===null?_:x.key),w=i(x,w,_),M===null?F=x:M.sibling=x,M=x);return t&&v.forEach(function(S){return e(E,S)}),Ie&&Es(E,_),F}function R(E,w,k,D){var F=Bo(k);if(typeof F!="function")throw Error(V(150));if(k=F.call(k),k==null)throw Error(V(151));for(var M=F=null,v=w,_=w=0,x=null,I=k.next();v!==null&&!I.done;_++,I=k.next()){v.index>_?(x=v,v=null):x=v.sibling;var S=g(E,v,I.value,D);if(S===null){v===null&&(v=x);break}t&&v&&S.alternate===null&&e(E,v),w=i(S,w,_),M===null?F=S:M.sibling=S,M=S,v=x}if(I.done)return n(E,v),Ie&&Es(E,_),F;if(v===null){for(;!I.done;_++,I=k.next())I=m(E,I.value,D),I!==null&&(w=i(I,w,_),M===null?F=I:M.sibling=I,M=I);return Ie&&Es(E,_),F}for(v=r(E,v);!I.done;_++,I=k.next())I=b(v,E,_,I.value,D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),w=i(I,w,_),M===null?F=I:M.sibling=I,M=I);return t&&v.forEach(function(C){return e(E,C)}),Ie&&Es(E,_),F}function P(E,w,k,D){if(typeof k=="object"&&k!==null&&k.type===wi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Wl:e:{for(var F=k.key,M=w;M!==null;){if(M.key===F){if(F=k.type,F===wi){if(M.tag===7){n(E,M.sibling),w=s(M,k.props.children),w.return=E,E=w;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===kr&&O_(F)===M.type){n(E,M.sibling),w=s(M,k.props),w.ref=Go(E,M,k),w.return=E,E=w;break e}n(E,M);break}else e(E,M);M=M.sibling}k.type===wi?(w=Os(k.props.children,E.mode,D,k.key),w.return=E,E=w):(D=kc(k.type,k.key,k.props,null,E.mode,D),D.ref=Go(E,w,k),D.return=E,E=D)}return o(E);case vi:e:{for(M=k.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(E,w.sibling),w=s(w,k.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=kd(k,E.mode,D),w.return=E,E=w}return o(E);case kr:return M=k._init,P(E,w,M(k._payload),D)}if(sa(k))return N(E,w,k,D);if(Bo(k))return R(E,w,k,D);tc(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(E,w.sibling),w=s(w,k),w.return=E,E=w):(n(E,w),w=Id(k,E.mode,D),w.return=E,E=w),o(E)):n(E,w)}return P}var Yi=qx(!0),Gx=qx(!1),Zc=as(null),eu=null,Ni=null,im=null;function om(){im=Ni=eu=null}function am(t){var e=Zc.current;Ee(Zc),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Li(t,e){eu=t,im=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(im!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(eu===null)throw Error(V(308));Ni=t,eu.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var Ss=null;function lm(t){Ss===null?Ss=[t]:Ss.push(t)}function Kx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lm(e)):(n.next=s.next,s.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sr(t,n)}return s=r.interleaved,s===null?(e.next=e,lm(r)):(e.next=s.next,s.next=e),r.interleaved=e,sr(t,n)}function wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function M_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var s=t.updateQueue;Sr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=h:a.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,a=i;do{var g=a.lane,b=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=t,R=a;switch(g=e,b=n,R.tag){case 1:if(N=R.payload,typeof N=="function"){m=N.call(b,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=R.payload,g=typeof N=="function"?N.call(b,m,g):N,g==null)break e;m=Ce({},m,g);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else b={eventTime:b,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(h=f=b,u=m):f=f.next=b,o|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Us|=o,t.lanes=o,t.memoizedState=m}}function L_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(V(191,s));s.call(r)}}}var fl={},Pn=as(fl),Wa=as(fl),Ha=as(fl);function Ns(t){if(t===fl)throw Error(V(174));return t}function um(t,e){switch(ge(Ha,e),ge(Wa,t),ge(Pn,fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}Ee(Pn),ge(Pn,e)}function Xi(){Ee(Pn),Ee(Wa),Ee(Ha)}function Yx(t){Ns(Ha.current);var e=Ns(Pn.current),n=hf(e,t.type);e!==n&&(ge(Wa,t),ge(Pn,n))}function hm(t){Wa.current===t&&(Ee(Pn),Ee(Wa))}var ke=as(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function dm(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var xc=dr.ReactCurrentDispatcher,wd=dr.ReactCurrentBatchConfig,Fs=0,Ne=null,Be=null,Qe=null,ru=!1,_a=!1,qa=0,VN=0;function lt(){throw Error(V(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,s,i){if(Fs=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?BN:$N,t=n(r,s),_a){i=0;do{if(_a=!1,qa=0,25<=i)throw Error(V(301));i+=1,Qe=Be=null,e.updateQueue=null,xc.current=WN,t=n(r,s)}while(_a)}if(xc.current=su,e=Be!==null&&Be.next!==null,Fs=0,Qe=Be=Ne=null,ru=!1,e)throw Error(V(300));return t}function mm(){var t=qa!==0;return qa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function nn(){if(Be===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Qe===null?Ne.memoizedState:Qe.next;if(e!==null)Qe=e,Be=t;else{if(t===null)throw Error(V(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Ga(t,e){return typeof e=="function"?e(t):e}function xd(t){var e=nn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,h=i;do{var f=h.lane;if((Fs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,Ne.lanes|=f,Us|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,Us|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ed(t){var e=nn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Tn(i,e.memoizedState)||(At=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Xx(){}function Jx(t,e){var n=Ne,r=nn(),s=e(),i=!Tn(r.memoizedState,s);if(i&&(r.memoizedState=s,At=!0),r=r.queue,gm(t1.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Ka(9,e1.bind(null,n,r,s,e),void 0,null),Ze===null)throw Error(V(349));Fs&30||Zx(n,e,s)}return s}function Zx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e1(t,e,n,r){e.value=n,e.getSnapshot=r,n1(e)&&r1(t)}function t1(t,e,n){return n(function(){n1(e)&&r1(t)})}function n1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function r1(t){var e=sr(t,1);e!==null&&vn(e,t,1,-1)}function V_(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=zN.bind(null,Ne,t),[e.memoizedState,t]}function Ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function s1(){return nn().memoizedState}function Ec(t,e,n,r){var s=Sn();Ne.flags|=t,s.memoizedState=Ka(1|e,n,void 0,r===void 0?null:r)}function Xu(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(Be!==null){var o=Be.memoizedState;if(i=o.destroy,r!==null&&fm(r,o.deps)){s.memoizedState=Ka(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=Ka(1|e,n,i,r)}function F_(t,e){return Ec(8390656,8,t,e)}function gm(t,e){return Xu(2048,8,t,e)}function i1(t,e){return Xu(4,2,t,e)}function o1(t,e){return Xu(4,4,t,e)}function a1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l1(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,a1.bind(null,e,t),n)}function ym(){}function c1(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u1(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function h1(t,e,n){return Fs&21?(Tn(n,e)||(n=gx(),Ne.lanes|=n,Us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function FN(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=wd.transition;wd.transition={};try{t(!1),e()}finally{fe=n,wd.transition=r}}function d1(){return nn().memoizedState}function UN(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f1(t))p1(e,n);else if(n=Kx(t,e,n,r),n!==null){var s=bt();vn(n,t,r,s),m1(n,e,r)}}function zN(t,e,n){var r=Br(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f1(t))p1(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(s.next=s,lm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Kx(t,e,s,r),n!==null&&(s=bt(),vn(n,t,r,s),m1(n,e,r))}}function f1(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function p1(t,e){_a=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var su={readContext:tn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},BN={readContext:tn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:F_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4194308,4,a1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ec(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UN.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:V_,useDebugValue:ym,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=V_(!1),e=t[0];return t=FN.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=Sn();if(Ie){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Ze===null)throw Error(V(349));Fs&30||Zx(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,F_(t1.bind(null,r,i,t),[t]),r.flags|=2048,Ka(9,e1.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ze.identifierPrefix;if(Ie){var n=Gn,r=qn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$N={readContext:tn,useCallback:c1,useContext:tn,useEffect:gm,useImperativeHandle:l1,useInsertionEffect:i1,useLayoutEffect:o1,useMemo:u1,useReducer:xd,useRef:s1,useState:function(){return xd(Ga)},useDebugValue:ym,useDeferredValue:function(t){var e=nn();return h1(e,Be.memoizedState,t)},useTransition:function(){var t=xd(Ga)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Xx,useSyncExternalStore:Jx,useId:d1,unstable_isNewReconciler:!1},WN={readContext:tn,useCallback:c1,useContext:tn,useEffect:gm,useImperativeHandle:l1,useInsertionEffect:i1,useLayoutEffect:o1,useMemo:u1,useReducer:Ed,useRef:s1,useState:function(){return Ed(Ga)},useDebugValue:ym,useDeferredValue:function(t){var e=nn();return Be===null?e.memoizedState=t:h1(e,Be.memoizedState,t)},useTransition:function(){var t=Ed(Ga)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Xx,useSyncExternalStore:Jx,useId:d1,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Br(t),i=Xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ur(t,i,s),e!==null&&(vn(e,t,s,r),wc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Br(t),i=Xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ur(t,i,s),e!==null&&(vn(e,t,s,r),wc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Br(t),s=Xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ur(t,s,r),e!==null&&(vn(e,t,r,n),wc(e,t,r))}};function U_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(s,i):!0}function g1(t,e,n){var r=!1,s=Xr,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=jt(e)?Ls:_t.current,r=e.contextTypes,i=(r=r!=null)?Ki(t,s):Xr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function z_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function jf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},cm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=jt(e)?Ls:_t.current,s.context=Ki(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Pf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ju.enqueueReplaceState(s,s.state,null),tu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=_S(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HN=typeof WeakMap=="function"?WeakMap:Map;function y1(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,Wf=r),Df(t,e)},n}function _1(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Df(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function B_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=i2.bind(null,t,e,n),e.then(t,t))}function $_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function W_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var qN=dr.ReactCurrentOwner,At=!1;function Et(t,e,n,r){e.child=t===null?Gx(e,null,n,r):Yi(e,t.child,n,r)}function H_(t,e,n,r,s){n=n.render;var i=e.ref;return Li(e,s),r=pm(t,e,n,r,i,s),n=mm(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Ie&&n&&nm(e),e.flags|=1,Et(t,e,r,s),e.child)}function q_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Im(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,v1(t,e,i,r,s)):(t=kc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,r)&&t.ref===e.ref)return ir(t,e,s)}return e.flags|=1,t=$r(i,r),t.ref=e.ref,t.return=e,e.child=t}function v1(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ua(i,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,ir(t,e,s)}return Of(t,e,n,r,s)}function w1(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ai,Mt),Mt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ai,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Ai,Mt),Mt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Ai,Mt),Mt|=r;return Et(t,e,s,n),e.child}function x1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,r,s){var i=jt(n)?Ls:_t.current;return i=Ki(e,i),Li(e,s),n=pm(t,e,n,r,i,s),r=mm(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Ie&&r&&nm(e),e.flags|=1,Et(t,e,n,s),e.child)}function G_(t,e,n,r,s){if(jt(n)){var i=!0;Yc(e)}else i=!1;if(Li(e,s),e.stateNode===null)Tc(t,e),g1(e,n,r),jf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=tn(h):(h=jt(n)?Ls:_t.current,h=Ki(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&z_(e,o,r,h),Sr=!1;var g=e.memoizedState;o.state=g,tu(e,r,o,s),u=e.memoizedState,a!==r||g!==u||Pt.current||Sr?(typeof f=="function"&&(Pf(e,n,f,r),u=e.memoizedState),(a=Sr||U_(e,n,a,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qx(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:un(e.type,a),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=jt(n)?Ls:_t.current,u=Ki(e,u));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&z_(e,o,r,u),Sr=!1,g=e.memoizedState,o.state=g,tu(e,r,o,s);var N=e.memoizedState;a!==m||g!==N||Pt.current||Sr?(typeof b=="function"&&(Pf(e,n,b,r),N=e.memoizedState),(h=Sr||U_(e,n,h,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Mf(t,e,n,r,i,s)}function Mf(t,e,n,r,s,i){x1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&P_(e,n,!1),ir(t,e,i);r=e.stateNode,qN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,i),e.child=Yi(e,null,a,i)):Et(t,e,a,i),e.memoizedState=r.state,s&&P_(e,n,!0),e.child}function E1(t){var e=t.stateNode;e.pendingContext?R_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&R_(t,e.context,!1),um(t,e.containerInfo)}function K_(t,e,n,r,s){return Qi(),sm(s),e.flags|=256,Et(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function T1(t,e,n){var r=e.pendingProps,s=ke.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(ke,s&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=th(o,r,0,null),t=Os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Vf(n),e.memoizedState=Lf,t):_m(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return GN(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=$r(a,i):(i=Os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return i=t.child,t=i.sibling,r=$r(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _m(t,e){return e=th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nc(t,e,n,r){return r!==null&&sm(r),Yi(e,t.child,null,n),t=_m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GN(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Td(Error(V(422))),nc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=th({mode:"visible",children:r.children},s,0,null),i=Os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Lf,i);if(!(e.mode&1))return nc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(V(419)),r=Td(i,r,void 0),nc(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=Ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sr(t,s),vn(r,t,s,-1))}return bm(),r=Td(Error(V(421))),nc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=o2.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Lt=Fr(s.nextSibling),Vt=e,Ie=!0,dn=null,t!==null&&(Kt[Qt++]=qn,Kt[Qt++]=Gn,Kt[Qt++]=Vs,qn=t.id,Gn=t.overflow,Vs=e),e=_m(e,r.children),e.flags|=4096,e)}function Q_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function bd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function b1(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q_(t,n,e);else if(t.tag===19)Q_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),bd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&nu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}bd(e,!0,n,null,i);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KN(t,e,n){switch(e.tag){case 3:E1(e),Qi();break;case 5:Yx(e);break;case 1:jt(e.type)&&Yc(e);break;case 4:um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(Zc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?T1(t,e,n):(ge(ke,ke.current&1),t=ir(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b1(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,w1(t,e,n)}return ir(t,e,n)}var I1,Ff,k1,S1;I1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};k1=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ns(Pn.current);var i=null;switch(n){case"input":s=af(t,s),r=af(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=uf(t,s),r=uf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kc)}df(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var a=s[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ja.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(a=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ja.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),i||a===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};S1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QN(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return jt(e.type)&&Qc(),ct(e),null;case 3:return r=e.stateNode,Xi(),Ee(Pt),Ee(_t),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ec(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Gf(dn),dn=null))),Ff(t,e),ct(e),null;case 5:hm(e);var s=Ns(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)k1(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return ct(e),null}if(t=Ns(Pn.current),ec(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Cn]=e,r[$a]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<oa.length;s++)_e(oa[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":s_(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":o_(r,i),_e("invalid",r)}df(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zl(r.textContent,a,t),s=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Hl(r),i_(r,i,!0);break;case"textarea":Hl(r),a_(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[$a]=r,I1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<oa.length;s++)_e(oa[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":s_(t,r),s=af(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),_e("invalid",t);break;case"textarea":o_(t,r),s=uf(t,r),_e("invalid",t);break;default:s=r}df(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?sx(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nx(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Da(t,u):typeof u=="number"&&Da(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ja.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&Bp(t,i,u,o))}switch(n){case"input":Hl(t),i_(t,r,!1);break;case"textarea":Hl(t),a_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ji(t,!!r.multiple,i,!1):r.defaultValue!=null&&ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)S1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=Ns(Ha.current),Ns(Pn.current),ec(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(i=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:Zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return ct(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Lt!==null&&e.mode&1&&!(e.flags&128))Hx(),Qi(),e.flags|=98560,i=!1;else if(i=ec(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(V(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[Cn]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),i=!1}else dn!==null&&(Gf(dn),dn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?We===0&&(We=3):bm())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Xi(),Ff(t,e),t===null&&za(e.stateNode.containerInfo),ct(e),null;case 10:return am(e.type._context),ct(e),null;case 17:return jt(e.type)&&Qc(),ct(e),null;case 19:if(Ee(ke),i=e.memoizedState,i===null)return ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ko(i,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,Ko(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>Zi&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return ct(e),null}else 2*De()-i.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return Tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function YN(t,e){switch(rm(e),e.tag){case 1:return jt(e.type)&&Qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),Ee(Pt),Ee(_t),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return Xi(),null;case 10:return am(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var rc=!1,dt=!1,XN=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Uf(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Y_=!1;function JN(t,e){if(Tf=Hc,t=Px(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var b;m!==n||s!==0&&m.nodeType!==3||(a=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===t)break t;if(g===n&&++h===s&&(a=o),g===i&&++f===r&&(u=o),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},Hc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var R=N.memoizedProps,P=N.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:un(e.type,R),P);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return N=Y_,Y_=!1,N}function va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Uf(e,n,i)}s=s.next}while(s!==r)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N1(t){var e=t.alternate;e!==null&&(t.alternate=null,N1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[$a],delete e[Sf],delete e[DN],delete e[ON])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C1(t){return t.tag===5||t.tag===3||t.tag===4}function X_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kc));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var tt=null,hn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)A1(t,e,n),n=n.sibling}function A1(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:dt||Ci(n,e);case 6:var r=tt,s=hn;tt=null,Tr(t,e,n),tt=r,hn=s,tt!==null&&(hn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(hn?(t=tt,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),Va(t)):yd(tt,n.stateNode));break;case 4:r=tt,s=hn,tt=n.stateNode.containerInfo,hn=!0,Tr(t,e,n),tt=r,hn=s;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Uf(n,e,o),s=s.next}while(s!==r)}Tr(t,e,n);break;case 1:if(!dt&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Tr(t,e,n),dt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function J_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XN),e.forEach(function(r){var s=a2.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,hn=!1;break e;case 3:tt=a.stateNode.containerInfo,hn=!0;break e;case 4:tt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(tt===null)throw Error(V(160));A1(i,o,s),tt=null,hn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Re(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R1(e,t),e=e.sibling}function R1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),kn(t),r&4){try{va(3,t,t.return),Zu(3,t)}catch(R){Re(t,t.return,R)}try{va(5,t,t.return)}catch(R){Re(t,t.return,R)}}break;case 1:cn(e,t),kn(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(cn(e,t),kn(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var s=t.stateNode;try{Da(s,"")}catch(R){Re(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Zw(s,i),ff(a,o);var h=ff(a,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?sx(s,m):f==="dangerouslySetInnerHTML"?nx(s,m):f==="children"?Da(s,m):Bp(s,f,m,h)}switch(a){case"input":lf(s,i);break;case"textarea":ex(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?ji(s,!!i.multiple,b,!1):g!==!!i.multiple&&(i.defaultValue!=null?ji(s,!!i.multiple,i.defaultValue,!0):ji(s,!!i.multiple,i.multiple?[]:"",!1))}s[$a]=i}catch(R){Re(t,t.return,R)}}break;case 6:if(cn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(V(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Re(t,t.return,R)}}break;case 3:if(cn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(R){Re(t,t.return,R)}break;case 4:cn(e,t),kn(t);break;case 13:cn(e,t),kn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xm=De())),r&4&&J_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(h=dt)||f,cn(e,t),dt=h):cn(e,t),kn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,b=g.child,g.tag){case 0:case 11:case 14:case 15:va(4,g,g.return);break;case 1:Ci(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(R){Re(r,n,R)}}break;case 5:Ci(g,g.return);break;case 22:if(g.memoizedState!==null){e0(m);continue}}b!==null?(b.return=g,W=b):e0(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=rx("display",o))}catch(R){Re(t,t.return,R)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(R){Re(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(e,t),kn(t),r&4&&J_(t);break;case 21:break;default:cn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C1(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Da(s,""),r.flags&=-33);var i=X_(t);$f(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=X_(t);Bf(t,a,o);break;default:throw Error(V(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZN(t,e,n){W=t,P1(t)}function P1(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||rc;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||dt;a=rc;var h=dt;if(rc=o,(dt=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?t0(s):u!==null?(u.return=o,W=u):t0(s);for(;i!==null;)W=i,P1(i),i=i.sibling;W=s,rc=a,dt=h}Z_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Z_(t)}}function Z_(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&L_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Va(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}dt||e.flags&512&&zf(e)}catch(g){Re(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function e0(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function t0(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Re(e,s,u)}}var i=e.return;try{zf(e)}catch(u){Re(e,i,u)}break;case 5:var o=e.return;try{zf(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var e2=Math.ceil,iu=dr.ReactCurrentDispatcher,vm=dr.ReactCurrentOwner,en=dr.ReactCurrentBatchConfig,ue=0,Ze=null,Me=null,st=0,Mt=0,Ai=as(0),We=0,Qa=null,Us=0,eh=0,wm=0,wa=null,Ct=null,xm=0,Zi=1/0,$n=null,ou=!1,Wf=null,zr=null,sc=!1,Dr=null,au=0,xa=0,Hf=null,bc=-1,Ic=0;function bt(){return ue&6?De():bc!==-1?bc:bc=De()}function Br(t){return t.mode&1?ue&2&&st!==0?st&-st:LN.transition!==null?(Ic===0&&(Ic=gx()),Ic):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Tx(t.type)),t):1}function vn(t,e,n,r){if(50<xa)throw xa=0,Hf=null,Error(V(185));ul(t,n,r),(!(ue&2)||t!==Ze)&&(t===Ze&&(!(ue&2)&&(eh|=n),We===4&&Cr(t,st)),Dt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Zi=De()+500,Yu&&ls()))}function Dt(t,e){var n=t.callbackNode;LS(t,e);var r=Wc(t,t===Ze?st:0);if(r===0)n!==null&&u_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&u_(n),e===1)t.tag===0?MN(n0.bind(null,t)):Bx(n0.bind(null,t)),PN(function(){!(ue&6)&&ls()}),n=null;else{switch(yx(r)){case 1:n=Gp;break;case 4:n=px;break;case 16:n=$c;break;case 536870912:n=mx;break;default:n=$c}n=U1(n,j1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j1(t,e){if(bc=-1,Ic=0,ue&6)throw Error(V(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=Wc(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var s=ue;ue|=2;var i=O1();(Ze!==t||st!==e)&&($n=null,Zi=De()+500,Ds(t,e));do try{r2();break}catch(a){D1(t,a)}while(!0);om(),iu.current=i,ue=s,Me!==null?e=0:(Ze=null,st=0,e=We)}if(e!==0){if(e===2&&(s=_f(t),s!==0&&(r=s,e=qf(t,s))),e===1)throw n=Qa,Ds(t,0),Cr(t,r),Dt(t,De()),n;if(e===6)Cr(t,r);else{if(s=t.current.alternate,!(r&30)&&!t2(s)&&(e=lu(t,r),e===2&&(i=_f(t),i!==0&&(r=i,e=qf(t,i))),e===1))throw n=Qa,Ds(t,0),Cr(t,r),Dt(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:Ts(t,Ct,$n);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=xm+500-De(),10<e)){if(Wc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=kf(Ts.bind(null,t,Ct,$n),e);break}Ts(t,Ct,$n);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-_n(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e2(r/1960))-r,10<r){t.timeoutHandle=kf(Ts.bind(null,t,Ct,$n),r);break}Ts(t,Ct,$n);break;case 5:Ts(t,Ct,$n);break;default:throw Error(V(329))}}}return Dt(t,De()),t.callbackNode===n?j1.bind(null,t):null}function qf(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Ds(t,e).flags|=256),t=lu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Gf(e)),t}function Gf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function t2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Tn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~wm,e&=~eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function n0(t){if(ue&6)throw Error(V(327));Vi();var e=Wc(t,0);if(!(e&1))return Dt(t,De()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=Qa,Ds(t,0),Cr(t,e),Dt(t,De()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ts(t,Ct,$n),Dt(t,De()),null}function Em(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Zi=De()+500,Yu&&ls())}}function zs(t){Dr!==null&&Dr.tag===0&&!(ue&6)&&Vi();var e=ue;ue|=1;var n=en.transition,r=fe;try{if(en.transition=null,fe=1,t)return t()}finally{fe=r,en.transition=n,ue=e,!(ue&6)&&ls()}}function Tm(){Mt=Ai.current,Ee(Ai)}function Ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RN(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qc();break;case 3:Xi(),Ee(Pt),Ee(_t),dm();break;case 5:hm(r);break;case 4:Xi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:am(r.type._context);break;case 22:case 23:Tm()}n=n.return}if(Ze=t,Me=t=$r(t.current,null),st=Mt=e,We=0,Qa=null,wm=eh=Us=0,Ct=wa=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ss=null}return t}function D1(t,e){do{var n=Me;try{if(om(),xc.current=su,ru){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ru=!1}if(Fs=0,Qe=Be=Ne=null,_a=!1,qa=0,vm.current=null,n===null||n.return===null){We=1,Qa=e,Me=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=$_(o);if(b!==null){b.flags&=-257,W_(b,o,a,i,e),b.mode&1&&B_(i,h,e),e=b,u=h;var N=e.updateQueue;if(N===null){var R=new Set;R.add(u),e.updateQueue=R}else N.add(u);break e}else{if(!(e&1)){B_(i,h,e),bm();break e}u=Error(V(426))}}else if(Ie&&a.mode&1){var P=$_(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),W_(P,o,a,i,e),sm(Ji(u,a));break e}}i=u=Ji(u,a),We!==4&&(We=2),wa===null?wa=[i]:wa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=y1(i,u,e);M_(i,E);break e;case 1:a=u;var w=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(zr===null||!zr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=_1(i,a,e);M_(i,D);break e}}i=i.return}while(i!==null)}L1(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function O1(){var t=iu.current;return iu.current=su,t===null?su:t}function bm(){(We===0||We===3||We===2)&&(We=4),Ze===null||!(Us&268435455)&&!(eh&268435455)||Cr(Ze,st)}function lu(t,e){var n=ue;ue|=2;var r=O1();(Ze!==t||st!==e)&&($n=null,Ds(t,e));do try{n2();break}catch(s){D1(t,s)}while(!0);if(om(),ue=n,iu.current=r,Me!==null)throw Error(V(261));return Ze=null,st=0,We}function n2(){for(;Me!==null;)M1(Me)}function r2(){for(;Me!==null&&!NS();)M1(Me)}function M1(t){var e=F1(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?L1(t):Me=e,vm.current=null}function L1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YN(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Me=null;return}}else if(n=QN(n,e,Mt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);We===0&&(We=5)}function Ts(t,e,n){var r=fe,s=en.transition;try{en.transition=null,fe=1,s2(t,e,n,r)}finally{en.transition=s,fe=r}return null}function s2(t,e,n,r){do Vi();while(Dr!==null);if(ue&6)throw Error(V(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(VS(t,i),t===Ze&&(Me=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sc||(sc=!0,U1($c,function(){return Vi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=en.transition,en.transition=null;var o=fe;fe=1;var a=ue;ue|=4,vm.current=null,JN(t,n),R1(n,t),bN(bf),Hc=!!Tf,bf=Tf=null,t.current=n,ZN(n),CS(),ue=a,fe=o,en.transition=i}else t.current=n;if(sc&&(sc=!1,Dr=t,au=s),i=t.pendingLanes,i===0&&(zr=null),PS(n.stateNode),Dt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ou)throw ou=!1,t=Wf,Wf=null,t;return au&1&&t.tag!==0&&Vi(),i=t.pendingLanes,i&1?t===Hf?xa++:(xa=0,Hf=t):xa=0,ls(),null}function Vi(){if(Dr!==null){var t=yx(au),e=en.transition,n=fe;try{if(en.transition=null,fe=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,au=0,ue&6)throw Error(V(331));var s=ue;for(ue|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:va(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,b=f.return;if(N1(f),f===h){W=null;break}if(g!==null){g.return=b,W=g;break}W=b}}}var N=i.alternate;if(N!==null){var R=N.child;if(R!==null){N.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:va(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,W=E;break e}W=i.return}}var w=t.current;for(W=w;W!==null;){o=W;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,W=k;else e:for(o=w;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(F){Re(a,a.return,F)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(ue=s,ls(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{fe=n,en.transition=e}}return!1}function r0(t,e,n){e=Ji(n,e),e=y1(t,e,1),t=Ur(t,e,1),e=bt(),t!==null&&(ul(t,1,e),Dt(t,e))}function Re(t,e,n){if(t.tag===3)r0(t,t,n);else for(;e!==null;){if(e.tag===3){r0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=Ji(n,t),t=_1(e,t,1),e=Ur(e,t,1),t=bt(),e!==null&&(ul(e,1,t),Dt(e,t));break}}e=e.return}}function i2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(We===4||We===3&&(st&130023424)===st&&500>De()-xm?Ds(t,0):wm|=n),Dt(t,e)}function V1(t,e){e===0&&(t.mode&1?(e=Kl,Kl<<=1,!(Kl&130023424)&&(Kl=4194304)):e=1);var n=bt();t=sr(t,e),t!==null&&(ul(t,e,n),Dt(t,n))}function o2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V1(t,n)}function a2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),V1(t,n)}var F1;F1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,KN(t,e,n);At=!!(t.flags&131072)}else At=!1,Ie&&e.flags&1048576&&$x(e,Jc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tc(t,e),t=e.pendingProps;var s=Ki(e,_t.current);Li(e,n),s=pm(null,e,r,t,s,n);var i=mm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,Yc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,cm(e),s.updater=Ju,e.stateNode=s,s._reactInternals=e,jf(e,r,t,n),e=Mf(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&nm(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=c2(r),t=un(r,t),s){case 0:e=Of(null,e,r,t,n);break e;case 1:e=G_(null,e,r,t,n);break e;case 11:e=H_(null,e,r,t,n);break e;case 14:e=q_(null,e,r,un(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Of(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),G_(t,e,r,s,n);case 3:e:{if(E1(e),t===null)throw Error(V(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Qx(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ji(Error(V(423)),e),e=K_(t,e,r,n,s);break e}else if(r!==s){s=Ji(Error(V(424)),e),e=K_(t,e,r,n,s);break e}else for(Lt=Fr(e.stateNode.containerInfo.firstChild),Vt=e,Ie=!0,dn=null,n=Gx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===s){e=ir(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Yx(e),t===null&&Af(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,If(r,s)?o=null:i!==null&&If(r,i)&&(e.flags|=32),x1(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return T1(t,e,n);case 4:return um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),H_(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(Zc,r._currentValue),r._currentValue=o,i!==null)if(Tn(i.value,o)){if(i.children===s.children&&!Pt.current){e=ir(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Xn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Rf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(V(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Li(e,n),s=tn(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),q_(t,e,r,s,n);case 15:return v1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Tc(t,e),e.tag=1,jt(r)?(t=!0,Yc(e)):t=!1,Li(e,n),g1(e,r,s),jf(e,r,s,n),Mf(null,e,r,!0,t,n);case 19:return b1(t,e,n);case 22:return w1(t,e,n)}throw Error(V(156,e.tag))};function U1(t,e){return fx(t,e)}function l2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new l2(t,e,n,r)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c2(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===Hp)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Os(n.children,s,i,e);case $p:o=8,s|=8;break;case nf:return t=Jt(12,n,e,s|2),t.elementType=nf,t.lanes=i,t;case rf:return t=Jt(13,n,e,s),t.elementType=rf,t.lanes=i,t;case sf:return t=Jt(19,n,e,s),t.elementType=sf,t.lanes=i,t;case Yw:return th(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kw:o=10;break e;case Qw:o=9;break e;case Wp:o=11;break e;case Hp:o=14;break e;case kr:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Os(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function th(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=Yw,t.lanes=n,t.stateNode={isHidden:!1},t}function Id(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function kd(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u2(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=od(0),this.expirationTimes=od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,s,i,o,a,u){return t=new u2(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(i),t}function h2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z1(t){if(!t)return Xr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(jt(n))return zx(t,n,e)}return e}function B1(t,e,n,r,s,i,o,a,u){return t=km(n,r,!0,t,s,i,o,a,u),t.context=z1(null),n=t.current,r=bt(),s=Br(n),i=Xn(r,s),i.callback=e??null,Ur(n,i,s),t.current.lanes=s,ul(t,s,r),Dt(t,r),t}function nh(t,e,n,r){var s=e.current,i=bt(),o=Br(s);return n=z1(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(s,e,o),t!==null&&(vn(t,s,o,i),wc(t,s,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){s0(t,e),(t=t.alternate)&&s0(t,e)}function d2(){return null}var $1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nm(t){this._internalRoot=t}rh.prototype.render=Nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));nh(t,e,null,null)};rh.prototype.unmount=Nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zs(function(){nh(null,t,null,null)}),e[rr]=null}};function rh(t){this._internalRoot=t}rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=wx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Ex(t)}};function Cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function i0(){}function f2(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=cu(o);i.call(h)}}var o=B1(e,r,t,0,null,!1,!1,"",i0);return t._reactRootContainer=o,t[rr]=o.current,za(t.nodeType===8?t.parentNode:t),zs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var h=cu(u);a.call(h)}}var u=km(t,0,!1,null,null,!1,!1,"",i0);return t._reactRootContainer=u,t[rr]=u.current,za(t.nodeType===8?t.parentNode:t),zs(function(){nh(e,u,n,r)}),u}function ih(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=cu(o);a.call(u)}}nh(e,o,t,s)}else o=f2(n,e,t,s,r);return cu(o)}_x=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Kp(e,n|1),Dt(e,De()),!(ue&6)&&(Zi=De()+500,ls()))}break;case 13:zs(function(){var r=sr(t,1);if(r!==null){var s=bt();vn(r,t,1,s)}}),Sm(t,1)}};Qp=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=bt();vn(e,t,134217728,n)}Sm(t,134217728)}};vx=function(t){if(t.tag===13){var e=Br(t),n=sr(t,e);if(n!==null){var r=bt();vn(n,t,e,r)}Sm(t,e)}};wx=function(){return fe};xx=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Qu(r);if(!s)throw Error(V(90));Jw(r),lf(r,s)}}}break;case"textarea":ex(t,n);break;case"select":e=n.value,e!=null&&ji(t,!!n.multiple,e,!1)}};ax=Em;lx=zs;var p2={usingClientEntryPoint:!1,Events:[dl,bi,Qu,ix,ox,Em]},Qo={findFiberByHostInstance:ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m2={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hx(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||d2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Hu=ic.inject(m2),Rn=ic}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p2;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cm(e))throw Error(V(200));return h2(t,e,null,n)};Wt.createRoot=function(t,e){if(!Cm(t))throw Error(V(299));var n=!1,r="",s=$1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,s),t[rr]=e.current,za(t.nodeType===8?t.parentNode:t),new Nm(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=hx(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return zs(t)};Wt.hydrate=function(t,e,n){if(!sh(e))throw Error(V(200));return ih(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Cm(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=$1;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B1(e,null,t,1,n??null,s,!1,i,o),t[rr]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new rh(e)};Wt.render=function(t,e,n){if(!sh(e))throw Error(V(200));return ih(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!sh(t))throw Error(V(40));return t._reactRootContainer?(zs(function(){ih(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Wt.unstable_batchedUpdates=Em;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sh(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return ih(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function W1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W1)}catch(t){console.error(t)}}W1(),Ww.exports=Wt;var g2=Ww.exports,o0=g2;ef.createRoot=o0.createRoot,ef.hydrateRoot=o0.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),q=(t,e)=>{const n=K.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...h},f)=>K.createElement("svg",{ref:f,...y2,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${_2(t)}`,a].join(" "),...h},[...e.map(([m,g])=>K.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=q("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=q("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=q("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=q("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=q("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=q("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=q("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=q("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=q("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=q("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=q("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=q("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=q("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=q("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=q("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=q("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=q("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=q("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=q("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=q("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=q("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=q("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=q("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=q("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=q("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Cs={tier:"Silver Member",nextTierPoints:2e3,skinType:"Oily Skin"},iE=[{id:1,name:"Cetaphil Gentle Skin Cleanser",brand:"Cetaphil",price:"₹333",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",daysLeft:5,isSubscribed:!1},{id:2,name:"Minimalist 10% Niacinamide Serum",brand:"Minimalist",price:"₹599",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",daysLeft:12,isSubscribed:!0}],oE=[{id:101,name:"Dot & Key 72k Hydrating Gel",brand:"Dot & Key",price:"₹495",originalPrice:"₹550",discount:"10% Off",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200"},{id:102,name:"Plum Green Tea Mattifying Moisturizer",brand:"Plum",price:"₹420",originalPrice:"₹470",discount:"11% Off",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=200"},{id:103,name:"Aqualogica Radiance+ Dewy Sunscreen",brand:"Aqualogica",price:"₹399",originalPrice:"₹450",discount:"15% Off",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200"}];function W2(){const e=["M","T","W","T","F","S","S"],n=[!0,!0,!0,!0,!0,!1,!1];return c.jsxs("div",{className:"bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border border-orange-100 rounded-3xl p-5 shadow-sm",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center",children:c.jsx(Y1,{className:"w-5 h-5 text-orange-500 fill-current"})}),c.jsxs("div",{children:[c.jsxs("h3",{className:"font-bold text-gray-900 text-sm",children:[5,"-Day Streak! 🔥"]}),c.jsx("p",{className:"text-[10px] text-gray-500",children:"2 more days for bonus reward"})]})]}),c.jsx("div",{className:"bg-white border border-orange-200 rounded-full p-2 shadow-sm animate-bounce-gentle",children:c.jsx(Jr,{className:"w-5 h-5 text-nykaa-pink"})})]}),c.jsx("div",{className:"flex justify-between gap-1",children:e.map((r,s)=>c.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[c.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${n[s]?"bg-gradient-to-br from-orange-400 to-nykaa-pink text-white shadow-md scale-105":"bg-gray-100 text-gray-400 border border-gray-200"}`,children:n[s]?c.jsx(cs,{className:"w-4 h-4"}):s+1}),c.jsx("span",{className:`text-[10px] font-medium ${n[s]?"text-orange-600":"text-gray-400"}`,children:r})]},s))})]})}const l0=[{id:1,name:"Maybelline Fit Me Foundation",brand:"Maybelline",price:"₹349",originalPrice:"₹599",discount:"42% Off",image:"https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200",endTime:2*60*60},{id:2,name:"L'Oreal Paris Hyaluronic Acid Serum",brand:"L'Oreal",price:"₹599",originalPrice:"₹999",discount:"40% Off",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",endTime:1*60*60+30*60}];function H2({showSuccess:t}){const[e,n]=K.useState(l0[0].endTime);K.useEffect(()=>{const i=setInterval(()=>{n(o=>o>0?o-1:0)},1e3);return()=>clearInterval(i)},[]);const r=i=>{const o=Math.floor(i/3600),a=Math.floor(i%3600/60),u=i%60;return`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(u).padStart(2,"0")}`},s=l0[0];return c.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-3xl p-5 relative overflow-hidden",children:[c.jsxs("div",{className:"absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-2xl flex items-center gap-1",children:[c.jsx(Qf,{className:"w-3 h-3 fill-current"})," FLASH DEAL"]}),c.jsxs("h3",{className:"font-bold text-gray-900 mb-3 flex items-center gap-2",children:[c.jsx(G1,{className:"w-4 h-4 text-red-500"}),"Ends in",c.jsx("span",{className:"font-mono text-red-500 bg-red-100 px-2 py-0.5 rounded-lg text-sm tracking-wider",children:r(e)})]}),c.jsxs("div",{className:"flex gap-4 items-center",children:[c.jsx("img",{src:s.image,alt:s.name,className:"w-16 h-16 rounded-xl object-cover bg-white shadow-sm"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase",children:s.brand}),c.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight truncate",children:s.name}),c.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[c.jsx("span",{className:"font-bold text-sm text-gray-900",children:s.price}),c.jsx("span",{className:"text-xs text-gray-400 line-through",children:s.originalPrice}),c.jsx("span",{className:"text-[10px] font-bold text-red-500 bg-red-100 px-1.5 py-0.5 rounded-full",children:s.discount})]})]})]}),c.jsxs("button",{onClick:()=>t(30),className:"w-full mt-4 bg-red-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-red-600 transition-colors flex items-center justify-center gap-2",children:[c.jsx(Qf,{className:"w-4 h-4 fill-current"})," Grab Deal Now"]})]})}function q2(){const[t,e]=K.useState(!1),n="GLOW150",r=()=>{navigator.clipboard.writeText(n).catch(()=>{}),e(!0),setTimeout(()=>e(!1),2e3)};return c.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-5 shadow-sm",children:[c.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[c.jsx("div",{className:"w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0",children:c.jsx(sE,{className:"w-5 h-5 text-purple-600"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-gray-900 text-sm",children:"Refer & Earn 👯"}),c.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:["You and your friend both get ",c.jsx("span",{className:"font-bold text-nykaa-pink",children:"₹150 off"})]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 bg-white border border-dashed border-purple-300 rounded-xl px-4 py-3",children:[c.jsx("span",{className:"font-mono font-bold text-lg text-purple-700 flex-1 tracking-wider",children:n}),c.jsx("button",{onClick:r,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t?"bg-green-100 text-green-700":"bg-purple-100 text-purple-700 hover:bg-purple-200"}`,children:t?c.jsxs(c.Fragment,{children:[c.jsx(cs,{className:"w-3.5 h-3.5"})," Copied!"]}):c.jsxs(c.Fragment,{children:[c.jsx(T2,{className:"w-3.5 h-3.5"})," Copy"]})})]}),c.jsxs("button",{className:"w-full mt-4 bg-purple-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2",children:["Share with Friends ",c.jsx(Jn,{className:"w-4 h-4"})]})]})}function G2({cartTotal:t=701}){const n=Math.max(0,999-t),r=Math.min(t/999*100,100),s=n<=0;return c.jsxs("div",{className:`rounded-3xl p-5 border shadow-sm transition-all ${s?"bg-gradient-to-r from-green-50 to-emerald-50 border-green-200":"bg-gradient-to-r from-pink-50 to-purple-50 border-pink-100"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${s?"bg-green-100":"bg-pink-100"}`,children:c.jsx(Jr,{className:`w-5 h-5 ${s?"text-green-600":"text-nykaa-pink"}`})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-sm text-gray-900",children:s?"🎉 Gift Unlocked!":"Surprise Gift 🎁"}),c.jsx("p",{className:"text-[10px] text-gray-500",children:s?"Free deluxe sample with your order!":`Add ₹${n} more to unlock`})]})]}),!s&&c.jsxs("span",{className:"text-xs font-bold text-nykaa-pink bg-nykaa-pink/10 px-2.5 py-1 rounded-full",children:["₹",t,"/₹",999]})]}),c.jsx("div",{className:"h-2.5 bg-white/80 rounded-full overflow-hidden border border-gray-200",children:c.jsx("div",{className:`h-full rounded-full transition-all duration-700 ease-out ${s?"bg-green-500":"bg-nykaa-gradient"}`,style:{width:`${r}%`}})}),!s&&c.jsxs("button",{className:"w-full mt-3 bg-white border border-gray-200 text-gray-800 font-semibold py-2 rounded-xl text-xs hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5",children:[c.jsx(qt,{className:"w-3.5 h-3.5"})," Add more items"]})]})}const K2=[{id:201,name:"MAC Ruby Woo Lipstick",brand:"MAC",price:"₹1,750",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"},{id:202,name:"Lakme 9to5 Primer + Matte",brand:"Lakme",price:"₹650",image:"https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200"},{id:203,name:"The Ordinary Niacinamide",brand:"The Ordinary",price:"₹590",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"},{id:204,name:"Forest Essentials Night Cream",brand:"Forest Essentials",price:"₹1,575",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200"}];function Q2({showSuccess:t}){return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Q1,{className:"w-4 h-4 text-gray-400"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Recently Viewed"})]}),c.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 md:mx-0 md:px-0",children:K2.map(e=>c.jsxs("div",{className:"min-w-[120px] bg-white border border-gray-100 rounded-2xl p-2.5 shadow-sm hover:shadow-md transition-shadow",children:[c.jsx("div",{className:"bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center mb-2",children:c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover mix-blend-multiply"})}),c.jsx("p",{className:"text-[9px] text-gray-400 font-bold uppercase",children:e.brand}),c.jsx("h4",{className:"text-[11px] font-semibold text-gray-800 leading-tight h-7 line-clamp-2 mt-0.5",children:e.name}),c.jsxs("div",{className:"flex justify-between items-center mt-1.5",children:[c.jsx("p",{className:"font-bold text-xs text-gray-900",children:e.price}),c.jsx("button",{onClick:()=>t(15),className:"w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors",children:c.jsx(qt,{className:"w-3 h-3"})})]})]},e.id))})]})}const Y2=[{id:301,name:"Cetaphil Gentle Skin Cleanser",brand:"Cetaphil",price:"₹333",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",lastOrdered:"12 Apr 2025"},{id:302,name:"Minimalist 10% Niacinamide Serum",brand:"Minimalist",price:"₹599",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",lastOrdered:"28 Mar 2025"},{id:303,name:"Dot & Key Sunscreen SPF 50",brand:"Dot & Key",price:"₹495",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200",lastOrdered:"15 Mar 2025"}];function X2({showSuccess:t}){return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Pm,{className:"w-4 h-4 text-nykaa-pink"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Buy Again in 1 Tap"})]}),c.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 md:mx-0 md:px-0",children:Y2.map(e=>c.jsxs("div",{className:"min-w-[150px] bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow",children:[c.jsx("div",{className:"bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center mb-2",children:c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover mix-blend-multiply"})}),c.jsx("p",{className:"text-[9px] text-gray-400 font-bold uppercase",children:e.brand}),c.jsx("h4",{className:"text-[11px] font-semibold text-gray-800 leading-tight h-7 line-clamp-2 mt-0.5",children:e.name}),c.jsxs("p",{className:"text-[10px] text-gray-400 mt-1",children:["Last: ",e.lastOrdered]}),c.jsxs("button",{onClick:()=>t(30),className:"w-full mt-2 bg-nykaa-pink text-white font-bold py-2 rounded-xl text-[11px] flex items-center justify-center gap-1.5 hover:bg-[#e0305b] transition-colors shadow-sm",children:[c.jsx(qt,{className:"w-3 h-3"})," Buy Again"]})]},e.id))})]})}const J2=[{id:"b1",title:"Daily Glow Kit",products:["Cleanser","Moisturizer","Sunscreen SPF 50"],originalPrice:"₹1,327",bundlePrice:"₹999",savings:"₹328",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300",badge:"Bestseller"},{id:"b2",title:"Night Repair Kit",products:["Retinol Serum","Night Cream","Eye Cream"],originalPrice:"₹2,100",bundlePrice:"₹1,599",savings:"₹501",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300",badge:"Most Saved"}];function Z2({showSuccess:t}){return c.jsxs("div",{children:[c.jsx("div",{className:"flex items-center justify-between mb-4",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(eE,{className:"w-4 h-4 text-emerald-600"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Bundle & Save 📦"})]})}),c.jsx("div",{className:"flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 md:mx-0 md:px-0",children:J2.map(e=>c.jsxs("div",{className:"min-w-[260px] bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:[c.jsxs("div",{className:"relative h-28 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50",children:[c.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover opacity-60 mix-blend-multiply"}),c.jsx("div",{className:"absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm",children:e.badge}),c.jsxs("div",{className:"absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1",children:[c.jsx(rE,{className:"w-3 h-3"})," Save ",e.savings]})]}),c.jsxs("div",{className:"p-4",children:[c.jsx("h4",{className:"font-bold text-sm text-gray-900 mb-1",children:e.title}),c.jsx("p",{className:"text-[11px] text-gray-500 mb-3",children:e.products.join(" + ")}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("span",{className:"font-bold text-lg text-gray-900",children:e.bundlePrice}),c.jsx("span",{className:"text-xs text-gray-400 line-through",children:e.originalPrice})]}),c.jsxs("button",{onClick:()=>t(40),className:"bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors flex items-center gap-1.5",children:[c.jsx(qt,{className:"w-3 h-3"})," Add"]})]})]})]},e.id))})]})}const eC=[{code:"GLOW20",discount:"20% off",description:"On orders above ₹499",minOrder:499,type:"best"},{code:"NYKAA150",discount:"₹150 off",description:"On orders above ₹999",minOrder:999,type:"value"},{code:"FREESHIP",discount:"Free Delivery",description:"No minimum order",minOrder:0,type:"shipping"}];function tC(){const[t,e]=K.useState(null),n=r=>{e(r),setTimeout(()=>e(null),3e3)};return c.jsxs("div",{className:"bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-3xl p-5 shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[c.jsx(rE,{className:"w-4 h-4 text-amber-600"}),c.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Smart Coupons 🎟️"})]}),c.jsx("p",{className:"text-[10px] text-gray-500 mb-4 ml-6",children:"Best coupon auto-recommended for you"}),c.jsx("div",{className:"space-y-2.5",children:eC.map((r,s)=>c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${s===0?"border-amber-300 bg-white shadow-sm":"border-transparent bg-white/60"}`,children:[c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"font-mono font-bold text-sm text-amber-700",children:r.code}),s===0&&c.jsx("span",{className:"text-[9px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded-full",children:"BEST"})]}),c.jsxs("p",{className:"text-[11px] text-gray-600 font-medium mt-0.5",children:[r.discount," · ",r.description]})]}),c.jsx("button",{onClick:()=>n(r.code),className:`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${t===r.code?"bg-green-100 text-green-700":"bg-amber-100 text-amber-700 hover:bg-amber-200"}`,children:t===r.code?c.jsxs(c.Fragment,{children:[c.jsx(cs,{className:"w-3 h-3 inline"})," Applied"]}):"Apply"})]},r.code))})]})}function nC({showSuccess:t}){const e={name:"Plum Goodness",tagline:"100% Vegan · Cruelty Free",product:"Green Tea Renewed Clarity Night Gel",price:"₹475",originalPrice:"₹550",discount:"14% Off",why:"Matches your Oily Skin profile",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300",logo:"🌿"};return c.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 via-white to-lime-50 border border-emerald-100 rounded-3xl p-5 shadow-sm relative overflow-hidden",children:[c.jsxs("div",{className:"absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm",children:[c.jsx(k2,{className:"w-3 h-3"})," Indie Brand"]}),c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx("span",{className:"text-2xl",children:e.logo}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Try Something New 🌟"}),c.jsx("p",{className:"text-[10px] text-gray-500",children:e.tagline})]})]}),c.jsxs("div",{className:"flex gap-4 items-center",children:[c.jsx("img",{src:e.image,alt:e.product,className:"w-20 h-20 rounded-2xl object-cover bg-white shadow-sm"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"text-[10px] text-emerald-600 font-bold uppercase",children:e.name}),c.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight truncate",children:e.product}),c.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[c.jsx("span",{className:"font-bold text-sm",children:e.price}),c.jsx("span",{className:"text-xs text-gray-400 line-through",children:e.originalPrice}),c.jsx("span",{className:"text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full",children:e.discount})]}),c.jsxs("p",{className:"text-[10px] text-nykaa-pink font-medium mt-1 flex items-center gap-1",children:[c.jsx(Bt,{className:"w-3 h-3"})," ",e.why]})]})]}),c.jsxs("button",{onClick:()=>t(25),className:"w-full mt-4 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2",children:[c.jsx(qt,{className:"w-4 h-4"})," Try This Brand"]})]})}const rC=[{id:1,title:"How to Layer Skincare",subtitle:"Cleanser → Toner → Serum → Moisturizer → SPF",emoji:"🧴",color:"from-blue-50 to-cyan-50",borderColor:"border-blue-100"},{id:2,title:"Sunscreen Tips",subtitle:"Reapply every 2 hours. Use 2-finger rule for face.",emoji:"☀️",color:"from-yellow-50 to-orange-50",borderColor:"border-yellow-100"},{id:3,title:"Niacinamide + Vitamin C",subtitle:"Use at different times for best results. Never mix!",emoji:"⚗️",color:"from-purple-50 to-pink-50",borderColor:"border-purple-100"},{id:4,title:"Double Cleansing",subtitle:"Oil cleanser first, then water-based. Best for PM routine.",emoji:"🫧",color:"from-emerald-50 to-teal-50",borderColor:"border-emerald-100"}];function sC(){return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(S2,{className:"w-4 h-4 text-amber-500"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Beauty Tips 📱"})]}),c.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 md:mx-0 md:px-0",children:rC.map(t=>c.jsxs("div",{className:`min-w-[200px] bg-gradient-to-br ${t.color} border ${t.borderColor} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow group`,children:[c.jsx("span",{className:"text-2xl mb-2 block",children:t.emoji}),c.jsx("h4",{className:"font-bold text-sm text-gray-900 mb-1",children:t.title}),c.jsx("p",{className:"text-[11px] text-gray-600 leading-relaxed",children:t.subtitle}),c.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-bold text-nykaa-pink mt-3 group-hover:translate-x-1 transition-transform",children:["Read more ",c.jsx(Jn,{className:"w-3 h-3"})]})]},t.id))})]})}const iC=[{id:401,name:"Laneige Lip Sleeping Mask",brand:"Laneige",price:"₹1,350",saves:"4.2K saves",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",tag:"Most Saved"},{id:402,name:"Beauty of Joseon Sunscreen",brand:"Beauty of Joseon",price:"₹890",saves:"3.8K saves",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200",tag:"Trending"},{id:403,name:"Innisfree Green Tea Serum",brand:"Innisfree",price:"₹1,100",saves:"2.9K saves",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",tag:"Hot Pick"}];function oC({showSuccess:t}){return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx($2,{className:"w-4 h-4 text-rose-500"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Trending Among Users Like You 👯"})]}),c.jsx("div",{className:"space-y-3",children:iC.map((e,n)=>c.jsxs("div",{className:"flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow animate-slide-right",style:{animationDelay:`${n*.08}s`},children:[c.jsxs("div",{className:"relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0",children:[c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover mix-blend-multiply"}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-nykaa-pink/90 text-white text-[8px] font-bold text-center py-0.5",children:e.tag})]}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"text-[9px] text-gray-400 font-bold uppercase",children:e.brand}),c.jsx("p",{className:"text-xs font-semibold text-gray-900 truncate",children:e.name}),c.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[c.jsx("span",{className:"font-bold text-sm text-gray-900",children:e.price}),c.jsxs("span",{className:"text-[10px] text-rose-500 flex items-center gap-0.5",children:[c.jsx(oh,{className:"w-2.5 h-2.5 fill-current"})," ",e.saves]})]})]}),c.jsx("button",{onClick:()=>t(20),className:"w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors shrink-0",children:c.jsx(qt,{className:"w-3.5 h-3.5"})})]},e.id))})]})}const br=[{id:"c1",name:"Cetaphil Gentle Cleanser",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",price:"₹333",rating:"4.8",type:"All Skin Types",feature:"Soap-free"},{id:"c2",name:"Cosrx Low pH Cleanser",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200",price:"₹850",rating:"4.7",type:"Oily / Sensitive",feature:"BHA / Tea Tree"}];function aC({showSuccess:t}){return c.jsxs("div",{className:"bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[c.jsx(M2,{className:"w-4 h-4 text-nykaa-pink"}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Compare Products ⚖️"})]}),c.jsx("div",{className:"grid grid-cols-2 gap-4",children:br.map(e=>c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"bg-gray-50 rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center",children:c.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover mix-blend-multiply"})}),c.jsx("h4",{className:"text-[11px] font-bold text-gray-900 leading-tight h-7 line-clamp-2 mb-2",children:e.name})]},e.id))}),c.jsxs("div",{className:"mt-4 space-y-3 border-t border-gray-50 pt-4",children:[c.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[c.jsx("span",{className:"font-bold text-gray-900",children:br[0].price}),c.jsx("span",{className:"text-gray-400 font-medium",children:"Price"}),c.jsx("span",{className:"font-bold text-gray-900",children:br[1].price})]}),c.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[c.jsxs("div",{className:"flex items-center gap-0.5 font-bold text-gray-900",children:[c.jsx(eo,{className:"w-3 h-3 fill-yellow-400 text-yellow-400"})," ",br[0].rating]}),c.jsx("span",{className:"text-gray-400 font-medium",children:"Rating"}),c.jsxs("div",{className:"flex items-center gap-0.5 font-bold text-gray-900",children:[c.jsx(eo,{className:"w-3 h-3 fill-yellow-400 text-yellow-400"})," ",br[1].rating]})]}),c.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[c.jsx("span",{className:"font-bold text-gray-700",children:br[0].type}),c.jsx("span",{className:"text-gray-400 font-medium",children:"Best For"}),c.jsx("span",{className:"font-bold text-gray-700",children:br[1].type})]})]}),c.jsx("div",{className:"grid grid-cols-2 gap-3 mt-6",children:br.map(e=>c.jsx("button",{onClick:()=>t(30),className:"bg-black text-white py-2.5 rounded-xl text-[10px] font-bold hover:bg-nykaa-pink transition-colors",children:"Add to Bag"},e.id))})]})}const di={main:{name:"Minimalist Serum",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200"},addon:{name:"Sunscreen SPF 50",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200"},total:"₹980",savings:"₹114 savings"};function lC({showSuccess:t}){return c.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[c.jsx(qt,{className:"w-4 h-4 text-nykaa-pink"}),c.jsx("h3",{className:"font-bold text-sm",children:"Recently Bought Together 🤝"})]}),c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-16 h-16 bg-white/10 rounded-2xl p-2 flex items-center justify-center",children:c.jsx("img",{src:di.main.image,alt:di.main.name,className:"w-full h-full object-cover rounded-xl"})}),c.jsx(ah,{className:"w-4 h-4 text-gray-500"}),c.jsx("div",{className:"w-16 h-16 bg-white/10 rounded-2xl p-2 flex items-center justify-center",children:c.jsx("img",{src:di.addon.image,alt:di.addon.name,className:"w-full h-full object-cover rounded-xl"})})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-2xl font-black",children:di.total}),c.jsx("p",{className:"text-[10px] text-nykaa-pink font-bold uppercase",children:di.savings})]})]}),c.jsxs("button",{onClick:()=>t(60,"Bundle added!"),className:"w-full bg-nykaa-pink text-white font-bold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#e0305b] transition-colors",children:["Buy Both & Save ",c.jsx(Jn,{className:"w-4 h-4"})]}),c.jsx("div",{className:"absolute -top-10 -left-10 w-32 h-32 bg-nykaa-pink opacity-10 rounded-full blur-3xl"})]})}function c0({navigate:t,showSuccess:e,points:n,onLogout:r,userName:s,onOpenSpin:i}){const o=iE[0];return c.jsxs("div",{className:"p-5 md:p-8 space-y-8 pb-10 animate-pop",children:[c.jsxs("header",{className:"flex justify-between items-center pt-2",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl font-bold text-gray-900 leading-tight",children:["Hi ",s," ✨"]}),c.jsx("p",{className:"text-gray-500 text-sm",children:"Your beauty routine is on track!"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:i,className:"p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full hover:from-yellow-200 hover:to-orange-200 transition-colors animate-bounce-gentle border border-yellow-200",children:c.jsx(a0,{className:"w-5 h-5 text-orange-600"})}),c.jsx("div",{onClick:()=>t("account"),className:"w-10 h-10 bg-gray-100 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-nykaa-pink transition-all active:scale-95 shadow-sm",children:c.jsx("img",{src:`https://ui-avatars.com/api/?name=${encodeURIComponent(s)}&background=ff3f6c&color=fff`,alt:"Profile"})})]})]}),c.jsx(W2,{}),c.jsx(X2,{showSuccess:e}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[c.jsxs("div",{onClick:()=>t("rewards"),className:"bg-black text-white rounded-[2rem] p-6 shadow-xl relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform",children:[c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("p",{className:"text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5",children:[c.jsx(Jr,{className:"w-4 h-4 text-nykaa-pink"})," Glow Rewards"]}),c.jsx("span",{className:"text-[10px] font-bold bg-nykaa-pink text-white px-2 py-0.5 rounded-full",children:Cs.tier})]}),c.jsxs("h2",{className:"text-4xl font-black",children:[n," ",c.jsx("span",{className:"text-sm font-normal text-gray-400",children:"Pts"})]}),c.jsxs("button",{className:"mt-6 text-xs font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors",children:["Redeem Benefits ",c.jsx(Jn,{className:"w-3 h-3"})]})]}),c.jsx("div",{className:"absolute -bottom-10 -right-10 w-40 h-40 bg-nykaa-pink opacity-20 rounded-full blur-3xl"})]}),c.jsxs("div",{className:"bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm relative",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx("div",{className:"w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center",children:c.jsx(Pm,{className:"w-4 h-4 text-nykaa-pink"})}),c.jsx("h3",{className:"font-bold text-gray-900",children:"Refill Reminder"})]}),c.jsxs("div",{className:"flex gap-4 items-center mb-6",children:[c.jsx("img",{src:o.image,alt:"Product",className:"w-14 h-14 rounded-2xl object-cover bg-gray-50 border border-gray-100"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"text-sm font-bold text-gray-800 leading-tight",children:o.name}),c.jsxs("p",{className:"text-xs text-nykaa-pink font-bold mt-1 uppercase tracking-tighter",children:["Running Low · ",o.daysLeft," days left"]})]})]}),c.jsx("button",{onClick:()=>e(50,"Added to bag!"),className:"w-full bg-black text-white font-bold py-3 rounded-xl text-xs shadow-md hover:bg-nykaa-pink transition-colors",children:"Buy Again Now"})]})]}),c.jsx(Z2,{showSuccess:e}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[c.jsx(H2,{showSuccess:e}),c.jsx(tC,{})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[c.jsxs("div",{onClick:()=>t("routine-builder"),className:"bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-6 text-white cursor-pointer active:scale-[0.98] transition-transform shadow-lg relative overflow-hidden group",children:[c.jsxs("div",{className:"relative z-10",children:[c.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md",children:c.jsx(O2,{className:"w-5 h-5 text-white"})}),c.jsx("h3",{className:"text-xl font-bold mb-1",children:"AI Routine Builder"}),c.jsx("p",{className:"text-xs opacity-80 leading-relaxed mb-4",children:"Build your morning & night routine in seconds based on your skin type."}),c.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold bg-white text-indigo-600 px-4 py-2 rounded-xl",children:["Start Building ",c.jsx(Jn,{className:"w-3 h-3"})]})]}),c.jsx(Bt,{className:"absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform duration-700"})]}),c.jsxs("div",{onClick:()=>t("shade-finder"),className:"bg-gradient-to-br from-rose-400 to-nykaa-pink rounded-[2rem] p-6 text-white cursor-pointer active:scale-[0.98] transition-transform shadow-lg relative overflow-hidden group",children:[c.jsxs("div",{className:"relative z-10",children:[c.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md",children:c.jsx(D2,{className:"w-5 h-5 text-white"})}),c.jsx("h3",{className:"text-xl font-bold mb-1",children:"Find My Shade"}),c.jsx("p",{className:"text-xs opacity-80 leading-relaxed mb-4",children:"Never pick the wrong foundation again. Take our 30-sec quiz."}),c.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold bg-white text-rose-500 px-4 py-2 rounded-xl",children:["Take Quiz ",c.jsx(Jn,{className:"w-3 h-3"})]})]}),c.jsx(a0,{className:"absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform duration-700"})]})]}),c.jsx(G2,{}),c.jsx(aC,{showSuccess:e}),c.jsx(lC,{showSuccess:e}),c.jsx(oC,{showSuccess:e}),c.jsx(nC,{showSuccess:e}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("h3",{className:"font-bold text-gray-900",children:"What's your mood? 💖"}),c.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5",children:["🧖 Self Care","💃 Party Ready","💼 Office Glow","🌿 Clean Beauty","🛍️ Budget Care"].map(a=>c.jsx("button",{className:"px-5 py-2.5 rounded-full border border-gray-200 bg-white whitespace-nowrap text-xs font-bold text-gray-700 hover:border-nykaa-pink hover:text-nykaa-pink transition-all",children:a},a))})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx("h3",{className:"font-bold text-gray-900",children:"Recommended for You"}),c.jsx("button",{onClick:()=>t("recommendations"),className:"text-nykaa-pink text-xs font-bold",children:"See All"})]}),c.jsx("div",{className:"flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0",children:oE.map((a,u)=>c.jsxs("div",{className:"min-w-[150px] md:min-w-[180px] bg-white border border-gray-100 rounded-[2rem] p-3 shadow-sm hover:shadow-md transition-all group",children:[c.jsxs("div",{className:"relative mb-3 bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center",children:[c.jsx("img",{src:a.image,alt:a.name,className:"w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"}),u===0&&c.jsx("div",{className:"absolute top-2 left-2 bg-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full animate-pulse",children:"ONLY 3 LEFT! 🚨"}),c.jsx("div",{className:"absolute bottom-2 left-2 bg-nykaa-pink text-white text-[8px] font-black px-2 py-0.5 rounded-full",children:a.discount})]}),c.jsx("p",{className:"text-[9px] text-gray-400 font-bold uppercase",children:a.brand}),c.jsx("h4",{className:"text-xs font-bold text-gray-800 leading-tight h-8 line-clamp-2 mt-0.5",children:a.name}),c.jsxs("div",{className:"flex justify-between items-center mt-3",children:[c.jsx("p",{className:"font-bold text-sm text-gray-900",children:a.price}),c.jsx("button",{onClick:()=>e(20),className:"w-8 h-8 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-nykaa-pink transition-all active:scale-90",children:c.jsx(qt,{className:"w-3.5 h-3.5"})})]})]},a.id))})]}),c.jsx(sC,{}),c.jsx(Q2,{showSuccess:e}),c.jsx(q2,{}),c.jsx("div",{className:"h-4"})]})}function cC({navigate:t,showSuccess:e,points:n,setPoints:r,missions:s,setMissions:i}){const o=(u,h)=>{i(s.map(f=>f.id===u?{...f,completed:!0}:f)),e(h)},a=n/Cs.nextTierPoints*100;return c.jsxs("div",{className:"bg-gray-50 min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 bg-white sticky top-0 z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Glow Rewards"})]}),c.jsxs("div",{className:"p-5 md:p-8 md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0",children:[c.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center",children:[c.jsx("div",{className:"w-16 h-16 bg-nykaa-pink/10 rounded-full flex items-center justify-center mx-auto mb-3",children:c.jsx(eo,{className:"w-8 h-8 text-nykaa-pink fill-current"})}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:Cs.tier}),c.jsxs("p",{className:"text-3xl font-extrabold text-nykaa-pink mt-2",children:[n," ",c.jsx("span",{className:"text-sm font-medium text-gray-500",children:"Points"})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-2",children:[c.jsx("span",{className:"text-gray-600",children:"Current"}),c.jsxs("span",{className:"text-gray-400",children:["Gold Tier (",Cs.nextTierPoints,")"]})]}),c.jsx("div",{className:"h-2.5 bg-gray-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-nykaa-pink rounded-full transition-all duration-1000 ease-out relative",style:{width:`${a}%`},children:c.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})}),c.jsxs("p",{className:"text-xs text-gray-500 mt-3",children:["Earn ",Cs.nextTierPoints-n," more points to upgrade!"]})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-4 px-1",children:"Daily Missions"}),c.jsx("div",{className:"space-y-3",children:s.map(u=>c.jsxs("div",{onClick:()=>!u.completed&&o(u.id,u.points),className:`flex items-center justify-between p-4 rounded-2xl border transition-all ${u.completed?"bg-gray-50 border-gray-100 opacity-60 cursor-default":"bg-white border-nykaa-pink/20 shadow-sm cursor-pointer hover:border-nykaa-pink"}`,children:[c.jsxs("div",{className:"flex items-center gap-3",children:[u.completed?c.jsx(Rm,{className:"w-6 h-6 text-green-500"}):c.jsx(q1,{className:"w-6 h-6 text-gray-300"}),c.jsxs("div",{children:[c.jsx("h4",{className:`font-semibold text-sm ${u.completed?"text-gray-500 line-through":"text-gray-800"}`,children:u.title}),!u.completed&&c.jsxs("p",{className:"text-xs font-bold text-nykaa-pink mt-0.5",children:["+",u.points," Pts"]})]})]}),!u.completed&&c.jsx(Bs,{className:"w-5 h-5 text-gray-400"})]},u.id))})]})]})]})}function uC({navigate:t,showSuccess:e}){const[n,r]=K.useState(iE),s=i=>{r(n.map(o=>o.id===i?{...o,isSubscribed:!o.isSubscribed}:o))};return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Quick Reorder"})]}),c.jsxs("div",{className:"p-5 md:p-8",children:[c.jsx("p",{className:"text-sm text-gray-500 mb-5",children:"Products you've bought before, ready to restock."}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",children:n.map(i=>c.jsxs("div",{className:"border border-gray-100 rounded-3xl p-4 shadow-sm flex flex-col gap-4",children:[c.jsxs("div",{className:"flex gap-4",children:[c.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100",children:c.jsx("img",{src:i.image,alt:i.name,className:"max-h-full mix-blend-multiply"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"text-xs text-gray-500 font-medium mb-0.5",children:i.brand}),c.jsx("h3",{className:"text-sm font-semibold text-gray-900 leading-tight mb-2",children:i.name}),c.jsx("p",{className:"text-sm font-bold",children:i.price}),i.daysLeft<10&&c.jsxs("p",{className:"text-xs text-orange-500 font-semibold mt-1",children:["Running low (Est. ",i.daysLeft," days left)"]})]})]}),c.jsxs("div",{className:"bg-gray-50 rounded-2xl p-3 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-gray-800",children:"Monthly Auto-Reorder"}),c.jsx("p",{className:"text-[10px] text-gray-500",children:"Save 5% on subscriptions"})]}),c.jsx("button",{onClick:()=>s(i.id),className:`w-12 h-6 rounded-full relative transition-colors ${i.isSubscribed?"bg-nykaa-pink":"bg-gray-300"}`,children:c.jsx("div",{className:`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${i.isSubscribed?"translate-x-6.5 left-0.5":"left-0.5"}`})})]}),c.jsxs("button",{onClick:()=>e(50),className:"w-full bg-black text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors",children:[c.jsx(U2,{className:"w-4 h-4"})," 1-Click Reorder"]})]},i.id))})]})]})}function hC({navigate:t,showSuccess:e}){const[n,r]=K.useState({}),s=i=>{r({...n,[i]:!0}),e(20),setTimeout(()=>{r(o=>({...o,[i]:!1}))},3e3)};return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Just For You"})]}),c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"bg-nykaa-pink/10 text-nykaa-pink px-4 py-3 rounded-2xl mb-6 flex items-center gap-2 font-semibold text-sm",children:[c.jsx(Bt,{className:"w-4 h-4 fill-current"}),"Curated for ",Cs.skinType]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:oE.map(i=>c.jsxs("div",{className:"bg-white border border-gray-100 rounded-3xl p-3 shadow-sm flex flex-col",children:[c.jsxs("div",{className:"relative mb-3 bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-2",children:[c.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover mix-blend-multiply"}),c.jsx("div",{className:"absolute top-2 left-2 bg-nykaa-pink text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm",children:i.discount})]}),c.jsxs("div",{className:"flex-1 flex flex-col",children:[c.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1",children:i.brand}),c.jsx("h4",{className:"text-xs font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 flex-1",children:i.name}),c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx("p",{className:"font-bold text-sm text-gray-900",children:i.price}),c.jsx("p",{className:"text-xs text-gray-400 line-through",children:i.originalPrice})]}),c.jsx("button",{onClick:()=>!n[i.id]&&s(i.id),className:`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${n[i.id]?"bg-green-500 text-white":"bg-black text-white hover:bg-nykaa-pink"}`,children:n[i.id]?c.jsxs("span",{className:"flex items-center justify-center gap-1",children:[c.jsx(cs,{className:"w-4 h-4"})," Added"]}):"Add to Bag"})]})]},i.id))})]})]})}function dC({navigate:t,showSuccess:e}){const[n,r]=K.useState([{id:1,name:"Cleanser",product:"Cetaphil Gentle Skin Cleanser",completed:!0,time:"Morning"},{id:2,name:"Toner",product:"Plum Green Tea Toner",completed:!1,time:"Morning"},{id:3,name:"Serum",product:"Minimalist 10% Niacinamide",completed:!1,time:"Morning"},{id:4,name:"Moisturizer",product:"Pond's Super Light Gel",completed:!1,time:"Morning"},{id:5,name:"Sunscreen",product:"Aqualogica Radiance+ Dewy",completed:!1,time:"Morning"}]),s=o=>{const a=n.map(f=>f.id===o?{...f,completed:!f.completed}:f);r(a);const u=n.every(f=>f.completed),h=a.every(f=>f.completed);!u&&h&&e(100,"Routine Complete!")},i=n.filter(o=>o.completed).length/n.length*100;return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors",children:c.jsx(Ve,{className:"w-6 h-6 text-gray-800"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"My Routine"})]}),c.jsx("div",{className:"p-5 md:p-8 space-y-6 md:space-y-8",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"bg-orange-50 border border-orange-100 rounded-3xl p-5 flex items-center justify-between shadow-sm",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-orange-600 font-bold text-lg",children:[c.jsx(Y1,{className:"w-5 h-5 fill-current"}),c.jsx("span",{children:"3 Day Streak!"})]}),c.jsx("p",{className:"text-sm text-orange-800 mt-1",children:"Complete 4 more days for a reward."})]}),c.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-orange-100",children:c.jsx(Jr,{className:"w-6 h-6 text-nykaa-pink"})})]}),c.jsxs("div",{className:"bg-white border border-gray-100 rounded-3xl p-5 shadow-sm",children:[c.jsxs("div",{className:"flex justify-between text-sm font-bold mb-3",children:[c.jsx("span",{className:"text-gray-800",children:"Morning Routine"}),c.jsxs("span",{className:"text-nykaa-pink",children:[Math.round(i),"%"]})]}),c.jsx("div",{className:"h-2.5 bg-gray-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-nykaa-gradient rounded-full transition-all duration-500 ease-out",style:{width:`${i}%`}})})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-2 px-1",children:"Checklist"}),n.map(o=>c.jsxs("div",{onClick:()=>s(o.id),className:`flex items-center p-4 rounded-2xl border transition-all cursor-pointer shadow-sm ${o.completed?"bg-pink-50/50 border-nykaa-pink/30":"bg-white border-gray-200 hover:border-nykaa-pink/50"}`,children:[c.jsx("div",{className:"mr-4",children:o.completed?c.jsx(Rm,{className:"w-6 h-6 text-nykaa-pink"}):c.jsx(q1,{className:"w-6 h-6 text-gray-300"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:`font-bold text-sm ${o.completed?"text-gray-900":"text-gray-800"}`,children:o.name}),c.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:o.product})]})]},o.id))]})]})})]})}function fC({navigate:t,showSuccess:e,userName:n}){return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsx("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:c.jsx("h1",{className:"text-lg font-bold",children:"Community Hub"})}),c.jsxs("div",{className:"p-5 md:p-8 space-y-6 md:space-y-8",children:[c.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0",children:[c.jsxs("div",{className:"bg-nykaa-gradient rounded-3xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-center",children:[c.jsxs("div",{className:"relative z-10",children:[c.jsxs("h2",{className:"text-2xl font-bold mb-2",children:["Welcome back, ",n,"! 👋"]}),c.jsx("p",{className:"text-sm opacity-90 mb-5",children:"You're on a 3-day glow streak. Keep it up!"}),c.jsx("button",{onClick:()=>t("routine"),className:"bg-white text-nykaa-pink px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:scale-105 transition-transform",children:"Log Today's Routine"})]}),c.jsx(Bt,{className:"absolute -right-4 -bottom-4 w-32 h-32 opacity-20"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsx(u0,{icon:c.jsx(nE,{className:"w-6 h-6 text-purple-500"}),title:"Watch & Shop",subtitle:"Real reviews",onClick:()=>t("feed"),color:"bg-purple-50"}),c.jsx(u0,{icon:c.jsx(Am,{className:"w-6 h-6 text-orange-500"}),title:"Alerts",subtitle:"Notification Center",onClick:()=>t("notifications"),color:"bg-orange-50"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx("h3",{className:"font-bold text-gray-900 px-1",children:"Trending in the Loop"}),c.jsxs("button",{className:"text-nykaa-pink text-sm font-bold flex items-center hover:text-[#e0305b] transition-colors",children:["View all ",c.jsx(Bs,{className:"w-4 h-4 ml-0.5"})]})]}),c.jsxs("div",{className:"flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0",children:[c.jsx(Sd,{image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300",title:"Summer Dewy Look",author:"@sharma_k",onClick:()=>t("feed")}),c.jsx(Sd,{image:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=300",title:"My Curly Hair Routine",author:"@riya_curls",onClick:()=>t("feed")}),c.jsx(Sd,{image:"https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=300",title:"Glass Skin Prep",author:"@nykaa_fan",onClick:()=>t("feed")})]})]})]})]})}function u0({icon:t,title:e,subtitle:n,onClick:r,color:s}){return c.jsxs("div",{onClick:r,className:`${s} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all active:scale-95`,children:[c.jsx("div",{className:"bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm",children:t}),c.jsx("h4",{className:"font-semibold text-gray-800 text-sm",children:e}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:n})]})}function Sd({image:t,title:e,author:n,onClick:r}){return c.jsxs("div",{onClick:r,className:"min-w-[140px] h-[200px] rounded-xl overflow-hidden relative cursor-pointer group",children:[c.jsx("img",{src:t,alt:e,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"}),c.jsxs("div",{className:"absolute bottom-3 left-3 right-3",children:[c.jsx("p",{className:"text-white font-medium text-sm leading-tight",children:e}),c.jsx("p",{className:"text-gray-300 text-xs mt-1",children:n})]}),c.jsx("div",{className:"absolute top-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full",children:c.jsx(nE,{className:"w-3 h-3 text-white"})})]})}function pC({navigate:t,showSuccess:e}){const n=[{id:1,author:"Sneha Rao",handle:"@snehamakeup",videoUrl:"https://images.unsplash.com/photo-1512496115851-a408e8cece92?auto=format&fit=crop&q=80&w=600",description:"My go-to summer dewy look! ✨ Sunscreen is a MUST. #SummerReady #NykaaBeauty",likes:"12.4K",comments:"342",products:[{name:"Aqualogica Radiance+ Dewy Sunscreen",price:"₹399",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=100"},{name:"Kay Beauty Hydrating Foundation",price:"₹1,200",image:"https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=100"}]},{id:2,author:"Priya Singh",handle:"@priya_curls",videoUrl:"https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",description:"Curly hair wash day routine using only 3 products! 🌀 #CurlyHair #WashDay",likes:"8.1K",comments:"120",products:[{name:"Plum Avocado Frizz-Control Cream",price:"₹450",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=100"}]}],[r,s]=K.useState(0),[i,o]=K.useState(!1),a=u=>{u.target.scrollHeight-u.target.scrollTop===u.target.clientHeight&&r<n.length-1&&s(r+1)};return c.jsxs("div",{className:"bg-black h-full w-full relative",children:[c.jsx("button",{onClick:()=>t("hub"),className:"absolute top-4 left-4 z-50 p-2 bg-black/40 backdrop-blur-md rounded-full text-white",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("div",{className:"h-full overflow-y-auto snap-y snap-mandatory no-scrollbar",onScroll:a,children:n.map((u,h)=>c.jsxs("div",{className:"h-full w-full snap-start relative bg-black",children:[c.jsx("img",{src:u.videoUrl,alt:"UGC Video",className:"w-full h-full object-cover opacity-90"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"}),c.jsxs("div",{className:"absolute right-4 bottom-32 flex flex-col items-center space-y-6",children:[c.jsx(Nd,{icon:c.jsx(oh,{className:"w-7 h-7"}),text:u.likes}),c.jsx(Nd,{icon:c.jsx(A2,{className:"w-7 h-7"}),text:u.comments}),c.jsx(Nd,{icon:c.jsx(F2,{className:"w-7 h-7"}),text:"Share"})]}),c.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 pb-24",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white",children:c.jsx("img",{src:`https://i.pravatar.cc/150?u=${u.handle}`,alt:"avatar"})}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-white font-bold text-sm flex items-center gap-1",children:[u.author,c.jsx(Rm,{className:"w-4 h-4 text-blue-400"})]}),c.jsx("p",{className:"text-gray-300 text-xs bg-white/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm mt-0.5",children:"Verified Buyer"})]}),c.jsx("button",{className:"ml-auto border border-white text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",children:"Follow"})]}),c.jsx("p",{className:"text-white text-sm mt-2 mb-4 line-clamp-2",children:u.description}),c.jsxs("button",{onClick:()=>o(!0),className:"w-full bg-nykaa-gradient text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 animate-pulse shadow-[0_0_15px_rgba(252,39,121,0.5)]",children:[c.jsx(qt,{className:"w-5 h-5"}),"Shop This Look (",u.products.length," Products)"]})]})]},u.id))}),i&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"absolute inset-0 bg-black/50 z-40",onClick:()=>o(!1)}),c.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-5 transform transition-transform animate-slideUp",children:[c.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"}),c.jsx("h3",{className:"font-bold text-lg mb-4",children:"Products in this video"}),c.jsx("div",{className:"space-y-4 max-h-[50vh] overflow-y-auto no-scrollbar pb-4",children:n[r].products.map((u,h)=>c.jsxs("div",{className:"flex gap-4 p-3 border border-gray-100 rounded-xl shadow-sm",children:[c.jsx("img",{src:u.image,alt:u.name,className:"w-16 h-16 object-cover rounded-lg bg-gray-50"}),c.jsxs("div",{className:"flex-1 flex flex-col justify-center",children:[c.jsx("h4",{className:"font-semibold text-sm line-clamp-2 text-gray-800",children:u.name}),c.jsx("p",{className:"text-nykaa-pink font-bold mt-1",children:u.price})]}),c.jsx("div",{className:"flex items-center",children:c.jsx("button",{onClick:()=>e(20),className:"bg-black text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-nykaa-pink transition-colors",children:"Add"})})]},h))})]})]})]})}function Nd({icon:t,text:e}){return c.jsxs("button",{className:"flex flex-col items-center text-white drop-shadow-md transition-transform active:scale-90",children:[c.jsx("div",{className:"p-2 bg-black/20 rounded-full backdrop-blur-sm",children:t}),c.jsx("span",{className:"text-xs font-semibold mt-1 drop-shadow-md",children:e})]})}const fi=[{id:1,question:"What's your skin type?",options:["Oily","Dry","Combination","Sensitive","Normal"]},{id:2,question:"What's your main skin concern?",options:["Acne & Breakouts","Dark Spots","Anti-Aging","Dullness","Pores"]},{id:3,question:"Your skincare budget per month?",options:["Under ₹500","₹500 – ₹1000","₹1000 – ₹2000","₹2000+"]}],mC=[{name:"Minimalist 2% Salicylic Acid Cleanser",brand:"Minimalist",price:"₹299",match:"97% Match",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"},{name:"Dot & Key CICA Calming Moisturizer",brand:"Dot & Key",price:"₹545",match:"94% Match",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200"},{name:"Aqualogica Glow+ Dewy Sunscreen",brand:"Aqualogica",price:"₹399",match:"91% Match",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200"}];function gC({navigate:t,showSuccess:e}){const[n,r]=K.useState(0),[s,i]=K.useState({}),o=(h,f)=>{i({...s,[h]:f}),n<fi.length-1?setTimeout(()=>r(n+1),300):setTimeout(()=>r(fi.length),300)},a=(n+1)/(fi.length+1)*100;if(n>=fi.length)return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Your Matches"})]}),c.jsxs("div",{className:"p-5 md:p-8 space-y-6",children:[c.jsxs("div",{className:"bg-nykaa-pink/10 rounded-2xl p-4 text-center border border-nykaa-pink/20",children:[c.jsx(Bt,{className:"w-6 h-6 text-nykaa-pink mx-auto mb-2"}),c.jsx("h2",{className:"font-bold text-gray-900",children:"Your Personalized Routine"}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Based on your quiz answers, we've curated these for you."})]}),c.jsx("div",{className:"space-y-4",children:mC.map((h,f)=>c.jsxs("div",{className:"flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm animate-slide-right",style:{animationDelay:`${f*.1}s`},children:[c.jsx("img",{src:h.image,alt:h.name,className:"w-16 h-16 rounded-xl object-cover bg-gray-50 shadow-sm"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"flex items-center gap-2 mb-0.5",children:c.jsx("span",{className:"text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full",children:h.match})}),c.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase",children:h.brand}),c.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight truncate",children:h.name}),c.jsx("p",{className:"font-bold text-sm text-gray-900 mt-1",children:h.price})]}),c.jsx("button",{onClick:()=>e(25),className:"bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors shrink-0",children:"Add"})]},f))}),c.jsx("button",{onClick:()=>t("home"),className:"w-full bg-nykaa-pink text-white font-bold py-3.5 rounded-2xl text-sm shadow-md hover:bg-[#e0305b] transition-colors",children:"Continue Shopping"})]})]});const u=fi[n];return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>n>0?r(n-1):t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Beauty Quiz 🧴"}),c.jsxs("span",{className:"ml-auto text-xs font-bold text-gray-400",children:[n+1,"/",fi.length]})]}),c.jsxs("div",{className:"p-5 md:p-8",children:[c.jsx("div",{className:"h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8",children:c.jsx("div",{className:"h-full bg-nykaa-gradient rounded-full transition-all duration-500",style:{width:`${a}%`}})}),c.jsxs("div",{className:"text-center mb-8 animate-fadeIn",children:[c.jsx("div",{className:"w-14 h-14 bg-nykaa-pink/10 rounded-full flex items-center justify-center mx-auto mb-4",children:c.jsx(Bt,{className:"w-7 h-7 text-nykaa-pink"})}),c.jsx("h2",{className:"text-xl font-bold text-gray-900",children:u.question}),c.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Select one that best describes you"})]},n),c.jsx("div",{className:"space-y-3 max-w-md mx-auto animate-fadeIn",children:u.options.map(h=>c.jsx("button",{onClick:()=>o(u.id,h),className:`w-full text-left p-4 rounded-2xl border-2 font-semibold text-sm transition-all active:scale-[0.98] ${s[u.id]===h?"border-nykaa-pink bg-nykaa-pink/5 text-nykaa-pink":"border-gray-100 bg-white text-gray-800 hover:border-gray-300"}`,children:c.jsxs("div",{className:"flex items-center justify-between",children:[h,s[u.id]===h&&c.jsx(cs,{className:"w-5 h-5 text-nykaa-pink"})]})},h))},`opts-${n}`)]})]})}const Yo=[{id:1,question:"What's your skin tone?",options:["Fair","Light","Medium","Tan","Deep"],colors:["#F9E4D4","#F3D0B5","#D6A680","#A36F4D","#5E3E2B"]},{id:2,question:"Check your veins. What color are they?",options:["Blue/Purple (Cool)","Green (Warm)","Mix of both (Neutral)"]},{id:3,question:"What's your preferred finish?",options:["Matte","Dewy","Natural"]}],yC=[{name:"Nykaa All Day Matte Foundation",shade:"Shade 03: Ivory",price:"₹599",match:"99% Match",image:"https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200"},{name:"Kay Beauty Liquid Lipstick",shade:"Shade: Retro",price:"₹799",match:"95% Match",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"}];function _C({navigate:t,showSuccess:e}){const[n,r]=K.useState(0),[s,i]=K.useState({}),o=(u,h)=>{i({...s,[u]:h}),n<Yo.length-1?setTimeout(()=>r(n+1),300):setTimeout(()=>r(Yo.length),300)};if(n>=Yo.length)return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Perfect Shades"})]}),c.jsxs("div",{className:"p-5 md:p-8 space-y-6",children:[c.jsxs("div",{className:"bg-nykaa-gradient rounded-2xl p-6 text-white text-center shadow-lg",children:[c.jsx(Bt,{className:"w-8 h-8 mx-auto mb-2 opacity-90"}),c.jsx("h2",{className:"text-xl font-bold",children:"Your Custom Palette"}),c.jsxs("p",{className:"text-xs opacity-80 mt-1",children:["Found your perfect matches based on ",s[1]," ",s[2]," tone."]})]}),c.jsx("div",{className:"space-y-4",children:yC.map((u,h)=>c.jsxs("div",{className:"flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-4 shadow-sm animate-slide-right",style:{animationDelay:`${h*.1}s`},children:[c.jsx("img",{src:u.image,alt:u.name,className:"w-20 h-20 rounded-2xl object-cover bg-gray-50"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("span",{className:"text-[10px] font-bold text-nykaa-pink bg-pink-50 px-2 py-0.5 rounded-full",children:u.match}),c.jsx("h4",{className:"text-sm font-bold text-gray-900 mt-1 truncate",children:u.name}),c.jsx("p",{className:"text-xs text-gray-500",children:u.shade}),c.jsx("p",{className:"font-bold text-sm text-gray-900 mt-1",children:u.price})]}),c.jsx("button",{onClick:()=>e(50,"Shade added to bag!"),className:"bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors",children:"Add"})]},h))}),c.jsx("button",{onClick:()=>t("home"),className:"w-full border-2 border-gray-900 text-gray-900 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors",children:"Back to Home"})]})]});const a=Yo[n];return c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>n>0?r(n-1):t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Shade Finder 💄"})]}),c.jsxs("div",{className:"p-6 md:p-10",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("p",{className:"text-xs font-bold text-nykaa-pink uppercase tracking-widest mb-2",children:["Step ",n+1," of ",Yo.length]}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:a.question})]}),c.jsx("div",{className:"grid grid-cols-1 gap-3",children:a.options.map((u,h)=>c.jsxs("button",{onClick:()=>o(a.id,u),className:"flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-nykaa-pink transition-all active:scale-95",children:[a.colors&&c.jsx("div",{className:"w-10 h-10 rounded-full border border-gray-200",style:{backgroundColor:a.colors[h]}}),c.jsx("span",{className:"font-bold text-gray-800",children:u}),c.jsx(cs,{className:"w-5 h-5 ml-auto text-nykaa-pink opacity-0 transition-opacity"})]},u))})]})]})}const vC=[{type:"Morning Routine",icon:c.jsx(z2,{className:"w-5 h-5 text-orange-500"}),products:[{name:"Gentle Cleanser",brand:"Cetaphil",price:"₹333",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"},{name:"Vitamin C Serum",brand:"Minimalist",price:"₹699",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200"},{name:"Hyaluronic Acid SPF",brand:"Aqualogica",price:"₹399",image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200"}]},{type:"Night Routine",icon:c.jsx(P2,{className:"w-5 h-5 text-indigo-500"}),products:[{name:"Double Cleanser",brand:"Laneige",price:"₹1,150",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"},{name:"Retinol 0.3%",brand:"Minimalist",price:"₹599",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"},{name:"Barrier Cream",brand:"Dot & Key",price:"₹545",image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200"}]}];function wC({navigate:t,showSuccess:e}){const[n,r]=K.useState(!1),[s,i]=K.useState(!1),o=()=>{r(!0),setTimeout(()=>{r(!1),i(!0)},2e3)};return n?c.jsxs("div",{className:"bg-white min-h-full flex flex-col items-center justify-center p-10 text-center",children:[c.jsxs("div",{className:"relative mb-8",children:[c.jsx("div",{className:"w-24 h-24 border-4 border-nykaa-pink/20 border-t-nykaa-pink rounded-full animate-spin"}),c.jsx(Bt,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-nykaa-pink animate-pulse"})]}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Analyzing your skin..."}),c.jsx("p",{className:"text-gray-500 text-sm",children:"Our AI is building your custom AM & PM routine based on your unique skin profile."})]}):s?c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-20 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Your AI Routine"})]}),c.jsxs("div",{className:"p-5 space-y-8",children:[vC.map((a,u)=>c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2 px-1",children:[a.icon,c.jsx("h3",{className:"font-bold text-lg text-gray-900",children:a.type})]}),c.jsx("div",{className:"space-y-3",children:a.products.map((h,f)=>c.jsxs("div",{className:"bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-gray-100",children:[c.jsx("img",{src:h.image,alt:h.name,className:"w-16 h-16 rounded-2xl object-cover bg-gray-50"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-wider",children:h.brand}),c.jsx("h4",{className:"text-sm font-bold text-gray-800 leading-tight",children:h.name}),c.jsx("p",{className:"text-sm font-bold text-gray-900 mt-1",children:h.price})]}),c.jsx("button",{onClick:()=>e(20),className:"w-10 h-10 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-nykaa-pink transition-colors",children:c.jsx(ah,{className:"w-5 h-5"})})]},f))})]},u)),c.jsx("div",{className:"fixed bottom-20 left-0 right-0 px-5 py-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-10 lg:static lg:bg-transparent lg:border-none lg:px-0",children:c.jsxs("button",{onClick:()=>e(150,"Full routine added to bag!"),className:"w-full bg-black text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-nykaa-pink transition-colors",children:[c.jsx(qt,{className:"w-5 h-5"})," Add Full Routine to Bag"]})})]})]}):c.jsxs("div",{className:"bg-white min-h-full pb-6 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"AI Routine Builder"})]}),c.jsxs("div",{className:"p-6 md:p-10 flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-20 h-20 bg-nykaa-pink/10 rounded-full flex items-center justify-center mb-6",children:c.jsx(Bt,{className:"w-10 h-10 text-nykaa-pink"})}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Personalized by AI"}),c.jsx("p",{className:"text-gray-500 text-sm mb-10 max-w-[280px]",children:"We'll analyze your skin type and concerns to build the perfect morning and night routine."}),c.jsxs("div",{className:"w-full space-y-4 text-left max-w-sm mx-auto mb-12",children:[c.jsxs("div",{className:"p-5 rounded-2xl border-2 border-gray-100 bg-gray-50/50",children:[c.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-1",children:"Skin Type"}),c.jsx("p",{className:"font-bold text-gray-900",children:"Oily Skin"})]}),c.jsxs("div",{className:"p-5 rounded-2xl border-2 border-gray-100 bg-gray-50/50",children:[c.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-1",children:"Concerns"}),c.jsx("p",{className:"font-bold text-gray-900",children:"Acne & Pores"})]})]}),c.jsxs("button",{onClick:o,className:"w-full max-w-sm bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors flex items-center justify-center gap-2",children:["Generate My Routine ",c.jsx(Jn,{className:"w-5 h-5"})]})]})]})}const xC=[{id:"deals",label:"Flash Deals & Offers",desc:"Get notified about 2-hour sales",icon:c.jsx(Qf,{className:"w-5 h-5 text-yellow-500"})},{id:"refills",label:"Refill Reminders",desc:"Smart alerts when products run low",icon:c.jsx(Pm,{className:"w-5 h-5 text-nykaa-pink"})},{id:"launches",label:"New Launches",desc:"Be the first to try new brands",icon:c.jsx(Bt,{className:"w-5 h-5 text-indigo-500"})},{id:"rewards",label:"Reward Updates",desc:"Point balance & tier status alerts",icon:c.jsx(Jr,{className:"w-5 h-5 text-emerald-500"})}];function EC({navigate:t}){const[e,n]=K.useState(["deals","refills","rewards"]),r=s=>{n(i=>i.includes(s)?i.filter(o=>o!==s):[...i,s])};return c.jsxs("div",{className:"bg-white min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Notification Center 🔔"})]}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"bg-gray-50 rounded-3xl p-6 mb-8 text-center border border-gray-100",children:[c.jsx("div",{className:"w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm",children:c.jsx(Am,{className:"w-8 h-8 text-nykaa-pink"})}),c.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Reduce Fatigue"}),c.jsx("p",{className:"text-xs text-gray-500 leading-relaxed",children:"Choose exactly what you want to hear from us. No spam, just beauty."})]}),c.jsx("div",{className:"space-y-4",children:xC.map(s=>c.jsxs("div",{onClick:()=>r(s.id),className:`p-5 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 ${e.includes(s.id)?"border-nykaa-pink bg-pink-50/30":"border-gray-100 bg-white"}`,children:[c.jsx("div",{className:"w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0",children:s.icon}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h3",{className:"font-bold text-sm text-gray-900",children:s.label}),c.jsx("p",{className:"text-[11px] text-gray-500",children:s.desc})]}),c.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${e.includes(s.id)?"bg-nykaa-pink border-nykaa-pink":"bg-white border-gray-200"}`,children:e.includes(s.id)&&c.jsx(cs,{className:"w-3.5 h-3.5 text-white stroke-[3px]"})})]},s.id))}),c.jsx("button",{onClick:()=>t("home"),className:"w-full mt-10 bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors",children:"Save Preferences"})]})]})}function TC({navigate:t,onLogout:e,userName:n,points:r}){const s=[{title:"My Activity",items:[{id:"orders",label:"My Orders",icon:c.jsx(qt,{className:"w-5 h-5 text-blue-500"}),desc:"Track, cancel or return orders"},{id:"wishlist",label:"My Wishlist",icon:c.jsx(oh,{className:"w-5 h-5 text-rose-500"}),desc:"Products you saved for later"},{id:"rewards",label:"My Rewards",icon:c.jsx(Jr,{className:"w-5 h-5 text-amber-500"}),desc:`You have ${r} Glow Points`}]},{title:"Settings",items:[{id:"profile",label:"Profile Information",icon:c.jsx(V2,{className:"w-5 h-5 text-gray-500"}),desc:"Name, Email, Phone"},{id:"addresses",label:"Saved Addresses",icon:c.jsx(Z1,{className:"w-5 h-5 text-emerald-500"}),desc:"Manage delivery addresses"},{id:"payments",label:"Payment Methods",icon:c.jsx(K1,{className:"w-5 h-5 text-indigo-500"}),desc:"Saved cards & UPI"},{id:"notifications",label:"Notification Settings",icon:c.jsx(Am,{className:"w-5 h-5 text-orange-500"}),desc:"Manage beauty alerts"}]},{title:"Support & Legal",items:[{id:"help",label:"Help Center",icon:c.jsx(X1,{className:"w-5 h-5 text-cyan-500"}),desc:"FAQs and chat support"},{id:"privacy",label:"Privacy Policy",icon:c.jsx(jm,{className:"w-5 h-5 text-gray-400"}),desc:"How we protect your data"}]}];return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-20 animate-pop",children:[c.jsx("header",{className:"px-5 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{onClick:()=>t("home"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-xl font-black tracking-tight",children:"Account"}),c.jsx("div",{className:"w-10"})," "]})}),c.jsxs("div",{className:"p-5 space-y-8",children:[c.jsxs("div",{className:"bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center",children:[c.jsxs("div",{className:"relative mb-4",children:[c.jsx("div",{className:"w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-nykaa-pink/20",children:c.jsx("img",{src:`https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=ff3f6c&color=fff&size=200`,alt:"Profile"})}),c.jsx("div",{className:"absolute bottom-0 right-0 bg-emerald-500 border-4 border-white w-7 h-7 rounded-full shadow-lg"})]}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:n}),c.jsxs("p",{className:"text-sm text-gray-500 mb-4",children:[n.toLowerCase().replace(" ","."),"@gmail.com"]}),c.jsxs("div",{className:"inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs font-bold shadow-md",children:[c.jsx(Jr,{className:"w-3.5 h-3.5 text-nykaa-pink"})," ",Cs.tier," Member"]})]}),s.map((i,o)=>c.jsxs("div",{className:"space-y-3",children:[c.jsx("h3",{className:"px-4 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]",children:i.title}),c.jsx("div",{className:"bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm",children:i.items.map((a,u)=>c.jsxs("div",{onClick:()=>t(a.id),className:`flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors cursor-pointer ${u!==i.items.length-1?"border-b border-gray-50":""}`,children:[c.jsx("div",{className:"w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0",children:a.icon}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h4",{className:"font-bold text-sm text-gray-800",children:a.label}),c.jsx("p",{className:"text-[11px] text-gray-500 truncate",children:a.desc})]}),c.jsx(Bs,{className:"w-4 h-4 text-gray-300"})]},a.id))})]},o)),c.jsxs("button",{onClick:e,className:"w-full bg-rose-50 text-rose-600 font-bold py-5 rounded-[2rem] flex items-center justify-center gap-3 hover:bg-rose-100 transition-colors border border-rose-100 shadow-sm",children:[c.jsx(C2,{className:"w-5 h-5"})," Logout Account"]}),c.jsx("div",{className:"text-center pb-10",children:c.jsx("p",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-widest",children:"Nykaa BeautyLoop v2.4.0"})})]})]})}const h0=[{id:"NYK-9821",date:"22 Apr 2025",status:"Delivered",total:"₹1,245",items:3,image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=100"},{id:"NYK-7742",date:"15 Mar 2025",status:"Delivered",total:"₹890",items:1,image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=100"},{id:"NYK-6510",date:"02 Feb 2025",status:"Processing",total:"₹2,450",items:5,image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=100"}];function bC({navigate:t}){return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"My Orders"})]}),c.jsxs("div",{className:"p-5 space-y-4",children:[h0.map(e=>c.jsxs("div",{className:"bg-white rounded-3xl p-5 border border-gray-100 shadow-sm",children:[c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest",children:["Order ID: ",e.id]}),c.jsx("p",{className:"text-xs text-gray-500",children:e.date})]}),c.jsxs("div",{className:`px-3 py-1 rounded-full text-[10px] font-bold ${e.status==="Delivered"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:[e.status==="Delivered"?c.jsx(H1,{className:"w-3 h-3 inline mr-1"}):c.jsx(G1,{className:"w-3 h-3 inline mr-1"}),e.status.toUpperCase()]})]}),c.jsxs("div",{className:"flex gap-4 items-center",children:[c.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-2xl p-2 shrink-0",children:c.jsx("img",{src:e.image,alt:"Product",className:"w-full h-full object-cover mix-blend-multiply"})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("p",{className:"text-sm font-bold text-gray-900",children:[e.items," ",e.items===1?"Item":"Items"]}),c.jsx("p",{className:"text-lg font-black text-nykaa-pink mt-1",children:e.total})]}),c.jsx("button",{className:"bg-gray-50 text-gray-800 px-4 py-2 rounded-xl text-xs font-bold border border-gray-100",children:"Details"})]})]},e.id)),h0.length===0&&c.jsxs("div",{className:"text-center py-20",children:[c.jsx("div",{className:"w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300",children:c.jsx(eE,{className:"w-10 h-10"})}),c.jsx("p",{className:"text-gray-500 font-medium",children:"No orders found yet"}),c.jsx("button",{onClick:()=>t("home"),className:"mt-6 text-nykaa-pink font-bold text-sm",children:"Start Shopping"})]})]})]})}const Cd=[{id:1,name:"Kay Beauty Liquid Lipstick",brand:"Kay Beauty",price:"₹799",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"},{id:2,name:"L'Oreal Paris Hyaluronic Acid",brand:"L'Oreal",price:"₹499",image:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200"},{id:3,name:"M.A.C Studio Fix Foundation",brand:"M.A.C",price:"₹2,900",image:"https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200"}];function IC({navigate:t,showSuccess:e}){return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsxs("h1",{className:"text-lg font-bold ml-2",children:["My Wishlist (",Cd.length,")"]})]}),c.jsx("div",{className:"p-5 grid grid-cols-2 gap-4",children:Cd.map(n=>c.jsxs("div",{className:"bg-white rounded-3xl p-3 border border-gray-100 shadow-sm relative group",children:[c.jsx("button",{className:"absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-rose-500 shadow-sm transition-colors z-10",children:c.jsx(B2,{className:"w-3.5 h-3.5"})}),c.jsx("div",{className:"bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center mb-3",children:c.jsx("img",{src:n.image,alt:n.name,className:"w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"})}),c.jsx("p",{className:"text-[9px] text-gray-400 font-bold uppercase",children:n.brand}),c.jsx("h4",{className:"text-xs font-bold text-gray-800 leading-tight h-8 line-clamp-2 mt-0.5",children:n.name}),c.jsx("p",{className:"font-black text-sm text-gray-900 mt-2",children:n.price}),c.jsxs("button",{onClick:()=>e(20,"Added to bag!"),className:"w-full mt-3 bg-black text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 hover:bg-nykaa-pink transition-colors",children:[c.jsx(qt,{className:"w-3 h-3"})," Add to Bag"]})]},n.id))}),Cd.length===0&&c.jsxs("div",{className:"text-center py-20 px-10",children:[c.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(oh,{className:"w-10 h-10 text-rose-200"})}),c.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Your wishlist is empty"}),c.jsx("p",{className:"text-sm text-gray-500",children:"Save items you love to find them easily and track price drops."}),c.jsx("button",{onClick:()=>t("home"),className:"mt-8 bg-black text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg",children:"Go Shopping"})]})]})}function kC({navigate:t,userName:e}){const[n,r]=K.useState({name:e,email:e.toLowerCase().replace(" ",".")+"@gmail.com",phone:"+91 98765 43210",dob:"12/04/1998",gender:"Female"});return c.jsxs("div",{className:"bg-white min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Profile Information"})]}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex flex-col items-center mb-10",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-nykaa-pink/10",children:c.jsx("img",{src:`https://ui-avatars.com/api/?name=${encodeURIComponent(e)}&background=ff3f6c&color=fff&size=200`,alt:"Profile"})}),c.jsx("button",{className:"absolute bottom-0 right-0 bg-black text-white p-2 rounded-full border-4 border-white shadow-lg",children:c.jsx(E2,{className:"w-4 h-4"})})]}),c.jsx("p",{className:"mt-4 text-[10px] font-black text-nykaa-pink uppercase tracking-widest",children:"Platinum Member"})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsx(Xo,{label:"Full Name",value:n.name,icon:c.jsx(Kf,{className:"w-4 h-4"})}),c.jsx(Xo,{label:"Email Address",value:n.email,icon:c.jsx(J1,{className:"w-4 h-4"})}),c.jsx(Xo,{label:"Mobile Number",value:n.phone,icon:c.jsx(tE,{className:"w-4 h-4"})}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsx(Xo,{label:"Birth Date",value:n.dob,icon:c.jsx(x2,{className:"w-4 h-4"})}),c.jsx(Xo,{label:"Gender",value:n.gender,icon:c.jsx(Kf,{className:"w-4 h-4"})})]})]}),c.jsxs("div",{className:"mt-12 space-y-4",children:[c.jsx("button",{className:"w-full bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors",children:"Update Profile"}),c.jsx("button",{className:"w-full text-rose-500 font-bold py-2 text-sm",children:"Delete Account"})]})]})]})}function Xo({label:t,value:e,icon:n}){return c.jsxs("div",{className:"space-y-1.5",children:[c.jsx("label",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1",children:t}),c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",children:n}),c.jsx("input",{type:"text",defaultValue:e,className:"w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-gray-800 focus:outline-none focus:border-nykaa-pink transition-colors"})]})]})}const SC=[{id:1,type:"Home",name:"Aditi Sharma",address:"B-12, Green Park Extension, New Delhi, Delhi - 110016",phone:"+91 98765 43210",isDefault:!0},{id:2,type:"Work",name:"Aditi Sharma",address:"Nykaa HQ, DLF Cyber City, Tower B, Phase 3, Gurgaon - 122002",phone:"+91 98765 43210",isDefault:!1}];function NC({navigate:t}){return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Saved Addresses"})]}),c.jsxs("div",{className:"p-5 space-y-4",children:[c.jsxs("button",{className:"w-full bg-white border-2 border-dashed border-gray-200 rounded-3xl py-6 flex flex-col items-center justify-center gap-2 hover:border-nykaa-pink hover:bg-pink-50/30 transition-all group",children:[c.jsx("div",{className:"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-nykaa-pink group-hover:text-white transition-colors",children:c.jsx(ah,{className:"w-6 h-6"})}),c.jsx("span",{className:"text-sm font-bold text-gray-700",children:"Add New Address"})]}),SC.map(e=>c.jsxs("div",{className:`bg-white rounded-[2rem] p-6 border shadow-sm relative ${e.isDefault?"border-nykaa-pink":"border-gray-100"}`,children:[c.jsxs("div",{className:"flex justify-between items-start mb-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center",children:c.jsx(Z1,{className:"w-4 h-4 text-gray-500"})}),c.jsx("span",{className:"text-xs font-black uppercase tracking-widest text-gray-900",children:e.type}),e.isDefault&&c.jsxs("span",{className:"bg-emerald-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full flex items-center gap-1",children:[c.jsx(cs,{className:"w-2 h-2"})," DEFAULT"]})]}),c.jsx("button",{className:"p-1 text-gray-400 hover:text-gray-600",children:c.jsx(j2,{className:"w-5 h-5"})})]}),c.jsx("h4",{className:"font-bold text-sm text-gray-900 mb-1",children:e.name}),c.jsx("p",{className:"text-xs text-gray-500 leading-relaxed mb-4",children:e.address}),c.jsxs("p",{className:"text-xs font-bold text-gray-700",children:["Phone: ",e.phone]})]},e.id))]})]})}const CC=[{id:1,type:"Visa",last4:"4242",expiry:"09/27",bank:"HDFC Bank",color:"from-blue-600 to-indigo-700"},{id:2,type:"Mastercard",last4:"8812",expiry:"12/26",bank:"ICICI Bank",color:"from-orange-500 to-rose-600"}];function AC({navigate:t}){return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Payment Methods"})]}),c.jsxs("div",{className:"p-5 space-y-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-2",children:"Saved Cards"}),c.jsxs("div",{className:"flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5",children:[CC.map(e=>c.jsxs("div",{className:`min-w-[280px] h-44 rounded-3xl bg-gradient-to-br ${e.color} p-6 text-white shadow-xl relative overflow-hidden`,children:[c.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-between",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("p",{className:"text-xs font-bold opacity-80",children:e.bank}),c.jsx("span",{className:"font-bold italic text-xl",children:e.type})]}),c.jsxs("div",{children:[c.jsxs("p",{className:"text-lg font-mono tracking-widest mb-4",children:["**** **** **** ",e.last4]}),c.jsxs("div",{className:"flex justify-between items-end",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] opacity-60 uppercase font-bold",children:"Expiry"}),c.jsx("p",{className:"text-sm font-bold",children:e.expiry})]}),c.jsx(K1,{className:"w-8 h-8 opacity-40"})]})]})]}),c.jsx("div",{className:"absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"})]},e.id)),c.jsxs("button",{className:"min-w-[150px] h-44 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-nykaa-pink transition-all",children:[c.jsx("div",{className:"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center",children:c.jsx(ah,{className:"w-6 h-6 text-gray-400"})}),c.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase",children:"Add New Card"})]})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-2",children:"UPI & Netbanking"}),c.jsxs("div",{className:"bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-4 p-5 border-b border-gray-50 hover:bg-gray-50 cursor-pointer",children:[c.jsx("div",{className:"w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xs italic",children:"UPI"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"font-bold text-sm text-gray-800",children:"Google Pay"}),c.jsx("p",{className:"text-[11px] text-gray-500",children:"aditi.sharma@okaxis"})]}),c.jsx(Bs,{className:"w-4 h-4 text-gray-300"})]}),c.jsxs("div",{className:"flex items-center gap-4 p-5 hover:bg-gray-50 cursor-pointer",children:[c.jsx("div",{className:"w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold text-xs italic",children:"NB"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"font-bold text-sm text-gray-800",children:"Net Banking"}),c.jsx("p",{className:"text-[11px] text-gray-500",children:"HDFC Bank, ICICI Bank"})]}),c.jsx(Bs,{className:"w-4 h-4 text-gray-300"})]})]})]}),c.jsxs("div",{className:"bg-emerald-50 rounded-2xl p-4 flex items-center gap-3 border border-emerald-100",children:[c.jsx(jm,{className:"w-5 h-5 text-emerald-600"}),c.jsx("p",{className:"text-[11px] text-emerald-700 font-medium",children:"Your payment details are encrypted and stored securely following PCI-DSS standards."})]})]})]})}const d0=["How to track my order?","How to return a product?","What are Glow Points?","How to use a coupon code?","Refund policy for damaged items"];function RC({navigate:t}){return c.jsxs("div",{className:"bg-[#fafafa] min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Help Center"})]}),c.jsxs("div",{className:"p-6 space-y-8",children:[c.jsxs("div",{className:"relative",children:[c.jsx(L2,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Search for help...",className:"w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium shadow-sm focus:outline-none focus:border-nykaa-pink transition-colors"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer",children:[c.jsx("div",{className:"w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-3",children:c.jsx(R2,{className:"w-6 h-6 text-nykaa-pink"})}),c.jsx("h4",{className:"font-bold text-sm text-gray-900",children:"Chat with Us"}),c.jsx("p",{className:"text-[10px] text-gray-500 mt-1",children:"24/7 Support"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer",children:[c.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3",children:c.jsx(tE,{className:"w-6 h-6 text-blue-500"})}),c.jsx("h4",{className:"font-bold text-sm text-gray-900",children:"Call Us"}),c.jsx("p",{className:"text-[10px] text-gray-500 mt-1",children:"9 AM - 9 PM"})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-2",children:"Popular Questions"}),c.jsx("div",{className:"bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm",children:d0.map((e,n)=>c.jsxs("div",{className:`flex items-center justify-between p-5 hover:bg-gray-50 cursor-pointer ${n!==d0.length-1?"border-b border-gray-50":""}`,children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(X1,{className:"w-4 h-4 text-gray-300"}),c.jsx("span",{className:"text-sm font-medium text-gray-700",children:e})]}),c.jsx(Bs,{className:"w-4 h-4 text-gray-300"})]},n))})]}),c.jsxs("div",{className:"bg-white p-6 rounded-[2.5rem] border border-gray-100 flex items-center gap-4 shadow-sm",children:[c.jsx("div",{className:"w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0",children:c.jsx(J1,{className:"w-6 h-6 text-emerald-500"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"font-bold text-sm text-gray-900",children:"Email Support"}),c.jsx("p",{className:"text-xs text-gray-500",children:"support@nykaabeauty.com"})]}),c.jsx(Bs,{className:"w-5 h-5 text-gray-300"})]})]})]})}function PC({navigate:t}){return c.jsxs("div",{className:"bg-white min-h-full pb-10 animate-pop",children:[c.jsxs("header",{className:"px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100",children:[c.jsx("button",{onClick:()=>t("account"),className:"p-2 -ml-2 text-gray-800",children:c.jsx(Ve,{className:"w-6 h-6"})}),c.jsx("h1",{className:"text-lg font-bold ml-2",children:"Privacy Policy"})]}),c.jsxs("div",{className:"p-6 space-y-8",children:[c.jsxs("div",{className:"bg-indigo-50 rounded-3xl p-8 text-center border border-indigo-100",children:[c.jsx(jm,{className:"w-16 h-16 text-indigo-500 mx-auto mb-4"}),c.jsx("h2",{className:"text-2xl font-black text-gray-900 mb-2",children:"Your Privacy Matters"}),c.jsx("p",{className:"text-sm text-indigo-700 font-medium",children:"Last updated: April 2025"})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsx(Ad,{icon:c.jsx(Q1,{className:"w-5 h-5 text-nykaa-pink"}),title:"Data Collection",content:"We collect information like your name, email, and beauty preferences to personalize your experience and provide product recommendations."}),c.jsx(Ad,{icon:c.jsx(N2,{className:"w-5 h-5 text-emerald-500"}),title:"Security",content:"All your payment data is encrypted via SSL and we follow strict international security protocols to protect your personal info."}),c.jsx(Ad,{icon:c.jsx(b2,{className:"w-5 h-5 text-blue-500"}),title:"Usage",content:"We use your data to process orders, improve our AI routine builders, and send you relevant rewards and beauty alerts."})]}),c.jsxs("div",{className:"prose prose-sm text-gray-500 pt-6",children:[c.jsx("p",{children:"By using the Nykaa BeautyLoop app, you agree to the collection and use of information in accordance with this policy. We do not sell your personal information to third parties."}),c.jsx("p",{className:"mt-4",children:"For more detailed information, you can contact our data protection officer at privacy@nykaabeauty.com."})]})]})]})}function Ad({icon:t,title:e,content:n}){return c.jsxs("div",{className:"flex gap-4",children:[c.jsx("div",{className:"w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0",children:t}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:e}),c.jsx("p",{className:"text-sm text-gray-500 leading-relaxed",children:n})]})]})}const jC=()=>{};var f0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw po(e)},po=function(t){return new Error("Firebase Database ("+aE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},DC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let g=(a&15)<<2|h>>6,b=h&63;u||(b=64,o||(g=64)),r.push(n[f],n[m],n[g],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||h==null||m==null)throw new OC;const g=i<<2|a>>4;if(r.push(g),h!==64){const b=a<<4&240|h>>2;if(r.push(b),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cE=function(t){const e=lE(t);return Dm.encodeByteArray(e,!0)},uu=function(t){return cE(t).replace(/\./g,"")},hu=function(t){try{return Dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){return uE(void 0,t)}function uE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LC(n)||(t[n]=uE(t[n],e[n]));return t}function LC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=()=>VC().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof f0>"u")return;const t=f0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hu(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return jC()||FC()||UC()||zC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hE=t=>{var e,n;return(n=(e=ch())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Om=t=>{const e=hE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dE=()=>{var t;return(t=ch())==null?void 0:t.config},fE=t=>{var e;return(e=ch())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[uu(JSON.stringify(n)),uu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function BC(){var e;const t=(e=ch())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $C(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WC(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HC(){return aE.NODE_ADMIN===!0}function qC(){return!BC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gE(){try{return typeof indexedDB=="object"}catch{return!1}}function yE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function GC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KC,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function QC(t,e){return t.replace(YC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ya(hu(i[0])||""),n=Ya(hu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},XC=function(t){const e=_E(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JC=function(t){const e=_E(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function to(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function du(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(p0(i)&&p0(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function p0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function la(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const g=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,f;for(let m=0;m<80;m++){m<40?m<20?(h=a^i&(o^a),f=1518500249):(h=i^o^a,f=1859775393):m<60?(h=i&o|a&(i|o),f=2400959708):(h=i^o^a,f=3395469782);const g=(s<<5|s>>>27)+h+u+f+r[m]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function eA(t,e){const n=new tA(t,e);return n.subscribe.bind(n)}class tA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rd),s.error===void 0&&(s.error=Rd),s.complete===void 0&&(s.complete=Rd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rd(){}function rA(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=1e3,oA=2,aA=4*60*60*1e3,lA=.5;function m0(t,e=iA,n=oA){const r=e*Math.pow(n,t),s=Math.round(lA*r*(Math.random()-.5)*2);return Math.min(aA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hh(t){return(await fetch(t,{credentials:"include"})).ok}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hA(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uA(t){return t===bs?void 0:t}function hA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const fA={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pA=ne.INFO,mA={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},gA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=pA,this._logHandler=gA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const yA=(t,e)=>e.some(n=>t instanceof n);let g0,y0;function _A(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vA(){return y0||(y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Xf=new WeakMap,wE=new WeakMap,Pd=new WeakMap,Fm=new WeakMap;function wA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),Fm.set(e,t),e}function xA(t){if(Xf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xf.set(t,e)}let Jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EA(t){Jf=t(Jf)}function TA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return wE.set(r,e.sort?e.sort():[e]),Wr(r)}:vA().includes(t)?function(...e){return t.apply(jd(this),e),Wr(vE.get(this))}:function(...e){return Wr(t.apply(jd(this),e))}}function bA(t){return typeof t=="function"?TA(t):(t instanceof IDBTransaction&&xA(t),yA(t,_A())?new Proxy(t,Jf):t)}function Wr(t){if(t instanceof IDBRequest)return wA(t);if(Pd.has(t))return Pd.get(t);const e=bA(t);return e!==t&&(Pd.set(t,e),Fm.set(e,t)),e}const jd=t=>Fm.get(t);function xE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Wr(o.result),u.oldVersion,u.newVersion,Wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const IA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],Dd=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&u.done]))[0]};return Dd.set(e,i),i}EA(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zf="@firebase/app",v0="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new pl("@firebase/app"),CA="@firebase/app-compat",AA="@firebase/analytics-compat",RA="@firebase/analytics",PA="@firebase/app-check-compat",jA="@firebase/app-check",DA="@firebase/auth",OA="@firebase/auth-compat",MA="@firebase/database",LA="@firebase/data-connect",VA="@firebase/database-compat",FA="@firebase/functions",UA="@firebase/functions-compat",zA="@firebase/installations",BA="@firebase/installations-compat",$A="@firebase/messaging",WA="@firebase/messaging-compat",HA="@firebase/performance",qA="@firebase/performance-compat",GA="@firebase/remote-config",KA="@firebase/remote-config-compat",QA="@firebase/storage",YA="@firebase/storage-compat",XA="@firebase/firestore",JA="@firebase/ai",ZA="@firebase/firestore-compat",eR="firebase",tR="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="[DEFAULT]",nR={[Zf]:"fire-core",[CA]:"fire-core-compat",[RA]:"fire-analytics",[AA]:"fire-analytics-compat",[jA]:"fire-app-check",[PA]:"fire-app-check-compat",[DA]:"fire-auth",[OA]:"fire-auth-compat",[MA]:"fire-rtdb",[LA]:"fire-data-connect",[VA]:"fire-rtdb-compat",[FA]:"fire-fn",[UA]:"fire-fn-compat",[zA]:"fire-iid",[BA]:"fire-iid-compat",[$A]:"fire-fcm",[WA]:"fire-fcm-compat",[HA]:"fire-perf",[qA]:"fire-perf-compat",[GA]:"fire-rc",[KA]:"fire-rc-compat",[QA]:"fire-gcs",[YA]:"fire-gcs-compat",[XA]:"fire-fst",[ZA]:"fire-fst-compat",[JA]:"fire-vertex","fire-js":"fire-js",[eR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map,rR=new Map,tp=new Map;function w0(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(tp.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;tp.set(e,t);for(const n of fu.values())w0(n,t);for(const n of rR.values())w0(n,t);return!0}function pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new ti("app","Firebase",sR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=tR;function EE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ep,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Hr.create("bad-app-name",{appName:String(s)});if(n||(n=dE()),!n)throw Hr.create("no-options");const i=fu.get(s);if(i){if(or(n,i.options)&&or(r,i.config))return i;throw Hr.create("duplicate-app",{appName:s})}const o=new dA(s);for(const u of tp.values())o.addComponent(u);const a=new iR(n,r,o);return fu.set(s,a),a}function ml(t=ep){const e=fu.get(t);if(!e&&t===ep&&dE())return EE();if(!e)throw Hr.create("no-app",{appName:t});return e}function yt(t,e,n){let r=nR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(o.join(" "));return}rn(new $t(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="firebase-heartbeat-database",aR=1,Xa="firebase-heartbeat-store";let Od=null;function TE(){return Od||(Od=xE(oR,aR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),Od}async function lR(t){try{const n=(await TE()).transaction(Xa),r=await n.objectStore(Xa).get(bE(t));return await n.done,r}catch(e){if(e instanceof an)ar.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function x0(t,e){try{const r=(await TE()).transaction(Xa,"readwrite");await r.objectStore(Xa).put(e,bE(t)),await r.done}catch(n){if(n instanceof an)ar.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function bE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=1024,uR=30;class hR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=E0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>uR){const o=pR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=E0(),{heartbeatsToSend:r,unsentEntries:s}=dR(this._heartbeatsCache.heartbeats),i=uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ar.warn(n),""}}}function E0(){return new Date().toISOString().substring(0,10)}function dR(t,e=cR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),T0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),T0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gE()?yE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return x0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return x0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function T0(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}function pR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){rn(new $t("platform-logger",e=>new SA(e),"PRIVATE")),rn(new $t("heartbeat",e=>new hR(e),"PRIVATE")),yt(Zf,v0,t),yt(Zf,v0,"esm2020"),yt("fire-js","")}mR("");var gR="firebase",yR="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(gR,yR,"app");const IE="@firebase/installations",Um="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1e4,SE=`w:${Um}`,NE="FIS_v2",_R="https://firebaseinstallations.googleapis.com/v1",vR=60*60*1e3,wR="installations",xR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$s=new ti(wR,xR,ER);function CE(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE({projectId:t}){return`${_R}/projects/${t}/installations`}function RE(t){return{token:t.token,requestStatus:2,expiresIn:bR(t.expiresIn),creationTime:Date.now()}}async function PE(t,e){const r=(await e.json()).error;return $s.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function TR(t,{refreshToken:e}){const n=jE(t);return n.append("Authorization",IR(e)),n}async function DE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bR(t){return Number(t.replace("s","000"))}function IR(t){return`${NE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AE(t),s=jE(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:NE,appId:t.appId,sdkVersion:SE},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await DE(()=>fetch(r,a));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:RE(h.authToken)}}else throw await PE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=/^[cdef][\w-]{21}$/,np="";function CR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=AR(t);return NR.test(n)?n:np}catch{return np}}function AR(t){return SR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new Map;function LE(t,e){const n=dh(t);VE(n,e),RR(n,e)}function VE(t,e){const n=ME.get(t);if(n)for(const r of n)r(e)}function RR(t,e){const n=PR();n&&n.postMessage({key:t,fid:e}),jR()}let As=null;function PR(){return!As&&"BroadcastChannel"in self&&(As=new BroadcastChannel("[Firebase] FID Change"),As.onmessage=t=>{VE(t.data.key,t.data.fid)}),As}function jR(){ME.size===0&&As&&(As.close(),As=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="firebase-installations-database",OR=1,Ws="firebase-installations-store";let Md=null;function zm(){return Md||(Md=xE(DR,OR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ws)}}})),Md}async function pu(t,e){const n=dh(t),s=(await zm()).transaction(Ws,"readwrite"),i=s.objectStore(Ws),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&LE(t,e.fid),e}async function FE(t){const e=dh(t),r=(await zm()).transaction(Ws,"readwrite");await r.objectStore(Ws).delete(e),await r.done}async function fh(t,e){const n=dh(t),s=(await zm()).transaction(Ws,"readwrite"),i=s.objectStore(Ws),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&LE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t){let e;const n=await fh(t.appConfig,r=>{const s=MR(r),i=LR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===np?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function MR(t){const e=t||{fid:CR(),registrationStatus:0};return UE(e)}function LR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($s.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FR(t)}:{installationEntry:e}}async function VR(t,e){try{const n=await kR(t,e);return pu(t.appConfig,n)}catch(n){throw CE(n)&&n.customData.serverCode===409?await FE(t.appConfig):await pu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function FR(t){let e=await b0(t.appConfig);for(;e.registrationStatus===1;)await OE(100),e=await b0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bm(t);return r||n}return e}function b0(t){return fh(t,e=>{if(!e)throw $s.create("installation-not-found");return UE(e)})}function UE(t){return UR(t)?{fid:t.fid,registrationStatus:0}:t}function UR(t){return t.registrationStatus===1&&t.registrationTime+kE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR({appConfig:t,heartbeatServiceProvider:e},n){const r=BR(t,n),s=TR(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:SE,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await DE(()=>fetch(r,a));if(u.ok){const h=await u.json();return RE(h)}else throw await PE("Generate Auth Token",u)}function BR(t,{fid:e}){return`${AE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e=!1){let n;const r=await fh(t.appConfig,i=>{if(!zE(i))throw $s.create("not-registered");const o=i.authToken;if(!e&&HR(o))return i;if(o.requestStatus===1)return n=$R(t,e),i;{if(!navigator.onLine)throw $s.create("app-offline");const a=GR(i);return n=WR(t,a),a}});return n?await n:r.authToken}async function $R(t,e){let n=await I0(t.appConfig);for(;n.authToken.requestStatus===1;)await OE(100),n=await I0(t.appConfig);const r=n.authToken;return r.requestStatus===0?$m(t,e):r}function I0(t){return fh(t,e=>{if(!zE(e))throw $s.create("not-registered");const n=e.authToken;return KR(n)?{...e,authToken:{requestStatus:0}}:e})}async function WR(t,e){try{const n=await zR(t,e),r={...e,authToken:n};return await pu(t.appConfig,r),n}catch(n){if(CE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await FE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await pu(t.appConfig,r)}throw n}}function zE(t){return t!==void 0&&t.registrationStatus===2}function HR(t){return t.requestStatus===2&&!qR(t)}function qR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vR}function GR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function KR(t){return t.requestStatus===1&&t.requestTime+kE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bm(e);return r?r.catch(console.error):$m(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e=!1){const n=t;return await XR(n),(await $m(n,e)).token}async function XR(t){const{registrationPromise:e}=await Bm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){if(!t||!t.options)throw Ld("App Configuration");if(!t.name)throw Ld("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ld(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ld(t){return $s.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="installations",ZR="installations-internal",eP=t=>{const e=t.getProvider("app").getImmediate(),n=JR(e),r=pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tP=t=>{const e=t.getProvider("app").getImmediate(),n=pr(e,BE).getImmediate();return{getId:()=>QR(n),getToken:s=>YR(n,s)}};function nP(){rn(new $t(BE,eP,"PUBLIC")),rn(new $t(ZR,tP,"PRIVATE"))}nP();yt(IE,Um);yt(IE,Um,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="analytics",rP="firebase_id",sP="origin",iP=60*1e3,oP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new ti("analytics","Analytics",aP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){if(!t.startsWith(Wm)){const e=Ft.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function $E(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uP(t,e){const n=cP("firebase-js-sdk-policy",{createScriptURL:lP}),r=document.createElement("script"),s=`${Wm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function hP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await $E(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(a){It.error(a)}t("config",s,i)}async function fP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await $E(n);for(const u of o){const h=a.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){It.error(i)}}function pP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,u]=o;await fP(t,e,n,a,u)}else if(i==="config"){const[a,u]=o;await dP(t,e,n,r,a,u)}else if(i==="consent"){const[a,u]=o;t("consent",a,u)}else if(i==="get"){const[a,u,h]=o;t("get",a,u,h)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){It.error(a)}}return s}function mP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=pP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function gP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=30,_P=1e3;class vP{constructor(e={},n=_P){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WE=new vP;function wP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xP(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:wP(n)},s=oP.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(a=u.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function EP(t,e=WE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ft.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new IP;return setTimeout(async()=>{a.abort()},iP),HE({appId:r,apiKey:s,measurementId:i},o,a,e)}async function HE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=WE){var a;const{appId:i,measurementId:o}=t;try{await TP(r,e)}catch(u){if(o)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await xP(t);return s.deleteThrottleMetadata(i),u}catch(u){const h=u;if(!bP(h)){if(s.deleteThrottleMetadata(i),o)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:o};throw u}const f=Number((a=h==null?void 0:h.customData)==null?void 0:a.httpStatus)===503?m0(n,s.intervalMillis,yP):m0(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),It.debug(`Calling attemptFetch again in ${f} millis`),HE(t,m,r,s)}}function TP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bP(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class IP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function SP(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(){if(gE())try{await yE()}catch(t){return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CP(t,e,n,r,s,i,o){const a=EP(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>It.error(g)),e.push(a);const u=NP().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([a,u]);gP(i)||uP(i,h.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[sP]="firebase",m.update=!0,f!=null&&(m[rP]=f),s("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.app=e}_delete(){return delete Fi[this.app.options.appId],Promise.resolve()}}let Fi={},k0=[];const S0={};let Vd="dataLayer",RP="gtag",N0,Hm,C0=!1;function PP(){const t=[];if(pE()&&t.push("This is a browser extension environment."),GC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function jP(t,e,n){PP();const r=t.options.appId;if(!r)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(Fi[r]!=null)throw Ft.create("already-exists",{id:r});if(!C0){hP(Vd);const{wrappedGtag:i,gtagCore:o}=mP(Fi,k0,S0,Vd,RP);Hm=i,N0=o,C0=!0}return Fi[r]=CP(t,k0,S0,e,N0,Vd,n),new AP(t)}function DP(t=ml()){t=Fe(t);const e=pr(t,mu);return e.isInitialized()?e.getImmediate():OP(t)}function OP(t,e={}){const n=pr(t,mu);if(n.isInitialized()){const s=n.getImmediate();if(or(e,n.getOptions()))return s;throw Ft.create("already-initialized")}return n.initialize({options:e})}function MP(t,e,n){t=Fe(t),SP(Hm,Fi[t.app.options.appId],e,n).catch(r=>It.error(r))}function LP(t,e,n,r){t=Fe(t),kP(Hm,Fi[t.app.options.appId],e,n,r).catch(s=>It.error(s))}const A0="@firebase/analytics",R0="0.10.21";function VP(){rn(new $t(mu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return jP(r,s,n)},"PUBLIC")),rn(new $t("analytics-internal",t,"PRIVATE")),yt(A0,R0),yt(A0,R0,"esm2020");function t(e){try{const n=e.getProvider(mu).getImmediate();return{logEvent:(r,s,i)=>LP(n,r,s,i),setUserProperties:(r,s)=>MP(n,r,s)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}VP();function qE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FP=qE,GE=new ti("auth","Firebase",qE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new pl("@firebase/auth");function UP(t,...e){gu.logLevel<=ne.WARN&&gu.warn(`Auth (${hs}): ${t}`,...e)}function Sc(t,...e){gu.logLevel<=ne.ERROR&&gu.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Gm(t,...e)}function wn(t,...e){return Gm(t,...e)}function qm(t,e,n){const r={...FP(),[e]:n};return new ti("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return qm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),qm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GE.create(t,...e)}function Q(t,e,...n){if(!t)throw Gm(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sc(e),new Error(e)}function lr(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function BP(){return P0()==="http:"||P0()==="https:"}function P0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BP()||pE()||"connection"in navigator)?navigator.onLine:!0}function WP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||mE()}get(){return $P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GP=new gl(3e4,6e4);function ds(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mr(t,e,n,r,s={}){return QE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=mo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return $C()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(h.credentials="include"),KE.fetch()(await YE(t,t.config.apiHost,n,a),h)})}async function QE(t,e,n){t._canInitEmulator=!1;const r={...HP,...e};try{const s=new QP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw oc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw oc(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw qm(t,f,h);sn(t,f)}}catch(s){if(s instanceof an)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function yl(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function YE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Km(t.config,s):`${t.config.apiScheme}://${s}`;return qP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function KP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),GP.get())})}}function oc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function j0(t){return t!==void 0&&t.enterprise!==void 0}class YP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XP(t,e){return mr(t,"GET","/v2/recaptchaConfig",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function yu(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZP(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Qm(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ea(Fd(s.auth_time)),issuedAtTime:Ea(Fd(s.iat)),expirationTime:Ea(Fd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function Qm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const s=hu(n);return s?JSON.parse(s):(Sc("Failed to decode base64 JWT payload"),null)}catch(s){return Sc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function D0(t){const e=Qm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&ej(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ej({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t){var m;const e=t.auth,n=await t.getIdToken(),r=await no(t,yu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?XE(s.providerUserInfo):[],o=rj(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=a?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new sp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function nj(t){const e=Fe(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rj(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function XE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sj(t,e){const n=await QE(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await YE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),KE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ij(t,e){return mr(t,"POST","/v2/accounts:revokeToken",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=D0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sj(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ui;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZP(this,e)}reload(){return nj(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await no(this,JP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:b,providerData:N,stsTokenManager:R}=n;Q(m&&R,e,"internal-error");const P=Ui.fromJSON(this.name,R);Q(typeof m=="string",e,"internal-error"),Ir(r,e.name),Ir(s,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof b=="boolean",e,"internal-error"),Ir(i,e.name),Ir(o,e.name),Ir(a,e.name),Ir(u,e.name),Ir(h,e.name),Ir(f,e.name);const E=new pn({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:P,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(E.providerData=N.map(w=>({...w}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ui;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _u(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?XE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ui;a.updateFromIdToken(r);const u=new pn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Map;function Qn(t){lr(t instanceof Function,"Expected a class definition");let e=O0.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JE.type="NONE";const M0=JE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yu(this.auth,{idToken:e}).catch(()=>{});return n?pn._fromGetAccountInfoResponse(this.auth,n,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(Qn(M0),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Qn(M0);const o=Nc(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await yu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await pn._fromGetAccountInfoResponse(e,g,f)}else m=pn._fromJSON(e,f);h!==i&&(a=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(iT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZE(t=vt()){return/firefox\//i.test(t)}function eT(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=vt()){return/crios\//i.test(t)}function nT(t=vt()){return/iemobile/i.test(t)}function rT(t=vt()){return/android/i.test(t)}function sT(t=vt()){return/blackberry/i.test(t)}function iT(t=vt()){return/webos/i.test(t)}function Ym(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oj(t=vt()){var e;return Ym(t)&&!!((e=window.navigator)!=null&&e.standalone)}function aj(){return WC()&&document.documentMode===10}function oT(t=vt()){return Ym(t)||rT(t)||iT(t)||sT(t)||/windows phone/i.test(t)||nT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=L0(vt());break;case"Worker":n=`${L0(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cj(t,e={}){return mr(t,"GET","/v2/passwordPolicy",ds(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uj=6;class hj{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uj,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V0(this),this.idTokenSubscription=new V0(this),this.beforeStateQueue=new lj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yu(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Zn(this));const n=e?Fe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cj(this),n=new hj(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ij(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&UP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fs(t){return Fe(t)}class V0{constructor(e){this.auth=e,this.observer=null,this.addObserver=eA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fj(t){ph=t}function lT(t){return ph.loadJS(t)}function pj(){return ph.recaptchaEnterpriseScript}function mj(){return ph.gapiScript}function gj(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class yj{constructor(){this.enterprise=new _j}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _j{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vj="recaptcha-enterprise",cT="NO_RECAPTCHA";class wj{constructor(e){this.type=vj,this.auth=fs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{XP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new YP(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;j0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(cT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yj().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&j0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=pj();u.length!==0&&(u+=a),lT(u).then(()=>{s(a,i,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function F0(t,e,n,r=!1,s=!1){const i=new wj(t);let o;if(s)o=cT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ip(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await F0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await F0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xj(t,e){const n=pr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function Ej(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tj(t,e,n){const r=fs(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=uT(e),{host:o,port:a}=bj(e),u=a===null?"":`:${a}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(or(h,r.config.emulator)&&or(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,us(o)?hh(`${i}//${o}${u}`):Ij()}function uT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bj(t){const e=uT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:U0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:U0(o)}}}function U0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ij(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function kj(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sj(t,e){return yl(t,"POST","/v1/accounts:signInWithPassword",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nj(t,e){return yl(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}async function Cj(t,e){return yl(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Xm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,n,"signInWithPassword",Sj);case"emailLink":return Nj(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,r,"signUpPassword",kj);case"emailLink":return Cj(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return yl(t,"POST","/v1/accounts:signInWithIdp",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj="http://localhost";class Hs extends Xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:Aj,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pj(t){const e=aa(la(t)).link,n=e?aa(la(e)).deep_link_id:null,r=aa(la(t)).deep_link_id;return(r?aa(la(r)).link:null)||r||n||e||t}class Jm{constructor(e){const n=aa(la(e)),r=n.apiKey??null,s=n.oobCode??null,i=Rj(n.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Pj(e);try{return new Jm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.providerId=go.PROVIDER_ID}static credential(e,n){return Ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jm.parseLink(n);return Q(r,"argument-error"),Ja._fromEmailAndCode(e,r.code,r.tenantId)}}go.PROVIDER_ID="password";go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends _l{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends _l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends _l{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends _l{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jj(t,e){return yl(t,"POST","/v1/accounts:signUp",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=z0(r);return new qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=z0(r);return new qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function z0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends an{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vu(e,n,r,s)}}function hT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,i,e,r):i})}async function Dj(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oj(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const i=await no(t,hT(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Qm(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r="signIn",s=await hT(t,r,e),i=await qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mj(t,e){return dT(fs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t){const e=fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lj(t,e,n){if(Tt(t.app))return Promise.reject(Zn(t));const r=fs(t),o=await ip(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jj).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&fT(t),u}),a=await qs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Vj(t,e,n){return Tt(t.app)?Promise.reject(Zn(t)):Mj(Fe(t),go.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fj(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uj(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await no(r,Fj(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function zj(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function Bj(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function $j(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function Wj(t){return Fe(t).signOut()}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hj=1e3,qj=10;class mT extends pT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aj()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qj):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mT.type="LOCAL";const Gj=mT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends pT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gT.type="SESSION";const yT=gT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new mh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(n.origin,i)),u=await Kj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const h=eg("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function Yj(t){jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function Xj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Zj(){return _T()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebaseLocalStorageDb",e4=1,xu="firebaseLocalStorage",wT="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function t4(){const t=indexedDB.deleteDatabase(vT);return new vl(t).toPromise()}function op(){const t=indexedDB.open(vT,e4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:wT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await t4(),e(await op()))})})}async function B0(t,e,n){const r=gh(t,!0).put({[wT]:e,value:n});return new vl(r).toPromise()}async function n4(t,e){const n=gh(t,!1).get(e),r=await new vl(n).toPromise();return r===void 0?null:r.value}function $0(t,e){const n=gh(t,!0).delete(e);return new vl(n).toPromise()}const r4=800,s4=3;class xT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await op(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _T()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(Zj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Xj(),!this.activeServiceWorker)return;this.sender=new Qj(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await op();return await B0(e,wu,"1"),await $0(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>B0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gh(s,!1).getAll();return new vl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xT.type="LOCAL";const i4=xT;new gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e){return e?Qn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends Xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o4(t){return dT(t.auth,new tg(t),t.bypassAuthState)}function a4(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Oj(n,new tg(t),t.bypassAuthState)}async function l4(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Dj(n,new tg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o4;case"linkViaPopup":case"linkViaRedirect":return l4;case"reauthViaPopup":case"reauthViaRedirect":return a4;default:sn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=new gl(2e3,1e4);async function u4(t,e,n){if(Tt(t.app))return Promise.reject(wn(t,"operation-not-supported-in-this-environment"));const r=fs(t);zP(t,e,Zm);const s=ET(r,n);return new Rs(r,"signInViaPopup",e,s).executeNotNull()}class Rs extends TT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c4.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4="pendingRedirect",Cc=new Map;class d4 extends TT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cc.get(this.auth._key());if(!e){try{const r=await f4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cc.set(this.auth._key(),e)}return this.bypassAuthState||Cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f4(t,e){const n=g4(e),r=m4(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function p4(t,e){Cc.set(t._key(),e)}function m4(t){return Qn(t._redirectPersistence)}function g4(t){return Nc(h4,t.config.apiKey,t.name)}async function y4(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r=fs(t),s=ET(r,e),o=await new d4(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=10*60*1e3;class v4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_4&&this.cachedEventUids.clear(),this.cachedEventUids.has(W0(e))}saveEventToCache(e){this.cachedEventUids.add(W0(e)),this.lastProcessedEventTime=Date.now()}}function W0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x4(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T4=/^https?/;async function b4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x4(t);for(const n of e)try{if(I4(n))return}catch{}sn(t,"unauthorized-domain")}function I4(t){const e=rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T4.test(n))return!1;if(E4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4=new gl(3e4,6e4);function H0(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S4(t){return new Promise((e,n)=>{var s,i,o;function r(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),n(wn(t,"network-request-failed"))},timeout:k4.get()})}if((i=(s=jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const a=gj("iframefcb");return jn()[a]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},lT(`${mj()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function N4(t){return Ac=Ac||S4(t),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=new gl(5e3,15e3),A4="__/auth/iframe",R4="emulator/auth/iframe",P4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D4(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,R4):`https://${t.config.authDomain}/${A4}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=j4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mo(r).slice(1)}`}async function O4(t){const e=await N4(t),n=jn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:D4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=jn().setTimeout(()=>{i(o)},C4.get());function u(){jn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L4=500,V4=600,F4="_blank",U4="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z4(t,e,n,r=L4,s=V4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...M4,width:r.toString(),height:s.toString(),top:i,left:o},h=vt().toLowerCase();n&&(a=tT(h)?F4:n),ZE(h)&&(e=e||U4,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[b,N])=>`${g}${b}=${N},`,"");if(oj(h)&&a!=="_self")return B4(e||"",a),new q0(null);const m=window.open(e||"",a,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new q0(m)}function B4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4="__/auth/handler",W4="emulator/auth/handler",H4=encodeURIComponent("fac");async function G0(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof Zm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof _l){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),h=u?`#${H4}=${encodeURIComponent(u)}`:"";return`${q4(t)}?${mo(a).slice(1)}${h}`}function q4({config:t}){return t.emulator?Km(t,W4):`https://${t.authDomain}/${$4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="webStorageSupport";class G4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yT,this._completeRedirectFn=y4,this._overrideRedirectResult=p4}async _openPopup(e,n,r,s){var o;lr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await G0(e,n,r,rp(),s);return z4(e,i,eg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await G0(e,n,r,rp(),s);return Yj(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O4(e),r=new v4(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ud,{type:Ud},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ud];i!==void 0&&n(!!i),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||eT()||Ym()}}const K4=G4;var K0="@firebase/auth",Q0="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X4(t){rn(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},h=new dj(r,s,i,u);return Ej(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rn(new $t("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new Q4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(K0,Q0,Y4(t)),yt(K0,Q0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=5*60,Z4=fE("authIdTokenMaxAge")||J4;let Y0=null;const eD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z4)return;const s=n==null?void 0:n.token;Y0!==s&&(Y0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tD(t=ml()){const e=pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xj(t,{popupRedirectResolver:K4,persistence:[i4,Gj,yT]}),r=fE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eD(i.toString());Bj(n,o,()=>o(n.currentUser)),zj(n,a=>o(a))}}const s=hE("auth");return s&&Tj(n,`http://${s}`),n}function nD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fj({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X4("Browser");var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,IT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function x(){}x.prototype=_.prototype,v.F=_.prototype,v.prototype=new x,v.prototype.constructor=v,v.D=function(I,S,C){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return _.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,x){x||(x=0);const I=Array(16);if(typeof _=="string")for(var S=0;S<16;++S)I[S]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(S=0;S<16;++S)I[S]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=v.g[0],x=v.g[1],S=v.g[2];let C=v.g[3],T;T=_+(C^x&(S^C))+I[0]+3614090360&4294967295,_=x+(T<<7&4294967295|T>>>25),T=C+(S^_&(x^S))+I[1]+3905402710&4294967295,C=_+(T<<12&4294967295|T>>>20),T=S+(x^C&(_^x))+I[2]+606105819&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(_^S&(C^_))+I[3]+3250441966&4294967295,x=S+(T<<22&4294967295|T>>>10),T=_+(C^x&(S^C))+I[4]+4118548399&4294967295,_=x+(T<<7&4294967295|T>>>25),T=C+(S^_&(x^S))+I[5]+1200080426&4294967295,C=_+(T<<12&4294967295|T>>>20),T=S+(x^C&(_^x))+I[6]+2821735955&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(_^S&(C^_))+I[7]+4249261313&4294967295,x=S+(T<<22&4294967295|T>>>10),T=_+(C^x&(S^C))+I[8]+1770035416&4294967295,_=x+(T<<7&4294967295|T>>>25),T=C+(S^_&(x^S))+I[9]+2336552879&4294967295,C=_+(T<<12&4294967295|T>>>20),T=S+(x^C&(_^x))+I[10]+4294925233&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(_^S&(C^_))+I[11]+2304563134&4294967295,x=S+(T<<22&4294967295|T>>>10),T=_+(C^x&(S^C))+I[12]+1804603682&4294967295,_=x+(T<<7&4294967295|T>>>25),T=C+(S^_&(x^S))+I[13]+4254626195&4294967295,C=_+(T<<12&4294967295|T>>>20),T=S+(x^C&(_^x))+I[14]+2792965006&4294967295,S=C+(T<<17&4294967295|T>>>15),T=x+(_^S&(C^_))+I[15]+1236535329&4294967295,x=S+(T<<22&4294967295|T>>>10),T=_+(S^C&(x^S))+I[1]+4129170786&4294967295,_=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(_^x))+I[6]+3225465664&4294967295,C=_+(T<<9&4294967295|T>>>23),T=S+(_^x&(C^_))+I[11]+643717713&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^_&(S^C))+I[0]+3921069994&4294967295,x=S+(T<<20&4294967295|T>>>12),T=_+(S^C&(x^S))+I[5]+3593408605&4294967295,_=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(_^x))+I[10]+38016083&4294967295,C=_+(T<<9&4294967295|T>>>23),T=S+(_^x&(C^_))+I[15]+3634488961&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^_&(S^C))+I[4]+3889429448&4294967295,x=S+(T<<20&4294967295|T>>>12),T=_+(S^C&(x^S))+I[9]+568446438&4294967295,_=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(_^x))+I[14]+3275163606&4294967295,C=_+(T<<9&4294967295|T>>>23),T=S+(_^x&(C^_))+I[3]+4107603335&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^_&(S^C))+I[8]+1163531501&4294967295,x=S+(T<<20&4294967295|T>>>12),T=_+(S^C&(x^S))+I[13]+2850285829&4294967295,_=x+(T<<5&4294967295|T>>>27),T=C+(x^S&(_^x))+I[2]+4243563512&4294967295,C=_+(T<<9&4294967295|T>>>23),T=S+(_^x&(C^_))+I[7]+1735328473&4294967295,S=C+(T<<14&4294967295|T>>>18),T=x+(C^_&(S^C))+I[12]+2368359562&4294967295,x=S+(T<<20&4294967295|T>>>12),T=_+(x^S^C)+I[5]+4294588738&4294967295,_=x+(T<<4&4294967295|T>>>28),T=C+(_^x^S)+I[8]+2272392833&4294967295,C=_+(T<<11&4294967295|T>>>21),T=S+(C^_^x)+I[11]+1839030562&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^_)+I[14]+4259657740&4294967295,x=S+(T<<23&4294967295|T>>>9),T=_+(x^S^C)+I[1]+2763975236&4294967295,_=x+(T<<4&4294967295|T>>>28),T=C+(_^x^S)+I[4]+1272893353&4294967295,C=_+(T<<11&4294967295|T>>>21),T=S+(C^_^x)+I[7]+4139469664&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^_)+I[10]+3200236656&4294967295,x=S+(T<<23&4294967295|T>>>9),T=_+(x^S^C)+I[13]+681279174&4294967295,_=x+(T<<4&4294967295|T>>>28),T=C+(_^x^S)+I[0]+3936430074&4294967295,C=_+(T<<11&4294967295|T>>>21),T=S+(C^_^x)+I[3]+3572445317&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^_)+I[6]+76029189&4294967295,x=S+(T<<23&4294967295|T>>>9),T=_+(x^S^C)+I[9]+3654602809&4294967295,_=x+(T<<4&4294967295|T>>>28),T=C+(_^x^S)+I[12]+3873151461&4294967295,C=_+(T<<11&4294967295|T>>>21),T=S+(C^_^x)+I[15]+530742520&4294967295,S=C+(T<<16&4294967295|T>>>16),T=x+(S^C^_)+I[2]+3299628645&4294967295,x=S+(T<<23&4294967295|T>>>9),T=_+(S^(x|~C))+I[0]+4096336452&4294967295,_=x+(T<<6&4294967295|T>>>26),T=C+(x^(_|~S))+I[7]+1126891415&4294967295,C=_+(T<<10&4294967295|T>>>22),T=S+(_^(C|~x))+I[14]+2878612391&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~_))+I[5]+4237533241&4294967295,x=S+(T<<21&4294967295|T>>>11),T=_+(S^(x|~C))+I[12]+1700485571&4294967295,_=x+(T<<6&4294967295|T>>>26),T=C+(x^(_|~S))+I[3]+2399980690&4294967295,C=_+(T<<10&4294967295|T>>>22),T=S+(_^(C|~x))+I[10]+4293915773&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~_))+I[1]+2240044497&4294967295,x=S+(T<<21&4294967295|T>>>11),T=_+(S^(x|~C))+I[8]+1873313359&4294967295,_=x+(T<<6&4294967295|T>>>26),T=C+(x^(_|~S))+I[15]+4264355552&4294967295,C=_+(T<<10&4294967295|T>>>22),T=S+(_^(C|~x))+I[6]+2734768916&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~_))+I[13]+1309151649&4294967295,x=S+(T<<21&4294967295|T>>>11),T=_+(S^(x|~C))+I[4]+4149444226&4294967295,_=x+(T<<6&4294967295|T>>>26),T=C+(x^(_|~S))+I[11]+3174756917&4294967295,C=_+(T<<10&4294967295|T>>>22),T=S+(_^(C|~x))+I[2]+718787259&4294967295,S=C+(T<<15&4294967295|T>>>17),T=x+(C^(S|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const x=_-this.blockSize,I=this.C;let S=this.h,C=0;for(;C<_;){if(S==0)for(;C<=x;)s(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<_;)if(I[S++]=v.charCodeAt(C++),S==this.blockSize){s(this,I),S=0;break}}else for(;C<_;)if(I[S++]=v[C++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var x=v.length-8;x<v.length;++x)v[x]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,x=0;x<4;++x)for(let I=0;I<32;I+=8)v[_++]=this.g[x]>>>I&255;return v};function i(v,_){var x=a;return Object.prototype.hasOwnProperty.call(x,v)?x[v]:x[v]=_(v)}function o(v,_){this.h=_;const x=[];let I=!0;for(let S=v.length-1;S>=0;S--){const C=v[S]|0;I&&C==_||(x[S]=C,I=!1)}this.g=x}var a={};function u(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return P(h(-v));const _=[];let x=1;for(let I=0;v>=x;I++)_[I]=v/x|0,x*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return P(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=h(Math.pow(_,8));let I=m;for(let C=0;C<v.length;C+=8){var S=Math.min(8,v.length-C);const T=parseInt(v.substring(C,C+S),_);S<8?(S=h(Math.pow(_,S)),I=I.j(S).add(h(T))):(I=I.j(x),I=I.add(h(T)))}return I}var m=u(0),g=u(1),b=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();let v=0,_=1;for(let x=0;x<this.g.length;x++){const I=this.i(x);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(R(this))return"-"+P(this).toString(v);const _=h(Math.pow(v,6));var x=this;let I="";for(;;){const S=D(x,_).g;x=E(x,S.j(_));let C=((x.g.length>0?x.g[0]:x.h)>>>0).toString(v);if(x=S,N(x))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function R(v){return v.h==-1}t.l=function(v){return v=E(this,v),R(v)?-1:N(v)?0:1};function P(v){const _=v.g.length,x=[];for(let I=0;I<_;I++)x[I]=~v.g[I];return new o(x,~v.h).add(g)}t.abs=function(){return R(this)?P(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),x=[];let I=0;for(let S=0;S<=_;S++){let C=I+(this.i(S)&65535)+(v.i(S)&65535),T=(C>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);I=T>>>16,C&=65535,T&=65535,x[S]=T<<16|C}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(v,_){return v.add(P(_))}t.j=function(v){if(N(this)||N(v))return m;if(R(this))return R(v)?P(this).j(P(v)):P(P(this).j(v));if(R(v))return P(this.j(P(v)));if(this.l(b)<0&&v.l(b)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,x=[];for(var I=0;I<2*_;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(let S=0;S<v.g.length;S++){const C=this.i(I)>>>16,T=this.i(I)&65535,et=v.i(S)>>>16,zn=v.i(S)&65535;x[2*I+2*S]+=T*zn,w(x,2*I+2*S),x[2*I+2*S+1]+=C*zn,w(x,2*I+2*S+1),x[2*I+2*S+1]+=T*et,w(x,2*I+2*S+1),x[2*I+2*S+2]+=C*et,w(x,2*I+2*S+2)}for(v=0;v<_;v++)x[v]=x[2*v+1]<<16|x[2*v];for(v=_;v<2*_;v++)x[v]=0;return new o(x,0)};function w(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function k(v,_){this.g=v,this.h=_}function D(v,_){if(N(_))throw Error("division by zero");if(N(v))return new k(m,m);if(R(v))return _=D(P(v),_),new k(P(_.g),P(_.h));if(R(_))return _=D(v,P(_)),new k(P(_.g),_.h);if(v.g.length>30){if(R(v)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var x=g,I=_;I.l(v)<=0;)x=F(x),I=F(I);var S=M(x,1),C=M(I,1);for(I=M(I,2),x=M(x,2);!N(I);){var T=C.add(I);T.l(v)<=0&&(S=S.add(x),C=T),I=M(I,1),x=M(x,1)}return _=E(v,S.j(_)),new k(S,_)}for(S=m;v.l(_)>=0;){for(x=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(x),T=C.j(_);R(T)||T.l(v)>0;)x-=I,C=h(x),T=C.j(_);N(C)&&(C=g),S=S.add(C),v=E(v,T)}return new k(S,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)&v.i(I);return new o(x,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)|v.i(I);return new o(x,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)^v.i(I);return new o(x,this.h^v.h)};function F(v){const _=v.g.length+1,x=[];for(let I=0;I<_;I++)x[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(x,v.h)}function M(v,_){const x=_>>5;_%=32;const I=v.g.length-x,S=[];for(let C=0;C<I;C++)S[C]=_>0?v.i(C+x)>>>_|v.i(C+x+1)<<32-_:v.i(C+x);return new o(S,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,IT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,qr=o}).apply(typeof X0<"u"?X0:typeof self<"u"?self:typeof window<"u"?window:{});var ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kT,ca,ST,Rc,ap,NT,CT,AT;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ac=="object"&&ac];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var A=l[y];if(!(A in p))break e;p=p[A]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(d){var p=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.push([y,d[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function u(l,d,p){return l.call.apply(l.bind,arguments)}function h(l,d,p){return h=u,h.apply(null,arguments)}function f(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function m(l,d){function p(){}p.prototype=d.prototype,l.Z=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Ob=function(y,A,j){for(var U=Array(arguments.length-2),te=2;te<arguments.length;te++)U[te-2]=arguments[te];return d.prototype[A].apply(y,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function b(l){const d=l.length;if(d>0){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function N(l,d){for(let y=1;y<arguments.length;y++){const A=arguments[y];var p=typeof A;if(p=p!="object"?p:A?Array.isArray(A)?"array":p:"null",p=="array"||p=="object"&&typeof A.length=="number"){p=l.length||0;const j=A.length||0;l.length=p+j;for(let U=0;U<j;U++)l[p+U]=A[U]}else l.push(A)}}class R{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function P(l){o.setTimeout(()=>{throw l},0)}function E(){var l=v;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class w{constructor(){this.h=this.g=null}add(d,p){const y=k.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var k=new R(()=>new D,l=>l.reset());class D{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,M=!1,v=new w,_=()=>{const l=Promise.resolve(void 0);F=()=>{l.then(x)}};function x(){for(var l;l=E();){try{l.h.call(l.g)}catch(p){P(p)}var d=k;d.j(l),d.h<100&&(d.h++,l.next=d.g,d.g=l)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return l}();function T(l){return/^[\s\xa0]*$/.test(l)}function et(l,d){S.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,d)}m(et,S),et.prototype.init=function(l,d){const p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget,d||(p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&et.Z.h.call(this)},et.prototype.h=function(){et.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var zn="closure_listenable_"+(Math.random()*1e6|0),bo=0;function Io(l,d,p,y,A){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=A,this.key=++bo,this.da=this.fa=!1}function B(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function X(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function ee(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function be(l){const d={};for(const p in l)d[p]=l[p];return d}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ps(l,d){let p,y;for(let A=1;A<arguments.length;A++){y=arguments[A];for(p in y)l[p]=y[p];for(let j=0;j<Pe.length;j++)p=Pe[j],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function Gt(l){this.src=l,this.g={},this.h=0}Gt.prototype.add=function(l,d,p,y,A){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const U=ln(l,d,y,A);return U>-1?(d=l[U],p||(d.fa=!1)):(d=new Io(d,this.src,j,!!y,A),d.fa=p,l.push(d)),d};function ms(l,d){const p=d.type;if(p in l.g){var y=l.g[p],A=Array.prototype.indexOf.call(y,d,void 0),j;(j=A>=0)&&Array.prototype.splice.call(y,A,1),j&&(B(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function ln(l,d,p,y){for(let A=0;A<l.length;++A){const j=l[A];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==y)return A}return-1}var gr="closure_lm_"+(Math.random()*1e6|0),Dh={};function ey(l,d,p,y,A){if(Array.isArray(d)){for(let j=0;j<d.length;j++)ey(l,d[j],p,y,A);return null}return p=ry(p),l&&l[zn]?l.J(d,p,a(y)?!!y.capture:!1,A):pk(l,d,p,!1,y,A)}function pk(l,d,p,y,A,j){if(!d)throw Error("Invalid event type");const U=a(A)?!!A.capture:!!A;let te=Mh(l);if(te||(l[gr]=te=new Gt(l)),p=te.add(d,p,y,U,j),p.proxy)return p;if(y=mk(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)C||(A=U),A===void 0&&(A=!1),l.addEventListener(d.toString(),y,A);else if(l.attachEvent)l.attachEvent(ny(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function mk(){function l(p){return d.call(l.src,l.listener,p)}const d=gk;return l}function ty(l,d,p,y,A){if(Array.isArray(d))for(var j=0;j<d.length;j++)ty(l,d[j],p,y,A);else y=a(y)?!!y.capture:!!y,p=ry(p),l&&l[zn]?(l=l.i,j=String(d).toString(),j in l.g&&(d=l.g[j],p=ln(d,p,y,A),p>-1&&(B(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete l.g[j],l.h--)))):l&&(l=Mh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=ln(d,p,y,A)),(p=l>-1?d[l]:null)&&Oh(p))}function Oh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[zn])ms(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(ny(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Mh(d))?(ms(p,l),p.h==0&&(p.src=null,d[gr]=null)):B(l)}}}function ny(l){return l in Dh?Dh[l]:Dh[l]="on"+l}function gk(l,d){if(l.da)l=!0;else{d=new et(d,this);const p=l.listener,y=l.ha||l.src;l.fa&&Oh(l),l=p.call(y,d)}return l}function Mh(l){return l=l[gr],l instanceof Gt?l:null}var Lh="__closure_events_fn_"+(Math.random()*1e9>>>0);function ry(l){return typeof l=="function"?l:(l[Lh]||(l[Lh]=function(d){return l.handleEvent(d)}),l[Lh])}function at(){I.call(this),this.i=new Gt(this),this.M=this,this.G=null}m(at,I),at.prototype[zn]=!0,at.prototype.removeEventListener=function(l,d,p,y){ty(this,l,d,p,y)};function wt(l,d){var p,y=l.G;if(y)for(p=[];y;y=y.G)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new S(d,l);else if(d instanceof S)d.target=d.target||l;else{var A=d;d=new S(y,l),ps(d,A)}A=!0;let j,U;if(p)for(U=p.length-1;U>=0;U--)j=d.g=p[U],A=Rl(j,y,!0,d)&&A;if(j=d.g=l,A=Rl(j,y,!0,d)&&A,A=Rl(j,y,!1,d)&&A,p)for(U=0;U<p.length;U++)j=d.g=p[U],A=Rl(j,y,!1,d)&&A}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const d in l.g){const p=l.g[d];for(let y=0;y<p.length;y++)B(p[y]);delete l.g[d],l.h--}}this.G=null},at.prototype.J=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},at.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function Rl(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();let A=!0;for(let j=0;j<d.length;++j){const U=d[j];if(U&&!U.da&&U.capture==p){const te=U.listener,ze=U.ha||U.src;U.fa&&ms(l.i,U),A=te.call(ze,y)!==!1&&A}}return A&&!y.defaultPrevented}function yk(l,d){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=h(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(l,d||0)}function sy(l){l.g=yk(()=>{l.g=null,l.i&&(l.i=!1,sy(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class _k extends I{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:sy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){I.call(this),this.h=l,this.g={}}m(ko,I);var iy=[];function oy(l){X(l.g,function(d,p){this.g.hasOwnProperty(p)&&Oh(d)},l),l.g={}}ko.prototype.N=function(){ko.Z.N.call(this),oy(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vh=o.JSON.stringify,vk=o.JSON.parse,wk=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function ay(){}function ly(){}var So={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fh(){S.call(this,"d")}m(Fh,S);function Uh(){S.call(this,"c")}m(Uh,S);var gs={},cy=null;function Pl(){return cy=cy||new at}gs.Ia="serverreachability";function uy(l){S.call(this,gs.Ia,l)}m(uy,S);function No(l){const d=Pl();wt(d,new uy(d))}gs.STAT_EVENT="statevent";function hy(l,d){S.call(this,gs.STAT_EVENT,l),this.stat=d}m(hy,S);function xt(l){const d=Pl();wt(d,new hy(d,l))}gs.Ja="timingevent";function dy(l,d){S.call(this,gs.Ja,l),this.size=d}m(dy,S);function Co(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},d)}function Ao(){this.g=!0}Ao.prototype.ua=function(){this.g=!1};function xk(l,d,p,y,A,j){l.info(function(){if(l.g)if(j){var U="",te=j.split("&");for(let me=0;me<te.length;me++){var ze=te[me].split("=");if(ze.length>1){const qe=ze[0];ze=ze[1];const In=qe.split("_");U=In.length>=2&&In[1]=="type"?U+(qe+"="+ze+"&"):U+(qe+"=redacted&")}}}else U=null;else U=j;return"XMLHTTP REQ ("+y+") [attempt "+A+"]: "+d+`
`+p+`
`+U})}function Ek(l,d,p,y,A,j,U){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+A+"]: "+d+`
`+p+`
`+j+" "+U})}function li(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+bk(l,p)+(y?" "+y:"")})}function Tk(l,d){l.info(function(){return"TIMEOUT: "+d})}Ao.prototype.info=function(){};function bk(l,d){if(!l.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var p=j[l];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var A=y[0];if(A!="noop"&&A!="stop"&&A!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Vh(j)}catch{return d}}var jl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},py;function zh(){}m(zh,ay),zh.prototype.g=function(){return new XMLHttpRequest},py=new zh;function Ro(l){return encodeURIComponent(String(l))}function Ik(l){var d=1;l=l.split(":");const p=[];for(;d>0&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function yr(l,d,p,y){this.j=l,this.i=d,this.l=p,this.S=y||1,this.V=new ko(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new my}function my(){this.i=null,this.g="",this.h=!1}var gy={},Bh={};function $h(l,d,p){l.M=1,l.A=Ol(bn(d)),l.u=p,l.R=!0,yy(l,null)}function yy(l,d){l.F=Date.now(),Dl(l),l.B=bn(l.A);var p=l.B,y=l.S;Array.isArray(y)||(y=[String(y)]),Ay(p.i,"t",y),l.C=0,p=l.j.L,l.h=new my,l.g=Ky(l.j,p?d:null,!l.u),l.P>0&&(l.O=new _k(h(l.Y,l,l.g),l.P)),d=l.V,p=l.g,y=l.ba;var A="readystatechange";Array.isArray(A)||(A&&(iy[0]=A.toString()),A=iy);for(let j=0;j<A.length;j++){const U=ey(p,A[j],y||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=l.J?be(l.J):{},l.u?(l.v||(l.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,d)):(l.v="GET",l.g.ea(l.B,l.v,null,d)),No(),xk(l.i,l.v,l.B,l.l,l.S,l.u)}yr.prototype.ba=function(l){l=l.target;const d=this.O;d&&wr(l)==3?d.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const te=wr(this.g),ze=this.g.ya(),me=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Ly(this.g)))){this.K||te!=4||ze==7||(ze==8||me<=0?No(3):No(2)),Wh(this);var d=this.g.ca();this.X=d;var p=kk(this);if(this.o=d==200,Ek(this.i,this.v,this.B,this.l,this.S,te,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,A=this.g;if((y=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var j=y;break t}}j=null}if(l=j)li(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hh(this,l);else{this.o=!1,this.m=3,xt(12),ys(this),Po(this);break e}}if(this.R){l=!0;let qe;for(;!this.K&&this.C<p.length;)if(qe=Sk(this,p),qe==Bh){te==4&&(this.m=4,xt(14),l=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==gy){this.m=4,xt(15),li(this.i,this.l,p,"[Invalid Chunk]"),l=!1;break}else li(this.i,this.l,qe,null),Hh(this,qe);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,xt(16),l=!1),this.o=this.o&&l,!l)li(this.i,this.l,p,"[Invalid Chunked Response]"),ys(this),Po(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Zh(U),U.P=!0,xt(11))}}else li(this.i,this.l,p,null),Hh(this,p);te==4&&ys(this),this.o&&!this.K&&(te==4?Wy(this.j,this):(this.o=!1,Dl(this)))}else zk(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,xt(12)):(this.m=0,xt(13)),ys(this),Po(this)}}}catch{}finally{}};function kk(l){if(!_y(l))return l.g.la();const d=Ly(l.g);if(d==="")return"";let p="";const y=d.length,A=wr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ys(l),Po(l),"";l.h.i=new o.TextDecoder}for(let j=0;j<y;j++)l.h.h=!0,p+=l.h.i.decode(d[j],{stream:!(A&&j==y-1)});return d.length=0,l.h.g+=p,l.C=0,l.h.g}function _y(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Sk(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Bh:(p=Number(d.substring(p,y)),isNaN(p)?gy:(y+=1,y+p>d.length?Bh:(d=d.slice(y,y+p),l.C=y+p,d)))}yr.prototype.cancel=function(){this.K=!0,ys(this)};function Dl(l){l.T=Date.now()+l.H,vy(l,l.H)}function vy(l,d){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Co(h(l.aa,l),d)}function Wh(l){l.D&&(o.clearTimeout(l.D),l.D=null)}yr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Tk(this.i,this.B),this.M!=2&&(No(),xt(17)),ys(this),this.m=2,Po(this)):vy(this,this.T-l)};function Po(l){l.j.I==0||l.K||Wy(l.j,l)}function ys(l){Wh(l);var d=l.O;d&&typeof d.dispose=="function"&&d.dispose(),l.O=null,oy(l.V),l.g&&(d=l.g,l.g=null,d.abort(),d.dispose())}function Hh(l,d){try{var p=l.j;if(p.I!=0&&(p.g==l||qh(p.h,l))){if(!l.L&&qh(p.h,l)&&p.I==3){try{var y=p.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var A=y;if(A[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<l.F)Ul(p),Vl(p);else break e;Jh(p),xt(18)}}else p.xa=A[1],0<p.xa-p.K&&A[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Co(h(p.Va,p),6e3));Ey(p.h)<=1&&p.ta&&(p.ta=void 0)}else vs(p,11)}else if((l.L||p.g==l)&&Ul(p),!T(d))for(A=p.Ba.g.parse(d),d=0;d<A.length;d++){let me=A[d];const qe=me[0];if(!(qe<=p.K))if(p.K=qe,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const In=me[3];In!=null&&(p.ka=In,p.j.info("VER="+p.ka));const ws=me[4];ws!=null&&(p.za=ws,p.j.info("SVER="+p.za));const xr=me[5];xr!=null&&typeof xr=="number"&&xr>0&&(y=1.5*xr,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Er=l.g;if(Er){const Bl=Er.g?Er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bl){var j=y.h;j.g||Bl.indexOf("spdy")==-1&&Bl.indexOf("quic")==-1&&Bl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Gh(j,j.h),j.h=null))}if(y.G){const ed=Er.g?Er.g.getResponseHeader("X-HTTP-Session-Id"):null;ed&&(y.wa=ed,ye(y.J,y.G,ed))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-l.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var U=l;if(y.na=Gy(y,y.L?y.ba:null,y.W),U.L){Ty(y.h,U);var te=U,ze=y.O;ze&&(te.H=ze),te.D&&(Wh(te),Dl(te)),y.g=U}else By(y);p.i.length>0&&Fl(p)}else me[0]!="stop"&&me[0]!="close"||vs(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?vs(p,7):Xh(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}No(4)}catch{}}var Nk=class{constructor(l,d){this.g=l,this.map=d}};function wy(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ey(l){return l.h?1:l.g?l.g.size:0}function qh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Gh(l,d){l.g?l.g.add(d):l.h=d}function Ty(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}wy.prototype.cancel=function(){if(this.i=by(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function by(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.G);return d}return b(l.i)}var Iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ck(l,d){if(l){l=l.split("&");for(let p=0;p<l.length;p++){const y=l[p].indexOf("=");let A,j=null;y>=0?(A=l[p].substring(0,y),j=l[p].substring(y+1)):A=l[p],d(A,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function _r(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;l instanceof _r?(this.l=l.l,jo(this,l.j),this.o=l.o,this.g=l.g,Do(this,l.u),this.h=l.h,Kh(this,Ry(l.i)),this.m=l.m):l&&(d=String(l).match(Iy))?(this.l=!1,jo(this,d[1]||"",!0),this.o=Oo(d[2]||""),this.g=Oo(d[3]||"",!0),Do(this,d[4]),this.h=Oo(d[5]||"",!0),Kh(this,d[6]||"",!0),this.m=Oo(d[7]||"")):(this.l=!1,this.i=new Lo(null,this.l))}_r.prototype.toString=function(){const l=[];var d=this.j;d&&l.push(Mo(d,ky,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Mo(d,ky,!0),"@"),l.push(Ro(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&l.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Mo(p,p.charAt(0)=="/"?Pk:Rk,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Mo(p,Dk)),l.join("")},_r.prototype.resolve=function(l){const d=bn(this);let p=!!l.j;p?jo(d,l.j):p=!!l.o,p?d.o=l.o:p=!!l.g,p?d.g=l.g:p=l.u!=null;var y=l.h;if(p)Do(d,l.u);else if(p=!!l.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var A=d.h.lastIndexOf("/");A!=-1&&(y=d.h.slice(0,A+1)+y)}if(A=y,A==".."||A==".")y="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){y=A.lastIndexOf("/",0)==0,A=A.split("/");const j=[];for(let U=0;U<A.length;){const te=A[U++];te=="."?y&&U==A.length&&j.push(""):te==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),y&&U==A.length&&j.push("")):(j.push(te),y=!0)}y=j.join("/")}else y=A}return p?d.h=y:p=l.i.toString()!=="",p?Kh(d,Ry(l.i)):p=!!l.m,p&&(d.m=l.m),d};function bn(l){return new _r(l)}function jo(l,d,p){l.j=p?Oo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Do(l,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);l.u=d}else l.u=null}function Kh(l,d,p){d instanceof Lo?(l.i=d,Ok(l.i,l.l)):(p||(d=Mo(d,jk)),l.i=new Lo(d,l.l))}function ye(l,d,p){l.i.set(d,p)}function Ol(l){return ye(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Oo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,Ak),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ak(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ky=/[#\/\?@]/g,Rk=/[#\?:]/g,Pk=/[#\?]/g,jk=/[#\?@]/g,Dk=/#/g;function Lo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _s(l){l.g||(l.g=new Map,l.h=0,l.i&&Ck(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Lo.prototype,t.add=function(l,d){_s(this),this.i=null,l=ci(this,l);let p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Sy(l,d){_s(l),d=ci(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ny(l,d){return _s(l),d=ci(l,d),l.g.has(d)}t.forEach=function(l,d){_s(this),this.g.forEach(function(p,y){p.forEach(function(A){l.call(d,A,y,this)},this)},this)};function Cy(l,d){_s(l);let p=[];if(typeof d=="string")Ny(l,d)&&(p=p.concat(l.g.get(ci(l,d))));else for(l=Array.from(l.g.values()),d=0;d<l.length;d++)p=p.concat(l[d]);return p}t.set=function(l,d){return _s(this),this.i=null,l=ci(this,l),Ny(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=Cy(this,l),l.length>0?String(l[0]):d):d};function Ay(l,d,p){Sy(l,d),p.length>0&&(l.i=null,l.g.set(ci(l,d),b(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var p=d[y];const A=Ro(p);p=Cy(this,p);for(let j=0;j<p.length;j++){let U=A;p[j]!==""&&(U+="="+Ro(p[j])),l.push(U)}}return this.i=l.join("&")};function Ry(l){const d=new Lo;return d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),d}function ci(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Ok(l,d){d&&!l.j&&(_s(l),l.i=null,l.g.forEach(function(p,y){const A=y.toLowerCase();y!=A&&(Sy(this,y),Ay(this,A,p))},l)),l.j=d}function Mk(l,d){const p=new Ao;if(o.Image){const y=new Image;y.onload=f(vr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=f(vr,p,"TestLoadImage: error",!1,d,y),y.onabort=f(vr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=f(vr,p,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Lk(l,d){const p=new Ao,y=new AbortController,A=setTimeout(()=>{y.abort(),vr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(j=>{clearTimeout(A),j.ok?vr(p,"TestPingServer: ok",!0,d):vr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(A),vr(p,"TestPingServer: error",!1,d)})}function vr(l,d,p,y,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),y(p)}catch{}}function Vk(){this.g=new wk}function Qh(l){this.i=l.Sb||null,this.h=l.ab||!1}m(Qh,ay),Qh.prototype.g=function(){return new Ml(this.i,this.h)};function Ml(l,d){at.call(this),this.H=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ml,at),t=Ml.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=d,this.readyState=1,Fo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(d.body=l),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Py(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Py(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Vo(this):Fo(this),this.readyState==3&&Py(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Vo(this))},t.Na=function(l){this.g&&(this.response=l,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Fo(l)}t.setRequestHeader=function(l,d){this.A.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Fo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jy(l){let d="";return X(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Yh(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=jy(p),typeof l=="string"?p!=null&&Ro(p):ye(l,d,p))}function Ae(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ae,at);var Fk=/^https?$/i,Uk=["POST","PUT"];t=Ae.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():py.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){Dy(this,j);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var A in y)p.set(A,y[A]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())p.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),A=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(Uk,d,void 0)>=0)||y||A||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,U]of p)this.g.setRequestHeader(j,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Dy(this,j)}};function Dy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.o=5,Oy(l),Ll(l)}function Oy(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,wt(this,"complete"),wt(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?My(this):this.Xa())},t.Xa=function(){My(this)};function My(l){if(l.h&&typeof i<"u"){if(l.v&&wr(l)==4)setTimeout(l.Ca.bind(l),0);else if(wt(l,"readystatechange"),wr(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=j===0){let U=String(l.D).match(Iy)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!Fk.test(U?U.toLowerCase():"")}p=y}if(p)wt(l,"complete"),wt(l,"success");else{l.o=6;try{var A=wr(l)>2?l.g.statusText:""}catch{A=""}l.l=A+" ["+l.ca()+"]",Oy(l)}}finally{Ll(l)}}}}function Ll(l,d){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const p=l.g;l.g=null,d||wt(l,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function wr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return wr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),vk(d)}};function Ly(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function zk(l){const d={};l=(l.g&&wr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(T(l[y]))continue;var p=Ik(l[y]);const A=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[A]||[];d[A]=j,j.push(p)}ee(d,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Uo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Vy(l){this.za=0,this.i=[],this.j=new Ao,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Uo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Uo("baseRetryDelayMs",5e3,l),this.Za=Uo("retryDelaySeedMs",1e4,l),this.Ta=Uo("forwardChannelMaxRetries",2,l),this.va=Uo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new wy(l&&l.concurrentRequestLimit),this.Ba=new Vk,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vy.prototype,t.ka=8,t.I=1,t.connect=function(l,d,p,y){xt(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Gy(this,null,this.W),Fl(this)};function Xh(l){if(Fy(l),l.I==3){var d=l.V++,p=bn(l.J);if(ye(p,"SID",l.M),ye(p,"RID",d),ye(p,"TYPE","terminate"),zo(l,p),d=new yr(l,l.j,d),d.M=2,d.A=Ol(bn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Ky(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Dl(d)}qy(l)}function Vl(l){l.g&&(Zh(l),l.g.cancel(),l.g=null)}function Fy(l){Vl(l),l.v&&(o.clearTimeout(l.v),l.v=null),Ul(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Fl(l){if(!xy(l.h)&&!l.m){l.m=!0;var d=l.Ea;F||_(),M||(F(),M=!0),v.add(d,l),l.D=0}}function Bk(l,d){return Ey(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=d.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Co(h(l.Ea,l,d),Hy(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const A=new yr(this,this.j,l);let j=this.o;if(this.U&&(j?(j=be(j),ps(j,this.U)):j=this.U),this.u!==null||this.R||(A.J=j,j=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=zy(this,A,d),p=bn(this.J),ye(p,"RID",l),ye(p,"CVER",22),this.G&&ye(p,"X-HTTP-Session-Id",this.G),zo(this,p),j&&(this.R?d="headers="+Ro(jy(j))+"&"+d:this.u&&Yh(p,this.u,j)),Gh(this.h,A),this.Ra&&ye(p,"TYPE","init"),this.S?(ye(p,"$req",d),ye(p,"SID","null"),A.U=!0,$h(A,p,null)):$h(A,p,d),this.I=2}}else this.I==3&&(l?Uy(this,l):this.i.length==0||xy(this.h)||Uy(this))};function Uy(l,d){var p;d?p=d.l:p=l.V++;const y=bn(l.J);ye(y,"SID",l.M),ye(y,"RID",p),ye(y,"AID",l.K),zo(l,y),l.u&&l.o&&Yh(y,l.u,l.o),p=new yr(l,l.j,p,l.D+1),l.u===null&&(p.J=l.o),d&&(l.i=d.G.concat(l.i)),d=zy(l,p,1e3),p.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Gh(l.h,p),$h(p,y,d)}function zo(l,d){l.H&&X(l.H,function(p,y){ye(d,y,p)}),l.l&&X({},function(p,y){ye(d,y,p)})}function zy(l,d,p){p=Math.min(l.i.length,p);const y=l.l?h(l.l.Ka,l.l,l):null;e:{var A=l.i;let te=-1;for(;;){const ze=["count="+p];te==-1?p>0?(te=A[0].g,ze.push("ofs="+te)):te=0:ze.push("ofs="+te);let me=!0;for(let qe=0;qe<p;qe++){var j=A[qe].g;const In=A[qe].map;if(j-=te,j<0)te=Math.max(0,A[qe].g-100),me=!1;else try{j="req"+j+"_"||"";try{var U=In instanceof Map?In:Object.entries(In);for(const[ws,xr]of U){let Er=xr;a(xr)&&(Er=Vh(xr)),ze.push(j+ws+"="+encodeURIComponent(Er))}}catch(ws){throw ze.push(j+"type="+encodeURIComponent("_badmap")),ws}}catch{y&&y(In)}}if(me){U=ze.join("&");break e}}U=void 0}return l=l.i.splice(0,p),d.G=l,U}function By(l){if(!l.g&&!l.v){l.Y=1;var d=l.Da;F||_(),M||(F(),M=!0),v.add(d,l),l.A=0}}function Jh(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Co(h(l.Da,l),Hy(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,$y(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Co(h(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xt(10),Vl(this),$y(this))};function Zh(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function $y(l){l.g=new yr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var d=bn(l.na);ye(d,"RID","rpc"),ye(d,"SID",l.M),ye(d,"AID",l.K),ye(d,"CI",l.F?"0":"1"),!l.F&&l.ia&&ye(d,"TO",l.ia),ye(d,"TYPE","xmlhttp"),zo(l,d),l.u&&l.o&&Yh(d,l.u,l.o),l.O&&(l.g.H=l.O);var p=l.g;l=l.ba,p.M=1,p.A=Ol(bn(d)),p.u=null,p.R=!0,yy(p,l)}t.Va=function(){this.C!=null&&(this.C=null,Vl(this),Jh(this),xt(19))};function Ul(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Wy(l,d){var p=null;if(l.g==d){Ul(l),Zh(l),l.g=null;var y=2}else if(qh(l.h,d))p=d.G,Ty(l.h,d),y=1;else return;if(l.I!=0){if(d.o)if(y==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var A=l.D;y=Pl(),wt(y,new dy(y,p)),Fl(l)}else By(l);else if(A=d.m,A==3||A==0&&d.X>0||!(y==1&&Bk(l,d)||y==2&&Jh(l)))switch(p&&p.length>0&&(d=l.h,d.i=d.i.concat(p)),A){case 1:vs(l,5);break;case 4:vs(l,10);break;case 3:vs(l,6);break;default:vs(l,2)}}}function Hy(l,d){let p=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(p*=2),p*d}function vs(l,d){if(l.j.info("Error code "+d),d==2){var p=h(l.bb,l),y=l.Ua;const A=!y;y=new _r(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||jo(y,"https"),Ol(y),A?Mk(y.toString(),p):Lk(y.toString(),p)}else xt(2);l.I=0,l.l&&l.l.pa(d),qy(l),Fy(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function qy(l){if(l.I=0,l.ja=[],l.l){const d=by(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ja,d),N(l.ja,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.oa()}}function Gy(l,d,p){var y=p instanceof _r?bn(p):new _r(p);if(y.g!="")d&&(y.g=d+"."+y.g),Do(y,y.u);else{var A=o.location;y=A.protocol,d=d?d+"."+A.hostname:A.hostname,A=+A.port;const j=new _r(null);y&&jo(j,y),d&&(j.g=d),A&&Do(j,A),p&&(j.h=p),y=j}return p=l.G,d=l.wa,p&&d&&ye(y,p,d),ye(y,"VER",l.ka),zo(l,y),y}function Ky(l,d,p){if(d&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Aa&&!l.ma?new Ae(new Qh({ab:p})):new Ae(l.ma),d.Fa(l.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(l,d){return new Ot(l,d)};function Ot(l,d){at.call(this),this.g=new Vy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(l?l["X-WebChannel-Client-Profile"]=d.sa:l={"X-WebChannel-Client-Profile":d.sa}),this.g.U=l,(l=d&&d.Qb)&&!T(l)&&(this.g.u=l),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ui(this)}m(Ot,at),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Xh(this.g)},Ot.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.v&&(p={},p.__data__=Vh(l),l=p);d.i.push(new Nk(d.Ya++,l)),d.I==3&&Fl(d)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Xh(this.g),delete this.g,Ot.Z.N.call(this)};function Yy(l){Fh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}m(Yy,Fh);function Xy(){Uh.call(this),this.status=1}m(Xy,Uh);function ui(l){this.g=l}m(ui,Qy),ui.prototype.ra=function(){wt(this.g,"a")},ui.prototype.qa=function(l){wt(this.g,new Yy(l))},ui.prototype.pa=function(l){wt(this.g,new Xy)},ui.prototype.oa=function(){wt(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,AT=function(){return new zl},CT=function(){return Pl()},NT=gs,ap={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jl.NO_ERROR=0,jl.TIMEOUT=8,jl.HTTP_ERROR=6,Rc=jl,fy.COMPLETE="complete",ST=fy,ly.EventType=So,So.OPEN="a",So.CLOSE="b",So.ERROR="c",So.MESSAGE="d",at.prototype.listen=at.prototype.J,ca=ly,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa,kT=Ae}).apply(typeof ac<"u"?ac:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="12.12.0";function rD(t){yo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new pl("@firebase/firestore");function mi(){return Gs.logLevel}function $(t,...e){if(Gs.logLevel<=ne.DEBUG){const n=e.map(ng);Gs.debug(`Firestore (${yo}): ${t}`,...n)}}function cr(t,...e){if(Gs.logLevel<=ne.ERROR){const n=e.map(ng);Gs.error(`Firestore (${yo}): ${t}`,...n)}}function Ks(t,...e){if(Gs.logLevel<=ne.WARN){const n=e.map(ng);Gs.warn(`Firestore (${yo}): ${t}`,...n)}}function ng(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,RT(t,r,n)}function RT(t,e,n){let r=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw cr(r),new Error(r)}function de(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||RT(e,s,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class iD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oD{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new PT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class aD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new J0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new J0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function lp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return zd(s)===zd(i)?se(s,i):zd(s)?1:-1}return se(t.length,e.length)}const hD=55296,dD=57343;function zd(t){const e=t.charCodeAt(0);return e>=hD&&e<=dD}function ro(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__name__";class Nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return se(e.length,n.length)}static compareSegments(e,n){const r=Nn.isNumericId(e),s=Nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Nn.extractNumericId(e).compare(Nn.extractNumericId(n)):lp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Se extends Nn{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const fD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Nn{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return fD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Z0}static keyField(){return new rt([Z0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mD(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ev(t){if(!G.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Za(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sg(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function wl(t,e){if(!jT(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=-62135596800,nv=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*nv);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tv)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nv}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wl(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Le("string",xe._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new xe(0,0))}static max(){return new J(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=-1;function gD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Zr(s,G.empty(),e)}function yD(t){return new Zr(t.readTime,t.key,el)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(J.min(),G.empty(),el)}static max(){return new Zr(J.max(),G.empty(),el)}}function _D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==vD)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function xD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=-1;function _h(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function ED(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="";function TD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rv(e)),e=bD(t.get(n),e);return rv(e)}function bD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case DT:n+="";break;default:n+=i}}return n}function rv(t){return t+DT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue=class cp{constructor(e,n){this.comparator=e,this.root=n||Kr.EMPTY}insert(e,n){return new cp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kr.BLACK,null,null))}remove(e){return new cp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lc(this.root,e,this.comparator,!0)}},lc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Kr=class Bn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Bn.RED,this.left=s??Bn.EMPTY,this.right=i??Bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Bn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}};Kr.EMPTY=null,Kr.RED=!0,Kr.BLACK=!1;Kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Kr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new mn([])}unionWith(e){let n=new He(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new MT("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const ID=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=ID.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="server_timestamp",VT="__type__",FT="__previous_value__",UT="__local_write_time__";function og(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[VT])==null?void 0:r.stringValue)===LT}function vh(t){const e=t.mapValue.fields[FT];return og(e)?vh(e):e}function tl(t){const e=es(t.mapValue.fields[UT].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,r,s,i,o,a,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const Tu="(default)";class nl{constructor(e,n){this.projectId=e,this.database=n||Tu}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database===Tu}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}function SD(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="__type__",ND="__max__",cc={mapValue:{}},BT="__vector__",bu="value";function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?og(t)?4:AD(t)?9007199254740991:CD(t)?10:11:Y(28295,{value:t})}function Ln(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tl(t).isEqual(tl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=es(s.timestampValue),a=es(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ts(s.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),a=je(i.doubleValue);return o===a?Eu(o)===Eu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(sv(o)!==sv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ln(o[u],a[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function rl(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=je(i.integerValue||i.doubleValue),u=je(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return ov(t.timestampValue,e.timestampValue);case 4:return ov(tl(t),tl(e));case 5:return lp(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ts(i),u=ts(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const f=se(a[h],u[h]);if(f!==0)return f}return se(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=se(je(i.latitude),je(o.latitude));return a!==0?a:se(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return av(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,b,N,R;const a=i.fields||{},u=o.fields||{},h=(g=a[bu])==null?void 0:g.arrayValue,f=(b=u[bu])==null?void 0:b.arrayValue,m=se(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return m!==0?m:av(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===cc.mapValue&&o===cc.mapValue)return 0;if(i===cc.mapValue)return 1;if(o===cc.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=lp(u[m],f[m]);if(g!==0)return g;const b=so(a[u[m]],h[f[m]]);if(b!==0)return b}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=es(t),r=es(e),s=se(n.seconds,r.seconds);return s!==0?s:se(n.nanos,r.nanos)}function av(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=so(n[s],r[s]);if(i)return i}return se(n.length,r.length)}function io(t){return up(t)}function up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=es(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=up(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${up(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function Pc(t){switch(ns(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vh(t);return e?16+Pc(e):16;case 5:return 2*t.stringValue.length;case 6:return ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Pc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ni(r.fields,(i,o)=>{s+=i.length+Pc(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function hp(t){return!!t&&"integerValue"in t}function ag(t){return!!t&&"arrayValue"in t}function lv(t){return!!t&&"nullValue"in t}function cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jc(t){return!!t&&"mapValue"in t}function CD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[zT])==null?void 0:r.stringValue)===BT}function Ta(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return{...t}}function AD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ND}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ta(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];jc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Ta(this.value))}}function $T(t){const e=[];return ni(t.fields,(n,r)=>{const s=new rt([n]);if(jc(r)){const i=$T(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,J.min(),J.min(),J.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,J.min(),J.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,J.min(),J.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.position=e,this.inclusive=n}}function uv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=so(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n="asc"){this.field=e,this.dir=n}}function RD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{}class $e extends WT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jD(e,n,r):n==="array-contains"?new MD(e,r):n==="in"?new LD(e,r):n==="not-in"?new VD(e,r):n==="array-contains-any"?new FD(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DD(e,r):new OD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(so(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends WT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vn(e,n)}matches(e){return HT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function HT(t){return t.op==="and"}function qT(t){return PD(t)&&HT(t)}function PD(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function dp(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+io(t.value);if(qT(t))return t.filters.map(e=>dp(e)).join(",");{const e=t.filters.map(n=>dp(n)).join(",");return`${t.op}(${e})`}}function GT(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof Vn?function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&GT(o,s.filters[a]),!0):!1}(t,e):void Y(19439)}function KT(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(KT).join(" ,")+"}"}(t):"Filter"}class jD extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class DD extends $e{constructor(e,n){super(e,"in",n),this.keys=QT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OD extends $e{constructor(e,n){super(e,"not-in",n),this.keys=QT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class MD extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ag(n)&&rl(n.arrayValue,this.value)}}class LD extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class VD extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!rl(this.value.arrayValue,n)}}class FD extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ag(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function dv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UD(t,e,n,r,s,i,o)}function lg(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.Te=n}return e.Te}function cg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hv(t.startAt,e.startAt)&&hv(t.endAt,e.endAt)}function fp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function zD(t,e,n,r,s,i,o,a){return new wh(t,e,n,r,s,i,o,a)}function ug(t){return new wh(t)}function fv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BD(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function $D(t){return t.collectionGroup!==null}function ba(t){const e=Z(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ku(i,r))}),n.has(rt.keyField().canonicalString())||e.Ee.push(new ku(rt.keyField(),r))}return e.Ee}function Dn(t){const e=Z(t);return e.Ie||(e.Ie=WD(e,ba(t))),e.Ie}function WD(t,e){if(t.limitType==="F")return dv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ku(s.field,i)});const n=t.endAt?new Iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Iu(t.startAt.position,t.startAt.inclusive):null;return dv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pp(t,e,n){return new wh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xh(t,e){return cg(Dn(t),Dn(e))&&t.limitType===e.limitType}function YT(t){return`${lg(Dn(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>KT(s)).join(", ")}]`),_h(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>io(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>io(s)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Eh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ba(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const h=uv(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,ba(r),s)||r.endAt&&!function(o,a,u){const h=uv(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,ba(r),s))}(t,e)}function HD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XT(t){return(e,n)=>{let r=!1;for(const s of ba(t)){const i=qD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qD(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),h=a.data.field(i);return u!==null&&h!==null?so(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=new Ue(G.comparator);function ur(){return GD}const JT=new Ue(G.comparator);function ua(...t){let e=JT;for(const n of t)e=e.insert(n.key,n);return e}function ZT(t){let e=JT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ps(){return Ia()}function eb(){return Ia()}function Ia(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const KD=new Ue(G.comparator),QD=new He(G.comparator);function ie(...t){let e=QD;for(const n of t)e=e.add(n);return e}const YD=new He(se);function XD(){return YD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function tb(t){return{integerValue:""+t}}function JD(t,e){return ED(e)?tb(e):hg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._=void 0}}function ZD(t,e,n){return t instanceof Su?function(s,i){const o={fields:{[VT]:{stringValue:LT},[UT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&og(i)&&(i=vh(i)),i&&(o.fields[FT]=i),{mapValue:o}}(n,e):t instanceof sl?rb(t,e):t instanceof il?sb(t,e):function(s,i){const o=nb(s,i),a=pv(o)+pv(s.Ae);return hp(o)&&hp(s.Ae)?tb(a):hg(s.serializer,a)}(t,e)}function e5(t,e,n){return t instanceof sl?rb(t,e):t instanceof il?sb(t,e):n}function nb(t,e){return t instanceof Nu?function(r){return hp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Su extends Th{}class sl extends Th{constructor(e){super(),this.elements=e}}function rb(t,e){const n=ib(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class il extends Th{constructor(e){super(),this.elements=e}}function sb(t,e){let n=ib(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class Nu extends Th{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function pv(t){return je(t.integerValue||t.doubleValue)}function ib(t){return ag(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t5(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof sl&&s instanceof sl||r instanceof il&&s instanceof il?ro(r.elements,s.elements,Ln):r instanceof Nu&&s instanceof Nu?Ln(r.Ae,s.Ae):r instanceof Su&&s instanceof Su}(t.transform,e.transform)}class n5{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bh{}function ob(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lb(t.key,er.none()):new xl(t.key,t.data,er.none());{const n=t.data,r=Yt.empty();let s=new He(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new si(t.key,r,new mn(s.toArray()),er.none())}}function r5(t,e,n){t instanceof xl?function(s,i,o){const a=s.value.clone(),u=gv(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof si?function(s,i,o){if(!Dc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=gv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ab(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof xl?function(i,o,a,u){if(!Dc(i.precondition,o))return a;const h=i.value.clone(),f=yv(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(i,o,a,u){if(!Dc(i.precondition,o))return a;const h=yv(i.fieldTransforms,u,o),f=o.data;return f.setAll(ab(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,a){return Dc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function s5(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nb(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ro(r,s,(i,o)=>t5(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends bh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class si extends bh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ab(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gv(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,e5(o,a,n[s]))}return r}function yv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZD(i,o,e))}return r}class lb extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i5 extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r5(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=ob(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>mv(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>mv(n,r))}}class dg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dg(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ae;function c5(t){switch(t){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function cb(t){if(t===void 0)return cr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:t})}}(ae=Oe||(Oe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u5(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=new qr([4294967295,4294967295],0);function _v(t){const e=u5().encode(t),n=new IT;return n.update(e),new Uint8Array(n.digest())}function vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class fg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(h5)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_v(e),[r,s]=vv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=_v(e),[r,s]=vv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ih(J.min(),s,new Ue(se),ur(),ie())}}class El{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new El(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class ub{constructor(e,n){this.targetId=e,this.Ce=n}}class hb{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wv{constructor(){this.ve=0,this.Fe=xv(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new El(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=xv()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class d5{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=uc(),this.He=uc(),this.Ze=new Ue(se)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(fp(i))if(r===0){const o=new G(i.path);this.et(n,o,ft.newNoDocument(o,J.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ts(r).toUint8Array()}catch(u){if(u instanceof MT)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new fg(o,s,i)}catch(u){return Ks(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&fp(a.target)){const u=new G(a.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,ft.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ie();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ih(e,n,this.Ze,this.je,r);return this.je=ur(),this.Je=uc(),this.He=uc(),this.Ze=new Ue(se),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new wv,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new He(se),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new He(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function uc(){return new Ue(G.comparator)}function xv(){return new Ue(G.comparator)}const f5={asc:"ASCENDING",desc:"DESCENDING"},p5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m5={and:"AND",or:"OR"};class g5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mp(t,e){return t.useProto3Json||_h(e)?e:{value:e}}function Cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function db(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function y5(t,e){return Cu(t,e.toTimestamp())}function On(t){return de(!!t,49232),J.fromTimestamp(function(n){const r=es(n);return new xe(r.seconds,r.nanos)}(t))}function pg(t,e){return gp(t,e).canonicalString()}function gp(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fb(t){const e=Se.fromString(t);return de(_b(e),10190,{key:e.toString()}),e}function yp(t,e){return pg(t.databaseId,e.path)}function Bd(t,e){const n=fb(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(mb(n))}function pb(t,e){return pg(t.databaseId,e)}function _5(t){const e=fb(t);return e.length===4?Se.emptyPath():mb(e)}function _p(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mb(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ev(t,e,n){return{name:yp(t,e),fields:n.value.mapValue.fields}}function v5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?L.UNKNOWN:cb(h.code);return new H(f,h.message||"")}(o);n=new hb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bd(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):J.min(),a=new Yt({mapValue:{fields:r.document.fields}}),u=ft.newFoundDocument(s,i,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Oc(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bd(t,r.document),i=r.readTime?On(r.readTime):J.min(),o=ft.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bd(t,r.document),i=r.removedTargetIds||[];n=new Oc([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new l5(s,i),a=r.targetId;n=new ub(a,o)}}return n}function w5(t,e){let n;if(e instanceof xl)n={update:Ev(t,e.key,e.value)};else if(e instanceof lb)n={delete:yp(t,e.key)};else if(e instanceof si)n={update:Ev(t,e.key,e.data),updateMask:C5(e.fieldMask)};else{if(!(e instanceof i5))return Y(16599,{dt:e.type});n={verify:yp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Su)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof il)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:y5(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function x5(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(J.min())&&(o=On(i)),new n5(o,s.transformResults||[])}(n,e))):[]}function E5(t,e){return{documents:[pb(t,e.path)]}}function T5(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pb(t,s);const i=function(h){if(h.length!==0)return yb(Vn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:yi(g.field),direction:k5(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function b5(t){let e=_5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=gb(m);return g instanceof Vn&&qT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new ku(_i(N.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,_h(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,b=m.values||[];return new Iu(b,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,b=m.values||[];return new Iu(b,g)}(n.endAt)),zD(e,s,o,i,a,"F",u,h)}function I5(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_i(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(_i(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>gb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function k5(t){return f5[t]}function S5(t){return p5[t]}function N5(t){return m5[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return rt.fromServerFormat(t.fieldPath)}function yb(t){return t instanceof $e?function(n){if(n.op==="=="){if(cv(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(lv(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cv(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(lv(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:S5(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(s=>yb(s));return r.length===1?r[0]:{compositeFilter:{op:N5(n.op),filters:r}}}(t):Y(54877,{filter:t})}function C5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _b(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function vb(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(e){this.yt=e}}function R5(t){const e=b5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(){this.bn=new j5}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Zr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class j5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wb=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(wb,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new oo(0)}static ar(){return new oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="LruGarbageCollector",D5=1048576;function Iv([t,e],[n,r]){const s=se(t,n);return s===0?se(e,r):s}class O5{constructor(e){this.Pr=e,this.buffer=new He(Iv),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Iv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class M5{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(bv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vo(n)?$(bv,"Ignoring IndexedDB error during garbage collection: ",n):await _o(n)}await this.Ar(3e5)})}}class L5{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(yh.ce);const r=new O5(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Tv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),mi()<=ne.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function V5(t,e){return new L5(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ka(r.mutation,s,mn.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ua();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ur();const o=Ia(),a=function(){return Ia()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof si)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ka(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>a.set(h,new U5(f,o.get(h)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Ia();let s=new Ue((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||mn.empty();f=a.applyToLocalView(h,f),r.set(u,f);const m=(s.get(a.batchId)||ie()).add(u);s=s.insert(a.batchId,m)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,f=u.value,m=eb();f.forEach(g=>{if(!i.has(g)){const b=ob(n.get(g),r.get(g));b!==null&&m.set(g,b),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return BD(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$D(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Ps());let a=el,u=i;return o.next(h=>O.forEach(h,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:a,changes:ZT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=ua();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ua();return this.indexManager.getCollectionParents(e,i).next(a=>O.forEach(a,u=>{const h=function(m,g){return new wh(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let a=ua();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&ka(f.mutation,h,mn.empty(),xe.now()),Eh(n,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:R5(s.bundledQuery),readTime:On(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(){this.overlays=new Ue(G.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ps();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Ps(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ps(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=Ps(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=s)););return O.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a5(n,r));let i=this.Lr.get(n);i===void 0&&(i=ie(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.kr=new He(Ke.qr),this.Kr=new He(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new G(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=ie();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return G.comparator(e.key,n.key)||se(e.Jr,n.Jr)}static Ur(e,n){return se(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new He(Ke.qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o5(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Hr=this.Hr.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?ig:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const a=this.Zr(o.Jr);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],a=>{r=r.add(a.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new G(i),0);let a=new He(se);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(u.Jr)),!0)},o),O.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(e){this.ti=e,this.docs=function(){return new Ue(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const o=n.path,a=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_D(yD(f),r)<=0||(s.has(f.key)||Eh(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G5(this)}getSize(e){return O.resolve(this.size)}}class G5 extends F5{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(e){this.persistence=e,this.ri=new ri(n=>lg(n),cg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new mg,this.targetCount=0,this.oi=oo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this._i={},this.overlays={},this.ai=new yh(0),this.ui=!1,this.ui=!0,this.ci=new W5,this.referenceDelegate=e(this),this.li=new K5(this),this.indexManager=new P5,this.remoteDocumentCache=function(s){return new q5(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new A5(n),this.Pi=new B5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new H5(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new Q5(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Q5 extends wD{constructor(e){super(),this.currentSequenceNumber=e}}class gg{constructor(e){this.persistence=e,this.Ri=new mg,this.Ai=null}static Vi(e){return new gg(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Au{constructor(e,n){this.persistence=e,this.fi=new ri(r=>TD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=V5(this,n)}static Vi(e,n){return new Au(e,n)}Ti(){}Ei(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pc(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return qC()?8:xD(vt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Y5;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(mi()<=ne.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(mi()<=ne.DEBUG&&$("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(mi()<=ne.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):O.resolve())}gs(e,n){if(fv(n))return O.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pp(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,a);return this.bs(n,h,o,u.readTime)?this.gs(e,pp(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return fv(n)||s.isEqual(J.min())?O.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?O.resolve(null):(mi()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gi(n)),this.Ds(e,o,n,gD(s,el)).next(a=>a))})}Ss(e,n){let r=new He(XT(e));return n.forEach((s,i)=>{Eh(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return mi()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",gi(n)),this.fs.getDocumentsMatchingQuery(e,n,Zr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="LocalStore",J5=3e8;class Z5{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ue(se),this.Fs=new ri(i=>lg(i),cg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z5(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function eO(t,e,n,r){return new Z5(t,e,n,r)}async function Eb(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=ie();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function tO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,u,h,f){const m=h.batch,g=m.keys();let b=O.resolve();return g.forEach(N=>{b=b.next(()=>f.getEntry(u,N)).next(R=>{const P=h.docVersions.get(N);de(P!==null,48541),R.version.compareTo(P)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),b.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ie();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(u=u.add(a.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Tb(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function nO(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;a.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let b=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(m,b),function(R,P,E){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=J5?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,b,f)&&a.push(n.li.updateTargetData(i,b))});let u=ur(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(rO(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function rO(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ur();return n.forEach((a,u)=>{const h=i.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):$(_g,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function sO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ig),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function vp(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vo(o))throw o;$(_g,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function kv(t,e,n){const r=Z(t);let s=J.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Z(u),g=m.Fs.get(f);return g!==void 0?O.resolve(m.vs.get(g)):m.li.getTargetData(h,f)}(r,o,Dn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ie())).next(a=>(oO(r,HD(e),a),{documents:a,ks:i})))}function oO(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Sv{constructor(){this.activeTargetIds=XD()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aO{constructor(){this.vo=new Sv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="ConnectivityMonitor";class Cv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(Nv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(Nv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc=null;function wp(){return hc===null?hc=function(){return 268435456+Math.round(2147483648*Math.random())}():hc++,"0x"+hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="RestConnection",cO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uO{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Tu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=wp(),a=this.Qo(e,n.toUriEncodedString());$($d,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(a),f=us(h);return this.zo(e,a,u,r,f).then(m=>($($d,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ks($d,`RPC '${e}' ${o} failed with error: `,m,"url: ",a,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=cO[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection",Jo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class $i extends uO{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!$i.c_){const e=CT();Jo(e,NT.STAT_EVENT,n=>{n.stat===ap.PROXY?$(ut,"STAT_EVENT: detected buffering proxy"):n.stat===ap.NOPROXY&&$(ut,"STAT_EVENT: detected no buffering proxy")}),$i.c_=!0}}zo(e,n,r,s,i){const o=wp();return new Promise((a,u)=>{const h=new kT;h.setWithCredentials(!0),h.listenOnce(ST.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Rc.NO_ERROR:const m=h.getResponseJson();$(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Rc.TIMEOUT:$(ut,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const g=h.getStatus();if($(ut,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const R=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(N.status);u(new H(R,N.message))}else u(new H(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(ut,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);$(ut,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=wp(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=i.join("");$(ut,`Creating RPC '${e}' stream ${s}: ${h}`,a);const f=o.createWebChannel(h,a);this.E_(f);let m=!1,g=!1;const b=new hO({Jo:N=>{g?$(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||($(ut,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),$(ut,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Ho:()=>f.close()});return Jo(f,ca.EventType.OPEN,()=>{g||($(ut,`RPC '${e}' stream ${s} transport opened.`),b.i_())}),Jo(f,ca.EventType.CLOSE,()=>{g||(g=!0,$(ut,`RPC '${e}' stream ${s} transport closed`),b.o_(),this.I_(f))}),Jo(f,ca.EventType.ERROR,N=>{g||(g=!0,Ks(ut,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),b.o_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),Jo(f,ca.EventType.MESSAGE,N=>{var R;if(!g){const P=N.data[0];de(!!P,16349);const E=P,w=(E==null?void 0:E.error)||((R=E[0])==null?void 0:R.error);if(w){$(ut,`RPC '${e}' stream ${s} received error:`,w);const k=w.status;let D=function(v){const _=Oe[v];if(_!==void 0)return cb(_)}(k),F=w.message;k==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Ks(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=L.INTERNAL,F="Unknown error status: "+k+" with message "+w.message),g=!0,b.o_(new H(D,F)),f.close()}else $(ut,`RPC '${e}' stream ${s} received:`,P),b.__(P)}}),$i.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return AT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){return new $i(t)}function Wd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){return new g5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.c_=!1;class bb{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="PersistentStream";class Ib{constructor(e,n,r,s,i,o,a,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bb(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Av,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(Av,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fO extends Ib{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=v5(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?On(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=_p(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=fp(u)?{documents:E5(i,u)}:{query:T5(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=db(i,o.resumeToken);const h=mp(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Cu(i,o.snapshotVersion.toTimestamp());const h=mp(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=I5(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=_p(this.serializer),n.removeTarget=e,this.q_(n)}}class pO extends Ib{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=x5(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=_p(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>w5(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{}class gO extends mO{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,gp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,gp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function yO(t,e,n,r){return new gO(t,e,n,r)}class _O{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(cr(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RemoteStore";class vO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ii(this)&&($(Qs,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ia.add(4),await Tl(h),h.Va.set("Unknown"),h.Ia.delete(4),await Sh(h)}(this))})}),this.Va=new _O(r,s)}}async function Sh(t){if(ii(t))for(const e of t.Ra)await e(!0)}async function Tl(t){for(const e of t.Ra)await e(!1)}function kb(t,e){const n=Z(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Eg(n)?xg(n):wo(n).O_()&&wg(n,e))}function vg(t,e){const n=Z(t),r=wo(n);n.Ea.delete(e),r.O_()&&Sb(n,e),n.Ea.size===0&&(r.O_()?r.L_():ii(n)&&n.Va.set("Unknown"))}function wg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wo(t).Z_(e)}function Sb(t,e){t.da.$e(e),wo(t).X_(e)}function xg(t){t.da=new d5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),wo(t).start(),t.Va.ua()}function Eg(t){return ii(t)&&!wo(t).x_()&&t.Ea.size>0}function ii(t){return Z(t).Ia.size===0}function Nb(t){t.da=void 0}async function wO(t){t.Va.set("Online")}async function xO(t){t.Ea.forEach((e,n)=>{wg(t,e)})}async function EO(t,e){Nb(t),Eg(t)?(t.Va.ha(e),xg(t)):t.Va.set("Unknown")}async function TO(t,e,n){if(t.Va.set("Online"),e instanceof hb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ea.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ea.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){$(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof Oc?t.da.Xe(e):e instanceof ub?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await Tb(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),Sb(i,u);const m=new Or(f.target,u,h,f.sequenceNumber);wg(i,m)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$(Qs,"Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!vo(e))throw e;t.Ia.add(1),await Tl(t),t.Va.set("Offline"),n||(n=()=>Tb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Qs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Sh(t)})}function Cb(t,e){return e().catch(n=>Ru(t,n,e))}async function Nh(t){const e=Z(t),n=rs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ig;for(;bO(e);)try{const s=await sO(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,IO(e,s)}catch(s){await Ru(e,s)}Ab(e)&&Rb(e)}function bO(t){return ii(t)&&t.Ta.length<10}function IO(t,e){t.Ta.push(e);const n=rs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ab(t){return ii(t)&&!rs(t).x_()&&t.Ta.length>0}function Rb(t){rs(t).start()}async function kO(t){rs(t).ra()}async function SO(t){const e=rs(t);for(const n of t.Ta)e.ea(n.mutations)}async function NO(t,e,n){const r=t.Ta.shift(),s=dg.from(r,e,n);await Cb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nh(t)}async function CO(t,e){e&&rs(t).Y_&&await async function(r,s){if(function(o){return c5(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();rs(r).B_(),await Cb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nh(r)}}(t,e),Ab(t)&&Rb(t)}async function Rv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$(Qs,"RemoteStore received new credentials");const r=ii(n);n.Ia.add(3),await Tl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Sh(n)}async function AO(t,e){const n=Z(t);e?(n.Ia.delete(2),await Sh(n)):e||(n.Ia.add(2),await Tl(n),n.Va.set("Unknown"))}function wo(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new fO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:wO.bind(null,t),Yo:xO.bind(null,t),t_:EO.bind(null,t),H_:TO.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Eg(t)?xg(t):t.Va.set("Unknown")):(await t.ma.stop(),Nb(t))})),t.ma}function rs(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new pO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kO.bind(null,t),t_:CO.bind(null,t),ta:SO.bind(null,t),na:NO.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Nh(t)):(await t.fa.stop(),t.Ta.length>0&&($(Qs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Tg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bg(t,e){if(cr("AsyncQueue",`${e}: ${t}`),vo(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{static emptySet(e){return new Wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.ga=new Ue(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,s,i,o,a,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,n,Wi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class PO{constructor(){this.queries=jv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=jv(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function jv(){return new ri(t=>YT(t),xh)}async function jO(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new RO,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=bg(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ig(n)}async function DO(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OO(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Ig(n)}function MO(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ig(t){t.Ca.forEach(e=>{e.next()})}var xp,Dv;(Dv=xp||(xp={})).Ma="default",Dv.Cache="cache";class LO{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.key=e}}class jb{constructor(e){this.key=e}}class VO{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=XT(e),this.tu=new Wi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Pv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),b=Eh(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),R=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;g&&b?g.data.isEqual(b.data)?N!==R&&(r.track({type:3,doc:b}),P=!0):this.su(g,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(a=!0)):!g&&b?(r.track({type:0,doc:b}),P=!0):g&&!b&&(r.track({type:1,doc:g}),P=!0,(u||h)&&(a=!0)),P&&(b?(o=o.add(b),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(b,N){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:P})}};return R(b)-R(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new ao(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new jb(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Pb(r))}),n}cu(e){this.Za=e.ks,this.Ya=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const kg="SyncEngine";class FO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UO{constructor(e){this.key=e,this.hu=!1}}class zO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ri(a=>YT(a),xh),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ue(G.comparator),this.Au=new Map,this.Vu=new mg,this.du={},this.mu=new Map,this.fu=oo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BO(t,e,n=!0){const r=Fb(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Db(r,e,n,!0),s}async function $O(t,e){const n=Fb(t);await Db(n,e,!0,!1)}async function Db(t,e,n,r){const s=await iO(t.localStore,Dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await WO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kb(t.remoteStore,s),a}async function WO(t,e,n,r,s){t.pu=(m,g,b)=>async function(R,P,E,w){let k=P.view.ru(E);k.bs&&(k=await kv(R.localStore,P.query,!1).then(({documents:v})=>P.view.ru(v,k)));const D=w&&w.targetChanges.get(P.targetId),F=w&&w.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(k,R.isPrimaryClient,D,F);return Mv(R,P.targetId,M.au),M.snapshot}(t,m,g,b);const i=await kv(t.localStore,e,!0),o=new VO(e,i.ks),a=o.ru(i.documents),u=El.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(a,t.isPrimaryClient,u);Mv(t,n,h.au);const f=new FO(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),h.snapshot}async function HO(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!xh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vg(r.remoteStore,s.targetId),Ep(r,s.targetId)}).catch(_o)):(Ep(r,s.targetId),await vp(r.localStore,s.targetId,!0))}async function qO(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vg(n.remoteStore,r.targetId))}async function GO(t,e,n){const r=eM(t);try{const s=await function(o,a){const u=Z(o),h=xe.now(),f=a.reduce((b,N)=>b.add(N.key),ie());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let N=ur(),R=ie();return u.xs.getEntries(b,f).next(P=>{N=P,N.forEach((E,w)=>{w.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,N)).next(P=>{m=P;const E=[];for(const w of a){const k=s5(w,m.get(w.key).overlayedDocument);k!=null&&E.push(new si(w.key,k,$T(k.value.mapValue),er.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,E,a)}).next(P=>{g=P;const E=P.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(b,P.batchId,E)})}).then(()=>({batchId:g.batchId,changes:ZT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let h=o.du[o.currentUser.toKey()];h||(h=new Ue(se)),h=h.insert(a,u),o.du[o.currentUser.toKey()]=h}(r,s.batchId,n),await bl(r,s.changes),await Nh(r.remoteStore)}catch(s){const i=bg(s,"Failed to persist write");n.reject(i)}}async function Ob(t,e){const n=Z(t);try{const r=await nO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))}),await bl(n,r,e)}catch(r){await _o(r)}}function Ov(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(a)&&(h=!0)}),h&&Ig(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ue(G.comparator);o=o.insert(i,ft.newNoDocument(i,J.min()));const a=ie().add(i),u=new Ih(J.min(),new Map,new Ue(se),o,a);await Ob(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Sg(r)}else await vp(r.localStore,e,!1).then(()=>Ep(r,e,n)).catch(_o)}async function QO(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await tO(n.localStore,e);Lb(n,r,null),Mb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bl(n,s)}catch(s){await _o(s)}}async function YO(t,e,n){const r=Z(t);try{const s=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,a).next(m=>(de(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Lb(r,e,n),Mb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bl(r,s)}catch(s){await _o(s)}}function Mb(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Lb(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Vb(t,r)})}function Vb(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(vg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Sg(t))}function Mv(t,e,n){for(const r of n)r instanceof Pb?(t.Vu.addReference(r.key,e),XO(t,r)):r instanceof jb?($(kg,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Vb(t,r.key)):Y(19791,{wu:r})}function XO(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||($(kg,"New document in limbo: "+n),t.Iu.add(r),Sg(t))}function Sg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new G(Se.fromString(e)),r=t.fu.next();t.Au.set(r,new UO(n)),t.Ru=t.Ru.insert(n,r),kb(t.remoteStore,new Or(Dn(ug(n.path)),r,"TargetPurposeLimboResolution",yh.ce))}}async function bl(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=yg.Is(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,g=>O.forEach(g.Ts,b=>f.persistence.referenceDelegate.addReference(m,g.targetId,b)).next(()=>O.forEach(g.Es,b=>f.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))}catch(m){if(!vo(m))throw m;$(_g,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const b=f.vs.get(g),N=b.snapshotVersion,R=b.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(g,R)}}}(r.localStore,i))}async function JO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$(kg,"User change. New user:",e.toKey());const r=await Eb(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bl(n,r.Ns)}}function ZO(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function Fb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KO.bind(null,e),e.Pu.H_=OO.bind(null,e.eventManager),e.Pu.yu=MO.bind(null,e.eventManager),e}function eM(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YO.bind(null,e),e}class Pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return eO(this.persistence,new X5,e.initialUser,this.serializer)}Cu(e){return new xb(gg.Vi,this.serializer)}Du(e){return new aO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pu.provider={build:()=>new Pu};class tM extends Pu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof Au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new M5(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new xb(r=>Au.Vi(r,n),this.serializer)}}class Tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ov(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JO.bind(null,this.syncEngine),await AO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PO}()}createDatastore(e){const n=kh(e.databaseInfo.databaseId),r=dO(e.databaseInfo);return yO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new vO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ov(this.syncEngine,n,0),function(){return Cv.v()?new Cv:new lO}())}createSyncEngine(e,n){return function(s,i,o,a,u,h,f){const m=new zO(s,i,o,a,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);$(Qs,"RemoteStore shutting down."),i.Ia.add(5),await Tl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Tp.provider={build:()=>new Tp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="FirestoreClient";class rM{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress(),$(ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Eb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sM(t);$(ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Rv(e.remoteStore,s)),t._onlineComponents=e}async function sM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(ss,"Using user provided OfflineComponentProvider");try{await Hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await Hd(t,new Pu)}}else $(ss,"Using default OfflineComponentProvider"),await Hd(t,new tM(void 0));return t._offlineComponents}async function Ub(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(ss,"Using user provided OnlineComponentProvider"),await Lv(t,t._uninitializedComponentsProvider._online)):($(ss,"Using default OnlineComponentProvider"),await Lv(t,new Tp))),t._onlineComponents}function iM(t){return Ub(t).then(e=>e.syncEngine)}async function oM(t){const e=await Ub(t),n=e.eventManager;return n.onListen=BO.bind(null,e.syncEngine),n.onUnlisten=HO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$O.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qO.bind(null,e.syncEngine),n}function aM(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const f=new nM({next:g=>{f.Nu(),o.enqueueAndForget(()=>DO(i,m));const b=g.docs.has(a);!b&&g.fromCache?h.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&u&&u.source==="server"?h.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new LO(ug(a.path),f,{includeMetadataChanges:!0,qa:!0});return jO(i,m)}(await oM(t),t.asyncQueue,e,n,r)),r.promise}function lM(t,e){const n=new Gr;return t.asyncQueue.enqueueAndForget(async()=>GO(await iM(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="ComponentProvider",Vv=new Map;function uM(t,e,n,r,s){return new kD(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="firestore.googleapis.com",Fv=!0;class Uv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bb,this.ssl=Fv}else this.host=e.host,this.ssl=e.ssl??Fv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D5)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ng{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sD;switch(r.type){case"firstParty":return new lD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vv.get(n);r&&($(cM,"Removing Datastore"),Vv.delete(n),r.terminate())}(this),Promise.resolve()}}function hM(t,e,n,r={}){var h;t=Za(t,Ng);const s=us(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&hh(`https://${a}`),i.host!==Bb&&i.host!==a&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!or(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=ht.MOCK_USER;else{f=Lm(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ht(g)}t._authCredentials=new iD(new PT(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cg(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ol(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wl(n,Je._jsonSchema))return new Je(e,r||null,new G(Se.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Le("string",Je._jsonSchemaVersion),referencePath:Le("string")};class ol extends Cg{constructor(e,n,r){super(e,n,ug(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new G(e))}withConverter(e){return new ol(this.firestore,e,this._path)}}function Mc(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=rg.newId()),pD("doc","path",e),t instanceof Ng){const r=Se.fromString(e,...n);return ev(r),new Je(t,null,new G(r))}{if(!(t instanceof Je||t instanceof ol))throw new H(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ev(r),new Je(t.firestore,t instanceof ol?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="AsyncQueue";class Bv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bb(this,"async_queue_retry"),this._c=()=>{const r=Wd();r&&$(zv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Wd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!vo(e))throw e;$(zv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,cr("INTERNAL UNHANDLED ERROR: ",$v(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Tg.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:$v(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function $v(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ag extends Ng{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Bv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bv(e),this._firestoreClient=void 0,await e}}}function dM(t,e){const n=typeof t=="object"?t:ml(),r=typeof t=="string"?t:Tu,s=pr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Om("firestore");i&&hM(s,...i)}return s}function $b(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fM(t),t._firestoreClient}function fM(t){var r,s,i,o;const e=t._freezeSettings(),n=uM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(ot.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wl(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Le("string",Xt._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(wl(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:Le("string",Mn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wl(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xn(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:Le("string",xn._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=/^__.*__$/;class mM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}function qb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class Rg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Rg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(qb(this.dataSource)&&pM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class gM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kh(e)}I(e,n,r,s=!1){return new Rg({dataSource:e,methodName:n,targetDoc:r,path:rt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yM(t){const e=t._freezeSettings(),n=kh(t._databaseId);return new gM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _M(t,e,n,r,s,i={}){const o=t.I(i.merge||i.mergeFields?2:0,e,n,s);Yb("Data must be an object, but it was:",o,r);const a=Kb(r,o);let u,h;if(i.merge)u=new mn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Pg(e,m,n);if(!o.contains(g))throw new H(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);xM(f,g)||f.push(g)}u=new mn(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new mM(new Yt(a),u,h)}function Gb(t,e){if(Qb(t=Fe(t)))return Yb("Unsupported field value:",e,t),Kb(t,e);if(t instanceof Hb)return function(r,s){if(!qb(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Gb(a,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Cu(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cu(s.serializer,i)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:db(s.serializer,r._byteString)};if(r instanceof Je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xn)return function(o,a){const u=o instanceof xn?o.toArray():o;return{mapValue:{fields:{[zT]:{stringValue:BT},[bu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw a.yc("VectorValues must only contain numeric values.");return hg(a.serializer,f)})}}}}}}(r,s);if(vb(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${sg(r)}`)}(t,e)}function Kb(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,s)=>{const i=Gb(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Mn||t instanceof Xt||t instanceof Je||t instanceof Hb||t instanceof xn||vb(t))}function Yb(t,e,n){if(!Qb(n)||!jT(n)){const r=sg(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Pg(t,e,n){if((e=Fe(e))instanceof Wb)return e._internalPath;if(typeof e=="string")return wM(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const vM=new RegExp("[~\\*/\\[\\]]");function wM(t,e,n){if(e.search(vM)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wb(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,a+t+u)}function xM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[bu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>je(o.doubleValue));return new xn(n)}convertGeoPoint(e){return new Mn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const n=es(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);de(_b(r),9688,{name:e});const s=new nl(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM extends EM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}const Wv="@firebase/firestore",Hv="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Pg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bM extends Xb{data(){return super.data()}}function IM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ms extends Xb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ms._jsonSchema={type:Le("string",Ms._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Lc extends Ms{data(e={}){return super.data(e)}}class Sa{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new da(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lc(this._firestore,this._userDataWriter,r.key,r,new da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Lc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new da(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Lc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new da(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:kM(a.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Sa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sa._jsonSchemaVersion="firestore/querySnapshot/1.0",Sa._jsonSchema={type:Le("string",Sa._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){t=Za(t,Je);const e=Za(t.firestore,Ag),n=$b(e);return aM(n,t._key).then(r=>NM(e,t,r))}function qv(t,e,n){t=Za(t,Je);const r=Za(t.firestore,Ag),s=IM(t.converter,e),i=yM(r);return SM(r,[_M(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,er.none())])}function SM(t,e){const n=$b(t);return lM(n,e)}function NM(t,e,n){const r=n.docs.get(e._key),s=new TM(t);return new Ms(t,s,e._key,r,new da(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){rD(hs),rn(new $t("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ag(new oD(r.getProvider("auth-internal")),new cD(o,r.getProvider("app-check-internal")),SD(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),yt(Wv,Hv,e),yt(Wv,Hv,"esm2020")})();var Gv={};const Kv="@firebase/database",Qv="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zb="";function CM(t){Zb=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return fr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AM(e)}}catch{}return new RM},js=eI("localStorage"),PM=eI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new pl("@firebase/database"),jM=function(){let t=1;return function(){return t++}}(),tI=function(t){const e=sA(t),n=new ZC;n.update(e);const r=n.digest();return Dm.encodeByteArray(r)},Il=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Il.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Na=null,Yv=!0;const DM=function(t,e){z(!0,"Can't turn on custom loggers persistently."),Hi.logLevel=ne.VERBOSE,Na=Hi.log.bind(Hi)},pt=function(...t){if(Yv===!0&&(Yv=!1,Na===null&&PM.get("logging_enabled")===!0&&DM()),Na){const e=Il.apply(null,t);Na(e)}},kl=function(t){return function(...e){pt(t,...e)}},bp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Il(...t);Hi.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Il(...t)}`;throw Hi.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+Il(...t);Hi.warn(e)},OM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",Ys="[MAX_NAME]",xo=function(t,e){if(t===e)return 0;if(t===lo||e===Ys)return-1;if(e===lo||t===Ys)return 1;{const n=Xv(t),r=Xv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LM=function(t,e){return t===e?0:t<e?-1:1},Zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},jg=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=jg(t[e[r]]);return n+="}",n},rI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sI=function(t){z(!nI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(s?1:0),h.reverse();const f=h.join("");let m="";for(u=0;u<64;u+=8){let g=parseInt(f.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),m=m+g}return m.toLowerCase()},VM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},UM=new RegExp("^-?(0*)\\d{1,10}$"),zM=-2147483648,BM=2147483647,Xv=function(t){if(UM.test(t)){const e=Number(t);if(e>=zM&&e<=BM)return e}return null},Sl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},$M=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ca=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Tt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Vc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="5",iI="v",oI="s",aI="r",lI="f",cI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uI="ls",hI="p",Ip="ac",dI="websocket",fI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r,s,i=!1,o="",a=!1,u=!1,h=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mI(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===dI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qM(t)&&(n.ns=t.namespace);const s=[];return on(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.counters_={}}incrementCounter(e,n=1){fr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return MC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={},Gd={};function Og(t){const e=t.toString();return qd[e]||(qd[e]=new GM),qd[e]}function KM(t,e){const n=t.toString();return Gd[n]||(Gd[n]=e()),Gd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Sl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="start",YM="close",XM="pLPCommand",JM="pRTLPCB",gI="id",yI="pw",_I="ser",ZM="cb",eL="seg",tL="ts",nL="d",rL="dframe",vI=1870,wI=30,sL=vI-wI,iL=25e3,oL=3e4;class Ri{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kl(e),this.stats_=Og(n),this.urlFn=u=>(this.appCheckToken&&(u[Ip]=this.appCheckToken),mI(n,fI,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oL)),MM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mg((...i)=>{const[o,a,u,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jv)this.id=a,this.password=u;else if(o===YM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jv]="t",r[_I]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iI]=Dg,this.transportSessionId&&(r[oI]=this.transportSessionId),this.lastSessionId&&(r[uI]=this.lastSessionId),this.applicationId&&(r[hI]=this.applicationId),this.appCheckToken&&(r[Ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&cI.test(location.hostname)&&(r[aI]=lI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ri.forceAllow_=!0}static forceDisallow(){Ri.forceDisallow_=!0}static isAvailable(){return Ri.forceAllow_?!0:!Ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VM()&&!FM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cE(n),s=rI(r,sL);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[rL]="t",r[gI]=e,r[yI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jM(),window[XM+this.uniqueCallbackIdentifier]=e,window[JM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gI]=this.myID,e[yI]=this.myPW,e[_I]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wI+r.length<=vI;){const o=this.pendingSegs.shift();r=r+"&"+eL+s+"="+o.seg+"&"+tL+s+"="+o.ts+"&"+nL+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(iL)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=16384,lL=45e3;let Du=null;typeof MozWebSocket<"u"?Du=MozWebSocket:typeof WebSocket<"u"&&(Du=WebSocket);class fn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kl(this.connId),this.stats_=Og(n),this.connURL=fn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[iI]=Dg,typeof location<"u"&&location.hostname&&cI.test(location.hostname)&&(o[aI]=lI),n&&(o[oI]=n),r&&(o[uI]=r),s&&(o[Ip]=s),i&&(o[hI]=i),mI(e,dI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,js.set("previous_websocket_failure",!0);try{let r;HC(),this.mySock=new Du(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Du!==null&&!fn.forceDisallow_}static previouslyFailed(){return js.isInMemoryStorage||js.get("previous_websocket_failure")===!0}markConnectionHealthy(){js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rI(n,aL);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static get ALL_TRANSPORTS(){return[Ri,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const s=this.transports_=[];for(const i of al.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);al.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}al.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL=6e4,uL=5e3,hL=10*1024,dL=100*1024,Kd="t",Zv="d",fL="s",ew="r",pL="e",tw="o",nw="a",rw="n",sw="p",mL="h";class gL{constructor(e,n,r,s,i,o,a,u,h,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kl("c:"+this.id+":"),this.transportManager_=new al(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kd in e){const n=e[Kd];n===nw?this.upgradeIfSecondaryHealthy_():n===ew?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zo("t",e),r=Zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zo("t",e),r=Zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zo(Kd,e);if(Zv in e){const r=e[Zv];if(n===mL){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===rw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fL?this.onConnectionShutdown_(r):n===ew?this.onReset_(r):n===pL?bp("Server Error: "+r):n===tw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dg!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends EI{static getInstance(){return new Ou}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=32,ow=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new Te("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function is(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function TI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function II(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Te(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Zt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kI(t,e){if(is(t)!==is(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(is(t)>is(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _L{constructor(e,n){this.errorPrefix_=n,this.parts_=bI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uh(this.parts_[r]);SI(this)}}function vL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uh(e),SI(t)}function wL(t){const e=t.parts_.pop();t.byteLength_-=uh(e),t.parts_.length>0&&(t.byteLength_-=1)}function SI(t){if(t.byteLength_>ow)throw new Error(t.errorPrefix_+"has a key path longer than "+ow+" bytes ("+t.byteLength_+").");if(t.parts_.length>iw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iw+") or object contains a cycle "+Is(t))}function Is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends EI{static getInstance(){return new Lg}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=1e3,xL=60*5*1e3,aw=30*1e3,EL=1.3,TL=3e4,bL="server_kill",lw=3;class tr extends xI{constructor(e,n,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=tr.nextPersistentConnectionId_++,this.log_=kl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ea,this.maxReconnectDelay_=xL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ou.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(nt(i)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Mm,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,h=a.s;tr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&fr(e,"w")){const r=to(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=aw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bp("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TL&&(this.reconnectDelay_=ea),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+tr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(m){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=g&&g.token,a=new gL(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,b=>{Ut(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(bL)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&Ut(m),u())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yf(this.interruptReasons_)&&(this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>jg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lw&&(this.reconnectDelay_=aw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zb.replace(/\./g,"-")]=1,Vm()?e["framework.cordova"]=1:mE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ou.getInstance().currentlyOnline();return Yf(this.interruptReasons_)&&e}}tr.nextPersistentConnectionId_=0;tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(lo,e),s=new ce(lo,n);return this.compare(r,s)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class NI extends Ch{static get __EMPTY_NODE(){return dc}static set __EMPTY_NODE(e){dc=e}compare(e,n){return xo(e.name,n.name)}isDefinedOn(e){throw po("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Ys,dc)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,dc)}toString(){return".key"}}const qi=new NI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Rt.EMPTY_NODE,this.right=i??Rt.EMPTY_NODE}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class IL{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fc(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new IL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t,e){return xo(t.name,e.name)}function Vg(t,e){return xo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp;function SL(t){kp=t}const CI=function(t){return typeof t=="number"?"number:"+sI(t):"string:"+t},AI=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fr(e,".sv"),"Priority must be a string or number.")}else z(t===kp||t.isEmpty(),"priority of unexpected type.");z(t===kp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cw;class Ge{static set __childrenNodeConstructor(e){cw=e}static get __childrenNodeConstructor(){return cw}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:le(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sI(this.value_):e+=this.value_,this.lazyHash_=tI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ge.VALUE_TYPE_ORDER.indexOf(n),i=Ge.VALUE_TYPE_ORDER.indexOf(r);return z(s>=0,"Unknown leaf type: "+n),z(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RI,PI;function NL(t){RI=t}function CL(t){PI=t}class AL extends Ch{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?xo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Ys,new Ge("[PRIORITY-POST]",PI))}makePost(e,n){const r=RI(e);return new ce(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const gt=new AL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=Math.log(2);class PL{constructor(e){const n=i=>parseInt(Math.log(i)/RL,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mu=function(t,e,n,r){t.sort(e);const s=function(u,h){const f=h-u;let m,g;if(f===0)return null;if(f===1)return m=t[u],g=n?n(m):m,new Ye(g,m.node,Ye.BLACK,null,null);{const b=parseInt(f/2,10)+u,N=s(u,b),R=s(b+1,h);return m=t[b],g=n?n(m):m,new Ye(g,m.node,Ye.BLACK,N,R)}},i=function(u){let h=null,f=null,m=t.length;const g=function(N,R){const P=m-N,E=m;m-=N;const w=s(P+1,E),k=t[P],D=n?n(k):k;b(new Ye(D,k.node,R,null,w))},b=function(N){h?(h.left=N,h=N):(f=N,h=N)};for(let N=0;N<u.count;++N){const R=u.nextBitIsOne(),P=Math.pow(2,u.count-(N+1));R?g(P,Ye.BLACK):(g(P,Ye.BLACK),g(P,Ye.RED))}return f},o=new PL(t.length),a=i(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd;const pi={};class Yn{static get Default(){return z(pi&&gt,"ChildrenNode.ts has not been loaded"),Qd=Qd||new Yn({".priority":pi},{".priority":gt}),Qd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=to(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return fr(this.indexSet_,e.toString())}addIndex(e,n){z(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ce.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Mu(r,e.getCompare()):a=pi;const u=e.toString(),h={...this.indexSet_};h[u]=e;const f={...this.indexes_};return f[u]=a,new Yn(f,h)}addToIndexes(e,n){const r=du(this.indexes_,(s,i)=>{const o=to(this.indexSet_,i);if(z(o,"Missing index implementation for "+i),s===pi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ce.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Mu(a,o.getCompare())}else return pi;else{const a=n.get(e.name);let u=s;return a&&(u=u.remove(new ce(e.name,a))),u.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=du(this.indexes_,s=>{if(s===pi)return s;{const i=n.get(e.name);return i?s.remove(new ce(e.name,i)):s}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class he{static get EMPTY_NODE(){return ta||(ta=new he(new Rt(Vg),null,Yn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AI(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ta}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ta:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ta:this.priorityNode_;return new he(s,o,i)}}updateChild(e,n){const r=le(e);if(r===null)return n;{z(le(e)!==".priority"||is(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(we(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(gt,(o,a)=>{n[o]=a.val(e),r++,i&&he.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CI(this.getPriority().val())+":"),this.forEachChild(gt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":tI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ce(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ce.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nl?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(gt),s=n.getIterator(gt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jL extends he{constructor(){super(new Rt(Vg),he.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Nl=new jL;Object.defineProperties(ce,{MIN:{value:new ce(lo,he.EMPTY_NODE)},MAX:{value:new ce(Ys,Nl)}});NI.__EMPTY_NODE=he.EMPTY_NODE;Ge.__childrenNodeConstructor=he;SL(Nl);CL(Nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=!0;function mt(t,e=null){if(t===null)return he.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,mt(e))}if(!(t instanceof Array)&&DL){const n=[];let r=!1;if(on(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=mt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ce(o,u)))}}),n.length===0)return he.EMPTY_NODE;const i=Mu(n,kL,o=>o.name,Vg);if(r){const o=Mu(n,gt.getCompare());return new he(i,mt(e),new Yn({".priority":o},{".priority":gt}))}else return new he(i,mt(e),Yn.Default)}else{let n=he.EMPTY_NODE;return on(t,(r,s)=>{if(fr(t,r)&&r.substring(0,1)!=="."){const i=mt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(mt(e))}}NL(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL extends Ch{constructor(e){super(),this.indexPath_=e,z(!oe(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?xo(e.name,n.name):i}makePost(e,n){const r=mt(e),s=he.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,s)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Nl);return new ce(Ys,e)}toString(){return bI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML extends Ch{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=mt(e);return new ce(n,r)}toString(){return".value"}}const LL=new ML;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return{type:"value",snapshotNode:t}}function FL(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function UL(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function uw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new Fg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gt?n="$priority":t.index_===LL?n="$value":t.index_===qi?n="$key":(z(t.index_ instanceof OL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends xI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=kl("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Lu.getListenId_(e,r),a={};this.listens_[o]=a;const u=hw(e._queryParams);this.restRequest_(i+".json",u,(h,f)=>{let m=f;if(h===404&&(m=null,h=null),h===null&&this.onDataUpdate_(i,m,!1,r),to(this.listens_,o)===a){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",s(g,null)}})}unlisten(e,n){const r=Lu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=hw(e._queryParams),r=e._path.toString(),s=new Mm;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ya(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){return{value:null,children:new Map}}function jI(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Vu());const s=t.children.get(r);e=we(e),jI(s,e,n)}}function Sp(t,e,n){t.value!==null?n(e,t.value):$L(t,(r,s)=>{const i=new Te(e.toString()+"/"+r);Sp(s,i,n)})}function $L(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&on(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=10*1e3,HL=30*1e3,qL=5*60*1e3;class GL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WL(e);const r=fw+(HL-fw)*Math.random();Ca(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;on(e,(s,i)=>{i>0&&fr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*qL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function DI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function OI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function MI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=An.ACK_USER_WRITE,this.source=DI()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Fu(pe(),n,this.revert)}}else return z(le(this.path)===e,"operationForChild called for unrelated child."),new Fu(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=An.OVERWRITE}operationForChild(e){return oe(this.path)?new Xs(this.source,pe(),this.snap.getImmediateChild(e)):new Xs(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=An.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Xs(this.source,pe(),n.value):new ll(this.source,pe(),n)}else return z(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ll(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function KL(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(zL(o.childName,o.snapshotNode))}),na(t,s,"child_removed",e,r,n),na(t,s,"child_added",e,r,n),na(t,s,"child_moved",i,r,n),na(t,s,"child_changed",e,r,n),na(t,s,"value",e,r,n),s}function na(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,u)=>YL(t,a,u)),o.forEach(a=>{const u=QL(t,a,i);s.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function QL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YL(t,e,n){if(e.childName==null||n.childName==null)throw po("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),s=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t,e){return{eventCache:t,serverCache:e}}function Aa(t,e,n,r){return LI(new Ug(e,n,r),t.serverCache)}function VI(t,e,n,r){return LI(t.eventCache,new Ug(e,n,r))}function Np(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd;const XL=()=>(Yd||(Yd=new Rt(LM)),Yd);class ve{static fromObject(e){let n=new ve(null);return on(e,(r,s)=>{n=n.set(new Te(r),s)}),n}constructor(e,n=XL()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const r=le(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(we(e),n);return i!=null?{path:Xe(new Te(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(we(e)):new ve(null)}}set(e,n){if(oe(e))return new ve(n,this.children);{const r=le(e),i=(this.children.get(r)||new ve(null)).set(we(e),n),o=this.children.insert(r,i);return new ve(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const s=r.remove(we(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ve(null):new ve(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(we(e)):null}}setTree(e,n){if(oe(e))return n;{const r=le(e),i=(this.children.get(r)||new ve(null)).setTree(we(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ve(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=le(e),o=this.children.get(i);return o?o.findOnPath_(we(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=le(e),i=this.children.get(s);return i?i.foreachOnPath_(we(e),Xe(n,s),r):new ve(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new ve(null))}}function Ra(t,e,n){if(oe(e))return new En(new ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Zt(s,e);return i=i.updateChild(o,n),new En(t.writeTree_.set(s,i))}else{const s=new ve(n),i=t.writeTree_.setTree(e,s);return new En(i)}}}function pw(t,e,n){let r=t;return on(n,(s,i)=>{r=Ra(r,Xe(e,s),i)}),r}function mw(t,e){if(oe(e))return En.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new En(n)}}function Cp(t,e){return oi(t,e)!=null}function oi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function gw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gt,(r,s)=>{e.push(new ce(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ce(r,s.value))}),e}function Qr(t,e){if(oe(e))return t;{const n=oi(t,e);return n!=null?new En(new ve(n)):new En(t.writeTree_.subtree(e))}}function Ap(t){return t.writeTree_.isEmpty()}function co(t,e){return FI(pe(),t.writeTree_,e)}function FI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(z(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=FI(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e){return HI(e,t)}function JL(t,e,n,r,s){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ra(t.visibleWrites,e,n)),t.lastWriteId=r}function ZL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function e3(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&t3(a,r.path)?s=!1:gn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return n3(t),!0;if(r.snap)t.visibleWrites=mw(t.visibleWrites,r.path);else{const a=r.children;on(a,u=>{t.visibleWrites=mw(t.visibleWrites,Xe(r.path,u))})}return!0}else return!1}function t3(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(Xe(t.path,n),e))return!0;return!1}function n3(t){t.visibleWrites=zI(t.allWrites,r3,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function r3(t){return t.visible}function zI(t,e,n){let r=En.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)gn(n,o)?(a=Zt(n,o),r=Ra(r,a,i.snap)):gn(o,n)&&(a=Zt(o,n),r=Ra(r,pe(),i.snap.getChild(a)));else if(i.children){if(gn(n,o))a=Zt(n,o),r=pw(r,a,i.children);else if(gn(o,n))if(a=Zt(o,n),oe(a))r=pw(r,pe(),i.children);else{const u=to(i.children,le(a));if(u){const h=u.getChild(we(a));r=Ra(r,pe(),h)}}}else throw po("WriteRecord should have .snap or .children")}}return r}function BI(t,e,n,r,s){if(!r&&!s){const i=oi(t.visibleWrites,e);if(i!=null)return i;{const o=Qr(t.visibleWrites,e);if(Ap(o))return n;if(n==null&&!Cp(o,pe()))return null;{const a=n||he.EMPTY_NODE;return co(o,a)}}}else{const i=Qr(t.visibleWrites,e);if(!s&&Ap(i))return n;if(!s&&n==null&&!Cp(i,pe()))return null;{const o=function(h){return(h.visible||s)&&(!r||!~r.indexOf(h.writeId))&&(gn(h.path,e)||gn(e,h.path))},a=zI(t.allWrites,o,e),u=n||he.EMPTY_NODE;return co(a,u)}}}function s3(t,e,n){let r=he.EMPTY_NODE;const s=oi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(gt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Qr(t.visibleWrites,e);return n.forEachChild(gt,(o,a)=>{const u=co(Qr(i,new Te(o)),a);r=r.updateImmediateChild(o,u)}),gw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Qr(t.visibleWrites,e);return gw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function i3(t,e,n,r,s){z(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(Cp(t.visibleWrites,i))return null;{const o=Qr(t.visibleWrites,i);return Ap(o)?s.getChild(n):co(o,s.getChild(n))}}function o3(t,e,n,r){const s=Xe(e,n),i=oi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Qr(t.visibleWrites,s);return co(o,r.getNode().getImmediateChild(n))}else return null}function a3(t,e){return oi(t.visibleWrites,e)}function l3(t,e,n,r,s,i,o){let a;const u=Qr(t.visibleWrites,e),h=oi(u,pe());if(h!=null)a=h;else if(n!=null)a=co(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],m=o.getCompare(),g=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let b=g.getNext();for(;b&&f.length<s;)m(b,r)!==0&&f.push(b),b=g.getNext();return f}else return[]}function c3(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Rp(t,e,n,r){return BI(t.writeTree,t.treePath,e,n,r)}function $I(t,e){return s3(t.writeTree,t.treePath,e)}function yw(t,e,n,r){return i3(t.writeTree,t.treePath,e,n,r)}function Uu(t,e){return a3(t.writeTree,Xe(t.treePath,e))}function u3(t,e,n,r,s,i){return l3(t.writeTree,t.treePath,e,n,r,s,i)}function zg(t,e,n){return o3(t.writeTree,t.treePath,e,n)}function WI(t,e){return HI(Xe(t.treePath,e),t.writeTree)}function HI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,uw(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,UL(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,FL(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,uw(r,e.snapshotNode,s.oldSnap));else throw po("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const qI=new d3;class Bg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ug(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Js(this.viewCache_),i=u3(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function f3(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function p3(t,e,n,r,s){const i=new h3;let o,a;if(n.type===An.OVERWRITE){const h=n;h.source.fromUser?o=Pp(t,e,h.path,h.snap,r,s,i):(z(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!oe(h.path),o=zu(t,e,h.path,h.snap,r,s,a,i))}else if(n.type===An.MERGE){const h=n;h.source.fromUser?o=g3(t,e,h.path,h.children,r,s,i):(z(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=jp(t,e,h.path,h.children,r,s,a,i))}else if(n.type===An.ACK_USER_WRITE){const h=n;h.revert?o=v3(t,e,h.path,r,s,i):o=y3(t,e,h.path,h.affectedTree,r,s,i)}else if(n.type===An.LISTEN_COMPLETE)o=_3(t,e,n.path,r,i);else throw po("Unknown operation type: "+n.type);const u=i.getChanges();return m3(e,o,u),{viewCache:o,changes:u}}function m3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Np(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(VL(Np(e)))}}function GI(t,e,n,r,s,i){const o=e.eventCache;if(Uu(r,n)!=null)return e;{let a,u;if(oe(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Js(e),f=h instanceof he?h:he.EMPTY_NODE,m=$I(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const h=Rp(r,Js(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=le(n);if(h===".priority"){z(is(n)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const m=yw(r,n,f,u);m!=null?a=t.filter.updatePriority(f,m):a=o.getNode()}else{const f=we(n);let m;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const g=yw(r,n,o.getNode(),u);g!=null?m=o.getNode().getImmediateChild(h).updateChild(f,g):m=o.getNode().getImmediateChild(h)}else m=zg(r,h,e.serverCache);m!=null?a=t.filter.updateChild(o.getNode(),h,m,f,s,i):a=o.getNode()}}return Aa(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function zu(t,e,n,r,s,i,o,a){const u=e.serverCache;let h;const f=o?t.filter:t.filter.getIndexedFilter();if(oe(n))h=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const b=u.getNode().updateChild(n,r);h=f.updateFullNode(u.getNode(),b,null)}else{const b=le(n);if(!u.isCompleteForPath(n)&&is(n)>1)return e;const N=we(n),P=u.getNode().getImmediateChild(b).updateChild(N,r);b===".priority"?h=f.updatePriority(u.getNode(),P):h=f.updateChild(u.getNode(),b,P,N,qI,null)}const m=VI(e,h,u.isFullyInitialized()||oe(n),f.filtersNodes()),g=new Bg(s,m,i);return GI(t,m,n,s,g,a)}function Pp(t,e,n,r,s,i,o){const a=e.eventCache;let u,h;const f=new Bg(s,e,i);if(oe(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Aa(e,h,!0,t.filter.filtersNodes());else{const m=le(n);if(m===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=Aa(e,h,a.isFullyInitialized(),a.isFiltered());else{const g=we(n),b=a.getNode().getImmediateChild(m);let N;if(oe(g))N=r;else{const R=f.getCompleteChild(m);R!=null?TI(g)===".priority"&&R.getChild(II(g)).isEmpty()?N=R:N=R.updateChild(g,r):N=he.EMPTY_NODE}if(b.equals(N))u=e;else{const R=t.filter.updateChild(a.getNode(),m,N,g,f,o);u=Aa(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function _w(t,e){return t.eventCache.isCompleteForChild(e)}function g3(t,e,n,r,s,i,o){let a=e;return r.foreach((u,h)=>{const f=Xe(n,u);_w(e,le(f))&&(a=Pp(t,a,f,h,s,i,o))}),r.foreach((u,h)=>{const f=Xe(n,u);_w(e,le(f))||(a=Pp(t,a,f,h,s,i,o))}),a}function vw(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function jp(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;oe(n)?h=r:h=new ve(null).setTree(n,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((m,g)=>{if(f.hasChild(m)){const b=e.serverCache.getNode().getImmediateChild(m),N=vw(t,b,g);u=zu(t,u,new Te(m),N,s,i,o,a)}}),h.children.inorderTraversal((m,g)=>{const b=!e.serverCache.isCompleteForChild(m)&&g.value===null;if(!f.hasChild(m)&&!b){const N=e.serverCache.getNode().getImmediateChild(m),R=vw(t,N,g);u=zu(t,u,new Te(m),R,s,i,o,a)}}),u}function y3(t,e,n,r,s,i,o){if(Uu(s,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(oe(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return zu(t,e,n,u.getNode().getChild(n),s,i,a,o);if(oe(n)){let h=new ve(null);return u.getNode().forEachChild(qi,(f,m)=>{h=h.set(new Te(f),m)}),jp(t,e,n,h,s,i,a,o)}else return e}else{let h=new ve(null);return r.foreach((f,m)=>{const g=Xe(n,f);u.isCompleteForPath(g)&&(h=h.set(f,u.getNode().getChild(g)))}),jp(t,e,n,h,s,i,a,o)}}function _3(t,e,n,r,s){const i=e.serverCache,o=VI(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return GI(t,o,n,r,qI,s)}function v3(t,e,n,r,s,i){let o;if(Uu(r,n)!=null)return e;{const a=new Bg(r,e,s),u=e.eventCache.getNode();let h;if(oe(n)||le(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Rp(r,Js(e));else{const m=e.serverCache.getNode();z(m instanceof he,"serverChildren would be complete if leaf node"),f=$I(r,m)}f=f,h=t.filter.updateFullNode(u,f,i)}else{const f=le(n);let m=zg(r,f,e.serverCache);m==null&&e.serverCache.isCompleteForChild(f)&&(m=u.getImmediateChild(f)),m!=null?h=t.filter.updateChild(u,f,m,we(n),a,i):e.eventCache.getNode().hasChild(f)?h=t.filter.updateChild(u,f,he.EMPTY_NODE,we(n),a,i):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rp(r,Js(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,i)))}return o=e.serverCache.isFullyInitialized()||Uu(r,pe())!=null,Aa(e,h,o,t.filter.filtersNodes())}}function w3(t,e){const n=Js(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function ww(t,e,n,r){e.type===An.MERGE&&e.source.queryId!==null&&(z(Js(t.viewCache_),"We should always have a full cache before handling merges"),z(Np(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=p3(t.processor_,s,e,n,r);return f3(t.processor_,i.viewCache),z(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,x3(t,i.changes,i.viewCache.eventCache.getNode())}function x3(t,e,n,r){const s=t.eventRegistrations_;return KL(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xw;function E3(t){z(!xw,"__referenceConstructor has already been defined"),xw=t}function $g(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return z(i!=null,"SyncTree gave us an op for an invalid query."),ww(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(ww(o,e,n,r));return i}}function Wg(t,e){let n=null;for(const r of t.views.values())n=n||w3(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew;function T3(t){z(!Ew,"__referenceConstructor has already been defined"),Ew=t}class Tw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=c3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b3(t,e,n,r,s){return JL(t.pendingWriteTree_,e,n,r,s),s?Rh(t,new Xs(DI(),e,n)):[]}function Pi(t,e,n=!1){const r=ZL(t.pendingWriteTree_,e);if(e3(t.pendingWriteTree_,e)){let i=new ve(null);return r.snap!=null?i=i.set(pe(),!0):on(r.children,o=>{i=i.set(new Te(o),!0)}),Rh(t,new Fu(r.path,i,n))}else return[]}function Ah(t,e,n){return Rh(t,new Xs(OI(),e,n))}function I3(t,e,n){const r=ve.fromObject(n);return Rh(t,new ll(OI(),e,r))}function k3(t,e,n,r){const s=XI(t,r);if(s!=null){const i=JI(s),o=i.path,a=i.queryId,u=Zt(o,e),h=new Xs(MI(a),u,n);return ZI(t,o,h)}else return[]}function S3(t,e,n,r){const s=XI(t,r);if(s){const i=JI(s),o=i.path,a=i.queryId,u=Zt(o,e),h=ve.fromObject(n),f=new ll(MI(a),u,h);return ZI(t,o,f)}else return[]}function KI(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Zt(o,e),h=Wg(a,u);if(h)return h});return BI(s,e,i,n,!0)}function Rh(t,e){return QI(e,t.syncPointTree_,null,UI(t.pendingWriteTree_,pe()))}function QI(t,e,n,r){if(oe(t.path))return YI(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=Wg(s,pe()));let i=[];const o=le(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,f=WI(r,o);i=i.concat(QI(a,u,h,f))}return s&&(i=i.concat($g(s,t,r,n))),i}}function YI(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=Wg(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=WI(r,o),f=t.operationForChild(o);f&&(i=i.concat(YI(f,a,u,h)))}),s&&(i=i.concat($g(s,t,r,n))),i}function XI(t,e){return t.tagToQueryMap.get(e)}function JI(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function ZI(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const s=UI(t.pendingWriteTree_,e);return $g(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hg(n)}node(){return this.node_}}class qg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new qg(this.syncTree_,n)}node(){return KI(this.syncTree_,this.path_)}}const N3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bw=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return A3(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},A3=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const s=e.node();if(z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},R3=function(t,e,n,r){return Gg(e,new qg(n,t),r)},P3=function(t,e,n){return Gg(t,new Hg(e),n)};function Gg(t,e,n){const r=t.getPriority().val(),s=bw(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=bw(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ge(a,mt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ge(s))),o.forEachChild(gt,(a,u)=>{const h=Gg(u,e.getImmediateChild(a),n);h!==u&&(i=i.updateImmediateChild(a,h))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qg(t,e){let n=e instanceof Te?e:new Te(e),r=t,s=le(n);for(;s!==null;){const i=to(r.node.children,s)||{children:{},childCount:0};r=new Kg(s,r,i),n=we(n),s=le(n)}return r}function Eo(t){return t.node.value}function ek(t,e){t.node.value=e,Dp(t)}function tk(t){return t.node.childCount>0}function j3(t){return Eo(t)===void 0&&!tk(t)}function Ph(t,e){on(t.node.children,(n,r)=>{e(new Kg(n,t,r))})}function nk(t,e,n,r){n&&e(t),Ph(t,s=>{nk(s,e,!0)})}function D3(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cl(t){return new Te(t.parent===null?t.name:Cl(t.parent)+"/"+t.name)}function Dp(t){t.parent!==null&&O3(t.parent,t.name,t)}function O3(t,e,n){const r=j3(n),s=fr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Dp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Dp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3=/[\[\].#$\/\u0000-\u001F\u007F]/,L3=/[\[\].#$\u0000-\u001F\u007F]/,Xd=10*1024*1024,rk=function(t){return typeof t=="string"&&t.length!==0&&!M3.test(t)},V3=function(t){return typeof t=="string"&&t.length!==0&&!L3.test(t)},F3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),V3(t)},sk=function(t,e,n){const r=n instanceof Te?new _L(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Is(r));if(typeof e=="function")throw new Error(t+"contains a function "+Is(r)+" with contents = "+e.toString());if(nI(e))throw new Error(t+"contains "+e.toString()+" "+Is(r));if(typeof e=="string"&&e.length>Xd/3&&uh(e)>Xd)throw new Error(t+"contains a string greater than "+Xd+" utf8 bytes "+Is(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(on(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!rk(o)))throw new Error(t+" contains an invalid key ("+o+") "+Is(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vL(r,o),sk(t,a,r),wL(r)}),s&&i)throw new Error(t+' contains ".value" child '+Is(r)+" in addition to actual children.")}},U3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!F3(n))throw new Error(rA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function B3(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!kI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ai(t,e,n){B3(t,n),$3(t,r=>gn(r,e)||gn(e,r))}function $3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(W3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function W3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Na&&pt("event: "+n.toString()),Sl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3="repo_interrupt",q3=25;class G3{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new z3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vu(),this.transactionQueueTree_=new Kg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K3(t,e,n){if(t.stats_=Og(t.repoInfo_),t.forceRestClient_||$M())t.server_=new Lu(t.repoInfo_,(r,s,i,o)=>{Iw(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tr(t.repoInfo_,e,(r,s,i,o)=>{Iw(t,r,s,i,o)},r=>{kw(t,r)},r=>{Y3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KM(t.repoInfo_,()=>new GL(t.stats_,t.server_)),t.infoData_=new BL,t.infoSyncTree_=new Tw({startListening:(r,s,i,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ah(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yg(t,"connected",!1),t.serverSyncTree_=new Tw({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,u)=>{const h=o(a,u);ai(t.eventQueue_,r._path,h)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Q3(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ik(t){return N3({timestamp:Q3(t)})}function Iw(t,e,n,r,s){t.dataUpdateCount++;const i=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=du(n,h=>mt(h));o=S3(t.serverSyncTree_,i,u,s)}else{const u=mt(n);o=k3(t.serverSyncTree_,i,u,s)}else if(r){const u=du(n,h=>mt(h));o=I3(t.serverSyncTree_,i,u)}else{const u=mt(n);o=Ah(t.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=Jg(t,i)),ai(t.eventQueue_,a,o)}function kw(t,e){Yg(t,"connected",e),e===!1&&J3(t)}function Y3(t,e){on(e,(n,r)=>{Yg(t,n,r)})}function Yg(t,e,n){const r=new Te("/.info/"+e),s=mt(n);t.infoData_.updateSnapshot(r,s);const i=Ah(t.infoSyncTree_,r,s);ai(t.eventQueue_,r,i)}function X3(t){return t.nextWriteId_++}function J3(t){ok(t,"onDisconnectEvents");const e=ik(t),n=Vu();Sp(t.onDisconnect_,pe(),(s,i)=>{const o=R3(s,i,t.serverSyncTree_,e);jI(n,s,o)});let r=[];Sp(n,pe(),(s,i)=>{r=r.concat(Ah(t.serverSyncTree_,s,i));const o=nV(t,s);Jg(t,o)}),t.onDisconnect_=Vu(),ai(t.eventQueue_,pe(),r)}function Z3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(H3)}function ok(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function ak(t,e,n){return KI(t.serverSyncTree_,e,n)||he.EMPTY_NODE}function Xg(t,e=t.transactionQueueTree_){if(e||jh(t,e),Eo(e)){const n=ck(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&eV(t,Cl(e),n)}else tk(e)&&Ph(e,n=>{Xg(t,n)})}function eV(t,e,n){const r=n.map(h=>h.currentWriteId),s=ak(t,e,r);let i=s;const o=s.hash();for(let h=0;h<n.length;h++){const f=n[h];z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const m=Zt(e,f.path);i=i.updateChild(m,f.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;t.server_.put(u.toString(),a,h=>{ok(t,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const m=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(Pi(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&m.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();jh(t,Qg(t.transactionQueueTree_,e)),Xg(t,t.transactionQueueTree_),ai(t.eventQueue_,e,f);for(let g=0;g<m.length;g++)Sl(m[g])}else{if(h==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{Ut("transaction at "+u.toString()+" failed: "+h);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=h}Jg(t,e)}},o)}function Jg(t,e){const n=lk(t,e),r=Cl(n),s=ck(t,n);return tV(t,s,r),r}function tV(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=Zt(n,u.path);let f=!1,m;if(z(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,m=u.abortReason,s=s.concat(Pi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=q3)f=!0,m="maxretry",s=s.concat(Pi(t.serverSyncTree_,u.currentWriteId,!0));else{const g=ak(t,u.path,o);u.currentInputSnapshot=g;const b=e[a].update(g.val());if(b!==void 0){sk("transaction failed: Data returned ",b,u.path);let N=mt(b);typeof b=="object"&&b!=null&&fr(b,".priority")||(N=N.updatePriority(g.getPriority()));const P=u.currentWriteId,E=ik(t),w=P3(N,g,E);u.currentOutputSnapshotRaw=N,u.currentOutputSnapshotResolved=w,u.currentWriteId=X3(t),o.splice(o.indexOf(P),1),s=s.concat(b3(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),s=s.concat(Pi(t.serverSyncTree_,P,!0))}else f=!0,m="nodata",s=s.concat(Pi(t.serverSyncTree_,u.currentWriteId,!0))}ai(t.eventQueue_,n,s),s=[],f&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(m),!1,null))))}jh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Sl(r[a]);Xg(t,t.transactionQueueTree_)}function lk(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&Eo(r)===void 0;)r=Qg(r,n),e=we(e),n=le(e);return r}function ck(t,e){const n=[];return uk(t,e,n),n.sort((r,s)=>r.order-s.order),n}function uk(t,e,n){const r=Eo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Ph(e,s=>{uk(t,s,n)})}function jh(t,e){const n=Eo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ek(e,n.length>0?n:void 0)}Ph(e,r=>{jh(t,r)})}function nV(t,e){const n=Cl(lk(t,e)),r=Qg(t.transactionQueueTree_,e);return D3(r,s=>{Jd(t,s)}),Jd(t,r),nk(r,s=>{Jd(t,s)}),n}function Jd(t,e){const n=Eo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Pi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?ek(e,void 0):n.length=i+1,ai(t.eventQueue_,Cl(e),s);for(let o=0;o<r.length;o++)Sl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sw=function(t,e){const n=iV(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pI(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Te(n.pathString)}},iV=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let f=t.indexOf("/");f===-1&&(f=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(f,m)),f<m&&(s=rV(t.substring(f,m)));const g=sV(t.substring(Math.min(t.length,m)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const b=e.slice(0,h);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),n=e.substring(N+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:TI(this._path)}get ref(){return new To(this._repo,this._path)}get _queryIdentifier(){const e=dw(this._queryParams),n=jg(e);return n==="{}"?"default":n}get _queryObject(){return dw(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Zg))return!1;const n=this._repo===e._repo,r=kI(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+yL(this._path)}}class To extends Zg{constructor(e,n){super(e,n,new Fg,!1)}get parent(){const e=II(this._path);return e===null?null:new To(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}E3(To);T3(To);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV="FIREBASE_DATABASE_EMULATOR_HOST",Op={};let aV=!1;function lV(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=us(i);t.repoInfo_=new pI(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function cV(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sw(i,s),a=o.repoInfo,u;typeof process<"u"&&Gv&&(u=Gv[oV]),u?(i=`http://${u}?ns=${a.namespace}`,o=Sw(i,s),a=o.repoInfo):o.repoInfo.secure;const h=new HM(t.name,t.options,e);U3("Invalid Firebase Database URL",o),oe(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=hV(a,t,h,new WM(t,n));return new dV(f,t)}function uV(t,e){const n=Op[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Z3(t),delete n[t.key]}function hV(t,e,n,r){let s=Op[e.name];s||(s={},Op[e.name]=s);let i=s[t.toURLString()];return i&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new G3(t,aV,n,r),s[t.toURLString()]=i,i}class dV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new To(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function fV(t=ml(),e){const n=pr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Om("database");r&&pV(n,...r)}return n}function pV(t,e,n,r={}){t=Fe(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&or(r,i.repoInfo_.emulatorOptions))return;hr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Vc(Vc.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Lm(r.mockUserToken,t.app.options.projectId);o=new Vc(a)}us(e)&&hh(e),lV(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(t){CM(hs),rn(new $t("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return cV(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),yt(Kv,Qv,t),yt(Kv,Qv,"esm2020")}tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="firebasestorage.googleapis.com",gV="storageBucket",yV=2*60*1e3,_V=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends an{constructor(e,n,r=0){super(Zd(e),`Firebase Storage: ${n} (${Zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fn||(Fn={}));function Zd(t){return"storage/"+t}function vV(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Fn.UNKNOWN,t)}function wV(){return new Un(Fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xV(){return new Un(Fn.CANCELED,"User canceled the upload/download.")}function EV(t){return new Un(Fn.INVALID_URL,"Invalid URL '"+t+"'.")}function TV(t){return new Un(Fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Nw(t){return new Un(Fn.INVALID_ARGUMENT,t)}function dk(){return new Un(Fn.APP_DELETED,"The Firebase app was deleted.")}function bV(t){return new Un(Fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw TV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),N={bucket:1,path:3},R=n===hk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",E=new RegExp(`^https?://${R}/${s}/${P}`,"i"),k=[{regex:a,indices:u,postModify:i},{regex:b,indices:N,postModify:h},{regex:E,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<k.length;D++){const F=k[D],M=F.regex.exec(e);if(M){const v=M[F.indices.bucket];let _=M[F.indices.path];_||(_=""),r=new yn(v,_),F.postModify(r);break}}if(r==null)throw EV(e);return r}}class IV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function m(P){s=setTimeout(()=>{s=null,t(b,u())},P)}function g(){i&&clearTimeout(i)}function b(P,...E){if(h){g();return}if(P){g(),f.call(null,P,...E);return}if(u()||o){g(),f.call(null,P,...E);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,m(k)}let N=!1;function R(P){N||(N=!0,g(),!h&&(s!==null?(P||(a=2),clearTimeout(s),m(0)):P||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function SV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){return t!==void 0}function Cw(t,e,n,r){if(r<e)throw Nw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nw(`Invalid value for '${t}'. Expected ${n} or less.`)}function CV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Bu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bu||(Bu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,s,i,o,a,u,h,f,m,g=!0,b=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,R)=>{this.resolve_=N,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new pc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Bu.NO_ERROR,u=i.getStatus();if(!a||AV(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Bu.ABORT;r(!1,new pc(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new pc(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());NV(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=vV();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?dk():xV();o(u)}else{const u=wV();o(u)}};this.canceled_?n(!1,new pc(!1,null,!0)):this.backoffId_=kV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MV(t,e,n,r,s,i,o=!0,a=!1){const u=CV(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return DV(f,e),PV(f,n),jV(f,i),OV(f,r),new RV(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $u(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VV(this._location.path)}get storage(){return this._service}get parent(){const e=LV(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new $u(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bV(e)}}function Aw(t,e){const n=e==null?void 0:e[gV];return n==null?null:yn.makeFromBucketSpec(n,t)}function FV(t,e,n,r={}){t.host=`${e}:${n}`;const s=us(e);s&&hh(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Lm(i,t.app.options.projectId))}class UV{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=hk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yV,this._maxUploadRetryTime=_V,this._requests=new Set,s!=null?this._bucket=yn.makeFromBucketSpec(s,this._host):this._bucket=Aw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=Aw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $u(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new IV(dk());{const o=MV(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Rw="@firebase/storage",Pw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="storage";function zV(t=ml(),e){t=Fe(t);const r=pr(t,fk).getImmediate({identifier:e}),s=Om("storage");return s&&BV(r,...s),r}function BV(t,e,n,r={}){FV(t,e,n,r)}function $V(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new UV(n,r,s,e,hs)}function WV(){rn(new $t(fk,$V,"PUBLIC").setMultipleInstances(!0)),yt(Rw,Pw,""),yt(Rw,Pw,"esm2020")}WV();const HV={apiKey:"AIzaSyBMORLrSfKjx8zDNbmWmyPNw5AOJgA--bY",authDomain:"nykaa-beautyloop.firebaseapp.com",databaseURL:"https://nykaa-beautyloop-default-rtdb.firebaseio.com",projectId:"nykaa-beautyloop",storageBucket:"nykaa-beautyloop.firebasestorage.app",messagingSenderId:"859652462402",appId:"1:859652462402:web:9829ecff213968ae945adb",measurementId:"G-GSTYN3YE4C"},Al=EE(HV);typeof window<"u"&&DP(Al);const Pa=tD(Al),Fc=dM(Al);fV(Al);zV(Al);function qV({onLogin:t}){const[e,n]=K.useState(!1),[r,s]=K.useState(""),[i,o]=K.useState(""),[a,u]=K.useState(""),[h,f]=K.useState(""),[m,g]=K.useState(!1),b=async R=>{if(R.preventDefault(),!(!i||!a)&&!(e&&!r)){g(!0),f("");try{if(e){const E=(await Lj(Pa,i,a)).user;await Uj(E,{displayName:r}),await qv(Mc(Fc,"users",E.uid),{name:r,email:i,points:500,tier:"Silver",createdAt:new Date().toISOString()}),t(r)}else{const P=await Vj(Pa,i,a);t(P.user.displayName||"Guest")}}catch(P){console.error(P);let E="Authentication failed. Please try again.";P.code==="auth/email-already-in-use"&&(E="Email already in use."),P.code==="auth/wrong-password"&&(E="Incorrect password."),P.code==="auth/user-not-found"&&(E="No user found with this email."),f(E)}finally{g(!0),setTimeout(()=>g(!1),500)}}},N=async()=>{g(!0),f("");const R=new Hn;try{const E=(await u4(Pa,R)).user;(await Jb(Mc(Fc,"users",E.uid))).exists()||await qv(Mc(Fc,"users",E.uid),{name:E.displayName,email:E.email,points:500,tier:"Silver",createdAt:new Date().toISOString()}),t(E.displayName||"Guest")}catch(P){console.error(P),f("Google Sign-In failed. Please try again.")}finally{g(!1)}};return c.jsxs("div",{className:"min-h-full flex flex-col bg-white animate-pop",children:[c.jsxs("div",{className:"h-64 bg-nykaa-gradient rounded-b-[40px] relative overflow-hidden flex flex-col justify-center items-center text-white px-6 text-center",children:[c.jsx(Bt,{className:"absolute top-10 right-10 w-24 h-24 opacity-10"}),c.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/30",children:c.jsx(Bt,{className:"w-8 h-8 text-white"})}),c.jsx("h1",{className:"text-3xl font-bold font-serif tracking-wide",children:"BeautyLoop"}),c.jsx("p",{className:"text-sm opacity-90 mt-2 max-w-[250px]",children:"Your personalized beauty rewards, routines, and community."})]}),c.jsxs("div",{className:"flex-1 px-6 pt-10 pb-8 flex flex-col",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:e?"Create an Account":"Welcome back"}),c.jsx("p",{className:"text-gray-500 text-sm mb-8",children:e?"Sign up to start earning Glow Rewards.":"Enter your details to access your Glow Rewards."}),c.jsxs("form",{onSubmit:b,className:"space-y-5",children:[e&&c.jsxs("div",{className:"animate-fadeIn",children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1",children:"Full Name"}),c.jsx("input",{type:"text",placeholder:"E.g. Priya Singh",className:"w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-nykaa-pink focus:bg-white transition-colors",value:r,onChange:R=>s(R.target.value),required:e})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1",children:"Email or Phone"}),c.jsx("input",{type:"text",placeholder:"Enter your email",className:"w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-nykaa-pink focus:bg-white transition-colors",value:i,onChange:R=>o(R.target.value),required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1",children:"Password"}),c.jsx("input",{type:"password",placeholder:"••••••••",className:"w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-nykaa-pink focus:bg-white transition-colors",value:a,onChange:R=>u(R.target.value),required:!0})]}),h&&c.jsxs("div",{className:"bg-rose-50 text-rose-600 p-4 rounded-2xl text-xs font-bold flex items-center gap-2 animate-shake",children:[c.jsx(v2,{className:"w-4 h-4 shrink-0"}),h]}),!e&&c.jsx("div",{className:"flex justify-end",children:c.jsx("button",{type:"button",className:"text-xs font-bold text-nykaa-pink hover:underline",children:"Forgot password?"})}),c.jsx("button",{type:"submit",disabled:m||!i||e&&!r,className:"w-full bg-black text-white font-bold py-4 rounded-2xl mt-4 flex items-center justify-center gap-2 hover:bg-nykaa-pink transition-colors disabled:opacity-70 disabled:hover:bg-black",children:m?c.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}):c.jsxs(c.Fragment,{children:[e?"Create Account":"Sign In"," ",c.jsx(Jn,{className:"w-5 h-5"})]})})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"relative flex items-center justify-center mb-6",children:[c.jsx("div",{className:"border-t border-gray-200 w-full"}),c.jsx("span",{className:"bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest absolute",children:"Or continue with"})]}),c.jsxs("button",{onClick:N,disabled:m,className:"w-full bg-white border border-gray-200 text-gray-700 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm active:scale-95 transition-transform",children:[c.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",className:"w-5 h-5"}),e?"Sign Up with Google":"Sign In with Google"]})]}),c.jsx("div",{className:"mt-auto pt-8 text-center",children:c.jsxs("p",{className:"text-sm text-gray-500",children:[e?"Already have an account?":"Don't have an account?"," "," ",c.jsx("button",{onClick:()=>n(!e),className:"font-bold text-nykaa-pink hover:underline",children:e?"Sign In":"Sign Up"})]})})]})]})}function GV({points:t,message:e,onClose:n}){const[r,s]=K.useState(!1);return K.useEffect(()=>{s(!0);const i=setTimeout(()=>s(!1),2500);return()=>clearTimeout(i)},[]),c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-5 animate-fadeIn",children:c.jsxs("div",{className:"bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 w-full max-w-sm relative text-center shadow-[0_20px_50px_rgba(255,63,108,0.2)] border border-white animate-scaleIn",children:[c.jsx("button",{onClick:n,className:"absolute right-4 top-4 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full p-1.5 transition-colors",children:c.jsx(lh,{className:"w-5 h-5"})}),c.jsxs("div",{className:"relative w-24 h-24 mx-auto mb-6 animate-float-up",children:[c.jsx("div",{className:"absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"}),c.jsx("div",{className:"relative w-full h-full bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white",children:c.jsx(H1,{className:"w-12 h-12 text-white"})})]}),c.jsx("h2",{className:"text-3xl font-display font-bold text-gray-900 mb-2",children:"Success!"}),c.jsx("p",{className:"text-gray-500 mb-6 font-medium",children:e}),c.jsxs("div",{className:"bg-gradient-to-br from-[#fff0f3] to-white border border-nykaa-pink/20 rounded-2xl p-5 mb-8 shadow-sm relative overflow-hidden group",children:[c.jsx("div",{className:"absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500",children:c.jsx(Bt,{className:"w-20 h-20 text-nykaa-pink"})}),c.jsx("p",{className:"text-sm font-bold text-nykaa-pink uppercase tracking-wider mb-1",children:"Glow Rewards"}),c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsxs("span",{className:"text-4xl font-black text-gray-900 animate-count-up",children:["+",t]}),c.jsx("span",{className:"text-lg font-bold text-gray-500 mt-2",children:"Pts"})]})]}),c.jsx("button",{onClick:n,className:"w-full bg-nykaa-gradient text-white font-bold py-4 rounded-xl hover:shadow-nykaa-lg transition-all active:scale-95 text-lg",children:"Awesome"}),r&&c.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]",children:[...Array(20)].map((i,o)=>c.jsx("div",{className:"confetti-piece",style:{left:`${Math.random()*100}%`,top:"-10px",animationDuration:`${Math.random()*1.5+.8}s`,animationDelay:`${Math.random()*.2}s`,backgroundColor:["#ff3f6c","#fc2779","#fcd34d","#34d399","#60a5fa"][Math.floor(Math.random()*5)],transform:`rotate(${Math.random()*360}deg)`}},o))})]})})}const xs=[{label:"+50 Pts",color:"#ff3f6c",value:50,type:"points"},{label:"Free Ship",color:"#ff7eb3",value:0,type:"shipping"},{label:"₹100 Off",color:"#ff3f6c",value:100,type:"coupon"},{label:"+20 Pts",color:"#ff7eb3",value:20,type:"points"},{label:"Mystery!",color:"#ff3f6c",value:75,type:"mystery"},{label:"₹50 Off",color:"#ff7eb3",value:50,type:"coupon"},{label:"+100 Pts",color:"#ff3f6c",value:100,type:"points"},{label:"2X Points",color:"#ff7eb3",value:0,type:"multiplier"}];function KV({onClose:t,onReward:e}){const[n,r]=K.useState(!1),[s,i]=K.useState(0),[o,a]=K.useState(null),u=()=>{if(n)return;r(!0),a(null);const f=Math.floor(Math.random()*xs.length),m=360/xs.length,b=360*5+(360-f*m-m/2);i(b),setTimeout(()=>{r(!1),a(xs[f]),xs[f].type==="points"&&e(xs[f].value)},4e3)},h=360/xs.length;return c.jsxs("div",{className:"fixed inset-0 z-[200] flex items-center justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:n?void 0:t}),c.jsxs("div",{className:"relative z-10 w-[340px] max-w-[90vw] animate-pop",children:[c.jsx("button",{onClick:t,className:"absolute -top-2 -right-2 z-20 bg-white rounded-full p-1.5 shadow-lg",children:c.jsx(lh,{className:"w-5 h-5 text-gray-600"})}),c.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-2xl text-center",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-1",children:"Daily Spin 🎡"}),c.jsx("p",{className:"text-xs text-gray-500 mb-5",children:"Try your luck! 1 free spin every day."}),c.jsxs("div",{className:"relative w-[250px] h-[250px] mx-auto mb-6",children:[c.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-900"}),c.jsx("div",{className:"w-full h-full rounded-full border-4 border-gray-900 overflow-hidden relative shadow-xl",style:{transform:`rotate(${s}deg)`,transition:n?"transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)":"none"},children:c.jsx("svg",{viewBox:"0 0 200 200",className:"w-full h-full",children:xs.map((f,m)=>{const g=m*h,b=(m+1)*h,N=(g-90)*(Math.PI/180),R=(b-90)*(Math.PI/180),P=100+100*Math.cos(N),E=100+100*Math.sin(N),w=100+100*Math.cos(R),k=100+100*Math.sin(R),D=h>180?1:0,F=(g+b)/2,M=(F-90)*(Math.PI/180),v=100+60*Math.cos(M),_=100+60*Math.sin(M);return c.jsxs("g",{children:[c.jsx("path",{d:`M100,100 L${P},${E} A100,100 0 ${D},1 ${w},${k} Z`,fill:f.color,stroke:"white",strokeWidth:"1"}),c.jsx("text",{x:v,y:_,fill:"white",fontSize:"9",fontWeight:"bold",textAnchor:"middle",dominantBaseline:"middle",transform:`rotate(${F}, ${v}, ${_})`,children:f.label})]},m)})})}),c.jsx("button",{onClick:u,disabled:n||o,className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 text-white rounded-full font-bold text-xs shadow-lg hover:bg-nykaa-pink transition-colors disabled:opacity-60 z-10 border-4 border-white",children:n?"...":"SPIN"})]}),o&&c.jsxs("div",{className:"animate-pop bg-nykaa-pink/10 rounded-2xl p-4 border border-nykaa-pink/20",children:[c.jsxs("p",{className:"text-lg font-bold text-nykaa-pink",children:["🎉 You won: ",o.label,"!"]}),c.jsx("button",{onClick:t,className:"mt-3 bg-black text-white font-bold py-2.5 px-6 rounded-xl text-sm hover:bg-nykaa-pink transition-colors",children:"Claim Reward"})]})]})]})]})}function QV({onClose:t,onSubmit:e}){const[n,r]=K.useState(0),[s,i]=K.useState(0),o={name:"Cetaphil Gentle Skin Cleanser",brand:"Cetaphil",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"},a=()=>{n>0&&(e(100),t())};return c.jsxs("div",{className:"fixed inset-0 z-[200] flex items-end sm:items-center justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:t}),c.jsx("div",{className:"relative z-10 w-full max-w-md mx-4 mb-0 sm:mb-0 animate-pop",children:c.jsxs("div",{className:"bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl",children:[c.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",children:c.jsx(lh,{className:"w-4 h-4 text-gray-500"})}),c.jsxs("div",{className:"text-center mb-5",children:[c.jsx("div",{className:"w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-yellow-200",children:c.jsx(eo,{className:"w-6 h-6 text-yellow-500 fill-current"})}),c.jsx("h2",{className:"text-lg font-bold text-gray-900",children:"Review & Earn ⭐"}),c.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Rate your recent purchase and earn ",c.jsx("span",{className:"font-bold text-nykaa-pink",children:"100 Glow Points"})]})]}),c.jsxs("div",{className:"flex items-center gap-4 bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-100",children:[c.jsx("img",{src:o.image,alt:o.name,className:"w-14 h-14 rounded-xl object-cover bg-white shadow-sm"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase",children:o.brand}),c.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight",children:o.name})]})]}),c.jsx("div",{className:"flex justify-center gap-2 mb-5",children:[1,2,3,4,5].map(u=>c.jsx("button",{onMouseEnter:()=>i(u),onMouseLeave:()=>i(0),onClick:()=>r(u),className:"transition-transform hover:scale-125 active:scale-90",children:c.jsx(eo,{className:`w-10 h-10 transition-colors ${u<=(s||n)?"text-yellow-400 fill-current drop-shadow-sm":"text-gray-200"}`})},u))}),n>0&&c.jsx("textarea",{placeholder:"Tell us more about your experience (optional)...",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-nykaa-pink resize-none h-20 mb-4 animate-fadeIn"}),c.jsx("button",{onClick:a,disabled:n===0,className:"w-full bg-black text-white font-bold py-3.5 rounded-2xl text-sm shadow-md hover:bg-nykaa-pink transition-colors disabled:opacity-40 disabled:hover:bg-black flex items-center justify-center gap-2",children:"Submit Review — Earn 100 Pts"})]})})]})}function YV({onClose:t,onClaim:e}){return c.jsxs("div",{className:"fixed inset-0 z-[200] flex items-center justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),c.jsx("div",{className:"relative z-10 w-[340px] max-w-[90vw] animate-pop",children:c.jsxs("div",{className:"bg-white rounded-[2.5rem] p-8 shadow-2xl text-center overflow-hidden relative",children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-2 bg-nykaa-gradient"}),c.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",children:c.jsx(lh,{className:"w-4 h-4 text-gray-500"})}),c.jsx("div",{className:"w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md animate-bounce-gentle",children:c.jsx(w2,{className:"w-10 h-10 text-nykaa-pink"})}),c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Happy Birthday! 🎂"}),c.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"It's your special month! We've prepared some treats just for you."}),c.jsxs("div",{className:"space-y-3 mb-8",children:[c.jsxs("div",{className:"flex items-center gap-3 bg-nykaa-pink/5 border border-nykaa-pink/10 p-4 rounded-2xl",children:[c.jsx(Jr,{className:"w-5 h-5 text-nykaa-pink"}),c.jsxs("div",{className:"text-left",children:[c.jsx("p",{className:"text-xs font-bold text-gray-900",children:"Free Birthday Gift"}),c.jsx("p",{className:"text-[10px] text-gray-500",children:"Add to your next order"})]})]}),c.jsxs("div",{className:"flex items-center gap-3 bg-nykaa-pink/5 border border-nykaa-pink/10 p-4 rounded-2xl",children:[c.jsx("div",{className:"w-5 h-5 rounded-full bg-nykaa-pink flex items-center justify-center text-[10px] text-white font-bold",children:"₹"}),c.jsxs("div",{className:"text-left",children:[c.jsx("p",{className:"text-xs font-bold text-gray-900",children:"₹250 Coupon"}),c.jsx("p",{className:"text-[10px] text-gray-500",children:"Valid for 30 days"})]})]})]}),c.jsxs("button",{onClick:()=>e(250),className:"w-full bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors flex items-center justify-center gap-2",children:["Claim My Rewards ",c.jsx(Jn,{className:"w-5 h-5"})]})]})})]})}function XV({currentScreen:t,navigate:e}){const n=[{id:"home",icon:I2,label:"Home"},{id:"rewards",icon:eo,label:"Rewards"},{id:"reorder",icon:qt,label:"Reorder"},{id:"hub",icon:sE,label:"Hub"},{id:"account",icon:Kf,label:"Account"}];return c.jsx("div",{className:"absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe z-50",children:c.jsx("div",{className:"flex justify-around items-center h-16",children:n.map(r=>{const s=r.icon,i=t===r.id;return c.jsxs("button",{onClick:()=>e(r.id),className:`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${i?"text-nykaa-pink":"text-gray-400 hover:text-gray-600"}`,children:[c.jsx(s,{className:`w-6 h-6 ${i?"fill-nykaa-pink/20":""}`,strokeWidth:i?2.5:2}),c.jsx("span",{className:`text-[10px] font-medium ${i?"font-bold":""}`,children:r.label})]},r.id)})})})}function JV(){const[t,e]=K.useState("home"),[n,r]=K.useState(()=>localStorage.getItem("isAuthenticated")==="true"),[s,i]=K.useState(()=>localStorage.getItem("userName")||"Aditi"),[o,a]=K.useState(null),[u,h]=K.useState(!0),[f,m]=K.useState(!1),[g,b]=K.useState(!1),[N,R]=K.useState(!1);K.useEffect(()=>{const M=$j(Pa,async v=>{if(v){r(!0),i(v.displayName||"Guest"),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("userName",v.displayName||"Guest");try{const _=await Jb(Mc(Fc,"users",v.uid));_.exists()&&setPoints(_.data().points||500)}catch(_){console.error("Error fetching user data:",_)}}else r(!1),i("Guest"),localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userName")});return()=>M()},[]),K.useEffect(()=>{localStorage.setItem("nykaa_points",points.toString())},[points]),K.useEffect(()=>{localStorage.setItem("nykaa_missions",JSON.stringify(missions))},[missions]),K.useEffect(()=>{const M=setTimeout(()=>{h(!1)},2e3);return()=>clearTimeout(M)},[]),K.useEffect(()=>{if(n&&!u&&!sessionStorage.getItem("seenReview")){const v=setTimeout(()=>{b(!0),sessionStorage.setItem("seenReview","true")},12e3);return()=>clearTimeout(v)}},[n,u]),K.useEffect(()=>{if(n&&!u&&!sessionStorage.getItem("seenBirthday")){const v=setTimeout(()=>{R(!0),sessionStorage.setItem("seenBirthday","true")},5e3);return()=>clearTimeout(v)}},[n,u]);const P=M=>{e(M),window.scrollTo({top:0,behavior:"smooth"})},E=M=>{r(!0),localStorage.setItem("isAuthenticated","true"),M&&(i(M),localStorage.setItem("userName",M))},w=async()=>{try{await Wj(Pa),r(!1),localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userName"),e("home")}catch(M){console.error("Logout failed:",M)}},k=(M,v="Awesome!")=>{a({points:M,message:v}),setPoints(_=>_+M)},D=M=>{setPoints(v=>v+M)},F=()=>{switch(t){case"home":return c.jsx(c0,{navigate:P,showSuccess:k,points,onLogout:w,userName:s,onOpenSpin:()=>m(!0)});case"rewards":return c.jsx(cC,{navigate:P,showSuccess:k,points,setPoints,missions,setMissions});case"reorder":return c.jsx(uC,{navigate:P,showSuccess:k});case"recommendations":return c.jsx(hC,{navigate:P,showSuccess:k});case"routine":return c.jsx(dC,{navigate:P,showSuccess:k});case"hub":return c.jsx(fC,{navigate:P,showSuccess:k,userName:s});case"feed":return c.jsx(pC,{navigate:P,showSuccess:k});case"quiz":return c.jsx(gC,{navigate:P,showSuccess:k});case"shade-finder":return c.jsx(_C,{navigate:P,showSuccess:k});case"routine-builder":return c.jsx(wC,{navigate:P,showSuccess:k});case"notifications":return c.jsx(EC,{navigate:P});case"account":return c.jsx(TC,{navigate:P,onLogout:w,userName:s,points});case"orders":return c.jsx(bC,{navigate:P});case"wishlist":return c.jsx(IC,{navigate:P,showSuccess:k});case"profile":return c.jsx(kC,{navigate:P,userName:s});case"addresses":return c.jsx(NC,{navigate:P});case"payments":return c.jsx(AC,{navigate:P});case"help":return c.jsx(RC,{navigate:P});case"privacy":return c.jsx(PC,{navigate:P});default:return c.jsx(c0,{navigate:P,showSuccess:k,points,onLogout:w,userName:s,onOpenSpin:()=>m(!0)})}};return c.jsxs("div",{className:"flex flex-col h-screen max-h-screen w-full md:max-w-2xl lg:max-w-4xl mx-auto bg-[#faf7f5] relative font-sans text-gray-900 overflow-hidden sm:shadow-2xl sm:border sm:border-gray-200 selection:bg-nykaa-pink selection:text-white",children:[u&&c.jsx("div",{className:"absolute inset-0 z-[100] bg-nykaa-gradient flex flex-col items-center justify-center transition-opacity duration-500",children:c.jsxs("div",{className:"animate-float-up text-center",children:[c.jsx("h1",{className:"text-white text-5xl font-display font-black tracking-tighter drop-shadow-lg mb-2",children:"Nykaa"}),c.jsx("p",{className:"text-white/90 text-sm font-medium tracking-[0.2em] uppercase",children:"Glow Rewards"})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden relative",children:n?c.jsx("div",{className:"animate-fadeIn h-full pb-16",children:F()}):c.jsx(qV,{onLogin:E})}),n&&!u&&c.jsx(XV,{currentScreen:t,navigate:P}),f&&c.jsx(KV,{onClose:()=>m(!1),onReward:D}),g&&c.jsx(QV,{onClose:()=>b(!1),onSubmit:M=>k(M,"Review Submitted!")}),N&&c.jsx(YV,{onClose:()=>R(!1),onClaim:M=>k(M,"Birthday Rewards Claimed!")}),o&&c.jsx(GV,{points:o.points,message:o.message,onClose:()=>a(null)})]})}ef.createRoot(document.getElementById("root")).render(c.jsx(iS.StrictMode,{children:c.jsx(JV,{})}));
