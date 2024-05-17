<template>
  <ElMenu ref="menuRef" v-bind="elMenuProps">
    <AgelMenuItem v-for="(item, i) in menus" :key="i" v-bind="item"> </AgelMenuItem>
  </ElMenu>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelMenu' })

import { ref, computed, useAttrs } from 'vue'
import { ElMenu } from 'element-plus'
import AgelMenuItem from './AgelMenuItem.vue'
import { getExcludeAttrs } from '../utils/utils'

type MenuItem = InstanceType<typeof AgelMenuItem>['$props']
type MenuProps = InstanceType<typeof ElMenu>['$props']

interface Props extends /* @vue-ignore */ Partial<MenuProps> {
  menus: MenuItem[]
}

const props = defineProps<Props>()
const menuRef = ref() as any

const elMenuProps = computed(() => {
  const propKeys = ['menus']
  return getExcludeAttrs(propKeys, { ...props, ...useAttrs() })
})

defineExpose({
  open: (...v: any) => menuRef.value.open(...v),
  close: (...v: any) => menuRef.value.close(...v)
})
</script>
