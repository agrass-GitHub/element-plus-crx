<template>
  <div class="demo">
    <ElConfigProvider :locale="zhCn" :experimental-features="{ ElementPlusCrx }">
      <BaseForm></BaseForm>
      <BaseTable></BaseTable>
    </ElConfigProvider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import BaseForm from './formGrid.vue'
import BaseTable from './tableBase.vue'
import type { ElementPlusCrxConfig } from "../packages"

const ElementPlusCrx: ElementPlusCrxConfig = {
  AgelTable: {
    ElTable: {
      border: true,
      highlightCurrentRow: true,
    },
    ElPagination: {
      layout: 'prev, pager, next, sizes, ->, total',
      pageSizes: [10, 20, 50, 100],
      background: true,
    }
  },
  AgelFormItem: {
    AgelSelect: function (props: any) {
      return {
        placeholder: '请选择' + props.label,
      }
    },
    ElInput: function (props: any) {
      return {
        clearable: true,
        placeholder: '请输入' + props.label,
      }
    },
    ElDatePicker: function (props: any) {
      if (props.type == undefined || props.type == 'date' || props.type == "daterange") {
        return { valueFormat: "yyyy-MM-dd", }
      }
      if (props.type == "datetime" || props.type == "datetimerange") {
        return { valueFormat: "yyyy-MM-dd HH:mm:ss" }
      }
      if (props.type == "month" || props.type == "monthrange") {
        return { valueFormat: "yyyy-MM" }
      }
      if (props.type == "year") {
        return { valueFormat: "yyyy" }
      }
      return {}
    }
  },
}
</script>