import{e as h,h as T,m as b,b as s,i as x,c as o,S as I,F as v,t as S,ag as w,ae as C,am as D,an as _,ao as $,ap as B}from"./index-JAmVxnob.js";import{u as P}from"./reporting-designer-try-DlhyvfJv.js";import{B as j}from"./button-Czybck0e.js";import"./index-AxBFuKLQ.js";import"./use-local-storage-Dn1wHuvy.js";var y=S('<div><div class="flex flex-col justify-between"><div>');const l={textTool:w,rectangleTool:C,imageTool:D,tableTool:_,default:$,chartTool:B};function O(c){const[i,g]=h(c,["class"]),[p]=P(),n=()=>p.documentState.controls,u=(e,a)=>{var r;a!==null&&((r=e.dataTransfer)==null||r.setData("componentType",a))};return(()=>{var e=y(),a=e.firstChild,r=a.firstChild;return T(e,b({get class(){return s("flex",i.class)}},g),!1,!0),x(r,o(v,{get each(){return Object.keys(n())},children:m=>{const t=n()[m];if(!t)return!1;const d=l[t.icon]||l.default;return o(I,{get when(){return!t.isDisabled},get children(){return o(j,{get class(){return s(t.icon,"w-[32px] h-[32px] m-[6px]")},variant:"buttonToolbar",size:"icon",get draggable(){return t.draggable},onDragStart:f=>{t.draggable&&u(f,t.control)},get children(){return o(d,{class:"h-5 w-5"})}})}})}})),e})()}export{O as default};
