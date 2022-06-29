<template>
  <view class="my-search-container" :style="{'background-color': bgcolor}" >
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-search-box" :style="{'border-radius': radius + 'px'}" @click="searchBoxHandler">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
  export default {
    name:"my-search",
    props: {
      // 背景颜色
      bgcolor: {
        type: String,
        default: '#c00000'
      },
      // 圆角尺寸
      radius: {
        tyoe: Number,
        default: 18
      }
    },
    setup() {
      // 点击了模拟的 input 输入框
      function searchBoxHandler() {
        // 跳转到分包中的搜索页面
        wx.navigateTo({
          url: '/subpkg/search/search'
        })
      }
      return {
        searchBoxHandler
      }
    }
  }
</script>

<style lang="less">
.my-search-container {
  width: 100%;
  height: 50px;
  background-color: #c00000;
  display: flex;
  align-items: center;
  .my-search-box {
    width: 100%;
    height: 36px;
    background-color: #ffffff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
}
</style>