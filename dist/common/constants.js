"use strict";var a,b;Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{IDs:()=>a,IPCEvents:()=>b,Paths:()=>e,BuildInfo:()=>f,Regex:()=>g,ReactSymbols:()=>h,Headers:()=>i,Colors:()=>j,LoggerStyles:()=>k});const c=require("fs"),d=require("path"),e={root:(0,d.resolve)(__dirname,"..",".."),storage:(0,d.resolve)(__dirname,"..","..","..","..","unbound"),themes:(0,d.resolve)(__dirname,"..","..","..","..","unbound","themes"),plugins:(0,d.resolve)(__dirname,"..","..","..","..","unbound","plugins"),settings:(0,d.resolve)(__dirname,"..","..","..","..","unbound","settings")};!function(a){a.BOT="934019188450816000"}(a||(a={}));const f=JSON.parse((0,c.readFileSync)((0,d.resolve)(process.resourcesPath,"build_info.json"),"utf-8"));!function(b){b.GET_WINDOW_OPTIONS="GET_WINDOW_OPTIONS",b.PROCESS_ISOLATED="PROCESS_ISOLATED"}(b||(b={}));const g={newline:/\r?\n|\r/g,url:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi},h={Ref:Symbol.for("react.forward_ref"),Element:Symbol.for("react.element"),Memo:Symbol.for("react.memo")},i={delete:["x-frame-options","content-security-policy","content-security-policy-report-only"],append:[{name:"access-control-allow-origin",value:"*",exists:{name:"access-control-allow-credentials",condition:!1}}]},j={BRAND:"#C74050"},k={default:{padding:"2.5px 5px","border-radius":"5px","margin-right":"3px","border-bottom":"2px solid rgba(0, 0, 0, 0.5)"},success:{"background-color":"#6BFFB2",color:"black"},warn:{"background-color":"#FCEE83",color:"black"},error:{"background-color":"#FF0000",color:"white"},log:{"background-color":j.BRAND},debug:{"background-color":"#487DE9",color:"white"}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhzID0ge1xyXG4gICByb290OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJyksXHJcbiAgIHN0b3JhZ2U6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcpLFxyXG4gICB0aGVtZXM6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcsICd0aGVtZXMnKSxcclxuICAgcGx1Z2luczogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicsICcuLicsICd1bmJvdW5kJywgJ3BsdWdpbnMnKSxcclxuICAgc2V0dGluZ3M6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcsICdzZXR0aW5ncycpXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBJRHMge1xyXG4gICBCT1QgPSAnOTM0MDE5MTg4NDUwODE2MDAwJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnVpbGRJbmZvID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocmVzb2x2ZShwcm9jZXNzLnJlc291cmNlc1BhdGgsICdidWlsZF9pbmZvLmpzb24nKSwgJ3V0Zi04JykpO1xyXG5cclxuZXhwb3J0IGVudW0gSVBDRXZlbnRzIHtcclxuICAgR0VUX1dJTkRPV19PUFRJT05TID0gJ0dFVF9XSU5ET1dfT1BUSU9OUycsXHJcbiAgIFBST0NFU1NfSVNPTEFURUQgPSAnUFJPQ0VTU19JU09MQVRFRCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdleCA9IHtcclxuICAgbmV3bGluZTogL1xccj9cXG58XFxyL2csXHJcbiAgIHVybDogL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezEsMjU2fVxcLlthLXpBLVowLTkoKV17MSw2fVxcYihbLWEtekEtWjAtOSgpQDolX1xcKy5+Iz8mLy89XSopPy9naVxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWN0U3ltYm9scyA9IHtcclxuICAgUmVmOiBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpLFxyXG4gICBFbGVtZW50OiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JyksXHJcbiAgIE1lbW86IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSB7XHJcbiAgIGRlbGV0ZTogW1xyXG4gICAgICAneC1mcmFtZS1vcHRpb25zJyxcclxuICAgICAgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5JyxcclxuICAgICAgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5LXJlcG9ydC1vbmx5J1xyXG4gICBdLFxyXG5cclxuICAgYXBwZW5kOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAgbmFtZTogJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsXHJcbiAgICAgICAgIHZhbHVlOiAnKicsXHJcbiAgICAgICAgIGV4aXN0czoge1xyXG4gICAgICAgICAgICBuYW1lOiAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctY3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IGZhbHNlXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICBdXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JzID0ge1xyXG4gICBCUkFORDogJyNDNzQwNTAnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nZ2VyU3R5bGVzID0ge1xyXG4gICBkZWZhdWx0OiB7XHJcbiAgICAgICdwYWRkaW5nJzogJzIuNXB4IDVweCcsXHJcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzVweCcsXHJcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnM3B4JyxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KSdcclxuICAgfSxcclxuICAgc3VjY2Vzczoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNkJGRkIyJyxcclxuICAgICAgJ2NvbG9yJzogJ2JsYWNrJ1xyXG4gICB9LFxyXG4gICB3YXJuOiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGQ0VFODMnLFxyXG4gICAgICAnY29sb3InOiAnYmxhY2snXHJcbiAgIH0sXHJcbiAgIGVycm9yOiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGRjAwMDAnLFxyXG4gICAgICAnY29sb3InOiAnd2hpdGUnXHJcbiAgIH0sXHJcbiAgIGxvZzoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IENvbG9ycy5CUkFORFxyXG4gICB9LFxyXG4gICBkZWJ1Zzoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNDg3REU5JyxcclxuICAgICAgJ2NvbG9yJzogJ3doaXRlJ1xyXG4gICB9XHJcbn07Il0sIm5hbWVzIjpbIlBhdGhzIiwiQnVpbGRJbmZvIiwiUmVnZXgiLCJSZWFjdFN5bWJvbHMiLCJIZWFkZXJzIiwiQ29sb3JzIiwiTG9nZ2VyU3R5bGVzIiwicm9vdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJzdG9yYWdlIiwidGhlbWVzIiwicGx1Z2lucyIsInNldHRpbmdzIiwiSURzIiwiQk9UIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicHJvY2VzcyIsInJlc291cmNlc1BhdGgiLCJJUENFdmVudHMiLCJHRVRfV0lORE9XX09QVElPTlMiLCJQUk9DRVNTX0lTT0xBVEVEIiwibmV3bGluZSIsInVybCIsIlJlZiIsIlN5bWJvbCIsImZvciIsIkVsZW1lbnQiLCJNZW1vIiwiZGVsZXRlIiwiYXBwZW5kIiwibmFtZSIsInZhbHVlIiwiZXhpc3RzIiwiY29uZGl0aW9uIiwiQlJBTkQiLCJkZWZhdWx0Iiwic3VjY2VzcyIsIndhcm4iLCJlcnJvciIsImxvZyIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQSxpQkFXTyxDQUVOLENBSU0sQ0FHTiw4S0FqQllBLEtBQUssS0FBTEEsQ0FBSyxDQVlMQyxTQUFTLEtBQVRBLENBQVMsQ0FPVEMsS0FBSyxLQUFMQSxDQUFLLENBS0xDLFlBQVksS0FBWkEsQ0FBWSxDQU1aQyxPQUFPLEtBQVBBLENBQU8sQ0FtQlBDLE1BQU0sS0FBTkEsQ0FBTSxDQUlOQyxZQUFZLEtBQVpBLENBQVksbUJBeERJLElBQUksWUFDVCxNQUFNLEVBRWpCTixDQUFLLENBQUcsQ0FDbEJPLElBQUksQ0FBRUMsR0FBQUEsQ0FBTyxRQUFBLEVBQUNDLFNBQVMsQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFDLENBQ3BDQyxPQUFPLENBQUVGLEdBQUFBLENBQU8sUUFBQSxFQUFDQyxTQUFTLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLFNBQVMsQ0FBQyxDQUM5REUsTUFBTSxDQUFFSCxHQUFBQSxDQUFPLFFBQUEsRUFBQ0MsU0FBUyxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxTQUFTLENBQUUsUUFBUSxDQUFDLENBQ3ZFRyxPQUFPLENBQUVKLEdBQUFBLENBQU8sUUFBQSxFQUFDQyxTQUFTLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLFNBQVMsQ0FBRSxTQUFTLENBQUMsQ0FDekVJLFFBQVEsQ0FBRUwsR0FBQUEsQ0FBTyxRQUFBLEVBQUNDLFNBQVMsQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsU0FBUyxDQUFFLFVBQVUsQ0FBQyxDQUM3RSxXQUVXSyxDQUFHLEVBQUhBLENBQUcsQ0FDWkMsR0FBRyxDQUFHLG9CQUFvQixFQURqQkQsQ0FBRyxHQUFIQSxDQUFHLEtBSVIsT0FBTWIsQ0FBUyxDQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsR0FBQUEsQ0FBWSxhQUFBLEVBQUNWLEdBQUFBLENBQU8sUUFBQSxFQUFDVyxPQUFPLENBQUNDLGFBQWEsQ0FBRSxpQkFBaUIsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxDQUFDLEFBQUMsV0FFbEdDLENBQVMsRUFBVEEsQ0FBUyxDQUNsQkMsa0JBQWtCLENBQWxCQSxvQkFBa0IsQ0FEVEQsQ0FBUyxDQUVsQkUsZ0JBQWdCLENBQWhCQSxrQkFBZ0IsRUFGUEYsQ0FBUyxHQUFUQSxDQUFTLEtBS2QsT0FBTW5CLENBQUssQ0FBRyxDQUNsQnNCLE9BQU8sWUFBYSxDQUNwQkMsR0FBRyx3RkFBeUYsQ0FDOUYsQUFBUyxDQUVHdEIsQ0FBWSxDQUFHLENBQ3pCdUIsR0FBRyxDQUFFQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNwQ0MsT0FBTyxDQUFFRixNQUFNLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDcENFLElBQUksQ0FBRUgsTUFBTSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBRVl4QixDQUFPLENBQUcsQ0FDcEIyQixNQUFNLENBQUUsQ0FDTCxpQkFBaUIsQ0FDakIseUJBQXlCLENBQ3pCLHFDQUFxQyxDQUN2QyxDQUVEQyxNQUFNLENBQUUsQ0FDTCxDQUNHQyxJQUFJLENBQUUsNkJBQTZCLENBQ25DQyxLQUFLLENBQUUsR0FBRyxDQUNWQyxNQUFNLENBQUUsQ0FDTEYsSUFBSSxDQUFFLGtDQUFrQyxDQUN4Q0csU0FBUyxDQUFFLENBQUEsQ0FBSyxDQUNsQixDQUNILENBQ0gsQ0FDSCxBQUFTLENBRUcvQixDQUFNLENBQUcsQ0FDbkJnQyxLQUFLLENBQUUsU0FBUyxDQUNsQixBQUFTLENBRUcvQixDQUFZLENBQUcsQ0FDekJnQyxPQUFPLENBQUUsQ0FDTixPQUFTLENBQUUsV0FBVyxDQUN0QixlQUFlLENBQUUsS0FBSyxDQUN0QixjQUFjLENBQUUsS0FBSyxDQUNyQixlQUFlLENBQUUsOEJBQThCLENBQ2pELENBQ0RDLE9BQU8sQ0FBRSxDQUNOLGtCQUFrQixDQUFFLFNBQVMsQ0FDN0IsS0FBTyxDQUFFLE9BQU8sQ0FDbEIsQ0FDREMsSUFBSSxDQUFFLENBQ0gsa0JBQWtCLENBQUUsU0FBUyxDQUM3QixLQUFPLENBQUUsT0FBTyxDQUNsQixDQUNEQyxLQUFLLENBQUUsQ0FDSixrQkFBa0IsQ0FBRSxTQUFTLENBQzdCLEtBQU8sQ0FBRSxPQUFPLENBQ2xCLENBQ0RDLEdBQUcsQ0FBRSxDQUNGLGtCQUFrQixDQUFFckMsQ0FBTSxDQUFDZ0MsS0FBSyxDQUNsQyxDQUNETSxLQUFLLENBQUUsQ0FDSixrQkFBa0IsQ0FBRSxTQUFTLENBQzdCLEtBQU8sQ0FBRSxPQUFPLENBQ2xCLENBQ0gsQUF6RFUsQUF5RFQifQ==