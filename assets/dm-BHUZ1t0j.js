(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var he,g,st,_t,U,Be,dt,De,ct,Te,Ee,$e,Q={},ft=[],Wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Me=Array.isArray;function R(t,n){for(var r in n)t[r]=n[r];return t}function Le(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function zt(t,n,r){var o,i,a,l={};for(a in n)a=="key"?o=n[a]:a=="ref"?i=n[a]:l[a]=n[a];if(arguments.length>2&&(l.children=arguments.length>3?he.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return se(t,l,o,i,null)}function se(t,n,r,o,i){var a={type:t,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++st,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(a),a}function ee(t){return t.children}function Z(t,n){this.props=t,this.context=n}function B(t,n){if(n==null)return t.__?B(t.__,t.__i+1):null;for(var r;n<t.__k.length;n++)if((r=t.__k[n])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?B(t):null}function pt(t){var n,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((r=t.__k[n])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return pt(t)}}function qe(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!de.__r++||Be!==g.debounceRendering)&&((Be=g.debounceRendering)||dt)(de)}function de(){var t,n,r,o,i,a,l,s;for(U.sort(De);t=U.shift();)t.__d&&(n=U.length,o=void 0,a=(i=(r=t).__v).__e,l=[],s=[],r.__P&&((o=R({},i)).__v=i.__v+1,g.vnode&&g.vnode(o),Oe(r.__P,o,i,r.__n,r.__P.namespaceURI,32&i.__u?[a]:null,l,a??B(i),!!(32&i.__u),s),o.__v=i.__v,o.__.__k[o.__i]=o,vt(l,o,s),o.__e!=a&&pt(o)),U.length>n&&U.sort(De));de.__r=0}function ht(t,n,r,o,i,a,l,s,c,d,p){var u,b,f,w,H,D,m=o&&o.__k||ft,y=n.length;for(c=Bt(r,n,m,c,y),u=0;u<y;u++)(f=r.__k[u])!=null&&(b=f.__i===-1?Q:m[f.__i]||Q,f.__i=u,D=Oe(t,f,b,i,a,l,s,c,d,p),w=f.__e,f.ref&&b.ref!=f.ref&&(b.ref&&Ae(b.ref,null,f),p.push(f.ref,f.__c||w,f)),H==null&&w!=null&&(H=w),4&f.__u||b.__k===f.__k?c=gt(f,c,t):typeof f.type=="function"&&D!==void 0?c=D:w&&(c=w.nextSibling),f.__u&=-7);return r.__e=H,c}function Bt(t,n,r,o,i){var a,l,s,c,d,p=r.length,u=p,b=0;for(t.__k=new Array(i),a=0;a<i;a++)(l=n[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(c=a+b,(l=t.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?se(null,l,null,null,null):Me(l)?se(ee,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?se(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=t,l.__b=t.__b+1,s=null,(d=l.__i=qt(l,r,c,u))!==-1&&(u--,(s=r[d])&&(s.__u|=2)),s==null||s.__v===null?(d==-1&&b--,typeof l.type!="function"&&(l.__u|=4)):d!=c&&(d==c-1?b--:d==c+1?b++:(d>c?b--:b++,l.__u|=4))):t.__k[a]=null;if(u)for(a=0;a<p;a++)(s=r[a])!=null&&!(2&s.__u)&&(s.__e==o&&(o=B(s)),mt(s,s));return o}function gt(t,n,r){var o,i;if(typeof t.type=="function"){for(o=t.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=t,n=gt(o[i],n,r));return n}t.__e!=n&&(n&&t.type&&!r.contains(n)&&(n=B(t)),r.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function qt(t,n,r,o){var i,a,l=t.key,s=t.type,c=n[r];if(c===null||c&&l==c.key&&s===c.type&&!(2&c.__u))return r;if(o>(c!=null&&!(2&c.__u)?1:0))for(i=r-1,a=r+1;i>=0||a<n.length;){if(i>=0){if((c=n[i])&&!(2&c.__u)&&l==c.key&&s===c.type)return i;i--}if(a<n.length){if((c=n[a])&&!(2&c.__u)&&l==c.key&&s===c.type)return a;a++}}return-1}function Xe(t,n,r){n[0]=="-"?t.setProperty(n,r??""):t[n]=r==null?"":typeof r!="number"||Wt.test(n)?r:r+"px"}function le(t,n,r,o,i){var a;e:if(n=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(n in o)r&&n in r||Xe(t.style,n,"");if(r)for(n in r)o&&r[n]===o[n]||Xe(t.style,n,r[n])}else if(n[0]=="o"&&n[1]=="n")a=n!=(n=n.replace(ct,"$1")),n=n.toLowerCase()in t||n=="onFocusOut"||n=="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+a]=r,r?o?r.u=o.u:(r.u=Te,t.addEventListener(n,a?$e:Ee,a)):t.removeEventListener(n,a?$e:Ee,a);else{if(i=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in t)try{t[n]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&n[4]!="-"?t.removeAttribute(n):t.setAttribute(n,n=="popover"&&r==1?"":r))}}function Ye(t){return function(n){if(this.l){var r=this.l[n.type+t];if(n.t==null)n.t=Te++;else if(n.t<r.u)return;return r(g.event?g.event(n):n)}}}function Oe(t,n,r,o,i,a,l,s,c,d){var p,u,b,f,w,H,D,m,y,Y,I,oe,G,ze,ae,me,ye,x=n.type;if(n.constructor!==void 0)return null;128&r.__u&&(c=!!(32&r.__u),a=[s=n.__e=r.__e]),(p=g.__b)&&p(n);e:if(typeof x=="function")try{if(m=n.props,y="prototype"in x&&x.prototype.render,Y=(p=x.contextType)&&o[p.__c],I=p?Y?Y.props.value:p.__:o,r.__c?D=(u=n.__c=r.__c).__=u.__E:(y?n.__c=u=new x(m,I):(n.__c=u=new Z(m,I),u.constructor=x,u.render=Yt),Y&&Y.sub(u),u.props=m,u.state||(u.state={}),u.context=I,u.__n=o,b=u.__d=!0,u.__h=[],u._sb=[]),y&&u.__s==null&&(u.__s=u.state),y&&x.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=R({},u.__s)),R(u.__s,x.getDerivedStateFromProps(m,u.__s))),f=u.props,w=u.state,u.__v=n,b)y&&x.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),y&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(y&&x.getDerivedStateFromProps==null&&m!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,I),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,I)===!1||n.__v==r.__v)){for(n.__v!=r.__v&&(u.props=m,u.state=u.__s,u.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(K){K&&(K.__=n)}),oe=0;oe<u._sb.length;oe++)u.__h.push(u._sb[oe]);u._sb=[],u.__h.length&&l.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,I),y&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,w,H)})}if(u.context=I,u.props=m,u.__P=t,u.__e=!1,G=g.__r,ze=0,y){for(u.state=u.__s,u.__d=!1,G&&G(n),p=u.render(u.props,u.state,u.context),ae=0;ae<u._sb.length;ae++)u.__h.push(u._sb[ae]);u._sb=[]}else do u.__d=!1,G&&G(n),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++ze<25);u.state=u.__s,u.getChildContext!=null&&(o=R(R({},o),u.getChildContext())),y&&!b&&u.getSnapshotBeforeUpdate!=null&&(H=u.getSnapshotBeforeUpdate(f,w)),s=ht(t,Me(me=p!=null&&p.type===ee&&p.key==null?p.props.children:p)?me:[me],n,r,o,i,a,l,s,c,d),u.base=n.__e,n.__u&=-161,u.__h.length&&l.push(u),D&&(u.__E=u.__=null)}catch(K){if(n.__v=null,c||a!=null)if(K.then){for(n.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,n.__e=s}else for(ye=a.length;ye--;)Le(a[ye]);else n.__e=r.__e,n.__k=r.__k;g.__e(K,n,r)}else a==null&&n.__v==r.__v?(n.__k=r.__k,n.__e=r.__e):s=n.__e=Xt(r.__e,n,r,o,i,a,l,c,d);return(p=g.diffed)&&p(n),128&n.__u?void 0:s}function vt(t,n,r){for(var o=0;o<r.length;o++)Ae(r[o],r[++o],r[++o]);g.__c&&g.__c(n,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(a){a.call(i)})}catch(a){g.__e(a,i.__v)}})}function Xt(t,n,r,o,i,a,l,s,c){var d,p,u,b,f,w,H,D=r.props,m=n.props,y=n.type;if(y=="svg"?i="http://www.w3.org/2000/svg":y=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(d=0;d<a.length;d++)if((f=a[d])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){t=f,a[d]=null;break}}if(t==null){if(y==null)return document.createTextNode(m);t=document.createElementNS(i,y,m.is&&m),s&&(g.__m&&g.__m(n,a),s=!1),a=null}if(y===null)D===m||s&&t.data===m||(t.data=m);else{if(a=a&&he.call(t.childNodes),D=r.props||Q,!s&&a!=null)for(D={},d=0;d<t.attributes.length;d++)D[(f=t.attributes[d]).name]=f.value;for(d in D)if(f=D[d],d!="children"){if(d=="dangerouslySetInnerHTML")u=f;else if(!(d in m)){if(d=="value"&&"defaultValue"in m||d=="checked"&&"defaultChecked"in m)continue;le(t,d,null,f,i)}}for(d in m)f=m[d],d=="children"?b=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?w=f:d=="checked"?H=f:s&&typeof f!="function"||D[d]===f||le(t,d,f,D[d],i);if(p)s||u&&(p.__html===u.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),n.__k=[];else if(u&&(t.innerHTML=""),ht(t,Me(b)?b:[b],n,r,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,l,a?a[0]:r.__k&&B(r,0),s,c),a!=null)for(d=a.length;d--;)Le(a[d]);s||(d="value",y=="progress"&&w==null?t.removeAttribute("value"):w!==void 0&&(w!==t[d]||y=="progress"&&!w||y=="option"&&w!==D[d])&&le(t,d,w,D[d],i),d="checked",H!==void 0&&H!==t[d]&&le(t,d,H,D[d],i))}return t}function Ae(t,n,r){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&n==null||(t.__u=t(n))}else t.current=n}catch(i){g.__e(i,r)}}function mt(t,n,r){var o,i;if(g.unmount&&g.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||Ae(o,null,n)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){g.__e(a,n)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&mt(o[i],n,r||typeof t.type!="function");r||Le(t.__e),t.__c=t.__=t.__e=void 0}function Yt(t,n,r){return this.constructor(t,r)}function Gt(t,n,r){var o,i,a,l;n==document&&(n=document.documentElement),g.__&&g.__(t,n),i=(o=!1)?null:n.__k,a=[],l=[],Oe(n,t=n.__k=zt(ee,null,[t]),i||Q,Q,n.namespaceURI,i?null:n.firstChild?he.call(n.childNodes):null,a,i?i.__e:n.firstChild,o,l),vt(a,t,l)}he=ft.slice,g={__e:function(t,n,r,o){for(var i,a,l;n=n.__;)if((i=n.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),l=i.__d),l)return i.__E=i}catch(s){t=s}throw t}},st=0,_t=function(t){return t!=null&&t.constructor==null},Z.prototype.setState=function(t,n){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R({},this.state),typeof t=="function"&&(t=t(R({},r),this.props)),t&&R(r,t),t!=null&&this.__v&&(n&&this._sb.push(n),qe(this))},Z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),qe(this))},Z.prototype.render=ee,U=[],dt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,De=function(t,n){return t.__v.__b-n.__v.__b},de.__r=0,ct=/(PointerCapture)$|Capture$/i,Te=0,Ee=Ye(!1),$e=Ye(!0);var Kt=0;function h(t,n,r,o,i,a){n||(n={});var l,s,c=n;if("ref"in c)for(s in c={},n)s=="ref"?l=n[s]:c[s]=n[s];var d={type:t,props:c,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Kt,__i:-1,__u:0,__source:i,__self:a};if(typeof t=="function"&&(l=t.defaultProps))for(s in l)c[s]===void 0&&(c[s]=l[s]);return g.vnode&&g.vnode(d),d}var ce,C,be,Ge,Ce=0,yt=[],k=g,Ke=k.__b,Ve=k.__r,Ze=k.diffed,Je=k.__c,Qe=k.unmount,et=k.__;function bt(t,n){k.__h&&k.__h(C,t,Ce||n),Ce=0;var r=C.__H||(C.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function Vt(t,n){var r=bt(ce++,3);!k.__s&&kt(r.__H,n)&&(r.__=t,r.i=n,C.__H.__h.push(r))}function Ie(t,n){var r=bt(ce++,7);return kt(r.__H,n)&&(r.__=t(),r.__H=n,r.__h=t),r.__}function Zt(t,n){return Ce=8,Ie(function(){return t},n)}function Jt(){for(var t;t=yt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(_e),t.__H.__h.forEach(Pe),t.__H.__h=[]}catch(n){t.__H.__h=[],k.__e(n,t.__v)}}k.__b=function(t){C=null,Ke&&Ke(t)},k.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),et&&et(t,n)},k.__r=function(t){Ve&&Ve(t),ce=0;var n=(C=t.__c).__H;n&&(be===C?(n.__h=[],C.__h=[],n.__.forEach(function(r){r.__N&&(r.__=r.__N),r.i=r.__N=void 0})):(n.__h.forEach(_e),n.__h.forEach(Pe),n.__h=[],ce=0)),be=C},k.diffed=function(t){Ze&&Ze(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(yt.push(n)!==1&&Ge===k.requestAnimationFrame||((Ge=k.requestAnimationFrame)||Qt)(Jt)),n.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.i=void 0})),be=C=null},k.__c=function(t,n){n.some(function(r){try{r.__h.forEach(_e),r.__h=r.__h.filter(function(o){return!o.__||Pe(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],k.__e(o,r.__v)}}),Je&&Je(t,n)},k.unmount=function(t){Qe&&Qe(t);var n,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{_e(o)}catch(i){n=i}}),r.__H=void 0,n&&k.__e(n,r.__v))};var tt=typeof requestAnimationFrame=="function";function Qt(t){var n,r=function(){clearTimeout(o),tt&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(r,100);tt&&(n=requestAnimationFrame(r))}function _e(t){var n=C,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),C=n}function Pe(t){var n=C;t.__c=t.__(),C=n}function kt(t,n){return!t||t.length!==n.length||n.some(function(r,o){return r!==t[o]})}const je=t=>{const n=[...t];for(let r=n.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[n[r],n[o]]=[n[o],n[r]]}return n},L=(t,n,r)=>[...t.slice(0,n),r,...t.slice(n+1,t.length)];var en=Symbol.for("preact-signals");function ge(){if(N>1)N--;else{for(var t,n=!1;J!==void 0;){var r=J;for(J=void 0,He++;r!==void 0;){var o=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&wt(r))try{r.c()}catch(i){n||(t=i,n=!0)}r=o}}if(He=0,N--,n)throw t}}function tn(t){if(N>0)return t();N++;try{return t()}finally{ge()}}var v=void 0,J=void 0,N=0,He=0,fe=0;function St(t){if(v!==void 0){var n=t.n;if(n===void 0||n.t!==v)return n={i:0,S:t,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:n},v.s!==void 0&&(v.s.n=n),v.s=n,t.n=n,32&v.f&&t.S(n),n;if(n.i===-1)return n.i=0,n.n!==void 0&&(n.n.p=n.p,n.p!==void 0&&(n.p.n=n.n),n.p=v.s,n.n=void 0,v.s.n=n,v.s=n),n}}function $(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}$.prototype.brand=en;$.prototype.h=function(){return!0};$.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};$.prototype.U=function(t){if(this.t!==void 0){var n=t.e,r=t.x;n!==void 0&&(n.x=r,t.e=void 0),r!==void 0&&(r.e=n,t.x=void 0),t===this.t&&(this.t=r)}};$.prototype.subscribe=function(t){var n=this;return ne(function(){var r=n.value,o=v;v=void 0;try{t(r)}finally{v=o}})};$.prototype.valueOf=function(){return this.value};$.prototype.toString=function(){return this.value+""};$.prototype.toJSON=function(){return this.value};$.prototype.peek=function(){var t=v;v=void 0;try{return this.value}finally{v=t}};Object.defineProperty($.prototype,"value",{get:function(){var t=St(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(He>100)throw new Error("Cycle detected");this.v=t,this.i++,fe++,N++;try{for(var n=this.t;n!==void 0;n=n.x)n.t.N()}finally{ge()}}}});function F(t){return new $(t)}function wt(t){for(var n=t.s;n!==void 0;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Dt(t){for(var n=t.s;n!==void 0;n=n.n){var r=n.S.n;if(r!==void 0&&(n.r=r),n.S.n=n,n.i=-1,n.n===void 0){t.s=n;break}}}function Et(t){for(var n=t.s,r=void 0;n!==void 0;){var o=n.p;n.i===-1?(n.S.U(n),o!==void 0&&(o.n=n.n),n.n!==void 0&&(n.n.p=o)):r=n,n.S.n=n.r,n.r!==void 0&&(n.r=void 0),n=o}t.s=r}function q(t){$.call(this,void 0),this.x=t,this.s=void 0,this.g=fe-1,this.f=4}(q.prototype=new $).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fe))return!0;if(this.g=fe,this.f|=1,this.i>0&&!wt(this))return this.f&=-2,!0;var t=v;try{Dt(this),v=this;var n=this.x();(16&this.f||this.v!==n||this.i===0)&&(this.v=n,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return v=t,Et(this),this.f&=-2,!0};q.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var n=this.s;n!==void 0;n=n.n)n.S.S(n)}$.prototype.S.call(this,t)};q.prototype.U=function(t){if(this.t!==void 0&&($.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var n=this.s;n!==void 0;n=n.n)n.S.U(n)}};q.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(q.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=St(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function nt(t){return new q(t)}function $t(t){var n=t.u;if(t.u=void 0,typeof n=="function"){N++;var r=v;v=void 0;try{n()}catch(o){throw t.f&=-2,t.f|=8,Re(t),o}finally{v=r,ge()}}}function Re(t){for(var n=t.s;n!==void 0;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,$t(t)}function nn(t){if(v!==this)throw new Error("Out-of-order effect");Et(this),v=t,this.f&=-2,8&this.f&&Re(this),ge()}function te(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}te.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var n=this.x();typeof n=="function"&&(this.u=n)}finally{t()}};te.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,$t(this),Dt(this),N++;var t=v;return v=this,nn.bind(this,t)};te.prototype.N=function(){2&this.f||(this.f|=2,this.o=J,J=this)};te.prototype.d=function(){this.f|=8,1&this.f||Re(this)};function ne(t){var n=new te(t);try{n.c()}catch(r){throw n.d(),r}return n.d.bind(n)}var Ct,ke,Pt=[];ne(function(){Ct=this.N})();function X(t,n){g[t]=n.bind(null,g[t]||function(){})}function pe(t){ke&&ke(),ke=t&&t.S()}function Ht(t){var n=this,r=t.data,o=on(r);o.value=r;var i=Ie(function(){for(var s=n,c=n.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}var d=nt(function(){var f=o.value.value;return f===0?0:f===!0?"":f||""}),p=nt(function(){return!_t(d.value)}),u=ne(function(){if(this.N=xt,p.value){var f=d.value;s.base&&s.base.nodeType===3&&(s.base.data=f)}}),b=n.__$u.d;return n.__$u.d=function(){u(),b.call(this)},[p,d]},[]),a=i[0],l=i[1];return a.value?l.peek():l.value}Ht.displayName="_st";Object.defineProperties($.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ht},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});X("__b",function(t,n){if(typeof n.type=="string"){var r,o=n.props;for(var i in o)if(i!=="children"){var a=o[i];a instanceof $&&(r||(n.__np=r={}),r[i]=a,o[i]=a.peek())}}t(n)});X("__r",function(t,n){pe();var r,o=n.__c;o&&(o.__$f&=-2,(r=o.__$u)===void 0&&(o.__$u=r=function(i){var a;return ne(function(){a=this}),a.c=function(){o.__$f|=1,o.setState({})},a}())),pe(r),t(n)});X("__e",function(t,n,r,o){pe(),t(n,r,o)});X("diffed",function(t,n){pe();var r;if(typeof n.type=="string"&&(r=n.__e)){var o=n.__np,i=n.props;if(o){var a=r.U;if(a)for(var l in a){var s=a[l];s!==void 0&&!(l in o)&&(s.d(),a[l]=void 0)}else a={},r.U=a;for(var c in o){var d=a[c],p=o[c];d===void 0?(d=rn(r,c,p,i),a[c]=d):d.o(p,i)}}}t(n)});function rn(t,n,r,o){var i=n in t&&t.ownerSVGElement===void 0,a=F(r);return{o:function(l,s){a.value=l,o=s},d:ne(function(){this.N=xt;var l=a.value.value;o[n]!==l&&(o[n]=l,i?t[n]=l:l?t.setAttribute(n,l):t.removeAttribute(n))})}}X("unmount",function(t,n){if(typeof n.type=="string"){var r=n.__e;if(r){var o=r.U;if(o){r.U=void 0;for(var i in o){var a=o[i];a&&a.d()}}}}else{var l=n.__c;if(l){var s=l.__$u;s&&(l.__$u=void 0,s.d())}}t(n)});X("__h",function(t,n,r,o){(o<3||o===9)&&(n.__$f|=2),t(n,r,o)});Z.prototype.shouldComponentUpdate=function(t,n){var r=this.__$u,o=r&&r.s!==void 0;for(var i in n)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var a=2&this.__$f;if(!(o||a||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var l in t)if(l!=="__source"&&t[l]!==this.props[l])return!0;for(var s in this.props)if(!(s in t))return!0;return!1};function on(t){return Ie(function(){return F(t)},[])}var an=function(t){queueMicrotask(function(){queueMicrotask(t)})};function ln(){tn(function(){for(var t;t=Pt.shift();)Ct.call(t)})}function xt(){Pt.push(this)===1&&(g.requestAnimationFrame||an)(ln)}const Tt=[],Mt=[],Lt={onDragEnd:t=>{Tt.forEach(n=>n(t)),t.stopPropagation()},onClick:t=>{Mt.forEach(n=>n(t)),t.stopPropagation()}},Ne=F(null),M=(t,n)=>{const r=t.clientY/window.innerHeight,o=t.clientX/window.innerWidth;Ne.value={options:n,pos:{top:r<.5?t.clientY-16:null,left:o<.5?t.clientX+12:null,bottom:r>=.5?window.innerHeight-(t.clientY+16):null,right:o>=.5?window.innerWidth-(t.clientX-12):null}},t.preventDefault(),t.stopPropagation()},re=()=>{Ne.value=null},un=()=>({onClose:re,...Ne.value});Mt.push(re);const W=F(null),sn=(t,n,r,o)=>{W.value={area:n,ix:r,handlers:o},t.preventDefault(),t.stopPropagation(),re()},ie=()=>{W.value=null},_n=()=>{var t;return{onClose:ie,cards:W.value?_.value[W.value.area][W.value.ix].cards:[],handlers:(t=W.value)==null?void 0:t.handlers}},P=({cards:t,flipped:n=!1,reversed:r=!1,tapped:o=!1,laid:i=!1})=>({cards:t,flipped:n,reversed:r,tapped:o,laid:i}),_=F({}),Ot=t=>{ie(),_.value=t},rt=(t,n)=>{const r=je(_.value[t][n].cards);_.value={..._.value,[t]:[{..._.value[t][n],cards:r}]}},Ue=(t,n)=>{const r=_.value[t][n];return _.value={..._.value,[t]:_.value[t].filter((o,i)=>i!==n)},r},At=(t,n,r,o)=>{if(ie(),!_.value[r][o])ve(t,n,r,{},!0);else{const i=Ue(t,n);t===r&&o>n&&o--,_.value={..._.value,[r]:L(_.value[r],o,{..._.value[r][o],cards:[..._.value[r][o].cards,...i.cards]})}}},j=(t,n,r,o)=>{if(ie(),!_.value[r][o])ve(t,n,r,{},!0);else{const i=Ue(t,n);t===r&&o>n&&o--,_.value={..._.value,[r]:L(_.value[r],o,{..._.value[r][o],cards:[...i.cards,..._.value[r][o].cards]})}}},ve=(t,n,r,o={},i=!1)=>{ie();const a=Ue(t,n).cards;_.value={..._.value,[r]:[..._.value[r],...i?[P({cards:a,...o})]:a.map(l=>P({cards:[l],...o}))]}},it=(t,n)=>{_.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],tapped:!_.value[t][n].tapped})}},dn=(t,n,r,o)=>{_.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],[r]:o})}},ot=(t,n)=>{_.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],flipped:!_.value[t][n].flipped})}},cn=(t,n)=>{_.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],reversed:!_.value[t][n].reversed})}},fn=(t,n)=>{_.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],laid:!_.value[t][n].laid})}},pn=t=>{const n=Object.fromEntries(t.map(r=>[r,_.value[r].map(o=>({...o,tapped:!1}))]));_.value={..._.value,...n}},Fe=(t,n,r)=>{r<0&&(r+=_.value[t][n].cards.length);const o=_.value[t][n].cards[r];return _.value={..._.value,[t]:L(_.value[t],n,{..._.value[t][n],cards:_.value[t][n].cards.filter((i,a)=>a!==r)})},o},A=(t,n,r,o,i=!1,a={})=>{if(_.value[t][n].cards.length<=1&&!i)ve(t,n,o,a);else{const l=Fe(t,n,r);_.value={..._.value,[o]:[..._.value[o],P({cards:[l],...a})]}}},z=(t,n,r,o,i,a=!1)=>{if(_.value[t][n].cards.length<=1&&!a)j(t,n,o,i);else if(!_.value[o][i])A(t,n,r,o);else{const l=Fe(t,n,r);_.value={..._.value,[o]:L(_.value[o],i,{..._.value[o][i],cards:[l,..._.value[o][i].cards]})}}},xe=(t,n,r,o,i,a=!1)=>{if(_.value[t][n].cards.length<=1&&!a)At(t,n,o,i);else if(!_.value[o][i])A(t,n,r,o);else{const l=Fe(t,n,r);_.value={..._.value,[o]:L(_.value[o],i,{..._.value[o][i],cards:[..._.value[o][i].cards,l]})}}},S=F(null),hn=(t,n,r)=>{S.value={handler:r,src:{area:t,ix:n},dest:null}},It=()=>{S.value=null},E=(t,n)=>({onDragEnter:r=>{S.value&&(S.value={...S.value,dest:{area:t,ix:n}},r.stopPropagation())},onDragLeave:r=>{if(!S.value)return;const{dest:o}=S.value;o.area===t&&o.ix===n&&(S.value={...S.value,dest:null}),r.stopPropagation()},onDragOver:r=>{S.value&&r.preventDefault()},onDrop:r=>{if(!S.value)return;const{dest:o,src:i}=S.value;(i.area!==o.area||i.ix!==o.ix)&&S.value.handler(r,o.area,o.ix),It(),r.stopPropagation()}}),jt=(t,n,r)=>({draggable:!0,onDragStart:o=>{re(),hn(t,n,r)}}),gn=(t,n)=>{var r;return((r=S.value)==null?void 0:r.src)&&S.value.src.area===t&&S.value.src.ix===n},at=(t,n)=>{var r;return((r=S.value)==null?void 0:r.dest)&&S.value.dest.area===t&&S.value.dest.ix===n};Tt.push(It);const We=F(null),O=(t,n)=>{We.value=n,t.preventDefault(),t.stopPropagation(),re()},vn=()=>{We.value=null},mn=()=>({onClose:vn,src:We.value}),yn=[[{area:"field",label:"場"}],[{area:"shields",label:"シールド"},{area:"exploring",label:"めくられた",optional:!0},{area:"deck",label:"デッキ",width:1},{area:"graveyard",label:"墓地",width:1},{area:"grdeck",label:"GR",width:1,optional:!0},{area:"exdeck",label:"超次元",width:1,optional:!0}],[{area:"lands",label:"マナ"}],[{area:"hand",label:"手札"}]],Se=t=>{var r,o;const n=(o=(r=document.getElementsByClassName(t))==null?void 0:r[0])==null?void 0:o.children;return Array.from(n??[]).map(i=>{var a,l;return((l=(a=i==null?void 0:i.children)==null?void 0:a[0])==null?void 0:l.src)??""})},bn=()=>{const t=je(Se("MainCards")),n=Se("GRCardsList"),r=Se("HyperspatialCardsList");Ot({field:[],lands:[],graveyard:[P({cards:[]})],hand:t.splice(0,5).map(o=>P({cards:[o]})),shields:t.splice(0,5).map(o=>P({cards:[o],flipped:!0})),deck:[P({cards:t,flipped:!0})],grdeck:n.length?[P({cards:n,flipped:!0})]:[],exdeck:r.length?[P({cards:r})]:[],exploring:[]})},V=(t,n)=>jt(t,n,(r,o,i)=>{o==="graveyard"||o==="exdeck"?j(t,n,o,i??0):o==="deck"||o==="grdeck"||i!=null?M(r,[["🫳 上に置く",()=>j(t,n,o,i??0)],["🫴 下に入れる",()=>At(t,n,o,i??0)]]):ve(t,n,o,{reversed:o==="lands"})}),ue=(t,n,r)=>jt(t,n,(o,i,a)=>{i==="graveyard"||i==="exdeck"?z(t,n,0,i,a??0,r):i==="deck"||i==="grdeck"||a!=null?M(o,[["🫳 上に置く",()=>z(t,n,0,i,a??0,r)],["🫴 下に入れる",()=>xe(t,n,0,i,a??0,r)]]):A(t,n,0,i,r,{reversed:i==="lands"})}),T=(t,n,r,o=!1)=>{sn(t,n,r,i=>({onContextMenu:a=>O(a,_.value[n][r].cards[i]),onClick:a=>M(a,[["⚔️ 場に出す",()=>A(n,r,i,"field",o)],["🛡️ シールドに追加",()=>A(n,r,i,"shields",o)],["🫳 デッキの上に置く",()=>z(n,r,i,"deck",0,o)],["🫴 デッキの下に入れる",()=>xe(n,r,i,"deck",0,o)],["🪦 墓地に送る",()=>z(n,r,i,"graveyard",0,o)],["🎰 GRゾーンに置く",()=>xe(n,r,i,"grdeck",0,o)],["⚡ 超次元ゾーンに置く",()=>z(n,r,i,"exdeck",0,o)],["⛰️ マナに追加",()=>A(n,r,i,"lands",o,{reversed:!0})],["🃏 手札に加える",()=>A(n,r,i,"hand",o)]])}))},kn={field:{stack:t=>({onContextMenu:n=>O(n,_.value.field[t].cards[0]),onClick:n=>r=>M(r,[["✅ タップ",()=>it("field",t)],["⚡ 超次元ゾーン送り",()=>j("field",t,"exdeck",0)],["⬅️ 横向きにする",()=>fn("field",t)],["↕️ 上下反転する",()=>cn("field",t)],["🔄 裏返す",()=>ot("field",t)],["👀 重なっているカード",o=>T(o,"field",t)]]),...E("field",t),...V("field",t)}),area:{...E("field",null)}},shields:{stack:t=>({onContextMenu:n=>{dn("shields",t,"flipped",!1),O(n,_.value.shields[t].cards[0])},onClick:n=>M(n,[["⚡ 超次元ゾーン送り",()=>j("shields",t,"exdeck",0)],["🔄 裏返す",()=>ot("shields",t)],["👀 重なっているカード",r=>T(r,"shields",t)]]),...E("shields",t),...V("shields",t)}),area:{...E("shields",null)}},deck:{stack:t=>({onContextMenu:n=>O(n,_.value.deck[t].cards[0]),onClick:n=>M(n,[["🫣 めくる",()=>A("deck",t,0,"exploring",!0)],["⚡ 超次元送り",()=>z("deck",t,0,"exdeck",0)],["🤏 ボトムから引く",()=>A("deck",t,-1,"hand",!0)],["♻️ シャッフル",()=>rt("deck",t)],["👀 リスト",r=>T(r,"deck",t,!0)]]),...E("deck",t),...ue("deck",t,!0)}),area:{...E("deck",null)}},graveyard:{stack:t=>({onContextMenu:n=>O(n,_.value.graveyard[t].cards[0]),onClick:n=>T(n,"graveyard",t,!0),...E("graveyard",t),...ue("graveyard",t,!0)}),area:{...E("graveyard",null)}},grdeck:{stack:t=>({onContextMenu:n=>O(n,_.value.grdeck[t].cards[0]),onClick:n=>M(n,[["♻️ シャッフル",()=>rt("grdeck",t)],["👀 リスト",r=>T(r,"grdeck",t,!0)]]),...E("grdeck",t),...ue("grdeck",t,!0)}),area:{...E("grdeck",null)}},exdeck:{stack:t=>({onContextMenu:n=>T(n,"exdeck",t),onClick:n=>T(n,"exdeck",t),...E("exdeck",t),...ue("exdeck",t,!0)}),area:{...E("exdeck",null)}},lands:{stack:t=>({onContextMenu:()=>O(e,_.value.lands[t].cards[0]),onClick:n=>M(n,[["✅ タップ",()=>it("lands",t)],["⚡ 超次元送り",()=>j("lands",t,"exdeck",0)],["👀 重なっているカード",r=>T(r,"lands",t)]]),...E("lands",t),...V("lands",t)}),area:{...E("lands",null)}},hand:{stack:t=>({onContextMenu:n=>O(n,_.value.hand[t].cards[0]),onClick:n=>M(n,[["⚡ 超次元送り",()=>j("hand",t,"exdeck",0)],["👀 重なっているカード",r=>T(r,"hand",t)]]),...E("hand",t),...V("hand",t)}),area:{...E("hand",null)}},exploring:{stack:t=>({onContextMenu:n=>O(n,_.value.exploring[t].cards[0]),onClick:n=>M(n,[["⚡ 超次元送り",()=>j("exploring",t,"exdeck",0)],["👀 重なっているカード",r=>T(r,"hand",t)]]),...E("exploring",t),...V("exploring",t)}),area:{...E("exploring",null)}}},Sn=Object.freeze(Object.defineProperty({__proto__:null,handlers:kn,initialize:bn,rows:yn},Symbol.toStringTag,{value:"Module"})),wn=({area:t,label:n,children:r,width:o,nogrow:i,isTargetted:a,...l})=>{const s={width:o==null?void 0:`calc(var(--dmpg-card-width) * ${o} + var(--dmpg-card-gap) * ${o-1})`,flexGrow:o||i?0:1};return h("div",{class:`dmpg-area ${a?"dmpg-targetted":""}`,style:s,...l,children:[r,h("span",{class:"dmpg-area-label",children:n})]})},Dn=({onClose:t,pos:n,options:r})=>{const o=Zt((i,a)=>{a(i),i.stopPropagation(),t()},[t]);return r&&h("div",{class:"dmpg-menu-container",style:n,children:r.map(i=>h("div",{class:"dmpg-menu-option",onClick:a=>o(a,i[1]),children:i[0]}))})},Rt=({children:t,onClick:n})=>h("div",{class:"dmpg-overlay",onClick:n,children:t}),Nt=({stack:t,isSelected:n,isTargetted:r,...o})=>{const i=(t.tapped?-30:0)+(t.reversed?180:0)+(t.laid?-90:0),a=t.cards.length===0?null:{backgroundImage:`url(${t.cards[0]})`,transform:`rotate(${i}deg)`},l=n?"dmpg-selected":r?"dmpg-targetted":t.cards.length>0&&t.flipped?"dmpg-flipped":"";return h("div",{class:"dmpg-card-container",style:a,...o,children:h("div",{class:`dmpg-card-inner ${l}`,children:t.cards.length>1&&h("div",{class:`dmpg-card-counter ${t.flipped?"dmpg-flipped":""}`,children:t.flipped?t.cards.length:`+${t.cards.length-1}`})})})},En=({cards:t,onClose:n,handlers:r})=>t.length>0&&h(Rt,{onClick:n,children:h("div",{class:"dmpg-list-container",...Lt,children:t.map((o,i)=>h(Nt,{stack:{cards:[o]},...r(i)}))})}),$n=({onClose:t,src:n})=>n&&h(Rt,{onClick:t,children:h("img",{class:"dmpg-lightbox-img",src:n})}),lt=({children:t,...n})=>h("div",{class:"dmpg-button",...n,children:t}),Ut=({rows:t,handlers:n})=>h("div",{class:"dmpg-rows",children:t.map(r=>h("div",{class:"dmpg-row",children:h(Cn,{areas:r,handlers:n})}))}),Cn=({areas:t,handlers:n})=>t.map(r=>{var o,i;return Array.isArray(r)?h(Ut,{rows:r,handlers:n}):(o=_.value[r.area])!=null&&o.length||!r.optional?h(wn,{label:r.label,width:r.width,nogrow:r.optional,isTargetted:at(r.area,null),...n[r.area].area,children:(i=_.value[r.area])==null?void 0:i.map((a,l)=>h(Nt,{stack:a,isSelected:gn(r.area,l),isTargetted:at(r.area,l),...n[r.area].stack(l)}))}):null}),Pn=({rows:t,handlers:n})=>h("div",{class:"dmpg-wrapper",...Lt,children:[h(Dn,{...un()}),h(En,{..._n()}),h($n,{...mn()}),h(Ut,{rows:t,handlers:n}),h("div",{class:"dmpg-footer",children:[h("a",{href:"https://zk-phi.github.io/handanalyze",target:"_blank",children:"→ 確率計算機"})," / ",h("a",{href:"https://x.com/zk_phi",target:"_blank",children:"@zk_phi"})]})]}),Hn=({children:t})=>h("div",{class:"dmpg-floating-buttons",children:t});var ut;(function(t){var n=function(){function o(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(o.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(i){this._dropEffect=i},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(i){this._effectAllowed=i},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),o.prototype.clearData=function(i){i!=null?delete this._data[i]:this._data=null},o.prototype.getData=function(i){return this._data[i]||""},o.prototype.setData=function(i,a){this._data[i]=a},o.prototype.setDragImage=function(i,a,l){var s=r._instance;s._imgCustom=i,s._imgOffset={x:a,y:l}},o}();t.DataTransfer=n;var r=function(){function o(){if(this._lastClick=0,o._instance)throw"DragDropTouch instance already created.";var i=!1;if(document.addEventListener("test",function(){},{get passive(){return i=!0,!0}}),"ontouchstart"in document){var a=document,l=this._touchstart.bind(this),s=this._touchmove.bind(this),c=this._touchend.bind(this),d=i?{passive:!1,capture:!1}:!1;a.addEventListener("touchstart",l,d),a.addEventListener("touchmove",s,d),a.addEventListener("touchend",c),a.addEventListener("touchcancel",c)}}return o.getInstance=function(){return o._instance},o.prototype._touchstart=function(i){var a=this;if(this._shouldHandle(i)){if(Date.now()-this._lastClick<o._DBLCLICK&&this._dispatchEvent(i,"dblclick",i.target)){i.cancelable&&i.preventDefault(),this._reset();return}this._reset();var l=this._closestDraggable(i.target);l&&!this._dispatchEvent(i,"mousemove",i.target)&&!this._dispatchEvent(i,"mousedown",i.target)&&(this._dragSource=l,this._ptDown=this._getPoint(i),this._lastTouch=i,i.cancelable&&i.preventDefault(),setTimeout(function(){a._dragSource==l&&a._img==null&&a._dispatchEvent(i,"contextmenu",l)&&a._reset()},o._CTXMENU),o._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout(function(){a._isDragEnabled=!0,a._touchmove(i)},o._PRESSHOLDAWAIT)))}},o.prototype._touchmove=function(i){if(this._shouldCancelPressHoldMove(i)){this._reset();return}if(this._shouldHandleMove(i)||this._shouldHandlePressHoldMove(i)){var a=this._getTarget(i);if(this._dispatchEvent(i,"mousemove",a)){this._lastTouch=i,i.cancelable&&i.preventDefault();return}this._dragSource&&!this._img&&this._shouldStartDragging(i)&&(this._dispatchEvent(i,"dragstart",this._dragSource),this._createImage(i),this._dispatchEvent(i,"dragenter",a)),this._img&&(this._lastTouch=i,i.cancelable&&i.preventDefault(),a!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(i,"dragenter",a),this._lastTarget=a),this._moveImage(i),this._isDropZone=this._dispatchEvent(i,"dragover",a))}},o.prototype._touchend=function(i){if(this._shouldHandle(i)){if(this._dispatchEvent(this._lastTouch,"mouseup",i.target)){i.cancelable&&i.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",i.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(i.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},o.prototype._shouldHandle=function(i){return i&&!i.defaultPrevented&&i.touches&&i.touches.length<2},o.prototype._shouldHandleMove=function(i){return!o._ISPRESSHOLDMODE&&this._shouldHandle(i)},o.prototype._shouldHandlePressHoldMove=function(i){return o._ISPRESSHOLDMODE&&this._isDragEnabled&&i&&i.touches&&i.touches.length},o.prototype._shouldCancelPressHoldMove=function(i){return o._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(i)>o._PRESSHOLDMARGIN},o.prototype._shouldStartDragging=function(i){var a=this._getDelta(i);return a>o._THRESHOLD||o._ISPRESSHOLDMODE&&a>=o._PRESSHOLDTHRESHOLD},o.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new n,clearInterval(this._pressHoldInterval)},o.prototype._getPoint=function(i,a){return i&&i.touches&&(i=i.touches[0]),{x:a?i.pageX:i.clientX,y:a?i.pageY:i.clientY}},o.prototype._getDelta=function(i){if(o._ISPRESSHOLDMODE&&!this._ptDown)return 0;var a=this._getPoint(i);return Math.abs(a.x-this._ptDown.x)+Math.abs(a.y-this._ptDown.y)},o.prototype._getTarget=function(i){for(var a=this._getPoint(i),l=document.elementFromPoint(a.x,a.y);l&&getComputedStyle(l).pointerEvents=="none";)l=l.parentElement;return l},o.prototype._createImage=function(i){this._img&&this._destroyImage();var a=this._imgCustom||this._dragSource;if(this._img=a.cloneNode(!0),this._copyStyle(a,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var l=a.getBoundingClientRect(),s=this._getPoint(i);this._imgOffset={x:s.x-l.left,y:s.y-l.top},this._img.style.opacity=o._OPACITY.toString()}this._moveImage(i),document.body.appendChild(this._img)},o.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},o.prototype._moveImage=function(i){var a=this;requestAnimationFrame(function(){if(a._img){var l=a._getPoint(i,!0),s=a._img.style;s.position="absolute",s.pointerEvents="none",s.zIndex="999999",s.left=Math.round(l.x-a._imgOffset.x)+"px",s.top=Math.round(l.y-a._imgOffset.y)+"px"}})},o.prototype._copyProps=function(i,a,l){for(var s=0;s<l.length;s++){var c=l[s];i[c]=a[c]}},o.prototype._copyStyle=function(i,a){if(o._rmvAtts.forEach(function(u){a.removeAttribute(u)}),i instanceof HTMLCanvasElement){var l=i,s=a;s.width=l.width,s.height=l.height,s.getContext("2d").drawImage(l,0,0)}for(var c=getComputedStyle(i),d=0;d<c.length;d++){var p=c[d];p.indexOf("transition")<0&&(a.style[p]=c[p])}a.style.pointerEvents="none";for(var d=0;d<i.children.length;d++)this._copyStyle(i.children[d],a.children[d])},o.prototype._dispatchEvent=function(i,a,l){if(i&&l){var s=document.createEvent("Event"),c=i.touches?i.touches[0]:i;return s.initEvent(a,!0,!0),s.button=0,s.which=s.buttons=1,this._copyProps(s,i,o._kbdProps),this._copyProps(s,c,o._ptProps),s.dataTransfer=this._dataTransfer,l.dispatchEvent(s),s.defaultPrevented}return!1},o.prototype._closestDraggable=function(i){for(;i;i=i.parentElement)if(i.hasAttribute("draggable")&&i.draggable)return i;return null},o}();r._instance=new r,r._THRESHOLD=5,r._OPACITY=.5,r._DBLCLICK=500,r._CTXMENU=900,r._ISPRESSHOLDMODE=!1,r._PRESSHOLDAWAIT=400,r._PRESSHOLDMARGIN=25,r._PRESSHOLDTHRESHOLD=0,r._rmvAtts="id,class,style,draggable".split(","),r._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),r._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),t.DragDropTouch=r})(ut||(ut={}));const xn=["/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm23ex3-008.jpg","/dmplayground/dm23ex3-008.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-001.jpg","/dmplayground/dm24sp2-001.jpg","/dmplayground/dm24sp2-001.jpg"],we=()=>{const t=je(xn);Ot({field:[],lands:[],graveyard:[P({cards:[]})],hand:t.splice(0,5).map(n=>P({cards:[n]})),shields:t.splice(0,5).map(n=>P({cards:[n],flipped:!0})),deck:[P({cards:t,flipped:!0})],grdeck:[],exdeck:[],exploring:[]})},Tn=()=>(Vt(()=>we(),[]),h(ee,{children:[h(Hn,{children:[h(lt,{onClick:()=>pn(["field","lands"]),children:"アンタップ"}),h(lt,{onClick:we,children:"リセット"})]}),h(Pn,{initialize:we,...Sn})]})),Ft=document.getElementById("dmplayground");document.body.append(Ft);Gt(h(Tn,{}),Ft);
