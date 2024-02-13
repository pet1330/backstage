/*! For license information please see 23a6c9a1.db4db2ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[305032],{821908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(824246),i=t(511151);const o={id:"cli-commands",title:"Commands",description:"Descriptions of all commands available in the CLI."},r=void 0,c={id:"local-dev/cli-commands",title:"Commands",description:"Descriptions of all commands available in the CLI.",source:"@site/../docs/local-dev/cli-commands.md",sourceDirName:"local-dev",slug:"/local-dev/cli-commands",permalink:"/docs/local-dev/cli-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/local-dev/cli-commands.md",tags:[],version:"current",frontMatter:{id:"cli-commands",title:"Commands",description:"Descriptions of all commands available in the CLI."},sidebar:"docs",previous:{title:"Build System",permalink:"/docs/local-dev/cli-build-system"},next:{title:"Linking in Local Packages",permalink:"/docs/local-dev/linking-local-packages"}},s={},l=[{value:"help",id:"help",level:2},{value:"repo build",id:"repo-build",level:2},{value:"repo lint",id:"repo-lint",level:2},{value:"package start",id:"package-start",level:2},{value:"package build",id:"package-build",level:2},{value:"package lint",id:"package-lint",level:2},{value:"package test",id:"package-test",level:2},{value:"package clean",id:"package-clean",level:2},{value:"package prepack",id:"package-prepack",level:2},{value:"package postpack",id:"package-postpack",level:2},{value:"new",id:"new",level:2},{value:"config:docs",id:"configdocs",level:2},{value:"config:print",id:"configprint",level:2},{value:"config:check",id:"configcheck",level:2},{value:"config:schema",id:"configschema",level:2},{value:"versions:bump",id:"versionsbump",level:2},{value:"versions:check",id:"versionscheck",level:2},{value:"build-workspace",id:"build-workspace",level:2},{value:"create-github-app",id:"create-github-app",level:2},{value:"info",id:"info",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This page lists all commands provided by the Backstage CLI, what they're for,\nand where to use them."}),"\n",(0,a.jsx)(n.h2,{id:"help",children:"help"}),"\n",(0,a.jsxs)(n.p,{children:["This command displays a help summary or detailed help screens for each command.\nBelow is a cleaned up output of ",(0,a.jsx)(n.code,{children:"yarn backstage-cli --help"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"new [options]                                  Open up an interactive guide to creating new things in\n                                                your app\ntest                                           Run tests, forwarding args to Jest, defaulting to watch\n                                                mode [DEPRECATED]\nconfig:docs [options]                          Browse the configuration reference documentation\nconfig:print [options]                         Print the app configuration for the current package\nconfig:check [options]                         Validate that the given configuration loads and matches\n                                                schema\nconfig:schema [options]                        Print configuration schema\nrepo [command]                                 Command that run across an entire Backstage project\npackage [command]                              Lifecycle scripts for individual packages\nmigrate [command]                              Migration utilities\nversions:bump [options]                        Bump Backstage packages to the latest versions\nversions:check [options]                       Check Backstage package versioning\nclean                                          Delete cache directories [DEPRECATED]\nbuild-workspace <workspace-dir> [packages...]  Builds a temporary dist workspace from the provided\n                                                packages\ncreate-github-app <github-org>                 Create new GitHub App in your organization.\ninfo                                           Show helpful information for debugging and reporting bugs\nhelp [command]                                 display help for command\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"package"})," command category, ",(0,a.jsx)(n.code,{children:"yarn backstage-cli package --help"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"start [options]                  Start a package for local development\nbuild [options]                  Build a package for production deployment or publishing\nlint [options] [directories...]  Lint a package\ntest                             Run tests, forwarding args to Jest, defaulting to watch mode\nclean                            Delete cache directories\nprepack                          Prepares a package for packaging before publishing\npostpack                         Restores the changes made by the prepack command\nhelp [command]                   display help for command\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"repo"})," command category, ",(0,a.jsx)(n.code,{children:"yarn backstage-cli repo --help"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"build [options]              Build packages in the project, excluding bundled app and backend packages.\nlint [options]               Lint all packages in the project\nclean                        Delete cache and output directories\nlist-deprecations [options]  List deprecations\ntest [options]               Run tests, forwarding args to Jest, defaulting to watch mode\nhelp [command]               display help for command\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"migrate"})," command category, ",(0,a.jsx)(n.code,{children:"yarn backstage-cli migrate --help"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"package-roles         Add package role field to packages that don't have it\npackage-scripts       Set package scripts according to each package role\npackage-exports       Synchronize package subpath export definitions\npackage-lint-configs  Migrates all packages to use @backstage/cli/config/eslint-factory\nreact-router-deps     Migrates the react-router dependencies for all packages to be peer dependencies\nhelp [command]        display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"repo-build",children:"repo build"}),"\n",(0,a.jsxs)(n.p,{children:["Builds all packages in the project, excluding bundled packages by default, i.e. ones\nwith the role ",(0,a.jsx)(n.code,{children:"'frontend'"})," or ",(0,a.jsx)(n.code,{children:"'backend'"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli repo build [options]\n\nBuild packages in the project, excluding bundled app and backend packages.\n\nOptions:\n  --all          Build all packages, including bundled app and backend packages.\n  --since <ref>  Only build packages and their dev dependents that changed since the specified ref\n"})}),"\n",(0,a.jsx)(n.h2,{id:"repo-lint",children:"repo lint"}),"\n",(0,a.jsx)(n.p,{children:"Lint all packages in the project."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli repo lint [options]\n\nLint all packages in the project\n\nOptions:\n  --format <format>  Lint report output format (default: "eslint-formatter-friendly")\n  --since <ref>      Only lint packages that changed since the specified ref\n  --fix              Attempt to automatically fix violations\n'})}),"\n",(0,a.jsx)(n.h2,{id:"package-start",children:"package start"}),"\n",(0,a.jsxs)(n.p,{children:["Starts the package for local development. See the frontend and backend development parts in the build system ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#bundling",children:"bundling"})," section for more details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package start [options]\n\nStart a package for local development\n\nOptions:\n  --config <path>  Config files to load instead of app-config.yaml (default: [])\n  --role <name>    Run the command with an explicit package role\n  --check          Enable type checking and linting if available\n  --inspect        Enable debugger in Node.js environments\n  --inspect-brk    Enable debugger in Node.js environments, breaking before code starts\n"})}),"\n",(0,a.jsx)(n.h2,{id:"package-build",children:"package build"}),"\n",(0,a.jsxs)(n.p,{children:["Build an individual package based on its role. See the build system ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#building",children:"building"})," and ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#bundling",children:"bundling"})," sections for more details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package build [options]\n\nBuild a package for production deployment or publishing\n\nOptions:\n  --role <name>              Run the command with an explicit package role\n  --minify                   Minify the generated code. Does not apply to app or backend packages.\n  --skip-build-dependencies  Skip the automatic building of local dependencies. Applies to backend packages only.\n  --stats                    If bundle stats are available, write them to the output directory. Applies to app packages only.\n  --config <path>            Config files to load instead of app-config.yaml. Applies to app packages only. (default: [])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"package-lint",children:"package lint"}),"\n",(0,a.jsxs)(n.p,{children:["Lint a package. In addition to the default ",(0,a.jsx)(n.code,{children:"eslint"})," behavior, this command will\ninclude TypeScript files, treat warnings as errors, and default to linting the\nentire directory if no specific files are listed. For more information, see the\nbuild system ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#linting",children:"linting"})," section."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli package lint [options]\n\nLint a package\n\nOptions:\n  --format <format>  Lint report output format (default: "eslint-formatter-friendly")\n  --fix              Attempt to automatically fix violations\n'})}),"\n",(0,a.jsx)(n.h2,{id:"package-test",children:"package test"}),"\n",(0,a.jsxs)(n.p,{children:["Run tests, forwarding all unknown options to Jest, and defaulting to watch mode.\nWhen executing the tests, ",(0,a.jsx)(n.code,{children:"process.env.NODE_ENV"})," will be set to ",(0,a.jsx)(n.code,{children:'"test"'}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This command uses a default Jest configuration that is included in the CLI,\nwhich is set up with similar goals for speed, scale, and working within a\nmonorepo. The configuration sets the ",(0,a.jsx)(n.code,{children:"src"})," as the root directory, enforces the\n",(0,a.jsx)(n.code,{children:".test."})," infix for tests, and uses ",(0,a.jsx)(n.code,{children:"src/setupTests.ts"})," as the test setup\nlocation. The included configuration also supports test execution at the root of\na yarn workspaces monorepo by automatically creating one grouped configuration\nthat includes all packages that have ",(0,a.jsx)(n.code,{children:"backstage-cli test"})," in their package\n",(0,a.jsx)(n.code,{children:"test"})," script."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about configuration overrides and editor support, see the ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#jest-configuration",children:"Jest Configuration section"})," in the build system documentation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package test [options]\n\nRun tests, forwarding args to Jest, defaulting to watch mode\n\nOptions:\n  --backstage-cli-help    display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"package-clean",children:"package clean"}),"\n",(0,a.jsx)(n.p,{children:"Remove cache and output directories."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package clean [options]\n\nDelete cache directories\n"})}),"\n",(0,a.jsx)(n.h2,{id:"package-prepack",children:"package prepack"}),"\n",(0,a.jsxs)(n.p,{children:["This command should be added as ",(0,a.jsx)(n.code,{children:"scripts.prepack"})," in all packages. It enables\npackaging- and publish-time overrides for fields inside ",(0,a.jsx)(n.code,{children:"packages.json"}),".\nFor more details, see the build system ",(0,a.jsx)(n.a,{href:"/docs/local-dev/cli-build-system#publishing",children:"publishing"})," section."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package prepack [options]\n\nPrepares a package for packaging before publishing\n"})}),"\n",(0,a.jsx)(n.h2,{id:"package-postpack",children:"package postpack"}),"\n",(0,a.jsxs)(n.p,{children:["This should be added as ",(0,a.jsx)(n.code,{children:"scripts.postpack"})," in all packages. It restores\n",(0,a.jsx)(n.code,{children:"package.json"})," to what it looked like before calling the ",(0,a.jsx)(n.code,{children:"prepack"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package postpack [options]\n\nRestores the changes made by the prepack command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"new"})," command opens up an interactive guide for you to create new things\nin your app. If you do not pass in any options it is completely interactive, but\nit is possible to pre-select what you want to create using the ",(0,a.jsx)(n.code,{children:"--select"})," flag,\nand provide options using ",(0,a.jsx)(n.code,{children:"--option"}),", for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"backstage-cli new --select plugin --option id=foo\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command is typically added as script in the root ",(0,a.jsx)(n.code,{children:"package.json"})," to be\nexecuted with ",(0,a.jsx)(n.code,{children:"yarn new"}),", using options that are appropriate for the organization\nthat owns the app repo. For example you may have it set up like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "new": "backstage-cli new --scope internal --no-private --npm-registry https://acme.org/npm"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli create [options]\n\nOptions:\n  --select <name>          Select the thing you want to be creating upfront\n  --option <name>=<value>  Pre-fill options for the creation process (default: [])\n  --scope <scope>          The scope to use for new packages\n  --npm-registry <URL>     The package registry to use for new packages\n  --no-private             Do not mark new packages as private\n  -h, --help               display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configdocs",children:"config:docs"}),"\n",(0,a.jsx)(n.p,{children:"This commands opens up the reference documentation of your apps local\nconfiguration schema in the browser. This is useful to get an overview of what\nconfiguration values are available to use, a description of what they do and\ntheir format, and where they get sent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:docs [options]\n\nBrowse the configuration reference documentation\n\nOptions:\n  --package <name>  Only include the schema that applies to the given package\n  -h, --help        display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configprint",children:"config:print"}),"\n",(0,a.jsxs)(n.p,{children:["Print the static configuration, defaulting to reading ",(0,a.jsx)(n.code,{children:"app-config.yaml"})," in the\nrepo root, using schema collected from all local packages in the repo."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, to validate that a given configuration value is visible in the\nfrontend when building the ",(0,a.jsx)(n.code,{children:"my-app"})," package, you can use the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn backstage-cli config:print --frontend --package my-app\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:print [options]\n\nOptions:\n  --package <name>   Only load config schema that applies to the given package\n  --lax              Do not require environment variables to be set\n  --frontend         Print only the frontend configuration\n  --with-secrets     Include secrets in the printed configuration\n  --format <format>  Format to print the configuration in, either json or yaml [yaml]\n  --config <path>    Config files to load instead of app-config.yaml (default: [])\n  -h, --help         display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configcheck",children:"config:check"}),"\n",(0,a.jsxs)(n.p,{children:["Validate that static configuration loads and matches schema, defaulting to\nreading ",(0,a.jsx)(n.code,{children:"app-config.yaml"})," in the repo root and using schema collected from all\nlocal packages in the repo."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:check [options]\n\nOptions:\n  --package <name>  Only load config schema that applies to the given package\n  --lax             Do not require environment variables to be set\n  --frontend        Only validate the frontend configuration\n  --deprecated      Output deprecated configuration settings\n  --strict          Ensure that the provided config(s) has no errors and does not contain keys not in the schema.\n  --config <path>   Config files to load instead of app-config.yaml (default: [])\n  -h, --help        display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configschema",children:"config:schema"}),"\n",(0,a.jsx)(n.p,{children:"Dump the configuration schema that was collected from all local packages in the\nrepo."}),"\n",(0,a.jsxs)(n.p,{children:["Note: when run by ",(0,a.jsx)(n.code,{children:"yarn"}),", supply the yarn option ",(0,a.jsx)(n.code,{children:"--silent"})," if you are using the\noutput in a command line pipe to avoid non schema output in the pipeline."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:schema [options]\n\nPrint configuration schema\n\nOptions:\n  --package <name>   Only output config schema that applies to the given package\n  --format <format>  Format to print the schema in, either json or yaml [yaml]\n  -h, --help         display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"versionsbump",children:"versions:bump"}),"\n",(0,a.jsxs)(n.p,{children:["Bump all ",(0,a.jsx)(n.code,{children:"@backstage"})," packages to the latest versions. This checks for updates\nin the package registry, and will update entries both in ",(0,a.jsx)(n.code,{children:"yarn.lock"})," and\n",(0,a.jsx)(n.code,{children:"package.json"})," files when necessary."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli versions:bump [options]\n\nOptions:\n  -h, --help        display help for command\n  --pattern <glob>  Override glob for matching packages to upgrade\n  --release <version|next|main> Bump to a specific Backstage release line or version (default: "main")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"versionscheck",children:"versions:check"}),"\n",(0,a.jsxs)(n.p,{children:["Validate ",(0,a.jsx)(n.code,{children:"@backstage"})," dependencies within the repo, making sure that there are\nno duplicates of packages that might lead to breakages."]}),"\n",(0,a.jsxs)(n.p,{children:["By supplying the ",(0,a.jsx)(n.code,{children:"--fix"})," flag the command will attempt to fix any conflict that\ncan be resolved by editing ",(0,a.jsx)(n.code,{children:"yarn.lock"}),", but will not attempt to search for\nremote updates or modify any ",(0,a.jsx)(n.code,{children:"package.json"})," files."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli versions:check [options]\n\nOptions:\n  --fix       Fix any auto-fixable versioning problems\n  -h, --help  display help for command\n"})}),"\n",(0,a.jsx)(n.h2,{id:"build-workspace",children:"build-workspace"}),"\n",(0,a.jsxs)(n.p,{children:["Builds a mirror of the workspace using the packaged production version of each\npackage. This essentially calls ",(0,a.jsx)(n.code,{children:"yarn pack"})," in each included package and unpacks\nthe resulting archive in the target ",(0,a.jsx)(n.code,{children:"workspace-dir"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli build-workspace [options] <workspace-dir>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-github-app",children:"create-github-app"}),"\n",(0,a.jsxs)(n.p,{children:["Creates a GitHub App in your GitHub organization. This is an alternative to\ntoken-based ",(0,a.jsx)(n.a,{href:"/docs/integrations/github/locations",children:"GitHub integration"}),". See\n",(0,a.jsx)(n.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps for Backstage Authentication"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Launches a browser to create the App through GitHub and saves the result as a\nYAML file that can be referenced in the GitHub integration configuration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli create-github-app <github-org>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"info",children:"info"}),"\n",(0,a.jsxs)(n.p,{children:["Outputs debug information which is useful when opening an issue. Outputs system\ninformation, node.js and npm versions, CLI version and type (inside backstage\nrepo or a created app), all ",(0,a.jsx)(n.code,{children:"@backstage/*"})," package dependency versions."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli info\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var a=t(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,o={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,a)&&!s.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,m={};function k(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}k.prototype.isReactComponent={},k.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var x=b.prototype=new y;x.constructor=b,f(x,k.prototype),x.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,a){var i,o={},r=null,c=null;if(null!=n)for(i in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(r=""+n.key),n)v.call(n,i)&&!_.hasOwnProperty(i)&&(o[i]=n[i]);var s=arguments.length-2;if(1===s)o.children=a;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:t,type:e,key:r,ref:c,props:o,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,i,o,r){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case a:s=!0}}if(s)return r=r(s=e),e=""===o?"."+E(s,0):o,j(r)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),R(r,n,i,"",(function(e){return e}))):null!=r&&(O(r)&&(r=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(r,i+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(C,"$&/")+"/")+e)),n.push(r)),1;if(s=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var d=o+E(c=e[l],l);s+=R(c,n,i,d,r)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)s+=R(c=c.value,n,i,d=o+E(c,l++),r);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function N(e,n,t){if(null==e)return e;var a=[],i=0;return R(e,a,"","",(function(e){return n.call(t,e,i++)})),a}function T(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},P={transition:null},U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:P,ReactCurrentOwner:w};n.Children={map:N,forEach:function(e,n,t){N(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return N(e,(function(){n++})),n},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=k,n.Fragment=i,n.Profiler=r,n.PureComponent=b,n.StrictMode=o,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.cloneElement=function(e,n,a){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),o=e.key,r=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(r=n.ref,c=w.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)v.call(n,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==s?s[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=a;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:t,type:e.type,key:o,ref:r,props:i,_owner:c}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,n){return{$$typeof:p,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=P.transition;P.transition={};try{e()}finally{P.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return L.current.useCallback(e,n)},n.useContext=function(e){return L.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return L.current.useDeferredValue(e)},n.useEffect=function(e,n){return L.current.useEffect(e,n)},n.useId=function(){return L.current.useId()},n.useImperativeHandle=function(e,n,t){return L.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return L.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return L.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return L.current.useMemo(e,n)},n.useReducer=function(e,n,t){return L.current.useReducer(e,n,t)},n.useRef=function(e){return L.current.useRef(e)},n.useState=function(e){return L.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return L.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return L.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(667294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);