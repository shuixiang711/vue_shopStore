import Vue from 'vue'
import App from './App.vue'
//引入三级联动组件 设置为全局组件
import TypeNav from '@/components/TypeNav'
//注册为全局组件  第一个参数：全局组件的名字 第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
//设置全局组件轮播图
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

import router from '@/router'

import store from '@/store'

Vue.config.productionTip = false
//引入mockServer.js
import '@/mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
