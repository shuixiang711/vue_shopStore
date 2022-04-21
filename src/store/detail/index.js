import { reqGoodsInfo } from '@/api'
//封装了临时游客身份---》生成一个随机字符串
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        const { data: res } = await reqGoodsInfo(skuid)
        // console.log(res.data);
        commit('GETGOODSINFO', res.data)
    }
}
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView(state) {
        //当前计算出的属性值至少是个空对象
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}