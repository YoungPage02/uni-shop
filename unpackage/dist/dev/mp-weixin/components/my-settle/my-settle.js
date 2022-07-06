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
    return {
      second: 3,
      timer: null
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["updataAllGoodsState", "updataRedirect"])), {
    changeAllGoodsState() {
      console.log(!this.isFull);
      this.updataAllGoodsState(!this.isFull);
    },
    settlement() {
      if (this.checkedCount == 0)
        return common_vendor.index.$showMsg("\u8BF7\u52FE\u9009\u5546\u54C1");
      if (JSON.stringify(this.address) == "{}") {
        return common_vendor.index.$showMsg("\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740");
      }
      if (!this.token) {
        this.delayNavigate();
        console.log("\u8BF7\u767B\u5F55");
      }
    },
    showTips(n) {
      common_vendor.index.showToast({
        title: "\u7B49\u5F85" + n + "\u79D2\u540E\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762",
        mask: true,
        duration: 1500,
        icon: "none"
      });
    },
    delayNavigate() {
      this.showTips(this.second);
      this.timer = setInterval(() => {
        this.second--;
        if (this.second <= 0) {
          clearInterval(this.timer);
          common_vendor.index.switchTab({
            url: "/pages/my/my",
            success: (res) => {
              this.updataRedirect({
                openType: "switchTab",
                from: "/pages/cart/cart"
              });
            }
          });
          this.second = 3;
          return;
        }
        this.showTips(this.second);
      }, 1e3);
    }
  }),
  computed: __spreadValues(__spreadValues({}, common_vendor.mapGetters(["checkedCount", "isFull", "checkoutAllGoodsAmount"])), common_vendor.mapState(["address", "token"])),
  created() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.isFull,
    b: common_vendor.o((...args) => $options.changeAllGoodsState && $options.changeAllGoodsState(...args)),
    c: common_vendor.t(_ctx.checkoutAllGoodsAmount),
    d: common_vendor.t(_ctx.checkedCount),
    e: common_vendor.o((...args) => $options.settlement && $options.settlement(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
