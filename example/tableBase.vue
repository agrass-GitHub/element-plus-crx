<template>
  <div class="demo">
    <AgelTable ref="tableRef" v-bind="table" v-model:page="table.page"> </AgelTable>
  </div>
</template>

<script lang="tsx" setup>
import { reactive, onMounted, ref } from 'vue'
import { ElMessage, } from 'element-plus'
import http from "./utils/http"

type Row = { name: string, date: string, address: string }

const tableRef = ref()
const table = reactive({
  loading: false,
  data: [] as Row[],
  height: '300px',
  columns: [
    { label: '#', type: 'selection', width: 50, align: 'center' },
    {
      label: '个人',
      children: [
        { label: '名称', prop: "name", sortable: 'custom' },
        { label: '日期', prop: 'date', sortable: 'custom' },
        { label: '地址', prop: 'address', width: 300, },
      ]
    },
  ],
  page: { currentPage: 1, pageSize: 10, total: 0, sortProp: 'name', sortOrder: 'ascending', },
  request: () => {
    const query = {
      page: table.page.currentPage,
      size: table.page.pageSize,
      sortProp: table.page.sortProp,
      sortOrder: table.page.sortOrder
    }
    table.data.length > 0 && ElMessage.success('参数:' + JSON.stringify(query))
    table.loading = true
    http('/mock/table', query).then((res: any) => {
      table.data = res.data.list
      table.page.total = res.data.total
      table.loading = false
    })
  },
  onSelectionChange: () => {
    console.log(tableRef.value.getRef())
    // const names = tableRef.value?.getRef().getSelectionRows().map((v: Row) => v.name).join()
    // names.length > 0 && ElMessage.success('选中：' + names)
  }
})

onMounted(() => {
  table.request()
})
</script>