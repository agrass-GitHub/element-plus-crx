<template>
  <ElForm label-width="80px" :model="form.model" class="demo">
    <AgelFormGrid :items="form.items" :span="8" :gutter="10"> </AgelFormGrid>
  </ElForm>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  model: {},
  items: [
    { prop: "name", label: "姓名", },
    { prop: "sex", label: "性别", slot: 'agel-select', attrs: { options: ['男', '女'] } },
    { prop: "intor", label: "介绍" },
    { prop: "address", label: "地址", span: 24 },
  ],
})

</script>
