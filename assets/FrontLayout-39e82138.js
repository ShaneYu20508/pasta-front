import{p as L,m as M,a as U,g as p,u as N,c as o,b as te,d as ae,e as W,f as j,h as G,t as I,i as oe,j as le,k as J,l as ne,n as ve,s as x,o as v,q as ge,V as me,r as Y,v as F,w as fe,x as z,y as he,z as $,A as be,B as ye,C as se,D as Ve,E as ke,F as re,G as H,H as Se,I as xe,J as E,K as _e,L as Be,M as Ce,N as we,O as Te,P as Ie,Q as Le,R as pe,S as Ne,T as Pe,U as Ae,W as q,X as Re,_ as Fe,Y as Ee,Z as He,$ as $e,a0 as De,a1 as ze,a2 as h,a3 as C,a4 as k,a5 as d,a6 as w,a7 as T,a8 as O,a9 as D,aa as R,ab as Me,ac as ie,ad as X,ae as Ue,af as Ye,ag as Oe}from"./index-679bad59.js";import{V as Xe,a as qe}from"./VNavigationDrawer-55f9a993.js";import{u as We}from"./ssrBoot-0f8d64ba.js";import{V as K,a as Q,b as je}from"./VList-ece80feb.js";import{V as Ge,a as Je,b as Ke}from"./VRow-365b3ca4.js";import"./VDivider-1f4be66a.js";const ue=L({text:String,...M(),...U()},"VToolbarTitle"),ce=p()({name:"VToolbarTitle",props:ue(),setup(e,c){let{slots:t}=c;return N(()=>{const m=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[m&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Qe=[null,"prominent","default","comfortable","compact"],de=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Qe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...te(),...M(),...ae(),...W(),...U({tag:"header"}),...j()},"VToolbar"),Z=p()({name:"VToolbar",props:de(),setup(e,c){var s;let{slots:t}=c;const{backgroundColorClasses:m,backgroundColorStyles:a}=G(I(e,"color")),{borderClasses:n}=oe(e),{elevationClasses:b}=le(e),{roundedClasses:f}=J(e),{themeClasses:V}=ne(e),{rtlClasses:y}=ve(),r=x(!!(e.extended||(s=t.extension)!=null&&s.call(t))),g=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),i=v(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),N(()=>{var u;const l=!!(e.title||t.title),S=!!(t.image||e.image),_=(u=t.extension)==null?void 0:u.call(t);return r.value=!!(e.extended||_),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},m.value,n.value,b.value,f.value,V.value,y.value,e.class],style:[a.value,e.style]},{default:()=>[S&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(me,{key:"image-img",cover:!0,src:e.image},null)]),o(Y,{defaults:{VTabs:{height:F(g.value)}}},{default:()=>{var B,P,A;return[o("div",{class:"v-toolbar__content",style:{height:F(g.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(B=t.prepend)==null?void 0:B.call(t)]),l&&o(ce,{key:"title",text:e.title},{text:t.title}),(P=t.default)==null?void 0:P.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}}),o(Y,{defaults:{VTabs:{height:F(i.value)}}},{default:()=>[o(fe,null,{default:()=>[r.value&&o("div",{class:"v-toolbar__extension",style:{height:F(i.value)}},[_])]})]})]})}),{contentHeight:g,extensionHeight:i}}}),Ze=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function et(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=c;let m=0;const a=z(null),n=x(0),b=x(0),f=x(0),V=x(!1),y=x(!1),r=v(()=>Number(e.scrollThreshold)),g=v(()=>he((r.value-n.value)/r.value||0)),i=()=>{const s=a.value;!s||t&&!t.value||(m=n.value,n.value="window"in s?s.pageYOffset:s.scrollTop,y.value=n.value<m,f.value=Math.abs(n.value-r.value))};return $(y,()=>{b.value=b.value||n.value}),$(V,()=>{b.value=0}),be(()=>{$(()=>e.scrollTarget,s=>{var S;const l=s?document.querySelector(s):window;l&&l!==a.value&&((S=a.value)==null||S.removeEventListener("scroll",i),a.value=l,a.value.addEventListener("scroll",i,{passive:!0}))},{immediate:!0})}),ye(()=>{var s;(s=a.value)==null||s.removeEventListener("scroll",i)}),t&&$(t,i,{immediate:!0}),{scrollThreshold:r,currentScroll:n,currentThreshold:f,isScrollActive:V,scrollRatio:g,isScrollingUp:y,savedScroll:b}}const tt=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...de(),...se(),...Ze(),height:{type:[Number,String],default:64}},"VAppBar"),at=p()({name:"VAppBar",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;const m=z(),a=Ve(e,"modelValue"),n=v(()=>{var B;const u=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),b=v(()=>{const u=n.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!a.value}),{currentScroll:f,scrollThreshold:V,isScrollingUp:y,scrollRatio:r}=et(e,{canScroll:b}),g=v(()=>e.collapse||n.value.collapse&&(n.value.inverted?r.value>0:r.value===0)),i=v(()=>e.flat||n.value.elevate&&(n.value.inverted?f.value>0:f.value===0)),s=v(()=>n.value.fadeImage?n.value.inverted?1-r.value:r.value:void 0),l=v(()=>{var P,A;if(n.value.hide&&n.value.inverted)return 0;const u=((P=m.value)==null?void 0:P.contentHeight)??0,B=((A=m.value)==null?void 0:A.extensionHeight)??0;return u+B});ke(v(()=>!!e.scrollBehavior),()=>{Se(()=>{n.value.hide?n.value.inverted?a.value=f.value>V.value:a.value=y.value||f.value<V.value:a.value=!0})});const{ssrBootStyles:S}=We(),{layoutItemStyles:_}=re({id:e.name,order:v(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:l,elementSize:x(void 0),active:a,absolute:I(e,"absolute")});return N(()=>{const u=Z.filterProps(e);return o(Z,H({ref:m,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":s.value,height:void 0,...S.value},e.style]},u,{collapse:g.value,flat:i.value}),t)}),{}}}),ot=L({...xe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),lt=p()({name:"VAppBarNavIcon",props:ot(),setup(e,c){let{slots:t}=c;return N(()=>o(E,H(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),nt=p()({name:"VAppBarTitle",props:ue(),setup(e,c){let{slots:t}=c;return N(()=>o(ce,H(e,{class:"v-app-bar-title"}),t)),{}}});const st=L({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:_e,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...M(),...Be({location:"top end"}),...W(),...U(),...j(),...Ce({transition:"scale-rotate-transition"})},"VBadge"),ee=p()({name:"VBadge",inheritAttrs:!1,props:st(),setup(e,c){const{backgroundColorClasses:t,backgroundColorStyles:m}=G(I(e,"color")),{roundedClasses:a}=J(e),{t:n}=we(),{textColorClasses:b,textColorStyles:f}=Te(I(e,"textColor")),{themeClasses:V}=Ie(),{locationStyles:y}=Le(e,!0,r=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(r)?+(e.offsetY??0):["left","right"].includes(r)?+(e.offsetX??0):0));return N(()=>{const r=Number(e.content),g=!e.max||isNaN(r)?e.content:r<=+e.max?r:`${e.max}+`,[i,s]=pe(c.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return o(e.tag,H({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},s,{style:e.style}),{default:()=>{var l,S;return[o("div",{class:"v-badge__wrapper"},[(S=(l=c.slots).default)==null?void 0:S.call(l),o(Ne,{transition:e.transition},{default:()=>{var _,u;return[Pe(o("span",H({class:["v-badge__badge",V.value,t.value,a.value,b.value],style:[m.value,f.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":n(e.label,r),"aria-live":"polite",role:"status"},i),[e.dot?void 0:c.slots.badge?(u=(_=c.slots).badge)==null?void 0:u.call(_):e.icon?o(q,{icon:e.icon},null):g]),[[Ae,e.modelValue]])]}})])]}})}),{}}});const rt=L({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...te(),...M(),...ae(),...se(),...W(),...U({tag:"footer"}),...j()},"VFooter"),it=p()({name:"VFooter",props:rt(),setup(e,c){let{slots:t}=c;const{themeClasses:m}=ne(e),{backgroundColorClasses:a,backgroundColorStyles:n}=G(I(e,"color")),{borderClasses:b}=oe(e),{elevationClasses:f}=le(e),{roundedClasses:V}=J(e),y=x(32),{resizeRef:r}=Re(s=>{s.length&&(y.value=s[0].target.clientHeight)}),g=v(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:i}=re({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:g,elementSize:v(()=>e.height==="auto"?void 0:g.value),active:v(()=>e.app),absolute:I(e,"absolute")});return N(()=>o(e.tag,{ref:r,class:["v-footer",m.value,a.value,b.value,f.value,V.value,e.class],style:[n.value,e.app?i.value:{height:F(e.height)},e.style]},t)),{}}});const ut=e=>(Ue("data-v-d806ec97"),e=e(),Ye(),e),ct=ut(()=>ie("strong",null,"義在家",-1)),dt={__name:"FrontLayout",setup(e){const{apiAuth:c}=Oe(),t=Ee(),m=He(),a=$e(),{mobile:n}=De(),b=v(()=>n.value),f=z(!1),V=v(()=>[{to:"/productintroduce",text:"產品介紹",show:!a.isLogin||a.isLogin},{to:"/products",text:"快速訂購",show:!a.isLogin||a.isLogin},{to:"/content",text:"聯繫我們",show:!a.isLogin||a.isLogin},{to:"/signup",text:"會員",show:!a.isLogin},{to:"/cart",text:"購物車",show:a.isLogin},{to:"/orders",text:"我的訂單",show:a.isLogin},{to:"/admin",text:"管理",show:a.isLogin&&a.isAdmin}]),y=async()=>{var g,i;try{await c.delete("/users/logout"),a.logout(),m({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),t.push("/")}catch(s){const l=((i=(g=s==null?void 0:s.response)==null?void 0:g.data)==null?void 0:i.message)||"發生錯誤，請稍後再試";m({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},r=z([{name:"mdi-facebook",link:"https://www.facebook.com/"},{name:"mdi-instagram",link:"https://www.instagram.com"}]);return(g,i)=>{const s=ze("RouterView");return h(),C(T,null,[b.value?(h(),k(Xe,{key:0,modelValue:f.value,"onUpdate:modelValue":i[0]||(i[0]=l=>f.value=l),temporary:"",location:"left"},{default:d(()=>[o(je,{nav:""},{default:d(()=>[(h(!0),C(T,null,O(V.value,l=>(h(),C(T,{key:l.to},[l.show?(h(),k(K,{key:0,to:l.to},{prepend:d(()=>[o(q,{icon:l.icon},null,8,["icon"])]),append:d(()=>[l.to==="/cart"?(h(),k(ee,{key:0,color:"error",content:D(a).cart,inline:""},null,8,["content"])):w("",!0)]),default:d(()=>[o(Q,null,{default:d(()=>[R(X(l.text),1)]),_:2},1024)]),_:2},1032,["to"])):w("",!0)],64))),128)),D(a).isLogin?(h(),k(K,{key:0,onClick:y},{prepend:d(()=>[o(q,{icon:"mdi-logout"})]),default:d(()=>[o(Q,null,{default:d(()=>[R("登出")]),_:1})]),_:1})):w("",!0)]),_:1})]),_:1},8,["modelValue"])):w("",!0),o(at,{color:"#008C45"},{default:d(()=>[o(Ge,{class:"d-flex align-center w-50"},{default:d(()=>[o(E,{to:"/",active:!1},{default:d(()=>[o(nt,null,{default:d(()=>[ct]),_:1})]),_:1}),o(Me),b.value?(h(),k(lt,{key:0,onClick:i[1]||(i[1]=l=>f.value=!0)})):(h(),C(T,{key:1},[(h(!0),C(T,null,O(V.value,l=>(h(),C(T,{key:l.to},[l.show?(h(),k(E,{key:0,class:"text-h6",to:l.to,"prepend-icon":l.icon},{default:d(()=>[R(X(l.text),1),l.to==="/cart"?(h(),k(ee,{key:0,color:"error",content:D(a).cart,floating:""},null,8,["content"])):w("",!0)]),_:2},1032,["to","prepend-icon"])):w("",!0)],64))),128)),D(a).isLogin?(h(),k(E,{key:0,class:"text-h6","prepend-icon":"mdi-logout",onClick:y},{default:d(()=>[R("登出")]),_:1})):w("",!0)],64))]),_:1})]),_:1}),o(qe,{style:{"min-height":"calc(100vh)"}},{default:d(()=>[(h(),k(s,{key:g.$route.path}))]),_:1}),o(it,{class:"px-0"},{default:d(()=>[o(Je,{class:"text-center bg-third"},{default:d(()=>[o(Ke,{cols:"12"},{default:d(()=>[ie("strong",null,[R("©"+X(new Date().getFullYear())+"   -   義在家 pasta straight home",1),(h(!0),C(T,null,O(r.value,l=>(h(),k(E,{class:"ms-4",key:l,icon:l.name,href:l.link,target:"_blank",variant:"plain"},null,8,["icon","href"]))),128))])]),_:1})]),_:1})]),_:1})],64)}}},yt=Fe(dt,[["__scopeId","data-v-d806ec97"]]);export{yt as default};