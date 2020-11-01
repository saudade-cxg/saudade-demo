import { Effect, ImmerReducer, Subscription } from 'umi';

export interface UserModelState {
    // 初始化数据类型
    //   name: string;
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
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


//cookie的数据类型定义
export interface GetCookie {
  (key:string): (string|undefined)
}
export interface SetCookie {
  (key:string, value:string, day:number):void
}