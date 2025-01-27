import type { Menu } from '../types'

export const useMenuStore = defineStore('smart-menu', () => {
  /**
   * 菜单折叠
   */
  const fold = ref<Menu.Fold>(false)

  const onToggle = () => {
    fold.value = !fold.value
  }

  return {
    fold,
    onToggle,
  }
})
