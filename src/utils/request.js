import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'
var loadingInstance = "";
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 50000 // 请求超时时间
})
// http request 拦截器 请求前拦截
service.interceptors.request.use(
  config => {
    if (localStorage.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    // loadingInstance = Loading.service({
    //   fullscreen: true
    // })
    return config;
  },
  err => {
    // loadingInstance.close();
    return Promise.reject(err);
  });
// http response 拦截器
service.interceptors.response.use(
  response => {
    // loadingInstance.close();
    const res = response.data
    if (res.status == 'success') {
      return response.data
    } else if (response.data.code == '401') {
      localStorage.clear();
      window.location.href = '/#/login';
      return Promise.reject('error')
    } else {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }
  },
  error => {
    // loadingInstance.close();
    if (error.response.status == 401) {
      localStorage.clear();
      window.location.href = '/#/login';
      return
    }
    console.log('err' + error) // for debug
    // Message({
    //   message: "错误:" + error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)


export default service