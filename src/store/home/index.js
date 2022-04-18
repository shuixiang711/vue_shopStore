import { reqCategoryList } from '@/api'
import { reqFloorList } from '@/api'
const state = {
    //state中数据默认初始值别瞎写，服务器返回的对象，服务器返回数组【根据接口返回值初始化】
    categoryList: [],
    floorList: []
}
const actions = {
    //通过api里面的接口函数调用。向服务器发送请求，获取服务器的数据
    async categoryList({ commit }) {
        const { data: res } = await reqCategoryList()
        // console.log(res);
        if (res.code == 200) {
            commit('CATEGORYLIST', res.data)
        }
    },
    async getFloorList({ commit }) {
        const { data: res } = await reqFloorList()
        // console.log(result);
        if (res.code == 200) {
            commit('GETFLOORLIST', res.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}