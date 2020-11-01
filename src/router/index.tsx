import {DingdingOutlined,TwitterOutlined,GitlabOutlined,CodeSandboxOutlined,SettingOutlined} from '@ant-design/icons'
import {dynamic} from 'umi'

// const Register = dynamic({
//   loader: async function() {
//     // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
//     const { default: HugeA } = await import(/* webpackChunkName: "user" */ '../pages/user/Register');
//     return HugeA;
//   },
// })
export default [
  {
    path: '/',
    name: '首页',
    locale: 'menu.home',
    component: '../pages/home',
    icon: 'DingdingOutlined',
    children: [
      {
        path: '/home/overview',
        name: '概述',
        hideInMenu: true,
        locale: 'menu.home.overview',
      },
      {
        path: '/home/search',
        name: '搜索',
        hideInMenu: true,
        locale: 'menu.home.search',
      },
    ],
  },
  {
    path: '/data-manger',
    name: '数据管理',
    locale: 'menu.data_hui',
    icon: 'TwitterOutlined',
    routes: [
     {
       name: '商铺列表',
       path: '/data-manger/shop',
       component: '@/pages/data-manger/ShopList'
      },
      {
        name: '用户列表',
        path: '/data-manger/user',
        component: '@/pages/data-manger/UserList'
     },
    ],
  },
  {
    path: '/data-add',
    name: '数据添加',
    locale: 'menu.data_ming',
    icon: 'GitlabOutlined',
    routes: [
      {
        path: '/data-add/shop',
        name: '商铺添加',
        locale: 'menu.other.outLoadMenu',
        component: '@/pages/data-add/ShopAdd'
      },
      {
        path: '/data-add/user',
        name: '用户添加',
        locale: 'menu.other.outHomeEdit',
        component: '@/pages/data-add/UserAdd'
      },
    ],
  },
  {
    path: '/other',
    name: '其他',
    locale: 'menu.other',
    icon: 'CodeSandboxOutlined',
    children: [
      {
        path: '/other/upLoad',
        name: 'odps同步导入',
        locale: 'menu.other.upLoad',
      },
      {
        path: '/other/upLoadMenu',
        name: '菜单导入',
        locale: 'menu.other.upLoadMenu',
      },
      {
        path: '/other/homeEdit',
        name: '概述编辑',
        locale: 'menu.other.homeEdit',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/setting',
    name: '设置',
    icon: 'SettingOutlined',
    component: '../pages/setting',
    wrappers: ['@/wrappers/auth'] // 路由权限
  },
  {
    path: '/login',
    component: '@/pages/user/Login'
  },
  {
    path: '/register',
    component: '@/pages/user/Register'
  },
  //错误路由匹配
  {
    component: '@/pages/404'
  }
];
