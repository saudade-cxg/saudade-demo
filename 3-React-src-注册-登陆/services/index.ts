import {authRUL,loginURL,registerURL} from './url'
import {request} from 'umi'
//获取权限
export function authReq () {
    return request(authRUL,{
        method: 'POST'
    })
}
//登录
export function loginReq (data) {
    return request(loginURL,{
        method: 'POST',
        data
    })
}
//注册
interface registerData {
    username: string,
    email: string,
    password: string
}
export function registerReq (data:registerData) {
    return request(registerURL,{
        method: 'POST',
        data
    })
}