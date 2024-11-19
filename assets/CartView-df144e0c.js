import{H as $,J as R,G as A,L as u,D as P,a6 as F,O as d,Q as I,R as l,a3 as L,o as t,aa as j,P as h,a0 as p,Y as v,X as D,ae as C,$ as w}from"./index-3d9fa740.js";import{V as E}from"./VForm-e1cfac01.js";import{a as r,V as G}from"./VRow-106113c8.js";import{a as H,V as J}from"./VContainer-f0e7e319.js";import{V as M}from"./VDataTable-42052228.js";import"./VSelect-67349047.js";import"./VList-1c2d2341.js";import"./ssrBoot-5e80b69f.js";const O=w("h1",{class:"text-center"},"我的購物車",-1),Q={key:0},X={key:1,class:"text-red text-decoration-line-through"},Y={key:0},z={key:1},K=w("p",{class:"text-h5"},"總金額:",-1),Z={class:"text-h5 text-red"},ce={__name:"CartView",setup(ee){const{apiAuth:_}=L(),m=$(),f=R(),q=A(),x=u(""),k=u(""),y=u(""),V=u({required:o=>!!o||"必填欄位"}),s=u([]),N=[{title:"商品圖片",key:"product.image",minWidth:"100px"},{title:"商品名稱",key:"product.name",minWidth:"150px"},{title:"麵條種類",key:"noodle",minWidth:"120px"},{title:"單價",key:"product.price",minWidth:"95px"},{title:"數量",key:"quantity",minWidth:"90px"},{title:"總價",key:"total",value:o=>o.product.price*o.quantity,minWidth:"95px"},{title:"刪除",key:"action",minWidth:"90px"}],S=P(()=>s.value.reduce((o,a)=>o+a.quantity*a.product.price,0)),T=P(()=>s.value.length>0&&!s.value.some(o=>!o.product.sell)),g=async(o,a,e)=>{var n,B;if(!f.isLogin){q.push("/login");return}try{const{data:c}=await _.patch("/users/cart",{product:o,quantity:a,noodle:e});f.cart=c.result,m({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const i=s.value.findIndex(W=>W.product._id===o&&W.noodle===e);s.value[i].quantity+=a,s.value[i].quantity<=0&&s.value.splice(i,1)}catch(c){const i=((B=(n=c==null?void 0:c.response)==null?void 0:n.data)==null?void 0:B.message)||"發生錯誤，請稍後再試";m({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},b=u(!1),U=async()=>{var o,a;b.value=!0;try{await _.post("/orders",{name:x.value,phone:k.value,address:y.value}),f.cart=0,q.push("/orders")}catch(e){const n=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";m({text:n,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}b.value=!1};return F(async()=>{var o,a;try{const{data:e}=await _.get("/users/cart");s.value.push(...e.result)}catch(e){const n=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";m({text:n,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(o,a)=>(d(),I(E,null,{default:l(()=>[t(J,{class:"w-75"},{default:l(()=>[t(r,{cols:"12"},{default:l(()=>[O]),_:1}),t(H),t(r,{class:"mx-auto",cols:"12"},{default:l(()=>[t(M,{items:s.value,headers:N},{"item.product.image":l(({item:e})=>[t(j,{src:e.product.image,width:"100",height:"100","aspect-ratio":"1/1",cover:"",rounded:"lg"},null,8,["src"])]),"item.product.name":l(({item:e})=>[e.product.sell?(d(),h("span",Q,p(e.product.name),1)):(d(),h("span",X,p(e.product.name)+" (已下架)",1))]),"item.product.noodle":l(({item:e})=>[e.product.noodle?(d(),h("span",Y,p(e.product.noodle),1)):(d(),h("span",z,"無麵條選擇"))]),"item.quantity":l(({item:e})=>[t(v,{variant:"text",icon:"mdi-minus",color:"red",onClick:n=>g(e.product._id,-1,e.noodle)},null,8,["onClick"]),D(p(e.quantity),1),t(v,{variant:"text",icon:"mdi-plus",color:"green",onClick:n=>g(e.product._id,1,e.noodle)},null,8,["onClick"])]),"item.action":l(({item:e})=>[t(v,{variant:"text",icon:"mdi-delete",color:"red",onClick:n=>g(e.product._id,e.quantity*-1,e.noodle)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),t(G,null,{default:l(()=>[t(r,{cols:"6",md:"3"},{default:l(()=>[t(C,{label:"取件人姓名","prepend-inner-icon":"mdi-account-circle-outline",variant:"outlined",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),rules:[V.value.required]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"6",md:"3"},{default:l(()=>[t(C,{label:"取件人電話","prepend-inner-icon":"mdi-cellphone",variant:"outlined",modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),rules:[V.value.required]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:l(()=>[t(C,{label:"取件人地址","prepend-inner-icon":"mdi-map-marker",variant:"outlined",modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=e=>y.value=e),rules:[V.value.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(r,{class:"d-flex align-center justify-space-between",cols:"12"},{default:l(()=>[K,w("p",Z,"NT."+p(S.value),1)]),_:1}),t(r,{class:"text-center",cols:"12"},{default:l(()=>[t(v,{color:"green",disabled:!T.value,loading:b.value,onClick:U},{default:l(()=>[D("結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1}))}};export{ce as default};
