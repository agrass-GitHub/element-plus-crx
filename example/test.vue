<template>
  <div class="demo">
    <p><b>普通样式</b></p>
    <p><b>分组样式</b></p>
    <AgelSelect v-model="value" :options="options" @change="change" test="1"></AgelSelect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const value2 = ref([])

const options = [
  {
    label: '选项A',
    value: 'A',
    options: [
      { label: '选项A-1', value: 'A1' },
      { label: '选项A-2', value: 'A2' }
    ]
  },
  {
    label: '选项B',
    value: 'B',
    options: [
      { label: '选项B-1', value: 'D1' },
      { label: '选项B-2', value: 'D2', disabled: true }
    ]
  }
]
const change = (v: number) => console.log(v)
</script>
