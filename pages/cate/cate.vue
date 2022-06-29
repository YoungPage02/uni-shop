<template>
  <view>
    <!-- 使用自定义的搜索组件 -->
    <my-search :bgcolor="cateData.bgcolor"></my-search>
    <view class="scroll-container">
      <!-- 左侧的滚动视图区域 -->
      <scroll-view scroll-y="true" :style="{height: wh + 'px'}" class="left-scroll">
        <template v-for="(item,i) in cateData.cateList" :key="item.cat_id">
          <view :class="['scroll-item', i===active ? 'active' : '' ]" @click="activeChange(i)">{{ item.cat_name }}</view>
        </template>
      </scroll-view>
      <!-- 右侧的滚动视图区域 -->
      <scroll-view scroll-y="true" :style="{height: wh + 'px'}" class="right-scroll" :scroll-top="scrollTop">
        <!-- 二级分类数据 -->
        <view class="cate-l2" v-for="(item2,i2) in cateData.cateList2" :key="item2.cat_id">
          <view class="item-title">
            {{ item2.cat_name }}
          </view>
          <!-- 三级分类数据 -->
          <view class="cate-l3">
            <!-- 三级分类 Item 项 -->
            <view class="cate-l3-item" v-for="(item3,i3) in item2.children" :key="item3.cat_id" @click="gotoGoodsList(item3.cat_id)">
              <!-- 图片 -->
              <image :src="item3.cat_icon"></image>
              <!-- 文本 -->
              <text>{{item3.cat_name}}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import {reactive,ref,onMounted} from 'vue'
  export default {
    setup() {
      let wh = ref(0)
      // 当前选中项的索引，默认让第一项被选中
      let active = ref(0)
      // 滚动条距离顶部的距离
      let scrollTop = ref(0)
      const cateData = reactive({
        // 分类数据列表
        cateList: [],
        // 二级分类列表
        cateList2: [],
        // 传递的颜色
        bgcolor: '#c00000'
      })
      // 选中项改变的事件处理函数
      function activeChange(i) {
        this.active = i
        cateData.cateList2 = cateData.cateList[i].children
        this.scrollTop = this.scrollTop===0 ? 1: 0
      }
      // 点击三级分类项跳转到商品列表页面
      function gotoGoodsList(id) {
        uni.navigateTo({
          url: `/subpkg/good_list/good_list?cid=${id}`
        })
      }
      onMounted(async () => {
        // 获取分类列表数据
        const {data:res} = await uni.$http.get('/api/public/v1/categories')
        console.log(res);
        if(res.meta.status !== 200) uni.$showMsg()
        cateData.cateList = res.message
        // 为二级分类赋值
        cateData.cateList2 = res.message[0].children
      })
      // 获取当前系统的信息
      const sysInfo = uni.getSystemInfoSync()
      // 为 wh 窗口可用高度动态赋值
      wh = sysInfo.windowHeight - 50
      console.log(wh);
      return {
        cateData,
        wh,
        active,
        activeChange,
        scrollTop,
        gotoGoodsList
      }
    }
  }
</script>

<style lang="less">
.scroll-container {
  display: flex;
  .left-scroll {
    width: 120px;
    height: 300px;
    .scroll-item {
      line-height: 60px;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 12px;
    }
    // 激活项的样式
    .active {
      background-color: lightcyan;
      position: relative;
      transition: all 1s;
    }
    .active::before {
      content: '';
      display: block;
      width: 3px;
      height: 30px;
      background-color: #c00000;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .right-scroll {
    height: 300px;
    .cate-l2 {
      .item-title {
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        padding: 15px 0;
      }
      .cate-l3 {
        display: flex;
        flex-wrap: wrap;
        .cate-l3-item {
          width: 33.33%;
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          image {
            width: 60px;
            height: 60px;
          }
          text {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
