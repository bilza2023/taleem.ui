import{s as S,n as _,b as x}from"../chunks/scheduler.k9AsmmqN.js";import{S as j,i as k,h as f,r as d,s as q,j as g,k as h,u as v,f as u,b as y,d as m,n as $,v as E}from"../chunks/index.16X8BF3e.js";import{s as C}from"../chunks/entry.aNP1WN7T.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",n,o,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),n=d(r),o=q(),i=f("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);n=v(a,r),a.forEach(u),o=y(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,n),m(e,o,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(n,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(o),u(i))}}}function z(s,t,r){let n;return x(s,P,o=>r(0,n=o)),[n]}let F=class extends j{constructor(t){super(),k(this,t,z,w,S,{})}};export{F as component};
