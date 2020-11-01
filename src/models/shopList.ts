import { Effect, ImmerReducer, Subscription,history } from 'umi';
import {getShopListReq,delShopListReq,updateShopListReq} from '../services'
import {message,Modal} from 'antd'

interface ShopListModelState {
    // 初始化数据类型
    //   name: string;
}
interface ShopListModelType {
  namespace: string;
  state: ShopListModelState;
  effects: {
      //effects中方法的类型
    // query: Effect;
  };
  reducers: {
    // save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<UserModelState>;
  };
  subscriptions: { setup: Subscription };
}


const ShopListModel: ShopListModelType = {
    namespace: 'shop_list',
    state: {
        lists: [],
        newLists: []
    },
    effects: {
        *getShopList ({payload},{call,put}) {
            const {status,msg,data} = yield call(getShopListReq)
            if (status != 1 ) message.info(msg)
            yield put({
                type: 'GET_SHOP_LIST',
                payload: data
            })
        },
        *delShopList ({payload},{call,put}) {
            const {status,msg} = yield call(delShopListReq,payload)
            if (status != 1 ) message.info(msg)
            yield put({
                type: 'DEL_SHOP_LIST',
                payload
            })
        },
        *updateShopList ({payload},{call,put}) {
            const {status,msg} = yield call(updateShopListReq,payload)
            if (status != 1 ) message.info(msg)
            yield put({
                type: 'UPDATE_SHOP_LIST',
                payload
            })
        },
        *priceSearchShopList ({payload},{call,put}) {
            yield put({
                type: 'PRICE_SEARCH_SHOP_LIST',
                payload
            })
        }
    },
    reducers:{
        GET_SHOP_LIST (state,{payload}) {
            return {...state,...{lists: payload,newLists:payload}}
        },
        DEL_SHOP_LIST (state,{payload}) {
            return {...state,...{lists: state.lists.filter(item => item.shopId != payload) }}
        },
        UPDATE_SHOP_LIST (state,{payload}) {
            state.lists.forEach(item => {
                if (item.shopId == payload.shopId) {
                    item.num = payload.num
                }
            })
            return state
        },
        PRICE_SEARCH_SHOP_LIST (state,{payload}) {
            //把符合价格的从state中筛选出来 
            // console.log('payload',payload)
            if (!payload) {
                state.lists = state.newLists
                return state 
            }
            state.lists = state.newLists.filter(item => item.price == payload)
            return state 
        }
    },
    subscriptions: {
        setup () {}
    }
}
export default ShopListModel