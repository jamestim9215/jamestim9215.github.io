(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ya(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function oi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Bp(s):oi(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(ge(t))return t}}const Vp=/;(?![^(]*\))/g,$p=/:([^]+)/,Up=/\/\*.*?\*\//gs;function Bp(t){const e={};return t.replace(Up,"").split(Vp).forEach(n=>{if(n){const s=n.split($p);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ai(t){let e="";if(_e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=ai(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=ya(qp);function Vu(t){return!!t||t===""}const Zi=t=>_e(t)?t:t==null?"":H(t)||ge(t)&&(t.toString===qu||!z(t.toString))?JSON.stringify(t,$u,2):String(t),$u=(t,e)=>e&&e.__v_isRef?$u(t,e.value):jn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Uu(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!H(e)&&!ju(e)?String(e):e,he={},qn=[],mt=()=>{},Hp=()=>!1,Kp=/^on[^a-z]/,ci=t=>Kp.test(t),va=t=>t.startsWith("onUpdate:"),He=Object.assign,wa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zp=Object.prototype.hasOwnProperty,Z=(t,e)=>zp.call(t,e),H=Array.isArray,jn=t=>li(t)==="[object Map]",Uu=t=>li(t)==="[object Set]",z=t=>typeof t=="function",_e=t=>typeof t=="string",Ea=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Bu=t=>ge(t)&&z(t.then)&&z(t.catch),qu=Object.prototype.toString,li=t=>qu.call(t),Gp=t=>li(t).slice(8,-1),ju=t=>li(t)==="[object Object]",Ia=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ar=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wp=/-(\w)/g,Qn=ui(t=>t.replace(Wp,(e,n)=>n?n.toUpperCase():"")),Qp=/\B([A-Z])/g,os=ui(t=>t.replace(Qp,"-$1").toLowerCase()),Hu=ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),eo=ui(t=>t?`on${Hu(t)}`:""),ks=(t,e)=>!Object.is(t,e),Sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yc;const Yp=()=>Yc||(Yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class Xp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Jp(t,e=It){e&&e.active&&e.effects.push(t)}const Ta=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ku=t=>(t.w&Jt)>0,zu=t=>(t.n&Jt)>0,Zp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},eg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ku(r)&&!zu(r)?r.delete(t):e[n++]=r,r.w&=~Jt,r.n&=~Jt}e.length=n}},So=new WeakMap;let vs=0,Jt=1;const Do=30;let pt;const Tn=Symbol(""),xo=Symbol("");class ba{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jp(this,s)}run(){if(!this.active)return this.fn();let e=pt,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pt,pt=this,zt=!0,Jt=1<<++vs,vs<=Do?Zp(this):Xc(this),this.fn()}finally{vs<=Do&&eg(this),Jt=1<<--vs,pt=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const Gu=[];function as(){Gu.push(zt),zt=!1}function cs(){const t=Gu.pop();zt=t===void 0?!0:t}function nt(t,e,n){if(zt&&pt){let s=So.get(t);s||So.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ta()),Wu(r)}}function Wu(t,e){let n=!1;vs<=Do?zu(t)||(t.n|=Jt,n=!Ku(t)):n=!t.has(pt),n&&(t.add(pt),pt.deps.push(t))}function Ot(t,e,n,s,r,i){const o=So.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Lr(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ia(n)&&a.push(o.get("length")):(a.push(o.get(Tn)),jn(t)&&a.push(o.get(xo)));break;case"delete":H(t)||(a.push(o.get(Tn)),jn(t)&&a.push(o.get(xo)));break;case"set":jn(t)&&a.push(o.get(Tn));break}if(a.length===1)a[0]&&No(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);No(Ta(c))}}function No(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Jc(s);for(const s of n)s.computed||Jc(s)}function Jc(t,e){(t!==pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tg=ya("__proto__,__v_isRef,__isVue"),Qu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ea)),ng=_a(),sg=_a(!1,!0),rg=_a(!0),Zc=ig();function ig(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let i=0,o=this.length;i<o;i++)nt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ne)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const s=ne(this)[e].apply(this,n);return cs(),s}}),t}function _a(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ig:eh:e?Zu:Ju).get(s))return s;const o=H(s);if(!t&&o&&Z(Zc,r))return Reflect.get(Zc,r,i);const a=Reflect.get(s,r,i);return(Ea(r)?Qu.has(r):tg(r))||(t||nt(s,"get",r),e)?a:Ue(a)?o&&Ia(r)?a:a.value:ge(a)?t?th(a):Sa(a):a}}const og=Yu(),ag=Yu(!0);function Yu(t=!1){return function(n,s,r,i){let o=n[s];if(Yn(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!Fr(r)&&!Yn(r)&&(o=ne(o),r=ne(r)),!H(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=H(n)&&Ia(s)?Number(s)<n.length:Z(n,s),c=Reflect.set(n,s,r,i);return n===ne(i)&&(a?ks(r,o)&&Ot(n,"set",s,r):Ot(n,"add",s,r)),c}}function cg(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ot(t,"delete",e,void 0),s}function lg(t,e){const n=Reflect.has(t,e);return(!Ea(e)||!Qu.has(e))&&nt(t,"has",e),n}function ug(t){return nt(t,"iterate",H(t)?"length":Tn),Reflect.ownKeys(t)}const Xu={get:ng,set:og,deleteProperty:cg,has:lg,ownKeys:ug},hg={get:rg,set(t,e){return!0},deleteProperty(t,e){return!0}},fg=He({},Xu,{get:sg,set:ag}),Ca=t=>t,hi=t=>Reflect.getPrototypeOf(t);function pr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ne(t),i=ne(e);n||(e!==i&&nt(r,"get",e),nt(r,"get",i));const{has:o}=hi(r),a=s?Ca:n?xa:Rs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gr(t,e=!1){const n=this.__v_raw,s=ne(n),r=ne(t);return e||(t!==r&&nt(s,"has",t),nt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function mr(t,e=!1){return t=t.__v_raw,!e&&nt(ne(t),"iterate",Tn),Reflect.get(t,"size",t)}function el(t){t=ne(t);const e=ne(this);return hi(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function tl(t,e){e=ne(e);const n=ne(this),{has:s,get:r}=hi(n);let i=s.call(n,t);i||(t=ne(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ks(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function nl(t){const e=ne(this),{has:n,get:s}=hi(e);let r=n.call(e,t);r||(t=ne(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ot(e,"delete",t,void 0),i}function sl(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function yr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ne(o),c=e?Ca:t?xa:Rs;return!t&&nt(a,"iterate",Tn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function vr(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=jn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ca:e?xa:Rs;return!e&&nt(i,"iterate",c?xo:Tn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ht(t){return function(...e){return t==="delete"?!1:this}}function dg(){const t={get(i){return pr(this,i)},get size(){return mr(this)},has:gr,add:el,set:tl,delete:nl,clear:sl,forEach:yr(!1,!1)},e={get(i){return pr(this,i,!1,!0)},get size(){return mr(this)},has:gr,add:el,set:tl,delete:nl,clear:sl,forEach:yr(!1,!0)},n={get(i){return pr(this,i,!0)},get size(){return mr(this,!0)},has(i){return gr.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:yr(!0,!1)},s={get(i){return pr(this,i,!0,!0)},get size(){return mr(this,!0)},has(i){return gr.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vr(i,!1,!1),n[i]=vr(i,!0,!1),e[i]=vr(i,!1,!0),s[i]=vr(i,!0,!0)}),[t,n,e,s]}const[pg,gg,mg,yg]=dg();function Aa(t,e){const n=e?t?yg:mg:t?gg:pg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,i)}const vg={get:Aa(!1,!1)},wg={get:Aa(!1,!0)},Eg={get:Aa(!0,!1)},Ju=new WeakMap,Zu=new WeakMap,eh=new WeakMap,Ig=new WeakMap;function Tg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bg(t){return t.__v_skip||!Object.isExtensible(t)?0:Tg(Gp(t))}function Sa(t){return Yn(t)?t:Da(t,!1,Xu,vg,Ju)}function _g(t){return Da(t,!1,fg,wg,Zu)}function th(t){return Da(t,!0,hg,Eg,eh)}function Da(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=bg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hn(t){return Yn(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function Fr(t){return!!(t&&t.__v_isShallow)}function nh(t){return Hn(t)||Yn(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function sh(t){return Or(t,"__v_skip",!0),t}const Rs=t=>ge(t)?Sa(t):t,xa=t=>ge(t)?th(t):t;function rh(t){zt&&pt&&(t=ne(t),Wu(t.dep||(t.dep=Ta())))}function ih(t,e){t=ne(t),t.dep&&No(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function ot(t){return Cg(t,!1)}function Cg(t,e){return Ue(t)?t:new Ag(t,e)}class Ag{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Rs(e)}get value(){return rh(this),this._value}set value(e){const n=this.__v_isShallow||Fr(e)||Yn(e);e=n?e:ne(e),ks(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Rs(e),ih(this))}}function Sg(t){return Ue(t)?t.value:t}const Dg={get:(t,e,n)=>Sg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function oh(t){return Hn(t)?t:new Proxy(t,Dg)}var ah;class xg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ah]=!1,this._dirty=!0,this.effect=new ba(e,()=>{this._dirty||(this._dirty=!0,ih(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ne(this);return rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ah="__v_isReadonly";function Ng(t,e,n=!1){let s,r;const i=z(t);return i?(s=t,r=mt):(s=t.get,r=t.set),new xg(s,r,i||!r,n)}function Gt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){fi(i,e,n)}return r}function at(t,e,n,s){if(z(t)){const i=Gt(t,e,n,s);return i&&Bu(i)&&i.catch(o=>{fi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(at(t[i],e,n,s));return r}function fi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Gt(c,null,10,[t,o,a]);return}}kg(t,n,r,s)}function kg(t,e,n,s=!0){console.error(t)}let Ms=!1,ko=!1;const Ve=[];let bt=0;const Kn=[];let kt=null,dn=0;const ch=Promise.resolve();let Na=null;function Rg(t){const e=Na||ch;return t?e.then(this?t.bind(this):t):e}function Mg(t){let e=bt+1,n=Ve.length;for(;e<n;){const s=e+n>>>1;Os(Ve[s])<t?e=s+1:n=s}return e}function ka(t){(!Ve.length||!Ve.includes(t,Ms&&t.allowRecurse?bt+1:bt))&&(t.id==null?Ve.push(t):Ve.splice(Mg(t.id),0,t),lh())}function lh(){!Ms&&!ko&&(ko=!0,Na=ch.then(hh))}function Og(t){const e=Ve.indexOf(t);e>bt&&Ve.splice(e,1)}function Lg(t){H(t)?Kn.push(...t):(!kt||!kt.includes(t,t.allowRecurse?dn+1:dn))&&Kn.push(t),lh()}function rl(t,e=Ms?bt+1:0){for(;e<Ve.length;e++){const n=Ve[e];n&&n.pre&&(Ve.splice(e,1),e--,n())}}function uh(t){if(Kn.length){const e=[...new Set(Kn)];if(Kn.length=0,kt){kt.push(...e);return}for(kt=e,kt.sort((n,s)=>Os(n)-Os(s)),dn=0;dn<kt.length;dn++)kt[dn]();kt=null,dn=0}}const Os=t=>t.id==null?1/0:t.id,Fg=(t,e)=>{const n=Os(t)-Os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hh(t){ko=!1,Ms=!0,Ve.sort(Fg);const e=mt;try{for(bt=0;bt<Ve.length;bt++){const n=Ve[bt];n&&n.active!==!1&&Gt(n,null,14)}}finally{bt=0,Ve.length=0,uh(),Ms=!1,Na=null,(Ve.length||Kn.length)&&hh()}}function Pg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||he;d&&(r=n.map(g=>_e(g)?g.trim():g)),h&&(r=n.map(Lr))}let a,c=s[a=eo(e)]||s[a=eo(Qn(e))];!c&&i&&(c=s[a=eo(os(e))]),c&&at(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,at(l,t,6,r)}}function fh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=fh(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ge(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):He(o,i),ge(t)&&s.set(t,o),o)}function di(t,e){return!t||!ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,os(e))||Z(t,e))}let Be=null,pi=null;function Pr(t){const e=Be;return Be=t,pi=t&&t.type.__scopeId||null,e}function Vg(t){pi=t}function $g(){pi=null}function dh(t,e=Be,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&pl(-1);const i=Pr(e);let o;try{o=t(...r)}finally{Pr(i),s._d&&pl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function to(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:b,inheritAttrs:y}=t;let R,U;const ee=Pr(t);try{if(n.shapeFlag&4){const te=r||s;R=Tt(u.call(te,te,h,i,g,d,b)),U=c}else{const te=e;R=Tt(te.length>1?te(i,{attrs:c,slots:a,emit:l}):te(i,null)),U=e.props?c:Ug(c)}}catch(te){Cs.length=0,fi(te,t,1),R=Ct(ct)}let V=R;if(U&&y!==!1){const te=Object.keys(U),{shapeFlag:de}=V;te.length&&de&7&&(o&&te.some(va)&&(U=Bg(U,o)),V=Zt(V,U))}return n.dirs&&(V=Zt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),R=V,Pr(ee),R}const Ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||ci(n))&&((e||(e={}))[n]=t[n]);return e},Bg=(t,e)=>{const n={};for(const s in t)(!va(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?il(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!di(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?il(s,o,l):!0:!!o;return!1}function il(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!di(n,i))return!0}return!1}function jg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hg=t=>t.__isSuspense;function Kg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Lg(t)}function zg(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Dr(t,e,n=!1){const s=Re||Be;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&z(e)?e.call(s.proxy):e}}const wr={};function no(t,e,n){return ph(t,e,n)}function ph(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=he){const a=Re;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=Fr(t)):Hn(t)?(c=()=>t,s=!0):H(t)?(u=!0,l=t.some(V=>Hn(V)||Fr(V)),c=()=>t.map(V=>{if(Ue(V))return V.value;if(Hn(V))return yn(V);if(z(V))return Gt(V,a,2)})):z(t)?e?c=()=>Gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),at(t,a,3,[d])}:c=mt,e&&s){const V=c;c=()=>yn(V())}let h,d=V=>{h=U.onStop=()=>{Gt(V,a,4)}},g;if(Fs)if(d=mt,e?n&&at(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const V=qm();g=V.__watcherHandles||(V.__watcherHandles=[])}else return mt;let b=u?new Array(t.length).fill(wr):wr;const y=()=>{if(U.active)if(e){const V=U.run();(s||l||(u?V.some((te,de)=>ks(te,b[de])):ks(V,b)))&&(h&&h(),at(e,a,3,[V,b===wr?void 0:u&&b[0]===wr?[]:b,d]),b=V)}else U.run()};y.allowRecurse=!!e;let R;r==="sync"?R=y:r==="post"?R=()=>Ye(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),R=()=>ka(y));const U=new ba(c,R);e?n?y():b=U.run():r==="post"?Ye(U.run.bind(U),a&&a.suspense):U.run();const ee=()=>{U.stop(),a&&a.scope&&wa(a.scope.effects,U)};return g&&g.push(ee),ee}function Gg(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?gh(s,t):()=>s[t]:t.bind(s,s);let i;z(e)?i=e:(i=e.handler,n=e);const o=Re;Xn(this);const a=ph(r,i.bind(s),n);return o?Xn(o):bn(),a}function gh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function yn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))yn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)yn(t[n],e);else if(Uu(t)||jn(t))t.forEach(n=>{yn(n,e)});else if(ju(t))for(const n in t)yn(t[n],e);return t}function Wg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wh(()=>{t.isMounted=!0}),Eh(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],Qg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(t,{slots:e}){const n=Om(),s=Wg();let r;return()=>{const i=e.default&&yh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==ct){o=y;break}}const a=ne(t),{mode:c}=a;if(s.isLeaving)return so(o);const l=ol(o);if(!l)return so(o);const u=Ro(l,a,s,n);Mo(l,u);const h=n.subTree,d=h&&ol(h);let g=!1;const{getTransitionKey:b}=l.type;if(b){const y=b();r===void 0?r=y:y!==r&&(r=y,g=!0)}if(d&&d.type!==ct&&(!pn(l,d)||g)){const y=Ro(d,a,s,n);if(Mo(d,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},so(o);c==="in-out"&&l.type!==ct&&(y.delayLeave=(R,U,ee)=>{const V=mh(s,d);V[String(d.key)]=d,R._leaveCb=()=>{U(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ee})}return o}}},Yg=Qg;function mh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ro(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:y,onAppear:R,onAfterAppear:U,onAppearCancelled:ee}=e,V=String(t.key),te=mh(n,t),de=(G,me)=>{G&&at(G,s,9,me)},Qe=(G,me)=>{const ae=me[1];de(G,me),H(G)?G.every(Ae=>Ae.length<=1)&&ae():G.length<=1&&ae()},ze={mode:i,persisted:o,beforeEnter(G){let me=a;if(!n.isMounted)if(r)me=y||a;else return;G._leaveCb&&G._leaveCb(!0);const ae=te[V];ae&&pn(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),de(me,[G])},enter(G){let me=c,ae=l,Ae=u;if(!n.isMounted)if(r)me=R||c,ae=U||l,Ae=ee||u;else return;let Le=!1;const rt=G._enterCb=qt=>{Le||(Le=!0,qt?de(Ae,[G]):de(ae,[G]),ze.delayedLeave&&ze.delayedLeave(),G._enterCb=void 0)};me?Qe(me,[G,rt]):rt()},leave(G,me){const ae=String(t.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return me();de(h,[G]);let Ae=!1;const Le=G._leaveCb=rt=>{Ae||(Ae=!0,me(),rt?de(b,[G]):de(g,[G]),G._leaveCb=void 0,te[ae]===t&&delete te[ae])};te[ae]=t,d?Qe(d,[G,Le]):Le()},clone(G){return Ro(G,e,n,s)}};return ze}function so(t){if(gi(t))return t=Zt(t),t.children=null,t}function ol(t){return gi(t)?t.children?t.children[0]:void 0:t}function Mo(t,e){t.shapeFlag&6&&t.component?Mo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&r++,s=s.concat(yh(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?Zt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const bs=t=>!!t.type.__asyncLoader,gi=t=>t.type.__isKeepAlive;function Xg(t,e){vh(t,"a",e)}function Jg(t,e){vh(t,"da",e)}function vh(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(mi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)gi(r.parent.vnode)&&Zg(s,e,n,r),r=r.parent}}function Zg(t,e,n,s){const r=mi(e,t,s,!0);Ih(()=>{wa(s[e],r)},n)}function mi(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Xn(n);const a=at(e,n,t,o);return bn(),cs(),a});return s?r.unshift(i):r.push(i),i}}const Ut=t=>(e,n=Re)=>(!Fs||t==="sp")&&mi(t,(...s)=>e(...s),n),em=Ut("bm"),wh=Ut("m"),tm=Ut("bu"),nm=Ut("u"),Eh=Ut("bum"),Ih=Ut("um"),sm=Ut("sp"),rm=Ut("rtg"),im=Ut("rtc");function om(t,e=Re){mi("ec",t,e)}function al(t,e){const n=Be;if(n===null)return t;const s=wi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=he]=e[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&yn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ln(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(as(),at(c,n,8,[t.el,a,t,e]),cs())}}const am=Symbol();function cm(t,e,n,s){let r;const i=n&&n[s];if(H(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function lm(t,e,n={},s,r){if(Be.isCE||Be.parent&&bs(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),Ct("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Rt();const o=i&&Th(i(n)),a=Oa(Xe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Th(t){return t.some(e=>Rh(e)?!(e.type===ct||e.type===Xe&&!Th(e.children)):!0)?t:null}const Oo=t=>t?Oh(t)?wi(t)||t.proxy:Oo(t.parent):null,_s=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oo(t.parent),$root:t=>Oo(t.root),$emit:t=>t.emit,$options:t=>Ra(t),$forceUpdate:t=>t.f||(t.f=()=>ka(t.update)),$nextTick:t=>t.n||(t.n=Rg.bind(t.proxy)),$watch:t=>Gg.bind(t)}),ro=(t,e)=>t!==he&&!t.__isScriptSetup&&Z(t,e),um={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ro(s,e))return o[e]=1,s[e];if(r!==he&&Z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==he&&Z(n,e))return o[e]=4,n[e];Lo&&(o[e]=0)}}const u=_s[e];let h,d;if(u)return e==="$attrs"&&nt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&Z(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ro(r,e)?(r[e]=n,!0):s!==he&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==he&&Z(t,o)||ro(e,o)||(a=i[0])&&Z(a,o)||Z(s,o)||Z(_s,o)||Z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Lo=!0;function hm(t){const e=Ra(t),n=t.proxy,s=t.ctx;Lo=!1,e.beforeCreate&&cl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:b,activated:y,deactivated:R,beforeDestroy:U,beforeUnmount:ee,destroyed:V,unmounted:te,render:de,renderTracked:Qe,renderTriggered:ze,errorCaptured:G,serverPrefetch:me,expose:ae,inheritAttrs:Ae,components:Le,directives:rt,filters:qt}=e;if(l&&fm(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];z(ie)&&(s[ue]=ie.bind(n))}if(r){const ue=r.call(n,n);ge(ue)&&(t.data=Sa(ue))}if(Lo=!0,i)for(const ue in i){const ie=i[ue],Nt=z(ie)?ie.bind(n,n):z(ie.get)?ie.get.bind(n,n):mt,P=!z(ie)&&z(ie.set)?ie.set.bind(n):mt,k=Um({get:Nt,set:P});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>k.value,set:Y=>k.value=Y})}if(a)for(const ue in a)bh(a[ue],s,n,ue);if(c){const ue=z(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ie=>{zg(ie,ue[ie])})}u&&cl(u,t,"c");function xe(ue,ie){H(ie)?ie.forEach(Nt=>ue(Nt.bind(n))):ie&&ue(ie.bind(n))}if(xe(em,h),xe(wh,d),xe(tm,g),xe(nm,b),xe(Xg,y),xe(Jg,R),xe(om,G),xe(im,Qe),xe(rm,ze),xe(Eh,ee),xe(Ih,te),xe(sm,me),H(ae))if(ae.length){const ue=t.exposed||(t.exposed={});ae.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Nt=>n[ie]=Nt})})}else t.exposed||(t.exposed={});de&&t.render===mt&&(t.render=de),Ae!=null&&(t.inheritAttrs=Ae),Le&&(t.components=Le),rt&&(t.directives=rt)}function fm(t,e,n=mt,s=!1){H(t)&&(t=Fo(t));for(const r in t){const i=t[r];let o;ge(i)?"default"in i?o=Dr(i.from||r,i.default,!0):o=Dr(i.from||r):o=Dr(i),Ue(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function cl(t,e,n){at(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bh(t,e,n,s){const r=s.includes(".")?gh(n,s):()=>n[s];if(_e(t)){const i=e[t];z(i)&&no(r,i)}else if(z(t))no(r,t.bind(n));else if(ge(t))if(H(t))t.forEach(i=>bh(i,e,n,s));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&no(r,i,t)}}function Ra(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Vr(c,l,o,!0)),Vr(c,e,o)),ge(e)&&i.set(e,c),c}function Vr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vr(t,i,n,!0),r&&r.forEach(o=>Vr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=dm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dm={data:ll,props:hn,emits:hn,methods:hn,computed:hn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:hn,directives:hn,watch:gm,provide:ll,inject:pm};function ll(t,e){return e?t?function(){return He(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function pm(t,e){return hn(Fo(t),Fo(e))}function Fo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function hn(t,e){return t?He(He(Object.create(null),t),e):e}function gm(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function mm(t,e,n,s=!1){const r={},i={};Or(i,vi,1),t.propsDefaults=Object.create(null),_h(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:_g(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ym(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(di(t.emitsOptions,d))continue;const g=e[d];if(c)if(Z(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const b=Qn(d);r[b]=Po(c,a,b,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{_h(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=os(h))===h||!Z(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Po(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Z(e,h))&&(delete i[h],l=!0)}l&&Ot(t,"set","$attrs")}function _h(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ar(c))continue;const l=e[c];let u;r&&Z(r,u=Qn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:di(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ne(n),l=a||he;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Po(r,c,h,l[h],t,!Z(l,h))}}return o}function Po(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Xn(r),s=l[n]=c.call(null,e),bn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===os(n))&&(s=!0))}return s}function Ch(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const u=h=>{c=!0;const[d,g]=Ch(h,e,!0);He(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ge(t)&&s.set(t,qn),qn;if(H(i))for(let u=0;u<i.length;u++){const h=Qn(i[u]);ul(h)&&(o[h]=he)}else if(i)for(const u in i){const h=Qn(u);if(ul(h)){const d=i[u],g=o[h]=H(d)||z(d)?{type:d}:Object.assign({},d);if(g){const b=dl(Boolean,g.type),y=dl(String,g.type);g[0]=b>-1,g[1]=y<0||b<y,(b>-1||Z(g,"default"))&&a.push(h)}}}const l=[o,a];return ge(t)&&s.set(t,l),l}function ul(t){return t[0]!=="$"}function hl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function fl(t,e){return hl(t)===hl(e)}function dl(t,e){return H(e)?e.findIndex(n=>fl(n,t)):z(e)&&fl(e,t)?0:-1}const Ah=t=>t[0]==="_"||t==="$stable",Ma=t=>H(t)?t.map(Tt):[Tt(t)],vm=(t,e,n)=>{if(e._n)return e;const s=dh((...r)=>Ma(e(...r)),n);return s._c=!1,s},Sh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ah(r))continue;const i=t[r];if(z(i))e[r]=vm(r,i,s);else if(i!=null){const o=Ma(i);e[r]=()=>o}}},Dh=(t,e)=>{const n=Ma(e);t.slots.default=()=>n},wm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Or(e,"_",n)):Sh(e,t.slots={})}else t.slots={},e&&Dh(t,e);Or(t.slots,vi,1)},Em=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(He(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Sh(e,r)),o=e}else e&&(Dh(t,e),o={default:1});if(i)for(const a in r)!Ah(a)&&!(a in o)&&delete r[a]};function xh(){return{app:null,config:{isNativeTag:Hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function Tm(t,e){return function(s,r=null){z(s)||(s=Object.assign({},s)),r!=null&&!ge(r)&&(r=null);const i=xh(),o=new Set;let a=!1;const c=i.app={_uid:Im++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:jm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ct(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,wi(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Vo(t,e,n,s,r=!1){if(H(t)){t.forEach((d,g)=>Vo(d,e&&(H(e)?e[g]:e),n,s,r));return}if(bs(s)&&!r)return;const i=s.shapeFlag&4?wi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,Z(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),z(c))Gt(c,a,12,[o,u]);else{const d=_e(c),g=Ue(c);if(d||g){const b=()=>{if(t.f){const y=d?Z(h,c)?h[c]:u[c]:c.value;r?H(y)&&wa(y,i):H(y)?y.includes(i)||y.push(i):d?(u[c]=[i],Z(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Z(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ye(b,n)):b()}}}const Ye=Kg;function bm(t){return _m(t)}function _m(t,e){const n=Yp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=mt,insertStaticContent:b}=t,y=(f,p,m,E=null,w=null,C=null,S=!1,_=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!pn(f,p)&&(E=dr(f),Y(f,w,C,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:I,ref:L,shapeFlag:x}=p;switch(I){case yi:R(f,p,m,E);break;case ct:U(f,p,m,E);break;case io:f==null&&ee(p,m,E,S);break;case Xe:Le(f,p,m,E,w,C,S,_,A);break;default:x&1?de(f,p,m,E,w,C,S,_,A):x&6?rt(f,p,m,E,w,C,S,_,A):(x&64||x&128)&&I.process(f,p,m,E,w,C,S,_,A,Ln)}L!=null&&w&&Vo(L,f&&f.ref,C,p||f,!p)},R=(f,p,m,E)=>{if(f==null)s(p.el=a(p.children),m,E);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},U=(f,p,m,E)=>{f==null?s(p.el=c(p.children||""),m,E):p.el=f.el},ee=(f,p,m,E)=>{[f.el,f.anchor]=b(f.children,p,m,E,f.el,f.anchor)},V=({el:f,anchor:p},m,E)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,E),f=w;s(p,m,E)},te=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},de=(f,p,m,E,w,C,S,_,A)=>{S=S||p.type==="svg",f==null?Qe(p,m,E,w,C,S,_,A):me(f,p,w,C,S,_,A)},Qe=(f,p,m,E,w,C,S,_)=>{let A,I;const{type:L,props:x,shapeFlag:F,transition:q,dirs:W}=f;if(A=f.el=o(f.type,C,x&&x.is,x),F&8?u(A,f.children):F&16&&G(f.children,A,null,E,w,C&&L!=="foreignObject",S,_),W&&ln(f,null,E,"created"),x){for(const oe in x)oe!=="value"&&!Ar(oe)&&i(A,oe,null,x[oe],C,f.children,E,w,ft);"value"in x&&i(A,"value",null,x.value),(I=x.onVnodeBeforeMount)&&Et(I,E,f)}ze(A,f,f.scopeId,S,E),W&&ln(f,null,E,"beforeMount");const ce=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;ce&&q.beforeEnter(A),s(A,p,m),((I=x&&x.onVnodeMounted)||ce||W)&&Ye(()=>{I&&Et(I,E,f),ce&&q.enter(A),W&&ln(f,null,E,"mounted")},w)},ze=(f,p,m,E,w)=>{if(m&&g(f,m),E)for(let C=0;C<E.length;C++)g(f,E[C]);if(w){let C=w.subTree;if(p===C){const S=w.vnode;ze(f,S,S.scopeId,S.slotScopeIds,w.parent)}}},G=(f,p,m,E,w,C,S,_,A=0)=>{for(let I=A;I<f.length;I++){const L=f[I]=_?Kt(f[I]):Tt(f[I]);y(null,L,p,m,E,w,C,S,_)}},me=(f,p,m,E,w,C,S)=>{const _=p.el=f.el;let{patchFlag:A,dynamicChildren:I,dirs:L}=p;A|=f.patchFlag&16;const x=f.props||he,F=p.props||he;let q;m&&un(m,!1),(q=F.onVnodeBeforeUpdate)&&Et(q,m,p,f),L&&ln(p,f,m,"beforeUpdate"),m&&un(m,!0);const W=w&&p.type!=="foreignObject";if(I?ae(f.dynamicChildren,I,_,m,E,W,C):S||ie(f,p,_,null,m,E,W,C,!1),A>0){if(A&16)Ae(_,p,x,F,m,E,w);else if(A&2&&x.class!==F.class&&i(_,"class",null,F.class,w),A&4&&i(_,"style",x.style,F.style,w),A&8){const ce=p.dynamicProps;for(let oe=0;oe<ce.length;oe++){const ve=ce[oe],dt=x[ve],Fn=F[ve];(Fn!==dt||ve==="value")&&i(_,ve,dt,Fn,w,f.children,m,E,ft)}}A&1&&f.children!==p.children&&u(_,p.children)}else!S&&I==null&&Ae(_,p,x,F,m,E,w);((q=F.onVnodeUpdated)||L)&&Ye(()=>{q&&Et(q,m,p,f),L&&ln(p,f,m,"updated")},E)},ae=(f,p,m,E,w,C,S)=>{for(let _=0;_<p.length;_++){const A=f[_],I=p[_],L=A.el&&(A.type===Xe||!pn(A,I)||A.shapeFlag&70)?h(A.el):m;y(A,I,L,null,E,w,C,S,!0)}},Ae=(f,p,m,E,w,C,S)=>{if(m!==E){if(m!==he)for(const _ in m)!Ar(_)&&!(_ in E)&&i(f,_,m[_],null,S,p.children,w,C,ft);for(const _ in E){if(Ar(_))continue;const A=E[_],I=m[_];A!==I&&_!=="value"&&i(f,_,I,A,S,p.children,w,C,ft)}"value"in E&&i(f,"value",m.value,E.value)}},Le=(f,p,m,E,w,C,S,_,A)=>{const I=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:q}=p;q&&(_=_?_.concat(q):q),f==null?(s(I,m,E),s(L,m,E),G(p.children,m,L,w,C,S,_,A)):x>0&&x&64&&F&&f.dynamicChildren?(ae(f.dynamicChildren,F,m,w,C,S,_),(p.key!=null||w&&p===w.subTree)&&Nh(f,p,!0)):ie(f,p,m,L,w,C,S,_,A)},rt=(f,p,m,E,w,C,S,_,A)=>{p.slotScopeIds=_,f==null?p.shapeFlag&512?w.ctx.activate(p,m,E,S,A):qt(p,m,E,w,C,S,A):gs(f,p,A)},qt=(f,p,m,E,w,C,S)=>{const _=f.component=Mm(f,E,w);if(gi(f)&&(_.ctx.renderer=Ln),Lm(_),_.asyncDep){if(w&&w.registerDep(_,xe),!f.el){const A=_.subTree=Ct(ct);U(null,A,p,m)}return}xe(_,f,p,m,w,C,S)},gs=(f,p,m)=>{const E=p.component=f.component;if(qg(f,p,m))if(E.asyncDep&&!E.asyncResolved){ue(E,p,m);return}else E.next=p,Og(E.update),E.update();else p.el=f.el,E.vnode=p},xe=(f,p,m,E,w,C,S)=>{const _=()=>{if(f.isMounted){let{next:L,bu:x,u:F,parent:q,vnode:W}=f,ce=L,oe;un(f,!1),L?(L.el=W.el,ue(f,L,S)):L=W,x&&Sr(x),(oe=L.props&&L.props.onVnodeBeforeUpdate)&&Et(oe,q,L,W),un(f,!0);const ve=to(f),dt=f.subTree;f.subTree=ve,y(dt,ve,h(dt.el),dr(dt),f,w,C),L.el=ve.el,ce===null&&jg(f,ve.el),F&&Ye(F,w),(oe=L.props&&L.props.onVnodeUpdated)&&Ye(()=>Et(oe,q,L,W),w)}else{let L;const{el:x,props:F}=p,{bm:q,m:W,parent:ce}=f,oe=bs(p);if(un(f,!1),q&&Sr(q),!oe&&(L=F&&F.onVnodeBeforeMount)&&Et(L,ce,p),un(f,!0),x&&Ji){const ve=()=>{f.subTree=to(f),Ji(x,f.subTree,f,w,null)};oe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ve()):ve()}else{const ve=f.subTree=to(f);y(null,ve,m,E,f,w,C),p.el=ve.el}if(W&&Ye(W,w),!oe&&(L=F&&F.onVnodeMounted)){const ve=p;Ye(()=>Et(L,ce,ve),w)}(p.shapeFlag&256||ce&&bs(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&Ye(f.a,w),f.isMounted=!0,p=m=E=null}},A=f.effect=new ba(_,()=>ka(I),f.scope),I=f.update=()=>A.run();I.id=f.uid,un(f,!0),I()},ue=(f,p,m)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,ym(f,p.props,E,m),Em(f,p.children,m),as(),rl(),cs()},ie=(f,p,m,E,w,C,S,_,A=!1)=>{const I=f&&f.children,L=f?f.shapeFlag:0,x=p.children,{patchFlag:F,shapeFlag:q}=p;if(F>0){if(F&128){P(I,x,m,E,w,C,S,_,A);return}else if(F&256){Nt(I,x,m,E,w,C,S,_,A);return}}q&8?(L&16&&ft(I,w,C),x!==I&&u(m,x)):L&16?q&16?P(I,x,m,E,w,C,S,_,A):ft(I,w,C,!0):(L&8&&u(m,""),q&16&&G(x,m,E,w,C,S,_,A))},Nt=(f,p,m,E,w,C,S,_,A)=>{f=f||qn,p=p||qn;const I=f.length,L=p.length,x=Math.min(I,L);let F;for(F=0;F<x;F++){const q=p[F]=A?Kt(p[F]):Tt(p[F]);y(f[F],q,m,null,w,C,S,_,A)}I>L?ft(f,w,C,!0,!1,x):G(p,m,E,w,C,S,_,A,x)},P=(f,p,m,E,w,C,S,_,A)=>{let I=0;const L=p.length;let x=f.length-1,F=L-1;for(;I<=x&&I<=F;){const q=f[I],W=p[I]=A?Kt(p[I]):Tt(p[I]);if(pn(q,W))y(q,W,m,null,w,C,S,_,A);else break;I++}for(;I<=x&&I<=F;){const q=f[x],W=p[F]=A?Kt(p[F]):Tt(p[F]);if(pn(q,W))y(q,W,m,null,w,C,S,_,A);else break;x--,F--}if(I>x){if(I<=F){const q=F+1,W=q<L?p[q].el:E;for(;I<=F;)y(null,p[I]=A?Kt(p[I]):Tt(p[I]),m,W,w,C,S,_,A),I++}}else if(I>F)for(;I<=x;)Y(f[I],w,C,!0),I++;else{const q=I,W=I,ce=new Map;for(I=W;I<=F;I++){const et=p[I]=A?Kt(p[I]):Tt(p[I]);et.key!=null&&ce.set(et.key,I)}let oe,ve=0;const dt=F-W+1;let Fn=!1,Gc=0;const ms=new Array(dt);for(I=0;I<dt;I++)ms[I]=0;for(I=q;I<=x;I++){const et=f[I];if(ve>=dt){Y(et,w,C,!0);continue}let wt;if(et.key!=null)wt=ce.get(et.key);else for(oe=W;oe<=F;oe++)if(ms[oe-W]===0&&pn(et,p[oe])){wt=oe;break}wt===void 0?Y(et,w,C,!0):(ms[wt-W]=I+1,wt>=Gc?Gc=wt:Fn=!0,y(et,p[wt],m,null,w,C,S,_,A),ve++)}const Wc=Fn?Cm(ms):qn;for(oe=Wc.length-1,I=dt-1;I>=0;I--){const et=W+I,wt=p[et],Qc=et+1<L?p[et+1].el:E;ms[I]===0?y(null,wt,m,Qc,w,C,S,_,A):Fn&&(oe<0||I!==Wc[oe]?k(wt,m,Qc,2):oe--)}}},k=(f,p,m,E,w=null)=>{const{el:C,type:S,transition:_,children:A,shapeFlag:I}=f;if(I&6){k(f.component.subTree,p,m,E);return}if(I&128){f.suspense.move(p,m,E);return}if(I&64){S.move(f,p,m,Ln);return}if(S===Xe){s(C,p,m);for(let x=0;x<A.length;x++)k(A[x],p,m,E);s(f.anchor,p,m);return}if(S===io){V(f,p,m);return}if(E!==2&&I&1&&_)if(E===0)_.beforeEnter(C),s(C,p,m),Ye(()=>_.enter(C),w);else{const{leave:x,delayLeave:F,afterLeave:q}=_,W=()=>s(C,p,m),ce=()=>{x(C,()=>{W(),q&&q()})};F?F(C,W,ce):ce()}else s(C,p,m)},Y=(f,p,m,E=!1,w=!1)=>{const{type:C,props:S,ref:_,children:A,dynamicChildren:I,shapeFlag:L,patchFlag:x,dirs:F}=f;if(_!=null&&Vo(_,null,m,f,!0),L&256){p.ctx.deactivate(f);return}const q=L&1&&F,W=!bs(f);let ce;if(W&&(ce=S&&S.onVnodeBeforeUnmount)&&Et(ce,p,f),L&6)fr(f.component,m,E);else{if(L&128){f.suspense.unmount(m,E);return}q&&ln(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,w,Ln,E):I&&(C!==Xe||x>0&&x&64)?ft(I,p,m,!1,!0):(C===Xe&&x&384||!w&&L&16)&&ft(A,p,m),E&&Ne(f)}(W&&(ce=S&&S.onVnodeUnmounted)||q)&&Ye(()=>{ce&&Et(ce,p,f),q&&ln(f,null,p,"unmounted")},m)},Ne=f=>{const{type:p,el:m,anchor:E,transition:w}=f;if(p===Xe){jt(m,E);return}if(p===io){te(f);return}const C=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:S,delayLeave:_}=w,A=()=>S(m,C);_?_(f.el,C,A):A()}else C()},jt=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},fr=(f,p,m)=>{const{bum:E,scope:w,update:C,subTree:S,um:_}=f;E&&Sr(E),w.stop(),C&&(C.active=!1,Y(S,f,p,m)),_&&Ye(_,p),Ye(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ft=(f,p,m,E=!1,w=!1,C=0)=>{for(let S=C;S<f.length;S++)Y(f[S],p,m,E,w)},dr=f=>f.shapeFlag&6?dr(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),zc=(f,p,m)=>{f==null?p._vnode&&Y(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,m),rl(),uh(),p._vnode=f},Ln={p:y,um:Y,m:k,r:Ne,mt:qt,mc:G,pc:ie,pbc:ae,n:dr,o:t};let Xi,Ji;return e&&([Xi,Ji]=e(Ln)),{render:zc,hydrate:Xi,createApp:Tm(zc,Xi)}}function un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Nh(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Kt(r[i]),a.el=o.el),n||Nh(o,a)),a.type===yi&&(a.el=o.el)}}function Cm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Am=t=>t.__isTeleport,Xe=Symbol(void 0),yi=Symbol(void 0),ct=Symbol(void 0),io=Symbol(void 0),Cs=[];let gt=null;function Rt(t=!1){Cs.push(gt=t?null:[])}function Sm(){Cs.pop(),gt=Cs[Cs.length-1]||null}let Ls=1;function pl(t){Ls+=t}function kh(t){return t.dynamicChildren=Ls>0?gt||qn:null,Sm(),Ls>0&&gt&&gt.push(t),t}function Un(t,e,n,s,r,i){return kh(J(t,e,n,s,r,i,!0))}function Oa(t,e,n,s,r){return kh(Ct(t,e,n,s,r,!0))}function Rh(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const vi="__vInternal",Mh=({key:t})=>t??null,xr=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||Ue(t)||z(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function J(t,e=null,n=null,s=0,r=null,i=t===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mh(e),ref:e&&xr(e),scopeId:pi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return a?(La(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),Ls>0&&!o&&gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&gt.push(c),c}const Ct=Dm;function Dm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===am)&&(t=ct),Rh(t)){const a=Zt(t,e,!0);return n&&La(a,n),Ls>0&&!i&&gt&&(a.shapeFlag&6?gt[gt.indexOf(t)]=a:gt.push(a)),a.patchFlag|=-2,a}if($m(t)&&(t=t.__vccOpts),e){e=xm(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=ai(a)),ge(c)&&(nh(c)&&!H(c)&&(c=He({},c)),e.style=oi(c))}const o=_e(t)?1:Hg(t)?128:Am(t)?64:ge(t)?4:z(t)?2:0;return J(t,e,n,s,r,o,i,!0)}function xm(t){return t?nh(t)||vi in t?He({},t):t:null}function Zt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Nm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mh(a),ref:e&&e.ref?n&&r?H(r)?r.concat(xr(e)):[r,xr(e)]:xr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function gn(t=" ",e=0){return Ct(yi,null,t,e)}function oo(t="",e=!1){return e?(Rt(),Oa(ct,null,t)):Ct(ct,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Ct(ct):H(t)?Ct(Xe,null,t.slice()):typeof t=="object"?Kt(t):Ct(yi,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function La(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),La(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(vi in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ai([e.class,s.class]));else if(r==="style")e.style=oi([e.style,s.style]);else if(ci(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Et(t,e,n,s=null){at(t,e,7,[n,s])}const km=xh();let Rm=0;function Mm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||km,i={uid:Rm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(s,r),emitsOptions:fh(s,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pg.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const Om=()=>Re||Be,Xn=t=>{Re=t,t.scope.on()},bn=()=>{Re&&Re.scope.off(),Re=null};function Oh(t){return t.vnode.shapeFlag&4}let Fs=!1;function Lm(t,e=!1){Fs=e;const{props:n,children:s}=t.vnode,r=Oh(t);mm(t,n,r,e),wm(t,s);const i=r?Fm(t,e):void 0;return Fs=!1,i}function Fm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sh(new Proxy(t.ctx,um));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Vm(t):null;Xn(t),as();const i=Gt(s,t,0,[t.props,r]);if(cs(),bn(),Bu(i)){if(i.then(bn,bn),e)return i.then(o=>{gl(t,o,e)}).catch(o=>{fi(o,t,0)});t.asyncDep=i}else gl(t,i,e)}else Lh(t,e)}function gl(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=oh(e)),Lh(t,n)}let ml;function Lh(t,e,n){const s=t.type;if(!t.render){if(!e&&ml&&!s.render){const r=s.template||Ra(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=He(He({isCustomElement:i,delimiters:a},o),c);s.render=ml(r,l)}}t.render=s.render||mt}Xn(t),as(),hm(t),cs(),bn()}function Pm(t){return new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}})}function Vm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Pm(t))},slots:t.slots,emit:t.emit,expose:e}}function wi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oh(sh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)},has(e,n){return n in e||n in _s}}))}function $m(t){return z(t)&&"__vccOpts"in t}const Um=(t,e)=>Ng(t,e,Fs),Bm=Symbol(""),qm=()=>Dr(Bm),jm="3.2.45",Hm="http://www.w3.org/2000/svg",mn=typeof document<"u"?document:null,yl=mn&&mn.createElement("template"),Km={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?mn.createElementNS(Hm,t):mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{yl.innerHTML=s?`<svg>${t}</svg>`:t;const a=yl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gm(t,e,n){const s=t.style,r=_e(n);if(n&&!r){for(const i in n)$o(s,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&$o(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const vl=/\s*!important$/;function $o(t,e,n){if(H(n))n.forEach(s=>$o(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Wm(t,e);vl.test(n)?t.setProperty(os(s),n.replace(vl,""),"important"):t[s]=n}}const wl=["Webkit","Moz","ms"],ao={};function Wm(t,e){const n=ao[e];if(n)return n;let s=Qn(e);if(s!=="filter"&&s in t)return ao[e]=s;s=Hu(s);for(let r=0;r<wl.length;r++){const i=wl[r]+s;if(i in t)return ao[e]=i}return e}const El="http://www.w3.org/1999/xlink";function Qm(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(El,e.slice(6,e.length)):t.setAttributeNS(El,e,n);else{const i=jp(e);n==null||i&&!Vu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ym(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function Xm(t,e,n,s){t.removeEventListener(e,n,s)}function Jm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Zm(e);if(s){const l=i[e]=ny(s,r);Pn(t,a,l,c)}else o&&(Xm(t,a,o,c),i[e]=void 0)}}const Il=/(?:Once|Passive|Capture)$/;function Zm(t){let e;if(Il.test(t)){e={};let s;for(;s=t.match(Il);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let co=0;const ey=Promise.resolve(),ty=()=>co||(ey.then(()=>co=0),co=Date.now());function ny(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at(sy(s,n.value),e,5,[s])};return n.value=t,n.attached=ty(),n}function sy(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Tl=/^on[a-z]/,ry=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?zm(t,s,r):e==="style"?Gm(t,n,s):ci(e)?va(e)||Jm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iy(t,e,s,r))?Ym(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Qm(t,e,s,r))};function iy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tl.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tl.test(e)&&_e(n)?!1:e in t}const oy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yg.props;const bl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Sr(e,n):e};function ay(t){t.target.composing=!0}function _l(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=bl(r);const i=s||r.props&&r.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lr(a)),t._assign(a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",ay),Pn(t,"compositionend",_l),Pn(t,"change",_l))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=bl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Lr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},cy=He({patchProp:ry},Km);let Al;function ly(){return Al||(Al=bm(cy))}const uy=(...t)=>{const e=ly().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=hy(s);if(!r)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hy(t){return _e(t)?document.querySelector(t):t}const Fh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},fy={key:0,class:"name"},dy={key:1,class:"content"},py={key:2,class:"ImageBase64"},gy=["src"],my={class:"date"},yy={__name:"Card",props:{cardKey:String,cardInfo:Object},setup(t){const e=c=>`left: ${c.X}px;top: ${c.Y}px;transform: rotate(${c.Deg}deg);`,n=c=>c<10?"0"+c:c,s=c=>{let l=c.getFullYear(),u=n(c.getMonth()+1),h=n(c.getDate()),d=n(c.getHours()),g=n(c.getMinutes()),b=n(c.getSeconds());return l+"-"+u+"-"+h+" "+d+":"+g+":"+b},r=ot("");r.value=s(new Date),setInterval(()=>{r.value=s(new Date)},6e4);const i=(c,l)=>{const u=new Date(c),h=new Date(l);let d=Math.abs(u-h)/(1e3*60*60*24),g=Math.abs(u-h)/(1e3*60*60),b=Math.abs(u-h)/(1e3*60),y={num:0,string:""};return d>1&&d<2?(y.num=d.toFixed(0),y.string="天前",y):g>1&&g<24?(y.num=g.toFixed(0),y.string="小時前",y):(y.num=b.toFixed(0),y.string="分鐘前",y)},o=c=>c.num+c.string,a=c=>{if(c.string=="天前"){if(c.num>2)return 2;if(c.num>1)return 1}return 0};return(c,l)=>(Rt(),Un("div",{class:ai(["card",{color01:t.cardInfo.Color==1,color02:t.cardInfo.Color==2,color03:t.cardInfo.Color==3,color04:t.cardInfo.Color==4,color05:t.cardInfo.Color==5,"opacity-50":a(i(t.cardInfo.Date,r.value))==1,"opacity-25":a(i(t.cardInfo.Date,r.value))==2}]),style:oi(e(t.cardInfo.Pos))},[lm(c.$slots,"default",{},void 0,!0),t.cardInfo.Name?(Rt(),Un("div",fy,[J("b",null,Zi(t.cardInfo.Name),1),gn(" 說")])):oo("",!0),t.cardInfo.Content?(Rt(),Un("div",dy,Zi(t.cardInfo.Content),1)):oo("",!0),t.cardInfo.ImageBase64?(Rt(),Un("div",py,[J("img",{src:t.cardInfo.ImageBase64,alt:""},null,8,gy)])):oo("",!0),J("div",my,Zi(o(i(t.cardInfo.Date,r.value))),1)],6))}},vy=Fh(yy,[["__scopeId","data-v-35ecef50"]]);/**
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
 *//**
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
 */const Ph=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const b=l<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ey=function(t){const e=Ph(t);return Vh.encodeByteArray(e,!0)},$r=function(t){return Ey(t).replace(/\./g,"")},Iy=function(t){try{return Vh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ty(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $h(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function by(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function _y(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cy=()=>_y().__FIREBASE_DEFAULTS__,Ay=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iy(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return Cy()||Ay()||Sy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dy=t=>{var e,n;return(n=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xy=t=>{const e=Dy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ny=()=>{var t;return(t=Bh())===null||t===void 0?void 0:t.config};/**
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
 */class ky{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ry(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$r(JSON.stringify(n)),$r(JSON.stringify(o)),a].join(".")}/**
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
 */const My="FirebaseError";class rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=My,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Oy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,s)}}function Oy(t,e){return t.replace(Ly,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ly=/\{\$([^}]+)}/g;function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Sl(i)&&Sl(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Sl(t){return t!==null&&typeof t=="object"}/**
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
 */const Fy=1e3,Py=2,Vy=4*60*60*1e3,$y=.5;function Dl(t,e=Fy,n=Py){const s=e*Math.pow(n,t),r=Math.round($y*s*(Math.random()-.5)*2);return Math.min(Vy,s+r)}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class Uy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ky;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qy(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:By(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(t){return t===fn?void 0:t}function qy(t){return t.instantiationMode==="EAGER"}/**
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
 */class jy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Hy={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ky=se.INFO,zy={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Gy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=zy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=Ky,this._logHandler=Gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Wy=(t,e)=>e.some(n=>t instanceof n);let xl,Nl;function Qy(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yy(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,Uo=new WeakMap,jh=new WeakMap,lo=new WeakMap,Pa=new WeakMap;function Xy(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),Pa.set(e,t),e}function Jy(t){if(Uo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uo.set(t,e)}let Bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zy(t){Bo=t(Bo)}function ev(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(uo(this),e,...n);return jh.set(s,e.sort?e.sort():[e]),Wt(s)}:Yy().includes(t)?function(...e){return t.apply(uo(this),e),Wt(qh.get(this))}:function(...e){return Wt(t.apply(uo(this),e))}}function tv(t){return typeof t=="function"?ev(t):(t instanceof IDBTransaction&&Jy(t),Wy(t,Qy())?new Proxy(t,Bo):t)}function Wt(t){if(t instanceof IDBRequest)return Xy(t);if(lo.has(t))return lo.get(t);const e=tv(t);return e!==t&&(lo.set(t,e),Pa.set(e,t)),e}const uo=t=>Pa.get(t);function Hh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Wt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Wt(o.result),c.oldVersion,c.newVersion,Wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nv=["get","getKey","getAll","getAllKeys","count"],sv=["put","add","delete","clear"],ho=new Map;function kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ho.set(e,i),i}Zy(t=>({...t,get:(e,n,s)=>kl(e,n)||t.get(e,n,s),has:(e,n)=>!!kl(e,n)||t.has(e,n)}));/**
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
 */class rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qo="@firebase/app",Rl="0.9.0";/**
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
 */const An=new Fa("@firebase/app"),ov="@firebase/app-compat",av="@firebase/analytics-compat",cv="@firebase/analytics",lv="@firebase/app-check-compat",uv="@firebase/app-check",hv="@firebase/auth",fv="@firebase/auth-compat",dv="@firebase/database",pv="@firebase/database-compat",gv="@firebase/functions",mv="@firebase/functions-compat",yv="@firebase/installations",vv="@firebase/installations-compat",wv="@firebase/messaging",Ev="@firebase/messaging-compat",Iv="@firebase/performance",Tv="@firebase/performance-compat",bv="@firebase/remote-config",_v="@firebase/remote-config-compat",Cv="@firebase/storage",Av="@firebase/storage-compat",Sv="@firebase/firestore",Dv="@firebase/firestore-compat",xv="firebase",Nv="9.15.0";/**
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
 */const jo="[DEFAULT]",kv={[qo]:"fire-core",[ov]:"fire-core-compat",[cv]:"fire-analytics",[av]:"fire-analytics-compat",[uv]:"fire-app-check",[lv]:"fire-app-check-compat",[hv]:"fire-auth",[fv]:"fire-auth-compat",[dv]:"fire-rtdb",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[mv]:"fire-fn-compat",[yv]:"fire-iid",[vv]:"fire-iid-compat",[wv]:"fire-fcm",[Ev]:"fire-fcm-compat",[Iv]:"fire-perf",[Tv]:"fire-perf-compat",[bv]:"fire-rc",[_v]:"fire-rc-compat",[Cv]:"fire-gcs",[Av]:"fire-gcs-compat",[Sv]:"fire-fst",[Dv]:"fire-fst-compat","fire-js":"fire-js",[xv]:"fire-js-all"};/**
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
 */const Br=new Map,Ho=new Map;function Rv(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Ho.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,t);for(const n of Br.values())Rv(n,t);return!0}function Qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Ei("app","Firebase",Mv);/**
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
 */class Ov{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Lv=Nv;function Kh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});if(n||(n=Ny()),!n)throw Qt.create("no-options");const i=Br.get(r);if(i){if(Ur(n,i.options)&&Ur(s,i.config))return i;throw Qt.create("duplicate-app",{appName:r})}const o=new jy(r);for(const c of Ho.values())o.addComponent(c);const a=new Ov(n,s,o);return Br.set(r,a),a}function zh(t=jo){const e=Br.get(t);if(!e&&t===jo)return Kh();if(!e)throw Qt.create("no-app",{appName:t});return e}function At(t,e,n){var s;let r=(s=kv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}en(new Lt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Fv="firebase-heartbeat-database",Pv=1,Ps="firebase-heartbeat-store";let fo=null;function Gh(){return fo||(fo=Hh(Fv,Pv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),fo}async function Vv(t){try{return(await Gh()).transaction(Ps).objectStore(Ps).get(Wh(t))}catch(e){if(e instanceof rn)An.warn(e.message);else{const n=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Ml(t,e){try{const s=(await Gh()).transaction(Ps,"readwrite");return await s.objectStore(Ps).put(e,Wh(t)),s.done}catch(n){if(n instanceof rn)An.warn(n.message);else{const s=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(s.message)}}}function Wh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $v=1024,Uv=30*24*60*60*1e3;class Bv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Uv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ol(),{heartbeatsToSend:n,unsentEntries:s}=qv(this._heartbeatsCache.heartbeats),r=$r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ol(){return new Date().toISOString().substring(0,10)}function qv(t,e=$v){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ll(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $h()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ll(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hv(t){en(new Lt("platform-logger",e=>new rv(e),"PRIVATE")),en(new Lt("heartbeat",e=>new Bv(e),"PRIVATE")),At(qo,Rl,t),At(qo,Rl,"esm2017"),At("fire-js","")}Hv("");var Kv="firebase",zv="9.15.0";/**
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
 */At(Kv,zv,"app");const Qh="@firebase/installations",Va="0.6.0";/**
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
 */const Yh=1e4,Xh=`w:${Va}`,Jh="FIS_v2",Gv="https://firebaseinstallations.googleapis.com/v1",Wv=60*60*1e3,Qv="installations",Yv="Installations";/**
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
 */const Xv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Sn=new Ei(Qv,Yv,Xv);function Zh(t){return t instanceof rn&&t.code.includes("request-failed")}/**
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
 */function ef({projectId:t}){return`${Gv}/projects/${t}/installations`}function tf(t){return{token:t.token,requestStatus:2,expiresIn:Zv(t.expiresIn),creationTime:Date.now()}}async function nf(t,e){const s=(await e.json()).error;return Sn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jv(t,{refreshToken:e}){const n=sf(t);return n.append("Authorization",ew(e)),n}async function rf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Zv(t){return Number(t.replace("s","000"))}function ew(t){return`${Jh} ${t}`}/**
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
 */async function tw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ef(t),r=sf(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Jh,appId:t.appId,sdkVersion:Xh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rf(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:tf(l.authToken)}}else throw await nf("Create Installation",c)}/**
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
 */function of(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function nw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sw=/^[cdef][\w-]{21}$/,Ko="";function rw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=iw(t);return sw.test(n)?n:Ko}catch{return Ko}}function iw(t){return nw(t).substr(0,22)}/**
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
 */function Ii(t){return`${t.appName}!${t.appId}`}/**
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
 */const af=new Map;function cf(t,e){const n=Ii(t);lf(n,e),ow(n,e)}function lf(t,e){const n=af.get(t);if(n)for(const s of n)s(e)}function ow(t,e){const n=aw();n&&n.postMessage({key:t,fid:e}),cw()}let vn=null;function aw(){return!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=t=>{lf(t.data.key,t.data.fid)}),vn}function cw(){af.size===0&&vn&&(vn.close(),vn=null)}/**
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
 */const lw="firebase-installations-database",uw=1,Dn="firebase-installations-store";let po=null;function $a(){return po||(po=Hh(lw,uw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}})),po}async function qr(t,e){const n=Ii(t),r=(await $a()).transaction(Dn,"readwrite"),i=r.objectStore(Dn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&cf(t,e.fid),e}async function uf(t){const e=Ii(t),s=(await $a()).transaction(Dn,"readwrite");await s.objectStore(Dn).delete(e),await s.done}async function Ti(t,e){const n=Ii(t),r=(await $a()).transaction(Dn,"readwrite"),i=r.objectStore(Dn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&cf(t,a.fid),a}/**
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
 */async function Ua(t){let e;const n=await Ti(t.appConfig,s=>{const r=hw(s),i=fw(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ko?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hw(t){const e=t||{fid:rw(),registrationStatus:0};return hf(e)}function fw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Sn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=dw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pw(t)}:{installationEntry:e}}async function dw(t,e){try{const n=await tw(t,e);return qr(t.appConfig,n)}catch(n){throw Zh(n)&&n.customData.serverCode===409?await uf(t.appConfig):await qr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pw(t){let e=await Fl(t.appConfig);for(;e.registrationStatus===1;)await of(100),e=await Fl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ua(t);return s||n}return e}function Fl(t){return Ti(t,e=>{if(!e)throw Sn.create("installation-not-found");return hf(e)})}function hf(t){return gw(t)?{fid:t.fid,registrationStatus:0}:t}function gw(t){return t.registrationStatus===1&&t.registrationTime+Yh<Date.now()}/**
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
 */async function mw({appConfig:t,heartbeatServiceProvider:e},n){const s=yw(t,n),r=Jv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rf(()=>fetch(s,a));if(c.ok){const l=await c.json();return tf(l)}else throw await nf("Generate Auth Token",c)}function yw(t,{fid:e}){return`${ef(t)}/${e}/authTokens:generate`}/**
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
 */async function Ba(t,e=!1){let n;const s=await Ti(t.appConfig,i=>{if(!ff(i))throw Sn.create("not-registered");const o=i.authToken;if(!e&&Ew(o))return i;if(o.requestStatus===1)return n=vw(t,e),i;{if(!navigator.onLine)throw Sn.create("app-offline");const a=Tw(i);return n=ww(t,a),a}});return n?await n:s.authToken}async function vw(t,e){let n=await Pl(t.appConfig);for(;n.authToken.requestStatus===1;)await of(100),n=await Pl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ba(t,e):s}function Pl(t){return Ti(t,e=>{if(!ff(e))throw Sn.create("not-registered");const n=e.authToken;return bw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ww(t,e){try{const n=await mw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await qr(t.appConfig,s),n}catch(n){if(Zh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qr(t.appConfig,s)}throw n}}function ff(t){return t!==void 0&&t.registrationStatus===2}function Ew(t){return t.requestStatus===2&&!Iw(t)}function Iw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wv}function Tw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bw(t){return t.requestStatus===1&&t.requestTime+Yh<Date.now()}/**
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
 */async function _w(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ua(e);return s?s.catch(console.error):Ba(e).catch(console.error),n.fid}/**
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
 */async function Cw(t,e=!1){const n=t;return await Aw(n),(await Ba(n,e)).token}async function Aw(t){const{registrationPromise:e}=await Ua(t);e&&await e}/**
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
 */function Sw(t){if(!t||!t.options)throw go("App Configuration");if(!t.name)throw go("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw go(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function go(t){return Sn.create("missing-app-config-values",{valueName:t})}/**
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
 */const df="installations",Dw="installations-internal",xw=t=>{const e=t.getProvider("app").getImmediate(),n=Sw(e),s=Qs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Nw=t=>{const e=t.getProvider("app").getImmediate(),n=Qs(e,df).getImmediate();return{getId:()=>_w(n),getToken:r=>Cw(n,r)}};function kw(){en(new Lt(df,xw,"PUBLIC")),en(new Lt(Dw,Nw,"PRIVATE"))}kw();At(Qh,Va);At(Qh,Va,"esm2017");/**
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
 */const jr="analytics",Rw="firebase_id",Mw="origin",Ow=60*1e3,Lw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pf="https://www.googletagmanager.com/gtag/js";/**
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
 */const tt=new Fa("@firebase/analytics");/**
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
 */function gf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Fw(t,e){const n=document.createElement("script");n.src=`${pf}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Pw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vw(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await gf(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){tt.error(a)}t("config",r,i)}async function $w(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await gf(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){tt.error(i)}}function Uw(t,e,n,s){async function r(i,o,a){try{i==="event"?await $w(t,e,n,o,a):i==="config"?await Vw(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){tt.error(c)}}return r}function Bw(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Uw(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function qw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pf)&&n.src.includes(t))return n;return null}/**
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
 */const jw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},lt=new Ei("analytics","Analytics",jw);/**
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
 */const Hw=30,Kw=1e3;class zw{constructor(e={},n=Kw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mf=new zw;function Gw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ww(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Gw(s)},i=Lw.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Qw(t,e=mf,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw lt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw lt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Jw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ow),yf({appId:s,apiKey:r,measurementId:i},o,a,e)}async function yf(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=mf){var i;const{appId:o,measurementId:a}=t;try{await Yw(s,e)}catch(c){if(a)return tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Ww(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Xw(l)){if(r.deleteThrottleMetadata(o),a)return tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Dl(n,r.intervalMillis,Hw):Dl(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),tt.debug(`Calling attemptFetch again in ${u} millis`),yf(t,h,s,r)}}function Yw(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xw(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zw(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function e0(){if($h())try{await Uh()}catch(t){return tt.warn(lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return tt.warn(lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t0(t,e,n,s,r,i,o){var a;const c=Qw(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>tt.error(g)),e.push(c);const l=e0().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);qw(i)||Fw(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Mw]="firebase",d.update=!0,h!=null&&(d[Rw]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class n0{constructor(e){this.app=e}_delete(){return delete As[this.app.options.appId],Promise.resolve()}}let As={},Vl=[];const $l={};let mo="dataLayer",s0="gtag",Ul,vf,Bl=!1;function r0(){const t=[];if(Ty()&&t.push("This is a browser extension environment."),by()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=lt.create("invalid-analytics-context",{errorInfo:e});tt.warn(n.message)}}function i0(t,e,n){r0();const s=t.options.appId;if(!s)throw lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lt.create("no-api-key");if(As[s]!=null)throw lt.create("already-exists",{id:s});if(!Bl){Pw(mo);const{wrappedGtag:i,gtagCore:o}=Bw(As,Vl,$l,mo,s0);vf=i,Ul=o,Bl=!0}return As[s]=t0(t,Vl,$l,e,Ul,mo,n),new n0(t)}function o0(t=zh()){t=ht(t);const e=Qs(t,jr);return e.isInitialized()?e.getImmediate():a0(t)}function a0(t,e={}){const n=Qs(t,jr);if(n.isInitialized()){const r=n.getImmediate();if(Ur(e,n.getOptions()))return r;throw lt.create("already-initialized")}return n.initialize({options:e})}function c0(t,e,n,s){t=ht(t),Zw(vf,As[t.app.options.appId],e,n,s).catch(r=>tt.error(r))}const ql="@firebase/analytics",jl="0.9.0";function l0(){en(new Lt(jr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return i0(s,r,n)},"PUBLIC")),en(new Lt("analytics-internal",t,"PRIVATE")),At(ql,jl),At(ql,jl,"esm2017");function t(e){try{const n=e.getProvider(jr).getImmediate();return{logEvent:(s,r,i)=>c0(n,s,r,i)}}catch(n){throw lt.create("interop-component-reg-failed",{reason:n})}}}l0();var u0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,qa=qa||{},B=u0||self;function Hr(){}function bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ys(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function h0(t){return Object.prototype.hasOwnProperty.call(t,yo)&&t[yo]||(t[yo]=++f0)}var yo="closure_uid_"+(1e9*Math.random()>>>0),f0=0;function d0(t,e,n){return t.call.apply(t.bind,arguments)}function p0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=d0:qe=p0,qe.apply(null,arguments)}function Er(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function on(){this.s=this.s,this.o=this.o}var g0=0;on.prototype.s=!1;on.prototype.na=function(){!this.s&&(this.s=!0,this.M(),g0!=0)&&h0(this)};on.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ja(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Hl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var m0=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",Hr,e),B.removeEventListener("test",Hr,e)}catch{}return t}();function Kr(t){return/^[\s\xa0]*$/.test(t)}var Kl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vo(t,e){return t<e?-1:t>e?1:0}function _i(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function _t(t){return _i().indexOf(t)!=-1}function Ha(t){return Ha[" "](t),t}Ha[" "]=Hr;function y0(t){var e=E0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var v0=_t("Opera"),Jn=_t("Trident")||_t("MSIE"),Ef=_t("Edge"),zo=Ef||Jn,If=_t("Gecko")&&!(_i().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge"))&&!(_t("Trident")||_t("MSIE"))&&!_t("Edge"),w0=_i().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge");function Tf(){var t=B.document;return t?t.documentMode:void 0}var zr;e:{var wo="",Eo=function(){var t=_i();if(If)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ef)return/Edge\/([\d\.]+)/.exec(t);if(Jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(w0)return/WebKit\/(\S+)/.exec(t);if(v0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Eo&&(wo=Eo?Eo[1]:""),Jn){var Io=Tf();if(Io!=null&&Io>parseFloat(wo)){zr=String(Io);break e}}zr=wo}var E0={};function I0(){return y0(function(){let t=0;const e=Kl(String(zr)).split("."),n=Kl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=vo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||vo(r[2].length==0,i[2].length==0)||vo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Go;if(B.document&&Jn){var zl=Tf();Go=zl||parseInt(zr,10)||void 0}else Go=void 0;var T0=Go;function Vs(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(If){e:{try{Ha(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:b0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vs.X.h.call(this)}}Oe(Vs,je);var b0={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xs="closure_listenable_"+(1e6*Math.random()|0),_0=0;function C0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++_0,this.ba=this.ea=!1}function Ci(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ka(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function bf(t){const e={};for(const n in t)e[n]=t[n];return e}const Gl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _f(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Gl.length;i++)n=Gl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ai(t){this.src=t,this.g={},this.h=0}Ai.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new C0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Wo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=wf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ci(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var za="closure_lm_"+(1e6*Math.random()|0),To={};function Cf(t,e,n,s,r){if(s&&s.once)return Sf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cf(t,e[i],n,s,r);return null}return n=Qa(n),t&&t[Xs]?t.N(e,n,Ys(s)?!!s.capture:!!s,r):Af(t,e,n,!1,s,r)}function Af(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ys(r)?!!r.capture:!!r,a=Wa(t);if(a||(t[za]=a=new Ai(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=A0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)m0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(xf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function A0(){function t(n){return e.call(t.src,t.listener,n)}const e=S0;return t}function Sf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sf(t,e[i],n,s,r);return null}return n=Qa(n),t&&t[Xs]?t.O(e,n,Ys(s)?!!s.capture:!!s,r):Af(t,e,n,!0,s,r)}function Df(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Df(t,e[i],n,s,r);else s=Ys(s)?!!s.capture:!!s,n=Qa(n),t&&t[Xs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qo(i,n,s,r),-1<n&&(Ci(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qo(e,n,s,r)),(n=-1<t?e[t]:null)&&Ga(n))}function Ga(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Xs])Wo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(xf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wa(e))?(Wo(n,t),n.h==0&&(n.src=null,e[za]=null)):Ci(t)}}}function xf(t){return t in To?To[t]:To[t]="on"+t}function S0(t,e){if(t.ba)t=!0;else{e=new Vs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ga(t),t=n.call(s,e)}return t}function Wa(t){return t=t[za],t instanceof Ai?t:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qa(t){return typeof t=="function"?t:(t[bo]||(t[bo]=function(e){return t.handleEvent(e)}),t[bo])}function De(){on.call(this),this.i=new Ai(this),this.P=this,this.I=null}Oe(De,on);De.prototype[Xs]=!0;De.prototype.removeEventListener=function(t,e,n,s){Df(this,t,e,n,s)};function Me(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var r=e;e=new je(s,t),_f(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ir(o,s,!0,e)&&r}if(o=e.g=t,r=Ir(o,s,!0,e)&&r,r=Ir(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ir(o,s,!1,e)&&r}De.prototype.M=function(){if(De.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ci(n[s]);delete t.g[e],t.h--}}this.I=null};De.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};De.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ir(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Wo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ya=B.JSON.stringify;function D0(){var t=Rf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class x0{constructor(){this.h=this.g=null}add(e,n){const s=Nf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Nf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new N0,t=>t.reset());class N0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function k0(t){B.setTimeout(()=>{throw t},0)}function kf(t,e){Yo||R0(),Xo||(Yo(),Xo=!0),Rf.add(t,e)}var Yo;function R0(){var t=B.Promise.resolve(void 0);Yo=function(){t.then(M0)}}var Xo=!1,Rf=new x0;function M0(){for(var t;t=D0();){try{t.h.call(t.g)}catch(n){k0(n)}var e=Nf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xo=!1}function Si(t,e){De.call(this),this.h=t||1,this.g=e||B,this.j=qe(this.lb,this),this.l=Date.now()}Oe(Si,De);N=Si.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Me(this,"tick"),this.ca&&(Xa(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){Si.X.M.call(this),Xa(this),delete this.g};function Ja(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function Mf(t){t.g=Ja(()=>{t.g=null,t.i&&(t.i=!1,Mf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class O0 extends on{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mf(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(t){on.call(this),this.h=t,this.g={}}Oe($s,on);var Wl=[];function Of(t,e,n,s){Array.isArray(n)||(n&&(Wl[0]=n.toString()),n=Wl);for(var r=0;r<n.length;r++){var i=Cf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Lf(t){Ka(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ga(e)},t),t.g={}}$s.prototype.M=function(){$s.X.M.call(this),Lf(this)};$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Di(){this.g=!0}Di.prototype.Aa=function(){this.g=!1};function L0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function F0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Bn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+V0(t,n)+(s?" "+s:"")})}function P0(t,e){t.info(function(){return"TIMEOUT: "+e})}Di.prototype.info=function(){};function V0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ya(n)}catch{return e}}var Rn={},Ql=null;function xi(){return Ql=Ql||new De}Rn.Pa="serverreachability";function Ff(t){je.call(this,Rn.Pa,t)}Oe(Ff,je);function Us(t){const e=xi();Me(e,new Ff(e))}Rn.STAT_EVENT="statevent";function Pf(t,e){je.call(this,Rn.STAT_EVENT,t),this.stat=e}Oe(Pf,je);function We(t){const e=xi();Me(e,new Pf(e,t))}Rn.Qa="timingevent";function Vf(t,e){je.call(this,Rn.Qa,t),this.size=e}Oe(Vf,je);function Js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Ni={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$f={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Za(){}Za.prototype.h=null;function Yl(t){return t.h||(t.h=t.i())}function Uf(){}var Zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ec(){je.call(this,"d")}Oe(ec,je);function tc(){je.call(this,"c")}Oe(tc,je);var Jo;function ki(){}Oe(ki,Za);ki.prototype.g=function(){return new XMLHttpRequest};ki.prototype.i=function(){return{}};Jo=new ki;function er(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new $s(this),this.O=$0,t=zo?125:void 0,this.T=new Si(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var $0=45e3,Zo={},Gr={};N=er.prototype;N.setTimeout=function(t){this.O=t};function ea(t,e,n){t.K=1,t.v=Mi(Ft(e)),t.s=n,t.P=!0,qf(t,null)}function qf(t,e){t.F=Date.now(),tr(t),t.A=Ft(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Yf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Bf,t.g=yd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new O0(qe(t.La,t,t.g),t.N)),Of(t.S,t.g,"readystatechange",t.ib),e=t.H?bf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Us(),L0(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Mt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Mt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||zo||this.g&&(this.h.h||this.g.fa()||eu(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Us(3):Us(2)),Ri(this);var n=this.g.aa();this.Y=n;t:if(jf(this)){var s=eu(this.g);t="";var r=s.length,i=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Ss(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,F0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kr(a)){var l=a;break t}}l=null}if(n=l)Bn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ta(this,n);else{this.i=!1,this.o=3,We(12),wn(this),Ss(this);break e}}this.P?(Hf(this,u,o),zo&&this.i&&u==3&&(Of(this.S,this.T,"tick",this.hb),this.T.start())):(Bn(this.j,this.m,o,null),ta(this,o)),u==4&&wn(this),this.i&&!this.I&&(u==4?dd(this.l,this):(this.i=!1,tr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),wn(this),Ss(this)}}}catch{}finally{}};function jf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=U0(t,n),r==Gr){e==4&&(t.o=4,We(14),s=!1),Bn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Zo){t.o=4,We(15),Bn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Bn(t.j,t.m,r,null),ta(t,r);jf(t)&&r!=Gr&&r!=Zo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),cc(e),e.K=!0,We(11))):(Bn(t.j,t.m,n,"[Invalid Chunked Response]"),wn(t),Ss(t))}N.hb=function(){if(this.g){var t=Mt(this.g),e=this.g.fa();this.C<e.length&&(Ri(this),Hf(this,t,e),this.i&&t!=4&&tr(this))}};function U0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Gr:(n=Number(e.substring(n,s)),isNaN(n)?Zo:(s+=1,s+n>e.length?Gr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,wn(this)};function tr(t){t.V=Date.now()+t.O,Kf(t,t.O)}function Kf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Js(qe(t.gb,t),e)}function Ri(t){t.B&&(B.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(P0(this.j,this.A),this.K!=2&&(Us(),We(17)),wn(this),this.o=2,Ss(this)):Kf(this,this.V-t)};function Ss(t){t.l.G==0||t.I||dd(t.l,t)}function wn(t){Ri(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xa(t.T),Lf(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ta(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||na(n.h,t))){if(!t.J&&na(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yr(n),Fi(n);else break e;ac(n),We(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Js(qe(n.cb,n),6e3));if(1>=Zf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else En(n,11)}else if((t.J||n.g==t)&&Yr(n),!Kr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const b=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=s.h;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nc(i,i.h),i.h=null))}if(s.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,pe(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=md(s,s.H?s.ka:null,s.V),o.J){ed(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ri(a),tr(a)),s.g=o}else hd(s);0<n.i.length&&Pi(n)}else l[0]!="stop"&&l[0]!="close"||En(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?En(n,7):oc(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Us(4)}catch{}}function B0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function q0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function zf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=q0(t),s=B0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Gf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function _n(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _n){this.h=e!==void 0?e:t.h,Wr(this,t.j),this.s=t.s,this.g=t.g,Qr(this,t.m),this.l=t.l,e=t.i;var n=new Bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xl(this,n),this.o=t.o}else t&&(n=String(t).match(Gf))?(this.h=!!e,Wr(this,n[1]||"",!0),this.s=ws(n[2]||""),this.g=ws(n[3]||"",!0),Qr(this,n[4]),this.l=ws(n[5]||"",!0),Xl(this,n[6]||"",!0),this.o=ws(n[7]||"")):(this.h=!!e,this.i=new Bs(null,this.h))}_n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Es(e,Jl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Es(e,Jl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Es(n,n.charAt(0)=="/"?z0:K0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Es(n,W0)),t.join("")};function Ft(t){return new _n(t)}function Wr(t,e,n){t.j=n?ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xl(t,e,n){e instanceof Bs?(t.i=e,Q0(t.i,t.h)):(n||(e=Es(e,G0)),t.i=new Bs(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Mi(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,H0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function H0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jl=/[#\/\?@]/g,K0=/[#\?:]/g,z0=/[#\?]/g,G0=/[#\?@]/g,W0=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function an(t){t.g||(t.g=new Map,t.h=0,t.i&&j0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Bs.prototype;N.add=function(t,e){an(this),this.i=null,t=ls(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wf(t,e){an(t),e=ls(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qf(t,e){return an(t),e=ls(t,e),t.g.has(e)}N.forEach=function(t,e){an(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){an(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){an(this);let e=[];if(typeof t=="string")Qf(this,t)&&(e=e.concat(this.g.get(ls(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return an(this),this.i=null,t=ls(this,t),Qf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Yf(t,e,n){Wf(t,e),0<n.length&&(t.i=null,t.g.set(ls(t,e),ja(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ls(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Q0(t,e){e&&!t.j&&(an(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wf(this,s),Yf(this,r,n))},t)),t.j=e}var Y0=class{constructor(e,n){this.h=e,this.g=n}};function Xf(t){this.l=t||X0,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var X0=10;function Jf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zf(t){return t.h?1:t.g?t.g.size:0}function na(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nc(t,e){t.g?t.g.add(e):t.h=e}function ed(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xf.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function td(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ja(t.i)}function sc(){}sc.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};sc.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function J0(){this.g=new sc}function Z0(t,e,n){const s=n||"";try{zf(t,function(r,i){let o=r;Ys(r)&&(o=Ya(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function eE(t,e){const n=new Di;if(B.Image){const s=new Image;s.onload=Er(Tr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Er(Tr,n,s,"TestLoadImage: error",!1,e),s.onabort=Er(Tr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Er(Tr,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Tr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function nr(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(nr,Za);nr.prototype.g=function(){return new Oi(this.l,this.j)};nr.prototype.i=function(t){return function(){return t}}({});function Oi(t,e){De.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Oi,De);var rc=0;N=Oi.prototype;N.open=function(t,e){if(this.readyState!=rc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=rc};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function nd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sr(this):qs(this),this.readyState==3&&nd(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,sr(this))};N.Ua=function(t){this.g&&(this.response=t,sr(this))};N.ga=function(){this.g&&sr(this)};function sr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tE=B.JSON.parse;function ye(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sd,this.K=this.L=!1}Oe(ye,De);var sd="",nE=/^https?$/i,sE=["POST","PUT"];N=ye.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jo.g(),this.C=this.u?Yl(this.u):Yl(Jo),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Zl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=B.FormData&&t instanceof B.FormData,!(0<=wf(sE,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{od(this),0<this.B&&((this.K=rE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=Ja(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Zl(this,i)}};function rE(t){return Jn&&I0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof qa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Zl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rd(t),Li(t)}function rd(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Li(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Li(this,!0)),ye.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?id(this):this.fb())};N.fb=function(){id(this)};function id(t){if(t.h&&typeof qa<"u"&&(!t.C[1]||Mt(t)!=4||t.aa()!=2)){if(t.v&&Mt(t)==4)Ja(t.Ha,0,t);else if(Me(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Gf)[1]||null;if(!r&&B.self&&B.self.location){var i=B.self.location.protocol;r=i.substr(0,i.length-1)}s=!nE.test(r?r.toLowerCase():"")}n=s}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<Mt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",rd(t)}}finally{Li(t)}}}}function Li(t,e){if(t.g){od(t);const n=t.g,s=t.C[0]?Hr:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=s}catch{}}}function od(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function Mt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tE(e)}};function eu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ad(t){let e="";return Ka(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ic(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ad(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cd(t){this.Ca=0,this.i=[],this.j=new Di,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ys("baseRetryDelayMs",5e3,t),this.bb=ys("retryDelaySeedMs",1e4,t),this.$a=ys("forwardChannelMaxRetries",2,t),this.ta=ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Xf(t&&t.concurrentRequestLimit),this.Fa=new J0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=cd.prototype;N.ma=8;N.G=1;function oc(t){if(ld(t),t.G==3){var e=t.U++,n=Ft(t.F);pe(n,"SID",t.I),pe(n,"RID",e),pe(n,"TYPE","terminate"),rr(t,n),e=new er(t,t.j,e,void 0),e.K=2,e.v=Mi(Ft(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=yd(e.l,null),e.g.da(e.v)),e.F=Date.now(),tr(e)}gd(t)}function Fi(t){t.g&&(cc(t),t.g.cancel(),t.g=null)}function ld(t){Fi(t),t.u&&(B.clearTimeout(t.u),t.u=null),Yr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Pi(t){Jf(t.h)||t.m||(t.m=!0,kf(t.Ja,t),t.C=0)}function iE(t,e){return Zf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Js(qe(t.Ja,t,e),pd(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new er(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=bf(i),_f(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ud(this,r,e),n=Ft(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),rr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ad(i)))+"&"+e:this.o&&ic(n,this.o,i)),nc(this.h,r),this.Ya&&pe(n,"TYPE","init"),this.O?(pe(n,"$req",e),pe(n,"SID","null"),r.Z=!0,ea(r,n,null)):ea(r,n,e),this.G=2}}else this.G==3&&(t?tu(this,t):this.i.length==0||Jf(this.h)||tu(this))};function tu(t,e){var n;e?n=e.m:n=t.U++;const s=Ft(t.F);pe(s,"SID",t.I),pe(s,"RID",n),pe(s,"AID",t.T),rr(t,s),t.o&&t.s&&ic(s,t.o,t.s),n=new er(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ud(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),nc(t.h,n),ea(n,s,e)}function rr(t,e){t.ia&&Ka(t.ia,function(n,s){pe(e,s,n)}),t.l&&zf({},function(n,s){pe(e,s,n)})}function ud(t,e,n){n=Math.min(t.i.length,n);var s=t.l?qe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Z0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function hd(t){t.g||t.u||(t.Z=1,kf(t.Ia,t),t.A=0)}function ac(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Js(qe(t.Ia,t),pd(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,fd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Js(qe(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),Fi(this),fd(this))};function cc(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function fd(t){t.g=new er(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ft(t.sa);pe(e,"RID","rpc"),pe(e,"SID",t.I),pe(e,"CI",t.L?"0":"1"),pe(e,"AID",t.T),pe(e,"TYPE","xmlhttp"),rr(t,e),t.o&&t.s&&ic(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mi(Ft(e)),n.s=null,n.P=!0,qf(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Fi(this),ac(this),We(19))};function Yr(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function dd(t,e){var n=null;if(t.g==e){Yr(t),cc(t),t.g=null;var s=2}else if(na(t.h,e))n=e.D,ed(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=xi(),Me(s,new Vf(s,n)),Pi(t)}else hd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&iE(t,e)||s==2&&ac(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:En(t,5);break;case 4:En(t,10);break;case 3:En(t,6);break;default:En(t,2)}}}function pd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function En(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=qe(t.kb,t);n||(n=new _n("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Wr(n,"https"),Mi(n)),eE(n.toString(),s)}else We(2);t.G=0,t.l&&t.l.va(e),gd(t),ld(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function gd(t){if(t.G=0,t.la=[],t.l){const e=td(t.h);(e.length!=0||t.i.length!=0)&&(Hl(t.la,e),Hl(t.la,t.i),t.h.i.length=0,ja(t.i),t.i.length=0),t.l.ua()}}function md(t,e,n){var s=n instanceof _n?Ft(n):new _n(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Qr(s,s.m);else{var r=B.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new _n(null,void 0);s&&Wr(i,s),e&&(i.g=e),r&&Qr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&pe(s,n,e),pe(s,"VER",t.ma),rr(t,s),s}function yd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new nr({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function vd(){}N=vd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Xr(){if(Jn&&!(10<=Number(T0)))throw Error("Environmental error: no available transport.")}Xr.prototype.g=function(t,e){return new st(t,e)};function st(t,e){De.call(this),this.g=new cd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Kr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}Oe(st,De);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=md(t,null,t.V),Pi(t)};st.prototype.close=function(){oc(this.g)};st.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ya(t),t=n);e.i.push(new Y0(e.ab++,t)),e.G==3&&Pi(e)};st.prototype.M=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,st.X.M.call(this)};function wd(t){ec.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(wd,ec);function Ed(){tc.call(this),this.status=1}Oe(Ed,tc);function us(t){this.g=t}Oe(us,vd);us.prototype.xa=function(){Me(this.g,"a")};us.prototype.wa=function(t){Me(this.g,new wd(t))};us.prototype.va=function(t){Me(this.g,new Ed)};us.prototype.ua=function(){Me(this.g,"b")};Xr.prototype.createWebChannel=Xr.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Ni.NO_ERROR=0;Ni.TIMEOUT=8;Ni.HTTP_ERROR=6;$f.COMPLETE="complete";Uf.EventType=Zs;Zs.OPEN="a";Zs.CLOSE="b";Zs.ERROR="c";Zs.MESSAGE="d";De.prototype.listen=De.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var oE=function(){return new Xr},aE=function(){return xi()},_o=Ni,cE=$f,lE=Rn,nu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},uE=nr,br=Uf,hE=ye;const su="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let hs="9.15.0";/**
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
 */const xn=new Fa("@firebase/firestore");function ru(){return xn.logLevel}function M(t,...e){if(xn.logLevel<=se.DEBUG){const n=e.map(lc);xn.debug(`Firestore (${hs}): ${t}`,...n)}}function Pt(t,...e){if(xn.logLevel<=se.ERROR){const n=e.map(lc);xn.error(`Firestore (${hs}): ${t}`,...n)}}function sa(t,...e){if(xn.logLevel<=se.WARN){const n=e.map(lc);xn.warn(`Firestore (${hs}): ${t}`,...n)}}function lc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Pt(e),new Error(e)}function le(t,e){t||$()}function K(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Id{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class dE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pE{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string"),new Id(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Fe(e)}}class gE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class mE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new gE(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.A=n.token,new yE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Td{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=wE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function re(t,e){return t<e?-1:t>e?1:0}function Zn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Te(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Te(0,0))}static max(){return new j(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class js{constructor(e,n,s){n===void 0?n=0:n>e.length&&$(),s===void 0?s=e.length-n:s>e.length-n&&$(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return js.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof js?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends js{construct(e,n,s){return new fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(v.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const EE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends js{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return EE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(fe.fromString(e))}static fromName(e){return new O(fe.fromString(e).popFirst(5))}static empty(){return new O(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new fe(e.slice()))}}function IE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new Te(n+1,0):new Te(n,s));return new tn(r,O.empty(),e)}function TE(t){return new tn(t.readTime,t.key,-1)}class tn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new tn(j.min(),O.empty(),-1)}static max(){return new tn(j.max(),O.empty(),-1)}}function bE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const _E="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ir(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==_E)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function or(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class uc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}uc.at=-1;/**
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
 */class AE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function iu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Vi(t){return t==null}function Jr(t){return t===0&&1/t==-1/0}function SE(t){return typeof t=="number"&&Number.isInteger(t)&&!Jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const DE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(t){if(le(!!t),typeof t=="string"){let e=0;const n=DE.exec(t);if(le(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function _d(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cd(t){const e=t.mapValue.fields.__previous_value__;return _d(e)?Cd(e):e}function Ks(t){const e=nn(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */const _r={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_d(t)?4:xE(t)?9007199254740991:10:$()}function xt(t,e){if(t===e)return!0;const n=Nn(t);if(n!==Nn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=nn(s.timestampValue),o=nn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return es(s.bytesValue).isEqual(es(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ee(s.geoPointValue.latitude)===Ee(r.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ee(s.integerValue)===Ee(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ee(s.doubleValue),o=Ee(r.doubleValue);return i===o?Jr(i)===Jr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Zn(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(iu(i)!==iu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!xt(i[a],o[a])))return!1;return!0}(t,e);default:return $()}}function zs(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=Nn(t),s=Nn(e);if(n!==s)return re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ee(r.integerValue||r.doubleValue),a=Ee(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ou(t.timestampValue,e.timestampValue);case 4:return ou(Ks(t),Ks(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(r,i){const o=es(r),a=es(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=re(o[c],a[c]);if(l!==0)return l}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=re(Ee(r.latitude),Ee(i.latitude));return o!==0?o:re(Ee(r.longitude),Ee(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ts(o[c],a[c]);if(l)return l}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===_r.mapValue&&i===_r.mapValue)return 0;if(r===_r.mapValue)return 1;if(i===_r.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=re(a[u],l[u]);if(h!==0)return h;const d=ts(o[a[u]],c[l[u]]);if(d!==0)return d}return re(a.length,l.length)}(t.mapValue,e.mapValue);default:throw $()}}function ou(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=nn(t),s=nn(e),r=re(n.seconds,s.seconds);return r!==0?r:re(n.nanos,s.nanos)}function ns(t){return ra(t)}function ra(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=nn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ra(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ra(s.fields[a])}`;return i+"}"}(t.mapValue):$();var e,n}function au(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ia(t){return!!t&&"integerValue"in t}function hc(t){return!!t&&"arrayValue"in t}function cu(t){return!!t&&"nullValue"in t}function lu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nr(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ds(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zr{constructor(e,n){this.position=e,this.inclusive=n}}function uu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=ts(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ad{}class Ie extends Ad{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new RE(e,n,s):n==="array-contains"?new LE(e,s):n==="in"?new FE(e,s):n==="not-in"?new PE(e,s):n==="array-contains-any"?new VE(e,s):new Ie(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ME(e,s):new OE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&Nn(this.value)===Nn(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vt extends Ad{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new vt(e,n)}matches(e){return Sd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Sd(t){return t.op==="and"}function NE(t){return kE(t)&&Sd(t)}function kE(t){for(const e of t.filters)if(e instanceof vt)return!1;return!0}function Dd(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+ns(t.value);{const e=t.filters.map(n=>Dd(n)).join(",");return`${t.op}(${e})`}}function xd(t,e){return t instanceof Ie?function(n,s){return s instanceof Ie&&n.op===s.op&&n.field.isEqual(s.field)&&xt(n.value,s.value)}(t,e):t instanceof vt?function(n,s){return s instanceof vt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&xd(i,s.filters[o]),!0):!1}(t,e):void $()}function Nd(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${ns(e.value)}`}(t):t instanceof vt?function(e){return e.op.toString()+" {"+e.getFilters().map(Nd).join(" ,")+"}"}(t):"Filter"}class RE extends Ie{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class ME extends Ie{constructor(e,n){super(e,"in",n),this.keys=kd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OE extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=kd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class LE extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hc(n)&&zs(n.arrayValue,this.value)}}class FE extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zs(this.value.arrayValue,n)}}class PE extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zs(this.value.arrayValue,n)}}class VE extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>zs(this.value.arrayValue,s))}}/**
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
 */class zn{constructor(e,n="asc"){this.field=e,this.dir=n}}function $E(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cr(this.root,e,this.comparator,!0)}}class Cr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fu(this.data.getIterator())}getIteratorFrom(e){return new fu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class fu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new ut([])}unionWith(e){let n=new be($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Nr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ds(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Nr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Mn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Je(Ds(this.value))}}function Rd(t){const e=[];return Mn(t.fields,(n,s)=>{const r=new $e([n]);if(Nr(s)){const i=Rd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ut(e)}/**
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
 */class Pe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,j.min(),j.min(),j.min(),Je.empty(),0)}static newFoundDocument(e,n,s,r){return new Pe(e,1,n,j.min(),s,r,0)}static newNoDocument(e,n){return new Pe(e,2,n,j.min(),j.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,j.min(),j.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class UE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function du(t,e=null,n=[],s=[],r=null,i=null,o=null){return new UE(t,e,n,s,r,i,o)}function fc(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ns(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ns(s)).join(",")),e.ft=n}return e.ft}function dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$E(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hu(t.startAt,e.startAt)&&hu(t.endAt,e.endAt)}function oa(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function BE(t,e,n,s,r,i,o,a){return new fs(t,e,n,s,r,i,o,a)}function pc(t){return new fs(t)}function pu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $i(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Md(t){return t.collectionGroup!==null}function Gn(t){const e=K(t);if(e.dt===null){e.dt=[];const n=$i(e),s=gc(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new zn(n)),e.dt.push(new zn($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new zn($e.keyField(),i))}}}return e.dt}function Vt(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=du(e.path,e.collectionGroup,Gn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Gn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new zn(i.field,o))}const s=e.endAt?new Zr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Zr(e.startAt.position,e.startAt.inclusive):null;e._t=du(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function aa(t,e){e.getFirstInequalityField(),$i(t);const n=t.filters.concat([e]);return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ei(t,e,n){return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ui(t,e){return dc(Vt(t),Vt(e))&&t.limitType===e.limitType}function Od(t){return`${fc(Vt(t))}|lt:${t.limitType}`}function ca(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Nd(s)).join(", ")}]`),Vi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ns(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ns(s)).join(",")),`Target(${n})`}(Vt(t))}; limitType=${t.limitType})`}function mc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Gn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=uu(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Gn(n),s)||n.endAt&&!function(r,i,o){const a=uu(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Gn(n),s))}(t,e)}function qE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ld(t){return(e,n)=>{let s=!1;for(const r of Gn(t)){const i=jE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function jE(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ts(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return $()}}/**
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
 */function Fd(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function Pd(t){return{integerValue:""+t}}function HE(t,e){return SE(e)?Pd(e):Fd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Bi{constructor(){this._=void 0}}function KE(t,e,n){return t instanceof ti?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Gs?$d(t,e):t instanceof Ws?Ud(t,e):function(s,r){const i=Vd(s,r),o=gu(i)+gu(s.gt);return ia(i)&&ia(s.gt)?Pd(o):Fd(s.yt,o)}(t,e)}function zE(t,e,n){return t instanceof Gs?$d(t,e):t instanceof Ws?Ud(t,e):n}function Vd(t,e){return t instanceof ni?ia(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ti extends Bi{}class Gs extends Bi{constructor(e){super(),this.elements=e}}function $d(t,e){const n=Bd(e);for(const s of t.elements)n.some(r=>xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ws extends Bi{constructor(e){super(),this.elements=e}}function Ud(t,e){let n=Bd(e);for(const s of t.elements)n=n.filter(r=>!xt(r,s));return{arrayValue:{values:n}}}class ni extends Bi{constructor(e,n){super(),this.yt=e,this.gt=n}}function gu(t){return Ee(t.integerValue||t.doubleValue)}function Bd(t){return hc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Gs&&s instanceof Gs||n instanceof Ws&&s instanceof Ws?Zn(n.elements,s.elements,xt):n instanceof ni&&s instanceof ni?xt(n.gt,s.gt):n instanceof ti&&s instanceof ti}(t.transform,e.transform)}class WE{constructor(e,n){this.version=e,this.transformResults=n}}class yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qi{}function qd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yc(t.key,yt.none()):new ar(t.key,t.data,yt.none());{const n=t.data,s=Je.empty();let r=new be($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new cn(t.key,s,new ut(r.toArray()),yt.none())}}function QE(t,e,n){t instanceof ar?function(s,r,i){const o=s.value.clone(),a=yu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cn?function(s,r,i){if(!kr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=yu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(jd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,s){return t instanceof ar?function(r,i,o,a){if(!kr(r.precondition,i))return o;const c=r.value.clone(),l=vu(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof cn?function(r,i,o,a){if(!kr(r.precondition,i))return o;const c=vu(r.fieldTransforms,a,i),l=i.data;return l.setAll(jd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return kr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function YE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Vd(s.transform,r||null);i!=null&&(n===null&&(n=Je.empty()),n.set(s.field,i))}return n||null}function mu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Zn(n,s,(r,i)=>GE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ar extends qi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cn extends qi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function yu(t,e,n){const s=new Map;le(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,zE(o,a,n[r]))}return s}function vu(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,KE(i,o,e))}return s}class yc extends qi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XE extends qi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JE{constructor(e){this.count=e}}/**
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
 */var we,X;function ZE(t){switch(t){default:return $();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Hd(t){if(t===void 0)return Pt("GRPC error has no .code"),v.UNKNOWN;switch(t){case we.OK:return v.OK;case we.CANCELLED:return v.CANCELLED;case we.UNKNOWN:return v.UNKNOWN;case we.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case we.INTERNAL:return v.INTERNAL;case we.UNAVAILABLE:return v.UNAVAILABLE;case we.UNAUTHENTICATED:return v.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case we.NOT_FOUND:return v.NOT_FOUND;case we.ALREADY_EXISTS:return v.ALREADY_EXISTS;case we.PERMISSION_DENIED:return v.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case we.ABORTED:return v.ABORTED;case we.OUT_OF_RANGE:return v.OUT_OF_RANGE;case we.UNIMPLEMENTED:return v.UNIMPLEMENTED;case we.DATA_LOSS:return v.DATA_LOSS;default:return $()}}(X=we||(we={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
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
 */const eI=new Ce(O.comparator);function $t(){return eI}const Kd=new Ce(O.comparator);function Is(...t){let e=Kd;for(const n of t)e=e.insert(n.key,n);return e}function zd(t){let e=Kd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function In(){return Ns()}function Gd(){return Ns()}function Ns(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const tI=new Ce(O.comparator),nI=new be(O.comparator);function Q(...t){let e=nI;for(const n of t)e=e.add(n);return e}const sI=new be(re);function Wd(){return sI}/**
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
 */class ji{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ji(j.min(),r,Wd(),$t(),Q())}}class cr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new cr(s,n,Q(),Q(),Q())}}/**
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
 */class Rr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Qd{constructor(e,n){this.targetId=e,this.Et=n}}class Yd{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class wu{constructor(){this.At=0,this.Rt=Iu(),this.bt=Ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Q(),n=Q(),s=Q();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:$()}}),new cr(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Iu()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class rI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=$t(),this.qt=Eu(),this.Ut=new be(re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(oa(i))if(s===0){const o=new O(i.path);this.Qt(n,o,Pe.newNoDocument(o,j.min()))}else le(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&oa(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Pe.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=Q();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ji(e,n,this.Ut,this.Lt,s);return this.Lt=$t(),this.qt=Eu(),this.Ut=new be(re),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new wu,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new be(re),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new wu),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Eu(){return new Ce(O.comparator)}function Iu(){return new Ce(O.comparator)}/**
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
 */const iI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aI=(()=>({and:"AND",or:"OR"}))();class cI{constructor(e,n){this.databaseId=e,this.wt=n}}function si(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xd(t,e){return t.wt?e.toBase64():e.toUint8Array()}function lI(t,e){return si(t,e.toTimestamp())}function St(t){return le(!!t),j.fromTimestamp(function(e){const n=nn(e);return new Te(n.seconds,n.nanos)}(t))}function vc(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jd(t){const e=fe.fromString(t);return le(np(e)),e}function la(t,e){return vc(t.databaseId,e.path)}function Co(t,e){const n=Jd(e);if(n.get(1)!==t.databaseId.projectId)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Zd(n))}function ua(t,e){return vc(t.databaseId,e)}function uI(t){const e=Jd(t);return e.length===4?fe.emptyPath():Zd(e)}function ha(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zd(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tu(t,e,n){return{name:la(t,e),fields:n.value.mapValue.fields}}function hI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(le(l===void 0||typeof l=="string"),Ke.fromBase64String(l||"")):(le(l===void 0||l instanceof Uint8Array),Ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?v.UNKNOWN:Hd(c.code);return new D(l,c.message||"")}(o);n=new Yd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Co(t,s.document.name),i=St(s.document.updateTime),o=s.document.createTime?St(s.document.createTime):j.min(),a=new Je({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Rr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Co(t,s.document),i=s.readTime?St(s.readTime):j.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Rr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Co(t,s.document),i=s.removedTargetIds||[];n=new Rr([],i,r,null)}else{if(!("filter"in e))return $();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new JE(r),o=s.targetId;n=new Qd(o,i)}}return n}function fI(t,e){let n;if(e instanceof ar)n={update:Tu(t,e.key,e.value)};else if(e instanceof yc)n={delete:la(t,e.key)};else if(e instanceof cn)n={update:Tu(t,e.key,e.data),updateMask:II(e.fieldMask)};else{if(!(e instanceof XE))return $();n={verify:la(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ti)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ni)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw $()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:lI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:$()}(t,e.precondition)),n}function dI(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?St(s.updateTime):St(r);return i.isEqual(j.min())&&(i=St(r)),new WE(i,s.transformResults||[])}(n,e))):[]}function pI(t,e){return{documents:[ua(t,e.path)]}}function gI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ua(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ua(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return tp(vt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Vn(u.field),direction:vI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Vi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mI(t){let e=uI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){le(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=ep(u);return h instanceof vt&&NE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new zn($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Vi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Zr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Zr(d,h)}(n.endAt)),BE(e,r,o,i,a,"F",c,l)}function yI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ep(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$n(e.unaryFilter.field);return Ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$n(e.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$n(e.unaryFilter.field);return Ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$n(e.unaryFilter.field);return Ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create($n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return vt.create(e.compositeFilter.filters.map(n=>ep(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function vI(t){return iI[t]}function wI(t){return oI[t]}function EI(t){return aI[t]}function Vn(t){return{fieldPath:t.canonicalString()}}function $n(t){return $e.fromServerFormat(t.fieldPath)}function tp(t){return t instanceof Ie?function(e){if(e.op==="=="){if(lu(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NAN"}};if(cu(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(lu(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NAN"}};if(cu(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(e.field),op:wI(e.op),value:e.value}}}(t):t instanceof vt?function(e){const n=e.getFilters().map(s=>tp(s));return n.length===1?n[0]:{compositeFilter:{op:EI(e.op),filters:n}}}(t):$()}function II(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function np(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class TI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&QE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Gd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=qd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(j.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(n,s)=>mu(n,s))&&Zn(this.baseMutations,e.baseMutations,(n,s)=>mu(n,s))}}class wc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){le(e.mutations.length===s.length);let r=tI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new wc(e,n,s,r)}}/**
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
 */class bI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Cn{constructor(e,n,s,r,i=j.min(),o=j.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class _I{constructor(e){this.ie=e}}function CI(t){const e=mI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ei(e,e.limit,"L"):e}/**
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
 */class AI{constructor(){this.Je=new SI}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(tn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class SI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new be(fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new be(fe.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ss(0)}static vn(){return new ss(-1)}}/**
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
 */class DI{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class xI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&xs(s.mutation,r,ut.empty(),Te.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Q()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Q()){const r=In();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Is();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=In();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Q()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=$t();const o=Ns(),a=Ns();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof cn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),xs(u.mutation,l,u.mutation.getFieldMask(),Te.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new xI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ns();let r=new Ce((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ut.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Q()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Gd();u.forEach(d=>{if(!i.has(d)){const g=qd(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Md(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(In());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Q())).next(u=>({batchId:a,changes:zd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=Is();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Is();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new fs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Pe.newInvalidDocument(l)))});let o=Is();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&xs(l.mutation,c,ut.empty(),Te.now()),mc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class kI{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:St(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:CI(s.bundledQuery),readTime:St(s.readTime)}}(n)),T.resolve()}}/**
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
 */class RI{constructor(){this.overlays=new Ce(O.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=In();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=In(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=In(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=In(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bI(n,s));let i=this.es.get(n);i===void 0&&(i=Q(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Ec{constructor(){this.ns=new be(Se.ss),this.rs=new be(Se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Se(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Se(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new O(new fe([])),s=new Se(n,e),r=new Se(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new fe([])),s=new Se(n,e),r=new Se(n,e+1);let i=Q();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Se(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||re(e._s,n._s)}static os(e,n){return re(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class MI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new be(Se.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Se(n,0),r=new Se(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new be(re);return n.forEach(r=>{const i=new Se(r,0),o=new Se(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new Se(new O(i),0);let a=new be(re);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){le(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Se(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Se(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OI{constructor(e){this.Es=e,this.docs=new Ce(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=$t();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=$t();const i=new O(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||bE(TE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){$()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LI(this)}getSize(e){return T.resolve(this.size)}}class LI extends DI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class FI{constructor(e){this.persistence=e,this.Rs=new ds(n=>fc(n),dc),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ec,this.targetCount=0,this.vs=ss.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class PI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new uc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new FI(this),this.indexManager=new AI,this.remoteDocumentCache=function(s){return new OI(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new _I(n),this.Ns=new kI(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new MI(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){M("MemoryPersistence","Starting transaction:",e);const r=new VI(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class VI extends CE{constructor(e){super(),this.currentSequenceNumber=e}}class Ic{constructor(e){this.persistence=e,this.Fs=new Ec,this.$s=null}static Bs(e){return new Ic(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=O.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Tc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Q(),r=Q();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tc(e,n.fromCache,s,r)}}/**
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
 */class $I{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(pu(n))return T.resolve(null);let s=Vt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ei(n,null,"F"),s=Vt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Q(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,ei(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return pu(n)||r.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(ru()<=se.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ca(n)),this.Bi(e,o,n,IE(r,-1)))})}Fi(e,n){let s=new be(Ld(e));return n.forEach((r,i)=>{mc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return ru()<=se.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ca(n)),this.Ni.getDocumentsMatchingQuery(e,n,tn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class UI{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ce(re),this.Ui=new ds(i=>fc(i),dc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function BI(t,e,n,s){return new UI(t,e,n,s)}async function sp(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Q();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function qI(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(b=>{const y=c.docVersions.get(g);le(y!==null),b.version.compareTo(y)<0&&(u.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),l.addEntry(b)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Q();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function rp(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function jI(t,e){const n=K(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(b,y,R){return b.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=$t(),l=Q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(HI(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(j.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function HI(t,e,n){let s=Q(),r=Q();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=$t();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function KI(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zI(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Cn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function fa(t,e,n){const s=K(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!or(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function bu(t,e,n){const s=K(t);let r=j.min(),i=Q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=K(a),h=u.Ui.get(l);return h!==void 0?T.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Vt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:j.min(),n?i:Q())).next(a=>(GI(s,qE(e),a),{documents:a,Hi:i})))}function GI(t,e,n){let s=t.Ki.get(e)||j.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class _u{constructor(){this.activeTargetIds=Wd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WI{constructor(){this.Lr=new _u,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new _u,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QI{Ur(e){}shutdown(){}}/**
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
 */class Cu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const YI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class JI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);M("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(M("RestConnection","Received: ",c),c),c=>{throw sa("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=YI[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new hE;a.setWithCredentials(!0),a.listenOnce(cE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case _o.NO_ERROR:const l=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(l)),i(l);break;case _o.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new D(v.DEADLINE_EXCEEDED,"Request time out"));break;case _o.HTTP_ERROR:const u=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(b){const y=b.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(y)>=0?y:v.UNKNOWN}(d.status);o(new D(g,d.message))}else o(new D(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(v.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=oE(),o=aE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new uE({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");M("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new XI({Hr:b=>{h?M("Connection","Not sending because WebChannel is closed:",b):(u||(M("Connection","Opening WebChannel transport."),l.open(),u=!0),M("Connection","WebChannel sending:",b),l.send(b))},Jr:()=>l.close()}),g=(b,y,R)=>{b.listen(y,U=>{try{R(U)}catch(ee){setTimeout(()=>{throw ee},0)}})};return g(l,br.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),g(l,br.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),d.io())}),g(l,br.EventType.ERROR,b=>{h||(h=!0,sa("Connection","WebChannel transport errored:",b),d.io(new D(v.UNAVAILABLE,"The operation could not be completed")))}),g(l,br.EventType.MESSAGE,b=>{var y;if(!h){const R=b.data[0];le(!!R);const U=R,ee=U.error||((y=U[0])===null||y===void 0?void 0:y.error);if(ee){M("Connection","WebChannel received error:",ee);const V=ee.status;let te=function(Qe){const ze=we[Qe];if(ze!==void 0)return Hd(ze)}(V),de=ee.message;te===void 0&&(te=v.INTERNAL,de="Unknown error status: "+V+" with message "+ee.message),h=!0,d.io(new D(te,de)),l.close()}else M("Connection","WebChannel received:",R),d.ro(R)}}),g(o,lE.STAT_EVENT,b=>{b.stat===nu.PROXY?M("Connection","Detected buffering proxy"):b.stat===nu.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ao(){return typeof document<"u"?document:null}/**
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
 */function Hi(t){return new cI(t,!0)}class ip{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class op{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ip(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(Pt(n.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new D(v.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZI extends op{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=hI(this.yt,e),s=function(r){if(!("targetChange"in r))return j.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?j.min():i.readTime?St(i.readTime):j.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=ha(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=oa(a)?{documents:pI(r,a)}:{query:gI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Xd(r,i.resumeToken):i.snapshotVersion.compareTo(j.min())>0&&(o.readTime=si(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=yI(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=ha(this.yt),n.removeTarget=e,this.Bo(n)}}class eT extends op{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=dI(e.writeResults,e.commitTime),s=St(e.commitTime);return this.listener.Zo(s,n)}return le(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ha(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>fI(this.yt,s))};this.Bo(n)}}/**
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
 */class tT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(v.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(v.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class nT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pt(n),this.ou=!1):M("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class sT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{On(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c._u.add(4),await lr(c),c.gu.set("Unknown"),c._u.delete(4),await Ki(c)}(this))})}),this.gu=new nT(s,r)}}async function Ki(t){if(On(t))for(const e of t.wu)await e(!0)}async function lr(t){for(const e of t.wu)await e(!1)}function ap(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Cc(n)?_c(n):ps(n).ko()&&bc(n,e))}function cp(t,e){const n=K(t),s=ps(n);n.du.delete(e),s.ko()&&lp(n,e),n.du.size===0&&(s.ko()?s.Fo():On(n)&&n.gu.set("Unknown"))}function bc(t,e){t.yu.Ot(e.targetId),ps(t).zo(e)}function lp(t,e){t.yu.Ot(e),ps(t).Ho(e)}function _c(t){t.yu=new rI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ps(t).start(),t.gu.uu()}function Cc(t){return On(t)&&!ps(t).No()&&t.du.size>0}function On(t){return K(t)._u.size===0}function up(t){t.yu=void 0}async function rT(t){t.du.forEach((e,n)=>{bc(t,e)})}async function iT(t,e){up(t),Cc(t)?(t.gu.hu(e),_c(t)):t.gu.set("Unknown")}async function oT(t,e,n){if(t.gu.set("Online"),e instanceof Yd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ri(t,s)}else if(e instanceof Rr?t.yu.Kt(e):e instanceof Qd?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(j.min()))try{const s=await rp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),lp(r,a);const l=new Cn(c.target,a,1,c.sequenceNumber);bc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){M("RemoteStore","Failed to raise snapshot:",s),await ri(t,s)}}async function ri(t,e,n){if(!or(e))throw e;t._u.add(1),await lr(t),t.gu.set("Offline"),n||(n=()=>rp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ki(t)})}function hp(t,e){return e().catch(n=>ri(t,n,e))}async function zi(t){const e=K(t),n=sn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;aT(e);)try{const r=await KI(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,cT(e,r)}catch(r){await ri(e,r)}fp(e)&&dp(e)}function aT(t){return On(t)&&t.fu.length<10}function cT(t,e){t.fu.push(e);const n=sn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function fp(t){return On(t)&&!sn(t).No()&&t.fu.length>0}function dp(t){sn(t).start()}async function lT(t){sn(t).eu()}async function uT(t){const e=sn(t);for(const n of t.fu)e.Xo(n.mutations)}async function hT(t,e,n){const s=t.fu.shift(),r=wc.from(s,e,n);await hp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await zi(t)}async function fT(t,e){e&&sn(t).Yo&&await async function(n,s){if(r=s.code,ZE(r)&&r!==v.ABORTED){const i=n.fu.shift();sn(n).Mo(),await hp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zi(n)}var r}(t,e),fp(t)&&dp(t)}async function Au(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const s=On(n);n._u.add(3),await lr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ki(n)}async function dT(t,e){const n=K(t);e?(n._u.delete(2),await Ki(n)):e||(n._u.add(2),await lr(n),n.gu.set("Unknown"))}function ps(t){return t.pu||(t.pu=function(e,n,s){const r=K(e);return r.su(),new ZI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:rT.bind(null,t),Zr:iT.bind(null,t),Wo:oT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Cc(t)?_c(t):t.gu.set("Unknown")):(await t.pu.stop(),up(t))})),t.pu}function sn(t){return t.Iu||(t.Iu=function(e,n,s){const r=K(e);return r.su(),new eT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:lT.bind(null,t),Zr:fT.bind(null,t),tu:uT.bind(null,t),Zo:hT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await zi(t)):(await t.Iu.stop(),t.fu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ac{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ac(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(t,e){if(Pt("AsyncQueue",`${e}: ${t}`),or(t))return new D(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=Is(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Wn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Su{constructor(){this.Tu=new Ce(O.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class rs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,n,Wn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class pT{constructor(){this.Au=void 0,this.listeners=[]}}class gT{constructor(){this.queries=new ds(e=>Od(e),Ui),this.onlineState="Unknown",this.Ru=new Set}}async function pp(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new pT),r)try{i.Au=await n.onListen(s)}catch(o){const a=Sc(o,`Initialization of query '${ca(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Dc(n)}async function gp(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function mT(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Dc(n)}function yT(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Dc(t){t.Ru.forEach(e=>{e.next()})}class mp{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class vT{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Q(),this.mutatedKeys=Q(),this.Gu=Ld(e),this.Qu=new Wn(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Su,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=mc(this.query,h)?h:null,b=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?b!==y&&(s.track({type:3,doc:g}),R=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),R=!0):d&&!g&&(s.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const g=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new rs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Su,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Q(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new vp(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new yp(s))}),n}tc(e){this.qu=e.Hi,this.Ku=Q();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return rs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class wT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ET{constructor(e){this.key=e,this.nc=!1}}class IT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ds(a=>Od(a),Ui),this.rc=new Map,this.oc=new Set,this.uc=new Ce(O.comparator),this.cc=new Map,this.ac=new Ec,this.hc={},this.lc=new Map,this.fc=ss.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function TT(t,e){const n=RT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await zI(n.localStore,Vt(e));n.isPrimaryClient&&ap(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await bT(n,e,s,a==="current",o.resumeToken)}return r}async function bT(t,e,n,s,r){t._c=(h,d,g)=>async function(b,y,R,U){let ee=y.view.Wu(R);ee.$i&&(ee=await bu(b.localStore,y.query,!1).then(({documents:de})=>y.view.Wu(de,ee)));const V=U&&U.targetChanges.get(y.targetId),te=y.view.applyChanges(ee,b.isPrimaryClient,V);return xu(b,y.targetId,te.Xu),te.snapshot}(t,h,d,g);const i=await bu(t.localStore,e,!0),o=new vT(e,i.Hi),a=o.Wu(i.documents),c=cr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);xu(t,n,l.Xu);const u=new wT(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function _T(t,e){const n=K(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Ui(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),cp(n.remoteStore,s.targetId),da(n,s.targetId)}).catch(ir)):(da(n,s.targetId),await fa(n.localStore,s.targetId,!0))}async function CT(t,e,n){const s=MT(t);try{const r=await function(i,o){const a=K(i),c=Te.now(),l=o.reduce((d,g)=>d.add(g.key),Q());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=$t(),b=Q();return a.Gi.getEntries(d,l).next(y=>{g=y,g.forEach((R,U)=>{U.isValidDocument()||(b=b.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const R=[];for(const U of o){const ee=YE(U,u.get(U.key).overlayedDocument);ee!=null&&R.push(new cn(U.key,ee,Rd(ee.value.mapValue),yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,R,o)}).next(y=>{h=y;const R=y.applyToLocalDocumentSet(u,b);return a.documentOverlayCache.saveOverlays(d,y.batchId,R)})}).then(()=>({batchId:h.batchId,changes:zd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ce(re)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ur(s,r.changes),await zi(s.remoteStore)}catch(r){const i=Sc(r,"Failed to persist write");n.reject(i)}}async function wp(t,e){const n=K(t);try{const s=await jI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(le(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?le(o.nc):r.removedDocuments.size>0&&(le(o.nc),o.nc=!1))}),await ur(n,s,e)}catch(s){await ir(s)}}function Du(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Dc(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AT(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ce(O.comparator);o=o.insert(i,Pe.newNoDocument(i,j.min()));const a=Q().add(i),c=new ji(j.min(),new Map,new be(re),o,a);await wp(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),xc(s)}else await fa(s.localStore,e,!1).then(()=>da(s,e,n)).catch(ir)}async function ST(t,e){const n=K(t),s=e.batch.batchId;try{const r=await qI(n.localStore,e);Ip(n,s,null),Ep(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ur(n,r)}catch(r){await ir(r)}}async function DT(t,e,n){const s=K(t);try{const r=await function(i,o){const a=K(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(le(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Ip(s,e,n),Ep(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ur(s,r)}catch(r){await ir(r)}}function Ep(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ip(t,e,n){const s=K(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function da(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Tp(t,s)})}function Tp(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cp(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),xc(t))}function xu(t,e,n){for(const s of n)s instanceof yp?(t.ac.addReference(s.key,e),xT(t,s)):s instanceof vp?(M("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Tp(t,s.key)):$()}function xT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(M("SyncEngine","New document in limbo: "+n),t.oc.add(s),xc(t))}function xc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(fe.fromString(e)),s=t.fc.next();t.cc.set(s,new ET(n)),t.uc=t.uc.insert(n,s),ap(t.remoteStore,new Cn(Vt(pc(n.path)),s,2,uc.at))}}async function ur(t,e,n){const s=K(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Tc.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=K(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!or(u))throw u;M("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),g=d.snapshotVersion,b=d.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(h,b)}}}(s.localStore,i))}async function NT(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const s=await sp(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(v.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ur(n,s.ji)}}function kT(t,e){const n=K(t),s=n.cc.get(e);if(s&&s.nc)return Q().add(s.key);{let r=Q();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function RT(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AT.bind(null,e),e.sc.Wo=mT.bind(null,e.eventManager),e.sc.wc=yT.bind(null,e.eventManager),e}function MT(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ST.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DT.bind(null,e),e}class OT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return BI(this.persistence,new $I,e.initialUser,this.yt)}yc(e){return new PI(Ic.Bs,this.yt)}gc(e){return new WI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Du(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=NT.bind(null,this.syncEngine),await dT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gT}createDatastore(e){const n=Hi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new JI(r));var r;return function(i,o,a,c){return new tT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Du(this.syncEngine,a,0),o=Cu.C()?new Cu:new QI,new sT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new IT(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);M("RemoteStore","RemoteStore shutting down."),n._u.add(5),await lr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function bp(t,e,n){if(!n)throw new D(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FT(t,e,n,s){if(e===!0&&s===!0)throw new D(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nu(t){if(!O.isDocumentKey(t))throw new D(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ku(t){if(O.isDocumentKey(t))throw new D(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gi(t);throw new D(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function PT(t,e){if(e<=0)throw new D(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Ru=new Map;class Mu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,FT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wi{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fE;switch(n.type){case"gapi":const s=n.client;return new mE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ru.get(e);n&&(M("ComponentProvider","Removing Datastore"),Ru.delete(e),n.terminate())}(this),Promise.resolve()}}function VT(t,e,n,s={}){var r;const i=(t=Dt(t,Wi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&sa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Fe.MOCK_USER;else{o=Ry(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(c)}t._authCredentials=new dE(new Id(o,a))}}/**
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
 */class Ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Bt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bt(this.firestore,e,this._query)}}class Xt extends Bt{constructor(e,n,s){super(e,n,pc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new O(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function Ou(t,e,...n){if(t=ht(t),bp("collection","path",e),t instanceof Wi){const s=fe.fromString(e,...n);return ku(s),new Xt(t,null,s)}{if(!(t instanceof Ze||t instanceof Xt))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return ku(s),new Xt(t.firestore,null,s)}}function pa(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Td.R()),bp("doc","path",e),t instanceof Wi){const s=fe.fromString(e,...n);return Nu(s),new Ze(t,null,new O(s))}{if(!(t instanceof Ze||t instanceof Xt))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return Nu(s),new Ze(t.firestore,t instanceof Xt?t.converter:null,new O(s))}}/**
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
 *//**
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
 */class _p{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Pt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $T{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Fe.UNAUTHENTICATED,this.clientId=Td.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function UT(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await sp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function BT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qT(t);M("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Au(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Au(e.remoteStore,i)),t.onlineComponents=e}async function qT(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await UT(t,new OT)),t.offlineComponents}async function Cp(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await BT(t,new LT)),t.onlineComponents}function jT(t){return Cp(t).then(e=>e.syncEngine)}async function ga(t){const e=await Cp(t),n=e.eventManager;return n.onListen=TT.bind(null,e.syncEngine),n.onUnlisten=_T.bind(null,e.syncEngine),n}function HT(t,e,n={}){const s=new Yt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new _p({next:h=>{i.enqueueAndForget(()=>gp(r,u)),h.fromCache&&a.source==="server"?c.reject(new D(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new mp(o,l,{includeMetadataChanges:!0,Nu:!0});return pp(r,u)}(await ga(t),t.asyncQueue,e,n,s)),s.promise}class KT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ip(this,"async_queue_retry"),this.Wc=()=>{const n=Ao();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ao();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Yt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!or(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ac.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Lu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class kn extends Wi{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new KT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ap(this),this._firestoreClient.terminate()}}function zT(t,e){const n=typeof t=="object"?t:zh(),s=typeof t=="string"?t:e||"(default)",r=Qs(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=xy("firestore");i&&VT(r,...i)}return r}function Nc(t){return t._firestoreClient||Ap(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ap(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new AE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $T(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(Ke.fromBase64String(e))}catch(n){throw new D(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kc{constructor(e){this._methodName=e}}/**
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
 */class Rc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const GT=/^__.*__$/;class WT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ar(e,this.data,n,this.fieldTransforms)}}class Sp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new cn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Dp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Mc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ii(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Dp(this.sa)&&GT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class QT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Hi(e)}da(e,n,s,r=!1){return new Mc({sa:e,methodName:n,fa:s,path:$e.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Oc(t){const e=t._freezeSettings(),n=Hi(t._databaseId);return new QT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Lc("Data must be an object, but it was:",o,s);const a=xp(s,o);let c,l;if(i.merge)c=new ut(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ma(e,h,n);if(!o.contains(d))throw new D(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kp(u,d)||u.push(d)}c=new ut(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new WT(new Je(a),c,l)}class Yi extends kc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yi}}function XT(t,e,n,s){const r=t.da(1,e,n);Lc("Data must be an object, but it was:",r,s);const i=[],o=Je.empty();Mn(s,(c,l)=>{const u=Fc(e,c,n);l=ht(l);const h=r.ca(u);if(l instanceof Yi)i.push(u);else{const d=hr(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new ut(i);return new Sp(o,a,r.fieldTransforms)}function JT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[ma(e,s,n)],c=[r];if(i.length%2!=0)throw new D(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ma(e,i[d])),c.push(i[d+1]);const l=[],u=Je.empty();for(let d=a.length-1;d>=0;--d)if(!kp(l,a[d])){const g=a[d];let b=c[d];b=ht(b);const y=o.ca(g);if(b instanceof Yi)l.push(g);else{const R=hr(b,y);R!=null&&(l.push(g),u.set(g,R))}}const h=new ut(l);return new Sp(u,h,o.fieldTransforms)}function ZT(t,e,n,s=!1){return hr(n,t.da(s?4:3,e))}function hr(t,e){if(Np(t=ht(t)))return Lc("Unsupported field value:",e,t),xp(t,e);if(t instanceof kc)return function(n,s){if(!Dp(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hr(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HE(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Te.fromDate(n);return{timestampValue:si(s.yt,r)}}if(n instanceof Te){const r=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:si(s.yt,r)}}if(n instanceof Rc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof is)return{bytesValue:Xd(s.yt,n._byteString)};if(n instanceof Ze){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Gi(n)}`)}(t,e)}function xp(t,e){const n={};return bd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mn(t,(s,r)=>{const i=hr(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Np(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Rc||t instanceof is||t instanceof Ze||t instanceof kc)}function Lc(t,e,n){if(!Np(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gi(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function ma(t,e,n){if((e=ht(e))instanceof Qi)return e._internalPath;if(typeof e=="string")return Fc(t,e);throw ii("Field path arguments must be of type string or ",t,!1,void 0,n)}const eb=new RegExp("[~\\*/\\[\\]]");function Fc(t,e,n){if(e.search(eb)>=0)throw ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qi(...e.split("."))._internalPath}catch{throw ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ii(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(v.INVALID_ARGUMENT,a+t+c)}function kp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Rp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tb extends Rp{data(){return super.data()}}function Pc(t,e){return typeof e=="string"?Fc(t,e):e instanceof Qi?e._internalPath:e._delegate._internalPath}/**
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
 */function Mp(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vc{}class $c extends Vc{}function nb(t,e,...n){let s=[];e instanceof Vc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Bc).length,o=r.filter(a=>a instanceof Uc).length;if(i>1||i>0&&o>0)throw new D(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Uc extends $c{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Uc(e,n,s)}_apply(e){const n=this._parse(e);return Op(e._query,n),new Bt(e.firestore,e.converter,aa(e._query,n))}_parse(e){const n=Oc(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Pu(u,l);const d=[];for(const g of u)d.push(Fu(a,r,g));h={arrayValue:{values:d}}}else h=Fu(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Pu(u,l),h=ZT(o,i,u,l==="in"||l==="not-in");return Ie.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Bc extends Vc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:vt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Op(i,a),i=aa(i,a)}(e._query,n),new Bt(e.firestore,e.converter,aa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qc extends $c{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new zn(r,i);return function(a,c){if(gc(a)===null){const l=$i(a);l!==null&&Lp(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Bt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new fs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function sb(t,e="asc"){const n=e,s=Pc("orderBy",t);return qc._create(s,n)}class jc extends $c{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new jc(e,n,s)}_apply(e){return new Bt(e.firestore,e.converter,ei(e._query,this._limit,this._limitType))}}function rb(t){return PT("limit",t),jc._create("limit",t,"F")}function Fu(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new D(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Md(e)&&n.indexOf("/")!==-1)throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(fe.fromString(n));if(!O.isDocumentKey(s))throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return au(t,new O(s))}if(n instanceof Ze)return au(t,n._key);throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gi(n)}.`)}function Pu(t,e){if(!Array.isArray(t)||t.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Op(t,e){if(e.isInequality()){const s=$i(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new D(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=gc(t);i!==null&&Lp(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Lp(t,e,n){if(!n.isEqual(e))throw new D(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ib{convertValue(e,n="none"){switch(Nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const s={};return Mn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Rc(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const n=nn(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=fe.fromString(e);le(np(s));const r=new Hs(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||Pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ob(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fp extends Rp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Pc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mr extends Fp{data(e={}){return super.data(e)}}class Pp{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ts(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Mr(this._firestore,this._userDataWriter,s.key,s,new Ts(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Mr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Mr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ab(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ab(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Hc extends ib{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function cb(t){t=Dt(t,Bt);const e=Dt(t.firestore,kn),n=Nc(e),s=new Hc(e);return Mp(t._query),HT(n,t._query).then(r=>new Pp(e,s,t,r))}function lb(t,e,n,...s){t=Dt(t,Ze);const r=Dt(t.firestore,kn),i=Oc(r);let o;return o=typeof(e=ht(e))=="string"||e instanceof Qi?JT(i,"updateDoc",t._key,e,n,s):XT(i,"updateDoc",t._key,e),Kc(r,[o.toMutation(t._key,yt.exists(!0))])}function ub(t){return Kc(Dt(t.firestore,kn),[new yc(t._key,yt.none())])}function hb(t,e){const n=Dt(t.firestore,kn),s=pa(t),r=ob(t.converter,e);return Kc(n,[YT(Oc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,yt.exists(!1))]).then(()=>s)}function fb(t,...e){var n,s,r;t=ht(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Lu(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ze)l=Dt(t.firestore,kn),u=pc(t._key.path),c={next:h=>{e[o]&&e[o](db(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dt(t,Bt);l=Dt(h.firestore,kn),u=h._query;const d=new Hc(l);c={next:g=>{e[o]&&e[o](new Pp(l,d,h,g))},error:e[o+1],complete:e[o+2]},Mp(t._query)}return function(h,d,g,b){const y=new _p(b),R=new mp(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>pp(await ga(h),R)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>gp(await ga(h),R))}}(Nc(l),u,a,c)}function Kc(t,e){return function(n,s){const r=new Yt;return n.asyncQueue.enqueueAndForget(async()=>CT(await jT(n),s,r)),r.promise}(Nc(t),e)}function db(t,e,n){const s=n.docs.get(e._key),r=new Hc(t);return new Fp(t,r,e._key,s,new Ts(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){hs=n})(Lv),en(new Lt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new kn(new pE(n.getProvider("auth-internal")),new vE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),At(su,"3.8.0",t),At(su,"3.8.0","esm2017")})();const pb=t=>(Vg("data-v-78e21272"),t=t(),$g(),t),gb=["onClick"],mb={class:"add-card-div"},yb=pb(()=>J("br",null,null,-1)),vb={style:{"text-align":"center"}},wb=["src"],Eb={for:"imgFile",class:"imgUploadBtn"},Ib={class:"chooseColorDiv"},Tb={for:"color01"},bb=["checked"],_b={for:"color02"},Cb=["checked"],Ab={for:"color03"},Sb=["checked"],Db={for:"color04"},xb=["checked"],Nb={for:"color05"},kb=["checked"],Rb={style:{"text-align":"center",margin:"0"}},Mb={__name:"App",setup(t){const n=Kh({apiKey:"AIzaSyAkBG_WGNQRaaQVnPOvolvdy8eAXVPtMDo",authDomain:"note-d549b.firebaseapp.com",projectId:"note-d549b",storageBucket:"note-d549b.appspot.com",messagingSenderId:"381280428927",appId:"1:381280428927:web:69b4c78f9d65dca937704a",measurementId:"G-KPNSMZP8X7"});o0(n);const s=zT(n),r="Note",i=ot({}),o=(P,k)=>Math.floor(Math.random()*k)+P,a=()=>{var P=(Math.round(Math.random())*2-1)*o(0,15),k=window.innerWidth,Y=window.innerHeight,Ne=o(15,k-400),jt=o(15,Y-300);return{X:Ne,Y:jt,Deg:P}},c=async P=>{try{const k=await hb(Ou(s,r),P);de()}catch(k){console.error("Error adding document: ",k),alert("圖片太大張了")}},l=Ou(s,r),u=nb(l,sb("OrderDate","asc"),rb(50)),h=async()=>{(await cb(u)).forEach(k=>{k.id,k.data(),i.value[k.id]=k.data()})},d=async P=>{await ub(pa(s,r,P))};fb(u,P=>{i.value={},P.docs.forEach(k=>{i.value[k.id]=k.data()})}),h();const g=P=>new Promise((k,Y)=>{let Ne=new FileReader;Ne.onload=()=>{k(Ne.result)},Ne.onerror=()=>{Y(Ne.error)},Ne.readAsDataURL(P)}),b=ot(""),y=ot(2),R=ot(""),U=ot(""),ee=P=>{g(P).then(k=>{k.length>1048487?(alert("圖片檔案太大了!換一張!"),document.getElementById("imgFile").value=""):b.value=k}).catch(k=>console.log(k))},V=P=>{P.target.files.length>0&&ee(P.target.files[0])},te=()=>{document.getElementById("add-card-cover").classList.add("active")},de=()=>{document.getElementById("add-card-cover").classList.remove("active"),b.value="",y.value=2,R.value="",U.value=""},Qe=P=>P<10?"0"+P:P,ze=P=>{let k=P.getFullYear(),Y=Qe(P.getMonth()+1),Ne=Qe(P.getDate()),jt=Qe(P.getHours()),fr=Qe(P.getMinutes()),ft=Qe(P.getSeconds());return k+"-"+Y+"-"+Ne+" "+jt+":"+fr+":"+ft},G=()=>{var P=new Date;let k={Name:R.value,Content:U.value,ImageBase64:b.value,Color:y.value,Date:ze(P),OrderDate:ze(P),Pos:a()};c(k)},me=ot(0),ae=ot(0),Ae=ot(!1),Le=ot(""),rt=ot(0),qt=ot(0),gs=async P=>{const k=pa(s,r,P);await lb(k,i.value[P])},xe=(P,k,Y)=>{Ae.value=!0,Le.value=Y,me.value=P.clientX,ae.value=P.clientY,rt.value=P.clientX-k.Pos.X,qt.value=P.clientY-k.Pos.Y,i.value[Y].OrderDate=ze(new Date)},ue=P=>{me.value=P.clientX,ae.value=P.clientY,Ae.value&&(i.value[Le.value].Pos.X=me.value-rt.value,i.value[Le.value].Pos.Y=ae.value-qt.value)},ie=P=>{Ae.value=!1,gs(Le.value)},Nt=P=>{Ae.value=!1,gs(Le.value)};return(P,k)=>(Rt(),Un(Xe,null,[(Rt(!0),Un(Xe,null,cm(i.value,(Y,Ne)=>(Rt(),Oa(vy,{key:Ne,"card-key":Ne,"card-info":Y,onMousedown:jt=>xe(jt,Y,Ne),onMouseup:ie,onMousemove:ue},{default:dh(()=>[J("div",{class:"delbtn",onClick:jt=>d(Ne)},null,8,gb)]),_:2},1032,["card-key","card-info","onMousedown"]))),128)),J("div",{class:"add-card-cover",id:"add-card-cover",onMousemove:ue,onMouseup:Nt},[J("div",mb,[J("div",{class:"closeBtn",onClick:k[0]||(k[0]=Y=>de())}),J("div",null,[gn(" 暱稱 "),al(J("input",{type:"text","onUpdate:modelValue":k[1]||(k[1]=Y=>R.value=Y),maxlength:"50"},null,512),[[Cl,R.value]])]),J("div",null,[gn(" 內容 "),al(J("input",{type:"text","onUpdate:modelValue":k[2]||(k[2]=Y=>U.value=Y)},null,512),[[Cl,U.value]])]),J("div",null,[gn(" 圖片"),yb,J("div",vb,[J("img",{src:b.value,alt:""},null,8,wb)]),J("label",Eb,[J("input",{type:"file",id:"imgFile",style:{display:"none"},accept:"image/png, image/jpeg, .gif",onChange:V},null,32),gn(" 上傳 ")])]),J("div",null,[gn(" 便條顏色 "),J("div",Ib,[J("label",Tb,[J("input",{type:"radio",name:"cardColor",id:"color01",onClick:k[3]||(k[3]=Y=>y.value=1),checked:y.value===1},null,8,bb)]),J("label",_b,[J("input",{type:"radio",name:"cardColor",id:"color02",onClick:k[4]||(k[4]=Y=>y.value=2),checked:y.value===2},null,8,Cb)]),J("label",Ab,[J("input",{type:"radio",name:"cardColor",id:"color03",onClick:k[5]||(k[5]=Y=>y.value=3),checked:y.value===3},null,8,Sb)]),J("label",Db,[J("input",{type:"radio",name:"cardColor",id:"color04",onClick:k[6]||(k[6]=Y=>y.value=4),checked:y.value===4},null,8,xb)]),J("label",Nb,[J("input",{type:"radio",name:"cardColor",id:"color05",onClick:k[7]||(k[7]=Y=>y.value=5),checked:y.value===5},null,8,kb)])])]),J("div",Rb,[J("button",{class:"addCardBtn",onClick:k[8]||(k[8]=Y=>G())},"新增")])])],32),J("button",{class:"addBtn",onClick:k[9]||(k[9]=Y=>te())})],64))}},Ob=Fh(Mb,[["__scopeId","data-v-78e21272"]]);uy(Ob).mount("#app");
