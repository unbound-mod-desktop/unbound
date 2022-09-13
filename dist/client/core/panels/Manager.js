"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>l});const a=require("../../components/discord"),b=require("../components"),c=require("../../components/index"),d=require("../../../common/utilities/index"),e=require("../../../common/constants"),f=_interopRequireWildcard(require("../../api/settings")),g=require("../../modules/webpack/common"),h=_interopRequireWildcard(require("../../api/toasts")),i=require("electron"),j=_interopRequireDefault(require("react")),k=_interopRequireDefault(require("../../styles/panels/managers.css"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}var __decorate=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};k.default.append();class Manager extends j.default.PureComponent{constructor(a,b){super(a),this.type=b,this.state={search:"",breadcrumbs:[],settings:{entity:null,client:null}}}render(){let a=this.renderAddons();return this.state.settings?.entity?this.renderSettings():j.default.createElement(c.ErrorBoundary,null,this.renderTitle(a.count),this.renderHeader(),a.render)}renderHeader(){return j.default.createElement("div",{className:"unbound-manager-page-header"},j.default.createElement(a.SearchBar,{onQueryChange:a=>this.setState({search:a}),onClear:()=>this.setState({search:""}),placeholder:g.Locale.Messages[`UNBOUND_SEARCH_${this.type?.toUpperCase()}`],size:a.SearchBar.Sizes.MEDIUM,query:this.state.search,className:"unbound-manager-search-bar"}),j.default.createElement(a.RelativeTooltip,{text:g.Locale.Messages.UNBOUND_OPEN_FOLDER,hideOnClick:!1},a=>j.default.createElement(c.Icon,Object.assign({},a,{onClick:()=>{try{i.shell.openPath(e.Paths[this.type])}catch{h.open({title:"Failed to open folder",icon:"Close",color:"var(--info-danger-foreground)",content:`We have encountered an error trying to open the ${this.type} folder for you. Does the ${this.type} folder exist?`})}},name:"Folder",className:"unbound-manager-button",width:32,height:32}))),j.default.createElement(a.RelativeTooltip,{text:g.Locale.Messages.UNBOUND_RELOAD,hideOnClick:!1},a=>j.default.createElement(c.Icon,Object.assign({},a,{onClick:this.onReload,name:"Replay",className:"unbound-manager-button",width:32,height:32}))),j.default.createElement(a.RelativeTooltip,{text:g.Locale.Messages.UNBOUND_SEARCH_OPTIONS,hideOnClick:!1},b=>j.default.createElement(a.Popout,{position:a.Popout.Positions.TOP,animation:a.Popout.Animation.SCALE,align:a.Popout.Align.RIGHT,spacing:12,renderPopout:this.renderOverflowMenu},a=>j.default.createElement(c.Icon,Object.assign({},b,a,{name:"OverflowMenu",className:"unbound-manager-button",width:32,height:32})))))}renderTitle(b){let c=g.Locale.Messages[`UNBOUND_${this.type.toUpperCase()}`],e=!this.state.breadcrumbs.length&&b?` - ${b}`:"";return j.default.createElement("div",{className:"unbound-manager-title"},j.default.createElement(a.FormTitle,{tag:"h1",onClick:()=>this.setState({settings:null,breadcrumbs:[]}),className:(0,d.classnames)("unbound-manager-title-main",this.state.breadcrumbs.length&&"unbound-manager-title-unselected")},c,e,!!this.state.breadcrumbs.length&&j.default.createElement(a.Caret,{direction:a.Caret.Directions.RIGHT,className:"unbound-manager-title-caret"})),this.renderBreadcrumbs())}renderBreadcrumbs(){return this.state.breadcrumbs.map((b,c,d)=>{let e=c+1,f=e>=d.length;return j.default.createElement(a.FormTitle,{tag:"h1",className:!f&&"unbound-manager-title-unselected",onClick:()=>!f&&this.setState({breadcrumbs:d.slice(0,e)})},b,!f&&j.default.createElement(a.Caret,{direction:a.Caret.Directions.RIGHT,className:"unbound-manager-title-caret"}))})}renderAddon(a,c){return j.default.createElement(b.AddonCard,{type:this.type,resolve:this.resolve,client:a,entity:c,openSettings:()=>this.setState({settings:{entity:c,client:a}})})}renderAddons(){let{addons:b}=this.getAddons(),{settings:c}=this.props,{search:d}=this.state,e=c.get("filters",{name:!0,description:!0,author:!0,version:!0}),f=Object.entries(b).flatMap(([a,b])=>{let c=b.sort((b,c)=>{let d=this.resolve(b,a,"name").toUpperCase(),e=this.resolve(c,a,"name").toUpperCase();return d<e?-1:d>e?1:0}),f=[];for(let g of c){if(void 0!==d){let h=[];for(let i in e){if(!e[i])continue;let j=this.resolve(g,a,i)?.toLowerCase?.(),k=d.toLowerCase();j?.includes(k)&&h.push(i)}if(0===h.length)continue}f.push(this.renderAddon(a,g))}return f});return{count:f.length,render:f.length?f:j.default.createElement("div",{className:"unbound-manager-not-found"},j.default.createElement("div",{"data-has-search":Boolean(d.length),className:"unbound-manager-empty-state"}),!d.length&&j.default.createElement(a.Text,{color:a.Text.Colors.MUTED},g.Locale.Messages.GIFT_CONFIRMATION_HEADER_FAIL),j.default.createElement(a.Text,{style:{textAlign:"center"},color:a.Text.Colors.MUTED},d.length?g.Locale.Messages.SEARCH_NO_RESULTS:g.Locale.Messages.UNBOUND_NO_ADDONS.format({type:this.type})),!d.length&&j.default.createElement(a.Text,{style:{textAlign:"center"},color:a.Text.Colors.MUTED},g.Locale.Messages.UNBOUND_NO_ADDONS_SUBTEXT))}}renderOverflowMenu(){let{settings:b}=this.props,c=b.get("filters",{name:!0,description:!0,author:!0,version:!0});return j.default.createElement(a.Menu.default,null,j.default.createElement(a.Menu.MenuGroup,null,j.default.createElement(a.Menu.MenuControlItem,{id:"filters",control:()=>j.default.createElement("h5",{className:"unbound-manager-overflow-title"},g.Locale.Messages.UNBOUND_FILTERS)}),Object.keys(c).sort().map(d=>j.default.createElement(a.Menu.MenuCheckboxItem,{key:`filter-${d}`,id:`filter-${d}`,label:g.Locale.Messages[`UNBOUND_FILTER_${d.toUpperCase()}`],checked:c[d],action(){c[d]=!c[d],b.set("filters",c)}}))))}renderSettings(){let{client:a,entity:d}=this.state.settings,e=this.resolve(d,a,"settings");!this.state.breadcrumbs.length&&d&&this.setState({breadcrumbs:[this.resolve(d,a,"name")]});let g={breadcrumbs:this.state.breadcrumbs,push:(...a)=>this.setState({breadcrumbs:[...this.state.breadcrumbs,...a]}),back:a=>{this.state.breadcrumbs.length-(a||1)<=0&&this.setState({settings:null,breadcrumbs:[]}),this.setState({breadcrumbs:this.state.breadcrumbs.slice(0,-(a||1))})}};try{let h=this.resolve(d,a,"id");if("function"==typeof e){let i=e();if(i){let k="unbound"===a?f.connectComponent(i,h):i,l="function"==typeof k,m=k instanceof Element;return j.default.createElement(c.ErrorBoundary,null,this.renderTitle(),l?j.default.createElement(k,{router:g}):m?j.default.createElement(b.DOMWrapper,null,k):k)}}else if(e?.render){let n="unbound"===a?f.connectComponent(e.render,h):e.render;return j.default.createElement(c.ErrorBoundary,null,this.renderTitle(),j.default.createElement(n,{router:g}))}}catch(o){console.error(`Failed to open settings for ${this.resolve(d,a,"name")} (${a} addon)`,o)}}getAddons(){return{addons:{bd:[],powercord:[],unbound:[]},count:0}}onReload(){}resolve(a,b,c,d={}){switch(c){case"name":return this.resolveName(b,a);case"id":return this.resolveId(b,a);case"description":return this.resolveDescription(b,a);case"author":return this.resolveAuthors(b,a,d);case"version":return this.resolveVersion(b,a);case"color":return this.resolveColor(b,a);case"settings":let e=this.resolve(a,b,"id"),f=this.resolve(a,b,"name"),g=window.powercord?.api?.settings;if(a.instance?.getSettingsPanel)return a.instance.getSettingsPanel.bind(a.instance);if(a.getSettingsPanel)return a.getSettingsPanel.bind(a);if(!g?.settings)return null;if(g.settings.has(e))return g.settings.get(e);return g.settings[e]??[...g.settings.values()].find(a=>{let b=[a.label,a.category];if(b.includes(e)||b.includes(f))return!0});default:return"Not Found"}}resolveName(a,b){let c=g.Locale.Messages.UNBOUND_ADDON_MISSING_NAME;switch(a){case"bd":return b.name??c;case"unbound":return b.data.name??c;case"powercord":return b.displayName??c}return c}resolveId(a,b){switch(a){case"bd":return b.name;case"powercord":return b.entityID;case"unbound":return b.id}}resolveDescription(a,b){let c=g.Locale.Messages.UNBOUND_ADDON_MISSING_DESCRIPTION;switch(a){case"bd":return b.description??c;case"unbound":return b.data.description??c;case"powercord":return b.manifest.description??c}return c}resolveAuthors(a,b,{raw:c=!1}){let d=g.Locale.Messages.UNBOUND_ADDON_MISSING_AUTHOR;switch(a){case"bd":let e=b.instance?._config?.info?.authors;if(!c&&Array.isArray(e))return e.map(a=>a?.name?.toLowerCase()).filter(Boolean).join(", ");return(b.getAuthor?.()??b.author)??d;case"unbound":let f=b.data.authors;if(!c&&Array.isArray(f))return f.map(a=>(a?.name??a)?.toLowerCase()).filter(Boolean).join(", ");return b.data.authors??d;case"powercord":return b.manifest.author??d}return d}resolveVersion(a,b){let c=g.Locale.Messages.UNBOUND_ADDON_MISSING_VERSION;switch(a){case"bd":return(b.getVersion?.()??b.version)??c;case"powercord":return b.manifest.version??c;case"unbound":return b.data.version??c}return c}resolveColor(a,b){switch(a){case"bd":return e.Colors.BD;case"powercord":return(b.color??b.manifest.color)??e.Colors.BRAND;case"unbound":return b.data.color??e.Colors.BRAND}return e.Colors.BRAND}}__decorate([d.bind],Manager.prototype,"renderOverflowMenu",null),__decorate([d.bind],Manager.prototype,"onReload",null),__decorate([d.bind],Manager.prototype,"resolve",null);const l=Manager