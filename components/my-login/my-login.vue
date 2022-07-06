<template>
  <view class="login-container">
    <uni-icons type="contact-filled" size="100" color="#AfAfAf"></uni-icons>
    <button type="primary" class="login-btn" @click="getUserProfile">一键登录</button>
    <text>登录享更多权益</text>
  </view>
</template>

<script>
  import {mapMutations,mapState} from 'vuex'
  export default {
    name:"my-login",
    computed: {
      ...mapState(['redirect'])
    },
    data() {
      return {
        
      };
    },
    methods: {
      // 得到授权的用户信息
      getUserProfile() {
        uni.getUserProfile({
          desc: '一键登录',
          fail: () => {
            uni.$showMsg('您取消了登录授权')
          },
          success: (res) => {
            console.log(res);
            // 得到用户信息
            this.updataUserInfo(res)
            // 获取登录成功后的 Token 字符串
            this.getToken(res)
          }
        })
      },
      // 调用登录接口，换取永久的 token
      getToken(info) {
        uni.login({
          provider: 'weixin',
          fail: () => {
            uni.$showMsg('登录失败')
          },
          success: async (res) => {
            // console.log(res);
            // 准备参数对象
            const query = {
              code: res.code,
              encryptedData: info.encryptedData,
              iv: info.iv,
              rawData: info.rawData,
              signature: info.signature
            }
            // 换取 token（用不了，自己模拟一个）
            /* const tokenRes = await uni.$http.post('/api/public/v1/users/wxlogin',query)
            console.log(tokenRes); */
            this.updataToken()
            this.navigateBack()
          }
        });
      },
      //返回登录之前的页面
      navigateBack() {
        // redirect 不为 null，并且导航方式为 switchTab
        if(this.redirect !== null && this.redirect.openType == 'switchTab') {
          uni.switchTab({
            url: this.redirect.from,
            // 导航成功之后，把 vuex 中的 redirectInfo 对象重置为 null
            complete: () => {
              this.updataRedirect(null)
            }
          })
        }
      },
      ...mapMutations(['updataUserInfo','updataToken','updataRedirect'])
    }
  }
</script>

<style lang="less">
.login-container {
  height: 750rpx;
  // background-color: cyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-btn {
    width: 90%;
    border-radius: 100rpx;
    margin: 15px 0;
  }
  text {
    font-size: 24rpx;
  }
}
</style>