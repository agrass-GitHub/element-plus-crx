<template>
  <div>
    <div
      :class="['demo', { 'full-screen-demo': fullScreen }]"
      style="height: 150px"
      @contextmenu.prevent="onContextmenu($event)"
    >
      <p>此处使用右键触发菜单</p>
      <ElButton @click="fullScreen = !fullScreen">切换全屏</ElButton>
    </div>
    <AgelContextMenu
      v-model="contextMenu.show"
      :x="contextMenu.x"
      :y="contextMenu.y"
      :menus="contextMenu.data"
      @select="contextMenu.onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const fullScreen = ref(false)
const contextMenu = reactive({
  show: false,
  x: 0,
  y: 0,
  data: [
    { title: '1-1 菜单', icon: 'Menu' },
    {
      title: '1-2 菜单',
      icon: 'Menu',
      divided: true
    },
    {
      title: '1-3 菜单',
      icon: new URL('./img/logo.svg', import.meta.url).href,
      children: [
        { title: '1-3-1 菜单', remark: 'Ctrl+A' },
        { title: '1-3-2 菜单', disabled: true },
        {
          title: '1-3-3 菜单',
          className: 'custom-red-menu-item'
        }
      ]
    }
  ],
  onSelect: (item: any) => {
    console.log(item)
    ElMessage.success('选中了' + item.title)
  }
})

function onContextmenu(e: MouseEvent) {
  contextMenu.show = true
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY
  e.preventDefault()
}
</script>
<style>
.custom-red-menu-item {
  color: red !important;
}
.full-screen-demo {
  margin: 0px !important;
  width: 100vw !important;
  height: 100vh !important;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--el-bg-color);
  z-index: 999;
}
</style>
