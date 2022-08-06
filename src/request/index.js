import axios from 'axios'

const request = axios.create({
  withCredentials: true,
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
  // 判断登录时是否获取到token
  const token = localStorage.getItem('x-auth-token')
  if (token) {
    config.headers = {"x-auth-token": token}
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
