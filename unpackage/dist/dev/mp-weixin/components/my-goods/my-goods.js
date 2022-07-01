"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-goods",
  props: {
    goods: {
      type: Object,
      defaul: {}
    }
  },
  data() {
    return {
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.goods.goods_small_logo || $data.defaultPic,
    b: common_vendor.t($props.goods.goods_name),
    c: common_vendor.t(Number($props.goods.goods_price).toFixed(2))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
