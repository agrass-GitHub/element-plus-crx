<template>
  <Teleport v-if="menuData.length > 0" to="body" :disabled="!isRoot">
    <transition :name="transition">
      <div
        ref="menuRef"
        class="agel-context-menu"
        v-show="modelValue"
        :style="menuStyle"
        @mouseleave="hoverIndex = -1"
        @contextmenu.prevent
      >
        <div
          v-for="(item, index) in menuData"
          :key="index"
          :class="[
            'agel-context-menu-item',
            item.className,
            {
              __divided: item.divided,
              __disabled: item.disabled,
              __hasIcon: hasIcon,
              __hasChildren: hasSubMenu(item.children)
            }
          ]"
          @mouseenter="hoverIndex = index"
        >
          <div class="agel-menu-item_content" @click="onSelect(item, $event)">
            <AgelIcon v-if="item.icon" :icon="item.icon" class="agel-context-menu-item_icon"></AgelIcon>
            <span class="agel-context-menu-item_title">{{ item.title }}</span>
            <span v-if="item.remark" class="agel-context-menu-item_remark">{{ item.remark }}</span>
            <AgelIcon v-if="hasSubMenu(item.children)" icon="ArrowRight" class="agel-context-menu_arrow"></AgelIcon>
          </div>
          <AgelContextMenu
            v-if="hasSubMenu(item.children)"
            :model-value="hoverIndex === index && menuRect.load"
            :menus="item.children"
            :transition="transition"
            :x="subMenusXy[index] ? subMenusXy[index][0] : 0"
            :y="subMenusXy[index] ? subMenusXy[index][1] : 0"
            @select="onSelect"
          />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelContextMenu' })

import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  reactive,
  watch,
  getCurrentInstance,
  type CSSProperties,
  nextTick
} from 'vue'
import { useZIndex } from 'element-plus/es/hooks/index'
import { realtimeWindowWidth, reltimeWindowHeight, throttleWindowResizeWH } from './utils'

interface MenuItem {
  title: string // 名称
  remark?: string // 备注
  icon?: string // 图标
  divided?: boolean // 分隔下划线
  disabled?: boolean // 禁用
  hidden?: boolean // 隐藏
  children?: MenuItem[] // 下级菜单
  className?: string
}

interface Props {
  modelValue: boolean
  x: number
  y: number
  menus: MenuItem[]
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  menus: () => [],
  transition: 'el-zoom-in-top'
})

const emits = defineEmits(['update:modelValue', 'select'])
const { nextZIndex } = useZIndex()
const zIndex = ref(nextZIndex())
const menuRef = ref<HTMLDivElement>()
const hoverIndex = ref(-1)
const isRoot = getCurrentInstance()?.parent?.type?.name !== 'BaseTransition'

const menuRect = reactive({
  width: 0,
  height: 0,
  paddingTop: 0,
  load: false,
  timer: 0
})

const subMenusXy = reactive<[[number, number]] | []>([])

const xy = computed(() => {
  return { x: props.x, y: props.y }
})

const menuStyle = computed<CSSProperties>(() => {
  if (!isRoot) {
    const maxX = realtimeWindowWidth.value - menuRect.width
    const maxY = reltimeWindowHeight.value - menuRect.height
    const obj = {
      position: 'absolute',
      zIndex: zIndex.value
    }
    if (props.x <= maxX && props.y <= maxY) {
      return {
        ...obj,
        left: '100%',
        top: 0 - menuRect.paddingTop + 'px'
      }
    } else if (props.x <= maxX && props.y > maxY) {
      return {
        ...obj,
        left: '100%',
        bottom: 0 - menuRect.paddingTop + 'px'
      }
    } else if (props.x > maxX && props.y <= maxY) {
      return {
        ...obj,
        right: '0px',
        top: '100%'
      }
    } else if (props.x > maxX && props.y > maxY) {
      return {
        ...obj,
        right: '0px',
        bottom: '100%'
      }
    }
    return {}
  }

  const maxX = window.innerWidth - menuRect.width
  const maxY = window.innerHeight - menuRect.height
  return {
    position: 'fixed',
    zIndex: zIndex.value,
    top: Math.min(props.y, maxY) + 'px',
    left: Math.min(props.x, maxX) + 'px'
  }
})

const menuData = computed(() => {
  return filterMenu(props.menus)
})

const hasIcon = computed(() => {
  return props.menus.some((v) => v.icon != undefined)
})

function hasSubMenu(menus: MenuItem[] = []) {
  return filterMenu(menus).length > 0
}

function filterMenu(menus: MenuItem[] = []) {
  return menus.filter((v) => v.hidden !== true)
}

function hideMenu() {
  emits('update:modelValue', false)
}

function onSelect(menuItem: MenuItem, e?: MouseEvent) {
  if (hasSubMenu(menuItem.children)) {
    e && e.stopPropagation()
  } else {
    emits('select', menuItem)
  }
}

function updateMenuRect() {
  if (!menuRef.value) return
  const clone = menuRef.value.cloneNode(true) as HTMLDivElement
  clone.style.cssText = 'position: absolute; visibility: hidden; display: block;'
  document.body.appendChild(clone)
  menuRect.width = clone.offsetWidth
  menuRect.height = clone.offsetHeight
  menuRect.paddingTop = parseFloat(getComputedStyle(clone).paddingTop)
  document.body.removeChild(clone)
}

function calculateSubMenusXY() {
  if (!menuRef.value) return
  const subMenus = menuRef.value.children
  for (let i = 0; i < subMenus.length; i++) {
    const element = subMenus[i]
    const rect = element.getBoundingClientRect()
    subMenusXy[i] = [rect.x + rect.width, rect.y + rect.height]
    menuRect.load = true
  }
}

watch(
  () => [props.menus],
  () => {
    nextTick(() => updateMenuRect())
  },
  { immediate: true }
)

watch(
  () => [xy.value, props.modelValue],
  () => {
    if (!props.modelValue) return
    clearTimeout(menuRect.timer)
    menuRect.load = false
    menuRect.timer = setTimeout(calculateSubMenusXY, 310) // 等待过渡动画结束
  }
)

onMounted(() => {
  if (isRoot) {
    throttleWindowResizeWH()
    document.addEventListener('click', hideMenu)
    window.addEventListener('resize', throttleWindowResizeWH)
  }
})

onUnmounted(() => {
  if (isRoot) {
    document.removeEventListener('click', hideMenu)
    window.removeEventListener('resize', throttleWindowResizeWH)
  }
})
</script>

<style>
.agel-context-menu {
  --hover-bg: var(--el-menu-hover-bg-color);
  --hover-color: var(--el-menu-hover-text-color);
  --font-size: 13px;
  padding: 5px !important;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  user-select: none;
  box-shadow: var(--el-box-shadow-light);
  background-color: var(--el-bg-color);
  min-width: 120px;
}

.agel-context-menu-item {
  position: relative !important;
  font-size: var(--font-size);
  color: var(--el-text-color-primary);
  width: 100%;
}

.agel-menu-item_content {
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.agel-context-menu-item.__divided {
  margin-bottom: 10px;
}

.agel-context-menu-item.__divided::after {
  position: absolute;
  bottom: -5.5px;
  left: 0;
  display: block;
  width: 100%;
  height: 0;
  content: '';
  border-bottom: 1px solid var(--el-border-color);
}

.agel-context-menu-item.__disabled {
  cursor: not-allowed;
  color: var(--el-disabled-text-color);
  pointer-events: none;
}

.agel-context-menu-item:hover > :not(.agel-context-menu) {
  background-color: var(--hover-bg);
  color: var(--hover-color);
}

.agel-context-menu-item.__hasIcon > .agel-menu-item_content {
  padding-left: 25px;
}

.agel-context-menu-item.__hasChildren > .agel-menu-item_content {
  padding-right: 20px;
}

.agel-context-menu-item_title {
  display: inline-block;
  white-space: nowrap;
}

.agel-context-menu-item_remark {
  margin-left: 15px;
  font-size: 12px;
  color: var(--el-text-color-placeholder);
}

.agel-context-menu-item_icon {
  position: absolute !important;
  left: 6px;
}

.agel-context-menu_arrow {
  position: absolute !important;
  right: 6px;
}

.agel-context-menu-item:hover > .agel-context-menu {
  display: inline-block;
}
</style>
