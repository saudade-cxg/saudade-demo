import { dynamic } from 'umi';

//通过dynamic来按需加载引入组件
export default dynamic({
  loader: async function() {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './RegisterContent');
    return HugeA;
  },
});
