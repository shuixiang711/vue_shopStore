import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopCart from './shopCart'
import user from './user'

export default new Vuex.Store({
    //注册小仓库
    modules: {
        home,
        search,
        detail,
        shopCart,
        user
    }
})