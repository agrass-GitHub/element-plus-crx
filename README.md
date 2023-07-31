# Element-Plus-Crx

[![npm](https://img.shields.io/npm/v/element-plus-crx.svg)](https://www.npmjs.com/package/element-plus-crx)

提示：请使用 vue3.3 以上版本。

## 文档

- [使用文档 github](https://agrass-github.github.io/element-plus-crx/)
- [使用文档 gitee](https://agrass.gitee.io/element-plus-crx/)

## 安装使用

`npm install element-plus-crx --save`

## 特性

- Vue 3 Composition AP
- TypeScript 编写

数据配置
- 数据配置表单/表格，极简的思想，完全的数据驱动，拥有绝对的灵活性。

扩展组件
- 更多丰富的扩展组件，在 ElementPlus 没有找到的这里或许会有。

快捷使用
- 适配双语言，黑暗模式，完整的typescript提示，更方便的全局配置。

![docs](https://s1.ax1x.com/2023/03/10/ppuN6Ej.jpg)

## 如此简单

```vue
<template>
  <ElForm label-width="80px" :model="form.model">
    <AgelFormGrid :items="form.items" :span="8"> </AgelFormGrid>
  </ElForm>
  <AgelTable :data="table.data" :columns="table.columns"> </AgelTable>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const arr = [
  { label: '名称', prop: "name" },
  { label: '日期', prop: 'date' },
  { label: '地址', prop: 'address'},
]

const form = reactive({
  model: {},
  items: arr
})

const table = reactive({
  data: [],
  columns: arr
})
</script>
```


