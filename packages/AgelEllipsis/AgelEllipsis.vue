<template>
  <ElTooltip
    :disabled="disabledTootip"
    :placement="placement"
    :content="content"
    :enterable="enterable"
    :offset="offset"
    :popper-class="popperClassName"
    :show-after="showAfter"
    :hide-after="hideAfter"
    :show-arrow="showArrow"
    append-to="body"
  >
    <div ref="wrapper" :class="className" :style="style" v-bind="$attrs" :title="title">
      <EllipsisContent></EllipsisContent>
    </div>
  </ElTooltip>
</template>

<script setup lang="ts">
import { computed, ref, useSlots, nextTick, type VNode, type FunctionalComponent } from 'vue'
import type { ElTooltipProps } from 'element-plus'

defineOptions({ name: 'AgelEllipsis' })

type TooltipProps = Pick<
  ElTooltipProps,
  'effect' | 'placement' | 'enterable' | 'offset' | 'popperClass' | 'showArrow' | 'showAfter' | 'hideAfter'
>

interface Props extends Partial<TooltipProps> {
  lineClamp?: number
  wordClamp?: number
  titleTip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  wordClamp: 0,
  lineClamp: 1,
  showAfter: 750
})

const slots = useSlots()

const ellipsis = ref(false)
const wrapper = ref<HTMLDivElement | null>(null)
const content = ref('')

const clampMode = computed(() => {
  return props.wordClamp > 0 ? 'word' : 'line'
})

const className = computed(() => {
  let className = ''
  if (clampMode.value == 'line' && props.lineClamp > 1) className = '__line-clamp'
  if (clampMode.value == 'word' && props.wordClamp > 1) className = '__word-clamp'
  return ['agel-ellipsis', className]
})

const popperClassName = computed(() => {
  return [props.popperClass || '', 'agel-ellipsis-popper']
})

const style = computed(() => {
  return clampMode.value == 'line' && props.lineClamp > 1 ? { '-webkit-line-clamp': props.lineClamp } : ''
})

const title = computed(() => {
  return props.titleTip && ellipsis.value ? content.value : ''
})

const disabledTootip = computed(() => {
  return props.titleTip || ellipsis.value == false
})

const EllipsisContent: FunctionalComponent = () => {
  if (!slots.default) return null
  const nodes = slots.default()
  const node = getFirstNode(nodes)

  // wordClamp 文本截断...
  if (clampMode.value == 'word' && node && typeof node.children == 'string') {
    content.value = node.children
    if (node.children.length > props.wordClamp) {
      node.children = node.children.substring(0, props.wordClamp) + '...'
      ellipsis.value = true
    } else {
      ellipsis.value = false
    }
  }

  // lineClamp 多行截断..
  nextTick(() => {
    if (clampMode.value == 'line' && wrapper.value) {
      if (props.lineClamp > 1) {
        ellipsis.value = wrapper.value.scrollHeight > wrapper.value.clientHeight
      } else if (props.lineClamp === 1) {
        ellipsis.value = wrapper.value.scrollWidth > wrapper.value.clientWidth
      }
      content.value = wrapper.value?.textContent || ''
    }
  })

  return nodes
}

function getFirstNode(nodes: VNode[]): VNode {
  let node = nodes[0]
  if (Array.isArray(node.children)) {
    return getFirstNode(node.children as VNode[])
  }
  return node
}
</script>

<style>
.agel-ellipsis {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.agel-ellipsis.__word-clamp {
  overflow: inherit;
  white-space: inherit;
  text-overflow: inherit;
}

.agel-ellipsis.__line-clamp {
  display: -webkit-inline-box;
  width: 100%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: inherit;
}

.agel-ellipsis-popper {
  max-width: 500px;
}
</style>
