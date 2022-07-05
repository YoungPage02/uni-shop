"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-address",
  data() {
    return {};
  },
  methods: __spreadValues({
    async chooseAddress() {
      const res = await common_vendor.index.chooseAddress().catch((err) => err);
      console.log(res);
      if (res.errMsg === "chooseAddress:ok") {
        this.updateAddress(res);
      }
    }
  }, common_vendor.mapMutations(["updateAddress"])),
  computed: __spreadValues(__spreadValues({}, common_vendor.mapGetters(["addstr"])), common_vendor.mapState(["address"]))
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: JSON.stringify(_ctx.address) === "{}"
  }, JSON.stringify(_ctx.address) === "{}" ? {
    b: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  } : {
    c: common_vendor.t(_ctx.address.userName),
    d: common_vendor.t(_ctx.address.telNumber),
    e: common_vendor.p({
      type: "arrowright",
      size: "16"
    }),
    f: common_vendor.t(_ctx.addstr),
    g: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-address/my-address.vue"]]);
wx.createComponent(Component);
