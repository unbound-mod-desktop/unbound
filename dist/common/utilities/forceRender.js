"use strict";const a={useMemo:a=>a(),useState:a=>[a,()=>void 0],useReducer:a=>[a,()=>void 0],useEffect(){},useLayoutEffect(){},useRef:()=>({current:null}),useCallback:a=>a},b=Object.keys(a);module.exports=function(c){return(...d)=>{let e=require("react"),f=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current,g=b.map(a=>[a,f[a]]);Object.assign(f,a);let h={rendered:null,error:null};try{h.rendered=c(...d)}catch(i){h.error=i}if(Object.assign(f,Object.fromEntries(g)),h.error)throw h.error;return h.rendered}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2ZvcmNlUmVuZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG92ZXJyaWRlcyA9IHtcclxuICB1c2VNZW1vOiBmYWN0b3J5ID0+IGZhY3RvcnkoKSxcclxuICB1c2VTdGF0ZTogaW5pdGlhbFN0YXRlID0+IFtpbml0aWFsU3RhdGUsICgpID0+IHZvaWQgMF0sXHJcbiAgdXNlUmVkdWNlcjogaW5pdGlhbFZhbHVlID0+IFtpbml0aWFsVmFsdWUsICgpID0+IHZvaWQgMF0sXHJcbiAgdXNlRWZmZWN0OiAoKSA9PiB7IH0sXHJcbiAgdXNlTGF5b3V0RWZmZWN0OiAoKSA9PiB7IH0sXHJcbiAgdXNlUmVmOiAoKSA9PiAoeyBjdXJyZW50OiBudWxsIH0pLFxyXG4gIHVzZUNhbGxiYWNrOiBjYWxsYmFjayA9PiBjYWxsYmFja1xyXG59O1xyXG5cclxuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XHJcblxyXG4vKipcclxuICogQG5hbWUgZm9yY2VSZW5kZXJcclxuICogQGRlc2NyaXB0aW9uIEFsbG93cyB5b3UgdG8gZ3JhYiBhIGNvbXBvbmVudHMgcmV0dXJuIHZhbHVlIGJ5IGRpc2FibGluZyBpdHMgaG9va3Mgd2hlbiB5b3UgbmVlZCBpdCBvdXRzaWRlIG9mIGEgcmVuZGVyXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fEZ1bmN0aW9ufFJlYWN0Lm1lbW99IGNvbXBvbmVudCAtIFRoZSBjb21wb25lbnQgdG8gd3JhcFxyXG4gKiBAcmV0dXJuIHtSZWFjdC5Db21wb25lbnR9IFJldHVybnMgdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgcmVzdWx0XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZm9yY2VSZW5kZXIoY29tcG9uZW50OiBGbikge1xyXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG4gICAgY29uc3QgUmVhY3REaXNwYXRjaGVyID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQuUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xyXG4gICAgY29uc3Qgb3JpZ2luYWxzID0ga2V5cy5tYXAoZSA9PiBbZSwgUmVhY3REaXNwYXRjaGVyW2VdXSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihSZWFjdERpc3BhdGNoZXIsIG92ZXJyaWRlcyk7XHJcblxyXG4gICAgY29uc3QgcmVzID0ge1xyXG4gICAgICByZW5kZXJlZDogbnVsbCxcclxuICAgICAgZXJyb3I6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzLnJlbmRlcmVkID0gY29tcG9uZW50KC4uLmFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihSZWFjdERpc3BhdGNoZXIsIE9iamVjdC5mcm9tRW50cmllcyhvcmlnaW5hbHMpKTtcclxuXHJcbiAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgIHRocm93IHJlcy5lcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzLnJlbmRlcmVkO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgPSBmb3JjZVJlbmRlcjsiXSwibmFtZXMiOlsib3ZlcnJpZGVzIiwidXNlTWVtbyIsImZhY3RvcnkiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbml0aWFsVmFsdWUiLCJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlQ2FsbGJhY2siLCJjYWxsYmFjayIsImtleXMiLCJPYmplY3QiLCJjb21wb25lbnQiLCJhcmdzIiwiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3REaXNwYXRjaGVyIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyIiwib3JpZ2luYWxzIiwibWFwIiwiZSIsImFzc2lnbiIsInJlcyIsInJlbmRlcmVkIiwiZXJyb3IiLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQSxPQUFNQSxDQUFTLENBQUcsQ0FDaEJDLE9BQU8sQ0FBRUMsQ0FBTyxFQUFJQSxDQUFPLEVBQUUsQ0FDN0JDLFFBQVEsQ0FBRUMsQ0FBWSxFQUFJLENBQUNBLENBQVksQ0FBRSxJQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3REQyxVQUFVLENBQUVDLENBQVksRUFBSSxDQUFDQSxDQUFZLENBQUUsSUFBTSxLQUFLLENBQUMsQ0FBQyxDQUM3QyxBQUFYQyxTQUFTLEVBQVEsRUFBRyxDQUNILEFBQWpCQyxlQUFlLEVBQVEsRUFBRyxDQUMxQkMsTUFBTSxDQUFFLElBQU8sQ0FBQSxDQUFFQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUEsQUFBQyxDQUNqQ0MsV0FBVyxDQUFFQyxDQUFRLEVBQUlBLENBQVEsQ0FDbEMsQ0FFS0MsQ0FBSSxDQUFHQyxNQUFNLENBQUNELElBQUksQ0FBQ2IsQ0FBUyxDQUFDLEFBRmpDLGdCQVdGLFNBQXFCZSxDQUFhLENBQUUsQ0FDbEMsTUFBTyxDQUFJQyxHQUFBQSxDQUFJLEdBQUssQ0FDbEIsSUFBTUMsQ0FBSyxDQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ3hCQyxDQUFlLENBQUdGLENBQUssQ0FBQ0csa0RBQWtELENBQUNDLHNCQUFzQixDQUFDWCxPQUFPLENBQ3pHWSxDQUFTLENBQUdULENBQUksQ0FBQ1UsR0FBRyxDQUFDQyxDQUFDLEVBQUksQ0FBQ0EsQ0FBQyxDQUFFTCxDQUFlLENBQUNLLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFGekIsQUFJL0JWLENBQUFBLE1BQU0sQ0FBQ1csTUFBTSxDQUFDTixDQUFlLENBQUVuQixDQUFTLENBQUMsQUFFekMsS0FBTTBCLENBQUcsQ0FBRyxDQUNWQyxRQUFRLENBQUUsSUFBSSxDQUNkQyxLQUFLLENBQUUsSUFBSSxDQUNaLEFBQUMsQUFFRixJQUFJLENBQ0ZGLENBQUcsQ0FBQ0MsUUFBUSxDQUFHWixDQUFTLElBQUlDLENBQUksQ0FBQyxDQUNsQyxBQUFDLE1BQU9ZLENBQUssQ0FBRSxDQUNkRixDQUFHLENBQUNFLEtBQUssQ0FBR0EsQ0FBSyxDQUNsQixBQUlELEdBRkFkLE1BQU0sQ0FBQ1csTUFBTSxDQUFDTixDQUFlLENBQUVMLE1BQU0sQ0FBQ2UsV0FBVyxDQUFDUCxDQUFTLENBQUMsQ0FBQyxDQUV6REksQ0FBRyxDQUFDRSxLQUFLLENBQ1gsTUFBTUYsQ0FBRyxDQUFDRSxLQUFLLEFBQUMsQUFDakIsQUFFRCxRQUFPRixDQUFHLENBQUNDLFFBQVEsQUFBQyxDQUNyQixBQUFDLENBQ0gsQUFFb0IifQ==