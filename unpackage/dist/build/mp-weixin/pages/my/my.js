"use strict";var e=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(r,o,n)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,a=require("../../mixin/tabBar-badge.js"),i=require("../../common/vendor.js");const m={mixins:[a.badgeMix],computed:((e,a)=>{for(var i in a||(a={}))o.call(a,i)&&t(e,i,a[i]);if(r)for(var i of r(a))n.call(a,i)&&t(e,i,a[i]);return e})({},i.mapState(["token"])),data:()=>({})};if(!Array){(i.resolveComponent("my-login")+i.resolveComponent("my-userInfo"))()}Math||((()=>"../../components/my-login/my-login.js")+(()=>"../../components/my-userInfo/my-userInfo.js"))();var s=i._export_sfc(m,[["render",function(e,r,o,n,t,a){return i.e({a:!e.token},(e.token,{}))}]]);wx.createPage(s);