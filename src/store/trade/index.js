import { reqAddressInfo, reqOrderInfo } from '@/api'
const state = {
    address: [],
    orderInfo: {}
}
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        const { data: res } = await reqAddressInfo()
        // console.log(res);
        if (res.code == 200) {
            commit('GETUSERADDRESS', res.data)
        }
    },
    //获取商品列表
    async getOrderInfo({ commit }) {
        const { data: res } = await reqOrderInfo()
        if (res.code == 200) {
            commit('GETORERINFO', res.data)
        }
    }
}
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address || []
    },
    GETORERINFO(state, orderInfo) {
        state.orderInfo = orderInfo || {}
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}