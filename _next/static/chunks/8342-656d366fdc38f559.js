!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="eedfab2a-4fc4-4355-957b-fc8f8ffaa6dd",e._sentryDebugIdIdentifier="sentry-dbid-eedfab2a-4fc4-4355-957b-fc8f8ffaa6dd")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8342],{96061:function(e,n,t){t.d(n,{Z:function(){return r}});let r=(0,t(60374).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},64580:function(e,n,t){t.d(n,{Z:function(){return r}});let r=(0,t(60374).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},70219:function(e,n,t){t.d(n,{Z:function(){return D}});var r=t(72145),o=t(23506),a=t(20152),u=t(30509),l=(0,t(31748)._)(),i=function(){},c=o.forwardRef(function(e,n){var t=o.useRef(null),a=o.useState({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:i}),c=a[0],d=a[1],s=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,h=e.enabled,m=e.shards,g=e.sideCar,w=e.noIsolation,y=e.inert,b=e.allowPinchZoom,x=e.as,M=e.gapMode,C=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=(0,u.q)([t,n]),R=(0,r.pi)((0,r.pi)({},C),c);return o.createElement(o.Fragment,null,h&&o.createElement(g,{sideCar:l,removeScrollBar:v,shards:m,noIsolation:w,inert:y,setCallbacks:d,allowPinchZoom:!!b,lockRef:t,gapMode:M}),s?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},R),{ref:E})):o.createElement(void 0===x?"div":x,(0,r.pi)({},R,{className:p,ref:E}),f))});c.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},c.classNames={fullWidth:a.zi,zeroRight:a.pF};var d=t(99522),s=t(53787),f=t(23410),p=!1;if("undefined"!=typeof window)try{var v=Object.defineProperty({},"passive",{get:function(){return p=!0,!0}});window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch(e){p=!1}var h=!!p&&{passive:!1},m=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},g=function(e,n){var t=n.ownerDocument,r=n;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),w(e,r)){var o=y(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==t.body);return!1},w=function(e,n){return"v"===e?m(n,"overflowY"):m(n,"overflowX")},y=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},b=function(e,n,t,r,o){var a,u=(a=window.getComputedStyle(n).direction,"h"===e&&"rtl"===a?-1:1),l=u*r,i=t.target,c=n.contains(i),d=!1,s=l>0,f=0,p=0;do{var v=y(e,i),h=v[0],m=v[1]-v[2]-u*h;(h||m)&&w(e,i)&&(f+=m,p+=h),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!c&&i!==document.body||c&&(n.contains(i)||n===i));return s&&(o&&1>Math.abs(f)||!o&&l>f)?d=!0:!s&&(o&&1>Math.abs(p)||!o&&-l>p)&&(d=!0),d},x=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},M=function(e){return[e.deltaX,e.deltaY]},C=function(e){return e&&"current"in e?e.current:e},E=0,R=[],k=(0,d.L)(l,function(e){var n=o.useRef([]),t=o.useRef([0,0]),a=o.useRef(),u=o.useState(E++)[0],l=o.useState(f.Ws)[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(u));var n=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(C),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(u))}),function(){document.body.classList.remove("block-interactivity-".concat(u)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(u))})}}},[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=x(e),u=t.current,l="deltaX"in e?e.deltaX:u[0]-o[0],c="deltaY"in e?e.deltaY:u[1]-o[1],d=e.target,s=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=g(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=g(s,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(l||c)&&(a.current=r),!r)return!0;var p=a.current||r;return b(p,n,e,"h"===p?l:c,!0)},[]),d=o.useCallback(function(e){if(R.length&&R[R.length-1]===l){var t="deltaY"in e?M(e):x(e),r=n.current.filter(function(n){var r;return n.name===e.type&&(n.target===e.target||e.target===n.shadowParent)&&(r=n.delta)[0]===t[0]&&r[1]===t[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(C).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),p=o.useCallback(function(e,t,r,o){var a={name:e,delta:t,target:r,should:o,shadowParent:function(e){for(var n=null;null!==e;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}(r)};n.current.push(a),setTimeout(function(){n.current=n.current.filter(function(e){return e!==a})},1)},[]),v=o.useCallback(function(e){t.current=x(e),a.current=void 0},[]),m=o.useCallback(function(n){p(n.type,M(n),n.target,c(n,e.lockRef.current))},[]),w=o.useCallback(function(n){p(n.type,x(n),n.target,c(n,e.lockRef.current))},[]);o.useEffect(function(){return R.push(l),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:w}),document.addEventListener("wheel",d,h),document.addEventListener("touchmove",d,h),document.addEventListener("touchstart",v,h),function(){R=R.filter(function(e){return e!==l}),document.removeEventListener("wheel",d,h),document.removeEventListener("touchmove",d,h),document.removeEventListener("touchstart",v,h)}},[]);var y=e.removeScrollBar,k=e.inert;return o.createElement(o.Fragment,null,k?o.createElement(l,{styles:"\n  .block-interactivity-".concat(u," {pointer-events: none;}\n  .allow-interactivity-").concat(u," {pointer-events: all;}\n")}):null,y?o.createElement(s.jp,{gapMode:e.gapMode}):null)}),j=o.forwardRef(function(e,n){return o.createElement(c,(0,r.pi)({},e,{ref:n,sideCar:k}))});j.classNames=c.classNames;var D=j},46707:function(e,n,t){t.d(n,{oC:function(){return e4},VY:function(){return e6},ZA:function(){return e2},ck:function(){return e7},wU:function(){return e9},__:function(){return e5},Uv:function(){return e1},Ee:function(){return e8},Rk:function(){return e3},fC:function(){return e$},Z0:function(){return ne},Tr:function(){return nn},tu:function(){return nr},fF:function(){return nt},xz:function(){return e0}});var r=t(23506),o=t(27376),a=t(40296),u=t(12089),l=t(14869),i=t(666),c=t(42169),d=t(81674),s=t(88394),f=t(20077),p=t(48778),v=t(93039),h=t(13647),m=t(23569),g=t(65825),w=t(51554),y=t(1430),b=t(15483),x=t(82965),M=t(70219),C=t(68098),E=["Enter"," "],R=["ArrowUp","PageDown","End"],k=["ArrowDown","PageUp","Home",...R],j={ltr:[...E,"ArrowRight"],rtl:[...E,"ArrowLeft"]},D={ltr:["ArrowLeft"],rtl:["ArrowRight"]},_="Menu",[T,P,I]=(0,c.B)(_),[S,N]=(0,u.b)(_,[I,h.D7,w.Pc]),L=(0,h.D7)(),F=(0,w.Pc)(),[O,A]=S(_),[K,W]=S(_),V=e=>{let{__scopeMenu:n,open:t=!1,children:o,dir:a,onOpenChange:u,modal:l=!0}=e,i=L(n),[c,s]=r.useState(null),f=r.useRef(!1),p=(0,b.W)(u),v=(0,d.gm)(a);return r.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,C.jsx)(h.fC,{...i,children:(0,C.jsx)(O,{scope:n,open:t,onOpenChange:p,content:c,onContentChange:s,children:(0,C.jsx)(K,{scope:n,onClose:r.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:v,modal:l,children:o})})})};V.displayName=_;var B=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=L(t);return(0,C.jsx)(h.ee,{...o,...r,ref:n})});B.displayName="MenuAnchor";var X="MenuPortal",[Z,U]=S(X,{forceMount:void 0}),Y=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:o}=e,a=A(X,n);return(0,C.jsx)(Z,{scope:n,forceMount:t,children:(0,C.jsx)(g.z,{present:t||a.open,children:(0,C.jsx)(m.h,{asChild:!0,container:o,children:r})})})};Y.displayName=X;var G="MenuContent",[z,H]=S(G),q=r.forwardRef((e,n)=>{let t=U(G,e.__scopeMenu),{forceMount:r=t.forceMount,...o}=e,a=A(G,e.__scopeMenu),u=W(G,e.__scopeMenu);return(0,C.jsx)(T.Provider,{scope:e.__scopeMenu,children:(0,C.jsx)(g.z,{present:r||a.open,children:(0,C.jsx)(T.Slot,{scope:e.__scopeMenu,children:u.modal?(0,C.jsx)(J,{...o,ref:n}):(0,C.jsx)(Q,{...o,ref:n})})})})}),J=r.forwardRef((e,n)=>{let t=A(G,e.__scopeMenu),u=r.useRef(null),l=(0,a.e)(n,u);return r.useEffect(()=>{let e=u.current;if(e)return(0,x.Ry)(e)},[]),(0,C.jsx)($,{...e,ref:l,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),Q=r.forwardRef((e,n)=>{let t=A(G,e.__scopeMenu);return(0,C.jsx)($,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),$=r.forwardRef((e,n)=>{let{__scopeMenu:t,loop:u=!1,trapFocus:l,onOpenAutoFocus:i,onCloseAutoFocus:c,disableOutsidePointerEvents:d,onEntryFocus:v,onEscapeKeyDown:m,onPointerDownOutside:g,onFocusOutside:b,onInteractOutside:x,onDismiss:E,disableOutsideScroll:j,...D}=e,_=A(G,t),T=W(G,t),I=L(t),S=F(t),N=P(t),[O,K]=r.useState(null),V=r.useRef(null),B=(0,a.e)(n,V,_.onContentChange),X=r.useRef(0),Z=r.useRef(""),U=r.useRef(0),Y=r.useRef(null),H=r.useRef("right"),q=r.useRef(0),J=j?M.Z:r.Fragment,Q=j?{as:y.g7,allowPinchZoom:!0}:void 0,$=e=>{var n,t;let r=Z.current+e,o=N().filter(e=>!e.disabled),a=document.activeElement,u=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,l=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,a=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(a=a.filter(e=>e!==t));let u=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return u!==t?u:void 0}(o.map(e=>e.textValue),r,u),i=null===(t=o.find(e=>e.textValue===l))||void 0===t?void 0:t.ref.current;!function e(n){Z.current=n,window.clearTimeout(X.current),""!==n&&(X.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};r.useEffect(()=>()=>window.clearTimeout(X.current),[]),(0,f.EW)();let ee=r.useCallback(e=>{var n,t,r;return H.current===(null===(n=Y.current)||void 0===n?void 0:n.side)&&!!(r=null===(t=Y.current)||void 0===t?void 0:t.area)&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let u=n[e].x,l=n[e].y,i=n[a].x,c=n[a].y;l>r!=c>r&&t<(i-u)*(r-l)/(c-l)+u&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,C.jsx)(z,{scope:t,searchRef:Z,onItemEnter:r.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:r.useCallback(e=>{var n;ee(e)||(null===(n=V.current)||void 0===n||n.focus(),K(null))},[ee]),onTriggerLeave:r.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:U,onPointerGraceIntentChange:r.useCallback(e=>{Y.current=e},[]),children:(0,C.jsx)(J,{...Q,children:(0,C.jsx)(p.M,{asChild:!0,trapped:l,onMountAutoFocus:(0,o.M)(i,e=>{var n;e.preventDefault(),null===(n=V.current)||void 0===n||n.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:(0,C.jsx)(s.XB,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:m,onPointerDownOutside:g,onFocusOutside:b,onInteractOutside:x,onDismiss:E,children:(0,C.jsx)(w.fC,{asChild:!0,...S,dir:T.dir,orientation:"vertical",loop:u,currentTabStopId:O,onCurrentTabStopIdChange:K,onEntryFocus:(0,o.M)(v,e=>{T.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,C.jsx)(h.VY,{role:"menu","aria-orientation":"vertical","data-state":ej(_.open),"data-radix-menu-content":"",dir:T.dir,...I,...D,ref:B,style:{outline:"none",...D.style},onKeyDown:(0,o.M)(D.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&$(e.key));let o=V.current;if(e.target!==o||!k.includes(e.key))return;e.preventDefault();let a=N().filter(e=>!e.disabled).map(e=>e.ref.current);R.includes(e.key)&&a.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(a)}),onBlur:(0,o.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(X.current),Z.current="")}),onPointerMove:(0,o.M)(e.onPointerMove,eT(e=>{let n=e.target,t=q.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>q.current?"right":"left";H.current=n,q.current=e.clientX}}))})})})})})})});q.displayName=G;var ee=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,C.jsx)(i.WV.div,{role:"group",...r,ref:n})});ee.displayName="MenuGroup";var en=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,C.jsx)(i.WV.div,{...r,ref:n})});en.displayName="MenuLabel";var et="MenuItem",er="menu.itemSelect",eo=r.forwardRef((e,n)=>{let{disabled:t=!1,onSelect:u,...l}=e,c=r.useRef(null),d=W(et,e.__scopeMenu),s=H(et,e.__scopeMenu),f=(0,a.e)(n,c),p=r.useRef(!1);return(0,C.jsx)(ea,{...l,ref:f,disabled:t,onClick:(0,o.M)(e.onClick,()=>{let e=c.current;if(!t&&e){let n=new CustomEvent(er,{bubbles:!0,cancelable:!0});e.addEventListener(er,e=>null==u?void 0:u(e),{once:!0}),(0,i.jH)(e,n),n.defaultPrevented?p.current=!1:d.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),p.current=!0},onPointerUp:(0,o.M)(e.onPointerUp,e=>{var n;p.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let n=""!==s.searchRef.current;!t&&(!n||" "!==e.key)&&E.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eo.displayName=et;var ea=r.forwardRef((e,n)=>{let{__scopeMenu:t,disabled:u=!1,textValue:l,...c}=e,d=H(et,t),s=F(t),f=r.useRef(null),p=(0,a.e)(n,f),[v,h]=r.useState(!1),[m,g]=r.useState("");return r.useEffect(()=>{let e=f.current;if(e){var n;g((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[c.children]),(0,C.jsx)(T.ItemSlot,{scope:t,disabled:u,textValue:null!=l?l:m,children:(0,C.jsx)(w.ck,{asChild:!0,...s,focusable:!u,children:(0,C.jsx)(i.WV.div,{role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":u||void 0,"data-disabled":u?"":void 0,...c,ref:p,onPointerMove:(0,o.M)(e.onPointerMove,eT(e=>{u?d.onItemLeave(e):(d.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eT(e=>d.onItemLeave(e))),onFocus:(0,o.M)(e.onFocus,()=>h(!0)),onBlur:(0,o.M)(e.onBlur,()=>h(!1))})})})}),eu=r.forwardRef((e,n)=>{let{checked:t=!1,onCheckedChange:r,...a}=e;return(0,C.jsx)(ev,{scope:e.__scopeMenu,checked:t,children:(0,C.jsx)(eo,{role:"menuitemcheckbox","aria-checked":eD(t)?"mixed":t,...a,ref:n,"data-state":e_(t),onSelect:(0,o.M)(a.onSelect,()=>null==r?void 0:r(!!eD(t)||!t),{checkForDefaultPrevented:!1})})})});eu.displayName="MenuCheckboxItem";var el="MenuRadioGroup",[ei,ec]=S(el,{value:void 0,onValueChange:()=>{}}),ed=r.forwardRef((e,n)=>{let{value:t,onValueChange:r,...o}=e,a=(0,b.W)(r);return(0,C.jsx)(ei,{scope:e.__scopeMenu,value:t,onValueChange:a,children:(0,C.jsx)(ee,{...o,ref:n})})});ed.displayName=el;var es="MenuRadioItem",ef=r.forwardRef((e,n)=>{let{value:t,...r}=e,a=ec(es,e.__scopeMenu),u=t===a.value;return(0,C.jsx)(ev,{scope:e.__scopeMenu,checked:u,children:(0,C.jsx)(eo,{role:"menuitemradio","aria-checked":u,...r,ref:n,"data-state":e_(u),onSelect:(0,o.M)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,t)},{checkForDefaultPrevented:!1})})})});ef.displayName=es;var ep="MenuItemIndicator",[ev,eh]=S(ep,{checked:!1}),em=r.forwardRef((e,n)=>{let{__scopeMenu:t,forceMount:r,...o}=e,a=eh(ep,t);return(0,C.jsx)(g.z,{present:r||eD(a.checked)||!0===a.checked,children:(0,C.jsx)(i.WV.span,{...o,ref:n,"data-state":e_(a.checked)})})});em.displayName=ep;var eg=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,C.jsx)(i.WV.div,{role:"separator","aria-orientation":"horizontal",...r,ref:n})});eg.displayName="MenuSeparator";var ew=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=L(t);return(0,C.jsx)(h.Eh,{...o,...r,ref:n})});ew.displayName="MenuArrow";var ey="MenuSub",[eb,ex]=S(ey),eM=e=>{let{__scopeMenu:n,children:t,open:o=!1,onOpenChange:a}=e,u=A(ey,n),l=L(n),[i,c]=r.useState(null),[d,s]=r.useState(null),f=(0,b.W)(a);return r.useEffect(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,C.jsx)(h.fC,{...l,children:(0,C.jsx)(O,{scope:n,open:o,onOpenChange:f,content:d,onContentChange:s,children:(0,C.jsx)(eb,{scope:n,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:i,onTriggerChange:c,children:t})})})};eM.displayName=ey;var eC="MenuSubTrigger",eE=r.forwardRef((e,n)=>{let t=A(eC,e.__scopeMenu),u=W(eC,e.__scopeMenu),l=ex(eC,e.__scopeMenu),i=H(eC,e.__scopeMenu),c=r.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:s}=i,f={__scopeMenu:e.__scopeMenu},p=r.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);return r.useEffect(()=>p,[p]),r.useEffect(()=>{let e=d.current;return()=>{window.clearTimeout(e),s(null)}},[d,s]),(0,C.jsx)(B,{asChild:!0,...f,children:(0,C.jsx)(ea,{id:l.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":l.contentId,"data-state":ej(t.open),...e,ref:(0,a.F)(n,l.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,o.M)(e.onPointerMove,eT(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||c.current||(i.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{t.onOpenChange(!0),p()},100))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eT(e=>{var n,r;p();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,u=o[a?"left":"right"],l=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:u,y:o.bottom}],side:n}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&j[u.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})})});eE.displayName=eC;var eR="MenuSubContent",ek=r.forwardRef((e,n)=>{let t=U(G,e.__scopeMenu),{forceMount:u=t.forceMount,...l}=e,i=A(G,e.__scopeMenu),c=W(G,e.__scopeMenu),d=ex(eR,e.__scopeMenu),s=r.useRef(null),f=(0,a.e)(n,s);return(0,C.jsx)(T.Provider,{scope:e.__scopeMenu,children:(0,C.jsx)(g.z,{present:u||i.open,children:(0,C.jsx)(T.Slot,{scope:e.__scopeMenu,children:(0,C.jsx)($,{id:d.contentId,"aria-labelledby":d.triggerId,...l,ref:f,align:"start",side:"rtl"===c.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;c.isUsingKeyboardRef.current&&(null===(n=s.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{e.target!==d.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.M)(e.onEscapeKeyDown,e=>{c.onClose(),e.preventDefault()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=D[c.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=d.trigger)||void 0===r||r.focus(),e.preventDefault()}})})})})})});function ej(e){return e?"open":"closed"}function eD(e){return"indeterminate"===e}function e_(e){return eD(e)?"indeterminate":e?"checked":"unchecked"}function eT(e){return n=>"mouse"===n.pointerType?e(n):void 0}ek.displayName=eR;var eP="DropdownMenu",[eI,eS]=(0,u.b)(eP,[N]),eN=N(),[eL,eF]=eI(eP),eO=e=>{let{__scopeDropdownMenu:n,children:t,dir:o,open:a,defaultOpen:u,onOpenChange:i,modal:c=!0}=e,d=eN(n),s=r.useRef(null),[f=!1,p]=(0,l.T)({prop:a,defaultProp:u,onChange:i});return(0,C.jsx)(eL,{scope:n,triggerId:(0,v.M)(),triggerRef:s,contentId:(0,v.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:c,children:(0,C.jsx)(V,{...d,open:f,onOpenChange:p,dir:o,modal:c,children:t})})};eO.displayName=eP;var eA="DropdownMenuTrigger",eK=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,disabled:r=!1,...u}=e,l=eF(eA,t),c=eN(t);return(0,C.jsx)(B,{asChild:!0,...c,children:(0,C.jsx)(i.WV.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...u,ref:(0,a.F)(n,l.triggerRef),onPointerDown:(0,o.M)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(l.onOpenToggle(),l.open||e.preventDefault())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&l.onOpenToggle(),"ArrowDown"===e.key&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});eK.displayName=eA;var eW=e=>{let{__scopeDropdownMenu:n,...t}=e,r=eN(n);return(0,C.jsx)(Y,{...r,...t})};eW.displayName="DropdownMenuPortal";var eV="DropdownMenuContent",eB=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eF(eV,t),l=eN(t),i=r.useRef(!1);return(0,C.jsx)(q,{id:u.contentId,"aria-labelledby":u.triggerId,...l,...a,ref:n,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=u.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!u.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eB.displayName=eV;var eX=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(ee,{...o,...r,ref:n})});eX.displayName="DropdownMenuGroup";var eZ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(en,{...o,...r,ref:n})});eZ.displayName="DropdownMenuLabel";var eU=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(eo,{...o,...r,ref:n})});eU.displayName="DropdownMenuItem";var eY=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(eu,{...o,...r,ref:n})});eY.displayName="DropdownMenuCheckboxItem";var eG=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(ed,{...o,...r,ref:n})});eG.displayName="DropdownMenuRadioGroup";var ez=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(ef,{...o,...r,ref:n})});ez.displayName="DropdownMenuRadioItem";var eH=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(em,{...o,...r,ref:n})});eH.displayName="DropdownMenuItemIndicator";var eq=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(eg,{...o,...r,ref:n})});eq.displayName="DropdownMenuSeparator",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(ew,{...o,...r,ref:n})}).displayName="DropdownMenuArrow";var eJ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(eE,{...o,...r,ref:n})});eJ.displayName="DropdownMenuSubTrigger";var eQ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,C.jsx)(ek,{...o,...r,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eQ.displayName="DropdownMenuSubContent";var e$=eO,e0=eK,e1=eW,e6=eB,e2=eX,e5=eZ,e7=eU,e4=eY,e8=eG,e3=ez,e9=eH,ne=eq,nn=e=>{let{__scopeDropdownMenu:n,children:t,open:r,onOpenChange:o,defaultOpen:a}=e,u=eN(n),[i=!1,c]=(0,l.T)({prop:r,defaultProp:a,onChange:o});return(0,C.jsx)(eM,{...u,open:i,onOpenChange:c,children:t})},nt=eJ,nr=eQ},20077:function(e,n,t){t.d(n,{EW:function(){return a}});var r=t(23506),o=0;function a(){r.useEffect(()=>{var e,n;let t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=t[0])&&void 0!==e?e:u()),document.body.insertAdjacentElement("beforeend",null!==(n=t[1])&&void 0!==n?n:u()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function u(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},48778:function(e,n,t){let r;t.d(n,{M:function(){return f}});var o=t(23506),a=t(40296),u=t(666),l=t(15483),i=t(68098),c="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=o.forwardRef((e,n)=>{let{loop:t=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...w}=e,[y,b]=o.useState(null),x=(0,l.W)(f),M=(0,l.W)(g),C=o.useRef(null),E=(0,a.e)(n,e=>b(e)),R=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(R.paused||!y)return;let n=e.target;y.contains(n)?C.current=n:h(C.current,{select:!0})},n=function(e){if(R.paused||!y)return;let n=e.relatedTarget;null===n||y.contains(n)||h(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",n);let t=new MutationObserver(function(e){if(document.activeElement===document.body)for(let n of e)n.removedNodes.length>0&&h(y)});return y&&t.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",n),t.disconnect()}}},[r,y,R.paused]),o.useEffect(()=>{if(y){m.add(R);let e=document.activeElement;if(!y.contains(e)){let n=new CustomEvent(c,s);y.addEventListener(c,x),y.dispatchEvent(n),n.defaultPrevented||(function(e){let{select:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=document.activeElement;for(let r of e)if(h(r,{select:n}),document.activeElement!==t)return}(p(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&h(y))}return()=>{y.removeEventListener(c,x),setTimeout(()=>{let n=new CustomEvent(d,s);y.addEventListener(d,M),y.dispatchEvent(n),n.defaultPrevented||h(null!=e?e:document.body,{select:!0}),y.removeEventListener(d,M),m.remove(R)},0)}}},[y,x,M,R]);let k=o.useCallback(e=>{if(!t&&!r||R.paused)return;let n="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(n&&o){let n=e.currentTarget,[r,a]=function(e){let n=p(e);return[v(n,e),v(n.reverse(),e)]}(n);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),t&&h(a,{select:!0})):(e.preventDefault(),t&&h(r,{select:!0})):o===n&&e.preventDefault()}},[t,r,R.paused]);return(0,i.jsx)(u.WV.div,{tabIndex:-1,...w,ref:E,onKeyDown:k})});function p(e){let n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let n="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||n?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function v(e,n){for(let t of e)if(!function(e,n){let{upTo:t}=n;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,{upTo:n}))return t}function h(e){let{select:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var t;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(t=e)instanceof HTMLInputElement&&"select"in t&&n&&e.select()}}f.displayName="FocusScope";var m=(r=[],{add(e){let n=r[0];e!==n&&(null==n||n.pause()),(r=g(r,e)).unshift(e)},remove(e){var n;null===(n=(r=g(r,e))[0])||void 0===n||n.resume()}});function g(e,n){let t=[...e],r=t.indexOf(n);return -1!==r&&t.splice(r,1),t}}}]);