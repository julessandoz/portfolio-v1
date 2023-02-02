(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ia(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?Cs(r):ia(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(le(e))return e;if(ne(e))return e}}const As=/;(?![^(]*\))/g,Ss=/:([^]+)/,Es=/\/\*.*?\*\//gs;function Cs(e){const t={};return e.replace(Es,"").split(As).forEach(n=>{if(n){const r=n.split(Ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function oa(e){let t="";if(le(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=oa(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Is=aa(Ps);function Gi(e){return!!e||e===""}const yt=e=>le(e)?e:e==null?"":R(e)||ne(e)&&(e.toString===eo||!H(e.toString))?JSON.stringify(e,Xi,2):String(e),Xi=(e,t)=>t&&t.__v_isRef?Xi(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Zi(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!R(t)&&!to(t)?String(t):t,Z={},Nt=[],je=()=>{},Os=()=>!1,Ts=/^on[^a-z]/,nr=e=>Ts.test(e),sa=e=>e.startsWith("onUpdate:"),be=Object.assign,la=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,K=(e,t)=>Ms.call(e,t),R=Array.isArray,Ft=e=>rr(e)==="[object Map]",Zi=e=>rr(e)==="[object Set]",H=e=>typeof e=="function",le=e=>typeof e=="string",ca=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Qi=e=>ne(e)&&H(e.then)&&H(e.catch),eo=Object.prototype.toString,rr=e=>eo.call(e),js=e=>rr(e).slice(8,-1),to=e=>rr(e)==="[object Object]",fa=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ns=/-(\w)/g,Be=ar(e=>e.replace(Ns,(t,n)=>n?n.toUpperCase():"")),Fs=/\B([A-Z])/g,Wt=ar(e=>e.replace(Fs,"-$1").toLowerCase()),ir=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=ar(e=>e?`on${ir(e)}`:""),on=(e,t)=>!Object.is(e,t),xr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Kn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},no=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qa;const Ls=()=>qa||(qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $e;class zs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function $s(e,t=$e){t&&t.active&&t.effects.push(e)}const ua=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ro=e=>(e.w&ot)>0,ao=e=>(e.n&ot)>0,Ds=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ot},Rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ro(a)&&!ao(a)?a.delete(e):t[n++]=a,a.w&=~ot,a.n&=~ot}t.length=n}},Tr=new WeakMap;let Xt=0,ot=1;const Mr=30;let Ie;const At=Symbol(""),jr=Symbol("");class da{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$s(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,rt=!0,ot=1<<++Xt,Xt<=Mr?Ds(this):Ja(this),this.fn()}finally{Xt<=Mr&&Rs(this),ot=1<<--Xt,Ie=this.parent,rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const io=[];function Ut(){io.push(rt),rt=!1}function Yt(){const e=io.pop();rt=e===void 0?!0:e}function Ae(e,t,n){if(rt&&Ie){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ua()),oo(a)}}function oo(e,t){let n=!1;Xt<=Mr?ao(e)||(e.n|=ot,n=!ro(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function qe(e,t,n,r,a,i){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=no(r);o.forEach((f,u)=>{(u==="length"||u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?fa(n)&&s.push(o.get("length")):(s.push(o.get(At)),Ft(e)&&s.push(o.get(jr)));break;case"delete":R(e)||(s.push(o.get(At)),Ft(e)&&s.push(o.get(jr)));break;case"set":Ft(e)&&s.push(o.get(At));break}if(s.length===1)s[0]&&Nr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Nr(ua(l))}}function Nr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ga(r);for(const r of n)r.computed||Ga(r)}function Ga(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Hs=aa("__proto__,__v_isRef,__isVue"),so=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ca)),Bs=ma(),Ws=ma(!1,!0),Us=ma(!0),Xa=Ys();function Ys(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=q(this)[t].apply(this,n);return Yt(),r}}),e}function ma(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?sl:mo:t?uo:fo).get(r))return r;const o=R(r);if(!e&&o&&K(Xa,a))return Reflect.get(Xa,a,i);const s=Reflect.get(r,a,i);return(ca(a)?so.has(a):Hs(a))||(e||Ae(r,"get",a),t)?s:he(s)?o&&fa(a)?s:s.value:ne(s)?e?ho(s):ga(s):s}}const Ks=lo(),Vs=lo(!0);function lo(e=!1){return function(n,r,a,i){let o=n[r];if(Dt(o)&&he(o)&&!he(a))return!1;if(!e&&(!Vn(a)&&!Dt(a)&&(o=q(o),a=q(a)),!R(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=R(n)&&fa(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===q(i)&&(s?on(a,o)&&qe(n,"set",r,a):qe(n,"add",r,a)),l}}function qs(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&qe(e,"delete",t,void 0),r}function Js(e,t){const n=Reflect.has(e,t);return(!ca(t)||!so.has(t))&&Ae(e,"has",t),n}function Gs(e){return Ae(e,"iterate",R(e)?"length":At),Reflect.ownKeys(e)}const co={get:Bs,set:Ks,deleteProperty:qs,has:Js,ownKeys:Gs},Xs={get:Us,set(e,t){return!0},deleteProperty(e,t){return!0}},Zs=be({},co,{get:Ws,set:Vs}),ha=e=>e,or=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=or(a),s=r?ha:n?ba:sn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function An(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Sn(e,t=!1){return e=e.__v_raw,!t&&Ae(q(e),"iterate",At),Reflect.get(e,"size",e)}function Za(e){e=q(e);const t=q(this);return or(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function Qa(e,t){t=q(t);const n=q(this),{has:r,get:a}=or(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?on(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function ei(e){const t=q(this),{has:n,get:r}=or(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&qe(t,"delete",e,void 0),i}function ti(){const e=q(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function En(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?ha:e?ba:sn;return!e&&Ae(s,"iterate",At),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Cn(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Ft(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ha:t?ba:sn;return!t&&Ae(i,"iterate",l?jr:At),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function Qs(){const e={get(i){return kn(this,i)},get size(){return Sn(this)},has:An,add:Za,set:Qa,delete:ei,clear:ti,forEach:En(!1,!1)},t={get(i){return kn(this,i,!1,!0)},get size(){return Sn(this)},has:An,add:Za,set:Qa,delete:ei,clear:ti,forEach:En(!1,!0)},n={get(i){return kn(this,i,!0)},get size(){return Sn(this,!0)},has(i){return An.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:En(!0,!1)},r={get(i){return kn(this,i,!0,!0)},get size(){return Sn(this,!0)},has(i){return An.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Cn(i,!1,!1),n[i]=Cn(i,!0,!1),t[i]=Cn(i,!1,!0),r[i]=Cn(i,!0,!0)}),[e,n,t,r]}const[el,tl,nl,rl]=Qs();function pa(e,t){const n=t?e?rl:nl:e?tl:el;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const al={get:pa(!1,!1)},il={get:pa(!1,!0)},ol={get:pa(!0,!1)},fo=new WeakMap,uo=new WeakMap,mo=new WeakMap,sl=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(js(e))}function ga(e){return Dt(e)?e:va(e,!1,co,al,fo)}function fl(e){return va(e,!1,Zs,il,uo)}function ho(e){return va(e,!0,Xs,ol,mo)}function va(e,t,n,r,a){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=cl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Lt(e){return Dt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function po(e){return Lt(e)||Dt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function go(e){return Kn(e,"__v_skip",!0),e}const sn=e=>ne(e)?ga(e):e,ba=e=>ne(e)?ho(e):e;function vo(e){rt&&Ie&&(e=q(e),oo(e.dep||(e.dep=ua())))}function bo(e,t){e=q(e),e.dep&&Nr(e.dep)}function he(e){return!!(e&&e.__v_isRef===!0)}function fe(e){return ul(e,!1)}function ul(e,t){return he(e)?e:new dl(e,t)}class dl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:sn(t)}get value(){return vo(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||Dt(t);t=n?t:q(t),on(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:sn(t),bo(this))}}function ue(e){return he(e)?e.value:e}const ml={get:(e,t,n)=>ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function yo(e){return Lt(e)?e:new Proxy(e,ml)}var wo;class hl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[wo]=!1,this._dirty=!0,this.effect=new da(t,()=>{this._dirty||(this._dirty=!0,bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return vo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}wo="__v_isReadonly";function pl(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=je):(r=e.get,a=e.set),new hl(r,a,i||!a,n)}function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){sr(i,t,n)}return a}function Ne(e,t,n,r){if(H(e)){const i=at(e,t,n,r);return i&&Qi(i)&&i.catch(o=>{sr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ne(e[i],t,n,r));return a}function sr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}gl(e,n,a,r)}function gl(e,t,n,r=!0){console.error(e)}let ln=!1,Fr=!1;const me=[];let Re=0;const zt=[];let Ke=null,gt=0;const _o=Promise.resolve();let ya=null;function vl(e){const t=ya||_o;return e?t.then(this?e.bind(this):e):t}function bl(e){let t=Re+1,n=me.length;for(;t<n;){const r=t+n>>>1;cn(me[r])<e?t=r+1:n=r}return t}function wa(e){(!me.length||!me.includes(e,ln&&e.allowRecurse?Re+1:Re))&&(e.id==null?me.push(e):me.splice(bl(e.id),0,e),xo())}function xo(){!ln&&!Fr&&(Fr=!0,ya=_o.then(Ao))}function yl(e){const t=me.indexOf(e);t>Re&&me.splice(t,1)}function wl(e){R(e)?zt.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?gt+1:gt))&&zt.push(e),xo()}function ni(e,t=ln?Re+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function ko(e){if(zt.length){const t=[...new Set(zt)];if(zt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>cn(n)-cn(r)),gt=0;gt<Ke.length;gt++)Ke[gt]();Ke=null,gt=0}}const cn=e=>e.id==null?1/0:e.id,_l=(e,t)=>{const n=cn(e)-cn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ao(e){Fr=!1,ln=!0,me.sort(_l);const t=je;try{for(Re=0;Re<me.length;Re++){const n=me[Re];n&&n.active!==!1&&at(n,null,14)}}finally{Re=0,me.length=0,ko(),ln=!1,ya=null,(me.length||zt.length)&&Ao()}}function xl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||Z;p&&(a=n.map(y=>le(y)?y.trim():y)),m&&(a=n.map(no))}let s,l=r[s=_r(t)]||r[s=_r(Be(t))];!l&&i&&(l=r[s=_r(Wt(t))]),l&&Ne(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ne(f,e,6,a)}}function So(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const u=So(f,t,!0);u&&(s=!0,be(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ne(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):be(o,i),ne(e)&&r.set(e,o),o)}function lr(e,t){return!e||!nr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Wt(t))||K(e,t))}let ke=null,cr=null;function qn(e){const t=ke;return ke=e,cr=e&&e.type.__scopeId||null,t}function kl(e){cr=e}function Al(){cr=null}function Sl(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ui(-1);const i=qn(t);let o;try{o=e(...a)}finally{qn(i),r._d&&ui(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:y,ctx:N,inheritAttrs:O}=e;let U,k;const C=qn(e);try{if(n.shapeFlag&4){const D=a||r;U=De(u.call(D,D,m,i,y,p,N)),k=l}else{const D=t;U=De(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),k=t.props?l:El(l)}}catch(D){tn.length=0,sr(D,e,1),U=te(Et)}let E=U;if(k&&O!==!1){const D=Object.keys(k),{shapeFlag:Y}=E;D.length&&Y&7&&(o&&D.some(sa)&&(k=Cl(k,o)),E=Rt(E,k))}return n.dirs&&(E=Rt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),U=E,qn(C),U}const El=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},Cl=(e,t)=>{const n={};for(const r in e)(!sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Pl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!lr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,f):!0:!!o;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!lr(n,i))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function Tl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):wl(e)}function Ml(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Rn(e,t,n=!1){const r=de||ke;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}function jl(e,t){return fr(e,null,t)}function Nl(e,t){return fr(e,null,{flush:"post"})}const Pn={};function Hn(e,t,n){return fr(e,t,n)}function fr(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){const s=de;let l,f=!1,u=!1;if(he(e)?(l=()=>e.value,f=Vn(e)):Lt(e)?(l=()=>e,r=!0):R(e)?(u=!0,f=e.some(E=>Lt(E)||Vn(E)),l=()=>e.map(E=>{if(he(E))return E.value;if(Lt(E))return wt(E);if(H(E))return at(E,s,2)})):H(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ne(e,s,3,[p])}:l=je,t&&r){const E=l;l=()=>wt(E())}let m,p=E=>{m=k.onStop=()=>{at(E,s,4)}},y;if(dn)if(p=je,t?n&&Ne(t,s,3,[l(),u?[]:void 0,p]):l(),a==="sync"){const E=Tc();y=E.__watcherHandles||(E.__watcherHandles=[])}else return je;let N=u?new Array(e.length).fill(Pn):Pn;const O=()=>{if(!!k.active)if(t){const E=k.run();(r||f||(u?E.some((D,Y)=>on(D,N[Y])):on(E,N)))&&(m&&m(),Ne(t,s,3,[E,N===Pn?void 0:u&&N[0]===Pn?[]:N,p]),N=E)}else k.run()};O.allowRecurse=!!t;let U;a==="sync"?U=O:a==="post"?U=()=>we(O,s&&s.suspense):(O.pre=!0,s&&(O.id=s.uid),U=()=>wa(O));const k=new da(l,U);t?n?O():N=k.run():a==="post"?we(k.run.bind(k),s&&s.suspense):k.run();const C=()=>{k.stop(),s&&s.scope&&la(s.scope.effects,k)};return y&&y.push(C),C}function Fl(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?Eo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=de;Ht(this);const s=fr(a,i.bind(r),n);return o?Ht(o):St(),s}function Eo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))wt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(Zi(e)||Ft(e))e.forEach(n=>{wt(n,t)});else if(to(e))for(const n in e)wt(e[n],t);return e}function _a(e){return H(e)?{setup:e,name:e.name}:e}const Bn=e=>!!e.type.__asyncLoader,Co=e=>e.type.__isKeepAlive;function Ll(e,t){Po(e,"a",t)}function zl(e,t){Po(e,"da",t)}function Po(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Co(a.parent.vnode)&&$l(r,t,n,a),a=a.parent}}function $l(e,t,n,r){const a=ur(t,e,r,!0);ka(()=>{la(r[t],a)},n)}function ur(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),Ht(n);const s=Ne(t,n,e,o);return St(),Yt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=de)=>(!dn||e==="sp")&&ur(e,(...r)=>t(...r),n),Dl=Ze("bm"),xa=Ze("m"),Rl=Ze("bu"),Hl=Ze("u"),Bl=Ze("bum"),ka=Ze("um"),Wl=Ze("sp"),Ul=Ze("rtg"),Yl=Ze("rtc");function Kl(e,t=de){ur("ec",e,t)}function it(e,t){const n=ke;if(n===null)return e;const r=hr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=Z]=t[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&wt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function mt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),Ne(l,n,8,[e.el,s,e,t]),Yt())}}const Vl="components",ql="directives",Jl=Symbol();function Aa(e){return Gl(ql,e)}function Gl(e,t,n=!0,r=!1){const a=ke||de;if(a){const i=a.type;if(e===Vl){const s=Pc(i,!1);if(s&&(s===t||s===Be(t)||s===ir(Be(t))))return i}const o=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!o&&r?i:o}}function ai(e,t){return e&&(e[t]||e[Be(t)]||e[ir(Be(t))])}function _t(e,t,n,r){let a;const i=n&&n[r];if(R(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ne(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Lr=e=>e?Do(e)?hr(e)||e.proxy:Lr(e.parent):null,Qt=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>Sa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=vl.bind(e.proxy)),$watch:e=>Fl.bind(e)}),Ar=(e,t)=>e!==Z&&!e.__isScriptSetup&&K(e,t),Xl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(a!==Z&&K(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&K(f,t))return o[t]=3,i[t];if(n!==Z&&K(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const u=Qt[t];let m,p;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&K(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ar(a,t)?(a[t]=n,!0):r!==Z&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&K(e,o)||Ar(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(Qt,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let zr=!0;function Zl(e){const t=Sa(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&ii(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:y,updated:N,activated:O,deactivated:U,beforeDestroy:k,beforeUnmount:C,destroyed:E,unmounted:D,render:Y,renderTracked:ie,renderTriggered:re,errorCaptured:pe,serverPrefetch:ge,expose:Ee,inheritAttrs:ft,components:It,directives:Ue,filters:Vt}=t;if(f&&Ql(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const I in o){const B=o[I];H(B)&&(r[I]=B.bind(n))}if(a){const I=a.call(n,n);ne(I)&&(e.data=ga(I))}if(zr=!0,i)for(const I in i){const B=i[I],ut=H(B)?B.bind(n,n):H(B.get)?B.get.bind(n,n):je,_n=!H(B)&&H(B.set)?B.set.bind(n):je,dt=xe({get:ut,set:_n});Object.defineProperty(r,I,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Fe=>dt.value=Fe})}if(s)for(const I in s)Io(s[I],r,n,I);if(l){const I=H(l)?l.call(n):l;Reflect.ownKeys(I).forEach(B=>{Ml(B,I[B])})}u&&ii(u,e,"c");function j(I,B){R(B)?B.forEach(ut=>I(ut.bind(n))):B&&I(B.bind(n))}if(j(Dl,m),j(xa,p),j(Rl,y),j(Hl,N),j(Ll,O),j(zl,U),j(Kl,pe),j(Yl,ie),j(Ul,re),j(Bl,C),j(ka,D),j(Wl,ge),R(Ee))if(Ee.length){const I=e.exposed||(e.exposed={});Ee.forEach(B=>{Object.defineProperty(I,B,{get:()=>n[B],set:ut=>n[B]=ut})})}else e.exposed||(e.exposed={});Y&&e.render===je&&(e.render=Y),ft!=null&&(e.inheritAttrs=ft),It&&(e.components=It),Ue&&(e.directives=Ue)}function Ql(e,t,n=je,r=!1){R(e)&&(e=$r(e));for(const a in e){const i=e[a];let o;ne(i)?"default"in i?o=Rn(i.from||a,i.default,!0):o=Rn(i.from||a):o=Rn(i),he(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ii(e,t,n){Ne(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,r){const a=r.includes(".")?Eo(n,r):()=>n[r];if(le(e)){const i=t[e];H(i)&&Hn(a,i)}else if(H(e))Hn(a,e.bind(n));else if(ne(e))if(R(e))e.forEach(i=>Io(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Hn(a,i,e)}}function Sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),ne(t)&&i.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Jn(e,i,n,!0),a&&a.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ec[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ec={data:oi,props:pt,emits:pt,methods:pt,computed:pt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:pt,directives:pt,watch:nc,provide:oi,inject:tc};function oi(e,t){return t?e?function(){return be(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function tc(e,t){return pt($r(e),$r(t))}function $r(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function pt(e,t){return e?be(be(Object.create(null),e),t):t}function nc(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function rc(e,t,n,r=!1){const a={},i={};Kn(i,mr,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:fl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ac(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(lr(e.emitsOptions,p))continue;const y=t[p];if(l)if(K(i,p))y!==i[p]&&(i[p]=y,f=!0);else{const N=Be(p);a[N]=Dr(l,s,N,y,e,!1)}else y!==i[p]&&(i[p]=y,f=!0)}}}else{Oo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!K(t,m)&&((u=Wt(m))===m||!K(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Dr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!K(t,m)&&!0)&&(delete i[m],f=!0)}f&&qe(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dn(l))continue;const f=t[l];let u;a&&K(a,u=Be(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:lr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=q(n),f=s||Z;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Dr(a,l,m,f[m],e,!K(f,m))}}return o}function Dr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ht(a),r=f[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}function To(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const u=m=>{l=!0;const[p,y]=To(m,t,!0);be(o,p),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ne(e)&&r.set(e,Nt),Nt;if(R(i))for(let u=0;u<i.length;u++){const m=Be(i[u]);si(m)&&(o[m]=Z)}else if(i)for(const u in i){const m=Be(u);if(si(m)){const p=i[u],y=o[m]=R(p)||H(p)?{type:p}:Object.assign({},p);if(y){const N=fi(Boolean,y.type),O=fi(String,y.type);y[0]=N>-1,y[1]=O<0||N<O,(N>-1||K(y,"default"))&&s.push(m)}}}const f=[o,s];return ne(e)&&r.set(e,f),f}function si(e){return e[0]!=="$"}function li(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ci(e,t){return li(e)===li(t)}function fi(e,t){return R(t)?t.findIndex(n=>ci(n,e)):H(t)&&ci(t,e)?0:-1}const Mo=e=>e[0]==="_"||e==="$stable",Ea=e=>R(e)?e.map(De):[De(e)],ic=(e,t,n)=>{if(t._n)return t;const r=Sl((...a)=>Ea(t(...a)),n);return r._c=!1,r},jo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Mo(a))continue;const i=e[a];if(H(i))t[a]=ic(a,i,r);else if(i!=null){const o=Ea(i);t[a]=()=>o}}},No=(e,t)=>{const n=Ea(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Kn(t,"_",n)):jo(t,e.slots={})}else e.slots={},t&&No(e,t);Kn(e.slots,mr,1)},sc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(be(a,t),!n&&s===1&&delete a._):(i=!t.$stable,jo(t,a)),o=t}else t&&(No(e,t),o={default:1});if(i)for(const s in a)!Mo(s)&&!(s in o)&&delete a[s]};function Fo(){return{app:null,config:{isNativeTag:Os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lc=0;function cc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ne(a)&&(a=null);const i=Fo(),o=new Set;let s=!1;const l=i.app={_uid:lc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...u)):H(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=te(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,hr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Rr(e,t,n,r,a=!1){if(R(e)){e.forEach((p,y)=>Rr(p,t&&(R(t)?t[y]:t),n,r,a));return}if(Bn(r)&&!a)return;const i=r.shapeFlag&4?hr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,K(m,f)&&(m[f]=null)):he(f)&&(f.value=null)),H(l))at(l,s,12,[o,u]);else{const p=le(l),y=he(l);if(p||y){const N=()=>{if(e.f){const O=p?K(m,l)?m[l]:u[l]:l.value;a?R(O)&&la(O,i):R(O)?O.includes(i)||O.push(i):p?(u[l]=[i],K(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,K(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(N.id=-1,we(N,n)):N()}}}const we=Tl;function fc(e){return uc(e)}function uc(e,t){const n=Ls();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:y=je,insertStaticContent:N}=e,O=(c,d,h,v=null,g=null,x=null,S=!1,_=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!Jt(c,d)&&(v=xn(c),Fe(c,g,x,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:w,ref:F,shapeFlag:T}=d;switch(w){case dr:U(c,d,h,v);break;case Et:k(c,d,h,v);break;case en:c==null&&C(d,h,v,S);break;case se:It(c,d,h,v,g,x,S,_,A);break;default:T&1?Y(c,d,h,v,g,x,S,_,A):T&6?Ue(c,d,h,v,g,x,S,_,A):(T&64||T&128)&&w.process(c,d,h,v,g,x,S,_,A,Ot)}F!=null&&g&&Rr(F,c&&c.ref,x,d||c,!d)},U=(c,d,h,v)=>{if(c==null)r(d.el=s(d.children),h,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},k=(c,d,h,v)=>{c==null?r(d.el=l(d.children||""),h,v):d.el=c.el},C=(c,d,h,v)=>{[c.el,c.anchor]=N(c.children,d,h,v,c.el,c.anchor)},E=({el:c,anchor:d},h,v)=>{let g;for(;c&&c!==d;)g=p(c),r(c,h,v),c=g;r(d,h,v)},D=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},Y=(c,d,h,v,g,x,S,_,A)=>{S=S||d.type==="svg",c==null?ie(d,h,v,g,x,S,_,A):ge(c,d,g,x,S,_,A)},ie=(c,d,h,v,g,x,S,_)=>{let A,w;const{type:F,props:T,shapeFlag:L,transition:$,dirs:W}=c;if(A=c.el=o(c.type,x,T&&T.is,T),L&8?u(A,c.children):L&16&&pe(c.children,A,null,v,g,x&&F!=="foreignObject",S,_),W&&mt(c,null,v,"created"),T){for(const J in T)J!=="value"&&!Dn(J)&&i(A,J,null,T[J],x,c.children,v,g,Ye);"value"in T&&i(A,"value",null,T.value),(w=T.onVnodeBeforeMount)&&ze(w,v,c)}re(A,c,c.scopeId,S,v),W&&mt(c,null,v,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&$&&!$.persisted;G&&$.beforeEnter(A),r(A,d,h),((w=T&&T.onVnodeMounted)||G||W)&&we(()=>{w&&ze(w,v,c),G&&$.enter(A),W&&mt(c,null,v,"mounted")},g)},re=(c,d,h,v,g)=>{if(h&&y(c,h),v)for(let x=0;x<v.length;x++)y(c,v[x]);if(g){let x=g.subTree;if(d===x){const S=g.vnode;re(c,S,S.scopeId,S.slotScopeIds,g.parent)}}},pe=(c,d,h,v,g,x,S,_,A=0)=>{for(let w=A;w<c.length;w++){const F=c[w]=_?nt(c[w]):De(c[w]);O(null,F,d,h,v,g,x,S,_)}},ge=(c,d,h,v,g,x,S)=>{const _=d.el=c.el;let{patchFlag:A,dynamicChildren:w,dirs:F}=d;A|=c.patchFlag&16;const T=c.props||Z,L=d.props||Z;let $;h&&ht(h,!1),($=L.onVnodeBeforeUpdate)&&ze($,h,d,c),F&&mt(d,c,h,"beforeUpdate"),h&&ht(h,!0);const W=g&&d.type!=="foreignObject";if(w?Ee(c.dynamicChildren,w,_,h,v,W,x):S||B(c,d,_,null,h,v,W,x,!1),A>0){if(A&16)ft(_,d,T,L,h,v,g);else if(A&2&&T.class!==L.class&&i(_,"class",null,L.class,g),A&4&&i(_,"style",T.style,L.style,g),A&8){const G=d.dynamicProps;for(let J=0;J<G.length;J++){const oe=G[J],Pe=T[oe],Tt=L[oe];(Tt!==Pe||oe==="value")&&i(_,oe,Pe,Tt,g,c.children,h,v,Ye)}}A&1&&c.children!==d.children&&u(_,d.children)}else!S&&w==null&&ft(_,d,T,L,h,v,g);(($=L.onVnodeUpdated)||F)&&we(()=>{$&&ze($,h,d,c),F&&mt(d,c,h,"updated")},v)},Ee=(c,d,h,v,g,x,S)=>{for(let _=0;_<d.length;_++){const A=c[_],w=d[_],F=A.el&&(A.type===se||!Jt(A,w)||A.shapeFlag&70)?m(A.el):h;O(A,w,F,null,v,g,x,S,!0)}},ft=(c,d,h,v,g,x,S)=>{if(h!==v){if(h!==Z)for(const _ in h)!Dn(_)&&!(_ in v)&&i(c,_,h[_],null,S,d.children,g,x,Ye);for(const _ in v){if(Dn(_))continue;const A=v[_],w=h[_];A!==w&&_!=="value"&&i(c,_,w,A,S,d.children,g,x,Ye)}"value"in v&&i(c,"value",h.value,v.value)}},It=(c,d,h,v,g,x,S,_,A)=>{const w=d.el=c?c.el:s(""),F=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:L,slotScopeIds:$}=d;$&&(_=_?_.concat($):$),c==null?(r(w,h,v),r(F,h,v),pe(d.children,h,F,g,x,S,_,A)):T>0&&T&64&&L&&c.dynamicChildren?(Ee(c.dynamicChildren,L,h,g,x,S,_),(d.key!=null||g&&d===g.subTree)&&Lo(c,d,!0)):B(c,d,h,F,g,x,S,_,A)},Ue=(c,d,h,v,g,x,S,_,A)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?g.ctx.activate(d,h,v,S,A):Vt(d,h,v,g,x,S,A):z(c,d,A)},Vt=(c,d,h,v,g,x,S)=>{const _=c.component=xc(c,v,g);if(Co(c)&&(_.ctx.renderer=Ot),Ac(_),_.asyncDep){if(g&&g.registerDep(_,j),!c.el){const A=_.subTree=te(Et);k(null,A,d,h)}return}j(_,c,d,h,g,x,S)},z=(c,d,h)=>{const v=d.component=c.component;if(Pl(c,d,h))if(v.asyncDep&&!v.asyncResolved){I(v,d,h);return}else v.next=d,yl(v.update),v.update();else d.el=c.el,v.vnode=d},j=(c,d,h,v,g,x,S)=>{const _=()=>{if(c.isMounted){let{next:F,bu:T,u:L,parent:$,vnode:W}=c,G=F,J;ht(c,!1),F?(F.el=W.el,I(c,F,S)):F=W,T&&xr(T),(J=F.props&&F.props.onVnodeBeforeUpdate)&&ze(J,$,F,W),ht(c,!0);const oe=kr(c),Pe=c.subTree;c.subTree=oe,O(Pe,oe,m(Pe.el),xn(Pe),c,g,x),F.el=oe.el,G===null&&Il(c,oe.el),L&&we(L,g),(J=F.props&&F.props.onVnodeUpdated)&&we(()=>ze(J,$,F,W),g)}else{let F;const{el:T,props:L}=d,{bm:$,m:W,parent:G}=c,J=Bn(d);if(ht(c,!1),$&&xr($),!J&&(F=L&&L.onVnodeBeforeMount)&&ze(F,G,d),ht(c,!0),T&&wr){const oe=()=>{c.subTree=kr(c),wr(T,c.subTree,c,g,null)};J?d.type.__asyncLoader().then(()=>!c.isUnmounted&&oe()):oe()}else{const oe=c.subTree=kr(c);O(null,oe,h,v,c,g,x),d.el=oe.el}if(W&&we(W,g),!J&&(F=L&&L.onVnodeMounted)){const oe=d;we(()=>ze(F,G,oe),g)}(d.shapeFlag&256||G&&Bn(G.vnode)&&G.vnode.shapeFlag&256)&&c.a&&we(c.a,g),c.isMounted=!0,d=h=v=null}},A=c.effect=new da(_,()=>wa(w),c.scope),w=c.update=()=>A.run();w.id=c.uid,ht(c,!0),w()},I=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,ac(c,d.props,v,h),sc(c,d.children,h),Ut(),ni(),Yt()},B=(c,d,h,v,g,x,S,_,A=!1)=>{const w=c&&c.children,F=c?c.shapeFlag:0,T=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){_n(w,T,h,v,g,x,S,_,A);return}else if(L&256){ut(w,T,h,v,g,x,S,_,A);return}}$&8?(F&16&&Ye(w,g,x),T!==w&&u(h,T)):F&16?$&16?_n(w,T,h,v,g,x,S,_,A):Ye(w,g,x,!0):(F&8&&u(h,""),$&16&&pe(T,h,v,g,x,S,_,A))},ut=(c,d,h,v,g,x,S,_,A)=>{c=c||Nt,d=d||Nt;const w=c.length,F=d.length,T=Math.min(w,F);let L;for(L=0;L<T;L++){const $=d[L]=A?nt(d[L]):De(d[L]);O(c[L],$,h,null,g,x,S,_,A)}w>F?Ye(c,g,x,!0,!1,T):pe(d,h,v,g,x,S,_,A,T)},_n=(c,d,h,v,g,x,S,_,A)=>{let w=0;const F=d.length;let T=c.length-1,L=F-1;for(;w<=T&&w<=L;){const $=c[w],W=d[w]=A?nt(d[w]):De(d[w]);if(Jt($,W))O($,W,h,null,g,x,S,_,A);else break;w++}for(;w<=T&&w<=L;){const $=c[T],W=d[L]=A?nt(d[L]):De(d[L]);if(Jt($,W))O($,W,h,null,g,x,S,_,A);else break;T--,L--}if(w>T){if(w<=L){const $=L+1,W=$<F?d[$].el:v;for(;w<=L;)O(null,d[w]=A?nt(d[w]):De(d[w]),h,W,g,x,S,_,A),w++}}else if(w>L)for(;w<=T;)Fe(c[w],g,x,!0),w++;else{const $=w,W=w,G=new Map;for(w=W;w<=L;w++){const _e=d[w]=A?nt(d[w]):De(d[w]);_e.key!=null&&G.set(_e.key,w)}let J,oe=0;const Pe=L-W+1;let Tt=!1,Ya=0;const qt=new Array(Pe);for(w=0;w<Pe;w++)qt[w]=0;for(w=$;w<=T;w++){const _e=c[w];if(oe>=Pe){Fe(_e,g,x,!0);continue}let Le;if(_e.key!=null)Le=G.get(_e.key);else for(J=W;J<=L;J++)if(qt[J-W]===0&&Jt(_e,d[J])){Le=J;break}Le===void 0?Fe(_e,g,x,!0):(qt[Le-W]=w+1,Le>=Ya?Ya=Le:Tt=!0,O(_e,d[Le],h,null,g,x,S,_,A),oe++)}const Ka=Tt?dc(qt):Nt;for(J=Ka.length-1,w=Pe-1;w>=0;w--){const _e=W+w,Le=d[_e],Va=_e+1<F?d[_e+1].el:v;qt[w]===0?O(null,Le,h,Va,g,x,S,_,A):Tt&&(J<0||w!==Ka[J]?dt(Le,h,Va,2):J--)}}},dt=(c,d,h,v,g=null)=>{const{el:x,type:S,transition:_,children:A,shapeFlag:w}=c;if(w&6){dt(c.component.subTree,d,h,v);return}if(w&128){c.suspense.move(d,h,v);return}if(w&64){S.move(c,d,h,Ot);return}if(S===se){r(x,d,h);for(let T=0;T<A.length;T++)dt(A[T],d,h,v);r(c.anchor,d,h);return}if(S===en){E(c,d,h);return}if(v!==2&&w&1&&_)if(v===0)_.beforeEnter(x),r(x,d,h),we(()=>_.enter(x),g);else{const{leave:T,delayLeave:L,afterLeave:$}=_,W=()=>r(x,d,h),G=()=>{T(x,()=>{W(),$&&$()})};L?L(x,W,G):G()}else r(x,d,h)},Fe=(c,d,h,v=!1,g=!1)=>{const{type:x,props:S,ref:_,children:A,dynamicChildren:w,shapeFlag:F,patchFlag:T,dirs:L}=c;if(_!=null&&Rr(_,null,h,c,!0),F&256){d.ctx.deactivate(c);return}const $=F&1&&L,W=!Bn(c);let G;if(W&&(G=S&&S.onVnodeBeforeUnmount)&&ze(G,d,c),F&6)ks(c.component,h,v);else{if(F&128){c.suspense.unmount(h,v);return}$&&mt(c,null,d,"beforeUnmount"),F&64?c.type.remove(c,d,h,g,Ot,v):w&&(x!==se||T>0&&T&64)?Ye(w,d,h,!1,!0):(x===se&&T&384||!g&&F&16)&&Ye(A,d,h),v&&Wa(c)}(W&&(G=S&&S.onVnodeUnmounted)||$)&&we(()=>{G&&ze(G,d,c),$&&mt(c,null,d,"unmounted")},h)},Wa=c=>{const{type:d,el:h,anchor:v,transition:g}=c;if(d===se){xs(h,v);return}if(d===en){D(c);return}const x=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:_}=g,A=()=>S(h,x);_?_(c.el,x,A):A()}else x()},xs=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},ks=(c,d,h)=>{const{bum:v,scope:g,update:x,subTree:S,um:_}=c;v&&xr(v),g.stop(),x&&(x.active=!1,Fe(S,c,d,h)),_&&we(_,d),we(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(c,d,h,v=!1,g=!1,x=0)=>{for(let S=x;S<c.length;S++)Fe(c[S],d,h,v,g)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ua=(c,d,h)=>{c==null?d._vnode&&Fe(d._vnode,null,null,!0):O(d._vnode||null,c,d,null,null,null,h),ni(),ko(),d._vnode=c},Ot={p:O,um:Fe,m:dt,r:Wa,mt:Vt,mc:pe,pc:B,pbc:Ee,n:xn,o:e};let yr,wr;return t&&([yr,wr]=t(Ot)),{render:Ua,hydrate:yr,createApp:cc(Ua,yr)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||Lo(o,s)),s.type===dr&&(s.el=o.el)}}function dc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const mc=e=>e.__isTeleport,se=Symbol(void 0),dr=Symbol(void 0),Et=Symbol(void 0),en=Symbol(void 0),tn=[];let Te=null;function V(e=!1){tn.push(Te=e?null:[])}function hc(){tn.pop(),Te=tn[tn.length-1]||null}let fn=1;function ui(e){fn+=e}function zo(e){return e.dynamicChildren=fn>0?Te||Nt:null,hc(),fn>0&&Te&&Te.push(e),e}function X(e,t,n,r,a,i){return zo(b(e,t,n,r,a,i,!0))}function un(e,t,n,r,a){return zo(te(e,t,n,r,a,!0))}function Hr(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",$o=({key:e})=>e!=null?e:null,Wn=({ref:e,ref_key:t,ref_for:n})=>e!=null?le(e)||he(e)||H(e)?{i:ke,r:e,k:t,f:!!n}:e:null;function b(e,t=null,n=null,r=0,a=null,i=e===se?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$o(t),ref:t&&Wn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ke};return s?(Ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),fn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const te=pc;function pc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=Et),Hr(e)){const s=Rt(e,t,!0);return n&&Ca(s,n),fn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(Ic(e)&&(e=e.__vccOpts),t){t=gc(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=oa(s)),ne(l)&&(po(l)&&!R(l)&&(l=be({},l)),t.style=ia(l))}const o=le(e)?1:Ol(e)?128:mc(e)?64:ne(e)?4:H(e)?2:0;return b(e,t,n,r,a,o,i,!0)}function gc(e){return e?po(e)||mr in e?be({},e):e:null}function Rt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&$o(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Wn(t)):[a,Wn(t)]:Wn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function vc(e=" ",t=0){return te(dr,null,e,t)}function bc(e,t){const n=te(en,null,e);return n.staticCount=t,n}function Ve(e="",t=!1){return t?(V(),un(Et,null,e)):te(Et,null,e)}function De(e){return e==null||typeof e=="boolean"?te(Et):R(e)?te(se,null,e.slice()):typeof e=="object"?nt(e):te(dr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[vc(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=oa([t.class,r.class]));else if(a==="style")t.style=ia([t.style,r.style]);else if(nr(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){Ne(e,t,7,[n,r])}const wc=Fo();let _c=0;function xc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wc,i={uid:_c++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:To(r,a),emitsOptions:So(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=xl.bind(null,i),e.ce&&e.ce(i),i}let de=null;const kc=()=>de||ke,Ht=e=>{de=e,e.scope.on()},St=()=>{de&&de.scope.off(),de=null};function Do(e){return e.vnode.shapeFlag&4}let dn=!1;function Ac(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,a=Do(e);rc(e,n,a,t),oc(e,r);const i=a?Sc(e,t):void 0;return dn=!1,i}function Sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=go(new Proxy(e.ctx,Xl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cc(e):null;Ht(e),Ut();const i=at(r,e,0,[e.props,a]);if(Yt(),St(),Qi(i)){if(i.then(St,St),t)return i.then(o=>{di(e,o,t)}).catch(o=>{sr(o,e,0)});e.asyncDep=i}else di(e,i,t)}else Ro(e,t)}function di(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=yo(t)),Ro(e,n)}let mi;function Ro(e,t,n){const r=e.type;if(!e.render){if(!t&&mi&&!r.render){const a=r.template||Sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=be(be({isCustomElement:i,delimiters:s},o),l);r.render=mi(a,f)}}e.render=r.render||je}Ht(e),Ut(),Zl(e),Yt(),St()}function Ec(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function Cc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ec(e))},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yo(go(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}}))}function Pc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Ic(e){return H(e)&&"__vccOpts"in e}const xe=(e,t)=>pl(e,t,dn);function Ho(e,t,n){const r=arguments.length;return r===2?ne(t)&&!R(t)?Hr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hr(n)&&(n=[n]),te(e,t,n))}const Oc=Symbol(""),Tc=()=>Rn(Oc),Mc="3.2.45",jc="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,hi=vt&&vt.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?vt.createElementNS(jc,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{hi.innerHTML=r?`<svg>${e}</svg>`:e;const s=hi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Fc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lc(e,t,n){const r=e.style,a=le(n);if(n&&!a){for(const i in n)Br(r,i,n[i]);if(t&&!le(t))for(const i in t)n[i]==null&&Br(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const pi=/\s*!important$/;function Br(e,t,n){if(R(n))n.forEach(r=>Br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zc(e,t);pi.test(n)?e.setProperty(Wt(r),n.replace(pi,""),"important"):e[r]=n}}const gi=["Webkit","Moz","ms"],Sr={};function zc(e,t){const n=Sr[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return Sr[t]=r;r=ir(r);for(let a=0;a<gi.length;a++){const i=gi[a]+r;if(i in e)return Sr[t]=i}return t}const vi="http://www.w3.org/1999/xlink";function $c(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vi,t.slice(6,t.length)):e.setAttributeNS(vi,t,n);else{const i=Is(t);n==null||i&&!Gi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Dc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Gi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Rc(e,t,n,r){e.addEventListener(t,n,r)}function Hc(e,t,n,r){e.removeEventListener(t,n,r)}function Bc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Wc(t);if(r){const f=i[t]=Kc(r,a);Rc(e,s,f,l)}else o&&(Hc(e,s,o,l),i[t]=void 0)}}const bi=/(?:Once|Passive|Capture)$/;function Wc(e){let t;if(bi.test(e)){t={};let r;for(;r=e.match(bi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let Er=0;const Uc=Promise.resolve(),Yc=()=>Er||(Uc.then(()=>Er=0),Er=Date.now());function Kc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(Vc(r,n.value),t,5,[r])};return n.value=e,n.attached=Yc(),n}function Vc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const yi=/^on[a-z]/,qc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Fc(e,r,a):t==="style"?Lc(e,n,r):nr(t)?sa(t)||Bc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jc(e,t,r,a))?Dc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$c(e,t,r,a))};function Jc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&yi.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||yi.test(t)&&le(n)?!1:t in e}function Pa(e){const t=kc();if(!t)return;const n=t.ut=(a=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>Ur(i,a))},r=()=>{const a=e(t.proxy);Wr(t.subTree,a),n(a)};Nl(r),xa(()=>{const a=new MutationObserver(r);a.observe(t.subTree.el.parentNode,{childList:!0}),ka(()=>a.disconnect())})}function Wr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Wr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ur(e.el,t);else if(e.type===se)e.children.forEach(n=>Wr(n,t));else if(e.type===en){let{el:n,anchor:r}=e;for(;n&&(Ur(n,t),n!==r);)n=n.nextSibling}}function Ur(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const Gn={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Gt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Gt(e,!0),r.enter(e)):r.leave(e,()=>{Gt(e,!1)}):Gt(e,t))},beforeUnmount(e,{value:t}){Gt(e,t)}};function Gt(e,t){e.style.display=t?e._vod:"none"}const Gc=be({patchProp:qc},Nc);let wi;function Xc(){return wi||(wi=fc(Gc))}const Zc=(...e)=>{const t=Xc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Qc(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Qc(e){return le(e)?document.querySelector(e):e}function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_i(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function ef(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tf(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ia(e,t){return rf(e)||of(e,t)||Bo(e,t)||lf()}function bn(e){return nf(e)||af(e)||Bo(e)||sf()}function nf(e){if(Array.isArray(e))return Yr(e)}function rf(e){if(Array.isArray(e))return e}function af(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function of(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Bo(e,t){if(!!e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ki=function(){},Oa={},Wo={},Uo=null,Yo={mark:ki,measure:ki};try{typeof window<"u"&&(Oa=window),typeof document<"u"&&(Wo=document),typeof MutationObserver<"u"&&(Uo=MutationObserver),typeof performance<"u"&&(Yo=performance)}catch{}var cf=Oa.navigator||{},Ai=cf.userAgent,Si=Ai===void 0?"":Ai,st=Oa,ee=Wo,Ei=Uo,In=Yo;st.document;var Qe=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Ko=~Si.indexOf("MSIE")||~Si.indexOf("Trident/"),On,Tn,Mn,jn,Nn,Je="___FONT_AWESOME___",Kr=16,Vo="fa",qo="svg-inline--fa",Ct="data-fa-i2svg",Vr="data-fa-pseudo-element",ff="data-fa-pseudo-element-pending",Ta="data-prefix",Ma="data-icon",Ci="fontawesome-i2svg",uf="async",df=["HTML","HEAD","STYLE","SCRIPT"],Jo=function(){try{return!0}catch{return!1}}(),Q="classic",ae="sharp",ja=[Q,ae];function yn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var mn=yn((On={},ce(On,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ce(On,ae,{fa:"solid",fass:"solid","fa-solid":"solid"}),On)),hn=yn((Tn={},ce(Tn,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Tn,ae,{solid:"fass"}),Tn)),pn=yn((Mn={},ce(Mn,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Mn,ae,{fass:"fa-solid"}),Mn)),mf=yn((jn={},ce(jn,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(jn,ae,{"fa-solid":"fass"}),jn)),hf=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Go="fa-layers-text",pf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gf=yn((Nn={},ce(Nn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Nn,ae,{900:"fass"}),Nn)),Xo=[1,2,3,4,5,6,7,8,9,10],vf=Xo.concat([11,12,13,14,15,16,17,18,19,20]),bf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gn=new Set;Object.keys(hn[Q]).map(gn.add.bind(gn));Object.keys(hn[ae]).map(gn.add.bind(gn));var yf=[].concat(ja,bn(gn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY]).concat(Xo.map(function(e){return"".concat(e,"x")})).concat(vf.map(function(e){return"w-".concat(e)})),nn=st.FontAwesomeConfig||{};function wf(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _f(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var xf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xf.forEach(function(e){var t=Ia(e,2),n=t[0],r=t[1],a=_f(wf(n));a!=null&&(nn[r]=a)})}var Zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vo,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nn.familyPrefix&&(nn.cssPrefix=nn.familyPrefix);var Bt=P(P({},Zo),nn);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var M={};Object.keys(Zo).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Bt[e]=n,rn.forEach(function(r){return r(M)})},get:function(){return Bt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,rn.forEach(function(n){return n(M)})},get:function(){return Bt.cssPrefix}});st.FontAwesomeConfig=M;var rn=[];function kf(e){return rn.push(e),function(){rn.splice(rn.indexOf(e),1)}}var tt=Kr,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Af(e){if(!(!e||!Qe)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Sf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=Sf[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Na(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ef(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qo(e[n]),'" ')},"").trim()}function pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function Cf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Pf(e){var t=e.transform,n=e.width,r=n===void 0?Kr:n,a=e.height,i=a===void 0?Kr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ko?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var If=`:root, :host {
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
}`;function es(){var e=Vo,t=qo,n=M.cssPrefix,r=M.replacementClass,a=If;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Pi=!1;function Cr(){M.autoAddCss&&!Pi&&(Af(es()),Pi=!0)}var Of={mixout:function(){return{dom:{css:es,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Ge=st||{};Ge[Je]||(Ge[Je]={});Ge[Je].styles||(Ge[Je].styles={});Ge[Je].hooks||(Ge[Je].hooks={});Ge[Je].shims||(Ge[Je].shims=[]);var Me=Ge[Je],ts=[],Tf=function e(){ee.removeEventListener("DOMContentLoaded",e),Zn=1,ts.map(function(t){return t()})},Zn=!1;Qe&&(Zn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Zn||ee.addEventListener("DOMContentLoaded",Tf));function Mf(e){!Qe||(Zn?setTimeout(e,0):ts.push(e))}function wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Qo(e):"<".concat(t," ").concat(Ef(r),">").concat(i.map(wn).join(""),"</").concat(t,">")}function Ii(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?jf(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Nf(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function qr(e){var t=Nf(e);return t.length===1?t[0].toString(16):null}function Ff(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Jr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,Oi(t)):Me.styles[e]=P(P({},Me.styles[e]||{}),i),e==="fas"&&Jr("fa",t)}var Fn,Ln,zn,Mt=Me.styles,Lf=Me.shims,zf=(Fn={},ce(Fn,Q,Object.values(pn[Q])),ce(Fn,ae,Object.values(pn[ae])),Fn),La=null,ns={},rs={},as={},is={},os={},$f=(Ln={},ce(Ln,Q,Object.keys(mn[Q])),ce(Ln,ae,Object.keys(mn[ae])),Ln);function Df(e){return~yf.indexOf(e)}function Rf(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Df(a)?a:null}var ss=function(){var t=function(i){return Pr(Mt,function(o,s,l){return o[l]=Pr(s,i,{}),o},{})};ns=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),rs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),os=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Mt||M.autoFetchSvg,r=Pr(Lf,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});as=r.names,is=r.unicodes,La=gr(M.styleDefault,{family:M.familyDefault})};kf(function(e){La=gr(e.styleDefault,{family:M.familyDefault})});ss();function za(e,t){return(ns[e]||{})[t]}function Hf(e,t){return(rs[e]||{})[t]}function kt(e,t){return(os[e]||{})[t]}function ls(e){return as[e]||{prefix:null,iconName:null}}function Bf(e){var t=is[e],n=za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lt(){return La}var $a=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=mn[r][e],i=hn[r][e]||hn[r][a],o=e in Me.styles?e:null;return i||o||null}var Ti=(zn={},ce(zn,Q,Object.keys(pn[Q])),ce(zn,ae,Object.keys(pn[ae])),zn);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,Q,"".concat(M.cssPrefix,"-").concat(Q)),ce(t,ae,"".concat(M.cssPrefix,"-").concat(ae)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(f){return Ti[Q].includes(f)}))&&(s=Q),(e.includes(i[ae])||e.some(function(f){return Ti[ae].includes(f)}))&&(s=ae);var l=e.reduce(function(f,u){var m=Rf(M.cssPrefix,u);if(Mt[u]?(u=zf[s].includes(u)?mf[s][u]:u,o=u,f.prefix=u):$f[s].indexOf(u)>-1?(o=u,f.prefix=gr(u,{family:s})):m?f.iconName=m:u!==M.replacementClass&&u!==i[Q]&&u!==i[ae]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?ls(f.iconName):{},y=kt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||y||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Mt.far&&Mt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},$a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ae&&(Mt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=lt()||"fas"),l}var Wf=function(){function e(){ef(this,e),this.definitions={}}return tf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Jr(s,o[s]);var l=pn[Q][s];l&&Jr(l,o[s]),ss()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Mi=[],jt={},$t={},Uf=Object.keys($t);function Yf(e,t){var n=t.mixoutsTo;return Mi=e,jt={},Object.keys($t).forEach(function(r){Uf.indexOf(r)===-1&&delete $t[r]}),Mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides($t)}),n}function Gr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Xe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function Xr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||lt();if(!!t)return t=kt(n,t)||t,Ii(cs.definitions,n,t)||Ii(Me.styles,n,t)}var cs=new Wf,Kf=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Pt("noAuto")},Vf={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(Pt("beforeI2svg",t),Xe("pseudoElements2svg",t),Xe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Mf(function(){Jf({autoReplaceSvgRoot:n}),Pt("watch",t)})}},qf={icon:function(t){if(t===null)return null;if(Xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(hf))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||lt(),iconName:kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=lt();return{prefix:i,iconName:kt(i,t)||t}}}},Se={noAuto:Kf,config:M,dom:Vf,parse:qf,library:cs,findIconDefinition:Xr,toHtml:wn},Jf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&Qe&&M.autoReplaceSvg&&Se.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Qe){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gf(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=pr(P(P({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xf(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,y=p===void 0?!1:p,N=r.found?r:n,O=N.width,U=N.height,k=a==="fak",C=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(U)})},D=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/U*16*.0625,"em")}:{};y&&(E.attributes[Ct]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||vn())},children:[l]}),delete E.attributes.title);var Y=P(P({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:P(P({},D),m.styles)}),ie=r.found&&n.found?Xe("generateAbstractMask",Y)||{children:[],attributes:{}}:Xe("generateAbstractIcon",Y)||{children:[],attributes:{}},re=ie.children,pe=ie.attributes;return Y.children=re,Y.attributes=pe,s?Xf(Y):Gf(Y)}function ji(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ct]="");var u=P({},o.styles);Fa(a)&&(u.transform=Pf({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=pr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Zf(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=pr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ir=Me.styles;function Zr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ia(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Qf={found:!1,width:512,height:512};function eu(e,t){!Jo&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qr(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=lt()),new Promise(function(r,a){if(Xe("missingIconAbstract"),n==="fa"){var i=ls(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ir[t]&&Ir[t][e]){var o=Ir[t][e];return r(Zr(o))}eu(e,t),r(P(P({},Qf),{},{icon:M.showMissingIcons&&e?Xe("missingIconAbstract")||{}:{}}))})}var Ni=function(){},ea=M.measurePerformance&&In&&In.mark&&In.measure?In:{mark:Ni,measure:Ni},Zt='FA "6.2.1"',tu=function(t){return ea.mark("".concat(Zt," ").concat(t," begins")),function(){return fs(t)}},fs=function(t){ea.mark("".concat(Zt," ").concat(t," ends")),ea.measure("".concat(Zt," ").concat(t),"".concat(Zt," ").concat(t," begins"),"".concat(Zt," ").concat(t," ends"))},Ra={begin:tu,end:fs},Un=function(){};function Fi(e){var t=e.getAttribute?e.getAttribute(Ct):null;return typeof t=="string"}function nu(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function ru(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function au(){if(M.autoReplaceSvg===!0)return Yn.replace;var e=Yn[M.autoReplaceSvg];return e||Yn.replace}function iu(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function ou(e){return ee.createElement(e)}function us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?iu:ou:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(us(o,{ceFn:r}))}),a}function su(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(us(a),n)}),n.getAttribute(Ct)===null&&M.keepOriginalSource){var r=ee.createComment(su(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Na(n).indexOf(M.replacementClass))return Yn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return wn(s)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function Li(e){e()}function ds(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=Li;M.mutateApproach===uf&&(r=st.requestAnimationFrame||Li),r(function(){var a=au(),i=Ra.begin("mutate");e.map(a),i(),n()})}}var Ha=!1;function ms(){Ha=!0}function ta(){Ha=!1}var Qn=null;function zi(e){if(!!Ei&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;Qn=new Ei(function(f){if(!Ha){var u=lt();Kt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Fi(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Fi(m.target)&&~bf.indexOf(m.attributeName))if(m.attributeName==="class"&&nu(m.target)){var p=vr(Na(m.target)),y=p.prefix,N=p.iconName;m.target.setAttribute(Ta,y||u),N&&m.target.setAttribute(Ma,N)}else ru(m.target)&&a(m.target)})}}),Qe&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lu(){!Qn||Qn.disconnect()}function cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(Na(e));return a.prefix||(a.prefix=lt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Hf(a.prefix,e.innerText)||za(a.prefix,qr(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function uu(e){var t=Kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function du(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fu(e),r=n.iconName,a=n.prefix,i=n.rest,o=uu(e),s=Gr("parseNodeAttributes",{},e),l=t.styleParser?cu(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var mu=Me.styles;function hs(e){var t=M.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(Go)?Xe("generateLayersText",e,t):Xe("generateSvgReplacementMutation",e,t)}var ct=new Set;ja.map(function(e){ct.add("fa-".concat(e))});Object.keys(mn[Q]).map(ct.add.bind(ct));Object.keys(mn[ae]).map(ct.add.bind(ct));ct=bn(ct);function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Ci,"-").concat(m))},a=function(m){return n.remove("".concat(Ci,"-").concat(m))},i=M.autoFetchSvg?ct:ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(mu));i.includes("fa")||i.push("fa");var o=[".".concat(Go,":not([").concat(Ct,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ra.begin("onTree"),f=s.reduce(function(u,m){try{var p=hs(m);p&&u.push(p)}catch(y){Jo||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){ds(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hs(e).then(function(n){n&&ds([n],t)})}function pu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Xr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var gu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,y=n.titleId,N=y===void 0?null:y,O=n.classes,U=O===void 0?[]:O,k=n.attributes,C=k===void 0?{}:k,E=n.styles,D=E===void 0?{}:E;if(!!t){var Y=t.prefix,ie=t.iconName,re=t.icon;return br(P({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?C["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(N||vn()):(C["aria-hidden"]="true",C.focusable="false")),Da({icons:{main:Zr(re),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ie,transform:P(P({},He),a),symbol:o,title:p,maskId:u,titleId:N,extra:{attributes:C,styles:D,classes:U}})})}},vu={mixout:function(){return{icon:pu(gu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Di,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Di(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(y,N){Promise.all([Qr(a,s),u.iconName?Qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var U=Ia(O,2),k=U[0],C=U[1];y([n,Da({icons:{main:k,mask:C},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=pr(s);l.length>0&&(a.style=l);var f;return Fa(o)&&(f=Xe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(bn(i)).join(" ")},children:o}]})}}}},yu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return br({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Zf({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(bn(s))}})})}}}},wu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,y=p===void 0?{}:p;return br({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),ji({content:n,transform:P(P({},He),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(M.cssPrefix,"-layers-text")].concat(bn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ko){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ji({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},_u=new RegExp('"',"ug"),Ri=[1105920,1112319];function xu(e){var t=e.replace(_u,""),n=Ff(t,0),r=n>=Ri[0]&&n<=Ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:qr(a?t[0]:t),isSecondary:r||a}}function Hi(e,t){var n="".concat(ff).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kt(e.children),o=i.filter(function(re){return re.getAttribute(Vr)===t})[0],s=st.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(pf),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ae:Q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hn[p][l[2].toLowerCase()]:gf[p][f],N=xu(m),O=N.value,U=N.isSecondary,k=l[0].startsWith("FontAwesome"),C=za(y,O),E=C;if(k){var D=Bf(O);D.iconName&&D.prefix&&(C=D.iconName,y=D.prefix)}if(C&&!U&&(!o||o.getAttribute(Ta)!==y||o.getAttribute(Ma)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var Y=du(),ie=Y.extra;ie.attributes[Vr]=t,Qr(C,y).then(function(re){var pe=Da(P(P({},Y),{},{icons:{main:re,mask:$a()},prefix:y,iconName:E,extra:ie,watchable:!0})),ge=ee.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=pe.map(function(Ee){return wn(Ee)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ku(e){return Promise.all([Hi(e,"::before"),Hi(e,"::after")])}function Au(e){return e.parentNode!==document.head&&!~df.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bi(e){if(!!Qe)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(Au).map(ku),a=Ra.begin("searchPseudoElements");ms(),Promise.all(r).then(function(){a(),ta(),t()}).catch(function(){a(),ta(),n()})})}var Su={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;M.searchPseudoElements&&Bi(a)}}},Wi=!1,Eu={mixout:function(){return{dom:{unwatch:function(){ms(),Wi=!0}}}},hooks:function(){return{bootstrap:function(){zi(Gr("mutationObserverCallbacks",{}))},noAuto:function(){lu()},watch:function(n){var r=n.observeMutationsRoot;Wi?ta():zi(Gr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ui=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Cu={mixout:function(){return{parse:{transform:function(n){return Ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ui(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:p};return{tag:"g",attributes:P({},y.outer),children:[{tag:"g",attributes:P({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),y.path)}]}]}}}},Or={x:0,y:0,width:"100%",height:"100%"};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pu(e){return e.tag==="g"?e.children:[e]}var Iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(o){return o.trim()})):$a();return i.prefix||(i.prefix=lt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,y=Cf({transform:l,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:P(P({},Or),{},{fill:"white"})},O=u.children?{children:u.children.map(Yi)}:{},U={tag:"g",attributes:P({},y.inner),children:[Yi(P({tag:u.tag,attributes:P(P({},u.attributes),y.path)},O))]},k={tag:"g",attributes:P({},y.outer),children:[U]},C="mask-".concat(s||vn()),E="clip-".concat(s||vn()),D={tag:"mask",attributes:P(P({},Or),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,k]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Pu(p)},D]};return r.push(Y,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},Or)}),{children:r,attributes:a}}}},Ou={provides:function(t){var n=!1;st.matchMedia&&(n=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Tu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[Of,vu,bu,yu,wu,Su,Eu,Cu,Iu,Ou,Tu];Yf(Mu,{mixoutsTo:Se});Se.noAuto;var ps=Se.config,gs=Se.library;Se.dom;var er=Se.parse;Se.findIconDefinition;Se.toHtml;var ju=Se.icon;Se.layer;var Nu=Se.text;Se.counter;function Ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ki(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lu(e,t){if(e==null)return{};var n=Fu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function na(e){return zu(e)||$u(e)||Du(e)||Ru()}function zu(e){if(Array.isArray(e))return ra(e)}function $u(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Du(e,t){if(!!e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vs={exports:{}};(function(e){(function(t){var n=function(k,C,E){if(!f(C)||m(C)||p(C)||y(C)||l(C))return C;var D,Y=0,ie=0;if(u(C))for(D=[],ie=C.length;Y<ie;Y++)D.push(n(k,C[Y],E));else{D={};for(var re in C)Object.prototype.hasOwnProperty.call(C,re)&&(D[k(re,E)]=n(k,C[re],E))}return D},r=function(k,C){C=C||{};var E=C.separator||"_",D=C.split||/(?=[A-Z])/;return k.split(D).join(E)},a=function(k){return N(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var C=a(k);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(k,C){return r(k,C).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},p=function(k){return s.call(k)=="[object RegExp]"},y=function(k){return s.call(k)=="[object Boolean]"},N=function(k){return k=k-0,k===k},O=function(k,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?k:function(D,Y){return E(D,k,Y)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,C){return n(O(a,C),k)},decamelizeKeys:function(k,C){return n(O(o,C),k,C)},pascalizeKeys:function(k,C){return n(O(i,C),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Hu)})(vs);var Bu=vs.exports,Wu=["class","style"];function Uu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Bu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Yu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ba(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Yu(u);break;case"style":l.style=Uu(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Lu(n,Wu);return Ho(e.tag,Oe(Oe(Oe({},t),{},{class:a.class,style:Oe(Oe({},a.style),o)},a.attrs),s),r)}var bs=!1;try{bs=!0}catch{}function Ku(){if(!bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function an(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function Vu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Vi(e){if(e&&tr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(er.icon)return er.icon(e);if(e===null)return null;if(tr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bt=_a({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=xe(function(){return Vi(t.icon)}),i=xe(function(){return an("classes",Vu(t))}),o=xe(function(){return an("transform",typeof t.transform=="string"?er.transform(t.transform):t.transform)}),s=xe(function(){return an("mask",Vi(t.mask))}),l=xe(function(){return ju(a.value,Oe(Oe(Oe(Oe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Hn(l,function(u){if(!u)return Ku("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=xe(function(){return l.value?Ba(l.value.abstract[0],{},r):null});return function(){return f.value}}});_a({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ps.familyPrefix,i=xe(function(){return["".concat(a,"-layers")].concat(na(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ho("div",{class:i.value},r.default?r.default():[])}}});_a({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ps.familyPrefix,i=xe(function(){return an("classes",[].concat(na(t.counter?["".concat(a,"-layers-counter")]:[]),na(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=xe(function(){return an("transform",typeof t.transform=="string"?er.transform(t.transform):t.transform)}),s=xe(function(){var f=Nu(t.value.toString(),Oe(Oe({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=xe(function(){return Ba(s.value,{},r)});return function(){return l.value}}});var qu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ju={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Gu={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Xu={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};const Zu={class:"nav-container"},Qu={class:"logo"},ed={href:"#home"},td={class:"logo-img"},nd={class:"hamb"},rd=b("button",{class:"side-menu"},null,-1),ad={class:"links"},id=b("a",{href:"#about"},"About",-1),od=b("a",{href:"#skills"},"Skills",-1),sd=b("a",{href:"#projects"},"Projects",-1),ld=b("a",{href:"#contact"},"Contact",-1),cd={class:"theme-switcher"},fd={class:"dropdown-links links"},ud={class:"theme-switcher"},dd={__name:"TheNav",setup(e){Pa(p=>({"56595d56":n.value,b2a63ce6:r.value})),gs.add(qu,Xu),window.addEventListener("resize",m),window.addEventListener("hashchange",function(){const p=window.location.hash;document.querySelectorAll(".links a").forEach(N=>{N.getAttribute("href")===p?N.classList.add("active"):N.classList.remove("active")})});const t=fe("light"),n=fe("rgba(237, 230, 227, 0.95)"),r=fe(`/logo-JS-${t.value}.jpg`),a=fe(`/logo-JS-${t.value}.webp`);jl(()=>{r.value=`url(/logo-JS-${t.value}.jpg)`,a.value=`url(/logo-JS-${t.value}.webp)`});function i(){t.value==="dark"?t.value="light":t.value="dark",t.value==="dark"?(document.body.classList.remove("light"),document.body.classList.add("dark"),document.querySelectorAll(".theme-switcher-icon").forEach(p=>{p.classList.remove("lightMode"),p.classList.add("darkMode")}),n.value="rgba(46, 80, 119, 0.95)"):(document.body.classList.remove("dark"),document.body.classList.add("light"),document.querySelectorAll(".theme-switcher-icon").forEach(p=>{p.classList.add("lightMode"),p.classList.remove("darkMode")}),n.value="rgba(237, 230, 227, 0.95)")}function o(){l.value=!l.value,document.body.style.overflowY=l.value?"hidden":"auto"}const s=fe(!1),l=fe(!1),f=fe(window.innerWidth),u=xe(()=>l&&s);function m(){if(f.value=window.innerWidth,f.value<=768){s.value=!0;return}s.value=!1,l.value=!1}return m(),(p,y)=>{const N=Aa("webp");return V(),X("nav",null,[b("div",Zu,[b("div",Qu,[b("a",ed,[it(b("div",td,null,512),[[N,[a.value,r.value],"bgs"]])])]),b("div",nd,[ue(u)?(V(),X("span",{key:0,class:"hamburger",onClick:y[0]||(y[0]=O=>o())},[te(ue(bt),{icon:"fa-solid fa-bars","fixed-width":""})])):(V(),X("span",{key:1,class:"xmark",onClick:y[1]||(y[1]=O=>o())},[te(ue(bt),{icon:"fa-solid fa-xmark","fixed-width":""})]))]),rd,it(b("div",ad,[id,od,sd,ld,b("div",cd,[b("div",{class:"theme-switcher-icon lightMode",onClick:y[2]||(y[2]=O=>i())})])],512),[[Gn,!s.value]]),it(b("div",fd,[b("a",{href:"#about",onClick:y[3]||(y[3]=O=>o())},"About"),b("a",{href:"#skills",onClick:y[4]||(y[4]=O=>o())},"Skills"),b("a",{href:"#projects",onClick:y[5]||(y[5]=O=>o())},"Projects"),b("a",{href:"#contact",onClick:y[6]||(y[6]=O=>o())},"Contact"),b("div",ud,[b("div",{class:"theme-switcher-icon lightMode",onClick:y[7]||(y[7]=O=>i())})])],512),[[Gn,l.value]])])])}}};const md=b("div",{class:"bar-container"},[b("div",{class:"skill-bar"})],-1),qi={__name:"TheSkillBar",props:{skill:{},percentage:{},color:{}},setup(e){const t=e;Pa(a=>({ec40095a:e.percentage,"10e8a5a0":ue(n),"0ca0442c":ue(r)}));const n=t.color.dark,r=t.color.light;return(a,i)=>(V(),X(se,null,[b("p",null,yt(e.skill),1),md],64))}},hd={skillName:"HTML",color:{dark:"#E96228",light:"#E96228"},percentage:"90%"},pd={skillName:"CSS",color:{dark:"#4CA3E6",light:"#1B6DB2"},percentage:"60%"},gd={skillName:"JavaScript",color:{dark:"#CFB430",light:"#3C9800"},percentage:"70%"},vd={skillName:"PHP",color:{dark:"#9499E0",light:"#797DB8"},percentage:"60%"},bd={skillName:"Laravel",color:{dark:"#FF6F61",light:"#F72C1F"},percentage:"50%"},yd={skillName:"Vue",color:{dark:"#3FB27F",light:"#349469"},percentage:"50%"},wd={skillName:"Digital Marketing",color:{dark:"#F7B500",light:"#D6272C"},percentage:"60%"},_d={skillName:"Content Writing",color:{dark:"#04B3BD",light:"#039299"},percentage:"70%"},xd={skillName:"WordPress",color:{dark:"#74BC4B",light:"#21759B"},percentage:"80%"},kd={skillName:"Figma",color:{dark:"#9D8EFF",light:"#9c56f6"},percentage:"60%"},Ad={skillName:"Making up skill bar values!",color:{dark:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)",light:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"},percentage:"100%"},$n={HTML:hd,CSS:pd,JavaScript:gd,PHP:vd,Laravel:bd,Vue:yd,DigitalMarketing:wd,ContentWriting:_d,WordPress:xd,Figma:kd,SkillBars:Ad};const ys=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sd={class:"skills-container"},Ed={class:"skills-column"},Cd={class:"skills-column"},Pd={__name:"TheSkills",setup(e){const t=Object.keys($n),n=t.length,r=[];for(let a=0;a<n;a++)r.push({skill:t[a],name:$n[t[a]].skillName,percentage:$n[t[a]].percentage,color:$n[t[a]].color});return(a,i)=>(V(),X("div",Sd,[b("div",Ed,[(V(!0),X(se,null,_t(r.slice(0,ue(n)/2+ue(n)%2),o=>(V(),un(qi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))]),b("div",Cd,[(V(!0),X(se,null,_t(r.slice(ue(n)/2+ue(n)%2,ue(n)),o=>(V(),un(qi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))])]))}},Id=ys(Pd,[["__scopeId","data-v-bc03b09e"]]);const Od=["id","data-cat"],Td=["src","alt"],Md=b("div",{class:"tile-overlay toggle"},null,-1),jd={class:"overlay-text toggle"},Nd={class:"tile-title toggle"},Fd={class:"modal-header"},Ld=b("span",{class:"material-symbols-outlined closeBtn toggle"},"close",-1),zd={class:"header-image"},$d=["src","alt"],Dd={class:"header-text"},Rd={class:"modal-body"},Hd={class:"description-container"},Bd={class:"links-container"},Wd=["href"],Ud=["href"],Yd=["href"],Kd={class:"tech-container"},Vd=b("h4",null,"Technologies used",-1),qd={class:"tech-list"},Ji={__name:"TheProjectTile",props:{id:{},name:{},desc:{},img:{},webp:{},categories:{},tech:{},website:{},github:{},projectFolder:{}},setup(e){Pa(i=>({d3a4dd0c:n.value,"3d5e6615":r.value}));const t=fe(!1),n=fe(),r=fe();function a(i){i.target.classList.contains("toggle")&&(t.value=!t.value,t.value?document.body.style.overflow="hidden":document.body.style.overflow="visible",document.body.classList.contains("dark")?(n.value="#2e5077",r.value="#ede6e3"):(r.value="#2e5077",n.value="#ede6e3"))}return(i,o)=>{const s=Aa("webp");return V(),X(se,null,[b("div",{class:"tile-container",id:e.id,onClick:o[0]||(o[0]=l=>a(l)),"data-cat":e.categories},[it(b("img",{src:e.img,alt:e.name},null,8,Td),[[s,e.webp,"src"]]),Md,b("div",jd,[b("h3",Nd,yt(e.name),1)])],8,Od),t.value?(V(),X("div",{key:0,class:"modal-container toggle",onClick:o[2]||(o[2]=l=>a(l))},[b("div",{class:"modal",onClick:o[1]||(o[1]=()=>{})},[b("div",Fd,[Ld,b("div",zd,[it(b("img",{class:"banner",src:e.img,alt:e.name},null,8,$d),[[s,e.webp,"src"]])]),b("div",Dd,[b("h3",null,yt(e.name),1)])]),b("div",Rd,[b("div",Hd,[b("p",null,yt(e.desc),1)]),b("div",Bd,[e.website?(V(),X("a",{key:0,class:"project-link",href:e.website,target:"_blank",rel:"noopener noreferrer"},"Website",8,Wd)):Ve("",!0),e.github?(V(),X("a",{key:1,class:"project-link",href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github",8,Ud)):Ve("",!0),e.projectFolder?(V(),X("a",{key:2,class:"project-link",href:e.projectFolder,target:"_blank",rel:"noopener noreferrer"},"Folder (FR)",8,Yd)):Ve("",!0)]),b("div",Kd,[Vd,b("ol",qd,[(V(!0),X(se,null,_t(e.tech,l=>(V(),X("li",{class:"tech-item",key:l},yt(l),1))),128))])])])])])):Ve("",!0)],64)}}},Jd={Name:"Sons de ta Ville App",Description:"My first mobile app. I was the lead developer in the group project and produced about 80% of the code. I also took part in the design and prototyping of the app. The app is going to be used as the frontend for the Sons de ta Ville API.",Categories:["Frontend","Project Management"],Technologies:["Angular","Ionic","Git","TypeScript"],Image:"/projectImages/SonsDeTaVilleApp.jpg",WebP:"/projectImages/SonsDeTaVilleApp.webp",Github:"https://github.com/julessandoz/SonsDeTaVilleFront",ProjectFolder:"https://audreycks.github.io/SonsDeTaVillePresentation/"},Gd={Name:"Sons de ta Ville API",Description:"My first Node project. I was the lead developer in the group project and produced about 85% of the code. The API is going to be used as the backend for an Angular mobile app.",Categories:["Backend","Project Management"],Technologies:["NodeJS","ExpressJS","Mongoose","MongoDB","Git","JavaScript"],Image:"/projectImages/SonsDeTaVille.jpg",WebP:"/projectImages/SonsDeTaVille.webp",Website:"https://sons-de-ta-ville.onrender.com",Github:"https://github.com/julessandoz/SonsDeTaVille/"},Xd={Name:"Kairos",Description:"In 2022, my class created a web-app for students to view their timetables. Grouped into teams of 7-8, I managed the project and aided front-end and back-end developers. I got to coordinate UX, UI and development teams. It was a great learning experience in project management and teamwork.",Categories:["Backend","Frontend","Project Management","Agile"],Technologies:["Laravel","Vue3","PostgreSQL","Git","JavaScript"],Image:"/projectImages/Kairos.jpg",WebP:"/projectImages/Kairos.webp",Website:"https://pnj-pingouin.heig-vd.ch/app/index.html",Github:"https://github.com/julessandoz/ProjArt_BackEnd/",ProjectFolder:"https://www.dropbox.com/s/3lr9xsklsre7s0a/pnj_Rapport_VersionFinale.pdf?dl=0"},Zd={Name:"Les Ailes De Katia",Description:"My first project working on a pre-existing website. I was tasked with improving the site's technical SEO, to optimize its loading speed and to make it responsive.",Categories:["SEO"],Technologies:["Wordpress"],Image:"/projectImages/AilesDeKatia.jpg",WebP:"/projectImages/AilesDeKatia.webp",Website:"https://lesailesdekatia.com/"},Qd={Name:"Projet Borderan",Description:'In 2021, I was hired to redesign a website for a local trustee company. I was tasked with applying a new graphic identity and reworking the architecture information as well as all the content to optimize UX and SEO. It was my first "real-world" project and, while it unfortunately went unfinished due to a lack of time and budget, it was a great opportunity to learn how to interract with a client.',Categories:["SEO","Content Writing","Web Design"],Technologies:["Wordpress","Divi"],Image:"/projectImages/ProjetBorderan.jpg",WebP:"/projectImages/ProjetBorderan.webp"},em={Name:"Hollywood Movies Data Visualization",Description:"My first time using a Javascript library. In the context of a data visualization class during my second year at HEIG-VD, A friend and I created this visualization of the top grossing Hollywood movies of the past 50 years. We had to use the D3.js library and used data from a Kaggle dataset as well as images from themovieDB.org. The project was a great opportunity to learn about data visualization and svg manipulation.",Categories:["Frontend","Data Visualization"],Technologies:["D3.js","JavaScript","Git"],Image:"/projectImages/Hollywood.jpg",WebP:"/projectImages/Hollywood.webp",Website:"https://hollywood.jules-sandoz.com/",Github:"https://github.com/julessandoz/VisualDonProject_Hollywood_Movies"},tm={Name:"Experience Flathead",Description:"After learning digital marketing, I created a website with logo, graphic design and content. I also built a digital ecosystem with social media pages, a newsletter, SEA & SEO campaigns, and social media ads. This project took two semesters and gave me an opportunity to learn digital marketing and tools like Google Analytics & Search Console.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","Mailchimp","Google Analytics","Google Search Console"],Image:"/projectImages/ExperienceFlathead.jpg",WebP:"/projectImages/ExperienceFlathead.webp",Website:"https://ef.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/jgivfp49jsolqx5/Rapport-complet.pdf?dl=0"},nm={Name:"Everything Photography",Description:"I created a website for a fictitious photography store as part of my E-Commerce course. I used Wordpress, Divi, and WooCommerce, and created the logo, graphic identity, and social media pages. I also explored Amazon's affiliation program for photography gear and Print On Demand through Gelato for posters.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","WooCommerce","Mailchimp","Google Analytics","Google Search Console"],Image:"/projectImages/EverythingPhotography.jpg",WebP:"/projectImages/EverythingPhotography.webp",Website:"https://ep.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/vwglbomg9ucq55t/HEIG-VD%20-%20E-comm%20-%20Sandoz%20Jules%20-%20Everything%20Photography.pdf?dl=0"},rm={Name:"Cave Sandoz",Description:"My first ever coding project. After learning the basics of PHP and MySQL, I created this website for my family's wine cellar. It is a simple app that allows users to manage the cellar's wine bottles and keep track of what's available.",Categories:["Backend"],Technologies:["PHP","MySQL"],Image:"/projectImages/CaveSandoz.jpg",WebP:"/projectImages/CaveSandoz.webp",Website:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/cave-sandoz/",ProjectFolder:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/Sandoz-Projet-ProgServ.pdf"},Ce={SonsDeTaVilleApp:Jd,SonsDeTaVille:Gd,Kairos:Xd,AilesDeKatia:Zd,ProjetBorderan:Qd,HollywoodMovies:em,ExperienceFlathead:tm,EverythingPhotography:nm,CaveSandoz:rm};const am={class:"filter-container"},im=b("h3",null,"Filter",-1),om={class:"filter"},sm={class:"filter-options"},lm=["id","data-cat"],cm=["for"],fm={class:"filter"},um={class:"filter-options"},dm=["id","data-tech"],mm=["for"],hm={class:"projects-container"},pm={class:"more-container projects-container"},gm={key:0,class:"cta-container"},vm={__name:"TheProjects",setup(e){const t=fe(Object.keys(Ce)),n=[],r=fe(n.length),a=fe(!1),i=fe(r.value>6);let o=new Set,s=new Set;const l=[],f=fe(0);for(let z=0;z<t.value.length;z++)l.push({project:t.value[z],name:Ce[t.value[z]].Name,desc:Ce[t.value[z]].Description,image:Ce[t.value[z]].Image,webp:Ce[t.value[z]].WebP,website:Ce[t.value[z]].Website,github:Ce[t.value[z]].Github,projectFolder:Ce[t.value[z]].ProjectFolder,tech:Ce[t.value[z]].Technologies,cat:Ce[t.value[z]].Categories}),Ce[t.value[z]].Categories.forEach(j=>{o.add(j)}),Ce[t.value[z]].Technologies.forEach(j=>{s.add(j)});const u=Array.from(o),m=Math.floor(u.length/2),p=u.slice(0,m).sort((z,j)=>j.length-z.length),y=u.slice(m).sort((z,j)=>z.length-j.length);let N=[];for(let z=0;z<p.length;z++)N.push(p[z]),y[z]&&N.push(y[z]);y.length>p.length&&N.push(y[y.length-1]),o=new Set(N);const O=Array.from(s),U=Math.floor(O.length/2),k=O.slice(0,U).sort((z,j)=>j.length-z.length),C=O.slice(U).sort((z,j)=>z.length-j.length);let E=[];for(let z=0;z<k.length;z++)E.push(k[z]),C[z]&&E.push(C[z]);C.length>k.length&&E.push(C[C.length-1]),s=new Set(E);const D=fe(!1),Y=fe(!1),ie=new Set,re=new Set,pe=fe(!1);function ge(){D.value=!D.value,document.getElementById("category-title").classList.toggle("active"),D.value&&document.getElementById("technology-title").classList.contains("active")&&Ee()}function Ee(){Y.value=!Y.value,document.getElementById("technology-title").classList.toggle("active"),Y.value&&document.getElementById("category-title").classList.contains("active")&&ge()}function ft(z){const j=z.target;j.parentElement.classList.toggle("active"),j.checked?ie.add(j.dataset.cat):ie.delete(j.dataset.cat),Ue()}function It(z){const j=z.target;j.parentElement.classList.toggle("active"),j.checked?re.add(j.dataset.tech):re.delete(j.dataset.tech),Ue()}function Ue(){n.length=0;for(let z=0;z<l.length;z++){let j=ie.size===0,I=re.size===0;if(!j){for(let B=0;B<l[z].cat.length;B++)if(ie.has(l[z].cat[B])){j=!0;break}}if(!I){for(let B=0;B<l[z].tech.length;B++)if(re.has(l[z].tech[B])){I=!0;break}}j&&I&&n.push(l[z])}r.value=n.length,i.value=r.value>6,a.value=!1,f.value+=1,ie.size>0||re.size>0?pe.value=!0:pe.value=!1}function Vt(){ie.clear(),re.clear(),document.querySelectorAll("input[type=checkbox]").forEach(j=>{j.checked=!1,j.parentElement.classList.remove("active")}),Ue()}return Ue(),(z,j)=>(V(),X(se,null,[b("div",am,[im,pe.value?(V(),X("div",{key:0,class:"reset",onClick:j[0]||(j[0]=I=>Vt())},"Reset All")):Ve("",!0),b("div",om,[b("div",{class:"filter-title",id:"category-title",for:"category",onClick:j[1]||(j[1]=I=>ge())}," Categories "),b("div",sm,[(V(!0),X(se,null,_t(ue(o),I=>it((V(),X("div",{class:"filter-option",key:I},[b("input",{type:"checkbox",id:I,"data-cat":I,onInput:j[2]||(j[2]=B=>ft(B))},null,40,lm),b("label",{for:I},yt(I),9,cm)])),[[Gn,D.value]])),128))])]),b("div",fm,[b("div",{class:"filter-title",id:"technology-title",for:"technologyFilter",onClick:j[3]||(j[3]=I=>Ee())}," Technologies "),b("div",um,[(V(!0),X(se,null,_t(ue(s),I=>it((V(),X("div",{class:"filter-option",key:I},[b("input",{type:"checkbox",id:I,"data-tech":I,onInput:j[4]||(j[4]=B=>It(B))},null,40,dm),b("label",{for:I},yt(I),9,mm)])),[[Gn,Y.value]])),128))])])]),b("div",hm,[(V(!0),X(se,null,_t(n.slice(0,6),I=>(V(),un(Ji,{key:f.value,id:I.project,name:I.name,desc:I.desc,img:I.image,webp:I.webp,website:I.website,github:I.github,projectFolder:I.projectFolder,tech:I.tech,categories:I.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),128)),b("div",pm,[a.value?(V(!0),X(se,{key:0},_t(n.slice(6),I=>(V(),un(Ji,{id:I.project,name:I.name,desc:I.desc,img:I.image,webp:I.webp,website:I.website,github:I.github,projectFolder:I.projectFolder,tech:I.tech,categories:I.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)):Ve("",!0)])]),i.value?(V(),X("div",gm,[a.value?Ve("",!0):(V(),X("button",{key:0,class:"cta",onClick:j[5]||(j[5]=I=>a.value=!0)},"Show more")),a.value?(V(),X("button",{key:1,class:"cta",onClick:j[6]||(j[6]=I=>a.value=!1)},"Show less")):Ve("",!0)])):Ve("",!0)],64))}};var bm={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"]},ym={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},wm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};const We=e=>(kl("data-v-cf257d2e"),e=e(),Al(),e),_m={class:"app"},xm=bc('<section id="home" data-v-cf257d2e><div class="text-container" data-v-cf257d2e><h1 data-v-cf257d2e> Hello there, <br data-v-cf257d2e> I&#39;m Jules Sandoz </h1><p class="subtitle" data-v-cf257d2e>Digital Swiss Army Knife</p></div><div class="cta-container" data-v-cf257d2e><p data-v-cf257d2e>Scroll or</p><a class="cta" href="#projects" data-v-cf257d2e>Discover my projects</a></div></section>',1),km={id:"about"},Am=We(()=>b("div",{class:"text-container"},[b("h2",null,"About me"),b("p",null," Currently a last year student in Communication and Media Engineering in my home country of Switzerland, I enjoy working on websites, development, marketing, and UI. "),b("p",null," I\u2019m a very curious person and love learning while solving problems. Great fan of the outdoors and amateur photographer, I like spending my free time in the mountains, hiking in the summer and snowboarding in the winter. "),b("p",null,"Always interested in working on new projects with motivated people."),b("a",{href:"#contact"},"Let's work together!")],-1)),Sm={class:"img-container"},Em=["src"],Cm={id:"skills"},Pm=We(()=>b("div",{class:"title-container"},[b("h2",null,"Skills")],-1)),Im={class:"skills-bars"},Om={id:"projects"},Tm=We(()=>b("div",{class:"title-container"},[b("h2",null,"Projects")],-1)),Mm={id:"contact"},jm=We(()=>b("div",{class:"title-container"},[b("h2",null,"Want to make something great together?")],-1)),Nm={class:"text-container"},Fm=We(()=>b("p",null," I'm open to freelance or job offers, don't hesitate to reach out through my socials or by email! ",-1)),Lm={class:"socials"},zm={class:"link"},$m={href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},Dm=We(()=>b("a",{class:"contact-link",href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},"/jules-sandoz",-1)),Rm={class:"link"},Hm={class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},Bm=We(()=>b("a",{class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"@julessandoz",-1)),Wm={class:"link"},Um={class:"contact-link",href:"https://github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},Ym=We(()=>b("a",{class:"contact-link",href:"https://github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"/julessandoz",-1)),Km={class:"link"},Vm={class:"contact-link",href:"mailto:contact@jules-sandoz.com"},qm=We(()=>b("a",{class:"contact-link",href:"mailto:contact@jules-sandoz.com"},"contact@jules-sandoz.com",-1)),Jm={class:"link"},Gm={class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},Xm=We(()=>b("a",{class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},"Download my resume",-1)),Zm={__name:"App",setup(e){gs.add(ym,wm,bm,Ju,Gu);const t=document.querySelector("title");return xa(()=>{document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?t.innerText="See you later! | Jules Sandoz":t.innerText="Welcome back! | Jules Sandoz"});let n={root:null,rootMargin:"0px",threshold:.5};function r(u,m){u.forEach(p=>{if(p.isIntersecting){switch(p.target.id){case"home":t.innerHTML="Home | Jules Sandoz",history.pushState(null,null,"#home");break;case"about":t.innerHTML="About | Jules Sandoz",history.pushState(null,null,"#about");break;case"skills":t.innerHTML="Skills | Jules Sandoz",history.pushState(null,null,"#skills");break;case"projects":t.innerHTML="Projects | Jules Sandoz",history.pushState(null,null,"#projects");break;case"contact":t.innerHTML="Contact | Jules Sandoz",history.pushState(null,null,"#contact");break}p.target.classList.contains("skill-bar")&&(p.target.classList.add("full"),m.unobserve(p.target)),(p.target.classList.contains("link")||p.target.classList.contains("text-container")||p.target.classList.contains("cta-container")||p.target.classList.contains("img-container")||p.target.classList.contains("tile-container"))&&(p.target.classList.add("visible"),m.unobserve(p.target))}})}const a=new IntersectionObserver(r,n),i=document.querySelectorAll("section"),o=document.querySelectorAll(".skill-bar"),s=document.querySelectorAll("#home .text-container, #home .cta-container"),l=document.querySelector("#about .img-container");document.querySelectorAll("#projects .projects-container .tile-container").forEach(u=>{a.observe(u)}),a.observe(l),s.forEach(u=>{a.observe(u)}),o.forEach(u=>{a.observe(u)}),i.forEach(u=>{a.observe(u)})}),(n,r)=>{const a=Aa("webp");return V(),X("main",null,[b("div",_m,[te(dd),xm,b("section",km,[Am,b("div",Sm,[it(b("img",{class:"portrait-photo",src:"/jules-sandoz.jpg",alt:"Jules Sandoz"},null,8,Em),[[a,"/jules-sandoz.webp","src"]])])]),b("section",Cm,[Pm,b("div",Im,[te(Id)])]),b("section",Om,[Tm,te(vm)]),b("section",Mm,[jm,b("div",Nm,[Fm,b("div",Lm,[b("div",zm,[b("a",$m,[te(ue(bt),{icon:"fa-brands fa-linkedin","fixed-width":""})]),Dm]),b("div",Rm,[b("a",Hm,[te(ue(bt),{icon:"fa-brands fa-square-instagram","fixed-width":""})]),Bm]),b("div",Wm,[b("a",Um,[te(ue(bt),{icon:"fa-brands fa-square-github","fixed-width":""})]),Ym]),b("div",Km,[b("a",Vm,[te(ue(bt),{icon:"fa-solid fa-envelope","fixed-width":""})]),qm]),b("div",Jm,[b("a",Gm,[te(ue(bt),{icon:"fa-solid fa-file","fixed-width":""})]),Xm])])])])])])}}},Qm=ys(Zm,[["__scopeId","data-v-cf257d2e"]]);var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ws={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(eh,function(){var n=function(){try{return document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")===0}catch{return!1}}();return{install:function(r){var a=function(o,s){s.arg==="src"&&o.nodeName==="IMG"&&n&&(o.src=s.value),s.arg==="bg"&&n&&(o.style.backgroundImage="url("+s.value+")"),s.arg==="bgs"&&(o.style.backgroundImage="url("+(n?s.value[0]:s.value[1])+")")},i=+r.version.split(".")[0]>=3?{mounted:a}:{inserted:a};r.directive("webp",i)}}})})(ws);const th=ws.exports,_s=Zc(Qm);_s.use(th);_s.mount("#app");
