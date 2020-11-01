// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/2004/1-React/3-React项目/react_app/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('D:/2004/1-React/3-React项目/react_app/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "path": "/",
        "name": "首页",
        "locale": "menu.home",
        "component": require('D:/2004/1-React/3-React项目/react_app/src/pages/home').default,
        "icon": "DingdingOutlined",
        "children": [
          {
            "path": "/home/overview",
            "name": "概述",
            "hideInMenu": true,
            "locale": "menu.home.overview"
          },
          {
            "path": "/home/search",
            "name": "搜索",
            "hideInMenu": true,
            "locale": "menu.home.search"
          }
        ],
        "exact": true
      },
      {
        "path": "/data-manger",
        "name": "数据管理",
        "locale": "menu.data_hui",
        "icon": "TwitterOutlined",
        "routes": [
          {
            "name": "商铺列表",
            "path": "/data-manger/shop",
            "component": require('@/pages/data-manger/ShopList').default,
            "exact": true
          },
          {
            "name": "用户列表",
            "path": "/data-manger/user",
            "component": require('@/pages/data-manger/UserList').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/data-add",
        "name": "数据添加",
        "locale": "menu.data_ming",
        "icon": "GitlabOutlined",
        "routes": [
          {
            "path": "/data-add/shop",
            "name": "商铺添加",
            "locale": "menu.other.outLoadMenu",
            "component": require('@/pages/data-add/ShopAdd').default,
            "exact": true
          },
          {
            "path": "/data-add/user",
            "name": "用户添加",
            "locale": "menu.other.outHomeEdit",
            "component": require('@/pages/data-add/UserAdd').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/other",
        "name": "其他",
        "locale": "menu.other",
        "icon": "CodeSandboxOutlined",
        "children": [
          {
            "path": "/other/upLoad",
            "name": "odps同步导入",
            "locale": "menu.other.upLoad"
          },
          {
            "path": "/other/upLoadMenu",
            "name": "菜单导入",
            "locale": "menu.other.upLoadMenu"
          },
          {
            "path": "/other/homeEdit",
            "name": "概述编辑",
            "locale": "menu.other.homeEdit",
            "hideInMenu": true
          }
        ],
        "exact": true
      },
      {
        "path": "/setting",
        "name": "设置",
        "icon": "SettingOutlined",
        "component": require('D:/2004/1-React/3-React项目/react_app/src/pages/setting').default,
        "wrappers": [require('@/wrappers/auth').default],
        "exact": true
      },
      {
        "path": "/login",
        "component": require('@/pages/user/Login').default,
        "exact": true
      },
      {
        "path": "/register",
        "component": require('@/pages/user/Register').default,
        "exact": true
      },
      {
        "component": require('@/pages/404').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
