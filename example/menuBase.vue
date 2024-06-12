<template>
  <div class="demo">
    <ElRadioGroup v-model="mode" style="margin: 0px 20px 20px 0px">
      <ElRadioButton value="vertical">竖向菜单</ElRadioButton>
      <ElRadioButton value="horizontal">横向菜单</ElRadioButton>
    </ElRadioGroup>

    <ElRadioGroup v-model="isCollapse">
      <ElRadioButton :value="false">展开</ElRadioButton>
      <ElRadioButton :value="true">收起</ElRadioButton>
    </ElRadioGroup>

    <AgelMenu class="demo-menu" :mode="mode" :menus="menuData" :collapse="isCollapse" @select="select"> </AgelMenu>
    <ElMenu :model="mode"></ElMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const mode = ref<'vertical' | 'horizontal'>('vertical')
const isCollapse = ref(false)
const menuData = [
  {
    title: '1 级菜单',
    icon: 'https://element-plus.org/images/element-plus-logo.svg',
    index: '/home-1',
    children: [
      {
        title: '1-1 菜单',
        icon: 'Menu',
        index: '/home-1-1'
      },
      {
        title: '1-2 菜单',
        icon: 'Menu',
        index: '/home-1-2',
        disabled: true
      },
      {
        title: '1-3 菜单',
        icon: 'Menu',
        index: '/home-1-2',
        hidden: true
      }
    ]
  },
  ...Array.from({ length: 5 }).map((v, i) => {
    return {
      title: i + 2 + '级菜单',
      icon: 'Menu',
      index: '/home-' + (i + 2)
    }
  })
]

function select(index: string, indexPath: string[]) {
  ElMessage.success('选中菜单' + index + indexPath)
}
</script>
<style></style>
