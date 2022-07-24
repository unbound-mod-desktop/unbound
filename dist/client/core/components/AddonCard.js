"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>k});const a=require("../../components/discord"),b=require("../../modules/webpack/common"),c=require("../../../common/utilities/index"),d=require("../../../common/constants"),e=require("../../components/index"),f=require("../../modules/webpack/api"),g=j(require("react")),h=require("./Icons/index"),i=j(require("../../styles/panels/addoncard.css"));function j(a){return a&&a.__esModule?a:{default:a}}i.default.append();class k extends g.default.Component{componentWillMount(){let a=this.getGlobal(),b=this.getType(),c=window[a]?.[b]??window[a]?.managers?.[b];c?.on?.("toggle",this.onToggle)}componentWillUnmount(){let a=this.getGlobal(),b=this.getType(),c=window[a]?.[b]??window[a]?.managers?.[b];c?.off?.("toggle",this.onToggle)}render(){let{entity:f}=this.props,h=((((f.instance?._config?.info?.name??f.manifest?.name)??f.displayName)??f.data?.name)??f.name)??b.Locale.Messages.UNBOUND_ADDON_MISSING_NAME,i=(((f.instance?._config?.info?.description??f.manifest?.description)??f.data?.description)??f.description)??b.Locale.Messages.UNBOUND_ADDON_MISSING_DESCRIPTION,j=((((f.instance?._config?.info?.authors??f.manifest?.author)??f.data?.authors)??f.getAuthor?.())??f.author)??b.Locale.Messages.UNBOUND_ADDON_MISSING_AUTHOR,k="bd"===this.props.client?"#3E82E5":((f?.color??f?.data?.color)??f?.instance?.color)??d.Colors.BRAND,l=((((f.instance?._config?.info?.version??f.manifest?.version)??f.getVersion?.())??f.data?.version)??f.version)??b.Locale.Messages.UNBOUND_ADDON_MISSING_VERSION;return g.default.createElement(a.Tooltip,{position:"left",text:f.failed?b.Locale.Messages[`UNBOUND_ADDON_FAILED_${this.props.type.toUpperCase()}`]:null,hideOnClick:!1},g.default.createElement("div",{className:(0,c.classnames)("unbound-addon-card",f.failed&&"disabled"),style:{"--entity-color":k},onContextMenu:c=>b.ContextMenu.openContextMenu(c,()=>g.default.createElement(a.Menu.default,{onClose:b.ContextMenu.closeContextMenu},g.default.createElement(a.Menu.MenuItem,{id:"delete",color:"colorDanger",label:b.Locale.Messages.UNBOUND_DELETE,action:()=>this.delete()}),g.default.createElement(a.Menu.MenuItem,{id:"reload",label:b.Locale.Messages.UNBOUND_RELOAD,action:()=>this.reload()})))},g.default.createElement("div",{className:"unbound-addon-header"},g.default.createElement(a.Text,{className:"unbound-addon-name",size:a.Text.Sizes.SIZE_16},h),g.default.createElement(a.Text,{className:"unbound-addon-version",size:a.Text.Sizes.SIZE_16,color:a.Text.Colors.INTERACTIVE_NORMAL},l),g.default.createElement(a.Text,{className:"unbound-addon-authors",size:a.Text.Sizes.SIZE_16,color:a.Text.Colors.INTERACTIVE_NORMAL},"by ",this.renderAuthors(j)),g.default.createElement("div",{className:"unbound-addon-controls"},"unbound"!==this.props.client&&g.default.createElement(a.RelativeTooltip,{text:b.Locale.Messages[`UNBOUND_ADDON_MANAGER_${this.props.client.toUpperCase()}_TOOLTIP`]?.format({type:"Plugin"}),hideOnClick:!1},a=>this.renderType({...a})),this.hasSettings()&&g.default.createElement(a.RelativeTooltip,{text:b.Locale.Messages.UNBOUND_SETTINGS,hideOnClick:!1},a=>g.default.createElement(e.Icon,Object.assign({},a,{onClick:()=>this.props.openSettings(),name:"Gear",width:28,height:28,className:"unbound-addon-control-button"}))),g.default.createElement(a.Switch,{checked:this.isEnabled,onChange:()=>this.toggle(),className:"unbound-addon-switch"}))),g.default.createElement("div",{className:"unbound-addon-footer"},g.default.createElement(a.FormText,{className:"unbound-addon-description"},g.default.createElement(a.Markdown,null,i)))))}renderAuthors(c){let d=[],e=c=>{if("string"==typeof c)d.push(c);else if("object"==typeof c&&c.name){let e=typeof c.id||typeof c.discord_id,h=e&&["number","string"].includes(typeof e);d.push(h?g.default.createElement(a.Anchor,{className:"unbound-addon-author",onClick(){b.Layers?.popLayer?.(),f.DMs?.openPrivateChannel?.([c.id??c.discord_id])}},c.name):c.name)}};return Array.isArray(c)?c.map(e):"object"==typeof c&&c.name?e(c):"string"==typeof c&&d.push(c),d.map((a,b)=>{let c=b+1===d.length;return"string"==typeof a?c?a:`${a}, `:[a,c?"":", "]})}renderType(a){let{client:b}=this.props;switch(a.className??="unbound-addon-type-icon",a.width??=16,a.height??=16,b.toLowerCase()){case"bd":return g.default.createElement(h.Bd,Object.assign({},a));case"powercord":return g.default.createElement(h.Plug,Object.assign({},a));default:return null}}get isEnabled(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.isEnabled?.(a)}delete(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.delete?.(a)}toggle(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.toggle?.(a)}reload(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.reload?d.reload(a):d?.remount?d.remount(a):void 0}onToggle(a){let{entity:b}=this.props;[b.id,b.entityID,b.name].includes(a)&&this.forceUpdate()}getType(){let{type:a,client:b}=this.props;switch(b.toLowerCase()){case"powercord":return"plugins"===a?"pluginManager":"styleManager";case"bd":return"plugins"===a?"Plugins":"Themes";case"unbound":return"plugins"===a?"plugins":"themes"}}getGlobal(){let{client:a}=this.props;switch(a.toLowerCase()){case"powercord":return"powercord";case"bd":return"BdApi";case"unbound":return"unbound"}}hasSettings(){let a=this.getId(),b=this.getName();return this.isEnabled&&(((this.props.entity.instance?.getSettingsPanel??this.props.entity.getSettingsPanel)??[...window?.powercord?.api?.settings?.settings?.keys()??[]].includes(a))??[...window?.powercord?.api?.settings?.settings?.values()??[]].find?.(c=>{let d=[c.label,c.category];if(d.includes(a)||d.includes(b))return!0}))}getName(){return((this.props.entity.entityID??this.props.entity.id)??this.props.entity.manifest?.name)??this.props.entity.name}getId(){return(this.props.entity.id??this.props.entity.entityID)??this.props.entity.name}}!function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([c.bind],k.prototype,"onToggle",null)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9jb21wb25lbnRzL0FkZG9uQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgU3dpdGNoLCBBbmNob3IsIEZvcm1UZXh0LCBNYXJrZG93biwgUmVsYXRpdmVUb29sdGlwLCBNZW51LCBUb29sdGlwIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51LCBMYXllcnMsIExvY2FsZSB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IEF1dGhvciB9IGZyb20gJ0BjbGllbnQvbWFuYWdlcnMvYmFzZSc7XHJcbmltcG9ydCB7IGJpbmQsIGNsYXNzbmFtZXMgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnQGNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERNcyB9IGZyb20gJ0B3ZWJwYWNrL2FwaSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBQbHVnLCBCZCB9IGZyb20gJy4vSWNvbnMnO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tICdAc3R5bGVzL3BhbmVscy9hZGRvbmNhcmQuY3NzJztcclxuU3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuaW50ZXJmYWNlIEFkZG9uQ2FyZFByb3BzIHtcclxuICAgdHlwZTogc3RyaW5nO1xyXG4gICBvcGVuU2V0dGluZ3M6IEZuO1xyXG4gICBjbGllbnQ6IHN0cmluZztcclxuICAgZW50aXR5OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZG9uQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBZGRvbkNhcmRQcm9wcz4ge1xyXG4gICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGdsb2JhbCA9IHRoaXMuZ2V0R2xvYmFsKCk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSAod2luZG93W2dsb2JhbF0/Llt0eXBlXSA/PyB3aW5kb3dbZ2xvYmFsXT8ubWFuYWdlcnM/Llt0eXBlXSk7XHJcblxyXG4gICAgICBtYW5hZ2VyPy5vbj8uKCd0b2dnbGUnLCB0aGlzLm9uVG9nZ2xlKTtcclxuICAgfVxyXG5cclxuICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGdsb2JhbCA9IHRoaXMuZ2V0R2xvYmFsKCk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSAod2luZG93W2dsb2JhbF0/Llt0eXBlXSA/PyB3aW5kb3dbZ2xvYmFsXT8ubWFuYWdlcnM/Llt0eXBlXSk7XHJcbiAgICAgIG1hbmFnZXI/Lm9mZj8uKCd0b2dnbGUnLCB0aGlzLm9uVG9nZ2xlKTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IGVudGl0eSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IG5hbWUgPSAoXHJcbiAgICAgICAgIGVudGl0eS5pbnN0YW5jZT8uX2NvbmZpZz8uaW5mbz8ubmFtZSA/P1xyXG4gICAgICAgICBlbnRpdHkubWFuaWZlc3Q/Lm5hbWUgPz9cclxuICAgICAgICAgZW50aXR5LmRpc3BsYXlOYW1lID8/XHJcbiAgICAgICAgIGVudGl0eS5kYXRhPy5uYW1lID8/XHJcbiAgICAgICAgIGVudGl0eS5uYW1lID8/XHJcbiAgICAgICAgIExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX01JU1NJTkdfTkFNRVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAoXHJcbiAgICAgICAgIGVudGl0eS5pbnN0YW5jZT8uX2NvbmZpZz8uaW5mbz8uZGVzY3JpcHRpb24gPz9cclxuICAgICAgICAgZW50aXR5Lm1hbmlmZXN0Py5kZXNjcmlwdGlvbiA/P1xyXG4gICAgICAgICBlbnRpdHkuZGF0YT8uZGVzY3JpcHRpb24gPz9cclxuICAgICAgICAgZW50aXR5LmRlc2NyaXB0aW9uID8/XHJcbiAgICAgICAgIExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX01JU1NJTkdfREVTQ1JJUFRJT05cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGF1dGhvciA9IChcclxuICAgICAgICAgZW50aXR5Lmluc3RhbmNlPy5fY29uZmlnPy5pbmZvPy5hdXRob3JzID8/XHJcbiAgICAgICAgIGVudGl0eS5tYW5pZmVzdD8uYXV0aG9yID8/XHJcbiAgICAgICAgIGVudGl0eS5kYXRhPy5hdXRob3JzID8/XHJcbiAgICAgICAgIGVudGl0eS5nZXRBdXRob3I/LigpID8/XHJcbiAgICAgICAgIGVudGl0eS5hdXRob3IgPz9cclxuICAgICAgICAgTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQURET05fTUlTU0lOR19BVVRIT1JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5wcm9wcy5jbGllbnQgPT09ICdiZCcgPyAnIzNFODJFNScgOiAoXHJcbiAgICAgICAgIGVudGl0eT8uY29sb3IgPz9cclxuICAgICAgICAgZW50aXR5Py5kYXRhPy5jb2xvciA/P1xyXG4gICAgICAgICBlbnRpdHk/Lmluc3RhbmNlPy5jb2xvciA/P1xyXG4gICAgICAgICBDb2xvcnMuQlJBTkRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcnNpb24gPSAoXHJcbiAgICAgICAgIGVudGl0eS5pbnN0YW5jZT8uX2NvbmZpZz8uaW5mbz8udmVyc2lvbiA/P1xyXG4gICAgICAgICBlbnRpdHkubWFuaWZlc3Q/LnZlcnNpb24gPz9cclxuICAgICAgICAgZW50aXR5LmdldFZlcnNpb24/LigpID8/XHJcbiAgICAgICAgIGVudGl0eS5kYXRhPy52ZXJzaW9uID8/XHJcbiAgICAgICAgIGVudGl0eS52ZXJzaW9uID8/XHJcbiAgICAgICAgIExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX01JU1NJTkdfVkVSU0lPTlxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgcG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgIHRleHQ9e2VudGl0eS5mYWlsZWQgPyBMb2NhbGUuTWVzc2FnZXNbYFVOQk9VTkRfQURET05fRkFJTEVEXyR7dGhpcy5wcm9wcy50eXBlLnRvVXBwZXJDYXNlKCl9YF0gOiBudWxsfVxyXG4gICAgICAgICAgICBoaWRlT25DbGljaz17ZmFsc2V9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3VuYm91bmQtYWRkb24tY2FyZCcsIGVudGl0eS5mYWlsZWQgJiYgJ2Rpc2FibGVkJyl9XHJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7ICctLWVudGl0eS1jb2xvcic6IGNvbG9yIH19XHJcbiAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9eyhlKSA9PiBDb250ZXh0TWVudS5vcGVuQ29udGV4dE1lbnUoZSwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuZGVmYXVsdCBvbkNsb3NlPXtDb250ZXh0TWVudS5jbG9zZUNvbnRleHRNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgPE1lbnUuTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2RlbGV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2NvbG9yRGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfREVMRVRFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IHRoaXMuZGVsZXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxNZW51Lk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyZWxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9SRUxPQUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gdGhpcy5yZWxvYWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51LmRlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24taGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLW5hbWUnIHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi12ZXJzaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICBzaXplPXtUZXh0LlNpemVzLlNJWkVfMTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtUZXh0LkNvbG9ycy5JTlRFUkFDVElWRV9OT1JNQUx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWF1dGhvcnMnXHJcbiAgICAgICAgICAgICAgICAgICAgIHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNn1cclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1RleHQuQ29sb3JzLklOVEVSQUNUSVZFX05PUk1BTH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICBieSB7dGhpcy5yZW5kZXJBdXRob3JzKGF1dGhvcil9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tY29udHJvbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jbGllbnQgIT09ICd1bmJvdW5kJyAmJiA8UmVsYXRpdmVUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e0xvY2FsZS5NZXNzYWdlc1tgVU5CT1VORF9BRERPTl9NQU5BR0VSXyR7dGhpcy5wcm9wcy5jbGllbnQudG9VcHBlckNhc2UoKX1fVE9PTFRJUGBdPy5mb3JtYXQoeyB0eXBlOiAnUGx1Z2luJyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uQ2xpY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwID0+IHRoaXMucmVuZGVyVHlwZSh7IC4uLnAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvUmVsYXRpdmVUb29sdGlwPn1cclxuICAgICAgICAgICAgICAgICAgICAge3RoaXMuaGFzU2V0dGluZ3MoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWxhdGl2ZVRvb2x0aXAgdGV4dD17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfU0VUVElOR1N9IGhpZGVPbkNsaWNrPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwID0+IDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5TZXR0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdHZWFyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Mjh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1jb250cm9sLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVsYXRpdmVUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuaXNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLXN3aXRjaCdcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1mb290ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybVRleHQgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvTWFya2Rvd24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybVRleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9Ub29sdGlwPik7XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlckF1dGhvcnMoYXV0aG9yczogQXV0aG9yKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlQXV0aG9yID0gKGF1dGhvcikgPT4ge1xyXG4gICAgICAgICBpZiAodHlwZW9mIGF1dGhvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goYXV0aG9yKTtcclxuICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXV0aG9yID09PSAnb2JqZWN0JyAmJiBhdXRob3IubmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHR5cGVvZiBhdXRob3IuaWQgfHwgdHlwZW9mIGF1dGhvci5kaXNjb3JkX2lkO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNJZCA9IGlkICYmIChbJ251bWJlcicsICdzdHJpbmcnXS5pbmNsdWRlcyh0eXBlb2YgaWQpKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGhhc0lkID9cclxuICAgICAgICAgICAgICAgPEFuY2hvclxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tYXV0aG9yJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIExheWVycz8ucG9wTGF5ZXI/LigpO1xyXG4gICAgICAgICAgICAgICAgICAgICBETXM/Lm9wZW5Qcml2YXRlQ2hhbm5lbD8uKFthdXRob3IuaWQgPz8gYXV0aG9yLmRpc2NvcmRfaWRdKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgIDwvQW5jaG9yPiA6XHJcbiAgICAgICAgICAgICAgIGF1dGhvci5uYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGF1dGhvcnMpKSB7XHJcbiAgICAgICAgIGF1dGhvcnMubWFwKGhhbmRsZUF1dGhvcik7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGF1dGhvcnMgPT09ICdvYmplY3QnICYmIGF1dGhvcnMubmFtZSkge1xyXG4gICAgICAgICBoYW5kbGVBdXRob3IoYXV0aG9ycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGF1dGhvcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgIHJlcy5wdXNoKGF1dGhvcnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLm1hcCgoYXV0aG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICBjb25zdCBpc0xhc3QgPSBpbmRleCArIDEgPT09IHJlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICBpZiAodHlwZW9mIGF1dGhvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTGFzdCA/IGF1dGhvciA6IGAke2F1dGhvcn0sIGA7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbYXV0aG9yLCBpc0xhc3QgPyAnJyA6ICcsICddO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXJUeXBlKHByb3BzKSB7XHJcbiAgICAgIGNvbnN0IHsgY2xpZW50IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcHJvcHMuY2xhc3NOYW1lID8/PSAndW5ib3VuZC1hZGRvbi10eXBlLWljb24nO1xyXG4gICAgICBwcm9wcy53aWR0aCA/Pz0gMTY7XHJcbiAgICAgIHByb3BzLmhlaWdodCA/Pz0gMTY7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNsaWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgIGNhc2UgJ2JkJzpcclxuICAgICAgICAgICAgcmV0dXJuIDxCZCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgICAgICBjYXNlICdwb3dlcmNvcmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gPFBsdWcgey4uLnByb3BzfSAvPjtcclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0IGlzRW5hYmxlZCgpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG4gICAgICByZXR1cm4gbWFuYWdlcj8uaXNFbmFibGVkPy4obmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlbGV0ZSgpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG4gICAgICByZXR1cm4gbWFuYWdlcj8uZGVsZXRlPy4obmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHRvZ2dsZSgpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG5cclxuICAgICAgcmV0dXJuIG1hbmFnZXI/LnRvZ2dsZT8uKG5hbWUpO1xyXG4gICB9XHJcblxyXG4gICByZWxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcclxuICAgICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFuYWdlciA9ICh3aW5kb3dbZ2xvYmFsXT8uW3R5cGVdID8/IHdpbmRvd1tnbG9iYWxdPy5tYW5hZ2Vycz8uW3R5cGVdKTtcclxuXHJcbiAgICAgIGlmIChtYW5hZ2VyPy5yZWxvYWQpIHtcclxuICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVsb2FkKG5hbWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKG1hbmFnZXI/LnJlbW91bnQpIHtcclxuICAgICAgICAgcmV0dXJuIG1hbmFnZXIucmVtb3VudChuYW1lKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBAYmluZFxyXG4gICBvblRvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHsgZW50aXR5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgaWYgKCFbZW50aXR5LmlkLCBlbnRpdHkuZW50aXR5SUQsIGVudGl0eS5uYW1lXS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0VHlwZSgpIHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjbGllbnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNsaWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgIGNhc2UgJ3Bvd2VyY29yZCc6XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAncGx1Z2lucycgPyAncGx1Z2luTWFuYWdlcicgOiAnc3R5bGVNYW5hZ2VyJztcclxuICAgICAgICAgY2FzZSAnYmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3BsdWdpbnMnID8gJ1BsdWdpbnMnIDogJ1RoZW1lcyc7XHJcbiAgICAgICAgIGNhc2UgJ3VuYm91bmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3BsdWdpbnMnID8gJ3BsdWdpbnMnIDogJ3RoZW1lcyc7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0R2xvYmFsKCkge1xyXG4gICAgICBjb25zdCB7IGNsaWVudCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHN3aXRjaCAoY2xpZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgY2FzZSAncG93ZXJjb3JkJzpcclxuICAgICAgICAgICAgcmV0dXJuICdwb3dlcmNvcmQnO1xyXG4gICAgICAgICBjYXNlICdiZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnQmRBcGknO1xyXG4gICAgICAgICBjYXNlICd1bmJvdW5kJzpcclxuICAgICAgICAgICAgcmV0dXJuICd1bmJvdW5kJztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBoYXNTZXR0aW5ncygpIHtcclxuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKCk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmlzRW5hYmxlZCAmJiAoXHJcbiAgICAgICAgIHRoaXMucHJvcHMuZW50aXR5Lmluc3RhbmNlPy5nZXRTZXR0aW5nc1BhbmVsID8/XHJcbiAgICAgICAgIHRoaXMucHJvcHMuZW50aXR5LmdldFNldHRpbmdzUGFuZWwgPz9cclxuICAgICAgICAgWy4uLndpbmRvdz8ucG93ZXJjb3JkPy5hcGk/LnNldHRpbmdzPy5zZXR0aW5ncz8ua2V5cygpID8/IFtdXS5pbmNsdWRlcyhpZCkgPz9cclxuICAgICAgICAgWy4uLndpbmRvdz8ucG93ZXJjb3JkPy5hcGk/LnNldHRpbmdzPy5zZXR0aW5ncz8udmFsdWVzKCkgPz8gW11dLmZpbmQ/LihlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoYWJsZSA9IFtlLmxhYmVsLCBlLmNhdGVnb3J5XTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaGFibGUuaW5jbHVkZXMoaWQpIHx8IHNlYXJjaGFibGUuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgZ2V0TmFtZSgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkuZW50aXR5SUQgPz9cclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkuaWQgPz9cclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkubWFuaWZlc3Q/Lm5hbWUgPz9cclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkubmFtZVxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBnZXRJZCgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkuaWQgPz9cclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkuZW50aXR5SUQgPz9cclxuICAgICAgICAgdGhpcy5wcm9wcy5lbnRpdHkubmFtZVxyXG4gICAgICApO1xyXG4gICB9XHJcbn07Il0sIm5hbWVzIjpbIkFkZG9uQ2FyZCIsIlN0eWxlcyIsImFwcGVuZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiZ2xvYmFsIiwiZ2V0R2xvYmFsIiwidHlwZSIsImdldFR5cGUiLCJtYW5hZ2VyIiwid2luZG93IiwibWFuYWdlcnMiLCJvbiIsIm9uVG9nZ2xlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJvZmYiLCJyZW5kZXIiLCJlbnRpdHkiLCJwcm9wcyIsIm5hbWUiLCJpbnN0YW5jZSIsIl9jb25maWciLCJpbmZvIiwibWFuaWZlc3QiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJMb2NhbGUiLCJNZXNzYWdlcyIsIlVOQk9VTkRfQURET05fTUlTU0lOR19OQU1FIiwiZGVzY3JpcHRpb24iLCJVTkJPVU5EX0FERE9OX01JU1NJTkdfREVTQ1JJUFRJT04iLCJhdXRob3IiLCJhdXRob3JzIiwiZ2V0QXV0aG9yIiwiVU5CT1VORF9BRERPTl9NSVNTSU5HX0FVVEhPUiIsImNvbG9yIiwiY2xpZW50IiwiQ29sb3JzIiwiQlJBTkQiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsIlVOQk9VTkRfQURET05fTUlTU0lOR19WRVJTSU9OIiwiVG9vbHRpcCIsInBvc2l0aW9uIiwidGV4dCIsImZhaWxlZCIsInRvVXBwZXJDYXNlIiwiaGlkZU9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwic3R5bGUiLCJvbkNvbnRleHRNZW51IiwiZSIsIkNvbnRleHRNZW51Iiwib3BlbkNvbnRleHRNZW51IiwiTWVudSIsImRlZmF1bHQiLCJvbkNsb3NlIiwiY2xvc2VDb250ZXh0TWVudSIsIk1lbnVJdGVtIiwiaWQiLCJsYWJlbCIsIlVOQk9VTkRfREVMRVRFIiwiYWN0aW9uIiwiZGVsZXRlIiwiVU5CT1VORF9SRUxPQUQiLCJyZWxvYWQiLCJUZXh0Iiwic2l6ZSIsIlNpemVzIiwiU0laRV8xNiIsIklOVEVSQUNUSVZFX05PUk1BTCIsInJlbmRlckF1dGhvcnMiLCJSZWxhdGl2ZVRvb2x0aXAiLCJmb3JtYXQiLCJwIiwicmVuZGVyVHlwZSIsImhhc1NldHRpbmdzIiwiVU5CT1VORF9TRVRUSU5HUyIsIkljb24iLCJvbkNsaWNrIiwib3BlblNldHRpbmdzIiwid2lkdGgiLCJoZWlnaHQiLCJTd2l0Y2giLCJjaGVja2VkIiwiaXNFbmFibGVkIiwib25DaGFuZ2UiLCJ0b2dnbGUiLCJGb3JtVGV4dCIsIk1hcmtkb3duIiwicmVzIiwiaGFuZGxlQXV0aG9yIiwicHVzaCIsImRpc2NvcmRfaWQiLCJoYXNJZCIsImluY2x1ZGVzIiwiQW5jaG9yIiwiTGF5ZXJzIiwicG9wTGF5ZXIiLCJETXMiLCJvcGVuUHJpdmF0ZUNoYW5uZWwiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpbmRleCIsImlzTGFzdCIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiQmQiLCJQbHVnIiwiZ2V0TmFtZSIsInJlbW91bnQiLCJlbnRpdHlJRCIsImZvcmNlVXBkYXRlIiwiZ2V0SWQiLCJnZXRTZXR0aW5nc1BhbmVsIiwicG93ZXJjb3JkIiwiYXBpIiwic2V0dGluZ3MiLCJrZXlzIiwidmFsdWVzIiwiZmluZCIsInNlYXJjaGFibGUiLCJjYXRlZ29yeSIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLGtHQXFCQSxTQTRUQyx3QkE1VG9CQSxDQUFTLG1CQXJCMkQsMEJBQXFCLFlBQ2xFLDhCQUFpQixZQUU1QixpQ0FBWSxZQUN0QiwyQkFBWSxZQUNkLHdCQUFhLFlBQ2QsMkJBQWMsY0FDaEIsT0FBTyxhQUVBLGVBQVMsY0FFZixtQ0FBOEIsc0RBQ2pEQyxDQUFNLFFBQUEsQ0FBQ0MsTUFBTSxFQUFFLEFBU0EsT0FBTUYsQ0FBUyxTQUFTRyxDQUFLLFFBQUEsQ0FBQ0MsU0FBUyxDQUNuREMsa0JBQWtCLEVBQUcsQ0FDbEIsSUFBTUMsQ0FBTSxDQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFLENBQ3pCQyxDQUFJLENBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FFckJDLENBQU8sQ0FBSUMsTUFBTSxDQUFDTCxDQUFNLENBQUMsRUFBRSxDQUFDRSxDQUFJLENBQUMsRUFBSUcsTUFBTSxDQUFDTCxDQUFNLENBQUMsRUFBRU0sUUFBUSxFQUFFLENBQUNK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