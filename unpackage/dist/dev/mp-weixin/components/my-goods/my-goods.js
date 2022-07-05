"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-goods",
  props: {
    goods: {
      type: Object,
      defaul: {}
    },
    showRadio: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  },
  methods: {
    radioClickHandler() {
      console.log(this.goods);
      this.goods.goods_state = !this.goods.goods_state;
      this.$store.commit("changeStatus", this.goods);
    },
    numChangeHandler(val) {
      this.goods.goods_count = val;
      this.$store.commit("changeCount", this.goods);
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showRadio
  }, $props.showRadio ? {
    b: $props.goods.goods_state,
    c: common_vendor.o((...args) => $options.radioClickHandler && $options.radioClickHandler(...args))
  } : {}, {
    d: $props.goods.goods_small_logo || $data.defaultPic,
    e: common_vendor.t($props.goods.goods_name),
    f: common_vendor.t(Number($props.goods.goods_price).toFixed(2)),
    g: $props.showRadio
  }, $props.showRadio ? {
    h: common_vendor.o($options.numChangeHandler),
    i: common_vendor.p({
      min: 1,
      value: $props.goods.goods_count
    })
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
