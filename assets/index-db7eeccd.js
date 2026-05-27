var Cn=Object.defineProperty;var In=(n,e,t)=>e in n?Cn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>(In(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function L(){}function an(n,e){for(const t in e)n[t]=e[t];return n}function on(n){return n()}function Lt(){return Object.create(null)}function ge(n){n.forEach(on)}function Ge(n){return typeof n=="function"}function V(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ze;function Ce(n,e){return n===e?!0:(ze||(ze=document.createElement("a")),ze.href=e,n===ze.href)}function En(n){return Object.keys(n).length===0}function ln(n,...e){if(n==null){for(const r of e)r(void 0);return L}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Qe(n,e,t){n.$$.on_destroy.push(ln(e,t))}function it(n){return n&&Ge(n.destroy)?n.destroy:L}function d(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function de(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function m(n){return document.createElement(n)}function he(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function j(n){return document.createTextNode(n)}function v(){return j(" ")}function Ye(){return j("")}function Re(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function u(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function jn(n){return Array.from(n.childNodes)}function se(n,e){e=""+e,n.data!==e&&(n.data=e)}function zn(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Fe(n,e){return new n(e)}let Ie;function Ae(n){Ie=n}function Ke(){if(!Ie)throw new Error("Function called outside component initialization");return Ie}function lt(n){Ke().$$.on_mount.push(n)}function Bn(n){Ke().$$.after_update.push(n)}function Nn(n){Ke().$$.on_destroy.push(n)}function Dn(){const n=Ke();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const o=zn(e,t,{cancelable:r});return s.slice().forEach(i=>{i.call(n,o)}),!o.defaultPrevented}return!0}}function $t(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const $e=[],St=[];let Se=[];const Rt=[],cn=Promise.resolve();let tt=!1;function un(){tt||(tt=!0,cn.then(dn))}function hn(){return un(),cn}function nt(n){Se.push(n)}const Je=new Set;let _e=0;function dn(){if(_e!==0)return;const n=Ie;do{try{for(;_e<$e.length;){const e=$e[_e];_e++,Ae(e),On(e.$$)}}catch(e){throw $e.length=0,_e=0,e}for(Ae(null),$e.length=0,_e=0;St.length;)St.pop()();for(let e=0;e<Se.length;e+=1){const t=Se[e];Je.has(t)||(Je.add(t),t())}Se.length=0}while($e.length);for(;Rt.length;)Rt.pop()();tt=!1,Je.clear(),Ae(n)}function On(n){if(n.fragment!==null){n.update(),ge(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(nt)}}function Qn(n){const e=[],t=[];Se.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Se=e}const De=new Set;let we;function me(){we={r:0,c:[],p:we}}function be(){we.r||ge(we.c),we=we.p}function I(n,e){n&&n.i&&(De.delete(n),n.i(e))}function B(n,e,t,r){if(n&&n.o){if(De.has(n))return;De.add(n),we.c.push(()=>{De.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function X(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function pn(n,e){const t={},r={},s={$$scope:1};let o=n.length;for(;o--;){const i=n[o],a=e[o];if(a){for(const c in i)c in a||(r[c]=1);for(const c in a)s[c]||(t[c]=a[c],s[c]=1);n[o]=a}else for(const c in i)s[c]=1}for(const i in r)i in t||(t[i]=void 0);return t}function fn(n){return typeof n=="object"&&n!==null?n:{}}function Z(n){n&&n.c()}function G(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),nt(()=>{const o=n.$$.on_mount.map(on).filter(Ge);n.$$.on_destroy?n.$$.on_destroy.push(...o):ge(o),n.$$.on_mount=[]}),s.forEach(nt)}function Y(n,e){const t=n.$$;t.fragment!==null&&(Qn(t.after_update),ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Fn(n,e){n.$$.dirty[0]===-1&&($e.push(n),un(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function te(n,e,t,r,s,o,i,a=[-1]){const c=Ie;Ae(n);const l=n.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:Lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Lt(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let h=!1;if(l.ctx=t?t(n,e.props||{},(f,g,...p)=>{const k=p.length?p[0]:g;return l.ctx&&s(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),h&&Fn(n,f)),g}):[],l.update(),h=!0,ge(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const f=jn(e.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();e.intro&&I(n.$$.fragment),G(n,e.target,e.anchor),dn()}Ae(c)}class ne{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){Y(this,1),this.$destroy=L}$on(e,t){if(!Ge(t))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!En(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Hn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Hn);const Le=[];function gn(n,e){return{subscribe:Ee(n,e).subscribe}}function Ee(n,e=L){let t;const r=new Set;function s(a){if(V(n,a)&&(n=a,t)){const c=!Le.length;for(const l of r)l[1](),Le.push(l,n);if(c){for(let l=0;l<Le.length;l+=2)Le[l][0](Le[l+1]);Le.length=0}}}function o(a){s(a(n))}function i(a,c=L){const l=[a,c];return r.add(l),r.size===1&&(t=e(s,o)||L),a(n),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:s,update:o,subscribe:i}}function mn(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=e.length<2;return gn(t,(i,a)=>{let c=!1;const l=[];let h=0,f=L;const g=()=>{if(h)return;f();const k=e(r?l[0]:l,i,a);o?i(k):f=Ge(k)?k:L},p=s.map((k,b)=>ln(k,w=>{l[b]=w,h&=~(1<<b),c&&g()},()=>{h|=1<<b}));return c=!0,g(),function(){ge(p),f(),c=!1}})}function Wn(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,r,s,o,i=[],a="",c=n.split("/");for(c[0]||c.shift();s=c.shift();)t=s[0],t==="*"?(i.push("wild"),a+="/(.*)"):t===":"?(r=s.indexOf("?",1),o=s.indexOf(".",1),i.push(s.substring(1,~r?r:~o?o:s.length)),a+=~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~r?"?":"")+"\\"+s.substring(o))):a+="/"+s;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Un(n){let e,t,r;const s=[n[2]];var o=n[0];function i(a){let c={};for(let l=0;l<s.length;l+=1)c=an(c,s[l]);return{props:c}}return o&&(e=Fe(o,i()),e.$on("routeEvent",n[7])),{c(){e&&Z(e.$$.fragment),t=Ye()},m(a,c){e&&G(e,a,c),T(a,t,c),r=!0},p(a,c){const l=c&4?pn(s,[fn(a[2])]):{};if(c&1&&o!==(o=a[0])){if(e){me();const h=e;B(h.$$.fragment,1,0,()=>{Y(h,1)}),be()}o?(e=Fe(o,i()),e.$on("routeEvent",a[7]),Z(e.$$.fragment),I(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(l)},i(a){r||(e&&I(e.$$.fragment,a),r=!0)},o(a){e&&B(e.$$.fragment,a),r=!1},d(a){a&&R(t),e&&Y(e,a)}}}function Gn(n){let e,t,r;const s=[{params:n[1]},n[2]];var o=n[0];function i(a){let c={};for(let l=0;l<s.length;l+=1)c=an(c,s[l]);return{props:c}}return o&&(e=Fe(o,i()),e.$on("routeEvent",n[6])),{c(){e&&Z(e.$$.fragment),t=Ye()},m(a,c){e&&G(e,a,c),T(a,t,c),r=!0},p(a,c){const l=c&6?pn(s,[c&2&&{params:a[1]},c&4&&fn(a[2])]):{};if(c&1&&o!==(o=a[0])){if(e){me();const h=e;B(h.$$.fragment,1,0,()=>{Y(h,1)}),be()}o?(e=Fe(o,i()),e.$on("routeEvent",a[6]),Z(e.$$.fragment),I(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else o&&e.$set(l)},i(a){r||(e&&I(e.$$.fragment,a),r=!0)},o(a){e&&B(e.$$.fragment,a),r=!1},d(a){a&&R(t),e&&Y(e,a)}}}function Yn(n){let e,t,r,s;const o=[Gn,Un],i=[];function a(c,l){return c[1]?0:1}return e=a(n),t=i[e]=o[e](n),{c(){t.c(),r=Ye()},m(c,l){i[e].m(c,l),T(c,r,l),s=!0},p(c,[l]){let h=e;e=a(c),e===h?i[e].p(c,l):(me(),B(i[h],1,1,()=>{i[h]=null}),be(),t=i[e],t?t.p(c,l):(t=i[e]=o[e](c),t.c()),I(t,1),t.m(r.parentNode,r))},i(c){s||(I(t),s=!0)},o(c){B(t),s=!1},d(c){c&&R(r),i[e].d(c)}}}function Tt(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let r="";return t>-1&&(r=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:r}}const ct=gn(null,function(e){e(Tt());const t=()=>{e(Tt())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});mn(ct,n=>n.location);mn(ct,n=>n.querystring);const Mt=Ee(void 0);async function ut(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await hn(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(n.charAt(0)=="#"?"":"#")+n}function ht(n,e){if(e=At(e),!n||!n.tagName||n.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return qt(n,e),{update(t){t=At(t),qt(n,t)}}}function Kn(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function qt(n,e){let t=e.href||n.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);n.setAttribute("href",t),n.addEventListener("click",r=>{r.preventDefault(),e.disabled||Zn(r.currentTarget.getAttribute("href"))})}function At(n){return n&&typeof n=="string"?{href:n}:n||{}}function Zn(n){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=n}function Xn(n,e,t){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:o=!1}=e;class i{constructor(x,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!x||typeof x=="string"&&(x.length<1||x.charAt(0)!="/"&&x.charAt(0)!="*")||typeof x=="object"&&!(x instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:S}=Wn(x);this.path=x,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=M,this._keys=S}match(x){if(s){if(typeof s=="string")if(x.startsWith(s))x=x.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=x.match(s);if(O&&O[0])x=x.substr(O[0].length)||"/";else return null}}const _=this._pattern.exec(x);if(_===null)return null;if(this._keys===!1)return _;const M={};let S=0;for(;S<this._keys.length;){try{M[this._keys[S]]=decodeURIComponent(_[S+1]||"")||null}catch{M[this._keys[S]]=null}S++}return M}async checkConditions(x){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](x))return!1;return!0}}const a=[];r instanceof Map?r.forEach((y,x)=>{a.push(new i(x,y))}):Object.keys(r).forEach(y=>{a.push(new i(y,r[y]))});let c=null,l=null,h={};const f=Dn();async function g(y,x){await hn(),f(y,x)}let p=null,k=null;o&&(k=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?p=y.state:p=null},window.addEventListener("popstate",k),Bn(()=>{Kn(p)}));let b=null,w=null;const $=ct.subscribe(async y=>{b=y;let x=0;for(;x<a.length;){const _=a[x].match(y.location);if(!_){x++;continue}const M={route:a[x].path,location:y.location,querystring:y.querystring,userData:a[x].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await a[x].checkConditions(M)){t(0,c=null),w=null,g("conditionsFailed",M);return}g("routeLoading",Object.assign({},M));const S=a[x].component;if(w!=S){S.loading?(t(0,c=S.loading),w=S,t(1,l=S.loadingParams),t(2,h={}),g("routeLoaded",Object.assign({},M,{component:c,name:c.name,params:l}))):(t(0,c=null),w=null);const O=await S();if(y!=b)return;t(0,c=O&&O.default||O),w=S}_&&typeof _=="object"&&Object.keys(_).length?t(1,l=_):t(1,l=null),t(2,h=a[x].props),g("routeLoaded",Object.assign({},M,{component:c,name:c.name,params:l})).then(()=>{Mt.set(l)});return}t(0,c=null),w=null,Mt.set(void 0)});Nn(()=>{$(),k&&window.removeEventListener("popstate",k)});function C(y){$t.call(this,n,y)}function D(y){$t.call(this,n,y)}return n.$$set=y=>{"routes"in y&&t(3,r=y.routes),"prefix"in y&&t(4,s=y.prefix),"restoreScrollState"in y&&t(5,o=y.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[c,l,h,r,s,o,C,D]}class Vn extends ne{constructor(e){super(),te(this,e,Xn,Yn,V,{routes:3,prefix:4,restoreScrollState:5})}}function Jn(n){let e,t,r,s,o,i,a,c,l,h,f;return{c(){e=m("footer"),t=m("div"),r=m("div"),s=m("div"),o=m("p"),o.textContent=`© ${n[0]} Gabriel Quaresma`,i=v(),a=m("p"),a.textContent="Crafted with care",c=v(),l=m("button"),l.innerHTML=`Back to top
        <svg class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15l7-7 7 7"></path></svg>`,u(o,"class","text-sm text-neutral-500 font-light"),u(s,"class","text-center md:text-left"),u(a,"class","text-xs text-neutral-500 dark:text-neutral-600 tracking-wide"),u(l,"type","button"),u(l,"class","group flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-300"),u(r,"class","flex flex-col md:flex-row items-center justify-between gap-6"),u(t,"class","section-container"),u(e,"class","py-12 md:py-16 border-t border-neutral-200 dark:border-neutral-900")},m(g,p){T(g,e,p),d(e,t),d(t,r),d(r,s),d(s,o),d(r,i),d(r,a),d(r,c),d(r,l),h||(f=Re(l,"click",n[1]),h=!0)},p:L,i:L,o:L,d(g){g&&R(e),h=!1,f()}}}function er(n){return[new Date().getFullYear(),()=>window.scrollTo({top:0,behavior:"smooth"})]}class tr extends ne{constructor(e){super(),te(this,e,er,Jn,V,{})}}const Oe=Ee(null),Pe=Ee(!1);function bn(){Oe.set(null),Pe.set(!1)}const rt="theme";function nr(){if(typeof window>"u")return"dark";const n=localStorage.getItem(rt);return n==="light"||n==="dark"?n:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function et(n){if(typeof document>"u")return;const e=document.documentElement;e.classList.toggle("dark",n==="dark"),e.style.colorScheme=n}function rr(){const n=nr(),{subscribe:e,set:t,update:r}=Ee(n);return et(n),{subscribe:e,set:s=>{localStorage.setItem(rt,s),et(s),t(s)},toggle:()=>r(s=>{const o=s==="dark"?"light":"dark";return localStorage.setItem(rt,o),et(o),o})}}const kn=rr();function sr(n){let e,t;return{c(){e=he("svg"),t=he("path"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(t,"stroke-width","1.5"),u(t,"d","M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"),u(e,"class","w-4 h-4"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"viewBox","0 0 24 24")},m(r,s){T(r,e,s),d(e,t)},d(r){r&&R(e)}}}function ar(n){let e,t;return{c(){e=he("svg"),t=he("path"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(t,"stroke-width","1.5"),u(t,"d","M12 3v1.5M12 19.5V21M5.636 5.636l1.061 1.061M17.303 17.303l1.061 1.061M3 12h1.5M19.5 12H21M5.636 18.364l1.061-1.061M17.303 6.697l1.061-1.061M16 12a4 4 0 11-8 0 4 4 0 018 0z"),u(e,"class","w-4 h-4"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"viewBox","0 0 24 24")},m(r,s){T(r,e,s),d(e,t)},d(r){r&&R(e)}}}function or(n){let e,t,r,s,o,i,a,c,l,h,f,g;function p(w,$){return w[0]==="dark"?ar:sr}let k=p(n),b=k(n);return{c(){e=m("header"),t=m("nav"),r=m("div"),s=m("button"),s.textContent="Gabriel Quaresma",o=v(),i=m("div"),a=m("a"),a.textContent="Blog",c=v(),l=m("button"),b.c(),u(s,"class","text-sm md:text-base font-light tracking-wide text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"),u(a,"href","/blog"),u(a,"class","text-sm font-light tracking-wide text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"),u(l,"type","button"),u(l,"aria-label","Toggle theme"),u(l,"title",h=n[0]==="dark"?"Switch to light theme":"Switch to dark theme"),u(l,"class","flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"),u(i,"class","flex items-center gap-6 md:gap-8"),u(r,"class","flex items-center justify-between"),u(t,"class","section-container py-4"),u(e,"class","fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-300")},m(w,$){T(w,e,$),d(e,t),d(t,r),d(r,s),d(r,o),d(r,i),d(i,a),d(i,c),d(i,l),b.m(l,null),f||(g=[Re(s,"click",n[1]),it(ht.call(null,a)),Re(l,"click",kn.toggle)],f=!0)},p(w,[$]){k!==(k=p(w))&&(b.d(1),b=k(w),b&&(b.c(),b.m(l,null))),$&1&&h!==(h=w[0]==="dark"?"Switch to light theme":"Switch to dark theme")&&u(l,"title",h)},i:L,o:L,d(w){w&&R(e),b.d(),f=!1,ge(g)}}}function ir(n,e,t){let r,s;Qe(n,Pe,i=>t(2,r=i)),Qe(n,kn,i=>t(0,s=i));function o(){r&&bn(),ut("/")}return[s,o]}class lr extends ne{constructor(e){super(),te(this,e,ir,or,V,{})}}const cr=""+new URL("profile-e24b5519.png",import.meta.url).href;function ur(n){let e;return{c(){e=m("h1"),e.textContent="Gabriel Quaresma",u(e,"class","text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-neutral-900 dark:text-white")},m(t,r){T(t,e,r)},p:L,i:L,o:L,d(t){t&&R(e)}}}class hr extends ne{constructor(e){super(),te(this,e,null,ur,V,{})}}function dr(n){let e,t,r,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C;return{c(){e=m("div"),t=m("p"),r=j(n[0]),s=j(`+ years of experience. Skilled in building web
    applications/solutions with:
    `),o=m("br"),i=v(),a=m("span"),a.textContent="React",c=j(`,
    `),l=m("span"),l.textContent="TypeScript",h=j(`,
    `),f=m("span"),f.textContent="Node.js",g=j(`, and
    `),p=m("span"),p.textContent="Ruby on Rails",k=j("."),b=v(),w=m("p"),w.textContent=`Passionate about crafting seamless user experiences. Thrive in collaborative
    teams. Always learning, keeping up with modern tech and best practices to
    write cleaner, better code. Outside work: Practicing Brazilian Jiu-Jitsu and
    playing Football Manager.`,$=v(),C=m("a"),C.innerHTML=`<span class="w-8 h-px bg-neutral-400 dark:bg-neutral-600 group-hover:w-12 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-300"></span>
    Get in touch`,u(a,"class","text-neutral-800 dark:text-neutral-200"),u(l,"class","text-neutral-800 dark:text-neutral-200"),u(f,"class","text-neutral-800 dark:text-neutral-200"),u(p,"class","text-neutral-800 dark:text-neutral-200"),u(t,"class","text-body"),u(w,"class","text-neutral-600 dark:text-neutral-500 text-sm md:text-base font-light leading-relaxed"),u(C,"href","mailto:j.quaresmasantos98@gmail.com"),u(C,"class","inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(e,"class","max-w-2xl space-y-6")},m(D,y){T(D,e,y),d(e,t),d(t,r),d(t,s),d(t,o),d(t,i),d(t,a),d(t,c),d(t,l),d(t,h),d(t,f),d(t,g),d(t,p),d(t,k),d(e,b),d(e,w),d(e,$),d(e,C)},p:L,i:L,o:L,d(D){D&&R(e)}}}function pr(n){return[new Date().getFullYear()-2021]}class fr extends ne{constructor(e){super(),te(this,e,pr,dr,V,{})}}const gr=""+new URL("github-icon-60b845e9.svg",import.meta.url).href,mr=""+new URL("instagram-icon-dd9d7b81.svg",import.meta.url).href,br=""+new URL("linkedin-icon-0e3a103a.svg",import.meta.url).href;function Pt(n,e,t){const r=n.slice();return r[1]=e[t].icon,r[2]=e[t].alt,r[3]=e[t].link,r[4]=e[t].label,r[6]=t,r}function Ct(n){let e,t,r,s,o;return{c(){e=m("li"),t=m("a"),r=m("img"),o=v(),Ce(r.src,s=n[1])||u(r,"src",s),u(r,"alt",n[2]),u(r,"class","w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert-0"+(n[6]===0?" invert":"")),u(t,"href",n[3]),u(t,"target","_blank"),u(t,"rel","noopener noreferrer"),u(t,"aria-label",n[4]),u(t,"class","group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 hover:border-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 transition-all duration-300")},m(i,a){T(i,e,a),d(e,t),d(t,r),d(e,o)},p:L,d(i){i&&R(e)}}}function kr(n){let e,t,r=X(n[0]),s=[];for(let o=0;o<r.length;o+=1)s[o]=Ct(Pt(n,r,o));return{c(){e=m("nav"),t=m("ul");for(let o=0;o<s.length;o+=1)s[o].c();u(t,"class","flex items-center justify-center gap-8"),u(e,"aria-label","Social networks")},m(o,i){T(o,e,i),d(e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null)},p(o,[i]){if(i&1){r=X(o[0]);let a;for(a=0;a<r.length;a+=1){const c=Pt(o,r,a);s[a]?s[a].p(c,i):(s[a]=Ct(c),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:L,o:L,d(o){o&&R(e),de(s,o)}}}function wr(n){return[[{icon:gr,alt:"GitHub",link:"https://github.com/joaoGabriel55",label:"GitHub"},{icon:br,alt:"LinkedIn",link:"https://linkedin.com/in/gabriel-quaresma-dev",label:"LinkedIn"},{icon:mr,alt:"Instagram",link:"https://instagram.com/drawquaresma",label:"Instagram"}]]}class yr extends ne{constructor(e){super(),te(this,e,wr,kr,V,{})}}function xr(n){let e,t,r,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C,D,y;return f=new hr({}),b=new fr({}),$=new yr({}),{c(){e=m("section"),t=m("div"),r=m("div"),s=m("div"),o=m("div"),i=v(),a=m("img"),l=v(),h=m("div"),Z(f.$$.fragment),g=v(),p=m("p"),p.textContent="Software Engineer @Codeminer42 · Brazil",k=v(),Z(b.$$.fragment),w=v(),Z($.$$.fragment),C=v(),D=m("div"),D.innerHTML='<div class="w-px h-16 bg-gradient-to-b from-neutral-400 dark:from-neutral-600 to-transparent animate-pulse"></div>',u(o,"class","absolute -inset-1 bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-700 dark:to-neutral-900 rounded-full blur-sm opacity-50"),Ce(a.src,c=cr)||u(a,"src",c),u(a,"alt","Gabriel Quaresma"),u(a,"class","relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out ring-1 ring-neutral-300 dark:ring-neutral-800"),u(s,"class","relative"),u(p,"class","text-neutral-600 dark:text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase"),u(h,"class","space-y-4"),u(r,"class","flex flex-col items-center text-center gap-12 md:gap-16"),u(D,"class","hidden md:block"),u(t,"class","section-container flex flex-col items-center gap-8"),u(e,"class","min-h-screen flex items-center justify-center py-20 md:py-32 pt-24 md:pt-32")},m(x,_){T(x,e,_),d(e,t),d(t,r),d(r,s),d(s,o),d(s,i),d(s,a),d(r,l),d(r,h),G(f,h,null),d(h,g),d(h,p),d(r,k),G(b,r,null),d(r,w),G($,r,null),d(t,C),d(t,D),y=!0},p:L,i(x){y||(I(f.$$.fragment,x),I(b.$$.fragment,x),I($.$$.fragment,x),y=!0)},o(x){B(f.$$.fragment,x),B(b.$$.fragment,x),B($.$$.fragment,x),y=!1},d(x){x&&R(e),Y(f),Y(b),Y($)}}}class vr extends ne{constructor(e){super(),te(this,e,null,xr,V,{})}}function It(n,e,t){const r=n.slice();return r[9]=e[t].name,r[10]=e[t].icon,r[11]=e[t].stars,r[12]=e[t].url,r}function _r(n,e,t){const r=n.slice();return r[6]=e[t],r}function Lr(n){let e,t=X(n[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Et(It(n,t,s));return{c(){e=m("div");for(let s=0;s<r.length;s+=1)r[s].c();u(e,"class","grid md:grid-cols-3 gap-6")},m(s,o){T(s,e,o);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null)},p(s,o){if(o&1){t=X(s[0]);let i;for(i=0;i<t.length;i+=1){const a=It(s,t,i);r[i]?r[i].p(a,o):(r[i]=Et(a),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=t.length}},d(s){s&&R(e),de(r,s)}}}function $r(n){let e,t=X([1,2,3]),r=[];for(let s=0;s<3;s+=1)r[s]=Sr(_r(n,t,s));return{c(){e=m("div");for(let s=0;s<3;s+=1)r[s].c();u(e,"class","grid md:grid-cols-3 gap-6")},m(s,o){T(s,e,o);for(let i=0;i<3;i+=1)r[i]&&r[i].m(e,null)},p:L,d(s){s&&R(e),de(r,s)}}}function Et(n){let e,t,r,s,o,i,a,c,l=n[9]+"",h,f,g,p,k,b,w,$=jt(n[11])+"",C,D,y,x,_,M,S,O,Q;return{c(){e=m("article"),t=m("div"),r=m("div"),s=m("img"),a=v(),c=m("h3"),h=j(l),f=v(),g=m("div"),p=he("svg"),k=he("path"),b=v(),w=m("span"),C=j($),D=v(),y=m("a"),x=m("span"),_=j(`
              View my contributions
              `),M=he("svg"),S=he("path"),Q=v(),Ce(s.src,o=n[10])||u(s,"src",o),u(s,"alt",i=n[9]),u(s,"class","w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"),u(c,"class","font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(r,"class","flex items-center gap-3"),u(k,"d","M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"),u(p,"class","w-4 h-4"),u(p,"fill","currentColor"),u(p,"viewBox","0 0 20 20"),u(w,"class","text-sm"),u(g,"class","flex items-center gap-1.5 text-neutral-500"),u(t,"class","flex items-center justify-between mb-5"),u(x,"class","w-6 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-10 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"),u(S,"stroke-linecap","round"),u(S,"stroke-linejoin","round"),u(S,"stroke-width","1.5"),u(S,"d","M17 8l4 4m0 0l-4 4m4-4H3"),u(M,"class","w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"),u(M,"fill","none"),u(M,"stroke","currentColor"),u(M,"viewBox","0 0 24 24"),u(y,"href",O=zt(n[12])),u(y,"target","_blank"),u(y,"rel","noopener noreferrer"),u(y,"class","inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group/link"),u(e,"class","group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-surface-light hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-surface-lighter transition-all duration-300")},m(q,U){T(q,e,U),d(e,t),d(t,r),d(r,s),d(r,a),d(r,c),d(c,h),d(t,f),d(t,g),d(g,p),d(p,k),d(g,b),d(g,w),d(w,C),d(e,D),d(e,y),d(y,x),d(y,_),d(y,M),d(M,S),d(e,Q)},p(q,U){U&1&&!Ce(s.src,o=q[10])&&u(s,"src",o),U&1&&i!==(i=q[9])&&u(s,"alt",i),U&1&&l!==(l=q[9]+"")&&se(h,l),U&1&&$!==($=jt(q[11])+"")&&se(C,$),U&1&&O!==(O=zt(q[12]))&&u(y,"href",O)},d(q){q&&R(e)}}}function Sr(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800"></div> <div class="h-5 w-24 bg-neutral-200 dark:bg-neutral-800 rounded"></div></div> <div class="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div> <div class="h-4 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded"></div> ',u(e,"class","p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-surface-light animate-pulse")},m(t,r){T(t,e,r)},p:L,d(t){t&&R(e)}}}function Rr(n){let e,t,r,s;function o(c,l){return c[1]?$r:Lr}let i=o(n),a=i(n);return{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Community</span> <h2 class="heading-primary">Open Source Contributions</h2> <p class="text-body mt-4 max-w-2xl">Contributing to projects that make a difference in the developer
        ecosystem.</p>`,s=v(),a.c(),u(r,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900")},m(c,l){T(c,e,l),d(e,t),d(t,r),d(t,s),a.m(t,null)},p(c,[l]){i===(i=o(c))&&a?a.p(c,l):(a.d(1),a=i(c),a&&(a.c(),a.m(t,null)))},i:L,o:L,d(c){c&&R(e),a.d()}}}function jt(n){return n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(1)}K`:n.toString()}function zt(n){return`${n}/pulls?q=is%3Apr+author%3AjoaoGabriel55+is%3Aclosed`}function Tr(n,e,t){let r=[],s=!0;const o=60*60*1e3,i=new Map;async function a(l){const h=i.get(l);if(h&&Date.now()<h.expiresAt)return h.data;const g=await(await fetch(`https://api.github.com/repos/${l}`)).json();return i.set(l,{data:g,expiresAt:Date.now()+o}),g}async function c(){return(await Promise.all([a("rails/rails"),a("axios/axios"),a("grommet/grommet"),a("forem/forem")])).map(h=>({icon:h.owner.avatar_url,name:h.name,stars:h.stargazers_count,url:h.html_url,description:h.description||""}))}return lt(()=>{c().then(l=>{t(0,r=l),t(1,s=!1)})}),[r,s]}class Mr extends ne{constructor(e){super(),te(this,e,Tr,Rr,V,{})}}const qr=""+new URL("the_invoice-20fe0487.jpeg",import.meta.url).href,Ar=""+new URL("poker_estima-27b4a7bc.jpeg",import.meta.url).href,Pr=""+new URL("notificare-3a5bc136.svg",import.meta.url).href;function Bt(n,e,t){const r=n.slice();return r[1]=e[t].title,r[2]=e[t].description,r[3]=e[t].stack,r[4]=e[t].image,r[5]=e[t].link,r[6]=e[t].repository,r[8]=t,r}function Nt(n,e,t){const r=n.slice();return r[9]=e[t],r}function Dt(n){let e;return{c(){e=m("span"),e.textContent=`${n[9]} `,u(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-full")},m(t,r){T(t,e,r)},p:L,d(t){t&&R(e)}}}function Ot(n){let e,t,r,s,o,i,a,c,l,h,f,g,p,k,b,w,$,C,D,y,x,_,M,S,O=X(n[3]),Q=[];for(let q=0;q<O.length;q+=1)Q[q]=Dt(Nt(n,O,q));return{c(){e=m("article"),t=m("div"),r=m("div"),s=m("a"),o=m("div"),i=m("img"),c=v(),l=m("div"),h=v(),f=m("div"),g=m("div"),p=m("a"),k=m("h3"),k.textContent=`${n[1]}`,b=v(),w=m("p"),w.textContent=`${n[2]}`,$=v(),C=m("div");for(let q=0;q<Q.length;q+=1)Q[q].c();D=v(),y=m("a"),x=m("span"),_=j(`
                View Source Code
                `),M=he("svg"),S=v(),Ce(i.src,a=n[4])||u(i,"src",a),u(i,"alt",n[1]),u(i,"class","w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"),u(l,"class","absolute inset-0 bg-gradient-to-t from-white/50 dark:from-surface/50 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"),u(o,"class","relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg"),u(s,"href",n[5]),u(s,"target","_blank"),u(s,"rel","noopener noreferrer"),u(s,"class","block overflow-hidden rounded-lg"),u(r,"class","order-1 "+(n[8]%2===1?"md:order-2":"")),u(k,"class","heading-secondary group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(p,"href",n[5]),u(p,"target","_blank"),u(p,"rel","noopener noreferrer"),u(p,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:underline transition-colors duration-300 group/link"),u(w,"class","text-body"),u(g,"class","space-y-4"),u(C,"class","flex flex-wrap gap-2"),u(x,"class","w-8 h-px bg-neutral-400 dark:bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-neutral-900 dark:group-hover/link:bg-white transition-all duration-300"),u(M,"class","w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"),u(M,"fill","none"),u(M,"stroke","currentColor"),u(M,"viewBox","0 0 24 24"),u(y,"href",n[6]),u(y,"target","_blank"),u(y,"rel","noopener noreferrer"),u(y,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group/link"),u(f,"class","order-2 "+(n[8]%2===1?"md:order-1":"")+" space-y-6"),u(t,"class","grid md:grid-cols-2 gap-8 md:gap-12 items-center"),u(e,"class","group")},m(q,U){T(q,e,U),d(e,t),d(t,r),d(r,s),d(s,o),d(o,i),d(o,c),d(o,l),d(t,h),d(t,f),d(f,g),d(g,p),d(p,k),d(g,b),d(g,w),d(f,$),d(f,C);for(let A=0;A<Q.length;A+=1)Q[A]&&Q[A].m(C,null);d(f,D),d(f,y),d(y,x),d(y,_),d(y,M),d(e,S)},p(q,U){if(U&1){O=X(q[3]);let A;for(A=0;A<O.length;A+=1){const ae=Nt(q,O,A);Q[A]?Q[A].p(ae,U):(Q[A]=Dt(ae),Q[A].c(),Q[A].m(C,null))}for(;A<Q.length;A+=1)Q[A].d(1);Q.length=O.length}},d(q){q&&R(e),de(Q,q)}}}function Cr(n){let e,t,r,s,o,i=X(n[0]),a=[];for(let c=0;c<i.length;c+=1)a[c]=Ot(Bt(n,i,c));return{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML='<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Selected Work</span> <h2 class="heading-primary">Projects</h2>',s=v(),o=m("div");for(let c=0;c<a.length;c+=1)a[c].c();u(r,"class","mb-16 md:mb-20"),u(o,"class","space-y-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900")},m(c,l){T(c,e,l),d(e,t),d(t,r),d(t,s),d(t,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(o,null)},p(c,[l]){if(l&1){i=X(c[0]);let h;for(h=0;h<i.length;h+=1){const f=Bt(c,i,h);a[h]?a[h].p(f,l):(a[h]=Ot(f),a[h].c(),a[h].m(o,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=i.length}},i:L,o:L,d(c){c&&R(e),de(a,c)}}}function Ir(n){return[[{title:"Notificare",description:"Notificare (Romanian: 'to notify') is a Rails engine built on top of ActiveJob::Continuation. It adds a persisted projection of running-job progress, a durable user-facing notification inbox, and a Hotwire UI scaffold — turning Continuation's resumable steps into a state machine that drives notifications without manual broadcast plumbing.",stack:["Ruby","Ruby on Rails"],image:Pr,link:"https://rubygems.org/gems/notificare",repository:"https://github.com/joaoGabriel55/notificare"},{title:"Poker Estima",description:"An app that you can estimate with points (emojis) your tasks with your teammates",stack:["HTML","CSS","JavaScript","Node.js","WebSockets","Express","SQLite"],image:Ar,link:"https://poker-estima-app.fly.dev/",repository:"https://github.com/joaoGabriel55/NostraEstima"},{title:"The Invoice",description:"Generate professional invoices in minutes. Enter your details, add line items, and export a polished PDF.",stack:["HTML","CSS","JavaScript"],image:qr,link:"https://the-invoice.netlify.app/",repository:"https://github.com/joaoGabriel55/invoice-generator"}]]}class Er extends ne{constructor(e){super(),te(this,e,Ir,Cr,V,{})}}const jr=`---
title: "Powering Your Database Queries with a LLMs and MCPs"
date: "2026/02/15"
description: ""
tags: ["llm", "mcp", "database", "ai", "react.js", "javascript", "typescript"]
---

Today, we live in an era where we increasingly encounter AIs of various types and uses in our lives, whether due to hype or not, such as the well-known ChatGPT, Grok, DeepSeek, etc., for simple or complex text or audio chats.

What they all have in common is the use of **Large Language Models (LLMs)**, an acronym you've surely encountered during your studies of AI, but which, due to the hype and euphoria of developers and people outside our tech bubble, we often forget the real concept, application, and limitations of LLMs.

In general terms: **LLMs are designed to understand and generate text in natural language, as well as other forms of content**, based on vast amounts of data from diverse sources such as \`.txt\`, \`.pdf\`, etc.

## The Goal of This Post

In this article, I’ll show you how to run LLMs completely locally on your own computer, no pricey API bills, no sending your data to the cloud, and no usage limits (beyond your machine's capacity).

We’ll keep everything:

- Simple  
- Beginner-friendly  
- 100% practical  

By the end, you’ll be able to ask questions in plain English (“Show me all customers who bought more than $500 last month”) and have the model instantly write perfect (or almost) SQL for you with results.

# Use Case: Using an LLM to Generate SQL Queries

The use case we will solve is creating a simple chat where we can use natural language to query information in an SQLite database.

Whenever a user asks a question:

1. The system generates a SQL query.
2. The query is executed against the SQLite database.
3. The response includes:
   - The generated SQL
   - A table with the results

To do this, we will implement and use:

- The [Ollama](https://ollama.com/) tool, which makes it easier to start using LLMs like Gemma 3, DeepSeek-R1, Qwen3, and others locally. In our case, we will use the LLM \`qwen2.5:latest\`, which, as far as I could test, has better results for the programming and SQL domains;

- [Model Context Protocol (MCP)](https://blog.codeminer42.com/how-mcp-turned-into-the-ai-agents-lingua-franca/), which implements an open standard that allows AI applications to connect to data sources, tools, and workflows, similar to USB-C, which connects electronic devices in a standardized way.

- And finally, a simple SPA app using React.js that will consume our REST API that consumes the LLM with MCP tool.

The link to the complete source code for both the backend and the frontend is at the end of this post.

The goal throughout this post is to focus on the relevant parts of the server implementation and how to consume it on the front-end side.

# Let’s Code!

First, we need to install the Ollama tool on our machine. Just access this [link](https://ollama.com/download) and download it for your current OS. After the installation is complete, we need to download our LLM \`qwen2.5:latest\`, which is quite simple:

\`\`\`
ollama run qwen2.5:latest
\`\`\`

After completion, you should be able to send messages to the downloaded model, like this:

\`\`\`
>>> Send a message (/? for help)
\`\`\`

_Note: Feel free to download and play with other models._

## Understanding MCP

Below is a diagram illustrating how MCP works:

![MCP - How it works](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152305/mcp_flow-1024x400.webp)

The MCP defines a standard way to consume external data sources from private or public APIs, databases, documents, and so on, and provides this data to MCP clients, such as Claude Desktop, Cursor IDE, and in our case, the SPA app with React.js.

# Backend Implementation (Node.js + Express)

We will use Node.js + Express to implement our server, which will consist of just two main files: \`server.ts\` and \`question-to-sql.ts\`. The latter is the most important because it will handle the use of our LLM with MCP and return the SQL query to be executed in our SQLite database as output.

## 1. Defining the API Endpoint

The goal of our REST API is simple: to provide a POST method \`/mcp\` endpoint that will be consumed by our React app, passing a simple question as text.

Let's walk through the code.

\`\`\`ts
app.post("/question-sql-result", async (req, res) => {
  const result = await questionToSQLResult(req.body.question);
  res.json(result);
});
\`\`\`

- The \`/question-sql-result\` endpoint accepts a POST request at the \`/question-sql-result\` path and expects a JSON body containing a single \`question\` field.
- \`questionToSQLResult\` is the main function that will send the question to our LLM to generate a SQL query and execute it in our SQLite database.
- At this point, everything looks good but has no tools yet. So, let's define a new one!

## 2. Defining the SQL Tool

We need first, register a tool named \`"sql_query_tool"\` with the following parameters:

\`\`\`ts
export const sqlQueryTool = {
  type: "function",
  function: {
    name: "sql_query_tool",
    description: "Receive a sql query and return the result",
    parameters: {
      type: "object",
      required: ["sql"],
      properties: {
        sql: { type: "string", description: "The SQL query to execute" },
      },
    },
  },
};
\`\`\`

As you can see above, we define a tool named \`"sql_query_tool"\`, which describes our function with a single parameter \`sql\` of type \`string\`.

## 3. Executing the SQL Query

Now to execute the SQL query, we need to implement the function that will receive the sql query from the tool call and return the result from the database

\`\`\`ts
export const runSQLQuery = async ({
  sql,
  db,
}: {
  sql: string;
  db: Database;
}) => {
  try {
    const rows = await db.all(sql);

    return { sql, result: rows };
  } catch (error) {
    throw new Error(\`Error executing SQL query: \${(error as Error).message}\`);
  }
};
\`\`\`

Let's check step-by-step what we have inside the \`runSQLQuery\` function:

- \`async ({ sql, db }: { sql: string; db: Database })\`
  These are the parameters that function receives: \`sql\` query and the \`db\` instance to execute it.
- \`const rows = await db.all(sql)\`
  Executes the SQL query using the provided \`db\` instance and returns the result as an array of objects.
- \`return { sql, result: rows };\`
  Returns an object with the SQL query and the result.

## 4. The Core Logic

\`\`\`ts
const ollama = new Ollama({ host: " http://localhost:11434" });

const generateChatAnswer = async (messages: Message[]) => {
  const response = await ollama.chat({
    model: "qwen2.5:latest",
    messages,
    tools
  });

  return response.message;
};

const memoCache = new Map<string, string>();

export async function questionToSQLResult(question: string) {
  const db = await openDB();

  try {
    if (memoCache.has(question)) {
      const sql = memoCache.get(question)!;

      const result = await runSQLQuery({ sql, db });

      return result;
    }

    const schemaInfo = await schemaCache.getSchema(db);

    const prompt = \`
      You are an expert SQL query generator for SQLite databases.

      Your task is to transform a natural language question into a valid SQLite SQL query **by ALWAYS invoking the MCP tool 'sql_query_tool'**.
      You must NEVER return SQL directly in plain text.

      ### Database schema
      \${schemaInfo}

      ### Mandatory rules
      - You MUST call the MCP tool 'sql_query_tool' to produce the final output
      - Do NOT output SQL directly in the assistant message
      - The SQL query must be the ONLY content passed to the tool
      - If a query cannot be generated, pass the exact string below to the tool:
        "Cannot generate query: required tables or columns not found in schema"

      ### Query generation rules
      - Use ONLY tables and columns defined in the schema
      - Use table and column names exactly as they appear in the schema
      - Generate syntactically correct SQLite SQL
      - Use appropriate JOINs (INNER, LEFT, RIGHT) based on relationships and intent
      - Apply WHERE clauses when filtering is implied
      - Use aggregation functions (COUNT, SUM, AVG, MIN, MAX) when appropriate
      - Use GROUP BY whenever aggregations are used
      - Use ORDER BY when sorting is requested
      - Handle NULL values correctly when relevant
      - Do NOT include comments, explanations, markdown, or formatting

      ### User question
      \${question}

      ### Output requirement
      - Call the MCP tool 'sql_query_tool'
      - Pass ONLY the raw SQL query (or the failure message) as the tool input
    \`;

    const response = await generateChatAnswer([
      { role: "user", content: prompt },
    ]);

    console.log("tool_calls: ", response.tool_calls);

    if (!response.tool_calls?.length) return null;

    const call = response.tool_calls[0];
    const args = call.function.arguments as { sql: string };

    console.log("SQL: ", args.sql);

    const result = await runSQLQuery({ sql: args.sql, db });

    memoCache.set(question, args.sql);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await db.close();
  }
}
\`\`\`

We have above the \`questionToSQLResult\` function that makes the "magic", handling the generation of SQL queries from questions in natural language. And for this, this function:

1. Checks if the question sent is present on our \`memoCache\` to avoid unnecessary calls to the LLM and saving our memory and execute the SQL query;
2. If is not present on the \`memoCache\`, get our database schema through \`schemaCache.getSchema(db)\` and use it in the prompt to be sent to LLM. This will make our prompt more rich in details and context about our database tables and its structures;
3. Defines a prompt with detailed instructions on how to interpret and transform the question into a valid SQL query;
4. Calls the \`generateChatAnswer\`, which chats with Ollama using the model \`"qwen2.5:latest"\` with a set of \`tools\` containing our \`sqlQueryTool\` definition. This allows our LLM knows that our tool exists and can be used to generate SQL queries, it is a new superpower;
5. Processes the response looking for the \`tool_calls\` and getting the function call arguments, in our case the \`sql\`.
6. Finally, executes the SQL query using the \`runSQLQuery\` method.

The key idea is forcing the model to:

* **Always invoke the MCP tool**
* Never output raw SQL directly
* Use only schema-defined tables and columns

_Note: The more detailed our prompt is, the more accurate our final response will be. Try new prompts or improvements during your development._

## Practical Example

If the input is a question such as: \`"Select all users with email with domain @yahoo.com"\`, it will generate something similar to:

\`\`\`sql
SELECT * FROM users WHERE email LIKE '%@yahoo.com';
\`\`\`

# Frontend (React + TypeScript)

So, once our backend server is implemented, we can understand how to integrate it into our chat app, nicknamed "GPTo Database Chat".

Our app is very straightforward in its features, basically allowing the user to:

1. Send a question to our database and obtain the SQL query and the returned data;
2. Automatically save the questions asked in the browser's local storage history.

To implement the above features, React.js (with TypeScript) + [framework's React Router](https://reactrouter.com/start/framework/installation) was used.

The core of the app relevant to this post is the integration with the API of our backend server through the implementation of the custom React hook \`useQuestionToSqlResult\`, a simple wrapper to call our API endpoint and be used by our UI to interact with our backend server.

\`\`\`ts
export interface ChatResponse {
  sql: string;
  result: unknown[];
}

async function makeRequest(body: Record<string, any>) {
  const response = await fetch("http://localhost:3002/question-sql-result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
}

export function useQuestionToSqlResult() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const call = async (question: string) => {
    setIsLoading(true);
    try {
      const result = await makeRequest({ question });

      return result as ChatResponse;
    } catch (error) {
      console.error(error);
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, call };
}
\`\`\`

The implementation is very simple and straightforward. When the user provides a question, the UI calls \`call(question)\`. The hook then communicates with the backend via \`makeRequest\`, obtains the SQL query and its results, and updates its internal states (\`isLoading\` and \`isError\`). 

Finally, the UI renders the generated SQL query and its tabular results for better visualization.

![GPTo](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152314/sql_llm-1024x543.webp)

# Wrapping up

It's simple to use and integrate a local LLM and calls MCP tools with a simple REST server using Ollama, right? I hope this post has made it clearer what LLMs actually are and how we can go beyond common cloud usage (like ChatGPT, Grok, Copilot, etc.), adopting open-source models provided by the community that can be installed locally to solve everyday tasks—like the natural language SQL query demonstrated in this post, and without depending on super models that require your credit card!

That's all for today, folks! Until next time!

👉 Check out the complete source code here:
[https://github.com/joaoGabriel55/MCP-SQL-Server](https://github.com/joaoGabriel55/MCP-SQL-Server)
`,zr=`---
title: Python Who? Why This Hidden Gem Shows That Ruby's ML Ecosystem Is Better Than You Think"
date: "2026/05/26"
description: ""
tags: ["ruby", "machine learning"]
---

Got your attention? Good. If you haven’t yet read the insightful [blog post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/) used as a reference for a RubyConf talk, there’s no need to rush. Feel free to read it later, this article makes an excellent complement to it.

In the machine learning field, it's very common to use Python as the default language to build and use machine learning algorithms. But some people aren't so familiar with the language and, most of the time, choose it to start working with Artificial Intelligence without thinking twice. If you come from the Ruby community, though, I have good news: you don't need to use Python to work with ML. You can use a "hidden" (or not-so-hyped) gem called [Rumale](https://github.com/yoshoku/rumale), and in this post I'll show how to use it in practical, real-world use cases.

Nowadays, as devs living in our tech bubble, we're breathing the AI age, surrounded by information about LLM models, agents, and so on. As a result, some foundational and important concepts get forgotten, in this case: Machine Learning.

### Let's Recap What Machine Learning Is

> All machine learning is AI, but not all AI is machine learning.

We can understand ML as a subset of AI that focuses exclusively on algorithms able to "learn" patterns from training data, which can then make accurate inferences about new input data. It's very similar to the way we humans learn things throughout our lives.

Examples of Machine Learning areas:
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Deep Learning

But don't despair, you don't need to dive deep into these complex concepts and algorithms, or even get a PhD. In our day-to-day work, we just need tools that make our lives easier when we decide to work with one of the many ML algorithms. You're about to get to know one of those tools.

### Have You Heard About Rumale?

Rumale (**Ru**by **ma**chine **le**arning) is a machine learning library for Ruby with an API that mirrors Python's Scikit-Learn. If you come from the Python ML world and have used scikit-learn, you'll feel at home immediately. Methods like \`fit\`, \`transform\`, \`predict\`, and \`score\` are identical.

This gem has a Robin to its Batman: \`Numo::NArray\`, a numerical N-dimensional array class for fast processing and easy manipulation of multi-dimensional numerical data, similar to \`numpy.ndarray\`.

So Rumale fills a real gap, letting a Ruby on Rails app add classifiers, recommendation logic, or anomaly detection without bringing in a separate Python service.

### Where Can I Apply Rumale?

There are many use cases where you can use this awesome gem. Let's look at some of them and the models recommended for each:

- **Spam classifier**: \`TfidfTransformer\` + \`MultinomialNB\` or \`LogisticRegression\`. Train offline, \`Marshal.dump\` the model, and load it in the web process.
- **Customer churn prediction**: \`RandomForestClassifier\` with a \`StandardScaler\` in a \`Pipeline\`, tuned via \`GridSearchCV\`.
- **Customer segmentation**: \`KMeans\` or \`DBSCAN\` on order history, evaluated with \`SilhouetteScore\`.
- **Fraud detection**: \`IsolationForest\` style work using ensemble trees, or \`DBSCAN\`.
- **Lead scoring**: \`GradientBoostingClassifier\` on CRM data.
- **Image/feature dimensionality reduction for visualization**: \`PCA\`, then \`TSNE\`.

### Setup

Before we write any code, let's get Rumale installed. You'll need Ruby 2.7 or newer.

If you're just experimenting, install the gem directly:

\`\`\`bash
gem install rumale
\`\`\`

Or, if you're adding it to a Ruby/Rails project, drop it into your \`Gemfile\` and run \`bundle install\`:

\`\`\`rb
# Gemfile
gem 'rumale'
\`\`\`

Rumale depends on [\`Numo::NArray\`](https://github.com/ruby-numo/numo-narray) for its number processing, and it's pulled in automatically as a dependency. So once the gem is installed, both \`require 'rumale'\` and \`require 'numo/narray'\` will be available. With that in place, we're ready to go.

### How to Use It

Using Rumale is a no-brainer. Let's use the lead-scoring use case as a backdrop to understand how we can work with the gem.

Take a look at how things work, in simple architectural terms:

![lead scoring](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/05/26144438/Screenshot-2026-05-26-at-2.44.18-PM-1024x661.webp)

First, we need to implement our training algorithm. Check it out:

\`\`\`rb
require 'rumale'
require 'numo/narray'

# ---------------------------------------------------------------------------
# 1. Training data
# ---------------------------------------------------------------------------
# Each row is one lead. Features (columns) are:
#   [ company_size(number of collaborators), pages_viewed, emails_opened, demo_requested(0/1), days_since_signup ]
#
# In a real app these would come from your CRM / database, not be hard-coded.
samples = Numo::DFloat[
  [  50,  2,  1, 0, 30],   # small, low engagement
  [ 500, 12,  8, 1,  3],   # big, very engaged, asked for a demo
  [  10,  1,  0, 0, 60],   # tiny, cold
  [ 800, 20, 15, 1,  1],   # enterprise, hot lead
  [ 120,  5,  3, 0, 14],   # medium, lukewarm
  [ 300, 15, 10, 1,  5],   # solid, engaged
  [  20,  3,  1, 0, 45],   # small, cold
  [ 650, 18, 12, 1,  2],   # large, hot
  [  80,  4,  2, 0, 25],   # small-medium, lukewarm
  [ 400, 10,  6, 1,  7]    # medium-large, engaged
]

# Labels: 1 = the lead converted (became a customer), 0 = it did not.
labels = Numo::Int32[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

# ---------------------------------------------------------------------------
# 2. Build a pipeline: scale features -> logistic regression
# ---------------------------------------------------------------------------
# Features live on very different scales (company_size in hundreds vs
# demo_requested 0/1). StandardScaler normalizes them so the model treats
# each feature fairly.
#
# LogisticRegression is a great fit for scoring because it naturally outputs
# calibrated probabilities, which map cleanly onto a 0-100 score.
scaler     = Rumale::Preprocessing::StandardScaler.new

# reg_param === regularization parameter
# Higher reg_param (e.g. 1.0, 10.0): stronger penalty, weights pushed toward zero. Simpler, smoother model.
# Lower reg_param (e.g. 0.001): weak penalty. The model is freer to fit the training data closely.
classifier = Rumale::LinearModel::LogisticRegression.new(reg_param: 0.1) # The value in this example is a middle ground

pipeline = Rumale::Pipeline::Pipeline.new(
  steps: { scaler: scaler, model: classifier }
)

# Train the whole pipeline in one call.
pipeline.fit(samples, labels)

# ---------------------------------------------------------------------------
# 3. Persist the FITTED pipeline with Marshal
# ---------------------------------------------------------------------------
# Marshal.dump serializes the whole object graph: the trained logistic
# regression weights AND the scaler's learned mean/std. Everything needed to
# score is captured, so we never have to retrain just to make predictions.
#
# Use binary mode ('wb') because Marshal output is binary, not text.
File.open('lead_model.dat', 'wb') do |f|
  f.write(Marshal.dump(pipeline))
end

puts 'Model trained and saved to lead_model.dat'
\`\`\`

Now we need to use our trained model, saved in the project folder, to predict lead scores for new samples. Let's see:

\`\`\`rb
require 'rumale'
require 'numo/narray'

# ---------------------------------------------------------------------------
# 1. Load the trained pipeline back from disk
# ---------------------------------------------------------------------------
# Marshal.load reconstructs the exact fitted pipeline we saved earlier --
# same weights, same scaler parameters. Read in binary mode ('rb').
#
# If you want to use it in a Rails app you'd typically do this ONCE at boot (e.g. in an initializer)
# and keep the object in memory, rather than reloading on every request.
pipeline = Marshal.load(File.binread('lead_model.dat'))

# ---------------------------------------------------------------------------
# 2. Score new, unseen leads
# ---------------------------------------------------------------------------
new_leads = Numo::DFloat[
  [ 540, 16,  4, 1,  2],   # likely strong
  [ 500,  8,  9, 0, 12],   # in between
  [ 200,  7,  4, 0, 10]    # likely cold
]

# predict_proba: returns the probability (a float) of a lead becoming a customer
conversion_probs = pipeline.predict_proba(new_leads)[true, 1]

# ---------------------------------------------------------------------------
# 3. Convert probabilities into a 0-100 score and tier
# ---------------------------------------------------------------------------
new_leads.shape[0].times do |i|
  score = (conversion_probs[i] * 100).round

  tier =
    if    score >= 70 then 'HOT'
    elsif score >= 40 then 'WARM'
    else                   'COLD'
    end

  puts "Lead ##{i + 1}: score = #{score}/100  (#{tier})"
end
\`\`\`

Run that script and you'll see something like this:

\`\`\`text
Lead #1: score = 98/100  (HOT)
Lead #2: score = 46/100  (WARM)
Lead #3: score = 11/100  (COLD)
\`\`\`

The model picked up exactly what we'd expect: the large, highly engaged lead that requested a demo lands firmly in the HOT tier; the second lead, also a big company, with steady email activity but no demo request, comes out WARM; and the smaller, lower-engagement lead with no demo is clearly COLD. (Your exact numbers may differ slightly depending on the Rumale version, but the tiers should line up.)

## Caveats

As with everything in life and programming, Rumale is not a silver bullet. It has some limitations that are worth mentioning before you use it.

- No native GPU support: for deep learning, reach for [\`Rumale::Torch\`](https://github.com/yoshoku/rumale-torch).
- A smaller ecosystem than Python: fewer pretrained models, fewer tutorials, and a smaller community.
- The switch to \`Numo::NArray\` in v2.0.0 is worth flagging if you have older Rumale code.
- No DataFrame integration comparable to pandas: you'll be working with raw \`Numo::NArray\` arrays.

## Wrapping Up

Easy, right? Keep in mind that the example above is simple, but it's a good demonstration of the power of the Rumale gem and of how we can make our Ruby or Ruby on Rails applications even richer and more valuable by using ML algorithms wisely to solve real world problems.

You don't always need a separate Python service, a heavyweight framework, or a PhD to bring machine learning into your app. Sometimes a well-chosen gem is all it takes. And if you haven't yet, go read the [companion post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/) that inspired this post. It's a great reminder that the right classic algorithm can still be better than a hyped new model.
`,Br=`---
title: "Why a 1990s Machine Learning Algorithm Destroys LLMs at Predicting House Prices"
date: "2026/03/13"
description: ""
tags: ["llm", "machine learning", "ruby", "benchmark", "random forest"]
---

I asked an LLM how much my neighbor's house might be worth, a 300m² place with 4 bedrooms, not too old. It gave me a vague, hedged answer that could have applied to almost any property. So I decided to build something better, and in the process, learned an important lesson about when to reach for traditional machine learning instead of a language model.

With all the hype surrounding LLMs, it's tempting to treat them as silver bullets. But as we'll see in this post, backed by actual benchmark experiments, there are tasks where traditional ML algorithms are not just viable alternatives, but measurably superior. And the best part? The two approaches can work together.

## The Problem: How Much Is That House Worth?

Determining a fair price for a property is far from trivial. You can filter by bedrooms, bathrooms, square meters, and location, but turning those features into a reliable price estimate requires more than intuition.

An LLM might give you a ballpark figure, but its answer isn't grounded in your actual dataset. It's drawing on general training data, and for a task that demands numerical precision on structured inputs, that's a fundamental limitation.

A more reliable approach is to use a machine learning algorithm designed for exactly this kind of predictive task. In this article, we'll use **Random Forest** and then put it head-to-head against an LLM to prove the point with data.

## How Random Forest Works

Random Forest combines the output of multiple decision trees to produce a single prediction. Each tree learns from a random subset of the data and makes its own estimate. The forest aggregates all the trees' answers:

- For **regression** (predicting a price), it averages the predictions.
- For **classification** (e.g., "cheap" vs. "expensive"), it takes the majority vote.

A single decision tree works by asking a sequence of structured questions about the input data. Starting at the root node, it evaluates a condition (e.g., "Is the area &gt; 100m²?"), branches based on the answer, and repeats until it reaches a leaf node containing the final prediction.

The power of Random Forest lies in combining many such trees. Each one sees a slightly different slice of the data, so their individual errors tend to cancel out. The result is a model that's more accurate and robust than any single tree.

## Defining Our Model

To estimate a property's price, we need to define features (X) and a target (Y).

**Features:**
- Area (in square meters)
- Number of Rooms
- Number of Bathrooms
- Age (in years)

**Target:** Price (in thousands)

Our dataset is a CSV file where each row contains these 4 features plus the price. We use a synthetic dataset here — the Limitations section below discusses what that means for the results and how the approach scales to real data.

## Training the Model in Ruby

We'll use **[Rumale](https://github.com/yoshoku/rumale)** (a machine learning library for Ruby) and **[Numo::NArray](https://github.com/ruby-numo/numo-narray)** (for efficient numerical arrays, similar to NumPy in Python).

\`\`\`ruby
require 'csv'
require 'rumale'
require 'numo/narray'

# Load and split data
data = CSV.read("houses.csv")
houses_features = data.map { |row| (0..row.length-2).map { |i| row[i].to_i } }
houses_prices = data.map { |row| row.last.to_i }

x = Numo::DFloat.asarray(houses_features)
y = Numo::DFloat.asarray(houses_prices)

# Train Random Forest
model = Rumale::Ensemble::RandomForestRegressor.new(
  n_estimators: 100,  # 100 decision trees
  max_depth: nil,     # let trees grow fully
  random_seed: 42     # reproducible results
)
model.fit(x, y)

# Save for later use
File.open("house_model.dat", "wb") { |f| Marshal.dump(model, f) }
\`\`\`

This trains 100 decision trees on our data and saves the model to disk. The \`random_seed\` ensures reproducibility — run it twice, get the same model.

Once trained, making predictions is straightforward:

\`\`\`ruby
require 'rumale'
require 'numo/narray'

def predict_price(params)
  model = Marshal.load(File.read("house_model.dat"))

  input = Numo::DFloat[[
    params[:area],
    params[:rooms],
    params[:bathrooms],
    params[:age]
  ]]

  puts "Predicted price: #{model.predict(input)[0]}K"
end

predict_price(area: 500, rooms: 10, bathrooms: 5, age: 20)
\`\`\`

I wrapped this into a simple web app where users fill in the property features and get an instant price estimate:

![Web app input form](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171245/Screenshot-2026-02-27-at-5.11.54-PM-1024x667.webp)

![Web app prediction result](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171259/Screenshot-2026-02-27-at-5.12.13-PM-1024x603.webp)

The [source code is on GitHub](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest) — contributions welcome.

## Putting It to the Test: Random Forest vs. LLM

Instead of just claiming that Random Forest is better for this task, I ran a series of controlled experiments to measure the difference across four dimensions: accuracy, latency, consistency, and hybrid integration. You can reproduce every result using the [benchmark script](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest/blob/main/benchmark.rb) included with this post.

### Experimental Setup

To make these results reproducible, here are the exact conditions:

**Dataset:** CSV file with 50050 rows, each containing 4 numeric features (area in m², rooms, bathrooms, age in years) and a target price in thousands. Split 80/20 into training (40040 rows) and test (10010 rows) sets using a fixed shuffle seed of 42.

**Random Forest configuration:**
- Library: Rumale (Ruby)
- \`n_estimators\`: 100
- \`max_depth\`: nil (unlimited)
- \`random_seed\`: 42

**LLM configuration:**
- Provider: OpenRouter
- Model: \`anthropic/claude-opus-4.6\` (Claude Opus 4.6)
- \`max_tokens\`: 50 (for price predictions), 100 (for feature extraction)
- \`temperature\`: 1.0 (for prediction and consistency experiments), 0.0 (for feature extraction)

**Prompts used (verbatim):**

For price prediction (Experiments 1–3):
\`\`\`
You are a house price estimator. Based on these features, predict the house
price in thousands (K). Reply with ONLY a number followed by K. Example: 450K

Features:
- Area: {area} m²
- Rooms: {rooms}
- Bathrooms: {bathrooms}
- Age: {age} years

Predicted price:
\`\`\`

For feature extraction (Experiment 4):
\`\`\`
Extract house features from the following description. Return ONLY a JSON
object with these exact keys:
{"area": <number>, "rooms": <number>, "bathrooms": <number>, "age": <number>}

Description: "{user_text}"

JSON:
\`\`\`

**Evaluation metrics:**
- **MAE** (Mean Absolute Error): average of |actual − predicted| across test cases
- **RMSE** (Root Mean Squared Error): square root of the average squared errors
- **Latency**: wall-clock time per prediction (including network round-trip for LLM)
- **Variance**: standard deviation across 10 repeated predictions of the same input

All LLM experiments were run on the same 20-case test subset to keep API costs manageable. Random Forest metrics are also reported on this same subset for fair comparison.

### Experiment 1: Accuracy

Using the 20-case test subset described above, I ran both models on the same inputs and compared their errors:

| Metric | Random Forest | LLM (anthropic/claude-opus-4.6) |
|--------|--------------|----------------|
| MAE    | 8.21K | 155.4K |
| RMSE   | 10.8K | 213.5K |

The Random Forest model, trained on the actual dataset, produces predictions grounded in the patterns it learned. The LLM, despite being remarkably capable at language tasks, is essentially guessing based on general knowledge. It has no access to our specific data distribution.

### Experiment 2: Latency and Cost

Speed matters, especially if you're serving predictions in a web app.

| Metric | Random Forest | LLM |
|--------|--------------|-----|
| Avg latency | 0.45 ms | 4040.5 ms |
| Speedup | — | ~8985x slower |

Random Forest inference is nearly instantaneous — microseconds on a single CPU. An LLM API call involves network round-trips and GPU inference time, making it orders of magnitude slower.

### Experiment 3: Consistency

I asked each model to predict the same house price 10 times.

Random Forest returned the **exact same number every time** — it's deterministic given the same input and seed.

The LLM returned a **different number almost every time**. Even with the same prompt, the stochastic nature of language generation means you get variance in numerical outputs.

| Case | RF Variance | LLM Standard Deviation (Std Dev) |
|------|-------------|-------------|
| 342, 6, 6, 22 | 0 (deterministic) | 70.06K |
| 280, 5, 5, 12 | 0 (deterministic) | 14.0K |
| 267, 5, 2, 32 | 0 (deterministic) | 32.33K |

For a pricing tool, this inconsistency is a serious problem. Users expect the same input to produce the same output.

### Experiment 4: The Hybrid Approach

Here's the twist. Real users don't type structured numbers into forms — they say things like:

> "A spacious 250 square meter house with 5 bedrooms and 3 bathrooms, built about 10 years ago"

Random Forest can't parse that. But an LLM can.

I built a hybrid pipeline where the LLM extracts structured features from natural language, then passes them to Random Forest for prediction:

\`\`\`
User text → LLM (extract parameters) → Random Forest → Price prediction
\`\`\`

| Input | Expected | Extracted | Match | RF Price (extracted) | RF Price (correct) |
|-------|----------|-----------|-------|---------------------|--------------------|
| A spacious 250 square meter house with 5 ... | [250, 5, 3, 10] | [250, 5, 3, 10] | ✅ | 669.0K | 669.0K |
| Small apartment, 60m², 2 rooms, 1 bathroo... | [60, 2, 1, 2] | [60, 2, 1, 2] | ✅ | 175.6K | 175.6K |
| Old colonial mansion with 400 square mete... | [400, 8, 4, 50] | [400, 8, 4, 50] | ✅ | 800.8K | 800.8K |
| Modern 120m² flat, 3 bedrooms, 2 bathroom... | [120, 3, 2, 5] | [120, 3, 2, 5] | ✅ | 324.2K | 324.2K |
| Cozy 80 sqm home, two bedrooms, one bathr... | [80, 2, 1, 15] | [80, 2, 1, 15] | ✅ | 175.7K | 175.7K |

**Extraction accuracy:** 100.0%

In Ruby, this pipeline looks like:

\`\`\`ruby
user_text = "Modern 300m² house, 4 bedrooms, less than 10 years old"

# LLM extracts structured features
structured_params = LLM.extract_features(user_text)
# => { area: 300, rooms: 4, bathrooms: 2, age: 10 }

# Random Forest predicts the price
predict_price(structured_params)
# => "Predicted price: 485K"
\`\`\`

Each tool does what it's best at: the LLM handles flexible human language, the ML model handles numerical prediction.

## What This Teaches Us

The experiments above measured four specific dimensions, and the results point to a clear division of labor:

**Where Random Forest wins:** On structured numerical prediction, it was more accurate (lower MAE/RMSE, since it actually learned from the data distribution), faster (microseconds vs. seconds per prediction), deterministic (zero variance across repeated calls), and essentially free at inference time. These are not minor advantages — for a production pricing tool, consistency and speed are table stakes.

**Where the LLM wins:** In Experiment 4, the LLM correctly parsed natural language descriptions into structured features with high accuracy. This is a task that Random Forest simply cannot do — it requires no training data, just the ability to understand human language. Crucially, the LLM's strength here is *extraction*, not *prediction*. It's parsing, not estimating.

**The broader principle:** This isn't a story about Random Forest being "better" than LLMs. It's about choosing the right tool for each subtask in a pipeline. LLMs excel at understanding unstructured input and generating structured output. Traditional ML excels at learning patterns from domain-specific data and producing reliable numerical predictions. The hybrid pipeline — LLM as parser, ML model as predictor — leverages both strengths without exposing either to tasks they're poorly suited for.

This pattern generalizes beyond house prices. Any system where users provide natural language input but the core task is numerical prediction on structured features (credit scoring, demand forecasting, medical risk assessment, insurance pricing) is a candidate for the same architecture. Before defaulting to an LLM for the entire pipeline, ask: *is the hard part understanding the input, or making the prediction?* Often it's the former, and a focused ML model handles the latter better.

### Limitations and Caveats

These experiments have known limitations worth acknowledging. The dataset is synthetic, so the absolute accuracy numbers don't reflect real-world property valuation — they demonstrate the *relative* advantage of a trained model over an untrained one. Real-world house prices depend on many more variables (location, condition, school district, market timing, nearby amenities), but the approach scales: just add more features and swap in real listing data. The LLM had no access to the training data distribution, which is the core reason it underperforms on prediction; in a scenario where an LLM is fine-tuned on the same data or given retrieval access to comparable sales, the accuracy gap would narrow. The latency comparison is also network-dependent — a self-hosted LLM would be faster than an API call, though still orders of magnitude slower than a local Random Forest inference. Finally, we tested a single LLM (Claude Opus 4.6); other models may behave differently on numerical estimation tasks.

## What's Next

A trained model is only useful if it stays current. As new property data comes in, the model should retrain periodically to capture market shifts. In a Rails application, this is straightforward: schedule an ActiveJob that pulls fresh CSV data, retrains the Random Forest, and writes a new \`house_model.dat\`, all in the background without interrupting the web app.

Beyond retraining, there are a few natural extensions worth exploring: adding location as a feature (using neighborhood encoding or latitude/longitude), incorporating feature importance analysis to understand which variables drive price the most, and wrapping the hybrid LLM + Random Forest pipeline into a single API endpoint so users can query in natural language and get structured predictions back.

## References

- [Rumale Documentation](https://yoshoku.github.io/rumale/doc/Rumale.html)
- [IBM — Random Forest](https://www.ibm.com/br-pt/think/topics/random-forest)
- Rokach, L., Maimon, O. (2005). Decision Trees. In: Maimon, O., Rokach, L. (eds) Data Mining and Knowledge Discovery Handbook. Springer, Boston, MA. [https://doi.org/10.1007/0-387-25465-X_9](https://doi.org/10.1007/0-387-25465-X_9)
`;function dt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xe=dt();function wn(n){xe=n}var ke={exec:()=>null};function P(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(s,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(ee.caret,"$1"),t=t.replace(s,i),r},getRegex:()=>new RegExp(t,e)};return r}var Nr=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ee={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Dr=/^(?:[ \t]*(?:\n|$))+/,Or=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Qr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,je=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Fr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,yn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,xn=P(yn).replace(/bull/g,pt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Hr=P(yn).replace(/bull/g,pt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ft=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wr=/^[^\n]+/,gt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ur=P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gr=P(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pt).getRegex(),Ze="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",mt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Yr=P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",mt).replace("tag",Ze).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vn=P(ft).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Kr=P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vn).getRegex(),bt={blockquote:Kr,code:Or,def:Ur,fences:Qr,heading:Fr,hr:je,html:Yr,lheading:xn,list:Gr,newline:Dr,paragraph:vn,table:ke,text:Wr},Qt=P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Zr={...bt,lheading:Hr,table:Qt,paragraph:P(ft).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qt).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex()},Xr={...bt,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",mt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ke,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(ft).replace("hr",je).replace("heading",` *#{1,6} *[^
]`).replace("lheading",xn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Vr=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_n=/^( {2,}|\\)\n(?!\s*$)/,es=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Xe=/[\p{P}\p{S}]/u,kt=/[\s\p{P}\p{S}]/u,Ln=/[^\s\p{P}\p{S}]/u,ts=P(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,kt).getRegex(),$n=/(?!~)[\p{P}\p{S}]/u,ns=/(?!~)[\s\p{P}\p{S}]/u,rs=/(?:[^\s\p{P}\p{S}]|~)/u,Sn=/(?![*_])[\p{P}\p{S}]/u,ss=/(?![*_])[\s\p{P}\p{S}]/u,as=/(?:[^\s\p{P}\p{S}]|[*_])/u,os=P(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Nr?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Rn=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,is=P(Rn,"u").replace(/punct/g,Xe).getRegex(),ls=P(Rn,"u").replace(/punct/g,$n).getRegex(),Tn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",cs=P(Tn,"gu").replace(/notPunctSpace/g,Ln).replace(/punctSpace/g,kt).replace(/punct/g,Xe).getRegex(),us=P(Tn,"gu").replace(/notPunctSpace/g,rs).replace(/punctSpace/g,ns).replace(/punct/g,$n).getRegex(),hs=P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ln).replace(/punctSpace/g,kt).replace(/punct/g,Xe).getRegex(),ds=P(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Sn).getRegex(),ps="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",fs=P(ps,"gu").replace(/notPunctSpace/g,as).replace(/punctSpace/g,ss).replace(/punct/g,Sn).getRegex(),gs=P(/\\(punct)/,"gu").replace(/punct/g,Xe).getRegex(),ms=P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bs=P(mt).replace("(?:-->|$)","-->").getRegex(),ks=P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bs).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),He=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ws=P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",He).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Mn=P(/^!?\[(label)\]\[(ref)\]/).replace("label",He).replace("ref",gt).getRegex(),qn=P(/^!?\[(ref)\](?:\[\])?/).replace("ref",gt).getRegex(),ys=P("reflink|nolink(?!\\()","g").replace("reflink",Mn).replace("nolink",qn).getRegex(),Ft=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wt={_backpedal:ke,anyPunctuation:gs,autolink:ms,blockSkip:os,br:_n,code:Jr,del:ke,delLDelim:ke,delRDelim:ke,emStrongLDelim:is,emStrongRDelimAst:cs,emStrongRDelimUnd:hs,escape:Vr,link:ws,nolink:qn,punctuation:ts,reflink:Mn,reflinkSearch:ys,tag:ks,text:es,url:ke},xs={...wt,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",He).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",He).getRegex()},st={...wt,emStrongRDelimAst:us,emStrongLDelim:ls,delLDelim:ds,delRDelim:fs,url:P(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ft).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:P(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ft).getRegex()},vs={...st,br:P(_n).replace("{2,}","*").getRegex(),text:P(st.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Be={normal:bt,gfm:Zr,pedantic:Xr},Te={normal:wt,gfm:st,breaks:vs,pedantic:xs},_s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ht=n=>_s[n];function ue(n,e){if(e){if(ee.escapeTest.test(n))return n.replace(ee.escapeReplace,Ht)}else if(ee.escapeTestNoEncode.test(n))return n.replace(ee.escapeReplaceNoEncode,Ht);return n}function Wt(n){try{n=encodeURI(n).replace(ee.percentDecode,"%")}catch{return null}return n}function Ut(n,e){var o;let t=n.replace(ee.findPipe,(i,a,c)=>{let l=!1,h=a;for(;--h>=0&&c[h]==="\\";)l=!l;return l?"|":" |"}),r=t.split(ee.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(ee.slashPipe,"|");return r}function Me(n,e,t){let r=n.length;if(r===0)return"";let s=0;for(;s<r;){let o=n.charAt(r-s-1);if(o===e&&!t)s++;else if(o!==e&&t)s++;else break}return n.slice(0,r-s)}function Ls(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function $s(n,e=0){let t=e,r="";for(let s of n)if(s==="	"){let o=4-t%4;r+=" ".repeat(o),t+=o}else r+=s,t++;return r}function Gt(n,e,t,r,s){let o=e.href,i=e.title||null,a=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:o,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}function Ss(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(o=>{let i=o.match(t.other.beginningSpace);if(i===null)return o;let[a]=i;return a.length>=s.length?o.slice(s.length):o}).join(`
`)}var We=class{constructor(n){E(this,"options");E(this,"rules");E(this,"lexer");this.options=n||xe}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Me(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=Ss(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=Me(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Me(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=Me(e[0],`
`).split(`
`),r="",s="",o=[];for(;t.length>0;){let i=!1,a=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),i=!0;else if(!i)a.push(t[c]);else break;t=t.slice(c);let l=a.join(`
`),h=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,s=s?`${s}
${h}`:h;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=f,t.length===0)break;let g=o.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){let p=g,k=p.raw+`
`+t.join(`
`),b=this.blockquote(k);o[o.length-1]=b,r=r.substring(0,r.length-p.raw.length)+b.raw,s=s.substring(0,s.length-p.text.length)+b.text;break}else if((g==null?void 0:g.type)==="list"){let p=g,k=p.raw+`
`+t.join(`
`),b=this.list(k);o[o.length-1]=b,r=r.substring(0,r.length-g.raw.length)+b.raw,s=s.substring(0,s.length-p.raw.length)+b.raw,t=k.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(n){var t,r;let e=this.rules.block.list.exec(n);if(e){let s=e[1].trim(),o=s.length>1,i={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");let a=this.rules.other.listItemRegex(s),c=!1;for(;n;){let h=!1,f="",g="";if(!(e=a.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let p=$s(e[2].split(`
`,1)[0],e[1].length),k=n.split(`
`,1)[0],b=!p.trim(),w=0;if(this.options.pedantic?(w=2,g=p.trimStart()):b?w=e[1].length+1:(w=p.search(this.rules.other.nonSpaceChar),w=w>4?1:w,g=p.slice(w),w+=e[1].length),b&&this.rules.other.blankLine.test(k)&&(f+=k+`
`,n=n.substring(k.length+1),h=!0),!h){let $=this.rules.other.nextBulletRegex(w),C=this.rules.other.hrRegex(w),D=this.rules.other.fencesBeginRegex(w),y=this.rules.other.headingBeginRegex(w),x=this.rules.other.htmlBeginRegex(w),_=this.rules.other.blockquoteBeginRegex(w);for(;n;){let M=n.split(`
`,1)[0],S;if(k=M,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),S=k):S=k.replace(this.rules.other.tabCharGlobal,"    "),D.test(k)||y.test(k)||x.test(k)||_.test(k)||$.test(k)||C.test(k))break;if(S.search(this.rules.other.nonSpaceChar)>=w||!k.trim())g+=`
`+S.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(p)||y.test(p)||C.test(p))break;g+=`
`+k}b=!k.trim(),f+=M+`
`,n=n.substring(M.length+1),p=S.slice(w)}}i.loose||(c?i.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(c=!0)),i.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),i.raw+=f}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let h of i.items){if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),h.task){if(h.text=h.text.replace(this.rules.other.listReplaceTask,""),((t=h.tokens[0])==null?void 0:t.type)==="text"||((r=h.tokens[0])==null?void 0:r.type)==="paragraph"){h.tokens[0].raw=h.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),h.tokens[0].text=h.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(h.raw);if(f){let g={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};h.checked=g.checked,i.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=g.raw+h.tokens[0].raw,h.tokens[0].text=g.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(g)):h.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):h.tokens.unshift(g)}}if(!i.loose){let f=h.tokens.filter(p=>p.type==="space"),g=f.length>0&&f.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=g}}if(i.loose)for(let h of i.items){h.loose=!0;for(let f of h.tokens)f.type==="text"&&(f.type="paragraph")}return i}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:s}}}table(n){var i;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ut(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(i=e[3])!=null&&i.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<t.length;a++)o.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:o.align[a]});for(let a of s)o.rows.push(Ut(a,o.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[l]})));return o}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let o=Me(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{let o=Ls(e[2],"()");if(o===-2)return;if(o>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Gt(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return Gt(t,s,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!t||this.rules.inline.punctuation.exec(t))){let s=[...r[0]].length-1,o,i,a=s,c=0,l=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(i=[...o].length,r[3]||r[4]){a+=i;continue}else if((r[5]||r[6])&&s%3&&!((s+i)%3)){c+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+c);let h=[...r[0]][0].length,f=n.slice(0,s+r.index+h+i);if(Math.min(s,i)%2){let p=f.slice(1,-1);return{type:"em",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}let g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let s=[...r[0]].length-1,o,i,a=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*n.length+s);(r=c.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(i=[...o].length,i!==s))continue;if(r[3]||r[4]){a+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a);let l=[...r[0]][0].length,h=n.slice(0,s+r.index+l+i),f=h.slice(s,-s);return{type:"del",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let o;do o=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(o!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},ie=class at{constructor(e){E(this,"tokens");E(this,"options");E(this,"state");E(this,"inlineQueue");E(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xe,this.options.tokenizer=this.options.tokenizer||new We,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ee,block:Be.normal,inline:Te.normal};this.options.pedantic?(t.block=Be.pedantic,t.inline=Te.pedantic):this.options.gfm&&(t.block=Be.gfm,this.options.breaks?t.inline=Te.breaks:t.inline=Te.gfm),this.tokenizer.rules=t}static get rules(){return{block:Be,inline:Te}}static lex(e,t){return new at(t).lex(e)}static lexInline(e,t){return new at(t).inlineTokens(e)}lex(e){e=e.replace(ee.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){var s,o,i;for(this.options.pedantic&&(e=e.replace(ee.tabCharGlobal,"    ").replace(ee.spaceLine,""));e;){let a;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(l=>(a=l.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);let l=t.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},t.push(a));continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if((i=this.options.extensions)!=null&&i.startBlock){let l=1/0,h=e.slice(1),f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},h),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(c))){let l=t.at(-1);r&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a),r=c.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var c,l,h,f,g;let r=e,s=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)p.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)o=s[2]?s[2].length:0,r=r.slice(0,s.index+o)+"["+"a".repeat(s[0].length-o-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((l=(c=this.options.hooks)==null?void 0:c.emStrongMask)==null?void 0:l.call({lexer:this},r))??r;let i=!1,a="";for(;e;){i||(a=""),i=!1;let p;if((f=(h=this.options.extensions)==null?void 0:h.inline)!=null&&f.some(b=>(p=b.call({lexer:this},e,t))?(e=e.substring(p.raw.length),t.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let b=t.at(-1);p.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(p=this.tokenizer.emStrong(e,r,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.del(e,r,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),t.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),t.push(p);continue}let k=e;if((g=this.options.extensions)!=null&&g.startInline){let b=1/0,w=e.slice(1),$;this.options.extensions.startInline.forEach(C=>{$=C.call({lexer:this},w),typeof $=="number"&&$>=0&&(b=Math.min(b,$))}),b<1/0&&b>=0&&(k=e.substring(0,b+1))}if(p=this.tokenizer.inlineText(k)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(a=p.raw.slice(-1)),i=!0;let b=t.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(e){let b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return t}},Ue=class{constructor(n){E(this,"options");E(this,"parser");this.options=n||xe}space(n){return""}code({text:n,lang:e,escaped:t}){var o;let r=(o=(e||"").match(ee.notSpaceStart))==null?void 0:o[0],s=n.replace(ee.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ue(r)+'">'+(t?s:ue(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:ue(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let i=0;i<n.items.length;i++){let a=n.items[i];r+=this.listitem(a)}let s=e?"ol":"ul",o=e&&t!==1?' start="'+t+'"':"";return"<"+s+o+`>
`+r+"</"+s+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let s=0;s<n.header.length;s++)t+=this.tablecell(n.header[s]);e+=this.tablerow({text:t});let r="";for(let s=0;s<n.rows.length;s++){let o=n.rows[s];t="";for(let i=0;i<o.length;i++)t+=this.tablecell(o[i]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ue(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),s=Wt(n);if(s===null)return r;n=s;let o='<a href="'+n+'"';return e&&(o+=' title="'+ue(e)+'"'),o+=">"+r+"</a>",o}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let s=Wt(n);if(s===null)return ue(t);n=s;let o=`<img src="${n}" alt="${t}"`;return e&&(o+=` title="${ue(e)}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ue(n.text)}},yt=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},le=class ot{constructor(e){E(this,"options");E(this,"renderer");E(this,"textRenderer");this.options=e||xe,this.options.renderer=this.options.renderer||new Ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yt}static parse(e,t){return new ot(t).parse(e)}static parseInline(e,t){return new ot(t).parseInline(e)}parse(e){var r,s;let t="";for(let o=0;o<e.length;o++){let i=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[i.type]){let c=i,l=this.options.extensions.renderers[c.type].call({parser:this},c);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){t+=l||"";continue}}let a=i;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}parseInline(e,t=this.renderer){var s,o;let r="";for(let i=0;i<e.length;i++){let a=e[i];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=l||"";continue}}let c=a;switch(c.type){case"escape":{r+=t.text(c);break}case"html":{r+=t.html(c);break}case"link":{r+=t.link(c);break}case"image":{r+=t.image(c);break}case"checkbox":{r+=t.checkbox(c);break}case"strong":{r+=t.strong(c);break}case"em":{r+=t.em(c);break}case"codespan":{r+=t.codespan(c);break}case"br":{r+=t.br(c);break}case"del":{r+=t.del(c);break}case"text":{r+=t.text(c);break}default:{let l='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}},Ne,qe=(Ne=class{constructor(n){E(this,"options");E(this,"block");this.options=n||xe}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?ie.lex:ie.lexInline}provideParser(){return this.block?le.parse:le.parseInline}},E(Ne,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),E(Ne,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Ne),Rs=class{constructor(...n){E(this,"defaults",dt());E(this,"options",this.setOptions);E(this,"parse",this.parseMarkdown(!0));E(this,"parseInline",this.parseMarkdown(!1));E(this,"Parser",le);E(this,"Renderer",Ue);E(this,"TextRenderer",yt);E(this,"Lexer",ie);E(this,"Tokenizer",We);E(this,"Hooks",qe);this.use(...n)}walkTokens(n,e){var r,s;let t=[];for(let o of n)switch(t=t.concat(e.call(this,o)),o.type){case"table":{let i=o;for(let a of i.header)t=t.concat(this.walkTokens(a.tokens,e));for(let a of i.rows)for(let c of a)t=t.concat(this.walkTokens(c.tokens,e));break}case"list":{let i=o;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let c=i[a].flat(1/0);t=t.concat(this.walkTokens(c,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...i){let a=s.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),t.renderer){let s=this.defaults.renderer||new Ue(this.defaults);for(let o in t.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,a=t.renderer[i],c=s[i];s[i]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h||""}}r.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new We(this.defaults);for(let o in t.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,a=t.tokenizer[i],c=s[i];s[i]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}r.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new qe;for(let o in t.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,a=t.hooks[i],c=s[i];qe.passThroughHooks.has(o)?s[i]=l=>{if(this.defaults.async&&qe.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await a.call(s,l);return c.call(s,f)})();let h=a.call(s,l);return c.call(s,h)}:s[i]=(...l)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(s,l);return f===!1&&(f=await c.apply(s,l)),f})();let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}r.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,o=t.walkTokens;r.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),s&&(a=a.concat(s.call(this,i))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return ie.lex(n,e??this.defaults)}parser(n,e){return le.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let r={...t},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(e):e,a=await(s.hooks?await s.hooks.provideLexer():n?ie.lex:ie.lexInline)(i,s),c=s.hooks?await s.hooks.processAllTokens(a):a;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let l=await(s.hooks?await s.hooks.provideParser():n?le.parse:le.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(l):l})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let i=(s.hooks?s.hooks.provideLexer():n?ie.lex:ie.lexInline)(e,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let a=(s.hooks?s.hooks.provideParser():n?le.parse:le.parseInline)(i,s);return s.hooks&&(a=s.hooks.postprocess(a)),a}catch(i){return o(i)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+ue(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},ye=new Rs;function z(n,e){return ye.parse(n,e)}z.options=z.setOptions=function(n){return ye.setOptions(n),z.defaults=ye.defaults,wn(z.defaults),z};z.getDefaults=dt;z.defaults=xe;z.use=function(...n){return ye.use(...n),z.defaults=ye.defaults,wn(z.defaults),z};z.walkTokens=function(n,e){return ye.walkTokens(n,e)};z.parseInline=ye.parseInline;z.Parser=le;z.parser=le.parse;z.Renderer=Ue;z.TextRenderer=yt;z.Lexer=ie;z.lexer=ie.lex;z.Tokenizer=We;z.Hooks=qe;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;le.parse;ie.lex;const Ts=Object.assign({"/src/content/blog/powering-your-database-queries-with-a-llms-and-mcps.md":jr,"/src/content/blog/python-who-why-this-hidden-gem-shows-that-rubys-ml-ecosystem-is-better-than-you-think.md":zr,"/src/content/blog/random-forest-vs-llm-house-prices.md":Br});function Ms(n){const e=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,t=n.match(e);if(!t)return{data:{},content:n};const r=t[1],s=t[2],o={},i=r.split(`
`);for(const a of i){const c=a.indexOf(":");if(c===-1)continue;const l=a.slice(0,c).trim();let h=a.slice(c+1).trim();if((h.startsWith('"')&&h.endsWith('"')||h.startsWith("'")&&h.endsWith("'"))&&(h=h.slice(1,-1)),h.startsWith("[")&&h.endsWith("]")){const f=h.slice(1,-1);o[l]=f.split(",").map(g=>g.trim()).map(g=>g.startsWith('"')&&g.endsWith('"')||g.startsWith("'")&&g.endsWith("'")?g.slice(1,-1):g).filter(g=>g.length>0)}else o[l]=h}return{data:o,content:s}}function qs(n,e){const t=n.replace("/src/content/blog/","").replace(".md",""),{data:r,content:s}=Ms(e),o=z(s);return{slug:t,title:r.title||"Untitled",date:r.date||new Date().toISOString().split("T")[0],updateDate:r.updateDate,description:r.description||"",tags:r.tags||[],content:s,htmlContent:o}}function xt(){return Object.entries(Ts).map(([e,t])=>qs(e,t)).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function As(n){return xt().find(t=>t.slug===n)}function fe(n){const e=new Date(n);return new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"long",day:"numeric"}).format(e)}function An(n){const t=n.trim().split(/\s+/).length;return Math.ceil(t/200)}function Yt(n,e,t){const r=n.slice();return r[3]=e[t],r}function Kt(n){let e,t,r=fe(n[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(r),u(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(o,i){T(o,e,i),d(e,t),d(e,s)},p(o,i){i&1&&r!==(r=fe(o[0].updateDate)+"")&&se(s,r)},d(o){o&&R(e)}}}function Zt(n){let e,t,r=n[3]+"",s,o;return{c(){e=m("span"),t=j("#"),s=j(r),o=v(),u(e,"class","px-2 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-900 rounded")},m(i,a){T(i,e,a),d(e,t),d(e,s),d(e,o)},p(i,a){a&1&&r!==(r=i[3]+"")&&se(s,r)},d(i){i&&R(e)}}}function Ps(n){let e,t,r,s,o,i=fe(n[0].date)+"",a,c,l,h,f,g,p,k,b,w,$=n[0].title+"",C,D,y,x=n[0].description+"",_,M,S,O,Q,q,U,A=n[0].updateDate&&Kt(n),ae=X(n[0].tags.slice(0,3)),W=[];for(let N=0;N<ae.length;N+=1)W[N]=Zt(Yt(n,ae,N));return{c(){e=m("button"),t=m("div"),r=m("div"),s=m("div"),o=m("time"),a=j(i),c=v(),l=m("span"),l.textContent="·",h=v(),f=m("span"),g=j(n[1]),p=j(" min read"),k=v(),A&&A.c(),b=v(),w=m("h3"),C=j($),D=v(),y=m("p"),_=j(x),M=v(),S=m("div");for(let N=0;N<W.length;N+=1)W[N].c();O=v(),Q=m("div"),Q.innerHTML=`<span class="w-6 h-px bg-neutral-400 dark:bg-neutral-700 group-hover:w-10 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-300"></span>
      Read Article
      <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,u(o,"class","text-xs text-neutral-500 tracking-wide uppercase"),u(l,"class","text-neutral-400 dark:text-neutral-700"),u(f,"class","text-xs text-neutral-500 tracking-wide"),u(s,"class","flex items-center gap-4"),u(r,"class","mb-6 space-y-2"),u(w,"class","heading-secondary mb-3 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(y,"class","text-body text-sm mb-5 line-clamp-2 svelte-efadq"),u(S,"class","flex flex-wrap gap-2 mb-5"),u(Q,"class","inline-flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300"),u(t,"class","p-6 md:p-8 bg-neutral-50 dark:bg-surface-light rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-surface-lighter"),u(e,"class","group cursor-pointer w-full text-left")},m(N,oe){T(N,e,oe),d(e,t),d(t,r),d(r,s),d(s,o),d(o,a),d(s,c),d(s,l),d(s,h),d(s,f),d(f,g),d(f,p),d(r,k),A&&A.m(r,null),d(t,b),d(t,w),d(w,C),d(t,D),d(t,y),d(y,_),d(t,M),d(t,S);for(let H=0;H<W.length;H+=1)W[H]&&W[H].m(S,null);d(t,O),d(t,Q),q||(U=Re(e,"click",n[2]),q=!0)},p(N,[oe]){if(oe&1&&i!==(i=fe(N[0].date)+"")&&se(a,i),oe&2&&se(g,N[1]),N[0].updateDate?A?A.p(N,oe):(A=Kt(N),A.c(),A.m(r,null)):A&&(A.d(1),A=null),oe&1&&$!==($=N[0].title+"")&&se(C,$),oe&1&&x!==(x=N[0].description+"")&&se(_,x),oe&1){ae=X(N[0].tags.slice(0,3));let H;for(H=0;H<ae.length;H+=1){const pe=Yt(N,ae,H);W[H]?W[H].p(pe,oe):(W[H]=Zt(pe),W[H].c(),W[H].m(S,null))}for(;H<W.length;H+=1)W[H].d(1);W.length=ae.length}},i:L,o:L,d(N){N&&R(e),A&&A.d(),de(W,N),q=!1,U()}}}function Cs(n,e,t){let r,{post:s}=e;function o(){ut(`/blog/${s.slug}`)}return n.$$set=i=>{"post"in i&&t(0,s=i.post)},n.$$.update=()=>{n.$$.dirty&1&&t(1,r=An(s.content))},[s,r,o]}class Pn extends ne{constructor(e){super(),te(this,e,Cs,Ps,V,{post:0})}}function Xt(n,e,t){const r=n.slice();return r[1]=e[t],r}function Is(n){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',u(e,"class","text-center py-16")},m(t,r){T(t,e,r)},p:L,i:L,o:L,d(t){t&&R(e)}}}function Es(n){let e,t,r,s,o,i,a,c=X(n[0]),l=[];for(let f=0;f<c.length;f+=1)l[f]=Vt(Xt(n,c,f));const h=f=>B(l[f],1,1,()=>{l[f]=null});return{c(){e=m("div");for(let f=0;f<l.length;f+=1)l[f].c();t=v(),r=m("div"),s=m("a"),s.innerHTML=`View all posts
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,u(e,"class","grid md:grid-cols-2 gap-6 md:gap-8"),u(s,"href","/blog"),u(s,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(r,"class","mt-12 text-center")},m(f,g){T(f,e,g);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(e,null);T(f,t,g),T(f,r,g),d(r,s),o=!0,i||(a=it(ht.call(null,s)),i=!0)},p(f,g){if(g&1){c=X(f[0]);let p;for(p=0;p<c.length;p+=1){const k=Xt(f,c,p);l[p]?(l[p].p(k,g),I(l[p],1)):(l[p]=Vt(k),l[p].c(),I(l[p],1),l[p].m(e,null))}for(me(),p=c.length;p<l.length;p+=1)h(p);be()}},i(f){if(!o){for(let g=0;g<c.length;g+=1)I(l[g]);o=!0}},o(f){l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)B(l[g]);o=!1},d(f){f&&(R(e),R(t),R(r)),de(l,f),i=!1,a()}}}function Vt(n){let e,t;return e=new Pn({props:{post:n[1]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const o={};s&1&&(o.post=r[1]),e.$set(o)},i(r){t||(I(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function js(n){let e,t,r,s,o,i,a;const c=[Es,Is],l=[];function h(f,g){return f[0].length>0?0:1}return o=h(n),i=l[o]=c[o](n),{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h2 class="heading-primary">Blog</h2> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
        along the way.</p>`,s=v(),i.c(),u(r,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-900"),u(e,"id","blog")},m(f,g){T(f,e,g),d(e,t),d(t,r),d(t,s),l[o].m(t,null),a=!0},p(f,[g]){let p=o;o=h(f),o===p?l[o].p(f,g):(me(),B(l[p],1,1,()=>{l[p]=null}),be(),i=l[o],i?i.p(f,g):(i=l[o]=c[o](f),i.c()),I(i,1),i.m(t,null))},i(f){a||(I(i),a=!0)},o(f){B(i),a=!1},d(f){f&&R(e),l[o].d()}}}function zs(n,e,t){let r=[];return lt(()=>{t(0,r=xt().slice(0,2))}),[r]}class Bs extends ne{constructor(e){super(),te(this,e,zs,js,V,{})}}function Ns(n){let e,t,r,s,o,i,a,c;return e=new vr({}),r=new Er({}),o=new Mr({}),a=new Bs({}),{c(){Z(e.$$.fragment),t=v(),Z(r.$$.fragment),s=v(),Z(o.$$.fragment),i=v(),Z(a.$$.fragment)},m(l,h){G(e,l,h),T(l,t,h),G(r,l,h),T(l,s,h),G(o,l,h),T(l,i,h),G(a,l,h),c=!0},p:L,i(l){c||(I(e.$$.fragment,l),I(r.$$.fragment,l),I(o.$$.fragment,l),I(a.$$.fragment,l),c=!0)},o(l){B(e.$$.fragment,l),B(r.$$.fragment,l),B(o.$$.fragment,l),B(a.$$.fragment,l),c=!1},d(l){l&&(R(t),R(s),R(i)),Y(e,l),Y(r,l),Y(o,l),Y(a,l)}}}class Ds extends ne{constructor(e){super(),te(this,e,null,Ns,V,{})}}function Jt(n,e,t){const r=n.slice();return r[3]=e[t],r}function en(n){let e,t,r=fe(n[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(r),u(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(o,i){T(o,e,i),d(e,t),d(e,s)},p(o,i){i&1&&r!==(r=fe(o[0].updateDate)+"")&&se(s,r)},d(o){o&&R(e)}}}function tn(n){let e,t,r=n[3]+"",s,o;return{c(){e=m("span"),t=j("#"),s=j(r),o=v(),u(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-800 rounded-full")},m(i,a){T(i,e,a),d(e,t),d(e,s),d(e,o)},p(i,a){a&1&&r!==(r=i[3]+"")&&se(s,r)},d(i){i&&R(e)}}}function Os(n){let e,t,r,s,o,i,a,c,l=fe(n[0].date)+"",h,f,g,p,k,b,w,$,C,D,y=n[0].title+"",x,_,M,S=n[0].description+"",O,Q,q,U,A,ae,W,N=n[0].htmlContent+"",oe,H,pe,Ve,vt,re=n[0].updateDate&&en(n),ve=X(n[0].tags),J=[];for(let F=0;F<ve.length;F+=1)J[F]=tn(Jt(n,ve,F));return{c(){e=m("article"),t=m("div"),r=m("button"),r.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      Back to Blog`,s=v(),o=m("header"),i=m("div"),a=m("div"),c=m("time"),h=j(l),f=v(),g=m("span"),g.textContent="·",p=v(),k=m("span"),b=j(n[1]),w=j(" min read"),$=v(),re&&re.c(),C=v(),D=m("h1"),x=j(y),_=v(),M=m("p"),O=j(S),Q=v(),q=m("div");for(let F=0;F<J.length;F+=1)J[F].c();U=v(),A=m("div"),ae=v(),W=m("div"),oe=v(),H=m("footer"),pe=m("button"),pe.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to all posts`,u(r,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"),u(c,"class","text-sm text-neutral-500 tracking-wide"),u(g,"class","text-neutral-400 dark:text-neutral-700"),u(k,"class","text-sm text-neutral-500 tracking-wide"),u(a,"class","flex items-center gap-4"),u(i,"class","mb-6 space-y-2"),u(D,"class","text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white leading-tight mb-6"),u(M,"class","text-lg md:text-xl text-neutral-700 dark:text-neutral-400 font-light leading-relaxed"),u(q,"class","flex flex-wrap gap-2 mt-8"),u(o,"class","mb-12 md:mb-16"),u(A,"class","w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-12 md:mb-16"),u(W,"class","prose svelte-1wvssng"),u(pe,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"),u(H,"class","mt-16 md:mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800"),u(t,"class","section-container max-w-3xl"),u(e,"class","py-24 md:py-32")},m(F,ce){T(F,e,ce),d(e,t),d(t,r),d(t,s),d(t,o),d(o,i),d(i,a),d(a,c),d(c,h),d(a,f),d(a,g),d(a,p),d(a,k),d(k,b),d(k,w),d(i,$),re&&re.m(i,null),d(o,C),d(o,D),d(D,x),d(o,_),d(o,M),d(M,O),d(o,Q),d(o,q);for(let K=0;K<J.length;K+=1)J[K]&&J[K].m(q,null);d(t,U),d(t,A),d(t,ae),d(t,W),W.innerHTML=N,d(t,oe),d(t,H),d(H,pe),Ve||(vt=[Re(r,"click",n[2]),Re(pe,"click",n[2])],Ve=!0)},p(F,[ce]){if(ce&1&&l!==(l=fe(F[0].date)+"")&&se(h,l),ce&2&&se(b,F[1]),F[0].updateDate?re?re.p(F,ce):(re=en(F),re.c(),re.m(i,null)):re&&(re.d(1),re=null),ce&1&&y!==(y=F[0].title+"")&&se(x,y),ce&1&&S!==(S=F[0].description+"")&&se(O,S),ce&1){ve=X(F[0].tags);let K;for(K=0;K<ve.length;K+=1){const _t=Jt(F,ve,K);J[K]?J[K].p(_t,ce):(J[K]=tn(_t),J[K].c(),J[K].m(q,null))}for(;K<J.length;K+=1)J[K].d(1);J.length=ve.length}ce&1&&N!==(N=F[0].htmlContent+"")&&(W.innerHTML=N)},i:L,o:L,d(F){F&&R(e),re&&re.d(),de(J,F),Ve=!1,ge(vt)}}}function Qs(n,e,t){let r,{post:s}=e;function o(){bn(),ut("/blog")}return n.$$set=i=>{"post"in i&&t(0,s=i.post)},n.$$.update=()=>{n.$$.dirty&1&&t(1,r=An(s.content))},[s,r,o]}class Fs extends ne{constructor(e){super(),te(this,e,Qs,Os,V,{post:0})}}function nn(n,e,t){const r=n.slice();return r[4]=e[t],r}function Hs(n){let e,t,r,s,o,i,a,c,l,h,f;const g=[Gs,Us],p=[];function k(b,w){return b[0].length>0?0:1}return a=k(n),c=p[a]=g[a](n),{c(){e=m("section"),t=m("div"),r=m("a"),r.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to Home`,s=v(),o=m("header"),o.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h1 class="heading-primary">Blog</h1> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
          along the way.</p>`,i=v(),c.c(),u(r,"href","/"),u(r,"class","inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12 group"),u(o,"class","mb-16 md:mb-20"),u(t,"class","section-container"),u(e,"class","py-24 md:py-32")},m(b,w){T(b,e,w),d(e,t),d(t,r),d(t,s),d(t,o),d(t,i),p[a].m(t,null),l=!0,h||(f=it(ht.call(null,r)),h=!0)},p(b,w){let $=a;a=k(b),a===$?p[a].p(b,w):(me(),B(p[$],1,1,()=>{p[$]=null}),be(),c=p[a],c?c.p(b,w):(c=p[a]=g[a](b),c.c()),I(c,1),c.m(t,null))},i(b){l||(I(c),l=!0)},o(b){B(c),l=!1},d(b){b&&R(e),p[a].d(),h=!1,f()}}}function Ws(n){let e,t;return e=new Fs({props:{post:n[2]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const o={};s&4&&(o.post=r[2]),e.$set(o)},i(r){t||(I(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Us(n){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',u(e,"class","text-center py-16")},m(t,r){T(t,e,r)},p:L,i:L,o:L,d(t){t&&R(e)}}}function Gs(n){let e,t,r=X(n[0]),s=[];for(let i=0;i<r.length;i+=1)s[i]=rn(nn(n,r,i));const o=i=>B(s[i],1,1,()=>{s[i]=null});return{c(){e=m("div");for(let i=0;i<s.length;i+=1)s[i].c();u(e,"class","grid md:grid-cols-2 gap-6 md:gap-8")},m(i,a){T(i,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);t=!0},p(i,a){if(a&1){r=X(i[0]);let c;for(c=0;c<r.length;c+=1){const l=nn(i,r,c);s[c]?(s[c].p(l,a),I(s[c],1)):(s[c]=rn(l),s[c].c(),I(s[c],1),s[c].m(e,null))}for(me(),c=r.length;c<s.length;c+=1)o(c);be()}},i(i){if(!t){for(let a=0;a<r.length;a+=1)I(s[a]);t=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)B(s[a]);t=!1},d(i){i&&R(e),de(s,i)}}}function rn(n){let e,t;return e=new Pn({props:{post:n[4]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const o={};s&1&&(o.post=r[4]),e.$set(o)},i(r){t||(I(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ys(n){let e,t,r,s;const o=[Ws,Hs],i=[];function a(c,l){return c[1]&&c[2]?0:1}return e=a(n),t=i[e]=o[e](n),{c(){t.c(),r=Ye()},m(c,l){i[e].m(c,l),T(c,r,l),s=!0},p(c,[l]){let h=e;e=a(c),e===h?i[e].p(c,l):(me(),B(i[h],1,1,()=>{i[h]=null}),be(),t=i[e],t?t.p(c,l):(t=i[e]=o[e](c),t.c()),I(t,1),t.m(r.parentNode,r))},i(c){s||(I(t),s=!0)},o(c){B(t),s=!1},d(c){c&&R(r),i[e].d(c)}}}function Ks(n,e,t){let r,s;Qe(n,Pe,a=>t(1,r=a)),Qe(n,Oe,a=>t(2,s=a));let{params:o={}}=e,i=[];return lt(()=>{t(0,i=xt())}),n.$$set=a=>{"params"in a&&t(3,o=a.params)},n.$$.update=()=>{if(n.$$.dirty&8)if(o.slug){const a=As(o.slug);a&&(Oe.set(a),Pe.set(!0),window.scrollTo({top:0,behavior:"smooth"}))}else Oe.set(null),Pe.set(!1)},[i,r,s,o]}class sn extends ne{constructor(e){super(),te(this,e,Ks,Ys,V,{params:3})}}function Zs(n){let e,t,r,s,o,i,a;return e=new lr({}),s=new Vn({props:{routes:n[0]}}),i=new tr({}),{c(){Z(e.$$.fragment),t=v(),r=m("main"),Z(s.$$.fragment),o=v(),Z(i.$$.fragment),u(r,"class","min-h-screen bg-white dark:bg-surface transition-colors duration-300")},m(c,l){G(e,c,l),T(c,t,l),T(c,r,l),G(s,r,null),T(c,o,l),G(i,c,l),a=!0},p:L,i(c){a||(I(e.$$.fragment,c),I(s.$$.fragment,c),I(i.$$.fragment,c),a=!0)},o(c){B(e.$$.fragment,c),B(s.$$.fragment,c),B(i.$$.fragment,c),a=!1},d(c){c&&(R(t),R(r),R(o)),Y(e,c),Y(s),Y(i,c)}}}function Xs(n,e,t){return[{"/":Ds,"/blog":sn,"/blog/:slug":sn},!0]}class Vs extends ne{constructor(e){super(),te(this,e,Xs,Zs,V,{prerender:1})}get prerender(){return this.$$.ctx[1]}}new Vs({target:document.getElementById("app")});
