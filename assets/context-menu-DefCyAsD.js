import{e as m,c as i,m as d,ab as E,f as X,W as Y,a6 as z,a9 as H,n as W,p as B,b as v}from"./index-JAmVxnob.js";import{u as w,p as J,q as K,o as N,M as R,a as S,b as O,c as T,d as M,e as y,f as A,g as D,h as g,i as G,j as L,S as k,k as _,l as U,m as $}from"./T4C3DMHT-D76ZL_ho.js";import{u as Q,c as V,P as F}from"./index-Cspn8q05.js";import{_ as Z,s as j,y as ee,E as p}from"./index-AxBFuKLQ.js";var te={};Z(te,{Arrow:()=>F,CheckboxItem:()=>R,Content:()=>b,ContextMenu:()=>re,Group:()=>S,GroupLabel:()=>O,Icon:()=>T,Item:()=>M,ItemDescription:()=>y,ItemIndicator:()=>A,ItemLabel:()=>D,Portal:()=>g,RadioGroup:()=>G,RadioItem:()=>L,Root:()=>I,Separator:()=>k,Sub:()=>_,SubContent:()=>U,SubTrigger:()=>$,Trigger:()=>P});function b(r){const a=w(),[t,c]=m(r,["onCloseAutoFocus","onInteractOutside"]);let u=!1;return i(J,d({onCloseAutoFocus:s=>{var o;(o=t.onCloseAutoFocus)==null||o.call(t,s),!s.defaultPrevented&&u&&s.preventDefault(),u=!1},onInteractOutside:s=>{var o;(o=t.onInteractOutside)==null||o.call(t,s),!s.defaultPrevented&&!a.isModal()&&(u=!0)}},c))}var q=W();function ne(){return B(q)}function oe(){const r=ne();if(r===void 0)throw new Error("[kobalte]: `useContextMenuContext` must be used within a `ContextMenu` component");return r}function I(r){const a=`contextmenu-${E()}`,{direction:t}=Q(),c=j({id:a,placement:t()==="rtl"?"left-start":"right-start",gutter:2,shift:2},r),[u,n]=m(c,["onOpenChange"]),[C,s]=X({x:0,y:0}),o=V({defaultOpen:!1,onOpenChange:l=>{var x;return(x=u.onOpenChange)==null?void 0:x.call(u,l)}}),f={setAnchorRect:s};return i(q.Provider,{value:f,get children(){return i(K,d({get open(){return o.isOpen()},get onOpenChange(){return o.setIsOpen},getAnchorRect:C},n))}})}function P(r){const a=w(),t=N(),c=oe(),u=j({id:a.generateId("trigger")},r),[n,C]=m(u,["ref","style","disabled","onContextMenu","onPointerDown","onPointerMove","onPointerCancel","onPointerUp"]);let s=0;const o=()=>{window.clearTimeout(s)};Y(()=>{o()});const f=e=>{if(n.disabled){p(e,n.onContextMenu);return}o(),e.preventDefault(),e.stopPropagation(),c.setAnchorRect({x:e.clientX,y:e.clientY}),t.isOpen()?t.focusContent():t.open(!0)},l=e=>e.pointerType==="touch"||e.pointerType==="pen";return i(ee,d({as:"div",ref(e){var h=z(t.setTriggerRef,n.ref);typeof h=="function"&&h(e)},get style(){return H({"-webkit-touch-callout":"none"},n.style)},get"data-disabled"(){return n.disabled?"":void 0},onContextMenu:f,onPointerDown:e=>{p(e,n.onPointerDown),!n.disabled&&l(e)&&(o(),c.setAnchorRect({x:e.clientX,y:e.clientY}),s=window.setTimeout(()=>t.open(!1),700))},onPointerMove:e=>{p(e,n.onPointerMove),!n.disabled&&l(e)&&o()},onPointerCancel:e=>{p(e,n.onPointerCancel),!n.disabled&&l(e)&&o()},onPointerUp:e=>{p(e,n.onPointerUp),!n.disabled&&l(e)&&o()}},()=>t.dataset(),C))}var re=Object.assign(I,{Arrow:F,CheckboxItem:R,Content:b,Group:S,GroupLabel:O,Icon:T,Item:M,ItemDescription:y,ItemIndicator:A,ItemLabel:D,Portal:g,RadioGroup:G,RadioItem:L,Separator:k,Sub:_,SubContent:U,SubTrigger:$,Trigger:P});const pe=P,me=g,Ce=r=>i(I,d({gutter:4},r)),ge=r=>{const[a,t]=m(r,["class"]);return i(g,{get children(){return i(b,d({get class(){return v("z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in",a.class)}},t))}})},fe=r=>{const[a,t]=m(r,["class"]);return i(M,d({get class(){return v("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a.class)}},t))};export{pe as C,ge as a,fe as b,Ce as c,me as d};
