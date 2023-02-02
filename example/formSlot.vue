<template>
  <ElForm :model="form.model" label-width="auto" class="demo __fullwidth">
    <AgelFormItems :items="form.items">
      <template #slot-date>
        <el-button>自定义 slot2</el-button>
      </template>
    </AgelFormItems>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const form = reactive({
  model: {},
  items: [
    {
      label: () => <el-tag>自定义 label</el-tag>,
      slot: () => <el-button>自定义 slot1</el-button>,
    },
    {
      label: '模板插槽',
      slot: 'slot-date',
    },
    {
      label: "组件子插槽",
      slot: "el-input",
      slots: {
        prepend: () => 'http://',
        append: () => '.com'
      }
    },
  ]
})
</script>