import axios from 'axios'
import {getToken, hasToken, TOKEN_VALUE} from "../utils/storage";

const request = axios.create({
  withCredentials: true,
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
  // 判断登录时是否获取到token
  const token = hasToken()
  if (token) {
    config.headers = {[TOKEN_VALUE]: getToken()}
  }
  return config
}, error => {
  console.log(`error: 返回的代码是${error}`)
})

// 响应拦截
request.interceptors.response.use(response => {
  if (response.status === 200) {
    return response
  }
  return new Error(`数据获取失败，返回码：${response.status}`)
}, error => {
  return error.response
})

export default request
