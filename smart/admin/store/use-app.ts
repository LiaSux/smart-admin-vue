export const useAppStore = defineStore('smart-app', () => {
  const skipTokenList = ref<string[]>([
    '/login',
    '/401',
    '/403',
    '/404',
    '/500',
    '/502',
  ])

  const onInit = (appConf: any) => {
    appConf?.skipTokenList?.forEach((route: string) => {
      skipTokenList.value.push(route)
    })
  }

  return {
    env: import.meta?.env,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
    // 路由配置
    router: {
      mode: 'history', // 模式
      transition: 'slide', // 转场动画
    },

    skipTokenList,

    onInit,
  }
})
