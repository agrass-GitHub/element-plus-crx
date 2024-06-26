<template>
  <ElSelect ref="elSelectRef" class="agel-select" v-bind="elSelectPorps">
    <template #default>
      <template v-for="(item, index) in proxyOptions" :key="index">
        <ElOptionGroup
          v-if="item.options && item.options.length > 0"
          :label="String(item[props.props.label as 'label'])"
          :disabled="item.disabled"
        >
          <ElOption
            v-for="(option, index) in item.options"
            :key="index"
            :label="option[props.props.label as 'label']"
            :value="option[props.props.value as any]"
            :disabled="option.disabled"
          >
            <slot :item="option" :index="index"></slot>
          </ElOption>
        </ElOptionGroup>
        <ElOption
          v-else
          :label="item[props.props.label as 'label']"
          :value="item[props.props.value as any]"
          :disabled="item.disabled"
        >
          <slot :item="item" :index="index"></slot>
        </ElOption>
      </template>
    </template>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #empty v-if="$slots.empty">
      <slot name="empty"></slot>
    </template>
  </ElSelect>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelSelect' })

import { computed, ref, useAttrs } from 'vue'
import { ElSelect, ElOption, ElOptionGroup } from 'element-plus'
import { getExcludeAttrs } from '../utils/utils'

type OptionProps = {
  label?: string
  value?: string | number | boolean | Record<string, any>
  disabled?: boolean
  options?: OptionProps[]
  [k: string]: any
}

type SelectProps = InstanceType<typeof ElSelect>['$props']

interface Props extends /* @vue-ignore */ Partial<SelectProps> {
  options: OptionProps[] | string[]
  props?: { label: string; value: string }
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  props: () => {
    return { label: 'label', value: 'value' }
  },
  reserveKeyword: true,
  teleported: true,
  persistent: true,
  suffixTransition: true,
  validateEvent: true
})

const elSelectRef = ref()
const elSelectPorps = computed(() => {
  const propKeys = ['options', 'props']
  return getExcludeAttrs(propKeys, { ...props, ...useAttrs() })
})

const proxyOptions = computed(() => {
  const options = props.options.map((v) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
  return options as OptionProps[]
})

const focus = () => elSelectRef.value.focus()
const blur = () => elSelectRef.value.blur()

defineExpose({ focus, blur })
</script>
