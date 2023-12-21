<template>
  <img v-if="typeof icon === 'string' && getFileTypeByUrl(icon) == 'img'" :src="icon" class="el-icon" v-bind="$attrs" />
  <ElIcon v-else v-bind="$attrs">
    <component :is="typeof icon == 'string' && ElementPlusIcons[icon] ? ElementPlusIcons[icon] : icon"></component>
  </ElIcon>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelIcon' })

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { Component } from 'vue'
import { ElIcon } from 'element-plus'
import { getFileTypeByUrl } from '../utils/utils'

defineProps<{ icon: string | Component }>()
const ElementPlusIcons = ElementPlusIconsVue as { [k: string]: Component }
</script>
