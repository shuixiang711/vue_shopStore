//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
import store from '@/store'
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

const router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
router.beforeEach(async (to, from, next) => {
    // to and from are both route objects. must call `next`.
    const token = localStorage.getItem('TOKEN')
    //因为空对象恒为真，所有不能判断userInfo要判断userInfo对象是否含有这个属性
    const name = store.state.user.userInfo.name
    if (token) {
        //用户已经登录了不能去login
        if (to.path == '/login') {
            next('/home')
        } else {
            //用户已经登录了，但去的不是login，可以是去search
            //有用户名则可以放行
            if (name) {
                next()
            } else {
                //没有用户信息,则派发action让仓库存储用户信息
                try {
                    //获取用户信息成功，则放行
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效了,获取不到用户信息，重新登录，清除token
                    store.commit('CLEARINFO')
                    next('/login')
                }
            }
        }
    } else {
        //用户未登录，不能去交易，购物车，支付相关的，个人中心，去这些路由跳转到登录。不是则放行
        //暂时不能处理
        // console.log(to.path);
        // next()
        const condition = ['/shopcart', '/trade', '/pay', 'paysuccess', 'center', '/center/myorder', '/center/grouporder']
        const toPath = to.path
        if (condition.includes(to.path)) {
            //把未登录的信息存储与路由中，登录成功后直接跳转
            next(`/login?redirect=${toPath}`)
        } else {
            next()
        }
    }
})

export default router
