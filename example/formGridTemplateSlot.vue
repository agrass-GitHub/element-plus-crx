<template>
  <ElForm label-width="80px" :model="form.model" class="demo">
    <AgelFormGrid :items="form.items">

      <template #slot-intor>
        <ElTag>这是一个模板模板插槽</ElTag>
      </template>

    </AgelFormGrid>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const form = reactive({
  model: {},
  items: [
    { prop: "name", label: "姓名", },
    { prop: "intor", label: "介绍", slot: 'slot-intor' },
  ],
})
</script>
