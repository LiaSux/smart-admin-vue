<script lang="ts" setup>
import type { ButtonProps as AntButtonProps } from 'ant-design-vue'

type ButtonProps = {
  type?: string
  icon?: string
  auth?: []
  text?: string
  link?: boolean
} & AntButtonProps

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
})
</script>

<template>
  <a-button class="vertical-mid" v-bind="{ ...props, icon: undefined }">
    <template #icon>
      <sm-icon v-if="props.icon" :icon="props.icon" class="mt-[-2px]" />
    </template>
    <span v-if="props.text">{{ text }}</span>
    <slot v-else />
  </a-button>
</template>
