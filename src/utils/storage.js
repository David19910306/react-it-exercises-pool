export const TOKEN_VALUE = "x-auth-token"

export function getToken(){
  return localStorage.getItem(TOKEN_VALUE)
}

export function setToken(token){
  localStorage.setItem(TOKEN_VALUE, token)
}

export function removeToken(){
  localStorage.removeItem(TOKEN_VALUE)
}

export function hasToken(){
  return !!getToken()
}


