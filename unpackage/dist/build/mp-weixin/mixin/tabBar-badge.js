"use strict";var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,i=(e,i)=>{for(var s in i||(i={}))a.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))r.call(i,s)&&o(e,s,i[s]);return e},s=require("../common/vendor.js"),d={computed:i(i({},s.mapState(["cart"])),s.mapGetters(["total"])),methods:{setBadge(){s.index.setTabBarBadge({index:2,text:this.total+""})},removeBadge(){s.index.removeTabBarBadge({index:2})}},onShow(){0==this.total?this.removeBadge():this.setBadge()},watch:{total:{handler(){0==this.total?this.removeBadge():this.setBadge()}}}};exports.badgeMix=d;