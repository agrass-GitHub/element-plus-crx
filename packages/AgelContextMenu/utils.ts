import { ref } from "vue"
import { throttle } from "../utils/utils"

export let realtimeWindowWidth = ref(0)
export let reltimeWindowHeight = ref()


export const throttleWindowResizeWH = throttle(() => {
  realtimeWindowWidth.value = window.innerWidth
  reltimeWindowHeight.value = window.innerHeight
}, 500)


