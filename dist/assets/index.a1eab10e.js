(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xs=fa(qs);function ho(e){return!!e||e===""}function ua(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=pe(r)?Zs(r):ua(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(pe(e))return e;if(ne(e))return e}}const Js=/;(?![^(]*\))/g,Gs=/:(.+)/;function Zs(e){const t={};return e.split(Js).forEach(n=>{if(n){const r=n.split(Gs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function da(e){let t="";if(pe(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=da(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tn=e=>pe(e)?e:e==null?"":L(e)||ne(e)&&(e.toString===yo||!H(e.toString))?JSON.stringify(e,go,2):String(e),go=(e,t)=>t&&t.__v_isRef?go(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:vo(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!L(t)&&!wo(t)?String(t):t,X={},Dt=[],Le=()=>{},Qs=()=>!1,el=/^on[^a-z]/,ir=e=>el.test(e),ma=e=>e.startsWith("onUpdate:"),he=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},tl=Object.prototype.hasOwnProperty,U=(e,t)=>tl.call(e,t),L=Array.isArray,zt=e=>or(e)==="[object Map]",vo=e=>or(e)==="[object Set]",H=e=>typeof e=="function",pe=e=>typeof e=="string",ha=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",bo=e=>ne(e)&&H(e.then)&&H(e.catch),yo=Object.prototype.toString,or=e=>yo.call(e),nl=e=>or(e).slice(8,-1),wo=e=>or(e)==="[object Object]",ga=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rl=/-(\w)/g,Ve=sr(e=>e.replace(rl,(t,n)=>n?n.toUpperCase():"")),al=/\B([A-Z])/g,Vt=sr(e=>e.replace(al,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ar=sr(e=>e?`on${lr(e)}`:""),fn=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Xn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_o=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ri;const il=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Be;class ol{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function sl(e,t=Be){t&&t.active&&t.effects.push(e)}const va=e=>{const t=new Set(e);return t.w=0,t.n=0,t},xo=e=>(e.w&ft)>0,ko=e=>(e.n&ft)>0,ll=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ft},cl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];xo(a)&&!ko(a)?a.delete(e):t[n++]=a,a.w&=~ft,a.n&=~ft}t.length=n}},Lr=new WeakMap;let nn=0,ft=1;const $r=30;let Ne;const It=Symbol(""),Dr=Symbol("");class ba{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=lt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,lt=!0,ft=1<<++nn,nn<=$r?ll(this):ai(this),this.fn()}finally{nn<=$r&&cl(this),ft=1<<--nn,Ne=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let lt=!0;const Ao=[];function qt(){Ao.push(lt),lt=!1}function Xt(){const e=Ao.pop();lt=e===void 0?!0:e}function Ee(e,t,n){if(lt&&Ne){let r=Lr.get(e);r||Lr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=va()),Co(a)}}function Co(e,t){let n=!1;nn<=$r?ko(e)||(e.n|=ft,n=!xo(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Ge(e,t,n,r,a,i){const o=Lr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?ga(n)&&s.push(o.get("length")):(s.push(o.get(It)),zt(e)&&s.push(o.get(Dr)));break;case"delete":L(e)||(s.push(o.get(It)),zt(e)&&s.push(o.get(Dr)));break;case"set":zt(e)&&s.push(o.get(It));break}if(s.length===1)s[0]&&zr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);zr(va(l))}}function zr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const fl=fa("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ha)),ul=ya(),dl=ya(!1,!0),ml=ya(!0),oi=pl();function pl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qt();const r=K(this)[t].apply(this,n);return Xt(),r}}),e}function ya(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Il:To:t?Io:Po).get(r))return r;const o=L(r);if(!e&&o&&U(oi,a))return Reflect.get(oi,a,i);const s=Reflect.get(r,a,i);return(ha(a)?Eo.has(a):fl(a))||(e||Ee(r,"get",a),t)?s:ye(s)?o&&ga(a)?s:s.value:ne(s)?e?No(s):xa(s):s}}const hl=So(),gl=So(!0);function So(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&ye(o)&&!ye(a))return!1;if(!e&&(!Jn(a)&&!Ut(a)&&(o=K(o),a=K(a)),!L(n)&&ye(o)&&!ye(a)))return o.value=a,!0;const s=L(n)&&ga(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?fn(a,o)&&Ge(n,"set",r,a):Ge(n,"add",r,a)),l}}function vl(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function bl(e,t){const n=Reflect.has(e,t);return(!ha(t)||!Eo.has(t))&&Ee(e,"has",t),n}function yl(e){return Ee(e,"iterate",L(e)?"length":It),Reflect.ownKeys(e)}const Oo={get:ul,set:hl,deleteProperty:vl,has:bl,ownKeys:yl},wl={get:ml,set(e,t){return!0},deleteProperty(e,t){return!0}},_l=he({},Oo,{get:dl,set:gl}),wa=e=>e,cr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=cr(a),s=r?wa:n?Aa:un;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Pn(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function In(e,t=!1){return e=e.__v_raw,!t&&Ee(K(e),"iterate",It),Reflect.get(e,"size",e)}function si(e){e=K(e);const t=K(this);return cr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function li(e,t){t=K(t);const n=K(this),{has:r,get:a}=cr(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?fn(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function ci(e){const t=K(this),{has:n,get:r}=cr(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function fi(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Tn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?wa:e?Aa:un;return!e&&Ee(s,"iterate",It),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Nn(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?wa:t?Aa:un;return!t&&Ee(i,"iterate",l?Dr:It),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function xl(){const e={get(i){return On(this,i)},get size(){return In(this)},has:Pn,add:si,set:li,delete:ci,clear:fi,forEach:Tn(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return In(this)},has:Pn,add:si,set:li,delete:ci,clear:fi,forEach:Tn(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return In(this,!0)},has(i){return Pn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:Tn(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return In(this,!0)},has(i){return Pn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:Tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Nn(i,!1,!1),n[i]=Nn(i,!0,!1),t[i]=Nn(i,!1,!0),r[i]=Nn(i,!0,!0)}),[e,n,t,r]}const[kl,Al,Cl,El]=xl();function _a(e,t){const n=t?e?El:Cl:e?Al:kl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Sl={get:_a(!1,!1)},Ol={get:_a(!1,!0)},Pl={get:_a(!0,!1)},Po=new WeakMap,Io=new WeakMap,To=new WeakMap,Il=new WeakMap;function Tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(e){return e.__v_skip||!Object.isExtensible(e)?0:Tl(nl(e))}function xa(e){return Ut(e)?e:ka(e,!1,Oo,Sl,Po)}function Ml(e){return ka(e,!1,_l,Ol,Io)}function No(e){return ka(e,!0,wl,Pl,To)}function ka(e,t,n,r,a){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Nl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Rt(e){return Ut(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Jn(e){return!!(e&&e.__v_isShallow)}function Mo(e){return Rt(e)||Ut(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function jo(e){return Xn(e,"__v_skip",!0),e}const un=e=>ne(e)?xa(e):e,Aa=e=>ne(e)?No(e):e;function Fo(e){lt&&Ne&&(e=K(e),Co(e.dep||(e.dep=va())))}function Lo(e,t){e=K(e),e.dep&&zr(e.dep)}function ye(e){return!!(e&&e.__v_isRef===!0)}function We(e){return jl(e,!1)}function jl(e,t){return ye(e)?e:new Fl(e,t)}class Fl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:un(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Jn(t)||Ut(t);t=n?t:K(t),fn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:un(t),Lo(this))}}function ve(e){return ye(e)?e.value:e}const Ll={get:(e,t,n)=>ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ye(a)&&!ye(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function $o(e){return Rt(e)?e:new Proxy(e,Ll)}var Do;class $l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Do]=!1,this._dirty=!0,this.effect=new ba(t,()=>{this._dirty||(this._dirty=!0,Lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Do="__v_isReadonly";function Dl(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new $l(r,a,i||!a,n)}function ct(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){fr(i,t,n)}return a}function Ie(e,t,n,r){if(H(e)){const i=ct(e,t,n,r);return i&&bo(i)&&i.catch(o=>{fr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function fr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ct(l,null,10,[e,o,s]);return}}zl(e,n,a,r)}function zl(e,t,n,r=!0){console.error(e)}let dn=!1,Rr=!1;const be=[];let Ye=0;const Ht=[];let Je=null,xt=0;const zo=Promise.resolve();let Ca=null;function Rl(e){const t=Ca||zo;return e?t.then(this?e.bind(this):e):t}function Hl(e){let t=Ye+1,n=be.length;for(;t<n;){const r=t+n>>>1;mn(be[r])<e?t=r+1:n=r}return t}function Ea(e){(!be.length||!be.includes(e,dn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?be.push(e):be.splice(Hl(e.id),0,e),Ro())}function Ro(){!dn&&!Rr&&(Rr=!0,Ca=zo.then(Bo))}function Bl(e){const t=be.indexOf(e);t>Ye&&be.splice(t,1)}function Wl(e){L(e)?Ht.push(...e):(!Je||!Je.includes(e,e.allowRecurse?xt+1:xt))&&Ht.push(e),Ro()}function ui(e,t=dn?Ye+1:0){for(;t<be.length;t++){const n=be[t];n&&n.pre&&(be.splice(t,1),t--,n())}}function Ho(e){if(Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>mn(n)-mn(r)),xt=0;xt<Je.length;xt++)Je[xt]();Je=null,xt=0}}const mn=e=>e.id==null?1/0:e.id,Ul=(e,t)=>{const n=mn(e)-mn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Rr=!1,dn=!0,be.sort(Ul);const t=Le;try{for(Ye=0;Ye<be.length;Ye++){const n=be[Ye];n&&n.active!==!1&&ct(n,null,14)}}finally{Ye=0,be.length=0,Ho(),dn=!1,Ca=null,(be.length||Ht.length)&&Bo()}}function Yl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||X;p&&(a=n.map(g=>g.trim())),m&&(a=n.map(_o))}let s,l=r[s=Ar(t)]||r[s=Ar(Ve(t))];!l&&i&&(l=r[s=Ar(Vt(t))]),l&&Ie(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(f,e,6,a)}}function Wo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const u=Wo(f,t,!0);u&&(s=!0,he(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ne(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):he(o,i),ne(e)&&r.set(e,o),o)}function ur(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Vt(t))||U(e,t))}let Pe=null,dr=null;function Gn(e){const t=Pe;return Pe=e,dr=e&&e.type.__scopeId||null,t}function Kl(e){dr=e}function Vl(){dr=null}function Uo(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&xi(-1);const i=Gn(t);let o;try{o=e(...a)}finally{Gn(i),r._d&&xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let z,w;const S=Gn(e);try{if(n.shapeFlag&4){const $=a||r;z=Ue(u.call($,$,m,i,g,p,P)),w=l}else{const $=t;z=Ue($.length>1?$(i,{attrs:l,slots:s,emit:f}):$(i,null)),w=t.props?l:ql(l)}}catch($){on.length=0,fr($,e,1),z=Z($e)}let F=z;if(w&&C!==!1){const $=Object.keys(w),{shapeFlag:B}=F;$.length&&B&7&&(o&&$.some(ma)&&(w=Xl(w,o)),F=ut(F,w))}return n.dirs&&(F=ut(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),z=F,Gn(S),z}const ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},Xl=(e,t)=>{const n={};for(const r in e)(!ma(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?di(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!ur(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?di(r,o,f):!0:!!o;return!1}function di(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ur(n,i))return!0}return!1}function Gl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zl=e=>e.__isSuspense;function Ql(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Wl(e)}function ec(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Sr(e,t,n=!1){const r=me||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}function tc(e,t){return mr(e,null,t)}function nc(e,t){return mr(e,null,{flush:"post"})}const mi={};function Un(e,t,n){return mr(e,t,n)}function mr(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){const s=me;let l,f=!1,u=!1;if(ye(e)?(l=()=>e.value,f=Jn(e)):Rt(e)?(l=()=>e,r=!0):L(e)?(u=!0,f=e.some(w=>Rt(w)||Jn(w)),l=()=>e.map(w=>{if(ye(w))return w.value;if(Rt(w))return Et(w);if(H(w))return ct(w,s,2)})):H(e)?t?l=()=>ct(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[p])}:l=Le,t&&r){const w=l;l=()=>Et(w())}let m,p=w=>{m=z.onStop=()=>{ct(w,s,4)}};if(vn)return p=Le,t?n&&Ie(t,s,3,[l(),u?[]:void 0,p]):l(),Le;let g=u?[]:mi;const P=()=>{if(!!z.active)if(t){const w=z.run();(r||f||(u?w.some((S,F)=>fn(S,g[F])):fn(w,g)))&&(m&&m(),Ie(t,s,3,[w,g===mi?void 0:g,p]),g=w)}else z.run()};P.allowRecurse=!!t;let C;a==="sync"?C=P:a==="post"?C=()=>xe(P,s&&s.suspense):(P.pre=!0,s&&(P.id=s.uid),C=()=>Ea(P));const z=new ba(l,C);return t?n?P():g=z.run():a==="post"?xe(z.run.bind(z),s&&s.suspense):z.run(),()=>{z.stop(),s&&s.scope&&pa(s.scope.effects,z)}}function rc(e,t,n){const r=this.proxy,a=pe(e)?e.includes(".")?Yo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=me;Yt(this);const s=mr(a,i.bind(r),n);return o?Yt(o):Tt(),s}function Yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Et(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Et(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(vo(e)||zt(e))e.forEach(n=>{Et(n,t)});else if(wo(e))for(const n in e)Et(e[n],t);return e}function ac(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oa(()=>{e.isMounted=!0}),Jo(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],ic={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},setup(e,{slots:t}){const n=ls(),r=ac();let a;return()=>{const i=t.default&&qo(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const C of i)if(C.type!==$e){o=C;break}}const s=K(e),{mode:l}=s;if(r.isLeaving)return Or(o);const f=pi(o);if(!f)return Or(o);const u=Hr(f,s,r,n);Br(f,u);const m=n.subTree,p=m&&pi(m);let g=!1;const{getTransitionKey:P}=f.type;if(P){const C=P();a===void 0?a=C:C!==a&&(a=C,g=!0)}if(p&&p.type!==$e&&(!kt(f,p)||g)){const C=Hr(p,s,r,n);if(Br(p,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},Or(o);l==="in-out"&&f.type!==$e&&(C.delayLeave=(z,w,S)=>{const F=Vo(r,p);F[String(p.key)]=p,z._leaveCb=()=>{w(),z._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Ko=ic;function Vo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Hr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:g,onLeaveCancelled:P,onBeforeAppear:C,onAppear:z,onAfterAppear:w,onAppearCancelled:S}=t,F=String(e.key),$=Vo(n,e),B=(R,Y)=>{R&&Ie(R,r,9,Y)},ce=(R,Y)=>{const q=Y[1];B(R,Y),L(R)?R.every(ge=>ge.length<=1)&&q():R.length<=1&&q()},ae={mode:i,persisted:o,beforeEnter(R){let Y=s;if(!n.isMounted)if(a)Y=C||s;else return;R._leaveCb&&R._leaveCb(!0);const q=$[F];q&&kt(e,q)&&q.el._leaveCb&&q.el._leaveCb(),B(Y,[R])},enter(R){let Y=l,q=f,ge=u;if(!n.isMounted)if(a)Y=z||l,q=w||f,ge=S||u;else return;let N=!1;const re=R._enterCb=ke=>{N||(N=!0,ke?B(ge,[R]):B(q,[R]),ae.delayedLeave&&ae.delayedLeave(),R._enterCb=void 0)};Y?ce(Y,[R,re]):re()},leave(R,Y){const q=String(e.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return Y();B(m,[R]);let ge=!1;const N=R._leaveCb=re=>{ge||(ge=!0,Y(),re?B(P,[R]):B(g,[R]),R._leaveCb=void 0,$[q]===e&&delete $[q])};$[q]=e,p?ce(p,[R,N]):N()},clone(R){return Hr(R,t,n,r)}};return ae}function Or(e){if(pr(e))return e=ut(e),e.children=null,e}function pi(e){return pr(e)?e.children?e.children[0]:void 0:e}function Br(e,t){e.shapeFlag&6&&e.component?Br(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qo(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===fe?(o.patchFlag&128&&a++,r=r.concat(qo(o.children,t,s))):(t||o.type!==$e)&&r.push(s!=null?ut(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Sa(e){return H(e)?{setup:e,name:e.name}:e}const Yn=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function oc(e,t){Xo(e,"a",t)}function sc(e,t){Xo(e,"da",t)}function Xo(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)pr(a.parent.vnode)&&lc(r,t,n,a),a=a.parent}}function lc(e,t,n,r){const a=hr(t,e,r,!0);Pa(()=>{pa(r[t],a)},n)}function hr(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;qt(),Yt(n);const s=Ie(t,n,e,o);return Tt(),Xt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=me)=>(!vn||e==="sp")&&hr(e,(...r)=>t(...r),n),cc=tt("bm"),Oa=tt("m"),fc=tt("bu"),uc=tt("u"),Jo=tt("bum"),Pa=tt("um"),dc=tt("sp"),mc=tt("rtg"),pc=tt("rtc");function hc(e,t=me){hr("ec",e,t)}function Bt(e,t){const n=Pe;if(n===null)return e;const r=vr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=X]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Et(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(qt(),Ie(l,n,8,[e.el,s,e,t]),Xt())}}const gc="components",vc="directives",bc=Symbol();function Ia(e){return yc(vc,e)}function yc(e,t,n=!0,r=!1){const a=Pe||me;if(a){const i=a.type;if(e===gc){const s=Xc(i,!1);if(s&&(s===t||s===Ve(t)||s===lr(Ve(t))))return i}const o=hi(a[e]||i[e],t)||hi(a.appContext[e],t);return!o&&r?i:o}}function hi(e,t){return e&&(e[t]||e[Ve(t)]||e[lr(Ve(t))])}function pn(e,t,n,r){let a;const i=n&&n[r];if(L(e)||pe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ne(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?cs(e)?vr(e)||e.proxy:Wr(e.parent):null,Zn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Ta(e),$forceUpdate:e=>e.f||(e.f=()=>Ea(e.update)),$nextTick:e=>e.n||(e.n=Rl.bind(e.proxy)),$watch:e=>rc.bind(e)}),wc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==X&&U(r,t))return o[t]=1,r[t];if(a!==X&&U(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&U(f,t))return o[t]=3,i[t];if(n!==X&&U(n,t))return o[t]=4,n[t];Ur&&(o[t]=0)}}const u=Zn[t];let m,p;if(u)return t==="$attrs"&&Ee(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==X&&U(a,t)?(a[t]=n,!0):r!==X&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&U(e,o)||t!==X&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Zn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ur=!0;function _c(e){const t=Ta(e),n=e.proxy,r=e.ctx;Ur=!1,t.beforeCreate&&gi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:z,beforeDestroy:w,beforeUnmount:S,destroyed:F,unmounted:$,render:B,renderTracked:ce,renderTriggered:ae,errorCaptured:R,serverPrefetch:Y,expose:q,inheritAttrs:ge,components:N,directives:re,filters:ke}=t;if(f&&xc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];H(J)&&(r[ie]=J.bind(n))}if(a){const ie=a.call(n,n);ne(ie)&&(e.data=xa(ie))}if(Ur=!0,i)for(const ie in i){const J=i[ie],ht=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):Le,En=!H(J)&&H(J.set)?J.set.bind(n):Le,gt=Ce({get:ht,set:En});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>gt.value,set:De=>gt.value=De})}if(s)for(const ie in s)Go(s[ie],r,n,ie);if(l){const ie=H(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(J=>{ec(J,ie[J])})}u&&gi(u,e,"c");function de(ie,J){L(J)?J.forEach(ht=>ie(ht.bind(n))):J&&ie(J.bind(n))}if(de(cc,m),de(Oa,p),de(fc,g),de(uc,P),de(oc,C),de(sc,z),de(hc,R),de(pc,ce),de(mc,ae),de(Jo,S),de(Pa,$),de(dc,Y),L(q))if(q.length){const ie=e.exposed||(e.exposed={});q.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:ht=>n[J]=ht})})}else e.exposed||(e.exposed={});B&&e.render===Le&&(e.render=B),ge!=null&&(e.inheritAttrs=ge),N&&(e.components=N),re&&(e.directives=re)}function xc(e,t,n=Le,r=!1){L(e)&&(e=Yr(e));for(const a in e){const i=e[a];let o;ne(i)?"default"in i?o=Sr(i.from||a,i.default,!0):o=Sr(i.from||a):o=Sr(i),ye(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function gi(e,t,n){Ie(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Go(e,t,n,r){const a=r.includes(".")?Yo(n,r):()=>n[r];if(pe(e)){const i=t[e];H(i)&&Un(a,i)}else if(H(e))Un(a,e.bind(n));else if(ne(e))if(L(e))e.forEach(i=>Go(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Un(a,i,e)}}function Ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Qn(l,f,o,!0)),Qn(l,t,o)),ne(t)&&i.set(t,l),l}function Qn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Qn(e,i,n,!0),a&&a.forEach(o=>Qn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=kc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const kc={data:vi,props:_t,emits:_t,methods:_t,computed:_t,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:_t,directives:_t,watch:Cc,provide:vi,inject:Ac};function vi(e,t){return t?e?function(){return he(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ac(e,t){return _t(Yr(e),Yr(t))}function Yr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function _t(e,t){return e?he(he(Object.create(null),e),t):t}function Cc(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function Ec(e,t,n,r=!1){const a={},i={};Xn(i,gr,1),e.propsDefaults=Object.create(null),Zo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ml(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Sc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(ur(e.emitsOptions,p))continue;const g=t[p];if(l)if(U(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=Ve(p);a[P]=Kr(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{Zo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=Vt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],f=!0)}f&&Ge(e,"set","$attrs")}function Zo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Wn(l))continue;const f=t[l];let u;a&&U(a,u=Ve(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:ur(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=K(n),f=s||X;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Kr(a,l,m,f[m],e,!U(f,m))}}return o}function Kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Yt(a),r=f[n]=l.call(null,t),Tt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function Qo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const u=m=>{l=!0;const[p,g]=Qo(m,t,!0);he(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ne(e)&&r.set(e,Dt),Dt;if(L(i))for(let u=0;u<i.length;u++){const m=Ve(i[u]);bi(m)&&(o[m]=X)}else if(i)for(const u in i){const m=Ve(u);if(bi(m)){const p=i[u],g=o[m]=L(p)||H(p)?{type:p}:p;if(g){const P=_i(Boolean,g.type),C=_i(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||U(g,"default"))&&s.push(m)}}}const f=[o,s];return ne(e)&&r.set(e,f),f}function bi(e){return e[0]!=="$"}function yi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function wi(e,t){return yi(e)===yi(t)}function _i(e,t){return L(t)?t.findIndex(n=>wi(n,e)):H(t)&&wi(t,e)?0:-1}const es=e=>e[0]==="_"||e==="$stable",Na=e=>L(e)?e.map(Ue):[Ue(e)],Oc=(e,t,n)=>{if(t._n)return t;const r=Uo((...a)=>Na(t(...a)),n);return r._c=!1,r},ts=(e,t,n)=>{const r=e._ctx;for(const a in e){if(es(a))continue;const i=e[a];if(H(i))t[a]=Oc(a,i,r);else if(i!=null){const o=Na(i);t[a]=()=>o}}},ns=(e,t)=>{const n=Na(t);e.slots.default=()=>n},Pc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),Xn(t,"_",n)):ts(t,e.slots={})}else e.slots={},t&&ns(e,t);Xn(e.slots,gr,1)},Ic=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(he(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ts(t,a)),o=t}else t&&(ns(e,t),o={default:1});if(i)for(const s in a)!es(s)&&!(s in o)&&delete a[s]};function rs(){return{app:null,config:{isNativeTag:Qs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tc=0;function Nc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ne(a)&&(a=null);const i=rs(),o=new Set;let s=!1;const l=i.app={_uid:Tc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Gc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...u)):H(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=Z(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,vr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Vr(e,t,n,r,a=!1){if(L(e)){e.forEach((p,g)=>Vr(p,t&&(L(t)?t[g]:t),n,r,a));return}if(Yn(r)&&!a)return;const i=r.shapeFlag&4?vr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(pe(f)?(u[f]=null,U(m,f)&&(m[f]=null)):ye(f)&&(f.value=null)),H(l))ct(l,s,12,[o,u]);else{const p=pe(l),g=ye(l);if(p||g){const P=()=>{if(e.f){const C=p?U(m,l)?m[l]:u[l]:l.value;a?L(C)&&pa(C,i):L(C)?C.includes(i)||C.push(i):p?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(P.id=-1,xe(P,n)):P()}}}const xe=Ql;function Mc(e){return jc(e)}function jc(e,t){const n=il();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:g=Le,insertStaticContent:P}=e,C=(c,d,h,b=null,v=null,x=null,E=!1,_=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!kt(c,d)&&(b=Sn(c),De(c,v,x,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:y,ref:M,shapeFlag:I}=d;switch(y){case Ma:z(c,d,h,b);break;case $e:w(c,d,h,b);break;case an:c==null&&S(d,h,b,E);break;case fe:N(c,d,h,b,v,x,E,_,A);break;default:I&1?B(c,d,h,b,v,x,E,_,A):I&6?re(c,d,h,b,v,x,E,_,A):(I&64||I&128)&&y.process(c,d,h,b,v,x,E,_,A,jt)}M!=null&&v&&Vr(M,c&&c.ref,x,d||c,!d)},z=(c,d,h,b)=>{if(c==null)r(d.el=s(d.children),h,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},w=(c,d,h,b)=>{c==null?r(d.el=l(d.children||""),h,b):d.el=c.el},S=(c,d,h,b)=>{[c.el,c.anchor]=P(c.children,d,h,b,c.el,c.anchor)},F=({el:c,anchor:d},h,b)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,b),c=v;r(d,h,b)},$=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},B=(c,d,h,b,v,x,E,_,A)=>{E=E||d.type==="svg",c==null?ce(d,h,b,v,x,E,_,A):Y(c,d,v,x,E,_,A)},ce=(c,d,h,b,v,x,E,_)=>{let A,y;const{type:M,props:I,shapeFlag:j,transition:D,dirs:W}=c;if(A=c.el=o(c.type,x,I&&I.is,I),j&8?u(A,c.children):j&16&&R(c.children,A,null,b,v,x&&M!=="foreignObject",E,_),W&&vt(c,null,b,"created"),I){for(const V in I)V!=="value"&&!Wn(V)&&i(A,V,null,I[V],x,c.children,b,v,Xe);"value"in I&&i(A,"value",null,I.value),(y=I.onVnodeBeforeMount)&&Re(y,b,c)}ae(A,c,c.scopeId,E,b),W&&vt(c,null,b,"beforeMount");const G=(!v||v&&!v.pendingBranch)&&D&&!D.persisted;G&&D.beforeEnter(A),r(A,d,h),((y=I&&I.onVnodeMounted)||G||W)&&xe(()=>{y&&Re(y,b,c),G&&D.enter(A),W&&vt(c,null,b,"mounted")},v)},ae=(c,d,h,b,v)=>{if(h&&g(c,h),b)for(let x=0;x<b.length;x++)g(c,b[x]);if(v){let x=v.subTree;if(d===x){const E=v.vnode;ae(c,E,E.scopeId,E.slotScopeIds,v.parent)}}},R=(c,d,h,b,v,x,E,_,A=0)=>{for(let y=A;y<c.length;y++){const M=c[y]=_?st(c[y]):Ue(c[y]);C(null,M,d,h,b,v,x,E,_)}},Y=(c,d,h,b,v,x,E)=>{const _=d.el=c.el;let{patchFlag:A,dynamicChildren:y,dirs:M}=d;A|=c.patchFlag&16;const I=c.props||X,j=d.props||X;let D;h&&bt(h,!1),(D=j.onVnodeBeforeUpdate)&&Re(D,h,d,c),M&&vt(d,c,h,"beforeUpdate"),h&&bt(h,!0);const W=v&&d.type!=="foreignObject";if(y?q(c.dynamicChildren,y,_,h,b,W,x):E||J(c,d,_,null,h,b,W,x,!1),A>0){if(A&16)ge(_,d,I,j,h,b,v);else if(A&2&&I.class!==j.class&&i(_,"class",null,j.class,v),A&4&&i(_,"style",I.style,j.style,v),A&8){const G=d.dynamicProps;for(let V=0;V<G.length;V++){const se=G[V],Te=I[se],Ft=j[se];(Ft!==Te||se==="value")&&i(_,se,Te,Ft,v,c.children,h,b,Xe)}}A&1&&c.children!==d.children&&u(_,d.children)}else!E&&y==null&&ge(_,d,I,j,h,b,v);((D=j.onVnodeUpdated)||M)&&xe(()=>{D&&Re(D,h,d,c),M&&vt(d,c,h,"updated")},b)},q=(c,d,h,b,v,x,E)=>{for(let _=0;_<d.length;_++){const A=c[_],y=d[_],M=A.el&&(A.type===fe||!kt(A,y)||A.shapeFlag&70)?m(A.el):h;C(A,y,M,null,b,v,x,E,!0)}},ge=(c,d,h,b,v,x,E)=>{if(h!==b){if(h!==X)for(const _ in h)!Wn(_)&&!(_ in b)&&i(c,_,h[_],null,E,d.children,v,x,Xe);for(const _ in b){if(Wn(_))continue;const A=b[_],y=h[_];A!==y&&_!=="value"&&i(c,_,y,A,E,d.children,v,x,Xe)}"value"in b&&i(c,"value",h.value,b.value)}},N=(c,d,h,b,v,x,E,_,A)=>{const y=d.el=c?c.el:s(""),M=d.anchor=c?c.anchor:s("");let{patchFlag:I,dynamicChildren:j,slotScopeIds:D}=d;D&&(_=_?_.concat(D):D),c==null?(r(y,h,b),r(M,h,b),R(d.children,h,M,v,x,E,_,A)):I>0&&I&64&&j&&c.dynamicChildren?(q(c.dynamicChildren,j,h,v,x,E,_),(d.key!=null||v&&d===v.subTree)&&as(c,d,!0)):J(c,d,h,M,v,x,E,_,A)},re=(c,d,h,b,v,x,E,_,A)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,h,b,E,A):ke(d,h,b,v,x,E,A):Gt(c,d,A)},ke=(c,d,h,b,v,x,E)=>{const _=c.component=Uc(c,b,v);if(pr(c)&&(_.ctx.renderer=jt),Yc(_),_.asyncDep){if(v&&v.registerDep(_,de),!c.el){const A=_.subTree=Z($e);w(null,A,d,h)}return}de(_,c,d,h,v,x,E)},Gt=(c,d,h)=>{const b=d.component=c.component;if(Jl(c,d,h))if(b.asyncDep&&!b.asyncResolved){ie(b,d,h);return}else b.next=d,Bl(b.update),b.update();else d.el=c.el,b.vnode=d},de=(c,d,h,b,v,x,E)=>{const _=()=>{if(c.isMounted){let{next:M,bu:I,u:j,parent:D,vnode:W}=c,G=M,V;bt(c,!1),M?(M.el=W.el,ie(c,M,E)):M=W,I&&Cr(I),(V=M.props&&M.props.onVnodeBeforeUpdate)&&Re(V,D,M,W),bt(c,!0);const se=Er(c),Te=c.subTree;c.subTree=se,C(Te,se,m(Te.el),Sn(Te),c,v,x),M.el=se.el,G===null&&Gl(c,se.el),j&&xe(j,v),(V=M.props&&M.props.onVnodeUpdated)&&xe(()=>Re(V,D,M,W),v)}else{let M;const{el:I,props:j}=d,{bm:D,m:W,parent:G}=c,V=Yn(d);if(bt(c,!1),D&&Cr(D),!V&&(M=j&&j.onVnodeBeforeMount)&&Re(M,G,d),bt(c,!0),I&&kr){const se=()=>{c.subTree=Er(c),kr(I,c.subTree,c,v,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=Er(c);C(null,se,h,b,c,v,x),d.el=se.el}if(W&&xe(W,v),!V&&(M=j&&j.onVnodeMounted)){const se=d;xe(()=>Re(M,G,se),v)}(d.shapeFlag&256||G&&Yn(G.vnode)&&G.vnode.shapeFlag&256)&&c.a&&xe(c.a,v),c.isMounted=!0,d=h=b=null}},A=c.effect=new ba(_,()=>Ea(y),c.scope),y=c.update=()=>A.run();y.id=c.uid,bt(c,!0),y()},ie=(c,d,h)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Sc(c,d.props,b,h),Ic(c,d.children,h),qt(),ui(),Xt()},J=(c,d,h,b,v,x,E,_,A=!1)=>{const y=c&&c.children,M=c?c.shapeFlag:0,I=d.children,{patchFlag:j,shapeFlag:D}=d;if(j>0){if(j&128){En(y,I,h,b,v,x,E,_,A);return}else if(j&256){ht(y,I,h,b,v,x,E,_,A);return}}D&8?(M&16&&Xe(y,v,x),I!==y&&u(h,I)):M&16?D&16?En(y,I,h,b,v,x,E,_,A):Xe(y,v,x,!0):(M&8&&u(h,""),D&16&&R(I,h,b,v,x,E,_,A))},ht=(c,d,h,b,v,x,E,_,A)=>{c=c||Dt,d=d||Dt;const y=c.length,M=d.length,I=Math.min(y,M);let j;for(j=0;j<I;j++){const D=d[j]=A?st(d[j]):Ue(d[j]);C(c[j],D,h,null,v,x,E,_,A)}y>M?Xe(c,v,x,!0,!1,I):R(d,h,b,v,x,E,_,A,I)},En=(c,d,h,b,v,x,E,_,A)=>{let y=0;const M=d.length;let I=c.length-1,j=M-1;for(;y<=I&&y<=j;){const D=c[y],W=d[y]=A?st(d[y]):Ue(d[y]);if(kt(D,W))C(D,W,h,null,v,x,E,_,A);else break;y++}for(;y<=I&&y<=j;){const D=c[I],W=d[j]=A?st(d[j]):Ue(d[j]);if(kt(D,W))C(D,W,h,null,v,x,E,_,A);else break;I--,j--}if(y>I){if(y<=j){const D=j+1,W=D<M?d[D].el:b;for(;y<=j;)C(null,d[y]=A?st(d[y]):Ue(d[y]),h,W,v,x,E,_,A),y++}}else if(y>j)for(;y<=I;)De(c[y],v,x,!0),y++;else{const D=y,W=y,G=new Map;for(y=W;y<=j;y++){const Ae=d[y]=A?st(d[y]):Ue(d[y]);Ae.key!=null&&G.set(Ae.key,y)}let V,se=0;const Te=j-W+1;let Ft=!1,ei=0;const Zt=new Array(Te);for(y=0;y<Te;y++)Zt[y]=0;for(y=D;y<=I;y++){const Ae=c[y];if(se>=Te){De(Ae,v,x,!0);continue}let ze;if(Ae.key!=null)ze=G.get(Ae.key);else for(V=W;V<=j;V++)if(Zt[V-W]===0&&kt(Ae,d[V])){ze=V;break}ze===void 0?De(Ae,v,x,!0):(Zt[ze-W]=y+1,ze>=ei?ei=ze:Ft=!0,C(Ae,d[ze],h,null,v,x,E,_,A),se++)}const ti=Ft?Fc(Zt):Dt;for(V=ti.length-1,y=Te-1;y>=0;y--){const Ae=W+y,ze=d[Ae],ni=Ae+1<M?d[Ae+1].el:b;Zt[y]===0?C(null,ze,h,ni,v,x,E,_,A):Ft&&(V<0||y!==ti[V]?gt(ze,h,ni,2):V--)}}},gt=(c,d,h,b,v=null)=>{const{el:x,type:E,transition:_,children:A,shapeFlag:y}=c;if(y&6){gt(c.component.subTree,d,h,b);return}if(y&128){c.suspense.move(d,h,b);return}if(y&64){E.move(c,d,h,jt);return}if(E===fe){r(x,d,h);for(let I=0;I<A.length;I++)gt(A[I],d,h,b);r(c.anchor,d,h);return}if(E===an){F(c,d,h);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(x),r(x,d,h),xe(()=>_.enter(x),v);else{const{leave:I,delayLeave:j,afterLeave:D}=_,W=()=>r(x,d,h),G=()=>{I(x,()=>{W(),D&&D()})};j?j(x,W,G):G()}else r(x,d,h)},De=(c,d,h,b=!1,v=!1)=>{const{type:x,props:E,ref:_,children:A,dynamicChildren:y,shapeFlag:M,patchFlag:I,dirs:j}=c;if(_!=null&&Vr(_,null,h,c,!0),M&256){d.ctx.deactivate(c);return}const D=M&1&&j,W=!Yn(c);let G;if(W&&(G=E&&E.onVnodeBeforeUnmount)&&Re(G,d,c),M&6)Vs(c.component,h,b);else{if(M&128){c.suspense.unmount(h,b);return}D&&vt(c,null,d,"beforeUnmount"),M&64?c.type.remove(c,d,h,v,jt,b):y&&(x!==fe||I>0&&I&64)?Xe(y,d,h,!1,!0):(x===fe&&I&384||!v&&M&16)&&Xe(A,d,h),b&&Za(c)}(W&&(G=E&&E.onVnodeUnmounted)||D)&&xe(()=>{G&&Re(G,d,c),D&&vt(c,null,d,"unmounted")},h)},Za=c=>{const{type:d,el:h,anchor:b,transition:v}=c;if(d===fe){Ks(h,b);return}if(d===an){$(c);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,A=()=>E(h,x);_?_(c.el,x,A):A()}else x()},Ks=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},Vs=(c,d,h)=>{const{bum:b,scope:v,update:x,subTree:E,um:_}=c;b&&Cr(b),v.stop(),x&&(x.active=!1,De(E,c,d,h)),_&&xe(_,d),xe(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Xe=(c,d,h,b=!1,v=!1,x=0)=>{for(let E=x;E<c.length;E++)De(c[E],d,h,b,v)},Sn=c=>c.shapeFlag&6?Sn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Qa=(c,d,h)=>{c==null?d._vnode&&De(d._vnode,null,null,!0):C(d._vnode||null,c,d,null,null,null,h),ui(),Ho(),d._vnode=c},jt={p:C,um:De,m:gt,r:Za,mt:ke,mc:R,pc:J,pbc:q,n:Sn,o:e};let xr,kr;return t&&([xr,kr]=t(jt)),{render:Qa,hydrate:xr,createApp:Nc(Qa,xr)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function as(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||as(o,s))}}function Fc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Lc=e=>e.__isTeleport,fe=Symbol(void 0),Ma=Symbol(void 0),$e=Symbol(void 0),an=Symbol(void 0),on=[];let je=null;function Q(e=!1){on.push(je=e?null:[])}function $c(){on.pop(),je=on[on.length-1]||null}let hn=1;function xi(e){hn+=e}function is(e){return e.dynamicChildren=hn>0?je||Dt:null,$c(),hn>0&&je&&je.push(e),e}function le(e,t,n,r,a,i){return is(k(e,t,n,r,a,i,!0))}function gn(e,t,n,r,a){return is(Z(e,t,n,r,a,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const gr="__vInternal",os=({key:e})=>e!=null?e:null,Kn=({ref:e,ref_key:t,ref_for:n})=>e!=null?pe(e)||ye(e)||H(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,a=null,i=e===fe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&Kn(t),scopeId:dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ja(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),hn>0&&!o&&je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&je.push(l),l}const Z=Dc;function Dc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===bc)&&(e=$e),qr(e)){const s=ut(e,t,!0);return n&&ja(s,n),hn>0&&!i&&je&&(s.shapeFlag&6?je[je.indexOf(e)]=s:je.push(s)),s.patchFlag|=-2,s}if(Jc(e)&&(e=e.__vccOpts),t){t=zc(t);let{class:s,style:l}=t;s&&!pe(s)&&(t.class=da(s)),ne(l)&&(Mo(l)&&!L(l)&&(l=he({},l)),t.style=ua(l))}const o=pe(e)?1:Zl(e)?128:Lc(e)?64:ne(e)?4:H(e)?2:0;return k(e,t,n,r,a,o,i,!0)}function zc(e){return e?Mo(e)||gr in e?he({},e):e:null}function ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Hc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&os(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Kn(t)):[a,Kn(t)]:Kn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor}}function ss(e=" ",t=0){return Z(Ma,null,e,t)}function Rc(e,t){const n=Z(an,null,e);return n.staticCount=t,n}function St(e="",t=!1){return t?(Q(),gn($e,null,e)):Z($e,null,e)}function Ue(e){return e==null||typeof e=="boolean"?Z($e):L(e)?Z(fe,null,e.slice()):typeof e=="object"?st(e):Z(Ma,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ut(e)}function ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ja(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(gr in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[ss(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=da([t.class,r.class]));else if(a==="style")t.style=ua([t.style,r.style]);else if(ir(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Re(e,t,n,r=null){Ie(e,t,7,[n,r])}const Bc=rs();let Wc=0;function Uc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Bc,i={uid:Wc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,a),emitsOptions:Wo(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yl.bind(null,i),e.ce&&e.ce(i),i}let me=null;const ls=()=>me||Pe,Yt=e=>{me=e,e.scope.on()},Tt=()=>{me&&me.scope.off(),me=null};function cs(e){return e.vnode.shapeFlag&4}let vn=!1;function Yc(e,t=!1){vn=t;const{props:n,children:r}=e.vnode,a=cs(e);Ec(e,n,a,t),Pc(e,r);const i=a?Kc(e,t):void 0;return vn=!1,i}function Kc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jo(new Proxy(e.ctx,wc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?qc(e):null;Yt(e),qt();const i=ct(r,e,0,[e.props,a]);if(Xt(),Tt(),bo(i)){if(i.then(Tt,Tt),t)return i.then(o=>{ki(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=i}else ki(e,i,t)}else fs(e,t)}function ki(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=$o(t)),fs(e,n)}let Ai;function fs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ai&&!r.render){const a=r.template||Ta(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=he(he({isCustomElement:i,delimiters:s},o),l);r.render=Ai(a,f)}}e.render=r.render||Le}Yt(e),qt(),_c(e),Xt(),Tt()}function Vc(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function qc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Vc(e))},slots:e.slots,emit:e.emit,expose:t}}function vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($o(jo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)}}))}function Xc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Jc(e){return H(e)&&"__vccOpts"in e}const Ce=(e,t)=>Dl(e,t,vn);function Fa(e,t,n){const r=arguments.length;return r===2?ne(t)&&!L(t)?qr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),Z(e,t,n))}const Gc="3.2.41",Zc="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Ci=At&&At.createElement("template"),Qc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(Zc,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ef(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function tf(e,t,n){const r=e.style,a=pe(n);if(n&&!a){for(const i in n)Xr(r,i,n[i]);if(t&&!pe(t))for(const i in t)n[i]==null&&Xr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ei=/\s*!important$/;function Xr(e,t,n){if(L(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=nf(e,t);Ei.test(n)?e.setProperty(Vt(r),n.replace(Ei,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],Pr={};function nf(e,t){const n=Pr[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Pr[t]=r;r=lr(r);for(let a=0;a<Si.length;a++){const i=Si[a]+r;if(i in e)return Pr[t]=i}return t}const Oi="http://www.w3.org/1999/xlink";function rf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n);else{const i=Xs(t);n==null||i&&!ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function af(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ho(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function of(e,t,n,r){e.addEventListener(t,n,r)}function sf(e,t,n,r){e.removeEventListener(t,n,r)}function lf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=cf(t);if(r){const f=i[t]=df(r,a);of(e,s,f,l)}else o&&(sf(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function cf(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Ir=0;const ff=Promise.resolve(),uf=()=>Ir||(ff.then(()=>Ir=0),Ir=Date.now());function df(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(mf(r,n.value),t,5,[r])};return n.value=e,n.attached=uf(),n}function mf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ii=/^on[a-z]/,pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ef(e,r,a):t==="style"?tf(e,n,r):ir(t)?ma(t)||lf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hf(e,t,r,a))?af(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),rf(e,t,r,a))};function hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ii.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ii.test(t)&&pe(n)?!1:t in e}function La(e){const t=ls();if(!t)return;const n=()=>Jr(t.subTree,e(t.proxy));nc(n),Oa(()=>{const r=new MutationObserver(n);r.observe(t.subTree.el.parentNode,{childList:!0}),Pa(()=>r.disconnect())})}function Jr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Jr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ti(e.el,t);else if(e.type===fe)e.children.forEach(n=>Jr(n,t));else if(e.type===an){let{el:n,anchor:r}=e;for(;n&&(Ti(n,t),n!==r);)n=n.nextSibling}}function Ti(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const at="transition",Qt="animation",$a=(e,{slots:t})=>Fa(Ko,gf(e),t);$a.displayName="Transition";const us={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$a.props=he({},Ko.props,us);const yt=(e,t=[])=>{L(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ni=e=>e?L(e)?e.some(t=>t.length>1):e.length>1:!1;function gf(e){const t={};for(const N in e)N in us||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,P=vf(a),C=P&&P[0],z=P&&P[1],{onBeforeEnter:w,onEnter:S,onEnterCancelled:F,onLeave:$,onLeaveCancelled:B,onBeforeAppear:ce=w,onAppear:ae=S,onAppearCancelled:R=F}=t,Y=(N,re,ke)=>{wt(N,re?u:s),wt(N,re?f:o),ke&&ke()},q=(N,re)=>{N._isLeaving=!1,wt(N,m),wt(N,g),wt(N,p),re&&re()},ge=N=>(re,ke)=>{const Gt=N?ae:S,de=()=>Y(re,N,ke);yt(Gt,[re,de]),Mi(()=>{wt(re,N?l:i),it(re,N?u:s),Ni(Gt)||ji(re,r,C,de)})};return he(t,{onBeforeEnter(N){yt(w,[N]),it(N,i),it(N,o)},onBeforeAppear(N){yt(ce,[N]),it(N,l),it(N,f)},onEnter:ge(!1),onAppear:ge(!0),onLeave(N,re){N._isLeaving=!0;const ke=()=>q(N,re);it(N,m),wf(),it(N,p),Mi(()=>{!N._isLeaving||(wt(N,m),it(N,g),Ni($)||ji(N,r,z,ke))}),yt($,[N,ke])},onEnterCancelled(N){Y(N,!1),yt(F,[N])},onAppearCancelled(N){Y(N,!0),yt(R,[N])},onLeaveCancelled(N){q(N),yt(B,[N])}})}function vf(e){if(e==null)return null;if(ne(e))return[Tr(e.enter),Tr(e.leave)];{const t=Tr(e);return[t,t]}}function Tr(e){return _o(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bf=0;function ji(e,t,n,r){const a=e._endId=++bf,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=yf(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),i()},p=g=>{g.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function yf(e,t){const n=window.getComputedStyle(e),r=P=>(n[P]||"").split(", "),a=r(at+"Delay"),i=r(at+"Duration"),o=Fi(a,i),s=r(Qt+"Delay"),l=r(Qt+"Duration"),f=Fi(s,l);let u=null,m=0,p=0;t===at?o>0&&(u=at,m=o,p=i.length):t===Qt?f>0&&(u=Qt,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?at:Qt:null,p=u?u===at?i.length:l.length:0);const g=u===at&&/\b(transform|all)(,|$)/.test(n[at+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:g}}function Fi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Li(n)+Li(e[r])))}function Li(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function wf(){return document.body.offsetHeight}const $i={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):en(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),en(e,!0),r.enter(e)):r.leave(e,()=>{en(e,!1)}):en(e,t))},beforeUnmount(e,{value:t}){en(e,t)}};function en(e,t){e.style.display=t?e._vod:"none"}const _f=he({patchProp:pf},Qc);let Di;function xf(){return Di||(Di=Mc(_f))}const kf=(...e)=>{const t=xf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Af(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Af(e){return pe(e)?document.querySelector(e):e}function zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function Cf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ef(e,t,n){return t&&Ri(e.prototype,t),n&&Ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return Of(e)||If(e,t)||ds(e,t)||Nf()}function kn(e){return Sf(e)||Pf(e)||ds(e)||Tf()}function Sf(e){if(Array.isArray(e))return Gr(e)}function Of(e){if(Array.isArray(e))return e}function Pf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function If(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ds(e,t){if(!!e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hi=function(){},za={},ms={},ps=null,hs={mark:Hi,measure:Hi};try{typeof window<"u"&&(za=window),typeof document<"u"&&(ms=document),typeof MutationObserver<"u"&&(ps=MutationObserver),typeof performance<"u"&&(hs=performance)}catch{}var Mf=za.navigator||{},Bi=Mf.userAgent,Wi=Bi===void 0?"":Bi,dt=za,te=ms,Ui=ps,Mn=hs;dt.document;var nt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",gs=~Wi.indexOf("MSIE")||~Wi.indexOf("Trident/"),jn,Fn,Ln,$n,Dn,Ze="___FONT_AWESOME___",Zr=16,vs="fa",bs="svg-inline--fa",Nt="data-fa-i2svg",Qr="data-fa-pseudo-element",jf="data-fa-pseudo-element-pending",Ra="data-prefix",Ha="data-icon",Yi="fontawesome-i2svg",Ff="async",Lf=["HTML","HEAD","STYLE","SCRIPT"],ys=function(){try{return!0}catch{return!1}}(),ee="classic",oe="sharp",Ba=[ee,oe];function An(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var bn=An((jn={},ue(jn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ue(jn,oe,{fa:"solid",fass:"solid","fa-solid":"solid"}),jn)),yn=An((Fn={},ue(Fn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ue(Fn,oe,{solid:"fass"}),Fn)),wn=An((Ln={},ue(Ln,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ue(Ln,oe,{fass:"fa-solid"}),Ln)),$f=An(($n={},ue($n,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ue($n,oe,{"fa-solid":"fass"}),$n)),Df=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ws="fa-layers-text",zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rf=An((Dn={},ue(Dn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ue(Dn,oe,{900:"fass"}),Dn)),_s=[1,2,3,4,5,6,7,8,9,10],Hf=_s.concat([11,12,13,14,15,16,17,18,19,20]),Bf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_n=new Set;Object.keys(yn[ee]).map(_n.add.bind(_n));Object.keys(yn[oe]).map(_n.add.bind(_n));var Wf=[].concat(Ba,kn(_n),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(_s.map(function(e){return"".concat(e,"x")})).concat(Hf.map(function(e){return"w-".concat(e)})),sn=dt.FontAwesomeConfig||{};function Uf(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var Kf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kf.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],a=Yf(Uf(n));a!=null&&(sn[r]=a)})}var xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:vs,replacementClass:bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sn.familyPrefix&&(sn.cssPrefix=sn.familyPrefix);var Kt=O(O({},xs),sn);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var T={};Object.keys(xs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Kt[e]=n,ln.forEach(function(r){return r(T)})},get:function(){return Kt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Kt.cssPrefix=t,ln.forEach(function(n){return n(T)})},get:function(){return Kt.cssPrefix}});dt.FontAwesomeConfig=T;var ln=[];function Vf(e){return ln.push(e),function(){ln.splice(ln.indexOf(e),1)}}var ot=Zr,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qf(e){if(!(!e||!nt)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var Xf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var e=12,t="";e-- >0;)t+=Xf[Math.random()*62|0];return t}function Jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wa(e){return e.classList?Jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ks(e[n]),'" ')},"").trim()}function br(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ua(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Gf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Zf(e){var t=e.transform,n=e.width,r=n===void 0?Zr:n,a=e.height,i=a===void 0?Zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&gs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qf=`:root, :host {
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
}`;function As(){var e=vs,t=bs,n=T.cssPrefix,r=T.replacementClass,a=Qf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ki=!1;function Nr(){T.autoAddCss&&!Ki&&(qf(As()),Ki=!0)}var eu={mixout:function(){return{dom:{css:As,insertCss:Nr}}},hooks:function(){return{beforeDOMElementCreation:function(){Nr()},beforeI2svg:function(){Nr()}}}},Qe=dt||{};Qe[Ze]||(Qe[Ze]={});Qe[Ze].styles||(Qe[Ze].styles={});Qe[Ze].hooks||(Qe[Ze].hooks={});Qe[Ze].shims||(Qe[Ze].shims=[]);var Fe=Qe[Ze],Cs=[],tu=function e(){te.removeEventListener("DOMContentLoaded",e),tr=1,Cs.map(function(t){return t()})},tr=!1;nt&&(tr=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),tr||te.addEventListener("DOMContentLoaded",tu));function nu(e){!nt||(tr?setTimeout(e,0):Cs.push(e))}function Cn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ks(e):"<".concat(t," ").concat(Jf(r),">").concat(i.map(Cn).join(""),"</").concat(t,">")}function Vi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Mr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ru(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ea(e){var t=au(e);return t.length===1?t[0].toString(16):null}function iu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function qi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=qi(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,qi(t)):Fe.styles[e]=O(O({},Fe.styles[e]||{}),i),e==="fas"&&ta("fa",t)}var zn,Rn,Hn,Lt=Fe.styles,ou=Fe.shims,su=(zn={},ue(zn,ee,Object.values(wn[ee])),ue(zn,oe,Object.values(wn[oe])),zn),Ya=null,Es={},Ss={},Os={},Ps={},Is={},lu=(Rn={},ue(Rn,ee,Object.keys(bn[ee])),ue(Rn,oe,Object.keys(bn[oe])),Rn);function cu(e){return~Wf.indexOf(e)}function fu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!cu(a)?a:null}var Ts=function(){var t=function(i){return Mr(Lt,function(o,s,l){return o[l]=Mr(s,i,{}),o},{})};Es=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ss=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Is=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Mr(ou,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Os=r.names,Ps=r.unicodes,Ya=yr(T.styleDefault,{family:T.familyDefault})};Vf(function(e){Ya=yr(e.styleDefault,{family:T.familyDefault})});Ts();function Ka(e,t){return(Es[e]||{})[t]}function uu(e,t){return(Ss[e]||{})[t]}function Pt(e,t){return(Is[e]||{})[t]}function Ns(e){return Os[e]||{prefix:null,iconName:null}}function du(e){var t=Ps[e],n=Ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Ya}var Va=function(){return{prefix:null,iconName:null,rest:[]}};function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=bn[r][e],i=yn[r][e]||yn[r][a],o=e in Fe.styles?e:null;return i||o||null}var Xi=(Hn={},ue(Hn,ee,Object.keys(wn[ee])),ue(Hn,oe,Object.keys(wn[oe])),Hn);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ue(t,ee,"".concat(T.cssPrefix,"-").concat(ee)),ue(t,oe,"".concat(T.cssPrefix,"-").concat(oe)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return Xi[ee].includes(f)}))&&(s=ee),(e.includes(i[oe])||e.some(function(f){return Xi[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,u){var m=fu(T.cssPrefix,u);if(Lt[u]?(u=su[s].includes(u)?$f[s][u]:u,o=u,f.prefix=u):lu[s].indexOf(u)>-1?(o=u,f.prefix=yr(u,{family:s})):m?f.iconName=m:u!==T.replacementClass&&u!==i[ee]&&u!==i[oe]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?Ns(f.iconName):{},g=Pt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(f.prefix="fas")}return f},Va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(Lt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var mu=function(){function e(){Cf(this,e),this.definitions={}}return Ef(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),ta(s,o[s]);var l=wn[ee][s];l&&ta(l,o[s]),Ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ji=[],$t={},Wt={},pu=Object.keys(Wt);function hu(e,t){var n=t.mixoutsTo;return Ji=e,$t={},Object.keys(Wt).forEach(function(r){pu.indexOf(r)===-1&&delete Wt[r]}),Ji.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),er(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){$t[o]||($t[o]=[]),$t[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function na(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=$t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=$t[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function ra(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(!!t)return t=Pt(n,t)||t,Vi(Ms.definitions,n,t)||Vi(Fe.styles,n,t)}var Ms=new mu,gu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Mt("noAuto")},vu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Mt("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,nu(function(){yu({autoReplaceSvgRoot:n}),Mt("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(er(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=yr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Df))){var a=wr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Pt(i,t)||t}}}},Se={noAuto:gu,config:T,dom:vu,parse:bu,library:Ms,findIconDefinition:ra,toHtml:Cn},yu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Fe.styles).length>0||T.autoFetchSvg)&&nt&&T.autoReplaceSvg&&Se.dom.i2svg({node:r})};function _r(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Cn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!nt){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function wu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ua(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=br(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function _u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,z=P.height,w=a==="fak",S=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),F={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(z)})},$=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/z*16*.0625,"em")}:{};g&&(F.attributes[Nt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||xn())},children:[l]}),delete F.attributes.title);var B=O(O({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},$),m.styles)}),ce=r.found&&n.found?et("generateAbstractMask",B)||{children:[],attributes:{}}:et("generateAbstractIcon",B)||{children:[],attributes:{}},ae=ce.children,R=ce.attributes;return B.children=ae,B.attributes=R,s?_u(B):wu(B)}function Gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Nt]="");var u=O({},o.styles);Ua(a)&&(u.transform=Zf({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=br(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function xu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=br(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jr=Fe.styles;function aa(e){var t=e[0],n=e[1],r=e.slice(4),a=Da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ku={found:!1,width:512,height:512};function Au(e,t){!ys&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ia(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=Ns(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&jr[t]&&jr[t][e]){var o=jr[t][e];return r(aa(o))}Au(e,t),r(O(O({},ku),{},{icon:T.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var Zi=function(){},oa=T.measurePerformance&&Mn&&Mn.mark&&Mn.measure?Mn:{mark:Zi,measure:Zi},rn='FA "6.2.0"',Cu=function(t){return oa.mark("".concat(rn," ").concat(t," begins")),function(){return js(t)}},js=function(t){oa.mark("".concat(rn," ").concat(t," ends")),oa.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},Xa={begin:Cu,end:js},Vn=function(){};function Qi(e){var t=e.getAttribute?e.getAttribute(Nt):null;return typeof t=="string"}function Eu(e){var t=e.getAttribute?e.getAttribute(Ra):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function Su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Ou(){if(T.autoReplaceSvg===!0)return qn.replace;var e=qn[T.autoReplaceSvg];return e||qn.replace}function Pu(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Iu(e){return te.createElement(e)}function Fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Pu:Iu:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Fs(o,{ceFn:r}))}),a}function Tu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var qn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Fs(a),n)}),n.getAttribute(Nt)===null&&T.keepOriginalSource){var r=te.createComment(Tu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Wa(n).indexOf(T.replacementClass))return qn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Cn(s)}).join(`
`);n.setAttribute(Nt,""),n.innerHTML=o}};function eo(e){e()}function Ls(e,t){var n=typeof t=="function"?t:Vn;if(e.length===0)n();else{var r=eo;T.mutateApproach===Ff&&(r=dt.requestAnimationFrame||eo),r(function(){var a=Ou(),i=Xa.begin("mutate");e.map(a),i(),n()})}}var Ja=!1;function $s(){Ja=!0}function sa(){Ja=!1}var nr=null;function to(e){if(!!Ui&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?Vn:t,r=e.nodeCallback,a=r===void 0?Vn:r,i=e.pseudoElementsCallback,o=i===void 0?Vn:i,s=e.observeMutationsRoot,l=s===void 0?te:s;nr=new Ui(function(f){if(!Ja){var u=mt();Jt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Qi(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Qi(m.target)&&~Bf.indexOf(m.attributeName))if(m.attributeName==="class"&&Eu(m.target)){var p=wr(Wa(m.target)),g=p.prefix,P=p.iconName;m.target.setAttribute(Ra,g||u),P&&m.target.setAttribute(Ha,P)}else Su(m.target)&&a(m.target)})}}),nt&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nu(){!nr||nr.disconnect()}function Mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ju(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wr(Wa(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=uu(a.prefix,e.innerText)||Ka(a.prefix,ea(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Fu(e){var t=Jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||xn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ju(e),r=n.iconName,a=n.prefix,i=n.rest,o=Fu(e),s=na("parseNodeAttributes",{},e),l=t.styleParser?Mu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $u=Fe.styles;function Ds(e){var t=T.autoReplaceSvg==="nest"?no(e,{styleParser:!1}):no(e);return~t.extra.classes.indexOf(ws)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var pt=new Set;Ba.map(function(e){pt.add("fa-".concat(e))});Object.keys(bn[ee]).map(pt.add.bind(pt));Object.keys(bn[oe]).map(pt.add.bind(pt));pt=kn(pt);function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=te.documentElement.classList,r=function(m){return n.add("".concat(Yi,"-").concat(m))},a=function(m){return n.remove("".concat(Yi,"-").concat(m))},i=T.autoFetchSvg?pt:Ba.map(function(u){return"fa-".concat(u)}).concat(Object.keys($u));i.includes("fa")||i.push("fa");var o=[".".concat(ws,":not([").concat(Nt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Xa.begin("onTree"),f=s.reduce(function(u,m){try{var p=Ds(m);p&&u.push(p)}catch(g){ys||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){Ls(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ds(e).then(function(n){n&&Ls([n],t)})}function zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ra(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ra(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Ru=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,g=n.titleId,P=g===void 0?null:g,C=n.classes,z=C===void 0?[]:C,w=n.attributes,S=w===void 0?{}:w,F=n.styles,$=F===void 0?{}:F;if(!!t){var B=t.prefix,ce=t.iconName,ae=t.icon;return _r(O({type:"icon"},t),function(){return Mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(p?S["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(P||xn()):(S["aria-hidden"]="true",S.focusable="false")),qa({icons:{main:aa(ae),mask:l?aa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ce,transform:O(O({},Ke),a),symbol:o,title:p,maskId:u,titleId:P,extra:{attributes:S,styles:$,classes:z}})})}},Hu={mixout:function(){return{icon:zu(Ru)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ro,n.nodeCallback=Du,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return ro(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ia(a,s),u.iconName?ia(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var z=Da(C,2),w=z[0],S=z[1];g([n,qa({icons:{main:w,mask:S},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=br(s);l.length>0&&(a.style=l);var f;return Ua(o)&&(f=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return _r({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(kn(i)).join(" ")},children:o}]})}}}},Wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return _r({type:"counter",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),xu({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(kn(s))}})})}}}},Uu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return _r({type:"text",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),Gi({content:n,transform:O(O({},Ke),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(kn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(gs){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Yu=new RegExp('"',"ug"),ao=[1105920,1112319];function Ku(e){var t=e.replace(Yu,""),n=iu(t,0),r=n>=ao[0]&&n<=ao[1],a=t.length===2?t[0]===t[1]:!1;return{value:ea(a?t[0]:t),isSecondary:r||a}}function io(e,t){var n="".concat(jf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Jt(e.children),o=i.filter(function(ae){return ae.getAttribute(Qr)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zf),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?oe:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yn[p][l[2].toLowerCase()]:Rf[p][f],P=Ku(m),C=P.value,z=P.isSecondary,w=l[0].startsWith("FontAwesome"),S=Ka(g,C),F=S;if(w){var $=du(C);$.iconName&&$.prefix&&(S=$.iconName,g=$.prefix)}if(S&&!z&&(!o||o.getAttribute(Ra)!==g||o.getAttribute(Ha)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var B=Lu(),ce=B.extra;ce.attributes[Qr]=t,ia(S,g).then(function(ae){var R=qa(O(O({},B),{},{icons:{main:ae,mask:Va()},prefix:g,iconName:F,extra:ce,watchable:!0})),Y=te.createElement("svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=R.map(function(q){return Cn(q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Vu(e){return Promise.all([io(e,"::before"),io(e,"::after")])}function qu(e){return e.parentNode!==document.head&&!~Lf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function oo(e){if(!!nt)return new Promise(function(t,n){var r=Jt(e.querySelectorAll("*")).filter(qu).map(Vu),a=Xa.begin("searchPseudoElements");$s(),Promise.all(r).then(function(){a(),sa(),t()}).catch(function(){a(),sa(),n()})})}var Xu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=oo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;T.searchPseudoElements&&oo(a)}}},so=!1,Ju={mixout:function(){return{dom:{unwatch:function(){$s(),so=!0}}}},hooks:function(){return{bootstrap:function(){to(na("mutationObserverCallbacks",{}))},noAuto:function(){Nu()},watch:function(n){var r=n.observeMutationsRoot;so?sa():to(na("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gu={mixout:function(){return{parse:{transform:function(n){return lo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=lo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},Fr={x:0,y:0,width:"100%",height:"100%"};function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zu(e){return e.tag==="g"?e.children:[e]}var Qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wr(a.split(" ").map(function(o){return o.trim()})):Va();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,g=Gf({transform:l,containerWidth:m,iconWidth:f}),P={tag:"rect",attributes:O(O({},Fr),{},{fill:"white"})},C=u.children?{children:u.children.map(co)}:{},z={tag:"g",attributes:O({},g.inner),children:[co(O({tag:u.tag,attributes:O(O({},u.attributes),g.path)},C))]},w={tag:"g",attributes:O({},g.outer),children:[z]},S="mask-".concat(s||xn()),F="clip-".concat(s||xn()),$={tag:"mask",attributes:O(O({},Fr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,w]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Zu(p)},$]};return r.push(B,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(S,")")},Fr)}),{children:r,attributes:a}}}},ed={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},td={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nd=[eu,Hu,Bu,Wu,Uu,Xu,Ju,Gu,Qu,ed,td];hu(nd,{mixoutsTo:Se});Se.noAuto;var zs=Se.config,Rs=Se.library;Se.dom;var rr=Se.parse;Se.findIconDefinition;Se.toHtml;var rd=Se.icon;Se.layer;var ad=Se.text;Se.counter;function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function id(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function od(e,t){if(e==null)return{};var n=id(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function la(e){return sd(e)||ld(e)||cd(e)||fd()}function sd(e){if(Array.isArray(e))return ca(e)}function ld(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cd(e,t){if(!!e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hs={exports:{}};(function(e){(function(t){var n=function(w,S,F){if(!f(S)||m(S)||p(S)||g(S)||l(S))return S;var $,B=0,ce=0;if(u(S))for($=[],ce=S.length;B<ce;B++)$.push(n(w,S[B],F));else{$={};for(var ae in S)Object.prototype.hasOwnProperty.call(S,ae)&&($[w(ae,F)]=n(w,S[ae],F))}return $},r=function(w,S){S=S||{};var F=S.separator||"_",$=S.split||/(?=[A-Z])/;return w.split($).join(F)},a=function(w){return P(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,F){return F?F.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var S=a(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},p=function(w){return s.call(w)=="[object RegExp]"},g=function(w){return s.call(w)=="[object Boolean]"},P=function(w){return w=w-0,w===w},C=function(w,S){var F=S&&"process"in S?S.process:S;return typeof F!="function"?w:function($,B){return F($,w,B)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,S){return n(C(a,S),w)},decamelizeKeys:function(w,S){return n(C(o,S),w,S)},pascalizeKeys:function(w,S){return n(C(i,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(ud)})(Hs);var dd=Hs.exports,md=["class","style"];function pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=dd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=hd(u);break;case"style":l.style=pd(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=od(n,md);return Fa(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var Bs=!1;try{Bs=!0}catch{}function gd(){if(!Bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function cn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function vd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function uo(e){if(e&&ar(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rr.icon)return rr.icon(e);if(e===null)return null;if(ar(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ct=Sa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ce(function(){return uo(t.icon)}),i=Ce(function(){return cn("classes",vd(t))}),o=Ce(function(){return cn("transform",typeof t.transform=="string"?rr.transform(t.transform):t.transform)}),s=Ce(function(){return cn("mask",uo(t.mask))}),l=Ce(function(){return rd(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Un(l,function(u){if(!u)return gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=Ce(function(){return l.value?Ga(l.value.abstract[0],{},r):null});return function(){return f.value}}});Sa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=zs.familyPrefix,i=Ce(function(){return["".concat(a,"-layers")].concat(la(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Fa("div",{class:i.value},r.default?r.default():[])}}});Sa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=zs.familyPrefix,i=Ce(function(){return cn("classes",[].concat(la(t.counter?["".concat(a,"-layers-counter")]:[]),la(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ce(function(){return cn("transform",typeof t.transform=="string"?rr.transform(t.transform):t.transform)}),s=Ce(function(){var f=ad(t.value.toString(),Me(Me({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ce(function(){return Ga(s.value,{},r)});return function(){return l.value}}});var bd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},yd={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},wd={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},_d={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};const xd={class:"nav-container"},kd={class:"logo"},Ad={href:"#home"},Cd={class:"logo-img"},Ed={class:"hamb"},Sd=k("button",{class:"side-menu"},null,-1),Od={class:"links"},Pd=k("a",{href:"#about"},"About",-1),Id=k("a",{href:"#skills"},"Skills",-1),Td=k("a",{href:"#projects"},"Projects",-1),Nd=k("a",{href:"#contact"},"Contact",-1),Md={class:"theme-switcher"},jd={class:"dropdown-links links"},Fd={class:"theme-switcher"},Ld={__name:"TheNav",setup(e){La(p=>({ce9913a0:n.value,"343ead12":r.value})),Rs.add(bd,_d),window.addEventListener("resize",m),window.addEventListener("hashchange",function(){const p=window.location.hash;document.querySelectorAll(".links a").forEach(P=>{P.getAttribute("href")===p?P.classList.add("active"):P.classList.remove("active")})});const t=We("light"),n=We("rgba(237, 230, 227, 0.95)"),r=We(`src/assets/logo-JS-${t.value}.jpg`),a=We(`src/assets/logo-JS-${t.value}.webp`);tc(()=>{r.value=`url(./logo-JS-${t.value}.jpg)`,a.value=`url(./logo-JS-${t.value}.webp)`});function i(){t.value==="dark"?t.value="light":t.value="dark",t.value==="dark"?(document.body.classList.remove("light"),document.body.classList.add("dark"),document.querySelectorAll(".theme-switcher-icon").forEach(p=>{p.classList.remove("lightMode"),p.classList.add("darkMode")}),n.value="rgba(46, 80, 119, 0.95)"):(document.body.classList.remove("dark"),document.body.classList.add("light"),document.querySelectorAll(".theme-switcher-icon").forEach(p=>{p.classList.add("lightMode"),p.classList.remove("darkMode")}),n.value="rgba(237, 230, 227, 0.95)")}function o(){l.value=!l.value,document.body.style.overflowY=l.value?"hidden":"auto"}const s=We(!1),l=We(!1),f=We(window.innerWidth),u=Ce(()=>l&&s);function m(){if(f.value=window.innerWidth,f.value<=768){s.value=!0;return}s.value=!1,l.value=!1}return m(),(p,g)=>{const P=Ia("webp");return Q(),le("nav",null,[k("div",xd,[k("div",kd,[k("a",Ad,[Bt(k("div",Cd,null,512),[[P,[a.value,r.value],"bgs"]])])]),k("div",Ed,[ve(u)?(Q(),le("span",{key:0,class:"hamburger",onClick:g[0]||(g[0]=C=>o())},[Z(ve(Ct),{icon:"fa-solid fa-bars","fixed-width":""})])):(Q(),le("span",{key:1,class:"xmark",onClick:g[1]||(g[1]=C=>o())},[Z(ve(Ct),{icon:"fa-solid fa-xmark","fixed-width":""})]))]),Sd,Bt(k("div",Od,[Pd,Id,Td,Nd,k("div",Md,[k("div",{class:"theme-switcher-icon lightMode",onClick:g[2]||(g[2]=C=>i())})])],512),[[$i,!s.value]]),Bt(k("div",jd,[k("a",{href:"#about",onClick:g[3]||(g[3]=C=>o())},"About"),k("a",{href:"#skills",onClick:g[4]||(g[4]=C=>o())},"Skills"),k("a",{href:"#projects",onClick:g[5]||(g[5]=C=>o())},"Projects"),k("a",{href:"#contact",onClick:g[6]||(g[6]=C=>o())},"Contact"),k("div",Fd,[k("div",{class:"theme-switcher-icon lightMode",onClick:g[7]||(g[7]=C=>i())})])],512),[[$i,l.value]])])])}}};const $d={class:"bar-container"},Dd=k("div",{class:"skill-bar"},null,-1),mo={__name:"TheSkillBar",props:{skill:{},percentage:{},color:{}},setup(e){const t=e;La(a=>({"6684a7da":e.percentage,"2048cc39":ve(n),"2d761e9a":ve(r)}));const n=t.color.dark,r=t.color.light;return(a,i)=>(Q(),le(fe,null,[k("p",null,tn(e.skill),1),k("div",$d,[Z($a,{ease:""},{default:Uo(()=>[Dd]),_:1})])],64))}},zd={skillName:"HTML",color:{dark:"#E96228",light:"#E96228"},percentage:"90%"},Rd={skillName:"CSS",color:{dark:"#4CA3E6",light:"#1B6DB2"},percentage:"60%"},Hd={skillName:"JavaScript",color:{dark:"#CFB430",light:"#3C9800"},percentage:"70%"},Bd={skillName:"PHP",color:{dark:"#9499E0",light:"#797DB8"},percentage:"60%"},Wd={skillName:"Laravel",color:{dark:"#FF6F61",light:"#F72C1F"},percentage:"50%"},Ud={skillName:"Vue",color:{dark:"#3FB27F",light:"#349469"},percentage:"50%"},Yd={skillName:"Digital Marketing",color:{dark:"#F7B500",light:"#D6272C"},percentage:"60%"},Kd={skillName:"Content Writing",color:{dark:"#04B3BD",light:"#039299"},percentage:"70%"},Vd={skillName:"WordPress",color:{dark:"#74BC4B",light:"#21759B"},percentage:"80%"},qd={skillName:"Figma",color:{dark:"#9D8EFF",light:"#9c56f6"},percentage:"60%"},Xd={skillName:"Making up skill bar values!",color:{dark:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)",light:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"},percentage:"100%"},Bn={HTML:zd,CSS:Rd,JavaScript:Hd,PHP:Bd,Laravel:Wd,Vue:Ud,DigitalMarketing:Yd,ContentWriting:Kd,WordPress:Vd,Figma:qd,SkillBars:Xd};const Ws=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Jd={class:"skills-container"},Gd={class:"skills-column"},Zd={class:"skills-column"},Qd={__name:"TheSkills",setup(e){const t=Object.keys(Bn),n=t.length,r=[];for(let a=0;a<n;a++)r.push({skill:t[a],name:Bn[t[a]].skillName,percentage:Bn[t[a]].percentage,color:Bn[t[a]].color});return(a,i)=>(Q(),le("div",Jd,[k("div",Gd,[(Q(!0),le(fe,null,pn(r.slice(0,ve(n)/2+ve(n)%2),o=>(Q(),gn(mo,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))]),k("div",Zd,[(Q(!0),le(fe,null,pn(r.slice(ve(n)/2+ve(n)%2,ve(n)),o=>(Q(),gn(mo,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))])]))}},em=Ws(Qd,[["__scopeId","data-v-bc03b09e"]]);const tm=["id","data-cat"],nm=["src","alt"],rm=k("div",{class:"tile-overlay"},null,-1),am={class:"overlay-text"},im={class:"tile-title"},om={key:0,class:"modal-container"},sm={class:"modal"},lm={class:"modal-header"},cm={class:"header-image"},fm=["src","alt"],um={class:"header-text"},dm={class:"modal-body"},mm={class:"description-container"},pm={class:"links-container"},hm=["href"],gm=["href"],vm=["href"],bm={class:"tech-container"},ym=k("h4",null,"Technologies used",-1),wm={class:"tech-list"},po={__name:"TheProjectTile",props:{id:{},name:{},desc:{},img:{},webp:{},categories:{},tech:{},website:{},github:{},projectFolder:{}},setup(e){La(a=>({53004321:n.value}));const t=We(!1),n=We();function r(){t.value=!t.value,t.value?document.body.style.overflow="hidden":document.body.style.overflow="visible",document.body.classList.contains("dark")?n.value="#2e5077":n.value="#ede6e3"}return(a,i)=>{const o=Ia("webp");return Q(),le(fe,null,[k("div",{class:"tile-container",id:e.id,onClick:i[0]||(i[0]=s=>r()),"data-cat":e.categories},[Bt(k("img",{src:e.img,alt:e.name},null,8,nm),[[o,e.webp,"src"]]),rm,k("div",am,[k("h3",im,tn(e.name),1)])],8,tm),t.value?(Q(),le("div",om,[k("div",sm,[k("div",lm,[k("span",{class:"material-symbols-outlined closeBtn",onClick:i[1]||(i[1]=s=>r())},"close"),k("div",cm,[Bt(k("img",{class:"banner",src:e.img,alt:e.name},null,8,fm),[[o,e.webp,"src"]])]),k("div",um,[k("h3",null,tn(e.name),1)])]),k("div",dm,[k("div",mm,[k("p",null,tn(e.desc),1)]),k("div",pm,[e.website?(Q(),le("a",{key:0,class:"project-link",href:e.website,target:"_blank",rel:"noopener noreferrer"},"Website",8,hm)):St("",!0),e.github?(Q(),le("a",{key:1,class:"project-link",href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github",8,gm)):St("",!0),e.projectFolder?(Q(),le("a",{key:2,class:"project-link",href:e.projectFolder,target:"_blank",rel:"noopener noreferrer"},"Folder (FR)",8,vm)):St("",!0)]),k("div",bm,[ym,k("ol",wm,[(Q(!0),le(fe,null,pn(e.tech,s=>(Q(),le("li",{class:"tech-item",key:s},tn(s),1))),128))])])])])])):St("",!0)],64)}}},_m={Name:"Experience Flathead",Description:"A digital marketing project I realized during my first year of bachelor's degree. I created the website, the logo, the graphic design and the content. In addition to the website, I also created a whole digital ecosystem, including social media pages, a newsletter, SEA and SEO campaigns, and social media ads. The project was realized over two semesters and was a great opportunity to learn about digital marketing and widely used tools such as Google Analytics and the Search Console. Both the website and the project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","Mailchimp","Google Analytics","Google Search Console","Google Ads","Facebook Ads"],Image:"./assets/projectImages/ExperienceFlathead.jpg",WebP:"./assets/projectImages/ExperienceFlathead.webp",Website:"https://ef.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/jgivfp49jsolqx5/Rapport-complet.pdf?dl=0"},xm={Name:"Everything Photography",Description:"As part of my E-Commerce course, I created a website for a fictitious photography online store. The website was created using Wordpress, the Divi builder, and WooCommerce. I also created the logo, graphic identity, and social media pages. During the process I approached all the details of an Ecommerce business; from Amazon's affiliation program for photography gear to Print On Demand through Gelato for my posters. The website and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","WooCommerce"],Image:"./assets/projectImages/EverythingPhotography.jpg",WebP:"./assets/projectImages/EverythingPhotography.webp",Website:"https://ep.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/vwglbomg9ucq55t/HEIG-VD%20-%20E-comm%20-%20Sandoz%20Jules%20-%20Everything%20Photography.pdf?dl=0"},km={Name:"Kairos",Description:"In 2022, my class was tasked with creating a new web-app to view for students to view their timetables. We were grouped into teams of 7 to 8 and had to create the app from scratch over the course of a month. I was in charge of project management and had to coordinate UX, UI and development teams. In addition to the management side of the project, I helped both front-end and back-end developers with their tasks. The project was a great opportunity to learn about project management and to work in a team. The website, backend github and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Backend","Frontend","Project Management","Agile"],Technologies:["Laravel","Vue3","PostgreSQL","Git"],Image:"./assets/projectImages/Kairos.jpg",WebP:"./assets/projectImages/Kairos.webp",Website:"https://pnj-pingouin.heig-vd.ch/app/index.html",Github:"https://github.com/julessandoz/ProjArt_BackEnd/",ProjectFolder:"https://www.dropbox.com/s/3lr9xsklsre7s0a/pnj_Rapport_VersionFinale.pdf?dl=0"},Am={Name:"Les Ailes De Katia",Description:"My first project working on an already existing website. I was tasked with improving the site's technical SEO, to optimize its loading speed and to make it responsive.",Categories:["SEO"],Technologies:["Wordpress"],Image:"./assets/projectImages/AilesDeKatia.jpg",WebP:"./assets/projectImages/AilesDeKatia.webp",Website:"https://lesailesdekatia.com/"},Cm={Name:"Projet Borderan",Description:'In 2021, I was hired to redesign a website for a local trustee company. I was tasked with applying a new graphic identity and reworking the architecture information as well as all the content to optimize UX and SEO. It was my first "real-world" project and, while it unfortunately went unfinished due to a lack of time and budget, it was a great opportunity to learn how to interract with a client.',Categories:["SEO","Content Writing","Web Design"],Technologies:["Wordpress","Divi"],Image:"./assets/projectImages/ProjetBorderan.jpg",WebP:"./assets/projectImages/ProjetBorderan.webp"},Em={Name:"Dataviz - Hollywood Movies",Description:"",Categories:["Frontend","Data Visualization"],Technologies:["D3.js","HTML","CSS","JavaScript","JSON"],Image:"./assets/projectImages/Hollywood.jpg",WebP:"./assets/projectImages/Hollywood.webp",Website:"https://hollywood.jules-sandoz.com/",Github:"https://github.com/julessandoz/VisualDonProject_Hollywood_Movies"},Sm={Name:"Cave Sandoz",Description:"",Categories:["Backend"],Technologies:["PHP","MySQL","HTML","CSS"],Image:"./assets/projectImages/CaveSandoz.jpg",WebP:"./assets/projectImages/CaveSandoz.webp",Website:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/cave-sandoz/",ProjectFolder:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/Sandoz-Projet-ProgServ.pdf"},He={ExperienceFlathead:_m,EverythingPhotography:xm,Kairos:km,AilesDeKatia:Am,ProjetBorderan:Cm,HollywoodMovies:Em,CaveSandoz:Sm};const Om={class:"projects-container"},Pm={class:"cta-container"},Im={__name:"TheProjects",setup(e){const t=Object.keys(He),n=t.length,r=[],a=We(!1);for(let i=0;i<n;i++)r.push({project:t[i],name:He[t[i]].Name,desc:He[t[i]].Description,image:He[t[i]].Image,webp:He[t[i]].WebP,website:He[t[i]].Website,github:He[t[i]].Github,projectFolder:He[t[i]].ProjectFolder,tech:He[t[i]].Technologies,cat:He[t[i]].Categories});return(i,o)=>(Q(),le(fe,null,[k("div",Om,[(Q(!0),le(fe,null,pn(r.slice(0,6),s=>(Q(),gn(po,{id:s.project,name:s.name,desc:s.desc,img:s.image,webp:s.webp,website:s.website,github:s.github,projectFolder:s.projectFolder,tech:s.tech,categories:s.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)),a.value?(Q(!0),le(fe,{key:0},pn(r.slice(6),s=>(Q(),gn(po,{id:s.project,name:s.name,desc:s.desc,img:s.image,webp:s.webp,website:s.website,github:s.github,projectFolder:s.projectFolder,tech:s.tech,categories:s.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)):St("",!0)]),k("div",Pm,[a.value?St("",!0):(Q(),le("button",{key:0,class:"cta",onClick:o[0]||(o[0]=s=>a.value=!0)},"Show more")),a.value?(Q(),le("button",{key:1,class:"cta",onClick:o[1]||(o[1]=s=>a.value=!1)},"Show less")):St("",!0)])],64))}};var Tm={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"]},Nm={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},Mm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};const qe=e=>(Kl("data-v-5dd9e466"),e=e(),Vl(),e),jm={class:"app"},Fm=Rc('<section id="home" data-v-5dd9e466><div class="text-container" data-v-5dd9e466><h1 data-v-5dd9e466> Hello there, <br data-v-5dd9e466> I&#39;m Jules Sandoz </h1><p class="subtitle" data-v-5dd9e466> Digital Swiss Army Knife </p></div><div class="cta-container" data-v-5dd9e466><p data-v-5dd9e466>Scroll or</p><a class="cta" href="#projects" data-v-5dd9e466>Discover my projects</a></div></section>',1),Lm={id:"about"},$m=qe(()=>k("div",{class:"text-container"},[k("h2",null,"About me"),k("p",null," Currently a last year student in Communication and Media Engineering in my home country of Switzerland, I enjoy working on websites, development, marketing, and UI. "),k("p",null," I\u2019m a very curious person and love learning while solving problems. Great fan of the outdoors and amateur photographer, I like spending my free time in the mountains, hiking in the summer and snowboarding in the winter. "),k("p",null," Always interested in working on new projects with motivated people. "),k("a",{href:"#contact"},"Let's work together!")],-1)),Dm={class:"img-container"},zm=["src"],Rm={id:"skills"},Hm=qe(()=>k("div",{class:"title-container"},[k("h2",null,"Skills")],-1)),Bm={class:"skills-bars"},Wm={id:"projects"},Um=qe(()=>k("div",{class:"title-container"},[k("h2",null,"Projects")],-1)),Ym={id:"contact"},Km=qe(()=>k("div",{class:"title-container"},[k("h2",null,"Want to make something great together?")],-1)),Vm={class:"text-container"},qm=qe(()=>k("p",null,"I'm open to freelance or job offers, don't hesitate to reach out through my socials or by email!",-1)),Xm={class:"socials"},Jm={class:"link"},Gm=qe(()=>k("a",{class:"contact-link",href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},"/jules-sandoz",-1)),Zm={class:"link"},Qm=qe(()=>k("a",{class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"@julessandoz",-1)),ep={class:"link"},tp=qe(()=>k("a",{class:"contact-link",href:"github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"/julessandoz",-1)),np={class:"link"},rp=qe(()=>k("a",{class:"contact-link",href:"mailto:contact@jules-sandoz.com"},"contact@jules-sandoz.com",-1)),ap={class:"link"},ip=qe(()=>k("a",{class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},"Download my resume",-1)),op={__name:"App",setup(e){return Rs.add(Nm,Mm,Tm,yd,wd),document.querySelector("title"),(t,n)=>{const r=Ia("webp");return Q(),le("main",null,[k("div",jm,[Z(Ld),Fm,k("section",Lm,[$m,k("div",Dm,[Bt(k("img",{class:"portrait-photo",src:"./assets/jules-sandoz.jpg",alt:"Jules Sandoz"},null,8,zm),[[r,"./assets/jules-sandoz.webp","src"]])])]),k("section",Rm,[Hm,k("div",Bm,[Z(em)])]),k("section",Wm,[Um,Z(Im)]),k("section",Ym,[Km,k("div",Vm,[qm,k("div",Xm,[k("div",Jm,[Z(ve(Ct),{icon:"fa-brands fa-linkedin","fixed-width":""}),ss(),Gm]),k("div",Zm,[Z(ve(Ct),{icon:"fa-brands fa-square-instagram","fixed-width":""}),Qm]),k("div",ep,[Z(ve(Ct),{icon:"fa-brands fa-square-github","fixed-width":""}),tp]),k("div",np,[Z(ve(Ct),{icon:"fa-solid fa-envelope","fixed-width":""}),rp]),k("div",ap,[Z(ve(Ct),{icon:"fa-solid fa-file","fixed-width":""}),ip])])])])])])}}},sp=Ws(op,[["__scopeId","data-v-5dd9e466"]]);var lp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Us={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(lp,function(){var n=function(){try{return document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")===0}catch{return!1}}();return{install:function(r){var a=function(o,s){s.arg==="src"&&o.nodeName==="IMG"&&n&&(o.src=s.value),s.arg==="bg"&&n&&(o.style.backgroundImage="url("+s.value+")"),s.arg==="bgs"&&(o.style.backgroundImage="url("+(n?s.value[0]:s.value[1])+")")},i=+r.version.split(".")[0]>=3?{mounted:a}:{inserted:a};r.directive("webp",i)}}})})(Us);const cp=Us.exports,Ys=kf(sp);Ys.use(cp);Ys.mount("#app");
