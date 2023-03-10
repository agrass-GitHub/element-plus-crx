<template>
  <div>
    <div class="demo" style="height: 150px;" @contextmenu.prevent="onContextmenu($event)">
      此处使用右键触发菜单
    </div>
    <AgelContextMenu v-model="contextMenu.show" :x="contextMenu.x" :y="contextMenu.y" :menus="contextMenu.data"
      @select="contextMenu.onSelect" />
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
const contextMenu = reactive({
  show: false,
  x: 0,
  y: 0,
  data: [
    { title: '1-1 菜单', icon: 'Menu', },
    { title: '1-2 菜单', icon: 'Menu', divided: true, },
    {
      title: '1-3 菜单',
      icon: new URL('./img/logo.svg', import.meta.url).href,
      children: [
        { title: '1-3-1 菜单', remark: 'Ctrl+A', },
        { title: '1-3-2 菜单', disabled: true, },
        { title: '1-3-3 菜单', className:'custom-red-menu-item' },
      ]
    },
  ],
  onSelect: (item: any) => {
    console.log(item)
    ElMessage.success('选中了' + item.title)
  },
})

function onContextmenu(e: MouseEvent) {
  contextMenu.show = true
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY
  e.preventDefault()
}
</script>
<style>
  .custom-red-menu-item{
    color: red;
  }
</style>