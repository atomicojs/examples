function t(t,e,n){var r=arguments;if(e=e||{},arguments.length>3){n=[n];for(var o=3;o<arguments.length;o++)n.push(r[o])}null!=n&&(e.children=n);var a={type:t,props:e},i=e.key;return null!=i&&(a.key=""+i),a}function e(e){return null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e?t(null,null,""+e):e}var n=[],r={},o={},a="@ctx.",i="@state",c="@type",u="host",s=97,l=116,p=79,d=77,f=73,h=67,v={children:1},y={innerHTML:1,textContent:1,contenteditable:1},m={};function g(t,e){var n=t.length;if(n!==e.length)return!1;for(var r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function b(t,e){var n=arguments;for(var r in e)t[r]=e[r];for(var o=2;o<arguments.length;o++)b(t,n[o]);return t}var w,x,k=Promise.prototype.then.bind(Promise.resolve());function E(t,e,n,o,a,i){if(("checked"==e||"value"==e)&&e in t&&(n=t[e]),o!=n)if("o"!=e[0]||"n"!=e[1]||"function"!=typeof o&&"function"!=typeof n)switch(e){case"ref":o&&(o.current=t);break;case"style":!function(t,e,n){var r=e,o=n;if("object"==typeof o)for(var a in o="",n)n[a]&&(m[a]||(m[a]=a.replace(/([A-Z])/g,"-$1").toLowerCase()),o+=m[a]+":"+n[a]+";");r!=o&&(t.style.cssText=o)}(t,n||t.style.cssText,o);break;case"shadowDom":return void("attachShadow"in t&&(t.shadowRoot&&!o||!t.shadowRoot&&o)&&t.attachShadow({mode:o?"open":"closed"}));case"key":e="data-key",null==o?delete t.dataset.key:t.dataset.key=o;break;case"class":case"className":e=a?"class":"className";default:"list"!=e&&!a&&e in t?t[e]=null==o?"":o:null==o?t.removeAttribute(e):t.setAttribute(e,o)}else!function(t,e,n,o){r[e]||(r[e]=e.slice(2).toLocaleLowerCase()),e=r[e],o.handleEvent||(o.handleEvent=C),n?(o[e]||t.addEventListener(e,o),o[e]=n):o[e]&&(t.removeEventListener(e,o),delete o[e])}(t,e,o,i)}function C(t){return this[t.type](t)}function L(){if(!w)throw new Error("the hooks can only be called from an existing functional component in the diff queue");return w}function D(t,e){var n,r,o=L().component,a=x++;return o.hooks[a]||(r=!0,o.hooks[a]={state:e}),(n=o.hooks[a]).reducer=t,r&&N(n,{type:s}),[n.state,function(t){return N(n,t)}]}function N(t,e){t.reducer&&(t.state=t.reducer(t.state,e))}function T(t,e){for(var n=t.length,r=0;r<n;r++){var o=t[r],a=o.hooks,i=a.length;e.type===h&&(o.remove=!0);for(var c=0;c<i;c++)N(a[c],e)}}function H(t,e,n,r){var o=(e[t]||{}).updateComponent,a=e.childNodes,i=a.length;o&&o!=r&&o(n?f:h);for(var c=0;c<i;c++)H(t,a[c])}function R(t,e){var n,r=document;return(n=null!=t?e?r.createElementNS("http://www.w3.org/2000/svg",t):r.createElement(t):r.createTextNode(""))[c]=t,n}function S(t,r,o,a,i){if(void 0===i&&(i=0),o=o||[],a=a||[],Array.isArray(t))for(var c=t.length,u=0;u<c;u++)S(t[u],r,o,a,i+1);else{if(null==t&&!i)return n;var s=r?r(t,a.length):e(t);r||"object"==typeof s&&null!=s.key&&-1==o.indexOf(s.key)&&(o.push(s.key),o.withKeyes=!0),a.push(s)}return a}function j(n,r,a){a=a||i,n=e(n),a==i&&n.type!=u&&(n=t(u,{},n)),function t(n,r,o,a,i,s){var m=r&&r[n]||{},g=m.vnode,C=m.updateComponent,L=m.handlers;if(void 0===L&&(L={}),g==o)return r;g=g||{props:{}};var D=o.type,N=o.props,j=N.shadowDom,P=N.children,A="function"==typeof D;if(i=i||"svg"==D,A&&!C&&(C=function(n,r){var o,a=[];return function i(c,u,s,v){switch(c){case l:return o=u,function c(u,s,f){if(o){if("function"!=typeof(u=e(u)).type)return T(a.splice(f),{type:h}),o=t(n,o,u,s,r,i),void(a.length&&(o[n].updateComponent=i));var v,y,m=a[f]||{};m.type!=u.type&&(T(a.splice(f),{type:h}),a[f]=b({hooks:[]},u),v=!0,y=!0);var g=u.props,E=(m=a[f]).props;if(!y){var C=Object.keys(E).length,L=0;for(var D in g)if(L++,g[D]!=E[D]){y=!0;break}y=y||C!=L}y=m.context!=s||y,m.props=g,m.context=s,y&&!m.prevent&&function t(){if(m.remove)return o;var e=w={component:m,context:s,next:function(){m.prevent||(m.prevent=!0,k(function(){m.prevent=!1,t()}))}};x=0,T([m],{type:l});var n=m.type(m.props);w=!1,x=0,c(n,e.context,f+1),T([m],{type:v?p:d}),v=!1}()}}(s,v,0),o;case f:T([].concat(a).reverse(),{type:c});break;case h:o=!1,T(a.reverse(),{type:c}),a=[]}}}(n,i)),!A&&D!=u&&function(t){if(t){if(!t[c]){var e=t.nodeName.toLowerCase();t[c]="#text"==e?null:e}return t[c]}}(r)!==D){var M=R(D,i),O=r&&r.parentNode;O&&(H(n,r,!0,s),O.replaceChild(M,r)),r=M,L={}}return C&&s!=C?C(l,r,o,a):(null==D?r.nodeValue!=P&&(r.nodeValue=P):function(t,e,n,r,o){for(var a in e=e||{})v[a]||a in n||E(t,a,e[a],null,r,o);var i;for(var c in n)v[c]||(E(t,c,e[c],n[c],r,o),i=i||y[c]);return i}(r,g.props,o.props,i,L)||g.props.children==P||function(e,n,r,o,a){for(var i=[],c=S(P,!1,i),u=c.length,s=n.childNodes,l={},p=s.length,d=i.withKeyes,f=d?0:p>u?u:p;f<p;f++){var h=s[f],v=f;d&&i.indexOf(v=h.dataset.key)>-1?l[v]=h:(H(e,h),f--,p--,n.removeChild(h))}for(var y=0;y<u;y++){var m=c[y],g=s[y],b=s[y+1],w=d?l[d?m.key:y]:g;d&&w!=g&&n.insertBefore(w,g);var x=t(e,w||"function"!=typeof m.type?w:R(null),m,o,a);w||(b?n.insertBefore(x,b):n.appendChild(x))}}(n,j&&r.shadowRoot||r,0,a,i),r[n]={vnode:o,handlers:L},r)}(a,r,n,o)}var P=0;function A(t){var e=t.id,n=t.defaultValue,r=L().context||{};return e in r?r[e]:n}function M(t){var e=a+P++,n={Provider:function(t){var n,r=t.value,o=t.children,a=L();return a.context[e]!=r&&(a.context=b({},a.context,((n={})[e]=r,n))),o},Consumer:function(t){return(0,t.children)(A(n))},id:e,defaultValue:t};return n}var O=t;let $=Promise.resolve(),I=0,V=O("host");function B(t){return JSON.parse(t)}class z extends HTMLElement{constructor(){let t;super(),this.props={},this.render=this.render.bind(this),this.renderID="@wc."+I++,this.update=(e=>{this.props={...this.props,...e},t||(t=!0,$.then(()=>{t=!1,j(O(this.render,this.props),this,this.renderID)}))}),this.update()}static get observedAttributes(){let t=this.attributes||{},e=[];for(let n in t)e.push(n.replace(/([A-Z])/g,"-$1").toLowerCase());return e}disconnectedCallback(){j(V,this,this.renderID)}attributeChangedCallback(t,e,n){if(e==n)return;t=t.replace(/-(\w)/g,(t,e)=>e.toUpperCase());let r,{attributes:o}=this.constructor,a=o[t];try{switch(a){case Number:n=B(n);break;case Boolean:n=1==(n=""==n||B(n))||0==n?1==n:n;break;case Object:case Array:n=B(n)}}catch(t){r=!0}if(r||{}.toString.call(n)!=`[object ${a.name}]`)throw`the attribute [${t}] must be of the type [${a.name}]`;this.update({[t]:n})}render(){return V}}var K=/([^\/]+)/g,U="[^\\/]",Z="(?:\\/){0,1}",q=/(:)(\w+)(\?|(\.){3}){0,1}/,G={},J={};function F(t,e){J[t]||(J[t]=function(t){var e=t.match(K)||[""],n=[];return{regexp:new RegExp("^"+e.map(function(t){var e=t.match(q)||[],r=(e[0],e[1]),o=e[2],a=e[3];return r?(n.push(o),"..."===a?"(.*)":"?"===a?Z+"("+U+"*)":"\\/("+U+"+)"):"\\/(?:"+t.replace(/\./g,"\\.").replace(/\*/g,U+"+").replace(/\((?!\?\:)/g,"(?:")+")"}).join("")+"$","i"),params:n,logs:{}}}(t));var n=J[t],r=n.regexp,o=n.params,a=n.logs;if(a[e])return a[e];var i=e.match(r);return a[e]=[!!i,i?i.slice(1).reduce(function(t,e,n){return t[o[n]||n]=e,t},{}):G]}function Q(t,e){return void 0===t&&(t=""),void 0===e&&(e=""),t.replace(/\/(:[\w]+...){0,1}$/,"")+"/"+e.replace(/^\//,"")}function W(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}var X={pathname:function(){return location.pathname},redirect:function(t){t!=X.pathname()&&(history.pushState({},"history",t),window.dispatchEvent(new PopStateEvent("popstate")))},setRootDefault:function(t){_.defaultValue=t}},Y=M("/"),_=M("");function tt(){var t=function(t){var e=L().next,n=D(function(e,n){switch(n.type){case s:return"function"==typeof t?t():t;case 159:var r=n.state;return"function"==typeof r?r(e):r}return e}),r=n[1];return[n[0],function(t){r({state:t,type:159}),e()}]}({pathname:X.pathname()}),e=t[0],n=t[1];return function(t,e){D(function(n,r){switch(r.type){case s:return{args:e};case l:case h:return n.clear&&(r.type==h||!e||!n.args||!g(e,n.args))&&n.clear.then(function(t){return t&&t()}),b({},n,{args:e});case p:case d:var o=r.type==p||!e||!n.args||!g(e,n.args),a=n.clear;return o&&(a=k(t)),b({},n,{clear:a,args:e})}return n})}(function(){function t(){var t=X.pathname();e.pathname!=t&&(e.pathname=t,n(e))}return window.addEventListener("popstate",t),function(){return window.removeEventListener("popstate",t)}},[]),[X.pathname(),X.redirect]}function et(){var t=A(Y);return Q(A(_),t)}function nt(t){var e=tt()[0];return F(Q(et(),t),e).concat([e])}function rt(t){var e=t.children,n=nt("/:pathname...")[0],r=X.pathname(),o=et();if(n){e=S(e);for(var a=0;a<e.length;a++){var i=e[a],c=i.type,u=i.props,s=u.path,l=W(u,["path"]),p=Q(o,s),d=F(p,r),f=d[0],h=d[1];if(f)return l.params=h,O(Y.Provider,{value:p},O(c,l))}}}function ot({children:t,checked:e,dark:n,...r}){return O("div",{...r,shadowDom:!0},O("style",null,`\n\t\t\t\t\t:host{\n\t\t\t\t\t\tpadding:.5rem 1rem;\n\t\t\t\t\t\tborder-radius:5px;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\tdisplay:inline-flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t${n?"background:black;color:white;":e?"background:white":"color:white"}\n\t\t\t\t\t}\n\t\t\t\t\t`),t)}function at(t){return O("article",{shadowDom:!0},O("style",null,"\n\t\t\t:host{\n\t\t\t\tflex:0%;\n\t\t\t\tpadding:1rem;\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tmargin : 1rem;\n\t\t\t\tbackground:white;\n\t\t\t\tborder-radius:5px;\n\t\t\t\tbox-shadow:0px 6px 12px rgba(0,0,0,.05);\n\t\t\t\tdisplay:flex;\n\t\t\t\talign-items:center;\n\t\t\t\tjustify-content:space-between;\n\t\t\t}\n\t\t\t"),t.children)}function it(t){return O("header",null,O("strong",null,t.title)," - ",O("span",null,t.price))}function ct(t){return O(at,null,O(it,{title:t.title,price:t.price+(null!=t.count?" x "+t.count:"")}),O(ot,{dark:!0,onClick:t.buttonHandler},t.buttonLabel))}function ut({products:t,buttonHandler:e}){return O("section",{shadowDom:!0},O("style",null,"\n      :host{\n        display:flex;\n        flex-flow:column;\n      }\n      "),t.map(t=>O(ct,{...t,buttonLabel:"add to cart",buttonHandler:()=>e(t)})))}function st({products:t,buttonHandler:e}){return O("section",{shadowDom:!0},O("style",null,"\n      :host{\n        display:flex;\n        flex-flow:column;\n      }\n      "),t.map(t=>O(ct,{...t,buttonLabel:"Remove from cart",buttonHandler:()=>e(t)})))}let lt={INSERT:"INSERT",DELETE:"DELETE"};function pt(t,{type:e,data:n}){switch(e){case lt.INSERT:{let e=new Map(t),{count:r}=e.get(n.id)||{count:0};return r++,e.set(n.id,{...n,count:r})}case lt.DELETE:{let e=new Map(t),{count:r}=e.get(n.id)||{};return r?(0==--r?e.delete(n.id):e.set(n.id,{...n,count:r}),e):t}default:return t}}X.setRootDefault(location.pathname);let dt=[{id:"p1",title:"Gaming Mouse",price:29.99},{id:"p2",title:"Harry Potter 3",price:9.99},{id:"p3",title:"Used plastic bottle",price:.99},{id:"p4",title:"Half-dried plant",price:2.99}];customElements.define("atomico-shop",class extends z{render({products:t=dt}){let e=(n=A(_),function(t){X.redirect(Q(n,t))});var n;let[r]=nt("/"),[o]=nt("/cart"),[a,i]=function(t,e){var n=L().next,r=D(function(n,r){switch(r.type){case s:return e;case 158:return t(n,r.use)}return n}),o=r[1];return[r[0],function(t){o({type:158,use:t}),n()}]}(pt,new Map);return console.log(et()),a=function(t){let e=0,n=[...t].map(([t,n])=>(e+=n.count,n));return{length:e,products:n}}(a),O("host",{shadowDom:!0},O("style",null,"\n\t\t\t\t@import url('https://fonts.googleapis.com/css?family=Muli');\n\t\t\t\t:host{\n\t\t\t\t\twidth:100%;\n\t\t\t\t\theight:100%;\n\t\t\t\t\tfont-family: 'Muli', sans-serif;\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tflex-flow:column wrap;\n\t\t\t\t\tbackground:#f1f1f9;\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t#header{\n\t\t\t\t\tbackground:black;\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tjustify-content:center;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tpadding : .5rem;\n\t\t\t\t\tbox-sizing:border-box;\n\t\t\t\t}\n\t\t\t\t#view{\n\t\t\t\t\tflex:0%;\n\t\t\t\t}\n\t\t\t\t"),O("header",{id:"header"},O(ot,{onClick:()=>e("/"),checked:r},"Products"),O(ot,{onClick:()=>e("/cart"),checked:o},"Cart (",a.length,")")),O(rt,null,O(ut,{path:"/",products:t,buttonHandler:t=>{i({data:t,type:lt.INSERT})}}),O(st,{path:"/cart",products:a.products,buttonHandler:t=>{i({data:t,type:lt.DELETE})}})))}});
//# sourceMappingURL=index.js.map
