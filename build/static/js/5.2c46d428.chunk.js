(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;var o=f(n(77)),a=f(n(85)),r=f(n(76)),i=f(n(73)),l=f(n(74)),s=f(n(75)),u=f(n(78)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),p=f(n(93)),d=f(n(86));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n},v=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"renderFooterButton",value:function(e,t,n){var o={};if(e.style&&"string"===typeof(o=e.style)){o={cancel:{},default:{},destructive:{color:"red"}}[o]||{}}return c.createElement(d.default,{activeClassName:t+"-button-active",key:n},c.createElement("a",{className:t+"-button",role:"button",style:o,onClick:function(t){t.preventDefault(),e.onPress&&e.onPress()}},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,i=n.className,l=n.wrapClassName,s=n.transitionName,d=n.maskTransitionName,f=n.style,v=n.platform,h=n.footer,y=void 0===h?[]:h,g=n.operation,b=n.animated,C=n.transparent,N=n.popup,k=n.animationType,E=m(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),_=(0,u.default)(r+"-button-group-"+(2!==y.length||g?"v":"h"),r+"-button-group-"+(g?"operation":"normal")),w=y.length?c.createElement("div",{className:_,role:"group"},y.map((function(e,n){return t.renderFooterButton(e,r,n)}))):null,P=void 0,M=void 0;b&&(P=M=C?"am-fade":"am-slide-up",N&&(P="slide-up"===k?"am-slide-up":"am-slide-down",M="am-fade"));var x=(0,u.default)(l,(0,a.default)({},r+"-wrap-popup",N)),T=(0,u.default)(i,(e={},(0,a.default)(e,r+"-transparent",C),(0,a.default)(e,r+"-popup",N),(0,a.default)(e,r+"-popup-"+k,N&&k),(0,a.default)(e,r+"-android","android"===v),e));return c.createElement(p.default,(0,o.default)({},E,{prefixCls:r,className:T,wrapClassName:x,transitionName:s||P,maskTransitionName:d||M,style:f,footer:w}))}}]),t}(t.ModalComponent=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),t}(c.Component));t.default=v,v.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,o=e;for(;o;){if(n.call(o,t))return o;o=o.parentElement}return null},e.exports=t.default},218:function(e,t,n){"use strict";n(82),n(297)},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(298)),a=l(n(156)),r=l(n(299)),i=l(n(300));function l(e){return e&&e.__esModule?e:{default:e}}a.default.alert=o.default,a.default.prompt=i.default,a.default.operation=r.default,t.default=a.default,e.exports=t.default},297:function(e,t,n){},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",s=!1;if(!e&&!t)return{close:function(){}};var u=document.createElement("div");function c(){a.unmountComponentAtNode(u),u&&u.parentNode&&u.parentNode.removeChild(u)}document.body.appendChild(u);var p=n.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!s){var e=t();e&&e.then?e.then((function(){s=!0,c()})).catch((function(){})):(s=!0,c())}},e})),d="am-modal";function f(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-footer")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:p,maskTransitionName:"am-fade",platform:l,wrapProps:{onTouchStart:f}},o.createElement("div",{className:d+"-alert-content"},t)),u),{close:c}};var o=s(n(0)),a=s(n(15)),r=l(n(186)),i=l(n(156));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",n=!1,l="am-modal",s=document.createElement("div");function u(){a.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}document.body.appendChild(s);var c=e.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!n){var e=t();e&&e.then?e.then((function(){n=!0,u()})).catch((function(){})):(n=!0,u())}},e}));function p(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,".am-modal-footer")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,operation:!0,transparent:!0,prefixCls:l,transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:u,footer:c,maskTransitionName:"am-fade",className:"am-modal-operation",platform:t,wrapProps:{onTouchStart:p}}),s),{close:u}};var o=s(n(0)),a=s(n(15)),r=l(n(186)),i=l(n(156));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",p=!1;if(s="string"===typeof s?s:"number"===typeof s?""+s:"",!n)return{close:function(){}};var d="am-modal",f={text:s};function m(e){var t=e.target,n=t.getAttribute("type");null!==n&&(f[n]=t.value)}function v(e){var t=e.currentTarget||e.target;t&&t.focus()}function h(){/MicroMessenger/.test(navigator.userAgent)&&(document.body.scrollTop=document.body.scrollTop)}var y=void 0,g=function(e){setTimeout((function(){e&&e.focus()}),500)};switch(l){case"login-password":y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"text",defaultValue:f.text,ref:function(e){return g(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))),o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"password",defaultValue:f.password,onClick:v,onChange:m,placeholder:u[1],onBlur:h}))));break;case"secure-text":y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"password",defaultValue:f.password,ref:function(e){return g(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))));break;case"default":default:y=o.createElement("div",{className:d+"-input-container"},o.createElement("div",{className:d+"-input"},o.createElement("label",null,o.createElement("input",{type:"text",defaultValue:f.text,ref:function(e){return g(e)},onClick:v,onChange:m,placeholder:u[0],onBlur:h}))))}var b=o.createElement("div",null,t,y),C=document.createElement("div");function N(){a.unmountComponentAtNode(C),C&&C.parentNode&&C.parentNode.removeChild(C)}function k(e){if("function"===typeof e){var t=f.text,n=void 0===t?"":t,o=f.password,a=void 0===o?"":o,r="login-password"===l?[n,a]:"secure-text"===l?[a]:[n];return e.apply(void 0,r)}}document.body.appendChild(C);var E=void 0;E="function"===typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){k(n)}}]:n.map((function(e){return{text:e.text,onPress:function(){return k(e.onPress)}}}));var _=E.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!p){var e=t();e&&e.then?e.then((function(){p=!0,N()})).catch((function(){})):(p=!0,N())}},e}));function w(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&((0,r.default)(e.target,"."+d+"-content")||e.preventDefault())}return a.render(o.createElement(i.default,{visible:!0,transparent:!0,prefixCls:d,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:_,maskTransitionName:"am-fade",platform:c,wrapProps:{onTouchStart:w}},o.createElement("div",{className:d+"-propmt-content"},b)),C),{close:N}};var o=s(n(0)),a=s(n(15)),r=l(n(186)),i=l(n(156));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},86:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n(77),a=n.n(o),r=n(73),i=n.n(r),l=n(76),s=n.n(l),u=n(74),c=n.n(u),p=n(75),d=n.n(p),f=n(0),m=n.n(f),v=n(78),h=n.n(v),y=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return d()(t,e),s()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var o="on"+e,a=this.props.children;a.props[o]&&a.props[o](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,o=e.activeClassName,r=e.activeStyle,i=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},l=m.a.Children.only(t);if(!n&&this.state.active){var s=l.props,u=s.style,c=s.className;return!1!==r&&(r&&(u=a()({},u,r)),c=h()(c,o)),m.a.cloneElement(l,a()({className:c,style:u},i))}return m.a.cloneElement(l,i)}}]),t}(m.a.Component),g=y;y.defaultProps={disabled:!1}},93:function(e,t,n){"use strict";n.r(t);var o=n(77),a=n.n(o),r=n(73),i=n.n(r),l=n(76),s=n.n(l),u=n(74),c=n.n(u),p=n(75),d=n.n(p),f=n(0),m=n.n(f),v=n(15),h=n.n(v),y=n(119),g=function(e){function t(){return i()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.hiddenClassName||!!e.visible}},{key:"render",value:function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=a()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,m.a.createElement("div",a()({},t))}}]),t}(m.a.Component);function b(){}var C=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getDialogElement=function(){var t=e.props,n=t.closable,o=t.prefixCls,a=void 0;t.footer&&(a=m.a.createElement("div",{className:o+"-footer",ref:function(t){return e.footerRef=t}},t.footer));var r=void 0;t.title&&(r=m.a.createElement("div",{className:o+"-header",ref:function(t){return e.headerRef=t}},m.a.createElement("div",{className:o+"-title"},t.title)));var i=void 0;n&&(i=m.a.createElement("button",{onClick:e.close,"aria-label":"Close",className:o+"-close"},m.a.createElement("span",{className:o+"-close-x"})));var l=e.getTransitionName(),s=m.a.createElement(g,{key:"dialog-element",role:"document",ref:function(t){return e.dialogRef=t},style:t.style||{},className:o+" "+(t.className||""),visible:t.visible},m.a.createElement("div",{className:o+"-content"},i,r,m.a.createElement("div",{className:o+"-body",style:t.bodyStyle,ref:function(t){return e.bodyRef=t}},t.children),a));return m.a.createElement(y.a,{key:"dialog",showProp:"visible",onAppear:e.onAnimateAppear,onLeave:e.onAnimateLeave,transitionName:l,component:"",transitionAppear:!0},s)},e.onAnimateAppear=function(){document.body.style.overflow="hidden"},e.onAnimateLeave=function(){document.body.style.overflow="",e.wrapRef&&(e.wrapRef.style.display="none"),e.props.onAnimateLeave&&e.props.onAnimateLeave(),e.props.afterClose&&e.props.afterClose()},e.close=function(t){e.props.onClose&&e.props.onClose(t)},e.onMaskClick=function(t){t.target===t.currentTarget&&e.close(t)},e}return d()(t,e),s()(t,[{key:"componentWillUnmount",value:function(){document.body.style.overflow="",this.wrapRef&&(this.wrapRef.style.display="none")}},{key:"getZIndexStyle",value:function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e}},{key:"getWrapStyle",value:function(){var e=this.props.wrapStyle||{};return a()({},this.getZIndexStyle(),e)}},{key:"getMaskStyle",value:function(){var e=this.props.maskStyle||{};return a()({},this.getZIndexStyle(),e)}},{key:"getMaskTransitionName",value:function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getMaskElement",value:function(){var e=this.props,t=void 0;if(e.mask){var n=this.getMaskTransitionName();t=m.a.createElement(g,a()({style:this.getMaskStyle(),key:"mask-element",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible},e.maskProps)),n&&(t=m.a.createElement(y.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.maskClosable,r=this.getWrapStyle();return t.visible&&(r.display=null),m.a.createElement("div",null,this.getMaskElement(),m.a.createElement("div",a()({className:n+"-wrap "+(t.wrapClassName||""),ref:function(t){return e.wrapRef=t},onClick:o?this.onMaskClick:void 0,role:"dialog","aria-labelledby":t.title,style:r},t.wrapProps),this.getDialogElement()))}}]),t}(m.a.Component),N=C;C.defaultProps={afterClose:b,className:"",mask:!0,visible:!1,closable:!0,maskClosable:!0,prefixCls:"rmc-dialog",onClose:b};var k=!!h.a.createPortal,E=!("undefined"===typeof window||!window.document||!window.document.createElement),_=function(e){function t(){i()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveRef=function(t){k&&(e._component=t)},e.getComponent=function(t){var n=a()({},e.props);return["visible","onAnimateLeave"].forEach((function(e){n.hasOwnProperty(e)&&delete n[e]})),m.a.createElement(N,a()({},n,{visible:t,onAnimateLeave:e.removeContainer,ref:e.saveRef}))},e.removeContainer=function(){e.container&&(k||h.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.getContainer=function(){if(!e.container){var t=document.createElement("div"),n=e.props.prefixCls+"-container-"+(new Date).getTime();t.setAttribute("id",n),document.body.appendChild(t),e.container=t}return e.container},e}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.componentDidUpdate()}},{key:"shouldComponentUpdate",value:function(e){var t=e.visible;return!(!this.props.visible&&!t)}},{key:"componentWillUnmount",value:function(){this.props.visible?k?this.removeContainer():this.renderDialog(!1):this.removeContainer()}},{key:"componentDidUpdate",value:function(){k||this.renderDialog(this.props.visible)}},{key:"renderDialog",value:function(e){h.a.unstable_renderSubtreeIntoContainer(this,this.getComponent(e),this.getContainer())}},{key:"render",value:function(){if(!E)return null;var e=this.props.visible;return k&&(e||this._component)?h.a.createPortal(this.getComponent(e),this.getContainer()):null}}]),t}(m.a.Component);t.default=_;_.defaultProps={visible:!1,prefixCls:"rmc-dialog",onClose:function(){}}}}]);
//# sourceMappingURL=5.2c46d428.chunk.js.map