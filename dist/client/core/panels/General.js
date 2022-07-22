"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>q});const a=require("../../components/index"),b=require("../../api/settings"),c=require("../../modules/webpack/common"),d=require("../../../common/utilities/index"),e=require("../../components/discord"),f=require("@webpack"),g=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=m(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(require("../../api/toasts")),h=l(require("react")),i=require("../../components/settings"),j=l(require("../../styles/panels/general.css")),k=require("../components/Icons");function l(a){return a&&a.__esModule?a:{default:a}}function m(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(m=function(a){return a?c:b})(a)}j.default.append();const n=(0,d.memoize)(()=>(0,f.findLazy)(f.filters.byDisplayName("NotificationSettings"))),o=a.AsyncComponent.from(n);class p extends h.default.Component{constructor(a){super(a),this.state={toasts:!1,developer:!1,bd:!1}}render(){return h.default.createElement(a.ErrorBoundary,null,h.default.createElement(e.FormTitle,{tag:"h1",className:"unbound-settings-title"},c.Locale.Messages.UNBOUND_GENERAL),this.renderToasts(),this.renderDeveloper(),this.renderBDSettings())}renderToasts(){let{settings:b}=this.props,e=(0,d.parseColor)("--background-tertiary");return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_DESCRIPTION,icon:"ChatBubble",className:"unbound-settings-toast-category",opened:this.state.toasts,onChange:()=>this.setState(a=>({...a,toasts:!a.toasts}))},h.default.createElement(o,{className:"unbound-settings-toast-position",position:this.parsePosition(b.get("toasts.position","bottom-right")),onChange:(a,c)=>{let d=this.parsePosition(c);b.set("toasts.position",d),this.onToastsChange(),"disabled"===d&&g.clear()}}),h.default.createElement(a.Divider,{style:{marginTop:10}}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_RESET_TIMEOUT_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_RESET_TIMEOUT_DESCRIPTION,checked:b.get("toasts.resetTimeoutOnHover",!1),onChange:()=>b.toggle("toasts.resetTimeoutOnHover",!1)}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_CUSTOM_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_CUSTOM_DESCRIPTION,checked:b.get("toasts.useCustomColours",!1),endDivider:b.get("toasts.useCustomColours",!1),onChange:()=>b.toggle("toasts.useCustomColours",!1),bottomMargin:b.get("toasts.useCustomColours",!1)?15:7.5}),b.get("toasts.useCustomColours",!1)&&h.default.createElement(h.default.Fragment,null,h.default.createElement(i.ColorPicker,{value:b.get("toasts.bgColor"),className:"unbound-settings-toast-color",onChange:a=>b.set("toasts.bgColor",a),default:c.Colors.rgb2int(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}),h.default.createElement(i.SliderInput,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_OPACITY_TITLE,minValue:1,maxValue:10,stickToMarkers:!0,markers:[1,2,3,4,5,6,7,8,9,10],defaultValue:10,initialValue:10*b.get("toasts.bgOpacity",.5),onValueChange:a=>b.set("toasts.bgOpacity",a/10),onMarkerRender:a=>`${a/10}`}),h.default.createElement(i.SliderInput,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_BLUR_TITLE,minValue:0,maxValue:15,stickToMarkers:!0,markers:[0,2.5,5,7.5,10,12.5,15],defaultValue:7.5,initialValue:b.get("toasts.blurAmount",7.5),onValueChange:a=>b.set("toasts.blurAmount",a),onMarkerRender:a=>`${a}px`,endDivider:!1,bottomMargin:7.5})))}renderDeveloper(){let{settings:b}=this.props;return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_DESCRIPTION,icon:"InlineCode",className:"unbound-settings-developer-category",opened:this.state.developer,onChange:()=>this.setState(a=>({...a,developer:!a.developer}))},h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_WARNING_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_WARNING_DESCRIPTION,checked:b.get("dev.devtoolsWarning",!1),onChange:()=>b.toggle("dev.devtoolsWarning",!1)}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_EXPERIMENTS_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_EXPERIMENTS_DESCRIPTION,checked:b.get("dev.experiments",!1),onChange:()=>b.toggle("dev.experiments",!1),bottomMargin:7.5,endDivider:!1}),h.default.createElement("div",{style:{marginBottom:2.5}}))}renderBDSettings(){if(!window.BdApi)return null;let b=window.BDInternal?.SettingsManager;return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_BD_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_BD_SETTINGS_DESCRIPTION,icon:()=>h.default.createElement(k.Bd,{className:"unbound-category-icon"}),opened:this.state.bd,onChange:()=>this.setState({bd:!this.state.bd})},Object.entries(b.defaultSettings).map(([a,{settings:b}])=>b.map(b=>this.renderBDSetting(a,b))))}renderBDSetting(b,c){let d=window.BDInternal?.SettingsManager;switch(c.type){case"switch":return c.requires&&c.requires.some(a=>!d.isEnabled(a))?null:h.default.createElement(i.Switch,{endDivider:!1,className:"unbound-bd-switch",title:c.name,checked:d.isEnabled(c.id)??c.value,onChange:a=>{d.setSetting(c.id,a),this.forceUpdate()}});case"category":return c.requires&&c.requires.some(a=>!d.isEnabled(a))?null:h.default.createElement(a.Category,{className:"unbound-bd-category",title:c.name,endDivider:!0,opened:this.state[`${b}-${c.name}`]?? !1,onChange:()=>this.setState({[`${b}-${c.name}`]:!this.state[`${b}-${c.name}`]})},c.items.map(a=>this.renderBDSetting(b,a)))}}componentWillUnmount(){if(this.toasts)for(let a of this.toasts)g.close(a)}onToastsChange(){for(let a of(this.toasts??=[],this.toasts))g.close(a,!0);this.toasts.push(g.open({title:c.Locale.Messages.UNBOUND_TOAST_EXAMPLE_TITLE,color:"var(--info-positive-foreground)",icon:"CheckmarkCircle",content:c.Locale.Messages.UNBOUND_TOAST_EXAMPLE_CONTENT}))}parsePosition(a){return a.includes("-")?a.split("-").map((a,b)=>0===b?a:`${a[0].toUpperCase()}${a.slice(1)}`).join(""):a.split(/(top|bottom)/).filter(Boolean).join("-").toLowerCase()}}const q=(0,b.connectComponent)(p,"unbound")
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYW5lbHMvR2VuZXJhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSwgQ2F0ZWdvcnksIEFzeW5jQ29tcG9uZW50LCBEaXZpZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdHlwZSBUb2FzdCBmcm9tICdAYXBpL3RvYXN0cy9jb21wb25lbnRzL1RvYXN0JztcclxuaW1wb3J0IHsgY29ubmVjdENvbXBvbmVudCB9IGZyb20gJ0BhcGkvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUsIENvbG9ycyB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IG1lbW9pemUsIHBhcnNlQ29sb3IgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgRm9ybVRpdGxlIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IGZpbHRlcnMsIGZpbmRMYXp5IH0gZnJvbSAnQHdlYnBhY2snO1xyXG5pbXBvcnQgKiBhcyBUb2FzdHMgZnJvbSAnQGFwaS90b2FzdHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQaWNrZXIsIFNsaWRlcklucHV0LCBTd2l0Y2ggfSBmcm9tICdAY29tcG9uZW50cy9zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgU3R5bGVzIGZyb20gJ0BzdHlsZXMvcGFuZWxzL2dlbmVyYWwuY3NzJztcclxuaW1wb3J0IHsgQmQgfSBmcm9tICdAY29yZS9jb21wb25lbnRzL0ljb25zJztcclxuU3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uU2V0dGluZ3MgPSBtZW1vaXplKCgpID0+IGZpbmRMYXp5KGZpbHRlcnMuYnlEaXNwbGF5TmFtZSgnTm90aWZpY2F0aW9uU2V0dGluZ3MnKSkpO1xyXG5jb25zdCBCb3VuZFNlbGVjdG9yID0gQXN5bmNDb21wb25lbnQuZnJvbShOb3RpZmljYXRpb25TZXR0aW5ncyk7XHJcblxyXG5pbnRlcmZhY2UgR2VuZXJhbFBhbmVsUHJvcHMge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2VuZXJhbFBhbmVsU3RhdGUge1xyXG4gIHRvYXN0czogYm9vbGVhbjtcclxuICBkZXZlbG9wZXI6IGJvb2xlYW47XHJcbiAgYmQ6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jbGFzcyBHZW5lcmFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEdlbmVyYWxQYW5lbFByb3BzLCBHZW5lcmFsUGFuZWxTdGF0ZT4ge1xyXG4gIHB1YmxpYyB0b2FzdHM6IFRvYXN0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9hc3RzOiBmYWxzZSxcclxuICAgICAgZGV2ZWxvcGVyOiBmYWxzZSxcclxuICAgICAgYmQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICA8Rm9ybVRpdGxlIHRhZz0naDEnIGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy10aXRsZSc+XHJcbiAgICAgICAge0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0dFTkVSQUx9XHJcbiAgICAgIDwvRm9ybVRpdGxlPlxyXG4gICAgICB7dGhpcy5yZW5kZXJUb2FzdHMoKX1cclxuICAgICAge3RoaXMucmVuZGVyRGV2ZWxvcGVyKCl9XHJcbiAgICAgIHt0aGlzLnJlbmRlckJEU2V0dGluZ3MoKX1cclxuICAgIDwvRXJyb3JCb3VuZGFyeT47XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb2FzdHMoKSB7XHJcbiAgICBjb25zdCB7IHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRCZyA9IHBhcnNlQ29sb3IoJy0tYmFja2dyb3VuZC10ZXJ0aWFyeScpO1xyXG5cclxuICAgIHJldHVybiA8Q2F0ZWdvcnlcclxuICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1RJVExFfVxyXG4gICAgICBkZXNjcmlwdGlvbj17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfREVTQ1JJUFRJT059XHJcbiAgICAgIGljb249J0NoYXRCdWJibGUnXHJcbiAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy10b2FzdC1jYXRlZ29yeSdcclxuICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLnRvYXN0c31cclxuICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuc2V0U3RhdGUocyA9PiAoeyAuLi5zLCB0b2FzdHM6ICFzLnRvYXN0cyB9KSl9XHJcbiAgICA+XHJcbiAgICAgIDxCb3VuZFNlbGVjdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLXNldHRpbmdzLXRvYXN0LXBvc2l0aW9uJ1xyXG4gICAgICAgIHBvc2l0aW9uPXt0aGlzLnBhcnNlUG9zaXRpb24oc2V0dGluZ3MuZ2V0KCd0b2FzdHMucG9zaXRpb24nLCAnYm90dG9tLXJpZ2h0JykpfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoXywgdikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBhcnNlUG9zaXRpb24odik7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zZXQoJ3RvYXN0cy5wb3NpdGlvbicsIHBvc2l0aW9uKTtcclxuICAgICAgICAgIHRoaXMub25Ub2FzdHNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICdkaXNhYmxlZCcpIHtcclxuICAgICAgICAgICAgVG9hc3RzLmNsZWFyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fSAvPlxyXG4gICAgICA8U3dpdGNoXHJcbiAgICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfVElUTEV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfREVTQ1JJUFRJT059XHJcbiAgICAgICAgY2hlY2tlZD17c2V0dGluZ3MuZ2V0KCd0b2FzdHMucmVzZXRUaW1lb3V0T25Ib3ZlcicsIGZhbHNlKX1cclxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0dGluZ3MudG9nZ2xlKCd0b2FzdHMucmVzZXRUaW1lb3V0T25Ib3ZlcicsIGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPFN3aXRjaFxyXG4gICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9UT0FTVF9TRVRUSU5HU19DVVNUT01fVElUTEV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0NVU1RPTV9ERVNDUklQVElPTn1cclxuICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpfVxyXG4gICAgICAgIGVuZERpdmlkZXI9e3NldHRpbmdzLmdldCgndG9hc3RzLnVzZUN1c3RvbUNvbG91cnMnLCBmYWxzZSl9XHJcbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldHRpbmdzLnRvZ2dsZSgndG9hc3RzLnVzZUN1c3RvbUNvbG91cnMnLCBmYWxzZSl9XHJcbiAgICAgICAgYm90dG9tTWFyZ2luPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpID8gMTUgOiA3LjV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpICYmIDw+XHJcbiAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KCd0b2FzdHMuYmdDb2xvcicpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLXNldHRpbmdzLXRvYXN0LWNvbG9yJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e3YgPT4gc2V0dGluZ3Muc2V0KCd0b2FzdHMuYmdDb2xvcicsIHYpfVxyXG4gICAgICAgICAgZGVmYXVsdD17Q29sb3JzLnJnYjJpbnQoYHJnYigke2RlZmF1bHRCZ1swXX0sICR7ZGVmYXVsdEJnWzFdfSwgJHtkZWZhdWx0QmdbMl19KWApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNsaWRlcklucHV0XHJcbiAgICAgICAgICB0aXRsZT17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfT1BBQ0lUWV9USVRMRX1cclxuICAgICAgICAgIG1pblZhbHVlPXsxfVxyXG4gICAgICAgICAgbWF4VmFsdWU9ezEwfVxyXG4gICAgICAgICAgc3RpY2tUb01hcmtlcnNcclxuICAgICAgICAgIG1hcmtlcnM9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezEwfVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlPXsoc2V0dGluZ3MuZ2V0KCd0b2FzdHMuYmdPcGFjaXR5JywgMC41KSAqIDEwKX1cclxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e3YgPT4gc2V0dGluZ3Muc2V0KCd0b2FzdHMuYmdPcGFjaXR5JywgdiAvIDEwKX1cclxuICAgICAgICAgIG9uTWFya2VyUmVuZGVyPXt2ID0+IGAke3YgLyAxMH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNsaWRlcklucHV0XHJcbiAgICAgICAgICB0aXRsZT17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfQkxVUl9USVRMRX1cclxuICAgICAgICAgIG1pblZhbHVlPXswfVxyXG4gICAgICAgICAgbWF4VmFsdWU9ezE1fVxyXG4gICAgICAgICAgc3RpY2tUb01hcmtlcnNcclxuICAgICAgICAgIG1hcmtlcnM9e1swLCAyLjUsIDUsIDcuNSwgMTAsIDEyLjUsIDE1XX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Ny41fVxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy5ibHVyQW1vdW50JywgNy41KX1cclxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e3YgPT4gc2V0dGluZ3Muc2V0KCd0b2FzdHMuYmx1ckFtb3VudCcsIHYpfVxyXG4gICAgICAgICAgb25NYXJrZXJSZW5kZXI9e3YgPT4gYCR7dn1weGB9XHJcbiAgICAgICAgICBlbmREaXZpZGVyPXtmYWxzZX1cclxuICAgICAgICAgIGJvdHRvbU1hcmdpbj17Ny41fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPn1cclxuICAgIDwvQ2F0ZWdvcnk+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGV2ZWxvcGVyKCkge1xyXG4gICAgY29uc3QgeyBzZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gPENhdGVnb3J5XHJcbiAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9ERVZfU0VUVElOR1NfVElUTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9ERVZfU0VUVElOR1NfREVTQ1JJUFRJT059XHJcbiAgICAgIGljb249J0lubGluZUNvZGUnXHJcbiAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy1kZXZlbG9wZXItY2F0ZWdvcnknXHJcbiAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5kZXZlbG9wZXJ9XHJcbiAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHMgPT4gKHsgLi4ucywgZGV2ZWxvcGVyOiAhcy5kZXZlbG9wZXIgfSkpfVxyXG4gICAgPlxyXG4gICAgICA8U3dpdGNoXHJcbiAgICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFVl9TRVRUSU5HU19XQVJOSU5HX1RJVExFfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9ERVZfU0VUVElOR1NfV0FSTklOR19ERVNDUklQVElPTn1cclxuICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ2Rldi5kZXZ0b29sc1dhcm5pbmcnLCBmYWxzZSl9XHJcbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldHRpbmdzLnRvZ2dsZSgnZGV2LmRldnRvb2xzV2FybmluZycsIGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPFN3aXRjaFxyXG4gICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9ERVZfU0VUVElOR1NfRVhQRVJJTUVOVFNfVElUTEV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFVl9TRVRUSU5HU19FWFBFUklNRU5UU19ERVNDUklQVElPTn1cclxuICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ2Rldi5leHBlcmltZW50cycsIGZhbHNlKX1cclxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0dGluZ3MudG9nZ2xlKCdkZXYuZXhwZXJpbWVudHMnLCBmYWxzZSl9XHJcbiAgICAgICAgYm90dG9tTWFyZ2luPXs3LjV9XHJcbiAgICAgICAgZW5kRGl2aWRlcj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyLjUgfX0gLz5cclxuICAgIDwvQ2F0ZWdvcnk+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQkRTZXR0aW5ncygpIHtcclxuICAgIGlmICghd2luZG93LkJkQXBpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHdpbmRvdy5CREludGVybmFsPy5TZXR0aW5nc01hbmFnZXI7XHJcblxyXG4gICAgcmV0dXJuIDxDYXRlZ29yeVxyXG4gICAgICB0aXRsZT17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQkRfU0VUVElOR1NfVElUTEV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9CRF9TRVRUSU5HU19ERVNDUklQVElPTn1cclxuICAgICAgaWNvbj17KCkgPT4gPEJkIGNsYXNzTmFtZT0ndW5ib3VuZC1jYXRlZ29yeS1pY29uJyAvPn1cclxuICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLmJkfVxyXG4gICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJkOiAhdGhpcy5zdGF0ZS5iZCB9KX1cclxuICAgID5cclxuICAgICAgeyhPYmplY3QuZW50cmllcyhzZXR0aW5ncy5kZWZhdWx0U2V0dGluZ3MpIGFzIGFueSkubWFwKChbY2F0ZWdvcnksIHsgc2V0dGluZ3MgfV0pID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3MubWFwKHMgPT4gdGhpcy5yZW5kZXJCRFNldHRpbmcoY2F0ZWdvcnksIHMpKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0NhdGVnb3J5PjtcclxuICB9XHJcblxyXG4gIHJlbmRlckJEU2V0dGluZyhjYXRlZ29yeSwgc2V0dGluZykge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB3aW5kb3cuQkRJbnRlcm5hbD8uU2V0dGluZ3NNYW5hZ2VyO1xyXG5cclxuICAgIHN3aXRjaCAoc2V0dGluZy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N3aXRjaCc6XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmcucmVxdWlyZXMgJiYgc2V0dGluZy5yZXF1aXJlcy5zb21lKHMgPT4gIXNldHRpbmdzLmlzRW5hYmxlZChzKSkgPyBudWxsIDogPFN3aXRjaFxyXG4gICAgICAgICAgZW5kRGl2aWRlcj17ZmFsc2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYmQtc3dpdGNoJ1xyXG4gICAgICAgICAgdGl0bGU9e3NldHRpbmcubmFtZX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3NldHRpbmdzLmlzRW5hYmxlZChzZXR0aW5nLmlkKSA/PyBzZXR0aW5nLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3YgPT4ge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5zZXRTZXR0aW5nKHNldHRpbmcuaWQsIHYpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+O1xyXG4gICAgICBjYXNlICdjYXRlZ29yeSc6XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmcucmVxdWlyZXMgJiYgc2V0dGluZy5yZXF1aXJlcy5zb21lKHMgPT4gIXNldHRpbmdzLmlzRW5hYmxlZChzKSkgPyBudWxsIDogPENhdGVnb3J5XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYmQtY2F0ZWdvcnknXHJcbiAgICAgICAgICB0aXRsZT17c2V0dGluZy5uYW1lfVxyXG4gICAgICAgICAgZW5kRGl2aWRlcj17dHJ1ZX1cclxuICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZVtgJHtjYXRlZ29yeX0tJHtzZXR0aW5nLm5hbWV9YF0gPz8gZmFsc2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtgJHtjYXRlZ29yeX0tJHtzZXR0aW5nLm5hbWV9YF06ICEodGhpcy5zdGF0ZVtgJHtjYXRlZ29yeX0tJHtzZXR0aW5nLm5hbWV9YF0gPz8gZmFsc2UpXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2V0dGluZy5pdGVtcy5tYXAoc2V0dGluZyA9PiB0aGlzLnJlbmRlckJEU2V0dGluZyhjYXRlZ29yeSwgc2V0dGluZykpfVxyXG4gICAgICAgIDwvQ2F0ZWdvcnk+O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMudG9hc3RzKSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xyXG4gICAgICBUb2FzdHMuY2xvc2UodG9hc3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2FzdHNDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnRvYXN0cyA/Pz0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xyXG4gICAgICBUb2FzdHMuY2xvc2UodG9hc3QsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9hc3RzLnB1c2goVG9hc3RzLm9wZW4oe1xyXG4gICAgICB0aXRsZTogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfRVhBTVBMRV9USVRMRSxcclxuICAgICAgY29sb3I6ICd2YXIoLS1pbmZvLXBvc2l0aXZlLWZvcmVncm91bmQpJyxcclxuICAgICAgaWNvbjogJ0NoZWNrbWFya0NpcmNsZScsXHJcbiAgICAgIGNvbnRlbnQ6IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX0VYQU1QTEVfQ09OVEVOVFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VQb3NpdGlvbihwb3NpdGlvbik6ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdkaXNhYmxlZCcge1xyXG4gICAgaWYgKHBvc2l0aW9uLmluY2x1ZGVzKCctJykpIHtcclxuICAgICAgcmV0dXJuIHBvc2l0aW9uLnNwbGl0KCctJykubWFwKChpdGVtLCBpZHgpID0+IGlkeCA9PT0gMCA/IGl0ZW0gOiBgJHtpdGVtWzBdLnRvVXBwZXJDYXNlKCl9JHtpdGVtLnNsaWNlKDEpfWApLmpvaW4oJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBvc2l0aW9uLnNwbGl0KC8odG9wfGJvdHRvbSkvKS5maWx0ZXIoQm9vbGVhbikuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0Q29tcG9uZW50KEdlbmVyYWwsICd1bmJvdW5kJyk7Il0sIm5hbWVzIjpbIlN0eWxlcyIsImFwcGVuZCIsIk5vdGlmaWNhdGlvblNldHRpbmdzIiwibWVtb2l6ZSIsImZpbmRMYXp5IiwiZmlsdGVycyIsImJ5RGlzcGxheU5hbWUiLCJCb3VuZFNlbGVjdG9yIiwiQXN5bmNDb21wb25lbnQiLCJmcm9tIiwiR2VuZXJhbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidG9hc3RzIiwiZGV2ZWxvcGVyIiwiYmQiLCJyZW5kZXIiLCJFcnJvckJvdW5kYXJ5IiwiRm9ybVRpdGxlIiwidGFnIiwiY2xhc3NOYW1lIiwiTG9jYWxlIiwiTWVzc2FnZXMiLCJVTkJPVU5EX0dFTkVSQUwiLCJyZW5kZXJUb2FzdHMiLCJyZW5kZXJEZXZlbG9wZXIiLCJyZW5kZXJCRFNldHRpbmdzIiwic2V0dGluZ3MiLCJkZWZhdWx0QmciLCJwYXJzZUNvbG9yIiwiQ2F0ZWdvcnkiLCJ0aXRsZSIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfVElUTEUiLCJkZXNjcmlwdGlvbiIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfREVTQ1JJUFRJT04iLCJpY29uIiwib3BlbmVkIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInMiLCJwb3NpdGlvbiIsInBhcnNlUG9zaXRpb24iLCJnZXQiLCJfIiwidiIsInNldCIsIm9uVG9hc3RzQ2hhbmdlIiwiVG9hc3RzIiwiY2xlYXIiLCJEaXZpZGVyIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJTd2l0Y2giLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfVElUTEUiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfREVTQ1JJUFRJT04iLCJjaGVja2VkIiwidG9nZ2xlIiwiVU5CT1VORF9UT0FTVF9TRVRUSU5HU19DVVNUT01fVElUTEUiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0NVU1RPTV9ERVNDUklQVElPTiIsImVuZERpdmlkZXIiLCJib3R0b21NYXJnaW4iLCJDb2xvclBpY2tlciIsInZhbHVlIiwiZGVmYXVsdCIsIkNvbG9ycyIsInJnYjJpbnQiLCJTbGlkZXJJbnB1dCIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfT1BBQ0lUWV9USVRMRSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJzdGlja1RvTWFya2VycyIsIm1hcmtlcnMiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwib25NYXJrZXJSZW5kZXIiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0JMVVJfVElUTEUiLCJVTkJPVU5EX0RFVl9TRVRUSU5HU19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX0RFU0NSSVBUSU9OIiwiVU5CT1VORF9ERVZfU0VUVElOR1NfV0FSTklOR19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX1dBUk5JTkdfREVTQ1JJUFRJT04iLCJVTkJPVU5EX0RFVl9TRVRUSU5HU19FWFBFUklNRU5UU19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX0VYUEVSSU1FTlRTX0RFU0NSSVBUSU9OIiwiZGl2IiwibWFyZ2luQm90dG9tIiwid2luZG93IiwiQmRBcGkiLCJCREludGVybmFsIiwiU2V0dGluZ3NNYW5hZ2VyIiwiVU5CT1VORF9CRF9TRVRUSU5HU19USVRMRSIsIlVOQk9VTkRfQkRfU0VUVElOR1NfREVTQ1JJUFRJT04iLCJCZCIsIk9iamVjdCIsImVudHJpZXMiLCJkZWZhdWx0U2V0dGluZ3MiLCJtYXAiLCJjYXRlZ29yeSIsInJlbmRlckJEU2V0dGluZyIsInNldHRpbmciLCJ0eXBlIiwicmVxdWlyZXMiLCJzb21lIiwiaXNFbmFibGVkIiwibmFtZSIsImlkIiwic2V0U2V0dGluZyIsImZvcmNlVXBkYXRlIiwiaXRlbXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInRvYXN0IiwiY2xvc2UiLCJwdXNoIiwib3BlbiIsIlVOQk9VTkRfVE9BU1RfRVhBTVBMRV9USVRMRSIsImNvbG9yIiwiY29udGVudCIsIlVOQk9VTkRfVE9BU1RfRVhBTVBMRV9DT05URU5UIiwiaW5jbHVkZXMiLCJzcGxpdCIsIml0ZW0iLCJpZHgiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImZpbHRlciIsIkJvb2xlYW4iLCJ0b0xvd2VyQ2FzZSIsImNvbm5lY3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLGtHQStPQSxTQUFvRCx3QkFBcEQsQ0FBb0QsbUJBL09hLHdCQUFhLFlBRTdDLG9CQUFlLFlBQ2pCLDhCQUFpQixZQUNaLGlDQUFZLFlBQ3RCLDBCQUFxQixZQUNiLFVBQVUseWNBQ3BCLGtCQUFhLGVBQ25CLE9BQU8sYUFFd0IsMkJBQXNCLGNBRXBELGlDQUE0QixhQUM1QixxQkFBd0Isb0xBQzNDQSxDQUFNLFFBQUEsQ0FBQ0MsTUFBTSxFQUFFLEFBRWYsT0FBTUMsQ0FBb0IsQ0FBR0MsR0FBQUEsQ0FBTyxRQUFBLEVBQUMsSUFBTUMsR0FBQUEsQ0FBUSxTQUFBLEVBQUNDLENBQU8sUUFBQSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQzdGQyxDQUFhLENBQUdDLENBQWMsZUFBQSxDQUFDQyxJQUFJLENBQUNQLENBQW9CLENBQUMsQUFEcUMsQUFjcEcsT0FBTVEsQ0FBTyxTQUFTQyxDQUFLLFFBQUEsQ0FBQ0MsU0FBUyxDQUduQ0MsWUFBWUMsQ0FBSyxDQUFFLENBQ2pCLEtBQUssQ0FBQ0EsQ0FBSyxDQUFDLENBRVosSUFBSSxDQUFDQyxLQUFLLENBQUcsQ0FDWEMsTUFBTSxDQUFFLENBQUEsQ0FBSyxDQUNiQyxTQUFTLENBQUUsQ0FBQSxDQUFLLENBQ2hCQyxFQUFFLENBQUUsQ0FBQSxDQUFLLENBQ1YsQ0FDRixBQUVEQyxNQUFNLEVBQUcsQ0FDUCxPQUFPLHdCQUFDQyxDQUFhLGNBQUEsTUFDbkIsd0JB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