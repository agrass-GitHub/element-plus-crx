<template>
  <ElForm ref="formRef" :model="form.model" label-width="auto" class="demo">
    <AgelFormItem v-for="item, i in form.items" v-bind="item" :key="i"></AgelFormItem>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const form = reactive({
  model: {  },
  items: [
    {
      prop: 'name',
      label: 'Activity name',
      required: true
    },
    {
      prop: "zone",
      label: "Activity zone",
      slot: 'agel-select',
      attrs: {
        options: [
          { label: 'Zone one', value: 'shanghai' },
          { label: 'Zone two', value: 'beijing' },
        ]
      }
    },
    {
      prop: "date",
      label: "Activity date",
      slot: "el-date-picker",
    },
    {
      prop: 'delivery',
      label: 'Instant delivery',
      slot: "el-switch"
    },
    {
      prop: 'type',
      label: 'Activity type',
      slot: 'agel-checkbox',
      attrs: {
        options: ['Online activities', 'Promotion activities', 'Offline activities', 'Simple brand exposure']
      }
    },
    {
      prop: 'resources',
      label: 'Resources',
      slot: 'agel-radio',
      attrs: { options: ['Sponsor', 'Venue'] }
    },
    {
      prop: 'decs',
      label: 'Activity Form',
      attrs: { type: 'textarea' },
    },
    {
      slot: 'ElButton',
      slots: () => 'Create',
      attrs: {
        type: 'primary',
        onClick: () => {
          formRef.value?.validate()
        }
      },
    }
  ]
})
</script>