<template>
  <div>
    <AgelTable :columns="table.columns" :data="table.data" @row-contextmenu="rowContextmenu" @cell-click="cellClick">
    </AgelTable>
    <AgelContextMenu v-model="contextMenu.show" :x="contextMenu.x" :y="contextMenu.y" :menus="contextMenu.data"
      @select="contextMenu.onSelect">
    </AgelContextMenu>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const table = reactive({
  data: [
    { date: '2016-05-02', name: '王小虎', },
    { date: '2016-05-02', name: '王小虎', },
    { date: '2016-05-02', name: '王小虎', },
  ],
  columns: [
    { label: '日期', prop: 'date', },
    { label: '姓名', prop: 'name' }
  ]
})

const contextMenu = reactive({
  show: false,
  x: 0,
  y: 0,
  onSelect: (item: any) => {
    console.log(item)
  },
  data: [
    {
      title: '1 级菜单',
      icon: new URL('./img/logo.svg', import.meta.url).href,
      divided: true,
      children: [
        {
          title: '1-1 菜单',
          // icon: 'Menu',
          remark: 'Ctrl+A',
          index: '/home-1-1',
        },
        {
          title: '1-2 菜单',
          index: '/home-1-2',
          disabled: true,
        },
        {
          title: '1-3 菜单',
          index: '/home-1-2',
        },
      ]
    },
    ...Array.from({ length: 3 }).map((v, i) => {
      return {
        icon: 'Menu',
        title: (i + 2) + '级菜单',
      }
    })
  ]
})

function cellClick() {
  console.log('xxxxxx')
}

function rowContextmenu(row: any, column: any, e: MouseEvent) {
  contextMenu.show = true
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY
  e.preventDefault()
}



</script>

<style ></style>