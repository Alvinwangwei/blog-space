import Cookies from 'js-cookie'

const tokenKey = 'Authorization'

/*
*    设置localStorage
**/
export function setLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

/*
*    获取getLocalStorage
**/
export function getLocalStorage(key, value) {
    return JSON.parse(window.localStorage.getItem(key) || '[]') 
}

/*
*    设置getSessionStorage
**/
export function setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
}

/*
*    获取getSessionStorage
**/
export function getSessionStorage(key) {
    return JSON.stringify(window.sessionStorage.getItem(key))
}

/*
*    设置setToken
**/
export function setToke(token) {
    Cookies.set(tokenKey, token)
}

/*
*    获取getToken
**/
export function getToken() {
    return Cookies.get(tokenKey)
}

/*
*    删除removeToken
**/
export function removeToken() {
    Cookies.remove(tokenKey)
}


// 字符串去空格

export function deleteSpace (str) {
    return str.replace(/\s+/g, '')
}