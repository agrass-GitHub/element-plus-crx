
import { formContextKey, type FormContext } from 'element-plus'
import { inject, computed, watch, nextTick, useSlots, } from "vue"
import type { AgelFormItemProps } from '../AgelFormItem';

type Props<T> = {
  items: (AgelFormItemProps & T)[],
  modelProp?: string,
  scope?: { [k: string]: any },
  viewModel?: boolean,
}

export function useFormItems<T>(props: Props<T>) {
  const formSlots = useSlots()
  const formContext = inject(formContextKey) as FormContext

  const formItems = computed<T[]>(() => {
    return props.items.filter(((v) => v.hidden !== true))
  })


  function getFormItemEl(slot: any) {
    return typeof slot == 'string' && slot.indexOf('slot-') === 0 && formSlots[slot] ? formSlots[slot] : slot
  }

  function getFormItemProp(prop = '') {
    return props.modelProp && prop ? props.modelProp + '.' + prop : (prop || '')
  }

  function getFormItemProps(item: AgelFormItemProps) {
    let prop = getFormItemProp(item.prop)
    let slot = getFormItemEl(item.slot)
    let viewModel = typeof item.viewModel == 'boolean' ? item.viewModel : props.viewModel
    return { ...(props.scope || {}), ...item, prop, slot, viewModel }
  }

  function getRequiredAsteriskClass(item: AgelFormItemProps) {
    const position = formContext?.requireAsteriskPosition || 'left'
    const className = position == 'right' ? 'agel-required-label-right' : 'agel-required-label'
    if (formContext?.hideRequiredAsterisk) return false
    if (item.required) return className
    const formRules = formContext?.rules && item.prop ? formContext.rules[item.prop] : []
    const itemRules1 = formRules ? Array.isArray(formRules) ? formRules : [formRules] : []
    const itemRules2 = item.rules ? Array.isArray(item.rules) ? item.rules : [item.rules] : []
    const is = [...itemRules1, ...itemRules2].some(v => v?.required)
    return is ? className : ''
  }


  watch(() => formContext.model, (newv, oldv) => {
    if (newv !== oldv) {
      nextTick(formContext.clearValidate)
    }
  })


  return {
    formContext,
    formSlots,
    formItems,
    getFormItemEl,
    getFormItemProp,
    getFormItemProps,
    getRequiredAsteriskClass,
  }
}

export default useFormItems