(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function du(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},ga={},Fl={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),uu=Symbol.for("react.portal"),mu=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),yu=Symbol.for("react.memo"),bu=Symbol.for("react.lazy"),yo=Symbol.iterator;function ku(e){return e===null||typeof e!="object"?null:(e=yo&&e[yo]||e["@@iterator"],typeof e=="function"?e:null)}var Il={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Al=Object.assign,Ll={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Ll,this.updater=n||Il}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rl(){}Rl.prototype=gn.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=Ll,this.updater=n||Il}var fs=hs.prototype=new Rl;fs.constructor=hs;Al(fs,gn.prototype);fs.isPureReactComponent=!0;var bo=Array.isArray,_l=Object.prototype.hasOwnProperty,gs={current:null},Dl={key:!0,ref:!0,__self:!0,__source:!0};function Bl(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)_l.call(t,r)&&!Dl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:sr,type:e,key:s,ref:o,props:i,_owner:gs.current}}function wu(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function ju(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ko=/\/+/g;function Ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ju(""+e.key):t.toString(36)}function Mr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case uu:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ba(o,0):r,bo(i)?(n="",e!=null&&(n=e.replace(ko,"$&/")+"/"),Mr(i,t,n,"",function(d){return d})):i!=null&&(vs(i)&&(i=wu(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ko,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bo(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ba(s,l);o+=Mr(s,t,n,c,i)}else if(c=ku(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ba(s,l++),o+=Mr(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Nu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Tr={transition:null},Su={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:gs};function Hl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=gn;A.Fragment=mu;A.Profiler=hu;A.PureComponent=hs;A.StrictMode=pu;A.Suspense=xu;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Su;A.act=Hl;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Al({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=gs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)_l.call(t,c)&&!Dl.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:sr,type:e.type,key:i,ref:s,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fu,_context:e},e.Consumer=e};A.createElement=Bl;A.createFactory=function(e){var t=Bl.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:vu,render:e}};A.isValidElement=vs;A.lazy=function(e){return{$$typeof:bu,_payload:{_status:-1,_result:e},_init:Nu}};A.memo=function(e,t){return{$$typeof:yu,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};A.unstable_act=Hl;A.useCallback=function(e,t){return pe.current.useCallback(e,t)};A.useContext=function(e){return pe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};A.useEffect=function(e,t){return pe.current.useEffect(e,t)};A.useId=function(){return pe.current.useId()};A.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return pe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};A.useRef=function(e){return pe.current.useRef(e)};A.useState=function(e){return pe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return pe.current.useTransition()};A.version="18.3.1";Fl.exports=A;var j=Fl.exports;const Cu=du(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu=j,Eu=Symbol.for("react.element"),Pu=Symbol.for("react.fragment"),Mu=Object.prototype.hasOwnProperty,Tu=zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ou={key:!0,ref:!0,__self:!0,__source:!0};function Gl(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Mu.call(t,r)&&!Ou.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Eu,type:e,key:s,ref:o,props:i,_owner:Tu.current}}ga.Fragment=Pu;ga.jsx=Gl;ga.jsxs=Gl;Ol.exports=ga;var a=Ol.exports,pi={},Ul={exports:{}},Ne={},Vl={exports:{}},$l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,O){var I=E.length;E.push(O);e:for(;0<I;){var K=I-1>>>1,J=E[K];if(0<i(J,O))E[K]=O,E[I]=J,I=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var O=E[0],I=E.pop();if(I!==O){E[0]=I;e:for(var K=0,J=E.length,ur=J>>>1;K<ur;){var Nt=2*(K+1)-1,Da=E[Nt],St=Nt+1,mr=E[St];if(0>i(Da,I))St<J&&0>i(mr,Da)?(E[K]=mr,E[St]=I,K=St):(E[K]=Da,E[Nt]=I,K=Nt);else if(St<J&&0>i(mr,I))E[K]=mr,E[St]=I,K=St;else break e}}return O}function i(E,O){var I=E.sortIndex-O.sortIndex;return I!==0?I:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],m=1,g=null,h=3,y=!1,x=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var O=n(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=E)r(d),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(d)}}function v(E){if(k=!1,p(E),!x)if(n(c)!==null)x=!0,Ra(b);else{var O=n(d);O!==null&&_a(v,O.startTime-E)}}function b(E,O){x=!1,k&&(k=!1,f(M),M=-1),y=!0;var I=h;try{for(p(O),g=n(c);g!==null&&(!(g.expirationTime>O)||E&&!de());){var K=g.callback;if(typeof K=="function"){g.callback=null,h=g.priorityLevel;var J=K(g.expirationTime<=O);O=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(c)&&r(c),p(O)}else r(c);g=n(c)}if(g!==null)var ur=!0;else{var Nt=n(d);Nt!==null&&_a(v,Nt.startTime-O),ur=!1}return ur}finally{g=null,h=I,y=!1}}var N=!1,S=null,M=-1,H=5,F=-1;function de(){return!(e.unstable_now()-F<H)}function T(){if(S!==null){var E=e.unstable_now();F=E;var O=!0;try{O=S(!0,E)}finally{O?G():(N=!1,S=null)}}else N=!1}var G;if(typeof u=="function")G=function(){u(T)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,La=jt.port2;jt.port1.onmessage=T,G=function(){La.postMessage(null)}}else G=function(){z(T,0)};function Ra(E){S=E,N||(N=!0,G())}function _a(E,O){M=z(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Ra(b))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var I=h;h=O;try{return E()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=h;h=E;try{return O()}finally{h=I}},e.unstable_scheduleCallback=function(E,O,I){var K=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,E={id:m++,callback:O,priorityLevel:E,startTime:I,expirationTime:J,sortIndex:-1},I>K?(E.sortIndex=I,t(d,E),n(c)===null&&E===n(d)&&(k?(f(M),M=-1):k=!0,_a(v,I-K))):(E.sortIndex=J,t(c,E),x||y||(x=!0,Ra(b))),E},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(E){var O=h;return function(){var I=h;h=O;try{return E.apply(this,arguments)}finally{h=I}}}})($l);Vl.exports=$l;var Fu=Vl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=j,je=Fu;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wl=new Set,Hn={};function Bt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Wl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hi=Object.prototype.hasOwnProperty,Au=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wo={},jo={};function Lu(e){return hi.call(jo,e)?!0:hi.call(wo,e)?!1:Au.test(e)?jo[e]=!0:(wo[e]=!0,!1)}function Ru(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _u(e,t,n,r){if(t===null||typeof t>"u"||Ru(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var xs=/[\-:]([a-z])/g;function ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xs,ys);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xs,ys);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xs,ys);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_u(t,n,i,r)&&(n=null),r||i===null?Lu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),ql=Symbol.for("react.provider"),Kl=Symbol.for("react.context"),ws=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Ql=Symbol.for("react.offscreen"),No=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=No&&e[No]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ha;function En(e){if(Ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ha=t&&t[1]||""}return`
`+Ha+e}var Ga=!1;function Ua(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function Du(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Ua(e.type,!1),e;case 11:return e=Ua(e.type.render,!1),e;case 1:return e=Ua(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ut:return"Portal";case fi:return"Profiler";case ks:return"StrictMode";case gi:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kl:return(e.displayName||"Context")+".Consumer";case ql:return(e._context.displayName||"Context")+".Provider";case ws:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:xi(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return xi(e(t))}catch{}}return null}function Bu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hu(e){var t=Yl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=Hu(e))}function Zl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function So(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xl(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function bi(e,t){Xl(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ki(e,t.type,n):t.hasOwnProperty("defaultValue")&&ki(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Co(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ki(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Pn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Jl(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gu=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Gu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function rc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uu=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(Uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zi=null,nn=null,rn=null;function Po(e){if(e=cr(e)){if(typeof zi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ka(t),zi(e.stateNode,e.type,t))}}function ac(e){nn?rn?rn.push(e):rn=[e]:nn=e}function ic(){if(nn){var e=nn,t=rn;if(rn=nn=null,Po(e),t)for(e=0;e<t.length;e++)Po(t[e])}}function sc(e,t){return e(t)}function oc(){}var Va=!1;function lc(e,t,n){if(Va)return e(t,n);Va=!0;try{return sc(e,t,n)}finally{Va=!1,(nn!==null||rn!==null)&&(oc(),ic())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ei=!1;if(Ye)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ei=!1}function Vu(e,t,n,r,i,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Fn=!1,Ur=null,Vr=!1,Pi=null,$u={onError:function(e){Fn=!0,Ur=e}};function Wu(e,t,n,r,i,s,o,l,c){Fn=!1,Ur=null,Vu.apply($u,arguments)}function qu(e,t,n,r,i,s,o,l,c){if(Wu.apply(this,arguments),Fn){if(Fn){var d=Ur;Fn=!1,Ur=null}else throw Error(w(198));Vr||(Vr=!0,Pi=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mo(e){if(Ht(e)!==e)throw Error(w(188))}function Ku(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mo(i),e;if(s===r)return Mo(i),t;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function dc(e){return e=Ku(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var mc=je.unstable_scheduleCallback,To=je.unstable_cancelCallback,Qu=je.unstable_shouldYield,Yu=je.unstable_requestPaint,Q=je.unstable_now,Zu=je.unstable_getCurrentPriorityLevel,Ss=je.unstable_ImmediatePriority,pc=je.unstable_UserBlockingPriority,$r=je.unstable_NormalPriority,Xu=je.unstable_LowPriority,hc=je.unstable_IdlePriority,va=null,Ge=null;function Ju(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var vr=64,xr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mn(l):(s&=o,s!==0&&(r=Mn(s)))}else o=n&~i,o!==0?r=Mn(o):s!==0&&(r=Mn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Le(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=rm(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function $a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vc,zs,xc,yc,bc,Ti=!1,yr=[],dt=null,ut=null,mt=null,Vn=new Map,$n=new Map,st=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oo(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function kn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&zs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function om(e,t,n,r,i){switch(t){case"focusin":return dt=kn(dt,e,t,n,r,i),!0;case"dragenter":return ut=kn(ut,e,t,n,r,i),!0;case"mouseover":return mt=kn(mt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vn.set(s,kn(Vn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$n.set(s,kn($n.get(s)||null,e,t,n,r,i)),!0}return!1}function kc(e){var t=Et(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,bc(e.priority,function(){xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ci=r,n.target.dispatchEvent(r),Ci=null}else return t=cr(n),t!==null&&zs(t),e.blockedOn=n,!1;t.shift()}return!0}function Fo(e,t,n){Or(e)&&n.delete(t)}function lm(){Ti=!1,dt!==null&&Or(dt)&&(dt=null),ut!==null&&Or(ut)&&(ut=null),mt!==null&&Or(mt)&&(mt=null),Vn.forEach(Fo),$n.forEach(Fo)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ti||(Ti=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,lm)))}function Wn(e){function t(i){return wn(i,e)}if(0<yr.length){wn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&wn(dt,e),ut!==null&&wn(ut,e),mt!==null&&wn(mt,e),Vn.forEach(t),$n.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)kc(n),n.blockedOn===null&&st.shift()}var an=tt.ReactCurrentBatchConfig,qr=!0;function cm(e,t,n,r){var i=R,s=an.transition;an.transition=null;try{R=1,Es(e,t,n,r)}finally{R=i,an.transition=s}}function dm(e,t,n,r){var i=R,s=an.transition;an.transition=null;try{R=4,Es(e,t,n,r)}finally{R=i,an.transition=s}}function Es(e,t,n,r){if(qr){var i=Oi(e,t,n,r);if(i===null)ti(e,t,r,Kr,n),Oo(e,r);else if(om(i,e,t,n,r))r.stopPropagation();else if(Oo(e,r),t&4&&-1<sm.indexOf(e)){for(;i!==null;){var s=cr(i);if(s!==null&&vc(s),s=Oi(e,t,n,r),s===null&&ti(e,t,r,Kr,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ti(e,t,r,null,n)}}var Kr=null;function Oi(e,t,n,r){if(Kr=null,e=Ns(r),e=Et(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zu()){case Ss:return 1;case pc:return 4;case $r:case Xu:return 16;case hc:return 536870912;default:return 16}default:return 16}}var lt=null,Ps=null,Fr=null;function jc(){if(Fr)return Fr;var e,t=Ps,n=t.length,r,i="value"in lt?lt.value:lt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Io(){return!1}function Se(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?br:Io,this.isPropagationStopped=Io,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=Se(vn),lr=W({},vn,{view:0,detail:0}),um=Se(lr),Wa,qa,jn,xa=W({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Wa=e.screenX-jn.screenX,qa=e.screenY-jn.screenY):qa=Wa=0,jn=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),Ao=Se(xa),mm=W({},xa,{dataTransfer:0}),pm=Se(mm),hm=W({},lr,{relatedTarget:0}),Ka=Se(hm),fm=W({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=Se(fm),vm=W({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=Se(vm),ym=W({},vn,{data:0}),Lo=Se(ym),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function Ts(){return jm}var Nm=W({},lr,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sm=Se(Nm),Cm=W({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Se(Cm),zm=W({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),Em=Se(zm),Pm=W({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=Se(Pm),Tm=W({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Se(Tm),Fm=[9,13,27,32],Os=Ye&&"CompositionEvent"in window,In=null;Ye&&"documentMode"in document&&(In=document.documentMode);var Im=Ye&&"TextEvent"in window&&!In,Nc=Ye&&(!Os||In&&8<In&&11>=In),_o=String.fromCharCode(32),Do=!1;function Sc(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Am(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(Do=!0,_o);case"textInput":return e=t.data,e===_o&&Do?null:e;default:return null}}function Lm(e,t){if($t)return e==="compositionend"||!Os&&Sc(e,t)?(e=jc(),Fr=Ps=lt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function zc(e,t,n,r){ac(r),t=Qr(t,"onChange"),0<t.length&&(n=new Ms("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,qn=null;function _m(e){_c(e,0)}function ya(e){var t=Kt(e);if(Zl(t))return e}function Dm(e,t){if(e==="change")return t}var Ec=!1;if(Ye){var Qa;if(Ye){var Ya="oninput"in document;if(!Ya){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),Ya=typeof Ho.oninput=="function"}Qa=Ya}else Qa=!1;Ec=Qa&&(!document.documentMode||9<document.documentMode)}function Go(){An&&(An.detachEvent("onpropertychange",Pc),qn=An=null)}function Pc(e){if(e.propertyName==="value"&&ya(qn)){var t=[];zc(t,qn,e,Ns(e)),lc(_m,t)}}function Bm(e,t,n){e==="focusin"?(Go(),An=t,qn=n,An.attachEvent("onpropertychange",Pc)):e==="focusout"&&Go()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(qn)}function Gm(e,t){if(e==="click")return ya(t)}function Um(e,t){if(e==="input"||e==="change")return ya(t)}function Vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Vm;function Kn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hi.call(t,i)||!_e(e[i],t[i]))return!1}return!0}function Uo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vo(e,t){var n=Uo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uo(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $m(e){var t=Tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&Fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Vo(n,s);var o=Vo(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wm=Ye&&"documentMode"in document&&11>=document.documentMode,Wt=null,Fi=null,Ln=null,Ii=!1;function $o(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ii||Wt==null||Wt!==Gr(r)||(r=Wt,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ln&&Kn(Ln,r)||(Ln=r,r=Qr(Fi,"onSelect"),0<r.length&&(t=new Ms("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Za={},Oc={};Ye&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function ba(e){if(Za[e])return Za[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oc)return Za[e]=t[n];return e}var Fc=ba("animationend"),Ic=ba("animationiteration"),Ac=ba("animationstart"),Lc=ba("transitionend"),Rc=new Map,Wo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Rc.set(e,t),Bt(t,[e])}for(var Xa=0;Xa<Wo.length;Xa++){var Ja=Wo[Xa],qm=Ja.toLowerCase(),Km=Ja[0].toUpperCase()+Ja.slice(1);bt(qm,"on"+Km)}bt(Fc,"onAnimationEnd");bt(Ic,"onAnimationIteration");bt(Ac,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Lc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function qo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qu(r,t,void 0,e),e.currentTarget=null}function _c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;qo(i,l,d),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;qo(i,l,d),s=c}}}if(Vr)throw e=Pi,Vr=!1,Pi=null,e}function D(e,t){var n=t[Di];n===void 0&&(n=t[Di]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[wr]){e[wr]=!0,Wl.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||ei(n,!1,e),ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,ei("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(wc(t)){case 1:var i=cm;break;case 4:i=dm;break;default:i=Es}n=i.bind(null,t,n,e),i=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ti(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Et(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lc(function(){var d=s,m=Ns(n),g=[];e:{var h=Rc.get(e);if(h!==void 0){var y=Ms,x=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":y=Sm;break;case"focusin":x="focus",y=Ka;break;case"focusout":x="blur",y=Ka;break;case"beforeblur":case"afterblur":y=Ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Em;break;case Fc:case Ic:case Ac:y=gm;break;case Lc:y=Mm;break;case"scroll":y=um;break;case"wheel":y=Om;break;case"copy":case"cut":case"paste":y=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ro}var k=(t&4)!==0,z=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var u=d,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Un(u,f),v!=null&&k.push(Yn(u,v,p)))),z)break;u=u.return}0<k.length&&(h=new y(h,x,null,n,m),g.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ci&&(x=n.relatedTarget||n.fromElement)&&(Et(x)||x[Ze]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Et(x):null,x!==null&&(z=Ht(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(k=Ao,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ro,v="onPointerLeave",f="onPointerEnter",u="pointer"),z=y==null?h:Kt(y),p=x==null?h:Kt(x),h=new k(v,u+"leave",y,n,m),h.target=z,h.relatedTarget=p,v=null,Et(m)===d&&(k=new k(f,u+"enter",x,n,m),k.target=p,k.relatedTarget=z,v=k),z=v,y&&x)t:{for(k=y,f=x,u=0,p=k;p;p=Gt(p))u++;for(p=0,v=f;v;v=Gt(v))p++;for(;0<u-p;)k=Gt(k),u--;for(;0<p-u;)f=Gt(f),p--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break t;k=Gt(k),f=Gt(f)}k=null}else k=null;y!==null&&Ko(g,h,y,k,!1),x!==null&&z!==null&&Ko(g,z,x,k,!0)}}e:{if(h=d?Kt(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var b=Dm;else if(Bo(h))if(Ec)b=Um;else{b=Hm;var N=Bm}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Gm);if(b&&(b=b(e,d))){zc(g,b,n,m);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ki(h,"number",h.value)}switch(N=d?Kt(d):window,e){case"focusin":(Bo(N)||N.contentEditable==="true")&&(Wt=N,Fi=d,Ln=null);break;case"focusout":Ln=Fi=Wt=null;break;case"mousedown":Ii=!0;break;case"contextmenu":case"mouseup":case"dragend":Ii=!1,$o(g,n,m);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":$o(g,n,m)}var S;if(Os)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $t?Sc(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Nc&&n.locale!=="ko"&&($t||M!=="onCompositionStart"?M==="onCompositionEnd"&&$t&&(S=jc()):(lt=m,Ps="value"in lt?lt.value:lt.textContent,$t=!0)),N=Qr(d,M),0<N.length&&(M=new Lo(M,e,null,n,m),g.push({event:M,listeners:N}),S?M.data=S:(S=Cc(n),S!==null&&(M.data=S)))),(S=Im?Am(e,n):Lm(e,n))&&(d=Qr(d,"onBeforeInput"),0<d.length&&(m=new Lo("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=S))}_c(g,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Un(e,n),s!=null&&r.unshift(Yn(e,s,i)),s=Un(e,t),s!=null&&r.push(Yn(e,s,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ko(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Un(n,s),c!=null&&o.unshift(Yn(n,c,l))):i||(c=Un(n,s),c!=null&&o.push(Yn(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ym=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Qo(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Zm,"")}function jr(e,t,n){if(t=Qo(t),Qo(e)!==t&&n)throw Error(w(425))}function Yr(){}var Ai=null,Li=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,Yo=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Yo<"u"?function(e){return Yo.resolve(null).then(e).catch(ep)}:_i;function ep(e){setTimeout(function(){throw e})}function ni(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),He="__reactFiber$"+xn,Zn="__reactProps$"+xn,Ze="__reactContainer$"+xn,Di="__reactEvents$"+xn,tp="__reactListeners$"+xn,np="__reactHandles$"+xn;function Et(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zo(e);e!==null;){if(n=e[He])return n;e=Zo(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ka(e){return e[Zn]||null}var Bi=[],Qt=-1;function kt(e){return{current:e}}function B(e){0>Qt||(e.current=Bi[Qt],Bi[Qt]=null,Qt--)}function _(e,t){Qt++,Bi[Qt]=e.current,e.current=t}var yt={},le=kt(yt),ve=kt(!1),Ft=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Zr(){B(ve),B(le)}function Xo(e,t,n){if(le.current!==yt)throw Error(w(168));_(le,t),_(ve,n)}function Bc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Bu(e)||"Unknown",i));return W({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Ft=le.current,_(le,e),_(ve,ve.current),!0}function Jo(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Bc(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(le),_(le,e)):B(ve),_(ve,n)}var We=null,wa=!1,ri=!1;function Hc(e){We===null?We=[e]:We.push(e)}function rp(e){wa=!0,Hc(e)}function wt(){if(!ri&&We!==null){ri=!0;var e=0,t=R;try{var n=We;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,wa=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),mc(Ss,wt),i}finally{R=t,ri=!1}}return null}var Yt=[],Zt=0,Jr=null,ea=0,Ce=[],ze=0,It=null,qe=1,Ke="";function Ct(e,t){Yt[Zt++]=ea,Yt[Zt++]=Jr,Jr=e,ea=t}function Gc(e,t,n){Ce[ze++]=qe,Ce[ze++]=Ke,Ce[ze++]=It,It=e;var r=qe;e=Ke;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var s=32-Le(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qe=1<<32-Le(t)+i|n<<i|r,Ke=s+e}else qe=1<<s|n<<i|r,Ke=e}function Is(e){e.return!==null&&(Ct(e,1),Gc(e,1,0))}function As(e){for(;e===Jr;)Jr=Yt[--Zt],Yt[Zt]=null,ea=Yt[--Zt],Yt[Zt]=null;for(;e===It;)It=Ce[--ze],Ce[ze]=null,Ke=Ce[--ze],Ce[ze]=null,qe=Ce[--ze],Ce[ze]=null}var we=null,ke=null,U=!1,Ae=null;function Uc(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function el(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:qe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(U){var t=ke;if(t){var n=t;if(!el(e,t)){if(Hi(e))throw Error(w(418));t=pt(n.nextSibling);var r=we;t&&el(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Hi(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Nr(e){if(e!==we)return!1;if(!U)return tl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=ke)){if(Hi(e))throw Vc(),Error(w(418));for(;t;)Uc(e,t),t=pt(t.nextSibling)}if(tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?pt(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=ke;e;)e=pt(e.nextSibling)}function dn(){ke=we=null,U=!1}function Ls(e){Ae===null?Ae=[e]:Ae.push(e)}var ap=tt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nl(e){var t=e._init;return t(e._payload)}function $c(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=vt(f,u),f.index=0,f.sibling=null,f}function s(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,p,v){return u===null||u.tag!==6?(u=di(p,f.mode,v),u.return=f,u):(u=i(u,p),u.return=f,u)}function c(f,u,p,v){var b=p.type;return b===Vt?m(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===at&&nl(b)===u.type)?(v=i(u,p.props),v.ref=Nn(f,u,p),v.return=f,v):(v=Hr(p.type,p.key,p.props,null,f.mode,v),v.ref=Nn(f,u,p),v.return=f,v)}function d(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ui(p,f.mode,v),u.return=f,u):(u=i(u,p.children||[]),u.return=f,u)}function m(f,u,p,v,b){return u===null||u.tag!==7?(u=Ot(p,f.mode,v,b),u.return=f,u):(u=i(u,p),u.return=f,u)}function g(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=di(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case hr:return p=Hr(u.type,u.key,u.props,null,f.mode,p),p.ref=Nn(f,null,u),p.return=f,p;case Ut:return u=ui(u,f.mode,p),u.return=f,u;case at:var v=u._init;return g(f,v(u._payload),p)}if(Pn(u)||yn(u))return u=Ot(u,f.mode,p,null),u.return=f,u;Sr(f,u)}return null}function h(f,u,p,v){var b=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===b?c(f,u,p,v):null;case Ut:return p.key===b?d(f,u,p,v):null;case at:return b=p._init,h(f,u,b(p._payload),v)}if(Pn(p)||yn(p))return b!==null?null:m(f,u,p,v,null);Sr(f,p)}return null}function y(f,u,p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,l(u,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,c(u,f,v,b);case Ut:return f=f.get(v.key===null?p:v.key)||null,d(u,f,v,b);case at:var N=v._init;return y(f,u,p,N(v._payload),b)}if(Pn(v)||yn(v))return f=f.get(p)||null,m(u,f,v,b,null);Sr(u,v)}return null}function x(f,u,p,v){for(var b=null,N=null,S=u,M=u=0,H=null;S!==null&&M<p.length;M++){S.index>M?(H=S,S=null):H=S.sibling;var F=h(f,S,p[M],v);if(F===null){S===null&&(S=H);break}e&&S&&F.alternate===null&&t(f,S),u=s(F,u,M),N===null?b=F:N.sibling=F,N=F,S=H}if(M===p.length)return n(f,S),U&&Ct(f,M),b;if(S===null){for(;M<p.length;M++)S=g(f,p[M],v),S!==null&&(u=s(S,u,M),N===null?b=S:N.sibling=S,N=S);return U&&Ct(f,M),b}for(S=r(f,S);M<p.length;M++)H=y(S,f,M,p[M],v),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?M:H.key),u=s(H,u,M),N===null?b=H:N.sibling=H,N=H);return e&&S.forEach(function(de){return t(f,de)}),U&&Ct(f,M),b}function k(f,u,p,v){var b=yn(p);if(typeof b!="function")throw Error(w(150));if(p=b.call(p),p==null)throw Error(w(151));for(var N=b=null,S=u,M=u=0,H=null,F=p.next();S!==null&&!F.done;M++,F=p.next()){S.index>M?(H=S,S=null):H=S.sibling;var de=h(f,S,F.value,v);if(de===null){S===null&&(S=H);break}e&&S&&de.alternate===null&&t(f,S),u=s(de,u,M),N===null?b=de:N.sibling=de,N=de,S=H}if(F.done)return n(f,S),U&&Ct(f,M),b;if(S===null){for(;!F.done;M++,F=p.next())F=g(f,F.value,v),F!==null&&(u=s(F,u,M),N===null?b=F:N.sibling=F,N=F);return U&&Ct(f,M),b}for(S=r(f,S);!F.done;M++,F=p.next())F=y(S,f,M,F.value,v),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?M:F.key),u=s(F,u,M),N===null?b=F:N.sibling=F,N=F);return e&&S.forEach(function(T){return t(f,T)}),U&&Ct(f,M),b}function z(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var b=p.key,N=u;N!==null;){if(N.key===b){if(b=p.type,b===Vt){if(N.tag===7){n(f,N.sibling),u=i(N,p.props.children),u.return=f,f=u;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===at&&nl(b)===N.type){n(f,N.sibling),u=i(N,p.props),u.ref=Nn(f,N,p),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Vt?(u=Ot(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=Hr(p.type,p.key,p.props,null,f.mode,v),v.ref=Nn(f,u,p),v.return=f,f=v)}return o(f);case Ut:e:{for(N=p.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=i(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ui(p,f.mode,v),u.return=f,f=u}return o(f);case at:return N=p._init,z(f,u,N(p._payload),v)}if(Pn(p))return x(f,u,p,v);if(yn(p))return k(f,u,p,v);Sr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,p),u.return=f,f=u):(n(f,u),u=di(p,f.mode,v),u.return=f,f=u),o(f)):n(f,u)}return z}var un=$c(!0),Wc=$c(!1),ta=kt(null),na=null,Xt=null,Rs=null;function _s(){Rs=Xt=na=null}function Ds(e){var t=ta.current;B(ta),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){na=e,Rs=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(na===null)throw Error(w(308));Xt=e,na.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Pt=null;function Bs(e){Pt===null?Pt=[e]:Pt.push(e)}function qc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Bs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}function rl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;it=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;o=0,m=d=c=null,l=s;do{var h=l.lane,y=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,k=l;switch(h=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){g=x.call(y,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(y,g,h):x,h==null)break e;g=W({},g,h);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=y,c=g):m=m.next=y,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(m===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=g}}function al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var dr={},Ue=kt(dr),Xn=kt(dr),Jn=kt(dr);function Mt(e){if(e===dr)throw Error(w(174));return e}function Gs(e,t){switch(_(Jn,t),_(Xn,e),_(Ue,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ji(t,e)}B(Ue),_(Ue,t)}function mn(){B(Ue),B(Xn),B(Jn)}function Qc(e){Mt(Jn.current);var t=Mt(Ue.current),n=ji(t,e.type);t!==n&&(_(Xn,e),_(Ue,n))}function Us(e){Xn.current===e&&(B(Ue),B(Xn))}var V=kt(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function Vs(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var Lr=tt.ReactCurrentDispatcher,ii=tt.ReactCurrentBatchConfig,At=0,$=null,Z=null,ee=null,ia=!1,Rn=!1,er=0,ip=0;function ie(){throw Error(w(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function Ws(e,t,n,r,i,s){if(At=s,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?cp:dp,e=n(r,i),Rn){s=0;do{if(Rn=!1,er=0,25<=s)throw Error(w(301));s+=1,ee=Z=null,t.updateQueue=null,Lr.current=up,e=n(r,i)}while(Rn)}if(Lr.current=sa,t=Z!==null&&Z.next!==null,At=0,ee=Z=$=null,ia=!1,t)throw Error(w(300));return e}function qs(){var e=er!==0;return er=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(Z===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?$.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?$.memoizedState=ee=e:ee=ee.next=e}return ee}function tr(e,t){return typeof t=="function"?t(e):t}function si(e){var t=Te(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,d=s;do{var m=d.lane;if((At&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=g,o=r):c=c.next=g,$.lanes|=m,Lt|=m}d=d.next}while(d!==null&&d!==s);c===null?o=r:c.next=l,_e(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,$.lanes|=s,Lt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=Te(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);_e(s,t.memoizedState)||(ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Yc(){}function Zc(e,t){var n=$,r=Te(),i=t(),s=!_e(r.memoizedState,i);if(s&&(r.memoizedState=i,ge=!0),r=r.queue,Ks(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,nr(9,Jc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(w(349));At&30||Xc(n,t,i)}return i}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function nd(e){var t=Xe(e,1);t!==null&&Re(t,e,1,-1)}function il(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,$,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return Te().memoizedState}function Rr(e,t,n,r){var i=Be();$.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var i=Te();r=r===void 0?null:r;var s=void 0;if(Z!==null){var o=Z.memoizedState;if(s=o.destroy,r!==null&&$s(r,o.deps)){i.memoizedState=nr(t,n,s,r);return}}$.flags|=e,i.memoizedState=nr(1|t,n,s,r)}function sl(e,t){return Rr(8390656,8,e,t)}function Ks(e,t){return ja(2048,8,e,t)}function ad(e,t){return ja(4,2,e,t)}function id(e,t){return ja(4,4,e,t)}function sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,sd.bind(null,t,e),n)}function Qs(){}function ld(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cd(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dd(e,t,n){return At&21?(_e(n,t)||(n=fc(),$.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function sp(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),t()}finally{R=n,ii.transition=r}}function ud(){return Te().memoizedState}function op(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},md(e))pd(t,n);else if(n=qc(e,t,n,r),n!==null){var i=me();Re(n,e,r,i),hd(n,t,r)}}function lp(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(md(e))pd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_e(l,o)){var c=t.interleaved;c===null?(i.next=i,Bs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=qc(e,t,i,r),n!==null&&(i=me(),Re(n,e,r,i),hd(n,t,r))}}function md(e){var t=e.alternate;return e===$||t!==null&&t===$}function pd(e,t){Rn=ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}var sa={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},cp={readContext:Me,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=op.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:il,useDebugValue:Qs,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=il(!1),t=e[0];return e=sp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Be();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));At&30||Xc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,sl(ed.bind(null,r,s,e),[e]),r.flags|=2048,nr(9,Jc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(U){var n=Ke,r=qe;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:Me,useCallback:ld,useContext:Me,useEffect:Ks,useImperativeHandle:od,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:si,useRef:rd,useState:function(){return si(tr)},useDebugValue:Qs,useDeferredValue:function(e){var t=Te();return dd(t,Z.memoizedState,e)},useTransition:function(){var e=si(tr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Zc,useId:ud,unstable_isNewReconciler:!1},up={readContext:Me,useCallback:ld,useContext:Me,useEffect:Ks,useImperativeHandle:od,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:oi,useRef:rd,useState:function(){return oi(tr)},useDebugValue:Qs,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:dd(t,Z.memoizedState,e)},useTransition:function(){var e=oi(tr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Zc,useId:ud,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Na={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=gt(e),s=Qe(r,i);s.payload=t,n!=null&&(s.callback=n),t=ht(e,s,i),t!==null&&(Re(t,e,i,r),Ar(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=gt(e),s=Qe(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ht(e,s,i),t!==null&&(Re(t,e,i,r),Ar(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=gt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Re(t,e,r,n),Ar(t,e,r))}};function ol(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,s):!0}function fd(e,t,n){var r=!1,i=yt,s=t.contextType;return typeof s=="object"&&s!==null?s=Me(s):(i=xe(t)?Ft:le.current,r=t.contextTypes,s=(r=r!=null)?cn(e,i):yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ll(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Na.enqueueReplaceState(t,t.state,null)}function $i(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Me(s):(s=xe(t)?Ft:le.current,i.context=cn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vi(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Na.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Du(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){la||(la=!0,ns=r),Wi(e,t)},n}function vd(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function cl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cp.bind(null,e,t,n),t.then(e,e))}function dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ul(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var pp=tt.ReactCurrentOwner,ge=!1;function ue(e,t,n,r){t.child=e===null?Wc(t,null,n,r):un(t,e.child,n,r)}function ml(e,t,n,r,i){n=n.render;var s=t.ref;return sn(t,i),r=Ws(e,t,n,r,s,i),n=qs(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&n&&Is(t),t.flags|=1,ue(e,t,r,i),t.child)}function pl(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ro(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,xd(e,t,s,r,i)):(e=Hr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=vt(s,r),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Kn(s,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,Je(e,t,i)}return qi(e,t,n,r,i)}function yd(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(en,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(en,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_(en,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,_(en,be),be|=r;return ue(e,t,i,n),t.child}function bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,i){var s=xe(n)?Ft:le.current;return s=cn(t,s),sn(t,i),n=Ws(e,t,n,r,s,i),r=qs(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(U&&r&&Is(t),t.flags|=1,ue(e,t,n,i),t.child)}function hl(e,t,n,r,i){if(xe(n)){var s=!0;Xr(t)}else s=!1;if(sn(t,i),t.stateNode===null)_r(e,t),fd(t,n,r),$i(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=xe(n)?Ft:le.current,d=cn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&ll(t,o,r,d),it=!1;var h=t.memoizedState;o.state=h,ra(t,r,o,i),c=t.memoizedState,l!==r||h!==c||ve.current||it?(typeof m=="function"&&(Vi(t,n,m,r),c=t.memoizedState),(l=it||ol(t,n,l,r,h,c,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Kc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Fe(t.type,l),o.props=d,g=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Me(c):(c=xe(n)?Ft:le.current,c=cn(t,c));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||h!==c)&&ll(t,o,r,c),it=!1,h=t.memoizedState,o.state=h,ra(t,r,o,i);var x=t.memoizedState;l!==g||h!==x||ve.current||it?(typeof y=="function"&&(Vi(t,n,y,r),x=t.memoizedState),(d=it||ol(t,n,d,r,h,x,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ki(e,t,n,r,s,i)}function Ki(e,t,n,r,i,s){bd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Jo(t,n,!1),Je(e,t,s);r=t.stateNode,pp.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,s),t.child=un(t,null,l,s)):ue(e,t,l,s),t.memoizedState=r.state,i&&Jo(t,n,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?Xo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xo(e,t.context,!1),Gs(e,t.containerInfo)}function fl(e,t,n,r,i){return dn(),Ls(i),t.flags|=256,ue(e,t,n,r),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function wd(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(V,i&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=za(o,r,0,null),e=Ot(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Yi(n),t.memoizedState=Qi,e):Ys(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hp(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=vt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vt(l,s):(s=Ot(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Yi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Qi,r}return s=e.child,e=s.sibling,r=vt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&Ls(r),un(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=li(Error(w(422))),Cr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=za({mode:"visible",children:r.children},i,0,null),s=Ot(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Yi(o),t.memoizedState=Qi,s);if(!(t.mode&1))return Cr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=li(s,r,void 0),Cr(e,t,o,r)}if(l=(o&e.childLanes)!==0,ge||l){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xe(e,i),Re(r,e,i,-1))}return no(),r=li(Error(w(421))),Cr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ke=pt(i.nextSibling),we=t,U=!0,Ae=null,e!==null&&(Ce[ze++]=qe,Ce[ze++]=Ke,Ce[ze++]=It,qe=e.id,Ke=e.overflow,It=t),t=Ys(t,r.children),t.flags|=4096,t)}function gl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function ci(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,n,t);else if(e.tag===19)gl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ci(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ci(t,!0,n,null,s);break;case"together":ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fp(e,t,n){switch(t.tag){case 3:kd(t),dn();break;case 5:Qc(t);break;case 1:xe(t.type)&&Xr(t);break;case 4:Gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?wd(e,t,n):(_(V,V.current&1),e=Je(e,t,n),e!==null?e.sibling:null);_(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return Je(e,t,n)}var Nd,Zi,Sd,Cd;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zi=function(){};Sd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mt(Ue.current);var s=null;switch(n){case"input":i=yi(e,i),r=yi(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=wi(e,i),r=wi(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}Ni(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&D("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Cd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return xe(t.type)&&Zr(),se(t),null;case 3:return r=t.stateNode,mn(),B(ve),B(le),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(is(Ae),Ae=null))),Zi(e,t),se(t),null;case 5:Us(t);var i=Mt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Sd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Mt(Ue.current),Nr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[He]=t,r[Zn]=s,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)D(Tn[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":So(r,s),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},D("invalid",r);break;case"textarea":zo(r,s),D("invalid",r)}Ni(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&jr(r.textContent,l,e),i=["children",""+l]):Hn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":fr(r),Co(r,s,!0);break;case"textarea":fr(r),Eo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ec(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[Zn]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Si(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)D(Tn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":So(e,r),i=yi(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":zo(e,r),i=wi(e,r),D("invalid",e);break;default:i=r}Ni(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?rc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gn(e,c):typeof c=="number"&&Gn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&D("scroll",e):c!=null&&bs(e,s,c,o))}switch(n){case"input":fr(e),Co(e,r,!1);break;case"textarea":fr(e),Eo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tn(e,!!r.multiple,s,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Mt(Jn.current),Mt(Ue.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(s=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ke!==null&&t.mode&1&&!(t.flags&128))Vc(),dn(),t.flags|=98560,s=!1;else if(s=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[He]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),s=!1}else Ae!==null&&(is(Ae),Ae=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):no())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return mn(),Zi(e,t),e===null&&Qn(t.stateNode.containerInfo),se(t),null;case 10:return Ds(t.type._context),se(t),null;case 17:return xe(t.type)&&Zr(),se(t),null;case 19:if(B(V),s=t.memoizedState,s===null)return se(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Sn(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=aa(e),o!==null){for(t.flags|=128,Sn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>hn&&(t.flags|=128,r=!0,Sn(s,!1),t.lanes=4194304)}else{if(!r)if(e=aa(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return se(t),null}else 2*Q()-s.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=V.current,_(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return to(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function vp(e,t){switch(As(t),t.tag){case 1:return xe(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),B(ve),B(le),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Us(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return mn(),null;case 10:return Ds(t.type._context),null;case 22:case 23:return to(),null;case 24:return null;default:return null}}var zr=!1,oe=!1,xp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Xi(e,t,n){try{n()}catch(r){q(e,t,r)}}var vl=!1;function yp(e,t){if(Ai=qr,e=Tc(),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,m=0,g=e,h=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++d===i&&(l=o),h===s&&++m===r&&(c=o),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,z=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Fe(t.type,k),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=vl,vl=!1,x}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xi(t,n,s)}i=i.next}while(i!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Zn],delete t[Di],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function xl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var ne=null,Ie=!1;function rt(e,t,n){for(n=n.child;n!==null;)Pd(e,t,n),n=n.sibling}function Pd(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:oe||Jt(n,t);case 6:var r=ne,i=Ie;ne=null,rt(e,t,n),ne=r,Ie=i,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?ni(e.parentNode,n):e.nodeType===1&&ni(e,n),Wn(e)):ni(ne,n.stateNode));break;case 4:r=ne,i=Ie,ne=n.stateNode.containerInfo,Ie=!0,rt(e,t,n),ne=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xi(n,t,o),i=i.next}while(i!==r)}rt(e,t,n);break;case 1:if(!oe&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,rt(e,t,n),oe=r):rt(e,t,n);break;default:rt(e,t,n)}}function yl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var i=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Ie=!1;break e;case 3:ne=l.stateNode.containerInfo,Ie=!0;break e;case 4:ne=l.stateNode.containerInfo,Ie=!0;break e}l=l.return}if(ne===null)throw Error(w(160));Pd(s,o,i),ne=null,Ie=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),De(e),r&4){try{_n(3,e,e.return),Sa(3,e)}catch(k){q(e,e.return,k)}try{_n(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Oe(t,e),De(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Oe(t,e),De(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{Gn(i,"")}catch(k){q(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xl(i,s),Si(l,o);var d=Si(l,s);for(o=0;o<c.length;o+=2){var m=c[o],g=c[o+1];m==="style"?rc(i,g):m==="dangerouslySetInnerHTML"?tc(i,g):m==="children"?Gn(i,g):bs(i,m,g,d)}switch(l){case"input":bi(i,s);break;case"textarea":Jl(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?tn(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?tn(i,!!s.multiple,s.defaultValue,!0):tn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zn]=s}catch(k){q(e,e.return,k)}}break;case 6:if(Oe(t,e),De(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(k){q(e,e.return,k)}}break;case 3:if(Oe(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Oe(t,e),De(e);break;case 13:Oe(t,e),De(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Js=Q())),r&4&&yl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||m,Oe(t,e),oe=d):Oe(t,e),De(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(g=C=m;C!==null;){switch(h=C,y=h.child,h.tag){case 0:case 11:case 14:case 15:_n(4,h,h.return);break;case 1:Jt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){q(r,n,k)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){kl(g);continue}}y!==null?(y.return=h,C=y):kl(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nc("display",o))}catch(k){q(e,e.return,k)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){q(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),De(e),r&4&&yl(e);break;case 21:break;default:Oe(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gn(i,""),r.flags&=-33);var s=xl(e);ts(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xl(e);es(e,l,o);break;default:throw Error(w(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e,t,n){C=e,Td(e)}function Td(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zr;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||oe;l=zr;var d=oe;if(zr=o,(oe=c)&&!d)for(C=i;C!==null;)o=C,c=o.child,o.tag===22&&o.memoizedState!==null?wl(i):c!==null?(c.return=o,C=c):wl(i);for(;s!==null;)C=s,Td(s),s=s.sibling;C=i,zr=l,oe=d}bl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):bl(e)}}function bl(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&al(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}al(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Wn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&Ji(t)}catch(h){q(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function kl(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function wl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(c){q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){q(t,i,c)}}var s=t.return;try{Ji(t)}catch(c){q(t,s,c)}break;case 5:var o=t.return;try{Ji(t)}catch(c){q(t,o,c)}}}catch(c){q(t,t.return,c)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var kp=Math.ceil,oa=tt.ReactCurrentDispatcher,Zs=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,L=0,te=null,Y=null,re=0,be=0,en=kt(0),X=0,rr=null,Lt=0,Ca=0,Xs=0,Dn=null,fe=null,Js=0,hn=1/0,$e=null,la=!1,ns=null,ft=null,Er=!1,ct=null,ca=0,Bn=0,rs=null,Dr=-1,Br=0;function me(){return L&6?Q():Dr!==-1?Dr:Dr=Q()}function gt(e){return e.mode&1?L&2&&re!==0?re&-re:ap.transition!==null?(Br===0&&(Br=fc()),Br):(e=R,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function Re(e,t,n,r){if(50<Bn)throw Bn=0,rs=null,Error(w(185));or(e,n,r),(!(L&2)||e!==te)&&(e===te&&(!(L&2)&&(Ca|=n),X===4&&ot(e,re)),ye(e,r),n===1&&L===0&&!(t.mode&1)&&(hn=Q()+500,wa&&wt()))}function ye(e,t){var n=e.callbackNode;am(e,t);var r=Wr(e,e===te?re:0);if(r===0)n!==null&&To(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&To(n),t===1)e.tag===0?rp(jl.bind(null,e)):Hc(jl.bind(null,e)),Jm(function(){!(L&6)&&wt()}),n=null;else{switch(gc(r)){case 1:n=Ss;break;case 4:n=pc;break;case 16:n=$r;break;case 536870912:n=hc;break;default:n=$r}n=Dd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Dr=-1,Br=0,L&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Wr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var i=L;L|=2;var s=Id();(te!==e||re!==t)&&($e=null,hn=Q()+500,Tt(e,t));do try{Np();break}catch(l){Fd(e,l)}while(1);_s(),oa.current=s,L=i,Y!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Mi(e),i!==0&&(r=i,t=as(e,i))),t===1)throw n=rr,Tt(e,0),ot(e,r),ye(e,Q()),n;if(t===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!wp(i)&&(t=da(e,r),t===2&&(s=Mi(e),s!==0&&(r=s,t=as(e,s))),t===1))throw n=rr,Tt(e,0),ot(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:zt(e,fe,$e);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Js+500-Q(),10<t)){if(Wr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_i(zt.bind(null,e,fe,$e),t);break}zt(e,fe,$e);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Le(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=_i(zt.bind(null,e,fe,$e),r);break}zt(e,fe,$e);break;case 5:zt(e,fe,$e);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?Od.bind(null,e):null}function as(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=da(e,t),e!==2&&(t=fe,fe=n,t!==null&&is(t)),e}function is(e){fe===null?fe=e:fe.push.apply(fe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_e(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Xs,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function jl(e){if(L&6)throw Error(w(327));on();var t=Wr(e,0);if(!(t&1))return ye(e,Q()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=Mi(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=rr,Tt(e,0),ot(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,fe,$e),ye(e,Q()),null}function eo(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(hn=Q()+500,wa&&wt())}}function Rt(e){ct!==null&&ct.tag===0&&!(L&6)&&on();var t=L;L|=1;var n=Pe.transition,r=R;try{if(Pe.transition=null,R=1,e)return e()}finally{R=r,Pe.transition=n,L=t,!(L&6)&&wt()}}function to(){be=en.current,B(en)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:mn(),B(ve),B(le),Vs();break;case 5:Us(r);break;case 4:mn();break;case 13:B(V);break;case 19:B(V);break;case 10:Ds(r.type._context);break;case 22:case 23:to()}n=n.return}if(te=e,Y=e=vt(e.current,null),re=be=t,X=0,rr=null,Xs=Ca=Lt=0,fe=Dn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pt=null}return e}function Fd(e,t){do{var n=Y;try{if(_s(),Lr.current=sa,ia){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ia=!1}if(At=0,ee=Z=$=null,Rn=!1,er=0,Zs.current=null,n===null||n.return===null){X=1,rr=t,Y=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=dl(o);if(y!==null){y.flags&=-257,ul(y,o,l,s,t),y.mode&1&&cl(s,d,t),t=y,c=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(c),t.updateQueue=k}else x.add(c);break e}else{if(!(t&1)){cl(s,d,t),no();break e}c=Error(w(426))}}else if(U&&l.mode&1){var z=dl(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),ul(z,o,l,s,t),Ls(pn(c,l));break e}}s=c=pn(c,l),X!==4&&(X=2),Dn===null?Dn=[s]:Dn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=gd(s,c,t);rl(s,f);break e;case 1:l=c;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ft===null||!ft.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=vd(s,l,t);rl(s,v);break e}}s=s.return}while(s!==null)}Ld(n)}catch(b){t=b,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Id(){var e=oa.current;return oa.current=sa,e===null?sa:e}function no(){(X===0||X===3||X===2)&&(X=4),te===null||!(Lt&268435455)&&!(Ca&268435455)||ot(te,re)}function da(e,t){var n=L;L|=2;var r=Id();(te!==e||re!==t)&&($e=null,Tt(e,t));do try{jp();break}catch(i){Fd(e,i)}while(1);if(_s(),L=n,oa.current=r,Y!==null)throw Error(w(261));return te=null,re=0,X}function jp(){for(;Y!==null;)Ad(Y)}function Np(){for(;Y!==null&&!Qu();)Ad(Y)}function Ad(e){var t=_d(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Ld(e):Y=t,Zs.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=gp(n,t,be),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function zt(e,t,n){var r=R,i=Pe.transition;try{Pe.transition=null,R=1,Sp(e,t,n,r)}finally{Pe.transition=i,R=r}return null}function Sp(e,t,n,r){do on();while(ct!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(im(e,s),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,Dd($r,function(){return on(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var o=R;R=1;var l=L;L|=4,Zs.current=null,yp(e,n),Md(n,e),$m(Li),qr=!!Ai,Li=Ai=null,e.current=n,bp(n),Yu(),L=l,R=o,Pe.transition=s}else e.current=n;if(Er&&(Er=!1,ct=e,ca=i),s=e.pendingLanes,s===0&&(ft=null),Ju(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(la)throw la=!1,e=ns,ns=null,e;return ca&1&&e.tag!==0&&on(),s=e.pendingLanes,s&1?e===rs?Bn++:(Bn=0,rs=e):Bn=0,wt(),null}function on(){if(ct!==null){var e=gc(ca),t=Pe.transition,n=R;try{if(Pe.transition=null,R=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,ca=0,L&6)throw Error(w(331));var i=L;for(L|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(C=d;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:_n(8,m,s)}var g=m.child;if(g!==null)g.return=m,C=g;else for(;C!==null;){m=C;var h=m.sibling,y=m.return;if(zd(m),m===d){C=null;break}if(h!==null){h.return=y,C=h;break}C=y}}}var x=s.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_n(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,C=f;break e}C=s.return}}var u=e.current;for(C=u;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Sa(9,l)}}catch(b){q(l,l.return,b)}if(l===o){C=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,C=v;break e}C=l.return}}if(L=i,wt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(va,e)}catch{}r=!0}return r}finally{R=n,Pe.transition=t}}return!1}function Nl(e,t,n){t=pn(n,t),t=gd(e,t,1),e=ht(e,t,1),t=me(),e!==null&&(or(e,1,t),ye(e,t))}function q(e,t,n){if(e.tag===3)Nl(e,e,n);else for(;t!==null;){if(t.tag===3){Nl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=pn(n,e),e=vd(t,e,1),t=ht(t,e,1),e=me(),t!==null&&(or(t,1,e),ye(t,e));break}}t=t.return}}function Cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Js?Tt(e,0):Xs|=n),ye(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=me();e=Xe(e,t),e!==null&&(or(e,t,n),ye(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Rd(e,n)}var _d;_d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,fp(e,t,n);ge=!!(e.flags&131072)}else ge=!1,U&&t.flags&1048576&&Gc(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var i=cn(t,le.current);sn(t,n),i=Ws(null,t,r,e,i,n);var s=qs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(s=!0,Xr(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hs(t),i.updater=Na,t.stateNode=i,i._reactInternals=t,$i(t,r,e,n),t=Ki(null,t,r,!0,s,n)):(t.tag=0,U&&s&&Is(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mp(r),e=Fe(r,e),i){case 0:t=qi(null,t,r,e,n);break e;case 1:t=hl(null,t,r,e,n);break e;case 11:t=ml(null,t,r,e,n);break e;case 14:t=pl(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),qi(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),hl(e,t,r,i,n);case 3:e:{if(kd(t),e===null)throw Error(w(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Kc(e,t),ra(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=pn(Error(w(423)),t),t=fl(e,t,r,n,i);break e}else if(r!==i){i=pn(Error(w(424)),t),t=fl(e,t,r,n,i);break e}else for(ke=pt(t.stateNode.containerInfo.firstChild),we=t,U=!0,Ae=null,n=Wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=Je(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Qc(t),e===null&&Gi(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ri(r,i)?o=null:s!==null&&Ri(r,s)&&(t.flags|=32),bd(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return wd(e,t,n);case 4:return Gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ml(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,_(ta,r._currentValue),r._currentValue=o,s!==null)if(_e(s.value,o)){if(s.children===i.children&&!ve.current){t=Je(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Qe(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ui(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ui(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sn(t,n),i=Me(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),pl(e,t,r,i,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),_r(e,t),t.tag=1,xe(r)?(e=!0,Xr(t)):e=!1,sn(t,n),fd(t,r,i),$i(t,r,i,n),Ki(null,t,r,!0,e,n);case 19:return jd(e,t,n);case 22:return yd(e,t,n)}throw Error(w(156,t.tag))};function Dd(e,t){return mc(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Pp(e,t,n,r)}function ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ws)return 11;if(e===js)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ro(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Ot(n.children,i,s,t);case ks:o=8,i|=8;break;case fi:return e=Ee(12,n,t,i|2),e.elementType=fi,e.lanes=s,e;case gi:return e=Ee(13,n,t,i),e.elementType=gi,e.lanes=s,e;case vi:return e=Ee(19,n,t,i),e.elementType=vi,e.lanes=s,e;case Ql:return za(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ql:o=10;break e;case Kl:o=9;break e;case ws:o=11;break e;case js:o=14;break e;case at:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ot(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function za(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Ql,e.lanes=n,e.stateNode={isHidden:!1},e}function di(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ui(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ao(e,t,n,r,i,s,o,l,c){return e=new Tp(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ee(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(s),e}function Op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bd(e){if(!e)return yt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(xe(n))return Bc(e,n,t)}return t}function Hd(e,t,n,r,i,s,o,l,c){return e=ao(n,r,!0,e,i,s,o,l,c),e.context=Bd(null),n=e.current,r=me(),i=gt(n),s=Qe(r,i),s.callback=t??null,ht(n,s,i),e.current.lanes=i,or(e,i,r),ye(e,r),e}function Ea(e,t,n,r){var i=t.current,s=me(),o=gt(i);return n=Bd(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,o),e!==null&&(Re(e,i,o,s),Ar(e,i,o)),o}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function io(e,t){Sl(e,t),(e=e.alternate)&&Sl(e,t)}function Fp(){return null}var Gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function so(e){this._internalRoot=e}Pa.prototype.render=so.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ea(e,t,null,null)};Pa.prototype.unmount=so.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Ea(null,e,null,null)}),t[Ze]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&kc(e)}};function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cl(){}function Ip(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ua(o);s.call(d)}}var o=Hd(t,r,e,0,null,!1,!1,"",Cl);return e._reactRootContainer=o,e[Ze]=o.current,Qn(e.nodeType===8?e.parentNode:e),Rt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ua(c);l.call(d)}}var c=ao(e,0,!1,null,null,!1,!1,"",Cl);return e._reactRootContainer=c,e[Ze]=c.current,Qn(e.nodeType===8?e.parentNode:e),Rt(function(){Ea(t,c,n,r)}),c}function Ta(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=ua(o);l.call(c)}}Ea(t,o,e,i)}else o=Ip(n,t,e,i,r);return ua(o)}vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Cs(t,n|1),ye(t,Q()),!(L&6)&&(hn=Q()+500,wt()))}break;case 13:Rt(function(){var r=Xe(e,1);if(r!==null){var i=me();Re(r,e,1,i)}}),io(e,1)}};zs=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=me();Re(t,e,134217728,n)}io(e,134217728)}};xc=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var r=me();Re(n,e,t,r)}io(e,t)}};yc=function(){return R};bc=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};zi=function(e,t,n){switch(t){case"input":if(bi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ka(r);if(!i)throw Error(w(90));Zl(r),bi(r,i)}}}break;case"textarea":Jl(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};sc=eo;oc=Rt;var Ap={usingClientEntryPoint:!1,Events:[cr,Kt,ka,ac,ic,eo]},Cn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{va=Pr.inject(Lp),Ge=Pr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oo(t))throw Error(w(200));return Op(e,t,null,n)};Ne.createRoot=function(e,t){if(!oo(e))throw Error(w(299));var n=!1,r="",i=Gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ao(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Qn(e.nodeType===8?e.parentNode:e),new so(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Rt(e)};Ne.hydrate=function(e,t,n){if(!Ma(t))throw Error(w(200));return Ta(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!oo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Hd(t,null,e,1,n??null,i,!1,s,o),e[Ze]=t.current,Qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pa(t)};Ne.render=function(e,t,n){if(!Ma(t))throw Error(w(200));return Ta(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(w(40));return e._reactRootContainer?(Rt(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=eo;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ta(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Ul.exports=Ne;var Rp=Ul.exports,zl=Rp;pi.createRoot=zl.createRoot,pi.hydrateRoot=zl.hydrateRoot;const _p={name:"MUNCHOS",tagline:"Pinchos in München",location:"Múnich, Alemania",subtagline:"Catering Boutique & Delicatessen Vasca"},Dp={menus:"Menús & Carta",experiencia:"Experiencia",testimonios:"Opiniones",gourmet:"Tienda Gourmet",reservar:"RESERVAR CATERING",cartBadge:"Carrito"},Bp={badge:"✦ CATERING BOUTIQUE EN MÚNICH · 10 A 50 INVITADOS",headlinePart1:"Pinchos Vascos y ",headlineHighlight:"cocina mediterránea",headlinePart2:" para celebraciones íntimas",subheadline:"Sushi premium, pinchos artesanales y paellas cocinadas in situ. Llevamos el sabor y la exclusividad del norte directamente a tu evento privado.",ctaPrimary:"RESERVAR CATERING →",ctaSecondary:"🍴 VER MENÚS Y PRECIOS",stats:[{value:"100%",label:"Producto fresco y artesanal"},{value:"10–50",label:"Invitados por experiencia"},{value:"4.9 / 5",label:"Valoración de clientes"}]},Hp={badge:"¿Por qué MUNCHOS?",title:"Alta gastronomía pensada para disfrutar sin complicaciones.",subtitle:`Combinamos la tradición del pincho vasco con paellas in situ y sushi de autor.
Un servicio integral llave en mano.`,items:[{icon:"UtensilsCrossed",title:"Producto de temporada",desc:"Ingredientes de origen certificado, seleccionados diariamente con estricto criterio delicatessen."},{icon:"Sparkles",title:"Servicio impecable",desc:"Cuidamos la puesta en escena y los detalles para que tú solo tengas que ejercer de anfitrión."},{icon:"Sliders",title:"Menús 100% personalizables",desc:"Adaptamos cada propuesta a las preferencias gastronómicas y requerimientos de tus invitados."},{icon:"HeartHandshake",title:"Equilibrio placer y bienestar",desc:"Técnicas de cocción ligeras y composiciones equilibradas que cuidan de la digestión y el sabor."}]},Gp={badge:"El Proceso MUNCHOS",title:"De la idea a tu mesa en 4 sencillos pasos.",subtitle:`Un flujo diseñado para garantizar máxima comodidad.
Cero estrés durante el día de tu celebración.`,steps:[{number:"01",title:"Elige tu fecha y concepto",desc:"Cuéntanos el motivo de tu evento, el número de comensales (10 a 50) y la fecha prevista en Múnich."},{number:"02",title:"Diseño del menú a medida",desc:"Selecciona la combinación perfecta entre pinchos vascos, plancha, pizzas in situ, sushi o paellas."},{number:"03",title:"Preparación y logística",desc:"Cocinamos en el día y transportamos todo en vehículos refrigerados con vajilla boutique."},{number:"04",title:"Servicio y disfrute total",desc:"Presentación impecable lista para servir o con chef presencial. Tú disfrutas, nosotros hacemos la magia."}]},Up={badge:"Nuestra Propuesta Gastronómica",title:"¿Qué quieres comer? ¡Personaliza tu deseo!",subtitle:`Explora nuestras 5 especialidades gastronómicas.
Diseñadas para eventos informales pero extremadamente elegantes.`,categories:[{id:"pintxos",name:"Pinchos Vascos",tagline:"Tradición de San Sebastián",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Canapés y pinchos elaborados sobre pan artesanal de masa madre con gildas de autor, piquillos rellenos y solomillo ibérico.",highlights:["Pan de masa madre 48h","Gildas Donostiarras premium","Aceite de oliva AOVE"],items:["La Gilda MUNCHOS: piparra de Ibarra, anchoa del Cantábrico y aceituna gordal","Solomillo ibérico sobre reducción de Pedro Ximénez y queso Idiazábal","Pimiento del Piquillo confitado relleno de marisco"]},{id:"plancha",name:"Plancha",tagline:"Sandwiches, Burgers, Salchichas",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Hamburguesas gourmet a la parrilla, sandwiches artesanales y salchichas vascas/bávaras preparadas al momento.",highlights:["Carnes maduradas","Pan brioche artesano","Salsas de la casa"],items:["Mini Burgers gourmet de Vaca Vieja con queso Idiazábal ahumado","Sandwich artesanal a la plancha con jamón ibérico y queso fundido","Salchichas artesanales a la parrilla con alioli suave y chimichurri vasco"]},{id:"pizzas",name:"Pizzas Caseras",tagline:"In situ (Elaboradas en directo)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Pizzas artesanas elaboradas y horneadas in situ durante tu evento con masa madre fermentada 48 horas e ingredientes frescos.",highlights:["Horneadas in situ","Masa madre 48h","Mozzarella Fior di Latte"],items:["Pizza Margarita gourmet con tomate San Marzano y albahaca fresca","Pizza Vasca con chistorra artesana, piquillos confitados y queso ahumado","Pizza Ibérica con salmón ahumado, rúcula y emulsión de cítricos"]},{id:"sushi",name:"Sushi",tagline:"Fusión Nikkei-Vasca",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Nigiris atún rojo Balfegó, uramakis de salmón salvaje ahumado con toque de txakoli y sashimis corte maestro.",highlights:["Sin azúcares añadidos","Pescado salvaje sostenible","Salsas de soya artesanal"],items:["Nigiri de Atún Rojo con foie flameado y sal de Añana","Uramaki de Salmón y Aguacate con mahonesa de kimchi y sésamo negro","Tartar de Vieira con alga wakame y emulsión de cítricos"]},{id:"paellas",name:"Paellas & Arroces",tagline:"Paellas, Arroces Caldosos, Risottos",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Paellas mediterráneas elaboradas in situ, arroces caldosos marineros y risottos cremosos con boletus e Idiazábal.",highlights:["Arroz Bomba de Albufera","Elaboradas in situ","Socarrat crujiente artesano"],items:["Paella de Marisco y Senyoret con gambón, calamar fresco y azafrán en hebra","Arroz Caldoso de Bogavante del Cantábrico con fumet marino concentrado","Risotto cremoso de Boletus edulis y Queso Idiazábal ahumado"]}],cta:"Solicitar presupuesto personalizado"},Vp={badge:"Calculadora & Presupuesto Directo",title:"Diseña la experiencia para tu evento.",subtitle:`Indica los detalles de tu reunión para calcular una estimación instantánea.
Recibirás una propuesta oficial en menos de 24h.`,labels:{guests:"Número de Invitados (10 a 50):",date:"Fecha del Evento:",menuType:"Tipo de Menú Principal:",extras:"Servicios Extra Opcionales:",estimatedTotal:"Estimación orientativa total:",perPerson:"por persona",submitBtn:"Solicitar Presupuesto Oficial sin Compromiso"},menuOptions:[{id:"de-tapas",name:"Experiencia Pinchos Vascos & Plancha",price:38},{id:"pizzas-fusion",name:"Pizzas Caseras In Situ & Pinchos",price:44},{id:"paellas-showcooking",name:"Paellas & Arroces en Vivo",price:48},{id:"full-experience",name:"Experiencia Completa MUNCHOS (Sushi + Plancha + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"Chef & Showcooking en vivo (+180€)",price:180},{id:"sommelier",name:"Maridaje Vinos Vascos & Txakoli (+12€ / inv)",pricePerGuest:12},{id:"desserts",name:"Mesa Dulce Vasca & Tarta de Queso La Viña (+7€ / inv)",pricePerGuest:7},{id:"tableware",name:"Alquiler de Vajilla & Cristalería Premium (+5€ / inv)",pricePerGuest:5}]},$p={badge:"Filosofía 'Come Sano'",title:"El equilibrio entre el placer hedonista y el bienestar real.",text:"Comer bien no significa renunciar a nada. En MUNCHOS creemos que el placer y el equilibrio pueden convivir en el mismo plato — por eso seleccionamos producto de calidad, cuidamos las cocciones y pensamos cada menú también desde la nutrición, sin sacrificar ni un gramo de sabor.",points:[{title:"Sin aceites refinados",desc:"Utilizamos exclusivamente Aceite de Oliva Virgen Extra (AOVE) prensado en frío."},{title:"Bajo contenido en azúcares",desc:"Respetamos el dulzor natural de las verduras y frutas de temporada."},{title:"Proteína limpia y ligera",desc:"Pescados salvajes del Cantábrico y carnes magras preparadas a la temperatura justa."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Chef Fundador MUNCHOS Múnich"},Wp={badge:"Compromiso MUNCHOS",title:"Garantía de Calidad y Puntualidad Absoluta.",subtitle:"Tu tranquilidad es el ingrediente principal de nuestro catering.",cards:[{title:"Puntualidad Garantizada",desc:"Llegamos con 45 minutos de antelación para el montaje. Si el pedido se retrasa más de 15 minutos sin causa mayor, abonamos un 20% del valor total."},{title:"Frescura e Higiene 100%",desc:"Mantenimiento estricto de la cadena de frío y transporte térmico certificado. Si cualquier plato no cumple con el estándar esperado, te lo reemplazamos inmediatamente."},{title:"Gestión de Reclamaciones en 24h",desc:"Canal directo con la dirección para cualquier eventualidad. Respuesta y solución económica o reposición antes de 24 horas laborables."}]},qp={badge:"Experiencias Reales",title:"Lo que dicen los anfitriones en Múnich.",reviews:[{name:"Elena R.",event:"Cumpleaños 40º en Bogenhausen (25 personas)",comment:"MUNCHOS convirtió mi salón en una taberna donostiarra elegante. Los pinchos de bacalao y el nigiri de balfegó volaron en minutos. Mis invitados alemanes quedaron fascinados.",rating:5},{name:"Markus & Sofía",event:"Cena privada en Schwabing (15 personas)",comment:"Buscábamos un catering que no fuese pesado ni grasiento. El equilibrio de sus platos y la presentación impoluta nos conquistaron. Repetiremos sin duda.",rating:5},{name:"Carlos M.",event:"Celebración de empresa en Glockenbach (35 personas)",comment:"Puntualidad alemana con sabor vasco auténtico. El servicio de chef en vivo valió cada euro. La tarta de queso tipo La Viña es simplemente insuperable.",rating:5}]},Kp={badge:"Delicatessen en Casa",title:"Productos Gourmet MUNCHOS.",subtitle:"Lleva la despensa del Cantábrico y nuestros productos exclusivos directamente a tu hogar en Múnich.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi."},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional."},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra."},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca."}],addBtn:"Añadir a mi selección",interestBtn:"Ver mi lista de compras"},Qp={title:"¿Preparado para organizar una celebración inolvidable en Múnich?",subtitle:`Reserva tu fecha con antelación.
Atendemos un número limitado de eventos por semana para mantener nuestro compromiso de frescura y atención boutique.`,primaryBtn:"Solicitar fecha y presupuesto",secondaryBtn:"Contactar por WhatsApp"},Yp={text:"Catering Boutique Múnich (10-50 personas)",button:"Reservar mi Catering"},Zp={title:"Solicitud de Reserva / Presupuesto",subtitle:"Completa tus datos y nos pondremos en contacto antes de 24 horas con una propuesta a medida.",name:"Tu nombre completo:",email:"Correo electrónico:",phone:"Teléfono de contacto (WhatsApp):",location:"Lugar del evento en Múnich / Alrededores:",notes:"Notas o alergias alimentarias de tus invitados:",submit:"Enviar Solicitud de Presupuesto",successTitle:"¡Solicitud Recibida!",successText:"Gracias por contactar con MUNCHOS. Te responderemos en breve con la propuesta detallada."},Xp={about:"MUNCHOS trae la autenticidad de la gastronomía vasca y la delicadeza del sushi de autor al corazón de Múnich, transformando pequeñas celebraciones en experiencias memorables.",quickLinks:"Enlaces Rápidos",legal:"Información Legal",privacy:"Política de Privacidad",terms:"Términos del Servicio",impressum:"Impressum (Legal Germany)",contact:"Contacto & Reservas",address:"Múnich, Baviera — Alemania",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. Todos los derechos reservados. Catering Boutique en Múnich."},Jp={badge:"Promoción Exclusiva MUNCHOS",items:[{id:"promo_01",headline:"Especial Paellas Vascas a Fuego Vivo los Fines de Semana",bodyText:"Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.",ctaText:"Consultar Fechas de Paella"}]},eh={brand:_p,nav:Dp,hero:Bp,benefits:Hp,howItWorks:Gp,menus:Up,bookingWidget:Vp,philosophy:$p,guarantee:Wp,testimonials:qp,gourmetShop:Kp,finalCta:Qp,stickyCta:Yp,modal:Zp,footer:Xp,promotions:Jp},th={name:"MUNCHOS",tagline:"Pinchos in München",location:"Munich, Germany",subtagline:"Boutique Catering & Basque Delicatessen"},nh={menus:"Menus & Card",experiencia:"Experience",testimonios:"Reviews",gourmet:"Gourmet Shop",reservar:"BOOK CATERING",cartBadge:"Cart"},rh={badge:"✦ BOUTIQUE CATERING IN MUNICH · 10 TO 50 GUESTS",headlinePart1:"Basque Pinchos & ",headlineHighlight:"Mediterranean Cuisine",headlinePart2:" for Intimate Celebrations",subheadline:"Premium sushi, artisanal pinchos, and live-cooked paellas. We bring northern flavor and exclusivity directly to your private event.",ctaPrimary:"BOOK CATERING →",ctaSecondary:"🍴 VIEW MENUS & PRICES",stats:[{value:"100%",label:"Fresh & artisanal product"},{value:"10–50",label:"Guests per experience"},{value:"4.9 / 5",label:"Client Rating"}]},ah={badge:"Why MUNCHOS?",title:"Haute cuisine designed for effortless enjoyment.",subtitle:`We blend Basque pincho tradition with live paella cooking and signature sushi.
A turnkey, full-service catering experience.`,items:[{icon:"UtensilsCrossed",title:"Seasonal ingredients",desc:"Certified origin products, daily selected under strict gourmet standards."},{icon:"Sparkles",title:"Flawless service",desc:"We handle setup and fine details so you can focus entirely on hosting."},{icon:"Sliders",title:"100% Customizable menus",desc:"Tailored to your guests' culinary desires and dietary requirements."},{icon:"HeartHandshake",title:"Flavor & Wellbeing balance",desc:"Light cooking methods and balanced recipes designed for great digestability and flavor."}]},ih={badge:"The MUNCHOS Process",title:"From concept to your table in 4 easy steps.",subtitle:`Designed for ultimate convenience.
Zero stress on your celebration day.`,steps:[{number:"01",title:"Choose Date & Concept",desc:"Tell us about your event, number of guests (10 to 50), and target date in Munich."},{number:"02",title:"Tailor Your Menu",desc:"Select your ideal mix of Basque pinchos, grill, live pizza, sushi, or paellas."},{number:"03",title:"Preparation & Logistics",desc:"Cooked fresh on event day and transported in temperature-controlled vehicles with boutique tableware."},{number:"04",title:"Service & Enjoyment",desc:"Served ready to enjoy or with an on-site chef. You celebrate, we deliver the magic."}]},sh={badge:"Our Culinary Offerings",title:"What would you like to eat? Customize your wish!",subtitle:`Explore our 5 culinary specialties.
Designed for relaxed yet high-end gatherings.`,categories:[{id:"pintxos",name:"Basque Pinchos",tagline:"San Sebastián Tradition",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Gourmet canapés on sourdough bread featuring signature gildas, stuffed piquillo peppers, and Iberian sirloin.",highlights:["48h Sourdough Bread","Donostia Premium Gildas","Extra Virgin Olive Oil"],items:["MUNCHOS Gilda: Ibarra chili pepper, Cantabrian anchovy & Gordal olive","Iberian Sirloin over Pedro Ximénez reduction & Idiazábal cheese","Confit Piquillo pepper stuffed with seafood"]},{id:"plancha",name:"Grill & Plancha",tagline:"Sandwiches, Burgers, Sausages",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Grilled gourmet burgers, artisanal sandwiches, and Basque/Bavarian sausages cooked fresh on site.",highlights:["Aged Beef","Artisanal Brioche Bun","House Sauces"],items:["Dry-aged beef gourmet mini burgers with smoked Idiazábal cheese","Grilled artisanal sandwich with Iberian ham & melted cheese","Grilled artisanal sausages with mild alioli and Basque chimichurri"]},{id:"pizzas",name:"Homemade Pizzas",tagline:"In Situ (Freshly Baked Live)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Artisanal pizzas baked live during your event made with 48-hour fermented sourdough and fresh ingredients.",highlights:["Baked Live On-Site","48h Sourdough","Mozzarella Fior di Latte"],items:["Gourmet Margherita pizza with San Marzano tomatoes & fresh basil","Basque pizza with artisanal chistorra sausage, piquillo peppers & smoked cheese","Iberian pizza with smoked salmon, wild arugula & citrus emulsion"]},{id:"sushi",name:"Sushi Fusion",tagline:"Nikkei-Basque Fusion",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Balfegó bluefin tuna nigiris, wild salmon uramakis with a touch of txakoli, and master sashimi.",highlights:["No Added Sugars","Sustainable Wild Fish","Artisanal Soy Sauces"],items:["Red Tuna Nigiri with seared foie & Añana mineral salt","Salmon & Avocado Uramaki with kimchi mayo & black sesame","Scallop Tartare with wakame seaweed & citrus emulsion"]},{id:"paellas",name:"Paellas & Rice Dishes",tagline:"Live Paellas, Soupy Rices, Risottos",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Mediterranean paellas cooked live on site, seafood soupy rice, and creamy boletus risotto with Idiazábal.",highlights:["Albufera Bomba Rice","Cooked Live On-Site","Crispy Socarrat"],items:["Seafood & Senyoret Paella with king prawns, fresh squid & saffron","Cantabrian Lobster Soupy Rice with concentrated seafood broth","Creamy Boletus Edulis & Smoked Idiazábal Cheese Risotto"]}],cta:"Request custom quote"},oh={badge:"Calculator & Direct Estimate",title:"Design the experience for your event.",subtitle:`Enter your gathering details to compute an instant estimate.
You will receive an official proposal within 24h.`,labels:{guests:"Number of Guests (10 to 50):",date:"Event Date:",menuType:"Main Menu Selection:",extras:"Optional Extra Services:",estimatedTotal:"Estimated Total Price:",perPerson:"per person",submitBtn:"Request Official Quote (No Obligation)"},menuOptions:[{id:"de-tapas",name:"Basque Pinchos & Grill Experience",price:38},{id:"pizzas-fusion",name:"Live Homemade Pizzas & Pinchos",price:44},{id:"paellas-showcooking",name:"Live Paellas & Rice Showcooking",price:48},{id:"full-experience",name:"Full MUNCHOS Experience (Sushi + Grill + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"On-Site Chef & Live Showcooking (+180€)",price:180},{id:"sommelier",name:"Basque Wine & Txakoli Pairing (+12€ / guest)",pricePerGuest:12},{id:"desserts",name:"Basque Sweet Table & La Viña Cheesecake (+7€ / guest)",pricePerGuest:7},{id:"tableware",name:"Premium Glassware & Tableware Rental (+5€ / guest)",pricePerGuest:5}]},lh={badge:"'Eat Healthy' Philosophy",title:"The balance between hedonistic pleasure and real wellbeing.",text:"Eating well never means compromising on taste. At MUNCHOS we believe culinary delight and nutritional balance belong on the same plate — which is why we choose top-tier ingredients, gentle cooking techniques, and design every menu thoughtfully without sacrificing a single bit of flavor.",points:[{title:"No refined oils",desc:"We exclusively use cold-pressed Extra Virgin Olive Oil (EVOO)."},{title:"Low in sugar",desc:"We honor the natural sweetness of seasonal vegetables and fruits."},{title:"Clean & light protein",desc:"Wild Cantabrian fish and lean meats prepared to perfection."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Founder & Head Chef MUNCHOS Munich"},ch={badge:"MUNCHOS Commitment",title:"Absolute Quality & Punctuality Guarantee.",subtitle:"Your peace of mind is the main ingredient of our catering.",cards:[{title:"Guaranteed Punctuality",desc:"We arrive 45 minutes prior for setup. If delayed over 15 minutes without force majeure, we refund 20% of the total cost."},{title:"100% Freshness & Hygiene",desc:"Strict cold-chain maintenance and certified thermal transport. If any dish fails to meet expectations, we replace it immediately."},{title:"24h Claim Management",desc:"Direct line to management. Response and financial resolution or replacement within 24 business hours."}]},dh={badge:"Real Experiences",title:"What hosts in Munich say.",reviews:[{name:"Elena R.",event:"40th Birthday in Bogenhausen (25 guests)",comment:"MUNCHOS turned my living room into an elegant Donostia tavern. The cod pinchos and Balfegó nigiris vanished in minutes. My German guests were thrilled.",rating:5},{name:"Markus & Sofía",event:"Private Dinner in Schwabing (15 guests)",comment:"We were looking for catering that wasn't heavy or greasy. The balance of dishes and immaculate presentation won us over.",rating:5},{name:"Carlos M.",event:"Corporate Event in Glockenbach (35 guests)",comment:"German punctuality with authentic Basque flavor. The live chef service was worth every euro. The La Viña-style cheesecake is unbeatable.",rating:5}]},uh={badge:"Delicatessen at Home",title:"MUNCHOS Gourmet Products.",subtitle:"Bring Cantabrian pantry goods and our exclusive products directly to your home in Munich.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Basque Winery",price:22,image:"/images/IMG_1240.jpeg",desc:"Fresh Basque white wine with a delicate natural effervescence and apple notes. Perfect pairing for sushi."},{id:"aove-piparras",name:"Ibarra Chili Peppers in Apple Vinegar",category:"Artisanal Preserves",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Handpicked tender Ibarra peppers, mild and without aggressive heat. Traditional production."},{id:"anchoas-cantabrico",name:"Cantabrian Anchovies in EVOO",category:"Premium Salt-Cured",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Hand-cleaned fillets, aged 12 months in salt and packed in extra virgin olive oil."},{id:"queso-idiazabal",name:"Artisanal Smoked Idiazábal Cheese (350g)",category:"Artisan Cheese",price:16,image:"/images/IMG_2093.jpeg",desc:"Made from raw Latxa sheep milk and smoked with Basque beechwood."}],addBtn:"Add to selection",interestBtn:"View shopping list"},mh={title:"Ready to host an unforgettable gathering in Munich?",subtitle:`Book your date in advance.
We accept a limited number of events per week to guarantee maximum freshness and boutique care.`,primaryBtn:"Request date & quote",secondaryBtn:"Contact via WhatsApp"},ph={text:"Boutique Catering Munich (10-50 people)",button:"Book my Catering"},hh={title:"Booking Request / Quote",subtitle:"Fill in your details and we will reach out within 24 hours with a custom proposal.",name:"Your full name:",email:"Email address:",phone:"Contact phone (WhatsApp):",location:"Event location in Munich / Area:",notes:"Notes or dietary requirements of your guests:",submit:"Send Quote Request",successTitle:"Request Received!",successText:"Thank you for contacting MUNCHOS. We will reply shortly with a detailed proposal."},fh={about:"MUNCHOS brings Basque culinary authenticity and master sushi craft to the heart of Munich, turning small gatherings into unforgettable experiences.",quickLinks:"Quick Links",legal:"Legal Information",privacy:"Privacy Policy",terms:"Terms of Service",impressum:"Impressum",contact:"Contact & Bookings",address:"Munich, Bavaria — Germany",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. All rights reserved. Boutique Catering in Munich."},gh={badge:"Exclusive MUNCHOS Promotion",items:[{id:"promo_01",headline:"Live-Cooked Basque Seafood Paella Special on Weekends",bodyText:"Enhance your catering with a spectacular seafood paella cooked live in your garden or terrace in Munich.",ctaText:"Inquire Paella Dates"}]},vh={brand:th,nav:nh,hero:rh,benefits:ah,howItWorks:ih,menus:sh,bookingWidget:oh,philosophy:lh,guarantee:ch,testimonials:dh,gourmetShop:uh,finalCta:mh,stickyCta:ph,modal:hh,footer:fh,promotions:gh},xh={name:"MUNCHOS",tagline:"Pinchos in München",location:"München, Deutschland",subtagline:"Boutique-Catering & Baskische Delikatessen"},yh={menus:"Menüs & Karte",experiencia:"Erlebnis",testimonios:"Bewertungen",gourmet:"Gourmet Shop",reservar:"CATERING BUCHEN",cartBadge:"Warenkorb"},bh={badge:"✦ BOUTIQUE CATERING IN MÜNCHEN · 10 BIS 50 GÄSTE",headlinePart1:"Baskische Pinchos & ",headlineHighlight:"mediterrane Küche",headlinePart2:" für private Feiern",subheadline:"Premium-Sushi, handgemachte Pinchos und Live-Paella vor Ort. Wir bringen exklusiven Geschmack direkt zu Ihrem privaten Event.",ctaPrimary:"CATERING BUCHEN →",ctaSecondary:"🍴 MENÜS & PREISE SEHEN",stats:[{value:"100%",label:"Frische handwerkliche Produkte"},{value:"10–50",label:"Gäste pro Erlebnis"},{value:"4.9 / 5",label:"Kundenbewertung"}]},kh={badge:"Warum MUNCHOS?",title:"Spitzengastronomie für unbeschwerten Genuss.",subtitle:`Wir kombinieren traditionelle baskische Pinchos mit Vor-Ort-Paella und Meister-Sushi.
Ein schlüsselfertiger Komplettservice.`,items:[{icon:"UtensilsCrossed",title:"Saisonale Frische",desc:"Zertifizierte Zutaten, täglich mit strengen Gourmet-Kriterien ausgewählt."},{icon:"Sparkles",title:"Tadelloser Service",desc:"Wir kümmern uns um die Präsentation und Details, damit Sie der perfekte Gastgeber sind."},{icon:"Sliders",title:"100% Anpassbare Menüs",desc:"Jedes Angebot wird individuell an die Wünsche und Vorlieben Ihrer Gäste angepasst."},{icon:"HeartHandshake",title:"Balance aus Genuss & Wohlbefinden",desc:"Leichte Zubereitungsmethoden und ausgewogene Kompositionen für besten Geschmack."}]},wh={badge:"Der MUNCHOS Ablauf",title:"Von der Idee zu Ihrem Tisch in 4 einfachen Schritten.",subtitle:`Ein Ablauf für maximalen Komfort.
Null Stress am Tag Ihrer Feier.`,steps:[{number:"01",title:"Datum & Konzept wählen",desc:"Nennen Sie uns den Anlass, die Gästeanzahl (10 bis 50) und das Wunschdatum in München."},{number:"02",title:"Menü individuell gestalten",desc:"Wählen Sie Ihre Kombination aus Pinchos, Gegrilltem, Pizza vor Ort, Sushi oder Paella."},{number:"03",title:"Zubereitung & Logistik",desc:"Frisch am Eventtag gekocht und in Kühlfahrzeugen mit edlem Geschirr geliefert."},{number:"04",title:"Service & Vollkommener Genuss",desc:"Perfekt servierbereit oder mit Live-Koch. Sie genießen, wir erledigen den Rest."}]},jh={badge:"Unsere Gastronomische Auslese",title:"Was möchten Sie genießen? Gestalten Sie Ihren Wunsch!",subtitle:`Entdecken Sie unsere 5 Spezialitäten.
Perfekt für entspannte und hochklassige Events.`,categories:[{id:"pintxos",name:"Baskische Pinchos",tagline:"Tradition aus San Sebastián",image:"/images/Imagen 16-4-26 a las 11.12.jpg",description:"Edle Canapés auf handwerklichem Sauerteigbrot mit Gourmet-Gildas, gefüllten Piquillo-Paprikas und iberischem Filet.",highlights:["48h Sauerteigbrot","Donostia Premium-Gildas","Natives Olivenöl Extra"],items:["MUNCHOS Gilda: Ibarra-Peperoni, kantabrische Sardelle & Gordal-Olive","Iberisches Schweinefilet auf Pedro Ximénez Reduktion & Idiazábal-Käse","Konfierte Piquillo-Paprika mit Meeresfrüchte-Füllung"]},{id:"plancha",name:"Plancha & Grill",tagline:"Sandwiches, Burger, Würste",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Gegrillte Gourmet-Burger, handwerkliche Sandwiches und baskische/bayerische Würste frisch zubereitet.",highlights:["Gereiftes Rindfleisch","Handwerklicher Brioche-Bun","Hausgemachte Saucen"],items:["Gourmet Mini-Burger vom Dry-Aged Rind mit geräuchertem Idiazábal","Warmes Plancha-Sandwich mit iberischem Schinken & geschmolzenem Käse","Würstchen vom Grill mit mildem Alioli und baskischem Chimichurri"]},{id:"pizzas",name:"Hausgemachte Pizzas",tagline:"In situ (Frisch vor Ort gebacken)",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Handgemachte Pizzas, vor Ort mit 48h fermentiertem Sauerteig und frischen Zutaten direkt gebacken.",highlights:["Vor Ort gebacken","48h Sauerteig","Mozzarella Fior di Latte"],items:["Gourmet Pizza Margherita mit San Marzano Tomaten & frischem Basilikum","Baskische Pizza mit Chistorra-Wurst, konfierten Piquillos & Räucherkäse","Iberische Pizza mit Räucherlachs, Rucola & Zitrusemulsion"]},{id:"sushi",name:"Sushi Fusion",tagline:"Nikkei-Baskische Fusion",image:"/images/sushi-dish-asian-restaurant.jpg",description:"Balfegó Blauflossen-Thunfisch Nigiris, Wildlachs-Uramakis mit Txakoli-Note und Meister-Sashimi.",highlights:["Ohne zugesetzten Zucker","Nachhaltiger Wildfisch","Handwerkliche Sojasaucen"],items:["Roter Thunfisch Nigiri mit geflämmter Foie & Añana-Salz","Lachs-Avocado Uramaki mit Kimchi-Mayonnaise & schwarzem Sesam","Jakobsmuschel-Tartar mit Wakame-Alge & Zitrusemulsion"]},{id:"paellas",name:"Paellas & Reisgerichte",tagline:"Live Paellas, Reisgerichte & Risotto",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",description:"Mediterrane Paellas live gekocht, cremiges Meeresfrüchte-Reisgericht und Steinpilz-Risotto mit Idiazábal.",highlights:["Albufera Bomba-Reis","Live vor Ort gekocht","Knuspriges Socarrat"],items:["Meeresfrüchte-Paella 'Senyoret' mit Riesengarnele, Tintenfisch & Safran","Cremiges Hummer-Reisgericht mit intensiver Meeresbrühe","Steinpilz-Risotto mit geräuchertem Idiazábal-Käse"]}],cta:"Individuelles Angebot anfordern"},Nh={badge:"Rechner & Sofort-Kalkulation",title:"Planen Sie Ihr Event-Erlebnis.",subtitle:`Geben Sie Ihre Event-Details ein für eine sofortige Schätzung.
Sie erhalten innerhalb von 24h ein offizielles Angebot.`,labels:{guests:"Anzahl der Gäste (10 bis 50):",date:"Event-Datum:",menuType:"Hauptmenü-Auswahl:",extras:"Optionale Zusatzleistungen:",estimatedTotal:"Geschätzte Gesamtsumme:",perPerson:"pro Person",submitBtn:"Unverbindliches Angebot Anfordern"},menuOptions:[{id:"de-tapas",name:"Baskische Pinchos & Plancha Erlebnis",price:38},{id:"pizzas-fusion",name:"Hausgemachte Pizza vor Ort & Pinchos",price:44},{id:"paellas-showcooking",name:"Live Paellas & Reisgerichte Showcooking",price:48},{id:"full-experience",name:"MUNCHOS Komplett-Erlebnis (Sushi + Plancha + Paellas + Pinchos)",price:58}],extrasList:[{id:"chef",name:"Koch & Live Showcooking vor Ort (+180€)",price:180},{id:"sommelier",name:"Baskische Weinbegleitung & Txakoli (+12€ / Gast)",pricePerGuest:12},{id:"desserts",name:"Baskisches Dessertbuffet & Käsekuchen La Viña (+7€ / Gast)",pricePerGuest:7},{id:"tableware",name:"Premium Geschirr- & Gläserverleih (+5€ / Gast)",pricePerGuest:5}]},Sh={badge:"Philosophie 'Gesund Genießen'",title:"Die Balance zwischen Genuss und echtem Wohlbefinden.",text:"Gutes Essen bedeutet keinesfalls Verzicht. Bei MUNCHOS glauben wir, dass kulinarischer Genuss und Ausgewogenheit auf demselben Teller harmonieren – deshalb wählen wir erstklassige Zutaten, achten auf sanfte Zubereitung und planen jedes Menü auch unter nährstoffreichen Gesichtspunkten.",points:[{title:"Keine raffinierten Öle",desc:"Wir verwenden ausschließlich kaltgepresstes Natives Olivenöl Extra (AOVE)."},{title:"Zuckerarm",desc:"Wir schätzen die natürliche Süße von saisonalem Gemüse und Obst."},{title:"Reines & leichtes Protein",desc:"Kantabrischer Wildfisch und mageres Fleisch auf den Punkt zubereitet."}],quoteAuthor:"Oskar Marijuan",quoteRole:"Chefkoch & Gründer MUNCHOS München"},Ch={badge:"MUNCHOS Versprechen",title:"Garantie für Qualität und absolute Pünktlichkeit.",subtitle:"Ihre Unbesorgtheit ist die wichtigste Zutat unseres Caterings.",cards:[{title:"Garantiierte Pünktlichkeit",desc:"Wir treffen 45 Minuten vor Eventbeginn zum Aufbau ein. Bei Verspätung von mehr als 15 Minuten erstatten wir 20% des Gesamtwerts."},{title:"100% Frische & Hygiene",desc:"Strikte Einhaltung der Kühlkette und zertifizierter Thermotransport. Sollte ein Gericht nicht Ihren Erwartungen entsprechen, ersetzen wir es sofort."},{title:"Reklamationsbearbeitung in 24h",desc:"Direkter Draht zur Geschäftsführung. Rückmeldung und Erstattung oder Ersatz innerhalb von 24 Arbeitsstunden."}]},zh={badge:"Echte Erfahrungen",title:"Was Gastgeber in München sagen.",reviews:[{name:"Elena R.",event:"40. Geburtstag in Bogenhausen (25 Personen)",comment:"MUNCHOS hat mein Wohnzimmer in eine elegante Donostia-Bar verwandelt. Die Kabeljau-Pinchos und das Balfegó-Nigiri waren im Nu weg. Meine deutschen Gäste waren begeistert.",rating:5},{name:"Markus & Sofía",event:"Privates Dinner in Schwabing (15 Personen)",comment:"Wir suchten ein Catering, das weder schwer noch fettig ist. Die Ausgewogenheit der Gerichte und die makellose Präsentation haben uns überzeugt.",rating:5},{name:"Carlos M.",event:"Firmenevent im Glockenbach (35 Personen)",comment:"Deutsche Pünktlichkeit mit authentischem baskischen Geschmack. Der Live-Koch-Service war jeden Euro wert. Der Käsekuchen nach La Viña Art ist unübertroffen.",rating:5}]},Eh={badge:"Delikatessen für Zuhause",title:"MUNCHOS Gourmet Produkte.",subtitle:"Holen Sie sich den Geschmack Kantabriens und exklusive Produkte direkt nach Hause in München.",products:[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Baskisches Weingut",price:22,image:"/images/IMG_1240.jpeg",desc:"Frischer baskischer Weißwein mit feiner natürlicher Kohlensäure und Apfelnoten. Perfekt zu Sushi."},{id:"aove-piparras",name:"Ibarra-Peperoni in Apfelessig",category:"Handwerkliche Konserven",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Zarte Ibarra-Peperoni, einzeln ausgewählt, mild und ohne scharfe Schärfe. Traditionelle Herstellung."},{id:"anchoas-cantabrico",name:"Kantabrische Sardellen in Extra Olivenöl",category:"Premium Salzzutaten",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Handgeputzte Filets, 12 Monate in Salz gereift und in kaltgepresstem Olivenöl eingelegt."},{id:"queso-idiazabal",name:"Handwerklicher Räucherkäse Idiazábal (350g)",category:"Gourmet Käse",price:16,image:"/images/IMG_2093.jpeg",desc:"Aus Rohmilch vom Latxa-Schaf hergestellt und mit baskischem Buchenholz geräuchert."}],addBtn:"Zur Auswahl hinzufügen",interestBtn:"Einkaufsliste ansehen"},Ph={title:"Bereit für ein unvergessliches Event in München?",subtitle:`Sichern Sie sich Ihren Wunschtermin frühzeitig.
Wir betreuen eine begrenzte Anzahl an Events pro Woche für maximale Frische und Boutique-Qualität.`,primaryBtn:"Termin & Angebot anfragen",secondaryBtn:"Kontakt via WhatsApp"},Mh={text:"Boutique Catering München (10-50 Personen)",button:"Catering buchen"},Th={title:"Buchungsanfrage / Angebot",subtitle:"Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.",name:"Ihr vollständiger Name:",email:"E-Mail-Adresse:",phone:"Telefonnummer (WhatsApp):",location:"Event-Ort in München / Umgebung:",notes:"Hinweise oder Allergien Ihrer Gäste:",submit:"Unverbindliches Angebot Senden",successTitle:"Anfrage Erhalten!",successText:"Vielen Dank für Ihre Anfrage bei MUNCHOS. Wir antworten Ihnen in Kürze mit einem detaillierten Angebot."},Oh={about:"MUNCHOS bringt authentische baskische Gastronomie und edles Meister-Sushi ins Herz von München und verwandelt Feiern in unvergessliche Erlebnisse.",quickLinks:"Quick-Links",legal:"Rechtliches",privacy:"Datenschutzerklärung",terms:"AGB",impressum:"Impressum",contact:"Kontakt & Reservierung",address:"München, Bayern — Deutschland",phone:"+49 89 1234 5678",email:"hola@munchos.de",copyright:"© 2026 MUNCHOS. Alle Rechte vorbehalten. Catering Boutique in München."},Fh={badge:"Exklusives MUNCHOS Angebot",items:[{id:"promo_01",headline:"Baskische Paella-Spezialität auf offenem Feuer am Wochenende",bodyText:"Ergänzen Sie Ihr Catering mit einer spektakulären Meeresfrüchte-Paella, die live in Ihrem Garten oder auf Ihrer Terrasse in München zubereitet wird.",ctaText:"Paella-Termine Anfragen"}]},Ih={brand:xh,nav:yh,hero:bh,benefits:kh,howItWorks:wh,menus:jh,bookingWidget:Nh,philosophy:Sh,guarantee:Ch,testimonials:zh,gourmetShop:Eh,finalCta:Ph,stickyCta:Mh,modal:Th,footer:Oh,promotions:Fh},zn={es:eh,en:vh,de:Ih},Vd=j.createContext(),Ah=({children:e})=>{const[t,n]=j.useState("es"),r=i=>{const s=i.split(".");let o=zn[t]||zn.es;for(const l of s)if(o[l]!==void 0)o=o[l];else{let c=zn.es;for(const d of s)if(c&&c[d]!==void 0)c=c[d];else return i;return c}return o};return a.jsx(Vd.Provider,{value:{lang:t,setLang:n,t:r,content:zn[t]||zn.es},children:e})},ce=()=>{const e=j.useContext(Vd);if(!e)throw new Error("useTranslation must be used within a LanguageProvider");return e},$d=j.createContext(),El="munchos_auth_users_v1",mi="munchos_auth_session_v1",Lh=[{email:"owner@munchos.de",password:"owner",name:"Oskar Marijuan (Owner)",role:"owner"},{email:"staff@munchos.de",password:"staff",name:"MUNCHOS Equipo Staff",role:"staff"}],Rh=({children:e})=>{const[t,n]=j.useState(()=>{try{const d=localStorage.getItem(El);if(d)return JSON.parse(d)}catch{}return Lh}),[r,i]=j.useState(()=>{try{const d=localStorage.getItem(mi);if(d)return JSON.parse(d)}catch{}return null});j.useEffect(()=>{try{localStorage.setItem(El,JSON.stringify(t))}catch{}},[t]),j.useEffect(()=>{try{r?localStorage.setItem(mi,JSON.stringify(r)):localStorage.removeItem(mi)}catch{}},[r]);const s=(d,m)=>{const g=t.find(h=>h.email.toLowerCase()===d.toLowerCase()&&h.password===m);if(g){const{password:h,...y}=g;return i(y),{success:!0,user:y}}return{success:!1,error:"Credenciales inválidas. Comprueba tu correo y contraseña."}},o=()=>{i(null)},l=d=>{if(!r||r.role!=="owner")return{success:!1,error:"Solo el propietario (Owner) puede crear cuentas de staff."};if(t.some(y=>y.email.toLowerCase()===d.email.toLowerCase()))return{success:!1,error:"Ya existe una cuenta con este correo electrónico."};const g={...d,role:"staff"},h=[...t,g];return n(h),{success:!0,user:g}},c=d=>r?r.role==="owner"?!0:["view_calendar","manage_reservations","add_reservation"].includes(d):!1;return a.jsx($d.Provider,{value:{currentUser:r,users:t,login:s,logout:o,createStaffAccount:l,hasPermission:c},children:e})},Oa=()=>{const e=j.useContext($d);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),P=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:c,...d},m)=>j.createElement("svg",{ref:m,..._h,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Dh(e)}`,l].join(" "),...d},[...t.map(([g,h])=>j.createElement(g,h)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=P("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=P("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=P("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=P("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=P("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=P("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=P("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=P("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=P("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=P("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=P("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=P("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=P("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=P("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=P("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=P("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=P("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=P("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=P("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=P("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=P("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=P("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=P("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=P("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=P("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=P("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=P("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=P("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=P("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=P("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=P("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=P("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=P("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=P("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=P("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=P("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=P("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=P("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=P("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=P("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=P("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=P("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=P("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=P("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=P("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=P("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=P("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=P("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),xf=({onOpenCart:e,cartCount:t,onOpenBooking:n})=>{const{lang:r,setLang:i,t:s}=ce(),[o,l]=j.useState(!1),[c,d]=j.useState(!1);j.useEffect(()=>{const g=()=>{l(window.scrollY>30)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const m=[{href:"#menus",label:s("nav.menus")},{href:"#como-funciona",label:s("nav.experiencia")},{href:"#testimonios",label:s("nav.testimonios")},{href:"#gourmet",label:s("nav.gourmet")}];return a.jsxs("header",{className:`navbar-glass-header ${o?"is-scrolled":""}`,children:[a.jsxs("div",{className:"container nav-glass-container",children:[a.jsx("a",{href:"#",className:"nav-logo-link",title:"MUNCHOS Catering Boutique",children:a.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"nav-logo-img"})}),a.jsx("nav",{className:"desktop-nav-center",children:m.map((g,h)=>a.jsx("a",{href:g.href,className:"nav-glass-link",children:g.label},h))}),a.jsxs("div",{className:"nav-glass-right",children:[a.jsxs("div",{className:"compact-lang-switcher",children:[a.jsx("button",{className:`compact-lang-btn ${r==="es"?"active":""}`,onClick:()=>i("es"),title:"Español (Castellano)",children:"ES"}),a.jsx("span",{className:"lang-divider",children:"|"}),a.jsx("button",{className:`compact-lang-btn ${r==="de"?"active":""}`,onClick:()=>i("de"),title:"Deutsch",children:"DE"}),a.jsx("span",{className:"lang-divider",children:"|"}),a.jsx("button",{className:`compact-lang-btn ${r==="en"?"active":""}`,onClick:()=>i("en"),title:"English",children:"EN"})]}),a.jsxs("button",{className:"nav-cart-btn",onClick:e,"aria-label":"Ver carrito gourmet",title:"Carrito de Compras",children:[a.jsx(ar,{size:18}),t>0&&a.jsx("span",{className:"nav-cart-badge",children:t})]}),a.jsxs("button",{className:"btn nav-secondary-cta",onClick:n,children:[a.jsx(Ve,{size:15}),a.jsx("span",{children:s("nav.reservar")})]}),a.jsx("button",{className:"mobile-hamburger",onClick:()=>d(!c),"aria-label":"Toggle Navigation Menu",children:c?a.jsx(Dt,{size:24}):a.jsx(nf,{size:24})})]})]}),c&&a.jsx("div",{className:"mobile-overlay",onClick:()=>d(!1),children:a.jsxs("div",{className:"mobile-drawer",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"mobile-drawer-header",children:[a.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"mobile-logo"}),a.jsx("button",{className:"mobile-close",onClick:()=>d(!1),children:a.jsx(Dt,{size:24})})]}),a.jsx("div",{className:"mobile-nav-links",children:m.map((g,h)=>a.jsx("a",{href:g.href,onClick:()=>d(!1),children:g.label},h))}),a.jsxs("div",{className:"mobile-drawer-actions",children:[a.jsxs("div",{className:"mobile-drawer-lang",children:[a.jsx("button",{className:`mobile-lang-btn ${r==="es"?"active":""}`,onClick:()=>{i("es"),d(!1)},children:"Español (ES)"}),a.jsx("button",{className:`mobile-lang-btn ${r==="de"?"active":""}`,onClick:()=>{i("de"),d(!1)},children:"Deutsch (DE)"}),a.jsx("button",{className:`mobile-lang-btn ${r==="en"?"active":""}`,onClick:()=>{i("en"),d(!1)},children:"English (EN)"})]}),a.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{d(!1),n()},children:[a.jsx(Ve,{size:16}),a.jsx("span",{children:s("nav.reservar")})]})]})]})}),a.jsx("style",{children:`
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
      `})]})},ss="munchos_cms_products_v1",os="munchos_cms_promotions_v1",ls="munchos_cms_hero_slides_v1",cs=[{id:"pintxos",title:"01 Pintxos Gourmet",subtitle:"Elaboración y artesanía vasca",video:"https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-41484-large.mp4",poster:"/images/IMG_1227.jpeg",active:!0},{id:"livecooking",title:"02 Live Cooking",subtitle:"Paellas in situ & show cooking",video:"https://assets.mixkit.co/videos/preview/mixkit-cooking-a-dish-in-a-pan-over-a-fire-41481-large.mp4",poster:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",active:!0},{id:"sushi",title:"03 Sushi & Premium",subtitle:"Corte Nikkei y emplatado de autor",video:"https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-sushi-rolls-in-a-kitchen-42542-large.mp4",poster:"/images/chef-arranging-sushi-front-view.jpg",active:!0}],Pl=[{id:"txakoli-premium",name:"Txakoli Getariako Reserva MUNCHOS",category:"Bodega Vasca",price:22,image:"/images/IMG_1240.jpeg",desc:"Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi.",active:!0},{id:"aove-piparras",name:"Piparras de Ibarra en Vinagre de Manzana",category:"Conservas Artesanales",price:14.5,image:"/images/IMG_1241.jpeg",desc:"Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional.",active:!0},{id:"anchoas-cantabrico",name:"Anchoas del Cantábrico en AOVE (Costera)",category:"Salazones Premium",price:18.9,image:"/images/IMG_1242.jpeg",desc:"Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra.",active:!0},{id:"queso-idiazabal",name:"Queso Idiazábal Ahumado Artesano (Cuña 350g)",category:"Quesos de Autor",price:16,image:"/images/IMG_2093.jpeg",desc:"Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca.",active:!0}],Ml=[{id:"promo_01",headline:"Especial Paellas Vascas a Fuego Vivo los Fines de Semana",bodyText:"Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.",image:"/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg",ctaText:"Consultar Fechas de Paella",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-09-30"},{id:"promo_02",headline:"Maridaje Gratuito de Txakoli en Reservas > 30 personas",bodyText:"Este mes, todas las reservas confirmadas de más de 30 invitados incluyen degustación de nuestro Txakoli Reserva.",image:"/images/IMG_1240.jpeg",ctaText:"Aprovechar Promoción",ctaLink:"#personalizacion",active:!0,startDate:"2026-08-01",endDate:"2026-08-31"}],su=()=>{try{const e=localStorage.getItem(ss);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(ss,JSON.stringify(Pl)),Pl},ds=e=>{try{localStorage.setItem(ss,JSON.stringify(e))}catch{}},yf=e=>{const t=su(),n=t.findIndex(r=>r.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.unshift(e),ds(t),t},ho=()=>{try{const e=localStorage.getItem(os);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(os,JSON.stringify(Ml)),Ml},us=e=>{try{localStorage.setItem(os,JSON.stringify(e))}catch{}},bf=e=>{const t=ho(),n=t.findIndex(r=>r.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.unshift(e),us(t),t},kf=()=>{const e=ho(),t=new Date().toISOString().split("T")[0];return e.filter(n=>!(!n.active||n.startDate&&n.startDate>t||n.endDate&&n.endDate<t))},fo=()=>{try{const e=localStorage.getItem(ls);if(e)return JSON.parse(e)}catch{}return localStorage.setItem(ls,JSON.stringify(cs)),cs},ms=e=>{try{localStorage.setItem(ls,JSON.stringify(e))}catch{}},wf=e=>{const t=fo(),n=t.findIndex(r=>r.id===e.id);return n!==-1?t[n]={...t[n],...e}:t.push(e),ms(t),t},jf=()=>{const t=fo().filter(n=>n.active!==!1);return t.length>0?t:cs},go=(e,t=800,n=800,r=.78)=>new Promise((i,s)=>{if(!e||!e.type.startsWith("image/")){s(new Error("El archivo no es una imagen válida."));return}const o=new FileReader;o.onerror=s,o.onload=l=>{const c=new Image;c.onerror=s,c.onload=()=>{let d=c.width,m=c.height;(d>t||m>n)&&(d/m>t/n?(m=Math.round(m*t/d),d=t):(d=Math.round(d*n/m),m=n));const g=document.createElement("canvas");g.width=d,g.height=m,g.getContext("2d").drawImage(c,0,0,d,m);const y=g.toDataURL("image/jpeg",r);i(y)},c.src=l.target.result},o.readAsDataURL(e)}),Nf=({onOpenBooking:e})=>{const{t}=ce(),[n,r]=j.useState([]),[i,s]=j.useState(0);return j.useEffect(()=>{const o=jf();r(o)},[]),j.useEffect(()=>{if(n.length>1){const o=setInterval(()=>{s(l=>(l+1)%n.length)},6e3);return()=>clearInterval(o)}},[i,n]),n.length===0?null:a.jsxs("section",{className:"hero-fullscreen",children:[a.jsxs("div",{className:"hero-video-container",children:[n.map((o,l)=>a.jsxs("div",{className:`hero-video-slide ${l===i?"active":""}`,children:[o.poster&&a.jsx("img",{src:o.poster,alt:o.title,className:"hero-fallback-img"}),o.video&&a.jsx("video",{src:o.video,poster:o.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:l===0?"auto":"metadata",className:"hero-video"})]},o.id||l)),a.jsx("div",{className:"hero-horizontal-overlay"}),a.jsx("div",{className:"hero-vertical-overlay"})]}),a.jsx("div",{className:"container hero-content-wrapper",children:a.jsxs("div",{className:"hero-text-block",children:[a.jsxs("div",{className:"hero-gold-badge",children:[a.jsx(_t,{size:14,className:"badge-icon"}),a.jsx("span",{children:t("hero.badge")})]}),a.jsxs("h1",{className:"hero-h1-title",children:[t("hero.headlinePart1"),a.jsx("span",{className:"gold-ranchers-highlight",children:t("hero.headlineHighlight")}),t("hero.headlinePart2")]}),a.jsx("p",{className:"hero-desc-paragraph",children:t("hero.subheadline")}),a.jsxs("div",{className:"hero-buttons-group",children:[a.jsxs("button",{className:"btn hero-primary-btn",onClick:e,children:[a.jsx("span",{children:t("hero.ctaPrimary")}),a.jsx(Ia,{size:18})]}),a.jsxs("a",{href:"#menus",className:"btn hero-secondary-btn",children:[a.jsx(vf,{size:17}),a.jsx("span",{children:t("hero.ctaSecondary")})]})]}),a.jsx("div",{className:"hero-controls-panel",children:n.map((o,l)=>{const c=l===i,d=(o.title||"").replace(/^\d+\s*/,"");return a.jsxs("button",{className:`carousel-tab-btn ${c?"active":""}`,onClick:()=>s(l),title:`Ver ${o.title}`,children:[a.jsx("div",{className:"tab-progress-track",children:c&&a.jsx("div",{className:"tab-progress-bar"},i)}),a.jsxs("div",{className:"tab-text-info",children:[a.jsx("span",{className:"tab-title",children:d}),o.subtitle&&a.jsx("span",{className:"tab-sub",children:o.subtitle})]})]},o.id||l)})}),a.jsx("div",{className:"hero-proof-cards-row",children:t("hero.stats").map((o,l)=>a.jsxs("div",{className:"proof-metric-card",children:[a.jsx("span",{className:"metric-val",children:o.value}),a.jsx("span",{className:"metric-lbl",children:o.label})]},l))})]})}),a.jsx("style",{children:`
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
            padding-bottom: 2rem;
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
            gap: 12px;
            margin-bottom: 1rem;
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
      `})]})},nt=({color:e="#D4AF37",width:t=160,height:n=36})=>a.jsx("div",{className:"horizontal-pintxo-wrapper",style:{display:"flex",justifyContent:"center",margin:"0 auto 1rem auto"},children:a.jsxs("svg",{width:t,height:n,viewBox:"0 0 200 44",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[a.jsx("line",{x1:"10",y1:"22",x2:"190",y2:"22",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),a.jsx("polygon",{points:"35,10 65,22 35,34",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),a.jsx("polygon",{points:"100,8 118,22 100,36 82,22",fill:"none",stroke:e,strokeWidth:"3.5",strokeLinejoin:"round"}),a.jsx("rect",{x:"140",y:"10",width:"16",height:"24",rx:"8",fill:"none",stroke:e,strokeWidth:"3.5"})]})}),Sf={UtensilsCrossed:gf,Sparkles:po,Sliders:mf,HeartHandshake:Kh},Cf=()=>{const{t:e}=ce();return a.jsxs("section",{id:"beneficios",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("benefits.badge")}),a.jsx("h2",{children:e("benefits.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:e("benefits.subtitle")})]}),a.jsx("div",{className:"benefits-grid",children:e("benefits.items").map((t,n)=>{const r=Sf[t.icon]||po;return a.jsxs("div",{className:"glass-card benefit-card",children:[a.jsx("div",{className:"icon-wrapper",children:a.jsx(r,{size:28})}),a.jsx("h3",{children:t.title}),a.jsx("p",{children:t.desc})]},n)})})]}),a.jsx("style",{children:`
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
      `})]})},zf=({onOpenBooking:e})=>{const{t}=ce();return a.jsxs("section",{id:"como-funciona",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("howItWorks.badge")}),a.jsx("h2",{children:t("howItWorks.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:t("howItWorks.subtitle")})]}),a.jsx("div",{className:"steps-container",children:t("howItWorks.steps").map((n,r)=>a.jsxs("div",{className:"step-card",children:[a.jsx("div",{className:"step-number",children:n.number}),a.jsxs("div",{className:"step-content",children:[a.jsx("h3",{children:n.title}),a.jsx("p",{children:n.desc})]}),r<3&&a.jsx("div",{className:"step-connector",children:a.jsx(Fa,{size:20})})]},r))}),a.jsx("div",{className:"how-it-works-cta",children:a.jsx("button",{className:"btn btn-outline-gold",onClick:e,children:a.jsx("span",{children:"Diseña tu evento en 2 minutos"})})})]}),a.jsx("style",{children:`
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
      `})]})},Ef=({onSelectMenuCategory:e})=>{const{t}=ce(),n=t("menus.categories"),[r,i]=j.useState(n[0].id),s=n.find(o=>o.id===r)||n[0];return a.jsxs("section",{id:"menus",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("menus.badge")}),a.jsx("h2",{children:t("menus.title")}),a.jsx(nt,{color:"#D4AF37",width:140,height:32}),a.jsx("p",{children:t("menus.subtitle")})]}),a.jsx("div",{className:"menu-tabs",children:n.map(o=>a.jsx("button",{className:`menu-tab-btn ${r===o.id?"active":""}`,onClick:()=>i(o.id),children:a.jsx("span",{children:o.name})},o.id))}),a.jsxs("div",{className:"menu-card-display",children:[a.jsxs("div",{className:"menu-image-column",children:[a.jsx("img",{src:s.image,alt:s.name,className:"menu-featured-img"}),a.jsx("div",{className:"menu-img-badge",children:s.tagline})]}),a.jsxs("div",{className:"menu-info-column",children:[a.jsx("h3",{className:"menu-cat-title",children:s.name}),a.jsx("p",{className:"menu-cat-desc",children:s.description}),a.jsx("div",{className:"menu-highlights",children:s.highlights.map((o,l)=>a.jsxs("span",{className:"highlight-tag",children:[a.jsx(lo,{size:15}),a.jsx("span",{children:o})]},l))}),a.jsxs("div",{className:"dishes-list",children:[a.jsx("h4",{children:"Selección representativa de platos:"}),a.jsx("ul",{children:s.items.map((o,l)=>a.jsxs("li",{children:[a.jsx("span",{className:"bullet",children:"•"}),a.jsx("span",{children:o})]},l))})]}),a.jsxs("button",{className:"btn btn-primary menu-cta-btn",onClick:()=>e(s.id),children:[a.jsxs("span",{children:[t("menus.cta")," — ",s.name]}),a.jsx(Ia,{size:18})]})]})]})]}),a.jsx("style",{children:`
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
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        .menu-card-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(212, 175, 55, 0.2);
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
          background: rgba(212, 175, 55, 0.12);
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
      `})]})},vo={maxEventsPerDay:2,maxGuestsPerDay:60},xo=(e,t=20,n=[],r=vo)=>{if(!e)return{isAvailable:!1,reason:"No date provided"};const{maxEventsPerDay:i=2,maxGuestsPerDay:s=60}=r,o=n.filter(d=>d.date===e&&d.status!=="cancelled"),l=o.length,c=o.reduce((d,m)=>d+(parseInt(m.guests)||0),0);return l>=i?{isAvailable:!1,existingEvents:l,currentTotalGuests:c,reason:`Capacidad máxima de eventos alcanzada (${l}/${i})`}:c+t>s?{isAvailable:!1,existingEvents:l,currentTotalGuests:c,reason:`Límite de comensales superado para el día (${c+t}/${s})`}:{isAvailable:!0,existingEvents:l,currentTotalGuests:c,reason:"Fecha disponible"}},Pf=(e,t=20,n=[],r=vo,i=4)=>{if(!e)return[];const s=new Date(e),o=new Date;o.setHours(0,0,0,0);const l=[],c=14;for(let d=-c;d<=c;d++){if(d===0)continue;const m=new Date(s);if(m.setDate(m.getDate()+d),m<o)continue;const g=m.toISOString().split("T")[0];xo(g,t,n,r).isAvailable&&l.push({dateStr:g,distance:Math.abs(d),offsetDays:d,formattedLabel:m.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"})})}return l.sort((d,m)=>d.distance-m.distance),l.slice(0,i)},ps="munchos_reservations_v1",Mf="munchos_settings_v1",Tl=[{id:"res_001",date:"2026-08-15",guests:25,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos"],status:"confirmed",source:"public",clientName:"Elena R.",clientEmail:"elena.r@example.de",clientPhone:"+49 176 9876543",location:"Bogenhausen, Múnich",notes:"Cumpleaños 40º. 2 comensales celíacos.",estimatedTotal:1480,pricePerPerson:59,createdAt:"2026-08-01T10:00:00Z"},{id:"res_002",date:"2026-08-15",guests:35,menuType:"full-experience",menuName:"Experiencia Completa MUNCHOS",extras:["Mesa Dulce Vasca"],status:"confirmed",source:"manual",clientName:"Carlos M.",clientEmail:"carlos.firm@munich-law.de",clientPhone:"+49 89 5544332",location:"Glockenbachviertel, Múnich",notes:"Evento de empresa.",estimatedTotal:2275,pricePerPerson:65,createdAt:"2026-08-02T14:30:00Z"},{id:"res_003",date:"2026-08-22",guests:18,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:["Vajilla & Cristalería Premium"],status:"pending",source:"public",clientName:"Markus & Sofía",clientEmail:"sofia.m@web.de",clientPhone:"+49 171 2233445",location:"Schwabing, Múnich",notes:"Cena íntima de aniversario.",estimatedTotal:774,pricePerPerson:43,createdAt:"2026-08-04T16:15:00Z"},{id:"res_004",date:"2026-08-28",guests:40,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",extras:["Chef & Showcooking en vivo","Maridaje Vinos Vascos","Mesa Dulce Vasca"],status:"confirmed",source:"public",clientName:"Thomas B.",clientEmail:"thomas.b@techmunich.io",clientPhone:"+49 152 8877665",location:"Lehel, Múnich",notes:"Celebración de proyecto.",estimatedTotal:2840,pricePerPerson:71,createdAt:"2026-08-05T09:20:00Z"},{id:"res_005",date:"2026-09-05",guests:15,menuType:"de-tapas",menuName:"Experiencia Pinchos & Tapas",extras:[],status:"pending",source:"manual",clientName:"Laura H.",clientEmail:"laura.h@gmail.com",clientPhone:"+49 179 4455667",location:"Haidhausen, Múnich",notes:"Reserva telefónica pendiente de confirmación de menú.",estimatedTotal:570,pricePerPerson:38,createdAt:"2026-08-06T11:00:00Z"}],ir=()=>{try{const e=localStorage.getItem(ps);if(e)return JSON.parse(e)}catch(e){console.error("Error reading reservations from storage",e)}return localStorage.setItem(ps,JSON.stringify(Tl)),Tl},ou=e=>{try{localStorage.setItem(ps,JSON.stringify(e))}catch(t){console.error("Error saving reservations",t)}},lu=e=>{const t=ir(),n={id:`res_${Date.now()}`,status:e.status||"pending",source:e.source||"public",createdAt:new Date().toISOString(),...e},r=[n,...t];return ou(r),n},Tf=(e,t)=>{const r=ir().map(i=>i.id===e?{...i,status:t}:i);return ou(r),r},cu=()=>{try{const e=localStorage.getItem(Mf);if(e)return JSON.parse(e)}catch{}return vo},Of=({requestedDateStr:e,reason:t,alternativeDates:n,onSelectAlternative:r})=>!n||n.length===0?null:a.jsxs("div",{className:"alternative-dates-box",children:[a.jsxs("div",{className:"alt-header",children:[a.jsx(Bh,{size:24,className:"icon-alert"}),a.jsxs("div",{children:[a.jsxs("h4",{children:["Fecha no disponible (",e,")"]}),a.jsx("p",{children:t||"Hemos alcanzado la capacidad máxima de reservas para este día."})]})]}),a.jsxs("div",{className:"alt-body",children:[a.jsx("span",{className:"alt-title",children:"Fechas alternativas más cercanas disponibles:"}),a.jsx("div",{className:"alt-grid",children:n.map((i,s)=>a.jsxs("button",{type:"button",className:"alt-date-card",onClick:()=>r(i.dateStr),children:[a.jsxs("div",{className:"alt-date-info",children:[a.jsx(Ve,{size:18,className:"icon-cyan"}),a.jsx("span",{className:"alt-date-text",children:i.formattedLabel})]}),a.jsxs("div",{className:"alt-action",children:[a.jsx("span",{className:"alt-badge",children:i.offsetDays>0?`+${i.offsetDays} días`:`${i.offsetDays} días`}),a.jsx(Fa,{size:16})]})]},s))})]}),a.jsx("style",{children:`
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
      `})]}),Ff=({onSubmitBooking:e})=>{const{t}=ce(),[n,r]=j.useState(25),[i,s]=j.useState(""),[o,l]=j.useState("sushi-fusion"),[c,d]=j.useState(["chef"]),[m,g]=j.useState(null),[h,y]=j.useState([]),[x,k]=j.useState([]),[z,f]=j.useState({});j.useEffect(()=>{const T=ir(),G=cu();k(T),f(G)},[]),j.useEffect(()=>{if(!i){g(null),y([]);return}const T=xo(i,n,x,z);if(g(T),T.isAvailable)y([]);else{const G=Pf(i,n,x,z,4);y(G)}},[i,n,x,z]);const u=t("bookingWidget.menuOptions"),p=t("bookingWidget.extrasList"),v=u.find(T=>T.id===o)||u[0],b=v.price*n;let N=0;c.forEach(T=>{const G=p.find(jt=>jt.id===T);G&&(G.price&&(N+=G.price),G.pricePerGuest&&(N+=G.pricePerGuest*n))});const S=b+N,M=Math.round(S/n),H=T=>{c.includes(T)?d(c.filter(G=>G!==T)):d([...c,T])},F=T=>{s(T)},de=T=>{if(T.preventDefault(),m&&!m.isAvailable){alert("La fecha seleccionada no tiene capacidad disponible. Por favor, elige una de las fechas alternativas propuestas.");return}e({guests:n,eventDate:i,menuName:v.name,menuId:v.id,extras:c.map(G=>{var jt;return(jt=p.find(La=>La.id===G))==null?void 0:jt.name}).filter(Boolean),estimatedTotal:S,pricePerPerson:M})};return a.jsxs("section",{id:"personalizacion",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:t("bookingWidget.badge")}),a.jsx("h2",{children:t("bookingWidget.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:t("bookingWidget.subtitle")})]}),a.jsx("div",{className:"calculator-wrapper",children:a.jsxs("form",{onSubmit:de,className:"calculator-card",children:[a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(fn,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.guests")}),a.jsxs("span",{className:"guest-badge-value",children:[n," invitados"]})]}),a.jsx("input",{type:"range",min:"10",max:"50",step:"1",value:n,onChange:T=>r(parseInt(T.target.value)),className:"custom-slider"}),a.jsxs("div",{className:"slider-range-labels",children:[a.jsx("span",{children:"10 (Íntimo)"}),a.jsx("span",{children:"30"}),a.jsx("span",{children:"50 (Máximo)"})]})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("div",{className:"calc-label-row",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(Ve,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.date")})]}),m&&m.isAvailable&&a.jsxs("span",{className:"avail-badge-success",children:[a.jsx(lo,{size:15}),a.jsx("span",{children:"Fecha Disponible"})]})]}),a.jsx("input",{type:"date",value:i,onChange:T=>s(T.target.value),required:!0,className:`calc-input ${m&&!m.isAvailable?"is-invalid":""}`}),m&&!m.isAvailable&&a.jsx(Of,{requestedDateStr:i,reason:m.reason,alternativeDates:h,onSelectAlternative:F})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(Uh,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.menuType")})]}),a.jsx("div",{className:"menu-options-grid",children:u.map(T=>a.jsx("div",{className:`menu-radio-card ${o===T.id?"selected":""}`,onClick:()=>l(T.id),children:a.jsxs("div",{className:"radio-header",children:[a.jsx("span",{className:"radio-title",children:T.name}),a.jsxs("span",{className:"radio-price",children:[T.price,"€ / inv"]})]})},T.id))})]}),a.jsxs("div",{className:"calc-group",children:[a.jsxs("label",{className:"calc-label",children:[a.jsx(po,{size:20,className:"icon-cyan"}),a.jsx("span",{children:t("bookingWidget.labels.extras")})]}),a.jsx("div",{className:"extras-grid",children:p.map(T=>{const G=c.includes(T.id);return a.jsxs("div",{className:`extra-checkbox-card ${G?"active":""}`,onClick:()=>H(T.id),children:[G?a.jsx(Vh,{size:20,className:"icon-cyan"}):a.jsx(pf,{size:20}),a.jsx("span",{children:T.name})]},T.id)})})]}),a.jsxs("div",{className:"calc-summary-box",children:[a.jsxs("div",{className:"price-estimation",children:[a.jsx("span",{className:"est-label",children:t("bookingWidget.labels.estimatedTotal")}),a.jsxs("div",{className:"est-amount-row",children:[a.jsxs("span",{className:"est-total",children:[S,"€"]}),a.jsxs("span",{className:"est-per-person",children:["(",M,"€ ",t("bookingWidget.labels.perPerson"),")"]})]})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary calc-submit-btn",disabled:m&&!m.isAvailable,children:[a.jsx(eu,{size:18}),a.jsx("span",{children:t("bookingWidget.labels.submitBtn")})]})]})]})})]}),a.jsx("style",{children:`
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
      `})]})},If=()=>{const{t:e}=ce();return a.jsxs("section",{id:"filosofia",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:"3rem"},children:[a.jsx("div",{className:"badge",children:e("philosophy.badge")}),a.jsx("h2",{children:e("philosophy.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32})]}),a.jsxs("div",{className:"philosophy-grid",children:[a.jsxs("div",{className:"philosophy-content",children:[a.jsxs("blockquote",{className:"philosophy-quote",children:['"',e("philosophy.text"),'"']}),a.jsxs("div",{className:"author-tag",children:[a.jsx("span",{className:"author-name",children:e("philosophy.quoteAuthor")}),a.jsx("span",{className:"author-role",children:e("philosophy.quoteRole")})]}),a.jsx("div",{className:"philosophy-points",children:e("philosophy.points").map((t,n)=>a.jsxs("div",{className:"point-item",children:[a.jsx("div",{className:"point-icon",children:a.jsx(Xh,{size:18})}),a.jsxs("div",{children:[a.jsx("h4",{children:t.title}),a.jsx("p",{children:t.desc})]})]},n))})]}),a.jsx("div",{className:"philosophy-image-col",children:a.jsxs("div",{className:"image-frame",children:[a.jsx("img",{src:"/images/oskar/ChatGPT Image 16 abr 2026, 12_37_25.png",alt:"Chef Oskar Marijuan MUNCHOS Munich",className:"chef-img",onError:t=>{t.target.src="/images/lifestyle-people-learning-make-sushi.jpg"}}),a.jsxs("div",{className:"experience-badge",children:[a.jsx(Gh,{size:24,className:"cyan-icon"}),a.jsxs("div",{children:[a.jsx("span",{className:"badge-title",children:"Gastronomía Vasca"}),a.jsx("span",{className:"badge-sub",children:"en el corazón de Múnich"})]})]})]})})]})]}),a.jsx("style",{children:`
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
      `})]})},Af=[uo,_t,af],Lf=()=>{const{t:e}=ce();return a.jsxs("section",{id:"garantia",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("guarantee.badge")}),a.jsx("h2",{children:e("guarantee.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32}),a.jsx("p",{children:e("guarantee.subtitle")})]}),a.jsx("div",{className:"guarantee-cards-grid",children:e("guarantee.cards").map((t,n)=>{const r=Af[n]||_t;return a.jsxs("div",{className:"glass-card guarantee-card",children:[a.jsx("div",{className:"guarantee-icon",children:a.jsx(r,{size:26})}),a.jsx("h3",{children:t.title}),a.jsx("p",{children:t.desc})]},n)})})]}),a.jsx("style",{children:`
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
      `})]})},Rf=()=>{const{t:e}=ce();return a.jsxs("section",{id:"testimonios",className:"section-padding bg-surface",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:e("testimonials.badge")}),a.jsx("h2",{children:e("testimonials.title")}),a.jsx(nt,{color:"#3EC1C9",width:140,height:32})]}),a.jsx("div",{className:"testimonials-grid",children:e("testimonials.reviews").map((t,n)=>a.jsxs("div",{className:"glass-card testimonial-card",children:[a.jsx("div",{className:"quote-icon",children:a.jsx(df,{size:28})}),a.jsx("div",{className:"rating-row",children:[...Array(t.rating)].map((r,i)=>a.jsx(hf,{size:16,fill:"#3EC1C9",color:"#3EC1C9"},i))}),a.jsxs("p",{className:"testimonial-text",children:['"',t.comment,'"']}),a.jsxs("div",{className:"reviewer-info",children:[a.jsx("span",{className:"reviewer-name",children:t.name}),a.jsx("span",{className:"reviewer-event",children:t.event})]})]},n))})]}),a.jsx("style",{children:`
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
      `})]})},_f=({onAddToCart:e,onOpenCart:t})=>{const{t:n}=ce(),r=n("gourmetShop.products");return a.jsxs("section",{id:"gourmet",className:"section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"badge",children:n("gourmetShop.badge")}),a.jsx("h2",{children:n("gourmetShop.title")}),a.jsx(nt,{color:"#D4AF37",width:140,height:32}),a.jsx("p",{children:n("gourmetShop.subtitle")})]}),a.jsx("div",{className:"gourmet-grid",children:r.map(i=>a.jsxs("div",{className:"gourmet-card",children:[a.jsxs("div",{className:"gourmet-img-wrapper",children:[a.jsx("img",{src:i.image,alt:i.name,className:"gourmet-img"}),a.jsx("span",{className:"gourmet-category",children:i.category})]}),a.jsxs("div",{className:"gourmet-content",children:[a.jsx("h3",{children:i.name}),a.jsx("p",{children:i.desc}),a.jsxs("div",{className:"gourmet-footer",children:[a.jsx("div",{className:"gourmet-price-row",children:a.jsxs("span",{className:"gourmet-price",children:[i.price.toFixed(2),"€"]})}),a.jsxs("button",{className:"btn btn-primary gourmet-add-btn",onClick:()=>e(i),children:[a.jsx(et,{size:16}),a.jsx("span",{children:n("gourmetShop.addBtn")})]})]})]})]},i.id))}),a.jsx("div",{className:"gourmet-bottom-cta",children:a.jsxs("button",{className:"btn btn-outline-gold",onClick:t,children:[a.jsx(ar,{size:18}),a.jsx("span",{children:n("gourmetShop.interestBtn")})]})})]}),a.jsx("style",{children:`
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
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
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
          color: var(--accent-cyan);
          white-space: nowrap;
        }

        .gourmet-add-btn {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          justify-content: center;
          white-space: nowrap !important;
        }

        .gourmet-bottom-cta {
          text-align: center;
          margin-top: 3rem;
        }
      `})]})},Df=({onOpenBooking:e})=>{const{t}=ce();return a.jsxs("section",{className:"section-padding final-cta-section",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"final-cta-card",children:[a.jsx("h2",{children:t("finalCta.title")}),a.jsx(nt,{color:"#D4AF37",width:160,height:36}),a.jsx("p",{children:t("finalCta.subtitle")}),a.jsxs("div",{className:"final-cta-actions",children:[a.jsxs("button",{className:"btn btn-primary btn-large",onClick:e,children:[a.jsx(Ve,{size:20}),a.jsx("span",{children:t("finalCta.primaryBtn")})]}),a.jsxs("a",{href:"https://wa.me/498912345678",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-large",children:[a.jsx(rf,{size:20}),a.jsx("span",{children:t("finalCta.secondaryBtn")})]})]})]})}),a.jsx("style",{children:`
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
      `})]})},Bf=({onOpenBooking:e})=>{const{t}=ce(),[n,r]=j.useState(!1);return j.useEffect(()=>{const i=()=>{r(window.scrollY>450)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),n?a.jsxs("div",{className:"sticky-cta-bar",children:[a.jsxs("div",{className:"container sticky-container",children:[a.jsxs("div",{className:"sticky-info",children:[a.jsx("img",{src:"/images/logo-definitive.png?v=5",alt:"MUNCHOS",className:"sticky-logo-img"}),a.jsx("span",{className:"sticky-sub",children:t("stickyCta.text")})]}),a.jsxs("button",{className:"btn btn-primary sticky-btn",onClick:e,children:[a.jsx(Ve,{size:17}),a.jsx("span",{children:t("stickyCta.button")})]})]}),a.jsx("style",{children:`
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
      `})]}):null},Hf=()=>{const{t:e}=ce();return a.jsxs("footer",{className:"footer-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-brand-col",children:[a.jsx("img",{src:"/images/logo-text-only.svg?v=4",alt:"MUNCHOS",className:"footer-logo"}),a.jsx("p",{className:"footer-about",children:e("footer.about")}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#","aria-label":"Instagram",children:a.jsx(Yh,{size:20})}),a.jsx("a",{href:"#","aria-label":"Facebook",children:a.jsx(qh,{size:20})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.quickLinks")}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#beneficios",children:e("nav.beneficios")})}),a.jsx("li",{children:a.jsx("a",{href:"#como-funciona",children:e("nav.comoFunciona")})}),a.jsx("li",{children:a.jsx("a",{href:"#menus",children:e("nav.menus")})}),a.jsx("li",{children:a.jsx("a",{href:"#personalizacion",children:e("nav.personalizacion")})}),a.jsx("li",{children:a.jsx("a",{href:"#gourmet",children:e("nav.gourmet")})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.contact")}),a.jsxs("ul",{className:"contact-list",children:[a.jsxs("li",{children:[a.jsx(tf,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.address")})]}),a.jsxs("li",{children:[a.jsx(lf,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.phone")})]}),a.jsxs("li",{children:[a.jsx(mo,{size:18,className:"icon-cyan"}),a.jsx("span",{children:e("footer.email")})]})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:e("footer.legal")}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.impressum")})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.privacy")})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:e("footer.terms")})}),a.jsx("li",{style:{marginTop:"0.5rem"},children:a.jsxs("a",{href:"#admin",className:"admin-footer-link",children:[a.jsx(Zd,{size:13}),a.jsx("span",{children:"Acceso Propietario / Admin"})]})})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:e("footer.copyright")})})]}),a.jsx("style",{children:`
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

        .footer-logo {
          height: 34px;
          width: auto;
          margin-bottom: 1.25rem;
          display: block;
          filter: none !important;
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
      `})]})},Gf=({isOpen:e,onClose:t,cartItems:n,onUpdateQuantity:r,onRemoveItem:i})=>{if(ce(),!e)return null;const s=n.reduce((o,l)=>o+l.price*l.quantity,0);return a.jsxs("div",{className:"drawer-overlay",onClick:t,children:[a.jsxs("div",{className:"drawer-content",onClick:o=>o.stopPropagation(),children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"drawer-title-group",children:[a.jsx(ar,{size:22,className:"icon-gold"}),a.jsx("h3",{children:"Lista de Compras Gourmet"})]}),a.jsx("button",{className:"close-btn",onClick:t,"aria-label":"Cerrar",children:a.jsx(Dt,{size:24})})]}),a.jsx("div",{className:"drawer-body",children:n.length===0?a.jsxs("div",{className:"empty-cart",children:[a.jsx(ar,{size:48,className:"empty-icon"}),a.jsx("p",{children:"Tu selección gourmet está vacía."}),a.jsx("span",{className:"empty-sub",children:"Añade conservas, vinos vascos o quesos artesanos de nuestra tienda."})]}):a.jsx("div",{className:"cart-items-list",children:n.map(o=>a.jsxs("div",{className:"cart-item",children:[a.jsx("img",{src:o.image,alt:o.name,className:"cart-item-img"}),a.jsxs("div",{className:"cart-item-details",children:[a.jsx("h4",{children:o.name}),a.jsxs("span",{className:"cart-item-price",children:[(o.price*o.quantity).toFixed(2),"€"]}),a.jsxs("div",{className:"qty-controls",children:[a.jsx("button",{onClick:()=>r(o.id,o.quantity-1),children:a.jsx(sf,{size:14})}),a.jsx("span",{children:o.quantity}),a.jsx("button",{onClick:()=>r(o.id,o.quantity+1),children:a.jsx(et,{size:14})})]})]}),a.jsx("button",{className:"remove-item-btn",onClick:()=>i(o.id),children:a.jsx(Aa,{size:18})})]},o.id))})}),n.length>0&&a.jsxs("div",{className:"drawer-footer",children:[a.jsxs("div",{className:"cart-total-row",children:[a.jsx("span",{children:"Total Estimado:"}),a.jsxs("span",{className:"total-price",children:[s.toFixed(2),"€"]})]}),a.jsxs("button",{className:"btn btn-primary w-full",onClick:()=>{alert("¡Gracias! Hemos recibido tu solicitud para los productos gourmet seleccionados. Te contactaremos para coordinar el envío en Múnich."),t()},children:[a.jsx("span",{children:"Solicitar Productos Gourmet"}),a.jsx(Fa,{size:18})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Uf=({isOpen:e,onClose:t,initialData:n})=>{const{t:r}=ce(),[i,s]=j.useState({name:"",email:"",phone:"",location:"",notes:""}),[o,l]=j.useState(!1);if(!e)return null;const c=m=>{m.preventDefault(),lu({date:(n==null?void 0:n.eventDate)||new Date().toISOString().split("T")[0],guests:(n==null?void 0:n.guests)||20,menuType:(n==null?void 0:n.menuId)||"sushi-fusion",menuName:(n==null?void 0:n.menuName)||"Fusión Nikkei (Sushi + Pinchos)",extras:(n==null?void 0:n.extras)||[],estimatedTotal:(n==null?void 0:n.estimatedTotal)||0,pricePerPerson:(n==null?void 0:n.pricePerPerson)||0,status:"pending",source:"public",clientName:i.name,clientEmail:i.email,clientPhone:i.phone,location:i.location,notes:i.notes}),l(!0)},d=()=>{l(!1),t()};return a.jsxs("div",{className:"modal-overlay",onClick:d,children:[a.jsxs("div",{className:"modal-container",onClick:m=>m.stopPropagation(),children:[a.jsx("button",{className:"modal-close-btn",onClick:d,children:a.jsx(Dt,{size:24})}),o?a.jsxs("div",{className:"success-screen",children:[a.jsx(co,{size:64,className:"success-icon"}),a.jsx("h3",{children:r("modal.successTitle")}),a.jsx("p",{children:r("modal.successText")}),a.jsx("button",{className:"btn btn-primary",onClick:d,children:"Entendido"})]}):a.jsxs("div",{children:[a.jsx("h3",{className:"modal-title",children:r("modal.title")}),a.jsx("p",{className:"modal-subtitle",children:r("modal.subtitle")}),n&&a.jsxs("div",{className:"booking-summary-banner",children:[a.jsxs("span",{className:"summary-pill",children:[n.guests||25," Invitados"]}),n.eventDate&&a.jsxs("span",{className:"summary-pill",children:["Fecha: ",n.eventDate]}),a.jsx("span",{className:"summary-pill",children:n.menuName||"Menú Seleccionado"}),n.estimatedTotal&&a.jsxs("span",{className:"summary-pill gold-pill",children:["Est. Total: ",n.estimatedTotal,"€"]})]}),a.jsxs("form",{onSubmit:c,className:"modal-form",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.name")}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Maria Fernández",value:i.name,onChange:m=>s({...i,name:m.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.email")}),a.jsx("input",{type:"email",required:!0,placeholder:"maria@ejemplo.de",value:i.email,onChange:m=>s({...i,email:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.phone")}),a.jsx("input",{type:"tel",required:!0,placeholder:"+49 176 1234567",value:i.phone,onChange:m=>s({...i,phone:m.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.location")}),a.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen, Múnich",value:i.location,onChange:m=>s({...i,location:m.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:r("modal.notes")}),a.jsx("textarea",{rows:"3",placeholder:"Preferencias de tus invitados, opciones vegetarianas o sin gluten...",value:i.notes,onChange:m=>s({...i,notes:m.target.value})})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary modal-submit",children:[a.jsx(eu,{size:18}),a.jsx("span",{children:r("modal.submit")})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Vf=()=>{const{t:e,lang:t}=ce(),[n,r]=j.useState([]),[i,s]=j.useState(0);if(j.useEffect(()=>{const m=kf(),g=e("promotions.items"),h=m.map((y,x)=>{const k=Array.isArray(g)&&(g[x]||g[0]);return k&&t!=="es"?{...y,headline:k.headline||y.headline,bodyText:k.bodyText||y.bodyText,ctaText:k.ctaText||y.ctaText}:y});r(h.length>0?h:m)},[t,e]),j.useEffect(()=>{if(n.length>1){const m=setInterval(()=>{s(g=>(g+1)%n.length)},6e3);return()=>clearInterval(m)}},[n]),n.length===0)return null;const o=n.length>1,l=n[i],c=()=>s((i+1)%n.length),d=()=>s((i-1+n.length)%n.length);return a.jsxs("section",{className:"promotions-banner-section",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"promo-card",children:[a.jsxs("div",{className:"promo-image-col",children:[a.jsx("img",{src:l.image,alt:l.headline,className:"promo-img"}),a.jsxs("div",{className:"promo-badge",children:[a.jsx(tu,{size:15}),a.jsx("span",{children:e("promotions.badge")||"Promoción Exclusiva MUNCHOS"})]})]}),a.jsxs("div",{className:"promo-content-col",children:[a.jsx("h2",{children:l.headline}),a.jsx("p",{children:l.bodyText}),l.ctaText&&a.jsxs("a",{href:l.ctaLink||"#personalizacion",className:"btn btn-primary promo-btn",children:[a.jsx("span",{children:l.ctaText}),a.jsx(Fa,{size:18})]}),o&&a.jsxs("div",{className:"carousel-controls",children:[a.jsx("div",{className:"carousel-dots",children:n.map((m,g)=>a.jsx("span",{className:`dot ${g===i?"active":""}`,onClick:()=>s(g)},g))}),a.jsxs("div",{className:"carousel-arrows",children:[a.jsx("button",{onClick:d,"aria-label":"Anterior",children:a.jsx(Kd,{size:18})}),a.jsx("button",{onClick:c,"aria-label":"Siguiente",children:a.jsx(Ia,{size:18})})]})]})]})]})}),a.jsx("style",{children:`
        .promotions-banner-section {
          margin: 2rem 0;
        }

        .promo-card {
          display: grid;
          grid-template-columns: 360px 1fr;
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
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
          .promo-card {
            grid-template-columns: 1fr;
          }
          .promo-image-col {
            min-height: 200px;
            height: 200px;
          }
          .promo-content-col {
            padding: 1.4rem 1.4rem;
          }
          .promo-content-col h2 {
            font-size: 1.35rem;
          }
        }
      `})]})},$f=({reservations:e,capacitySettings:t,onUpdateStatus:n,onOpenAddModal:r})=>{const[i,s]=j.useState(new Date(2026,7,1)),[o,l]=j.useState(null),c=i.getFullYear(),d=i.getMonth(),m=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],g=new Date(c,d+1,0).getDate(),y=(new Date(c,d,1).getDay()+6)%7,x=()=>s(new Date(c,d-1,1)),k=()=>s(new Date(c,d+1,1)),z=u=>{if(!u)return"";const[p,v,b]=u.split("-"),N=parseInt(v,10)-1;return`${parseInt(b,10)} de ${m[N]}, ${p}`},f=o?e.filter(u=>u.date===o):[];return a.jsxs("div",{className:"monthly-calendar-module",children:[a.jsxs("div",{className:"cal-header-bar",children:[a.jsxs("div",{className:"cal-title-group",children:[a.jsx(Ve,{size:22,className:"icon-cyan"}),a.jsxs("h2",{className:"cal-month-title",children:[m[d]," ",c]})]}),a.jsxs("div",{className:"cal-nav-controls",children:[a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:x,"aria-label":"Mes anterior",children:a.jsx(Kd,{size:18})}),a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:()=>s(new Date),children:"Hoy"}),a.jsx("button",{className:"btn btn-secondary cal-btn",onClick:k,"aria-label":"Mes siguiente",children:a.jsx(Ia,{size:18})}),a.jsxs("button",{className:"btn btn-primary cal-btn cal-btn-add",onClick:()=>r(o),children:[a.jsx(et,{size:16}),a.jsx("span",{children:"Añadir Reserva"})]})]})]}),a.jsxs("div",{className:"cal-layout-grid",children:[a.jsxs("div",{className:"month-grid-wrapper",children:[a.jsxs("div",{className:"weekdays-header",children:[a.jsx("span",{children:"Lun"}),a.jsx("span",{children:"Mar"}),a.jsx("span",{children:"Mié"}),a.jsx("span",{children:"Jue"}),a.jsx("span",{children:"Vie"}),a.jsx("span",{children:"Sáb"}),a.jsx("span",{children:"Dom"})]}),a.jsxs("div",{className:"days-grid",children:[[...Array(y)].map((u,p)=>a.jsx("div",{className:"day-cell blank-cell"},`blank-${p}`)),[...Array(g)].map((u,p)=>{const v=p+1,b=`${c}-${String(d+1).padStart(2,"0")}-${String(v).padStart(2,"0")}`,N=e.filter(T=>T.date===b&&T.status!=="cancelled"),S=N.reduce((T,G)=>T+(parseInt(G.guests)||0),0),M=N.length,F=!xo(b,1,e,t).isAvailable,de=o===b;return a.jsxs("div",{className:`day-cell ${de?"selected":""} ${F?"cell-full":M>0?"cell-busy":"cell-open"}`,onClick:()=>l(b),children:[a.jsxs("div",{className:"day-number-row",children:[a.jsx("span",{className:"day-num",children:v}),M>0&&a.jsxs("span",{className:`density-badge ${F?"full":"partial"}`,children:[M," EV."]})]}),M>0&&a.jsx("div",{className:"cell-details",children:a.jsxs("div",{className:"cell-stat",children:[a.jsx(fn,{size:10}),a.jsxs("span",{children:[S," inv."]})]})})]},v)})]})]}),a.jsxs("div",{className:"day-details-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsxs("div",{className:"panel-title-container",children:[a.jsx("span",{className:"panel-title-lbl",children:"Reservas:"}),a.jsx("h3",{className:"panel-title-date",children:o?z(o):"Selecciona un día"})]}),o&&a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>r(o),children:[a.jsx(et,{size:16}),a.jsx("span",{children:"Nueva Reserva"})]})]}),o?f.length===0?a.jsxs("div",{className:"panel-empty",children:[a.jsxs("p",{children:["No hay reservas registradas para el ",z(o),"."]}),a.jsx("button",{className:"btn btn-primary",onClick:()=>r(o),children:"Añadir Reserva para esta Fecha"})]}):a.jsx("div",{className:"day-reservations-list",children:f.map(u=>a.jsxs("div",{className:`res-card status-${u.status}`,children:[a.jsxs("div",{className:"res-card-header",children:[a.jsxs("div",{children:[a.jsx("h4",{children:u.clientName}),a.jsxs("span",{className:"res-contact",children:[u.clientEmail," • ",u.clientPhone]})]}),a.jsx("span",{className:`status-pill status-${u.status}`,children:u.status==="confirmed"?"Confirmada":u.status==="pending"?"Pendiente":"Cancelada"})]}),a.jsxs("div",{className:"res-card-body",children:[a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Menú:"})," ",u.menuName]}),a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Invitados:"})," ",u.guests," comensales"]}),a.jsxs("div",{className:"res-meta-item",children:[a.jsx("strong",{children:"Origen:"})," ",u.source==="public"?"Web Pública":"Manual (Admin)"]}),u.estimatedTotal&&a.jsxs("div",{className:"res-meta-item gold-meta",children:[a.jsx("strong",{children:"Total Estimado:"})," ",u.estimatedTotal,"€"]}),u.notes&&a.jsxs("div",{className:"res-notes",children:[a.jsx("strong",{children:"Notas:"})," ",u.notes]})]}),a.jsxs("div",{className:"res-card-actions",children:[u.status!=="confirmed"&&a.jsxs("button",{className:"btn btn-sm btn-confirm",onClick:()=>n(u.id,"confirmed"),children:[a.jsx(co,{size:14}),a.jsx("span",{children:"Confirmar"})]}),u.status!=="pending"&&a.jsxs("button",{className:"btn btn-sm btn-pending",onClick:()=>n(u.id,"pending"),children:[a.jsx(uo,{size:14}),a.jsx("span",{children:"Poner Pendiente"})]}),u.status!=="cancelled"&&a.jsxs("button",{className:"btn btn-sm btn-cancel",onClick:()=>n(u.id,"cancelled"),children:[a.jsx(iu,{size:14}),a.jsx("span",{children:"Cancelar"})]})]})]},u.id))}):a.jsxs("div",{className:"panel-empty",children:[a.jsx(Ve,{size:40,className:"empty-icon"}),a.jsx("p",{children:"Haz clic en cualquier día del calendario para examinar la ocupación y gestionar las reservas."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Wf=({reservations:e})=>{const[t,n]=j.useState(2026),i=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"].map((c,d)=>{const m=String(d+1).padStart(2,"0"),g=`${t}-${m}`,h=e.filter(f=>f.date.startsWith(g)&&f.status!=="cancelled"),y=h.length,x=h.reduce((f,u)=>f+(parseInt(u.guests)||0),0),k=h.reduce((f,u)=>f+(parseFloat(u.estimatedTotal)||0),0);let z=0;return y>=1&&(z=1),y>=3&&(z=2),y>=6&&(z=3),y>=10&&(z=4),{monthName:c,monthNum:m,totalEvents:y,totalGuests:x,estimatedRev:k,intensity:z}}),s=i.reduce((c,d)=>c+d.totalEvents,0),o=i.reduce((c,d)=>c+d.totalGuests,0),l=i.reduce((c,d)=>c+d.estimatedRev,0);return a.jsxs("div",{className:"annual-heatmap-module",children:[a.jsxs("div",{className:"heatmap-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsxs("h2",{className:"header-title",children:["Mapa de Calor Anual (",t,")"]}),a.jsx("p",{className:"header-subtitle",children:"Visión panorámica de la intensidad de reservas y estacionalidad durante todo el año."})]}),a.jsxs("div",{className:"year-selector-row",children:[a.jsx("button",{className:`btn btn-sm ${t===2025?"btn-primary":"btn-secondary"}`,onClick:()=>n(2025),children:"2025"}),a.jsx("button",{className:`btn btn-sm ${t===2026?"btn-primary":"btn-secondary"}`,onClick:()=>n(2026),children:"2026"}),a.jsx("button",{className:`btn btn-sm ${t===2027?"btn-primary":"btn-secondary"}`,onClick:()=>n(2027),children:"2027"})]})]}),a.jsxs("div",{className:"year-stats-row",children:[a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(Qd,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-val",children:s}),a.jsxs("span",{className:"stat-lbl",children:["Eventos en ",t]})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(fn,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-val",children:o}),a.jsx("span",{className:"stat-lbl",children:"Comensales Totales"})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx(nu,{className:"icon-cyan",size:24}),a.jsxs("div",{children:[a.jsxs("span",{className:"stat-val",children:[l.toFixed(0),"€"]}),a.jsx("span",{className:"stat-lbl",children:"Ingresos Estimados"})]})]})]}),a.jsx("div",{className:"heatmap-grid",children:i.map((c,d)=>a.jsxs("div",{className:`month-heat-card intensity-${c.intensity}`,children:[a.jsxs("div",{className:"month-card-header",children:[a.jsx("span",{className:"month-name",children:c.monthName}),a.jsx("span",{className:"heat-dot"})]}),a.jsxs("div",{className:"month-card-body",children:[a.jsxs("div",{className:"heat-metric",children:[a.jsx("span",{className:"val",children:c.totalEvents}),a.jsxs("span",{className:"lbl",children:["evento",c.totalEvents!==1?"s":""]})]}),a.jsx("div",{className:"heat-metric",children:a.jsxs("span",{className:"sub-val",children:[c.totalGuests," comensales"]})}),c.estimatedRev>0&&a.jsxs("div",{className:"heat-metric rev-val",children:[c.estimatedRev,"€"]})]})]},d))}),a.jsxs("div",{className:"heatmap-legend",children:[a.jsx("span",{children:"Intensidad de Ocupación:"}),a.jsxs("div",{className:"legend-scale",children:[a.jsx("span",{className:"scale-box intensity-0",children:"Baja (0)"}),a.jsx("span",{className:"scale-box intensity-1",children:"Moderada (1-2)"}),a.jsx("span",{className:"scale-box intensity-2",children:"Media (3-5)"}),a.jsx("span",{className:"scale-box intensity-3",children:"Alta (6-9)"}),a.jsx("span",{className:"scale-box intensity-4",children:"Máxima (10+)"})]})]}),a.jsx("style",{children:`
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
      `})]})},qf=({reservations:e,onUpdateStatus:t,onOpenAddModal:n})=>{const[r,i]=j.useState(""),[s,o]=j.useState("all"),[l,c]=j.useState("all"),[d,m]=j.useState("all"),g=e.filter(h=>{var y,x,k;if(r){const z=r.toLowerCase(),f=(y=h.clientName)==null?void 0:y.toLowerCase().includes(z),u=(x=h.clientEmail)==null?void 0:x.toLowerCase().includes(z),p=(k=h.location)==null?void 0:k.toLowerCase().includes(z);if(!f&&!u&&!p)return!1}return!(s!=="all"&&h.status!==s||l!=="all"&&h.source!==l||d!=="all"&&h.menuType!==d)});return a.jsxs("div",{className:"reservations-list-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Listado de Reservas"}),a.jsx("p",{className:"header-subtitle",children:"Filtra, gestiona estados y edita solicitudes de catering públicas y presenciales."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>n(null),children:[a.jsx(et,{size:16}),a.jsx("span",{children:"Nueva Reserva Manual"})]})]}),a.jsxs("div",{className:"filter-controls-bar",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(uf,{size:18,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Buscar por cliente, email o zona de Múnich...",value:r,onChange:h=>i(h.target.value)})]}),a.jsxs("div",{className:"filter-dropdowns",children:[a.jsxs("select",{value:s,onChange:h=>o(h.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Estados"}),a.jsx("option",{value:"pending",children:"Pendientes"}),a.jsx("option",{value:"confirmed",children:"Confirmadas"}),a.jsx("option",{value:"cancelled",children:"Canceladas"})]}),a.jsxs("select",{value:l,onChange:h=>c(h.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Orígenes"}),a.jsx("option",{value:"public",children:"Web Pública"}),a.jsx("option",{value:"manual",children:"Manual (Admin)"})]}),a.jsxs("select",{value:d,onChange:h=>m(h.target.value),children:[a.jsx("option",{value:"all",children:"Todos los Menús"}),a.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei"}),a.jsx("option",{value:"de-tapas",children:"Pinchos & Tapas"}),a.jsx("option",{value:"full-experience",children:"Experiencia Completa"})]})]})]}),a.jsx("div",{className:"table-responsive",children:a.jsxs("table",{className:"reservations-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Cliente"}),a.jsx("th",{children:"Invitados"}),a.jsx("th",{children:"Menú"}),a.jsx("th",{children:"Origen"}),a.jsx("th",{children:"Est. Total"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:g.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"8",className:"no-results",children:"No se encontraron reservas con los filtros seleccionados."})}):g.map(h=>a.jsxs("tr",{className:`table-row status-${h.status}`,children:[a.jsx("td",{className:"font-bold",children:h.date}),a.jsx("td",{children:a.jsxs("div",{className:"client-cell",children:[a.jsx("span",{className:"client-name",children:h.clientName}),a.jsxs("span",{className:"client-sub",children:[h.clientEmail," • ",h.clientPhone]})]})}),a.jsxs("td",{children:[h.guests," inv."]}),a.jsx("td",{children:a.jsx("span",{className:"menu-pill",children:h.menuName})}),a.jsx("td",{children:a.jsx("span",{className:`source-badge source-${h.source}`,children:h.source==="public"?"Web Pública":"Manual Admin"})}),a.jsx("td",{className:"gold-text",children:h.estimatedTotal?`${h.estimatedTotal}€`:"—"}),a.jsx("td",{children:a.jsx("span",{className:`status-pill status-${h.status}`,children:h.status==="confirmed"?"Confirmada":h.status==="pending"?"Pendiente":"Cancelada"})}),a.jsx("td",{children:a.jsxs("div",{className:"table-actions",children:[h.status!=="confirmed"&&a.jsx("button",{className:"btn-action confirm",title:"Confirmar Reserva",onClick:()=>t(h.id,"confirmed"),children:a.jsx(co,{size:16})}),h.status!=="pending"&&a.jsx("button",{className:"btn-action pending",title:"Poner en Pendiente",onClick:()=>t(h.id,"pending"),children:a.jsx(uo,{size:16})}),h.status!=="cancelled"&&a.jsx("button",{className:"btn-action cancel",title:"Cancelar Reserva",onClick:()=>t(h.id,"cancelled"),children:a.jsx(iu,{size:16})})]})})]},h.id))})]})}),a.jsx("style",{children:`
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
      `})]})},Kf=({reservations:e})=>{const t=e.filter(d=>d.status!=="cancelled"),n=t.reduce((d,m)=>{const g=m.menuName||m.menuType||"Otro";return d[g]=(d[g]||0)+1,d},{}),r={"10-19 comensales":0,"20-34 comensales":0,"35-50+ comensales":0};t.forEach(d=>{const m=parseInt(d.guests)||0;m<20?r["10-19 comensales"]++:m<=34?r["20-34 comensales"]++:r["35-50+ comensales"]++});const i=t.filter(d=>d.source==="public").length,s=t.filter(d=>d.source==="manual").length,o=t.filter(d=>parseFloat(d.estimatedTotal)>0),l=o.reduce((d,m)=>d+parseFloat(m.estimatedTotal),0),c=o.length>0?Math.round(l/o.length):0;return a.jsxs("div",{className:"analytics-view-module",children:[a.jsxs("div",{className:"analytics-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Métricas y Análisis de Rendimiento"}),a.jsx("p",{className:"header-subtitle",children:"Análisis de patrones de reserva, distribución de menús y rentabilidad operativa."})]}),a.jsxs("div",{className:"finance-notice",children:[a.jsx(Qh,{size:16}),a.jsx("span",{children:"Las métricas financieras se calculan sobre presupuestos completados."})]})]}),a.jsxs("div",{className:"kpi-cards-grid",children:[a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(Wh,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsxs("span",{className:"kpi-val",children:[l.toFixed(0),"€"]}),a.jsx("span",{className:"kpi-lbl",children:"Ingresos Totales Registrados"})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(nu,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsxs("span",{className:"kpi-val",children:[c,"€"]}),a.jsx("span",{className:"kpi-lbl",children:"Valor Medio por Evento"})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx(fn,{className:"icon-cyan",size:26}),a.jsxs("div",{children:[a.jsx("span",{className:"kpi-val",children:t.length}),a.jsx("span",{className:"kpi-lbl",children:"Eventos Activos Confirmados"})]})]})]}),a.jsxs("div",{className:"analytics-grid",children:[a.jsxs("div",{className:"glass-card chart-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(cf,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Distribución por Tipo de Menú"})]}),a.jsx("div",{className:"bar-chart-container",children:Object.entries(n).map(([d,m],g)=>{const h=t.length>0?Math.round(m/t.length*100):0;return a.jsxs("div",{className:"bar-row",children:[a.jsxs("div",{className:"bar-info",children:[a.jsx("span",{className:"bar-label",children:d}),a.jsxs("span",{className:"bar-val",children:[m," (",h,"%)"]})]}),a.jsx("div",{className:"bar-track",children:a.jsx("div",{className:"bar-fill",style:{width:`${h}%`}})})]},g)})})]}),a.jsxs("div",{className:"glass-card chart-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(fn,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Tamaño de los Grupos (Comensales)"})]}),a.jsx("div",{className:"bar-chart-container",children:Object.entries(r).map(([d,m],g)=>{const h=t.length>0?Math.round(m/t.length*100):0;return a.jsxs("div",{className:"bar-row",children:[a.jsxs("div",{className:"bar-info",children:[a.jsx("span",{className:"bar-label",children:d}),a.jsxs("span",{className:"bar-val",children:[m," eventos (",h,"%)"]})]}),a.jsx("div",{className:"bar-track",children:a.jsx("div",{className:"bar-fill cyan-fill",style:{width:`${h}%`}})})]},g)})})]}),a.jsxs("div",{className:"glass-card chart-card full-width-card",children:[a.jsxs("div",{className:"chart-title",children:[a.jsx(Wd,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Origen de las Reservas (Web Pública vs. Canal Manual)"})]}),a.jsxs("div",{className:"source-split-wrapper",children:[a.jsxs("div",{className:"source-stat",children:[a.jsx("span",{className:"source-num",children:i}),a.jsx("span",{className:"source-title",children:"Reservas Web Pública"}),a.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(i/t.length*100):0,"% del total"]})]}),a.jsx("div",{className:"source-divider"}),a.jsxs("div",{className:"source-stat",children:[a.jsx("span",{className:"source-num gold-num",children:s}),a.jsx("span",{className:"source-title",children:"Reservas Manuales (Teléfono/Email)"}),a.jsxs("span",{className:"source-pct",children:[t.length>0?Math.round(s/t.length*100):0,"% del total"]})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Qf=()=>{const[e,t]=j.useState(su()),[n,r]=j.useState(!1),[i,s]=j.useState(null),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[m,g]=j.useState({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0}),h=p=>{const v=e.map(b=>b.id===p?{...b,active:!b.active}:b);t(v),ds(v)},y=p=>{if(window.confirm("¿Seguro que deseas eliminar este producto gourmet?")){const v=e.filter(b=>b.id!==p);t(v),ds(v)}},x=p=>{s(p.id),g({name:p.name,category:p.category,price:p.price,image:p.image,desc:p.desc,active:p.active}),r(!0),window.scrollTo({top:180,behavior:"smooth"})},k=()=>{r(!1),s(null),g({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0})},z=async p=>{if(!(!p||!p.type.startsWith("image/"))){d(!0);try{const v=await go(p,800,800,.78);g(b=>({...b,image:v}))}catch(v){console.error("Error al optimizar imagen:",v)}finally{d(!1)}}},f=p=>{p.preventDefault(),l(!1),p.dataTransfer.files&&p.dataTransfer.files[0]&&z(p.dataTransfer.files[0])},u=p=>{p.preventDefault();const v={...m,id:i||`prod_${Date.now()}`},b=yf(v);t(b),k()};return a.jsxs("div",{className:"products-manager-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Gestión de Productos Gourmet (CMS)"}),a.jsx("p",{className:"header-subtitle",children:"Edita, añade o sube imágenes a la tienda delicatessen pública en tiempo real."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>{n&&!i?k():(s(null),g({name:"",category:"Conservas Artesanales",price:15,image:"/images/IMG_1241.jpeg",desc:"",active:!0}),r(!0))},children:[a.jsx(et,{size:16}),a.jsx("span",{children:n?"Cerrar Formulario":"Nuevo Producto Gourmet"})]})]}),n&&a.jsxs("form",{onSubmit:u,className:"glass-card add-prod-form",children:[a.jsx("h3",{children:i?"✍️ Editar Producto Gourmet":"✨ Añadir Nuevo Producto Gourmet"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Nombre del Producto *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Bonito del Norte en AOVE",value:m.name,onChange:p=>g({...m,name:p.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Categoría *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Conservas Artesanales",value:m.category,onChange:p=>g({...m,category:p.target.value})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Precio (€) *"}),a.jsx("input",{type:"number",step:"0.10",required:!0,value:m.price,onChange:p=>g({...m,price:parseFloat(p.target.value)})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Ruta / URL de la Imagen"}),a.jsx("input",{type:"text",value:m.image.startsWith("data:")?`[Imagen Base64 Optimizada - ${Math.round(m.image.length/1024)} KB]`:m.image,onChange:p=>g({...m,image:p.target.value}),title:m.image})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{className:"drag-header-label",children:[a.jsx("span",{children:"Subir Imagen por Arrastre (Drag & Drop)"}),a.jsxs("span",{className:"badge-opt",children:[a.jsx(fa,{size:12})," Auto-Optimización Canvas 800px"]})]}),a.jsxs("div",{className:`drag-drop-zone ${o?"is-dragging":""} ${c?"is-optimizing":""}`,onDragOver:p=>{p.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:f,children:[a.jsx("input",{type:"file",accept:"image/*",id:"file-prod-input",className:"file-hidden-input",onChange:p=>z(p.target.files[0])}),a.jsx("label",{htmlFor:"file-prod-input",className:"drag-label-content",children:c?a.jsxs("div",{className:"optimizing-text",children:[a.jsx(fa,{size:24,className:"icon-cyan spin"}),a.jsx("span",{children:"Optimizando y comprimiendo imagen en canvas..."})]}):m.image?a.jsxs("div",{className:"preview-row",children:[a.jsx("img",{src:m.image,alt:"Preview",className:"drag-preview-img"}),a.jsxs("div",{className:"preview-info",children:[a.jsx("span",{className:"preview-status",children:"⚡ Imagen procesada y optimizada."}),a.jsx("span",{className:"preview-sub",children:"Arrastra otra foto para reemplazarla."})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(ru,{size:28,className:"icon-cyan"}),a.jsxs("span",{children:["Arrastra y suelta tu imagen aquí o ",a.jsx("strong",{children:"haz clic para seleccionar"})]})]})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Descripción Gastronómica *"}),a.jsx("textarea",{rows:"2",required:!0,placeholder:"Detalles sobre elaboración, origen o maridaje recomendados...",value:m.desc,onChange:p=>g({...m,desc:p.target.value})})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:c,children:[a.jsx(Jd,{size:16}),a.jsx("span",{children:i?"Guardar Cambios":"Guardar Producto"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:k,children:[a.jsx(Dt,{size:16}),a.jsx("span",{children:"Cancelar"})]})]})]}),a.jsx("div",{className:"products-cms-grid",children:e.map(p=>a.jsxs("div",{className:`glass-card cms-product-card ${p.active?"":"is-inactive"}`,children:[a.jsxs("div",{className:"cms-img-wrapper",children:[a.jsx("img",{src:p.image,alt:p.name,className:"cms-prod-img"}),a.jsx("span",{className:`status-badge ${p.active?"active":"inactive"}`,children:p.active?"Visible en Web":"Oculto"})]}),a.jsxs("div",{className:"cms-prod-body",children:[a.jsx("span",{className:"cms-cat",children:p.category}),a.jsx("h4",{children:p.name}),a.jsx("p",{children:p.desc}),a.jsxs("div",{className:"cms-price-row",children:[a.jsxs("span",{className:"cms-price",children:[p.price.toFixed(2),"€"]}),a.jsxs("div",{className:"cms-actions",children:[a.jsx("button",{className:"btn-action-icon edit",title:"Editar producto",onClick:()=>x(p),children:a.jsx(Xd,{size:17})}),a.jsx("button",{className:`btn-action-icon ${p.active?"active":""}`,title:p.active?"Ocultar en la web":"Hacer visible",onClick:()=>h(p.id),children:p.active?a.jsx(pa,{size:17}):a.jsx(ma,{size:17})}),a.jsx("button",{className:"btn-action-icon delete",title:"Eliminar producto",onClick:()=>y(p.id),children:a.jsx(Aa,{size:17})})]})]})]})]},p.id))}),a.jsx("style",{children:`
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
      `})]})},Yf=()=>{const[e,t]=j.useState(ho()),[n,r]=j.useState(!1),[i,s]=j.useState(null),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[m,g]=j.useState({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""}),h=e.filter(v=>v.active).length,y=v=>{const b=e.map(N=>N.id===v?{...N,active:!N.active}:N);t(b),us(b)},x=v=>{if(window.confirm("¿Deseas eliminar esta promoción de la portada?")){const b=e.filter(N=>N.id!==v);t(b),us(b)}},k=v=>{s(v.id),g({headline:v.headline||"",bodyText:v.bodyText||"",image:v.image||"/images/IMG_1240.jpeg",ctaText:v.ctaText||"Ver Promoción",ctaLink:v.ctaLink||"#personalizacion",active:v.active!==void 0?v.active:!0,startDate:v.startDate||"",endDate:v.endDate||""}),r(!0),window.scrollTo({top:180,behavior:"smooth"})},z=()=>{r(!1),s(null),g({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""})},f=async v=>{if(!(!v||!v.type.startsWith("image/"))){d(!0);try{const b=await go(v,800,800,.78);g(N=>({...N,image:b}))}catch(b){console.error("Error al optimizar la imagen:",b)}finally{d(!1)}}},u=v=>{v.preventDefault(),l(!1),v.dataTransfer.files&&v.dataTransfer.files[0]&&f(v.dataTransfer.files[0])},p=v=>{v.preventDefault();const b={...m,id:i||`promo_${Date.now()}`},N=bf(b);t(N),z()};return a.jsxs("div",{className:"promotions-manager-module",children:[a.jsxs("div",{className:"module-header",children:[a.jsxs("div",{className:"header-text-block",children:[a.jsx("h2",{className:"header-title",children:"Gestión del Banner de Promociones"}),a.jsx("p",{className:"header-subtitle",children:"Edita, añade o sube imágenes para ofertas temporales y eventos especiales en tiempo real."})]}),a.jsxs("button",{className:"btn btn-primary btn-sm header-action-btn",onClick:()=>{n&&!i?z():(s(null),g({headline:"",bodyText:"",image:"/images/IMG_1240.jpeg",ctaText:"Ver Promoción",ctaLink:"#personalizacion",active:!0,startDate:"",endDate:""}),r(!0))},children:[a.jsx(et,{size:16}),a.jsx("span",{children:n?"Cerrar Formulario":"Nueva Promoción"})]})]}),a.jsxs("div",{className:"mode-status-banner",children:[a.jsx(Zh,{className:"icon-cyan",size:22}),a.jsxs("div",{children:[a.jsxs("h4",{children:["Modo de Presentación en Portada:",a.jsx("span",{className:"gold-text",children:h===0?" Oculto (0 promociones activas)":h===1?" Banner Estático Individual (1 activa)":` Carrusel Giratorio (${h} activas en rotación)`})]}),a.jsx("p",{children:"El sistema detecta automáticamente el número de promociones activas y las muestra como banner único o carrusel girable."})]})]}),n&&a.jsxs("form",{onSubmit:p,className:"glass-card add-promo-form",children:[a.jsx("h3",{children:i?"✍️ Editar Promoción de Portada":"✨ Crear Nueva Promoción para la Portada"}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Titular de la Promoción *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Menú Especial Paella los Fines de Semana",value:m.headline,onChange:v=>g({...m,headline:v.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Texto Descriptivo *"}),a.jsx("textarea",{rows:"2",required:!0,placeholder:"Explicación breve de la oferta o servicio especial...",value:m.bodyText,onChange:v=>g({...m,bodyText:v.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Texto del Botón CTA"}),a.jsx("input",{type:"text",placeholder:"Ej: Reservar Fecha Especial",value:m.ctaText,onChange:v=>g({...m,ctaText:v.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Ruta / URL de la Imagen *"}),a.jsx("input",{type:"text",required:!0,value:m.image.startsWith("data:")?`[Imagen Base64 Optimizada - ${Math.round(m.image.length/1024)} KB]`:m.image,onChange:v=>g({...m,image:v.target.value}),title:m.image})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{className:"drag-header-label",children:[a.jsx("span",{children:"Subir Imagen por Arrastre (Drag & Drop)"}),a.jsxs("span",{className:"badge-opt",children:[a.jsx(fa,{size:12})," Auto-Optimización Canvas 800px"]})]}),a.jsxs("div",{className:`drag-drop-zone ${o?"is-dragging":""} ${c?"is-optimizing":""}`,onDragOver:v=>{v.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:u,children:[a.jsx("input",{type:"file",accept:"image/*",id:"file-promo-input",className:"file-hidden-input",onChange:v=>f(v.target.files[0])}),a.jsx("label",{htmlFor:"file-promo-input",className:"drag-label-content",children:c?a.jsxs("div",{className:"optimizing-text",children:[a.jsx(fa,{size:24,className:"icon-cyan spin"}),a.jsx("span",{children:"Optimizando y comprimiendo imagen en canvas..."})]}):m.image?a.jsxs("div",{className:"preview-row",children:[a.jsx("img",{src:m.image,alt:"Preview",className:"drag-preview-img"}),a.jsxs("div",{className:"preview-info",children:[a.jsx("span",{className:"preview-status",children:"⚡ Imagen procesada y optimizada."}),a.jsx("span",{className:"preview-sub",children:"Arrastra otra foto para reemplazarla."})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(ru,{size:28,className:"icon-cyan"}),a.jsxs("span",{children:["Arrastra y suelta tu imagen aquí o ",a.jsx("strong",{children:"haz clic para seleccionar"})]})]})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha Inicio (Opcional)"}),a.jsx("input",{type:"date",value:m.startDate,onChange:v=>g({...m,startDate:v.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha Fin (Opcional)"}),a.jsx("input",{type:"date",value:m.endDate,onChange:v=>g({...m,endDate:v.target.value})})]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:c,children:[a.jsx(Jd,{size:16}),a.jsx("span",{children:i?"Guardar Cambios":"Publicar Promoción"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:z,children:[a.jsx(Dt,{size:16}),a.jsx("span",{children:"Cancelar"})]})]})]}),a.jsx("div",{className:"promotions-list",children:e.map(v=>a.jsxs("div",{className:`glass-card promo-cms-card ${v.active?"":"is-inactive"}`,children:[a.jsx("img",{src:v.image,alt:v.headline,className:"promo-cms-img"}),a.jsxs("div",{className:"promo-cms-content",children:[a.jsxs("div",{className:"promo-cms-header",children:[a.jsx("h3",{children:v.headline}),a.jsx("span",{className:`status-badge ${v.active?"active":"inactive"}`,children:v.active?"Activa":"Desactivada"})]}),a.jsx("p",{children:v.bodyText}),(v.startDate||v.endDate)&&a.jsxs("div",{className:"date-range-tag",children:[a.jsx(Ve,{size:14}),a.jsxs("span",{children:["Vigencia: ",v.startDate||"—"," a ",v.endDate||"Sin límite"]})]})]}),a.jsxs("div",{className:"promo-cms-actions",children:[a.jsx("button",{className:"btn-action-icon edit",title:"Editar promoción",onClick:()=>k(v),children:a.jsx(Xd,{size:17})}),a.jsx("button",{className:`btn-action-icon ${v.active?"active":""}`,title:v.active?"Desactivar de portada":"Activar en portada",onClick:()=>y(v.id),children:v.active?a.jsx(pa,{size:18}):a.jsx(ma,{size:18})}),a.jsx("button",{className:"btn-action-icon delete",title:"Eliminar promoción",onClick:()=>x(v.id),children:a.jsx(Aa,{size:18})})]})]},v.id))}),a.jsx("style",{children:`
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
      `})]})},Zf=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(null),[i,s]=j.useState(!1),[o,l]=j.useState({id:"",title:"",subtitle:"",video:"",poster:"",active:!0});j.useEffect(()=>{t(fo())},[]);const c=x=>{r(x.id),l({...x})},d=()=>{r(null),l({id:"",title:"",subtitle:"",video:"",poster:"",active:!0})},m=x=>{if(x.preventDefault(),!o.title||!o.video){alert("Por favor completa al menos el título y la URL del vídeo.");return}const k={...o,id:o.id||`slide_${Date.now()}`},z=wf(k);t([...z]),d()},g=x=>{const k=e.map(z=>z.id===x?{...z,active:!z.active}:z);ms(k),t(k)},h=x=>{if(confirm("¿Eliminar esta diapositiva del carrusel Hero?")){const k=e.filter(z=>z.id!==x);ms(k),t(k)}},y=async x=>{const k=x.target.files[0];if(k)try{s(!0);const z=await go(k,1200,800,.8);l(f=>({...f,poster:z}))}catch(z){alert("Error optimizando la imagen de póster: "+z.message)}finally{s(!1)}};return a.jsxs("div",{className:"hero-slides-manager",children:[a.jsxs("div",{className:"cms-section-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Carrusel de Vídeo Principal (Hero Banner)"}),a.jsx("p",{children:"Gestiona los vídeos de fondo, títulos e imágenes de portada que se muestran en la cabecera."})]}),!n&&a.jsxs("button",{className:"btn btn-primary",onClick:()=>{r("new"),l({id:`slide_${Date.now()}`,title:"",subtitle:"",video:"",poster:"",active:!0})},children:[a.jsx(et,{size:16}),a.jsx("span",{children:"Añadir Diapositiva de Vídeo"})]})]}),n&&a.jsxs("form",{onSubmit:m,className:"cms-edit-card",children:[a.jsx("h3",{children:n==="new"?"Añadir Nueva Diapositiva":"Editar Diapositiva"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Título del Indicador (ej. 01 Pintxos Gourmet):"}),a.jsx("input",{type:"text",value:o.title,onChange:x=>l({...o,title:x.target.value}),placeholder:"01 Pintxos Gourmet",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Subtítulo Corto:"}),a.jsx("input",{type:"text",value:o.subtitle,onChange:x=>l({...o,subtitle:x.target.value}),placeholder:"Elaboración y artesanía vasca"})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"URL del Vídeo (MP4 loop):"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(au,{size:18}),a.jsx("input",{type:"url",value:o.video,onChange:x=>l({...o,video:x.target.value}),placeholder:"https://servidor.com/video.mp4",required:!0})]})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Imagen de Portada (Poster / Fallback):"}),a.jsxs("div",{className:"image-upload-box",children:[o.poster&&a.jsx("img",{src:o.poster,alt:"Preview",className:"poster-preview"}),a.jsx("input",{type:"file",accept:"image/*",onChange:y,disabled:i}),i&&a.jsx("span",{children:"Optimizando póster..."})]})]}),a.jsx("div",{className:"form-group full-width checkbox-group",children:a.jsxs("label",{children:[a.jsx("input",{type:"checkbox",checked:o.active,onChange:x=>l({...o,active:x.target.checked})}),a.jsx("span",{children:"Diapositiva Activa en el Carrusel"})]})})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"submit",className:"btn btn-primary",children:[a.jsx(qd,{size:16}),a.jsx("span",{children:"Guardar Diapositiva"})]}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:d,children:"Cancelar"})]})]}),a.jsx("div",{className:"slides-grid",children:e.map(x=>a.jsxs("div",{className:`slide-cms-card ${x.active?"":"is-inactive"}`,children:[a.jsxs("div",{className:"slide-media-preview",children:[a.jsx("video",{src:x.video,poster:x.poster,muted:!0,loop:!0,playsInline:!0,className:"mini-video"}),a.jsxs("div",{className:"slide-status-badge",children:[x.active?a.jsx(pa,{size:14}):a.jsx(ma,{size:14}),a.jsx("span",{children:x.active?"Activo":"Oculto"})]})]}),a.jsxs("div",{className:"slide-card-body",children:[a.jsx("h4",{children:x.title}),a.jsx("p",{children:x.subtitle}),a.jsxs("div",{className:"slide-card-actions",children:[a.jsx("button",{className:"btn-icon",onClick:()=>c(x),title:"Editar",children:a.jsx(of,{size:16})}),a.jsx("button",{className:"btn-icon",onClick:()=>g(x.id),title:"Visibilidad",children:x.active?a.jsx(ma,{size:16}):a.jsx(pa,{size:16})}),a.jsx("button",{className:"btn-icon danger",onClick:()=>h(x.id),title:"Eliminar",children:a.jsx(Aa,{size:16})})]})]})]},x.id))}),a.jsx("style",{children:`
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
      `})]})},Xf=()=>{const{currentUser:e,users:t,createStaffAccount:n}=Oa(),[r,i]=j.useState(""),[s,o]=j.useState(""),[l,c]=j.useState(""),[d,m]=j.useState(null);if((e==null?void 0:e.role)!=="owner")return a.jsxs("div",{className:"glass-card access-denied",children:[a.jsx(_t,{size:48,className:"icon-alert"}),a.jsx("h3",{children:"Acceso Restringido"}),a.jsx("p",{children:"Solo el propietario principal (Owner) tiene permisos para administrar usuarios y crear cuentas de staff."})]});const g=h=>{h.preventDefault(),m(null);const y=n({name:r,email:s,password:l});y.success?(m({type:"success",text:`Cuenta de staff creada con éxito para ${s}`}),i(""),o(""),c("")):m({type:"error",text:y.error})};return a.jsxs("div",{className:"user-management-module",children:[a.jsx("div",{className:"module-header",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Gestión de Usuarios y Roles (RBAC)"}),a.jsx("p",{children:"Crea cuentas de acceso para el personal (Staff) con permisos restringidos."})]})}),a.jsxs("div",{className:"user-management-grid",children:[a.jsxs("form",{onSubmit:g,className:"glass-card create-user-card",children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx(ff,{size:20,className:"icon-cyan"}),a.jsx("h3",{children:"Crear Nueva Cuenta de Staff"})]}),d&&a.jsxs("div",{className:`msg-banner ${d.type}`,children:[d.type==="success"&&a.jsx(lo,{size:16}),a.jsx("span",{children:d.text})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(ha,{size:16})," Nombre del Empleado *"]}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Marcos Pérez",value:r,onChange:h=>i(h.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(mo,{size:16})," Correo Electrónico *"]}),a.jsx("input",{type:"email",required:!0,placeholder:"marcos@munchos.de",value:s,onChange:h=>o(h.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(Yd,{size:16})," Contraseña de Acceso *"]}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:l,onChange:h=>c(h.target.value)})]}),a.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:a.jsx("span",{children:"Crear Cuenta Staff"})})]}),a.jsxs("div",{className:"glass-card users-list-card",children:[a.jsx("h3",{children:"Cuentas Registradas en la Plataforma"}),a.jsx("div",{className:"users-list",children:t.map((h,y)=>a.jsxs("div",{className:"user-item-card",children:[a.jsx("div",{className:"user-avatar",children:h.role==="owner"?a.jsx(_t,{size:20,className:"icon-cyan"}):a.jsx(ha,{size:20})}),a.jsxs("div",{className:"user-details",children:[a.jsx("h4",{children:h.name}),a.jsx("span",{className:"user-email",children:h.email})]}),a.jsx("span",{className:`role-badge role-${h.role}`,children:h.role==="owner"?"Owner / Propietario":"Staff / Personal"})]},y))})]})]}),a.jsx("style",{children:`
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
      `})]})},Jf=({isOpen:e,onClose:t,prefilledDate:n,onSave:r})=>{const[i,s]=j.useState({date:n||"",clientName:"",clientEmail:"",clientPhone:"",guests:20,menuType:"sushi-fusion",menuName:"Fusión Nikkei (Sushi + Pinchos)",status:"confirmed",estimatedTotal:960,location:"",notes:""});if(j.useEffect(()=>{n&&s(l=>({...l,date:n}))},[n]),!e)return null;const o=l=>{l.preventDefault(),r({...i,source:"manual",createdAt:new Date().toISOString()}),t()};return a.jsxs("div",{className:"modal-overlay",onClick:t,children:[a.jsxs("div",{className:"modal-container",onClick:l=>l.stopPropagation(),children:[a.jsx("button",{className:"modal-close-btn",onClick:t,children:a.jsx(Dt,{size:24})}),a.jsxs("h3",{className:"modal-title",children:[a.jsx("span",{className:"title-main-line",children:"Añadir Reserva Manual"}),a.jsx("span",{className:"title-sub-line",children:"(Teléfono / Email)"})]}),a.jsx("p",{className:"modal-subtitle",children:"Introduce los datos de la reserva aceptada directamente para actualizar el mapa de ocupación."}),a.jsxs("form",{onSubmit:o,className:"admin-form",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Fecha del Evento *"}),a.jsx("input",{type:"date",required:!0,value:i.date,onChange:l=>s({...i,date:l.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Número de Invitados *"}),a.jsx("input",{type:"number",min:"10",max:"100",required:!0,value:i.guests,onChange:l=>s({...i,guests:parseInt(l.target.value)})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Nombre Completo del Cliente *"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej: Dr. Schmidt",value:i.clientName,onChange:l=>s({...i,clientName:l.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Email *"}),a.jsx("input",{type:"email",required:!0,placeholder:"schmidt@example.de",value:i.clientEmail,onChange:l=>s({...i,clientEmail:l.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Teléfono *"}),a.jsx("input",{type:"tel",required:!0,placeholder:"+49 89 123456",value:i.clientPhone,onChange:l=>s({...i,clientPhone:l.target.value})})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Menú Principal"}),a.jsxs("select",{value:i.menuType,onChange:l=>{const c=l.target.value;s({...i,menuType:c,menuName:{"sushi-fusion":"Fusión Nikkei (Sushi + Pinchos)","de-tapas":"Experiencia Pinchos & Tapas","full-experience":"Experiencia Completa MUNCHOS"}[c]||c})},children:[a.jsx("option",{value:"sushi-fusion",children:"Fusión Nikkei (Sushi + Pinchos)"}),a.jsx("option",{value:"de-tapas",children:"Experiencia Pinchos & Tapas"}),a.jsx("option",{value:"full-experience",children:"Experiencia Completa MUNCHOS"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Estado Inicial"}),a.jsxs("select",{value:i.status,onChange:l=>s({...i,status:l.target.value}),children:[a.jsx("option",{value:"confirmed",children:"Confirmada"}),a.jsx("option",{value:"pending",children:"Pendiente de pago"})]})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Precio Total Estimado (€)"}),a.jsx("input",{type:"number",value:i.estimatedTotal,onChange:l=>s({...i,estimatedTotal:parseFloat(l.target.value)})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Zona / Ubicación en Múnich"}),a.jsx("input",{type:"text",placeholder:"Ej: Bogenhausen",value:i.location,onChange:l=>s({...i,location:l.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Notas Adicionales"}),a.jsx("textarea",{rows:"2",placeholder:"Detalles sobre vajilla, alergias, cocinero presencial...",value:i.notes,onChange:l=>s({...i,notes:l.target.value})})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[a.jsx(et,{size:18}),a.jsx("span",{children:"Guardar Reserva Manual"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},eg=({onNavigateToPublic:e})=>{const{currentUser:t,logout:n}=Oa(),[r,i]=j.useState("calendar"),[s,o]=j.useState(ir()),[l,c]=j.useState(cu()),[d,m]=j.useState(!1),[g,h]=j.useState(!1),[y,x]=j.useState(null),k=(b,N)=>{const S=Tf(b,N);o(S)},z=b=>{lu(b),o(ir()),h(!1)},f=(b=null)=>{x(b),h(!0)},u=[{id:"calendar",label:"Calendario Mensual",icon:Ve},{id:"heatmap",label:"Mapa de Calor Anual",icon:Qd},{id:"reservations",label:"Lista de Reservas",icon:Jh},{id:"analytics",label:"Analítica & Métricas",icon:Wd,ownerOnly:!0},{id:"products",label:"CMS Tienda Gourmet",icon:ar,ownerOnly:!0},{id:"promotions",label:"CMS Banners Promo",icon:tu,ownerOnly:!0},{id:"heroslides",label:"CMS Carrusel Hero",icon:au,ownerOnly:!0},{id:"users",label:"Gestión Usuarios",icon:fn,ownerOnly:!0}],p=u.find(b=>b.id===r)||u[0],v=p.icon;return a.jsxs("div",{className:"admin-shell",children:[a.jsxs("header",{className:"admin-topbar",children:[a.jsxs("div",{className:"topbar-row-main",children:[a.jsxs("div",{className:"topbar-left",children:[a.jsx("a",{href:"#",onClick:e,className:"admin-logo-link",title:"Volver a la Web Pública",children:a.jsx("img",{src:"/images/logo-definitive.png",alt:"MUNCHOS Admin",className:"admin-logo"})}),a.jsx("span",{className:"admin-badge-title",children:"PANEL CONTROL"})]}),a.jsxs("div",{className:"topbar-right",children:[a.jsxs("button",{className:"btn btn-secondary btn-sm nav-public-btn",onClick:e,children:[a.jsx(Hh,{size:16}),a.jsx("span",{children:"Ver Web Pública"})]}),a.jsxs("div",{className:"user-profile-tag",children:[(t==null?void 0:t.role)==="owner"?a.jsx(_t,{size:18,className:"icon-cyan"}):a.jsx(ha,{size:18}),a.jsx("span",{className:"user-name",children:t==null?void 0:t.name}),a.jsx("span",{className:`role-pill role-${t==null?void 0:t.role}`,children:(t==null?void 0:t.role)==="owner"?"Owner":"Staff"})]}),a.jsx("button",{className:"btn-logout",onClick:n,title:"Cerrar Sesión",children:a.jsx(ef,{size:18})})]})]}),a.jsxs("div",{className:"mobile-section-switcher",children:[a.jsxs("button",{className:"mobile-switcher-trigger",onClick:()=>m(!d),children:[a.jsxs("div",{className:"trigger-left",children:[a.jsx(v,{size:18,className:"icon-cyan"}),a.jsx("span",{className:"trigger-label",children:p.label})]}),a.jsx($h,{size:18,className:`chevron ${d?"open":""}`})]}),d&&a.jsx("div",{className:"mobile-dropdown-menu",children:u.map(b=>{if(b.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const N=b.icon,S=r===b.id;return a.jsxs("button",{className:`mobile-dropdown-item ${S?"selected":""}`,onClick:()=>{i(b.id),m(!1)},children:[a.jsxs("div",{className:"item-left",children:[a.jsx(N,{size:18}),a.jsx("span",{children:b.label})]}),S&&a.jsx(qd,{size:16,className:"icon-cyan"})]},b.id)})})]})]}),a.jsxs("div",{className:"admin-body",children:[a.jsx("nav",{className:"admin-sidebar",children:u.map(b=>{if(b.ownerOnly&&(t==null?void 0:t.role)!=="owner")return null;const N=b.icon;return a.jsxs("button",{className:`sidebar-link ${r===b.id?"active":""}`,onClick:()=>i(b.id),children:[a.jsx(N,{size:18}),a.jsx("span",{children:b.label})]},b.id)})}),a.jsxs("main",{className:"admin-content-area",children:[r==="calendar"&&a.jsx($f,{reservations:s,capacitySettings:l,onUpdateStatus:k,onOpenAddModal:f}),r==="heatmap"&&a.jsx(Wf,{reservations:s}),r==="reservations"&&a.jsx(qf,{reservations:s,onUpdateStatus:k,onOpenAddModal:f}),r==="analytics"&&(t==null?void 0:t.role)==="owner"&&a.jsx(Kf,{reservations:s}),r==="products"&&(t==null?void 0:t.role)==="owner"&&a.jsx(Qf,{}),r==="promotions"&&(t==null?void 0:t.role)==="owner"&&a.jsx(Yf,{}),r==="heroslides"&&(t==null?void 0:t.role)==="owner"&&a.jsx(Zf,{}),r==="users"&&(t==null?void 0:t.role)==="owner"&&a.jsx(Xf,{})]})]}),a.jsx(Jf,{isOpen:g,onClose:()=>h(!1),prefilledDate:y,onSave:z}),a.jsx("style",{children:`
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
      `})]})},tg=()=>{const{login:e}=Oa(),[t,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),l=d=>{d.preventDefault(),o("");const m=e(t,r);m.success||o(m.error)},c=(d,m)=>{n(d),i(m);const g=e(d,m);g.success||o(g.error)};return a.jsxs("div",{className:"admin-login-screen",children:[a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-header",children:[a.jsx("img",{src:"/images/logo-definitive.png",alt:"MUNCHOS Admin",className:"login-logo"}),a.jsx("h2",{children:"Panel de Control MUNCHOS"}),a.jsx("p",{children:"Acceso restringido para propietarios y personal autorizado"})]}),s&&a.jsx("div",{className:"login-error-banner",children:s}),a.jsxs("form",{onSubmit:l,className:"login-form",children:[a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(mo,{size:16})," Correo Electrónico:"]}),a.jsx("input",{type:"email",required:!0,placeholder:"propietario@munchos.de",value:t,onChange:d=>n(d.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{children:[a.jsx(Yd,{size:16})," Contraseña:"]}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:r,onChange:d=>i(d.target.value)})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:[a.jsx(Zd,{size:18}),a.jsx("span",{children:"Iniciar Sesión en el Panel"})]})]}),a.jsxs("div",{className:"demo-shortcuts",children:[a.jsx("span",{className:"demo-label",children:"Accesos Directos de Prueba (Demostración):"}),a.jsxs("div",{className:"demo-buttons",children:[a.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("owner@munchos.de","owner"),children:[a.jsx(_t,{size:16,className:"icon-cyan"}),a.jsx("span",{children:"Acceso Owner (Propietario)"})]}),a.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c("staff@munchos.de","staff"),children:[a.jsx(ha,{size:16}),a.jsx("span",{children:"Acceso Staff (Personal)"})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})};function ng(){const{currentUser:e}=Oa(),[t,n]=j.useState(window.location.hash==="#admin"?"admin":"public"),[r,i]=j.useState(!1),[s,o]=j.useState(!1),[l,c]=j.useState([]),[d,m]=j.useState(null);j.useEffect(()=>{const f=()=>{window.location.hash==="#admin"?n("admin"):n("public")};return window.addEventListener("hashchange",f),()=>window.removeEventListener("hashchange",f)},[]);const g=f=>{c(u=>u.find(v=>v.id===f.id)?u.map(v=>v.id===f.id?{...v,quantity:v.quantity+1}:v):[...u,{...f,quantity:1}]),o(!0)},h=(f,u)=>{u<=0?y(f):c(p=>p.map(v=>v.id===f?{...v,quantity:u}:v))},y=f=>{c(u=>u.filter(p=>p.id!==f))},x=(f=null)=>{f&&m(f),i(!0)},k=f=>{const u=document.getElementById("personalizacion");u?u.scrollIntoView({behavior:"smooth"}):x()},z=l.reduce((f,u)=>f+u.quantity,0);return t==="admin"?e?a.jsx(eg,{onNavigateToPublic:()=>{window.location.hash="",n("public")}}):a.jsx(tg,{}):a.jsxs("div",{className:"munitxos-app",children:[a.jsx(xf,{onOpenCart:()=>o(!0),cartCount:z,onOpenBooking:()=>x()}),a.jsx(Nf,{onOpenBooking:()=>x()}),a.jsx(Vf,{}),a.jsx(Cf,{}),a.jsx(zf,{onOpenBooking:()=>x()}),a.jsx(Ef,{onSelectMenuCategory:k}),a.jsx(Ff,{onSubmitBooking:f=>x(f)}),a.jsx(If,{}),a.jsx(Lf,{}),a.jsx(Rf,{}),a.jsx(_f,{onAddToCart:g,onOpenCart:()=>o(!0)}),a.jsx(Df,{onOpenBooking:()=>x()}),a.jsx(Hf,{}),a.jsx(Bf,{onOpenBooking:()=>x()}),a.jsx(Gf,{isOpen:s,onClose:()=>o(!1),cartItems:l,onUpdateQuantity:h,onRemoveItem:y}),a.jsx(Uf,{isOpen:r,onClose:()=>i(!1),initialData:d})]})}function rg(){return a.jsx(Rh,{children:a.jsx(Ah,{children:a.jsx(ng,{})})})}pi.createRoot(document.getElementById("root")).render(a.jsx(Cu.StrictMode,{children:a.jsx(rg,{})}));
