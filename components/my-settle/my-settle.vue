<template>
  <view>
    <!-- 最外层的容器 -->
    <view class="my-settle-container">
      <!-- 全选区域 -->
      <label class="radio" @click="changeAllGoodsState">
        <radio value="" :checked="isFull" color="#c00000"/><text>结算</text>
      </label>
      <!-- 合计区域 -->
      <view class="amount-box">
        结算<text class="amount">￥99999</text>
      </view>
      <!-- 结算按钮 -->
      <view class="btn-settle">结算({{ checkedCount }})</view>
    </view>
  </view>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name:"my-settle",
    data() {
      return {
        
      };
    },
    methods: {
      ...mapMutations(['updataAllGoodsState']),
      changeAllGoodsState() {
        console.log(!this.isFull);
        this.updataAllGoodsState(!this.isFull)
      }
    },
    computed: {
      ...mapGetters(['checkedCount','isFull'])
    },
    created() {
      // console.log(this.isFull);
    }
  }
</script>

<style lang="less">
.my-settle-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  font-size: 14px;
  .radio {
    display: flex;
    align-items: center;
  }
  .btn-settle {
    height: 100rpx;
    min-width: 200rpx;
    background-color: #c00000;
    color: white;
    line-height: 100rpx;
    text-align: center;
    padding: 0 10px;
  }
}
</style>