(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qiandaodaka-add-or-update"],{"0905":function(e,t,r){"use strict";var i={"w-picker":r("e2b1").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("账号")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(t){e.$set(e.ruleForm,"zhanghao",t)},expression:"ruleForm.zhanghao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.touxiangTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("头像")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.touxiang?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.touxiang,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("计划词量")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"计划词量"},model:{value:e.ruleForm.jihuaciliang,callback:function(t){e.$set(e.ruleForm,"jihuaciliang",t)},expression:"ruleForm.jihuaciliang"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("打卡时间")]),r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"打卡时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("dakashijian")}},model:{value:e.ruleForm.dakashijian,callback:function(t){e.$set(e.ruleForm,"dakashijian",t)},expression:"ruleForm.dakashijian"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"dakashijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.dakashijianConfirm.apply(void 0,arguments)}}})],1)},n=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i}))},"0c09":function(e,t,r){"use strict";var i=r("b6ef"),a=r.n(i);a.a},"1b52":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0d1032de]{padding:%?20?%}.content[data-v-0d1032de]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0d1032de]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0d1032de]{width:%?180?%}.avator[data-v-0d1032de]{width:%?150?%;height:%?60?%}.right-input[data-v-0d1032de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0d1032de]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0d1032de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0d1032de]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0d1032de]{border:0}.cu-form-group uni-input[data-v-0d1032de]{padding:0 %?30?%}.uni-input[data-v-0d1032de]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0d1032de]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0d1032de]::after{line-height:%?88?%}.select .uni-input[data-v-0d1032de]{line-height:%?88?%}.input .right-input[data-v-0d1032de]{line-height:%?88?%}',""]),e.exports=t},"411f":function(e,t,r){"use strict";r.r(t);var i=r("0905"),a=r("eeb6");for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);r("0c09");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0d1032de",null,!1,i["a"],o);t["default"]=s.exports},"454a":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac6a"),r("96cf");var a=i(r("3b8d")),n=i(r("e2b1")),o={data:function(){return{ruleForm:{zhanghao:"",xingming:"",touxiang:"",jihuaciliang:"",dakashijian:"",userid:""},user:{}}},components:{wPicker:n.default},computed:{},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.touxiang=this.user.touxiang,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid),!t.id){e.next=16;break}return this.ruleForm.id=t.id,e.next=14,this.$api.info("qiandaodaka",this.ruleForm.id);case 14:i=e.sent,this.ruleForm=i.data;case 16:if(!t.cross){e.next=41;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 19:if((e.t1=e.t0()).done){e.next=41;break}if(n=e.t1.value,"zhanghao"!=n){e.next=24;break}return this.ruleForm.zhanghao=a[n],e.abrupt("continue",19);case 24:if("xingming"!=n){e.next=27;break}return this.ruleForm.xingming=a[n],e.abrupt("continue",19);case 27:if("touxiang"!=n){e.next=30;break}return this.ruleForm.touxiang=a[n],e.abrupt("continue",19);case 30:if("jihuaciliang"!=n){e.next=33;break}return this.ruleForm.jihuaciliang=a[n],e.abrupt("continue",19);case 33:if("dakashijian"!=n){e.next=36;break}return this.ruleForm.dakashijian=a[n],e.abrupt("continue",19);case 36:if("userid"!=n){e.next=39;break}return this.ruleForm.userid=a[n],e.abrupt("continue",19);case 39:e.next=19;break;case 41:this.styleChange();case 42:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dakashijianConfirm:function(e){console.log(e),this.ruleForm.dakashijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.jihuaciliang||this.$validate.isIntNumer(this.ruleForm.jihuaciliang)){e.next=3;break}return this.$utils.msg("计划词量应输入整数"),e.abrupt("return");case 3:if(this.ruleForm.userid){e.next=6;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("qiandaodaka",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("qiandaodaka",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(r,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},b6ef:function(e,t,r){var i=r("1b52");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("4f06").default;a("4cbc2f61",i,!0,{sourceMap:!1,shadowMode:!1})},eeb6:function(e,t,r){"use strict";r.r(t);var i=r("454a"),a=r.n(i);for(var n in i)"default"!==n&&function(e){r.d(t,e,(function(){return i[e]}))}(n);t["default"]=a.a}}]);