# Element-Plus-Crx

[![npm](https://img.shields.io/npm/v/element-plus-crx.svg)](https://www.npmjs.com/package/element-plus-crx)

## 文档

- [使用文档 github](https://agrass-github.github.io/element-plus-crx/)
- [使用文档 gitee](https://agrass.gitee.io/element-plus-crx/)

## 安装使用

`npm install element-plus-crx --save`

## 介绍

- Vue 3 Composition AP
- TypeScript 编写

一个基于 vue3 + element plus 的扩展组件库，提供数据配置表单，表格，菜单等扩展组件。

极简的思想，完全的数据驱动，拥有绝对的灵活性，内置双语言，完整的 typescript 提示，方便的全局配置，帮助你快速开发！！up! up! up!


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


