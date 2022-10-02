var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e){let n;return function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(e,(t=>n=t))(),n}function l(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function p(t,e,n){t.classList[n?"add":"remove"](e)}let g;function y(t){g=t}function w(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_destroy.push(t)}const v=[],x=[],b=[],D=[],k=Promise.resolve();let T=!1;function A(t){b.push(t)}const E=new Set;let B=0;function S(){const t=g;do{for(;B<v.length;){const t=v[B];B++,y(t),V(t.$$)}for(y(null),v.length=0,B=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];E.has(e)||(E.add(e),e())}b.length=0}while(v.length);for(;D.length;)D.pop()();T=!1,E.clear(),y(t)}function V(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const C=new Set;let _;function M(t,e){t&&t.i&&(C.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),_.c.push((()=>{C.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function W(t){t&&t.c()}function P(t,n,r,o){const{fragment:l,on_mount:c,on_destroy:a,after_update:h}=t.$$;l&&l.m(n,r),o||A((()=>{const n=c.map(e).filter(i);a?a.push(...n):s(n),t.$$.on_mount=[]})),h.forEach(A)}function z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(v.push(t),T||(T=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,i,r,o,l,c,a,u=[-1]){const d=g;y(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:i.target||d.$$.root};a&&a(f.root);let m=!1;if(f.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),m&&L(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();i.intro&&M(e.$$.fragment),P(e,i.target,i.anchor,i.customElement),S()}y(d)}class j{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n;return{c(){n=d(e[0])},m(t,e){a(t,n,e)},p(t,[e]){1&e&&$(n,t[0])},i:t,o:t,d(t){t&&h(n)}}}function O(t){return("0"+t).substr(-2)}function H(t,e){return(t%=100)>10&&t<20?e[2]:e[(t%=10)>1&&t<5?1:1===t?0:2]}function G(t,e,n){let{start:s}=e;const i=[1e3,60,60,24,7];function r(t,e=new Date){let n=t-e,s=n>0?1:n<0?-1:0;n=Math.abs(n);let r=i.map((function(t){var e=n%t;return n=(n-e)/t,e}));return{milliseconds:r[0],seconds:r[1],minutes:r[2],hours:r[3],days:r[4],weeks:n,direction:s}}let o;return function t(){n(0,o=function(){const{direction:t,weeks:e,days:n,hours:i,minutes:o,seconds:l}=r(s);if(1===t){const t=[];return e&&t.push(e+" "+H(e,["week","weeks","weeks"])),n&&t.push(n+" "+H(n,["day","days","days"])),`come in ${t.join(" ")} ${i}ч ${O(o)}м ${O(l)}с`}return"🚀"}()),1===r(s).direction&&setTimeout(t,1e3)}(),t.$$set=t=>{"start"in t&&n(1,s=t.start)},[o,s]}class X extends j{constructor(t){super(),I(this,t,G,N,r,{start:1})}}function Y(t,e,n){const s=t.slice();return s[1]=e[n].icon,s[2]=e[n].text,s[3]=e[n].href,s}function q(e){let n,s,i,r,o=e[1]+"",l=e[2]+"";return{c(){n=u("a"),s=u("span"),i=u("span"),r=d(l),m(s,"class","icon svelte-1n0knvr"),m(n,"a",""),m(n,"href",e[3]),m(n,"class","row svelte-1n0knvr")},m(t,e){a(t,n,e),c(n,s),s.innerHTML=o,c(n,i),c(i,r)},p:t,d(t){t&&h(n)}}}function U(e){let n,s=e[0],i=[];for(let t=0;t<s.length;t+=1)i[t]=q(Y(e,s,t));return{c(){n=u("div");for(let t=0;t<i.length;t+=1)i[t].c();m(n,"class","links svelte-1n0knvr")},m(t,e){a(t,n,e);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,[e]){if(1&e){let r;for(s=t[0],r=0;r<s.length;r+=1){const o=Y(t,s,r);i[r]?i[r].p(o,e):(i[r]=q(o),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}function Z(t){return[[{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" version="1.0" viewBox="0 0 32 32"><path d="M6.5.3a9.2 8.9 0 0 0-4.9 4.2A20 19.3 0 0 0 0 13c.4 4.7 3.7 9.9 8.4 13.3a52.7 51 0 0 1 5.3 4.2l.7.5c.2 0 .5.3.8.6.2.3.6.5.7.5.8 0 2.5-1.4 3.9-3 .4-.7 1.4-1.7 2-2.5l2.5-2.6c.6-.7 1.8-1.9 2.6-2.5a12 12 0 0 0 3.6-4.8c1.8-3.4 1.9-5 .8-9-.3-1.4-.8-2.9-1-3.2a8.1 7.9 0 0 0-3.9-3.2C24.2.2 23.4 0 22 0a7 6.7 0 0 0-4.9 1.8l-.8.7-1-.8C14 .4 13 0 10 0a8.9 8.6 0 0 0-3.5.2zm18.4 2.4c2.2 1 3.1 1.7 3.6 2.6.5 1 1.5 4.8 1.5 6a9.8 9.5 0 0 1-1.6 4.7 24.3 24.3 0 0 1-5.7 6.9 100.4 97 0 0 0-4.8 5c-1 1.3-1.9 2-2 1.6a44 42.5 0 0 0-5.1-4C6 22 3.5 18.8 2.4 15a8.5 8.3 0 0 1-.4-3.6c.2-4.4 1.7-7.4 4.4-8.7 1-.5 1.3-.5 3-.5 2.8 0 3.6.2 5.2 1.6a7 6.7 0 0 1 1.8 2.3c.7 1.4.9 1.6 1.4 1.3.5-.2.4-1.7-.1-2.9l-.4-.9.5-.5A5.4 5.2 0 0 1 22 1.8c1 0 1.4.2 3 .9z"/></svg>',text:"wishlist",href:"/wishlist/"},{icon:'<svg width="1em"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 32 32"><path d="m27.3 2.5-4.5 2c-2.8 1-4.7 1.7-7.3 3A62.2 62.2 0 0 1 10 9.8a58.6 58.6 0 0 1-6.6 3.3c-4.7 2-4.5 4.3.3 4.7l3.3.5 1.4.3.2 4.5c.3 5.9.3 5.8.7 6 .8.5 1.4.2 3.6-2.2 2-2 2.4-2.4 2.9-2.2.7.2 3 2.1 5.2 4.4 2.7 2.7 3 2.6 4.4-2.3l1.3-4.1 2-7a178.4 178.4 0 0 1 3.3-13c0-.6-.9-1.6-1.3-1.6l-3.4 1.3zm2.8 1.2a180.6 180.6 0 0 1-2 7.7A122.5 122.5 0 0 1 23 28.7a51.3 51.3 0 0 0-8-6.7l-.7-.6 1.5-2a93.1 93.1 0 0 0 7.6-9c.7-.8.8-1 .6-1.5-.4-.8-1.3-.9-2.2-.2l-.8.5-.9.5-5.6 3.8-3.4 2.4c-1.5 1-1.8 1.2-2.4 1-1-.5-3.6-.8-5.2-.8-.9 0-1.6-.1-1.6-.2A85.2 85.2 0 0 1 14.1 10l4.7-2A168.7 168.7 0 0 1 29 3.6c1.1-.5 1.2-.5 1 .1zm-8.6 7.4a750 750 0 0 0-7.3 8.3c-.7.9-2 2.9-2.7 4.5L10 26.8V24l-.1-4.4-.2-1.6.8-.5a169.1 169.1 0 0 0 10.6-6.7c.8-.7 1-.5.4.3zm-7.6 12.4c.2.4-.8 2-1.8 2.7-.3.3-.3.1.2-.7l.7-1.7c.3-.8.7-.8.9-.3z"/></svg>',text:"chat",href:"https://t.me/+QjK3USRjhsVkOGEy"}]]}class F extends j{constructor(t){super(),I(this,t,Z,U,r,{})}}const J=[];function K(e,n=t){let s;const i=new Set;function o(t){if(r(e,t)&&(e=t,s)){const t=!J.length;for(const t of i)t[1](),J.push(t,e);if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(r,l=t){const c=[r,l];return i.add(c),1===i.size&&(s=n(o)||t),r(e),()=>{i.delete(c),0===i.size&&(s(),s=null)}}}}var Q={};const tt=K(!1),et=K(0),nt=function(t,e,n){const s="undefined"!=typeof localStorage&&"undefined"!=typeof window,i=(null==n?void 0:n.serializer)||JSON;function r(t,e){s&&localStorage.setItem(t,i.stringify(e))}if(!Q[t]){const n=K(e,(e=>{const n=s?localStorage.getItem(t):null;if(n&&e(i.parse(n)),s){const n=n=>{n.key===t&&e(n.newValue?i.parse(n.newValue):null)};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}})),{subscribe:l,set:c}=n;Q[t]={set(e){r(t,e),c(e)},update(e){const s=e(o(n));r(t,s),c(s)},subscribe:l}}return Q[t]}(!1);function st(t){let e,n,s,i;const r=t[4].default,o=function(t,e,n,s){if(t){const i=l(t,e,n,s);return t[0](i)}}(r,t,t[3],null);return{c(){e=u("button"),o&&o.c(),m(e,"class","svelte-1xo2iq0"),p(e,"active",t[1]>=t[0])},m(r,l){var c,h,u,d;a(r,e,l),o&&o.m(e,null),n=!0,s||(c=e,h="click",u=t[2],c.addEventListener(h,u,d),i=()=>c.removeEventListener(h,u,d),s=!0)},p(t,[s]){o&&o.p&&(!n||8&s)&&function(t,e,n,s,i,r){if(i){const o=l(e,n,s,r);t.p(o,i)}}(o,r,t,t[3],n?function(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|i[s];return t}return e.dirty|i}return e.dirty}(r,t[3],s,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[3]),null),(!n||3&s)&&p(e,"active",t[1]>=t[0])},i(t){n||(M(o,t),n=!0)},o(t){R(o,t),n=!1},d(t){t&&h(e),o&&o.d(t),s=!1,i()}}}function it(t,e,n){let s,{$$slots:i={},$$scope:r}=e,{index:o}=e;et.subscribe((t=>{n(1,s=t)}));return t.$$set=t=>{"index"in t&&n(0,o=t.index),"$$scope"in t&&n(3,r=t.$$scope)},[o,s,()=>{return s>=o||(t=o,void et.update((e=>e+1===t?t:0)));var t},r,i]}class rt extends j{constructor(t){super(),I(this,t,it,st,r,{index:0})}}function ot(t){let e;return{c(){e=d("I")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function lt(t){let e;return{c(){e=d("n")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function ct(t){let e;return{c(){e=d("v")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function at(t){let e;return{c(){e=d("a")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function ht(t){let e;return{c(){e=d("d")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function ut(t){let e;return{c(){e=d("e")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function dt(t){let e;return{c(){e=d("r")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function ft(t){let e;return{c(){e=d("s")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function mt(t){let e,n,s,i,r,o,l,p,g,y,w,v,x,b,D,k,T,A,E,B,S,V,C,_,L,I,j,N,O,H,G,Y,q,U,Z,J,K,Q,tt,et=t[0].getDate()+"",nt=t[0].getHours()+"",st=String(t[0].getMinutes()).padStart(2,"0")+"";return r=new rt({props:{index:1,$$slots:{default:[ot]},$$scope:{ctx:t}}}),l=new rt({props:{index:2,$$slots:{default:[lt]},$$scope:{ctx:t}}}),p=new rt({props:{index:3,$$slots:{default:[ct]},$$scope:{ctx:t}}}),y=new rt({props:{index:4,$$slots:{default:[at]},$$scope:{ctx:t}}}),D=new rt({props:{index:5,$$slots:{default:[ht]},$$scope:{ctx:t}}}),T=new rt({props:{index:6,$$slots:{default:[ut]},$$scope:{ctx:t}}}),j=new rt({props:{index:7,$$slots:{default:[dt]},$$scope:{ctx:t}}}),G=new rt({props:{index:8,$$slots:{default:[ft]},$$scope:{ctx:t}}}),J=new X({props:{start:t[0]}}),Q=new F({}),{c(){e=u("section"),n=u("h1"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" style="vertical-align: middle; margin-right: .25em" version="1.0" viewBox="0 0 32 32"><path d="m23.4 4-.6.4c-.2.2-.2.3-.2 1.3 0 1.5 0 1.4 1.5 1.5 1.7 0 1.7 0 1.7-1.4 0-1.3 0-1.5-.7-1.7a4 4 0 0 0-1.7 0z"></path><path d="M6.3 4.3c-.2.1-.2.2-.3 1.4 0 1.5 0 1.5 1.2 1.6H9v2.5H7.4L6 10l-.3.5.1 1.8c0 .1-.1.2-1 .2-1.1 0-1.1 0-1.4.4-.2.3-.2.3-.2 1.4v1l-.2.1-1.3.2c-.9 0-1.2 0-1.3.2-.1.1-.2.6-.2 4.1v4l.3.2c.2.2.3.3 1.5.2 1 0 1.2 0 1.4-.3.2-.2.2-.2.1-.7l-.1-1v-.5h2.3l.1 1 .1 1.3c.1.2.8.4 1.2.3H8l.5-.1v1c0 1.2 0 1.5.7 1.8.2.1.5.2 2 .2 2.2 0 3.4-.2 3.7-.6.2-.2.3-.3.3-1.1 0-1.1-.2-1.6-.7-1.8l-2.7-.2c-2 0-2.4 0-2.4-.2v-1c-.2-.5-.1-.7 0-.7l2.7-.1a377.2 377.2 0 0 0 10.5 0h.4v1.2c0 1 0 1.2-.2 1.1a31.7 31.7 0 0 0-5.7 0c-.2 0-.2.4-.2 1.4 0 2 .1 2 2 1.7a41.9 41.9 0 0 1 4.4-.4v-2.2l.7-.2h1.4l.6.2.4-.3c.2-.3.3-.4.2-1.3 0-1.2-.2-1 1.3-1.2h.8v1.3c0 1.8 0 1.7 1.6 1.7 1 0 1.3 0 1.5-.2l.2-.2v-3.8l.2-4c.1-.4 0-.8-.2-1h-1.6l-1.3-.1V13c.2-.3.1-.4 0-.6-.2-.2-.3-.2-1.5-.1H26v-.2l-.1-1.3c0-.7-.2-1-.3-1.1l-1.3-.1H23V8.3c0-1 0-1.2-1.2-1.4h-1.3c-.5.2-.5.5-.5 1.6v1h-4.5a11 11 0 0 1-3.4 0h-.5V7.3c-.3-.2-1.5-.5-2.1-.4-.4 0-.4 0-.4-.3L9 5.4C9 4.2 8.9 4.2 7.5 4.1c-.8 0-1 0-1.2.2zm16.5 8.6v1.2l.2 1.2c0 .3-.1.3-1.1.4-.8 0-1 0-1.3-.2-.3-.2-.3-.2-.3-.6l.2-1.8 1-.2a80.7 80.7 0 0 0 1.3 0zm-11.4.4c.2.4.2 1.8 0 2.1-.2.2-.3.2-1 .2l-1.2-.1c-.2-.2-.2-.2-.1-1.3 0-.5 0-1 .2-1.1h1c.9 0 1 0 1 .2z"></path></svg>invadersday',s=f(),i=u("p"),W(r.$$.fragment),o=d(" i"),W(l.$$.fragment),W(p.$$.fragment),g=d("ite you to my birthd"),W(y.$$.fragment),w=d("y\n        "),v=u("br"),x=u("br"),b=f(),W(D.$$.fragment),k=d("ate: octob"),W(T.$$.fragment),A=d("r, "),E=d(et),B=d(" in "),S=d(nt),V=d(":"),C=d(st),_=f(),L=u("br"),I=d("\n        add"),W(j.$$.fragment),N=d("ess: "),O=u("a"),H=d(" street Rajićeva hou"),W(G.$$.fragment),Y=d("e 3 apt 2a\n        "),q=u("br"),U=u("br"),Z=f(),W(J.$$.fragment),K=f(),W(Q.$$.fragment),m(n,"class","svelte-1650dyk"),m(O,"class","pin svelte-1650dyk"),m(O,"href","https://yandex.ru/maps/-/CCUZIMBlkA"),m(i,"class","text svelte-1650dyk"),m(e,"class","content")},m(t,h){a(t,e,h),c(e,n),c(e,s),c(e,i),P(r,i,null),c(i,o),P(l,i,null),P(p,i,null),c(i,g),P(y,i,null),c(i,w),c(i,v),c(i,x),c(i,b),P(D,i,null),c(i,k),P(T,i,null),c(i,A),c(i,E),c(i,B),c(i,S),c(i,V),c(i,C),c(i,_),c(i,L),c(i,I),P(j,i,null),c(i,N),c(i,O),c(i,H),P(G,i,null),c(i,Y),c(i,q),c(i,U),c(i,Z),P(J,i,null),c(e,K),P(Q,e,null),tt=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const i={};2&e&&(i.$$scope={dirty:e,ctx:t}),p.$set(i);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),y.$set(o);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),D.$set(c);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),T.$set(a),(!tt||1&e)&&et!==(et=t[0].getDate()+"")&&$(E,et),(!tt||1&e)&&nt!==(nt=t[0].getHours()+"")&&$(S,nt),(!tt||1&e)&&st!==(st=String(t[0].getMinutes()).padStart(2,"0")+"")&&$(C,st);const h={};2&e&&(h.$$scope={dirty:e,ctx:t}),j.$set(h);const u={};2&e&&(u.$$scope={dirty:e,ctx:t}),G.$set(u);const d={};1&e&&(d.start=t[0]),J.$set(d)},i(t){tt||(M(r.$$.fragment,t),M(l.$$.fragment,t),M(p.$$.fragment,t),M(y.$$.fragment,t),M(D.$$.fragment,t),M(T.$$.fragment,t),M(j.$$.fragment,t),M(G.$$.fragment,t),M(J.$$.fragment,t),M(Q.$$.fragment,t),tt=!0)},o(t){R(r.$$.fragment,t),R(l.$$.fragment,t),R(p.$$.fragment,t),R(y.$$.fragment,t),R(D.$$.fragment,t),R(T.$$.fragment,t),R(j.$$.fragment,t),R(G.$$.fragment,t),R(J.$$.fragment,t),R(Q.$$.fragment,t),tt=!1},d(t){t&&h(e),z(r),z(l),z(p),z(y),z(D),z(T),z(j),z(G),z(J),z(Q)}}}function $t(t,e,n){let{start:s}=e;return t.$$set=t=>{"start"in t&&n(0,s=t.start)},[s]}class pt extends j{constructor(t){super(),I(this,t,$t,mt,r,{start:0})}}function gt(t){return new Promise(((e,n)=>{Object.assign(new Image,{src:t,onload:e,onerror:n})}))}const yt={enemy1:"/invadersday/images/enemy1.png",enemy2:"/invadersday/images/enemy2.png",enemy3:"/invadersday/images/enemy3.png",player:"/invadersday/images/player.png"};class wt{constructor(t,e,n){this.x=t,this.y=e,this.width=44,this.height=32,this.image=new Image,this.image.src=yt[`enemy${n}`]}draw(t){t.drawImage(this.image,this.x,this.y,this.width,this.height)}move(t,e){this.x+=t,this.y+=e}collideWith(t){return this.x+this.width>t.x&&this.x<t.x+t.width&&this.y+this.height>t.y&&this.y<t.y+t.height}}const vt=0,xt=1,bt=2,Dt=3;class kt{enemyMap=[[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[2,2,2,3,3,3,3,2,2,2],[2,2,2,3,3,3,3,2,2,2],[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2]];enemyRows=[];currentDirection=xt;xVelocity=0;yVelocity=0;defaultXVelocity=1;defaultYVelocity=1;moveDownTimerDefault=30;moveDownTimer=this.moveDownTimerDefault;fireBulletTimerDefault=100;fireBulletTimer=this.fireBulletTimerDefault;constructor(t,e,n){this.canvas=t,this.enemyBulletController=e,this.playerBulletController=n,this.enemyDeathSound=new Audio("invadersday/sounds/enemy-death.wav"),this.enemyDeathSound.volume=.1,this.createEnemies()}draw(t){this.decrementMoveDownTimer(),this.updateVelocityAndDirection(),this.collisionDetection(),this.drawEnemies(t),this.resetMoveDownTimer(),this.fireBullet()}collisionDetection(){this.enemyRows.forEach((t=>{t.forEach(((e,n)=>{this.playerBulletController.collideWith(e)&&(this.enemyDeathSound.currentTime=0,this.enemyDeathSound.play(),t.splice(n,1))}))})),this.enemyRows=this.enemyRows.filter((t=>t.length>0))}fireBullet(){if(this.fireBulletTimer--,this.fireBulletTimer<=0){this.fireBulletTimer=this.fireBulletTimerDefault;const t=this.enemyRows.flat(),e=t[Math.floor(Math.random()*t.length)];this.enemyBulletController.shoot(e.x+e.width/2,e.y,-3)}}resetMoveDownTimer(){this.moveDownTimer<=0&&(this.moveDownTimer=this.moveDownTimerDefault)}decrementMoveDownTimer(){this.currentDirection!==bt&&this.currentDirection!==Dt||this.moveDownTimer--}updateVelocityAndDirection(){for(const t of this.enemyRows)if(this.currentDirection==xt){this.xVelocity=this.defaultXVelocity,this.yVelocity=0;const e=t[t.length-1];if(e.x+e.width>=this.canvas.width){this.currentDirection=bt;break}}else if(this.currentDirection===bt){if(this.moveDown(vt))break}else if(this.currentDirection===vt){this.xVelocity=-this.defaultXVelocity,this.yVelocity=0;if(t[0].x<=0){this.currentDirection=Dt;break}}else if(this.currentDirection===Dt&&this.moveDown(xt))break}moveDown(t){return this.xVelocity=0,this.yVelocity=this.defaultYVelocity,this.moveDownTimer<=0&&(this.currentDirection=t,!0)}drawEnemies(t){this.enemyRows.flat().forEach((e=>{e.move(this.xVelocity,this.yVelocity),e.draw(t)}))}happy=()=>{};createEnemies(){this.enemyMap.forEach(((t,e)=>{this.enemyRows[e]=[],t.forEach(((t,n)=>{t>0&&this.enemyRows[e].push(new wt(50*n,35*e,t))}))}))}collideWith(t){return this.enemyRows.flat().some((e=>e.collideWith(t)))}}class Tt{rightPressed=!1;leftPressed=!1;shootPressed=!1;constructor(t,e,n){this.canvas=t,this.velocity=e,this.bulletController=n,this.x=this.canvas.width/2,this.y=this.canvas.height-75,this.width=50,this.height=48,this.image=new Image,this.image.src=yt.player,document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup)}draw(t){this.shootPressed&&this.bulletController.shoot(this.x+this.width/2,this.y,4,10),this.move(),this.collideWithWalls(),t.drawImage(this.image,this.x,this.y,this.width,this.height)}collideWithWalls(){this.x<0&&(this.x=0),this.x>this.canvas.width-this.width&&(this.x=this.canvas.width-this.width)}move(){this.rightPressed?this.x+=this.velocity:this.leftPressed&&(this.x+=-this.velocity)}keydown=t=>{"ArrowRight"==t.code&&(this.rightPressed=!0),"ArrowLeft"==t.code&&(this.leftPressed=!0),"Space"==t.code&&(this.shootPressed=!0)};keyup=t=>{"ArrowRight"==t.code&&(this.rightPressed=!1),"ArrowLeft"==t.code&&(this.leftPressed=!1),"Space"==t.code&&(this.shootPressed=!1)}}class At{constructor(t,e,n,s,i){this.canvas=t,this.x=e,this.y=n,this.velocity=s,this.bulletColor=i,this.width=5,this.height=20}draw(t){this.y-=this.velocity,t.fillStyle=this.bulletColor,t.fillRect(this.x,this.y,this.width,this.height)}collideWith(t){return this.x+this.width>t.x&&this.x<t.x+t.width&&this.y+this.height>t.y&&this.y<t.y+t.height}}class Et{bullets=[];timeTillNextBulletAllowed=0;constructor(t,e,n,s){this.canvas=t,this.maxBulletsAtATime=e,this.bulletColor=n,this.soundEnabled=s,this.shootSound=new Audio("invadersday/sounds/shoot.wav"),this.shootSound.volume=.1}draw(t){this.bullets=this.bullets.filter((t=>t.y+t.width>0&&t.y<=this.canvas.height)),this.bullets.forEach((e=>e.draw(t))),this.timeTillNextBulletAllowed>0&&this.timeTillNextBulletAllowed--}collideWith(t){const e=this.bullets.findIndex((e=>e.collideWith(t)));return e>=0&&(this.bullets.splice(e,1),!0)}shoot(t,e,n,s=0){if(this.timeTillNextBulletAllowed<=0&&this.bullets.length<this.maxBulletsAtATime){const i=new At(this.canvas,t,e,n,this.bulletColor);this.bullets.push(i),this.soundEnabled&&(this.shootSound.currentTime=0,this.shootSound.play()),this.timeTillNextBulletAllowed=s}}}function Bt(t){const e=t.getContext("2d");t.width=600,t.height=600;const n=new Et(t,10,"black",!0),s=new Et(t,4,"black",!1),i=new kt(t,s,n),r=new Tt(t,3,n);let o=!1,l=!1;return function(){return e.clearRect(0,0,t.width,t.height),o||(s.collideWith(r)&&(o=!0),i.collideWith(r)&&(o=!0),0===i.enemyRows.length&&(l=!0,o=!0)),function(){if(o){let n=l?"You Win":"Game Over",s=l?3.5:5;e.fillStyle="black",e.font='70px "Syne Mono"',e.fillText(n,t.width/s,t.height/2)}}(),o||(i.draw(e),r.draw(e),n.draw(e),s.draw(e)),{isGameOver:o,didWin:l}}}function St(e){let n;return{c(){n=u("canvas"),m(n,"id","game"),m(n,"class","svelte-3mpw91")},m(t,s){a(t,n,s),e[2](n)},p:t,i:t,o:t,d(t){t&&h(n),e[2](null)}}}function Vt(t,e,n){let s,i;return w((()=>clearInterval(i))),t.$$.update=()=>{if(3&t.$$.dirty&&s){const t=Bt(s);n(1,i=setInterval((()=>{const{isGameOver:e,didWin:n}=t();e&&(clearInterval(i),n&&nt.set(!0),setTimeout((()=>tt.set(!1)),1e3))}),1e3/60))}},[s,i,function(t){x[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Ct extends j{constructor(t){super(),I(this,t,Vt,St,r,{})}}function _t(e){let n,s,i;return s=new Ct({}),{c(){n=u("section"),W(s.$$.fragment),m(n,"class","egg svelte-tk0fg8")},m(t,e){a(t,n,e),P(s,n,null),i=!0},p:t,i(t){i||(M(s.$$.fragment,t),i=!0)},o(t){R(s.$$.fragment,t),i=!1},d(t){t&&h(n),z(s)}}}function Mt(t){let e,n,s;return n=new pt({props:{start:t[0]}}),{c(){e=u("main"),W(n.$$.fragment),m(e,"class","svelte-tk0fg8")},m(t,i){a(t,e,i),P(n,e,null),s=!0},p(t,e){const s={};1&e&&(s.start=t[0]),n.$set(s)},i(t){s||(M(n.$$.fragment,t),s=!0)},o(t){R(n.$$.fragment,t),s=!1},d(t){t&&h(e),z(n)}}}function Rt(t){let e,n,i,r;const o=[Mt,_t],l=[];function c(t,e){return t[1]?1:0}return e=c(t),n=l[e]=o[e](t),{c(){n.c(),i=d("")},m(t,n){l[e].m(t,n),a(t,i,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?l[e].p(t,r):(_={r:0,c:[],p:_},R(l[a],1,1,(()=>{l[a]=null})),_.r||s(_.c),_=_.p,n=l[e],n?n.p(t,r):(n=l[e]=o[e](t),n.c()),M(n,1),n.m(i.parentNode,i))},i(t){r||(M(n),r=!0)},o(t){R(n),r=!1},d(t){l[e].d(t),t&&h(i)}}}function Wt(t,e,n){let s,{start:i}=e;return tt.subscribe((t=>{n(1,s=t)})),et.subscribe((t=>{8===t&&(tt.set(!0),et.set(0))})),Promise.all(Object.values(yt).map(gt)),t.$$set=t=>{"start"in t&&n(0,i=t.start)},[i,s]}return new class extends j{constructor(t){super(),I(this,t,Wt,Rt,r,{start:0})}}({target:document.body,props:{start:new Date("2022-10-15T14:00:00.000Z")}})}();
//# sourceMappingURL=bundle.js.map