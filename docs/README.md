---
home: true

actions:
  - text: 起步 →
    link: /quickstart.html
    type: primary
features:
  - title: 数据表单
    details: 数据配置表单，极简的思想，完全的数据驱动，拥有绝对的灵活性
  - title: 数据列表
    details: 数据配置列表，极简的思想，完全的数据驱动，拥有绝对的灵活性
  - title: 快捷的使用
    details: 内置双语言，完整的typescript提示，更方便的全局配置，更多常用的扩展组件
footer: MIT Licensed | Copyright ©agrss
---

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

const arr =[
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