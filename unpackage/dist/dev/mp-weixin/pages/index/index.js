"use strict";
var mixin_tabBarBadge = require("../../mixin/tabBar-badge.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [mixin_tabBarBadge.badgeMix],
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  _easycom_uni_link2();
}
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
if (!Math) {
  _easycom_uni_link();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      href: $data.href,
      text: $data.href
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
