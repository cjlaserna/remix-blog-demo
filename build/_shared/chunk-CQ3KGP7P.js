import{a as Ne,c as te,e as ne,g as R}from"/build/_shared/chunk-TOAMQMCD.js";function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},de.apply(this,arguments)}var ut=Ne(()=>{R()});function mt(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,a=n.history;function o(){var v=n.location,x=v.pathname,C=v.search,F=v.hash,M=a.state||{};return[M.idx,dt({pathname:x,search:C,hash:F,state:M.usr||null,key:M.key||"default"})]}var i=null;function d(){if(i)w.call(i),i=null;else{var v=V.Pop,x=o(),C=x[0],F=x[1];if(w.length){if(C!=null){var M=h-C;M&&(i={action:v,location:F,retry:function(){A(M*-1)}},A(M))}}else Y(v)}}n.addEventListener(fn,d);var l=V.Pop,u=o(),h=u[0],m=u[1],y=pt(),w=pt();h==null&&(h=0,a.replaceState(de({},a.state,{idx:h}),""));function b(v){return typeof v=="string"?v:yt(v)}function W(v,x){return x===void 0&&(x=null),dt(de({pathname:m.pathname,hash:"",search:""},typeof v=="string"?z(v):v,{state:x,key:hn()}))}function J(v,x){return[{usr:v.state,key:v.key,idx:x},b(v)]}function q(v,x,C){return!w.length||(w.call({action:v,location:x,retry:C}),!1)}function Y(v){l=v;var x=o();h=x[0],m=x[1],y.call({action:l,location:m})}function le(v,x){var C=V.Push,F=W(v,x);function M(){le(v,x)}if(q(C,F,M)){var K=J(F,h+1),me=K[0],ce=K[1];try{a.pushState(me,"",ce)}catch{n.location.assign(ce)}Y(C)}}function se(v,x){var C=V.Replace,F=W(v,x);function M(){se(v,x)}if(q(C,F,M)){var K=J(F,h),me=K[0],ce=K[1];a.replaceState(me,"",ce),Y(C)}}function A(v){a.go(v)}var B={get action(){return l},get location(){return m},createHref:b,push:le,replace:se,go:A,back:function(){A(-1)},forward:function(){A(1)},listen:function(x){return y.push(x)},block:function(x){var C=w.push(x);return w.length===1&&n.addEventListener(ft,ht),function(){C(),w.length||n.removeEventListener(ft,ht)}}};return B}function ht(e){e.preventDefault(),e.returnValue=""}function pt(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function hn(){return Math.random().toString(36).substr(2,8)}function yt(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,a=n===void 0?"":n,o=e.hash,i=o===void 0?"":o;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function z(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var V,dt,ft,fn,ge=Ne(()=>{R();ut();(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(V||(V={}));dt=function(e){return e},ft="beforeunload",fn="popstate"});function he(e,t){if(!e)throw new Error(t)}function Ce(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?z(t):t,a=Et(n.pathname||"/",r);if(a==null)return null;let o=Rt(e);pn(o);let i=null;for(let d=0;i==null&&d<o.length;++d)i=xn(o[d],a);return i}function Rt(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((a,o)=>{let i={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(n)||he(!1),i.relativePath=i.relativePath.slice(n.length));let d=fe([n,i.relativePath]),l=r.concat(i);a.children&&a.children.length>0&&(a.index===!0&&he(!1),Rt(a.children,t,l,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:En(d,a.index),routesMeta:l})}),t}function pn(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:bn(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}function En(e,t){let r=e.split("/"),n=r.length;return r.some(vt)&&(n+=wn),t&&(n+=vn),r.filter(a=>!vt(a)).reduce((a,o)=>a+(mn.test(o)?yn:o===""?gn:Rn),n)}function bn(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function xn(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let i=0;i<r.length;++i){let d=r[i],l=i===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",h=wt({path:d.relativePath,caseSensitive:d.caseSensitive,end:l},u);if(!h)return null;Object.assign(n,h.params);let m=d.route;o.push({params:n,pathname:fe([a,h.pathname]),pathnameBase:bt(fe([a,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(a=fe([a,h.pathnameBase]))}return o}function wt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Sn(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:n.reduce((u,h,m)=>{if(h==="*"){let y=d[m]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[h]=Nn(d[m]||"",h),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Sn(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,d)=>(n.push(d),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),n]}function Nn(e,t){try{return decodeURIComponent(e)}catch{return e}}function Et(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}function ke(){return(0,P.useContext)(Pe)!=null}function U(){return ke()||he(!1),(0,P.useContext)(Pe).location}function Oe(e){let t=(0,P.useContext)(Le).outlet;return t&&(0,P.createElement)(Pn.Provider,{value:e},t)}function We(e,t){ke()||he(!1);let{matches:r}=(0,P.useContext)(Le),n=r[r.length-1],a=n?n.params:{},o=n?n.pathname:"/",i=n?n.pathnameBase:"/",d=n&&n.route,l=U(),u;if(t){var h;let b=typeof t=="string"?z(t):t;i==="/"||((h=b.pathname)==null?void 0:h.startsWith(i))||he(!1),u=b}else u=l;let m=u.pathname||"/",y=i==="/"?m:m.slice(i.length)||"/",w=Ce(e,{pathname:y});return Ln(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:fe([i,b.pathname]),pathnameBase:b.pathnameBase==="/"?i:fe([i,b.pathnameBase])})),r)}function Ln(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,a)=>(0,P.createElement)(Le.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,a+1))}}),null)}function je(e){return Oe(e.context)}function Je(e){let{basename:t="/",children:r=null,location:n,navigationType:a=V.Pop,navigator:o,static:i=!1}=e;ke()&&he(!1);let d=bt(t),l=(0,P.useMemo)(()=>({basename:d,navigator:o,static:i}),[d,o,i]);typeof n=="string"&&(n=z(n));let{pathname:u="/",search:h="",hash:m="",state:y=null,key:w="default"}=n,b=(0,P.useMemo)(()=>{let W=Et(u,d);return W==null?null:{pathname:W,search:h,hash:m,state:y,key:w}},[d,u,h,m,y,w]);return b==null?null:(0,P.createElement)(gt.Provider,{value:l},(0,P.createElement)(Pe.Provider,{children:r,value:{location:b,navigationType:a}}))}var P,gt,Pe,Le,mn,yn,vn,gn,Rn,wn,vt,fe,bt,Pn,xt=Ne(()=>{R();ge();P=te(ne());gt=(0,P.createContext)(null),Pe=(0,P.createContext)(null),Le=(0,P.createContext)({outlet:null,matches:[]});mn=/^:\w+$/,yn=3,vn=2,gn=1,Rn=10,wn=-2,vt=e=>e==="*";fe=e=>e.join("/").replace(/\/\/+/g,"/"),bt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");Pn=(0,P.createContext)(null)});var re,Re=Ne(()=>{R();re=te(ne());xt();});R();ge();var X=te(ne());R();R();function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}var p=te(ne());Re();R();var N=te(ne());var De=class extends N.default.Component{constructor(t){super(t);this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||r.error,location:r.location}}render(){return this.state.error?N.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function Lt({error:e}){return console.error(e),N.default.createElement("html",{lang:"en"},N.default.createElement("head",null,N.default.createElement("meta",{charSet:"utf-8"}),N.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),N.default.createElement("title",null,"Application Error!")),N.default.createElement("body",null,N.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},N.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),N.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack)),N.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws errors than this. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}var Ct=N.default.createContext(void 0);function kt(){return(0,N.useContext)(Ct)}function ze({catch:e,component:t,children:r}){return e?N.default.createElement(Ct.Provider,{value:e},N.default.createElement(t,null)):N.default.createElement(N.default.Fragment,null,r)}function Ot(){let e=kt();return N.default.createElement("html",{lang:"en"},N.default.createElement("head",null,N.default.createElement("meta",{charSet:"utf-8"}),N.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),N.default.createElement("title",null,"Unhandled Thrown Response!")),N.default.createElement("body",null,N.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),N.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws 404s (and other responses) than this. Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}R();function k(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}R();ge();R();async function Me(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch{return window.location.reload(),new Promise(()=>{})}}function Dt(e,t,r){let n=e.map(o=>{var i;let d=t[o.route.id];return((i=d.links)===null||i===void 0?void 0:i.call(d))||[]}).flat(1),a=On(e,r);return Dn(n,a)}async function Mt(e){if(!e.links)return;let t=e.links();if(!t)return;let r=[];for(let a of t)!_e(a)&&a.rel==="stylesheet"&&r.push({...a,rel:"preload",as:"style"});let n=r.filter(a=>!a.media||window.matchMedia(a.media).matches);await Promise.all(n.map(Cn))}async function Cn(e){return new Promise(t=>{let r=document.createElement("link");Object.assign(r,e);function n(){document.head.contains(r)&&document.head.removeChild(r)}r.onload=()=>{n(),t()},r.onerror=()=>{n(),t()},document.head.appendChild(r)})}function _e(e){return e!=null&&typeof e.page=="string"}function kn(e){return e!=null&&typeof e.rel=="string"&&typeof e.href=="string"}async function _t(e,t){return(await Promise.all(e.map(async n=>{let a=await Me(n.route,t);return a.links?a.links():[]}))).flat(1).filter(kn).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(({rel:n,...a})=>n==="preload"?{rel:"prefetch",...a}:{rel:"prefetch",as:"style",...a})}function Xe(e,t,r,n,a){let o=It(e),i=(u,h)=>r[h]?u.route.id!==r[h].route.id:!0,d=(u,h)=>{var m;return r[h].pathname!==u.pathname||((m=r[h].route.path)===null||m===void 0?void 0:m.endsWith("*"))&&r[h].params["*"]!==u.params["*"]};return a==="data"&&n.search!==o.search?t.filter((u,h)=>u.route.hasLoader?i(u,h)||d(u,h)?!0:u.route.shouldReload?u.route.shouldReload({params:u.params,prevUrl:new URL(n.pathname+n.search+n.hash,window.origin),url:new URL(e,window.origin)}):!0:!1):t.filter((u,h)=>u.route.hasLoader&&(i(u,h)||d(u,h)))}function Tt(e,t,r){let n=It(e);return qe(t.filter(a=>r.routes[a.route.id].hasLoader).map(a=>{let{pathname:o,search:i}=n,d=new URLSearchParams(i);return d.append("_data",a.route.id),`${o}?${d}`}))}function Bt(e,t){return qe(e.map(r=>{let n=t.routes[r.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function On(e,t){return qe(e.map(r=>{let n=t.routes[r.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function qe(e){return[...new Set(e)]}function Dn(e,t){let r=new Set,n=new Set(t);return e.reduce((a,o)=>{if(!_e(o)&&o.as==="script"&&o.href&&n.has(o.href))return a;let d=JSON.stringify(o);return r.has(d)||(r.add(d),a.push(o)),a},[])}function It(e){let t=z(e);return t.search===void 0&&(t.search=""),t}R();function Qe(e){return{__html:e}}R();var Yt=te(ne());R();function Ze(e){return e instanceof Response&&e.headers.get("X-Remix-Catch")!=null}function Mn(e){return e instanceof Response&&e.headers.get("X-Remix-Error")!=null}function At(e){return e instanceof Response&&e.headers.get("X-Remix-Redirect")!=null}async function et(e,t,r,n){e.searchParams.set("_data",t),e.searchParams.sort();let a=n?_n(n,r):{credentials:"same-origin",signal:r},o=await fetch(e.href,a);if(Mn(o)){let i=await o.json(),d=new Error(i.message);return d.stack=i.stack,d}return o}async function we(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.json():e.text()}function _n(e,t){let{encType:r,method:n,formData:a}=e,o,i=a;if(r==="application/x-www-form-urlencoded"){i=new URLSearchParams;for(let[d,l]of a)k(typeof l=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),i.append(d,l);o={"Content-Type":r}}return{method:n,body:i,signal:t,credentials:"same-origin",headers:o}}R();ge();R();Re();function ae(e,t){let r=Ce(e,t);return r?r.map(n=>({params:n.params,pathname:n.pathname,route:n.route})):null}var xe=class{constructor(t,r,n){this.status=t,this.statusText=r,this.data=n}};function Ft(e){return["POST","PUT","PATCH","DELETE"].includes(e.method)}function Ht(e){return e.method==="GET"}function Ae(e){return Boolean(e.state)&&e.state.isRedirect}function Tn(e){return Ae(e)&&e.state.type==="loader"}function Bn(e){return Ae(e)&&e.state.type==="action"}function In(e){return Ae(e)&&e.state.type==="fetchAction"}function An(e){return Ae(e)&&e.state.type==="loaderSubmission"}var Fe=class{constructor(t){this.location=typeof t=="string"?t:t.pathname+t.search}},oe={state:"idle",submission:void 0,location:void 0,type:"idle"},Fn={state:"idle",type:"init",data:void 0,submission:void 0};function jt(e){let{routes:t}=e,r,n=new Map,a=0,o=-1,i=new Map,d=ae(t,e.location);d||(d=[{params:{},pathname:"",route:t[0]}]);let l={location:e.location,loaderData:e.loaderData||{},actionData:e.actionData,catch:e.catch,error:e.error,catchBoundaryId:e.catchBoundaryId||null,errorBoundaryId:e.errorBoundaryId||null,matches:d,nextMatches:void 0,transition:oe,fetchers:new Map};function u(s){l=Object.assign({},l,s),e.onChange(l)}function h(){return l}function m(s){return l.fetchers.get(s)||Fn}function y(s){n.has(s)&&Ve(s),i.delete(s),l.fetchers.delete(s)}async function w(s){switch(s.type){case"navigation":{let{action:c,location:f,submission:g}=s,E=ae(t,f);E?!g&&sn(f)?await F(f,E):c===V.Pop?await M(f,E):g&&Ft(g)?await x(f,g,E):g&&Ht(g)?await C(f,g,E):Bn(f)?await lt(f,E):An(f)?await me(f,E):Tn(f)?await K(f,E):In(f)?await ce(f,E):await M(f,E):(E=[{params:{},pathname:"",route:t[0]}],await v(f,E)),o=-1;break}case"fetcher":{let{key:c,submission:f,href:g}=s,E=ae(t,g);k(E,"No matches found");let L=E.slice(-1)[0];n.has(c)&&Ve(c),f&&Ft(f)?await W(c,f,L):f&&Ht(f)?await le(g,c,f,L):await se(g,c,L);break}default:throw new Error(`Unknown data event type: ${s.type}`)}}function b(){H();for(let[,s]of n)s.abort()}async function W(s,c,f){let g=l.fetchers.get(s),E={state:"submitting",type:"actionSubmission",submission:c,data:(g==null?void 0:g.data)||void 0};l.fetchers.set(s,E),u({fetchers:new Map(l.fetchers)});let L=new AbortController;n.set(s,L);let S=await Vt(c,f,L.signal);if(L.signal.aborted)return;if(Ee(S)){let ee={isRedirect:!0,type:"fetchAction"};e.onRedirect(S.value.location,ee);return}if(B(f,s,S)||await A(f,s,S))return;let O={state:"loading",type:"actionReload",data:S.value,submission:c};l.fetchers.set(s,O),u({fetchers:new Map(l.fetchers)});let D=Be(S)?S:void 0,$=be(S)?S:void 0,ye=++a;i.set(s,ye);let ve=l.nextMatches||l.matches,Ue=ie(l.transition.location||l.location),Z=await $t(l,pe(Ue),ve,L.signal,D,$,c,f.route.id,O);if(L.signal.aborted)return;i.delete(s),n.delete(s);let ue=Ut(Z);if(ue){let ee={isRedirect:!0,type:"loader"};e.onRedirect(ue.location,ee);return}let[G,st]=Wt(Z,l.matches,D),[cn,un]=await tt(Z,l.matches,$),dn={state:"idle",type:"done",data:S.value,submission:void 0};l.fetchers.set(s,dn);let ct=Y(ye);if(ct&&q(ct),J(ye)){let{transition:ee}=l;k(ee.state==="loading","Expected loading transition"),u({location:ee.location,matches:l.nextMatches,error:G,errorBoundaryId:st,catch:cn,catchBoundaryId:un,loaderData:nt(l,Z,ve),actionData:ee.type==="actionReload"?l.actionData:void 0,transition:oe,fetchers:new Map(l.fetchers)})}else u({fetchers:new Map(l.fetchers),error:G,errorBoundaryId:st,loaderData:nt(l,Z,ve)})}function J(s){return l.transition.state==="loading"&&o<s?(H(),!0):!1}function q(s){for(let c of s){let f=m(c),g={state:"idle",type:"done",data:f.data,submission:void 0};l.fetchers.set(c,g)}}function Y(s){let c=[];for(let[f,g]of i)if(g<s){let E=l.fetchers.get(f);k(E,`Expected fetcher: ${f}`),E.state==="loading"&&(Ve(f),i.delete(f),c.push(f))}return c.length?c:!1}async function le(s,c,f,g){let E=l.fetchers.get(c),L={state:"submitting",type:"loaderSubmission",submission:f,data:(E==null?void 0:E.data)||void 0};l.fetchers.set(c,L),u({fetchers:new Map(l.fetchers)});let S=new AbortController;n.set(c,S);let O=await rt(g,pe(s),S.signal);if(n.delete(c),S.signal.aborted)return;if(Ee(O)){let $={isRedirect:!0,type:"loader"};e.onRedirect(O.value.location,$);return}if(B(g,c,O)||await A(g,c,O))return;let D={state:"idle",type:"done",data:O.value,submission:void 0};l.fetchers.set(c,D),u({fetchers:new Map(l.fetchers)})}async function se(s,c,f){let g=l.fetchers.get(c),E={state:"loading",type:"normalLoad",submission:void 0,data:(g==null?void 0:g.data)||void 0};l.fetchers.set(c,E),u({fetchers:new Map(l.fetchers)});let L=new AbortController;n.set(c,L);let S=await rt(f,pe(s),L.signal);if(L.signal.aborted)return;if(n.delete(c),Ee(S)){let D={isRedirect:!0,type:"loader"};e.onRedirect(S.value.location,D);return}if(B(f,c,S)||await A(f,c,S))return;let O={state:"idle",type:"done",data:S.value,submission:void 0};l.fetchers.set(c,O),u({fetchers:new Map(l.fetchers)})}async function A(s,c,f){if(be(f)){let g=Ie(s,l.matches);return l.fetchers.delete(c),u({transition:oe,fetchers:new Map(l.fetchers),catch:{data:f.value.data,status:f.value.status,statusText:f.value.statusText},catchBoundaryId:g}),!0}return!1}function B(s,c,f){if(Be(f)){let g=Te(s,l.matches);return l.fetchers.delete(c),u({fetchers:new Map(l.fetchers),error:f.value,errorBoundaryId:g}),!0}return!1}async function v(s,c){H(),u({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:c}),await Promise.resolve();let g=Ie(c[0],c);u({location:s,matches:c,catch:{data:null,status:404,statusText:"Not Found"},catchBoundaryId:g,transition:oe})}async function x(s,c,f){H(),u({transition:{state:"submitting",type:"actionSubmission",submission:c,location:s},nextMatches:f});let E=new AbortController;r=E,!Hn(c.action)&&f[f.length-1].route.id.endsWith("/index")&&(f=f.slice(0,-1));let L=f.slice(-1)[0],S=await Vt(c,L,E.signal);if(E.signal.aborted)return;if(Ee(S)){let D={isRedirect:!0,type:"action"};e.onRedirect(S.value.location,D);return}if(be(S)){let[D,$]=await tt([S],f,S);u({transition:oe,catch:D,catchBoundaryId:$});return}u({transition:{state:"loading",type:"actionReload",submission:c,location:s},actionData:{[L.route.id]:S.value}}),await Q(s,f,c,L.route.id,S)}async function C(s,c,f){H(),u({transition:{state:"submitting",type:"loaderSubmission",submission:c,location:s},nextMatches:f}),await Q(s,f,c)}async function F(s,c){H(),u({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:c}),await Promise.resolve(),u({location:s,matches:c,transition:oe})}async function M(s,c){H(),u({transition:{state:"loading",type:"normalLoad",submission:void 0,location:s},nextMatches:c}),await Q(s,c)}async function K(s,c){H(),u({transition:{state:"loading",type:"normalRedirect",submission:void 0,location:s},nextMatches:c}),await Q(s,c)}async function me(s,c){H(),k(l.transition.type==="loaderSubmission",`Unexpected transition: ${JSON.stringify(l.transition)}`);let{submission:f}=l.transition;u({transition:{state:"loading",type:"loaderSubmissionRedirect",submission:f,location:s},nextMatches:c}),await Q(s,c,f)}async function ce(s,c){H(),u({transition:{state:"loading",type:"fetchActionRedirect",submission:void 0,location:s},nextMatches:c}),await Q(s,c)}async function lt(s,c){H(),k(l.transition.type==="actionSubmission"||l.transition.type==="actionReload",`Unexpected transition: ${JSON.stringify(l.transition)}`);let{submission:f}=l.transition;u({transition:{state:"loading",type:"actionRedirect",submission:f,location:s},nextMatches:c}),await Q(s,c,f)}function sn(s){return ie(l.location)===ie(s)&&l.location.hash!==s.hash}async function Q(s,c,f,g,E){let L=E&&Be(E)?E:void 0,S=E&&be(E)?E:void 0,O=new AbortController;r=O,o=++a;let D=await $t(l,pe(ie(s)),c,O.signal,L,S,f,g);if(O.signal.aborted)return;let $=Ut(D);if($){if(l.transition.type==="actionReload"){let G={isRedirect:!0,type:"action"};e.onRedirect($.location,G)}else if(l.transition.type==="loaderSubmission"){let G={isRedirect:!0,type:"loaderSubmission"};e.onRedirect($.location,G)}else{let G={isRedirect:!0,type:"loader"};e.onRedirect($.location,G)}return}let[ye,ve]=Wt(D,c,L),[Ue,Z]=await tt(D,c,L),ue=Y(o);ue&&q(ue),u({location:s,matches:c,error:ye,errorBoundaryId:ve,catch:Ue,catchBoundaryId:Z,loaderData:nt(l,D,c),actionData:l.transition.type==="actionReload"?l.actionData:void 0,transition:oe,fetchers:ue?new Map(l.fetchers):l.fetchers})}function H(){var s;(s=r)===null||s===void 0||s.abort()}function Ve(s){let c=n.get(s);k(c,`Expected fetch controller: ${s}`),c.abort(),n.delete(s)}return{send:w,getState:h,getFetcher:m,deleteFetcher:y,dispose:b,get _internalFetchControllers(){return n}}}function Hn(e){let t=!1,r=new URLSearchParams(e.split("?",2)[1]||"");for(let n of r.getAll("index"))n||(t=!0);return t}async function $t(e,t,r,n,a,o,i,d,l){let u=$n(e,t,r,a,o,i,d,l);return Promise.all(u.map(h=>rt(h,t,n)))}async function rt(e,t,r){k(e.route.loader,`Expected loader for ${e.route.id}`);try{let{params:n}=e,a=await e.route.loader({params:n,url:t,signal:r});return{match:e,value:a}}catch(n){return{match:e,value:n}}}async function Vt(e,t,r){if(!t.route.action)throw new Error(`Route "${t.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);try{let n=await t.route.action({url:pe(e.action),params:t.params,submission:e,signal:r});return{match:t,value:n}}catch(n){return{match:t,value:n}}}function $n(e,t,r,n,a,o,i,d){if(i&&(a||n)){let y=!1;r=r.filter(w=>y?!1:w.route.id===i?(y=!0,!1):!0)}let l=(y,w)=>e.matches[w]?y.route.id!==e.matches[w].route.id:!0,u=(y,w)=>{var b;return e.matches[w].pathname!==y.pathname||((b=e.matches[w].route.path)===null||b===void 0?void 0:b.endsWith("*"))&&e.matches[w].params["*"]!==y.params["*"]},h=(y,w)=>{if(!y.route.loader)return!1;if(l(y,w)||u(y,w))return!0;if(y.route.shouldReload){let b=pe(ie(e.location));return y.route.shouldReload({prevUrl:b,url:t,submission:o,params:y.params})}return!0};return e.matches.length===1?r.filter(y=>!!y.route.loader):(d==null?void 0:d.type)==="actionReload"||e.transition.type==="actionReload"||e.transition.type==="actionRedirect"||ie(t)===ie(e.location)||t.searchParams.toString()!==e.location.search?r.filter(h):r.filter((y,w,b)=>(n||a)&&b.length-1===w?!1:y.route.loader&&(l(y,w)||u(y,w)))}function Ee(e){return e.value instanceof Fe}function ie(e){return e.pathname+e.search}function Ut(e){for(let t of e)if(Ee(t))return t.value;return null}async function tt(e,t,r){let n;for(let o of e)if(be(o)){n=o;break}let a=async o=>({status:o.status,statusText:o.statusText,data:o.data});if(r&&n){let o=Ie(n.match,t);return[await a(r.value),o]}if(n){let o=Ie(n.match,t);return[await a(n.value),o]}return[void 0,void 0]}function Wt(e,t,r){let n;for(let a of e)if(Be(a)){n=a;break}if(r&&n){let a=Te(n.match,t);return[r.value,a]}if(r){let a=Te(r.match,t);return[r.value,a]}if(n){let a=Te(n.match,t);return[n.value,a]}return[void 0,void 0]}function Ie(e,t){let r=null;for(let n of t)if(n.route.CatchBoundary&&(r=n.route.id),n===e)break;return r}function Te(e,t){let r=null;for(let n of t)if(n.route.ErrorBoundary&&(r=n.route.id),n===e)break;return r}function nt(e,t,r){let n={};for(let{match:o,value:i}of t)n[o.route.id]=i;let a={};for(let{route:o}of r){let i=n[o.id]!==void 0?n[o.id]:e.loaderData[o.id];i!==void 0&&(a[o.id]=i)}return a}function be(e){return e.value instanceof xe}function Be(e){return e.value instanceof Error}function pe(e){return new URL(e,window.location.origin)}function Vn(e,t,r){return{caseSensitive:!!e.caseSensitive,element:Yt.createElement(r,{id:e.id}),id:e.id,path:e.path,index:e.index,module:e.module,loader:Wn(e,t),action:jn(e),shouldReload:Un(e,t),ErrorBoundary:e.hasErrorBoundary,CatchBoundary:e.hasCatchBoundary,hasLoader:e.hasLoader}}function at(e,t,r,n){return Object.keys(e).filter(a=>e[a].parentId===n).map(a=>{let o=Vn(e[a],t,r),i=at(e,t,r,o.id);return i.length>0&&(o.children=i),o})}function Un(e,t){return n=>{let a=t[e.id];return k(a,`Expected route module to be loaded for ${e.id}`),a.unstable_shouldReload?a.unstable_shouldReload(n):!0}}async function Jt(e,t){let r=await Me(e,t);return await Mt(r),r}function Wn(e,t){return async({url:n,signal:a,submission:o})=>{if(e.hasLoader){let[i]=await Promise.all([et(n,e.id,a,o),Jt(e,t)]);if(i instanceof Error)throw i;let d=await Kt(i);if(d)return d;if(Ze(i))throw new xe(i.status,i.statusText,await we(i.clone()));return we(i)}else await Jt(e,t)}}function jn(e){return e.hasAction?async({url:r,signal:n,submission:a})=>{let o=await et(r,e.id,n,a);if(o instanceof Error)throw o;let i=await Kt(o);if(i)return i;if(Ze(o))throw new xe(o.status,o.statusText,await we(o.clone()));return we(o)}:void 0}async function Kt(e){if(At(e)){let t=new URL(e.headers.get("X-Remix-Redirect"),window.location.origin);if(t.origin!==window.location.origin)await new Promise(()=>{window.location.replace(t.href)});else return new Fe(t.pathname+t.search)}return null}var Xt=p.createContext(void 0);function j(){let e=p.useContext(Xt);return k(e,"You must render this element inside a <Remix> element"),e}function qt({context:e,action:t,location:r,navigator:n,static:a=!1}){let{manifest:o,routeData:i,actionData:d,routeModules:l,serverHandoffString:u,appState:h}=e,m=p.useMemo(()=>at(o.routes,l,Gn),[o,l]),[y,w]=p.useState(h),[b]=p.useState(()=>jt({routes:m,actionData:d,loaderData:i,location:r,catch:h.catch,catchBoundaryId:h.catchBoundaryRouteId,onRedirect:n.replace,onChange:B=>{w({catch:B.catch,error:B.error,catchBoundaryRouteId:B.catchBoundaryId,loaderBoundaryRouteId:B.errorBoundaryId,renderBoundaryRouteId:null,trackBoundaries:!1,trackCatchBoundaries:!1})}})),W=p.useMemo(()=>({...n,push:(v,x)=>b.getState().transition.state!=="idle"?n.replace(v,x):n.push(v,x)}),[n,b]),{location:J,matches:q,loaderData:Y,actionData:le}=b.getState();p.useEffect(()=>{let{location:B}=b.getState();r!==B&&b.send({type:"navigation",location:r,submission:Qn(),action:t})},[b,r,t]);let se=y.error&&y.renderBoundaryRouteId===null&&y.loaderBoundaryRouteId===null?Qt(y.error):void 0,A=y.catch&&y.catchBoundaryRouteId===null?y.catch:void 0;return p.createElement(Xt.Provider,{value:{matches:q,manifest:o,appState:y,routeModules:l,serverHandoffString:u,clientRoutes:m,routeData:Y,actionData:le,transitionManager:b}},p.createElement(De,{location:J,component:Lt,error:se},p.createElement(ze,{location:J,component:Ot,catch:A},p.createElement(Je,{navigationType:t,location:J,navigator:W,static:a},p.createElement(Jn,null)))))}function Qt(e){let t=new Error(e.message);return t.stack=e.stack,t}function Jn(){let{clientRoutes:e}=j();return We(e)||e[0].element}var Zt=p.createContext(void 0);function Yn(){let e=p.useContext(Zt);return k(e,"You must render this element in a remix route element"),e}function Kn({id:e}){throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`)}function Gn({id:e}){let t=U(),{routeData:r,routeModules:n,appState:a}=j(),o=r[e],{default:i,CatchBoundary:d,ErrorBoundary:l}=n[e],u=i?p.createElement(i,null):p.createElement(Kn,{id:e}),h={data:o,id:e};if(d){let m=a.catch&&a.catchBoundaryRouteId===e?a.catch:void 0;a.trackCatchBoundaries&&(a.catchBoundaryRouteId=e),h=m?{id:e,get data(){console.error("You cannot `useLoaderData` in a catch boundary.")}}:{id:e,data:o},u=p.createElement(ze,{location:t,component:d,catch:m},u)}if(l){let m=a.error&&(a.renderBoundaryRouteId===e||a.loaderBoundaryRouteId===e)?Qt(a.error):void 0;a.trackBoundaries&&(a.renderBoundaryRouteId=e),h=m?{id:e,get data(){console.error("You cannot `useLoaderData` in an error boundary.")}}:{id:e,data:o},u=p.createElement(De,{location:t,component:l,error:m},u)}return p.createElement(Zt.Provider,{value:h},u)}function en(){let{matches:e,routeModules:t,manifest:r}=j(),n=p.useMemo(()=>Dt(e,t,r),[e,t,r]);return p.createElement(p.Fragment,null,n.map(a=>_e(a)?p.createElement(ot,I({key:a.page},a)):p.createElement("link",I({key:a.rel+a.href},a))))}function ot({page:e,...t}){let{clientRoutes:r}=j(),n=p.useMemo(()=>ae(r,e),[r,e]);return n?p.createElement(Xn,I({page:e,matches:n},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function zn(e){let{routeModules:t}=j(),[r,n]=p.useState([]);return p.useEffect(()=>{let a=!1;return _t(e,t).then(o=>{a||n(o)}),()=>{a=!0}},[e,t]),r}function Xn({page:e,matches:t,...r}){let n=U(),{matches:a,manifest:o}=j(),i=p.useMemo(()=>Xe(e,t,a,n,"data"),[e,t,a,n]),d=p.useMemo(()=>Xe(e,t,a,n,"assets"),[e,t,a,n]),l=p.useMemo(()=>Tt(e,i,o),[i,e,o]),u=p.useMemo(()=>Bt(d,o),[d,o]),h=zn(d);return p.createElement(p.Fragment,null,l.map(m=>p.createElement("link",I({key:m,rel:"prefetch",as:"fetch",href:m},r))),u.map(m=>p.createElement("link",I({key:m,rel:"modulepreload",href:m},r))),h.map(m=>p.createElement("link",I({key:m.href},m))))}function tn(){let{matches:e,routeData:t,routeModules:r}=j(),n=U(),a={},o={};for(let i of e){let d=i.route.id,l=t[d],u=i.params,h=r[d];if(h.meta){let m=typeof h.meta=="function"?h.meta({data:l,parentsData:o,params:u,location:n}):h.meta;Object.assign(a,m)}o[d]=l}return p.createElement(p.Fragment,null,Object.entries(a).map(([i,d])=>{let l=i.startsWith("og:");return i==="title"?p.createElement("title",{key:"title"},d):Array.isArray(d)?d.map(u=>l?p.createElement("meta",{key:i+u,property:i,content:u}):p.createElement("meta",{key:i+u,name:i,content:u})):l?p.createElement("meta",{key:i,property:i,content:d}):p.createElement("meta",{key:i,name:i,content:d})}))}var Gt=!1;function nn(e){let{manifest:t,matches:r,pendingLocation:n,clientRoutes:a,serverHandoffString:o}=j();p.useEffect(()=>{Gt=!0},[]);let i=p.useMemo(()=>{let h=o?`window.__remixContext = ${o};`:"",m=`${r.map((y,w)=>`import * as route${w} from ${JSON.stringify(t.routes[y.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${r.map((y,w)=>`${JSON.stringify(y.route.id)}:route${w}`).join(",")}};`;return p.createElement(p.Fragment,null,p.createElement("script",I({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:Qe(h)})),p.createElement("script",I({},e,{src:t.url})),p.createElement("script",I({},e,{dangerouslySetInnerHTML:Qe(m),type:"module"})),p.createElement("script",I({},e,{src:t.entry.module,type:"module"})))},[]),d=p.useMemo(()=>{if(n){let h=ae(a,n);return k(h,`No routes match path "${n.pathname}"`),h}return[]},[n,a]),l=r.concat(d).map(h=>{let m=t.routes[h.route.id];return(m.imports||[]).concat([m.module])}).flat(1),u=t.entry.imports.concat(l);return p.createElement(p.Fragment,null,qn(u).map(h=>p.createElement("link",{key:h,rel:"modulepreload",href:h,crossOrigin:e.crossOrigin})),Gt?null:i)}function qn(e){return[...new Set(e)]}var zt;function Qn(){let e=zt;return zt=void 0,e}function Se(e){p.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[e])}function rn(){return Yn().data}function He(){let{transitionManager:e}=j();return e.getState().transition}function an(e){let t=X.useRef();t.current==null&&(t.current=mt({window}));let r=t.current,[n,a]=X.useReducer((i,d)=>d,{action:r.action,location:r.location});X.useLayoutEffect(()=>r.listen(a),[r]);let o=window.__remixContext;return o.manifest=window.__remixManifest,o.routeModules=window.__remixRouteModules,o.appState.trackBoundaries=!1,o.appState.trackCatchBoundaries=!1,X.createElement(qt,{context:o,action:n.action,location:n.location,navigator:r})}R();Re();R();var T=te(ne());Re();var it="positions",$e={};if(typeof document<"u"){let e=sessionStorage.getItem(it);e&&($e=JSON.parse(e))}function ln(){return Zn(),T.useEffect(()=>{window.history.scrollRestoration="manual"},[]),Se(T.useCallback(()=>{window.history.scrollRestoration="auto"},[])),T.createElement("script",{dangerouslySetInnerHTML:{__html:`
          let STORAGE_KEY = ${JSON.stringify(it)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `}})}var on=!1;function Zn(){let e=U(),t=He(),r=T.useRef(!1);T.useEffect(()=>{t.submission&&(r.current=!0)},[t]),T.useEffect(()=>{t.location&&($e[e.key]=window.scrollY)},[t,e]),Se(T.useCallback(()=>{sessionStorage.setItem(it,JSON.stringify($e))},[])),typeof document<"u"&&T.useLayoutEffect(()=>{if(!on){on=!0;return}let n=$e[e.key];if(n){window.scrollTo(0,n);return}if(e.hash){let a=document.querySelector(e.hash);if(a){a.scrollIntoView();return}}if(r.current===!0){r.current=!1;return}window.scrollTo(0,0)},[e]),T.useEffect(()=>{t.submission&&(r.current=!0)},[t])}R();export{je as a,en as b,tn as c,nn as d,rn as e,an as f,ln as g};
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
