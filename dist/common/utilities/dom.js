"use strict";function a(a,b){return new Promise((c,d)=>{let e=document.createElement("script");e.id=a,e.src=b,e.onerror=d,e.onload=()=>c({element:e,remove:()=>e.remove()}),document.head.appendChild(e)})}function b(a,b,c=!1){let d;return c?((d=document.createElement("link")).rel="stylesheet",d.href=b):((d=document.createElement("style")).id=a,d.textContent=b),document.head.appendChild(d),{element:d,remove:()=>d.remove()}}Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{appendScript:()=>a,appendStyle:()=>b})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2RvbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUmVzcG9uc2Uge1xyXG4gICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgYXBwZW5kU2NyaXB0XHJcbiAqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIGEgc2NyaXB0IHRvIHRoZSB1bmJvdW5kJ3MgaGVhZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHNjcmlwdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgb2YgdGhlIHNjcmlwdC5cclxuICogQHJldHVybiB7b2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZW1vdmFsIGZ1bmN0aW9uIGFuZCB0aGUgRE9NIGVsZW1lbnQuXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiB7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuaWQgPSBpZDtcclxuICAgICAgc2NyaXB0LnNyYyA9IHVybDtcclxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcclxuICAgICAgICAgZWxlbWVudDogc2NyaXB0LFxyXG4gICAgICAgICByZW1vdmU6ICgpID0+IHNjcmlwdC5yZW1vdmUoKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBhcHBlbmRTdHlsZVxyXG4gKiBAZGVzY3JpcHRpb24gQXBwZW5kcyBhIHN0eWxlIHRvIHRoZSBkb2N1bWVudCdzIGhlYWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBzdHlsZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGluc3RhbmNlIC0gVGhlIENTUy9VUkwgc3RyaW5nIHRvIGFwcGx5IHRvIHRoZSBET00uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VybD1mYWxzZV0gLSBXaGV0aGVyIHRvIHRyZWF0IHRoZSBjc3MgYXMgYSBVUkwgcmF0aGVyIHRoYW4gYSBzdHlsZXNoZWV0LlxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlbW92YWwgZnVuY3Rpb24gYW5kIHRoZSBET00gZWxlbWVudC5cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFN0eWxlKGlkOiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcsIHVybDogYm9vbGVhbiA9IGZhbHNlKTogUmVzcG9uc2Uge1xyXG4gICBsZXQgZWxlbWVudDtcclxuXHJcbiAgIGlmICh1cmwpIHtcclxuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgZWxlbWVudC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGVsZW1lbnQuaHJlZiA9IGluc3RhbmNlO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2U7XHJcbiAgIH1cclxuXHJcbiAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICByZW1vdmU6ICgpID0+IGVsZW1lbnQucmVtb3ZlKClcclxuICAgfTtcclxufSJdLCJuYW1lcyI6WyJhcHBlbmRTY3JpcHQiLCJpZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25lcnJvciIsIm9ubG9hZCIsImVsZW1lbnQiLCJyZW1vdmUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRTdHlsZSIsImluc3RhbmNlIiwicmVsIiwiaHJlZiIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQVlPLFVBQVNBLENBQVksQ0FBQ0MsQ0FBVSxDQUFFQyxDQUFXLENBQXFCLENBQ3RFLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLENBQU8sQ0FBRUMsQ0FBTSxHQUFLLENBQ3JDLElBQU1DLENBQU0sQ0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLEFBQUMsQUFDaERGLENBQUFBLENBQU0sQ0FBQ0wsRUFBRSxDQUFHQSxDQUFFLENBQ2RLLENBQU0sQ0FBQ0csR0FBRyxDQUFHUCxDQUFHLENBQ2hCSSxDQUFNLENBQUNJLE9BQU8sQ0FBR0wsQ0FBTSxDQUN2QkMsQ0FBTSxDQUFDSyxNQUFNLENBQUcsSUFBTVAsQ0FBTyxDQUFDLENBQzNCUSxPQUFPLENBQUVOLENBQU0sQ0FDZk8sTUFBTSxDQUFFLElBQU1QLENBQU0sQ0FBQ08sTUFBTSxFQUFFLENBQy9CLENBQUMsQ0FFRk4sUUFBUSxDQUFDTyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1QsQ0FBTSxDQUFDLENBQ25DLENBQUMsQUFBQyxDQUNMLEFBVU0sU0FBU1UsQ0FBVyxDQUFDZixDQUFVLENBQUVnQixDQUFnQixDQUFFZixDQUFZLENBQUcsQ0FBQSxDQUFLLENBQVksQ0FDdkYsSUFBSVUsQ0FBTyxBQUFDLEFBY1osUUFmdURWLENBQVksRUFLaEVVLEFBREFBLENBQUFBLENBQU8sQ0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FDaENVLEdBQUcsQ0FBRyxZQUFZLENBQzFCTixDQUFPLENBQUNPLElBQUksQ0FBR0YsQ0FBUSxHQUd2QkwsQUFEQUEsQ0FBQUEsQ0FBTyxDQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUNqQ1AsRUFBRSxDQUFHQSxDQUFFLENBQ2ZXLENBQU8sQ0FBQ1EsV0FBVyxDQUFHSCxDQUFRLEVBR2pDVixRQUFRLENBQUNPLElBQUksQ0FBQ0MsV0FBVyxDQUFDSCxDQUFPLENBQUMsQ0FFM0IsQ0FDSkEsT0FBTyxDQUFQQSxDQUFPLENBQ1BDLE1BQU0sQ0FBRSxJQUFNRCxDQUFPLENBQUNDLE1BQU0sRUFBRSxDQUNoQyxBQUFDLENBQ0osbUpBMUNlYixZQUFZLEtBQVpBLENBQVksQ0F1QlpnQixXQUFXLEtBQVhBLENBQVcsRUFtQjFCIn0=