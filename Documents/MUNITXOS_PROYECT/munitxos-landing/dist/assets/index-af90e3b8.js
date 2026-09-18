(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},xa={},Il={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),pu=Symbol.for("react.portal"),hu=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),xu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),ku=Symbol.for("react.memo"),wu=Symbol.for("react.lazy"),bo=Symbol.iterator;function ju(e){return e===null||typeof e!="object"?null:(e=bo&&e[bo]||e["@@iterator"],typeof e=="function"?e:null)}var Dl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ll=Object.assign,Rl={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Rl,this.updater=n||Dl}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _l(){}_l.prototype=gn.prototype;function fs(e,t,n){this.props=e,this.context=t,this.refs=Rl,this.updater=n||Dl}var gs=fs.prototype=new _l;gs.constructor=fs;Ll(gs,gn.prototype);gs.isPureReactComponent=!0;var ko=Array.isArray,Bl=Object.prototype.hasOwnProperty,xs={current:null},Gl={key:!0,ref:!0,__self:!0,__source:!0};function Hl(e,t,n){var a,i={},s=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Bl.call(t,a)&&!Gl.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:or,type:e,key:s,ref:o,props:i,_owner:xs.current}}function Nu(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Su(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wo=/\/+/g;function Ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Su(""+e.key):t.toString(36)}function Ar(e,t,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case or:case pu:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Ga(o,0):a,ko(i)?(n="",e!=null&&(n=e.replace(wo,"$&/")+"/"),Ar(i,t,n,"",function(d){return d})):i!=null&&(vs(i)&&(i=Nu(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",ko(e))for(var l=0;l<e.length;l++){s=e[l];var c=a+Ga(s,l);o+=Ar(s,t,n,c,i)}else if(c=ju(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=a+Ga(s,l++),o+=Ar(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,t,n){if(e==null)return e;var a=[],i=0;return Ar(e,a,"","",function(s){return t.call(n,s,i++)}),a}function Cu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Mr={transition:null},zu={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:xs};function Ul(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gn;I.Fragment=hu;I.Profiler=gu;I.PureComponent=fs;I.StrictMode=fu;I.Suspense=bu;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zu;I.act=Ul;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Ll({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=xs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Bl.call(t,c)&&!Gl.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:or,type:e.type,key:i,ref:s,props:a,_owner:o}};I.createContext=function(e){return e={$$typeof:vu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xu,_context:e},e.Consumer=e};I.createElement=Hl;I.createFactory=function(e){var t=Hl.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:yu,render:e}};I.isValidElement=vs;I.lazy=function(e){return{$$typeof:wu,_payload:{_status:-1,_result:e},_init:Cu}};I.memo=function(e,t){return{$$typeof:ku,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};I.unstable_act=Ul;I.useCallback=function(e,t){return pe.current.useCallback(e,t)};I.useContext=function(e){return pe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};I.useEffect=function(e,t){return pe.current.useEffect(e,t)};I.useId=function(){return pe.current.useId()};I.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return pe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};I.useRef=function(e){return pe.current.useRef(e)};I.useState=function(e){return pe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return pe.current.useTransition()};I.version="18.3.1";Il.exports=I;var j=Il.exports;const Eu=mu(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=j,Fu=Symbol.for("react.element"),Au=Symbol.for("react.fragment"),Mu=Object.prototype.hasOwnProperty,Tu=Pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ou={key:!0,ref:!0,__self:!0,__source:!0};function Vl(e,t,n){var a,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Mu.call(t,a)&&!Ou.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:Fu,type:e,key:s,ref:o,props:i,_owner:Tu.current}}xa.Fragment=Au;xa.jsx=Vl;xa.jsxs=Vl;Ol.exports=xa;var r=Ol.exports,hi={},$l={exports:{}},Ne={},Wl={exports:{}},ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var O=P.length;P.push(M);e:for(;0<O;){var K=O-1>>>1,J=P[K];if(0<i(J,M))P[K]=M,P[O]=J,O=K;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var M=P[0],O=P.pop();if(O!==M){P[0]=O;e:for(var K=0,J=P.length,mr=J>>>1;K<mr;){var Ct=2*(K+1)-1,Ba=P[Ct],zt=Ct+1,pr=P[zt];if(0>i(Ba,O))zt<J&&0>i(pr,Ba)?(P[K]=pr,P[zt]=O,K=zt):(P[K]=Ba,P[Ct]=O,K=Ct);else if(zt<J&&0>i(pr,O))P[K]=pr,P[zt]=O,K=zt;else break e}}return M}function i(P,M){var O=P.sortIndex-M.sortIndex;return O!==0?O:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],h=1,f=null,p=3,y=!1,v=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var M=n(d);M!==null;){if(M.callback===null)a(d);else if(M.startTime<=P)a(d),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(d)}}function x(P){if(k=!1,m(P),!v)if(n(c)!==null)v=!0,Ra(b);else{var M=n(d);M!==null&&_a(x,M.startTime-P)}}function b(P,M){v=!1,k&&(k=!1,g(F),F=-1),y=!0;var O=p;try{for(m(M),f=n(c);f!==null&&(!(f.expirationTime>M)||P&&!de());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var J=K(f.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(c)&&a(c),m(M)}else a(c);f=n(c)}if(f!==null)var mr=!0;else{var Ct=n(d);Ct!==null&&_a(x,Ct.startTime-M),mr=!1}return mr}finally{f=null,p=O,y=!1}}var N=!1,S=null,F=-1,G=5,T=-1;function de(){return!(e.unstable_now()-T<G)}function A(){if(S!==null){var P=e.unstable_now();T=P;var M=!0;try{M=S(!0,P)}finally{M?H():(N=!1,S=null)}}else N=!1}var H;if(typeof u=="function")H=function(){u(A)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,La=St.port2;St.port1.onmessage=A,H=function(){La.postMessage(null)}}else H=function(){z(A,0)};function Ra(P){S=P,N||(N=!0,H())}function _a(P,M){F=z(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Ra(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var O=p;p=M;try{return P()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=p;p=P;try{return M()}finally{p=O}},e.unstable_scheduleCallback=function(P,M,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,P){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,P={id:h++,callback:M,priorityLevel:P,startTime:O,expirationTime:J,sortIndex:-1},O>K?(P.sortIndex=O,t(d,P),n(c)===null&&P===n(d)&&(k?(g(F),F=-1):k=!0,_a(x,O-K))):(P.sortIndex=J,t(c,P),v||y||(v=!0,Ra(b))),P},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(P){var M=p;return function(){var O=p;p=M;try{return P.apply(this,arguments)}finally{p=O}}}})(ql);Wl.exports=ql;var Iu=Wl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=j,je=Iu;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kl=new Set,Hn={};function Bt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Kl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,Lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jo={},No={};function Ru(e){return fi.call(No,e)?!0:fi.call(jo,e)?!1:Lu.test(e)?No[e]=!0:(jo[e]=!0,!1)}function _u(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bu(e,t,n,a){if(t===null||typeof t>"u"||_u(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,bs);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,bs);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,bs);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ks(e,t,n,a){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bu(t,n,i,a)&&(n=null),a||i===null?Ru(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var tt=Du.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ws=Symbol.for("react.strict_mode"),gi=Symbol.for("react.profiler"),Ql=Symbol.for("react.provider"),Yl=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),Ns=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Zl=Symbol.for("react.offscreen"),So=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ha;function En(e){if(Ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ha=t&&t[1]||""}return`
`+Ha+e}var Ua=!1;function Va(e,t){if(!e||Ua)return"";Ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ua=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function Gu(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ut:return"Portal";case gi:return"Profiler";case ws:return"StrictMode";case xi:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yl:return(e.displayName||"Context")+".Consumer";case Ql:return(e._context.displayName||"Context")+".Provider";case js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ns:return t=e.displayName||null,t!==null?t:yi(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return yi(e(t))}catch{}}return null}function Hu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yi(t);case 8:return t===ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uu(e){var t=Xl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Uu(e))}function Jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Xl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Co(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ec(e,t){t=t.checked,t!=null&&ks(e,"checked",t,!1)}function ki(e,t){ec(e,t);var n=vt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function tn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Pn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function tc(e,t){var n=vt(t.value),a=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Po(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vu=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Vu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function ic(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=ac(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var $u=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if($u[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,nn=null,rn=null;function Fo(e){if(e=dr(e)){if(typeof Ei!="function")throw Error(w(280));var t=e.stateNode;t&&(t=wa(t),Ei(e.stateNode,e.type,t))}}function sc(e){nn?rn?rn.push(e):rn=[e]:nn=e}function oc(){if(nn){var e=nn,t=rn;if(rn=nn=null,Fo(e),t)for(e=0;e<t.length;e++)Fo(t[e])}}function lc(e,t){return e(t)}function cc(){}var $a=!1;function dc(e,t,n){if($a)return e(t,n);$a=!0;try{return lc(e,t,n)}finally{$a=!1,(nn!==null||rn!==null)&&(cc(),oc())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var a=wa(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Pi=!1;if(Ye)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Pi=!1}function Wu(e,t,n,a,i,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Tn=!1,Vr=null,$r=!1,Fi=null,qu={onError:function(e){Tn=!0,Vr=e}};function Ku(e,t,n,a,i,s,o,l,c){Tn=!1,Vr=null,Wu.apply(qu,arguments)}function Qu(e,t,n,a,i,s,o,l,c){if(Ku.apply(this,arguments),Tn){if(Tn){var d=Vr;Tn=!1,Vr=null}else throw Error(w(198));$r||($r=!0,Fi=d)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ao(e){if(Gt(e)!==e)throw Error(w(188))}function Yu(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ao(i),e;if(s===a)return Ao(i),t;s=s.sibling}throw Error(w(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=s;break}if(l===a){o=!0,a=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,a=i;break}if(l===a){o=!0,a=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==a)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function mc(e){return e=Yu(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pc(e);if(t!==null)return t;e=e.sibling}return null}var hc=je.unstable_scheduleCallback,Mo=je.unstable_cancelCallback,Zu=je.unstable_shouldYield,Xu=je.unstable_requestPaint,Q=je.unstable_now,Ju=je.unstable_getCurrentPriorityLevel,Cs=je.unstable_ImmediatePriority,fc=je.unstable_UserBlockingPriority,Wr=je.unstable_NormalPriority,em=je.unstable_LowPriority,gc=je.unstable_IdlePriority,va=null,He=null;function tm(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:am,nm=Math.log,rm=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(nm(e)/rm|0)|0}var vr=64,yr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?a=Fn(l):(s&=o,s!==0&&(a=Fn(s)))}else o=n&~i,o!==0?a=Fn(o):s!==0&&(a=Fn(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-De(t),i=1<<n,a|=e[n],t&=~i;return a}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-De(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&a)&&(i[o]=im(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xc(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-De(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var L=0;function vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yc,Es,bc,kc,wc,Mi=!1,br=[],dt=null,ut=null,mt=null,$n=new Map,Wn=new Map,st=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function To(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function kn(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=dr(t),t!==null&&Es(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cm(e,t,n,a,i){switch(t){case"focusin":return dt=kn(dt,e,t,n,a,i),!0;case"dragenter":return ut=kn(ut,e,t,n,a,i),!0;case"mouseover":return mt=kn(mt,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return $n.set(s,kn($n.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Wn.set(s,kn(Wn.get(s)||null,e,t,n,a,i)),!0}return!1}function jc(e){var t=Ft(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=uc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);zi=a,n.target.dispatchEvent(a),zi=null}else return t=dr(n),t!==null&&Es(t),e.blockedOn=n,!1;t.shift()}return!0}function Oo(e,t,n){Tr(e)&&n.delete(t)}function dm(){Mi=!1,dt!==null&&Tr(dt)&&(dt=null),ut!==null&&Tr(ut)&&(ut=null),mt!==null&&Tr(mt)&&(mt=null),$n.forEach(Oo),Wn.forEach(Oo)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,dm)))}function qn(e){function t(i){return wn(i,e)}if(0<br.length){wn(br[0],e);for(var n=1;n<br.length;n++){var a=br[n];a.blockedOn===e&&(a.blockedOn=null)}}for(dt!==null&&wn(dt,e),ut!==null&&wn(ut,e),mt!==null&&wn(mt,e),$n.forEach(t),Wn.forEach(t),n=0;n<st.length;n++)a=st[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)jc(n),n.blockedOn===null&&st.shift()}var an=tt.ReactCurrentBatchConfig,Kr=!0;function um(e,t,n,a){var i=L,s=an.transition;an.transition=null;try{L=1,Ps(e,t,n,a)}finally{L=i,an.transition=s}}function mm(e,t,n,a){var i=L,s=an.transition;an.transition=null;try{L=4,Ps(e,t,n,a)}finally{L=i,an.transition=s}}function Ps(e,t,n,a){if(Kr){var i=Ti(e,t,n,a);if(i===null)ni(e,t,a,Qr,n),To(e,a);else if(cm(i,e,t,n,a))a.stopPropagation();else if(To(e,a),t&4&&-1<lm.indexOf(e)){for(;i!==null;){var s=dr(i);if(s!==null&&yc(s),s=Ti(e,t,n,a),s===null&&ni(e,t,a,Qr,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else ni(e,t,a,null,n)}}var Qr=null;function Ti(e,t,n,a){if(Qr=null,e=Ss(a),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ju()){case Cs:return 1;case fc:return 4;case Wr:case em:return 16;case gc:return 536870912;default:return 16}default:return 16}}var lt=null,Fs=null,Or=null;function Sc(){if(Or)return Or;var e,t=Fs,n=t.length,a,i="value"in lt?lt.value:lt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[s-a];a++);return Or=i.slice(e,1<a?1-a:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Io(){return!1}function Se(e){function t(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kr:Io,this.isPropagationStopped=Io,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Se(xn),cr=W({},xn,{view:0,detail:0}),pm=Se(cr),qa,Ka,jn,ya=W({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(qa=e.screenX-jn.screenX,Ka=e.screenY-jn.screenY):Ka=qa=0,jn=e),qa)},movementY:function(e){return"movementY"in e?e.movementY:Ka}}),Do=Se(ya),hm=W({},ya,{dataTransfer:0}),fm=Se(hm),gm=W({},cr,{relatedTarget:0}),Qa=Se(gm),xm=W({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Se(xm),ym=W({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bm=Se(ym),km=W({},xn,{data:0}),Lo=Se(km),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nm[e])?!!t[e]:!1}function Ms(){return Sm}var Cm=W({},cr,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zm=Se(Cm),Em=W({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Se(Em),Pm=W({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),Fm=Se(Pm),Am=W({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=Se(Am),Tm=W({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Se(Tm),Im=[9,13,27,32],Ts=Ye&&"CompositionEvent"in window,On=null;Ye&&"documentMode"in document&&(On=document.documentMode);var Dm=Ye&&"TextEvent"in window&&!On,Cc=Ye&&(!Ts||On&&8<On&&11>=On),_o=String.fromCharCode(32),Bo=!1;function zc(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Lm(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Bo=!0,_o);case"textInput":return e=t.data,e===_o&&Bo?null:e;default:return null}}function Rm(e,t){if($t)return e==="compositionend"||!Ts&&zc(e,t)?(e=Sc(),Or=Fs=lt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Pc(e,t,n,a){sc(a),t=Yr(t,"onChange"),0<t.length&&(n=new As("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var In=null,Kn=null;function Bm(e){Bc(e,0)}function ba(e){var t=Kt(e);if(Jl(t))return e}function Gm(e,t){if(e==="change")return t}var Fc=!1;if(Ye){var Ya;if(Ye){var Za="oninput"in document;if(!Za){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),Za=typeof Ho.oninput=="function"}Ya=Za}else Ya=!1;Fc=Ya&&(!document.documentMode||9<document.documentMode)}function Uo(){In&&(In.detachEvent("onpropertychange",Ac),Kn=In=null)}function Ac(e){if(e.propertyName==="value"&&ba(Kn)){var t=[];Pc(t,Kn,e,Ss(e)),dc(Bm,t)}}function Hm(e,t,n){e==="focusin"?(Uo(),In=t,Kn=n,In.attachEvent("onpropertychange",Ac)):e==="focusout"&&Uo()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(Kn)}function Vm(e,t){if(e==="click")return ba(t)}function $m(e,t){if(e==="input"||e==="change")return ba(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Wm;function Qn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!fi.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function Vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $o(e,t){var n=Vo(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vo(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=Tc(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(a!==null&&Os(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=$o(n,s);var o=$o(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Km=Ye&&"documentMode"in document&&11>=document.documentMode,Wt=null,Oi=null,Dn=null,Ii=!1;function Wo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ii||Wt==null||Wt!==Ur(a)||(a=Wt,"selectionStart"in a&&Os(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Dn&&Qn(Dn,a)||(Dn=a,a=Yr(Oi,"onSelect"),0<a.length&&(t=new As("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Wt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Xa={},Oc={};Ye&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function ka(e){if(Xa[e])return Xa[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oc)return Xa[e]=t[n];return e}var Ic=ka("animationend"),Dc=ka("animationiteration"),Lc=ka("animationstart"),Rc=ka("transitionend"),_c=new Map,qo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){_c.set(e,t),Bt(t,[e])}for(var Ja=0;Ja<qo.length;Ja++){var ei=qo[Ja],Qm=ei.toLowerCase(),Ym=ei[0].toUpperCase()+ei.slice(1);wt(Qm,"on"+Ym)}wt(Ic,"onAnimationEnd");wt(Dc,"onAnimationIteration");wt(Lc,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Rc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Ko(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Qu(a,t,void 0,e),e.currentTarget=null}function Bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Ko(i,l,d),s=c}else for(o=0;o<a.length;o++){if(l=a[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Ko(i,l,d),s=c}}}if($r)throw e=Fi,$r=!1,Fi=null,e}function _(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var a=e+"__bubble";n.has(a)||(Gc(t,e,2,!1),n.add(a))}function ti(e,t,n){var a=0;t&&(a|=4),Gc(n,e,a,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[jr]){e[jr]=!0,Kl.forEach(function(n){n!=="selectionchange"&&(Zm.has(n)||ti(n,!1,e),ti(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,ti("selectionchange",!1,t))}}function Gc(e,t,n,a){switch(Nc(t)){case 1:var i=um;break;case 4:i=mm;break;default:i=Ps}n=i.bind(null,t,n,e),i=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ni(e,t,n,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ft(l),o===null)return;if(c=o.tag,c===5||c===6){a=s=o;continue e}l=l.parentNode}}a=a.return}dc(function(){var d=s,h=Ss(n),f=[];e:{var p=_c.get(e);if(p!==void 0){var y=As,v=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":y=zm;break;case"focusin":v="focus",y=Qa;break;case"focusout":v="blur",y=Qa;break;case"beforeblur":case"afterblur":y=Qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Do;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fm;break;case Ic:case Dc:case Lc:y=vm;break;case Rc:y=Mm;break;case"scroll":y=pm;break;case"wheel":y=Om;break;case"copy":case"cut":case"paste":y=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ro}var k=(t&4)!==0,z=!k&&e==="scroll",g=k?p!==null?p+"Capture":null:p;k=[];for(var u=d,m;u!==null;){m=u;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=Vn(u,g),x!=null&&k.push(Zn(u,x,m)))),z)break;u=u.return}0<k.length&&(p=new y(p,v,null,n,h),f.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==zi&&(v=n.relatedTarget||n.fromElement)&&(Ft(v)||v[Ze]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=d,v=v?Ft(v):null,v!==null&&(z=Gt(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=d),y!==v)){if(k=Do,x="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ro,x="onPointerLeave",g="onPointerEnter",u="pointer"),z=y==null?p:Kt(y),m=v==null?p:Kt(v),p=new k(x,u+"leave",y,n,h),p.target=z,p.relatedTarget=m,x=null,Ft(h)===d&&(k=new k(g,u+"enter",v,n,h),k.target=m,k.relatedTarget=z,x=k),z=x,y&&v)t:{for(k=y,g=v,u=0,m=k;m;m=Ht(m))u++;for(m=0,x=g;x;x=Ht(x))m++;for(;0<u-m;)k=Ht(k),u--;for(;0<m-u;)g=Ht(g),m--;for(;u--;){if(k===g||g!==null&&k===g.alternate)break t;k=Ht(k),g=Ht(g)}k=null}else k=null;y!==null&&Qo(f,p,y,k,!1),v!==null&&z!==null&&Qo(f,z,v,k,!0)}}e:{if(p=d?Kt(d):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var b=Gm;else if(Go(p))if(Fc)b=$m;else{b=Um;var N=Hm}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=Vm);if(b&&(b=b(e,d))){Pc(f,b,n,h);break e}N&&N(e,p,d),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&wi(p,"number",p.value)}switch(N=d?Kt(d):window,e){case"focusin":(Go(N)||N.contentEditable==="true")&&(Wt=N,Oi=d,Dn=null);break;case"focusout":Dn=Oi=Wt=null;break;case"mousedown":Ii=!0;break;case"contextmenu":case"mouseup":case"dragend":Ii=!1,Wo(f,n,h);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":Wo(f,n,h)}var S;if(Ts)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else $t?zc(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Cc&&n.locale!=="ko"&&($t||F!=="onCompositionStart"?F==="onCompositionEnd"&&$t&&(S=Sc()):(lt=h,Fs="value"in lt?lt.value:lt.textContent,$t=!0)),N=Yr(d,F),0<N.length&&(F=new Lo(F,e,null,n,h),f.push({event:F,listeners:N}),S?F.data=S:(S=Ec(n),S!==null&&(F.data=S)))),(S=Dm?Lm(e,n):Rm(e,n))&&(d=Yr(d,"onBeforeInput"),0<d.length&&(h=new Lo("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=S))}Bc(f,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vn(e,n),s!=null&&a.unshift(Zn(e,s,i)),s=Vn(e,t),s!=null&&a.push(Zn(e,s,i))),e=e.return}return a}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qo(e,t,n,a,i){for(var s=t._reactName,o=[];n!==null&&n!==a;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=Vn(n,s),c!=null&&o.unshift(Zn(n,c,l))):i||(c=Vn(n,s),c!=null&&o.push(Zn(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xm=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function Yo(e){return(typeof e=="string"?e:""+e).replace(Xm,`
`).replace(Jm,"")}function Nr(e,t,n){if(t=Yo(t),Yo(e)!==t&&n)throw Error(w(425))}function Zr(){}var Di=null,Li=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,Zo=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Zo<"u"?function(e){return Zo.resolve(null).then(e).catch(np)}:_i;function np(e){setTimeout(function(){throw e})}function ri(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),qn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);qn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+vn,Xn="__reactProps$"+vn,Ze="__reactContainer$"+vn,Bi="__reactEvents$"+vn,rp="__reactListeners$"+vn,ap="__reactHandles$"+vn;function Ft(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xo(e);e!==null;){if(n=e[Ge])return n;e=Xo(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ge]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function wa(e){return e[Xn]||null}var Gi=[],Qt=-1;function jt(e){return{current:e}}function B(e){0>Qt||(e.current=Gi[Qt],Gi[Qt]=null,Qt--)}function R(e,t){Qt++,Gi[Qt]=e.current,e.current=t}var yt={},ce=jt(yt),xe=jt(!1),It=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Xr(){B(xe),B(ce)}function Jo(e,t,n){if(ce.current!==yt)throw Error(w(168));R(ce,t),R(xe,n)}function Hc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(w(108,Hu(e)||"Unknown",i));return W({},n,a)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,It=ce.current,R(ce,e),R(xe,xe.current),!0}function el(e,t,n){var a=e.stateNode;if(!a)throw Error(w(169));n?(e=Hc(e,t,It),a.__reactInternalMemoizedMergedChildContext=e,B(xe),B(ce),R(ce,e)):B(xe),R(xe,n)}var We=null,ja=!1,ai=!1;function Uc(e){We===null?We=[e]:We.push(e)}function ip(e){ja=!0,Uc(e)}function Nt(){if(!ai&&We!==null){ai=!0;var e=0,t=L;try{var n=We;for(L=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}We=null,ja=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),hc(Cs,Nt),i}finally{L=t,ai=!1}}return null}var Yt=[],Zt=0,ea=null,ta=0,Ce=[],ze=0,Dt=null,qe=1,Ke="";function Et(e,t){Yt[Zt++]=ta,Yt[Zt++]=ea,ea=e,ta=t}function Vc(e,t,n){Ce[ze++]=qe,Ce[ze++]=Ke,Ce[ze++]=Dt,Dt=e;var a=qe;e=Ke;var i=32-De(a)-1;a&=~(1<<i),n+=1;var s=32-De(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,qe=1<<32-De(t)+i|n<<i|a,Ke=s+e}else qe=1<<s|n<<i|a,Ke=e}function Is(e){e.return!==null&&(Et(e,1),Vc(e,1,0))}function Ds(e){for(;e===ea;)ea=Yt[--Zt],Yt[Zt]=null,ta=Yt[--Zt],Yt[Zt]=null;for(;e===Dt;)Dt=Ce[--ze],Ce[ze]=null,Ke=Ce[--ze],Ce[ze]=null,qe=Ce[--ze],Ce[ze]=null}var we=null,ke=null,U=!1,Ie=null;function $c(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:qe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ui(e){if(U){var t=ke;if(t){var n=t;if(!tl(e,t)){if(Hi(e))throw Error(w(418));t=pt(n.nextSibling);var a=we;t&&tl(e,t)?$c(a,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Hi(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Sr(e){if(e!==we)return!1;if(!U)return nl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=ke)){if(Hi(e))throw Wc(),Error(w(418));for(;t;)$c(e,t),t=pt(t.nextSibling)}if(nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?pt(e.stateNode.nextSibling):null;return!0}function Wc(){for(var e=ke;e;)e=pt(e.nextSibling)}function dn(){ke=we=null,U=!1}function Ls(e){Ie===null?Ie=[e]:Ie.push(e)}var sp=tt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var a=n.stateNode}if(!a)throw Error(w(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rl(e){var t=e._init;return t(e._payload)}function qc(e){function t(g,u){if(e){var m=g.deletions;m===null?(g.deletions=[u],g.flags|=16):m.push(u)}}function n(g,u){if(!e)return null;for(;u!==null;)t(g,u),u=u.sibling;return null}function a(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function i(g,u){return g=xt(g,u),g.index=0,g.sibling=null,g}function s(g,u,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<u?(g.flags|=2,u):m):(g.flags|=2,u)):(g.flags|=1048576,u)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,u,m,x){return u===null||u.tag!==6?(u=ui(m,g.mode,x),u.return=g,u):(u=i(u,m),u.return=g,u)}function c(g,u,m,x){var b=m.type;return b===Vt?h(g,u,m.props.children,x,m.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===at&&rl(b)===u.type)?(x=i(u,m.props),x.ref=Nn(g,u,m),x.return=g,x):(x=Hr(m.type,m.key,m.props,null,g.mode,x),x.ref=Nn(g,u,m),x.return=g,x)}function d(g,u,m,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=mi(m,g.mode,x),u.return=g,u):(u=i(u,m.children||[]),u.return=g,u)}function h(g,u,m,x,b){return u===null||u.tag!==7?(u=Ot(m,g.mode,x,b),u.return=g,u):(u=i(u,m),u.return=g,u)}function f(g,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ui(""+u,g.mode,m),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fr:return m=Hr(u.type,u.key,u.props,null,g.mode,m),m.ref=Nn(g,null,u),m.return=g,m;case Ut:return u=mi(u,g.mode,m),u.return=g,u;case at:var x=u._init;return f(g,x(u._payload),m)}if(Pn(u)||yn(u))return u=Ot(u,g.mode,m,null),u.return=g,u;Cr(g,u)}return null}function p(g,u,m,x){var b=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:l(g,u,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fr:return m.key===b?c(g,u,m,x):null;case Ut:return m.key===b?d(g,u,m,x):null;case at:return b=m._init,p(g,u,b(m._payload),x)}if(Pn(m)||yn(m))return b!==null?null:h(g,u,m,x,null);Cr(g,m)}return null}function y(g,u,m,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,l(u,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fr:return g=g.get(x.key===null?m:x.key)||null,c(u,g,x,b);case Ut:return g=g.get(x.key===null?m:x.key)||null,d(u,g,x,b);case at:var N=x._init;return y(g,u,m,N(x._payload),b)}if(Pn(x)||yn(x))return g=g.get(m)||null,h(u,g,x,b,null);Cr(u,x)}return null}function v(g,u,m,x){for(var b=null,N=null,S=u,F=u=0,G=null;S!==null&&F<m.length;F++){S.index>F?(G=S,S=null):G=S.sibling;var T=p(g,S,m[F],x);if(T===null){S===null&&(S=G);break}e&&S&&T.alternate===null&&t(g,S),u=s(T,u,F),N===null?b=T:N.sibling=T,N=T,S=G}if(F===m.length)return n(g,S),U&&Et(g,F),b;if(S===null){for(;F<m.length;F++)S=f(g,m[F],x),S!==null&&(u=s(S,u,F),N===null?b=S:N.sibling=S,N=S);return U&&Et(g,F),b}for(S=a(g,S);F<m.length;F++)G=y(S,g,F,m[F],x),G!==null&&(e&&G.alternate!==null&&S.delete(G.key===null?F:G.key),u=s(G,u,F),N===null?b=G:N.sibling=G,N=G);return e&&S.forEach(function(de){return t(g,de)}),U&&Et(g,F),b}function k(g,u,m,x){var b=yn(m);if(typeof b!="function")throw Error(w(150));if(m=b.call(m),m==null)throw Error(w(151));for(var N=b=null,S=u,F=u=0,G=null,T=m.next();S!==null&&!T.done;F++,T=m.next()){S.index>F?(G=S,S=null):G=S.sibling;var de=p(g,S,T.value,x);if(de===null){S===null&&(S=G);break}e&&S&&de.alternate===null&&t(g,S),u=s(de,u,F),N===null?b=de:N.sibling=de,N=de,S=G}if(T.done)return n(g,S),U&&Et(g,F),b;if(S===null){for(;!T.done;F++,T=m.next())T=f(g,T.value,x),T!==null&&(u=s(T,u,F),N===null?b=T:N.sibling=T,N=T);return U&&Et(g,F),b}for(S=a(g,S);!T.done;F++,T=m.next())T=y(S,g,F,T.value,x),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?F:T.key),u=s(T,u,F),N===null?b=T:N.sibling=T,N=T);return e&&S.forEach(function(A){return t(g,A)}),U&&Et(g,F),b}function z(g,u,m,x){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fr:e:{for(var b=m.key,N=u;N!==null;){if(N.key===b){if(b=m.type,b===Vt){if(N.tag===7){n(g,N.sibling),u=i(N,m.props.children),u.return=g,g=u;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===at&&rl(b)===N.type){n(g,N.sibling),u=i(N,m.props),u.ref=Nn(g,N,m),u.return=g,g=u;break e}n(g,N);break}else t(g,N);N=N.sibling}m.type===Vt?(u=Ot(m.props.children,g.mode,x,m.key),u.return=g,g=u):(x=Hr(m.type,m.key,m.props,null,g.mode,x),x.ref=Nn(g,u,m),x.return=g,g=x)}return o(g);case Ut:e:{for(N=m.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(g,u.sibling),u=i(u,m.children||[]),u.return=g,g=u;break e}else{n(g,u);break}else t(g,u);u=u.sibling}u=mi(m,g.mode,x),u.return=g,g=u}return o(g);case at:return N=m._init,z(g,u,N(m._payload),x)}if(Pn(m))return v(g,u,m,x);if(yn(m))return k(g,u,m,x);Cr(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(g,u.sibling),u=i(u,m),u.return=g,g=u):(n(g,u),u=ui(m,g.mode,x),u.return=g,g=u),o(g)):n(g,u)}return z}var un=qc(!0),Kc=qc(!1),na=jt(null),ra=null,Xt=null,Rs=null;function _s(){Rs=Xt=ra=null}function Bs(e){var t=na.current;B(na),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ra=e,Rs=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ra===null)throw Error(w(308));Xt=e,ra.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var At=null;function Gs(e){At===null?At=[e]:At.push(e)}function Qc(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Gs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,a)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,D&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Xe(e,n)}return i=a.interleaved,i===null?(t.next=t,Gs(a)):(t.next=i.next,i.next=t),a.interleaved=t,Xe(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zs(e,n)}}function al(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,a){var i=e.updateQueue;it=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,h=d=c=null,l=s;do{var p=l.lane,y=l.eventTime;if((a&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,k=l;switch(p=t,y=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=W({},f,p);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=y,c=f):h=h.next=y,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=f}}function il(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(w(191,i));i.call(a)}}}var ur={},Ue=jt(ur),Jn=jt(ur),er=jt(ur);function Mt(e){if(e===ur)throw Error(w(174));return e}function Us(e,t){switch(R(er,t),R(Jn,e),R(Ue,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}B(Ue),R(Ue,t)}function mn(){B(Ue),B(Jn),B(er)}function Zc(e){Mt(er.current);var t=Mt(Ue.current),n=Ni(t,e.type);t!==n&&(R(Jn,e),R(Ue,n))}function Vs(e){Jn.current===e&&(B(Ue),B(Jn))}var V=jt(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=[];function $s(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Lr=tt.ReactCurrentDispatcher,si=tt.ReactCurrentBatchConfig,Lt=0,$=null,Z=null,ee=null,sa=!1,Ln=!1,tr=0,op=0;function se(){throw Error(w(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function qs(e,t,n,a,i,s){if(Lt=s,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?up:mp,e=n(a,i),Ln){s=0;do{if(Ln=!1,tr=0,25<=s)throw Error(w(301));s+=1,ee=Z=null,t.updateQueue=null,Lr.current=pp,e=n(a,i)}while(Ln)}if(Lr.current=oa,t=Z!==null&&Z.next!==null,Lt=0,ee=Z=$=null,sa=!1,t)throw Error(w(300));return e}function Ks(){var e=tr!==0;return tr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(Z===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?$.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?$.memoizedState=ee=e:ee=ee.next=e}return ee}function nr(e,t){return typeof t=="function"?t(e):t}function oi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=Z,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var l=o=null,c=null,d=s;do{var h=d.lane;if((Lt&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,o=a):c=c.next=f,$.lanes|=h,Rt|=h}d=d.next}while(d!==null&&d!==s);c===null?o=a:c.next=l,Re(a,t.memoizedState)||(ge=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,$.lanes|=s,Rt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function li(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Re(s,t.memoizedState)||(ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Xc(){}function Jc(e,t){var n=$,a=Ae(),i=t(),s=!Re(a.memoizedState,i);if(s&&(a.memoizedState=i,ge=!0),a=a.queue,Qs(nd.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,rr(9,td.bind(null,n,a,i,t),void 0,null),te===null)throw Error(w(349));Lt&30||ed(n,t,i)}return i}function ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function td(e,t,n,a){t.value=n,t.getSnapshot=a,rd(t)&&ad(e)}function nd(e,t,n){return n(function(){rd(t)&&ad(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ad(e){var t=Xe(e,1);t!==null&&Le(t,e,1,-1)}function sl(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,$,e),[t.memoizedState,e]}function rr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function id(){return Ae().memoizedState}function Rr(e,t,n,a){var i=Be();$.flags|=e,i.memoizedState=rr(1|t,n,void 0,a===void 0?null:a)}function Na(e,t,n,a){var i=Ae();a=a===void 0?null:a;var s=void 0;if(Z!==null){var o=Z.memoizedState;if(s=o.destroy,a!==null&&Ws(a,o.deps)){i.memoizedState=rr(t,n,s,a);return}}$.flags|=e,i.memoizedState=rr(1|t,n,s,a)}function ol(e,t){return Rr(8390656,8,e,t)}function Qs(e,t){return Na(2048,8,e,t)}function sd(e,t){return Na(4,2,e,t)}function od(e,t){return Na(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,ld.bind(null,t,e),n)}function Ys(){}function dd(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ws(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ws(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function md(e,t,n){return Lt&21?(Re(n,t)||(n=xc(),$.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function lp(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var a=si.transition;si.transition={};try{e(!1),t()}finally{L=n,si.transition=a}}function pd(){return Ae().memoizedState}function cp(e,t,n){var a=gt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},hd(e))fd(t,n);else if(n=Qc(e,t,n,a),n!==null){var i=me();Le(n,e,a,i),gd(n,t,a)}}function dp(e,t,n){var a=gt(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(hd(e))fd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Re(l,o)){var c=t.interleaved;c===null?(i.next=i,Gs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Qc(e,t,i,a),n!==null&&(i=me(),Le(n,e,a,i),gd(n,t,a))}}function hd(e){var t=e.alternate;return e===$||t!==null&&t===$}function fd(e,t){Ln=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gd(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zs(e,n)}}var oa={readContext:Fe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},up={readContext:Fe,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ol,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Be();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=cp.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:sl,useDebugValue:Ys,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=sl(!1),t=e[0];return e=lp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=$,i=Be();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Lt&30||ed(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ol(nd.bind(null,a,s,e),[e]),a.flags|=2048,rr(9,td.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(U){var n=Ke,a=qe;n=(a&~(1<<32-De(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mp={readContext:Fe,useCallback:dd,useContext:Fe,useEffect:Qs,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ud,useReducer:oi,useRef:id,useState:function(){return oi(nr)},useDebugValue:Ys,useDeferredValue:function(e){var t=Ae();return md(t,Z.memoizedState,e)},useTransition:function(){var e=oi(nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Jc,useId:pd,unstable_isNewReconciler:!1},pp={readContext:Fe,useCallback:dd,useContext:Fe,useEffect:Qs,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:od,useMemo:ud,useReducer:li,useRef:id,useState:function(){return li(nr)},useDebugValue:Ys,useDeferredValue:function(e){var t=Ae();return Z===null?t.memoizedState=e:md(t,Z.memoizedState,e)},useTransition:function(){var e=li(nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Jc,useId:pd,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sa={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=me(),i=gt(e),s=Qe(a,i);s.payload=t,n!=null&&(s.callback=n),t=ht(e,s,i),t!==null&&(Le(t,e,i,a),Dr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=me(),i=gt(e),s=Qe(a,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ht(e,s,i),t!==null&&(Le(t,e,i,a),Dr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),a=gt(e),i=Qe(n,a);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,a),t!==null&&(Le(t,e,a,n),Dr(t,e,a))}};function ll(e,t,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,a)||!Qn(i,s):!0}function xd(e,t,n){var a=!1,i=yt,s=t.contextType;return typeof s=="object"&&s!==null?s=Fe(s):(i=ve(t)?It:ce.current,a=t.contextTypes,s=(a=a!=null)?cn(e,i):yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sa,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function cl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Sa.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Fe(s):(s=ve(t)?It:ce.current,i.context=cn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&($i(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Sa.enqueueReplaceState(i,i.state,null),aa(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",a=t;do n+=Gu(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){ca||(ca=!0,rs=a),qi(e,t)},n}function yd(e,t,n){n=Qe(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){qi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof a!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function dl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new hp;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function ul(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ml(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var fp=tt.ReactCurrentOwner,ge=!1;function ue(e,t,n,a){t.child=e===null?Kc(t,null,n,a):un(t,e.child,n,a)}function pl(e,t,n,a,i){n=n.render;var s=t.ref;return sn(t,i),a=qs(e,t,n,a,s,i),n=Ks(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&n&&Is(t),t.flags|=1,ue(e,t,a,i),t.child)}function hl(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!ao(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,bd(e,t,s,a,i)):(e=Hr(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(o,a)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=xt(s,a),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(Qn(s,a)&&e.ref===t.ref)if(ge=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,Je(e,t,i)}return Ki(e,t,n,a,i)}function kd(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(en,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(en,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,R(en,be),be|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,R(en,be),be|=a;return ue(e,t,i,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ki(e,t,n,a,i){var s=ve(n)?It:ce.current;return s=cn(t,s),sn(t,i),n=qs(e,t,n,a,s,i),a=Ks(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&a&&Is(t),t.flags|=1,ue(e,t,n,i),t.child)}function fl(e,t,n,a,i){if(ve(n)){var s=!0;Jr(t)}else s=!1;if(sn(t,i),t.stateNode===null)_r(e,t),xd(t,n,a),Wi(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=ve(n)?It:ce.current,d=cn(t,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||c!==d)&&cl(t,o,a,d),it=!1;var p=t.memoizedState;o.state=p,aa(t,a,o,i),c=t.memoizedState,l!==a||p!==c||xe.current||it?(typeof h=="function"&&($i(t,n,h,a),c=t.memoizedState),(l=it||ll(t,n,l,a,p,c,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),o.props=a,o.state=c,o.context=d,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Yc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Te(t.type,l),o.props=d,f=t.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=ve(n)?It:ce.current,c=cn(t,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||p!==c)&&cl(t,o,a,c),it=!1,p=t.memoizedState,o.state=p,aa(t,a,o,i);var v=t.memoizedState;l!==f||p!==v||xe.current||it?(typeof y=="function"&&($i(t,n,y,a),v=t.memoizedState),(d=it||ll(t,n,d,a,p,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),o.props=a,o.state=v,o.context=c,a=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return Qi(e,t,n,a,s,i)}function Qi(e,t,n,a,i,s){wd(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&el(t,n,!1),Je(e,t,s);a=t.stateNode,fp.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,s),t.child=un(t,null,l,s)):ue(e,t,l,s),t.memoizedState=a.state,i&&el(t,n,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Jo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jo(e,t.context,!1),Us(e,t.containerInfo)}function gl(e,t,n,a,i){return dn(),Ls(i),t.flags|=256,ue(e,t,n,a),t.child}var Yi={dehydrated:null,treeContext:null,retryLane:0};function Zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var a=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(V,i&1),e===null)return Ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ea(o,a,0,null),e=Ot(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Zi(n),t.memoizedState=Yi,e):Zs(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gp(e,t,o,a,l,i,n);if(s){s=a.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=xt(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xt(l,s):(s=Ot(s,o,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?Zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Yi,a}return s=e.child,e=s.sibling,a=xt(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Zs(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,a){return a!==null&&Ls(a),un(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n,a,i,s,o){if(n)return t.flags&256?(t.flags&=-257,a=ci(Error(w(422))),zr(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=Ea({mode:"visible",children:a.children},i,0,null),s=Ot(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Zi(o),t.memoizedState=Yi,s);if(!(t.mode&1))return zr(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(w(419)),a=ci(s,a,void 0),zr(e,t,o,a)}if(l=(o&e.childLanes)!==0,ge||l){if(a=te,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xe(e,i),Le(a,e,i,-1))}return ro(),a=ci(Error(w(421))),zr(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ke=pt(i.nextSibling),we=t,U=!0,Ie=null,e!==null&&(Ce[ze++]=qe,Ce[ze++]=Ke,Ce[ze++]=Dt,qe=e.id,Ke=e.overflow,Dt=t),t=Zs(t,a.children),t.flags|=4096,t)}function xl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Vi(e.return,t,n)}function di(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function Sd(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(ue(e,t,a.children,n),a=V.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xl(e,n,t);else if(e.tag===19)xl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(R(V,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),di(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}di(t,!0,n,null,s);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:jd(t),dn();break;case 5:Zc(t);break;case 1:ve(t.type)&&Jr(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;R(na,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(R(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Nd(e,t,n):(R(V,V.current&1),e=Je(e,t,n),e!==null?e.sibling:null);R(V,V.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return Sd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(V,V.current),a)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return Je(e,t,n)}var Cd,Xi,zd,Ed;Cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};zd=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Mt(Ue.current);var s=null;switch(n){case"input":i=bi(e,i),a=bi(e,a),s=[];break;case"select":i=W({},i,{value:void 0}),a=W({},a,{value:void 0}),s=[];break;case"textarea":i=ji(e,i),a=ji(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Zr)}Si(n,a);var o;n=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&_("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Ed=function(e,t,n,a){n!==a&&(t.flags|=4)};function Sn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function vp(e,t,n){var a=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&Xr(),oe(t),null;case 3:return a=t.stateNode,mn(),B(xe),B(ce),$s(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(ss(Ie),Ie=null))),Xi(e,t),oe(t),null;case 5:Vs(t);var i=Mt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)zd(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=Mt(Ue.current),Sr(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[Ge]=t,a[Xn]=s,e=(t.mode&1)!==0,n){case"dialog":_("cancel",a),_("close",a);break;case"iframe":case"object":case"embed":_("load",a);break;case"video":case"audio":for(i=0;i<An.length;i++)_(An[i],a);break;case"source":_("error",a);break;case"img":case"image":case"link":_("error",a),_("load",a);break;case"details":_("toggle",a);break;case"input":Co(a,s),_("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},_("invalid",a);break;case"textarea":Eo(a,s),_("invalid",a)}Si(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Nr(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Nr(a.textContent,l,e),i=["children",""+l]):Hn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_("scroll",a)}switch(n){case"input":gr(a),zo(a,s,!0);break;case"textarea":gr(a),Po(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Zr)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Ge]=t,e[Xn]=a,Cd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ci(n,a),n){case"dialog":_("cancel",e),_("close",e),i=a;break;case"iframe":case"object":case"embed":_("load",e),i=a;break;case"video":case"audio":for(i=0;i<An.length;i++)_(An[i],e);i=a;break;case"source":_("error",e),i=a;break;case"img":case"image":case"link":_("error",e),_("load",e),i=a;break;case"details":_("toggle",e),i=a;break;case"input":Co(e,a),i=bi(e,a),_("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=W({},a,{value:void 0}),_("invalid",e);break;case"textarea":Eo(e,a),i=ji(e,a),_("invalid",e);break;default:i=a}Si(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ic(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&rc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Un(e,c):typeof c=="number"&&Un(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&_("scroll",e):c!=null&&ks(e,s,c,o))}switch(n){case"input":gr(e),zo(e,a,!1);break;case"textarea":gr(e),Po(e);break;case"option":a.value!=null&&e.setAttribute("value",""+vt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?tn(e,!!a.multiple,s,!1):a.defaultValue!=null&&tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(w(166));if(n=Mt(er.current),Mt(Ue.current),Sr(t)){if(a=t.stateNode,n=t.memoizedProps,a[Ge]=t,(s=a.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Nr(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Ge]=t,t.stateNode=a}return oe(t),null;case 13:if(B(V),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ke!==null&&t.mode&1&&!(t.flags&128))Wc(),dn(),t.flags|=98560,s=!1;else if(s=Sr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ge]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Ie!==null&&(ss(Ie),Ie=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):ro())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),Xi(e,t),e===null&&Yn(t.stateNode.containerInfo),oe(t),null;case 10:return Bs(t.type._context),oe(t),null;case 17:return ve(t.type)&&Xr(),oe(t),null;case 19:if(B(V),s=t.memoizedState,s===null)return oe(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)Sn(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ia(e),o!==null){for(t.flags|=128,Sn(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>hn&&(t.flags|=128,a=!0,Sn(s,!1),t.lanes=4194304)}else{if(!a)if(e=ia(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return oe(t),null}else 2*Q()-s.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,a=!0,Sn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=V.current,R(V,a?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return no(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?be&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function yp(e,t){switch(Ds(t),t.tag){case 1:return ve(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),B(xe),B(ce),$s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return mn(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return no(),null;case 24:return null;default:return null}}var Er=!1,le=!1,bp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){q(e,t,a)}else n.current=null}function Ji(e,t,n){try{n()}catch(a){q(e,t,a)}}var vl=!1;function kp(e,t){if(Di=Kr,e=Tc(),Os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,h=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||a!==0&&f.nodeType!==3||(c=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++d===i&&(l=o),p===s&&++h===a&&(c=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},Kr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,z=v.memoizedState,g=t.stateNode,u=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),z);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=vl,vl=!1,v}function Rn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ji(t,n,s)}i=i.next}while(i!==a)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[Xn],delete t[Bi],delete t[rp],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(a!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function ns(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}var ne=null,Oe=!1;function rt(e,t,n){for(n=n.child;n!==null;)Ad(e,t,n),n=n.sibling}function Ad(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:le||Jt(n,t);case 6:var a=ne,i=Oe;ne=null,rt(e,t,n),ne=a,Oe=i,ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?ri(e.parentNode,n):e.nodeType===1&&ri(e,n),qn(e)):ri(ne,n.stateNode));break;case 4:a=ne,i=Oe,ne=n.stateNode.containerInfo,Oe=!0,rt(e,t,n),ne=a,Oe=i;break;case 0:case 11:case 14:case 15:if(!le&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ji(n,t,o),i=i.next}while(i!==a)}rt(e,t,n);break;case 1:if(!le&&(Jt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){q(n,t,l)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(le=(a=le)||n.memoizedState!==null,rt(e,t,n),le=a):rt(e,t,n);break;default:rt(e,t,n)}}function bl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bp),t.forEach(function(a){var i=Fp.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Oe=!1;break e;case 3:ne=l.stateNode.containerInfo,Oe=!0;break e;case 4:ne=l.stateNode.containerInfo,Oe=!0;break e}l=l.return}if(ne===null)throw Error(w(160));Ad(s,o,i),ne=null,Oe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),_e(e),a&4){try{Rn(3,e,e.return),Ca(3,e)}catch(k){q(e,e.return,k)}try{Rn(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Me(t,e),_e(e),a&512&&n!==null&&Jt(n,n.return);break;case 5:if(Me(t,e),_e(e),a&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(k){q(e,e.return,k)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ec(i,s),Ci(l,o);var d=Ci(l,s);for(o=0;o<c.length;o+=2){var h=c[o],f=c[o+1];h==="style"?ic(i,f):h==="dangerouslySetInnerHTML"?rc(i,f):h==="children"?Un(i,f):ks(i,h,f,d)}switch(l){case"input":ki(i,s);break;case"textarea":tc(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?tn(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?tn(i,!!s.multiple,s.defaultValue,!0):tn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xn]=s}catch(k){q(e,e.return,k)}}break;case 6:if(Me(t,e),_e(e),a&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(k){q(e,e.return,k)}}break;case 3:if(Me(t,e),_e(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Me(t,e),_e(e);break;case 13:Me(t,e),_e(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(eo=Q())),a&4&&bl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,Me(t,e),le=d):Me(t,e),_e(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(f=C=h;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Jt(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){a=p,n=p.return;try{t=a,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){q(a,n,k)}}break;case 5:Jt(p,p.return);break;case 22:if(p.memoizedState!==null){wl(f);continue}}y!==null?(y.return=p,C=y):wl(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ac("display",o))}catch(k){q(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(k){q(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Me(t,e),_e(e),a&4&&bl(e);break;case 21:break;default:Me(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fd(n)){var a=n;break e}n=n.return}throw Error(w(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Un(i,""),a.flags&=-33);var s=yl(e);ns(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=yl(e);ts(e,l,o);break;default:throw Error(w(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e,t,n){C=e,Td(e)}function Td(e,t,n){for(var a=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Er;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||le;l=Er;var d=le;if(Er=o,(le=c)&&!d)for(C=i;C!==null;)o=C,c=o.child,o.tag===22&&o.memoizedState!==null?jl(i):c!==null?(c.return=o,C=c):jl(i);for(;s!==null;)C=s,Td(s),s=s.sibling;C=i,Er=l,le=d}kl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):kl(e)}}function kl(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Ca(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!le)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&il(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}il(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&qn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&es(t)}catch(p){q(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function wl(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function jl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ca(4,t)}catch(c){q(t,n,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){q(t,i,c)}}var s=t.return;try{es(t)}catch(c){q(t,s,c)}break;case 5:var o=t.return;try{es(t)}catch(c){q(t,o,c)}}}catch(c){q(t,t.return,c)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var jp=Math.ceil,la=tt.ReactCurrentDispatcher,Xs=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,D=0,te=null,Y=null,re=0,be=0,en=jt(0),X=0,ar=null,Rt=0,za=0,Js=0,_n=null,fe=null,eo=0,hn=1/0,$e=null,ca=!1,rs=null,ft=null,Pr=!1,ct=null,da=0,Bn=0,as=null,Br=-1,Gr=0;function me(){return D&6?Q():Br!==-1?Br:Br=Q()}function gt(e){return e.mode&1?D&2&&re!==0?re&-re:sp.transition!==null?(Gr===0&&(Gr=xc()),Gr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function Le(e,t,n,a){if(50<Bn)throw Bn=0,as=null,Error(w(185));lr(e,n,a),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(za|=n),X===4&&ot(e,re)),ye(e,a),n===1&&D===0&&!(t.mode&1)&&(hn=Q()+500,ja&&Nt()))}function ye(e,t){var n=e.callbackNode;sm(e,t);var a=qr(e,e===te?re:0);if(a===0)n!==null&&Mo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Mo(n),t===1)e.tag===0?ip(Nl.bind(null,e)):Uc(Nl.bind(null,e)),tp(function(){!(D&6)&&Nt()}),n=null;else{switch(vc(a)){case 1:n=Cs;break;case 4:n=fc;break;case 16:n=Wr;break;case 536870912:n=gc;break;default:n=Wr}n=Gd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Br=-1,Gr=0,D&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var a=qr(e,e===te?re:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ua(e,a);else{t=a;var i=D;D|=2;var s=Dd();(te!==e||re!==t)&&($e=null,hn=Q()+500,Tt(e,t));do try{Cp();break}catch(l){Id(e,l)}while(1);_s(),la.current=s,D=i,Y!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Ai(e),i!==0&&(a=i,t=is(e,i))),t===1)throw n=ar,Tt(e,0),ot(e,a),ye(e,Q()),n;if(t===6)ot(e,a);else{if(i=e.current.alternate,!(a&30)&&!Np(i)&&(t=ua(e,a),t===2&&(s=Ai(e),s!==0&&(a=s,t=is(e,s))),t===1))throw n=ar,Tt(e,0),ot(e,a),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(w(345));case 2:Pt(e,fe,$e);break;case 3:if(ot(e,a),(a&130023424)===a&&(t=eo+500-Q(),10<t)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_i(Pt.bind(null,e,fe,$e),t);break}Pt(e,fe,$e);break;case 4:if(ot(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-De(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=Q()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*jp(a/1960))-a,10<a){e.timeoutHandle=_i(Pt.bind(null,e,fe,$e),a);break}Pt(e,fe,$e);break;case 5:Pt(e,fe,$e);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?Od.bind(null,e):null}function is(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ua(e,t),e!==2&&(t=fe,fe=n,t!==null&&ss(t)),e}function ss(e){fe===null?fe=e:fe.push.apply(fe,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Re(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Js,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),a=1<<n;e[n]=-1,t&=~a}}function Nl(e){if(D&6)throw Error(w(327));on();var t=qr(e,0);if(!(t&1))return ye(e,Q()),null;var n=ua(e,t);if(e.tag!==0&&n===2){var a=Ai(e);a!==0&&(t=a,n=is(e,a))}if(n===1)throw n=ar,Tt(e,0),ot(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,fe,$e),ye(e,Q()),null}function to(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=Q()+500,ja&&Nt())}}function _t(e){ct!==null&&ct.tag===0&&!(D&6)&&on();var t=D;D|=1;var n=Pe.transition,a=L;try{if(Pe.transition=null,L=1,e)return e()}finally{L=a,Pe.transition=n,D=t,!(D&6)&&Nt()}}function no(){be=en.current,B(en)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),Y!==null)for(n=Y.return;n!==null;){var a=n;switch(Ds(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Xr();break;case 3:mn(),B(xe),B(ce),$s();break;case 5:Vs(a);break;case 4:mn();break;case 13:B(V);break;case 19:B(V);break;case 10:Bs(a.type._context);break;case 22:case 23:no()}n=n.return}if(te=e,Y=e=xt(e.current,null),re=be=t,X=0,ar=null,Js=za=Rt=0,fe=_n=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}n.pending=a}At=null}return e}function Id(e,t){do{var n=Y;try{if(_s(),Lr.current=oa,sa){for(var a=$.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}sa=!1}if(Lt=0,ee=Z=$=null,Ln=!1,tr=0,Xs.current=null,n===null||n.return===null){X=1,ar=t,Y=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ul(o);if(y!==null){y.flags&=-257,ml(y,o,l,s,t),y.mode&1&&dl(s,d,t),t=y,c=d;var v=t.updateQueue;if(v===null){var k=new Set;k.add(c),t.updateQueue=k}else v.add(c);break e}else{if(!(t&1)){dl(s,d,t),ro();break e}c=Error(w(426))}}else if(U&&l.mode&1){var z=ul(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),ml(z,o,l,s,t),Ls(pn(c,l));break e}}s=c=pn(c,l),X!==4&&(X=2),_n===null?_n=[s]:_n.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=vd(s,c,t);al(s,g);break e;case 1:l=c;var u=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ft===null||!ft.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=yd(s,l,t);al(s,x);break e}}s=s.return}while(s!==null)}Rd(n)}catch(b){t=b,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Dd(){var e=la.current;return la.current=oa,e===null?oa:e}function ro(){(X===0||X===3||X===2)&&(X=4),te===null||!(Rt&268435455)&&!(za&268435455)||ot(te,re)}function ua(e,t){var n=D;D|=2;var a=Dd();(te!==e||re!==t)&&($e=null,Tt(e,t));do try{Sp();break}catch(i){Id(e,i)}while(1);if(_s(),D=n,la.current=a,Y!==null)throw Error(w(261));return te=null,re=0,X}function Sp(){for(;Y!==null;)Ld(Y)}function Cp(){for(;Y!==null&&!Zu();)Ld(Y)}function Ld(e){var t=Bd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Rd(e):Y=t,Xs.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=vp(n,t,be),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Pt(e,t,n){var a=L,i=Pe.transition;try{Pe.transition=null,L=1,zp(e,t,n,a)}finally{Pe.transition=i,L=a}return null}function zp(e,t,n,a){do on();while(ct!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(om(e,s),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Gd(Wr,function(){return on(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var o=L;L=1;var l=D;D|=4,Xs.current=null,kp(e,n),Md(n,e),qm(Li),Kr=!!Di,Li=Di=null,e.current=n,wp(n),Xu(),D=l,L=o,Pe.transition=s}else e.current=n;if(Pr&&(Pr=!1,ct=e,da=i),s=e.pendingLanes,s===0&&(ft=null),tm(n.stateNode),ye(e,Q()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,e=rs,rs=null,e;return da&1&&e.tag!==0&&on(),s=e.pendingLanes,s&1?e===as?Bn++:(Bn=0,as=e):Bn=0,Nt(),null}function on(){if(ct!==null){var e=vc(da),t=Pe.transition,n=L;try{if(Pe.transition=null,L=16>e?16:e,ct===null)var a=!1;else{if(e=ct,ct=null,da=0,D&6)throw Error(w(331));var i=D;for(D|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Rn(8,h,s)}var f=h.child;if(f!==null)f.return=h,C=f;else for(;C!==null;){h=C;var p=h.sibling,y=h.return;if(Pd(h),h===d){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var v=s.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rn(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,C=g;break e}C=s.return}}var u=e.current;for(C=u;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ca(9,l)}}catch(b){q(l,l.return,b)}if(l===o){C=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,C=x;break e}C=l.return}}if(D=i,Nt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(va,e)}catch{}a=!0}return a}finally{L=n,Pe.transition=t}}return!1}function Sl(e,t,n){t=pn(n,t),t=vd(e,t,1),e=ht(e,t,1),t=me(),e!==null&&(lr(e,1,t),ye(e,t))}function q(e,t,n){if(e.tag===3)Sl(e,e,n);else for(;t!==null;){if(t.tag===3){Sl(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ft===null||!ft.has(a))){e=pn(n,e),e=yd(t,e,1),t=ht(t,e,1),e=me(),t!==null&&(lr(t,1,e),ye(t,e));break}}t=t.return}}function Ep(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-eo?Tt(e,0):Js|=n),ye(e,t)}function _d(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=me();e=Xe(e,t),e!==null&&(lr(e,t,n),ye(e,n))}function Pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function Fp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(w(314))}a!==null&&a.delete(t),_d(e,n)}var Bd;Bd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,xp(e,t,n);ge=!!(e.flags&131072)}else ge=!1,U&&t.flags&1048576&&Vc(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;_r(e,t),e=t.pendingProps;var i=cn(t,ce.current);sn(t,n),i=qs(null,t,a,e,i,n);var s=Ks();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(a)?(s=!0,Jr(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hs(t),i.updater=Sa,t.stateNode=i,i._reactInternals=t,Wi(t,a,e,n),t=Qi(null,t,a,!0,s,n)):(t.tag=0,U&&s&&Is(t),ue(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=Mp(a),e=Te(a,e),i){case 0:t=Ki(null,t,a,e,n);break e;case 1:t=fl(null,t,a,e,n);break e;case 11:t=pl(null,t,a,e,n);break e;case 14:t=hl(null,t,a,Te(a.type,e),n);break e}throw Error(w(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Te(a,i),Ki(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Te(a,i),fl(e,t,a,i,n);case 3:e:{if(jd(t),e===null)throw Error(w(387));a=t.pendingProps,s=t.memoizedState,i=s.element,Yc(e,t),aa(t,a,null,n);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=pn(Error(w(423)),t),t=gl(e,t,a,n,i);break e}else if(a!==i){i=pn(Error(w(424)),t),t=gl(e,t,a,n,i);break e}else for(ke=pt(t.stateNode.containerInfo.firstChild),we=t,U=!0,Ie=null,n=Kc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),a===i){t=Je(e,t,n);break e}ue(e,t,a,n)}t=t.child}return t;case 5:return Zc(t),e===null&&Ui(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ri(a,i)?o=null:s!==null&&Ri(a,s)&&(t.flags|=32),wd(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Ui(t),null;case 13:return Nd(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=un(t,null,a,n):ue(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Te(a,i),pl(e,t,a,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,R(na,a._currentValue),a._currentValue=o,s!==null)if(Re(s.value,o)){if(s.children===i.children&&!xe.current){t=Je(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=Qe(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Vi(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vi(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,sn(t,n),i=Fe(i),a=a(i),t.flags|=1,ue(e,t,a,n),t.child;case 14:return a=t.type,i=Te(a,t.pendingProps),i=Te(a.type,i),hl(e,t,a,i,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Te(a,i),_r(e,t),t.tag=1,ve(a)?(e=!0,Jr(t)):e=!1,sn(t,n),xd(t,a,i),Wi(t,a,i,n),Qi(null,t,a,!0,e,n);case 19:return Sd(e,t,n);case 22:return kd(e,t,n)}throw Error(w(156,t.tag))};function Gd(e,t){return hc(e,t)}function Ap(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,a){return new Ap(e,t,n,a)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return ao(e)?1:0;if(e!=null){if(e=e.$$typeof,e===js)return 11;if(e===Ns)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,a,i,s){var o=2;if(a=e,typeof e=="function")ao(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Ot(n.children,i,s,t);case ws:o=8,i|=8;break;case gi:return e=Ee(12,n,t,i|2),e.elementType=gi,e.lanes=s,e;case xi:return e=Ee(13,n,t,i),e.elementType=xi,e.lanes=s,e;case vi:return e=Ee(19,n,t,i),e.elementType=vi,e.lanes=s,e;case Zl:return Ea(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ql:o=10;break e;case Yl:o=9;break e;case js:o=11;break e;case Ns:o=14;break e;case at:o=16,a=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Ot(e,t,n,a){return e=Ee(7,e,a,t),e.lanes=n,e}function Ea(e,t,n,a){return e=Ee(22,e,a,t),e.elementType=Zl,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function io(e,t,n,a,i,s,o,l,c){return e=new Tp(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ee(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(s),e}function Op(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Hd(e){if(!e)return yt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return Hc(e,n,t)}return t}function Ud(e,t,n,a,i,s,o,l,c){return e=io(n,a,!0,e,i,s,o,l,c),e.context=Hd(null),n=e.current,a=me(),i=gt(n),s=Qe(a,i),s.callback=t??null,ht(n,s,i),e.current.lanes=i,lr(e,i,a),ye(e,a),e}function Pa(e,t,n,a){var i=t.current,s=me(),o=gt(i);return n=Hd(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ht(i,t,o),e!==null&&(Le(e,i,o,s),Dr(e,i,o)),o}function ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function so(e,t){Cl(e,t),(e=e.alternate)&&Cl(e,t)}function Ip(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function oo(e){this._internalRoot=e}Fa.prototype.render=oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Pa(e,t,null,null)};Fa.prototype.unmount=oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){Pa(null,e,null,null)}),t[Ze]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&jc(e)}};function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function Dp(e,t,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var d=ma(o);s.call(d)}}var o=Ud(t,a,e,0,null,!1,!1,"",zl);return e._reactRootContainer=o,e[Ze]=o.current,Yn(e.nodeType===8?e.parentNode:e),_t(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=ma(c);l.call(d)}}var c=io(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=c,e[Ze]=c.current,Yn(e.nodeType===8?e.parentNode:e),_t(function(){Pa(t,c,n,a)}),c}function Ma(e,t,n,a,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=ma(o);l.call(c)}}Pa(t,o,e,i)}else o=Dp(n,t,e,i,a);return ma(o)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(zs(t,n|1),ye(t,Q()),!(D&6)&&(hn=Q()+500,Nt()))}break;case 13:_t(function(){var a=Xe(e,1);if(a!==null){var i=me();Le(a,e,1,i)}}),so(e,1)}};Es=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=me();Le(t,e,134217728,n)}so(e,134217728)}};bc=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var a=me();Le(n,e,t,a)}so(e,t)}};kc=function(){return L};wc=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};Ei=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=wa(a);if(!i)throw Error(w(90));Jl(a),ki(a,i)}}}break;case"textarea":tc(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};lc=to;cc=_t;var Lp={usingClientEntryPoint:!1,Events:[dr,Kt,wa,sc,oc,to]},Cn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{va=Fr.inject(Rp),He=Fr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lo(t))throw Error(w(200));return Op(e,t,null,n)};Ne.createRoot=function(e,t){if(!lo(e))throw Error(w(299));var n=!1,a="",i=Vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=io(e,1,!1,null,null,n,!1,a,i),e[Ze]=t.current,Yn(e.nodeType===8?e.parentNode:e),new oo(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=mc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return _t(e)};Ne.hydrate=function(e,t,n){if(!Aa(t))throw Error(w(200));return Ma(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!lo(e))throw Error(w(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ud(t,null,e,1,n??null,i,!1,s,o),e[Ze]=t.current,Yn(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fa(t)};Ne.render=function(e,t,n){if(!Aa(t))throw Error(w(200));return Ma(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(w(40));return e._reactRootContainer?(_t(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=to;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Aa(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ma(e,t,n,!1,a)};Ne.version="18.3.1-next-f1338f8080-20240426";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),$l.exports=Ne;var _p=$l.exports,El=_p;hi.createRoot=El.createRoot,hi.hydrateRoot=El.hydrateRoot;const Bp={name:"MUNCHOS",tagline:"Pinchos in München",location:"Múnich, Alemania",subtagline:"Catering Boutique & Delicatessen Vasca"},Gp={menus:"Menús & Carta",experiencia:"Experiencia",testimonios:"Opiniones",gourmet:"Tienda Gourmet",reservar:"RESERVAR CATERING",cartBadge:"Carrito"},Hp={badge:"✦ CATERING BOUTIQUE EN MÚNICH · 10 A 50 INVITADOS",headlinePart1:"Pinchos Vascos y ",headlineHighlight:"cocina mediterránea",headlinePart2:" para celebraciones íntimas",subheadline:"Sushi premium, pinchos artesanales y paellas cocinadas in situ. Llevamos el sabor y la exclusividad del norte directamente a tu evento privado.",ctaPrimary:"RESERVAR CATERING →",ctaSecondary:"🍴 VER MENÚS Y PRECIOS",stats:[{value:"100%",label:"Producto fresco y artesanal"},{value:"10–50",label:"Invitados por experiencia"},{value:"4.9 / 5",label:"Valoración de clientes"}]},Up={badge:"¿Por qué MUNCHOS?",title:"Alta gastronomía pensada para disfrutar sin complicaciones.",subtitle:`Combinamos la tradición del pincho vasco con paellas in situ y sushi de autor.
Un servicio integral llave en mano.`,items:[{icon:"UtensilsCrossed",title:"Producto de temporada",desc:"Ingredientes de origen certificado, seleccionados diariamente con estricto criterio delicatessen."},{icon:"Sparkles",title:"Servicio impecable",desc:"Cuidamos la puesta en escena y los detalles para que tú solo tengas que ejercer de anfitrión."},{icon:"Sliders",title:"Menús 100% personalizables",desc:"Adaptamos cada propuesta a las preferencias gastronómicas y requerimientos de tus invitados."},{icon:"HeartHandshake",title:"Equilibrio placer y bienestar",desc:"Técnicas de cocción ligeras y composiciones equilibradas que cuidan de la digestión y el sabor."}]},Vp={badge:"El Proceso MUNCHOS",title:"De la idea a tu mesa en 4 sencillos pasos.",subtitle:`Un flujo diseñado para garantizar máxima comodidad.
Cero estrés durante el día de tu celebración.`,steps:[{number:"01",title:"Elige tu fecha y concepto",desc:"Cuéntanos el motivo de tu evento, el número de comensales (10 a 50) y la fecha prevista en Múnich."},{number:"02",title:"Diseño del menú a medida",desc:"Selecciona la combinación perfecta entre pinchos vascos, plancha, pizzas in situ, sushi o paellas."},{number:"03",title:"Preparación y logística",desc:"Cocinamos en el día y transportamos todo en vehículos refrigerados con vajilla boutique."},{number:"04",title:"Servicio y disfrute total",desc:"Presentación impecable lista para servir o con chef presencial. Tú disfrutas, nosotros hacemos la magia."}]},$p={badge:"Nuestra Propuesta Gastronómica",title:"¿Qué quieres comer? ¡Personaliza tu deseo!",subtitle:`Explora nuestras 5 especialidades gastronómicas.
Diseñadas para eventos informales pero extremadamente elegantes.`,categories:[{id:"pintxos",name:"Pinchos Vascos",tagline:"Tradición de San Sebastián",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Canapés y pinchos elaborados sobre pan artesanal de masa madre con gildas de autor, piquillos rellenos y solomillo ibérico.",highlights:["Pan de masa madre 48h","Gildas Donostiarras premium","Aceite de oliva AOVE"],items:["La Gilda MUNCHOS: piparra de Ibarra, anchoa del Cantábrico y aceituna gordal","Solomillo ibérico sobre reducción de Pedro Ximénez y queso Idiazábal","Pimiento del Piquillo confitado relleno de marisco"]},{id:"plancha",name:"Plancha",tagline:"Sandwiches, Burgers, Salchichas",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Hamburguesas gourmet a la parrilla, sandwiches artesanales y salchichas vascas/bávaras preparadas al momento.",highlights:["Carnes maduradas","Pan brioche artesano","Salsas de la casa"],items:["Mini Burgers gourmet de Vaca Vieja con queso Idiazábal ahumado","Sandwich artesanal a la plancha con jamón ibérico y queso fundido","Salchichas artesanales a la parrilla con alioli suave y chimichurri vasco"]},{id:"pizzas",name:"Pizzas Caseras",tagline:"In situ (Elaboradas en directo)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Pizzas artesanas elaboradas y horneadas in situ durante tu evento con masa madre fermentada 48 horas e ingredientes frescos.",highlights:["Horneadas in situ","Masa madre 48h","Mozzarella Fior di Latte"],items:["Pizza Margarita gourmet con tomate San Marzano y albahaca fresca","Pizza Vasca con chistorra artesana, piquillos confitados y queso ahumado","Pizza Ibérica con salmón ahumado, rúcula y emulsión de cítricos"]},{id:"sushi",name:"Sushi",tagline:"Fusión Nikkei-Vasca",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Nigiris atún rojo Balfegó, uramakis de salmón salvaje ahumado con toque de txakoli y sashimis corte maestro.",highlights:["Sin azúcares añadidos","Pescado salvaje sostenible","Salsas de soya artesanal"],items:["Nigiri de Atún Rojo con foie flameado y sal de Añana","Uramaki de Salmón y Aguacate con mahonesa de kimchi y sésamo negro","Tartar de Vieira con alga wakame y emulsión de cítricos"]},{id:"paellas",name:"Paellas & Arroces",tagline:"Paellas, Arroces Caldosos, Risottos",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Paellas mediterráneas elaboradas in situ, arroces caldosos marineros y risottos cremosos con boletus e Idiazábal.",highlights:["Arroz Bomba de Albufera","Elaboradas in situ","Socarrat crujiente artesano"],items:["Paella de Marisco y Senyoret con gambón, calamar fresco y azafrán en hebra","Arroz Caldoso de Bogavante del Cantábrico con fumet marino concentrado","Risotto cremoso de Boletus edulis y Queso Idiazábal ahumado"]}],cta:"Solicitar presupuesto personalizado"},Wp={badge:"Calculadora & Presupuesto Directo",title:"Diseña la experiencia para tu evento.",subtitle:`Indica los detalles de tu reunión para calcular una estimación instantánea.
Recibirás una propuesta oficial en menos de 24h.`,labels:{guests:"Número de Invitados (10 a 50):",date:"Fecha del Evento:",menuType:"Tipo de Menú Principal:",extras:"Servicios Extra Opcionales:",estimatedTotal:"Estimación orientativa total:",perPerson:"por persona",submitBtn:"Solicitar Presupuesto Oficial sin Compromiso"},menuOptions:[{id:"de-tapas",name:"Experiencia Pinchos Vascos & Plancha",price:38},{id:"pizzas-fusion",name:"Pizzas Caseras In Situ & Pinchos",price:44},{id:"paellas-showcooking",name:"Paellas & Arroces en Vivo",price:48},{id:"full-experience",name:"Experiencia Completa MUNCHOS (Sushi + Plancha + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"Chef & Showcooking en vivo (+180€)",price:180},{id:"sommelier",name:"Maridaje Vinos Vascos & Txakoli (+12€ / inv)",pricePerGuest:12},{id:"desserts",name:"Mesa Dulce Vasca & Tarta de Queso La Viña (+7€ / inv)",pricePerGuest:7},{id:"tableware",name:"Alquiler de Vajilla & Cristalería Premium (+5€ / inv)",pricePerGuest:5}]},qp={badge:"Filosofía 'Come Sano'",title:"El equilibrio entre el placer hedonista y el bienestar real.",text:"Comer bien no significa renunciar a nada. En MUNCHOS creemos que el placer y el equilibrio pueden convivir en el mismo plato — por eso seleccionamos producto de calidad, cuidamos las cocciones y pensamos cada menú también desde la nutrición, sin sacrificar ni un gramo de sabor.",points:[{title:"Sin aceites refinados",desc:"Utilizamos exclusivamente Aceite de Oliva Virgen Extra (AOVE) prensado en frío."},{title:"Bajo contenido en azúcares",desc:"Respetamos el dulzor natural de las verduras y frutas de temporada."},{title:"Proteína limpia y ligera",desc:"Pescados salvajes del Cantábrico y carnes magras preparadas a la temperatura justa."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Chef Fundador MUNCHOS Múnich"},Kp={badge:"Compromiso MUNCHOS",title:"Garantía de Calidad y Puntualidad Absoluta.",subtitle:"Tu tranquilidad es el ingrediente principal de nuestro catering.",cards:[{title:"Puntualidad Garantizada",desc:"Llegamos con 45 minutos de antelación para el montaje. Si el pedido se retrasa más de 15 minutos sin causa mayor, abonamos un 20% del valor total."},{title:"Frescura e Higiene 100%",desc:"Mantenimiento estricto de la cadena de frío y transporte térmico certificado. Si cualquier plato no cumple con el estándar esperado, te lo reemplazamos inmediatamente."},{title:"Gestión de Reclamaciones en 24h",desc:"Canal directo con la dirección para cualquier eventualidad. Respuesta y solución económica o reposición antes de 24 horas laborables."}]},Qp={badge:"Experiencias Reales",title:"Lo que dicen los anfitriones en Múnich.",reviews:[{name:"Elena R.",event:"Cumpleaños 40º en Bogenhausen (25 personas)",comment:"MUNCHOS convirtió mi salón en una taberna donostiarra elegante. Los pinchos de bacalao y el nigiri de balfegó volaron en minutos. Mis invitados alemanes quedaron fascinados.",rating:5},{name:"Markus & Sofía",event:"Cena privada en Schwabing (15 personas)",comment:"Buscábamos un catering que no fuese pesado ni grasiento. El equilibrio de sus platos y la presentación impoluta nos conquistaron. Repetiremos sin duda.",rating:5},{name:"Carlos M.",event:"Celebración de empresa en Glockenbach (35 personas)",comment:"Puntualidad alemana con sabor vasco auténtico. El servicio de chef en vivo valió cada euro. La tarta de queso tipo La Viña es simplemente insuperable.",rating:5}]},Yp={badge:"Delicatessen en Casa",title:"Productos Gourmet MUNCHOS.",subtitle:"Lleva la despensa del Cantábrico y nuestros productos exclusivos directamente a tu hogar en Múnich.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi."},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional."},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra."},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca."}],addBtn:"Añadir a mi selección",interestBtn:"Ver mi lista de compras"},Zp={title:"¿Preparado para organizar una celebración inolvidable en Múnich?",subtitle:`Reserva tu fecha con antelación.
Atendemos un número limitado de eventos por semana para mantener nuestro compromiso de frescura y atención boutique.`,primaryBtn:"Solicitar fecha y presupuesto",secondaryBtn:"Contactar por WhatsApp"},Xp={text:"Catering Boutique Múnich (10-50 personas)",button:"Reservar mi Catering"},Jp={title:"Solicitud de Reserva / Presupuesto",subtitle:"Completa tus datos y nos pondremos en contacto antes de 24 horas con una propuesta a medida.",name:"Tu nombre completo:",email:"Correo electrónico:",phone:"Teléfono de contacto (WhatsApp):",location:"Lugar del evento en Múnich / Alrededores:",notes:"Notas o alergias alimentarias de tus invitados:",submit:"Enviar Solicitud de Presupuesto",successTitle:"¡Solicitud Recibida!",successText:"Gracias por contactar con MUNCHOS. Te responderemos en breve con la propuesta detallada."},eh={about:"MUNCHOS trae la autenticidad de la gastronomía vasca y la delicadeza del sushi de autor al corazón de Múnich, transformando pequeñas celebraciones en experiencias memorables.",quickLinks:"Enlaces Rápidos",legal:"Información Legal",privacy:"Política de Privacidad",terms:"Términos del Servicio",impressum:"Impressum (Legal Germany)",contact:"Contacto & Reservas",address:"Múnich, Baviera — Alemania",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. Todos los derechos reservados. Catering Boutique en Múnich."},th={badge:"Promoción Exclusiva MUNCHOS",items:[{id:"promo_01",headline:"Especial Paellas Vascas a Fuego Vivo los Fines de Semana",bodyText:"Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.",ctaText:"Consultar Fechas de Paella"}]},nh={bannerTitle:"Respetamos tu Privacidad",bannerText:"Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento de nuestra plataforma de reservas de catering y analizar el tráfico de forma anónima (cumplimiento GDPR/DSGVO).",acceptAll:"Aceptar Todas",essentialOnly:"Solo Necesarias",settings:"Configurar Preferencias",modalTitle:"Configuración de Consentimiento de Cookies",modalSubtitle:"Puedes personalizar las categorías de cookies que autorizas para MUNCHOS Catering.",savePreferences:"Guardar Preferencias",catEssential:"Cookies Necesarias (Técnicas)",catEssentialDesc:"Imprescindibles para la navegación, el carrito gourmet y la gestión del proceso de reserva.",catAnalytics:"Cookies Analíticas",catAnalyticsDesc:"Nos permiten medir el uso de la web para optimizar la velocidad y la experiencia del usuario.",catMarketing:"Cookies de Marketing",catMarketingDesc:"Utilizadas para mostrar ofertas personalizadas y promociones gastronómicas exclusivas."},rh={title:"Métodos de Pago Seguros",subtitle:"Aceptamos los principales métodos de pago en Alemania y la UE",paypal:"PayPal / Apple Pay",klarna:"Klarna / Sofort",cards:"Tarjetas (Visa / Mastercard)",invoice:"Factura B2B / Transferencia SEPA"},ah={brand:Bp,nav:Gp,hero:Hp,benefits:Up,howItWorks:Vp,menus:$p,bookingWidget:Wp,philosophy:qp,guarantee:Kp,testimonials:Qp,gourmetShop:Yp,finalCta:Zp,stickyCta:Xp,modal:Jp,footer:eh,promotions:th,cookies:nh,payments:rh},ih={name:"MUNCHOS",tagline:"Pinchos in München",location:"Munich, Germany",subtagline:"Boutique Catering & Basque Delicatessen"},sh={menus:"Menus & Card",experiencia:"Experience",testimonios:"Reviews",gourmet:"Gourmet Shop",reservar:"BOOK CATERING",cartBadge:"Cart"},oh={badge:"✦ BOUTIQUE CATERING IN MUNICH · 10 TO 50 GUESTS",headlinePart1:"Basque Pinchos & ",headlineHighlight:"Mediterranean Cuisine",headlinePart2:" for Intimate Celebrations",subheadline:"Premium sushi, artisanal pinchos, and live-cooked paellas. We bring northern flavor and exclusivity directly to your private event.",ctaPrimary:"BOOK CATERING →",ctaSecondary:"🍴 VIEW MENUS & PRICES",stats:[{value:"100%",label:"Fresh & artisanal product"},{value:"10–50",label:"Guests per experience"},{value:"4.9 / 5",label:"Client Rating"}]},lh={badge:"Why MUNCHOS?",title:"Haute cuisine designed for effortless enjoyment.",subtitle:`We blend Basque pincho tradition with live paella cooking and signature sushi.
A turnkey, full-service catering experience.`,items:[{icon:"UtensilsCrossed",title:"Seasonal ingredients",desc:"Certified origin products, daily selected under strict gourmet standards."},{icon:"Sparkles",title:"Flawless service",desc:"We handle setup and fine details so you can focus entirely on hosting."},{icon:"Sliders",title:"100% Customizable menus",desc:"Tailored to your guests' culinary desires and dietary requirements."},{icon:"HeartHandshake",title:"Flavor & Wellbeing balance",desc:"Light cooking methods and balanced recipes designed for great digestability and flavor."}]},ch={badge:"The MUNCHOS Process",title:"From concept to your table in 4 easy steps.",subtitle:`Designed for ultimate convenience.
Zero stress on your celebration day.`,steps:[{number:"01",title:"Choose Date & Concept",desc:"Tell us about your event, number of guests (10 to 50), and target date in Munich."},{number:"02",title:"Tailor Your Menu",desc:"Select your ideal mix of Basque pinchos, grill, live pizza, sushi, or paellas."},{number:"03",title:"Preparation & Logistics",desc:"Cooked fresh on event day and transported in temperature-controlled vehicles with boutique tableware."},{number:"04",title:"Service & Enjoyment",desc:"Served ready to enjoy or with an on-site chef. You celebrate, we deliver the magic."}]},dh={badge:"Our Culinary Offerings",title:"What would you like to eat? Customize your wish!",subtitle:`Explore our 5 culinary specialties.
Designed for relaxed yet high-end gatherings.`,categories:[{id:"pintxos",name:"Basque Pinchos",tagline:"San Sebastián Tradition",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Gourmet canapés on sourdough bread featuring signature gildas, stuffed piquillo peppers, and Iberian sirloin.",highlights:["48h Sourdough Bread","Donostia Premium Gildas","Extra Virgin Olive Oil"],items:["MUNCHOS Gilda: Ibarra chili pepper, Cantabrian anchovy & Gordal olive","Iberian Sirloin over Pedro Ximénez reduction & Idiazábal cheese","Confit Piquillo pepper stuffed with seafood"]},{id:"plancha",name:"Grill & Plancha",tagline:"Sandwiches, Burgers, Sausages",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Grilled gourmet burgers, artisanal sandwiches, and Basque/Bavarian sausages cooked fresh on site.",highlights:["Aged Beef","Artisanal Brioche Bun","House Sauces"],items:["Dry-aged beef gourmet mini burgers with smoked Idiazábal cheese","Grilled artisanal sandwich with Iberian ham & melted cheese","Grilled artisanal sausages with mild alioli and Basque chimichurri"]},{id:"pizzas",name:"Homemade Pizzas",tagline:"In Situ (Freshly Baked Live)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Artisanal pizzas baked live during your event made with 48-hour fermented sourdough and fresh ingredients.",highlights:["Baked Live On-Site","48h Sourdough","Mozzarella Fior di Latte"],items:["Gourmet Margherita pizza with San Marzano tomatoes & fresh basil","Basque pizza with artisanal chistorra sausage, piquillo peppers & smoked cheese","Iberian pizza with smoked salmon, wild arugula & citrus emulsion"]},{id:"sushi",name:"Sushi Fusion",tagline:"Nikkei-Basque Fusion",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Balfegó bluefin tuna nigiris, wild salmon uramakis with a touch of txakoli, and master sashimi.",highlights:["No Added Sugars","Sustainable Wild Fish","Artisanal Soy Sauces"],items:["Red Tuna Nigiri with seared foie & Añana mineral salt","Salmon & Avocado Uramaki with kimchi mayo & black sesame","Scallop Tartare with wakame seaweed & citrus emulsion"]},{id:"paellas",name:"Paellas & Rice Dishes",tagline:"Live Paellas, Soupy Rices, Risottos",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Mediterranean paellas cooked live on site, seafood soupy rice, and creamy boletus risotto with Idiazábal.",highlights:["Albufera Bomba Rice","Cooked Live On-Site","Crispy Socarrat"],items:["Seafood & Senyoret Paella with king prawns, fresh squid & saffron","Cantabrian Lobster Soupy Rice with concentrated seafood broth","Creamy Boletus Edulis & Smoked Idiazábal Cheese Risotto"]}],cta:"Request custom quote"},uh={badge:"Calculator & Direct Estimate",title:"Design the experience for your event.",subtitle:`Enter your gathering details to compute an instant estimate.
You will receive an official proposal within 24h.`,labels:{guests:"Number of Guests (10 to 50):",date:"Event Date:",menuType:"Main Menu Selection:",extras:"Optional Extra Services:",estimatedTotal:"Estimated Total Price:",perPerson:"per person",submitBtn:"Request Official Quote (No Obligation)"},menuOptions:[{id:"de-tapas",name:"Basque Pinchos & Grill Experience",price:38},{id:"pizzas-fusion",name:"Live Homemade Pizzas & Pinchos",price:44},{id:"paellas-showcooking",name:"Live Paellas & Rice Showcooking",price:48},{id:"full-experience",name:"Full MUNCHOS Experience (Sushi + Grill + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"On-Site Chef & Live Showcooking (+180€)",price:180},{id:"sommelier",name:"Basque Wine & Txakoli Pairing (+12€ / guest)",pricePerGuest:12},{id:"desserts",name:"Basque Sweet Table & La Viña Cheesecake (+7€ / guest)",pricePerGuest:7},{id:"tableware",name:"Premium Glassware & Tableware Rental (+5€ / guest)",pricePerGuest:5}]},mh={badge:"'Eat Healthy' Philosophy",title:"The balance between hedonistic pleasure and real wellbeing.",text:"Eating well never means compromising on taste. At MUNCHOS we believe culinary delight and nutritional balance belong on the same plate — which is why we choose top-tier ingredients, gentle cooking techniques, and design every menu thoughtfully without sacrificing a single bit of flavor.",points:[{title:"No refined oils",desc:"We exclusively use cold-pressed Extra Virgin Olive Oil (EVOO)."},{title:"Low in sugar",desc:"We honor the natural sweetness of seasonal vegetables and fruits."},{title:"Clean & light protein",desc:"Wild Cantabrian fish and lean meats prepared to perfection."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Founder & Head Chef MUNCHOS Munich"},ph={badge:"MUNCHOS Commitment",title:"Absolute Quality & Punctuality Guarantee.",subtitle:"Your peace of mind is the main ingredient of our catering.",cards:[{title:"Guaranteed Punctuality",desc:"We arrive 45 minutes prior for setup. If delayed over 15 minutes without force majeure, we refund 20% of the total cost."},{title:"100% Freshness & Hygiene",desc:"Strict cold-chain maintenance and certified thermal transport. If any dish fails to meet expectations, we replace it immediately."},{title:"24h Claim Management",desc:"Direct line to management. Response and financial resolution or replacement within 24 business hours."}]},hh={badge:"Real Experiences",title:"What hosts in Munich say.",reviews:[{name:"Elena R.",event:"40th Birthday in Bogenhausen (25 guests)",comment:"MUNCHOS turned my living room into an elegant Donostia tavern. The cod pinchos and Balfegó nigiris vanished in minutes. My German guests were thrilled.",rating:5},{name:"Markus & Sofía",event:"Private Dinner in Schwabing (15 guests)",comment:"We were looking for catering that wasn't heavy or greasy. The balance of dishes and immaculate presentation won us over.",rating:5},{name:"Carlos M.",event:"Corporate Event in Glockenbach (35 guests)",comment:"German punctuality with authentic Basque flavor. The live chef service was worth every euro. The La Viña-style cheesecake is unbeatable.",rating:5}]},fh={badge:"Delicatessen at Home",title:"MUNCHOS Gourmet Products.",subtitle:"Bring Cantabrian pantry goods and our exclusive products directly to your home in Munich.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Basque Winery",price:22,image:"/images/IMG_1240.jpeg",desc:"Fresh Basque white wine with a delicate natural effervescence and apple notes. Perfect pairing for sushi."},{id:"aove-piparras",name:"Ibarra Chili Peppers in Apple Vinegar",category:"Artisanal Preserves",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Handpicked tender Ibarra peppers, mild and without aggressive heat. Traditional production."},{id:"anchoas-cantabrico",name:"Cantabrian Anchovies in EVOO",category:"Premium Salt-Cured",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Hand-cleaned fillets, aged 12 months in salt and packed in extra virgin olive oil."},{id:"queso-idiazabal",name:"Artisanal Smoked Idiazábal Cheese (350g)",category:"Artisan Cheese",price:16,image:"/images/IMG_2093.jpeg",desc:"Made from raw Latxa sheep milk and smoked with Basque beechwood."}],addBtn:"Add to selection",interestBtn:"View shopping list"},gh={title:"Ready to host an unforgettable gathering in Munich?",subtitle:`Book your date in advance.
We accept a limited number of events per week to guarantee maximum freshness and boutique care.`,primaryBtn:"Request date & quote",secondaryBtn:"Contact via WhatsApp"},xh={text:"Boutique Catering Munich (10-50 people)",button:"Book my Catering"},vh={title:"Booking Request / Quote",subtitle:"Fill in your details and we will reach out within 24 hours with a custom proposal.",name:"Your full name:",email:"Email address:",phone:"Contact phone (WhatsApp):",location:"Event location in Munich / Area:",notes:"Notes or dietary requirements of your guests:",submit:"Send Quote Request",successTitle:"Request Received!",successText:"Thank you for contacting MUNCHOS. We will reply shortly with a detailed proposal."},yh={about:"MUNCHOS brings Basque culinary authenticity and master sushi craft to the heart of Munich, turning small gatherings into unforgettable experiences.",quickLinks:"Quick Links",legal:"Legal Information",privacy:"Privacy Policy",terms:"Terms of Service",impressum:"Impressum",contact:"Contact & Bookings",address:"Munich, Bavaria — Germany",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. All rights reserved. Boutique Catering in Munich."},bh={badge:"Exclusive MUNCHOS Promotion",items:[{id:"promo_01",headline:"Live-Cooked Basque Seafood Paella Special on Weekends",bodyText:"Enhance your catering with a spectacular seafood paella cooked live in your garden or terrace in Munich.",ctaText:"Inquire Paella Dates"}]},kh={bannerTitle:"We Respect Your Privacy",bannerText:"We use essential and analytics cookies to ensure the smooth operation of our catering booking platform and analyze traffic anonymously (GDPR/DSGVO compliant).",acceptAll:"Accept All",essentialOnly:"Essential Only",settings:"Manage Preferences",modalTitle:"Cookie Consent Settings",modalSubtitle:"You can customize the categories of cookies you authorize for MUNCHOS Catering.",savePreferences:"Save Preferences",catEssential:"Required Cookies (Technical)",catEssentialDesc:"Essential for navigation, the gourmet shopping cart, and processing reservations.",catAnalytics:"Analytics Cookies",catAnalyticsDesc:"Allow us to measure website traffic to optimize performance and user experience.",catMarketing:"Marketing Cookies",catMarketingDesc:"Used to present tailored culinary offers and exclusive gastronomic promotions."},wh={title:"Secure Payment Methods",subtitle:"We accept major payment options in Germany and the EU",paypal:"PayPal / Apple Pay",klarna:"Klarna / Sofort",cards:"Credit / Debit Cards (Stripe)",invoice:"B2B Invoice / SEPA Bank Transfer"},jh={brand:ih,nav:sh,hero:oh,benefits:lh,howItWorks:ch,menus:dh,bookingWidget:uh,philosophy:mh,guarantee:ph,testimonials:hh,gourmetShop:fh,finalCta:gh,stickyCta:xh,modal:vh,footer:yh,promotions:bh,cookies:kh,payments:wh},Nh={name:"MUNCHOS",tagline:"Pinchos in München",location:"München, Deutschland",subtagline:"Boutique-Catering & Baskische Delikatessen"},Sh={menus:"Menüs & Karte",experiencia:"Erlebnis",testimonios:"Bewertungen",gourmet:"Gourmet Shop",reservar:"CATERING BUCHEN",cartBadge:"Warenkorb"},Ch={badge:"✦ BOUTIQUE CATERING IN MÜNCHEN · 10 BIS 50 GÄSTE",headlinePart1:"Baskische Pinchos & ",headlineHighlight:"mediterrane Küche",headlinePart2:" für private Feiern",subheadline:"Premium-Sushi, handgemachte Pinchos und Live-Paella vor Ort. Wir bringen exklusiven Geschmack direkt zu Ihrem privaten Event.",ctaPrimary:"CATERING BUCHEN →",ctaSecondary:"🍴 MENÜS & PREISE SEHEN",stats:[{value:"100%",label:"Frische handwerkliche Produkte"},{value:"10–50",label:"Gäste pro Erlebnis"},{value:"4.9 / 5",label:"Kundenbewertung"}]},zh={badge:"Warum MUNCHOS?",title:"Spitzengastronomie für unbeschwerten Genuss.",subtitle:`Wir kombinieren traditionelle baskische Pinchos mit Vor-Ort-Paella und Meister-Sushi.
Ein schlüsselfertiger Komplettservice.`,items:[{icon:"UtensilsCrossed",title:"Saisonale Frische",desc:"Zertifizierte Zutaten, täglich mit strengen Gourmet-Kriterien ausgewählt."},{icon:"Sparkles",title:"Tadelloser Service",desc:"Wir kümmern uns um die Präsentation und Details, damit Sie der perfekte Gastgeber sind."},{icon:"Sliders",title:"100% Anpassbare Menüs",desc:"Jedes Angebot wird individuell an die Wünsche und Vorlieben Ihrer Gäste angepasst."},{icon:"HeartHandshake",title:"Balance aus Genuss & Wohlbefinden",desc:"Leichte Zubereitungsmethoden und ausgewogene Kompositionen für besten Geschmack."}]},Eh={badge:"Der MUNCHOS Ablauf",title:"Von der Idee zu Ihrem Tisch in 4 einfachen Schritten.",subtitle:`Ein Ablauf für maximalen Komfort.
Null Stress am Tag Ihrer Feier.`,steps:[{number:"01",title:"Datum & Konzept wählen",desc:"Nennen Sie uns den Anlass, die Gästeanzahl (10 bis 50) und das Wunschdatum in München."},{number:"02",title:"Menü individuell gestalten",desc:"Wählen Sie Ihre Kombination aus Pinchos, Gegrilltem, Pizza vor Ort, Sushi oder Paella."},{number:"03",title:"Zubereitung & Logistik",desc:"Frisch am Eventtag gekocht und in Kühlfahrzeugen mit edlem Geschirr geliefert."},{number:"04",title:"Service & Vollkommener Genuss",desc:"Perfekt servierbereit oder mit Live-Koch. Sie genießen, wir erledigen den Rest."}]},Ph={badge:"Unsere Gastronomische Auslese",title:"Was möchten Sie genießen? Gestalten Sie Ihren Wunsch!",subtitle:`Entdecken Sie unsere 5 Spezialitäten.
Perfekt für entspannte und hochklassige Events.`,categories:[{id:"pintxos",name:"Baskische Pinchos",tagline:"Tradition aus San Sebastián",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Edle Canapés auf handwerklichem Sauerteigbrot mit Gourmet-Gildas, gefüllten Piquillo-Paprikas und iberischem Filet.",highlights:["48h Sauerteigbrot","Donostia Premium-Gildas","Natives Olivenöl Extra"],items:["MUNCHOS Gilda: Ibarra-Peperoni, kantabrische Sardelle & Gordal-Olive","Iberisches Schweinefilet auf Pedro Ximénez Reduktion & Idiazábal-Käse","Konfierte Piquillo-Paprika mit Meeresfrüchte-Füllung"]},{id:"plancha",name:"Plancha & Grill",tagline:"Sandwiches, Burger, Würste",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Gegrillte Gourmet-Burger, handwerkliche Sandwiches und baskische/bayerische Würste frisch zubereitet.",highlights:["Gereiftes Rindfleisch","Handwerklicher Brioche-Bun","Hausgemachte Saucen"],items:["Gourmet Mini-Burger vom Dry-Aged Rind mit geräuchertem Idiazábal","Warmes Plancha-Sandwich mit iberischem Schinken & geschmolzenem Käse","Würstchen vom Grill mit mildem Alioli und baskischem Chimichurri"]},{id:"pizzas",name:"Hausgemachte Pizzas",tagline:"In situ (Frisch vor Ort gebacken)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Handgemachte Pizzas, vor Ort mit 48h fermentiertem Sauerteig und frischen Zutaten direkt gebacken.",highlights:["Vor Ort gebacken","48h Sauerteig","Mozzarella Fior di Latte"],items:["Gourmet Pizza Margherita mit San Marzano Tomaten & frischem Basilikum","Baskische Pizza mit Chistorra-Wurst, konfierten Piquillos & Räucherkäse","Iberische Pizza mit Räucherlachs, Rucola & Zitrusemulsion"]},{id:"sushi",name:"Sushi Fusion",tagline:"Nikkei-Baskische Fusion",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Balfegó Blauflossen-Thunfisch Nigiris, Wildlachs-Uramakis mit Txakoli-Note und Meister-Sashimi.",highlights:["Ohne zugesetzten Zucker","Nachhaltiger Wildfisch","Handwerkliche Sojasaucen"],items:["Roter Thunfisch Nigiri mit geflämmter Foie & Añana-Salz","Lachs-Avocado Uramaki mit Kimchi-Mayonnaise & schwarzem Sesam","Jakobsmuschel-Tartar mit Wakame-Alge & Zitrusemulsion"]},{id:"paellas",name:"Paellas & Reisgerichte",tagline:"Live Paellas, Reisgerichte & Risotto",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Mediterrane Paellas live gekocht, cremiges Meeresfrüchte-Reisgericht und Steinpilz-Risotto mit Idiazábal.",highlights:["Albufera Bomba-Reis","Live vor Ort gekocht","Knuspriges Socarrat"],items:["Meeresfrüchte-Paella 'Senyoret' mit Riesengarnele, Tintenfisch & Safran","Cremiges Hummer-Reisgericht mit intensiver Meeresbrühe","Steinpilz-Risotto mit geräuchertem Idiazábal-Käse"]}],cta:"Individuelles Angebot anfordern"},Fh={badge:"Rechner & Sofort-Kalkulation",title:"Planen Sie Ihr Event-Erlebnis.",subtitle:`Geben Sie Ihre Event-Details ein für eine sofortige Schätzung.
Sie erhalten innerhalb von 24h ein offizielles Angebot.`,labels:{guests:"Anzahl der Gäste (10 bis 50):",date:"Event-Datum:",menuType:"Hauptmenü-Auswahl:",extras:"Optionale Zusatzleistungen:",estimatedTotal:"Geschätzte Gesamtsumme:",perPerson:"pro Person",submitBtn:"Unverbindliches Angebot Anfordern"},menuOptions:[{id:"de-tapas",name:"Baskische Pinchos & Plancha Erlebnis",price:38},{id:"pizzas-fusion",name:"Hausgemachte Pizza vor Ort & Pinchos",price:44},{id:"paellas-showcooking",name:"Live Paellas & Reisgerichte Showcooking",price:48},{id:"full-experience",name:"MUNCHOS Komplett-Erlebnis (Sushi + Plancha + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"Koch & Live Showcooking vor Ort (+180€)",price:180},{id:"sommelier",name:"Baskische Weinbegleitung & Txakoli (+12€ / Gast)",pricePerGuest:12},{id:"desserts",name:"Baskisches Dessertbuffet & Käsekuchen La Viña (+7€ / Gast)",pricePerGuest:7},{id:"tableware",name:"Premium Geschirr- & Gläserverleih (+5€ / Gast)",pricePerGuest:5}]},Ah={badge:"Philosophie 'Gesund Genießen'",title:"Die Balance zwischen Genuss und echtem Wohlbefinden.",text:"Gutes Essen bedeutet keinesfalls Verzicht. Bei MUNCHOS glauben wir, dass kulinarischer Genuss und Ausgewogenheit auf demselben Teller harmonieren – deshalb wählen wir erstklassige Zutaten, achten auf sanfte Zubereitung und planen jedes Menü auch unter nährstoffreichen Gesichtspunkten.",points:[{title:"Keine raffinierten Öle",desc:"Wir verwenden ausschließlich kaltgepresstes Natives Olivenöl Extra (AOVE)."},{title:"Zuckerarm",desc:"Wir schätzen die natürliche Süße von saisonalem Gemüse und Obst."},{title:"Reines & leichtes Protein",desc:"Kantabrischer Wildfisch und mageres Fleisch auf den Punkt zubereitet."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Chefkoch & Gründer MUNCHOS München"},Mh={badge:"MUNCHOS Versprechen",title:"Garantie für Qualität und absolute Pünktlichkeit.",subtitle:"Ihre Unbesorgtheit ist die wichtigste Zutat unseres Caterings.",cards:[{title:"Garantiierte Pünktlichkeit",desc:"Wir treffen 45 Minuten vor Eventbeginn zum Aufbau ein. Bei Verspätung von mehr als 15 Minuten erstatten wir 20% des Gesamtwerts."},{title:"100% Frische & Hygiene",desc:"Strikte Einhaltung der Kühlkette und zertifizierter Thermotransport. Sollte ein Gericht nicht Ihren Erwartungen entsprechen, ersetzen wir es sofort."},{title:"Reklamationsbearbeitung in 24h",desc:"Direkter Draht zur Geschäftsführung. Rückmeldung und Erstattung oder Ersatz innerhalb von 24 Arbeitsstunden."}]},Th={badge:"Echte Erfahrungen",title:"Was Gastgeber in München sagen.",reviews:[{name:"Elena R.",event:"40. Geburtstag in Bogenhausen (25 Personen)",comment:"MUNCHOS hat mein Wohnzimmer in eine elegante Donostia-Bar verwandelt. Die Kabeljau-Pinchos und das Balfegó-Nigiri waren im Nu weg. Meine deutschen Gäste waren begeistert.",rating:5},{name:"Markus & Sofía",event:"Privates Dinner in Schwabing (15 Personen)",comment:"Wir suchten ein Catering, das weder schwer noch fettig ist. Die Ausgewogenheit der Gerichte und die makellose Präsentation haben uns überzeugt.",rating:5},{name:"Carlos M.",event:"Firmenevent im Glockenbach (35 Personen)",comment:"Deutsche Pünktlichkeit mit authentischem baskischen Geschmack. Der Live-Koch-Service war jeden Euro wert. Der Käsekuchen nach La Viña Art ist unübertroffen.",rating:5}]},Oh={badge:"Delikatessen für Zuhause",title:"MUNCHOS Gourmet Produkte.",subtitle:"Holen Sie sich den Geschmack Kantabriens und exklusive Produkte direkt nach Hause in München.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Baskisches Weingut",price:22,image:"/images/IMG_1240.jpeg",desc:"Frischer baskischer Weißwein mit feiner natürlicher Kohlensäure und Apfelnoten. Perfekt zu Sushi."},{id:"aove-piparras",name:"Ibarra-Peperoni in Apfelessig",category:"Handwerkliche Konserven",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Zarte Ibarra-Peperoni, einzeln ausgewählt, mild und ohne scharfe Schärfe. Traditionelle Herstellung."},{id:"anchoas-cantabrico",name:"Kantabrische Sardellen in Extra Olivenöl",category:"Premium Salzzutaten",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Handgeputzte Filets, 12 Monate in Salz gereift und in kaltgepresstem Olivenöl eingelegt."},{id:"queso-idiazabal",name:"Handwerklicher Räucherkäse Idiazábal (350g)",category:"Gourmet Käse",price:16,image:"/images/IMG_2093.jpeg",desc:"Aus Rohmilch vom Latxa-Schaf hergestellt und mit baskischem Buchenholz geräuchert."}],addBtn:"Zur Auswahl hinzufügen",interestBtn:"Einkaufsliste ansehen"},Ih={title:"Bereit für ein unvergessliches Event in München?",subtitle:`Sichern Sie sich Ihren Wunschtermin frühzeitig.
Wir betreuen eine begrenzte Anzahl an Events pro Woche für maximale Frische und Boutique-Qualität.`,primaryBtn:"Termin & Angebot anfragen",secondaryBtn:"Kontakt via WhatsApp"},Dh={text:"Boutique Catering München (10-50 Personen)",button:"Catering buchen"},Lh={title:"Buchungsanfrage / Angebot",subtitle:"Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.",name:"Ihr vollständiger Name:",email:"E-Mail-Adresse:",phone:"Telefonnummer (WhatsApp):",location:"Event-Ort in München / Umgebung:",notes:"Hinweise oder Allergien Ihrer Gäste:",submit:"Unverbindliches Angebot Senden",successTitle:"Anfrage Erhalten!",successText:"Vielen Dank für Ihre Anfrage bei MUNCHOS. Wir antworten Ihnen in Kürze mit einem detaillierten Angebot."},Rh={about:"MUNCHOS bringt authentische baskische Gastronomie und edles Meister-Sushi ins Herz von München und verwandelt Feiern in unvergessliche Erlebnisse.",quickLinks:"Quick-Links",legal:"Rechtliches",privacy:"Datenschutzerklärung",terms:"AGB",impressum:"Impressum",contact:"Kontakt & Reservierung",address:"München, Bayern — Deutschland",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. Alle Rechte vorbehalten. Catering Boutique in München."},_h={badge:"Exklusives MUNCHOS Angebot",items:[{id:"promo_01",headline:"Baskische Paella-Spezialität auf offenem Feuer am Wochenende",bodyText:"Ergänzen Sie Ihr Catering mit einer spektakulären Meeresfrüchte-Paella, die live in Ihrem Garten oder auf Ihrer Terrasse in München zubereitet wird.",ctaText:"Paella-Termine Anfragen"}]},Bh={bannerTitle:"Wir respektieren Ihre Privatsphäre",bannerText:"Wir verwenden eigene und Drittanbieter-Cookies, um die ordnungsgemäße Funktion unserer Catering-Plattform zu gewährleisten und den Datenverkehr anonym zu analysieren (DSGVO-konform).",acceptAll:"Alle akzeptieren",essentialOnly:"Nur essenzielle",settings:"Einstellungen",modalTitle:"Cookie-Einwilligungseinstellungen",modalSubtitle:"Sie können die Kategorien von Cookies anpassen, die Sie für MUNCHOS Catering autorisieren.",savePreferences:"Einstellungen speichern",catEssential:"Erforderliche Cookies (Technisch)",catEssentialDesc:"Unverzichtbar für Navigation, den Gourmet-Warenkorb und die Abwicklung von Buchungen.",catAnalytics:"Analytische Cookies",catAnalyticsDesc:"Ermöglichen uns die Messung der Website-Nutzung zur Optimierung von Geschwindigkeit und Benutzererlebnis.",catMarketing:"Marketing-Cookies",catMarketingDesc:"Wird verwendet, um personalisierte Angebote und exklusive kulinarische Aktionen anzuzeigen."},Gh={title:"Sichere Zahlungsmethoden",subtitle:"Wir akzeptieren die wichtigsten Zahlungsmethoden in Deutschland und der EU",paypal:"PayPal / Apple Pay",klarna:"Klarna / Sofortüberweisung",cards:"Kreditkarten (Visa / Mastercard)",invoice:"B2B-Rechnung / SEPA-Überweisung"},Hh={brand:Nh,nav:Sh,hero:Ch,benefits:zh,howItWorks:Eh,menus:Ph,bookingWidget:Fh,philosophy:Ah,guarantee:Mh,testimonials:Th,gourmetShop:Oh,finalCta:Ih,stickyCta:Dh,modal:Lh,footer:Rh,promotions:_h,cookies:Bh,payments:Gh},zn={es:ah,en:jh,de:Hh},Wd=j.createContext(),Uh=({children:e})=>{const[t,n]=j.useState("es"),a=i=>{const s=i.split(".");let o=zn[t]||zn.es;for(const l of s)if(o[l]!==void 0)o=o[l];else{let c=zn.es;for(const d of s)if(c&&c[d]!==void 0)c=c[d];else return i;return c}return o};return r.jsx(Wd.Provider,{value:{lang:t,setLang:n,t:a,content:zn[t]||zn.es},children:e})},ie=()=>{const e=j.useContext(Wd);if(!e)throw new Error("useTranslation must be used within a LanguageProvider");return e},qd=j.createContext(),Pl="munchos_auth_users_v1",pi="munchos_auth_session_v1",Vh=[{email:"owner@munchos.de",password:"owner",name:"Oskar Marijuan (Owner)",role:"owner"},{email:"staff@munchos.de",password:"staff",name:"MUNCHOS Equipo Staff",role:"staff"}],$h=({children:e})=>{const[t,n]=j.useState(()=>{try{const d=localStorage.getItem(Pl);if(d)return JSON.parse(d)}catch{}return Vh}),[a,i]=j.useState(()=>{try{const d=localStorage.getItem(pi);if(d)return JSON.parse(d)}catch{}return null});j.useEffect(()=>{try{localStorage.setItem(Pl,JSON.stringify(t))}catch{}},[t]),j.useEffect(()=>{try{a?localStorage.setItem(pi,JSON.stringify(a)):localStorage.removeItem(pi)}catch{}},[a]);const s=(d,h)=>{const f=t.find(p=>p.email.toLowerCase()===d.toLowerCase()&&p.password===h);if(f){const{password:p,...y}=f;return i(y),{success:!0,user:y}}return{success:!1,error:"Credenciales inválidas. Comprueba tu correo y contraseña."}},o=()=>{i(null)},l=d=>{if(!a||a.role!=="owner")return{success:!1,error:"Solo el propietario (Owner) puede crear cuentas de staff."};if(t.some(y=>y.email.toLowerCase()===d.email.toLowerCase()))return{success:!1,error:"Ya existe una cuenta con este correo electrónico."};const f={...d,role:"staff"},p=[...t,f];return n(p),{success:!0,user:f}},c=d=>a?a.role==="owner"?!0:["view_calendar","manage_reservations","add_reservation"].includes(d):!1;return r.jsx(qd.Provider,{value:{currentUser:a,users:t,login:s,logout:o,createStaffAccount:l,hasPermission:c},children:e})},Ta=()=>{const e=j.useContext(qd);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),E=(e,t)=>{const n=j.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:c,...d},h)=>j.createElement("svg",{ref:h,...Wh,width:i,height:i,stroke:a,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${qh(e)}`,l].join(" "),...d},[...t.map(([f,p])=>j.createElement(f,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=E("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=E("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=E("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=E("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=E("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=E("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=E("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=E("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=E("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=E("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=E("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=E("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=E("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=E("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=E("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=E("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=E("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=E("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=E("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=E("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=E("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=E("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=E("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=E("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=E("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=E("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=E("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=E("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=E("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=E("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=E("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=E("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=E("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=E("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=E("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=E("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=E("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=E("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=E("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=E("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=E("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=E("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=E("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=E("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=E("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=E("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=E("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=E("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=E("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=E("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=E("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=E("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=E("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=E("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=E("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=E("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=E("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=E("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=E("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=E("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=E("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=E("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),zf=({onOpenCart:e,cartCount:t,onOpenBooking:n})=>{const{lang:a,setLang:i,t:s}=ie(),[o,l]=j.useState(!1),[c,d]=j.useState(!1);j.useEffect(()=>{const f=()=>{l(window.scrollY>30)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const h=[{href:"#menus",label:s("nav.menus")},{href:"#como-funciona",label:s("nav.experiencia")},{href:"#testimonios",label:s("nav.testimonios")},{href:"#gourmet",label:s("nav.gourmet")}];return r.jsxs("header",{className:`navbar-glass-header ${o?"is-scrolled":""}`,children:[r.jsxs("div",{className:"container nav-glass-container",children:[r.jsx("a",{href:"#",className:"nav-logo-link",title:"MUNCHOS Catering Boutique",children:r.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"nav-logo-img"})}),r.jsx("nav",{className:"desktop-nav-center",children:h.map((f,p)=>r.jsx("a",{href:f.href,className:"nav-glass-link",children:f.label},p))}),r.jsxs("div",{className:"nav-glass-right",children:[r.jsxs("div",{className:"compact-lang-switcher",children:[r.jsx("button",{className:`compact-lang-btn ${a==="es"?"active":""}`,onClick:()=>i("es"),title:"Español (Castellano)",children:"ES"}),r.jsx("span",{className:"lang-divider",children:"|"}),r.jsx("button",{className:`compact-lang-btn ${a==="de"?"active":""}`,onClick:()=>i("de"),title:"Deutsch",children:"DE"}),r.jsx("span",{className:"lang-divider",children:"|"}),r.jsx("button",{className:`compact-lang-btn ${a==="en"?"active":""}`,onClick:()=>i("en"),title:"English",children:"EN"})]}),r.jsxs("button",{className:"nav-cart-btn",onClick:e,"aria-label":"Ver carrito gourmet",title:"Carrito de Compras",children:[r.jsx(ir,{size:18}),t>0&&r.jsx("span",{className:"nav-cart-badge",children:t})]}),r.jsxs("button",{className:"btn nav-secondary-cta",onClick:n,children:[r.jsx(Ve,{size:15}),r.jsx("span",{children:s("nav.reservar")})]}),r.jsx("button",{className:"mobile-hamburger",onClick:()=>d(!c),"aria-label":"Toggle Navigation Menu",children:c?r.jsx(kt,{size:24}):r.jsx(uf,{size:24})})]})]}),c&&r.jsx("div",{className:"mobile-overlay",onClick:()=>d(!1),children:r.jsxs("div",{className:"mobile-drawer",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"mobile-drawer-header",children:[r.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"mobile-logo"}),r.jsx("button",{className:"mobile-close",onClick:()=>d(!1),children:r.jsx(kt,{size:24})})]}),r.jsx("div",{className:"mobile-nav-links",children:h.map((f,p)=>r.jsx("a",{href:f.href,onClick:()=>d(!1),children:f.label},p))}),r.jsxs("div",{className:"mobile-drawer-actions",children:[r.jsxs("div",{className:"mobile-drawer-lang",children:[r.jsx("button",{className:`mobile-lang-btn ${a==="es"?"active":""}`,onClick:()=>{i("es"),d(!1)},children:"Español (ES)"}),r.jsx("button",{className:`mobile-lang-btn ${a==="de"?"active":""}`,onClick:()=>{i("de"),d(!1)},children:"Deutsch (DE)"}),r.jsx("button",{className:`mobile-lang-btn ${a==="en"?"active":""}`,onClick:()=>{i("en"),d(!1)},children:"English (EN)"})]}),r.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{d(!1),n()},children:[r.jsx(Ve,{size:16}),r.jsx("span",{children:s("nav.reservar")})]})]})]})}),r.jsx("style",{children:`
        /* SINGLE ROW GLASSMORPHISM HEADER (78px HEIGHT) */
        .navbar-glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 78px;
          z-index: 1000;
          background: rgba(12, 11, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 167, 27, 0.20);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
        }

        .navbar-glass-header.is-scrolled {
          background: rgba(10, 9, 8, 0.94);
          border-bottom-color: rgba(229, 167, 27, 0.40);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.85);
        }

        .nav-glass-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }

        /* LOGO */
        .nav-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-logo-img {
          height: 52px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
          transition: transform 0.2s ease, height 0.2s ease;
        }

        .nav-logo-link:hover .nav-logo-img {
          transform: scale(1.02);
        }

        /* CENTER 4-LINK NAVIGATION */
        .desktop-nav-center {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-glass-link {
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(247, 245, 240, 0.88);
          text-decoration: none;
          letter-spacing: 0.03em;
          position: relative;
          padding: 0.4rem 0;
          transition: color 0.2s ease;
        }

        .nav-glass-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #e5a71b;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-glass-link:hover {
          color: #e5a71b;
        }

        .nav-glass-link:hover::after {
          width: 100%;
        }

        /* RIGHT SECTION: LANG & CTAs */
        .nav-glass-right {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        /* COMPACT LANG SWITCHER (DESKTOP) */
        .compact-lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(229, 167, 27, 0.25);
          padding: 0.3rem 0.65rem;
          border-radius: 0px !important;
        }

        .compact-lang-btn {
          background: none;
          border: none;
          color: rgba(247, 245, 240, 0.6);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.05em;
          padding: 0 0.15rem;
          transition: color 0.2s ease;
        }

        .compact-lang-btn:hover {
          color: #e5a71b;
        }

        .compact-lang-btn.active {
          color: #e5a71b;
          font-weight: 900;
        }

        .lang-divider {
          color: rgba(247, 245, 240, 0.25);
          font-size: 0.75rem;
        }

        /* CART BUTTON */
        .nav-cart-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(229, 167, 27, 0.25);
          color: rgba(247, 245, 240, 0.9);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-cart-btn:hover {
          background: rgba(229, 167, 27, 0.15);
          color: #e5a71b;
          border-color: #e5a71b;
        }

        .nav-cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #e5a71b;
          color: #0C0B0A;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SECONDARY CTA BUTTON */
        .nav-secondary-cta {
          background: rgba(229, 167, 27, 0.12);
          border: 1px solid #e5a71b;
          color: #e5a71b;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.55rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-secondary-cta:hover {
          background: #e5a71b;
          color: #0C0B0A;
          box-shadow: 0 0 20px rgba(229, 167, 27, 0.35);
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
          padding: 0.25rem;
        }

        /* MOBILE DRAWER STYLING */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 9, 8, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 9999;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: #0C0B0A;
          border-left: 1px solid rgba(229, 167, 27, 0.35);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 50px rgba(0, 0, 0, 0.95);
          z-index: 10000;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-logo {
          height: 48px;
        }

        .mobile-close {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          cursor: pointer;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .mobile-close:hover {
          background: rgba(229, 167, 27, 0.2);
          color: #e5a71b;
          border-color: #e5a71b;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .mobile-nav-links a {
          font-size: 1.15rem;
          font-weight: 700;
          color: rgba(247, 245, 240, 0.95);
          text-decoration: none;
          letter-spacing: 0.03em;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .mobile-nav-links a:hover {
          color: #e5a71b;
          padding-left: 0.5rem;
        }

        .mobile-drawer-actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-drawer-lang {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-lang-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(247, 245, 240, 0.7);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.55rem 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-lang-btn.active {
          background: rgba(229, 167, 27, 0.15);
          border-color: #e5a71b;
          color: #e5a71b;
          font-weight: 800;
        }

        /* RESPONSIVE BREAKPOINTS (COLLAPSE TO HAMBURGER BELOW 1180px TO PREVENT OVERFLOW) */
        @media (max-width: 1180px) {
          .desktop-nav-center {
            display: none;
          }

          .mobile-hamburger {
            display: block;
          }

          .nav-secondary-cta {
            display: none;
          }
        }

        /* MOBILE OPTIMIZATIONS (< 768px): ENLARGE LOGO 25-30% AND HIDE PLAIN TEXT LANG SWITCHER IN TOP BAR */
        @media (max-width: 768px) {
          .compact-lang-switcher {
            display: none !important;
          }

          .nav-logo-img {
            height: 64px; /* +25-30% increase for strong mobile brand presence */
          }

          .nav-glass-right {
            gap: 0.8rem;
          }
        }
      `})]})},os="munchos_cms_products_v1",ls="munchos_cms_promotions_v1",cs="munchos_cms_hero_slides_v1",ds=[{id:"pintxos",title:"01 Pintxos Gourmet",subtitle:"Elaboración y artesanía vasca",video:"https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-41484-large.mp4",poster:"/images/IMG_1227.jpeg",active:!0},{id:"livecooking",title:"02 Live Cooking",subtitle:"Paellas in situ & show cooking",video:"https://assets.mixkit.co/videos/preview/mixkit-cooking-a-dish-in-a-pan-over-a-fire-41481-large.mp4",poster:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",active:!0},{id:"sushi",title:"03 Sushi & Premium",subtitle:"Corte Nikkei y emplatado de autor",video:"https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-sushi-rolls-in-a-kitchen-42542-large.mp4",poster:"/images/chef-arranging-sushi-front-view.jpg",active:!0}],Fl=[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi.",active:!0},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional.",active:!0},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra.",active:!0},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca.",active:!0}],Al=[{id:"promo_01",headline:"Especial Paellas Vascas a Fuego Vivo los Fines de Semana",bodyText:"Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",ctaText:"Consultar Fechas de Paella",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-09-30"},{id:"promo_02",headline:"Maridaje Gratuito de Txakoli en Reservas > 30 personas",bodyText:"Este mes, todas las reservas confirmadas de más de 30 invitados incluyen degustación de nuestro Txakoli Reserva.",image:"/images/IMG_1240.jpeg",ctaText:"Aprovechar Promoción",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-08-31"}],lu=()=>{try{const e=localStorage.getItem(os);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(os,JSON.stringify(Fl)),Fl},us=e=>{try{localStorage.setItem(os,JSON.stringify(e))}catch{}},Ef=e=>{const t=lu(),n=t.findIndex(a=>a.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.unshift(e),us(t),t},fo=()=>{try{const e=localStorage.getItem(ls);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(ls,JSON.stringify(Al)),Al},ms=e=>{try{localStorage.setItem(ls,JSON.stringify(e))}catch{}},Pf=e=>{const t=fo(),n=t.findIndex(a=>a.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.unshift(e),ms(t),t},Ff=()=>{const e=fo(),t=new Date().toISOString().split("T")[0];return e.filter(n=>!(!n.active||n.startDate&&n.startDate>t||n.endDate&&n.endDate<t))},go=()=>{try{const e=localStorage.getItem(cs);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(cs,JSON.stringify(ds)),ds},ps=e=>{try{localStorage.setItem(cs,JSON.stringify(e))}catch{}},Af=e=>{const t=go(),n=t.findIndex(a=>a.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.push(e),ps(t),t},Mf=()=>{const t=go().filter(n=>n.active!==!1);return t.length>0?t:ds},xo=(e,t=800,n=800,a=.78)=>new Promise((i,s)=>{if(!e||!e.type.startsWith("image/")){s(new Error("El archivo no es una imagen válida."));return}const o=new FileReader;o.onerror=s,o.onload=l=>{const c=new Image;c.onerror=s,c.onload=()=>{let d=c.width,h=c.height;(d>t||h>n)&&(d/h>t/n?(h=Math.round(h*t/d),d=t):(d=Math.round(d*n/h),h=n));const f=document.createElement("canvas");f.width=d,f.height=h,f.getContext("2d").drawImage(c,0,0,d,h);const y=f.toDataURL("image/jpeg",a);i(y)},c.src=l.target.result},o.readAsDataURL(e)}),Tf=({onOpenBooking:e})=>{const{t}=ie(),[n,a]=j.useState([]),[i,s]=j.useState(0);return j.useEffect(()=>{const o=Mf();a(o)},[]),j.useEffect(()=>{if(n.length>1){const o=setInterval(()=>{s(l=>(l+1)%n.length)},6e3);return()=>clearInterval(o)}},[i,n]),n.length===0?null:r.jsxs("section",{className:"hero-fullscreen",children:[r.jsxs("div",{className:"hero-video-container",children:[n.map((o,l)=>r.jsxs("div",{className:`hero-video-slide ${l===i?"active":""}`,children:[o.poster&&r.jsx("img",{src:o.poster,alt:o.title,className:"hero-fallback-img"}),o.video&&r.jsx("video",{src:o.video,poster:o.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:l===0?"auto":"metadata",className:"hero-video"})]},o.id||l)),r.jsx("div",{className:"hero-horizontal-overlay"}),r.jsx("div",{className:"hero-vertical-overlay"})]}),r.jsx("div",{className:"container hero-content-wrapper",children:r.jsxs("div",{className:"hero-text-block",children:[r.jsxs("div",{className:"hero-gold-badge",children:[r.jsx(bt,{size:14,className:"badge-icon"}),r.jsx("span",{children:t("hero.badge")})]}),r.jsxs("h1",{className:"hero-h1-title",children:[t("hero.headlinePart1"),r.jsx("span",{className:"gold-ranchers-highlight",children:t("hero.headlineHighlight")}),t("hero.headlinePart2")]}),r.jsx("p",{className:"hero-desc-paragraph",children:t("hero.subheadline")}),r.jsxs("div",{className:"hero-buttons-group",children:[r.jsxs("button",{className:"btn hero-primary-btn",onClick:e,children:[r.jsx("span",{children:t("hero.ctaPrimary")}),r.jsx(Ia,{size:18})]}),r.jsxs("a",{href:"#menus",className:"btn hero-secondary-btn",children:[r.jsx(Cf,{size:17}),r.jsx("span",{children:t("hero.ctaSecondary")})]})]}),r.jsx("div",{className:"hero-controls-panel",children:n.map((o,l)=>{const c=l===i,d=(o.title||"").replace(/^\d+\s*/,"");return r.jsxs("button",{className:`carousel-tab-btn ${c?"active":""}`,onClick:()=>s(l),title:`Ver ${o.title}`,children:[r.jsx("div",{className:"tab-progress-track",children:c&&r.jsx("div",{className:"tab-progress-bar"},i)}),r.jsxs("div",{className:"tab-text-info",children:[r.jsx("span",{className:"tab-title",children:d}),o.subtitle&&r.jsx("span",{className:"tab-sub",children:o.subtitle})]})]},o.id||l)})}),r.jsx("div",{className:"hero-proof-cards-row",children:t("hero.stats").map((o,l)=>r.jsxs("div",{className:"proof-metric-card",children:[r.jsx("span",{className:"metric-val",children:o.value}),r.jsx("span",{className:"metric-lbl",children:o.label})]},l))})]})}),r.jsx("style",{children:`
        /* FULLSCREEN HERO CONTAINER (FLEXIBLE HEIGHT & CONTAINER RESILIENCE) */
        .hero-fullscreen {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: auto;
          display: flex;
          align-items: center;
          padding-top: 104px;
          padding-bottom: 2.5rem;
          overflow: hidden;
          background: #0C0B0A;
        }

        /* VIDEO CAROUSEL BACKGROUND */
        .hero-video-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-video-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .hero-video-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .hero-video, .hero-fallback-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.85) saturate(1.1);
        }

        /* GRADIENT OVERLAYS FOR HIGH CONTRAST (WCAG AA COMPLIANCE) */
        .hero-horizontal-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(12, 11, 10, 0.92) 0%,
            rgba(12, 11, 10, 0.78) 45%,
            rgba(12, 11, 10, 0.40) 75%,
            rgba(12, 11, 10, 0.15) 100%
          );
          z-index: 2;
        }

        .hero-vertical-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 11, 10, 0.75) 0%,
            transparent 35%,
            rgba(12, 11, 10, 0.88) 100%
          );
          z-index: 2;
        }

        /* STATIC CONTENT WRAPPER */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
        }

        .hero-text-block {
          max-width: 660px;
          min-height: auto;
          height: auto;
        }

        /* GOLD PILL BADGE */
        .hero-gold-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(229, 167, 27, 0.12);
          border: 1px solid rgba(229, 167, 27, 0.45);
          color: #e5a71b;
          font-family: var(--font-body);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.85rem;
          margin-bottom: 1.1rem;
          border-radius: 0px !important;
          box-shadow: 0 4px 15px rgba(229, 167, 27, 0.20);
          white-space: normal !important;
          word-break: break-word !important;
          max-width: 100%;
          line-height: 1.35;
        }

        .badge-icon {
          color: #e5a71b;
          flex-shrink: 0;
        }

        /* H1 HEADLINE IN 100% RANCHERS FONT WITH DEFENSIVE TYPOGRAPHY */
        .hero-h1-title {
          font-family: var(--font-headline);
          font-weight: 400;
          font-style: normal !important;
          color: #FFFFFF;
          font-size: clamp(2.1rem, 3.6vw, 3.4rem);
          line-height: 1.20;
          margin-bottom: 1.1rem;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95);
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* RANCHERS BRAND GOLD HIGHLIGHT */
        .gold-ranchers-highlight {
          font-family: var(--font-headline);
          font-style: normal !important;
          color: #e5a71b;
          font-weight: 400;
          text-transform: uppercase;
          padding: 0 0.25rem;
          text-shadow: 0 0 25px rgba(229, 167, 27, 0.50);
        }

        /* PARAGRAPH WITH RELATIVE LINE HEIGHT & BREAK CONTROL */
        .hero-desc-paragraph {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          line-height: 1.55;
          color: rgba(247, 245, 240, 0.92);
          margin-bottom: 1.5rem;
          max-width: 600px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* BUTTONS GROUP (DESKTOP & TABLET: 2 EQUAL COLUMNS / MOBILE: STACKED 100% WIDTH GAP 12px) */
        .hero-buttons-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .hero-primary-btn {
          background: #e5a71b;
          color: #0C0B0A;
          font-family: var(--font-body);
          font-size: 0.90rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          border: none;
          box-shadow: 0 6px 25px rgba(229, 167, 27, 0.40);
          transition: all 0.2s ease;
          width: 100%;
          min-height: 48px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .hero-primary-btn:hover {
          background: #f5b72b;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(229, 167, 27, 0.55);
        }

        .hero-secondary-btn {
          background: rgba(12, 11, 10, 0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(247, 245, 240, 0.40);
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          text-decoration: none;
          transition: all 0.2s ease;
          width: 100%;
          min-height: 48px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .hero-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #e5a71b;
          color: #e5a71b;
        }

        /* CAROUSEL CONTROLS PANEL (3-COLUMN GRID directly ABOVE PROOF METRICS) */
        .hero-controls-panel {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          width: 100%;
          margin-bottom: 1rem;
        }

        .carousel-tab-btn {
          background: rgba(18, 17, 16, 0.70);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 0.7rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          transition: all 0.25s ease;
          border-radius: 0px !important;
          width: 100%;
          min-height: auto;
          box-sizing: border-box;
        }

        .carousel-tab-btn:hover {
          background: rgba(28, 26, 24, 0.88);
          border-color: rgba(229, 167, 27, 0.45);
        }

        .carousel-tab-btn.active {
          background: rgba(25, 23, 20, 0.92);
          border-color: #e5a71b;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
        }

        .tab-progress-track {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.20);
          position: relative;
          overflow: hidden;
        }

        .tab-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #e5a71b;
          animation: progressBarFill 6s linear forwards;
        }

        @keyframes progressBarFill {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .tab-text-info {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .tab-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: rgba(247, 245, 240, 0.75);
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .carousel-tab-btn.active .tab-title {
          color: #e5a71b;
        }

        .tab-sub {
          font-size: 0.68rem;
          color: rgba(247, 245, 240, 0.55);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .carousel-tab-btn.active .tab-sub {
          color: rgba(247, 245, 240, 0.90);
        }

        /* PROOF METRIC CARDS ROW (3-COLUMN GRID directly BELOW CAROUSEL CONTROLS) */
        .hero-proof-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          width: 100%;
        }

        .proof-metric-card {
          background: rgba(18, 17, 16, 0.65);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(229, 167, 27, 0.25);
          padding: 0.65rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          border-radius: 0px !important;
          transition: border-color 0.2s ease;
          min-height: auto;
          height: auto;
        }

        .proof-metric-card:hover {
          border-color: rgba(229, 167, 27, 0.55);
        }

        .metric-val {
          font-family: var(--font-headline);
          font-size: 1.25rem;
          font-weight: 400;
          color: #e5a71b;
          line-height: 1.1;
        }

        .metric-lbl {
          font-size: 0.72rem;
          color: rgba(247, 245, 240, 0.85);
          line-height: 1.3;
          font-weight: 600;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* 2. TABLET (768px - 1024px) – EQUILIBRIO Y ALINEACIÓN */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-fullscreen {
            padding-top: 96px;
            padding-bottom: 2.2rem;
            min-height: auto;
            height: auto;
          }

          .hero-h1-title {
            font-size: clamp(1.75rem, 4vw, 2.25rem);
            line-height: 1.22;
          }

          .hero-text-block {
            max-width: 100%;
          }

          .hero-buttons-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 100%;
          }

          .hero-controls-panel {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .hero-proof-cards-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .proof-metric-card {
            padding: 0.55rem 0.5rem;
            text-align: center;
          }

          .metric-lbl {
            font-size: 0.68rem;
          }
        }

        /* 1. MOBILE (< 768px) – LIMPIEZA VISUAL Y FOCO EN CONVERSIÓN */
        @media (max-width: 767px) {
          .hero-fullscreen {
            padding-top: 92px;
            padding-bottom: 0.5rem;
            min-height: auto;
            height: auto;
          }

          /* Oscurecimiento incrementado (WCAG AA Contraste Elevado) */
          .hero-horizontal-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.82) 50%,
              rgba(0, 0, 0, 0.90) 100%
            );
          }

          .hero-vertical-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.78) 0%,
              transparent 35%,
              rgba(0, 0, 0, 0.92) 100%
            );
          }

          .hero-gold-badge {
            font-size: 0.68rem;
            padding: 0.3rem 0.65rem;
            margin-bottom: 0.8rem;
          }

          .hero-h1-title {
            font-size: 1.65rem;
            line-height: 1.22;
            margin-bottom: 0.8rem;
          }

          .gold-ranchers-highlight {
            font-size: 1.6rem;
          }

          .hero-desc-paragraph {
            font-size: 0.88rem;
            margin-bottom: 1.25rem;
            line-height: 1.48;
          }

          /* Botones CTAs en ancho completo (width: 100%) apilados verticalmente con 12px gap */
          .hero-buttons-group {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 0.5rem;
            width: 100%;
          }

          .hero-primary-btn, .hero-secondary-btn {
            justify-content: center;
            width: 100%;
            padding: 0.85rem 1rem;
            font-size: 0.88rem;
            box-sizing: border-box;
          }

          /* Ocultar pestañas intermedias de categorías en móvil para eliminar ruido */
          .hero-controls-panel {
            display: none !important;
          }

          /* Ocultar bloque de métricas en móvil para eliminar ruido y scroll excesivo */
          .hero-proof-cards-row {
            display: none !important;
          }
        }
      `})]})},nt=({color:e="#D4AF37",width:t=160,height:n=36})=>r.jsx("div",{className:"horizontal-pintxo-wrapper",style:{display:"flex",justifyContent:"center",margin:"0 auto 1rem auto"},children:r.jsxs("svg",{width:t,height:n,viewBox:"0 0 200 44",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[r.jsx("line",{x1:"10",y1:"22",x2:"190",y2:"22",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),r.jsx("polygon",{points:"35,10 65,22 35,34",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),r.jsx("polygon",{points:"100,8 118,22 100,36 82,22",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),r.jsx("rect",{x:"140",y:"10",width:"16",height:"24",rx:"8",fill:"none",stroke:e,strokeWidth:"3.5"})]})}),Of={UtensilsCrossed:Sf,Sparkles:ho,Sliders:kf,HeartHandshake:nf},If=()=>{const{t:e}=ie();return r.jsxs("section",{id:"beneficios",className:"section-padding benefits-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge sage-badge",children:e("benefits.badge")}),r.jsx("h2",{children:e("benefits.title")}),r.jsx(nt,{color:"#2D391A",width:140,height:32}),r.jsx("p",{children:e("benefits.subtitle")})]}),r.jsx("div",{className:"benefits-grid",children:e("benefits.items").map((t,n)=>{const a=Of[t.icon]||ho;return r.jsxs("div",{className:"glass-card benefit-card",children:[r.jsx("div",{className:"icon-wrapper",children:r.jsx(a,{size:28})}),r.jsx("h3",{children:t.title}),r.jsx("p",{children:t.desc})]},n)})})]}),r.jsx("style",{children:`
        .benefits-section {
          background-color: #BAC08D;
          color: #1A2215;
          padding: 5rem 0;
        }

        .benefits-section h2 {
          color: #1A2215;
        }

        .benefits-section .section-header p {
          color: #2D391A;
        }

        .sage-badge {
          background: rgba(26, 34, 21, 0.12) !important;
          border-color: #3E4B28 !important;
          color: #2D391A !important;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          background: #182216;
          border: 1px solid rgba(212, 175, 55, 0.35);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: #C9B04A;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(201, 176, 74, 0.18);
          border: 1px solid #C9B04A;
          color: #C9B04A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all var(--transition-fast);
        }

        .benefit-card:hover .icon-wrapper {
          background: #C9B04A;
          color: #0D0D0C;
        }

        .benefit-card h3 {
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .benefit-card p {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #D8D6CD;
        }

        @media (max-width: 767px) {
          .benefits-section {
            padding: 2.5rem 0;
          }
        }
      `})]})},Df=({onOpenBooking:e})=>{const{t}=ie();return r.jsxs("section",{id:"como-funciona",className:"section-padding how-it-works-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge chestnut-badge",children:t("howItWorks.badge")}),r.jsx("h2",{children:t("howItWorks.title")}),r.jsx(nt,{color:"#F5EBE1",width:140,height:32}),r.jsx("p",{children:t("howItWorks.subtitle")})]}),r.jsx("div",{className:"steps-container",children:t("howItWorks.steps").map((n,a)=>r.jsxs("div",{className:"step-card",children:[r.jsx("div",{className:"step-number",children:n.number}),r.jsxs("div",{className:"step-content",children:[r.jsx("h3",{children:n.title}),r.jsx("p",{children:n.desc})]}),a<3&&r.jsx("div",{className:"step-connector",children:r.jsx(Oa,{size:20})})]},a))}),r.jsx("div",{className:"how-it-works-cta",children:r.jsx("button",{className:"btn btn-outline-gold how-cta-btn",onClick:e,children:r.jsx("span",{children:"Diseña tu evento en 2 minutos"})})})]}),r.jsx("style",{children:`
        .how-it-works-section {
          background-color: #886850;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .how-it-works-section h2 {
          color: #FFFFFF;
        }

        .how-it-works-section .section-header p {
          color: #F5EBE1;
        }

        .chestnut-badge {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #FFFFFF !important;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-card {
          background: #2D211A;
          border: 1px solid rgba(201, 176, 74, 0.35);
          padding: 2rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .step-card:hover {
          border-color: #C9B04A;
          transform: translateY(-4px);
        }

        .step-number {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: #C9B04A;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .step-content p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #E6DDD6;
        }

        .step-connector {
          position: absolute;
          right: -1.2rem;
          top: 3.5rem;
          z-index: 2;
          color: #C9B04A;
          background: #2D211A;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #C9B04A;
        }

        .how-it-works-cta {
          text-align: center;
          margin-top: 3.5rem;
        }

        .how-cta-btn {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
          background: #2D211A !important;
        }

        .how-cta-btn:hover {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .step-connector { display: none; }
        }

        @media (max-width: 640px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Lf=({onSelectMenuCategory:e})=>{const{t}=ie(),n=t("menus.categories"),[a,i]=j.useState(n[0].id),s=n.find(o=>o.id===a)||n[0];return r.jsxs("section",{id:"menus",className:"section-padding bg-surface",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge",children:t("menus.badge")}),r.jsx("h2",{children:t("menus.title")}),r.jsx(nt,{color:"#D4AF37",width:140,height:32}),r.jsx("p",{children:t("menus.subtitle")})]}),r.jsx("div",{className:"menu-tabs",children:n.map(o=>r.jsx("button",{className:`menu-tab-btn ${a===o.id?"active":""}`,onClick:()=>i(o.id),children:r.jsx("span",{children:o.name})},o.id))}),r.jsxs("div",{className:"menu-card-display",children:[r.jsxs("div",{className:"menu-image-column",children:[r.jsx("img",{src:s.image,alt:s.name,className:"menu-featured-img"}),r.jsx("div",{className:"menu-img-badge",children:s.tagline})]}),r.jsxs("div",{className:"menu-info-column",children:[r.jsx("h3",{className:"menu-cat-title",children:s.name}),r.jsx("p",{className:"menu-cat-desc",children:s.description}),r.jsx("div",{className:"menu-highlights",children:s.highlights.map((o,l)=>r.jsxs("span",{className:"highlight-tag",children:[r.jsx(co,{size:15}),r.jsx("span",{children:o})]},l))}),r.jsxs("div",{className:"dishes-list",children:[r.jsx("h4",{children:t("menus.sampleDishesTitle")||"Selección representativa de platos:"}),r.jsx("ul",{children:s.items.map((o,l)=>r.jsxs("li",{children:[r.jsx("span",{className:"bullet",children:"•"}),r.jsx("span",{className:"dish-name",children:o})]},l))})]}),r.jsxs("button",{className:"btn btn-primary menu-cta-btn",onClick:()=>e(s.id),children:[r.jsxs("span",{className:"cta-text-wrap",children:[t("menus.cta")," — ",s.name]}),r.jsx(Ia,{size:18,className:"cta-icon"})]})]})]})]}),r.jsx("style",{children:`
        .menu-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          width: 100%;
        }

        .menu-tab-btn {
          background: rgba(30, 29, 27, 0.7);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-secondary);
          padding: 0.85rem 1.8rem;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-transform: uppercase;
          max-width: 100%;
          box-sizing: border-box;
        }

        .menu-tab-btn:hover {
          color: var(--text-dark-primary);
          border-color: var(--accent-cyan);
        }

        .menu-tab-btn.active {
          background: var(--accent-cyan);
          color: #0D0D0C;
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        .menu-card-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .menu-image-column {
          position: relative;
          min-height: 420px;
          width: 100%;
          overflow: hidden;
        }

        .menu-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .menu-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(13, 13, 12, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          width: fit-content;
          max-width: calc(100% - 3rem);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-info-column {
          padding: 2.5rem 2.5rem 2.5rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .menu-cat-title {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          color: var(--text-dark-primary);
          margin-bottom: 0.75rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-cat-desc {
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
          width: 100%;
          max-width: 100%;
        }

        .highlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          text-transform: uppercase;
          max-width: 100%;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          line-height: 1.3;
          box-sizing: border-box;
        }

        .dishes-list {
          margin-bottom: 2rem;
          width: 100%;
          max-width: 100%;
        }

        .dishes-list h4 {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          word-break: break-word;
        }

        .dishes-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
          max-width: 100%;
        }

        .dishes-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .dish-name {
          word-break: break-word;
          overflow-wrap: break-word;
          flex: 1;
        }

        .bullet {
          color: var(--accent-cyan);
          font-weight: bold;
          flex-shrink: 0;
        }

        .menu-cta-btn {
          width: 100%;
          max-width: 100%;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          text-align: center;
          justify-content: center;
          line-height: 1.35;
          padding: 0.85rem 1.25rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-text-wrap {
          white-space: normal !important;
          word-break: break-word !important;
          text-align: center;
        }

        .cta-icon {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .menu-card-display {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .menu-info-column {
            padding: 1.5rem 1.25rem;
          }
          .menu-image-column {
            min-height: 240px;
          }
        }

        @media (max-width: 480px) {
          .menu-info-column {
            padding: 1.25rem 0.9rem;
          }
          .menu-tab-btn {
            padding: 0.65rem 1rem;
            font-size: 0.85rem;
            width: 100%;
          }
        }
      `})]})},vo={maxEventsPerDay:2,maxGuestsPerDay:60},yo=(e,t=20,n=[],a=vo)=>{if(!e)return{isAvailable:!1,reason:"No date provided"};const{maxEventsPerDay:i=2,maxGuestsPerDay:s=60}=a,o=n.filter(d=>d.date===e&&d.status!=="cancelled"),l=o.length,c=o.reduce((d,h)=>d+(parseInt(h.guests)||0),0);return l>=i?{isAvailable:!1,existingEvents:l,currentTotalGuests:c,reason:`Capacidad máxima de eventos alcanzada (${l}/${i})`}:c+t>s?{isAvailable:!1,existingEvents:l,currentTotalGuests:c,reason:`Límite de comensales superado para el día (${c+t}/${s})`}:{isAvailable:!0,existingEvents:l,currentTotalGuests:c,reason:"Fecha disponible"}},Rf=(e,t=20,n=[],a=vo,i=4)=>{if(!e)return[];const s=new Date(e),o=new Date;o.setHours(0,0,0,0);const l=[],c=14;for(let d=-c;d<=c;d++){if(d===0)continue;const h=new Date(s);if(h.setDate(h.getDate()+d),h<o)continue;const f=h.toISOString().split("T")[0];yo(f,t,n,a).isAvailable&&l.push({dateStr:f,distance:Math.abs(d),offsetDays:d,formattedLabel:h.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"})})}return l.sort((d,h)=>d.distance-h.distance),l.slice(0,i)},hs="munchos_reservations_v1",_f="munchos_settings_v1",Ml=[{id:"res_001",date:"2026-08-15",guests:25,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos"],status:"confirmed",source:"public",clientName:"Elena R.",clientEmail:"elena.r@example.de",clientPhone:"+49 176 9876543",location:"Bogenhausen, Múnich",notes:"Cumpleaños 40º. 2 comensales celíacos.",estimatedTotal:1480,pricePerPerson:59,createdAt:"2026-08-01T10:00:00Z"},{id:"res_002",date:"2026-08-15",guests:35,menuType:"full-experience",menuName:"Experiencia Completa MUNCHOS",extras:["Mesa Dulce Vasca"],status:"confirmed",source:"manual",clientName:"Carlos M.",clientEmail:"carlos.firm@munich-law.de",clientPhone:"+49 89 5544332",location:"Glockenbachviertel, Múnich",notes:"Evento de empresa.",estimatedTotal:2275,pricePerPerson:65,createdAt:"2026-08-02T14:30:00Z"},{id:"res_003",date:"2026-08-22",guests:18,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:["Vajilla & Cristalería Premium"],status:"pending",source:"public",clientName:"Markus & Sofía",clientEmail:"sofia.m@web.de",clientPhone:"+49 171 2233445",location:"Schwabing, Múnich",notes:"Cena íntima de aniversario.",estimatedTotal:774,pricePerPerson:43,createdAt:"2026-08-04T16:15:00Z"},{id:"res_004",date:"2026-08-28",guests:40,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos","Mesa Dulce Vasca"],status:"confirmed",source:"public",clientName:"Thomas B.",clientEmail:"thomas.b@techmunich.io",clientPhone:"+49 152 8877665",location:"Lehel, Múnich",notes:"Celebración de proyecto.",estimatedTotal:2840,pricePerPerson:71,createdAt:"2026-08-05T09:20:00Z"},{id:"res_005",date:"2026-09-05",guests:15,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:[],status:"pending",source:"manual",clientName:"Laura H.",clientEmail:"laura.h@gmail.com",clientPhone:"+49 179 4455667",location:"Haidhausen, Múnich",notes:"Reserva telefónica pendiente de confirmación de menú.",estimatedTotal:570,pricePerPerson:38,createdAt:"2026-08-06T11:00:00Z"}],sr=()=>{try{const e=localStorage.getItem(hs);if(e)return JSON.parse(e)}catch(e){console.error("Error reading reservations from storage",e)}return localStorage.setItem(hs,JSON.stringify(Ml)),Ml},cu=e=>{try{localStorage.setItem(hs,JSON.stringify(e))}catch(t){console.error("Error saving reservations",t)}},du=e=>{const t=sr(),n={id:`res_${Date.now()}`,status:e.status||"pending",source:e.source||"public",createdAt:new Date().toISOString(),...e},a=[n,...t];return cu(a),n},Bf=(e,t)=>{const a=sr().map(i=>i.id===e?{...i,status:t}:i);return cu(a),a},uu=()=>{try{const e=localStorage.getItem(_f);if(e)return JSON.parse(e)}catch{}return vo},Gf=({requestedDateStr:e,reason:t,alternativeDates:n,onSelectAlternative:a})=>!n||n.length===0?null:r.jsxs("div",{className:"alternative-dates-box",children:[r.jsxs("div",{className:"alt-header",children:[r.jsx(Kh,{size:24,className:"icon-alert"}),r.jsxs("div",{children:[r.jsxs("h4",{children:["Fecha no disponible (",e,")"]}),r.jsx("p",{children:t||"Hemos alcanzado la capacidad máxima de reservas para este día."})]})]}),r.jsxs("div",{className:"alt-body",children:[r.jsx("span",{className:"alt-title",children:"Fechas alternativas más cercanas disponibles:"}),r.jsx("div",{className:"alt-grid",children:n.map((i,s)=>r.jsxs("button",{type:"button",className:"alt-date-card",onClick:()=>a(i.dateStr),children:[r.jsxs("div",{className:"alt-date-info",children:[r.jsx(Ve,{size:18,className:"icon-cyan"}),r.jsx("span",{className:"alt-date-text",children:i.formattedLabel})]}),r.jsxs("div",{className:"alt-action",children:[r.jsx("span",{className:"alt-badge",children:i.offsetDays>0?`+${i.offsetDays} días`:`${i.offsetDays} días`}),r.jsx(Oa,{size:16})]})]},s))})]}),r.jsx("style",{children:`
        .alternative-dates-box {
          background: rgba(168, 35, 42, 0.1);
          border: 1px solid var(--accent-red);
          padding: 1.8rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .alt-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding-bottom: 1rem;
        }

        .icon-alert {
          color: var(--accent-red);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .alt-header h4 {
          font-size: 1.15rem;
          color: #FFF;
          margin-bottom: 0.25rem;
        }

        .alt-header p {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .alt-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .alt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .alt-date-card {
          background: rgba(13, 13, 12, 0.85);
          border: 1px solid rgba(62, 193, 201, 0.3);
          color: #FFF;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .alt-date-card:hover {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.15);
          transform: translateY(-2px);
        }

        .alt-date-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .alt-date-text {
          font-size: 0.92rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .alt-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-cyan);
        }

        .alt-badge {
          font-size: 0.75rem;
          background: rgba(62, 193, 201, 0.2);
          color: var(--accent-cyan);
          padding: 0.2rem 0.5rem;
          font-weight: 700;
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 640px) {
          .alt-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),Hf=({onSubmitBooking:e})=>{const{t}=ie(),[n,a]=j.useState(25),[i,s]=j.useState(""),[o,l]=j.useState("sushi-fusion"),[c,d]=j.useState(["chef"]),[h,f]=j.useState(null),[p,y]=j.useState([]),[v,k]=j.useState([]),[z,g]=j.useState({});j.useEffect(()=>{const A=sr(),H=uu();k(A),g(H)},[]),j.useEffect(()=>{if(!i){f(null),y([]);return}const A=yo(i,n,v,z);if(f(A),A.isAvailable)y([]);else{const H=Rf(i,n,v,z,4);y(H)}},[i,n,v,z]);const u=t("bookingWidget.menuOptions"),m=t("bookingWidget.extrasList"),x=u.find(A=>A.id===o)||u[0],b=x.price*n;let N=0;c.forEach(A=>{const H=m.find(St=>St.id===A);H&&(H.price&&(N+=H.price),H.pricePerGuest&&(N+=H.pricePerGuest*n))});const S=b+N,F=Math.round(S/n),G=A=>{c.includes(A)?d(c.filter(H=>H!==A)):d([...c,A])},T=A=>{s(A)},de=A=>{if(A.preventDefault(),h&&!h.isAvailable){alert("La fecha seleccionada no tiene capacidad disponible. Por favor, elige una de las fechas alternativas propuestas.");return}e({guests:n,eventDate:i,menuName:x.name,menuId:x.id,extras:c.map(H=>{var St;return(St=m.find(La=>La.id===H))==null?void 0:St.name}).filter(Boolean),estimatedTotal:S,pricePerPerson:F})};return r.jsxs("section",{id:"personalizacion",className:"section-padding",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge",children:t("bookingWidget.badge")}),r.jsx("h2",{children:t("bookingWidget.title")}),r.jsx(nt,{color:"#3EC1C9",width:140,height:32}),r.jsx("p",{children:t("bookingWidget.subtitle")})]}),r.jsx("div",{className:"calculator-wrapper",children:r.jsxs("form",{onSubmit:de,className:"calculator-card",children:[r.jsxs("div",{className:"calc-group",children:[r.jsxs("label",{className:"calc-label",children:[r.jsx(fn,{size:20,className:"icon-cyan"}),r.jsx("span",{children:t("bookingWidget.labels.guests")}),r.jsxs("span",{className:"guest-badge-value",children:[n," invitados"]})]}),r.jsx("input",{type:"range",min:"10",max:"50",step:"1",value:n,onChange:A=>a(parseInt(A.target.value)),className:"custom-slider"}),r.jsxs("div",{className:"slider-range-labels",children:[r.jsx("span",{children:"10 (Íntimo)"}),r.jsx("span",{children:"30"}),r.jsx("span",{children:"50 (Máximo)"})]})]}),r.jsxs("div",{className:"calc-group",children:[r.jsxs("div",{className:"calc-label-row",children:[r.jsxs("label",{className:"calc-label",children:[r.jsx(Ve,{size:20,className:"icon-cyan"}),r.jsx("span",{children:t("bookingWidget.labels.date")})]}),h&&h.isAvailable&&r.jsxs("span",{className:"avail-badge-success",children:[r.jsx(co,{size:15}),r.jsx("span",{children:"Fecha Disponible"})]})]}),r.jsx("input",{type:"date",value:i,onChange:A=>s(A.target.value),required:!0,className:`calc-input ${h&&!h.isAvailable?"is-invalid":""}`}),h&&!h.isAvailable&&r.jsx(Gf,{requestedDateStr:i,reason:h.reason,alternativeDates:p,onSelectAlternative:T})]}),r.jsxs("div",{className:"calc-group",children:[r.jsxs("label",{className:"calc-label",children:[r.jsx(Zh,{size:20,className:"icon-cyan"}),r.jsx("span",{children:t("bookingWidget.labels.menuType")})]}),r.jsx("div",{className:"menu-options-grid",children:u.map(A=>r.jsx("div",{className:`menu-radio-card ${o===A.id?"selected":""}`,onClick:()=>l(A.id),children:r.jsxs("div",{className:"radio-header",children:[r.jsx("span",{className:"radio-title",children:A.name}),r.jsxs("span",{className:"radio-price",children:[A.price,"€ / inv"]})]})},A.id))})]}),r.jsxs("div",{className:"calc-group",children:[r.jsxs("label",{className:"calc-label",children:[r.jsx(ho,{size:20,className:"icon-cyan"}),r.jsx("span",{children:t("bookingWidget.labels.extras")})]}),r.jsx("div",{className:"extras-grid",children:m.map(A=>{const H=c.includes(A.id);return r.jsxs("div",{className:`extra-checkbox-card ${H?"active":""}`,onClick:()=>G(A.id),children:[H?r.jsx(Xh,{size:20,className:"icon-cyan"}):r.jsx(wf,{size:20}),r.jsx("span",{children:A.name})]},A.id)})})]}),r.jsxs("div",{className:"calc-summary-box",children:[r.jsxs("div",{className:"price-estimation",children:[r.jsx("span",{className:"est-label",children:t("bookingWidget.labels.estimatedTotal")}),r.jsxs("div",{className:"est-amount-row",children:[r.jsxs("span",{className:"est-total",children:[S,"€"]}),r.jsxs("span",{className:"est-per-person",children:["(",F,"€ ",t("bookingWidget.labels.perPerson"),")"]})]})]}),r.jsxs("button",{type:"submit",className:"btn btn-primary calc-submit-btn",disabled:h&&!h.isAvailable,children:[r.jsx(nu,{size:18}),r.jsx("span",{children:t("bookingWidget.labels.submitBtn")})]})]})]})})]}),r.jsx("style",{children:`
        .calculator-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .calculator-card {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 3rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .calc-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .calc-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .calc-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .icon-cyan { color: var(--accent-cyan); }

        .avail-badge-success {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(39, 90, 56, 0.2);
          border: 1px solid #79D494;
          color: #79D494;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .guest-badge-value {
          margin-left: auto;
          background: rgba(62, 193, 201, 0.15);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.2rem 0.8rem;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .custom-slider {
          width: 100%;
          accent-color: var(--accent-cyan);
          height: 8px;
          cursor: pointer;
        }

        .slider-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-dark-muted);
        }

        .calc-input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
        }

        .calc-input.is-invalid {
          border-color: var(--accent-red);
        }

        .menu-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .menu-radio-card {
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.2rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .menu-radio-card:hover {
          border-color: rgba(62, 193, 201, 0.5);
        }

        .menu-radio-card.selected {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.12);
        }

        .radio-title {
          font-size: 0.95rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.4rem;
        }

        .radio-price {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .extras-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .extra-checkbox-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1rem;
          cursor: pointer;
          font-size: 0.92rem;
          transition: all var(--transition-fast);
        }

        .extra-checkbox-card.active {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.12);
        }

        .calc-summary-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(13, 13, 12, 0.95);
          border: 1px solid var(--accent-cyan);
          padding: 1.8rem 2.2rem;
          margin-top: 1rem;
        }

        .est-label {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          display: block;
          margin-bottom: 0.2rem;
        }

        .est-amount-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .est-total {
          font-family: var(--font-subtitles);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .est-per-person {
          font-size: 0.92rem;
          color: var(--text-dark-muted);
        }

        .calc-submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .menu-options-grid, .extras-grid {
            grid-template-columns: 1fr;
          }
          .calc-summary-box {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .calc-submit-btn {
            width: 100%;
          }
        }
      `})]})},Uf=()=>{const{t:e}=ie();return r.jsxs("section",{id:"filosofia",className:"section-padding philosophy-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",style:{marginBottom:"3rem"},children:[r.jsx("div",{className:"badge terracotta-badge",children:e("philosophy.badge")}),r.jsx("h2",{children:e("philosophy.title")}),r.jsx(nt,{color:"#FCE8A6",width:140,height:32})]}),r.jsxs("div",{className:"philosophy-grid",children:[r.jsxs("div",{className:"philosophy-content",children:[r.jsxs("blockquote",{className:"philosophy-quote",children:['"',e("philosophy.text"),'"']}),r.jsxs("div",{className:"author-tag",children:[r.jsx("span",{className:"author-name",children:e("philosophy.quoteAuthor")}),r.jsx("span",{className:"author-role",children:e("philosophy.quoteRole")})]}),r.jsx("div",{className:"philosophy-points",children:e("philosophy.points").map((t,n)=>r.jsxs("div",{className:"point-item",children:[r.jsx("div",{className:"point-icon",children:r.jsx(of,{size:18})}),r.jsxs("div",{children:[r.jsx("h4",{children:t.title}),r.jsx("p",{children:t.desc})]})]},n))})]}),r.jsx("div",{className:"philosophy-image-col",children:r.jsxs("div",{className:"image-frame",children:[r.jsx("img",{src:"/images/oskar/ChatGPT Image 16 abr 2026, 12_37_25.png",alt:"Chef Oskar Marijuan MUNCHOS Munich",className:"chef-img",onError:t=>{t.target.src="/images/lifestyle-people-learning-make-sushi.jpg"}}),r.jsxs("div",{className:"experience-badge",children:[r.jsx(Yh,{size:24,className:"gold-icon"}),r.jsxs("div",{children:[r.jsx("span",{className:"badge-title",children:"Gastronomía Vasca"}),r.jsx("span",{className:"badge-sub",children:"en el corazón de Múnich"})]})]})]})})]})]}),r.jsx("style",{children:`
        .philosophy-section {
          background-color: #6F352D;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .philosophy-section h2 {
          color: #FFFFFF;
        }

        .terracotta-badge {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #FFFFFF !important;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .philosophy-quote {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-style: normal !important;
          color: #FCE8A6;
          line-height: 1.6;
          border-left: 4px solid #C9B04A;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .author-tag {
          display: flex;
          flex-direction: column;
          margin-bottom: 2.5rem;
        }

        .author-name {
          font-weight: 700;
          color: #FFFFFF;
        }

        .author-role {
          font-size: 0.88rem;
          color: #F5EAE8;
        }

        .philosophy-points {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .point-icon {
          width: 36px;
          height: 36px;
          background: #4E211A;
          border: 1px solid #C9B04A;
          color: #FCE8A6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-item h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .point-item p {
          font-size: 0.9rem;
          color: #F5EAE8;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid #C9B04A;
        }

        .chef-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        .experience-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(24, 15, 13, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid #C9B04A;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .gold-icon { color: #C9B04A; }

        .badge-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFF;
          display: block;
        }

        .badge-sub {
          font-size: 0.8rem;
          color: #F5EAE8;
        }

        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
          }
          .chef-img {
            height: 380px;
          }
        }
      `})]})},Vf=[mo,bt,pf],$f=()=>{const{t:e}=ie();return r.jsxs("section",{id:"garantia",className:"section-padding guarantee-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge guarantee-sage-badge",children:e("guarantee.badge")}),r.jsx("h2",{children:e("guarantee.title")}),r.jsx(nt,{color:"#2D391A",width:140,height:32}),r.jsx("p",{children:e("guarantee.subtitle")})]}),r.jsx("div",{className:"guarantee-cards-grid",children:e("guarantee.cards").map((t,n)=>{const a=Vf[n]||bt;return r.jsxs("div",{className:"glass-card guarantee-card",children:[r.jsx("div",{className:"guarantee-icon",children:r.jsx(a,{size:26})}),r.jsx("h3",{children:t.title}),r.jsx("p",{children:t.desc})]},n)})})]}),r.jsx("style",{children:`
        .guarantee-section {
          background-color: #BAC08D;
          color: #1A2215;
          padding: 5rem 0;
        }

        .guarantee-section h2 {
          color: #1A2215;
        }

        .guarantee-section .section-header p {
          color: #2D391A;
        }

        .guarantee-sage-badge {
          background: rgba(26, 34, 21, 0.12) !important;
          border-color: #3E4B28 !important;
          color: #2D391A !important;
        }

        .guarantee-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .guarantee-card {
          background: #182216;
          border-top: 4px solid #C9B04A;
          border-left: 1px solid rgba(212, 175, 55, 0.3);
          border-right: 1px solid rgba(212, 175, 55, 0.3);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
        }

        .guarantee-icon {
          width: 52px;
          height: 52px;
          background: rgba(201, 176, 74, 0.18);
          color: #C9B04A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid #C9B04A;
        }

        .guarantee-card h3 {
          font-size: 1.3rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .guarantee-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #D8D6CD;
        }

        @media (max-width: 900px) {
          .guarantee-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Wf=()=>{const{t:e}=ie();return r.jsxs("section",{id:"testimonios",className:"section-padding testimonials-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge cream-badge",children:e("testimonials.badge")}),r.jsx("h2",{children:e("testimonials.title")}),r.jsx(nt,{color:"#5B1C2B",width:140,height:32})]}),r.jsx("div",{className:"testimonials-grid",children:e("testimonials.reviews").map((t,n)=>r.jsxs("div",{className:"glass-card testimonial-card",children:[r.jsx("div",{className:"quote-icon",children:r.jsx(vf,{size:28})}),r.jsx("div",{className:"rating-row",children:[...Array(t.rating)].map((a,i)=>r.jsx(jf,{size:16,fill:"#C9B04A",color:"#C9B04A"},i))}),r.jsxs("p",{className:"testimonial-text",children:['"',t.comment,'"']}),r.jsxs("div",{className:"reviewer-info",children:[r.jsx("span",{className:"reviewer-name",children:t.name}),r.jsx("span",{className:"reviewer-event",children:t.event})]})]},n))})]}),r.jsx("style",{children:`
        .testimonials-section {
          background-color: #F7F5F0;
          color: #1A1918;
          padding: 5rem 0;
        }

        .testimonials-section h2 {
          color: #1A1918;
        }

        .cream-badge {
          background: rgba(91, 28, 43, 0.12) !important;
          border-color: #5B1C2B !important;
          color: #5B1C2B !important;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          background: #5B1C2B;
          border: 1px solid #C9B04A;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
        }

        .quote-icon {
          color: rgba(201, 176, 74, 0.5);
          margin-bottom: 1rem;
        }

        .rating-row {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.2rem;
        }

        .testimonial-text {
          font-family: var(--font-subtitles);
          font-size: 1.1rem;
          font-style: normal !important;
          color: #FFFFFF;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(201, 176, 74, 0.3);
          padding-top: 1rem;
        }

        .reviewer-name {
          font-weight: 700;
          color: #C9B04A;
        }

        .reviewer-event {
          font-size: 0.85rem;
          color: #E8DFDC;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},qf=({onAddToCart:e,onOpenCart:t})=>{const{t:n}=ie(),a=n("gourmetShop.products");return r.jsxs("section",{id:"gourmet",className:"section-padding gourmet-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"badge burgundy-badge",children:n("gourmetShop.badge")}),r.jsx("h2",{children:n("gourmetShop.title")}),r.jsx(nt,{color:"#C9B04A",width:140,height:32}),r.jsx("p",{children:n("gourmetShop.subtitle")})]}),r.jsx("div",{className:"gourmet-grid",children:a.map(i=>r.jsxs("div",{className:"gourmet-card",children:[r.jsxs("div",{className:"gourmet-img-wrapper",children:[r.jsx("img",{src:i.image,alt:i.name,className:"gourmet-img"}),r.jsx("span",{className:"gourmet-category",children:i.category})]}),r.jsxs("div",{className:"gourmet-content",children:[r.jsx("h3",{children:i.name}),r.jsx("p",{children:i.desc}),r.jsxs("div",{className:"gourmet-footer",children:[r.jsx("div",{className:"gourmet-price-row",children:r.jsxs("span",{className:"gourmet-price",children:[i.price.toFixed(2),"€"]})}),r.jsxs("button",{className:"btn btn-primary gourmet-add-btn",onClick:()=>e(i),children:[r.jsx(et,{size:16}),r.jsx("span",{children:n("gourmetShop.addBtn")})]})]})]})]},i.id))}),r.jsx("div",{className:"gourmet-bottom-cta",children:r.jsxs("button",{className:"btn btn-outline-gold gourmet-cart-btn",onClick:t,children:[r.jsx(ir,{size:18}),r.jsx("span",{children:n("gourmetShop.interestBtn")})]})})]}),r.jsx("style",{children:`
        .gourmet-section {
          background-color: #5B1C2B;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .gourmet-section h2 {
          color: #FFFFFF;
        }

        .gourmet-section .section-header p {
          color: #E8DFDC;
        }

        .burgundy-badge {
          background: rgba(201, 176, 74, 0.18) !important;
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        .gourmet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .gourmet-card {
          background: #1C0A0F;
          border: 1px solid rgba(201, 176, 74, 0.35);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .gourmet-card:hover {
          transform: translateY(-6px);
          border-color: #C9B04A;
        }

        .gourmet-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .gourmet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gourmet-card:hover .gourmet-img {
          transform: scale(1.05);
        }

        .gourmet-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(28, 10, 15, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid #C9B04A;
          color: #C9B04A;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          text-transform: uppercase;
        }

        .gourmet-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .gourmet-content h3 {
          font-size: 1.25rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .gourmet-content p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          color: #E8DFDC;
        }

        .gourmet-footer {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid rgba(201, 176, 74, 0.2);
          padding-top: 1rem;
          width: 100%;
        }

        .gourmet-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gourmet-price {
          font-family: var(--font-subtitles);
          font-size: 1.6rem;
          font-weight: 700;
          color: #C9B04A;
          white-space: nowrap;
        }

        .gourmet-add-btn {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          justify-content: center;
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        .gourmet-add-btn:hover {
          background: #E6C665 !important;
        }

        .gourmet-bottom-cta {
          text-align: center;
          margin-top: 3rem;
        }

        .gourmet-cart-btn {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
          background: #1C0A0F !important;
        }

        .gourmet-cart-btn:hover {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }
      `})]})},Kf=({onOpenBooking:e})=>{const{t}=ie();return r.jsxs("section",{className:"section-padding final-cta-section",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"final-cta-card",children:[r.jsx("h2",{children:t("finalCta.title")}),r.jsx(nt,{color:"#D4AF37",width:160,height:36}),r.jsx("p",{children:t("finalCta.subtitle")}),r.jsxs("div",{className:"final-cta-actions",children:[r.jsxs("button",{className:"btn btn-primary btn-large final-primary-btn",onClick:e,children:[r.jsx(Ve,{size:20}),r.jsx("span",{children:t("finalCta.primaryBtn")})]}),r.jsxs("a",{href:"https://wa.me/498912345678",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-large final-sec-btn",children:[r.jsx(mf,{size:20}),r.jsx("span",{children:t("finalCta.secondaryBtn")})]})]})]})}),r.jsx("style",{children:`
        .final-cta-section {
          position: relative;
          background: linear-gradient(135deg, #6F352D 0%, #5B1C2B 100%);
          padding: 6rem 0;
        }

        .final-cta-card {
          background: rgba(20, 10, 14, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid #C9B04A;
          padding: 4rem 3rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .final-cta-card h2 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }

        .final-cta-card p {
          font-size: 1.15rem;
          max-width: 680px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
          color: #E8DFDC;
        }

        .final-cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-large {
          font-size: 1.05rem;
          padding: 1.1rem 2.5rem;
        }

        .final-primary-btn {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        .final-primary-btn:hover {
          background: #E6C665 !important;
        }

        .final-sec-btn {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          color: #FFFFFF !important;
        }

        .final-sec-btn:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        @media (max-width: 640px) {
          .final-cta-card {
            padding: 2.5rem 1.5rem;
          }
          .final-cta-actions button, .final-cta-actions a {
            width: 100%;
          }
        }
      `})]})},Qf=({onOpenBooking:e})=>{const{t}=ie(),[n,a]=j.useState(!1);return j.useEffect(()=>{const i=()=>{a(window.scrollY>450)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),n?r.jsxs("div",{className:"sticky-cta-bar",children:[r.jsxs("div",{className:"container sticky-container",children:[r.jsxs("div",{className:"sticky-info",children:[r.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"sticky-logo-img"}),r.jsx("span",{className:"sticky-sub",children:t("stickyCta.text")})]}),r.jsxs("button",{className:"btn btn-primary sticky-btn",onClick:e,children:[r.jsx(Ve,{size:17}),r.jsx("span",{children:t("stickyCta.button")})]})]}),r.jsx("style",{children:`
        .sticky-cta-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(12, 11, 10, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(229, 167, 27, 0.35);
          padding: 0.65rem 0;
          z-index: 999;
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.85);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .sticky-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .sticky-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .sticky-logo-img {
          height: 38px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
          flex-shrink: 0;
        }

        .sticky-sub {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sticky-btn {
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .sticky-sub {
            display: none;
          }
          .sticky-logo-img {
            height: 34px;
          }
          .sticky-btn {
            font-size: 0.82rem;
            padding: 0.55rem 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .sticky-cta-bar {
            padding: 0.55rem 0;
          }
          .sticky-logo-img {
            height: 32px;
          }
          .sticky-btn {
            font-size: 0.78rem;
            padding: 0.5rem 0.75rem;
            gap: 0.35rem;
          }
        }
      `})]}):null},Yf=()=>{const{t:e}=ie(),t=n=>{n.preventDefault(),window.dispatchEvent(new CustomEvent("openMunchosCookieSettings"))};return r.jsxs("footer",{className:"footer-section",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-brand-col",children:[r.jsx("span",{className:"footer-logo-text",children:"MUNCHOS"}),r.jsx("p",{className:"footer-about",children:e("footer.about")}),r.jsxs("div",{className:"social-links",children:[r.jsx("a",{href:"#","aria-label":"Instagram",children:r.jsx(af,{size:20})}),r.jsx("a",{href:"#","aria-label":"Facebook",children:r.jsx(tf,{size:20})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{children:e("footer.quickLinks")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#beneficios",children:e("nav.beneficios")})}),r.jsx("li",{children:r.jsx("a",{href:"#como-funciona",children:e("nav.comoFunciona")})}),r.jsx("li",{children:r.jsx("a",{href:"#menus",children:e("nav.menus")})}),r.jsx("li",{children:r.jsx("a",{href:"#personalizacion",children:e("nav.personalizacion")})}),r.jsx("li",{children:r.jsx("a",{href:"#gourmet",children:e("nav.gourmet")})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{children:e("footer.contact")}),r.jsxs("ul",{className:"contact-list",children:[r.jsxs("li",{children:[r.jsx(df,{size:18,className:"icon-cyan"}),r.jsx("span",{children:e("footer.address")})]}),r.jsxs("li",{children:[r.jsx(gf,{size:18,className:"icon-cyan"}),r.jsx("span",{children:e("footer.phone")})]}),r.jsxs("li",{children:[r.jsx(po,{size:18,className:"icon-cyan"}),r.jsx("span",{children:e("footer.email")})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{children:e("footer.legal")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#",children:e("footer.impressum")})}),r.jsx("li",{children:r.jsx("a",{href:"#",children:e("footer.privacy")})}),r.jsx("li",{children:r.jsx("a",{href:"#",children:e("footer.terms")})}),r.jsx("li",{children:r.jsxs("button",{onClick:t,className:"footer-cookie-link",children:[r.jsx(Yd,{size:13}),r.jsx("span",{children:e("cookies.settings")||"Configuración de Cookies"})]})}),r.jsx("li",{style:{marginTop:"0.35rem"},children:r.jsxs("a",{href:"#admin",className:"admin-footer-link",children:[r.jsx(Jd,{size:13}),r.jsx("span",{children:"Acceso Propietario / Admin"})]})})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsx("p",{children:e("footer.copyright")})})]}),r.jsx("style",{children:`
        .footer-section {
          background: #080807;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding: 5rem 0 7rem 0;
          color: var(--text-dark-secondary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.25fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-text {
          font-family: var(--font-headline);
          font-size: 2.2rem;
          font-weight: 400;
          font-style: normal !important;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #FCE8A6 0%, #FFD700 35%, #D4AF37 70%, #997315 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          line-height: 1;
          display: inline-block;
          text-transform: uppercase;
        }

        .footer-about {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 340px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: rgba(247, 245, 240, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark-primary);
          transition: all var(--transition-fast);
        }

        .social-links a:hover {
          background: var(--accent-cyan);
          color: var(--bg-dark);
        }

        .footer-col h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-col a {
          font-size: 0.92rem;
          transition: color var(--transition-fast);
        }

        .footer-cookie-link {
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          font-size: 0.92rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0;
          transition: color var(--transition-fast);
        }

        .footer-cookie-link:hover {
          color: var(--accent-cyan);
        }

        .admin-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-cyan) !important;
          font-size: 0.85rem !important;
          font-weight: 600;
          opacity: 0.85;
        }

        .admin-footer-link:hover {
          opacity: 1;
        }

        .icon-cyan { color: var(--accent-cyan); }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(247, 245, 240, 0.06);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Zf=({isOpen:e,onClose:t,cartItems:n,onUpdateQuantity:a,onRemoveItem:i})=>{if(ie(),!e)return null;const s=n.reduce((o,l)=>o+l.price*l.quantity,0);return r.jsxs("div",{className:"drawer-overlay",onClick:t,children:[r.jsxs("div",{className:"drawer-content",onClick:o=>o.stopPropagation(),children:[r.jsxs("div",{className:"drawer-header",children:[r.jsxs("div",{className:"drawer-title-group",children:[r.jsx(ir,{size:22,className:"icon-gold"}),r.jsx("h3",{children:"Lista de Compras Gourmet"})]}),r.jsx("button",{className:"close-btn",onClick:t,"aria-label":"Cerrar",children:r.jsx(kt,{size:24})})]}),r.jsx("div",{className:"drawer-body",children:n.length===0?r.jsxs("div",{className:"empty-cart",children:[r.jsx(ir,{size:48,className:"empty-icon"}),r.jsx("p",{children:"Tu selección gourmet está vacía."}),r.jsx("span",{className:"empty-sub",children:"Añade conservas, vinos vascos o quesos artesanos de nuestra tienda."})]}):r.jsx("div",{className:"cart-items-list",children:n.map(o=>r.jsxs("div",{className:"cart-item",children:[r.jsx("img",{src:o.image,alt:o.name,className:"cart-item-img"}),r.jsxs("div",{className:"cart-item-details",children:[r.jsx("h4",{children:o.name}),r.jsxs("span",{className:"cart-item-price",children:[(o.price*o.quantity).toFixed(2),"€"]}),r.jsxs("div",{className:"qty-controls",children:[r.jsx("button",{onClick:()=>a(o.id,o.quantity-1),children:r.jsx(hf,{size:14})}),r.jsx("span",{children:o.quantity}),r.jsx("button",{onClick:()=>a(o.id,o.quantity+1),children:r.jsx(et,{size:14})})]})]}),r.jsx("button",{className:"remove-item-btn",onClick:()=>i(o.id),children:r.jsx(Da,{size:18})})]},o.id))})}),n.length>0&&r.jsxs("div",{className:"drawer-footer",children:[r.jsxs("div",{className:"cart-total-row",children:[r.jsx("span",{children:"Total Estimado:"}),r.jsxs("span",{className:"total-price",children:[s.toFixed(2),"€"]})]}),r.jsxs("div",{className:"cart-payment-methods",children:[r.jsx("span",{className:"pay-methods-title",children:"Formas de pago aceptadas:"}),r.jsxs("div",{className:"pay-badges-row",children:[r.jsx("span",{className:"pay-badge",title:"PayPal & Apple Pay",children:"PayPal / Apple Pay"}),r.jsx("span",{className:"pay-badge",title:"Klarna & Sofortüberweisung",children:"Klarna / Sofort"}),r.jsx("span",{className:"pay-badge",title:"Visa & Mastercard",children:"Visa / Mastercard"}),r.jsx("span",{className:"pay-badge",title:"Factura B2B o Transferencia SEPA",children:"Factura B2B / SEPA"})]})]}),r.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{alert("¡Gracias! Hemos recibido tu solicitud para los productos gourmet seleccionados. Te contactaremos para coordinar el envío en Múnich."),t()},children:[r.jsx("span",{children:"Solicitar Productos Gourmet"}),r.jsx(Oa,{size:18})]})]})]}),r.jsx("style",{children:`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 1002;
          display: flex;
          justify-content: flex-end;
        }

        .drawer-content {
          width: 90%;
          max-width: 440px;
          background: var(--bg-surface-dark);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.7);
        }

        .drawer-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .drawer-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .drawer-title-group h3 {
          font-size: 1.25rem;
          color: var(--text-dark-primary);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        .drawer-body {
          padding: 1.5rem;
          flex-grow: 1;
          overflow-y: auto;
        }

        .empty-cart {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-dark-muted);
          gap: 0.75rem;
        }

        .empty-icon { opacity: 0.3; }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          background: var(--bg-card-dark);
          padding: 1rem;
          border-radius: var(--radius-md);
          align-items: center;
          border: 1px solid rgba(247, 245, 240, 0.06);
        }

        .cart-item-img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .cart-item-details {
          flex-grow: 1;
        }

        .cart-item-details h4 {
          font-size: 0.95rem;
          color: var(--text-dark-primary);
          margin-bottom: 0.2rem;
        }

        .cart-item-price {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--accent-gold);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 13, 12, 0.6);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          width: fit-content;
        }

        .qty-controls button {
          background: transparent;
          border: none;
          color: var(--text-dark-primary);
          cursor: pointer;
        }

        .remove-item-btn {
          background: transparent;
          border: none;
          color: var(--text-dark-muted);
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .remove-item-btn:hover {
          color: var(--accent-red);
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          background: var(--bg-card-dark);
        }

        .cart-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }

        .total-price {
          font-family: var(--font-headline);
          font-size: 1.8rem;
          font-weight: 700;
          color: #C9B04A;
        }

        .cart-payment-methods {
          margin-bottom: 1.2rem;
        }

        .pay-methods-title {
          font-size: 0.75rem;
          color: var(--text-dark-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .pay-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .pay-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: #C9B04A;
          background: rgba(201, 176, 74, 0.12);
          border: 1px solid rgba(201, 176, 74, 0.3);
          padding: 0.2rem 0.55rem;
          border-radius: 0px !important;
        }
      `})]})},Xf=({isOpen:e,onClose:t,initialData:n})=>{const{t:a}=ie(),[i,s]=j.useState("paypal"),[o,l]=j.useState({name:"",email:"",phone:"",location:"",notes:""}),[c,d]=j.useState(!1);if(!e)return null;const h=p=>{p.preventDefault(),du({date:(n==null?void 0:n.eventDate)||new Date().toISOString().split("T")[0],guests:(n==null?void 0:n.guests)||20,menuType:(n==null?void 0:n.menuId)||"sushi-fusion",menuName:(n==null?void 0:n.menuName)||"Fusión Nikkei (Sushi + Pinchos)",extras:(n==null?void 0:n.extras)||[],estimatedTotal:(n==null?void 0:n.estimatedTotal)||0,pricePerPerson:(n==null?void 0:n.pricePerPerson)||0,status:"pending",source:"public",clientName:o.name,clientEmail:o.email,clientPhone:o.phone,location:o.location,notes:o.notes,paymentMethod:i}),d(!0)},f=()=>{d(!1),t()};return r.jsxs("div",{className:"modal-overlay",onClick:f,children:[r.jsxs("div",{className:"modal-container",onClick:p=>p.stopPropagation(),children:[r.jsx("button",{className:"modal-close-btn",onClick:f,children:r.jsx(kt,{size:24})}),c?r.jsxs("div",{className:"success-screen",children:[r.jsx(uo,{size:64,className:"success-icon"}),r.jsx("h3",{children:a("modal.successTitle")}),r.jsx("p",{children:a("modal.successText")}),r.jsx("button",{className:"btn btn-primary",onClick:f,children:"Entendido"})]}):r.jsxs("div",{children:[r.jsx("h3",{className:"modal-title",children:a("modal.title")}),r.jsx("p",{className:"modal-subtitle",children:a("modal.subtitle")}),n&&r.jsxs("div",{className:"booking-summary-banner",children:[r.jsxs("span",{className:"summary-pill",children:[n.guests||25," Invitados"]}),n.eventDate&&r.jsxs("span",{className:"summary-pill",children:["Fecha: ",n.eventDate]}),r.jsx("span",{className:"summary-pill",children:n.menuName||"Menú Seleccionado"}),n.estimatedTotal&&r.jsxs("span",{className:"summary-pill gold-pill",children:["Est. Total: ",n.estimatedTotal,"€"]})]}),r.jsxs("form",{onSubmit:h,className:"modal-form",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:a("modal.name")}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Maria Fernández",value:o.name,onChange:p=>l({...o,name:p.target.value})})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:a("modal.email")}),r.jsx("input",{type:"email",required:!0,placeholder:"maria@ejemplo.de",value:o.email,onChange:p=>l({...o,email:p.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:a("modal.phone")}),r.jsx("input",{type:"tel",required:!0,placeholder:"+49 176 1234567",value:o.phone,onChange:p=>l({...o,phone:p.target.value})})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:a("modal.location")}),r.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen, Múnich",value:o.location,onChange:p=>l({...o,location:p.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:a("modal.notes")}),r.jsx("textarea",{rows:"2",placeholder:"Preferencias de tus invitados, opciones vegetarianas o sin gluten...",value:o.notes,onChange:p=>l({...o,notes:p.target.value})})]}),r.jsxs("div",{className:"payment-options-group",children:[r.jsx("label",{className:"pay-group-label",children:"Forma de pago preferida:"}),r.jsxs("div",{className:"pay-options-grid",children:[r.jsxs("label",{className:`pay-opt-card ${i==="paypal"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"paymentMethod",value:"paypal",checked:i==="paypal",onChange:()=>s("paypal")}),r.jsx("span",{children:"PayPal / Apple Pay"})]}),r.jsxs("label",{className:`pay-opt-card ${i==="klarna"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"paymentMethod",value:"klarna",checked:i==="klarna",onChange:()=>s("klarna")}),r.jsx("span",{children:"Klarna / Sofort"})]}),r.jsxs("label",{className:`pay-opt-card ${i==="card"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"paymentMethod",value:"card",checked:i==="card",onChange:()=>s("card")}),r.jsx("span",{children:"Tarjeta (Stripe)"})]}),r.jsxs("label",{className:`pay-opt-card ${i==="invoice"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"paymentMethod",value:"invoice",checked:i==="invoice",onChange:()=>s("invoice")}),r.jsx("span",{children:"Factura B2B / SEPA"})]})]})]}),r.jsxs("button",{type:"submit",className:"btn btn-primary modal-submit",children:[r.jsx(nu,{size:18}),r.jsx("span",{children:a("modal.submit")})]})]})]})]}),r.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1005;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 2.5rem;
          width: 100%;
          max-width: 620px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        .modal-title {
          font-size: 2rem;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          margin-bottom: 1.5rem;
        }

        .booking-summary-banner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: rgba(13, 13, 12, 0.7);
          padding: 1rem;
          margin-bottom: 1.5rem;
          border: 1px dashed rgba(62, 193, 201, 0.3);
        }

        .summary-pill {
          background: rgba(247, 245, 240, 0.08);
          font-size: 0.82rem;
          padding: 0.3rem 0.75rem;
          color: var(--text-dark-primary);
        }

        .gold-pill {
          background: rgba(62, 193, 201, 0.15);
          color: var(--accent-cyan);
          border: 1px solid var(--accent-cyan);
          font-weight: 700;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .modal-submit {
          margin-top: 1.25rem;
          width: 100%;
        }

        .payment-options-group {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .pay-group-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .pay-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }

        .pay-opt-card {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          padding: 0.65rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.82rem;
          color: var(--text-dark-secondary);
          transition: all 0.2s ease;
        }

        .pay-opt-card.selected {
          border-color: #C9B04A;
          background: rgba(201, 176, 74, 0.12);
          color: #FFFFFF;
        }

        .pay-opt-card input {
          accent-color: #C9B04A;
        }

        .success-screen {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon { color: var(--accent-cyan); }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Jf=()=>{const{t:e,lang:t}=ie(),[n,a]=j.useState([]),[i,s]=j.useState(0);if(j.useEffect(()=>{const h=Ff(),f=e("promotions.items"),p=h.map((y,v)=>{const k=Array.isArray(f)&&(f[v]||f[0]);return k&&t!=="es"?{...y,headline:k.headline||y.headline,bodyText:k.bodyText||y.bodyText,ctaText:k.ctaText||y.ctaText}:y});a(p.length>0?p:h)},[t,e]),j.useEffect(()=>{if(n.length>1){const h=setInterval(()=>{s(f=>(f+1)%n.length)},6e3);return()=>clearInterval(h)}},[n]),n.length===0)return null;const o=n.length>1,l=n[i],c=()=>s((i+1)%n.length),d=()=>s((i-1+n.length)%n.length);return r.jsxs("section",{className:"promotions-banner-section",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"promo-card",children:[r.jsxs("div",{className:"promo-image-col",children:[r.jsx("img",{src:l.image,alt:l.headline,className:"promo-img"}),r.jsxs("div",{className:"promo-badge",children:[r.jsx(ru,{size:15}),r.jsx("span",{children:e("promotions.badge")||"Promoción Exclusiva MUNCHOS"})]})]}),r.jsxs("div",{className:"promo-content-col",children:[r.jsx("h2",{children:l.headline}),r.jsx("p",{children:l.bodyText}),l.ctaText&&r.jsxs("a",{href:l.ctaLink||"#personalizacion",className:"btn btn-primary promo-btn",children:[r.jsx("span",{children:l.ctaText}),r.jsx(Oa,{size:18})]}),o&&r.jsxs("div",{className:"carousel-controls",children:[r.jsx("div",{className:"carousel-dots",children:n.map((h,f)=>r.jsx("span",{className:`dot ${f===i?"active":""}`,onClick:()=>s(f)},f))}),r.jsxs("div",{className:"carousel-arrows",children:[r.jsx("button",{onClick:d,"aria-label":"Anterior",children:r.jsx(Qd,{size:18})}),r.jsx("button",{onClick:c,"aria-label":"Siguiente",children:r.jsx(Ia,{size:18})})]})]})]})]})}),r.jsx("style",{children:`
        .promotions-banner-section {
          margin: 2rem 0;
        }

        .promo-card {
          display: grid;
          grid-template-columns: 360px 1fr;
          background: #5B1C2B;
          border: 1px solid #C9B04A;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          align-items: stretch;
        }

        .promo-image-col {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .promo-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .promo-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(13, 13, 12, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.3rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-transform: uppercase;
        }

        .promo-content-col {
          padding: 1.8rem 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .promo-content-col h2 {
          font-size: 1.6rem;
          color: #FFF;
          margin-bottom: 0.6rem;
          line-height: 1.25;
          font-family: var(--font-subtitles);
        }

        .promo-content-col p {
          font-size: 0.95rem;
          line-height: 1.55;
          margin-bottom: 1.2rem;
          color: var(--text-dark-secondary);
        }

        .promo-btn {
          align-self: flex-start;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.2rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }

        .carousel-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 24px;
          height: 4px;
          background: rgba(247, 245, 240, 0.2);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .dot.active {
          background: var(--accent-cyan);
        }

        .carousel-arrows {
          display: flex;
          gap: 0.5rem;
        }

        .carousel-arrows button {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .carousel-arrows button:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        @media (max-width: 900px) {
          .promo-card {
            grid-template-columns: 280px 1fr;
          }
          .promo-content-col {
            padding: 1.4rem 1.6rem;
          }
        }

        @media (max-width: 680px) {
          .promotions-banner-section {
            margin: 0.5rem 0 0.85rem 0;
          }
          .promo-card {
            grid-template-columns: 1fr;
          }
          .promo-image-col {
            min-height: 200px;
            height: 200px;
          }
          .promo-content-col {
            padding: 1.25rem 1.25rem;
          }
          .promo-content-col h2 {
            font-size: 1.35rem;
          }
        }
      `})]})},Tl="munchos_cookie_consent_v1",eg=()=>{const{t:e}=ie(),[t,n]=j.useState(!1),[a,i]=j.useState(!1),[s,o]=j.useState({essential:!0,analytics:!1,marketing:!1});j.useEffect(()=>{const f=localStorage.getItem(Tl);if(f)try{o(JSON.parse(f))}catch(y){console.error("Failed to parse stored cookie preferences",y)}else{const y=setTimeout(()=>n(!0),1e3);return()=>clearTimeout(y)}const p=()=>{n(!0),i(!0)};return window.addEventListener("openMunchosCookieSettings",p),()=>window.removeEventListener("openMunchosCookieSettings",p)},[]);const l=f=>{o(f),localStorage.setItem(Tl,JSON.stringify(f)),n(!1),i(!1)},c=()=>{l({essential:!0,analytics:!0,marketing:!0})},d=()=>{l({essential:!0,analytics:!1,marketing:!1})},h=()=>{l(s)};return!t&&!a?null:r.jsxs(r.Fragment,{children:[t&&!a&&r.jsx("div",{className:"cookie-banner-wrapper",role:"region","aria-label":"Consentimiento de Cookies",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"cookie-banner-card",children:[r.jsxs("div",{className:"cookie-banner-text",children:[r.jsxs("div",{className:"cookie-title-row",children:[r.jsx(Yd,{size:20,className:"cookie-icon"}),r.jsx("h4",{children:e("cookies.bannerTitle")||"Respetamos tu Privacidad"})]}),r.jsx("p",{children:e("cookies.bannerText")||"Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento de nuestra plataforma (cumplimiento GDPR/DSGVO)."})]}),r.jsxs("div",{className:"cookie-actions-row",children:[r.jsx("button",{className:"btn btn-primary cookie-btn-primary",onClick:c,children:r.jsx("span",{children:e("cookies.acceptAll")||"Aceptar Todas"})}),r.jsx("button",{className:"btn btn-secondary cookie-btn-sec",onClick:d,children:r.jsx("span",{children:e("cookies.essentialOnly")||"Solo Necesarias"})}),r.jsxs("button",{className:"btn-cookie-settings",onClick:()=>i(!0),children:[r.jsx(bf,{size:16}),r.jsx("span",{children:e("cookies.settings")||"Configurar"})]})]})]})})}),a&&r.jsx("div",{className:"cookie-modal-overlay",onClick:()=>i(!1),children:r.jsxs("div",{className:"cookie-modal-card",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"cookie-modal-header",children:[r.jsxs("div",{className:"modal-title-wrap",children:[r.jsx(bt,{size:24,className:"shield-icon"}),r.jsx("h3",{children:e("cookies.modalTitle")||"Configuración de Consentimiento de Cookies"})]}),r.jsx("button",{className:"close-btn",onClick:()=>i(!1),"aria-label":"Cerrar",children:r.jsx(kt,{size:20})})]}),r.jsx("p",{className:"modal-sub",children:e("cookies.modalSubtitle")||"Puedes personalizar las categorías de cookies que autorizas para MUNCHOS Catering."}),r.jsxs("div",{className:"cookie-categories-list",children:[r.jsxs("div",{className:"cookie-cat-item disabled",children:[r.jsxs("div",{className:"cat-top",children:[r.jsxs("label",{className:"checkbox-wrap",children:[r.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),r.jsx("span",{className:"custom-check checked disabled",children:r.jsx(Gn,{size:14})}),r.jsx("span",{className:"cat-name",children:e("cookies.catEssential")||"Cookies Necesarias (Técnicas)"})]}),r.jsx("span",{className:"required-badge",children:"OBLIGATORIA"})]}),r.jsx("p",{className:"cat-desc",children:e("cookies.catEssentialDesc")||"Imprescindibles para la navegación, el carrito gourmet y la gestión del proceso de reserva."})]}),r.jsxs("div",{className:"cookie-cat-item",children:[r.jsx("div",{className:"cat-top",children:r.jsxs("label",{className:"checkbox-wrap",children:[r.jsx("input",{type:"checkbox",checked:s.analytics,onChange:f=>o({...s,analytics:f.target.checked})}),r.jsx("span",{className:`custom-check ${s.analytics?"checked":""}`,children:s.analytics&&r.jsx(Gn,{size:14})}),r.jsx("span",{className:"cat-name",children:e("cookies.catAnalytics")||"Cookies Analíticas"})]})}),r.jsx("p",{className:"cat-desc",children:e("cookies.catAnalyticsDesc")||"Nos permiten medir el uso de la web para optimizar la velocidad y la experiencia del usuario."})]}),r.jsxs("div",{className:"cookie-cat-item",children:[r.jsx("div",{className:"cat-top",children:r.jsxs("label",{className:"checkbox-wrap",children:[r.jsx("input",{type:"checkbox",checked:s.marketing,onChange:f=>o({...s,marketing:f.target.checked})}),r.jsx("span",{className:`custom-check ${s.marketing?"checked":""}`,children:s.marketing&&r.jsx(Gn,{size:14})}),r.jsx("span",{className:"cat-name",children:e("cookies.catMarketing")||"Cookies de Marketing"})]})}),r.jsx("p",{className:"cat-desc",children:e("cookies.catMarketingDesc")||"Utilizadas para mostrar ofertas personalizadas y promociones gastronómicas exclusivas."})]})]}),r.jsxs("div",{className:"cookie-modal-footer",children:[r.jsx("button",{className:"btn btn-secondary",onClick:d,children:r.jsx("span",{children:e("cookies.essentialOnly")||"Solo Necesarias"})}),r.jsx("button",{className:"btn btn-primary",onClick:h,children:r.jsx("span",{children:e("cookies.savePreferences")||"Guardar Preferencias"})})]})]})}),r.jsx("style",{children:`
        /* FLOATING BANNER */
        .cookie-banner-wrapper {
          position: fixed;
          bottom: 1.25rem;
          left: 0;
          right: 0;
          z-index: 9999;
          pointer-events: none;
        }

        .cookie-banner-card {
          pointer-events: auto;
          background: rgba(22, 21, 20, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid #C9B04A;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .cookie-banner-text {
          max-width: 680px;
        }

        .cookie-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .cookie-icon {
          color: #C9B04A;
          flex-shrink: 0;
        }

        .cookie-title-row h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .cookie-banner-text p {
          font-size: 0.85rem;
          line-height: 1.45;
          color: #C5C0B6;
          margin: 0;
        }

        .cookie-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .cookie-btn-primary {
          background: #C9B04A !important;
          color: #0D0D0C !important;
          font-size: 0.82rem !important;
          padding: 0.65rem 1.1rem !important;
        }

        .cookie-btn-primary:hover {
          background: #E6C665 !important;
        }

        .cookie-btn-sec {
          background: rgba(247, 245, 240, 0.08) !important;
          border: 1px solid rgba(247, 245, 240, 0.25) !important;
          color: #FFFFFF !important;
          font-size: 0.82rem !important;
          padding: 0.65rem 1.1rem !important;
        }

        .cookie-btn-sec:hover {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        .btn-cookie-settings {
          background: transparent;
          border: none;
          color: #8A867F;
          font-size: 0.82rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          padding: 0.5rem 0.65rem;
          transition: color 0.2s ease;
        }

        .btn-cookie-settings:hover {
          color: #C9B04A;
        }

        /* MODAL OVERLAY & CARD */
        .cookie-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.80);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
        }

        .cookie-modal-card {
          background: #161514;
          border: 1px solid #C9B04A;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          max-width: 580px;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cookie-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .shield-icon {
          color: #C9B04A;
          flex-shrink: 0;
        }

        .cookie-modal-header h3 {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: #8A867F;
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s ease;
        }

        .close-btn:hover {
          color: #FFFFFF;
        }

        .modal-sub {
          font-size: 0.88rem;
          color: #C5C0B6;
          line-height: 1.5;
          margin: 0;
        }

        .cookie-categories-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cookie-cat-item {
          background: rgba(247, 245, 240, 0.04);
          border: 1px solid rgba(247, 245, 240, 0.12);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .cookie-cat-item.disabled {
          opacity: 0.9;
        }

        .cat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
        }

        .checkbox-wrap input {
          display: none;
        }

        .custom-check {
          width: 20px;
          height: 20px;
          border: 1px solid #8A867F;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D0D0C;
          transition: all 0.2s ease;
        }

        .custom-check.checked {
          background: #C9B04A;
          border-color: #C9B04A;
        }

        .custom-check.disabled {
          background: rgba(201, 176, 74, 0.4);
          border-color: rgba(201, 176, 74, 0.5);
          color: #FFFFFF;
        }

        .cat-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .required-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #C9B04A;
          background: rgba(201, 176, 74, 0.12);
          border: 1px solid rgba(201, 176, 74, 0.3);
          padding: 0.2rem 0.5rem;
          letter-spacing: 0.05em;
        }

        .cat-desc {
          font-size: 0.82rem;
          color: #8A867F;
          line-height: 1.45;
          margin: 0;
          padding-left: 1.85rem;
        }

        .cookie-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }

        @media (max-width: 768px) {
          .cookie-banner-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
          }
          .cookie-actions-row {
            width: 100%;
            flex-direction: column;
          }
          .cookie-actions-row button {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})},tg=({reservations:e,capacitySettings:t,onUpdateStatus:n,onOpenAddModal:a})=>{const[i,s]=j.useState(new Date(2026,7,1)),[o,l]=j.useState(null),c=i.getFullYear(),d=i.getMonth(),h=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],f=new Date(c,d+1,0).getDate(),y=(new Date(c,d,1).getDay()+6)%7,v=()=>s(new Date(c,d-1,1)),k=()=>s(new Date(c,d+1,1)),z=u=>{if(!u)return"";const[m,x,b]=u.split("-"),N=parseInt(x,10)-1;return`${parseInt(b,10)} de ${h[N]}, ${m}`},g=o?e.filter(u=>u.date===o):[];return r.jsxs("div",{className:"monthly-calendar-module",children:[r.jsxs("div",{className:"cal-header-bar",children:[r.jsxs("div",{className:"cal-title-group",children:[r.jsx(Ve,{size:22,className:"icon-cyan"}),r.jsxs("h2",{className:"cal-month-title",children:[h[d]," ",c]})]}),r.jsxs("div",{className:"cal-nav-controls",children:[r.jsx("button",{className:"btn btn-secondary cal-btn",onClick:v,"aria-label":"Mes anterior",children:r.jsx(Qd,{size:18})}),r.jsx("button",{className:"btn btn-secondary cal-btn",onClick:()=>s(new Date),children:"Hoy"}),r.jsx("button",{className:"btn btn-secondary cal-btn",onClick:k,"aria-label":"Mes siguiente",children:r.jsx(Ia,{size:18})}),r.jsxs("button",{className:"btn btn-primary cal-btn cal-btn-add",onClick:()=>a(o),children:[r.jsx(et,{size:16}),r.jsx("span",{children:"Añadir Reserva"})]})]})]}),r.jsxs("div",{className:"cal-layout-grid",children:[r.jsxs("div",{className:"month-grid-wrapper",children:[r.jsxs("div",{className:"weekdays-header",children:[r.jsx("span",{children:"Lun"}),r.jsx("span",{children:"Mar"}),r.jsx("span",{children:"Mié"}),r.jsx("span",{children:"Jue"}),r.jsx("span",{children:"Vie"}),r.jsx("span",{children:"Sáb"}),r.jsx("span",{children:"Dom"})]}),r.jsxs("div",{className:"days-grid",children:[[...Array(y)].map((u,m)=>r.jsx("div",{className:"day-cell blank-cell"},`blank-${m}`)),[...Array(f)].map((u,m)=>{const x=m+1,b=`${c}-${String(d+1).padStart(2,"0")}-${String(x).padStart(2,"0")}`,N=e.filter(A=>A.date===b&&A.status!=="cancelled"),S=N.reduce((A,H)=>A+(parseInt(H.guests)||0),0),F=N.length,T=!yo(b,1,e,t).isAvailable,de=o===b;return r.jsxs("div",{className:`day-cell ${de?"selected":""} ${T?"cell-full":F>0?"cell-busy":"cell-open"}`,onClick:()=>l(b),children:[r.jsxs("div",{className:"day-number-row",children:[r.jsx("span",{className:"day-num",children:x}),F>0&&r.jsxs("span",{className:`density-badge ${T?"full":"partial"}`,children:[F," EV."]})]}),F>0&&r.jsx("div",{className:"cell-details",children:r.jsxs("div",{className:"cell-stat",children:[r.jsx(fn,{size:10}),r.jsxs("span",{children:[S," inv."]})]})})]},x)})]})]}),r.jsxs("div",{className:"day-details-panel",children:[r.jsxs("div",{className:"panel-header",children:[r.jsxs("div",{className:"panel-title-container",children:[r.jsx("span",{className:"panel-title-lbl",children:"Reservas:"}),r.jsx("h3",{className:"panel-title-date",children:o?z(o):"Selecciona un día"})]}),o&&r.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>a(o),children:[r.jsx(et,{size:16}),r.jsx("span",{children:"Nueva Reserva"})]})]}),o?g.length===0?r.jsxs("div",{className:"panel-empty",children:[r.jsxs("p",{children:["No hay reservas registradas para el ",z(o),"."]}),r.jsx("button",{className:"btn btn-primary",onClick:()=>a(o),children:"Añadir Reserva para esta Fecha"})]}):r.jsx("div",{className:"day-reservations-list",children:g.map(u=>r.jsxs("div",{className:`res-card status-${u.status}`,children:[r.jsxs("div",{className:"res-card-header",children:[r.jsxs("div",{children:[r.jsx("h4",{children:u.clientName}),r.jsxs("span",{className:"res-contact",children:[u.clientEmail," • ",u.clientPhone]})]}),r.jsx("span",{className:`status-pill status-${u.status}`,children:u.status==="confirmed"?"Confirmada":u.status==="pending"?"Pendiente":"Cancelada"})]}),r.jsxs("div",{className:"res-card-body",children:[r.jsxs("div",{className:"res-meta-item",children:[r.jsx("strong",{children:"Menú:"})," ",u.menuName]}),r.jsxs("div",{className:"res-meta-item",children:[r.jsx("strong",{children:"Invitados:"})," ",u.guests," comensales"]}),r.jsxs("div",{className:"res-meta-item",children:[r.jsx("strong",{children:"Origen:"})," ",u.source==="public"?"Web Pública":"Manual (Admin)"]}),u.estimatedTotal&&r.jsxs("div",{className:"res-meta-item gold-meta",children:[r.jsx("strong",{children:"Total Estimado:"})," ",u.estimatedTotal,"€"]}),u.notes&&r.jsxs("div",{className:"res-notes",children:[r.jsx("strong",{children:"Notas:"})," ",u.notes]})]}),r.jsxs("div",{className:"res-card-actions",children:[u.status!=="confirmed"&&r.jsxs("button",{className:"btn btn-sm btn-confirm",onClick:()=>n(u.id,"confirmed"),children:[r.jsx(uo,{size:14}),r.jsx("span",{children:"Confirmar"})]}),u.status!=="pending"&&r.jsxs("button",{className:"btn btn-sm btn-pending",onClick:()=>n(u.id,"pending"),children:[r.jsx(mo,{size:14}),r.jsx("span",{children:"Poner Pendiente"})]}),u.status!=="cancelled"&&r.jsxs("button",{className:"btn btn-sm btn-cancel",onClick:()=>n(u.id,"cancelled"),children:[r.jsx(ou,{size:14}),r.jsx("span",{children:"Cancelar"})]})]})]},u.id))}):r.jsxs("div",{className:"panel-empty",children:[r.jsx(Ve,{size:40,className:"empty-icon"}),r.jsx("p",{children:"Haz clic en cualquier día del calendario para examinar la ocupación y gestionar las reservas."})]})]})]}),r.jsx("style",{children:`
        .monthly-calendar-module {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cal-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.25rem 1.8rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cal-title-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .cal-month-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3vw, 1.9rem) !important;
          color: #FFF;
          white-space: nowrap !important;
          word-break: normal !important;
        }

        .cal-nav-controls {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .cal-btn {
          padding: 0.55rem 0.9rem;
          font-size: 0.85rem;
          white-space: nowrap !important;
        }

        .cal-layout-grid {
          display: grid;
          grid-template-columns: 1.6fr 1.1fr;
          gap: 1.5rem;
        }

        .month-grid-wrapper {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.2rem;
          overflow-x: auto;
        }

        .weekdays-header {
          display: grid;
          grid-template-columns: repeat(7, minmax(34px, 1fr));
          text-align: center;
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          margin-bottom: 0.75rem;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(34px, 1fr));
          gap: 0.35rem;
        }

        .day-cell {
          min-height: 85px;
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 0.4rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden !important; /* STRICT CONTAINMENT SO BADGES NEVER OVERFLOW */
          position: relative;
          min-width: 0;
        }

        .day-cell:hover {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.08);
        }

        .day-cell.selected {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.18);
        }

        .day-cell.cell-full {
          border-left: 3px solid var(--accent-red);
        }

        .blank-cell {
          background: transparent;
          border: none;
          cursor: default;
        }

        .day-number-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.2rem;
          width: 100%;
          overflow: hidden;
        }

        .day-num {
          font-family: var(--font-subtitles);
          font-weight: 700;
          font-size: 1.05rem;
          color: #FFF;
          flex-shrink: 0;
        }

        .density-badge {
          font-size: 0.6rem;
          font-weight: 800;
          padding: 0.1rem 0.25rem;
          text-transform: uppercase;
          white-space: nowrap !important;
          line-height: 1;
          border-radius: 0 !important;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .density-badge.partial {
          background: rgba(212, 175, 55, 0.25);
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
        }

        .density-badge.full {
          background: rgba(168, 35, 42, 0.3);
          color: #FF6B6B;
          border: 1px solid var(--accent-red);
        }

        .cell-stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          color: var(--text-dark-secondary);
          white-space: nowrap;
        }

        .day-details-panel {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .panel-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          padding-bottom: 0.85rem;
          gap: 1rem;
        }

        /* 2-LINE SIDE PANEL TITLE LAYOUT (As in Image 3) */
        .panel-title-container {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .panel-title-lbl {
          font-family: var(--font-subtitles);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .panel-title-date {
          font-family: var(--font-subtitles);
          font-size: 1.25rem;
          color: #FFF;
          line-height: 1.2;
        }

        .panel-empty {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-dark-muted);
          gap: 1rem;
          padding: 2.5rem 1rem;
        }

        .empty-icon { opacity: 0.3; }

        .day-reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .res-card {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .res-card.status-confirmed { border-left: 4px solid #79D494; }
        .res-card.status-pending { border-left: 4px solid var(--accent-gold); }
        .res-card.status-cancelled { border-left: 4px solid var(--accent-red); opacity: 0.6; }

        .res-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .res-card-header h4 {
          font-size: 1.05rem;
          color: #FFF;
        }

        .res-contact {
          font-size: 0.8rem;
          color: var(--text-dark-muted);
          display: block;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-pill.status-confirmed { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .status-pill.status-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .status-pill.status-cancelled { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .res-card-body {
          font-size: 0.88rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          color: var(--text-dark-secondary);
        }

        .gold-meta { color: var(--accent-cyan); font-weight: 700; }

        .res-card-actions {
          display: flex;
          gap: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-confirm { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .btn-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .btn-cancel { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .cal-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .day-cell { min-height: 55px; padding: 0.25rem; }
          .day-num { font-size: 0.95rem; }
          .density-badge { font-size: 0.55rem; padding: 0.05rem 0.15rem; }
          .cal-btn-add { width: 100%; }
        }
      `})]})},ng=({reservations:e})=>{const[t,n]=j.useState(2026),i=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"].map((c,d)=>{const h=String(d+1).padStart(2,"0"),f=`${t}-${h}`,p=e.filter(g=>g.date.startsWith(f)&&g.status!=="cancelled"),y=p.length,v=p.reduce((g,u)=>g+(parseInt(u.guests)||0),0),k=p.reduce((g,u)=>g+(parseFloat(u.estimatedTotal)||0),0);let z=0;return y>=1&&(z=1),y>=3&&(z=2),y>=6&&(z=3),y>=10&&(z=4),{monthName:c,monthNum:h,totalEvents:y,totalGuests:v,estimatedRev:k,intensity:z}}),s=i.reduce((c,d)=>c+d.totalEvents,0),o=i.reduce((c,d)=>c+d.totalGuests,0),l=i.reduce((c,d)=>c+d.estimatedRev,0);return r.jsxs("div",{className:"annual-heatmap-module",children:[r.jsxs("div",{className:"heatmap-header",children:[r.jsxs("div",{className:"header-text-block",children:[r.jsxs("h2",{className:"header-title",children:["Mapa de Calor Anual (",t,")"]}),r.jsx("p",{className:"header-subtitle",children:"Visión panorámica de la intensidad de reservas y estacionalidad durante todo el año."})]}),r.jsxs("div",{className:"year-selector-row",children:[r.jsx("button",{className:`btn btn-sm ${t===2025?"btn-primary":"btn-secondary"}`,onClick:()=>n(2025),children:"2025"}),r.jsx("button",{className:`btn btn-sm ${t===2026?"btn-primary":"btn-secondary"}`,onClick:()=>n(2026),children:"2026"}),r.jsx("button",{className:`btn btn-sm ${t===2027?"btn-primary":"btn-secondary"}`,onClick:()=>n(2027),children:"2027"})]})]}),r.jsxs("div",{className:"year-stats-row",children:[r.jsxs("div",{className:"glass-card stat-box",children:[r.jsx(Zd,{className:"icon-cyan",size:24}),r.jsxs("div",{children:[r.jsx("span",{className:"stat-val",children:s}),r.jsxs("span",{className:"stat-lbl",children:["Eventos en ",t]})]})]}),r.jsxs("div",{className:"glass-card stat-box",children:[r.jsx(fn,{className:"icon-cyan",size:24}),r.jsxs("div",{children:[r.jsx("span",{className:"stat-val",children:o}),r.jsx("span",{className:"stat-lbl",children:"Comensales Totales"})]})]}),r.jsxs("div",{className:"glass-card stat-box",children:[r.jsx(au,{className:"icon-cyan",size:24}),r.jsxs("div",{children:[r.jsxs("span",{className:"stat-val",children:[l.toFixed(0),"€"]}),r.jsx("span",{className:"stat-lbl",children:"Ingresos Estimados"})]})]})]}),r.jsx("div",{className:"heatmap-grid",children:i.map((c,d)=>r.jsxs("div",{className:`month-heat-card intensity-${c.intensity}`,children:[r.jsxs("div",{className:"month-card-header",children:[r.jsx("span",{className:"month-name",children:c.monthName}),r.jsx("span",{className:"heat-dot"})]}),r.jsxs("div",{className:"month-card-body",children:[r.jsxs("div",{className:"heat-metric",children:[r.jsx("span",{className:"val",children:c.totalEvents}),r.jsxs("span",{className:"lbl",children:["evento",c.totalEvents!==1?"s":""]})]}),r.jsx("div",{className:"heat-metric",children:r.jsxs("span",{className:"sub-val",children:[c.totalGuests," comensales"]})}),c.estimatedRev>0&&r.jsxs("div",{className:"heat-metric rev-val",children:[c.estimatedRev,"€"]})]})]},d))}),r.jsxs("div",{className:"heatmap-legend",children:[r.jsx("span",{children:"Intensidad de Ocupación:"}),r.jsxs("div",{className:"legend-scale",children:[r.jsx("span",{className:"scale-box intensity-0",children:"Baja (0)"}),r.jsx("span",{className:"scale-box intensity-1",children:"Moderada (1-2)"}),r.jsx("span",{className:"scale-box intensity-2",children:"Media (3-5)"}),r.jsx("span",{className:"scale-box intensity-3",children:"Alta (6-9)"}),r.jsx("span",{className:"scale-box intensity-4",children:"Máxima (10+)"})]})]}),r.jsx("style",{children:`
        .annual-heatmap-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .heatmap-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .year-selector-row {
          display: flex;
          gap: 0.6rem;
          width: 100%;
        }

        .year-selector-row button {
          flex: 1;
        }

        .year-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .stat-val {
          font-family: var(--font-subtitles);
          font-size: 2rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .heatmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .month-heat-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: transform var(--transition-fast);
        }

        .month-heat-card:hover {
          transform: translateY(-4px);
        }

        .month-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          padding-bottom: 0.4rem;
        }

        .month-name {
          font-family: var(--font-subtitles);
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFF;
        }

        .heat-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        /* Heatmap intensity color spectrum */
        .month-heat-card.intensity-0 .heat-dot { background: #3A3835; }
        .month-heat-card.intensity-1 { border-top: 3px solid #275A38; }
        .month-heat-card.intensity-1 .heat-dot { background: #79D494; }

        .month-heat-card.intensity-2 { border-top: 3px solid var(--accent-gold); }
        .month-heat-card.intensity-2 .heat-dot { background: var(--accent-gold); }

        .month-heat-card.intensity-3 { border-top: 3px solid var(--accent-cyan); }
        .month-heat-card.intensity-3 .heat-dot { background: var(--accent-cyan); }

        .month-heat-card.intensity-4 { border-top: 3px solid var(--accent-red); background: rgba(168, 35, 42, 0.12); }
        .month-heat-card.intensity-4 .heat-dot { background: var(--accent-red); }

        .heat-metric .val {
          font-family: var(--font-subtitles);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .heat-metric .lbl {
          font-size: 0.82rem;
          color: var(--text-dark-muted);
          margin-left: 0.3rem;
        }

        .heat-metric .sub-val {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .rev-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: #79D494;
          margin-top: 0.4rem;
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: var(--bg-card-dark);
          padding: 1rem 1.5rem;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          border: 1px solid rgba(247, 245, 240, 0.08);
          flex-wrap: wrap;
        }

        .legend-scale {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .scale-box {
          font-size: 0.72rem;
          padding: 0.2rem 0.5rem;
          font-weight: 700;
        }

        .scale-box.intensity-0 { background: #3A3835; color: #FFF; }
        .scale-box.intensity-1 { background: rgba(39, 90, 56, 0.3); color: #79D494; }
        .scale-box.intensity-2 { background: rgba(212, 175, 55, 0.3); color: var(--accent-gold); }
        .scale-box.intensity-3 { background: rgba(62, 193, 201, 0.3); color: var(--accent-cyan); }
        .scale-box.intensity-4 { background: rgba(168, 35, 42, 0.3); color: var(--accent-red); }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .heatmap-grid { grid-template-columns: repeat(2, 1fr); }
          .year-stats-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .heatmap-grid { grid-template-columns: 1fr; }
        }
      `})]})},rg=({reservations:e,onUpdateStatus:t,onOpenAddModal:n})=>{const[a,i]=j.useState(""),[s,o]=j.useState("all"),[l,c]=j.useState("all"),[d,h]=j.useState("all"),f=e.filter(p=>{var y,v,k;if(a){const z=a.toLowerCase(),g=(y=p.clientName)==null?void 0:y.toLowerCase().includes(z),u=(v=p.clientEmail)==null?void 0:v.toLowerCase().includes(z),m=(k=p.location)==null?void 0:k.toLowerCase().includes(z);if(!g&&!u&&!m)return!1}return!(s!=="all"&&p.status!==s||l!=="all"&&p.source!==l||d!=="all"&&p.menuType!==d)});return r.jsxs("div",{className:"reservations-list-module",children:[r.jsxs("div",{className:"module-header",children:[r.jsxs("div",{className:"header-text-block",children:[r.jsx("h2",{className:"header-title",children:"Listado de Reservas"}),r.jsx("p",{className:"header-subtitle",children:"Filtra, gestiona estados y edita solicitudes de catering públicas y presenciales."})]}),r.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>n(null),children:[r.jsx(et,{size:16}),r.jsx("span",{children:"Nueva Reserva Manual"})]})]}),r.jsxs("div",{className:"filter-controls-bar",children:[r.jsxs("div",{className:"search-box",children:[r.jsx(yf,{size:18,className:"search-icon"}),r.jsx("input",{type:"text",placeholder:"Buscar por cliente, email o zona de Múnich...",value:a,onChange:p=>i(p.target.value)})]}),r.jsxs("div",{className:"filter-dropdowns",children:[r.jsxs("select",{value:s,onChange:p=>o(p.target.value),children:[r.jsx("option",{value:"all",children:"Todos los Estados"}),r.jsx("option",{value:"pending",children:"Pendientes"}),r.jsx("option",{value:"confirmed",children:"Confirmadas"}),r.jsx("option",{value:"cancelled",children:"Canceladas"})]}),r.jsxs("select",{value:l,onChange:p=>c(p.target.value),children:[r.jsx("option",{value:"all",children:"Todos los Orígenes"}),r.jsx("option",{value:"public",children:"Web Pública"}),r.jsx("option",{value:"manual",children:"Manual (Admin)"})]}),r.jsxs("select",{value:d,onChange:p=>h(p.target.value),children:[r.jsx("option",{value:"all",children:"Todos los Menús"}),r.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei"}),r.jsx("option",{value:"de-tapas",children:"Pinchos & Tapas"}),r.jsx("option",{value:"full-experience",children:"Experiencia Completa"})]})]})]}),r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"reservations-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Cliente"}),r.jsx("th",{children:"Invitados"}),r.jsx("th",{children:"Menú"}),r.jsx("th",{children:"Origen"}),r.jsx("th",{children:"Est. Total"}),r.jsx("th",{children:"Estado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsx("tbody",{children:f.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:"8",className:"no-results",children:"No se encontraron reservas con los filtros seleccionados."})}):f.map(p=>r.jsxs("tr",{className:`table-row status-${p.status}`,children:[r.jsx("td",{className:"font-bold",children:p.date}),r.jsx("td",{children:r.jsxs("div",{className:"client-cell",children:[r.jsx("span",{className:"client-name",children:p.clientName}),r.jsxs("span",{className:"client-sub",children:[p.clientEmail," • ",p.clientPhone]})]})}),r.jsxs("td",{children:[p.guests," inv."]}),r.jsx("td",{children:r.jsx("span",{className:"menu-pill",children:p.menuName})}),r.jsx("td",{children:r.jsx("span",{className:`source-badge source-${p.source}`,children:p.source==="public"?"Web Pública":"Manual Admin"})}),r.jsx("td",{className:"gold-text",children:p.estimatedTotal?`${p.estimatedTotal}€`:"—"}),r.jsx("td",{children:r.jsx("span",{className:`status-pill status-${p.status}`,children:p.status==="confirmed"?"Confirmada":p.status==="pending"?"Pendiente":"Cancelada"})}),r.jsx("td",{children:r.jsxs("div",{className:"table-actions",children:[p.status!=="confirmed"&&r.jsx("button",{className:"btn-action confirm",title:"Confirmar Reserva",onClick:()=>t(p.id,"confirmed"),children:r.jsx(uo,{size:16})}),p.status!=="pending"&&r.jsx("button",{className:"btn-action pending",title:"Poner en Pendiente",onClick:()=>t(p.id,"pending"),children:r.jsx(mo,{size:16})}),p.status!=="cancelled"&&r.jsx("button",{className:"btn-action cancel",title:"Cancelar Reserva",onClick:()=>t(p.id,"cancelled"),children:r.jsx(ou,{size:16})})]})})]},p.id))})]})}),r.jsx("style",{children:`
        .reservations-list-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .module-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .header-action-btn {
          align-self: flex-start;
        }

        .filter-controls-bar {
          display: flex;
          gap: 1rem;
          background: var(--bg-card-dark);
          padding: 1rem 1.5rem;
          border: 1px solid rgba(247, 245, 240, 0.08);
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex-grow: 1;
          min-width: 260px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dark-muted);
        }

        .search-box input {
          width: 100%;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          padding: 0.75rem 1rem 0.75rem 2.6rem;
          font-size: 0.92rem;
        }

        .filter-dropdowns {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .filter-dropdowns select {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }

        .table-responsive {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          overflow-x: auto;
        }

        .reservations-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.92rem;
        }

        .reservations-table th {
          background: rgba(13, 13, 12, 0.8);
          color: var(--accent-cyan);
          font-family: var(--font-body);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          padding: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
        }

        .reservations-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
          color: var(--text-dark-secondary);
        }

        .font-bold { font-weight: 700; color: #FFF; }
        .gold-text { color: var(--accent-cyan); font-weight: 700; }

        .client-cell {
          display: flex;
          flex-direction: column;
        }

        .client-name { font-weight: 700; color: #FFF; }
        .client-sub { font-size: 0.8rem; color: var(--text-dark-muted); }

        .menu-pill {
          font-size: 0.8rem;
          background: rgba(247, 245, 240, 0.08);
          padding: 0.2rem 0.6rem;
          color: #FFF;
        }

        .source-badge {
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          font-weight: 600;
        }

        .source-public { background: rgba(62, 193, 201, 0.15); color: var(--accent-cyan); }
        .source-manual { background: rgba(212, 175, 55, 0.15); color: var(--accent-gold); }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-pill.status-confirmed { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .status-pill.status-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .status-pill.status-cancelled { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .table-actions {
          display: flex;
          gap: 0.4rem;
        }

        .btn-action {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-action.confirm:hover { background: #275A38; color: #FFF; }
        .btn-action.pending:hover { background: var(--accent-gold); color: #0D0D0C; }
        .btn-action.cancel:hover { background: var(--accent-red); color: #FFF; }

        .no-results {
          text-align: center;
          padding: 3rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 768px) {
          .header-action-btn { width: 100%; }
          .filter-controls-bar { flex-direction: column; }
          .filter-dropdowns { flex-direction: column; }
        }
      `})]})},ag=({reservations:e})=>{const t=e.filter(d=>d.status!=="cancelled"),n=t.reduce((d,h)=>{const f=h.menuName||h.menuType||"Otro";return d[f]=(d[f]||0)+1,d},{}),a={"10-19 comensales":0,"20-34 comensales":0,"35-50+ comensales":0};t.forEach(d=>{const h=parseInt(d.guests)||0;h<20?a["10-19 comensales"]++:h<=34?a["20-34 comensales"]++:a["35-50+ comensales"]++});const i=t.filter(d=>d.source==="public").length,s=t.filter(d=>d.source==="manual").length,o=t.filter(d=>parseFloat(d.estimatedTotal)>0),l=o.reduce((d,h)=>d+parseFloat(h.estimatedTotal),0),c=o.length>0?Math.round(l/o.length):0;return r.jsxs("div",{className:"analytics-view-module",children:[r.jsxs("div",{className:"analytics-header",children:[r.jsxs("div",{className:"header-text-block",children:[r.jsx("h2",{className:"header-title",children:"Métricas y Análisis de Rendimiento"}),r.jsx("p",{className:"header-subtitle",children:"Análisis de patrones de reserva, distribución de menús y rentabilidad operativa."})]}),r.jsxs("div",{className:"finance-notice",children:[r.jsx(rf,{size:16}),r.jsx("span",{children:"Las métricas financieras se calculan sobre presupuestos completados."})]})]}),r.jsxs("div",{className:"kpi-cards-grid",children:[r.jsxs("div",{className:"glass-card kpi-card",children:[r.jsx(ef,{className:"icon-cyan",size:26}),r.jsxs("div",{children:[r.jsxs("span",{className:"kpi-val",children:[l.toFixed(0),"€"]}),r.jsx("span",{className:"kpi-lbl",children:"Ingresos Totales Registrados"})]})]}),r.jsxs("div",{className:"glass-card kpi-card",children:[r.jsx(au,{className:"icon-cyan",size:26}),r.jsxs("div",{children:[r.jsxs("span",{className:"kpi-val",children:[c,"€"]}),r.jsx("span",{className:"kpi-lbl",children:"Valor Medio por Evento"})]})]}),r.jsxs("div",{className:"glass-card kpi-card",children:[r.jsx(fn,{className:"icon-cyan",size:26}),r.jsxs("div",{children:[r.jsx("span",{className:"kpi-val",children:t.length}),r.jsx("span",{className:"kpi-lbl",children:"Eventos Activos Confirmados"})]})]})]}),r.jsxs("div",{className:"analytics-grid",children:[r.jsxs("div",{className:"glass-card chart-card",children:[r.jsxs("div",{className:"chart-title",children:[r.jsx(xf,{size:20,className:"icon-cyan"}),r.jsx("h3",{children:"Distribución por Tipo de Menú"})]}),r.jsx("div",{className:"bar-chart-container",children:Object.entries(n).map(([d,h],f)=>{const p=t.length>0?Math.round(h/t.length*100):0;return r.jsxs("div",{className:"bar-row",children:[r.jsxs("div",{className:"bar-info",children:[r.jsx("span",{className:"bar-label",children:d}),r.jsxs("span",{className:"bar-val",children:[h," (",p,"%)"]})]}),r.jsx("div",{className:"bar-track",children:r.jsx("div",{className:"bar-fill",style:{width:`${p}%`}})})]},f)})})]}),r.jsxs("div",{className:"glass-card chart-card",children:[r.jsxs("div",{className:"chart-title",children:[r.jsx(fn,{size:20,className:"icon-cyan"}),r.jsx("h3",{children:"Tamaño de los Grupos (Comensales)"})]}),r.jsx("div",{className:"bar-chart-container",children:Object.entries(a).map(([d,h],f)=>{const p=t.length>0?Math.round(h/t.length*100):0;return r.jsxs("div",{className:"bar-row",children:[r.jsxs("div",{className:"bar-info",children:[r.jsx("span",{className:"bar-label",children:d}),r.jsxs("span",{className:"bar-val",children:[h," eventos (",p,"%)"]})]}),r.jsx("div",{className:"bar-track",children:r.jsx("div",{className:"bar-fill cyan-fill",style:{width:`${p}%`}})})]},f)})})]}),r.jsxs("div",{className:"glass-card chart-card full-width-card",children:[r.jsxs("div",{className:"chart-title",children:[r.jsx(Kd,{size:20,className:"icon-cyan"}),r.jsx("h3",{children:"Origen de las Reservas (Web Pública vs. Canal Manual)"})]}),r.jsxs("div",{className:"source-split-wrapper",children:[r.jsxs("div",{className:"source-stat",children:[r.jsx("span",{className:"source-num",children:i}),r.jsx("span",{className:"source-title",children:"Reservas Web Pública"}),r.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(i/t.length*100):0,"% del total"]})]}),r.jsx("div",{className:"source-divider"}),r.jsxs("div",{className:"source-stat",children:[r.jsx("span",{className:"source-num gold-num",children:s}),r.jsx("span",{className:"source-title",children:"Reservas Manuales (Teléfono/Email)"}),r.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(s/t.length*100):0,"% del total"]})]})]})]})]}),r.jsx("style",{children:`
        .analytics-view-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .analytics-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .finance-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.55rem 1rem;
          font-size: 0.85rem;
          align-self: flex-start;
          max-width: 100%;
        }

        .kpi-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .kpi-val {
          font-family: var(--font-subtitles);
          font-size: 2rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .kpi-lbl {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .chart-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .full-width-card {
          grid-column: 1 / -1;
        }

        .chart-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chart-title h3 {
          font-size: 1.2rem;
          color: #FFF;
        }

        .bar-chart-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .bar-label { color: #FFF; font-weight: 600; }
        .bar-val { color: var(--accent-cyan); font-weight: 700; }

        .bar-track {
          height: 10px;
          background: rgba(13, 13, 12, 0.7);
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--accent-cyan);
          transition: width 0.6s ease;
        }

        .cyan-fill { background: var(--accent-gold); }

        .source-split-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 1.5rem 0;
        }

        .source-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .source-num {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .gold-num { color: var(--accent-gold); }

        .source-title {
          font-size: 1rem;
          font-weight: 600;
          color: #FFF;
          margin-top: 0.4rem;
        }

        .source-pct {
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        .source-divider {
          width: 1px;
          height: 70px;
          background: rgba(247, 245, 240, 0.1);
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 900px) {
          .kpi-cards-grid, .analytics-grid {
            grid-template-columns: 1fr;
          }
          .source-split-wrapper {
            flex-direction: column;
            gap: 1.5rem;
          }
          .source-divider { display: none; }
        }
      `})]})},ig=()=>{const[e,t]=j.useState(lu()),[n,a]=j.useState(!1),[i,s]=j.useState(null),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[h,f]=j.useState({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0}),p=m=>{const x=e.map(b=>b.id===m?{...b,active:!b.active}:b);t(x),us(x)},y=m=>{if(window.confirm("¿Seguro que deseas eliminar este producto gourmet?")){const x=e.filter(b=>b.id!==m);t(x),us(x)}},v=m=>{s(m.id),f({name:m.name,category:m.category,price:m.price,image:m.image,desc:m.desc,active:m.active}),a(!0),window.scrollTo({top:180,behavior:"smooth"})},k=()=>{a(!1),s(null),f({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0})},z=async m=>{if(!(!m||!m.type.startsWith("image/"))){d(!0);try{const x=await xo(m,800,800,.78);f(b=>({...b,image:x}))}catch(x){console.error("Error al optimizar imagen:",x)}finally{d(!1)}}},g=m=>{m.preventDefault(),l(!1),m.dataTransfer.files&&m.dataTransfer.files[0]&&z(m.dataTransfer.files[0])},u=m=>{m.preventDefault();const x={...h,id:i||`prod_${Date.now()}`},b=Ef(x);t(b),k()};return r.jsxs("div",{className:"products-manager-module",children:[r.jsxs("div",{className:"module-header",children:[r.jsxs("div",{className:"header-text-block",children:[r.jsx("h2",{className:"header-title",children:"Gestión de Productos Gourmet (CMS)"}),r.jsx("p",{className:"header-subtitle",children:"Edita, añade o sube imágenes a la tienda delicatessen pública en tiempo real."})]}),r.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>{n&&!i?k():(s(null),f({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0}),a(!0))},children:[r.jsx(et,{size:16}),r.jsx("span",{children:n?"Cerrar Formulario":"Nuevo Producto Gourmet"})]})]}),n&&r.jsxs("form",{onSubmit:u,className:"glass-card add-prod-form",children:[r.jsx("h3",{children:i?"✍️ Editar Producto Gourmet":"✨ Añadir Nuevo Producto Gourmet"}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Nombre del Producto *"}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Bonito del Norte en AOVE",value:h.name,onChange:m=>f({...h,name:m.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Categoría *"}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Conservas Artesanales",value:h.category,onChange:m=>f({...h,category:m.target.value})})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Precio (€) *"}),r.jsx("input",{type:"number",step:"0.10",required:!0,value:h.price,onChange:m=>f({...h,price:parseFloat(m.target.value)})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Ruta / URL de la Imagen"}),r.jsx("input",{type:"text",value:h.image.startsWith("data:")?`[Imagen Base64 Optimizada - ${Math.round(h.image.length/1024)} KB]`:h.image,onChange:m=>f({...h,image:m.target.value}),title:h.image})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{className:"drag-header-label",children:[r.jsx("span",{children:"Subir Imagen por Arrastre (Drag & Drop)"}),r.jsxs("span",{className:"badge-opt",children:[r.jsx(ga,{size:12})," Auto-Optimización Canvas 800px"]})]}),r.jsxs("div",{className:`drag-drop-zone ${o?"is-dragging":""} ${c?"is-optimizing":""}`,onDragOver:m=>{m.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:g,children:[r.jsx("input",{type:"file",accept:"image/*",id:"file-prod-input",className:"file-hidden-input",onChange:m=>z(m.target.files[0])}),r.jsx("label",{htmlFor:"file-prod-input",className:"drag-label-content",children:c?r.jsxs("div",{className:"optimizing-text",children:[r.jsx(ga,{size:24,className:"icon-cyan spin"}),r.jsx("span",{children:"Optimizando y comprimiendo imagen en canvas..."})]}):h.image?r.jsxs("div",{className:"preview-row",children:[r.jsx("img",{src:h.image,alt:"Preview",className:"drag-preview-img"}),r.jsxs("div",{className:"preview-info",children:[r.jsx("span",{className:"preview-status",children:"⚡ Imagen procesada y optimizada."}),r.jsx("span",{className:"preview-sub",children:"Arrastra otra foto para reemplazarla."})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(iu,{size:28,className:"icon-cyan"}),r.jsxs("span",{children:["Arrastra y suelta tu imagen aquí o ",r.jsx("strong",{children:"haz clic para seleccionar"})]})]})})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Descripción Gastronómica *"}),r.jsx("textarea",{rows:"2",required:!0,placeholder:"Detalles sobre elaboración, origen o maridaje recomendados...",value:h.desc,onChange:m=>f({...h,desc:m.target.value})})]}),r.jsxs("div",{className:"form-actions",children:[r.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:c,children:[r.jsx(tu,{size:16}),r.jsx("span",{children:i?"Guardar Cambios":"Guardar Producto"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:k,children:[r.jsx(kt,{size:16}),r.jsx("span",{children:"Cancelar"})]})]})]}),r.jsx("div",{className:"products-cms-grid",children:e.map(m=>r.jsxs("div",{className:`glass-card cms-product-card ${m.active?"":"is-inactive"}`,children:[r.jsxs("div",{className:"cms-img-wrapper",children:[r.jsx("img",{src:m.image,alt:m.name,className:"cms-prod-img"}),r.jsx("span",{className:`status-badge ${m.active?"active":"inactive"}`,children:m.active?"Visible en Web":"Oculto"})]}),r.jsxs("div",{className:"cms-prod-body",children:[r.jsx("span",{className:"cms-cat",children:m.category}),r.jsx("h4",{children:m.name}),r.jsx("p",{children:m.desc}),r.jsxs("div",{className:"cms-price-row",children:[r.jsxs("span",{className:"cms-price",children:[m.price.toFixed(2),"€"]}),r.jsxs("div",{className:"cms-actions",children:[r.jsx("button",{className:"btn-action-icon edit",title:"Editar producto",onClick:()=>v(m),children:r.jsx(eu,{size:17})}),r.jsx("button",{className:`btn-action-icon ${m.active?"active":""}`,title:m.active?"Ocultar en la web":"Hacer visible",onClick:()=>p(m.id),children:m.active?r.jsx(ha,{size:17}):r.jsx(pa,{size:17})}),r.jsx("button",{className:"btn-action-icon delete",title:"Eliminar producto",onClick:()=>y(m.id),children:r.jsx(Da,{size:17})})]})]})]})]},m.id))}),r.jsx("style",{children:`
        .products-manager-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .module-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
          box-sizing: border-box;
        }

        .header-text-block { width: 100%; }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .header-action-btn { align-self: flex-start; }

        .add-prod-form {
          border: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          width: 100%;
          max-width: 100%;
          min-width: 0; /* PREVENT GRID OVERFLOW FROM LONG TEXT OR BASE64 */
          box-sizing: border-box;
        }

        .drag-header-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .badge-opt {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(62, 193, 201, 0.12);
          padding: 0.15rem 0.5rem;
          border: 1px solid rgba(62, 193, 201, 0.3);
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .form-field textarea {
          white-space: pre-wrap;
        }

        /* DRAG AND DROP ZONE */
        .drag-drop-zone {
          border: 2px dashed rgba(212, 175, 55, 0.4);
          background: rgba(13, 13, 12, 0.6);
          padding: 1.2rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .drag-drop-zone:hover, .drag-drop-zone.is-dragging {
          border-color: var(--accent-cyan);
          background: rgba(212, 175, 55, 0.08);
        }

        .file-hidden-input {
          display: none;
        }

        .drag-label-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow: hidden;
        }

        .preview-status {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .preview-sub {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        .drag-preview-img {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border: 1px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .optimizing-text {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .products-cms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .cms-product-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .cms-product-card.is-inactive { opacity: 0.6; }

        .cms-img-wrapper {
          position: relative;
          height: 180px;
        }

        .cms-prod-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          text-transform: uppercase;
        }

        .status-badge.active { background: rgba(39, 90, 56, 0.9); color: #FFF; }
        .status-badge.inactive { background: rgba(168, 35, 42, 0.9); color: #FFF; }

        .cms-prod-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cms-cat {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .cms-prod-body h4 {
          font-size: 1.15rem;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .cms-prod-body p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .cms-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 1rem;
        }

        .cms-price {
          font-family: var(--font-subtitles);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .cms-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-action-icon {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-action-icon:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); }
        .btn-action-icon.edit:hover { border-color: var(--accent-cyan); background: rgba(212, 175, 55, 0.2); }
        .btn-action-icon.delete:hover { border-color: var(--accent-red); color: var(--accent-red); }

        @media (max-width: 640px) {
          .header-action-btn { width: 100%; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})},sg=()=>{const[e,t]=j.useState(fo()),[n,a]=j.useState(!1),[i,s]=j.useState(null),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[h,f]=j.useState({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""}),p=e.filter(x=>x.active).length,y=x=>{const b=e.map(N=>N.id===x?{...N,active:!N.active}:N);t(b),ms(b)},v=x=>{if(window.confirm("¿Deseas eliminar esta promoción de la portada?")){const b=e.filter(N=>N.id!==x);t(b),ms(b)}},k=x=>{s(x.id),f({headline:x.headline||"",bodyText:x.bodyText||"",image:x.image||"/images/IMG_1240.jpeg",ctaText:x.ctaText||"Ver Promoción",ctaLink:x.ctaLink||"#personalizacion",active:x.active!==void 0?x.active:!0,startDate:x.startDate||"",endDate:x.endDate||""}),a(!0),window.scrollTo({top:180,behavior:"smooth"})},z=()=>{a(!1),s(null),f({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""})},g=async x=>{if(!(!x||!x.type.startsWith("image/"))){d(!0);try{const b=await xo(x,800,800,.78);f(N=>({...N,image:b}))}catch(b){console.error("Error al optimizar la imagen:",b)}finally{d(!1)}}},u=x=>{x.preventDefault(),l(!1),x.dataTransfer.files&&x.dataTransfer.files[0]&&g(x.dataTransfer.files[0])},m=x=>{x.preventDefault();const b={...h,id:i||`promo_${Date.now()}`},N=Pf(b);t(N),z()};return r.jsxs("div",{className:"promotions-manager-module",children:[r.jsxs("div",{className:"module-header",children:[r.jsxs("div",{className:"header-text-block",children:[r.jsx("h2",{className:"header-title",children:"Gestión del Banner de Promociones"}),r.jsx("p",{className:"header-subtitle",children:"Edita, añade o sube imágenes para ofertas temporales y eventos especiales en tiempo real."})]}),r.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>{n&&!i?z():(s(null),f({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""}),a(!0))},children:[r.jsx(et,{size:16}),r.jsx("span",{children:n?"Cerrar Formulario":"Nueva Promoción"})]})]}),r.jsxs("div",{className:"mode-status-banner",children:[r.jsx(sf,{className:"icon-cyan",size:22}),r.jsxs("div",{children:[r.jsxs("h4",{children:["Modo de Presentación en Portada:",r.jsx("span",{className:"gold-text",children:p===0?" Oculto (0 promociones activas)":p===1?" Banner Estático Individual (1 activa)":` Carrusel Giratorio (${p} activas en rotación)`})]}),r.jsx("p",{children:"El sistema detecta automáticamente el número de promociones activas y las muestra como banner único o carrusel girable."})]})]}),n&&r.jsxs("form",{onSubmit:m,className:"glass-card add-promo-form",children:[r.jsx("h3",{children:i?"✍️ Editar Promoción de Portada":"✨ Crear Nueva Promoción para la Portada"}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Titular de la Promoción *"}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Menú Especial Paella los Fines de Semana",value:h.headline,onChange:x=>f({...h,headline:x.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Texto Descriptivo *"}),r.jsx("textarea",{rows:"2",required:!0,placeholder:"Explicación breve de la oferta o servicio especial...",value:h.bodyText,onChange:x=>f({...h,bodyText:x.target.value})})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Texto del Botón CTA"}),r.jsx("input",{type:"text",placeholder:"Ej: Reservar Fecha Especial",value:h.ctaText,onChange:x=>f({...h,ctaText:x.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Ruta / URL de la Imagen *"}),r.jsx("input",{type:"text",required:!0,value:h.image.startsWith("data:")?`[Imagen Base64 Optimizada - ${Math.round(h.image.length/1024)} KB]`:h.image,onChange:x=>f({...h,image:x.target.value}),title:h.image})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{className:"drag-header-label",children:[r.jsx("span",{children:"Subir Imagen por Arrastre (Drag & Drop)"}),r.jsxs("span",{className:"badge-opt",children:[r.jsx(ga,{size:12})," Auto-Optimización Canvas 800px"]})]}),r.jsxs("div",{className:`drag-drop-zone ${o?"is-dragging":""} ${c?"is-optimizing":""}`,onDragOver:x=>{x.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:u,children:[r.jsx("input",{type:"file",accept:"image/*",id:"file-promo-input",className:"file-hidden-input",onChange:x=>g(x.target.files[0])}),r.jsx("label",{htmlFor:"file-promo-input",className:"drag-label-content",children:c?r.jsxs("div",{className:"optimizing-text",children:[r.jsx(ga,{size:24,className:"icon-cyan spin"}),r.jsx("span",{children:"Optimizando y comprimiendo imagen en canvas..."})]}):h.image?r.jsxs("div",{className:"preview-row",children:[r.jsx("img",{src:h.image,alt:"Preview",className:"drag-preview-img"}),r.jsxs("div",{className:"preview-info",children:[r.jsx("span",{className:"preview-status",children:"⚡ Imagen procesada y optimizada."}),r.jsx("span",{className:"preview-sub",children:"Arrastra otra foto para reemplazarla."})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(iu,{size:28,className:"icon-cyan"}),r.jsxs("span",{children:["Arrastra y suelta tu imagen aquí o ",r.jsx("strong",{children:"haz clic para seleccionar"})]})]})})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Fecha Inicio (Opcional)"}),r.jsx("input",{type:"date",value:h.startDate,onChange:x=>f({...h,startDate:x.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Fecha Fin (Opcional)"}),r.jsx("input",{type:"date",value:h.endDate,onChange:x=>f({...h,endDate:x.target.value})})]})]}),r.jsxs("div",{className:"form-actions",children:[r.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:c,children:[r.jsx(tu,{size:16}),r.jsx("span",{children:i?"Guardar Cambios":"Publicar Promoción"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:z,children:[r.jsx(kt,{size:16}),r.jsx("span",{children:"Cancelar"})]})]})]}),r.jsx("div",{className:"promotions-list",children:e.map(x=>r.jsxs("div",{className:`glass-card promo-cms-card ${x.active?"":"is-inactive"}`,children:[r.jsx("img",{src:x.image,alt:x.headline,className:"promo-cms-img"}),r.jsxs("div",{className:"promo-cms-content",children:[r.jsxs("div",{className:"promo-cms-header",children:[r.jsx("h3",{children:x.headline}),r.jsx("span",{className:`status-badge ${x.active?"active":"inactive"}`,children:x.active?"Activa":"Desactivada"})]}),r.jsx("p",{children:x.bodyText}),(x.startDate||x.endDate)&&r.jsxs("div",{className:"date-range-tag",children:[r.jsx(Ve,{size:14}),r.jsxs("span",{children:["Vigencia: ",x.startDate||"—"," a ",x.endDate||"Sin límite"]})]})]}),r.jsxs("div",{className:"promo-cms-actions",children:[r.jsx("button",{className:"btn-action-icon edit",title:"Editar promoción",onClick:()=>k(x),children:r.jsx(eu,{size:17})}),r.jsx("button",{className:`btn-action-icon ${x.active?"active":""}`,title:x.active?"Desactivar de portada":"Activar en portada",onClick:()=>y(x.id),children:x.active?r.jsx(ha,{size:18}):r.jsx(pa,{size:18})}),r.jsx("button",{className:"btn-action-icon delete",title:"Eliminar promoción",onClick:()=>v(x.id),children:r.jsx(Da,{size:18})})]})]},x.id))}),r.jsx("style",{children:`
        .promotions-manager-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .module-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
          box-sizing: border-box;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .header-action-btn {
          align-self: flex-start;
        }

        .mode-status-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid var(--accent-cyan);
          padding: 1.25rem 1.8rem;
          width: 100%;
          box-sizing: border-box;
        }

        .mode-status-banner h4 { font-size: 1.1rem; color: #FFF; margin-bottom: 0.2rem; }
        .mode-status-banner p { font-size: 0.88rem; color: var(--text-dark-secondary); }
        .gold-text { color: var(--accent-cyan); }

        .add-promo-form {
          border: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          width: 100%;
          max-width: 100%;
          min-width: 0; /* PREVENT GRID OVERFLOW FROM BASE64 OR LONG TEXT */
          box-sizing: border-box;
        }

        .drag-header-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .badge-opt {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(62, 193, 201, 0.12);
          padding: 0.15rem 0.5rem;
          border: 1px solid rgba(62, 193, 201, 0.3);
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .form-field textarea {
          white-space: pre-wrap;
        }

        /* DRAG AND DROP ZONE */
        .drag-drop-zone {
          border: 2px dashed rgba(212, 175, 55, 0.4);
          background: rgba(13, 13, 12, 0.6);
          padding: 1.2rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .drag-drop-zone:hover, .drag-drop-zone.is-dragging {
          border-color: var(--accent-cyan);
          background: rgba(212, 175, 55, 0.08);
        }

        .file-hidden-input {
          display: none;
        }

        .drag-label-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow: hidden;
        }

        .preview-status {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .preview-sub {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        .drag-preview-img {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border: 1px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .optimizing-text {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .promotions-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .promo-cms-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .promo-cms-card.is-inactive { opacity: 0.5; }

        .promo-cms-img {
          width: 140px;
          height: 100px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .promo-cms-content {
          flex-grow: 1;
          min-width: 0;
          overflow: hidden;
        }

        .promo-cms-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .promo-cms-header h3 { font-size: 1.25rem; color: #FFF; }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-badge.active { background: rgba(39, 90, 56, 0.9); color: #FFF; }
        .status-badge.inactive { background: rgba(168, 35, 42, 0.9); color: #FFF; }

        .date-range-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          margin-top: 0.5rem;
        }

        .promo-cms-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-action-icon {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-action-icon:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); }
        .btn-action-icon.edit:hover { border-color: var(--accent-cyan); background: rgba(212, 175, 55, 0.2); }
        .btn-action-icon.delete:hover { border-color: var(--accent-red); color: var(--accent-red); }

        @media (max-width: 768px) {
          .header-action-btn { width: 100%; }
          .promo-cms-card { flex-direction: column; align-items: flex-start; }
          .promo-cms-img { width: 100%; height: 160px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})},og=()=>{const[e,t]=j.useState([]),[n,a]=j.useState(null),[i,s]=j.useState(!1),[o,l]=j.useState({id:"",title:"",subtitle:"",video:"",poster:"",active:!0});j.useEffect(()=>{t(go())},[]);const c=v=>{a(v.id),l({...v})},d=()=>{a(null),l({id:"",title:"",subtitle:"",video:"",poster:"",active:!0})},h=v=>{if(v.preventDefault(),!o.title||!o.video){alert("Por favor completa al menos el título y la URL del vídeo.");return}const k={...o,id:o.id||`slide_${Date.now()}`},z=Af(k);t([...z]),d()},f=v=>{const k=e.map(z=>z.id===v?{...z,active:!z.active}:z);ps(k),t(k)},p=v=>{if(confirm("¿Eliminar esta diapositiva del carrusel Hero?")){const k=e.filter(z=>z.id!==v);ps(k),t(k)}},y=async v=>{const k=v.target.files[0];if(k)try{s(!0);const z=await xo(k,1200,800,.8);l(g=>({...g,poster:z}))}catch(z){alert("Error optimizando la imagen de póster: "+z.message)}finally{s(!1)}};return r.jsxs("div",{className:"hero-slides-manager",children:[r.jsxs("div",{className:"cms-section-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Carrusel de Vídeo Principal (Hero Banner)"}),r.jsx("p",{children:"Gestiona los vídeos de fondo, títulos e imágenes de portada que se muestran en la cabecera."})]}),!n&&r.jsxs("button",{className:"btn btn-primary",onClick:()=>{a("new"),l({id:`slide_${Date.now()}`,title:"",subtitle:"",video:"",poster:"",active:!0})},children:[r.jsx(et,{size:16}),r.jsx("span",{children:"Añadir Diapositiva de Vídeo"})]})]}),n&&r.jsxs("form",{onSubmit:h,className:"cms-edit-card",children:[r.jsx("h3",{children:n==="new"?"Añadir Nueva Diapositiva":"Editar Diapositiva"}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Título del Indicador (ej. 01 Pintxos Gourmet):"}),r.jsx("input",{type:"text",value:o.title,onChange:v=>l({...o,title:v.target.value}),placeholder:"01 Pintxos Gourmet",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Subtítulo Corto:"}),r.jsx("input",{type:"text",value:o.subtitle,onChange:v=>l({...o,subtitle:v.target.value}),placeholder:"Elaboración y artesanía vasca"})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsx("label",{children:"URL del Vídeo (MP4 loop):"}),r.jsxs("div",{className:"input-with-icon",children:[r.jsx(su,{size:18}),r.jsx("input",{type:"url",value:o.video,onChange:v=>l({...o,video:v.target.value}),placeholder:"https://servidor.com/video.mp4",required:!0})]})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsx("label",{children:"Imagen de Portada (Poster / Fallback):"}),r.jsxs("div",{className:"image-upload-box",children:[o.poster&&r.jsx("img",{src:o.poster,alt:"Preview",className:"poster-preview"}),r.jsx("input",{type:"file",accept:"image/*",onChange:y,disabled:i}),i&&r.jsx("span",{children:"Optimizando póster..."})]})]}),r.jsx("div",{className:"form-group full-width checkbox-group",children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox",checked:o.active,onChange:v=>l({...o,active:v.target.checked})}),r.jsx("span",{children:"Diapositiva Activa en el Carrusel"})]})})]}),r.jsxs("div",{className:"form-actions",children:[r.jsxs("button",{type:"submit",className:"btn btn-primary",children:[r.jsx(Gn,{size:16}),r.jsx("span",{children:"Guardar Diapositiva"})]}),r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:d,children:"Cancelar"})]})]}),r.jsx("div",{className:"slides-grid",children:e.map(v=>r.jsxs("div",{className:`slide-cms-card ${v.active?"":"is-inactive"}`,children:[r.jsxs("div",{className:"slide-media-preview",children:[r.jsx("video",{src:v.video,poster:v.poster,muted:!0,loop:!0,playsInline:!0,className:"mini-video"}),r.jsxs("div",{className:"slide-status-badge",children:[v.active?r.jsx(ha,{size:14}):r.jsx(pa,{size:14}),r.jsx("span",{children:v.active?"Activo":"Oculto"})]})]}),r.jsxs("div",{className:"slide-card-body",children:[r.jsx("h4",{children:v.title}),r.jsx("p",{children:v.subtitle}),r.jsxs("div",{className:"slide-card-actions",children:[r.jsx("button",{className:"btn-icon",onClick:()=>c(v),title:"Editar",children:r.jsx(ff,{size:16})}),r.jsx("button",{className:"btn-icon",onClick:()=>f(v.id),title:"Visibilidad",children:v.active?r.jsx(pa,{size:16}):r.jsx(ha,{size:16})}),r.jsx("button",{className:"btn-icon danger",onClick:()=>p(v.id),title:"Eliminar",children:r.jsx(Da,{size:16})})]})]})]},v.id))}),r.jsx("style",{children:`
        .hero-slides-manager {
          padding: 1rem 0;
        }

        .cms-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .cms-edit-card {
          background: #181716;
          border: 1px solid rgba(229, 167, 27, 0.35);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .full-width {
          grid-column: span 2;
        }

        .input-with-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #0C0B0A;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.5rem 0.75rem;
          color: #FFF;
        }

        .input-with-icon input {
          background: none;
          border: none;
          color: #FFF;
          width: 100%;
          outline: none;
        }

        .poster-preview {
          height: 70px;
          width: 110px;
          object-fit: cover;
          margin-bottom: 0.5rem;
          display: block;
        }

        .slides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .slide-cms-card {
          background: #181716;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .slide-cms-card.is-inactive {
          opacity: 0.5;
        }

        .slide-media-preview {
          position: relative;
          height: 140px;
          background: #000;
        }

        .mini-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-status-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.75);
          color: #e5a71b;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .slide-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slide-card-body h4 {
          color: #FFF;
          font-size: 1rem;
        }

        .slide-card-body p {
          color: rgba(247, 245, 240, 0.7);
          font-size: 0.85rem;
        }

        .slide-card-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-icon {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #FFF;
          padding: 0.4rem;
          cursor: pointer;
        }

        .btn-icon:hover {
          background: #e5a71b;
          color: #000;
        }

        .btn-icon.danger:hover {
          background: #e74c3c;
          color: #FFF;
        }
      `})]})},lg=()=>{const{currentUser:e,users:t,createStaffAccount:n}=Ta(),[a,i]=j.useState(""),[s,o]=j.useState(""),[l,c]=j.useState(""),[d,h]=j.useState(null);if((e==null?void 0:e.role)!=="owner")return r.jsxs("div",{className:"glass-card access-denied",children:[r.jsx(bt,{size:48,className:"icon-alert"}),r.jsx("h3",{children:"Acceso Restringido"}),r.jsx("p",{children:"Solo el propietario principal (Owner) tiene permisos para administrar usuarios y crear cuentas de staff."})]});const f=p=>{p.preventDefault(),h(null);const y=n({name:a,email:s,password:l});y.success?(h({type:"success",text:`Cuenta de staff creada con éxito para ${s}`}),i(""),o(""),c("")):h({type:"error",text:y.error})};return r.jsxs("div",{className:"user-management-module",children:[r.jsx("div",{className:"module-header",children:r.jsxs("div",{children:[r.jsx("h2",{children:"Gestión de Usuarios y Roles (RBAC)"}),r.jsx("p",{children:"Crea cuentas de acceso para el personal (Staff) con permisos restringidos."})]})}),r.jsxs("div",{className:"user-management-grid",children:[r.jsxs("form",{onSubmit:f,className:"glass-card create-user-card",children:[r.jsxs("div",{className:"card-title-row",children:[r.jsx(Nf,{size:20,className:"icon-cyan"}),r.jsx("h3",{children:"Crear Nueva Cuenta de Staff"})]}),d&&r.jsxs("div",{className:`msg-banner ${d.type}`,children:[d.type==="success"&&r.jsx(co,{size:16}),r.jsx("span",{children:d.text})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{children:[r.jsx(fa,{size:16})," Nombre del Empleado *"]}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Marcos Pérez",value:a,onChange:p=>i(p.target.value)})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{children:[r.jsx(po,{size:16})," Correo Electrónico *"]}),r.jsx("input",{type:"email",required:!0,placeholder:"marcos@munchos.de",value:s,onChange:p=>o(p.target.value)})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{children:[r.jsx(Xd,{size:16})," Contraseña de Acceso *"]}),r.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:l,onChange:p=>c(p.target.value)})]}),r.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:r.jsx("span",{children:"Crear Cuenta Staff"})})]}),r.jsxs("div",{className:"glass-card users-list-card",children:[r.jsx("h3",{children:"Cuentas Registradas en la Plataforma"}),r.jsx("div",{className:"users-list",children:t.map((p,y)=>r.jsxs("div",{className:"user-item-card",children:[r.jsx("div",{className:"user-avatar",children:p.role==="owner"?r.jsx(bt,{size:20,className:"icon-cyan"}):r.jsx(fa,{size:20})}),r.jsxs("div",{className:"user-details",children:[r.jsx("h4",{children:p.name}),r.jsx("span",{className:"user-email",children:p.email})]}),r.jsx("span",{className:`role-badge role-${p.role}`,children:p.role==="owner"?"Owner / Propietario":"Staff / Personal"})]},y))})]})]}),r.jsx("style",{children:`
        .user-management-module {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .module-header {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 2rem;
        }

        .module-header h2 { font-size: 1.8rem; color: #FFF; }

        .user-management-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .create-user-card, .users-list-card {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .card-title-row h3 { font-size: 1.3rem; color: #FFF; }

        .msg-banner {
          padding: 0.8rem 1rem;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .msg-banner.success { background: rgba(39, 90, 56, 0.2); border: 1px solid #79D494; color: #79D494; }
        .msg-banner.error { background: rgba(168, 35, 42, 0.2); border: 1px solid var(--accent-red); color: var(--accent-red); }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .form-field input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .users-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .user-item-card {
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-avatar {
          width: 42px;
          height: 42px;
          background: rgba(247, 245, 240, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-details {
          flex-grow: 1;
        }

        .user-details h4 { font-size: 1rem; color: #FFF; margin-bottom: 0.1rem; }
        .user-email { font-size: 0.82rem; color: var(--text-dark-muted); }

        .role-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          text-transform: uppercase;
        }

        .role-owner { background: rgba(62, 193, 201, 0.2); color: var(--accent-cyan); border: 1px solid var(--accent-cyan); }
        .role-staff { background: rgba(247, 245, 240, 0.1); color: var(--text-dark-secondary); border: 1px solid rgba(247, 245, 240, 0.2); }

        .access-denied {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: 3rem 0;
        }

        .icon-alert { color: var(--accent-red); }
        .icon-cyan { color: var(--accent-cyan); }
        .w-full { width: 100%; }

        @media (max-width: 900px) {
          .user-management-grid { grid-template-columns: 1fr; }
        }
      `})]})},cg=({isOpen:e,onClose:t,prefilledDate:n,onSave:a})=>{const[i,s]=j.useState({date:n||"",clientName:"",clientEmail:"",clientPhone:"",guests:20,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",status:"confirmed",estimatedTotal:960,location:"",notes:""});if(j.useEffect(()=>{n&&s(l=>({...l,date:n}))},[n]),!e)return null;const o=l=>{l.preventDefault(),a({...i,source:"manual",createdAt:new Date().toISOString()}),t()};return r.jsxs("div",{className:"modal-overlay",onClick:t,children:[r.jsxs("div",{className:"modal-container",onClick:l=>l.stopPropagation(),children:[r.jsx("button",{className:"modal-close-btn",onClick:t,children:r.jsx(kt,{size:24})}),r.jsxs("h3",{className:"modal-title",children:[r.jsx("span",{className:"title-main-line",children:"Añadir Reserva Manual"}),r.jsx("span",{className:"title-sub-line",children:"(Teléfono / Email)"})]}),r.jsx("p",{className:"modal-subtitle",children:"Introduce los datos de la reserva aceptada directamente para actualizar el mapa de ocupación."}),r.jsxs("form",{onSubmit:o,className:"admin-form",children:[r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Fecha del Evento *"}),r.jsx("input",{type:"date",required:!0,value:i.date,onChange:l=>s({...i,date:l.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Número de Invitados *"}),r.jsx("input",{type:"number",min:"10",max:"100",required:!0,value:i.guests,onChange:l=>s({...i,guests:parseInt(l.target.value)})})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Nombre Completo del Cliente *"}),r.jsx("input",{type:"text",required:!0,placeholder:"Ej: Dr. Schmidt",value:i.clientName,onChange:l=>s({...i,clientName:l.target.value})})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Email *"}),r.jsx("input",{type:"email",required:!0,placeholder:"schmidt@example.de",value:i.clientEmail,onChange:l=>s({...i,clientEmail:l.target.value})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Teléfono *"}),r.jsx("input",{type:"tel",required:!0,placeholder:"+49 89 123456",value:i.clientPhone,onChange:l=>s({...i,clientPhone:l.target.value})})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Menú Principal"}),r.jsxs("select",{value:i.menuType,onChange:l=>{const c=l.target.value;s({...i,menuType:c,menuName:{"sushi-fusion":"Fusión Nikkei (Sushi + Pinchos)","de-tapas":"Experiencia Pinchos & Tapas","full-experience":"Experiencia Completa MUNCHOS"}[c]||c})},children:[r.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei (Sushi + Pinchos)"}),r.jsx("option",{value:"de-tapas",children:"Experiencia Pinchos & Tapas"}),r.jsx("option",{value:"full-experience",children:"Experiencia Completa MUNCHOS"})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Estado Inicial"}),r.jsxs("select",{value:i.status,onChange:l=>s({...i,status:l.target.value}),children:[r.jsx("option",{value:"confirmed",children:"Confirmada"}),r.jsx("option",{value:"pending",children:"Pendiente de pago"})]})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Precio Total Estimado (€)"}),r.jsx("input",{type:"number",value:i.estimatedTotal,onChange:l=>s({...i,estimatedTotal:parseFloat(l.target.value)})})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Zona / Ubicación en Múnich"}),r.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen",value:i.location,onChange:l=>s({...i,location:l.target.value})})]})]}),r.jsxs("div",{className:"form-field",children:[r.jsx("label",{children:"Notas Adicionales"}),r.jsx("textarea",{rows:"2",placeholder:"Detalles sobre vajilla, alergias, cocinero presencial...",value:i.notes,onChange:l=>s({...i,notes:l.target.value})})]}),r.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[r.jsx(et,{size:18}),r.jsx("span",{children:"Guardar Reserva Manual"})]})]})]}),r.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1005;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 2.5rem;
          width: 100%;
          max-width: 620px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        /* 2-LINE TITLE FORMATTING */
        .modal-title {
          display: flex;
          flex-direction: column;
          font-size: 1.7rem;
          color: #FFF;
          margin-bottom: 0.4rem;
          line-height: 1.25;
        }

        .title-main-line {
          font-family: var(--font-subtitles);
          font-weight: 700;
          color: #FFF;
        }

        .title-sub-line {
          font-family: var(--font-subtitles);
          font-size: 1.25rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .modal-subtitle { font-size: 0.9rem; color: var(--text-dark-secondary); margin-bottom: 1.5rem; }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .form-field input, .form-field select, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .w-full { width: 100%; }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
          .modal-container { padding: 1.5rem; }
          .modal-title { font-size: 1.4rem; }
          .title-sub-line { font-size: 1.05rem; }
        }
      `})]})},dg=({onNavigateToPublic:e})=>{const{currentUser:t,logout:n}=Ta(),[a,i]=j.useState("calendar"),[s,o]=j.useState(sr()),[l,c]=j.useState(uu()),[d,h]=j.useState(!1),[f,p]=j.useState(!1),[y,v]=j.useState(null),k=(b,N)=>{const S=Bf(b,N);o(S)},z=b=>{du(b),o(sr()),p(!1)},g=(b=null)=>{v(b),p(!0)},u=[{id:"calendar",label:"Calendario Mensual",icon:Ve},{id:"heatmap",label:"Mapa de Calor Anual",icon:Zd},{id:"reservations",label:"Lista de Reservas",icon:lf},{id:"analytics",label:"Analítica & Métricas",icon:Kd,ownerOnly:!0},{id:"products",label:"CMS Tienda Gourmet",icon:ir,ownerOnly:!0},{id:"promotions",label:"CMS Banners Promo",icon:ru,ownerOnly:!0},{id:"heroslides",label:"CMS Carrusel Hero",icon:su,ownerOnly:!0},{id:"users",label:"Gestión Usuarios",icon:fn,ownerOnly:!0}],m=u.find(b=>b.id===a)||u[0],x=m.icon;return r.jsxs("div",{className:"admin-shell",children:[r.jsxs("header",{className:"admin-topbar",children:[r.jsxs("div",{className:"topbar-row-main",children:[r.jsxs("div",{className:"topbar-left",children:[r.jsx("a",{href:"#",onClick:e,className:"admin-logo-link",title:"Volver a la Web Pública",children:r.jsx("img",{src:"/images/logo-definitive.png",alt:"MUNCHOS Admin",className:"admin-logo"})}),r.jsx("span",{className:"admin-badge-title",children:"PANEL CONTROL"})]}),r.jsxs("div",{className:"topbar-right",children:[r.jsxs("button",{className:"btn btn-secondary btn-sm nav-public-btn",onClick:e,children:[r.jsx(Qh,{size:16}),r.jsx("span",{children:"Ver Web Pública"})]}),r.jsxs("div",{className:"user-profile-tag",children:[(t==null?void 0:t.role)==="owner"?r.jsx(bt,{size:18,className:"icon-cyan"}):r.jsx(fa,{size:18}),r.jsx("span",{className:"user-name",children:t==null?void 0:t.name}),r.jsx("span",{className:`role-pill role-${t==null?void 0:t.role}`,children:(t==null?void 0:t.role)==="owner"?"Owner":"Staff"})]}),r.jsx("button",{className:"btn-logout",onClick:n,title:"Cerrar Sesión",children:r.jsx(cf,{size:18})})]})]}),r.jsxs("div",{className:"mobile-section-switcher",children:[r.jsxs("button",{className:"mobile-switcher-trigger",onClick:()=>h(!d),children:[r.jsxs("div",{className:"trigger-left",children:[r.jsx(x,{size:18,className:"icon-cyan"}),r.jsx("span",{className:"trigger-label",children:m.label})]}),r.jsx(Jh,{size:18,className:`chevron ${d?"open":""}`})]}),d&&r.jsx("div",{className:"mobile-dropdown-menu",children:u.map(b=>{if(b.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const N=b.icon,S=a===b.id;return r.jsxs("button",{className:`mobile-dropdown-item ${S?"selected":""}`,onClick:()=>{i(b.id),h(!1)},children:[r.jsxs("div",{className:"item-left",children:[r.jsx(N,{size:18}),r.jsx("span",{children:b.label})]}),S&&r.jsx(Gn,{size:16,className:"icon-cyan"})]},b.id)})})]})]}),r.jsxs("div",{className:"admin-body",children:[r.jsx("nav",{className:"admin-sidebar",children:u.map(b=>{if(b.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const N=b.icon;return r.jsxs("button",{className:`sidebar-link ${a===b.id?"active":""}`,onClick:()=>i(b.id),children:[r.jsx(N,{size:18}),r.jsx("span",{children:b.label})]},b.id)})}),r.jsxs("main",{className:"admin-content-area",children:[a==="calendar"&&r.jsx(tg,{reservations:s,capacitySettings:l,onUpdateStatus:k,onOpenAddModal:g}),a==="heatmap"&&r.jsx(ng,{reservations:s}),a==="reservations"&&r.jsx(rg,{reservations:s,onUpdateStatus:k,onOpenAddModal:g}),a==="analytics"&&(t==null?void 0:t.role)==="owner"&&r.jsx(ag,{reservations:s}),a==="products"&&(t==null?void 0:t.role)==="owner"&&r.jsx(ig,{}),a==="promotions"&&(t==null?void 0:t.role)==="owner"&&r.jsx(sg,{}),a==="heroslides"&&(t==null?void 0:t.role)==="owner"&&r.jsx(og,{}),a==="users"&&(t==null?void 0:t.role)==="owner"&&r.jsx(lg,{})]})]}),r.jsx(cg,{isOpen:f,onClose:()=>p(!1),prefilledDate:y,onSave:z}),r.jsx("style",{children:`
        .admin-shell {
          min-height: 100vh;
          background: var(--bg-dark);
          color: var(--text-dark-primary);
          display: flex;
          flex-direction: column;
        }

        .admin-topbar {
          background: var(--bg-surface-dark);
          border-bottom: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .topbar-row-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1.8rem;
          width: 100%;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .admin-logo-link {
          display: flex;
          align-items: center;
        }

        /* 30% LARGER LOGO IN ADMIN PANEL */
        .admin-logo {
          height: 68px; /* Increased +30% */
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(62, 193, 201, 0.4));
        }

        .admin-badge-title {
          font-family: var(--font-subtitles);
          font-size: 0.9rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
          border-left: 1px solid rgba(247, 245, 240, 0.15);
          padding-left: 0.8rem;
          white-space: nowrap;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-profile-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(62, 193, 201, 0.3);
          padding: 0.45rem 0.9rem;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .user-name { font-weight: 600; color: #FFF; }

        .role-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          text-transform: uppercase;
        }

        .role-pill.role-owner { background: rgba(62, 193, 201, 0.2); color: var(--accent-cyan); border: 1px solid var(--accent-cyan); }
        .role-pill.role-staff { background: rgba(247, 245, 240, 0.1); color: var(--text-dark-secondary); }

        .btn-logout {
          background: rgba(168, 35, 42, 0.2);
          border: 1px solid var(--accent-red);
          color: var(--accent-red);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .btn-logout:hover {
          background: var(--accent-red);
          color: #FFF;
        }

        /* ELEGANT CUSTOM DROPDOWN SWITCHER (MOBILE & TABLET) */
        .mobile-section-switcher {
          display: none;
          position: relative;
          background: rgba(13, 13, 12, 0.95);
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding: 0.6rem 1rem;
        }

        .mobile-switcher-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          color: #FFF;
          padding: 0.75rem 1rem;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .trigger-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chevron {
          transition: transform var(--transition-fast);
          color: var(--accent-cyan);
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .mobile-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          background: #161514;
          border: 1px solid var(--accent-cyan);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
          z-index: 200;
          display: flex;
          flex-direction: column;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.2rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .mobile-dropdown-item:last-child {
          border-bottom: none;
        }

        .mobile-dropdown-item:hover, .mobile-dropdown-item.selected {
          background: rgba(62, 193, 201, 0.12);
          color: #FFF;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .admin-body {
          display: flex;
          flex-grow: 1;
        }

        .admin-sidebar {
          width: 250px;
          background: var(--bg-surface-dark);
          border-right: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          padding: 0.85rem 1.2rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          white-space: nowrap !important;
        }

        .sidebar-link:hover {
          color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.08);
        }

        .sidebar-link.active {
          background: var(--accent-cyan);
          color: #0D0D0C;
          font-weight: 700;
        }

        .admin-content-area {
          flex-grow: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .admin-sidebar { display: none; }
          .mobile-section-switcher { display: block; }
          .admin-content-area { padding: 1.2rem; }
          .admin-badge-title { display: none; }
        }

        @media (max-width: 640px) {
          .topbar-row-main { padding: 0.6rem 0.8rem; }
          .user-name { display: none; }
          .nav-public-btn span { display: none; }
          .admin-logo { height: 56px; }
          .admin-content-area { padding: 0.75rem; }
        }
      `})]})},ug=()=>{const{login:e}=Ta(),[t,n]=j.useState(""),[a,i]=j.useState(""),[s,o]=j.useState(""),l=d=>{d.preventDefault(),o("");const h=e(t,a);h.success||o(h.error)},c=(d,h)=>{n(d),i(h);const f=e(d,h);f.success||o(f.error)};return r.jsxs("div",{className:"admin-login-screen",children:[r.jsxs("div",{className:"login-card",children:[r.jsxs("div",{className:"login-header",children:[r.jsx("img",{src:"/images/logo-definitive.png",alt:"MUNCHOS Admin",className:"login-logo"}),r.jsx("h2",{children:"Panel de Control MUNCHOS"}),r.jsx("p",{children:"Acceso restringido para propietarios y personal autorizado"})]}),s&&r.jsx("div",{className:"login-error-banner",children:s}),r.jsxs("form",{onSubmit:l,className:"login-form",children:[r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{children:[r.jsx(po,{size:16})," Correo Electrónico:"]}),r.jsx("input",{type:"email",required:!0,placeholder:"propietario@munchos.de",value:t,onChange:d=>n(d.target.value)})]}),r.jsxs("div",{className:"form-field",children:[r.jsxs("label",{children:[r.jsx(Xd,{size:16})," Contraseña:"]}),r.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:a,onChange:d=>i(d.target.value)})]}),r.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[r.jsx(Jd,{size:18}),r.jsx("span",{children:"Iniciar Sesión en el Panel"})]})]}),r.jsxs("div",{className:"demo-shortcuts",children:[r.jsx("span",{className:"demo-label",children:"Accesos Directos de Prueba (Demostración):"}),r.jsxs("div",{className:"demo-buttons",children:[r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("owner@munchos.de","owner"),children:[r.jsx(bt,{size:16,className:"icon-cyan"}),r.jsx("span",{children:"Acceso Owner (Propietario)"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("staff@munchos.de","staff"),children:[r.jsx(fa,{size:16}),r.jsx("span",{children:"Acceso Staff (Personal)"})]})]})]})]}),r.jsx("style",{children:`
        .admin-login-screen {
          min-height: 100vh;
          background: var(--bg-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .login-card {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 3rem;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          height: 70px;
          margin-bottom: 1rem;
        }

        .login-header h2 {
          font-size: 1.8rem;
          color: #FFF;
          margin-bottom: 0.4rem;
        }

        .login-header p {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
        }

        .login-error-banner {
          background: rgba(168, 35, 42, 0.2);
          border: 1px solid var(--accent-red);
          color: #FFF;
          padding: 0.8rem 1rem;
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-field input {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
        }

        .demo-shortcuts {
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .demo-label {
          font-size: 0.8rem;
          color: var(--text-dark-muted);
          text-align: center;
        }

        .demo-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .btn-sm {
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          width: 100%;
        }

        .icon-cyan { color: var(--accent-cyan); }
        .w-full { width: 100%; }
      `})]})};function mg(){const{currentUser:e}=Ta(),[t,n]=j.useState(window.location.hash==="#admin"?"admin":"public"),[a,i]=j.useState(!1),[s,o]=j.useState(!1),[l,c]=j.useState([]),[d,h]=j.useState(null);j.useEffect(()=>{const g=()=>{window.location.hash==="#admin"?n("admin"):n("public")};return window.addEventListener("hashchange",g),()=>window.removeEventListener("hashchange",g)},[]);const f=g=>{c(u=>u.find(x=>x.id===g.id)?u.map(x=>x.id===g.id?{...x,quantity:x.quantity+1}:x):[...u,{...g,quantity:1}]),o(!0)},p=(g,u)=>{u<=0?y(g):c(m=>m.map(x=>x.id===g?{...x,quantity:u}:x))},y=g=>{c(u=>u.filter(m=>m.id!==g))},v=(g=null)=>{g&&h(g),i(!0)},k=g=>{const u=document.getElementById("personalizacion");u?u.scrollIntoView({behavior:"smooth"}):v()},z=l.reduce((g,u)=>g+u.quantity,0);return t==="admin"?e?r.jsx(dg,{onNavigateToPublic:()=>{window.location.hash="",n("public")}}):r.jsx(ug,{}):r.jsxs("div",{className:"munitxos-app",children:[r.jsx(zf,{onOpenCart:()=>o(!0),cartCount:z,onOpenBooking:()=>v()}),r.jsx(Tf,{onOpenBooking:()=>v()}),r.jsx(Jf,{}),r.jsx(If,{}),r.jsx(Df,{onOpenBooking:()=>v()}),r.jsx(Lf,{onSelectMenuCategory:k}),r.jsx(Hf,{onSubmitBooking:g=>v(g)}),r.jsx(Uf,{}),r.jsx($f,{}),r.jsx(Wf,{}),r.jsx(qf,{onAddToCart:f,onOpenCart:()=>o(!0)}),r.jsx(Kf,{onOpenBooking:()=>v()}),r.jsx(Yf,{}),r.jsx(Qf,{onOpenBooking:()=>v()}),r.jsx(Zf,{isOpen:s,onClose:()=>o(!1),cartItems:l,onUpdateQuantity:p,onRemoveItem:y}),r.jsx(Xf,{isOpen:a,onClose:()=>i(!1),initialData:d}),r.jsx(eg,{})]})}function pg(){return r.jsx($h,{children:r.jsx(Uh,{children:r.jsx(mg,{})})})}hi.createRoot(document.getElementById("root")).render(r.jsx(Eu.StrictMode,{children:r.jsx(pg,{})}));
