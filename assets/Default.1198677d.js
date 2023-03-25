import{p as Q,i as D,c as p,r as M,a as A,g as ee,o as ve,b as k,d as de,e as te,f as me,h as fe,j as ye,k as ge,l as z,u as be,t as Y,m as c,n as oe,I as he,q as K,s as Ie,w as V,v as C,x as Ve,y as ae,z as _e,A as xe,B as Se}from"./index.f50e0087.js";import{m as we,u as ne,V as G,a as Te,b as Be,c as $e,d as U}from"./VTabs.7c31b1bf.js";import{u as Ae,a as L,V as ze,b as Le,m as Re}from"./VBtn.99252039.js";const H=Symbol.for("vuetify:layout"),se=Symbol.for("vuetify:layout-item"),J=1e3,Pe=Q({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ke=Q({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ce(){const e=D(H);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Me(e){var v;const o=D(H);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${de()}`,a=ee("useLayoutItem");te(se,{id:t});const s=M(!1);me(()=>s.value=!0),fe(()=>s.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:r}=o.register(a,{...e,active:p(()=>s.value?!1:e.active.value),id:t});return ye(()=>o.unregister(t)),{layoutItemStyles:u,layoutRect:o.layoutRect,layoutItemScrimStyles:r}}const He=(e,o,t,a)=>{let s={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...s}}];for(const r of e){const v=o.get(r),d=t.get(r),h=a.get(r);if(!v||!d||!h)continue;const f={...s,[v.value]:parseInt(s[v.value],10)+(h.value?parseInt(d.value,10):0)};u.push({id:r,layer:f}),s=f}return u};function Ne(e){const o=D(H,null),t=p(()=>o?o.rootZIndex.value-100:J),a=M([]),s=A(new Map),u=A(new Map),r=A(new Map),v=A(new Map),d=A(new Map),{resizeRef:h,contentRect:f}=Ae(),R=p(()=>{var n;const l=new Map,m=(n=e.overlaps)!=null?n:[];for(const b of m.filter(i=>i.includes(":"))){const[i,y]=b.split(":");if(!a.value.includes(i)||!a.value.includes(y))continue;const _=s.get(i),T=s.get(y),B=u.get(i),P=u.get(y);!_||!T||!B||!P||(l.set(y,{position:_.value,amount:parseInt(B.value,10)}),l.set(i,{position:T.value,amount:-parseInt(P.value,10)}))}return l}),I=p(()=>{const l=[...new Set([...r.values()].map(n=>n.value))].sort((n,b)=>n-b),m=[];for(const n of l){const b=a.value.filter(i=>{var y;return((y=r.get(i))==null?void 0:y.value)===n});m.push(...b)}return He(m,s,u,v)}),x=p(()=>!Array.from(d.values()).some(l=>l.value)),S=p(()=>I.value[I.value.length-1].layer),le=p(()=>({"--v-layout-left":k(S.value.left),"--v-layout-right":k(S.value.right),"--v-layout-top":k(S.value.top),"--v-layout-bottom":k(S.value.bottom),...x.value?void 0:{transition:"none"}})),w=p(()=>I.value.slice(1).map((l,m)=>{let{id:n}=l;const{layer:b}=I.value[m],i=u.get(n),y=s.get(n);return{id:n,...b,size:Number(i.value),position:y.value}})),Z=l=>w.value.find(m=>m.id===l),N=ee("createLayout"),q=M(!1);ve(()=>{q.value=!0}),te(H,{register:(l,m)=>{let{id:n,order:b,position:i,layoutSize:y,elementSize:_,active:T,disableTransitions:B,absolute:P}=m;r.set(n,b),s.set(n,i),u.set(n,y),v.set(n,T),B&&d.set(n,B);const X=ge(se,N==null?void 0:N.vnode).indexOf(l);X>-1?a.value.splice(X,0,n):a.value.push(n);const F=p(()=>w.value.findIndex($=>$.id===n)),O=p(()=>t.value+I.value.length*2-F.value*2),re=p(()=>{const $=i.value==="left"||i.value==="right",E=i.value==="right",pe=i.value==="bottom",W={[i.value]:0,zIndex:O.value,transform:`translate${$?"X":"Y"}(${(T.value?0:-110)*(E||pe?-1:1)}%)`,position:P.value||t.value!==J?"absolute":"fixed",...x.value?void 0:{transition:"none"}};if(!q.value)return W;const g=w.value[F.value];if(!g)throw new Error(`[Vuetify] Could not find layout item "${n}"`);const j=R.value.get(n);return j&&(g[j.position]+=j.amount),{...W,height:$?`calc(100% - ${g.top}px - ${g.bottom}px)`:_.value?`${_.value}px`:void 0,left:E?void 0:`${g.left}px`,right:E?`${g.right}px`:void 0,top:i.value!=="bottom"?`${g.top}px`:void 0,bottom:i.value!=="top"?`${g.bottom}px`:void 0,width:$?_.value?`${_.value}px`:void 0:`calc(100% - ${g.left}px - ${g.right}px)`}}),ce=p(()=>({zIndex:O.value-1}));return{layoutItemStyles:re,layoutItemScrimStyles:ce,zIndex:O}},unregister:l=>{r.delete(l),s.delete(l),u.delete(l),v.delete(l),d.delete(l),a.value=a.value.filter(m=>m!==l)},mainRect:S,mainStyles:le,getLayoutItem:Z,items:w,layoutRect:f,rootZIndex:t});const ue=p(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ie=p(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:ue,layoutStyles:ie,getLayoutItem:Z,items:w,layoutRect:f,layoutRef:h}}const Oe=z()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...we(),...ke(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=M(),s=be(e,"modelValue"),u=p(()=>{var f,R,I,x;const d=(R=(f=a.value)==null?void 0:f.contentHeight)!=null?R:0,h=(x=(I=a.value)==null?void 0:I.extensionHeight)!=null?x:0;return d+h}),{ssrBootStyles:r}=ne(),{layoutItemStyles:v}=Me({id:e.name,order:p(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:u,elementSize:u,active:s,absolute:Y(e,"absolute")});return L(()=>{const[d]=G.filterProps(e);return c(G,oe({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...r.value}},d),t)}),{}}}),Ee=z()({name:"VAppBarNavIcon",props:{icon:{type:he,default:"$menu"}},setup(e,o){let{slots:t}=o;return L(()=>c(ze,{class:"v-app-bar-nav-icon",icon:e.icon},t)),{}}}),je=z()({name:"VAppBarTitle",props:Te(),setup(e,o){let{slots:t}=o;return L(()=>c(Be,oe(e,{class:"v-app-bar-title"}),t)),{}}}),Ue={__name:"AppBar",setup(e){return(o,t)=>(K(),Ie("div",null,[c(Oe,{elevation:3},{default:V(()=>[c(je,null,{default:V(()=>[c(Le,{icon:"mdi-circle-slice-4"}),C(" Iwasaki Takumi ")]),_:1}),c(Ee),c($e,{modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=a=>o.tab=a),color:"deep-purple-accent-4","align-tabs":"center"},{default:V(()=>[c(U,{value:"one1"},{default:V(()=>[C("Item One")]),_:1}),c(U,{value:"two1"},{default:V(()=>[C("Item Two")]),_:1}),c(U,{value:"three1"},{default:V(()=>[C("Item Three")]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}};const De=z()({name:"VMain",props:{scrollable:Boolean,...Re({tag:"main"})},setup(e,o){let{slots:t}=o;const{mainStyles:a}=Ce(),{ssrBootStyles:s}=ne();return L(()=>c(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[a.value,s.value]},{default:()=>{var u,r;return[e.scrollable?c("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),Ke={__name:"View",setup(e){return(o,t)=>{const a=Ve("router-view");return K(),ae(De,null,{default:V(()=>[c(a)]),_:1})}}};const Ze=z()({name:"VApp",props:{...Pe({fullHeight:!0}),..._e()},setup(e,o){let{slots:t}=o;const a=xe(e),{layoutClasses:s,layoutStyles:u,getLayoutItem:r,items:v,layoutRef:d}=Ne(e),{rtlClasses:h}=Se();return L(()=>{var f;return c("div",{ref:d,class:["v-application",a.themeClasses.value,s.value,h.value],style:u.value},[c("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:r,items:v,theme:a}}}),Ye={__name:"Default",setup(e){return(o,t)=>(K(),ae(Ze,null,{default:V(()=>[c(Ue),c(Ke)]),_:1}))}};export{Ye as default};
