import task from '@/app/task'

const env = import.meta?.env?.VITE_ENV

export default {
  env,
  name: import.meta.env?.VITE_NAME,

  layout: 'main',

  // 路由配置
  router: {
    mode: 'history', // 模式
    transition: 'slide', // 转场动画
  },

  // 启用的模块列表
  bundles: [
    task,
  ],

  // 模拟测试的token
  test: {
    token: '',
  },

  skipTokenList: [
    '/abcd',
  ],

  service: {
    baseURL: env === 'dev' ? '/dev' : '/',
  },
}
