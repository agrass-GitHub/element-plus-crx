<template>
  <ElForm :model="form.model" label-width="80px" :label-position="(labelPosition as any)" class="demo">
    <AgelFormDesc :items="form.items" :border="border" :view-model="viewModel" title="描述表单">
      <template #extra>
        <div class="flex-center">
          <AgelRadio v-model="labelPosition" :options="['top', 'left', 'right']" style="margin-right: 30px">
          </AgelRadio>
          <ElCheckbox v-model="border">显示边框</ElCheckbox>
          <ElCheckbox v-model="viewModel">视图模式</ElCheckbox>
        </div>
      </template>
    </AgelFormDesc>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive, markRaw, ref } from 'vue'

let border = ref(true)
let viewModel = ref(false)
let labelPosition = ref('right')

const form = reactive({
  model: {
    name: 'kooriookami',
    phone: '18100000000',
    addr: '苏州',
    remark: '送货上门',
    rate: 3,
    resource: '顺丰',
    address: '江苏省苏州市吴中区吴中大道 1188 号',
    delivery: true
  },
  items: [
    { prop: 'name', label: '用户名', viewModel: true },
    { prop: 'phone', label: '手机号', required: true },
    { prop: 'addr', label: '居住地' },
    { prop: 'remark', label: '备注' },
    { label: '联系地址', prop: 'address', span: 2 },
    {
      label: '快递',
      prop: 'resource',
      slot: 'agel-radio',
      attrs: {
        options: ['顺丰', '圆通']
      }
    },
    {
      label: '即时配送',
      prop: 'delivery',
      slot: 'el-switch',
      viewFormat: ({ modelValue }: any) => {
        return <el-tag disable-transitions>{modelValue ? '即时' : '延时'}</el-tag>
      }
    },
    {
      label: '评分',
      prop: 'rate',
      slot: 'el-rate',
      viewFormat: ({ modelValue }: any) => modelValue + '星评分'
    },
    {
      label: '照片',
      prop: 'upload',
      viewModel: false,
      slot: 'agel-upload',
      attrs: {
        listType: 'picture-card',
        action: 'xx/xx/'
      }
    }
  ]
})
</script>
