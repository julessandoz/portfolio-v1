(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ks=Zr(xs);function Ji(e){return!!e||e===""}function Qr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?Ss(r):Qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(oe(e))return e;if(Z(e))return e}}const As=/;(?![^(]*\))/g,Es=/:(.+)/;function Ss(e){const t={};return e.split(As).forEach(n=>{if(n){const r=n.split(Es);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ea(e){let t="";if(oe(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=ea(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yt=e=>oe(e)?e:e==null?"":L(e)||Z(e)&&(e.toString===Qi||!$(e.toString))?JSON.stringify(e,Xi,2):String(e),Xi=(e,t)=>t&&t.__v_isRef?Xi(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Gi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!L(t)&&!eo(t)?String(t):t,U={},Ct=[],Pe=()=>{},Cs=()=>!1,Os=/^on[^a-z]/,Gn=e=>Os.test(e),ta=e=>e.startsWith("onUpdate:"),me=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ps=Object.prototype.hasOwnProperty,H=(e,t)=>Ps.call(e,t),L=Array.isArray,Ot=e=>Zn(e)==="[object Map]",Gi=e=>Zn(e)==="[object Set]",$=e=>typeof e=="function",oe=e=>typeof e=="string",ra=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Zi=e=>Z(e)&&$(e.then)&&$(e.catch),Qi=Object.prototype.toString,Zn=e=>Qi.call(e),Is=e=>Zn(e).slice(8,-1),eo=e=>Zn(e)==="[object Object]",aa=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ts=/-(\w)/g,Re=Qn(e=>e.replace(Ts,(t,n)=>n?n.toUpperCase():"")),Ms=/\B([A-Z])/g,$t=Qn(e=>e.replace(Ms,"-$1").toLowerCase()),er=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),gr=Qn(e=>e?`on${er(e)}`:""),Qt=(e,t)=>!Object.is(e,t),vr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const js=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class Fs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Ls(e,t=Fe){t&&t.active&&t.effects.push(e)}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},to=e=>(e.w&nt)>0,no=e=>(e.n&nt)>0,$s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},zs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];to(a)&&!no(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},Sr=new WeakMap;let Kt=0,nt=1;const Cr=30;let Ee;const bt=Symbol(""),Or=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ls(this,r)}run(){if(!this.active)return this.fn();let t=Ee,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,et=!0,nt=1<<++Kt,Kt<=Cr?$s(this):Ya(this),this.fn()}finally{Kt<=Cr&&zs(this),nt=1<<--Kt,Ee=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const ro=[];function zt(){ro.push(et),et=!1}function Dt(){const e=ro.pop();et=e===void 0?!0:e}function ye(e,t,n){if(et&&Ee){let r=Sr.get(e);r||Sr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),ao(a)}}function ao(e,t){let n=!1;Kt<=Cr?no(e)||(e.n|=nt,n=!to(e)):n=!e.has(Ee),n&&(e.add(Ee),Ee.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Sr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?aa(n)&&s.push(o.get("length")):(s.push(o.get(bt)),Ot(e)&&s.push(o.get(Or)));break;case"delete":L(e)||(s.push(o.get(bt)),Ot(e)&&s.push(o.get(Or)));break;case"set":Ot(e)&&s.push(o.get(bt));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Pr(ia(l))}}function Pr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ka(r);for(const r of n)r.computed||Ka(r)}function Ka(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ds=Zr("__proto__,__v_isRef,__isVue"),io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ra)),Rs=sa(),Hs=sa(!1,!0),Ws=sa(!0),Va=Bs();function Bs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const r=W(this)[t].apply(this,n);return Dt(),r}}),e}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?il:fo:t?co:lo).get(r))return r;const o=L(r);if(!e&&o&&H(Va,a))return Reflect.get(Va,a,i);const s=Reflect.get(r,a,i);return(ra(a)?io.has(a):Ds(a))||(e||ye(r,"get",a),t)?s:fe(s)?o&&aa(a)?s:s.value:Z(s)?e?uo(s):fa(s):s}}const Us=oo(),Ys=oo(!0);function oo(e=!1){return function(n,r,a,i){let o=n[r];if(Nt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!Wn(a)&&!Nt(a)&&(o=W(o),a=W(a)),!L(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=L(n)&&aa(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(s?Qt(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function Ks(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!ra(t)||!io.has(t))&&ye(e,"has",t),n}function qs(e){return ye(e,"iterate",L(e)?"length":bt),Reflect.ownKeys(e)}const so={get:Rs,set:Us,deleteProperty:Ks,has:Vs,ownKeys:qs},Js={get:Ws,set(e,t){return!0},deleteProperty(e,t){return!0}},Xs=me({},so,{get:Hs,set:Ys}),la=e=>e,tr=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);n||(t!==i&&ye(a,"get",t),ye(a,"get",i));const{has:o}=tr(a),s=r?la:n?da:en;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return t||(e!==a&&ye(r,"has",e),ye(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function xn(e,t=!1){return e=e.__v_raw,!t&&ye(W(e),"iterate",bt),Reflect.get(e,"size",e)}function qa(e){e=W(e);const t=W(this);return tr(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Ja(e,t){t=W(t);const n=W(this),{has:r,get:a}=tr(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function Xa(e){const t=W(this),{has:n,get:r}=tr(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Ga(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?la:e?da:en;return!e&&ye(s,"iterate",bt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function An(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=Ot(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?la:t?da:en;return!t&&ye(i,"iterate",l?Or:bt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function Gs(){const e={get(i){return wn(this,i)},get size(){return xn(this)},has:_n,add:qa,set:Ja,delete:Xa,clear:Ga,forEach:kn(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return xn(this)},has:_n,add:qa,set:Ja,delete:Xa,clear:Ga,forEach:kn(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return xn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:kn(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return xn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=An(i,!1,!1),n[i]=An(i,!0,!1),t[i]=An(i,!1,!0),r[i]=An(i,!0,!0)}),[e,n,t,r]}const[Zs,Qs,el,tl]=Gs();function ca(e,t){const n=t?e?tl:el:e?Qs:Zs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const nl={get:ca(!1,!1)},rl={get:ca(!1,!0)},al={get:ca(!0,!1)},lo=new WeakMap,co=new WeakMap,fo=new WeakMap,il=new WeakMap;function ol(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(e){return e.__v_skip||!Object.isExtensible(e)?0:ol(Is(e))}function fa(e){return Nt(e)?e:ua(e,!1,so,nl,lo)}function ll(e){return ua(e,!1,Xs,rl,co)}function uo(e){return ua(e,!0,Js,al,fo)}function ua(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Pt(e){return Nt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function mo(e){return Pt(e)||Nt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function po(e){return Hn(e,"__v_skip",!0),e}const en=e=>Z(e)?fa(e):e,da=e=>Z(e)?uo(e):e;function ho(e){et&&Ee&&(e=W(e),ao(e.dep||(e.dep=ia())))}function go(e,t){e=W(e),e.dep&&Pr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Le(e){return cl(e,!1)}function cl(e,t){return fe(e)?e:new fl(e,t)}class fl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:en(t)}get value(){return ho(this),this._value}set value(t){const n=this.__v_isShallow||Wn(t)||Nt(t);t=n?t:W(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),go(this))}}function le(e){return fe(e)?e.value:e}const ul={get:(e,t,n)=>le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function vo(e){return Pt(e)?e:new Proxy(e,ul)}var bo;class dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[bo]=!1,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,go(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return ho(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}bo="__v_isReadonly";function ml(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new dl(r,a,i||!a,n)}function tt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){nr(i,t,n)}return a}function Ie(e,t,n,r){if($(e)){const i=tt(e,t,n,r);return i&&Zi(i)&&i.catch(o=>{nr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function nr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}pl(e,n,a,r)}function pl(e,t,n,r=!0){console.error(e)}let tn=!1,Ir=!1;const ce=[];let ze=0;const It=[];let Ue=null,ut=0;const yo=Promise.resolve();let ma=null;function hl(e){const t=ma||yo;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=ze+1,n=ce.length;for(;t<n;){const r=t+n>>>1;nn(ce[r])<e?t=r+1:n=r}return t}function pa(e){(!ce.length||!ce.includes(e,tn&&e.allowRecurse?ze+1:ze))&&(e.id==null?ce.push(e):ce.splice(gl(e.id),0,e),wo())}function wo(){!tn&&!Ir&&(Ir=!0,ma=yo.then(xo))}function vl(e){const t=ce.indexOf(e);t>ze&&ce.splice(t,1)}function bl(e){L(e)?It.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ut+1:ut))&&It.push(e),wo()}function Za(e,t=tn?ze+1:0){for(;t<ce.length;t++){const n=ce[t];n&&n.pre&&(ce.splice(t,1),t--,n())}}function _o(e){if(It.length){const t=[...new Set(It)];if(It.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>nn(n)-nn(r)),ut=0;ut<Ue.length;ut++)Ue[ut]();Ue=null,ut=0}}const nn=e=>e.id==null?1/0:e.id,yl=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xo(e){Ir=!1,tn=!0,ce.sort(yl);const t=Pe;try{for(ze=0;ze<ce.length;ze++){const n=ce[ze];n&&n.active!==!1&&tt(n,null,14)}}finally{ze=0,ce.length=0,_o(),tn=!1,ma=null,(ce.length||It.length)&&xo()}}function wl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||U;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||U;h&&(a=n.map(y=>y.trim())),m&&(a=n.map(Ns))}let s,l=r[s=gr(t)]||r[s=gr(Re(t))];!l&&i&&(l=r[s=gr($t(t))]),l&&Ie(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(f,e,6,a)}}function ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=f=>{const u=ko(f,t,!0);u&&(s=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):me(o,i),Z(e)&&r.set(e,o),o)}function rr(e,t){return!e||!Gn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,$t(t))||H(e,t))}let xe=null,ar=null;function Bn(e){const t=xe;return xe=e,ar=e&&e.type.__scopeId||null,t}function _l(e){ar=e}function xl(){ar=null}function kl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&li(-1);const i=Bn(t);let o;try{o=e(...a)}finally{Bn(i),r._d&&li(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:y,ctx:N,inheritAttrs:I}=e;let z,w;const C=Bn(e);try{if(n.shapeFlag&4){const D=a||r;z=$e(u.call(D,D,m,i,y,h,N)),w=l}else{const D=t;z=$e(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),w=t.props?l:Al(l)}}catch(D){Jt.length=0,nr(D,e,1),z=G(wt)}let F=z;if(w&&I!==!1){const D=Object.keys(w),{shapeFlag:Y}=F;D.length&&Y&7&&(o&&D.some(ta)&&(w=El(w,o)),F=jt(F,w))}return n.dirs&&(F=jt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),z=F,Bn(C),z}const Al=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gn(n))&&((t||(t={}))[n]=e[n]);return t},El=(e,t)=>{const n={};for(const r in e)(!ta(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qa(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!rr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Qa(r,o,f):!0:!!o;return!1}function Qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!rr(n,i))return!0}return!1}function Cl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function Pl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):bl(e)}function Il(e,t){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[e]=t}}function yr(e,t,n=!1){const r=ie||xe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r.proxy):t}}function Tl(e,t){return ir(e,null,t)}function Ml(e,t){return ir(e,null,{flush:"post"})}const ei={};function Ln(e,t,n){return ir(e,t,n)}function ir(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=U){const s=ie;let l,f=!1,u=!1;if(fe(e)?(l=()=>e.value,f=Wn(e)):Pt(e)?(l=()=>e,r=!0):L(e)?(u=!0,f=e.some(w=>Pt(w)||Wn(w)),l=()=>e.map(w=>{if(fe(w))return w.value;if(Pt(w))return pt(w);if($(w))return tt(w,s,2)})):$(e)?t?l=()=>tt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[h])}:l=Pe,t&&r){const w=l;l=()=>pt(w())}let m,h=w=>{m=z.onStop=()=>{tt(w,s,4)}};if(sn)return h=Pe,t?n&&Ie(t,s,3,[l(),u?[]:void 0,h]):l(),Pe;let y=u?[]:ei;const N=()=>{if(!!z.active)if(t){const w=z.run();(r||f||(u?w.some((C,F)=>Qt(C,y[F])):Qt(w,y)))&&(m&&m(),Ie(t,s,3,[w,y===ei?void 0:y,h]),y=w)}else z.run()};N.allowRecurse=!!t;let I;a==="sync"?I=N:a==="post"?I=()=>ge(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),I=()=>pa(N));const z=new oa(l,I);return t?n?N():y=z.run():a==="post"?ge(z.run.bind(z),s&&s.suspense):z.run(),()=>{z.stop(),s&&s.scope&&na(s.scope.effects,z)}}function Nl(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=ie;Ft(this);const s=ir(a,i.bind(r),n);return o?Ft(o):yt(),s}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))pt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(Gi(e)||Ot(e))e.forEach(n=>{pt(n,t)});else if(eo(e))for(const n in e)pt(e[n],t);return e}function ha(e){return $(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader,Eo=e=>e.type.__isKeepAlive;function jl(e,t){So(e,"a",t)}function Fl(e,t){So(e,"da",t)}function So(e,t,n=ie){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Eo(a.parent.vnode)&&Ll(r,t,n,a),a=a.parent}}function Ll(e,t,n,r){const a=or(t,e,r,!0);va(()=>{na(r[t],a)},n)}function or(e,t,n=ie,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),Ft(n);const s=Ie(t,n,e,o);return yt(),Dt(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=ie)=>(!sn||e==="sp")&&or(e,(...r)=>t(...r),n),$l=Je("bm"),ga=Je("m"),zl=Je("bu"),Dl=Je("u"),Rl=Je("bum"),va=Je("um"),Hl=Je("sp"),Wl=Je("rtg"),Bl=Je("rtc");function Ul(e,t=ie){or("ec",e,t)}function Tt(e,t){const n=xe;if(n===null)return e;const r=lr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=U]=t[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&pt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(zt(),Ie(l,n,8,[e.el,s,e,t]),Dt())}}const Yl="components",Kl="directives",Vl=Symbol();function ba(e){return ql(Kl,e)}function ql(e,t,n=!0,r=!1){const a=xe||ie;if(a){const i=a.type;if(e===Yl){const s=Sc(i,!1);if(s&&(s===t||s===Re(t)||s===er(Re(t))))return i}const o=ti(a[e]||i[e],t)||ti(a.appContext[e],t);return!o&&r?i:o}}function ti(e,t){return e&&(e[t]||e[Re(t)]||e[er(Re(t))])}function rn(e,t,n,r){let a;const i=n&&n[r];if(L(e)||oe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Tr=e=>e?$o(e)?lr(e)||e.proxy:Tr(e.parent):null,Un=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>ya(e),$forceUpdate:e=>e.f||(e.f=()=>pa(e.update)),$nextTick:e=>e.n||(e.n=hl.bind(e.proxy)),$watch:e=>Nl.bind(e)}),Jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==U&&H(r,t))return o[t]=1,r[t];if(a!==U&&H(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&H(f,t))return o[t]=3,i[t];if(n!==U&&H(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const u=Un[t];let m,h;if(u)return t==="$attrs"&&ye(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==U&&H(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==U&&H(a,t)?(a[t]=n,!0):r!==U&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==U&&H(e,o)||t!==U&&H(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Un,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Mr=!0;function Xl(e){const t=ya(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&ni(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:N,activated:I,deactivated:z,beforeDestroy:w,beforeUnmount:C,destroyed:F,unmounted:D,render:Y,renderTracked:pe,renderTriggered:se,errorCaptured:ke,serverPrefetch:_e,expose:We,inheritAttrs:Ht,components:gn,directives:vn,filters:mr}=t;if(f&&Gl(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const K=o[Q];$(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);Z(Q)&&(e.data=fa(Q))}if(Mr=!0,i)for(const Q in i){const K=i[Q],ot=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Pe,bn=!$(K)&&$(K.set)?K.set.bind(n):Pe,st=be({get:ot,set:bn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>st.value,set:Te=>st.value=Te})}if(s)for(const Q in s)Co(s[Q],r,n,Q);if(l){const Q=$(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{Il(K,Q[K])})}u&&ni(u,e,"c");function ue(Q,K){L(K)?K.forEach(ot=>Q(ot.bind(n))):K&&Q(K.bind(n))}if(ue($l,m),ue(ga,h),ue(zl,y),ue(Dl,N),ue(jl,I),ue(Fl,z),ue(Ul,ke),ue(Bl,pe),ue(Wl,se),ue(Rl,C),ue(va,D),ue(Hl,_e),L(We))if(We.length){const Q=e.exposed||(e.exposed={});We.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:ot=>n[K]=ot})})}else e.exposed||(e.exposed={});Y&&e.render===Pe&&(e.render=Y),Ht!=null&&(e.inheritAttrs=Ht),gn&&(e.components=gn),vn&&(e.directives=vn)}function Gl(e,t,n=Pe,r=!1){L(e)&&(e=Nr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=yr(i.from||a,i.default,!0):o=yr(i.from||a):o=yr(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ni(e,t,n){Ie(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Co(e,t,n,r){const a=r.includes(".")?Ao(n,r):()=>n[r];if(oe(e)){const i=t[e];$(i)&&Ln(a,i)}else if($(e))Ln(a,e.bind(n));else if(Z(e))if(L(e))e.forEach(i=>Co(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&Ln(a,i,e)}}function ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Yn(l,f,o,!0)),Yn(l,t,o)),Z(t)&&i.set(t,l),l}function Yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Yn(e,i,n,!0),a&&a.forEach(o=>Yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Zl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Zl={data:ri,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ft,directives:ft,watch:ec,provide:ri,inject:Ql};function ri(e,t){return t?e?function(){return me($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return ft(Nr(e),Nr(t))}function Nr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?me(me(Object.create(null),e),t):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function tc(e,t,n,r=!1){const a={},i={};Hn(i,sr,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function nc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(rr(e.emitsOptions,h))continue;const y=t[h];if(l)if(H(i,h))y!==i[h]&&(i[h]=y,f=!0);else{const N=Re(h);a[N]=jr(l,s,N,y,e,!1)}else y!==i[h]&&(i[h]=y,f=!0)}}}else{Oo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!H(t,m)&&((u=$t(m))===m||!H(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=jr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m)&&!0)&&(delete i[m],f=!0)}f&&Ye(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Fn(l))continue;const f=t[l];let u;a&&H(a,u=Re(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:rr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=W(n),f=s||U;for(let u=0;u<i.length;u++){const m=i[u];n[m]=jr(a,l,m,f[m],e,!H(f,m))}}return o}function jr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ft(a),r=f[n]=l.call(null,t),yt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function Po(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[h,y]=Po(m,t,!0);me(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Z(e)&&r.set(e,Ct),Ct;if(L(i))for(let u=0;u<i.length;u++){const m=Re(i[u]);ai(m)&&(o[m]=U)}else if(i)for(const u in i){const m=Re(u);if(ai(m)){const h=i[u],y=o[m]=L(h)||$(h)?{type:h}:h;if(y){const N=si(Boolean,y.type),I=si(String,y.type);y[0]=N>-1,y[1]=I<0||N<I,(N>-1||H(y,"default"))&&s.push(m)}}}const f=[o,s];return Z(e)&&r.set(e,f),f}function ai(e){return e[0]!=="$"}function ii(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function oi(e,t){return ii(e)===ii(t)}function si(e,t){return L(t)?t.findIndex(n=>oi(n,e)):$(t)&&oi(t,e)?0:-1}const Io=e=>e[0]==="_"||e==="$stable",wa=e=>L(e)?e.map($e):[$e(e)],rc=(e,t,n)=>{if(t._n)return t;const r=kl((...a)=>wa(t(...a)),n);return r._c=!1,r},To=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Io(a))continue;const i=e[a];if($(i))t[a]=rc(a,i,r);else if(i!=null){const o=wa(i);t[a]=()=>o}}},Mo=(e,t)=>{const n=wa(t);e.slots.default=()=>n},ac=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Hn(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&Mo(e,t);Hn(e.slots,sr,1)},ic=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=U;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,To(t,a)),o=t}else t&&(Mo(e,t),o={default:1});if(i)for(const s in a)!Io(s)&&!(s in o)&&delete a[s]};function No(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function sc(e,t){return function(r,a=null){$(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=No(),o=new Set;let s=!1;const l=i.app={_uid:oc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Oc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...u)):$(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=G(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,lr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Fr(e,t,n,r,a=!1){if(L(e)){e.forEach((h,y)=>Fr(h,t&&(L(t)?t[y]:t),n,r,a));return}if($n(r)&&!a)return;const i=r.shapeFlag&4?lr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===U?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(oe(f)?(u[f]=null,H(m,f)&&(m[f]=null)):fe(f)&&(f.value=null)),$(l))tt(l,s,12,[o,u]);else{const h=oe(l),y=fe(l);if(h||y){const N=()=>{if(e.f){const I=h?H(m,l)?m[l]:u[l]:l.value;a?L(I)&&na(I,i):L(I)?I.includes(i)||I.push(i):h?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,H(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(N.id=-1,ge(N,n)):N()}}}const ge=Pl;function lc(e){return cc(e)}function cc(e,t){const n=js();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Pe,insertStaticContent:N}=e,I=(c,d,p,v=null,g=null,x=null,E=!1,_=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!Bt(c,d)&&(v=yn(c),Te(c,g,x,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:O}=d;switch(b){case _a:z(c,d,p,v);break;case wt:w(c,d,p,v);break;case qt:c==null&&C(d,p,v,E);break;case ae:gn(c,d,p,v,g,x,E,_,A);break;default:O&1?Y(c,d,p,v,g,x,E,_,A):O&6?vn(c,d,p,v,g,x,E,_,A):(O&64||O&128)&&b.process(c,d,p,v,g,x,E,_,A,kt)}T!=null&&g&&Fr(T,c&&c.ref,x,d||c,!d)},z=(c,d,p,v)=>{if(c==null)r(d.el=s(d.children),p,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},w=(c,d,p,v)=>{c==null?r(d.el=l(d.children||""),p,v):d.el=c.el},C=(c,d,p,v)=>{[c.el,c.anchor]=N(c.children,d,p,v,c.el,c.anchor)},F=({el:c,anchor:d},p,v)=>{let g;for(;c&&c!==d;)g=h(c),r(c,p,v),c=g;r(d,p,v)},D=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},Y=(c,d,p,v,g,x,E,_,A)=>{E=E||d.type==="svg",c==null?pe(d,p,v,g,x,E,_,A):_e(c,d,g,x,E,_,A)},pe=(c,d,p,v,g,x,E,_)=>{let A,b;const{type:T,props:O,shapeFlag:M,transition:j,dirs:R}=c;if(A=c.el=o(c.type,x,O&&O.is,O),M&8?u(A,c.children):M&16&&ke(c.children,A,null,v,g,x&&T!=="foreignObject",E,_),R&&lt(c,null,v,"created"),O){for(const B in O)B!=="value"&&!Fn(B)&&i(A,B,null,O[B],x,c.children,v,g,Be);"value"in O&&i(A,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ne(b,v,c)}se(A,c,c.scopeId,E,v),R&&lt(c,null,v,"beforeMount");const V=(!g||g&&!g.pendingBranch)&&j&&!j.persisted;V&&j.beforeEnter(A),r(A,d,p),((b=O&&O.onVnodeMounted)||V||R)&&ge(()=>{b&&Ne(b,v,c),V&&j.enter(A),R&&lt(c,null,v,"mounted")},g)},se=(c,d,p,v,g)=>{if(p&&y(c,p),v)for(let x=0;x<v.length;x++)y(c,v[x]);if(g){let x=g.subTree;if(d===x){const E=g.vnode;se(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},ke=(c,d,p,v,g,x,E,_,A=0)=>{for(let b=A;b<c.length;b++){const T=c[b]=_?Qe(c[b]):$e(c[b]);I(null,T,d,p,v,g,x,E,_)}},_e=(c,d,p,v,g,x,E)=>{const _=d.el=c.el;let{patchFlag:A,dynamicChildren:b,dirs:T}=d;A|=c.patchFlag&16;const O=c.props||U,M=d.props||U;let j;p&&ct(p,!1),(j=M.onVnodeBeforeUpdate)&&Ne(j,p,d,c),T&&lt(d,c,p,"beforeUpdate"),p&&ct(p,!0);const R=g&&d.type!=="foreignObject";if(b?We(c.dynamicChildren,b,_,p,v,R,x):E||K(c,d,_,null,p,v,R,x,!1),A>0){if(A&16)Ht(_,d,O,M,p,v,g);else if(A&2&&O.class!==M.class&&i(_,"class",null,M.class,g),A&4&&i(_,"style",O.style,M.style,g),A&8){const V=d.dynamicProps;for(let B=0;B<V.length;B++){const te=V[B],Ae=O[te],At=M[te];(At!==Ae||te==="value")&&i(_,te,Ae,At,g,c.children,p,v,Be)}}A&1&&c.children!==d.children&&u(_,d.children)}else!E&&b==null&&Ht(_,d,O,M,p,v,g);((j=M.onVnodeUpdated)||T)&&ge(()=>{j&&Ne(j,p,d,c),T&&lt(d,c,p,"updated")},v)},We=(c,d,p,v,g,x,E)=>{for(let _=0;_<d.length;_++){const A=c[_],b=d[_],T=A.el&&(A.type===ae||!Bt(A,b)||A.shapeFlag&70)?m(A.el):p;I(A,b,T,null,v,g,x,E,!0)}},Ht=(c,d,p,v,g,x,E)=>{if(p!==v){if(p!==U)for(const _ in p)!Fn(_)&&!(_ in v)&&i(c,_,p[_],null,E,d.children,g,x,Be);for(const _ in v){if(Fn(_))continue;const A=v[_],b=p[_];A!==b&&_!=="value"&&i(c,_,b,A,E,d.children,g,x,Be)}"value"in v&&i(c,"value",p.value,v.value)}},gn=(c,d,p,v,g,x,E,_,A)=>{const b=d.el=c?c.el:s(""),T=d.anchor=c?c.anchor:s("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:j}=d;j&&(_=_?_.concat(j):j),c==null?(r(b,p,v),r(T,p,v),ke(d.children,p,T,g,x,E,_,A)):O>0&&O&64&&M&&c.dynamicChildren?(We(c.dynamicChildren,M,p,g,x,E,_),(d.key!=null||g&&d===g.subTree)&&jo(c,d,!0)):K(c,d,p,T,g,x,E,_,A)},vn=(c,d,p,v,g,x,E,_,A)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?g.ctx.activate(d,p,v,E,A):mr(d,p,v,g,x,E,A):za(c,d,A)},mr=(c,d,p,v,g,x,E)=>{const _=c.component=wc(c,v,g);if(Eo(c)&&(_.ctx.renderer=kt),xc(_),_.asyncDep){if(g&&g.registerDep(_,ue),!c.el){const A=_.subTree=G(wt);w(null,A,d,p)}return}ue(_,c,d,p,g,x,E)},za=(c,d,p)=>{const v=d.component=c.component;if(Sl(c,d,p))if(v.asyncDep&&!v.asyncResolved){Q(v,d,p);return}else v.next=d,vl(v.update),v.update();else d.el=c.el,v.vnode=d},ue=(c,d,p,v,g,x,E)=>{const _=()=>{if(c.isMounted){let{next:T,bu:O,u:M,parent:j,vnode:R}=c,V=T,B;ct(c,!1),T?(T.el=R.el,Q(c,T,E)):T=R,O&&vr(O),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Ne(B,j,T,R),ct(c,!0);const te=br(c),Ae=c.subTree;c.subTree=te,I(Ae,te,m(Ae.el),yn(Ae),c,g,x),T.el=te.el,V===null&&Cl(c,te.el),M&&ge(M,g),(B=T.props&&T.props.onVnodeUpdated)&&ge(()=>Ne(B,j,T,R),g)}else{let T;const{el:O,props:M}=d,{bm:j,m:R,parent:V}=c,B=$n(d);if(ct(c,!1),j&&vr(j),!B&&(T=M&&M.onVnodeBeforeMount)&&Ne(T,V,d),ct(c,!0),O&&hr){const te=()=>{c.subTree=br(c),hr(O,c.subTree,c,g,null)};B?d.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=br(c);I(null,te,p,v,c,g,x),d.el=te.el}if(R&&ge(R,g),!B&&(T=M&&M.onVnodeMounted)){const te=d;ge(()=>Ne(T,V,te),g)}(d.shapeFlag&256||V&&$n(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&ge(c.a,g),c.isMounted=!0,d=p=v=null}},A=c.effect=new oa(_,()=>pa(b),c.scope),b=c.update=()=>A.run();b.id=c.uid,ct(c,!0),b()},Q=(c,d,p)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,nc(c,d.props,v,p),ic(c,d.children,p),zt(),Za(),Dt()},K=(c,d,p,v,g,x,E,_,A=!1)=>{const b=c&&c.children,T=c?c.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:j}=d;if(M>0){if(M&128){bn(b,O,p,v,g,x,E,_,A);return}else if(M&256){ot(b,O,p,v,g,x,E,_,A);return}}j&8?(T&16&&Be(b,g,x),O!==b&&u(p,O)):T&16?j&16?bn(b,O,p,v,g,x,E,_,A):Be(b,g,x,!0):(T&8&&u(p,""),j&16&&ke(O,p,v,g,x,E,_,A))},ot=(c,d,p,v,g,x,E,_,A)=>{c=c||Ct,d=d||Ct;const b=c.length,T=d.length,O=Math.min(b,T);let M;for(M=0;M<O;M++){const j=d[M]=A?Qe(d[M]):$e(d[M]);I(c[M],j,p,null,g,x,E,_,A)}b>T?Be(c,g,x,!0,!1,O):ke(d,p,v,g,x,E,_,A,O)},bn=(c,d,p,v,g,x,E,_,A)=>{let b=0;const T=d.length;let O=c.length-1,M=T-1;for(;b<=O&&b<=M;){const j=c[b],R=d[b]=A?Qe(d[b]):$e(d[b]);if(Bt(j,R))I(j,R,p,null,g,x,E,_,A);else break;b++}for(;b<=O&&b<=M;){const j=c[O],R=d[M]=A?Qe(d[M]):$e(d[M]);if(Bt(j,R))I(j,R,p,null,g,x,E,_,A);else break;O--,M--}if(b>O){if(b<=M){const j=M+1,R=j<T?d[j].el:v;for(;b<=M;)I(null,d[b]=A?Qe(d[b]):$e(d[b]),p,R,g,x,E,_,A),b++}}else if(b>M)for(;b<=O;)Te(c[b],g,x,!0),b++;else{const j=b,R=b,V=new Map;for(b=R;b<=M;b++){const ve=d[b]=A?Qe(d[b]):$e(d[b]);ve.key!=null&&V.set(ve.key,b)}let B,te=0;const Ae=M-R+1;let At=!1,Ha=0;const Wt=new Array(Ae);for(b=0;b<Ae;b++)Wt[b]=0;for(b=j;b<=O;b++){const ve=c[b];if(te>=Ae){Te(ve,g,x,!0);continue}let Me;if(ve.key!=null)Me=V.get(ve.key);else for(B=R;B<=M;B++)if(Wt[B-R]===0&&Bt(ve,d[B])){Me=B;break}Me===void 0?Te(ve,g,x,!0):(Wt[Me-R]=b+1,Me>=Ha?Ha=Me:At=!0,I(ve,d[Me],p,null,g,x,E,_,A),te++)}const Wa=At?fc(Wt):Ct;for(B=Wa.length-1,b=Ae-1;b>=0;b--){const ve=R+b,Me=d[ve],Ba=ve+1<T?d[ve+1].el:v;Wt[b]===0?I(null,Me,p,Ba,g,x,E,_,A):At&&(B<0||b!==Wa[B]?st(Me,p,Ba,2):B--)}}},st=(c,d,p,v,g=null)=>{const{el:x,type:E,transition:_,children:A,shapeFlag:b}=c;if(b&6){st(c.component.subTree,d,p,v);return}if(b&128){c.suspense.move(d,p,v);return}if(b&64){E.move(c,d,p,kt);return}if(E===ae){r(x,d,p);for(let O=0;O<A.length;O++)st(A[O],d,p,v);r(c.anchor,d,p);return}if(E===qt){F(c,d,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(x),r(x,d,p),ge(()=>_.enter(x),g);else{const{leave:O,delayLeave:M,afterLeave:j}=_,R=()=>r(x,d,p),V=()=>{O(x,()=>{R(),j&&j()})};M?M(x,R,V):V()}else r(x,d,p)},Te=(c,d,p,v=!1,g=!1)=>{const{type:x,props:E,ref:_,children:A,dynamicChildren:b,shapeFlag:T,patchFlag:O,dirs:M}=c;if(_!=null&&Fr(_,null,p,c,!0),T&256){d.ctx.deactivate(c);return}const j=T&1&&M,R=!$n(c);let V;if(R&&(V=E&&E.onVnodeBeforeUnmount)&&Ne(V,d,c),T&6)_s(c.component,p,v);else{if(T&128){c.suspense.unmount(p,v);return}j&&lt(c,null,d,"beforeUnmount"),T&64?c.type.remove(c,d,p,g,kt,v):b&&(x!==ae||O>0&&O&64)?Be(b,d,p,!1,!0):(x===ae&&O&384||!g&&T&16)&&Be(A,d,p),v&&Da(c)}(R&&(V=E&&E.onVnodeUnmounted)||j)&&ge(()=>{V&&Ne(V,d,c),j&&lt(c,null,d,"unmounted")},p)},Da=c=>{const{type:d,el:p,anchor:v,transition:g}=c;if(d===ae){ws(p,v);return}if(d===qt){D(c);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:_}=g,A=()=>E(p,x);_?_(c.el,x,A):A()}else x()},ws=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},_s=(c,d,p)=>{const{bum:v,scope:g,update:x,subTree:E,um:_}=c;v&&vr(v),g.stop(),x&&(x.active=!1,Te(E,c,d,p)),_&&ge(_,d),ge(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Be=(c,d,p,v=!1,g=!1,x=0)=>{for(let E=x;E<c.length;E++)Te(c[E],d,p,v,g)},yn=c=>c.shapeFlag&6?yn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ra=(c,d,p)=>{c==null?d._vnode&&Te(d._vnode,null,null,!0):I(d._vnode||null,c,d,null,null,null,p),Za(),_o(),d._vnode=c},kt={p:I,um:Te,m:st,r:Da,mt:mr,mc:ke,pc:K,pbc:We,n:yn,o:e};let pr,hr;return t&&([pr,hr]=t(kt)),{render:Ra,hydrate:pr,createApp:sc(Ra,pr)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||jo(o,s))}}function fc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const uc=e=>e.__isTeleport,ae=Symbol(void 0),_a=Symbol(void 0),wt=Symbol(void 0),qt=Symbol(void 0),Jt=[];let Ce=null;function q(e=!1){Jt.push(Ce=e?null:[])}function dc(){Jt.pop(),Ce=Jt[Jt.length-1]||null}let an=1;function li(e){an+=e}function Fo(e){return e.dynamicChildren=an>0?Ce||Ct:null,dc(),an>0&&Ce&&Ce.push(e),e}function ne(e,t,n,r,a,i){return Fo(k(e,t,n,r,a,i,!0))}function on(e,t,n,r,a){return Fo(G(e,t,n,r,a,!0))}function Lr(e){return e?e.__v_isVNode===!0:!1}function Bt(e,t){return e.type===t.type&&e.key===t.key}const sr="__vInternal",Lo=({key:e})=>e!=null?e:null,zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||fe(e)||$(e)?{i:xe,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,a=null,i=e===ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lo(t),ref:t&&zn(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(xa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),an>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const G=mc;function mc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Vl)&&(e=wt),Lr(e)){const s=jt(e,t,!0);return n&&xa(s,n),an>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(Cc(e)&&(e=e.__vccOpts),t){t=pc(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=ea(s)),Z(l)&&(mo(l)&&!L(l)&&(l=me({},l)),t.style=Qr(l))}const o=oe(e)?1:Ol(e)?128:uc(e)?64:Z(e)?4:$(e)?2:0;return k(e,t,n,r,a,o,i,!0)}function pc(e){return e?mo(e)||sr in e?me({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Lo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor}}function hc(e=" ",t=0){return G(_a,null,e,t)}function gc(e,t){const n=G(qt,null,e);return n.staticCount=t,n}function ht(e="",t=!1){return t?(q(),on(wt,null,e)):G(wt,null,e)}function $e(e){return e==null||typeof e=="boolean"?G(wt):L(e)?G(ae,null,e.slice()):typeof e=="object"?Qe(e):G(_a,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function xa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),xa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(sr in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[hc(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ea([t.class,r.class]));else if(a==="style")t.style=Qr([t.style,r.style]);else if(Gn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Ie(e,t,7,[n,r])}const bc=No();let yc=0;function wc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||bc,i={uid:yc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Po(r,a),emitsOptions:ko(r,a),emit:null,emitted:null,propsDefaults:U,inheritAttrs:r.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wl.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const _c=()=>ie||xe,Ft=e=>{ie=e,e.scope.on()},yt=()=>{ie&&ie.scope.off(),ie=null};function $o(e){return e.vnode.shapeFlag&4}let sn=!1;function xc(e,t=!1){sn=t;const{props:n,children:r}=e.vnode,a=$o(e);tc(e,n,a,t),ac(e,r);const i=a?kc(e,t):void 0;return sn=!1,i}function kc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=po(new Proxy(e.ctx,Jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ec(e):null;Ft(e),zt();const i=tt(r,e,0,[e.props,a]);if(Dt(),yt(),Zi(i)){if(i.then(yt,yt),t)return i.then(o=>{ci(e,o,t)}).catch(o=>{nr(o,e,0)});e.asyncDep=i}else ci(e,i,t)}else zo(e,t)}function ci(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=vo(t)),zo(e,n)}let fi;function zo(e,t,n){const r=e.type;if(!e.render){if(!t&&fi&&!r.render){const a=r.template||ya(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=me(me({isCustomElement:i,delimiters:s},o),l);r.render=fi(a,f)}}e.render=r.render||Pe}Ft(e),zt(),Xl(e),Dt(),yt()}function Ac(e){return new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}})}function Ec(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ac(e))},slots:e.slots,emit:e.emit,expose:t}}function lr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vo(po(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Un)return Un[n](e)}}))}function Sc(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Cc(e){return $(e)&&"__vccOpts"in e}const be=(e,t)=>ml(e,t,sn);function Do(e,t,n){const r=arguments.length;return r===2?Z(t)&&!L(t)?Lr(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),G(e,t,n))}const Oc="3.2.41",Pc="http://www.w3.org/2000/svg",dt=typeof document<"u"?document:null,ui=dt&&dt.createElement("template"),Ic={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(Pc,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ui.innerHTML=r?`<svg>${e}</svg>`:e;const s=ui.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Tc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mc(e,t,n){const r=e.style,a=oe(n);if(n&&!a){for(const i in n)$r(r,i,n[i]);if(t&&!oe(t))for(const i in t)n[i]==null&&$r(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const di=/\s*!important$/;function $r(e,t,n){if(L(n))n.forEach(r=>$r(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nc(e,t);di.test(n)?e.setProperty($t(r),n.replace(di,""),"important"):e[r]=n}}const mi=["Webkit","Moz","ms"],wr={};function Nc(e,t){const n=wr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return wr[t]=r;r=er(r);for(let a=0;a<mi.length;a++){const i=mi[a]+r;if(i in e)return wr[t]=i}return t}const pi="http://www.w3.org/1999/xlink";function jc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n);else{const i=ks(t);n==null||i&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Fc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ji(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Lc(e,t,n,r){e.addEventListener(t,n,r)}function $c(e,t,n,r){e.removeEventListener(t,n,r)}function zc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Dc(t);if(r){const f=i[t]=Wc(r,a);Lc(e,s,f,l)}else o&&($c(e,s,o,l),i[t]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function Dc(e){let t;if(hi.test(e)){t={};let r;for(;r=e.match(hi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let _r=0;const Rc=Promise.resolve(),Hc=()=>_r||(Rc.then(()=>_r=0),_r=Date.now());function Wc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(Bc(r,n.value),t,5,[r])};return n.value=e,n.attached=Hc(),n}function Bc(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const gi=/^on[a-z]/,Uc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Tc(e,r,a):t==="style"?Mc(e,n,r):Gn(t)?ta(t)||zc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yc(e,t,r,a))?Fc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jc(e,t,r,a))};function Yc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gi.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gi.test(t)&&oe(n)?!1:t in e}function ka(e){const t=_c();if(!t)return;const n=()=>zr(t.subTree,e(t.proxy));Ml(n),ga(()=>{const r=new MutationObserver(n);r.observe(t.subTree.el.parentNode,{childList:!0}),va(()=>r.disconnect())})}function zr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{zr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)vi(e.el,t);else if(e.type===ae)e.children.forEach(n=>zr(n,t));else if(e.type===qt){let{el:n,anchor:r}=e;for(;n&&(vi(n,t),n!==r);)n=n.nextSibling}}function vi(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const bi={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ut(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ut(e,!0),r.enter(e)):r.leave(e,()=>{Ut(e,!1)}):Ut(e,t))},beforeUnmount(e,{value:t}){Ut(e,t)}};function Ut(e,t){e.style.display=t?e._vod:"none"}const Kc=me({patchProp:Uc},Ic);let yi;function Vc(){return yi||(yi=lc(Kc))}const qc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Jc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Jc(e){return oe(e)?document.querySelector(e):e}function wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wi(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function Xc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gc(e,t,n){return t&&_i(e.prototype,t),n&&_i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Aa(e,t){return Qc(e)||tf(e,t)||Ro(e,t)||rf()}function mn(e){return Zc(e)||ef(e)||Ro(e)||nf()}function Zc(e){if(Array.isArray(e))return Dr(e)}function Qc(e){if(Array.isArray(e))return e}function ef(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(e,t){if(!!e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xi=function(){},Ea={},Ho={},Wo=null,Bo={mark:xi,measure:xi};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Wo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var af=Ea.navigator||{},ki=af.userAgent,Ai=ki===void 0?"":ki,rt=Ea,X=Ho,Ei=Wo,En=Bo;rt.document;var Xe=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Uo=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),Sn,Cn,On,Pn,In,Ke="___FONT_AWESOME___",Rr=16,Yo="fa",Ko="svg-inline--fa",_t="data-fa-i2svg",Hr="data-fa-pseudo-element",of="data-fa-pseudo-element-pending",Sa="data-prefix",Ca="data-icon",Si="fontawesome-i2svg",sf="async",lf=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),J="classic",ee="sharp",Oa=[J,ee];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[J]}})}var ln=pn((Sn={},re(Sn,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(Sn,ee,{fa:"solid",fass:"solid","fa-solid":"solid"}),Sn)),cn=pn((Cn={},re(Cn,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(Cn,ee,{solid:"fass"}),Cn)),fn=pn((On={},re(On,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(On,ee,{fass:"fa-solid"}),On)),cf=pn((Pn={},re(Pn,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(Pn,ee,{"fa-solid":"fass"}),Pn)),ff=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,qo="fa-layers-text",uf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,df=pn((In={},re(In,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(In,ee,{900:"fass"}),In)),Jo=[1,2,3,4,5,6,7,8,9,10],mf=Jo.concat([11,12,13,14,15,16,17,18,19,20]),pf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[J]).map(un.add.bind(un));Object.keys(cn[ee]).map(un.add.bind(un));var hf=[].concat(Oa,mn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(Jo.map(function(e){return"".concat(e,"x")})).concat(mf.map(function(e){return"w-".concat(e)})),Xt=rt.FontAwesomeConfig||{};function gf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var bf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bf.forEach(function(e){var t=Aa(e,2),n=t[0],r=t[1],a=vf(gf(n));a!=null&&(Xt[r]=a)})}var Xo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yo,replacementClass:Ko,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var Lt=S(S({},Xo),Xt);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var P={};Object.keys(Xo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Lt[e]=n,Gt.forEach(function(r){return r(P)})},get:function(){return Lt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Lt.cssPrefix=t,Gt.forEach(function(n){return n(P)})},get:function(){return Lt.cssPrefix}});rt.FontAwesomeConfig=P;var Gt=[];function yf(e){return Gt.push(e),function(){Gt.splice(Gt.indexOf(e),1)}}var Ze=Rr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wf(e){if(!(!e||!Xe)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var _f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=_f[Math.random()*62|0];return t}function Rt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pa(e){return e.classList?Rt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Go(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Go(e[n]),'" ')},"").trim()}function cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ia(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function kf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Af(e){var t=e.transform,n=e.width,r=n===void 0?Rr:n,a=e.height,i=a===void 0?Rr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ef=`:root, :host {
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
}`;function Zo(){var e=Yo,t=Ko,n=P.cssPrefix,r=P.replacementClass,a=Ef;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ci=!1;function xr(){P.autoAddCss&&!Ci&&(wf(Zo()),Ci=!0)}var Sf={mixout:function(){return{dom:{css:Zo,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},Ve=rt||{};Ve[Ke]||(Ve[Ke]={});Ve[Ke].styles||(Ve[Ke].styles={});Ve[Ke].hooks||(Ve[Ke].hooks={});Ve[Ke].shims||(Ve[Ke].shims=[]);var Oe=Ve[Ke],Qo=[],Cf=function e(){X.removeEventListener("DOMContentLoaded",e),Vn=1,Qo.map(function(t){return t()})},Vn=!1;Xe&&(Vn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Vn||X.addEventListener("DOMContentLoaded",Cf));function Of(e){!Xe||(Vn?setTimeout(e,0):Qo.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Go(e):"<".concat(t," ").concat(xf(r),">").concat(i.map(hn).join(""),"</").concat(t,">")}function Oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Pf(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function If(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Wr(e){var t=If(e);return t.length===1?t[0].toString(16):null}function Tf(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,Pi(t)):Oe.styles[e]=S(S({},Oe.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var Tn,Mn,Nn,Et=Oe.styles,Mf=Oe.shims,Nf=(Tn={},re(Tn,J,Object.values(fn[J])),re(Tn,ee,Object.values(fn[ee])),Tn),Ta=null,es={},ts={},ns={},rs={},as={},jf=(Mn={},re(Mn,J,Object.keys(ln[J])),re(Mn,ee,Object.keys(ln[ee])),Mn);function Ff(e){return~hf.indexOf(e)}function Lf(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ff(a)?a:null}var is=function(){var t=function(i){return kr(Et,function(o,s,l){return o[l]=kr(s,i,{}),o},{})};es=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ts=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),as=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Et||P.autoFetchSvg,r=kr(Mf,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ns=r.names,rs=r.unicodes,Ta=fr(P.styleDefault,{family:P.familyDefault})};yf(function(e){Ta=fr(e.styleDefault,{family:P.familyDefault})});is();function Ma(e,t){return(es[e]||{})[t]}function $f(e,t){return(ts[e]||{})[t]}function vt(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function zf(e){var t=rs[e],n=Ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return Ta}var Na=function(){return{prefix:null,iconName:null,rest:[]}};function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?J:n,a=ln[r][e],i=cn[r][e]||cn[r][a],o=e in Oe.styles?e:null;return i||o||null}var Ii=(Nn={},re(Nn,J,Object.keys(fn[J])),re(Nn,ee,Object.keys(fn[ee])),Nn);function ur(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,J,"".concat(P.cssPrefix,"-").concat(J)),re(t,ee,"".concat(P.cssPrefix,"-").concat(ee)),t),o=null,s=J;(e.includes(i[J])||e.some(function(f){return Ii[J].includes(f)}))&&(s=J),(e.includes(i[ee])||e.some(function(f){return Ii[ee].includes(f)}))&&(s=ee);var l=e.reduce(function(f,u){var m=Lf(P.cssPrefix,u);if(Et[u]?(u=Nf[s].includes(u)?cf[s][u]:u,o=u,f.prefix=u):jf[s].indexOf(u)>-1?(o=u,f.prefix=fr(u,{family:s})):m?f.iconName=m:u!==P.replacementClass&&u!==i[J]&&u!==i[ee]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?os(f.iconName):{},y=vt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||y||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Et.far&&Et.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},Na());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(Et.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=at()||"fas"),l}var Df=function(){function e(){Xc(this,e),this.definitions={}}return Gc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=fn[J][s];l&&Br(l,o[s]),is()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ti=[],St={},Mt={},Rf=Object.keys(Mt);function Hf(e,t){var n=t.mixoutsTo;return Ti=e,St={},Object.keys(Mt).forEach(function(r){Rf.indexOf(r)===-1&&delete Mt[r]}),Ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Kn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides(Mt)}),n}function Ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=St[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=St[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mt[e]?Mt[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(!!t)return t=vt(n,t)||t,Oi(ss.definitions,n,t)||Oi(Oe.styles,n,t)}var ss=new Df,Wf=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,xt("noAuto")},Bf={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(xt("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Of(function(){Yf({autoReplaceSvgRoot:n}),xt("watch",t)})}},Uf={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fr(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(ff))){var a=ur(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:vt(i,t)||t}}}},we={noAuto:Wf,config:P,dom:Bf,parse:Uf,library:ss,findIconDefinition:Yr,toHtml:hn},Yf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||P.autoFetchSvg)&&Xe&&P.autoReplaceSvg&&we.dom.i2svg({node:r})};function dr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xe){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Kf(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ia(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=cr(S(S({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Vf(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,N=r.found?r:n,I=N.width,z=N.height,w=a==="fak",C=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),F={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(z)})},D=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/z*16*.0625,"em")}:{};y&&(F.attributes[_t]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||dn())},children:[l]}),delete F.attributes.title);var Y=S(S({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:S(S({},D),m.styles)}),pe=r.found&&n.found?qe("generateAbstractMask",Y)||{children:[],attributes:{}}:qe("generateAbstractIcon",Y)||{children:[],attributes:{}},se=pe.children,ke=pe.attributes;return Y.children=se,Y.attributes=ke,s?Vf(Y):Kf(Y)}function Mi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[_t]="");var u=S({},o.styles);Ia(a)&&(u.transform=Af({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=cr(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function qf(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ar=Oe.styles;function Kr(e){var t=e[0],n=e[1],r=e.slice(4),a=Aa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jf={found:!1,width:512,height:512};function Xf(e,t){!Vo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ar[t]&&Ar[t][e]){var o=Ar[t][e];return r(Kr(o))}Xf(e,t),r(S(S({},Jf),{},{icon:P.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Ni=function(){},qr=P.measurePerformance&&En&&En.mark&&En.measure?En:{mark:Ni,measure:Ni},Vt='FA "6.2.0"',Gf=function(t){return qr.mark("".concat(Vt," ").concat(t," begins")),function(){return ls(t)}},ls=function(t){qr.mark("".concat(Vt," ").concat(t," ends")),qr.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},Fa={begin:Gf,end:ls},Dn=function(){};function ji(e){var t=e.getAttribute?e.getAttribute(_t):null;return typeof t=="string"}function Zf(e){var t=e.getAttribute?e.getAttribute(Sa):null,n=e.getAttribute?e.getAttribute(Ca):null;return t&&n}function Qf(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function eu(){if(P.autoReplaceSvg===!0)return Rn.replace;var e=Rn[P.autoReplaceSvg];return e||Rn.replace}function tu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function nu(e){return X.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?tu:nu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function ru(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(_t)===null&&P.keepOriginalSource){var r=X.createComment(ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pa(n).indexOf(P.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(_t,""),n.innerHTML=o}};function Fi(e){e()}function fs(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Fi;P.mutateApproach===sf&&(r=rt.requestAnimationFrame||Fi),r(function(){var a=eu(),i=Fa.begin("mutate");e.map(a),i(),n()})}}var La=!1;function us(){La=!0}function Jr(){La=!1}var qn=null;function Li(e){if(!!Ei&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;qn=new Ei(function(f){if(!La){var u=at();Rt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ji(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ji(m.target)&&~pf.indexOf(m.attributeName))if(m.attributeName==="class"&&Zf(m.target)){var h=ur(Pa(m.target)),y=h.prefix,N=h.iconName;m.target.setAttribute(Sa,y||u),N&&m.target.setAttribute(Ca,N)}else Qf(m.target)&&a(m.target)})}}),Xe&&qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function au(){!qn||qn.disconnect()}function iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ur(Pa(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$f(a.prefix,e.innerText)||Ma(a.prefix,Wr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function su(e){var t=Rt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=su(e),s=Ur("parseNodeAttributes",{},e),l=t.styleParser?iu(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var cu=Oe.styles;function ds(e){var t=P.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(qo)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var it=new Set;Oa.map(function(e){it.add("fa-".concat(e))});Object.keys(ln[J]).map(it.add.bind(it));Object.keys(ln[ee]).map(it.add.bind(it));it=mn(it);function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Si,"-").concat(m))},a=function(m){return n.remove("".concat(Si,"-").concat(m))},i=P.autoFetchSvg?it:Oa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(cu));i.includes("fa")||i.push("fa");var o=[".".concat(qo,":not([").concat(_t,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(_t,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Rt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Fa.begin("onTree"),f=s.reduce(function(u,m){try{var h=ds(m);h&&u.push(h)}catch(y){Vo||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){fs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ds(e).then(function(n){n&&fs([n],t)})}function uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,S(S({},n),{},{mask:a}))}}var du=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,y=n.titleId,N=y===void 0?null:y,I=n.classes,z=I===void 0?[]:I,w=n.attributes,C=w===void 0?{}:w,F=n.styles,D=F===void 0?{}:F;if(!!t){var Y=t.prefix,pe=t.iconName,se=t.icon;return dr(S({type:"icon"},t),function(){return xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(N||dn()):(C["aria-hidden"]="true",C.focusable="false")),ja({icons:{main:Kr(se),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:pe,transform:S(S({},De),a),symbol:o,title:h,maskId:u,titleId:N,extra:{attributes:C,styles:D,classes:z}})})}},mu={mixout:function(){return{icon:uu(du)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zi,n.nodeCallback=fu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,N){Promise.all([Vr(a,s),u.iconName?Vr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var z=Aa(I,2),w=z[0],C=z[1];y([n,ja({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(a.style=l);var f;return Ia(o)&&(f=qe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},pu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return dr({type:"layer"},function(){xt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:o}]})}}}},hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return dr({type:"counter",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),qf({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},gu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return dr({type:"text",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),Mi({content:n,transform:S(S({},De),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(P.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Mi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vu=new RegExp('"',"ug"),Di=[1105920,1112319];function bu(e){var t=e.replace(vu,""),n=Tf(t,0),r=n>=Di[0]&&n<=Di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Wr(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(of).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Rt(e.children),o=i.filter(function(se){return se.getAttribute(Hr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uf),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ee:J,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[h][l[2].toLowerCase()]:df[h][f],N=bu(m),I=N.value,z=N.isSecondary,w=l[0].startsWith("FontAwesome"),C=Ma(y,I),F=C;if(w){var D=zf(I);D.iconName&&D.prefix&&(C=D.iconName,y=D.prefix)}if(C&&!z&&(!o||o.getAttribute(Sa)!==y||o.getAttribute(Ca)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var Y=lu(),pe=Y.extra;pe.attributes[Hr]=t,Vr(C,y).then(function(se){var ke=ja(S(S({},Y),{},{icons:{main:se,mask:Na()},prefix:y,iconName:F,extra:pe,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=ke.map(function(We){return hn(We)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yu(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function wu(e){return e.parentNode!==document.head&&!~lf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hi(e){if(!!Xe)return new Promise(function(t,n){var r=Rt(e.querySelectorAll("*")).filter(wu).map(yu),a=Fa.begin("searchPseudoElements");us(),Promise.all(r).then(function(){a(),Jr(),t()}).catch(function(){a(),Jr(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&Hi(a)}}},Wi=!1,xu={mixout:function(){return{dom:{unwatch:function(){us(),Wi=!0}}}},hooks:function(){return{bootstrap:function(){Li(Ur("mutationObserverCallbacks",{}))},noAuto:function(){au()},watch:function(n){var r=n.observeMutationsRoot;Wi?Jr():Li(Ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ku={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:S({},y.outer),children:[{tag:"g",attributes:S({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),y.path)}]}]}}}},Er={x:0,y:0,width:"100%",height:"100%"};function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Au(e){return e.tag==="g"?e.children:[e]}var Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ur(a.split(" ").map(function(o){return o.trim()})):Na();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,y=kf({transform:l,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:S(S({},Er),{},{fill:"white"})},I=u.children?{children:u.children.map(Ui)}:{},z={tag:"g",attributes:S({},y.inner),children:[Ui(S({tag:u.tag,attributes:S(S({},u.attributes),y.path)},I))]},w={tag:"g",attributes:S({},y.outer),children:[z]},C="mask-".concat(s||dn()),F="clip-".concat(s||dn()),D={tag:"mask",attributes:S(S({},Er),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,w]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Au(h)},D]};return r.push(Y,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(C,")")},Er)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ou=[Sf,mu,pu,hu,gu,_u,xu,ku,Eu,Su,Cu];Hf(Ou,{mixoutsTo:we});we.noAuto;var ms=we.config,ps=we.library;we.dom;var Jn=we.parse;we.findIconDefinition;we.toHtml;var Pu=we.icon;we.layer;var Iu=we.text;we.counter;function Yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yi(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mu(e,t){if(e==null)return{};var n=Tu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Xr(e){return Nu(e)||ju(e)||Fu(e)||Lu()}function Nu(e){if(Array.isArray(e))return Gr(e)}function ju(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fu(e,t){if(!!e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hs={exports:{}};(function(e){(function(t){var n=function(w,C,F){if(!f(C)||m(C)||h(C)||y(C)||l(C))return C;var D,Y=0,pe=0;if(u(C))for(D=[],pe=C.length;Y<pe;Y++)D.push(n(w,C[Y],F));else{D={};for(var se in C)Object.prototype.hasOwnProperty.call(C,se)&&(D[w(se,F)]=n(w,C[se],F))}return D},r=function(w,C){C=C||{};var F=C.separator||"_",D=C.split||/(?=[A-Z])/;return w.split(D).join(F)},a=function(w){return N(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,F){return F?F.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},h=function(w){return s.call(w)=="[object RegExp]"},y=function(w){return s.call(w)=="[object Boolean]"},N=function(w){return w=w-0,w===w},I=function(w,C){var F=C&&"process"in C?C.process:C;return typeof F!="function"?w:function(D,Y){return F(D,w,Y)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(I(a,C),w)},decamelizeKeys:function(w,C){return n(I(o,C),w,C)},pascalizeKeys:function(w,C){return n(I(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})($u)})(hs);var zu=hs.exports,Du=["class","style"];function Ru(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=zu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Hu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return $a(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Hu(u);break;case"style":l.style=Ru(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Mu(n,Du);return Do(e.tag,Se(Se(Se({},t),{},{class:a.class,style:Se(Se({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Wu(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function Bu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ki(e){if(e&&Xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jn.icon)return Jn.icon(e);if(e===null)return null;if(Xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var mt=ha({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Ki(t.icon)}),i=be(function(){return Zt("classes",Bu(t))}),o=be(function(){return Zt("transform",typeof t.transform=="string"?Jn.transform(t.transform):t.transform)}),s=be(function(){return Zt("mask",Ki(t.mask))}),l=be(function(){return Pu(a.value,Se(Se(Se(Se({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ln(l,function(u){if(!u)return Wu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=be(function(){return l.value?$a(l.value.abstract[0],{},r):null});return function(){return f.value}}});ha({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ms.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(Xr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Do("div",{class:i.value},r.default?r.default():[])}}});ha({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ms.familyPrefix,i=be(function(){return Zt("classes",[].concat(Xr(t.counter?["".concat(a,"-layers-counter")]:[]),Xr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return Zt("transform",typeof t.transform=="string"?Jn.transform(t.transform):t.transform)}),s=be(function(){var f=Iu(t.value.toString(),Se(Se({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=be(function(){return $a(s.value,{},r)});return function(){return l.value}}});var Uu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Yu={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ku={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Vu={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};const qu={class:"nav-container"},Ju={class:"logo"},Xu={href:"#home"},Gu={class:"logo-img"},Zu={class:"hamb"},Qu=k("button",{class:"side-menu"},null,-1),ed={class:"links"},td=k("a",{href:"#about"},"About",-1),nd=k("a",{href:"#skills"},"Skills",-1),rd=k("a",{href:"#projects"},"Projects",-1),ad=k("a",{href:"#contact"},"Contact",-1),id={class:"theme-switcher"},od={class:"dropdown-links links"},sd={class:"theme-switcher"},ld={__name:"TheNav",setup(e){ka(h=>({ce9913a0:n.value,"343ead12":r.value})),ps.add(Uu,Vu),window.addEventListener("resize",m),window.addEventListener("hashchange",function(){const h=window.location.hash;document.querySelectorAll(".links a").forEach(N=>{N.getAttribute("href")===h?N.classList.add("active"):N.classList.remove("active")})});const t=Le("light"),n=Le("rgba(237, 230, 227, 0.95)"),r=Le(`src/assets/logo-JS-${t.value}.jpg`),a=Le(`src/assets/logo-JS-${t.value}.webp`);Tl(()=>{r.value=`url(./logo-JS-${t.value}.jpg)`,a.value=`url(./logo-JS-${t.value}.webp)`});function i(){t.value==="dark"?t.value="light":t.value="dark",t.value==="dark"?(document.body.classList.remove("light"),document.body.classList.add("dark"),document.querySelectorAll(".theme-switcher-icon").forEach(h=>{h.classList.remove("lightMode"),h.classList.add("darkMode")}),n.value="rgba(46, 80, 119, 0.95)"):(document.body.classList.remove("dark"),document.body.classList.add("light"),document.querySelectorAll(".theme-switcher-icon").forEach(h=>{h.classList.add("lightMode"),h.classList.remove("darkMode")}),n.value="rgba(237, 230, 227, 0.95)")}function o(){l.value=!l.value,document.body.style.overflowY=l.value?"hidden":"auto"}const s=Le(!1),l=Le(!1),f=Le(window.innerWidth),u=be(()=>l&&s);function m(){if(f.value=window.innerWidth,f.value<=768){s.value=!0;return}s.value=!1,l.value=!1}return m(),(h,y)=>{const N=ba("webp");return q(),ne("nav",null,[k("div",qu,[k("div",Ju,[k("a",Xu,[Tt(k("div",Gu,null,512),[[N,[a.value,r.value],"bgs"]])])]),k("div",Zu,[le(u)?(q(),ne("span",{key:0,class:"hamburger",onClick:y[0]||(y[0]=I=>o())},[G(le(mt),{icon:"fa-solid fa-bars","fixed-width":""})])):(q(),ne("span",{key:1,class:"xmark",onClick:y[1]||(y[1]=I=>o())},[G(le(mt),{icon:"fa-solid fa-xmark","fixed-width":""})]))]),Qu,Tt(k("div",ed,[td,nd,rd,ad,k("div",id,[k("div",{class:"theme-switcher-icon lightMode",onClick:y[2]||(y[2]=I=>i())})])],512),[[bi,!s.value]]),Tt(k("div",od,[k("a",{href:"#about",onClick:y[3]||(y[3]=I=>o())},"About"),k("a",{href:"#skills",onClick:y[4]||(y[4]=I=>o())},"Skills"),k("a",{href:"#projects",onClick:y[5]||(y[5]=I=>o())},"Projects"),k("a",{href:"#contact",onClick:y[6]||(y[6]=I=>o())},"Contact"),k("div",sd,[k("div",{class:"theme-switcher-icon lightMode",onClick:y[7]||(y[7]=I=>i())})])],512),[[bi,l.value]])])])}}};const cd=k("div",{class:"bar-container"},[k("div",{class:"skill-bar"})],-1),Vi={__name:"TheSkillBar",props:{skill:{},percentage:{},color:{}},setup(e){const t=e;ka(a=>({"56cc96ca":e.percentage,f222b950:le(n),"5759fd74":le(r)}));const n=t.color.dark,r=t.color.light;return(a,i)=>(q(),ne(ae,null,[k("p",null,Yt(e.skill),1),cd],64))}},fd={skillName:"HTML",color:{dark:"#E96228",light:"#E96228"},percentage:"90%"},ud={skillName:"CSS",color:{dark:"#4CA3E6",light:"#1B6DB2"},percentage:"60%"},dd={skillName:"JavaScript",color:{dark:"#CFB430",light:"#3C9800"},percentage:"70%"},md={skillName:"PHP",color:{dark:"#9499E0",light:"#797DB8"},percentage:"60%"},pd={skillName:"Laravel",color:{dark:"#FF6F61",light:"#F72C1F"},percentage:"50%"},hd={skillName:"Vue",color:{dark:"#3FB27F",light:"#349469"},percentage:"50%"},gd={skillName:"Digital Marketing",color:{dark:"#F7B500",light:"#D6272C"},percentage:"60%"},vd={skillName:"Content Writing",color:{dark:"#04B3BD",light:"#039299"},percentage:"70%"},bd={skillName:"WordPress",color:{dark:"#74BC4B",light:"#21759B"},percentage:"80%"},yd={skillName:"Figma",color:{dark:"#9D8EFF",light:"#9c56f6"},percentage:"60%"},wd={skillName:"Making up skill bar values!",color:{dark:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)",light:"linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"},percentage:"100%"},jn={HTML:fd,CSS:ud,JavaScript:dd,PHP:md,Laravel:pd,Vue:hd,DigitalMarketing:gd,ContentWriting:vd,WordPress:bd,Figma:yd,SkillBars:wd};const vs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},_d={class:"skills-container"},xd={class:"skills-column"},kd={class:"skills-column"},Ad={__name:"TheSkills",setup(e){const t=Object.keys(jn),n=t.length,r=[];for(let a=0;a<n;a++)r.push({skill:t[a],name:jn[t[a]].skillName,percentage:jn[t[a]].percentage,color:jn[t[a]].color});return(a,i)=>(q(),ne("div",_d,[k("div",xd,[(q(!0),ne(ae,null,rn(r.slice(0,le(n)/2+le(n)%2),o=>(q(),on(Vi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))]),k("div",kd,[(q(!0),ne(ae,null,rn(r.slice(le(n)/2+le(n)%2,le(n)),o=>(q(),on(Vi,{key:o.skill,skill:o.name,percentage:o.percentage,color:o.color},null,8,["skill","percentage","color"]))),128))])]))}},Ed=vs(Ad,[["__scopeId","data-v-bc03b09e"]]);const Sd=["id","data-cat"],Cd=["src","alt"],Od=k("div",{class:"tile-overlay"},null,-1),Pd={class:"overlay-text"},Id={class:"tile-title"},Td={key:0,class:"modal-container"},Md={class:"modal"},Nd={class:"modal-header"},jd={class:"header-image"},Fd=["src","alt"],Ld={class:"header-text"},$d={class:"modal-body"},zd={class:"description-container"},Dd={class:"links-container"},Rd=["href"],Hd=["href"],Wd=["href"],Bd={class:"tech-container"},Ud=k("h4",null,"Technologies used",-1),Yd={class:"tech-list"},qi={__name:"TheProjectTile",props:{id:{},name:{},desc:{},img:{},webp:{},categories:{},tech:{},website:{},github:{},projectFolder:{}},setup(e){ka(a=>({53004321:n.value}));const t=Le(!1),n=Le();function r(){t.value=!t.value,t.value?document.body.style.overflow="hidden":document.body.style.overflow="visible",document.body.classList.contains("dark")?n.value="#2e5077":n.value="#ede6e3"}return(a,i)=>{const o=ba("webp");return q(),ne(ae,null,[k("div",{class:"tile-container",id:e.id,onClick:i[0]||(i[0]=s=>r()),"data-cat":e.categories},[Tt(k("img",{src:e.img,alt:e.name},null,8,Cd),[[o,e.webp,"src"]]),Od,k("div",Pd,[k("h3",Id,Yt(e.name),1)])],8,Sd),t.value?(q(),ne("div",Td,[k("div",Md,[k("div",Nd,[k("span",{class:"material-symbols-outlined closeBtn",onClick:i[1]||(i[1]=s=>r())},"close"),k("div",jd,[Tt(k("img",{class:"banner",src:e.img,alt:e.name},null,8,Fd),[[o,e.webp,"src"]])]),k("div",Ld,[k("h3",null,Yt(e.name),1)])]),k("div",$d,[k("div",zd,[k("p",null,Yt(e.desc),1)]),k("div",Dd,[e.website?(q(),ne("a",{key:0,class:"project-link",href:e.website,target:"_blank",rel:"noopener noreferrer"},"Website",8,Rd)):ht("",!0),e.github?(q(),ne("a",{key:1,class:"project-link",href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github",8,Hd)):ht("",!0),e.projectFolder?(q(),ne("a",{key:2,class:"project-link",href:e.projectFolder,target:"_blank",rel:"noopener noreferrer"},"Folder (FR)",8,Wd)):ht("",!0)]),k("div",Bd,[Ud,k("ol",Yd,[(q(!0),ne(ae,null,rn(e.tech,s=>(q(),ne("li",{class:"tech-item",key:s},Yt(s),1))),128))])])])])])):ht("",!0)],64)}}},Kd={Name:"Experience Flathead",Description:"A digital marketing project I realized during my first year of bachelor's degree. I created the website, the logo, the graphic design and the content. In addition to the website, I also created a whole digital ecosystem, including social media pages, a newsletter, SEA and SEO campaigns, and social media ads. The project was realized over two semesters and was a great opportunity to learn about digital marketing and widely used tools such as Google Analytics and the Search Console. Both the website and the project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","Mailchimp","Google Analytics","Google Search Console","Google Ads","Facebook Ads"],Image:"./assets/projectImages/ExperienceFlathead.jpg",WebP:"./assets/projectImages/ExperienceFlathead.webp",Website:"https://ef.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/jgivfp49jsolqx5/Rapport-complet.pdf?dl=0"},Vd={Name:"Everything Photography",Description:"As part of my E-Commerce course, I created a website for a fictitious photography online store. The website was created using Wordpress, the Divi builder, and WooCommerce. I also created the logo, graphic identity, and social media pages. During the process I approached all the details of an Ecommerce business; from Amazon's affiliation program for photography gear to Print On Demand through Gelato for my posters. The website and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Digital Marketing","Web Design","SEO","Content Writing","Social Media"],Technologies:["Wordpress","Divi","WooCommerce"],Image:"./assets/projectImages/EverythingPhotography.jpg",WebP:"./assets/projectImages/EverythingPhotography.webp",Website:"https://ep.jules-sandoz.com/",ProjectFolder:"https://www.dropbox.com/s/vwglbomg9ucq55t/HEIG-VD%20-%20E-comm%20-%20Sandoz%20Jules%20-%20Everything%20Photography.pdf?dl=0"},qd={Name:"Kairos",Description:"In 2022, my class was tasked with creating a new web-app to view for students to view their timetables. We were grouped into teams of 7 to 8 and had to create the app from scratch over the course of a month. I was in charge of project management and had to coordinate UX, UI and development teams. In addition to the management side of the project, I helped both front-end and back-end developers with their tasks. The project was a great opportunity to learn about project management and to work in a team. The website, backend github and project report are available online and can be viewed by clicking on the buttons below.",Categories:["Backend","Frontend","Project Management","Agile"],Technologies:["Laravel","Vue3","PostgreSQL","Git"],Image:"./assets/projectImages/Kairos.jpg",WebP:"./assets/projectImages/Kairos.webp",Website:"https://pnj-pingouin.heig-vd.ch/app/index.html",Github:"https://github.com/julessandoz/ProjArt_BackEnd/",ProjectFolder:"https://www.dropbox.com/s/3lr9xsklsre7s0a/pnj_Rapport_VersionFinale.pdf?dl=0"},Jd={Name:"Les Ailes De Katia",Description:"My first project working on a pre-existing website. I was tasked with improving the site's technical SEO, to optimize its loading speed and to make it responsive.",Categories:["SEO"],Technologies:["Wordpress"],Image:"./assets/projectImages/AilesDeKatia.jpg",WebP:"./assets/projectImages/AilesDeKatia.webp",Website:"https://lesailesdekatia.com/"},Xd={Name:"Projet Borderan",Description:'In 2021, I was hired to redesign a website for a local trustee company. I was tasked with applying a new graphic identity and reworking the architecture information as well as all the content to optimize UX and SEO. It was my first "real-world" project and, while it unfortunately went unfinished due to a lack of time and budget, it was a great opportunity to learn how to interract with a client.',Categories:["SEO","Content Writing","Web Design"],Technologies:["Wordpress","Divi"],Image:"./assets/projectImages/ProjetBorderan.jpg",WebP:"./assets/projectImages/ProjetBorderan.webp"},Gd={Name:"Dataviz - Hollywood Movies",Description:"My first time using a Javascript library. In the context of a data visualization class during my second year at HEIG-VD, A friend and I created this visualization of the top grossing Hollywood movies of the past 50 years. We had to use the D3.js library and used data from a Kaggle dataset as well as images from themovieDB.org. The project was a great opportunity to learn about data visualization and svg manipulation.",Categories:["Frontend","Data Visualization"],Technologies:["D3.js","HTML","CSS","JavaScript","JSON"],Image:"./assets/projectImages/Hollywood.jpg",WebP:"./assets/projectImages/Hollywood.webp",Website:"https://hollywood.jules-sandoz.com/",Github:"https://github.com/julessandoz/VisualDonProject_Hollywood_Movies"},Zd={Name:"Cave Sandoz",Description:"My first ever coding project. After learning the basics of PHP and MySQL, I created this website for my family's wine cellar. It is a simple app that allows users to manage the cellar's wine bottles and keep track of what's available.",Categories:["Backend"],Technologies:["PHP","MySQL","HTML","CSS"],Image:"./assets/projectImages/CaveSandoz.jpg",WebP:"./assets/projectImages/CaveSandoz.webp",Website:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/cave-sandoz/",ProjectFolder:"https://pingouin.heig-vd.ch/~jules.sandoz/progserv/Sandoz-Projet-ProgServ.pdf"},je={ExperienceFlathead:Kd,EverythingPhotography:Vd,Kairos:qd,AilesDeKatia:Jd,ProjetBorderan:Xd,HollywoodMovies:Gd,CaveSandoz:Zd};const Qd={class:"projects-container"},em={class:"cta-container"},tm={__name:"TheProjects",setup(e){const t=Object.keys(je),n=t.length,r=[],a=Le(!1);for(let i=0;i<n;i++)r.push({project:t[i],name:je[t[i]].Name,desc:je[t[i]].Description,image:je[t[i]].Image,webp:je[t[i]].WebP,website:je[t[i]].Website,github:je[t[i]].Github,projectFolder:je[t[i]].ProjectFolder,tech:je[t[i]].Technologies,cat:je[t[i]].Categories});return(i,o)=>(q(),ne(ae,null,[k("div",Qd,[(q(!0),ne(ae,null,rn(r.slice(0,6),s=>(q(),on(qi,{id:s.project,name:s.name,desc:s.desc,img:s.image,webp:s.webp,website:s.website,github:s.github,projectFolder:s.projectFolder,tech:s.tech,categories:s.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)),a.value?(q(!0),ne(ae,{key:0},rn(r.slice(6),s=>(q(),on(qi,{id:s.project,name:s.name,desc:s.desc,img:s.image,webp:s.webp,website:s.website,github:s.github,projectFolder:s.projectFolder,tech:s.tech,categories:s.cat},null,8,["id","name","desc","img","webp","website","github","projectFolder","tech","categories"]))),256)):ht("",!0)]),k("div",em,[a.value?ht("",!0):(q(),ne("button",{key:0,class:"cta",onClick:o[0]||(o[0]=s=>a.value=!0)},"Show more")),a.value?(q(),ne("button",{key:1,class:"cta",onClick:o[1]||(o[1]=s=>a.value=!1)},"Show less")):ht("",!0)])],64))}};var nm={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"]},rm={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},am={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};const He=e=>(_l("data-v-dec48f59"),e=e(),xl(),e),im={class:"app"},om=gc('<section id="home" data-v-dec48f59><div class="text-container" data-v-dec48f59><h1 data-v-dec48f59> Hello there, <br data-v-dec48f59> I&#39;m Jules Sandoz </h1><p class="subtitle" data-v-dec48f59>Digital Swiss Army Knife</p></div><div class="cta-container" data-v-dec48f59><p data-v-dec48f59>Scroll or</p><a class="cta" href="#projects" data-v-dec48f59>Discover my projects</a></div></section>',1),sm={id:"about"},lm=He(()=>k("div",{class:"text-container"},[k("h2",null,"About me"),k("p",null," Currently a last year student in Communication and Media Engineering in my home country of Switzerland, I enjoy working on websites, development, marketing, and UI. "),k("p",null," I\u2019m a very curious person and love learning while solving problems. Great fan of the outdoors and amateur photographer, I like spending my free time in the mountains, hiking in the summer and snowboarding in the winter. "),k("p",null,"Always interested in working on new projects with motivated people."),k("a",{href:"#contact"},"Let's work together!")],-1)),cm={class:"img-container"},fm=["src"],um={id:"skills"},dm=He(()=>k("div",{class:"title-container"},[k("h2",null,"Skills")],-1)),mm={class:"skills-bars"},pm={id:"projects"},hm=He(()=>k("div",{class:"title-container"},[k("h2",null,"Projects")],-1)),gm={id:"contact"},vm=He(()=>k("div",{class:"title-container"},[k("h2",null,"Want to make something great together?")],-1)),bm={class:"text-container"},ym=He(()=>k("p",null," I'm open to freelance or job offers, don't hesitate to reach out through my socials or by email! ",-1)),wm={class:"socials"},_m={class:"link"},xm=He(()=>k("a",{class:"contact-link",href:"https://www.linkedin.com/in/jules-sandoz",target:"_blank",rel:"noopener noreferrer"},"/jules-sandoz",-1)),km={class:"link"},Am=He(()=>k("a",{class:"contact-link",href:"https://www.instagram.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"@julessandoz",-1)),Em={class:"link"},Sm=He(()=>k("a",{class:"contact-link",href:"github.com/julessandoz/",target:"_blank",rel:"noopener noreferrer"},"/julessandoz",-1)),Cm={class:"link"},Om=He(()=>k("a",{class:"contact-link",href:"mailto:contact@jules-sandoz.com"},"contact@jules-sandoz.com",-1)),Pm={class:"link"},Im=He(()=>k("a",{class:"contact-link",href:"https://www.dropbox.com/s/tmg93yqnnv5lkgm/CV-JS.pdf?dl=1",target:"_blank",rel:"noopener noreferrer"},"Download my resume",-1)),Tm={__name:"App",setup(e){ps.add(rm,am,nm,Yu,Ku);const t=document.querySelector("title");return ga(()=>{document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?t.innerText="See you later! | Jules Sandoz":t.innerText="Welcome back! | Jules Sandoz"});let n={root:null,rootMargin:"0px",threshold:.5};function r(u,m){u.forEach(h=>{if(h.isIntersecting){switch(h.target.id){case"home":t.innerHTML="Home | Jules Sandoz",history.pushState(null,null,"#home");break;case"about":t.innerHTML="About | Jules Sandoz",history.pushState(null,null,"#about");break;case"skills":t.innerHTML="Skills | Jules Sandoz",history.pushState(null,null,"#skills");break;case"projects":t.innerHTML="Projects | Jules Sandoz",history.pushState(null,null,"#projects");break;case"contact":t.innerHTML="Contact | Jules Sandoz",history.pushState(null,null,"#contact");break}h.target.classList.contains("skill-bar")&&(h.target.classList.add("full"),m.unobserve(h.target)),(h.target.classList.contains("link")||h.target.classList.contains("text-container")||h.target.classList.contains("cta-container")||h.target.classList.contains("img-container"))&&(h.target.classList.add("visible"),m.unobserve(h.target))}})}const a=new IntersectionObserver(r,n),i=document.querySelectorAll("section"),o=document.querySelectorAll(".skill-bar"),s=document.querySelectorAll(".socials .link"),l=document.querySelectorAll("#home .text-container, #home .cta-container"),f=document.querySelector("#about .img-container");a.observe(f),l.forEach(u=>{a.observe(u)}),s.forEach(u=>{a.observe(u)}),o.forEach(u=>{a.observe(u)}),i.forEach(u=>{a.observe(u)})}),(n,r)=>{const a=ba("webp");return q(),ne("main",null,[k("div",im,[G(ld),om,k("section",sm,[lm,k("div",cm,[Tt(k("img",{class:"portrait-photo",src:"./assets/jules-sandoz.jpg",alt:"Jules Sandoz"},null,8,fm),[[a,"./assets/jules-sandoz.webp","src"]])])]),k("section",um,[dm,k("div",mm,[G(Ed)])]),k("section",pm,[hm,G(tm)]),k("section",gm,[vm,k("div",bm,[ym,k("div",wm,[k("div",_m,[G(le(mt),{icon:"fa-brands fa-linkedin","fixed-width":""}),xm]),k("div",km,[G(le(mt),{icon:"fa-brands fa-square-instagram","fixed-width":""}),Am]),k("div",Em,[G(le(mt),{icon:"fa-brands fa-square-github","fixed-width":""}),Sm]),k("div",Cm,[G(le(mt),{icon:"fa-solid fa-envelope","fixed-width":""}),Om]),k("div",Pm,[G(le(mt),{icon:"fa-solid fa-file","fixed-width":""}),Im])])])])])])}}},Mm=vs(Tm,[["__scopeId","data-v-dec48f59"]]);var Nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bs={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nm,function(){var n=function(){try{return document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")===0}catch{return!1}}();return{install:function(r){var a=function(o,s){s.arg==="src"&&o.nodeName==="IMG"&&n&&(o.src=s.value),s.arg==="bg"&&n&&(o.style.backgroundImage="url("+s.value+")"),s.arg==="bgs"&&(o.style.backgroundImage="url("+(n?s.value[0]:s.value[1])+")")},i=+r.version.split(".")[0]>=3?{mounted:a}:{inserted:a};r.directive("webp",i)}}})})(bs);const jm=bs.exports,ys=qc(Mm);ys.use(jm);ys.mount("#app");
