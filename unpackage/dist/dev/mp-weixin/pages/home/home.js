"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const homeDate = common_vendor.reactive({
      swiperList: [],
      navList: [],
      floorList: []
    });
    function navClick(item) {
      if (item.name == "\u5206\u7C7B") {
        common_vendor.index.switchTab({
          url: "/pages/cate/cate"
        });
      }
    }
    common_vendor.onMounted(async () => {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/home/swiperdata");
      console.log(res, "res\u7684\u503C");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      homeDate.swiperList = res.message;
      const { data: res2 } = await common_vendor.index.$http.get("/api/public/v1/home/catitems");
      console.log(res2, "res2\u7684\u503C");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      homeDate.navList = res2.message;
      const { data: res3 } = await common_vendor.index.$http.get("/api/public/v1/home/floordata");
      console.log(res3, "res3\u7684\u6570\u636E");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res3.message.forEach((item) => {
        item.product_list.forEach((pro) => {
          pro.url = "/subpkg/good_list/good_list?" + pro.navigator_url.split("?")[1];
        });
      });
      homeDate.floorList = res3.message;
    });
    return {
      homeDate,
      navClick
    };
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.homeDate.swiperList, (item, k0, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
        c: item.goods_id
      };
    }),
    b: common_vendor.f($setup.homeDate.navList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: i,
        c: common_vendor.o(($event) => $setup.navClick(item))
      };
    }),
    c: common_vendor.f($setup.homeDate.floorList, (item, i, i0) => {
      return {
        a: item.floor_title.image_src,
        b: item.product_list[0].image_src,
        c: item.product_list[0].image_width + "rpx",
        d: item.product_list[0].url,
        e: common_vendor.f(item.product_list, (item2, i2, i1) => {
          return common_vendor.e({
            a: i2 !== 0
          }, i2 !== 0 ? {
            b: item2.image_src
          } : {}, {
            c: i2,
            d: item2.url
          });
        }),
        f: i
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
