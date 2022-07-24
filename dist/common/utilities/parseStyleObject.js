"use strict";module.exports=function(a,b=!1){if(!a||"object"!=typeof a&&!Array.isArray(a))throw TypeError("parseStyleObject's first argument must be of type object");return Object.entries(a).map(([a,b])=>`${a}: ${b};`).join(b?"\n":" ")}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL3BhcnNlU3R5bGVPYmplY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIHBhcnNlU3R5bGVPYmplY3RcclxuICogQGRlc2NyaXB0aW9uIFBhcnNlcyBSZWFjdC1saWtlIHN0eWxlIG9iamVjdHMgaW50byBhIENTUyBzdHJpbmdcclxuICogQHBhcmFtIHtvYmplY3R9IHN0eWxlIC0gVGhlIG9iamVjdCB0byB0dXJuIGludG8gYSBDU1MgcHJvcGVydHkgc3RyaW5nXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xpbmU9ZmFsc2VdIC0gTmV3bGluZSBlYWNoIHN0eWxlXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gUmV0dXJucyBDU1MgcHJvcGVydGllcyB0byBiZSBwdXQgaW5zaWRlIGEgc2VsZWN0b3JcclxuICovXHJcblxyXG5mdW5jdGlvbiBwYXJzZVN0eWxlT2JqZWN0KHN0eWxlOiBSZWNvcmQ8YW55LCBhbnk+LCBsaW5lOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICBpZiAoIXN0eWxlIHx8ICh0eXBlb2Ygc3R5bGUgIT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHN0eWxlKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VTdHlsZU9iamVjdFxcJ3MgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG9iamVjdCcpO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gT2JqZWN0LmVudHJpZXMoc3R5bGUpLm1hcCgoW2EsIGJdKSA9PiBgJHthfTogJHtifTtgKS5qb2luKGxpbmUgPyAnXFxuJyA6ICcgJyk7XHJcbn07XHJcblxyXG5leHBvcnQgPSBwYXJzZVN0eWxlT2JqZWN0OyJdLCJuYW1lcyI6WyJzdHlsZSIsImxpbmUiLCJBcnJheSIsImlzQXJyYXkiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiYSIsImIiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFRQSw0QkFBQSxTQUEwQkEsQ0FBdUIsQ0FBRUMsQ0FBYSxDQUFHLENBQUEsQ0FBSyxDQUFVLENBQy9FLEdBQUksQ0FBQ0QsQ0FBSyxFQUFLLEFBQWlCLFFBQVEsRUFBekIsT0FBT0EsQ0FBSyxFQUFpQixDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsQ0FBSyxDQUFDLEFBQUMsQ0FDL0QsTUFBTSxBQUFJSSxTQUFTLENBQUMsMERBQTJELENBQUMsQUFBQyxBQUNuRixBQUVELFFBQU9DLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixDQUFLLENBQUMsQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFFQyxDQUFDLENBQUMsR0FBSyxDQUFDLEVBQVhELENBQUMsQ0FBYyxFQUFFLEVBQWRDLENBQUMsQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVCxBQUxqQkEsQ0FBYSxDQUtXLElBQUksQ0FBRyxHQUFHLENBQUMsQUFBQyxDQUN0RixBQUV5QiJ9