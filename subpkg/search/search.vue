<template>
  <view>
    <view class="search-box">
      <!-- 使用 uni-ui 提供的搜索组件 -->
      <uni-search-bar class="uni-mt-10" v-model="searchData.kw" focus radius="15" placeholder="搜索" clearButton="auto" cancelButton="none" @input="input"/>
    </view>
    <!-- 搜索建议列表 -->
    <view class="sug-list" v-if="searchData.kw.length !== 0">
      <view class="sug-item" v-for="(item,i) in searchData.searchResults" :key="item.goods_id" @click="gotoDetail(item.goods_id)">
        <view class="goods_name">
          {{ item.goods_name }}
        </view>
        <uni-icons type="arrow-right" size="16"></uni-icons>
      </view>
    </view>
    <!-- 搜索历史 -->
    <view class="history-box" v-else>
      <!-- 标题区域 -->
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17" @click="clearHistory"></uni-icons>
      </view>
      <!-- 列表区域 -->
      <view class="history-list">
        <uni-tag :text="item" v-for="(item,i) in history" :key="i" type="primary" @click="gotoGood_list(item)"></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
  import {reactive,ref,onMounted,computed} from 'vue'
  export default {
    setup() {
      let timer = ref(null)
      const searchData = reactive({
        // 搜索关键词
        kw: '',
        // 搜索结果列表
        searchResults: [],
        // 搜索关键词的历史记录
        historyList: []
      })
      // 得到搜索建议列表
      async function getSearchList(){
        // 判断关键词是否为空
        if(searchData.kw == '') {
          searchData.searchResults = []
        }else {
          // 发起请求，获取搜索建议列表
          const { data: res } = await uni.$http.get('/api/public/v1/goods/qsearch', { query: searchData.kw })
          // console.log(res);
          if(res.meta.status !== 200) return uni.$showMsg()
          searchData.searchResults = res.message
        }
      }
      // search中的内容发生改变响应的事件
      function input(e) {
        // 清除 timer 对应的延时器
        clearTimeout(timer)
        timer = setTimeout(() =>{
          searchData.kw = e
          getSearchList()
        },500)
      }
      // 跳转到商品详情页
      function gotoDetail(id) {
        // 直接把搜索关键词 push 到 historyList 数组中
        searchData.historyList.push(searchData.kw)
        // 调用 uni.setStorageSync(key, value) 将搜索历史记录持久化存储到本地
        uni.setStorageSync('kw',JSON.stringify(searchData.historyList))
        uni.navigateTo({
          url: `/subpkg/goods_detail/goods_detail?goods_id=${id}`
        })
        setTimeout(() => {
          searchData.kw = ''
        },500)
      }
      // 跳转到商品列表页面
      function gotoGood_list(item) {
        uni.navigateTo({
          url: `/subpkg/good_list/good_list?query=${item}`
        })
      }
      // 清空历史记录
      function clearHistory() {
        // 清空 data 中保存的搜索历史
        searchData.historyList = [],
        // 清空本地存储中记录的搜索历史
        uni.removeStorageSync('kw')
      }
      onMounted(() => {
        // 加载本地存储的搜索历史记录
        if(uni.getStorageSync('kw')) {
          searchData.historyList = JSON.parse(uni.getStorageSync('kw'))
        }
      })
      const history = computed(() => {
        return [...new Set([...searchData.historyList])].reverse()
      })
      return {
        input,
        searchData,
        gotoDetail,
        history,
        clearHistory,
        gotoGood_list
      }
    }
  }
</script>

<style lang="less">
.search-box {
  width: 100%;
  background-color: #c00000;
  position: sticky;
  top: 0;
  z-index: 999;
}
.sug-list {
  padding: 0 5px;
  .sug-item {
    font-size: 12px;
    border-bottom: 1px solid #efefef;
    padding: 13px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods_name {
      // 文字不允许换行（单行文本）
      white-space: nowrap;
      // 溢出部分隐藏
      overflow: hidden;
      // 文本溢出后，使用 ... 代替
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
}
.history-box {
  padding: 0 5px;
  .history-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 28rpx;
    border-bottom: 1px solid #efefef;
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
      font-size: 28rpx;
    }
  }
}
</style>
