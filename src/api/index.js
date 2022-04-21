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
export const reqUpdateCheckedById = (skuId,isChecked)=>requests.get(`/cart/checkCart/${skuId}/${isChecked}`)

