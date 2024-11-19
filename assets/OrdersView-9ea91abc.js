import{H as _,L as f,a6 as k,O as n,Q as y,R as a,a3 as x,o as r,X as V,a0 as i,$ as u,P as c,U as W,T as w}from"./index-3d9fa740.js";import{V as b}from"./VContainer-f0e7e319.js";import{a as d,V as g}from"./VRow-106113c8.js";import{V as A}from"./VDataTable-42052228.js";import"./VSelect-67349047.js";import"./VList-1c2d2341.js";import"./ssrBoot-5e80b69f.js";const B=u("h1",null,"訂單",-1),O={__name:"OrdersView",setup(C){const{apiAuth:m}=x(),p=_(),l=f([]),h=[{title:"訂單編號",key:"_id",minWidth:"200px"},{title:"姓名",key:"name",minWidth:"90px"},{title:"電話",key:"phone",minWidth:"90px"},{title:"寄件地址",key:"address",minWidth:"200px"},{title:"下訂日期",key:"createdAt",minWidth:"150px"},{title:"訂單內容",key:"cart",sortable:!1,minWidth:"190px"},{title:"金額",key:"price",value:s=>s.cart.reduce((o,t)=>o+t.quantity*t.product.price,0),minWidth:"95px"}];return k(async()=>{var s,o;try{const{data:t}=await m.get("/orders/all");l.value.push(...t.result)}catch(t){const e=((o=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";p({text:e,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(s,o)=>(n(),y(b,null,{default:a(()=>[r(g,null,{default:a(()=>[r(d,{cols:"12"},{default:a(()=>[B]),_:1}),r(d,{cols:"12"},{default:a(()=>[r(A,{items:l.value,headers:h},{"item.createdAt":a(({item:t})=>[V(i(new Date(t.createdAt).toLocaleString()),1)]),"item.cart":a(({item:t})=>[u("ul",null,[(n(!0),c(w,null,W(t.cart,e=>(n(),c("li",{key:e._id},i(e.product.name)+" . "+i(e.noodle)+"* "+i(e.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{O as default};
