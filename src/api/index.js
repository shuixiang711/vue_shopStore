//所有API进行统一管理
import requests from './ajax'
import mockRequest from './mockAjax'
//获取轮播图接口
export const reqBannerList = () => mockRequest.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequest.get('/floor')

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

//获取搜素搜索模块数据 请求方式：post
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//获取产品详情信息的接口
export const reqGoodsInfo = (skuid) => requests({ url: `/item/${skuid}`, method: 'get' })

//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表数据接口
export const reaCartList = () => requests.get('/cart/cartList')

//删除购物车的接口
export const reqDeleteCartById = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`)

//修改商品选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`)

//获取验证码接口  /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => requests.get(`/user/passport/sendCode/${phone}`)

//注册接口  /api/user/passport/register
export const reqUserRegister = (params) => requests({ url: '/user/passport/register', data: params, method: 'post' })

//登录接口  /api/user/passport/login
export const reqUserLogin = (params) => requests({ url: '/user/passport/login', data: params, method: 'post' })


//获取用户信息【需要带着用户的token】 api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests.get('/user/passport/auth/getUserInfo')

//退出登录  /api/user/passport/logout
export const reqLogout = () => requests.get('/user/passport/logout')

//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests.get('/user/userAddress/auth/findUserAddressList')

//获取用户商品清单 /api/order/auth/trade
export const reqOrderInfo = () => requests.get('/order/auth/trade')

//提交订单的接口   /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, params) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data: params, method: 'post' })

//获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/api/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取支付订单状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests.get(`/payment/weixin/queryPayStatus/${orderId}`)

//获取个人中心的数据  /api/order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })

