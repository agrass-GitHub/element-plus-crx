<template>
  <img v-if="isImg" :src="icon as string" class="el-icon" v-bind="$attrs" />
  <ElIcon v-else v-bind="$attrs">
    <component :is="icon"></component>
  </ElIcon>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { getFileTypeByUrl } from '../utils/utils'

defineOptions({ name: 'AgelIcon' })

const props = defineProps<{ icon: string | Component }>()

const isImg = computed(() => typeof props.icon == 'string' && getFileTypeByUrl(props.icon) == 'img')
</script>
