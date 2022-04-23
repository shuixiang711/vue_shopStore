import Vue from 'vue'
import App from './App.vue'
import { Button, MessageBox } from 'element-ui';
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
//引入三级联动组件 设置为全局组件
import TypeNav from '@/components/TypeNav'
//注册为全局组件  第一个参数：全局组件的名字 第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
//引入vue-lazyload
import Vuelazyload from 'vue-lazyload'
import jiazai from '@/assets/1.gif'
Vue.use(Vuelazyload, {
  //懒加载默认图片
  loading: jiazai
})
//设置全局组件轮播图
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)
//设置全局组件分页器
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)
//统一接口api文件夹里面的全部请求
//统一引入
import * as API from '@/api'

import router from '@/router'

import store from '@/store'

Vue.config.productionTip = false
//引入mockServer.js
import '@/mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'
//引用vee-validate插件来验证表单
import VeeValidate from 'vee-validate'
//中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'   // 引入中文 message
Vue.use(VeeValidate)

// 第二步：提示信息
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: { // 给校验的 field 属性名映射中文名称
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    agree: '协议'
  }
})

//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
  validate: value => {
  return value
  },
  getMessage: field => field + '必须同意'
  })

new Vue({
  router,
  render: h => h(App),
  store,
  //配置全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this,
      Vue.prototype.$API = API
  }
}).$mount('#app')
