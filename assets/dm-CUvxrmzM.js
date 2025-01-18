(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var pe,h,ut,st,R,Be,_t,De,dt,Te,Ee,$e,J={},ct=[],Ft=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Me=Array.isArray;function A(e,t){for(var n in t)e[n]=t[n];return e}function Le(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Wt(e,t,n){var i,r,o,a={};for(o in t)o=="key"?i=t[o]:o=="ref"?r=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?pe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return ue(e,a,i,r,null)}function ue(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ut,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(o),o}function Q(e){return e.children}function V(e,t){this.props=e,this.context=t}function z(e,t){if(t==null)return e.__?z(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?z(e):null}function ft(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ft(e)}}function qe(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!_e.__r++||Be!==h.debounceRendering)&&((Be=h.debounceRendering)||_t)(_e)}function _e(){var e,t,n,i,r,o,a,u;for(R.sort(De);e=R.shift();)e.__d&&(t=R.length,i=void 0,o=(r=(n=e).__v).__e,a=[],u=[],n.__P&&((i=A({},r)).__v=r.__v+1,h.vnode&&h.vnode(i),Oe(n.__P,i,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,a,o??z(r),!!(32&r.__u),u),i.__v=r.__v,i.__.__k[i.__i]=i,gt(a,i,u),i.__e!=o&&ft(i)),R.length>t&&R.sort(De));_e.__r=0}function pt(e,t,n,i,r,o,a,u,d,_,f){var l,y,c,S,P,w,v=i&&i.__k||ct,m=t.length;for(d=zt(n,t,v,d,m),l=0;l<m;l++)(c=n.__k[l])!=null&&(y=c.__i===-1?J:v[c.__i]||J,c.__i=l,w=Oe(e,c,y,r,o,a,u,d,_,f),S=c.__e,c.ref&&y.ref!=c.ref&&(y.ref&&Ie(y.ref,null,c),f.push(c.ref,c.__c||S,c)),P==null&&S!=null&&(P=S),4&c.__u||y.__k===c.__k?d=ht(c,d,e):typeof c.type=="function"&&w!==void 0?d=w:S&&(d=S.nextSibling),c.__u&=-7);return n.__e=P,d}function zt(e,t,n,i,r){var o,a,u,d,_,f=n.length,l=f,y=0;for(e.__k=new Array(r),o=0;o<r;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(d=o+y,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?ue(null,a,null,null,null):Me(a)?ue(Q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?ue(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,u=null,(_=a.__i=Bt(a,n,d,l))!==-1&&(l--,(u=n[_])&&(u.__u|=2)),u==null||u.__v===null?(_==-1&&y--,typeof a.type!="function"&&(a.__u|=4)):_!=d&&(_==d-1?y--:_==d+1?y++:(_>d?y--:y++,a.__u|=4))):e.__k[o]=null;if(l)for(o=0;o<f;o++)(u=n[o])!=null&&!(2&u.__u)&&(u.__e==i&&(i=z(u)),vt(u,u));return i}function ht(e,t,n){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ht(i[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=z(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Bt(e,t,n,i){var r,o,a=e.key,u=e.type,d=t[n];if(d===null||d&&a==d.key&&u===d.type&&!(2&d.__u))return n;if(i>(d!=null&&!(2&d.__u)?1:0))for(r=n-1,o=n+1;r>=0||o<t.length;){if(r>=0){if((d=t[r])&&!(2&d.__u)&&a==d.key&&u===d.type)return r;r--}if(o<t.length){if((d=t[o])&&!(2&d.__u)&&a==d.key&&u===d.type)return o;o++}}return-1}function Xe(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ft.test(t)?n:n+"px"}function ae(e,t,n,i,r){var o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Xe(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Xe(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(dt,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Te,e.addEventListener(t,o?$e:Ee,o)):e.removeEventListener(t,o?$e:Ee,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Te++;else if(t.t<n.u)return;return n(h.event?h.event(t):t)}}}function Oe(e,t,n,i,r,o,a,u,d,_){var f,l,y,c,S,P,w,v,m,X,O,ie,Y,ze,oe,ve,me,x=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),o=[u=t.__e=n.__e]),(f=h.__b)&&f(t);e:if(typeof x=="function")try{if(v=t.props,m="prototype"in x&&x.prototype.render,X=(f=x.contextType)&&i[f.__c],O=f?X?X.props.value:f.__:i,n.__c?w=(l=t.__c=n.__c).__=l.__E:(m?t.__c=l=new x(v,O):(t.__c=l=new V(v,O),l.constructor=x,l.render=Xt),X&&X.sub(l),l.props=v,l.state||(l.state={}),l.context=O,l.__n=i,y=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&x.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=A({},l.__s)),A(l.__s,x.getDerivedStateFromProps(v,l.__s))),c=l.props,S=l.state,l.__v=t,y)m&&x.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&x.getDerivedStateFromProps==null&&v!==c&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,O),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,O)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(G){G&&(G.__=t)}),ie=0;ie<l._sb.length;ie++)l.__h.push(l._sb[ie]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,O),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(c,S,P)})}if(l.context=O,l.props=v,l.__P=e,l.__e=!1,Y=h.__r,ze=0,m){for(l.state=l.__s,l.__d=!1,Y&&Y(t),f=l.render(l.props,l.state,l.context),oe=0;oe<l._sb.length;oe++)l.__h.push(l._sb[oe]);l._sb=[]}else do l.__d=!1,Y&&Y(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ze<25);l.state=l.__s,l.getChildContext!=null&&(i=A(A({},i),l.getChildContext())),m&&!y&&l.getSnapshotBeforeUpdate!=null&&(P=l.getSnapshotBeforeUpdate(c,S)),u=pt(e,Me(ve=f!=null&&f.type===Q&&f.key==null?f.props.children:f)?ve:[ve],t,n,i,r,o,a,u,d,_),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),w&&(l.__E=l.__=null)}catch(G){if(t.__v=null,d||o!=null)if(G.then){for(t.__u|=d?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;o[o.indexOf(u)]=null,t.__e=u}else for(me=o.length;me--;)Le(o[me]);else t.__e=n.__e,t.__k=n.__k;h.__e(G,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=qt(n.__e,t,n,i,r,o,a,d,_);return(f=h.diffed)&&f(t),128&t.__u?void 0:u}function gt(e,t,n){for(var i=0;i<n.length;i++)Ie(n[i],n[++i],n[++i]);h.__c&&h.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){h.__e(o,r.__v)}})}function qt(e,t,n,i,r,o,a,u,d){var _,f,l,y,c,S,P,w=n.props,v=t.props,m=t.type;if(m=="svg"?r="http://www.w3.org/2000/svg":m=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(_=0;_<o.length;_++)if((c=o[_])&&"setAttribute"in c==!!m&&(m?c.localName==m:c.nodeType==3)){e=c,o[_]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(r,m,v.is&&v),u&&(h.__m&&h.__m(t,o),u=!1),o=null}if(m===null)w===v||u&&e.data===v||(e.data=v);else{if(o=o&&pe.call(e.childNodes),w=n.props||J,!u&&o!=null)for(w={},_=0;_<e.attributes.length;_++)w[(c=e.attributes[_]).name]=c.value;for(_ in w)if(c=w[_],_!="children"){if(_=="dangerouslySetInnerHTML")l=c;else if(!(_ in v)){if(_=="value"&&"defaultValue"in v||_=="checked"&&"defaultChecked"in v)continue;ae(e,_,null,c,r)}}for(_ in v)c=v[_],_=="children"?y=c:_=="dangerouslySetInnerHTML"?f=c:_=="value"?S=c:_=="checked"?P=c:u&&typeof c!="function"||w[_]===c||ae(e,_,c,w[_],r);if(f)u||l&&(f.__html===l.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(l&&(e.innerHTML=""),pt(e,Me(y)?y:[y],t,n,i,m=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,a,o?o[0]:n.__k&&z(n,0),u,d),o!=null)for(_=o.length;_--;)Le(o[_]);u||(_="value",m=="progress"&&S==null?e.removeAttribute("value"):S!==void 0&&(S!==e[_]||m=="progress"&&!S||m=="option"&&S!==w[_])&&ae(e,_,S,w[_],r),_="checked",P!==void 0&&P!==e[_]&&ae(e,_,P,w[_],r))}return e}function Ie(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(r){h.__e(r,n)}}function vt(e,t,n){var i,r;if(h.unmount&&h.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Ie(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){h.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&vt(i[r],t,n||typeof e.type!="function");n||Le(e.__e),e.__c=e.__=e.__e=void 0}function Xt(e,t,n){return this.constructor(e,n)}function Yt(e,t,n){var i,r,o,a;t==document&&(t=document.documentElement),h.__&&h.__(e,t),r=(i=!1)?null:t.__k,o=[],a=[],Oe(t,e=t.__k=Wt(Q,null,[e]),r||J,J,t.namespaceURI,r?null:t.firstChild?pe.call(t.childNodes):null,o,r?r.__e:t.firstChild,i,a),gt(o,e,a)}pe=ct.slice,h={__e:function(e,t,n,i){for(var r,o,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),a=r.__d),a)return r.__E=r}catch(u){e=u}throw e}},ut=0,st=function(e){return e!=null&&e.constructor==null},V.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},n),this.props)),e&&A(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),qe(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qe(this))},V.prototype.render=Q,R=[],_t=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,De=function(e,t){return e.__v.__b-t.__v.__b},_e.__r=0,dt=/(PointerCapture)$|Capture$/i,Te=0,Ee=Ye(!1),$e=Ye(!0);var Gt=0;function p(e,t,n,i,r,o){t||(t={});var a,u,d=t;if("ref"in d)for(u in d={},t)u=="ref"?a=t[u]:d[u]=t[u];var _={type:e,props:d,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Gt,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(u in a)d[u]===void 0&&(d[u]=a[u]);return h.vnode&&h.vnode(_),_}var de,$,ye,Ge,Ce=0,mt=[],b=h,Ke=b.__b,Ve=b.__r,Ze=b.diffed,Je=b.__c,Qe=b.unmount,et=b.__;function yt(e,t){b.__h&&b.__h($,e,Ce||t),Ce=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Kt(e,t){var n=yt(de++,3);!b.__s&&bt(n.__H,t)&&(n.__=e,n.i=t,$.__H.__h.push(n))}function Ae(e,t){var n=yt(de++,7);return bt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Vt(e,t){return Ce=8,Ae(function(){return e},t)}function Zt(){for(var e;e=mt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(se),e.__H.__h.forEach(Pe),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){$=null,Ke&&Ke(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),et&&et(e,t)},b.__r=function(e){Ve&&Ve(e),de=0;var t=($=e.__c).__H;t&&(ye===$?(t.__h=[],$.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(se),t.__h.forEach(Pe),t.__h=[],de=0)),ye=$},b.diffed=function(e){Ze&&Ze(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(mt.push(t)!==1&&Ge===b.requestAnimationFrame||((Ge=b.requestAnimationFrame)||Jt)(Zt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),ye=$=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(i){return!i.__||Pe(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],b.__e(i,n.__v)}}),Je&&Je(e,t)},b.unmount=function(e){Qe&&Qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{se(i)}catch(r){t=r}}),n.__H=void 0,t&&b.__e(t,n.__v))};var tt=typeof requestAnimationFrame=="function";function Jt(e){var t,n=function(){clearTimeout(i),tt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);tt&&(t=requestAnimationFrame(n))}function se(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Pe(e){var t=$;e.__c=e.__(),$=t}function bt(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}const je=e=>{const t=[...e];for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t},L=(e,t,n)=>[...e.slice(0,t),n,...e.slice(t+1,e.length)];var Qt=Symbol.for("preact-signals");function he(){if(j>1)j--;else{for(var e,t=!1;Z!==void 0;){var n=Z;for(Z=void 0,He++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&St(n))try{n.c()}catch(r){t||(e=r,t=!0)}n=i}}if(He=0,j--,t)throw e}}function en(e){if(j>0)return e();j++;try{return e()}finally{he()}}var g=void 0,Z=void 0,j=0,He=0,ce=0;function kt(e){if(g!==void 0){var t=e.n;if(t===void 0||t.t!==g)return t={i:0,S:e,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:t},g.s!==void 0&&(g.s.n=t),g.s=t,e.n=t,32&g.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=g.s,t.n=void 0,g.s.n=t,g.s=t),t}}function E(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}E.prototype.brand=Qt;E.prototype.h=function(){return!0};E.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};E.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};E.prototype.subscribe=function(e){var t=this;return te(function(){var n=t.value,i=g;g=void 0;try{e(n)}finally{g=i}})};E.prototype.valueOf=function(){return this.value};E.prototype.toString=function(){return this.value+""};E.prototype.toJSON=function(){return this.value};E.prototype.peek=function(){var e=g;g=void 0;try{return this.value}finally{g=e}};Object.defineProperty(E.prototype,"value",{get:function(){var e=kt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(He>100)throw new Error("Cycle detected");this.v=e,this.i++,ce++,j++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{he()}}}});function N(e){return new E(e)}function St(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function wt(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Dt(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function B(e){E.call(this,void 0),this.x=e,this.s=void 0,this.g=ce-1,this.f=4}(B.prototype=new E).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ce))return!0;if(this.g=ce,this.f|=1,this.i>0&&!St(this))return this.f&=-2,!0;var e=g;try{wt(this),g=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return g=e,Dt(this),this.f&=-2,!0};B.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}E.prototype.S.call(this,e)};B.prototype.U=function(e){if(this.t!==void 0&&(E.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};B.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(B.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=kt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function nt(e){return new B(e)}function Et(e){var t=e.u;if(e.u=void 0,typeof t=="function"){j++;var n=g;g=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Re(e),i}finally{g=n,he()}}}function Re(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Et(e)}function tn(e){if(g!==this)throw new Error("Out-of-order effect");Dt(this),g=e,this.f&=-2,8&this.f&&Re(this),he()}function ee(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}ee.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Et(this),wt(this),j++;var e=g;return g=this,tn.bind(this,e)};ee.prototype.N=function(){2&this.f||(this.f|=2,this.o=Z,Z=this)};ee.prototype.d=function(){this.f|=8,1&this.f||Re(this)};function te(e){var t=new ee(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var $t,be,Ct=[];te(function(){$t=this.N})();function q(e,t){h[e]=t.bind(null,h[e]||function(){})}function fe(e){be&&be(),be=e&&e.S()}function Pt(e){var t=this,n=e.data,i=rn(n);i.value=n;var r=Ae(function(){for(var u=t,d=t.__v;d=d.__;)if(d.__c){d.__c.__$f|=4;break}var _=nt(function(){var c=i.value.value;return c===0?0:c===!0?"":c||""}),f=nt(function(){return!st(_.value)}),l=te(function(){if(this.N=Ht,f.value){var c=_.value;u.base&&u.base.nodeType===3&&(u.base.data=c)}}),y=t.__$u.d;return t.__$u.d=function(){l(),y.call(this)},[f,_]},[]),o=r[0],a=r[1];return o.value?a.peek():a.value}Pt.displayName="_st";Object.defineProperties(E.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Pt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});q("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var r in i)if(r!=="children"){var o=i[r];o instanceof E&&(n||(t.__np=n={}),n[r]=o,i[r]=o.peek())}}e(t)});q("__r",function(e,t){fe();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(r){var o;return te(function(){o=this}),o.c=function(){i.__$f|=1,i.setState({})},o}())),fe(n),e(t)});q("__e",function(e,t,n,i){fe(),e(t,n,i)});q("diffed",function(e,t){fe();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,r=t.props;if(i){var o=n.U;if(o)for(var a in o){var u=o[a];u!==void 0&&!(a in i)&&(u.d(),o[a]=void 0)}else o={},n.U=o;for(var d in i){var _=o[d],f=i[d];_===void 0?(_=nn(n,d,f,r),o[d]=_):_.o(f,r)}}}e(t)});function nn(e,t,n,i){var r=t in e&&e.ownerSVGElement===void 0,o=N(n);return{o:function(a,u){o.value=a,i=u},d:te(function(){this.N=Ht;var a=o.value.value;i[t]!==a&&(i[t]=a,r?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}q("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var r in i){var o=i[r];o&&o.d()}}}}else{var a=t.__c;if(a){var u=a.__$u;u&&(a.__$u=void 0,u.d())}}e(t)});q("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});V.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u,i=n&&n.s!==void 0;for(var r in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var o=2&this.__$f;if(!(i||o||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var a in e)if(a!=="__source"&&e[a]!==this.props[a])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function rn(e){return Ae(function(){return N(e)},[])}var on=function(e){queueMicrotask(function(){queueMicrotask(e)})};function an(){en(function(){for(var e;e=Ct.shift();)$t.call(e)})}function Ht(){Ct.push(this)===1&&(h.requestAnimationFrame||on)(an)}const xt=[],Tt=[],Mt={onDragEnd:e=>{xt.forEach(t=>t(e)),e.stopPropagation()},onClick:e=>{Tt.forEach(t=>t(e)),e.stopPropagation()}},Ne=N(null),T=(e,t)=>{const n=e.clientY/window.innerHeight,i=e.clientX/window.innerWidth;Ne.value={options:t,pos:{top:n<.5?e.clientY-16:null,left:i<.5?e.clientX+12:null,bottom:n>=.5?window.innerHeight-(e.clientY+16):null,right:i>=.5?window.innerWidth-(e.clientX-12):null}},e.preventDefault(),e.stopPropagation()},ne=()=>{Ne.value=null},ln=()=>({onClose:ne,...Ne.value});Tt.push(ne);const F=N(null),un=(e,t,n,i)=>{F.value={area:t,ix:n,handlers:i},e.preventDefault(),e.stopPropagation(),ne()},re=()=>{F.value=null},sn=()=>{var e;return{onClose:re,cards:F.value?s.value[F.value.area][F.value.ix].cards:[],handlers:(e=F.value)==null?void 0:e.handlers}},C=({cards:e,flipped:t=!1,reversed:n=!1,tapped:i=!1,laid:r=!1})=>({cards:e,flipped:t,reversed:n,tapped:i,laid:r}),s=N({}),Lt=e=>{re(),s.value=e},rt=(e,t)=>{const n=je(s.value[e][t].cards);s.value={...s.value,[e]:[{...s.value[e][t],cards:n}]}},Ue=(e,t)=>{const n=s.value[e][t];return s.value={...s.value,[e]:s.value[e].filter((i,r)=>r!==t)},n},Ot=(e,t,n,i)=>{if(re(),!s.value[n][i])ge(e,t,n,{},!0);else{const r=Ue(e,t);e===n&&i>t&&i--,s.value={...s.value,[n]:L(s.value[n],i,{...s.value[n][i],cards:[...s.value[n][i].cards,...r.cards]})}}},I=(e,t,n,i)=>{if(re(),!s.value[n][i])ge(e,t,n,{},!0);else{const r=Ue(e,t);e===n&&i>t&&i--,s.value={...s.value,[n]:L(s.value[n],i,{...s.value[n][i],cards:[...r.cards,...s.value[n][i].cards]})}}},ge=(e,t,n,i={},r=!1)=>{re();const o=Ue(e,t).cards;s.value={...s.value,[n]:[...s.value[n],...r?[C({cards:o,...i})]:o.map(a=>C({cards:[a],...i}))]}},it=(e,t)=>{s.value={...s.value,[e]:L(s.value[e],t,{...s.value[e][t],tapped:!s.value[e][t].tapped})}},ke=(e,t)=>{s.value={...s.value,[e]:L(s.value[e],t,{...s.value[e][t],flipped:!s.value[e][t].flipped})}},_n=(e,t)=>{s.value={...s.value,[e]:L(s.value[e],t,{...s.value[e][t],reversed:!s.value[e][t].reversed})}},dn=(e,t)=>{s.value={...s.value,[e]:L(s.value[e],t,{...s.value[e][t],laid:!s.value[e][t].laid})}},cn=e=>{const t=Object.fromEntries(e.map(n=>[n,s.value[n].map(i=>({...i,tapped:!1}))]));s.value={...s.value,...t}},Fe=(e,t,n)=>{n<0&&(n+=s.value[e][t].cards.length);const i=s.value[e][t].cards[n];return s.value={...s.value,[e]:L(s.value[e],t,{...s.value[e][t],cards:s.value[e][t].cards.filter((r,o)=>o!==n)})},i},M=(e,t,n,i,r=!1,o={})=>{if(s.value[e][t].cards.length<=1&&!r)ge(e,t,i,o);else{const a=Fe(e,t,n);s.value={...s.value,[i]:[...s.value[i],C({cards:[a],...o})]}}},W=(e,t,n,i,r,o=!1)=>{if(s.value[e][t].cards.length<=1&&!o)I(e,t,i,r);else if(!s.value[i][r])M(e,t,n,i);else{const a=Fe(e,t,n);s.value={...s.value,[i]:L(s.value[i],r,{...s.value[i][r],cards:[a,...s.value[i][r].cards]})}}},xe=(e,t,n,i,r,o=!1)=>{if(s.value[e][t].cards.length<=1&&!o)Ot(e,t,i,r);else if(!s.value[i][r])M(e,t,n,i);else{const a=Fe(e,t,n);s.value={...s.value,[i]:L(s.value[i],r,{...s.value[i][r],cards:[...s.value[i][r].cards,a]})}}},k=N(null),fn=(e,t,n)=>{k.value={handler:n,src:{area:e,ix:t},dest:null}},It=()=>{k.value=null},D=(e,t)=>({onDragEnter:n=>{k.value&&(k.value={...k.value,dest:{area:e,ix:t}},n.stopPropagation())},onDragLeave:n=>{if(!k.value)return;const{dest:i}=k.value;i.area===e&&i.ix===t&&(k.value={...k.value,dest:null}),n.stopPropagation()},onDragOver:n=>{k.value&&n.preventDefault()},onDrop:n=>{if(!k.value)return;const{dest:i,src:r}=k.value;(r.area!==i.area||r.ix!==i.ix)&&k.value.handler(n,i.area,i.ix),It(),n.stopPropagation()}}),At=(e,t,n)=>({draggable:!0,onDragStart:i=>{ne(),fn(e,t,n)}}),pn=(e,t)=>{var n;return((n=k.value)==null?void 0:n.src)&&k.value.src.area===e&&k.value.src.ix===t},ot=(e,t)=>{var n;return((n=k.value)==null?void 0:n.dest)&&k.value.dest.area===e&&k.value.dest.ix===t};xt.push(It);const We=N(null),U=(e,t)=>{We.value=t,e.preventDefault(),e.stopPropagation(),ne()},hn=()=>{We.value=null},gn=()=>({onClose:hn,src:We.value}),vn=[[{area:"field",label:"場"}],[{area:"shields",label:"シールド"},{area:"exploring",label:"めくられた",optional:!0},{area:"deck",label:"デッキ",width:1},{area:"graveyard",label:"墓地",width:1},{area:"grdeck",label:"GR",width:1,optional:!0},{area:"exdeck",label:"超次元",width:1,optional:!0}],[{area:"lands",label:"マナ"}],[{area:"hand",label:"手札"}]],Se=e=>{var n,i;const t=(i=(n=document.getElementsByClassName(e))==null?void 0:n[0])==null?void 0:i.children;return Array.from(t??[]).map(r=>{var o,a;return((a=(o=r==null?void 0:r.children)==null?void 0:o[0])==null?void 0:a.src)??""})},mn=()=>{const e=je(Se("MainCards")),t=Se("GRCardsList"),n=Se("HyperspatialCardsList");Lt({field:[],lands:[],graveyard:[C({cards:[]})],hand:e.splice(0,5).map(i=>C({cards:[i]})),shields:e.splice(0,5).map(i=>C({cards:[i],flipped:!0})),deck:[C({cards:e,flipped:!0})],grdeck:t.length?[C({cards:t,flipped:!0})]:[],exdeck:n.length?[C({cards:n})]:[],exploring:[]})},K=(e,t)=>At(e,t,(n,i,r)=>{i==="graveyard"||i==="exdeck"?I(e,t,i,r??0):i==="deck"||i==="grdeck"||r!=null?T(n,[["🫳 上に置く",()=>I(e,t,i,r??0)],["🫴 下に入れる",()=>Ot(e,t,i,r??0)]]):ge(e,t,i,{reversed:i==="lands"})}),le=(e,t,n)=>At(e,t,(i,r,o)=>{r==="graveyard"||r==="exdeck"?W(e,t,0,r,o??0,n):r==="deck"||r==="grdeck"||o!=null?T(i,[["🫳 上に置く",()=>W(e,t,0,r,o??0,n)],["🫴 下に入れる",()=>xe(e,t,0,r,o??0,n)]]):M(e,t,0,r,n,{reversed:r==="lands"})}),H=(e,t,n,i=!1)=>{un(e,t,n,r=>({onClick:()=>U(e,s.value[t][n].cards[r]),onContextMenu:o=>T(o,[["⚔️ 場に出す",()=>M(t,n,r,"field",i)],["🛡️ シールドに追加",()=>M(t,n,r,"shields",i)],["🫳 デッキの上に置く",()=>W(t,n,r,"deck",0,i)],["🫴 デッキの下に入れる",()=>xe(t,n,r,"deck",0,i)],["🪦 墓地に送る",()=>W(t,n,r,"graveyard",0,i)],["🎰 GRゾーンに置く",()=>xe(t,n,r,"grdeck",0,i)],["⚡ 超次元ゾーンに置く",()=>W(t,n,r,"exdeck",0,i)],["⛰️ マナに追加",()=>M(t,n,r,"lands",i,{reversed:!0})],["🃏 手札に加える",()=>M(t,n,r,"hand",i)]])}))},yn={field:{stack:e=>({onClick:t=>U(t,s.value.field[e].cards[0]),onContextMenu:t=>T(t,[["✅ タップ",()=>it("field",e)],["⚡ 超次元ゾーン送り",()=>I("field",e,"exdeck",0)],["⬅️ 横向きにする",()=>dn("field",e)],["↕️ 上下反転する",()=>_n("field",e)],["🔄 裏返す",()=>ke("field",e)],["👀 重なっているカード",n=>H(n,"field",e)]]),...D("field",e),...K("field",e)}),area:{...D("field",null)}},shields:{stack:e=>({onClick:t=>{s.value.shields[e].flipped?ke("shields",e):U(t,s.value.shields[e].cards[0])},onContextMenu:t=>T(t,[["⚡ 超次元ゾーン送り",()=>I("shields",e,"exdeck",0)],["🔄 裏返す",()=>ke("shields",e)],["👀 重なっているカード",n=>H(n,"shields",e)]]),...D("shields",e),...K("shields",e)}),area:{...D("shields",null)}},deck:{stack:e=>({onClick:t=>M("deck",e,0,"exploring",!0),onContextMenu:t=>T(t,[["⚡ 超次元送り",()=>W("deck",e,0,"exdeck",0)],["🤏 ボトムから引く",()=>M("deck",e,-1,"hand",!0)],["♻️ シャッフル",()=>rt("deck",e)],["👀 リスト",n=>H(n,"deck",e,!0)]]),...D("deck",e),...le("deck",e,!0)}),area:{...D("deck",null)}},graveyard:{stack:e=>({onClick:t=>H(t,"graveyard",e,!0),onContextMenu:t=>H(t,"graveyard",e,!0),...D("graveyard",e),...le("graveyard",e,!0)}),area:{...D("graveyard",null)}},grdeck:{stack:e=>({onClick:t=>M("grdeck",e,0,"exploring",!0),onContextMenu:t=>T(t,[["♻️ シャッフル",()=>rt("grdeck",e)],["👀 リスト",n=>H(n,"grdeck",e,!0)]]),...D("grdeck",e),...le("grdeck",e,!0)}),area:{...D("grdeck",null)}},exdeck:{stack:e=>({onClick:t=>H(t,"exdeck",e),onContextMenu:t=>H(t,"exdeck",e),...D("exdeck",e),...le("exdeck",e,!0)}),area:{...D("exdeck",null)}},lands:{stack:e=>({onClick:()=>it("lands",e),onContextMenu:t=>T(t,[["🔍 拡大",()=>U(t,s.value.lands[e].cards[0])],["⚡ 超次元送り",()=>I("lands",e,"exdeck",0)],["👀 重なっているカード",n=>H(n,"lands",e)]]),...D("lands",e),...K("lands",e)}),area:{...D("lands",null)}},hand:{stack:e=>({onClick:t=>U(t,s.value.hand[e].cards[0]),onContextMenu:t=>T(t,[["⚡ 超次元送り",()=>I("hand",e,"exdeck",0)],["👀 重なっているカード",n=>H(n,"hand",e)]]),...D("hand",e),...K("hand",e)}),area:{...D("hand",null)}},exploring:{stack:e=>({onClick:t=>U(t,s.value.exploring[e].cards[0]),onContextMenu:t=>T(t,[["⚡ 超次元送り",()=>I("exploring",e,"exdeck",0)],["👀 重なっているカード",n=>H(n,"hand",e)]]),...D("exploring",e),...K("exploring",e)}),area:{...D("exploring",null)}}},bn=Object.freeze(Object.defineProperty({__proto__:null,handlers:yn,initialize:mn,rows:vn},Symbol.toStringTag,{value:"Module"})),kn=({area:e,label:t,children:n,width:i,nogrow:r,isTargetted:o,...a})=>{const u={width:i==null?void 0:`calc(var(--dmpg-card-width) * ${i} + var(--dmpg-card-gap) * ${i-1})`,flexGrow:i||r?0:1};return p("div",{class:`dmpg-area ${o?"dmpg-targetted":""}`,style:u,...a,children:[n,p("span",{class:"dmpg-area-label",children:t})]})},Sn=({onClose:e,pos:t,options:n})=>{const i=Vt((r,o)=>{o(r),r.stopPropagation(),e()},[e]);return n&&p("div",{class:"dmpg-menu-container",style:t,children:n.map(r=>p("div",{class:"dmpg-menu-option",onClick:o=>i(o,r[1]),children:r[0]}))})},jt=({children:e,onClick:t})=>p("div",{class:"dmpg-overlay",onClick:t,children:e}),Rt=({stack:e,isSelected:t,isTargetted:n,...i})=>{const r=(e.tapped?-30:0)+(e.reversed?180:0)+(e.laid?-90:0),o=e.cards.length===0?null:{backgroundImage:`url(${e.cards[0]})`,transform:`rotate(${r}deg)`},a=t?"dmpg-selected":n?"dmpg-targetted":e.cards.length>0&&e.flipped?"dmpg-flipped":"";return p("div",{class:"dmpg-card-container",style:o,...i,children:p("div",{class:`dmpg-card-inner ${a}`,children:e.cards.length>1&&p("div",{class:`dmpg-card-counter ${e.flipped?"dmpg-flipped":""}`,children:e.flipped?e.cards.length:`+${e.cards.length-1}`})})})},wn=({cards:e,onClose:t,handlers:n})=>e.length>0&&p(jt,{onClick:t,children:p("div",{class:"dmpg-list-container",...Mt,children:e.map((i,r)=>p(Rt,{stack:{cards:[i]},...n(r)}))})}),Dn=({onClose:e,src:t})=>t&&p(jt,{onClick:e,children:p("img",{class:"dmpg-lightbox-img",src:t})}),at=({children:e,...t})=>p("div",{class:"dmpg-button",...t,children:e}),Nt=({rows:e,handlers:t})=>p("div",{class:"dmpg-rows",children:e.map(n=>p("div",{class:"dmpg-row",children:p(En,{areas:n,handlers:t})}))}),En=({areas:e,handlers:t})=>e.map(n=>{var i,r;return Array.isArray(n)?p(Nt,{rows:n,handlers:t}):(i=s.value[n.area])!=null&&i.length||!n.optional?p(kn,{label:n.label,width:n.width,nogrow:n.optional,isTargetted:ot(n.area,null),...t[n.area].area,children:(r=s.value[n.area])==null?void 0:r.map((o,a)=>p(Rt,{stack:o,isSelected:pn(n.area,a),isTargetted:ot(n.area,a),...t[n.area].stack(a)}))}):null}),$n=({rows:e,handlers:t})=>p("div",{class:"dmpg-wrapper",...Mt,children:[p(Sn,{...ln()}),p(wn,{...sn()}),p(Dn,{...gn()}),p(Nt,{rows:e,handlers:t}),p("div",{class:"dmpg-footer",children:[p("a",{href:"https://zk-phi.github.io/handanalyze",target:"_blank",children:"→ 確率計算機"})," / ",p("a",{href:"https://x.com/zk_phi",target:"_blank",children:"@zk_phi"})]})]}),Cn=({children:e})=>p("div",{class:"dmpg-floating-buttons",children:e});var lt;(function(e){var t=function(){function i(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(i.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(r){this._dropEffect=r},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(r){this._effectAllowed=r},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),i.prototype.clearData=function(r){r!=null?delete this._data[r]:this._data=null},i.prototype.getData=function(r){return this._data[r]||""},i.prototype.setData=function(r,o){this._data[r]=o},i.prototype.setDragImage=function(r,o,a){var u=n._instance;u._imgCustom=r,u._imgOffset={x:o,y:a}},i}();e.DataTransfer=t;var n=function(){function i(){if(this._lastClick=0,i._instance)throw"DragDropTouch instance already created.";var r=!1;if(document.addEventListener("test",function(){},{get passive(){return r=!0,!0}}),"ontouchstart"in document){var o=document,a=this._touchstart.bind(this),u=this._touchmove.bind(this),d=this._touchend.bind(this),_=r?{passive:!1,capture:!1}:!1;o.addEventListener("touchstart",a,_),o.addEventListener("touchmove",u,_),o.addEventListener("touchend",d),o.addEventListener("touchcancel",d)}}return i.getInstance=function(){return i._instance},i.prototype._touchstart=function(r){var o=this;if(this._shouldHandle(r)){if(Date.now()-this._lastClick<i._DBLCLICK&&this._dispatchEvent(r,"dblclick",r.target)){r.cancelable&&r.preventDefault(),this._reset();return}this._reset();var a=this._closestDraggable(r.target);a&&!this._dispatchEvent(r,"mousemove",r.target)&&!this._dispatchEvent(r,"mousedown",r.target)&&(this._dragSource=a,this._ptDown=this._getPoint(r),this._lastTouch=r,r.cancelable&&r.preventDefault(),setTimeout(function(){o._dragSource==a&&o._img==null&&o._dispatchEvent(r,"contextmenu",a)&&o._reset()},i._CTXMENU),i._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout(function(){o._isDragEnabled=!0,o._touchmove(r)},i._PRESSHOLDAWAIT)))}},i.prototype._touchmove=function(r){if(this._shouldCancelPressHoldMove(r)){this._reset();return}if(this._shouldHandleMove(r)||this._shouldHandlePressHoldMove(r)){var o=this._getTarget(r);if(this._dispatchEvent(r,"mousemove",o)){this._lastTouch=r,r.cancelable&&r.preventDefault();return}this._dragSource&&!this._img&&this._shouldStartDragging(r)&&(this._dispatchEvent(r,"dragstart",this._dragSource),this._createImage(r),this._dispatchEvent(r,"dragenter",o)),this._img&&(this._lastTouch=r,r.cancelable&&r.preventDefault(),o!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(r,"dragenter",o),this._lastTarget=o),this._moveImage(r),this._isDropZone=this._dispatchEvent(r,"dragover",o))}},i.prototype._touchend=function(r){if(this._shouldHandle(r)){if(this._dispatchEvent(this._lastTouch,"mouseup",r.target)){r.cancelable&&r.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",r.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(r.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},i.prototype._shouldHandle=function(r){return r&&!r.defaultPrevented&&r.touches&&r.touches.length<2},i.prototype._shouldHandleMove=function(r){return!i._ISPRESSHOLDMODE&&this._shouldHandle(r)},i.prototype._shouldHandlePressHoldMove=function(r){return i._ISPRESSHOLDMODE&&this._isDragEnabled&&r&&r.touches&&r.touches.length},i.prototype._shouldCancelPressHoldMove=function(r){return i._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(r)>i._PRESSHOLDMARGIN},i.prototype._shouldStartDragging=function(r){var o=this._getDelta(r);return o>i._THRESHOLD||i._ISPRESSHOLDMODE&&o>=i._PRESSHOLDTHRESHOLD},i.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new t,clearInterval(this._pressHoldInterval)},i.prototype._getPoint=function(r,o){return r&&r.touches&&(r=r.touches[0]),{x:o?r.pageX:r.clientX,y:o?r.pageY:r.clientY}},i.prototype._getDelta=function(r){if(i._ISPRESSHOLDMODE&&!this._ptDown)return 0;var o=this._getPoint(r);return Math.abs(o.x-this._ptDown.x)+Math.abs(o.y-this._ptDown.y)},i.prototype._getTarget=function(r){for(var o=this._getPoint(r),a=document.elementFromPoint(o.x,o.y);a&&getComputedStyle(a).pointerEvents=="none";)a=a.parentElement;return a},i.prototype._createImage=function(r){this._img&&this._destroyImage();var o=this._imgCustom||this._dragSource;if(this._img=o.cloneNode(!0),this._copyStyle(o,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var a=o.getBoundingClientRect(),u=this._getPoint(r);this._imgOffset={x:u.x-a.left,y:u.y-a.top},this._img.style.opacity=i._OPACITY.toString()}this._moveImage(r),document.body.appendChild(this._img)},i.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},i.prototype._moveImage=function(r){var o=this;requestAnimationFrame(function(){if(o._img){var a=o._getPoint(r,!0),u=o._img.style;u.position="absolute",u.pointerEvents="none",u.zIndex="999999",u.left=Math.round(a.x-o._imgOffset.x)+"px",u.top=Math.round(a.y-o._imgOffset.y)+"px"}})},i.prototype._copyProps=function(r,o,a){for(var u=0;u<a.length;u++){var d=a[u];r[d]=o[d]}},i.prototype._copyStyle=function(r,o){if(i._rmvAtts.forEach(function(l){o.removeAttribute(l)}),r instanceof HTMLCanvasElement){var a=r,u=o;u.width=a.width,u.height=a.height,u.getContext("2d").drawImage(a,0,0)}for(var d=getComputedStyle(r),_=0;_<d.length;_++){var f=d[_];f.indexOf("transition")<0&&(o.style[f]=d[f])}o.style.pointerEvents="none";for(var _=0;_<r.children.length;_++)this._copyStyle(r.children[_],o.children[_])},i.prototype._dispatchEvent=function(r,o,a){if(r&&a){var u=document.createEvent("Event"),d=r.touches?r.touches[0]:r;return u.initEvent(o,!0,!0),u.button=0,u.which=u.buttons=1,this._copyProps(u,r,i._kbdProps),this._copyProps(u,d,i._ptProps),u.dataTransfer=this._dataTransfer,a.dispatchEvent(u),u.defaultPrevented}return!1},i.prototype._closestDraggable=function(r){for(;r;r=r.parentElement)if(r.hasAttribute("draggable")&&r.draggable)return r;return null},i}();n._instance=new n,n._THRESHOLD=5,n._OPACITY=.5,n._DBLCLICK=500,n._CTXMENU=900,n._ISPRESSHOLDMODE=!1,n._PRESSHOLDAWAIT=400,n._PRESSHOLDMARGIN=25,n._PRESSHOLDTHRESHOLD=0,n._rmvAtts="id,class,style,draggable".split(","),n._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),n._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),e.DragDropTouch=n})(lt||(lt={}));const Pn=["/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm24sp2-013.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm23bd5-060.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm24sp2-010.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-030.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm23ex3-029.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm24sp2-009.jpg","/dmplayground/dm23ex3-008.jpg","/dmplayground/dm23ex3-008.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm24sp2-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm23ex3-002.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-003.jpg","/dmplayground/dm24sp2-001.jpg","/dmplayground/dm24sp2-001.jpg","/dmplayground/dm24sp2-001.jpg"],we=()=>{const e=je(Pn);Lt({field:[],lands:[],graveyard:[C({cards:[]})],hand:e.splice(0,5).map(t=>C({cards:[t]})),shields:e.splice(0,5).map(t=>C({cards:[t],flipped:!0})),deck:[C({cards:e,flipped:!0})],grdeck:[],exdeck:[],exploring:[]})},Hn=()=>(Kt(()=>we(),[]),p(Q,{children:[p(Cn,{children:[p(at,{onClick:()=>cn(["field","lands"]),children:"アンタップ"}),p(at,{onClick:we,children:"リセット"})]}),p($n,{initialize:we,...bn})]})),Ut=document.getElementById("dmplayground");document.body.append(Ut);Yt(p(Hn,{}),Ut);
