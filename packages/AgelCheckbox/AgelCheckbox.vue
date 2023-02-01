<template>
  <ElCheckboxGroup class="agel-checkbox-group" v-bind="$attrs">
    <component :is="checkBoxComponet" v-for="(item, index) in proxyOptions" :key="index" :border="border"
      :label="item[props.props.value as 'value']" :disabled="item.disabled" :checked="item.checked">
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </ElCheckboxGroup>
</template>

<script lang='ts'>
export default { name: 'AgelCheckbox', inheritAttrs: false }
</script>

<script setup lang='ts'>
import { computed } from 'vue'
import type { CheckboxGroupProps } from 'element-plus'

type CheckboxProps = { label?: string, value?: string | number | boolean, disabled?: boolean, checked?: boolean, [k: string]: any }

interface Props extends Partial<CheckboxGroupProps> {
  options: CheckboxProps[] | string[],
  props?: { label: string, value: string },
  button?: boolean,
  border?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  props: () => {
    return { label: 'label', value: 'value' }
  }
})

const proxyOptions = computed(() => {
  const options = props.options.map(v => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
  return options as CheckboxProps[]
})

const checkBoxComponet = computed(() => props.button ? 'ElCheckboxButton' : 'ElCheckbox')

</script>

