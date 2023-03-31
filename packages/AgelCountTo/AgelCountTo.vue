<!-- vue2.x 原版本：https://github.com/PanJiaChen/vue-countTo -->
<template>
  <span class="agel-count-to"> {{ displayValue }} </span>
</template>

<script lang="ts">
export default { name: "AgelCountTo" }
</script>

<script setup lang='ts'>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  from?: number,
  to: number,
  duration?: number,
  precision?: number,
  prefix?: string,
  suffix?: string,
  autoplay?: boolean,
  showSeparator?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  from: 0,
  to: 0,
  duration: 2500,
  precision: 0,
  prefix: '',
  suffix: '',
  autoplay: true,
  showSeparator: true,
})

let displayValue = ref(formatNumber(props.from))
let localStartVal = props.from
let localDuration = props.duration
let paused = false
let printVal = 0
let startTime = 0
let timestamp = 0
let remaining = 0
let frameID = 0

const countDown = computed(() => {
  return props.from > props.to
})

function start() {
  localStartVal = props.from
  startTime = 0
  localDuration = props.duration
  paused = false
  cancelAnimationFrame(frameID)
  frameID = requestAnimationFrame(count)
}

function pause() {
  cancelAnimationFrame(frameID)
}

function pauseResume() {
  if (paused) {
    resume()
    paused = false
  } else {
    cancelAnimationFrame(frameID)
    paused = true
  }
}


function resume() {
  startTime = 0
  localDuration = remaining
  localStartVal = printVal
  cancelAnimationFrame(frameID)
  frameID = requestAnimationFrame(count)
}

function reset() {
  startTime = 0
  displayValue.value = formatNumber(props.from)
  cancelAnimationFrame(frameID)
}

function count(val: number) {
  if (startTime === 0) startTime = val
  timestamp = val
  const progress = timestamp - startTime
  remaining = localDuration - progress
  if (countDown.value) {
    printVal = localStartVal - easingFn(progress, 0, localStartVal - props.to, localDuration)
    printVal = printVal < props.to ? props.to : printVal
  } else {
    printVal = easingFn(progress, localStartVal, props.to - localStartVal, localDuration)
    printVal = printVal > props.to ? props.to : printVal
  }
  displayValue.value = formatNumber(printVal)
  if (progress < localDuration) {
    frameID = requestAnimationFrame(count)
  }
}

function formatNumber(num: number) {
  let value = num.toFixed(props.precision)
  value += ""
  const x = value.split(".")
  const decimal = '.'
  let x1 = x[0]
  const x2 = x.length > 1 ? decimal + x[1] : ""
  const rgx = /(\d+)(\d{3})/
  if (props.showSeparator) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + ',' + "$2")
    }
  }
  return props.prefix + x1 + x2 + props.suffix
}

function easingFn(t: number, b: number, c: number, d: number) {
  return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
}

onMounted(() => {
  if (props.autoplay) start()
})

onUnmounted(() => {
  cancelAnimationFrame(frameID)
})

watch(() => props.from, () => {
  if (props.autoplay) start()
})

watch(() => props.to, () => {
  if (props.autoplay) start()
})

defineExpose({ start, pause, resume, pauseResume, reset })


</script>

<style>
/* 防止字体抖动 */
.agel-count-to {
  font-variant-numeric: tabular-nums;
}
</style>