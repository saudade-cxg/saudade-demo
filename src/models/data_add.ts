import { Effect, ImmerReducer, Subscription,history } from 'umi';
import {shopAddReq} from '../services'
import {message,Modal} from 'antd'
interface DataAddModelState {
    // 初始化数据类型
    //   name: string;
}
interface DataAddModelType {
  namespace: string;
  state: DataAddModelState;
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


const dataAddModel: DataAddModelType = {
    namespace: 'data_add',
    state: {
        add_result: {}
    },
    effects: {
        *addShop ({payload},{call,put}) {
            const {status,msg} = yield call(shopAddReq,payload)
            if (status == 1) {
                // message.success(msg)
                Modal.confirm({
                    content: '添加成功，您是否要跳转到商品列表页？',
                    onOk() {
                        history.push('/data-manger/shop')
                    },
                    onCancel () {
                        //  取消
                    }
                  });
            } else {
                message.warning(msg)
            }
        }
    },
    reducers:{
        
    },
    subscriptions: {
        setup () {}
    }
}
export default dataAddModel