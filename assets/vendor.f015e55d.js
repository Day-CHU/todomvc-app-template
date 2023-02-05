var Bu=Object.defineProperty,Uu=Object.defineProperties;var Hu=Object.getOwnPropertyDescriptors;var So=Object.getOwnPropertySymbols;var Wu=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable;var No=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xo=(t,e)=>{for(var n in e||(e={}))Wu.call(e,n)&&No(t,n,e[n]);if(So)for(var n of So(e))$u.call(e,n)&&No(t,n,e[n]);return t},Ro=(t,e)=>Uu(t,Hu(e));function gr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ju=gr(Vu);function Ql(t){return!!t||t===""}function mr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?Ku(s):mr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(le(t))return t}}const qu=/;(?![^(]*\))/g,zu=/:(.+)/;function Ku(t){const e={};return t.split(qu).forEach(n=>{if(n){const s=n.split(zu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yr(t){let e="";if(pe(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=yr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Gu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Vs(t[s],e[s]);return n}function Vs(t,e){if(t===e)return!0;let n=Ao(t),s=Ao(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=k(t),s=k(e),n||s)return n&&s?Gu(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Vs(t[o],e[o]))return!1}}return String(t)===String(e)}function Xl(t,e){return t.findIndex(n=>Vs(n,e))}const fy=t=>pe(t)?t:t==null?"":k(t)||le(t)&&(t.toString===ea||!L(t.toString))?JSON.stringify(t,Jl,2):String(t),Jl=(t,e)=>e&&e.__v_isRef?Jl(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:qs(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!k(e)&&!ta(e)?String(e):e,K={},Zt=[],We=()=>{},Yu=()=>!1,Qu=/^on[^a-z]/,js=t=>Qu.test(t),Cr=t=>t.startsWith("onUpdate:"),ve=Object.assign,vr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xu=Object.prototype.hasOwnProperty,$=(t,e)=>Xu.call(t,e),k=Array.isArray,en=t=>zs(t)==="[object Map]",qs=t=>zs(t)==="[object Set]",Ao=t=>t instanceof Date,L=t=>typeof t=="function",pe=t=>typeof t=="string",Er=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Zl=t=>le(t)&&L(t.then)&&L(t.catch),ea=Object.prototype.toString,zs=t=>ea.call(t),Ju=t=>zs(t).slice(8,-1),ta=t=>zs(t)==="[object Object]",br=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ks=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zu=/-(\w)/g,ln=Ks(t=>t.replace(Zu,(e,n)=>n?n.toUpperCase():"")),eh=/\B([A-Z])/g,Vt=Ks(t=>t.replace(eh,"-$1").toLowerCase()),na=Ks(t=>t.charAt(0).toUpperCase()+t.slice(1)),_i=Ks(t=>t?`on${na(t)}`:""),Ln=(t,e)=>!Object.is(t,e),ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ys=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Po;const th=()=>Po||(Po=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let De;class sa{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&De&&(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(e){if(this.active)try{return De=this,e()}finally{De=this.parent}}on(){De=this}off(){De=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function ia(t){return new sa(t)}function nh(t,e=De){e&&e.active&&e.effects.push(t)}function sh(){return De}function ih(t){De&&De.cleanups.push(t)}const wr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ra=t=>(t.w&vt)>0,oa=t=>(t.n&vt)>0,rh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vt},oh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ra(i)&&!oa(i)?i.delete(t):e[n++]=i,i.w&=~vt,i.n&=~vt}e.length=n}},Oi=new WeakMap;let Nn=0,vt=1;const ki=30;let Ke;const Dt=Symbol(""),Di=Symbol("");class Ir{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nh(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=pt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,pt=!0,vt=1<<++Nn,Nn<=ki?rh(this):Oo(this),this.fn()}finally{Nn<=ki&&oh(this),vt=1<<--Nn,Ke=this.parent,pt=n,this.parent=void 0}}stop(){this.active&&(Oo(this),this.onStop&&this.onStop(),this.active=!1)}}function Oo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pt=!0;const la=[];function _n(){la.push(pt),pt=!1}function gn(){const t=la.pop();pt=t===void 0?!0:t}function Oe(t,e,n){if(pt&&Ke){let s=Oi.get(t);s||Oi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=wr()),aa(i)}}function aa(t,e){let n=!1;Nn<=ki?oa(t)||(t.n|=vt,n=!ra(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function tt(t,e,n,s,i,r){const o=Oi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&k(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":k(t)?br(n)&&l.push(o.get("length")):(l.push(o.get(Dt)),en(t)&&l.push(o.get(Di)));break;case"delete":k(t)||(l.push(o.get(Dt)),en(t)&&l.push(o.get(Di)));break;case"set":en(t)&&l.push(o.get(Dt));break}if(l.length===1)l[0]&&Mi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Mi(wr(a))}}function Mi(t,e){for(const n of k(t)?t:[...t])(n!==Ke||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const lh=gr("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Er)),ah=Tr(),ch=Tr(!1,!0),uh=Tr(!0),ko=hh();function hh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_n();const s=V(this)[e].apply(this,n);return gn(),s}}),t}function Tr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Nh:pa:e?da:fa).get(s))return s;const o=k(s);if(!t&&o&&$(ko,i))return Reflect.get(ko,i,r);const l=Reflect.get(s,i,r);return(Er(i)?ca.has(i):lh(i))||(t||Oe(s,"get",i),e)?l:re(l)?!o||!br(i)?l.value:l:le(l)?t?_a(l):Ys(l):l}}const fh=ua(),dh=ua(!0);function ua(t=!1){return function(n,s,i,r){let o=n[s];if(Bn(o)&&re(o)&&!re(i))return!1;if(!t&&!Bn(i)&&(ga(i)||(i=V(i),o=V(o)),!k(n)&&re(o)&&!re(i)))return o.value=i,!0;const l=k(n)&&br(s)?Number(s)<n.length:$(n,s),a=Reflect.set(n,s,i,r);return n===V(r)&&(l?Ln(i,o)&&tt(n,"set",s,i):tt(n,"add",s,i)),a}}function ph(t,e){const n=$(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&tt(t,"delete",e,void 0),s}function _h(t,e){const n=Reflect.has(t,e);return(!Er(e)||!ca.has(e))&&Oe(t,"has",e),n}function gh(t){return Oe(t,"iterate",k(t)?"length":Dt),Reflect.ownKeys(t)}const ha={get:ah,set:fh,deleteProperty:ph,has:_h,ownKeys:gh},mh={get:uh,set(t,e){return!0},deleteProperty(t,e){return!0}},yh=ve({},ha,{get:ch,set:dh}),Sr=t=>t,Gs=t=>Reflect.getPrototypeOf(t);function os(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);e!==r&&!n&&Oe(i,"get",e),!n&&Oe(i,"get",r);const{has:o}=Gs(i),l=s?Sr:n?Rr:Un;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ls(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return t!==i&&!e&&Oe(s,"has",t),!e&&Oe(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function as(t,e=!1){return t=t.__v_raw,!e&&Oe(V(t),"iterate",Dt),Reflect.get(t,"size",t)}function Do(t){t=V(t);const e=V(this);return Gs(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Mo(t,e){e=V(e);const n=V(this),{has:s,get:i}=Gs(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ln(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function Fo(t){const e=V(this),{has:n,get:s}=Gs(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&tt(e,"delete",t,void 0),r}function Lo(){const t=V(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function cs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=V(o),a=e?Sr:t?Rr:Un;return!t&&Oe(l,"iterate",Dt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function us(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=en(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Sr:e?Rr:Un;return!e&&Oe(r,"iterate",a?Di:Dt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function Ch(){const t={get(r){return os(this,r)},get size(){return as(this)},has:ls,add:Do,set:Mo,delete:Fo,clear:Lo,forEach:cs(!1,!1)},e={get(r){return os(this,r,!1,!0)},get size(){return as(this)},has:ls,add:Do,set:Mo,delete:Fo,clear:Lo,forEach:cs(!1,!0)},n={get(r){return os(this,r,!0)},get size(){return as(this,!0)},has(r){return ls.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:cs(!0,!1)},s={get(r){return os(this,r,!0,!0)},get size(){return as(this,!0)},has(r){return ls.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=us(r,!1,!1),n[r]=us(r,!0,!1),e[r]=us(r,!1,!0),s[r]=us(r,!0,!0)}),[t,n,e,s]}const[vh,Eh,bh,wh]=Ch();function Nr(t,e){const n=e?t?wh:bh:t?Eh:vh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($(n,i)&&i in s?n:s,i,r)}const Ih={get:Nr(!1,!1)},Th={get:Nr(!1,!0)},Sh={get:Nr(!0,!1)},fa=new WeakMap,da=new WeakMap,pa=new WeakMap,Nh=new WeakMap;function xh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rh(t){return t.__v_skip||!Object.isExtensible(t)?0:xh(Ju(t))}function Ys(t){return Bn(t)?t:xr(t,!1,ha,Ih,fa)}function Ah(t){return xr(t,!1,yh,Th,da)}function _a(t){return xr(t,!0,mh,Sh,pa)}function xr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Rh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function _t(t){return Bn(t)?_t(t.__v_raw):!!(t&&t.__v_isReactive)}function Bn(t){return!!(t&&t.__v_isReadonly)}function ga(t){return!!(t&&t.__v_isShallow)}function ma(t){return _t(t)||Bn(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function an(t){return ys(t,"__v_skip",!0),t}const Un=t=>le(t)?Ys(t):t,Rr=t=>le(t)?_a(t):t;function ya(t){pt&&Ke&&(t=V(t),aa(t.dep||(t.dep=wr())))}function Ca(t,e){t=V(t),t.dep&&Mi(t.dep)}function re(t){return!!(t&&t.__v_isRef===!0)}function va(t){return Ph(t,!1)}function Ph(t,e){return re(t)?t:new Oh(t,e)}class Oh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Un(e)}get value(){return ya(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),Ln(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Un(e),Ca(this))}}function kh(t){return re(t)?t.value:t}const Dh={get:(t,e,n)=>kh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return re(i)&&!re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ea(t){return _t(t)?t:new Proxy(t,Dh)}function Mh(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=Lh(t,n);return e}class Fh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Lh(t,e,n){const s=t[e];return re(s)?s:new Fh(t,e,n)}class Bh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ir(e,()=>{this._dirty||(this._dirty=!0,Ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return ya(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Uh(t,e,n=!1){let s,i;const r=L(t);return r?(s=t,i=We):(s=t.get,i=t.set),new Bh(s,i,r||!i,n)}Promise.resolve();function gt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Qs(r,e,n)}return i}function Me(t,e,n,s){if(L(t)){const r=gt(t,e,n,s);return r&&Zl(r)&&r.catch(o=>{Qs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Me(t[r],e,n,s));return i}function Qs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){gt(a,null,10,[t,o,l]);return}}Hh(t,n,i,s)}function Hh(t,e,n,s=!0){console.error(t)}let Cs=!1,Fi=!1;const Pe=[];let Xe=0;const Rn=[];let xn=null,Qt=0;const An=[];let ht=null,Xt=0;const ba=Promise.resolve();let Ar=null,Li=null;function wa(t){const e=Ar||ba;return t?e.then(this?t.bind(this):t):e}function Wh(t){let e=Xe+1,n=Pe.length;for(;e<n;){const s=e+n>>>1;Hn(Pe[s])<t?e=s+1:n=s}return e}function Ia(t){(!Pe.length||!Pe.includes(t,Cs&&t.allowRecurse?Xe+1:Xe))&&t!==Li&&(t.id==null?Pe.push(t):Pe.splice(Wh(t.id),0,t),Ta())}function Ta(){!Cs&&!Fi&&(Fi=!0,Ar=ba.then(xa))}function $h(t){const e=Pe.indexOf(t);e>Xe&&Pe.splice(e,1)}function Sa(t,e,n,s){k(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Ta()}function Vh(t){Sa(t,xn,Rn,Qt)}function jh(t){Sa(t,ht,An,Xt)}function Pr(t,e=null){if(Rn.length){for(Li=e,xn=[...new Set(Rn)],Rn.length=0,Qt=0;Qt<xn.length;Qt++)xn[Qt]();xn=null,Qt=0,Li=null,Pr(t,e)}}function Na(t){if(An.length){const e=[...new Set(An)];if(An.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,s)=>Hn(n)-Hn(s)),Xt=0;Xt<ht.length;Xt++)ht[Xt]();ht=null,Xt=0}}const Hn=t=>t.id==null?1/0:t.id;function xa(t){Fi=!1,Cs=!0,Pr(t),Pe.sort((n,s)=>Hn(n)-Hn(s));const e=We;try{for(Xe=0;Xe<Pe.length;Xe++){const n=Pe[Xe];n&&n.active!==!1&&gt(n,null,14)}}finally{Xe=0,Pe.length=0,Na(),Cs=!1,Ar=null,(Pe.length||Rn.length||An.length)&&xa(t)}}function qh(t,e,...n){const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||K;d?i=n.map(g=>g.trim()):h&&(i=n.map(Pi))}let l,a=s[l=_i(e)]||s[l=_i(ln(e))];!a&&r&&(a=s[l=_i(Vt(e))]),a&&Me(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Me(c,t,6,i)}}function Ra(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!L(t)){const a=c=>{const u=Ra(c,e,!0);u&&(l=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):ve(o,r),s.set(t,o),o)}function Or(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,Vt(e))||$(t,e))}let Be=null,Xs=null;function vs(t){const e=Be;return Be=t,Xs=t&&t.type.__scopeId||null,e}function dy(t){Xs=t}function py(){Xs=null}function zh(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ko(-1);const r=vs(e),o=t(...i);return vs(r),s._d&&Ko(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function gi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:S}=t;let x,F;const ae=vs(t);try{if(n.shapeFlag&4){const ee=i||s;x=ze(u.call(ee,ee,h,r,g,d,v)),F=a}else{const ee=e;x=ze(ee.length>1?ee(r,{attrs:a,slots:l,emit:c}):ee(r,null)),F=e.props?a:Kh(a)}}catch(ee){Pn.length=0,Qs(ee,t,1),x=Ze(Ge)}let se=x;if(F&&S!==!1){const ee=Object.keys(F),{shapeFlag:te}=se;ee.length&&te&7&&(o&&ee.some(Cr)&&(F=Gh(F,o)),se=cn(se,F))}return n.dirs&&(se.dirs=se.dirs?se.dirs.concat(n.dirs):n.dirs),n.transition&&(se.transition=n.transition),x=se,vs(ae),x}const Kh=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},Gh=(t,e)=>{const n={};for(const s in t)(!Cr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Yh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Bo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Or(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Bo(s,o,c):!0:!!o;return!1}function Bo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Or(n,r))return!0}return!1}function Qh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xh=t=>t.__isSuspense;function Jh(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):jh(t)}function Zh(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function _s(t,e,n=!1){const s=me||Be;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(s.proxy):e}}const Uo={};function gs(t,e,n){return Aa(t,e,n)}function Aa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=K){const l=me;let a,c=!1,u=!1;if(re(t)?(a=()=>t.value,c=ga(t)):_t(t)?(a=()=>t,s=!0):k(t)?(u=!0,c=t.some(_t),a=()=>t.map(F=>{if(re(F))return F.value;if(_t(F))return Pt(F);if(L(F))return gt(F,l,2)})):L(t)?e?a=()=>gt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Me(t,l,3,[d])}:a=We,e&&s){const F=a;a=()=>Pt(F())}let h,d=F=>{h=x.onStop=()=>{gt(F,l,4)}};if(Wn)return d=We,e?n&&Me(e,l,3,[a(),u?[]:void 0,d]):a(),We;let g=u?[]:Uo;const v=()=>{if(!!x.active)if(e){const F=x.run();(s||c||(u?F.some((ae,se)=>Ln(ae,g[se])):Ln(F,g)))&&(h&&h(),Me(e,l,3,[F,g===Uo?void 0:g,d]),g=F)}else x.run()};v.allowRecurse=!!e;let S;i==="sync"?S=v:i==="post"?S=()=>we(v,l&&l.suspense):S=()=>{!l||l.isMounted?Vh(v):v()};const x=new Ir(a,S);return e?n?v():g=x.run():i==="post"?we(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&vr(l.scope.effects,x)}}function ef(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Pa(s,t):()=>s[t]:t.bind(s,s);let r;L(e)?r=e:(r=e.handler,n=e);const o=me;un(this);const l=Aa(i,r.bind(s),n);return o?un(o):Ft(),l}function Pa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Pt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),re(t))Pt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(qs(t)||en(t))t.forEach(n=>{Pt(n,e)});else if(ta(t))for(const n in t)Pt(t[n],e);return t}function tf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ma(()=>{t.isMounted=!0}),Fa(()=>{t.isUnmounting=!0}),t}const ke=[Function,Array],nf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},setup(t,{slots:e}){const n=Qa(),s=tf();let i;return()=>{const r=e.default&&ka(e.default(),!0);if(!r||!r.length)return;const o=V(t),{mode:l}=o,a=r[0];if(s.isLeaving)return mi(a);const c=Ho(a);if(!c)return mi(a);const u=Bi(c,o,s,n);Ui(c,u);const h=n.subTree,d=h&&Ho(h);let g=!1;const{getTransitionKey:v}=c.type;if(v){const S=v();i===void 0?i=S:S!==i&&(i=S,g=!0)}if(d&&d.type!==Ge&&(!xt(c,d)||g)){const S=Bi(d,o,s,n);if(Ui(d,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},mi(a);l==="in-out"&&c.type!==Ge&&(S.delayLeave=(x,F,ae)=>{const se=Oa(s,d);se[String(d.key)]=d,x._leaveCb=()=>{F(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return a}}},sf=nf;function Oa(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Bi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:S,onAppear:x,onAfterAppear:F,onAppearCancelled:ae}=e,se=String(t.key),ee=Oa(n,t),te=(P,M)=>{P&&Me(P,s,9,M)},xe={mode:r,persisted:o,beforeEnter(P){let M=l;if(!n.isMounted)if(i)M=S||l;else return;P._leaveCb&&P._leaveCb(!0);const q=ee[se];q&&xt(t,q)&&q.el._leaveCb&&q.el._leaveCb(),te(M,[P])},enter(P){let M=a,q=c,_e=u;if(!n.isMounted)if(i)M=x||a,q=F||c,_e=ae||u;else return;let ce=!1;const Re=P._enterCb=lt=>{ce||(ce=!0,lt?te(_e,[P]):te(q,[P]),xe.delayedLeave&&xe.delayedLeave(),P._enterCb=void 0)};M?(M(P,Re),M.length<=1&&Re()):Re()},leave(P,M){const q=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return M();te(h,[P]);let _e=!1;const ce=P._leaveCb=Re=>{_e||(_e=!0,M(),Re?te(v,[P]):te(g,[P]),P._leaveCb=void 0,ee[q]===t&&delete ee[q])};ee[q]=t,d?(d(P,ce),d.length<=1&&ce()):ce()},clone(P){return Bi(P,e,n,s)}};return xe}function mi(t){if(Js(t))return t=cn(t),t.children=null,t}function Ho(t){return Js(t)?t.children?t.children[0]:void 0:t}function Ui(t,e){t.shapeFlag&6&&t.component?Ui(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ka(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===qe?(r.patchFlag&128&&s++,n=n.concat(ka(r.children,e))):(e||r.type!==Ge)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function _y(t){return L(t)?{setup:t,name:t.name}:t}const Hi=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function rf(t,e){Da(t,"a",e)}function of(t,e){Da(t,"da",e)}function Da(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Zs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Js(i.parent.vnode)&&lf(s,e,n,i),i=i.parent}}function lf(t,e,n,s){const i=Zs(e,t,s,!0);La(()=>{vr(s[e],i)},n)}function Zs(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_n(),un(n);const l=Me(e,n,t,o);return Ft(),gn(),l});return s?i.unshift(r):i.push(r),r}}const it=t=>(e,n=me)=>(!Wn||t==="sp")&&Zs(t,e,n),af=it("bm"),Ma=it("m"),cf=it("bu"),uf=it("u"),Fa=it("bum"),La=it("um"),hf=it("sp"),ff=it("rtg"),df=it("rtc");function pf(t,e=me){Zs("ec",t,e)}let Wi=!0;function _f(t){const e=Ua(t),n=t.proxy,s=t.ctx;Wi=!1,e.beforeCreate&&Wo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:S,deactivated:x,beforeDestroy:F,beforeUnmount:ae,destroyed:se,unmounted:ee,render:te,renderTracked:xe,renderTriggered:P,errorCaptured:M,serverPrefetch:q,expose:_e,inheritAttrs:ce,components:Re,directives:lt,filters:at}=e;if(c&&gf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const X=o[ie];L(X)&&(s[ie]=X.bind(n))}if(i){const ie=i.call(n,n);le(ie)&&(t.data=Ys(ie))}if(Wi=!0,r)for(const ie in r){const X=r[ie],Ye=L(X)?X.bind(n,n):L(X.get)?X.get.bind(n,n):We,fi=!L(X)&&L(X.set)?X.set.bind(n):We,En=Za({get:Ye,set:fi});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>En.value,set:qt=>En.value=qt})}if(l)for(const ie in l)Ba(l[ie],s,n,ie);if(a){const ie=L(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(X=>{Zh(X,ie[X])})}u&&Wo(u,t,"c");function be(ie,X){k(X)?X.forEach(Ye=>ie(Ye.bind(n))):X&&ie(X.bind(n))}if(be(af,h),be(Ma,d),be(cf,g),be(uf,v),be(rf,S),be(of,x),be(pf,M),be(df,xe),be(ff,P),be(Fa,ae),be(La,ee),be(hf,q),k(_e))if(_e.length){const ie=t.exposed||(t.exposed={});_e.forEach(X=>{Object.defineProperty(ie,X,{get:()=>n[X],set:Ye=>n[X]=Ye})})}else t.exposed||(t.exposed={});te&&t.render===We&&(t.render=te),ce!=null&&(t.inheritAttrs=ce),Re&&(t.components=Re),lt&&(t.directives=lt)}function gf(t,e,n=We,s=!1){k(t)&&(t=$i(t));for(const i in t){const r=t[i];let o;le(r)?"default"in r?o=_s(r.from||i,r.default,!0):o=_s(r.from||i):o=_s(r),re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Wo(t,e,n){Me(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ba(t,e,n,s){const i=s.includes(".")?Pa(n,s):()=>n[s];if(pe(t)){const r=e[t];L(r)&&gs(i,r)}else if(L(t))gs(i,t.bind(n));else if(le(t))if(k(t))t.forEach(r=>Ba(r,e,n,s));else{const r=L(t.handler)?t.handler.bind(n):e[t.handler];L(r)&&gs(i,r,t)}}function Ua(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Es(a,c,o,!0)),Es(a,e,o)),r.set(e,a),a}function Es(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Es(t,r,n,!0),i&&i.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=mf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const mf={data:$o,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Tt,directives:Tt,watch:Cf,provide:$o,inject:yf};function $o(t,e){return e?t?function(){return ve(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function yf(t,e){return Tt($i(t),$i(e))}function $i(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Cf(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function vf(t,e,n,s=!1){const i={},r={};ys(r,ei,1),t.propsDefaults=Object.create(null),Ha(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ef(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=e[d];if(a)if($(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const v=ln(d);i[v]=Vi(a,l,v,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Ha(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!$(e,h)&&((u=Vt(h))===h||!$(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Vi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!$(e,h)&&!0)&&(delete r[h],c=!0)}c&&tt(t,"set","$attrs")}function Ha(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ds(a))continue;const c=e[a];let u;i&&$(i,u=ln(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Or(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vi(i,a,h,c[h],t,!$(c,h))}}return o}function Vi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&L(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(un(i),s=c[n]=a.call(null,e),Ft())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Vt(n))&&(s=!0))}return s}function Wa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!L(t)){const u=h=>{a=!0;const[d,g]=Wa(h,e,!0);ve(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,Zt),Zt;if(k(r))for(let u=0;u<r.length;u++){const h=ln(r[u]);Vo(h)&&(o[h]=K)}else if(r)for(const u in r){const h=ln(u);if(Vo(h)){const d=r[u],g=o[h]=k(d)||L(d)?{type:d}:d;if(g){const v=zo(Boolean,g.type),S=zo(String,g.type);g[0]=v>-1,g[1]=S<0||v<S,(v>-1||$(g,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function Vo(t){return t[0]!=="$"}function jo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function qo(t,e){return jo(t)===jo(e)}function zo(t,e){return k(e)?e.findIndex(n=>qo(n,t)):L(e)&&qo(e,t)?0:-1}const $a=t=>t[0]==="_"||t==="$stable",kr=t=>k(t)?t.map(ze):[ze(t)],bf=(t,e,n)=>{const s=zh((...i)=>kr(e(...i)),n);return s._c=!1,s},Va=(t,e,n)=>{const s=t._ctx;for(const i in t){if($a(i))continue;const r=t[i];if(L(r))e[i]=bf(i,r,s);else if(r!=null){const o=kr(r);e[i]=()=>o}}},ja=(t,e)=>{const n=kr(e);t.slots.default=()=>n},wf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ys(e,"_",n)):Va(e,t.slots={})}else t.slots={},e&&ja(t,e);ys(t.slots,ei,1)},If=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ve(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Va(e,i)),o=e}else e&&(ja(t,e),o={default:1});if(r)for(const l in i)!$a(l)&&!(l in o)&&delete i[l]};function gy(t,e){const n=Be;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=K]=e[r];L(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(_n(),Me(a,n,8,[t.el,l,t,e]),gn())}}function qa(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tf=0;function Sf(t,e){return function(s,i=null){i!=null&&!le(i)&&(i=null);const r=qa(),o=new Set;let l=!1;const a=r.app={_uid:Tf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Yf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(a,...u)):L(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Ze(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Fr(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function ji(t,e,n,s,i=!1){if(k(t)){t.forEach((d,g)=>ji(d,e&&(k(e)?e[g]:e),n,s,i));return}if(Hi(s)&&!i)return;const r=s.shapeFlag&4?Fr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(pe(c)?(u[c]=null,$(h,c)&&(h[c]=null)):re(c)&&(c.value=null)),L(a))gt(a,l,12,[o,u]);else{const d=pe(a),g=re(a);if(d||g){const v=()=>{if(t.f){const S=d?u[a]:a.value;i?k(S)&&vr(S,r):k(S)?S.includes(r)||S.push(r):d?u[a]=[r]:(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,$(h,a)&&(h[a]=o)):re(a)&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,we(v,n)):v()}}}const we=Jh;function Nf(t){return xf(t)}function xf(t,e){const n=th();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=We,cloneNode:v,insertStaticContent:S}=t,x=(f,p,_,y=null,m=null,w=null,T=!1,b=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!xt(f,p)&&(y=rs(f),ct(f,m,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:R,shapeFlag:N}=p;switch(C){case Dr:F(f,p,_,y);break;case Ge:ae(f,p,_,y);break;case yi:f==null&&se(p,_,y,T);break;case qe:lt(f,p,_,y,m,w,T,b,I);break;default:N&1?xe(f,p,_,y,m,w,T,b,I):N&6?at(f,p,_,y,m,w,T,b,I):(N&64||N&128)&&C.process(f,p,_,y,m,w,T,b,I,zt)}R!=null&&m&&ji(R,f&&f.ref,w,p||f,!p)},F=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},ae=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},se=(f,p,_,y)=>{[f.el,f.anchor]=S(f.children,p,_,y,f.el,f.anchor)},ee=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},te=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},xe=(f,p,_,y,m,w,T,b,I)=>{T=T||p.type==="svg",f==null?P(p,_,y,m,w,T,b,I):_e(f,p,m,w,T,b,I)},P=(f,p,_,y,m,w,T,b)=>{let I,C;const{type:R,props:N,shapeFlag:A,transition:D,patchFlag:W,dirs:ne}=f;if(f.el&&v!==void 0&&W===-1)I=f.el=v(f.el);else{if(I=f.el=o(f.type,w,N&&N.is,N),A&8?u(I,f.children):A&16&&q(f.children,I,null,y,m,w&&R!=="foreignObject",T,b),ne&&wt(f,null,y,"created"),N){for(const J in N)J!=="value"&&!ds(J)&&r(I,J,null,N[J],w,f.children,y,m,Qe);"value"in N&&r(I,"value",null,N.value),(C=N.onVnodeBeforeMount)&&je(C,y,f)}M(I,f,f.scopeId,T,y)}ne&&wt(f,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&D&&!D.persisted;z&&D.beforeEnter(I),s(I,p,_),((C=N&&N.onVnodeMounted)||z||ne)&&we(()=>{C&&je(C,y,f),z&&D.enter(I),ne&&wt(f,null,y,"mounted")},m)},M=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(m){let w=m.subTree;if(p===w){const T=m.vnode;M(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},q=(f,p,_,y,m,w,T,b,I=0)=>{for(let C=I;C<f.length;C++){const R=f[C]=b?ft(f[C]):ze(f[C]);x(null,R,p,_,y,m,w,T,b)}},_e=(f,p,_,y,m,w,T)=>{const b=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:R}=p;I|=f.patchFlag&16;const N=f.props||K,A=p.props||K;let D;_&&It(_,!1),(D=A.onVnodeBeforeUpdate)&&je(D,_,p,f),R&&wt(p,f,_,"beforeUpdate"),_&&It(_,!0);const W=m&&p.type!=="foreignObject";if(C?ce(f.dynamicChildren,C,b,_,y,W,w):T||Ye(f,p,b,null,_,y,W,w,!1),I>0){if(I&16)Re(b,p,N,A,_,y,m);else if(I&2&&N.class!==A.class&&r(b,"class",null,A.class,m),I&4&&r(b,"style",N.style,A.style,m),I&8){const ne=p.dynamicProps;for(let z=0;z<ne.length;z++){const J=ne[z],Fe=N[J],Kt=A[J];(Kt!==Fe||J==="value")&&r(b,J,Fe,Kt,m,f.children,_,y,Qe)}}I&1&&f.children!==p.children&&u(b,p.children)}else!T&&C==null&&Re(b,p,N,A,_,y,m);((D=A.onVnodeUpdated)||R)&&we(()=>{D&&je(D,_,p,f),R&&wt(p,f,_,"updated")},y)},ce=(f,p,_,y,m,w,T)=>{for(let b=0;b<p.length;b++){const I=f[b],C=p[b],R=I.el&&(I.type===qe||!xt(I,C)||I.shapeFlag&70)?h(I.el):_;x(I,C,R,null,y,m,w,T,!0)}},Re=(f,p,_,y,m,w,T)=>{if(_!==y){for(const b in y){if(ds(b))continue;const I=y[b],C=_[b];I!==C&&b!=="value"&&r(f,b,C,I,T,p.children,m,w,Qe)}if(_!==K)for(const b in _)!ds(b)&&!(b in y)&&r(f,b,_[b],null,T,p.children,m,w,Qe);"value"in y&&r(f,"value",_.value,y.value)}},lt=(f,p,_,y,m,w,T,b,I)=>{const C=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:D}=p;D&&(b=b?b.concat(D):D),f==null?(s(C,_,y),s(R,_,y),q(p.children,_,R,m,w,T,b,I)):N>0&&N&64&&A&&f.dynamicChildren?(ce(f.dynamicChildren,A,_,m,w,T,b),(p.key!=null||m&&p===m.subTree)&&za(f,p,!0)):Ye(f,p,_,R,m,w,T,b,I)},at=(f,p,_,y,m,w,T,b,I)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,I):ye(p,_,y,m,w,T,I):be(f,p,I)},ye=(f,p,_,y,m,w,T)=>{const b=f.component=Vf(f,y,m);if(Js(f)&&(b.ctx.renderer=zt),jf(b),b.asyncDep){if(m&&m.registerDep(b,ie),!f.el){const I=b.subTree=Ze(Ge);ae(null,I,p,_)}return}ie(b,f,p,_,m,w,T)},be=(f,p,_)=>{const y=p.component=f.component;if(Yh(f,p,_))if(y.asyncDep&&!y.asyncResolved){X(y,p,_);return}else y.next=p,$h(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ie=(f,p,_,y,m,w,T)=>{const b=()=>{if(f.isMounted){let{next:R,bu:N,u:A,parent:D,vnode:W}=f,ne=R,z;It(f,!1),R?(R.el=W.el,X(f,R,T)):R=W,N&&ps(N),(z=R.props&&R.props.onVnodeBeforeUpdate)&&je(z,D,R,W),It(f,!0);const J=gi(f),Fe=f.subTree;f.subTree=J,x(Fe,J,h(Fe.el),rs(Fe),f,m,w),R.el=J.el,ne===null&&Qh(f,J.el),A&&we(A,m),(z=R.props&&R.props.onVnodeUpdated)&&we(()=>je(z,D,R,W),m)}else{let R;const{el:N,props:A}=p,{bm:D,m:W,parent:ne}=f,z=Hi(p);if(It(f,!1),D&&ps(D),!z&&(R=A&&A.onVnodeBeforeMount)&&je(R,ne,p),It(f,!0),N&&pi){const J=()=>{f.subTree=gi(f),pi(N,f.subTree,f,m,null)};z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&J()):J()}else{const J=f.subTree=gi(f);x(null,J,_,y,f,m,w),p.el=J.el}if(W&&we(W,m),!z&&(R=A&&A.onVnodeMounted)){const J=p;we(()=>je(R,ne,J),m)}p.shapeFlag&256&&f.a&&we(f.a,m),f.isMounted=!0,p=_=y=null}},I=f.effect=new Ir(b,()=>Ia(f.update),f.scope),C=f.update=I.run.bind(I);C.id=f.uid,It(f,!0),C()},X=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Ef(f,p.props,y,_),If(f,p.children,_),_n(),Pr(void 0,f.update),gn()},Ye=(f,p,_,y,m,w,T,b,I=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:D}=p;if(A>0){if(A&128){En(C,N,_,y,m,w,T,b,I);return}else if(A&256){fi(C,N,_,y,m,w,T,b,I);return}}D&8?(R&16&&Qe(C,m,w),N!==C&&u(_,N)):R&16?D&16?En(C,N,_,y,m,w,T,b,I):Qe(C,m,w,!0):(R&8&&u(_,""),D&16&&q(N,_,y,m,w,T,b,I))},fi=(f,p,_,y,m,w,T,b,I)=>{f=f||Zt,p=p||Zt;const C=f.length,R=p.length,N=Math.min(C,R);let A;for(A=0;A<N;A++){const D=p[A]=I?ft(p[A]):ze(p[A]);x(f[A],D,_,null,m,w,T,b,I)}C>R?Qe(f,m,w,!0,!1,N):q(p,_,y,m,w,T,b,I,N)},En=(f,p,_,y,m,w,T,b,I)=>{let C=0;const R=p.length;let N=f.length-1,A=R-1;for(;C<=N&&C<=A;){const D=f[C],W=p[C]=I?ft(p[C]):ze(p[C]);if(xt(D,W))x(D,W,_,null,m,w,T,b,I);else break;C++}for(;C<=N&&C<=A;){const D=f[N],W=p[A]=I?ft(p[A]):ze(p[A]);if(xt(D,W))x(D,W,_,null,m,w,T,b,I);else break;N--,A--}if(C>N){if(C<=A){const D=A+1,W=D<R?p[D].el:y;for(;C<=A;)x(null,p[C]=I?ft(p[C]):ze(p[C]),_,W,m,w,T,b,I),C++}}else if(C>A)for(;C<=N;)ct(f[C],m,w,!0),C++;else{const D=C,W=C,ne=new Map;for(C=W;C<=A;C++){const Ae=p[C]=I?ft(p[C]):ze(p[C]);Ae.key!=null&&ne.set(Ae.key,C)}let z,J=0;const Fe=A-W+1;let Kt=!1,wo=0;const bn=new Array(Fe);for(C=0;C<Fe;C++)bn[C]=0;for(C=D;C<=N;C++){const Ae=f[C];if(J>=Fe){ct(Ae,m,w,!0);continue}let Ve;if(Ae.key!=null)Ve=ne.get(Ae.key);else for(z=W;z<=A;z++)if(bn[z-W]===0&&xt(Ae,p[z])){Ve=z;break}Ve===void 0?ct(Ae,m,w,!0):(bn[Ve-W]=C+1,Ve>=wo?wo=Ve:Kt=!0,x(Ae,p[Ve],_,null,m,w,T,b,I),J++)}const Io=Kt?Rf(bn):Zt;for(z=Io.length-1,C=Fe-1;C>=0;C--){const Ae=W+C,Ve=p[Ae],To=Ae+1<R?p[Ae+1].el:y;bn[C]===0?x(null,Ve,_,To,m,w,T,b,I):Kt&&(z<0||C!==Io[z]?qt(Ve,_,To,2):z--)}}},qt=(f,p,_,y,m=null)=>{const{el:w,type:T,transition:b,children:I,shapeFlag:C}=f;if(C&6){qt(f.component.subTree,p,_,y);return}if(C&128){f.suspense.move(p,_,y);return}if(C&64){T.move(f,p,_,zt);return}if(T===qe){s(w,p,_);for(let N=0;N<I.length;N++)qt(I[N],p,_,y);s(f.anchor,p,_);return}if(T===yi){ee(f,p,_);return}if(y!==2&&C&1&&b)if(y===0)b.beforeEnter(w),s(w,p,_),we(()=>b.enter(w),m);else{const{leave:N,delayLeave:A,afterLeave:D}=b,W=()=>s(w,p,_),ne=()=>{N(w,()=>{W(),D&&D()})};A?A(w,W,ne):ne()}else s(w,p,_)},ct=(f,p,_,y=!1,m=!1)=>{const{type:w,props:T,ref:b,children:I,dynamicChildren:C,shapeFlag:R,patchFlag:N,dirs:A}=f;if(b!=null&&ji(b,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const D=R&1&&A,W=!Hi(f);let ne;if(W&&(ne=T&&T.onVnodeBeforeUnmount)&&je(ne,p,f),R&6)Lu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}D&&wt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,zt,y):C&&(w!==qe||N>0&&N&64)?Qe(C,p,_,!1,!0):(w===qe&&N&384||!m&&R&16)&&Qe(I,p,_),y&&Eo(f)}(W&&(ne=T&&T.onVnodeUnmounted)||D)&&we(()=>{ne&&je(ne,p,f),D&&wt(f,null,p,"unmounted")},_)},Eo=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===qe){Fu(_,y);return}if(p===yi){te(f);return}const w=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:b}=m,I=()=>T(_,w);b?b(f.el,w,I):I()}else w()},Fu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Lu=(f,p,_)=>{const{bum:y,scope:m,update:w,subTree:T,um:b}=f;y&&ps(y),m.stop(),w&&(w.active=!1,ct(T,f,p,_)),b&&we(b,p),we(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,_,y=!1,m=!1,w=0)=>{for(let T=w;T<f.length;T++)ct(f[T],p,_,y,m)},rs=f=>f.shapeFlag&6?rs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),bo=(f,p,_)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,_),Na(),p._vnode=f},zt={p:x,um:ct,m:qt,r:Eo,mt:ye,mc:q,pc:Ye,pbc:ce,n:rs,o:t};let di,pi;return e&&([di,pi]=e(zt)),{render:bo,hydrate:di,createApp:Sf(bo,di)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function za(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ft(i[r]),l.el=o.el),n||za(o,l))}}function Rf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Af=t=>t.__isTeleport,Pf=Symbol(),qe=Symbol(void 0),Dr=Symbol(void 0),Ge=Symbol(void 0),yi=Symbol(void 0),Pn=[];let Mt=null;function Of(t=!1){Pn.push(Mt=t?null:[])}function kf(){Pn.pop(),Mt=Pn[Pn.length-1]||null}let bs=1;function Ko(t){bs+=t}function Ka(t){return t.dynamicChildren=bs>0?Mt||Zt:null,kf(),bs>0&&Mt&&Mt.push(t),t}function my(t,e,n,s,i,r){return Ka(Ya(t,e,n,s,i,r,!0))}function Df(t,e,n,s,i){return Ka(Ze(t,e,n,s,i,!0))}function Mf(t){return t?t.__v_isVNode===!0:!1}function xt(t,e){return t.type===e.type&&t.key===e.key}const ei="__vInternal",Ga=({key:t})=>t!=null?t:null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||re(t)||L(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function Ya(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ga(e),ref:e&&ms(e),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Mr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),bs>0&&!o&&Mt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Mt.push(a),a}const Ze=Ff;function Ff(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Pf)&&(t=Ge),Mf(t)){const l=cn(t,e,!0);return n&&Mr(l,n),l}if(Gf(t)&&(t=t.__vccOpts),e){e=Lf(e);let{class:l,style:a}=e;l&&!pe(l)&&(e.class=yr(l)),le(a)&&(ma(a)&&!k(a)&&(a=ve({},a)),e.style=mr(a))}const o=pe(t)?1:Xh(t)?128:Af(t)?64:le(t)?4:L(t)?2:0;return Ya(t,e,n,s,i,o,r,!0)}function Lf(t){return t?ma(t)||ei in t?ve({},t):t:null}function cn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Uf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ga(l),ref:e&&e.ref?n&&i?k(i)?i.concat(ms(e)):[i,ms(e)]:ms(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor}}function Bf(t=" ",e=0){return Ze(Dr,null,t,e)}function yy(t="",e=!1){return e?(Of(),Df(Ge,null,t)):Ze(Ge,null,t)}function ze(t){return t==null||typeof t=="boolean"?Ze(Ge):k(t)?Ze(qe,null,t.slice()):typeof t=="object"?ft(t):Ze(Dr,null,String(t))}function ft(t){return t.el===null||t.memo?t:cn(t)}function Mr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Mr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ei in e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[Bf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yr([e.class,s.class]));else if(i==="style")e.style=mr([e.style,s.style]);else if(js(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function je(t,e,n,s=null){Me(t,e,7,[n,s])}function Cy(t,e,n,s){let i;const r=n&&n[s];if(k(t)||pe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(le(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const qi=t=>t?Xa(t)?Fr(t)||t.proxy:qi(t.parent):null,ws=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qi(t.parent),$root:t=>qi(t.root),$emit:t=>t.emit,$options:t=>Ua(t),$forceUpdate:t=>()=>Ia(t.update),$nextTick:t=>wa.bind(t.proxy),$watch:t=>ef.bind(t)}),Hf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==K&&$(s,e))return o[e]=1,s[e];if(i!==K&&$(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,r[e];if(n!==K&&$(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=ws[e];let h,d;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&$(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,$(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==K&&$(i,e)?(i[e]=n,!0):s!==K&&$(s,e)?(s[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&$(t,o)||e!==K&&$(e,o)||(l=r[0])&&$(l,o)||$(s,o)||$(ws,o)||$(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Wf=qa();let $f=0;function Vf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wf,r={uid:$f++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wa(s,i),emitsOptions:Ra(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qh.bind(null,r),t.ce&&t.ce(r),r}let me=null;const Qa=()=>me||Be,un=t=>{me=t,t.scope.on()},Ft=()=>{me&&me.scope.off(),me=null};function Xa(t){return t.vnode.shapeFlag&4}let Wn=!1;function jf(t,e=!1){Wn=e;const{props:n,children:s}=t.vnode,i=Xa(t);vf(t,n,i,e),wf(t,s);const r=i?qf(t,e):void 0;return Wn=!1,r}function qf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=an(new Proxy(t.ctx,Hf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Kf(t):null;un(t),_n();const r=gt(s,t,0,[t.props,i]);if(gn(),Ft(),Zl(r)){if(r.then(Ft,Ft),e)return r.then(o=>{Go(t,o,e)}).catch(o=>{Qs(o,t,0)});t.asyncDep=r}else Go(t,r,e)}else Ja(t,e)}function Go(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ea(e)),Ja(t,n)}let Yo;function Ja(t,e,n){const s=t.type;if(!t.render){if(!e&&Yo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ve(ve({isCustomElement:r,delimiters:l},o),a);s.render=Yo(i,c)}}t.render=s.render||We}un(t),_n(),_f(t),gn(),Ft()}function zf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Kf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zf(t))},slots:t.slots,emit:t.emit,expose:e}}function Fr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ea(an(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ws)return ws[n](t)}}))}function Gf(t){return L(t)&&"__vccOpts"in t}const Za=(t,e)=>Uh(t,e,Wn),Yf="3.2.31",Qf="http://www.w3.org/2000/svg",Rt=typeof document!="undefined"?document:null,Qo=Rt&&Rt.createElement("template"),Xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Rt.createElementNS(Qf,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Qo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Qo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zf(t,e,n){const s=t.style,i=pe(n);if(n&&!i){for(const r in n)zi(s,r,n[r]);if(e&&!pe(e))for(const r in e)n[r]==null&&zi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Xo=/\s*!important$/;function zi(t,e,n){if(k(n))n.forEach(s=>zi(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=ed(t,e);Xo.test(n)?t.setProperty(Vt(s),n.replace(Xo,""),"important"):t[s]=n}}const Jo=["Webkit","Moz","ms"],Ci={};function ed(t,e){const n=Ci[e];if(n)return n;let s=ln(e);if(s!=="filter"&&s in t)return Ci[e]=s;s=na(s);for(let i=0;i<Jo.length;i++){const r=Jo[i]+s;if(r in t)return Ci[e]=r}return e}const Zo="http://www.w3.org/1999/xlink";function td(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zo,e.slice(6,e.length)):t.setAttributeNS(Zo,e,n);else{const r=ju(e);n==null||r&&!Ql(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function nd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=Ql(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Is=Date.now,ec=!1;if(typeof window!="undefined"){Is()>document.createEvent("Event").timeStamp&&(Is=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ec=!!(t&&Number(t[1])<=53)}let Ki=0;const sd=Promise.resolve(),id=()=>{Ki=0},rd=()=>Ki||(sd.then(id),Ki=Is());function At(t,e,n,s){t.addEventListener(e,n,s)}function od(t,e,n,s){t.removeEventListener(e,n,s)}function ld(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=ad(e);if(s){const c=r[e]=cd(s,i);At(t,l,c,a)}else o&&(od(t,l,o,a),r[e]=void 0)}}const el=/(?:Once|Passive|Capture)$/;function ad(t){let e;if(el.test(t)){e={};let n;for(;n=t.match(el);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Vt(t.slice(2)),e]}function cd(t,e){const n=s=>{const i=s.timeStamp||Is();(ec||i>=n.attached-1)&&Me(ud(s,n.value),e,5,[s])};return n.value=t,n.attached=rd(),n}function ud(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tl=/^on[a-z]/,hd=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Jf(t,s,i):e==="style"?Zf(t,n,s):js(e)?Cr(e)||ld(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fd(t,e,s,i))?nd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),td(t,e,s,i))};function fd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&tl.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||tl.test(e)&&pe(n)?!1:e in t}const dd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};sf.props;const Ts=t=>{const e=t.props["onUpdate:modelValue"];return k(e)?n=>ps(e,n):e};function pd(t){t.target.composing=!0}function nl(t){const e=t.target;e.composing&&(e.composing=!1,_d(e,"input"))}function _d(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const vy={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ts(i);const r=s||i.props&&i.props.type==="number";At(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Pi(l)),t._assign(l)}),n&&At(t,"change",()=>{t.value=t.value.trim()}),e||(At(t,"compositionstart",pd),At(t,"compositionend",nl),At(t,"change",nl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ts(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Pi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ey={deep:!0,created(t,e,n){t._assign=Ts(n),At(t,"change",()=>{const s=t._modelValue,i=gd(t),r=t.checked,o=t._assign;if(k(s)){const l=Xl(s,i),a=l!==-1;if(r&&!a)o(s.concat(i));else if(!r&&a){const c=[...s];c.splice(l,1),o(c)}}else if(qs(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(tc(t,r))})},mounted:sl,beforeUpdate(t,e,n){t._assign=Ts(n),sl(t,e,n)}};function sl(t,{value:e,oldValue:n},s){t._modelValue=e,k(e)?t.checked=Xl(e,s.props.value)>-1:qs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Vs(e,tc(t,!0)))}function gd(t){return"_value"in t?t._value:t.value}function tc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const md={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},by=(t,e)=>n=>{if(!("key"in n))return;const s=Vt(n.key);if(e.some(i=>i===s||md[i]===s))return t(n)},yd=ve({patchProp:hd},Xf);let il;function Cd(){return il||(il=Nf(yd))}const wy=(...t)=>{const e=Cd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=vd(s);if(!i)return;const r=e._component;!L(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function vd(t){return pe(t)?document.querySelector(t):t}var Ed=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let nc;const ti=t=>nc=t,sc=Symbol();function Gi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var On;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(On||(On={}));function Iy(){const t=ia(!0),e=t.run(()=>va({}));let n=[],s=[];const i=an({install(r){ti(i),i._a=r,r.provide(sc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Ed?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ic=()=>{};function rl(t,e,n,s=ic){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&sh()&&ih(i),i}function Gt(t,...e){t.slice().forEach(n=>{n(...e)})}function Yi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Gi(i)&&Gi(s)&&t.hasOwnProperty(n)&&!re(s)&&!_t(s)?t[n]=Yi(i,s):t[n]=s}return t}const bd=Symbol();function wd(t){return!Gi(t)||!t.hasOwnProperty(bd)}const{assign:dt}=Object;function Id(t){return!!(re(t)&&t.effect)}function Td(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Mh(n.state.value[t]);return dt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=an(Za(()=>{ti(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return a=rc(t,c,e,n,s,!0),a.$reset=function(){const h=i?i():{};this.$patch(d=>{dt(d,h)})},a}function rc(t,e,n={},s,i,r){let o;const l=dt({actions:{}},n),a={deep:!0};let c,u,h=an([]),d=an([]),g;const v=s.state.value[t];!r&&!v&&(s.state.value[t]={}),va({});let S;function x(P){let M;c=u=!1,typeof P=="function"?(P(s.state.value[t]),M={type:On.patchFunction,storeId:t,events:g}):(Yi(s.state.value[t],P),M={type:On.patchObject,payload:P,storeId:t,events:g});const q=S=Symbol();wa().then(()=>{S===q&&(c=!0)}),u=!0,Gt(h,M,s.state.value[t])}const F=ic;function ae(){o.stop(),h=[],d=[],s._s.delete(t)}function se(P,M){return function(){ti(s);const q=Array.from(arguments),_e=[],ce=[];function Re(ye){_e.push(ye)}function lt(ye){ce.push(ye)}Gt(d,{args:q,name:P,store:te,after:Re,onError:lt});let at;try{at=M.apply(this&&this.$id===t?this:te,q)}catch(ye){throw Gt(ce,ye),ye}return at instanceof Promise?at.then(ye=>(Gt(_e,ye),ye)).catch(ye=>(Gt(ce,ye),Promise.reject(ye))):(Gt(_e,at),at)}}const ee={_p:s,$id:t,$onAction:rl.bind(null,d),$patch:x,$reset:F,$subscribe(P,M={}){const q=rl(h,P,M.detached,()=>_e()),_e=o.run(()=>gs(()=>s.state.value[t],ce=>{(M.flush==="sync"?u:c)&&P({storeId:t,type:On.direct,events:g},ce)},dt({},a,M)));return q},$dispose:ae},te=Ys(ee);s._s.set(t,te);const xe=s._e.run(()=>(o=ia(),o.run(()=>e())));for(const P in xe){const M=xe[P];if(re(M)&&!Id(M)||_t(M))r||(v&&wd(M)&&(re(M)?M.value=v[P]:Yi(M,v[P])),s.state.value[t][P]=M);else if(typeof M=="function"){const q=se(P,M);xe[P]=q,l.actions[P]=M}}return dt(te,xe),dt(V(te),xe),Object.defineProperty(te,"$state",{get:()=>s.state.value[t],set:P=>{x(M=>{dt(M,P)})}}),s._p.forEach(P=>{dt(te,o.run(()=>P({store:te,app:s._a,pinia:s,options:l})))}),v&&r&&n.hydrate&&n.hydrate(te.$state,v),c=!0,u=!0,te}function Ty(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=Qa();return l=l||c&&_s(sc,null),l&&ti(l),l=nc,l._s.has(s)||(r?rc(s,e,i,l):Td(s,i,l)),l._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw mn(e)},mn=function(t){return new Error("Firebase Database ("+oc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Lr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ac=function(t){const e=lc(t);return Lr.encodeByteArray(e,!0)},Ss=function(t){return ac(t).replace(/\./g,"")},Qi=function(t){try{return Lr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return cc(void 0,t)}function cc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xd(n)||(t[n]=cc(t[n],e[n]));return t}function xd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rd())}function Ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hc(){return oc.NODE_ADMIN===!0}function Pd(){return typeof indexedDB=="object"}function Od(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function kd(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=()=>kd().__FIREBASE_DEFAULTS__,Md=()=>{!(typeof process=="undefined"||typeof process.env=="undefined")},Fd=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qi(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return Dd()||Md()||Fd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ld=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bd=t=>{const e=Ld(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ud=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ss(JSON.stringify(n)),Ss(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="FirebaseError";class Jn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Wd,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dc.prototype.create)}}class dc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?$d(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,l,s)}}function $d(t,e){return t.replace(Vd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Vd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$n(Qi(r[0])||""),n=$n(Qi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},jd=function(t){const e=pc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qd=function(t){const e=pc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ll(r)&&ll(o)){if(!Xi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ll(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Br(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},si=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ni;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xd(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qd(t){return t===St?void 0:t}function Xd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Zd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},ep=Y.INFO,tp={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},np=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=tp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=ep,this._logHandler=np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const sp=(t,e)=>e.some(n=>t instanceof n);let al,cl;function ip(){return al||(al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return cl||(cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,Ji=new WeakMap,mc=new WeakMap,vi=new WeakMap,Ur=new WeakMap;function op(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gc.set(n,t)}).catch(()=>{}),Ur.set(e,t),e}function lp(t){if(Ji.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ji.set(t,e)}let Zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ap(t){Zi=t(Zi)}function cp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ei(this),e,...n);return mc.set(s,e.sort?e.sort():[e]),mt(s)}:rp().includes(t)?function(...e){return t.apply(Ei(this),e),mt(gc.get(this))}:function(...e){return mt(t.apply(Ei(this),e))}}function up(t){return typeof t=="function"?cp(t):(t instanceof IDBTransaction&&lp(t),sp(t,ip())?new Proxy(t,Zi):t)}function mt(t){if(t instanceof IDBRequest)return op(t);if(vi.has(t))return vi.get(t);const e=up(t);return e!==t&&(vi.set(t,e),Ur.set(e,t)),e}const Ei=t=>Ur.get(t);function hp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(mt(o.result),a.oldVersion,a.newVersion,mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const fp=["get","getKey","getAll","getAllKeys","count"],dp=["put","add","delete","clear"],bi=new Map;function ul(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=dp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return bi.set(e,r),r}ap(t=>Ro(xo({},t),{get:(e,n,s)=>ul(e,n)||t.get(e,n,s),has:(e,n)=>!!ul(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_p(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _p(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const er="@firebase/app",hl="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new _c("@firebase/app"),gp="@firebase/app-compat",mp="@firebase/analytics-compat",yp="@firebase/analytics",Cp="@firebase/app-check-compat",vp="@firebase/app-check",Ep="@firebase/auth",bp="@firebase/auth-compat",wp="@firebase/database",Ip="@firebase/database-compat",Tp="@firebase/functions",Sp="@firebase/functions-compat",Np="@firebase/installations",xp="@firebase/installations-compat",Rp="@firebase/messaging",Ap="@firebase/messaging-compat",Pp="@firebase/performance",Op="@firebase/performance-compat",kp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Mp="@firebase/storage",Fp="@firebase/storage-compat",Lp="@firebase/firestore",Bp="@firebase/firestore-compat",Up="firebase",Hp="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]",Wp={[er]:"fire-core",[gp]:"fire-core-compat",[yp]:"fire-analytics",[mp]:"fire-analytics-compat",[vp]:"fire-app-check",[Cp]:"fire-app-check-compat",[Ep]:"fire-auth",[bp]:"fire-auth-compat",[wp]:"fire-rtdb",[Ip]:"fire-rtdb-compat",[Tp]:"fire-fn",[Sp]:"fire-fn-compat",[Np]:"fire-iid",[xp]:"fire-iid-compat",[Rp]:"fire-fcm",[Ap]:"fire-fcm-compat",[Pp]:"fire-perf",[Op]:"fire-perf-compat",[kp]:"fire-rc",[Dp]:"fire-rc-compat",[Mp]:"fire-gcs",[Fp]:"fire-gcs-compat",[Lp]:"fire-fst",[Bp]:"fire-fst-compat","fire-js":"fire-js",[Up]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map,nr=new Map;function $p(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(nr.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;nr.set(e,t);for(const n of xs.values())$p(n,t);return!0}function Vp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new dc("app","Firebase",jp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=Hp;function Kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(n||(n=Ud()),!n)throw yt.create("no-options");const r=xs.get(i);if(r){if(Xi(n,r.options)&&Xi(s,r.config))return r;throw yt.create("duplicate-app",{appName:i})}const o=new Jd(i);for(const a of nr.values())o.addComponent(a);const l=new qp(n,s,o);return xs.set(i,l),l}function Gp(t=tr){const e=xs.get(t);if(!e&&t===tr)return Kp();if(!e)throw yt.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=Wp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(l.join(" "));return}Rs(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebase-heartbeat-database",Qp=1,jn="firebase-heartbeat-store";let wi=null;function yc(){return wi||(wi=hp(Yp,Qp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),wi}async function Xp(t){var e;try{return(await yc()).transaction(jn).objectStore(jn).get(Cc(t))}catch(n){if(n instanceof Jn)Bt.warn(n.message);else{const s=yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bt.warn(s.message)}}}async function fl(t,e){var n;try{const i=(await yc()).transaction(jn,"readwrite");return await i.objectStore(jn).put(e,Cc(t)),i.done}catch(s){if(s instanceof Jn)Bt.warn(s.message);else{const i=yt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bt.warn(i.message)}}}function Cc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=1024,Zp=30*24*60*60*1e3;class e_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Zp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dl(),{heartbeatsToSend:n,unsentEntries:s}=t_(this._heartbeatsCache.heartbeats),i=Ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dl(){return new Date().toISOString().substring(0,10)}function t_(t,e=Jp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),pl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class n_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pl(t){return Ss(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){Rs(new Vn("platform-logger",e=>new pp(e),"PRIVATE")),Rs(new Vn("heartbeat",e=>new e_(e),"PRIVATE")),tn(er,hl,t),tn(er,hl,"esm2017"),tn("fire-js","")}s_("");const _l="@firebase/database",gl="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc="";function i_(t){vc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$n(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new r_(e)}}catch{}return new o_},Ot=Ec("localStorage"),sr=Ec("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new _c("@firebase/database"),l_=function(){let t=1;return function(){return t++}}(),bc=function(t){const e=Gd(t),n=new Kd;n.update(e);const s=n.digest();return Lr.encodeByteArray(s)},es=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=es.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Lt=null,ml=!0;const a_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nn.logLevel=Y.VERBOSE,Lt=nn.log.bind(nn),e&&sr.set("logging_enabled",!0)):typeof t=="function"?Lt=t:(Lt=null,sr.remove("logging_enabled"))},Ce=function(...t){if(ml===!0&&(ml=!1,Lt===null&&sr.get("logging_enabled")===!0&&a_(!0)),Lt){const e=es.apply(null,t);Lt(e)}},ts=function(t){return function(...e){Ce(t,...e)}},ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+es(...t);nn.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${es(...t)}`;throw nn.error(e),new Error(e)},Se=function(...t){const e="FIREBASE WARNING: "+es(...t);nn.warn(e)},c_=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},u_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",Ut="[MAX_NAME]",yn=function(t,e){if(t===e)return 0;if(t===fn||e===Ut)return-1;if(e===fn||t===Ut)return 1;{const n=yl(t),s=yl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},h_=function(t,e){return t===e?0:t<e?-1:1},wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Hr=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=Hr(t[e[s]]);return n+="}",n},Ic=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tc=function(t){E(!wc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},f_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},d_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function p_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const __=new RegExp("^-?(0*)\\d{1,10}$"),g_=-2147483648,m_=2147483647,yl=function(t){if(__.test(t)){const e=Number(t);if(e>=g_&&e<=m_)return e}return null},Cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Se("Exception was thrown by user callback.",n),e},Math.floor(0))}},y_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Se(e)}}class sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="5",Sc="v",Nc="s",xc="r",Rc="f",Ac=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pc="ls",Oc="p",rr="ac",kc="websocket",Dc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function E_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===kc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);E_(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={},Ti={};function $r(t){const e=t.toString();return Ii[e]||(Ii[e]=new b_),Ii[e]}function w_(t,e){const n=t.toString();return Ti[n]||(Ti[n]=e()),Ti[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="start",T_="close",S_="pLPCommand",N_="pRTLPCB",Lc="id",Bc="pw",Uc="ser",x_="cb",R_="seg",A_="ts",P_="d",O_="dframe",Hc=1870,Wc=30,k_=Hc-Wc,D_=25e3,M_=3e4;class Jt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ts(e),this.stats_=$r(n),this.urlFn=a=>(this.appCheckToken&&(a[rr]=this.appCheckToken),Fc(n,Dc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(M_)),u_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cl)this.id=l,this.password=a;else if(o===T_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Cl]="t",s[Uc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[x_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Sc]=Wr,this.transportSessionId&&(s[Nc]=this.transportSessionId),this.lastSessionId&&(s[Pc]=this.lastSessionId),this.applicationId&&(s[Oc]=this.applicationId),this.appCheckToken&&(s[rr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ac.test(location.hostname)&&(s[xc]=Rc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!f_()&&!d_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ac(n),i=Ic(s,k_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[O_]="t",s[Lc]=e,s[Bc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=l_(),window[S_+this.uniqueCallbackIdentifier]=e,window[N_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lc]=this.myID,e[Bc]=this.myPW,e[Uc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wc+s.length<=Hc;){const o=this.pendingSegs.shift();s=s+"&"+R_+i+"="+o.seg+"&"+A_+i+"="+o.ts+"&"+P_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(D_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=16384,L_=45e3;let As=null;typeof MozWebSocket!="undefined"?As=MozWebSocket:typeof WebSocket!="undefined"&&(As=WebSocket);class Le{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ts(this.connId),this.stats_=$r(n),this.connURL=Le.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Sc]=Wr,typeof location!="undefined"&&location.hostname&&Ac.test(location.hostname)&&(o[xc]=Rc),n&&(o[Nc]=n),s&&(o[Pc]=s),i&&(o[rr]=i),r&&(o[Oc]=r),Fc(e,kc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ot.set("previous_websocket_failure",!0);try{let s;hc(),this.mySock=new As(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&As!==null&&!Le.forceDisallow_}static previouslyFailed(){return Ot.isInMemoryStorage||Ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$n(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ic(n,F_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(L_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let s=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||Se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Le];else{const i=this.transports_=[];for(const r of qn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=6e4,U_=5e3,H_=10*1024,W_=100*1024,Si="t",vl="d",$_="s",El="r",V_="e",bl="o",wl="a",Il="n",Tl="p",j_="h";class q_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ts("c:"+this.id+":"),this.transportManager_=new qn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=kn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>H_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Si in e){const n=e[Si];n===wl?this.upgradeIfSecondaryHealthy_():n===El?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wn("t",e),s=wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Il,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wn("t",e),s=wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wn(Si,e);if(vl in e){const s=e[vl];if(n===j_)this.onHandshake_(s);else if(n===Il){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$_?this.onConnectionShutdown_(s):n===El?this.onReset_(s):n===V_?ir("Server Error: "+s):n===bl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wr!==s&&Se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),kn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(B_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(U_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Vc{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!uc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ps}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=32,Nl=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new G("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Et(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function jc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function z_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ue(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return Ie(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jr(t,e){if(Et(t)!==Et(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Et(t)>Et(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class K_{constructor(e,n){this.errorPrefix_=n,this.parts_=qc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=si(this.parts_[s]);Kc(this)}}function G_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=si(e),Kc(t)}function Y_(t){const e=t.parts_.pop();t.byteLength_-=si(e),t.parts_.length>0&&(t.byteLength_-=1)}function Kc(t){if(t.byteLength_>Nl)throw new Error(t.errorPrefix_+"has a key path longer than "+Nl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sl+") or object contains a cycle "+Nt(t))}function Nt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Vc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=1e3,Q_=60*5*1e3,xl=30*1e3,X_=1.3,J_=3e4,Z_="server_kill",Rl=3;class et extends $c{constructor(e,n,s,i,r,o,l,a){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=et.nextPersistentConnectionId_++,this.log_=ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=In,this.maxReconnectDelay_=Q_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ps.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ni,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;et.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const s=hn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ir("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>J_&&(this.reconnectDelay_=In),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*X_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+et.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new q_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Se(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Z_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Se(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ol(this.interruptReasons_)&&(this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Hr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rl&&(this.reconnectDelay_=xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vc.replace(/\./g,"-")]=1,uc()?e["framework.cordova"]=1:Ad()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ps.getInstance().currentlyOnline();return ol(this.interruptReasons_)&&e}}et.nextPersistentConnectionId_=0;et.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(fn,e),i=new U(fn,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;class Gc extends ii{static get __EMPTY_NODE(){return hs}static set __EMPTY_NODE(e){hs=e}compare(e,n){return yn(e.name,n.name)}isDefinedOn(e){throw mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Ut,hs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,hs)}toString(){return".key"}}const rn=new Gc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:fe.RED,this.left=i!=null?i:Te.EMPTY_NODE,this.right=r!=null?r:Te.EMPTY_NODE}copy(e,n,s,i,r){return new fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class eg{copy(e,n,s,i,r){return this}insert(e,n,s){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,n=Te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fs(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new eg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){return yn(t.name,e.name)}function zr(t,e){return yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or;function ng(t){or=t}const Yc=function(t){return typeof t=="number"?"number:"+Tc(t):"string:"+t},Qc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else E(t===or||t.isEmpty(),"priority of unexpected type.");E(t===or||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qc(this.priorityNode_)}static set __childrenNodeConstructor(e){Al=e}static get __childrenNodeConstructor(){return Al}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:B(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tc(this.value_):e+=this.value_,this.lazyHash_=bc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),r=he.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc,Jc;function sg(t){Xc=t}function ig(t){Jc=t}class rg extends ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Ut,new he("[PRIORITY-POST]",Jc))}makePost(e,n){const s=Xc(e);return new U(n,new he("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new rg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=Math.log(2);class lg{constructor(e){const n=r=>parseInt(Math.log(r)/og,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Os=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new fe(d,h.node,fe.BLACK,null,null);{const g=parseInt(u/2,10)+a,v=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new fe(d,h.node,fe.BLACK,v,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(v,S){const x=h-v,F=h;h-=v;const ae=i(x+1,F),se=t[x],ee=n?n(se):se;g(new fe(ee,se.node,S,null,ae))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const S=a.nextBitIsOne(),x=Math.pow(2,a.count-(v+1));S?d(x,fe.BLACK):(d(x,fe.BLACK),d(x,fe.RED))}return u},o=new lg(t.length),l=r(o);return new Te(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;const Yt={};class Je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Yt&&oe,"ChildrenNode.ts has not been loaded"),Ni=Ni||new Je({".priority":Yt},{".priority":oe}),Ni}get(e){const n=hn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Te?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Os(s,e.getCompare()):l=Yt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Je(u,c)}addToIndexes(e,n){const s=Ns(this.indexes_,(i,r)=>{const o=hn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Yt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Os(l,o.getCompare())}else return Yt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ns(this.indexes_,i=>{if(i===Yt)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class O{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tn||(Tn=new O(new Te(zr),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tn:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tn:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{E(B(e)!==".priority"||Et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yc(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ns?-1:0}withIndex(e){if(e===rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ag extends O{constructor(){super(new Te(zr),O.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ns=new ag;Object.defineProperties(U,{MIN:{value:new U(fn,O.EMPTY_NODE)},MAX:{value:new U(Ut,ns)}});Gc.__EMPTY_NODE=O.EMPTY_NODE;he.__childrenNodeConstructor=O;ng(ns);ig(ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=!0;function ge(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ge(e))}if(!(t instanceof Array)&&cg){const n=[];let s=!1;if(Ne(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Os(n,tg,o=>o.name,zr);if(s){const o=Os(n,oe.getCompare());return new O(r,ge(e),new Je({".priority":o},{".priority":oe}))}else return new O(r,ge(e),Je.Default)}else{let n=O.EMPTY_NODE;return Ne(t,(s,i)=>{if(rt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}sg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends ii{constructor(e){super();this.indexPath_=e,E(!H(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ns);return new U(Ut,e)}toString(){return qc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=ge(e);return new U(n,s)}toString(){return".value"}}const fg=new hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return{type:"value",snapshotNode:t}}function dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Kn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(zn(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dn(n,s)):o.trackChildChange(Kn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(zn(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Kn(i,r,o))}else s.trackChildChange(dn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.indexedFilter_=new Kr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gn.getStartPost_(e),this.endPost_=Gn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.rangedFilter_=new Gn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new U(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Kn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(zn(n,h));const S=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(zn(c.name,c.node)),r.trackChildChange(dn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ut}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _g(t){return t.loadsAllData()?new Kr(t.getIndex()):t.hasLimit()?new pg(t):new Gn(t)}function Pl(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===fg?n="$value":t.index_===rn?n="$key":(E(t.index_ instanceof ug,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_&&(e.startAt=de(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+de(t.indexStartName_))),t.endSet_&&(e.endAt=de(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+de(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ol(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends $c{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ks.getListenId_(e,s),l={};this.listens_[o]=l;const a=Pl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),hn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ks.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pl(e._queryParams),s=e._path.toString(),i=new ni;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$n(l.responseText)}catch{Se("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Se("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return{value:null,children:new Map}}function eu(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,Ds());const i=t.children.get(s);e=Q(e),eu(i,e,n)}}function lr(t,e,n){t.value!==null?n(e,t.value):mg(t,(s,i)=>{const r=new G(e.toString()+"/"+s);lr(i,r,n)})}function mg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=10*1e3,Cg=30*1e3,vg=5*60*1e3;class Eg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yg(e);const s=kl+(Cg-kl)*Math.random();kn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ne(e,(i,r)=>{r>0&&rt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),kn(this.reportStats_.bind(this),Math.floor(Math.random()*2*vg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function tu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=tu()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Ms(j(),n,this.revert)}}else return E(B(this.path)===e,"operationForChild called for unrelated child."),new Ms(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Yn(this.source,j()):new Yn(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return H(this.path)?new Ht(this.source,j(),this.snap.getImmediateChild(e)):new Ht(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Ht(this.source,j(),n.value):new Qn(this.source,j(),n)}else return E(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dg(o.childName,o.snapshotNode))}),Sn(t,i,"child_removed",e,s,n),Sn(t,i,"child_added",e,s,n),Sn(t,i,"child_moved",r,s,n),Sn(t,i,"child_changed",e,s,n),Sn(t,i,"value",e,s,n),i}function Sn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Tg(t,l,a)),o.forEach(l=>{const a=Ig(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ig(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Tg(t,e,n){if(e.childName==null||n.childName==null)throw mn("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return{eventCache:t,serverCache:e}}function Dn(t,e,n,s){return ri(new Wt(e,n,s),t.serverCache)}function nu(t,e,n,s){return ri(t.eventCache,new Wt(e,n,s))}function ar(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $t(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;const Sg=()=>(xi||(xi=new Te(h_)),xi);class Z{constructor(e,n=Sg()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Ne(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(H(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:ue(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new Z(null)}}set(e,n){if(H(e))return new Z(n,this.children);{const s=B(e),r=(this.children.get(s)||new Z(null)).set(Q(e),n),o=this.children.insert(s,r);return new Z(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(H(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(H(e))return n;{const s=B(e),r=(this.children.get(s)||new Z(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Z(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ue(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(H(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ue(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(H(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),ue(n,i),s):new Z(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ue(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new Z(null))}}function Mn(t,e,n){if(H(e))return new $e(new Z(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ie(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new Z(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function Dl(t,e,n){let s=t;return Ne(n,(i,r)=>{s=Mn(s,ue(e,i),r)}),s}function Ml(t,e){if(H(e))return $e.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new $e(n)}}function cr(t,e){return jt(t,e)!=null}function jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function Fl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function Ct(t,e){if(H(e))return t;{const n=jt(t,e);return n!=null?new $e(new Z(n)):new $e(t.writeTree_.subtree(e))}}function ur(t){return t.writeTree_.isEmpty()}function pn(t,e){return su(j(),t.writeTree_,e)}function su(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=su(ue(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ue(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){return lu(e,t)}function Ng(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Mn(t.visibleWrites,e,n)),t.lastWriteId=s}function xg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Rg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ag(l,s.path)?i=!1:Ue(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Pg(t),!0;if(s.snap)t.visibleWrites=Ml(t.visibleWrites,s.path);else{const l=s.children;Ne(l,a=>{t.visibleWrites=Ml(t.visibleWrites,ue(s.path,a))})}return!0}else return!1}function Ag(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(ue(t.path,n),e))return!0;return!1}function Pg(t){t.visibleWrites=iu(t.allWrites,Og,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Og(t){return t.visible}function iu(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=Ie(n,o),s=Mn(s,l,r.snap)):Ue(o,n)&&(l=Ie(o,n),s=Mn(s,j(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=Ie(n,o),s=Dl(s,l,r.children);else if(Ue(o,n))if(l=Ie(o,n),H(l))s=Dl(s,j(),r.children);else{const a=hn(r.children,B(l));if(a){const c=a.getChild(Q(l));s=Mn(s,j(),c)}}}else throw mn("WriteRecord should have .snap or .children")}}return s}function ru(t,e,n,s,i){if(!s&&!i){const r=jt(t.visibleWrites,e);if(r!=null)return r;{const o=Ct(t.visibleWrites,e);if(ur(o))return n;if(n==null&&!cr(o,j()))return null;{const l=n||O.EMPTY_NODE;return pn(o,l)}}}else{const r=Ct(t.visibleWrites,e);if(!i&&ur(r))return n;if(!i&&n==null&&!cr(r,j()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=iu(t.allWrites,o,e),a=n||O.EMPTY_NODE;return pn(l,a)}}}function kg(t,e,n){let s=O.EMPTY_NODE;const i=jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ct(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=pn(Ct(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),Fl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ct(t.visibleWrites,e);return Fl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ue(e,n);if(cr(t.visibleWrites,r))return null;{const o=Ct(t.visibleWrites,r);return ur(o)?i.getChild(n):pn(o,i.getChild(n))}}function Mg(t,e,n,s){const i=ue(e,n),r=jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ct(t.visibleWrites,i);return pn(o,s.getNode().getImmediateChild(n))}else return null}function Fg(t,e){return jt(t.visibleWrites,e)}function Lg(t,e,n,s,i,r,o){let l;const a=Ct(t.visibleWrites,e),c=jt(a,j());if(c!=null)l=c;else if(n!=null)l=pn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Bg(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function Fs(t,e,n,s){return ru(t.writeTree,t.treePath,e,n,s)}function Jr(t,e){return kg(t.writeTree,t.treePath,e)}function Ll(t,e,n,s){return Dg(t.writeTree,t.treePath,e,n,s)}function Ls(t,e){return Fg(t.writeTree,ue(t.treePath,e))}function Ug(t,e,n,s,i,r){return Lg(t.writeTree,t.treePath,e,n,s,i,r)}function Zr(t,e,n){return Mg(t.writeTree,t.treePath,e,n)}function ou(t,e){return lu(ue(t.treePath,e),t.writeTree)}function lu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Kn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,dn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Kn(s,e.snapshotNode,i.oldSnap));else throw mn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const au=new Wg;class eo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$t(this.viewCache_),r=Ug(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return{filter:t}}function Vg(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jg(t,e,n,s,i){const r=new Hg;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=hr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=Bs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=zg(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=Yg(t,e,c.path,s,i,r):o=Kg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=Gg(t,e,n.path,s,r);else throw mn("Unknown operation type: "+n.type);const a=r.getChanges();return qg(e,o,a),{viewCache:o,changes:a}}function qg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ar(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Zc(ar(e)))}}function cu(t,e,n,s,i,r){const o=e.eventCache;if(Ls(s,n)!=null)return e;{let l,a;if(H(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$t(e),u=c instanceof O?c:O.EMPTY_NODE,h=Jr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Fs(s,$t(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=B(n);if(c===".priority"){E(Et(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ll(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ll(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Zr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Dn(e,l,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Bs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(H(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=B(n);if(!a.isCompleteForPath(n)&&Et(n)>1)return e;const v=Q(n),x=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),g,x,v,au,null)}const h=nu(e,c,a.isFullyInitialized()||H(n),u.filtersNodes()),d=new eo(i,h,r);return cu(t,h,n,i,d,l)}function hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new eo(i,e,r);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Dn(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Dn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),g=l.getNode().getImmediateChild(h);let v;if(H(d))v=s;else{const S=u.getCompleteChild(h);S!=null?jc(d)===".priority"&&S.getChild(zc(d)).isEmpty()?v=S:v=S.updateChild(d,s):v=O.EMPTY_NODE}if(g.equals(v))a=e;else{const S=t.filter.updateChild(l.getNode(),h,v,d,u,o);a=Dn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Bl(t,e){return t.eventCache.isCompleteForChild(e)}function zg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ue(n,a);Bl(e,B(u))&&(l=hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ue(n,a);Bl(e,B(u))||(l=hr(t,l,u,c,i,r,o))}),l}function Ul(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;H(n)?c=s:c=new Z(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Ul(t,g,d);a=Bs(t,a,new G(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),S=Ul(t,v,d);a=Bs(t,a,new G(h),S,i,r,o,l)}}),a}function Kg(t,e,n,s,i,r,o){if(Ls(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(H(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Bs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(H(n)){let c=new Z(null);return a.getNode().forEachChild(rn,(u,h)=>{c=c.set(new G(u),h)}),fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new Z(null);return s.foreach((u,h)=>{const d=ue(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),fr(t,e,n,c,i,r,l,o)}}function Gg(t,e,n,s,i){const r=e.serverCache,o=nu(e,r.getNode(),r.isFullyInitialized()||H(n),r.isFiltered());return cu(t,o,n,s,au,i)}function Yg(t,e,n,s,i,r){let o;if(Ls(s,n)!=null)return e;{const l=new eo(s,e,i),a=e.eventCache.getNode();let c;if(H(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Fs(s,$t(e));else{const h=e.serverCache.getNode();E(h instanceof O,"serverChildren would be complete if leaf node"),u=Jr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=B(n);let h=Zr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Q(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,Q(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fs(s,$t(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ls(s,j())!=null,Dn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Kr(s.getIndex()),r=_g(s);this.processor_=$g(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Wt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ri(h,u),this.eventGenerator_=new bg(this.query_)}get query(){return this.query_}}function Xg(t){return t.viewCache_.serverCache.getNode()}function Jg(t,e){const n=$t(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Hl(t){return t.eventRegistrations_.length===0}function Zg(t,e){t.eventRegistrations_.push(e)}function Wl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function $l(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(E($t(t.viewCache_),"We should always have a full cache before handling merges"),E(ar(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jg(t.processor_,i,e,n,s);return Vg(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function em(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(dn(r,o))}),n.isFullyInitialized()&&s.push(Zc(n.getNode())),uu(t,s,n.getNode(),e)}function uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return wg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class tm{constructor(){this.views=new Map}}function nm(t){E(!Us,"__referenceConstructor has already been defined"),Us=t}function sm(){return E(Us,"Reference.ts has not been loaded"),Us}function im(t){return t.views.size===0}function to(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),$l(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat($l(o,e,n,s));return r}}function rm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Fs(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=Jr(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=ri(new Wt(l,a,!1),new Wt(s,i,!1));return new Qg(e,c)}return o}function om(t,e,n,s,i,r){const o=rm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Zg(o,n),em(o,n)}function lm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=bt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Wl(c,n,s)),Hl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Wl(a,n,s)),Hl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!bt(t)&&r.push(new(sm())(e._repo,e._path)),{removed:r,events:o}}function hu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function on(t,e){let n=null;for(const s of t.views.values())n=n||Jg(s,e);return n}function fu(t,e){if(e._queryParams.loadsAllData())return oi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function du(t,e){return fu(t,e)!=null}function bt(t){return oi(t)!=null}function oi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;function am(t){E(!Hs,"__referenceConstructor has already been defined"),Hs=t}function cm(){return E(Hs,"Reference.ts has not been loaded"),Hs}let um=1;class Vl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=Bg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pu(t,e,n,s,i){return Ng(t.pendingWriteTree_,e,n,s,i),i?ss(t,new Ht(tu(),e,n)):[]}function kt(t,e,n=!1){const s=xg(t.pendingWriteTree_,e);if(Rg(t.pendingWriteTree_,e)){let r=new Z(null);return s.snap!=null?r=r.set(j(),!0):Ne(s.children,o=>{r=r.set(new G(o),!0)}),ss(t,new Ms(s.path,r,n))}else return[]}function li(t,e,n){return ss(t,new Ht(Yr(),e,n))}function hm(t,e,n){const s=Z.fromObject(n);return ss(t,new Qn(Yr(),e,s))}function fm(t,e){return ss(t,new Yn(Yr(),e))}function dm(t,e,n){const s=so(t,n);if(s){const i=io(s),r=i.path,o=i.queryId,l=Ie(r,e),a=new Yn(Qr(o),l);return ro(t,r,a)}else return[]}function dr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||du(o,e))){const a=lm(o,e,n,s);im(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>bt(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=gm(d);for(let v=0;v<g.length;++v){const S=g[v],x=S.query,F=mu(t,S);t.listenProvider_.startListening(Fn(x),Ws(t,x),F.hashFn,F.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Fn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ai(d));t.listenProvider_.stopListening(Fn(d),g)}))}mm(t,c)}return l}function pm(t,e,n,s){const i=so(t,s);if(i!=null){const r=io(i),o=r.path,l=r.queryId,a=Ie(o,e),c=new Ht(Qr(l),a,n);return ro(t,o,c)}else return[]}function _m(t,e,n,s){const i=so(t,s);if(i){const r=io(i),o=r.path,l=r.queryId,a=Ie(o,e),c=Z.fromObject(n),u=new Qn(Qr(l),a,c);return ro(t,o,u)}else return[]}function jl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=Ie(d,i);r=r||on(g,v),o=o||bt(g)});let l=t.syncPointTree_.get(i);l?(o=o||bt(l),r=r||on(l,j())):(l=new tm,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const S=on(v,j());S&&(r=r.updateImmediateChild(g,S))}));const c=du(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ai(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=ym();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Xr(t.pendingWriteTree_,i);let h=om(l,e,n,u,r,a);if(!c&&!o&&!s){const d=fu(l,e);h=h.concat(Cm(t,e,d))}return h}function no(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ie(o,e),c=on(l,a);if(c)return c});return ru(i,e,r,n,!0)}function ss(t,e){return _u(e,t.syncPointTree_,null,Xr(t.pendingWriteTree_,j()))}function _u(t,e,n,s){if(H(t.path))return gu(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=on(i,j()));let r=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=ou(s,o);r=r.concat(_u(l,a,c,u))}return i&&(r=r.concat(to(i,t,s,n))),r}}function gu(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=on(i,j()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ou(s,o),u=t.operationForChild(o);u&&(r=r.concat(gu(u,l,a,c)))}),i&&(r=r.concat(to(i,t,s,n))),r}function mu(t,e){const n=e.query,s=Ws(t,n);return{hashFn:()=>(Xg(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?dm(t,n._path,s):fm(t,n._path);{const r=p_(i,n);return dr(t,n,null,r)}}}}function Ws(t,e){const n=ai(e);return t.queryToTagMap.get(n)}function ai(t){return t._path.toString()+"$"+t._queryIdentifier}function so(t,e){return t.tagToQueryMap.get(e)}function io(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function ro(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Xr(t.pendingWriteTree_,e);return to(s,n,i,null)}function gm(t){return t.fold((e,n,s)=>{if(n&&bt(n))return[oi(n)];{let i=[];return n&&(i=hu(n)),Ne(s,(r,o)=>{i=i.concat(o)}),i}})}function Fn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cm())(t._repo,t._path):t}function mm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ai(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ym(){return um++}function Cm(t,e,n){const s=e._path,i=Ws(t,e),r=mu(t,n),o=t.listenProvider_.startListening(Fn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!bt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!H(c)&&u&&bt(u))return[oi(u).query];{let d=[];return u&&(d=d.concat(hu(u).map(g=>g.query))),Ne(h,(g,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Fn(u),Ws(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new oo(n)}node(){return this.node_}}class lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new lo(this.syncTree_,n)}node(){return no(this.syncTree_,this.path_)}}const vm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ql=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Em(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Em=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},bm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wm=function(t,e,n,s){return ao(e,new lo(n,t),s)},yu=function(t,e,n){return ao(t,new oo(e),n)};function ao(t,e,n){const s=t.getPriority().val(),i=ql(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ql(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new he(i))),o.forEachChild(oe,(l,a)=>{const c=ao(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function uo(t,e){let n=e instanceof G?e:new G(e),s=t,i=B(n);for(;i!==null;){const r=hn(s.node.children,i)||{children:{},childCount:0};s=new co(i,s,r),n=Q(n),i=B(n)}return s}function vn(t){return t.node.value}function Cu(t,e){t.node.value=e,pr(t)}function vu(t){return t.node.childCount>0}function Im(t){return vn(t)===void 0&&!vu(t)}function ci(t,e){Ne(t.node.children,(n,s)=>{e(new co(n,t,s))})}function Eu(t,e,n,s){n&&!s&&e(t),ci(t,i=>{Eu(i,e,!0,s)}),n&&s&&e(t)}function Tm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function is(t){return new G(t.parent===null?t.name:is(t.parent)+"/"+t.name)}function pr(t){t.parent!==null&&Sm(t.parent,t.name,t)}function Sm(t,e,n){const s=Im(n),i=rt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,pr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=/[\[\].#$\/\u0000-\u001F\u007F]/,xm=/[\[\].#$\u0000-\u001F\u007F]/,Ri=10*1024*1024,bu=function(t){return typeof t=="string"&&t.length!==0&&!Nm.test(t)},wu=function(t){return typeof t=="string"&&t.length!==0&&!xm.test(t)},Rm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wu(t)},Am=function(t,e,n,s){s&&e===void 0||ho(Br(t,"value"),e,n)},ho=function(t,e,n){const s=n instanceof G?new K_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Nt(s)+" with contents = "+e.toString());if(wc(e))throw new Error(t+"contains "+e.toString()+" "+Nt(s));if(typeof e=="string"&&e.length>Ri/3&&si(e)>Ri)throw new Error(t+"contains a string greater than "+Ri+" utf8 bytes "+Nt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ne(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);G_(s,o),ho(t,l,s),Y_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Nt(s)+" in addition to actual children.")}},Iu=function(t,e,n,s){if(!(s&&n===void 0)&&!wu(n))throw new Error(Br(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Pm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(t,e,n,s)},Tu=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Om=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Rm(n))throw new Error(Br(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!jr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Su(t,e,n){fo(t,n),Nu(t,s=>jr(s,e))}function st(t,e,n){fo(t,n),Nu(t,s=>Ue(s,e)||Ue(e,s))}function Nu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Dm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Dm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Lt&&Ce("event: "+n.toString()),Cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="repo_interrupt",Fm=25;class Lm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new km,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ds(),this.transactionQueueTree_=new co,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Bm(t,e,n){if(t.stats_=$r(t.repoInfo_),t.forceRestClient_||y_())t.server_=new ks(t.repoInfo_,(s,i,r,o)=>{zl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Kl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new et(t.repoInfo_,e,(s,i,r,o)=>{zl(t,s,i,r,o)},s=>{Kl(t,s)},s=>{Hm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=w_(t.repoInfo_,()=>new Eg(t.stats_,t.server_)),t.infoData_=new gg,t.infoSyncTree_=new Vl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=li(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),_o(t,"connected",!1),t.serverSyncTree_=new Vl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);st(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Um(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function po(t){return vm({timestamp:Um(t)})}function zl(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ns(n,c=>ge(c));o=_m(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=pm(t.serverSyncTree_,r,a,i)}else if(s){const a=Ns(n,c=>ge(c));o=hm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=li(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ui(t,r)),st(t.eventQueue_,l,o)}function Kl(t,e){_o(t,"connected",e),e===!1&&$m(t)}function Hm(t,e){Ne(e,(n,s)=>{_o(t,n,s)})}function _o(t,e,n){const s=new G("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=li(t.infoSyncTree_,s,i);st(t.eventQueue_,s,r)}function xu(t){return t.nextWriteId_++}function Wm(t,e,n,s,i){go(t,"set",{path:e.toString(),value:n,priority:s});const r=po(t),o=ge(n,s),l=no(t.serverSyncTree_,e),a=yu(o,l,r),c=xu(t),u=pu(t.serverSyncTree_,e,a,c,!0);fo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||Se("set at "+e+" failed: "+d);const S=kt(t.serverSyncTree_,c,!v);st(t.eventQueue_,e,S),qm(t,i,d,g)});const h=ku(t,e);ui(t,h),st(t.eventQueue_,h,[])}function $m(t){go(t,"onDisconnectEvents");const e=po(t),n=Ds();lr(t.onDisconnect_,j(),(i,r)=>{const o=wm(i,r,t.serverSyncTree_,e);eu(n,i,o)});let s=[];lr(n,j(),(i,r)=>{s=s.concat(li(t.serverSyncTree_,i,r));const o=ku(t,i);ui(t,o)}),t.onDisconnect_=Ds(),st(t.eventQueue_,j(),s)}function Vm(t,e,n){let s;B(e._path)===".info"?s=jl(t.infoSyncTree_,e,n):s=jl(t.serverSyncTree_,e,n),Su(t.eventQueue_,e._path,s)}function Gl(t,e,n){let s;B(e._path)===".info"?s=dr(t.infoSyncTree_,e,n):s=dr(t.serverSyncTree_,e,n),Su(t.eventQueue_,e._path,s)}function jm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Mm)}function go(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function qm(t,e,n,s){e&&Cn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ru(t,e,n){return no(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function mo(t,e=t.transactionQueueTree_){if(e||hi(t,e),vn(e)){const n=Pu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zm(t,is(e),n)}else vu(e)&&ci(e,n=>{mo(t,n)})}function zm(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ru(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{go(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(kt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();hi(t,uo(t.transactionQueueTree_,e)),mo(t,t.transactionQueueTree_),st(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Cn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Se("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ui(t,e)}},o)}function ui(t,e){const n=Au(t,e),s=is(n),i=Pu(t,n);return Km(t,i,s),s}function Km(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ie(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Fm)u=!0,h="maxretry",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ru(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){ho("transaction failed: Data returned ",g,a.path);let v=ge(g);typeof g=="object"&&g!=null&&rt(g,".priority")||(v=v.updatePriority(d.getPriority()));const x=a.currentWriteId,F=po(t),ae=yu(v,d,F);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=ae,a.currentWriteId=xu(t),o.splice(o.indexOf(x),1),i=i.concat(pu(t.serverSyncTree_,a.path,ae,a.currentWriteId,a.applyLocally)),i=i.concat(kt(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0))}st(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}hi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Cn(s[l]);mo(t,t.transactionQueueTree_)}function Au(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&vn(s)===void 0;)s=uo(s,n),e=Q(e),n=B(e);return s}function Pu(t,e){const n=[];return Ou(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ou(t,e,n){const s=vn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ci(e,i=>{Ou(t,i,n)})}function hi(t,e){const n=vn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Cu(e,n.length>0?n:void 0)}ci(e,s=>{hi(t,s)})}function ku(t,e){const n=is(Au(t,e)),s=uo(t.transactionQueueTree_,e);return Tm(s,i=>{Ai(t,i)}),Ai(t,s),Eu(s,i=>{Ai(t,i)}),n}function Ai(t,e){const n=vn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cu(e,void 0):n.length=r+1,st(t.eventQueue_,is(e),i);for(let o=0;o<s.length;o++)Cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ym(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Se(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yl=function(t,e){const n=Qm(t),s=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||c_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},Qm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Gm(t.substring(u,h)));const d=Ym(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Mu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return H(this._path)?null:jc(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Ol(this._queryParams),n=Hr(e);return n==="{}"?"default":n}get _queryObject(){return Ol(this._queryParams)}isEqual(e){if(e=Zn(e),!(e instanceof yo))return!1;const n=this._repo===e._repo,s=jr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+z_(this._path)}}class ot extends yo{constructor(e,n){super(e,n,new Gr,!1)}get parent(){const e=zc(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=$s(this.ref,e);return new Xn(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xn(i,$s(this.ref,s),oe)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sy(t,e){return t=Zn(t),t._checkNotDeleted("ref"),e!==void 0?$s(t._root,e):t._root}function $s(t,e){return t=Zn(t),B(t._path)===null?Pm("child","path",e,!1):Iu("child","path",e,!1),new ot(t._repo,ue(t._path,e))}function Ny(t){return Tu("remove",t._path),Jm(t,null)}function Jm(t,e){t=Zn(t),Tu("set",t._path),Am("set",e,t._path,!1);const n=new ni;return Wm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Co{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Du("value",this,new Xn(e.snapshotNode,new ot(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mu(this,e,n):null}matches(e){return e instanceof Co?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mu(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=$s(new ot(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Du(e.type,this,new Xn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Zm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Gl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Xm(n,r||void 0),l=e==="value"?new Co(o):new vo(e,o);return Vm(t._repo,t,l),()=>Gl(t._repo,t,l)}function xy(t,e,n,s){return Zm(t,"value",e,n,s)}nm(ot);am(ot);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let ty=!1;function ny(t,e,n,s){t.repoInfo_=new Mc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function sy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yl(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[ey]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Yl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new sn(sn.OWNER):new v_(t.name,t.options,e);Om("Invalid Firebase Database URL",o),H(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ry(l,t,u,new C_(t.name,n));return new oy(h,t)}function iy(t,e){const n=_r[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jm(t),delete n[t.key]}function ry(t,e,n,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[t.toURLString()];return r&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Lm(t,ty,n,s),i[t.toURLString()]=r,r}class oy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Bm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function Ry(t=Gp(),e){const n=Vp(t,"database").getImmediate({identifier:e}),s=Bd("database");return s&&ly(n,...s),n}function ly(t,e,n,s={}){t=Zn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new sn(sn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Hd(s.mockUserToken,t.app.options.projectId);r=new sn(o)}ny(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){i_(zp),Rs(new Vn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(_l,gl,t),tn(_l,gl,"esm2017")}et.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};et.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ay();var cy="firebase",uy="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(cy,uy,"app");export{Ze as A,wy as B,Iy as C,qe as F,Ty as a,Ny as b,my as c,_y as d,xy as e,Ya as f,Ry as g,va as h,Kp as i,gy as j,vy as k,py as l,by as m,yr as n,Of as o,dy as p,Cy as q,Sy as r,Jm as s,fy as t,kh as u,Ey as v,gs as w,Df as x,yy as y,Bf as z};
