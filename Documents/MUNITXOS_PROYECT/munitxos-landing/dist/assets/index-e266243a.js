(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wo={exports:{}},pa={},No={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),eu=Symbol.for("react.portal"),tu=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),iu=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.memo"),cu=Symbol.for("react.lazy"),cs=Symbol.iterator;function du(e){return e===null||typeof e!="object"?null:(e=cs&&e[cs]||e["@@iterator"],typeof e=="function"?e:null)}var So={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Co=Object.assign,zo={};function gn(e,t,n){this.props=e,this.context=t,this.refs=zo,this.updater=n||So}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Eo(){}Eo.prototype=gn.prototype;function sl(e,t,n){this.props=e,this.context=t,this.refs=zo,this.updater=n||So}var ol=sl.prototype=new Eo;ol.constructor=sl;Co(ol,gn.prototype);ol.isPureReactComponent=!0;var ds=Array.isArray,Po=Object.prototype.hasOwnProperty,cl={current:null},Mo={key:!0,ref:!0,__self:!0,__source:!0};function To(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Po.call(t,r)&&!Mo.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:lr,type:e,key:l,ref:s,props:i,_owner:cl.current}}function uu(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function mu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var us=/\/+/g;function Aa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mu(""+e.key):t.toString(36)}function Mr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case eu:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Aa(s,0):r,ds(i)?(n="",e!=null&&(n=e.replace(us,"$&/")+"/"),Mr(i,t,n,"",function(d){return d})):i!=null&&(dl(i)&&(i=uu(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(us,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ds(e))for(var o=0;o<e.length;o++){l=e[o];var c=r+Aa(l,o);s+=Mr(l,t,n,c,i)}else if(c=du(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=r+Aa(l,o++),s+=Mr(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pr(e,t,n){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function pu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Tr={transition:null},fu={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:cl};function Fo(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=gn;O.Fragment=tu;O.Profiler=ru;O.PureComponent=sl;O.StrictMode=nu;O.Suspense=su;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fu;O.act=Fo;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Co({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=cl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Po.call(t,c)&&!Mo.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:lr,type:e.type,key:i,ref:l,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:iu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:au,_context:e},e.Consumer=e};O.createElement=To;O.createFactory=function(e){var t=To.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:lu,render:e}};O.isValidElement=dl;O.lazy=function(e){return{$$typeof:cu,_payload:{_status:-1,_result:e},_init:pu}};O.memo=function(e,t){return{$$typeof:ou,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};O.unstable_act=Fo;O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.3.1";No.exports=O;var N=No.exports;const hu=Jd(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=N,vu=Symbol.for("react.element"),xu=Symbol.for("react.fragment"),yu=Object.prototype.hasOwnProperty,ju=gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ku={key:!0,ref:!0,__self:!0,__source:!0};function _o(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)yu.call(t,r)&&!ku.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vu,type:e,key:l,ref:s,props:i,_owner:ju.current}}pa.Fragment=xu;pa.jsx=_o;pa.jsxs=_o;wo.exports=pa;var a=wo.exports,ui={},Lo={exports:{}},Ne={},Oo={exports:{}},Ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var L=z.length;z.push(F);e:for(;0<L;){var Q=L-1>>>1,J=z[Q];if(0<i(J,F))z[Q]=F,z[L]=J,L=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],L=z.pop();if(L!==F){z[0]=L;e:for(var Q=0,J=z.length,ur=J>>>1;Q<ur;){var Nt=2*(Q+1)-1,Oa=z[Nt],St=Nt+1,mr=z[St];if(0>i(Oa,L))St<J&&0>i(mr,Oa)?(z[Q]=mr,z[St]=L,Q=St):(z[Q]=Oa,z[Nt]=L,Q=Nt);else if(St<J&&0>i(mr,L))z[Q]=mr,z[St]=L,Q=St;else break e}}return F}function i(z,F){var L=z.sortIndex-F.sortIndex;return L!==0?L:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],d=[],m=1,g=null,p=3,x=!1,j=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=z)r(d),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(d)}}function v(z){if(b=!1,h(z),!j)if(n(c)!==null)j=!0,_a(y);else{var F=n(d);F!==null&&La(v,F.startTime-z)}}function y(z,F){j=!1,b&&(b=!1,f(E),E=-1),x=!0;var L=p;try{for(h(F),g=n(c);g!==null&&(!(g.expirationTime>F)||z&&!ce());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,p=g.priorityLevel;var J=Q(g.expirationTime<=F);F=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(c)&&r(c),h(F)}else r(c);g=n(c)}if(g!==null)var ur=!0;else{var Nt=n(d);Nt!==null&&La(v,Nt.startTime-F),ur=!1}return ur}finally{g=null,p=L,x=!1}}var w=!1,S=null,E=-1,V=5,_=-1;function ce(){return!(e.unstable_now()-_<V)}function T(){if(S!==null){var z=e.unstable_now();_=z;var F=!0;try{F=S(!0,z)}finally{F?$():(w=!1,S=null)}}else w=!1}var $;if(typeof u=="function")$=function(){u(T)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Fa=wt.port2;wt.port1.onmessage=T,$=function(){Fa.postMessage(null)}}else $=function(){M(T,0)};function _a(z){S=z,w||(w=!0,$())}function La(z,F){E=M(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){j||x||(j=!0,_a(y))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var L=p;p=F;try{return z()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=p;p=z;try{return F()}finally{p=L}},e.unstable_scheduleCallback=function(z,F,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,z={id:m++,callback:F,priorityLevel:z,startTime:L,expirationTime:J,sortIndex:-1},L>Q?(z.sortIndex=L,t(d,z),n(c)===null&&z===n(d)&&(b?(f(E),E=-1):b=!0,La(v,L-Q))):(z.sortIndex=J,t(c,z),j||x||(j=!0,_a(y))),z},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(z){var F=p;return function(){var L=p;p=F;try{return z.apply(this,arguments)}finally{p=L}}}})(Ao);Oo.exports=Ao;var bu=Oo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=N,we=bu;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Io=new Set,Vn={};function Ut(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Io.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Nu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ms={},ps={};function Su(e){return mi.call(ps,e)?!0:mi.call(ms,e)?!1:Nu.test(e)?ps[e]=!0:(ms[e]=!0,!1)}function Cu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zu(e,t,n,r){if(t===null||typeof t>"u"||Cu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ul,ml);ae[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ul,ml);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ul,ml);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zu(t,n,i,r)&&(n=null),r||i===null?Su(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),pi=Symbol.for("react.profiler"),Do=Symbol.for("react.provider"),Ro=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),fi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Uo=Symbol.for("react.offscreen"),fs=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ia;function En(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var Da=!1;function Ra(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function Eu(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Ra(e.type,!1),e;case 11:return e=Ra(e.type.render,!1),e;case 1:return e=Ra(e.type,!0),e;default:return""}}function gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Bt:return"Portal";case pi:return"Profiler";case fl:return"StrictMode";case fi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ro:return(e.displayName||"Context")+".Consumer";case Do:return(e._context.displayName||"Context")+".Provider";case hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return t=e.displayName||null,t!==null?t:gi(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return gi(e(t))}catch{}}return null}function Pu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gi(t);case 8:return t===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mu(e){var t=Vo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Mu(e))}function $o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vi(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bo(e,t){t=t.checked,t!=null&&pl(e,"checked",t,!1)}function xi(e,t){Bo(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Pn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Ho(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Go=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tu=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Tu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function qo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fu=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,nn=null,rn=null;function ys(e){if(e=cr(e)){if(typeof Si!="function")throw Error(k(280));var t=e.stateNode;t&&(t=xa(t),Si(e.stateNode,e.type,t))}}function Yo(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Ko(){if(nn){var e=nn,t=rn;if(rn=nn=null,ys(e),t)for(e=0;e<t.length;e++)ys(t[e])}}function Zo(e,t){return e(t)}function Xo(){}var Ua=!1;function Jo(e,t,n){if(Ua)return e(t,n);Ua=!0;try{return Zo(e,t,n)}finally{Ua=!1,(nn!==null||rn!==null)&&(Xo(),Ko())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ci=!1;if(Ze)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Ci=!1}function _u(e,t,n,r,i,l,s,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _n=!1,Br=null,Hr=!1,zi=null,Lu={onError:function(e){_n=!0,Br=e}};function Ou(e,t,n,r,i,l,s,o,c){_n=!1,Br=null,_u.apply(Lu,arguments)}function Au(e,t,n,r,i,l,s,o,c){if(Ou.apply(this,arguments),_n){if(_n){var d=Br;_n=!1,Br=null}else throw Error(k(198));Hr||(Hr=!0,zi=d)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function js(e){if(Vt(e)!==e)throw Error(k(188))}function Iu(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return js(i),e;if(l===r)return js(i),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=l;break}if(o===r){s=!0,r=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=i;break}if(o===r){s=!0,r=l,n=i;break}o=o.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function tc(e){return e=Iu(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var rc=we.unstable_scheduleCallback,ks=we.unstable_cancelCallback,Du=we.unstable_shouldYield,Ru=we.unstable_requestPaint,Y=we.unstable_now,Uu=we.unstable_getCurrentPriorityLevel,xl=we.unstable_ImmediatePriority,ac=we.unstable_UserBlockingPriority,Wr=we.unstable_NormalPriority,Vu=we.unstable_LowPriority,ic=we.unstable_IdlePriority,fa=null,$e=null;function $u(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(fa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Wu,Bu=Math.log,Hu=Math.LN2;function Wu(e){return e>>>=0,e===0?32:31-(Bu(e)/Hu|0)|0}var vr=64,xr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=Mn(o):(l&=s,l!==0&&(r=Mn(l)))}else s=n&~i,s!==0?r=Mn(s):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),i=1<<n,r|=e[n],t&=~i;return r}function Gu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ae(l),o=1<<s,c=i[s];c===-1?(!(o&n)||o&r)&&(i[s]=Gu(o,t)):c<=t&&(e.expiredLanes|=o),l&=~o}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Qu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ae(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oc,jl,cc,dc,uc,Pi=!1,yr=[],ct=null,dt=null,ut=null,Hn=new Map,Wn=new Map,it=[],Yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bs(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function kn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ku(e,t,n,r,i){switch(t){case"focusin":return ct=kn(ct,e,t,n,r,i),!0;case"dragenter":return dt=kn(dt,e,t,n,r,i),!0;case"mouseover":return ut=kn(ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Hn.set(l,kn(Hn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Wn.set(l,kn(Wn.get(l)||null,e,t,n,r,i)),!0}return!1}function mc(e){var t=Et(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=ec(n),t!==null){e.blockedOn=t,uc(e.priority,function(){cc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=cr(n),t!==null&&jl(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){Fr(e)&&n.delete(t)}function Zu(){Pi=!1,ct!==null&&Fr(ct)&&(ct=null),dt!==null&&Fr(dt)&&(dt=null),ut!==null&&Fr(ut)&&(ut=null),Hn.forEach(ws),Wn.forEach(ws)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pi||(Pi=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Zu)))}function Gn(e){function t(i){return bn(i,e)}if(0<yr.length){bn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&bn(ct,e),dt!==null&&bn(dt,e),ut!==null&&bn(ut,e),Hn.forEach(t),Wn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)mc(n),n.blockedOn===null&&it.shift()}var an=tt.ReactCurrentBatchConfig,qr=!0;function Xu(e,t,n,r){var i=I,l=an.transition;an.transition=null;try{I=1,kl(e,t,n,r)}finally{I=i,an.transition=l}}function Ju(e,t,n,r){var i=I,l=an.transition;an.transition=null;try{I=4,kl(e,t,n,r)}finally{I=i,an.transition=l}}function kl(e,t,n,r){if(qr){var i=Mi(e,t,n,r);if(i===null)Za(e,t,r,Qr,n),bs(e,r);else if(Ku(i,e,t,n,r))r.stopPropagation();else if(bs(e,r),t&4&&-1<Yu.indexOf(e)){for(;i!==null;){var l=cr(i);if(l!==null&&oc(l),l=Mi(e,t,n,r),l===null&&Za(e,t,r,Qr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Za(e,t,r,null,n)}}var Qr=null;function Mi(e,t,n,r){if(Qr=null,e=vl(r),e=Et(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uu()){case xl:return 1;case ac:return 4;case Wr:case Vu:return 16;case ic:return 536870912;default:return 16}default:return 16}}var st=null,bl=null,_r=null;function fc(){if(_r)return _r;var e,t=bl,n=t.length,r,i="value"in st?st.value:st.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return _r=i.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function Ns(){return!1}function Se(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jr:Ns,this.isPropagationStopped=Ns,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Se(vn),or=G({},vn,{view:0,detail:0}),em=Se(or),$a,Ba,wn,ha=G({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?($a=e.screenX-wn.screenX,Ba=e.screenY-wn.screenY):Ba=$a=0,wn=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Ss=Se(ha),tm=G({},ha,{dataTransfer:0}),nm=Se(tm),rm=G({},or,{relatedTarget:0}),Ha=Se(rm),am=G({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),im=Se(am),lm=G({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Se(lm),om=G({},vn,{data:0}),Cs=Se(om),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=um[e])?!!t[e]:!1}function Nl(){return mm}var pm=G({},or,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fm=Se(pm),hm=G({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zs=Se(hm),gm=G({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),vm=Se(gm),xm=G({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Se(xm),jm=G({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),km=Se(jm),bm=[9,13,27,32],Sl=Ze&&"CompositionEvent"in window,Ln=null;Ze&&"documentMode"in document&&(Ln=document.documentMode);var wm=Ze&&"TextEvent"in window&&!Ln,hc=Ze&&(!Sl||Ln&&8<Ln&&11>=Ln),Es=String.fromCharCode(32),Ps=!1;function gc(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Nm(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(Ps=!0,Es);case"textInput":return e=t.data,e===Es&&Ps?null:e;default:return null}}function Sm(e,t){if(Wt)return e==="compositionend"||!Sl&&gc(e,t)?(e=fc(),_r=bl=st=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function xc(e,t,n,r){Yo(r),t=Yr(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,qn=null;function zm(e){Pc(e,0)}function ga(e){var t=Qt(e);if($o(t))return e}function Em(e,t){if(e==="change")return t}var yc=!1;if(Ze){var Wa;if(Ze){var Ga="oninput"in document;if(!Ga){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),Ga=typeof Ts.oninput=="function"}Wa=Ga}else Wa=!1;yc=Wa&&(!document.documentMode||9<document.documentMode)}function Fs(){On&&(On.detachEvent("onpropertychange",jc),qn=On=null)}function jc(e){if(e.propertyName==="value"&&ga(qn)){var t=[];xc(t,qn,e,vl(e)),Jo(zm,t)}}function Pm(e,t,n){e==="focusin"?(Fs(),On=t,qn=n,On.attachEvent("onpropertychange",jc)):e==="focusout"&&Fs()}function Mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(qn)}function Tm(e,t){if(e==="click")return ga(t)}function Fm(e,t){if(e==="input"||e==="change")return ga(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:_m;function Qn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mi.call(t,i)||!De(e[i],t[i]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=_s(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_s(n)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lm(e){var t=bc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kc(n.ownerDocument.documentElement,n)){if(r!==null&&Cl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ls(n,l);var s=Ls(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Om=Ze&&"documentMode"in document&&11>=document.documentMode,Gt=null,Ti=null,An=null,Fi=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fi||Gt==null||Gt!==$r(r)||(r=Gt,"selectionStart"in r&&Cl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Qn(An,r)||(An=r,r=Yr(Ti,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},qa={},wc={};Ze&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function va(e){if(qa[e])return qa[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return qa[e]=t[n];return e}var Nc=va("animationend"),Sc=va("animationiteration"),Cc=va("animationstart"),zc=va("transitionend"),Ec=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Ec.set(e,t),Ut(t,[e])}for(var Qa=0;Qa<As.length;Qa++){var Ya=As[Qa],Am=Ya.toLowerCase(),Im=Ya[0].toUpperCase()+Ya.slice(1);jt(Am,"on"+Im)}jt(Nc,"onAnimationEnd");jt(Sc,"onAnimationIteration");jt(Cc,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(zc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Au(r,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==l&&i.isPropagationStopped())break e;Is(i,o,d),l=c}else for(s=0;s<r.length;s++){if(o=r[s],c=o.instance,d=o.currentTarget,o=o.listener,c!==l&&i.isPropagationStopped())break e;Is(i,o,d),l=c}}}if(Hr)throw e=zi,Hr=!1,zi=null,e}function R(e,t){var n=t[Ii];n===void 0&&(n=t[Ii]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Ka(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[br]){e[br]=!0,Io.forEach(function(n){n!=="selectionchange"&&(Dm.has(n)||Ka(n,!1,e),Ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Ka("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(pc(t)){case 1:var i=Xu;break;case 4:i=Ju;break;default:i=kl}n=i.bind(null,t,n,e),i=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Za(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Et(o),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}o=o.parentNode}}r=r.return}Jo(function(){var d=l,m=vl(n),g=[];e:{var p=Ec.get(e);if(p!==void 0){var x=wl,j=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":x=fm;break;case"focusin":j="focus",x=Ha;break;case"focusout":j="blur",x=Ha;break;case"beforeblur":case"afterblur":x=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=vm;break;case Nc:case Sc:case Cc:x=im;break;case zc:x=ym;break;case"scroll":x=em;break;case"wheel":x=km;break;case"copy":case"cut":case"paste":x=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=zs}var b=(t&4)!==0,M=!b&&e==="scroll",f=b?p!==null?p+"Capture":null:p;b=[];for(var u=d,h;u!==null;){h=u;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,f!==null&&(v=Bn(u,f),v!=null&&b.push(Kn(u,v,h)))),M)break;u=u.return}0<b.length&&(p=new x(p,j,null,n,m),g.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==Ni&&(j=n.relatedTarget||n.fromElement)&&(Et(j)||j[Xe]))break e;if((x||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,x?(j=n.relatedTarget||n.toElement,x=d,j=j?Et(j):null,j!==null&&(M=Vt(j),j!==M||j.tag!==5&&j.tag!==6)&&(j=null)):(x=null,j=d),x!==j)){if(b=Ss,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=zs,v="onPointerLeave",f="onPointerEnter",u="pointer"),M=x==null?p:Qt(x),h=j==null?p:Qt(j),p=new b(v,u+"leave",x,n,m),p.target=M,p.relatedTarget=h,v=null,Et(m)===d&&(b=new b(f,u+"enter",j,n,m),b.target=h,b.relatedTarget=M,v=b),M=v,x&&j)t:{for(b=x,f=j,u=0,h=b;h;h=$t(h))u++;for(h=0,v=f;v;v=$t(v))h++;for(;0<u-h;)b=$t(b),u--;for(;0<h-u;)f=$t(f),h--;for(;u--;){if(b===f||f!==null&&b===f.alternate)break t;b=$t(b),f=$t(f)}b=null}else b=null;x!==null&&Ds(g,p,x,b,!1),j!==null&&M!==null&&Ds(g,M,j,b,!0)}}e:{if(p=d?Qt(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var y=Em;else if(Ms(p))if(yc)y=Fm;else{y=Mm;var w=Pm}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(y=Tm);if(y&&(y=y(e,d))){xc(g,y,n,m);break e}w&&w(e,p,d),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&yi(p,"number",p.value)}switch(w=d?Qt(d):window,e){case"focusin":(Ms(w)||w.contentEditable==="true")&&(Gt=w,Ti=d,An=null);break;case"focusout":An=Ti=Gt=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,Os(g,n,m);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Os(g,n,m)}var S;if(Sl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wt?gc(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(hc&&n.locale!=="ko"&&(Wt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wt&&(S=fc()):(st=m,bl="value"in st?st.value:st.textContent,Wt=!0)),w=Yr(d,E),0<w.length&&(E=new Cs(E,e,null,n,m),g.push({event:E,listeners:w}),S?E.data=S:(S=vc(n),S!==null&&(E.data=S)))),(S=wm?Nm(e,n):Sm(e,n))&&(d=Yr(d,"onBeforeInput"),0<d.length&&(m=new Cs("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=S))}Pc(g,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Bn(e,n),l!=null&&r.unshift(Kn(e,l,i)),l=Bn(e,t),l!=null&&r.push(Kn(e,l,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ds(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,i?(c=Bn(n,l),c!=null&&s.unshift(Kn(n,c,o))):i||(c=Bn(n,l),c!=null&&s.push(Kn(n,c,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Rm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Um,"")}function wr(e,t,n){if(t=Rs(t),Rs(e)!==t&&n)throw Error(k(425))}function Kr(){}var _i=null,Li=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,Vm=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(Bm)}:Ai;function Bm(e){setTimeout(function(){throw e})}function Xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+xn,Zn="__reactProps$"+xn,Xe="__reactContainer$"+xn,Ii="__reactEvents$"+xn,Hm="__reactListeners$"+xn,Wm="__reactHandles$"+xn;function Et(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[Ve])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Ve]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xa(e){return e[Zn]||null}var Di=[],Yt=-1;function kt(e){return{current:e}}function U(e){0>Yt||(e.current=Di[Yt],Di[Yt]=null,Yt--)}function D(e,t){Yt++,Di[Yt]=e.current,e.current=t}var xt={},oe=kt(xt),ve=kt(!1),_t=xt;function cn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Zr(){U(ve),U(oe)}function $s(e,t,n){if(oe.current!==xt)throw Error(k(168));D(oe,t),D(ve,n)}function Tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Pu(e)||"Unknown",i));return G({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,_t=oe.current,D(oe,e),D(ve,ve.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Tc(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(oe),D(oe,e)):U(ve),D(ve,n)}var qe=null,ya=!1,Ja=!1;function Fc(e){qe===null?qe=[e]:qe.push(e)}function Gm(e){ya=!0,Fc(e)}function bt(){if(!Ja&&qe!==null){Ja=!0;var e=0,t=I;try{var n=qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,ya=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),rc(xl,bt),i}finally{I=t,Ja=!1}}return null}var Kt=[],Zt=0,Jr=null,ea=0,Ce=[],ze=0,Lt=null,Qe=1,Ye="";function Ct(e,t){Kt[Zt++]=ea,Kt[Zt++]=Jr,Jr=e,ea=t}function _c(e,t,n){Ce[ze++]=Qe,Ce[ze++]=Ye,Ce[ze++]=Lt,Lt=e;var r=Qe;e=Ye;var i=32-Ae(r)-1;r&=~(1<<i),n+=1;var l=32-Ae(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Qe=1<<32-Ae(t)+i|n<<i|r,Ye=l+e}else Qe=1<<l|n<<i|r,Ye=e}function zl(e){e.return!==null&&(Ct(e,1),_c(e,1,0))}function El(e){for(;e===Jr;)Jr=Kt[--Zt],Kt[Zt]=null,ea=Kt[--Zt],Kt[Zt]=null;for(;e===Lt;)Lt=Ce[--ze],Ce[ze]=null,Ye=Ce[--ze],Ce[ze]=null,Qe=Ce[--ze],Ce[ze]=null}var be=null,ke=null,B=!1,Oe=null;function Lc(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ke=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ke=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ui(e){if(B){var t=ke;if(t){var n=t;if(!Hs(e,t)){if(Ri(e))throw Error(k(418));t=mt(n.nextSibling);var r=be;t&&Hs(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,B=!1,be=e)}}else{if(Ri(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,be=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Nr(e){if(e!==be)return!1;if(!B)return Ws(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=ke)){if(Ri(e))throw Oc(),Error(k(418));for(;t;)Lc(e,t),t=mt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=be?mt(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=ke;e;)e=mt(e.nextSibling)}function dn(){ke=be=null,B=!1}function Pl(e){Oe===null?Oe=[e]:Oe.push(e)}var qm=tt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Ac(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=gt(f,u),f.index=0,f.sibling=null,f}function l(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,h,v){return u===null||u.tag!==6?(u=li(h,f.mode,v),u.return=f,u):(u=i(u,h),u.return=f,u)}function c(f,u,h,v){var y=h.type;return y===Ht?m(f,u,h.props.children,v,h.key):u!==null&&(u.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===rt&&Gs(y)===u.type)?(v=i(u,h.props),v.ref=Nn(f,u,h),v.return=f,v):(v=Vr(h.type,h.key,h.props,null,f.mode,v),v.ref=Nn(f,u,h),v.return=f,v)}function d(f,u,h,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=si(h,f.mode,v),u.return=f,u):(u=i(u,h.children||[]),u.return=f,u)}function m(f,u,h,v,y){return u===null||u.tag!==7?(u=Ft(h,f.mode,v,y),u.return=f,u):(u=i(u,h),u.return=f,u)}function g(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=li(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fr:return h=Vr(u.type,u.key,u.props,null,f.mode,h),h.ref=Nn(f,null,u),h.return=f,h;case Bt:return u=si(u,f.mode,h),u.return=f,u;case rt:var v=u._init;return g(f,v(u._payload),h)}if(Pn(u)||yn(u))return u=Ft(u,f.mode,h,null),u.return=f,u;Sr(f,u)}return null}function p(f,u,h,v){var y=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return y!==null?null:o(f,u,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fr:return h.key===y?c(f,u,h,v):null;case Bt:return h.key===y?d(f,u,h,v):null;case rt:return y=h._init,p(f,u,y(h._payload),v)}if(Pn(h)||yn(h))return y!==null?null:m(f,u,h,v,null);Sr(f,h)}return null}function x(f,u,h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(h)||null,o(u,f,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fr:return f=f.get(v.key===null?h:v.key)||null,c(u,f,v,y);case Bt:return f=f.get(v.key===null?h:v.key)||null,d(u,f,v,y);case rt:var w=v._init;return x(f,u,h,w(v._payload),y)}if(Pn(v)||yn(v))return f=f.get(h)||null,m(u,f,v,y,null);Sr(u,v)}return null}function j(f,u,h,v){for(var y=null,w=null,S=u,E=u=0,V=null;S!==null&&E<h.length;E++){S.index>E?(V=S,S=null):V=S.sibling;var _=p(f,S,h[E],v);if(_===null){S===null&&(S=V);break}e&&S&&_.alternate===null&&t(f,S),u=l(_,u,E),w===null?y=_:w.sibling=_,w=_,S=V}if(E===h.length)return n(f,S),B&&Ct(f,E),y;if(S===null){for(;E<h.length;E++)S=g(f,h[E],v),S!==null&&(u=l(S,u,E),w===null?y=S:w.sibling=S,w=S);return B&&Ct(f,E),y}for(S=r(f,S);E<h.length;E++)V=x(S,f,E,h[E],v),V!==null&&(e&&V.alternate!==null&&S.delete(V.key===null?E:V.key),u=l(V,u,E),w===null?y=V:w.sibling=V,w=V);return e&&S.forEach(function(ce){return t(f,ce)}),B&&Ct(f,E),y}function b(f,u,h,v){var y=yn(h);if(typeof y!="function")throw Error(k(150));if(h=y.call(h),h==null)throw Error(k(151));for(var w=y=null,S=u,E=u=0,V=null,_=h.next();S!==null&&!_.done;E++,_=h.next()){S.index>E?(V=S,S=null):V=S.sibling;var ce=p(f,S,_.value,v);if(ce===null){S===null&&(S=V);break}e&&S&&ce.alternate===null&&t(f,S),u=l(ce,u,E),w===null?y=ce:w.sibling=ce,w=ce,S=V}if(_.done)return n(f,S),B&&Ct(f,E),y;if(S===null){for(;!_.done;E++,_=h.next())_=g(f,_.value,v),_!==null&&(u=l(_,u,E),w===null?y=_:w.sibling=_,w=_);return B&&Ct(f,E),y}for(S=r(f,S);!_.done;E++,_=h.next())_=x(S,f,E,_.value,v),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?E:_.key),u=l(_,u,E),w===null?y=_:w.sibling=_,w=_);return e&&S.forEach(function(T){return t(f,T)}),B&&Ct(f,E),y}function M(f,u,h,v){if(typeof h=="object"&&h!==null&&h.type===Ht&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fr:e:{for(var y=h.key,w=u;w!==null;){if(w.key===y){if(y=h.type,y===Ht){if(w.tag===7){n(f,w.sibling),u=i(w,h.props.children),u.return=f,f=u;break e}}else if(w.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===rt&&Gs(y)===w.type){n(f,w.sibling),u=i(w,h.props),u.ref=Nn(f,w,h),u.return=f,f=u;break e}n(f,w);break}else t(f,w);w=w.sibling}h.type===Ht?(u=Ft(h.props.children,f.mode,v,h.key),u.return=f,f=u):(v=Vr(h.type,h.key,h.props,null,f.mode,v),v.ref=Nn(f,u,h),v.return=f,f=v)}return s(f);case Bt:e:{for(w=h.key;u!==null;){if(u.key===w)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(f,u.sibling),u=i(u,h.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=si(h,f.mode,v),u.return=f,f=u}return s(f);case rt:return w=h._init,M(f,u,w(h._payload),v)}if(Pn(h))return j(f,u,h,v);if(yn(h))return b(f,u,h,v);Sr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,h),u.return=f,f=u):(n(f,u),u=li(h,f.mode,v),u.return=f,f=u),s(f)):n(f,u)}return M}var un=Ac(!0),Ic=Ac(!1),ta=kt(null),na=null,Xt=null,Ml=null;function Tl(){Ml=Xt=na=null}function Fl(e){var t=ta.current;U(ta),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){na=e,Ml=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(na===null)throw Error(k(308));Xt=e,na.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Pt=null;function _l(e){Pt===null?Pt=[e]:Pt.push(e)}function Dc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_l(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,_l(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}function qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;at=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,s===null?l=d:s.next=d,s=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==s&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(l!==null){var g=i.baseState;s=0,m=d=c=null,o=l;do{var p=o.lane,x=o.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=e,b=o;switch(p=t,x=n,b.tag){case 1:if(j=b.payload,typeof j=="function"){g=j.call(x,g,p);break e}g=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=b.payload,p=typeof j=="function"?j.call(x,g,p):j,p==null)break e;g=G({},g,p);break e;case 2:at=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else x={eventTime:x,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=x,c=g):m=m.next=x,s|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);At|=s,e.lanes=s,e.memoizedState=g}}function Qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var dr={},Be=kt(dr),Xn=kt(dr),Jn=kt(dr);function Mt(e){if(e===dr)throw Error(k(174));return e}function Ol(e,t){switch(D(Jn,t),D(Xn,e),D(Be,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}U(Be),D(Be,t)}function mn(){U(Be),U(Xn),U(Jn)}function Uc(e){Mt(Jn.current);var t=Mt(Be.current),n=ki(t,e.type);t!==n&&(D(Xn,e),D(Be,n))}function Al(e){Xn.current===e&&(U(Be),U(Xn))}var H=kt(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Il(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Ar=tt.ReactCurrentDispatcher,ti=tt.ReactCurrentBatchConfig,Ot=0,W=null,Z=null,ee=null,ia=!1,In=!1,er=0,Qm=0;function ie(){throw Error(k(321))}function Dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Rl(e,t,n,r,i,l){if(Ot=l,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?Xm:Jm,e=n(r,i),In){l=0;do{if(In=!1,er=0,25<=l)throw Error(k(301));l+=1,ee=Z=null,t.updateQueue=null,Ar.current=ep,e=n(r,i)}while(In)}if(Ar.current=la,t=Z!==null&&Z.next!==null,Ot=0,ee=Z=W=null,ia=!1,t)throw Error(k(300));return e}function Ul(){var e=er!==0;return er=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function tr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=s=null,c=null,d=l;do{var m=d.lane;if((Ot&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=g,s=r):c=c.next=g,W.lanes|=m,At|=m}d=d.next}while(d!==null&&d!==l);c===null?s=r:c.next=o,De(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,At|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);De(l,t.memoizedState)||(ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Vc(){}function $c(e,t){var n=W,r=Te(),i=t(),l=!De(r.memoizedState,i);if(l&&(r.memoizedState=i,ge=!0),r=r.queue,Vl(Wc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,nr(9,Hc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(k(349));Ot&30||Bc(n,t,i)}return i}function Bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,r){t.value=n,t.getSnapshot=r,Gc(t)&&qc(e)}function Wc(e,t,n){return n(function(){Gc(t)&&qc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function qc(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function Ys(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zm.bind(null,W,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qc(){return Te().memoizedState}function Ir(e,t,n,r){var i=Ue();W.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Dl(r,s.deps)){i.memoizedState=nr(t,n,l,r);return}}W.flags|=e,i.memoizedState=nr(1|t,n,l,r)}function Ks(e,t){return Ir(8390656,8,e,t)}function Vl(e,t){return ja(2048,8,e,t)}function Yc(e,t){return ja(4,2,e,t)}function Kc(e,t){return ja(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xc(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,Zc.bind(null,t,e),n)}function $l(){}function Jc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function td(e,t,n){return Ot&21?(De(n,t)||(n=lc(),W.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Ym(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{I=n,ti.transition=r}}function nd(){return Te().memoizedState}function Km(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rd(e))ad(t,n);else if(n=Dc(e,t,n,r),n!==null){var i=ue();Ie(n,e,r,i),id(n,t,r)}}function Zm(e,t,n){var r=ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rd(e))ad(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,De(o,s)){var c=t.interleaved;c===null?(i.next=i,_l(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Dc(e,t,i,r),n!==null&&(i=ue(),Ie(n,e,r,i),id(n,t,r))}}function rd(e){var t=e.alternate;return e===W||t!==null&&t===W}function ad(e,t){In=ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function id(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}var la={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Xm={readContext:Me,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Km.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Ys,useDebugValue:$l,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=Ym.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Ue();if(B){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),te===null)throw Error(k(349));Ot&30||Bc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ks(Wc.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Hc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=te.identifierPrefix;if(B){var n=Ye,r=Qe;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jm={readContext:Me,useCallback:Jc,useContext:Me,useEffect:Vl,useImperativeHandle:Xc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:ed,useReducer:ni,useRef:Qc,useState:function(){return ni(tr)},useDebugValue:$l,useDeferredValue:function(e){var t=Te();return td(t,Z.memoizedState,e)},useTransition:function(){var e=ni(tr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:$c,useId:nd,unstable_isNewReconciler:!1},ep={readContext:Me,useCallback:Jc,useContext:Me,useEffect:Vl,useImperativeHandle:Xc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:ed,useReducer:ri,useRef:Qc,useState:function(){return ri(tr)},useDebugValue:$l,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:td(t,Z.memoizedState,e)},useTransition:function(){var e=ri(tr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:$c,useId:nd,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ka={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ht(e),l=Ke(r,i);l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,i),t!==null&&(Ie(t,e,i,r),Or(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ht(e),l=Ke(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,i),t!==null&&(Ie(t,e,i,r),Or(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ht(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=pt(e,i,r),t!==null&&(Ie(t,e,r,n),Or(t,e,r))}};function Zs(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(i,l):!0}function ld(e,t,n){var r=!1,i=xt,l=t.contextType;return typeof l=="object"&&l!==null?l=Me(l):(i=xe(t)?_t:oe.current,r=t.contextTypes,l=(r=r!=null)?cn(e,i):xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ka.enqueueReplaceState(t,t.state,null)}function Bi(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ll(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Me(l):(l=xe(t)?_t:oe.current,i.context=cn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($i(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ka.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Eu(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ai(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tp=typeof WeakMap=="function"?WeakMap:Map;function sd(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,el=r),Hi(e,t)},n}function od(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hp.bind(null,e,t,n),t.then(e,e))}function eo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function to(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var np=tt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?Ic(t,null,n,r):un(t,e.child,n,r)}function no(e,t,n,r,i){n=n.render;var l=t.ref;return ln(t,i),r=Rl(e,t,n,r,l,i),n=Ul(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(B&&n&&zl(t),t.flags|=1,de(e,t,r,i),t.child)}function ro(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Kl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cd(e,t,l,r,i)):(e=Vr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(s,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Qn(l,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,et(e,t,i)}return Wi(e,t,n,r,i)}function dd(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(en,je),je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(en,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(en,je),je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(en,je),je|=r;return de(e,t,i,n),t.child}function ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,i){var l=xe(n)?_t:oe.current;return l=cn(t,l),ln(t,i),n=Rl(e,t,n,r,l,i),r=Ul(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(B&&r&&zl(t),t.flags|=1,de(e,t,n,i),t.child)}function ao(e,t,n,r,i){if(xe(n)){var l=!0;Xr(t)}else l=!1;if(ln(t,i),t.stateNode===null)Dr(e,t),ld(t,n,r),Bi(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=xe(n)?_t:oe.current,d=cn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||c!==d)&&Xs(t,s,r,d),at=!1;var p=t.memoizedState;s.state=p,ra(t,r,s,i),c=t.memoizedState,o!==r||p!==c||ve.current||at?(typeof m=="function"&&($i(t,n,m,r),c=t.memoizedState),(o=at||Zs(t,n,o,r,p,c,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Rc(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:_e(t.type,o),s.props=d,g=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Me(c):(c=xe(n)?_t:oe.current,c=cn(t,c));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==g||p!==c)&&Xs(t,s,r,c),at=!1,p=t.memoizedState,s.state=p,ra(t,r,s,i);var j=t.memoizedState;o!==g||p!==j||ve.current||at?(typeof x=="function"&&($i(t,n,x,r),j=t.memoizedState),(d=at||Zs(t,n,d,r,p,j,c)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,j,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,j,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),s.props=r,s.state=j,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Gi(e,t,n,r,l,i)}function Gi(e,t,n,r,i,l){ud(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Bs(t,n,!1),et(e,t,l);r=t.stateNode,np.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=un(t,e.child,null,l),t.child=un(t,null,o,l)):de(e,t,o,l),t.memoizedState=r.state,i&&Bs(t,n,!0),t.child}function md(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Ol(e,t.containerInfo)}function io(e,t,n,r,i){return dn(),Pl(i),t.flags|=256,de(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pd(e,t,n){var r=t.pendingProps,i=H.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(H,i&1),e===null)return Ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Na(s,r,0,null),e=Ft(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Qi(n),t.memoizedState=qi,e):Bl(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return rp(e,t,s,r,o,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=gt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=gt(o,l):(l=Ft(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Qi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return l=e.child,e=l.sibling,r=gt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bl(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&Pl(r),un(t,e.child,null,n),e=Bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rp(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ai(Error(k(422))),Cr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),l=Ft(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&un(t,e.child,null,s),t.child.memoizedState=Qi(s),t.memoizedState=qi,l);if(!(t.mode&1))return Cr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(k(419)),r=ai(l,r,void 0),Cr(e,t,s,r)}if(o=(s&e.childLanes)!==0,ge||o){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),Ie(r,e,i,-1))}return Yl(),r=ai(Error(k(421))),Cr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ke=mt(i.nextSibling),be=t,B=!0,Oe=null,e!==null&&(Ce[ze++]=Qe,Ce[ze++]=Ye,Ce[ze++]=Lt,Qe=e.id,Ye=e.overflow,Lt=t),t=Bl(t,r.children),t.flags|=4096,t)}function lo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function ii(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function fd(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lo(e,n,t);else if(e.tag===19)lo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ii(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ii(t,!0,n,null,l);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:md(t),dn();break;case 5:Uc(t);break;case 1:xe(t.type)&&Xr(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?pd(e,t,n):(D(H,H.current&1),e=et(e,t,n),e!==null?e.sibling:null);D(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,n)}return et(e,t,n)}var hd,Yi,gd,vd;hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yi=function(){};gd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mt(Be.current);var l=null;switch(n){case"input":i=vi(e,i),r=vi(e,r),l=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),l=[];break;case"textarea":i=ji(e,i),r=ji(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}bi(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(o=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&R("scroll",e),l||o===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ip(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return xe(t.type)&&Zr(),le(t),null;case 3:return r=t.stateNode,mn(),U(ve),U(oe),Il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(rl(Oe),Oe=null))),Yi(e,t),le(t),null;case 5:Al(t);var i=Mt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)gd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Mt(Be.current),Nr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[Zn]=l,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)R(Tn[i],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":hs(r,l),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},R("invalid",r);break;case"textarea":vs(r,l),R("invalid",r)}bi(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&wr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&wr(r.textContent,o,e),i=["children",""+o]):Vn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&R("scroll",r)}switch(n){case"input":hr(r),gs(r,l,!0);break;case"textarea":hr(r),xs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Kr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[Zn]=r,hd(e,t,!1,!1),t.stateNode=e;e:{switch(s=wi(n,r),n){case"dialog":R("cancel",e),R("close",e),i=r;break;case"iframe":case"object":case"embed":R("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)R(Tn[i],e);i=r;break;case"source":R("error",e),i=r;break;case"img":case"image":case"link":R("error",e),R("load",e),i=r;break;case"details":R("toggle",e),i=r;break;case"input":hs(e,r),i=vi(e,r),R("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),R("invalid",e);break;case"textarea":vs(e,r),i=ji(e,r),R("invalid",e);break;default:i=r}bi(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?Qo(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Go(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$n(e,c):typeof c=="number"&&$n(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vn.hasOwnProperty(l)?c!=null&&l==="onScroll"&&R("scroll",e):c!=null&&pl(e,l,c,s))}switch(n){case"input":hr(e),gs(e,r,!1);break;case"textarea":hr(e),xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?tn(e,!!r.multiple,l,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Mt(Jn.current),Mt(Be.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return le(t),null;case 13:if(U(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ke!==null&&t.mode&1&&!(t.flags&128))Oc(),dn(),t.flags|=98560,l=!1;else if(l=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ve]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Oe!==null&&(rl(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?X===0&&(X=3):Yl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return mn(),Yi(e,t),e===null&&Yn(t.stateNode.containerInfo),le(t),null;case 10:return Fl(t.type._context),le(t),null;case 17:return xe(t.type)&&Zr(),le(t),null;case 19:if(U(H),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Sn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=aa(e),s!==null){for(t.flags|=128,Sn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>fn&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304)}else{if(!r)if(e=aa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!B)return le(t),null}else 2*Y()-l.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=H.current,D(H,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function lp(e,t){switch(El(t),t.tag){case 1:return xe(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),U(ve),U(oe),Il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return mn(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var zr=!1,se=!1,sp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){q(e,t,r)}}var so=!1;function op(e,t){if(_i=qr,e=bc(),Cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,c=-1,d=0,m=0,g=e,p=null;t:for(;;){for(var x;g!==n||i!==0&&g.nodeType!==3||(o=s+i),g!==l||r!==0&&g.nodeType!==3||(c=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(x=g.firstChild)!==null;)p=g,g=x;for(;;){if(g===e)break t;if(p===n&&++d===i&&(o=s),p===l&&++m===r&&(c=s),(x=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var b=j.memoizedProps,M=j.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:_e(t.type,b),M);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return j=so,so=!1,j}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ki(t,n,l)}i=i.next}while(i!==r)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Zn],delete t[Ii],delete t[Hm],delete t[Wm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}var ne=null,Le=!1;function nt(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(fa,n)}catch{}switch(n.tag){case 5:se||Jt(n,t);case 6:var r=ne,i=Le;ne=null,nt(e,t,n),ne=r,Le=i,ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?Xa(e.parentNode,n):e.nodeType===1&&Xa(e,n),Gn(e)):Xa(ne,n.stateNode));break;case 4:r=ne,i=Le,ne=n.stateNode.containerInfo,Le=!0,nt(e,t,n),ne=r,Le=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ki(n,t,s),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!se&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){q(n,t,o)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,nt(e,t,n),se=r):nt(e,t,n);break;default:nt(e,t,n)}}function co(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var i=vp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Le=!1;break e;case 3:ne=o.stateNode.containerInfo,Le=!0;break e;case 4:ne=o.stateNode.containerInfo,Le=!0;break e}o=o.return}if(ne===null)throw Error(k(160));jd(l,s,i),ne=null,Le=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}function kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Re(e),r&4){try{Dn(3,e,e.return),ba(3,e)}catch(b){q(e,e.return,b)}try{Dn(5,e,e.return)}catch(b){q(e,e.return,b)}}break;case 1:Fe(t,e),Re(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Fe(t,e),Re(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(b){q(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Bo(i,l),wi(o,s);var d=wi(o,l);for(s=0;s<c.length;s+=2){var m=c[s],g=c[s+1];m==="style"?Qo(i,g):m==="dangerouslySetInnerHTML"?Go(i,g):m==="children"?$n(i,g):pl(i,m,g,d)}switch(o){case"input":xi(i,l);break;case"textarea":Ho(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?tn(i,!!l.multiple,x,!1):p!==!!l.multiple&&(l.defaultValue!=null?tn(i,!!l.multiple,l.defaultValue,!0):tn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Zn]=l}catch(b){q(e,e.return,b)}}break;case 6:if(Fe(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(b){q(e,e.return,b)}}break;case 3:if(Fe(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(b){q(e,e.return,b)}break;case 4:Fe(t,e),Re(e);break;case 13:Fe(t,e),Re(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Gl=Y())),r&4&&co(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||m,Fe(t,e),se=d):Fe(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(g=C=m;C!==null;){switch(p=C,x=p.child,p.tag){case 0:case 11:case 14:case 15:Dn(4,p,p.return);break;case 1:Jt(p,p.return);var j=p.stateNode;if(typeof j.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(b){q(r,n,b)}}break;case 5:Jt(p,p.return);break;case 22:if(p.memoizedState!==null){mo(g);continue}}x!==null?(x.return=p,C=x):mo(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=g.stateNode,c=g.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=qo("display",s))}catch(b){q(e,e.return,b)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){q(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Fe(t,e),Re(e),r&4&&co(e);break;case 21:break;default:Fe(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var l=oo(e);Ji(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=oo(e);Xi(e,o,s);break;default:throw Error(k(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e,t,n){C=e,bd(e)}function bd(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||zr;if(!s){var o=i.alternate,c=o!==null&&o.memoizedState!==null||se;o=zr;var d=se;if(zr=s,(se=c)&&!d)for(C=i;C!==null;)s=C,c=s.child,s.tag===22&&s.memoizedState!==null?po(i):c!==null?(c.return=s,C=c):po(i);for(;l!==null;)C=l,bd(l),l=l.sibling;C=i,zr=o,se=d}uo(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):uo(e)}}function uo(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Qs(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qs(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Gn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&Zi(t)}catch(p){q(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function mo(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function po(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ba(4,t)}catch(c){q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){q(t,i,c)}}var l=t.return;try{Zi(t)}catch(c){q(t,l,c)}break;case 5:var s=t.return;try{Zi(t)}catch(c){q(t,s,c)}}}catch(c){q(t,t.return,c)}if(t===e){C=null;break}var o=t.sibling;if(o!==null){o.return=t.return,C=o;break}C=t.return}}var dp=Math.ceil,sa=tt.ReactCurrentDispatcher,Hl=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,A=0,te=null,K=null,re=0,je=0,en=kt(0),X=0,rr=null,At=0,wa=0,Wl=0,Rn=null,he=null,Gl=0,fn=1/0,Ge=null,oa=!1,el=null,ft=null,Er=!1,ot=null,ca=0,Un=0,tl=null,Rr=-1,Ur=0;function ue(){return A&6?Y():Rr!==-1?Rr:Rr=Y()}function ht(e){return e.mode&1?A&2&&re!==0?re&-re:qm.transition!==null?(Ur===0&&(Ur=lc()),Ur):(e=I,e!==0||(e=window.event,e=e===void 0?16:pc(e.type)),e):1}function Ie(e,t,n,r){if(50<Un)throw Un=0,tl=null,Error(k(185));sr(e,n,r),(!(A&2)||e!==te)&&(e===te&&(!(A&2)&&(wa|=n),X===4&&lt(e,re)),ye(e,r),n===1&&A===0&&!(t.mode&1)&&(fn=Y()+500,ya&&bt()))}function ye(e,t){var n=e.callbackNode;qu(e,t);var r=Gr(e,e===te?re:0);if(r===0)n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ks(n),t===1)e.tag===0?Gm(fo.bind(null,e)):Fc(fo.bind(null,e)),$m(function(){!(A&6)&&bt()}),n=null;else{switch(sc(r)){case 1:n=xl;break;case 4:n=ac;break;case 16:n=Wr;break;case 536870912:n=ic;break;default:n=Wr}n=Md(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(Rr=-1,Ur=0,A&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Gr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var i=A;A|=2;var l=Sd();(te!==e||re!==t)&&(Ge=null,fn=Y()+500,Tt(e,t));do try{pp();break}catch(o){Nd(e,o)}while(1);Tl(),sa.current=l,A=i,K!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Ei(e),i!==0&&(r=i,t=nl(e,i))),t===1)throw n=rr,Tt(e,0),lt(e,r),ye(e,Y()),n;if(t===6)lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!up(i)&&(t=da(e,r),t===2&&(l=Ei(e),l!==0&&(r=l,t=nl(e,l))),t===1))throw n=rr,Tt(e,0),lt(e,r),ye(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:zt(e,he,Ge);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Gl+500-Y(),10<t)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ai(zt.bind(null,e,he,Ge),t);break}zt(e,he,Ge);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ae(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dp(r/1960))-r,10<r){e.timeoutHandle=Ai(zt.bind(null,e,he,Ge),r);break}zt(e,he,Ge);break;case 5:zt(e,he,Ge);break;default:throw Error(k(329))}}}return ye(e,Y()),e.callbackNode===n?wd.bind(null,e):null}function nl(e,t){var n=Rn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=da(e,t),e!==2&&(t=he,he=n,t!==null&&rl(t)),e}function rl(e){he===null?he=e:he.push.apply(he,e)}function up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Wl,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function fo(e){if(A&6)throw Error(k(327));sn();var t=Gr(e,0);if(!(t&1))return ye(e,Y()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=Ei(e);r!==0&&(t=r,n=nl(e,r))}if(n===1)throw n=rr,Tt(e,0),lt(e,t),ye(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,he,Ge),ye(e,Y()),null}function ql(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(fn=Y()+500,ya&&bt())}}function It(e){ot!==null&&ot.tag===0&&!(A&6)&&sn();var t=A;A|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,A=t,!(A&6)&&bt()}}function Ql(){je=en.current,U(en)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vm(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:mn(),U(ve),U(oe),Il();break;case 5:Al(r);break;case 4:mn();break;case 13:U(H);break;case 19:U(H);break;case 10:Fl(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(te=e,K=e=gt(e.current,null),re=je=t,X=0,rr=null,Wl=wa=At=0,he=Rn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}Pt=null}return e}function Nd(e,t){do{var n=K;try{if(Tl(),Ar.current=la,ia){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ia=!1}if(Ot=0,ee=Z=W=null,In=!1,er=0,Hl.current=null,n===null||n.return===null){X=1,rr=t,K=null;break}e:{var l=e,s=n.return,o=n,c=t;if(t=re,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=o,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=eo(s);if(x!==null){x.flags&=-257,to(x,s,o,l,t),x.mode&1&&Js(l,d,t),t=x,c=d;var j=t.updateQueue;if(j===null){var b=new Set;b.add(c),t.updateQueue=b}else j.add(c);break e}else{if(!(t&1)){Js(l,d,t),Yl();break e}c=Error(k(426))}}else if(B&&o.mode&1){var M=eo(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),to(M,s,o,l,t),Pl(pn(c,o));break e}}l=c=pn(c,o),X!==4&&(X=2),Rn===null?Rn=[l]:Rn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=sd(l,c,t);qs(l,f);break e;case 1:o=c;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ft===null||!ft.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=od(l,o,t);qs(l,v);break e}}l=l.return}while(l!==null)}zd(n)}catch(y){t=y,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function Sd(){var e=sa.current;return sa.current=la,e===null?la:e}function Yl(){(X===0||X===3||X===2)&&(X=4),te===null||!(At&268435455)&&!(wa&268435455)||lt(te,re)}function da(e,t){var n=A;A|=2;var r=Sd();(te!==e||re!==t)&&(Ge=null,Tt(e,t));do try{mp();break}catch(i){Nd(e,i)}while(1);if(Tl(),A=n,sa.current=r,K!==null)throw Error(k(261));return te=null,re=0,X}function mp(){for(;K!==null;)Cd(K)}function pp(){for(;K!==null&&!Du();)Cd(K)}function Cd(e){var t=Pd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?zd(e):K=t,Hl.current=null}function zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=ip(n,t,je),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function zt(e,t,n){var r=I,i=Pe.transition;try{Pe.transition=null,I=1,fp(e,t,n,r)}finally{Pe.transition=i,I=r}return null}function fp(e,t,n,r){do sn();while(ot!==null);if(A&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Qu(e,l),e===te&&(K=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,Md(Wr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var s=I;I=1;var o=A;A|=4,Hl.current=null,op(e,n),kd(n,e),Lm(Li),qr=!!_i,Li=_i=null,e.current=n,cp(n),Ru(),A=o,I=s,Pe.transition=l}else e.current=n;if(Er&&(Er=!1,ot=e,ca=i),l=e.pendingLanes,l===0&&(ft=null),$u(n.stateNode),ye(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oa)throw oa=!1,e=el,el=null,e;return ca&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===tl?Un++:(Un=0,tl=e):Un=0,bt(),null}function sn(){if(ot!==null){var e=sc(ca),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ca=0,A&6)throw Error(k(331));var i=A;for(A|=4,C=e.current;C!==null;){var l=C,s=l.child;if(C.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(C=d;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Dn(8,m,l)}var g=m.child;if(g!==null)g.return=m,C=g;else for(;C!==null;){m=C;var p=m.sibling,x=m.return;if(xd(m),m===d){C=null;break}if(p!==null){p.return=x,C=p;break}C=x}}}var j=l.alternate;if(j!==null){var b=j.child;if(b!==null){j.child=null;do{var M=b.sibling;b.sibling=null,b=M}while(b!==null)}}C=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,C=s;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Dn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){s=C;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,C=h;else e:for(s=u;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ba(9,o)}}catch(y){q(o,o.return,y)}if(o===s){C=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,C=v;break e}C=o.return}}if(A=i,bt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(fa,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function ho(e,t,n){t=pn(n,t),t=sd(e,t,1),e=pt(e,t,1),t=ue(),e!==null&&(sr(e,1,t),ye(e,t))}function q(e,t,n){if(e.tag===3)ho(e,e,n);else for(;t!==null;){if(t.tag===3){ho(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=pn(n,e),e=od(t,e,1),t=pt(t,e,1),e=ue(),t!==null&&(sr(t,1,e),ye(t,e));break}}t=t.return}}function hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Y()-Gl?Tt(e,0):Wl|=n),ye(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(sr(e,t,n),ye(e,n))}function gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ed(e,n)}function vp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ed(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,ap(e,t,n);ge=!!(e.flags&131072)}else ge=!1,B&&t.flags&1048576&&_c(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var i=cn(t,oe.current);ln(t,n),i=Rl(null,t,r,e,i,n);var l=Ul();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(l=!0,Xr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ll(t),i.updater=ka,t.stateNode=i,i._reactInternals=t,Bi(t,r,e,n),t=Gi(null,t,r,!0,l,n)):(t.tag=0,B&&l&&zl(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yp(r),e=_e(r,e),i){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=ao(null,t,r,e,n);break e;case 11:t=no(null,t,r,e,n);break e;case 14:t=ro(null,t,r,_e(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Wi(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),ao(e,t,r,i,n);case 3:e:{if(md(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Rc(e,t),ra(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=pn(Error(k(423)),t),t=io(e,t,r,n,i);break e}else if(r!==i){i=pn(Error(k(424)),t),t=io(e,t,r,n,i);break e}else for(ke=mt(t.stateNode.containerInfo.firstChild),be=t,B=!0,Oe=null,n=Ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=et(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Uc(t),e===null&&Ui(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Oi(r,i)?s=null:l!==null&&Oi(r,l)&&(t.flags|=32),ud(e,t),de(e,t,s,n),t.child;case 6:return e===null&&Ui(t),null;case 13:return pd(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),no(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,D(ta,r._currentValue),r._currentValue=s,l!==null)if(De(l.value,s)){if(l.children===i.children&&!ve.current){t=et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Ke(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Vi(l.return,n,t),o.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(k(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vi(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Me(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),ro(e,t,r,i,n);case 15:return cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Dr(e,t),t.tag=1,xe(r)?(e=!0,Xr(t)):e=!1,ln(t,n),ld(t,r,i),Bi(t,r,i,n),Gi(null,t,r,!0,e,n);case 19:return fd(e,t,n);case 22:return dd(e,t,n)}throw Error(k(156,t.tag))};function Md(e,t){return rc(e,t)}function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new xp(e,t,n,r)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yp(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===gl)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")Kl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ht:return Ft(n.children,i,l,t);case fl:s=8,i|=8;break;case pi:return e=Ee(12,n,t,i|2),e.elementType=pi,e.lanes=l,e;case fi:return e=Ee(13,n,t,i),e.elementType=fi,e.lanes=l,e;case hi:return e=Ee(19,n,t,i),e.elementType=hi,e.lanes=l,e;case Uo:return Na(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Do:s=10;break e;case Ro:s=9;break e;case hl:s=11;break e;case gl:s=14;break e;case rt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ft(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Uo,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,i,l,s,o,c){return e=new jp(e,t,n,o,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(l),e}function kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Td(e){if(!e)return xt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Tc(e,n,t)}return t}function Fd(e,t,n,r,i,l,s,o,c){return e=Zl(n,r,!0,e,i,l,s,o,c),e.context=Td(null),n=e.current,r=ue(),i=ht(n),l=Ke(r,i),l.callback=t??null,pt(n,l,i),e.current.lanes=i,sr(e,i,r),ye(e,r),e}function Sa(e,t,n,r){var i=t.current,l=ue(),s=ht(i);return n=Td(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(i,t,s),e!==null&&(Ie(e,i,s,l),Or(e,i,s)),s}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function go(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){go(e,t),(e=e.alternate)&&go(e,t)}function bp(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Ca.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Sa(e,t,null,null)};Ca.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Sa(null,e,null,null)}),t[Xe]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&mc(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vo(){}function wp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ua(s);l.call(d)}}var s=Fd(t,r,e,0,null,!1,!1,"",vo);return e._reactRootContainer=s,e[Xe]=s.current,Yn(e.nodeType===8?e.parentNode:e),It(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var d=ua(c);o.call(d)}}var c=Zl(e,0,!1,null,null,!1,!1,"",vo);return e._reactRootContainer=c,e[Xe]=c.current,Yn(e.nodeType===8?e.parentNode:e),It(function(){Sa(t,c,n,r)}),c}function Ea(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var c=ua(s);o.call(c)}}Sa(t,s,e,i)}else s=wp(n,t,e,i,r);return ua(s)}oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(yl(t,n|1),ye(t,Y()),!(A&6)&&(fn=Y()+500,bt()))}break;case 13:It(function(){var r=Je(e,1);if(r!==null){var i=ue();Ie(r,e,1,i)}}),Xl(e,1)}};jl=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();Ie(t,e,134217728,n)}Xl(e,134217728)}};cc=function(e){if(e.tag===13){var t=ht(e),n=Je(e,t);if(n!==null){var r=ue();Ie(n,e,t,r)}Xl(e,t)}};dc=function(){return I};uc=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Si=function(e,t,n){switch(t){case"input":if(xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xa(r);if(!i)throw Error(k(90));$o(r),xi(r,i)}}}break;case"textarea":Ho(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Zo=ql;Xo=It;var Np={usingClientEntryPoint:!1,Events:[cr,Qt,xa,Yo,Ko,ql]},Cn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{fa=Pr.inject(Sp),$e=Pr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(t))throw Error(k(200));return kp(e,t,null,n)};Ne.createRoot=function(e,t){if(!es(e))throw Error(k(299));var n=!1,r="",i=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zl(e,1,!1,null,null,n,!1,r,i),e[Xe]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Jl(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=tc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return It(e)};Ne.hydrate=function(e,t,n){if(!za(t))throw Error(k(200));return Ea(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!es(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=_d;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fd(t,null,e,1,n??null,i,!1,l,s),e[Xe]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ca(t)};Ne.render=function(e,t,n){if(!za(t))throw Error(k(200));return Ea(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!za(e))throw Error(k(40));return e._reactRootContainer?(It(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ne.unstable_batchedUpdates=ql;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!za(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ea(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)}catch(e){console.error(e)}}Ld(),Lo.exports=Ne;var Cp=Lo.exports,xo=Cp;ui.createRoot=xo.createRoot,ui.hydrateRoot=xo.hydrateRoot;const zp={name:"MUNCHOS",tagline:"Pinchos aus MUNCHEN",location:"Múnich, Alemania",subtagline:"Catering Boutique & Delicatessen Vasca"},Ep={beneficios:"Beneficios",comoFunciona:"Cómo Funciona",menus:"Menús",personalizacion:"Personalizar Evento",filosofia:"Come Sano",garantia:"Garantía",gourmet:"Tienda Gourmet",testimonios:"Opiniones",reservar:"Reservar Catering",cartBadge:"Carrito"},Pp={badge:"Catering Boutique en Múnich (10 - 50 invitados)",headline:`Pinchos aus MUNCHEN.
La fiesta vasca que Múnich no sabía que necesitaba.`,subheadline:`Catering boutique para celebraciones íntimas.
Sushi premium, pinchos vascos y sabor sin renuncias, directo a tu evento.`,ctaPrimary:"Reservar mi catering",ctaSecondary:"Ver menús y precios",stats:[{value:"100%",label:"Producto fresco artesanal"},{value:"10-50",label:"Invitados por experiencia"},{value:"4.9/5",label:"Valoración de clientes"}]},Mp={badge:"¿Por qué MUNCHOS?",title:"Alta gastronomía pensada para disfrutar sin complicaciones.",subtitle:`Combinamos la tradición del pincho vasco con la técnica del sushi de autor.
Un servicio integral llave en mano.`,items:[{icon:"UtensilsCrossed",title:"Producto de temporada",desc:"Ingredientes de origen certificado, seleccionados diariamente con estricto criterio delicatessen."},{icon:"Sparkles",title:"Servicio impecable",desc:"Cuidamos la puesta en escena y los detalles para que tú solo tengas que ejercer de anfitrión."},{icon:"Sliders",title:"Menús 100% personalizables",desc:"Adaptamos cada propuesta a las preferencias gastronómicas y requerimientos de tus invitados."},{icon:"HeartHandshake",title:"Equilibrio placer y bienestar",desc:"Técnicas de cocción ligeras y composiciones equilibradas que cuidan de la digestión y el sabor."}]},Tp={badge:"El Proceso MUNCHOS",title:"De la idea a tu mesa en 4 sencillos pasos.",subtitle:`Un flujo diseñado para garantizar máxima comodidad.
Cero estrés durante el día de tu celebración.`,steps:[{number:"01",title:"Elige tu fecha y concepto",desc:"Cuéntanos el motivo de tu evento, el número de comensales (10 a 50) y la fecha prevista en Múnich."},{number:"02",title:"Diseño del menú a medida",desc:"Selecciona la combinación perfecta entre sushi premium, pinchos vascos, plancha o cocina tradicional."},{number:"03",title:"Preparación y logística",desc:"Cocinamos en el día y transportamos todo en vehículos refrigerados con vajilla boutique."},{number:"04",title:"Servicio y disfrute total",desc:"Presentación impecable lista para servir o con chef presencial. Tú disfrutas, nosotros hacemos la magia."}]},Fp={badge:"Nuestra Propuesta Gastronómica",title:"Menús elaborados para sorprender los sentidos.",subtitle:`Explora nuestras 5 especialidades gastronómicas.
Diseñadas para eventos informales pero extremadamente elegantes.`,categories:[{id:"sushi",name:"Sushi Premium",tagline:"Fusión Nikkei-Vasca",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Nigiris atún rojo Balfegó, uramakis de salmón salvaje ahumado con toque de txakoli y sashimis corte maestro.",highlights:["Sin azúcares añadidos","Pescado salvaje sostenible","Salsas de soya artesanal"],items:["Nigiri de Atún Rojo con foie flameado y sal de Añana","Uramaki de Salmón y Aguacate con mahonesa de kimchi y sésamo negro","Tartar de Vieira con alga wakame y emulsión de cítricos"]},{id:"pintxos",name:"Pinchos Vascos",tagline:"Tradición de San Sebastián",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Canapés y pinchos elaborados sobre pan artesanal de masa madre con gildas de autor, piquillos rellenos y bacalao.",highlights:["Pan de masa madre 48h","Gildas Donostiarras premium","Aceite de oliva AOVE"],items:["La Gilda MUNCHOS: piparra de Ibarra, anchoa del Cantábrico y aceituna gordal","Solomillo ibérico sobre reducción de Pedro Ximénez y queso Idiazábal","Pimiento del Piquillo confitado relleno de marisco"]},{id:"plancha",name:"Plancha & Grill",tagline:"Al momento y con brasas",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Txuletitas de cordero, brochetas marinadas de langostino con alioli suave y verduras a la parrilla con chimichurri vasco.",highlights:["Carnes con maduración","Cocción baja en grasas","Verduras ecológicas de temporada"],items:["Brocheta de Langostino y Pulpo con salmuria de hierbas frescas","Tacos de Chuleton de Vaca Vieja con pimientos de Padrón","Parrillada de Verduras de Huerta con salsa Romesco de avellanas"]},{id:"tapas",name:"Tapas Elaboradas",tagline:"Bocados de alta cocina",image:"/images/IMG_0237.jpeg",description:"Creaciones vanguardistas para comer de pie: croquetas melosas de jamón ibérico, pulpo a la gallega templado y tartar de buey.",highlights:["Presentación gourmet","Raciones ideales para picoteo","Texturas crujientes y melosas"],items:["Croqueta cremosa de Jamón Ibérico de Bellota y bechamel fina","Pulpo asado sobre parmentier de patata trufada","Tartar de Buey Vascuence condimentado al momento sobre tuétano asado"]},{id:"tradicional",name:"Platos Tradicionales",tagline:"Cazuelitas vascas auténticas",image:"/images/IMG_0238.jpeg",description:"Bacalao al pil-pil cremoso, marmitako de bonito del Norte en cazuelita individual y carrilleras al vino de Rioja Alavesa.",highlights:["Cocción lenta artesanal","Recetas familiares transmitidas","Sabores profundos y reconfortantes"],items:["Bacalao confitado con emulsion suave de pil-pil de ajo suave","Marmitako de Bonito en cazuelita con pimiento choricero","Carrillera de Ternera estofada al vino tinto con cremoso de boniato"]}],cta:"Solicitar presupuesto personalizado"},_p={badge:"Calculadora & Presupuesto Directo",title:"Diseña la experiencia para tu evento.",subtitle:`Indica los detalles de tu reunión para calcular una estimación instantánea.
Recibirás una propuesta oficial en menos de 24h.`,labels:{guests:"Número de Invitados (10 a 50):",date:"Fecha del Evento:",menuType:"Tipo de Menú Principal:",extras:"Servicios Extra Opcionales:",estimatedTotal:"Estimación orientativa total:",perPerson:"por persona",submitBtn:"Solicitar Presupuesto Oficial sin Compromiso"},menuOptions:[{id:"de-tapas",name:"Experiencia Pinchos & Tapas",price:38},{id:"sushi-fusion",name:"Fusión Nikkei (Sushi + Pinchos)",price:46},{id:"full-experience",name:"Experiencia Completa MUNCHOS (Sushi + Plancha + Tradicional)",price:58}],extrasList:[{id:"chef",name:"Chef & Showcooking en vivo (+180€)",price:180},{id:"sommelier",name:"Maridaje Vinos Vascos & Txakoli (+12€ / inv)",pricePerGuest:12},{id:"desserts",name:"Mesa Dulce Vasca & Tarta de Queso La Viña (+7€ / inv)",pricePerGuest:7},{id:"tableware",name:"Alquiler de Vajilla & Cristalería Premium (+5€ / inv)",pricePerGuest:5}]},Lp={badge:"Filosofía 'Come Sano'",title:"El equilibrio entre el placer hedonista y el bienestar real.",text:"Comer bien no significa renunciar a nada. En MUNCHOS creemos que el placer y el equilibrio pueden convivir en el mismo plato — por eso seleccionamos producto de calidad, cuidamos las cocciones y pensamos cada menú también desde la nutrición, sin sacrificar ni un gramo de sabor.",points:[{title:"Sin aceites refinados",desc:"Utilizamos exclusivamente Aceite de Oliva Virgen Extra (AOVE) prensado en frío."},{title:"Bajo contenido en azúcares",desc:"Respetamos el dulzor natural de las verduras y frutas de temporada."},{title:"Proteína limpia y ligera",desc:"Pescados salvajes del Cantábrico y carnes magras preparadas a la temperatura justa."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Chef Fundador MUNCHOS Múnich"},Op={badge:"Compromiso MUNCHOS",title:"Garantía de Calidad y Puntualidad Absoluta.",subtitle:"Tu tranquilidad es el ingrediente principal de nuestro catering.",cards:[{title:"Puntualidad Garantizada",desc:"Llegamos con 45 minutos de antelación para el montaje. Si el pedido se retrasa más de 15 minutos sin causa mayor, abonamos un 20% del valor total."},{title:"Frescura e Higiene 100%",desc:"Mantenimiento estricto de la cadena de frío y transporte térmico certificado. Si cualquier plato no cumple con el estándar esperado, te lo reemplazamos inmediatamente."},{title:"Gestión de Reclamaciones en 24h",desc:"Canal directo con la dirección para cualquier eventualidad. Respuesta y solución económica o reposición antes de 24 horas laborables."}]},Ap={badge:"Experiencias Reales",title:"Lo que dicen los anfitriones en Múnich.",reviews:[{name:"Elena R.",event:"Cumpleaños 40º en Bogenhausen (25 personas)",comment:"MUNCHOS convirtió mi salón en una taberna donostiarra elegante. Los pinchos de bacalao y el nigiri de balfegó volaron en minutos. Mis invitados alemanes quedaron fascinados.",rating:5},{name:"Markus & Sofía",event:"Cena privada en Schwabing (15 personas)",comment:"Buscábamos un catering que no fuese pesado ni grasiento. El equilibrio de sus platos y la presentación impoluta nos conquistaron. Repetiremos sin duda.",rating:5},{name:"Carlos M.",event:"Celebración de empresa en Glockenbach (35 personas)",comment:"Puntualidad alemana con sabor vasco auténtico. El servicio de chef en vivo valió cada euro. La tarta de queso tipo La Viña es simplemente insuperable.",rating:5}]},Ip={badge:"Delicatessen en Casa",title:"Productos Gourmet MUNCHOS.",subtitle:"Lleva la despensa del Cantábrico y nuestros productos exclusivos directamente a tu hogar en Múnich.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi."},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional."},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra."},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca."}],addBtn:"Añadir a mi selección",interestBtn:"Ver mi lista de compras"},Dp={title:"¿Preparado para organizar una celebración inolvidable en Múnich?",subtitle:`Reserva tu fecha con antelación.
Atendemos un número limitado de eventos por semana para mantener nuestro compromiso de frescura y atención boutique.`,primaryBtn:"Solicitar fecha y presupuesto",secondaryBtn:"Contactar por WhatsApp"},Rp={text:"Catering Boutique Múnich (10-50 personas)",button:"Reservar mi Catering"},Up={title:"Solicitud de Reserva / Presupuesto",subtitle:"Completa tus datos y nos pondremos en contacto antes de 24 horas con una propuesta a medida.",name:"Tu nombre completo:",email:"Correo electrónico:",phone:"Teléfono de contacto (WhatsApp):",location:"Lugar del evento en Múnich / Alrededores:",notes:"Notas o alergias alimentarias de tus invitados:",submit:"Enviar Solicitud de Presupuesto",successTitle:"¡Solicitud Recibida!",successText:"Gracias por contactar con MUNCHOS. Te responderemos en breve con la propuesta detallada."},Vp={about:"MUNCHOS trae la autenticidad de la gastronomía vasca y la delicadeza del sushi de autor al corazón de Múnich, transformando pequeñas celebraciones en experiencias memorables.",quickLinks:"Enlaces Rápidos",legal:"Información Legal",privacy:"Política de Privacidad",terms:"Términos del Servicio",impressum:"Impressum (Legal Germany)",contact:"Contacto & Reservas",address:"Múnich, Baviera — Alemania",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. Todos los derechos reservados. Catering Boutique en Múnich."},$p={brand:zp,nav:Ep,hero:Pp,benefits:Mp,howItWorks:Tp,menus:Fp,bookingWidget:_p,philosophy:Lp,guarantee:Op,testimonials:Ap,gourmetShop:Ip,finalCta:Dp,stickyCta:Rp,modal:Up,footer:Vp},Bp={name:"Munitxos",tagline:"Pintxos aus München",location:"Munich, Germany"},Hp="English content stub for Phase 2 implementation",Wp={brand:Bp,note:Hp},Gp={name:"Munitxos",tagline:"Pintxos aus München",location:"München, Deutschland"},qp="Deutsches Content-Stub für Phase 3 Implementierung",Qp={brand:Gp,note:qp},zn={es:$p,en:Wp,de:Qp},Od=N.createContext(),Yp=({children:e})=>{const[t,n]=N.useState("es"),r=i=>{const l=i.split(".");let s=zn[t]||zn.es;for(const o of l)if(s[o]!==void 0)s=s[o];else{let c=zn.es;for(const d of l)if(c&&c[d]!==void 0)c=c[d];else return i;return c}return s};return a.jsx(Od.Provider,{value:{lang:t,setLang:n,t:r,content:zn[t]||zn.es},children:e})},fe=()=>{const e=N.useContext(Od);if(!e)throw new Error("useTranslation must be used within a LanguageProvider");return e},Ad=N.createContext(),yo="munchos_auth_users_v1",oi="munchos_auth_session_v1",Kp=[{email:"owner@munchos.de",password:"owner",name:"Oskar Marijuan (Owner)",role:"owner"},{email:"staff@munchos.de",password:"staff",name:"MUNCHOS Equipo Staff",role:"staff"}],Zp=({children:e})=>{const[t,n]=N.useState(()=>{try{const d=localStorage.getItem(yo);if(d)return JSON.parse(d)}catch{}return Kp}),[r,i]=N.useState(()=>{try{const d=localStorage.getItem(oi);if(d)return JSON.parse(d)}catch{}return null});N.useEffect(()=>{try{localStorage.setItem(yo,JSON.stringify(t))}catch{}},[t]),N.useEffect(()=>{try{r?localStorage.setItem(oi,JSON.stringify(r)):localStorage.removeItem(oi)}catch{}},[r]);const l=(d,m)=>{const g=t.find(p=>p.email.toLowerCase()===d.toLowerCase()&&p.password===m);if(g){const{password:p,...x}=g;return i(x),{success:!0,user:x}}return{success:!1,error:"Credenciales inválidas. Comprueba tu correo y contraseña."}},s=()=>{i(null)},o=d=>{if(!r||r.role!=="owner")return{success:!1,error:"Solo el propietario (Owner) puede crear cuentas de staff."};if(t.some(x=>x.email.toLowerCase()===d.email.toLowerCase()))return{success:!1,error:"Ya existe una cuenta con este correo electrónico."};const g={...d,role:"staff"},p=[...t,g];return n(p),{success:!0,user:g}},c=d=>r?r.role==="owner"?!0:["view_calendar","manage_reservations","add_reservation"].includes(d):!1;return a.jsx(Ad.Provider,{value:{currentUser:r,users:t,login:l,logout:s,createStaffAccount:o,hasPermission:c},children:e})},Pa=()=>{const e=N.useContext(Ad);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),P=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:o="",children:c,...d},m)=>N.createElement("svg",{ref:m,...Xp,width:i,height:i,stroke:r,strokeWidth:s?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Jp(e)}`,o].join(" "),...d},[...t.map(([g,p])=>N.createElement(g,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=P("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=P("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=P("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=P("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=P("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=P("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=P("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=P("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=P("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=P("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=P("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=P("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=P("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=P("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=P("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=P("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=P("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=P("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=P("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=P("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=P("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=P("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=P("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=P("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=P("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=P("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=P("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=P("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=P("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=P("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=P("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=P("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=P("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=P("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=P("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=P("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=P("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=P("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=P("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=P("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=P("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=P("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=P("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ff=({onOpenCart:e,cartCount:t,onOpenBooking:n})=>{const{t:r}=fe(),[i,l]=N.useState(!1),[s,o]=N.useState(!1);N.useEffect(()=>{const d=()=>{l(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const c=[{href:"#beneficios",label:r("nav.beneficios")},{href:"#como-funciona",label:r("nav.comoFunciona")},{href:"#menus",label:r("nav.menus")},{href:"#personalizacion",label:r("nav.personalizacion")},{href:"#filosofia",label:r("nav.filosofia")},{href:"#garantia",label:r("nav.garantia")},{href:"#gourmet",label:r("nav.gourmet")},{href:"#testimonios",label:r("nav.testimonios")}];return a.jsxs("header",{className:`navbar-header ${i?"is-scrolled":""}`,children:[a.jsxs("div",{className:"container nav-container",children:[a.jsxs("div",{className:"nav-top-row",children:[a.jsx("a",{href:"#",className:"brand-logo-link",children:a.jsx("img",{src:"/images/logo.svg",alt:"MUNCHOS",className:"logo-img-large"})}),a.jsxs("div",{className:"nav-actions",children:[a.jsxs("button",{className:"cart-btn",onClick:e,"aria-label":"Ver carrito gourmet",children:[a.jsx(ar,{size:20}),t>0&&a.jsx("span",{className:"cart-badge",children:t})]}),a.jsxs("button",{className:"btn btn-primary nav-cta",onClick:n,children:[a.jsx(He,{size:18}),a.jsx("span",{children:r("nav.reservar")})]}),a.jsx("button",{className:"mobile-toggle",onClick:()=>o(!s),"aria-label":"Toggle Navigation",children:s?a.jsx(Rt,{size:26}):a.jsx(xf,{size:26})})]})]}),a.jsx("nav",{className:"desktop-subnav",children:a.jsx("div",{className:"subnav-line",children:c.map((d,m)=>a.jsx("a",{href:d.href,className:"nav-item",children:d.label},m))})})]}),s&&a.jsx("div",{className:"mobile-menu-overlay",onClick:()=>o(!1),children:a.jsxs("div",{className:"mobile-menu-content",onClick:d=>d.stopPropagation(),children:[a.jsxs("div",{className:"mobile-menu-header",children:[a.jsx("img",{src:"/images/logo.svg",alt:"MUNCHOS",className:"logo-img-mobile"}),a.jsx("button",{className:"mobile-close-btn",onClick:()=>o(!1),children:a.jsx(Rt,{size:28})})]}),a.jsx("div",{className:"mobile-links",children:c.map((d,m)=>a.jsx("a",{href:d.href,onClick:()=>o(!1),children:d.label},m))}),a.jsx("div",{className:"mobile-actions",children:a.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{o(!1),n()},children:[a.jsx(He,{size:18}),a.jsx("span",{children:r("nav.reservar")})]})})]})}),a.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all var(--transition-smooth);
          background: #0D0D0C; /* Solid opaque background */
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding: 0.8rem 0 0.5rem 0;
        }

        .navbar-header.is-scrolled {
          background: #0D0D0C;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.8);
          border-bottom-color: var(--accent-cyan);
        }

        .nav-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* DOUBLE SIZE LOGO */
        .logo-img-large {
          height: 85px;
          width: auto;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
          transition: height var(--transition-fast);
        }

        .navbar-header.is-scrolled .logo-img-large {
          height: 70px;
        }

        /* Aligned Navigation Line Below Logo */
        .desktop-subnav {
          width: 100%;
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding-top: 0.5rem;
          margin-top: 0.25rem;
        }

        .subnav-line {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .nav-item {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: color var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--accent-cyan);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cart-btn {
          position: relative;
          background: rgba(247, 245, 240, 0.06);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          width: 44px;
          height: 44px;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cart-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--accent-cyan);
          color: #0D0D0C;
          font-size: 0.72rem;
          font-weight: 900;
          width: 20px;
          height: 20px;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-dark-primary);
          cursor: pointer;
        }

        .logo-img-mobile {
          height: 60px;
        }

        @media (max-width: 1024px) {
          .desktop-subnav { display: none; }
          .mobile-toggle { display: block; }
          .nav-cta { display: none; }
          .logo-img-large { height: 65px; }
        }

        /* SOLID OPAQUE MOBILE & TABLET DRAWER */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1001;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-menu-content {
          width: 100%;
          max-width: 420px;
          background: #0D0D0C !important; /* 100% Opaque Dark Background */
          opacity: 1 !important;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-left: 2px solid var(--accent-cyan);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.9);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding-bottom: 1rem;
        }

        .mobile-close-btn {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin: 2rem 0;
        }

        .mobile-links a {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          transition: color var(--transition-fast);
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(247, 245, 240, 0.05);
        }

        .mobile-links a:hover {
          color: var(--accent-cyan);
        }

        .mobile-actions {
          padding-top: 1rem;
          border-top: 1px solid rgba(247, 245, 240, 0.1);
        }

        .w-full { width: 100%; }
      `})]})},We=({color:e="#3EC1C9",width:t=160,height:n=36})=>a.jsx("div",{className:"horizontal-pintxo-wrapper",style:{display:"flex",justifyContent:"center",margin:"0 auto 1rem auto"},children:a.jsxs("svg",{width:t,height:n,viewBox:"0 0 200 44",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[a.jsx("line",{x1:"10",y1:"22",x2:"190",y2:"22",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),a.jsx("polygon",{points:"35,10 65,22 35,34",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),a.jsx("polygon",{points:"100,8 118,22 100,36 82,22",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),a.jsx("rect",{x:"140",y:"10",width:"16",height:"24",rx:"8",fill:"none",stroke:e,strokeWidth:"3.5"})]})}),_f=({onOpenBooking:e})=>{const{t}=fe();return a.jsxs("section",{className:"hero-section",children:[a.jsxs("div",{className:"hero-bg-container",children:[a.jsx("img",{src:"/images/person-slicing-sushi-roll-close-up.jpg",alt:"MUNCHOS Gourmet Sushi and Pinchos Catering Munich",className:"hero-bg-img"}),a.jsx("div",{className:"hero-gradient-overlay"})]}),a.jsx("div",{className:"container hero-container",children:a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"badge hero-badge",children:[a.jsx(Dt,{size:16}),a.jsx("span",{children:t("hero.badge")})]}),a.jsx("h1",{className:"hero-title",children:t("hero.headline")}),a.jsx(We,{color:"#3EC1C9",width:180,height:40}),a.jsx("p",{className:"hero-subtitle",children:t("hero.subheadline")}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("button",{className:"btn btn-primary hero-btn",onClick:e,children:[a.jsx("span",{children:t("hero.ctaPrimary")}),a.jsx(Ta,{size:18})]}),a.jsxs("a",{href:"#menus",className:"btn btn-secondary hero-btn",children:[a.jsx(Tf,{size:18}),a.jsx("span",{children:t("hero.ctaSecondary")})]})]}),a.jsx("div",{className:"hero-stats",children:t("hero.stats").map((n,r)=>a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-value",children:n.value}),a.jsx("span",{className:"stat-label",children:n.label})]},r))})]})}),a.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: clamp(150px, 22vh, 230px); /* Guaranteed clear spacing below fixed navbar */
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.6) saturate(1.15);
          transform: scale(1.03);
          transition: transform 10s ease;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(13, 13, 12, 0.88) 0%,
            rgba(13, 13, 12, 0.65) 40%,
            rgba(13, 13, 12, 0.95) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 860px;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .hero-title {
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          line-height: 1.2;
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          color: rgba(247, 245, 240, 0.9);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 760px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .hero-btn {
          font-size: 1.05rem;
          padding: 1.1rem 2.2rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          background: rgba(30, 29, 27, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(62, 193, 201, 0.2);
          padding: 1.5rem 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-value {
          font-family: var(--font-subtitles);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 140px; /* Precise top padding on mobile screens */
          }
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1.25rem;
          }
          .hero-actions {
            flex-direction: column;
          }
          .hero-btn {
            width: 100%;
          }
        }
      `})]})},Lf={UtensilsCrossed:Mf,Sparkles:is,Sliders:Cf,HeartHandshake:df},Of=()=>{const{t:e}=fe();return a.jsxs("section",{id:"beneficios",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("benefits.badge")}),a.jsx("h2",{children:e("benefits.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:e("benefits.subtitle")})]}),a.jsx("div",{className:"benefits-grid",children:e("benefits.items").map((t,n)=>{const r=Lf[t.icon]||is;return a.jsxs("div",{className:"glass-card benefit-card",children:[a.jsx("div",{className:"icon-wrapper",children:a.jsx(r,{size:28})}),a.jsx("h3",{children:t.title}),a.jsx("p",{children:t.desc})]},n)})})]}),a.jsx("style",{children:`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-cyan);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(62, 193, 201, 0.12);
          border: 1px solid rgba(62, 193, 201, 0.4);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all var(--transition-fast);
        }

        .benefit-card:hover .icon-wrapper {
          background: var(--accent-cyan);
          color: #0D0D0C;
        }

        .benefit-card h3 {
          margin-bottom: 0.75rem;
          color: var(--text-dark-primary);
        }

        .benefit-card p {
          font-size: 0.98rem;
          line-height: 1.6;
        }
      `})]})},Af=({onOpenBooking:e})=>{const{t}=fe();return a.jsxs("section",{id:"como-funciona",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("howItWorks.badge")}),a.jsx("h2",{children:t("howItWorks.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:t("howItWorks.subtitle")})]}),a.jsx("div",{className:"steps-container",children:t("howItWorks.steps").map((n,r)=>a.jsxs("div",{className:"step-card",children:[a.jsx("div",{className:"step-number",children:n.number}),a.jsxs("div",{className:"step-content",children:[a.jsx("h3",{children:n.title}),a.jsx("p",{children:n.desc})]}),r<3&&a.jsx("div",{className:"step-connector",children:a.jsx(Ma,{size:20})})]},r))}),a.jsx("div",{className:"how-it-works-cta",children:a.jsx("button",{className:"btn btn-outline-gold",onClick:e,children:a.jsx("span",{children:"Diseña tu evento en 2 minutos"})})})]}),a.jsx("style",{children:`
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 2rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color var(--transition-fast);
        }

        .step-card:hover {
          border-color: var(--accent-cyan);
        }

        .step-number {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark-primary);
        }

        .step-content p {
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .step-connector {
          position: absolute;
          right: -1.2rem;
          top: 3.5rem;
          z-index: 2;
          color: var(--accent-cyan);
          background: var(--bg-dark);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(62, 193, 201, 0.4);
        }

        .how-it-works-cta {
          text-align: center;
          margin-top: 3.5rem;
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
      `})]})},If=({onSelectMenuCategory:e})=>{const{t}=fe(),n=t("menus.categories"),[r,i]=N.useState(n[0].id),l=n.find(s=>s.id===r)||n[0];return a.jsxs("section",{id:"menus",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("menus.badge")}),a.jsx("h2",{children:t("menus.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:t("menus.subtitle")})]}),a.jsx("div",{className:"menu-tabs",children:n.map(s=>a.jsx("button",{className:`menu-tab-btn ${r===s.id?"active":""}`,onClick:()=>i(s.id),children:a.jsx("span",{children:s.name})},s.id))}),a.jsxs("div",{className:"menu-card-display",children:[a.jsxs("div",{className:"menu-image-column",children:[a.jsx("img",{src:l.image,alt:l.name,className:"menu-featured-img"}),a.jsx("div",{className:"menu-img-badge",children:l.tagline})]}),a.jsxs("div",{className:"menu-info-column",children:[a.jsx("h3",{className:"menu-cat-title",children:l.name}),a.jsx("p",{className:"menu-cat-desc",children:l.description}),a.jsx("div",{className:"menu-highlights",children:l.highlights.map((s,o)=>a.jsxs("span",{className:"highlight-tag",children:[a.jsx(ts,{size:15}),a.jsx("span",{children:s})]},o))}),a.jsxs("div",{className:"dishes-list",children:[a.jsx("h4",{children:"Selección representativa de platos:"}),a.jsx("ul",{children:l.items.map((s,o)=>a.jsxs("li",{children:[a.jsx("span",{className:"bullet",children:"•"}),a.jsx("span",{children:s})]},o))})]}),a.jsxs("button",{className:"btn btn-primary menu-cta-btn",onClick:()=>e(l.id),children:[a.jsxs("span",{children:[t("menus.cta")," — ",l.name]}),a.jsx(Ta,{size:18})]})]})]})]}),a.jsx("style",{children:`
        .menu-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
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
        }

        .menu-tab-btn:hover {
          color: var(--text-dark-primary);
          border-color: var(--accent-cyan);
        }

        .menu-tab-btn.active {
          background: var(--accent-cyan);
          color: #0D0D0C;
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 15px rgba(62, 193, 201, 0.4);
        }

        .menu-card-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(62, 193, 201, 0.2);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .menu-image-column {
          position: relative;
          min-height: 420px;
        }

        .menu-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .menu-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(13, 13, 12, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .menu-info-column {
          padding: 3rem 3rem 3rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .menu-cat-title {
          font-size: 2.2rem;
          color: var(--text-dark-primary);
          margin-bottom: 0.75rem;
        }

        .menu-cat-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .menu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .highlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(62, 193, 201, 0.12);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          text-transform: uppercase;
        }

        .dishes-list {
          margin-bottom: 2.5rem;
        }

        .dishes-list h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .dishes-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .dishes-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
        }

        .bullet {
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .menu-cta-btn {
          align-self: flex-start;
        }

        @media (max-width: 900px) {
          .menu-card-display {
            grid-template-columns: 1fr;
          }
          .menu-info-column {
            padding: 2rem;
          }
          .menu-image-column {
            min-height: 280px;
          }
        }
      `})]})},ss={maxEventsPerDay:2,maxGuestsPerDay:60},os=(e,t=20,n=[],r=ss)=>{if(!e)return{isAvailable:!1,reason:"No date provided"};const{maxEventsPerDay:i=2,maxGuestsPerDay:l=60}=r,s=n.filter(d=>d.date===e&&d.status!=="cancelled"),o=s.length,c=s.reduce((d,m)=>d+(parseInt(m.guests)||0),0);return o>=i?{isAvailable:!1,existingEvents:o,currentTotalGuests:c,reason:`Capacidad máxima de eventos alcanzada (${o}/${i})`}:c+t>l?{isAvailable:!1,existingEvents:o,currentTotalGuests:c,reason:`Límite de comensales superado para el día (${c+t}/${l})`}:{isAvailable:!0,existingEvents:o,currentTotalGuests:c,reason:"Fecha disponible"}},Df=(e,t=20,n=[],r=ss,i=4)=>{if(!e)return[];const l=new Date(e),s=new Date;s.setHours(0,0,0,0);const o=[],c=14;for(let d=-c;d<=c;d++){if(d===0)continue;const m=new Date(l);if(m.setDate(m.getDate()+d),m<s)continue;const g=m.toISOString().split("T")[0];os(g,t,n,r).isAvailable&&o.push({dateStr:g,distance:Math.abs(d),offsetDays:d,formattedLabel:m.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"})})}return o.sort((d,m)=>d.distance-m.distance),o.slice(0,i)},al="munchos_reservations_v1",Rf="munchos_settings_v1",jo=[{id:"res_001",date:"2026-08-15",guests:25,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos"],status:"confirmed",source:"public",clientName:"Elena R.",clientEmail:"elena.r@example.de",clientPhone:"+49 176 9876543",location:"Bogenhausen, Múnich",notes:"Cumpleaños 40º. 2 comensales celíacos.",estimatedTotal:1480,pricePerPerson:59,createdAt:"2026-08-01T10:00:00Z"},{id:"res_002",date:"2026-08-15",guests:35,menuType:"full-experience",menuName:"Experiencia Completa MUNCHOS",extras:["Mesa Dulce Vasca"],status:"confirmed",source:"manual",clientName:"Carlos M.",clientEmail:"carlos.firm@munich-law.de",clientPhone:"+49 89 5544332",location:"Glockenbachviertel, Múnich",notes:"Evento de empresa.",estimatedTotal:2275,pricePerPerson:65,createdAt:"2026-08-02T14:30:00Z"},{id:"res_003",date:"2026-08-22",guests:18,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:["Vajilla & Cristalería Premium"],status:"pending",source:"public",clientName:"Markus & Sofía",clientEmail:"sofia.m@web.de",clientPhone:"+49 171 2233445",location:"Schwabing, Múnich",notes:"Cena íntima de aniversario.",estimatedTotal:774,pricePerPerson:43,createdAt:"2026-08-04T16:15:00Z"},{id:"res_004",date:"2026-08-28",guests:40,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos","Mesa Dulce Vasca"],status:"confirmed",source:"public",clientName:"Thomas B.",clientEmail:"thomas.b@techmunich.io",clientPhone:"+49 152 8877665",location:"Lehel, Múnich",notes:"Celebración de proyecto.",estimatedTotal:2840,pricePerPerson:71,createdAt:"2026-08-05T09:20:00Z"},{id:"res_005",date:"2026-09-05",guests:15,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:[],status:"pending",source:"manual",clientName:"Laura H.",clientEmail:"laura.h@gmail.com",clientPhone:"+49 179 4455667",location:"Haidhausen, Múnich",notes:"Reserva telefónica pendiente de confirmación de menú.",estimatedTotal:570,pricePerPerson:38,createdAt:"2026-08-06T11:00:00Z"}],ir=()=>{try{const e=localStorage.getItem(al);if(e)return JSON.parse(e)}catch(e){console.error("Error reading reservations from storage",e)}return localStorage.setItem(al,JSON.stringify(jo)),jo},Yd=e=>{try{localStorage.setItem(al,JSON.stringify(e))}catch(t){console.error("Error saving reservations",t)}},Kd=e=>{const t=ir(),n={id:`res_${Date.now()}`,status:e.status||"pending",source:e.source||"public",createdAt:new Date().toISOString(),...e},r=[n,...t];return Yd(r),n},Uf=(e,t)=>{const r=ir().map(i=>i.id===e?{...i,status:t}:i);return Yd(r),r},Zd=()=>{try{const e=localStorage.getItem(Rf);if(e)return JSON.parse(e)}catch{}return ss},Vf=({requestedDateStr:e,reason:t,alternativeDates:n,onSelectAlternative:r})=>!n||n.length===0?null:a.jsxs("div",{className:"alternative-dates-box",children:[a.jsxs("div",{className:"alt-header",children:[a.jsx(ef,{size:24,className:"icon-alert"}),a.jsxs("div",{children:[a.jsxs("h4",{children:["Fecha no disponible (",e,")"]}),a.jsx("p",{children:t||"Hemos alcanzado la capacidad máxima de reservas para este día."})]})]}),a.jsxs("div",{className:"alt-body",children:[a.jsx("span",{className:"alt-title",children:"Fechas alternativas más cercanas disponibles:"}),a.jsx("div",{className:"alt-grid",children:n.map((i,l)=>a.jsxs("button",{type:"button",className:"alt-date-card",onClick:()=>r(i.dateStr),children:[a.jsxs("div",{className:"alt-date-info",children:[a.jsx(He,{size:18,className:"icon-cyan"}),a.jsx("span",{className:"alt-date-text",children:i.formattedLabel})]}),a.jsxs("div",{className:"alt-action",children:[a.jsx("span",{className:"alt-badge",children:i.offsetDays>0?`+${i.offsetDays} días`:`${i.offsetDays} días`}),a.jsx(Ma,{size:16})]})]},l))})]}),a.jsx("style",{children:`
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
      `})]}),$f=({onSubmitBooking:e})=>{const{t}=fe(),[n,r]=N.useState(25),[i,l]=N.useState(""),[s,o]=N.useState("sushi-fusion"),[c,d]=N.useState(["chef"]),[m,g]=N.useState(null),[p,x]=N.useState([]),[j,b]=N.useState([]),[M,f]=N.useState({});N.useEffect(()=>{const T=ir(),$=Zd();b(T),f($)},[]),N.useEffect(()=>{if(!i){g(null),x([]);return}const T=os(i,n,j,M);if(g(T),T.isAvailable)x([]);else{const $=Df(i,n,j,M,4);x($)}},[i,n,j,M]);const u=t("bookingWidget.menuOptions"),h=t("bookingWidget.extrasList"),v=u.find(T=>T.id===s)||u[0],y=v.price*n;let w=0;c.forEach(T=>{const $=h.find(wt=>wt.id===T);$&&($.price&&(w+=$.price),$.pricePerGuest&&(w+=$.pricePerGuest*n))});const S=y+w,E=Math.round(S/n),V=T=>{c.includes(T)?d(c.filter($=>$!==T)):d([...c,T])},_=T=>{l(T)},ce=T=>{if(T.preventDefault(),m&&!m.isAvailable){alert("La fecha seleccionada no tiene capacidad disponible. Por favor, elige una de las fechas alternativas propuestas.");return}e({guests:n,eventDate:i,menuName:v.name,menuId:v.id,extras:c.map($=>{var wt;return(wt=h.find(Fa=>Fa.id===$))==null?void 0:wt.name}).filter(Boolean),estimatedTotal:S,pricePerPerson:E})};return a.jsxs("section",{id:"personalizacion",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("bookingWidget.badge")}),a.jsx("h2",{children:t("bookingWidget.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:t("bookingWidget.subtitle")})]}),a.jsx("div",{className:"calculator-wrapper",children:a.jsxs("form",{onSubmit:ce,className:"calculator-card",children:[a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(hn,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.guests")}),a.jsxs("span",{className:"guest-badge-value",children:[n," invitados"]})]}),a.jsx("input",{type:"range",min:"10",max:"50",step:"1",value:n,onChange:T=>r(parseInt(T.target.value)),className:"custom-slider"}),a.jsxs("div",{className:"slider-range-labels",children:[a.jsx("span",{children:"10 (Íntimo)"}),a.jsx("span",{children:"30"}),a.jsx("span",{children:"50 (Máximo)"})]})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("div",{className:"calc-label-row",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(He,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.date")})]}),m&&m.isAvailable&&a.jsxs("span",{className:"avail-badge-success",children:[a.jsx(ts,{size:15}),a.jsx("span",{children:"Fecha Disponible"})]})]}),a.jsx("input",{type:"date",value:i,onChange:T=>l(T.target.value),required:!0,className:`calc-input ${m&&!m.isAvailable?"is-invalid":""}`}),m&&!m.isAvailable&&a.jsx(Vf,{requestedDateStr:i,reason:m.reason,alternativeDates:p,onSelectAlternative:_})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(rf,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.menuType")})]}),a.jsx("div",{className:"menu-options-grid",children:u.map(T=>a.jsx("div",{className:`menu-radio-card ${s===T.id?"selected":""}`,onClick:()=>o(T.id),children:a.jsxs("div",{className:"radio-header",children:[a.jsx("span",{className:"radio-title",children:T.name}),a.jsxs("span",{className:"radio-price",children:[T.price,"€ / inv"]})]})},T.id))})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(is,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.extras")})]}),a.jsx("div",{className:"extras-grid",children:h.map(T=>{const $=c.includes(T.id);return a.jsxs("div",{className:`extra-checkbox-card ${$?"active":""}`,onClick:()=>V(T.id),children:[$?a.jsx(af,{size:20,className:"icon-cyan"}):a.jsx(zf,{size:20}),a.jsx("span",{children:T.name})]},T.id)})})]}),a.jsxs("div",{className:"calc-summary-box",children:[a.jsxs("div",{className:"price-estimation",children:[a.jsx("span",{className:"est-label",children:t("bookingWidget.labels.estimatedTotal")}),a.jsxs("div",{className:"est-amount-row",children:[a.jsxs("span",{className:"est-total",children:[S,"€"]}),a.jsxs("span",{className:"est-per-person",children:["(",E,"€ ",t("bookingWidget.labels.perPerson"),")"]})]})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary calc-submit-btn",disabled:m&&!m.isAvailable,children:[a.jsx(Wd,{size:18}),a.jsx("span",{children:t("bookingWidget.labels.submitBtn")})]})]})]})})]}),a.jsx("style",{children:`
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
      `})]})},Bf=()=>{const{t:e}=fe();return a.jsxs("section",{id:"filosofia",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:"3rem"},children:[a.jsx("div",{className:"badge",children:e("philosophy.badge")}),a.jsx("h2",{children:e("philosophy.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32})]}),a.jsxs("div",{className:"philosophy-grid",children:[a.jsxs("div",{className:"philosophy-content",children:[a.jsxs("blockquote",{className:"philosophy-quote",children:['"',e("philosophy.text"),'"']}),a.jsxs("div",{className:"author-tag",children:[a.jsx("span",{className:"author-name",children:e("philosophy.quoteAuthor")}),a.jsx("span",{className:"author-role",children:e("philosophy.quoteRole")})]}),a.jsx("div",{className:"philosophy-points",children:e("philosophy.points").map((t,n)=>a.jsxs("div",{className:"point-item",children:[a.jsx("div",{className:"point-icon",children:a.jsx(ff,{size:18})}),a.jsxs("div",{children:[a.jsx("h4",{children:t.title}),a.jsx("p",{children:t.desc})]})]},n))})]}),a.jsx("div",{className:"philosophy-image-col",children:a.jsxs("div",{className:"image-frame",children:[a.jsx("img",{src:"/images/oskar/ChatGPT Image 16 abr 2026, 12_37_25.png",alt:"Chef Oskar Marijuan MUNCHOS Munich",className:"chef-img",onError:t=>{t.target.src="/images/lifestyle-people-learning-make-sushi.jpg"}}),a.jsxs("div",{className:"experience-badge",children:[a.jsx(nf,{size:24,className:"cyan-icon"}),a.jsxs("div",{children:[a.jsx("span",{className:"badge-title",children:"Gastronomía Vasca"}),a.jsx("span",{className:"badge-sub",children:"en el corazón de Múnich"})]})]})]})})]})]}),a.jsx("style",{children:`
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .philosophy-quote {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--accent-cyan);
          line-height: 1.6;
          border-left: 3px solid var(--accent-cyan);
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
          color: var(--text-dark-primary);
        }

        .author-role {
          font-size: 0.88rem;
          color: var(--text-dark-muted);
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
          background: rgba(62, 193, 201, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-item h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          margin-bottom: 0.2rem;
        }

        .point-item p {
          font-size: 0.9rem;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(62, 193, 201, 0.3);
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
          background: rgba(13, 13, 12, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--accent-cyan);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cyan-icon { color: var(--accent-cyan); }

        .badge-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFF;
          display: block;
        }

        .badge-sub {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
          }
          .chef-img {
            height: 380px;
          }
        }
      `})]})},Hf=[rs,Dt,jf],Wf=()=>{const{t:e}=fe();return a.jsxs("section",{id:"garantia",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("guarantee.badge")}),a.jsx("h2",{children:e("guarantee.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:e("guarantee.subtitle")})]}),a.jsx("div",{className:"guarantee-cards-grid",children:e("guarantee.cards").map((t,n)=>{const r=Hf[n]||Dt;return a.jsxs("div",{className:"glass-card guarantee-card",children:[a.jsx("div",{className:"guarantee-icon",children:a.jsx(r,{size:26})}),a.jsx("h3",{children:t.title}),a.jsx("p",{children:t.desc})]},n)})})]}),a.jsx("style",{children:`
        .guarantee-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .guarantee-card {
          border-top: 3px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .guarantee-icon {
          width: 52px;
          height: 52px;
          background: rgba(62, 193, 201, 0.12);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .guarantee-card h3 {
          font-size: 1.3rem;
          color: var(--text-dark-primary);
          margin-bottom: 0.75rem;
        }

        .guarantee-card p {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .guarantee-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Gf=()=>{const{t:e}=fe();return a.jsxs("section",{id:"testimonios",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("testimonials.badge")}),a.jsx("h2",{children:e("testimonials.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32})]}),a.jsx("div",{className:"testimonials-grid",children:e("testimonials.reviews").map((t,n)=>a.jsxs("div",{className:"glass-card testimonial-card",children:[a.jsx("div",{className:"quote-icon",children:a.jsx(Nf,{size:28})}),a.jsx("div",{className:"rating-row",children:[...Array(t.rating)].map((r,i)=>a.jsx(Ef,{size:16,fill:"#3EC1C9",color:"#3EC1C9"},i))}),a.jsxs("p",{className:"testimonial-text",children:['"',t.comment,'"']}),a.jsxs("div",{className:"reviewer-info",children:[a.jsx("span",{className:"reviewer-name",children:t.name}),a.jsx("span",{className:"reviewer-event",children:t.event})]})]},n))})]}),a.jsx("style",{children:`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-icon {
          color: rgba(62, 193, 201, 0.3);
          margin-bottom: 1rem;
        }

        .rating-row {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.2rem;
        }

        .testimonial-text {
          font-family: var(--font-subtitles);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-dark-primary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 1rem;
        }

        .reviewer-name {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .reviewer-event {
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},qf=({onAddToCart:e,onOpenCart:t})=>{const{t:n}=fe(),r=n("gourmetShop.products");return a.jsxs("section",{id:"gourmet",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:n("gourmetShop.badge")}),a.jsx("h2",{children:n("gourmetShop.title")}),a.jsx(We,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:n("gourmetShop.subtitle")})]}),a.jsx("div",{className:"gourmet-grid",children:r.map(i=>a.jsxs("div",{className:"gourmet-card",children:[a.jsxs("div",{className:"gourmet-img-wrapper",children:[a.jsx("img",{src:i.image,alt:i.name,className:"gourmet-img"}),a.jsx("span",{className:"gourmet-category",children:i.category})]}),a.jsxs("div",{className:"gourmet-content",children:[a.jsx("h3",{children:i.name}),a.jsx("p",{children:i.desc}),a.jsxs("div",{className:"gourmet-footer",children:[a.jsxs("span",{className:"gourmet-price",children:[i.price.toFixed(2),"€"]}),a.jsxs("button",{className:"btn btn-primary gourmet-add-btn",onClick:()=>e(i),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:n("gourmetShop.addBtn")})]})]})]})]},i.id))}),a.jsx("div",{className:"gourmet-bottom-cta",children:a.jsxs("button",{className:"btn btn-outline-gold",onClick:t,children:[a.jsx(ar,{size:18}),a.jsx("span",{children:n("gourmetShop.interestBtn")})]})})]}),a.jsx("style",{children:`
        .gourmet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .gourmet-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .gourmet-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
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
          background: rgba(13, 13, 12, 0.9);
          backdrop-filter: blur(8px);
          color: var(--accent-cyan);
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
          color: var(--text-dark-primary);
          margin-bottom: 0.5rem;
        }

        .gourmet-content p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .gourmet-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 1rem;
        }

        .gourmet-price {
          font-family: var(--font-subtitles);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .gourmet-add-btn {
          padding: 0.6rem 1.2rem;
          font-size: 0.88rem;
        }

        .gourmet-bottom-cta {
          text-align: center;
          margin-top: 3rem;
        }
      `})]})},Qf=({onOpenBooking:e})=>{const{t}=fe();return a.jsxs("section",{className:"section-padding final-cta-section",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"final-cta-card",children:[a.jsx("h2",{children:t("finalCta.title")}),a.jsx(We,{color:"#3EC1C9",width:160,height:36}),a.jsx("p",{children:t("finalCta.subtitle")}),a.jsxs("div",{className:"final-cta-actions",children:[a.jsxs("button",{className:"btn btn-primary btn-large",onClick:e,children:[a.jsx(He,{size:20}),a.jsx("span",{children:t("finalCta.primaryBtn")})]}),a.jsxs("a",{href:"https://wa.me/498912345678",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-large",children:[a.jsx(yf,{size:20}),a.jsx("span",{children:t("finalCta.secondaryBtn")})]})]})]})}),a.jsx("style",{children:`
        .final-cta-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-surface-dark) 100%);
        }

        .final-cta-card {
          background: rgba(30, 29, 27, 0.85);
          border: 1px solid var(--accent-cyan);
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
        }

        .final-cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-large {
          font-size: 1.1rem;
          padding: 1.1rem 2.5rem;
        }

        @media (max-width: 640px) {
          .final-cta-card {
            padding: 2.5rem 1.5rem;
          }
          .final-cta-actions button, .final-cta-actions a {
            width: 100%;
          }
        }
      `})]})},Yf=({onOpenBooking:e})=>{const{t}=fe();return a.jsxs("div",{className:"sticky-cta-bar",children:[a.jsxs("div",{className:"container sticky-container",children:[a.jsxs("div",{className:"sticky-info",children:[a.jsx("span",{className:"sticky-brand",children:t("brand.name")}),a.jsx("span",{className:"sticky-sub",children:t("stickyCta.text")})]}),a.jsxs("button",{className:"btn btn-primary sticky-btn",onClick:e,children:[a.jsx(He,{size:18}),a.jsx("span",{children:t("stickyCta.button")})]})]}),a.jsx("style",{children:`
        .sticky-cta-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(13, 13, 12, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid var(--accent-cyan);
          padding: 0.85rem 0;
          z-index: 999;
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.5);
        }

        .sticky-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sticky-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sticky-brand {
          font-family: var(--font-logo);
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--accent-cyan);
          letter-spacing: 2px;
        }

        .sticky-sub {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .sticky-btn {
          padding: 0.75rem 1.8rem;
          font-size: 0.95rem;
        }

        @media (max-width: 640px) {
          .sticky-sub { display: none; }
          .sticky-btn {
            width: 100%;
          }
          .sticky-container {
            justify-content: center;
          }
          .sticky-brand { display: none; }
        }
      `})]})},Kf=()=>{const{t:e}=fe();return a.jsxs("footer",{className:"footer-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand-col",children:[a.jsx("img",{src:"/images/logo.svg",alt:"MUNCHOS",className:"footer-logo"}),a.jsx("p",{className:"footer-about",children:e("footer.about")}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#","aria-label":"Instagram",children:a.jsx(mf,{size:20})}),a.jsx("a",{href:"#","aria-label":"Facebook",children:a.jsx(cf,{size:20})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.quickLinks")}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#beneficios",children:e("nav.beneficios")})}),a.jsx("li",{children:a.jsx("a",{href:"#como-funciona",children:e("nav.comoFunciona")})}),a.jsx("li",{children:a.jsx("a",{href:"#menus",children:e("nav.menus")})}),a.jsx("li",{children:a.jsx("a",{href:"#personalizacion",children:e("nav.personalizacion")})}),a.jsx("li",{children:a.jsx("a",{href:"#gourmet",children:e("nav.gourmet")})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.contact")}),a.jsxs("ul",{className:"contact-list",children:[a.jsxs("li",{children:[a.jsx(vf,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.address")})]}),a.jsxs("li",{children:[a.jsx(bf,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.phone")})]}),a.jsxs("li",{children:[a.jsx(as,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.email")})]})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.legal")}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.impressum")})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.privacy")})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.terms")})}),a.jsx("li",{style:{marginTop:"0.5rem"},children:a.jsxs("a",{href:"#admin",className:"admin-footer-link",children:[a.jsx(Bd,{size:13}),a.jsx("span",{children:"Acceso Propietario / Admin"})]})})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:e("footer.copyright")})})]}),a.jsx("style",{children:`
        .footer-section {
          background: #080807;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding: 5rem 0 7rem 0;
          color: var(--text-dark-secondary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          height: 65px;
          margin-bottom: 1.25rem;
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

        .footer-col a:hover {
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
      `})]})},Zf=({isOpen:e,onClose:t,cartItems:n,onUpdateQuantity:r,onRemoveItem:i})=>{if(fe(),!e)return null;const l=n.reduce((s,o)=>s+o.price*o.quantity,0);return a.jsxs("div",{className:"drawer-overlay",onClick:t,children:[a.jsxs("div",{className:"drawer-content",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"drawer-title-group",children:[a.jsx(ar,{size:22,className:"icon-gold"}),a.jsx("h3",{children:"Lista de Compras Gourmet"})]}),a.jsx("button",{className:"close-btn",onClick:t,"aria-label":"Cerrar",children:a.jsx(Rt,{size:24})})]}),a.jsx("div",{className:"drawer-body",children:n.length===0?a.jsxs("div",{className:"empty-cart",children:[a.jsx(ar,{size:48,className:"empty-icon"}),a.jsx("p",{children:"Tu selección gourmet está vacía."}),a.jsx("span",{className:"empty-sub",children:"Añade conservas, vinos vascos o quesos artesanos de nuestra tienda."})]}):a.jsx("div",{className:"cart-items-list",children:n.map(s=>a.jsxs("div",{className:"cart-item",children:[a.jsx("img",{src:s.image,alt:s.name,className:"cart-item-img"}),a.jsxs("div",{className:"cart-item-details",children:[a.jsx("h4",{children:s.name}),a.jsxs("span",{className:"cart-item-price",children:[(s.price*s.quantity).toFixed(2),"€"]}),a.jsxs("div",{className:"qty-controls",children:[a.jsx("button",{onClick:()=>r(s.id,s.quantity-1),children:a.jsx(kf,{size:14})}),a.jsx("span",{children:s.quantity}),a.jsx("button",{onClick:()=>r(s.id,s.quantity+1),children:a.jsx(yt,{size:14})})]})]}),a.jsx("button",{className:"remove-item-btn",onClick:()=>i(s.id),children:a.jsx(ls,{size:18})})]},s.id))})}),n.length>0&&a.jsxs("div",{className:"drawer-footer",children:[a.jsxs("div",{className:"cart-total-row",children:[a.jsx("span",{children:"Total Estimado:"}),a.jsxs("span",{className:"total-price",children:[l.toFixed(2),"€"]})]}),a.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{alert("¡Gracias! Hemos recibido tu solicitud para los productos gourmet seleccionados. Te contactaremos para coordinar el envío en Múnich."),t()},children:[a.jsx("span",{children:"Solicitar Productos Gourmet"}),a.jsx(Ma,{size:18})]})]})]}),a.jsx("style",{children:`
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
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
      `})]})},Xf=({isOpen:e,onClose:t,initialData:n})=>{const{t:r}=fe(),[i,l]=N.useState({name:"",email:"",phone:"",location:"",notes:""}),[s,o]=N.useState(!1);if(!e)return null;const c=m=>{m.preventDefault(),Kd({date:(n==null?void 0:n.eventDate)||new Date().toISOString().split("T")[0],guests:(n==null?void 0:n.guests)||20,menuType:(n==null?void 0:n.menuId)||"sushi-fusion",menuName:(n==null?void 0:n.menuName)||"Fusión Nikkei (Sushi + Pinchos)",extras:(n==null?void 0:n.extras)||[],estimatedTotal:(n==null?void 0:n.estimatedTotal)||0,pricePerPerson:(n==null?void 0:n.pricePerPerson)||0,status:"pending",source:"public",clientName:i.name,clientEmail:i.email,clientPhone:i.phone,location:i.location,notes:i.notes}),o(!0)},d=()=>{o(!1),t()};return a.jsxs("div",{className:"modal-overlay",onClick:d,children:[a.jsxs("div",{className:"modal-container",onClick:m=>m.stopPropagation(),children:[a.jsx("button",{className:"modal-close-btn",onClick:d,children:a.jsx(Rt,{size:24})}),s?a.jsxs("div",{className:"success-screen",children:[a.jsx(ns,{size:64,className:"success-icon"}),a.jsx("h3",{children:r("modal.successTitle")}),a.jsx("p",{children:r("modal.successText")}),a.jsx("button",{className:"btn btn-primary",onClick:d,children:"Entendido"})]}):a.jsxs("div",{children:[a.jsx("h3",{className:"modal-title",children:r("modal.title")}),a.jsx("p",{className:"modal-subtitle",children:r("modal.subtitle")}),n&&a.jsxs("div",{className:"booking-summary-banner",children:[a.jsxs("span",{className:"summary-pill",children:[n.guests||25," Invitados"]}),n.eventDate&&a.jsxs("span",{className:"summary-pill",children:["Fecha: ",n.eventDate]}),a.jsx("span",{className:"summary-pill",children:n.menuName||"Menú Seleccionado"}),n.estimatedTotal&&a.jsxs("span",{className:"summary-pill gold-pill",children:["Est. Total: ",n.estimatedTotal,"€"]})]}),a.jsxs("form",{onSubmit:c,className:"modal-form",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.name")}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Maria Fernández",value:i.name,onChange:m=>l({...i,name:m.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.email")}),a.jsx("input",{type:"email",required:!0,placeholder:"maria@ejemplo.de",value:i.email,onChange:m=>l({...i,email:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.phone")}),a.jsx("input",{type:"tel",required:!0,placeholder:"+49 176 1234567",value:i.phone,onChange:m=>l({...i,phone:m.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.location")}),a.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen, Múnich",value:i.location,onChange:m=>l({...i,location:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.notes")}),a.jsx("textarea",{rows:"3",placeholder:"Preferencias de tus invitados, opciones vegetarianas o sin gluten...",value:i.notes,onChange:m=>l({...i,notes:m.target.value})})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary modal-submit",children:[a.jsx(Wd,{size:18}),a.jsx("span",{children:r("modal.submit")})]})]})]})]}),a.jsx("style",{children:`
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
          margin-top: 1rem;
          width: 100%;
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
      `})]})},il="munchos_cms_products_v1",ll="munchos_cms_promotions_v1",ko=[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi.",active:!0},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional.",active:!0},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra.",active:!0},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca.",active:!0}],bo=[{id:"promo_01",headline:"Especial Paellas Vascas a Fuego Vivo los Fines de Semana",bodyText:"Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",ctaText:"Consultar Fechas de Paella",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-09-30"},{id:"promo_02",headline:"Maridaje Gratuito de Txakoli en Reservas > 30 personas",bodyText:"Este mes, todas las reservas confirmadas de más de 30 invitados incluyen degustación de nuestro Txakoli Reserva.",image:"/images/IMG_1240.jpeg",ctaText:"Aprovechar Promoción",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-08-31"}],Jf=()=>{try{const e=localStorage.getItem(il);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(il,JSON.stringify(ko)),ko},ci=e=>{try{localStorage.setItem(il,JSON.stringify(e))}catch{}},Xd=()=>{try{const e=localStorage.getItem(ll);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(ll,JSON.stringify(bo)),bo},di=e=>{try{localStorage.setItem(ll,JSON.stringify(e))}catch{}},eh=()=>{const e=Xd(),t=new Date().toISOString().split("T")[0];return e.filter(n=>!(!n.active||n.startDate&&n.startDate>t||n.endDate&&n.endDate<t))},th=()=>{const[e,t]=N.useState([]),[n,r]=N.useState(0);if(N.useEffect(()=>{const c=eh();t(c)},[]),N.useEffect(()=>{if(e.length>1){const c=setInterval(()=>{r(d=>(d+1)%e.length)},6e3);return()=>clearInterval(c)}},[e]),e.length===0)return null;const i=e.length>1,l=e[n],s=()=>r((n+1)%e.length),o=()=>r((n-1+e.length)%e.length);return a.jsxs("section",{className:"promotions-banner-section",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"promo-card",children:[a.jsxs("div",{className:"promo-image-col",children:[a.jsx("img",{src:l.image,alt:l.headline,className:"promo-img"}),a.jsxs("div",{className:"promo-badge",children:[a.jsx(Gd,{size:15}),a.jsx("span",{children:"Promoción Exclusiva MUNCHOS"})]})]}),a.jsxs("div",{className:"promo-content-col",children:[a.jsx("h2",{children:l.headline}),a.jsx("p",{children:l.bodyText}),l.ctaText&&a.jsxs("a",{href:l.ctaLink||"#personalizacion",className:"btn btn-primary promo-btn",children:[a.jsx("span",{children:l.ctaText}),a.jsx(Ma,{size:18})]}),i&&a.jsxs("div",{className:"carousel-controls",children:[a.jsx("div",{className:"carousel-dots",children:e.map((c,d)=>a.jsx("span",{className:`dot ${d===n?"active":""}`,onClick:()=>r(d)},d))}),a.jsxs("div",{className:"carousel-arrows",children:[a.jsx("button",{onClick:o,"aria-label":"Anterior",children:a.jsx(Dd,{size:18})}),a.jsx("button",{onClick:s,"aria-label":"Siguiente",children:a.jsx(Ta,{size:18})})]})]})]})]})}),a.jsx("style",{children:`
        .promotions-banner-section {
          margin: 2rem 0;
        }

        .promo-card {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .promo-image-col {
          position: relative;
          min-height: 260px;
        }

        .promo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .promo-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(13, 13, 12, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-transform: uppercase;
        }

        .promo-content-col {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .promo-content-col h2 {
          font-size: 1.8rem;
          color: #FFF;
          margin-bottom: 0.75rem;
        }

        .promo-content-col p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .promo-btn {
          align-self: flex-start;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
          padding-top: 1rem;
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
          width: 36px;
          height: 36px;
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

        @media (max-width: 768px) {
          .promo-card {
            grid-template-columns: 1fr;
          }
          .promo-image-col {
            min-height: 200px;
          }
          .promo-content-col {
            padding: 1.8rem;
          }
        }
      `})]})},nh=({reservations:e,capacitySettings:t,onUpdateStatus:n,onOpenAddModal:r})=>{const[i,l]=N.useState(new Date(2026,7,1)),[s,o]=N.useState(null),c=i.getFullYear(),d=i.getMonth(),m=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],g=new Date(c,d+1,0).getDate(),x=(new Date(c,d,1).getDay()+6)%7,j=()=>l(new Date(c,d-1,1)),b=()=>l(new Date(c,d+1,1)),M=u=>{if(!u)return"";const[h,v,y]=u.split("-"),w=parseInt(v,10)-1;return`${parseInt(y,10)} de ${m[w]}, ${h}`},f=s?e.filter(u=>u.date===s):[];return a.jsxs("div",{className:"monthly-calendar-module",children:[a.jsxs("div",{className:"cal-header-bar",children:[a.jsxs("div",{className:"cal-title-group",children:[a.jsx(He,{size:22,className:"icon-cyan"}),a.jsxs("h2",{className:"cal-month-title",children:[m[d]," ",c]})]}),a.jsxs("div",{className:"cal-nav-controls",children:[a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:j,"aria-label":"Mes anterior",children:a.jsx(Dd,{size:18})}),a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:()=>l(new Date),children:"Hoy"}),a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:b,"aria-label":"Mes siguiente",children:a.jsx(Ta,{size:18})}),a.jsxs("button",{className:"btn btn-primary cal-btn cal-btn-add",onClick:()=>r(s),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:"Añadir Reserva"})]})]})]}),a.jsxs("div",{className:"cal-layout-grid",children:[a.jsxs("div",{className:"month-grid-wrapper",children:[a.jsxs("div",{className:"weekdays-header",children:[a.jsx("span",{children:"Lun"}),a.jsx("span",{children:"Mar"}),a.jsx("span",{children:"Mié"}),a.jsx("span",{children:"Jue"}),a.jsx("span",{children:"Vie"}),a.jsx("span",{children:"Sáb"}),a.jsx("span",{children:"Dom"})]}),a.jsxs("div",{className:"days-grid",children:[[...Array(x)].map((u,h)=>a.jsx("div",{className:"day-cell blank-cell"},`blank-${h}`)),[...Array(g)].map((u,h)=>{const v=h+1,y=`${c}-${String(d+1).padStart(2,"0")}-${String(v).padStart(2,"0")}`,w=e.filter(T=>T.date===y&&T.status!=="cancelled"),S=w.reduce((T,$)=>T+(parseInt($.guests)||0),0),E=w.length,_=!os(y,1,e,t).isAvailable,ce=s===y;return a.jsxs("div",{className:`day-cell ${ce?"selected":""} ${_?"cell-full":E>0?"cell-busy":"cell-open"}`,onClick:()=>o(y),children:[a.jsxs("div",{className:"day-number-row",children:[a.jsx("span",{className:"day-num",children:v}),E>0&&a.jsxs("span",{className:`density-badge ${_?"full":"partial"}`,children:[E," EV."]})]}),E>0&&a.jsx("div",{className:"cell-details",children:a.jsxs("div",{className:"cell-stat",children:[a.jsx(hn,{size:10}),a.jsxs("span",{children:[S," inv."]})]})})]},v)})]})]}),a.jsxs("div",{className:"day-details-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsxs("div",{className:"panel-title-container",children:[a.jsx("span",{className:"panel-title-lbl",children:"Reservas:"}),a.jsx("h3",{className:"panel-title-date",children:s?M(s):"Selecciona un día"})]}),s&&a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>r(s),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:"Nueva Reserva"})]})]}),s?f.length===0?a.jsxs("div",{className:"panel-empty",children:[a.jsxs("p",{children:["No hay reservas registradas para el ",M(s),"."]}),a.jsx("button",{className:"btn btn-primary",onClick:()=>r(s),children:"Añadir Reserva para esta Fecha"})]}):a.jsx("div",{className:"day-reservations-list",children:f.map(u=>a.jsxs("div",{className:`res-card status-${u.status}`,children:[a.jsxs("div",{className:"res-card-header",children:[a.jsxs("div",{children:[a.jsx("h4",{children:u.clientName}),a.jsxs("span",{className:"res-contact",children:[u.clientEmail," • ",u.clientPhone]})]}),a.jsx("span",{className:`status-pill status-${u.status}`,children:u.status==="confirmed"?"Confirmada":u.status==="pending"?"Pendiente":"Cancelada"})]}),a.jsxs("div",{className:"res-card-body",children:[a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Menú:"})," ",u.menuName]}),a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Invitados:"})," ",u.guests," comensales"]}),a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Origen:"})," ",u.source==="public"?"Web Pública":"Manual (Admin)"]}),u.estimatedTotal&&a.jsxs("div",{className:"res-meta-item gold-meta",children:[a.jsx("strong",{children:"Total Estimado:"})," ",u.estimatedTotal,"€"]}),u.notes&&a.jsxs("div",{className:"res-notes",children:[a.jsx("strong",{children:"Notas:"})," ",u.notes]})]}),a.jsxs("div",{className:"res-card-actions",children:[u.status!=="confirmed"&&a.jsxs("button",{className:"btn btn-sm btn-confirm",onClick:()=>n(u.id,"confirmed"),children:[a.jsx(ns,{size:14}),a.jsx("span",{children:"Confirmar"})]}),u.status!=="pending"&&a.jsxs("button",{className:"btn btn-sm btn-pending",onClick:()=>n(u.id,"pending"),children:[a.jsx(rs,{size:14}),a.jsx("span",{children:"Poner Pendiente"})]}),u.status!=="cancelled"&&a.jsxs("button",{className:"btn btn-sm btn-cancel",onClick:()=>n(u.id,"cancelled"),children:[a.jsx(Qd,{size:14}),a.jsx("span",{children:"Cancelar"})]})]})]},u.id))}):a.jsxs("div",{className:"panel-empty",children:[a.jsx(He,{size:40,className:"empty-icon"}),a.jsx("p",{children:"Haz clic en cualquier día del calendario para examinar la ocupación y gestionar las reservas."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},rh=({reservations:e})=>{const[t,n]=N.useState(2026),i=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"].map((c,d)=>{const m=String(d+1).padStart(2,"0"),g=`${t}-${m}`,p=e.filter(f=>f.date.startsWith(g)&&f.status!=="cancelled"),x=p.length,j=p.reduce((f,u)=>f+(parseInt(u.guests)||0),0),b=p.reduce((f,u)=>f+(parseFloat(u.estimatedTotal)||0),0);let M=0;return x>=1&&(M=1),x>=3&&(M=2),x>=6&&(M=3),x>=10&&(M=4),{monthName:c,monthNum:m,totalEvents:x,totalGuests:j,estimatedRev:b,intensity:M}}),l=i.reduce((c,d)=>c+d.totalEvents,0),s=i.reduce((c,d)=>c+d.totalGuests,0),o=i.reduce((c,d)=>c+d.estimatedRev,0);return a.jsxs("div",{className:"annual-heatmap-module",children:[a.jsxs("div",{className:"heatmap-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsxs("h2",{className:"header-title",children:["Mapa de Calor Anual (",t,")"]}),a.jsx("p",{className:"header-subtitle",children:"Visión panorámica de la intensidad de reservas y estacionalidad durante todo el año."})]}),a.jsxs("div",{className:"year-selector-row",children:[a.jsx("button",{className:`btn btn-sm ${t===2025?"btn-primary":"btn-secondary"}`,onClick:()=>n(2025),children:"2025"}),a.jsx("button",{className:`btn btn-sm ${t===2026?"btn-primary":"btn-secondary"}`,onClick:()=>n(2026),children:"2026"}),a.jsx("button",{className:`btn btn-sm ${t===2027?"btn-primary":"btn-secondary"}`,onClick:()=>n(2027),children:"2027"})]})]}),a.jsxs("div",{className:"year-stats-row",children:[a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(Vd,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-val",children:l}),a.jsxs("span",{className:"stat-lbl",children:["Eventos en ",t]})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(hn,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-val",children:s}),a.jsx("span",{className:"stat-lbl",children:"Comensales Totales"})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(qd,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsxs("span",{className:"stat-val",children:[o.toFixed(0),"€"]}),a.jsx("span",{className:"stat-lbl",children:"Ingresos Estimados"})]})]})]}),a.jsx("div",{className:"heatmap-grid",children:i.map((c,d)=>a.jsxs("div",{className:`month-heat-card intensity-${c.intensity}`,children:[a.jsxs("div",{className:"month-card-header",children:[a.jsx("span",{className:"month-name",children:c.monthName}),a.jsx("span",{className:"heat-dot"})]}),a.jsxs("div",{className:"month-card-body",children:[a.jsxs("div",{className:"heat-metric",children:[a.jsx("span",{className:"val",children:c.totalEvents}),a.jsxs("span",{className:"lbl",children:["evento",c.totalEvents!==1?"s":""]})]}),a.jsx("div",{className:"heat-metric",children:a.jsxs("span",{className:"sub-val",children:[c.totalGuests," comensales"]})}),c.estimatedRev>0&&a.jsxs("div",{className:"heat-metric rev-val",children:[c.estimatedRev,"€"]})]})]},d))}),a.jsxs("div",{className:"heatmap-legend",children:[a.jsx("span",{children:"Intensidad de Ocupación:"}),a.jsxs("div",{className:"legend-scale",children:[a.jsx("span",{className:"scale-box intensity-0",children:"Baja (0)"}),a.jsx("span",{className:"scale-box intensity-1",children:"Moderada (1-2)"}),a.jsx("span",{className:"scale-box intensity-2",children:"Media (3-5)"}),a.jsx("span",{className:"scale-box intensity-3",children:"Alta (6-9)"}),a.jsx("span",{className:"scale-box intensity-4",children:"Máxima (10+)"})]})]}),a.jsx("style",{children:`
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
      `})]})},ah=({reservations:e,onUpdateStatus:t,onOpenAddModal:n})=>{const[r,i]=N.useState(""),[l,s]=N.useState("all"),[o,c]=N.useState("all"),[d,m]=N.useState("all"),g=e.filter(p=>{var x,j,b;if(r){const M=r.toLowerCase(),f=(x=p.clientName)==null?void 0:x.toLowerCase().includes(M),u=(j=p.clientEmail)==null?void 0:j.toLowerCase().includes(M),h=(b=p.location)==null?void 0:b.toLowerCase().includes(M);if(!f&&!u&&!h)return!1}return!(l!=="all"&&p.status!==l||o!=="all"&&p.source!==o||d!=="all"&&p.menuType!==d)});return a.jsxs("div",{className:"reservations-list-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Listado de Reservas"}),a.jsx("p",{className:"header-subtitle",children:"Filtra, gestiona estados y edita solicitudes de catering públicas y presenciales."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>n(null),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:"Nueva Reserva Manual"})]})]}),a.jsxs("div",{className:"filter-controls-bar",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(Sf,{size:18,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Buscar por cliente, email o zona de Múnich...",value:r,onChange:p=>i(p.target.value)})]}),a.jsxs("div",{className:"filter-dropdowns",children:[a.jsxs("select",{value:l,onChange:p=>s(p.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Estados"}),a.jsx("option",{value:"pending",children:"Pendientes"}),a.jsx("option",{value:"confirmed",children:"Confirmadas"}),a.jsx("option",{value:"cancelled",children:"Canceladas"})]}),a.jsxs("select",{value:o,onChange:p=>c(p.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Orígenes"}),a.jsx("option",{value:"public",children:"Web Pública"}),a.jsx("option",{value:"manual",children:"Manual (Admin)"})]}),a.jsxs("select",{value:d,onChange:p=>m(p.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Menús"}),a.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei"}),a.jsx("option",{value:"de-tapas",children:"Pinchos & Tapas"}),a.jsx("option",{value:"full-experience",children:"Experiencia Completa"})]})]})]}),a.jsx("div",{className:"table-responsive",children:a.jsxs("table",{className:"reservations-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Cliente"}),a.jsx("th",{children:"Invitados"}),a.jsx("th",{children:"Menú"}),a.jsx("th",{children:"Origen"}),a.jsx("th",{children:"Est. Total"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:g.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"8",className:"no-results",children:"No se encontraron reservas con los filtros seleccionados."})}):g.map(p=>a.jsxs("tr",{className:`table-row status-${p.status}`,children:[a.jsx("td",{className:"font-bold",children:p.date}),a.jsx("td",{children:a.jsxs("div",{className:"client-cell",children:[a.jsx("span",{className:"client-name",children:p.clientName}),a.jsxs("span",{className:"client-sub",children:[p.clientEmail," • ",p.clientPhone]})]})}),a.jsxs("td",{children:[p.guests," inv."]}),a.jsx("td",{children:a.jsx("span",{className:"menu-pill",children:p.menuName})}),a.jsx("td",{children:a.jsx("span",{className:`source-badge source-${p.source}`,children:p.source==="public"?"Web Pública":"Manual Admin"})}),a.jsx("td",{className:"gold-text",children:p.estimatedTotal?`${p.estimatedTotal}€`:"—"}),a.jsx("td",{children:a.jsx("span",{className:`status-pill status-${p.status}`,children:p.status==="confirmed"?"Confirmada":p.status==="pending"?"Pendiente":"Cancelada"})}),a.jsx("td",{children:a.jsxs("div",{className:"table-actions",children:[p.status!=="confirmed"&&a.jsx("button",{className:"btn-action confirm",title:"Confirmar Reserva",onClick:()=>t(p.id,"confirmed"),children:a.jsx(ns,{size:16})}),p.status!=="pending"&&a.jsx("button",{className:"btn-action pending",title:"Poner en Pendiente",onClick:()=>t(p.id,"pending"),children:a.jsx(rs,{size:16})}),p.status!=="cancelled"&&a.jsx("button",{className:"btn-action cancel",title:"Cancelar Reserva",onClick:()=>t(p.id,"cancelled"),children:a.jsx(Qd,{size:16})})]})})]},p.id))})]})}),a.jsx("style",{children:`
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
      `})]})},ih=({reservations:e})=>{const t=e.filter(d=>d.status!=="cancelled"),n=t.reduce((d,m)=>{const g=m.menuName||m.menuType||"Otro";return d[g]=(d[g]||0)+1,d},{}),r={"10-19 comensales":0,"20-34 comensales":0,"35-50+ comensales":0};t.forEach(d=>{const m=parseInt(d.guests)||0;m<20?r["10-19 comensales"]++:m<=34?r["20-34 comensales"]++:r["35-50+ comensales"]++});const i=t.filter(d=>d.source==="public").length,l=t.filter(d=>d.source==="manual").length,s=t.filter(d=>parseFloat(d.estimatedTotal)>0),o=s.reduce((d,m)=>d+parseFloat(m.estimatedTotal),0),c=s.length>0?Math.round(o/s.length):0;return a.jsxs("div",{className:"analytics-view-module",children:[a.jsxs("div",{className:"analytics-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Métricas y Análisis de Rendimiento"}),a.jsx("p",{className:"header-subtitle",children:"Análisis de patrones de reserva, distribución de menús y rentabilidad operativa."})]}),a.jsxs("div",{className:"finance-notice",children:[a.jsx(uf,{size:16}),a.jsx("span",{children:"Las métricas financieras se calculan sobre presupuestos completados."})]})]}),a.jsxs("div",{className:"kpi-cards-grid",children:[a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(of,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsxs("span",{className:"kpi-val",children:[o.toFixed(0),"€"]}),a.jsx("span",{className:"kpi-lbl",children:"Ingresos Totales Registrados"})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(qd,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsxs("span",{className:"kpi-val",children:[c,"€"]}),a.jsx("span",{className:"kpi-lbl",children:"Valor Medio por Evento"})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(hn,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsx("span",{className:"kpi-val",children:t.length}),a.jsx("span",{className:"kpi-lbl",children:"Eventos Activos Confirmados"})]})]})]}),a.jsxs("div",{className:"analytics-grid",children:[a.jsxs("div",{className:"glass-card chart-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(wf,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Distribución por Tipo de Menú"})]}),a.jsx("div",{className:"bar-chart-container",children:Object.entries(n).map(([d,m],g)=>{const p=t.length>0?Math.round(m/t.length*100):0;return a.jsxs("div",{className:"bar-row",children:[a.jsxs("div",{className:"bar-info",children:[a.jsx("span",{className:"bar-label",children:d}),a.jsxs("span",{className:"bar-val",children:[m," (",p,"%)"]})]}),a.jsx("div",{className:"bar-track",children:a.jsx("div",{className:"bar-fill",style:{width:`${p}%`}})})]},g)})})]}),a.jsxs("div",{className:"glass-card chart-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(hn,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Tamaño de los Grupos (Comensales)"})]}),a.jsx("div",{className:"bar-chart-container",children:Object.entries(r).map(([d,m],g)=>{const p=t.length>0?Math.round(m/t.length*100):0;return a.jsxs("div",{className:"bar-row",children:[a.jsxs("div",{className:"bar-info",children:[a.jsx("span",{className:"bar-label",children:d}),a.jsxs("span",{className:"bar-val",children:[m," eventos (",p,"%)"]})]}),a.jsx("div",{className:"bar-track",children:a.jsx("div",{className:"bar-fill cyan-fill",style:{width:`${p}%`}})})]},g)})})]}),a.jsxs("div",{className:"glass-card chart-card full-width-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(Id,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Origen de las Reservas (Web Pública vs. Canal Manual)"})]}),a.jsxs("div",{className:"source-split-wrapper",children:[a.jsxs("div",{className:"source-stat",children:[a.jsx("span",{className:"source-num",children:i}),a.jsx("span",{className:"source-title",children:"Reservas Web Pública"}),a.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(i/t.length*100):0,"% del total"]})]}),a.jsx("div",{className:"source-divider"}),a.jsxs("div",{className:"source-stat",children:[a.jsx("span",{className:"source-num gold-num",children:l}),a.jsx("span",{className:"source-title",children:"Reservas Manuales (Teléfono/Email)"}),a.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(l/t.length*100):0,"% del total"]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},lh=()=>{const[e,t]=N.useState(Jf()),[n,r]=N.useState(!1),[i,l]=N.useState({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0}),s=d=>{const m=e.map(g=>g.id===d?{...g,active:!g.active}:g);t(m),ci(m)},o=d=>{if(window.confirm("¿Seguro que deseas eliminar este producto gourmet?")){const m=e.filter(g=>g.id!==d);t(m),ci(m)}},c=d=>{d.preventDefault();const m=`prod_${Date.now()}`,g=[...e,{...i,id:m}];t(g),ci(g),r(!1),l({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0})};return a.jsxs("div",{className:"products-manager-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Gestión de Productos Gourmet (CMS)"}),a.jsx("p",{className:"header-subtitle",children:"Edita la tienda delicatessen pública en tiempo real sin reiniciar ni redesplegar código."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>r(!n),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:"Nuevo Producto Gourmet"})]})]}),n&&a.jsxs("form",{onSubmit:c,className:"glass-card add-prod-form",children:[a.jsx("h3",{children:"Añadir Nuevo Producto Gourmet"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Nombre del Producto *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Bonito del Norte en AOVE",value:i.name,onChange:d=>l({...i,name:d.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Categoría *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Conservas Artesanales",value:i.category,onChange:d=>l({...i,category:d.target.value})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Precio (€) *"}),a.jsx("input",{type:"number",step:"0.10",required:!0,value:i.price,onChange:d=>l({...i,price:parseFloat(d.target.value)})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Ruta / URL de la Imagen"}),a.jsx("input",{type:"text",value:i.image,onChange:d=>l({...i,image:d.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Descripción Gastronómica *"}),a.jsx("textarea",{rows:"2",required:!0,placeholder:"Detalles sobre elaboración, origen o maridaje recomendados...",value:i.desc,onChange:d=>l({...i,desc:d.target.value})})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"submit",className:"btn btn-primary",children:[a.jsx(Hd,{size:16}),a.jsx("span",{children:"Guardar Producto"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>r(!1),children:[a.jsx(Rt,{size:16}),a.jsx("span",{children:"Cancelar"})]})]})]}),a.jsx("div",{className:"products-cms-grid",children:e.map(d=>a.jsxs("div",{className:`glass-card cms-product-card ${d.active?"":"is-inactive"}`,children:[a.jsxs("div",{className:"cms-img-wrapper",children:[a.jsx("img",{src:d.image,alt:d.name,className:"cms-prod-img"}),a.jsx("span",{className:`status-badge ${d.active?"active":"inactive"}`,children:d.active?"Visible en Web":"Oculto"})]}),a.jsxs("div",{className:"cms-prod-body",children:[a.jsx("span",{className:"cms-cat",children:d.category}),a.jsx("h4",{children:d.name}),a.jsx("p",{children:d.desc}),a.jsxs("div",{className:"cms-price-row",children:[a.jsxs("span",{className:"cms-price",children:[d.price.toFixed(2),"€"]}),a.jsxs("div",{className:"cms-actions",children:[a.jsx("button",{className:`btn-action-icon ${d.active?"active":""}`,title:d.active?"Ocultar en la web":"Hacer visible",onClick:()=>s(d.id),children:d.active?a.jsx(Ud,{size:18}):a.jsx(Rd,{size:18})}),a.jsx("button",{className:"btn-action-icon delete",title:"Eliminar producto",onClick:()=>o(d.id),children:a.jsx(ls,{size:18})})]})]})]})]},d.id))}),a.jsx("style",{children:`
        .products-manager-module {
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

        .add-prod-form {
          border: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 1rem;
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

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .products-cms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .cms-product-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .cms-product-card.is-inactive {
          opacity: 0.6;
        }

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
        .btn-action-icon.delete:hover { border-color: var(--accent-red); color: var(--accent-red); }

        @media (max-width: 640px) {
          .header-action-btn { width: 100%; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})},sh=()=>{const[e,t]=N.useState(Xd()),[n,r]=N.useState(!1),[i,l]=N.useState({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""}),s=e.filter(m=>m.active).length,o=m=>{const g=e.map(p=>p.id===m?{...p,active:!p.active}:p);t(g),di(g)},c=m=>{if(window.confirm("¿Deseas eliminar esta promoción de la portada?")){const g=e.filter(p=>p.id!==m);t(g),di(g)}},d=m=>{m.preventDefault();const g=`promo_${Date.now()}`,p=[...e,{...i,id:g}];t(p),di(p),r(!1),l({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""})};return a.jsxs("div",{className:"promotions-manager-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Gestión del Banner de Promociones"}),a.jsx("p",{className:"header-subtitle",children:"Publica ofertas temporales y eventos especiales en la portada sin desplegar código."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>r(!n),children:[a.jsx(yt,{size:16}),a.jsx("span",{children:"Nueva Promoción"})]})]}),a.jsxs("div",{className:"mode-status-banner",children:[a.jsx(pf,{className:"icon-cyan",size:22}),a.jsxs("div",{children:[a.jsxs("h4",{children:["Modo de Presentación en Portada:",a.jsx("span",{className:"gold-text",children:s===0?" Oculto (0 promociones activas)":s===1?" Banner Estático Individual (1 activa)":` Carrusel Giratorio (${s} activas en rotación)`})]}),a.jsx("p",{children:"El sistema detecta automáticamente el número de promociones activas y las muestra como banner único o carrusel girable."})]})]}),n&&a.jsxs("form",{onSubmit:d,className:"glass-card add-promo-form",children:[a.jsx("h3",{children:"Crear Nueva Promoción para la Portada"}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Titular de la Promoción *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Menú Especial Paella los Fines de Semana",value:i.headline,onChange:m=>l({...i,headline:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Texto Descriptivo *"}),a.jsx("textarea",{rows:"2",required:!0,placeholder:"Explicación breve de la oferta o servicio especial...",value:i.bodyText,onChange:m=>l({...i,bodyText:m.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Texto del Botón CTA"}),a.jsx("input",{type:"text",placeholder:"Ej: Reservar Fecha Especial",value:i.ctaText,onChange:m=>l({...i,ctaText:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Ruta de Imagen *"}),a.jsx("input",{type:"text",required:!0,value:i.image,onChange:m=>l({...i,image:m.target.value})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha Inicio (Opcional)"}),a.jsx("input",{type:"date",value:i.startDate,onChange:m=>l({...i,startDate:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha Fin (Opcional)"}),a.jsx("input",{type:"date",value:i.endDate,onChange:m=>l({...i,endDate:m.target.value})})]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"submit",className:"btn btn-primary",children:[a.jsx(Hd,{size:16}),a.jsx("span",{children:"Publicar Promoción"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>r(!1),children:[a.jsx(Rt,{size:16}),a.jsx("span",{children:"Cancelar"})]})]})]}),a.jsx("div",{className:"promotions-list",children:e.map(m=>a.jsxs("div",{className:`glass-card promo-cms-card ${m.active?"":"is-inactive"}`,children:[a.jsx("img",{src:m.image,alt:m.headline,className:"promo-cms-img"}),a.jsxs("div",{className:"promo-cms-content",children:[a.jsxs("div",{className:"promo-cms-header",children:[a.jsx("h3",{children:m.headline}),a.jsx("span",{className:`status-badge ${m.active?"active":"inactive"}`,children:m.active?"Activa":"Desactivada"})]}),a.jsx("p",{children:m.bodyText}),(m.startDate||m.endDate)&&a.jsxs("div",{className:"date-range-tag",children:[a.jsx(He,{size:14}),a.jsxs("span",{children:["Vigencia: ",m.startDate||"—"," a ",m.endDate||"Sin límite"]})]})]}),a.jsxs("div",{className:"promo-cms-actions",children:[a.jsx("button",{className:`btn-action-icon ${m.active?"active":""}`,title:m.active?"Desactivar de portada":"Activar en portada",onClick:()=>o(m.id),children:m.active?a.jsx(Ud,{size:18}):a.jsx(Rd,{size:18})}),a.jsx("button",{className:"btn-action-icon delete",title:"Eliminar promoción",onClick:()=>c(m.id),children:a.jsx(ls,{size:18})})]})]},m.id))}),a.jsx("style",{children:`
        .promotions-manager-module {
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

        .mode-status-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid var(--accent-cyan);
          padding: 1.25rem 1.8rem;
        }

        .mode-status-banner h4 { font-size: 1.1rem; color: #FFF; margin-bottom: 0.2rem; }
        .mode-status-banner p { font-size: 0.88rem; color: var(--text-dark-secondary); }
        .gold-text { color: var(--accent-cyan); }

        .add-promo-form {
          border: 1px solid var(--accent-cyan);
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

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .promotions-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .promo-cms-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
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
        .btn-action-icon.delete:hover { border-color: var(--accent-red); color: var(--accent-red); }

        @media (max-width: 768px) {
          .header-action-btn { width: 100%; }
          .promo-cms-card { flex-direction: column; align-items: flex-start; }
          .promo-cms-img { width: 100%; height: 160px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})},oh=()=>{const{currentUser:e,users:t,createStaffAccount:n}=Pa(),[r,i]=N.useState(""),[l,s]=N.useState(""),[o,c]=N.useState(""),[d,m]=N.useState(null);if((e==null?void 0:e.role)!=="owner")return a.jsxs("div",{className:"glass-card access-denied",children:[a.jsx(Dt,{size:48,className:"icon-alert"}),a.jsx("h3",{children:"Acceso Restringido"}),a.jsx("p",{children:"Solo el propietario principal (Owner) tiene permisos para administrar usuarios y crear cuentas de staff."})]});const g=p=>{p.preventDefault(),m(null);const x=n({name:r,email:l,password:o});x.success?(m({type:"success",text:`Cuenta de staff creada con éxito para ${l}`}),i(""),s(""),c("")):m({type:"error",text:x.error})};return a.jsxs("div",{className:"user-management-module",children:[a.jsx("div",{className:"module-header",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Gestión de Usuarios y Roles (RBAC)"}),a.jsx("p",{children:"Crea cuentas de acceso para el personal (Staff) con permisos restringidos."})]})}),a.jsxs("div",{className:"user-management-grid",children:[a.jsxs("form",{onSubmit:g,className:"glass-card create-user-card",children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx(Pf,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Crear Nueva Cuenta de Staff"})]}),d&&a.jsxs("div",{className:`msg-banner ${d.type}`,children:[d.type==="success"&&a.jsx(ts,{size:16}),a.jsx("span",{children:d.text})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(ma,{size:16})," Nombre del Empleado *"]}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Marcos Pérez",value:r,onChange:p=>i(p.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(as,{size:16})," Correo Electrónico *"]}),a.jsx("input",{type:"email",required:!0,placeholder:"marcos@munchos.de",value:l,onChange:p=>s(p.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx($d,{size:16})," Contraseña de Acceso *"]}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:o,onChange:p=>c(p.target.value)})]}),a.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:a.jsx("span",{children:"Crear Cuenta Staff"})})]}),a.jsxs("div",{className:"glass-card users-list-card",children:[a.jsx("h3",{children:"Cuentas Registradas en la Plataforma"}),a.jsx("div",{className:"users-list",children:t.map((p,x)=>a.jsxs("div",{className:"user-item-card",children:[a.jsx("div",{className:"user-avatar",children:p.role==="owner"?a.jsx(Dt,{size:20,className:"icon-cyan"}):a.jsx(ma,{size:20})}),a.jsxs("div",{className:"user-details",children:[a.jsx("h4",{children:p.name}),a.jsx("span",{className:"user-email",children:p.email})]}),a.jsx("span",{className:`role-badge role-${p.role}`,children:p.role==="owner"?"Owner / Propietario":"Staff / Personal"})]},x))})]})]}),a.jsx("style",{children:`
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
      `})]})},ch=({isOpen:e,onClose:t,prefilledDate:n,onSave:r})=>{const[i,l]=N.useState({date:n||"",clientName:"",clientEmail:"",clientPhone:"",guests:20,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",status:"confirmed",estimatedTotal:960,location:"",notes:""});if(N.useEffect(()=>{n&&l(o=>({...o,date:n}))},[n]),!e)return null;const s=o=>{o.preventDefault(),r({...i,source:"manual",createdAt:new Date().toISOString()}),t()};return a.jsxs("div",{className:"modal-overlay",onClick:t,children:[a.jsxs("div",{className:"modal-container",onClick:o=>o.stopPropagation(),children:[a.jsx("button",{className:"modal-close-btn",onClick:t,children:a.jsx(Rt,{size:24})}),a.jsxs("h3",{className:"modal-title",children:[a.jsx("span",{className:"title-main-line",children:"Añadir Reserva Manual"}),a.jsx("span",{className:"title-sub-line",children:"(Teléfono / Email)"})]}),a.jsx("p",{className:"modal-subtitle",children:"Introduce los datos de la reserva aceptada directamente para actualizar el mapa de ocupación."}),a.jsxs("form",{onSubmit:s,className:"admin-form",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha del Evento *"}),a.jsx("input",{type:"date",required:!0,value:i.date,onChange:o=>l({...i,date:o.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Número de Invitados *"}),a.jsx("input",{type:"number",min:"10",max:"100",required:!0,value:i.guests,onChange:o=>l({...i,guests:parseInt(o.target.value)})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Nombre Completo del Cliente *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Dr. Schmidt",value:i.clientName,onChange:o=>l({...i,clientName:o.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Email *"}),a.jsx("input",{type:"email",required:!0,placeholder:"schmidt@example.de",value:i.clientEmail,onChange:o=>l({...i,clientEmail:o.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Teléfono *"}),a.jsx("input",{type:"tel",required:!0,placeholder:"+49 89 123456",value:i.clientPhone,onChange:o=>l({...i,clientPhone:o.target.value})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Menú Principal"}),a.jsxs("select",{value:i.menuType,onChange:o=>{const c=o.target.value;l({...i,menuType:c,menuName:{"sushi-fusion":"Fusión Nikkei (Sushi + Pinchos)","de-tapas":"Experiencia Pinchos & Tapas","full-experience":"Experiencia Completa MUNCHOS"}[c]||c})},children:[a.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei (Sushi + Pinchos)"}),a.jsx("option",{value:"de-tapas",children:"Experiencia Pinchos & Tapas"}),a.jsx("option",{value:"full-experience",children:"Experiencia Completa MUNCHOS"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Estado Inicial"}),a.jsxs("select",{value:i.status,onChange:o=>l({...i,status:o.target.value}),children:[a.jsx("option",{value:"confirmed",children:"Confirmada"}),a.jsx("option",{value:"pending",children:"Pendiente de pago"})]})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Precio Total Estimado (€)"}),a.jsx("input",{type:"number",value:i.estimatedTotal,onChange:o=>l({...i,estimatedTotal:parseFloat(o.target.value)})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Zona / Ubicación en Múnich"}),a.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen",value:i.location,onChange:o=>l({...i,location:o.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Notas Adicionales"}),a.jsx("textarea",{rows:"2",placeholder:"Detalles sobre vajilla, alergias, cocinero presencial...",value:i.notes,onChange:o=>l({...i,notes:o.target.value})})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[a.jsx(yt,{size:18}),a.jsx("span",{children:"Guardar Reserva Manual"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},dh=({onNavigateToPublic:e})=>{const{currentUser:t,logout:n}=Pa(),[r,i]=N.useState("calendar"),[l,s]=N.useState(ir()),[o,c]=N.useState(Zd()),[d,m]=N.useState(!1),[g,p]=N.useState(!1),[x,j]=N.useState(null),b=(y,w)=>{const S=Uf(y,w);s(S)},M=y=>{Kd(y),s(ir()),p(!1)},f=(y=null)=>{j(y),p(!0)},u=[{id:"calendar",label:"Calendario Mensual",icon:He},{id:"heatmap",label:"Mapa de Calor Anual",icon:Vd},{id:"reservations",label:"Lista de Reservas",icon:hf},{id:"analytics",label:"Analítica & Métricas",icon:Id,ownerOnly:!0},{id:"products",label:"CMS Tienda Gourmet",icon:ar,ownerOnly:!0},{id:"promotions",label:"CMS Banners Promo",icon:Gd,ownerOnly:!0},{id:"users",label:"Gestión Usuarios",icon:hn,ownerOnly:!0}],h=u.find(y=>y.id===r)||u[0],v=h.icon;return a.jsxs("div",{className:"admin-shell",children:[a.jsxs("header",{className:"admin-topbar",children:[a.jsxs("div",{className:"topbar-row-main",children:[a.jsxs("div",{className:"topbar-left",children:[a.jsx("a",{href:"#",onClick:e,className:"admin-logo-link",title:"Volver a la Web Pública",children:a.jsx("img",{src:"/images/logo.svg",alt:"MUNCHOS Admin",className:"admin-logo"})}),a.jsx("span",{className:"admin-badge-title",children:"PANEL CONTROL"})]}),a.jsxs("div",{className:"topbar-right",children:[a.jsxs("button",{className:"btn btn-secondary btn-sm nav-public-btn",onClick:e,children:[a.jsx(tf,{size:16}),a.jsx("span",{children:"Ver Web Pública"})]}),a.jsxs("div",{className:"user-profile-tag",children:[(t==null?void 0:t.role)==="owner"?a.jsx(Dt,{size:18,className:"icon-cyan"}):a.jsx(ma,{size:18}),a.jsx("span",{className:"user-name",children:t==null?void 0:t.name}),a.jsx("span",{className:`role-pill role-${t==null?void 0:t.role}`,children:(t==null?void 0:t.role)==="owner"?"Owner":"Staff"})]}),a.jsx("button",{className:"btn-logout",onClick:n,title:"Cerrar Sesión",children:a.jsx(gf,{size:18})})]})]}),a.jsxs("div",{className:"mobile-section-switcher",children:[a.jsxs("button",{className:"mobile-switcher-trigger",onClick:()=>m(!d),children:[a.jsxs("div",{className:"trigger-left",children:[a.jsx(v,{size:18,className:"icon-cyan"}),a.jsx("span",{className:"trigger-label",children:h.label})]}),a.jsx(sf,{size:18,className:`chevron ${d?"open":""}`})]}),d&&a.jsx("div",{className:"mobile-dropdown-menu",children:u.map(y=>{if(y.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const w=y.icon,S=r===y.id;return a.jsxs("button",{className:`mobile-dropdown-item ${S?"selected":""}`,onClick:()=>{i(y.id),m(!1)},children:[a.jsxs("div",{className:"item-left",children:[a.jsx(w,{size:18}),a.jsx("span",{children:y.label})]}),S&&a.jsx(lf,{size:16,className:"icon-cyan"})]},y.id)})})]})]}),a.jsxs("div",{className:"admin-body",children:[a.jsx("nav",{className:"admin-sidebar",children:u.map(y=>{if(y.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const w=y.icon;return a.jsxs("button",{className:`sidebar-link ${r===y.id?"active":""}`,onClick:()=>i(y.id),children:[a.jsx(w,{size:18}),a.jsx("span",{children:y.label})]},y.id)})}),a.jsxs("main",{className:"admin-content-area",children:[r==="calendar"&&a.jsx(nh,{reservations:l,capacitySettings:o,onUpdateStatus:b,onOpenAddModal:f}),r==="heatmap"&&a.jsx(rh,{reservations:l}),r==="reservations"&&a.jsx(ah,{reservations:l,onUpdateStatus:b,onOpenAddModal:f}),r==="analytics"&&(t==null?void 0:t.role)==="owner"&&a.jsx(ih,{reservations:l}),r==="products"&&(t==null?void 0:t.role)==="owner"&&a.jsx(lh,{}),r==="promotions"&&(t==null?void 0:t.role)==="owner"&&a.jsx(sh,{}),r==="users"&&(t==null?void 0:t.role)==="owner"&&a.jsx(oh,{})]})]}),a.jsx(ch,{isOpen:g,onClose:()=>p(!1),prefilledDate:x,onSave:M}),a.jsx("style",{children:`
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
          padding: 0.75rem 1.5rem;
          width: 100%;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .admin-logo-link {
          display: flex;
          align-items: center;
        }

        .admin-logo {
          height: 52px;
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
          gap: 0.85rem;
        }

        .user-profile-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(62, 193, 201, 0.3);
          padding: 0.4rem 0.85rem;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .user-name { font-weight: 600; color: #FFF; }

        .role-pill {
          font-size: 0.7rem;
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
          .admin-logo { height: 44px; }
          .admin-content-area { padding: 0.75rem; }
        }
      `})]})},uh=()=>{const{login:e}=Pa(),[t,n]=N.useState(""),[r,i]=N.useState(""),[l,s]=N.useState(""),o=d=>{d.preventDefault(),s("");const m=e(t,r);m.success||s(m.error)},c=(d,m)=>{n(d),i(m);const g=e(d,m);g.success||s(g.error)};return a.jsxs("div",{className:"admin-login-screen",children:[a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-header",children:[a.jsx("img",{src:"/images/logo.svg",alt:"MUNCHOS Admin",className:"login-logo"}),a.jsx("h2",{children:"Panel de Control MUNCHOS"}),a.jsx("p",{children:"Acceso restringido para propietarios y personal autorizado"})]}),l&&a.jsx("div",{className:"login-error-banner",children:l}),a.jsxs("form",{onSubmit:o,className:"login-form",children:[a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(as,{size:16})," Correo Electrónico:"]}),a.jsx("input",{type:"email",required:!0,placeholder:"propietario@munchos.de",value:t,onChange:d=>n(d.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx($d,{size:16})," Contraseña:"]}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:r,onChange:d=>i(d.target.value)})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[a.jsx(Bd,{size:18}),a.jsx("span",{children:"Iniciar Sesión en el Panel"})]})]}),a.jsxs("div",{className:"demo-shortcuts",children:[a.jsx("span",{className:"demo-label",children:"Accesos Directos de Prueba (Demostración):"}),a.jsxs("div",{className:"demo-buttons",children:[a.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("owner@munchos.de","owner"),children:[a.jsx(Dt,{size:16,className:"icon-cyan"}),a.jsx("span",{children:"Acceso Owner (Propietario)"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("staff@munchos.de","staff"),children:[a.jsx(ma,{size:16}),a.jsx("span",{children:"Acceso Staff (Personal)"})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})};function mh(){const{currentUser:e}=Pa(),[t,n]=N.useState(window.location.hash==="#admin"?"admin":"public"),[r,i]=N.useState(!1),[l,s]=N.useState(!1),[o,c]=N.useState([]),[d,m]=N.useState(null);N.useEffect(()=>{const f=()=>{window.location.hash==="#admin"?n("admin"):n("public")};return window.addEventListener("hashchange",f),()=>window.removeEventListener("hashchange",f)},[]);const g=f=>{c(u=>u.find(v=>v.id===f.id)?u.map(v=>v.id===f.id?{...v,quantity:v.quantity+1}:v):[...u,{...f,quantity:1}]),s(!0)},p=(f,u)=>{u<=0?x(f):c(h=>h.map(v=>v.id===f?{...v,quantity:u}:v))},x=f=>{c(u=>u.filter(h=>h.id!==f))},j=(f=null)=>{f&&m(f),i(!0)},b=f=>{const u=document.getElementById("personalizacion");u?u.scrollIntoView({behavior:"smooth"}):j()},M=o.reduce((f,u)=>f+u.quantity,0);return t==="admin"?e?a.jsx(dh,{onNavigateToPublic:()=>{window.location.hash="",n("public")}}):a.jsx(uh,{}):a.jsxs("div",{className:"munitxos-app",children:[a.jsx(Ff,{onOpenCart:()=>s(!0),cartCount:M,onOpenBooking:()=>j()}),a.jsx(_f,{onOpenBooking:()=>j()}),a.jsx(th,{}),a.jsx(Of,{}),a.jsx(Af,{onOpenBooking:()=>j()}),a.jsx(If,{onSelectMenuCategory:b}),a.jsx($f,{onSubmitBooking:f=>j(f)}),a.jsx(Bf,{}),a.jsx(Wf,{}),a.jsx(Gf,{}),a.jsx(qf,{onAddToCart:g,onOpenCart:()=>s(!0)}),a.jsx(Qf,{onOpenBooking:()=>j()}),a.jsx(Kf,{}),a.jsx(Yf,{onOpenBooking:()=>j()}),a.jsx(Zf,{isOpen:l,onClose:()=>s(!1),cartItems:o,onUpdateQuantity:p,onRemoveItem:x}),a.jsx(Xf,{isOpen:r,onClose:()=>i(!1),initialData:d})]})}function ph(){return a.jsx(Zp,{children:a.jsx(Yp,{children:a.jsx(mh,{})})})}ui.createRoot(document.getElementById("root")).render(a.jsx(hu.StrictMode,{children:a.jsx(ph,{})}));
