import axios from 'axios'
import Cookies from "js-cookie";

const request = axios.create({
  withCredentials: true,
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
  // 判断登录时是否获取到token
  if (Cookies.get('token')) {
    config.headers = {token: `Cookies ${Cookies.get('token')}`}
  }
  return config
}, error => {
  console.log(`error: 返回的代码是${error}`)
})

// 响应拦截
request.interceptors.response.use(response => {
  if (response.status === 200){
    return response
  }
  return new Error(`数据获取失败，返回码：${response.status}`)
})

export default request
