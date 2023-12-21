<template>
  <ElRadioGroup
    class="agel-radio-group"
    v-bind="elRadioGroupProps"
    @update:model-value="emits('update:model-value', $event)"
    @change="emits('change', $event)"
  >
    <component
      :is="radioComponet"
      v-for="(item, index) in proxyOptions"
      :key="index"
      :border="border"
      :label="item[props.props.value as 'value']"
      :disabled="item.disabled"
    >
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </ElRadioGroup>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelRadio' })

import { computed } from 'vue'
import { ElRadio, ElRadioButton, ElRadioGroup, type RadioGroupProps } from 'element-plus'
import { getExcludeAttrs } from '../utils/utils'

type RadioProps = { label?: string; value?: string | number | boolean; disabled?: boolean; [k: string]: any }

interface Props extends /* @vue-ignore */ Partial<RadioGroupProps> {
  options: RadioProps[] | string[]
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
const emits = defineEmits(['update:model-value', 'change'])

const elRadioGroupProps = computed(() => {
  const propKeys = ['options', 'props', 'button', 'border']
  return getExcludeAttrs(propKeys, props)
})

const proxyOptions = computed(() => {
  const options = props.options.map((v) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
  return options as RadioProps[]
})

const radioComponet = computed(() => (props.button ? ElRadioButton : ElRadio))
</script>

<style scoped></style>
