(function(e){function t(t){for(var n,c,s=t[0],o=t[1],l=t[2],b=0,h=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-22efa0fa":"6000f0b8"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-22efa0fa":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-22efa0fa":"5c4b267c"}[e]+".css",r=o.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],b=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(b===n||b===r))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],b=l.getAttribute("data-href");if(b===n||b===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete c[e],u.parentNode.removeChild(u),a(i)},u.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(u)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var l,b=document.createElement("script");b.charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.src=s(e);var h=new Error;l=function(t){b.onerror=b.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",h.name="ChunkLoadError",h.type=n,h.request=c,a[1](h)}r[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:b})}),12e4);b.onerror=b.onload=l,document.head.appendChild(b)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],b=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var u=b;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2da6":function(e,t,a){},"313a":function(e,t,a){},"55cf":function(e,t,a){"use strict";a("2da6")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=a("cee4"),r=a("130e"),i=a("8a14"),s=(a("fe26"),a("f5af")),o=a.n(s);a("e829");function l(e,t,a,c,r,i){const s=Object(n["E"])("router-link"),o=Object(n["E"])("router-view");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("header",{class:Object(n["p"])(["fixed-top p-3",{"top-hide":r.direction}])},[Object(n["j"])(s,{to:"/"},{default:Object(n["N"])(()=>[Object(n["i"])(" HUNG JI ")]),_:1})],2),Object(n["h"])("div",null,[Object(n["j"])(o)]),Object(n["h"])("div",{class:Object(n["p"])(["goTop btn btn-primary",r.positionY>=500?"goTopAfter":""]),onClick:t[0]||(t[0]=(...e)=>i.goTop&&i.goTop(...e))},"TOP",2)],64)}var b={data(){return{direction:!1,positionY:0}},methods:{handleScroll(){const e=window.scrollY;e>this.positionY?this.direction=!0:this.direction=!1,this.positionY=e},goTop(){document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},h=(a("bfd9"),a("6b0d")),u=a.n(h);const d=u()(b,[["render",l]]);var j=d,p=a("6605");const f=e=>(Object(n["y"])("data-v-d072bbe2"),e=e(),Object(n["w"])(),e),O={class:"home"},g={ref:"banner",class:"banner_page position-relative mb-5"},m=f(()=>Object(n["h"])("div",{class:"container h-100 position-relative z-index-1"},[Object(n["h"])("div",{class:"row h-100 mx-0 justify-content-center align-items-center overflow-hidden"},[Object(n["h"])("div",{class:"col-auto text-center box"},[Object(n["h"])("h2",{class:"page-title"},"作品集"),Object(n["h"])("span",null,"works")])])],-1)),v={class:"container"},y={class:"row justify-content-md-between justify-content-center align-items-center mb-4"},k={class:"nav nav-pills col-auto mb-3 mx-n2"},w={class:"nav-item m-2"},P={class:"nav-item m-2"},x={class:"nav-item m-2"},S={class:"col-auto mb-3"},E={class:"position-relative d-flex align-items-center"},N={class:"row works-list mb-4 overflow-hidden",ref:"works_list"},_={key:0,class:"text-end mb-3","data-aos":"fade-left","data-aos-duration":"2500"},L=["href"],C={class:"img mb-2"},T=["src"],H={class:"info"},$={class:"mb-2"},Y=f(()=>Object(n["h"])("div",{class:"icon"},[Object(n["h"])("i",{class:"bi bi-link-45deg"})],-1)),A={class:"title"},D={key:0,class:"text-center"},I={key:1,class:"text-end mb-3","data-aos":"fade-left","data-aos-duration":"2500"},B=["href"],q={class:"img mb-2"},M=["src"],J={class:"info"},U={class:"mb-2"},K=f(()=>Object(n["h"])("div",{class:"icon"},[Object(n["h"])("i",{class:"bi bi-link-45deg"})],-1)),z={class:"title"},F={key:0,"aria-label":"Page navigation"},G={class:"pagination justify-content-center mb-5"},V=f(()=>Object(n["h"])("i",{class:"bi bi-chevron-left"},null,-1)),X=[V],Q=["onClick"],R=f(()=>Object(n["h"])("i",{class:"bi bi-chevron-right"},null,-1)),W=[R];function Z(e,t,c,r,i,s){const o=Object(n["E"])("loading"),l=Object(n["E"])("router-link");return Object(n["v"])(),Object(n["g"])("div",O,[Object(n["j"])(o,{active:i.isLoading},null,8,["active"]),Object(n["h"])("section",g,[Object(n["h"])("div",{class:"top_img parallax","data-depth":"0.40",style:Object(n["q"])({"background-image":`url(${a("d1b4")})`}),ref:"parallax"},null,4),m],512),Object(n["h"])("div",v,[Object(n["h"])("div",y,[Object(n["h"])("ul",k,[Object(n["h"])("li",w,[Object(n["j"])(l,{to:"/",class:Object(n["p"])(["nav-link",{active:""===e.$route.params.categoryName}])},{default:Object(n["N"])(()=>[Object(n["i"])(" 全部 ")]),_:1},8,["class"])]),Object(n["h"])("li",P,[Object(n["j"])(l,{to:"/Business",class:Object(n["p"])(["nav-link",{active:"Business"===e.$route.params.categoryName}])},{default:Object(n["N"])(()=>[Object(n["i"])(" 企業網站 ")]),_:1},8,["class"])]),Object(n["h"])("li",x,[Object(n["j"])(l,{to:"/Shop",class:Object(n["p"])(["nav-link",{active:"Shop"===e.$route.params.categoryName}])},{default:Object(n["N"])(()=>[Object(n["i"])(" 電商網站 ")]),_:1},8,["class"])])]),Object(n["h"])("div",S,[Object(n["h"])("div",E,[Object(n["O"])(Object(n["h"])("input",{type:"text",placeholder:"search","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e)},null,512),[[n["K"],i.search]]),0!==i.search.length?(Object(n["v"])(),Object(n["g"])("a",{key:0,href:"#",class:"clear",onClick:t[1]||(t[1]=Object(n["P"])((...e)=>s.clearSearch&&s.clearSearch(...e),["prevent"]))},"X")):Object(n["f"])("",!0)])])]),Object(n["h"])("div",N,[0===i.search.length?(Object(n["v"])(),Object(n["g"])(n["a"],{key:0},[s.filterSearch.length>0?(Object(n["v"])(),Object(n["g"])("div",_,"Item: "+Object(n["H"])(s.filterSearch.length),1)):Object(n["f"])("",!0),(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(s.filterData[i.currentPage-1],e=>(Object(n["v"])(),Object(n["g"])("div",{class:"col-lg-4 col-sm-6 mb-4",key:e,"data-aos":"fade-up","data-aos-duration":"2000"},[Object(n["h"])("a",{href:e.link,target:"_blank"},[Object(n["h"])("div",C,[Object(n["h"])("img",{src:"./img/"+e.img,alt:"",class:"w-100"},null,8,T),Object(n["h"])("div",H,[Object(n["h"])("div",$,Object(n["H"])(e.info),1),Y])]),Object(n["h"])("div",A,[Object(n["h"])("span",null,Object(n["H"])(e.name),1)])],8,L)]))),128))],64)):(Object(n["v"])(),Object(n["g"])(n["a"],{key:1},[0===s.filterSearch.length?(Object(n["v"])(),Object(n["g"])("div",D," 無符合資料 ! ")):(Object(n["v"])(),Object(n["g"])("div",I,"Item: "+Object(n["H"])(s.filterSearch.length),1)),(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(s.filterSearch,e=>(Object(n["v"])(),Object(n["g"])("div",{class:"col-lg-4 col-sm-6 mb-4",key:e,"data-aos":"fade-up","data-aos-duration":"2000"},[Object(n["h"])("a",{href:e.link,target:"_blank"},[Object(n["h"])("div",q,[Object(n["h"])("img",{src:"./img/"+e.img,alt:"",class:"w-100"},null,8,M),Object(n["h"])("div",J,[Object(n["h"])("div",U,Object(n["H"])(e.info),1),K])]),Object(n["h"])("div",z,[Object(n["h"])("span",null,Object(n["H"])(e.name),1)])],8,B)]))),128))],64))],512),0===i.search.length?(Object(n["v"])(),Object(n["g"])("nav",F,[Object(n["h"])("ul",G,[Object(n["h"])("li",{class:Object(n["p"])(["page-item",{disabled:1==i.currentPage}])},[Object(n["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[2]||(t[2]=Object(n["P"])(e=>s.changPage(i.currentPage-1),["prevent"]))},X)],2),(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(s.filterData.length,e=>(Object(n["v"])(),Object(n["g"])("li",{class:"page-item",key:e},[Object(n["h"])("a",{class:Object(n["p"])(["page-link",{active:i.currentPage===e}]),href:"#",onClick:Object(n["P"])(t=>s.changPage(e),["prevent"])},Object(n["H"])(e),11,Q)]))),128)),Object(n["h"])("li",{class:Object(n["p"])(["page-item",{disabled:i.currentPage==s.filterData.length}])},[Object(n["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[3]||(t[3]=Object(n["P"])(e=>s.changPage(i.currentPage+1),["prevent"]))},W)],2)])])):Object(n["f"])("",!0)])])}a("14d9");var ee={name:"Home",data(){return{banner:null,isLoading:!1,parallaxY:null,list:[],type:"",currentPage:1,search:""}},watch:{filterData(){this.currentPage=1}},computed:{filterData(){const e=this;if(""===this.$route.params.categoryName){const e=[];return this.list.forEach((t,a)=>{a%12===0&&e.push([]);const n=parseInt(a/12);e[n].push(t)}),e}{var t=[];this.list.forEach((function(a){a.type===e.$route.params.categoryName&&t.push(a)}));const a=[];return t.forEach((e,t)=>{t%12===0&&a.push([]);const n=parseInt(t/12);a[n].push(e)}),a}},filterSearch(){const e=this;return this.list.filter(t=>t.type===e.$route.params.categoryName||""===this.$route.params.categoryName?t.name.toLowerCase().match(this.search.toLowerCase()):void 0)}},mounted(){this.getList(),this.banner=this.$refs.banner.clientHeight,window.addEventListener("scroll",this.handleScroll)},methods:{getList(){this.isLoading=!0;const e="./json/db.json";this.$http.get(e).then(e=>{this.isLoading=!1,this.list=e.data.data.sort((function(e,t){return e.info<t.info?1:-1}))})},changPage(e){this.isLoading=!0,this.currentPage=e,setTimeout(()=>{document.documentElement.scrollTop=this.banner,this.isLoading=!1},500)},clearSearch(){this.search=""},handleScroll(){const e=window.pageYOffset,t=document.querySelector(".parallax"),a=Number(t.dataset.depth);this.parallaxY=e*a,this.parallaxY<=60&&(t.style.transform=`translateY(-${e*a}px)`)}}};a("55cf");const te=u()(ee,[["render",Z],["__scopeId","data-v-d072bbe2"]]);var ae=te;const ne=[{path:"/:categoryName?",name:"Home",component:ae},{path:"/board",name:"board",component:()=>a.e("chunk-22efa0fa").then(a.bind(null,"5d6d"))}],ce=Object(p["a"])({history:Object(p["b"])(),routes:ne,scrollBehavior(e,t,a){return new Promise((t,a)=>{"Home"!==e.name&&setTimeout(()=>{t({left:0,top:0,behavior:"smooth"})},0)})}});var re=ce;const ie=Object(n["d"])(j);ie.use(r["a"],c["a"]),ie.use(re),ie.component("Loading",i["a"]),ie.mixin({created(){o.a.init({})}}),ie.mount("#app")},bfd9:function(e,t,a){"use strict";a("313a")},d1b4:function(e,t,a){e.exports=a.p+"img/bg.923e003e.jpg"}});
//# sourceMappingURL=app.1d1c7da5.js.map