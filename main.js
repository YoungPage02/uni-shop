
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

import { $http } from '@escook/request-miniprogram'
uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'http://www.uinav.com'
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
}
// 请求完成之后做一些事情
$http.afterRequest = function () {
  uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function(title = '请求数据失败',duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}
import store from './store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif