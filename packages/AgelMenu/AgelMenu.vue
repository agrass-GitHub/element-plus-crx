<template>
  <ElMenu ref="menuRef" v-bind="$attrs" @select="(...v) => emits('select', ...v)"
    @close="(...v) => emits('close', ...v)" @open="(...v) => emits('open', ...v)">
    <AgelMenuItem v-for="(item, i) in menus" :key="i" v-bind="item">
    </AgelMenuItem>
  </ElMenu>
</template>

<script lang='ts'>
export default { name: 'AgelMenu', inheritAttrs: false }
</script>

<script setup lang='ts'>
import AgelMenuItem from './AgelMenuItem.vue'
import { ref, } from 'vue'
import type { MenuProps } from 'element-plus'

type MenuItem = InstanceType<typeof AgelMenuItem>["$props"]

interface Props extends Partial<MenuProps> {
  menus: MenuItem[]
}

const props = defineProps<Props>()
const emits = defineEmits(['close', 'select', 'open']) // ts 提示
const menuRef = ref() as any


defineExpose({
  open: (...v: any) => menuRef.value.open(...v),
  close: (...v: any) => menuRef.value.close(...v)
})
</script>

