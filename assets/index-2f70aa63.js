var Mn=Object.defineProperty;var Pn=(n,e,t)=>e in n?Mn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var I=(n,e,t)=>(Pn(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function $(){}function rn(n,e){for(const t in e)n[t]=e[t];return n}function sn(n){return n()}function _t(){return Object.create(null)}function fe(n){n.forEach(sn)}function Ue(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let je;function Ae(n,e){return n===e?!0:(je||(je=document.createElement("a")),je.href=e,n===je.href)}function An(n){return Object.keys(n).length===0}function an(n,...e){if(n==null){for(const r of e)r(void 0);return $}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ve(n,e,t){n.$$.on_destroy.push(an(e,t))}function it(n){return n&&Ue(n.destroy)?n.destroy:$}function u(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function he(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function m(n){return document.createElement(n)}function Le(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function j(n){return document.createTextNode(n)}function _(){return j(" ")}function We(){return j("")}function Ce(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function p(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Cn(n){return Array.from(n.childNodes)}function se(n,e){e=""+e,n.data!==e&&(n.data=e)}function En(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function De(n,e){return new n(e)}let Ee;function Me(n){Ee=n}function Ge(){if(!Ee)throw new Error("Function called outside component initialization");return Ee}function at(n){Ge().$$.on_mount.push(n)}function In(n){Ge().$$.after_update.push(n)}function jn(n){Ge().$$.on_destroy.push(n)}function zn(){const n=Ge();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const a=En(e,t,{cancelable:r});return s.slice().forEach(o=>{o.call(n,a)}),!a.defaultPrevented}return!0}}function vt(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const $e=[],$t=[];let Se=[];const Lt=[],on=Promise.resolve();let et=!1;function ln(){et||(et=!0,on.then(un))}function cn(){return ln(),on}function tt(n){Se.push(n)}const Je=new Set;let _e=0;function un(){if(_e!==0)return;const n=Ee;do{try{for(;_e<$e.length;){const e=$e[_e];_e++,Me(e),Bn(e.$$)}}catch(e){throw $e.length=0,_e=0,e}for(Me(null),$e.length=0,_e=0;$t.length;)$t.pop()();for(let e=0;e<Se.length;e+=1){const t=Se[e];Je.has(t)||(Je.add(t),t())}Se.length=0}while($e.length);for(;Lt.length;)Lt.pop()();et=!1,Je.clear(),Me(n)}function Bn(n){if(n.fragment!==null){n.update(),fe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(tt)}}function Qn(n){const e=[],t=[];Se.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Se=e}const Qe=new Set;let ke;function ge(){ke={r:0,c:[],p:ke}}function me(){ke.r||fe(ke.c),ke=ke.p}function C(n,e){n&&n.i&&(Qe.delete(n),n.i(e))}function B(n,e,t,r){if(n&&n.o){if(Qe.has(n))return;Qe.add(n),ke.c.push(()=>{Qe.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function X(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function hn(n,e){const t={},r={},s={$$scope:1};let a=n.length;for(;a--;){const o=n[a],i=e[a];if(i){for(const l in o)l in i||(r[l]=1);for(const l in i)s[l]||(t[l]=i[l],s[l]=1);n[a]=i}else for(const l in o)s[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function pn(n){return typeof n=="object"&&n!==null?n:{}}function Z(n){n&&n.c()}function G(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),tt(()=>{const a=n.$$.on_mount.map(sn).filter(Ue);n.$$.on_destroy?n.$$.on_destroy.push(...a):fe(a),n.$$.on_mount=[]}),s.forEach(tt)}function Y(n,e){const t=n.$$;t.fragment!==null&&(Qn(t.after_update),fe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function On(n,e){n.$$.dirty[0]===-1&&($e.push(n),ln(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function te(n,e,t,r,s,a,o,i=[-1]){const l=Ee;Me(n);const c=n.$$={fragment:null,ctx:[],props:a,update:$,not_equal:s,bound:_t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_t(),dirty:i,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(f,g,...d)=>{const k=d.length?d[0]:g;return c.ctx&&s(c.ctx[f],c.ctx[f]=k)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](k),h&&On(n,f)),g}):[],c.update(),h=!0,fe(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=Cn(e.target);c.fragment&&c.fragment.l(f),f.forEach(R)}else c.fragment&&c.fragment.c();e.intro&&C(n.$$.fragment),G(n,e.target,e.anchor),un()}Me(l)}class ne{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){Y(this,1),this.$destroy=$}$on(e,t){if(!Ue(t))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!An(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dn);const ve=[];function dn(n,e){return{subscribe:Ye(n,e).subscribe}}function Ye(n,e=$){let t;const r=new Set;function s(i){if(J(n,i)&&(n=i,t)){const l=!ve.length;for(const c of r)c[1](),ve.push(c,n);if(l){for(let c=0;c<ve.length;c+=2)ve[c][0](ve[c+1]);ve.length=0}}}function a(i){s(i(n))}function o(i,l=$){const c=[i,l];return r.add(c),r.size===1&&(t=e(s,a)||$),i(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:a,subscribe:o}}function fn(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return dn(t,(o,i)=>{let l=!1;const c=[];let h=0,f=$;const g=()=>{if(h)return;f();const k=e(r?c[0]:c,o,i);a?o(k):f=Ue(k)?k:$},d=s.map((k,b)=>an(k,y=>{c[b]=y,h&=~(1<<b),l&&g()},()=>{h|=1<<b}));return l=!0,g(),function(){fe(d),f(),l=!1}})}function Fn(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,r,s,a,o=[],i="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),i+="/(.*)"):t===":"?(r=s.indexOf("?",1),a=s.indexOf(".",1),o.push(s.substring(1,~r?r:~a?a:s.length)),i+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(i+=(~r?"?":"")+"\\"+s.substring(a))):i+="/"+s;return{keys:o,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}function Nn(n){let e,t,r;const s=[n[2]];var a=n[0];function o(i){let l={};for(let c=0;c<s.length;c+=1)l=rn(l,s[c]);return{props:l}}return a&&(e=De(a,o()),e.$on("routeEvent",n[7])),{c(){e&&Z(e.$$.fragment),t=We()},m(i,l){e&&G(e,i,l),T(i,t,l),r=!0},p(i,l){const c=l&4?hn(s,[pn(i[2])]):{};if(l&1&&a!==(a=i[0])){if(e){ge();const h=e;B(h.$$.fragment,1,0,()=>{Y(h,1)}),me()}a?(e=De(a,o()),e.$on("routeEvent",i[7]),Z(e.$$.fragment),C(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else a&&e.$set(c)},i(i){r||(e&&C(e.$$.fragment,i),r=!0)},o(i){e&&B(e.$$.fragment,i),r=!1},d(i){i&&R(t),e&&Y(e,i)}}}function Hn(n){let e,t,r;const s=[{params:n[1]},n[2]];var a=n[0];function o(i){let l={};for(let c=0;c<s.length;c+=1)l=rn(l,s[c]);return{props:l}}return a&&(e=De(a,o()),e.$on("routeEvent",n[6])),{c(){e&&Z(e.$$.fragment),t=We()},m(i,l){e&&G(e,i,l),T(i,t,l),r=!0},p(i,l){const c=l&6?hn(s,[l&2&&{params:i[1]},l&4&&pn(i[2])]):{};if(l&1&&a!==(a=i[0])){if(e){ge();const h=e;B(h.$$.fragment,1,0,()=>{Y(h,1)}),me()}a?(e=De(a,o()),e.$on("routeEvent",i[6]),Z(e.$$.fragment),C(e.$$.fragment,1),G(e,t.parentNode,t)):e=null}else a&&e.$set(c)},i(i){r||(e&&C(e.$$.fragment,i),r=!0)},o(i){e&&B(e.$$.fragment,i),r=!1},d(i){i&&R(t),e&&Y(e,i)}}}function Un(n){let e,t,r,s;const a=[Hn,Nn],o=[];function i(l,c){return l[1]?0:1}return e=i(n),t=o[e]=a[e](n),{c(){t.c(),r=We()},m(l,c){o[e].m(l,c),T(l,r,c),s=!0},p(l,[c]){let h=e;e=i(l),e===h?o[e].p(l,c):(ge(),B(o[h],1,1,()=>{o[h]=null}),me(),t=o[e],t?t.p(l,c):(t=o[e]=a[e](l),t.c()),C(t,1),t.m(r.parentNode,r))},i(l){s||(C(t),s=!0)},o(l){B(t),s=!1},d(l){l&&R(r),o[e].d(l)}}}function St(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let r="";return t>-1&&(r=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:r}}const ot=dn(null,function(e){e(St());const t=()=>{e(St())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});fn(ot,n=>n.location);fn(ot,n=>n.querystring);const Rt=Ye(void 0);async function lt(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await cn(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(n.charAt(0)=="#"?"":"#")+n}function ct(n,e){if(e=qt(e),!n||!n.tagName||n.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return Tt(n,e),{update(t){t=qt(t),Tt(n,t)}}}function Wn(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Tt(n,e){let t=e.href||n.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);n.setAttribute("href",t),n.addEventListener("click",r=>{r.preventDefault(),e.disabled||Gn(r.currentTarget.getAttribute("href"))})}function qt(n){return n&&typeof n=="string"?{href:n}:n||{}}function Gn(n){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=n}function Yn(n,e,t){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:a=!1}=e;class o{constructor(x,v){if(!v||typeof v!="function"&&(typeof v!="object"||v._sveltesparouter!==!0))throw Error("Invalid component object");if(!x||typeof x=="string"&&(x.length<1||x.charAt(0)!="/"&&x.charAt(0)!="*")||typeof x=="object"&&!(x instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:q,keys:S}=Fn(x);this.path=x,typeof v=="object"&&v._sveltesparouter===!0?(this.component=v.component,this.conditions=v.conditions||[],this.userData=v.userData,this.props=v.props||{}):(this.component=()=>Promise.resolve(v),this.conditions=[],this.props={}),this._pattern=q,this._keys=S}match(x){if(s){if(typeof s=="string")if(x.startsWith(s))x=x.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=x.match(s);if(O&&O[0])x=x.substr(O[0].length)||"/";else return null}}const v=this._pattern.exec(x);if(v===null)return null;if(this._keys===!1)return v;const q={};let S=0;for(;S<this._keys.length;){try{q[this._keys[S]]=decodeURIComponent(v[S+1]||"")||null}catch{q[this._keys[S]]=null}S++}return q}async checkConditions(x){for(let v=0;v<this.conditions.length;v++)if(!await this.conditions[v](x))return!1;return!0}}const i=[];r instanceof Map?r.forEach((w,x)=>{i.push(new o(x,w))}):Object.keys(r).forEach(w=>{i.push(new o(w,r[w]))});let l=null,c=null,h={};const f=zn();async function g(w,x){await cn(),f(w,x)}let d=null,k=null;a&&(k=w=>{w.state&&(w.state.__svelte_spa_router_scrollY||w.state.__svelte_spa_router_scrollX)?d=w.state:d=null},window.addEventListener("popstate",k),In(()=>{Wn(d)}));let b=null,y=null;const L=ot.subscribe(async w=>{b=w;let x=0;for(;x<i.length;){const v=i[x].match(w.location);if(!v){x++;continue}const q={route:i[x].path,location:w.location,querystring:w.querystring,userData:i[x].userData,params:v&&typeof v=="object"&&Object.keys(v).length?v:null};if(!await i[x].checkConditions(q)){t(0,l=null),y=null,g("conditionsFailed",q);return}g("routeLoading",Object.assign({},q));const S=i[x].component;if(y!=S){S.loading?(t(0,l=S.loading),y=S,t(1,c=S.loadingParams),t(2,h={}),g("routeLoaded",Object.assign({},q,{component:l,name:l.name,params:c}))):(t(0,l=null),y=null);const O=await S();if(w!=b)return;t(0,l=O&&O.default||O),y=S}v&&typeof v=="object"&&Object.keys(v).length?t(1,c=v):t(1,c=null),t(2,h=i[x].props),g("routeLoaded",Object.assign({},q,{component:l,name:l.name,params:c})).then(()=>{Rt.set(c)});return}t(0,l=null),y=null,Rt.set(void 0)});jn(()=>{L(),k&&window.removeEventListener("popstate",k)});function F(w){vt.call(this,n,w)}function E(w){vt.call(this,n,w)}return n.$$set=w=>{"routes"in w&&t(3,r=w.routes),"prefix"in w&&t(4,s=w.prefix),"restoreScrollState"in w&&t(5,a=w.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=a?"manual":"auto")},[l,c,h,r,s,a,F,E]}class Kn extends ne{constructor(e){super(),te(this,e,Yn,Un,J,{routes:3,prefix:4,restoreScrollState:5})}}function Zn(n){let e,t,r,s,a,o,i,l,c,h,f;return{c(){e=m("footer"),t=m("div"),r=m("div"),s=m("div"),a=m("p"),a.textContent=`© ${n[0]} Gabriel Quaresma`,o=_(),i=m("p"),i.textContent="Crafted with care",l=_(),c=m("button"),c.innerHTML=`Back to top
        <svg class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15l7-7 7 7"></path></svg>`,p(a,"class","text-sm text-neutral-500 font-light"),p(s,"class","text-center md:text-left"),p(i,"class","text-xs text-neutral-600 tracking-wide"),p(c,"type","button"),p(c,"class","group flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300"),p(r,"class","flex flex-col md:flex-row items-center justify-between gap-6"),p(t,"class","section-container"),p(e,"class","py-12 md:py-16 border-t border-neutral-900")},m(g,d){T(g,e,d),u(e,t),u(t,r),u(r,s),u(s,a),u(r,o),u(r,i),u(r,l),u(r,c),h||(f=Ce(c,"click",n[1]),h=!0)},p:$,i:$,o:$,d(g){g&&R(e),h=!1,f()}}}function Xn(n){return[new Date().getFullYear(),()=>window.scrollTo({top:0,behavior:"smooth"})]}class Jn extends ne{constructor(e){super(),te(this,e,Xn,Zn,J,{})}}const Oe=Ye(null),Pe=Ye(!1);function gn(){Oe.set(null),Pe.set(!1)}function Vn(n){let e,t,r,s,a,o,i,l,c;return{c(){e=m("header"),t=m("nav"),r=m("div"),s=m("button"),s.textContent="Gabriel Quaresma",a=_(),o=m("div"),i=m("a"),i.textContent="Blog",p(s,"class","text-sm md:text-base font-light tracking-wide text-neutral-300 hover:text-white transition-colors duration-300"),p(i,"href","/blog"),p(i,"class","text-sm font-light tracking-wide text-neutral-500 hover:text-white transition-colors duration-300"),p(o,"class","flex items-center gap-6 md:gap-8"),p(r,"class","flex items-center justify-between"),p(t,"class","section-container py-4"),p(e,"class","fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-neutral-900")},m(h,f){T(h,e,f),u(e,t),u(t,r),u(r,s),u(r,a),u(r,o),u(o,i),l||(c=[Ce(s,"click",n[0]),it(ct.call(null,i))],l=!0)},p:$,i:$,o:$,d(h){h&&R(e),l=!1,fe(c)}}}function er(n,e,t){let r;Ve(n,Pe,a=>t(1,r=a));function s(){r&&gn(),lt("/")}return[s]}class tr extends ne{constructor(e){super(),te(this,e,er,Vn,J,{})}}const nr=""+new URL("profile-e24b5519.png",import.meta.url).href;function rr(n){let e;return{c(){e=m("h1"),e.textContent="Gabriel Quaresma",p(e,"class","text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white")},m(t,r){T(t,e,r)},p:$,i:$,o:$,d(t){t&&R(e)}}}class sr extends ne{constructor(e){super(),te(this,e,null,rr,J,{})}}function ir(n){let e,t,r,s,a,o,i,l,c,h,f,g,d,k,b,y;return{c(){e=m("div"),t=m("p"),r=j(n[0]),s=j(`+ years of experience. Skilled in building web\r
    applications/solutions with `),a=m("span"),a.textContent="React",o=j(`,\r
    `),i=m("span"),i.textContent="TypeScript",l=j(`,\r
    `),c=m("span"),c.textContent="Node.js",h=j(`, and\r
    `),f=m("span"),f.textContent="Ruby on Rails",g=j("."),d=_(),k=m("p"),k.textContent=`Passionate about crafting seamless user experiences. Thrive in collaborative\r
    teams. Always learning, keeping up with modern tech and best practices to\r
    write cleaner, better code. Outside work: Practicing Brazilian Jiu-Jitsu and playing Football\r
    Manager.`,b=_(),y=m("a"),y.innerHTML=`<span class="w-8 h-px bg-neutral-600 group-hover:w-12 group-hover:bg-white transition-all duration-300"></span>
    Get in touch`,p(a,"class","text-neutral-200"),p(i,"class","text-neutral-200"),p(c,"class","text-neutral-200"),p(f,"class","text-neutral-200"),p(t,"class","text-body"),p(k,"class","text-neutral-500 text-sm md:text-base font-light leading-relaxed"),p(y,"href","mailto:j.quaresmasantos98@gmail.com"),p(y,"class","inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"),p(e,"class","max-w-2xl space-y-6")},m(L,F){T(L,e,F),u(e,t),u(t,r),u(t,s),u(t,a),u(t,o),u(t,i),u(t,l),u(t,c),u(t,h),u(t,f),u(t,g),u(e,d),u(e,k),u(e,b),u(e,y)},p:$,i:$,o:$,d(L){L&&R(e)}}}function ar(n){return[new Date().getFullYear()-2021]}class or extends ne{constructor(e){super(),te(this,e,ar,ir,J,{})}}const lr=""+new URL("github-icon-7f24a993.svg",import.meta.url).href,cr=""+new URL("instagram-icon-906a5cf8.svg",import.meta.url).href,ur=""+new URL("linkedin-icon-9f017955.svg",import.meta.url).href;function Mt(n,e,t){const r=n.slice();return r[1]=e[t].icon,r[2]=e[t].alt,r[3]=e[t].link,r[4]=e[t].label,r}function Pt(n){let e,t,r,s,a;return{c(){e=m("li"),t=m("a"),r=m("img"),a=_(),Ae(r.src,s=n[1])||p(r,"src",s),p(r,"alt",n[2]),p(r,"class","w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"),p(t,"href",n[3]),p(t,"target","_blank"),p(t,"rel","noopener noreferrer"),p(t,"aria-label",n[4]),p(t,"class","group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300")},m(o,i){T(o,e,i),u(e,t),u(t,r),u(e,a)},p:$,d(o){o&&R(e)}}}function hr(n){let e,t,r=X(n[0]),s=[];for(let a=0;a<r.length;a+=1)s[a]=Pt(Mt(n,r,a));return{c(){e=m("nav"),t=m("ul");for(let a=0;a<s.length;a+=1)s[a].c();p(t,"class","flex items-center justify-center gap-8"),p(e,"aria-label","Social networks")},m(a,o){T(a,e,o),u(e,t);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null)},p(a,[o]){if(o&1){r=X(a[0]);let i;for(i=0;i<r.length;i+=1){const l=Mt(a,r,i);s[i]?s[i].p(l,o):(s[i]=Pt(l),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=r.length}},i:$,o:$,d(a){a&&R(e),he(s,a)}}}function pr(n){return[[{icon:lr,alt:"GitHub",link:"https://github.com/joaoGabriel55",label:"GitHub"},{icon:ur,alt:"LinkedIn",link:"https://linkedin.com/in/gabriel-quaresma-dev",label:"LinkedIn"},{icon:cr,alt:"Instagram",link:"https://instagram.com/drawquaresma",label:"Instagram"}]]}class dr extends ne{constructor(e){super(),te(this,e,pr,hr,J,{})}}function fr(n){let e,t,r,s,a,o,i,l,c,h,f,g,d,k,b,y,L,F,E,w;return f=new sr({}),b=new or({}),L=new dr({}),{c(){e=m("section"),t=m("div"),r=m("div"),s=m("div"),a=m("div"),o=_(),i=m("img"),c=_(),h=m("div"),Z(f.$$.fragment),g=_(),d=m("p"),d.textContent="Software Engineer @Codeminer42 · Brazil",k=_(),Z(b.$$.fragment),y=_(),Z(L.$$.fragment),F=_(),E=m("div"),E.innerHTML='<div class="w-px h-16 bg-gradient-to-b from-neutral-600 to-transparent animate-pulse"></div>',p(a,"class","absolute -inset-1 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-full blur-sm opacity-50"),Ae(i.src,l=nr)||p(i,"src",l),p(i,"alt","Gabriel Quaresma"),p(i,"class","relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out ring-1 ring-neutral-800"),p(s,"class","relative"),p(d,"class","text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase"),p(h,"class","space-y-4"),p(E,"class","absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"),p(r,"class","flex flex-col items-center text-center gap-12 md:gap-16"),p(t,"class","section-container"),p(e,"class","min-h-screen flex items-center justify-center py-20 md:py-32 pt-24 md:pt-32")},m(x,v){T(x,e,v),u(e,t),u(t,r),u(r,s),u(s,a),u(s,o),u(s,i),u(r,c),u(r,h),G(f,h,null),u(h,g),u(h,d),u(r,k),G(b,r,null),u(r,y),G(L,r,null),u(r,F),u(r,E),w=!0},p:$,i(x){w||(C(f.$$.fragment,x),C(b.$$.fragment,x),C(L.$$.fragment,x),w=!0)},o(x){B(f.$$.fragment,x),B(b.$$.fragment,x),B(L.$$.fragment,x),w=!1},d(x){x&&R(e),Y(f),Y(b),Y(L)}}}class gr extends ne{constructor(e){super(),te(this,e,null,fr,J,{})}}function At(n,e,t){const r=n.slice();return r[5]=e[t].name,r[6]=e[t].icon,r[7]=e[t].stars,r[8]=e[t].url,r}function mr(n,e,t){const r=n.slice();return r[2]=e[t],r}function br(n){let e,t=X(n[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Ct(At(n,t,s));return{c(){e=m("div");for(let s=0;s<r.length;s+=1)r[s].c();p(e,"class","grid md:grid-cols-3 gap-6")},m(s,a){T(s,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(s,a){if(a&1){t=X(s[0]);let o;for(o=0;o<t.length;o+=1){const i=At(s,t,o);r[o]?r[o].p(i,a):(r[o]=Ct(i),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(s){s&&R(e),he(r,s)}}}function kr(n){let e,t=X([1,2,3]),r=[];for(let s=0;s<3;s+=1)r[s]=wr(mr(n,t,s));return{c(){e=m("div");for(let s=0;s<3;s+=1)r[s].c();p(e,"class","grid md:grid-cols-3 gap-6")},m(s,a){T(s,e,a);for(let o=0;o<3;o+=1)r[o]&&r[o].m(e,null)},p:$,d(s){s&&R(e),he(r,s)}}}function Ct(n){let e,t,r,s,a,o,i,l,c=n[5]+"",h,f,g,d,k,b,y,L=Et(n[7])+"",F,E,w,x,v,q,S,O,D;return{c(){e=m("article"),t=m("div"),r=m("div"),s=m("img"),i=_(),l=m("h3"),h=j(c),f=_(),g=m("div"),d=Le("svg"),k=Le("path"),b=_(),y=m("span"),F=j(L),E=_(),w=m("a"),x=m("span"),v=j(`\r
              View my contributions\r
              `),q=Le("svg"),S=Le("path"),D=_(),Ae(s.src,a=n[6])||p(s,"src",a),p(s,"alt",o=n[5]),p(s,"class","w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"),p(l,"class","font-medium text-neutral-200 group-hover:text-white transition-colors duration-300"),p(r,"class","flex items-center gap-3"),p(k,"d","M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"),p(d,"class","w-4 h-4"),p(d,"fill","currentColor"),p(d,"viewBox","0 0 20 20"),p(y,"class","text-sm"),p(g,"class","flex items-center gap-1.5 text-neutral-500"),p(t,"class","flex items-center justify-between mb-5"),p(x,"class","w-6 h-px bg-neutral-700 group-hover/link:w-10 group-hover/link:bg-white transition-all duration-300"),p(S,"stroke-linecap","round"),p(S,"stroke-linejoin","round"),p(S,"stroke-width","1.5"),p(S,"d","M17 8l4 4m0 0l-4 4m4-4H3"),p(q,"class","w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"),p(q,"fill","none"),p(q,"stroke","currentColor"),p(q,"viewBox","0 0 24 24"),p(w,"href",O=It(n[8])),p(w,"target","_blank"),p(w,"rel","noopener noreferrer"),p(w,"class","inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300 group/link"),p(e,"class","group p-6 rounded-lg border border-neutral-800 bg-surface-light hover:border-neutral-700 hover:bg-surface-lighter transition-all duration-300")},m(M,W){T(M,e,W),u(e,t),u(t,r),u(r,s),u(r,i),u(r,l),u(l,h),u(t,f),u(t,g),u(g,d),u(d,k),u(g,b),u(g,y),u(y,F),u(e,E),u(e,w),u(w,x),u(w,v),u(w,q),u(q,S),u(e,D)},p(M,W){W&1&&!Ae(s.src,a=M[6])&&p(s,"src",a),W&1&&o!==(o=M[5])&&p(s,"alt",o),W&1&&c!==(c=M[5]+"")&&se(h,c),W&1&&L!==(L=Et(M[7])+"")&&se(F,L),W&1&&O!==(O=It(M[8]))&&p(w,"href",O)},d(M){M&&R(e)}}}function wr(n){let e;return{c(){e=m("div"),e.innerHTML='<div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 rounded-full bg-neutral-800"></div> <div class="h-5 w-24 bg-neutral-800 rounded"></div></div> <div class="h-4 w-full bg-neutral-800 rounded mb-2"></div> <div class="h-4 w-2/3 bg-neutral-800 rounded"></div> ',p(e,"class","p-6 rounded-lg border border-neutral-800 bg-surface-light animate-pulse")},m(t,r){T(t,e,r)},p:$,d(t){t&&R(e)}}}function xr(n){let e,t,r,s;function a(l,c){return l[1]?kr:br}let o=a(n),i=o(n);return{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block">Community</span> <h2 class="heading-primary">Open Source Contributions</h2> <p class="text-body mt-4 max-w-2xl">Contributing to projects that make a difference in the developer
        ecosystem.</p>`,s=_(),i.c(),p(r,"class","mb-16 md:mb-20"),p(t,"class","section-container"),p(e,"class","py-24 md:py-32 border-t border-neutral-900")},m(l,c){T(l,e,c),u(e,t),u(t,r),u(t,s),i.m(t,null)},p(l,[c]){o===(o=a(l))&&i?i.p(l,c):(i.d(1),i=o(l),i&&(i.c(),i.m(t,null)))},i:$,o:$,d(l){l&&R(e),i.d()}}}async function yr(){return(await Promise.all([fetch("https://api.github.com/repos/axios/axios").then(e=>e.json()),fetch("https://api.github.com/repos/grommet/grommet").then(e=>e.json()),fetch("https://api.github.com/repos/forem/forem").then(e=>e.json())])).map(e=>({icon:e.owner.avatar_url,name:e.name,stars:e.stargazers_count,url:e.html_url,description:e.description||""}))}function Et(n){return n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(1)}K`:n.toString()}function It(n){return`${n}/pulls?q=is%3Apr+author%3AjoaoGabriel55+is%3Aclosed`}function _r(n,e,t){let r=[],s=!0;return at(()=>{yr().then(a=>{t(0,r=a),t(1,s=!1)})}),[r,s]}class vr extends ne{constructor(e){super(),te(this,e,_r,xr,J,{})}}const $r=""+new URL("the_invoice-20fe0487.jpeg",import.meta.url).href,Lr=""+new URL("poker_estima-27b4a7bc.jpeg",import.meta.url).href,Sr=""+new URL("livezentube-bb2428c5.jpeg",import.meta.url).href;function jt(n,e,t){const r=n.slice();return r[1]=e[t].title,r[2]=e[t].description,r[3]=e[t].stack,r[4]=e[t].image,r[5]=e[t].link,r[7]=t,r}function zt(n,e,t){const r=n.slice();return r[8]=e[t],r}function Bt(n){let e;return{c(){e=m("span"),e.textContent=`${n[8]} `,p(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-500 border border-neutral-800 rounded-full")},m(t,r){T(t,e,r)},p:$,d(t){t&&R(e)}}}function Qt(n){let e,t,r,s,a,o,i,l,c,h,f,g,d,k,b,y,L,F,E,w,x,v,q,S,O=X(n[3]),D=[];for(let M=0;M<O.length;M+=1)D[M]=Bt(zt(n,O,M));return{c(){e=m("article"),t=m("div"),r=m("div"),s=m("a"),a=m("div"),o=m("img"),l=_(),c=m("div"),h=_(),f=m("div"),g=m("div"),d=m("h3"),d.textContent=`${n[1]}`,k=_(),b=m("p"),b.textContent=`${n[2]}`,y=_(),L=m("div");for(let M=0;M<D.length;M+=1)D[M].c();F=_(),E=m("a"),w=m("span"),x=j(`
                View Project
                `),v=Le("svg"),q=Le("path"),S=_(),Ae(o.src,i=n[4])||p(o,"src",i),p(o,"alt",n[1]),p(o,"class","w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"),p(c,"class","absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"),p(a,"class","relative aspect-video overflow-hidden bg-neutral-900 rounded-lg"),p(s,"href",n[5]),p(s,"target","_blank"),p(s,"rel","noopener noreferrer"),p(s,"class","block overflow-hidden rounded-lg"),p(r,"class","order-1 "+(n[7]%2===1?"md:order-2":"")),p(d,"class","heading-secondary group-hover:text-white transition-colors duration-300"),p(b,"class","text-body"),p(g,"class","space-y-4"),p(L,"class","flex flex-wrap gap-2"),p(w,"class","w-8 h-px bg-neutral-700 group-hover/link:w-12 group-hover/link:bg-white transition-all duration-300"),p(q,"stroke-linecap","round"),p(q,"stroke-linejoin","round"),p(q,"stroke-width","1.5"),p(q,"d","M17 8l4 4m0 0l-4 4m4-4H3"),p(v,"class","w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"),p(v,"fill","none"),p(v,"stroke","currentColor"),p(v,"viewBox","0 0 24 24"),p(E,"href",n[5]),p(E,"target","_blank"),p(E,"rel","noopener noreferrer"),p(E,"class","inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group/link"),p(f,"class","order-2 "+(n[7]%2===1?"md:order-1":"")+" space-y-6"),p(t,"class","grid md:grid-cols-2 gap-8 md:gap-12 items-center"),p(e,"class","group")},m(M,W){T(M,e,W),u(e,t),u(t,r),u(r,s),u(s,a),u(a,o),u(a,l),u(a,c),u(t,h),u(t,f),u(f,g),u(g,d),u(g,k),u(g,b),u(f,y),u(f,L);for(let P=0;P<D.length;P+=1)D[P]&&D[P].m(L,null);u(f,F),u(f,E),u(E,w),u(E,x),u(E,v),u(v,q),u(e,S)},p(M,W){if(W&1){O=X(M[3]);let P;for(P=0;P<O.length;P+=1){const ie=zt(M,O,P);D[P]?D[P].p(ie,W):(D[P]=Bt(ie),D[P].c(),D[P].m(L,null))}for(;P<D.length;P+=1)D[P].d(1);D.length=O.length}},d(M){M&&R(e),he(D,M)}}}function Rr(n){let e,t,r,s,a,o=X(n[0]),i=[];for(let l=0;l<o.length;l+=1)i[l]=Qt(jt(n,o,l));return{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML='<span class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block">Selected Work</span> <h2 class="heading-primary">Projects</h2>',s=_(),a=m("div");for(let l=0;l<i.length;l+=1)i[l].c();p(r,"class","mb-16 md:mb-20"),p(a,"class","space-y-20"),p(t,"class","section-container"),p(e,"class","py-24 md:py-32 border-t border-neutral-900")},m(l,c){T(l,e,c),u(e,t),u(t,r),u(t,s),u(t,a);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(a,null)},p(l,[c]){if(c&1){o=X(l[0]);let h;for(h=0;h<o.length;h+=1){const f=jt(l,o,h);i[h]?i[h].p(f,c):(i[h]=Qt(f),i[h].c(),i[h].m(a,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=o.length}},i:$,o:$,d(l){l&&R(e),he(i,l)}}}function Tr(n){return[[{title:"LiveZenTube",description:"A lightweight, client-side web app for monitoring and watch YouTube live streams across multiple channels. Everything runs in the browser using the YouTube Data API v3.",stack:["HTML","CSS","JavaScript"],image:Sr,link:"https://livezentube.netlify.app/"},{title:"Poker Estima",description:"An app that you can estimate with points (emojis) your tasks with your teammates",stack:["HTML","CSS","JavaScript","Node.js","WebSockets","Express","SQLite"],image:Lr,link:"https://poker-estima-app.fly.dev/"},{title:"The Invoice",description:"Generate professional invoices in minutes. Enter your details, add line items, and export a polished PDF.",stack:["HTML","CSS","JavaScript"],image:$r,link:"https://the-invoice.netlify.app/"}]]}class qr extends ne{constructor(e){super(),te(this,e,Tr,Rr,J,{})}}const Mr=`---\r
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
`,Pr=`---\r
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
`;function ut(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xe=ut();function mn(n){xe=n}var be={exec:()=>null};function A(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(s,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(ee.caret,"$1"),t=t.replace(s,o),r},getRegex:()=>new RegExp(t,e)};return r}var Ar=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ee={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Cr=/^(?:[ \t]*(?:\n|$))+/,Er=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ir=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ie=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ht=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,bn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kn=A(bn).replace(/bull/g,ht).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),zr=A(bn).replace(/bull/g,ht).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Br=/^[^\n]+/,dt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Qr=A(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",dt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Or=A(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ht).getRegex(),Ke="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ft=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Dr=A("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ft).replace("tag",Ke).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wn=A(pt).replace("hr",Ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ke).getRegex(),Fr=A(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",wn).getRegex(),gt={blockquote:Fr,code:Er,def:Qr,fences:Ir,heading:jr,hr:Ie,html:Dr,lheading:kn,list:Or,newline:Cr,paragraph:wn,table:be,text:Br},Ot=A("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ke).getRegex(),Nr={...gt,lheading:zr,table:Ot,paragraph:A(pt).replace("hr",Ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ot).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ke).getRegex()},Hr={...gt,html:A(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ft).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:be,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:A(pt).replace("hr",Ie).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ur=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Wr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xn=/^( {2,}|\\)\n(?!\s*$)/,Gr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ze=/[\p{P}\p{S}]/u,mt=/[\s\p{P}\p{S}]/u,yn=/[^\s\p{P}\p{S}]/u,Yr=A(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,mt).getRegex(),_n=/(?!~)[\p{P}\p{S}]/u,Kr=/(?!~)[\s\p{P}\p{S}]/u,Zr=/(?:[^\s\p{P}\p{S}]|~)/u,vn=/(?![*_])[\p{P}\p{S}]/u,Xr=/(?![*_])[\s\p{P}\p{S}]/u,Jr=/(?:[^\s\p{P}\p{S}]|[*_])/u,Vr=A(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ar?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),$n=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,es=A($n,"u").replace(/punct/g,Ze).getRegex(),ts=A($n,"u").replace(/punct/g,_n).getRegex(),Ln="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ns=A(Ln,"gu").replace(/notPunctSpace/g,yn).replace(/punctSpace/g,mt).replace(/punct/g,Ze).getRegex(),rs=A(Ln,"gu").replace(/notPunctSpace/g,Zr).replace(/punctSpace/g,Kr).replace(/punct/g,_n).getRegex(),ss=A("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,yn).replace(/punctSpace/g,mt).replace(/punct/g,Ze).getRegex(),is=A(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,vn).getRegex(),as="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",os=A(as,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,Xr).replace(/punct/g,vn).getRegex(),ls=A(/\\(punct)/,"gu").replace(/punct/g,Ze).getRegex(),cs=A(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),us=A(ft).replace("(?:-->|$)","-->").getRegex(),hs=A("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",us).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fe=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ps=A(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Fe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sn=A(/^!?\[(label)\]\[(ref)\]/).replace("label",Fe).replace("ref",dt).getRegex(),Rn=A(/^!?\[(ref)\](?:\[\])?/).replace("ref",dt).getRegex(),ds=A("reflink|nolink(?!\\()","g").replace("reflink",Sn).replace("nolink",Rn).getRegex(),Dt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,bt={_backpedal:be,anyPunctuation:ls,autolink:cs,blockSkip:Vr,br:xn,code:Wr,del:be,delLDelim:be,delRDelim:be,emStrongLDelim:es,emStrongRDelimAst:ns,emStrongRDelimUnd:ss,escape:Ur,link:ps,nolink:Rn,punctuation:Yr,reflink:Sn,reflinkSearch:ds,tag:hs,text:Gr,url:be},fs={...bt,link:A(/^!?\[(label)\]\((.*?)\)/).replace("label",Fe).getRegex(),reflink:A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fe).getRegex()},nt={...bt,emStrongRDelimAst:rs,emStrongLDelim:ts,delLDelim:is,delRDelim:os,url:A(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Dt).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:A(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Dt).getRegex()},gs={...nt,br:A(xn).replace("{2,}","*").getRegex(),text:A(nt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ze={normal:gt,gfm:Nr,pedantic:Hr},Re={normal:bt,gfm:nt,breaks:gs,pedantic:fs},ms={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ft=n=>ms[n];function ue(n,e){if(e){if(ee.escapeTest.test(n))return n.replace(ee.escapeReplace,Ft)}else if(ee.escapeTestNoEncode.test(n))return n.replace(ee.escapeReplaceNoEncode,Ft);return n}function Nt(n){try{n=encodeURI(n).replace(ee.percentDecode,"%")}catch{return null}return n}function Ht(n,e){var a;let t=n.replace(ee.findPipe,(o,i,l)=>{let c=!1,h=i;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),r=t.split(ee.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((a=r.at(-1))!=null&&a.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(ee.slashPipe,"|");return r}function Te(n,e,t){let r=n.length;if(r===0)return"";let s=0;for(;s<r;){let a=n.charAt(r-s-1);if(a===e&&!t)s++;else if(a!==e&&t)s++;else break}return n.slice(0,r-s)}function bs(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function ks(n,e=0){let t=e,r="";for(let s of n)if(s==="	"){let a=4-t%4;r+=" ".repeat(a),t+=a}else r+=s,t++;return r}function Ut(n,e,t,r,s){let a=e.href,o=e.title||null,i=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:a,title:o,text:i,tokens:r.inlineTokens(i)};return r.state.inLink=!1,l}function ws(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(a=>{let o=a.match(t.other.beginningSpace);if(o===null)return a;let[i]=o;return i.length>=s.length?a.slice(s.length):a}).join(`
`)}var Ne=class{constructor(n){I(this,"options");I(this,"rules");I(this,"lexer");this.options=n||xe}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Te(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=ws(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=Te(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Te(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=Te(e[0],`
`).split(`
`),r="",s="",a=[];for(;t.length>0;){let o=!1,i=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))i.push(t[l]),o=!0;else if(!o)i.push(t[l]);else break;t=t.slice(l);let c=i.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,s=s?`${s}
${h}`:h;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,a,!0),this.lexer.state.top=f,t.length===0)break;let g=a.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){let d=g,k=d.raw+`
`+t.join(`
`),b=this.blockquote(k);a[a.length-1]=b,r=r.substring(0,r.length-d.raw.length)+b.raw,s=s.substring(0,s.length-d.text.length)+b.text;break}else if((g==null?void 0:g.type)==="list"){let d=g,k=d.raw+`
`+t.join(`
`),b=this.list(k);a[a.length-1]=b,r=r.substring(0,r.length-g.raw.length)+b.raw,s=s.substring(0,s.length-d.raw.length)+b.raw,t=k.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:s}}}list(n){var t,r;let e=this.rules.block.list.exec(n);if(e){let s=e[1].trim(),a=s.length>1,o={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");let i=this.rules.other.listItemRegex(s),l=!1;for(;n;){let h=!1,f="",g="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let d=ks(e[2].split(`
`,1)[0],e[1].length),k=n.split(`
`,1)[0],b=!d.trim(),y=0;if(this.options.pedantic?(y=2,g=d.trimStart()):b?y=e[1].length+1:(y=d.search(this.rules.other.nonSpaceChar),y=y>4?1:y,g=d.slice(y),y+=e[1].length),b&&this.rules.other.blankLine.test(k)&&(f+=k+`
`,n=n.substring(k.length+1),h=!0),!h){let L=this.rules.other.nextBulletRegex(y),F=this.rules.other.hrRegex(y),E=this.rules.other.fencesBeginRegex(y),w=this.rules.other.headingBeginRegex(y),x=this.rules.other.htmlBeginRegex(y),v=this.rules.other.blockquoteBeginRegex(y);for(;n;){let q=n.split(`
`,1)[0],S;if(k=q,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),S=k):S=k.replace(this.rules.other.tabCharGlobal,"    "),E.test(k)||w.test(k)||x.test(k)||v.test(k)||L.test(k)||F.test(k))break;if(S.search(this.rules.other.nonSpaceChar)>=y||!k.trim())g+=`
`+S.slice(y);else{if(b||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(d)||w.test(d)||F.test(d))break;g+=`
`+k}b=!k.trim(),f+=q+`
`,n=n.substring(q.length+1),d=S.slice(y)}}o.loose||(l?o.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(l=!0)),o.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),o.raw+=f}let c=o.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let h of o.items){if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),h.task){if(h.text=h.text.replace(this.rules.other.listReplaceTask,""),((t=h.tokens[0])==null?void 0:t.type)==="text"||((r=h.tokens[0])==null?void 0:r.type)==="paragraph"){h.tokens[0].raw=h.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),h.tokens[0].text=h.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(h.raw);if(f){let g={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};h.checked=g.checked,o.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=g.raw+h.tokens[0].raw,h.tokens[0].text=g.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(g)):h.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):h.tokens.unshift(g)}}if(!o.loose){let f=h.tokens.filter(d=>d.type==="space"),g=f.length>0&&f.some(d=>this.rules.other.anyLine.test(d.raw));o.loose=g}}if(o.loose)for(let h of o.items){h.loose=!0;for(let f of h.tokens)f.type==="text"&&(f.type="paragraph")}return o}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:s}}}table(n){var o;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ht(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let i of r)this.rules.other.tableAlignRight.test(i)?a.align.push("right"):this.rules.other.tableAlignCenter.test(i)?a.align.push("center"):this.rules.other.tableAlignLeft.test(i)?a.align.push("left"):a.align.push(null);for(let i=0;i<t.length;i++)a.header.push({text:t[i],tokens:this.lexer.inline(t[i]),header:!0,align:a.align[i]});for(let i of s)a.rows.push(Ht(i,a.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[c]})));return a}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let a=Te(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{let a=bs(e[2],"()");if(a===-2)return;if(a>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],s=a[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Ut(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return Ut(t,s,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!t||this.rules.inline.punctuation.exec(t))){let s=[...r[0]].length-1,a,o,i=s,l=0,c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+s);(r=c.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){i+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(i-=o,i>0)continue;o=Math.min(o,o+i+l);let h=[...r[0]][0].length,f=n.slice(0,s+r.index+h+o);if(Math.min(s,o)%2){let d=f.slice(1,-1);return{type:"em",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}let g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let s=[...r[0]].length-1,a,o,i=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a||(o=[...a].length,o!==s))continue;if(r[3]||r[4]){i+=o;continue}if(i-=o,i>0)continue;o=Math.min(o,o+i);let c=[...r[0]][0].length,h=n.slice(0,s+r.index+c+o),f=h.slice(s,-s);return{type:"del",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let a;do a=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(a!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},oe=class rt{constructor(e){I(this,"tokens");I(this,"options");I(this,"state");I(this,"inlineQueue");I(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xe,this.options.tokenizer=this.options.tokenizer||new Ne,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ee,block:ze.normal,inline:Re.normal};this.options.pedantic?(t.block=ze.pedantic,t.inline=Re.pedantic):this.options.gfm&&(t.block=ze.gfm,this.options.breaks?t.inline=Re.breaks:t.inline=Re.gfm),this.tokenizer.rules=t}static get rules(){return{block:ze,inline:Re}}static lex(e,t){return new rt(t).lex(e)}static lexInline(e,t){return new rt(t).inlineTokens(e)}lex(e){e=e.replace(ee.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){var s,a,o;for(this.options.pedantic&&(e=e.replace(ee.tabCharGlobal,"    ").replace(ee.spaceLine,""));e;){let i;if((a=(s=this.options.extensions)==null?void 0:s.block)!=null&&a.some(c=>(i=c.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let c=t.at(-1);i.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+i.raw,c.text+=`
`+i.text,this.inlineQueue.at(-1).src=c.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+i.raw,c.text+=`
`+i.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let l=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0,h=e.slice(1),f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},h),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(l))){let c=t.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+i.raw,c.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(i),r=l.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+i.raw,c.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(i);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var l,c,h,f,g;let r=e,s=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)a=s[2]?s[2].length:0,r=r.slice(0,s.index+a)+"["+"a".repeat(s[0].length-a-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((c=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let o=!1,i="";for(;e;){o||(i=""),o=!1;let d;if((f=(h=this.options.extensions)==null?void 0:h.inline)!=null&&f.some(b=>(d=b.call({lexer:this},e,t))?(e=e.substring(d.raw.length),t.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let b=t.at(-1);d.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):t.push(d);continue}if(d=this.tokenizer.emStrong(e,r,i)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.del(e,r,i)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),t.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),t.push(d);continue}let k=e;if((g=this.options.extensions)!=null&&g.startInline){let b=1/0,y=e.slice(1),L;this.options.extensions.startInline.forEach(F=>{L=F.call({lexer:this},y),typeof L=="number"&&L>=0&&(b=Math.min(b,L))}),b<1/0&&b>=0&&(k=e.substring(0,b+1))}if(d=this.tokenizer.inlineText(k)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(i=d.raw.slice(-1)),o=!0;let b=t.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):t.push(d);continue}if(e){let b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return t}},He=class{constructor(n){I(this,"options");I(this,"parser");this.options=n||xe}space(n){return""}code({text:n,lang:e,escaped:t}){var a;let r=(a=(e||"").match(ee.notSpaceStart))==null?void 0:a[0],s=n.replace(ee.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ue(r)+'">'+(t?s:ue(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:ue(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let o=0;o<n.items.length;o++){let i=n.items[o];r+=this.listitem(i)}let s=e?"ol":"ul",a=e&&t!==1?' start="'+t+'"':"";return"<"+s+a+`>
`+r+"</"+s+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let s=0;s<n.header.length;s++)t+=this.tablecell(n.header[s]);e+=this.tablerow({text:t});let r="";for(let s=0;s<n.rows.length;s++){let a=n.rows[s];t="";for(let o=0;o<a.length;o++)t+=this.tablecell(a[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ue(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),s=Nt(n);if(s===null)return r;n=s;let a='<a href="'+n+'"';return e&&(a+=' title="'+ue(e)+'"'),a+=">"+r+"</a>",a}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let s=Nt(n);if(s===null)return ue(t);n=s;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${ue(e)}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ue(n.text)}},kt=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},le=class st{constructor(e){I(this,"options");I(this,"renderer");I(this,"textRenderer");this.options=e||xe,this.options.renderer=this.options.renderer||new He,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kt}static parse(e,t){return new st(t).parse(e)}static parseInline(e,t){return new st(t).parseInline(e)}parse(e){var r,s;let t="";for(let a=0;a<e.length;a++){let o=e[a];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[o.type]){let l=o,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){t+=c||"";continue}}let i=o;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return t}parseInline(e,t=this.renderer){var s,a;let r="";for(let o=0;o<e.length;o++){let i=e[o];if((a=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&a[i.type]){let c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}let l=i;switch(l.type){case"escape":{r+=t.text(l);break}case"html":{r+=t.html(l);break}case"link":{r+=t.link(l);break}case"image":{r+=t.image(l);break}case"checkbox":{r+=t.checkbox(l);break}case"strong":{r+=t.strong(l);break}case"em":{r+=t.em(l);break}case"codespan":{r+=t.codespan(l);break}case"br":{r+=t.br(l);break}case"del":{r+=t.del(l);break}case"text":{r+=t.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Be,qe=(Be=class{constructor(n){I(this,"options");I(this,"block");this.options=n||xe}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?oe.lex:oe.lexInline}provideParser(){return this.block?le.parse:le.parseInline}},I(Be,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),I(Be,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Be),xs=class{constructor(...n){I(this,"defaults",ut());I(this,"options",this.setOptions);I(this,"parse",this.parseMarkdown(!0));I(this,"parseInline",this.parseMarkdown(!1));I(this,"Parser",le);I(this,"Renderer",He);I(this,"TextRenderer",kt);I(this,"Lexer",oe);I(this,"Tokenizer",Ne);I(this,"Hooks",qe);this.use(...n)}walkTokens(n,e){var r,s;let t=[];for(let a of n)switch(t=t.concat(e.call(this,a)),a.type){case"table":{let o=a;for(let i of o.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let l of i)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{let o=a;t=t.concat(this.walkTokens(o.items,e));break}default:{let o=a;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let l=o[i].flat(1/0);t=t.concat(this.walkTokens(l,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let a=e.renderers[s.name];a?e.renderers[s.name]=function(...o){let i=s.renderer.apply(this,o);return i===!1&&(i=a.apply(this,o)),i}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[s.level];a?a.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),t.renderer){let s=this.defaults.renderer||new He(this.defaults);for(let a in t.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,i=t.renderer[o],l=s[o];s[o]=(...c)=>{let h=i.apply(s,c);return h===!1&&(h=l.apply(s,c)),h||""}}r.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new Ne(this.defaults);for(let a in t.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,i=t.tokenizer[o],l=s[o];s[o]=(...c)=>{let h=i.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}r.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new qe;for(let a in t.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,i=t.hooks[o],l=s[o];qe.passThroughHooks.has(a)?s[o]=c=>{if(this.defaults.async&&qe.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await i.call(s,c);return l.call(s,f)})();let h=i.call(s,c);return l.call(s,h)}:s[o]=(...c)=>{if(this.defaults.async)return(async()=>{let f=await i.apply(s,c);return f===!1&&(f=await l.apply(s,c)),f})();let h=i.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}r.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,a=t.walkTokens;r.walkTokens=function(o){let i=[];return i.push(a.call(this,o)),s&&(i=i.concat(s.call(this,o))),i}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return oe.lex(n,e??this.defaults)}parser(n,e){return le.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let r={...t},s={...this.defaults,...r},a=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,i=await(s.hooks?await s.hooks.provideLexer():n?oe.lex:oe.lexInline)(o,s),l=s.hooks?await s.hooks.processAllTokens(i):i;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let c=await(s.hooks?await s.hooks.provideParser():n?le.parse:le.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(c):c})().catch(a);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?oe.lex:oe.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let i=(s.hooks?s.hooks.provideParser():n?le.parse:le.parseInline)(o,s);return s.hooks&&(i=s.hooks.postprocess(i)),i}catch(o){return a(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+ue(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},we=new xs;function z(n,e){return we.parse(n,e)}z.options=z.setOptions=function(n){return we.setOptions(n),z.defaults=we.defaults,mn(z.defaults),z};z.getDefaults=ut;z.defaults=xe;z.use=function(...n){return we.use(...n),z.defaults=we.defaults,mn(z.defaults),z};z.walkTokens=function(n,e){return we.walkTokens(n,e)};z.parseInline=we.parseInline;z.Parser=le;z.parser=le.parse;z.Renderer=He;z.TextRenderer=kt;z.Lexer=oe;z.lexer=oe.lex;z.Tokenizer=Ne;z.Hooks=qe;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;le.parse;oe.lex;const ys=Object.assign({"/src/content/blog/powering-your-database-queries-with-a-llms-and-mcps.md":Mr,"/src/content/blog/random-forest-vs-llm-house-prices.md":Pr});function _s(n){const e=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,t=n.match(e);if(!t)return{data:{},content:n};const r=t[1],s=t[2],a={},o=r.split(`
`);for(const i of o){const l=i.indexOf(":");if(l===-1)continue;const c=i.slice(0,l).trim();let h=i.slice(l+1).trim();if((h.startsWith('"')&&h.endsWith('"')||h.startsWith("'")&&h.endsWith("'"))&&(h=h.slice(1,-1)),h.startsWith("[")&&h.endsWith("]")){const f=h.slice(1,-1);a[c]=f.split(",").map(g=>g.trim()).map(g=>g.startsWith('"')&&g.endsWith('"')||g.startsWith("'")&&g.endsWith("'")?g.slice(1,-1):g).filter(g=>g.length>0)}else a[c]=h}return{data:a,content:s}}function vs(n,e){const t=n.replace("/src/content/blog/","").replace(".md",""),{data:r,content:s}=_s(e),a=z(s);return{slug:t,title:r.title||"Untitled",date:r.date||new Date().toISOString().split("T")[0],updateDate:r.updateDate,description:r.description||"",tags:r.tags||[],content:s,htmlContent:a}}function wt(){return Object.entries(ys).map(([e,t])=>vs(e,t)).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function $s(n){return wt().find(t=>t.slug===n)}function de(n){const e=new Date(n);return new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"long",day:"numeric"}).format(e)}function Tn(n){const t=n.trim().split(/\s+/).length;return Math.ceil(t/200)}function Wt(n,e,t){const r=n.slice();return r[3]=e[t],r}function Gt(n){let e,t,r=de(n[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(r),p(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(a,o){T(a,e,o),u(e,t),u(e,s)},p(a,o){o&1&&r!==(r=de(a[0].updateDate)+"")&&se(s,r)},d(a){a&&R(e)}}}function Yt(n){let e,t,r=n[3]+"",s,a;return{c(){e=m("span"),t=j("#"),s=j(r),a=_(),p(e,"class","px-2 py-1 text-xs tracking-wide text-neutral-500 bg-neutral-900 rounded")},m(o,i){T(o,e,i),u(e,t),u(e,s),u(e,a)},p(o,i){i&1&&r!==(r=o[3]+"")&&se(s,r)},d(o){o&&R(e)}}}function Ls(n){let e,t,r,s,a,o=de(n[0].date)+"",i,l,c,h,f,g,d,k,b,y,L=n[0].title+"",F,E,w,x=n[0].description+"",v,q,S,O,D,M,W,P=n[0].updateDate&&Gt(n),ie=X(n[0].tags.slice(0,3)),U=[];for(let Q=0;Q<ie.length;Q+=1)U[Q]=Yt(Wt(n,ie,Q));return{c(){e=m("button"),t=m("div"),r=m("div"),s=m("div"),a=m("time"),i=j(o),l=_(),c=m("span"),c.textContent="·",h=_(),f=m("span"),g=j(n[1]),d=j(" min read"),k=_(),P&&P.c(),b=_(),y=m("h3"),F=j(L),E=_(),w=m("p"),v=j(x),q=_(),S=m("div");for(let Q=0;Q<U.length;Q+=1)U[Q].c();O=_(),D=m("div"),D.innerHTML=`<span class="w-6 h-px bg-neutral-700 group-hover:w-10 group-hover:bg-white transition-all duration-300"></span>
      Read Article
      <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,p(a,"class","text-xs text-neutral-500 tracking-wide uppercase"),p(c,"class","text-neutral-700"),p(f,"class","text-xs text-neutral-500 tracking-wide"),p(s,"class","flex items-center gap-4"),p(r,"class","mb-6 space-y-2"),p(y,"class","heading-secondary mb-3 group-hover:text-white transition-colors duration-300"),p(w,"class","text-body text-sm mb-5 line-clamp-2 svelte-efadq"),p(S,"class","flex flex-wrap gap-2 mb-5"),p(D,"class","inline-flex items-center gap-3 text-sm text-neutral-400 group-hover:text-white transition-colors duration-300"),p(t,"class","p-6 md:p-8 bg-surface-light rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:bg-surface-lighter"),p(e,"class","group cursor-pointer w-full text-left")},m(Q,ae){T(Q,e,ae),u(e,t),u(t,r),u(r,s),u(s,a),u(a,i),u(s,l),u(s,c),u(s,h),u(s,f),u(f,g),u(f,d),u(r,k),P&&P.m(r,null),u(t,b),u(t,y),u(y,F),u(t,E),u(t,w),u(w,v),u(t,q),u(t,S);for(let H=0;H<U.length;H+=1)U[H]&&U[H].m(S,null);u(t,O),u(t,D),M||(W=Ce(e,"click",n[2]),M=!0)},p(Q,[ae]){if(ae&1&&o!==(o=de(Q[0].date)+"")&&se(i,o),ae&2&&se(g,Q[1]),Q[0].updateDate?P?P.p(Q,ae):(P=Gt(Q),P.c(),P.m(r,null)):P&&(P.d(1),P=null),ae&1&&L!==(L=Q[0].title+"")&&se(F,L),ae&1&&x!==(x=Q[0].description+"")&&se(v,x),ae&1){ie=X(Q[0].tags.slice(0,3));let H;for(H=0;H<ie.length;H+=1){const pe=Wt(Q,ie,H);U[H]?U[H].p(pe,ae):(U[H]=Yt(pe),U[H].c(),U[H].m(S,null))}for(;H<U.length;H+=1)U[H].d(1);U.length=ie.length}},i:$,o:$,d(Q){Q&&R(e),P&&P.d(),he(U,Q),M=!1,W()}}}function Ss(n,e,t){let r,{post:s}=e;function a(){lt(`/blog/${s.slug}`)}return n.$$set=o=>{"post"in o&&t(0,s=o.post)},n.$$.update=()=>{n.$$.dirty&1&&t(1,r=Tn(s.content))},[s,r,a]}class qn extends ne{constructor(e){super(),te(this,e,Ss,Ls,J,{post:0})}}function Kt(n,e,t){const r=n.slice();return r[1]=e[t],r}function Rs(n){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',p(e,"class","text-center py-16")},m(t,r){T(t,e,r)},p:$,i:$,o:$,d(t){t&&R(e)}}}function Ts(n){let e,t,r,s,a,o,i,l=X(n[0]),c=[];for(let f=0;f<l.length;f+=1)c[f]=Zt(Kt(n,l,f));const h=f=>B(c[f],1,1,()=>{c[f]=null});return{c(){e=m("div");for(let f=0;f<c.length;f+=1)c[f].c();t=_(),r=m("div"),s=m("a"),s.innerHTML=`View all posts
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`,p(e,"class","grid md:grid-cols-2 gap-6 md:gap-8"),p(s,"href","/blog"),p(s,"class","inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"),p(r,"class","mt-12 text-center")},m(f,g){T(f,e,g);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(e,null);T(f,t,g),T(f,r,g),u(r,s),a=!0,o||(i=it(ct.call(null,s)),o=!0)},p(f,g){if(g&1){l=X(f[0]);let d;for(d=0;d<l.length;d+=1){const k=Kt(f,l,d);c[d]?(c[d].p(k,g),C(c[d],1)):(c[d]=Zt(k),c[d].c(),C(c[d],1),c[d].m(e,null))}for(ge(),d=l.length;d<c.length;d+=1)h(d);me()}},i(f){if(!a){for(let g=0;g<l.length;g+=1)C(c[g]);a=!0}},o(f){c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)B(c[g]);a=!1},d(f){f&&(R(e),R(t),R(r)),he(c,f),o=!1,i()}}}function Zt(n){let e,t;return e=new qn({props:{post:n[1]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const a={};s&1&&(a.post=r[1]),e.$set(a)},i(r){t||(C(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function qs(n){let e,t,r,s,a,o,i;const l=[Ts,Rs],c=[];function h(f,g){return f[0].length>0?0:1}return a=h(n),o=c[a]=l[a](n),{c(){e=m("section"),t=m("div"),r=m("header"),r.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h2 class="heading-primary">Blog</h2> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
        along the way.</p>`,s=_(),o.c(),p(r,"class","mb-16 md:mb-20"),p(t,"class","section-container"),p(e,"class","py-24 md:py-32 border-t border-neutral-900"),p(e,"id","blog")},m(f,g){T(f,e,g),u(e,t),u(t,r),u(t,s),c[a].m(t,null),i=!0},p(f,[g]){let d=a;a=h(f),a===d?c[a].p(f,g):(ge(),B(c[d],1,1,()=>{c[d]=null}),me(),o=c[a],o?o.p(f,g):(o=c[a]=l[a](f),o.c()),C(o,1),o.m(t,null))},i(f){i||(C(o),i=!0)},o(f){B(o),i=!1},d(f){f&&R(e),c[a].d()}}}function Ms(n,e,t){let r=[];return at(()=>{t(0,r=wt().slice(0,2))}),[r]}class Ps extends ne{constructor(e){super(),te(this,e,Ms,qs,J,{})}}function As(n){let e,t,r,s,a,o,i,l;return e=new gr({}),r=new qr({}),a=new Ps({}),i=new vr({}),{c(){Z(e.$$.fragment),t=_(),Z(r.$$.fragment),s=_(),Z(a.$$.fragment),o=_(),Z(i.$$.fragment)},m(c,h){G(e,c,h),T(c,t,h),G(r,c,h),T(c,s,h),G(a,c,h),T(c,o,h),G(i,c,h),l=!0},p:$,i(c){l||(C(e.$$.fragment,c),C(r.$$.fragment,c),C(a.$$.fragment,c),C(i.$$.fragment,c),l=!0)},o(c){B(e.$$.fragment,c),B(r.$$.fragment,c),B(a.$$.fragment,c),B(i.$$.fragment,c),l=!1},d(c){c&&(R(t),R(s),R(o)),Y(e,c),Y(r,c),Y(a,c),Y(i,c)}}}class Cs extends ne{constructor(e){super(),te(this,e,null,As,J,{})}}function Xt(n,e,t){const r=n.slice();return r[3]=e[t],r}function Jt(n){let e,t,r=de(n[0].updateDate)+"",s;return{c(){e=m("p"),t=j("Updated at "),s=j(r),p(e,"class","text-xs italic text-neutral-500 tracking-wide")},m(a,o){T(a,e,o),u(e,t),u(e,s)},p(a,o){o&1&&r!==(r=de(a[0].updateDate)+"")&&se(s,r)},d(a){a&&R(e)}}}function Vt(n){let e,t,r=n[3]+"",s,a;return{c(){e=m("span"),t=j("#"),s=j(r),a=_(),p(e,"class","px-3 py-1 text-xs tracking-wide text-neutral-500 border border-neutral-800 rounded-full")},m(o,i){T(o,e,i),u(e,t),u(e,s),u(e,a)},p(o,i){i&1&&r!==(r=o[3]+"")&&se(s,r)},d(o){o&&R(e)}}}function Es(n){let e,t,r,s,a,o,i,l,c=de(n[0].date)+"",h,f,g,d,k,b,y,L,F,E,w=n[0].title+"",x,v,q,S=n[0].description+"",O,D,M,W,P,ie,U,Q=n[0].htmlContent+"",ae,H,pe,Xe,xt,re=n[0].updateDate&&Jt(n),ye=X(n[0].tags),V=[];for(let N=0;N<ye.length;N+=1)V[N]=Vt(Xt(n,ye,N));return{c(){e=m("article"),t=m("div"),r=m("button"),r.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      Back to Blog`,s=_(),a=m("header"),o=m("div"),i=m("div"),l=m("time"),h=j(c),f=_(),g=m("span"),g.textContent="·",d=_(),k=m("span"),b=j(n[1]),y=j(" min read"),L=_(),re&&re.c(),F=_(),E=m("h1"),x=j(w),v=_(),q=m("p"),O=j(S),D=_(),M=m("div");for(let N=0;N<V.length;N+=1)V[N].c();W=_(),P=m("div"),ie=_(),U=m("div"),ae=_(),H=m("footer"),pe=m("button"),pe.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to all posts`,p(r,"class","inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 mb-12 group"),p(l,"class","text-sm text-neutral-500 tracking-wide"),p(g,"class","text-neutral-700"),p(k,"class","text-sm text-neutral-500 tracking-wide"),p(i,"class","flex items-center gap-4"),p(o,"class","mb-6 space-y-2"),p(E,"class","text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-6"),p(q,"class","text-lg md:text-xl text-neutral-400 font-light leading-relaxed"),p(M,"class","flex flex-wrap gap-2 mt-8"),p(a,"class","mb-12 md:mb-16"),p(P,"class","w-full h-px bg-neutral-800 mb-12 md:mb-16"),p(U,"class","prose svelte-1nk5k7f"),p(pe,"class","inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"),p(H,"class","mt-16 md:mt-20 pt-12 border-t border-neutral-800"),p(t,"class","section-container max-w-3xl"),p(e,"class","py-24 md:py-32")},m(N,ce){T(N,e,ce),u(e,t),u(t,r),u(t,s),u(t,a),u(a,o),u(o,i),u(i,l),u(l,h),u(i,f),u(i,g),u(i,d),u(i,k),u(k,b),u(k,y),u(o,L),re&&re.m(o,null),u(a,F),u(a,E),u(E,x),u(a,v),u(a,q),u(q,O),u(a,D),u(a,M);for(let K=0;K<V.length;K+=1)V[K]&&V[K].m(M,null);u(t,W),u(t,P),u(t,ie),u(t,U),U.innerHTML=Q,u(t,ae),u(t,H),u(H,pe),Xe||(xt=[Ce(r,"click",n[2]),Ce(pe,"click",n[2])],Xe=!0)},p(N,[ce]){if(ce&1&&c!==(c=de(N[0].date)+"")&&se(h,c),ce&2&&se(b,N[1]),N[0].updateDate?re?re.p(N,ce):(re=Jt(N),re.c(),re.m(o,null)):re&&(re.d(1),re=null),ce&1&&w!==(w=N[0].title+"")&&se(x,w),ce&1&&S!==(S=N[0].description+"")&&se(O,S),ce&1){ye=X(N[0].tags);let K;for(K=0;K<ye.length;K+=1){const yt=Xt(N,ye,K);V[K]?V[K].p(yt,ce):(V[K]=Vt(yt),V[K].c(),V[K].m(M,null))}for(;K<V.length;K+=1)V[K].d(1);V.length=ye.length}ce&1&&Q!==(Q=N[0].htmlContent+"")&&(U.innerHTML=Q)},i:$,o:$,d(N){N&&R(e),re&&re.d(),he(V,N),Xe=!1,fe(xt)}}}function Is(n,e,t){let r,{post:s}=e;function a(){gn(),lt("/blog")}return n.$$set=o=>{"post"in o&&t(0,s=o.post)},n.$$.update=()=>{n.$$.dirty&1&&t(1,r=Tn(s.content))},[s,r,a]}class js extends ne{constructor(e){super(),te(this,e,Is,Es,J,{post:0})}}function en(n,e,t){const r=n.slice();return r[4]=e[t],r}function zs(n){let e,t,r,s,a,o,i,l,c,h,f;const g=[Os,Qs],d=[];function k(b,y){return b[0].length>0?0:1}return i=k(n),l=d[i]=g[i](n),{c(){e=m("section"),t=m("div"),r=m("a"),r.innerHTML=`<svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
        Back to Home`,s=_(),a=m("header"),a.innerHTML=`<span class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block">Thoughts &amp; Ideas</span> <h1 class="heading-primary">Blog</h1> <p class="text-body mt-4 max-w-2xl">Writing about software development, technology, and lessons learned
          along the way.</p>`,o=_(),l.c(),p(r,"href","/"),p(r,"class","inline-flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-300 mb-12 group"),p(a,"class","mb-16 md:mb-20"),p(t,"class","section-container"),p(e,"class","py-24 md:py-32")},m(b,y){T(b,e,y),u(e,t),u(t,r),u(t,s),u(t,a),u(t,o),d[i].m(t,null),c=!0,h||(f=it(ct.call(null,r)),h=!0)},p(b,y){let L=i;i=k(b),i===L?d[i].p(b,y):(ge(),B(d[L],1,1,()=>{d[L]=null}),me(),l=d[i],l?l.p(b,y):(l=d[i]=g[i](b),l.c()),C(l,1),l.m(t,null))},i(b){c||(C(l),c=!0)},o(b){B(l),c=!1},d(b){b&&R(e),d[i].d(),h=!1,f()}}}function Bs(n){let e,t;return e=new js({props:{post:n[2]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const a={};s&4&&(a.post=r[2]),e.$set(a)},i(r){t||(C(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Qs(n){let e;return{c(){e=m("div"),e.innerHTML='<p class="text-neutral-500">No blog posts yet. Check back soon!</p>',p(e,"class","text-center py-16")},m(t,r){T(t,e,r)},p:$,i:$,o:$,d(t){t&&R(e)}}}function Os(n){let e,t,r=X(n[0]),s=[];for(let o=0;o<r.length;o+=1)s[o]=tn(en(n,r,o));const a=o=>B(s[o],1,1,()=>{s[o]=null});return{c(){e=m("div");for(let o=0;o<s.length;o+=1)s[o].c();p(e,"class","grid md:grid-cols-2 gap-6 md:gap-8")},m(o,i){T(o,e,i);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);t=!0},p(o,i){if(i&1){r=X(o[0]);let l;for(l=0;l<r.length;l+=1){const c=en(o,r,l);s[l]?(s[l].p(c,i),C(s[l],1)):(s[l]=tn(c),s[l].c(),C(s[l],1),s[l].m(e,null))}for(ge(),l=r.length;l<s.length;l+=1)a(l);me()}},i(o){if(!t){for(let i=0;i<r.length;i+=1)C(s[i]);t=!0}},o(o){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)B(s[i]);t=!1},d(o){o&&R(e),he(s,o)}}}function tn(n){let e,t;return e=new qn({props:{post:n[4]}}),{c(){Z(e.$$.fragment)},m(r,s){G(e,r,s),t=!0},p(r,s){const a={};s&1&&(a.post=r[4]),e.$set(a)},i(r){t||(C(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ds(n){let e,t,r,s;const a=[Bs,zs],o=[];function i(l,c){return l[1]&&l[2]?0:1}return e=i(n),t=o[e]=a[e](n),{c(){t.c(),r=We()},m(l,c){o[e].m(l,c),T(l,r,c),s=!0},p(l,[c]){let h=e;e=i(l),e===h?o[e].p(l,c):(ge(),B(o[h],1,1,()=>{o[h]=null}),me(),t=o[e],t?t.p(l,c):(t=o[e]=a[e](l),t.c()),C(t,1),t.m(r.parentNode,r))},i(l){s||(C(t),s=!0)},o(l){B(t),s=!1},d(l){l&&R(r),o[e].d(l)}}}function Fs(n,e,t){let r,s;Ve(n,Pe,i=>t(1,r=i)),Ve(n,Oe,i=>t(2,s=i));let{params:a={}}=e,o=[];return at(()=>{t(0,o=wt())}),n.$$set=i=>{"params"in i&&t(3,a=i.params)},n.$$.update=()=>{if(n.$$.dirty&8)if(a.slug){const i=$s(a.slug);i&&(Oe.set(i),Pe.set(!0),window.scrollTo({top:0,behavior:"smooth"}))}else Oe.set(null),Pe.set(!1)},[o,r,s,a]}class nn extends ne{constructor(e){super(),te(this,e,Fs,Ds,J,{params:3})}}function Ns(n){let e,t,r,s,a,o,i;return e=new tr({}),s=new Kn({props:{routes:n[0]}}),o=new Jn({}),{c(){Z(e.$$.fragment),t=_(),r=m("main"),Z(s.$$.fragment),a=_(),Z(o.$$.fragment),p(r,"class","min-h-screen bg-surface")},m(l,c){G(e,l,c),T(l,t,c),T(l,r,c),G(s,r,null),T(l,a,c),G(o,l,c),i=!0},p:$,i(l){i||(C(e.$$.fragment,l),C(s.$$.fragment,l),C(o.$$.fragment,l),i=!0)},o(l){B(e.$$.fragment,l),B(s.$$.fragment,l),B(o.$$.fragment,l),i=!1},d(l){l&&(R(t),R(r),R(a)),Y(e,l),Y(s),Y(o,l)}}}function Hs(n,e,t){return[{"/":Cs,"/blog":nn,"/blog/:slug":nn},!0]}class Us extends ne{constructor(e){super(),te(this,e,Hs,Ns,J,{prerender:1})}get prerender(){return this.$$.ctx[1]}}new Us({target:document.getElementById("app")});
