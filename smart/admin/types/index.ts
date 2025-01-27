import type { RouteLocationNormalized } from 'vue-router'

export declare namespace App {
  // 菜单折叠
  type Fold = boolean
}

export declare namespace Menu {
  type Fold = boolean
}

export declare namespace Tab {
  // 页面标签
  interface Item extends RouteLocationNormalized {
    active: boolean
  }
  type List = Item[]
}

export declare interface BundleConf {
  name: string

  routers: [

  ]
}
