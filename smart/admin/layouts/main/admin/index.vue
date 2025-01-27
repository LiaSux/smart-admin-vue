<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import MainHeader from './components/main-header.vue'
import MainSider from './components/main-sider.vue'
import MainTabs from './components/main-tabs.vue'
import MainView from './components/main-view.vue'

useTitle('Smart-admin')
</script>

<template>
  <a-layout class="w-full h-full">
    <MainSider />
    <a-layout class="h-full flex flex-col">
      <MainHeader />
      <MainTabs />
      <MainView />
    </a-layout>
  </a-layout>
</template>
