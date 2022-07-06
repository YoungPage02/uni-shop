import { createStore } from 'vuex'
export default createStore({
  state: {
    // 购物车的数组，用来存储购物车中每个商品的信息对象
    // 每个商品的信息对象，都包含如下 6 个属性：
    // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
    cart: JSON.parse(uni.getStorageSync('cart') || '[]' ),
    // 收货地址
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
    token: uni.getStorageSync('token') || '',
    // 用户的基本信息
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
    // 重定向的 object 对象 { openType, from }
    redirect: null
  },
  getters: {
    // 统计购物车中商品的总数量
    total(state) {
      let c = 0
      state.cart.forEach((item) => {
        // 循环统计商品的数量，累加到变量 c 中
        c += item.goods_count
      })
      return c
    },
    // 收货详细地址的计算属性
    addstr(state) {
      if(!state.address.provinceName) return ''
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
    },
    // 勾选的商品的总数量
    checkedCount(state) {
      return state.cart.filter((item) => {
        return item.goods_state == true
      }).reduce((total,item) => {
        return item.goods_count + total
      },0)
    },
    // 判断商品是否全选
    isFull(state) {
      let result = state.cart.every((item) => {
        return item.goods_state === true
      })
      return result
    },
    // 已勾选的商品的总价
    checkoutAllGoodsAmount(state) {
      return state.cart.filter((item) => {
        return item.goods_state === true
      }).reduce((total,item) => {
        return total + item.goods_count *item.goods_price
      },0)
    }
  },
  mutations: {
    addToCart: function(state,goods) {
      // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      const findResult = state.cart.find((item) => {
        return item.goods_id === goods.goods_id
      })
      if(!findResult) {
        state.cart.push(goods)
      }else {
        findResult.goods_count += 1
      }
      // 通过 commit 方法，调用  saveToStorage 方法
      this.commit('saveToStorage')
    },
    // 将购物车中的数据持久化存储到本地
    saveToStorage(state) {
      uni.setStorageSync('cart',JSON.stringify(state.cart))
    },
    changeStatus(state,cartItem) {
      const findResult = state.cart.find((item) => {
        return item.goods_id == cartItem.goods_id
      })
      if(findResult) {
        findResult.goods_state = cartItem.goods_state
        this.commit('saveToStorage')
      }
    },
    changeCount(state,cartItem) {
      const findResult = state.cart.find((item) => {
        return item.goods_id == cartItem.goods_id
      })
      if(findResult) {
        findResult.goods_count = cartItem.goods_count
        this.commit('saveToStorage')
      }
    },
    // 根据 Id 从购物车中删除对应的商品信息
    removeGoodsById(state,goods_id) {
      // 调用数组的 filter 方法进行过滤
      state.cart = state.cart.filter((item) => {
        return item.goods_id !== goods_id
      })
      // 持久化存储到本地
      this.commit('saveToStorage')
    },
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address
      this.commit('saveAddressToStorage')
    },
    // 定义将 address 持久化存储到本地 mutations 方法
    saveAddressToStorage(state) {
      uni.setStorageSync('address',JSON.stringify(state.address))
    },
    // 更新所有商品的状态
    updataAllGoodsState(state,newState) {
      state.cart.forEach((item) => {
        item.goods_state =newState
      })
    },
    // 将 userinfo 持久化存储到本地
    saveUserInfoToStorage(state) {
      uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
    },
    // 更新用户的基本信息
    updataUserInfo(state,userInfo) {
      state.userinfo = userInfo
      this.commit('saveUserInfoToStorage')
    },
    // 更新token值
    updataToken(state,val = 'elaina') {
      state.token = val
      // 存储在本地
      uni.setStorageSync('token',state.token)
    },
    updataRedirect(state,info) {
      state.redirect = info
    }
  },
  actions: {

  },
  modules: {
  }
})
