import{Z as D,$ as F,Y as I,x as u,o as P,A as R,a2 as i,a4 as j,a5 as l,ag as E,c as t,V as J,a3 as v,ad as p,J as _,aa as S,am as C,ac as w}from"./index-9986f222.js";import{V as L}from"./VForm-6f2410db.js";import{b as r,a as M,V as Y}from"./VRow-a43a9a3c.js";import{V as Z}from"./VDivider-bd95e48c.js";import{V as z}from"./VDataTable-b97defb5.js";import"./VSelect-781d32ea.js";import"./VList-408f9721.js";import"./ssrBoot-8d2e4e8c.js";const G=w("h1",{class:"text-center"},"我的購物車",-1),H={key:0},K={key:1,class:"text-red text-decoration-line-through"},O={key:0},Q={key:1},W=w("p",{class:"text-h4"},"總金額:",-1),X={class:"text-h4 text-red"},ce={__name:"CartView",setup(ee){const{apiAuth:h}=E(),m=D(),f=F(),q=I(),k=u(""),V=u(""),y=u(""),x=u({required:a=>!!a||"必填欄位"}),s=u([]),T=[{title:"商品圖片",key:"product.image"},{title:"商品名稱",key:"product.name"},{title:"麵條種類",key:"noodle"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:a=>a.product.price*a.quantity},{title:"刪除",key:"action"}],U=P(()=>s.value.reduce((a,o)=>a+o.quantity*o.product.price,0)),$=P(()=>s.value.length>0&&!s.value.some(a=>!a.product.sell)),g=async(a,o,e)=>{var n,B;if(!f.isLogin){q.push("/login");return}try{const{data:c}=await h.patch("/users/cart",{product:a,quantity:o,noodle:e});f.cart=c.result,m({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const d=s.value.findIndex(N=>N.product._id===a&&N.noodle===e);s.value[d].quantity+=o,s.value[d].quantity<=0&&s.value.splice(d,1)}catch(c){const d=((B=(n=c==null?void 0:c.response)==null?void 0:n.data)==null?void 0:B.message)||"發生錯誤，請稍後再試";m({text:d,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},b=u(!1),A=async()=>{var a,o;b.value=!0;try{await h.post("/orders",{name:k.value,phone:V.value,address:y.value}),f.cart=0,q.push("/orders")}catch(e){const n=((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";m({text:n,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}b.value=!1};return R(async()=>{var a,o;try{const{data:e}=await h.get("/users/cart");s.value.push(...e.result)}catch(e){const n=((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";m({text:n,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,o)=>(i(),j(L,null,{default:l(()=>[t(Y,{class:"w-75"},{default:l(()=>[t(r,{cols:"12"},{default:l(()=>[G]),_:1}),t(Z),t(r,{class:"mx-auto",cols:"12"},{default:l(()=>[t(z,{items:s.value,headers:T},{"item.product.image":l(({item:e})=>[t(J,{src:e.product.image,width:"100",height:"100","aspect-ratio":"1/1",cover:"",rounded:"lg"},null,8,["src"])]),"item.product.name":l(({item:e})=>[e.product.sell?(i(),v("span",H,p(e.product.name),1)):(i(),v("span",K,p(e.product.name)+" (已下架)",1))]),"item.product.noodle":l(({item:e})=>[e.product.noodle?(i(),v("span",O,p(e.product.noodle),1)):(i(),v("span",Q,"無麵條選擇"))]),"item.quantity":l(({item:e})=>[t(_,{variant:"text",icon:"mdi-minus",color:"red",onClick:n=>g(e.product._id,-1,e.noodle)},null,8,["onClick"]),S(p(e.quantity),1),t(_,{variant:"text",icon:"mdi-plus",color:"green",onClick:n=>g(e.product._id,1,e.noodle)},null,8,["onClick"])]),"item.action":l(({item:e})=>[t(_,{variant:"text",icon:"mdi-delete",color:"red",onClick:n=>g(e.product._id,e.quantity*-1,e.noodle)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),t(M,null,{default:l(()=>[t(r,{cols:"12",md:"3"},{default:l(()=>[t(C,{label:"取件人姓名","prepend-inner-icon":"mdi-account-circle-outline",variant:"outlined",modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=e=>k.value=e),rules:[x.value.required]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"3"},{default:l(()=>[t(C,{label:"取件人電話","prepend-inner-icon":"mdi-cellphone",variant:"outlined",modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=e=>V.value=e),rules:[x.value.required]},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"12",md:"6"},{default:l(()=>[t(C,{label:"取件人地址","prepend-inner-icon":"mdi-map-marker",variant:"outlined",modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=e=>y.value=e),rules:[x.value.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(r,{class:"d-flex align-center justify-space-between",cols:"12"},{default:l(()=>[W,w("p",X,"NT."+p(U.value),1)]),_:1}),t(r,{class:"text-center",cols:"12"},{default:l(()=>[t(_,{color:"green",disabled:!$.value,loading:b.value,onClick:A},{default:l(()=>[S("結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1}))}};export{ce as default};
