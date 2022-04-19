import { reqGoodsInfo } from '@/api'
const state = {
    goodsInfo: {}
}
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        const { data: res } = await reqGoodsInfo(skuid)
        console.log(res.data);
        commit('GETGOODSINFO', res.data)
    }
}
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}