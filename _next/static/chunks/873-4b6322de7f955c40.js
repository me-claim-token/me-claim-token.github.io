!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="992c9a63-8ad0-46d4-9e3b-9736e1b35afc",e._sentryDebugIdIdentifier="sentry-dbid-992c9a63-8ad0-46d4-9e3b-9736e1b35afc")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{36685:function(e,n,t){t.d(n,{Z:function(){return r}});let r=(0,t(60374).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},20152:function(e,n,t){t.d(n,{Av:function(){return a},pF:function(){return r},xv:function(){return c},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",c="with-scroll-bars-hidden",a="--removed-body-scroll-bar-size"},53787:function(e,n,t){t.d(n,{jp:function(){return g}});var r=t(23506),o=t(34080),c=t(20152),a={left:0,top:0,right:0,gap:0},i=function(e){return parseInt(e||"",10)||0},u=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[i(t),i(r),i(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return a;var n=u(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},f=(0,o.Ws)(),d="data-scroll-locked",s=function(e,n,t,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===t&&(t="margin"),"\n  .".concat(c.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c.pF," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(c.zi," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(c.pF," .").concat(c.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(c.zi," .").concat(c.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(c.Av,": ").concat(u,"px;\n  }\n")},p=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},v=function(){r.useEffect(function(){return document.body.setAttribute(d,(p()+1).toString()),function(){var e=p()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},g=function(e){var n=e.noRelative,t=e.noImportant,o=e.gapMode,c=void 0===o?"margin":o;v();var a=r.useMemo(function(){return l(c)},[c]);return r.createElement(f,{styles:s(a,!n,c,t?"":"!important")})}},23410:function(e,n,t){t.d(n,{Ws:function(){return i}});var r=t(23506),o=t(16712),c=function(){var e=0,n=null;return{add:function(t){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=(0,o.V)();return n&&e.setAttribute("nonce",n),e}())){var r,c;(r=n).styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),c=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},a=function(){var e=c();return function(n,t){r.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},i=function(){var e=a();return function(n){return e(n.styles,n.dynamic),null}}},30509:function(e,n,t){t.d(n,{q:function(){return i}});var r=t(23506);function o(e,n){return"function"==typeof e?e(n):e&&(e.current=n),e}var c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,a=new WeakMap;function i(e,n){var t,i,u,l=(t=n||null,i=function(n){return e.forEach(function(e){return o(e,n)})},(u=(0,r.useState)(function(){return{value:t,callback:i,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=i,u.facade);return c(function(){var n=a.get(l);if(n){var t=new Set(n),r=new Set(e),c=l.current;t.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){t.has(e)||o(e,c)})}a.set(l,e)},[e]),l}},42169:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(23506),o=t(12089),c=t(40296),a=t(1430),i=t(68098);function u(e){let n=e+"CollectionProvider",[t,u]=(0,o.b)(n),[l,f]=t(n,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:n,children:t}=e,o=r.useRef(null),c=r.useRef(new Map).current;return(0,i.jsx)(l,{scope:n,itemMap:c,collectionRef:o,children:t})};d.displayName=n;let s=e+"CollectionSlot",p=r.forwardRef((e,n)=>{let{scope:t,children:r}=e,o=f(s,t),u=(0,c.e)(n,o.collectionRef);return(0,i.jsx)(a.g7,{ref:u,children:r})});p.displayName=s;let v=e+"CollectionItemSlot",g="data-radix-collection-item",m=r.forwardRef((e,n)=>{let{scope:t,children:o,...u}=e,l=r.useRef(null),d=(0,c.e)(n,l),s=f(v,t);return r.useEffect(()=>(s.itemMap.set(l,{ref:l,...u}),()=>void s.itemMap.delete(l))),(0,i.jsx)(a.g7,{[g]:"",ref:d,children:o})});return m.displayName=v,[{Provider:d,Slot:p,ItemSlot:m},function(n){let t=f(e+"CollectionConsumer",n);return r.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let n=Array.from(e.querySelectorAll("[".concat(g,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>n.indexOf(e.ref.current)-n.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},u]}},51554:function(e,n,t){t.d(n,{Pc:function(){return x},ck:function(){return T},fC:function(){return k}});var r=t(23506),o=t(27376),c=t(42169),a=t(40296),i=t(12089),u=t(93039),l=t(666),f=t(15483),d=t(14869),s=t(81674),p=t(68098),v="rovingFocusGroup.onEntryFocus",g={bubbles:!1,cancelable:!0},m="RovingFocusGroup",[b,h,y]=(0,c.B)(m),[w,x]=(0,i.b)(m,[y]),[R,E]=w(m),A=r.forwardRef((e,n)=>(0,p.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(I,{...e,ref:n})})}));A.displayName=m;var I=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:c,loop:i=!1,dir:u,currentTabStopId:m,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:w,preventScrollOnEntryFocus:x=!1,...E}=e,A=r.useRef(null),I=(0,a.e)(n,A),M=(0,s.gm)(u),[S=null,C]=(0,d.T)({prop:m,defaultProp:b,onChange:y}),[k,T]=r.useState(!1),D=(0,f.W)(w),j=h(t),_=r.useRef(!1),[N,L]=r.useState(0);return r.useEffect(()=>{let e=A.current;if(e)return e.addEventListener(v,D),()=>e.removeEventListener(v,D)},[D]),(0,p.jsx)(R,{scope:t,orientation:c,dir:M,loop:i,currentTabStopId:S,onItemFocus:r.useCallback(e=>C(e),[C]),onItemShiftTab:r.useCallback(()=>T(!0),[]),onFocusableItemAdd:r.useCallback(()=>L(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>L(e=>e-1),[]),children:(0,p.jsx)(l.WV.div,{tabIndex:k||0===N?-1:0,"data-orientation":c,...E,ref:I,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let n=!_.current;if(e.target===e.currentTarget&&n&&!k){let n=new CustomEvent(v,g);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=j().filter(e=>e.focusable);F([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),x)}}_.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>T(!1))})})}),M="RovingFocusGroupItem",S=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:c=!0,active:a=!1,tabStopId:i,...f}=e,d=(0,u.M)(),s=i||d,v=E(M,t),g=v.currentTabStopId===s,m=h(t),{onFocusableItemAdd:y,onFocusableItemRemove:w}=v;return r.useEffect(()=>{if(c)return y(),()=>w()},[c,y,w]),(0,p.jsx)(b.ItemSlot,{scope:t,id:s,focusable:c,active:a,children:(0,p.jsx)(l.WV.span,{tabIndex:g?0:-1,"data-orientation":v.orientation,...f,ref:n,onMouseDown:(0,o.M)(e.onMouseDown,e=>{c?v.onItemFocus(s):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>v.onItemFocus(s)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return C[o]}(e,v.orientation,v.dir);if(void 0!==n){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)o.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&o.reverse();let c=o.indexOf(e.currentTarget);o=v.loop?(t=o,r=c+1,t.map((e,n)=>t[(r+n)%t.length])):o.slice(c+1)}setTimeout(()=>F(o))}})})})});S.displayName=M;var C={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}var k=A,T=S}}]);