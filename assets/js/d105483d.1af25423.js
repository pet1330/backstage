/*! For license information please see d105483d.1af25423.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[845623],{536395:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"plugin-catalog-backend.placeholderresolver",title:"PlaceholderResolver",description:"API reference for PlaceholderResolver"},a=void 0,u={id:"reference/plugin-catalog-backend.placeholderresolver",title:"PlaceholderResolver",description:"API reference for PlaceholderResolver",source:"@site/../docs/reference/plugin-catalog-backend.placeholderresolver.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.placeholderresolver",permalink:"/docs/reference/plugin-catalog-backend.placeholderresolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.placeholderresolver.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.placeholderresolver",title:"PlaceholderResolver",description:"API reference for PlaceholderResolver"}},l={},s=[];function i(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolver",children:(0,n.jsx)(r.code,{children:"PlaceholderResolver"})})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(r.p,{children:["Use the exported value from ",(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-node"})," instead."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PlaceholderResolver = (params: PlaceholderResolverParams) => Promise<JsonValue>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverparams",children:"PlaceholderResolverParams"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,i=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:i,props:c,_owner:u.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function b(){}function _(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=_.prototype=new b;g.constructor=_,h(g,m.prototype),g.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},a=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];c.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===c[o]&&(c[o]=l[o]);return{$$typeof:t,type:e,key:a,ref:u,props:c,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return a=a(l=e),e=""===c?"."+w(l,0):c,k(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(a,r,o,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),r.push(a)),1;if(l=0,c=""===c?".":c+":",k(e))for(var s=0;s<e.length;s++){var i=c+w(u=e[s],s);l+=C(u,r,o,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(u=e.next()).done;)l+=C(u=u.value,r,o,i=c+w(u,s++),a);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=c,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=x.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)j.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var i=0;i<s;i++)l[i]=arguments[i+2];o.children=l}return{$$typeof:t,type:e.type,key:c,ref:a,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>a});var n=t(667294);const o={},c=n.createContext(o);function a(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);