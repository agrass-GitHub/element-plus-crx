<template>
  <ElCheckboxGroup class="agel-checkbox-group" v-bind="elCheckboxGroupProps">
    /** 2.6.0+ 使用 vlaue 代替 label */
    <component
      :is="checkBoxComponet"
      v-for="(item, index) in proxyOptions"
      :key="index"
      :border="border"
      :label="item[props.props.value as 'value']"
      :value="item[props.props.value as 'value']"
      :disabled="item.disabled"
      :checked="item.checked"
    >
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </ElCheckboxGroup>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelCheckbox' })

import { computed, useAttrs } from 'vue'
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton, type CheckboxGroupProps } from 'element-plus'
import { getExcludeAttrs } from '../utils/utils'

type CheckboxProps = {
  label?: string
  value?: string | number | boolean
  disabled?: boolean
  checked?: boolean
  [k: string]: any
}

interface Props extends Partial<CheckboxGroupProps> {
  options: CheckboxProps[] | string[]
  props?: { label: string; value: string }
  button?: boolean
  border?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  props: () => {
    return { label: 'label', value: 'value' }
  },
  validateEvent: true
})

const elCheckboxGroupProps = computed(() => {
  const propKeys = ['options', 'props', 'button', 'border']
  return getExcludeAttrs(propKeys, { ...props, ...useAttrs() })
})

const proxyOptions = computed(() => {
  const options = props.options.map((v) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
  return options as CheckboxProps[]
})

const checkBoxComponet = computed(() => (props.button ? ElCheckboxButton : ElCheckbox))
</script>
