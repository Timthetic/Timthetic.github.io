(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[853],{9391:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(4697),i=n(428),o=n(1158),a=n(5638),c=n(7762),s=n(8027),l=n(1146),u=n(3178),d=n(6563),p=n(2018),f=n(5408),m=n(6674),h=n(2122),v=n(2112),g=n(4982),x=function(e){var t=(0,v.Z)(e);return function(e,n){return t(e,(0,h.Z)({defaultTheme:g.Z},n))}},b=(0,r.Z)((0,i.Z)(o.ZP,a.ZP,c.ZP,s.ZP,l.ZP,u.ZP,d.Z,p.ZP,f.Z,m.ZP)),E=x("div")(b,{name:"MuiBox"})},9123:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),i=n(7294),o=n(1253),a=n(5505),c=n(4621),s=n(1664),l=i.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,f=void 0===p?"svg":p,m=e.fontSize,h=void 0===m?"default":m,v=e.htmlColor,g=e.titleAccess,x=e.viewBox,b=void 0===x?"0 0 24 24":x,E=(0,o.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,(0,r.Z)({className:(0,a.Z)(c.root,l,"inherit"!==d&&c["color".concat((0,s.Z)(d))],"default"!==h&&c["fontSize".concat((0,s.Z)(h))]),focusable:"false",viewBox:b,color:v,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},E),n,g?i.createElement("title",null,g):null)}));l.muiName="SvgIcon";var u=(0,c.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(l);function d(e,t){var n=function(t,n){return i.createElement(u,(0,r.Z)({ref:n},t),e)};return n.muiName=u.muiName,i.memo(i.forwardRef(n))}},8905:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return a},deprecatedPropType:function(){return c},isMuiElement:function(){return l},ownerDocument:function(){return u},ownerWindow:function(){return d},requirePropFactory:function(){return p},setRef:function(){return f.Z},unstable_useId:function(){return x},unsupportedProp:function(){return m},useControlled:function(){return h},useEventCallback:function(){return v.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var r=n(1664);n(5827);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),(function(){}))}var o=n(9123);function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=this,c=function(){e.apply(a,i)};clearTimeout(t),t=setTimeout(c,n)}return r.clear=function(){clearTimeout(t)},r}function c(e,t){return function(){return null}}var s=n(7294);function l(e,t){return s.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function u(e){return e&&e.ownerDocument||document}function d(e){return u(e).defaultView||window}function p(e){return function(){return null}}var f=n(1474);function m(e,t,n,r,i){return null}function h(e){var t=e.controlled,n=e.default,r=(e.name,e.state,s.useRef(void 0!==t).current),i=s.useState(n),o=i[0],a=i[1];return[r?t:o,s.useCallback((function(e){r||a(e)}),[])]}var v=n(7544),g=n(1291);function x(e){var t=s.useState(e),n=t[0],r=t[1],i=e||n;return s.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),i}var b=n(4095)},1474:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},7544:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function o(e){var t=r.useRef(e);return i((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},1291:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i=n(1474);function o(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){(0,i.Z)(e,n),(0,i.Z)(t,n)}}),[e,t])}},4095:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),i=n(3935),o=!0,a=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function u(){o=!1}function d(){"hidden"===this.visibilityState&&a&&(o=!0)}function p(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(a){}return o||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!s[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function f(){a=!0,window.clearTimeout(c),c=window.setTimeout((function(){a=!1}),100)}function m(){return{isFocusVisible:p,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=i.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},7739:function(e,t,n){"use strict";var r=n(5318),i=n(862);t.Z=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},8786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(8905)},1895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r=n(7294),i=n(3670),o=n(3751),a=n(5505),c=n(2122),s=n(7627),l=n(4982);var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.Z)(e,(0,c.Z)({defaultTheme:l.Z},t))},d=n(1253),p=n(8063),f=n(4621),m=r.forwardRef((function(e,t){var n=e.classes,i=e.className,o=e.raised,s=void 0!==o&&o,l=(0,d.Z)(e,["classes","className","raised"]);return r.createElement(p.Z,(0,c.Z)({className:(0,a.Z)(n.root,i),elevation:s?8:1,ref:t},l))})),h=(0,f.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(m),v=r.forwardRef((function(e,t){var n=e.classes,i=e.className,o=e.component,s=void 0===o?"div":o,l=(0,d.Z)(e,["classes","className","component"]);return r.createElement(s,(0,c.Z)({className:(0,a.Z)(n.root,i),ref:t},l))})),g=(0,f.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(v),x=n(453),b=r.forwardRef((function(e,t){var n=e.disableSpacing,i=void 0!==n&&n,o=e.classes,s=e.className,l=(0,d.Z)(e,["disableSpacing","classes","className"]);return r.createElement("div",(0,c.Z)({className:(0,a.Z)(o.root,s,!i&&o.spacing),ref:t},l))})),E=(0,f.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(b),y=n(9391),Z=n(7595),w=n(3935),S=n(1291),C=n(7544),k=n(4095),R=n(7329),M=n(9756),T=n(3349),N=n(3552),I=r.createContext(null);function D(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function z(e,t,n){return null!=n[t]?n[t]:e.props[t]}function P(e,t,n){var i=D(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var c={};for(var s in t){if(i[s])for(r=0;r<i[s].length;r++){var l=i[s][r];c[i[s][r]]=n(l)}c[s]=n(s)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}(t,i);return Object.keys(o).forEach((function(a){var c=o[a];if((0,r.isValidElement)(c)){var s=a in t,l=a in i,u=t[a],d=(0,r.isValidElement)(u)&&!u.props.in;!l||s&&!d?l||!s||d?l&&s&&(0,r.isValidElement)(u)&&(o[a]=(0,r.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:z(c,"exit",e),enter:z(c,"enter",e)})):o[a]=(0,r.cloneElement)(c,{in:!1}):o[a]=(0,r.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:z(c,"exit",e),enter:z(c,"enter",e)})}})),o}var O=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},A=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,T.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,N.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,i=a,D(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:z(e,"appear",n),enter:z(e,"enter",n),exit:z(e,"exit",n)})}))):P(e,o,a),firstRender:!1}},n.handleExited=function(e,t){var n=D(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,c.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,M.Z)(e,["component","childFactory"]),o=this.state.contextValue,a=O(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(I.Provider,{value:o},a):r.createElement(I.Provider,{value:o},r.createElement(t,i,a))},t}(r.Component);A.defaultProps={component:"div",childFactory:function(e){return e}};var L=A,j="undefined"==typeof window?r.useEffect:r.useLayoutEffect;var B=function(e){var t=e.classes,n=e.pulsate,i=void 0!==n&&n,o=e.rippleX,c=e.rippleY,s=e.rippleSize,l=e.in,u=e.onExited,d=void 0===u?function(){}:u,p=e.timeout,f=r.useState(!1),m=f[0],h=f[1],v=(0,a.Z)(t.ripple,t.rippleVisible,i&&t.ripplePulsate),g={width:s,height:s,top:-s/2+c,left:-s/2+o},x=(0,a.Z)(t.child,m&&t.childLeaving,i&&t.childPulsate),b=(0,C.Z)(d);return j((function(){if(!l){h(!0);var e=setTimeout(b,p);return function(){clearTimeout(e)}}}),[b,l,p]),r.createElement("span",{className:v,style:g},r.createElement("span",{className:x}))},V=r.forwardRef((function(e,t){var n=e.center,i=void 0!==n&&n,o=e.classes,s=e.className,l=(0,d.Z)(e,["center","classes","className"]),u=r.useState([]),p=u[0],f=u[1],m=r.useRef(0),h=r.useRef(null);r.useEffect((function(){h.current&&(h.current(),h.current=null)}),[p]);var v=r.useRef(!1),g=r.useRef(null),x=r.useRef(null),b=r.useRef(null);r.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var E=r.useCallback((function(e){var t=e.pulsate,n=e.rippleX,i=e.rippleY,a=e.rippleSize,c=e.cb;f((function(e){return[].concat((0,R.Z)(e),[r.createElement(B,{key:m.current,classes:o,timeout:550,pulsate:t,rippleX:n,rippleY:i,rippleSize:a})])})),m.current+=1,h.current=c}),[o]),y=r.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,o=void 0!==r&&r,a=t.center,c=void 0===a?i||t.pulsate:a,s=t.fakeElement,l=void 0!==s&&s;if("mousedown"===e.type&&v.current)v.current=!1;else{"touchstart"===e.type&&(v.current=!0);var u,d,p,f=l?null:b.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(m.width/2),d=Math.round(m.height/2);else{var h=e.touches?e.touches[0]:e,y=h.clientX,Z=h.clientY;u=Math.round(y-m.left),d=Math.round(Z-m.top)}if(c)(p=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(p+=1);else{var w=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,S=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(w,2)+Math.pow(S,2))}e.touches?null===x.current&&(x.current=function(){E({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){x.current&&(x.current(),x.current=null)}),80)):E({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[i,E]),Z=r.useCallback((function(){y({},{pulsate:!0})}),[y]),w=r.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&x.current)return e.persist(),x.current(),x.current=null,void(g.current=setTimeout((function(){w(e,t)})));x.current=null,f((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return r.useImperativeHandle(t,(function(){return{pulsate:Z,start:y,stop:w}}),[Z,y,w]),r.createElement("span",(0,c.Z)({className:(0,a.Z)(o.root,s),ref:b},l),r.createElement(L,{component:null,exit:!0},p))})),W=(0,f.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(r.memo(V)),U=r.forwardRef((function(e,t){var n=e.action,i=e.buttonRef,o=e.centerRipple,s=void 0!==o&&o,l=e.children,u=e.classes,p=e.className,f=e.component,m=void 0===f?"button":f,h=e.disabled,v=void 0!==h&&h,g=e.disableRipple,x=void 0!==g&&g,b=e.disableTouchRipple,E=void 0!==b&&b,y=e.focusRipple,Z=void 0!==y&&y,R=e.focusVisibleClassName,M=e.onBlur,T=e.onClick,N=e.onFocus,I=e.onFocusVisible,D=e.onKeyDown,z=e.onKeyUp,P=e.onMouseDown,O=e.onMouseLeave,A=e.onMouseUp,L=e.onTouchEnd,j=e.onTouchMove,B=e.onTouchStart,V=e.onDragLeave,U=e.tabIndex,F=void 0===U?0:U,H=e.TouchRippleProps,G=e.type,X=void 0===G?"button":G,K=(0,d.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),_=r.useRef(null);var $=r.useRef(null),Y=r.useState(!1),q=Y[0],Q=Y[1];v&&q&&Q(!1);var J=(0,k.Z)(),ee=J.isFocusVisible,te=J.onBlurVisible,ne=J.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;return(0,C.Z)((function(r){return t&&t(r),!n&&$.current&&$.current[e](r),!0}))}r.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),_.current.focus()}}}),[]),r.useEffect((function(){q&&Z&&!x&&$.current.pulsate()}),[x,Z,q]);var ie=re("start",P),oe=re("stop",V),ae=re("stop",A),ce=re("stop",(function(e){q&&e.preventDefault(),O&&O(e)})),se=re("start",B),le=re("stop",L),ue=re("stop",j),de=re("stop",(function(e){q&&(te(e),Q(!1)),M&&M(e)}),!1),pe=(0,C.Z)((function(e){_.current||(_.current=e.currentTarget),ee(e)&&(Q(!0),I&&I(e)),N&&N(e)})),fe=function(){var e=w.findDOMNode(_.current);return m&&"button"!==m&&!("A"===e.tagName&&e.href)},me=r.useRef(!1),he=(0,C.Z)((function(e){Z&&!me.current&&q&&$.current&&" "===e.key&&(me.current=!0,e.persist(),$.current.stop(e,(function(){$.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),D&&D(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!v&&(e.preventDefault(),T&&T(e))})),ve=(0,C.Z)((function(e){Z&&" "===e.key&&$.current&&q&&!e.defaultPrevented&&(me.current=!1,e.persist(),$.current.stop(e,(function(){$.current.pulsate(e)}))),z&&z(e),T&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&T(e)})),ge=m;"button"===ge&&K.href&&(ge="a");var xe={};"button"===ge?(xe.type=X,xe.disabled=v):("a"===ge&&K.href||(xe.role="button"),xe["aria-disabled"]=v);var be=(0,S.Z)(i,t),Ee=(0,S.Z)(ne,_),ye=(0,S.Z)(be,Ee),Ze=r.useState(!1),we=Ze[0],Se=Ze[1];r.useEffect((function(){Se(!0)}),[]);var Ce=we&&!x&&!v;return r.createElement(ge,(0,c.Z)({className:(0,a.Z)(u.root,p,q&&[u.focusVisible,R],v&&u.disabled),onBlur:de,onClick:T,onFocus:pe,onKeyDown:he,onKeyUp:ve,onMouseDown:ie,onMouseLeave:ce,onMouseUp:ae,onDragLeave:oe,onTouchEnd:le,onTouchMove:ue,onTouchStart:se,ref:ye,tabIndex:v?-1:F},xe,K),l,Ce?r.createElement(W,(0,c.Z)({ref:$,center:s},H)):null)})),F=(0,f.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(U),H=n(1664),G=r.forwardRef((function(e,t){var n=e.edge,i=void 0!==n&&n,o=e.children,s=e.classes,l=e.className,u=e.color,p=void 0===u?"default":u,f=e.disabled,m=void 0!==f&&f,h=e.disableFocusRipple,v=void 0!==h&&h,g=e.size,x=void 0===g?"medium":g,b=(0,d.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(F,(0,c.Z)({className:(0,a.Z)(s.root,l,"default"!==p&&s["color".concat((0,H.Z)(p))],m&&s.disabled,"small"===x&&s["size".concat((0,H.Z)(x))],{start:s.edgeStart,end:s.edgeEnd}[i]),centerRipple:!0,focusRipple:!v,disabled:m,ref:t},b),r.createElement("span",{className:s.label},o))})),X=(0,f.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,Z.U1)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,Z.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,Z.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(G),K=n(4699),_=!1,$="unmounted",Y="exited",q="entering",Q="entered",J="exiting",ee=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=Y,r.appearStatus=q):i=Q:i=t.unmountOnExit||t.mountOnEnter?$:Y,r.state={status:i},r.nextCallback=null,r}(0,N.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===$?{status:Y}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==q&&n!==Q&&(t=q):n!==q&&n!==Q||(t=J)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===q?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===Y&&this.setState({status:$})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[w.findDOMNode(this),r],o=i[0],a=i[1],c=this.getTimeouts(),s=r?c.appear:c.enter;!e&&!n||_?this.safeSetState({status:Q},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:q},(function(){t.props.onEntering(o,a),t.onTransitionEnd(s,(function(){t.safeSetState({status:Q},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:w.findDOMNode(this);t&&!_?(this.props.onExit(r),this.safeSetState({status:J},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Y},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Y},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===$)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,M.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(I.Provider,{value:null},"function"==typeof n?n(e,i):r.cloneElement(r.Children.only(n),i))},t}(r.Component);function te(){}ee.contextType=I,ee.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:te,onEntering:te,onEntered:te,onExit:te,onExiting:te,onExited:te},ee.UNMOUNTED=$,ee.EXITED=Y,ee.ENTERING=q,ee.ENTERED=Q,ee.EXITING=J;var ne=ee,re=n(381);function ie(e,t){var n=e.timeout,r=e.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"==typeof n?n:n[t.mode]||0,delay:i.transitionDelay}}var oe=n(4427);var ae=r.forwardRef((function(e,t){var n=e.children,i=e.classes,o=e.className,s=e.collapsedHeight,u=void 0===s?"0px":s,p=e.component,f=void 0===p?"div":p,m=e.disableStrictModeCompat,h=void 0!==m&&m,v=e.in,g=e.onEnter,x=e.onEntered,b=e.onEntering,E=e.onExit,y=e.onExited,Z=e.onExiting,w=e.style,C=e.timeout,k=void 0===C?re.x9.standard:C,R=e.TransitionComponent,M=void 0===R?ne:R,T=(0,d.Z)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=(0,oe.Z)()||l.Z,I=r.useRef(),D=r.useRef(null),z=r.useRef(),P="number"==typeof u?"".concat(u,"px"):u;r.useEffect((function(){return function(){clearTimeout(I.current)}}),[]);var O=N.unstable_strictMode&&!h,A=r.useRef(null),L=(0,S.Z)(t,O?A:void 0),j=function(e){return function(t,n){if(e){var r=O?[A.current,t]:[t,n],i=(0,K.Z)(r,2),o=i[0],a=i[1];void 0===a?e(o):e(o,a)}}},B=j((function(e,t){e.style.height=P,g&&g(e,t)})),V=j((function(e,t){var n=D.current?D.current.clientHeight:0,r=ie({style:w,timeout:k},{mode:"enter"}).duration;if("auto"===k){var i=N.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),z.current=i}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style.height="".concat(n,"px"),b&&b(e,t)})),W=j((function(e,t){e.style.height="auto",x&&x(e,t)})),U=j((function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)})),F=j(y),H=j((function(e){var t=D.current?D.current.clientHeight:0,n=ie({style:w,timeout:k},{mode:"exit"}).duration;if("auto"===k){var r=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),z.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=P,Z&&Z(e)}));return r.createElement(M,(0,c.Z)({in:v,onEnter:B,onEntered:W,onEntering:V,onExit:U,onExited:F,onExiting:H,addEndListener:function(e,t){var n=O?e:t;"auto"===k&&(I.current=setTimeout(n,z.current||0))},nodeRef:O?A:void 0,timeout:"auto"===k?null:k},T),(function(e,t){return r.createElement(f,(0,c.Z)({className:(0,a.Z)(i.container,o,{entered:i.entered,exited:!v&&"0px"===P&&i.hidden}[e]),style:(0,c.Z)({minHeight:P},w),ref:L},t),r.createElement("div",{className:i.wrapper,ref:D},r.createElement("div",{className:i.wrapperInner},n)))}))}));ae.muiSupportAuto=!0;var ce=(0,f.Z)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(ae),se=r.forwardRef((function(e,t){var n=e.absolute,i=void 0!==n&&n,o=e.classes,s=e.className,l=e.component,u=void 0===l?"hr":l,p=e.flexItem,f=void 0!==p&&p,m=e.light,h=void 0!==m&&m,v=e.orientation,g=void 0===v?"horizontal":v,x=e.role,b=void 0===x?"hr"!==u?"separator":void 0:x,E=e.variant,y=void 0===E?"fullWidth":E,Z=(0,d.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(u,(0,c.Z)({className:(0,a.Z)(o.root,s,"fullWidth"!==y&&o[y],i&&o.absolute,f&&o.flexItem,h&&o.light,"vertical"===g&&o.vertical),role:b,ref:t},Z))})),le=(0,f.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,Z.U1)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(se),ue=n(7739),de=(0,n(9123).Z)(r.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub"),pe=u((function(e){return{affiliation:{color:e.palette.grey.dark},githubButton:{marginLeft:"8px",marginBottom:"8px",border:"none",padding:"4px",borderRadius:"8px",outline:"none",backgroundColor:e.palette.grey.main,"&:hover":{backgroundColor:e.palette.grey.light,cursor:"pointer"}},gitHubIcon:{marginRight:"8px"},expandOpen:{transform:"rotate(180deg)"},cardButtons:{display:"flex",justifyContent:"space-between"}}})),fe=function(e){var t,n=e.title,i=e.affiliation,o=e.type,c=e.repository,s=e.description,l=e.tech,u=pe(),d=r.useState(!1),p=d[0],f=d[1];return r.createElement(h,null,r.createElement(g,null,r.createElement(x.Z,null,n," (",o,")"),r.createElement(x.Z,{variant:"body2",className:u.affiliation},i)),r.createElement(E,{className:u.cardButtons},r.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},r.createElement("button",{className:u.githubButton},r.createElement(y.Z,{display:"flex"},r.createElement(de,{className:u.gitHubIcon}),r.createElement(x.Z,null,"GitHub")))),r.createElement(X,{className:(0,a.Z)(u.expand,(t={},t[u.expandOpen]=p,t)),onClick:function(){f(!p)},"aria-expanded":p,"aria-label":"show more"},r.createElement(ue.Z,null))),r.createElement(ce,{in:p,timeout:"auto",unmountOnExit:!0},r.createElement(g,null,r.createElement(x.Z,null,s),r.createElement(le,null),r.createElement(x.Z,{style:{fontWeight:"bold"}},"Tech:"),r.createElement(x.Z,null,l.join(", ")))))},me=(n(5827),[0,1,2,3,4,5,6,7,8,9,10]),he=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var ge=r.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,o=e.alignItems,s=void 0===o?"stretch":o,l=e.classes,u=e.className,p=e.component,f=void 0===p?"div":p,m=e.container,h=void 0!==m&&m,v=e.direction,g=void 0===v?"row":v,x=e.item,b=void 0!==x&&x,E=e.justify,y=void 0===E?"flex-start":E,Z=e.lg,w=void 0!==Z&&Z,S=e.md,C=void 0!==S&&S,k=e.sm,R=void 0!==k&&k,M=e.spacing,T=void 0===M?0:M,N=e.wrap,I=void 0===N?"wrap":N,D=e.xl,z=void 0!==D&&D,P=e.xs,O=void 0!==P&&P,A=e.zeroMinWidth,L=void 0!==A&&A,j=(0,d.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=(0,a.Z)(l.root,u,h&&[l.container,0!==T&&l["spacing-xs-".concat(String(T))]],b&&l.item,L&&l.zeroMinWidth,"row"!==g&&l["direction-xs-".concat(String(g))],"wrap"!==I&&l["wrap-xs-".concat(String(I))],"stretch"!==s&&l["align-items-xs-".concat(String(s))],"stretch"!==i&&l["align-content-xs-".concat(String(i))],"flex-start"!==y&&l["justify-xs-".concat(String(y))],!1!==O&&l["grid-xs-".concat(String(O))],!1!==R&&l["grid-sm-".concat(String(R))],!1!==C&&l["grid-md-".concat(String(C))],!1!==w&&l["grid-lg-".concat(String(w))],!1!==z&&l["grid-xl-".concat(String(z))]);return r.createElement(f,(0,c.Z)({className:B,ref:t},j))})),xe=(0,f.Z)((function(e){return(0,c.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return me.forEach((function(r){var i=e.spacing(r);0!==i&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(ve(i,2)),width:"calc(100% + ".concat(ve(i),")"),"& > $item":{padding:ve(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};he.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,c.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(ge),be=[{title:"MTGUtilities",affiliation:"Independent",type:"iOS App",repository:"https://github.com/Timthetic/MTGUtilities",description:"A simple iOS app that keeps a local store of Magic: The Gathering™ cards as well as life totals.",tech:["iOS","Swift","Core Data","REST API"]},{title:"Bruin Quest App",affiliation:"ACM Hack at UCLA",type:"Web App",repository:"https://github.com/uclaacm/bruin-quest-website",description:'A web application that ACM at UCLA used to host "Bruin Quest" a remote puzzle solving competition. The app would provide the puzzles, verify answers, and keep score.',tech:["MongoDB","Express","React","NodeJS","REST API","GCP"]},{title:"Wanderlust",affiliation:"UCLA: CS 188 – Scalable Internet Services",type:"Web App",repository:"https://github.com/scalableinternetservicesarchive/wanderlust",description:"A web application I created with a team for class. It was a location based art sharing platform that encouraged exploring (similar to Pokemon Go™).",tech:["MySQL","React","NodeJS","GraphQL","k6","Honeycomb","load testing"]},{title:"DownToMeet",affiliation:"UCLA: CS 130 – Software Engineering",type:"Web App",repository:"https://github.com/downToMeet/downToMeet",description:"A web application I created with a team for class. It's a social networking app that focuses on getting people with similar interests together. It was inspired by my need to find other Magic: The Gathering™ players.",tech:["Swagger","Go","JavaScript","REST API","Postgresql","React"]}],Ee=function(){return r.createElement(i.Z,null,r.createElement(o.Z,{title:"Projects"}),r.createElement(x.Z,{variant:"h5",component:"h2"},"Projects"),r.createElement(xe,{container:!0,spacing:1},be.map((function(e){return r.createElement(xe,{item:!0,key:e.title,md:4,sm:6,xs:12},r.createElement(fe,e))}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-9948865f4d20a2958037.js.map