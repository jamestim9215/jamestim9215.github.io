(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function da(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function zs(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Sp(s):zs(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(ge(t))return t}}const Ip=/;(?![^(]*\))/g,_p=/:([^]+)/,Cp=/\/\*.*?\*\//gs;function Sp(t){const e={};return t.replace(Cp,"").split(Ip).forEach(n=>{if(n){const s=n.split(_p);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ni(t){let e="";if(_e(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=ni(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dp=da(Ap);function Tu(t){return!!t||t===""}const Qi=t=>_e(t)?t:t==null?"":q(t)||ge(t)&&(t.toString===Su||!W(t.toString))?JSON.stringify(t,Iu,2):String(t),Iu=(t,e)=>e&&e.__v_isRef?Iu(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:_u(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!q(e)&&!Au(e)?String(e):e,le={},Vn=[],ft=()=>{},xp=()=>!1,Np=/^on[^a-z]/,si=t=>Np.test(t),pa=t=>t.startsWith("onUpdate:"),He=Object.assign,ga=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kp=Object.prototype.hasOwnProperty,Z=(t,e)=>kp.call(t,e),q=Array.isArray,$n=t=>ri(t)==="[object Map]",_u=t=>ri(t)==="[object Set]",W=t=>typeof t=="function",_e=t=>typeof t=="string",ma=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Cu=t=>ge(t)&&W(t.then)&&W(t.catch),Su=Object.prototype.toString,ri=t=>Su.call(t),Rp=t=>ri(t).slice(8,-1),Au=t=>ri(t)==="[object Object]",ya=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ir=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Op=/-(\w)/g,Kn=ii(t=>t.replace(Op,(e,n)=>n?n.toUpperCase():"")),Mp=/\B([A-Z])/g,ns=ii(t=>t.replace(Mp,"-$1").toLowerCase()),Du=ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yi=ii(t=>t?`on${Du(t)}`:""),Ds=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Rr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vc;const Lp=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vt;class Fp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Pp(t,e=vt){e&&e.active&&e.effects.push(t)}const va=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xu=t=>(t.w&Gt)>0,Nu=t=>(t.n&Gt)>0,Vp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gt},$p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xu(r)&&!Nu(r)?r.delete(t):e[n++]=r,r.w&=~Gt,r.n&=~Gt}e.length=n}},Io=new WeakMap;let ps=0,Gt=1;const _o=30;let ut;const wn=Symbol(""),Co=Symbol("");class wa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pp(this,s)}run(){if(!this.active)return this.fn();let e=ut,n=Bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,Bt=!0,Gt=1<<++ps,ps<=_o?Vp(this):$c(this),this.fn()}finally{ps<=_o&&$p(this),Gt=1<<--ps,ut=this.parent,Bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&($c(this),this.onStop&&this.onStop(),this.active=!1)}}function $c(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bt=!0;const ku=[];function ss(){ku.push(Bt),Bt=!1}function rs(){const t=ku.pop();Bt=t===void 0?!0:t}function nt(t,e,n){if(Bt&&ut){let s=Io.get(t);s||Io.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=va()),Ru(r)}}function Ru(t,e){let n=!1;ps<=_o?Nu(t)||(t.n|=Gt,n=!xu(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Rt(t,e,n,s,r,i){const o=Io.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Rr(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?ya(n)&&a.push(o.get("length")):(a.push(o.get(wn)),$n(t)&&a.push(o.get(Co)));break;case"delete":q(t)||(a.push(o.get(wn)),$n(t)&&a.push(o.get(Co)));break;case"set":$n(t)&&a.push(o.get(wn));break}if(a.length===1)a[0]&&So(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);So(va(c))}}function So(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Uc(s);for(const s of n)s.computed||Uc(s)}function Uc(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Up=da("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ma)),Bp=Ea(),jp=Ea(!1,!0),qp=Ea(!0),Bc=Hp();function Hp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)nt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ss();const s=te(this)[e].apply(this,n);return rs(),s}}),t}function Ea(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?og:Vu:e?Pu:Fu).get(s))return s;const o=q(s);if(!t&&o&&Z(Bc,r))return Reflect.get(Bc,r,i);const a=Reflect.get(s,r,i);return(ma(r)?Ou.has(r):Up(r))||(t||nt(s,"get",r),e)?a:Ue(a)?o&&ya(r)?a:a.value:ge(a)?t?$u(a):Ia(a):a}}const Kp=Mu(),zp=Mu(!0);function Mu(t=!1){return function(n,s,r,i){let o=n[s];if(zn(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!Or(r)&&!zn(r)&&(o=te(o),r=te(r)),!q(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=q(n)&&ya(s)?Number(s)<n.length:Z(n,s),c=Reflect.set(n,s,r,i);return n===te(i)&&(a?Ds(r,o)&&Rt(n,"set",s,r):Rt(n,"add",s,r)),c}}function Wp(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Rt(t,"delete",e,void 0),s}function Gp(t,e){const n=Reflect.has(t,e);return(!ma(e)||!Ou.has(e))&&nt(t,"has",e),n}function Qp(t){return nt(t,"iterate",q(t)?"length":wn),Reflect.ownKeys(t)}const Lu={get:Bp,set:Kp,deleteProperty:Wp,has:Gp,ownKeys:Qp},Yp={get:qp,set(t,e){return!0},deleteProperty(t,e){return!0}},Xp=He({},Lu,{get:jp,set:zp}),ba=t=>t,oi=t=>Reflect.getPrototypeOf(t);function hr(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(e!==i&&nt(r,"get",e),nt(r,"get",i));const{has:o}=oi(r),a=s?ba:n?Ca:xs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function fr(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(t!==r&&nt(s,"has",t),nt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function dr(t,e=!1){return t=t.__v_raw,!e&&nt(te(t),"iterate",wn),Reflect.get(t,"size",t)}function jc(t){t=te(t);const e=te(this);return oi(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function qc(t,e){e=te(e);const n=te(this),{has:s,get:r}=oi(n);let i=s.call(n,t);i||(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ds(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function Hc(t){const e=te(this),{has:n,get:s}=oi(e);let r=n.call(e,t);r||(t=te(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Rt(e,"delete",t,void 0),i}function Kc(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function pr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?ba:t?Ca:xs;return!t&&nt(a,"iterate",wn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function gr(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=$n(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ba:e?Ca:xs;return!e&&nt(i,"iterate",c?Co:wn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function Jp(){const t={get(i){return hr(this,i)},get size(){return dr(this)},has:fr,add:jc,set:qc,delete:Hc,clear:Kc,forEach:pr(!1,!1)},e={get(i){return hr(this,i,!1,!0)},get size(){return dr(this)},has:fr,add:jc,set:qc,delete:Hc,clear:Kc,forEach:pr(!1,!0)},n={get(i){return hr(this,i,!0)},get size(){return dr(this,!0)},has(i){return fr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:pr(!0,!1)},s={get(i){return hr(this,i,!0,!0)},get size(){return dr(this,!0)},has(i){return fr.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gr(i,!1,!1),n[i]=gr(i,!0,!1),e[i]=gr(i,!1,!0),s[i]=gr(i,!0,!0)}),[t,n,e,s]}const[Zp,eg,tg,ng]=Jp();function Ta(t,e){const n=e?t?ng:tg:t?eg:Zp;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,i)}const sg={get:Ta(!1,!1)},rg={get:Ta(!1,!0)},ig={get:Ta(!0,!1)},Fu=new WeakMap,Pu=new WeakMap,Vu=new WeakMap,og=new WeakMap;function ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cg(t){return t.__v_skip||!Object.isExtensible(t)?0:ag(Rp(t))}function Ia(t){return zn(t)?t:_a(t,!1,Lu,sg,Fu)}function lg(t){return _a(t,!1,Xp,rg,Pu)}function $u(t){return _a(t,!0,Yp,ig,Vu)}function _a(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=cg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Un(t){return zn(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function zn(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function Uu(t){return Un(t)||zn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Bu(t){return kr(t,"__v_skip",!0),t}const xs=t=>ge(t)?Ia(t):t,Ca=t=>ge(t)?$u(t):t;function ju(t){Bt&&ut&&(t=te(t),Ru(t.dep||(t.dep=va())))}function qu(t,e){t=te(t),t.dep&&So(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Ze(t){return ug(t,!1)}function ug(t,e){return Ue(t)?t:new hg(t,e)}class hg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:xs(e)}get value(){return ju(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||zn(e);e=n?e:te(e),Ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xs(e),qu(this))}}function fg(t){return Ue(t)?t.value:t}const dg={get:(t,e,n)=>fg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Hu(t){return Un(t)?t:new Proxy(t,dg)}var Ku;class pg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ku]=!1,this._dirty=!0,this.effect=new wa(e,()=>{this._dirty||(this._dirty=!0,qu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return ju(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ku="__v_isReadonly";function gg(t,e,n=!1){let s,r;const i=W(t);return i?(s=t,r=ft):(s=t.get,r=t.set),new pg(s,r,i||!r,n)}function jt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ai(i,e,n)}return r}function ot(t,e,n,s){if(W(t)){const i=jt(t,e,n,s);return i&&Cu(i)&&i.catch(o=>{ai(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ot(t[i],e,n,s));return r}function ai(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){jt(c,null,10,[t,o,a]);return}}mg(t,n,r,s)}function mg(t,e,n,s=!0){console.error(t)}let Ns=!1,Ao=!1;const Ve=[];let Et=0;const Bn=[];let Nt=null,un=0;const zu=Promise.resolve();let Sa=null;function yg(t){const e=Sa||zu;return t?e.then(this?t.bind(this):t):e}function vg(t){let e=Et+1,n=Ve.length;for(;e<n;){const s=e+n>>>1;ks(Ve[s])<t?e=s+1:n=s}return e}function Aa(t){(!Ve.length||!Ve.includes(t,Ns&&t.allowRecurse?Et+1:Et))&&(t.id==null?Ve.push(t):Ve.splice(vg(t.id),0,t),Wu())}function Wu(){!Ns&&!Ao&&(Ao=!0,Sa=zu.then(Qu))}function wg(t){const e=Ve.indexOf(t);e>Et&&Ve.splice(e,1)}function Eg(t){q(t)?Bn.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?un+1:un))&&Bn.push(t),Wu()}function zc(t,e=Ns?Et+1:0){for(;e<Ve.length;e++){const n=Ve[e];n&&n.pre&&(Ve.splice(e,1),e--,n())}}function Gu(t){if(Bn.length){const e=[...new Set(Bn)];if(Bn.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,s)=>ks(n)-ks(s)),un=0;un<Nt.length;un++)Nt[un]();Nt=null,un=0}}const ks=t=>t.id==null?1/0:t.id,bg=(t,e)=>{const n=ks(t)-ks(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qu(t){Ao=!1,Ns=!0,Ve.sort(bg);const e=ft;try{for(Et=0;Et<Ve.length;Et++){const n=Ve[Et];n&&n.active!==!1&&jt(n,null,14)}}finally{Et=0,Ve.length=0,Gu(),Ns=!1,Sa=null,(Ve.length||Bn.length)&&Qu()}}function Tg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||le;p&&(r=n.map(g=>_e(g)?g.trim():g)),f&&(r=n.map(Rr))}let a,c=s[a=Yi(e)]||s[a=Yi(Kn(e))];!c&&i&&(c=s[a=Yi(ns(e))]),c&&ot(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ot(l,t,6,r)}}function Yu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Yu(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ge(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):He(o,i),ge(t)&&s.set(t,o),o)}function ci(t,e){return!t||!si(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,ns(e))||Z(t,e))}let Be=null,li=null;function Mr(t){const e=Be;return Be=t,li=t&&t.type.__scopeId||null,e}function Ig(t){li=t}function _g(){li=null}function Xu(t,e=Be,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&nl(-1);const i=Mr(e);let o;try{o=t(...r)}finally{Mr(i),s._d&&nl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Xi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:I,inheritAttrs:E}=t;let O,H;const ee=Mr(t);try{if(n.shapeFlag&4){const X=r||s;O=wt(u.call(X,X,f,i,g,p,I)),H=c}else{const X=e;O=wt(X.length>1?X(i,{attrs:c,slots:a,emit:l}):X(i,null)),H=e.props?c:Cg(c)}}catch(X){bs.length=0,ai(X,t,1),O=It(Tt)}let V=O;if(H&&E!==!1){const X=Object.keys(H),{shapeFlag:de}=V;X.length&&de&7&&(o&&X.some(pa)&&(H=Sg(H,o)),V=Qt(V,H))}return n.dirs&&(V=Qt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,Mr(ee),O}const Cg=t=>{let e;for(const n in t)(n==="class"||n==="style"||si(n))&&((e||(e={}))[n]=t[n]);return e},Sg=(t,e)=>{const n={};for(const s in t)(!pa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ag(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!ci(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wc(s,o,l):!0:!!o;return!1}function Wc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ci(n,i))return!0}return!1}function Dg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xg=t=>t.__isSuspense;function Ng(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Eg(t)}function kg(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Cr(t,e,n=!1){const s=Re||Be;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const mr={};function Ji(t,e,n){return Ju(t,e,n)}function Ju(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=le){const a=Re;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=Or(t)):Un(t)?(c=()=>t,s=!0):q(t)?(u=!0,l=t.some(V=>Un(V)||Or(V)),c=()=>t.map(V=>{if(Ue(V))return V.value;if(Un(V))return pn(V);if(W(V))return jt(V,a,2)})):W(t)?e?c=()=>jt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),ot(t,a,3,[p])}:c=ft,e&&s){const V=c;c=()=>pn(V())}let f,p=V=>{f=H.onStop=()=>{jt(V,a,4)}},g;if(Os)if(p=ft,e?n&&ot(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const V=Sm();g=V.__watcherHandles||(V.__watcherHandles=[])}else return ft;let I=u?new Array(t.length).fill(mr):mr;const E=()=>{if(H.active)if(e){const V=H.run();(s||l||(u?V.some((X,de)=>Ds(X,I[de])):Ds(V,I)))&&(f&&f(),ot(e,a,3,[V,I===mr?void 0:u&&I[0]===mr?[]:I,p]),I=V)}else H.run()};E.allowRecurse=!!e;let O;r==="sync"?O=E:r==="post"?O=()=>Ye(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),O=()=>Aa(E));const H=new wa(c,O);e?n?E():I=H.run():r==="post"?Ye(H.run.bind(H),a&&a.suspense):H.run();const ee=()=>{H.stop(),a&&a.scope&&ga(a.scope.effects,H)};return g&&g.push(ee),ee}function Rg(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?Zu(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=Re;Wn(this);const a=Ju(r,i.bind(s),n);return o?Wn(o):En(),a}function Zu(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function pn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))pn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)pn(t[n],e);else if(_u(t)||$n(t))t.forEach(n=>{pn(n,e)});else if(Au(t))for(const n in t)pn(t[n],e);return t}function Og(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sh(()=>{t.isMounted=!0}),rh(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],Mg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(t,{slots:e}){const n=vm(),s=Og();let r;return()=>{const i=e.default&&th(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==Tt){o=E;break}}const a=te(t),{mode:c}=a;if(s.isLeaving)return Zi(o);const l=Gc(o);if(!l)return Zi(o);const u=Do(l,a,s,n);xo(l,u);const f=n.subTree,p=f&&Gc(f);let g=!1;const{getTransitionKey:I}=l.type;if(I){const E=I();r===void 0?r=E:E!==r&&(r=E,g=!0)}if(p&&p.type!==Tt&&(!hn(l,p)||g)){const E=Do(p,a,s,n);if(xo(p,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Zi(o);c==="in-out"&&l.type!==Tt&&(E.delayLeave=(O,H,ee)=>{const V=eh(s,p);V[String(p.key)]=p,O._leaveCb=()=>{H(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ee})}return o}}},Lg=Mg;function eh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Do(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:E,onAppear:O,onAfterAppear:H,onAppearCancelled:ee}=e,V=String(t.key),X=eh(n,t),de=(z,pe)=>{z&&ot(z,s,9,pe)},gt=(z,pe)=>{const re=pe[1];de(z,pe),q(z)?z.every(De=>De.length<=1)&&re():z.length<=1&&re()},Le={mode:i,persisted:o,beforeEnter(z){let pe=a;if(!n.isMounted)if(r)pe=E||a;else return;z._leaveCb&&z._leaveCb(!0);const re=X[V];re&&hn(t,re)&&re.el._leaveCb&&re.el._leaveCb(),de(pe,[z])},enter(z){let pe=c,re=l,De=u;if(!n.isMounted)if(r)pe=O||c,re=H||l,De=ee||u;else return;let Qe=!1;const rt=z._enterCb=rn=>{Qe||(Qe=!0,rn?de(De,[z]):de(re,[z]),Le.delayedLeave&&Le.delayedLeave(),z._enterCb=void 0)};pe?gt(pe,[z,rt]):rt()},leave(z,pe){const re=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return pe();de(f,[z]);let De=!1;const Qe=z._leaveCb=rt=>{De||(De=!0,pe(),rt?de(I,[z]):de(g,[z]),z._leaveCb=void 0,X[re]===t&&delete X[re])};X[re]=t,p?gt(p,[z,Qe]):Qe()},clone(z){return Do(z,e,n,s)}};return Le}function Zi(t){if(ui(t))return t=Qt(t),t.children=null,t}function Gc(t){return ui(t)?t.children?t.children[0]:void 0:t}function xo(t,e){t.shapeFlag&6&&t.component?xo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function th(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===We?(o.patchFlag&128&&r++,s=s.concat(th(o.children,e,a))):(e||o.type!==Tt)&&s.push(a!=null?Qt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const ws=t=>!!t.type.__asyncLoader,ui=t=>t.type.__isKeepAlive;function Fg(t,e){nh(t,"a",e)}function Pg(t,e){nh(t,"da",e)}function nh(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(hi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ui(r.parent.vnode)&&Vg(s,e,n,r),r=r.parent}}function Vg(t,e,n,s){const r=hi(e,t,s,!0);ih(()=>{ga(s[e],r)},n)}function hi(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ss(),Wn(n);const a=ot(e,n,t,o);return En(),rs(),a});return s?r.unshift(i):r.push(i),i}}const Vt=t=>(e,n=Re)=>(!Os||t==="sp")&&hi(t,(...s)=>e(...s),n),$g=Vt("bm"),sh=Vt("m"),Ug=Vt("bu"),Bg=Vt("u"),rh=Vt("bum"),ih=Vt("um"),jg=Vt("sp"),qg=Vt("rtg"),Hg=Vt("rtc");function Kg(t,e=Re){hi("ec",t,e)}function Qc(t,e){const n=Be;if(n===null)return t;const s=pi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=le]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&pn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function on(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ss(),ot(c,n,8,[t.el,a,t,e]),rs())}}const zg=Symbol();function oh(t,e,n,s){let r;const i=n&&n[s];if(q(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Wg(t,e,n={},s,r){if(Be.isCE||Be.parent&&ws(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),It("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),qt();const o=i&&ah(i(n)),a=yh(We,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ah(t){return t.some(e=>vh(e)?!(e.type===Tt||e.type===We&&!ah(e.children)):!0)?t:null}const No=t=>t?Eh(t)?pi(t)||t.proxy:No(t.parent):null,Es=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>No(t.parent),$root:t=>No(t.root),$emit:t=>t.emit,$options:t=>Da(t),$forceUpdate:t=>t.f||(t.f=()=>Aa(t.update)),$nextTick:t=>t.n||(t.n=yg.bind(t.proxy)),$watch:t=>Rg.bind(t)}),eo=(t,e)=>t!==le&&!t.__isScriptSetup&&Z(t,e),Gg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(eo(s,e))return o[e]=1,s[e];if(r!==le&&Z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==le&&Z(n,e))return o[e]=4,n[e];ko&&(o[e]=0)}}const u=Es[e];let f,p;if(u)return e==="$attrs"&&nt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&Z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return eo(r,e)?(r[e]=n,!0):s!==le&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Z(t,o)||eo(e,o)||(a=i[0])&&Z(a,o)||Z(s,o)||Z(Es,o)||Z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ko=!0;function Qg(t){const e=Da(t),n=t.proxy,s=t.ctx;ko=!1,e.beforeCreate&&Yc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:I,activated:E,deactivated:O,beforeDestroy:H,beforeUnmount:ee,destroyed:V,unmounted:X,render:de,renderTracked:gt,renderTriggered:Le,errorCaptured:z,serverPrefetch:pe,expose:re,inheritAttrs:De,components:Qe,directives:rt,filters:rn}=e;if(l&&Yg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const A=o[ue];W(A)&&(s[ue]=A.bind(n))}if(r){const ue=r.call(n,n);ge(ue)&&(t.data=Ia(ue))}if(ko=!0,i)for(const ue in i){const A=i[ue],k=W(A)?A.bind(n,n):W(A.get)?A.get.bind(n,n):ft,oe=!W(A)&&W(A.set)?A.set.bind(n):ft,me=_m({get:k,set:oe});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ne=>me.value=Ne})}if(a)for(const ue in a)ch(a[ue],s,n,ue);if(c){const ue=W(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(A=>{kg(A,ue[A])})}u&&Yc(u,t,"c");function xe(ue,A){q(A)?A.forEach(k=>ue(k.bind(n))):A&&ue(A.bind(n))}if(xe($g,f),xe(sh,p),xe(Ug,g),xe(Bg,I),xe(Fg,E),xe(Pg,O),xe(Kg,z),xe(Hg,gt),xe(qg,Le),xe(rh,ee),xe(ih,X),xe(jg,pe),q(re))if(re.length){const ue=t.exposed||(t.exposed={});re.forEach(A=>{Object.defineProperty(ue,A,{get:()=>n[A],set:k=>n[A]=k})})}else t.exposed||(t.exposed={});de&&t.render===ft&&(t.render=de),De!=null&&(t.inheritAttrs=De),Qe&&(t.components=Qe),rt&&(t.directives=rt)}function Yg(t,e,n=ft,s=!1){q(t)&&(t=Ro(t));for(const r in t){const i=t[r];let o;ge(i)?"default"in i?o=Cr(i.from||r,i.default,!0):o=Cr(i.from||r):o=Cr(i),Ue(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Yc(t,e,n){ot(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ch(t,e,n,s){const r=s.includes(".")?Zu(n,s):()=>n[s];if(_e(t)){const i=e[t];W(i)&&Ji(r,i)}else if(W(t))Ji(r,t.bind(n));else if(ge(t))if(q(t))t.forEach(i=>ch(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Ji(r,i,t)}}function Da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Lr(c,l,o,!0)),Lr(c,e,o)),ge(e)&&i.set(e,c),c}function Lr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Lr(t,i,n,!0),r&&r.forEach(o=>Lr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xg={data:Xc,props:cn,emits:cn,methods:cn,computed:cn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:cn,directives:cn,watch:Zg,provide:Xc,inject:Jg};function Xc(t,e){return e?t?function(){return He(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Jg(t,e){return cn(Ro(t),Ro(e))}function Ro(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function cn(t,e){return t?He(He(Object.create(null),t),e):e}function Zg(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function em(t,e,n,s=!1){const r={},i={};kr(i,di,1),t.propsDefaults=Object.create(null),lh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:lg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function tm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ci(t.emitsOptions,p))continue;const g=e[p];if(c)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const I=Kn(p);r[I]=Oo(c,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{lh(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=ns(f))===f||!Z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Oo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&Rt(t,"set","$attrs")}function lh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ir(c))continue;const l=e[c];let u;r&&Z(r,u=Kn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ci(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Oo(r,c,f,l[f],t,!Z(l,f))}}return o}function Oo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Wn(r),s=l[n]=c.call(null,e),En())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ns(n))&&(s=!0))}return s}function uh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[p,g]=uh(f,e,!0);He(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ge(t)&&s.set(t,Vn),Vn;if(q(i))for(let u=0;u<i.length;u++){const f=Kn(i[u]);Jc(f)&&(o[f]=le)}else if(i)for(const u in i){const f=Kn(u);if(Jc(f)){const p=i[u],g=o[f]=q(p)||W(p)?{type:p}:Object.assign({},p);if(g){const I=tl(Boolean,g.type),E=tl(String,g.type);g[0]=I>-1,g[1]=E<0||I<E,(I>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return ge(t)&&s.set(t,l),l}function Jc(t){return t[0]!=="$"}function Zc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function el(t,e){return Zc(t)===Zc(e)}function tl(t,e){return q(e)?e.findIndex(n=>el(n,t)):W(e)&&el(e,t)?0:-1}const hh=t=>t[0]==="_"||t==="$stable",xa=t=>q(t)?t.map(wt):[wt(t)],nm=(t,e,n)=>{if(e._n)return e;const s=Xu((...r)=>xa(e(...r)),n);return s._c=!1,s},fh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hh(r))continue;const i=t[r];if(W(i))e[r]=nm(r,i,s);else if(i!=null){const o=xa(i);e[r]=()=>o}}},dh=(t,e)=>{const n=xa(e);t.slots.default=()=>n},sm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),kr(e,"_",n)):fh(e,t.slots={})}else t.slots={},e&&dh(t,e);kr(t.slots,di,1)},rm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(He(r,e),!n&&a===1&&delete r._):(i=!e.$stable,fh(e,r)),o=e}else e&&(dh(t,e),o={default:1});if(i)for(const a in r)!hh(a)&&!(a in o)&&delete r[a]};function ph(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let im=0;function om(t,e){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!ge(r)&&(r=null);const i=ph(),o=new Set;let a=!1;const c=i.app={_uid:im++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Am,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=It(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,pi(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Mo(t,e,n,s,r=!1){if(q(t)){t.forEach((p,g)=>Mo(p,e&&(q(e)?e[g]:e),n,s,r));return}if(ws(s)&&!r)return;const i=s.shapeFlag&4?pi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):Ue(l)&&(l.value=null)),W(c))jt(c,a,12,[o,u]);else{const p=_e(c),g=Ue(c);if(p||g){const I=()=>{if(t.f){const E=p?Z(f,c)?f[c]:u[c]:c.value;r?q(E)&&ga(E,i):q(E)?E.includes(i)||E.push(i):p?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Ye(I,n)):I()}}}const Ye=Ng;function am(t){return cm(t)}function cm(t,e){const n=Lp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ft,insertStaticContent:I}=t,E=(h,d,m,v=null,y=null,C=null,D=!1,_=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!hn(h,d)&&(v=ur(h),Ne(h,y,C,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:x}=d;switch(w){case fi:O(h,d,m,v);break;case Tt:H(h,d,m,v);break;case to:h==null&&ee(d,m,v,D);break;case We:Qe(h,d,m,v,y,C,D,_,S);break;default:x&1?de(h,d,m,v,y,C,D,_,S):x&6?rt(h,d,m,v,y,C,D,_,S):(x&64||x&128)&&w.process(h,d,m,v,y,C,D,_,S,Rn)}M!=null&&y&&Mo(M,h&&h.ref,C,d||h,!d)},O=(h,d,m,v)=>{if(h==null)s(d.el=a(d.children),m,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},H=(h,d,m,v)=>{h==null?s(d.el=c(d.children||""),m,v):d.el=h.el},ee=(h,d,m,v)=>{[h.el,h.anchor]=I(h.children,d,m,v,h.el,h.anchor)},V=({el:h,anchor:d},m,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,m,v),h=y;s(d,m,v)},X=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},de=(h,d,m,v,y,C,D,_,S)=>{D=D||d.type==="svg",h==null?gt(d,m,v,y,C,D,_,S):pe(h,d,y,C,D,_,S)},gt=(h,d,m,v,y,C,D,_)=>{let S,w;const{type:M,props:x,shapeFlag:L,transition:B,dirs:Q}=h;if(S=h.el=o(h.type,C,x&&x.is,x),L&8?u(S,h.children):L&16&&z(h.children,S,null,v,y,C&&M!=="foreignObject",D,_),Q&&on(h,null,v,"created"),x){for(const ie in x)ie!=="value"&&!Ir(ie)&&i(S,ie,null,x[ie],C,h.children,v,y,xt);"value"in x&&i(S,"value",null,x.value),(w=x.onVnodeBeforeMount)&&yt(w,v,h)}Le(S,h,h.scopeId,D,v),Q&&on(h,null,v,"beforeMount");const ae=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;ae&&B.beforeEnter(S),s(S,d,m),((w=x&&x.onVnodeMounted)||ae||Q)&&Ye(()=>{w&&yt(w,v,h),ae&&B.enter(S),Q&&on(h,null,v,"mounted")},y)},Le=(h,d,m,v,y)=>{if(m&&g(h,m),v)for(let C=0;C<v.length;C++)g(h,v[C]);if(y){let C=y.subTree;if(d===C){const D=y.vnode;Le(h,D,D.scopeId,D.slotScopeIds,y.parent)}}},z=(h,d,m,v,y,C,D,_,S=0)=>{for(let w=S;w<h.length;w++){const M=h[w]=_?Ut(h[w]):wt(h[w]);E(null,M,d,m,v,y,C,D,_)}},pe=(h,d,m,v,y,C,D)=>{const _=d.el=h.el;let{patchFlag:S,dynamicChildren:w,dirs:M}=d;S|=h.patchFlag&16;const x=h.props||le,L=d.props||le;let B;m&&an(m,!1),(B=L.onVnodeBeforeUpdate)&&yt(B,m,d,h),M&&on(d,h,m,"beforeUpdate"),m&&an(m,!0);const Q=y&&d.type!=="foreignObject";if(w?re(h.dynamicChildren,w,_,m,v,Q,C):D||A(h,d,_,null,m,v,Q,C,!1),S>0){if(S&16)De(_,d,x,L,m,v,y);else if(S&2&&x.class!==L.class&&i(_,"class",null,L.class,y),S&4&&i(_,"style",x.style,L.style,y),S&8){const ae=d.dynamicProps;for(let ie=0;ie<ae.length;ie++){const ve=ae[ie],lt=x[ve],On=L[ve];(On!==lt||ve==="value")&&i(_,ve,lt,On,y,h.children,m,v,xt)}}S&1&&h.children!==d.children&&u(_,d.children)}else!D&&w==null&&De(_,d,x,L,m,v,y);((B=L.onVnodeUpdated)||M)&&Ye(()=>{B&&yt(B,m,d,h),M&&on(d,h,m,"updated")},v)},re=(h,d,m,v,y,C,D)=>{for(let _=0;_<d.length;_++){const S=h[_],w=d[_],M=S.el&&(S.type===We||!hn(S,w)||S.shapeFlag&70)?f(S.el):m;E(S,w,M,null,v,y,C,D,!0)}},De=(h,d,m,v,y,C,D)=>{if(m!==v){if(m!==le)for(const _ in m)!Ir(_)&&!(_ in v)&&i(h,_,m[_],null,D,d.children,y,C,xt);for(const _ in v){if(Ir(_))continue;const S=v[_],w=m[_];S!==w&&_!=="value"&&i(h,_,w,S,D,d.children,y,C,xt)}"value"in v&&i(h,"value",m.value,v.value)}},Qe=(h,d,m,v,y,C,D,_,S)=>{const w=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:B}=d;B&&(_=_?_.concat(B):B),h==null?(s(w,m,v),s(M,m,v),z(d.children,m,M,y,C,D,_,S)):x>0&&x&64&&L&&h.dynamicChildren?(re(h.dynamicChildren,L,m,y,C,D,_),(d.key!=null||y&&d===y.subTree)&&gh(h,d,!0)):A(h,d,m,M,y,C,D,_,S)},rt=(h,d,m,v,y,C,D,_,S)=>{d.slotScopeIds=_,h==null?d.shapeFlag&512?y.ctx.activate(d,m,v,D,S):rn(d,m,v,y,C,D,S):us(h,d,S)},rn=(h,d,m,v,y,C,D)=>{const _=h.component=ym(h,v,y);if(ui(h)&&(_.ctx.renderer=Rn),wm(_),_.asyncDep){if(y&&y.registerDep(_,xe),!h.el){const S=_.subTree=It(Tt);H(null,S,d,m)}return}xe(_,h,d,m,y,C,D)},us=(h,d,m)=>{const v=d.component=h.component;if(Ag(h,d,m))if(v.asyncDep&&!v.asyncResolved){ue(v,d,m);return}else v.next=d,wg(v.update),v.update();else d.el=h.el,v.vnode=d},xe=(h,d,m,v,y,C,D)=>{const _=()=>{if(h.isMounted){let{next:M,bu:x,u:L,parent:B,vnode:Q}=h,ae=M,ie;an(h,!1),M?(M.el=Q.el,ue(h,M,D)):M=Q,x&&_r(x),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&yt(ie,B,M,Q),an(h,!0);const ve=Xi(h),lt=h.subTree;h.subTree=ve,E(lt,ve,f(lt.el),ur(lt),h,y,C),M.el=ve.el,ae===null&&Dg(h,ve.el),L&&Ye(L,y),(ie=M.props&&M.props.onVnodeUpdated)&&Ye(()=>yt(ie,B,M,Q),y)}else{let M;const{el:x,props:L}=d,{bm:B,m:Q,parent:ae}=h,ie=ws(d);if(an(h,!1),B&&_r(B),!ie&&(M=L&&L.onVnodeBeforeMount)&&yt(M,ae,d),an(h,!0),x&&Gi){const ve=()=>{h.subTree=Xi(h),Gi(x,h.subTree,h,y,null)};ie?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{const ve=h.subTree=Xi(h);E(null,ve,m,v,h,y,C),d.el=ve.el}if(Q&&Ye(Q,y),!ie&&(M=L&&L.onVnodeMounted)){const ve=d;Ye(()=>yt(M,ae,ve),y)}(d.shapeFlag&256||ae&&ws(ae.vnode)&&ae.vnode.shapeFlag&256)&&h.a&&Ye(h.a,y),h.isMounted=!0,d=m=v=null}},S=h.effect=new wa(_,()=>Aa(w),h.scope),w=h.update=()=>S.run();w.id=h.uid,an(h,!0),w()},ue=(h,d,m)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,tm(h,d.props,v,m),rm(h,d.children,m),ss(),zc(),rs()},A=(h,d,m,v,y,C,D,_,S=!1)=>{const w=h&&h.children,M=h?h.shapeFlag:0,x=d.children,{patchFlag:L,shapeFlag:B}=d;if(L>0){if(L&128){oe(w,x,m,v,y,C,D,_,S);return}else if(L&256){k(w,x,m,v,y,C,D,_,S);return}}B&8?(M&16&&xt(w,y,C),x!==w&&u(m,x)):M&16?B&16?oe(w,x,m,v,y,C,D,_,S):xt(w,y,C,!0):(M&8&&u(m,""),B&16&&z(x,m,v,y,C,D,_,S))},k=(h,d,m,v,y,C,D,_,S)=>{h=h||Vn,d=d||Vn;const w=h.length,M=d.length,x=Math.min(w,M);let L;for(L=0;L<x;L++){const B=d[L]=S?Ut(d[L]):wt(d[L]);E(h[L],B,m,null,y,C,D,_,S)}w>M?xt(h,y,C,!0,!1,x):z(d,m,v,y,C,D,_,S,x)},oe=(h,d,m,v,y,C,D,_,S)=>{let w=0;const M=d.length;let x=h.length-1,L=M-1;for(;w<=x&&w<=L;){const B=h[w],Q=d[w]=S?Ut(d[w]):wt(d[w]);if(hn(B,Q))E(B,Q,m,null,y,C,D,_,S);else break;w++}for(;w<=x&&w<=L;){const B=h[x],Q=d[L]=S?Ut(d[L]):wt(d[L]);if(hn(B,Q))E(B,Q,m,null,y,C,D,_,S);else break;x--,L--}if(w>x){if(w<=L){const B=L+1,Q=B<M?d[B].el:v;for(;w<=L;)E(null,d[w]=S?Ut(d[w]):wt(d[w]),m,Q,y,C,D,_,S),w++}}else if(w>L)for(;w<=x;)Ne(h[w],y,C,!0),w++;else{const B=w,Q=w,ae=new Map;for(w=Q;w<=L;w++){const Je=d[w]=S?Ut(d[w]):wt(d[w]);Je.key!=null&&ae.set(Je.key,w)}let ie,ve=0;const lt=L-Q+1;let On=!1,Lc=0;const fs=new Array(lt);for(w=0;w<lt;w++)fs[w]=0;for(w=B;w<=x;w++){const Je=h[w];if(ve>=lt){Ne(Je,y,C,!0);continue}let mt;if(Je.key!=null)mt=ae.get(Je.key);else for(ie=Q;ie<=L;ie++)if(fs[ie-Q]===0&&hn(Je,d[ie])){mt=ie;break}mt===void 0?Ne(Je,y,C,!0):(fs[mt-Q]=w+1,mt>=Lc?Lc=mt:On=!0,E(Je,d[mt],m,null,y,C,D,_,S),ve++)}const Fc=On?lm(fs):Vn;for(ie=Fc.length-1,w=lt-1;w>=0;w--){const Je=Q+w,mt=d[Je],Pc=Je+1<M?d[Je+1].el:v;fs[w]===0?E(null,mt,m,Pc,y,C,D,_,S):On&&(ie<0||w!==Fc[ie]?me(mt,m,Pc,2):ie--)}}},me=(h,d,m,v,y=null)=>{const{el:C,type:D,transition:_,children:S,shapeFlag:w}=h;if(w&6){me(h.component.subTree,d,m,v);return}if(w&128){h.suspense.move(d,m,v);return}if(w&64){D.move(h,d,m,Rn);return}if(D===We){s(C,d,m);for(let x=0;x<S.length;x++)me(S[x],d,m,v);s(h.anchor,d,m);return}if(D===to){V(h,d,m);return}if(v!==2&&w&1&&_)if(v===0)_.beforeEnter(C),s(C,d,m),Ye(()=>_.enter(C),y);else{const{leave:x,delayLeave:L,afterLeave:B}=_,Q=()=>s(C,d,m),ae=()=>{x(C,()=>{Q(),B&&B()})};L?L(C,Q,ae):ae()}else s(C,d,m)},Ne=(h,d,m,v=!1,y=!1)=>{const{type:C,props:D,ref:_,children:S,dynamicChildren:w,shapeFlag:M,patchFlag:x,dirs:L}=h;if(_!=null&&Mo(_,null,m,h,!0),M&256){d.ctx.deactivate(h);return}const B=M&1&&L,Q=!ws(h);let ae;if(Q&&(ae=D&&D.onVnodeBeforeUnmount)&&yt(ae,d,h),M&6)Tp(h.component,m,v);else{if(M&128){h.suspense.unmount(m,v);return}B&&on(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,m,y,Rn,v):w&&(C!==We||x>0&&x&64)?xt(w,d,m,!1,!0):(C===We&&x&384||!y&&M&16)&&xt(S,d,m),v&&hs(h)}(Q&&(ae=D&&D.onVnodeUnmounted)||B)&&Ye(()=>{ae&&yt(ae,d,h),B&&on(h,null,d,"unmounted")},m)},hs=h=>{const{type:d,el:m,anchor:v,transition:y}=h;if(d===We){zi(m,v);return}if(d===to){X(h);return}const C=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:D,delayLeave:_}=y,S=()=>D(m,C);_?_(h.el,C,S):S()}else C()},zi=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},Tp=(h,d,m)=>{const{bum:v,scope:y,update:C,subTree:D,um:_}=h;v&&_r(v),y.stop(),C&&(C.active=!1,Ne(D,h,d,m)),_&&Ye(_,d),Ye(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},xt=(h,d,m,v=!1,y=!1,C=0)=>{for(let D=C;D<h.length;D++)Ne(h[D],d,m,v,y)},ur=h=>h.shapeFlag&6?ur(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Mc=(h,d,m)=>{h==null?d._vnode&&Ne(d._vnode,null,null,!0):E(d._vnode||null,h,d,null,null,null,m),zc(),Gu(),d._vnode=h},Rn={p:E,um:Ne,m:me,r:hs,mt:rn,mc:z,pc:A,pbc:re,n:ur,o:t};let Wi,Gi;return e&&([Wi,Gi]=e(Rn)),{render:Mc,hydrate:Wi,createApp:om(Mc,Wi)}}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gh(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ut(r[i]),a.el=o.el),n||gh(o,a)),a.type===fi&&(a.el=o.el)}}function lm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const um=t=>t.__isTeleport,We=Symbol(void 0),fi=Symbol(void 0),Tt=Symbol(void 0),to=Symbol(void 0),bs=[];let ht=null;function qt(t=!1){bs.push(ht=t?null:[])}function hm(){bs.pop(),ht=bs[bs.length-1]||null}let Rs=1;function nl(t){Rs+=t}function mh(t){return t.dynamicChildren=Rs>0?ht||Vn:null,hm(),Rs>0&&ht&&ht.push(t),t}function jn(t,e,n,s,r,i){return mh(G(t,e,n,s,r,i,!0))}function yh(t,e,n,s,r){return mh(It(t,e,n,s,r,!0))}function vh(t){return t?t.__v_isVNode===!0:!1}function hn(t,e){return t.type===e.type&&t.key===e.key}const di="__vInternal",wh=({key:t})=>t??null,Sr=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||Ue(t)||W(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function G(t,e=null,n=null,s=0,r=null,i=t===We?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wh(e),ref:e&&Sr(e),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return a?(Na(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),Rs>0&&!o&&ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ht.push(c),c}const It=fm;function fm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===zg)&&(t=Tt),vh(t)){const a=Qt(t,e,!0);return n&&Na(a,n),Rs>0&&!i&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Im(t)&&(t=t.__vccOpts),e){e=dm(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=ni(a)),ge(c)&&(Uu(c)&&!q(c)&&(c=He({},c)),e.style=zs(c))}const o=_e(t)?1:xg(t)?128:um(t)?64:ge(t)?4:W(t)?2:0;return G(t,e,n,s,r,o,i,!0)}function dm(t){return t?Uu(t)||di in t?He({},t):t:null}function Qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?pm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wh(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Sr(e)):[r,Sr(e)]:Sr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function fn(t=" ",e=0){return It(fi,null,t,e)}function wt(t){return t==null||typeof t=="boolean"?It(Tt):q(t)?It(We,null,t.slice()):typeof t=="object"?Ut(t):It(fi,null,String(t))}function Ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function Na(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Na(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(di in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[fn(e)]):n=8);t.children=e,t.shapeFlag|=n}function pm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ni([e.class,s.class]));else if(r==="style")e.style=zs([e.style,s.style]);else if(si(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yt(t,e,n,s=null){ot(t,e,7,[n,s])}const gm=ph();let mm=0;function ym(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gm,i={uid:mm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(s,r),emitsOptions:Yu(s,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tg.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const vm=()=>Re||Be,Wn=t=>{Re=t,t.scope.on()},En=()=>{Re&&Re.scope.off(),Re=null};function Eh(t){return t.vnode.shapeFlag&4}let Os=!1;function wm(t,e=!1){Os=e;const{props:n,children:s}=t.vnode,r=Eh(t);em(t,n,r,e),sm(t,s);const i=r?Em(t,e):void 0;return Os=!1,i}function Em(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bu(new Proxy(t.ctx,Gg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Tm(t):null;Wn(t),ss();const i=jt(s,t,0,[t.props,r]);if(rs(),En(),Cu(i)){if(i.then(En,En),e)return i.then(o=>{sl(t,o,e)}).catch(o=>{ai(o,t,0)});t.asyncDep=i}else sl(t,i,e)}else bh(t,e)}function sl(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Hu(e)),bh(t,n)}let rl;function bh(t,e,n){const s=t.type;if(!t.render){if(!e&&rl&&!s.render){const r=s.template||Da(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=He(He({isCustomElement:i,delimiters:a},o),c);s.render=rl(r,l)}}t.render=s.render||ft}Wn(t),ss(),Qg(t),rs(),En()}function bm(t){return new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}})}function Tm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=bm(t))},slots:t.slots,emit:t.emit,expose:e}}function pi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hu(Bu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)},has(e,n){return n in e||n in Es}}))}function Im(t){return W(t)&&"__vccOpts"in t}const _m=(t,e)=>gg(t,e,Os),Cm=Symbol(""),Sm=()=>Cr(Cm),Am="3.2.45",Dm="http://www.w3.org/2000/svg",dn=typeof document<"u"?document:null,il=dn&&dn.createElement("template"),xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?dn.createElementNS(Dm,t):dn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{il.innerHTML=s?`<svg>${t}</svg>`:t;const a=il.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Nm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function km(t,e,n){const s=t.style,r=_e(n);if(n&&!r){for(const i in n)Lo(s,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&Lo(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ol=/\s*!important$/;function Lo(t,e,n){if(q(n))n.forEach(s=>Lo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rm(t,e);ol.test(n)?t.setProperty(ns(s),n.replace(ol,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],no={};function Rm(t,e){const n=no[e];if(n)return n;let s=Kn(e);if(s!=="filter"&&s in t)return no[e]=s;s=Du(s);for(let r=0;r<al.length;r++){const i=al[r]+s;if(i in t)return no[e]=i}return e}const cl="http://www.w3.org/1999/xlink";function Om(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cl,e.slice(6,e.length)):t.setAttributeNS(cl,e,n);else{const i=Dp(e);n==null||i&&!Tu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Tu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Mn(t,e,n,s){t.addEventListener(e,n,s)}function Lm(t,e,n,s){t.removeEventListener(e,n,s)}function Fm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pm(e);if(s){const l=i[e]=Um(s,r);Mn(t,a,l,c)}else o&&(Lm(t,a,o,c),i[e]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function Pm(t){let e;if(ll.test(t)){e={};let s;for(;s=t.match(ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let so=0;const Vm=Promise.resolve(),$m=()=>so||(Vm.then(()=>so=0),so=Date.now());function Um(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Bm(s,n.value),e,5,[s])};return n.value=t,n.attached=$m(),n}function Bm(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ul=/^on[a-z]/,jm=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Nm(t,s,r):e==="style"?km(t,n,s):si(e)?pa(e)||Fm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qm(t,e,s,r))?Mm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Om(t,e,s,r))};function qm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ul.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ul.test(e)&&_e(n)?!1:e in t}const Hm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lg.props;const hl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>_r(e,n):e};function Km(t){t.target.composing=!0}function fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=hl(r);const i=s||r.props&&r.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Rr(a)),t._assign(a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",Km),Mn(t,"compositionend",fl),Mn(t,"change",fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=hl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Rr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zm=He({patchProp:jm},xm);let pl;function Wm(){return pl||(pl=am(zm))}const Gm=(...t)=>{const e=Wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qm(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qm(t){return _e(t)?document.querySelector(t):t}const ka=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Ym={class:"name"},Xm={class:"content"},Jm={class:"ImageBase64"},Zm=["src"],ey={class:"date"},ty={__name:"Card",props:{cardKey:String,cardInfo:Object},setup(t){const e=n=>`left: ${n.X}px;top: ${n.Y}px;transform: rotate(${n.Deg}deg);`;return(n,s)=>(qt(),jn("div",{class:ni(["card",{color01:t.cardInfo.Color==1,color02:t.cardInfo.Color==2,color03:t.cardInfo.Color==3,color04:t.cardInfo.Color==4,color05:t.cardInfo.Color==5}]),style:zs(e(t.cardInfo.Pos))},[Wg(n.$slots,"default",{},void 0,!0),G("div",Ym,[G("b",null,Qi(t.cardInfo.Name),1),fn(" 說")]),G("div",Xm,Qi(t.cardInfo.Content),1),G("div",Jm,[G("img",{src:t.cardInfo.ImageBase64,alt:""},null,8,Zm)]),G("div",ey,Qi(t.cardInfo.Date),1)],6))}},ny=ka(ty,[["__scopeId","data-v-235364bb"]]);const sy={class:"boxing"},ry={__name:"Snow",setup(t){const e=Ze(30),n=Ze([]),s=(c,l)=>Math.floor(Math.random()*l)+c;for(var r=0;r<e.value;r++){var i=s(10,50),o=(Math.round(Math.random())*2-1)*s(60,720),a=`left: ${s(0,100)}%; width: ${i}px;height: ${i}px;  transform: rotate(${o}deg); animation-duration: ${s(5,20)}s;`;n.value.push(a)}return(c,l)=>(qt(),jn("div",sy,[(qt(!0),jn(We,null,oh(n.value,u=>(qt(),jn("div",{style:zs(u)},null,4))),256))]))}},iy=ka(ry,[["__scopeId","data-v-5207c92b"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Th=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},oy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Th(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const I=l<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ay=function(t){const e=Th(t);return Ih.encodeByteArray(e,!0)},Fr=function(t){return ay(t).replace(/\./g,"")},cy=function(t){try{return Ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ly(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _h(){try{return typeof indexedDB=="object"}catch{return!1}}function Ch(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function uy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fy=()=>hy().__FIREBASE_DEFAULTS__,dy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},py=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cy(t[1]);return e&&JSON.parse(e)},Sh=()=>{try{return fy()||dy()||py()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gy=t=>{var e,n;return(n=(e=Sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},my=t=>{const e=gy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yy=()=>{var t;return(t=Sh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function wy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fr(JSON.stringify(n)),Fr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ey,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?by(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new en(r,a,s)}}function by(t,e){return t.replace(Ty,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ty=/\{\$([^}]+)}/g;function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gl(i)&&gl(o)){if(!Pr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gl(t){return t!==null&&typeof t=="object"}/**
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
 */const Iy=1e3,_y=2,Cy=4*60*60*1e3,Sy=.5;function ml(t,e=Iy,n=_y){const s=e*Math.pow(n,t),r=Math.round(Sy*s*(Math.random()-.5)*2);return Math.min(Cy,s+r)}/**
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
 */const ln="[DEFAULT]";/**
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
 */class Ay{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xy(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dy(t){return t===ln?void 0:t}function xy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ny{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ay(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const ky={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Ry=ne.INFO,Oy={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},My=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Oy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=Ry,this._logHandler=My,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ky[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ly=(t,e)=>e.some(n=>t instanceof n);let yl,vl;function Fy(){return yl||(yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Py(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,Fo=new WeakMap,Dh=new WeakMap,ro=new WeakMap,Oa=new WeakMap;function Vy(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ht(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ah.set(n,t)}).catch(()=>{}),Oa.set(e,t),e}function $y(t){if(Fo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fo.set(t,e)}let Po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uy(t){Po=t(Po)}function By(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(io(this),e,...n);return Dh.set(s,e.sort?e.sort():[e]),Ht(s)}:Py().includes(t)?function(...e){return t.apply(io(this),e),Ht(Ah.get(this))}:function(...e){return Ht(t.apply(io(this),e))}}function jy(t){return typeof t=="function"?By(t):(t instanceof IDBTransaction&&$y(t),Ly(t,Fy())?new Proxy(t,Po):t)}function Ht(t){if(t instanceof IDBRequest)return Vy(t);if(ro.has(t))return ro.get(t);const e=jy(t);return e!==t&&(ro.set(t,e),Oa.set(e,t)),e}const io=t=>Oa.get(t);function xh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ht(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qy=["get","getKey","getAll","getAllKeys","count"],Hy=["put","add","delete","clear"],oo=new Map;function wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Hy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return oo.set(e,i),i}Uy(t=>({...t,get:(e,n,s)=>wl(e,n)||t.get(e,n,s),has:(e,n)=>!!wl(e,n)||t.has(e,n)}));/**
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
 */class Ky{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vo="@firebase/app",El="0.9.0";/**
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
 */const In=new Ra("@firebase/app"),Wy="@firebase/app-compat",Gy="@firebase/analytics-compat",Qy="@firebase/analytics",Yy="@firebase/app-check-compat",Xy="@firebase/app-check",Jy="@firebase/auth",Zy="@firebase/auth-compat",ev="@firebase/database",tv="@firebase/database-compat",nv="@firebase/functions",sv="@firebase/functions-compat",rv="@firebase/installations",iv="@firebase/installations-compat",ov="@firebase/messaging",av="@firebase/messaging-compat",cv="@firebase/performance",lv="@firebase/performance-compat",uv="@firebase/remote-config",hv="@firebase/remote-config-compat",fv="@firebase/storage",dv="@firebase/storage-compat",pv="@firebase/firestore",gv="@firebase/firestore-compat",mv="firebase",yv="9.15.0";/**
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
 */const $o="[DEFAULT]",vv={[Vo]:"fire-core",[Wy]:"fire-core-compat",[Qy]:"fire-analytics",[Gy]:"fire-analytics-compat",[Xy]:"fire-app-check",[Yy]:"fire-app-check-compat",[Jy]:"fire-auth",[Zy]:"fire-auth-compat",[ev]:"fire-rtdb",[tv]:"fire-rtdb-compat",[nv]:"fire-fn",[sv]:"fire-fn-compat",[rv]:"fire-iid",[iv]:"fire-iid-compat",[ov]:"fire-fcm",[av]:"fire-fcm-compat",[cv]:"fire-perf",[lv]:"fire-perf-compat",[uv]:"fire-rc",[hv]:"fire-rc-compat",[fv]:"fire-gcs",[dv]:"fire-gcs-compat",[pv]:"fire-fst",[gv]:"fire-fst-compat","fire-js":"fire-js",[mv]:"fire-js-all"};/**
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
 */const Vr=new Map,Uo=new Map;function wv(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Uo.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,t);for(const n of Vr.values())wv(n,t);return!0}function Ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ev={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new gi("app","Firebase",Ev);/**
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
 */class bv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Tv=yv;function Nh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$o,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Kt.create("bad-app-name",{appName:String(r)});if(n||(n=yy()),!n)throw Kt.create("no-options");const i=Vr.get(r);if(i){if(Pr(n,i.options)&&Pr(s,i.config))return i;throw Kt.create("duplicate-app",{appName:r})}const o=new Ny(r);for(const c of Uo.values())o.addComponent(c);const a=new bv(n,s,o);return Vr.set(r,a),a}function kh(t=$o){const e=Vr.get(t);if(!e&&t===$o)return Nh();if(!e)throw Kt.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let r=(s=vv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Yt(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Iv="firebase-heartbeat-database",_v=1,Ms="firebase-heartbeat-store";let ao=null;function Rh(){return ao||(ao=xh(Iv,_v,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ms)}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),ao}async function Cv(t){try{return(await Rh()).transaction(Ms).objectStore(Ms).get(Oh(t))}catch(e){if(e instanceof en)In.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function bl(t,e){try{const s=(await Rh()).transaction(Ms,"readwrite");return await s.objectStore(Ms).put(e,Oh(t)),s.done}catch(n){if(n instanceof en)In.warn(n.message);else{const s=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Oh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sv=1024,Av=30*24*60*60*1e3;class Dv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Av}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tl(),{heartbeatsToSend:n,unsentEntries:s}=xv(this._heartbeatsCache.heartbeats),r=Fr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tl(){return new Date().toISOString().substring(0,10)}function xv(t,e=Sv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Il(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _h()?Ch().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Il(t){return Fr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kv(t){Yt(new Ot("platform-logger",e=>new Ky(e),"PRIVATE")),Yt(new Ot("heartbeat",e=>new Dv(e),"PRIVATE")),_t(Vo,El,t),_t(Vo,El,"esm2017"),_t("fire-js","")}kv("");var Rv="firebase",Ov="9.15.0";/**
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
 */_t(Rv,Ov,"app");const Mh="@firebase/installations",Ma="0.6.0";/**
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
 */const Lh=1e4,Fh=`w:${Ma}`,Ph="FIS_v2",Mv="https://firebaseinstallations.googleapis.com/v1",Lv=60*60*1e3,Fv="installations",Pv="Installations";/**
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
 */const Vv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_n=new gi(Fv,Pv,Vv);function Vh(t){return t instanceof en&&t.code.includes("request-failed")}/**
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
 */function $h({projectId:t}){return`${Mv}/projects/${t}/installations`}function Uh(t){return{token:t.token,requestStatus:2,expiresIn:Uv(t.expiresIn),creationTime:Date.now()}}async function Bh(t,e){const s=(await e.json()).error;return _n.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function jh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $v(t,{refreshToken:e}){const n=jh(t);return n.append("Authorization",Bv(e)),n}async function qh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Uv(t){return Number(t.replace("s","000"))}function Bv(t){return`${Ph} ${t}`}/**
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
 */async function jv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=$h(t),r=jh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ph,appId:t.appId,sdkVersion:Fh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await qh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Uh(l.authToken)}}else throw await Bh("Create Installation",c)}/**
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
 */function Hh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hv=/^[cdef][\w-]{21}$/,Bo="";function Kv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zv(t);return Hv.test(n)?n:Bo}catch{return Bo}}function zv(t){return qv(t).substr(0,22)}/**
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
 */function mi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Kh=new Map;function zh(t,e){const n=mi(t);Wh(n,e),Wv(n,e)}function Wh(t,e){const n=Kh.get(t);if(n)for(const s of n)s(e)}function Wv(t,e){const n=Gv();n&&n.postMessage({key:t,fid:e}),Qv()}let gn=null;function Gv(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=t=>{Wh(t.data.key,t.data.fid)}),gn}function Qv(){Kh.size===0&&gn&&(gn.close(),gn=null)}/**
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
 */const Yv="firebase-installations-database",Xv=1,Cn="firebase-installations-store";let co=null;function La(){return co||(co=xh(Yv,Xv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cn)}}})),co}async function $r(t,e){const n=mi(t),r=(await La()).transaction(Cn,"readwrite"),i=r.objectStore(Cn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&zh(t,e.fid),e}async function Gh(t){const e=mi(t),s=(await La()).transaction(Cn,"readwrite");await s.objectStore(Cn).delete(e),await s.done}async function yi(t,e){const n=mi(t),r=(await La()).transaction(Cn,"readwrite"),i=r.objectStore(Cn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&zh(t,a.fid),a}/**
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
 */async function Fa(t){let e;const n=await yi(t.appConfig,s=>{const r=Jv(s),i=Zv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Bo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jv(t){const e=t||{fid:Kv(),registrationStatus:0};return Qh(e)}function Zv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(_n.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ew(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tw(t)}:{installationEntry:e}}async function ew(t,e){try{const n=await jv(t,e);return $r(t.appConfig,n)}catch(n){throw Vh(n)&&n.customData.serverCode===409?await Gh(t.appConfig):await $r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tw(t){let e=await _l(t.appConfig);for(;e.registrationStatus===1;)await Hh(100),e=await _l(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Fa(t);return s||n}return e}function _l(t){return yi(t,e=>{if(!e)throw _n.create("installation-not-found");return Qh(e)})}function Qh(t){return nw(t)?{fid:t.fid,registrationStatus:0}:t}function nw(t){return t.registrationStatus===1&&t.registrationTime+Lh<Date.now()}/**
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
 */async function sw({appConfig:t,heartbeatServiceProvider:e},n){const s=rw(t,n),r=$v(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Fh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await qh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Uh(l)}else throw await Bh("Generate Auth Token",c)}function rw(t,{fid:e}){return`${$h(t)}/${e}/authTokens:generate`}/**
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
 */async function Pa(t,e=!1){let n;const s=await yi(t.appConfig,i=>{if(!Yh(i))throw _n.create("not-registered");const o=i.authToken;if(!e&&aw(o))return i;if(o.requestStatus===1)return n=iw(t,e),i;{if(!navigator.onLine)throw _n.create("app-offline");const a=lw(i);return n=ow(t,a),a}});return n?await n:s.authToken}async function iw(t,e){let n=await Cl(t.appConfig);for(;n.authToken.requestStatus===1;)await Hh(100),n=await Cl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Pa(t,e):s}function Cl(t){return yi(t,e=>{if(!Yh(e))throw _n.create("not-registered");const n=e.authToken;return uw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ow(t,e){try{const n=await sw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await $r(t.appConfig,s),n}catch(n){if(Vh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $r(t.appConfig,s)}throw n}}function Yh(t){return t!==void 0&&t.registrationStatus===2}function aw(t){return t.requestStatus===2&&!cw(t)}function cw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Lv}function lw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uw(t){return t.requestStatus===1&&t.requestTime+Lh<Date.now()}/**
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
 */async function hw(t){const e=t,{installationEntry:n,registrationPromise:s}=await Fa(e);return s?s.catch(console.error):Pa(e).catch(console.error),n.fid}/**
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
 */async function fw(t,e=!1){const n=t;return await dw(n),(await Pa(n,e)).token}async function dw(t){const{registrationPromise:e}=await Fa(t);e&&await e}/**
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
 */function pw(t){if(!t||!t.options)throw lo("App Configuration");if(!t.name)throw lo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lo(t){return _n.create("missing-app-config-values",{valueName:t})}/**
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
 */const Xh="installations",gw="installations-internal",mw=t=>{const e=t.getProvider("app").getImmediate(),n=pw(e),s=Ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},yw=t=>{const e=t.getProvider("app").getImmediate(),n=Ws(e,Xh).getImmediate();return{getId:()=>hw(n),getToken:r=>fw(n,r)}};function vw(){Yt(new Ot(Xh,mw,"PUBLIC")),Yt(new Ot(gw,yw,"PRIVATE"))}vw();_t(Mh,Ma);_t(Mh,Ma,"esm2017");/**
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
 */const Ur="analytics",ww="firebase_id",Ew="origin",bw=60*1e3,Tw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jh="https://www.googletagmanager.com/gtag/js";/**
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
 */const et=new Ra("@firebase/analytics");/**
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
 */function Zh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Iw(t,e){const n=document.createElement("script");n.src=`${Jh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function _w(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Cw(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Zh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){et.error(a)}t("config",r,i)}async function Sw(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Zh(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){et.error(i)}}function Aw(t,e,n,s){async function r(i,o,a){try{i==="event"?await Sw(t,e,n,o,a):i==="config"?await Cw(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){et.error(c)}}return r}function Dw(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Aw(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function xw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Jh)&&n.src.includes(t))return n;return null}/**
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
 */const Nw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},at=new gi("analytics","Analytics",Nw);/**
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
 */const kw=30,Rw=1e3;class Ow{constructor(e={},n=Rw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ef=new Ow;function Mw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Lw(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Mw(s)},i=Tw.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw at.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Fw(t,e=ef,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw at.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw at.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $w;return setTimeout(async()=>{a.abort()},n!==void 0?n:bw),tf({appId:s,apiKey:r,measurementId:i},o,a,e)}async function tf(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=ef){var i;const{appId:o,measurementId:a}=t;try{await Pw(s,e)}catch(c){if(a)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Lw(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Vw(l)){if(r.deleteThrottleMetadata(o),a)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ml(n,r.intervalMillis,kw):ml(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),et.debug(`Calling attemptFetch again in ${u} millis`),tf(t,f,s,r)}}function Pw(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(at.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vw(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $w{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Uw(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function Bw(){if(_h())try{await Ch()}catch(t){return et.warn(at.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return et.warn(at.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jw(t,e,n,s,r,i,o){var a;const c=Fw(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>et.error(g)),e.push(c);const l=Bw().then(g=>{if(g)return s.getId()}),[u,f]=await Promise.all([c,l]);xw(i)||Iw(i,u.measurementId),r("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Ew]="firebase",p.update=!0,f!=null&&(p[ww]=f),r("config",u.measurementId,p),u.measurementId}/**
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
 */class qw{constructor(e){this.app=e}_delete(){return delete Ts[this.app.options.appId],Promise.resolve()}}let Ts={},Sl=[];const Al={};let uo="dataLayer",Hw="gtag",Dl,nf,xl=!1;function Kw(){const t=[];if(ly()&&t.push("This is a browser extension environment."),uy()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=at.create("invalid-analytics-context",{errorInfo:e});et.warn(n.message)}}function zw(t,e,n){Kw();const s=t.options.appId;if(!s)throw at.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw at.create("no-api-key");if(Ts[s]!=null)throw at.create("already-exists",{id:s});if(!xl){_w(uo);const{wrappedGtag:i,gtagCore:o}=Dw(Ts,Sl,Al,uo,Hw);nf=i,Dl=o,xl=!0}return Ts[s]=jw(t,Sl,Al,e,Dl,uo,n),new qw(t)}function Ww(t=kh()){t=pt(t);const e=Ws(t,Ur);return e.isInitialized()?e.getImmediate():Gw(t)}function Gw(t,e={}){const n=Ws(t,Ur);if(n.isInitialized()){const r=n.getImmediate();if(Pr(e,n.getOptions()))return r;throw at.create("already-initialized")}return n.initialize({options:e})}function Qw(t,e,n,s){t=pt(t),Uw(nf,Ts[t.app.options.appId],e,n,s).catch(r=>et.error(r))}const Nl="@firebase/analytics",kl="0.9.0";function Yw(){Yt(new Ot(Ur,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return zw(s,r,n)},"PUBLIC")),Yt(new Ot("analytics-internal",t,"PRIVATE")),_t(Nl,kl),_t(Nl,kl,"esm2017");function t(e){try{const n=e.getProvider(Ur).getImmediate();return{logEvent:(s,r,i)=>Qw(n,s,r,i)}}catch(n){throw at.create("interop-component-reg-failed",{reason:n})}}}Yw();var Xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Va=Va||{},U=Xw||self;function Br(){}function vi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Jw(t){return Object.prototype.hasOwnProperty.call(t,ho)&&t[ho]||(t[ho]=++Zw)}var ho="closure_uid_"+(1e9*Math.random()>>>0),Zw=0;function e0(t,e,n){return t.call.apply(t.bind,arguments)}function t0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=e0:je=t0,je.apply(null,arguments)}function yr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function tn(){this.s=this.s,this.o=this.o}var n0=0;tn.prototype.s=!1;tn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),n0!=0)&&Jw(this)};tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $a(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Rl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(vi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var s0=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",Br,e),U.removeEventListener("test",Br,e)}catch{}return t}();function jr(t){return/^[\s\xa0]*$/.test(t)}var Ol=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fo(t,e){return t<e?-1:t>e?1:0}function wi(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return wi().indexOf(t)!=-1}function Ua(t){return Ua[" "](t),t}Ua[" "]=Br;function r0(t){var e=a0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var i0=bt("Opera"),Gn=bt("Trident")||bt("MSIE"),rf=bt("Edge"),jo=rf||Gn,of=bt("Gecko")&&!(wi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),o0=wi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function af(){var t=U.document;return t?t.documentMode:void 0}var qr;e:{var po="",go=function(){var t=wi();if(of)return/rv:([^\);]+)(\)|;)/.exec(t);if(rf)return/Edge\/([\d\.]+)/.exec(t);if(Gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(o0)return/WebKit\/(\S+)/.exec(t);if(i0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(go&&(po=go?go[1]:""),Gn){var mo=af();if(mo!=null&&mo>parseFloat(po)){qr=String(mo);break e}}qr=po}var a0={};function c0(){return r0(function(){let t=0;const e=Ol(String(qr)).split("."),n=Ol("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=fo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||fo(r[2].length==0,i[2].length==0)||fo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var qo;if(U.document&&Gn){var Ml=af();qo=Ml||parseInt(qr,10)||void 0}else qo=void 0;var l0=qo;function Ls(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(of){e:{try{Ua(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:u0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ls.X.h.call(this)}}Me(Ls,qe);var u0={2:"touch",3:"pen",4:"mouse"};Ls.prototype.h=function(){Ls.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),h0=0;function f0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++h0,this.ba=this.ea=!1}function Ei(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ba(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cf(t){const e={};for(const n in t)e[n]=t[n];return e}const Ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ll.length;i++)n=Ll[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function bi(t){this.src=t,this.g={},this.h=0}bi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ko(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new f0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ho(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ei(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ko(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ja="closure_lm_"+(1e6*Math.random()|0),yo={};function uf(t,e,n,s,r){if(s&&s.once)return ff(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)uf(t,e[i],n,s,r);return null}return n=Ka(n),t&&t[Qs]?t.N(e,n,Gs(s)?!!s.capture:!!s,r):hf(t,e,n,!1,s,r)}function hf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Gs(r)?!!r.capture:!!r,a=Ha(t);if(a||(t[ja]=a=new bi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=d0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)s0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(pf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function d0(){function t(n){return e.call(t.src,t.listener,n)}const e=p0;return t}function ff(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ff(t,e[i],n,s,r);return null}return n=Ka(n),t&&t[Qs]?t.O(e,n,Gs(s)?!!s.capture:!!s,r):hf(t,e,n,!0,s,r)}function df(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)df(t,e[i],n,s,r);else s=Gs(s)?!!s.capture:!!s,n=Ka(n),t&&t[Qs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ko(i,n,s,r),-1<n&&(Ei(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ha(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ko(e,n,s,r)),(n=-1<t?e[t]:null)&&qa(n))}function qa(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Qs])Ho(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ha(e))?(Ho(n,t),n.h==0&&(n.src=null,e[ja]=null)):Ei(t)}}}function pf(t){return t in yo?yo[t]:yo[t]="on"+t}function p0(t,e){if(t.ba)t=!0;else{e=new Ls(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qa(t),t=n.call(s,e)}return t}function Ha(t){return t=t[ja],t instanceof bi?t:null}var vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ka(t){return typeof t=="function"?t:(t[vo]||(t[vo]=function(e){return t.handleEvent(e)}),t[vo])}function Ae(){tn.call(this),this.i=new bi(this),this.P=this,this.I=null}Me(Ae,tn);Ae.prototype[Qs]=!0;Ae.prototype.removeEventListener=function(t,e,n,s){df(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),lf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=vr(o,s,!0,e)&&r}if(o=e.g=t,r=vr(o,s,!0,e)&&r,r=vr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=vr(o,s,!1,e)&&r}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ei(n[s]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ae.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ho(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var za=U.JSON.stringify;function g0(){var t=yf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m0{constructor(){this.h=this.g=null}add(e,n){const s=gf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var gf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y0,t=>t.reset());class y0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function v0(t){U.setTimeout(()=>{throw t},0)}function mf(t,e){zo||w0(),Wo||(zo(),Wo=!0),yf.add(t,e)}var zo;function w0(){var t=U.Promise.resolve(void 0);zo=function(){t.then(E0)}}var Wo=!1,yf=new m0;function E0(){for(var t;t=g0();){try{t.h.call(t.g)}catch(n){v0(n)}var e=gf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wo=!1}function Ti(t,e){Ae.call(this),this.h=t||1,this.g=e||U,this.j=je(this.lb,this),this.l=Date.now()}Me(Ti,Ae);N=Ti.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(Wa(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){Ti.X.M.call(this),Wa(this),delete this.g};function Ga(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function vf(t){t.g=Ga(()=>{t.g=null,t.i&&(t.i=!1,vf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class b0 extends tn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vf(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(t){tn.call(this),this.h=t,this.g={}}Me(Fs,tn);var Fl=[];function wf(t,e,n,s){Array.isArray(n)||(n&&(Fl[0]=n.toString()),n=Fl);for(var r=0;r<n.length;r++){var i=uf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ef(t){Ba(t.g,function(e,n){this.g.hasOwnProperty(n)&&qa(e)},t),t.g={}}Fs.prototype.M=function(){Fs.X.M.call(this),Ef(this)};Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ii(){this.g=!0}Ii.prototype.Aa=function(){this.g=!1};function T0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function I0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Pn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+C0(t,n)+(s?" "+s:"")})}function _0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ii.prototype.info=function(){};function C0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return za(n)}catch{return e}}var xn={},Pl=null;function _i(){return Pl=Pl||new Ae}xn.Pa="serverreachability";function bf(t){qe.call(this,xn.Pa,t)}Me(bf,qe);function Ps(t){const e=_i();Oe(e,new bf(e))}xn.STAT_EVENT="statevent";function Tf(t,e){qe.call(this,xn.STAT_EVENT,t),this.stat=e}Me(Tf,qe);function Ge(t){const e=_i();Oe(e,new Tf(e,t))}xn.Qa="timingevent";function If(t,e){qe.call(this,xn.Qa,t),this.size=e}Me(If,qe);function Ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Ci={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_f={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qa(){}Qa.prototype.h=null;function Vl(t){return t.h||(t.h=t.i())}function Cf(){}var Xs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ya(){qe.call(this,"d")}Me(Ya,qe);function Xa(){qe.call(this,"c")}Me(Xa,qe);var Go;function Si(){}Me(Si,Qa);Si.prototype.g=function(){return new XMLHttpRequest};Si.prototype.i=function(){return{}};Go=new Si;function Js(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Fs(this),this.O=S0,t=jo?125:void 0,this.T=new Ti(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Sf}function Sf(){this.i=null,this.g="",this.h=!1}var S0=45e3,Qo={},Hr={};N=Js.prototype;N.setTimeout=function(t){this.O=t};function Yo(t,e,n){t.K=1,t.v=Di(Mt(e)),t.s=n,t.P=!0,Af(t,null)}function Af(t,e){t.F=Date.now(),Zs(t),t.A=Mt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Lf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Sf,t.g=nd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new b0(je(t.La,t,t.g),t.N)),wf(t.S,t.g,"readystatechange",t.ib),e=t.H?cf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ps(),T0(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&kt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=kt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||jo||this.g&&(this.h.h||this.g.fa()||jl(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Ps(3):Ps(2)),Ai(this);var n=this.g.aa();this.Y=n;t:if(Df(this)){var s=jl(this.g);t="";var r=s.length,i=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Is(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,I0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jr(a)){var l=a;break t}}l=null}if(n=l)Pn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xo(this,n);else{this.i=!1,this.o=3,Ge(12),mn(this),Is(this);break e}}this.P?(xf(this,u,o),jo&&this.i&&u==3&&(wf(this.S,this.T,"tick",this.hb),this.T.start())):(Pn(this.j,this.m,o,null),Xo(this,o)),u==4&&mn(this),this.i&&!this.I&&(u==4?Jf(this.l,this):(this.i=!1,Zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),mn(this),Is(this)}}}catch{}finally{}};function Df(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=A0(t,n),r==Hr){e==4&&(t.o=4,Ge(14),s=!1),Pn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Qo){t.o=4,Ge(15),Pn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Pn(t.j,t.m,r,null),Xo(t,r);Df(t)&&r!=Hr&&r!=Qo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rc(e),e.K=!0,Ge(11))):(Pn(t.j,t.m,n,"[Invalid Chunked Response]"),mn(t),Is(t))}N.hb=function(){if(this.g){var t=kt(this.g),e=this.g.fa();this.C<e.length&&(Ai(this),xf(this,t,e),this.i&&t!=4&&Zs(this))}};function A0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Hr:(n=Number(e.substring(n,s)),isNaN(n)?Qo:(s+=1,s+n>e.length?Hr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,mn(this)};function Zs(t){t.V=Date.now()+t.O,Nf(t,t.O)}function Nf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ys(je(t.gb,t),e)}function Ai(t){t.B&&(U.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(_0(this.j,this.A),this.K!=2&&(Ps(),Ge(17)),mn(this),this.o=2,Is(this)):Nf(this,this.V-t)};function Is(t){t.l.G==0||t.I||Jf(t.l,t)}function mn(t){Ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wa(t.T),Ef(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jo(n.h,t))){if(!t.J&&Jo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wr(n),ki(n);else break e;sc(n),Ge(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ys(je(n.cb,n),6e3));if(1>=Vf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else yn(n,11)}else if((t.J||n.g==t)&&Wr(n),!jr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.h;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ja(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,he(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=td(s,s.H?s.ka:null,s.V),o.J){$f(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ai(a),Zs(a)),s.g=o}else Yf(s);0<n.i.length&&Ri(n)}else l[0]!="stop"&&l[0]!="close"||yn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?yn(n,7):nc(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ps(4)}catch{}}function D0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function x0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function kf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=x0(t),s=D0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function N0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function bn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bn){this.h=e!==void 0?e:t.h,Kr(this,t.j),this.s=t.s,this.g=t.g,zr(this,t.m),this.l=t.l,e=t.i;var n=new Vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$l(this,n),this.o=t.o}else t&&(n=String(t).match(Rf))?(this.h=!!e,Kr(this,n[1]||"",!0),this.s=gs(n[2]||""),this.g=gs(n[3]||"",!0),zr(this,n[4]),this.l=gs(n[5]||"",!0),$l(this,n[6]||"",!0),this.o=gs(n[7]||"")):(this.h=!!e,this.i=new Vs(null,this.h))}bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ms(e,Ul,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ms(e,Ul,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ms(n,n.charAt(0)=="/"?O0:R0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ms(n,L0)),t.join("")};function Mt(t){return new bn(t)}function Kr(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $l(t,e,n){e instanceof Vs?(t.i=e,F0(t.i,t.h)):(n||(e=ms(e,M0)),t.i=new Vs(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Di(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ul=/[#\/\?@]/g,R0=/[#\?:]/g,O0=/[#\?]/g,M0=/[#\?@]/g,L0=/#/g;function Vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nn(t){t.g||(t.g=new Map,t.h=0,t.i&&N0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Vs.prototype;N.add=function(t,e){nn(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Of(t,e){nn(t),e=is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mf(t,e){return nn(t),e=is(t,e),t.g.has(e)}N.forEach=function(t,e){nn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){nn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){nn(this);let e=[];if(typeof t=="string")Mf(this,t)&&(e=e.concat(this.g.get(is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return nn(this),this.i=null,t=is(this,t),Mf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Lf(t,e,n){Of(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),$a(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function F0(t,e){e&&!t.j&&(nn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Of(this,s),Lf(this,r,n))},t)),t.j=e}var P0=class{constructor(e,n){this.h=e,this.g=n}};function Ff(t){this.l=t||V0,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var V0=10;function Pf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vf(t){return t.h?1:t.g?t.g.size:0}function Jo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ja(t,e){t.g?t.g.add(e):t.h=e}function $f(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ff.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $a(t.i)}function Za(){}Za.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Za.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function $0(){this.g=new Za}function U0(t,e,n){const s=n||"";try{kf(t,function(r,i){let o=r;Gs(r)&&(o=za(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function B0(t,e){const n=new Ii;if(U.Image){const s=new Image;s.onload=yr(wr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yr(wr,n,s,"TestLoadImage: error",!1,e),s.onabort=yr(wr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yr(wr,n,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function er(t){this.l=t.ac||null,this.j=t.jb||!1}Me(er,Qa);er.prototype.g=function(){return new xi(this.l,this.j)};er.prototype.i=function(t){return function(){return t}}({});function xi(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ec,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(xi,Ae);var ec=0;N=xi.prototype;N.open=function(t,e){if(this.readyState!=ec)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=ec};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Bf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tr(this):$s(this),this.readyState==3&&Bf(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,tr(this))};N.Ua=function(t){this.g&&(this.response=t,tr(this))};N.ga=function(){this.g&&tr(this)};function tr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var j0=U.JSON.parse;function ye(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jf,this.K=this.L=!1}Me(ye,Ae);var jf="",q0=/^https?$/i,H0=["POST","PUT"];N=ye.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Go.g(),this.C=this.u?Vl(this.u):Vl(Go),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=U.FormData&&t instanceof U.FormData,!(0<=sf(H0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kf(this),0<this.B&&((this.K=K0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=Ga(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bl(this,i)}};function K0(t){return Gn&&c0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof Va<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Bl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qf(t),Ni(t)}function qf(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Ni(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ni(this,!0)),ye.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?Hf(this):this.fb())};N.fb=function(){Hf(this)};function Hf(t){if(t.h&&typeof Va<"u"&&(!t.C[1]||kt(t)!=4||t.aa()!=2)){if(t.v&&kt(t)==4)Ga(t.Ha,0,t);else if(Oe(t,"readystatechange"),kt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Rf)[1]||null;if(!r&&U.self&&U.self.location){var i=U.self.location.protocol;r=i.substr(0,i.length-1)}s=!q0.test(r?r.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<kt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qf(t)}}finally{Ni(t)}}}}function Ni(t,e){if(t.g){Kf(t);const n=t.g,s=t.C[0]?Br:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Kf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function kt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),j0(e)}};function jl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zf(t){let e="";return Ba(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function tc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wf(t){this.Ca=0,this.i=[],this.j=new Ii,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ds("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ds("baseRetryDelayMs",5e3,t),this.bb=ds("retryDelaySeedMs",1e4,t),this.$a=ds("forwardChannelMaxRetries",2,t),this.ta=ds("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ff(t&&t.concurrentRequestLimit),this.Fa=new $0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Wf.prototype;N.ma=8;N.G=1;function nc(t){if(Gf(t),t.G==3){var e=t.U++,n=Mt(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),nr(t,n),e=new Js(t,t.j,e,void 0),e.K=2,e.v=Di(Mt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=nd(e.l,null),e.g.da(e.v)),e.F=Date.now(),Zs(e)}ed(t)}function ki(t){t.g&&(rc(t),t.g.cancel(),t.g=null)}function Gf(t){ki(t),t.u&&(U.clearTimeout(t.u),t.u=null),Wr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Ri(t){Pf(t.h)||t.m||(t.m=!0,mf(t.Ja,t),t.C=0)}function z0(t,e){return Vf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ys(je(t.Ja,t,e),Zf(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Js(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=cf(i),lf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qf(this,r,e),n=Mt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),nr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(zf(i)))+"&"+e:this.o&&tc(n,this.o,i)),Ja(this.h,r),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),r.Z=!0,Yo(r,n,null)):Yo(r,n,e),this.G=2}}else this.G==3&&(t?ql(this,t):this.i.length==0||Pf(this.h)||ql(this))};function ql(t,e){var n;e?n=e.m:n=t.U++;const s=Mt(t.F);he(s,"SID",t.I),he(s,"RID",n),he(s,"AID",t.T),nr(t,s),t.o&&t.s&&tc(s,t.o,t.s),n=new Js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ja(t.h,n),Yo(n,s,e)}function nr(t,e){t.ia&&Ba(t.ia,function(n,s){he(e,s,n)}),t.l&&kf({},function(n,s){he(e,s,n)})}function Qf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{U0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Yf(t){t.g||t.u||(t.Z=1,mf(t.Ia,t),t.A=0)}function sc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ys(je(t.Ia,t),Zf(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Xf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ys(je(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),ki(this),Xf(this))};function rc(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function Xf(t){t.g=new Js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mt(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),nr(t,e),t.o&&t.s&&tc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Di(Mt(e)),n.s=null,n.P=!0,Af(n,t)}N.cb=function(){this.v!=null&&(this.v=null,ki(this),sc(this),Ge(19))};function Wr(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function Jf(t,e){var n=null;if(t.g==e){Wr(t),rc(t),t.g=null;var s=2}else if(Jo(t.h,e))n=e.D,$f(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=_i(),Oe(s,new If(s,n)),Ri(t)}else Yf(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&z0(t,e)||s==2&&sc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:yn(t,5);break;case 4:yn(t,10);break;case 3:yn(t,6);break;default:yn(t,2)}}}function Zf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function yn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=je(t.kb,t);n||(n=new bn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Kr(n,"https"),Di(n)),B0(n.toString(),s)}else Ge(2);t.G=0,t.l&&t.l.va(e),ed(t),Gf(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function ed(t){if(t.G=0,t.la=[],t.l){const e=Uf(t.h);(e.length!=0||t.i.length!=0)&&(Rl(t.la,e),Rl(t.la,t.i),t.h.i.length=0,$a(t.i),t.i.length=0),t.l.ua()}}function td(t,e,n){var s=n instanceof bn?Mt(n):new bn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),zr(s,s.m);else{var r=U.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new bn(null,void 0);s&&Kr(i,s),e&&(i.g=e),r&&zr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&he(s,n,e),he(s,"VER",t.ma),nr(t,s),s}function nd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new er({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function sd(){}N=sd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Gr(){if(Gn&&!(10<=Number(l0)))throw Error("Environmental error: no available transport.")}Gr.prototype.g=function(t,e){return new st(t,e)};function st(t,e){Ae.call(this),this.g=new Wf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new os(this)}Me(st,Ae);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=td(t,null,t.V),Ri(t)};st.prototype.close=function(){nc(this.g)};st.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=za(t),t=n);e.i.push(new P0(e.ab++,t)),e.G==3&&Ri(e)};st.prototype.M=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,st.X.M.call(this)};function rd(t){Ya.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(rd,Ya);function id(){Xa.call(this),this.status=1}Me(id,Xa);function os(t){this.g=t}Me(os,sd);os.prototype.xa=function(){Oe(this.g,"a")};os.prototype.wa=function(t){Oe(this.g,new rd(t))};os.prototype.va=function(t){Oe(this.g,new id)};os.prototype.ua=function(){Oe(this.g,"b")};Gr.prototype.createWebChannel=Gr.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Ci.NO_ERROR=0;Ci.TIMEOUT=8;Ci.HTTP_ERROR=6;_f.COMPLETE="complete";Cf.EventType=Xs;Xs.OPEN="a";Xs.CLOSE="b";Xs.ERROR="c";Xs.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var W0=function(){return new Gr},G0=function(){return _i()},wo=Ci,Q0=_f,Y0=xn,Hl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},X0=er,Er=Cf,J0=ye;const Kl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let as="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Ra("@firebase/firestore");function zl(){return Sn.logLevel}function R(t,...e){if(Sn.logLevel<=ne.DEBUG){const n=e.map(ic);Sn.debug(`Firestore (${as}): ${t}`,...n)}}function Lt(t,...e){if(Sn.logLevel<=ne.ERROR){const n=e.map(ic);Sn.error(`Firestore (${as}): ${t}`,...n)}}function Zo(t,...e){if(Sn.logLevel<=ne.WARN){const n=e.map(ic);Sn.warn(`Firestore (${as}): ${t}`,...n)}}function ic(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw Lt(e),new Error(e)}function ce(t,e){t||$()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class eE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tE{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string"),new od(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Fe(e)}}class nE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nE(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.A=n.token,new rE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function oE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Qn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Us{constructor(e,n,s){n===void 0?n=0:n>e.length&&$(),s===void 0?s=e.length-n:s>e.length-n&&$(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Us{construct(e,n,s){return new fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const aE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Us{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return aE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(fe.fromString(e))}static fromName(e){return new F(fe.fromString(e).popFirst(5))}static empty(){return new F(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new fe(e.slice()))}}function cE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new Te(n+1,0):new Te(n,s));return new Xt(r,F.empty(),e)}function lE(t){return new Xt(t.readTime,t.key,-1)}class Xt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Xt(j.min(),F.empty(),-1)}static max(){return new Xt(j.max(),F.empty(),-1)}}function uE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const hE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==hE)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function rr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}oc.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return t==null}function Qr(t){return t===0&&1/t==-1/0}function pE(t){return typeof t=="number"&&Number.isInteger(t)&&!Qr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const gE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(t){if(ce(!!t),typeof t=="string"){let e=0;const n=gE.exec(t);if(ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yn(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function ld(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ud(t){const e=t.mapValue.fields.__previous_value__;return ld(e)?ud(e):e}function js(t){const e=Jt(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */const br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function An(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ld(t)?4:mE(t)?9007199254740991:10:$()}function At(t,e){if(t===e)return!0;const n=An(t);if(n!==An(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Jt(s.timestampValue),o=Jt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Yn(s.bytesValue).isEqual(Yn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ee(s.geoPointValue.latitude)===Ee(r.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ee(s.integerValue)===Ee(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ee(s.doubleValue),o=Ee(r.doubleValue);return i===o?Qr(i)===Qr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qn(t.arrayValue.values||[],e.arrayValue.values||[],At);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wl(i)!==Wl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!At(i[a],o[a])))return!1;return!0}(t,e);default:return $()}}function qs(t,e){return(t.values||[]).find(n=>At(n,e))!==void 0}function Xn(t,e){if(t===e)return 0;const n=An(t),s=An(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ee(r.integerValue||r.doubleValue),a=Ee(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gl(t.timestampValue,e.timestampValue);case 4:return Gl(js(t),js(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Yn(r),a=Yn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(Ee(r.latitude),Ee(i.latitude));return o!==0?o:se(Ee(r.longitude),Ee(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Xn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===br.mapValue&&i===br.mapValue)return 0;if(r===br.mapValue)return 1;if(i===br.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=se(a[u],l[u]);if(f!==0)return f;const p=Xn(o[a[u]],c[l[u]]);if(p!==0)return p}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw $()}}function Gl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Jt(t),s=Jt(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function Jn(t){return ea(t)}function ea(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Jt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ea(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ea(s.fields[a])}`;return i+"}"}(t.mapValue):$();var e,n}function ta(t){return!!t&&"integerValue"in t}function ac(t){return!!t&&"arrayValue"in t}function Ql(t){return!!t&&"nullValue"in t}function Yl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ar(t){return!!t&&"mapValue"in t}function _s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=_s(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yr{constructor(e,n){this.position=e,this.inclusive=n}}function Xl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Xn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!At(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hd{}class be extends hd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wE(e,n,s):n==="array-contains"?new TE(e,s):n==="in"?new IE(e,s):n==="not-in"?new _E(e,s):n==="array-contains-any"?new CE(e,s):new be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new EE(e,s):new bE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xn(n,this.value)):n!==null&&An(this.value)===An(n)&&this.matchesComparison(Xn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dt extends hd{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Dt(e,n)}matches(e){return fd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fd(t){return t.op==="and"}function yE(t){return vE(t)&&fd(t)}function vE(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function dd(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Jn(t.value);{const e=t.filters.map(n=>dd(n)).join(",");return`${t.op}(${e})`}}function pd(t,e){return t instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&At(n.value,s.value)}(t,e):t instanceof Dt?function(n,s){return s instanceof Dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&pd(i,s.filters[o]),!0):!1}(t,e):void $()}function gd(t){return t instanceof be?function(e){return`${e.field.canonicalString()} ${e.op} ${Jn(e.value)}`}(t):t instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(gd).join(" ,")+"}"}(t):"Filter"}class wE extends be{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class EE extends be{constructor(e,n){super(e,"in",n),this.keys=md("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bE extends be{constructor(e,n){super(e,"not-in",n),this.keys=md("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function md(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class TE extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ac(n)&&qs(n.arrayValue,this.value)}}class IE extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class _E extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class CE extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qs(this.value.arrayValue,s))}}/**
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
 */class Cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function SE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ie(this.comparator);return n.data=e,n}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new ct([])}unionWith(e){let n=new Ie($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ar(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_s(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ar(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ar(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Nn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Xe(_s(this.value))}}function yd(t){const e=[];return Nn(t.fields,(n,s)=>{const r=new $e([n]);if(Ar(s)){const i=yd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function eu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new AE(t,e,n,s,r,i,o)}function cc(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>dd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Oi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jn(s)).join(",")),e.ft=n}return e.ft}function lc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jl(t.startAt,e.startAt)&&Jl(t.endAt,e.endAt)}function na(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function DE(t,e,n,s,r,i,o,a){return new Mi(t,e,n,s,r,i,o,a)}function uc(t){return new Mi(t)}function tu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function NE(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kE(t){return t.collectionGroup!==null}function qn(t){const e=K(t);if(e.dt===null){e.dt=[];const n=NE(e),s=xE(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Cs(n)),e.dt.push(new Cs($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Cs($e.keyField(),i))}}}return e.dt}function Ft(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=eu(e.path,e.collectionGroup,qn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Cs(i.field,o))}const s=e.endAt?new Yr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Yr(e.startAt.position,e.startAt.inclusive):null;e._t=eu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function sa(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Li(t,e){return lc(Ft(t),Ft(e))&&t.limitType===e.limitType}function vd(t){return`${cc(Ft(t))}|lt:${t.limitType}`}function ra(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gd(s)).join(", ")}]`),Oi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jn(s)).join(",")),`Target(${n})`}(Ft(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):F.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of qn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Xl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qn(n),s)||n.endAt&&!function(r,i,o){const a=Xl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qn(n),s))}(t,e)}function RE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wd(t){return(e,n)=>{let s=!1;for(const r of qn(t)){const i=OE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function OE(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Xn(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return $()}}/**
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
 */function Ed(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function bd(t){return{integerValue:""+t}}function ME(t,e){return pE(e)?bd(e):Ed(t,e)}/**
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
 */class Fi{constructor(){this._=void 0}}function LE(t,e,n){return t instanceof Xr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Hs?Id(t,e):t instanceof Ks?_d(t,e):function(s,r){const i=Td(s,r),o=nu(i)+nu(s.gt);return ta(i)&&ta(s.gt)?bd(o):Ed(s.yt,o)}(t,e)}function FE(t,e,n){return t instanceof Hs?Id(t,e):t instanceof Ks?_d(t,e):n}function Td(t,e){return t instanceof Jr?ta(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Xr extends Fi{}class Hs extends Fi{constructor(e){super(),this.elements=e}}function Id(t,e){const n=Cd(e);for(const s of t.elements)n.some(r=>At(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ks extends Fi{constructor(e){super(),this.elements=e}}function _d(t,e){let n=Cd(e);for(const s of t.elements)n=n.filter(r=>!At(r,s));return{arrayValue:{values:n}}}class Jr extends Fi{constructor(e,n){super(),this.yt=e,this.gt=n}}function nu(t){return Ee(t.integerValue||t.doubleValue)}function Cd(t){return ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Hs&&s instanceof Hs||n instanceof Ks&&s instanceof Ks?Qn(n.elements,s.elements,At):n instanceof Jr&&s instanceof Jr?At(n.gt,s.gt):n instanceof Xr&&s instanceof Xr}(t.transform,e.transform)}class VE{constructor(e,n){this.version=e,this.transformResults=n}}class dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pi{}function Sd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fc(t.key,dt.none()):new ir(t.key,t.data,dt.none());{const n=t.data,s=Xe.empty();let r=new Ie($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new sn(t.key,s,new ct(r.toArray()),dt.none())}}function $E(t,e,n){t instanceof ir?function(s,r,i){const o=s.value.clone(),a=ru(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof sn?function(s,r,i){if(!Dr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ru(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ad(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ss(t,e,n,s){return t instanceof ir?function(r,i,o,a){if(!Dr(r.precondition,i))return o;const c=r.value.clone(),l=iu(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof sn?function(r,i,o,a){if(!Dr(r.precondition,i))return o;const c=iu(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ad(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Dr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function UE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Td(s.transform,r||null);i!=null&&(n===null&&(n=Xe.empty()),n.set(s.field,i))}return n||null}function su(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qn(n,s,(r,i)=>PE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ir extends Pi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sn extends Pi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ad(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ru(t,e,n){const s=new Map;ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,FE(o,a,n[r]))}return s}function iu(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,LE(i,o,e))}return s}class fc extends Pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BE extends Pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,J;function qE(t){switch(t){default:return $();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Dd(t){if(t===void 0)return Lt("GRPC error has no .code"),b.UNKNOWN;switch(t){case we.OK:return b.OK;case we.CANCELLED:return b.CANCELLED;case we.UNKNOWN:return b.UNKNOWN;case we.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case we.INTERNAL:return b.INTERNAL;case we.UNAVAILABLE:return b.UNAVAILABLE;case we.UNAUTHENTICATED:return b.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case we.NOT_FOUND:return b.NOT_FOUND;case we.ALREADY_EXISTS:return b.ALREADY_EXISTS;case we.PERMISSION_DENIED:return b.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case we.ABORTED:return b.ABORTED;case we.OUT_OF_RANGE:return b.OUT_OF_RANGE;case we.UNIMPLEMENTED:return b.UNIMPLEMENTED;case we.DATA_LOSS:return b.DATA_LOSS;default:return $()}}(J=we||(we={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return cd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Ce(F.comparator);function Pt(){return HE}const xd=new Ce(F.comparator);function ys(...t){let e=xd;for(const n of t)e=e.insert(n.key,n);return e}function Nd(t){let e=xd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vn(){return As()}function kd(){return As()}function As(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const KE=new Ce(F.comparator),zE=new Ie(F.comparator);function Y(...t){let e=zE;for(const n of t)e=e.add(n);return e}const WE=new Ie(se);function Rd(){return WE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,or.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Vi(j.min(),r,Rd(),Pt(),Y())}}class or{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new or(s,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Od{constructor(e,n){this.targetId=e,this.Et=n}}class Md{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ou{constructor(){this.At=0,this.Rt=cu(),this.bt=Ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Y(),n=Y(),s=Y();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:$()}}),new or(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=cu()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class GE{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Pt(),this.qt=au(),this.Ut=new Ie(se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(na(i))if(s===0){const o=new F(i.path);this.Qt(n,o,Pe.newNoDocument(o,j.min()))}else ce(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&na(a.target)){const c=new F(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Pe.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=Y();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Vi(e,n,this.Ut,this.Lt,s);return this.Lt=Pt(),this.qt=au(),this.Ut=new Ie(se),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new ou,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ie(se),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ou),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function au(){return new Ce(F.comparator)}function cu(){return new Ce(F.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),YE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),XE=(()=>({and:"AND",or:"OR"}))();class JE{constructor(e,n){this.databaseId=e,this.wt=n}}function Zr(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ld(t,e){return t.wt?e.toBase64():e.toUint8Array()}function ZE(t,e){return Zr(t,e.toTimestamp())}function Ct(t){return ce(!!t),j.fromTimestamp(function(e){const n=Jt(e);return new Te(n.seconds,n.nanos)}(t))}function dc(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fd(t){const e=fe.fromString(t);return ce(Ud(e)),e}function ia(t,e){return dc(t.databaseId,e.path)}function Eo(t,e){const n=Fd(e);if(n.get(1)!==t.databaseId.projectId)throw new P(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Pd(n))}function oa(t,e){return dc(t.databaseId,e)}function eb(t){const e=Fd(t);return e.length===4?fe.emptyPath():Pd(e)}function aa(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pd(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lu(t,e,n){return{name:ia(t,e),fields:n.value.mapValue.fields}}function tb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(ce(l===void 0||typeof l=="string"),Ke.fromBase64String(l||"")):(ce(l===void 0||l instanceof Uint8Array),Ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:Dd(c.code);return new P(l,c.message||"")}(o);n=new Md(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Eo(t,s.document.name),i=Ct(s.document.updateTime),o=s.document.createTime?Ct(s.document.createTime):j.min(),a=new Xe({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new xr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Eo(t,s.document),i=s.readTime?Ct(s.readTime):j.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new xr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Eo(t,s.document),i=s.removedTargetIds||[];n=new xr([],i,r,null)}else{if(!("filter"in e))return $();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new jE(r),o=s.targetId;n=new Od(o,i)}}return n}function nb(t,e){let n;if(e instanceof ir)n={update:lu(t,e.key,e.value)};else if(e instanceof fc)n={delete:ia(t,e.key)};else if(e instanceof sn)n={update:lu(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof BE))return $();n={verify:ia(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ks)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw $()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ZE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:$()}(t,e.precondition)),n}function sb(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ct(s.updateTime):Ct(r);return i.isEqual(j.min())&&(i=Ct(r)),new VE(i,s.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[oa(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=oa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return $d(Dt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ln(u.field),direction:cb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Oi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ob(t){let e=eb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Vd(u);return f instanceof Dt&&yE(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Cs(Fn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Oi(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Yr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Yr(p,f)}(n.endAt)),DE(e,r,o,i,a,"F",c,l)}function ab(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Fn(e.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fn(e.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fn(e.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fn(e.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return be.create(Fn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>Vd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function cb(t){return QE[t]}function lb(t){return YE[t]}function ub(t){return XE[t]}function Ln(t){return{fieldPath:t.canonicalString()}}function Fn(t){return $e.fromServerFormat(t.fieldPath)}function $d(t){return t instanceof be?function(e){if(e.op==="=="){if(Yl(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NAN"}};if(Ql(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yl(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NAN"}};if(Ql(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(e.field),op:lb(e.op),value:e.value}}}(t):t instanceof Dt?function(e){const n=e.getFilters().map(s=>$d(s));return n.length===1?n[0]:{compositeFilter:{op:ub(e.op),filters:n}}}(t):$()}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ud(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&$E(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ss(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ss(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Sd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(j.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(n,s)=>su(n,s))&&Qn(this.baseMutations,e.baseMutations,(n,s)=>su(n,s))}}class pc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ce(e.mutations.length===s.length);let r=KE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pc(e,n,s,r)}}/**
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
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Tn{constructor(e,n,s,r,i=j.min(),o=j.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.ie=e}}function gb(t){const e=ob({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sa(e,e.limit,"L"):e}/**
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
 */class mb{constructor(){this.Je=new yb}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Xt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ie(fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zn(0)}static vn(){return new Zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ss(s.mutation,r,ct.empty(),Te.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ys();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Pt();const o=As(),a=As();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof sn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Ss(u.mutation,l,u.mutation.getFieldMask(),Te.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new wb(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=As();let r=new Ce((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ct.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||Y()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=kd();u.forEach(p=>{if(!i.has(p)){const g=Sd(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(vn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:Nd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let r=ys();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ys();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Mi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Pe.newInvalidDocument(l)))});let o=ys();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ss(l.mutation,c,ct.empty(),Te.now()),hc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bb{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ct(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:gb(s.bundledQuery),readTime:Ct(s.readTime)}}(n)),T.resolve()}}/**
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
 */class Tb{constructor(){this.overlays=new Ce(F.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=vn(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=vn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new db(n,s));let i=this.es.get(n);i===void 0&&(i=Y(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.ns=new Ie(Se.ss),this.rs=new Ie(Se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Se(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Se(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new F(new fe([])),s=new Se(n,e),r=new Se(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new F(new fe([])),s=new Se(n,e),r=new Se(n,e+1);let i=Y();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Se(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return F.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ie(Se.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Se(n,0),r=new Se(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ie(se);return n.forEach(r=>{const i=new Se(r,0),o=new Se(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const o=new Se(new F(i),0);let a=new Ie(se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ce(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Se(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Se(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.Es=e,this.docs=new Ce(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=Pt();const i=new F(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||uE(lE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){$()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Cb(this)}getSize(e){return T.resolve(this.size)}}class Cb extends vb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.persistence=e,this.Rs=new cs(n=>cc(n),lc),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new gc,this.targetCount=0,this.vs=Zn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Sb(this),this.indexManager=new mb,this.remoteDocumentCache=function(s){return new _b(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new pb(n),this.Ns=new bb(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Tb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Ib(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){R("MemoryPersistence","Starting transaction:",e);const r=new Db(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Db extends fE{constructor(e){super(),this.currentSequenceNumber=e}}class mc{constructor(e){this.persistence=e,this.Fs=new gc,this.$s=null}static Bs(e){return new mc(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=F.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yc(e,n.fromCache,s,r)}}/**
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
 */class xb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(tu(n))return T.resolve(null);let s=Ft(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=sa(n,null,"F"),s=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,sa(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return tu(n)||r.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(zl()<=ne.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ra(n)),this.Bi(e,o,n,cE(r,-1)))})}Fi(e,n){let s=new Ie(wd(e));return n.forEach((r,i)=>{hc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return zl()<=ne.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ra(n)),this.Ni.getDocumentsMatchingQuery(e,n,Xt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Nb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ce(se),this.Ui=new cs(i=>cc(i),lc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Eb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function kb(t,e,n,s){return new Nb(t,e,n,s)}async function Bd(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Y();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Rb(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=T.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(I=>{const E=c.docVersions.get(g);ce(E!==null),I.version.compareTo(E)<0&&(u.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),l.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function jd(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ob(t,e){const n=K(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(I,E,O){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=Pt(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Mb(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(j.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function Mb(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Lb(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Fb(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Tn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function ca(t,e,n){const s=K(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!rr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function uu(t,e,n){const s=K(t);let r=j.min(),i=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=K(a),f=u.Ui.get(l);return f!==void 0?T.resolve(u.qi.get(f)):u.Cs.getTargetData(c,l)}(s,o,Ft(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:j.min(),n?i:Y())).next(a=>(Pb(s,RE(e),a),{documents:a,Hi:i})))}function Pb(t,e,n){let s=t.Ki.get(e)||j.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class hu{constructor(){this.activeTargetIds=Rd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.Lr=new hu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new hu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $b{Ur(e){}shutdown(){}}/**
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
 */class fu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ub={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);R("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Zo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+as,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Ub[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new J0;a.setWithCredentials(!0),a.listenOnce(Q0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wo.NO_ERROR:const l=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(l)),i(l);break;case wo.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new P(b.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const u=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(E)>=0?E:b.UNKNOWN}(p.status);o(new P(g,p.message))}else o(new P(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(b.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=W0(),o=G0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new X0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");R("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new Bb({Hr:I=>{f?R("Connection","Not sending because WebChannel is closed:",I):(u||(R("Connection","Opening WebChannel transport."),l.open(),u=!0),R("Connection","WebChannel sending:",I),l.send(I))},Jr:()=>l.close()}),g=(I,E,O)=>{I.listen(E,H=>{try{O(H)}catch(ee){setTimeout(()=>{throw ee},0)}})};return g(l,Er.EventType.OPEN,()=>{f||R("Connection","WebChannel transport opened.")}),g(l,Er.EventType.CLOSE,()=>{f||(f=!0,R("Connection","WebChannel transport closed"),p.io())}),g(l,Er.EventType.ERROR,I=>{f||(f=!0,Zo("Connection","WebChannel transport errored:",I),p.io(new P(b.UNAVAILABLE,"The operation could not be completed")))}),g(l,Er.EventType.MESSAGE,I=>{var E;if(!f){const O=I.data[0];ce(!!O);const H=O,ee=H.error||((E=H[0])===null||E===void 0?void 0:E.error);if(ee){R("Connection","WebChannel received error:",ee);const V=ee.status;let X=function(gt){const Le=we[gt];if(Le!==void 0)return Dd(Le)}(V),de=ee.message;X===void 0&&(X=b.INTERNAL,de="Unknown error status: "+V+" with message "+ee.message),f=!0,p.io(new P(X,de)),l.close()}else R("Connection","WebChannel received:",O),p.ro(O)}}),g(o,Y0.STAT_EVENT,I=>{I.stat===Hl.PROXY?R("Connection","Detected buffering proxy"):I.stat===Hl.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function bo(){return typeof document<"u"?document:null}/**
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
 */function $i(t){return new JE(t,!0)}class qd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new qd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Lt(n.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new P(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qb extends Hd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=tb(this.yt,e),s=function(r){if(!("targetChange"in r))return j.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?j.min():i.readTime?Ct(i.readTime):j.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=aa(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=na(a)?{documents:rb(r,a)}:{query:ib(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ld(r,i.resumeToken):i.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Zr(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=ab(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=aa(this.yt),n.removeTarget=e,this.Bo(n)}}class Hb extends Hd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=sb(e.writeResults,e.commitTime),s=Ct(e.commitTime);return this.listener.Zo(s,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=aa(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>nb(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new P(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(b.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Wb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{kn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c._u.add(4),await ar(c),c.gu.set("Unknown"),c._u.delete(4),await Ui(c)}(this))})}),this.gu=new zb(s,r)}}async function Ui(t){if(kn(t))for(const e of t.wu)await e(!0)}async function ar(t){for(const e of t.wu)await e(!1)}function Kd(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ec(n)?wc(n):ls(n).ko()&&vc(n,e))}function zd(t,e){const n=K(t),s=ls(n);n.du.delete(e),s.ko()&&Wd(n,e),n.du.size===0&&(s.ko()?s.Fo():kn(n)&&n.gu.set("Unknown"))}function vc(t,e){t.yu.Ot(e.targetId),ls(t).zo(e)}function Wd(t,e){t.yu.Ot(e),ls(t).Ho(e)}function wc(t){t.yu=new GE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ls(t).start(),t.gu.uu()}function Ec(t){return kn(t)&&!ls(t).No()&&t.du.size>0}function kn(t){return K(t)._u.size===0}function Gd(t){t.yu=void 0}async function Gb(t){t.du.forEach((e,n)=>{vc(t,e)})}async function Qb(t,e){Gd(t),Ec(t)?(t.gu.hu(e),wc(t)):t.gu.set("Unknown")}async function Yb(t,e,n){if(t.gu.set("Online"),e instanceof Md&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ei(t,s)}else if(e instanceof xr?t.yu.Kt(e):e instanceof Od?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(j.min()))try{const s=await jd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Wd(r,a);const l=new Tn(c.target,a,1,c.sequenceNumber);vc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await ei(t,s)}}async function ei(t,e,n){if(!rr(e))throw e;t._u.add(1),await ar(t),t.gu.set("Offline"),n||(n=()=>jd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ui(t)})}function Qd(t,e){return e().catch(n=>ei(t,n,e))}async function Bi(t){const e=K(t),n=Zt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Xb(e);)try{const r=await Lb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Jb(e,r)}catch(r){await ei(e,r)}Yd(e)&&Xd(e)}function Xb(t){return kn(t)&&t.fu.length<10}function Jb(t,e){t.fu.push(e);const n=Zt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Yd(t){return kn(t)&&!Zt(t).No()&&t.fu.length>0}function Xd(t){Zt(t).start()}async function Zb(t){Zt(t).eu()}async function eT(t){const e=Zt(t);for(const n of t.fu)e.Xo(n.mutations)}async function tT(t,e,n){const s=t.fu.shift(),r=pc.from(s,e,n);await Qd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Bi(t)}async function nT(t,e){e&&Zt(t).Yo&&await async function(n,s){if(r=s.code,qE(r)&&r!==b.ABORTED){const i=n.fu.shift();Zt(n).Mo(),await Qd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bi(n)}var r}(t,e),Yd(t)&&Xd(t)}async function du(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=kn(n);n._u.add(3),await ar(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ui(n)}async function sT(t,e){const n=K(t);e?(n._u.delete(2),await Ui(n)):e||(n._u.add(2),await ar(n),n.gu.set("Unknown"))}function ls(t){return t.pu||(t.pu=function(e,n,s){const r=K(e);return r.su(),new qb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Gb.bind(null,t),Zr:Qb.bind(null,t),Wo:Yb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ec(t)?wc(t):t.gu.set("Unknown")):(await t.pu.stop(),Gd(t))})),t.pu}function Zt(t){return t.Iu||(t.Iu=function(e,n,s){const r=K(e);return r.su(),new Hb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Zb.bind(null,t),Zr:nT.bind(null,t),tu:eT.bind(null,t),Zo:tT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Bi(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new bc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(t,e){if(Lt("AsyncQueue",`${e}: ${t}`),rr(t))return new P(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=ys(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Hn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.Tu=new Ce(F.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class es{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(e,n,Hn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.Au=void 0,this.listeners=[]}}class iT{constructor(){this.queries=new cs(e=>vd(e),Li),this.onlineState="Unknown",this.Ru=new Set}}async function Jd(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new rT),r)try{i.Au=await n.onListen(s)}catch(o){const a=Tc(o,`Initialization of query '${ra(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ic(n)}async function Zd(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function oT(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ic(n)}function aT(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ic(t){t.Ru.forEach(e=>{e.next()})}class ep{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new es(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.key=e}}class np{constructor(e){this.key=e}}class cT{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Y(),this.mutatedKeys=Y(),this.Gu=wd(e),this.Qu=new Hn(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new pu,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=hc(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;p&&g?p.data.isEqual(g.data)?I!==E&&(s.track({type:3,doc:g}),O=!0):this.Hu(p,g)||(s.track({type:2,doc:g}),O=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),O=!0):p&&!g&&(s.track({type:1,doc:p}),O=!0,(c||l)&&(a=!0)),O&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(f,p){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(f)-g(p)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new es(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new pu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Y(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new np(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new tp(s))}),n}tc(e){this.qu=e.Hi,this.Ku=Y();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return es.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class lT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uT{constructor(e){this.key=e,this.nc=!1}}class hT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new cs(a=>vd(a),Li),this.rc=new Map,this.oc=new Set,this.uc=new Ce(F.comparator),this.cc=new Map,this.ac=new gc,this.hc={},this.lc=new Map,this.fc=Zn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function fT(t,e){const n=TT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Fb(n.localStore,Ft(e));n.isPrimaryClient&&Kd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await dT(n,e,s,a==="current",o.resumeToken)}return r}async function dT(t,e,n,s,r){t._c=(f,p,g)=>async function(I,E,O,H){let ee=E.view.Wu(O);ee.$i&&(ee=await uu(I.localStore,E.query,!1).then(({documents:de})=>E.view.Wu(de,ee)));const V=H&&H.targetChanges.get(E.targetId),X=E.view.applyChanges(ee,I.isPrimaryClient,V);return mu(I,E.targetId,X.Xu),X.snapshot}(t,f,p,g);const i=await uu(t.localStore,e,!0),o=new cT(e,i.Hi),a=o.Wu(i.documents),c=or.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);mu(t,n,l.Xu);const u=new lT(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function pT(t,e){const n=K(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Li(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ca(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),zd(n.remoteStore,s.targetId),la(n,s.targetId)}).catch(sr)):(la(n,s.targetId),await ca(n.localStore,s.targetId,!0))}async function gT(t,e,n){const s=IT(t);try{const r=await function(i,o){const a=K(i),c=Te.now(),l=o.reduce((p,g)=>p.add(g.key),Y());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Pt(),I=Y();return a.Gi.getEntries(p,l).next(E=>{g=E,g.forEach((O,H)=>{H.isValidDocument()||(I=I.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(E=>{u=E;const O=[];for(const H of o){const ee=UE(H,u.get(H.key).overlayedDocument);ee!=null&&O.push(new sn(H.key,ee,yd(ee.value.mapValue),dt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,O,o)}).next(E=>{f=E;const O=E.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(p,E.batchId,O)})}).then(()=>({batchId:f.batchId,changes:Nd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ce(se)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await cr(s,r.changes),await Bi(s.remoteStore)}catch(r){const i=Tc(r,"Failed to persist write");n.reject(i)}}async function sp(t,e){const n=K(t);try{const s=await Ob(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?ce(o.nc):r.removedDocuments.size>0&&(ce(o.nc),o.nc=!1))}),await cr(n,s,e)}catch(s){await sr(s)}}function gu(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&Ic(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mT(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ce(F.comparator);o=o.insert(i,Pe.newNoDocument(i,j.min()));const a=Y().add(i),c=new Vi(j.min(),new Map,new Ie(se),o,a);await sp(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),_c(s)}else await ca(s.localStore,e,!1).then(()=>la(s,e,n)).catch(sr)}async function yT(t,e){const n=K(t),s=e.batch.batchId;try{const r=await Rb(n.localStore,e);ip(n,s,null),rp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cr(n,r)}catch(r){await sr(r)}}async function vT(t,e,n){const s=K(t);try{const r=await function(i,o){const a=K(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ce(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);ip(s,e,n),rp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await cr(s,r)}catch(r){await sr(r)}}function rp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ip(t,e,n){const s=K(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function la(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||op(t,s)})}function op(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(zd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),_c(t))}function mu(t,e,n){for(const s of n)s instanceof tp?(t.ac.addReference(s.key,e),wT(t,s)):s instanceof np?(R("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||op(t,s.key)):$()}function wT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(R("SyncEngine","New document in limbo: "+n),t.oc.add(s),_c(t))}function _c(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new F(fe.fromString(e)),s=t.fc.next();t.cc.set(s,new uT(n)),t.uc=t.uc.insert(n,s),Kd(t.remoteStore,new Tn(Ft(uc(n.path)),s,2,oc.at))}}async function cr(t,e,n){const s=K(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=yc.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=K(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,f=>T.forEach(f.Si,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>T.forEach(f.Di,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!rr(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.qi.get(f),g=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(f,I)}}}(s.localStore,i))}async function ET(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await Bd(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new P(b.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cr(n,s.ji)}}function bT(t,e){const n=K(t),s=n.cc.get(e);if(s&&s.nc)return Y().add(s.key);{let r=Y();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function TT(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mT.bind(null,e),e.sc.Wo=oT.bind(null,e.eventManager),e.sc.wc=aT.bind(null,e.eventManager),e}function IT(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vT.bind(null,e),e}class _T{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=$i(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return kb(this.persistence,new xb,e.initialUser,this.yt)}yc(e){return new Ab(mc.Bs,this.yt)}gc(e){return new Vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ET.bind(null,this.syncEngine),await sT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iT}createDatastore(e){const n=$i(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new jb(r));var r;return function(i,o,a,c){return new Kb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>gu(this.syncEngine,a,0),o=fu.C()?new fu:new $b,new Wb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new hT(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ar(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e,n){if(!n)throw new P(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ST(t,e,n,s){if(e===!0&&s===!0)throw new P(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yu(t){if(!F.isDocumentKey(t))throw new P(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vu(t){if(F.isDocumentKey(t))throw new P(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new P(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const wu=new Map;class Eu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ST("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ji{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Z0;switch(n.type){case"gapi":const s=n.client;return new sE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wu.get(e);n&&(R("ComponentProvider","Removing Datastore"),wu.delete(e),n.terminate())}(this),Promise.resolve()}}function AT(t,e,n,s={}){var r;const i=(t=St(t,ji))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Fe.MOCK_USER;else{o=wy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(c)}t._authCredentials=new eE(new od(o,a))}}/**
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
 */class tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class lr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Wt extends lr{constructor(e,n,s){super(e,n,uc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new F(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function To(t,e,...n){if(t=pt(t),ap("collection","path",e),t instanceof ji){const s=fe.fromString(e,...n);return vu(s),new Wt(t,null,s)}{if(!(t instanceof tt||t instanceof Wt))throw new P(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return vu(s),new Wt(t.firestore,null,s)}}function ua(t,e,...n){if(t=pt(t),arguments.length===1&&(e=ad.R()),ap("doc","path",e),t instanceof ji){const s=fe.fromString(e,...n);return yu(s),new tt(t,null,new F(s))}{if(!(t instanceof tt||t instanceof Wt))throw new P(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return yu(s),new tt(t.firestore,t instanceof Wt?t.converter:null,new F(s))}}/**
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
 */class cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Fe.UNAUTHENTICATED,this.clientId=ad.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Tc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xT(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Bd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function NT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kT(t);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>du(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>du(e.remoteStore,i)),t.onlineComponents=e}async function kT(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await xT(t,new _T)),t.offlineComponents}async function lp(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await NT(t,new CT)),t.onlineComponents}function RT(t){return lp(t).then(e=>e.syncEngine)}async function ha(t){const e=await lp(t),n=e.eventManager;return n.onListen=fT.bind(null,e.syncEngine),n.onUnlisten=pT.bind(null,e.syncEngine),n}function OT(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new cp({next:f=>{i.enqueueAndForget(()=>Zd(r,u)),f.fromCache&&a.source==="server"?c.reject(new P(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new ep(o,l,{includeMetadataChanges:!0,Nu:!0});return Jd(r,u)}(await ha(t),t.asyncQueue,e,n,s)),s.promise}class MT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new qd(this,"async_queue_retry"),this.Wc=()=>{const n=bo();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=bo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=bo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new zt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!rr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Lt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=bc.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function bu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Dn extends ji{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new MT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||up(this),this._firestoreClient.terminate()}}function LT(t,e){const n=typeof t=="object"?t:kh(),s=typeof t=="string"?t:e||"(default)",r=Ws(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=my("firestore");i&&AT(r,...i)}return r}function Sc(t){return t._firestoreClient||up(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function up(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new dE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new DT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(Ke.fromBase64String(e))}catch(n){throw new P(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ac{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/^__.*__$/;class PT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new sn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ir(e,this.data,n,this.fieldTransforms)}}class hp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new sn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class xc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ti(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(fp(this.sa)&&FT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class VT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||$i(e)}da(e,n,s,r=!1){return new xc({sa:e,methodName:n,fa:s,path:$e.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function dp(t){const e=t._freezeSettings(),n=$i(t._databaseId);return new VT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $T(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Nc("Data must be an object, but it was:",o,s);const a=pp(s,o);let c,l;if(i.merge)c=new ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=fa(e,f,n);if(!o.contains(p))throw new P(b.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mp(u,p)||u.push(p)}c=new ct(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new PT(new Xe(a),c,l)}class Hi extends Ac{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hi}}function UT(t,e,n,s){const r=t.da(1,e,n);Nc("Data must be an object, but it was:",r,s);const i=[],o=Xe.empty();Nn(s,(c,l)=>{const u=kc(e,c,n);l=pt(l);const f=r.ca(u);if(l instanceof Hi)i.push(u);else{const p=Ki(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new ct(i);return new hp(o,a,r.fieldTransforms)}function BT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[fa(e,s,n)],c=[r];if(i.length%2!=0)throw new P(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(fa(e,i[p])),c.push(i[p+1]);const l=[],u=Xe.empty();for(let p=a.length-1;p>=0;--p)if(!mp(l,a[p])){const g=a[p];let I=c[p];I=pt(I);const E=o.ca(g);if(I instanceof Hi)l.push(g);else{const O=Ki(I,E);O!=null&&(l.push(g),u.set(g,O))}}const f=new ct(l);return new hp(u,f,o.fieldTransforms)}function Ki(t,e){if(gp(t=pt(t)))return Nc("Unsupported field value:",e,t),pp(t,e);if(t instanceof Ac)return function(n,s){if(!fp(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ki(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ME(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Te.fromDate(n);return{timestampValue:Zr(s.yt,r)}}if(n instanceof Te){const r=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zr(s.yt,r)}}if(n instanceof Dc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ts)return{bytesValue:Ld(s.yt,n._byteString)};if(n instanceof tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Cc(n)}`)}(t,e)}function pp(t,e){const n={};return cd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(t,(s,r)=>{const i=Ki(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function gp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Dc||t instanceof ts||t instanceof tt||t instanceof Ac)}function Nc(t,e,n){if(!gp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Cc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function fa(t,e,n){if((e=pt(e))instanceof qi)return e._internalPath;if(typeof e=="string")return kc(t,e);throw ti("Field path arguments must be of type string or ",t,!1,void 0,n)}const jT=new RegExp("[~\\*/\\[\\]]");function kc(t,e,n){if(e.search(jT)>=0)throw ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qi(...e.split("."))._internalPath}catch{throw ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ti(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(b.INVALID_ARGUMENT,a+t+c)}function mp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qT extends yp{data(){return super.data()}}function vp(t,e){return typeof e=="string"?kc(t,e):e instanceof qi?e._internalPath:e._delegate._internalPath}/**
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
 */function wp(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HT{convertValue(e,n="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const s={};return Nn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Dc(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ud(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const n=Jt(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=fe.fromString(e);ce(Ud(s));const r=new Bs(s.get(1),s.get(3)),i=new F(s.popFirst(5));return r.isEqual(n)||Lt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function KT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ep extends yp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Nr extends Ep{data(e={}){return super.data(e)}}class bp{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new vs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Nr(this._firestore,this._userDataWriter,s.key,s,new vs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Nr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Nr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:zT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Rc extends HT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function WT(t){t=St(t,lr);const e=St(t.firestore,Dn),n=Sc(e),s=new Rc(e);return wp(t._query),OT(n,t._query).then(r=>new bp(e,s,t,r))}function GT(t,e,n,...s){t=St(t,tt);const r=St(t.firestore,Dn),i=dp(r);let o;return o=typeof(e=pt(e))=="string"||e instanceof qi?BT(i,"updateDoc",t._key,e,n,s):UT(i,"updateDoc",t._key,e),Oc(r,[o.toMutation(t._key,dt.exists(!0))])}function QT(t){return Oc(St(t.firestore,Dn),[new fc(t._key,dt.none())])}function YT(t,e){const n=St(t.firestore,Dn),s=ua(t),r=KT(t.converter,e);return Oc(n,[$T(dp(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,dt.exists(!1))]).then(()=>s)}function XT(t,...e){var n,s,r;t=pt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof tt)l=St(t.firestore,Dn),u=uc(t._key.path),c={next:f=>{e[o]&&e[o](JT(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=St(t,lr);l=St(f.firestore,Dn),u=f._query;const p=new Rc(l);c={next:g=>{e[o]&&e[o](new bp(l,p,f,g))},error:e[o+1],complete:e[o+2]},wp(t._query)}return function(f,p,g,I){const E=new cp(I),O=new ep(p,E,g);return f.asyncQueue.enqueueAndForget(async()=>Jd(await ha(f),O)),()=>{E.bc(),f.asyncQueue.enqueueAndForget(async()=>Zd(await ha(f),O))}}(Sc(l),u,a,c)}function Oc(t,e){return function(n,s){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>gT(await RT(n),s,r)),r.promise}(Sc(t),e)}function JT(t,e,n){const s=n.docs.get(e._key),r=new Rc(t);return new Ep(t,r,e._key,s,new vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){as=n})(Tv),Yt(new Ot("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Dn(new tE(n.getProvider("auth-internal")),new iE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_t(Kl,"3.8.0",t),_t(Kl,"3.8.0","esm2017")})();const ZT=t=>(Ig("data-v-7e873e31"),t=t(),_g(),t),eI=["onClick"],tI={class:"add-card-div"},nI=ZT(()=>G("br",null,null,-1)),sI={style:{"text-align":"center"}},rI=["src"],iI={for:"imgFile",class:"imgUploadBtn"},oI={class:"chooseColorDiv"},aI={for:"color01"},cI=["checked"],lI={for:"color02"},uI=["checked"],hI={for:"color03"},fI=["checked"],dI={for:"color04"},pI=["checked"],gI={for:"color05"},mI=["checked"],yI={style:{"text-align":"center",margin:"0"}},vI={__name:"App",setup(t){const n=Nh({apiKey:"AIzaSyAkBG_WGNQRaaQVnPOvolvdy8eAXVPtMDo",authDomain:"note-d549b.firebaseapp.com",projectId:"note-d549b",storageBucket:"note-d549b.appspot.com",messagingSenderId:"381280428927",appId:"1:381280428927:web:69b4c78f9d65dca937704a",measurementId:"G-KPNSMZP8X7"});Ww(n);const s=LT(n),r="Note",i=Ze({}),o=(A,k)=>Math.floor(Math.random()*k)+A,a=()=>{var A=(Math.round(Math.random())*2-1)*o(0,15),k=window.innerWidth,oe=window.innerHeight,me=o(15,k-400),Ne=o(15,oe-300);return{X:me,Y:Ne,Deg:A}},c=async A=>{try{const k=await YT(To(s,r),A);V()}catch(k){console.error("Error adding document: ",k),alert("圖片太大張了")}},l=async()=>{(await WT(To(s,r))).forEach(k=>{k.id,k.data(),i.value[k.id]=k.data()})},u=async A=>{await QT(ua(s,r,A))};XT(To(s,r),A=>{i.value={},A.docs.forEach(k=>{i.value[k.id]=k.data()})}),l();const f=A=>new Promise((k,oe)=>{let me=new FileReader;me.onload=()=>{k(me.result)},me.onerror=()=>{oe(me.error)},me.readAsDataURL(A)}),p=Ze(""),g=Ze(2),I=Ze(""),E=Ze(""),O=A=>{f(A).then(k=>{k.length>1048487?(alert("圖片檔案太大了!換一張!"),document.getElementById("imgFile").value=""):p.value=k}).catch(k=>console.log(k))},H=A=>{A.target.files.length>0&&O(A.target.files[0])},ee=()=>{document.getElementById("add-card-cover").classList.add("active")},V=()=>{document.getElementById("add-card-cover").classList.remove("active"),p.value="",g.value=2,I.value="",E.value=""},X=A=>A<10?"0"+A:A,de=A=>{let k=A.getFullYear(),oe=X(A.getMonth()+1),me=X(A.getDate()),Ne=X(A.getHours()),hs=X(A.getMinutes()),zi=X(A.getSeconds());return k+"-"+oe+"-"+me+" "+Ne+":"+hs+":"+zi},gt=()=>{var A=new Date;let k={Name:I.value,Content:E.value,ImageBase64:p.value,Color:g.value,Date:de(A),Pos:a()};c(k)},Le=Ze(0),z=Ze(0),pe=Ze(!1),re=Ze(""),De=Ze(0),Qe=Ze(0),rt=async A=>{const k=ua(s,r,A);await GT(k,i.value[A])},rn=(A,k,oe)=>{pe.value=!0,re.value=oe,Le.value=A.clientX,z.value=A.clientY,De.value=A.clientX-k.Pos.X,Qe.value=A.clientY-k.Pos.Y,console.log(Le.value,z.value,De.value,Qe.value)},us=A=>{Le.value=A.clientX,z.value=A.clientY,pe.value&&(i.value[re.value].Pos.X=Le.value-De.value,i.value[re.value].Pos.Y=z.value-Qe.value)},xe=A=>{pe.value=!1,rt(re.value)},ue=A=>{pe.value=!1,rt(re.value)};return(A,k)=>(qt(),jn(We,null,[It(iy),(qt(!0),jn(We,null,oh(i.value,(oe,me)=>(qt(),yh(ny,{key:me,"card-key":me,"card-info":oe,onMousedown:Ne=>rn(Ne,oe,me),onMouseup:xe,onMousemove:us},{default:Xu(()=>[G("div",{class:"delbtn",onClick:Ne=>u(me)},null,8,eI)]),_:2},1032,["card-key","card-info","onMousedown"]))),128)),G("div",{class:"add-card-cover",id:"add-card-cover",onMousemove:us,onMouseup:ue},[G("div",tI,[G("div",{class:"closeBtn",onClick:k[0]||(k[0]=oe=>V())}),G("div",null,[fn(" 暱稱 "),Qc(G("input",{type:"text","onUpdate:modelValue":k[1]||(k[1]=oe=>I.value=oe),maxlength:"50"},null,512),[[dl,I.value]])]),G("div",null,[fn(" 內容 "),Qc(G("input",{type:"text","onUpdate:modelValue":k[2]||(k[2]=oe=>E.value=oe)},null,512),[[dl,E.value]])]),G("div",null,[fn(" 圖片"),nI,G("div",sI,[G("img",{src:p.value,alt:""},null,8,rI)]),G("label",iI,[G("input",{type:"file",id:"imgFile",style:{display:"none"},accept:"image/png, image/jpeg, .gif",onChange:H},null,32),fn(" 上傳 ")])]),G("div",null,[fn(" 便條顏色 "),G("div",oI,[G("label",aI,[G("input",{type:"radio",name:"cardColor",id:"color01",onClick:k[3]||(k[3]=oe=>g.value=1),checked:g.value===1},null,8,cI)]),G("label",lI,[G("input",{type:"radio",name:"cardColor",id:"color02",onClick:k[4]||(k[4]=oe=>g.value=2),checked:g.value===2},null,8,uI)]),G("label",hI,[G("input",{type:"radio",name:"cardColor",id:"color03",onClick:k[5]||(k[5]=oe=>g.value=3),checked:g.value===3},null,8,fI)]),G("label",dI,[G("input",{type:"radio",name:"cardColor",id:"color04",onClick:k[6]||(k[6]=oe=>g.value=4),checked:g.value===4},null,8,pI)]),G("label",gI,[G("input",{type:"radio",name:"cardColor",id:"color05",onClick:k[7]||(k[7]=oe=>g.value=5),checked:g.value===5},null,8,mI)])])]),G("div",yI,[G("button",{class:"addCardBtn",onClick:k[8]||(k[8]=oe=>gt())},"新增")])])],32),G("button",{class:"addBtn",onClick:k[9]||(k[9]=oe=>ee())})],64))}},wI=ka(vI,[["__scopeId","data-v-7e873e31"]]);Gm(wI).mount("#app");
