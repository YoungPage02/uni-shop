import {mapState,mapGetters} from 'vuex'
export default {
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['total'])
    },
    methods: {
      // 为购物车设置图标
      setBadge() {
        uni.setTabBarBadge({
          index:2,
          text:this.total + ''  // 注意：text 的值必须是字符串，不能是数字
        })
      }
    },
    onShow() {
      // 在页面刚展示的时候，设置数字徽标
      this.setBadge()
    },
    watch: {
      total: {
        handler() {
          this.setBadge()
        }
      },
      immediate: true
    }
  }