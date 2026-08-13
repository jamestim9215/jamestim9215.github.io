const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-mUjibAhu.js","assets/Login-BQhXKmO7.css","assets/Register-CGeOeXYr.js","assets/Register-D-1BytVs.css","assets/PendingApproval-DuQtPBXD.js","assets/PendingApproval-xM1fpfx-.css","assets/Home-BXNcQJs4.js","assets/settings-BL7MwFeI.js","assets/currency-B4u1jvEw.js","assets/CategoryTrendStack-C5E3mbya.js","assets/CategoryTrendStack-D87Q8JZT.css","assets/Home-BnKfCECo.css","assets/Transactions-CkjZ31MC.js","assets/Transactions-D4PHhHtw.css","assets/Analytics-BaZQN1cQ.js","assets/Analytics-CiMiTS36.css","assets/Settings-D5UH-8iT.js","assets/Settings-DSTGSK06.css","assets/Admin-Cmu9rAZS.js","assets/Admin-6x71mAR7.css","assets/NotFound-Cv0MDaLW.js","assets/NotFound-BCOM3UMU.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Ss=[],An=()=>{},im=()=>!1,za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qa=t=>t.startsWith("onUpdate:"),at=Object.assign,Eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uv=Object.prototype.hasOwnProperty,Ve=(t,e)=>Uv.call(t,e),le=Array.isArray,Cs=t=>co(t)==="[object Map]",Qs=t=>co(t)==="[object Set]",Pf=t=>co(t)==="[object Date]",ve=t=>typeof t=="function",We=t=>typeof t=="string",Yt=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",om=t=>(Me(t)||ve(t))&&ve(t.then)&&ve(t.catch),am=Object.prototype.toString,co=t=>am.call(t),Bv=t=>co(t).slice(8,-1),lm=t=>co(t)==="[object Object]",Ya=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jv=/-\w/g,Ft=Ja(t=>t.replace(jv,e=>e.slice(1).toUpperCase())),$v=/\B([A-Z])/g,cs=Ja(t=>t.replace($v,"-$1").toLowerCase()),Xa=Ja(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yl=Ja(t=>t?`on${Xa(t)}`:""),wn=(t,e)=>!Object.is(t,e),la=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let Df;const el=()=>Df||(Df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function an(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Kv(r):an(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Me(t))return t}const Hv=/;(?![^(]*\))/g,Wv=/:([^]+)/,Gv=/\/\*[^]*?\*\//g;function Kv(t){const e={};return t.replace(Gv,"").split(Hv).forEach(n=>{if(n){const r=n.split(Wv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ht(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ht(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qv=vu(zv);function um(t){return!!t||t===""}function Yv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Pr(t[r],e[r]);return n}function Pr(t,e){if(t===e)return!0;let n=Pf(t),r=Pf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Yt(t),r=Yt(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?Yv(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Pr(t[o],e[o]))return!1}}return String(t)===String(e)}function Iu(t,e){return t.findIndex(n=>Pr(n,e))}const hm=t=>!!(t&&t.__v_isRef===!0),Ke=t=>We(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===am||!ve(t.toString))?hm(t)?Ke(t.value):JSON.stringify(t,fm,2):String(t),fm=(t,e)=>hm(e)?fm(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Jl(r,i)+" =>"]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jl(n))}:Yt(e)?Jl(e):Me(e)&&!le(e)&&!lm(e)?String(e):e,Jl=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class dm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ut&&(ut.active?(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){++this._on===1&&(this.prevScope=ut,ut=this)}off(){if(this._on>0&&--this._on===0){if(ut===this)ut=this.prevScope;else{let e=ut;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pm(t){return new dm(t)}function mm(){return ut}function Jv(t,e=!1){ut&&ut.cleanups.push(t)}let je;const Xl=new WeakSet;class gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ut&&(ut.active?ut.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ym(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kf(this),vm(this);const e=je,n=hn;je=this,hn=!0;try{return this.fn()}finally{Em(this),je=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,kf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let _m=0,ki,Ni;function ym(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=ki,ki=t}function wu(){_m++}function Tu(){if(--_m>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function vm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Em(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Au(r),Xv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Im(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Im(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$i)||(t.globalVersion=$i,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pc(t))))return;t.flags|=2;const e=t.dep,n=je,r=hn;je=t,hn=!0;try{vm(t);const s=t.fn(t._value);(e.version===0||wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,hn=r,Em(t),t.flags&=-3}}function Au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const wm=[];function Qn(){wm.push(hn),hn=!1}function Yn(){const t=wm.pop();hn=t===void 0?!0:t}function kf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let $i=0;class Zv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!hn||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new Zv(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,Tm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,$i++,this.notify(e)}notify(e){wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tu()}}}function Tm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Tm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ia=new WeakMap,Jr=Symbol(""),Dc=Symbol(""),qi=Symbol("");function Rt(t,e,n){if(hn&&je){let r=Ia.get(t);r||Ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bu),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=Ia.get(t);if(!o){$i++;return}const l=c=>{c&&c.trigger()};if(wu(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&Ya(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===qi||!Yt(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Jr)),Cs(t)&&l(o.get(Dc)));break;case"delete":c||(l(o.get(Jr)),Cs(t)&&l(o.get(Dc)));break;case"set":Cs(t)&&l(o.get(Jr));break}}Tu()}function eE(t,e){const n=Ia.get(t);return n&&n.get(e)}function ys(t){const e=Pe(t);return e===t?e:(Rt(e,"iterate",qi),zt(t)?e:e.map(dn))}function tl(t){return Rt(t=Pe(t),"iterate",qi),t}function En(t,e){return Jn(t)?Ms(Gn(t)?dn(e):e):dn(e)}const tE={__proto__:null,[Symbol.iterator](){return Zl(this,Symbol.iterator,t=>En(this,t))},concat(...t){return ys(this).concat(...t.map(e=>le(e)?ys(e):e))},entries(){return Zl(this,"entries",t=>(t[1]=En(this,t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(r=>En(this,r)),arguments)},find(t,e){return On(this,"find",t,e,n=>En(this,n),arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,n=>En(this,n),arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return ec(this,"includes",t)},indexOf(...t){return ec(this,"indexOf",t)},join(t){return ys(this).join(t)},lastIndexOf(...t){return ec(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return mi(this,"pop")},push(...t){return mi(this,"push",t)},reduce(t,...e){return Nf(this,"reduce",t,e)},reduceRight(t,...e){return Nf(this,"reduceRight",t,e)},shift(){return mi(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return mi(this,"splice",t)},toReversed(){return ys(this).toReversed()},toSorted(t){return ys(this).toSorted(t)},toSpliced(...t){return ys(this).toSpliced(...t)},unshift(...t){return mi(this,"unshift",t)},values(){return Zl(this,"values",t=>En(this,t))}};function Zl(t,e,n){const r=tl(t),s=r[e]();return r!==t&&!zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const nE=Array.prototype;function On(t,e,n,r,s,i){const o=tl(t),l=o!==t&&!zt(t),c=o[e];if(c!==nE[e]){const d=c.apply(t,i);return l?dn(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,En(t,d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Nf(t,e,n,r){const s=tl(t),i=s!==t&&!zt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,d){return l&&(l=!1,u=En(t,u)),n.call(this,u,En(t,f),d,t)}):n.length>3&&(o=function(u,f,d){return n.call(this,u,f,d,t)}));const c=s[e](o,...r);return l?En(t,c):c}function ec(t,e,n){const r=Pe(t);Rt(r,"iterate",qi);const s=r[e](...n);return(s===-1||s===!1)&&nl(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function mi(t,e,n=[]){Qn(),wu();const r=Pe(t)[e].apply(t,n);return Tu(),Yn(),r}const rE=vu("__proto__,__v_isRef,__isVue"),Am=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function sE(t){Yt(t)||(t=String(t));const e=Pe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class bm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?pE:Pm:i?Cm:Sm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=tE[n]))return c;if(n==="hasOwnProperty")return sE}const l=Reflect.get(e,n,et(e)?e:r);if((Yt(n)?Am.has(n):rE(n))||(s||Rt(e,"get",n),i))return l;if(et(l)){const c=o&&Ya(n)?l:l.value;return s&&Me(c)?Nc(c):c}return Me(l)?s?Nc(l):es(l):l}}class Rm extends bm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=le(e)&&Ya(n);if(!this._isShallow){const u=Jn(i);if(!zt(r)&&!Jn(r)&&(i=Pe(i),r=Pe(r)),!o&&et(i)&&!et(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Ve(e,n),c=Reflect.set(e,n,r,et(e)?e:s);return e===Pe(s)&&c&&(l?wn(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yt(n)||!Am.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",le(e)?"length":Jr),Reflect.ownKeys(e)}}class iE extends bm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oE=new Rm,aE=new iE,lE=new Rm(!0);const kc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function cE(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Cs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?kc:e?Ms:dn;return!e&&Rt(i,"iterate",c?Dc:Jr),at(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}}})}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uE(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(wn(s,l)&&Rt(o,"get",s),Rt(o,"get",l));const{has:c}=Yo(o),u=e?kc:t?Ms:dn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(Pe(s),"iterate",Jr),s.size},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(wn(s,l)&&Rt(o,"has",s),Rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),u=e?kc:t?Ms:dn;return!t&&Rt(c,"iterate",Jr),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return at(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){const i=Pe(this),o=Yo(i),l=Pe(s),c=!e&&!zt(s)&&!Jn(s)?l:s;return o.has.call(i,c)||wn(s,c)&&o.has.call(i,s)||wn(l,c)&&o.has.call(i,l)||(i.add(c),Bn(i,"add",c,c)),this},set(s,i){!e&&!zt(i)&&!Jn(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=Yo(o);let u=l.call(o,s);u||(s=Pe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?wn(i,f)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=Yo(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Bn(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cE(s,t,e)}),n}function Ru(t,e){const n=uE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const hE={get:Ru(!1,!1)},fE={get:Ru(!1,!0)},dE={get:Ru(!0,!1)};const Sm=new WeakMap,Cm=new WeakMap,Pm=new WeakMap,pE=new WeakMap;function mE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function es(t){return Jn(t)?t:Su(t,!1,oE,hE,Sm)}function Dm(t){return Su(t,!1,lE,fE,Cm)}function Nc(t){return Su(t,!0,aE,dE,Pm)}function Su(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=mE(Bv(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Gn(t){return Jn(t)?Gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function zt(t){return!!(t&&t.__v_isShallow)}function nl(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Cu(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&cm(t,"__v_skip",!0),t}const dn=t=>Me(t)?es(t):t,Ms=t=>Me(t)?Nc(t):t;function et(t){return t?t.__v_isRef===!0:!1}function ln(t){return km(t,!1)}function gE(t){return km(t,!0)}function km(t,e){return et(t)?t:new _E(t,e)}class _E{constructor(e,n){this.dep=new bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:dn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||zt(e)||Jn(e);e=r?e:Pe(e),wn(e,n)&&(this._rawValue=e,this._value=r?e:dn(e),this.dep.trigger())}}function tn(t){return et(t)?t.value:t}const yE={get:(t,e,n)=>e==="__v_raw"?t:tn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nm(t){return Gn(t)?t:new Proxy(t,yE)}function vE(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=IE(t,n);return e}class EE{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Yt(n)?n:String(n),this._raw=Pe(e);let s=!0,i=e;if(!le(e)||Yt(this._key)||!Ya(this._key))do s=!nl(i)||zt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=tn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&et(this._raw[this._key])){const n=this._object[this._key];if(et(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return eE(this._raw,this._key)}}function IE(t,e,n){return new EE(t,e,n)}class wE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return ym(this,!0),!0}get value(){const e=this.dep.track();return Im(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function TE(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new wE(r,s,n)}const Xo={},wa=new WeakMap;let Wr;function AE(t,e=!1,n=Wr){if(n){let r=wa.get(n);r||wa.set(n,r=[]),r.push(t)}}function bE(t,e,n=Be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:zt(q)||s===!1||s===0?jn(q,1):jn(q);let f,d,m,v,C=!1,k=!1;if(et(t)?(d=()=>t.value,C=zt(t)):Gn(t)?(d=()=>u(t),C=!0):le(t)?(k=!0,C=t.some(q=>Gn(q)||zt(q)),d=()=>t.map(q=>{if(et(q))return q.value;if(Gn(q))return u(q);if(ve(q))return c?c(q,2):q()})):ve(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Qn();try{m()}finally{Yn()}}const q=Wr;Wr=f;try{return c?c(t,3,[v]):t(v)}finally{Wr=q}}:d=An,e&&s){const q=d,ee=s===!0?1/0:s;d=()=>jn(q(),ee)}const S=mm(),B=()=>{f.stop(),S&&S.active&&Eu(S.effects,f)};if(i&&e){const q=e;e=(...ee)=>{const re=q(...ee);return B(),re}}let V=k?new Array(t.length).fill(Xo):Xo;const x=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const ee=f.run();if(q||s||C||(k?ee.some((re,T)=>wn(re,V[T])):wn(ee,V))){m&&m();const re=Wr;Wr=f;try{const T=[ee,V===Xo?void 0:k&&V[0]===Xo?[]:V,v];V=ee,c?c(e,3,T):e(...T)}finally{Wr=re}}}else f.run()};return l&&l(x),f=new gm(d),f.scheduler=o?()=>o(x,!1):x,v=q=>AE(q,!1,f),m=f.onStop=()=>{const q=wa.get(f);if(q){if(c)c(q,4);else for(const ee of q)ee();wa.delete(f)}},e?r?x(!0):V=f.run():o?o(x.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function jn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,et(t))jn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(Qs(t)||Cs(t))t.forEach(r=>{jn(r,e,n)});else if(lm(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(t,e,n,r){try{return r?t(...r):t()}catch(s){rl(s,e,n)}}function rn(t,e,n,r){if(ve(t)){const s=uo(t,e,n,r);return s&&om(s)&&s.catch(i=>{rl(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}}function rl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){Qn(),uo(i,null,10,[t,c,u]),Yn();return}}RE(t,n,s,r,o)}function RE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Lt=[];let vn=-1;const Ps=[];let gr=null,Es=0;const Om=Promise.resolve();let Ta=null;function sl(t){const e=Ta||Om;return t?e.then(this?t.bind(this):t):e}function SE(t){let e=vn+1,n=Lt.length;for(;e<n;){const r=e+n>>>1,s=Lt[r],i=Hi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Pu(t){if(!(t.flags&1)){const e=Hi(t),n=Lt[Lt.length-1];!n||!(t.flags&2)&&e>=Hi(n)?Lt.push(t):Lt.splice(SE(e),0,t),t.flags|=1,Vm()}}function Vm(){Ta||(Ta=Om.then(Mm))}function CE(t){if(!le(t))gr&&t.id===-1?gr.splice(Es+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Ps.push(t[e]);Vm()}function Of(t,e,n=vn+1){for(;n<Lt.length;n++){const r=Lt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Lt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xm(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>Hi(n)-Hi(r));if(Ps.length=0,gr){for(let n=0;n<e.length;n++)gr.push(e[n]);return}for(gr=e,Es=0;Es<gr.length;Es++){const n=gr[Es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gr=null,Es=0}}const Hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mm(t){try{for(vn=0;vn<Lt.length;vn++){const e=Lt[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Lt.length;vn++){const e=Lt[vn];e&&(e.flags&=-2)}vn=-1,Lt.length=0,xm(),Ta=null,(Lt.length||Ps.length)&&Mm()}}let _t=null,Lm=null;function Aa(t){const e=_t;return _t=t,Lm=t&&t.type.__scopeId||null,e}function cn(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ca(-1);const i=Aa(e),o=Kn.length;let l;try{l=t(...s)}finally{for(let c=Kn.length;c>o;c--)Vu();Aa(i),r._d&&Ca(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Vn(t,e){if(_t===null)return t;const n=ul(_t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Be]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Qn(),rn(c,n,8,[t.el,l,t,e]),Yn())}}function ca(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=xu();if(r||Xr){let s=Xr?Xr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function PE(){return!!(xu()||Xr)}const DE=Symbol.for("v-scx"),kE=()=>nn(DE);function Tr(t,e,n){return Fm(t,e,n)}function Fm(t,e,n=Be){const{immediate:r,deep:s,flush:i,once:o}=n,l=at({},n),c=e&&r||!e&&i!=="post";let u;if(Qi){if(i==="sync"){const v=kE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=An,v.resume=An,v.pause=An,v}}const f=Pt;l.call=(v,C,k)=>rn(v,f,C,k);let d=!1;i==="post"?l.scheduler=v=>{xt(v,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(v,C)=>{C?v():Pu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),d&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=bE(t,e,l);return Qi&&(u?u.push(m):c&&m()),m}function NE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Um(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=fo(this),l=Fm(s,i.bind(r),n);return o(),l}function Um(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const pr=new WeakMap,Bm=Symbol("_vte"),il=t=>t.__isTeleport,Kr=t=>t&&(t.disabled||t.disabled===""),OE=t=>t&&(t.defer||t.defer===""),Vf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,xf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Oc=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},VE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:d,pbc:m,o:{insert:v,querySelector:C,createText:k,createComment:S,parentNode:B}}=u,V=Kr(e.props);let{dynamicChildren:x}=e;const q=(T,y,_)=>{T.shapeFlag&16&&f(T.children,y,_,s,i,o,l,c)},ee=(T=e)=>{const y=Kr(T.props),_=T.target=Oc(T.props,C),w=Vc(_,T,k,v);_&&(o!=="svg"&&Vf(_)?o="svg":o!=="mathml"&&xf(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),y||(q(T,_,w),Ii(T,!1)))},re=T=>{const y=()=>{if(pr.get(T)===y){if(pr.delete(T),Kr(T.props)){const _=B(T.el)||n;q(T,_,T.anchor),Ii(T,!0)}ee(T)}};pr.set(T,y),xt(y,i)};if(t==null){const T=e.el=k(""),y=e.anchor=k("");if(v(T,n,r),v(y,n,r),OE(e.props)||i&&i.pendingBranch){re(e);return}V&&(q(e,n,y),Ii(e,!0)),ee()}else{e.el=t.el;const T=e.anchor=t.anchor,y=pr.get(t);if(y){y.flags|=8,pr.delete(t),re(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,w=e.targetAnchor=t.targetAnchor,R=Kr(t.props),A=R?n:_,E=R?T:w;if(o==="svg"||Vf(_)?o="svg":(o==="mathml"||xf(_))&&(o="mathml"),x?(m(t.dynamicChildren,x,A,s,i,o,l),Ou(t,e,!0)):c||d(t,e,A,E,s,i,o,l,!1),V)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Zo(e,n,T,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ae=Oc(e.props,C);Ae&&(e.target=Ae,Zo(e,Ae,null,u,0))}else R&&Zo(e,_,w,u,1);Ii(e,V)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:d,props:m}=t,v=Kr(m),C=i||!v,k=pr.get(t);if(k&&(k.flags|=8,pr.delete(t)),d&&(s(u),s(f)),i&&s(c),!k&&(v||d)&&o&16)for(let S=0;S<l.length;S++){const B=l[S];r(B,e,n,C,!!B.dynamicChildren)}},move:Zo,hydrate:xE};function Zo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,d=i===2;if(d&&r(o,e,n),!pr.has(t)&&(!d||Kr(f))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);d&&r(l,e,n)}function xE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},d){function m(S,B){let V=B;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,S._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}}function v(S,B){B.anchor=d(o(S),B,l(S),n,r,s,i)}const C=e.target=Oc(e.props,c),k=Kr(e.props);if(C){const S=C._lpa||C.firstChild;e.shapeFlag&16&&(k?(v(t,e),m(C,S),e.targetAnchor||Vc(C,e,f,u,l(t)===C?t:null)):(e.anchor=o(t),m(C,S),e.targetAnchor||Vc(C,e,f,u),d(S&&o(S),e,C,n,r,s,i))),Ii(e,k)}else k&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const jm=VE;function Ii(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Vc(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Bm]=o,t&&(r(i,t,s),r(o,t,s)),o}const en=Symbol("_leaveCb"),gi=Symbol("_enterCb");function ME(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ho(()=>{t.isMounted=!0}),Du(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],$m={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},qm=t=>{const e=t.subTree;return e.component?qm(e.component):e},LE={name:"BaseTransition",props:$m,setup(t,{slots:e}){const n=xu(),r=ME();return()=>{const s=e.default&&Gm(e.default(),!0),i=s&&s.length?Hm(s):n.subTree?nt():void 0;if(!i)return;const o=Pe(t),{mode:l}=o;if(r.isLeaving)return tc(i);const c=ba(i);if(!c)return tc(i);let u=xc(c,o,r,n,d=>u=d);c.type!==Ct&&Wi(c,u);let f=n.subTree&&ba(n.subTree);if(f&&f.type!==Ct&&!zr(f,c)&&qm(n).type!==Ct){let d=xc(f,o,r,n);if(Wi(f,d),l==="out-in"&&c.type!==Ct)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},tc(i);l==="in-out"&&c.type!==Ct?d.delayLeave=(m,v,C)=>{const k=Wm(r,f);k[String(f.key)]=f,m[en]=()=>{v(),m[en]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Hm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ct){e=n;break}}return e}const FE=LE;function Wm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function xc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:v,onAfterLeave:C,onLeaveCancelled:k,onBeforeAppear:S,onAppear:B,onAfterAppear:V,onAppearCancelled:x}=e,q=String(t.key),ee=Wm(n,t),re=(_,w)=>{_&&rn(_,r,9,w)},T=(_,w)=>{const R=w[1];re(_,w),le(_)?_.every(A=>A.length<=1)&&R():_.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(_){let w=c;if(!n.isMounted)if(i)w=S||c;else return;_[en]&&_[en](!0);const R=ee[q];R&&zr(t,R)&&R.el[en]&&R.el[en](),re(w,[_])},enter(_){if(ee[q]===t)return;let w=u,R=f,A=d;if(!n.isMounted)if(i)w=B||u,R=V||f,A=x||d;else return;let E=!1;_[gi]=Ge=>{E||(E=!0,Ge?re(A,[_]):re(R,[_]),y.delayedLeave&&y.delayedLeave(),_[gi]=void 0)};const Ae=_[gi].bind(null,!1);w?T(w,[_,Ae]):Ae()},leave(_,w){const R=String(t.key);if(_[gi]&&_[gi](!0),n.isUnmounting)return w();re(m,[_]);let A=!1;_[en]=Ae=>{A||(A=!0,w(),Ae?re(k,[_]):re(C,[_]),_[en]=void 0,ee[R]===t&&delete ee[R])};const E=_[en].bind(null,!1);ee[R]=t,v?T(v,[_,E]):E()},clone(_){const w=xc(_,e,n,r,s);return s&&s(w),w}};return y}function tc(t){if(ol(t))return t=Dr(t),t.children=null,t}function ba(t){if(!ol(t))return il(t.type)&&t.children?Hm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function Wi(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Wi(il(n.type)&&ba(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ze?(o.patchFlag&128&&s++,r=r.concat(Gm(o.children,e,l))):(e||o.type!==Ct)&&r.push(l!=null?Dr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Km(t,e){return ve(t)?at({name:t.name},e,{setup:t}):t}function zm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ra=new WeakMap;function Oi(t,e,n,r,s=!1){if(le(t)){t.forEach((k,S)=>Oi(k,e&&(le(e)?e[S]:e),n,r,s));return}if(Ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Oi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ul(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Be?l.refs={}:l.refs,d=l.setupState,m=Pe(d),v=d===Be?im:k=>Mf(f,k)?!1:Ve(m,k),C=(k,S)=>!(S&&Mf(f,S));if(u!=null&&u!==c){if(Lf(e),We(u))f[u]=null,v(u)&&(d[u]=null);else if(et(u)){const k=e;C(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(ve(c))uo(c,l,12,[o,f]);else{const k=We(c),S=et(c);if(k||S){const B=()=>{if(t.f){const V=k?v(c)?d[c]:f[c]:C()||!t.k?c.value:f[t.k];if(s)le(V)&&Eu(V,i);else if(le(V))V.includes(i)||V.push(i);else if(k)f[c]=[i],v(c)&&(d[c]=f[c]);else{const x=[i];C(c,t.k)&&(c.value=x),t.k&&(f[t.k]=x)}}else k?(f[c]=o,v(c)&&(d[c]=o)):S&&(C(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const V=()=>{B(),Ra.delete(t)};V.id=-1,Ra.set(t,V),xt(V,n)}else Lf(t),B()}}}function Lf(t){const e=Ra.get(t);e&&(e.flags|=8,Ra.delete(t))}el().requestIdleCallback;el().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,ol=t=>t.type.__isKeepAlive;function UE(t,e){Qm(t,"a",e)}function BE(t,e){Qm(t,"da",e)}function Qm(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(al(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ol(s.parent.vnode)&&jE(r,e,n,s),s=s.parent}}function jE(t,e,n,r){const s=al(e,t,r,!0);Ym(()=>{Eu(r[e],s)},n)}function al(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qn();const l=fo(n),c=rn(e,n,t,o);return l(),Yn(),c});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=Pt)=>{(!Qi||t==="sp")&&al(t,(...r)=>e(...r),n)},$E=rr("bm"),ho=rr("m"),qE=rr("bu"),HE=rr("u"),Du=rr("bum"),Ym=rr("um"),WE=rr("sp"),GE=rr("rtg"),KE=rr("rtc");function zE(t,e=Pt){al("ec",t,e)}const Jm="components";function Xm(t,e){return eg(Jm,t,!0,e)||t}const Zm=Symbol.for("v-ndc");function QE(t){return We(t)?eg(Jm,t,!1)||t:t||Zm}function eg(t,e,n=!0,r=!1){const s=_t||Pt;if(s){const i=s.type;{const l=OI(i,!1);if(l&&(l===e||l===Ft(e)||l===Xa(Ft(e))))return i}const o=Ff(s[t]||i[t],e)||Ff(s.appContext[t],e);return!o&&r?i:o}}function Ff(t,e){return t&&(t[e]||t[Ft(e)]||t[Xa(Ft(e))])}function bs(t,e,n,r){let s;const i=n,o=le(t);if(o||We(t)){const l=o&&Gn(t);let c=!1,u=!1;l&&(c=!zt(t),u=Jn(t),t=tl(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?u?Ms(dn(t[f])):dn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function ks(t,e,n,r,s,i){if(n==null&&(n={}),_t.ce||_t.parent&&Ds(_t.parent)&&_t.parent.ce){const u=i!=null&&n.key==null?at({},n,{key:i}):n,f=Object.keys(u).length>0;return e!=="default"&&(u.name=e),oe(),fn(Ze,null,[Le("slot",u,r&&r())],f?-2:64)}let o=t[e];o&&o._c&&(o._d=!1);const l=Kn.length;oe();let c;try{const u=o&&tg(o(n)),f=n.key||i||u&&u.key;c=fn(Ze,{key:(f&&!Yt(f)?f:`_${e}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&t._===1?64:-2)}catch(u){for(let f=Kn.length;f>l;f--)Vu();throw u}finally{o&&o._c&&(o._d=!0)}return c}function tg(t){return t.some(e=>Ki(e)?!(e.type===Ct||e.type===Ze&&!tg(e.children)):!0)?t:null}const Mc=t=>t?Eg(t)?ul(t):Mc(t.parent):null,Vi=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mc(t.parent),$root:t=>Mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rg(t),$forceUpdate:t=>t.f||(t.f=()=>{Pu(t.update)}),$nextTick:t=>t.n||(t.n=sl.bind(t.proxy)),$watch:t=>NE.bind(t)}),nc=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ve(t,e),YE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nc(r,e))return o[e]=1,r[e];if(s!==Be&&Ve(s,e))return o[e]=2,s[e];if(Ve(i,e))return o[e]=3,i[e];if(n!==Be&&Ve(n,e))return o[e]=4,n[e];Lc&&(o[e]=0)}}const u=Vi[e];let f,d;if(u)return e==="$attrs"&&Rt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Be&&Ve(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Ve(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nc(s,e)?(s[e]=n,!0):r!==Be&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Be&&l[0]!=="$"&&Ve(t,l)||nc(e,l)||Ve(i,l)||Ve(r,l)||Ve(Vi,l)||Ve(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lc=!0;function JE(t){const e=rg(t),n=t.proxy,r=t.ctx;Lc=!1,e.beforeCreate&&Bf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:v,updated:C,activated:k,deactivated:S,beforeDestroy:B,beforeUnmount:V,destroyed:x,unmounted:q,render:ee,renderTracked:re,renderTriggered:T,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:R,components:A,directives:E,filters:Ae}=e;if(u&&XE(u,r,null),o)for(const he in o){const we=o[he];ve(we)&&(r[he]=we.bind(n))}if(s){const he=s.call(n,n);Me(he)&&(t.data=es(he))}if(Lc=!0,i)for(const he in i){const we=i[he],Et=ve(we)?we.bind(n,n):ve(we.get)?we.get.bind(n,n):An,ae=!ve(we)&&ve(we.set)?we.set.bind(n):An,O=qe({get:Et,set:ae});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>O.value,set:H=>O.value=H})}if(l)for(const he in l)ng(l[he],r,n,he);if(c){const he=ve(c)?c.call(n):c;Reflect.ownKeys(he).forEach(we=>{ca(we,he[we])})}f&&Bf(f,t,"c");function De(he,we){le(we)?we.forEach(Et=>he(Et.bind(n))):we&&he(we.bind(n))}if(De($E,d),De(ho,m),De(qE,v),De(HE,C),De(UE,k),De(BE,S),De(zE,y),De(KE,re),De(GE,T),De(Du,V),De(Ym,q),De(WE,_),le(w))if(w.length){const he=t.exposed||(t.exposed={});w.forEach(we=>{Object.defineProperty(he,we,{get:()=>n[we],set:Et=>n[we]=Et,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===An&&(t.render=ee),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),E&&(t.directives=E),_&&zm(t)}function XE(t,e,n=An){le(t)&&(t=Fc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Bf(t,e,n){rn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ng(t,e,n,r){let s=r.includes(".")?Um(n,r):()=>n[r];if(We(t)){const i=e[t];ve(i)&&Tr(s,i)}else if(ve(t))Tr(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>ng(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&Tr(s,i,t)}}function rg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Sa(c,u,o,!0)),Sa(c,e,o)),Me(e)&&i.set(e,c),c}function Sa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Sa(t,i,n,!0),s&&s.forEach(o=>Sa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=ZE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ZE={data:jf,props:$f,emits:$f,methods:wi,computed:wi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:wi,directives:wi,watch:tI,provide:jf,inject:eI};function jf(t,e){return e?t?function(){return at(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function eI(t,e){return wi(Fc(t),Fc(e))}function Fc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?at(Object.create(null),t,e):e}function $f(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:at(Object.create(null),Uf(t),Uf(e??{})):e}function tI(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function sg(){return{app:null,config:{isNativeTag:im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nI=0;function rI(t,e){return function(r,s=null){ve(r)||(r=at({},r)),s!=null&&!Me(s)&&(s=null);const i=sg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:nI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xI,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&ve(f.install)?(o.add(f),f.install(u,...d)):ve(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const v=u._ceVNode||Le(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,u._container=f,f.__vue_app__=u,ul(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(rn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Xr;Xr=u;try{return f()}finally{Xr=d}}};return u}}let Xr=null;const sI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function iI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&sI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(Za)));let l,c=r[l=Yl(e)]||r[l=Yl(Ft(e))];!c&&i&&(c=r[l=Yl(cs(e))]),c&&rn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,rn(u,t,6,s)}}const oI=new WeakMap;function ig(t,e,n=!1){const r=n?oI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const f=ig(u,e,!0);f&&(l=!0,at(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):at(o,i),Me(t)&&r.set(t,o),o)}function ll(t,e){return!t||!za(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,cs(e))||Ve(t,e))}function qf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:v,ctx:C,inheritAttrs:k}=t,S=Aa(t);let B,V;try{if(n.shapeFlag&4){const q=s||r,ee=q;B=In(u.call(ee,q,f,d,v,m,C)),V=l}else{const q=e;B=In(q.length>1?q(d,{attrs:l,slots:o,emit:c}):q(d,null)),V=e.props?l:aI(l)}}catch(q){Kn.length=0,rl(q,t,1),B=Le(Ct)}let x=B;if(V&&k!==!1){const q=Object.keys(V),{shapeFlag:ee}=x;q.length&&ee&7&&(i&&q.some(Qa)&&(V=lI(V,i)),x=Dr(x,V,!1,!0))}if(n.dirs&&(x=Dr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const q=il(x.type)&&ba(x)||x;Wi(q,n.transition)}return B=x,Aa(S),B}const aI=t=>{let e;for(const n in t)(n==="class"||n==="style"||za(n))&&((e||(e={}))[n]=t[n]);return e},lI=(t,e)=>{const n={};for(const r in t)(!Qa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(og(o,r,m)&&!ll(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Hf(r,o,u):!0:!!o;return!1}function Hf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(og(e,t,i)&&!ll(n,i))return!0}return!1}function og(t,e,n){const r=t[n],s=e[n];return n==="style"&&Me(r)&&Me(s)?!Pr(r,s):r!==s}function uI({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const ag={},lg=()=>Object.create(ag),cg=t=>Object.getPrototypeOf(t)===ag;function hI(t,e,n,r=!1){const s={},i=lg();t.propsDefaults=Object.create(null),ug(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(ll(t.emitsOptions,m))continue;const v=e[m];if(c)if(Ve(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const C=Ft(m);s[C]=Uc(c,l,C,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{ug(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!Ve(e,d)&&((f=cs(d))===d||!Ve(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Uc(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Ve(e,d))&&(delete i[d],u=!0)}u&&Bn(t.attrs,"set","")}function ug(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Di(c))continue;const u=e[c];let f;s&&Ve(s,f=Ft(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:ll(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=l||Be;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Uc(s,c,d,u[d],t,!Ve(u,d))}}return o}function Uc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=fo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const dI=new WeakMap;function hg(t,e,n=!1){const r=n?dI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const f=d=>{c=!0;const[m,v]=hg(d,e,!0);at(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,Ss),Ss;if(le(i))for(let f=0;f<i.length;f++){const d=Ft(i[f]);Wf(d)&&(o[d]=Be)}else if(i)for(const f in i){const d=Ft(f);if(Wf(d)){const m=i[f],v=o[d]=le(m)||ve(m)?{type:m}:at({},m),C=v.type;let k=!1,S=!0;if(le(C))for(let B=0;B<C.length;++B){const V=C[B],x=ve(V)&&V.name;if(x==="Boolean"){k=!0;break}else x==="String"&&(S=!1)}else k=ve(C)&&C.name==="Boolean";v[0]=k,v[1]=S,(k||Ve(v,"default"))&&l.push(d)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function Wf(t){return t[0]!=="$"&&!Di(t)}const ku=t=>t==="_"||t==="_ctx"||t==="$stable",Nu=t=>le(t)?t.map(In):[In(t)],pI=(t,e,n)=>{if(e._n)return e;const r=cn((...s)=>Nu(e(...s)),n);return r._c=!1,r},fg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ku(s))continue;const i=t[s];if(ve(i))e[s]=pI(s,i,r);else if(i!=null){const o=Nu(i);e[s]=()=>o}}},dg=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},pg=(t,e,n)=>{for(const r in e)(n||!ku(r))&&(t[r]=e[r])},mI=(t,e,n)=>{const r=t.slots=lg();if(t.vnode.shapeFlag&32){const s=e._;s?(pg(r,e,n),n&&cm(r,"_",s,!0)):fg(e,r)}else e&&dg(t,e)},gI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:pg(s,e,n):(i=!e.$stable,fg(e,s)),o=e}else e&&(dg(t,e),o={default:1});if(i)for(const l in s)!ku(l)&&o[l]==null&&delete s[l]},xt=II;function _I(t){return yI(t)}function yI(t,e){const n=el();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:v=An,insertStaticContent:C}=t,k=(I,b,P,M=null,$=null,L=null,Y=void 0,z=null,K=!!b.dynamicChildren)=>{if(I===b)return;I&&!zr(I,b)&&(M=U(I),H(I,$,L,!0),I=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:X}=b;switch(W){case cl:S(I,b,P,M);break;case Ct:B(I,b,P,M);break;case ua:I==null&&V(b,P,M,Y);break;case Ze:A(I,b,P,M,$,L,Y,z,K);break;default:X&1?ee(I,b,P,M,$,L,Y,z,K):X&6?E(I,b,P,M,$,L,Y,z,K):(X&64||X&128)&&W.process(I,b,P,M,$,L,Y,z,K,se)}ue!=null&&$?Oi(ue,I&&I.ref,L,b||I,!b):ue==null&&I&&I.ref!=null&&Oi(I.ref,null,L,I,!0)},S=(I,b,P,M)=>{if(I==null)r(b.el=l(b.children),P,M);else{const $=b.el=I.el;b.children!==I.children&&u($,b.children)}},B=(I,b,P,M)=>{I==null?r(b.el=c(b.children||""),P,M):b.el=I.el},V=(I,b,P,M)=>{[I.el,I.anchor]=C(I.children,b,P,M,I.el,I.anchor)},x=({el:I,anchor:b},P,M)=>{let $;for(;I&&I!==b;)$=m(I),r(I,P,M),I=$;r(b,P,M)},q=({el:I,anchor:b})=>{let P;for(;I&&I!==b;)P=m(I),s(I),I=P;s(b)},ee=(I,b,P,M,$,L,Y,z,K)=>{if(b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),I==null)re(b,P,M,$,L,Y,z,K);else{const W=I.el&&I.el._isVueCE?I.el:null;try{W&&W._beginPatch(),_(I,b,$,L,Y,z,K)}finally{W&&W._endPatch()}}},re=(I,b,P,M,$,L,Y,z)=>{let K,W;const{props:ue,shapeFlag:X,transition:ie,dirs:de}=I;if(K=I.el=o(I.type,L,ue&&ue.is,ue),X&8?f(K,I.children):X&16&&y(I.children,K,null,M,$,rc(I,L),Y,z),de&&jr(I,null,M,"created"),T(K,I,I.scopeId,Y,M),ue){for(const Ie in ue)Ie!=="value"&&!Di(Ie)&&i(K,Ie,null,ue[Ie],L,M);"value"in ue&&i(K,"value",null,ue.value,L),(W=ue.onVnodeBeforeMount)&&yn(W,M,I)}de&&jr(I,null,M,"beforeMount");const fe=vI($,ie);fe&&ie.beforeEnter(K),r(K,b,P),((W=ue&&ue.onVnodeMounted)||fe||de)&&xt(()=>{try{W&&yn(W,M,I),fe&&ie.enter(K),de&&jr(I,null,M,"mounted")}finally{}},$)},T=(I,b,P,M,$)=>{if(P&&v(I,P),M)for(let L=0;L<M.length;L++)v(I,M[L]);if($){let L=$.subTree;if(b===L||_g(L.type)&&(L.ssContent===b||L.ssFallback===b)){const Y=$.vnode;T(I,Y,Y.scopeId,Y.slotScopeIds,$.parent)}}},y=(I,b,P,M,$,L,Y,z,K=0)=>{for(let W=K;W<I.length;W++){const ue=I[W]=z?Un(I[W]):In(I[W]);k(null,ue,b,P,M,$,L,Y,z)}},_=(I,b,P,M,$,L,Y)=>{const z=b.el=I.el;let{patchFlag:K,dynamicChildren:W,dirs:ue}=b;K|=I.patchFlag&16;const X=I.props||Be,ie=b.props||Be;let de;if(P&&$r(P,!1),(de=ie.onVnodeBeforeUpdate)&&yn(de,P,b,I),ue&&jr(b,I,P,"beforeUpdate"),P&&$r(P,!0),W&&(!I.dynamicChildren||I.dynamicChildren.length!==W.length)&&(K=0,Y=!1,W=null),(X.innerHTML&&ie.innerHTML==null||X.textContent&&ie.textContent==null)&&f(z,""),W?w(I.dynamicChildren,W,z,P,M,rc(b,$),L):Y||we(I,b,z,null,P,M,rc(b,$),L,!1),K>0){if(K&16)R(z,X,ie,P,$);else if(K&2&&X.class!==ie.class&&i(z,"class",null,ie.class,$),K&4&&i(z,"style",X.style,ie.style,$),K&8){const fe=b.dynamicProps;for(let Ie=0;Ie<fe.length;Ie++){const Ce=fe[Ie],Qe=X[Ce],st=ie[Ce];(st!==Qe||Ce==="value")&&i(z,Ce,Qe,st,$,P)}}K&1&&I.children!==b.children&&f(z,b.children)}else!Y&&W==null&&R(z,X,ie,P,$);((de=ie.onVnodeUpdated)||ue)&&xt(()=>{de&&yn(de,P,b,I),ue&&jr(b,I,P,"updated")},M)},w=(I,b,P,M,$,L,Y)=>{for(let z=0;z<b.length;z++){const K=I[z],W=b[z],ue=K.el&&(K.type===Ze||!zr(K,W)||K.shapeFlag&198)?d(K.el):P;k(K,W,ue,null,M,$,L,Y,!0)}},R=(I,b,P,M,$)=>{if(b!==P){if(b!==Be)for(const L in b)!Di(L)&&!(L in P)&&i(I,L,b[L],null,$,M);for(const L in P){if(Di(L))continue;const Y=P[L],z=b[L];Y!==z&&L!=="value"&&i(I,L,z,Y,$,M)}"value"in P&&i(I,"value",b.value,P.value,$)}},A=(I,b,P,M,$,L,Y,z,K)=>{const W=b.el=I?I.el:l(""),ue=b.anchor=I?I.anchor:l("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:de}=b;de&&(z=z?z.concat(de):de),I==null?(r(W,P,M),r(ue,P,M),y(b.children||[],P,ue,$,L,Y,z,K)):X>0&&X&64&&ie&&I.dynamicChildren&&I.dynamicChildren.length===ie.length?(w(I.dynamicChildren,ie,P,$,L,Y,z),(b.key!=null||$&&b===$.subTree)&&Ou(I,b,!0)):we(I,b,P,ue,$,L,Y,z,K)},E=(I,b,P,M,$,L,Y,z,K)=>{b.slotScopeIds=z,I==null?b.shapeFlag&512?$.ctx.activate(b,P,M,Y,K):Ae(b,P,M,$,L,Y,K):Ge(I,b,K)},Ae=(I,b,P,M,$,L,Y)=>{const z=I.component=CI(I,M,$);if(ol(I)&&(z.ctx.renderer=se),PI(z,!1,Y),z.asyncDep){if($&&$.registerDep(z,De,Y),!I.el){const K=z.subTree=Le(Ct);B(null,K,b,P),I.placeholder=K.el}}else De(z,I,b,P,$,L,Y)},Ge=(I,b,P)=>{const M=b.component=I.component;if(cI(I,b,P))if(M.asyncDep&&!M.asyncResolved){he(M,b,P);return}else M.next=b,M.update();else b.el=I.el,M.vnode=b},De=(I,b,P,M,$,L,Y)=>{const z=()=>{if(I.isMounted){let{next:X,bu:ie,u:de,parent:fe,vnode:Ie}=I;{const It=mg(I);if(It){X&&(X.el=Ie.el,he(I,X,Y)),It.asyncDep.then(()=>{xt(()=>{I.isUnmounted||W()},$)});return}}let Ce=X,Qe;$r(I,!1),X?(X.el=Ie.el,he(I,X,Y)):X=Ie,ie&&la(ie),(Qe=X.props&&X.props.onVnodeBeforeUpdate)&&yn(Qe,fe,X,Ie),$r(I,!0);const st=qf(I),Jt=I.subTree;I.subTree=st,k(Jt,st,d(Jt.el),U(Jt),I,$,L),X.el=st.el,Ce===null&&uI(I,st.el),de&&xt(de,$),(Qe=X.props&&X.props.onVnodeUpdated)&&xt(()=>yn(Qe,fe,X,Ie),$)}else{let X;const{el:ie,props:de}=b,{bm:fe,m:Ie,parent:Ce,root:Qe,type:st}=I,Jt=Ds(b);$r(I,!1),fe&&la(fe),!Jt&&(X=de&&de.onVnodeBeforeMount)&&yn(X,Ce,b),$r(I,!0);{Qe.ce&&Qe.ce._hasShadowRoot()&&Qe.ce._injectChildStyle(st,I.parent?I.parent.type:void 0);const It=I.subTree=qf(I);k(null,It,P,M,I,$,L),b.el=It.el}if(Ie&&xt(Ie,$),!Jt&&(X=de&&de.onVnodeMounted)){const It=b;xt(()=>yn(X,Ce,It),$)}(b.shapeFlag&256||Ce&&Ds(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&I.a&&xt(I.a,$),I.isMounted=!0,b=P=M=null}};I.scope.on();const K=I.effect=new gm(z);I.scope.off();const W=I.update=K.run.bind(K),ue=I.job=K.runIfDirty.bind(K);ue.i=I,ue.id=I.uid,K.scheduler=()=>Pu(ue),$r(I,!0),W()},he=(I,b,P)=>{b.component=I;const M=I.vnode.props;I.vnode=b,I.next=null,fI(I,b.props,M,P),gI(I,b.children,P),Qn(),Of(I),Yn()},we=(I,b,P,M,$,L,Y,z,K=!1)=>{const W=I&&I.children,ue=I?I.shapeFlag:0,X=b.children,{patchFlag:ie,shapeFlag:de}=b;if(ie>0){if(ie&128){ae(W,X,P,M,$,L,Y,z,K);return}else if(ie&256){Et(W,X,P,M,$,L,Y,z,K);return}}de&8?(ue&16&&jt(W,$,L),X!==W&&f(P,X)):ue&16?de&16?ae(W,X,P,M,$,L,Y,z,K):jt(W,$,L,!0):(ue&8&&f(P,""),de&16&&y(X,P,M,$,L,Y,z,K))},Et=(I,b,P,M,$,L,Y,z,K)=>{I=I||Ss,b=b||Ss;const W=I.length,ue=b.length,X=Math.min(W,ue);let ie;for(ie=0;ie<X;ie++){const de=b[ie]=K?Un(b[ie]):In(b[ie]);k(I[ie],de,P,null,$,L,Y,z,K)}W>ue?jt(I,$,L,!0,!1,X):y(b,P,M,$,L,Y,z,K,X)},ae=(I,b,P,M,$,L,Y,z,K)=>{let W=0;const ue=b.length;let X=I.length-1,ie=ue-1;for(;W<=X&&W<=ie;){const de=I[W],fe=b[W]=K?Un(b[W]):In(b[W]);if(zr(de,fe))k(de,fe,P,null,$,L,Y,z,K);else break;W++}for(;W<=X&&W<=ie;){const de=I[X],fe=b[ie]=K?Un(b[ie]):In(b[ie]);if(zr(de,fe))k(de,fe,P,null,$,L,Y,z,K);else break;X--,ie--}if(W>X){if(W<=ie){const de=ie+1,fe=de<ue?b[de].el:M;for(;W<=ie;)k(null,b[W]=K?Un(b[W]):In(b[W]),P,fe,$,L,Y,z,K),W++}}else if(W>ie)for(;W<=X;)H(I[W],$,L,!0),W++;else{const de=W,fe=W,Ie=new Map;for(W=fe;W<=ie;W++){const dt=b[W]=K?Un(b[W]):In(b[W]);dt.key!=null&&Ie.set(dt.key,W)}let Ce,Qe=0;const st=ie-fe+1;let Jt=!1,It=0;const ar=new Array(st);for(W=0;W<st;W++)ar[W]=0;for(W=de;W<=X;W++){const dt=I[W];if(Qe>=st){H(dt,$,L,!0);continue}let Xt;if(dt.key!=null)Xt=Ie.get(dt.key);else for(Ce=fe;Ce<=ie;Ce++)if(ar[Ce-fe]===0&&zr(dt,b[Ce])){Xt=Ce;break}Xt===void 0?H(dt,$,L,!0):(ar[Xt-fe]=W+1,Xt>=It?It=Xt:Jt=!0,k(dt,b[Xt],P,null,$,L,Y,z,K),Qe++)}const ni=Jt?EI(ar):Ss;for(Ce=ni.length-1,W=st-1;W>=0;W--){const dt=fe+W,Xt=b[dt],Vo=b[dt+1],ds=dt+1<ue?Vo.el||gg(Vo):M;ar[W]===0?k(null,Xt,P,ds,$,L,Y,z,K):Jt&&(Ce<0||W!==ni[Ce]?O(Xt,P,ds,2):Ce--)}}},O=(I,b,P,M,$=null)=>{const{el:L,type:Y,transition:z,children:K,shapeFlag:W}=I;if(W&6){O(I.component.subTree,b,P,M);return}if(W&128){I.suspense.move(b,P,M);return}if(W&64){Y.move(I,b,P,se);return}if(Y===Ze){r(L,b,P);for(let X=0;X<K.length;X++)O(K[X],b,P,M);r(I.anchor,b,P);return}if(Y===ua){x(I,b,P);return}if(M!==2&&W&1&&z)if(M===0)z.persisted&&!L[en]?r(L,b,P):(z.beforeEnter(L),r(L,b,P),xt(()=>z.enter(L),$));else{const{leave:X,delayLeave:ie,afterLeave:de}=z,fe=()=>{I.ctx.isUnmounted?s(L):r(L,b,P)},Ie=()=>{const Ce=L._isLeaving||!!L[en];L._isLeaving&&L[en](!0),z.persisted&&!Ce?fe():X(L,()=>{fe(),de&&de()})};ie?ie(L,fe,Ie):Ie()}else r(L,b,P)},H=(I,b,P,M=!1,$=!1)=>{const{type:L,props:Y,ref:z,children:K,dynamicChildren:W,shapeFlag:ue,patchFlag:X,dirs:ie,cacheIndex:de,memo:fe}=I;if(X===-2&&($=!1),z!=null&&(Qn(),Oi(z,null,P,I,!0),Yn()),de!=null&&(b.renderCache[de]=void 0),ue&256){b.ctx.deactivate(I);return}const Ie=ue&1&&ie,Ce=!Ds(I);let Qe;if(Ce&&(Qe=Y&&Y.onVnodeBeforeUnmount)&&yn(Qe,b,I),ue&6)qt(I.component,P,M);else{if(ue&128){I.suspense.unmount(P,M);return}Ie&&jr(I,null,b,"beforeUnmount"),ue&64?I.type.remove(I,b,P,se,M):W&&!W.hasOnce&&(L!==Ze||X>0&&X&64)?jt(W,b,P,!1,!0):(L===Ze&&X&384||!$&&ue&16)&&jt(K,b,P),M&&pe(I)}const st=fe!=null&&de==null;(Ce&&(Qe=Y&&Y.onVnodeUnmounted)||Ie||st)&&xt(()=>{Qe&&yn(Qe,b,I),Ie&&jr(I,null,b,"unmounted"),st&&(I.el=null)},P)},pe=I=>{const{type:b,el:P,anchor:M,transition:$}=I;if(b===Ze){lt(P,M);return}if(b===ua){q(I);return}const L=()=>{s(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(I.shapeFlag&1&&$&&!$.persisted){const{leave:Y,delayLeave:z}=$,K=()=>Y(P,L);z?z(I.el,L,K):K()}else L()},lt=(I,b)=>{let P;for(;I!==b;)P=m(I),s(I),I=P;s(b)},qt=(I,b,P)=>{const{bum:M,scope:$,job:L,subTree:Y,um:z,m:K,a:W}=I;Gf(K),Gf(W),M&&la(M),$.stop(),L&&(L.flags|=8,H(Y,I,b,P)),z&&xt(z,b),xt(()=>{I.isUnmounted=!0},b)},jt=(I,b,P,M=!1,$=!1,L=0)=>{for(let Y=L;Y<I.length;Y++)H(I[Y],b,P,M,$)},U=I=>{if(I.shapeFlag&6)return U(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=m(I.anchor||I.el),P=b&&b[Bm];return P?m(P):b};let te=!1;const J=(I,b,P)=>{let M;I==null?b._vnode&&(H(b._vnode,null,null,!0),M=b._vnode.component):k(b._vnode||null,I,b,null,null,null,P),b._vnode=I,te||(te=!0,Of(M),xm(),te=!1)},se={p:k,um:H,m:O,r:pe,mt:Ae,mc:y,pc:we,pbc:w,n:U,o:t};return{render:J,hydrate:void 0,createApp:rI(J)}}function rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ou(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Un(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ou(o,l)),l.type===cl&&(l.patchFlag===-1&&(l=s[i]=Un(l)),l.el=o.el),l.type===Ct&&!l.el&&(l.el=o.el)}}function EI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mg(e)}function Gf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function gg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?gg(e.subTree):null}const _g=t=>t.__isSuspense;function II(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):CE(t)}const Ze=Symbol.for("v-fgt"),cl=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),ua=Symbol.for("v-stc"),Kn=[];let Wt=null;function oe(t=!1){Kn.push(Wt=t?null:[])}function Vu(){Kn.pop(),Wt=Kn[Kn.length-1]||null}let Gi=1;function Ca(t,e=!1){Gi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function yg(t){return t.dynamicChildren=Gi>0?Wt||Ss:null,Vu(),Gi>0&&Wt&&Wt.push(t),t}function _e(t,e,n,r,s,i){return yg(F(t,e,n,r,s,i,!0))}function fn(t,e,n,r,s){return yg(Le(t,e,n,r,s,!0))}function Ki(t){return t?t.__v_isVNode===!0:!1}function zr(t,e){return t.type===e.type&&t.key===e.key}const vg=({key:t})=>t??null,ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||et(t)||ve(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vg(e),ref:e&&ha(e),scopeId:Lm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return l?(Pa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Gi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Le=wI;function wI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zm)&&(t=Ct),Ki(t)){const l=Dr(t,e,!0);return n&&Pa(l,n),Gi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(VI(t)&&(t=t.__vccOpts),e){e=TI(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=ht(l)),Me(c)&&(nl(c)&&!le(c)&&(c=at({},c)),e.style=an(c))}const o=We(t)?1:_g(t)?128:il(t)?64:Me(t)?4:ve(t)?2:0;return F(t,e,n,r,s,o,i,!0)}function TI(t){return t?nl(t)||cg(t)?at({},t):t:null}function Dr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?bI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&vg(u),ref:e&&e.ref?n&&i?le(i)?i.concat(ha(e)):[i,ha(e)]:ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Wi(f,c.clone(f)),f}function Vt(t=" ",e=0){return Le(cl,null,t,e)}function AI(t,e){const n=Le(ua,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(oe(),fn(Ct,null,t)):Le(Ct,null,t)}function In(t){return t==null||typeof t=="boolean"?Le(Ct):le(t)?Le(Ze,null,t.slice()):Ki(t)?Un(t):Le(cl,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function Pa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cg(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ve(e)){if(r&65){Pa(t,{default:e});return}e={default:e,_ctx:_t},n=32}else e=String(e),r&64?(n=16,e=[Vt(e)]):n=8;t.children=e,t.shapeFlag|=n}function bI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ht([e.class,r.class]));else if(s==="style")e.style=an([e.style,r.style]);else if(za(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Qa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function yn(t,e,n,r=null){rn(t,e,7,[n,r])}const RI=sg();let SI=0;function CI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||RI,i={uid:SI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hg(r,s),emitsOptions:ig(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iI.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const xu=()=>Pt||_t;let Da,zi;{const t=el(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),zi=e("__VUE_SSR_SETTERS__",n=>Qi=n)}const fo=t=>{const e=Pt;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},Kf=()=>{Pt&&Pt.scope.off(),Da(null)};function Eg(t){return t.vnode.shapeFlag&4}let Qi=!1;function PI(t,e=!1,n=!1){e&&zi(e);const{props:r,children:s}=t.vnode,i=Eg(t);hI(t,r,i,e),mI(t,s,n||e);const o=i?DI(t,e):void 0;return e&&zi(!1),o}function DI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,YE);const{setup:r}=n;if(r){Qn();const s=t.setupContext=r.length>1?NI(t):null,i=fo(t),o=uo(r,t,0,[t.props,s]),l=om(o);if(Yn(),i(),(l||t.sp)&&!Ds(t)&&zm(t),l){if(o.then(Kf,Kf),e)return o.then(c=>{zi(!0);try{zf(t,c,e)}finally{zi(!1)}}).catch(c=>{rl(c,t,0)});t.asyncDep=o}else zf(t,o)}else Ig(t)}function zf(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Nm(e)),Ig(t)}function Ig(t,e,n){const r=t.type;t.render||(t.render=r.render||An);{const s=fo(t);Qn();try{JE(t)}finally{Yn(),s()}}}const kI={get(t,e){return Rt(t,"get",""),t[e]}};function NI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kI),slots:t.slots,emit:t.emit,expose:e}}function ul(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Nm(Cu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function OI(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function VI(t){return ve(t)&&"__vccOpts"in t}const qe=(t,e)=>TE(t,e,Qi);function Mu(t,e,n){try{Ca(-1);const r=arguments.length;return r===2?Me(e)&&!le(e)?Ki(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ki(n)&&(n=[n]),Le(t,e,n))}finally{Ca(1)}}const xI="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bc;const Qf=typeof window<"u"&&window.trustedTypes;if(Qf)try{Bc=Qf.createPolicy("vue",{createHTML:t=>t})}catch{}const wg=Bc?t=>Bc.createHTML(t):t=>t,MI="http://www.w3.org/2000/svg",LI="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Yf=Fn&&Fn.createElement("template"),FI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(MI,t):e==="mathml"?Fn.createElementNS(LI,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yf.innerHTML=wg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Yf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hr="transition",_i="animation",Yi=Symbol("_vtc"),Tg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},UI=at({},$m,Tg),BI=t=>(t.displayName="Transition",t.props=UI,t),Lu=BI((t,{slots:e})=>Mu(FE,jI(t),e)),qr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Jf=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function jI(t){const e={};for(const A in t)A in Tg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,C=$I(s),k=C&&C[0],S=C&&C[1],{onBeforeEnter:B,onEnter:V,onEnterCancelled:x,onLeave:q,onLeaveCancelled:ee,onBeforeAppear:re=B,onAppear:T=V,onAppearCancelled:y=x}=e,_=(A,E,Ae,Ge)=>{A._enterCancelled=Ge,Hr(A,E?f:l),Hr(A,E?u:o),Ae&&Ae()},w=(A,E)=>{A._isLeaving=!1,Hr(A,d),Hr(A,v),Hr(A,m),E&&E()},R=A=>(E,Ae)=>{const Ge=A?T:V,De=()=>_(E,A,Ae);qr(Ge,[E,De]),Xf(()=>{Hr(E,A?c:i),xn(E,A?f:l),Jf(Ge)||Zf(E,r,k,De)})};return at(e,{onBeforeEnter(A){qr(B,[A]),xn(A,i),xn(A,o)},onBeforeAppear(A){qr(re,[A]),xn(A,c),xn(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,E){A._isLeaving=!0;const Ae=()=>w(A,E);xn(A,d),A._enterCancelled?(xn(A,m),nd(A)):(nd(A),xn(A,m)),Xf(()=>{A._isLeaving&&(Hr(A,d),xn(A,v),Jf(q)||Zf(A,r,S,Ae))}),qr(q,[A,Ae])},onEnterCancelled(A){_(A,!1,void 0,!0),qr(x,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),qr(y,[A])},onLeaveCancelled(A){w(A),qr(ee,[A])}})}function $I(t){if(t==null)return null;if(Me(t))return[sc(t.enter),sc(t.leave)];{const e=sc(t);return[e,e]}}function sc(t){return qv(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yi]||(t[Yi]=new Set)).add(e)}function Hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yi];n&&(n.delete(e),n.size||(t[Yi]=void 0))}function Xf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qI=0;function Zf(t,e,n,r){const s=t._endId=++qI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=HI(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function HI(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${hr}Delay`),i=r(`${hr}Duration`),o=ed(s,i),l=r(`${_i}Delay`),c=r(`${_i}Duration`),u=ed(l,c);let f=null,d=0,m=0;e===hr?o>0&&(f=hr,d=o,m=i.length):e===_i?u>0&&(f=_i,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?hr:_i:null,m=f?f===hr?i.length:c.length:0);const v=f===hr&&/\b(?:transform|all)(?:,|$)/.test(r(`${hr}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:v}}function ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>td(n)+td(t[r])))}function td(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nd(t){return(t?t.ownerDocument:document).body.offsetHeight}function WI(t,e,n){const r=t[Yi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),GI=Symbol("_vsh"),KI=Symbol(""),zI=/(?:^|;)\s*display\s*:/;function QI(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ti(r,l,"")}else for(const o in e)n[o]==null&&Ti(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?JI(t,o,!We(e)&&e?e[o]:void 0,l)||Ti(r,o,l):Ti(r,o,"")}}else if(s){if(e!==n){const o=r[KI];o&&(n+=";"+o),r.cssText=n,i=zI.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=i?r.display:"",t[GI]&&(r.display="none"))}const sd=/\s*!important$/;function Ti(t,e,n){if(le(n))n.forEach(r=>Ti(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=YI(t,e);sd.test(n)?t.setProperty(cs(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],ic={};function YI(t,e){const n=ic[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return ic[e]=r;r=Xa(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return ic[e]=i}return e}function JI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&We(r)&&n===r}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=Qv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!um(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yt(n)?String(n):n)}function ld(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=um(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $n(t,e,n,r){t.addEventListener(e,n,r)}function XI(t,e,n,r){t.removeEventListener(e,n,r)}const cd=Symbol("_vei");function ZI(t,e,n,r,s=null){const i=t[cd]||(t[cd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=nw(e);if(r){const u=i[e]=iw(r,s);$n(t,l,u,c)}else o&&(XI(t,l,o,c),i[e]=void 0)}}const ew=/(Once|Passive|Capture)$/,tw=/^on:?(?:Once|Passive|Capture)$/;function nw(t){let e,n;for(;(n=t.match(ew))&&!tw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let oc=0;const rw=Promise.resolve(),sw=()=>oc||(rw.then(()=>oc=0),oc=Date.now());function iw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(le(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&rn(u,e,5,l)}}else rn(s,e,5,[r])};return n.value=t,n.attached=sw(),n}const ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ow=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?WI(t,r,o):e==="style"?QI(t,n,r):za(e)?Qa(e)||ZI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aw(t,e,r,o))?(ld(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(lw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!We(r)))?ld(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function aw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ud(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ud(e)&&We(n)?!1:e in t}function lw(t,e){const n=t._def.props;if(!n)return!1;const r=Ft(e);return Array.isArray(n)?n.some(s=>Ft(s)===r):Object.keys(n).some(s=>Ft(s)===r)}const kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>la(e,n):e};function cw(t){t.target.composing=!0}function hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),ea=Symbol("_initialValue");function ac(t,e,n){return e&&(t=t.trim()),n&&(t=Za(t)),t}const lc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[ea]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[ea]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Gt]=kr(s);const i=r||s.props&&s.props.type==="number";$n(t,e?"change":"input",o=>{o.target.composing||t[Gt](ac(t.value,n,i))}),(n||i)&&$n(t,"change",()=>{t.value=ac(t.value,n,i)}),e||($n(t,"compositionstart",cw),$n(t,"compositionend",hd),$n(t,"change",hd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[ea];delete t[ea],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Gt](ac(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gt]=kr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Za(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},fd={deep:!0,created(t,e,n){t[Gt]=kr(n),$n(t,"change",()=>{const r=t._modelValue,s=Ls(t),i=t.checked,o=t[Gt];if(le(r)){const l=Iu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Qs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Ag(t,i))})},mounted:dd,beforeUpdate(t,e,n){t[Gt]=kr(n),dd(t,e,n)}};function dd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Iu(e,r.props.value)>-1;else if(Qs(e))s=e.has(r.props.value);else{if(e===n)return;s=Pr(e,Ag(t,!0))}t.checked!==s&&(t.checked=s)}const cc={created(t,{value:e},n){t.checked=Pr(e,n.props.value),t[Gt]=kr(n),$n(t,"change",()=>{t[Gt](Ls(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Gt]=kr(r),e!==n&&(t.checked=Pr(e,r.props.value))}},uw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,$n(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Za(Ls(i)):Ls(i));t[Gt](t.multiple?Qs(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,sl(()=>{t._assigning=!1})}),t[Gt]=kr(r)},mounted(t,{value:e}){pd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Gt]=kr(n)},updated(t,{value:e}){t._assigning||pd(t,e)}};function pd(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Qs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ls(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Iu(e,l)>-1}else o.selected=e.has(l);else if(Pr(Ls(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ls(t){return"_value"in t?t._value:t.value}function Ag(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hw=["ctrl","shift","alt","meta"],fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hw.some(n=>t[`${n}Key`]&&!e.includes(n))},bg=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=fw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},dw=at({patchProp:ow},FI);let md;function pw(){return md||(md=_I(dw))}const mw=(...t)=>{const e=pw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_w(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _w(t){return We(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Rg;const hl=t=>Rg=t,Sg=Symbol();function jc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function yw(){const t=pm(!0),e=t.run(()=>ln({}));let n=[],r=[];const s=Cu({install(i){hl(s),s._a=i,i.provide(Sg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Cg=()=>{};function gd(t,e,n,r=Cg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&mm()&&Jv(s),s}function vs(t,...e){t.slice().forEach(n=>{n(...e)})}const vw=t=>t(),_d=Symbol(),uc=Symbol();function $c(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];jc(s)&&jc(r)&&t.hasOwnProperty(n)&&!et(r)&&!Gn(r)?t[n]=$c(s,r):t[n]=r}return t}const Ew=Symbol();function Iw(t){return!jc(t)||!t.hasOwnProperty(Ew)}const{assign:mr}=Object;function ww(t){return!!(et(t)&&t.effect)}function Tw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=vE(n.state.value[t]);return mr(f,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Cu(qe(()=>{hl(n);const v=n._s.get(t);return o[m].call(v,v)})),d),{}))}return c=Pg(t,u,e,n,r,!0),c}function Pg(t,e,n={},r,s,i){let o;const l=mr({actions:{}},n),c={deep:!0};let u,f,d=[],m=[],v;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={});let k;function S(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:xi.patchFunction,storeId:t,events:v}):($c(r.state.value[t],y),_={type:xi.patchObject,payload:y,storeId:t,events:v});const w=k=Symbol();sl().then(()=>{k===w&&(u=!0)}),f=!0,vs(d,_,r.state.value[t])}const B=i?function(){const{state:_}=n,w=_?_():{};this.$patch(R=>{mr(R,w)})}:Cg;function V(){o.stop(),d=[],m=[],r._s.delete(t)}const x=(y,_="")=>{if(_d in y)return y[uc]=_,y;const w=function(){hl(r);const R=Array.from(arguments),A=[],E=[];function Ae(he){A.push(he)}function Ge(he){E.push(he)}vs(m,{args:R,name:w[uc],store:ee,after:Ae,onError:Ge});let De;try{De=y.apply(this&&this.$id===t?this:ee,R)}catch(he){throw vs(E,he),he}return De instanceof Promise?De.then(he=>(vs(A,he),he)).catch(he=>(vs(E,he),Promise.reject(he))):(vs(A,De),De)};return w[_d]=!0,w[uc]=_,w},q={_p:r,$id:t,$onAction:gd.bind(null,m),$patch:S,$reset:B,$subscribe(y,_={}){const w=gd(d,y,_.detached,()=>R()),R=o.run(()=>Tr(()=>r.state.value[t],A=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:xi.direct,events:v},A)},mr({},c,_)));return w},$dispose:V},ee=es(q);r._s.set(t,ee);const T=(r._a&&r._a.runWithContext||vw)(()=>r._e.run(()=>(o=pm()).run(()=>e({action:x}))));for(const y in T){const _=T[y];if(et(_)&&!ww(_)||Gn(_))i||(C&&Iw(_)&&(et(_)?_.value=C[y]:$c(_,C[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const w=x(_,y);T[y]=w,l.actions[y]=_}}return mr(ee,T),mr(Pe(ee),T),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:y=>{S(_=>{mr(_,y)})}}),r._p.forEach(y=>{mr(ee,o.run(()=>y({store:ee,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(ee.$state,C),u=!0,f=!0,ee}/*! #__NO_SIDE_EFFECTS__ */function po(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=PE();return l=l||(u?nn(Sg,null):null),l&&hl(l),l=Rg,l._s.has(r)||(i?Pg(r,e,s,l):Tw(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Is=typeof document<"u";function Dg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Aw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Dg(t.default)}const Oe=Object.assign;function hc(t,e){const n={};for(const r in e){const s=e[r];n[r]=pn(s)?s.map(t):t(s)}return n}const Mi=()=>{},pn=Array.isArray;function yd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const kg=/#/g,bw=/&/g,Rw=/\//g,Sw=/=/g,Cw=/\?/g,Ng=/\+/g,Pw=/%5B/g,Dw=/%5D/g,Og=/%5E/g,kw=/%60/g,Vg=/%7B/g,Nw=/%7C/g,xg=/%7D/g,Ow=/%20/g;function Fu(t){return t==null?"":encodeURI(""+t).replace(Nw,"|").replace(Pw,"[").replace(Dw,"]")}function Vw(t){return Fu(t).replace(Vg,"{").replace(xg,"}").replace(Og,"^")}function qc(t){return Fu(t).replace(Ng,"%2B").replace(Ow,"+").replace(kg,"%23").replace(bw,"%26").replace(kw,"`").replace(Vg,"{").replace(xg,"}").replace(Og,"^")}function xw(t){return qc(t).replace(Sw,"%3D")}function Mw(t){return Fu(t).replace(kg,"%23").replace(Cw,"%3F")}function Lw(t){return Mw(t).replace(Rw,"%2F")}function Ji(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Fw=/\/$/,Uw=t=>t.replace(Fw,"");function fc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=qw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ji(o)}}function Bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fs(e.matched[r],n.matched[s])&&Mg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!$w(t[n],e[n]))return!1;return!0}function $w(t,e){return pn(t)?Ed(t,e):pn(e)?Ed(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Ed(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hc=function(t){return t.pop="pop",t.push="push",t}({}),dc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Hw(t){if(!t)if(Is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uw(t)}const Ww=/^[^#]+#/;function Gw(t,e){return t.replace(Ww,"#")+e}function Kw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fl=()=>({left:window.scrollX,top:window.scrollY});function zw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Kw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Id(t,e){return(history.state?history.state.position-e:-1)+t}const Wc=new Map;function Qw(t,e){Wc.set(t,e)}function Yw(t){const e=Wc.get(t);return Wc.delete(t),e}function Jw(t){return typeof t=="string"||t&&typeof t=="object"}function Lg(t){return typeof t=="string"||typeof t=="symbol"}let Xe=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Fg=Symbol("");Xe.MATCHER_NOT_FOUND+"",Xe.NAVIGATION_GUARD_REDIRECT+"",Xe.NAVIGATION_ABORTED+"",Xe.NAVIGATION_CANCELLED+"",Xe.NAVIGATION_DUPLICATED+"";function Us(t,e){return Oe(new Error,{type:t,[Fg]:!0},e)}function Mn(t,e){return t instanceof Error&&Fg in t&&(e==null||!!(t.type&e))}const Xw=["params","query","hash"];function Zw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Xw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function eT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ng," "),i=s.indexOf("="),o=Ji(i<0?s:s.slice(0,i)),l=i<0?null:Ji(s.slice(i+1));if(o in e){let c=e[o];pn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function wd(t){let e="";for(let n in t){const r=t[n];if(n=xw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(s=>s&&qc(s)):[r&&qc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function tT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nT=Symbol(""),Td=Symbol(""),dl=Symbol(""),Uu=Symbol(""),Gc=Symbol("");function yi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _r(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Us(Xe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):Jw(m)?c(Us(Xe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function pc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Dg(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_r(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Aw(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const m=(d.__vccOpts||d)[e];return m&&_r(m,n,r,o,l,s)()}))}}return i}function rT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Fs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Fs(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sT=()=>location.protocol+"//"+location.host;function Ug(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),vd(l,"")}return vd(n,t)+r+s}function iT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Ug(t,location),C=n.value,k=e.value;let S=0;if(m){if(n.value=v,e.value=m,o&&o===C){o=null;return}S=k?m.position-k.position:0}else r(v);s.forEach(B=>{B(n.value,C,{delta:S,type:Hc.pop,direction:S?S>0?dc.forward:dc.back:dc.unknown})})};function c(){o=n.value}function u(m){s.push(m);const v=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Oe({},m.state,{scroll:fl()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:d}}function Ad(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fl():null}}function oT(t){const{history:e,location:n}=window,r={value:Ug(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:sT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Oe({},e.state,Ad(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Oe({},s.value,e.state,{forward:c,scroll:fl()});i(f.current,f,!0),i(c,Oe({},Ad(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function aT(t){t=Hw(t);const e=oT(t),n=iT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:Gw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),aT(t)}let Qr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var ct=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(ct||{});const cT={type:Qr.Static,value:""},uT=/[a-zA-Z0-9_]/;function hT(t){if(!t)return[[]];if(t==="/")return[[cT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=ct.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===ct.Static?i.push({type:Qr.Static,value:u}):n===ct.Param||n===ct.ParamRegExp||n===ct.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Qr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==ct.ParamRegExp){r=n,n=ct.EscapeNext;continue}switch(n){case ct.Static:c==="/"?(u&&d(),o()):c===":"?(d(),n=ct.Param):m();break;case ct.EscapeNext:m(),n=r;break;case ct.Param:c==="("?n=ct.ParamRegExp:uT.test(c)?m():(d(),n=ct.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case ct.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=ct.ParamRegExpEnd:f+=c;break;case ct.ParamRegExpEnd:d(),n=ct.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===ct.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const bd="[^/]+?",fT={sensitive:!1,strict:!1,start:!0,end:!0};var Mt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Mt||{});const dT=/[.+*?^${}()[\]/\\]/g;function pT(t,e){const n=Oe({},fT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Mt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let v=Mt.Segment+(n.sensitive?Mt.BonusCaseSensitive:0);if(m.type===Qr.Static)d||(s+="/"),s+=m.value.replace(dT,"\\$&"),v+=Mt.Static;else if(m.type===Qr.Param){const{value:C,repeatable:k,optional:S,regexp:B}=m;i.push({name:C,repeatable:k,optional:S});const V=B||bd;if(V!==bd){v+=Mt.BonusCustomRegExp;try{`${V}`}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${V}): `+q.message)}}let x=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;d||(x=S&&u.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),s+=x,v+=Mt.Dynamic,S&&(v+=Mt.BonusOptional),k&&(v+=Mt.BonusRepeatable),V===".*"&&(v+=Mt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Mt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",C=i[m-1];d[C.name]=v&&C.repeatable?v.split("/"):v}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of m)if(v.type===Qr.Static)f+=v.value;else if(v.type===Qr.Param){const{value:C,repeatable:k,optional:S}=v,B=C in u?u[C]:"";if(pn(B)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const V=pn(B)?B.join("/"):B;if(!V)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=V}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function mT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Mt.Static+Mt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Mt.Static+Mt.Segment?1:-1:0}function Bg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rd(r))return 1;if(Rd(s))return-1}return s.length-r.length}function Rd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gT={strict:!1,end:!0,sensitive:!1};function _T(t,e,n){const r=pT(hT(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function yT(t,e){const n=[],r=new Map;e=yd(gT,e);function s(d){return r.get(d)}function i(d,m,v){const C=!v,k=Cd(d);k.aliasOf=v&&v.record;const S=yd(e,d),B=[k];if("alias"in d){const q=typeof d.alias=="string"?[d.alias]:d.alias;for(const ee of q)B.push(Cd(Oe({},k,{components:v?v.record.components:k.components,path:ee,aliasOf:v?v.record:k})))}let V,x;for(const q of B){const{path:ee}=q;if(m&&ee[0]!=="/"){const re=m.record.path,T=re[re.length-1]==="/"?"":"/";q.path=m.record.path+(ee&&T+ee)}if(V=_T(q,m,S),v?v.alias.push(V):(x=x||V,x!==V&&x.alias.push(V),C&&d.name&&!Pd(V)&&o(d.name)),jg(V)&&c(V),k.children){const re=k.children;for(let T=0;T<re.length;T++)i(re[T],V,v&&v.children[T])}v=v||V}return x?()=>{o(x)}:Mi}function o(d){if(Lg(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=IT(d,n);n.splice(m,0,d),d.record.name&&!Pd(d)&&r.set(d.record.name,d)}function u(d,m){let v,C={},k,S;if("name"in d&&d.name){if(v=r.get(d.name),!v)throw Us(Xe.MATCHER_NOT_FOUND,{location:d});S=v.record.name,C=Oe(Sd(m.params,v.keys.filter(x=>!x.optional).concat(v.parent?v.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Sd(d.params,v.keys.map(x=>x.name))),k=v.stringify(C)}else if(d.path!=null)k=d.path,v=n.find(x=>x.re.test(k)),v&&(C=v.parse(k),S=v.record.name);else{if(v=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!v)throw Us(Xe.MATCHER_NOT_FOUND,{location:d,currentLocation:m});S=v.record.name,C=Oe({},m.params,d.params),k=v.stringify(C)}const B=[];let V=v;for(;V;)B.unshift(V.record),V=V.parent;return{name:S,path:k,params:C,matched:B,meta:ET(B)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Sd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:vT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function vT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ET(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function IT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Bg(t,e[i])<0?r=i:n=i+1}const s=wT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function wT(t){let e=t;for(;e=e.parent;)if(jg(e)&&Bg(t,e)===0)return e}function jg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Dd(t){const e=nn(dl),n=nn(Uu),r=qe(()=>{const c=tn(t.to);return e.resolve(c)}),s=qe(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Fs.bind(null,f));if(m>-1)return m;const v=kd(c[u-2]);return u>1&&kd(f)===v&&d[d.length-1].path!==v?d.findIndex(Fs.bind(null,c[u-2])):m}),i=qe(()=>s.value>-1&&ST(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&Mg(n.params,r.value.params));function l(c={}){if(RT(c)){const u=e[tn(t.replace)?"replace":"push"](tn(t.to)).catch(Mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function TT(t){return t.length===1?t[0]:t}const AT=Km({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dd,setup(t,{slots:e}){const n=es(Dd(t)),{options:r}=nn(dl),s=qe(()=>({[Nd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&TT(e.default(n));return t.custom?i:Mu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bT=AT;function RT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ST(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function kd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nd=(t,e,n)=>t??e??n,CT=Km({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(Gc),s=qe(()=>t.route||r.value),i=nn(Td,0),o=qe(()=>{let u=tn(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=qe(()=>s.value.matched[o.value]);ca(Td,qe(()=>o.value+1)),ca(nT,l),ca(Gc,s);const c=ln();return Tr(()=>[c.value,l.value,t.name],([u,f,d],[m,v,C])=>{f&&(f.instances[d]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Fs(f,v)||!m)&&(f.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Od(n.default,{Component:m,route:u});const v=d.props[f],C=v?v===!0?u.params:typeof v=="function"?v(u):v:null,S=Mu(m,Oe({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Od(n.default,{Component:S,route:u})||S}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PT=CT;function DT(t){const e=yT(t.routes,t),n=t.parseQuery||eT,r=t.stringifyQuery||wd,s=t.history,i=yi(),o=yi(),l=yi(),c=gE(fr);let u=fr;Is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hc.bind(null,U=>""+U),d=hc.bind(null,Lw),m=hc.bind(null,Ji);function v(U,te){let J,se;return Lg(U)?(J=e.getRecordMatcher(U),se=te):se=U,e.addRoute(se,J)}function C(U){const te=e.getRecordMatcher(U);te&&e.removeRoute(te)}function k(){return e.getRoutes().map(U=>U.record)}function S(U){return!!e.getRecordMatcher(U)}function B(U,te){if(te=Oe({},te||c.value),typeof U=="string"){const P=fc(n,U,te.path),M=e.resolve({path:P.path},te),$=s.createHref(P.fullPath);return Oe(P,M,{params:m(M.params),hash:Ji(P.hash),redirectedFrom:void 0,href:$})}let J;if(U.path!=null)J=Oe({},U,{path:fc(n,U.path,te.path).path});else{const P=Oe({},U.params);for(const M in P)P[M]==null&&delete P[M];J=Oe({},U,{params:d(P)}),te.params=d(te.params)}const se=e.resolve(J,te),Te=U.hash||"";se.params=f(m(se.params));const I=Bw(r,Oe({},U,{hash:Vw(Te),path:se.path})),b=s.createHref(I);return Oe({fullPath:I,hash:Te,query:r===wd?tT(U.query):U.query||{}},se,{redirectedFrom:void 0,href:b})}function V(U){return typeof U=="string"?fc(n,U,c.value.path):Oe({},U)}function x(U,te){if(u!==U)return Us(Xe.NAVIGATION_CANCELLED,{from:te,to:U})}function q(U){return T(U)}function ee(U){return q(Oe(V(U),{replace:!0}))}function re(U,te){const J=U.matched[U.matched.length-1];if(J&&J.redirect){const{redirect:se}=J;let Te=typeof se=="function"?se(U,te):se;return typeof Te=="string"&&(Te=Te.includes("?")||Te.includes("#")?Te=V(Te):{path:Te},Te.params={}),Oe({query:U.query,hash:U.hash,params:Te.path!=null?{}:U.params},Te)}}function T(U,te){const J=u=B(U),se=c.value,Te=U.state,I=U.force,b=U.replace===!0,P=re(J,se);if(P)return T(Oe(V(P),{state:typeof P=="object"?Oe({},Te,P.state):Te,force:I,replace:b}),te||J);const M=J;M.redirectedFrom=te;let $;return!I&&jw(r,se,J)&&($=Us(Xe.NAVIGATION_DUPLICATED,{to:M,from:se}),O(se,se,!0,!1)),($?Promise.resolve($):w(M,se)).catch(L=>Mn(L)?Mn(L,Xe.NAVIGATION_GUARD_REDIRECT)?L:ae(L):we(L,M,se)).then(L=>{if(L){if(Mn(L,Xe.NAVIGATION_GUARD_REDIRECT))return T(Oe({replace:b},V(L.to),{state:typeof L.to=="object"?Oe({},Te,L.to.state):Te,force:I}),te||M)}else L=A(M,se,!0,b,Te);return R(M,se,L),L})}function y(U,te){const J=x(U,te);return J?Promise.reject(J):Promise.resolve()}function _(U){const te=lt.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(U):U()}function w(U,te){let J;const[se,Te,I]=rT(U,te);J=pc(se.reverse(),"beforeRouteLeave",U,te);for(const P of se)P.leaveGuards.forEach(M=>{J.push(_r(M,U,te))});const b=y.bind(null,U,te);return J.push(b),jt(J).then(()=>{J=[];for(const P of i.list())J.push(_r(P,U,te));return J.push(b),jt(J)}).then(()=>{J=pc(Te,"beforeRouteUpdate",U,te);for(const P of Te)P.updateGuards.forEach(M=>{J.push(_r(M,U,te))});return J.push(b),jt(J)}).then(()=>{J=[];for(const P of I)if(P.beforeEnter)if(pn(P.beforeEnter))for(const M of P.beforeEnter)J.push(_r(M,U,te));else J.push(_r(P.beforeEnter,U,te));return J.push(b),jt(J)}).then(()=>(U.matched.forEach(P=>P.enterCallbacks={}),J=pc(I,"beforeRouteEnter",U,te,_),J.push(b),jt(J))).then(()=>{J=[];for(const P of o.list())J.push(_r(P,U,te));return J.push(b),jt(J)}).catch(P=>Mn(P,Xe.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function R(U,te,J){l.list().forEach(se=>_(()=>se(U,te,J)))}function A(U,te,J,se,Te){const I=x(U,te);if(I)return I;const b=te===fr,P=Is?history.state:{};J&&(se||b?s.replace(U.fullPath,Oe({scroll:b&&P&&P.scroll},Te)):s.push(U.fullPath,Te)),c.value=U,O(U,te,J,b),ae()}let E;function Ae(){E||(E=s.listen((U,te,J)=>{if(!qt.listening)return;const se=B(U),Te=re(se,qt.currentRoute.value);if(Te){T(Oe(Te,{replace:!0,force:!0}),se).catch(Mi);return}u=se;const I=c.value;Is&&Qw(Id(I.fullPath,J.delta),fl()),w(se,I).catch(b=>Mn(b,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_CANCELLED)?b:Mn(b,Xe.NAVIGATION_GUARD_REDIRECT)?(T(Oe(V(b.to),{force:!0}),se).then(P=>{Mn(P,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===Hc.pop&&s.go(-1,!1)}).catch(Mi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),we(b,se,I))).then(b=>{b=b||A(se,I,!1),b&&(J.delta&&!Mn(b,Xe.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===Hc.pop&&Mn(b,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(se,I,b)}).catch(Mi)}))}let Ge=yi(),De=yi(),he;function we(U,te,J){ae(U);const se=De.list();return se.length?se.forEach(Te=>Te(U,te,J)):console.error(U),Promise.reject(U)}function Et(){return he&&c.value!==fr?Promise.resolve():new Promise((U,te)=>{Ge.add([U,te])})}function ae(U){return he||(he=!U,Ae(),Ge.list().forEach(([te,J])=>U?J(U):te()),Ge.reset()),U}function O(U,te,J,se){const{scrollBehavior:Te}=t;if(!Is||!Te)return Promise.resolve();const I=!J&&Yw(Id(U.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return sl().then(()=>Te(U,te,I)).then(b=>b&&zw(b)).catch(b=>we(b,U,te))}const H=U=>s.go(U);let pe;const lt=new Set,qt={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:k,resolve:B,options:t,push:q,replace:ee,go:H,back:()=>H(-1),forward:()=>H(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:De.add,isReady:Et,install(U){U.component("RouterLink",bT),U.component("RouterView",PT),U.config.globalProperties.$router=qt,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(c)}),Is&&!pe&&c.value===fr&&(pe=!0,q(s.location).catch(se=>{}));const te={};for(const se in fr)Object.defineProperty(te,se,{get:()=>c.value[se],enumerable:!0});U.provide(dl,qt),U.provide(Uu,Dm(te)),U.provide(Gc,c);const J=U.unmount;lt.add(U),U.unmount=function(){lt.delete(U),lt.size<1&&(u=fr,E&&E(),E=null,c.value=fr,pe=!1,he=!1),J()}}};function jt(U){return U.reduce((te,J)=>te.then(()=>_(J)),Promise.resolve())}return qt}function kT(){return nn(dl)}function Bu(t){return nn(Uu)}var Vd={};/**
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
 */const $g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[d],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new OT;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VT=function(t){const e=$g(t);return qg.encodeByteArray(e,!0)},ka=function(t){return VT(t).replace(/\./g,"")},Hg=function(t){try{return qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MT=()=>xT().__FIREBASE_DEFAULTS__,LT=()=>{if(typeof process>"u"||typeof Vd>"u")return;const t=Vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hg(t[1]);return e&&JSON.parse(e)},pl=()=>{try{return MT()||LT()||FT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wg=t=>{var e,n;return(n=(e=pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UT=t=>{const e=Wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gg=()=>{var t;return(t=pl())===null||t===void 0?void 0:t.config},Kg=t=>{var e;return(e=pl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class BT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ka(JSON.stringify(n)),ka(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $T(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function qT(){var t;const e=(t=pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KT(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zT(){return!qT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const JT="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JT,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new sr(s,l,r)}}function XT(t,e){return t.replace(ZT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZT=/\{\$([^}]+)}/g;function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xd(i)&&xd(o)){if(!Na(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xd(t){return t!==null&&typeof t=="object"}/**
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
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tA(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class sA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(t){return t===Gr?void 0:t}function oA(t){return t.instantiationMode==="EAGER"}/**
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
 */class aA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const lA={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},cA=Re.INFO,uA={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},hA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=hA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const fA=(t,e)=>e.some(n=>t instanceof n);let Md,Ld;function dA(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zg=new WeakMap,Kc=new WeakMap,Qg=new WeakMap,gc=new WeakMap,$u=new WeakMap;function mA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zg.set(n,t)}).catch(()=>{}),$u.set(e,t),e}function gA(t){if(Kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _A(t){zc=t(zc)}function yA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Qg.set(r,e.sort?e.sort():[e]),Ar(r)}:pA().includes(t)?function(...e){return t.apply(_c(this),e),Ar(zg.get(this))}:function(...e){return Ar(t.apply(_c(this),e))}}function vA(t){return typeof t=="function"?yA(t):(t instanceof IDBTransaction&&gA(t),fA(t,dA())?new Proxy(t,zc):t)}function Ar(t){if(t instanceof IDBRequest)return mA(t);if(gc.has(t))return gc.get(t);const e=vA(t);return e!==t&&(gc.set(t,e),$u.set(e,t)),e}const _c=t=>$u.get(t);function EA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ar(o.result),c.oldVersion,c.newVersion,Ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const IA=["get","getKey","getAll","getAllKeys","count"],wA=["put","add","delete","clear"],yc=new Map;function Fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return yc.set(e,i),i}_A(t=>({...t,get:(e,n,r)=>Fd(e,n)||t.get(e,n,r),has:(e,n)=>!!Fd(e,n)||t.has(e,n)}));/**
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
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Ud="0.10.13";/**
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
 */const Xn=new ju("@firebase/app"),bA="@firebase/app-compat",RA="@firebase/analytics-compat",SA="@firebase/analytics",CA="@firebase/app-check-compat",PA="@firebase/app-check",DA="@firebase/auth",kA="@firebase/auth-compat",NA="@firebase/database",OA="@firebase/data-connect",VA="@firebase/database-compat",xA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",BA="@firebase/messaging-compat",jA="@firebase/performance",$A="@firebase/performance-compat",qA="@firebase/remote-config",HA="@firebase/remote-config-compat",WA="@firebase/storage",GA="@firebase/storage-compat",KA="@firebase/firestore",zA="@firebase/vertexai-preview",QA="@firebase/firestore-compat",YA="firebase",JA="10.14.1";/**
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
 */const Yc="[DEFAULT]",XA={[Qc]:"fire-core",[bA]:"fire-core-compat",[SA]:"fire-analytics",[RA]:"fire-analytics-compat",[PA]:"fire-app-check",[CA]:"fire-app-check-compat",[DA]:"fire-auth",[kA]:"fire-auth-compat",[NA]:"fire-rtdb",[OA]:"fire-data-connect",[VA]:"fire-rtdb-compat",[xA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[BA]:"fire-fcm-compat",[jA]:"fire-perf",[$A]:"fire-perf-compat",[qA]:"fire-rc",[HA]:"fire-rc-compat",[WA]:"fire-gcs",[GA]:"fire-gcs-compat",[KA]:"fire-fst",[QA]:"fire-fst-compat",[zA]:"fire-vertex","fire-js":"fire-js",[YA]:"fire-js-all"};/**
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
 */const Oa=new Map,ZA=new Map,Jc=new Map;function Bd(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(Jc.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Oa.values())Bd(n,t);for(const n of ZA.values())Bd(n,t);return!0}function qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
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
 */const eb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new mo("app","Firebase",eb);/**
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
 */class tb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=JA;function Yg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=Gg()),!n)throw br.create("no-options");const i=Oa.get(s);if(i){if(Na(n,i.options)&&Na(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new aA(s);for(const c of Jc.values())o.addComponent(c);const l=new tb(n,r,o);return Oa.set(s,l),l}function Jg(t=Yc){const e=Oa.get(t);if(!e&&t===Yc&&Gg())return Yg();if(!e)throw br.create("no-app",{appName:t});return e}function Rr(t,e,n){var r;let s=(r=XA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(l.join(" "));return}Bs(new ts(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nb="firebase-heartbeat-database",rb=1,Xi="firebase-heartbeat-store";let vc=null;function Xg(){return vc||(vc=EA(nb,rb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),vc}async function sb(t){try{const n=(await Xg()).transaction(Xi),r=await n.objectStore(Xi).get(Zg(t));return await n.done,r}catch(e){if(e instanceof sr)Xn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function jd(t,e){try{const r=(await Xg()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(e,Zg(t)),await r.done}catch(n){if(n instanceof sr)Xn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function Zg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ib=1024,ob=30*24*60*60*1e3;class ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$d();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ob}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$d(),{heartbeatsToSend:r,unsentEntries:s}=lb(this._heartbeatsCache.heartbeats),i=ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Xn.warn(n),""}}}function $d(){return new Date().toISOString().substring(0,10)}function lb(t,e=ib){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qd(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ub(t){Bs(new ts("platform-logger",e=>new TA(e),"PRIVATE")),Bs(new ts("heartbeat",e=>new ab(e),"PRIVATE")),Rr(Qc,Ud,t),Rr(Qc,Ud,"esm2017"),Rr("fire-js","")}ub("");function Hu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hb=e_,t_=new mo("auth","Firebase",e_());/**
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
 */const Va=new ju("@firebase/auth");function fb(t,...e){Va.logLevel<=Re.WARN&&Va.warn(`Auth (${Ys}): ${t}`,...e)}function fa(t,...e){Va.logLevel<=Re.ERROR&&Va.error(`Auth (${Ys}): ${t}`,...e)}/**
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
 */function mn(t,...e){throw Wu(t,...e)}function bn(t,...e){return Wu(t,...e)}function n_(t,e,n){const r=Object.assign(Object.assign({},hb()),{[e]:n});return new mo("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return n_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t_.create(t,...e)}function me(t,e,...n){if(!t)throw Wu(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fa(e),new Error(e)}function Zn(t,e){t||qn(e)}/**
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
 */function Xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function db(){return Hd()==="http:"||Hd()==="https:"}function Hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(db()||WT()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=$T()||GT()}get(){return pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gu(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _b=new _o(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,s={}){return s_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=go(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return HT()||(u.referrerPolicy="no-referrer"),r_.fetch()(i_(t,t.config.apiHost,n,l),u)})}async function s_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gb),e);try{const s=new vb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ta(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw n_(t,f,u);mn(t,f)}}catch(s){if(s instanceof sr)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function yo(t,e,n,r,s={}){const i=await Dn(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function i_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gu(t.config,s):`${t.config.apiScheme}://${s}`}function yb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),_b.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function Wd(t){return t!==void 0&&t.enterprise!==void 0}class Eb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ib(t,e){return Dn(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
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
 */async function wb(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function o_(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tb(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=Ku(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Li(Ec(s.auth_time)),issuedAtTime:Li(Ec(s.iat)),expirationTime:Li(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hg(n);return s?JSON.parse(s):(fa("Failed to decode base64 JWT payload"),null)}catch(s){return fa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gd(t){const e=Ku(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&Ab(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ab({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await js(t,o_(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?a_(i.providerUserInfo):[],l=Sb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Rb(t){const e=tt(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function a_(t){return t.map(e=>{var{providerId:n}=e,r=Hu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cb(t,e){const n=await s_(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=i_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pb(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Gd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Cb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
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
 */function dr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tb(this,e)}reload(){return Rb(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await js(this,wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:q,isAnonymous:ee,providerData:re,stsTokenManager:T}=n;me(x&&T,e,"internal-error");const y=Ns.fromJSON(this.name,T);me(typeof x=="string",e,"internal-error"),dr(d,e.name),dr(m,e.name),me(typeof q=="boolean",e,"internal-error"),me(typeof ee=="boolean",e,"internal-error"),dr(v,e.name),dr(C,e.name),dr(k,e.name),dr(S,e.name),dr(B,e.name),dr(V,e.name);const _=new Hn({uid:x,auth:e,email:m,emailVerified:q,displayName:d,isAnonymous:ee,photoURL:C,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:V});return re&&Array.isArray(re)&&(_.providerData=re.map(w=>Object.assign({},w))),S&&(_._redirectEventId=S),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?a_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ns;l.updateFromIdToken(r);const c=new Hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Kd=new Map;function Wn(t){Zn(t instanceof Function,"Expected a class definition");let e=Kd.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kd.set(t,e),e)}/**
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
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l_.type="NONE";const zd=l_;/**
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
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=da(this.userKey,s.apiKey,i),this.fullPersistenceKey=da("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(Wn(zd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Wn(zd);const o=da(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const d=Hn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Os(i,e,r))}}/**
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
 */function Qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(u_(e))return"Safari";if((e.includes("chrome/")||h_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c_(t=kt()){return/firefox\//i.test(t)}function u_(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h_(t=kt()){return/crios\//i.test(t)}function f_(t=kt()){return/iemobile/i.test(t)}function d_(t=kt()){return/android/i.test(t)}function p_(t=kt()){return/blackberry/i.test(t)}function m_(t=kt()){return/webos/i.test(t)}function zu(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Db(t=kt()){var e;return zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kb(){return KT()&&document.documentMode===10}function g_(t=kt()){return zu(t)||d_(t)||m_(t)||p_(t)||/windows phone/i.test(t)||f_(t)}/**
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
 */function __(t,e=[]){let n;switch(t){case"Browser":n=Qd(kt());break;case"Worker":n=`${Qd(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
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
 */class Nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Ob(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Vb=6;class xb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yd(this),this.idTokenSubscription=new Yd(this),this.beforeStateQueue=new Nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(zn(this));const n=e?tt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ob(this),n=new xb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return tt(t)}class Yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=tA(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lb(t){ml=t}function y_(t){return ml.loadJS(t)}function Fb(){return ml.recaptchaEnterpriseScript}function Ub(){return ml.gapiScript}function Bb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jb="recaptcha-enterprise",$b="NO_RECAPTCHA";class qb{constructor(e){this.type=jb,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ib(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Eb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Wd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o($b)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Wd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fb();c.length!==0&&(c+=l),y_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Jd(t,e,n,r=!1){const s=new qb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ma(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Hb(t,e){const n=qu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Na(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function Wb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gb(t,e,n){const r=xr(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=v_(e),{host:o,port:l}=Kb(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zb()}function v_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kb(t){const e=v_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xd(o)}}}function Xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function Qb(t,e){return Dn(t,"POST","/v1/accounts:update",e)}async function Yb(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jb(t,e){return yo(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}async function Xb(t,e){return Dn(t,"POST","/v1/accounts:sendOobCode",ir(t,e))}async function Zb(t,e){return Xb(t,e)}/**
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
 */async function e0(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function t0(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
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
 */class Zi extends Qu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ma(e,n,"signInWithPassword",Jb);case"emailLink":return e0(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ma(e,r,"signUpPassword",Yb);case"emailLink":return t0(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vs(t,e){return yo(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
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
 */const n0="http://localhost";class ns extends Qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:n0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
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
 */function r0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s0(t){const e=Ai(bi(t)).link,n=e?Ai(bi(e)).deep_link_id:null,r=Ai(bi(t)).deep_link_id;return(r?Ai(bi(r)).link:null)||r||n||e||t}class Yu{constructor(e){var n,r,s,i,o,l;const c=Ai(bi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,d=r0((s=c.mode)!==null&&s!==void 0?s:null);me(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=s0(e);try{return new Yu(n)}catch{return null}}}/**
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
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yu.parseLink(n);return me(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yr extends vo{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class vr extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
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
 */class Er extends vo{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
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
 */class Ir extends vo{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */async function i0(t,e){return yo(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Hn._fromIdTokenResponse(e,r,s),o=Zd(r);return new rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zd(r);return new rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class La extends sr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function I_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function o0(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
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
 */async function a0(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await js(t,I_(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=Ku(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),rs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
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
 */async function w_(t,e,n=!1){if(Tn(t.app))return Promise.reject(zn(t));const r="signIn",s=await I_(t,r,e),i=await rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function l0(t,e){return w_(xr(t),e)}/**
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
 */async function T_(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c0(t,e,n){const r=xr(t);await Ma(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Zb)}async function u0(t,e,n){if(Tn(t.app))return Promise.reject(zn(t));const r=xr(t),o=await Ma(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&T_(t),c}),l=await rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function h0(t,e,n){return Tn(t.app)?Promise.reject(zn(t)):l0(tt(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T_(t),r})}function f0(t,e){return d0(tt(t),null,e)}async function d0(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await js(t,Qb(r,i));await t._updateTokensIfNecessary(o,!0)}function p0(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function m0(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function g0(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function _0(t){return tt(t).signOut()}const Fa="__sak";/**
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
 */class A_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const y0=1e3,v0=10;class b_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,v0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b_.type="LOCAL";const E0=b_;/**
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
 */class R_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const S_=R_;/**
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
 */function I0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await I0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gl.receivers=[];/**
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
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class w0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ju("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function T0(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function C_(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function A0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R0(){return C_()?self:null}/**
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
 */const P_="firebaseLocalStorageDb",S0=1,Ua="firebaseLocalStorage",D_="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function C0(){const t=indexedDB.deleteDatabase(P_);return new Eo(t).toPromise()}function eu(){const t=indexedDB.open(P_,S0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ua,{keyPath:D_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ua)?e(r):(r.close(),await C0(),e(await eu()))})})}async function ep(t,e,n){const r=_l(t,!0).put({[D_]:e,value:n});return new Eo(r).toPromise()}async function P0(t,e){const n=_l(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function tp(t,e){const n=_l(t,!0).delete(e);return new Eo(n).toPromise()}const D0=800,k0=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gl._getInstance(R0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A0(),!this.activeServiceWorker)return;this.sender=new w0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eu();return await ep(e,Fa,"1"),await tp(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>P0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_l(s,!1).getAll();return new Eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const N0=k_;new _o(3e4,6e4);/**
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
 */function O0(t,e){return e?Wn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xu extends Qu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V0(t){return w_(t.auth,new Xu(t),t.bypassAuthState)}function x0(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),a0(n,new Xu(t),t.bypassAuthState)}async function M0(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),o0(n,new Xu(t),t.bypassAuthState)}/**
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
 */class N_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V0;case"linkViaPopup":case"linkViaRedirect":return M0;case"reauthViaPopup":case"reauthViaRedirect":return x0;default:mn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L0=new _o(2e3,1e4);class Rs extends N_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L0.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const F0="pendingRedirect",pa=new Map;class U0 extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await B0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B0(t,e){const n=q0(e),r=$0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function j0(t,e){pa.set(t._key(),e)}function $0(t){return Wn(t._redirectPersistence)}function q0(t){return da(F0,t.config.apiKey,t.name)}async function H0(t,e,n=!1){if(Tn(t.app))return Promise.reject(zn(t));const r=xr(t),s=O0(r,e),o=await new U0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const W0=10*60*1e3;class G0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W0&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}}function np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(t);default:return!1}}/**
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
 */async function z0(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const Q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y0=/^https?/;async function J0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z0(t);for(const n of e)try{if(X0(n))return}catch{}mn(t,"unauthorized-domain")}function X0(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Y0.test(n))return!1;if(Q0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Z0=new _o(3e4,6e4);function rp(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eR(t){return new Promise((e,n)=>{var r,s,i;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),n(bn(t,"network-request-failed"))},timeout:Z0.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=Bb("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},y_(`${Ub()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ma=null,e})}let ma=null;function tR(t){return ma=ma||eR(t),ma}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nR=new _o(5e3,15e3),rR="__/auth/iframe",sR="emulator/auth/iframe",iR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aR(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gu(e,sR):`https://${t.config.authDomain}/${rR}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=oR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${go(r).slice(1)}`}async function lR(t){const e=await tR(t),n=Rn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:aR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},nR.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uR=500,hR=600,fR="_blank",dR="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pR(t,e,n,r=uR,s=hR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(l=h_(u)?fR:n),c_(u)&&(e=e||dR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(Db(u)&&l!=="_self")return mR(e||"",l),new sp(null);const d=window.open(e||"",l,f);me(d,t,"popup-blocked");try{d.focus()}catch{}return new sp(d)}function mR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gR="__/auth/handler",_R="emulator/auth/handler",yR=encodeURIComponent("fac");async function ip(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof vo){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${yR}=${encodeURIComponent(c)}`:"";return`${vR(t)}?${go(l).slice(1)}${u}`}function vR({config:t}){return t.emulator?Gu(t,_R):`https://${t.authDomain}/${gR}`}/**
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
 */const Ic="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S_,this._completeRedirectFn=H0,this._overrideRedirectResult=j0}async _openPopup(e,n,r,s){var i;Zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ip(e,n,r,Xc(),s);return pR(e,o,Ju())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ip(e,n,r,Xc(),s);return T0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lR(e),r=new G0(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||u_()||zu()}}const IR=ER;var op="@firebase/auth",ap="1.7.9";/**
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
 */class wR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AR(t){Bs(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(t)},u=new Mb(r,s,i,c);return Wb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bs(new ts("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new wR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(op,ap,TR(t)),Rr(op,ap,"esm2017")}/**
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
 */const bR=5*60,RR=Kg("authIdTokenMaxAge")||bR;let lp=null;const SR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const s=n==null?void 0:n.token;lp!==s&&(lp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CR(t=Jg()){const e=qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hb(t,{popupRedirectResolver:IR,persistence:[N0,E0,S_]}),r=Kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=SR(i.toString());m0(n,o,()=>o(n.currentUser)),p0(n,l=>o(l))}}const s=Wg("auth");return s&&Gb(n,`http://${s}`),n}function PR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AR("Browser");var DR="firebase",kR="10.14.1";/**
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
 */Rr(DR,kR,"app");var cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,V_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function _(){}_.prototype=y.prototype,T.D=y.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(w,R,A){for(var E=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)E[Ae-2]=arguments[Ae];return y.prototype[R].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)w[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)w[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=T.g[0],_=T.g[1],R=T.g[2];var A=T.g[3],E=y+(A^_&(R^A))+w[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+w[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+w[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+w[3]+3250441966&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+w[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+w[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+w[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+w[7]+4249261313&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+w[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+w[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+w[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+w[11]+2304563134&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(A^_&(R^A))+w[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(R^y&(_^R))+w[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=R+(_^A&(y^_))+w[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=_+(y^R&(A^y))+w[15]+1236535329&4294967295,_=R+(E<<22&4294967295|E>>>10),E=y+(R^A&(_^R))+w[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+w[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+w[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+w[0]+3921069994&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+w[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+w[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+w[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+w[4]+3889429448&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+w[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+w[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+w[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+w[8]+1163531501&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(R^A&(_^R))+w[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^R&(y^_))+w[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=R+(y^_&(A^y))+w[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(R^A))+w[12]+2368359562&4294967295,_=R+(E<<20&4294967295|E>>>12),E=y+(_^R^A)+w[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+w[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+w[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+w[14]+4259657740&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+w[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+w[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+w[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+w[10]+3200236656&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+w[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+w[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+w[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+w[6]+76029189&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(_^R^A)+w[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^R)+w[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=R+(A^y^_)+w[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=_+(R^A^y)+w[2]+3299628645&4294967295,_=R+(E<<23&4294967295|E>>>9),E=y+(R^(_|~A))+w[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+w[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+w[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+w[5]+4237533241&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+w[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+w[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+w[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+w[1]+2240044497&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+w[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+w[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+w[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+w[13]+1309151649&4294967295,_=R+(E<<21&4294967295|E>>>11),E=y+(R^(_|~A))+w[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~R))+w[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=R+(y^(A|~_))+w[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=_+(A^(R|~y))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var _=y-this.blockSize,w=this.B,R=this.h,A=0;A<y;){if(R==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<y;)if(w[R++]=T.charCodeAt(A++),R==this.blockSize){s(this,w),R=0;break}}else for(;A<y;)if(w[R++]=T[A++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var _=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=_&255,_/=256;for(this.u(T),T=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)T[_++]=this.g[y]>>>w&255;return T};function i(T,y){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=y(T)}function o(T,y){this.h=y;for(var _=[],w=!0,R=T.length-1;0<=R;R--){var A=T[R]|0;w&&A==y||(_[R]=A,w=!1)}this.g=_}var l={};function c(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return S(u(-T));for(var y=[],_=1,w=0;T>=_;w++)y[w]=T/_|0,_*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return S(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=d,R=0;R<T.length;R+=8){var A=Math.min(8,T.length-R),E=parseInt(T.substring(R,R+A),y);8>A?(A=u(Math.pow(y,A)),w=w.j(A).add(u(E))):(w=w.j(_),w=w.add(u(E)))}return w}var d=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-S(this).m();for(var T=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);T+=(0<=w?w:4294967296+w)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+S(this).toString(T);for(var y=u(Math.pow(T,6)),_=this,w="";;){var R=q(_,y).g;_=B(_,R.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=R,C(_))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=B(this,T),k(T)?-1:C(T)?0:1};function S(T){for(var y=T.g.length,_=[],w=0;w<y;w++)_[w]=~T.g[w];return new o(_,~T.h).add(m)}t.abs=function(){return k(this)?S(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],w=0,R=0;R<=y;R++){var A=w+(this.i(R)&65535)+(T.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);w=E>>>16,A&=65535,E&=65535,_[R]=E<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function B(T,y){return T.add(S(y))}t.j=function(T){if(C(this)||C(T))return d;if(k(this))return k(T)?S(this).j(S(T)):S(S(this).j(T));if(k(T))return S(this.j(S(T)));if(0>this.l(v)&&0>T.l(v))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<T.g.length;R++){var A=this.i(w)>>>16,E=this.i(w)&65535,Ae=T.i(R)>>>16,Ge=T.i(R)&65535;_[2*w+2*R]+=E*Ge,V(_,2*w+2*R),_[2*w+2*R+1]+=A*Ge,V(_,2*w+2*R+1),_[2*w+2*R+1]+=E*Ae,V(_,2*w+2*R+1),_[2*w+2*R+2]+=A*Ae,V(_,2*w+2*R+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function V(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function x(T,y){this.g=T,this.h=y}function q(T,y){if(C(y))throw Error("division by zero");if(C(T))return new x(d,d);if(k(T))return y=q(S(T),y),new x(S(y.g),S(y.h));if(k(y))return y=q(T,S(y)),new x(S(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,w=y;0>=w.l(T);)_=ee(_),w=ee(w);var R=re(_,1),A=re(w,1);for(w=re(w,2),_=re(_,2);!C(w);){var E=A.add(w);0>=E.l(T)&&(R=R.add(_),A=E),w=re(w,1),_=re(_,1)}return y=B(T,R.j(y)),new x(R,y)}for(R=d;0<=T.l(y);){for(_=Math.max(1,Math.floor(T.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=u(_),E=A.j(y);k(E)||0<E.l(T);)_-=w,A=u(_),E=A.j(y);C(A)&&(A=m),R=R.add(A),T=B(T,E)}return new x(R,T)}t.A=function(T){return q(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&T.i(w);return new o(_,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|T.i(w);return new o(_,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^T.i(w);return new o(_,this.h^T.h)};function ee(T){for(var y=T.g.length+1,_=[],w=0;w<y;w++)_[w]=T.i(w)<<1|T.i(w-1)>>>31;return new o(_,T.h)}function re(T,y){var _=y>>5;y%=32;for(var w=T.g.length-_,R=[],A=0;A<w;A++)R[A]=0<y?T.i(A+_)>>>y|T.i(A+_+1)<<32-y:T.i(A+_);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,V_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Zr=o}).apply(typeof cp<"u"?cp:typeof self<"u"?self:typeof window<"u"?window:{});var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x_,Ri,M_,ga,tu,L_,F_,U_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof na=="object"&&na];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in p))break e;p=p[D]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,g=!1,D={next:function(){if(!g&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function v(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,D,N){for(var Q=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Q[Ue-2]=arguments[Ue];return h.prototype[D].apply(g,Q)}}function k(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function S(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const D=a.length||0,N=g.length||0;a.length=D+N;for(let Q=0;Q<N;Q++)a[D+Q]=g[Q]}else a.push(g)}}class B{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ee=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function re(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function T(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)a[p]=g[p];for(let N=0;N<_.length;N++)p=_[N],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function R(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Et;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ae{constructor(){this.h=this.g=null}add(h,p){const g=Ge.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Ge=new B(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,we=!1,Et=new Ae,ae=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(O)}};var O=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){A(p)}var h=Ge;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}we=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var lt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function qt(a,h){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ee){e:{try{q(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qt.aa.h.call(this)}}C(qt,pe);var jt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),te=0;function J(a,h,p,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=D,this.key=++te,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,h,p,g,D){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var Q=b(a,h,g,D);return-1<Q?(h=a[Q],p||(h.fa=!1)):(h=new J(h,this.src,N,!!g,D),h.fa=p,a.push(h)),h};function I(a,h){var p=h.type;if(p in a.g){var g=a.g[p],D=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=D)&&Array.prototype.splice.call(g,D,1),N&&(se(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function b(a,h,p,g){for(var D=0;D<a.length;++D){var N=a[D];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==g)return D}return-1}var P="closure_lm_"+(1e6*Math.random()|0),M={};function $(a,h,p,g,D){if(Array.isArray(h)){for(var N=0;N<h.length;N++)$(a,h[N],p,g,D);return null}return p=de(p),a&&a[U]?a.K(h,p,u(g)?!!g.capture:!1,D):L(a,h,p,!1,g,D)}function L(a,h,p,g,D,N){if(!h)throw Error("Invalid event type");var Q=u(D)?!!D.capture:!!D,Ue=X(a);if(Ue||(a[P]=Ue=new Te(a)),p=Ue.add(h,p,g,Q,N),p.proxy)return p;if(g=Y(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)lt||(D=Q),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(W(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function a(p){return h.call(a.src,a.listener,p)}const h=ue;return a}function z(a,h,p,g,D){if(Array.isArray(h))for(var N=0;N<h.length;N++)z(a,h[N],p,g,D);else g=u(g)?!!g.capture:!!g,p=de(p),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=b(N,p,g,D),-1<p&&(se(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,p,g,D)),(p=-1<a?h[a]:null)&&K(p))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])I(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(W(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=X(h))?(I(p,a),p.h==0&&(p.src=null,h[P]=null)):se(a)}}}function W(a){return a in M?M[a]:M[a]="on"+a}function ue(a,h){if(a.da)a=!0;else{h=new qt(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&K(a),a=p.call(g,h)}return a}function X(a){return a=a[P],a instanceof Te?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(h){return a.handleEvent(h)}),a[ie])}function fe(){H.call(this),this.i=new Te(this),this.M=this,this.F=null}C(fe,H),fe.prototype[U]=!0,fe.prototype.removeEventListener=function(a,h,p,g){z(this,a,h,p,g)};function Ie(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new pe(h,a);else if(h instanceof pe)h.target=h.target||a;else{var D=h;h=new pe(g,a),w(h,D)}if(D=!0,p)for(var N=p.length-1;0<=N;N--){var Q=h.g=p[N];D=Ce(Q,g,!0,h)&&D}if(Q=h.g=a,D=Ce(Q,g,!0,h)&&D,D=Ce(Q,g,!1,h)&&D,p)for(N=0;N<p.length;N++)Q=h.g=p[N],D=Ce(Q,g,!1,h)&&D}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)se(p[g]);delete a.g[h],a.h--}}this.F=null},fe.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},fe.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ce(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,N=0;N<h.length;++N){var Q=h[N];if(Q&&!Q.da&&Q.capture==p){var Ue=Q.listener,pt=Q.ha||Q.src;Q.fa&&I(a.i,Q),D=Ue.call(pt,g)!==!1&&D}}return D&&!g.defaultPrevented}function Qe(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function st(a){a.g=Qe(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends H{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){H.call(this),this.h=a,this.g={}}C(It,H);var ar=[];function ni(a){re(a.g,function(h,p){this.g.hasOwnProperty(p)&&K(h)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),ni(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=l.JSON.stringify,Xt=l.JSON.parse,Vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ds(){}ds.prototype.h=null;function Lh(a){return a.h||(a.h=a.i())}function Fh(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ml(){pe.call(this,"d")}C(Ml,pe);function Ll(){pe.call(this,"c")}C(Ll,pe);var Lr={},Uh=null;function xo(){return Uh=Uh||new fe}Lr.La="serverreachability";function Bh(a){pe.call(this,Lr.La,a)}C(Bh,pe);function si(a){const h=xo();Ie(h,new Bh(h))}Lr.STAT_EVENT="statevent";function jh(a,h){pe.call(this,Lr.STAT_EVENT,a),this.stat=h}C(jh,pe);function Nt(a){const h=xo();Ie(h,new jh(h,a))}Lr.Ma="timingevent";function $h(a,h){pe.call(this,Lr.Ma,a),this.size=h}C($h,pe);function ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function gv(a,h,p,g,D,N){a.info(function(){if(a.g)if(N)for(var Q="",Ue=N.split("&"),pt=0;pt<Ue.length;pt++){var ke=Ue[pt].split("=");if(1<ke.length){var wt=ke[0];ke=ke[1];var Tt=wt.split("_");Q=2<=Tt.length&&Tt[1]=="type"?Q+(wt+"="+ke+"&"):Q+(wt+"=redacted&")}}else Q=null;else Q=N;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+p+`
`+Q})}function _v(a,h,p,g,D,N,Q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+p+`
`+N+" "+Q})}function ps(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vv(a,p)+(g?" "+g:"")})}function yv(a,h){a.info(function(){return"TIMEOUT: "+h})}oi.prototype.info=function(){};function vv(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var N=D[0];if(N!="noop"&&N!="stop"&&N!="close")for(var Q=1;Q<D.length;Q++)D[Q]=""}}}}return dt(p)}catch{return h}}var Mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fl;function Lo(){}C(Lo,ds),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Fl=new Lo;function lr(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hh}function Hh(){this.i=null,this.g="",this.h=!1}var Wh={},Ul={};function Bl(a,h,p){a.L=1,a.v=jo(kn(h)),a.m=p,a.P=!0,Gh(a,null)}function Gh(a,h){a.F=Date.now(),Fo(a),a.A=kn(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),af(p.i,"t",g),a.C=0,p=a.j.J,a.h=new Hh,a.g=bf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(ar[0]=D.toString()),D=ar);for(var N=0;N<D.length;N++){var Q=$(p,D[N],g||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),si(),gv(a.i,a.u,a.A,a.l,a.R,a.m)}lr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},lr.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Nn(this.g);var h=this.g.Ba();const _s=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||pf(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=_s?si(3):si(2)),jl(this);var p=this.g.Z();this.X=p;t:if(Kh(this)){var g=pf(this.g);a="";var D=g.length,N=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),ai(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,_v(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,pt=this.g;if((Ue=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Ue)){var ke=Ue;break t}}ke=null}if(p=ke)ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$l(this,p);else{this.o=!1,this.s=3,Nt(12),Fr(this),ai(this);break e}}if(this.P){p=!0;let on;for(;!this.J&&this.C<Q.length;)if(on=Ev(this,Q),on==Ul){Tt==4&&(this.s=4,Nt(14),p=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Wh){this.s=4,Nt(15),ps(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else ps(this.i,this.l,on,null),$l(this,on);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||Q.length!=0||this.h.h||(this.s=1,Nt(16),p=!1),this.o=this.o&&p,!p)ps(this.i,this.l,Q,"[Invalid Chunked Response]"),Fr(this),ai(this);else if(0<Q.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),zl(wt),wt.M=!0,Nt(11))}}else ps(this.i,this.l,Q,null),$l(this,Q);Tt==4&&Fr(this),this.o&&!this.J&&(Tt==4?If(this.j,this):(this.o=!1,Fo(this)))}else Lv(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Fr(this),ai(this)}}}catch{}finally{}};function Kh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ev(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?Ul:(p=Number(h.substring(p,g)),isNaN(p)?Wh:(g+=1,g+p>h.length?Ul:(h=h.slice(g,g+p),a.C=g+p,h)))}lr.prototype.cancel=function(){this.J=!0,Fr(this)};function Fo(a){a.S=Date.now()+a.I,zh(a,a.I)}function zh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ii(m(a.ba,a),h)}function jl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}lr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yv(this.i,this.A),this.L!=2&&(si(),Nt(17)),Fr(this),this.s=2,ai(this)):zh(this,this.S-a)};function ai(a){a.j.G==0||a.J||If(a.j,a)}function Fr(a){jl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ni(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function $l(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||ql(p.h,a))){if(!a.K&&ql(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ko(p),Wo(p);else break e;Kl(p),Nt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=ii(m(p.Za,p),6e3));if(1>=Jh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Br(p,11)}else if((a.K||p.g==a)&&Ko(p),!V(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let ke=D[h];if(p.T=ke[0],ke=ke[1],p.G==2)if(ke[0]=="c"){p.K=ke[1],p.ia=ke[2];const wt=ke[3];wt!=null&&(p.la=wt,p.j.info("VER="+p.la));const Tt=ke[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const _s=ke[5];_s!=null&&typeof _s=="number"&&0<_s&&(g=1.5*_s,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const on=a.g;if(on){const Qo=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var N=g.h;N.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Hl(N,N.h),N.h=null))}if(g.D){const Ql=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Ql&&(g.ya=Ql,$e(g.I,g.D,Ql))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var Q=a;if(g.qa=Af(g,g.J?g.ia:null,g.W),Q.K){Xh(g.h,Q);var Ue=Q,pt=g.L;pt&&(Ue.I=pt),Ue.B&&(jl(Ue),Fo(Ue)),g.g=Q}else vf(g);0<p.i.length&&Go(p)}else ke[0]!="stop"&&ke[0]!="close"||Br(p,7);else p.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Br(p,7):Gl(p):ke[0]!="noop"&&p.l&&p.l.ta(ke),p.v=0)}}si(4)}catch{}}var Iv=class{constructor(a,h){this.g=a,this.map=h}};function Qh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jh(a){return a.h?1:a.g?a.g.size:0}function ql(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Hl(a,h){a.g?a.g.add(h):a.h=h}function Xh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return k(a.i)}function wv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function Tv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function ef(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Tv(a),g=wv(a),D=g.length,N=0;N<D;N++)h.call(void 0,g[N],p&&p[N],a)}var tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Av(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),D=null;if(0<=g){var N=a[p].substring(0,g);D=a[p].substring(g+1)}else N=a[p];h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Uo(this,a.j),this.o=a.o,this.g=a.g,Bo(this,a.s),this.l=a.l;var h=a.i,p=new ui;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),nf(this,p),this.m=a.m}else a&&(h=String(a).match(tf))?(this.h=!1,Uo(this,h[1]||"",!0),this.o=li(h[2]||""),this.g=li(h[3]||"",!0),Bo(this,h[4]),this.l=li(h[5]||"",!0),nf(this,h[6]||"",!0),this.m=li(h[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}Ur.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ci(h,rf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ci(h,rf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ci(p,p.charAt(0)=="/"?Sv:Rv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ci(p,Pv)),a.join("")};function kn(a){return new Ur(a)}function Uo(a,h,p){a.j=p?li(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function nf(a,h,p){h instanceof ui?(a.i=h,Dv(a.i,a.h)):(p||(h=ci(h,Cv)),a.i=new ui(h,a.h))}function $e(a,h,p){a.i.set(h,p)}function jo(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function li(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ci(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,bv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rf=/[#\/\?@]/g,Rv=/[#\?:]/g,Sv=/[#\?]/g,Cv=/[#\?@]/g,Pv=/#/g;function ui(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&Av(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ui.prototype,t.add=function(a,h){cr(this),this.i=null,a=ms(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function sf(a,h){cr(a),h=ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function of(a,h){return cr(a),h=ms(a,h),a.g.has(h)}t.forEach=function(a,h){cr(this),this.g.forEach(function(p,g){p.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const D=a[g];for(let N=0;N<D.length;N++)p.push(h[g])}return p},t.V=function(a){cr(this);let h=[];if(typeof a=="string")of(this,a)&&(h=h.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return cr(this),this.i=null,a=ms(this,a),of(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function af(a,h,p){sf(a,h),0<p.length&&(a.i=null,a.g.set(ms(a,h),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const N=encodeURIComponent(String(g)),Q=this.V(g);for(g=0;g<Q.length;g++){var D=N;Q[g]!==""&&(D+="="+encodeURIComponent(String(Q[g]))),a.push(D)}}return this.i=a.join("&")};function ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Dv(a,h){h&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(p,g){var D=g.toLowerCase();g!=D&&(sf(this,g),af(this,D,p))},a)),a.j=h}function kv(a,h){const p=new oi;if(l.Image){const g=new Image;g.onload=v(ur,p,"TestLoadImage: loaded",!0,h,g),g.onerror=v(ur,p,"TestLoadImage: error",!1,h,g),g.onabort=v(ur,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(ur,p,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Nv(a,h){const p=new oi,g=new AbortController,D=setTimeout(()=>{g.abort(),ur(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(D),N.ok?ur(p,"TestPingServer: ok",!0,h):ur(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),ur(p,"TestPingServer: error",!1,h)})}function ur(a,h,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function Ov(){this.g=new Vo}function Vv(a,h,p){const g=p||"";try{ef(a,function(D,N){let Q=D;u(D)&&(Q=dt(D)),h.push(g+N+"="+encodeURIComponent(Q))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}C($o,ds),$o.prototype.g=function(){return new qo(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function qo(a,h){fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qo,fe),t=qo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?hi(this):fi(this),this.readyState==3&&lf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,hi(this))},t.Qa=function(a){this.g&&(this.response=a,hi(this))},t.ga=function(){this.g&&hi(this)};function hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cf(a){let h="";return re(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Wl(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=cf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):$e(a,h,p))}function Je(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Je,fe);var xv=/^https?$/i,Mv=["POST","PUT"];t=Je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fl.g(),this.v=this.o?Lh(this.o):Lh(Fl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){uf(this,N);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())p.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Mv,h,void 0))||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,Q]of p)this.g.setRequestHeader(N,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{df(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){uf(this,N)}};function uf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,hf(a),Ho(a)}function hf(a){a.A||(a.A=!0,Ie(a,"complete"),Ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ie(this,"complete"),Ie(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ff(this):this.bb())},t.bb=function(){ff(this)};function ff(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Qe(a.Ea,0,a);else if(Ie(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=Q===0){var D=String(a.D).match(tf)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!xv.test(D?D.toLowerCase():"")}p=g}if(p)Ie(a,"complete"),Ie(a,"success");else{a.m=6;try{var N=2<Nn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",hf(a)}}finally{Ho(a)}}}}function Ho(a,h){if(a.g){df(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ie(a,"ready");try{p.onreadystatechange=g}catch{}}}function df(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xt(h)}};function pf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Lv(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var p=R(a[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[D]||[];h[D]=N,N.push(p)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function mf(a){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=di("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=di("baseRetryDelayMs",5e3,a),this.cb=di("retryDelaySeedMs",1e4,a),this.Wa=di("forwardChannelMaxRetries",2,a),this.wa=di("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qh(a&&a.concurrentRequestLimit),this.Da=new Ov,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mf.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){Nt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Af(this,null,this.W),Go(this)};function Gl(a){if(gf(a),a.G==3){var h=a.U++,p=kn(a.I);if($e(p,"SID",a.K),$e(p,"RID",h),$e(p,"TYPE","terminate"),pi(a,p),h=new lr(a,a.j,h),h.L=2,h.v=jo(kn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=bf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fo(h)}Tf(a)}function Wo(a){a.g&&(zl(a),a.g.cancel(),a.g=null)}function gf(a){Wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Yh(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||ae(),we||(he(),we=!0),Et.add(h,a),a.B=0}}function Fv(a,h){return Jh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ii(m(a.Ga,a,h),wf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new lr(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(D.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=yf(this,D,h),p=kn(this.I),$e(p,"RID",a),$e(p,"CVER",22),this.D&&$e(p,"X-HTTP-Session-Id",this.D),pi(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(cf(N)))+"&"+h:this.m&&Wl(p,this.m,N)),Hl(this.h,D),this.Ua&&$e(p,"TYPE","init"),this.P?($e(p,"$req",h),$e(p,"SID","null"),D.T=!0,Bl(D,p,null)):Bl(D,p,h),this.G=2}}else this.G==3&&(a?_f(this,a):this.i.length==0||Yh(this.h)||_f(this))};function _f(a,h){var p;h?p=h.l:p=a.U++;const g=kn(a.I);$e(g,"SID",a.K),$e(g,"RID",p),$e(g,"AID",a.T),pi(a,g),a.m&&a.o&&Wl(g,a.m,a.o),p=new lr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=yf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Hl(a.h,p),Bl(p,g,h)}function pi(a,h){a.H&&re(a.H,function(p,g){$e(h,g,p)}),a.l&&ef({},function(p,g){$e(h,g,p)})}function yf(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let N=-1;for(;;){const Q=["count="+p];N==-1?0<p?(N=D[0].g,Q.push("ofs="+N)):N=0:Q.push("ofs="+N);let Ue=!0;for(let pt=0;pt<p;pt++){let ke=D[pt].g;const wt=D[pt].map;if(ke-=N,0>ke)N=Math.max(0,D[pt].g-100),Ue=!1;else try{Vv(wt,Q,"req"+ke+"_")}catch{g&&g(wt)}}if(Ue){g=Q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function vf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||ae(),we||(he(),we=!0),Et.add(h,a),a.v=0}}function Kl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ii(m(a.Fa,a),wf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ef(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ii(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Wo(this),Ef(this))};function zl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ef(a){a.g=new lr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=kn(a.qa);$e(h,"RID","rpc"),$e(h,"SID",a.K),$e(h,"AID",a.T),$e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(h,"TO",a.ja),$e(h,"TYPE","xmlhttp"),pi(a,h),a.m&&a.o&&Wl(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=jo(kn(h)),p.m=null,p.P=!0,Gh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Wo(this),Kl(this),Nt(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function If(a,h){var p=null;if(a.g==h){Ko(a),zl(a),a.g=null;var g=2}else if(ql(a.h,h))p=h.D,Xh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=xo(),Ie(g,new $h(g,p)),Go(a)}else vf(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&Fv(a,h)||g==2&&Kl(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function wf(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const D=!g;g=new Ur(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Uo(g,"https"),jo(g),D?kv(g.toString(),p):Nv(g.toString(),p)}else Nt(2);a.G=0,a.l&&a.l.sa(h),Tf(a),gf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Tf(a){if(a.G=0,a.ka=[],a.l){const h=Zh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Af(a,h,p){var g=p instanceof Ur?kn(p):new Ur(p);if(g.g!="")h&&(g.g=h+"."+g.g),Bo(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var N=new Ur(null);g&&Uo(N,g),h&&(N.g=h),D&&Bo(N,D),p&&(N.l=p),g=N}return p=a.D,h=a.ya,p&&h&&$e(g,p,h),$e(g,"VER",a.la),pi(a,g),g}function bf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Je(new $o({eb:p})):new Je(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rf(){}t=Rf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zo(){}zo.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){fe.call(this),this.g=new mf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new gs(this)}C(Ht,fe),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Gl(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=dt(a),a=p);h.i.push(new Iv(h.Ya++,a)),h.G==3&&Go(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Gl(this.g),delete this.g,Ht.aa.N.call(this)};function Sf(a){Ml.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Sf,Ml);function Cf(){Ll.call(this),this.status=1}C(Cf,Ll);function gs(a){this.g=a}C(gs,Rf),gs.prototype.ua=function(){Ie(this.g,"a")},gs.prototype.ta=function(a){Ie(this.g,new Sf(a))},gs.prototype.sa=function(a){Ie(this.g,new Cf)},gs.prototype.ra=function(){Ie(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,U_=function(){return new zo},F_=function(){return xo()},L_=Lr,tu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,ga=Mo,qh.COMPLETE="complete",M_=qh,Fh.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Ri=Fh,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,x_=Je}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});const up="@firebase/firestore";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Xs="10.14.0";/**
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
 */const ss=new ju("@firebase/firestore");function vi(){return ss.logLevel}function ne(t,...e){if(ss.logLevel<=Re.DEBUG){const n=e.map(Zu);ss.debug(`Firestore (${Xs}): ${t}`,...n)}}function er(t,...e){if(ss.logLevel<=Re.ERROR){const n=e.map(Zu);ss.error(`Firestore (${Xs}): ${t}`,...n)}}function $s(t,...e){if(ss.logLevel<=Re.WARN){const n=e.map(Zu);ss.warn(`Firestore (${Xs}): ${t}`,...n)}}function Zu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw er(e),new Error(e)}function Fe(t,e){t||ge()}function Ee(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class B_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class OR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VR{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new B_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new bt(e)}}class xR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Fe(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new LR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class j_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=UR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new xe(0,0))}static max(){return new ye(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends eo{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const BR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends eo{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return BR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(He.fromString(e))}static fromName(e){return new ce(He.fromString(e).popFirst(5))}static empty(){return new ce(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new He(e.slice()))}}function jR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Nr(s,ce.empty(),e)}function $R(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(ye.min(),ce.empty(),-1)}static max(){return new Nr(ye.max(),ce.empty(),-1)}}function qR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const HR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Io(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==HR)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(s=>s?G.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new G((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new G((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eh.oe=-1;function yl(t){return t==null}function Ba(t){return t===0&&1/t==-1/0}function KR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ra(this.root,e,this.comparator,!0)}}class ra{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fp(this.data.getIterator())}getIteratorFrom(e){return new fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new yt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new q_("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const zR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=zR.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nh(t){const e=t.mapValue.fields.__previous_value__;return th(e)?nh(e):e}function to(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class QR{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class no{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sa={mapValue:{}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:JR(t)?9007199254740991:YR(t)?10:11:ge()}function Pn(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Or(s.timestampValue),l=Or(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),l=rt(i.doubleValue);return o===l?Ba(o)===Ba(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(hp(o)!==hp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Pn(o[c],l[c])))return!1;return!0}(t,e);default:return ge()}}function ro(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=rt(i.integerValue||i.doubleValue),c=rt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return dp(t.timestampValue,e.timestampValue);case 4:return dp(to(t),to(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(i,o){const l=is(i),c=is(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Ne(l[u],c[u]);if(f!==0)return f}return Ne(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ne(rt(i.latitude),rt(o.latitude));return l!==0?l:Ne(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const d=i.fields||{},m=o.fields||{},v=(l=d.value)===null||l===void 0?void 0:l.arrayValue,C=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=Ne(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:pp(v,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===sa.mapValue&&o===sa.mapValue)return 0;if(i===sa.mapValue)return 1;if(o===sa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=Ne(c[d],f[d]);if(m!==0)return m;const v=Hs(l[c[d]],u[f[d]]);if(v!==0)return v}return Ne(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ge()}}function dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=Or(t),r=Or(e),s=Ne(n.seconds,r.seconds);return s!==0?s:Ne(n.nanos,r.nanos)}function pp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Hs(n[s],r[s]);if(i)return i}return Ne(n.length,r.length)}function Ws(t){return nu(t)}function nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function mp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ru(t){return!!t&&"integerValue"in t}function rh(t){return!!t&&"arrayValue"in t}function gp(t){return!!t&&"nullValue"in t}function _p(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _a(t){return!!t&&"mapValue"in t}function YR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Fi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(Fi(this.value))}}function H_(t){const e=[];return us(t.fields,(n,r)=>{const s=new gt([n]);if(_a(r)){const i=H_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,ye.min(),ye.min(),ye.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,ye.min(),ye.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,ye.min(),ye.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ja{constructor(e,n){this.position=e,this.inclusive=n}}function yp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function XR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class W_{}class ot extends W_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eS(e,n,r):n==="array-contains"?new rS(e,r):n==="in"?new sS(e,r):n==="not-in"?new iS(e,r):n==="array-contains-any"?new oS(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tS(e,r):new nS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new gn(e,n)}matches(e){return G_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function G_(t){return t.op==="and"}function K_(t){return ZR(t)&&G_(t)}function ZR(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function su(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(K_(t))return t.filters.map(e=>su(e)).join(",");{const e=t.filters.map(n=>su(n)).join(",");return`${t.op}(${e})`}}function z_(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&z_(o,s.filters[l]),!0):!1}(t,e):void ge()}function Q_(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class eS extends ot{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class tS extends ot{constructor(e,n){super(e,"in",n),this.keys=Y_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nS extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Y_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Y_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class rS extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rh(n)&&ro(n.arrayValue,this.value)}}class sS extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class iS extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class oS extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
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
 */class aS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ep(t,e=null,n=[],r=[],s=null,i=null,o=null){return new aS(t,e,n,r,s,i,o)}function sh(t){const e=Ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>su(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.ue=n}return e.ue}function ih(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vp(t.startAt,e.startAt)&&vp(t.endAt,e.endAt)}function iu(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lS(t,e,n,r,s,i,o,l){return new Zs(t,e,n,r,s,i,o,l)}function vl(t){return new Zs(t)}function Ip(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function J_(t){return t.collectionGroup!==null}function Ui(t){const e=Ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new yt(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new so(i,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new so(gt.keyField(),r))}return e.ce}function Sn(t){const e=Ee(t);return e.le||(e.le=cS(e,Ui(t))),e.le}function cS(t,e){if(t.limitType==="F")return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)});const n=t.endAt?new ja(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ja(t.startAt.position,t.startAt.inclusive):null;return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ou(t,e){const n=t.filters.concat([e]);return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function au(t,e,n){return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function El(t,e){return ih(Sn(t),Sn(e))&&t.limitType===e.limitType}function X_(t){return`${sh(Sn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Q_(s)).join(", ")}]`),yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ws(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=yp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ui(r),s)||r.endAt&&!function(o,l,c){const u=yp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ui(r),s))}(t,e)}function uS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Z_(t){return(e,n)=>{let r=!1;for(const s of Ui(t)){const i=hS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hS(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Hs(c,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $_(this.inner)}size(){return this.innerSize}}/**
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
 */const fS=new Ye(ce.comparator);function tr(){return fS}const ey=new Ye(ce.comparator);function Si(...t){let e=ey;for(const n of t)e=e.insert(n.key,n);return e}function ty(t){let e=ey;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Bi()}function ny(){return Bi()}function Bi(){return new ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const dS=new Ye(ce.comparator),pS=new yt(ce.comparator);function be(...t){let e=pS;for(const n of t)e=e.add(n);return e}const mS=new yt(Ne);function gS(){return mS}/**
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
 */function oh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(e)?"-0":e}}function ry(t){return{integerValue:""+t}}function _S(t,e){return KR(e)?ry(e):oh(t,e)}/**
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
 */class wl{constructor(){this._=void 0}}function yS(t,e,n){return t instanceof io?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&th(i)&&(i=nh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof oo?iy(t,e):t instanceof ao?oy(t,e):function(s,i){const o=sy(s,i),l=wp(o)+wp(s.Pe);return ru(o)&&ru(s.Pe)?ry(l):oh(s.serializer,l)}(t,e)}function vS(t,e,n){return t instanceof oo?iy(t,e):t instanceof ao?oy(t,e):n}function sy(t,e){return t instanceof $a?function(r){return ru(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class io extends wl{}class oo extends wl{constructor(e){super(),this.elements=e}}function iy(t,e){const n=ay(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends wl{constructor(e){super(),this.elements=e}}function oy(t,e){let n=ay(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class $a extends wl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wp(t){return rt(t.integerValue||t.doubleValue)}function ay(t){return rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ES{constructor(e,n){this.field=e,this.transform=n}}function IS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oo&&s instanceof oo||r instanceof ao&&s instanceof ao?qs(r.elements,s.elements,Pn):r instanceof $a&&s instanceof $a?Pn(r.Pe,s.Pe):r instanceof io&&s instanceof io}(t.transform,e.transform)}class wS{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tl{}function ly(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Al(t.key,Ut.none()):new To(t.key,t.data,Ut.none());{const n=t.data,r=$t.empty();let s=new yt(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Kt(s.toArray()),Ut.none())}}function TS(t,e,n){t instanceof To?function(s,i,o){const l=s.value.clone(),c=Ap(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ap(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(cy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ji(t,e,n,r){return t instanceof To?function(i,o,l,c){if(!ya(i.precondition,o))return l;const u=i.value.clone(),f=bp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,c){if(!ya(i.precondition,o))return l;const u=bp(i.fieldTransforms,c,o),f=o.data;return f.setAll(cy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=sy(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function Tp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>IS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends Tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ap(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,vS(o,l,n[s]))}return r}function bp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yS(i,o,e))}return r}class Al extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bS extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ny();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ly(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Tp(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Tp(n,r))}}class ah{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=function(){return dS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ah(e,n,r,s)}}/**
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
 */class SS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,Se;function PS(t){switch(t){default:return ge();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function uy(t){if(t===void 0)return er("GRPC error has no .code"),j.UNKNOWN;switch(t){case it.OK:return j.OK;case it.CANCELLED:return j.CANCELLED;case it.UNKNOWN:return j.UNKNOWN;case it.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case it.INTERNAL:return j.INTERNAL;case it.UNAVAILABLE:return j.UNAVAILABLE;case it.UNAUTHENTICATED:return j.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case it.NOT_FOUND:return j.NOT_FOUND;case it.ALREADY_EXISTS:return j.ALREADY_EXISTS;case it.PERMISSION_DENIED:return j.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case it.ABORTED:return j.ABORTED;case it.OUT_OF_RANGE:return j.OUT_OF_RANGE;case it.UNIMPLEMENTED:return j.UNIMPLEMENTED;case it.DATA_LOSS:return j.DATA_LOSS;default:return ge()}}(Se=it||(it={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function DS(){return new TextEncoder}/**
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
 */const kS=new Zr([4294967295,4294967295],0);function Rp(t){const e=DS().encode(t),n=new V_;return n.update(e),new Uint8Array(n.digest())}function Sp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([s,i],0)]}class lh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Zr.fromNumber(r)));return s.compare(kS)===1&&(s=new Zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bl(ye.min(),s,new Ye(Ne),tr(),be())}}class Ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ao(r,n,be(),be(),be())}}/**
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
 */class va{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class hy{constructor(e,n){this.targetId=e,this.me=n}}class fy{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cp{constructor(){this.fe=0,this.ge=Dp(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),n=be(),r=be();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new Ao(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NS{constructor(e){this.Le=e,this.Be=new Map,this.ke=tr(),this.qe=Pp(),this.Qe=new Ye(Ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(iu(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,St.newNoDocument(o,ye.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=is(r).toUint8Array()}catch(c){if(c instanceof q_)return $s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lh(o,s,i)}catch(c){return $s(c instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&iu(l.target)){const c=new ce(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,St.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=be();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new bl(e,n,this.Qe,this.ke,r);return this.ke=tr(),this.qe=Pp(),this.Qe=new Ye(Ne),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new yt(Ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Pp(){return new Ye(ce.comparator)}function Dp(){return new Ye(ce.comparator)}const OS={asc:"ASCENDING",desc:"DESCENDING"},VS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xS={and:"AND",or:"OR"};class MS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lu(t,e){return t.useProto3Json||yl(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LS(t,e){return qa(t,e.toTimestamp())}function Cn(t){return Fe(!!t),ye.fromTimestamp(function(n){const r=Or(n);return new xe(r.seconds,r.nanos)}(t))}function ch(t,e){return cu(t,e).canonicalString()}function cu(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function py(t){const e=He.fromString(t);return Fe(vy(e)),e}function uu(t,e){return ch(t.databaseId,e.path)}function wc(t,e){const n=py(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(gy(n))}function my(t,e){return ch(t.databaseId,e)}function FS(t){const e=py(t);return e.length===4?He.emptyPath():gy(e)}function hu(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gy(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kp(t,e,n){return{name:uu(t,e),fields:n.value.mapValue.fields}}function US(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string"),vt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),vt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?j.UNKNOWN:uy(u.code);return new Z(f,u.message||"")}(o);n=new fy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wc(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):ye.min(),l=new $t({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new va(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wc(t,r.document),i=r.readTime?Cn(r.readTime):ye.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new va([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wc(t,r.document),i=r.removedTargetIds||[];n=new va([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CS(s,i),l=r.targetId;n=new hy(l,o)}}return n}function BS(t,e){let n;if(e instanceof To)n={update:kp(t,e.key,e.value)};else if(e instanceof Al)n={delete:uu(t,e.key)};else if(e instanceof Mr)n={update:kp(t,e.key,e.data),updateMask:QS(e.fieldMask)};else{if(!(e instanceof bS))return ge();n={verify:uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof io)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $a)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function jS(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(ye.min())&&(o=Cn(i)),new wS(o,s.transformResults||[])}(n,e))):[]}function $S(t,e){return{documents:[my(t,e.path)]}}function qS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=my(t,s);const i=function(u){if(u.length!==0)return yy(gn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ts(m.field),direction:GS(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=lu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function HS(t){let e=FS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=_y(d);return m instanceof gn&&K_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(C){return new so(As(C.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,yl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,v=d.values||[];return new ja(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,v=d.values||[];return new ja(v,m)}(n.endAt)),lS(e,s,o,i,l,"F",c,u)}function WS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _y(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(As(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>_y(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function GS(t){return OS[t]}function KS(t){return VS[t]}function zS(t){return xS[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function As(t){return gt.fromServerFormat(t.fieldPath)}function yy(t){return t instanceof ot?function(n){if(n.op==="=="){if(_p(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(gp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_p(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(gp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:KS(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(s=>yy(s));return r.length===1?r[0]:{compositeFilter:{op:zS(n.op),filters:r}}}(t):ge()}function QS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),l=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YS{constructor(e){this.ct=e}}function JS(t){const e=HS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}/**
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
 */class XS{constructor(){this.un=new ZS}addToCollectionParentIndex(e,n){return this.un.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Nr.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class ZS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new yt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new yt(He.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gs(0)}static kn(){return new Gs(-1)}}/**
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
 */class eC{constructor(){this.changes=new ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class nC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ji(r.mutation,s,Kt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Si();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=tr();const o=Bi(),l=function(){return Bi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Mr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ji(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return l.set(u,new tC(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Bi();let s=new Ye((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Kt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||be()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=ny();f.forEach(m=>{if(!i.has(m)){const v=ly(n.get(m),r.get(m));v!==null&&d.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(Yr());let l=-1,c=i;return o.next(u=>G.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?G.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,be())).next(f=>({batchId:l,changes:ty(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next(l=>G.forEach(l,c=>{const u=function(d,m){return new Zs(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,St.newInvalidDocument(f)))});let l=Si();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ji(f.mutation,u,Kt.empty(),xe.now()),Il(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class rC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return G.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:JS(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),G.resolve()}}/**
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
 */class sC{constructor(){this.overlays=new Ye(ce.comparator),this.Ir=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return G.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Yr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return G.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SS(n,r));let i=this.Ir.get(n);i===void 0&&(i=be(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iC{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
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
 */class uh{constructor(){this.Tr=new yt(ft.Er),this.dr=new yt(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ft(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ce(new He([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ce(new He([])),r=new ft(n,e),s=new ft(n,e+1);let i=be();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ce.comparator(e.key,n.key)||Ne(e.wr,n.wr)}static Ar(e,n){return Ne(e.wr,n.wr)||ce.comparator(e.key,n.key)}}/**
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
 */class oC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new yt(ft.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ft(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(Ne);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),G.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ft(new ce(i),0);let l=new yt(Ne);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),G.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return G.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ft(n,0),s=this.br.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aC{constructor(e){this.Mr=e,this.docs=function(){return new Ye(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,l=new ce(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qR($R(f),r)<=0||(s.has(f.key)||Il(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Or(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lC(this)}getSize(e){return G.resolve(this.size)}}class lC extends eC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class cC{constructor(e){this.persistence=e,this.Nr=new ei(n=>sh(n),ih),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uh,this.targetCount=0,this.kr=Gs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),G.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.Kn(n),G.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.Br.containsKey(n))}}/**
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
 */class uC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new eh(0),this.Kr=!1,this.Kr=!0,this.$r=new iC,this.referenceDelegate=e(this),this.Ur=new cC(this),this.indexManager=new XS,this.remoteDocumentCache=function(s){return new aC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new YS(n),this.Gr=new rC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new oC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new hC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return G.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class hC extends WR{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Jr=new uh,this.Yr=null}static Zr(e){return new hh(e)}get Xr(){if(this.Yr)return this.Yr;throw ge()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),G.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,r=>{const s=ce.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return G.or([()=>G.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class fh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zT()?8:GR(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fC;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(vi()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(vi()<=Re.DEBUG&&ne("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vi()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):G.resolve())}Yi(e,n){if(Ip(n))return G.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=au(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,au(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Ip(n)||s.isEqual(ye.min())?G.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?G.resolve(null):(vi()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ws(n)),this.rs(e,o,n,jR(s,-1)).next(l=>l))})}ts(e,n){let r=new yt(Z_(e));return n.forEach((s,i)=>{Il(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return vi()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Ji.getDocumentsMatchingQuery(e,n,Nr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class pC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ye(Ne),this._s=new ei(i=>sh(i),ih),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function mC(t,e,n,r){return new pC(t,e,n,r)}async function Ey(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=be();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function gC(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let v=G.resolve();return m.forEach(C=>{v=v.next(()=>f.getEntry(c,C)).next(k=>{const S=u.docVersions.get(C);Fe(S!==null),k.version.compareTo(S)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=be();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Iy(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function _C(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,d)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?v=v.withResumeToken(vt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(d,v),function(k,S,B){return k.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,v,f)&&l.push(n.Ur.updateTargetData(i,v))});let c=tr(),u=be();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(yC(i,o,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!r.isEqual(ye.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return G.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function yC(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function vC(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EC(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,G.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fu(t,e,n){const r=Ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wo(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Np(t,e,n){const r=Ee(t);let s=ye.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=Ee(c),m=d._s.get(f);return m!==void 0?G.resolve(d.os.get(m)):d.Ur.getTargetData(u,f)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:be())).next(l=>(IC(r,uS(e),l),{documents:l,Ts:i})))}function IC(t,e,n){let r=t.us.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Op{constructor(){this.activeTargetIds=gS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wC{constructor(){this.so=new Op,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Op,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TC{_o(e){}shutdown(){}}/**
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
 */class Vp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ia=null;function Tc(){return ia===null?ia=function(){return 268435456+Math.round(2147483648*Math.random())}():ia++,"0x"+ia.toString(16)}/**
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
 */const AC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const At="WebChannelConnection";class RC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Tc(),c=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(f=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw $s("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=AC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Tc();return new Promise((o,l)=>{const c=new x_;c.setWithCredentials(!0),c.listenOnce(M_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ga.NO_ERROR:const f=c.getResponseJson();ne(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ga.TIMEOUT:ne(At,`RPC '${e}' ${i} timed out`),l(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const d=c.getStatus();if(ne(At,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(S){const B=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(B)>=0?B:j.UNKNOWN}(v.status);l(new Z(C,v.message))}else l(new Z(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(j.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ne(At,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(At,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Tc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=U_(),l=F_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ne(At,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);let m=!1,v=!1;const C=new bC({Io:S=>{v?ne(At,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ne(At,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ne(At,`RPC '${e}' stream ${s} sending:`,S),d.send(S))},To:()=>d.close()}),k=(S,B,V)=>{S.listen(B,x=>{try{V(x)}catch(q){setTimeout(()=>{throw q},0)}})};return k(d,Ri.EventType.OPEN,()=>{v||(ne(At,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),k(d,Ri.EventType.CLOSE,()=>{v||(v=!0,ne(At,`RPC '${e}' stream ${s} transport closed`),C.So())}),k(d,Ri.EventType.ERROR,S=>{v||(v=!0,$s(At,`RPC '${e}' stream ${s} transport errored:`,S),C.So(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),k(d,Ri.EventType.MESSAGE,S=>{var B;if(!v){const V=S.data[0];Fe(!!V);const x=V,q=x.error||((B=x[0])===null||B===void 0?void 0:B.error);if(q){ne(At,`RPC '${e}' stream ${s} received error:`,q);const ee=q.status;let re=function(_){const w=it[_];if(w!==void 0)return uy(w)}(ee),T=q.message;re===void 0&&(re=j.INTERNAL,T="Unknown error status: "+ee+" with message "+q.message),v=!0,C.So(new Z(re,T)),d.close()}else ne(At,`RPC '${e}' stream ${s} received:`,V),C.bo(V)}}),k(l,L_.STAT_EVENT,S=>{S.stat===tu.PROXY?ne(At,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===tu.NOPROXY&&ne(At,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Ac(){return typeof document<"u"?document:null}/**
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
 */function Rl(t){return new MS(t,!0)}/**
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
 */class wy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ty{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wy(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SC extends Ty{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=US(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?Cn(o.readTime):ye.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=hu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=iu(c)?{documents:$S(i,c)}:{query:qS(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=dy(i,o.resumeToken);const u=lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){l.readTime=qa(i,o.snapshotVersion.toTimestamp());const u=lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=WS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=hu(this.serializer),n.removeTarget=e,this.a_(n)}}class CC extends Ty{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jS(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=hu(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BS(this.serializer,r))};this.a_(n)}}/**
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
 */class PC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,cu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,cu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class DC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(er(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class kC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{hs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Ee(c);u.L_.add(4),await bo(u),u.q_.set("Unknown"),u.L_.delete(4),await Sl(u)}(this))})}),this.q_=new DC(r,s)}}async function Sl(t){if(hs(t))for(const e of t.B_)await e(!0)}async function bo(t){for(const e of t.B_)await e(!1)}function Ay(t,e){const n=Ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gh(n)?mh(n):ti(n).r_()&&ph(n,e))}function dh(t,e){const n=Ee(t),r=ti(n);n.N_.delete(e),r.r_()&&by(n,e),n.N_.size===0&&(r.r_()?r.o_():hs(n)&&n.q_.set("Unknown"))}function ph(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ti(t).A_(e)}function by(t,e){t.Q_.xe(e),ti(t).R_(e)}function mh(t){t.Q_=new NS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ti(t).start(),t.q_.v_()}function gh(t){return hs(t)&&!ti(t).n_()&&t.N_.size>0}function hs(t){return Ee(t).L_.size===0}function Ry(t){t.Q_=void 0}async function NC(t){t.q_.set("Online")}async function OC(t){t.N_.forEach((e,n)=>{ph(t,e)})}async function VC(t,e){Ry(t),gh(t)?(t.q_.M_(e),mh(t)):t.q_.set("Unknown")}async function xC(t,e,n){if(t.q_.set("Online"),e instanceof fy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ha(t,r)}else if(e instanceof va?t.Q_.Ke(e):e instanceof hy?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ye.min()))try{const r=await Iy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),by(i,c);const d=new wr(f.target,c,u,f.sequenceNumber);ph(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Ha(t,r)}}async function Ha(t,e,n){if(!wo(e))throw e;t.L_.add(1),await bo(t),t.q_.set("Offline"),n||(n=()=>Iy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Sl(t)})}function Sy(t,e){return e().catch(n=>Ha(t,n,e))}async function Cl(t){const e=Ee(t),n=Vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;MC(e);)try{const s=await vC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,LC(e,s)}catch(s){await Ha(e,s)}Cy(e)&&Py(e)}function MC(t){return hs(t)&&t.O_.length<10}function LC(t,e){t.O_.push(e);const n=Vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Cy(t){return hs(t)&&!Vr(t).n_()&&t.O_.length>0}function Py(t){Vr(t).start()}async function FC(t){Vr(t).p_()}async function UC(t){const e=Vr(t);for(const n of t.O_)e.m_(n.mutations)}async function BC(t,e,n){const r=t.O_.shift(),s=ah.from(r,e,n);await Sy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Cl(t)}async function jC(t,e){e&&Vr(t).V_&&await async function(r,s){if(function(o){return PS(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();Vr(r).s_(),await Sy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cl(r)}}(t,e),Cy(t)&&Py(t)}async function xp(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.L_.add(3),await bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Sl(n)}async function $C(t,e){const n=Ee(t);e?(n.L_.delete(2),await Sl(n)):e||(n.L_.add(2),await bo(n),n.q_.set("Unknown"))}function ti(t){return t.K_||(t.K_=function(n,r,s){const i=Ee(n);return i.w_(),new SC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:NC.bind(null,t),Ro:OC.bind(null,t),mo:VC.bind(null,t),d_:xC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gh(t)?mh(t):t.q_.set("Unknown")):(await t.K_.stop(),Ry(t))})),t.K_}function Vr(t){return t.U_||(t.U_=function(n,r,s){const i=Ee(n);return i.w_(),new CC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:FC.bind(null,t),mo:jC.bind(null,t),f_:UC.bind(null,t),g_:BC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cl(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class _h{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _h(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yh(t,e){if(er("AsyncQueue",`${e}: ${t}`),wo(t))return new Z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mp{constructor(){this.W_=new Ye(ce.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ge():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ks(e,n,xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&El(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class HC{constructor(){this.queries=Lp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Ee(n),i=s.queries;s.queries=Lp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function Lp(){return new ei(t=>X_(t),El)}async function Dy(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new qC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=yh(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&vh(n)}async function ky(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WC(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&vh(n)}function GC(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function vh(t){t.Y_.forEach(e=>{e.next()})}var du,Fp;(Fp=du||(du={})).ea="default",Fp.Cache="cache";class Ny{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==du.Cache}}/**
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
 */class Oy{constructor(e){this.key=e}}class Vy{constructor(e){this.key=e}}class KC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=be(),this.mutatedKeys=be(),this.Aa=Z_(e),this.Ra=new xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Mp,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),v=Il(this.query,d)?d:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let S=!1;m&&v?m.data.isEqual(v.data)?C!==k&&(r.track({type:3,doc:v}),S=!0):this.ga(m,v)||(r.track({type:2,doc:v}),S=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),S=!0):m&&!v&&(r.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(v?(o=o.add(v),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,d)=>function(v,C){const k=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return k(v)-k(C)}(f.type,d.type)||this.Aa(f.doc,d.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ks(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=be(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Vy(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Oy(r))}),n}ba(e){this.Ta=e.Ts,this.da=be();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ks.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QC{constructor(e){this.key=e,this.va=!1}}class YC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ei(l=>X_(l),El),this.Ma=new Map,this.xa=new Set,this.Oa=new Ye(ce.comparator),this.Na=new Map,this.La=new uh,this.Ba={},this.ka=new Map,this.qa=Gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function JC(t,e,n=!0){const r=By(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await xy(r,e,n,!0),s}async function XC(t,e){const n=By(t);await xy(n,e,!0,!1)}async function xy(t,e,n,r){const s=await EC(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ZC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ay(t.remoteStore,s),l}async function ZC(t,e,n,r,s){t.Ka=(d,m,v)=>async function(k,S,B,V){let x=S.view.ma(B);x.ns&&(x=await Np(k.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,x)));const q=V&&V.targetChanges.get(S.targetId),ee=V&&V.targetMismatches.get(S.targetId)!=null,re=S.view.applyChanges(x,k.isPrimaryClient,q,ee);return Bp(k,S.targetId,re.wa),re.snapshot}(t,d,m,v);const i=await Np(t.localStore,e,!0),o=new KC(e,i.Ts),l=o.ma(i.documents),c=Ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Bp(t,n,u.wa);const f=new zC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function eP(t,e,n){const r=Ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!El(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&dh(r.remoteStore,s.targetId),pu(r,s.targetId)}).catch(Io)):(pu(r,s.targetId),await fu(r.localStore,s.targetId,!0))}async function tP(t,e){const n=Ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dh(n.remoteStore,r.targetId))}async function nP(t,e,n){const r=cP(t);try{const s=await function(o,l){const c=Ee(o),u=xe.now(),f=l.reduce((v,C)=>v.add(C.key),be());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=tr(),k=be();return c.cs.getEntries(v,f).next(S=>{C=S,C.forEach((B,V)=>{V.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(S=>{d=S;const B=[];for(const V of l){const x=AS(V,d.get(V.key).overlayedDocument);x!=null&&B.push(new Mr(V.key,x,H_(x.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,B,l)}).next(S=>{m=S;const B=S.applyToLocalDocumentSet(d,k);return c.documentOverlayCache.saveOverlays(v,S.batchId,B)})}).then(()=>({batchId:m.batchId,changes:ty(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ye(Ne)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ro(r,s.changes),await Cl(r.remoteStore)}catch(s){const i=yh(s,"Failed to persist write");n.reject(i)}}async function My(t,e){const n=Ee(t);try{const r=await _C(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Fe(o.va):s.removedDocuments.size>0&&(Fe(o.va),o.va=!1))}),await Ro(n,r,e)}catch(r){await Io(r)}}function Up(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Ee(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.j_)m.Z_(l)&&(u=!0)}),u&&vh(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rP(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ye(ce.comparator);o=o.insert(i,St.newNoDocument(i,ye.min()));const l=be().add(i),c=new bl(ye.min(),new Map,new Ye(Ne),o,l);await My(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Eh(r)}else await fu(r.localStore,e,!1).then(()=>pu(r,e,n)).catch(Io)}async function sP(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await gC(n.localStore,e);Fy(n,r,null),Ly(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await Io(s)}}async function iP(t,e,n){const r=Ee(t);try{const s=await function(o,l){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Fe(d!==null),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Fy(r,e,n),Ly(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await Io(s)}}function Ly(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Fy(t,e,n){const r=Ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function pu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Uy(t,r)})}function Uy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(dh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Eh(t))}function Bp(t,e,n){for(const r of n)r instanceof Oy?(t.La.addReference(r.key,e),oP(t,r)):r instanceof Vy?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Uy(t,r.key)):ge()}function oP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),Eh(t))}function Eh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ce(He.fromString(e)),r=t.qa.next();t.Na.set(r,new QC(n)),t.Oa=t.Oa.insert(n,r),Ay(t.remoteStore,new wr(Sn(vl(n.path)),r,"TargetPurposeLimboResolution",eh.oe))}}async function Ro(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=fh.Wi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const f=Ee(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>G.forEach(u,m=>G.forEach(m.$i,v=>f.persistence.referenceDelegate.addReference(d,m.targetId,v)).next(()=>G.forEach(m.Ui,v=>f.persistence.referenceDelegate.removeReference(d,m.targetId,v)))))}catch(d){if(!wo(d))throw d;ne("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const v=f.os.get(m),C=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function aP(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await Ey(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.hs)}}function lP(t,e){const n=Ee(t),r=n.Na.get(e);if(r&&r.va)return be().add(r.key);{let s=be();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function By(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=My.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rP.bind(null,e),e.Ca.d_=WC.bind(null,e.eventManager),e.Ca.$a=GC.bind(null,e.eventManager),e}function cP(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iP.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return mC(this.persistence,new dC,e.initialUser,this.serializer)}Ga(e){return new uC(hh.Zr,this.serializer)}Wa(e){return new wC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class mu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aP.bind(null,this.syncEngine),await $C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HC}()}createDatastore(e){const n=Rl(e.databaseInfo.databaseId),r=function(i){return new RC(i)}(e.databaseInfo);return function(i,o,l,c){return new PC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new kC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Up(this.syncEngine,n,0),function(){return Vp.D()?new Vp:new TC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const d=new YC(s,i,o,l,c,u);return f&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ee(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await bo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mu.provider={build:()=>new mu};/**
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
 */class jy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=j_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ey(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hP(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xp(e.remoteStore,s)),t._onlineComponents=e}async function hP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new Wa)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await bc(t,new Wa);return t._offlineComponents}async function $y(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await jp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await jp(t,new mu))),t._onlineComponents}function fP(t){return $y(t).then(e=>e.syncEngine)}async function gu(t){const e=await $y(t),n=e.eventManager;return n.onListen=JC.bind(null,e.syncEngine),n.onUnlisten=eP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tP.bind(null,e.syncEngine),n}function dP(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new jy({next:m=>{f.Za(),o.enqueueAndForget(()=>ky(i,d));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Ny(vl(l.path),f,{includeMetadataChanges:!0,_a:!0});return Dy(i,d)}(await gu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function qy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $p=new Map;/**
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
 */function Hy(t,e,n){if(!n)throw new Z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new Z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qp(t){if(!ce.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(ce.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pl(t);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NR;switch(r.type){case"firstParty":return new MR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$p.get(n);r&&(ne("ComponentProvider","Removing Datastore"),$p.delete(n),r.terminate())}(this),Promise.resolve()}}function mP(t,e,n,r={}){var s;const i=(t=Qt(t,Dl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=bt.MOCK_USER;else{l=jT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(u)}t._authCredentials=new OR(new B_(l,c))}}/**
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
 */class fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Cr extends fs{constructor(e,n,r){super(e,n,vl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new ce(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function So(t,e,...n){if(t=tt(t),Hy("collection","path",e),t instanceof Dl){const r=He.fromString(e,...n);return Hp(r),new Cr(t,null,r)}{if(!(t instanceof Dt||t instanceof Cr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Hp(r),new Cr(t.firestore,null,r)}}function _n(t,e,...n){if(t=tt(t),arguments.length===1&&(e=j_.newId()),Hy("doc","path",e),t instanceof Dl){const r=He.fromString(e,...n);return qp(r),new Dt(t,null,new ce(r))}{if(!(t instanceof Dt||t instanceof Cr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return qp(r),new Dt(t.firestore,t instanceof Cr?t.converter:null,new ce(r))}}/**
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
 */class Gp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wy(this,"async_queue_retry"),this.Vu=()=>{const r=Ac();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw er("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=_h.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ge()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Kp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class nr extends Dl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gp(e),this._firestoreClient=void 0,await e}}}function gP(t,e){const n=typeof t=="object"?t:Jg(),r=typeof t=="string"?t:"(default)",s=qu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=UT("firestore");i&&mP(s,...i)}return s}function kl(t){if(t._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_P(t),t._firestoreClient}function _P(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new QR(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new uP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(vt.fromBase64String(e))}catch(n){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Co{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nl{constructor(e){this._methodName=e}}/**
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
 */class Ih{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const yP=/^__.*__$/;class vP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}class Wy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ga(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Gy(this.Cu)&&yP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class EP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rl(e)}Qu(e,n,r,s=!1){return new Th({Cu:e,methodName:n,qu:r,path:gt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Po(t){const e=t._freezeSettings(),n=Rl(t._databaseId);return new EP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ah(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Rh("Data must be an object, but it was:",o,r);const l=Qy(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=_u(e,d,n);if(!o.contains(m))throw new Z(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Jy(f,m)||f.push(m)}c=new Kt(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new vP(new $t(l),c,u)}class Ol extends Nl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ol}}class bh extends Nl{_toFieldTransform(e){return new ES(e.path,new io)}isEqual(e){return e instanceof bh}}function Ky(t,e,n,r){const s=t.Qu(1,e,n);Rh("Data must be an object, but it was:",s,r);const i=[],o=$t.empty();us(r,(c,u)=>{const f=Sh(e,c,n);u=tt(u);const d=s.Nu(f);if(u instanceof Ol)i.push(f);else{const m=Do(u,d);m!=null&&(i.push(f),o.set(f,m))}});const l=new Kt(i);return new Wy(o,l,s.fieldTransforms)}function zy(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[_u(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(_u(e,i[m])),c.push(i[m+1]);const u=[],f=$t.empty();for(let m=l.length-1;m>=0;--m)if(!Jy(u,l[m])){const v=l[m];let C=c[m];C=tt(C);const k=o.Nu(v);if(C instanceof Ol)u.push(v);else{const S=Do(C,k);S!=null&&(u.push(v),f.set(v,S))}}const d=new Kt(u);return new Wy(f,d,o.fieldTransforms)}function IP(t,e,n,r=!1){return Do(n,t.Qu(r?4:3,e))}function Do(t,e){if(Yy(t=tt(t)))return Rh("Unsupported field value:",e,t),Qy(t,e);if(t instanceof Nl)return function(r,s){if(!Gy(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Do(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _S(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Ih)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zs)return{bytesValue:dy(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ch(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return oh(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Pl(r)}`)}(t,e)}function Qy(t,e){const n={};return $_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,s)=>{const i=Do(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Ih||t instanceof zs||t instanceof Dt||t instanceof Nl||t instanceof wh)}function Rh(t,e,n){if(!Yy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pl(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function _u(t,e,n){if((e=tt(e))instanceof Co)return e._internalPath;if(typeof e=="string")return Sh(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const wP=new RegExp("[~\\*/\\[\\]]");function Sh(t,e,n){if(e.search(wP)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Co(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(j.INVALID_ARGUMENT,l+t+c)}function Jy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TP extends Xy{data(){return super.data()}}function Ch(t,e){return typeof e=="string"?Sh(t,e):e instanceof Co?e._internalPath:e._delegate._internalPath}/**
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
 */function AP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ph{}class Zy extends Ph{}function bP(t,e,...n){let r=[];e instanceof Ph&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof kh).length,l=i.filter(c=>c instanceof Dh).length;if(o>1||o>0&&l>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Dh extends Zy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dh(e,n,r)}_apply(e){const n=this._parse(e);return ev(e._query,n),new fs(e.firestore,e.converter,ou(e._query,n))}_parse(e){const n=Po(e.firestore);return function(i,o,l,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qp(d,f);const v=[];for(const C of d)v.push(zp(c,i,C));m={arrayValue:{values:v}}}else m=zp(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qp(d,f),m=IP(l,o,d,f==="in"||f==="not-in");return ot.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class kh extends Ph{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)ev(o,c),o=ou(o,c)}(e._query,n),new fs(e.firestore,e.converter,ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nh extends Zy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Nh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new so(i,o)}(e._query,this._field,this._direction);return new fs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function RP(t,e="asc"){const n=e,r=Ch("orderBy",t);return Nh._create(r,n)}function zp(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J_(e)&&n.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!ce.isDocumentKey(r))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mp(t,new ce(r))}if(n instanceof Dt)return mp(t,n._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pl(n)}.`)}function Qp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ev(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SP{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>rt(o.doubleValue));return new wh(i)}convertGeoPoint(e){return new Ih(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=Or(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Fe(vy(r));const s=new no(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Oh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tv extends Xy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ea extends tv{data(e={}){return super.data(e)}}class CP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ea(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:PP(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function DP(t){t=Qt(t,Dt);const e=Qt(t.firestore,nr);return dP(kl(e),t._key).then(n=>rv(e,t,n))}class nv extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function kP(t,e,n){t=Qt(t,Dt);const r=Qt(t.firestore,nr),s=Oh(t.converter,e,n);return Oo(r,[Ah(Po(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function ko(t,e,n,...r){t=Qt(t,Dt);const s=Qt(t.firestore,nr),i=Po(s);let o;return o=typeof(e=tt(e))=="string"||e instanceof Co?zy(i,"updateDoc",t._key,e,n,r):Ky(i,"updateDoc",t._key,e),Oo(s,[o.toMutation(t._key,Ut.exists(!0))])}function Vl(t){return Oo(Qt(t.firestore,nr),[new Al(t._key,Ut.none())])}function xl(t,e){const n=Qt(t.firestore,nr),r=_n(t),s=Oh(t.converter,e);return Oo(n,[Ah(Po(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function No(t,...e){var n,r,s;t=tt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Kp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Kp(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let c,u,f;if(t instanceof Dt)u=Qt(t.firestore,nr),f=vl(t._key.path),c={next:d=>{e[o]&&e[o](rv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Qt(t,fs);u=Qt(d.firestore,nr),f=d._query;const m=new nv(u);c={next:v=>{e[o]&&e[o](new CP(u,m,d,v))},error:e[o+1],complete:e[o+2]},AP(t._query)}return function(m,v,C,k){const S=new jy(k),B=new Ny(v,S,C);return m.asyncQueue.enqueueAndForget(async()=>Dy(await gu(m),B)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>ky(await gu(m),B))}}(kl(u),f,l,c)}function Oo(t,e){return function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget(async()=>nP(await fP(r),s,i)),i.promise}(kl(t),e)}function rv(t,e,n){const r=n.docs.get(e._key),s=new nv(t);return new tv(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class NP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Po(e)}set(e,n,r){this._verifyNotCommitted();const s=Rc(e,this._firestore),i=Oh(s.converter,n,r),o=Ah(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ut.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Rc(e,this._firestore);let o;return o=typeof(n=tt(n))=="string"||n instanceof Co?zy(this._dataReader,"WriteBatch.update",i._key,n,r,s):Ky(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ut.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rc(e,this._firestore);return this._mutations=this._mutations.concat(new Al(n._key,Ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rc(t,e){if((t=tt(t)).firestore!==e)throw new Z(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function sn(){return new bh("serverTimestamp")}/**
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
 */function OP(t){return kl(t=Qt(t,nr)),new NP(t,e=>Oo(t,e))}(function(e,n=!0){(function(s){Xs=s})(Ys),Bs(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new nr(new VR(r.getProvider("auth-internal")),new FR(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Rr(up,"4.7.3",e),Rr(up,"4.7.3","esm2017")})();const sv={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""};sv.apiKey||console.warn("[my-money] 尚未設定 Firebase 環境變數，請複製 .env.example 為 .env 並填入 Firebase Web 設定值。");const iv=Yg(sv),as=CR(iv),Bt=gP(iv);function VP(t,e){return u0(as,t,e)}function xP(t,e){return h0(as,t,e)}function MP(){return _0(as)}function LP(t){return c0(as,t)}function FP(t){return as.currentUser?f0(as.currentUser,t):Promise.reject(new Error("尚未登入"))}function UP(t){return g0(as,t)}function Jk(t){const e=(t==null?void 0:t.code)||"";return{"auth/email-already-in-use":"此 Email 已被註冊","auth/invalid-email":"Email 格式錯誤","auth/weak-password":"密碼強度不足（至少 6 碼）","auth/user-not-found":"找不到此帳號","auth/wrong-password":"密碼錯誤","auth/invalid-credential":"帳號或密碼錯誤","auth/too-many-requests":"嘗試次數過多，請稍後再試","auth/network-request-failed":"網路連線失敗"}[e]||(t==null?void 0:t.message)||"發生未知錯誤"}const Vh=t=>_n(Bt,"users",t);async function oa(t){const e=await DP(Vh(t));return e.exists()?{id:e.id,...e.data()}:null}function BP(t,e){return kP(Vh(t),{...e,createdAt:sn(),updatedAt:sn()})}function jP(t,e){return ko(Vh(t),{...e,updatedAt:sn()})}const xh=t=>So(Bt,"users",t,"categories");function $P(t,e){return No(xh(t),n=>{e(n.docs.map(r=>({id:r.id,...r.data()})))})}function qP(t,e){return xl(xh(t),{isDefault:!1,...e,createdAt:sn()})}function HP(t,e,n){return ko(_n(Bt,"users",t,"categories",e),n)}function WP(t,e){return Vl(_n(Bt,"users",t,"categories",e))}async function GP(t){const e=[{name:"薪資",type:"income",color:"#00d4ff",isDefault:!0},{name:"獎金",type:"income",color:"#7c3aed",isDefault:!0},{name:"投資",type:"income",color:"#22d3a2",isDefault:!0},{name:"其他",type:"both",color:"#ff2bd6",isDefault:!0}],n=OP(Bt);e.forEach(r=>{const s=_n(xh(t));n.set(s,{...r,createdAt:sn()})}),await n.commit()}const ov=t=>So(Bt,"users",t,"accounts");function KP(t,e){return No(ov(t),n=>{e(n.docs.map(r=>({id:r.id,...r.data()})))})}function zP(t,e){return xl(ov(t),{type:"bank",currency:"TWD",openingBalance:0,openingAsOf:xe.fromDate(new Date),color:"#00d4ff",includeInNetWorth:!0,archived:!1,isDefault:!1,...e,createdAt:sn()})}function Yp(t,e,n){return ko(_n(Bt,"users",t,"accounts",e),n)}function QP(t,e){return Vl(_n(Bt,"users",t,"accounts",e))}const av=t=>So(Bt,"users",t,"transactions");function YP(t,e){const n=bP(av(t),RP("date","desc"));return No(n,r=>{e(r.docs.map(s=>({id:s.id,...s.data()})))})}function yu(t,e){return xl(av(t),{...e,createdAt:sn(),updatedAt:sn()})}function JP(t,e,n){return ko(_n(Bt,"users",t,"transactions",e),{...n,updatedAt:sn()})}function XP(t,e){return Vl(_n(Bt,"users",t,"transactions",e))}const lv=t=>So(Bt,"users",t,"recurrences");function ZP(t,e){return No(lv(t),n=>{e(n.docs.map(r=>({id:r.id,...r.data()})))})}function eD(t,e){return xl(lv(t),{active:!0,interval:1,endMode:"never",autoGenerate:!1,generatedCount:0,...e,createdAt:sn(),updatedAt:sn()})}function tD(t,e,n){return ko(_n(Bt,"users",t,"recurrences",e),{...n,updatedAt:sn()})}function nD(t,e){return Vl(_n(Bt,"users",t,"recurrences",e))}function Xk(t){return No(So(Bt,"users"),e=>{t(e.docs.map(n=>({id:n.id,...n.data()})))})}function un(t){return t?t instanceof Date?t:typeof t.toDate=="function"?t.toDate():typeof t=="number"?new Date(t):typeof t=="string"?new Date(t):null:null}const cv="my-money.theme",ls=ln(rD()),lo=ln(sD());function rD(){const t=typeof localStorage<"u"&&localStorage.getItem(cv);return t==="light"||t==="dark"||t==="system"?t:"system"}function sD(){return typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches:!0}function Jp(){const t=ls.value==="system"?lo.value?"dark":"light":ls.value;typeof document<"u"&&document.documentElement.setAttribute("data-theme",t)}function uv(t,{persist:e=!0}={}){if(["system","light","dark"].includes(t)&&(ls.value=t,e))try{localStorage.setItem(cv,t)}catch{}}function iD(){return ls.value==="system"?lo.value?"dark":"light":ls.value}let Xp=!1;function oD(){var e;if(Xp||typeof window>"u"||!window.matchMedia)return;const t=window.matchMedia("(prefers-color-scheme: dark)");(e=t.addEventListener)==null||e.call(t,"change",n=>{lo.value=n.matches}),Xp=!0}function aD(){return ho(()=>{Jp(),oD()}),Tr([ls,lo],()=>Jp(),{immediate:!1}),{themeMode:ls,systemDark:lo,setTheme:uv,getResolvedTheme:iD}}const ze=po("auth",{state:()=>({user:null,profile:null,ready:!1,unsubscribeAuth:null,lastError:""}),getters:{isAuthenticated:t=>!!t.user,isActive:t=>{var e;return((e=t.profile)==null?void 0:e.status)==="active"},isPending:t=>{var e;return((e=t.profile)==null?void 0:e.status)==="pending"},isSuspended:t=>{var e,n;return((e=t.profile)==null?void 0:e.status)==="suspended"||((n=t.profile)==null?void 0:n.status)==="deleted"},isAdmin:t=>{var e;return((e=t.profile)==null?void 0:e.role)==="ADMIN"}},actions:{init(){if(!this.unsubscribeAuth)return new Promise(t=>{this.unsubscribeAuth=UP(async e=>{var n;if(this.user=e?{uid:e.uid,email:e.email,emailVerified:e.emailVerified}:null,e)try{this.profile=await oa(e.uid),(n=this.profile)!=null&&n.theme&&uv(this.profile.theme)}catch(r){this.profile=null,this.lastError=(r==null?void 0:r.message)||String(r)}else this.profile=null;this.ready=!0,t()})})},async register({email:t,password:e}){this.lastError="";const n=await VP(t,e);return await BP(n.user.uid,{email:t,role:"USER",status:"pending",goals:{yearly:0,monthly:0},theme:"system",favorites:[]}),await GP(n.user.uid),this.profile=await oa(n.user.uid),n},async login({email:t,password:e}){this.lastError="";const n=await xP(t,e);return this.profile=await oa(n.user.uid),n},async logout(){await MP(),this.user=null,this.profile=null},async sendPasswordReset(t){return LP(t)},async changePassword(t){return FP(t)},async updateProfile(t){this.user&&(await jP(this.user.uid,t),this.profile={...this.profile,...t})},async refreshProfile(){this.user&&(this.profile=await oa(this.user.uid))}}}),or=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lD={key:0,class:"label"},cD={__name:"Loader",props:{full:Boolean,label:String},setup(t){return(e,n)=>(oe(),_e("div",{class:ht(["loader",{full:t.full}])},[n[0]||(n[0]=F("div",{class:"ring"},[F("div"),F("div"),F("div"),F("div")],-1)),t.label?(oe(),_e("div",lD,Ke(t.label),1)):nt("",!0)],2))}},uD=or(cD,[["__scopeId","data-v-1f0400db"]]),hv=po("categories",{state:()=>({items:[],loading:!1,unsubscribe:null,lastError:""}),getters:{byId:t=>e=>t.items.find(n=>n.id===e)||null,incomeItems:t=>t.items.filter(e=>e.type==="income"||e.type==="both"),expenseItems:t=>t.items.filter(e=>e.type==="expense"||e.type==="both"),itemsFor:t=>e=>e==="income"?t.items.filter(n=>n.type==="income"||n.type==="both"):e==="expense"?t.items.filter(n=>n.type==="expense"||n.type==="both"):t.items},actions:{subscribe(){var e;const t=ze();!((e=t.user)!=null&&e.uid)||this.unsubscribe||(this.loading=!0,this.unsubscribe=$P(t.user.uid,n=>{this.items=n.slice().sort((r,s)=>!!r.isDefault!=!!s.isDefault?r.isDefault?-1:1:String(r.name).localeCompare(String(s.name))),this.loading=!1}))},stop(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.items=[]},async add({name:t,type:e="both",color:n="#00d4ff"}){var i;const r=ze();if(!((i=r.user)!=null&&i.uid))return;const s=String(t||"").trim();if(!s)throw new Error("分類名稱不可為空");if(this.items.some(o=>o.name===s))throw new Error("已存在相同名稱的分類");await qP(r.user.uid,{name:s,type:e,color:n})},async update(t,e){var i;const n=ze();if(!((i=n.user)!=null&&i.uid))return;const r=this.byId(t);if(!r)throw new Error("找不到分類");const s={...e};r.isDefault&&(delete s.name,delete s.isDefault),await HP(n.user.uid,t,s)},async remove(t){var r;const e=ze();if(!((r=e.user)!=null&&r.uid))return;const n=this.byId(t);if(n){if(n.isDefault)throw new Error("預設分類不可刪除");await WP(e.user.uid,t)}}}}),Ka=po("transactions",{state:()=>({items:[],loading:!1,unsubscribe:null,lastError:""}),getters:{normalized:t=>t.items.map(e=>({...e,dateObj:un(e.date)})),byId:t=>e=>t.items.find(n=>n.id===e)||null,inRange:t=>(e,n)=>{const r=e instanceof Date?e.getTime():0,s=n instanceof Date?n.getTime():1/0;return t.items.map(i=>({...i,dateObj:un(i.date)})).filter(i=>i.dateObj&&i.dateObj.getTime()>=r&&i.dateObj.getTime()<=s)},totalsByType:t=>e=>{const n=e||t.items;let r=0,s=0;return n.forEach(i=>{i.type==="income"?r+=Number(i.amount)||0:i.type==="expense"&&(s+=Number(i.amount)||0)}),{income:r,expense:s,net:r-s}}},actions:{subscribe(){var e;const t=ze();!((e=t.user)!=null&&e.uid)||this.unsubscribe||(this.loading=!0,this.unsubscribe=YP(t.user.uid,n=>{this.items=n,this.loading=!1}))},stop(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.items=[]},async create(t){var c;const e=ze();if(!((c=e.user)!=null&&c.uid))return;const{type:n,amount:r,date:s,note:i=""}=t||{};if(!["income","expense","transfer"].includes(n))throw new Error("type 錯誤");if(!r||Number(r)<=0)throw new Error("金額需大於 0");const o=s instanceof Date?s:new Date(s);if(isNaN(o))throw new Error("日期格式錯誤");const l={type:n,amount:Number(r),date:xe.fromDate(o),note:String(i||"")};if(n==="transfer"){if(!t.fromAccountId)throw new Error("請選擇來源帳戶");if(!t.toAccountId)throw new Error("請選擇目標帳戶");if(t.fromAccountId===t.toAccountId)throw new Error("來源與目標帳戶不可相同");l.fromAccountId=t.fromAccountId,l.toAccountId=t.toAccountId}else{if(!t.categoryId)throw new Error("請選擇分類");l.categoryId=t.categoryId,t.accountId&&(l.accountId=t.accountId)}await yu(e.user.uid,l)},async update(t,e){var s;const n=ze();if(!((s=n.user)!=null&&s.uid))return;const r={...e};if(r.amount!==void 0&&(r.amount=Number(r.amount)),r.date&&!(r.date instanceof xe)){const i=r.date instanceof Date?r.date:new Date(r.date);r.date=xe.fromDate(i)}await JP(n.user.uid,t,r)},async remove(t){var n;const e=ze();(n=e.user)!=null&&n.uid&&await XP(e.user.uid,t)}}});function Zp(t){const e=un(t==null?void 0:t.openingAsOf)||un(t==null?void 0:t.createdAt);return e?e.getTime():0}function em(t,e){const n=un(t==null?void 0:t.date);return n?n.getTime()>e:!1}const fv=po("accounts",{state:()=>({items:[],loading:!1,unsubscribe:null,lastError:""}),getters:{byId:t=>e=>t.items.find(n=>n.id===e)||null,activeItems:t=>t.items.filter(e=>!e.archived),defaultAccount:t=>t.items.find(e=>e.isDefault&&!e.archived)||t.items.find(e=>!e.archived)||null,balanceOf:()=>(t,e,n)=>{if(!n)return 0;let r=Number(n.openingBalance)||0;const s=Zp(n);for(const i of e){if(!em(i,s))continue;const o=Number(i.amount)||0;i.type==="income"&&i.accountId===t?r+=o:i.type==="expense"&&i.accountId===t?r-=o:i.type==="transfer"&&(i.fromAccountId===t&&(r-=o),i.toAccountId===t&&(r+=o))}return r},balances:t=>{const n=Ka().items||[],r=t.items.map(i=>{let o=Number(i.openingBalance)||0;const l=Zp(i);for(const c of n){if(!em(c,l))continue;const u=Number(c.amount)||0;c.type==="income"&&c.accountId===i.id?o+=u:c.type==="expense"&&c.accountId===i.id?o-=u:c.type==="transfer"&&(c.fromAccountId===i.id&&(o-=u),c.toAccountId===i.id&&(o+=u))}return{...i,balance:o}}),s=r.filter(i=>!i.archived&&i.includeInNetWorth!==!1).reduce((i,o)=>i+o.balance,0);return{list:r,netWorth:s}}},actions:{subscribe(){var e;const t=ze();!((e=t.user)!=null&&e.uid)||this.unsubscribe||(this.loading=!0,this.unsubscribe=KP(t.user.uid,n=>{this.items=n.slice().sort((r,s)=>{var l,c;if(!!r.archived!=!!s.archived)return r.archived?1:-1;if(!!r.isDefault!=!!s.isDefault)return r.isDefault?-1:1;const i=((l=r.createdAt)==null?void 0:l.seconds)||0,o=((c=s.createdAt)==null?void 0:c.seconds)||0;return i-o}),this.loading=!1}))},stop(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.items=[]},async add(t){var i,o;const e=ze();if(!((i=e.user)!=null&&i.uid))return;const n=String((t==null?void 0:t.name)||"").trim();if(!n)throw new Error("帳戶名稱不可為空");if(this.items.some(l=>l.name===n&&!l.archived))throw new Error("已存在相同名稱的帳戶");t.isDefault&&await this._clearOtherDefault();const r=this.items.length===0,s={...t,name:n,isDefault:!!t.isDefault||r};if(s.openingAsOf&&!((o=s.openingAsOf)!=null&&o.toDate)){const l=s.openingAsOf instanceof Date?s.openingAsOf:new Date(s.openingAsOf);isNaN(l)?delete s.openingAsOf:s.openingAsOf=xe.fromDate(l)}await zP(e.user.uid,s)},async update(t,e){var s,i;const n=ze();if(!((s=n.user)!=null&&s.uid))return;e.isDefault===!0&&await this._clearOtherDefault(t);const r={...e};if(r.openingAsOf!==void 0&&r.openingAsOf!==null&&!((i=r.openingAsOf)!=null&&i.toDate)){const o=r.openingAsOf instanceof Date?r.openingAsOf:new Date(r.openingAsOf);isNaN(o)?delete r.openingAsOf:r.openingAsOf=xe.fromDate(o)}await Yp(n.user.uid,t,r)},async remove(t){var i;const e=ze();if(!((i=e.user)!=null&&i.uid)||!this.byId(t))return;if((Ka().items||[]).some(o=>o.accountId===t||o.fromAccountId===t||o.toAccountId===t))throw new Error("此帳戶已有交易紀錄，請改用封存");await QP(e.user.uid,t)},async archive(t){return this.update(t,{archived:!0,isDefault:!1})},async unarchive(t){return this.update(t,{archived:!1})},async _clearOtherDefault(t=null){var r;const e=ze();if(!((r=e.user)!=null&&r.uid))return;const n=this.items.filter(s=>s.isDefault&&s.id!==t);for(const s of n)await Yp(e.user.uid,s.id,{isDefault:!1})}}});function aa(t,e,n=1){const r=new Date(t),s=Number(n)||1;switch(e){case"daily":r.setDate(r.getDate()+s);break;case"weekly":r.setDate(r.getDate()+7*s);break;case"monthly":r.setMonth(r.getMonth()+s);break;case"yearly":r.setFullYear(r.getFullYear()+s);break;default:return null}return r}function hD(t,e,n){return new Date(t)}function Ei(t,e,n){if(t.endMode==="until"){const r=un(t.endDate);if(r&&e.getTime()>r.getTime())return!0}return t.endMode==="count"&&Number(n)>Number(t.endCount||0)}function tm(t,e){const n={type:t.type,amount:Number(t.amount)||0,date:xe.fromDate(e),note:t.note||"",recurrenceRuleId:t.id};return t.type==="transfer"?(n.fromAccountId=t.fromAccountId,n.toAccountId=t.toAccountId):(n.categoryId=t.categoryId,t.accountId&&(n.accountId=t.accountId)),n}const dv=po("recurrences",{state:()=>({items:[],loading:!1,unsubscribe:null,lastError:"",pending:[]}),getters:{activeItems:t=>t.items.filter(e=>e.active!==!1),byId:t=>e=>t.items.find(n=>n.id===e)||null,pendingCount:t=>t.pending.length},actions:{subscribe(){var e;const t=ze();!((e=t.user)!=null&&e.uid)||this.unsubscribe||(this.loading=!0,this.unsubscribe=ZP(t.user.uid,n=>{this.items=n.slice().sort((r,s)=>{var l,c;const i=((l=un(r.nextDueDate))==null?void 0:l.getTime())||0,o=((c=un(s.nextDueDate))==null?void 0:c.getTime())||0;return i-o}),this.loading=!1,this.recomputePending()}))},stop(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.items=[],this.pending=[]},async add(t){var i;const e=ze();if(!((i=e.user)!=null&&i.uid))return;const n={...t},r=n.startDate instanceof Date?n.startDate:new Date(n.startDate);if(isNaN(r))throw new Error("起始日期格式錯誤");if(n.startDate=xe.fromDate(r),n.nextDueDate=xe.fromDate(hD(r,n.freq,n.interval)),n.endMode==="until"&&n.endDate){const o=n.endDate instanceof Date?n.endDate:new Date(n.endDate);isNaN(o)?delete n.endDate:n.endDate=xe.fromDate(o)}else delete n.endDate;return n.endMode!=="count"&&delete n.endCount,n.amount=Number(n.amount)||0,n.interval=Number(n.interval)||1,n.generatedCount=0,n.active=n.active!==!1,(await eD(e.user.uid,n)).id},async update(t,e){var s,i;const n=ze();if(!((s=n.user)!=null&&s.uid))return;const r={...e};for(const o of["startDate","endDate","nextDueDate","lastGeneratedDate"])if(r[o]!==void 0&&r[o]!==null&&!((i=r[o])!=null&&i.toDate)){const l=r[o]instanceof Date?r[o]:new Date(r[o]);isNaN(l)?delete r[o]:r[o]=xe.fromDate(l)}r.amount!==void 0&&(r.amount=Number(r.amount)||0),r.interval!==void 0&&(r.interval=Number(r.interval)||1),await tD(n.user.uid,t,r)},async remove(t){var n;const e=ze();(n=e.user)!=null&&n.uid&&await nD(e.user.uid,t)},async setActive(t,e){return this.update(t,{active:!!e})},async checkAndGenerate(){var s;const t=ze();if(!((s=t.user)!=null&&s.uid))return;const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999),r=[];for(const i of this.activeItems){let o=un(i.nextDueDate);if(!o)continue;let l=Number(i.generatedCount)||0;const c=[];for(;o.getTime()<=n.getTime();){const u=l+c.length+1;if(Ei(i,o,u))break;c.push(new Date(o));const f=aa(o,i.freq,i.interval);if(!f)break;o=f}if(c.length!==0)if(i.autoGenerate){for(const f of c)try{await yu(t.user.uid,tm(i,f)),l+=1}catch(d){this.lastError=(d==null?void 0:d.message)||String(d)}const u={nextDueDate:o,generatedCount:l,lastGeneratedDate:c[c.length-1]};Ei(i,o,l+1)&&(u.active=!1),await this.update(i.id,u)}else for(const u of c)r.push({ruleId:i.id,dueDate:u,ruleSnapshot:i})}this.pending=r},recomputePending(){const t=new Date,e=new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999),n=[];for(const r of this.activeItems){if(r.autoGenerate)continue;let s=un(r.nextDueDate);if(!s)continue;let i=Number(r.generatedCount)||0;for(;s.getTime()<=e.getTime();){const o=i+1;if(Ei(r,s,o))break;n.push({ruleId:r.id,dueDate:new Date(s),ruleSnapshot:r});const l=aa(s,r.freq,r.interval);if(!l)break;s=l,i+=1}}this.pending=n},async confirmPending(t,e=null){var u;const n=ze();if(!((u=n.user)!=null&&u.uid))return;const r=this.pending[t];if(!r)return;const s=this.byId(r.ruleId);if(!s)return;const i=tm(s,r.dueDate);(e==null?void 0:e.amount)!==void 0&&(i.amount=Number(e.amount)||0),(e==null?void 0:e.note)!==void 0&&(i.note=String(e.note||"")),await yu(n.user.uid,i);const o=(Number(s.generatedCount)||0)+1,l=aa(r.dueDate,s.freq,s.interval),c={generatedCount:o,lastGeneratedDate:r.dueDate,nextDueDate:l};l&&Ei(s,l,o+1)&&(c.active=!1),await this.update(s.id,c)},async skipPending(t){var o;if(!((o=ze().user)!=null&&o.uid))return;const n=this.pending[t];if(!n)return;const r=this.byId(n.ruleId);if(!r)return;const s=aa(n.dueDate,r.freq,r.interval),i={nextDueDate:s};s&&Ei(r,s,(Number(r.generatedCount)||0)+1)&&(i.active=!1),await this.update(r.id,i)}}}),fD={class:"topbar"},dD={class:"title-wrap"},pD={class:"title"},mD={__name:"TopBar",props:{title:{type:String,default:""}},emits:["menu","add"],setup(t){return(e,n)=>(oe(),_e("header",fD,[F("button",{class:"icon-btn menu",onClick:n[0]||(n[0]=r=>e.$emit("menu")),"aria-label":"開啟選單"},[...n[2]||(n[2]=[F("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),F("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),F("line",{x1:"3",y1:"18",x2:"15",y2:"18"})],-1)])]),F("div",dD,[n[3]||(n[3]=F("div",{class:"brand"},"MY / MONEY",-1)),F("div",pD,Ke(t.title),1)]),F("button",{class:"icon-btn add",onClick:n[1]||(n[1]=r=>e.$emit("add")),"aria-label":"新增收支"},[...n[4]||(n[4]=[F("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor","stroke-width":"2.4"},[F("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),F("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]))}},gD=or(mD,[["__scopeId","data-v-84dc11fb"]]),_D={class:"bottom-tabs",role:"tablist"},yD=["aria-selected","onClick"],vD=["innerHTML"],ED={class:"label"},ID={__name:"BottomTabs",props:{active:{type:String,default:"home"}},emits:["navigate"],setup(t){const e=[{id:"transactions",label:"收入列表",icon:`<svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' stroke-width='2'>
      <rect x='3' y='4' width='18' height='16' rx='2'/>
      <line x1='7' y1='9' x2='17' y2='9'/>
      <line x1='7' y1='13' x2='17' y2='13'/>
      <line x1='7' y1='17' x2='13' y2='17'/>
    </svg>`},{id:"home",label:"首頁",icon:`<svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='currentColor' stroke-width='2'>
      <path d='M3 12L12 3l9 9'/>
      <path d='M5 10v10h14V10'/>
    </svg>`},{id:"analytics",label:"數據分析",icon:`<svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' stroke-width='2'>
      <line x1='4' y1='20' x2='20' y2='20'/>
      <rect x='6' y='11' width='3' height='7'/>
      <rect x='11' y='7' width='3' height='11'/>
      <rect x='16' y='14' width='3' height='4'/>
    </svg>`}];return(n,r)=>(oe(),_e("nav",_D,[(oe(),_e(Ze,null,bs(e,s=>F("button",{key:s.id,class:ht(["tab",{active:t.active===s.id}]),role:"tab","aria-selected":t.active===s.id,onClick:i=>n.$emit("navigate",s.id)},[F("span",{class:"icon",innerHTML:s.icon},null,8,vD),F("span",ED,Ke(s.label),1)],10,yD)),64))]))}},wD=or(ID,[["__scopeId","data-v-4029c05f"]]),TD={key:0,class:"drawer-root"},AD={class:"drawer tech-panel",role:"dialog","aria-modal":"true"},bD={class:"user"},RD={class:"avatar"},SD={class:"info"},CD={class:"email mono"},PD={class:"role"},DD={class:"menu"},kD=["onClick"],ND=["innerHTML"],OD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <path d='M3 12L12 3l9 9'/><path d='M5 10v10h14V10'/>
</svg>`,VD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <rect x='3' y='4' width='18' height='16' rx='2'/>
  <line x1='7' y1='9' x2='17' y2='9'/>
  <line x1='7' y1='13' x2='17' y2='13'/>
  <line x1='7' y1='17' x2='13' y2='17'/>
</svg>`,xD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <line x1='4' y1='20' x2='20' y2='20'/>
  <rect x='6' y='11' width='3' height='7'/>
  <rect x='11' y='7' width='3' height='11'/>
  <rect x='16' y='14' width='3' height='4'/>
</svg>`,MD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <circle cx='12' cy='12' r='3'/>
  <path d='M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z'/>
</svg>`,LD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>
</svg>`,FD=`<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2'>
  <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'/>
  <polyline points='16 17 21 12 16 7'/>
  <line x1='21' y1='12' x2='9' y2='12'/>
</svg>`,UD={__name:"SideMenu",props:{modelValue:Boolean},emits:["update:modelValue","navigate","logout"],setup(t,{emit:e}){const n=e,r=ze(),s=Bu(),i=qe(()=>{var c,u;return(((u=(c=r.user)==null?void 0:c.email)==null?void 0:u[0])||"?").toUpperCase()});function o(){n("update:modelValue",!1)}const l=qe(()=>{const c=[{path:"/",label:"首頁",icon:OD},{path:"/transactions",label:"列表頁",icon:VD},{path:"/analytics",label:"數據頁",icon:xD},{path:"/settings",label:"個人設定",icon:MD}];return r.isAdmin&&c.push({path:"/admin",label:"使用者管理",icon:LD}),c});return(c,u)=>(oe(),fn(jm,{to:"body"},[Le(Lu,{name:"drawer"},{default:cn(()=>{var f,d,m;return[t.modelValue?(oe(),_e("div",TD,[F("div",{class:"backdrop",onClick:o}),F("aside",AD,[F("div",{class:"header"},[u[1]||(u[1]=F("div",{class:"brand"},"MY / MONEY",-1)),F("button",{class:"close",onClick:o,"aria-label":"關閉"},"✕")]),F("div",bD,[F("div",RD,[F("span",null,Ke(i.value),1)]),F("div",SD,[F("div",CD,Ke(((f=tn(r).user)==null?void 0:f.email)||"—"),1),F("div",PD,[F("span",{class:ht(["badge","role-"+(((d=tn(r).profile)==null?void 0:d.role)||"user").toLowerCase()])},Ke(((m=tn(r).profile)==null?void 0:m.role)||"USER"),3)])])]),F("ul",DD,[(oe(!0),_e(Ze,null,bs(l.value,v=>(oe(),_e("li",{key:v.path},[F("button",{class:ht(["menu-item",{active:tn(s).path===v.path}]),onClick:C=>c.$emit("navigate",v.path)},[F("span",{class:"icon",innerHTML:v.icon},null,8,ND),F("span",null,Ke(v.label),1)],10,kD)]))),128))]),u[3]||(u[3]=F("div",{class:"spacer"},null,-1)),F("button",{class:"logout",onClick:u[0]||(u[0]=v=>c.$emit("logout"))},[F("span",{class:"icon",innerHTML:FD}),u[2]||(u[2]=F("span",null,"登出",-1))])])])):nt("",!0)]}),_:1})]))}},BD=or(UD,[["__scopeId","data-v-0a30cc82"]]),jD={key:0,class:"header"},$D={class:"body"},qD={key:1,class:"footer"},HD={__name:"BaseModal",props:{modelValue:Boolean,title:String,size:{type:String,default:"md"},closable:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(t,{emit:e}){const n=t,r=e;function s(){r("update:modelValue",!1),r("close")}function i(){n.closeOnBackdrop&&s()}return(o,l)=>(oe(),fn(jm,{to:"body"},[Le(Lu,{name:"modal"},{default:cn(()=>[t.modelValue?(oe(),_e("div",{key:0,class:"modal-backdrop",onClick:bg(i,["self"])},[F("div",{class:ht(["modal-panel tech-panel",[`size-${t.size}`]]),role:"dialog","aria-modal":"true"},[t.title||o.$slots.header?(oe(),_e("header",jD,[ks(o.$slots,"header",{},()=>[F("h3",null,Ke(t.title),1)],!0),t.closable?(oe(),_e("button",{key:0,class:"close",onClick:s,"aria-label":"關閉"},"✕")):nt("",!0)])):nt("",!0),F("div",$D,[ks(o.$slots,"default",{},void 0,!0)]),o.$slots.footer?(oe(),_e("footer",qD,[ks(o.$slots,"footer",{},void 0,!0)])):nt("",!0)],2)])):nt("",!0)]),_:3})]))}},WD=or(HD,[["__scopeId","data-v-7f923b9b"]]);function nm(t){return t<10?"0"+t:String(t)}function pv(t){return!(t instanceof Date)||isNaN(t)?"":`${t.getFullYear()}-${nm(t.getMonth()+1)}-${nm(t.getDate())}`}function rm(t){if(!t)return null;const[e,n,r]=t.split("-").map(Number);return new Date(e,(n||1)-1,r||1,0,0,0,0)}function Zk(t=new Date){return new Date(t.getFullYear(),t.getMonth(),1,0,0,0,0)}function e1(t=new Date){return new Date(t.getFullYear(),t.getMonth()+1,0,23,59,59,999)}function t1(t){if(!t)return"";const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=Math.round((n-r)/864e5);return s===0?"今天":s===1?"昨天":s===-1?"明天":pv(t)}function n1(t,e){return new Date(t.getFullYear(),t.getMonth()+e,1)}const GD={key:0,class:"label"},KD={class:"control"},zD=["type","value","placeholder","autocomplete","inputmode","disabled","min","max","step"],QD=["value","placeholder","disabled","rows"],YD={key:1,class:"error"},JD={key:2,class:"hint"},XD={__name:"BaseInput",props:{modelValue:{type:[String,Number],default:""},label:String,type:{type:String,default:"text"},placeholder:String,autocomplete:String,inputmode:String,disabled:Boolean,error:String,hint:String,rows:{type:Number,default:3},min:[String,Number],max:[String,Number],step:[String,Number]},emits:["update:modelValue"],setup(t){const e=t,n=ln(!1);function r(s){if(e.type==="number"){if(s===""||s===null||s===void 0)return"";const i=Number(s);return Number.isNaN(i)?s:i}return s}return(s,i)=>(oe(),_e("label",{class:ht(["base-input",{"has-error":!!t.error,focused:n.value}])},[t.label?(oe(),_e("span",GD,Ke(t.label),1)):nt("",!0),F("div",KD,[ks(s.$slots,"prefix",{},void 0),t.type!=="textarea"?(oe(),_e("input",{key:0,type:t.type,value:t.modelValue,placeholder:t.placeholder,autocomplete:t.autocomplete,inputmode:t.inputmode,disabled:t.disabled,min:t.min,max:t.max,step:t.step,onInput:i[0]||(i[0]=o=>s.$emit("update:modelValue",r(o.target.value))),onFocus:i[1]||(i[1]=o=>n.value=!0),onBlur:i[2]||(i[2]=o=>n.value=!1)},null,40,zD)):(oe(),_e("textarea",{key:1,value:t.modelValue,placeholder:t.placeholder,disabled:t.disabled,rows:t.rows,onInput:i[3]||(i[3]=o=>s.$emit("update:modelValue",o.target.value)),onFocus:i[4]||(i[4]=o=>n.value=!0),onBlur:i[5]||(i[5]=o=>n.value=!1)},null,40,QD)),ks(s.$slots,"suffix",{},void 0)]),t.error?(oe(),_e("span",YD,Ke(t.error),1)):t.hint?(oe(),_e("span",JD,Ke(t.hint),1)):nt("",!0)],2))}},Sc=or(XD,[["__scopeId","data-v-60bb7c60"]]),ZD=["type","disabled"],ek={key:0,class:"spinner","aria-hidden":"true"},tk={__name:"BaseButton",props:{type:{type:String,default:"button"},variant:{type:String,default:"primary"},size:{type:String,default:"md"},block:Boolean,loading:Boolean,disabled:Boolean,iconOnly:Boolean},emits:["click"],setup(t){return(e,n)=>(oe(),_e("button",{type:t.type,class:ht(["base-btn",`variant-${t.variant}`,`size-${t.size}`,{block:t.block,loading:t.loading,"icon-only":t.iconOnly}]),disabled:t.disabled||t.loading,onClick:n[0]||(n[0]=r=>e.$emit("click",r))},[t.loading?(oe(),_e("span",ek)):ks(e.$slots,"default",{},void 0,!0,1)],10,ZD))}},Cc=or(tk,[["__scopeId","data-v-d85ca3d8"]]),nk={class:"field"},rk={class:"cat-picker"},sk=["onClick"],ik={key:0,class:"empty"},ok={key:0,class:"error-text"},ak={key:0,class:"field"},lk={class:"field-label"},ck={class:"acc-picker"},uk=["onClick"],hk={class:"field"},fk={class:"acc-picker"},dk=["onClick"],pk={key:0,class:"error-text"},mk={class:"field"},gk={class:"acc-picker"},_k=["disabled","onClick"],yk={key:0,class:"error-text"},vk={class:"recurrence"},Ek={key:0,class:"rule-badge"},Ik={key:1,class:"recur-toggle"},wk={key:2,class:"recur-panel"},Tk={class:"row two"},Ak={class:"mini-field"},bk={class:"mini-field"},Rk={class:"row"},Sk={class:"end-modes"},Ck={key:0,class:"row"},Pk={class:"mini-field"},Dk={key:1,class:"row"},kk={class:"mini-field"},Nk={class:"row"},Ok={class:"recur-toggle small"},Vk={class:"preview mono"},xk={key:2,class:"error-text"},Mk={class:"actions"},Lk={__name:"TransactionForm",props:{initial:{type:Object,default:null}},emits:["saved","cancel"],setup(t,{emit:e}){var A,E,Ae,Ge,De,he,we,Et;const n=t,r=e,s=hv(),i=Ka(),o=fv(),l=dv(),c=qe(()=>{var ae;return!!((ae=n.initial)!=null&&ae.id)}),u=qe(()=>{var ae;return!!((ae=n.initial)!=null&&ae.recurrenceRuleId)}),f=qe(()=>{var ae,O;return((ae=o.defaultAccount)==null?void 0:ae.id)||((O=o.activeItems[0])==null?void 0:O.id)||""}),d=es({type:((A=n.initial)==null?void 0:A.type)||"income",amount:((E=n.initial)==null?void 0:E.amount)!=null?String(n.initial.amount):"",categoryId:((Ae=n.initial)==null?void 0:Ae.categoryId)||"",accountId:((Ge=n.initial)==null?void 0:Ge.accountId)||f.value,fromAccountId:((De=n.initial)==null?void 0:De.fromAccountId)||"",toAccountId:((he=n.initial)==null?void 0:he.toAccountId)||"",date:pv(un((we=n.initial)==null?void 0:we.date)||new Date),note:((Et=n.initial)==null?void 0:Et.note)||""}),m=qe(()=>d.type==="transfer"?[]:s.itemsFor(d.type)),v=qe(()=>o.activeItems),C=qe(()=>v.value.length>0),k=qe(()=>v.value.length>=2),S=es({enabled:!1,freq:"monthly",interval:1,endMode:"never",endDate:"",endCount:12,autoGenerate:!1}),B=qe(()=>{const ae=rm(d.date);if(!ae||isNaN(ae))return"—";const O=new Date(ae),H=Number(S.interval)||1;switch(S.freq){case"daily":O.setDate(O.getDate()+H);break;case"weekly":O.setDate(O.getDate()+7*H);break;case"monthly":O.setMonth(O.getMonth()+H);break;case"yearly":O.setFullYear(O.getFullYear()+H);break}const pe=lt=>String(lt).padStart(2,"0");return`${O.getFullYear()}-${pe(O.getMonth()+1)}-${pe(O.getDate())}`});Tr(f,ae=>{!d.accountId&&d.type!=="transfer"&&(d.accountId=ae)}),Tr(()=>d.type,ae=>{ae!=="transfer"&&d.categoryId&&!m.value.some(O=>O.id===d.categoryId)&&(d.categoryId="")});function V(ae){d.type=ae,ae==="transfer"?d.fromAccountId||(d.fromAccountId=f.value):d.accountId||(d.accountId=f.value)}const x=ln({}),q=ln(""),ee=ln(!1),re=ln(!1);function T(){return x.value={},(!d.amount||Number(d.amount)<=0)&&(x.value.amount="請輸入大於 0 的金額"),d.date||(x.value.date="請選擇日期"),d.type==="transfer"?(d.fromAccountId||(x.value.fromAccountId="請選擇來源帳戶"),d.toAccountId||(x.value.toAccountId="請選擇目標帳戶"),d.fromAccountId&&d.toAccountId&&d.fromAccountId===d.toAccountId&&(x.value.toAccountId="來源與目標帳戶不可相同")):d.categoryId||(x.value.categoryId="請選擇分類"),Object.keys(x.value).length===0}async function y(){if(q.value="",!!T()){if(S.enabled&&!u.value){if(!S.freq){q.value="請選擇頻率";return}if(!S.interval||Number(S.interval)<1){q.value="間隔至少為 1";return}if(S.endMode==="until"&&!S.endDate){q.value="請選結束日期";return}if(S.endMode==="count"&&(!S.endCount||Number(S.endCount)<1)){q.value="請輸入結束次數";return}}ee.value=!0;try{const ae=rm(d.date),O={type:d.type,amount:Number(d.amount),date:ae,note:d.note},H=d.type==="transfer"?{...O,fromAccountId:d.fromAccountId,toAccountId:d.toAccountId}:{...O,categoryId:d.categoryId,...d.accountId?{accountId:d.accountId}:{}};if(S.enabled&&!u.value){const pe={type:d.type,amount:Number(d.amount),note:d.note,freq:S.freq,interval:Number(S.interval)||1,startDate:_(ae,S.freq,S.interval),endMode:S.endMode,autoGenerate:!!S.autoGenerate};S.endMode==="until"&&(pe.endDate=S.endDate),S.endMode==="count"&&(pe.endCount=Number(S.endCount)||1),d.type==="transfer"?(pe.fromAccountId=d.fromAccountId,pe.toAccountId=d.toAccountId):(pe.categoryId=d.categoryId,d.accountId&&(pe.accountId=d.accountId));const lt=await l.add(pe);lt&&(H.recurrenceRuleId=lt,await l.update(lt,{generatedCount:1,lastGeneratedDate:ae}))}c.value?await i.update(n.initial.id,H):await i.create(H),r("saved")}catch(ae){q.value=(ae==null?void 0:ae.message)||String(ae)}finally{ee.value=!1}}}function _(ae,O,H){const pe=new Date(ae),lt=Number(H)||1;switch(O){case"daily":pe.setDate(pe.getDate()+lt);break;case"weekly":pe.setDate(pe.getDate()+7*lt);break;case"monthly":pe.setMonth(pe.getMonth()+lt);break;case"yearly":pe.setFullYear(pe.getFullYear()+lt);break}return pe}async function w(){if(!(!c.value||!u.value)&&confirm("解除連結後，此筆將變成普通交易；定期規則仍會繼續按時產生新的交易。確定？")){ee.value=!0;try{await i.update(n.initial.id,{recurrenceRuleId:null}),r("saved")}catch(ae){q.value=(ae==null?void 0:ae.message)||String(ae)}finally{ee.value=!1}}}async function R(){if(c.value&&confirm("確定要刪除這筆交易？")){re.value=!0;try{await i.remove(n.initial.id),r("saved")}catch(ae){q.value=(ae==null?void 0:ae.message)||String(ae)}finally{re.value=!1}}}return(ae,O)=>(oe(),_e("form",{class:"tx-form",onSubmit:bg(y,["prevent"])},[F("div",{class:ht(["type-switch",{"no-transfer":!k.value}])},[F("button",{type:"button",class:ht(["seg income",{active:d.type==="income"}]),onClick:O[0]||(O[0]=H=>V("income"))},[...O[17]||(O[17]=[F("span",{class:"dot"},null,-1),Vt("收入 ",-1)])],2),F("button",{type:"button",class:ht(["seg expense",{active:d.type==="expense"}]),onClick:O[1]||(O[1]=H=>V("expense"))},[...O[18]||(O[18]=[F("span",{class:"dot"},null,-1),Vt("支出 ",-1)])],2),k.value?(oe(),_e("button",{key:0,type:"button",class:ht(["seg transfer",{active:d.type==="transfer"}]),onClick:O[2]||(O[2]=H=>V("transfer"))},[...O[19]||(O[19]=[F("span",{class:"dot"},null,-1),Vt("轉帳 ",-1)])],2)):nt("",!0)],2),Le(Sc,{modelValue:d.amount,"onUpdate:modelValue":O[3]||(O[3]=H=>d.amount=H),label:"金額",type:"number",inputmode:"decimal",placeholder:"0",min:0,step:1,error:x.value.amount},{prefix:cn(()=>[...O[20]||(O[20]=[F("span",{class:"prefix mono"},"NT$",-1)])]),_:1},8,["modelValue","error"]),d.type!=="transfer"?(oe(),_e(Ze,{key:0},[F("div",nk,[O[21]||(O[21]=F("label",{class:"field-label"},"分類",-1)),F("div",rk,[(oe(!0),_e(Ze,null,bs(m.value,H=>(oe(),_e("button",{key:H.id,type:"button",class:ht(["cat",{active:d.categoryId===H.id}]),style:an(d.categoryId===H.id?{boxShadow:`0 0 12px ${H.color}55`,borderColor:H.color,color:H.color}:{}),onClick:pe=>d.categoryId=H.id},[F("span",{class:"swatch",style:an({background:H.color})},null,4),Vt(" "+Ke(H.name),1)],14,sk))),128)),m.value.length===0?(oe(),_e("p",ik," 尚無"+Ke(d.type==="income"?"收入":"支出")+"分類，請先到個人設定新增。 ",1)):nt("",!0)]),x.value.categoryId?(oe(),_e("div",ok,Ke(x.value.categoryId),1)):nt("",!0)]),C.value?(oe(),_e("div",ak,[F("label",lk,[Vt(Ke(d.type==="income"?"收入帳戶":"扣款帳戶"),1),O[22]||(O[22]=F("span",{class:"opt"}," · 選填",-1))]),F("div",ck,[F("button",{type:"button",class:ht(["acc",{active:!d.accountId}]),onClick:O[4]||(O[4]=H=>d.accountId="")},[...O[23]||(O[23]=[F("span",{class:"swatch none"},null,-1),Vt(" 不指定 ",-1)])],2),(oe(!0),_e(Ze,null,bs(v.value,H=>(oe(),_e("button",{key:H.id,type:"button",class:ht(["acc",{active:d.accountId===H.id}]),style:an(d.accountId===H.id?{boxShadow:`0 0 12px ${H.color}55`,borderColor:H.color,color:H.color}:{}),onClick:pe=>d.accountId=H.id},[F("span",{class:"swatch",style:an({background:H.color})},null,4),Vt(" "+Ke(H.name),1)],14,uk))),128))])])):nt("",!0)],64)):(oe(),_e(Ze,{key:1},[F("div",hk,[O[24]||(O[24]=F("label",{class:"field-label"},"從（來源帳戶）",-1)),F("div",fk,[(oe(!0),_e(Ze,null,bs(v.value,H=>(oe(),_e("button",{key:H.id,type:"button",class:ht(["acc",{active:d.fromAccountId===H.id}]),style:an(d.fromAccountId===H.id?{boxShadow:`0 0 12px ${H.color}55`,borderColor:H.color,color:H.color}:{}),onClick:pe=>d.fromAccountId=H.id},[F("span",{class:"swatch",style:an({background:H.color})},null,4),Vt(" "+Ke(H.name),1)],14,dk))),128))]),x.value.fromAccountId?(oe(),_e("div",pk,Ke(x.value.fromAccountId),1)):nt("",!0)]),O[26]||(O[26]=F("div",{class:"transfer-arrow","aria-hidden":"true"},"↓",-1)),F("div",mk,[O[25]||(O[25]=F("label",{class:"field-label"},"到（目標帳戶）",-1)),F("div",gk,[(oe(!0),_e(Ze,null,bs(v.value,H=>(oe(),_e("button",{key:H.id,type:"button",class:ht(["acc",{active:d.toAccountId===H.id,disabled:H.id===d.fromAccountId}]),disabled:H.id===d.fromAccountId,style:an(d.toAccountId===H.id?{boxShadow:`0 0 12px ${H.color}55`,borderColor:H.color,color:H.color}:{}),onClick:pe=>d.toAccountId=H.id},[F("span",{class:"swatch",style:an({background:H.color})},null,4),Vt(" "+Ke(H.name),1)],14,_k))),128))]),x.value.toAccountId?(oe(),_e("div",yk,Ke(x.value.toAccountId),1)):nt("",!0)])],64)),Le(Sc,{modelValue:d.date,"onUpdate:modelValue":O[5]||(O[5]=H=>d.date=H),label:"日期",type:"date",error:x.value.date},null,8,["modelValue","error"]),Le(Sc,{modelValue:d.note,"onUpdate:modelValue":O[6]||(O[6]=H=>d.note=H),label:"備註（選填）",type:"textarea",rows:2,placeholder:"這筆交易的備註"},null,8,["modelValue"]),F("div",vk,[u.value?(oe(),_e("div",Ek,[O[27]||(O[27]=F("span",{class:"icon"},"🔁",-1)),O[28]||(O[28]=F("div",{class:"text"},[F("div",{class:"title"},"此筆為定期規則產生"),F("div",{class:"hint"},"修改此筆不會影響規則；到「設定」頁面可管理所有定期規則。")],-1)),F("button",{type:"button",class:"btn-detach",onClick:w},"解除連結")])):(oe(),_e("label",Ik,[Vn(F("input",{type:"checkbox","onUpdate:modelValue":O[7]||(O[7]=H=>S.enabled=H)},null,512),[[fd,S.enabled]]),O[29]||(O[29]=AI('<span class="track" data-v-fc53de17></span><span class="label-text" data-v-fc53de17><span class="main" data-v-fc53de17><span class="icon" data-v-fc53de17>🔁</span>設為定期交易</span><span class="sub" data-v-fc53de17>之後每個週期自動或提醒重複建立這筆</span></span>',2))])),S.enabled&&!u.value?(oe(),_e("div",wk,[F("div",Tk,[F("label",Ak,[O[31]||(O[31]=F("span",{class:"mini-label"},"頻率",-1)),Vn(F("select",{"onUpdate:modelValue":O[8]||(O[8]=H=>S.freq=H),class:"tech-select-sm"},[...O[30]||(O[30]=[F("option",{value:"daily"},"每日",-1),F("option",{value:"weekly"},"每週",-1),F("option",{value:"monthly"},"每月",-1),F("option",{value:"yearly"},"每年",-1)])],512),[[uw,S.freq]])]),F("label",bk,[O[32]||(O[32]=F("span",{class:"mini-label"},"間隔（每 N）",-1)),Vn(F("input",{"onUpdate:modelValue":O[9]||(O[9]=H=>S.interval=H),type:"number",min:"1",step:"1",class:"tech-input tech-input-sm"},null,512),[[lc,S.interval,void 0,{number:!0}]])])]),F("div",Rk,[O[36]||(O[36]=F("span",{class:"mini-label"},"結束條件",-1)),F("div",Sk,[F("label",null,[Vn(F("input",{type:"radio","onUpdate:modelValue":O[10]||(O[10]=H=>S.endMode=H),value:"never"},null,512),[[cc,S.endMode]]),O[33]||(O[33]=F("span",null,"不限",-1))]),F("label",null,[Vn(F("input",{type:"radio","onUpdate:modelValue":O[11]||(O[11]=H=>S.endMode=H),value:"until"},null,512),[[cc,S.endMode]]),O[34]||(O[34]=F("span",null,"到某日",-1))]),F("label",null,[Vn(F("input",{type:"radio","onUpdate:modelValue":O[12]||(O[12]=H=>S.endMode=H),value:"count"},null,512),[[cc,S.endMode]]),O[35]||(O[35]=F("span",null,"N 次後",-1))])])]),S.endMode==="until"?(oe(),_e("div",Ck,[F("label",Pk,[O[37]||(O[37]=F("span",{class:"mini-label"},"結束日期",-1)),Vn(F("input",{type:"date","onUpdate:modelValue":O[13]||(O[13]=H=>S.endDate=H),class:"tech-input tech-input-sm"},null,512),[[lc,S.endDate]])])])):nt("",!0),S.endMode==="count"?(oe(),_e("div",Dk,[F("label",kk,[O[38]||(O[38]=F("span",{class:"mini-label"},"總次數",-1)),Vn(F("input",{type:"number","onUpdate:modelValue":O[14]||(O[14]=H=>S.endCount=H),min:"1",step:"1",class:"tech-input tech-input-sm"},null,512),[[lc,S.endCount,void 0,{number:!0}]])])])):nt("",!0),F("div",Nk,[F("label",Ok,[Vn(F("input",{type:"checkbox","onUpdate:modelValue":O[15]||(O[15]=H=>S.autoGenerate=H)},null,512),[[fd,S.autoGenerate]]),O[39]||(O[39]=F("span",{class:"track"},null,-1)),O[40]||(O[40]=F("span",{class:"label-text"},[Vt(" 自動產生 "),F("span",{class:"sub"},"關閉時：到期後在首頁列出待確認，需手動加入")],-1))])]),F("div",Vk,[O[41]||(O[41]=Vt(" 下一次：",-1)),F("strong",null,Ke(B.value),1)])])):nt("",!0)]),q.value?(oe(),_e("div",xk,Ke(q.value),1)):nt("",!0),F("div",Mk,[c.value?(oe(),fn(Cc,{key:0,type:"button",variant:"danger",onClick:R,loading:re.value},{default:cn(()=>[...O[42]||(O[42]=[Vt("刪除",-1)])]),_:1},8,["loading"])):nt("",!0),O[44]||(O[44]=F("div",{class:"spacer"},null,-1)),Le(Cc,{type:"button",variant:"subtle",onClick:O[16]||(O[16]=H=>ae.$emit("cancel"))},{default:cn(()=>[...O[43]||(O[43]=[Vt("取消",-1)])]),_:1}),Le(Cc,{type:"submit",loading:ee.value},{default:cn(()=>[Vt(Ke(c.value?"儲存":"新增"),1)]),_:1},8,["loading"])])],32))}},Fk=or(Lk,[["__scopeId","data-v-fc53de17"]]),Uk={class:"app-shell"},Bk={class:"main"},jk={__name:"AppShell",setup(t){const e=Bu(),n=kT(),r=ze(),s=hv(),i=Ka(),o=fv(),l=dv(),c=ln(!1),u=ln(!1);ho(async()=>{s.subscribe(),i.subscribe(),o.subscribe(),l.subscribe(),setTimeout(()=>{l.checkAndGenerate().catch(()=>{})},1500)}),Du(()=>{s.stop(),i.stop(),o.stop(),l.stop()});const f=qe(()=>({Home:"首頁",Transactions:"收入列表",Analytics:"數據分析",Settings:"個人設定",Admin:"使用者管理"})[e.name]||"My Money"),d=qe(()=>e.name==="Transactions"?"transactions":e.name==="Analytics"?"analytics":"home");function m(S){const B={transactions:"/transactions",home:"/",analytics:"/analytics"};e.path!==B[S]&&n.push(B[S])}function v(S){c.value=!1,e.path!==S&&n.push(S)}async function C(){c.value=!1,s.stop(),i.stop(),await r.logout(),n.replace("/login")}function k(){u.value=!0}return(S,B)=>{const V=Xm("router-view");return oe(),_e("div",Uk,[Le(gD,{title:f.value,onMenu:B[0]||(B[0]=x=>c.value=!0),onAdd:k},null,8,["title"]),F("main",Bk,[Le(V,null,{default:cn(({Component:x})=>[Le(Lu,{name:"fade",mode:"out-in"},{default:cn(()=>[(oe(),fn(QE(x)))]),_:2},1024)]),_:1})]),Le(wD,{active:d.value,onNavigate:m},null,8,["active"]),Le(BD,{modelValue:c.value,"onUpdate:modelValue":B[1]||(B[1]=x=>c.value=x),onNavigate:v,onLogout:C},null,8,["modelValue"]),Le(WD,{modelValue:u.value,"onUpdate:modelValue":B[4]||(B[4]=x=>u.value=x),title:"新增收支",size:"md"},{default:cn(()=>[u.value?(oe(),fn(Fk,{key:0,onSaved:B[2]||(B[2]=x=>u.value=!1),onCancel:B[3]||(B[3]=x=>u.value=!1)})):nt("",!0)]),_:1},8,["modelValue"])])}}},$k=or(jk,[["__scopeId","data-v-dfbfff90"]]),qk={__name:"App",setup(t){const e=ze(),n=Bu();aD();const r=qe(()=>{var s;return e.isAuthenticated&&e.isActive&&((s=n.meta)==null?void 0:s.shell)===!0});return ho(()=>{e.init()}),(s,i)=>{const o=Xm("router-view");return tn(e).ready?(oe(),_e(Ze,{key:1},[r.value?(oe(),fn($k,{key:0},{default:cn(()=>[Le(o)]),_:1})):(oe(),fn(o,{key:1}))],64)):(oe(),fn(uD,{key:0,full:"",label:"Initializing..."}))}}},Hk="modulepreload",Wk=function(t){return"/my-money/"+t},sm={},Ln=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=Wk(c),c in sm)return;sm[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Hk,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Gk=[{path:"/login",name:"Login",component:()=>Ln(()=>import("./Login-mUjibAhu.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/register",name:"Register",component:()=>Ln(()=>import("./Register-CGeOeXYr.js"),__vite__mapDeps([2,3])),meta:{public:!0}},{path:"/pending",name:"PendingApproval",component:()=>Ln(()=>import("./PendingApproval-DuQtPBXD.js"),__vite__mapDeps([4,5])),meta:{pendingAllowed:!0}},{path:"/",name:"Home",component:()=>Ln(()=>import("./Home-BXNcQJs4.js"),__vite__mapDeps([6,7,8,9,10,11])),meta:{shell:!0}},{path:"/transactions",name:"Transactions",component:()=>Ln(()=>import("./Transactions-CkjZ31MC.js"),__vite__mapDeps([12,8,13])),meta:{shell:!0}},{path:"/analytics",name:"Analytics",component:()=>Ln(()=>import("./Analytics-BaZQN1cQ.js"),__vite__mapDeps([14,9,7,8,10,15])),meta:{shell:!0}},{path:"/settings",name:"Settings",component:()=>Ln(()=>import("./Settings-D5UH-8iT.js"),__vite__mapDeps([16,8,7,17])),meta:{shell:!0}},{path:"/admin",name:"Admin",component:()=>Ln(()=>import("./Admin-Cmu9rAZS.js"),__vite__mapDeps([18,19])),meta:{requireAdmin:!0,shell:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ln(()=>import("./NotFound-Cv0MDaLW.js"),__vite__mapDeps([20,21])),meta:{public:!0}}],mv=DT({history:lT(),routes:Gk,scrollBehavior(){return{top:0}}});function Kk(t){return t.ready?Promise.resolve():new Promise(e=>{const n=setInterval(()=>{t.ready&&(clearInterval(n),e())},20)})}mv.beforeEach(async t=>{const e=ze();await Kk(e);const n=t.meta.public===!0,r=t.meta.pendingAllowed===!0,s=t.meta.requireAdmin===!0;return e.isAuthenticated?e.profile?n&&(t.name==="Login"||t.name==="Register")?e.isActive?{name:"Home"}:{name:"PendingApproval"}:e.isActive?e.isActive&&t.name==="PendingApproval"?{name:"Home"}:s&&!e.isAdmin?{name:"Home"}:!0:r||n?!0:{name:"PendingApproval"}:(await e.logout(),{name:"Login"}):n?!0:{name:"Login",query:t.fullPath!=="/"?{redirect:t.fullPath}:{}}});const Mh=mw(qk);Mh.use(yw());Mh.use(mv);Mh.mount("#app");export{po as $,Vn as A,Sc as B,lc as C,es as D,an as E,Ze as F,fn as G,bI as H,QE as I,t1 as J,pv as K,nm as L,WD as M,n1 as N,Zk as O,e1 as P,uw as Q,aD as R,ho as S,Fk as T,Du as U,gE as V,ks as W,AI as X,cc as Y,fd as Z,or as _,F as a,uv as a0,LP as a1,jP as a2,Xk as a3,Le as b,_e as c,nt as d,cn as e,Cc as f,Jk as g,Xm as h,kT as i,Bu as j,Vt as k,tn as l,qe as m,ht as n,oe as o,Ka as p,un as q,ln as r,dv as s,Ke as t,ze as u,fv as v,bg as w,hv as x,Tr as y,bs as z};
