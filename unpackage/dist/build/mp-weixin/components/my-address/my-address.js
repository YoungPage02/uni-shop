"use strict";var e=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(r,s,o)=>s in r?e(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,d=(e,d)=>{for(var a in d||(d={}))s.call(d,a)&&t(e,a,d[a]);if(r)for(var a of r(d))o.call(d,a)&&t(e,a,d[a]);return e},a=require("../../common/vendor.js");const n={name:"my-address",data:()=>({}),methods:d({async chooseAddress(){const e=await a.index.chooseAddress().catch((e=>e));console.log(e),"chooseAddress:ok"===e.errMsg&&this.updateAddress(e)}},a.mapMutations(["updateAddress"])),computed:d(d({},a.mapGetters(["addstr"])),a.mapState(["address"]))};if(!Array){a.resolveComponent("uni-icons")()}Math;var c=a._export_sfc(n,[["render",function(e,r,s,o,t,d){return a.e({a:"{}"===JSON.stringify(e.address)},"{}"===JSON.stringify(e.address)?{b:a.o(((...e)=>d.chooseAddress&&d.chooseAddress(...e)))}:{c:a.t(e.address.userName),d:a.t(e.address.telNumber),e:a.p({type:"arrowright",size:"16"}),f:a.t(e.addstr),g:a.o(((...e)=>d.chooseAddress&&d.chooseAddress(...e)))})}]]);wx.createComponent(c);