<template>
  <template v-if="hidden !== true">
    <ElSubMenu v-if="children && children.length > 0" :index="index" :disabled="disabled"
      v-bind="getExcludeAttrs(extendPropKeys, $attrs)">
      <template #title>
        <AgelIcon v-if="props.icon" :icon="props.icon"></AgelIcon>
        <span>{{ props.title }}</span>
      </template>
      <AgelMenuItem v-for="child, i in children" :key="i" v-bind="child"></AgelMenuItem>
    </ElSubMenu>
    <ElMenuItem v-else :index="index" :disabled="disabled">
      <AgelIcon v-if="props.icon" :icon="props.icon"></AgelIcon>
      <template #title>
        <span>{{ props.title }}</span>
      </template>
    </ElMenuItem>
  </template>
</template>

<script lang='ts'>
export default { name: 'AgelMenuItem', inheritAttrs: false  }
</script>

<script setup lang='ts'>
import AgelIcon from "../AgelIcon"
import { getExcludeAttrs } from '../utils/utils'
import type { SubMenuProps } from 'element-plus'

const extendPropKeys = ['title', 'icon', 'children', 'hidden']

interface MenuItem extends Partial<SubMenuProps> {
  index: string,
  title: string,
  icon?: string,
  disabled?: boolean,
  hidden?: boolean,
  children?: MenuItem[],
}

const props = defineProps<MenuItem>()


</script>
<style>

</style>

