import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//引入小仓库
import home from './home'
import search from './search'

export default new Vuex.Store({
    //注册小仓库
    modules: {
        home,
        search
   }
})