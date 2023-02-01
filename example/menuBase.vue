<template>
  <div class="demo">
    <ElRadioGroup v-model="mode" style="margin:0px 20px 20px 0px">
      <ElRadioButton label="vertical">竖向菜单</ElRadioButton>
      <ElRadioButton label="horizontal">横向菜单</ElRadioButton>
    </ElRadioGroup>

    <ElRadioGroup v-model="isCollapse">
      <ElRadioButton :label="false">展开</ElRadioButton>
      <ElRadioButton :label="true">收起</ElRadioButton>
    </ElRadioGroup>

    <AgelMenu :menus="menuData" :collapse="isCollapse" :mode="(mode as any)" @select="select" class="demo-menu">
    </AgelMenu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const mode = ref('vertical')
const isCollapse = ref(false)
const menuData = [
  {
    title: '1 级菜单',
    icon: new URL('./img/logo.svg', import.meta.url).href,
    index: '/home-1',
    children: [
      {
        title: '1-1 菜单',
        icon: 'Menu',
        index: '/home-1-1',
      },
      {
        title: '1-2 菜单',
        icon: 'Menu',
        index: '/home-1-2',
        disabled: true,
      },
      {
        title: '1-3 菜单',
        icon: 'Menu',
        index: '/home-1-2',
        hidden: true,
      },
    ]
  },
  ...Array.from({ length: 5 }).map((v, i) => {
    return {
      title: (i + 2) + '级菜单',
      icon: 'Menu',
      index: '/home-' + (i + 2),
    }
  })
]

function select(index: string) {
  ElMessage.success('选中菜单' + index)
}

</script>
<style>

</style>