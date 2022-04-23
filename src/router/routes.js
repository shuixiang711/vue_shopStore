//引入组件
/* import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import Center from '@/pages/Center'
import PaySuccess from '@/pages/PaySuccess'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder' */

//路由配置信息
export default [
    //重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: ()=>import('@/pages/Home'),
        meta: { isShowFooter: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search'),
        meta: { isShowFooter: true }
    },
    {
        path: '/login',
        component: ()=>import('@/pages/Login')
    },
    {
        path: '/register',
        component: ()=>import('@/pages/Register')
    },
    {
        path: '/detail/:skuid',
        component: ()=>import('@/pages/Detail'),
        meta: { isShowFooter: true }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess'),
        meta: { isShowFooter: true }
    },
    {
        path: '/shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta: { isShowFooter: true }
    },
    {
        path: '/trade',
        component: ()=>import('@/pages/Trade'),
        meta: { isShowFooter: true },
        beforeEnter: (to, from, next) => {
            if (from.path=='/shopcar') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: ()=>import('@/pages/Pay'),
        meta: { isShowFooter: true },
        beforeEnter: (to, from, next) => {
            if (from.path=='/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        meta: { isShowFooter: true }
    },
    {
        path: '/center',
        component: ()=>import('@/pages/Center'),
        meta: { isShowFooter: true },
        children: [
            {
                path: '/center/myorder',
                component: ()=>import('@/pages/Center/myOrder'),
            },
            {
                path: '/center/grouporder',
                component: ()=>import('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect:'/center/myorder'
            }
        ]
    },
]