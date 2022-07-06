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
  name: "my-login",
  computed: __spreadValues({}, common_vendor.mapState(["redirect"])),
  data() {
    return {};
  },
  methods: __spreadValues({
    getUserProfile() {
      common_vendor.index.getUserProfile({
        desc: "\u4E00\u952E\u767B\u5F55",
        fail: () => {
          common_vendor.index.$showMsg("\u60A8\u53D6\u6D88\u4E86\u767B\u5F55\u6388\u6743");
        },
        success: (res) => {
          console.log(res);
          this.updataUserInfo(res);
          this.getToken(res);
        }
      });
    },
    getToken(info) {
      common_vendor.index.login({
        provider: "weixin",
        fail: () => {
          common_vendor.index.$showMsg("\u767B\u5F55\u5931\u8D25");
        },
        success: async (res) => {
          ({
            code: res.code,
            encryptedData: info.encryptedData,
            iv: info.iv,
            rawData: info.rawData,
            signature: info.signature
          });
          this.updataToken();
          this.navigateBack();
        }
      });
    },
    navigateBack() {
      if (this.redirect !== null && this.redirect.openType == "switchTab") {
        common_vendor.index.switchTab({
          url: this.redirect.from,
          complete: () => {
            this.updataRedirect(null);
          }
        });
      }
    }
  }, common_vendor.mapMutations(["updataUserInfo", "updataToken", "updataRedirect"]))
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
      type: "contact-filled",
      size: "100",
      color: "#AfAfAf"
    }),
    b: common_vendor.o((...args) => $options.getUserProfile && $options.getUserProfile(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
