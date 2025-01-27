import { useSmart } from '@smart/admin'
import { SMART } from '@smart/admin/types/constant.ts'
import storage from '@smart/utils/storage.ts'

const bundleSmart = {
  onLoad: () => {
    const smart = storage.get(SMART.APP_CONF)
    const { userStore, appStore } = useSmart()
    appStore.onInit(smart)
    userStore.onInit()
  },
}

export async function bundleInit(appBundles: any) {
  bundleSmart.onLoad()
  for (const bundle of appBundles) {
    try {
      bundle?.onLoad()
    }
    catch (err) {
      console.log('bundle onLoad error!', err)
    }
  }
}
