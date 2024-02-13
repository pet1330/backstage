/*! For license information please see ef41db56.ee33b478.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[689878],{949446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(824246),o=r(511151);const i={id:"migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage"},a=void 0,s={id:"tutorials/migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage",source:"@site/../docs/tutorials/migrate-to-mui5.md",sourceDirName:"tutorials",slug:"/tutorials/migrate-to-mui5",permalink:"/docs/tutorials/migrate-to-mui5",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/migrate-to-mui5.md",tags:[],version:"current",frontMatter:{id:"migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage"},sidebar:"docs",previous:{title:"Migration to Yarn 3",permalink:"/docs/tutorials/yarn-migration"},next:{title:"Setup OpenTelemetry",permalink:"/docs/tutorials/setup-opentelemetry"}},u={},c=[{value:"Plugins",id:"plugins",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Backstage supports developing new plugins or components using Material UI v5. At the same time, large parts of the application as well as existing plugins will still be using Material UI v4. To support Material UI v4 and v5 at the same time, we have introduced a new concept called the ",(0,n.jsx)(t.code,{children:"UnifiedTheme"}),". The goal of the ",(0,n.jsx)(t.code,{children:"UnifiedTheme"})," is to allow gradual migration by running both versions in parallel, applying theme options similarly & supporting potential future versions of Material UI."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"UnifiedThemeProvider"})," is already used. If you add a custom theme in your ",(0,n.jsx)(t.code,{children:"createApp"})," function, you would need to replace the Material UI ",(0,n.jsx)(t.code,{children:"ThemeProvider"})," with the ",(0,n.jsx)(t.code,{children:"UnifiedThemeProvider"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",metastring:"ts",children:"+ import import {\n+   UnifiedThemeProvider,\n+   themes as builtinThemes,\n+ } from '@backstage/theme';\n\n  const app = createApp({\n    // ...\n    themes: [\n      {\n        // ...\n        Provider: ({ children }) => (\n-         <ThemeProvider theme={lightTheme}>.\n-           <CssBaseline>{children}</CssBaseline>.\n-         </ThemeProvider\n+         <UnifiedThemeProvider theme={builtinThemes.light} children={children} />\n        ),\n      }\n    ]\n  });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Before making specific changes to your Backstage instance, it might be helpful to take a look at the ",(0,n.jsx)(t.a,{href:"https://mui.com/material-ui/migration/migration-v4/",children:"Migration Guide provided by Material UI"})," first. It breaks down the differences between v4 and v5, and will make it easier to understand the impact on your Backstage instance & plugins."]}),"\n",(0,n.jsxs)(t.p,{children:["It is worth noting that we are still using ",(0,n.jsx)(t.code,{children:"@mui/styles"})," & ",(0,n.jsx)(t.code,{children:"jss"}),". You may stumble upon documentation for migrating to ",(0,n.jsx)(t.code,{children:"emotion"})," when using ",(0,n.jsx)(t.code,{children:"makeStyles"})," or ",(0,n.jsx)(t.code,{children:"withStyles"}),". It is not necessary to switch to ",(0,n.jsx)(t.code,{children:"emotion"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Important to keep in mind is that Material UI v5 is meant to be used with React Version 17 or higher. This means if you intend to use the Material UI v5 components in your plugins, you have to enforce React Version to be at least 17 for these plugins:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'...\n  "peerDependencies": {\n    "react": "^17.0.0 || ^18.0.0",\n    "react-dom": "^17.0.0 || ^18.0.0",\n    "react-router-dom": "6.0.0-beta.0 || ^6.3.0"\n  },\n...\n'})}),"\n",(0,n.jsxs)(t.p,{children:["To comply with Material UI recommendations, we are enforcing a new linting rule that favors standard imports over named imports and also restricts 3rd-level imports as they are considered private (",(0,n.jsx)(t.a,{href:"https://mui.com/material-ui/guides/minimizing-bundle-size",children:"Guide: Minimizing Bundle Size"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["There are ",(0,n.jsx)(t.code,{children:"core-components"})," as well as components exported from Backstage ",(0,n.jsx)(t.code,{children:"*-react"})," plugins written in Material UI v4, which expect Material UI components as props. In these cases you will still be forced to use Material UI v4."]}),"\n",(0,n.jsxs)(t.p,{children:["For current known issues with the Material UI v5 migration, follow our ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestone/40",children:"Milestone on GitHub"}),". Please open a new issue if you run into different problems."]}),"\n",(0,n.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsx)(t.p,{children:"To migrate your plugin to Material UI v5, you can build on the resources available."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Manually fix the imports from named to default imports to match the new ",(0,n.jsx)(t.a,{href:"https://mui.com/material-ui/guides/minimizing-bundle-size",children:"linting rules for minimizing bundle size"}),". Note: you can use the ",(0,n.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/eslint-plugin/docs/rules/no-top-level-material-ui-4-imports.md",children:["new ",(0,n.jsx)(t.code,{children:"@backstage/no-top-level-material-ui-4-imports"})," ESLint"]})," rule to help with this."]}),"\n",(0,n.jsxs)(t.li,{children:["Run the migration ",(0,n.jsx)(t.code,{children:"codemod"})," for the path of the specific plugin: ",(0,n.jsx)(t.code,{children:"npx @mui/codemod v5.0.0/preset-safe plugins/<path>"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Take a look at possible ",(0,n.jsx)(t.code,{children:"TODO:"})," items the ",(0,n.jsx)(t.code,{children:"codemod"})," could not fix."]}),"\n",(0,n.jsxs)(t.li,{children:["Remove types & methods from ",(0,n.jsx)(t.code,{children:"@backstage/theme"})," which are marked as ",(0,n.jsx)(t.code,{children:"@deprecated"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Ensure you are using ",(0,n.jsx)(t.code,{children:'"react": "^17.0.0"'})," (or newer) as a peer dependency"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can follow the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17696",children:"migration of the GraphiQL plugin"})," as an example of a plugin migration."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=b.prototype=new v;x.constructor=b,m(x,g.prototype),x.isPureReactComponent=!0;var j=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:k.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var M=/\/+/g;function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return a=a(u=e),e=""===i?"."+U(u,0):i,j(a)?(o="",null!=e&&(o=e.replace(M,"$&/")+"/"),E(a,t,o,"",(function(e){return e}))):null!=a&&(I(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(M,"$&/")+"/")+e)),t.push(a)),1;if(u=0,i=""===i?".":i+":",j(e))for(var c=0;c<e.length;c++){var l=i+U(s=e[c],c);u+=E(s,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=E(s=s.value,t,o,l=i+U(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},C={transition:null},$={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:C,ReactCurrentOwner:k};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_.call(t,c)&&!w.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=C.transition;C.transition={};try{e()}finally{C.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var n=r(667294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);