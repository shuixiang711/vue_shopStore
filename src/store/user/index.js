//登入与注册模块
import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
    code: '',
    token: getToken(),
    userInfo: ''
}
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        const { data: res } = await reqGetCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //用户注册
    async userRegister({ commit }, params) {
        const { data: res } = await reqUserRegister(params)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new error('fail'))
        }
    },
    //用户登录
    async userLogin({ commit }, params) {
        const { data: res } = await reqUserLogin(params)
        if (res.code == 200) {
            //用户登录成功并且获取到了token
            commit('USERLOGIN', res.data.token)
            setToken(res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new error('fail'))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        const { data: res } = await reqUserInfo()
        if (res.code === 200) {
            commit('GETUSERINFO', res.data)
            return 'ok'
        } else {
            return Promise.reject(new error('fail'))
        }
    },
    //退出登录
    async userLogout({ commit }) {
        const { data: res } = await reqLogout()
        if (res.code === 200) {
            //清除本地数据
            commit('CLEARINFO')
            return 'ok'
        } else {
            return Promise.reject(new error('fail'))
        }
    }
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEARINFO(state) {
        state.userInfo = ''
        state.token = '',
            removeToken()
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}
