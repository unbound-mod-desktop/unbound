"use strict";const a=function(a){return a&&a.__esModule?a:{default:a}}(require("./sleep"));async function b(b,c=0){let d={element:document.querySelector(b),cancelled:!1,timeout:null};for(c>0&&(d.timeout=setTimeout(()=>d.cancelled=!0,c));!d.element&&!(d.element=document.querySelector(b))&&(await (0,a.default)(1),!d.cancelled););return clearTimeout(d.timeout),d.element}module.exports=b
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL3dhaXRGb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsZWVwIGZyb20gJy4vc2xlZXAnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvcihzZWxlY3Rvcjogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAwKSB7XHJcbiAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxyXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlLFxyXG4gICAgICB0aW1lb3V0OiBudWxsXHJcbiAgIH07XHJcblxyXG4gICBpZiAodGltZW91dCA+IDApIHtcclxuICAgICAgZGF0YS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBkYXRhLmNhbmNlbGxlZCA9IHRydWUsIHRpbWVvdXQpO1xyXG4gICB9XHJcblxyXG4gICB3aGlsZSAoIWRhdGEuZWxlbWVudCAmJiAhKGRhdGEuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgxKTtcclxuICAgICAgaWYgKGRhdGEuY2FuY2VsbGVkKSBicmVhaztcclxuICAgfTtcclxuXHJcbiAgIGNsZWFyVGltZW91dChkYXRhLnRpbWVvdXQpO1xyXG5cclxuICAgcmV0dXJuIGRhdGEuZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCA9IHdhaXRGb3I7Il0sIm5hbWVzIjpbIndhaXRGb3IiLCJzZWxlY3RvciIsInRpbWVvdXQiLCJkYXRhIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhbmNlbGxlZCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQWtCLFNBQVMsRUFFM0IsZ0JBQWVBLENBQU8sQ0FBQ0MsQ0FBZ0IsQ0FBRUMsQ0FBZSxDQUFHLENBQUMsQ0FBRSxDQUMzRCxJQUFNQyxDQUFJLENBQUcsQ0FDVkMsT0FBTyxDQUFFQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0wsQ0FBUSxDQUFDLENBQ3pDTSxTQUFTLENBQUUsQ0FBQSxDQUFLLENBQ2hCTCxPQUFPLENBQUUsSUFBSSxDQUNmLEFBQUMsQUFNRixLQUpJQSxDQUFPLENBQUcsQ0FBQyxFQUNaQyxDQUFBQSxDQUFJLENBQUNELE9BQU8sQ0FBR00sVUFBVSxDQUFDLElBQU1MLENBQUksQ0FBQ0ksU0FBUyxDQUFHLENBQUEsQ0FBSSxDQUFFTCxDQUFPLENBQUMsQ0FBQSxDQUczRCxDQUFDQyxDQUFJLENBQUNDLE9BQU8sRUFBSSxDQUFFRCxDQUFBQSxDQUFJLENBQUNDLE9BQU8sQ0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUNMLENBQVEsQ0FBQyxDQUFBLEFBQUMsR0FDdkUsTUFBTVEsR0FBQUEsQ0FBSyxRQUFBLEVBQUMsQ0FBQyxDQUFDLEVBQ1ZOLENBQUksQ0FBQ0ksU0FBUyxJQUNwQixBQUlELE9BRkFHLFlBQVksQ0FBQ1AsQ0FBSSxDQUFDRCxPQUFPLENBQUMsQ0FFbkJDLENBQUksQ0FBQ0MsT0FBTyxBQUFDLENBQ3RCLGVBRVFKLENBQU8sQUFBQyJ9