<template>
  <template v-if="hidden !== true">
    <ElSubMenu v-if="children && children.length > 0" v-bind="elSubMenuProps" :index="index" :disabled="disabled">
      <template #title>
        <AgelIcon v-if="props.icon" :icon="props.icon"></AgelIcon>
        <span>{{ props.title }}</span>
      </template>
      <AgelMenuItem v-for="(child, i) in children" :key="i" v-bind="child"></AgelMenuItem>
    </ElSubMenu>
    <ElMenuItem v-else :index="index" :disabled="disabled">
      <AgelIcon v-if="props.icon" :icon="props.icon"></AgelIcon>
      <template #title>
        <span>{{ props.title }}</span>
      </template>
    </ElMenuItem>
  </template>
</template>

<script lang="ts">
export default { name: 'AgelMenuItem', inheritAttrs: false }
</script>

<script setup lang="ts">
import AgelIcon from '../AgelIcon'
import { getExcludeAttrs } from '../utils/utils'
import type { SubMenuProps } from 'element-plus'
import { computed } from 'vue'

interface MenuItem extends Partial<Omit<SubMenuProps, 'popperAppendToBody'>> {
  index: string
  title: string
  icon?: string
  disabled?: boolean
  hidden?: boolean
  children?: MenuItem[]
}

const props = withDefaults(defineProps<MenuItem>(), {
  teleported: true
})

const elSubMenuProps = computed(() => {
  const propKeys = ['title', 'icon', 'children', 'hidden']
  return getExcludeAttrs(propKeys, props)
})
</script>
<style></style>
