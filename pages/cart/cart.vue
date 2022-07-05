<template>
  <view class="cart-container">
    <!-- 地址 -->
    <my-address></my-address>
    <!-- 购物车商品列表的标题区域 -->
    <view class="cart-title">
      <!-- 左侧的图标 -->
      <uni-icons type="shop" size="18"></uni-icons>
      <!-- 描述文本 -->
      <text class="cart-title-text">购物车</text>
    </view>
    <!-- 商品列表区域 -->
    <uni-swipe-action>
      <block v-for="(goods, i) in cart" :key="i">
        <uni-swipe-action-item :right-options="options" @click="swipeActionClickHandler(goods)">
          <my-goods :goods="goods" :showRadio="true"></my-goods>
        </uni-swipe-action-item>
      </block>
    </uni-swipe-action>
    <!-- 结算区域 -->
    <my-settle></my-settle>
  </view>
</template>

<script>
  import badgeMix from '@/mixin/tabBar-badge.js'
  import {mapState,mapGetters} from 'vuex'
  export default {
    // 将 badgeMix 混入到当前的页面中进行使用
    mixins: [badgeMix],
    data() {
      return {
        options:[
          {
            text: '取消',
            style: {
                backgroundColor: '#007aff'
            }
          }
        ]
      };
    },
    methods: {
      // 点击了滑动操作按钮
      swipeActionClickHandler(goods) {
        // console.log(goods);
        this.$store.commit('removeGoodsById',goods.goods_id)
      }
    },
    computed: {
        ...mapState(['cart']),
      },
  }
</script>

<style lang="less">
.cart-container {
  padding-bottom: 100rpx;
}
.cart-title {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
  border-bottom: 1px solid #efefef;
  .cart-title-text {
    margin-left: 10px;
  }
}
</style>
