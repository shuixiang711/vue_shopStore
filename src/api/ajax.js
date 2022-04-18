//对ajax进行二次封装
import axios from "axios";
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'

//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios，只不过稍微配置了一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的请求，路径当中会出现api
    baseURL: '/api',
    //代表请求超时的时间5s
    timeout: 5000,
})
//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发送出去之前做一些事情

requests.interceptors.request.use(config => {
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    // Do something before request is sent
    nprogress.start()
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

requests.interceptors.response.use(response => {
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，并做一些事情
    // Do something before response is sent
    nprogress.done()
    return response;
}, error => {
    //响应失败的回调函数
    // Do something with response error
    return Promise.reject(error);
});

export default requests;