<template>
  <img v-if="imgSrc" :src="imgSrc" class="el-icon" v-bind="$attrs" />

  <ElIcon v-else v-bind="$attrs">
    <component v-if="elIconName" :is="elIconName"></component>
    <component v-if="elIconComponent" :is="elIconComponent"></component>
  </ElIcon>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelIcon' })

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { computed } from 'vue'
import { ElIcon } from 'element-plus'
import { getFileTypeByUrl, isBase64Image } from '../utils/utils'
import type { Component } from 'vue'

const props = defineProps<{ icon: string | Component }>()
const ElementPlusIcons: { [k: string]: Component } = ElementPlusIconsVue

const imgSrc = computed(() => {
  if (typeof props.icon === 'string' && (getFileTypeByUrl(props.icon) == 'img' || isBase64Image(props.icon))) {
    return props.icon
  }
  return null
})

const elIconName = computed(() => {
  if (typeof props.icon === 'string' && ElementPlusIcons[props.icon]) {
    return ElementPlusIcons[props.icon]
  }
  return null
})

const elIconComponent = computed<Component | null>(() => {
  if (typeof props.icon === 'object') {
    return props.icon
  }
  return null
})
</script>
