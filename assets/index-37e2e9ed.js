var Pr=Object.defineProperty;var Cr=(r,e,t)=>e in r?Pr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var E=(r,e,t)=>(Cr(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function L(){}function ar(r,e){for(const t in e)r[t]=e[t];return r}function or(r){return r()}function Lt(){return Object.create(null)}function ge(r){r.forEach(or)}function Ge(r){return typeof r=="function"}function V(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Be;function Ce(r,e){return r===e?!0:(Be||(Be=document.createElement("a")),Be.href=e,r===Be.href)}function Ir(r){return Object.keys(r).length===0}function ir(r,...e){if(r==null){for(const n of e)n(void 0);return L}const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Qe(r,e,t){r.$$.on_destroy.push(ir(e,t))}function it(r){return r&&Ge(r.destroy)?r.destroy:L}function d(r,e){r.appendChild(e)}function T(r,e,t){r.insertBefore(e,t||null)}function R(r){r.parentNode&&r.parentNode.removeChild(r)}function de(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function m(r){return document.createElement(r)}function he(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function j(r){return document.createTextNode(r)}function v(){return j(" ")}function Ye(){return j("")}function Re(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function u(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Er(r){return Array.from(r.childNodes)}function se(r,e){e=""+e,r.data!==e&&(r.data=e)}function jr(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}function Fe(r,e){return new r(e)}let Ie;function Ae(r){Ie=r}function Ke(){if(!Ie)throw new Error("Function called outside component initialization");return Ie}function lt(r){Ke().$$.on_mount.push(r)}function Br(r){Ke().$$.after_update.push(r)}function zr(r){Ke().$$.on_destroy.push(r)}function Nr(){const r=Ke();return(e,t,{cancelable:n=!1}={})=>{const s=r.$$.callbacks[e];if(s){const o=jr(e,t,{cancelable:n});return s.slice().forEach(i=>{i.call(r,o)}),!o.defaultPrevented}return!0}}function $t(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const $e=[],St=[];let Se=[];const Rt=[],lr=Promise.resolve();let tt=!1;function cr(){tt||(tt=!0,lr.then(hr))}function ur(){return cr(),lr}function rt(r){Se.push(r)}const Je=new Set;let _e=0;function hr(){if(_e!==0)return;const r=Ie;do{try{for(;_e<$e.length;){const e=$e[_e];_e++,Ae(e),Dr(e.$$)}}catch(e){throw $e.length=0,_e=0,e}for(Ae(null),$e.length=0,_e=0;St.length;)St.pop()();for(let e=0;e<Se.length;e+=1){const t=Se[e];Je.has(t)||(Je.add(t),t())}Se.length=0}while($e.length);for(;Rt.length;)Rt.pop()();tt=!1,Je.clear(),Ae(r)}function Dr(r){if(r.fragment!==null){r.update(),ge(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(rt)}}function Or(r){const e=[],t=[];Se.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Se=e}const De=new Set;let we;function me(){we={r:0,c:[],p:we}}function be(){we.r||ge(we.c),we=we.p}function I(r,e){r&&r.i&&(De.delete(r),r.i(e))}function z(r,e,t,n){if(r&&r.o){if(De.has(r))return;De.add(r),we.c.push(()=>{De.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function X(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function dr(r,e){const t={},n={},s={$$scope:1};let o=r.length;for(;o--;){const i=r[o],a=e[o];if(a){for(const c in i)c in a||(n[c]=1);for(const c in a)s[c]||(t[c]=a[c],s[c]=1);r[o]=a}else for(const c in i)s[c]=1}for(const i in n)i in t||(t[i]=void 0);return t}function pr(r){return typeof r=="object"&&r!==null?r:{}}function Z(r){r&&r.c()}function G(r,e,t){const{fragment:n,after_update:s}=r.$$;n&&n.m(e,t),rt(()=>{const o=r.$$.on_mount.map(or).filter(Ge);r.$$.on_destroy?r.$$.on_destroy.push(...o):ge(o),r.$$.on_mount=[]}),s.forEach(rt)}function Y(r,e){const t=r.$$;t.fragment!==null&&(Or(t.after_update),ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Qr(r,e){r.$$.dirty[0]===-1&&($e.push(r),cr(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function te(r,e,t,n,s,o,i,a=[-1]){const c=Ie;Ae(r);const l=r.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:Lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Lt(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let h=!1;if(l.ctx=t?t(r,e.props||{},(f,g,...p)=>{const k=p.length?p[0]:g;return l.ctx&&s(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),h&&Qr(r,f)),g}):[],l.update(),h=!0,ge(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const f=Er(e.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();e.intro&&I(r.$$.fragment),G(r,e.target,e.anchor),hr()}Ae(c)}class re{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){Y(this,1),this.$destroy=L}$on(e,t){if(!Ge(t))return L;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Ir(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fr="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fr);const Le=[];function fr(r,e){return{subscribe:Ee(r,e).subscribe}}function Ee(r,e=L){let t;const n=new Set;function s(a){if(V(r,a)&&(r=a,t)){const c=!Le.length;for(const l of n)l[1](),Le.push(l,r);if(c){for(let l=0;l<Le.length;l+=2)Le[l][0](Le[l+1]);Le.length=0}}}function o(a){s(a(r))}function i(a,c=L){const l=[a,c];return n.add(l),n.size===1&&(t=e(s,o)||L),a(r),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:s,update:o,subscribe:i}}function gr(r,e,t){const n=!Array.isArray(r),s=n?[r]:r;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=e.length<2;return fr(t,(i,a)=>{let c=!1;const l=[];let h=0,f=L;const g=()=>{if(h)return;f();const k=e(n?l[0]:l,i,a);o?i(k):f=Ge(k)?k:L},p=s.map((k,b)=>ir(k,w=>{l[b]=w,h&=~(1<<b),c&&g()},()=>{h|=1<<b}));return c=!0,g(),function(){ge(p),f(),c=!1}})}function Hr(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,s,o,i=[],a="",c=r.split("/");for(c[0]||c.shift();s=c.shift();)t=s[0],t==="*"?(i.push("wild"),a+="/(.*)"):t===":"?(n=s.indexOf("?",1),o=s.indexOf(".",1),i.push(s.substring(1,~n?n:~o?o:s.length)),a+=~n&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~n?"?":"")+"\\"+s.substring(o))):a+="/"+s;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Wr(r){let e,t,n;const s=[r[2]];var o=r[0];function i(a){let c={};for(let l=0;l<s.length;l+=1)c=ar(c,s[l]);return{props:c}}return o&&(e=Fe(o,i()),e.$on("routeEvent",r[7])),{c(){e&&Z(e.$$.fragment),t=Ye()},m(a,c){e&&G(e,a,c),T(a,t,c),n=!0},p(a,c){const l=c&4?dr(s,[pr(a[2])]):{};if(c&1&&o!==(o=a[0])){if(e){me();const h=e;z(h.$$.fragment,1,0,()=>{Y(h,1)}),be()}o?(e=Fe(o,i()),e.$on("routeEvent",a[7]),Z(e.$$.fragment),I(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(l)},i(a){n||(e&&I(e.$$.fragment,a),n=!0)},o(a){e&&z(e.$$.fragment,a),n=!1},d(a){a&&R(t),e&&Y(e,a)}}}function Ur(r){let e,t,n;const s=[{params:r[1]},r[2]];var o=r[0];function i(a){let c={};for(let l=0;l<s.length;l+=1)c=ar(c,s[l]);return{props:c}}return o&&(e=Fe(o,i()),e.$on("routeEvent",r[6])),{c(){e&&Z(e.$$.fragment),t=Ye()},m(a,c){e&&G(e,a,c),T(a,t,c),n=!0},p(a,c){const l=c&6?dr(s,[c&2&&{params:a[1]},c&4&&pr(a[2])]):{};if(c&1&&o!==(o=a[0])){if(e){me();const h=e;z(h.$$.fragment,1,0,()=>{Y(h,1)}),be()}o?(e=Fe(o,i()),e.$on("routeEvent",a[6]),Z(e.$$.fragment),I(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(l)},i(a){n||(e&&I(e.$$.fragment,a),n=!0)},o(a){e&&z(e.$$.fragment,a),n=!1},d(a){a&&R(t),e&&Y(e,a)}}}function Gr(r){let e,t,n,s;const o=[Ur,Wr],i=[];function a(c,l){return c[1]?0:1}return e=a(r),t=i[e]=o[e](r),{c(){t.c(),n=Ye()},m(c,l){i[e].m(c,l),T(c,n,l),s=!0},p(c,[l]){let h=e;e=a(c),e===h?i[e].p(c,l):(me(),z(i[h],1,1,()=>{i[h]=null}),be(),t=i[e],t?t.p(c,l):(t=i[e]=o[e](c),t.c()),I(t,1),t.m(n.parentNode,n))},i(c){s||(I(t),s=!0)},o(c){z(t),s=!1},d(c){c&&R(n),i[e].d(c)}}}function Tt(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const ct=fr(null,function(e){e(Tt());const t=()=>{e(Tt())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});gr(ct,r=>r.location);gr(ct,r=>r.querystring);const Mt=Ee(void 0);async function ut(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await ur(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(r.charAt(0)=="#"?"":"#")+r}function ht(r,e){if(e=At(e),!r||!r.tagName||r.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return qt(r,e),{update(t){t=At(t),qt(r,t)}}}function Yr(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function qt(r,e){let t=e.href||r.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);r.setAttribute("href",t),r.addEventListener("click",n=>{n.preventDefault(),e.disabled||Kr(n.currentTarget.getAttribute("href"))})}function At(r){return r&&typeof r=="string"?{href:r}:r||{}}function Kr(r){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=r}function Zr(r,e,t){let{routes:n={}}=e,{prefix:s=""}=e,{restoreScrollState:o=!1}=e;class i{constructor(x,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!x||typeof x=="string"&&(x.length<1||x.charAt(0)!="/"&&x.charAt(0)!="*")||typeof x=="object"&&!(x instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:S}=Hr(x);this.path=x,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=M,this._keys=S}match(x){if(s){if(typeof s=="string")if(x.startsWith(s))x=x.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=x.match(s);if(O&&O[0])x=x.substr(O[0].length)||"/";else return null}}const _=this._pattern.exec(x);if(_===null)return null;if(this._keys===!1)return _;const M={};let S=0;for(;S<this._keys.length;){try{M[this._keys[S]]=decodeURIComponent(_[S+1]||"")||null}catch{M[this._keys[S]]=null}S++}return M}async checkConditions(x){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](x))return!1;return!0}}const a=[];n instanceof Map?n.forEach((y,x)=>{a.push(new i(x,y))}):Object.keys(n).forEach(y=>{a.push(new i(y,n[y]))});let c=null,l=null,h={};const f=Nr();async function g(y,x){await ur(),f(y,x)}let p=null,k=null;o&&(k=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?p=y.state:p=null},window.addEventListener("popstate",k),Br(()=>{Yr(p)}));let b=null,w=null;const $=ct.subscribe(async y=>{b=y;let x=0;for(;x<a.length;){const _=a[x].match(y.location);if(!_){x++;continue}const M={route:a[x].path,location:y.location,querystring:y.querystring,userData:a[x].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await a[x].checkConditions(M)){t(0,c=null),w=null,g("conditionsFailed",M);return}g("routeLoading",Object.assign({},M));const S=a[x].component;if(w!=S){S.loading?(t(0,c=S.loading),w=S,t(1,l=S.loadingParams),t(2,h={}),g("routeLoaded",Object.assign({},M,{component:c,name:c.name,params:l}))):(t(0,c=null),w=null);const O=await S();if(y!=b)return;t(0,c=O&&O.default||O),w=S}_&&typeof _=="object"&&Object.keys(_).length?t(1,l=_):t(1,l=null),t(2,h=a[x].props),g("routeLoaded",Object.assign({},M,{component:c,name:c.name,params:l})).then(()=>{Mt.set(l)});return}t(0,c=null),w=null,Mt.set(void 0)});zr(()=>{$(),k&&window.removeEventListener("popstate",k)});function C(y){$t.call(this,r,y)}function D(y){$t.call(this,r,y)}return r.$$set=y=>{"routes"in y&&t(3,n=y.routes),"prefix"in y&&t(4,s=y.prefix),"restoreScrollState"in y&&t(5,o=y.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[c,l,h,n,s,o,C,D]}class Xr extends re{constructor(e){super(),te(this,e,Zr,Gr,V,{routes:3,prefix:4,restoreScrollState:5})}}function Vr(r){let e,t,n,s,o,i,a,c,l,h,f;return{c(){e=m("footer"),t=m("div"),n=m("div"),s=m("div"),o=m("p"),o.textContent=`© ${r[0]} Gabriel Quaresma`,i=v(),a=m("p"),a.textContent="Crafted with care",c=v(),l=m("button"),l.innerHTML=`Back to top
        <svg class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15l7-7 7 7"></path></svg>`,u(o,"class","text-sm text-neutral-500 font-light"),u(s,"class","text-center md:text-left"),u(a,"class","text-xs text-neutral-500 dark:text-neutral-600 tracking-wide"),u(l,"type","button"),u(l,"class","group flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-300"),u(n,"class","flex flex-col md:flex-row items-center justify-between gap-6"),u(t,"class","section-container"),u(e,"class","py-12 md:py-16 border-t border-neutral-200 dark:border-neutral-900")},m(g,p){T(g,e,p),d(e,t),d(t,n),d(n,s),d(s,o),d(n,i),d(n,a),d(n,c),d(n,l),h||(f=Re(l,"click",r[1]),h=!0)},p:L,i:L,o:L,d(g){g&&R(e),h=!1,f()}}}function Jr(r){return[new Date().getFullYear(),()=>window.scrollTo({top:0,behavior:"smooth"})]}class en extends re{constructor(e){super(),te(this,e,Jr,Vr,V,{})}}const Oe=Ee(null),Pe=Ee(!1);function mr(){Oe.set(null),Pe.set(!1)}const nt="theme";function tn(){if(typeof window>"u")return"dark";const r=localStorage.getItem(nt);return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function et(r){if(typeof document>"u")return;const e=document.documentElement;e.classList.toggle("dark",r==="dark"),e.style.colorScheme=r}function rn(){const r=tn(),{subscribe:e,set:t,update:n}=Ee(r);return et(r),{subscribe:e,set:s=>{localStorage.setItem(nt,s),et(s),t(s)},toggle:()=>n(s=>{const o=s==="dark"?"light":"dark";return localStorage.setItem(nt,o),et(o),o})}}const br=rn();function nn(r){let e,t;return{c(){e=he("svg"),t=he("path"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(t,"stroke-width","1.5"),u(t,"d","M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"),u(e,"class","w-4 h-4"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"viewBox","0 0 24 24")},m(n,s){T(n,e,s),d(e,t)},d(n){n&&R(e)}}}function sn(r){let e,t;return{c(){e=he("svg"),t=he("path"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(t,"stroke-width","1.5"),u(t,"d","M12 3v1.5M12 19.5V21M5.636 5.636l1.061 1.061M17.303 17.303l1.061 1.061M3 12h1.5M19.5 12H21M5.636 18.364l1.061-1.061M17.303 6.697l1.061-1.061M16 12a4 4 0 11-8 0 4 4 0 018 0z"),u(e,"class","w-4 h-4"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"viewBox","0 0 24 24")},m(n,s){T(n,e,s),d(e,t)},d(n){n&&R(e)}}}function an(r){let e,t,n,s,o,i,a,c,l,h,f,g;function p(w,$){return w[0]==="dark"?sn:nn}let k=p(r),b=k(r);return{c(){e=m("header"),t=m("nav"),n=m("div"),s=m("button"),s.textContent="Gabriel Quaresma",o=v(),i=m("div"),a=m("a"),a.textContent="Blog",c=v(),l=m("button"),b.c(),u(s,"class","text-sm md:text-base font-light tracking-wide text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"),u(a,"href","/blog"),u(a,"class","text-sm font-light tracking-wide text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"),u(l,"type","button"),u(l,"aria-label","Toggle theme"),u(l,"title",h=r[0]==="dark"?"Switch to light theme":"Switch to dark theme"),u(l,"class","flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"),u(i,"class","flex items-center gap-6 md:gap-8"),u(n,"class","flex items-center justify-between"),u(t,"class","section-container py-4"),u(e,"class","fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-300")},m(w,$){T(w,e,$),d(e,t),d(t,n),d(n,s),d(n,o),d(n,i),d(i,a),d(i,c),d(i,l),b.m(l,null),f||(g=[Re(s,"click",r[1]),it(ht.call(null,a)),Re(l,"click",br.toggle)],f=!0)},p(w,[$]){k!==(k=p(w))&&(b.d(1),b=k(w),b&&(b.c(),b.m(l,null))),$&1&&h!==(h=w[0]==="dark"?"Switch to light theme":"Switch to dark theme")&&u(l,"title",h)},i:L,o:L,d(w){w&&R(e),b.d(),f=!1,ge(g)}}}function on(r,e,t){let n,s;Qe(r,Pe,i=>t(2,n=i)),Qe(r,br,i=>t(0,s=i));function o(){n&&mr(),ut("/")}return[s,o]}class ln extends re{constructor(e){super(),te(this,e,on,an,V,{})}}const cn=""+new URL("profile-e24b5519.png",import.meta.url).href;function un(r){let e;return{c(){e=m("h1"),e.textContent="Gabriel Quaresma",u(e,"class","text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-neutral-900 dark:text-white")},m(t,n){T(t,e,n)},p:L,i:L,o:L,d(t){t&&R(e)}}}class hn extends re{constructor(e){super(),te(this,e,null,un,V,{})}}function dn(r){let e,t,n,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C;return{c(){e=m("div"),t=m("p"),n=j(r[0]),s=j(`+ years of experience. Skilled in building web
    applications/solutions with:
    `),o=m("br"),i=v(),a=m("span"),a.textContent="React",c=j(`,
    `),l=m("span"),l.textContent="TypeScript",h=j(`,
    `),f=m("span"),f.textContent="Node.js",g=j(`, and
    `),p=m("span"),p.textContent="Ruby on Rails",k=j("."),b=v(),w=m("p"),w.textContent=`Passionate about crafting seamless user experiences. Thrive in collaborative
    teams. Always learning, keeping up with modern tech and best practices to
    write cleaner, better code. Outside work: Practicing Brazilian Jiu-Jitsu and
    playing Football Manager.`,$=v(),C=m("a"),C.innerHTML=`<span class="w-8 h-px bg-neutral-400 dark:bg-neutral-600 group-hover:w-12 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-300"></span>
    Get in touch`,u(a,"class","text-neutral-800 dark:text-neutral-200"),u(l,"class","text-neutral-800 dark:text-neutral-200"),u(f,"class","text-neutral-800 dark:text-neutral-200"),u(p,"class","text-neutral-800 dark:text-neutral-200"),u(t,"class","text-body"),u(w,"class","text-neutral-600 dark:text-neutral-500 text-sm md:text-base font-light leading-relaxed"),u(C,"href","mailto:j.quaresmasantos98@gmail.com"),u(C,"class","inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(e,"class","max-w-2xl space-y-6")},m(D,y){T(D,e,y),d(e,t),d(t,n),d(t,s),d(t,o),d(t,i),d(t,a),d(t,c),d(t,l),d(t,h),d(t,f),d(t,g),d(t,p),d(t,k),d(e,b),d(e,w),d(e,$),d(e,C)},p:L,i:L,o:L,d(D){D&&R(e)}}}function pn(r){return[new Date().getFullYear()-2021]}class fn extends re{constructor(e){super(),te(this,e,pn,dn,V,{})}}const gn=""+new URL("github-icon-7f24a993.svg",import.meta.url).href,mn=""+new URL("instagram-icon-906a5cf8.svg",import.meta.url).href,bn=""+new URL("linkedin-icon-9f017955.svg",import.meta.url).href;function Pt(r,e,t){const n=r.slice();return n[1]=e[t].icon,n[2]=e[t].alt,n[3]=e[t].link,n[4]=e[t].label,n[6]=t,n}function Ct(r){let e,t,n,s,o;return{c(){e=m("li"),t=m("a"),n=m("img"),o=v(),Ce(n.src,s=r[1])||u(n,"src",s),u(n,"alt",r[2]),u(n,"class","w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert-0"+(r[6]===0?" invert":"")),u(t,"href",r[3]),u(t,"target","_blank"),u(t,"rel","noopener noreferrer"),u(t,"aria-label",r[4]),u(t,"class","group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 hover:border-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 transition-all duration-300")},m(i,a){T(i,e,a),d(e,t),d(t,n),d(e,o)},p:L,d(i){i&&R(e)}}}function kn(r){let e,t,n=X(r[0]),s=[];for(let o=0;o<n.length;o+=1)s[o]=Ct(Pt(r,n,o));return{c(){e=m("nav"),t=m("ul");for(let o=0;o<s.length;o+=1)s[o].c();u(t,"class","flex items-center justify-center gap-8"),u(e,"aria-label","Social networks")},m(o,i){T(o,e,i),d(e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null)},p(o,[i]){if(i&1){n=X(o[0]);let a;for(a=0;a<n.length;a+=1){const c=Pt(o,n,a);s[a]?s[a].p(c,i):(s[a]=Ct(c),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=n.length}},i:L,o:L,d(o){o&&R(e),de(s,o)}}}function wn(r){return[[{icon:gn,alt:"GitHub",link:"https://github.com/joaoGabriel55",label:"GitHub"},{icon:bn,alt:"LinkedIn",link:"https://linkedin.com/in/gabriel-quaresma-dev",label:"LinkedIn"},{icon:mn,alt:"Instagram",link:"https://instagram.com/drawquaresma",label:"Instagram"}]]}class yn extends re{constructor(e){super(),te(this,e,wn,kn,V,{})}}function xn(r){let e,t,n,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C,D,y;return f=new hn({}),b=new fn({}),$=new yn({}),{c(){e=m("section"),t=m("div"),n=m("div"),s=m("div"),o=m("div"),i=v(),a=m("img"),l=v(),h=m("div"),Z(f.$$.fragment),g=v(),p=m("p"),p.textContent="Software Engineer @Codeminer42 · Brazil",k=v(),Z(b.$$.fragment),w=v(),Z($.$$.fragment),C=v(),D=m("div"),D.innerHTML='<div class="w-px h-16 bg-gradient-to-b from-neutral-400 dark:from-neutral-600 to-transparent animate-pulse"></div>',u(o,"class","absolute -inset-1 bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-700 dark:to-neutral-900 rounded-full blur-sm opacity-50"),Ce(a.src,c=cn)||u(a,"src",c),u(a,"alt","Gabriel Quaresma"),u(a,"class","relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out ring-1 ring-neutral-300 dark:ring-neutral-800"),u(s,"class","relative"),u(p,"class","text-neutral-600 dark:text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase"),u(h,"class","space-y-4"),u(n,"class","flex flex-col items-center text-center gap-12 md:gap-16"),u(D,"class","hidden md:block"),u(t,"class","section-container flex flex-col items-center gap-8"),u(e,"class","min-h-screen flex items-center justify-center py-20 md:py-32 pt-24 md:pt-32")},m(x,_){T(x,e,_),d(e,t),d(t,n),d(n,s),d(s,o),d(s,i),d(s,a),d(n,l),d(n,h),G(f,h,null),d(h,g),d(h,p),d(n,k),G(b,n,null),d(n,w),G($,n,null),d(t,C),d(t,D),y=!0},p:L,i(x){y||(I(f.$$.fragment,x),I(b.$$.fragment,x),I($.$$.fragment,x),y=!0)},o(x){z(f.$$.fragment,x),z(b.$$.fragment,x),z($.$$.fragment,x),y=!1},d(x){x&&R(e),Y(f),Y(b),Y($)}}}class vn extends re{constructor(e){super(),te(this,e,null,xn,V,{})}}function It(r,e,t){const n=r.slice();return n[9]=e[t].name,n[10]=e[t].icon,n[11]=e[t].stars,n[12]=e[t].url,n}function _n(r,e,t){const n=r.slice();return n[6]=e[t],n}function Ln(r){let e,t=X(r[0]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Et(It(r,t,s));return{c(){e=m("div");for(let s=0;s<n.length;s+=1)n[s].c();u(e,"class","grid md:grid-cols-3 gap-6")},m(s,o){T(s,e,o);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(s,o){if(o&1){t=X(s[0]);let i;for(i=0;i<t.length;i+=1){const a=It(s,t,i);n[i]?n[i].p(a,o):(n[i]=Et(a),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(s){s&&R(e),de(n,s)}}}function $n(r){let e,t=X([1,2,3]),n=[];for(let s=0;s<3;s+=1)n[s]=Sn(_n(r,t,s));return{c(){e=m("div");for(let s=0;s<3;s+=1)n[s].c();u(e,"class","grid md:grid-cols-3 gap-6")},m(s,o){T(s,e,o);for(let i=0;i<3;i+=1)n[i]&&n[i].m(e,null)},p:L,d(s){s&&R(e),de(n,s)}}}function Et(r){let e,t,n,s,o,i,a,c,l=r[9]+"",h,f,g,p,k,b,w,$=jt(r[11])+"",C,D,y,x,_,M,S,O,Q;return{c(){e=m("article"),t=m("div"),n=m("div"),s=m("img"),a=v(),c=m("h3"),h=j(l),f=v(),g=m("div"),p=he("svg"),k=he("path"),b=v(),w=m("span"),C=j($),D=v(),y=m("a"),x=m("span"),_=j(`
              View my contributions
              `),M=he("svg"),S=he("path"),Q=v(),Ce(s.src,o=r[10])||u(s,"src",o),u(s,"alt",i=r[9]),u(s,"class","w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"),u(c,"class","font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(n,"class","flex items-center gap-3"),u(k,"d","M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"),u(p,"class","w-4 h-4"),u(p,"fill","currentColor"),u(p,"viewBox","0 0 20 20"),u(w,"class","text-sm"),u(g,"class","flex items-center gap-1.5 text-neutral-500"),u(t,"class","flex items-center justify-between mb-5"),u(x,"class","w-6 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-10 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"),u(S,"stroke-linecap","round"),u(S,"stroke-linejoin","round"),u(S,"stroke-width","1.5"),u(S,"d","M17 8l4 4m0 0l-4 4m4-4H3"),u(M,"class","w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"),u(M,"fill","none"),u(M,"stroke","currentColor"),u(M,"viewBox","0 0 24 24"),u(y,"href",O=Bt(r[12])),u(y,"target","_blank"),u(y,"rel","noopener noreferrer"),u(y,"class","inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group/link"),u(e,"class","group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-surface-light hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-surface-lighter transition-all duration-300")},m(q,U){T(q,e,U),d(e,t),d(t,n),d(n,s),d(n,a),d(n,c),d(c,h),d(t,f),d(t,g),d(g,p),d(p,k),d(g,b),d(g,w),d(w,C),d(e,D),d(e,y),d(y,x),d(y,_),d(y,M),d(M,S),d(e,Q)},p(q,U){U&1&&!Ce(s.src,o=q[10])&&u(s,"src",o),U&1&&i!==(i=q[9])&&u(s,"alt",i),U&1&&l!==(l=q[9]+"")&&se(h,l),U&1&&$!==($=jt(q[11])+"")&&se(C,$),U&1&&O!==(O=Bt(q[12]))&&u(y,"href",O)},d(q){q&&R(e)}}}function Sn(r){let e;return{c(){e=m("div"),e.innerHTML='<div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800"></div> <div class="h-5 w-24 bg-neutral-200 dark:bg-neutral-800 rounded"></div></div> <div class="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div> <div class="h-4 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded"></div> ',u(e,"class","p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-surface-light animate-pulse")},m(t,n){T(t,e,n)},p:L,d(t){t&&R(e)}}}function Rn(r){let e,t,n,s;function o(c,l){return c[1]?$n:Ln}let i=o(r),a=i(r);return{c(){e=m("section"),t=m("div"),n=m("header"),n.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Community</span> <h2 class="heading-primary">Open Source Contributions</h2> <p class="text-body mt-4 max-w-2xl">Contributing to projects that make a difference in the developer
        ecosystem.</p>`,s=v(),a.c(),u(n,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900")},m(c,l){T(c,e,l),d(e,t),d(t,n),d(t,s),a.m(t,null)},p(c,[l]){i===(i=o(c))&&a?a.p(c,l):(a.d(1),a=i(c),a&&(a.c(),a.m(t,null)))},i:L,o:L,d(c){c&&R(e),a.d()}}}function jt(r){return r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(1)}K`:r.toString()}function Bt(r){return`${r}/pulls?q=is%3Apr+author%3AjoaoGabriel55+is%3Aclosed`}function Tn(r,e,t){let n=[],s=!0;const o=60*60*1e3,i=new Map;async function a(l){const h=i.get(l);if(h&&Date.now()<h.expiresAt)return h.data;const g=await(await fetch(`https://api.github.com/repos/${l}`)).json();return i.set(l,{data:g,expiresAt:Date.now()+o}),g}async function c(){return(await Promise.all([a("rails/rails"),a("axios/axios"),a("grommet/grommet"),a("forem/forem")])).map(h=>({icon:h.owner.avatar_url,name:h.name,stars:h.stargazers_count,url:h.html_url,description:h.description||""}))}return lt(()=>{c().then(l=>{t(0,n=l),t(1,s=!1)})}),[n,s]}class Mn extends re{constructor(e){super(),te(this,e,Tn,Rn,V,{})}}const qn=""+new URL("the_invoice-20fe0487.jpeg",import.meta.url).href,An=""+new URL("poker_estima-27b4a7bc.jpeg",import.meta.url).href,Pn=""+new URL("notificare-3a5bc136.svg",import.meta.url).href;function zt(r,e,t){const n=r.slice();return n[1]=e[t].title,n[2]=e[t].description,n[3]=e[t].stack,n[4]=e[t].image,n[5]=e[t].link,n[6]=e[t].repository,n[8]=t,n}function Nt(r,e,t){const n=r.slice();return n[9]=e[t],n}function Dt(r){let e;return{c(){e=m("span"),e.textContent=`${r[9]} `,u(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-full")},m(t,n){T(t,e,n)},p:L,d(t){t&&R(e)}}}function Ot(r){let e,t,n,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C,D,y,x,_,M,S,O=X(r[3]),Q=[];for(let q=0;q<O.length;q+=1)Q[q]=Dt(Nt(r,O,q));return{c(){e=m("article"),t=m("div"),n=m("div"),s=m("a"),o=m("div"),i=m("img"),c=v(),l=m("div"),h=v(),f=m("div"),g=m("div"),p=m("a"),k=m("h3"),k.textContent=`${r[1]}`,b=v(),w=m("p"),w.textContent=`${r[2]}`,$=v(),C=m("div");for(let q=0;q<Q.length;q+=1)Q[q].c();D=v(),y=m("a"),x=m("span"),_=j(`
                View Source Code
                `),M=he("svg"),S=v(),Ce(i.src,a=r[4])||u(i,"src",a),u(i,"alt",r[1]),u(i,"class","w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"),u(l,"class","absolute inset-0 bg-gradient-to-t from-white/50 dark:from-surface/50 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"),u(o,"class","relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg"),u(s,"href",r[5]),u(s,"target","_blank"),u(s,"rel","noopener noreferrer"),u(s,"class","block overflow-hidden rounded-lg"),u(n,"class","order-1 "+(r[8]%2===1?"md:order-2":"")),u(k,"class","heading-secondary group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(p,"href",r[5]),u(p,"target","_blank"),u(p,"rel","noopener noreferrer"),u(p,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:underline transition-colors duration-300 group/link"),u(w,"class","text-body"),u(g,"class","space-y-4"),u(C,"class","flex flex-wrap gap-2"),u(x,"class","w-8 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"),u(M,"class","w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"),u(M,"fill","none"),u(M,"stroke","currentColor"),u(M,"viewBox","0 0 24 24"),u(y,"href",r[6]),u(y,"target","_blank"),u(y,"rel","noopener noreferrer"),u(y,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group/link"),u(f,"class","order-2 "+(r[8]%2===1?"md:order-1":"")+" space-y-6"),u(t,"class","grid md:grid-cols-2 gap-8 md:gap-12 items-center"),u(e,"class","group")},m(q,U){T(q,e,U),d(e,t),d(t,n),d(n,s),d(s,o),d(o,i),d(o,c),d(o,l),d(t,h),d(t,f),d(f,g),d(g,p),d(p,k),d(g,b),d(g,w),d(f,$),d(f,C);for(let A=0;A<Q.length;A+=1)Q[A]&&Q[A].m(C,null);d(f,D),d(f,y),d(y,x),d(y,_),d(y,M),d(e,S)},p(q,U){if(U&1){O=X(q[3]);let A;for(A=0;A<O.length;A+=1){const ae=Nt(q,O,A);Q[A]?Q[A].p(ae,U):(Q[A]=Dt(ae),Q[A].c(),Q[A].m(C,null))}for(;A<Q.length;A+=1)Q[A].d(1);Q.length=O.length}},d(q){q&&R(e),de(Q,q)}}}function Cn(r){let e,t,n,s,o,i=X(r[0]),a=[];for(let c=0;c<i.length;c+=1)a[c]=Ot(zt(r,i,c));return{c(){e=m("section"),t=m("div"),n=m("header"),n.innerHTML='<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Selected Work</span> <h2 class="heading-primary">Projects</h2>',s=v(),o=m("div");for(let c=0;c<a.length;c+=1)a[c].c();u(n,"class","mb-16 md:mb-20"),u(o,"class","space-y-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900")},m(c,l){T(c,e,l),d(e,t),d(t,n),d(t,s),d(t,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(o,null)},p(c,[l]){if(l&1){i=X(c[0]);let h;for(h=0;h<i.length;h+=1){const f=zt(c,i,h);a[h]?a[h].p(f,l):(a[h]=Ot(f),a[h].c(),a[h].m(o,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=i.length}},i:L,o:L,d(c){c&&R(e),de(a,c)}}}function In(r){return[[{title:"Notificare",description:"Notificare (Romanian: 'to notify') is a Rails engine built on top of ActiveJob::Continuation. It adds a persisted projection of running-job progress, a durable user-facing notification inbox, and a Hotwire UI scaffold — turning Continuation's resumable steps into a state machine that drives notifications without manual broadcast plumbing.",stack:["Ruby","Ruby on Rails"],image:Pn,link:"https://rubygems.org/gems/notificare",repository:"https://github.com/joaoGabriel55/notificare"},{title:"Poker Estima",description:"An app that you can estimate with points (emojis) your tasks with your teammates",stack:["HTML","CSS","JavaScript","Node.js","WebSockets","Express","SQLite"],image:An,link:"https://poker-estima-app.fly.dev/",repository:"https://github.com/joaoGabriel55/NostraEstima"},{title:"The Invoice",description:"Generate professional invoices in minutes. Enter your details, add line items, and export a polished PDF.",stack:["HTML","CSS","JavaScript"],image:qn,link:"https://the-invoice.netlify.app/",repository:"https://github.com/joaoGabriel55/invoice-generator"}]]}class En extends re{constructor(e){super(),te(this,e,In,Cn,V,{})}}const jn=`---\r
title: "Powering Your Database Queries with a LLMs and MCPs"\r
date: "2026/02/15"\r
description: ""\r
tags: ["llm", "mcp", "database", "ai", "react.js", "javascript", "typescript"]\r
---\r
\r
Today, we live in an era where we increasingly encounter AIs of various types and uses in our lives, whether due to hype or not, such as the well-known ChatGPT, Grok, DeepSeek, etc., for simple or complex text or audio chats.\r
\r
What they all have in common is the use of **Large Language Models (LLMs)**, an acronym you've surely encountered during your studies of AI, but which, due to the hype and euphoria of developers and people outside our tech bubble, we often forget the real concept, application, and limitations of LLMs.\r
\r
In general terms: **LLMs are designed to understand and generate text in natural language, as well as other forms of content**, based on vast amounts of data from diverse sources such as \`.txt\`, \`.pdf\`, etc.\r
\r
## The Goal of This Post\r
\r
In this article, I’ll show you how to run LLMs completely locally on your own computer, no pricey API bills, no sending your data to the cloud, and no usage limits (beyond your machine's capacity).\r
\r
We’ll keep everything:\r
\r
- Simple  \r
- Beginner-friendly  \r
- 100% practical  \r
\r
By the end, you’ll be able to ask questions in plain English (“Show me all customers who bought more than $500 last month”) and have the model instantly write perfect (or almost) SQL for you with results.\r
\r
# Use Case: Using an LLM to Generate SQL Queries\r
\r
The use case we will solve is creating a simple chat where we can use natural language to query information in an SQLite database.\r
\r
Whenever a user asks a question:\r
\r
1. The system generates a SQL query.\r
2. The query is executed against the SQLite database.\r
3. The response includes:\r
   - The generated SQL\r
   - A table with the results\r
\r
To do this, we will implement and use:\r
\r
- The [Ollama](https://ollama.com/) tool, which makes it easier to start using LLMs like Gemma 3, DeepSeek-R1, Qwen3, and others locally. In our case, we will use the LLM \`qwen2.5:latest\`, which, as far as I could test, has better results for the programming and SQL domains;\r
\r
- [Model Context Protocol (MCP)](https://blog.codeminer42.com/how-mcp-turned-into-the-ai-agents-lingua-franca/), which implements an open standard that allows AI applications to connect to data sources, tools, and workflows, similar to USB-C, which connects electronic devices in a standardized way.\r
\r
- And finally, a simple SPA app using React.js that will consume our REST API that consumes the LLM with MCP tool.\r
\r
The link to the complete source code for both the backend and the frontend is at the end of this post.\r
\r
The goal throughout this post is to focus on the relevant parts of the server implementation and how to consume it on the front-end side.\r
\r
# Let’s Code!\r
\r
First, we need to install the Ollama tool on our machine. Just access this [link](https://ollama.com/download) and download it for your current OS. After the installation is complete, we need to download our LLM \`qwen2.5:latest\`, which is quite simple:\r
\r
\`\`\`\r
ollama run qwen2.5:latest\r
\`\`\`\r
\r
After completion, you should be able to send messages to the downloaded model, like this:\r
\r
\`\`\`\r
>>> Send a message (/? for help)\r
\`\`\`\r
\r
_Note: Feel free to download and play with other models._\r
\r
## Understanding MCP\r
\r
Below is a diagram illustrating how MCP works:\r
\r
![MCP - How it works](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152305/mcp_flow-1024x400.webp)\r
\r
The MCP defines a standard way to consume external data sources from private or public APIs, databases, documents, and so on, and provides this data to MCP clients, such as Claude Desktop, Cursor IDE, and in our case, the SPA app with React.js.\r
\r
# Backend Implementation (Node.js + Express)\r
\r
We will use Node.js + Express to implement our server, which will consist of just two main files: \`server.ts\` and \`question-to-sql.ts\`. The latter is the most important because it will handle the use of our LLM with MCP and return the SQL query to be executed in our SQLite database as output.\r
\r
## 1. Defining the API Endpoint\r
\r
The goal of our REST API is simple: to provide a POST method \`/mcp\` endpoint that will be consumed by our React app, passing a simple question as text.\r
\r
Let's walk through the code.\r
\r
\`\`\`ts\r
app.post("/question-sql-result", async (req, res) => {\r
  const result = await questionToSQLResult(req.body.question);\r
  res.json(result);\r
});\r
\`\`\`\r
\r
- The \`/question-sql-result\` endpoint accepts a POST request at the \`/question-sql-result\` path and expects a JSON body containing a single \`question\` field.\r
- \`questionToSQLResult\` is the main function that will send the question to our LLM to generate a SQL query and execute it in our SQLite database.\r
- At this point, everything looks good but has no tools yet. So, let's define a new one!\r
\r
## 2. Defining the SQL Tool\r
\r
We need first, register a tool named \`"sql_query_tool"\` with the following parameters:\r
\r
\`\`\`ts\r
export const sqlQueryTool = {\r
  type: "function",\r
  function: {\r
    name: "sql_query_tool",\r
    description: "Receive a sql query and return the result",\r
    parameters: {\r
      type: "object",\r
      required: ["sql"],\r
      properties: {\r
        sql: { type: "string", description: "The SQL query to execute" },\r
      },\r
    },\r
  },\r
};\r
\`\`\`\r
\r
As you can see above, we define a tool named \`"sql_query_tool"\`, which describes our function with a single parameter \`sql\` of type \`string\`.\r
\r
## 3. Executing the SQL Query\r
\r
Now to execute the SQL query, we need to implement the function that will receive the sql query from the tool call and return the result from the database\r
\r
\`\`\`ts\r
export const runSQLQuery = async ({\r
  sql,\r
  db,\r
}: {\r
  sql: string;\r
  db: Database;\r
}) => {\r
  try {\r
    const rows = await db.all(sql);\r
\r
    return { sql, result: rows };\r
  } catch (error) {\r
    throw new Error(\`Error executing SQL query: \${(error as Error).message}\`);\r
  }\r
};\r
\`\`\`\r
\r
Let's check step-by-step what we have inside the \`runSQLQuery\` function:\r
\r
- \`async ({ sql, db }: { sql: string; db: Database })\`\r
  These are the parameters that function receives: \`sql\` query and the \`db\` instance to execute it.\r
- \`const rows = await db.all(sql)\`\r
  Executes the SQL query using the provided \`db\` instance and returns the result as an array of objects.\r
- \`return { sql, result: rows };\`\r
  Returns an object with the SQL query and the result.\r
\r
## 4. The Core Logic\r
\r
\`\`\`ts\r
const ollama = new Ollama({ host: " http://localhost:11434" });\r
\r
const generateChatAnswer = async (messages: Message[]) => {\r
  const response = await ollama.chat({\r
    model: "qwen2.5:latest",\r
    messages,\r
    tools\r
  });\r
\r
  return response.message;\r
};\r
\r
const memoCache = new Map<string, string>();\r
\r
export async function questionToSQLResult(question: string) {\r
  const db = await openDB();\r
\r
  try {\r
    if (memoCache.has(question)) {\r
      const sql = memoCache.get(question)!;\r
\r
      const result = await runSQLQuery({ sql, db });\r
\r
      return result;\r
    }\r
\r
    const schemaInfo = await schemaCache.getSchema(db);\r
\r
    const prompt = \`\r
      You are an expert SQL query generator for SQLite databases.\r
\r
      Your task is to transform a natural language question into a valid SQLite SQL query **by ALWAYS invoking the MCP tool 'sql_query_tool'**.\r
      You must NEVER return SQL directly in plain text.\r
\r
      ### Database schema\r
      \${schemaInfo}\r
\r
      ### Mandatory rules\r
      - You MUST call the MCP tool 'sql_query_tool' to produce the final output\r
      - Do NOT output SQL directly in the assistant message\r
      - The SQL query must be the ONLY content passed to the tool\r
      - If a query cannot be generated, pass the exact string below to the tool:\r
        "Cannot generate query: required tables or columns not found in schema"\r
\r
      ### Query generation rules\r
      - Use ONLY tables and columns defined in the schema\r
      - Use table and column names exactly as they appear in the schema\r
      - Generate syntactically correct SQLite SQL\r
      - Use appropriate JOINs (INNER, LEFT, RIGHT) based on relationships and intent\r
      - Apply WHERE clauses when filtering is implied\r
      - Use aggregation functions (COUNT, SUM, AVG, MIN, MAX) when appropriate\r
      - Use GROUP BY whenever aggregations are used\r
      - Use ORDER BY when sorting is requested\r
      - Handle NULL values correctly when relevant\r
      - Do NOT include comments, explanations, markdown, or formatting\r
\r
      ### User question\r
      \${question}\r
\r
      ### Output requirement\r
      - Call the MCP tool 'sql_query_tool'\r
      - Pass ONLY the raw SQL query (or the failure message) as the tool input\r
    \`;\r
\r
    const response = await generateChatAnswer([\r
      { role: "user", content: prompt },\r
    ]);\r
\r
    console.log("tool_calls: ", response.tool_calls);\r
\r
    if (!response.tool_calls?.length) return null;\r
\r
    const call = response.tool_calls[0];\r
    const args = call.function.arguments as { sql: string };\r
\r
    console.log("SQL: ", args.sql);\r
\r
    const result = await runSQLQuery({ sql: args.sql, db });\r
\r
    memoCache.set(question, args.sql);\r
\r
    return result;\r
  } catch (error) {\r
    console.error(error);\r
    return null;\r
  } finally {\r
    await db.close();\r
  }\r
}\r
\`\`\`\r
\r
We have above the \`questionToSQLResult\` function that makes the "magic", handling the generation of SQL queries from questions in natural language. And for this, this function:\r
\r
1. Checks if the question sent is present on our \`memoCache\` to avoid unnecessary calls to the LLM and saving our memory and execute the SQL query;\r
2. If is not present on the \`memoCache\`, get our database schema through \`schemaCache.getSchema(db)\` and use it in the prompt to be sent to LLM. This will make our prompt more rich in details and context about our database tables and its structures;\r
3. Defines a prompt with detailed instructions on how to interpret and transform the question into a valid SQL query;\r
4. Calls the \`generateChatAnswer\`, which chats with Ollama using the model \`"qwen2.5:latest"\` with a set of \`tools\` containing our \`sqlQueryTool\` definition. This allows our LLM knows that our tool exists and can be used to generate SQL queries, it is a new superpower;\r
5. Processes the response looking for the \`tool_calls\` and getting the function call arguments, in our case the \`sql\`.\r
6. Finally, executes the SQL query using the \`runSQLQuery\` method.\r
\r
The key idea is forcing the model to:\r
\r
* **Always invoke the MCP tool**\r
* Never output raw SQL directly\r
* Use only schema-defined tables and columns\r
\r
_Note: The more detailed our prompt is, the more accurate our final response will be. Try new prompts or improvements during your development._\r
\r
## Practical Example\r
\r
If the input is a question such as: \`"Select all users with email with domain @yahoo.com"\`, it will generate something similar to:\r
\r
\`\`\`sql\r
SELECT * FROM users WHERE email LIKE '%@yahoo.com';\r
\`\`\`\r
\r
# Frontend (React + TypeScript)\r
\r
So, once our backend server is implemented, we can understand how to integrate it into our chat app, nicknamed "GPTo Database Chat".\r
\r
Our app is very straightforward in its features, basically allowing the user to:\r
\r
1. Send a question to our database and obtain the SQL query and the returned data;\r
2. Automatically save the questions asked in the browser's local storage history.\r
\r
To implement the above features, React.js (with TypeScript) + [framework's React Router](https://reactrouter.com/start/framework/installation) was used.\r
\r
The core of the app relevant to this post is the integration with the API of our backend server through the implementation of the custom React hook \`useQuestionToSqlResult\`, a simple wrapper to call our API endpoint and be used by our UI to interact with our backend server.\r
\r
\`\`\`ts\r
export interface ChatResponse {\r
  sql: string;\r
  result: unknown[];\r
}\r
\r
async function makeRequest(body: Record<string, any>) {\r
  const response = await fetch("http://localhost:3002/question-sql-result", {\r
    method: "POST",\r
    headers: {\r
      "Content-Type": "application/json",\r
    },\r
    body: JSON.stringify(body),\r
  });\r
\r
  return await response.json();\r
}\r
\r
export function useQuestionToSqlResult() {\r
  const [isLoading, setIsLoading] = useState(false);\r
  const [isError, setIsError] = useState(false);\r
\r
  const call = async (question: string) => {\r
    setIsLoading(true);\r
    try {\r
      const result = await makeRequest({ question });\r
\r
      return result as ChatResponse;\r
    } catch (error) {\r
      console.error(error);\r
      setIsError(true);\r
      throw error;\r
    } finally {\r
      setIsLoading(false);\r
    }\r
  };\r
\r
  return { isLoading, isError, call };\r
}\r
\`\`\`\r
\r
The implementation is very simple and straightforward. When the user provides a question, the UI calls \`call(question)\`. The hook then communicates with the backend via \`makeRequest\`, obtains the SQL query and its results, and updates its internal states (\`isLoading\` and \`isError\`). \r
\r
Finally, the UI renders the generated SQL query and its tabular results for better visualization.\r
\r
![GPTo](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152314/sql_llm-1024x543.webp)\r
\r
# Wrapping up\r
\r
It's simple to use and integrate a local LLM and calls MCP tools with a simple REST server using Ollama, right? I hope this post has made it clearer what LLMs actually are and how we can go beyond common cloud usage (like ChatGPT, Grok, Copilot, etc.), adopting open-source models provided by the community that can be installed locally to solve everyday tasks—like the natural language SQL query demonstrated in this post, and without depending on super models that require your credit card!\r
\r
That's all for today, folks! Until next time!\r
\r
👉 Check out the complete source code here:\r
[https://github.com/joaoGabriel55/MCP-SQL-Server](https://github.com/joaoGabriel55/MCP-SQL-Server)\r
`,Bn=`---\r
title: Python Who? Why This Hidden Gem Shows That Ruby's ML Ecosystem Is Better Than You Think"\r
date: "2026/05/26"\r
description: ""\r
tags: ["ruby", "machine learning"]\r
---\r
\r
Okay, I got your attention. If you have not read this interesting [blog post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/), no problem, you can read it later, because this post can be a good complement to it. In the machine learning field, it's very common to use Python as the default language to build and use machine learning algorithms. But some people aren't so familiar with the language and, most of the time, choose it to start working with Artificial Intelligence without thinking twice. If you come from the Ruby community, though, I have good news: you don't need to use Python to work with ML. You can use a "hidden" (or not-so-hyped) gem called [Rumale](https://github.com/yoshoku/rumale), and in this post I'll show how to use it in practical, real-world use cases.\r
\r
Nowadays, as devs living in our tech bubble, we're breathing the AI age, surrounded by information about LLM models, agents, and so on. As a result, some foundational and important concepts get forgotten, in this case: Machine Learning.\r
\r
### But First, Let's Recap What Machine Learning Is\r
\r
> All machine learning is AI, but not all AI is machine learning.\r
\r
We can understand ML as a subset of AI that focuses exclusively on algorithms able to "learn" patterns from training data, which can then make accurate inferences about new input data. It's very similar to the way we humans learn things throughout our lives.\r
\r
Examples of Machine Learning areas:\r
- Supervised Learning\r
- Unsupervised Learning\r
- Reinforcement Learning\r
- Deep Learning\r
\r
But don't despair, you don't need to dive deep into these complex concepts and algorithms, or even get a PhD. In our day-to-day work, we just need tools that make our lives easier when we decide to work with one of the many ML algorithms. You're about to get to know one of those tools.\r
\r
### Have You Heard About Rumale?\r
\r
Rumale (**Ru**by **ma**chine **le**arning) is a machine learning library for Ruby with an API that mirrors Python's Scikit-Learn. If you come from the Python ML world and have used scikit-learn, you'll feel at home immediately. Methods like \`fit\`, \`transform\`, \`predict\`, and \`score\` are identical.\r
\r
This gem has a Robin to its Batman: \`Numo::NArray\`, a numerical N-dimensional array class for fast processing and easy manipulation of multi-dimensional numerical data, similar to \`numpy.ndarray\`.\r
\r
So Rumale fills a real gap, letting a Ruby on Rails app add classifiers, recommendation logic, or anomaly detection without bringing in a separate Python service.\r
\r
### Where Can I Apply Rumale?\r
\r
There are many use cases where you can use this awesome gem. Let's look at some of them and the models recommended for each:\r
\r
- **Spam classifier**: \`TfidfTransformer\` + \`MultinomialNB\` or \`LogisticRegression\`. Train offline, \`Marshal.dump\` the model, and load it in the web process.\r
- **Customer churn prediction**: \`RandomForestClassifier\` with a \`StandardScaler\` in a \`Pipeline\`, tuned via \`GridSearchCV\`.\r
- **Customer segmentation**: \`KMeans\` or \`DBSCAN\` on order history, evaluated with \`SilhouetteScore\`.\r
- **Fraud detection**: \`IsolationForest\` style work using ensemble trees, or \`DBSCAN\`.\r
- **Lead scoring**: \`GradientBoostingClassifier\` on CRM data.\r
- **Image/feature dimensionality reduction for visualization**: \`PCA\`, then \`TSNE\`.\r
\r
### Setup\r
\r
Before we write any code, let's get Rumale installed. You'll need Ruby 2.7 or newer.\r
\r
If you're just experimenting, install the gem directly:\r
\r
\`\`\`bash\r
gem install rumale\r
\`\`\`\r
\r
Or, if you're adding it to a Ruby/Rails project, drop it into your \`Gemfile\` and run \`bundle install\`:\r
\r
\`\`\`rb\r
# Gemfile\r
gem 'rumale'\r
\`\`\`\r
\r
Rumale depends on [\`Numo::NArray\`](https://github.com/ruby-numo/numo-narray) for its number processing, and it's pulled in automatically as a dependency. So once the gem is installed, both \`require 'rumale'\` and \`require 'numo/narray'\` will be available. With that in place, we're ready to go.\r
\r
### How to Use It\r
\r
Using Rumale is a no-brainer. Let's use the lead-scoring use case as a backdrop to understand how we can work with the gem.\r
\r
Take a look at how things work, in simple architectural terms:\r
\r
![lead scoring](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/05/26144438/Screenshot-2026-05-26-at-2.44.18-PM-1024x661.webp)\r
\r
First, we need to implement our training algorithm. Check it out:\r
\r
\`\`\`rb\r
require 'rumale'\r
require 'numo/narray'\r
\r
# ---------------------------------------------------------------------------\r
# 1. Training data\r
# ---------------------------------------------------------------------------\r
# Each row is one lead. Features (columns) are:\r
#   [ company_size(number of collaborators), pages_viewed, emails_opened, demo_requested(0/1), days_since_signup ]\r
#\r
# In a real app these would come from your CRM / database, not be hard-coded.\r
samples = Numo::DFloat[\r
  [  50,  2,  1, 0, 30],   # small, low engagement\r
  [ 500, 12,  8, 1,  3],   # big, very engaged, asked for a demo\r
  [  10,  1,  0, 0, 60],   # tiny, cold\r
  [ 800, 20, 15, 1,  1],   # enterprise, hot lead\r
  [ 120,  5,  3, 0, 14],   # medium, lukewarm\r
  [ 300, 15, 10, 1,  5],   # solid, engaged\r
  [  20,  3,  1, 0, 45],   # small, cold\r
  [ 650, 18, 12, 1,  2],   # large, hot\r
  [  80,  4,  2, 0, 25],   # small-medium, lukewarm\r
  [ 400, 10,  6, 1,  7]    # medium-large, engaged\r
]\r
\r
# Labels: 1 = the lead converted (became a customer), 0 = it did not.\r
labels = Numo::Int32[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]\r
\r
# ---------------------------------------------------------------------------\r
# 2. Build a pipeline: scale features -> logistic regression\r
# ---------------------------------------------------------------------------\r
# Features live on very different scales (company_size in hundreds vs\r
# demo_requested 0/1). StandardScaler normalizes them so the model treats\r
# each feature fairly.\r
#\r
# LogisticRegression is a great fit for scoring because it naturally outputs\r
# calibrated probabilities, which map cleanly onto a 0-100 score.\r
scaler     = Rumale::Preprocessing::StandardScaler.new\r
\r
# reg_param === regularization parameter\r
# Higher reg_param (e.g. 1.0, 10.0): stronger penalty, weights pushed toward zero. Simpler, smoother model.\r
# Lower reg_param (e.g. 0.001): weak penalty. The model is freer to fit the training data closely.\r
classifier = Rumale::LinearModel::LogisticRegression.new(reg_param: 0.1) # The value in this example is a middle ground\r
\r
pipeline = Rumale::Pipeline::Pipeline.new(\r
  steps: { scaler: scaler, model: classifier }\r
)\r
\r
# Train the whole pipeline in one call.\r
pipeline.fit(samples, labels)\r
\r
# ---------------------------------------------------------------------------\r
# 3. Persist the FITTED pipeline with Marshal\r
# ---------------------------------------------------------------------------\r
# Marshal.dump serializes the whole object graph: the trained logistic\r
# regression weights AND the scaler's learned mean/std. Everything needed to\r
# score is captured, so we never have to retrain just to make predictions.\r
#\r
# Use binary mode ('wb') because Marshal output is binary, not text.\r
File.open('lead_model.dat', 'wb') do |f|\r
  f.write(Marshal.dump(pipeline))\r
end\r
\r
puts 'Model trained and saved to lead_model.dat'\r
\`\`\`\r
\r
Now we need to use our trained model, saved in the project folder, to predict lead scores for new samples. Let's see:\r
\r
\`\`\`rb\r
require 'rumale'\r
require 'numo/narray'\r
\r
# ---------------------------------------------------------------------------\r
# 1. Load the trained pipeline back from disk\r
# ---------------------------------------------------------------------------\r
# Marshal.load reconstructs the exact fitted pipeline we saved earlier --\r
# same weights, same scaler parameters. Read in binary mode ('rb').\r
#\r
# If you want to use it in a Rails app you'd typically do this ONCE at boot (e.g. in an initializer)\r
# and keep the object in memory, rather than reloading on every request.\r
pipeline = Marshal.load(File.binread('lead_model.dat'))\r
\r
# ---------------------------------------------------------------------------\r
# 2. Score new, unseen leads\r
# ---------------------------------------------------------------------------\r
new_leads = Numo::DFloat[\r
  [ 540, 16,  4, 1,  2],   # likely strong\r
  [ 500,  8,  9, 0, 12],   # in between\r
  [ 200,  7,  4, 0, 10]    # likely cold\r
]\r
\r
# predict_proba: returns the probability (a float) of a lead becoming a customer\r
conversion_probs = pipeline.predict_proba(new_leads)[true, 1]\r
\r
# ---------------------------------------------------------------------------\r
# 3. Convert probabilities into a 0-100 score and tier\r
# ---------------------------------------------------------------------------\r
new_leads.shape[0].times do |i|\r
  score = (conversion_probs[i] * 100).round\r
\r
  tier =\r
    if    score >= 70 then 'HOT'\r
    elsif score >= 40 then 'WARM'\r
    else                   'COLD'\r
    end\r
\r
  puts "Lead ##{i + 1}: score = #{score}/100  (#{tier})"\r
end\r
\`\`\`\r
\r
Run that script and you'll see something like this:\r
\r
\`\`\`text\r
Lead #1: score = 98/100  (HOT)\r
Lead #2: score = 46/100  (WARM)\r
Lead #3: score = 11/100  (COLD)\r
\`\`\`\r
\r
The model picked up exactly what we'd expect: the large, highly engaged lead that requested a demo lands firmly in the HOT tier; the second lead, also a big company, with steady email activity but no demo request, comes out WARM; and the smaller, lower-engagement lead with no demo is clearly COLD. (Your exact numbers may differ slightly depending on the Rumale version, but the tiers should line up.)\r
\r
## Caveats\r
\r
As with everything in life and programming, Rumale is not a silver bullet. It has some limitations that are worth mentioning before you use it.\r
\r
- No native GPU support: for deep learning, reach for [\`Rumale::Torch\`](https://github.com/yoshoku/rumale-torch).\r
- A smaller ecosystem than Python: fewer pretrained models, fewer tutorials, and a smaller community.\r
- The switch to \`Numo::NArray\` in v2.0.0 is worth flagging if you have older Rumale code.\r
- No DataFrame integration comparable to pandas: you'll be working with raw \`Numo::NArray\` arrays.\r
\r
## Wrapping Up\r
\r
Easy, right? Keep in mind that the example above is simple, but it's a good demonstration of the power of the Rumale gem and of how we can make our Ruby or Ruby on Rails applications even richer and more valuable by using ML algorithms wisely to solve real world problems.\r
\r
You don't always need a separate Python service, a heavyweight framework, or a PhD to bring machine learning into your app. Sometimes a well-chosen gem is all it takes. And if you haven't yet, go read the [companion post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/) that inspired this post. It's a great reminder that the right classic algorithm can still be better than a hyped new model.\r
`,zn=`---\r
title: "Why a 1990s Machine Learning Algorithm Destroys LLMs at Predicting House Prices"\r
date: "2026/03/13"\r
description: ""\r
tags: ["llm", "machine learning", "ruby", "benchmark", "random forest"]\r
---\r
\r
I asked an LLM how much my neighbor's house might be worth, a 300m² place with 4 bedrooms, not too old. It gave me a vague, hedged answer that could have applied to almost any property. So I decided to build something better, and in the process, learned an important lesson about when to reach for traditional machine learning instead of a language model.\r
\r
With all the hype surrounding LLMs, it's tempting to treat them as silver bullets. But as we'll see in this post, backed by actual benchmark experiments, there are tasks where traditional ML algorithms are not just viable alternatives, but measurably superior. And the best part? The two approaches can work together.\r
\r
## The Problem: How Much Is That House Worth?\r
\r
Determining a fair price for a property is far from trivial. You can filter by bedrooms, bathrooms, square meters, and location, but turning those features into a reliable price estimate requires more than intuition.\r
\r
An LLM might give you a ballpark figure, but its answer isn't grounded in your actual dataset. It's drawing on general training data, and for a task that demands numerical precision on structured inputs, that's a fundamental limitation.\r
\r
A more reliable approach is to use a machine learning algorithm designed for exactly this kind of predictive task. In this article, we'll use **Random Forest** and then put it head-to-head against an LLM to prove the point with data.\r
\r
## How Random Forest Works\r
\r
Random Forest combines the output of multiple decision trees to produce a single prediction. Each tree learns from a random subset of the data and makes its own estimate. The forest aggregates all the trees' answers:\r
\r
- For **regression** (predicting a price), it averages the predictions.\r
- For **classification** (e.g., "cheap" vs. "expensive"), it takes the majority vote.\r
\r
A single decision tree works by asking a sequence of structured questions about the input data. Starting at the root node, it evaluates a condition (e.g., "Is the area &gt; 100m²?"), branches based on the answer, and repeats until it reaches a leaf node containing the final prediction.\r
\r
The power of Random Forest lies in combining many such trees. Each one sees a slightly different slice of the data, so their individual errors tend to cancel out. The result is a model that's more accurate and robust than any single tree.\r
\r
## Defining Our Model\r
\r
To estimate a property's price, we need to define features (X) and a target (Y).\r
\r
**Features:**\r
- Area (in square meters)\r
- Number of Rooms\r
- Number of Bathrooms\r
- Age (in years)\r
\r
**Target:** Price (in thousands)\r
\r
Our dataset is a CSV file where each row contains these 4 features plus the price. We use a synthetic dataset here — the Limitations section below discusses what that means for the results and how the approach scales to real data.\r
\r
## Training the Model in Ruby\r
\r
We'll use **[Rumale](https://github.com/yoshoku/rumale)** (a machine learning library for Ruby) and **[Numo::NArray](https://github.com/ruby-numo/numo-narray)** (for efficient numerical arrays, similar to NumPy in Python).\r
\r
\`\`\`ruby\r
require 'csv'\r
require 'rumale'\r
require 'numo/narray'\r
\r
# Load and split data\r
data = CSV.read("houses.csv")\r
houses_features = data.map { |row| (0..row.length-2).map { |i| row[i].to_i } }\r
houses_prices = data.map { |row| row.last.to_i }\r
\r
x = Numo::DFloat.asarray(houses_features)\r
y = Numo::DFloat.asarray(houses_prices)\r
\r
# Train Random Forest\r
model = Rumale::Ensemble::RandomForestRegressor.new(\r
  n_estimators: 100,  # 100 decision trees\r
  max_depth: nil,     # let trees grow fully\r
  random_seed: 42     # reproducible results\r
)\r
model.fit(x, y)\r
\r
# Save for later use\r
File.open("house_model.dat", "wb") { |f| Marshal.dump(model, f) }\r
\`\`\`\r
\r
This trains 100 decision trees on our data and saves the model to disk. The \`random_seed\` ensures reproducibility — run it twice, get the same model.\r
\r
Once trained, making predictions is straightforward:\r
\r
\`\`\`ruby\r
require 'rumale'\r
require 'numo/narray'\r
\r
def predict_price(params)\r
  model = Marshal.load(File.read("house_model.dat"))\r
\r
  input = Numo::DFloat[[\r
    params[:area],\r
    params[:rooms],\r
    params[:bathrooms],\r
    params[:age]\r
  ]]\r
\r
  puts "Predicted price: #{model.predict(input)[0]}K"\r
end\r
\r
predict_price(area: 500, rooms: 10, bathrooms: 5, age: 20)\r
\`\`\`\r
\r
I wrapped this into a simple web app where users fill in the property features and get an instant price estimate:\r
\r
![Web app input form](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171245/Screenshot-2026-02-27-at-5.11.54-PM-1024x667.webp)\r
\r
![Web app prediction result](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171259/Screenshot-2026-02-27-at-5.12.13-PM-1024x603.webp)\r
\r
The [source code is on GitHub](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest) — contributions welcome.\r
\r
## Putting It to the Test: Random Forest vs. LLM\r
\r
Instead of just claiming that Random Forest is better for this task, I ran a series of controlled experiments to measure the difference across four dimensions: accuracy, latency, consistency, and hybrid integration. You can reproduce every result using the [benchmark script](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest/blob/main/benchmark.rb) included with this post.\r
\r
### Experimental Setup\r
\r
To make these results reproducible, here are the exact conditions:\r
\r
**Dataset:** CSV file with 50050 rows, each containing 4 numeric features (area in m², rooms, bathrooms, age in years) and a target price in thousands. Split 80/20 into training (40040 rows) and test (10010 rows) sets using a fixed shuffle seed of 42.\r
\r
**Random Forest configuration:**\r
- Library: Rumale (Ruby)\r
- \`n_estimators\`: 100\r
- \`max_depth\`: nil (unlimited)\r
- \`random_seed\`: 42\r
\r
**LLM configuration:**\r
- Provider: OpenRouter\r
- Model: \`anthropic/claude-opus-4.6\` (Claude Opus 4.6)\r
- \`max_tokens\`: 50 (for price predictions), 100 (for feature extraction)\r
- \`temperature\`: 1.0 (for prediction and consistency experiments), 0.0 (for feature extraction)\r
\r
**Prompts used (verbatim):**\r
\r
For price prediction (Experiments 1–3):\r
\`\`\`\r
You are a house price estimator. Based on these features, predict the house\r
price in thousands (K). Reply with ONLY a number followed by K. Example: 450K\r
\r
Features:\r
- Area: {area} m²\r
- Rooms: {rooms}\r
- Bathrooms: {bathrooms}\r
- Age: {age} years\r
\r
Predicted price:\r
\`\`\`\r
\r
For feature extraction (Experiment 4):\r
\`\`\`\r
Extract house features from the following description. Return ONLY a JSON\r
object with these exact keys:\r
{"area": <number>, "rooms": <number>, "bathrooms": <number>, "age": <number>}\r
\r
Description: "{user_text}"\r
\r
JSON:\r
\`\`\`\r
\r
**Evaluation metrics:**\r
- **MAE** (Mean Absolute Error): average of |actual − predicted| across test cases\r
- **RMSE** (Root Mean Squared Error): square root of the average squared errors\r
- **Latency**: wall-clock time per prediction (including network round-trip for LLM)\r
- **Variance**: standard deviation across 10 repeated predictions of the same input\r
\r
All LLM experiments were run on the same 20-case test subset to keep API costs manageable. Random Forest metrics are also reported on this same subset for fair comparison.\r
\r
### Experiment 1: Accuracy\r
\r
Using the 20-case test subset described above, I ran both models on the same inputs and compared their errors:\r
\r
| Metric | Random Forest | LLM (anthropic/claude-opus-4.6) |\r
|--------|--------------|----------------|\r
| MAE    | 8.21K | 155.4K |\r
| RMSE   | 10.8K | 213.5K |\r
\r
The Random Forest model, trained on the actual dataset, produces predictions grounded in the patterns it learned. The LLM, despite being remarkably capable at language tasks, is essentially guessing based on general knowledge. It has no access to our specific data distribution.\r
\r
### Experiment 2: Latency and Cost\r
\r
Speed matters, especially if you're serving predictions in a web app.\r
\r
| Metric | Random Forest | LLM |\r
|--------|--------------|-----|\r
| Avg latency | 0.45 ms | 4040.5 ms |\r
| Speedup | — | ~8985x slower |\r
\r
Random Forest inference is nearly instantaneous — microseconds on a single CPU. An LLM API call involves network round-trips and GPU inference time, making it orders of magnitude slower.\r
\r
### Experiment 3: Consistency\r
\r
I asked each model to predict the same house price 10 times.\r
\r
Random Forest returned the **exact same number every time** — it's deterministic given the same input and seed.\r
\r
The LLM returned a **different number almost every time**. Even with the same prompt, the stochastic nature of language generation means you get variance in numerical outputs.\r
\r
| Case | RF Variance | LLM Standard Deviation (Std Dev) |\r
|------|-------------|-------------|\r
| 342, 6, 6, 22 | 0 (deterministic) | 70.06K |\r
| 280, 5, 5, 12 | 0 (deterministic) | 14.0K |\r
| 267, 5, 2, 32 | 0 (deterministic) | 32.33K |\r
\r
For a pricing tool, this inconsistency is a serious problem. Users expect the same input to produce the same output.\r
\r
### Experiment 4: The Hybrid Approach\r
\r
Here's the twist. Real users don't type structured numbers into forms — they say things like:\r
\r
> "A spacious 250 square meter house with 5 bedrooms and 3 bathrooms, built about 10 years ago"\r
\r
Random Forest can't parse that. But an LLM can.\r
\r
I built a hybrid pipeline where the LLM extracts structured features from natural language, then passes them to Random Forest for prediction:\r
\r
\`\`\`\r
User text → LLM (extract parameters) → Random Forest → Price prediction\r
\`\`\`\r
\r
| Input | Expected | Extracted | Match | RF Price (extracted) | RF Price (correct) |\r
|-------|----------|-----------|-------|---------------------|--------------------|\r
| A spacious 250 square meter house with 5 ... | [250, 5, 3, 10] | [250, 5, 3, 10] | ✅ | 669.0K | 669.0K |\r
| Small apartment, 60m², 2 rooms, 1 bathroo... | [60, 2, 1, 2] | [60, 2, 1, 2] | ✅ | 175.6K | 175.6K |\r
| Old colonial mansion with 400 square mete... | [400, 8, 4, 50] | [400, 8, 4, 50] | ✅ | 800.8K | 800.8K |\r
| Modern 120m² flat, 3 bedrooms, 2 bathroom... | [120, 3, 2, 5] | [120, 3, 2, 5] | ✅ | 324.2K | 324.2K |\r
| Cozy 80 sqm home, two bedrooms, one bathr... | [80, 2, 1, 15] | [80, 2, 1, 15] | ✅ | 175.7K | 175.7K |\r
\r
**Extraction accuracy:** 100.0%\r
\r
In Ruby, this pipeline looks like:\r
\r
\`\`\`ruby\r
user_text = "Modern 300m² house, 4 bedrooms, less than 10 years old"\r
\r
# LLM extracts structured features\r
structured_params = LLM.extract_features(user_text)\r
# => { area: 300, rooms: 4, bathrooms: 2, age: 10 }\r
\r
# Random Forest predicts the price\r
predict_price(structured_params)\r
# => "Predicted price: 485K"\r
\`\`\`\r
\r
Each tool does what it's best at: the LLM handles flexible human language, the ML model handles numerical prediction.\r
\r
## What This Teaches Us\r
\r
The experiments above measured four specific dimensions, and the results point to a clear division of labor:\r
\r
**Where Random Forest wins:** On structured numerical prediction, it was more accurate (lower MAE/RMSE, since it actually learned from the data distribution), faster (microseconds vs. seconds per prediction), deterministic (zero variance across repeated calls), and essentially free at inference time. These are not minor advantages — for a production pricing tool, consistency and speed are table stakes.\r
\r
**Where the LLM wins:** In Experiment 4, the LLM correctly parsed natural language descriptions into structured features with high accuracy. This is a task that Random Forest simply cannot do — it requires no training data, just the ability to understand human language. Crucially, the LLM's strength here is *extraction*, not *prediction*. It's parsing, not estimating.\r
\r
**The broader principle:** This isn't a story about Random Forest being "better" than LLMs. It's about choosing the right tool for each subtask in a pipeline. LLMs excel at understanding unstructured input and generating structured output. Traditional ML excels at learning patterns from domain-specific data and producing reliable numerical predictions. The hybrid pipeline — LLM as parser, ML model as predictor — leverages both strengths without exposing either to tasks they're poorly suited for.\r
\r
This pattern generalizes beyond house prices. Any system where users provide natural language input but the core task is numerical prediction on structured features (credit scoring, demand forecasting, medical risk assessment, insurance pricing) is a candidate for the same architecture. Before defaulting to an LLM for the entire pipeline, ask: *is the hard part understanding the input, or making the prediction?* Often it's the former, and a focused ML model handles the latter better.\r
\r
### Limitations and Caveats\r
\r
These experiments have known limitations worth acknowledging. The dataset is synthetic, so the absolute accuracy numbers don't reflect real-world property valuation — they demonstrate the *relative* advantage of a trained model over an untrained one. Real-world house prices depend on many more variables (location, condition, school district, market timing, nearby amenities), but the approach scales: just add more features and swap in real listing data. The LLM had no access to the training data distribution, which is the core reason it underperforms on prediction; in a scenario where an LLM is fine-tuned on the same data or given retrieval access to comparable sales, the accuracy gap would narrow. The latency comparison is also network-dependent — a self-hosted LLM would be faster than an API call, though still orders of magnitude slower than a local Random Forest inference. Finally, we tested a single LLM (Claude Opus 4.6); other models may behave differently on numerical estimation tasks.\r
\r
## What's Next\r
\r
A trained model is only useful if it stays current. As new property data comes in, the model should retrain periodically to capture market shifts. In a Rails application, this is straightforward: schedule an ActiveJob that pulls fresh CSV data, retrains the Random Forest, and writes a new \`house_model.dat\`, all in the background without interrupting the web app.\r
\r
Beyond retraining, there are a few natural extensions worth exploring: adding location as a feature (using neighborhood encoding or latitude/longitude), incorporating feature importance analysis to understand which variables drive price the most, and wrapping the hybrid LLM + Random Forest pipeline into a single API endpoint so users can query in natural language and get structured predictions back.\r
\r
## References\r
\r
- [Rumale Documentation](https://yoshoku.github.io/rumale/doc/Rumale.html)\r
- [IBM — Random Forest](https://www.ibm.com/br-pt/think/topics/random-forest)\r
- Rokach, L., Maimon, O. (2005). Decision Trees. In: Maimon, O., Rokach, L. (eds) Data Mining and Knowledge Discovery Handbook. Springer, Boston, MA. [https://doi.org/10.1007/0-387-25465-X_9](https://doi.org/10.1007/0-387-25465-X_9)\r
`;function dt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xe=dt();function kr(r){xe=r}var ke={exec:()=>null};function P(r,e=""){let t=typeof r=="string"?r:r.source,n={replace:(s,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(ee.caret,"$1"),t=t.replace(s,i),n},getRegex:()=>new RegExp(t,e)};return n}var Nn=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ee={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},Dn=/^(?:[ \t]*(?:\n|$))+/,On=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Qn=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,je=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Fn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,wr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,yr=P(wr).replace(/bull/g,pt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Hn=P(wr).replace(/bull/g,pt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ft=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wn=/^[^\n]+/,gt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Un=P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gn=P(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pt).getRegex(),Ze="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",mt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Yn=P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",mt).replace("tag",Ze).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xr=P(ft).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Kn=P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",xr).getRegex(),bt={blockquote:Kn,code:On,def:Un,fences:Qn,heading:Fn,hr:je,html:Yn,lheading:yr,list:Gn,newline:Dn,paragraph:xr,table:ke,text:Wn},Qt=P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Zn={...bt,lheading:Hn,table:Qt,paragraph:P(ft).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qt).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex()},Xn={...bt,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",mt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ke,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(ft).replace("hr",je).replace("heading",` *#{1,6} *[^
]`).replace("lheading",yr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Vn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vr=/^( {2,}|\\)\n(?!\s*$)/,es=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Xe=/[\p{P}\p{S}]/u,kt=/[\s\p{P}\p{S}]/u,_r=/[^\s\p{P}\p{S}]/u,ts=P(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,kt).getRegex(),Lr=/(?!~)[\p{P}\p{S}]/u,rs=/(?!~)[\s\p{P}\p{S}]/u,ns=/(?:[^\s\p{P}\p{S}]|~)/u,$r=/(?![*_])[\p{P}\p{S}]/u,ss=/(?![*_])[\s\p{P}\p{S}]/u,as=/(?:[^\s\p{P}\p{S}]|[*_])/u,os=P(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Nn?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Sr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,is=P(Sr,"u").replace(/punct/g,Xe).getRegex(),ls=P(Sr,"u").replace(/punct/g,Lr).getRegex(),Rr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",cs=P(Rr,"gu").replace(/notPunctSpace/g,_r).replace(/punctSpace/g,kt).replace(/punct/g,Xe).getRegex(),us=P(Rr,"gu").replace(/notPunctSpace/g,ns).replace(/punctSpace/g,rs).replace(/punct/g,Lr).getRegex(),hs=P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,_r).replace(/punctSpace/g,kt).replace(/punct/g,Xe).getRegex(),ds=P(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,$r).getRegex(),ps="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",fs=P(ps,"gu").replace(/notPunctSpace/g,as).replace(/punctSpace/g,ss).replace(/punct/g,$r).getRegex(),gs=P(/\\(punct)/,"gu").replace(/punct/g,Xe).getRegex(),ms=P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bs=P(mt).replace("(?:-->|$)","-->").getRegex(),ks=P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bs).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),He=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ws=P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",He).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Tr=P(/^!?\[(label)\]\[(ref)\]/).replace("label",He).replace("ref",gt).getRegex(),Mr=P(/^!?\[(ref)\](?:\[\])?/).replace("ref",gt).getRegex(),ys=P("reflink|nolink(?!\\()","g").replace("reflink",Tr).replace("nolink",Mr).getRegex(),Ft=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wt={_backpedal:ke,anyPunctuation:gs,autolink:ms,blockSkip:os,br:vr,code:Jn,del:ke,delLDelim:ke,delRDelim:ke,emStrongLDelim:is,emStrongRDelimAst:cs,emStrongRDelimUnd:hs,escape:Vn,link:ws,nolink:Mr,punctuation:ts,reflink:Tr,reflinkSearch:ys,tag:ks,text:es,url:ke},xs={...wt,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",He).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",He).getRegex()},st={...wt,emStrongRDelimAst:us,emStrongLDelim:ls,delLDelim:ds,delRDelim:fs,url:P(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ft).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:P(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ft).getRegex()},vs={...st,br:P(vr).replace("{2,}","*").getRegex(),text:P(st.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ze={normal:bt,gfm:Zn,pedantic:Xn},Te={normal:wt,gfm:st,breaks:vs,pedantic:xs},_s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ht=r=>_s[r];function ue(r,e){if(e){if(ee.escapeTest.test(r))return r.replace(ee.escapeReplace,Ht)}else if(ee.escapeTestNoEncode.test(r))return r.replace(ee.escapeReplaceNoEncode,Ht);return r}function Wt(r){try{r=encodeURI(r).replace(ee.percentDecode,"%")}catch{return null}return r}function Ut(r,e){var o;let t=r.replace(ee.findPipe,(i,a,c)=>{let l=!1,h=a;for(;--h>=0&&c[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(ee.splitPipe),s=0;if(n[0].trim()||n.shift(),n.length>0&&!((o=n.at(-1))!=null&&o.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(ee.slashPipe,"|");return n}function Me(r,e,t){let n=r.length;if(n===0)return"";let s=0;for(;s<n;){let o=r.charAt(n-s-1);if(o===e&&!t)s++;else if(o!==e&&t)s++;else break}return r.slice(0,n-s)}function Ls(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function $s(r,e=0){let t=e,n="";for(let s of r)if(s==="	"){let o=4-t%4;n+=" ".repeat(o),t+=o}else n+=s,t++;return n}function Gt(r,e,t,n,s){let o=e.href,i=e.title||null,a=r[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let c={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:o,title:i,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,c}function Ss(r,e,t){let n=r.match(t.other.indentCodeCompensation);if(n===null)return e;let s=n[1];return e.split(`
`).map(o=>{let i=o.match(t.other.beginningSpace);if(i===null)return o;let[a]=i;return a.length>=s.length?o.slice(s.length):o}).join(`
`)}var We=class{constructor(r){E(this,"options");E(this,"rules");E(this,"lexer");this.options=r||xe}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Me(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],n=Ss(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=Me(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:Me(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=Me(e[0],`
`).split(`
`),n="",s="",o=[];for(;t.length>0;){let i=!1,a=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),i=!0;else if(!i)a.push(t[c]);else break;t=t.slice(c);let l=a.join(`
`),h=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${l}`:l,s=s?`${s}
${h}`:h;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=f,t.length===0)break;let g=o.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){let p=g,k=p.raw+`
`+t.join(`
`),b=this.blockquote(k);o[o.length-1]=b,n=n.substring(0,n.length-p.raw.length)+b.raw,s=s.substring(0,s.length-p.text.length)+b.text;break}else if((g==null?void 0:g.type)==="list"){let p=g,k=p.raw+`
`+t.join(`
`),b=this.list(k);o[o.length-1]=b,n=n.substring(0,n.length-g.raw.length)+b.raw,s=s.substring(0,s.length-p.raw.length)+b.raw,t=k.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:s}}}list(r){var t,n;let e=this.rules.block.list.exec(r);if(e){let s=e[1].trim(),o=s.length>1,i={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");let a=this.rules.other.listItemRegex(s),c=!1;for(;r;){let h=!1,f="",g="";if(!(e=a.exec(r))||this.rules.block.hr.test(r))break;f=e[0],r=r.substring(f.length);let p=$s(e[2].split(`
`,1)[0],e[1].length),k=r.split(`
`,1)[0],b=!p.trim(),w=0;if(this.options.pedantic?(w=2,g=p.trimStart()):b?w=e[1].length+1:(w=p.search(this.rules.other.nonSpaceChar),w=w>4?1:w,g=p.slice(w),w+=e[1].length),b&&this.rules.other.blankLine.test(k)&&(f+=k+`
`,r=r.substring(k.length+1),h=!0),!h){let $=this.rules.other.nextBulletRegex(w),C=this.rules.other.hrRegex(w),D=this.rules.other.fencesBeginRegex(w),y=this.rules.other.headingBeginRegex(w),x=this.rules.other.htmlBeginRegex(w),_=this.rules.other.blockquoteBeginRegex(w);for(;r;){let M=r.split(`
`,1)[0],S;if(k=M,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),S=k):S=k.replace(this.rules.other.tabCharGlobal,"    "),D.test(k)||y.test(k)||x.test(k)||_.test(k)||$.test(k)||C.test(k))break;if(S.search(this.rules.other.nonSpaceChar)>=w||!k.trim())g+=`
`+S.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(p)||y.test(p)||C.test(p))break;g+=`
`+k}b=!k.trim(),f+=M+`
`,r=r.substring(M.length+1),p=S.slice(w)}}i.loose||(c?i.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(c=!0)),i.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),i.raw+=f}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let h of i.items){if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),h.task){if(h.text=h.text.replace(this.rules.other.listReplaceTask,""),((t=h.tokens[0])==null?void 0:t.type)==="text"||((n=h.tokens[0])==null?void 0:n.type)==="paragraph"){h.tokens[0].raw=h.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),h.tokens[0].text=h.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(h.raw);if(f){let g={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};h.checked=g.checked,i.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=g.raw+h.tokens[0].raw,h.tokens[0].text=g.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(g)):h.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):h.tokens.unshift(g)}}if(!i.loose){let f=h.tokens.filter(p=>p.type==="space"),g=f.length>0&&f.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=g}}if(i.loose)for(let h of i.items){h.loose=!0;for(let f of h.tokens)f.type==="text"&&(f.type="paragraph")}return i}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:s}}}table(r){var i;let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ut(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(i=e[3])!=null&&i.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<t.length;a++)o.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:o.align[a]});for(let a of s)o.rows.push(Ut(a,o.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[l]})));return o}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let o=Me(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{let o=Ls(e[2],"()");if(o===-2)return;if(o>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let n=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),Gt(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[n.toLowerCase()];if(!s){let o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return Gt(t,s,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!t||this.rules.inline.punctuation.exec(t))){let s=[...n[0]].length-1,o,i,a=s,c=0,l=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*r.length+s);(n=l.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(i=[...o].length,n[3]||n[4]){a+=i;continue}else if((n[5]||n[6])&&s%3&&!((s+i)%3)){c+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+c);let h=[...n[0]][0].length,f=r.slice(0,s+n.index+h+i);if(Math.min(s,i)%2){let p=f.slice(1,-1);return{type:"em",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}let g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let n=this.rules.inline.delLDelim.exec(r);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let s=[...n[0]].length-1,o,i,a=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*r.length+s);(n=c.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o||(i=[...o].length,i!==s))continue;if(n[3]||n[4]){a+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a);let l=[...n[0]][0].length,h=r.slice(0,s+n.index+l+i),f=h.slice(s,-s);return{type:"del",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){var t;let e;if(e=this.rules.inline.url.exec(r)){let n,s;if(e[2]==="@")n=e[0],s="mailto:"+n;else{let o;do o=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(o!==e[0]);n=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},ie=class at{constructor(e){E(this,"tokens");E(this,"options");E(this,"state");E(this,"inlineQueue");E(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xe,this.options.tokenizer=this.options.tokenizer||new We,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ee,block:ze.normal,inline:Te.normal};this.options.pedantic?(t.block=ze.pedantic,t.inline=Te.pedantic):this.options.gfm&&(t.block=ze.gfm,this.options.breaks?t.inline=Te.breaks:t.inline=Te.gfm),this.tokenizer.rules=t}static get rules(){return{block:ze,inline:Te}}static lex(e,t){return new at(t).lex(e)}static lexInline(e,t){return new at(t).inlineTokens(e)}lex(e){e=e.replace(ee.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var s,o,i;for(this.options.pedantic&&(e=e.replace(ee.tabCharGlobal,"    ").replace(ee.spaceLine,""));e;){let a;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(l=>(a=l.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);let l=t.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},t.push(a));continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if((i=this.options.extensions)!=null&&i.startBlock){let l=1/0,h=e.slice(1),f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},h),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(c))){let l=t.at(-1);n&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a),n=c.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var c,l,h,f,g;let n=e,s=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)p.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)o=s[2]?s[2].length:0,n=n.slice(0,s.index+o)+"["+"a".repeat(s[0].length-o-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=((l=(c=this.options.hooks)==null?void 0:c.emStrongMask)==null?void 0:l.call({lexer:this},n))??n;let i=!1,a="";for(;e;){i||(a=""),i=!1;let p;if((f=(h=this.options.extensions)==null?void 0:h.inline)!=null&&f.some(b=>(p=b.call({lexer:this},e,t))?(e=e.substring(p.raw.length),t.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let b=t.at(-1);p.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(p=this.tokenizer.emStrong(e,n,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.del(e,n,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),t.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),t.push(p);continue}let k=e;if((g=this.options.extensions)!=null&&g.startInline){let b=1/0,w=e.slice(1),$;this.options.extensions.startInline.forEach(C=>{$=C.call({lexer:this},w),typeof $=="number"&&$>=0&&(b=Math.min(b,$))}),b<1/0&&b>=0&&(k=e.substring(0,b+1))}if(p=this.tokenizer.inlineText(k)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(a=p.raw.slice(-1)),i=!0;let b=t.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(e){let b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return t}},Ue=class{constructor(r){E(this,"options");E(this,"parser");this.options=r||xe}space(r){return""}code({text:r,lang:e,escaped:t}){var o;let n=(o=(e||"").match(ee.notSpaceStart))==null?void 0:o[0],s=r.replace(ee.endingNewline,"")+`
`;return n?'<pre><code class="language-'+ue(n)+'">'+(t?s:ue(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:ue(s,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,n="";for(let i=0;i<r.items.length;i++){let a=r.items[i];n+=this.listitem(a)}let s=e?"ol":"ul",o=e&&t!==1?' start="'+t+'"':"";return"<"+s+o+`>
`+n+"</"+s+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let s=0;s<r.header.length;s++)t+=this.tablecell(r.header[s]);e+=this.tablerow({text:t});let n="";for(let s=0;s<r.rows.length;s++){let o=r.rows[s];t="";for(let i=0;i<o.length;i++)t+=this.tablecell(o[i]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${ue(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let n=this.parser.parseInline(t),s=Wt(r);if(s===null)return n;r=s;let o='<a href="'+r+'"';return e&&(o+=' title="'+ue(e)+'"'),o+=">"+n+"</a>",o}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let s=Wt(r);if(s===null)return ue(t);r=s;let o=`<img src="${r}" alt="${t}"`;return e&&(o+=` title="${ue(e)}"`),o+=">",o}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:ue(r.text)}},yt=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},le=class ot{constructor(e){E(this,"options");E(this,"renderer");E(this,"textRenderer");this.options=e||xe,this.options.renderer=this.options.renderer||new Ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yt}static parse(e,t){return new ot(t).parse(e)}static parseInline(e,t){return new ot(t).parseInline(e)}parse(e){var n,s;let t="";for(let o=0;o<e.length;o++){let i=e[o];if((s=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&s[i.type]){let c=i,l=this.options.extensions.renderers[c.type].call({parser:this},c);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){t+=l||"";continue}}let a=i;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}parseInline(e,t=this.renderer){var s,o;let n="";for(let i=0;i<e.length;i++){let a=e[i];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=l||"";continue}}let c=a;switch(c.type){case"escape":{n+=t.text(c);break}case"html":{n+=t.html(c);break}case"link":{n+=t.link(c);break}case"image":{n+=t.image(c);break}case"checkbox":{n+=t.checkbox(c);break}case"strong":{n+=t.strong(c);break}case"em":{n+=t.em(c);break}case"codespan":{n+=t.codespan(c);break}case"br":{n+=t.br(c);break}case"del":{n+=t.del(c);break}case"text":{n+=t.text(c);break}default:{let l='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}},Ne,qe=(Ne=class{constructor(r){E(this,"options");E(this,"block");this.options=r||xe}preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?ie.lex:ie.lexInline}provideParser(){return this.block?le.parse:le.parseInline}},E(Ne,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),E(Ne,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Ne),Rs=class{constructor(...r){E(this,"defaults",dt());E(this,"options",this.setOptions);E(this,"parse",this.parseMarkdown(!0));E(this,"parseInline",this.parseMarkdown(!1));E(this,"Parser",le);E(this,"Renderer",Ue);E(this,"TextRenderer",yt);E(this,"Lexer",ie);E(this,"Tokenizer",We);E(this,"Hooks",qe);this.use(...r)}walkTokens(r,e){var n,s;let t=[];for(let o of r)switch(t=t.concat(e.call(this,o)),o.type){case"table":{let i=o;for(let a of i.header)t=t.concat(this.walkTokens(a.tokens,e));for(let a of i.rows)for(let c of a)t=t.concat(this.walkTokens(c.tokens,e));break}case"list":{let i=o;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=o;(s=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&s[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let c=i[a].flat(1/0);t=t.concat(this.walkTokens(c,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...i){let a=s.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),n.extensions=e),t.renderer){let s=this.defaults.renderer||new Ue(this.defaults);for(let o in t.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,a=t.renderer[i],c=s[i];s[i]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h||""}}n.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new We(this.defaults);for(let o in t.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,a=t.tokenizer[i],c=s[i];s[i]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}n.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new qe;for(let o in t.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,a=t.hooks[i],c=s[i];qe.passThroughHooks.has(o)?s[i]=l=>{if(this.defaults.async&&qe.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await a.call(s,l);return c.call(s,f)})();let h=a.call(s,l);return c.call(s,h)}:s[i]=(...l)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(s,l);return f===!1&&(f=await c.apply(s,l)),f})();let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}n.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,o=t.walkTokens;n.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),s&&(a=a.concat(s.call(this,i))),a}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return ie.lex(r,e??this.defaults)}parser(r,e){return le.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let n={...t},s={...this.defaults,...n},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=r),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(e):e,a=await(s.hooks?await s.hooks.provideLexer():r?ie.lex:ie.lexInline)(i,s),c=s.hooks?await s.hooks.processAllTokens(a):a;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let l=await(s.hooks?await s.hooks.provideParser():r?le.parse:le.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(l):l})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let i=(s.hooks?s.hooks.provideLexer():r?ie.lex:ie.lexInline)(e,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let a=(s.hooks?s.hooks.provideParser():r?le.parse:le.parseInline)(i,s);return s.hooks&&(a=s.hooks.postprocess(a)),a}catch(i){return o(i)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let n="<p>An error occurred:</p><pre>"+ue(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},ye=new Rs;function B(r,e){return ye.parse(r,e)}B.options=B.setOptions=function(r){return ye.setOptions(r),B.defaults=ye.defaults,kr(B.defaults),B};B.getDefaults=dt;B.defaults=xe;B.use=function(...r){return ye.use(...r),B.defaults=ye.defaults,kr(B.defaults),B};B.walkTokens=function(r,e){return ye.walkTokens(r,e)};B.parseInline=ye.parseInline;B.Parser=le;B.parser=le.parse;B.Renderer=Ue;B.TextRenderer=yt;B.Lexer=ie;B.lexer=ie.lex;B.Tokenizer=We;B.Hooks=qe;B.parse=B;B.options;B.setOptions;B.use;B.walkTokens;B.parseInline;le.parse;ie.lex;const Ts=Object.assign({"/src/content/blog/powering-your-database-queries-with-a-llms-and-mcps.md":jn,"/src/content/blog/python-who-why-this-hidden-gem-shows-that-rubys-ml-ecosystem-is-better-than-you-think.md":Bn,"/src/content/blog/random-forest-vs-llm-house-prices.md":zn});function Ms(r){const e=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,t=r.match(e);if(!t)return{data:{},content:r};const n=t[1],s=t[2],o={},i=n.split(`
`);for(const a of i){const c=a.indexOf(":");if(c===-1)continue;const l=a.slice(0,c).trim();let h=a.slice(c+1).trim();if((h.startsWith('"')&&h.endsWith('"')||h.startsWith("'")&&h.endsWith("'"))&&(h=h.slice(1,-1)),h.startsWith("[")&&h.endsWith("]")){const f=h.slice(1,-1);o[l]=f.split(",").map(g=>g.trim()).map(g=>g.startsWith('"')&&g.endsWith('"')||g.startsWith("'")&&g.endsWith("'")?g.slice(1,-1):g).filter(g=>g.length>0)}else o[l]=h}return{data:o,content:s}}function qs(r,e){const t=r.replace("/src/content/blog/","").replace(".md",""),{data:n,content:s}=Ms(e),o=B(s);return{slug:t,title:n.title||"Untitled",date:n.date||new Date().toISOString().split("T")[0],updateDate:n.updateDate,description:n.description||"",tags:n.tags||[],content:s,htmlContent:o}}function xt(){return Object.entries(Ts).map(([e,t])=>qs(e,t)).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function As(r){return xt().find(t=>t.slug===r)}function fe(r){const e=new Date(r);return new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"long",day:"numeric"}).format(e)}function qr(r){const t=r.trim().split(/\s+/).length;return Math.ceil(t/200)}function Yt(r,e,t){const n=r.slice();return n[3]=e[t],n}function Kt(r){let e,t,n=fe(r[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(n),u(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(o,i){T(o,e,i),d(e,t),d(e,s)},p(o,i){i&1&&n!==(n=fe(o[0].updateDate)+"")&&se(s,n)},d(o){o&&R(e)}}}function Zt(r){let e,t,n=r[3]+"",s,o;return{c(){e=m("span"),t=j("#"),s=j(n),o=v(),u(e,"class","px-2 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-900 rounded")},m(i,a){T(i,e,a),d(e,t),d(e,s),d(e,o)},p(i,a){a&1&&n!==(n=i[3]+"")&&se(s,n)},d(i){i&&R(e)}}}function Ps(r){let e,t,n,s,o,i=fe(r[0].date)+"",a,c,l,h,f,g,p,k,b,w,$=r[0].title+"",C,D,y,x=r[0].description+"",_,M,S,O,Q,q,U,A=r[0].updateDate&&Kt(r),ae=X(r[0].tags.slice(0,3)),W=[];for(let N=0;N<ae.length;N+=1)W[N]=Zt(Yt(r,ae,N));return{c(){e=m("button"),t=m("div"),n=m("div"),s=m("div"),o=m("time"),a=j(i),c=v(),l=m("span"),l.textContent="·",h=v(),f=m("span"),g=j(r[1]),p=j(" min read"),k=v(),A&&A.c(),b=v(),w=m("h3"),C=j($),D=v(),y=m("p"),_=j(x),M=v(),S=m("div");for(let N=0;N<W.length;N+=1)W[N].c();O=v(),Q=m("div"),Q.innerHTML=`<span class="w-6 h-px bg-neutral-400 dark:bg-neutral-700 group-hover:w-10 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-300"></span>
      Read Article
      <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,u(o,"class","text-xs text-neutral-500 tracking-wide uppercase"),u(l,"class","text-neutral-400 dark:text-neutral-700"),u(f,"class","text-xs text-neutral-500 tracking-wide"),u(s,"class","flex items-center gap-4"),u(n,"class","mb-6 space-y-2"),u(w,"class","heading-secondary mb-3 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(y,"class","text-body text-sm mb-5 line-clamp-2 svelte-efadq"),u(S,"class","flex flex-wrap gap-2 mb-5"),u(Q,"class","inline-flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(t,"class","p-6 md:p-8 bg-neutral-50 dark:bg-surface-light rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-surface-lighter"),u(e,"class","group cursor-pointer w-full text-left")},m(N,oe){T(N,e,oe),d(e,t),d(t,n),d(n,s),d(s,o),d(o,a),d(s,c),d(s,l),d(s,h),d(s,f),d(f,g),d(f,p),d(n,k),A&&A.m(n,null),d(t,b),d(t,w),d(w,C),d(t,D),d(t,y),d(y,_),d(t,M),d(t,S);for(let H=0;H<W.length;H+=1)W[H]&&W[H].m(S,null);d(t,O),d(t,Q),q||(U=Re(e,"click",r[2]),q=!0)},p(N,[oe]){if(oe&1&&i!==(i=fe(N[0].date)+"")&&se(a,i),oe&2&&se(g,N[1]),N[0].updateDate?A?A.p(N,oe):(A=Kt(N),A.c(),A.m(n,null)):A&&(A.d(1),A=null),oe&1&&$!==($=N[0].title+"")&&se(C,$),oe&1&&x!==(x=N[0].description+"")&&se(_,x),oe&1){ae=X(N[0].tags.slice(0,3));let H;for(H=0;H<ae.length;H+=1){const pe=Yt(N,ae,H);W[H]?W[H].p(pe,oe):(W[H]=Zt(pe),W[H].c(),W[H].m(S,null))}for(;H<W.length;H+=1)W[H].d(1);W.length=ae.length}},i:L,o:L,d(N){N&&R(e),A&&A.d(),de(W,N),q=!1,U()}}}function Cs(r,e,t){let n,{post:s}=e;function o(){ut(`/blog/${s.slug}`)}return r.$$set=i=>{"post"in i&&t(0,s=i.post)},r.$$.update=()=>{r.$$.dirty&1&&t(1,n=qr(s.content))},[s,n,o]}class Ar extends re{constructor(e){super(),te(this,e,Cs,Ps,V,{post:0})}}function Xt(r,e,t){const n=r.slice();return n[1]=e[t],n}function Is(r){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',u(e,"class","text-center py-16")},m(t,n){T(t,e,n)},p:L,i:L,o:L,d(t){t&&R(e)}}}function Es(r){let e,t,n,s,o,i,a,c=X(r[0]),l=[];for(let f=0;f<c.length;f+=1)l[f]=Vt(Xt(r,c,f));const h=f=>z(l[f],1,1,()=>{l[f]=null});return{c(){e=m("div");for(let f=0;f<l.length;f+=1)l[f].c();t=v(),n=m("div"),s=m("a"),s.innerHTML=`View all posts
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,u(e,"class","grid md:grid-cols-2 gap-6 md:gap-8"),u(s,"href","/blog"),u(s,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(n,"class","mt-12 text-center")},m(f,g){T(f,e,g);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(e,null);T(f,t,g),T(f,n,g),d(n,s),o=!0,i||(a=it(ht.call(null,s)),i=!0)},p(f,g){if(g&1){c=X(f[0]);let p;for(p=0;p<c.length;p+=1){const k=Xt(f,c,p);l[p]?(l[p].p(k,g),I(l[p],1)):(l[p]=Vt(k),l[p].c(),I(l[p],1),l[p].m(e,null))}for(me(),p=c.length;p<l.length;p+=1)h(p);be()}},i(f){if(!o){for(let g=0;g<c.length;g+=1)I(l[g]);o=!0}},o(f){l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)z(l[g]);o=!1},d(f){f&&(R(e),R(t),R(n)),de(l,f),i=!1,a()}}}function Vt(r){let e,t;return e=new Ar({props:{post:r[1]}}),{c(){Z(e.$$.fragment)},m(n,s){G(e,n,s),t=!0},p(n,s){const o={};s&1&&(o.post=n[1]),e.$set(o)},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function js(r){let e,t,n,s,o,i,a;const c=[Es,Is],l=[];function h(f,g){return f[0].length>0?0:1}return o=h(r),i=l[o]=c[o](r),{c(){e=m("section"),t=m("div"),n=m("header"),n.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h2 class="heading-primary">Blog</h2> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
        along the way.</p>`,s=v(),i.c(),u(n,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900"),u(e,"id","blog")},m(f,g){T(f,e,g),d(e,t),d(t,n),d(t,s),l[o].m(t,null),a=!0},p(f,[g]){let p=o;o=h(f),o===p?l[o].p(f,g):(me(),z(l[p],1,1,()=>{l[p]=null}),be(),i=l[o],i?i.p(f,g):(i=l[o]=c[o](f),i.c()),I(i,1),i.m(t,null))},i(f){a||(I(i),a=!0)},o(f){z(i),a=!1},d(f){f&&R(e),l[o].d()}}}function Bs(r,e,t){let n=[];return lt(()=>{t(0,n=xt().slice(0,2))}),[n]}class zs extends re{constructor(e){super(),te(this,e,Bs,js,V,{})}}function Ns(r){let e,t,n,s,o,i,a,c;return e=new vn({}),n=new En({}),o=new Mn({}),a=new zs({}),{c(){Z(e.$$.fragment),t=v(),Z(n.$$.fragment),s=v(),Z(o.$$.fragment),i=v(),Z(a.$$.fragment)},m(l,h){G(e,l,h),T(l,t,h),G(n,l,h),T(l,s,h),G(o,l,h),T(l,i,h),G(a,l,h),c=!0},p:L,i(l){c||(I(e.$$.fragment,l),I(n.$$.fragment,l),I(o.$$.fragment,l),I(a.$$.fragment,l),c=!0)},o(l){z(e.$$.fragment,l),z(n.$$.fragment,l),z(o.$$.fragment,l),z(a.$$.fragment,l),c=!1},d(l){l&&(R(t),R(s),R(i)),Y(e,l),Y(n,l),Y(o,l),Y(a,l)}}}class Ds extends re{constructor(e){super(),te(this,e,null,Ns,V,{})}}function Jt(r,e,t){const n=r.slice();return n[3]=e[t],n}function er(r){let e,t,n=fe(r[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(n),u(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(o,i){T(o,e,i),d(e,t),d(e,s)},p(o,i){i&1&&n!==(n=fe(o[0].updateDate)+"")&&se(s,n)},d(o){o&&R(e)}}}function tr(r){let e,t,n=r[3]+"",s,o;return{c(){e=m("span"),t=j("#"),s=j(n),o=v(),u(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-full")},m(i,a){T(i,e,a),d(e,t),d(e,s),d(e,o)},p(i,a){a&1&&n!==(n=i[3]+"")&&se(s,n)},d(i){i&&R(e)}}}function Os(r){let e,t,n,s,o,i,a,c,l=fe(r[0].date)+"",h,f,g,p,k,b,w,$,C,D,y=r[0].title+"",x,_,M,S=r[0].description+"",O,Q,q,U,A,ae,W,N=r[0].htmlContent+"",oe,H,pe,Ve,vt,ne=r[0].updateDate&&er(r),ve=X(r[0].tags),J=[];for(let F=0;F<ve.length;F+=1)J[F]=tr(Jt(r,ve,F));return{c(){e=m("article"),t=m("div"),n=m("button"),n.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      Back to Blog`,s=v(),o=m("header"),i=m("div"),a=m("div"),c=m("time"),h=j(l),f=v(),g=m("span"),g.textContent="·",p=v(),k=m("span"),b=j(r[1]),w=j(" min read"),$=v(),ne&&ne.c(),C=v(),D=m("h1"),x=j(y),_=v(),M=m("p"),O=j(S),Q=v(),q=m("div");for(let F=0;F<J.length;F+=1)J[F].c();U=v(),A=m("div"),ae=v(),W=m("div"),oe=v(),H=m("footer"),pe=m("button"),pe.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to all posts`,u(n,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"),u(c,"class","text-sm text-neutral-500 tracking-wide"),u(g,"class","text-neutral-400 dark:text-neutral-700"),u(k,"class","text-sm text-neutral-500 tracking-wide"),u(a,"class","flex items-center gap-4"),u(i,"class","mb-6 space-y-2"),u(D,"class","text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"),u(M,"class","text-lg md:text-xl text-neutral-700 dark:text-neutral-400 font-light leading-relaxed"),u(q,"class","flex flex-wrap gap-2 mt-8"),u(o,"class","mb-12 md:mb-16"),u(A,"class","w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-12 md:mb-16"),u(W,"class","prose svelte-1wvssng"),u(pe,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(H,"class","mt-16 md:mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800"),u(t,"class","section-container max-w-3xl"),u(e,"class","py-24 md:py-32")},m(F,ce){T(F,e,ce),d(e,t),d(t,n),d(t,s),d(t,o),d(o,i),d(i,a),d(a,c),d(c,h),d(a,f),d(a,g),d(a,p),d(a,k),d(k,b),d(k,w),d(i,$),ne&&ne.m(i,null),d(o,C),d(o,D),d(D,x),d(o,_),d(o,M),d(M,O),d(o,Q),d(o,q);for(let K=0;K<J.length;K+=1)J[K]&&J[K].m(q,null);d(t,U),d(t,A),d(t,ae),d(t,W),W.innerHTML=N,d(t,oe),d(t,H),d(H,pe),Ve||(vt=[Re(n,"click",r[2]),Re(pe,"click",r[2])],Ve=!0)},p(F,[ce]){if(ce&1&&l!==(l=fe(F[0].date)+"")&&se(h,l),ce&2&&se(b,F[1]),F[0].updateDate?ne?ne.p(F,ce):(ne=er(F),ne.c(),ne.m(i,null)):ne&&(ne.d(1),ne=null),ce&1&&y!==(y=F[0].title+"")&&se(x,y),ce&1&&S!==(S=F[0].description+"")&&se(O,S),ce&1){ve=X(F[0].tags);let K;for(K=0;K<ve.length;K+=1){const _t=Jt(F,ve,K);J[K]?J[K].p(_t,ce):(J[K]=tr(_t),J[K].c(),J[K].m(q,null))}for(;K<J.length;K+=1)J[K].d(1);J.length=ve.length}ce&1&&N!==(N=F[0].htmlContent+"")&&(W.innerHTML=N)},i:L,o:L,d(F){F&&R(e),ne&&ne.d(),de(J,F),Ve=!1,ge(vt)}}}function Qs(r,e,t){let n,{post:s}=e;function o(){mr(),ut("/blog")}return r.$$set=i=>{"post"in i&&t(0,s=i.post)},r.$$.update=()=>{r.$$.dirty&1&&t(1,n=qr(s.content))},[s,n,o]}class Fs extends re{constructor(e){super(),te(this,e,Qs,Os,V,{post:0})}}function rr(r,e,t){const n=r.slice();return n[4]=e[t],n}function Hs(r){let e,t,n,s,o,i,a,c,l,h,f;const g=[Gs,Us],p=[];function k(b,w){return b[0].length>0?0:1}return a=k(r),c=p[a]=g[a](r),{c(){e=m("section"),t=m("div"),n=m("a"),n.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to Home`,s=v(),o=m("header"),o.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h1 class="heading-primary">Blog</h1> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
          along the way.</p>`,i=v(),c.c(),u(n,"href","/"),u(n,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"),u(o,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32")},m(b,w){T(b,e,w),d(e,t),d(t,n),d(t,s),d(t,o),d(t,i),p[a].m(t,null),l=!0,h||(f=it(ht.call(null,n)),h=!0)},p(b,w){let $=a;a=k(b),a===$?p[a].p(b,w):(me(),z(p[$],1,1,()=>{p[$]=null}),be(),c=p[a],c?c.p(b,w):(c=p[a]=g[a](b),c.c()),I(c,1),c.m(t,null))},i(b){l||(I(c),l=!0)},o(b){z(c),l=!1},d(b){b&&R(e),p[a].d(),h=!1,f()}}}function Ws(r){let e,t;return e=new Fs({props:{post:r[2]}}),{c(){Z(e.$$.fragment)},m(n,s){G(e,n,s),t=!0},p(n,s){const o={};s&4&&(o.post=n[2]),e.$set(o)},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function Us(r){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',u(e,"class","text-center py-16")},m(t,n){T(t,e,n)},p:L,i:L,o:L,d(t){t&&R(e)}}}function Gs(r){let e,t,n=X(r[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=nr(rr(r,n,i));const o=i=>z(s[i],1,1,()=>{s[i]=null});return{c(){e=m("div");for(let i=0;i<s.length;i+=1)s[i].c();u(e,"class","grid md:grid-cols-2 gap-6 md:gap-8")},m(i,a){T(i,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);t=!0},p(i,a){if(a&1){n=X(i[0]);let c;for(c=0;c<n.length;c+=1){const l=rr(i,n,c);s[c]?(s[c].p(l,a),I(s[c],1)):(s[c]=nr(l),s[c].c(),I(s[c],1),s[c].m(e,null))}for(me(),c=n.length;c<s.length;c+=1)o(c);be()}},i(i){if(!t){for(let a=0;a<n.length;a+=1)I(s[a]);t=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)z(s[a]);t=!1},d(i){i&&R(e),de(s,i)}}}function nr(r){let e,t;return e=new Ar({props:{post:r[4]}}),{c(){Z(e.$$.fragment)},m(n,s){G(e,n,s),t=!0},p(n,s){const o={};s&1&&(o.post=n[4]),e.$set(o)},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function Ys(r){let e,t,n,s;const o=[Ws,Hs],i=[];function a(c,l){return c[1]&&c[2]?0:1}return e=a(r),t=i[e]=o[e](r),{c(){t.c(),n=Ye()},m(c,l){i[e].m(c,l),T(c,n,l),s=!0},p(c,[l]){let h=e;e=a(c),e===h?i[e].p(c,l):(me(),z(i[h],1,1,()=>{i[h]=null}),be(),t=i[e],t?t.p(c,l):(t=i[e]=o[e](c),t.c()),I(t,1),t.m(n.parentNode,n))},i(c){s||(I(t),s=!0)},o(c){z(t),s=!1},d(c){c&&R(n),i[e].d(c)}}}function Ks(r,e,t){let n,s;Qe(r,Pe,a=>t(1,n=a)),Qe(r,Oe,a=>t(2,s=a));let{params:o={}}=e,i=[];return lt(()=>{t(0,i=xt())}),r.$$set=a=>{"params"in a&&t(3,o=a.params)},r.$$.update=()=>{if(r.$$.dirty&8)if(o.slug){const a=As(o.slug);a&&(Oe.set(a),Pe.set(!0),window.scrollTo({top:0,behavior:"smooth"}))}else Oe.set(null),Pe.set(!1)},[i,n,s,o]}class sr extends re{constructor(e){super(),te(this,e,Ks,Ys,V,{params:3})}}function Zs(r){let e,t,n,s,o,i,a;return e=new ln({}),s=new Xr({props:{routes:r[0]}}),i=new en({}),{c(){Z(e.$$.fragment),t=v(),n=m("main"),Z(s.$$.fragment),o=v(),Z(i.$$.fragment),u(n,"class","min-h-screen bg-white dark:bg-surface transition-colors duration-300")},m(c,l){G(e,c,l),T(c,t,l),T(c,n,l),G(s,n,null),T(c,o,l),G(i,c,l),a=!0},p:L,i(c){a||(I(e.$$.fragment,c),I(s.$$.fragment,c),I(i.$$.fragment,c),a=!0)},o(c){z(e.$$.fragment,c),z(s.$$.fragment,c),z(i.$$.fragment,c),a=!1},d(c){c&&(R(t),R(n),R(o)),Y(e,c),Y(s),Y(i,c)}}}function Xs(r,e,t){return[{"/":Ds,"/blog":sr,"/blog/:slug":sr},!0]}class Vs extends re{constructor(e){super(),te(this,e,Xs,Zs,V,{prerender:1})}get prerender(){return this.$$.ctx[1]}}new Vs({target:document.getElementById("app")});
