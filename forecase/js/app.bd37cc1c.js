(function(a){function t(t){for(var s,c,o=t[0],i=t[1],l=t[2],f=0,b=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],s=!0,o=1;o<e.length;o++){var i=e[o];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),a=c(c.s=e[0]))}return a}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=a,c.c=s,c.d=function(a,t,e){c.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,t){if(1&t&&(a=c(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)c.d(e,s,function(t){return a[t]}.bind(null,s));return e},c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,"a",t),t},c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},c.p="/forecase/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var s=e("85ec"),n=e.n(s);n.a},"1ddb":function(a,t,e){"use strict";var s=e("35b8"),n=e.n(s);n.a},"35b8":function(a,t,e){},4678:function(a,t,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(a){var t=r(a);return e(t)}function r(a){if(!e.o(s,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return s[a]}n.keys=function(){return Object.keys(s)},n.resolve=r,a.exports=n,n.id="4678"},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("0cdd");var s=e("2b0e"),n=e("5f5b");e("ab8b"),e("2dd8");s["default"].use(n["a"]);var r,c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("Content",{attrs:{header:"通路方案資訊平台 產品銷售AI預測"}})],1)},o=[],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"fullpage"},[e("div",{staticClass:"header"},[a._v(" "+a._s(a.header)+" ")]),e("div",{staticClass:"setting-box"},[e("div",{staticClass:"fun-box"},[a._l(a.rangeData,(function(t,s){return e("div",{key:s,staticClass:"range-div my-3",attrs:{id:t.id}},[e("div",{staticClass:"rangeTitle"},[e("span",[a._v(a._s(t.name))]),e("span",[a._v(a._s(2*t.value)+" %")])]),e("div",{staticClass:"rangebox"},[a._l(10,(function(s){return e("span",{key:s,class:a.rangeBgColor(t.value,s)})})),e("input",{attrs:{type:"range",min:"-5",max:"5",step:"1","data-index":s},domProps:{value:t.value},on:{input:a.rangeChange}})],2)])})),a._m(0),e("button",{staticClass:"btn-submit"},[a._v("模擬預測")])],2)]),e("div",{staticClass:"content-box"},[e("div",{staticClass:"chartChange"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn-datachange",class:a.dataChangeBtnClass[0],attrs:{value:"1",disabled:!!a.dataChangeBtnClass[0]},on:{click:a.changeChartData}},[a._v("APEC")]),e("button",{staticClass:"btn-datachange",class:a.dataChangeBtnClass[1],attrs:{value:"2",disabled:!!a.dataChangeBtnClass[1]},on:{click:a.changeChartData}},[a._v("EU")]),e("button",{staticClass:"btn-datachange",class:a.dataChangeBtnClass[2],attrs:{value:"3",disabled:!!a.dataChangeBtnClass[2]},on:{click:a.changeChartData}},[a._v("NALA")]),e("button",{staticClass:"btn-datachange",class:a.dataChangeBtnClass[3],attrs:{value:"4",disabled:!!a.dataChangeBtnClass[3]},on:{click:a.changeChartData}},[a._v("中嘉")]),a._m(1)])])])]),a._m(2)]),e("div",{staticClass:"info-box"},[e("div",{staticClass:"fun-box"},[e("table",{staticClass:"table table-sm table-hover"},[a._m(3),e("tbody",a._l(a.tableData01,(function(t,s){return e("tr",{key:s},[e("td",[a._v(a._s(t[0]))]),e("td",[a._v(a._s(t[1]))]),e("td",[a._v(a._s(t[2]))]),e("td",{staticStyle:{"text-align":"right"}},[a._v(a._s(t[3]))])])})),0),a._m(4)])])]),e("div",{staticClass:"info-box2"},[e("div",{staticClass:"fun-box"},[e("table",{staticClass:"table table-sm table-hover"},[a._m(5),e("tbody",a._l(a.tableData02,(function(t,s){return e("tr",{key:s},[e("td",[a._v(a._s(t[0]))]),e("td",[e("div",{staticClass:"text-center",staticStyle:{"border-radius":"5px"},style:a.setColor(t[1])},[a._v(a._s(t[1]))])])])})),0)])])])])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("select",{staticClass:"form-control my-4 select01",attrs:{name:"",id:""}},[e("option",[a._v("LSTM")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("select",{staticClass:"my-4 datachange-select float-right",attrs:{name:"",id:""}},[e("option",[a._v("Z390 AORUS MASTER")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"chartBox"},[e("div",{staticClass:"fun-box"},[e("canvas",{attrs:{id:"myChart"}})])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"vertical-align":"top"}},[a._v("Week")]),e("th",{staticStyle:{"vertical-align":"top"}},[a._v("Forecast")]),e("th",{staticStyle:{"vertical-align":"top"}},[a._v("Actual")]),e("th",{staticStyle:{"vertical-align":"top","text-align":"right"}},[a._v("精準度"),e("br"),a._v("FCST/Actual")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tfoot",[e("tr",[e("th",[a._v("總計")]),e("th",[a._v("XXXX")]),e("th",[a._v("XXXX")]),e("th",{staticStyle:{"text-align":"right"}},[a._v("1.01")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[a._v("Input")]),e("th",[a._v("Correlation")])])])}],d=e("30ef"),f=e.n(d),b={props:{header:String},data:function(){return{chartData:[],colorData:[.7,.3,.1,0,-.1,-.2,-.7,-1],rangeData:[{id:"range01",name:"USD Change",value:5},{id:"range02",name:"EUR Change",value:-2},{id:"range03",name:"BCI 企業信心指數",value:0},{id:"range04",name:"CCI 消費者信心指數",value:-5}],tableData01:[["week01",442,338,1.14],["week02",244,239,.84],["week03",407,261,1.56],["week04",482,439,1.1],["week05",476,471,1.01]],tableData02:[["AMD StockP",-.1],["Avgellin per Country",.3],["BIC OECDE",1.15],["BranchStock excl OTW",-.2],["BranchStock OTW",-.7]],dataChangeBtnClass:["active","","",""]}},mounted:function(){this.init()},methods:{init:function(){r&&(r.destroy(),console.log("!!!")),this.chartData=[this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),this.randomData(),NaN,NaN];var a="#00c9ff",t="#90fb9b",e="#fd3aa8",s="#ea9062",n=document.getElementById("myChart"),c=n.getContext("2d").createLinearGradient(500,0,100,0);c.addColorStop(0,a),c.addColorStop(1,t);var o=n.getContext("2d").createLinearGradient(1e3,0,100,0);o.addColorStop(0,e),o.addColorStop(1,s);var i=n.getContext("2d").createLinearGradient(500,0,100,0);i.addColorStop(0,a),i.addColorStop(1,t),r=new f.a(n,{type:"line",data:{labels:["week01","week02","week03","week04","week05","week06","week07","week08","week09","week10","week11","week12"],datasets:[{label:"SellinQty",data:this.chartData,borderColor:c,pointBorderColor:"#fff",pointBackgroundColor:"#fff",backgroundColor:["rgba(255, 99, 132, 0)"],borderWidth:2,lineTension:0},{label:"FCST",data:[NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,this.chartData[9],this.randomData(),this.randomData()],backgroundColor:["rgba(255, 206, 86, 0)"],borderDash:[5,5],borderColor:o,pointBorderColor:"#fff",pointBackgroundColor:"#fff",borderWidth:2,lineTension:0},{label:"FCST模擬",data:[NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,this.chartData[9],this.randomData(),this.randomData()],backgroundColor:["rgba(255, 206, 86, 0)"],borderDash:[5,5],borderColor:"#fff",pointBorderColor:"#fff",pointBackgroundColor:"#fff",borderWidth:2,lineTension:0}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},rangeChange:function(a){var t=a.target.value,e=a.target.dataset.index;this.rangeData[e].value=t},randomData:function(){return Math.floor(10*Math.random()+1)},changeChartData:function(a){var t=a.target.value,e="",s="",n="",r="";1==t&&(e="active"),2==t&&(s="active"),3==t&&(n="active"),4==t&&(r="active"),this.dataChangeBtnClass=[e,s,n,r],this.init()},rangeBgColor:function(a,t){switch(t){case 1:if(a<-4)return"active";break;case 2:if(a<-3)return"active";break;case 3:if(a<-2)return"active";break;case 4:if(a<-1)return"active";break;case 5:if(a<0)return"active";break;case 6:if(a>0)return"active";break;case 7:if(a>1)return"active";break;case 8:if(a>2)return"active";break;case 9:if(a>3)return"active";break;case 10:if(a>4)return"active";break}},setColor:function(a){var t=255,e=255,s=255,n="#fff";return a>0?t=255-255*a:a<=0&&(e=255-255*-a),s=e/2,t=parseInt(t),e=parseInt(e),s=parseInt(s),"background-color: rgba("+t+","+e+","+s+",0.5);color:"+n}}},u=b,h=(e("1ddb"),e("2877")),j=Object(h["a"])(u,i,l,!1,null,"afd2ab78",null),v=j.exports,g={name:"App",components:{Content:v}},m=g,C=(e("034f"),Object(h["a"])(m,c,o,!1,null,null,null)),p=C.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(a){return a(p)}}).$mount("#app")},"85ec":function(a,t,e){}});
//# sourceMappingURL=app.bd37cc1c.js.map