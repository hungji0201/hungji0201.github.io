(function(e){function t(t){for(var c,a,r=t[0],i=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(c=!1)}c&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o={app:0},s=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1925549c":"2ee2480a","chunk-2d0ab565":"d8525ff6","chunk-2d0b37ce":"0d98f7c9","chunk-2d2261a6":"7f7a6504","chunk-2d22c48a":"6e1b2218","chunk-1fce6f64":"da2bed81","chunk-1fd12c32":"492b8db9","chunk-1fd2a00a":"3a9b1632","chunk-2d0d63f1":"a2184a2d","chunk-2d0e5e97":"31aa271b","chunk-2d2086b7":"31ca74c4","chunk-392abdfc":"524e9a2c","chunk-1fa5844e":"06d3b43e","chunk-36719fae":"51c639bc","chunk-3cb0f418":"420af16c","chunk-41f67dee":"f422ce77","chunk-564227a1":"127bb9da","chunk-583bf2d8":"f2f6266f","chunk-5f949cc9":"e4118940","chunk-74ff2292":"e347f81e","chunk-7f2b458e":"39fce5c0"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-392abdfc":1,"chunk-36719fae":1,"chunk-583bf2d8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-1925549c":"31d6cfe0","chunk-2d0ab565":"31d6cfe0","chunk-2d0b37ce":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22c48a":"31d6cfe0","chunk-1fce6f64":"31d6cfe0","chunk-1fd12c32":"31d6cfe0","chunk-1fd2a00a":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-392abdfc":"3b439e06","chunk-1fa5844e":"31d6cfe0","chunk-36719fae":"a21bf7b2","chunk-3cb0f418":"31d6cfe0","chunk-41f67dee":"31d6cfe0","chunk-564227a1":"31d6cfe0","chunk-583bf2d8":"4915ed73","chunk-5f949cc9":"31d6cfe0","chunk-74ff2292":"31d6cfe0","chunk-7f2b458e":"31d6cfe0"}[e]+".css",o=i.p+c,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===c||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[e],b.parentNode.removeChild(b),n(s)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/liupeanut/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b36":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-less",use:"icon-less-usage",viewBox:"0 0 15 15",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="icon-less">\r\n<style type="text/css">\r\n\t#icon-less .value-button_st0{fill:none;stroke-miterlimit:10;}\r\n</style>\r\n<line class="value-button_st0" x1="0" y1="7.5" x2="15" y2="7.5" />\r\n</symbol>'});s.a.add(r);t["default"]=r},2095:function(e,t,n){"use strict";n("da86")},2349:function(e,t,n){var c={"./add.svg":"76c1","./cart.svg":"5d2e","./less.svg":"1b36"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=o,e.exports=a,a.id="2349"},"3abd":function(e,t,n){"use strict";n("88cd")},"459d":function(e,t,n){"use strict";var c=n("7a23");const a={class:"toast-container position-fixed p-3 end-0"};function o(e,t,n,o,s,r){const i=Object(c["R"])("Toast");return Object(c["I"])(),Object(c["h"])("div",a,[(Object(c["I"])(!0),Object(c["h"])(c["a"],null,Object(c["P"])(s.messages,(e,t)=>(Object(c["I"])(),Object(c["f"])(i,{key:t,msg:e},null,8,["msg"]))),128))])}n("14d9");const s={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},r={class:"toast-header"},i={class:"me-auto"},l=Object(c["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),u={key:0,class:"toast-body"};function d(e,t,n,a,o,d){return Object(c["I"])(),Object(c["h"])("div",s,[Object(c["i"])("div",r,[Object(c["i"])("span",{class:Object(c["x"])(["bg-"+n.msg.style,"p-2 rounded me-2 d-inline-block"])},null,2),Object(c["i"])("strong",i,Object(c["U"])(n.msg.title),1),l]),n.msg.content?(Object(c["I"])(),Object(c["h"])("div",u,Object(c["U"])(n.msg.content),1)):Object(c["g"])("",!0)],512)}var b=n("6ea1"),h=n.n(b),f={name:"Toast",props:["msg"],mounted(){const e=this.$refs.toast,t=new h.a(e,{delay:3e3});t.show()}},p=n("6b0d"),m=n.n(p);const g=m()(f,[["render",d]]);var j=g,O={components:{Toast:j},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",e=>{const{style:t="success",title:n,content:c}=e;this.messages.push({style:t,title:n,content:c})})}};const v=m()(O,[["render",o]]);t["a"]=v},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("cee4"),o=n("130e"),s=n("8a14");n("fe26"),n("cd74"),n("efec");const r=["xlink:href","fill"];function i(e,t,n,a,o,s){return Object(c["I"])(),Object(c["h"])("svg",Object(c["v"])({class:a.svgClass},e.$attrs),[Object(c["i"])("use",{"xlink:href":a.iconName,fill:n.color},null,8,r)],16)}var l=n("5c40"),u={props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const t=Object(l["f"])(()=>"#icon-"+e.name),n=Object(l["f"])(()=>e.name?"svg-icon icon-"+e.name:"svg-icon");return{iconName:t,svgClass:n}}},d=(n("3abd"),n("6b0d")),b=n.n(d);const h=b()(u,[["render",i]]);var f=h,p=n("cffa"),m=n("1dac"),g=n("7bb1"),j=n("3aa8"),O=n("cbdf"),v=n("9457");function k(e,t){const n=Object(c["R"])("router-view");return Object(c["I"])(),Object(c["f"])(n)}n("2095");const w={},y=b()(w,[["render",k]]);var x=y,P=n("6605");const _={class:"user",style:{background:"url('./img/bg.jpg')"}};function C(e,t,n,a,o,s){const r=Object(c["R"])("ToastMessage"),i=Object(c["R"])("Header"),l=Object(c["R"])("router-view"),u=Object(c["R"])("Footer");return Object(c["I"])(),Object(c["h"])("div",_,[Object(c["m"])(r),Object(c["m"])(i),Object(c["m"])(l),Object(c["m"])(u)])}var T=n("71c2"),I=n("fd2d"),S=n("cfb9"),N=n("459d"),E={name:"Home",components:{Header:T["a"],Footer:I["a"],ToastMessage:N["a"]},provide(){return{emitter:S["a"]}}};const L=b()(E,[["render",C]]);var M=L;const U=[{path:"/",component:M,children:[{name:"",path:"",component:()=>Promise.all([n.e("chunk-392abdfc"),n.e("chunk-36719fae")]).then(n.bind(null,"bb51"))},{name:"Prd",path:"products/:categoryName?",component:()=>n.e("chunk-7f2b458e").then(n.bind(null,"3e2b"))},{name:"PrdDetail",path:"product/:productId",component:()=>Promise.all([n.e("chunk-392abdfc"),n.e("chunk-1fa5844e")]).then(n.bind(null,"c98b"))},{name:"News",path:"news",component:()=>n.e("chunk-74ff2292").then(n.bind(null,"06fc"))},{name:"NewsDetail",path:"news/:newsId",component:()=>n.e("chunk-3cb0f418").then(n.bind(null,"56ef5"))},{name:"Login",path:"login",component:()=>n.e("chunk-41f67dee").then(n.bind(null,"43f8"))},{name:"Register",path:"register",component:()=>n.e("chunk-5f949cc9").then(n.bind(null,"5d67"))},{name:"Forget",path:"forget",component:()=>n.e("chunk-564227a1").then(n.bind(null,"4447"))},{name:"About",path:"about",component:()=>n.e("chunk-1fd2a00a").then(n.bind(null,"0d5c"))},{name:"Notice",path:"notice",component:()=>n.e("chunk-1fce6f64").then(n.bind(null,"691c"))},{name:"Cart",path:"cart",component:()=>n.e("chunk-583bf2d8").then(n.bind(null,"76db"))},{name:"Completed",path:"completed/:orderId",component:()=>n.e("chunk-1fd12c32").then(n.bind(null,"37f0"))}]},{path:"/login_",component:()=>n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))},{path:"/dashboard",component:()=>n.e("chunk-2d0d63f1").then(n.bind(null,"7277")),children:[{path:"products",component:()=>Promise.all([n.e("chunk-1925549c"),n.e("chunk-2d2261a6")]).then(n.bind(null,"e6dc"))},{path:"orders",component:()=>Promise.all([n.e("chunk-1925549c"),n.e("chunk-2d0ab565")]).then(n.bind(null,"159d"))},{path:"coupons",component:()=>Promise.all([n.e("chunk-1925549c"),n.e("chunk-2d22c48a")]).then(n.bind(null,"f329"))},{path:"articles",component:()=>Promise.all([n.e("chunk-1925549c"),n.e("chunk-2d0b37ce")]).then(n.bind(null,"291b"))}]},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}],D=Object(P["a"])({history:Object(P["b"])(),linkActiveClass:"active",routes:U,scrollBehavior(e,t,n){return new Promise((t,n)=>{"Prd"!==e.name&&setTimeout(()=>{t({left:0,top:0,behavior:"smooth"})},0)})}});var $=D;function A(e){const t=parseInt(e,10);return""+t.toFixed(0).replace(/./g,(e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?(", "+e).replace(/\s/g,""):e)}function B(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var F=function(e,t="更新"){if(e.data.success)S["a"].emit("push-message",{style:"success",title:t+"成功"});else{const n="string"===typeof e.data.message?[e.data.message]:e.data.message;S["a"].emit("push-message",{style:"danger",title:t+"失敗",content:n.join("、")})}};p["a"].registerPlugin(m["a"]);const R=Object(c["e"])(x);R.config.globalProperties.$filters={currency:A,date:B},R.config.globalProperties.$httpMessage=F,Object.keys(j["a"]).forEach(e=>{Object(g["e"])(e,j["a"][e])}),Object(g["d"])({generateMessage:Object(O["a"])({zh_TW:v}),validateOnInput:!0}),Object(O["b"])("zh_TW"),R.use(o["a"],a["a"]),R.use($),R.component("svg-icon",f),R.component("Loading",s["a"]),R.mixin({created(){this.gsap=p["a"],this.ScrollTrigger=m["a"]}}),R.component("Form",g["c"]),R.component("Field",g["b"]),R.component("ErrorMessage",g["a"]),R.mount("#app")},"5d2e":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-cart",use:"icon-cart-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" id="icon-cart">\r\n<g>\r\n\t<circle class="st0" cx="426.7" cy="469.3" r="42.7" />\r\n\t<path class="st0" d="M184.7,330.3c1.5-6.1,7-10.3,13.3-10.3h228.7c9.2,0,17.3-5.9,20.2-14.6l56.9-170.7\r\n\t\tc4.6-13.8-5.7-28.1-20.2-28.1H139.8c-6.4,0-12-4.1-14-10.1l-20.2-60.6c-2.9-8.7-11.1-14.6-20.2-14.6h-64C9.6,21.3,0,30.9,0,42.7\r\n\t\tC0,54.4,9.6,64,21.3,64h38c6.4,0,12,4.1,14,10.1l70.3,211c3.1,9.4,3.5,19.5,1.1,29l-5.8,23.2c-8.5,34,18,67.9,53,67.9h256\r\n\t\tc11.8,0,21.3-9.6,21.3-21.3s-9.6-21.3-21.3-21.3H192c-8.3,0-13.6-6.8-11.6-14.9L184.7,330.3z M242,221.4c3.2-3.8,8.9-4.3,12.7-1\r\n\t\tl49.7,42.1V148.9c0-5,4-9,9-9s9,4,9,9v113.6l49.7-42.1c3.8-3.2,9.5-2.7,12.7,1c3.2,3.8,2.7,9.5-1,12.7l-64.5,54.6\r\n\t\tc-0.3,0.2-0.5,0.4-0.8,0.6c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.2-0.7,0.4-1,0.6c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.2-0.8,0.3\r\n\t\tc-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.2,0-0.3,0\r\n\t\tc-0.3,0-0.6,0-0.9,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c-0.3,0-0.6,0-0.9,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4-0.1-0.6-0.1\r\n\t\tc-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.5-0.2-0.8-0.3c0,0,0,0-0.1,0c0,0,0,0,0,0\r\n\t\tc-0.3-0.2-0.7-0.4-1-0.6c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.2-0.6-0.4-0.8-0.6l-64.5-54.6C239.3,230.9,238.8,225.2,242,221.4z" />\r\n\t\r\n\t\t<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -281.8817 258.1441)" class="st0" cx="170.7" cy="469.3" rx="42.7" ry="42.7" />\r\n</g>\r\n</symbol>'});s.a.add(r);t["default"]=r},"71c2":function(e,t,n){"use strict";var c=n("7a23"),a=n("9b19"),o=n.n(a);const s={ref:"header",style:{"background-image":"url('./img/bg.jpg')"}},r={class:"row wrap align-items-center"},i={class:"col"},l=["src"],u={class:"mobile-sub wsmenu-list",itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"},d=["onClick"],b=Object(c["i"])("i",{class:"wsmenu-arrow fa fa-angle-down d-inline-flex d-xl-none"},null,-1),h=[b],f=["href"],p={class:"col-auto logo_out"},m=Object(c["i"])("img",{class:"svg",src:o.a,alt:""},null,-1),g=Object(c["i"])("span",null,null,-1),j=[g],O={class:"col d-flex justify-content-end align-items-center position-relative"},v={class:"dropdown cart_box pe-2 pe-md-3 pe-xl-0"},k={id:"cart",ref:"dropdown","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false"},w={id:"cartInfo-wrap",class:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenuClickableInside"},y={class:"wrapper"},x={class:"cartList"},P={class:"img"},_=["src"],C={class:"quantity"},T={class:"price"},I={class:"total"},S={key:1,class:"text-center"},N=Object(c["i"])("h6",{class:"my-4"},"購物車無商品!",-1);function E(e,t,n,a,o,b){const g=Object(c["R"])("router-link"),E=Object(c["R"])("svg-icon");return Object(c["I"])(),Object(c["h"])("header",s,[Object(c["i"])("div",{class:Object(c["x"])(["wsmenucontent overlapblackbg",{menuopen:o.menuState,menuclose:!o.menuState}]),onClick:t[0]||(t[0]=Object(c["hb"])(e=>o.menuState=!o.menuState,["prevent"]))},null,2),Object(c["i"])("div",r,[Object(c["i"])("div",i,[Object(c["i"])("nav",{class:Object(c["x"])(["wsmenu slideLeft",{menuopen:o.menuState,menuclose:!o.menuState}]),style:{"background-image":"url('./img/bg.jpg')"}},[Object(c["m"])(g,{to:"/login",class:"login_btn d-flex d-xl-none"},{default:Object(c["eb"])(()=>[Object(c["i"])("img",{src:"./img/user.svg",alt:"",class:"me-2"},null,8,l),Object(c["l"])(" 會員登入 ")]),_:1}),Object(c["i"])("ul",u,[(Object(c["I"])(!0),Object(c["h"])(c["a"],null,Object(c["P"])(o.items,e=>(Object(c["I"])(),Object(c["h"])("li",{class:Object(c["x"])({active:e.isOpen}),key:e},[e.child?(Object(c["I"])(),Object(c["h"])("span",{key:0,class:"wsmenu-click",onClick:Object(c["hb"])(t=>e.isOpen=!e.isOpen,["prevent"])},h,8,d)):Object(c["g"])("",!0),e.otherLink?(Object(c["I"])(),Object(c["h"])("a",{key:2,href:e.href,class:"nav-link",target:"_blank"},Object(c["U"])(e.title),9,f)):(Object(c["I"])(),Object(c["f"])(g,{key:1,class:"nav-link",to:e.href},{default:Object(c["eb"])(()=>[Object(c["l"])(Object(c["U"])(e.title),1)]),_:2},1032,["to"]))],2))),128))])],2)]),Object(c["i"])("div",p,[Object(c["i"])("div",null,[Object(c["m"])(g,{to:"/",class:"logo"},{default:Object(c["eb"])(()=>[m]),_:1})]),Object(c["i"])("a",{id:"navToggle",class:Object(c["x"])(["animated-arrow slideLeft d-xl-none",{menuopen:o.menuState,menuclose:!o.menuState}]),onClick:t[1]||(t[1]=Object(c["hb"])(e=>o.menuState=!o.menuState,["prevent"]))},j,2)]),Object(c["i"])("div",O,[Object(c["m"])(g,{to:"/login",class:"header_a d-none d-xl-inline-block me-4 position-relative"},{default:Object(c["eb"])(()=>[Object(c["l"])(" 會員登入 ")]),_:1}),Object(c["i"])("div",v,[Object(c["i"])("div",k,[Object(c["i"])("span",null,Object(c["U"])(o.cartNum),1),Object(c["m"])(E,{name:"cart"})],512),Object(c["i"])("div",w,[Object(c["i"])("div",y,[0!=o.cartNum?(Object(c["I"])(),Object(c["h"])(c["a"],{key:0},[Object(c["i"])("div",x,[(Object(c["I"])(!0),Object(c["h"])(c["a"],null,Object(c["P"])(o.cart.carts,e=>(Object(c["I"])(),Object(c["h"])("div",{class:"row_",key:e.id},[Object(c["i"])("div",P,[Object(c["i"])("img",{src:e.product.imageUrl,alt:""},null,8,_),Object(c["i"])("span",null,Object(c["U"])(e.product.title),1)]),Object(c["i"])("div",C,"數量 : "+Object(c["U"])(e.qty),1),Object(c["i"])("div",T,"$ "+Object(c["U"])(e.total),1)]))),128))]),Object(c["i"])("div",I,[Object(c["i"])("span",null,"總計 : $ "+Object(c["U"])(o.cart.final_total),1),Object(c["i"])("a",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=Object(c["hb"])((...e)=>b.goCartPage&&b.goCartPage(...e),["prevent"]))},"結帳")])],64)):(Object(c["I"])(),Object(c["h"])("div",S,[N,Object(c["i"])("a",{href:"#",class:"btn btn-primary",onClick:t[3]||(t[3]=Object(c["hb"])((...e)=>b.goPrd&&b.goPrd(...e),["prevent"]))},"繼續選購")]))])])])])])],512)}n("14d9");var L=n("8147"),M=n.n(L),U={data(){return{menuState:!1,items:[],isActive:!1,dropdown:{},cart:[],cartNum:0}},inject:["emitter"],methods:{getData(){const e="https://vue3-course-api.hexschool.io/api/hexacervue3/cart";this.$http.get(e).then(e=>{if(e.data.success){this.cart=e.data.data;let t=0;this.cart.carts.forEach((function(e){t+=e.qty})),this.cartNum=t}})},goCartPage(){this.dropdown.hide(),this.$router.push("/cart")},goPrd(){this.dropdown.hide(),this.$router.push("/products")}},mounted(){const e=this,t="./json/menu.json";this.$http.get(t).then(t=>{e.items=t.data}),this.dropdown=new M.a(this.$refs.dropdown),this.getData()},watch:{$route(){!0===this.menuState&&(this.menuState=!1)}},created(){this.emitter.on("getData",()=>{this.getData()})}},D=n("6b0d"),$=n.n(D);const A=$()(U,[["render",E]]);t["a"]=A},"76c1":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-add",use:"icon-add-usage",viewBox:"0 0 15 15",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="icon-add">\r\n<style type="text/css">\r\n\t#icon-add .value-button_st0{fill:none;stroke-miterlimit:10;}\r\n</style>\r\n<line class="value-button_st0" x1="0" y1="7.5" x2="15" y2="7.5" />\r\n<line class="value-button_st0" x1="7.5" y1="15" x2="7.5" y2="0" />\r\n</symbol>'});s.a.add(r);t["default"]=r},"88cd":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.d3b3a62c.svg"},cfb9:function(e,t,n){"use strict";var c=n("1344");const a=Object(c["a"])();t["a"]=a},da86:function(e,t,n){},efec:function(e,t,n){const c=e=>e.keys().map(e),a=n("2349");c(a)},fd2d:function(e,t,n){"use strict";var c=n("7a23"),a=n("9b19"),o=n.n(a);const s=Object(c["k"])('<footer class="footer text-center py-5" style="background-image:url(&#39;./img/bg.jpg&#39;);"><div class="container"><div class="row align-items-center justify-content-between"><span class="footer_logo mb-3 col-xl col-lg-3 text-lg-start"><div class="ps-lg-5"><img src="'+o.a+'" alt="" class="svg"></div></span><div class="mb-3 col-xl-auto col-lg"><span class="d-block d-lg-inline-block me-lg-4"> 宜蘭縣冬山鄉大進村大進路466號 </span><span class="d-block d-sm-inline-block me-sm-3"> 訂購專線 : (03)961-3676 </span><span class="d-block d-sm-inline-block"> 傳真 : (03)951-2752 </span></div></div><div class="copy-right"> Copyright © 2022 Full Foods Co., Ltd. All right reserved. </div></div></footer>',1),r=Object(c["i"])("span",{class:"topicon"},"TOP",-1),i=[r];function l(e,t,n,a,o,r){return Object(c["I"])(),Object(c["h"])(c["a"],null,[s,Object(c["i"])("div",{class:Object(c["x"])(["goTop iconfont ml-gotop",o.isTop?"goTopAfter":""]),onClick:t[0]||(t[0]=e=>r.goTop())},i,2)],64)}var u={data(){return{scrollNum:0,isTop:!1}},methods:{goTop(){document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;this.scrollNum=e,this.isTop=e>=800})}},d=n("6b0d"),b=n.n(d);const h=b()(u,[["render",l]]);t["a"]=h}});
//# sourceMappingURL=app.edca459e.js.map