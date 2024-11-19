import{bg as ot,p as D,L as A,D as k,W as q,aM as oe,bh as Q,bi as U,t as V,a4 as N,aA as G,aE as H,bj as Z,bk as ct,a5 as dt,bl as De,aq as re,h as ee,bm as Y,bn as ft,I as j,r as vt,m as Te,av as Fe,s as gt,b as mt,bo as bt,c as _e,d as Le,bp as yt,g as $,al as ht,y as Be,K as xt,B as Pt,ax as se,C as St,bq as J,l as R,o as f,Y as M,q as L,br as he,ag as xe,bs as pt,F as E,bt as kt,bu as wt,bv as It,bw as Vt,u as Dt,bx as Tt,T as X,V as Ft,X as Pe,ab as Se,a0 as _t,by as ue,aw as Lt}from"./index-3d9fa740.js";import{V as Bt,a as ce}from"./VSelect-67349047.js";import{a as Ct}from"./VContainer-f0e7e319.js";function pe(e,l,t){return Object.keys(e).filter(a=>ot(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}const At=(e,l,t)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),$t=D({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Ot(e,l,t){var s;const a=[],n=(t==null?void 0:t.default)??At,r=t!=null&&t.filterKeys?Q(t.filterKeys):!1,c=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return a;e:for(let u=0;u<e.length;u++){const[d,o=d]=Q(e[u]),v={},i={};let g=-1;if(l&&!(t!=null&&t.noFilter)){if(typeof d=="object"){const b=r||Object.keys(o);for(const m of b){const S=U(o,m,o),I=(s=t==null?void 0:t.customKeyFilter)==null?void 0:s[m];if(g=I?I(S,l,d):n(S,l,d),g!==-1&&g!==!1)I?v[m]=g:i[m]=g;else if((t==null?void 0:t.filterMode)==="every")continue e}}else g=n(d,l,d),g!==-1&&g!==!1&&(i.title=g);const x=Object.keys(i).length,y=Object.keys(v).length;if(!x&&!y||(t==null?void 0:t.filterMode)==="union"&&y!==c&&!x||(t==null?void 0:t.filterMode)==="intersection"&&(y!==c||!x))continue}a.push({index:u,matches:{...i,...v}})}return a}function Mt(e,l,t,a){const n=A([]),r=A(new Map),c=k(()=>a!=null&&a.transform?q(l).map(u=>[u,a.transform(u)]):q(l));oe(()=>{const u=typeof t=="function"?t():q(t),d=typeof u!="string"&&typeof u!="number"?"":String(u),o=Ot(c.value,d,{customKeyFilter:{...e.customKeyFilter,...q(a==null?void 0:a.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),v=q(l),i=[],g=new Map;o.forEach(x=>{let{index:y,matches:b}=x;const m=v[y];i.push(m),g.set(m.value,b)}),n.value=i,r.value=g});function s(u){return r.value.get(u.value)}return{filteredItems:n,filteredMatches:r,getMatches:s}}const Et=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ce=Symbol.for("vuetify:datatable:expanded");function Nt(e){const l=V(e,"expandOnClick"),t=N(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function a(s,u){const d=new Set(t.value);u?d.add(s.value):d.delete(s.value),t.value=d}function n(s){return t.value.has(s.value)}function r(s){a(s,!n(s))}const c={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return G(Ce,c),c}function Ae(){const e=H(Ce);if(!e)throw new Error("foo");return e}const Rt=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),$e=Symbol.for("vuetify:data-table-group");function jt(e){return{groupBy:N(e,"groupBy")}}function Gt(e){const{groupBy:l,sortBy:t}=e,a=A(new Set),n=k(()=>l.value.map(d=>({...d,order:d.order??!1})).concat(t.value));function r(d){return a.value.has(d.id)}function c(d){const o=new Set(a.value);r(d)?o.delete(d.id):o.add(d.id),a.value=o}function s(d){function o(v){const i=[];for(const g of v.items)"type"in g&&g.type==="group"?i.push(...o(g)):i.push(g);return i}return o({type:"group",items:d,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:n,toggleGroup:c,opened:a,groupBy:l,extractRows:s,isGroupOpen:r};return G($e,u),u}function Oe(){const e=H($e);if(!e)throw new Error("Missing group!");return e}function Ht(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=Z(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function Me(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Ht(e,l[0]),r=[],c=l.slice(1);return n.forEach((s,u)=>{const d=l[0],o=`${a}_${d}_${u}`;r.push({depth:t,id:o,key:d,value:u,items:c.length?Me(s,c,t+1,o):s,type:"group"})}),r}function Ee(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...Ee(a.items,l))):t.push(a);return t}function Kt(e,l,t){return{flatItems:k(()=>{if(!l.value.length)return e.value;const n=Me(e.value,l.value.map(r=>r.key));return Ee(n,t.value)})}}function zt(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const c=ct("VDataTable"),s=k(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let u=null;dt(s,()=>{De(u,s.value)||((u==null?void 0:u.search)!==s.value.search&&(l.value=1),c.emit("update:options",s.value),u=s.value)},{deep:!0,immediate:!0})}const Wt=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ne=Symbol.for("vuetify:data-table-pagination");function qt(e){const l=N(e,"page",void 0,a=>+(a??1)),t=N(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function Ut(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=k(()=>t.value===-1?0:t.value*(l.value-1)),r=k(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),c=k(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));oe(()=>{l.value>c.value&&(l.value=c.value)});function s(i){t.value=i,l.value=1}function u(){l.value=re(l.value+1,1,c.value)}function d(){l.value=re(l.value-1,1,c.value)}function o(i){l.value=re(i,1,c.value)}const v={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:c,itemsLength:a,nextPage:u,prevPage:d,setPage:o,setItemsPerPage:s};return G(Ne,v),v}function Qt(){const e=H(Ne);if(!e)throw new Error("Missing pagination!");return e}function Xt(e){const{items:l,startIndex:t,stopIndex:a,itemsPerPage:n}=e;return{paginatedItems:k(()=>n.value<=0?l.value:l.value.slice(t.value,a.value))}}const Yt={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Re={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return Re.select({items:t,value:l,selected:a})}},je={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return je.select({items:t,value:l,selected:a})}},Jt=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:De}},"DataTable-select"),Ge=Symbol.for("vuetify:data-table-selection");function Zt(e,l){let{allItems:t,currentPage:a}=l;const n=N(e,"modelValue",e.modelValue,b=>new Set(Q(b).map(m=>{var S;return((S=t.value.find(I=>e.valueComparator(m,I.value)))==null?void 0:S.value)??m})),b=>[...b.values()]),r=k(()=>t.value.filter(b=>b.selectable)),c=k(()=>a.value.filter(b=>b.selectable)),s=k(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Yt;case"all":return je;case"page":default:return Re}});function u(b){return Q(b).every(m=>n.value.has(m.value))}function d(b){return Q(b).some(m=>n.value.has(m.value))}function o(b,m){const S=s.value.select({items:b,value:m,selected:new Set(n.value)});n.value=S}function v(b){o([b],!u([b]))}function i(b){const m=s.value.selectAll({value:b,allItems:r.value,currentPage:c.value,selected:new Set(n.value)});n.value=m}const g=k(()=>n.value.size>0),x=k(()=>{const b=s.value.allSelected({allItems:r.value,currentPage:c.value});return!!b.length&&u(b)}),y={toggleSelect:v,select:o,selectAll:i,isSelected:u,isSomeSelected:d,someSelected:g,allSelected:x,showSelectAll:s.value.showSelectAll};return G(Ge,y),y}function te(){const e=H(Ge);if(!e)throw new Error("Missing selection!");return e}const ea=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),He=Symbol.for("vuetify:data-table-sort");function ta(e){const l=N(e,"sortBy"),t=V(e,"mustSort"),a=V(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function aa(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=u=>{if(u.key==null)return;let d=l.value.map(v=>({...v}))??[];const o=d.find(v=>v.key===u.key);o?o.order==="desc"?t.value?o.order="asc":d=d.filter(v=>v.key!==u.key):o.order="desc":a.value?d=[...d,{key:u.key,order:"asc"}]:d=[{key:u.key,order:"asc"}],l.value=d,n&&(n.value=1)};function c(u){return!!l.value.find(d=>d.key===u.key)}const s={sortBy:l,toggleSort:r,isSorted:c};return G(He,s),s}function la(){const e=H(He);if(!e)throw new Error("Missing sort!");return e}function na(e,l,t,a){const n=ee();return{sortedItems:k(()=>t.value.length?ra(l.value,t.value,n.current.value,{...e.customKeySort,...a==null?void 0:a.value}):l.value)}}function ra(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,c)=>{for(let s=0;s<l.length;s++){const u=l[s].key,d=l[s].order??"asc";if(d===!1)continue;let o=Z(r.raw,u),v=Z(c.raw,u);if(d==="desc"&&([o,v]=[v,o]),a!=null&&a[u]){const i=a[u](o,v);if(!i)continue;return i}if(o instanceof Date&&v instanceof Date)return o.getTime()-v.getTime();if([o,v]=[o,v].map(i=>i!=null?i.toString().toLocaleLowerCase():i),o!==v)return Y(o)&&Y(v)?0:Y(o)?-1:Y(v)?1:!isNaN(o)&&!isNaN(v)?Number(o)-Number(v):n.compare(o,v)}return 0})}function ua(){const e=A([]);ft(()=>e.value=[]);function l(t,a){e.value[a]=t}return{refs:e,updateRef:l}}const sa=D({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:j,default:"$first"},prevIcon:{type:j,default:"$prev"},nextIcon:{type:j,default:"$next"},lastIcon:{type:j,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...vt(),...Te(),...Fe(),...gt(),...mt(),...bt(),..._e({tag:"nav"}),...Le(),...yt({variant:"text"})},"VPagination"),ia=$()({name:"VPagination",props:sa(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const n=N(e,"modelValue"),{t:r,n:c}=ee(),{isRtl:s}=ht(),{themeClasses:u}=Be(e),{width:d}=xt(),o=Pt(-1);se(void 0,{scoped:!0});const{resizeRef:v}=St(h=>{if(!h.length)return;const{target:p,contentRect:w}=h[0],T=p.querySelector(".v-pagination__list > *");if(!T)return;const _=w.width,O=T.offsetWidth+parseFloat(getComputedStyle(T).marginRight)*2;o.value=y(_,O)}),i=k(()=>parseInt(e.length,10)),g=k(()=>parseInt(e.start,10)),x=k(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):o.value>=0?o.value:y(d.value,58));function y(h,p){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((h-p*w)/p).toFixed(2)))}const b=k(()=>{if(i.value<=0||isNaN(i.value)||i.value>Number.MAX_SAFE_INTEGER)return[];if(x.value<=0)return[];if(x.value===1)return[n.value];if(i.value<=x.value)return J(i.value,g.value);const h=x.value%2===0,p=h?x.value/2:Math.floor(x.value/2),w=h?p:p+1,T=i.value-p;if(w-n.value>=0)return[...J(Math.max(1,x.value-1),g.value),e.ellipsis,i.value];if(n.value-T>=(h?1:0)){const _=x.value-1,O=i.value-_+g.value;return[g.value,e.ellipsis,...J(_,O)]}else{const _=Math.max(1,x.value-3),O=_===1?n.value:n.value-Math.ceil(_/2)+g.value;return[g.value,e.ellipsis,...J(_,O),e.ellipsis,i.value]}});function m(h,p,w){h.preventDefault(),n.value=p,w&&a(w,p)}const{refs:S,updateRef:I}=ua();se({VPaginationBtn:{color:V(e,"color"),border:V(e,"border"),density:V(e,"density"),size:V(e,"size"),variant:V(e,"variant"),rounded:V(e,"rounded"),elevation:V(e,"elevation")}});const P=k(()=>b.value.map((h,p)=>{const w=T=>I(T,p);if(typeof h=="string")return{isActive:!1,key:`ellipsis-${p}`,page:h,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const T=h===n.value;return{isActive:T,key:h,page:c(h),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:T?e.activeColor:e.color,ariaCurrent:T,ariaLabel:r(T?e.currentPageAriaLabel:e.pageAriaLabel,h),onClick:_=>m(_,h)}}}})),F=k(()=>{const h=!!e.disabled||n.value<=g.value,p=!!e.disabled||n.value>=g.value+i.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:w=>m(w,g.value,"first"),disabled:h,ariaLabel:r(e.firstAriaLabel),ariaDisabled:h}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:w=>m(w,n.value-1,"prev"),disabled:h,ariaLabel:r(e.previousAriaLabel),ariaDisabled:h},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:w=>m(w,n.value+1,"next"),disabled:p,ariaLabel:r(e.nextAriaLabel),ariaDisabled:p},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:w=>m(w,g.value+i.value-1,"last"),disabled:p,ariaLabel:r(e.lastAriaLabel),ariaDisabled:p}:void 0}});function C(){var p;const h=n.value-g.value;(p=S.value[h])==null||p.$el.focus()}function K(h){h.key===he.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,xe(C)):h.key===he.right&&!e.disabled&&n.value<g.value+i.value-1&&(n.value=n.value+1,xe(C))}return R(()=>f(e.tag,{ref:v,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:K,"data-test":"v-pagination-root"},{default:()=>[f("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&f("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(F.value.first):f(M,L({_as:"VPaginationBtn"},F.value.first),null)]),f("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(F.value.prev):f(M,L({_as:"VPaginationBtn"},F.value.prev),null)]),P.value.map((h,p)=>f("li",{key:h.key,class:["v-pagination__item",{"v-pagination__item--is-active":h.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(h):f(M,L({_as:"VPaginationBtn"},h.props),{default:()=>[h.page]})])),f("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(F.value.next):f(M,L({_as:"VPaginationBtn"},F.value.next),null)]),e.showFirstLastPage&&f("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(F.value.last):f(M,L({_as:"VPaginationBtn"},F.value.last),null)])])]})),{}}}),Ke=D({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ke=$()({name:"VDataTableFooter",props:Ke(),setup(e,l){let{slots:t}=l;const{t:a}=ee(),{page:n,pageCount:r,startIndex:c,stopIndex:s,itemsLength:u,itemsPerPage:d,setItemsPerPage:o}=Qt(),v=k(()=>e.itemsPerPageOptions.map(i=>typeof i=="number"?{value:i,title:i===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(i)}:{...i,title:a(i.title)}));return R(()=>{var i;return f("div",{class:"v-data-table-footer"},[(i=t.prepend)==null?void 0:i.call(t),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[a(e.itemsPerPageText)]),f(Bt,{items:v.value,modelValue:d.value,"onUpdate:modelValue":g=>o(Number(g)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[a(e.pageText,u.value?c.value+1:0,s.value,u.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(ia,{modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},null)])])}),{}}}),de=pt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return f(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:E(e.height),width:E(e.width),left:E(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),oa=D({headers:Array},"DataTable-header"),ze=Symbol.for("vuetify:data-table-headers"),We={title:"",sortable:!1},ca={...We,width:48};function da(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function ie(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)ie(t,l);return l}function qe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&qe(t.children,l);return l}function fa(e){if(e.key){if(e.key==="data-table-group")return We;if(["data-table-expand","data-table-select"].includes(e.key))return ca}}function fe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>fe(t,l+1))):l}function va(e){let l=!1;function t(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(c&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s],!0);else l?isNaN(+r.width)&&wt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return c;if(r.children){r.fixedOffset=c;for(const s of r.children)c=a(s,c)}else r.fixed&&(r.fixedOffset=c,c+=parseFloat(r.width||"0")||0);return c}let n=0;for(const r of e)n=a(r,n)}function ga(e,l){const t=[];let a=0;const n=da(e);for(;n.size()>0;){let c=n.count();const s=[];let u=1;for(;c>0;){const{element:d,priority:o}=n.dequeue(),v=l-a-fe(d);if(s.push({...d,rowspan:v??1,colspan:d.children?ie(d).length:1}),d.children)for(const i of d.children){const g=o%1+u/Math.pow(10,a+2);n.enqueue(i,a+v+g)}u+=1,c-=1}a+=1,t.push(s)}return{columns:e.map(c=>ie(c)).flat(),headers:t}}function Ue(e){const l=[];for(const t of e){const a={...fa(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,c={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Ue(a.children):void 0};l.push(c)}return l}function ma(e,l){const t=A([]),a=A([]),n=A(),r=A();oe(()=>{var x,y,b;const u=(e.headers||Object.keys(e.items[0]??{}).map(m=>({key:m,title:kt(m)}))).slice(),d=qe(u);(x=l==null?void 0:l.groupBy)!=null&&x.value.length&&!d.has("data-table-group")&&u.unshift({key:"data-table-group",title:"Group"}),(y=l==null?void 0:l.showSelect)!=null&&y.value&&!d.has("data-table-select")&&u.unshift({key:"data-table-select"}),(b=l==null?void 0:l.showExpand)!=null&&b.value&&!d.has("data-table-expand")&&u.push({key:"data-table-expand"});const o=Ue(u);va(o);const v=Math.max(...o.map(m=>fe(m)))+1,i=ga(o,v);t.value=i.headers,a.value=i.columns;const g=i.headers.flat(1);n.value=g.reduce((m,S)=>(S.sortable&&S.key&&S.sort&&(m[S.key]=S.sort),m),{}),r.value=g.reduce((m,S)=>(S.key&&S.filter&&(m[S.key]=S.filter),m),{})});const c={headers:t,columns:a,sortFunctions:n,filterFunctions:r};return G(ze,c),c}function ae(){const e=H(ze);if(!e)throw new Error("Missing headers!");return e}const Qe=D({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:j,default:"$sortAsc"},sortDescIcon:{type:j,default:"$sortDesc"},...It()},"VDataTableHeaders"),we=$()({name:"VDataTableHeaders",props:Qe(),setup(e,l){let{slots:t}=l;const{toggleSort:a,sortBy:n,isSorted:r}=la(),{someSelected:c,allSelected:s,selectAll:u,showSelectAll:d}=te(),{columns:o,headers:v}=ae(),{loaderClasses:i}=Vt(e);function g(I,P){if(!(!e.sticky&&!I.fixed))return{position:"sticky",left:I.fixed?E(I.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${P})`:void 0}}function x(I){const P=n.value.find(F=>F.key===I.key);return P?P.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:y,backgroundColorStyles:b}=Dt(e,"color"),m=k(()=>({headers:v.value,columns:o.value,toggleSort:a,isSorted:r,sortBy:n.value,someSelected:c.value,allSelected:s.value,selectAll:u,getSortIcon:x})),S=I=>{let{column:P,x:F,y:C}=I;const K=P.key==="data-table-select"||P.key==="data-table-expand";return f(de,L({tag:"th",align:P.align,class:["v-data-table__th",{"v-data-table__th--sortable":P.sortable,"v-data-table__th--sorted":r(P),"v-data-table__th--fixed":P.fixed},i.value],style:{width:E(P.width),minWidth:E(P.minWidth),...g(P,C)},colspan:P.colspan,rowspan:P.rowspan,onClick:P.sortable?()=>a(P):void 0,fixed:P.fixed,lastFixed:P.lastFixed,noPadding:K},P.headerProps),{default:()=>{var w;const h=`header.${P.key}`,p={column:P,selectAll:u,isSorted:r,toggleSort:a,sortBy:n.value,someSelected:c.value,allSelected:s.value,getSortIcon:x};return t[h]?t[h](p):P.key==="data-table-select"?((w=t["header.data-table-select"])==null?void 0:w.call(t,p))??(d&&f(ce,{modelValue:s.value,indeterminate:c.value&&!s.value,"onUpdate:modelValue":u},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[P.title]),P.sortable&&f(Ft,{key:"icon",class:"v-data-table-header__sort-icon",icon:x(P)},null),e.multiSort&&r(P)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...y.value],style:b.value},[n.value.findIndex(T=>T.key===P.key)+1])])}})};R(()=>f(X,null,[t.headers?t.headers(m.value):v.value.map((I,P)=>f("tr",null,[I.map((F,C)=>f(S,{column:F,x:C,y:P},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:o.value.length},[f(Tt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),ba=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ya=$()({name:"VDataTableGroupHeaderRow",props:ba(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=Oe(),{isSelected:c,isSomeSelected:s,select:u}=te(),{columns:d}=ae(),o=k(()=>r([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(v=>{var i,g;if(v.key==="data-table-group"){const x=a(e.item)?"$expand":"$next",y=()=>n(e.item);return((i=t["data-table-group"])==null?void 0:i.call(t,{item:e.item,count:o.value.length,props:{icon:x,onClick:y}}))??f(de,{class:"v-data-table-group-header-row__column"},{default:()=>[f(M,{size:"small",variant:"text",icon:x,onClick:y},null),f("span",null,[e.item.value]),f("span",null,[Pe("("),o.value.length,Pe(")")])]})}if(v.key==="data-table-select"){const x=c(o.value),y=s(o.value)&&!x,b=m=>u(o.value,m);return((g=t["data-table-select"])==null?void 0:g.call(t,{props:{modelValue:x,indeterminate:y,"onUpdate:modelValue":b}}))??f("td",null,[f(ce,{modelValue:x,indeterminate:y,"onUpdate:modelValue":b},null)])}return f("td",null,null)})])}}),ha=D({index:Number,item:Object,cellProps:[Object,Function],onClick:ue(),onContextmenu:ue(),onDblclick:ue()},"VDataTableRow"),xa=$()({name:"VDataTableRow",props:ha(),setup(e,l){let{slots:t}=l;const{isSelected:a,toggleSelect:n}=te(),{isExpanded:r,toggleExpand:c}=Ae(),{columns:s}=ae();R(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&s.value.map((u,d)=>{const o=e.item,v=`item.${u.key}`,i={index:e.index,item:o.raw,internalItem:o,value:Z(o.columns,u.key),column:u,isSelected:a,toggleSelect:n,isExpanded:r,toggleExpand:c},g=typeof e.cellProps=="function"?e.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value,column:u}):e.cellProps,x=typeof u.cellProps=="function"?u.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value}):u.cellProps;return f(de,L({align:u.align,fixed:u.fixed,fixedOffset:u.fixedOffset,lastFixed:u.lastFixed,noPadding:u.key==="data-table-select"||u.key==="data-table-expand",width:u.width},g,x),{default:()=>{var y,b;return t[v]?t[v](i):u.key==="data-table-select"?((y=t["item.data-table-select"])==null?void 0:y.call(t,i))??f(ce,{disabled:!o.selectable,modelValue:a([o]),onClick:Se(()=>n(o),["stop"])},null):u.key==="data-table-expand"?((b=t["item.data-table-expand"])==null?void 0:b.call(t,i))??f(M,{icon:r(o)?"$collapse":"$expand",size:"small",variant:"text",onClick:Se(()=>c(o),["stop"])},null):_t(i.value)}})})]))}}),Xe=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Ie=$()({name:"VDataTableRows",inheritAttrs:!1,props:Xe(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=ae(),{expandOnClick:r,toggleExpand:c,isExpanded:s}=Ae(),{isSelected:u,toggleSelect:d}=te(),{toggleGroup:o,isGroupOpen:v}=Oe(),{t:i}=ee();return R(()=>{var g,x;return e.loading&&(!e.items.length||a.loading)?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[((g=a.loading)==null?void 0:g.call(a))??i(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((x=a["no-data"])==null?void 0:x.call(a))??i(e.noDataText)])]):f(X,null,[e.items.map((y,b)=>{var I;if(y.type==="group"){const P={index:b,item:y,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:u,toggleSelect:d,toggleGroup:o,isGroupOpen:v};return a["group-header"]?a["group-header"](P):f(ya,L({key:`group-header_${y.id}`,item:y},pe(t,":group-header",()=>P)),a)}const m={index:b,item:y.raw,internalItem:y,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:u,toggleSelect:d},S={...m,props:L({key:`item_${y.key??y.index}`,onClick:r.value?()=>{c(y)}:void 0,index:b,item:y,cellProps:e.cellProps},pe(t,":row",()=>m),typeof e.rowProps=="function"?e.rowProps({item:m.item,index:m.index,internalItem:m.internalItem}):e.rowProps)};return f(X,{key:S.props.key},[a.item?a.item(S):f(xa,S.props,a),s(y)&&((I=a["expanded-row"])==null?void 0:I.call(a,m))])})])}),{}}});const Ye=D({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Te(),...Fe(),..._e(),...Le()},"VTable"),Ve=$()({name:"VTable",props:Ye(),setup(e,l){let{slots:t,emit:a}=l;const{themeClasses:n}=Be(e),{densityClasses:r}=Lt(e);return R(()=>f(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var c,s,u;return[(c=t.top)==null?void 0:c.call(t),t.default?f("div",{class:"v-table__wrapper",style:{height:E(e.height)}},[f("table",null,[t.default()])]):(s=t.wrapper)==null?void 0:s.call(t),(u=t.bottom)==null?void 0:u.call(t)]}})),{}}}),Pa=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Sa(e,l,t,a){const n=e.returnObject?l:U(l,e.itemValue),r=U(l,e.itemSelectable,!0),c=a.reduce((s,u)=>(u.key!=null&&(s[u.key]=U(l,u.value)),s),{});return{type:"item",key:e.returnObject?U(l,e.itemValue):n,index:t,value:n,selectable:r,columns:c,raw:l}}function pa(e,l,t){return l.map((a,n)=>Sa(e,a,n,t))}function ka(e,l){return{items:k(()=>pa(e,e.items,l.value))}}const wa=D({...Xe(),width:[String,Number],search:String,...Et(),...Rt(),...oa(),...Pa(),...Jt(),...ea(),...Qe(),...Ye()},"DataTable"),Ia=D({...Wt(),...wa(),...$t(),...Ke()},"VDataTable"),Fa=$()({name:"VDataTable",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=jt(e),{sortBy:r,multiSort:c,mustSort:s}=ta(e),{page:u,itemsPerPage:d}=qt(e),{columns:o,headers:v,sortFunctions:i,filterFunctions:g}=ma(e,{groupBy:n,showSelect:V(e,"showSelect"),showExpand:V(e,"showExpand")}),{items:x}=ka(e,o),y=V(e,"search"),{filteredItems:b}=Mt(e,x,y,{transform:z=>z.columns,customKeyFilter:g}),{toggleSort:m}=aa({sortBy:r,multiSort:c,mustSort:s,page:u}),{sortByWithGroups:S,opened:I,extractRows:P,isGroupOpen:F,toggleGroup:C}=Gt({groupBy:n,sortBy:r}),{sortedItems:K}=na(e,b,S,i),{flatItems:h}=Kt(K,n,I),p=k(()=>h.value.length),{startIndex:w,stopIndex:T,pageCount:_,setItemsPerPage:O}=Ut({page:u,itemsPerPage:d,itemsLength:p}),{paginatedItems:le}=Xt({items:h,startIndex:w,stopIndex:T,itemsPerPage:d}),ne=k(()=>P(le.value)),{isSelected:Je,select:Ze,selectAll:et,toggleSelect:tt,someSelected:at,allSelected:lt}=Zt(e,{allItems:x,currentPage:ne}),{isExpanded:nt,toggleExpand:rt}=Nt(e);zt({page:u,itemsPerPage:d,sortBy:r,groupBy:n,search:y}),se({VDataTableRows:{hideNoData:V(e,"hideNoData"),noDataText:V(e,"noDataText"),loading:V(e,"loading"),loadingText:V(e,"loadingText")}});const B=k(()=>({page:u.value,itemsPerPage:d.value,sortBy:r.value,pageCount:_.value,toggleSort:m,setItemsPerPage:O,someSelected:at.value,allSelected:lt.value,isSelected:Je,select:Ze,selectAll:et,toggleSelect:tt,isExpanded:nt,toggleExpand:rt,isGroupOpen:F,toggleGroup:C,items:ne.value.map(z=>z.raw),internalItems:ne.value,groupedItems:le.value,columns:o.value,headers:v.value}));return R(()=>{const z=ke.filterProps(e),ut=we.filterProps(e),st=Ie.filterProps(e),it=Ve.filterProps(e);return f(Ve,L({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},it),{top:()=>{var W;return(W=a.top)==null?void 0:W.call(a,B.value)},default:()=>{var W,ve,ge,me,be,ye;return a.default?a.default(B.value):f(X,null,[(W=a.colgroup)==null?void 0:W.call(a,B.value),f("thead",null,[f(we,ut,a)]),(ve=a.thead)==null?void 0:ve.call(a,B.value),f("tbody",null,[(ge=a["body.prepend"])==null?void 0:ge.call(a,B.value),a.body?a.body(B.value):f(Ie,L(t,st,{items:le.value}),a),(me=a["body.append"])==null?void 0:me.call(a,B.value)]),(be=a.tbody)==null?void 0:be.call(a,B.value),(ye=a.tfoot)==null?void 0:ye.call(a,B.value)])},bottom:()=>a.bottom?a.bottom(B.value):f(X,null,[f(Ct,null,null),f(ke,z,{prepend:a["footer.prepend"]})])})}),{}}});export{Fa as V,wa as a,Ke as b,jt as c,ta as d,qt as e,ma as f,Gt as g,Ut as h,Kt as i,Zt as j,Nt as k,zt as l,Wt as m,ke as n,we as o,aa as p,Ie as q,Ve as r,ka as u};
