<template>
  <ElForm label-width="80px" :model="form.model" class="demo">
    <AgelFormGrid :ref="(v: any) => form.ref = v" :items="form.items" :span="12" :gutter="5"> </AgelFormGrid>
    <ElButton @click="toEdit">编辑</ElButton>
  </ElForm>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  ref: {} as any,
  model: {},
  items: [
    { prop: "name", label: "姓名", },
    { prop: "sex", label: "性别", slot: 'agel-select', attrs: { options: ['男', '女'] } },
    { prop: "intor", label: "介绍", span: 24 },
  ],
})

function toEdit() {
  console.log( form.ref.getRef('sex'))
  form.model = { name: String(Math.random()), sex: '男', intor: 'xxxxxxxx' }
}

</script>
