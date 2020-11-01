import { defineConfig } from 'umi';
import routes from './src/router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  layout:{
    name: 'lakers', 
    locale: true,
    logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601283659978&di=e2275a63697eaee5123a5104a4dd4d2a&imgtype=0&src=http%3A%2F%2F08imgmini.eastday.com%2Fmobile%2F20181120%2F20181120015630_d41d8cd98f00b204e9800998ecf8427e_1.jpeg'
  },
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  dva: {
    immer: true,
    hmr: true,
  },
});
