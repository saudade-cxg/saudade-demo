import { message } from 'antd';
import {UserModelType} from '@/interface'
import {loginReq, registerReq} from '@/services'
import {setCookie} from '@/utils/cookie'
import {history} from 'umi'
const userModel:UserModelType = {
    namespace: 'user', //如果不写，默认以文件名作为namespace
    state: {
        loginData: {},
        registerData: {}
    },
    effects: {
        *login ({payload},{call,put}) {
            yield put({
                type: 'LOGIN',
                payload: {
                    username: payload.username,
                    ...yield call(loginReq,payload)
                }
            })
        },
        *register ({payload},{call,put}) {
            const {data:{status,msg}} = yield call(registerReq,payload)
            if (status == 1) {
                history.push('/login')
                yield put({
                    type: 'REGISTER'
                })
            } else {
                yield put({
                    type: 'REGISTER',
                    payload: msg
                })
            }
        }
    },
    reducers: {
        REGISTER (state,{payload}) {
            return {...state,...payload}
        },
        LOGIN (state,{payload:{username,data:{root,pic,token,status}}}) {
            //数据处理操作
            if (status == 1) {
                //1. cookie存储
                setCookie('root',root,7)
                setCookie('token',token,7)
                setCookie('pic',pic,7)
                setCookie('username',username,7)
                //2. 页面跳转 
                history.push('/')
            } else {
                //弹框
                message.info('您的用户名或者密码错误',2)
            }

            return {...state}
        }
    },
    subscriptions: {
        setup () {}
    }
}   

export default userModel