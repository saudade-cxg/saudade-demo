import {UserModelType} from '@/interface'

const userModel:UserModelType = {
    namespace: 'user', //如果不写，默认以文件名作为namespace
    state: {},
    effects: {},
    reducers: {},
    subscriptions: {
        setup () {}
    }
}   

export default userModel