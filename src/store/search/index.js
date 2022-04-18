import { reqGetSearchInfo } from '@/api'
const state = {
    searchList: {},
}
const actions = {
    async getSearchList({ commit }, params) {
        const {data:res} = await reqGetSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHLIST', res.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
//计算属性：在项目当中，为了简化数据而生
const getters = {
    //state为当前search仓库的state
    goodsList(state) {
        //如果服务器返回数据，则正常请求没问题，但如果没有网络，state.searchList.goodsList返回是undefined，所以设置一个空数组反正报错
        return state.searchList.goodsList||[]
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}