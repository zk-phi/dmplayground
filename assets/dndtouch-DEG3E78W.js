var Ot=Object.defineProperty;var Rt=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>Rt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var le,p,ot,st,A,Fe,lt,me,at,ke,ye,be,z={},ut=[],Ut=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Te=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function De(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ft(e,t,n){var i,r,o,s={};for(o in t)o=="key"?i=t[o]:o=="ref"?r=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?le.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return te(e,s,i,r,null)}function te(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ot,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(o),o}function ae(e){return e.children}function q(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function _t(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _t(e)}}function Xe(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!ie.__r++||Fe!==p.debounceRendering)&&((Fe=p.debounceRendering)||lt)(ie)}function ie(){var e,t,n,i,r,o,s,a;for(A.sort(me);e=A.shift();)e.__d&&(t=A.length,i=void 0,o=(r=(n=e).__v).__e,s=[],a=[],n.__P&&((i=x({},r)).__v=r.__v+1,p.vnode&&p.vnode(i),Pe(n.__P,i,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,s,o??N(r),!!(32&r.__u),a),i.__v=r.__v,i.__.__k[i.__i]=i,dt(s,i,a),i.__e!=o&&_t(i)),A.length>t&&A.sort(me));ie.__r=0}function ft(e,t,n,i,r,o,s,a,f,u,d){var l,y,c,S,D,E,v=i&&i.__k||ut,m=t.length;for(f=Xt(n,t,v,f,m),l=0;l<m;l++)(c=n.__k[l])!=null&&(y=c.__i===-1?z:v[c.__i]||z,c.__i=l,E=Pe(e,c,y,r,o,s,a,f,u,d),S=c.__e,c.ref&&y.ref!=c.ref&&(y.ref&&He(y.ref,null,c),d.push(c.ref,c.__c||S,c)),D==null&&S!=null&&(D=S),4&c.__u||y.__k===c.__k?f=ct(c,f,e):typeof c.type=="function"&&E!==void 0?f=E:S&&(f=S.nextSibling),c.__u&=-7);return n.__e=D,f}function Xt(e,t,n,i,r){var o,s,a,f,u,d=n.length,l=d,y=0;for(e.__k=new Array(r),o=0;o<r;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(f=o+y,(s=e.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?te(null,s,null,null,null):Te(s)?te(ae,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?te(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,a=null,(u=s.__i=Bt(s,n,f,l))!==-1&&(l--,(a=n[u])&&(a.__u|=2)),a==null||a.__v===null?(u==-1&&y--,typeof s.type!="function"&&(s.__u|=4)):u!=f&&(u==f-1?y--:u==f+1?y++:(u>f?y--:y++,s.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<d;o++)(a=n[o])!=null&&!(2&a.__u)&&(a.__e==i&&(i=N(a)),ht(a,a));return i}function ct(e,t,n){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ct(i[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=N(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Bt(e,t,n,i){var r,o,s=e.key,a=e.type,f=t[n];if(f===null||f&&s==f.key&&a===f.type&&!(2&f.__u))return n;if(i>(f!=null&&!(2&f.__u)?1:0))for(r=n-1,o=n+1;r>=0||o<t.length;){if(r>=0){if((f=t[r])&&!(2&f.__u)&&s==f.key&&a===f.type)return r;r--}if(o<t.length){if((f=t[o])&&!(2&f.__u)&&s==f.key&&a===f.type)return o;o++}}return-1}function Be(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ut.test(t)?n:n+"px"}function ee(e,t,n,i,r){var o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Be(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Be(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(at,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=ke,e.addEventListener(t,o?be:ye,o)):e.removeEventListener(t,o?be:ye,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ke++;else if(t.t<n.u)return;return n(p.event?p.event(t):t)}}}function Pe(e,t,n,i,r,o,s,a,f,u){var d,l,y,c,S,D,E,v,m,F,H,J,X,Ue,Q,he,pe,P=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),o=[a=t.__e=n.__e]),(d=p.__b)&&d(t);e:if(typeof P=="function")try{if(v=t.props,m="prototype"in P&&P.prototype.render,F=(d=P.contextType)&&i[d.__c],H=d?F?F.props.value:d.__:i,n.__c?E=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new P(v,H):(t.__c=l=new q(v,H),l.constructor=P,l.render=qt),F&&F.sub(l),l.props=v,l.state||(l.state={}),l.context=H,l.__n=i,y=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=x({},l.__s)),x(l.__s,P.getDerivedStateFromProps(v,l.__s))),c=l.props,S=l.state,l.__v=t,y)m&&P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&P.getDerivedStateFromProps==null&&v!==c&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,H),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,H)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t)}),J=0;J<l._sb.length;J++)l.__h.push(l._sb[J]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,H),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(c,S,D)})}if(l.context=H,l.props=v,l.__P=e,l.__e=!1,X=p.__r,Ue=0,m){for(l.state=l.__s,l.__d=!1,X&&X(t),d=l.render(l.props,l.state,l.context),Q=0;Q<l._sb.length;Q++)l.__h.push(l._sb[Q]);l._sb=[]}else do l.__d=!1,X&&X(t),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Ue<25);l.state=l.__s,l.getChildContext!=null&&(i=x(x({},i),l.getChildContext())),m&&!y&&l.getSnapshotBeforeUpdate!=null&&(D=l.getSnapshotBeforeUpdate(c,S)),a=ft(e,Te(he=d!=null&&d.type===ae&&d.key==null?d.props.children:d)?he:[he],t,n,i,r,o,s,a,f,u),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),E&&(l.__E=l.__=null)}catch(B){if(t.__v=null,f||o!=null)if(B.then){for(t.__u|=f?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else for(pe=o.length;pe--;)De(o[pe]);else t.__e=n.__e,t.__k=n.__k;p.__e(B,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=Yt(n.__e,t,n,i,r,o,s,f,u);return(d=p.diffed)&&d(t),128&t.__u?void 0:a}function dt(e,t,n){for(var i=0;i<n.length;i++)He(n[i],n[++i],n[++i]);p.__c&&p.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function Yt(e,t,n,i,r,o,s,a,f){var u,d,l,y,c,S,D,E=n.props,v=t.props,m=t.type;if(m=="svg"?r="http://www.w3.org/2000/svg":m=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((c=o[u])&&"setAttribute"in c==!!m&&(m?c.localName==m:c.nodeType==3)){e=c,o[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(r,m,v.is&&v),a&&(p.__m&&p.__m(t,o),a=!1),o=null}if(m===null)E===v||a&&e.data===v||(e.data=v);else{if(o=o&&le.call(e.childNodes),E=n.props||z,!a&&o!=null)for(E={},u=0;u<e.attributes.length;u++)E[(c=e.attributes[u]).name]=c.value;for(u in E)if(c=E[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=c;else if(!(u in v)){if(u=="value"&&"defaultValue"in v||u=="checked"&&"defaultChecked"in v)continue;ee(e,u,null,c,r)}}for(u in v)c=v[u],u=="children"?y=c:u=="dangerouslySetInnerHTML"?d=c:u=="value"?S=c:u=="checked"?D=c:a&&typeof c!="function"||E[u]===c||ee(e,u,c,E[u],r);if(d)a||l&&(d.__html===l.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(l&&(e.innerHTML=""),ft(e,Te(y)?y:[y],t,n,i,m=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,s,o?o[0]:n.__k&&N(n,0),a,f),o!=null)for(u=o.length;u--;)De(o[u]);a||(u="value",m=="progress"&&S==null?e.removeAttribute("value"):S!==void 0&&(S!==e[u]||m=="progress"&&!S||m=="option"&&S!==E[u])&&ee(e,u,S,E[u],r),u="checked",D!==void 0&&D!==e[u]&&ee(e,u,D,E[u],r))}return e}function He(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(r){p.__e(r,n)}}function ht(e,t,n){var i,r;if(p.unmount&&p.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||He(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){p.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&ht(i[r],t,n||typeof e.type!="function");n||De(e.__e),e.__c=e.__=e.__e=void 0}function qt(e,t,n){return this.constructor(e,n)}function Tn(e,t,n){var i,r,o,s;t==document&&(t=document.documentElement),p.__&&p.__(e,t),r=(i=!1)?null:t.__k,o=[],s=[],Pe(t,e=t.__k=Ft(ae,null,[e]),r||z,z,t.namespaceURI,r?null:t.firstChild?le.call(t.childNodes):null,o,r?r.__e:t.firstChild,i,s),dt(o,e,s)}le=ut.slice,p={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(a){e=a}throw e}},ot=0,st=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Xe(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Xe(this))},q.prototype.render=ae,A=[],lt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,me=function(e,t){return e.__v.__b-t.__v.__b},ie.__r=0,at=/(PointerCapture)$|Capture$/i,ke=0,ye=Ye(!1),be=Ye(!0);var Wt=0;function h(e,t,n,i,r,o){t||(t={});var s,a,f=t;if("ref"in f)for(a in f={},t)a=="ref"?s=t[a]:f[a]=t[a];var u={type:e,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wt,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(s=e.defaultProps))for(a in s)f[a]===void 0&&(f[a]=s[a]);return p.vnode&&p.vnode(u),u}var re,T,ge,qe,we=0,pt=[],b=p,We=b.__b,ze=b.__r,Ge=b.diffed,je=b.__c,Ke=b.unmount,Ve=b.__;function gt(e,t){b.__h&&b.__h(T,e,we||t),we=0;var n=T.__H||(T.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Dn(e,t){var n=gt(re++,3);!b.__s&&vt(n.__H,t)&&(n.__=e,n.i=t,T.__H.__h.push(n))}function xe(e,t){var n=gt(re++,7);return vt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function zt(e,t){return we=8,xe(function(){return e},t)}function Gt(){for(var e;e=pt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ne),e.__H.__h.forEach($e),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){T=null,We&&We(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ve&&Ve(e,t)},b.__r=function(e){ze&&ze(e),re=0;var t=(T=e.__c).__H;t&&(ge===T?(t.__h=[],T.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ne),t.__h.forEach($e),t.__h=[],re=0)),ge=T},b.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pt.push(t)!==1&&qe===b.requestAnimationFrame||((qe=b.requestAnimationFrame)||jt)(Gt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),ge=T=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ne),n.__h=n.__h.filter(function(i){return!i.__||$e(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],b.__e(i,n.__v)}}),je&&je(e,t)},b.unmount=function(e){Ke&&Ke(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{ne(i)}catch(r){t=r}}),n.__H=void 0,t&&b.__e(t,n.__v))};var Ze=typeof requestAnimationFrame=="function";function jt(e){var t,n=function(){clearTimeout(i),Ze&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Ze&&(t=requestAnimationFrame(n))}function ne(e){var t=T,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),T=t}function $e(e){var t=T;e.__c=e.__(),T=t}function vt(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}const Kt=e=>{const t=[...e];for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t},j=(e,t,n)=>[...e.slice(0,t),n,...e.slice(t+1,e.length)];var Vt=Symbol.for("preact-signals");function ue(){if(C>1)C--;else{for(var e,t=!1;W!==void 0;){var n=W;for(W=void 0,Se++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&yt(n))try{n.c()}catch(r){t||(e=r,t=!0)}n=i}}if(Se=0,C--,t)throw e}}function Zt(e){if(C>0)return e();C++;try{return e()}finally{ue()}}var g=void 0,W=void 0,C=0,Se=0,oe=0;function mt(e){if(g!==void 0){var t=e.n;if(t===void 0||t.t!==g)return t={i:0,S:e,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:t},g.s!==void 0&&(g.s.n=t),g.s=t,e.n=t,32&g.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=g.s,t.n=void 0,g.s.n=t,g.s=t),t}}function k(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}k.prototype.brand=Vt;k.prototype.h=function(){return!0};k.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};k.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};k.prototype.subscribe=function(e){var t=this;return V(function(){var n=t.value,i=g;g=void 0;try{e(n)}finally{g=i}})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return this.value+""};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){var e=g;g=void 0;try{return this.value}finally{g=e}};Object.defineProperty(k.prototype,"value",{get:function(){var e=mt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Se>100)throw new Error("Cycle detected");this.v=e,this.i++,oe++,C++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ue()}}}});function L(e){return new k(e)}function yt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function bt(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function wt(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function R(e){k.call(this,void 0),this.x=e,this.s=void 0,this.g=oe-1,this.f=4}(R.prototype=new k).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===oe))return!0;if(this.g=oe,this.f|=1,this.i>0&&!yt(this))return this.f&=-2,!0;var e=g;try{bt(this),g=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return g=e,wt(this),this.f&=-2,!0};R.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}k.prototype.S.call(this,e)};R.prototype.U=function(e){if(this.t!==void 0&&(k.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};R.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(R.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=mt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Je(e){return new R(e)}function $t(e){var t=e.u;if(e.u=void 0,typeof t=="function"){C++;var n=g;g=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Ce(e),i}finally{g=n,ue()}}}function Ce(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,$t(e)}function Jt(e){if(g!==this)throw new Error("Out-of-order effect");wt(this),g=e,this.f&=-2,8&this.f&&Ce(this),ue()}function K(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}K.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};K.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,$t(this),bt(this),C++;var e=g;return g=this,Jt.bind(this,e)};K.prototype.N=function(){2&this.f||(this.f|=2,this.o=W,W=this)};K.prototype.d=function(){this.f|=8,1&this.f||Ce(this)};function V(e){var t=new K(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var St,ve,Et=[];V(function(){St=this.N})();function U(e,t){p[e]=t.bind(null,p[e]||function(){})}function se(e){ve&&ve(),ve=e&&e.S()}function kt(e){var t=this,n=e.data,i=en(n);i.value=n;var r=xe(function(){for(var a=t,f=t.__v;f=f.__;)if(f.__c){f.__c.__$f|=4;break}var u=Je(function(){var c=i.value.value;return c===0?0:c===!0?"":c||""}),d=Je(function(){return!st(u.value)}),l=V(function(){if(this.N=Tt,d.value){var c=u.value;a.base&&a.base.nodeType===3&&(a.base.data=c)}}),y=t.__$u.d;return t.__$u.d=function(){l(),y.call(this)},[d,u]},[]),o=r[0],s=r[1];return o.value?s.peek():s.value}kt.displayName="_st";Object.defineProperties(k.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:kt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});U("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var r in i)if(r!=="children"){var o=i[r];o instanceof k&&(n||(t.__np=n={}),n[r]=o,i[r]=o.peek())}}e(t)});U("__r",function(e,t){se();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(r){var o;return V(function(){o=this}),o.c=function(){i.__$f|=1,i.setState({})},o}())),se(n),e(t)});U("__e",function(e,t,n,i){se(),e(t,n,i)});U("diffed",function(e,t){se();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,r=t.props;if(i){var o=n.U;if(o)for(var s in o){var a=o[s];a!==void 0&&!(s in i)&&(a.d(),o[s]=void 0)}else o={},n.U=o;for(var f in i){var u=o[f],d=i[f];u===void 0?(u=Qt(n,f,d,r),o[f]=u):u.o(d,r)}}}e(t)});function Qt(e,t,n,i){var r=t in e&&e.ownerSVGElement===void 0,o=L(n);return{o:function(s,a){o.value=s,i=a},d:V(function(){this.N=Tt;var s=o.value.value;i[t]!==s&&(i[t]=s,r?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}U("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var r in i){var o=i[r];o&&o.d()}}}}else{var s=t.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}e(t)});U("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});q.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u,i=n&&n.s!==void 0;for(var r in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var o=2&this.__$f;if(!(i||o||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function en(e){return xe(function(){return L(e)},[])}var tn=function(e){queueMicrotask(function(){queueMicrotask(e)})};function nn(){Zt(function(){for(var e;e=Et.shift();)St.call(e)})}function Tt(){Et.push(this)===1&&(p.requestAnimationFrame||tn)(nn)}const Dt=[],Pt=[],Ht={onDragEnd:e=>{Dt.forEach(t=>t(e)),e.stopPropagation()},onClick:e=>{Pt.forEach(t=>t(e)),e.stopPropagation()}},Me=L(null),Pn=(e,t)=>{const n=e.clientY/window.innerHeight,i=e.clientX/window.innerWidth;Me.value={options:t,pos:{top:n<.5?e.clientY-16:null,left:i<.5?e.clientX+12:null,bottom:n>=.5?window.innerHeight-(e.clientY+16):null,right:i>=.5?window.innerWidth-(e.clientX-12):null}},e.preventDefault(),e.stopPropagation()},Z=()=>{Me.value=null},rn=()=>({onClose:Z,...Me.value});Pt.push(Z);const I=L(null),Hn=(e,t,n,i)=>{I.value={area:t,ix:n,handlers:i},e.preventDefault(),e.stopPropagation(),Z()},M=()=>{I.value=null},on=()=>{var e;return{onClose:M,cards:I.value?_.value[I.value.area][I.value.ix].cards:[],handlers:(e=I.value)==null?void 0:e.handlers}},G=({cards:e,flipped:t=!1,reversed:n=!1,tapped:i=!1,laid:r=!1})=>({cards:e,flipped:t,reversed:n,tapped:i,laid:r}),_=L({}),xn=e=>{M(),_.value=e},_e=(e,t)=>{const n=_.value[e][t];return _.value={..._.value,[e]:_.value[e].filter((i,r)=>r!==t)},n},Ae=e=>{const t=_.value[e];return _.value={..._.value,[e]:[]},t},Le=(e,t,n)=>{n<0&&(n+=_.value[e][t].cards.length);const i=_.value[e][t].cards[n];return _.value={..._.value,[e]:j(_.value[e],t,{..._.value[e][t],cards:_.value[e][t].cards.filter((r,o)=>t!==o)})},i},Ie=(e,t)=>{const n=_.value[e][t].cards;return _.value={..._.value,[e]:j(_.value[e],t,{..._.value[e][t],cards:[]})},n},O=(e,t)=>{_.value={..._.value,[t]:[..._.value[t],...e]}},fe=(e,t,n)=>{_.value={..._.value,[t]:j(_.value[t],n,{..._.value[t][n],cards:[..._.value[t][n].cards,...e]})}},ce=(e,t,n)=>{_.value={..._.value,[t]:j(_.value[t],n,{..._.value[t][n],cards:[...e,..._.value[t][n].cards]})}},Ne=e=>e.reduce((t,n)=>t.concat(n.cards),[]),xt=(e,t)=>{const n=_e(e,t);_.value={..._.value,[e]:[{...n,cards:[...n.cards,...Ne(_.value[e])]}]}},sn=(e,t,n,i)=>{if(M(),!_.value[n][i])Oe(e,t,n,{},!0);else{const r=_e(e,t);fe(r.cards,n,e===n&&i>t?i-1:i)}},ln=(e,t,n,i)=>{if(M(),!_.value[n][i])Oe(e,t,n,{},!0);else{const r=_e(e,t);ce(r.cards,n,e===n&&i>t?i-1:i)}},Oe=(e,t,n,i={},r=!1)=>{M();const o=_e(e,t).cards;O(r?[G({cards:o,...i})]:o.map(s=>G({cards:[s],...i})),n)},de=(e,t,n,i)=>{_.value={..._.value,[e]:j(_.value[e],t,{..._.value[e][t],[n]:i})}},Cn=(e,t)=>{de(e,t,"tapped",!_.value[e][t].tapped)},Mn=(e,t)=>{de(e,t,"flipped",!_.value[e][t].flipped)},An=(e,t)=>{de(e,t,"reversed",!_.value[e][t].flipped)},Ln=(e,t)=>{de(e,t,"laid",!_.value[e][t].flipped)},In=(e,t,n={})=>{M();const i=Ae(e);O(i.map(r=>({cards:r.cards,...n})),t)},Nn=(e,t,n)=>{if(M(),e===t)xt(t,n);else{const i=Ae(e);ce(Ne(i),t,n)}},On=(e,t,n)=>{if(M(),e===t)xt(t,n);else{const i=Ae(e);fe(Ne(i),t,n)}},Ct=(e,t,n,i,r=!1,o={})=>{if(_.value[e][t].cards.length<=1&&!r)Oe(e,t,i,o);else{const s=Le(e,t,n);O([G({cards:[s],...o})],i)}},Rn=(e,t,n,i,r,o=!1)=>{if(_.value[e][t].cards.length<=1&&!o)ln(e,t,i,r);else if(!_.value[i][r])Ct(e,t,n,i);else{const s=Le(e,t,n);ce([s],i,r)}},Un=(e,t,n,i,r,o=!1)=>{if(_.value[e][t].cards.length<=1&&!o)sn(e,t,i,r);else if(!_.value[i][r])Ct(e,t,n,i);else{const s=Le(e,t,n);fe([s],i,r)}},Fn=(e,t,n,i,r=!1)=>{const o=Ie(e,t);O(r?[G({cards:o,...i})]:o.map(s=>G({cards:[s],...i})),n)},Xn=(e,t,n,i)=>{const r=Ie(e,t);ce(r,n,i)},Bn=(e,t,n,i)=>{const r=Ie(e,t);fe(r,n,i)},Yn=e=>{const t=Object.fromEntries(e.map(n=>[n,_.value[n].map(i=>({...i,tapped:!1}))]));_.value={..._.value,...t}},qn=(e,t)=>{const n=Kt(_.value[e][t].cards);_.value={..._.value,[e]:[{..._.value[e][t],cards:n}]}},$=L(null),an=(e,t,n)=>{$.value={handler:n,src:{area:e,ix:t},dest:null}},Mt=()=>{$.value=null},Wn=(e,t)=>({onDragEnter:n=>{$.value&&($.value={...$.value,dest:{area:e,ix:t}},n.stopPropagation())},onDragLeave:n=>{if(!$.value)return;const{dest:i}=$.value;i.area===e&&i.ix===t&&($.value={...$.value,dest:null}),n.stopPropagation()},onDragOver:n=>{$.value&&n.preventDefault()},onDrop:n=>{if(!$.value)return;const{dest:i,src:r}=$.value;(r.area!==i.area||r.ix!==i.ix)&&$.value.handler(n,i.area,i.ix),Mt(),n.stopPropagation()}}),zn=(e,t,n)=>({draggable:!0,onDragStart:i=>{Z(),an(e,t,n),i.stopPropagation()}}),Qe=(e,t)=>{var n;return((n=$.value)==null?void 0:n.src)&&$.value.src.area===e&&$.value.src.ix===t},et=(e,t)=>{var n;return((n=$.value)==null?void 0:n.dest)&&$.value.dest.area===e&&$.value.dest.ix===t};Dt.push(Mt);const Re=L(null),Gn=(e,t)=>{Re.value=t,e.preventDefault(),e.stopPropagation(),Z()},un=()=>{Re.value=null},_n=()=>({onClose:un,src:Re.value}),fn=({label:e,children:t,width:n,nogrow:i,isSelected:r,isTargetted:o,...s})=>{const a={width:n==null?void 0:`calc(var(--dmpg-card-width) * ${n} + var(--dmpg-card-gap) * ${n-1})`,flexGrow:n||i?0:1};return h("div",{class:`dmpg-area ${r?"dmpg-selected":o?"dmpg-targetted":""}`,style:a,...s,children:[t,h("span",{class:"dmpg-area-label",children:e})]})},cn=({onClose:e,pos:t,options:n})=>{const i=zt((r,o)=>{o(r),r.stopPropagation(),e()},[e]);return n&&h("div",{class:"dmpg-menu-container",style:t,children:n.map(r=>h("div",{class:"dmpg-menu-option",onClick:o=>i(o,r[1]),children:r[0]}))})},At=({children:e,onClick:t})=>h("div",{class:"dmpg-overlay",onClick:t,children:e}),Lt=({stack:e,isSelected:t,isTargetted:n,style:i={},...r})=>{const o=(e.tapped?-30:0)+(e.reversed?180:0)+(e.laid?-90:0),s=e.cards.length===0?{pointerEvents:"none"}:{...i,backgroundImage:`url(${e.cards[0]})`,transform:`rotate(${o}deg)`},a=t?"dmpg-selected":n?"dmpg-targetted":e.cards.length<=0?"dmpg-empty":e.cards.length>0&&e.flipped?"dmpg-flipped":"dmpg-nonempty";return h("div",{class:"dmpg-card-container",style:s,...r,children:h("div",{class:`dmpg-card-inner ${a}`,children:e.cards.length>1&&h("div",{class:`dmpg-card-counter ${e.flipped?"dmpg-flipped":""}`,children:e.flipped?e.cards.length:`+${e.cards.length-1}`})})})},dn=({cards:e,onClose:t,handlers:n})=>e.length>0&&h(At,{onClick:t,children:h("div",{class:"dmpg-list-container",...Ht,children:e.map((i,r)=>h(Lt,{stack:{cards:[i]},...n(r)}))})}),hn=({onClose:e,src:t})=>t&&h(At,{onClick:e,children:h("img",{class:"dmpg-lightbox-img",src:t})}),jn=({children:e,...t})=>h("div",{class:"dmpg-button",...t,children:e}),tt=({href:e,target:t,children:n})=>h("a",{class:"dmpg-link",href:e,target:t,children:n}),pn=-8,gn=-72,vn=({area:e,handlers:t})=>{const n=_.value[e.area]??[],i=Math.max(Math.max(n.length-(e.expandThreshold??2),0)*pn,gn);return h(fn,{label:e.label,width:e.width,nogrow:e.optional,isSelected:Qe(e.area,null),isTargetted:et(e.area,null),...t[e.area].area,children:n.map((r,o)=>h(Lt,{stack:r,isSelected:Qe(e.area,o),isTargetted:et(e.area,o),style:{marginLeft:o>0?`${i}px`:0},...t[e.area].stack(o)}))})},It=({rows:e,handlers:t})=>h("div",{class:"dmpg-rows",children:e.map(n=>h("div",{class:"dmpg-row",children:h(mn,{areas:n,handlers:t})}))}),mn=({areas:e,handlers:t})=>e.map(n=>{var i;return Array.isArray(n)?h(It,{rows:n,handlers:t}):(i=_.value[n.area])!=null&&i.length||!n.optional?h(vn,{area:n,handlers:t}):null}),Kn=({rows:e,handlers:t})=>h("div",{class:"dmpg-wrapper",...Ht,children:[h(cn,{...rn()}),h(dn,{...on()}),h(hn,{..._n()}),h(It,{rows:e,handlers:t}),h("div",{class:"dmpg-footer",children:[h(tt,{href:"https://zk-phi.github.io/handanalyze",target:"_blank",children:"→ 確率計算機"})," / ",h(tt,{href:"https://x.com/zk_phi",target:"_blank",children:"@zk_phi"})]})]}),Vn=({children:e})=>h("div",{class:"dmpg-floating-buttons",children:e});function Y(e,t=!1){let n=e.touches[0];return{x:t?n.pageX:n.clientX,y:t?n.pageY:n.clientY}}function nt(e,t,n){for(let i=0;i<n.length;i++){let r=n[i];e[r]=t[r]}}function yn(e,t,n){let i=["altKey","ctrlKey","metaKey","shiftKey"],r=["pageX","pageY","clientX","clientY","screenX","screenY","offsetX","offsetY"],o=new Event(e,{bubbles:!0,cancelable:!0}),s=t.touches[0];return o.button=0,o.which=o.buttons=1,nt(o,t,i),nt(o,s,r),bn(o,n),o}function bn(e,t){let n=t.getBoundingClientRect();e.offsetX===void 0&&(e.offsetX=e.clientX-n.x,e.offsetY=e.clientY-n.y),e.layerX===void 0&&(e.layerX=e.pageX-n.left,e.layerY=e.pageY-n.top)}function Nt(e,t){if($n(t),e instanceof HTMLCanvasElement){let n=t;n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0)}wn(e,t),t.style.pointerEvents="none";for(let n=0;n<e.children.length;n++)Nt(e.children[n],t.children[n])}function wn(e,t){let n=getComputedStyle(e);for(let i of n)i.includes("transition")||(t.style[i]=n[i]);Object.keys(t.dataset).forEach(i=>delete t.dataset[i])}function $n(e){["id","class","style","draggable"].forEach(function(t){e.removeAttribute(t)})}var it=class{constructor(e){w(this,"_dropEffect");w(this,"_effectAllowed");w(this,"_data");w(this,"_dragDropTouch");this._dropEffect="move",this._effectAllowed="all",this._data={},this._dragDropTouch=e}get dropEffect(){return this._dropEffect}set dropEffect(e){this._dropEffect=e}get effectAllowed(){return this._effectAllowed}set effectAllowed(e){this._effectAllowed=e}get types(){return Object.keys(this._data)}clearData(e){e!==null?delete this._data[e.toLowerCase()]:this._data={}}getData(e){let t=e.toLowerCase(),n=this._data[t];return t==="text"&&n==null&&(n=this._data["text/plain"]),n}setData(e,t){this._data[e.toLowerCase()]=t}setDragImage(e,t,n){this._dragDropTouch.setDragImage(e,t,n)}},{round:rt}=Math,Sn={allowDragScroll:!0,contextMenuDelayMS:900,dragImageOpacity:.5,dragScrollPercentage:10,dragScrollSpeed:10,dragThresholdPixels:5,forceListen:!1,isPressHoldMode:!1,pressHoldDelayMS:400,pressHoldMargin:25,pressHoldThresholdPixels:0},En=class{constructor(e=document,t=document,n){w(this,"_dragRoot");w(this,"_dropRoot");w(this,"_dragSource");w(this,"_lastTouch");w(this,"_lastTarget");w(this,"_ptDown");w(this,"_isDragEnabled");w(this,"_isDropZone");w(this,"_dataTransfer");w(this,"_img");w(this,"_imgCustom");w(this,"_imgOffset");w(this,"_pressHoldIntervalId");w(this,"configuration");for(this.configuration={...Sn,...n||{}},this._dragRoot=e,this._dropRoot=t;!this._dropRoot.elementFromPoint&&this._dropRoot.parentNode;)this._dropRoot=this._dropRoot.parentNode;this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new it(this),this._img=null,this._imgCustom=null,this._imgOffset={x:0,y:0},this.listen()}listen(){if(navigator.maxTouchPoints===0&&!this.configuration.forceListen)return;let e={passive:!1,capture:!1};this._dragRoot.addEventListener("touchstart",this._touchstart.bind(this),e),this._dragRoot.addEventListener("touchmove",this._touchmove.bind(this),e),this._dragRoot.addEventListener("touchend",this._touchend.bind(this)),this._dragRoot.addEventListener("touchcancel",this._touchend.bind(this))}setDragImage(e,t,n){this._imgCustom=e,this._imgOffset={x:t,y:n}}_touchstart(e){if(this._shouldHandle(e)){this._reset();let t=this._closestDraggable(e.target);t&&e.target&&!this._dispatchEvent(e,"mousemove",e.target)&&!this._dispatchEvent(e,"mousedown",e.target)&&(this._dragSource=t,this._ptDown=Y(e),this._lastTouch=e,setTimeout(()=>{this._dragSource===t&&this._img===null&&this._dispatchEvent(e,"contextmenu",t)&&this._reset()},this.configuration.contextMenuDelayMS),this.configuration.isPressHoldMode?this._pressHoldIntervalId=setTimeout(()=>{this._isDragEnabled=!0,this._touchmove(e)},this.configuration.pressHoldDelayMS):e.isTrusted||e.target!==this._lastTarget&&(this._lastTarget=e.target))}}_touchmove(e){if(this._shouldCancelPressHoldMove(e)){this._reset();return}if(this._shouldHandleMove(e)||this._shouldHandlePressHoldMove(e)){let t=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",t)){this._lastTouch=e,e.preventDefault();return}if(this._dragSource&&!this._img&&this._shouldStartDragging(e)){if(this._dispatchEvent(this._lastTouch,"dragstart",this._dragSource)){this._dragSource=null;return}this._createImage(e),this._dispatchEvent(e,"dragenter",t)}if(this._img&&this._dragSource&&(this._lastTouch=e,e.preventDefault(),this._dispatchEvent(e,"drag",this._dragSource),t!==this._lastTarget&&(this._lastTarget&&this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",t),this._lastTarget=t),this._moveImage(e),this._isDropZone=this._dispatchEvent(e,"dragover",t),this.configuration.allowDragScroll)){let n=this._getHotRegionDelta(e);globalThis.scrollBy(n.x,n.y)}}}_touchend(e){if(!(this._lastTouch&&e.target&&this._lastTarget)){this._reset();return}if(this._shouldHandle(e)){if(this._dispatchEvent(this._lastTouch,"mouseup",e.target)){e.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target)),this._destroyImage(),this._dragSource&&(e.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}}_shouldHandle(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2}_shouldHandleMove(e){return!this.configuration.isPressHoldMode&&this._shouldHandle(e)}_shouldHandlePressHoldMove(e){return this.configuration.isPressHoldMode&&this._isDragEnabled&&e&&e.touches&&e.touches.length}_shouldCancelPressHoldMove(e){return this.configuration.isPressHoldMode&&!this._isDragEnabled&&this._getDelta(e)>this.configuration.pressHoldMargin}_shouldStartDragging(e){let t=this._getDelta(e);return this.configuration.isPressHoldMode?t>=this.configuration.pressHoldThresholdPixels:t>this.configuration.dragThresholdPixels}_reset(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new it(this),clearTimeout(this._pressHoldIntervalId)}_getDelta(e){if(!this._ptDown)return 0;let{x:t,y:n}=this._ptDown,i=Y(e);return((i.x-t)**2+(i.y-n)**2)**.5}_getHotRegionDelta(e){let{clientX:t,clientY:n}=e.touches[0],{innerWidth:i,innerHeight:r}=globalThis,{dragScrollPercentage:o,dragScrollSpeed:s}=this.configuration,a=o/100,f=1-a,u=t<i*a?-s:t>i*f?+s:0,d=n<r*a?-s:n>r*f?+s:0;return{x:u,y:d}}_getTarget(e){let t=Y(e),n=this._dropRoot.elementFromPoint(t.x,t.y);for(;n&&getComputedStyle(n).pointerEvents=="none";)n=n.parentElement;return n}_createImage(e){this._img&&this._destroyImage();let t=this._imgCustom||this._dragSource;if(this._img=t.cloneNode(!0),Nt(t,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){let n=t.getBoundingClientRect(),i=Y(e);this._imgOffset={x:i.x-n.left,y:i.y-n.top},this._img.style.opacity=`${this.configuration.dragImageOpacity}`}this._moveImage(e),document.body.appendChild(this._img)}_destroyImage(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null}_moveImage(e){requestAnimationFrame(()=>{if(this._img){let t=Y(e,!0),n=this._img.style;n.position="absolute",n.pointerEvents="none",n.zIndex="999999",n.left=`${rt(t.x-this._imgOffset.x)}px`,n.top=`${rt(t.y-this._imgOffset.y)}px`}})}_dispatchEvent(e,t,n){if(!(e&&n))return!1;let i=yn(t,e,n);return i.dataTransfer=this._dataTransfer,n.dispatchEvent(i),i.defaultPrevented}_closestDraggable(e){for(let t=e;t!==null;t=t.parentElement)if(t.draggable)return t;return null}};function Ee(e=document,t=document,n){new En(e,t,n)}import.meta.url.includes("?autoload")?Ee(document,document,{forceListen:!0}):globalThis.DragDropTouch={enable:function(e=document,t=document,n){Ee(e,t,n)}};Ee(void 0,void 0,{contextMenuDelayMS:300});export{ae as A,jn as B,Kt as C,Tn as D,xn as E,Vn as F,G,Kn as P,Pn as a,Cn as b,zn as c,Wn as d,Hn as e,Ln as f,_ as g,An as h,Rn as i,qn as j,Nn as k,On as l,Ct as m,In as n,Xn as o,ln as p,Bn as q,Fn as r,Gn as s,Mn as t,Un as u,sn as v,Oe as w,h as x,Dn as y,Yn as z};
