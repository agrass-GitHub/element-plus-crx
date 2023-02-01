<template >
  <ViewModelEL v-if="hidden !== true && viewModel"></ViewModelEL>
  <ElFormItem v-if="hidden !== true" v-show="!viewModel" :prop="prop"
    :label-width="labelWidth === 0 ? '0px' : labelWidth" :show-message="showMessage" :inline-message="inlineMessage"
    :error="error" :rules="formItemRules" ref="formItemRef" class="agel-form-item">

    <div class="vloading__content el-form-item__content" v-loading="loading">
      <slot v-bind="renderScopeProps">
        <FormItemEl></FormItemEl>
      </slot>
    </div>

    <template #label>
      <slot name="label">
        <FormItemLabel></FormItemLabel>
      </slot>
    </template>

    <template #error="scope">
      <slot name="error" v-bind="scope"> </slot>
    </template>
  </ElFormItem>
</template>


<script lang='ts'>
export default { name: 'AgelFormItem', inheritAttrs: false }
</script>

<script setup lang='ts'>
import { computed, inject, ref, h, resolveComponent, useAttrs, type Component, type VNodeChild, type FunctionalComponent, } from 'vue'
import { formContextKey, type FormContext, type FormItemRule } from 'element-plus'
import { getProp } from "element-plus/es/utils/objects"
import useCrxGlobalConfig from "../utils/useCrxGlobalConfig"
import useLocale from "../utils/useLocale"

type RenderFunction = ((scope?: any) => VNodeChild)
type Props = {
  // el props
  prop?: string,
  label?: string | RenderFunction,
  required?: boolean,  // 是否生成必填 rules
  slot?: string | Component | RenderFunction,   // 组件
  slots?: RenderFunction | { [k: string]: RenderFunction }, // 组件插槽
  attrs?: { [k: string]: any }, // 组件属性
  viewModel?: boolean, // 查看模式
  viewFormat?: (value: any) => VNodeChild | string | number // 查看模式 格式化
  vmodel?: '.trim' | '.number',
  loading?: boolean,
  hidden?: boolean,
  // form-item props 方便 ts 提示
  labelWidth?: string | number,
  rules?: FormItemRule | FormItemRule[],
  error?: string,
  showMessage?: boolean,
  inlineMessage?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  slot: 'el-input',
  showMessage: true,
  inlineMessage: false,
})

const otherProps = useAttrs()
const AgelFormItemConfig = useCrxGlobalConfig().AgelFormItem
const formContext = inject(formContextKey) as FormContext
const modelValue = formContext?.model && props.prop ? getProp(formContext.model, props.prop) : ref()
const elRef = ref()
const formItemRef = ref()

const locale = useLocale({
  'zh-cn': {
    required: '必填',
  },
  'en': {
    required: ' is required',
  }
})

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
    ...otherProps,
    modelValue: modelValue.value,
    label: typeof props.label == 'string' ? props.label : '',
  }
})

const ViewModelEL: FunctionalComponent = () => {
  return props.viewFormat ? props.viewFormat({ ...renderScopeProps.value }) : h('span', {}, modelValue.value)
}


const FormItemLabel: FunctionalComponent = () => {
  if (typeof props.label == 'string') {
    return h('span', props.label)
  } else if (typeof props.label == 'function') {
    return props.label()
  }
}


const FormItemEl: FunctionalComponent = () => {

  // 渲染函数
  if (typeof props.slot === 'function') {
    return (props.slot as RenderFunction)({ ...renderScopeProps.value })
  }

  // 组件/组件名称
  const component = typeof props.slot == 'string' ? resolveComponent(props.slot) : props.slot
  if (typeof component !== 'object') return null
  const componentConfig = component.name && AgelFormItemConfig && AgelFormItemConfig[component.name]
    ? AgelFormItemConfig[component.name]({ ...renderScopeProps.value })
    : {}
  const componentProps = {
    ...componentConfig || {},
    ...props.attrs || {},
    'ref': elRef,
    "modelValue": modelValue.value,
    "onUpdate:modelValue": updateModelValue,
  }
  const componentSlots = typeof props.slots == 'function' ? { default: props.slots } : props.slots
  return h(component, componentProps, { ...componentSlots })
}

function updateModelValue(value: any) {
  const vmodel = props.vmodel
  if (typeof vmodel == "string" && typeof value === "string") {
    if (vmodel == ".trim") {
      value = value.trim()
    } else if (vmodel == ".number" && !isNaN(parseFloat(value))) {
      value = parseFloat(value)
    }
  }
  modelValue.value = value
}

function resetField() {
  formItemRef.value.resetField()
}

function clearValidate() {
  formItemRef.value.clearValidate()
}

defineExpose({ modelValue, elRef, formItemRef, resetField, clearValidate })
</script>



<style >
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
  content: "*";
  color: var(--el-color-danger);
  margin-right: 4px;
}

.agel-required-label-right:after {
  content: "*";
  color: var(--el-color-danger);
  margin-left: 4px;
}

/** loading */
.vloading__content .el-loading-mask {
  --el-loading-spinner-size: 24px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>