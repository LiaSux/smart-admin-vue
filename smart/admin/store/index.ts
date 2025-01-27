import { useMenuStore } from '@smart/admin/store/use-menu.ts'
import { useUserStore } from '@smart/admin/store/use-user.ts'
import { useAppStore } from './use-app'
import { useTabStore } from './use-tab'

export function useStore() {
  const appStore = useAppStore()
  const tabStore = useTabStore()
  const menuStore = useMenuStore()
  const userStore = useUserStore()

  return {
    appStore,
    tabStore,
    menuStore,
    userStore,
  }
}
