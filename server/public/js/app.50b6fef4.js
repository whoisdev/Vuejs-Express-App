(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0867":function(t,e,a){},"227c":function(t,e,a){},"3fa3":function(t,e,a){"use strict";var r=a("5537"),o=a.n(r);o.a},5524:function(t,e,a){},5537:function(t,e,a){},5680:function(t,e,a){t.exports=a.p+"img/6c45efb3881e0ef725da3b1f2d4024491558386484694.c37910d5.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},n=[],i={name:"LayoutDefault",components:{}},c=i,s=a("2877"),l=Object(s["a"])(c,o,n,!1,null,null,null),u=l.exports,d=a("7338"),p=a.n(d),m=(a("a4ac"),a("5c7d"),a("7d6e"),a("e54f"),a("573e"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing__page"},[a("div",{staticClass:"row landingpage__cover text--white"},[a("navigation"),a("div",{staticClass:"col col-12 cover__content centre--align"},[a("h1",{staticClass:"text-h2 h2"},[t._v("Fashion at it's best!")]),a("q-btn",{attrs:{color:"purple",label:"Browse",to:"/products"}})],1)],1),t._m(0)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",{staticClass:"text-h3 h3 centre--align"},[t._v("Today's Deal")]),a("div",{staticClass:"row"})])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"rounded-borders",staticStyle:{height:"100px"},attrs:{view:"lHh lpr lFf",container:""}},[a("q-header",{staticClass:"transparent"},[a("q-toolbar",{attrs:{inset:""}},[a("q-toolbar-title",[a("strong",[t._v("Lalita")]),t._v(" Sakhi\n            "),a("q-btn",{staticClass:"q-mr-sm float--right",attrs:{flat:"",round:"",dense:"",icon:"phone"}})],1)],1)],1)],1)},v=[],g={name:"navigation"},_=g,y=Object(s["a"])(_,h,v,!1,null,null,null),C=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-4 col-sm-4 card"},[a("q-card",{staticClass:"my-card q-mr-sm q-mb-sm"},[a("img",{attrs:{src:t.getImage()}}),a("q-card-actions",{attrs:{align:"around"}},[a("q-btn",{attrs:{flat:"",round:"",color:"teal",icon:"add_shopping_cart"}}),a("q-btn",{attrs:{flat:"",round:"",color:"primary",label:"View",to:t.getLinkId()}})],1)],1)],1)},q=[],P=(a("c5f6"),a("f09f")),x=a("4b7e"),S={name:"card",components:{QCard:P["a"],QCardActions:x["a"]},props:{id:Number,image:String},methods:{getLinkId:function(){return"/product/".concat(this.id)},getImage:function(){if(this.image)return a("67f0")("./".concat(this.image))}}},k=S,$=(a("9314"),Object(s["a"])(k,w,q,!1,null,"14b0622a",null)),Q=$.exports,E={name:"Index",components:{navigation:C,card:Q}},j=E,D=(a("be38"),Object(s["a"])(j,f,b,!1,null,"63cd6a56",null)),O=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigation",{on:{"search-triggered":t.searchProducts}},[a("q-btn",{staticClass:"q-pa-md shadow-0",attrs:{"text-color":"white",icon:"shopping_cart"}})],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._l(t.productData,function(t,e){return[a("card",{key:e,attrs:{id:t.productId,image:t.uploads[0]}})]})],2)])],1)},I=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row navigation centre--align"},[a("div",{staticClass:"col-12 col-md-2 col-sm-2 q-pa-md navigation__title"},[a("router-link",{staticClass:"text-h6 h6",attrs:{to:"/"}},[a("strong",[t._v("Lalita")]),t._v(" Sakhi")])],1),a("div",{staticClass:"col-8 col-md-5 col-sm-5 navigation__input"},[a("q-input",{attrs:{dark:"",color:"white","bottom-slots":"",label:"Search Items"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyPressed()}},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),a("div",{staticClass:"col-4 col-md-2 col-sm-2 q-pa-md search__button"},[a("q-btn",{staticStyle:{background:"#FF0080",color:"white"},attrs:{label:"Search"},on:{click:function(e){return t.keyPressed()}}})],1),a("div",{staticClass:"col-12 col-md-2 col-sm-2 navigation__dropdown"},[t._t("default")],2)])},V=[],z={name:"navigation",components:{},data:function(){return{searchQuery:""}},methods:{keyPressed:function(){this.$emit("search-triggered",this.searchQuery)}}},L=z,M=(a("3fa3"),Object(s["a"])(L,F,V,!1,null,"9e89233e",null)),A=M.exports,B={name:"products",components:{card:Q,navigation:A},mounted:function(){var t=this;if(this.$route.query.query)this.searchProducts(this.$route.query.query);else{var e="/api/products/";this.$http.get(e).then(function(e){t.productData=e.data})}},data:function(){return{productData:[]}},methods:{searchProducts:function(t){var e=this;console.log(t);var a="/api/products/".concat(t);this.$http.get(a).then(function(t){e.productData=t.data}),this.$router.push("?query=".concat(t))}}},H=B,N=Object(s["a"])(H,T,I,!1,null,"6d6f2f80",null),X=N.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigation",[a("q-btn",{staticClass:"q-pa-md shadow-0",attrs:{"text-color":"white",icon:"shopping_cart"}})],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row product__detail"},[a("Slideshow",{staticClass:"detail__slideshow",attrs:{images:t.productData.uploads}}),a("div",{staticClass:"col-12 col-md-5 col-sm-5 centre--align detail__content"},[a("h3",{staticClass:"text-h4 h4 detail__header"},[t._v(t._s(t.productData.productTitle))]),a("div",{staticClass:"detail__buttons"},[a("q-btn",{staticClass:"width--max",staticStyle:{background:"#f06595",color:"white"},attrs:{icon:"shopping_basket",label:"Buy Now"}}),a("q-btn",{staticClass:"width--max margin-top--sm",attrs:{icon:"add_shopping_cart",color:"primary",label:"Add to Cart"}})],1),a("div",{staticClass:"detail__size margin-top--sm"},[a("q-separator"),a("span",{staticClass:"text-weight-regular"},[t._v("SIZE")]),t._l(t.getProductSize(),function(e){return[a("q-chip",{key:e,staticClass:"text-uppercase",attrs:{color:"teal","text-color":"white"}},[t._v("\n                            "+t._s(e)+"\n                        ")])]})],2)]),a("div",{staticClass:"col-12"},[a("q-separator"),a("div",{staticClass:"text-body1",attrs:{"v-html":t.productData.productDescription}},[t._v("\n                    "+t._s(t.productData.productDescription)+"\n                ")])],1)],1)])],1)},U=[],Z=(a("28a5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md col-12 col-md-7 col-sm-7"},[a("q-carousel",{staticClass:"shadow-4",attrs:{swipeable:"",animated:"",arrows:"",thumbnails:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[t._l(t.images,function(e,r){return[a("q-carousel-slide",{key:r,attrs:{name:r,"img-src":t.getImage(e)}})]})],2)],1)}),G=[],K=a("880c"),R=a("62cd"),W={name:"Slideshow",components:{QCarousel:K["a"],QCarouselSlide:R["a"]},data:function(){return{slide:1}},props:{images:Array},methods:{getImage:function(t){return a("67f0")("./".concat(t))}}},Y=W,tt=Object(s["a"])(Y,Z,G,!1,null,null,null),et=tt.exports,at={name:"Product-Details",components:{Slideshow:et,navigation:A},data:function(){return{productData:[]}},mounted:function(){var t=this,e="/api/product/".concat(this.$route.params.id);this.$http.get(e).then(function(e){t.productData=e.data})},methods:{getProductSize:function(){if(void 0!=this.productData.productSize)return this.productData.productSize.split(",")}}},rt=at,ot=Object(s["a"])(rt,J,U,!1,null,null,null),nt=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centre--align"},[a("navigation",[a("dropdown")],1),a("h1",{staticClass:"text-h4 h4"},[t._v("Enter Product details")]),a("div",{staticClass:"container"},[a("ProductForm",{attrs:{productTitle:t.formValue.productTitle,productPrice:t.formValue.productPrice,editor:t.formValue.editor,images:t.formValue.images,visible:t.formValue.visible,size:t.formValue.size,featured:t.formValue.featured},on:{"form-submitted":t.onSubmit}})],1)],1)},ct=[],st=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-btn-dropdown",{attrs:{color:"white","text-color":"black",icon:"menu"}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("router-link",{attrs:{tag:"q-item-label",to:"/product/new/add"}},[t._v("Add Product")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("Order History")])],1)],1)],1)],1)],1)}),lt=[],ut=a("156b"),dt={components:{QBtnDropdown:ut["a"]},methods:{onItemClick:function(){console.log("Clicked on an Item")}}},pt=dt,mt=Object(s["a"])(pt,st,lt,!1,null,null,null),ft=mt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("q-input",{attrs:{filled:"",label:"Product Title","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.product.mutableProductTitle,callback:function(e){t.$set(t.product,"mutableProductTitle",e)},expression:"product.mutableProductTitle"}}),a("q-input",{attrs:{filled:"",label:"Product Price","lazy-rules":""},model:{value:t.product.mutableProductPrice,callback:function(e){t.$set(t.product,"mutableProductPrice",e)},expression:"product.mutableProductPrice"}}),a("q-select",{attrs:{filled:"",multiple:"",options:t.options,label:"Size"},model:{value:t.product.mutableSize,callback:function(e){t.$set(t.product,"mutableSize",e)},expression:"product.mutableSize"}}),a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-editor",{attrs:{"min-height":"5rem"},model:{value:t.product.mutableEditor,callback:function(e){t.$set(t.product,"mutableEditor",e)},expression:"product.mutableEditor"}}),a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("pre",{staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.product.mutableEditor)}})])],1)],1),a("q-input",{attrs:{multiple:"",filled:"",type:"file",hint:"Select Multiple Files at once",rules:[t.product.mutableImages.length<=0||"Please Enter at least one image"]},on:{input:function(e){t.product.mutableImages=e}}}),a("q-toggle",{attrs:{label:"Visible"},on:{click:function(e){t.product.mutableVisible=!t.product.mutableVisible}},model:{value:t.product.mutableVisible,callback:function(e){t.$set(t.product,"mutableVisible",e)},expression:"product.mutableVisible"}}),a("q-toggle",{attrs:{label:"Featured"},on:{click:function(e){t.product.mutableFeatured=!t.product.mutableFeatured}},model:{value:t.product.mutableFeatured,callback:function(e){t.$set(t.product,"mutableFeatured",e)},expression:"product.mutableFeatured"}}),a("div",[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)],1)},ht=[],vt=a("d66b"),gt=a("9564"),_t={components:{QEditor:vt["a"],QToggle:gt["a"]},props:{productTitle:String,productPrice:String,editor:String,images:Array,visible:Boolean,featured:Boolean},data:function(){return{multiple:null,options:["XS","S","M","L","XL","XXL"],product:{mutableProductTitle:this.productTitle,mutableProductPrice:this.productPrice,mutableEditor:this.editor,mutableImages:this.images,mutableVisible:this.visible,mutableSize:[],mutableFeatured:this.featured}}},methods:{onSubmit:function(){this.$emit("form-submitted",this.product)}}},yt=_t,Ct=Object(s["a"])(yt,bt,ht,!1,null,null,null),wt=Ct.exports,qt=a("2ef0"),Pt=a.n(qt),xt={data:function(){return{formValue:{productTitle:"",productPrice:"",multiple:null,editor:"Enter Product Description Here",images:[],visible:!0,size:[],featured:!1}}},components:{navigation:A,dropdown:ft,ProductForm:wt},methods:{onSubmit:function(t){var e=new FormData;e.append("productTitle",t.mutableProductTitle),e.append("productPrice",t.mutableProductPrice),e.append("productDescription",t.mutableEditor),e.append("productVisible",t.mutableVisible),e.append("productSize",t.mutableSize),e.append("productFeatured",t.mutableFeatured),Pt.a.forEach(t.mutableImages,function(t){e.append("files",t)});var a="http://localhost:3000/api/product/new/add";this.$http.post(a,e)}}},St=xt,kt=Object(s["a"])(St,it,ct,!1,null,null,null),$t=kt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"error__page shadow-12"},[a("q-btn",{staticClass:"fixed-center",staticStyle:{background:"#FF0080",color:"white"},attrs:{to:"/",icon:"home",label:"Back to Home"}})],1)])},Et=[],jt=(a("af9d"),{}),Dt=Object(s["a"])(jt,Qt,Et,!1,null,"675b70fb",null),Ot=Dt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigation",[a("dropdown")],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._l(t.productData,function(t,e){return[a("card",{key:e,attrs:{id:t.productId}})]})],2)])],1)},It=[],Ft={components:{navigation:A,card:Q,dropdown:ft},data:function(){return{productData:[]}},mounted:function(){var t=this,e="/api/products/";this.$http.get(e).then(function(e){t.productData=e.data})}},Vt=Ft,zt=Object(s["a"])(Vt,Tt,It,!1,null,null,null),Lt=zt.exports;r["a"].use(m["a"]);var Mt=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:O},{path:"/products",name:"Products",component:X},{path:"/product/:id",name:"Product Detail",component:nt},{path:"/admin",name:"Admin",component:Lt},{path:"/product/new/add",name:"Add Product",component:$t},{path:"*",name:"404 Page",component:Ot}]}),At=a("b05d"),Bt=a("4d5a"),Ht=a("9898"),Nt=a("f2cc"),Xt=a("c7a0"),Jt=a("2ea3"),Ut=a("65c6"),Zt=a("6ac5"),Gt=a("9c40"),Kt=a("0016"),Rt=a("497d"),Wt=a("6ab5"),Yt=a("033f"),te=a("e208"),ee=a("eb85"),ae=a("b047"),re=a("27f9"),oe=a("7f67"),ne=a("0378"),ie=a("ddd8"),ce=a("a370");r["a"].prototype.$http=p.a,r["a"].use(At["a"],{config:{},components:{QLayout:Bt["a"],QHeader:Ht["a"],QDrawer:Nt["a"],QPageContainer:Xt["a"],QPage:Jt["a"],QToolbar:Ut["a"],QToolbarTitle:Zt["a"],QBtn:Gt["a"],QIcon:Kt["a"],QList:Rt["a"],QItem:Wt["a"],QItemSection:Yt["a"],QItemLabel:te["a"],QSeparator:ee["a"],QChip:ae["a"],QInput:re["a"],QForm:ne["a"],QSelect:ie["a"],QCard:P["a"],QCardSection:ce["a"]},directives:{ClosePopup:oe["a"]},plugins:{}}),r["a"].config.productionTip=!1,new r["a"]({router:Mt,render:function(t){return t(u)}}).$mount("#app")},"67f0":function(t,e,a){var r={"./547a732a73c3d1a593b987e284ca508e1558386484698.jpeg":"e6c4","./6c45efb3881e0ef725da3b1f2d4024491558386484694.png":"5680","./83cf650511d5c30e3397599a62af17361558386484702.jpeg":"722d","./e3bbd9cc83c4f38244732e9123d470cd1558386313078.jpeg":"744c"};function o(t){var e=n(t);return a(e)}function n(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="67f0"},"722d":function(t,e,a){t.exports=a.p+"img/83cf650511d5c30e3397599a62af17361558386484702.d45e3acd.jpeg"},"744c":function(t,e,a){t.exports=a.p+"img/e3bbd9cc83c4f38244732e9123d470cd1558386313078.d45e3acd.jpeg"},9314:function(t,e,a){"use strict";var r=a("5524"),o=a.n(r);o.a},a4ac:function(t,e,a){},af9d:function(t,e,a){"use strict";var r=a("227c"),o=a.n(r);o.a},be38:function(t,e,a){"use strict";var r=a("0867"),o=a.n(r);o.a},e6c4:function(t,e,a){t.exports=a.p+"img/547a732a73c3d1a593b987e284ca508e1558386484698.4f5c695a.jpeg"}});
//# sourceMappingURL=app.50b6fef4.js.map