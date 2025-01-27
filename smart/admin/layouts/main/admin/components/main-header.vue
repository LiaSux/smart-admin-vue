<script lang="ts" setup="">
import { useSmart } from '@smart/admin'

const { menuStore } = useSmart()
</script>

<template>
  <a-flex
    class="flex items-center !h-[50px] leading-[50px] bg-white"
    style="transition: width 0.2s"
  >
    <div class="flex mr-2 menu-switch" @click="menuStore.onToggle()">
      <sm-icon v-if="menuStore.fold" icon="unfold" />
      <sm-icon v-else icon="fold" />
    </div>
    <div class="flex border-l-[1px] border-[#eee]">
      <a-breadcrumb class="text-[13px] px-2">
        <a-breadcrumb-item>系统管理</a-breadcrumb-item>
        <a-breadcrumb-item>权限管理</a-breadcrumb-item>
        <a-breadcrumb-item>管理员</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <a-flex class="flex-1" justify="flex-end" align="flex-end">
      <div class="notice">
        <a-badge :count="12" dot>
          <sm-icon icon="bell" />
        </a-badge>
      </div>
    </a-flex>
    <div class="account mx-2 cursor-pointer">
      <a-dropdown placement="bottomRight">
        <div>
          <a-flex align="center" class="pr-2">
            <span class="max-w-[100px] text-[13px] mx-1 truncate">18859663626</span>
            <a-avatar :size="30" class="pr-2" style="color: #f56a00; background-color: #fde3cf">
              USER
            </a-avatar>
          </a-flex>
        </div>
        <template #overlay>
          <a-menu>
            <a-flex class="p-2">
              个人信息
            </a-flex>
            <a-menu-divider />
            <a-menu-item>
              <a-flex align="center" gap="2">
                <sm-icon icon="user" class="text-[16px]" />
                <span class="text-[13px]">修改信息</span>
              </a-flex>
            </a-menu-item>
            <a-menu-item>
              <a-flex align="center" gap="2">
                <sm-icon icon="setting" class="text-[16px]" />
                <span class="text-[13px]">偏好设置</span>
              </a-flex>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a-flex align="center" gap="2">
                <sm-icon icon="logout" class="text-[16px]" />
                <span class="text-[13px]">退出登录</span>
              </a-flex>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-flex>
</template>

<style lang="postcss">
.menu-switch, .notice {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  margin: 9px;
  cursor: pointer;
  border-radius: 50%;

  .icon {
    font-size: 18px;
  }

  &:hover {
    background-color: #f4f4f5;
  }
}
.account {
  .username {
    max-width: 80px;
    font-size: 13px;
  }
  &:hover {
    background-color: #f4f4f5;
  }
}
</style>
