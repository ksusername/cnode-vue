webpackJsonp([7],{101:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20}},[_h("el-col",{attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("header",{slot:"header",staticClass:"clearfix",attrs:{id:"panel-header"}},[_m(0)])," ",_h("main",[_h("div",{staticClass:"input-area"},[_h("el-form",{ref:"form",attrs:{"label-width":"80px"},on:{submit:function(e){e.preventDefault(),login(e)}}},[_h("el-form-item",{attrs:{label:"token"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model.trim",value:at,expression:"at",modifiers:{trim:!0}}],attrs:{maxlength:36,minlength:36,placeholder:"请输入个人accesstoken..."},domProps:{value:at},on:{input:function(e){at=e}}})])," ",_h("el-form-item",[redirect?_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){goBack(e)}}},[_m(1),"返回上一页"]):_e()," ",_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){login(e)}}},["登录"])])])])])])])])])])])},staticRenderFns:[function(){with(this)return _h("span",["登录"])},function(){with(this)return _h("i",{staticClass:"el-icon-caret-left"})}]}},110:function(e,t,n){var o=n(87);"string"==typeof o&&(o=[[e.i,o,""]]),n(4)(o,{}),o.locals&&(e.exports=o.locals)},46:function(e,t,n){var o,a;n(110),o=n(73);var r=n(101);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.name=a.name||"login",a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},73:function(e,t,n){"use strict";(function(e){t.default={data:function(){return{at:"",alert:{title:"",type:"",description:""},redirect:this.$route.query.redirect||""}},mounted:function(){},methods:{goBack:function(){var e=decodeURIComponent(this.$route.query.redirect);this.$router.replace(e)},login:function(){var t=this,n=this,o=n.at;return o?(this.setLoading(!0),void e.ajax({type:"POST",url:"https://cnodejs.org/api/v1/accesstoken",dataType:"json",data:{accesstoken:o}}).done(function(e){if(t.setLoading(!1),!e||!e.success)return void n.errorHandle();var a={id:e.id,loginname:e.loginname,avatar:e.avatar_url,accesstoken:o,score:null,message:null};Object.keys(a).forEach(function(e){localStorage[e]=a[e]}),t.$store.dispatch("setUserInfo",a).then(function(){n.$message({showClose:!0,message:"登录成功",type:"success",onClose:function(){var e=decodeURIComponent(n.$route.query.redirect||"/");n.$router.replace(e)}})})}).fail(function(e){t.setLoading(!1),n.errorHandle()})):void n.$message({showClose:!0,message:"token格式错误，可从官网个人设置页面获取",type:"error"})},errorHandle:function(){self.$message({showClose:!0,message:"登录出错，请稍候再试！",type:"warning"})},setLoading:function(e){this.$store.commit("setLoading",e)}}}}).call(t,n(3))},87:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"\n.input-area {\n  position: relative;\n  text-align: center;\n  width: 50%;\n  margin-left: 25%;\n}\n",""])}});