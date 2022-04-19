//引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
//路由配置信息
export default [
    //重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        meta: { isShowFooter: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { isShowFooter: true }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { isShowFooter: true }
    },
]