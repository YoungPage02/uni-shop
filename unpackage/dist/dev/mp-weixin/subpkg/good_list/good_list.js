"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      queryObj: {
        pagenum: 1,
        pagesize: 10
      },
      goodsList: [],
      total: 0,
      isloading: false,
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  },
  methods: {
    async getGoodsList(cb) {
      this.isloading = true;
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/search", this.queryObj);
      this.isloading = false;
      cb && cb();
      console.log(res, "\u5546\u54C1\u5217\u8868\u6570\u636E");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.goodsList = [...this.goodsList, ...res.message.goods];
      console.log(this.goodsList);
      this.total = res.message.total;
    },
    gotoDetail(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
      });
    }
  },
  onLoad(options) {
    if (options.query) {
      this.queryObj.query = options.query;
    } else if (options.cid) {
      this.queryObj.cid = options.cid;
    }
    this.getGoodsList();
  },
  onReachBottom() {
    if (this.isloading)
      return;
    if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total)
      return common_vendor.index.$showMsg("\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01");
    this.queryObj.pagenum += 1;
    this.getGoodsList();
  },
  onPullDownRefresh() {
    this.queryObj.pagenum = 1, this.goodsList = [], this.total = 0, this.isloading = false;
    this.getGoodsList(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  _easycom_my_goods2();
}
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
if (!Math) {
  _easycom_my_goods();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsList, (item, i, i0) => {
      return {
        a: "f866590a-0-" + i0,
        b: common_vendor.p({
          goods: item
        }),
        c: i,
        d: common_vendor.o(($event) => $options.gotoDetail(item))
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/study/uni_shop2/subpkg/good_list/good_list.vue"]]);
wx.createPage(MiniProgramPage);
