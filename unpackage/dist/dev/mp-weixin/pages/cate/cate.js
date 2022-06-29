"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let wh = common_vendor.ref(0);
    let active = common_vendor.ref(0);
    let scrollTop = common_vendor.ref(0);
    const cateData = common_vendor.reactive({
      cateList: [],
      cateList2: [],
      bgcolor: "#c00000"
    });
    function activeChange(i) {
      this.active = i;
      cateData.cateList2 = cateData.cateList[i].children;
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    }
    function gotoGoodsList(id) {
      common_vendor.index.navigateTo({
        url: `/subpkg/good_list/good_list?cid=${id}`
      });
    }
    common_vendor.onMounted(async () => {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/categories");
      console.log(res);
      if (res.meta.status !== 200)
        common_vendor.index.$showMsg();
      cateData.cateList = res.message;
      cateData.cateList2 = res.message[0].children;
    });
    const sysInfo = common_vendor.index.getSystemInfoSync();
    wh = sysInfo.windowHeight - 50;
    console.log(wh);
    return {
      cateData,
      wh,
      active,
      activeChange,
      scrollTop,
      gotoGoodsList
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
    a: common_vendor.p({
      bgcolor: $setup.cateData.bgcolor
    }),
    b: common_vendor.f($setup.cateData.cateList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n(i === $setup.active ? "active" : ""),
        c: common_vendor.o(($event) => $setup.activeChange(i)),
        d: item.cat_id
      };
    }),
    c: $setup.wh + "px",
    d: common_vendor.f($setup.cateData.cateList2, (item2, i2, i0) => {
      return {
        a: common_vendor.t(item2.cat_name),
        b: common_vendor.f(item2.children, (item3, i3, i1) => {
          return {
            a: item3.cat_icon,
            b: common_vendor.t(item3.cat_name),
            c: item3.cat_id,
            d: common_vendor.o(($event) => $setup.gotoGoodsList(item3.cat_id), item3.cat_id)
          };
        }),
        c: item2.cat_id
      };
    }),
    e: $setup.wh + "px",
    f: $setup.scrollTop
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
