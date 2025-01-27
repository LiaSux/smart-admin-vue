import router from '@smart/admin/router'
import { SMART } from '@smart/admin/types/constant.ts'
import { storage } from '@smart/utils'
import { isEmpty } from 'lodash-es'

const smart = storage.get(SMART.APP_CONF)

export const useUserStore = defineStore('smart-user', () => {
  // 标识
  const token = ref<string>(smart.test.token || storage.get(SMART.USER_TOKEN))

  const onInit = async () => {
    if (isEmpty(token.value)) {
      router.push('/login').then(() => {})
      return
    }

    const result = await SmartApi.userInit()
    console.log(result, '===')
  }

  return {
    token,
    onInit,
  }
})
