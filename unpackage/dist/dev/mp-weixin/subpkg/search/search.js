"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let timer = common_vendor.ref(null);
    const searchData = common_vendor.reactive({
      kw: "",
      searchResults: [],
      historyList: []
    });
    async function getSearchList() {
      if (searchData.kw == "") {
        searchData.searchResults = [];
      } else {
        const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/qsearch", { query: searchData.kw });
        if (res.meta.status !== 200)
          return common_vendor.index.$showMsg();
        searchData.searchResults = res.message;
      }
    }
    function input(e) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchData.kw = e;
        getSearchList();
      }, 500);
    }
    function gotoDetail(id) {
      searchData.historyList.push(searchData.kw);
      common_vendor.index.setStorageSync("kw", JSON.stringify(searchData.historyList));
      common_vendor.index.navigateTo({
        url: `/subpkg/goods_detail/goods_detail?goods_id=${id}`
      });
      setTimeout(() => {
        searchData.kw = "";
      }, 500);
    }
    function gotoGood_list(item) {
      common_vendor.index.navigateTo({
        url: `/subpkg/good_list/good_list?query=${item}`
      });
    }
    function clearHistory() {
      searchData.historyList = [], common_vendor.index.removeStorageSync("kw");
    }
    common_vendor.onMounted(() => {
      searchData.historyList = JSON.parse(common_vendor.index.getStorageSync("kw"));
    });
    const history = common_vendor.computed$1(() => {
      return [.../* @__PURE__ */ new Set([...searchData.historyList])].reverse();
    });
    return {
      input,
      searchData,
      gotoDetail,
      history,
      clearHistory,
      gotoGood_list
    };
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($setup.input),
    b: common_vendor.o(($event) => $setup.searchData.kw = $event),
    c: common_vendor.p({
      focus: true,
      radius: "15",
      placeholder: "\u641C\u7D22",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $setup.searchData.kw
    }),
    d: $setup.searchData.kw.length !== 0
  }, $setup.searchData.kw.length !== 0 ? {
    e: common_vendor.f($setup.searchData.searchResults, (item, i, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: "368cdb79-1-" + i0,
        c: item.goods_id,
        d: common_vendor.o(($event) => $setup.gotoDetail(item.goods_id), item.goods_id)
      };
    }),
    f: common_vendor.p({
      type: "arrow-right",
      size: "16"
    })
  } : {
    g: common_vendor.o($setup.clearHistory),
    h: common_vendor.p({
      type: "trash",
      size: "17"
    }),
    i: common_vendor.f($setup.history, (item, i, i0) => {
      return {
        a: i,
        b: common_vendor.o(($event) => $setup.gotoGood_list(item)),
        c: "368cdb79-3-" + i0,
        d: common_vendor.p({
          text: item,
          type: "primary"
        })
      };
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/subpkg/search/search.vue"]]);
wx.createPage(MiniProgramPage);
