"use strict";var a,b;Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{BuildInfo:()=>f,Colors:()=>j,Headers:()=>i,IDs:()=>a,IPCEvents:()=>b,LoggerStyles:()=>k,Paths:()=>e,ReactSymbols:()=>h,Regex:()=>g});const c=require("fs"),d=require("path"),e={root:(0,d.resolve)(__dirname,"..",".."),storage:(0,d.resolve)(__dirname,"..","..","..","..","unbound"),themes:(0,d.resolve)(__dirname,"..","..","..","..","unbound","themes"),plugins:(0,d.resolve)(__dirname,"..","..","..","..","unbound","plugins"),settings:(0,d.resolve)(__dirname,"..","..","..","..","unbound","settings")};!function(a){a.BOT="934019188450816000"}(a||(a={}));const f=JSON.parse((0,c.readFileSync)((0,d.resolve)(process.resourcesPath,"build_info.json"),"utf-8"));!function(b){b.GET_WINDOW_OPTIONS="GET_WINDOW_OPTIONS",b.PROCESS_ISOLATED="PROCESS_ISOLATED"}(b||(b={}));const g={newline:/\r?\n|\r/g,url:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi},h={Ref:Symbol.for("react.forward_ref"),Element:Symbol.for("react.element"),Memo:Symbol.for("react.memo")},i={delete:["x-frame-options","content-security-policy","content-security-policy-report-only"],append:[{name:"access-control-allow-origin",value:"*",exists:{name:"access-control-allow-credentials",condition:!1}}]},j={BRAND:"#C74050"},k={default:{padding:"2.5px 5px","border-radius":"5px","margin-right":"3px","border-bottom":"2px solid rgba(0, 0, 0, 0.5)"},success:{"background-color":"#6BFFB2",color:"black"},warn:{"background-color":"#FCEE83",color:"black"},error:{"background-color":"#FF0000",color:"white"},log:{"background-color":j.BRAND},debug:{"background-color":"#487DE9",color:"white"}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhzID0ge1xyXG4gIHJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nKSxcclxuICBzdG9yYWdlOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywgJy4uJywgJ3VuYm91bmQnKSxcclxuICB0aGVtZXM6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcsICd0aGVtZXMnKSxcclxuICBwbHVnaW5zOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywgJy4uJywgJ3VuYm91bmQnLCAncGx1Z2lucycpLFxyXG4gIHNldHRpbmdzOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywgJy4uJywgJ3VuYm91bmQnLCAnc2V0dGluZ3MnKVxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gSURzIHtcclxuICBCT1QgPSAnOTM0MDE5MTg4NDUwODE2MDAwJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnVpbGRJbmZvID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocmVzb2x2ZShwcm9jZXNzLnJlc291cmNlc1BhdGgsICdidWlsZF9pbmZvLmpzb24nKSwgJ3V0Zi04JykpO1xyXG5cclxuZXhwb3J0IGVudW0gSVBDRXZlbnRzIHtcclxuICBHRVRfV0lORE9XX09QVElPTlMgPSAnR0VUX1dJTkRPV19PUFRJT05TJyxcclxuICBQUk9DRVNTX0lTT0xBVEVEID0gJ1BST0NFU1NfSVNPTEFURUQnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUmVnZXggPSB7XHJcbiAgbmV3bGluZTogL1xccj9cXG58XFxyL2csXHJcbiAgdXJsOiAvWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MSwyNTZ9XFwuW2EtekEtWjAtOSgpXXsxLDZ9XFxiKFstYS16QS1aMC05KClAOiVfXFwrLn4jPyYvLz1dKik/L2dpXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUmVhY3RTeW1ib2xzID0ge1xyXG4gIFJlZjogU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSxcclxuICBFbGVtZW50OiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JyksXHJcbiAgTWVtbzogU3ltYm9sLmZvcigncmVhY3QubWVtbycpXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IHtcclxuICBkZWxldGU6IFtcclxuICAgICd4LWZyYW1lLW9wdGlvbnMnLFxyXG4gICAgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5JyxcclxuICAgICdjb250ZW50LXNlY3VyaXR5LXBvbGljeS1yZXBvcnQtb25seSdcclxuICBdLFxyXG5cclxuICBhcHBlbmQ6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsXHJcbiAgICAgIHZhbHVlOiAnKicsXHJcbiAgICAgIGV4aXN0czoge1xyXG4gICAgICAgIG5hbWU6ICdhY2Nlc3MtY29udHJvbC1hbGxvdy1jcmVkZW50aWFscycsXHJcbiAgICAgICAgY29uZGl0aW9uOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9ycyA9IHtcclxuICBCUkFORDogJyNDNzQwNTAnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nZ2VyU3R5bGVzID0ge1xyXG4gIGRlZmF1bHQ6IHtcclxuICAgICdwYWRkaW5nJzogJzIuNXB4IDVweCcsXHJcbiAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxyXG4gICAgJ21hcmdpbi1yaWdodCc6ICczcHgnLFxyXG4gICAgJ2JvcmRlci1ib3R0b20nOiAnMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KSdcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QkZGQjInLFxyXG4gICAgJ2NvbG9yJzogJ2JsYWNrJ1xyXG4gIH0sXHJcbiAgd2Fybjoge1xyXG4gICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0ZDRUU4MycsXHJcbiAgICAnY29sb3InOiAnYmxhY2snXHJcbiAgfSxcclxuICBlcnJvcjoge1xyXG4gICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0ZGMDAwMCcsXHJcbiAgICAnY29sb3InOiAnd2hpdGUnXHJcbiAgfSxcclxuICBsb2c6IHtcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogQ29sb3JzLkJSQU5EXHJcbiAgfSxcclxuICBkZWJ1Zzoge1xyXG4gICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzQ4N0RFOScsXHJcbiAgICAnY29sb3InOiAnd2hpdGUnXHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJCdWlsZEluZm8iLCJDb2xvcnMiLCJIZWFkZXJzIiwiTG9nZ2VyU3R5bGVzIiwiUGF0aHMiLCJSZWFjdFN5bWJvbHMiLCJSZWdleCIsInJvb3QiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwic3RvcmFnZSIsInRoZW1lcyIsInBsdWdpbnMiLCJzZXR0aW5ncyIsIklEcyIsIkJPVCIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsInByb2Nlc3MiLCJyZXNvdXJjZXNQYXRoIiwiSVBDRXZlbnRzIiwiR0VUX1dJTkRPV19PUFRJT05TIiwiUFJPQ0VTU19JU09MQVRFRCIsIm5ld2xpbmUiLCJ1cmwiLCJSZWYiLCJTeW1ib2wiLCJmb3IiLCJFbGVtZW50IiwiTWVtbyIsImRlbGV0ZSIsImFwcGVuZCIsIm5hbWUiLCJ2YWx1ZSIsImV4aXN0cyIsImNvbmRpdGlvbiIsIkJSQU5EIiwiZGVmYXVsdCIsInN1Y2Nlc3MiLCJ3YXJuIiwiZXJyb3IiLCJsb2ciLCJkZWJ1ZyJd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