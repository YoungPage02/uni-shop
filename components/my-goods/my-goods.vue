<template>
  <!-- 商品粗略信息的详情 -->
  <view class="goods-item">
    <!-- 商品左侧图片区域 -->
    <view class="goods-item-left">
      <radio :checked="goods.goods_state" color="#C00000" v-if="showRadio" @click="radioClickHandler"></radio>
      <image :src="goods.goods_small_logo || defaultPic" class="goods-pic" @click="gotoGoods_detail"></image>
    </view>
    <!-- 商品右侧信息区域 -->
    <view class="goods-item-right">
      <!-- 商品标题 -->
      <view class="goods-name" @click="gotoGoods_detail">{{goods.goods_name}}</view>
      <view class="goods-info-box">
        <!-- 商品价格 -->
        <view class="goods-price">￥{{Number(goods.goods_price).toFixed(2)}}</view>
        <!-- 商品数量 -->
        <uni-number-box class="goods_num" :min="1" :value="goods.goods_count" @change="numChangeHandler" v-if="showRadio"></uni-number-box>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"my-goods",
    // 定义 props 属性，用来接收外界传递到当前组件的数据
    props: {
      // 商品的信息对象
      goods: {
        type: Object,
        defaul: {},
      },
      // 是否展示图片左侧的 radio
      showRadio: {
        type: Boolean,
        // 如果外界没有指定 show-radio 属性的值，则默认不展示 radio 组件
        default: false,
      },
    },
    data() {
      return {
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      }
    },
    methods: {
      // 改变商品的状态
      radioClickHandler() {
        console.log(this.goods);
        this.goods.goods_state = !this.goods.goods_state
        this.$store.commit('changeStatus',this.goods)
      },
      // 商品的数量发生了变化
      numChangeHandler(val) {
        // console.log(val);
        this.goods.goods_count = val
        this.$store.commit('changeCount',this.goods)
      },
      // 跳转至商品详情页
      gotoGoods_detail() {
        uni.navigateTo({
          url: `/subpkg/goods_detail/goods_detail?goods_id=${this.goods.goods_id}`
        })
      }
    }
  }
</script>

<style lang="less">
.goods-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #f0f0f0;

    .goods-item-left {
      margin-right: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .goods-pic {
        width: 100px;
        height: 100px;
        display: block;
      }
    }

    .goods-item-right {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      .goods-name {
        font-size: 13px;
      }
      .goods-info-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .goods-price {
          font-size: 16px;
          color: #c00000;
        }
      }
    }
  }
</style>