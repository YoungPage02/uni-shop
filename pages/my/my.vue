<template>
  <view>
    <my-login v-if="!token"></my-login>
    <my-userInfo v-else></my-userInfo>
  </view>
</template>

<script>
  import badgeMix from '@/mixin/tabBar-badge.js'
  import { mapState } from 'vuex'
  export default {
    // 将 badgeMix 混入到当前的页面中进行使用
    mixins: [badgeMix],
    computed: {
      ...mapState(['token'])
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="less">

</style>
