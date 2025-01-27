<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const theme = {
  token: {
    colorPrimary: '#6b69f8',
  },
}
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="theme">
    <a-app class="w-full h-full">
      <router-view />
    </a-app>
  </a-config-provider>
</template>

<style>
@import "//at.alicdn.com/t/c/font_4809346_rg08u7xxw8.css";
</style>
