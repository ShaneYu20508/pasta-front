import{p,m as b,be as v,g as F,bf as V,x as y,u as h,b3 as R,c as P}from"./index-679bad59.js";const k=p({...b(),...v()},"VForm"),x=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,f){let{slots:n,emit:i}=f;const r=V(o),s=y();function u(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),i("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return P("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,r)])}),R(r,s)}});export{x as V};