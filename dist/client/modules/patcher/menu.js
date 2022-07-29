"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{patches:()=>g,before:()=>h,after:()=>i,instead:()=>j,create:()=>k,unpatchAll:()=>l,default:()=>p});const a=require("../../../common/logger"),b=require("../../../common/utilities/index"),c=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(require("@webpack")),d=function(a){return a&&a.__esModule?a:{default:a}}(require("./index"));function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}const f=(0,a.createLogger)("Patcher","Menu"),g={};function h(a,b,c){m(a,b,c),n("before",a,b,c)}function i(a,b,c){m(a,b,c),n("after",a,b,c)}function j(a,b,c){m(a,b,c),n("instead",a,b,c)}function k(a){return{before:(b,c)=>h(a,b,c),after:(b,c)=>i(a,b,c),instead:(b,c)=>j(a,b,c),unpatchAll:()=>l(a)}}function l(a){for(let b in g){let c=g[b];g[b]=c.filter(b=>b.caller!==a)}return d.default.unpatchAll(a)}function m(a,b,c){if(a&&"string"==typeof a){if(b&&"string"==typeof b){if(!c||"function"!=typeof c)throw TypeError("third argument callback does not exist or is not of type function")}else throw TypeError("second argument menu does not exist or is not of type string")}else throw TypeError("first argument caller does not exist or is not of type string")}function n(a,b,c,d){g[c]??=[],g[c].push({type:a,caller:b,menu:c,callback:d,applied:!1})}function o(){let a=c.findByProps("openContextMenuLazy");d.default.instead("unbound-menu-patcher",a,"openContextMenuLazy",(a,c,e)=>{if(!c[1].__unbound){let h=c[1];c[1]=async(...a)=>{let c=await h(a[0]);return a=>(function(a,c){let e=c(a);try{if(e.type.displayName?.endsWith("ContextMenu")){let h=e.type?.displayName,i=g[h];if(!i?.length)return e;for(let j of i)d.default[j.type](j.caller,e,"type",(a,b,c)=>{try{return j.callback.apply(a,[a,b,c])}catch(d){f.error(`Failed to run context menu patch on ${h} of caller ${j.caller}.`,d)}},!0);return e}let k=(0,b.forceRender)(e.type)(e.props);if(!k)return e;let l=k.props.children;if(l.type?.displayName?.endsWith("ContextMenu")){let m=l.type?.displayName,n=g[m];if(!n?.length)return e;for(let o of n)d.default[o.type](o.caller,l,"type",(a,b,c)=>{try{return o.callback.apply(a,[a,b,c])}catch(d){f.error(`Failed to run context menu patch on ${m} of caller ${o.caller}.`,d)}},!0);return l}let p=(0,b.forceRender)(l.type)(l.props);if("AnalyticsContext"===p.type.displayName){let q=p.props.children,r=q.type?.displayName,s=g[r];if(!s?.length)return e;for(let t of s)d.default[t.type](t.caller,q,"type",(a,b,c)=>{try{return t.callback.apply(a,[a,b,c])}catch(d){f.error(`Failed to run context menu patch on ${r} of caller ${t.caller}.`,d)}},!0);return q}}catch{}return e})(a,c)},c[1].__unbound=!0}return e.call(a,...c)})}setImmediate(()=>c.data.available.then(o));const p={instead:j,create:k,before:h,after:i,patches:g}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9wYXRjaGVyL21lbnUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgeyBmb3JjZVJlbmRlciB9IGZyb20gJ0B1dGlsaXRpZXMnO1xyXG5pbXBvcnQgKiBhcyBXZWJwYWNrIGZyb20gJ0B3ZWJwYWNrJztcclxuaW1wb3J0IFBhdGNoZXIgZnJvbSAnLic7XHJcblxyXG5jb25zdCBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoJ1BhdGNoZXInLCAnTWVudScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmUoY2FsbGVyOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgY2FsbGJhY2s6IEZuKSB7XHJcbiAgIHZhbGlkYXRlQXJndW1lbnRzKGNhbGxlciwgbWVudSwgY2FsbGJhY2spO1xyXG4gICBwdXNoKCdiZWZvcmUnLCBjYWxsZXIsIG1lbnUsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyKGNhbGxlcjogc3RyaW5nLCBtZW51OiBzdHJpbmcsIGNhbGxiYWNrOiBGbikge1xyXG4gICB2YWxpZGF0ZUFyZ3VtZW50cyhjYWxsZXIsIG1lbnUsIGNhbGxiYWNrKTtcclxuICAgcHVzaCgnYWZ0ZXInLCBjYWxsZXIsIG1lbnUsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RlYWQoY2FsbGVyOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgY2FsbGJhY2s6IEZuKSB7XHJcbiAgIHZhbGlkYXRlQXJndW1lbnRzKGNhbGxlciwgbWVudSwgY2FsbGJhY2spO1xyXG4gICBwdXNoKCdpbnN0ZWFkJywgY2FsbGVyLCBtZW51LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoY2FsbGVyKSB7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGJlZm9yZTogKG1lbnU6IHN0cmluZywgY2FsbGJhY2s6IEZuKSA9PiBiZWZvcmUoY2FsbGVyLCBtZW51LCBjYWxsYmFjayksXHJcbiAgICAgIGFmdGVyOiAobWVudTogc3RyaW5nLCBjYWxsYmFjazogRm4pID0+IGFmdGVyKGNhbGxlciwgbWVudSwgY2FsbGJhY2spLFxyXG4gICAgICBpbnN0ZWFkOiAobWVudTogc3RyaW5nLCBjYWxsYmFjazogRm4pID0+IGluc3RlYWQoY2FsbGVyLCBtZW51LCBjYWxsYmFjayksXHJcbiAgICAgIHVucGF0Y2hBbGw6ICgpID0+IHVucGF0Y2hBbGwoY2FsbGVyKVxyXG4gICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5wYXRjaEFsbChjYWxsZXI6IHN0cmluZykge1xyXG4gICBmb3IgKGNvbnN0IG1lbnUgaW4gcGF0Y2hlcykge1xyXG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gcGF0Y2hlc1ttZW51XTtcclxuICAgICAgcGF0Y2hlc1ttZW51XSA9IGNvbGxlY3Rpb24uZmlsdGVyKGUgPT4gZS5jYWxsZXIgIT09IGNhbGxlcik7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBQYXRjaGVyLnVucGF0Y2hBbGwoY2FsbGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBcmd1bWVudHMoY2FsbGVyOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgY2FsbGJhY2s6IEZuKSB7XHJcbiAgIGlmICghY2FsbGVyIHx8IHR5cGVvZiBjYWxsZXIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IGNhbGxlciBkb2VzIG5vdCBleGlzdCBvciBpcyBub3Qgb2YgdHlwZSBzdHJpbmcnKTtcclxuICAgfSBlbHNlIGlmICghbWVudSB8fCB0eXBlb2YgbWVudSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2Vjb25kIGFyZ3VtZW50IG1lbnUgZG9lcyBub3QgZXhpc3Qgb3IgaXMgbm90IG9mIHR5cGUgc3RyaW5nJyk7XHJcbiAgIH0gZWxzZSBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlyZCBhcmd1bWVudCBjYWxsYmFjayBkb2VzIG5vdCBleGlzdCBvciBpcyBub3Qgb2YgdHlwZSBmdW5jdGlvbicpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2godHlwZTogc3RyaW5nLCBjYWxsZXI6IHN0cmluZywgbWVudTogc3RyaW5nLCBjYWxsYmFjazogRm4pIHtcclxuICAgcGF0Y2hlc1ttZW51XSA/Pz0gW107XHJcbiAgIHBhdGNoZXNbbWVudV0ucHVzaCh7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGNhbGxlcixcclxuICAgICAgbWVudSxcclxuICAgICAgY2FsbGJhY2ssXHJcbiAgICAgIGFwcGxpZWQ6IGZhbHNlLFxyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudShwcm9wcywgcmVuZGVyKSB7XHJcbiAgIGxldCByZXMgPSByZW5kZXIocHJvcHMpO1xyXG5cclxuICAgdHJ5IHtcclxuICAgICAgLy8gRGV0ZWN0IG5vbi13cmFwcGVkIGNvbnRleHQgbWVudXNcclxuICAgICAgaWYgKHJlcy50eXBlLmRpc3BsYXlOYW1lPy5lbmRzV2l0aCgnQ29udGV4dE1lbnUnKSkge1xyXG4gICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IHJlcy50eXBlPy5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgY29uc3QgcGVuZGluZyA9IHBhdGNoZXNbZGlzcGxheU5hbWVdO1xyXG4gICAgICAgICBpZiAoIXBlbmRpbmc/Lmxlbmd0aCkgcmV0dXJuIHJlcztcclxuXHJcbiAgICAgICAgIGZvciAoY29uc3QgcGF0Y2ggb2YgcGVuZGluZykge1xyXG4gICAgICAgICAgICBQYXRjaGVyW3BhdGNoLnR5cGVdKHBhdGNoLmNhbGxlciwgcmVzLCAndHlwZScsIChfLCBhcmdzLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGNoLmNhbGxiYWNrLmFwcGx5KF8sIFtfLCBhcmdzLCByZXNdKTtcclxuICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBydW4gY29udGV4dCBtZW51IHBhdGNoIG9uICR7ZGlzcGxheU5hbWV9IG9mIGNhbGxlciAke3BhdGNoLmNhbGxlcn0uYCwgZSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBmb3JjZVJlbmRlcihyZXMudHlwZSkocmVzLnByb3BzKTtcclxuICAgICAgaWYgKCFwYXlsb2FkKSByZXR1cm4gcmVzO1xyXG5cclxuICAgICAgLy8gRGV0ZWN0IGNvbnRleHQgbWVudXMgb25seSB3cmFwcGVkIG9uY2VcclxuICAgICAgY29uc3QgbWVudSA9IHBheWxvYWQucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgIGlmIChtZW51LnR5cGU/LmRpc3BsYXlOYW1lPy5lbmRzV2l0aCgnQ29udGV4dE1lbnUnKSkge1xyXG4gICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IG1lbnUudHlwZT8uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSBwYXRjaGVzW2Rpc3BsYXlOYW1lXTtcclxuICAgICAgICAgaWYgKCFwZW5kaW5nPy5sZW5ndGgpIHJldHVybiByZXM7XHJcblxyXG4gICAgICAgICBmb3IgKGNvbnN0IHBhdGNoIG9mIHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgUGF0Y2hlcltwYXRjaC50eXBlXShwYXRjaC5jYWxsZXIsIG1lbnUsICd0eXBlJywgKF8sIGFyZ3MsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2guY2FsbGJhY2suYXBwbHkoXywgW18sIGFyZ3MsIHJlc10pO1xyXG4gICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHJ1biBjb250ZXh0IG1lbnUgcGF0Y2ggb24gJHtkaXNwbGF5TmFtZX0gb2YgY2FsbGVyICR7cGF0Y2guY2FsbGVyfS5gLCBlKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERldGVjdCBjb250ZXh0IG1lbnVzIHdyYXBwZWQgaW4gYW5hbHl0aWNzIGNvbnRleHRzXHJcbiAgICAgIGNvbnN0IGZvcmNlZCA9IGZvcmNlUmVuZGVyKG1lbnUudHlwZSkobWVudS5wcm9wcyk7XHJcbiAgICAgIGlmIChmb3JjZWQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0FuYWx5dGljc0NvbnRleHQnKSB7XHJcbiAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBmb3JjZWQucHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IHBheWxvYWQudHlwZT8uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSBwYXRjaGVzW2Rpc3BsYXlOYW1lXTtcclxuICAgICAgICAgaWYgKCFwZW5kaW5nPy5sZW5ndGgpIHJldHVybiByZXM7XHJcblxyXG4gICAgICAgICBmb3IgKGNvbnN0IHBhdGNoIG9mIHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgUGF0Y2hlcltwYXRjaC50eXBlXShwYXRjaC5jYWxsZXIsIHBheWxvYWQsICd0eXBlJywgKF8sIGFyZ3MsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2guY2FsbGJhY2suYXBwbHkoXywgW18sIGFyZ3MsIHJlc10pO1xyXG4gICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHJ1biBjb250ZXh0IG1lbnUgcGF0Y2ggb24gJHtkaXNwbGF5TmFtZX0gb2YgY2FsbGVyICR7cGF0Y2guY2FsbGVyfS5gLCBlKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgICAgIH1cclxuICAgfSBjYXRjaCB7IH1cclxuXHJcbiAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgIGNvbnN0IE9wZW5lciA9IFdlYnBhY2suZmluZEJ5UHJvcHMoJ29wZW5Db250ZXh0TWVudUxhenknKTtcclxuXHJcbiAgIFBhdGNoZXIuaW5zdGVhZCgndW5ib3VuZC1tZW51LXBhdGNoZXInLCBPcGVuZXIsICdvcGVuQ29udGV4dE1lbnVMYXp5JywgKHNlbGYsIGFyZ3MsIG9yaWcpID0+IHtcclxuICAgICAgaWYgKCFhcmdzWzFdLl9fdW5ib3VuZCkge1xyXG4gICAgICAgICBjb25zdCBvbGQgPSBhcmdzWzFdO1xyXG4gICAgICAgICBhcmdzWzFdID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gYXdhaXQgb2xkKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKHByb3BzKSA9PiBoYW5kbGVNZW51KHByb3BzLCByZW5kZXIpO1xyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgYXJnc1sxXS5fX3VuYm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gb3JpZy5jYWxsKHNlbGYsIC4uLmFyZ3MpO1xyXG4gICB9KTtcclxufVxyXG5cclxuLy8gT2ZmbG9hZCBwYXRjaCB0byBhbm90aGVyIHRocmVhZCBhcyBpdHMgbm90IGluc3RhbnRseSBuZWVkZWRcclxuc2V0SW1tZWRpYXRlKCgpID0+IFdlYnBhY2suZGF0YS5hdmFpbGFibGUudGhlbihpbml0aWFsaXplKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGluc3RlYWQsIGNyZWF0ZSwgYmVmb3JlLCBhZnRlciwgcGF0Y2hlcyB9OyJdLCJuYW1lcyI6WyJwYXRjaGVzIiwiYmVmb3JlIiwiYWZ0ZXIiLCJpbnN0ZWFkIiwiY3JlYXRlIiwidW5wYXRjaEFsbCIsIkxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsImNhbGxlciIsIm1lbnUiLCJjYWxsYmFjayIsInZhbGlkYXRlQXJndW1lbnRzIiwicHVzaCIsImNvbGxlY3Rpb24iLCJmaWx0ZXIiLCJlIiwiUGF0Y2hlciIsIlR5cGVFcnJvciIsInR5cGUiLCJhcHBsaWVkIiwiaW5pdGlhbGl6ZSIsIk9wZW5lciIsIldlYnBhY2siLCJmaW5kQnlQcm9wcyIsInNlbGYiLCJhcmdzIiwib3JpZyIsIl9fdW5ib3VuZCIsIm9sZCIsInJlbmRlciIsInByb3BzIiwiaGFuZGxlTWVudSIsInJlcyIsImRpc3BsYXlOYW1lIiwiZW5kc1dpdGgiLCJwZW5kaW5nIiwibGVuZ3RoIiwicGF0Y2giLCJfIiwiYXBwbHkiLCJlcnJvciIsInBheWxvYWQiLCJmb3JjZVJlbmRlciIsImNoaWxkcmVuIiwiZm9yY2VkIiwiY2FsbCIsInNldEltbWVkaWF0ZSIsImRhdGEiLCJhdmFpbGFibGUiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxnS0FPYUEsT0FBTyxLQUFQQSxDQUFPLENBRUpDLE1BQU0sS0FBTkEsQ0FBTSxDQUtOQyxLQUFLLEtBQUxBLENBQUssQ0FLTEMsT0FBTyxLQUFQQSxDQUFPLENBS1BDLE1BQU0sS0FBTkEsQ0FBTSxDQVNOQyxVQUFV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