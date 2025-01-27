<script lang="ts" setup>
interface IconProps {
  icon: string
}
withDefaults(defineProps<IconProps>(), {})
</script>

<template>
  <i
    class="icon text-[18px]"
    :class="[
      `i-${icon}`,
    ]"
  />
</template>
