/*! For license information please see 6ff56e48.10bd6844.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[984785],{407742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(824246),i=t(511151);const r={id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},o=void 0,s={unversionedId:"backend-system/building-backends/migrating",id:"backend-system/building-backends/migrating",title:"Migrating your Backend to the New Backend System",description:"How to migrate existing backends to the new backend system",source:"@site/../docs/backend-system/building-backends/08-migrating.md",sourceDirName:"backend-system/building-backends",slug:"/backend-system/building-backends/migrating",permalink:"/docs/backend-system/building-backends/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-backends/08-migrating.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/building-backends/index"},next:{title:"Overview",permalink:"/docs/backend-system/building-plugins-and-modules/index"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Overall Structure",id:"overall-structure",level:2},{value:"Migrating the Index File",id:"migrating-the-index-file",level:2},{value:"Handling Custom Environments",id:"handling-custom-environments",level:2},{value:"Cleaning Up the Plugins Folder",id:"cleaning-up-the-plugins-folder",level:2},{value:"The App Plugin",id:"the-app-plugin",level:3},{value:"The Catalog Plugin",id:"the-catalog-plugin",level:3},{value:"The Events Plugin",id:"the-events-plugin",level:3},{value:"The Scaffolder Plugin",id:"the-scaffolder-plugin",level:3}];function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. As such, it is not considered stable, and it is not recommended to migrate production backends to the new backend system until it has a stable release."})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This section describes how to migrate an existing Backstage backend service\npackage (typically in ",(0,a.jsx)(n.code,{children:"packages/backend"}),") to use the new backend system."]}),"\n",(0,a.jsxs)(n.p,{children:["One of the main benefits of the new backend system is that it abstracts away the\nway that plugins and their dependencies are wired up, leading to a significantly\nsimplified backend package that rarely if ever needs to change when plugins or\ntheir dependencies evolve. You generally don't have to convert all of your\ninternal plugins and support classes themselves to the backend system first -\nthe migration here will mostly deal with wiring and using compatibility wrappers\nwhere possible in the backend package itself. We hope that you will find that\nyou end up with a much smaller, easier to understand, and easier to maintain\npackage as a result of these steps, and then being able to ",(0,a.jsx)(n.a,{href:"../building-plugins-and-modules/08-migrating.md",children:"migrate\nplugins"})," as a separate\nendeavour later."]}),"\n",(0,a.jsx)(n.h2,{id:"overall-structure",children:"Overall Structure"}),"\n",(0,a.jsx)(n.p,{children:"Your typical backend package has a few overall component parts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.code,{children:"index.ts"})," file that houses all of the creation and wiring together of all\nof the plugins and their dependencies"]}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.code,{children:"types.ts"}),' file that defines the "environment", i.e. the various\ndependencies that get created by the backend and passed down into each plugin']}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.code,{children:"plugins"})," folder which has one file for each plugin, e.g.\n",(0,a.jsx)(n.code,{children:"plugins/catalog.ts"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The index file has this overall shape:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import todo from './plugins/todo'; // repeated for N plugins\n\nfunction makeCreateEnv(config: Config) {\n  return (plugin: string): PluginEnvironment => {\n    // ... build per-plugin environment\n  };\n}\n\nasync function main() {\n  // ... early init\n  const createEnv = makeCreateEnv(config);\n  const todoEnv = useHotMemoize(module, () => createEnv('todo')); // repeated for N plugins\n  const apiRouter = Router();\n  apiRouter.use('/todo', await todo(todoEnv)); // repeated for N plugins\n  // ... wire up and start http server\n}\n\nmodule.hot?.accept();\nmain().catch(...);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"migrating-the-index-file",children:"Migrating the Index File"}),"\n",(0,a.jsxs)(n.p,{children:["This migration will try to leave the ",(0,a.jsx)(n.code,{children:"plugins"})," folder unchanged initially, first\nfocusing on removing the environment type and reducing the index file to its\nbare minimum. Then as a later step, we can reduce the ",(0,a.jsx)(n.code,{children:"plugins"})," folder bit by\nbit, replacing those files generally with one-liners in the index file instead."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's start by establishing the basis of your new index file. You may want to\ncomment out its old contents, or renaming the old file to ",(0,a.jsx)(n.code,{children:"index.backup.ts"})," for\nreference and making a new blank one to work on - whichever works best for you.\nThese are our new blank contents in the index file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\nbackend.start();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the environment builder and the ",(0,a.jsx)(n.code,{children:"main"})," dance are entirely gone."]}),"\n",(0,a.jsx)(n.p,{children:"We'll also want to add some backend system packages as dependencies. Run the\nfollowing command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# from the repository root\nyarn add --cwd packages/backend @backstage/backend-defaults @backstage/backend-plugin-api\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You should now be able to start this up with the familiar ",(0,a.jsx)(n.code,{children:"yarn workspace backend start"})," command locally and seeing some logs scroll by. But it'll just be\na blank service with no real features added. So let's stop it with ",(0,a.jsx)(n.code,{children:"Ctrl+C"})," and\nreintroduce some plugins into the mix."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\n/* highlight-add-next-line */\nimport { legacyPlugin } from '@backstage/backend-common';\n\nconst backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(legacyPlugin('todo', import('./plugins/todo')));\nbackend.start();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"todo"})," plugin used above is just an example and you may not have it enabled\nin your own backend. Feel free to change it to some other plugin that you\nactually have in your ",(0,a.jsx)(n.code,{children:"plugins"})," folder, for example\n",(0,a.jsx)(n.code,{children:"backend.add(legacyPlugin('catalog', import('./plugins/catalog')))"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"legacyPlugin"})," helper makes it easy to bridge the gap between the old-style\nplugin files and the new backend system. It ensures that the dependencies that\nyou used to have to declare by hand in your env are gathered behind the scenes,\nthen passes them into the relevant ",(0,a.jsx)(n.code,{children:"createPlugin"})," export function, and makes\nsure that the route handler it returns is passed into the HTTP router with the\ngiven prefix."]}),"\n",(0,a.jsx)(n.h2,{id:"handling-custom-environments",children:"Handling Custom Environments"}),"\n",(0,a.jsxs)(n.p,{children:["In the simple case, what we did above is sufficient, TypeScript is happy, and\nthe backend runs with the new feature. If they do, feel free to skip this entire\nsection, and delete ",(0,a.jsx)(n.code,{children:"types.ts"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes though, type errors can be reported on the newly added line, saying\nthat parts of the ",(0,a.jsx)(n.code,{children:"PluginEnvironment"})," type do not match. This happens when the\nenvironment was changed from the defaults, perhaps with your own custom\nadditions. If this is the case in your installation, you still aren't out of\nluck - you can build a customized ",(0,a.jsx)(n.code,{children:"legacyPlugin"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\n/* highlight-remove-next-line */\nimport { legacyPlugin } from '@backstage/backend-common';\n/* highlight-add-start */\nimport {\n  makeLegacyPlugin,\n  loggerToWinstonLogger,\n} from '@backstage/backend-common';\nimport { coreServices } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst legacyPlugin = makeLegacyPlugin(\n  {\n    cache: coreServices.cache,\n    config: coreServices.rootConfig,\n    database: coreServices.database,\n    discovery: coreServices.discovery,\n    logger: coreServices.logger,\n    permissions: coreServices.permissions,\n    scheduler: coreServices.scheduler,\n    tokenManager: coreServices.tokenManager,\n    reader: coreServices.urlReader,\n    identity: coreServices.identity,\n    // ... and your own additions\n  },\n  {\n    logger: log => loggerToWinstonLogger(log),\n  },\n);\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(legacyPlugin('todo', import('./plugins/todo')));\nbackend.start();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The first argument to ",(0,a.jsx)(n.code,{children:"makeLegacyPlugin"})," is the mapping from environment keys to\nreferences to actual ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/services",children:"backend system services"}),'.\nThe second argument allows you to "tweak" the types of those services to\nsomething more fitting to your env. For example, you\'ll see that the logger\nservice API type was changed from the raw Winston logger of old, to a different,\ncustom API, so we use a helper function to transform that particular one.']}),"\n",(0,a.jsxs)(n.p,{children:["To make additions as mentioned above to the environment, you will start to get\ninto the weeds of how the backend system wiring works. You'll need to have a\nservice reference and a service factory that performs the actual creation of\nyour service. Please see ",(0,a.jsx)(n.a,{href:"../architecture/03-services.md#defining-a-service",children:"the services\narticle"})," to learn how to\ncreate a service ref and its default factory. You can place that code directly\nin the index file for now if you want, or near the actual implementation class\nin question."]}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we'll assume that your added environment field is named\n",(0,a.jsx)(n.code,{children:"example"}),", and the created ref is named ",(0,a.jsx)(n.code,{children:"exampleServiceRef"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"/* highlight-add-next-line */\nimport { exampleServiceRef } from '<somewhere>'; // if the definition is elsewhere\n\nconst legacyPlugin = makeLegacyPlugin(\n  {\n    // ... the above core services still go here\n    /* highlight-add-next-line */\n    example: exampleServiceRef,\n  },\n  {\n    logger: log => loggerToWinstonLogger(log),\n  },\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"After this, your backend will know how to instantiate your thing on demand and\nplace it in the legacy plugin environment."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["NOTE: If you happen to be dealing with a service ref that does NOT have a\ndefault implementation, but rather has a separate service factory, then you\nwill also need to import that factory and pass it to the ",(0,a.jsx)(n.code,{children:"services"})," array\nargument of ",(0,a.jsx)(n.code,{children:"createBackend"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cleaning-up-the-plugins-folder",children:"Cleaning Up the Plugins Folder"}),"\n",(0,a.jsxs)(n.p,{children:["For plugins that are private and your own, you can follow a ",(0,a.jsx)(n.a,{href:"../building-plugins-and-modules/08-migrating.md",children:"dedicated migration\nguide"})," as you see fit, at a\nlater time."]}),"\n",(0,a.jsx)(n.p,{children:"For third party backend plugins, in particular the larger core plugins that are\nmaintained by the Backstage maintainers, you may find that they have already\nbeen migrated to the new backend system. This section describes some specific\nsuch migrations you can make."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["NOTE: For each of these, note that your backend still needs to have a\ndependency (e.g. in ",(0,a.jsx)(n.code,{children:"packages/backend/package.json"}),") to those plugin packages,\nand they still need to be configured properly in your app-config. Those\nmechanisms still work just the same as they used to in the old backend system."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"the-app-plugin",children:"The App Plugin"}),"\n",(0,a.jsx)(n.p,{children:"The app backend plugin that serves the frontend from the backend can trivially\nbe used in its new form."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(import('@backstage/plugin-app-backend'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to override the app package name, which otherwise defaults to ",(0,a.jsx)(n.code,{children:'"app"'}),",\nyou can do so via the ",(0,a.jsx)(n.code,{children:"app.packageName"})," configuration key."]}),"\n",(0,a.jsxs)(n.p,{children:["You should be able to delete the ",(0,a.jsx)(n.code,{children:"plugins/app.ts"})," file at this point."]}),"\n",(0,a.jsx)(n.h3,{id:"the-catalog-plugin",children:"The Catalog Plugin"}),"\n",(0,a.jsx)(n.p,{children:"A basic installation of the catalog plugin looks as follows."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-catalog-backend'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that this also installs the scaffolder module for the catalog, which\nenables the use of the ",(0,a.jsx)(n.code,{children:"Template"})," kind. In the event that you do not\nuse templates at all, you can remove that line."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have other customizations made to ",(0,a.jsx)(n.code,{children:"plugins/catalog.ts"}),", such as adding\ncustom processors or entity providers, read on. Otherwise, you should be able to\njust delete that file at this point."]}),"\n",(0,a.jsxs)(n.p,{children:["You will use the ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"}),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/modules",children:"module"})," which\ndepends on the appropriate extension point and interacts with it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"/* highlight-add-start */\nimport { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst catalogModuleCustomExtensions = createBackendModule({\n  pluginId: 'catalog', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        catalog: catalogProcessingExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ catalog /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        catalog.addEntityProvider(new MyEntityProvider()); // just an example\n        catalog.addProcessor(new MyProcessor()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(import('@backstage/plugin-catalog-backend'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\n/* highlight-add-next-line */\nbackend.add(catalogModuleCustomExtensions());\n"})}),"\n",(0,a.jsx)(n.p,{children:"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-catalog-node\n"})}),"\n",(0,a.jsx)(n.p,{children:'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'}),"\n",(0,a.jsx)(n.h3,{id:"the-events-plugin",children:"The Events Plugin"}),"\n",(0,a.jsx)(n.p,{children:"A basic installation of the events plugin looks as follows."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(import('@backstage/plugin-events-backend'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have other customizations made to ",(0,a.jsx)(n.code,{children:"plugins/events.ts"}),", such as adding\ncustom subscribers, read on. Otherwise, you should be able to just delete that\nfile at this point."]}),"\n",(0,a.jsxs)(n.p,{children:["You will use the ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"}),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/modules",children:"module"})," which\ndepends on the appropriate extension point and interacts with it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"/* highlight-add-start */\nimport { eventsExtensionPoint } from '@backstage/plugin-events-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst eventsModuleCustomExtensions = createBackendModule({\n  pluginId: 'events', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        events: eventsExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ events /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        events.addSubscribers(new MySubscriber()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(import('@backstage/plugin-events-backend'));\n/* highlight-add-next-line */\nbackend.add(eventsModuleCustomExtensions());\n"})}),"\n",(0,a.jsx)(n.p,{children:"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-events-node\n"})}),"\n",(0,a.jsx)(n.p,{children:'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'}),"\n",(0,a.jsx)(n.h3,{id:"the-scaffolder-plugin",children:"The Scaffolder Plugin"}),"\n",(0,a.jsx)(n.p,{children:"A basic installation of the scaffolder plugin looks as follows."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(import('@backstage/plugin-scaffolder-backend'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have other customizations made to ",(0,a.jsx)(n.code,{children:"plugins/scaffolder.ts"}),", such as adding\ncustom actions, read on. Otherwise, you should be able to just delete that file\nat this point."]}),"\n",(0,a.jsxs)(n.p,{children:["You will use the ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"}),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.jsx)(n.a,{href:"/docs/backend-system/architecture/modules",children:"module"})," which\ndepends on the appropriate extension point and interacts with it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"/* highlight-add-start */\nimport { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst scaffolderModuleCustomExtensions = createBackendModule({\n  pluginId: 'scaffolder', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        scaffolder: scaffolderActionsExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ scaffolder /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        scaffolder.addActions(new MyAction()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(import('@backstage/plugin-scaffolder-backend'));\n/* highlight-add-next-line */\nbackend.add(scaffolderModuleCustomExtensions());\n"})}),"\n",(0,a.jsx)(n.p,{children:"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-scaffolder-node\n"})}),"\n",(0,a.jsx)(n.p,{children:'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var r,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var d in r=Object(arguments[c]))t.call(r,d)&&(s[d]=r[d]);if(n){o=n(r);for(var l=0;l<o.length;l++)a.call(r,o[l])&&(s[o[l]]=r[o[l]])}}return s}},371426:(e,n,t)=>{t(862525);var a=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),n.Fragment=r("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,r={},d=null,l=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,a)&&!c.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:o.current}}n.jsx=d,n.jsxs=d},541535:(e,n,t)=>{var a=t(862525),i=60103,r=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var o=60109,s=60110,c=60112;n.Suspense=60113;var d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;i=h("react.element"),r=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),o=h("react.provider"),s=h("react.context"),c=h("react.forward_ref"),n.Suspense=h("react.suspense"),d=h("react.memo"),l=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function m(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||p}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=b.prototype=new y;k.constructor=b,a(k,m.prototype),k.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var a,r={},o=null,s=null;if(null!=n)for(a in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)x.call(n,a)&&!j.hasOwnProperty(a)&&(r[a]=n[a]);var c=arguments.length-2;if(1===c)r.children=t;else if(1<c){for(var d=Array(c),l=0;l<c;l++)d[l]=arguments[l+2];r.children=d}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:i,type:e,key:o,ref:s,props:r,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case r:c=!0}}if(c)return o=o(c=e),e=""===a?"."+E(c,0):a,Array.isArray(o)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),S(o,n,t,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),n.push(o)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var d=0;d<e.length;d++){var l=a+E(s=e[d],d);c+=S(s,n,t,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(s=e.next()).done;)c+=S(s=s.value,n,t,l=a+E(s,d++),o);else if("object"===s)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function O(e,n,t){if(null==e)return e;var a=[],i=0;return S(e,a,"","",(function(e){return n.call(t,e,i++)})),a}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function I(){var e=T.current;if(null===e)throw Error(g(321));return e}var N={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:a};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(g(143));return e}},n.Component=m,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,n.cloneElement=function(e,n,t){if(null==e)throw Error(g(267,e));var r=a({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=v.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in n)x.call(n,l)&&!j.hasOwnProperty(l)&&(r[l]=void 0===n[l]&&void 0!==d?d[l]:n[l])}var l=arguments.length-2;if(1===l)r.children=t;else if(1<l){d=Array(l);for(var h=0;h<l;h++)d[h]=arguments[h+2];r.children=d}return{$$typeof:i,type:e.type,key:o,ref:s,props:r,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return I().useCallback(e,n)},n.useContext=function(e,n){return I().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return I().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return I().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return I().useLayoutEffect(e,n)},n.useMemo=function(e,n){return I().useMemo(e,n)},n.useReducer=function(e,n,t){return I().useReducer(e,n,t)},n.useRef=function(e){return I().useRef(e)},n.useState=function(e){return I().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>r});var a=t(667294);const i=a.createContext({});function r(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(i.Provider,{value:s},n)}}}]);