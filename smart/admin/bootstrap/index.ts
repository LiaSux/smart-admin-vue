import type { App } from 'vue'
import { storage } from '@smart/utils'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ComponentInstall from '../components/install'
import router from '../router'
import { SMART } from '../types/constant'
import appWrapper from './app.vue'
import { bundleInit } from './bundle'
import '../styles/tailwind.css'

export async function buildApp() {
  const app: App = createApp(appWrapper)

  app.use(createPinia())
  app.use(ComponentInstall)
  app.use(router)

  app.mount('#app')
}

export async function start(conf: any) {
  storage.set(SMART.APP_CONF, conf)
  await buildApp()
  await bundleInit(conf.bundles)
}
