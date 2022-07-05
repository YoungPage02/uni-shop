"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-settle",
  data() {
    return {};
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["updataAllGoodsState"])), {
    changeAllGoodsState() {
      console.log(!this.isFull);
      this.updataAllGoodsState(!this.isFull);
    }
  }),
  computed: __spreadValues({}, common_vendor.mapGetters(["checkedCount", "isFull"])),
  created() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.isFull,
    b: common_vendor.o((...args) => $options.changeAllGoodsState && $options.changeAllGoodsState(...args)),
    c: common_vendor.t(_ctx.checkedCount)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
