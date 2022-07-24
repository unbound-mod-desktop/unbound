"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const a=require("../../common/utilities/index"),b=function(a){return a&&a.__esModule?a:{default:a}}(require("./structures/unbound")),c=require("../../client/modules/webpack/common");!function(){let d=new b.default;d.initialize();let e=document.querySelector("#splash");if(!e)return;let f=(0,a.getOwnerInstance)(e,()=>!0,!1);if(!f)return;let g=f.type,h=g.prototype.render;g.prototype.render=function(...a){let b=h.apply(this,a);return b.props.children.props.children[1].props.children.splice(1,0,c.React.createElement("span",{style:{marginTop:10}},"eternal was here")),b},f.stateNode.forceUpdate()}()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVsb2FkL3NwbGFzaC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0T3duZXJJbnN0YW5jZSB9IGZyb20gJ0B1dGlsaXRpZXMnO1xyXG5pbXBvcnQgVW5ib3VuZCBmcm9tICcuL3N0cnVjdHVyZXMvdW5ib3VuZCc7XHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSAnQHdlYnBhY2svY29tbW9uJztcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVuYm91bmQoKTtcclxuICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGxhc2gnKTtcclxuICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAvLyB3aW5kb3cucmVzaXplVG8oMTAwMCwgMTAwMCk7XHJcbiAgIGNvbnN0IHNwbGFzaCA9IGdldE93bmVySW5zdGFuY2UoZWxlbWVudCwgKCkgPT4gdHJ1ZSwgZmFsc2UpO1xyXG4gICBpZiAoIXNwbGFzaCkgcmV0dXJuO1xyXG5cclxuICAgY29uc3QgU3BsYXNoID0gc3BsYXNoLnR5cGU7XHJcblxyXG4gICBjb25zdCBvUmVuZGVyID0gU3BsYXNoLnByb3RvdHlwZS5yZW5kZXI7XHJcbiAgIFNwbGFzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgY29uc3QgcmVzID0gb1JlbmRlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgcmVzLnByb3BzLmNoaWxkcmVuLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuLnNwbGljZSgxLCAwLCA8c3BhblxyXG4gICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19XHJcbiAgICAgID5cclxuICAgICAgICAgZXRlcm5hbCB3YXMgaGVyZVxyXG4gICAgICA8L3NwYW4+KTtcclxuXHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgIH07XHJcblxyXG4gICBzcGxhc2guc3RhdGVOb2RlLmZvcmNlVXBkYXRlKCk7XHJcbn1cclxuXHJcbmluaXQoKTsiXSwibmFtZXMiOlsiaW5pdCIsImluc3RhbmNlIiwiVW5ib3VuZCIsImluaXRpYWxpemUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3BsYXNoIiwiZ2V0T3duZXJJbnN0YW5jZSIsIlNwbGFzaCIsInR5cGUiLCJvUmVuZGVyIiwicHJvdG90eXBlIiwicmVuZGVyIiwiYXJncyIsInJlcyIsImFwcGx5IiwicHJvcHMiLCJjaGlsZHJlbiIsInNwbGljZSIsInNwYW4iLCJzdHlsZSIsIm1hcmdpblRvcCIsInN0YXRlTm9kZSIsImZvcmNlVXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxvRkFBaUMsOEJBQVksOERBQ3pCLHNCQUFzQixhQUNwQixxQ0FBaUIsR0E4QnZDQSxBQTVCQSxVQUFnQixDQUNiLElBQU1DLENBQVEsQ0FBRyxJQUFJQyxDQUFPLFFBQUEsQUFBRSxBQUFDLEFBQy9CRCxDQUFBQSxDQUFRLENBQUNFLFVBQVUsRUFBRSxBQUVyQixLQUFNQyxDQUFPLENBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxBQUFDLEFBQ2xELElBQUksQ0FBQ0YsQ0FBTyxDQUFFLE1BQU8sQUFHckIsS0FBTUcsQ0FBTSxDQUFHQyxHQUFBQSxDQUFnQixpQkFBQSxFQUFDSixDQUFPLENBQUUsSUFBTSxDQUFBLENBQUksQ0FBRSxDQUFBLENBQUssQ0FBQyxBQUFDLEFBQzVELElBQUksQ0FBQ0csQ0FBTSxDQUFFLE1BQU8sQUFFcEIsS0FBTUUsQ0FBTSxDQUFHRixDQUFNLENBQUNHLElBQUksQ0FFcEJDLENBQU8sQ0FBR0YsQ0FBTSxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQUFGWixBQUczQkosQ0FBQUEsQ0FBTSxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBRyxTQUFVLEdBQUdDLENBQUksQ0FBRSxDQUMxQyxJQUFNQyxDQUFHLENBQUdKLENBQU8sQ0FBQ0ssS0FBSyxDQUFDLElBQUksQ0FBRUYsQ0FBSSxDQUFDLEFBQUMsQUFPdEMsUUFOQUMsQ0FBRyxDQUFDRSxLQUFLLENBQUNDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNELEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRSxzQkFBQ0MsTUFBSSxFQUNuRUMsS0FBSyxDQUFFLENBQUVDLFNBQVMsQ0FBRSxFQUFFLENBQUUsRUFDMUIsa0JBRUQsQ0FBTyxDQUFDLENBRURQLENBQUcsQUFBQyxDQUNiLENBRURSLENBQU0sQ0FBQ2dCLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFLENBQ2hDLEVBRUssQUFBQyJ9