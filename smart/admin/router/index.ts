import type { RouteRecordRaw } from 'vue-router'
import { SMART } from '@smart/admin/types/constant.ts'
import { storage } from '@smart/utils'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const smart = storage.get(SMART.APP_CONF)

function getLayoutPath() {
  return `../layouts/${smart.layout || 'main'}`
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import(`${getLayoutPath()}/admin/index.vue`),
    children: [],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(`${getLayoutPath()}/error/404.vue`),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(`${getLayoutPath()}/login/index.vue`),
  },
]

const router = createRouter({
  history: smart.router?.mode === 'history'
    ? createWebHistory()
    : createWebHashHistory(),
  routes,
})

export default router
