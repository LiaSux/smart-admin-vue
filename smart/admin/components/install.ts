import type { App } from 'vue'
import Button from './button/index.vue'
import Icon from './icon/index.vue'
import Table from './table/index.vue'

export default {
  install(Vue: App) {
    Vue.component('SmButton', Button)
    Vue.component('SmTable', Table)
    Vue.component('SmIcon', Icon)
  },
}
