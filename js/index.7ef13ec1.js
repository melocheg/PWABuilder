(function(e){function t(t){for(var a,r,i=t[0],l=t[1],s=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={index:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/pwa-ize/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c6f4")},"2d4d":function(e,t,n){e.exports=n.p+"img/pwa-ize-horizontal.8f842cd4.svg"},4966:function(e,t,n){"use strict";var a=n("7a23"),o=n("2d4d"),c=n.n(o),r={href:"index.html"},i=Object(a["createElementVNode"])("img",{src:c.a,style:{height:"52px",margin:"10px"}},null,-1),l=[i];function s(e,t,n,o,c,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("a",r,l)}var u={name:"LogoHeader"},d=n("6b0d"),f=n.n(d);const p=f()(u,[["render",s]]);t["a"]=p},"5d94":function(e,t,n){},7017:function(e,t,n){},"8b58":function(e,t,n){"use strict";n("5d94")},b527:function(e,t,n){"use strict";var a=n("7a23"),o={class:"col s12"},c={class:"row"},r={class:"input-field col s12"},i=Object(a["createElementVNode"])("label",{for:"url"},"URL",-1),l={class:"input-field col s12"},s=Object(a["createElementVNode"])("label",{for:"title"},"Title",-1);function u(e,t,n,u,d,f){return Object(a["openBlock"])(),Object(a["createElementBlock"])("form",o,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",r,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"url",id:"url",ref:"urlInput","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.url=t}),class:"validate"},null,512),[[a["vModelText"],e.url]]),i]),Object(a["createElementVNode"])("div",l,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.title=t})},null,512),[[a["vModelText"],e.title]]),s])]),Object(a["createElementVNode"])("button",{onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return f.validate()}),["stop","prevent"])),type:"submit",class:"waves-effect waves-light btn accent"},Object(a["toDisplayString"])(n.actionText),1),Object(a["renderSlot"])(e.$slots,"default")])}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var d=n("4d5c"),f=n.n(d),p=n("bfa9"),b=Object(p["a"])(),m={name:"PwaForm",props:{actionText:String,resetOnEmit:Boolean},data:function(){return{url:b.url,title:b.title}},methods:{validate:function(){var e;try{e=new URL(this.url)}catch(t){return this.$refs["urlInput"].focus(),void f.a.toast({html:"the provided URL is invalid"})}console.log("emitting",e),this.$emit("valid",{url:e,title:this.title}),this.resetOnEmit&&(this.url="",this.title="")}}},h=n("6b0d"),O=n.n(h);const j=O()(m,[["render",u]]);t["a"]=j},bfa9:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("1276"),n("2b3d");function a(){try{var e=new URLSearchParams(window.location.href.split("?")[1]);if(e.get("url"))return{url:new URL(e.get("url")),title:e.get("title")}}catch(t){console.log("no params or invalid url")}return{}}t["a"]=a},c6f4:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={id:"app",class:"container"},c={class:"collapsible collection"},r={class:"collection-item active"},i=Object(a["createElementVNode"])("div",{class:"collapsible-header"},[Object(a["createElementVNode"])("i",{class:"material-icons accent-text"},"my_location"),Object(a["createTextVNode"])("Target ")],-1),l={class:"collapsible-body"};function s(e,t,n,s,u,d){var f=Object(a["resolveComponent"])("About"),p=Object(a["resolveComponent"])("LogoHeader"),b=Object(a["resolveComponent"])("PwaForm"),m=Object(a["resolveComponent"])("ManifestViewer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(f),Object(a["createVNode"])(p),Object(a["createElementVNode"])("ul",c,[Object(a["createElementVNode"])("li",r,[i,Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(b,{"action-text":"Generate Manifest",onValid:t[0]||(t[0]=function(e){return d.generateManifest(e)})})])])]),Object(a["createVNode"])(m,{manifest:e.manifest},null,8,["manifest"])])}var u=n("4d5c"),d=n.n(u),f=n("4966"),p=Object(a["createStaticVNode"])('<a id="open-modal" class="modal-trigger" href="#modal-about"><i class="material-icons accent-text">info</i></a><div id="modal-about" class="modal"><div class="modal-content"><p> PWA-ize let you transform any website into a <span class="accent-text">P</span>rogressive <span class="accent-text">W</span>eb <span class="accent-text">A</span>pplication. A PWA can be added to your homescreen and will open on a separate (and dedicated) browser window, thus feeling more like a regular app. </p><p> You can either install a particular website as PWA using this page, or use the <a href="shortcuts.html">Shortcuts Page</a>, add links, and use it as a launcher. </p><p> For more information, have a look at the <a href="https://github.com/derlin/pwa-ize" target="_blank">code</a>, and feel free to give it a <i class="material-icons tiny">star</i> ! </p></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a></div></div>',2),b=[p];function m(e,t,n,o,c,r){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,b)}var h={name:"About"},O=n("6b0d"),j=n.n(O);const v=j()(h,[["render",m]]);var g=v,w=n("b527"),V=function(e){return Object(a["pushScopeId"])("data-v-168648e5"),e=e(),Object(a["popScopeId"])(),e},y={key:0},N={class:"card"},E={class:"card-content"},x=V((function(){return Object(a["createElementVNode"])("h3",null,"You're done !",-1)})),k=Object(a["createTextVNode"])(" You can now install "),T=Object(a["createTextVNode"])(" ( "),P=["href"],S=Object(a["createTextVNode"])("). "),M=V((function(){return Object(a["createElementVNode"])("p",null,[Object(a["createElementVNode"])("span",{id:"instruction"},"Instructions:"),Object(a["createTextVNode"])(" (1) open the settings using "),Object(a["createElementVNode"])("i",{class:"material-icons tiny accent-text"},"open_in_browser"),Object(a["createTextVNode"])(" on iphones or "),Object(a["createElementVNode"])("i",{class:"material-icons tiny accent-text"},"more_vert"),Object(a["createTextVNode"])(" on android, and (2) click on "),Object(a["createElementVNode"])("i",null,"Add to Home Screen"),Object(a["createTextVNode"])(". ")],-1)})),_=V((function(){return Object(a["createElementVNode"])("p",null,"That's it !",-1)})),A=Object(a["createTextVNode"])(" The link to this install page is "),B=["href"],L=Object(a["createTextVNode"])(". "),R=V((function(){return Object(a["createElementVNode"])("p",null,"For information, here is the generated manifest:",-1)}));function U(e,t,n,o,c,r){return n.manifest?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",y,[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",E,[x,Object(a["createElementVNode"])("p",null,[k,Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(n.manifest.title),1),T,Object(a["createElementVNode"])("a",{href:n.manifest.url.href},Object(a["toDisplayString"])(n.manifest.url.href),9,P),S]),M,_,Object(a["createElementVNode"])("p",null,[A,Object(a["createElementVNode"])("a",{href:n.manifest.pwaLink},Object(a["toDisplayString"])(n.manifest.pwaLink),9,B),L]),R,Object(a["createElementVNode"])("pre",null,[Object(a["createElementVNode"])("code",null,Object(a["toDisplayString"])(n.manifest.json),1)])])])])):Object(a["createCommentVNode"])("",!0)}var C=n("1da1"),I=n("d4ec"),z=n("bee2");n("96cf"),n("ac1f"),n("1276"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("498a"),n("d81d"),n("4de4");function D(e){return new Promise((function(t,n){Promise.all([64,128,192,256,512].map((function(t){return H(e,t)}))).then((function(e){console.log(e),t(F(e,"src"))})).catch(n)}))}function F(e,t){var n=e.map((function(e){return e[t]})).map((function(e,t,n){return n.indexOf(e)===t&&t})).filter((function(t){return e[t]})).map((function(t){return e[t]}));return n}function H(e,t){return new Promise((function(n,a){try{var o=new Image;o.onload=function(){console.log("Google S2: ".concat(this.src," => ").concat(this.height,"x").concat(this.width)),n({src:"https://www.google.com/s2/favicons?sz=".concat(this.width,"&domain=").concat(e),sizes:this.width+"x"+this.height,type:"image/png"})},o.src="https://www.google.com/s2/favicons?sz=".concat(t,"&domain=").concat(e)}catch(c){a(c)}}))}var W={grab:D},J=function(){function e(t,n,a){Object(I["a"])(this,e),this.url=t,this.title=n,this.pwaLink=window.location.href.split("?")[0]+"?url=".concat(t,"&title=").concat(n),this.json=a}return Object(z["a"])(e,[{key:"applyTo",value:function(e){var t=new Blob([this.json],{type:"application/json"});e.setAttribute("href",URL.createObjectURL(t))}}]),e}(),Y={generate:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,a,o,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.url,o=t.title,e.next=3,W.grab(a.hostname);case 3:return c=e.sent,o=(null===(n=o)||void 0===n?void 0:n.trim())||a.hostname,r=JSON.stringify({background_color:"white",description:"".concat(o," as standalone app (PWA)"),display:"fullscreen",name:"".concat(o),short_name:"".concat(o),icons:c,start_url:new URL("redirect.html?url=".concat(a.href),window.location.href)},null,2),e.abrupt("return",new J(a,o,r));case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},$={name:"ManifestViewer",props:{manifest:J}};n("8b58");const G=j()($,[["render",U],["__scopeId","data-v-168648e5"]]);var q=G,K=n("bfa9"),Q={name:"App",components:{LogoHeader:f["a"],About:g,PwaForm:w["a"],ManifestViewer:q},data:function(){return{manifest:null,manifestHolder:null,collapsible:null}},methods:{generateManifest:function(e){Y.generate(e).then(this.applyManifest,(function(e){return console.log("error",e)}))},applyManifest:function(e){this.manifest=e,this.collapsible.close(),e.applyTo(document.getElementById("manifest-placeholder"))}},mounted:function(){d.a.AutoInit(),this.collapsible=d.a.Collapsible.init(document.getElementsByClassName("collapsible")[0]);var e=Object(K["a"])();null!==e&&void 0!==e&&e.url&&Y.generate(e).then(this.applyManifest)}};n("ee7a");const X=j()(Q,[["render",s]]);var Z=X;n("8266"),n("619b"),n("f33e");Object(a["createApp"])(Z).mount("#app")},ee7a:function(e,t,n){"use strict";n("7017")},f33e:function(e,t,n){}});
//# sourceMappingURL=index.7ef13ec1.js.map