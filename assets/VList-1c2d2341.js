import{aE as G,B as M,aA as j,bY as _,L as A,p as L,a4 as ne,D as f,aK as ce,bk as Ke,aW as He,bZ as Ue,I as B,m as $,c as N,g as T,t as S,l as R,o as v,a7 as W,M as qe,aJ as Je,w as de,v as We,b_ as ve,by as ae,r as fe,av as me,bQ as ye,s as ge,b as be,bD as ze,d as pe,bp as he,bA as Qe,bG as Ye,a5 as Ze,y as Se,z as Ce,bE as Xe,aw as ke,bR as Ve,A as we,f as Ie,b$ as et,aB as tt,bH as nt,T as le,bJ as se,V as ie,i as at,q as re,bl as lt,bi as V,ar as Ae,u as st,ax as it,bO as rt}from"./index-3d9fa740.js";import{u as ut}from"./ssrBoot-5e80b69f.js";import{a as ot}from"./VContainer-f0e7e319.js";const z=Symbol.for("vuetify:list");function Pe(){const e=G(z,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return j(z,l),e}function Le(){return G(z,null)}const ct={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Oe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},dt={open:Oe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Y=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=_(n),e&&!s){const i=Array.from(a.entries()).reduce((r,p)=>{let[y,g]=p;return g==="on"?[...r,y]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Be=e=>{const l=Y(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=_(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},vt=e=>{const l=Y(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},ft=e=>{const l=Be(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},mt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=_(n);const p=new Map(a),y=[n];for(;y.length;){const u=y.shift();a.set(u,s?"on":"off"),i.has(u)&&y.push(...i.get(u))}let g=r.get(n);for(;g;){const u=i.get(g),o=u.every(c=>a.get(c)==="on"),d=u.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,o?"on":d?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(a.entries()).reduce((o,d)=>{let[c,m]=d;return m==="on"?[...o,c]:o},[]).length===0?p:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},x=Symbol.for("vuetify:nested"),_e={id:M(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},yt=L({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),gt=e=>{let l=!1;const t=A(new Map),n=A(new Map),s=ne(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ft(e.mandatory);case"leaf":return vt(e.mandatory);case"independent":return Y(e.mandatory);case"single-independent":return Be(e.mandatory);case"classic":default:return mt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return dt;case"single":return ct;case"multiple":default:return Oe}}),r=ne(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));ce(()=>{l=!0});function p(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=Ke("nested"),g={id:M(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,d]of r.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&n.value.set(u,o),d&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(c=>c!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,d)=>{y.emit("click:open",{id:u,value:o,path:p(u),event:d});const c=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},openOnSelect:(u,o,d)=>{const c=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},select:(u,o,d)=>{y.emit("click:select",{id:u,value:o,path:p(u),event:d});const c=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:d});c&&(r.value=c),g.root.openOnSelect(u,o,d)},children:t,parents:n}};return j(x,g),g.root},Me=(e,l)=>{const t=G(x,_e),n=Symbol(He()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(_(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ce(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&j(x,a),a},bt=()=>{const e=G(x,_e);j(x,{...e,isGroupActivator:!0})},pt=Ue({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return bt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),ht=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,title:String,value:null,...$(),...N()},"VListGroup"),ue=T()({name:"VListGroup",props:ht(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Me(S(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Le(),{isBooted:p}=ut();function y(d){s(!n.value,d)}const g=f(()=>({onClick:y,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return R(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(W,{defaults:o.value},{default:()=>[v(pt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(qe,{transition:{component:Je},disabled:!p.value},{default:()=>{var d;return[de(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[We,n.value]])]}})]})),{}}});const St=ve("v-list-item-subtitle"),Ct=ve("v-list-item-title"),kt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ae(),onClickOnce:ae(),...fe(),...$(),...me(),...ye(),...ge(),...be(),...ze(),...N(),...pe(),...he({variant:"text"})},"VListItem"),oe=T()({name:"VListItem",directives:{Ripple:Qe},props:kt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Ye(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:p,isIndeterminate:y,isGroupActivator:g,root:u,parent:o,openOnSelect:d}=Me(i,!1),c=Le(),m=f(()=>{var b;return e.active!==!1&&(e.active||((b=a.isActive)==null?void 0:b.value)||p.value)}),w=f(()=>e.link!==!1&&a.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!c)),O=f(()=>e.rounded||e.nav),P=f(()=>e.color??e.activeColor),E=f(()=>({color:m.value?P.value??e.baseColor:e.baseColor,variant:e.variant}));Ze(()=>{var b;return(b=a.isActive)==null?void 0:b.value},b=>{b&&o.value!=null&&u.open(o.value,!0),b&&d(b)},{immediate:!0});const{themeClasses:K}=Se(e),{borderClasses:H}=Ce(e),{colorClasses:U,colorStyles:I,variantClasses:h}=Xe(E),{densityClasses:F}=ke(e),{dimensionStyles:De}=Ve(e),{elevationClasses:Ge}=we(e),{roundedClasses:je}=Ie(O),$e=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),q=f(()=>({isActive:m.value,select:r,isSelected:p.value,isIndeterminate:y.value}));function Z(b){var D;s("click",b),!(g||!k.value)&&((D=a.navigate)==null||D.call(a,b),e.value!=null&&r(!p.value,b))}function Ne(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),Z(b))}return R(()=>{const b=w.value?"a":e.tag,D=n.title||e.title!=null,Re=n.subtitle||e.subtitle!=null,X=!!(e.appendAvatar||e.appendIcon),Ee=!!(X||n.append),ee=!!(e.prependAvatar||e.prependIcon),J=!!(ee||n.prepend);return c==null||c.updateHasPrepend(J),e.activeColor&&et("active-color",["color","base-color"]),de(v(b,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!J&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&m.value},K.value,H.value,U.value,F.value,Ge.value,$e.value,je.value,h.value,e.class],style:[I.value,De.value,e.style],href:a.href.value,tabindex:k.value?c?-2:0:void 0,onClick:Z,onKeydown:k.value&&!w.value&&Ne},{default:()=>{var te;return[nt(k.value||m.value,"v-list-item"),J&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(W,{key:"prepend-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,q.value)]}}):v(le,null,[e.prependAvatar&&v(se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[D&&v(Ct,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Re&&v(St,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(te=n.default)==null?void 0:te.call(n,q.value)]),Ee&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(W,{key:"append-defaults",disabled:!X,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,q.value)]}}):v(le,null,[e.appendIcon&&v(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[tt("ripple"),k.value&&e.ripple]])}),{}}}),Vt=L({color:String,inset:Boolean,sticky:Boolean,title:String,...$(),...N()},"VListSubheader"),wt=T()({name:"VListSubheader",props:Vt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=at(S(e,"color"));return R(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),It=L({items:Array,returnObject:Boolean},"VListChildren"),xe=T()({name:"VListChildren",props:It(),setup(e,l){let{slots:t}=l;return Pe(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var o,d;let{children:i,props:r,type:p,raw:y}=a;if(p==="divider")return((o=t.divider)==null?void 0:o.call(t,{props:r}))??v(ot,r,null);if(p==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(wt,r,null);const g={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},u=ue.filterProps(r);return i?v(ue,re({value:r==null?void 0:r.value},u),{activator:c=>{let{props:m}=c;const w={...r,...m,value:e.returnObject?y:r.value};return t.header?t.header({props:w}):v(oe,w,g)},default:()=>v(xe,{items:i},t)}):t.item?t.item({props:r}):v(oe,re(r,{value:e.returnObject?y:r.value}),g)}))}}}),At=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:lt}},"list-items");function Q(e,l){const t=V(l,e.itemTitle,l),n=V(l,e.itemValue,t),s=V(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Ae(l,["children"]):l:void 0:V(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Te(e,s):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(Q(e,n));return t}function Tt(e){const l=f(()=>Te(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?Q(e,i):l.value.find(r=>e.valueComparator(i,r.value))||Q(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Pt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Lt(e,l){const t=V(l,e.itemType,"item"),n=Pt(l)?l:V(l,e.itemTitle),s=V(l,e.itemValue,void 0),a=V(l,e.itemChildren),i=e.itemProps===!0?Ae(l,["children"]):V(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Fe(e,a):void 0,raw:l}}function Fe(e,l){const t=[];for(const n of l)t.push(Lt(e,n));return t}function Ot(e){return{items:f(()=>Fe(e,e.items))}}const Bt=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...yt({selectStrategy:"single-leaf",openStrategy:"list"}),...fe(),...$(),...me(),...ye(),...ge(),itemType:{type:String,default:"type"},...At(),...be(),...N(),...pe(),...he({variant:"text"})},"VList"),Ft=T()({name:"VList",props:Bt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Ot(e),{themeClasses:s}=Se(e),{backgroundColorClasses:a,backgroundColorStyles:i}=st(S(e,"bgColor")),{borderClasses:r}=Ce(e),{densityClasses:p}=ke(e),{dimensionStyles:y}=Ve(e),{elevationClasses:g}=we(e),{roundedClasses:u}=Ie(e),{open:o,select:d}=gt(e),c=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=S(e,"activeColor"),w=S(e,"baseColor"),k=S(e,"color");Pe(),it({VListGroup:{activeColor:m,baseColor:w,color:k},VListItem:{activeClass:S(e,"activeClass"),activeColor:m,baseColor:w,color:k,density:S(e,"density"),disabled:S(e,"disabled"),lines:S(e,"lines"),nav:S(e,"nav"),slim:S(e,"slim"),variant:S(e,"variant")}});const O=M(!1),P=A();function E(h){O.value=!0}function K(h){O.value=!1}function H(h){var F;!O.value&&!(h.relatedTarget&&((F=P.value)!=null&&F.contains(h.relatedTarget)))&&I()}function U(h){if(P.value){if(h.key==="ArrowDown")I("next");else if(h.key==="ArrowUp")I("prev");else if(h.key==="Home")I("first");else if(h.key==="End")I("last");else return;h.preventDefault()}}function I(h){if(P.value)return rt(P.value,h)}return R(()=>v(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,p.value,g.value,c.value,u.value,e.class],style:[i.value,y.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:K,onFocus:H,onKeydown:U},{default:()=>[v(xe,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:d,focus:I}}});export{oe as V,Ct as a,Ft as b,At as m,Tt as u};
