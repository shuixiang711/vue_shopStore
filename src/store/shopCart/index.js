import { reaCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'
const state = {
    carList: []
}
const actions = {
    //获取购物车列表
    async getCartList({ commit }) {
        const { data: res } = await reaCartList()
        // console.log(res);
        if (res.code === 200) {
            commit('GETCARTLIST', res.data)
        }
    },
    //删除购物车某一个产品
    async deleteCartListById({ commit }, skuId) {
        let { data: res } = await reqDeleteCartById(skuId)
        console.log(res);
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //修改购物车选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        const { data: res } = await reqUpdateCheckedById(skuId, isChecked)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.Error(new Error('fail'))
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        let promiseAll = []
        getters.carList.cartInfoList.forEach(item => {
            let promise = item.isChecked === 1 ? dispatch('deleteCartListById', item.skuId) : ''
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    },
    //修改全部产品状态
    updateAllCartIsChecked({ dispatch, state }, checked) {
        let promiseAll = []
        state.carList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked: checked })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GETCARTLIST(state, carList) {
        state.carList = carList
    }
}
const getters = {
    carList(state) {
        return state.carList[0] || {}
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}