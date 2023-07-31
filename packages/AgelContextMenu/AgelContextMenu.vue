<template>
  <Teleport v-if="menuData.length > 0" to="body" :disabled="isSubMenu">
    <transition :name="transition">
      <div class="agel-context-menu" v-show="modelValue" :style="menuStyle" @mouseleave="hoverIndex = -1">
        <div
          v-for="(item, index) in menuData"
          :key="index"
          :class="[
            'agel-context-menu-item',
            item.className,
            { __divided: item.divided, __disabled: item.disabled, __hasicon: hasIcon }
          ]"
          @mouseenter="hoverIndex = index"
        >
          <div class="agel-menu-item_content" @click="onSelect(item, $event)">
            <AgelIcon v-if="item.icon" :icon="item.icon" class="agel-context-menu-item_icon"></AgelIcon>
            <span class="agel-context-menu-item_title">{{ item.title }}</span>
            <span class="agel-context-menu-item_remark">{{ item.remark }}</span>
            <AgelIcon v-if="hasSubMenu(item.children)" icon="ArrowRight" class="agel-context-menu_arrow"></AgelIcon>
          </div>
          <AgelContextMenu
            v-if="hasSubMenu(item.children)"
            :model-value="hoverIndex === index"
            :menus="item.children"
            :transition="transition"
            :x="submenuXY"
            :y="submenuXY"
            @select="onSelect"
          />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useZIndex } from 'element-plus/es/hooks/index'

defineOptions({ name: 'AgelContextMenu' })

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
const hoverIndex = ref(-1)
const submenuXY = -1000
const isSubMenu = props.x === submenuXY && props.y === submenuXY

const menuStyle = computed(() => {
  const zindexStyle = {
    zIndex: zIndex.value
  }
  const positionStyle = {
    top: props.y + 'px',
    left: props.x + 'px',
    position: 'fixed'
  }
  return isSubMenu ? zindexStyle : { ...zindexStyle, ...positionStyle }
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

onMounted(() => {
  document.addEventListener('click', hideMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', hideMenu)
})
</script>

<style>
.agel-context-menu {
  --hover-bg: var(--el-menu-hover-bg-color);
  --hover-color: var(--el-menu-hover-text-color);
  --font-size: 13px;

  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  border-radius: 6px;
  user-select: none;
  box-shadow: var(--el-box-shadow-light);
  background-color: var(--el-bg-color);
  min-width: 120px;
}

.agel-context-menu-item {
  position: relative;
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

.agel-context-menu-item.__hasicon > .agel-menu-item_content {
  padding-left: 25px;
}

.agel-context-menu-item_remark {
  margin-left: 25px;
  font-size: 12px;
  color: var(--el-text-color-placeholder);
}

.agel-context-menu-item_icon {
  position: absolute !important;
  left: 6px;
}

.agel-context-menu-item_arrow {
  right: 0px;
}

.agel-context-menu-item > .agel-context-menu {
  position: absolute;
  left: 100%;
  top: -5px;
}

.agel-context-menu-item:hover > .agel-context-menu {
  display: inline-block;
}
</style>
