import {g6URL,authRUL,loginURL,registerURL,shopAddURL,shopListURL,delShopListURL,updateShopListURL} from './url'
import {request} from 'umi'


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl5YiIsInBhc3N3b3JkIjoieXliMTIzIiwiY3RpbWUiOjE2MDIyMTQzNDc1ODgsImlhdCI6MTYwMjIxNDM0N30.H94DaIyrYolfKrTZr2PjqQJQ_0DRE92_S5RsXUG1uGU'

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

//定义商品添加的参数类型
type ShopAddData = {
   imgRul: string,
   d_title: string,
   oringinal: string,
   sales: string,
   comment: string,
   num: string,
   token: string,
   shopId: string 
}
export function shopAddReq (data:ShopAddData) {
    return request(shopAddURL,{
        method: 'POST',
        data: {
            ...data,
            token
        }
    })
}


export function getShopListReq () {
    return request(shopListURL,{
        params: {
            token
        }
    })
}

export function delShopListReq (shopId:string) {
    return request(delShopListURL,{
        method: 'POST',
        data: {
            token,
            shopId
        }
    })
}

export function updateShopListReq (data) {
    return request(updateShopListURL,{
        params: {
            ...data,
            token
        }
    })
}


export function g6Req () {
    return request(g6URL)
}