"use strict";var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&s(e,o,t[o]);if(r)for(var o of r(t))i.call(t,o)&&s(e,o,t[o]);return e},c=require("../../common/vendor.js");const p={name:"my-userInfo",computed:a({},c.mapState(["userinfo"])),data:()=>({}),methods:(u=a({},c.mapMutations(["updataToken","updateAddress","updataUserInfo"])),m={logout(){c.index.showModal({title:"提示",content:"确认退出登录吗？",success:e=>{e.confirm&&(this.$store.commit("updataToken",""),this.$store.commit("updateAddress",{}),this.$store.commit("updataUserInfo",{}))}})}},t(u,o(m)))};var u,m;if(!Array){c.resolveComponent("uni-icons")()}Math;var d=c._export_sfc(p,[["render",function(e,t,o,r,n,i){return{a:e.userinfo.userInfo.avatarUrl,b:c.t(e.userinfo.userInfo.nickName),c:"/static/my-icons/icon1.png",d:"/static/my-icons/icon2.png",e:"/static/my-icons/icon3.png",f:"/static/my-icons/icon4.png",g:c.p({type:"arrowright",size:"15"}),h:c.p({type:"arrowright",size:"15"}),i:c.p({type:"arrowright",size:"15"}),j:c.o(((...e)=>i.logout&&i.logout(...e)))}}]]);wx.createComponent(d);
