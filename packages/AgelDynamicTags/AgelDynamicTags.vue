<template>
  <div class="agel-dynamic-tags">
    <ElTag
      v-for="(tag, index) in modelValue"
      :key="tag + '-' + index"
      :disable-transitions="true"
      v-bind="getTagProps(tag, index)"
      @close="handleClose(tag, index)"
      @click="handleClick(tag, index)"
    >
      <span>{{ tag }}</span>
    </ElTag>
    <template v-if="createable">
      <ElInput
        v-if="inputVisible"
        class="new-tag-input"
        v-model="inputValue"
        :disabled="isDisabled"
        ref="InputRef"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </ElInput>
      <ElButton v-else class="new-tag-button" :disabled="isDisabled" @click="showInput">+ New Tag</ElButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick } from 'vue'
import { useDisabled, useFormItem, type ElInput, type TagProps } from 'element-plus'
import { debugWarn } from 'element-plus/es/utils/error'
import { getIncludeAttrs } from '../utils/utils'

defineOptions({ name: 'AgelDynamicTags' })

interface Props extends Partial<Pick<TagProps, 'type' | 'closable' | 'hit' | 'color' | 'effect' | 'round'>> {
  modelValue: string[]
  createable?: boolean
  repeatable?: boolean
  disabled?: boolean
  validateEvent?: boolean
  customTagProp?: (tag: string, index: number) => Record<any, any> | undefined
}

const props = withDefaults(defineProps<Props>(), {
  createable: true,
  closable: true,
  validateEvent: true
})

const emits = defineEmits(['update:modelValue', 'create', 'click', 'close'])

const inputVisible = ref(false)
const inputValue = ref('')
const InputRef = ref<InstanceType<typeof ElInput>>()
const isDisabled = useDisabled(computed(() => props.disabled))
const { formItem } = useFormItem()

function getTagProps(tag: string, index: number) {
  const propKeys = ['type', 'closable', 'hit', 'color', 'effect', 'round']
  const tagProps = props.customTagProp ? props.customTagProp(tag, index) : {}
  return { ...getIncludeAttrs(propKeys, props), ...tagProps }
}

function handleClose(tag: string, index: number) {
  let value = [...props.modelValue]
  value.splice(index, 1)
  emits('close', tag, index)
  emits('update:modelValue', value)
}

function handleClick(tag: string, index: number) {
  emits('click', tag, index)
}

function showInput() {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.input?.focus()
  })
}

function handleInputConfirm() {
  if (inputValue.value && (props.modelValue.indexOf(inputValue.value) == -1 || props.repeatable)) {
    emits('update:modelValue', props.modelValue.concat(inputValue.value))
    emits('create', inputValue)
  }
  inputVisible.value = false
  inputValue.value = ''
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)
</script>

<style>
.agel-dynamic-tags {
  --tags-height: 28px;
}

.agel-dynamic-tags .el-tag {
  height: var(--tags-height);
  line-height: calc(var(--tags-height) - 2px);
  padding: 0 10px;
  margin-right: 10px;
}

.agel-dynamic-tags .new-tag-input {
  height: var(--tags-height);
  width: 90px;
  vertical-align: bottom;
}

.agel-dynamic-tags .new-tag-input .el-input__inner {
  height: var(--tags-height);
  line-height: var(--tags-height);
}

.agel-dynamic-tags .new-tag-button {
  width: 90px;
  height: var(--tags-height);
  line-height: var(--tags-height);
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
