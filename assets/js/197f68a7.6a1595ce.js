/*! For license information please see 197f68a7.6a1595ce.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[533718],{556473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(824246),o=n(511151);const s={id:"autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage"},i=void 0,u={id:"auth/autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage",source:"@site/../docs/auth/autologout.md",sourceDirName:"auth",slug:"/auth/autologout",permalink:"/docs/auth/autologout",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/autologout.md",tags:[],version:"current",frontMatter:{id:"autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage"},sidebar:"docs",previous:{title:"Service to Service Auth",permalink:"/docs/auth/service-to-service-auth"},next:{title:"Troubleshooting Auth",permalink:"/docs/auth/troubleshooting"}},c={},a=[{value:"Summary",id:"summary",level:2},{value:"Quick start",id:"quick-start",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This section describes how to setup the Auto Logout mechanism in Backstage in case your organization needs it."}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"The Auto Logout feature is an optional added security to Backstage, designed to automatically log out users after a preconfigured duration of inactivity. This capability helps to effectively mitigate the risks associated with unauthorized access through abandoned sessions, especially in shared device scenarios."}),"\n",(0,r.jsxs)(t.p,{children:["The Auto Logout mechanism actively tracks user activity such as mouse movements, clicks, key pressing, and taps. If the system detects no activity over a set time span (idle timeout), it invalidates the user session and redirects to the login page.\n",(0,r.jsx)(t.em,{children:"Inactive users"})," are the ones that don't perform any action on the Backstage app or that are logged in but no Backstage tab is open in the browser."]}),"\n",(0,r.jsx)(t.p,{children:"This feature is particularly beneficial if your application should comply with internal policies within your organization that may require automatic logout after a specific period of inactivity."}),"\n",(0,r.jsx)(t.p,{children:"This is how it looks like:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Auto logout Preview",src:n(375107).Z+"",width:"1920",height:"937"})}),"\n",(0,r.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,r.jsxs)(t.p,{children:["To enable and configure Auto Logout, you will need to add the ",(0,r.jsx)(t.code,{children:"<AutoLogout>"})," component to your Backstage's instance entry point, located at ",(0,r.jsx)(t.code,{children:"App.tsx"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Here's how to add it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { AutoLogout } from '@backstage/core-components';\n\n// ... App.tsx contents\n\nexport default app.createRoot(\n  <>\n    // ...\n    <AutoLogout />\n    <AppRouter>\n      <Root>{routes}</Root>\n    </AppRouter>\n    // ...\n  </>,\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"##\xa0Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["You can further adjust the Auto Logout settings by tweaking the available ",(0,r.jsx)(t.code,{children:"<AutoLogout>"})," properties:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"<AutoLogout\n  idleTimeoutMinutes={30}\n  useWorkerTimers={false}\n  logoutIfDisconnected={false}\n/>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to have different settings for each Backstage instance deployed at your infrastructure, you can instead leverage your ",(0,r.jsx)(t.code,{children:"app-config"})," and place some configuration properties:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  autologout:\n    enabled: true\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Bear in mind that, properties configured in ",(0,r.jsx)(t.code,{children:"app-config"})," take precedence over the props passed to the ",(0,r.jsx)(t.code,{children:"<AutoLogout/>"})," React component.\nThese are the available settings:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Configuration Key"}),(0,r.jsx)(t.th,{children:"Component Property"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Allowed Values"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"auth.autologout.enabled"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"enabled"})}),(0,r.jsx)(t.td,{children:"Enable/disable the Auto Logout feature."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"true"}),"/",(0,r.jsx)(t.code,{children:"false"})]}),(0,r.jsxs)(t.td,{children:["Default is enabled (",(0,r.jsx)(t.code,{children:"true"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"auth.autologout.idleTimeoutMinutes"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"idleTimeoutMinutes"})}),(0,r.jsx)(t.td,{children:"Sets the idle time (in minutes) after which the user will be logged out."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:">= 0.5"})," minutes"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"60"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"auth.autologout.promptBeforeIdleSeconds"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"promptBeforeIdleSeconds"})}),(0,r.jsxs)(t.td,{children:["Determines the time (in seconds) prior to idle state when a prompt will appear. A value of 0 disables the prompt. This must be less than the value of ",(0,r.jsx)(t.code,{children:"idleTimeoutMinutes"}),"."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:">= 0"})," seconds"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"10"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"auth.autologout.useWorkerTimers"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"useWorkerTimers"})}),(0,r.jsx)(t.td,{children:"Enables or disables the use of Node's worker thread timers instead of main thread timers. This can be beneficial if the browser is terminating timers in inactive tabs, like those used by auto logout. In case of browser incompatibility, try setting this to false."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"true"}),"/",(0,r.jsx)(t.code,{children:"false"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"auth.autologout.logoutIfDisconnected"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"logoutIfDisconnected"})}),(0,r.jsxs)(t.td,{children:["Enable/disable auto logout for disconnected users. Disconnected users are those who are logged in but do not have any active Backstage tabs open in their browsers. If enabled, such users will be automatically logged out after ",(0,r.jsx)(t.code,{children:"idleTimeoutMinutes"}),"."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"true"}),"/",(0,r.jsx)(t.code,{children:"false"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},375107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/autologout-preview-6fc95154a077e9c991b83df709566722.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:u.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function x(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var b=j.prototype=new x;b.constructor=j,y(b,g.prototype),b.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,s={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:u,props:s,_owner:k.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,s,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===s?"."+R(c,0):s,v(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),T(i,t,o,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,s=""===s?".":s+":",v(e))for(var a=0;a<e.length;a++){var l=s+R(u=e[a],a);c+=T(u,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)c+=T(u=u.value,t,o,l=s+R(u,a++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=i,t.PureComponent=j,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)_.call(t,a)&&!w.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:s,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>i});var r=n(667294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);