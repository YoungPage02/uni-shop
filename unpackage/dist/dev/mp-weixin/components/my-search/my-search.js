"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-search",
  props: {
    bgcolor: {
      type: String,
      default: "#c00000"
    },
    radius: {
      tyoe: Number,
      default: 18
    }
  },
  setup() {
    function searchBoxHandler() {
      wx.navigateTo({
        url: "/subpkg/search/search"
      });
    }
    return {
      searchBoxHandler
    };
  }
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
    a: common_vendor.p({
      type: "search",
      size: "17"
    }),
    b: $props.radius + "px",
    c: common_vendor.o((...args) => $setup.searchBoxHandler && $setup.searchBoxHandler(...args)),
    d: $props.bgcolor
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-search/my-search.vue"]]);
wx.createComponent(Component);
