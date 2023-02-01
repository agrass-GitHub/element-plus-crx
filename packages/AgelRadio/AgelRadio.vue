<template>
  <ElRadioGroup class="agel-radio-group" v-bind="$attrs">
    <component :is="radioComponet" v-for="(item, index) in proxyOptions" :key="index" :border="border"
      :label="item[props.props.value as 'value']" :disabled="item.disabled">
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </ElRadioGroup>
</template>

<script lang='ts'>
export default { name: 'AgelRadio', inheritAttrs: false }
</script>

<script setup lang='ts'>
import { computed } from 'vue'
import type { RadioGroupProps } from 'element-plus'

type RadioProps = { label?: string, value?: string | number | boolean, disabled?: boolean, [k: string]: any }

interface Props extends Partial<RadioGroupProps> {
  options: RadioProps[] | string[],
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
  return options as RadioProps[]
})

const radioComponet = computed(() => props.button ? 'ElRadioButton' : 'ElRadio')

</script>

<style scoped>

</style>