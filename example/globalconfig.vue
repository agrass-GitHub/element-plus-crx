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
    },
    ElTableColumn: {
      align: "center",
      showOverflowTooltip: true,
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
      let valueFormat = 'YYYY-MM-DD'
      let dateType = props?.attrs?.type
      if (dateType == "datetime" || dateType == "datetimerange") {
        valueFormat = "YYYY-MM-DD HH:mm:ss"
      }
      if (dateType == "month" || dateType == "monthrange") {
        valueFormat = "YYYY-MM"
      }
      if (dateType == "year") {
        valueFormat = "YYYY"
      }
      return {
        valueFormat,
        placeholder: '请选择' + props.label,
      }
    }
  },
}
</script>