<template>
  <div class="demo">
    <AgelRadio v-model="direction" :options="options"></AgelRadio>
    <AgelTable border :data="data" :columns="columns" :merge="merge">
    </AgelTable>
  </div>
</template>

<script lang="tsx" setup>
import { ref, computed } from 'vue';

const direction = ref('vertical')
const options = [
  { label: '竖向合并', value: 'vertical', },
  { label: '横向合并', value: 'horizontal', },
  { label: '自动合并', value: 'auto', },
]
const merge = computed(() => {
  return { keys: ['name', 'date', 'address'], direction: direction.value }
})

const columns = [
  { label: '名称', prop: 'name' },
  { label: '日期', prop: 'date' },
  { label: '地址', prop: 'address' },
]

const data = [
  { date: "Apple", name: "Apple", address: "Apple" },
  { date: '2016-05-03', name: 'Xiaomi', address: 'Samsung', },
  { date: '2016-05-02', name: 'Xiaomi', address: 'Samsung' },
  { date: '2016-05-04', name: 'Xiaomi', address: 'Samsung' },
  { date: '2016-05-01', name: 'Xiaomi', address: 'Samsung' },
]

</script>