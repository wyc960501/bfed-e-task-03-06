(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["space-create"],{"330c":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s}));var r=a("b32d"),n=function(){return Object(r["a"])({method:"GET",url:"/front/ad/space/getAllSpaces"})},c=function(e){return Object(r["a"])({method:"GET",url:"/front/ad/space/getSpaceById",params:{id:e}})},s=function(e){return Object(r["a"])({method:"POST",url:"/front/ad/space/saveOrUpdate",data:e})}},"5f3f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-or-update-space"},[a("el-page-header",{attrs:{content:e.isEdit?"编辑广告位":"添加广告位"},on:{back:function(t){return e.$router.push("/advert-space")}}}),a("el-card",{staticStyle:{"margin-top":"20px"}},[a("el-form",{ref:"space",attrs:{"label-width":"120px",rules:e.rules,model:e.space}},[a("el-form-item",{attrs:{label:"广告位名称",prop:"name"}},[a("el-input",{model:{value:e.space.name,callback:function(t){e.$set(e.space,"name",t)},expression:"space.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSave}},[e._v("保存")]),e.isEdit?e._e():a("el-button",{on:{click:e.onReset}},[e._v("重置")])],1)],1)],1)],1)},n=[],c=(a("96cf"),a("1da1")),s=a("2b0e"),o=a("330c"),u=s["default"].extend({name:"CreateOrUpdateSpace",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{space:{name:""},rules:{name:[{required:!0,message:"请输入广告位名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]},loading:!1}},created:function(){this.isEdit&&this.loadAdvertSpace()},methods:{loadAdvertSpace:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["c"])(e.$route.params.id);case 2:a=t.sent,r=a.data,e.space=r.content;case 5:case"end":return t.stop()}}),t)})))()},onReset:function(){this.$refs.space.resetFields()},handleSave:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.space.validate();case 2:return e.loading=!0,t.prev=3,t.next=6,Object(o["a"])(e.space);case 6:e.$message.success("保存成功"),e.$router.push("/advert-space"),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0),e.$message.error("保存失败");case 14:e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),i=u,l=a("2877"),d=Object(l["a"])(i,r,n,!1,null,"de749bf4",null);t["a"]=d.exports},"76ec":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advert-space-create"},[a("create-or-update-space")],1)},n=[],c=a("2b0e"),s=a("5f3f"),o=c["default"].extend({name:"AdverSpaceCreate",components:{CreateOrUpdateSpace:s["a"]}}),u=o,i=a("2877"),l=Object(i["a"])(u,r,n,!1,null,"237175cb",null);t["default"]=l.exports}}]);
//# sourceMappingURL=space-create.b4902311.js.map