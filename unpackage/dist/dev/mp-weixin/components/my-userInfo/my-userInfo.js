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
var _imports_0 = "/static/my-icons/icon1.png";
var _imports_1 = "/static/my-icons/icon2.png";
var _imports_2 = "/static/my-icons/icon3.png";
var _imports_3 = "/static/my-icons/icon4.png";
const _sfc_main = {
  name: "my-userInfo",
  computed: __spreadValues({}, common_vendor.mapState(["userinfo"])),
  data() {
    return {};
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["updataToken", "updateAddress", "updataUserInfo"])), {
    logout() {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F",
        success: (res) => {
          if (res.confirm) {
            this.$store.commit("updataToken", "");
            this.$store.commit("updateAddress", {});
            this.$store.commit("updataUserInfo", {});
          }
        }
      });
    }
  })
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
  return {
    a: _ctx.userinfo.userInfo.avatarUrl,
    b: common_vendor.t(_ctx.userinfo.userInfo.nickName),
    c: _imports_0,
    d: _imports_1,
    e: _imports_2,
    f: _imports_3,
    g: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    h: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    i: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    j: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-userInfo/my-userInfo.vue"]]);
wx.createComponent(Component);
