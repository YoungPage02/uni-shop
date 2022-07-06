<template>
  <view class="my-userInfo-container">
    <!-- 头像昵称区域 -->
    <view class="top-box">
      <image :src="userinfo.userInfo.avatarUrl" mode="" class="avatar"></image>
      <text class="nickname">{{ userinfo.userInfo.nickName }}</text>
    </view>
    <!-- 面板的列表区域 -->
    <view class="panel-list">
      <!-- 第一个面板 -->
      <view class="panel">
        <view class="panel-body">
          <view class="panel-item">
            <text>8</text>
            <text>收藏的店铺</text>
          </view>
          <view class="panel-item">
            <text>14</text>
            <text>收藏的商品</text>
          </view>
          <view class="panel-item">
            <text>18</text>
            <text>关注的商品</text>
          </view>
          <view class="panel-item">
            <text>84</text>
            <text>足迹</text>
          </view>
        </view>
      </view>
      <!-- 第二个面板 -->
      <view class="panel">
        <!-- 面板的标题 -->
        <view class="panel-title">我的订单</view>
        <!-- 主体 -->
        <view class="panel-body">
          <view class="panel-item">
            <image class="icon" src="@/static/my-icons/icon1.png" mode=""></image>
            <text>待付款</text>
          </view>
          <view class="panel-item">
            <image class="icon" src="@/static/my-icons/icon2.png" mode=""></image>
            <text>待收货</text>
          </view>
          <view class="panel-item">
            <image class="icon" src="@/static/my-icons/icon3.png" mode=""></image>
            <text>退款/退货</text>
          </view>
          <view class="panel-item">
            <image class="icon" src="@/static/my-icons/icon4.png" mode=""></image>
            <text>全部订单</text>
          </view>
        </view>
      </view>
      <!-- 第三个面板 -->
      <view class="panel">
        <view class="panel-list-item">
          <text>收货地址</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item">
          <text>联系客服</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item" @click="logout">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name:"my-userInfo",
    computed: {
      ...mapState(['userinfo'])
    },
    data() {
      return {
        
      };
    },
    methods: {
      ...mapMutations(['updataToken','updateAddress','updataUserInfo']),
      logout() {
        uni.showModal({
        	title: '提示',
        	content: '确认退出登录吗？',
        	success: (res) => {
        	  // console.log(res);
            if(res.confirm) {
              this.$store.commit('updataToken','')
              this.$store.commit('updateAddress',{})
              this.$store.commit('updataUserInfo',{})
            }
        	}
        });
      }
    }
  }
</script>

<style lang="less">
.top-box {
  height: 400rpx;
  background-color: #c00000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 1px 5px black;
  }
  .nickname {
    font-size: 16px;
    color: white;
    font-weight: bold;
    margin-top: 10px;
  }
}
.panel-list {
  padding: 0 10px;
  position: relative;
  top: -10px;
  .panel {
    background-color: white;
    border-radius: 3px;
    margin-bottom: 8px;
    .panel-title {
      line-height: 45px;
      padding-left: 10px;
      font-size: 15px;
      border-bottom: 1px solid #f4f4f4;
    }
    .panel-body {
      display: flex;
      justify-content: space-around;
      .panel-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        margin: 10px 0;
        .icon {
          width: 35px;
          height: 35px;
        }
      }
    }
    .panel-list-item {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
    }
  }
}
</style>