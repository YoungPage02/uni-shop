"use strict";var e=require("../../common/vendor.js");const r={name:"my-search",props:{bgcolor:{type:String,default:"#c00000"},radius:{tyoe:Number,default:18}},setup:()=>({searchBoxHandler:function(){wx.navigateTo({url:"/subpkg/search/search"})}})};if(!Array){e.resolveComponent("uni-icons")()}Math;var o=e._export_sfc(r,[["render",function(r,o,a,n,s,c){return{a:e.p({type:"search",size:"17"}),b:a.radius+"px",c:e.o(((...e)=>n.searchBoxHandler&&n.searchBoxHandler(...e))),d:a.bgcolor}}]]);wx.createComponent(o);
