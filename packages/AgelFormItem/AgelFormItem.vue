<template>
  <ElFormItem
    :prop="prop"
    :label-width="labelWidth === 0 ? '0px' : labelWidth"
    :show-message="showMessage"
    :inline-message="inlineMessage"
    :error="error"
    :rules="formItemRules"
    :validateStatus="validateStatus"
    :class="className"
    ref="formItemRef"
  >
    <template #label>
      <slot name="label">
        <FormItemLabel></FormItemLabel>
      </slot>
    </template>

    <div class="vloading__content el-form-item__content" v-loading="loading">
      <slot v-bind="renderScopeProps">
        <FormItemEl></FormItemEl>
      </slot>
    </div>

    <template #error="scope">
      <slot name="error" v-bind="scope"> </slot>
    </template>
  </ElFormItem>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelFormItem', inheritAttrs: false })

import { computed, inject, ref, h, resolveComponent, useAttrs, watchEffect, onMounted, onUnmounted } from 'vue'
import {
  ElFormItem,
  ElInput,
  formContextKey,
  type FormContext,
  type FormItemRule,
  type FormItemValidateState
} from 'element-plus'
import { getProp } from 'element-plus/es/utils/objects'
import useCrxGlobalConfig from '../utils/useCrxGlobalConfig'
import useLocale from '../utils/useLocale'
import { formLayoutContextKey, type FormLayoutContext } from '../utils/useFormItems'
import type { Component, FunctionalComponent, VNodeChild } from 'vue'

type RenderFunction = (scope?: any) => VNodeChild
type Props = {
  // form-item props
  prop?: string
  label?: string | RenderFunction
  required?: boolean // 是否生成必填 rules
  labelWidth?: string | number
  rules?: FormItemRule | FormItemRule[]
  error?: string
  showMessage?: boolean
  inlineMessage?: boolean
  validateStatus?: FormItemValidateState
  // extend props
  class?: string
  attrs?: { [k: string]: any } // 组件属性
  slot?: string | Component | RenderFunction // 组件
  slots?: RenderFunction | { [k: string]: RenderFunction } // 组件插槽
  viewModel?: boolean // 查看模式
  viewFormat?: (value: any) => VNodeChild | string | number // 查看格式化
  vmodel?: '.trim' | '.number'
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  slot: ElInput,
  showMessage: true,
  inlineMessage: false
})

const scopeProps = useAttrs()
const config = useCrxGlobalConfig().AgelFormItem
const formContext = inject<FormContext>(formContextKey)
const layoutContext = inject<FormLayoutContext>(formLayoutContextKey)

const model = ref<{ value: any }>({ value: undefined })
const elRef = ref()
const formItemRef = ref()
const locale = useLocale({
  'zh-cn': {
    required: '必填'
  },
  en: {
    required: ' is required'
  }
})

const className = computed(() => 'agel-form-item ' + props.class)

const formItemRules = computed(() => {
  if (props.required) {
    const label = (props.label && typeof props.label == 'string' ? props.label : props.prop) || ''
    const message = label + locale.value.required
    const requiredRule = { required: true, message, trigger: 'change' }
    if (Array.isArray(props.rules)) {
      return [requiredRule, ...props.rules]
    } else if (props.rules instanceof Object) {
      return [requiredRule, props.rules]
    } else {
      return [requiredRule]
    }
  } else {
    return props.rules
  }
})

const renderScopeProps = computed(() => {
  return {
    ...props,
    ...scopeProps,
    modelValue: model.value.value,
    label: typeof props.label == 'string' ? props.label : ''
  }
})

const FormItemLabel: FunctionalComponent = () => {
  if (props.labelWidth === 0 || props.labelWidth === '0px') {
    return null
  } else if (typeof props.label == 'string') {
    return h('span', props.label)
  } else if (typeof props.label == 'function') {
    return props.label({ ...renderScopeProps.value, label: '' })
  } else {
    return null
  }
}

const FormItemEl: FunctionalComponent = () => {
  // 查看模式
  if (props.viewModel) {
    return props.viewFormat ? props.viewFormat({ ...renderScopeProps.value }) : h('span', {}, model.value.value)
  }

  // 渲染函数
  if (typeof props.slot == 'function') {
    return (props.slot as RenderFunction)({ ...renderScopeProps.value })
  }

  // 模板插槽
  if (
    typeof props.slot == 'string' &&
    props.slot.indexOf('slot-') == 0 &&
    layoutContext &&
    layoutContext.slots[props.slot]
  ) {
    return layoutContext.slots[props.slot]({ ...renderScopeProps.value })
  }

  // 组件/组件名称
  const component = typeof props.slot == 'string' ? resolveComponent(props.slot) : props.slot
  if (typeof component !== 'object') return null
  const componentConfig =
    component.name && config && config[component.name] ? config[component.name]({ ...renderScopeProps.value }) : {}
  const componentProps = {
    ...(componentConfig || {}),
    ...(props.attrs || {}),
    ref: elRef,
    modelValue: model.value.value,
    'onUpdate:modelValue': updateModelValue
  }
  const componentSlots = typeof props.slots == 'function' ? { default: props.slots } : props.slots
  return h(component, componentProps, { ...componentSlots })
}

function updateModelValue(value: any) {
  const vmodel = props.vmodel
  if (typeof vmodel == 'string' && typeof value === 'string') {
    if (vmodel == '.trim') {
      value = value.trim()
    } else if (vmodel == '.number' && !isNaN(parseFloat(value))) {
      value = parseFloat(value)
    }
  }
  model.value.value = value
}

function resetField() {
  formItemRef.value.resetField()
}

function clearValidate() {
  formItemRef.value.clearValidate()
}

onMounted(() => {
  if (layoutContext && props.prop) {
    layoutContext.refs[props.prop] = elRef.value
  }
})

onUnmounted(() => {
  if (layoutContext && props.prop) {
    layoutContext.refs[props.prop] = undefined
  }
})

watchEffect(() => {
  if (formContext && formContext.model && props.prop) {
    model.value = getProp(formContext.model, props.prop)
  }
})

defineExpose({ elRef, resetField, clearValidate })
</script>

<style>
/* 避免 clearable 导致 input 宽度抖动 patch https://github.com/element-plus/element-plus/issues/7287 */
.__fixed-clearable .el-input--suffix .el-input__inner {
  padding-right: 20px;
}

.__fixed-clearable .el-input__suffix {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

/* 使表单组件撑满容器 */
.__fullwidth .el-date-editor.el-input,
.__fullwidth .el-date-editor.el-input__inner,
.__fullwidth .el-select,
.__fullwidth .el-cascader,
.__fullwidth .el-input-number,
.__fullwidth .el-autocomplete {
  width: 100%;
}

/** 隐藏 form item label */
.__hidelabel .el-form-item__label {
  overflow: hidden !important;
  display: none !important;
  width: 0px !important;
}

/* 避免 erros mssage 导致 input 宽度抖动 */
.__inlinemsg .el-form-item {
  margin-bottom: 0px;
  display: block;
}

.__inlinemsg .el-form-item__content {
  display: inherit;
}

.__inlinemsg .el-form-item__error {
  position: inherit;
}

/** 必填标志 */
.agel-required-label:before {
  content: '*';
  color: var(--el-color-danger);
  margin-right: 4px;
}

.agel-required-label-right:after {
  content: '*';
  color: var(--el-color-danger);
  margin-left: 4px;
}

/** loading */
.vloading__content .el-loading-mask {
  --el-loading-spinner-size: 24px;
  background-color: rgba(255, 255, 255, 0.5);
}

/* label-width 去掉 padding */
.el-form-item__label[style='width: 0px;'] {
  display: none;
}
</style>
