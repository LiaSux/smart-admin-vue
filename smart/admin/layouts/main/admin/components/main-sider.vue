<script lang="ts" setup>
import { useSmart } from '../../../../index.ts'

const { menuStore } = useSmart()

function iconRender(name = 'list') {
  return h('i', {
    class: `icon i-${name}`,
    style: 'font-size: 18px',
  })
}

const menus = reactive([
  {
    key: '/admin/admin',
    title: '管理员',
    label: '管理员',
    icon: iconRender('admin'),
    children: [
      {
        key: '/admin/admin/user',
        title: '用户管理',
        label: '用户管理',
        icon: iconRender(),
      },
      {
        key: '/admin/admin/role',
        title: '角色管理',
        label: '角色管理',
        icon: iconRender('admin'),
        children: [
          {
            key: '/admin/admin/list',
            title: '用户列表',
            label: '用户列表',
            icon: iconRender('list'),
          },
        ],
      },
    ],
  },
  {
    key: '/admin/merchant',
    title: '商户管理',
    label: '商户管理',
    icon: iconRender('list'),
  },
])

const checked = ref<string[]>(['admin'])
const opened = ref<string[]>([])
</script>

<template>
  <a-layout-sider
    :collapsed="menuStore.fold"
    width="240px"
    class="text-white !bg-[#2f3447]"
  >
    <div class="flex items-center justify-center h-[68px] border-b-[1px] border-[#3b4257]">
      <sm-icon icon="matrix" class="text-[32px]" />
      <span v-if="!menuStore.fold" class="text-[22px] ml-2">Smart Admin</span>
    </div>
    <a-menu
      v-model:open-keys="opened"
      v-model:selected-keys="checked"
      :items="menus"
      :inline-indent="20"
      class="menu-container !bg-[#2f3447]"
      mode="inline"
      theme="dark"
    />
  </a-layout-sider>
</template>

<style lang="postcss">
.ant-layout-sider-collapsed {
  width: 64px !important;
  min-width: 64px !important;
  max-width: 64px !important;
}

.ant-menu {
  background: #2f3447 !important;
  font-size: 13px;
}

.ant-menu .ant-menu-item {
  //border-radius: 4px;
}

.menu-container {
  height: calc(100% - 68px);
  overflow-y: auto;
}

.ant-menu-title-content {
  margin-inline-start: 6px !important;
}
</style>
