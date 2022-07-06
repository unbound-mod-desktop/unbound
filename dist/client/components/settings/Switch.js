"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>f});const a=require("../discord"),b=e(require("react")),c=e(require("./SettingsItem")),d=e(require("../../styles/components/switch.css"));function e(a){return a&&a.__esModule?a:{default:a}}d.default.append();class f extends b.default.PureComponent{render(){let{title:d,description:e,required:f,...g}=this.props;return delete this.props.children,b.default.createElement(c.default,Object.assign({description:e,required:f},g),b.default.createElement("div",{className:"unbound-settings-switch-container"},b.default.createElement("div",{className:"unbound-settings-switch-title"},d),b.default.createElement(a.Switch,Object.assign({},this.props))))}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9zZXR0aW5ncy9Td2l0Y2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaCBhcyBTd2l0Y2hJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2V0dGluZ3NJdGVtLCB7IFNldHRpbmdzSXRlbVByb3BzIH0gZnJvbSAnLi9TZXR0aW5nc0l0ZW0nO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tICdAc3R5bGVzL2NvbXBvbmVudHMvc3dpdGNoLmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmludGVyZmFjZSBTd2l0Y2hQcm9wcyBleHRlbmRzIFNldHRpbmdzSXRlbVByb3BzIHtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBvbkNoYW5nZT86IEZuO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTd2l0Y2hQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCByZXF1aXJlZCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBkZWxldGUgdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2V0dGluZ3NJdGVtXHJcbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1bmJvdW5kLXNldHRpbmdzLXN3aXRjaC1jb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtc2V0dGluZ3Mtc3dpdGNoLXRpdGxlJz5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U3dpdGNoSXRlbSB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZXR0aW5nc0l0ZW0+XHJcbiAgICApO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiU3dpdGNoIiwiU3R5bGVzIiwiYXBwZW5kIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlcXVpcmVkIiwicmVzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJTZXR0aW5nc0l0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJTd2l0Y2hJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQSxtSUFjcUJBLENBQU0sbUJBZFUsWUFBcUIsY0FDeEMsT0FBTyxlQUV1QixnQkFBZ0IsZUFFN0Msb0NBQStCLHNEQUNsREMsQ0FBTSxRQUFBLENBQUNDLE1BQU0sRUFBRSxBQVFBLE9BQU1GLENBQU0sU0FBU0csQ0FBSyxRQUFBLENBQUNDLGFBQWEsQ0FDckRDLE1BQU0sRUFBRyxDQUNQLEdBQU0sQ0FBRUMsS0FBSyxDQUFMQSxDQUFLLENBQUVDLFdBQVcsQ0FBWEEsQ0FBVyxDQUFFQyxRQUFRLENBQVJBLENBQVEsQ0FBRSxHQUFHQyxDQUFJLENBQUUsQ0FBRyxJQUFJLENBQUNDLEtBQUssQUFBQyxBQUs3RCxRQUZBLE9BQU8sSUFBSSxDQUFDQSxLQUFLLENBQUNDLFFBQVEsQ0FHeEIsd0JBQUNDLENBQVksUUFBQSxnQkFDWEwsV0FBVyxDQUFFQSxDQUFXLENBQ3hCQyxRQUFRLENBQUVBLENBQVEsRUFDZEMsQ0FBSSxFQUVSLHdCQUFDSSxLQUFHLEVBQUNDLFNBQVMsQ0FBQyxtQ0FBbUMsRUFDaEQsd0JBQUNELEtBQUcsRUFBQ0MsU0FBUyxDQUFDLCtCQUErQixFQUMzQ1IsQ0FBSyxDQUNGLENBQ04sd0JBQUNTLENBQVUsT0FBQSxrQkFBSyxJQUFJLENBQUNMLEtBQUssRUFBSSxDQUMxQixDQUNPLEFBQ2YsQ0FDSCxDQUNGLEFBQUMifQ==