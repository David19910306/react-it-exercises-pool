import request from "../request";

export default function (url, method, params){
  return new Promise(resolve => {
    const resolved = request({url, method, params})
    resolve(resolved)
  })
}
