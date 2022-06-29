<template>
  <view>
    <!-- 使用自定义的搜索组件 -->
    <view class="search-box">
      <my-search></my-search>
    </view>
    <!-- 轮播图区域 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
      <swiper-item v-for="item in homeDate.swiperList" :key="item.goods_id">
        <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
          <image :src="item.image_src" mode=""></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 分类导航区域 -->
    <view class="nav-list">
      <view class="nav-item" v-for="(item,i) in homeDate.navList" :key="i" @click="navClick(item)">
        <image :src="item.image_src" mode=""></image>
      </view>
    </view>
    <!-- 楼层区域 -->
    <view class="floor-list">
      <!-- 楼层 item 项 -->
      <view class="item" v-for="(item,i) in homeDate.floorList" :key="i">
        <!-- 楼层标题 -->
        <image :src="item.floor_title.image_src" mode="" class="floor-title"></image>
        <!-- 楼层图片区域 -->
        <view class="floor-img-box">
          <!-- 左侧大图片的盒子 -->
          <navigator class="left-img-box" :url="item.product_list[0].url">
            <image :src="item.product_list[0].image_src" :style="{width : item.product_list[0].image_width + 'rpx'}" mode="widthFix"></image>
          </navigator>
          <!-- 右侧 4 个小图片的盒子 -->
          <view class="right-img-box">
            <navigator class="right-img-item" v-for="(item2,i2) in item.product_list" :key="i2" :url="item2.url">
              <image :src="item2.image_src" v-if="i2 !== 0" mode=""></image>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { reactive,onMounted } from 'vue'
  export default {
    setup() {
      const homeDate = reactive({
        swiperList: [],
        //分类导航的数据列表
        navList: [],
        //楼层的数据列表
        floorList: []
      })
      function navClick(item) {
        if(item.name == '分类') {
          uni.switchTab({
            url:'/pages/cate/cate'
          })
        }
      }
      onMounted(async () => {
        // 得到轮播图数据
        const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
        console.log(res,'res的值');
        if(res.meta.status !== 200) return uni.$showMsg()
        homeDate.swiperList = res.message
        // 得到nav数据
        const { data: res2 } = await uni.$http.get('/api/public/v1/home/catitems')
        console.log(res2,'res2的值');
        if (res.meta.status !== 200) return uni.$showMsg()
        homeDate.navList = res2.message
        // 得到楼层数据
        const { data: res3 } = await uni.$http.get('/api/public/v1/home/floordata')
        console.log(res3,'res3的数据');
        if (res.meta.status !== 200) return uni.$showMsg()
        // 通过双层 forEach 循环，处理 URL 地址
        res3.message.forEach((item) => {
          item.product_list.forEach((pro) => {
            pro.url = '/subpkg/good_list/good_list?' + pro.navigator_url.split('?')[1]
          })
        })
        homeDate.floorList = res3.message
      })
      return {
        homeDate,
        navClick
      }
    }
  }
</script>
<style lang="less">
  .search-box {
    position: sticky;
    top: 0;
    z-index: 99;
  }
swiper {
  height: 330rpx;
  .swiper-item {
    width: 97%;
    margin: 0 auto;
    image {
      width: 100%;
      height: 330rpx;
    }
  }
}
.nav-list {
  display: flex;
  justify-content: space-around;
  margin: 30rpx 0;
  .nav-item {
    image {
      width: 128rpx;
      height: 128rpx;
    }
  }
}
.floor-list {
  .item {
    .floor-title  {
      width: 100%;
      height: 60rpx;
    }
    .floor-img-box {
      display: flex;
      padding-left: 15rpx;
      .right-img-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        image {
          width: 232rpx;
          height: 187.2rpx;
        }
      }
    }
  }
}
</style>
