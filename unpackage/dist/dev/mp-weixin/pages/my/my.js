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
var mixin_tabBarBadge = require("../../mixin/tabBar-badge.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [mixin_tabBarBadge.badgeMix],
  computed: __spreadValues({}, common_vendor.mapState(["token"])),
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_my_login2 = common_vendor.resolveComponent("my-login");
  const _easycom_my_userInfo2 = common_vendor.resolveComponent("my-userInfo");
  (_easycom_my_login2 + _easycom_my_userInfo2)();
}
const _easycom_my_login = () => "../../components/my-login/my-login.js";
const _easycom_my_userInfo = () => "../../components/my-userInfo/my-userInfo.js";
if (!Math) {
  (_easycom_my_login + _easycom_my_userInfo)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.token
  }, !_ctx.token ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
