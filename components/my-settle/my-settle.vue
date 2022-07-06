<template>
  <!-- 此为结算区域的组件 -->
  <view>
    <!-- 最外层的容器 -->
    <view class="my-settle-container">
      <!-- 全选区域 -->
      <label class="radio" @click="changeAllGoodsState">
        <radio value="" :checked="isFull" color="#c00000"/><text>全选</text>
      </label>
      <!-- 合计区域 -->
      <view class="amount-box">
        结算<text class="amount">￥{{ checkoutAllGoodsAmount }}</text>
      </view>
      <!-- 结算按钮 -->
      <view class="btn-settle" @click="settlement">结算({{ checkedCount }})</view>
    </view>
  </view>
</template>

<script>
  import {mapGetters,mapMutations,mapState} from 'vuex'
  export default {
    name:"my-settle",
    data() {
      return {
        // 倒计时的秒数
        second: 3,
        // 定时器的id
        timer: null
      };
    },
    methods: {
      ...mapMutations(['updataAllGoodsState','updataRedirect']),
      changeAllGoodsState() {
        console.log(!this.isFull);
        this.updataAllGoodsState(!this.isFull)
      },
      // 点击了结算按钮
      settlement() {
        // 1. 先判断是否勾选了要结算的商品
        if(this.checkedCount == 0) return uni.$showMsg('请勾选商品')
        // 2. 再判断用户是否选择了收货地址
        if(JSON.stringify(this.address) == '{}'){
          return uni.$showMsg('请选择收货地址')
        } 
        // 3. 最后判断用户是否登录了
        // if(!this.token) return uni.$showMsg('请优先登录')
        if(!this.token) {
          this.delayNavigate()
          console.log('请登录');
        }
      },
      // 展示倒计时的提示消息
      showTips(n) {
        uni.showToast({
          title:'等待' + n + '秒后跳转至登录页面',
          mask: true,
          duration: 1500,
          icon:'none'
        })
      },
      // 延迟导航到 my 页面
      delayNavigate() {
        // 1. 展示提示消息，此时 seconds 的值等于 3
        this.showTips(this.second)
        this.timer = setInterval(() => {
          this.second--
          if(this.second <= 0) {
            clearInterval(this.timer)
            uni.switchTab({
              url:'/pages/my/my',
              success: (res) => {
                this.updataRedirect({
                  // 跳转的方式
                  openType: 'switchTab',
                  // 从哪个页面跳转过去的
                  from: '/pages/cart/cart'
                })
              }
            })
            this.second = 3
            return
          }
          this.showTips(this.second)
        },1000)
      }
    },
    computed: {
      ...mapGetters(['checkedCount','isFull','checkoutAllGoodsAmount']),
      ...mapState(['address','token'])
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