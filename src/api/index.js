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

