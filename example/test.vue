<template>
  <ElForm label-width="80px" :model="form.model" class="demo">
    <AgelFormGrid :items="form.items" :span="8" :gutter="10">
      <template #slot-input>
        <ElInput v-model="form.model.sex" placeholder="请输入123" @change="inputChange" />
      </template>
    </AgelFormGrid>
  </ElForm>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  model: {
    sex: ''
  },
  items: [
    { prop: 'name', label: '姓名' },
    { prop: 'sex', label: '性别', slot: 'slot-input' },
    { prop: 'intor', label: '介绍' },
    { prop: 'address', label: '地址', span: 24 }
  ]
})

function inputChange(v) {
  console.log(v)
}
</script>
