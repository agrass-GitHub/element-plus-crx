<template>
  <ElForm label-width="100px" :model="model" class="demo">
    <AgelFormGrid v-for="(rowData, rowIndex) in model.domains" :span="10" :items="domainsItems"
      :model-prop="'domains.' + rowIndex" :key="rowIndex" :scope="{ rowData, rowIndex }">

      <template #append>
        <ElCol :span="4">
          <ElButton @click="model.domains.splice(rowIndex, 1)">删除</ElButton>
        </ElCol>
      </template>

    </AgelFormGrid>

    <ElFormItem>
      <ElButton type="primary" @click="model.domains.push({ phone: String(model.domains.length + 1), })">添加</ElButton>
    </ElFormItem>
  </ElForm>

</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const model = reactive({
  domains: [
    { phone: '1' },
    { phone: '2' },
  ]
})

const domainsItems = [
  { span: 24, slot: ({ rowIndex }: any) => <b>动态表单{rowIndex + 1}</b> },
  { prop: 'phone', label: "联系手机" },
  { prop: "email", label: "联系邮件" },
  // 使用配置 也能实现
  // {
  //   span: 4,
  //   labelWidth: 0,
  //   slot: ({ rowIndex }: any) => {
  //     return <el-button onClick={() => model.domains.splice(rowIndex, 1)}>删除</el-button>
  //   }
  // },
]
</script>