(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[25],{134:function(e,n,t){"use strict";t(82),t(113),t(135)},135:function(e,n,t){},136:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=f(t(77)),i=f(t(85)),a=f(t(73)),r=f(t(76)),l=f(t(74)),s=f(t(75)),c=f(t(78)),u=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(0)),d=f(t(86)),p=f(t(114));function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&(t[o[i]]=e[o[i]])}return t},v=/^[\u4e00-\u9fa5]{2}$/,m=v.test.bind(v);function y(e){return"string"===typeof e}function g(e){return y(e.type)&&m(e.props.children)?u.cloneElement(e,{},e.props.children.split("").join(" ")):y(e)?(m(e)&&(e=e.split("").join(" ")),u.createElement("span",null,e)):e}var b=function(e){function n(){return(0,a.default)(this,n),(0,l.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,s.default)(n,e),(0,r.default)(n,[{key:"render",value:function(){var e,n=this.props,t=n.children,a=n.className,r=n.prefixCls,l=n.type,s=n.size,f=n.inline,v=n.disabled,m=n.icon,y=n.loading,b=n.activeStyle,x=n.activeClassName,O=n.onClick,j=h(n,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),w=y?"loading":m,C=(0,c.default)(r,a,(e={},(0,i.default)(e,r+"-primary","primary"===l),(0,i.default)(e,r+"-ghost","ghost"===l),(0,i.default)(e,r+"-warning","warning"===l),(0,i.default)(e,r+"-small","small"===s),(0,i.default)(e,r+"-inline",f),(0,i.default)(e,r+"-disabled",v),(0,i.default)(e,r+"-loading",y),(0,i.default)(e,r+"-icon",!!w),e)),E=u.Children.map(t,g),M=void 0;if("string"===typeof w)M=u.createElement(p.default,{"aria-hidden":"true",type:w,size:"small"===s?"xxs":"md",className:r+"-icon"});else if(w){var k=w.props&&w.props.className,T=(0,c.default)("am-icon",r+"-icon","small"===s?"am-icon-xxs":"am-icon-md");M=u.cloneElement(w,{className:k?k+" "+T:T})}return u.createElement(d.default,{activeClassName:x||(b?r+"-active":void 0),disabled:v,activeStyle:b},u.createElement("a",(0,o.default)({role:"button",className:C},j,{onClick:v?void 0:O,"aria-disabled":v}),M,E))}}]),n}(u.Component);b.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},n.default=b,e.exports=n.default},332:function(e,n,t){"use strict";t.r(n);t(134);var o=t(136),i=t.n(o),a=t(11),r=t(12),l=t(14),s=t(13),c=t(2),u=t(0),d=t.n(u),p=t(37),f=t(23),h=t(79);function v(){var e=Object(f.a)(["\n     flex:  0 0 108px;\n     padding: 0 36px 108px 36px;\n     .am-button {\n        height: 100%;\n        background: linear-gradient(310deg, #00B1B3 0%, #00EE62 100%);\n        box-shadow: 0px 2px 22px 0px #6DD6B8;\n        color: #FFFFFF;\n        font-size: 34px;\n        border-radius: 26px;\n     }\n"]);return v=function(){return e},e}function m(){var e=Object(f.a)(["\n     padding: 86px 0 62px 36px;\n     font-size: 48px;\n     text-align: left;\n"]);return m=function(){return e},e}function y(){var e=Object(f.a)(["\n    display: inline-block;\n   line-height: 48px;\n   height: 48px;\n   color:#000000a6;\n   font-size: 28px;\n"]);return y=function(){return e},e}function g(){var e=Object(f.a)(["\n   position: fixed;\n   left: 0;\n   top: 0;\n   bottom: 0;\n   width: 100%;\n   background: #FFFFFF;\n   display: flex;\n   flex-direction: column;\n   .main{\n     flex: 1;\n     overflow-y: scroll;\n     -webkit-overflow-scrolling: touch;\n     padding:0 36px;\n   }\n "]);return g=function(){return e},e}var b=h.a.div(g()),x=h.a.p(y()),O=h.a.div(m()),j=h.a.div(v()),w=t(26),C=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),n.call(this,e)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(w.c)()&&this.props.history.push("/browMoeny")}},{key:"render",value:function(){return Object(c.jsxs)(b,{children:[Object(c.jsx)(O,{className:"header",children:"Permission"}),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(x,{children:"To assess your eligibility and facilitate fast disbursement of your loan application, we need permissions to access your Phone, Photo and the Others. Others Allow camera to capture images of documents and pictures of yourself for loan application. Allow storage to upload documents and pictures for loan application.Allow the application to collect a list of installed apps in your device for credit profile enrichment. Device Collect and monitor specific information about your device including your hardware model, operating system and version, unique device identifier, wi-fi information,mobil e network information to uniquely identify the devices and ensure that unauthorised devices are not able to act on your behalf help ing us to prevent frauds. Photo Collect images information to detect references and to auto fill data during loan application process."})}),Object(c.jsx)(j,{children:Object(c.jsx)(i.a,{type:"default",className:"btn",onClick:this.props.goHomePage,children:"Apply"})})]})}}]),t}(d.a.Component);n.default=Object(p.b)((function(e){return{}}),(function(e,n){return{goHomePage:function(){n.history.push("/home")}}}))(C)},86:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var o=t(77),i=t.n(o),a=t(73),r=t.n(a),l=t(76),s=t.n(l),c=t(74),u=t.n(c),d=t(75),p=t.n(d),f=t(0),h=t.n(f),v=t(78),m=t.n(v),y=function(e){function n(){r()(this,n);var e=u()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(n){e.triggerEvent("TouchStart",!0,n)},e.onTouchMove=function(n){e.triggerEvent("TouchMove",!1,n)},e.onTouchEnd=function(n){e.triggerEvent("TouchEnd",!1,n)},e.onTouchCancel=function(n){e.triggerEvent("TouchCancel",!1,n)},e.onMouseDown=function(n){e.triggerEvent("MouseDown",!0,n)},e.onMouseUp=function(n){e.triggerEvent("MouseUp",!1,n)},e.onMouseLeave=function(n){e.triggerEvent("MouseLeave",!1,n)},e}return p()(n,e),s()(n,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,n,t){var o="on"+e,i=this.props.children;i.props[o]&&i.props[o](t),n!==this.state.active&&this.setState({active:n})}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.disabled,o=e.activeClassName,a=e.activeStyle,r=t?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},l=h.a.Children.only(n);if(!t&&this.state.active){var s=l.props,c=s.style,u=s.className;return!1!==a&&(a&&(c=i()({},c,a)),u=m()(u,o)),h.a.cloneElement(l,i()({className:u,style:c},r))}return h.a.cloneElement(l,r)}}]),n}(h.a.Component),g=y;y.defaultProps={disabled:!1}}}]);
//# sourceMappingURL=25.373179b5.chunk.js.map