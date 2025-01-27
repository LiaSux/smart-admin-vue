<script lang="ts" setup>
//
</script>

<template>
  <a-layout-content class="h-full flex flex-col overflow-scroll p-[12px]">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </a-layout-content>
</template>
