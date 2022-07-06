"use strict";
var common_vendor = require("../common/vendor.js");
var store = common_vendor.createStore({
  state: {
    cart: JSON.parse(common_vendor.index.getStorageSync("cart") || "[]"),
    address: JSON.parse(common_vendor.index.getStorageSync("address") || "{}"),
    token: common_vendor.index.getStorageSync("token") || "",
    userinfo: JSON.parse(common_vendor.index.getStorageSync("userinfo") || "{}"),
    redirect: null
  },
  getters: {
    total(state) {
      let c = 0;
      state.cart.forEach((item) => {
        c += item.goods_count;
      });
      return c;
    },
    addstr(state) {
      if (!state.address.provinceName)
        return "";
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo;
    },
    checkedCount(state) {
      return state.cart.filter((item) => {
        return item.goods_state == true;
      }).reduce((total, item) => {
        return item.goods_count + total;
      }, 0);
    },
    isFull(state) {
      let result = state.cart.every((item) => {
        return item.goods_state === true;
      });
      return result;
    },
    checkoutAllGoodsAmount(state) {
      return state.cart.filter((item) => {
        return item.goods_state === true;
      }).reduce((total, item) => {
        return total + item.goods_count * item.goods_price;
      }, 0);
    }
  },
  mutations: {
    addToCart: function(state, goods) {
      const findResult = state.cart.find((item) => {
        return item.goods_id === goods.goods_id;
      });
      if (!findResult) {
        state.cart.push(goods);
      } else {
        findResult.goods_count += 1;
      }
      this.commit("saveToStorage");
    },
    saveToStorage(state) {
      common_vendor.index.setStorageSync("cart", JSON.stringify(state.cart));
    },
    changeStatus(state, cartItem) {
      const findResult = state.cart.find((item) => {
        return item.goods_id == cartItem.goods_id;
      });
      if (findResult) {
        findResult.goods_state = cartItem.goods_state;
        this.commit("saveToStorage");
      }
    },
    changeCount(state, cartItem) {
      const findResult = state.cart.find((item) => {
        return item.goods_id == cartItem.goods_id;
      });
      if (findResult) {
        findResult.goods_count = cartItem.goods_count;
        this.commit("saveToStorage");
      }
    },
    removeGoodsById(state, goods_id) {
      state.cart = state.cart.filter((item) => {
        return item.goods_id !== goods_id;
      });
      this.commit("saveToStorage");
    },
    updateAddress(state, address) {
      state.address = address;
      this.commit("saveAddressToStorage");
    },
    saveAddressToStorage(state) {
      common_vendor.index.setStorageSync("address", JSON.stringify(state.address));
    },
    updataAllGoodsState(state, newState) {
      state.cart.forEach((item) => {
        item.goods_state = newState;
      });
    },
    saveUserInfoToStorage(state) {
      common_vendor.index.setStorageSync("userinfo", JSON.stringify(state.userinfo));
    },
    updataUserInfo(state, userInfo) {
      state.userinfo = userInfo;
      this.commit("saveUserInfoToStorage");
    },
    updataToken(state, val = "elaina") {
      state.token = val;
      common_vendor.index.setStorageSync("token", state.token);
    },
    updataRedirect(state, info) {
      state.redirect = info;
    }
  },
  actions: {},
  modules: {}
});
exports.store = store;
