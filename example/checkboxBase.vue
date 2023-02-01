<template>
  <div class="demo">
    <p><b>普通样式</b></p>
    <AgelCheckbox v-model="value" :options="options" :props="{ label: 'name', value: 'id' }"></AgelCheckbox>
    <p><b>按钮样式</b></p>
    <AgelCheckbox v-model="value2" :options="['optionA', 'optionB', 'optionC']" button></AgelCheckbox>
    <p><b>边框样式</b></p>
    <AgelCheckbox v-model="value2" :options="['optionA', 'optionB', 'optionC']" border></AgelCheckbox>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref([])
const value2 = ref([])
const options = [
  { name: 'nameA', id: 1, checked: true },
  { name: 'nameB', id: 2, },
  { name: 'nameC', id: 3, disabled: true }
]

</script>
