//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

//重写VueRouter.prototype.push()方法  解决多次点击编程式导航报错问题
//先把VueRouter.prototype.push方法备份一份
const VueRouterPush = VueRouter.prototype.push
//再调用原方法重写
VueRouter.prototype.push = function (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})