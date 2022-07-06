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
var common_vendor = require("../common/vendor.js");
var badgeMix = {
  computed: __spreadValues(__spreadValues({}, common_vendor.mapState(["cart"])), common_vendor.mapGetters(["total"])),
  methods: {
    setBadge() {
      common_vendor.index.setTabBarBadge({
        index: 2,
        text: this.total + ""
      });
    },
    removeBadge() {
      common_vendor.index.removeTabBarBadge({
        index: 2
      });
    }
  },
  onShow() {
    if (this.total == 0) {
      this.removeBadge();
    } else {
      this.setBadge();
    }
  },
  watch: {
    total: {
      handler() {
        if (this.total == 0) {
          this.removeBadge();
        } else {
          this.setBadge();
        }
      }
    }
  }
};
exports.badgeMix = badgeMix;
