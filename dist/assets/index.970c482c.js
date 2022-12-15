(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ks=Qr(xs);function Ji(e){return!!e||e===""}function ea(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?Ss(r):ea(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(te(e))return e}}const As=/;(?![^(]*\))/g,Es=/:(.+)/;function Ss(e){const t={};return e.split(As).forEach(n=>{if(n){const r=n.split(Es);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ta(e){let t="";if(fe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=ta(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gt=e=>fe(e)?e:e==null?"":D(e)||te(e)&&(e.toString===Qi||!R(e.toString))?JSON.stringify(e,Xi,2):String(e),Xi=(e,t)=>t&&t.__v_isRef?Xi(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Gi(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!D(t)&&!eo(t)?String(t):t,q={},Ot=[],Te=()=>{},Cs=()=>!1,Ps=/^on[^a-z]/,Zn=e=>Ps.test(e),na=e=>e.startsWith("onUpdate:"),ge=Object.assign,ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Is=Object.prototype.hasOwnProperty,U=(e,t)=>Is.call(e,t),D=Array.isArray,Tt=e=>Qn(e)==="[object Map]",Gi=e=>Qn(e)==="[object Set]",R=e=>typeof e=="function",fe=e=>typeof e=="string",aa=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Zi=e=>te(e)&&R(e.then)&&R(e.catch),Qi=Object.prototype.toString,Qn=e=>Qi.call(e),Os=e=>Qn(e).slice(8,-1),eo=e=>Qn(e)==="[object Object]",ia=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ts=/-(\w)/g,Re=er(e=>e.replace(Ts,(t,n)=>n?n.toUpperCase():"")),js=/\B([A-Z])/g,Dt=er(e=>e.replace(js,"-$1").toLowerCase()),tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=er(e=>e?`on${tr(e)}`:""),en=(e,t)=>!Object.is(e,t),br=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ya;const Ns=()=>Ya||(Ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Le;class Fs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Ls(e,t=Le){t&&t.active&&t.effects.push(e)}const oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},to=e=>(e.w&at)>0,no=e=>(e.n&at)>0,$s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=at},zs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];to(a)&&!no(a)?a.delete(e):t[n++]=a,a.w&=~at,a.n&=~at}t.length=n}},Cr=new WeakMap;let Vt=0,at=1;const Pr=30;let Ce;const _t=Symbol(""),Ir=Symbol("");class sa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ls(this,r)}run(){if(!this.active)return this.fn();let t=Ce,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ce,Ce=this,tt=!0,at=1<<++Vt,Vt<=Pr?$s(this):Ka(this),this.fn()}finally{Vt<=Pr&&zs(this),at=1<<--Vt,Ce=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&(Ka(this),this.onStop&&this.onStop(),this.active=!1)}}function Ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const ro=[];function Rt(){ro.push(tt),tt=!1}function Ht(){const e=ro.pop();tt=e===void 0?!0:e}function _e(e,t,n){if(tt&&Ce){let r=Cr.get(e);r||Cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=oa()),ao(a)}}function ao(e,t){let n=!1;Vt<=Pr?no(e)||(e.n|=at,n=!to(e)):n=!e.has(Ce),n&&(e.add(Ce),Ce.deps.push(e))}function Ke(e,t,n,r,a,i){const o=Cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?ia(n)&&s.push(o.get("length")):(s.push(o.get(_t)),Tt(e)&&s.push(o.get(Ir)));break;case"delete":D(e)||(s.push(o.get(_t)),Tt(e)&&s.push(o.get(Ir)));break;case"set":Tt(e)&&s.push(o.get(_t));break}if(s.length===1)s[0]&&Or(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Or(oa(l))}}function Or(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&Va(r);for(const r of n)r.computed||Va(r)}function Va(e,t){(e!==Ce||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ds=Qr("__proto__,__v_isRef,__isVue"),io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(aa)),Rs=la(),Hs=la(!1,!0),Bs=la(!0),qa=Ws();function Ws(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=K(this)[t].apply(this,n);return Ht(),r}}),e}function la(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?il:fo:t?co:lo).get(r))return r;const o=D(r);if(!e&&o&&U(qa,a))return Reflect.get(qa,a,i);const s=Reflect.get(r,a,i);return(aa(a)?io.has(a):Ds(a))||(e||_e(r,"get",a),t)?s:me(s)?o&&ia(a)?s:s.value:te(s)?e?uo(s):ua(s):s}}const Us=oo(),Ys=oo(!0);function oo(e=!1){return function(n,r,a,i){let o=n[r];if(Ft(o)&&me(o)&&!me(a))return!1;if(!e&&(!Bn(a)&&!Ft(a)&&(o=K(o),a=K(a)),!D(n)&&me(o)&&!me(a)))return o.value=a,!0;const s=D(n)&&ia(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?en(a,o)&&Ke(n,"set",r,a):Ke(n,"add",r,a)),l}}function Ks(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ke(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!aa(t)||!io.has(t))&&_e(e,"has",t),n}function qs(e){return _e(e,"iterate",D(e)?"length":_t),Reflect.ownKeys(e)}const so={get:Rs,set:Us,deleteProperty:Ks,has:Vs,ownKeys:qs},Js={get:Bs,set(e,t){return!0},deleteProperty(e,t){return!0}},Xs=ge({},so,{get:Hs,set:Ys}),ca=e=>e,nr=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=nr(a),s=r?ca:n?ma:tn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function xn(e,t=!1){return e=e.__v_raw,!t&&_e(K(e),"iterate",_t),Reflect.get(e,"size",e)}function Ja(e){e=K(e);const t=K(this);return nr(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Xa(e,t){t=K(t);const n=K(this),{has:r,get:a}=nr(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?en(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Ga(e){const t=K(this),{has:n,get:r}=nr(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function Za(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?ca:e?ma:tn;return!e&&_e(s,"iterate",_t),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function An(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Tt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ca:t?ma:tn;return!t&&_e(i,"iterate",l?Ir:_t),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function Gs(){const e={get(i){return wn(this,i)},get size(){return xn(this)},has:_n,add:Ja,set:Xa,delete:Ga,clear:Za,forEach:kn(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return xn(this)},has:_n,add:Ja,set:Xa,delete:Ga,clear:Za,forEach:kn(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return xn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:kn(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return xn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=An(i,!1,!1),n[i]=An(i,!0,!1),t[i]=An(i,!1,!0),r[i]=An(i,!0,!0)}),[e,n,t,r]}const[Zs,Qs,el,tl]=Gs();function fa(e,t){const n=t?e?tl:el:e?Qs:Zs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const nl={get:fa(!1,!1)},rl={get:fa(!1,!0)},al={get:fa(!0,!1)},lo=new WeakMap,co=new WeakMap,fo=new WeakMap,il=new WeakMap;function ol(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(e){return e.__v_skip||!Object.isExtensible(e)?0:ol(Os(e))}function ua(e){return Ft(e)?e:da(e,!1,so,nl,lo)}function ll(e){return da(e,!1,Xs,rl,co)}function uo(e){return da(e,!0,Js,al,fo)}function da(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function jt(e){return Ft(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Bn(e){return!!(e&&e.__v_isShallow)}function mo(e){return jt(e)||Ft(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function ho(e){return Hn(e,"__v_skip",!0),e}const tn=e=>te(e)?ua(e):e,ma=e=>te(e)?uo(e):e;function po(e){tt&&Ce&&(e=K(e),ao(e.dep||(e.dep=oa())))}function go(e,t){e=K(e),e.dep&&Or(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function ue(e){return cl(e,!1)}function cl(e,t){return me(e)?e:new fl(e,t)}class fl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:tn(t)}get value(){return po(this),this._value}set value(t){const n=this.__v_isShallow||Bn(t)||Ft(t);t=n?t:K(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),go(this))}}function le(e){return me(e)?e.value:e}const ul={get:(e,t,n)=>le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function vo(e){return jt(e)?e:new Proxy(e,ul)}var bo;class dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[bo]=!1,this._dirty=!0,this.effect=new sa(t,()=>{this._dirty||(this._dirty=!0,go(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return po(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}bo="__v_isReadonly";function ml(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new dl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){rr(i,t,n)}return a}function je(e,t,n,r){if(R(e)){const i=nt(e,t,n,r);return i&&Zi(i)&&i.catch(o=>{rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}hl(e,n,a,r)}function hl(e,t,n,r=!0){console.error(e)}let nn=!1,Tr=!1;const de=[];let ze=0;const Mt=[];let Ue=null,mt=0;const yo=Promise.resolve();let ha=null;function pl(e){const t=ha||yo;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=ze+1,n=de.length;for(;t<n;){const r=t+n>>>1;rn(de[r])<e?t=r+1:n=r}return t}function pa(e){(!de.length||!de.includes(e,nn&&e.allowRecurse?ze+1:ze))&&(e.id==null?de.push(e):de.splice(gl(e.id),0,e),wo())}function wo(){!nn&&!Tr&&(Tr=!0,ha=yo.then(xo))}function vl(e){const t=de.indexOf(e);t>ze&&de.splice(t,1)}function bl(e){D(e)?Mt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?mt+1:mt))&&Mt.push(e),wo()}function Qa(e,t=nn?ze+1:0){for(;t<de.length;t++){const n=de[t];n&&n.pre&&(de.splice(t,1),t--,n())}}function _o(e){if(Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>rn(n)-rn(r)),mt=0;mt<Ue.length;mt++)Ue[mt]();Ue=null,mt=0}}const rn=e=>e.id==null?1/0:e.id,yl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xo(e){Tr=!1,nn=!0,de.sort(yl);const t=Te;try{for(ze=0;ze<de.length;ze++){const n=de[ze];n&&n.active!==!1&&nt(n,null,14)}}finally{ze=0,de.length=0,_o(),nn=!1,ha=null,(de.length||Mt.length)&&xo()}}function wl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||q;h&&(a=n.map(y=>y.trim())),m&&(a=n.map(Ms))}let s,l=r[s=vr(t)]||r[s=vr(Re(t))];!l&&i&&(l=r[s=vr(Dt(t))]),l&&je(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(f,e,6,a)}}function ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=f=>{const u=ko(f,t,!0);u&&(s=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):ge(o,i),te(e)&&r.set(e,o),o)}function ar(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Dt(t))||U(e,t))}let Ee=null,ir=null;function Wn(e){const t=Ee;return Ee=e,ir=e&&e.type.__scopeId||null,t}function _l(e){ir=e}function xl(){ir=null}function kl(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ci(-1);const i=Wn(t);let o;try{o=e(...a)}finally{Wn(i),r._d&&ci(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:y,ctx:F,inheritAttrs:T}=e;let H,_;const C=Wn(e);try{if(n.shapeFlag&4){const B=a||r;H=$e(u.call(B,B,m,i,y,h,F)),_=l}else{const B=t;H=$e(B.length>1?B(i,{attrs:l,slots:s,emit:f}):B(i,null)),_=t.props?l:Al(l)}}catch(B){Xt.length=0,rr(B,e,1),H=ee(kt)}let $=H;if(_&&T!==!1){const B=Object.keys(_),{shapeFlag:j}=$;B.length&&j&7&&(o&&B.some(na)&&(_=El(_,o)),$=Lt($,_))}return n.dirs&&($=Lt($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),H=$,Wn(C),H}const Al=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},El=(e,t)=>{const n={};for(const r in e)(!na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ei(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!ar(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ei(r,o,f):!0:!!o;return!1}function ei(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ar(n,i))return!0}return!1}function Cl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pl=e=>e.__isSuspense;function Il(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):bl(e)}function Ol(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function wr(e,t,n=!1){const r=ce||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}function Tl(e,t){return or(e,null,t)}function jl(e,t){return or(e,null,{flush:"post"})}const ti={};function Ln(e,t,n){return or(e,t,n)}function or(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=ce;let l,f=!1,u=!1;if(me(e)?(l=()=>e.value,f=Bn(e)):jt(e)?(l=()=>e,r=!0):D(e)?(u=!0,f=e.some(_=>jt(_)||Bn(_)),l=()=>e.map(_=>{if(me(_))return _.value;if(jt(_))return vt(_);if(R(_))return nt(_,s,2)})):R(e)?t?l=()=>nt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),je(e,s,3,[h])}:l=Te,t&&r){const _=l;l=()=>vt(_())}let m,h=_=>{m=H.onStop=()=>{nt(_,s,4)}};if(sn)return h=Te,t?n&&je(t,s,3,[l(),u?[]:void 0,h]):l(),Te;let y=u?[]:ti;const F=()=>{if(!!H.active)if(t){const _=H.run();(r||f||(u?_.some((C,$)=>en(C,y[$])):en(_,y)))&&(m&&m(),je(t,s,3,[_,y===ti?void 0:y,h]),y=_)}else H.run()};F.allowRecurse=!!t;let T;a==="sync"?T=F:a==="post"?T=()=>be(F,s&&s.suspense):(F.pre=!0,s&&(F.id=s.uid),T=()=>pa(F));const H=new sa(l,T);return t?n?F():y=H.run():a==="post"?be(H.run.bind(H),s&&s.suspense):H.run(),()=>{H.stop(),s&&s.scope&&ra(s.scope.effects,H)}}function Ml(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=ce;$t(this);const s=or(a,i.bind(r),n);return o?$t(o):xt(),s}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))vt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(Gi(e)||Tt(e))e.forEach(n=>{vt(n,t)});else if(eo(e))for(const n in e)vt(e[n],t);return e}function ga(e){return R(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader,Eo=e=>e.type.__isKeepAlive;function Nl(e,t){So(e,"a",t)}function Fl(e,t){So(e,"da",t)}function So(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Eo(a.parent.vnode)&&Ll(r,t,n,a),a=a.parent}}function Ll(e,t,n,r){const a=sr(t,e,r,!0);ba(()=>{ra(r[t],a)},n)}function sr(e,t,n=ce,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),$t(n);const s=je(t,n,e,o);return xt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Xe=e=>(t,n=ce)=>(!sn||e==="sp")&&sr(e,(...r)=>t(...r),n),$l=Xe("bm"),va=Xe("m"),zl=Xe("bu"),Dl=Xe("u"),Rl=Xe("bum"),ba=Xe("um"),Hl=Xe("sp"),Bl=Xe("rtg"),Wl=Xe("rtc");function Ul(e,t=ce){sr("ec",e,t)}function rt(e,t){const n=Ee;if(n===null)return e;const r=cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=q]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&vt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),je(l,n,8,[e.el,s,e,t]),Ht())}}const Yl="components",Kl="directives",Vl=Symbol();function ya(e){return ql(Kl,e)}function ql(e,t,n=!0,r=!1){const a=Ee||ce;if(a){const i=a.type;if(e===Yl){const s=Sc(i,!1);if(s&&(s===t||s===Re(t)||s===tr(Re(t))))return i}const o=ni(a[e]||i[e],t)||ni(a.appContext[e],t);return!o&&r?i:o}}function ni(e,t){return e&&(e[t]||e[Re(t)]||e[tr(Re(t))])}function bt(e,t,n,r){let a;const i=n&&n[r];if(D(e)||fe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const jr=e=>e?$o(e)?cr(e)||e.proxy:jr(e.parent):null,Un=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>pa(e.update)),$nextTick:e=>e.n||(e.n=pl.bind(e.proxy)),$watch:e=>Ml.bind(e)}),Jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==q&&U(r,t))return o[t]=1,r[t];if(a!==q&&U(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&U(f,t))return o[t]=3,i[t];if(n!==q&&U(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const u=Un[t];let m,h;if(u)return t==="$attrs"&&_e(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&U(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,U(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==q&&U(a,t)?(a[t]=n,!0):r!==q&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&U(e,o)||t!==q&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Un,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Mr=!0;function Xl(e){const t=wa(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:F,activated:T,deactivated:H,beforeDestroy:_,beforeUnmount:C,destroyed:$,unmounted:B,render:j,renderTracked:L,renderTriggered:O,errorCaptured:ne,serverPrefetch:ke,expose:Be,inheritAttrs:Wt,components:gn,directives:vn,filters:hr}=t;if(f&&Gl(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const J=o[re];R(J)&&(r[re]=J.bind(n))}if(a){const re=a.call(n,n);te(re)&&(e.data=ua(re))}if(Mr=!0,i)for(const re in i){const J=i[re],lt=R(J)?J.bind(n,n):R(J.get)?J.get.bind(n,n):Te,bn=!R(J)&&R(J.set)?J.set.bind(n):Te,ct=we({get:lt,set:bn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Me=>ct.value=Me})}if(s)for(const re in s)Co(s[re],r,n,re);if(l){const re=R(l)?l.call(n):l;Reflect.ownKeys(re).forEach(J=>{Ol(J,re[J])})}u&&ri(u,e,"c");function he(re,J){D(J)?J.forEach(lt=>re(lt.bind(n))):J&&re(J.bind(n))}if(he($l,m),he(va,h),he(zl,y),he(Dl,F),he(Nl,T),he(Fl,H),he(Ul,ne),he(Wl,L),he(Bl,O),he(Rl,C),he(ba,B),he(Hl,ke),D(Be))if(Be.length){const re=e.exposed||(e.exposed={});Be.forEach(J=>{Object.defineProperty(re,J,{get:()=>n[J],set:lt=>n[J]=lt})})}else e.exposed||(e.exposed={});j&&e.render===Te&&(e.render=j),Wt!=null&&(e.inheritAttrs=Wt),gn&&(e.components=gn),vn&&(e.directives=vn)}function Gl(e,t,n=Te,r=!1){D(e)&&(e=Nr(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=wr(i.from||a,i.default,!0):o=wr(i.from||a):o=wr(i),me(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ri(e,t,n){je(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Co(e,t,n,r){const a=r.includes(".")?Ao(n,r):()=>n[r];if(fe(e)){const i=t[e];R(i)&&Ln(a,i)}else if(R(e))Ln(a,e.bind(n));else if(te(e))if(D(e))e.forEach(i=>Co(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Ln(a,i,e)}}function wa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Yn(l,f,o,!0)),Yn(l,t,o)),te(t)&&i.set(t,l),l}function Yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Yn(e,i,n,!0),a&&a.forEach(o=>Yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Zl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Zl={data:ai,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:dt,directives:dt,watch:ec,provide:ai,inject:Ql};function ai(e,t){return t?e?function(){return ge(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return dt(Nr(e),Nr(t))}function Nr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function dt(e,t){return e?ge(ge(Object.create(null),e),t):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function tc(e,t,n,r=!1){const a={},i={};Hn(i,lr,1),e.propsDefaults=Object.create(null),Po(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function nc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(ar(e.emitsOptions,h))continue;const y=t[h];if(l)if(U(i,h))y!==i[h]&&(i[h]=y,f=!0);else{const F=Re(h);a[F]=Fr(l,s,F,y,e,!1)}else y!==i[h]&&(i[h]=y,f=!0)}}}else{Po(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=Dt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],f=!0)}f&&Ke(e,"set","$attrs")}function Po(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Fn(l))continue;const f=t[l];let u;a&&U(a,u=Re(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:ar(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=K(n),f=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Fr(a,l,m,f[m],e,!U(f,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:f}=a;n in f?r=f[n]:($t(a),r=f[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const u=m=>{l=!0;const[h,y]=Io(m,t,!0);ge(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,Ot),Ot;if(D(i))for(let u=0;u<i.length;u++){const m=Re(i[u]);ii(m)&&(o[m]=q)}else if(i)for(const u in i){const m=Re(u);if(ii(m)){const h=i[u],y=o[m]=D(h)||R(h)?{type:h}:h;if(y){const F=li(Boolean,y.type),T=li(String,y.type);y[0]=F>-1,y[1]=T<0||F<T,(F>-1||U(y,"default"))&&s.push(m)}}}const f=[o,s];return te(e)&&r.set(e,f),f}function ii(e){return e[0]!=="$"}function oi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function si(e,t){return oi(e)===oi(t)}function li(e,t){return D(t)?t.findIndex(n=>si(n,e)):R(t)&&si(t,e)?0:-1}const Oo=e=>e[0]==="_"||e==="$stable",_a=e=>D(e)?e.map($e):[$e(e)],rc=(e,t,n)=>{if(t._n)return t;const r=kl((...a)=>_a(t(...a)),n);return r._c=!1,r},To=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Oo(a))continue;const i=e[a];if(R(i))t[a]=rc(a,i,r);else if(i!=null){const o=_a(i);t[a]=()=>o}}},jo=(e,t)=>{const n=_a(t);e.slots.default=()=>n},ac=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),Hn(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&jo(e,t);Hn(e.slots,lr,1)},ic=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ge(a,t),!n&&s===1&&delete a._):(i=!t.$stable,To(t,a)),o=t}else t&&(jo(e,t),o={default:1});if(i)for(const s in a)!Oo(s)&&!(s in o)&&delete a[s]};function Mo(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function sc(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=Mo(),o=new Set;let s=!1;const l=i.app={_uid:oc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Pc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&R(f.install)?(o.add(f),f.install(l,...u)):R(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=ee(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,cr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Lr(e,t,n,r,a=!1){if(D(e)){e.forEach((h,y)=>Lr(h,t&&(D(t)?t[y]:t),n,r,a));return}if($n(r)&&!a)return;const i=r.shapeFlag&4?cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(fe(f)?(u[f]=null,U(m,f)&&(m[f]=null)):me(f)&&(f.value=null)),R(l))nt(l,s,12,[o,u]);else{const h=fe(l),y=me(l);if(h||y){const F=()=>{if(e.f){const T=h?U(m,l)?m[l]:u[l]:l.value;a?D(T)&&ra(T,i):D(T)?T.includes(i)||T.push(i):h?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,U(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,be(F,n)):F()}}}const be=Il;function lc(e){return cc(e)}function cc(e,t){const n=Ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Te,insertStaticContent:F}=e,T=(c,d,p,v=null,g=null,k=null,E=!1,x=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!Yt(c,d)&&(v=yn(c),Me(c,g,k,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:P}=d;switch(w){case xa:H(c,d,p,v);break;case kt:_(c,d,p,v);break;case Jt:c==null&&C(d,p,v,E);break;case oe:gn(c,d,p,v,g,k,E,x,A);break;default:P&1?j(c,d,p,v,g,k,E,x,A):P&6?vn(c,d,p,v,g,k,E,x,A):(P&64||P&128)&&w.process(c,d,p,v,g,k,E,x,A,St)}M!=null&&g&&Lr(M,c&&c.ref,k,d||c,!d)},H=(c,d,p,v)=>{if(c==null)r(d.el=s(d.children),p,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},_=(c,d,p,v)=>{c==null?r(d.el=l(d.children||""),p,v):d.el=c.el},C=(c,d,p,v)=>{[c.el,c.anchor]=F(c.children,d,p,v,c.el,c.anchor)},$=({el:c,anchor:d},p,v)=>{let g;for(;c&&c!==d;)g=h(c),r(c,p,v),c=g;r(d,p,v)},B=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},j=(c,d,p,v,g,k,E,x,A)=>{E=E||d.type==="svg",c==null?L(d,p,v,g,k,E,x,A):ke(c,d,g,k,E,x,A)},L=(c,d,p,v,g,k,E,x)=>{let A,w;const{type:M,props:P,shapeFlag:N,transition:z,dirs:W}=c;if(A=c.el=o(c.type,k,P&&P.is,P),N&8?u(A,c.children):N&16&&ne(c.children,A,null,v,g,k&&M!=="foreignObject",E,x),W&&ft(c,null,v,"created"),P){for(const V in P)V!=="value"&&!Fn(V)&&i(A,V,null,P[V],k,c.children,v,g,We);"value"in P&&i(A,"value",null,P.value),(w=P.onVnodeBeforeMount)&&Fe(w,v,c)}O(A,c,c.scopeId,E,v),W&&ft(c,null,v,"beforeMount");const X=(!g||g&&!g.pendingBranch)&&z&&!z.persisted;X&&z.beforeEnter(A),r(A,d,p),((w=P&&P.onVnodeMounted)||X||W)&&be(()=>{w&&Fe(w,v,c),X&&z.enter(A),W&&ft(c,null,v,"mounted")},g)},O=(c,d,p,v,g)=>{if(p&&y(c,p),v)for(let k=0;k<v.length;k++)y(c,v[k]);if(g){let k=g.subTree;if(d===k){const E=g.vnode;O(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},ne=(c,d,p,v,g,k,E,x,A=0)=>{for(let w=A;w<c.length;w++){const M=c[w]=x?et(c[w]):$e(c[w]);T(null,M,d,p,v,g,k,E,x)}},ke=(c,d,p,v,g,k,E)=>{const x=d.el=c.el;let{patchFlag:A,dynamicChildren:w,dirs:M}=d;A|=c.patchFlag&16;const P=c.props||q,N=d.props||q;let z;p&&ut(p,!1),(z=N.onVnodeBeforeUpdate)&&Fe(z,p,d,c),M&&ft(d,c,p,"beforeUpdate"),p&&ut(p,!0);const W=g&&d.type!=="foreignObject";if(w?Be(c.dynamicChildren,w,x,p,v,W,k):E||J(c,d,x,null,p,v,W,k,!1),A>0){if(A&16)Wt(x,d,P,N,p,v,g);else if(A&2&&P.class!==N.class&&i(x,"class",null,N.class,g),A&4&&i(x,"style",P.style,N.style,g),A&8){const X=d.dynamicProps;for(let V=0;V<X.length;V++){const ie=X[V],Se=P[ie],Ct=N[ie];(Ct!==Se||ie==="value")&&i(x,ie,Se,Ct,g,c.children,p,v,We)}}A&1&&c.children!==d.children&&u(x,d.children)}else!E&&w==null&&Wt(x,d,P,N,p,v,g);((z=N.onVnodeUpdated)||M)&&be(()=>{z&&Fe(z,p,d,c),M&&ft(d,c,p,"updated")},v)},Be=(c,d,p,v,g,k,E)=>{for(let x=0;x<d.length;x++){const A=c[x],w=d[x],M=A.el&&(A.type===oe||!Yt(A,w)||A.shapeFlag&70)?m(A.el):p;T(A,w,M,null,v,g,k,E,!0)}},Wt=(c,d,p,v,g,k,E)=>{if(p!==v){if(p!==q)for(const x in p)!Fn(x)&&!(x in v)&&i(c,x,p[x],null,E,d.children,g,k,We);for(const x in v){if(Fn(x))continue;const A=v[x],w=p[x];A!==w&&x!=="value"&&i(c,x,w,A,E,d.children,g,k,We)}"value"in v&&i(c,"value",p.value,v.value)}},gn=(c,d,p,v,g,k,E,x,A)=>{const w=d.el=c?c.el:s(""),M=d.anchor=c?c.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:z}=d;z&&(x=x?x.concat(z):z),c==null?(r(w,p,v),r(M,p,v),ne(d.children,p,M,g,k,E,x,A)):P>0&&P&64&&N&&c.dynamicChildren?(Be(c.dynamicChildren,N,p,g,k,E,x),(d.key!=null||g&&d===g.subTree)&&No(c,d,!0)):J(c,d,p,M,g,k,E,x,A)},vn=(c,d,p,v,g,k,E,x,A)=>{d.slotScopeIds=x,c==null?d.shapeFlag&512?g.ctx.activate(d,p,v,E,A):hr(d,p,v,g,k,E,A):Da(c,d,A)},hr=(c,d,p,v,g,k,E)=>{const x=c.component=wc(c,v,g);if(Eo(c)&&(x.ctx.renderer=St),xc(x),x.asyncDep){if(g&&g.registerDep(x,he),!c.el){const A=x.subTree=ee(kt);_(null,A,d,p)}return}he(x,c,d,p,g,k,E)},Da=(c,d,p)=>{const v=d.component=c.component;if(Sl(c,d,p))if(v.asyncDep&&!v.asyncResolved){re(v,d,p);return}else v.next=d,vl(v.update),v.update();else d.el=c.el,v.vnode=d},he=(c,d,p,v,g,k,E)=>{const x=()=>{if(c.isMounted){let{next:M,bu:P,u:N,parent:z,vnode:W}=c,X=M,V;ut(c,!1),M?(M.el=W.el,re(c,M,E)):M=W,P&&br(P),(V=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(V,z,M,W),ut(c,!0);const ie=yr(c),Se=c.subTree;c.subTree=ie,T(Se,ie,m(Se.el),yn(Se),c,g,k),M.el=ie.el,X===null&&Cl(c,ie.el),N&&be(N,g),(V=M.props&&M.props.onVnodeUpdated)&&be(()=>Fe(V,z,M,W),g)}else{let M;const{el:P,props:N}=d,{bm:z,m:W,parent:X}=c,V=$n(d);if(ut(c,!1),z&&br(z),!V&&(M=N&&N.onVnodeBeforeMount)&&Fe(M,X,d),ut(c,!0),P&&gr){const ie=()=>{c.subTree=yr(c),gr(P,c.subTree,c,g,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ie()):ie()}else{const ie=c.subTree=yr(c);T(null,ie,p,v,c,g,k),d.el=ie.el}if(W&&be(W,g),!V&&(M=N&&N.onVnodeMounted)){const ie=d;be(()=>Fe(M,X,ie),g)}(d.shapeFlag&256||X&&$n(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&be(c.a,g),c.isMounted=!0,d=p=v=null}},A=c.effect=new sa(x,()=>pa(w),c.scope),w=c.update=()=>A.run();w.id=c.uid,ut(c,!0),w()},re=(c,d,p)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,nc(c,d.props,v,p),ic(c,d.children,p),Rt(),Qa(),Ht()},J=(c,d,p,v,g,k,E,x,A=!1)=>{const w=c&&c.children,M=c?c.shapeFlag:0,P=d.children,{patchFlag:N,shapeFlag:z}=d;if(N>0){if(N&128){bn(w,P,p,v,g,k,E,x,A);return}else if(N&256){lt(w,P,p,v,g,k,E,x,A);return}}z&8?(M&16&&We(w,g,k),P!==w&&u(p,P)):M&16?z&16?bn(w,P,p,v,g,k,E,x,A):We(w,g,k,!0):(M&8&&u(p,""),z&16&&ne(P,p,v,g,k,E,x,A))},lt=(c,d,p,v,g,k,E,x,A)=>{c=c||Ot,d=d||Ot;const w=c.length,M=d.length,P=Math.min(w,M);let N;for(N=0;N<P;N++){const z=d[N]=A?et(d[N]):$e(d[N]);T(c[N],z,p,null,g,k,E,x,A)}w>M?We(c,g,k,!0,!1,P):ne(d,p,v,g,k,E,x,A,P)},bn=(c,d,p,v,g,k,E,x,A)=>{let w=0;const M=d.length;let P=c.length-1,N=M-1;for(;w<=P&&w<=N;){const z=c[w],W=d[w]=A?et(d[w]):$e(d[w]);if(Yt(z,W))T(z,W,p,null,g,k,E,x,A);else break;w++}for(;w<=P&&w<=N;){const z=c[P],W=d[N]=A?et(d[N]):$e(d[N]);if(Yt(z,W))T(z,W,p,null,g,k,E,x,A);else break;P--,N--}if(w>P){if(w<=N){const z=N+1,W=z<M?d[z].el:v;for(;w<=N;)T(null,d[w]=A?et(d[w]):$e(d[w]),p,W,g,k,E,x,A),w++}}else if(w>N)for(;w<=P;)Me(c[w],g,k,!0),w++;else{const z=w,W=w,X=new Map;for(w=W;w<=N;w++){const ye=d[w]=A?et(d[w]):$e(d[w]);ye.key!=null&&X.set(ye.key,w)}let V,ie=0;const Se=N-W+1;let Ct=!1,Ba=0;const Ut=new Array(Se);for(w=0;w<Se;w++)Ut[w]=0;for(w=z;w<=P;w++){const ye=c[w];if(ie>=Se){Me(ye,g,k,!0);continue}let Ne;if(ye.key!=null)Ne=X.get(ye.key);else for(V=W;V<=N;V++)if(Ut[V-W]===0&&Yt(ye,d[V])){Ne=V;break}Ne===void 0?Me(ye,g,k,!0):(Ut[Ne-W]=w+1,Ne>=Ba?Ba=Ne:Ct=!0,T(ye,d[Ne],p,null,g,k,E,x,A),ie++)}const Wa=Ct?fc(Ut):Ot;for(V=Wa.length-1,w=Se-1;w>=0;w--){const ye=W+w,Ne=d[ye],Ua=ye+1<M?d[ye+1].el:v;Ut[w]===0?T(null,Ne,p,Ua,g,k,E,x,A):Ct&&(V<0||w!==Wa[V]?ct(Ne,p,Ua,2):V--)}}},ct=(c,d,p,v,g=null)=>{const{el:k,type:E,transition:x,children:A,shapeFlag:w}=c;if(w&6){ct(c.component.subTree,d,p,v);return}if(w&128){c.suspense.move(d,p,v);return}if(w&64){E.move(c,d,p,St);return}if(E===oe){r(k,d,p);for(let P=0;P<A.length;P++)ct(A[P],d,p,v);r(c.anchor,d,p);return}if(E===Jt){$(c,d,p);return}if(v!==2&&w&1&&x)if(v===0)x.beforeEnter(k),r(k,d,p),be(()=>x.enter(k),g);else{const{leave:P,delayLeave:N,afterLeave:z}=x,W=()=>r(k,d,p),X=()=>{P(k,()=>{W(),z&&z()})};N?N(k,W,X):X()}else r(k,d,p)},Me=(c,d,p,v=!1,g=!1)=>{const{type:k,props:E,ref:x,children:A,dynamicChildren:w,shapeFlag:M,patchFlag:P,dirs:N}=c;if(x!=null&&Lr(x,null,p,c,!0),M&256){d.ctx.deactivate(c);return}const z=M&1&&N,W=!$n(c);let X;if(W&&(X=E&&E.onVnodeBeforeUnmount)&&Fe(X,d,c),M&6)_s(c.component,p,v);else{if(M&128){c.suspense.unmount(p,v);return}z&&ft(c,null,d,"beforeUnmount"),M&64?c.type.remove(c,d,p,g,St,v):w&&(k!==oe||P>0&&P&64)?We(w,d,p,!1,!0):(k===oe&&P&384||!g&&M&16)&&We(A,d,p),v&&Ra(c)}(W&&(X=E&&E.onVnodeUnmounted)||z)&&be(()=>{X&&Fe(X,d,c),z&&ft(c,null,d,"unmounted")},p)},Ra=c=>{const{type:d,el:p,anchor:v,transition:g}=c;if(d===oe){ws(p,v);return}if(d===Jt){B(c);return}const k=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:x}=g,A=()=>E(p,k);x?x(c.el,k,A):A()}else k()},ws=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},_s=(c,d,p)=>{const{bum:v,scope:g,update:k,subTree:E,um:x}=c;v&&br(v),g.stop(),k&&(k.active=!1,Me(E,c,d,p)),x&&be(x,d),be(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(c,d,p,v=!1,g=!1,k=0)=>{for(let E=k;E<c.length;E++)Me(c[E],d,p,v,g)},yn=c=>c.shapeFlag&6?yn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ha=(c,d,p)=>{c==null?d._vnode&&Me(d._vnode,null,null,!0):T(d._vnode||null,c,d,null,null,null,p),Qa(),_o(),d._vnode=c},St={p:T,um:Me,m:ct,r:Ra,mt:hr,mc:ne,pc:J,pbc:Be,n:yn,o:e};let pr,gr;return t&&([pr,gr]=t(St)),{render:Ha,hydrate:pr,createApp:sc(Ha,pr)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function No(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=et(a[i]),s.el=o.el),n||No(o,s))}}function fc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const uc=e=>e.__isTeleport,oe=Symbol(void 0),xa=Symbol(void 0),kt=Symbol(void 0),Jt=Symbol(void 0),Xt=[];let Ie=null;function Y(e=!1){Xt.push(Ie=e?null:[])}function dc(){Xt.pop(),Ie=Xt[Xt.length-1]||null}let an=1;function ci(e){an+=e}function Fo(e){return e.dynamicChildren=an>0?Ie||Ot:null,dc(),an>0&&Ie&&Ie.push(e),e}function G(e,t,n,r,a,i){return Fo(b(e,t,n,r,a,i,!0))}function on(e,t,n,r,a){return Fo(ee(e,t,n,r,a,!0))}function $r(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",Lo=({key:e})=>e!=null?e:null,zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||me(e)||R(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function b(e,t=null,n=null,r=0,a=null,i=e===oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lo(t),ref:t&&zn(t),scopeId:ir,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ka(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),an>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const ee=mc;function mc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Vl)&&(e=kt),$r(e)){const s=Lt(e,t,!0);return n&&ka(s,n),an>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(Cc(e)&&(e=e.__vccOpts),t){t=hc(t);let{class:s,style:l}=t;s&&!fe(s)&&(t.class=ta(s)),te(l)&&(mo(l)&&!D(l)&&(l=ge({},l)),t.style=ea(l))}const o=fe(e)?1:Pl(e)?128:uc(e)?64:te(e)?4:R(e)?2:0;return b(e,t,n,r,a,o,i,!0)}function hc(e){return e?mo(e)||lr in e?ge({},e):e:null}function Lt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Lo(s),ref:t&&t.ref?n&&a?D(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor}}function pc(e=" ",t=0){return ee(xa,null,e,t)}function gc(e,t){const n=ee(Jt,null,e);return n.staticCount=t,n}function Ye(e="",t=!1){return t?(Y(),on(kt,null,e)):ee(kt,null,e)}function $e(e){return e==null||typeof e=="boolean"?ee(kt):D(e)?ee(oe,null,e.slice()):typeof e=="object"?et(e):ee(xa,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function ka(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ka(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(lr in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[pc(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ta([t.class,r.class]));else if(a==="style")t.style=ea([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Fe(e,t,n,r=null){je(e,t,7,[n,r])}const bc=Mo();let yc=0;function wc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||bc,i={uid:yc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,a),emitsOptions:ko(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wl.bind(null,i),e.ce&&e.ce(i),i}let ce=null;const _c=()=>ce||Ee,$t=e=>{ce=e,e.scope.on()},xt=()=>{ce&&ce.scope.off(),ce=null};function $o(e){return e.vnode.shapeFlag&4}let sn=!1;function xc(e,t=!1){sn=t;const{props:n,children:r}=e.vnode,a=$o(e);tc(e,n,a,t),ac(e,r);const i=a?kc(e,t):void 0;return sn=!1,i}function kc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ho(new Proxy(e.ctx,Jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ec(e):null;$t(e),Rt();const i=nt(r,e,0,[e.props,a]);if(Ht(),xt(),Zi(i)){if(i.then(xt,xt),t)return i.then(o=>{fi(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=i}else fi(e,i,t)}else zo(e,t)}function fi(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=vo(t)),zo(e,n)}let ui;function zo(e,t,n){const r=e.type;if(!e.render){if(!t&&ui&&!r.render){const a=r.template||wa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ge(ge({isCustomElement:i,delimiters:s},o),l);r.render=ui(a,f)}}e.render=r.render||Te}$t(e),Rt(),Xl(e),Ht(),xt()}function Ac(e){return new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}})}function Ec(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ac(e))},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vo(ho(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Un)return Un[n](e)}}))}function Sc(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Cc(e){return R(e)&&"__vccOpts"in e}const we=(e,t)=>ml(e,t,sn);function Do(e,t,n){const r=arguments.length;return r===2?te(t)&&!D(t)?$r(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$r(n)&&(n=[n]),ee(e,t,n))}const Pc="3.2.41",Ic="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,di=ht&&ht.createElement("template"),Oc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ht.createElementNS(Ic,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{di.innerHTML=r?`<svg>${e}</svg>`:e;const s=di.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Tc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jc(e,t,n){const r=e.style,a=fe(n);if(n&&!a){for(const i in n)zr(r,i,n[i]);if(t&&!fe(t))for(const i in t)n[i]==null&&zr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const mi=/\s*!important$/;function zr(e,t,n){if(D(n))n.forEach(r=>zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Mc(e,t);mi.test(n)?e.setProperty(Dt(r),n.replace(mi,""),"important"):e[r]=n}}const hi=["Webkit","Moz","ms"],_r={};function Mc(e,t){const n=_r[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return _r[t]=r;r=tr(r);for(let a=0;a<hi.length;a++){const i=hi[a]+r;if(i in e)return _r[t]=i}return t}const pi="http://www.w3.org/1999/xlink";function Nc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n);else{const i=ks(t);n==null||i&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Fc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ji(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Lc(e,t,n,r){e.addEventListener(t,n,r)}function $c(e,t,n,r){e.removeEventListener(t,n,r)}function zc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Dc(t);if(r){const f=i[t]=Bc(r,a);Lc(e,s,f,l)}else o&&($c(e,s,o,l),i[t]=void 0)}}const gi=/(?:Once|Passive|Capture)$/;function Dc(e){let t;if(gi.test(e)){t={};let r;for(;r=e.match(gi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),t]}let xr=0;const Rc=Promise.resolve(),Hc=()=>xr||(Rc.then(()=>xr=0),xr=Date.now());function Bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Wc(r,n.value),t,5,[r])};return n.value=e,n.attached=Hc(),n}function Wc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const vi=/^on[a-z]/,Uc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Tc(e,r,a):t==="style"?jc(e,n,r):Zn(t)?na(t)||zc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yc(e,t,r,a))?Fc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Nc(e,t,r,a))};function Yc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&vi.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vi.test(t)&&fe(n)?!1:t in e}function Aa(e){const t=_c();if(!t)return;const n=()=>Dr(t.subTree,e(t.proxy));jl(n),va(()=>{const r=new MutationObserver(n);r.observe(t.subTree.el.parentNode,{childList:!0}),ba(()=>r.disconnect())})}function Dr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Dr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)bi(e.el,t);else if(e.type===oe)e.children.forEach(n=>Dr(n,t));else if(e.type===Jt){let{el:n,anchor:r}=e;for(;n&&(bi(n,t),n!==r);)n=n.nextSibling}}function bi(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const Kn={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Kt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Kt(e,!0),r.enter(e)):r.leave(e,()=>{Kt(e,!1)}):Kt(e,t))},beforeUnmount(e,{value:t}){Kt(e,t)}};function Kt(e,t){e.style.display=t?e._vod:"none"}const Kc=ge({patchProp:Uc},Oc);let yi;function Vc(){return yi||(yi=lc(Kc))}const qc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Jc(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Jc(e){return fe(e)?document.querySelector(e):e}function wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function Xc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gc(e,t,n){return t&&_i(e.prototype,t),n&&_i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ea(e,t){return Qc(e)||tf(e,t)||Ro(e,t)||rf()}function mn(e){return Zc(e)||ef(e)||Ro(e)||nf()}function Zc(e){if(Array.isArray(e))return Rr(e)}function Qc(e){if(Array.isArray(e))return e}function ef(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(e,t){if(!!e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xi=function(){},Sa={},Ho={},Bo=null,Wo={mark:xi,measure:xi};try{typeof window<"u"&&(Sa=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Bo=MutationObserver),typeof performance<"u"&&(Wo=performance)}catch{}var af=Sa.navigator||{},ki=af.userAgent,Ai=ki===void 0?"":ki,it=Sa,Q=Ho,Ei=Bo,En=Wo;it.document;var Ge=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Uo=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),Sn,Cn,Pn,In,On,Ve="___FONT_AWESOME___",Hr=16,Yo="fa",Ko="svg-inline--fa",At="data-fa-i2svg",Br="data-fa-pseudo-element",of="data-fa-pseudo-element-pending",Ca="data-prefix",Pa="data-icon",Si="fontawesome-i2svg",sf="async",lf=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),Z="classic",ae="sharp",Ia=[Z,ae];function hn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var ln=hn((Sn={},se(Sn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Sn,ae,{fa:"solid",fass:"solid","fa-solid":"solid"}),Sn)),cn=hn((Cn={},se(Cn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Cn,ae,{solid:"fass"}),Cn)),fn=hn((Pn={},se(Pn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Pn,ae,{fass:"fa-solid"}),Pn)),cf=hn((In={},se(In,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(In,ae,{"fa-solid":"fass"}),In)),ff=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,qo="fa-layers-text",uf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,df=hn((On={},se(On,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(On,ae,{900:"fass"}),On)),Jo=[1,2,3,4,5,6,7,8,9,10],mf=Jo.concat([11,12,13,14,15,16,17,18,19,20]),hf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[Z]).map(un.add.bind(un));Object.keys(cn[ae]).map(un.add.bind(un));var pf=[].concat(Ia,mn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(Jo.map(function(e){return"".concat(e,"x")})).concat(mf.map(function(e){return"w-".concat(e)})),Gt=it.FontAwesomeConfig||{};function gf(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var bf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bf.forEach(function(e){var t=Ea(e,2),n=t[0],r=t[1],a=vf(gf(n));a!=null&&(Gt[r]=a)})}var Xo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yo,replacementClass:Ko,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var zt=S(S({},Xo),Gt);zt.autoReplaceSvg||(zt.observeMutations=!1);var I={};Object.keys(Xo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){zt[e]=n,Zt.forEach(function(r){return r(I)})},get:function(){return zt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){zt.cssPrefix=t,Zt.forEach(function(n){return n(I)})},get:function(){return zt.cssPrefix}});it.FontAwesomeConfig=I;var Zt=[];function yf(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var Qe=Hr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wf(e){if(!(!e||!Ge)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}}var _f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=_f[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Oa(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Go(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Go(e[n]),'" ')},"").trim()}function fr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ta(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function kf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Af(e){var t=e.transform,n=e.width,r=n===void 0?Hr:n,a=e.height,i=a===void 0?Hr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ef=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zo(){var e=Yo,t=Ko,n=I.cssPrefix,r=I.replacementClass,a=Ef;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ci=!1;function kr(){I.autoAddCss&&!Ci&&(wf(Zo()),Ci=!0)}var Sf={mixout:function(){return{dom:{css:Zo,insertCss:kr}}},hooks:function(){return{beforeDOMElementCreation:function(){kr()},beforeI2svg:function(){kr()}}}},qe=it||{};qe[Ve]||(qe[Ve]={});qe[Ve].styles||(qe[Ve].styles={});qe[Ve].hooks||(qe[Ve].hooks={});qe[Ve].shims||(qe[Ve].shims=[]);var Oe=qe[Ve],Qo=[],Cf=function e(){Q.removeEventListener("DOMContentLoaded",e),qn=1,Qo.map(function(t){return t()})},qn=!1;Ge&&(qn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),qn||Q.addEventListener("DOMContentLoaded",Cf));function Pf(e){!Ge||(qn?setTimeout(e,0):Qo.push(e))}function pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Go(e):"<".concat(t," ").concat(xf(r),">").concat(i.map(pn).join(""),"</").concat(t,">")}function Pi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var If=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ar=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?If(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Of(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Wr(e){var t=Of(e);return t.length===1?t[0].toString(16):null}function Tf(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ii(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ur(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ii(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,Ii(t)):Oe.styles[e]=S(S({},Oe.styles[e]||{}),i),e==="fas"&&Ur("fa",t)}var Tn,jn,Mn,Pt=Oe.styles,jf=Oe.shims,Mf=(Tn={},se(Tn,Z,Object.values(fn[Z])),se(Tn,ae,Object.values(fn[ae])),Tn),ja=null,es={},ts={},ns={},rs={},as={},Nf=(jn={},se(jn,Z,Object.keys(ln[Z])),se(jn,ae,Object.keys(ln[ae])),jn);function Ff(e){return~pf.indexOf(e)}function Lf(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ff(a)?a:null}var is=function(){var t=function(i){return Ar(Pt,function(o,s,l){return o[l]=Ar(s,i,{}),o},{})};es=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ts=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),as=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Pt||I.autoFetchSvg,r=Ar(jf,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ns=r.names,rs=r.unicodes,ja=ur(I.styleDefault,{family:I.familyDefault})};yf(function(e){ja=ur(e.styleDefault,{family:I.familyDefault})});is();function Ma(e,t){return(es[e]||{})[t]}function $f(e,t){return(ts[e]||{})[t]}function wt(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function zf(e){var t=rs[e],n=Ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return ja}var Na=function(){return{prefix:null,iconName:null,rest:[]}};function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,a=ln[r][e],i=cn[r][e]||cn[r][a],o=e in Oe.styles?e:null;return i||o||null}var Oi=(Mn={},se(Mn,Z,Object.keys(fn[Z])),se(Mn,ae,Object.keys(fn[ae])),Mn);function dr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,Z,"".concat(I.cssPrefix,"-").concat(Z)),se(t,ae,"".concat(I.cssPrefix,"-").concat(ae)),t),o=null,s=Z;(e.includes(i[Z])||e.some(function(f){return Oi[Z].includes(f)}))&&(s=Z),(e.includes(i[ae])||e.some(function(f){return Oi[ae].includes(f)}))&&(s=ae);var l=e.reduce(function(f,u){var m=Lf(I.cssPrefix,u);if(Pt[u]?(u=Mf[s].includes(u)?cf[s][u]:u,o=u,f.prefix=u):Nf[s].indexOf(u)>-1?(o=u,f.prefix=ur(u,{family:s})):m?f.iconName=m:u!==I.replacementClass&&u!==i[Z]&&u!==i[ae]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?os(f.iconName):{},y=wt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||y||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Pt.far&&Pt.fas&&!I.autoFetchSvg&&(f.prefix="fas")}return f},Na());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ae&&(Pt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=wt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ot()||"fas"),l}var Df=function(){function e(){Xc(this,e),this.definitions={}}return Gc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),Ur(s,o[s]);var l=fn[Z][s];l&&Ur(l,o[s]),is()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ti=[],It={},Nt={},Rf=Object.keys(Nt);function Hf(e,t){var n=t.mixoutsTo;return Ti=e,It={},Object.keys(Nt).forEach(function(r){Rf.indexOf(r)===-1&&delete Nt[r]}),Ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Nt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ot();if(!!t)return t=wt(n,t)||t,Pi(ss.definitions,n,t)||Pi(Oe.styles,n,t)}var ss=new Df,Bf=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Et("noAuto")},Wf={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(Et("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Pf(function(){Yf({autoReplaceSvgRoot:n}),Et("watch",t)})}},Uf={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ur(t[0]);return{prefix:r,iconName:wt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(ff))){var a=dr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ot(),iconName:wt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ot();return{prefix:i,iconName:wt(i,t)||t}}}},xe={noAuto:Bf,config:I,dom:Wf,parse:Uf,library:ss,findIconDefinition:Kr,toHtml:pn},Yf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Oe.styles).length>0||I.autoFetchSvg)&&Ge&&I.autoReplaceSvg&&xe.dom.i2svg({node:r})};function mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ge){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Kf(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ta(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=fr(S(S({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Vf(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function Fa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,F=r.found?r:n,T=F.width,H=F.height,_=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ke){return m.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(m.classes).join(" "),$={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(H)})},B=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/H*16*.0625,"em")}:{};y&&($.attributes[At]=""),l&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(u||dn())},children:[l]}),delete $.attributes.title);var j=S(S({},$),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:S(S({},B),m.styles)}),L=r.found&&n.found?Je("generateAbstractMask",j)||{children:[],attributes:{}}:Je("generateAbstractIcon",j)||{children:[],attributes:{}},O=L.children,ne=L.attributes;return j.children=O,j.attributes=ne,s?Vf(j):Kf(j)}function ji(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[At]="");var u=S({},o.styles);Ta(a)&&(u.transform=Af({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=fr(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function qf(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=fr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Er=Oe.styles;function Vr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jf={found:!1,width:512,height:512};function Xf(e,t){!Vo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=ot()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Er[t]&&Er[t][e]){var o=Er[t][e];return r(Vr(o))}Xf(e,t),r(S(S({},Jf),{},{icon:I.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Mi=function(){},Jr=I.measurePerformance&&En&&En.mark&&En.measure?En:{mark:Mi,measure:Mi},qt='FA "6.2.0"',Gf=function(t){return Jr.mark("".concat(qt," ").concat(t," begins")),function(){return ls(t)}},ls=function(t){Jr.mark("".concat(qt," ").concat(t," ends")),Jr.measure("".concat(qt," ").concat(t),"".concat(qt," ").concat(t," begins"),"".concat(qt," ").concat(t," ends"))},La={begin:Gf,end:ls},Dn=function(){};function Ni(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function Zf(e){var t=e.getAttribute?e.getAttribute(Ca):null,n=e.getAttribute?e.getAttribute(Pa):null;return t&&n}function Qf(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function eu(){if(I.autoReplaceSvg===!0)return Rn.replace;var e=Rn[I.autoReplaceSvg];return e||Rn.replace}function tu(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function nu(e){return Q.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?tu:nu:n;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function ru(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(At)===null&&I.keepOriginalSource){var r=Q.createComment(ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Oa(n).indexOf(I.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return pn(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function Fi(e){e()}function fs(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Fi;I.mutateApproach===sf&&(r=it.requestAnimationFrame||Fi),r(function(){var a=eu(),i=La.begin("mutate");e.map(a),i(),n()})}}var $a=!1;function us(){$a=!0}function Xr(){$a=!1}var Jn=null;function Li(e){if(!!Ei&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?Q:s;Jn=new Ei(function(f){if(!$a){var u=ot();Bt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ni(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ni(m.target)&&~hf.indexOf(m.attributeName))if(m.attributeName==="class"&&Zf(m.target)){var h=dr(Oa(m.target)),y=h.prefix,F=h.iconName;m.target.setAttribute(Ca,y||u),F&&m.target.setAttribute(Pa,F)}else Qf(m.target)&&a(m.target)})}}),Ge&&Jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function au(){!Jn||Jn.disconnect()}function iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=dr(Oa(e));return a.prefix||(a.prefix=ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$f(a.prefix,e.innerText)||Ma(a.prefix,Wr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function su(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=su(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?iu(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var cu=Oe.styles;function ds(e){var t=I.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(qo)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var st=new Set;Ia.map(function(e){st.add("fa-".concat(e))});Object.keys(ln[Z]).map(st.add.bind(st));Object.keys(ln[ae]).map(st.add.bind(st));st=mn(st);function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Si,"-").concat(m))},a=function(m){return n.remove("".concat(Si,"-").concat(m))},i=I.autoFetchSvg?st:Ia.map(function(u){return"fa-".concat(u)}).concat(Object.keys(cu));i.includes("fa")||i.push("fa");var o=[".".concat(qo,":not([").concat(At,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=La.begin("onTree"),f=s.reduce(function(u,m){try{var h=ds(m);h&&u.push(h)}catch(y){Vo||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){fs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ds(e).then(function(n){n&&fs([n],t)})}function uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,S(S({},n),{},{mask:a}))}}var du=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,y=n.titleId,F=y===void 0?null:y,T=n.classes,H=T===void 0?[]:T,_=n.attributes,C=_===void 0?{}:_,$=n.styles,B=$===void 0?{}:$;if(!!t){var j=t.prefix,L=t.iconName,O=t.icon;return mr(S({type:"icon"},t),function(){return Et("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||dn()):(C["aria-hidden"]="true",C.focusable="false")),Fa({icons:{main:Vr(O),mask:l?Vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:L,transform:S(S({},De),a),symbol:o,title:h,maskId:u,titleId:F,extra:{attributes:C,styles:B,classes:H}})})}},mu={mixout:function(){return{icon:uu(du)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zi,n.nodeCallback=fu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,o=i===void 0?function(){}:i;return zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,F){Promise.all([qr(a,s),u.iconName?qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var H=Ea(T,2),_=H[0],C=H[1];y([n,Fa({icons:{main:_,mask:C},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=fr(s);l.length>0&&(a.style=l);var f;return Ta(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:o}]})}}}},pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return mr({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),qf({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},gu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return mr({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),ji({content:n,transform:S(S({},De),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(I.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ji({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vu=new RegExp('"',"ug"),Di=[1105920,1112319];function bu(e){var t=e.replace(vu,""),n=Tf(t,0),r=n>=Di[0]&&n<=Di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Wr(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(of).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function(O){return O.getAttribute(Br)===t})[0],s=it.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uf),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ae:Z,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[h][l[2].toLowerCase()]:df[h][f],F=bu(m),T=F.value,H=F.isSecondary,_=l[0].startsWith("FontAwesome"),C=Ma(y,T),$=C;if(_){var B=zf(T);B.iconName&&B.prefix&&(C=B.iconName,y=B.prefix)}if(C&&!H&&(!o||o.getAttribute(Ca)!==y||o.getAttribute(Pa)!==$)){e.setAttribute(n,$),o&&e.removeChild(o);var j=lu(),L=j.extra;L.attributes[Br]=t,qr(C,y).then(function(O){var ne=Fa(S(S({},j),{},{icons:{main:O,mask:Na()},prefix:y,iconName:$,extra:L,watchable:!0})),ke=Q.createElement("svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=ne.map(function(Be){return pn(Be)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yu(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function wu(e){return e.parentNode!==document.head&&!~lf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hi(e){if(!!Ge)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(wu).map(yu),a=La.begin("searchPseudoElements");us(),Promise.all(r).then(function(){a(),Xr(),t()}).catch(function(){a(),Xr(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;I.searchPseudoElements&&Hi(a)}}},Bi=!1,xu={mixout:function(){return{dom:{unwatch:function(){us(),Bi=!0}}}},hooks:function(){return{bootstrap:function(){Li(Yr("mutationObserverCallbacks",{}))},noAuto:function(){au()},watch:function(n){var r=n.observeMutationsRoot;Bi?Xr():Li(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ku={mixout:function(){return{parse:{transform:function(n){return Wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:S({},y.outer),children:[{tag:"g",attributes:S({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),y.path)}]}]}}}},Sr={x:0,y:0,width:"100%",height:"100%"};function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Au(e){return e.tag==="g"?e.children:[e]}var Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(o){return o.trim()})):Na();return i.prefix||(i.prefix=ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,y=kf({transform:l,containerWidth:m,iconWidth:f}),F={tag:"rect",attributes:S(S({},Sr),{},{fill:"white"})},T=u.children?{children:u.children.map(Ui)}:{},H={tag:"g",attributes:S({},y.inner),children:[Ui(S({tag:u.tag,attributes:S(S({},u.attributes),y.path)},T))]},_={tag:"g",attributes:S({},y.outer),children:[H]},C="mask-".concat(s||dn()),$="clip-".concat(s||dn()),B={tag:"mask",attributes:S(S({},Sr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,_]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:Au(h)},B]};return r.push(j,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(C,")")},Sr)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;it.matchMedia&&(n=it.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Pu=[Sf,mu,hu,pu,gu,_u,xu,ku,Eu,Su,Cu];Hf(Pu,{mixoutsTo:xe});xe.noAuto;var ms=xe.config,hs=xe.library;xe.dom;var Xn=xe.parse;xe.findIconDefinition;xe.toHtml;var Iu=xe.icon;xe.layer;var Ou=xe.text;xe.counter;function Yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yi(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gn(e){return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ju(e,t){if(e==null)return{};var n=Tu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Gr(e){return Mu(e)||Nu(e)||Fu(e)||Lu()}function Mu(e){if(Array.isArray(e))return Zr(e)}function Nu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fu(e,t){if(!!e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ps={exports:{}};(function(e){(function(t){var n=function(_,C,$){if(!f(C)||m(C)||h(C)||y(C)||l(C))return C;var B,j=0,L=0;if(u(C))for(B=[],L=C.length;j<L;j++)B.push(n(_,C[j],$));else{B={};for(var O in C)Object.prototype.hasOwnProperty.call(C,O)&&(B[_(O,$)]=n(_,C[O],$))}return B},r=function(_,C){C=C||{};var $=C.separator||"_",B=C.split||/(?=[A-Z])/;return _.split(B).join($)},a=function(_){return F(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(C,$){return $?$.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var C=a(_);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(_,C){return r(_,C).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},f=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},y=function(_){return s.call(_)=="[object Boolean]"},F=function(_){return _=_-0,_===_},T=function(_,C){var $=C&&"process"in C?C.process:C;return typeof $!="function"?_:function(B,j){return $(B,_,j)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,C){return n(T(a,C),_)},decamelizeKeys:function(_,C){return n(T(o,C),_,C)},pascalizeKeys:function(_,C){return n(T(i,C),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})($u)})(ps);var zu=ps.exports,Du=["class","style"];function Ru(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=zu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Hu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return za(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Hu(u);break;case"style":l.style=Ru(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ju(n,Du);return Do(e.tag,Pe(Pe(Pe({},t),{},{class:a.class,style:Pe(Pe({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Bu(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}function Wu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ve(t,"fa-".concat(e.size),e.size!==null),ve(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ve(t,"fa-pull-".concat(e.pull),e.pull!==null),ve(t,"fa-swap-opacity",e.swapOpacity),ve(t,"fa-bounce",e.bounce),ve(t,"fa-shake",e.shake),ve(t,"fa-beat",e.beat),ve(t,"fa-fade",e.fade),ve(t,"fa-beat-fade",e.beatFade),ve(t,"fa-flash",e.flash),ve(t,"fa-spin-pulse",e.spinPulse),ve(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ki(e){if(e&&Gn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xn.icon)return Xn.icon(e);if(e===null)return null;if(Gn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pt=ga({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=we(function(){return Ki(t.icon)}),i=we(function(){return Qt("classes",Wu(t))}),o=we(function(){return Qt("transform",typeof t.transform=="string"?Xn.transform(t.transform):t.transform)}),s=we(function(){return Qt("mask",Ki(t.mask))}),l=we(function(){return Iu(a.value,Pe(Pe(Pe(Pe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ln(l,function(u){if(!u)return Bu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=we(function(){return l.value?za(l.value.abstract[0],{},r):null});return function(){return f.value}}});ga({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ms.familyPrefix,i=we(function(){return["".concat(a,"-layers")].concat(Gr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Do("div",{class:i.value},r.default?r.default():[])}}});ga({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ms.familyPrefix,i=we(function(){return Qt("classes",[].concat(Gr(t.counter?["".concat(a,"-layers-counter")]:[]),Gr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=we(function(){return Qt("transform",typeof t.transform=="string"?Xn.transform(t.transform):t.transform)}),s=we(function(){var f=Ou(t.value.toString(),Pe(Pe({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=we(function(){return za(s.value,{},r)});return function(){return l.value}}});var Uu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Yu={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ku={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Vu={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};const qu={class:"nav-container"},Ju={class:"logo"},Xu={href:"#home"},Gu={class:"logo-img"},Zu={class:"hamb"},Qu=b("button",{class:"side-menu"},null,-1),ed={class:"links"},td=b("a",{href:"#about"},"About",-1),nd=b("a",{href:"#skills"},"Skills",-1),rd=b("a",{href:"#projects"},"Projects",-1),ad=b("a",{href:"#contact"},"Contact",-1),id={class:"theme-switcher"},od={class:"dropdown-links links"},sd={class:"theme-switcher"},ld={__name:"TheNav",setup(e){Aa(h=>({"56595d56":n.value,b2a63ce6:r.value})),hs.add(Uu,Vu),window.addEventListener("resize",m),window.addEventListener("hashchange",function(){const h=window.location.hash;document.querySelectorAll(".links a").forEach(F=>{F.getAttribute("href")===h?F.classList.add("active"):F.classList.remove("active")})});const t=ue("light"),n=ue("rgba(237, 230, 227, 0.95)"),r=ue(`/logo-JS-${t.value}.jpg`),a=ue(`/logo-JS-${t.value}.webp`);Tl(()=>{r.value=`url(/logo-JS-${t.value}.jpg)`,a.value=`url(/logo-JS-${t.value}.webp)`});function i(){t.value==="dark"?t.value="light":t.value="dark",t.value==="dark"?(document.body.classList.remove("light"),document.body.classList.add("dark"),document.querySelectorAll(".theme-switcher-icon").forEach(h=>{h.classList.remove("lightMode"),h.classList.add("darkMode")}),n.value="rgba(46, 80, 119, 0.95)"):(document.body.classList.remove("dark"),document.body.classList.add("light"),document.querySelectorAll(".theme-switcher-icon").forEach(h=>{h.classList.add("lightMode"),h.classList.remove("darkMode")}),n.value="rgba(237, 230, 227, 0.95)")}function o(){l.value=!l.value,document.body.style.overflowY=l.value?"hidden":"auto"}const s=ue(!1),l=ue(!1),f=ue(window.innerWidth),u=we(()=>l&&s);function m(){if(f.value=window.innerWidth,f.value<=768){s.value=!0;return}s.value=!1,l.value=!1}return m(),(h,y)=>{const F=ya("webp");return Y(),G("nav",null,[b("div",qu,[b("div",Ju,[b("a",Xu,[rt(b("div",Gu,null,512),[[F,[a.value,r.value],"bgs"]])])]),b("div",Zu,[le(u)?(Y(),G("span",{key:0,class:"hamburger",onClick:y[0]||(y[0]=T=>o())},[ee(le(pt),{icon:"fa-solid fa-bars","fixed-width":""})])):(Y(),G("span",{key:1,class:"xmark",onClick:y[1]||(y[1]=T=>o())},[ee(le(pt),{icon:"fa-solid fa-xmark","fixed-width":""})]))]),Qu,rt(b("div",ed,[td,nd,rd,ad,b("div",id,[b("div",{class:"theme-switcher-icon lightMode",onClick:y[2]||(y[2]=T=>i())})])],512),[[Kn,!s.value]]),rt(b("div",od,[b("a",{href:"#about",onClick:y[3]||(y[3]=T=>o())},"About"),b("a",{href:"#skills",onClick:y[4]||(y[4]=T=>o())},"Skills"),b("a",{href:"#projects",onClick:y[5]||(y[5]=T=>o())},"Projects"),b("a",{href:"#contact",onClick:y[6]||(y[6]=T=>o())},"Contact"),b("div",sd,[b("div",{class:"theme-switcher-icon lightMode",onClick:y[7]||(y[7]=T=>i())})])],512),[[Kn,l.value]])])])}}};const cd=b("div",{class:"bar-container"},[b("div",{class:"skill-bar"})],-1),Vi={__name:"TheSkillBar",props:{skill:{},percentage:{},color:{}},setup(e){const t=e;Aa(a=>({ec40095a:e.percentage,"10e8a5a0":le(n),"0ca0442c":le(r)}));const n=t.color.dark,r=t.color.light;return(a,i)=>(Y(),G(oe,null,[b("p",null,gt(e.skill),1),cd],64))}},fd={skillName:"HTML",color:{dark:"#E96228",light:"#E96228"},percentage:"90%"},ud={skillName:"CSS",color:{dark:"#4CA3E6",light:"#1B6DB2"},percentage:"60%"},dd={skillName:"JavaScript",color:{dark:"#CFB430",light:"#3C9800"},percentage:"70%"},md={skillName:"PHP",color:{dark:"#9499E0",light:"#797DB8"},percentage:"60%"},hd={skillName:"Laravel",color:{dark:"#FF6F61",light:"#F72C1F"},percentage:"50%"},pd={skillName:"Vue",color:{dark:"#3FB27F",light:"#349469"},percentage:"50%"},gd={skillName:"Digital Marketing",color:{dark:"#F7B500",light:"#D6272C"},percentage:"60%"},vd={skillName:"Content Writing",color:{dark:"#04B3BD",light:"#039299"},percentage:"70%"},bd={skillName:"WordPress",color:{dark:"#74BC4B",light:"#21759B"},percentage:"80%"},yd={skillName:"Figma",color:{dark:"#9D8EFF",light:"#9c56f6"},percentage:"60%"},wd={skillName:"Making up skill bar values!",color:{dark:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)",light:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"},percentage:"100%"},Nn={HTML:fd,CSS:ud,JavaScript:dd,PHP:md,Laravel:hd,Vue:pd,DigitalMarketing:gd,ContentWriting:vd,WordPress:bd,Figma:yd,SkillBars:wd};const vs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},_d={class:"skills-container"},xd={class:"skills-column"},kd={class:"skills-column"},Ad={__name:"TheSkills",setup(e){const t=Object.keys(Nn),n=t.length,r=[];for(let a=0;a<n;a++)r.push({skill:t[a],name:Nn[t[a]].skillName,percentage:Nn[t[a]].percentage,color:Nn[t[a]].color});return(a,i)=>(Y(),G("div",_d,[b("div",xd,[(Y(!0),G(oe,null,bt(r.slice(0,le(n)/2+le(n)%2),o=>(Y(),on(Vi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))]),b("div",kd,[(Y(!0),G(oe,null,bt(r.slice(le(n)/2+le(n)%2,le(n)),o=>(Y(),on(Vi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))])]))}},Ed=vs(Ad,[["__scopeId","data-v-bc03b09e"]]);const Sd=["id","data-cat"],Cd=["src","alt"],Pd=b("div",{class:"tile-overlay toggle"},null,-1),Id={class:"overlay-text toggle"},Od={class:"tile-title toggle"},Td={class:"modal-header"},jd=b("span",{class:"material-symbols-outlined closeBtn toggle"},"close",-1),Md={class:"header-image"},Nd=["src","alt"],Fd={class:"header-text"},Ld={class:"modal-body"},$d={class:"description-container"},zd={class:"links-container"},Dd=["href"],Rd=["href"],Hd=["href"],Bd={class:"tech-container"},Wd=b("h4",null,"Technologies used",-1),Ud={class:"tech-list"},qi={__name:"TheProjectTile",props:{id:{},name:{},desc:{},img:{},webp:{},categories:{},tech:{},website:{},github:{},projectFolder:{}},setup(e){Aa(a=>({"7370c318":n.value}));const t=ue(!1),n=ue();function r(a){console.log(a.target.classList.contains("toggle")),a.target.classList.contains("toggle")&&(t.value=!t.value,t.value?document.body.style.overflow="hidden":document.body.style.overflow="visible",document.body.classList.contains("dark")?n.value="#2e5077":n.value="#ede6e3")}return(a,i)=>{const o=ya("webp");return Y(),G(oe,null,[b("div",{class:"tile-container",id:e.id,onClick:i[0]||(i[0]=s=>r(s)),"data-cat":e.categories},[rt(b("img",{src:e.img,alt:e.name},null,8,Cd),[[o,e.webp,"src"]]),Pd,b("div",Id,[b("h3",Od,gt(e.name),1)])],8,Sd),t.value?(Y(),G("div",{key:0,class:"modal-container toggle",onClick:i[2]||(i[2]=s=>r(s))},[b("div",{class:"modal",onClick:i[1]||(i[1]=()=>{})},[b("div",Td,[jd,b("div",Md,[rt(b("img",{class:"banner",src:e.img,alt:e.name},null,8,Nd),[[o,e.webp,"src"]])]),b("div",Fd,[b("h3",null,gt(e.name),1)])]),b("div",Ld,[b("div",$d,[b("p",null,gt(e.desc),1)]),b("div",zd,[e.website?(Y(),G("a",{key:0,class:"project-link",href:e.website,target:"_blank",rel:"noopener noreferrer"},"Website",8,Dd)):Ye("",!0),e.github?(Y(),G("a",{key:1,class:"project-link",href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github",8,Rd)):Ye("",!0),e.projectFolder?(Y(),G("a",{key:2,class:"project-link",href:e.projectFolder,target:"_blank",rel:"noopener noreferrer"},"Folder (FR)",8,Hd)):Ye("",!0)]),b("div",Bd,[Wd,b("ol",Ud,[(Y(!0),G(oe,null,bt(e.tech,s=>(Y(),G("li",{class:"tech-item",key:s},gt(s),1))),128))])])])])])):Ye("",!0)],64)}}},Yd={Name:"Sons de ta Ville API",Description:"My first Node project. I was the lead developer in the group project and produced about 85% of the code. The API is going to be used as the backend for an Angular mobile app.",Categories:["Backend","Project Management"],Technologies:["NodeJS","ExpressJS","Mongoose","MongoDB","Git","JavaScript"],Image:"/projectImages/SonsDeTaVille.jpg",WebP:"/projectImages/SonsDeTaVille.webp",Website:"https://sons-de-ta-ville.onrender.com",Github:"https://github.com/julessandoz/SonsDeTaVille/"},Kd={Name:"Kairos",Description:"In 2022, my class was tasked with creating a new web-app to view for students to view their timetables. We were grouped into teams of 7 to 8 and had to create the app from scratch over the course of a month. I was in charge of project management and had to coordinate UX, UI and development teams. In addition to the management side of the project, I helped both front-end and back-end developers with their tasks. The project was a great opportunity to learn about project management and to work in a team. The website, backend github and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Backend","Frontend","Project Management","Agile"],Technologies:["Laravel","Vue3","PostgreSQL","Git","JavaScript"],Image:"/projectImages/Kairos.jpg",WebP:"/projectImages/Kairos.webp",Website:"https://pnj-pingouin.heig-vd.ch/app/index.html",Github:"https://github.com/julessandoz/ProjArt_BackEnd/",ProjectFolder:"https://www.dropbox.com/s/3lr9xsklsre7s0a/pnj_Rapport_VersionFinale.pdf?dl=0"},Vd={Name:"Les Ailes De Katia",Description:"My first project working on a pre-existing website. I was tasked with improving the site's technical SEO, to optimize its loading speed and to make it responsive.",Categories:["SEO"],Technologies:["Wordpress"],Image:"/projectImages/AilesDeKatia.jpg",WebP:"/projectImages/AilesDeKatia.webp",Website:"https://lesailesdekatia.com/"},qd={Name:"Projet Borderan",Description:'In 2021, I was hired to redesign a website for a local trustee company. I was tasked with applying a new graphic identity and reworking the architecture information as well as all the content to optimize UX and SEO. It was my first "real-world" project and, while it unfortunately went unfinished due to a lack of time and budget, it was a great opportunity to learn how to interract with a client.',Categories:["SEO","Content Writing","Web Design"],Technologies:["Wordpress","Divi"],Image:"/projectImages/ProjetBorderan.jpg",WebP:"/projectImages/ProjetBorderan.webp"},Jd={Name:"Dataviz - Hollywood Movies",Description:"My first time using a Javascript library. In the context of a data visualization class during my second year at HEIG-VD, A friend and I created this visualization of the top grossing Hollywood movies of the past 50 years. We had to use the D3.js library and used data from a Kaggle dataset as well as images from themovieDB.org. The project was a great opportunity to learn about data visualization and svg manipulation.",Categories:["Frontend","Data Visualization"],Technologies:["D3.js","JavaScript","Git"],Image:"/projectImages/Hollywood.jpg",WebP:"/projectImages/Hollywood.webp",Website:"https://hollywood.jules-sandoz.com/",Github:"https://github.com/julessandoz/VisualDonProject_Hollywood_Movies"},Xd={Name:"Experience Flathead",Description:"A digital marketing project I realized during my first year of bachelor's degree. I created the website, the logo, the graphic design and the content. In addition to the website, I also created a whole digital ecosystem, including social media pages, a newsletter, SEA and SEO campaigns, and social media ads. The project was realized over two semesters and was a great opportunity to learn about digital marketing and widely used tools such as Google Analytics and the Search Console. Both the website and the project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","Mailchimp","Google Analytics","Google Search Console"],Image:"/projectImages/ExperienceFlathead.jpg",WebP:"/projectImages/ExperienceFlathead.webp",Website:"https://ef.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/jgivfp49jsolqx5/Rapport-complet.pdf?dl=0"},Gd={Name:"Everything Photography",Description:"As part of my E-Commerce course, I created a website for a fictitious photography online store. The website was created using Wordpress, the Divi builder, and WooCommerce. I also created the logo, graphic identity, and social media pages. During the process I approached all the details of an Ecommerce business; from Amazon's affiliation program for photography gear to Print On Demand through Gelato for my posters. The website and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","WooCommerce","Mailchimp","Google Analytics","Google Search Console"],Image:"/projectImages/EverythingPhotography.jpg",WebP:"/projectImages/EverythingPhotography.webp",Website:"https://ep.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/vwglbomg9ucq55t/HEIG-VD%20-%20E-comm%20-%20Sandoz%20Jules%20-%20Everything%20Photography.pdf?dl=0"},Zd={Name:"Cave Sandoz",Description:"My first ever coding project. After learning the basics of PHP and MySQL, I created this website for my family's wine cellar. It is a simple app that allows users to manage the cellar's wine bottles and keep track of what's available.",Categories:["Backend"],Technologies:["PHP","MySQL"],Image:"/projectImages/CaveSandoz.jpg",WebP:"/projectImages/CaveSandoz.webp",Website:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/cave-sandoz/",ProjectFolder:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/Sandoz-Projet-ProgServ.pdf"},Ae={SonsDeTaVille:Yd,Kairos:Kd,AilesDeKatia:Vd,ProjetBorderan:qd,HollywoodMovies:Jd,ExperienceFlathead:Xd,EverythingPhotography:Gd,CaveSandoz:Zd};const Qd={class:"filter-container"},em=b("h3",null,"Filter",-1),tm={class:"filter"},nm={class:"filter-options"},rm=["id","data-cat"],am=["for"],im={class:"filter"},om={class:"filter-options"},sm=["id","data-tech"],lm=["for"],cm={class:"projects-container"},fm={class:"more-container projects-container"},um={key:0,class:"cta-container"},dm={__name:"TheProjects",setup(e){const t=ue(Object.keys(Ae)),n=[],r=ue(n.length),a=ue(!1),i=ue(r.value>6),o=new Set,s=new Set,l=[],f=ue(0);for(let j=0;j<t.value.length;j++)l.push({project:t.value[j],name:Ae[t.value[j]].Name,desc:Ae[t.value[j]].Description,image:Ae[t.value[j]].Image,webp:Ae[t.value[j]].WebP,website:Ae[t.value[j]].Website,github:Ae[t.value[j]].Github,projectFolder:Ae[t.value[j]].ProjectFolder,tech:Ae[t.value[j]].Technologies,cat:Ae[t.value[j]].Categories}),Ae[t.value[j]].Categories.forEach(L=>{o.add(L)}),Ae[t.value[j]].Technologies.forEach(L=>{s.add(L)});const u=ue(!1),m=ue(!1),h=new Set,y=new Set,F=ue(!1);function T(){u.value=!u.value,document.getElementById("category-title").classList.toggle("active"),u.value&&document.getElementById("technology-title").classList.contains("active")&&H()}function H(){m.value=!m.value,document.getElementById("technology-title").classList.toggle("active"),m.value&&document.getElementById("category-title").classList.contains("active")&&T()}function _(j){const L=j.target;L.parentElement.classList.toggle("active"),L.checked?h.add(L.dataset.cat):h.delete(L.dataset.cat),$()}function C(j){const L=j.target;L.parentElement.classList.toggle("active"),L.checked?y.add(L.dataset.tech):y.delete(L.dataset.tech),$()}function $(){n.length=0;for(let j=0;j<l.length;j++){let L=h.size===0,O=y.size===0;if(!L){for(let ne=0;ne<l[j].cat.length;ne++)if(h.has(l[j].cat[ne])){L=!0;break}}if(!O){for(let ne=0;ne<l[j].tech.length;ne++)if(y.has(l[j].tech[ne])){O=!0;break}}L&&O&&n.push(l[j])}r.value=n.length,i.value=r.value>6,a.value=!1,f.value+=1,h.size>0||y.size>0?F.value=!0:F.value=!1}function B(){h.clear(),y.clear(),document.querySelectorAll("input[type=checkbox]").forEach(L=>{L.checked=!1,L.parentElement.classList.remove("active")}),$()}return $(),(j,L)=>(Y(),G(oe,null,[b("div",Qd,[em,F.value?(Y(),G("div",{key:0,class:"reset",onClick:L[0]||(L[0]=O=>B())},"Reset All")):Ye("",!0),b("div",tm,[b("div",{class:"filter-title",id:"category-title",for:"category",onClick:L[1]||(L[1]=O=>T())}," Categories "),b("div",nm,[(Y(!0),G(oe,null,bt(le(o),O=>rt((Y(),G("div",{class:"filter-option",key:O},[b("input",{type:"checkbox",id:O,"data-cat":O,onInput:L[2]||(L[2]=ne=>_(ne))},null,40,rm),b("label",{for:O},gt(O),9,am)])),[[Kn,u.value]])),128))])]),b("div",im,[b("div",{class:"filter-title",id:"technology-title",for:"technologyFilter",onClick:L[3]||(L[3]=O=>H())}," Technologies "),b("div",om,[(Y(!0),G(oe,null,bt(le(s),O=>rt((Y(),G("div",{class:"filter-option",key:O},[b("input",{type:"checkbox",id:O,"data-tech":O,onInput:L[4]||(L[4]=ne=>C(ne))},null,40,sm),b("label",{for:O},gt(O),9,lm)])),[[Kn,m.value]])),128))])])]),b("div",cm,[(Y(!0),G(oe,null,bt(n.slice(0,6),O=>(Y(),on(qi,{key:f.value,id:O.project,name:O.name,desc:O.desc,img:O.image,webp:O.webp,website:O.website,github:O.github,projectFolder:O.projectFolder,tech:O.tech,categories:O.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),128)),b("div",fm,[a.value?(Y(!0),G(oe,{key:0},bt(n.slice(6),O=>(Y(),on(qi,{id:O.project,name:O.name,desc:O.desc,img:O.image,webp:O.webp,website:O.website,github:O.github,projectFolder:O.projectFolder,tech:O.tech,categories:O.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)):Ye("",!0)])]),i.value?(Y(),G("div",um,[a.value?Ye("",!0):(Y(),G("button",{key:0,class:"cta",onClick:L[5]||(L[5]=O=>a.value=!0)},"Show more")),a.value?(Y(),G("button",{key:1,class:"cta",onClick:L[6]||(L[6]=O=>a.value=!1)},"Show less")):Ye("",!0)])):Ye("",!0)],64))}};var mm={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"]},hm={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},pm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};const He=e=>(_l("data-v-cf257d2e"),e=e(),xl(),e),gm={class:"app"},vm=gc('<section id="home" data-v-cf257d2e><div class="text-container" data-v-cf257d2e><h1 data-v-cf257d2e> Hello there, <br data-v-cf257d2e> I&#39;m Jules Sandoz </h1><p class="subtitle" data-v-cf257d2e>Digital Swiss Army Knife</p></div><div class="cta-container" data-v-cf257d2e><p data-v-cf257d2e>Scroll or</p><a class="cta" href="#projects" data-v-cf257d2e>Discover my projects</a></div></section>',1),bm={id:"about"},ym=He(()=>b("div",{class:"text-container"},[b("h2",null,"About me"),b("p",null," Currently a last year student in Communication and Media Engineering in my home country of Switzerland, I enjoy working on websites, development, marketing, and UI. "),b("p",null," I\u2019m a very curious person and love learning while solving problems. Great fan of the outdoors and amateur photographer, I like spending my free time in the mountains, hiking in the summer and snowboarding in the winter. "),b("p",null,"Always interested in working on new projects with motivated people."),b("a",{href:"#contact"},"Let's work together!")],-1)),wm={class:"img-container"},_m=["src"],xm={id:"skills"},km=He(()=>b("div",{class:"title-container"},[b("h2",null,"Skills")],-1)),Am={class:"skills-bars"},Em={id:"projects"},Sm=He(()=>b("div",{class:"title-container"},[b("h2",null,"Projects")],-1)),Cm={id:"contact"},Pm=He(()=>b("div",{class:"title-container"},[b("h2",null,"Want to make something great together?")],-1)),Im={class:"text-container"},Om=He(()=>b("p",null," I'm open to freelance or job offers, don't hesitate to reach out through my socials or by email! ",-1)),Tm={class:"socials"},jm={class:"link"},Mm={href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},Nm=He(()=>b("a",{class:"contact-link",href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},"/jules-sandoz",-1)),Fm={class:"link"},Lm={class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},$m=He(()=>b("a",{class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"@julessandoz",-1)),zm={class:"link"},Dm={class:"contact-link",href:"https://github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},Rm=He(()=>b("a",{class:"contact-link",href:"https://github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"/julessandoz",-1)),Hm={class:"link"},Bm={class:"contact-link",href:"mailto:contact@jules-sandoz.com"},Wm=He(()=>b("a",{class:"contact-link",href:"mailto:contact@jules-sandoz.com"},"contact@jules-sandoz.com",-1)),Um={class:"link"},Ym={class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},Km=He(()=>b("a",{class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},"Download my resume",-1)),Vm={__name:"App",setup(e){hs.add(hm,pm,mm,Yu,Ku);const t=document.querySelector("title");return va(()=>{document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?t.innerText="See you later! | Jules Sandoz":t.innerText="Welcome back! | Jules Sandoz"});let n={root:null,rootMargin:"0px",threshold:.5};function r(u,m){u.forEach(h=>{if(h.isIntersecting){switch(h.target.id){case"home":t.innerHTML="Home | Jules Sandoz",history.pushState(null,null,"#home");break;case"about":t.innerHTML="About | Jules Sandoz",history.pushState(null,null,"#about");break;case"skills":t.innerHTML="Skills | Jules Sandoz",history.pushState(null,null,"#skills");break;case"projects":t.innerHTML="Projects | Jules Sandoz",history.pushState(null,null,"#projects");break;case"contact":t.innerHTML="Contact | Jules Sandoz",history.pushState(null,null,"#contact");break}h.target.classList.contains("skill-bar")&&(h.target.classList.add("full"),m.unobserve(h.target)),(h.target.classList.contains("link")||h.target.classList.contains("text-container")||h.target.classList.contains("cta-container")||h.target.classList.contains("img-container")||h.target.classList.contains("tile-container"))&&(h.target.classList.add("visible"),m.unobserve(h.target))}})}const a=new IntersectionObserver(r,n),i=document.querySelectorAll("section"),o=document.querySelectorAll(".skill-bar"),s=document.querySelectorAll("#home .text-container, #home .cta-container"),l=document.querySelector("#about .img-container");document.querySelectorAll("#projects .projects-container .tile-container").forEach(u=>{a.observe(u)}),a.observe(l),s.forEach(u=>{a.observe(u)}),o.forEach(u=>{a.observe(u)}),i.forEach(u=>{a.observe(u)})}),(n,r)=>{const a=ya("webp");return Y(),G("main",null,[b("div",gm,[ee(ld),vm,b("section",bm,[ym,b("div",wm,[rt(b("img",{class:"portrait-photo",src:"/jules-sandoz.jpg",alt:"Jules Sandoz"},null,8,_m),[[a,"/jules-sandoz.webp","src"]])])]),b("section",xm,[km,b("div",Am,[ee(Ed)])]),b("section",Em,[Sm,ee(dm)]),b("section",Cm,[Pm,b("div",Im,[Om,b("div",Tm,[b("div",jm,[b("a",Mm,[ee(le(pt),{icon:"fa-brands fa-linkedin","fixed-width":""})]),Nm]),b("div",Fm,[b("a",Lm,[ee(le(pt),{icon:"fa-brands fa-square-instagram","fixed-width":""})]),$m]),b("div",zm,[b("a",Dm,[ee(le(pt),{icon:"fa-brands fa-square-github","fixed-width":""})]),Rm]),b("div",Hm,[b("a",Bm,[ee(le(pt),{icon:"fa-solid fa-envelope","fixed-width":""})]),Wm]),b("div",Um,[b("a",Ym,[ee(le(pt),{icon:"fa-solid fa-file","fixed-width":""})]),Km])])])])])])}}},qm=vs(Vm,[["__scopeId","data-v-cf257d2e"]]);var Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bs={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Jm,function(){var n=function(){try{return document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")===0}catch{return!1}}();return{install:function(r){var a=function(o,s){s.arg==="src"&&o.nodeName==="IMG"&&n&&(o.src=s.value),s.arg==="bg"&&n&&(o.style.backgroundImage="url("+s.value+")"),s.arg==="bgs"&&(o.style.backgroundImage="url("+(n?s.value[0]:s.value[1])+")")},i=+r.version.split(".")[0]>=3?{mounted:a}:{inserted:a};r.directive("webp",i)}}})})(bs);const Xm=bs.exports,ys=qc(qm);ys.use(Xm);ys.mount("#app");
