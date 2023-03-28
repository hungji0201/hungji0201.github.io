(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2261a6"],{e6dc:function(t,e,c){"use strict";c.r(e);var l=c("7a23");const i={class:"d-flex justify-content-end pt-4"},o={class:"table mt-4"},a=Object(l["i"])("thead",null,[Object(l["i"])("tr",null,[Object(l["i"])("th",{width:"120"},"分類"),Object(l["i"])("th",null,"產品名稱"),Object(l["i"])("th",{width:"120"},"原價"),Object(l["i"])("th",{width:"120"},"售價"),Object(l["i"])("th",{width:"100"},"是否啟用"),Object(l["i"])("th",{width:"200"},"編輯")])],-1),s={class:"text-right"},d={class:"text-right"},r={key:0,class:"text-success"},n={key:1,class:"text-muted"},b={class:"btn-group"},u=["onClick"],p=["onClick"];function m(t,e,c,m,h,j){const O=Object(l["R"])("loading"),f=Object(l["R"])("ProductsModal"),g=Object(l["R"])("DeleteModal"),P=Object(l["R"])("Pagination");return Object(l["I"])(),Object(l["h"])(l["a"],null,[Object(l["m"])(O,{active:h.isLoading},null,8,["active"]),Object(l["i"])("div",null,[Object(l["i"])("div",i,[Object(l["i"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=Object(l["hb"])(t=>j.openModal(!0),["prevent"]))},"新增產品")]),Object(l["i"])("table",o,[a,Object(l["i"])("tbody",null,[(Object(l["I"])(!0),Object(l["h"])(l["a"],null,Object(l["P"])(h.products,e=>(Object(l["I"])(),Object(l["h"])("tr",{key:e.id},[Object(l["i"])("td",null,Object(l["U"])(e.category),1),Object(l["i"])("td",null,Object(l["U"])(e.title),1),Object(l["i"])("td",s,Object(l["U"])(t.$filters.currency(e.origin_price)),1),Object(l["i"])("td",d,Object(l["U"])(t.$filters.currency(e.price)),1),Object(l["i"])("td",null,[e.is_enabled?(Object(l["I"])(),Object(l["h"])("span",r,"啟用")):(Object(l["I"])(),Object(l["h"])("span",n,"未啟用"))]),Object(l["i"])("td",null,[Object(l["i"])("div",b,[Object(l["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>j.openModal(!1,e)},"編輯",8,u),Object(l["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>j.openDeleteModal(e)},"刪除",8,p)])])]))),128))])]),Object(l["m"])(f,{ref:"ProductsModal",product:h.tempProduct,onUpdateProduct:j.updateProduct},null,8,["product","onUpdateProduct"]),Object(l["m"])(g,{ref:"DeleteModal",item:h.tempProduct,onDelItem:j.deleteProduct},null,8,["item","onDelItem"]),Object(l["m"])(P,{pages:h.pagination,onChangPage:j.changPage},null,8,["pages","onChangPage"])])],64)}const h={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},j={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},f=Object(l["i"])("div",{class:"modal-header bg-dark text-white"},[Object(l["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(l["i"])("span",null,"產品資訊")]),Object(l["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},P={class:"row"},v={class:"col-sm-4"},y={class:"mb-3"},x=Object(l["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},U=Object(l["i"])("label",{for:"customFile",class:"form-label"},[Object(l["l"])("或 上傳圖片 "),Object(l["i"])("div",{class:"spinner-border text-secondary",role:"status"},[Object(l["i"])("span",{class:"visually-hidden"},"Loading...")])],-1),w=["src"],k={key:0},$={class:"row"},C={class:"img position-relative"},I=["src"],D=["onClick"],_=Object(l["i"])("i",{class:"bi bi-trash3"},null,-1),V=[_],Z={class:"d-flex upload_btn"},F=Object(l["i"])("label",{class:"button",for:"fileMore"},[Object(l["i"])("i",{class:"bi bi-card-image mb-2"}),Object(l["i"])("div",null,[Object(l["l"])("上傳其他照片"),Object(l["i"])("br"),Object(l["l"])("(最多5張)")])],-1),L={class:"col-sm-8"},R={class:"mb-3"},N=Object(l["i"])("label",{for:"title",class:"form-label"},"標題",-1),J={class:"row gx-2"},Y={class:"mb-3 col-md-6"},q=Object(l["i"])("label",{for:"category",class:"form-label"},"分類",-1),z={class:"mb-3 col-md-6"},A=Object(l["i"])("label",{for:"price",class:"form-label"},"單位",-1),B={class:"row gx-2"},E={class:"mb-3 col-md-6"},G=Object(l["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),H={class:"mb-3 col-md-6"},K=Object(l["i"])("label",{for:"price",class:"form-label"},"售價",-1),Q=Object(l["i"])("hr",null,null,-1),S={class:"mb-3"},T=Object(l["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),W={class:"mb-3"},X=Object(l["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),tt={class:"mb-3"},et={class:"form-check text-start"},ct=Object(l["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),lt={class:"modal-footer"},it=Object(l["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ot(t,e,c,i,o,a){return Object(l["I"])(),Object(l["h"])("div",h,[Object(l["i"])("div",j,[Object(l["i"])("div",O,[f,Object(l["i"])("div",g,[Object(l["i"])("div",P,[Object(l["i"])("div",v,[Object(l["i"])("div",y,[x,Object(l["fb"])(Object(l["i"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>o.tempProduct.imageUrl=t)},null,512),[[l["Z"],o.tempProduct.imageUrl]])]),Object(l["i"])("div",M,[U,Object(l["i"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>a.uploadFile&&a.uploadFile(...t))},null,544)]),Object(l["i"])("img",{class:"img-fluid mb-3",src:o.tempProduct.imageUrl,alt:""},null,8,w),o.tempProduct.imagesUrl?(Object(l["I"])(),Object(l["h"])("div",k,[Object(l["i"])("div",$,[(Object(l["I"])(!0),Object(l["h"])(l["a"],null,Object(l["P"])(o.tempProduct.imagesUrl,(t,e)=>(Object(l["I"])(),Object(l["h"])("div",{class:"col-lg-3 col-6 mb-2",key:e},[Object(l["i"])("div",C,[Object(l["i"])("img",{class:"img-fluid",src:o.tempProduct.imagesUrl[e],alt:""},null,8,I),Object(l["i"])("a",{href:"#",class:"delete_img",onClick:Object(l["hb"])(t=>o.tempProduct.imagesUrl.splice(e,1),["prevent"])},V,8,D)])]))),128))]),Object(l["i"])("div",Z,[F,Object(l["i"])("input",{type:"file",id:"fileMore",class:"form-control",ref:"fileMore",onChange:e[2]||(e[2]=e=>a.uploadMore(t.key))},null,544)])])):Object(l["g"])("",!0)]),Object(l["i"])("div",L,[Object(l["i"])("div",R,[N,Object(l["fb"])(Object(l["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=t=>o.tempProduct.title=t)},null,512),[[l["Z"],o.tempProduct.title]])]),Object(l["i"])("div",J,[Object(l["i"])("div",Y,[q,Object(l["fb"])(Object(l["i"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=t=>o.tempProduct.category=t)},null,512),[[l["Z"],o.tempProduct.category]])]),Object(l["i"])("div",z,[A,Object(l["fb"])(Object(l["i"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=t=>o.tempProduct.unit=t)},null,512),[[l["Z"],o.tempProduct.unit]])])]),Object(l["i"])("div",B,[Object(l["i"])("div",E,[G,Object(l["fb"])(Object(l["i"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=t=>o.tempProduct.origin_price=t)},null,512),[[l["Z"],o.tempProduct.origin_price]])]),Object(l["i"])("div",H,[K,Object(l["fb"])(Object(l["i"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=t=>o.tempProduct.price=t)},null,512),[[l["Z"],o.tempProduct.price]])])]),Q,Object(l["i"])("div",S,[T,Object(l["fb"])(Object(l["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=t=>o.tempProduct.description=t)},null,512),[[l["Z"],o.tempProduct.description]])]),Object(l["i"])("div",W,[X,Object(l["fb"])(Object(l["i"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=t=>o.tempProduct.content=t)},null,512),[[l["Z"],o.tempProduct.content]])]),Object(l["i"])("div",tt,[Object(l["i"])("div",et,[Object(l["fb"])(Object(l["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=t=>o.tempProduct.is_enabled=t)},null,512),[[l["Y"],o.tempProduct.is_enabled]]),ct])])])])]),Object(l["i"])("div",lt,[it,Object(l["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",o.tempProduct))},"確認")])])])],512)}c("14d9");var at=c("e0ae"),st={props:{product:{type:Object,default(){return{}}}},mixins:[at["a"]],data(){return{modal:{},tempProduct:{}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const c="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/upload";this.$http.post(c,e).then(t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)})},uploadMore(){const t=this.$refs.fileMore.files[0],e=new FormData;e.append("file-to-upload",t);const c="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/upload";this.$http.post(c,e).then(t=>{console.log(t.data),t.data.success&&this.tempProduct.imagesUrl.push(t.data.imageUrl)})}}},dt=c("6b0d"),rt=c.n(dt);const nt=rt()(st,[["render",ot]]);var bt=nt,ut=c("6ff1"),pt=c("1799"),mt={components:{ProductsModal:bt,DeleteModal:ut["a"],Pagination:pt["a"]},data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getProducts(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/products?page="+t;this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)})},openModal(t,e){this.$refs.ProductsModal.showModal(),this.tempProduct=t?{}:{...e},this.isNew=t},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/product",c="post",l="新增";this.isNew||(e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/product/"+t.id,c="put",l="修改"),this.$http[c](e,{data:this.tempProduct}).then(t=>{this.tempProduct={},this.$refs.ProductsModal.hideModal(),t.data.success?(this.getProducts(),this.$httpMessage(t,l)):this.$httpMessage(t,l)})},openDeleteModal(t){this.tempProduct={...t},this.$refs.DeleteModal.showModal()},deleteProduct(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/product/"+this.tempProduct.id;this.$http.delete(t).then(t=>{t.data.success?(this.$refs.DeleteModal.hideModal(),this.getProducts(),this.$httpMessage(t,"刪除產品")):(this.$refs.DeleteModal.hideModal(),this.$httpMessage(t,"刪除產品"))})},changPage(t){this.getProducts(t)}},created(){this.getProducts()}};const ht=rt()(mt,[["render",m]]);e["default"]=ht}}]);
//# sourceMappingURL=chunk-2d2261a6.7f7a6504.js.map