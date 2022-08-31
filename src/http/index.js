import request from "../request";

export default function httpRequest (url, method, params, data){
  return new Promise(async (resolve, reject) => {
    const resolved = await request({url, method, params, data})

    resolve(resolved)
  })
}
