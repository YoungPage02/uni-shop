<template>
  <view>
    <!-- 选择收货地址的盒子 -->
    <view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
      <button type="primary" size="mini" class="btnChooseAddress" @click="chooseAddress">请选择收货地址+</button>
    </view>
    <!-- 渲染收货信息的盒子 -->
    <view class="address-info-box" v-else @click="chooseAddress">
      <view class="row1">
        <view class="row1-left">
          <view class="username">收货人：<text> {{ address.userName }} </text></view>
        </view>
        <view class="row1-right">
          <view class="phone">电话：<text>{{ address.telNumber }}</text></view>
          <uni-icons type="arrowright" size="16"></uni-icons>
        </view>
      </view>
      <view class="row2">
        <view class="row2-left">收货地址：</view>
        <view class="row2-right">{{ addstr }}</view>
      </view>
    </view>
    <!-- 底部的边框线 -->
    <view class="address-border">
    </view>
  </view>
</template>

<script>
  import {mapState,mapMutations,mapGetters} from 'vuex'
  export default {
    name:"my-address",
    data() {
      return {
        // 收货地址
        /* address: {}, */
      };
    },
    methods: {
      // 选择收货地址
      async chooseAddress() {
        const res = await uni.chooseAddress().catch(err => err)
        console.log(res);
        // 2. 用户成功的选择了收货地址
        if(res.errMsg === 'chooseAddress:ok') {
          // this.address = res
          this.updateAddress(res)
        }
      },
      ...mapMutations(['updateAddress'])
    },
    computed: {
      ...mapGetters(['addstr']),
      ...mapState(['address'])
    }
  }
</script>

<style lang="less">
.address-choose-box {
  height: 180rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60rpx;
}
.address-border {
  border-bottom: 2rpx solid black;
}
.address-info-box {
  font-size: 12px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  .row1 {
    display: flex;
    justify-content: space-between;
    .row1-right {
      display: flex;
      align-items: center;
      .phone {
        margin-right: 5px;
      }
    }
  }
  .row2 {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .row2-left {
      white-space: nowrap;
    }
  }
}
</style>