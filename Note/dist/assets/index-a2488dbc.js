(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function da(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ei(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ce(s)?_p(s):ei(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ce(t))return t;if(ge(t))return t}}const Tp=/;(?![^(]*\))/g,Ip=/:([^]+)/,Cp=/\/\*.*?\*\//gs;function _p(t){const e={};return t.replace(Cp,"").split(Tp).forEach(n=>{if(n){const s=n.split(Ip);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ti(t){let e="";if(Ce(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=ti(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=da(Sp);function bu(t){return!!t||t===""}const Gi=t=>Ce(t)?t:t==null?"":q(t)||ge(t)&&(t.toString===_u||!W(t.toString))?JSON.stringify(t,Tu,2):String(t),Tu=(t,e)=>e&&e.__v_isRef?Tu(t,e.value):Vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Iu(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!q(e)&&!Su(e)?String(e):e,le={},Pn=[],ft=()=>{},Dp=()=>!1,xp=/^on[^a-z]/,ni=t=>xp.test(t),pa=t=>t.startsWith("onUpdate:"),He=Object.assign,ga=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Np=Object.prototype.hasOwnProperty,Z=(t,e)=>Np.call(t,e),q=Array.isArray,Vn=t=>si(t)==="[object Map]",Iu=t=>si(t)==="[object Set]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",ma=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Cu=t=>ge(t)&&W(t.then)&&W(t.catch),_u=Object.prototype.toString,si=t=>_u.call(t),kp=t=>si(t).slice(8,-1),Su=t=>si(t)==="[object Object]",ya=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,br=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rp=/-(\w)/g,qn=ri(t=>t.replace(Rp,(e,n)=>n?n.toUpperCase():"")),Op=/\B([A-Z])/g,es=ri(t=>t.replace(Op,"-$1").toLowerCase()),Au=ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qi=ri(t=>t?`on${Au(t)}`:""),As=(t,e)=>!Object.is(t,e),Tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pc;const Mp=()=>Pc||(Pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vt;class Lp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Fp(t,e=vt){e&&e.active&&e.effects.push(t)}const va=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Du=t=>(t.w&Wt)>0,xu=t=>(t.n&Wt)>0,Pp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wt},Vp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Du(r)&&!xu(r)?r.delete(t):e[n++]=r,r.w&=~Wt,r.n&=~Wt}e.length=n}},To=new WeakMap;let fs=0,Wt=1;const Io=30;let ut;const vn=Symbol(""),Co=Symbol("");class wa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fp(this,s)}run(){if(!this.active)return this.fn();let e=ut,n=Bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,Bt=!0,Wt=1<<++fs,fs<=Io?Pp(this):Vc(this),this.fn()}finally{fs<=Io&&Vp(this),Wt=1<<--fs,ut=this.parent,Bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Vc(this),this.onStop&&this.onStop(),this.active=!1)}}function Vc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bt=!0;const Nu=[];function ts(){Nu.push(Bt),Bt=!1}function ns(){const t=Nu.pop();Bt=t===void 0?!0:t}function tt(t,e,n){if(Bt&&ut){let s=To.get(t);s||To.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=va()),ku(r)}}function ku(t,e){let n=!1;fs<=Io?xu(t)||(t.n|=Wt,n=!Du(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Rt(t,e,n,s,r,i){const o=To.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Nr(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?ya(n)&&a.push(o.get("length")):(a.push(o.get(vn)),Vn(t)&&a.push(o.get(Co)));break;case"delete":q(t)||(a.push(o.get(vn)),Vn(t)&&a.push(o.get(Co)));break;case"set":Vn(t)&&a.push(o.get(vn));break}if(a.length===1)a[0]&&_o(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_o(va(c))}}function _o(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Uc(s);for(const s of n)s.computed||Uc(s)}function Uc(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Up=da("__proto__,__v_isRef,__isVue"),Ru=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ma)),$p=Ea(),Bp=Ea(!1,!0),jp=Ea(!0),$c=qp();function qp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)tt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const s=te(this)[e].apply(this,n);return ns(),s}}),t}function Ea(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ig:Pu:e?Fu:Lu).get(s))return s;const o=q(s);if(!t&&o&&Z($c,r))return Reflect.get($c,r,i);const a=Reflect.get(s,r,i);return(ma(r)?Ru.has(r):Up(r))||(t||tt(s,"get",r),e)?a:$e(a)?o&&ya(r)?a:a.value:ge(a)?t?Vu(a):Ia(a):a}}const Hp=Ou(),Kp=Ou(!0);function Ou(t=!1){return function(n,s,r,i){let o=n[s];if(Hn(o)&&$e(o)&&!$e(r))return!1;if(!t&&(!kr(r)&&!Hn(r)&&(o=te(o),r=te(r)),!q(n)&&$e(o)&&!$e(r)))return o.value=r,!0;const a=q(n)&&ya(s)?Number(s)<n.length:Z(n,s),c=Reflect.set(n,s,r,i);return n===te(i)&&(a?As(r,o)&&Rt(n,"set",s,r):Rt(n,"add",s,r)),c}}function zp(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Rt(t,"delete",e,void 0),s}function Wp(t,e){const n=Reflect.has(t,e);return(!ma(e)||!Ru.has(e))&&tt(t,"has",e),n}function Gp(t){return tt(t,"iterate",q(t)?"length":vn),Reflect.ownKeys(t)}const Mu={get:$p,set:Hp,deleteProperty:zp,has:Wp,ownKeys:Gp},Qp={get:jp,set(t,e){return!0},deleteProperty(t,e){return!0}},Yp=He({},Mu,{get:Bp,set:Kp}),ba=t=>t,ii=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(e!==i&&tt(r,"get",e),tt(r,"get",i));const{has:o}=ii(r),a=s?ba:n?_a:Ds;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(t!==r&&tt(s,"has",t),tt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function hr(t,e=!1){return t=t.__v_raw,!e&&tt(te(t),"iterate",vn),Reflect.get(t,"size",t)}function Bc(t){t=te(t);const e=te(this);return ii(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function jc(t,e){e=te(e);const n=te(this),{has:s,get:r}=ii(n);let i=s.call(n,t);i||(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?As(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function qc(t){const e=te(this),{has:n,get:s}=ii(e);let r=n.call(e,t);r||(t=te(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Rt(e,"delete",t,void 0),i}function Hc(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function fr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?ba:t?_a:Ds;return!t&&tt(a,"iterate",vn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function dr(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=Vn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ba:e?_a:Ds;return!e&&tt(i,"iterate",c?Co:vn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function Xp(){const t={get(i){return lr(this,i)},get size(){return hr(this)},has:ur,add:Bc,set:jc,delete:qc,clear:Hc,forEach:fr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return hr(this)},has:ur,add:Bc,set:jc,delete:qc,clear:Hc,forEach:fr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return hr(this,!0)},has(i){return ur.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:fr(!0,!1)},s={get(i){return lr(this,i,!0,!0)},get size(){return hr(this,!0)},has(i){return ur.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dr(i,!1,!1),n[i]=dr(i,!0,!1),e[i]=dr(i,!1,!0),s[i]=dr(i,!0,!0)}),[t,n,e,s]}const[Jp,Zp,eg,tg]=Xp();function Ta(t,e){const n=e?t?tg:eg:t?Zp:Jp;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,i)}const ng={get:Ta(!1,!1)},sg={get:Ta(!1,!0)},rg={get:Ta(!0,!1)},Lu=new WeakMap,Fu=new WeakMap,Pu=new WeakMap,ig=new WeakMap;function og(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ag(t){return t.__v_skip||!Object.isExtensible(t)?0:og(kp(t))}function Ia(t){return Hn(t)?t:Ca(t,!1,Mu,ng,Lu)}function cg(t){return Ca(t,!1,Yp,sg,Fu)}function Vu(t){return Ca(t,!0,Qp,rg,Pu)}function Ca(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ag(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Un(t){return Hn(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function Uu(t){return Un(t)||Hn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function $u(t){return xr(t,"__v_skip",!0),t}const Ds=t=>ge(t)?Ia(t):t,_a=t=>ge(t)?Vu(t):t;function Bu(t){Bt&&ut&&(t=te(t),ku(t.dep||(t.dep=va())))}function ju(t,e){t=te(t),t.dep&&_o(t.dep)}function $e(t){return!!(t&&t.__v_isRef===!0)}function lt(t){return lg(t,!1)}function lg(t,e){return $e(t)?t:new ug(t,e)}class ug{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Ds(e)}get value(){return Bu(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||Hn(e);e=n?e:te(e),As(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ds(e),ju(this))}}function hg(t){return $e(t)?t.value:t}const fg={get:(t,e,n)=>hg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function qu(t){return Un(t)?t:new Proxy(t,fg)}var Hu;class dg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Hu]=!1,this._dirty=!0,this.effect=new wa(e,()=>{this._dirty||(this._dirty=!0,ju(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return Bu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Hu="__v_isReadonly";function pg(t,e,n=!1){let s,r;const i=W(t);return i?(s=t,r=ft):(s=t.get,r=t.set),new dg(s,r,i||!r,n)}function jt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){oi(i,e,n)}return r}function it(t,e,n,s){if(W(t)){const i=jt(t,e,n,s);return i&&Cu(i)&&i.catch(o=>{oi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(it(t[i],e,n,s));return r}function oi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){jt(c,null,10,[t,o,a]);return}}gg(t,n,r,s)}function gg(t,e,n,s=!0){console.error(t)}let xs=!1,So=!1;const Ve=[];let Et=0;const $n=[];let xt=null,ln=0;const Ku=Promise.resolve();let Sa=null;function mg(t){const e=Sa||Ku;return t?e.then(this?t.bind(this):t):e}function yg(t){let e=Et+1,n=Ve.length;for(;e<n;){const s=e+n>>>1;Ns(Ve[s])<t?e=s+1:n=s}return e}function Aa(t){(!Ve.length||!Ve.includes(t,xs&&t.allowRecurse?Et+1:Et))&&(t.id==null?Ve.push(t):Ve.splice(yg(t.id),0,t),zu())}function zu(){!xs&&!So&&(So=!0,Sa=Ku.then(Gu))}function vg(t){const e=Ve.indexOf(t);e>Et&&Ve.splice(e,1)}function wg(t){q(t)?$n.push(...t):(!xt||!xt.includes(t,t.allowRecurse?ln+1:ln))&&$n.push(t),zu()}function Kc(t,e=xs?Et+1:0){for(;e<Ve.length;e++){const n=Ve[e];n&&n.pre&&(Ve.splice(e,1),e--,n())}}function Wu(t){if($n.length){const e=[...new Set($n)];if($n.length=0,xt){xt.push(...e);return}for(xt=e,xt.sort((n,s)=>Ns(n)-Ns(s)),ln=0;ln<xt.length;ln++)xt[ln]();xt=null,ln=0}}const Ns=t=>t.id==null?1/0:t.id,Eg=(t,e)=>{const n=Ns(t)-Ns(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gu(t){So=!1,xs=!0,Ve.sort(Eg);const e=ft;try{for(Et=0;Et<Ve.length;Et++){const n=Ve[Et];n&&n.active!==!1&&jt(n,null,14)}}finally{Et=0,Ve.length=0,Wu(),xs=!1,Sa=null,(Ve.length||$n.length)&&Gu()}}function bg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||le;p&&(r=n.map(g=>Ce(g)?g.trim():g)),f&&(r=n.map(Nr))}let a,c=s[a=Qi(e)]||s[a=Qi(qn(e))];!c&&i&&(c=s[a=Qi(es(e))]),c&&it(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(l,t,6,r)}}function Qu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Qu(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ge(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):He(o,i),ge(t)&&s.set(t,o),o)}function ai(t,e){return!t||!ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,es(e))||Z(t,e))}let Be=null,ci=null;function Rr(t){const e=Be;return Be=t,ci=t&&t.type.__scopeId||null,e}function Tg(t){ci=t}function Ig(){ci=null}function Yu(t,e=Be,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&tl(-1);const i=Rr(e);let o;try{o=t(...r)}finally{Rr(i),s._d&&tl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:I,inheritAttrs:E}=t;let O,H;const ee=Rr(t);try{if(n.shapeFlag&4){const X=r||s;O=wt(u.call(X,X,f,i,g,p,I)),H=c}else{const X=e;O=wt(X.length>1?X(i,{attrs:c,slots:a,emit:l}):X(i,null)),H=e.props?c:Cg(c)}}catch(X){ws.length=0,oi(X,t,1),O=kt(Tt)}let V=O;if(H&&E!==!1){const X=Object.keys(H),{shapeFlag:de}=V;X.length&&de&7&&(o&&X.some(pa)&&(H=_g(H,o)),V=Gt(V,H))}return n.dirs&&(V=Gt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,Rr(ee),O}const Cg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ni(n))&&((e||(e={}))[n]=t[n]);return e},_g=(t,e)=>{const n={};for(const s in t)(!pa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!ai(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zc(s,o,l):!0:!!o;return!1}function zc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ai(n,i))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dg=t=>t.__isSuspense;function xg(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):wg(t)}function Ng(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Ir(t,e,n=!1){const s=Re||Be;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const pr={};function Xi(t,e,n){return Xu(t,e,n)}function Xu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=le){const a=Re;let c,l=!1,u=!1;if($e(t)?(c=()=>t.value,l=kr(t)):Un(t)?(c=()=>t,s=!0):q(t)?(u=!0,l=t.some(V=>Un(V)||kr(V)),c=()=>t.map(V=>{if($e(V))return V.value;if(Un(V))return dn(V);if(W(V))return jt(V,a,2)})):W(t)?e?c=()=>jt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),it(t,a,3,[p])}:c=ft,e&&s){const V=c;c=()=>dn(V())}let f,p=V=>{f=H.onStop=()=>{jt(V,a,4)}},g;if(Rs)if(p=ft,e?n&&it(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const V=Sm();g=V.__watcherHandles||(V.__watcherHandles=[])}else return ft;let I=u?new Array(t.length).fill(pr):pr;const E=()=>{if(H.active)if(e){const V=H.run();(s||l||(u?V.some((X,de)=>As(X,I[de])):As(V,I)))&&(f&&f(),it(e,a,3,[V,I===pr?void 0:u&&I[0]===pr?[]:I,p]),I=V)}else H.run()};E.allowRecurse=!!e;let O;r==="sync"?O=E:r==="post"?O=()=>Qe(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),O=()=>Aa(E));const H=new wa(c,O);e?n?E():I=H.run():r==="post"?Qe(H.run.bind(H),a&&a.suspense):H.run();const ee=()=>{H.stop(),a&&a.scope&&ga(a.scope.effects,H)};return g&&g.push(ee),ee}function kg(t,e,n){const s=this.proxy,r=Ce(t)?t.includes(".")?Ju(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=Re;Kn(this);const a=Xu(r,i.bind(s),n);return o?Kn(o):wn(),a}function Ju(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function dn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))dn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)dn(t[n],e);else if(Iu(t)||Vn(t))t.forEach(n=>{dn(n,e)});else if(Su(t))for(const n in t)dn(t[n],e);return t}function Rg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nh(()=>{t.isMounted=!0}),sh(()=>{t.isUnmounting=!0}),t}const rt=[Function,Array],Og={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},setup(t,{slots:e}){const n=vm(),s=Rg();let r;return()=>{const i=e.default&&eh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==Tt){o=E;break}}const a=te(t),{mode:c}=a;if(s.isLeaving)return Ji(o);const l=Wc(o);if(!l)return Ji(o);const u=Ao(l,a,s,n);Do(l,u);const f=n.subTree,p=f&&Wc(f);let g=!1;const{getTransitionKey:I}=l.type;if(I){const E=I();r===void 0?r=E:E!==r&&(r=E,g=!0)}if(p&&p.type!==Tt&&(!un(l,p)||g)){const E=Ao(p,a,s,n);if(Do(p,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ji(o);c==="in-out"&&l.type!==Tt&&(E.delayLeave=(O,H,ee)=>{const V=Zu(s,p);V[String(p.key)]=p,O._leaveCb=()=>{H(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ee})}return o}}},Mg=Og;function Zu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ao(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:E,onAppear:O,onAfterAppear:H,onAppearCancelled:ee}=e,V=String(t.key),X=Zu(n,t),de=(z,pe)=>{z&&it(z,s,9,pe)},gt=(z,pe)=>{const re=pe[1];de(z,pe),q(z)?z.every(De=>De.length<=1)&&re():z.length<=1&&re()},Le={mode:i,persisted:o,beforeEnter(z){let pe=a;if(!n.isMounted)if(r)pe=E||a;else return;z._leaveCb&&z._leaveCb(!0);const re=X[V];re&&un(t,re)&&re.el._leaveCb&&re.el._leaveCb(),de(pe,[z])},enter(z){let pe=c,re=l,De=u;if(!n.isMounted)if(r)pe=O||c,re=H||l,De=ee||u;else return;let Ge=!1;const st=z._enterCb=sn=>{Ge||(Ge=!0,sn?de(De,[z]):de(re,[z]),Le.delayedLeave&&Le.delayedLeave(),z._enterCb=void 0)};pe?gt(pe,[z,st]):st()},leave(z,pe){const re=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return pe();de(f,[z]);let De=!1;const Ge=z._leaveCb=st=>{De||(De=!0,pe(),st?de(I,[z]):de(g,[z]),z._leaveCb=void 0,X[re]===t&&delete X[re])};X[re]=t,p?gt(p,[z,Ge]):Ge()},clone(z){return Ao(z,e,n,s)}};return Le}function Ji(t){if(li(t))return t=Gt(t),t.children=null,t}function Wc(t){return li(t)?t.children?t.children[0]:void 0:t}function Do(t,e){t.shapeFlag&6&&t.component?Do(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&r++,s=s.concat(eh(o.children,e,a))):(e||o.type!==Tt)&&s.push(a!=null?Gt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const ys=t=>!!t.type.__asyncLoader,li=t=>t.type.__isKeepAlive;function Lg(t,e){th(t,"a",e)}function Fg(t,e){th(t,"da",e)}function th(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ui(e,s,n),n){let r=n.parent;for(;r&&r.parent;)li(r.parent.vnode)&&Pg(s,e,n,r),r=r.parent}}function Pg(t,e,n,s){const r=ui(e,t,s,!0);rh(()=>{ga(s[e],r)},n)}function ui(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts(),Kn(n);const a=it(e,n,t,o);return wn(),ns(),a});return s?r.unshift(i):r.push(i),i}}const Vt=t=>(e,n=Re)=>(!Rs||t==="sp")&&ui(t,(...s)=>e(...s),n),Vg=Vt("bm"),nh=Vt("m"),Ug=Vt("bu"),$g=Vt("u"),sh=Vt("bum"),rh=Vt("um"),Bg=Vt("sp"),jg=Vt("rtg"),qg=Vt("rtc");function Hg(t,e=Re){ui("ec",t,e)}function Gc(t,e){const n=Be;if(n===null)return t;const s=di(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=le]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&dn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ts(),it(c,n,8,[t.el,a,t,e]),ns())}}const Kg=Symbol();function zg(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Ce(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Wg(t,e,n={},s,r){if(Be.isCE||Be.parent&&ys(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),kt("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Es();const o=i&&ih(i(n)),a=gh(Ye,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ih(t){return t.some(e=>mh(e)?!(e.type===Tt||e.type===Ye&&!ih(e.children)):!0)?t:null}const xo=t=>t?vh(t)?di(t)||t.proxy:xo(t.parent):null,vs=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xo(t.parent),$root:t=>xo(t.root),$emit:t=>t.emit,$options:t=>Da(t),$forceUpdate:t=>t.f||(t.f=()=>Aa(t.update)),$nextTick:t=>t.n||(t.n=mg.bind(t.proxy)),$watch:t=>kg.bind(t)}),Zi=(t,e)=>t!==le&&!t.__isScriptSetup&&Z(t,e),Gg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Zi(s,e))return o[e]=1,s[e];if(r!==le&&Z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==le&&Z(n,e))return o[e]=4,n[e];No&&(o[e]=0)}}const u=vs[e];let f,p;if(u)return e==="$attrs"&&tt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&Z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Zi(r,e)?(r[e]=n,!0):s!==le&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Z(t,o)||Zi(e,o)||(a=i[0])&&Z(a,o)||Z(s,o)||Z(vs,o)||Z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let No=!0;function Qg(t){const e=Da(t),n=t.proxy,s=t.ctx;No=!1,e.beforeCreate&&Qc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:I,activated:E,deactivated:O,beforeDestroy:H,beforeUnmount:ee,destroyed:V,unmounted:X,render:de,renderTracked:gt,renderTriggered:Le,errorCaptured:z,serverPrefetch:pe,expose:re,inheritAttrs:De,components:Ge,directives:st,filters:sn}=e;if(l&&Yg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const A=o[ue];W(A)&&(s[ue]=A.bind(n))}if(r){const ue=r.call(n,n);ge(ue)&&(t.data=Ia(ue))}if(No=!0,i)for(const ue in i){const A=i[ue],k=W(A)?A.bind(n,n):W(A.get)?A.get.bind(n,n):ft,oe=!W(A)&&W(A.set)?A.set.bind(n):ft,me=Cm({get:k,set:oe});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ne=>me.value=Ne})}if(a)for(const ue in a)oh(a[ue],s,n,ue);if(c){const ue=W(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(A=>{Ng(A,ue[A])})}u&&Qc(u,t,"c");function xe(ue,A){q(A)?A.forEach(k=>ue(k.bind(n))):A&&ue(A.bind(n))}if(xe(Vg,f),xe(nh,p),xe(Ug,g),xe($g,I),xe(Lg,E),xe(Fg,O),xe(Hg,z),xe(qg,gt),xe(jg,Le),xe(sh,ee),xe(rh,X),xe(Bg,pe),q(re))if(re.length){const ue=t.exposed||(t.exposed={});re.forEach(A=>{Object.defineProperty(ue,A,{get:()=>n[A],set:k=>n[A]=k})})}else t.exposed||(t.exposed={});de&&t.render===ft&&(t.render=de),De!=null&&(t.inheritAttrs=De),Ge&&(t.components=Ge),st&&(t.directives=st)}function Yg(t,e,n=ft,s=!1){q(t)&&(t=ko(t));for(const r in t){const i=t[r];let o;ge(i)?"default"in i?o=Ir(i.from||r,i.default,!0):o=Ir(i.from||r):o=Ir(i),$e(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Qc(t,e,n){it(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oh(t,e,n,s){const r=s.includes(".")?Ju(n,s):()=>n[s];if(Ce(t)){const i=e[t];W(i)&&Xi(r,i)}else if(W(t))Xi(r,t.bind(n));else if(ge(t))if(q(t))t.forEach(i=>oh(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Xi(r,i,t)}}function Da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Or(c,l,o,!0)),Or(c,e,o)),ge(e)&&i.set(e,c),c}function Or(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Or(t,i,n,!0),r&&r.forEach(o=>Or(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xg={data:Yc,props:an,emits:an,methods:an,computed:an,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:an,directives:an,watch:Zg,provide:Yc,inject:Jg};function Yc(t,e){return e?t?function(){return He(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Jg(t,e){return an(ko(t),ko(e))}function ko(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?He(He(Object.create(null),t),e):e}function Zg(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function em(t,e,n,s=!1){const r={},i={};xr(i,fi,1),t.propsDefaults=Object.create(null),ah(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function tm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ai(t.emitsOptions,p))continue;const g=e[p];if(c)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const I=qn(p);r[I]=Ro(c,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{ah(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=es(f))===f||!Z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ro(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&Rt(t,"set","$attrs")}function ah(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(br(c))continue;const l=e[c];let u;r&&Z(r,u=qn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ai(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ro(r,c,f,l[f],t,!Z(l,f))}}return o}function Ro(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Kn(r),s=l[n]=c.call(null,e),wn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===es(n))&&(s=!0))}return s}function ch(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[p,g]=ch(f,e,!0);He(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ge(t)&&s.set(t,Pn),Pn;if(q(i))for(let u=0;u<i.length;u++){const f=qn(i[u]);Xc(f)&&(o[f]=le)}else if(i)for(const u in i){const f=qn(u);if(Xc(f)){const p=i[u],g=o[f]=q(p)||W(p)?{type:p}:Object.assign({},p);if(g){const I=el(Boolean,g.type),E=el(String,g.type);g[0]=I>-1,g[1]=E<0||I<E,(I>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return ge(t)&&s.set(t,l),l}function Xc(t){return t[0]!=="$"}function Jc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Zc(t,e){return Jc(t)===Jc(e)}function el(t,e){return q(e)?e.findIndex(n=>Zc(n,t)):W(e)&&Zc(e,t)?0:-1}const lh=t=>t[0]==="_"||t==="$stable",xa=t=>q(t)?t.map(wt):[wt(t)],nm=(t,e,n)=>{if(e._n)return e;const s=Yu((...r)=>xa(e(...r)),n);return s._c=!1,s},uh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lh(r))continue;const i=t[r];if(W(i))e[r]=nm(r,i,s);else if(i!=null){const o=xa(i);e[r]=()=>o}}},hh=(t,e)=>{const n=xa(e);t.slots.default=()=>n},sm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),xr(e,"_",n)):uh(e,t.slots={})}else t.slots={},e&&hh(t,e);xr(t.slots,fi,1)},rm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(He(r,e),!n&&a===1&&delete r._):(i=!e.$stable,uh(e,r)),o=e}else e&&(hh(t,e),o={default:1});if(i)for(const a in r)!lh(a)&&!(a in o)&&delete r[a]};function fh(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let im=0;function om(t,e){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!ge(r)&&(r=null);const i=fh(),o=new Set;let a=!1;const c=i.app={_uid:im++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Am,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=kt(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,di(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Oo(t,e,n,s,r=!1){if(q(t)){t.forEach((p,g)=>Oo(p,e&&(q(e)?e[g]:e),n,s,r));return}if(ys(s)&&!r)return;const i=s.shapeFlag&4?di(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ce(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):$e(l)&&(l.value=null)),W(c))jt(c,a,12,[o,u]);else{const p=Ce(c),g=$e(c);if(p||g){const I=()=>{if(t.f){const E=p?Z(f,c)?f[c]:u[c]:c.value;r?q(E)&&ga(E,i):q(E)?E.includes(i)||E.push(i):p?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Qe(I,n)):I()}}}const Qe=xg;function am(t){return cm(t)}function cm(t,e){const n=Mp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ft,insertStaticContent:I}=t,E=(h,d,m,v=null,y=null,_=null,D=!1,C=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!un(h,d)&&(v=cr(h),Ne(h,y,_,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:x}=d;switch(w){case hi:O(h,d,m,v);break;case Tt:H(h,d,m,v);break;case eo:h==null&&ee(d,m,v,D);break;case Ye:Ge(h,d,m,v,y,_,D,C,S);break;default:x&1?de(h,d,m,v,y,_,D,C,S):x&6?st(h,d,m,v,y,_,D,C,S):(x&64||x&128)&&w.process(h,d,m,v,y,_,D,C,S,kn)}M!=null&&y&&Oo(M,h&&h.ref,_,d||h,!d)},O=(h,d,m,v)=>{if(h==null)s(d.el=a(d.children),m,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},H=(h,d,m,v)=>{h==null?s(d.el=c(d.children||""),m,v):d.el=h.el},ee=(h,d,m,v)=>{[h.el,h.anchor]=I(h.children,d,m,v,h.el,h.anchor)},V=({el:h,anchor:d},m,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,m,v),h=y;s(d,m,v)},X=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},de=(h,d,m,v,y,_,D,C,S)=>{D=D||d.type==="svg",h==null?gt(d,m,v,y,_,D,C,S):pe(h,d,y,_,D,C,S)},gt=(h,d,m,v,y,_,D,C)=>{let S,w;const{type:M,props:x,shapeFlag:L,transition:B,dirs:Q}=h;if(S=h.el=o(h.type,_,x&&x.is,x),L&8?u(S,h.children):L&16&&z(h.children,S,null,v,y,_&&M!=="foreignObject",D,C),Q&&rn(h,null,v,"created"),x){for(const ie in x)ie!=="value"&&!br(ie)&&i(S,ie,null,x[ie],_,h.children,v,y,Dt);"value"in x&&i(S,"value",null,x.value),(w=x.onVnodeBeforeMount)&&yt(w,v,h)}Le(S,h,h.scopeId,D,v),Q&&rn(h,null,v,"beforeMount");const ae=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;ae&&B.beforeEnter(S),s(S,d,m),((w=x&&x.onVnodeMounted)||ae||Q)&&Qe(()=>{w&&yt(w,v,h),ae&&B.enter(S),Q&&rn(h,null,v,"mounted")},y)},Le=(h,d,m,v,y)=>{if(m&&g(h,m),v)for(let _=0;_<v.length;_++)g(h,v[_]);if(y){let _=y.subTree;if(d===_){const D=y.vnode;Le(h,D,D.scopeId,D.slotScopeIds,y.parent)}}},z=(h,d,m,v,y,_,D,C,S=0)=>{for(let w=S;w<h.length;w++){const M=h[w]=C?$t(h[w]):wt(h[w]);E(null,M,d,m,v,y,_,D,C)}},pe=(h,d,m,v,y,_,D)=>{const C=d.el=h.el;let{patchFlag:S,dynamicChildren:w,dirs:M}=d;S|=h.patchFlag&16;const x=h.props||le,L=d.props||le;let B;m&&on(m,!1),(B=L.onVnodeBeforeUpdate)&&yt(B,m,d,h),M&&rn(d,h,m,"beforeUpdate"),m&&on(m,!0);const Q=y&&d.type!=="foreignObject";if(w?re(h.dynamicChildren,w,C,m,v,Q,_):D||A(h,d,C,null,m,v,Q,_,!1),S>0){if(S&16)De(C,d,x,L,m,v,y);else if(S&2&&x.class!==L.class&&i(C,"class",null,L.class,y),S&4&&i(C,"style",x.style,L.style,y),S&8){const ae=d.dynamicProps;for(let ie=0;ie<ae.length;ie++){const ve=ae[ie],ct=x[ve],Rn=L[ve];(Rn!==ct||ve==="value")&&i(C,ve,ct,Rn,y,h.children,m,v,Dt)}}S&1&&h.children!==d.children&&u(C,d.children)}else!D&&w==null&&De(C,d,x,L,m,v,y);((B=L.onVnodeUpdated)||M)&&Qe(()=>{B&&yt(B,m,d,h),M&&rn(d,h,m,"updated")},v)},re=(h,d,m,v,y,_,D)=>{for(let C=0;C<d.length;C++){const S=h[C],w=d[C],M=S.el&&(S.type===Ye||!un(S,w)||S.shapeFlag&70)?f(S.el):m;E(S,w,M,null,v,y,_,D,!0)}},De=(h,d,m,v,y,_,D)=>{if(m!==v){if(m!==le)for(const C in m)!br(C)&&!(C in v)&&i(h,C,m[C],null,D,d.children,y,_,Dt);for(const C in v){if(br(C))continue;const S=v[C],w=m[C];S!==w&&C!=="value"&&i(h,C,w,S,D,d.children,y,_,Dt)}"value"in v&&i(h,"value",m.value,v.value)}},Ge=(h,d,m,v,y,_,D,C,S)=>{const w=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:B}=d;B&&(C=C?C.concat(B):B),h==null?(s(w,m,v),s(M,m,v),z(d.children,m,M,y,_,D,C,S)):x>0&&x&64&&L&&h.dynamicChildren?(re(h.dynamicChildren,L,m,y,_,D,C),(d.key!=null||y&&d===y.subTree)&&dh(h,d,!0)):A(h,d,m,M,y,_,D,C,S)},st=(h,d,m,v,y,_,D,C,S)=>{d.slotScopeIds=C,h==null?d.shapeFlag&512?y.ctx.activate(d,m,v,D,S):sn(d,m,v,y,_,D,S):cs(h,d,S)},sn=(h,d,m,v,y,_,D)=>{const C=h.component=ym(h,v,y);if(li(h)&&(C.ctx.renderer=kn),wm(C),C.asyncDep){if(y&&y.registerDep(C,xe),!h.el){const S=C.subTree=kt(Tt);H(null,S,d,m)}return}xe(C,h,d,m,y,_,D)},cs=(h,d,m)=>{const v=d.component=h.component;if(Sg(h,d,m))if(v.asyncDep&&!v.asyncResolved){ue(v,d,m);return}else v.next=d,vg(v.update),v.update();else d.el=h.el,v.vnode=d},xe=(h,d,m,v,y,_,D)=>{const C=()=>{if(h.isMounted){let{next:M,bu:x,u:L,parent:B,vnode:Q}=h,ae=M,ie;on(h,!1),M?(M.el=Q.el,ue(h,M,D)):M=Q,x&&Tr(x),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&yt(ie,B,M,Q),on(h,!0);const ve=Yi(h),ct=h.subTree;h.subTree=ve,E(ct,ve,f(ct.el),cr(ct),h,y,_),M.el=ve.el,ae===null&&Ag(h,ve.el),L&&Qe(L,y),(ie=M.props&&M.props.onVnodeUpdated)&&Qe(()=>yt(ie,B,M,Q),y)}else{let M;const{el:x,props:L}=d,{bm:B,m:Q,parent:ae}=h,ie=ys(d);if(on(h,!1),B&&Tr(B),!ie&&(M=L&&L.onVnodeBeforeMount)&&yt(M,ae,d),on(h,!0),x&&Wi){const ve=()=>{h.subTree=Yi(h),Wi(x,h.subTree,h,y,null)};ie?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{const ve=h.subTree=Yi(h);E(null,ve,m,v,h,y,_),d.el=ve.el}if(Q&&Qe(Q,y),!ie&&(M=L&&L.onVnodeMounted)){const ve=d;Qe(()=>yt(M,ae,ve),y)}(d.shapeFlag&256||ae&&ys(ae.vnode)&&ae.vnode.shapeFlag&256)&&h.a&&Qe(h.a,y),h.isMounted=!0,d=m=v=null}},S=h.effect=new wa(C,()=>Aa(w),h.scope),w=h.update=()=>S.run();w.id=h.uid,on(h,!0),w()},ue=(h,d,m)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,tm(h,d.props,v,m),rm(h,d.children,m),ts(),Kc(),ns()},A=(h,d,m,v,y,_,D,C,S=!1)=>{const w=h&&h.children,M=h?h.shapeFlag:0,x=d.children,{patchFlag:L,shapeFlag:B}=d;if(L>0){if(L&128){oe(w,x,m,v,y,_,D,C,S);return}else if(L&256){k(w,x,m,v,y,_,D,C,S);return}}B&8?(M&16&&Dt(w,y,_),x!==w&&u(m,x)):M&16?B&16?oe(w,x,m,v,y,_,D,C,S):Dt(w,y,_,!0):(M&8&&u(m,""),B&16&&z(x,m,v,y,_,D,C,S))},k=(h,d,m,v,y,_,D,C,S)=>{h=h||Pn,d=d||Pn;const w=h.length,M=d.length,x=Math.min(w,M);let L;for(L=0;L<x;L++){const B=d[L]=S?$t(d[L]):wt(d[L]);E(h[L],B,m,null,y,_,D,C,S)}w>M?Dt(h,y,_,!0,!1,x):z(d,m,v,y,_,D,C,S,x)},oe=(h,d,m,v,y,_,D,C,S)=>{let w=0;const M=d.length;let x=h.length-1,L=M-1;for(;w<=x&&w<=L;){const B=h[w],Q=d[w]=S?$t(d[w]):wt(d[w]);if(un(B,Q))E(B,Q,m,null,y,_,D,C,S);else break;w++}for(;w<=x&&w<=L;){const B=h[x],Q=d[L]=S?$t(d[L]):wt(d[L]);if(un(B,Q))E(B,Q,m,null,y,_,D,C,S);else break;x--,L--}if(w>x){if(w<=L){const B=L+1,Q=B<M?d[B].el:v;for(;w<=L;)E(null,d[w]=S?$t(d[w]):wt(d[w]),m,Q,y,_,D,C,S),w++}}else if(w>L)for(;w<=x;)Ne(h[w],y,_,!0),w++;else{const B=w,Q=w,ae=new Map;for(w=Q;w<=L;w++){const Je=d[w]=S?$t(d[w]):wt(d[w]);Je.key!=null&&ae.set(Je.key,w)}let ie,ve=0;const ct=L-Q+1;let Rn=!1,Mc=0;const us=new Array(ct);for(w=0;w<ct;w++)us[w]=0;for(w=B;w<=x;w++){const Je=h[w];if(ve>=ct){Ne(Je,y,_,!0);continue}let mt;if(Je.key!=null)mt=ae.get(Je.key);else for(ie=Q;ie<=L;ie++)if(us[ie-Q]===0&&un(Je,d[ie])){mt=ie;break}mt===void 0?Ne(Je,y,_,!0):(us[mt-Q]=w+1,mt>=Mc?Mc=mt:Rn=!0,E(Je,d[mt],m,null,y,_,D,C,S),ve++)}const Lc=Rn?lm(us):Pn;for(ie=Lc.length-1,w=ct-1;w>=0;w--){const Je=Q+w,mt=d[Je],Fc=Je+1<M?d[Je+1].el:v;us[w]===0?E(null,mt,m,Fc,y,_,D,C,S):Rn&&(ie<0||w!==Lc[ie]?me(mt,m,Fc,2):ie--)}}},me=(h,d,m,v,y=null)=>{const{el:_,type:D,transition:C,children:S,shapeFlag:w}=h;if(w&6){me(h.component.subTree,d,m,v);return}if(w&128){h.suspense.move(d,m,v);return}if(w&64){D.move(h,d,m,kn);return}if(D===Ye){s(_,d,m);for(let x=0;x<S.length;x++)me(S[x],d,m,v);s(h.anchor,d,m);return}if(D===eo){V(h,d,m);return}if(v!==2&&w&1&&C)if(v===0)C.beforeEnter(_),s(_,d,m),Qe(()=>C.enter(_),y);else{const{leave:x,delayLeave:L,afterLeave:B}=C,Q=()=>s(_,d,m),ae=()=>{x(_,()=>{Q(),B&&B()})};L?L(_,Q,ae):ae()}else s(_,d,m)},Ne=(h,d,m,v=!1,y=!1)=>{const{type:_,props:D,ref:C,children:S,dynamicChildren:w,shapeFlag:M,patchFlag:x,dirs:L}=h;if(C!=null&&Oo(C,null,m,h,!0),M&256){d.ctx.deactivate(h);return}const B=M&1&&L,Q=!ys(h);let ae;if(Q&&(ae=D&&D.onVnodeBeforeUnmount)&&yt(ae,d,h),M&6)bp(h.component,m,v);else{if(M&128){h.suspense.unmount(m,v);return}B&&rn(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,m,y,kn,v):w&&(_!==Ye||x>0&&x&64)?Dt(w,d,m,!1,!0):(_===Ye&&x&384||!y&&M&16)&&Dt(S,d,m),v&&ls(h)}(Q&&(ae=D&&D.onVnodeUnmounted)||B)&&Qe(()=>{ae&&yt(ae,d,h),B&&rn(h,null,d,"unmounted")},m)},ls=h=>{const{type:d,el:m,anchor:v,transition:y}=h;if(d===Ye){Ki(m,v);return}if(d===eo){X(h);return}const _=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:D,delayLeave:C}=y,S=()=>D(m,_);C?C(h.el,_,S):S()}else _()},Ki=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},bp=(h,d,m)=>{const{bum:v,scope:y,update:_,subTree:D,um:C}=h;v&&Tr(v),y.stop(),_&&(_.active=!1,Ne(D,h,d,m)),C&&Qe(C,d),Qe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Dt=(h,d,m,v=!1,y=!1,_=0)=>{for(let D=_;D<h.length;D++)Ne(h[D],d,m,v,y)},cr=h=>h.shapeFlag&6?cr(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Oc=(h,d,m)=>{h==null?d._vnode&&Ne(d._vnode,null,null,!0):E(d._vnode||null,h,d,null,null,null,m),Kc(),Wu(),d._vnode=h},kn={p:E,um:Ne,m:me,r:ls,mt:sn,mc:z,pc:A,pbc:re,n:cr,o:t};let zi,Wi;return e&&([zi,Wi]=e(kn)),{render:Oc,hydrate:zi,createApp:om(Oc,zi)}}function on({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dh(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=$t(r[i]),a.el=o.el),n||dh(o,a)),a.type===hi&&(a.el=o.el)}}function lm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const um=t=>t.__isTeleport,Ye=Symbol(void 0),hi=Symbol(void 0),Tt=Symbol(void 0),eo=Symbol(void 0),ws=[];let ht=null;function Es(t=!1){ws.push(ht=t?null:[])}function hm(){ws.pop(),ht=ws[ws.length-1]||null}let ks=1;function tl(t){ks+=t}function ph(t){return t.dynamicChildren=ks>0?ht||Pn:null,hm(),ks>0&&ht&&ht.push(t),t}function Mo(t,e,n,s,r,i){return ph(G(t,e,n,s,r,i,!0))}function gh(t,e,n,s,r){return ph(kt(t,e,n,s,r,!0))}function mh(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const fi="__vInternal",yh=({key:t})=>t??null,Cr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||$e(t)||W(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function G(t,e=null,n=null,s=0,r=null,i=t===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yh(e),ref:e&&Cr(e),scopeId:ci,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return a?(Na(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),ks>0&&!o&&ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ht.push(c),c}const kt=fm;function fm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Kg)&&(t=Tt),mh(t)){const a=Gt(t,e,!0);return n&&Na(a,n),ks>0&&!i&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Im(t)&&(t=t.__vccOpts),e){e=dm(e);let{class:a,style:c}=e;a&&!Ce(a)&&(e.class=ti(a)),ge(c)&&(Uu(c)&&!q(c)&&(c=He({},c)),e.style=ei(c))}const o=Ce(t)?1:Dg(t)?128:um(t)?64:ge(t)?4:W(t)?2:0;return G(t,e,n,s,r,o,i,!0)}function dm(t){return t?Uu(t)||fi in t?He({},t):t:null}function Gt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?pm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yh(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Cr(e)):[r,Cr(e)]:Cr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function hn(t=" ",e=0){return kt(hi,null,t,e)}function wt(t){return t==null||typeof t=="boolean"?kt(Tt):q(t)?kt(Ye,null,t.slice()):typeof t=="object"?$t(t):kt(hi,null,String(t))}function $t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gt(t)}function Na(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Na(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(fi in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function pm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ti([e.class,s.class]));else if(r==="style")e.style=ei([e.style,s.style]);else if(ni(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yt(t,e,n,s=null){it(t,e,7,[n,s])}const gm=fh();let mm=0;function ym(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gm,i={uid:mm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(s,r),emitsOptions:Qu(s,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bg.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const vm=()=>Re||Be,Kn=t=>{Re=t,t.scope.on()},wn=()=>{Re&&Re.scope.off(),Re=null};function vh(t){return t.vnode.shapeFlag&4}let Rs=!1;function wm(t,e=!1){Rs=e;const{props:n,children:s}=t.vnode,r=vh(t);em(t,n,r,e),sm(t,s);const i=r?Em(t,e):void 0;return Rs=!1,i}function Em(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$u(new Proxy(t.ctx,Gg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Tm(t):null;Kn(t),ts();const i=jt(s,t,0,[t.props,r]);if(ns(),wn(),Cu(i)){if(i.then(wn,wn),e)return i.then(o=>{nl(t,o,e)}).catch(o=>{oi(o,t,0)});t.asyncDep=i}else nl(t,i,e)}else wh(t,e)}function nl(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=qu(e)),wh(t,n)}let sl;function wh(t,e,n){const s=t.type;if(!t.render){if(!e&&sl&&!s.render){const r=s.template||Da(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=He(He({isCustomElement:i,delimiters:a},o),c);s.render=sl(r,l)}}t.render=s.render||ft}Kn(t),ts(),Qg(t),ns(),wn()}function bm(t){return new Proxy(t.attrs,{get(e,n){return tt(t,"get","$attrs"),e[n]}})}function Tm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=bm(t))},slots:t.slots,emit:t.emit,expose:e}}function di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qu($u(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vs)return vs[n](t)},has(e,n){return n in e||n in vs}}))}function Im(t){return W(t)&&"__vccOpts"in t}const Cm=(t,e)=>pg(t,e,Rs),_m=Symbol(""),Sm=()=>Ir(_m),Am="3.2.45",Dm="http://www.w3.org/2000/svg",fn=typeof document<"u"?document:null,rl=fn&&fn.createElement("template"),xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?fn.createElementNS(Dm,t):fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{rl.innerHTML=s?`<svg>${t}</svg>`:t;const a=rl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Nm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function km(t,e,n){const s=t.style,r=Ce(n);if(n&&!r){for(const i in n)Lo(s,i,n[i]);if(e&&!Ce(e))for(const i in e)n[i]==null&&Lo(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const il=/\s*!important$/;function Lo(t,e,n){if(q(n))n.forEach(s=>Lo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rm(t,e);il.test(n)?t.setProperty(es(s),n.replace(il,""),"important"):t[s]=n}}const ol=["Webkit","Moz","ms"],to={};function Rm(t,e){const n=to[e];if(n)return n;let s=qn(e);if(s!=="filter"&&s in t)return to[e]=s;s=Au(s);for(let r=0;r<ol.length;r++){const i=ol[r]+s;if(i in t)return to[e]=i}return e}const al="http://www.w3.org/1999/xlink";function Om(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(al,e.slice(6,e.length)):t.setAttributeNS(al,e,n);else{const i=Ap(e);n==null||i&&!bu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function On(t,e,n,s){t.addEventListener(e,n,s)}function Lm(t,e,n,s){t.removeEventListener(e,n,s)}function Fm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pm(e);if(s){const l=i[e]=$m(s,r);On(t,a,l,c)}else o&&(Lm(t,a,o,c),i[e]=void 0)}}const cl=/(?:Once|Passive|Capture)$/;function Pm(t){let e;if(cl.test(t)){e={};let s;for(;s=t.match(cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let no=0;const Vm=Promise.resolve(),Um=()=>no||(Vm.then(()=>no=0),no=Date.now());function $m(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(Bm(s,n.value),e,5,[s])};return n.value=t,n.attached=Um(),n}function Bm(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ll=/^on[a-z]/,jm=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Nm(t,s,r):e==="style"?km(t,n,s):ni(e)?pa(e)||Fm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qm(t,e,s,r))?Mm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Om(t,e,s,r))};function qm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ll.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ll.test(e)&&Ce(n)?!1:e in t}const Hm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mg.props;const ul=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Tr(e,n):e};function Km(t){t.target.composing=!0}function hl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ul(r);const i=s||r.props&&r.props.type==="number";On(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Nr(a)),t._assign(a)}),n&&On(t,"change",()=>{t.value=t.value.trim()}),e||(On(t,"compositionstart",Km),On(t,"compositionend",hl),On(t,"change",hl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ul(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Nr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zm=He({patchProp:jm},xm);let dl;function Wm(){return dl||(dl=am(zm))}const Gm=(...t)=>{const e=Wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qm(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qm(t){return Ce(t)?document.querySelector(t):t}const Eh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Ym={class:"name"},Xm={class:"content"},Jm={class:"ImageBase64"},Zm=["src"],ey={class:"date"},ty={__name:"Card",props:{cardKey:String,cardInfo:Object},setup(t){const e=n=>`left: ${n.X}px;top: ${n.Y}px;transform: rotate(${n.Deg}deg);`;return(n,s)=>(Es(),Mo("div",{class:ti(["card",{color01:t.cardInfo.Color==1,color02:t.cardInfo.Color==2,color03:t.cardInfo.Color==3,color04:t.cardInfo.Color==4,color05:t.cardInfo.Color==5}]),style:ei(e(t.cardInfo.Pos))},[Wg(n.$slots,"default",{},void 0,!0),G("div",Ym,[G("b",null,Gi(t.cardInfo.Name),1),hn(" 說")]),G("div",Xm,Gi(t.cardInfo.Content),1),G("div",Jm,[G("img",{src:t.cardInfo.ImageBase64,alt:""},null,8,Zm)]),G("div",ey,Gi(t.cardInfo.Date),1)],6))}},ny=Eh(ty,[["__scopeId","data-v-235364bb"]]);/**
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
 */const bh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const I=l<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ry=function(t){const e=bh(t);return Th.encodeByteArray(e,!0)},Mr=function(t){return ry(t).replace(/\./g,"")},iy=function(t){try{return Th.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function oy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ih(){try{return typeof indexedDB=="object"}catch{return!1}}function Ch(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ay(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ly=()=>cy().__FIREBASE_DEFAULTS__,uy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iy(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return ly()||uy()||hy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fy=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dy=t=>{const e=fy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},py=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config};/**
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
 */class gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function my(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),a].join(".")}/**
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
 */const yy="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yy,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zt(r,a,s)}}function vy(t,e){return t.replace(wy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wy=/\{\$([^}]+)}/g;function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(pl(i)&&pl(o)){if(!Lr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pl(t){return t!==null&&typeof t=="object"}/**
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
 */const Ey=1e3,by=2,Ty=4*60*60*1e3,Iy=.5;function gl(t,e=Ey,n=by){const s=e*Math.pow(n,t),r=Math.round(Iy*s*(Math.random()-.5)*2);return Math.min(Ty,s+r)}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class Cy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sy(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_y(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _y(t){return t===cn?void 0:t}function Sy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Dy={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},xy=ne.INFO,Ny={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ky=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ny[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=xy,this._logHandler=ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ry=(t,e)=>e.some(n=>t instanceof n);let ml,yl;function Oy(){return ml||(ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function My(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sh=new WeakMap,Fo=new WeakMap,Ah=new WeakMap,so=new WeakMap,Ra=new WeakMap;function Ly(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sh.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function Fy(t){if(Fo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fo.set(t,e)}let Po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ah.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Py(t){Po=t(Po)}function Vy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ro(this),e,...n);return Ah.set(s,e.sort?e.sort():[e]),qt(s)}:My().includes(t)?function(...e){return t.apply(ro(this),e),qt(Sh.get(this))}:function(...e){return qt(t.apply(ro(this),e))}}function Uy(t){return typeof t=="function"?Vy(t):(t instanceof IDBTransaction&&Fy(t),Ry(t,Oy())?new Proxy(t,Po):t)}function qt(t){if(t instanceof IDBRequest)return Ly(t);if(so.has(t))return so.get(t);const e=Uy(t);return e!==t&&(so.set(t,e),Ra.set(e,t)),e}const ro=t=>Ra.get(t);function Dh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const $y=["get","getKey","getAll","getAllKeys","count"],By=["put","add","delete","clear"],io=new Map;function vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(io.get(e))return io.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=By.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$y.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return io.set(e,i),i}Py(t=>({...t,get:(e,n,s)=>vl(e,n)||t.get(e,n,s),has:(e,n)=>!!vl(e,n)||t.has(e,n)}));/**
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
 */class jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vo="@firebase/app",wl="0.9.0";/**
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
 */const Tn=new ka("@firebase/app"),Hy="@firebase/app-compat",Ky="@firebase/analytics-compat",zy="@firebase/analytics",Wy="@firebase/app-check-compat",Gy="@firebase/app-check",Qy="@firebase/auth",Yy="@firebase/auth-compat",Xy="@firebase/database",Jy="@firebase/database-compat",Zy="@firebase/functions",ev="@firebase/functions-compat",tv="@firebase/installations",nv="@firebase/installations-compat",sv="@firebase/messaging",rv="@firebase/messaging-compat",iv="@firebase/performance",ov="@firebase/performance-compat",av="@firebase/remote-config",cv="@firebase/remote-config-compat",lv="@firebase/storage",uv="@firebase/storage-compat",hv="@firebase/firestore",fv="@firebase/firestore-compat",dv="firebase",pv="9.15.0";/**
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
 */const Uo="[DEFAULT]",gv={[Vo]:"fire-core",[Hy]:"fire-core-compat",[zy]:"fire-analytics",[Ky]:"fire-analytics-compat",[Gy]:"fire-app-check",[Wy]:"fire-app-check-compat",[Qy]:"fire-auth",[Yy]:"fire-auth-compat",[Xy]:"fire-rtdb",[Jy]:"fire-rtdb-compat",[Zy]:"fire-fn",[ev]:"fire-fn-compat",[tv]:"fire-iid",[nv]:"fire-iid-compat",[sv]:"fire-fcm",[rv]:"fire-fcm-compat",[iv]:"fire-perf",[ov]:"fire-perf-compat",[av]:"fire-rc",[cv]:"fire-rc-compat",[lv]:"fire-gcs",[uv]:"fire-gcs-compat",[hv]:"fire-fst",[fv]:"fire-fst-compat","fire-js":"fire-js",[dv]:"fire-js-all"};/**
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
 */const Fr=new Map,$o=new Map;function mv(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if($o.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,t);for(const n of Fr.values())mv(n,t);return!0}function Ks(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new pi("app","Firebase",yv);/**
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
 */class vv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const wv=pv;function xh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Uo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(n||(n=py()),!n)throw Ht.create("no-options");const i=Fr.get(r);if(i){if(Lr(n,i.options)&&Lr(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const o=new Ay(r);for(const c of $o.values())o.addComponent(c);const a=new vv(n,s,o);return Fr.set(r,a),a}function Nh(t=Uo){const e=Fr.get(t);if(!e&&t===Uo)return xh();if(!e)throw Ht.create("no-app",{appName:t});return e}function It(t,e,n){var s;let r=(s=gv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Qt(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ev="firebase-heartbeat-database",bv=1,Os="firebase-heartbeat-store";let oo=null;function kh(){return oo||(oo=Dh(Ev,bv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),oo}async function Tv(t){try{return(await kh()).transaction(Os).objectStore(Os).get(Rh(t))}catch(e){if(e instanceof Zt)Tn.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function El(t,e){try{const s=(await kh()).transaction(Os,"readwrite");return await s.objectStore(Os).put(e,Rh(t)),s.done}catch(n){if(n instanceof Zt)Tn.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(s.message)}}}function Rh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Iv=1024,Cv=30*24*60*60*1e3;class _v{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Av(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Cv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bl(),{heartbeatsToSend:n,unsentEntries:s}=Sv(this._heartbeatsCache.heartbeats),r=Mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bl(){return new Date().toISOString().substring(0,10)}function Sv(t,e=Iv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Tl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Av{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ih()?Ch().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return Mr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dv(t){Qt(new Ot("platform-logger",e=>new jy(e),"PRIVATE")),Qt(new Ot("heartbeat",e=>new _v(e),"PRIVATE")),It(Vo,wl,t),It(Vo,wl,"esm2017"),It("fire-js","")}Dv("");var xv="firebase",Nv="9.15.0";/**
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
 */It(xv,Nv,"app");const Oh="@firebase/installations",Oa="0.6.0";/**
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
 */const Mh=1e4,Lh=`w:${Oa}`,Fh="FIS_v2",kv="https://firebaseinstallations.googleapis.com/v1",Rv=60*60*1e3,Ov="installations",Mv="Installations";/**
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
 */const Lv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},In=new pi(Ov,Mv,Lv);function Ph(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
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
 */function Vh({projectId:t}){return`${kv}/projects/${t}/installations`}function Uh(t){return{token:t.token,requestStatus:2,expiresIn:Pv(t.expiresIn),creationTime:Date.now()}}async function $h(t,e){const s=(await e.json()).error;return In.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Bh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Fv(t,{refreshToken:e}){const n=Bh(t);return n.append("Authorization",Vv(e)),n}async function jh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pv(t){return Number(t.replace("s","000"))}function Vv(t){return`${Fh} ${t}`}/**
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
 */async function Uv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Vh(t),r=Bh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Fh,appId:t.appId,sdkVersion:Lh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await jh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Uh(l.authToken)}}else throw await $h("Create Installation",c)}/**
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
 */function qh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function $v(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Bv=/^[cdef][\w-]{21}$/,Bo="";function jv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qv(t);return Bv.test(n)?n:Bo}catch{return Bo}}function qv(t){return $v(t).substr(0,22)}/**
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
 */function gi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Hh=new Map;function Kh(t,e){const n=gi(t);zh(n,e),Hv(n,e)}function zh(t,e){const n=Hh.get(t);if(n)for(const s of n)s(e)}function Hv(t,e){const n=Kv();n&&n.postMessage({key:t,fid:e}),zv()}let pn=null;function Kv(){return!pn&&"BroadcastChannel"in self&&(pn=new BroadcastChannel("[Firebase] FID Change"),pn.onmessage=t=>{zh(t.data.key,t.data.fid)}),pn}function zv(){Hh.size===0&&pn&&(pn.close(),pn=null)}/**
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
 */const Wv="firebase-installations-database",Gv=1,Cn="firebase-installations-store";let ao=null;function Ma(){return ao||(ao=Dh(Wv,Gv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cn)}}})),ao}async function Pr(t,e){const n=gi(t),r=(await Ma()).transaction(Cn,"readwrite"),i=r.objectStore(Cn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Kh(t,e.fid),e}async function Wh(t){const e=gi(t),s=(await Ma()).transaction(Cn,"readwrite");await s.objectStore(Cn).delete(e),await s.done}async function mi(t,e){const n=gi(t),r=(await Ma()).transaction(Cn,"readwrite"),i=r.objectStore(Cn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Kh(t,a.fid),a}/**
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
 */async function La(t){let e;const n=await mi(t.appConfig,s=>{const r=Qv(s),i=Yv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Bo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Qv(t){const e=t||{fid:jv(),registrationStatus:0};return Gh(e)}function Yv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Xv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Jv(t)}:{installationEntry:e}}async function Xv(t,e){try{const n=await Uv(t,e);return Pr(t.appConfig,n)}catch(n){throw Ph(n)&&n.customData.serverCode===409?await Wh(t.appConfig):await Pr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Jv(t){let e=await Il(t.appConfig);for(;e.registrationStatus===1;)await qh(100),e=await Il(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await La(t);return s||n}return e}function Il(t){return mi(t,e=>{if(!e)throw In.create("installation-not-found");return Gh(e)})}function Gh(t){return Zv(t)?{fid:t.fid,registrationStatus:0}:t}function Zv(t){return t.registrationStatus===1&&t.registrationTime+Mh<Date.now()}/**
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
 */async function ew({appConfig:t,heartbeatServiceProvider:e},n){const s=tw(t,n),r=Fv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Lh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await jh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Uh(l)}else throw await $h("Generate Auth Token",c)}function tw(t,{fid:e}){return`${Vh(t)}/${e}/authTokens:generate`}/**
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
 */async function Fa(t,e=!1){let n;const s=await mi(t.appConfig,i=>{if(!Qh(i))throw In.create("not-registered");const o=i.authToken;if(!e&&rw(o))return i;if(o.requestStatus===1)return n=nw(t,e),i;{if(!navigator.onLine)throw In.create("app-offline");const a=ow(i);return n=sw(t,a),a}});return n?await n:s.authToken}async function nw(t,e){let n=await Cl(t.appConfig);for(;n.authToken.requestStatus===1;)await qh(100),n=await Cl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Fa(t,e):s}function Cl(t){return mi(t,e=>{if(!Qh(e))throw In.create("not-registered");const n=e.authToken;return aw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sw(t,e){try{const n=await ew(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Pr(t.appConfig,s),n}catch(n){if(Ph(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pr(t.appConfig,s)}throw n}}function Qh(t){return t!==void 0&&t.registrationStatus===2}function rw(t){return t.requestStatus===2&&!iw(t)}function iw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Rv}function ow(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function aw(t){return t.requestStatus===1&&t.requestTime+Mh<Date.now()}/**
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
 */async function cw(t){const e=t,{installationEntry:n,registrationPromise:s}=await La(e);return s?s.catch(console.error):Fa(e).catch(console.error),n.fid}/**
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
 */async function lw(t,e=!1){const n=t;return await uw(n),(await Fa(n,e)).token}async function uw(t){const{registrationPromise:e}=await La(t);e&&await e}/**
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
 */function hw(t){if(!t||!t.options)throw co("App Configuration");if(!t.name)throw co("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw co(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function co(t){return In.create("missing-app-config-values",{valueName:t})}/**
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
 */const Yh="installations",fw="installations-internal",dw=t=>{const e=t.getProvider("app").getImmediate(),n=hw(e),s=Ks(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pw=t=>{const e=t.getProvider("app").getImmediate(),n=Ks(e,Yh).getImmediate();return{getId:()=>cw(n),getToken:r=>lw(n,r)}};function gw(){Qt(new Ot(Yh,dw,"PUBLIC")),Qt(new Ot(fw,pw,"PRIVATE"))}gw();It(Oh,Oa);It(Oh,Oa,"esm2017");/**
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
 */const Vr="analytics",mw="firebase_id",yw="origin",vw=60*1e3,ww="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new ka("@firebase/analytics");/**
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
 */function Jh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ew(t,e){const n=document.createElement("script");n.src=`${Xh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function bw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Tw(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Jh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ze.error(a)}t("config",r,i)}async function Iw(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Jh(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ze.error(i)}}function Cw(t,e,n,s){async function r(i,o,a){try{i==="event"?await Iw(t,e,n,o,a):i==="config"?await Tw(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ze.error(c)}}return r}function _w(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Cw(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Sw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xh)&&n.src.includes(t))return n;return null}/**
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
 */const Aw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ot=new pi("analytics","Analytics",Aw);/**
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
 */const Dw=30,xw=1e3;class Nw{constructor(e={},n=xw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zh=new Nw;function kw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Rw(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:kw(s)},i=ww.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Ow(t,e=Zh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw ot.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ot.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Fw;return setTimeout(async()=>{a.abort()},n!==void 0?n:vw),ef({appId:s,apiKey:r,measurementId:i},o,a,e)}async function ef(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Zh){var i;const{appId:o,measurementId:a}=t;try{await Mw(s,e)}catch(c){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Rw(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Lw(l)){if(r.deleteThrottleMetadata(o),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?gl(n,r.intervalMillis,Dw):gl(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),Ze.debug(`Calling attemptFetch again in ${u} millis`),ef(t,f,s,r)}}function Mw(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Lw(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Fw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pw(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function Vw(){if(Ih())try{await Ch()}catch(t){return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Uw(t,e,n,s,r,i,o){var a;const c=Ow(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ze.error(g)),e.push(c);const l=Vw().then(g=>{if(g)return s.getId()}),[u,f]=await Promise.all([c,l]);Sw(i)||Ew(i,u.measurementId),r("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[yw]="firebase",p.update=!0,f!=null&&(p[mw]=f),r("config",u.measurementId,p),u.measurementId}/**
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
 */class $w{constructor(e){this.app=e}_delete(){return delete bs[this.app.options.appId],Promise.resolve()}}let bs={},_l=[];const Sl={};let lo="dataLayer",Bw="gtag",Al,tf,Dl=!1;function jw(){const t=[];if(oy()&&t.push("This is a browser extension environment."),ay()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function qw(t,e,n){jw();const s=t.options.appId;if(!s)throw ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(bs[s]!=null)throw ot.create("already-exists",{id:s});if(!Dl){bw(lo);const{wrappedGtag:i,gtagCore:o}=_w(bs,_l,Sl,lo,Bw);tf=i,Al=o,Dl=!0}return bs[s]=Uw(t,_l,Sl,e,Al,lo,n),new $w(t)}function Hw(t=Nh()){t=pt(t);const e=Ks(t,Vr);return e.isInitialized()?e.getImmediate():Kw(t)}function Kw(t,e={}){const n=Ks(t,Vr);if(n.isInitialized()){const r=n.getImmediate();if(Lr(e,n.getOptions()))return r;throw ot.create("already-initialized")}return n.initialize({options:e})}function zw(t,e,n,s){t=pt(t),Pw(tf,bs[t.app.options.appId],e,n,s).catch(r=>Ze.error(r))}const xl="@firebase/analytics",Nl="0.9.0";function Ww(){Qt(new Ot(Vr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return qw(s,r,n)},"PUBLIC")),Qt(new Ot("analytics-internal",t,"PRIVATE")),It(xl,Nl),It(xl,Nl,"esm2017");function t(e){try{const n=e.getProvider(Vr).getImmediate();return{logEvent:(s,r,i)=>zw(n,s,r,i)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}Ww();var Gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Pa=Pa||{},$=Gw||self;function Ur(){}function yi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Qw(t){return Object.prototype.hasOwnProperty.call(t,uo)&&t[uo]||(t[uo]=++Yw)}var uo="closure_uid_"+(1e9*Math.random()>>>0),Yw=0;function Xw(t,e,n){return t.call.apply(t.bind,arguments)}function Jw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=Xw:je=Jw,je.apply(null,arguments)}function gr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function en(){this.s=this.s,this.o=this.o}var Zw=0;en.prototype.s=!1;en.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zw!=0)&&Qw(this)};en.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Va(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function kl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(yi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var e0=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Ur,e),$.removeEventListener("test",Ur,e)}catch{}return t}();function $r(t){return/^[\s\xa0]*$/.test(t)}var Rl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ho(t,e){return t<e?-1:t>e?1:0}function vi(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return vi().indexOf(t)!=-1}function Ua(t){return Ua[" "](t),t}Ua[" "]=Ur;function t0(t){var e=r0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var n0=bt("Opera"),zn=bt("Trident")||bt("MSIE"),sf=bt("Edge"),jo=sf||zn,rf=bt("Gecko")&&!(vi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),s0=vi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function of(){var t=$.document;return t?t.documentMode:void 0}var Br;e:{var fo="",po=function(){var t=vi();if(rf)return/rv:([^\);]+)(\)|;)/.exec(t);if(sf)return/Edge\/([\d\.]+)/.exec(t);if(zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(s0)return/WebKit\/(\S+)/.exec(t);if(n0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(po&&(fo=po?po[1]:""),zn){var go=of();if(go!=null&&go>parseFloat(fo)){Br=String(go);break e}}Br=fo}var r0={};function i0(){return t0(function(){let t=0;const e=Rl(String(Br)).split("."),n=Rl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ho(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ho(r[2].length==0,i[2].length==0)||ho(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var qo;if($.document&&zn){var Ol=of();qo=Ol||parseInt(Br,10)||void 0}else qo=void 0;var o0=qo;function Ms(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rf){e:{try{Ua(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:a0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ms.X.h.call(this)}}Me(Ms,qe);var a0={2:"touch",3:"pen",4:"mouse"};Ms.prototype.h=function(){Ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),c0=0;function l0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++c0,this.ba=this.ea=!1}function wi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $a(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function af(t){const e={};for(const n in t)e[n]=t[n];return e}const Ml="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ml.length;i++)n=Ml[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ei(t){this.src=t,this.g={},this.h=0}Ei.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ko(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new l0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ho(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=nf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ko(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ba="closure_lm_"+(1e6*Math.random()|0),mo={};function lf(t,e,n,s,r){if(s&&s.once)return hf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lf(t,e[i],n,s,r);return null}return n=Ha(n),t&&t[Ws]?t.N(e,n,zs(s)?!!s.capture:!!s,r):uf(t,e,n,!1,s,r)}function uf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zs(r)?!!r.capture:!!r,a=qa(t);if(a||(t[Ba]=a=new Ei(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=u0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)e0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(df(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function u0(){function t(n){return e.call(t.src,t.listener,n)}const e=h0;return t}function hf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hf(t,e[i],n,s,r);return null}return n=Ha(n),t&&t[Ws]?t.O(e,n,zs(s)?!!s.capture:!!s,r):uf(t,e,n,!0,s,r)}function ff(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ff(t,e[i],n,s,r);else s=zs(s)?!!s.capture:!!s,n=Ha(n),t&&t[Ws]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ko(i,n,s,r),-1<n&&(wi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ko(e,n,s,r)),(n=-1<t?e[t]:null)&&ja(n))}function ja(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ws])Ho(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(df(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qa(e))?(Ho(n,t),n.h==0&&(n.src=null,e[Ba]=null)):wi(t)}}}function df(t){return t in mo?mo[t]:mo[t]="on"+t}function h0(t,e){if(t.ba)t=!0;else{e=new Ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ja(t),t=n.call(s,e)}return t}function qa(t){return t=t[Ba],t instanceof Ei?t:null}var yo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ha(t){return typeof t=="function"?t:(t[yo]||(t[yo]=function(e){return t.handleEvent(e)}),t[yo])}function Ae(){en.call(this),this.i=new Ei(this),this.P=this,this.I=null}Me(Ae,en);Ae.prototype[Ws]=!0;Ae.prototype.removeEventListener=function(t,e,n,s){ff(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),cf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=mr(o,s,!0,e)&&r}if(o=e.g=t,r=mr(o,s,!0,e)&&r,r=mr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=mr(o,s,!1,e)&&r}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)wi(n[s]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ae.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function mr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ho(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ka=$.JSON.stringify;function f0(){var t=mf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class d0{constructor(){this.h=this.g=null}add(e,n){const s=pf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new p0,t=>t.reset());class p0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g0(t){$.setTimeout(()=>{throw t},0)}function gf(t,e){zo||m0(),Wo||(zo(),Wo=!0),mf.add(t,e)}var zo;function m0(){var t=$.Promise.resolve(void 0);zo=function(){t.then(y0)}}var Wo=!1,mf=new d0;function y0(){for(var t;t=f0();){try{t.h.call(t.g)}catch(n){g0(n)}var e=pf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wo=!1}function bi(t,e){Ae.call(this),this.h=t||1,this.g=e||$,this.j=je(this.lb,this),this.l=Date.now()}Me(bi,Ae);N=bi.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(za(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function za(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){bi.X.M.call(this),za(this),delete this.g};function Wa(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function yf(t){t.g=Wa(()=>{t.g=null,t.i&&(t.i=!1,yf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class v0 extends en{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yf(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(t){en.call(this),this.h=t,this.g={}}Me(Ls,en);var Ll=[];function vf(t,e,n,s){Array.isArray(n)||(n&&(Ll[0]=n.toString()),n=Ll);for(var r=0;r<n.length;r++){var i=lf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function wf(t){$a(t.g,function(e,n){this.g.hasOwnProperty(n)&&ja(e)},t),t.g={}}Ls.prototype.M=function(){Ls.X.M.call(this),wf(this)};Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ti(){this.g=!0}Ti.prototype.Aa=function(){this.g=!1};function w0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function E0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Fn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+T0(t,n)+(s?" "+s:"")})}function b0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ti.prototype.info=function(){};function T0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ka(n)}catch{return e}}var Dn={},Fl=null;function Ii(){return Fl=Fl||new Ae}Dn.Pa="serverreachability";function Ef(t){qe.call(this,Dn.Pa,t)}Me(Ef,qe);function Fs(t){const e=Ii();Oe(e,new Ef(e))}Dn.STAT_EVENT="statevent";function bf(t,e){qe.call(this,Dn.STAT_EVENT,t),this.stat=e}Me(bf,qe);function We(t){const e=Ii();Oe(e,new bf(e,t))}Dn.Qa="timingevent";function Tf(t,e){qe.call(this,Dn.Qa,t),this.size=e}Me(Tf,qe);function Gs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Ci={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},If={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ga(){}Ga.prototype.h=null;function Pl(t){return t.h||(t.h=t.i())}function Cf(){}var Qs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qa(){qe.call(this,"d")}Me(Qa,qe);function Ya(){qe.call(this,"c")}Me(Ya,qe);var Go;function _i(){}Me(_i,Ga);_i.prototype.g=function(){return new XMLHttpRequest};_i.prototype.i=function(){return{}};Go=new _i;function Ys(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ls(this),this.O=I0,t=jo?125:void 0,this.T=new bi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _f}function _f(){this.i=null,this.g="",this.h=!1}var I0=45e3,Qo={},jr={};N=Ys.prototype;N.setTimeout=function(t){this.O=t};function Yo(t,e,n){t.K=1,t.v=Ai(Mt(e)),t.s=n,t.P=!0,Sf(t,null)}function Sf(t,e){t.F=Date.now(),Xs(t),t.A=Mt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Mf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _f,t.g=td(t.l,n?e:null,!t.s),0<t.N&&(t.L=new v0(je(t.La,t,t.g),t.N)),vf(t.S,t.g,"readystatechange",t.ib),e=t.H?af(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Fs(),w0(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Nt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Nt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||jo||this.g&&(this.h.h||this.g.fa()||Bl(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Fs(3):Fs(2)),Si(this);var n=this.g.aa();this.Y=n;t:if(Af(this)){var s=Bl(this.g);t="";var r=s.length,i=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Ts(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,E0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$r(a)){var l=a;break t}}l=null}if(n=l)Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xo(this,n);else{this.i=!1,this.o=3,We(12),gn(this),Ts(this);break e}}this.P?(Df(this,u,o),jo&&this.i&&u==3&&(vf(this.S,this.T,"tick",this.hb),this.T.start())):(Fn(this.j,this.m,o,null),Xo(this,o)),u==4&&gn(this),this.i&&!this.I&&(u==4?Xf(this.l,this):(this.i=!1,Xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),gn(this),Ts(this)}}}catch{}finally{}};function Af(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Df(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=C0(t,n),r==jr){e==4&&(t.o=4,We(14),s=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Qo){t.o=4,We(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fn(t.j,t.m,r,null),Xo(t,r);Af(t)&&r!=jr&&r!=Qo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sc(e),e.K=!0,We(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),gn(t),Ts(t))}N.hb=function(){if(this.g){var t=Nt(this.g),e=this.g.fa();this.C<e.length&&(Si(this),Df(this,t,e),this.i&&t!=4&&Xs(this))}};function C0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?jr:(n=Number(e.substring(n,s)),isNaN(n)?Qo:(s+=1,s+n>e.length?jr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,gn(this)};function Xs(t){t.V=Date.now()+t.O,xf(t,t.O)}function xf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gs(je(t.gb,t),e)}function Si(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(b0(this.j,this.A),this.K!=2&&(Fs(),We(17)),gn(this),this.o=2,Ts(this)):xf(this,this.V-t)};function Ts(t){t.l.G==0||t.I||Xf(t.l,t)}function gn(t){Si(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,za(t.T),wf(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jo(n.h,t))){if(!t.J&&Jo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Kr(n),Ni(n);else break e;nc(n),We(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Gs(je(n.cb,n),6e3));if(1>=Pf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else mn(n,11)}else if((t.J||n.g==t)&&Kr(n),!$r(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.h;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xa(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,he(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ed(s,s.H?s.ka:null,s.V),o.J){Vf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Si(a),Xs(a)),s.g=o}else Qf(s);0<n.i.length&&ki(n)}else l[0]!="stop"&&l[0]!="close"||mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?mn(n,7):tc(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Fs(4)}catch{}}function _0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function S0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=S0(t),s=_0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function En(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof En){this.h=e!==void 0?e:t.h,qr(this,t.j),this.s=t.s,this.g=t.g,Hr(this,t.m),this.l=t.l,e=t.i;var n=new Ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vl(this,n),this.o=t.o}else t&&(n=String(t).match(kf))?(this.h=!!e,qr(this,n[1]||"",!0),this.s=ds(n[2]||""),this.g=ds(n[3]||"",!0),Hr(this,n[4]),this.l=ds(n[5]||"",!0),Vl(this,n[6]||"",!0),this.o=ds(n[7]||"")):(this.h=!!e,this.i=new Ps(null,this.h))}En.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,Ul,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ps(e,Ul,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ps(n,n.charAt(0)=="/"?N0:x0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,R0)),t.join("")};function Mt(t){return new En(t)}function qr(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vl(t,e,n){e instanceof Ps?(t.i=e,O0(t.i,t.h)):(n||(e=ps(e,k0)),t.i=new Ps(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Ai(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,D0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function D0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ul=/[#\/\?@]/g,x0=/[#\?:]/g,N0=/[#\?]/g,k0=/[#\?@]/g,R0=/#/g;function Ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&A0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ps.prototype;N.add=function(t,e){tn(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rf(t,e){tn(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Of(t,e){return tn(t),e=ss(t,e),t.g.has(e)}N.forEach=function(t,e){tn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){tn(this);let e=[];if(typeof t=="string")Of(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return tn(this),this.i=null,t=ss(this,t),Of(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mf(t,e,n){Rf(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),Va(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function O0(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rf(this,s),Mf(this,r,n))},t)),t.j=e}var M0=class{constructor(e,n){this.h=e,this.g=n}};function Lf(t){this.l=t||L0,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L0=10;function Ff(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pf(t){return t.h?1:t.g?t.g.size:0}function Jo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xa(t,e){t.g?t.g.add(e):t.h=e}function Vf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lf.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Va(t.i)}function Ja(){}Ja.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Ja.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function F0(){this.g=new Ja}function P0(t,e,n){const s=n||"";try{Nf(t,function(r,i){let o=r;zs(r)&&(o=Ka(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function V0(t,e){const n=new Ti;if($.Image){const s=new Image;s.onload=gr(yr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=gr(yr,n,s,"TestLoadImage: error",!1,e),s.onabort=gr(yr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=gr(yr,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function yr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Js(t){this.l=t.ac||null,this.j=t.jb||!1}Me(Js,Ga);Js.prototype.g=function(){return new Di(this.l,this.j)};Js.prototype.i=function(t){return function(){return t}}({});function Di(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Di,Ae);var Za=0;N=Di.prototype;N.open=function(t,e){if(this.readyState!=Za)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vs(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Za};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$f(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $f(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):Vs(this),this.readyState==3&&$f(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};N.Ua=function(t){this.g&&(this.response=t,Zs(this))};N.ga=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vs(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var U0=$.JSON.parse;function ye(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bf,this.K=this.L=!1}Me(ye,Ae);var Bf="",$0=/^https?$/i,B0=["POST","PUT"];N=ye.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Go.g(),this.C=this.u?Pl(this.u):Pl(Go),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){$l(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=$.FormData&&t instanceof $.FormData,!(0<=nf(B0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hf(this),0<this.B&&((this.K=j0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=Wa(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$l(this,i)}};function j0(t){return zn&&i0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof Pa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function $l(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jf(t),xi(t)}function jf(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),xi(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),ye.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?qf(this):this.fb())};N.fb=function(){qf(this)};function qf(t){if(t.h&&typeof Pa<"u"&&(!t.C[1]||Nt(t)!=4||t.aa()!=2)){if(t.v&&Nt(t)==4)Wa(t.Ha,0,t);else if(Oe(t,"readystatechange"),Nt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(kf)[1]||null;if(!r&&$.self&&$.self.location){var i=$.self.location.protocol;r=i.substr(0,i.length-1)}s=!$0.test(r?r.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<Nt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",jf(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){Hf(t);const n=t.g,s=t.C[0]?Ur:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Hf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Nt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),U0(e)}};function Bl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kf(t){let e="";return $a(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ec(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Kf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zf(t){this.Ca=0,this.i=[],this.j=new Ti,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hs("baseRetryDelayMs",5e3,t),this.bb=hs("retryDelaySeedMs",1e4,t),this.$a=hs("forwardChannelMaxRetries",2,t),this.ta=hs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Lf(t&&t.concurrentRequestLimit),this.Fa=new F0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=zf.prototype;N.ma=8;N.G=1;function tc(t){if(Wf(t),t.G==3){var e=t.U++,n=Mt(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),er(t,n),e=new Ys(t,t.j,e,void 0),e.K=2,e.v=Ai(Mt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=td(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xs(e)}Zf(t)}function Ni(t){t.g&&(sc(t),t.g.cancel(),t.g=null)}function Wf(t){Ni(t),t.u&&($.clearTimeout(t.u),t.u=null),Kr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function ki(t){Ff(t.h)||t.m||(t.m=!0,gf(t.Ja,t),t.C=0)}function q0(t,e){return Pf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Gs(je(t.Ja,t,e),Jf(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ys(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=af(i),cf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gf(this,r,e),n=Mt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),er(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Kf(i)))+"&"+e:this.o&&ec(n,this.o,i)),Xa(this.h,r),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),r.Z=!0,Yo(r,n,null)):Yo(r,n,e),this.G=2}}else this.G==3&&(t?jl(this,t):this.i.length==0||Ff(this.h)||jl(this))};function jl(t,e){var n;e?n=e.m:n=t.U++;const s=Mt(t.F);he(s,"SID",t.I),he(s,"RID",n),he(s,"AID",t.T),er(t,s),t.o&&t.s&&ec(s,t.o,t.s),n=new Ys(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Gf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xa(t.h,n),Yo(n,s,e)}function er(t,e){t.ia&&$a(t.ia,function(n,s){he(e,s,n)}),t.l&&Nf({},function(n,s){he(e,s,n)})}function Gf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{P0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Qf(t){t.g||t.u||(t.Z=1,gf(t.Ia,t),t.A=0)}function nc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Gs(je(t.Ia,t),Jf(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Yf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gs(je(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),Ni(this),Yf(this))};function sc(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Yf(t){t.g=new Ys(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mt(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),er(t,e),t.o&&t.s&&ec(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ai(Mt(e)),n.s=null,n.P=!0,Sf(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Ni(this),nc(this),We(19))};function Kr(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function Xf(t,e){var n=null;if(t.g==e){Kr(t),sc(t),t.g=null;var s=2}else if(Jo(t.h,e))n=e.D,Vf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ii(),Oe(s,new Tf(s,n)),ki(t)}else Qf(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&q0(t,e)||s==2&&nc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}}function Jf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=je(t.kb,t);n||(n=new En("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||qr(n,"https"),Ai(n)),V0(n.toString(),s)}else We(2);t.G=0,t.l&&t.l.va(e),Zf(t),Wf(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Zf(t){if(t.G=0,t.la=[],t.l){const e=Uf(t.h);(e.length!=0||t.i.length!=0)&&(kl(t.la,e),kl(t.la,t.i),t.h.i.length=0,Va(t.i),t.i.length=0),t.l.ua()}}function ed(t,e,n){var s=n instanceof En?Mt(n):new En(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Hr(s,s.m);else{var r=$.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new En(null,void 0);s&&qr(i,s),e&&(i.g=e),r&&Hr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&he(s,n,e),he(s,"VER",t.ma),er(t,s),s}function td(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new Js({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function nd(){}N=nd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function zr(){if(zn&&!(10<=Number(o0)))throw Error("Environmental error: no available transport.")}zr.prototype.g=function(t,e){return new nt(t,e)};function nt(t,e){Ae.call(this),this.g=new zf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$r(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$r(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rs(this)}Me(nt,Ae);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ed(t,null,t.V),ki(t)};nt.prototype.close=function(){tc(this.g)};nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ka(t),t=n);e.i.push(new M0(e.ab++,t)),e.G==3&&ki(e)};nt.prototype.M=function(){this.g.l=null,delete this.j,tc(this.g),delete this.g,nt.X.M.call(this)};function sd(t){Qa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(sd,Qa);function rd(){Ya.call(this),this.status=1}Me(rd,Ya);function rs(t){this.g=t}Me(rs,nd);rs.prototype.xa=function(){Oe(this.g,"a")};rs.prototype.wa=function(t){Oe(this.g,new sd(t))};rs.prototype.va=function(t){Oe(this.g,new rd)};rs.prototype.ua=function(){Oe(this.g,"b")};zr.prototype.createWebChannel=zr.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Ci.NO_ERROR=0;Ci.TIMEOUT=8;Ci.HTTP_ERROR=6;If.COMPLETE="complete";Cf.EventType=Qs;Qs.OPEN="a";Qs.CLOSE="b";Qs.ERROR="c";Qs.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var H0=function(){return new zr},K0=function(){return Ii()},vo=Ci,z0=If,W0=Dn,ql={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},G0=Js,vr=Cf,Q0=ye;const Hl="@firebase/firestore";/**
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
 */let is="9.15.0";/**
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
 */const _n=new ka("@firebase/firestore");function Kl(){return _n.logLevel}function R(t,...e){if(_n.logLevel<=ne.DEBUG){const n=e.map(rc);_n.debug(`Firestore (${is}): ${t}`,...n)}}function Lt(t,...e){if(_n.logLevel<=ne.ERROR){const n=e.map(rc);_n.error(`Firestore (${is}): ${t}`,...n)}}function Zo(t,...e){if(_n.logLevel<=ne.WARN){const n=e.map(rc);_n.warn(`Firestore (${is}): ${t}`,...n)}}function rc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw Lt(e),new Error(e)}function ce(t,e){t||U()}function K(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class id{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class X0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J0{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string"),new id(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Fe(e)}}class Z0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class eE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Z0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.A=n.token,new tE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class od{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=sE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Wn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Te(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Us{constructor(e,n,s){n===void 0?n=0:n>e.length&&U(),s===void 0?s=e.length-n:s>e.length-n&&U(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Us{construct(e,n,s){return new fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const rE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Us{construct(e,n,s){return new Ue(e,n,s)}static isValidIdentifier(e){return rE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(fe.fromString(e))}static fromName(e){return new F(fe.fromString(e).popFirst(5))}static empty(){return new F(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new fe(e.slice()))}}function iE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new Te(n+1,0):new Te(n,s));return new Yt(r,F.empty(),e)}function oE(t){return new Yt(t.readTime,t.key,-1)}class Yt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yt(j.min(),F.empty(),-1)}static max(){return new Yt(j.max(),F.empty(),-1)}}function aE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const cE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function tr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==cE)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function nr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ic.at=-1;/**
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
 */class uE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function zl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Ri(t){return t==null}function Wr(t){return t===0&&1/t==-1/0}function hE(t){return typeof t=="number"&&Number.isInteger(t)&&!Wr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const fE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(t){if(ce(!!t),typeof t=="string"){let e=0;const n=fE.exec(t);if(ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ld(t){const e=t.mapValue.fields.__previous_value__;return cd(e)?ld(e):e}function Bs(t){const e=Xt(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */const wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cd(t)?4:dE(t)?9007199254740991:10:U()}function St(t,e){if(t===e)return!0;const n=Sn(t);if(n!==Sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bs(t).isEqual(Bs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Xt(s.timestampValue),o=Xt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Gn(s.bytesValue).isEqual(Gn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ee(s.geoPointValue.latitude)===Ee(r.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ee(s.integerValue)===Ee(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ee(s.doubleValue),o=Ee(r.doubleValue);return i===o?Wr(i)===Wr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Wn(t.arrayValue.values||[],e.arrayValue.values||[],St);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(zl(i)!==zl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!St(i[a],o[a])))return!1;return!0}(t,e);default:return U()}}function js(t,e){return(t.values||[]).find(n=>St(n,e))!==void 0}function Qn(t,e){if(t===e)return 0;const n=Sn(t),s=Sn(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ee(r.integerValue||r.doubleValue),a=Ee(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Wl(t.timestampValue,e.timestampValue);case 4:return Wl(Bs(t),Bs(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Gn(r),a=Gn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(Ee(r.latitude),Ee(i.latitude));return o!==0?o:se(Ee(r.longitude),Ee(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Qn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===wr.mapValue&&i===wr.mapValue)return 0;if(r===wr.mapValue)return 1;if(i===wr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=se(a[u],l[u]);if(f!==0)return f;const p=Qn(o[a[u]],c[l[u]]);if(p!==0)return p}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function Wl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Xt(t),s=Xt(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function Yn(t){return ea(t)}function ea(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Xt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ea(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ea(s.fields[a])}`;return i+"}"}(t.mapValue):U();var e,n}function ta(t){return!!t&&"integerValue"in t}function oc(t){return!!t&&"arrayValue"in t}function Gl(t){return!!t&&"nullValue"in t}function Ql(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _r(t){return!!t&&"mapValue"in t}function Is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Is(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gr{constructor(e,n){this.position=e,this.inclusive=n}}function Yl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Qn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!St(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ud{}class be extends ud{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new mE(e,n,s):n==="array-contains"?new wE(e,s):n==="in"?new EE(e,s):n==="not-in"?new bE(e,s):n==="array-contains-any"?new TE(e,s):new be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new yE(e,s):new vE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qn(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.matchesComparison(Qn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends ud{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new At(e,n)}matches(e){return hd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hd(t){return t.op==="and"}function pE(t){return gE(t)&&hd(t)}function gE(t){for(const e of t.filters)if(e instanceof At)return!1;return!0}function fd(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Yn(t.value);{const e=t.filters.map(n=>fd(n)).join(",");return`${t.op}(${e})`}}function dd(t,e){return t instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&St(n.value,s.value)}(t,e):t instanceof At?function(n,s){return s instanceof At&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&dd(i,s.filters[o]),!0):!1}(t,e):void U()}function pd(t){return t instanceof be?function(e){return`${e.field.canonicalString()} ${e.op} ${Yn(e.value)}`}(t):t instanceof At?function(e){return e.op.toString()+" {"+e.getFilters().map(pd).join(" ,")+"}"}(t):"Filter"}class mE extends be{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class yE extends be{constructor(e,n){super(e,"in",n),this.keys=gd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vE extends be{constructor(e,n){super(e,"not-in",n),this.keys=gd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class wE extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oc(n)&&js(n.arrayValue,this.value)}}class EE extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&js(this.value.arrayValue,n)}}class bE extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!js(this.value.arrayValue,n)}}class TE extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>js(this.value.arrayValue,s))}}/**
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
 */class Cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function IE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _e{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jl(this.data.getIterator())}getIteratorFrom(e){return new Jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ie(this.comparator);return n.data=e,n}}class Jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new at([])}unionWith(e){let n=new Ie(Ue.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new at(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!_r(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(n)}setAll(e){let n=Ue.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Is(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());_r(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];_r(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){xn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Xe(Is(this.value))}}function md(t){const e=[];return xn(t.fields,(n,s)=>{const r=new Ue([n]);if(_r(s)){const i=md(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new at(e)}/**
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
 */class Pe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,j.min(),j.min(),j.min(),Xe.empty(),0)}static newFoundDocument(e,n,s,r){return new Pe(e,1,n,j.min(),s,r,0)}static newNoDocument(e,n){return new Pe(e,2,n,j.min(),j.min(),Xe.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,j.min(),j.min(),Xe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class CE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Zl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CE(t,e,n,s,r,i,o)}function ac(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>fd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ri(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Yn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Yn(s)).join(",")),e.ft=n}return e.ft}function cc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xl(t.startAt,e.startAt)&&Xl(t.endAt,e.endAt)}function na(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function _E(t,e,n,s,r,i,o,a){return new Oi(t,e,n,s,r,i,o,a)}function lc(t){return new Oi(t)}function eu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function AE(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function DE(t){return t.collectionGroup!==null}function Bn(t){const e=K(t);if(e.dt===null){e.dt=[];const n=AE(e),s=SE(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Cs(n)),e.dt.push(new Cs(Ue.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Cs(Ue.keyField(),i))}}}return e.dt}function Ft(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=Zl(e.path,e.collectionGroup,Bn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Cs(i.field,o))}const s=e.endAt?new Gr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gr(e.startAt.position,e.startAt.inclusive):null;e._t=Zl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function sa(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mi(t,e){return cc(Ft(t),Ft(e))&&t.limitType===e.limitType}function yd(t){return`${ac(Ft(t))}|lt:${t.limitType}`}function ra(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>pd(s)).join(", ")}]`),Ri(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Yn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Yn(s)).join(",")),`Target(${n})`}(Ft(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):F.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Bn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Yl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Bn(n),s)||n.endAt&&!function(r,i,o){const a=Yl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Bn(n),s))}(t,e)}function xE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vd(t){return(e,n)=>{let s=!1;for(const r of Bn(t)){const i=NE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function NE(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Qn(a,c):U()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return U()}}/**
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
 */function wd(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function Ed(t){return{integerValue:""+t}}function kE(t,e){return hE(e)?Ed(e):wd(t,e)}/**
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
 */class Li{constructor(){this._=void 0}}function RE(t,e,n){return t instanceof Qr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof qs?Td(t,e):t instanceof Hs?Id(t,e):function(s,r){const i=bd(s,r),o=tu(i)+tu(s.gt);return ta(i)&&ta(s.gt)?Ed(o):wd(s.yt,o)}(t,e)}function OE(t,e,n){return t instanceof qs?Td(t,e):t instanceof Hs?Id(t,e):n}function bd(t,e){return t instanceof Yr?ta(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Qr extends Li{}class qs extends Li{constructor(e){super(),this.elements=e}}function Td(t,e){const n=Cd(e);for(const s of t.elements)n.some(r=>St(r,s))||n.push(s);return{arrayValue:{values:n}}}class Hs extends Li{constructor(e){super(),this.elements=e}}function Id(t,e){let n=Cd(e);for(const s of t.elements)n=n.filter(r=>!St(r,s));return{arrayValue:{values:n}}}class Yr extends Li{constructor(e,n){super(),this.yt=e,this.gt=n}}function tu(t){return Ee(t.integerValue||t.doubleValue)}function Cd(t){return oc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ME(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof qs&&s instanceof qs||n instanceof Hs&&s instanceof Hs?Wn(n.elements,s.elements,St):n instanceof Yr&&s instanceof Yr?St(n.gt,s.gt):n instanceof Qr&&s instanceof Qr}(t.transform,e.transform)}class LE{constructor(e,n){this.version=e,this.transformResults=n}}class dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fi{}function _d(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,dt.none()):new sr(t.key,t.data,dt.none());{const n=t.data,s=Xe.empty();let r=new Ie(Ue.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new nn(t.key,s,new at(r.toArray()),dt.none())}}function FE(t,e,n){t instanceof sr?function(s,r,i){const o=s.value.clone(),a=su(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nn?function(s,r,i){if(!Sr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=su(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function _s(t,e,n,s){return t instanceof sr?function(r,i,o,a){if(!Sr(r.precondition,i))return o;const c=r.value.clone(),l=ru(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof nn?function(r,i,o,a){if(!Sr(r.precondition,i))return o;const c=ru(r.fieldTransforms,a,i),l=i.data;return l.setAll(Sd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Sr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function PE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=bd(s.transform,r||null);i!=null&&(n===null&&(n=Xe.empty()),n.set(s.field,i))}return n||null}function nu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(r,i)=>ME(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sr extends Fi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nn extends Fi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function su(t,e,n){const s=new Map;ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,OE(o,a,n[r]))}return s}function ru(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,RE(i,o,e))}return s}class hc extends Fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VE extends Fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UE{constructor(e){this.count=e}}/**
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
 */var we,J;function $E(t){switch(t){default:return U();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ad(t){if(t===void 0)return Lt("GRPC error has no .code"),b.UNKNOWN;switch(t){case we.OK:return b.OK;case we.CANCELLED:return b.CANCELLED;case we.UNKNOWN:return b.UNKNOWN;case we.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case we.INTERNAL:return b.INTERNAL;case we.UNAVAILABLE:return b.UNAVAILABLE;case we.UNAUTHENTICATED:return b.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case we.NOT_FOUND:return b.NOT_FOUND;case we.ALREADY_EXISTS:return b.ALREADY_EXISTS;case we.PERMISSION_DENIED:return b.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case we.ABORTED:return b.ABORTED;case we.OUT_OF_RANGE:return b.OUT_OF_RANGE;case we.UNIMPLEMENTED:return b.UNIMPLEMENTED;case we.DATA_LOSS:return b.DATA_LOSS;default:return U()}}(J=we||(we={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ad(this.inner)}size(){return this.innerSize}}/**
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
 */const BE=new _e(F.comparator);function Pt(){return BE}const Dd=new _e(F.comparator);function gs(...t){let e=Dd;for(const n of t)e=e.insert(n.key,n);return e}function xd(t){let e=Dd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function yn(){return Ss()}function Nd(){return Ss()}function Ss(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const jE=new _e(F.comparator),qE=new Ie(F.comparator);function Y(...t){let e=qE;for(const n of t)e=e.add(n);return e}const HE=new Ie(se);function kd(){return HE}/**
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
 */class Pi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pi(j.min(),r,kd(),Pt(),Y())}}class rr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new rr(s,n,Y(),Y(),Y())}}/**
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
 */class Ar{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Rd{constructor(e,n){this.targetId=e,this.Et=n}}class Od{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class iu{constructor(){this.At=0,this.Rt=au(),this.bt=Ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Y(),n=Y(),s=Y();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:U()}}),new rr(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=au()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class KE{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Pt(),this.qt=ou(),this.Ut=new Ie(se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(na(i))if(s===0){const o=new F(i.path);this.Qt(n,o,Pe.newNoDocument(o,j.min()))}else ce(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&na(a.target)){const c=new F(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Pe.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=Y();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Pi(e,n,this.Ut,this.Lt,s);return this.Lt=Pt(),this.qt=ou(),this.Ut=new Ie(se),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new iu,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ie(se),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new iu),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function ou(){return new _e(F.comparator)}function au(){return new _e(F.comparator)}/**
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
 */const zE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),WE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GE=(()=>({and:"AND",or:"OR"}))();class QE{constructor(e,n){this.databaseId=e,this.wt=n}}function Xr(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Md(t,e){return t.wt?e.toBase64():e.toUint8Array()}function YE(t,e){return Xr(t,e.toTimestamp())}function Ct(t){return ce(!!t),j.fromTimestamp(function(e){const n=Xt(e);return new Te(n.seconds,n.nanos)}(t))}function fc(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ld(t){const e=fe.fromString(t);return ce(Ud(e)),e}function ia(t,e){return fc(t.databaseId,e.path)}function wo(t,e){const n=Ld(e);if(n.get(1)!==t.databaseId.projectId)throw new P(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Fd(n))}function oa(t,e){return fc(t.databaseId,e)}function XE(t){const e=Ld(t);return e.length===4?fe.emptyPath():Fd(e)}function aa(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fd(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cu(t,e,n){return{name:ia(t,e),fields:n.value.mapValue.fields}}function JE(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(ce(l===void 0||typeof l=="string"),Ke.fromBase64String(l||"")):(ce(l===void 0||l instanceof Uint8Array),Ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:Ad(c.code);return new P(l,c.message||"")}(o);n=new Od(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wo(t,s.document.name),i=Ct(s.document.updateTime),o=s.document.createTime?Ct(s.document.createTime):j.min(),a=new Xe({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ar(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wo(t,s.document),i=s.readTime?Ct(s.readTime):j.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ar([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wo(t,s.document),i=s.removedTargetIds||[];n=new Ar([],i,r,null)}else{if(!("filter"in e))return U();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new UE(r),o=s.targetId;n=new Rd(o,i)}}return n}function ZE(t,e){let n;if(e instanceof sr)n={update:cu(t,e.key,e.value)};else if(e instanceof hc)n={delete:ia(t,e.key)};else if(e instanceof nn)n={update:cu(t,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof VE))return U();n={verify:ia(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Qr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw U()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:YE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:U()}(t,e.precondition)),n}function eb(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ct(s.updateTime):Ct(r);return i.isEqual(j.min())&&(i=Ct(r)),new LE(i,s.transformResults||[])}(n,e))):[]}function tb(t,e){return{documents:[oa(t,e.path)]}}function nb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=oa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Vd(At.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Mn(u.field),direction:ib(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Ri(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function sb(t){let e=XE(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Pd(u);return f instanceof At&&pE(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Cs(Ln(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ri(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Gr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Gr(p,f)}(n.endAt)),_E(e,r,o,i,a,"F",c,l)}function rb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ln(e.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ln(e.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ln(e.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ln(e.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return be.create(Ln(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return At.create(e.compositeFilter.filters.map(n=>Pd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function ib(t){return zE[t]}function ob(t){return WE[t]}function ab(t){return GE[t]}function Mn(t){return{fieldPath:t.canonicalString()}}function Ln(t){return Ue.fromServerFormat(t.fieldPath)}function Vd(t){return t instanceof be?function(e){if(e.op==="=="){if(Ql(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NAN"}};if(Gl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ql(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NAN"}};if(Gl(e.value))return{unaryFilter:{field:Mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(e.field),op:ob(e.op),value:e.value}}}(t):t instanceof At?function(e){const n=e.getFilters().map(s=>Vd(s));return n.length===1?n[0]:{compositeFilter:{op:ab(e.op),filters:n}}}(t):U()}function cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ud(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&FE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=_s(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=_s(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Nd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=_d(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(j.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(n,s)=>nu(n,s))&&Wn(this.baseMutations,e.baseMutations,(n,s)=>nu(n,s))}}class dc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ce(e.mutations.length===s.length);let r=jE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new dc(e,n,s,r)}}/**
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
 */class ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bn{constructor(e,n,s,r,i=j.min(),o=j.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class hb{constructor(e){this.ie=e}}function fb(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sa(e,e.limit,"L"):e}/**
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
 */class db{constructor(){this.Je=new pb}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Yt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ie(fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(fe.comparator)).toArray()}}/**
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
 */class Xn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Xn(0)}static vn(){return new Xn(-1)}}/**
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
 */class gb{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&_s(s.mutation,r,at.empty(),Te.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=gs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Pt();const o=Ss(),a=Ss();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof nn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),_s(u.mutation,l,u.mutation.getFieldMask(),Te.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new mb(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ss();let r=new _e((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||at.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||Y()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Nd();u.forEach(p=>{if(!i.has(p)){const g=_d(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(yn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:xd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let r=gs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=gs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Oi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Pe.newInvalidDocument(l)))});let o=gs();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&_s(l.mutation,c,at.empty(),Te.now()),uc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class vb{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ct(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:fb(s.bundledQuery),readTime:Ct(s.readTime)}}(n)),T.resolve()}}/**
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
 */class wb{constructor(){this.overlays=new _e(F.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=yn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=yn(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new _e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ub(n,s));let i=this.es.get(n);i===void 0&&(i=Y(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class pc{constructor(){this.ns=new Ie(Se.ss),this.rs=new Ie(Se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Se(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Se(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new F(new fe([])),s=new Se(n,e),r=new Se(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new F(new fe([])),s=new Se(n,e),r=new Se(n,e+1);let i=Y();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Se(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return F.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||F.comparator(e.key,n.key)}}/**
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
 */class Eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ie(Se.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Se(n,0),r=new Se(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ie(se);return n.forEach(r=>{const i=new Se(r,0),o=new Se(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const o=new Se(new F(i),0);let a=new Ie(se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ce(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Se(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Se(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bb{constructor(e){this.Es=e,this.docs=new _e(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=Pt();const i=new F(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||aE(oE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){U()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Tb(this)}getSize(e){return T.resolve(this.size)}}class Tb extends gb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Ib{constructor(e){this.persistence=e,this.Rs=new os(n=>ac(n),cc),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new pc,this.targetCount=0,this.vs=Xn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Xn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class Cb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ic(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ib(this),this.indexManager=new db,this.remoteDocumentCache=function(s){return new bb(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new hb(n),this.Ns=new vb(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Eb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){R("MemoryPersistence","Starting transaction:",e);const r=new _b(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class _b extends lE{constructor(e){super(),this.currentSequenceNumber=e}}class gc{constructor(e){this.persistence=e,this.Fs=new pc,this.$s=null}static Bs(e){return new gc(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=F.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class mc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mc(e,n.fromCache,s,r)}}/**
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
 */class Sb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(eu(n))return T.resolve(null);let s=Ft(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=sa(n,null,"F"),s=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,sa(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return eu(n)||r.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Kl()<=ne.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ra(n)),this.Bi(e,o,n,iE(r,-1)))})}Fi(e,n){let s=new Ie(vd(e));return n.forEach((r,i)=>{uc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Kl()<=ne.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ra(n)),this.Ni.getDocumentsMatchingQuery(e,n,Yt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ab{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new _e(se),this.Ui=new os(i=>ac(i),cc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Db(t,e,n,s){return new Ab(t,e,n,s)}async function $d(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Y();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function xb(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=T.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(I=>{const E=c.docVersions.get(g);ce(E!==null),I.version.compareTo(E)<0&&(u.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),l.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Bd(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Nb(t,e){const n=K(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(I,E,O){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=Pt(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kb(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(j.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function kb(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Rb(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ob(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new bn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function ca(t,e,n){const s=K(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!nr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function lu(t,e,n){const s=K(t);let r=j.min(),i=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=K(a),f=u.Ui.get(l);return f!==void 0?T.resolve(u.qi.get(f)):u.Cs.getTargetData(c,l)}(s,o,Ft(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:j.min(),n?i:Y())).next(a=>(Mb(s,xE(e),a),{documents:a,Hi:i})))}function Mb(t,e,n){let s=t.Ki.get(e)||j.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class uu{constructor(){this.activeTargetIds=kd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lb{constructor(){this.Lr=new uu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new uu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fb{Ur(e){}shutdown(){}}/**
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
 */class hu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Vb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Ub extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);R("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Zo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Pb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Q0;a.setWithCredentials(!0),a.listenOnce(z0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vo.NO_ERROR:const l=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(l)),i(l);break;case vo.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new P(b.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const u=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(E)>=0?E:b.UNKNOWN}(p.status);o(new P(g,p.message))}else o(new P(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(b.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=H0(),o=K0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new G0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");R("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new Vb({Hr:I=>{f?R("Connection","Not sending because WebChannel is closed:",I):(u||(R("Connection","Opening WebChannel transport."),l.open(),u=!0),R("Connection","WebChannel sending:",I),l.send(I))},Jr:()=>l.close()}),g=(I,E,O)=>{I.listen(E,H=>{try{O(H)}catch(ee){setTimeout(()=>{throw ee},0)}})};return g(l,vr.EventType.OPEN,()=>{f||R("Connection","WebChannel transport opened.")}),g(l,vr.EventType.CLOSE,()=>{f||(f=!0,R("Connection","WebChannel transport closed"),p.io())}),g(l,vr.EventType.ERROR,I=>{f||(f=!0,Zo("Connection","WebChannel transport errored:",I),p.io(new P(b.UNAVAILABLE,"The operation could not be completed")))}),g(l,vr.EventType.MESSAGE,I=>{var E;if(!f){const O=I.data[0];ce(!!O);const H=O,ee=H.error||((E=H[0])===null||E===void 0?void 0:E.error);if(ee){R("Connection","WebChannel received error:",ee);const V=ee.status;let X=function(gt){const Le=we[gt];if(Le!==void 0)return Ad(Le)}(V),de=ee.message;X===void 0&&(X=b.INTERNAL,de="Unknown error status: "+V+" with message "+ee.message),f=!0,p.io(new P(X,de)),l.close()}else R("Connection","WebChannel received:",O),p.ro(O)}}),g(o,W0.STAT_EVENT,I=>{I.stat===ql.PROXY?R("Connection","Detected buffering proxy"):I.stat===ql.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Eo(){return typeof document<"u"?document:null}/**
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
 */function Vi(t){return new QE(t,!0)}class jd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class qd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new jd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Lt(n.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new P(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $b extends qd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=JE(this.yt,e),s=function(r){if(!("targetChange"in r))return j.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?j.min():i.readTime?Ct(i.readTime):j.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=aa(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=na(a)?{documents:tb(r,a)}:{query:nb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Md(r,i.resumeToken):i.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Xr(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=rb(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=aa(this.yt),n.removeTarget=e,this.Bo(n)}}class Bb extends qd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=eb(e.writeResults,e.commitTime),s=Ct(e.commitTime);return this.listener.Zo(s,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=aa(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ZE(this.yt,s))};this.Bo(n)}}/**
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
 */class jb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new P(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(b.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lt(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Hb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Nn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c._u.add(4),await ir(c),c.gu.set("Unknown"),c._u.delete(4),await Ui(c)}(this))})}),this.gu=new qb(s,r)}}async function Ui(t){if(Nn(t))for(const e of t.wu)await e(!0)}async function ir(t){for(const e of t.wu)await e(!1)}function Hd(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wc(n)?vc(n):as(n).ko()&&yc(n,e))}function Kd(t,e){const n=K(t),s=as(n);n.du.delete(e),s.ko()&&zd(n,e),n.du.size===0&&(s.ko()?s.Fo():Nn(n)&&n.gu.set("Unknown"))}function yc(t,e){t.yu.Ot(e.targetId),as(t).zo(e)}function zd(t,e){t.yu.Ot(e),as(t).Ho(e)}function vc(t){t.yu=new KE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),as(t).start(),t.gu.uu()}function wc(t){return Nn(t)&&!as(t).No()&&t.du.size>0}function Nn(t){return K(t)._u.size===0}function Wd(t){t.yu=void 0}async function Kb(t){t.du.forEach((e,n)=>{yc(t,e)})}async function zb(t,e){Wd(t),wc(t)?(t.gu.hu(e),vc(t)):t.gu.set("Unknown")}async function Wb(t,e,n){if(t.gu.set("Online"),e instanceof Od&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jr(t,s)}else if(e instanceof Ar?t.yu.Kt(e):e instanceof Rd?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(j.min()))try{const s=await Bd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),zd(r,a);const l=new bn(c.target,a,1,c.sequenceNumber);yc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await Jr(t,s)}}async function Jr(t,e,n){if(!nr(e))throw e;t._u.add(1),await ir(t),t.gu.set("Offline"),n||(n=()=>Bd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ui(t)})}function Gd(t,e){return e().catch(n=>Jr(t,n,e))}async function $i(t){const e=K(t),n=Jt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Gb(e);)try{const r=await Rb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Qb(e,r)}catch(r){await Jr(e,r)}Qd(e)&&Yd(e)}function Gb(t){return Nn(t)&&t.fu.length<10}function Qb(t,e){t.fu.push(e);const n=Jt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Qd(t){return Nn(t)&&!Jt(t).No()&&t.fu.length>0}function Yd(t){Jt(t).start()}async function Yb(t){Jt(t).eu()}async function Xb(t){const e=Jt(t);for(const n of t.fu)e.Xo(n.mutations)}async function Jb(t,e,n){const s=t.fu.shift(),r=dc.from(s,e,n);await Gd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $i(t)}async function Zb(t,e){e&&Jt(t).Yo&&await async function(n,s){if(r=s.code,$E(r)&&r!==b.ABORTED){const i=n.fu.shift();Jt(n).Mo(),await Gd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $i(n)}var r}(t,e),Qd(t)&&Yd(t)}async function fu(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=Nn(n);n._u.add(3),await ir(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ui(n)}async function eT(t,e){const n=K(t);e?(n._u.delete(2),await Ui(n)):e||(n._u.add(2),await ir(n),n.gu.set("Unknown"))}function as(t){return t.pu||(t.pu=function(e,n,s){const r=K(e);return r.su(),new $b(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Kb.bind(null,t),Zr:zb.bind(null,t),Wo:Wb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),wc(t)?vc(t):t.gu.set("Unknown")):(await t.pu.stop(),Wd(t))})),t.pu}function Jt(t){return t.Iu||(t.Iu=function(e,n,s){const r=K(e);return r.su(),new Bb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Yb.bind(null,t),Zr:Zb.bind(null,t),tu:Xb.bind(null,t),Zo:Jb.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await $i(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ec{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ec(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bc(t,e){if(Lt("AsyncQueue",`${e}: ${t}`),nr(t))return new P(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class jn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=gs(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new jn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class du{constructor(){this.Tu=new _e(F.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Jn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Jn(e,n,jn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class tT{constructor(){this.Au=void 0,this.listeners=[]}}class nT{constructor(){this.queries=new os(e=>yd(e),Mi),this.onlineState="Unknown",this.Ru=new Set}}async function Xd(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new tT),r)try{i.Au=await n.onListen(s)}catch(o){const a=bc(o,`Initialization of query '${ra(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Tc(n)}async function Jd(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function sT(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Tc(n)}function rT(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Tc(t){t.Ru.forEach(e=>{e.next()})}class Zd{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class ep{constructor(e){this.key=e}}class tp{constructor(e){this.key=e}}class iT{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Y(),this.mutatedKeys=Y(),this.Gu=vd(e),this.Qu=new jn(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new du,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=uc(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;p&&g?p.data.isEqual(g.data)?I!==E&&(s.track({type:3,doc:g}),O=!0):this.Hu(p,g)||(s.track({type:2,doc:g}),O=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),O=!0):p&&!g&&(s.track({type:1,doc:p}),O=!0,(c||l)&&(a=!0)),O&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(f,p){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(f)-g(p)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Jn(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new du,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Y(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new tp(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ep(s))}),n}tc(e){this.qu=e.Hi,this.Ku=Y();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Jn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class oT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class aT{constructor(e){this.key=e,this.nc=!1}}class cT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new os(a=>yd(a),Mi),this.rc=new Map,this.oc=new Set,this.uc=new _e(F.comparator),this.cc=new Map,this.ac=new pc,this.hc={},this.lc=new Map,this.fc=Xn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function lT(t,e){const n=wT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Ob(n.localStore,Ft(e));n.isPrimaryClient&&Hd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await uT(n,e,s,a==="current",o.resumeToken)}return r}async function uT(t,e,n,s,r){t._c=(f,p,g)=>async function(I,E,O,H){let ee=E.view.Wu(O);ee.$i&&(ee=await lu(I.localStore,E.query,!1).then(({documents:de})=>E.view.Wu(de,ee)));const V=H&&H.targetChanges.get(E.targetId),X=E.view.applyChanges(ee,I.isPrimaryClient,V);return gu(I,E.targetId,X.Xu),X.snapshot}(t,f,p,g);const i=await lu(t.localStore,e,!0),o=new iT(e,i.Hi),a=o.Wu(i.documents),c=rr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);gu(t,n,l.Xu);const u=new oT(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function hT(t,e){const n=K(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Mi(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ca(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kd(n.remoteStore,s.targetId),la(n,s.targetId)}).catch(tr)):(la(n,s.targetId),await ca(n.localStore,s.targetId,!0))}async function fT(t,e,n){const s=ET(t);try{const r=await function(i,o){const a=K(i),c=Te.now(),l=o.reduce((p,g)=>p.add(g.key),Y());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Pt(),I=Y();return a.Gi.getEntries(p,l).next(E=>{g=E,g.forEach((O,H)=>{H.isValidDocument()||(I=I.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(E=>{u=E;const O=[];for(const H of o){const ee=PE(H,u.get(H.key).overlayedDocument);ee!=null&&O.push(new nn(H.key,ee,md(ee.value.mapValue),dt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,O,o)}).next(E=>{f=E;const O=E.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(p,E.batchId,O)})}).then(()=>({batchId:f.batchId,changes:xd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new _e(se)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await or(s,r.changes),await $i(s.remoteStore)}catch(r){const i=bc(r,"Failed to persist write");n.reject(i)}}async function np(t,e){const n=K(t);try{const s=await Nb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?ce(o.nc):r.removedDocuments.size>0&&(ce(o.nc),o.nc=!1))}),await or(n,s,e)}catch(s){await tr(s)}}function pu(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&Tc(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dT(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new _e(F.comparator);o=o.insert(i,Pe.newNoDocument(i,j.min()));const a=Y().add(i),c=new Pi(j.min(),new Map,new Ie(se),o,a);await np(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Ic(s)}else await ca(s.localStore,e,!1).then(()=>la(s,e,n)).catch(tr)}async function pT(t,e){const n=K(t),s=e.batch.batchId;try{const r=await xb(n.localStore,e);rp(n,s,null),sp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await or(n,r)}catch(r){await tr(r)}}async function gT(t,e,n){const s=K(t);try{const r=await function(i,o){const a=K(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ce(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);rp(s,e,n),sp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await or(s,r)}catch(r){await tr(r)}}function sp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function rp(t,e,n){const s=K(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function la(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ip(t,s)})}function ip(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Kd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ic(t))}function gu(t,e,n){for(const s of n)s instanceof ep?(t.ac.addReference(s.key,e),mT(t,s)):s instanceof tp?(R("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ip(t,s.key)):U()}function mT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(R("SyncEngine","New document in limbo: "+n),t.oc.add(s),Ic(t))}function Ic(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new F(fe.fromString(e)),s=t.fc.next();t.cc.set(s,new aT(n)),t.uc=t.uc.insert(n,s),Hd(t.remoteStore,new bn(Ft(lc(n.path)),s,2,ic.at))}}async function or(t,e,n){const s=K(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=mc.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=K(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,f=>T.forEach(f.Si,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>T.forEach(f.Di,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!nr(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.qi.get(f),g=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(f,I)}}}(s.localStore,i))}async function yT(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await $d(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new P(b.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await or(n,s.ji)}}function vT(t,e){const n=K(t),s=n.cc.get(e);if(s&&s.nc)return Y().add(s.key);{let r=Y();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function wT(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=np.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dT.bind(null,e),e.sc.Wo=sT.bind(null,e.eventManager),e.sc.wc=rT.bind(null,e.eventManager),e}function ET(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gT.bind(null,e),e}class bT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Db(this.persistence,new Sb,e.initialUser,this.yt)}yc(e){return new Cb(gc.Bs,this.yt)}gc(e){return new Lb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yT.bind(null,this.syncEngine),await eT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nT}createDatastore(e){const n=Vi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Ub(r));var r;return function(i,o,a,c){return new jb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>pu(this.syncEngine,a,0),o=hu.C()?new hu:new Fb,new Hb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new cT(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ir(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function op(t,e,n){if(!n)throw new P(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IT(t,e,n,s){if(e===!0&&s===!0)throw new P(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mu(t){if(!F.isDocumentKey(t))throw new P(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yu(t){if(F.isDocumentKey(t))throw new P(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function _t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new P(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const vu=new Map;class wu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,IT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Bi{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Y0;switch(n.type){case"gapi":const s=n.client;return new eE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vu.get(e);n&&(R("ComponentProvider","Removing Datastore"),vu.delete(e),n.terminate())}(this),Promise.resolve()}}function CT(t,e,n,s={}){var r;const i=(t=_t(t,Bi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Fe.MOCK_USER;else{o=my(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(c)}t._authCredentials=new X0(new id(o,a))}}/**
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
 */class et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class ar{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ar(this.firestore,e,this._query)}}class zt extends ar{constructor(e,n,s){super(e,n,lc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new F(e))}withConverter(e){return new zt(this.firestore,e,this._path)}}function bo(t,e,...n){if(t=pt(t),op("collection","path",e),t instanceof Bi){const s=fe.fromString(e,...n);return yu(s),new zt(t,null,s)}{if(!(t instanceof et||t instanceof zt))throw new P(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return yu(s),new zt(t.firestore,null,s)}}function ua(t,e,...n){if(t=pt(t),arguments.length===1&&(e=od.R()),op("doc","path",e),t instanceof Bi){const s=fe.fromString(e,...n);return mu(s),new et(t,null,new F(s))}{if(!(t instanceof et||t instanceof zt))throw new P(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return mu(s),new et(t.firestore,t instanceof zt?t.converter:null,new F(s))}}/**
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
 */class ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _T{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Fe.UNAUTHENTICATED,this.clientId=od.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=bc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ST(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await $d(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function AT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DT(t);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>fu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fu(e.remoteStore,i)),t.onlineComponents=e}async function DT(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await ST(t,new bT)),t.offlineComponents}async function cp(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await AT(t,new TT)),t.onlineComponents}function xT(t){return cp(t).then(e=>e.syncEngine)}async function ha(t){const e=await cp(t),n=e.eventManager;return n.onListen=lT.bind(null,e.syncEngine),n.onUnlisten=hT.bind(null,e.syncEngine),n}function NT(t,e,n={}){const s=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new ap({next:f=>{i.enqueueAndForget(()=>Jd(r,u)),f.fromCache&&a.source==="server"?c.reject(new P(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new Zd(o,l,{includeMetadataChanges:!0,Nu:!0});return Xd(r,u)}(await ha(t),t.asyncQueue,e,n,s)),s.promise}class kT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new jd(this,"async_queue_retry"),this.Wc=()=>{const n=Eo();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Kt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!nr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Lt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ec.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Eu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class An extends Bi{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new kT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lp(this),this._firestoreClient.terminate()}}function RT(t,e){const n=typeof t=="object"?t:Nh(),s=typeof t=="string"?t:e||"(default)",r=Ks(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=dy("firestore");i&&CT(r,...i)}return r}function _c(t){return t._firestoreClient||lp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lp(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new uE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _T(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(Ke.fromBase64String(e))}catch(n){throw new P(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zn(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ji{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sc{constructor(e){this._methodName=e}}/**
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
 */class Ac{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const OT=/^__.*__$/;class MT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new nn(e,this.data,this.fieldMask,n,this.fieldTransforms):new sr(e,this.data,n,this.fieldTransforms)}}class up{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new nn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Dc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Dc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Zr(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(hp(this.sa)&&OT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class LT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Vi(e)}da(e,n,s,r=!1){return new Dc({sa:e,methodName:n,fa:s,path:Ue.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function fp(t){const e=t._freezeSettings(),n=Vi(t._databaseId);return new LT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);xc("Data must be an object, but it was:",o,s);const a=dp(s,o);let c,l;if(i.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=fa(e,f,n);if(!o.contains(p))throw new P(b.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gp(u,p)||u.push(p)}c=new at(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new MT(new Xe(a),c,l)}class qi extends Sc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qi}}function PT(t,e,n,s){const r=t.da(1,e,n);xc("Data must be an object, but it was:",r,s);const i=[],o=Xe.empty();xn(s,(c,l)=>{const u=Nc(e,c,n);l=pt(l);const f=r.ca(u);if(l instanceof qi)i.push(u);else{const p=Hi(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new at(i);return new up(o,a,r.fieldTransforms)}function VT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[fa(e,s,n)],c=[r];if(i.length%2!=0)throw new P(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(fa(e,i[p])),c.push(i[p+1]);const l=[],u=Xe.empty();for(let p=a.length-1;p>=0;--p)if(!gp(l,a[p])){const g=a[p];let I=c[p];I=pt(I);const E=o.ca(g);if(I instanceof qi)l.push(g);else{const O=Hi(I,E);O!=null&&(l.push(g),u.set(g,O))}}const f=new at(l);return new up(u,f,o.fieldTransforms)}function Hi(t,e){if(pp(t=pt(t)))return xc("Unsupported field value:",e,t),dp(t,e);if(t instanceof Sc)return function(n,s){if(!hp(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Hi(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kE(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Te.fromDate(n);return{timestampValue:Xr(s.yt,r)}}if(n instanceof Te){const r=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xr(s.yt,r)}}if(n instanceof Ac)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zn)return{bytesValue:Md(s.yt,n._byteString)};if(n instanceof et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Cc(n)}`)}(t,e)}function dp(t,e){const n={};return ad(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xn(t,(s,r)=>{const i=Hi(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function pp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Ac||t instanceof Zn||t instanceof et||t instanceof Sc)}function xc(t,e,n){if(!pp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Cc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function fa(t,e,n){if((e=pt(e))instanceof ji)return e._internalPath;if(typeof e=="string")return Nc(t,e);throw Zr("Field path arguments must be of type string or ",t,!1,void 0,n)}const UT=new RegExp("[~\\*/\\[\\]]");function Nc(t,e,n){if(e.search(UT)>=0)throw Zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ji(...e.split("."))._internalPath}catch{throw Zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(b.INVALID_ARGUMENT,a+t+c)}function gp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $T(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $T extends mp{data(){return super.data()}}function yp(t,e){return typeof e=="string"?Nc(t,e):e instanceof ji?e._internalPath:e._delegate._internalPath}/**
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
 */function vp(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BT{convertValue(e,n="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const s={};return xn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ac(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ld(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const n=Xt(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=fe.fromString(e);ce(Ud(s));const r=new $s(s.get(1),s.get(3)),i=new F(s.popFirst(5));return r.isEqual(n)||Lt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wp extends mp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(yp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Dr extends wp{data(e={}){return super.data(e)}}class Ep{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ms(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Dr(this._firestore,this._userDataWriter,s.key,s,new ms(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Dr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Dr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:qT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class kc extends BT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function HT(t){t=_t(t,ar);const e=_t(t.firestore,An),n=_c(e),s=new kc(e);return vp(t._query),NT(n,t._query).then(r=>new Ep(e,s,t,r))}function KT(t,e,n,...s){t=_t(t,et);const r=_t(t.firestore,An),i=fp(r);let o;return o=typeof(e=pt(e))=="string"||e instanceof ji?VT(i,"updateDoc",t._key,e,n,s):PT(i,"updateDoc",t._key,e),Rc(r,[o.toMutation(t._key,dt.exists(!0))])}function zT(t){return Rc(_t(t.firestore,An),[new hc(t._key,dt.none())])}function WT(t,e){const n=_t(t.firestore,An),s=ua(t),r=jT(t.converter,e);return Rc(n,[FT(fp(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,dt.exists(!1))]).then(()=>s)}function GT(t,...e){var n,s,r;t=pt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Eu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Eu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof et)l=_t(t.firestore,An),u=lc(t._key.path),c={next:f=>{e[o]&&e[o](QT(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=_t(t,ar);l=_t(f.firestore,An),u=f._query;const p=new kc(l);c={next:g=>{e[o]&&e[o](new Ep(l,p,f,g))},error:e[o+1],complete:e[o+2]},vp(t._query)}return function(f,p,g,I){const E=new ap(I),O=new Zd(p,E,g);return f.asyncQueue.enqueueAndForget(async()=>Xd(await ha(f),O)),()=>{E.bc(),f.asyncQueue.enqueueAndForget(async()=>Jd(await ha(f),O))}}(_c(l),u,a,c)}function Rc(t,e){return function(n,s){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>fT(await xT(n),s,r)),r.promise}(_c(t),e)}function QT(t,e,n){const s=n.docs.get(e._key),r=new kc(t);return new wp(t,r,e._key,s,new ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){is=n})(wv),Qt(new Ot("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new An(new J0(n.getProvider("auth-internal")),new nE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),It(Hl,"3.8.0",t),It(Hl,"3.8.0","esm2017")})();const YT=t=>(Tg("data-v-b6186b81"),t=t(),Ig(),t),XT=["onClick"],JT={class:"add-card-div"},ZT=YT(()=>G("br",null,null,-1)),eI={style:{"text-align":"center"}},tI=["src"],nI={for:"imgFile",class:"imgUploadBtn"},sI={class:"chooseColorDiv"},rI={for:"color01"},iI=["checked"],oI={for:"color02"},aI=["checked"],cI={for:"color03"},lI=["checked"],uI={for:"color04"},hI=["checked"],fI={for:"color05"},dI=["checked"],pI={style:{"text-align":"center",margin:"0"}},gI={__name:"App",setup(t){const n=xh({apiKey:"AIzaSyAkBG_WGNQRaaQVnPOvolvdy8eAXVPtMDo",authDomain:"note-d549b.firebaseapp.com",projectId:"note-d549b",storageBucket:"note-d549b.appspot.com",messagingSenderId:"381280428927",appId:"1:381280428927:web:69b4c78f9d65dca937704a",measurementId:"G-KPNSMZP8X7"});Hw(n);const s=RT(n),r="Note",i=lt({}),o=(A,k)=>Math.floor(Math.random()*k)+A,a=()=>{var A=(Math.round(Math.random())*2-1)*o(0,15),k=window.innerWidth,oe=window.innerHeight,me=o(15,k-400),Ne=o(15,oe-300);return{X:me,Y:Ne,Deg:A}},c=async A=>{try{const k=await WT(bo(s,r),A);V()}catch(k){console.error("Error adding document: ",k),alert("圖片太大張了")}},l=async()=>{(await HT(bo(s,r))).forEach(k=>{k.id,k.data(),i.value[k.id]=k.data()})},u=async A=>{await zT(ua(s,r,A))};GT(bo(s,r),A=>{i.value={},A.docs.forEach(k=>{i.value[k.id]=k.data()})}),l();const f=A=>new Promise((k,oe)=>{let me=new FileReader;me.onload=()=>{k(me.result)},me.onerror=()=>{oe(me.error)},me.readAsDataURL(A)}),p=lt(""),g=lt(2),I=lt(""),E=lt(""),O=A=>{f(A).then(k=>{k.length>1048487?(alert("圖片檔案太大了!換一張!"),document.getElementById("imgFile").value=""):p.value=k}).catch(k=>console.log(k))},H=A=>{A.target.files.length>0&&O(A.target.files[0])},ee=()=>{document.getElementById("add-card-cover").classList.add("active")},V=()=>{document.getElementById("add-card-cover").classList.remove("active"),p.value="",g.value=2,I.value="",E.value=""},X=A=>A<10?"0"+A:A,de=A=>{let k=A.getFullYear(),oe=X(A.getMonth()+1),me=X(A.getDate()),Ne=X(A.getHours()),ls=X(A.getMinutes()),Ki=X(A.getSeconds());return k+"-"+oe+"-"+me+" "+Ne+":"+ls+":"+Ki},gt=()=>{var A=new Date;let k={Name:I.value,Content:E.value,ImageBase64:p.value,Color:g.value,Date:de(A),Pos:a()};c(k)},Le=lt(0),z=lt(0),pe=lt(!1),re=lt(""),De=lt(0),Ge=lt(0),st=async A=>{const k=ua(s,r,A);await KT(k,i.value[A])},sn=(A,k,oe)=>{pe.value=!0,re.value=oe,Le.value=A.clientX,z.value=A.clientY,De.value=A.clientX-k.Pos.X,Ge.value=A.clientY-k.Pos.Y,console.log(Le.value,z.value,De.value,Ge.value)},cs=A=>{Le.value=A.clientX,z.value=A.clientY,pe.value&&(i.value[re.value].Pos.X=Le.value-De.value,i.value[re.value].Pos.Y=z.value-Ge.value)},xe=A=>{pe.value=!1,st(re.value)},ue=A=>{pe.value=!1,st(re.value)};return(A,k)=>(Es(),Mo(Ye,null,[(Es(!0),Mo(Ye,null,zg(i.value,(oe,me)=>(Es(),gh(ny,{key:me,"card-key":me,"card-info":oe,onMousedown:Ne=>sn(Ne,oe,me),onMouseup:xe,onMousemove:cs},{default:Yu(()=>[G("div",{class:"delbtn",onClick:Ne=>u(me)},null,8,XT)]),_:2},1032,["card-key","card-info","onMousedown"]))),128)),G("div",{class:"add-card-cover",id:"add-card-cover",onMousemove:cs,onMouseup:ue},[G("div",JT,[G("div",{class:"closeBtn",onClick:k[0]||(k[0]=oe=>V())}),G("div",null,[hn(" 暱稱 "),Gc(G("input",{type:"text","onUpdate:modelValue":k[1]||(k[1]=oe=>I.value=oe),maxlength:"50"},null,512),[[fl,I.value]])]),G("div",null,[hn(" 內容 "),Gc(G("input",{type:"text","onUpdate:modelValue":k[2]||(k[2]=oe=>E.value=oe)},null,512),[[fl,E.value]])]),G("div",null,[hn(" 圖片"),ZT,G("div",eI,[G("img",{src:p.value,alt:""},null,8,tI)]),G("label",nI,[G("input",{type:"file",id:"imgFile",style:{display:"none"},accept:"image/png, image/jpeg, .gif",onChange:H},null,32),hn(" 上傳 ")])]),G("div",null,[hn(" 便條顏色 "),G("div",sI,[G("label",rI,[G("input",{type:"radio",name:"cardColor",id:"color01",onClick:k[3]||(k[3]=oe=>g.value=1),checked:g.value===1},null,8,iI)]),G("label",oI,[G("input",{type:"radio",name:"cardColor",id:"color02",onClick:k[4]||(k[4]=oe=>g.value=2),checked:g.value===2},null,8,aI)]),G("label",cI,[G("input",{type:"radio",name:"cardColor",id:"color03",onClick:k[5]||(k[5]=oe=>g.value=3),checked:g.value===3},null,8,lI)]),G("label",uI,[G("input",{type:"radio",name:"cardColor",id:"color04",onClick:k[6]||(k[6]=oe=>g.value=4),checked:g.value===4},null,8,hI)]),G("label",fI,[G("input",{type:"radio",name:"cardColor",id:"color05",onClick:k[7]||(k[7]=oe=>g.value=5),checked:g.value===5},null,8,dI)])])]),G("div",pI,[G("button",{class:"addCardBtn",onClick:k[8]||(k[8]=oe=>gt())},"新增")])])],32),G("button",{class:"addBtn",onClick:k[9]||(k[9]=oe=>ee())})],64))}},mI=Eh(gI,[["__scopeId","data-v-b6186b81"]]);Gm(mI).mount("#app");
