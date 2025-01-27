import type { Tab } from '../types'

export const useTabStore = defineStore('smart-tab', () => {
  /**
   * 页面标签
   */
  const tabs = ref<Tab.List>([])

  return {
    tabs,
  }
})
