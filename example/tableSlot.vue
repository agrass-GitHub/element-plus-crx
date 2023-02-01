<template>
  <div class="demo">
    <AgelTable :data="data" :columns="columns">

      <template #prepend>
        <ElTableColumn label="#" type="index"></ElTableColumn>
      </template>

      <template #slot-date="{ row }">
        <ElTag>{{ row.date }}</ElTag>
      </template>

    </AgelTable>
  </div>

</template>

<script lang="tsx" setup>

const columns = [
  {
    label: () => <el-tag>名称</el-tag>,
    slot: ({ row }: any) => <el-tag>{row.name}</el-tag>,
  },
  { label: '日期', slot: 'slot-date' },
]

const data = Array.from({ length: 6 }).map(v => {
  return {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
})

</script>