// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ApplyPluginsType, useModel } from "umi";
import { plugin } from "../core/umiExports";
import LayoutComponent from './layout/layout/index.tsx';

export default props => {
  const [runtimeConfig, setRuntimeConfig] = useState(null);

  const initialInfo = (useModel && useModel("@@initialState")) || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  useEffect(() => {
    const useRuntimeConfig =
      plugin.applyPlugins({
        key: "layout",
        type: ApplyPluginsType.modify,
        initialValue: initialInfo
      }) || {};
    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then(config => {
        setRuntimeConfig(config);
      });
      return;
    }
    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo?.initialState]);

  const userConfig = {
    ...{'name':'lakers','theme':'PRO','locale':true,'showBreadcrumb':true,'logo':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601283659978&di=e2275a63697eaee5123a5104a4dd4d2a&imgtype=0&src=http%3A%2F%2F08imgmini.eastday.com%2Fmobile%2F20181120%2F20181120015630_d41d8cd98f00b204e9800998ecf8427e_1.jpeg'},
    ...runtimeConfig || {}
  };

  if(!runtimeConfig){
    return null
  }

  return React.createElement(LayoutComponent, {
    userConfig,
    ...props
  });
};
