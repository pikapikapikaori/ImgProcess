(function(t){function e(e){for(var o,l,r=e[0],s=e[1],c=e[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},3557:function(t,e,n){"use strict";n("460c")},"460c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l={name:"App"},r=l,s=(n("034f"),n("2877")),c=Object(s["a"])(r,i,a,!1,null,null,null),u=c.exports,p=n("5c96"),d=n.n(p),f=(n("0fae"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[n("el-aside",{attrs:{width:"200px"}},[n("Navigation")],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"center","font-size":"36px"}},[t._v(" "+t._s(t.headmsg)+" ")]),n("el-main",{staticStyle:{"text-align":"left","font-size":"18px"}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("项目介绍")]),t._v(" "+t._s(t.intromsg)+" ")],1),n("el-footer",[n("Copyright")],1)],1)],1)],1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[n("el-radio-button",{attrs:{label:!1}},[t._v("展开")]),n("el-radio-button",{attrs:{label:!0}},[t._v("收起")])],1),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"$route.path",collapse:t.isCollapse,router:"true"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"/"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("主页")])]),n("el-menu-item",{attrs:{index:"/basic_func"}},[n("i",{staticClass:"el-icon-picture-outline"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础功能")])]),n("el-menu-item",{attrs:{index:"/histogram"}},[n("i",{staticClass:"el-icon-s-data"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图像分析")])]),n("el-menu-item",{attrs:{index:"/segmentation"}},[n("i",{staticClass:"el-icon-scissors"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图像分割")])]),n("el-submenu",{attrs:{index:"/smooth_sharpen"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-operation"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图像平滑与锐化")])]),n("el-menu-item",{attrs:{index:"/smooth_sharpen/smooth"}},[t._v("图像平滑")]),n("el-menu-item",{attrs:{index:"/smooth_sharpen/sharpen"}},[t._v("图像锐化")])],2),n("el-menu-item",{attrs:{index:"/morphological"}},[n("i",{staticClass:"el-icon-magic-stick"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图像形态学")])]),n("el-menu-item",{attrs:{index:"/repair"}},[n("i",{staticClass:"el-icon-s-opportunity"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("图像修复")])])],1)],1)},g=[],_={name:"Navigation",data:function(){return{isCollapse:!0}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},x=_,b=(n("3557"),Object(s["a"])(x,v,g,!1,null,null,null)),y=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-divider",{attrs:{"content-position":"right"}},[t._v("李亦杨，刁泽皓")])],1)},O=[],w={name:"Copyright"},j=w,S=Object(s["a"])(j,C,O,!1,null,"dc05ee04",null),P=S.exports,$={name:"Home",data:function(){return{headmsg:"图像处理系统",intromsg:"       一个简单的图像处理系统。"}},methods:{indexMethod1:function(t){return 2*t+1},indexMethod2:function(t){return 2*t+2}},components:{Navigation:y,Copyright:P}},M=$,k=Object(s["a"])(M,m,h,!1,null,"69aac9e3",null),E=k.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[n("el-aside",{attrs:{width:"200px"}},[n("Navigation")],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"center","font-size":"36px"}},[t._v(" "+t._s(t.headmsg)+" ")]),n("el-main"),n("el-footer",[n("Copyright")],1)],1)],1)],1)},z=[],T={name:"BasicFunc",data:function(){return{headmsg:"基础功能"}},components:{Navigation:y,Copyright:P}},B=T,F=Object(s["a"])(B,N,z,!1,null,"422c56ed",null),H=F.exports;o["default"].use(f["a"]);var J=new f["a"]({mode:"history",routes:[{path:"/",name:"Home",component:E},{path:"/basic_func",name:"BasicFunc",component:H}]});o["default"].config.productionTip=!1,o["default"].use(d.a),new o["default"]({el:"#app",router:J,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.6676c75a.js.map