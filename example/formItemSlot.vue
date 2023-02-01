<template>
  <ElForm :model="form.model" label-width="auto" class="demo">
    <AgelFormItem v-for="item, i in form.items" v-bind="item" :key="i"></AgelFormItem>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const vmodel = function (model: any, key: string) {
  return {
    'modelValue': model[key],
    'onUpdate:modelValue': (v: any) => model[key] = v
  }
}
const form = reactive({
  model: { date: new Date(), time: '' },
  items: [
    {
      prop: 'name',
      label: () => <el-tag>自定义 label</el-tag>,
    },
    {
      prop: "slot",
      label: "自定义 slot",
      slot: () => {
        return (<el-form-item class='w100'>
          <el-col span={11}>
            <el-date-picker type="date" class='w100' {...vmodel(form.model, 'date')} />
          </el-col>
          <el-col span={2} class="text-center"> <span>-</span> </el-col>
          <el-col span={11}>
            <el-time-picker class='w100' {...vmodel(form.model, 'time')} />
          </el-col>
        </el-form-item>)
      }
    },
    {
      prop: "slots",
      label: "自定义组件 slots",
      slots: {
        prepend: () => 'http://',
        append: () => '.com'
      }
    },
  ]
})
</script>