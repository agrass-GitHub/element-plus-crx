<template>
  <div class="demo">
    <p><b>普通样式</b></p>
    <AgelRadio v-model="value" :options="options" :props="{ label: 'name', value: 'id' }"></AgelRadio>
    <p><b>按钮样式</b></p>
    <AgelRadio v-model="value2" :options="['optionA', 'optionB', 'optionC']" button></AgelRadio>
    <p><b>边框样式</b></p>
    <AgelRadio v-model="value2" :options="['optionA', 'optionB', 'optionC']" border></AgelRadio>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const options = [
  { name: 'nameA', id: 1 },
  { name: 'nameB', id: 2, },
  { name: 'nameC', id: 3, disabled: true }
]

</script>
