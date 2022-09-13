"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{state:()=>c,initialize:()=>initialize,shutdown:()=>shutdown,add:()=>add,default:()=>d});const a=require("../modules/webpack/common"),b=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("../i18n")),c={locale:"en-US",messages:{}};function initialize(){a.Locale&&(c.locale=a.Locale.getLocale()??"en-US",a.Locale.on("locale",onChange),add(b.default))}function shutdown(){if(!a.Locale)return;let b=a.Locale._provider._context;for(let d in c.messages)if(c.messages[d])for(let e of Object.keys(c.messages[d]))delete b.defaultMessages[e],delete b.messages[e],delete a.Locale.Messages[e];a.Locale.off("locale",onChange)}function add(b){if("object"!=typeof b||Array.isArray(b))throw Error("Locale strings must be an object with languages and strings.");for(let c in b)addStrings(c,b[c]);return{remove(){let c=a.Locale._provider._context;for(let d in b)for(let e of Object.keys(b[d]))delete c.defaultMessages[e],delete c.messages[e],delete a.Locale.Messages[e]}}}function addStrings(a,b){c.locale&&(c.messages[a]??={},Object.assign(c.messages[a],b),inject())}function inject(){if(!c.locale||!a.Locale)return;let b=a.Locale._provider._context;Object.assign(b.messages,c.messages[c.locale]??{}),Object.assign(b.defaultMessages,c.messages["en-US"]??{})}function onChange(b){c.locale=b,a.Locale.loadPromise.then(inject)}const d={state:c,add,inject}