"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goods_info: {},
      options: [{
        icon: "shop",
        text: "\u5E97\u94FA",
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  methods: {
    getGoodsDeatails: async function(goods_id) {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/detail", { goods_id });
      console.log(res, "\u5546\u54C1\u8BE6\u60C5\u5BF9\u8C61");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;"').replace(/webp/g, "jpg");
      this.goods_info = res.message;
    },
    preview(i) {
      common_vendor.index.previewImage({
        current: i,
        urls: this.goods_info.pics.map((x) => x.pics_big)
      });
    },
    onClick(e) {
      if (e.content.text === "\u8D2D\u7269\u8F66") {
        common_vendor.index.switchTab({
          url: "/pages/cart/cart"
        });
      }
    }
  },
  onLoad(options) {
    const goods_id = options.goods_id;
    this.getGoodsDeatails(goods_id);
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.goods_info.goods_price
  }, $data.goods_info.goods_price ? {
    b: common_vendor.f($data.goods_info.pics, (item, i, i0) => {
      return {
        a: item.pics_big,
        b: common_vendor.o(($event) => $options.preview(i)),
        c: i
      };
    }),
    c: common_vendor.t($data.goods_info.goods_price),
    d: common_vendor.t($data.goods_info.goods_name),
    e: common_vendor.p({
      type: "star",
      size: "18",
      color: "gray"
    }),
    f: $data.goods_info.goods_introduce,
    g: common_vendor.o($options.onClick),
    h: common_vendor.o(() => {
    }),
    i: common_vendor.p({
      fill: true,
      options: $data.options,
      ["button-group"]: $data.buttonGroup
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/subpkg/goods_detail/goods_detail.vue"]]);
wx.createPage(MiniProgramPage);
