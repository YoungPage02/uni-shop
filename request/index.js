// 导入网络请求包
/* import { $http } from '@escook/request-miniprogram'
uni.$http = $http

// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '请求加载中'
  })
}
// 请求完成之后做一些事情
$http.afterRequest = function () {
  uni.hideLoading()
} */
export default function service(api,method) {
  return uni.request({
    url: 'https://api-hmugo-web.itheima.net' + api,
    method: method
  })
}
