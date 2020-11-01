import {authRUL} from './url'
import {request} from 'umi'
//获取权限
export function authReq () {
    return request(authRUL,{
        method: 'POST'
    })
}