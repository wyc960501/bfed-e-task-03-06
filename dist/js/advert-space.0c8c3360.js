(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["advert-space"],{"330c":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s}));var r=a("b32d"),n=function(){return Object(r["a"])({method:"GET",url:"/front/ad/space/getAllSpaces"})},c=function(e){return Object(r["a"])({method:"GET",url:"/front/ad/space/getSpaceById",params:{id:e}})},s=function(e){return Object(r["a"])({method:"POST",url:"/front/ad/space/saveOrUpdate",data:e})}},caea:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advert-space"},[a("advert-space-list")],1)},n=[],c=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advert-space-list"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{on:{click:function(t){return e.$router.push({name:"space-create"})}}},[e._v("添加广告位")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.advertSpaces,stripe:!0,border:""}},[a("el-table-column",{attrs:{prop:"spaceKey",label:"spaceKey"}}),a("el-table-column",{attrs:{prop:"name",label:"广告位名称"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.$router.push({name:"space-edit",params:{id:t.row.id}})}}},[e._v("编辑")])]}}])})],1)],1)],1)},o=[],l=(a("4160"),a("159b"),a("96cf"),a("1da1")),d=a("330c"),i=a("c1df"),u=a.n(i),p=c["default"].extend({name:"AdvertSpaceList",data:function(){return{advertSpaces:[],loading:!1}},created:function(){this.loadAdvertSpaces()},methods:{loadAdvertSpaces:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(d["b"])();case 3:a=t.sent,r=a.data,n=r.content,n.forEach((function(e){e.createTime=u()(e.createTime).format("YYYY-MM-DD HH:mm:ss"),e.updateTime=u()(e.updateTime).format("YYYY-MM-DD HH:mm:ss")})),e.advertSpaces=n,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}}),m=p,f=a("2877"),b=Object(f["a"])(m,s,o,!1,null,"ed45080c",null),v=b.exports,h=c["default"].extend({name:"AdverSpaceIndex",components:{AdvertSpaceList:v}}),S=h,g=Object(f["a"])(S,r,n,!1,null,"cad1faa2",null);t["default"]=g.exports}}]);
//# sourceMappingURL=advert-space.0c8c3360.js.map