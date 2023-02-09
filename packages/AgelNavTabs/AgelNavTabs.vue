<template>
  <div ref="tabsRef" :class="['agel-nav-tabs', isBackground ? '__is-background' : '__concise',{'__has-more':more}]" @contextmenu.prevent
    @mouseleave="hidePopover()">
    <ElTabs :model-value="routePath" type="card" @tab-change="(v) => changeTab(v as string)">
      <ElTabPane v-for="(item, index) in filterTabsList" :key="(item.path + index)" :label="item.title"
        :name="item.path" :closable="isClosable(item)">
        <template #label>
          <span :class="['agel-tab', { 'fold-fixed-tab': item.fixed }]" @mouseenter="setPopoverVirtualRef(index)"
            :title="item.title">
            <AgelIcon v-if="item.loading" class="is-loading" icon="Loading"></AgelIcon>
            <AgelIcon v-else-if="item.icon || item.fixed" :icon="item.icon || 'Menu'"></AgelIcon>
            <span class="tab-title">{{ item.title }}</span>
            <AgelIcon v-show="item.path != homePath && filterTabsList.length > 1" class="is-icon-close"
              @click.stop="removeTab(item.path)" icon="Close"></AgelIcon>
          </span>
        </template>
      </ElTabPane>
    </ElTabs>
    <ElButton class="tabs-more-button" v-if="more" type="primary" @mouseenter="setPopoverVirtualRef(-1)">
      <span>{{ locale.more }} </span>
      <AgelIcon icon="ArrowDown"></AgelIcon>
    </ElButton>

    <ElPopover ref="popoverRef" :virtual-ref="popoverRefOption.ref" :trigger="(popoverRefOption.trigger as any)"
      virtual-triggering popper-class="agel-tabs-menu" :hide-after="0" :show-after="0" :teleported="false"
      :offset="popoverRefOption.offset">
      <div class="agel-tabs-menu-box" v-if="menuTab" @click="hidePopover()">
        <div v-if="reload" @click="onReload(menuTab)">
          <AgelIcon icon="Refresh"></AgelIcon>
          <span>{{ locale.reload }}</span>
        </div>
        <div v-if="fixed && menuTab.path !== homePath" @click="fixedTab(menuTab)">
          <AgelIcon v-if="menuTab.fixed" icon="StarFilled" color="#f7ba2a"></AgelIcon>
          <AgelIcon v-else icon="Star"></AgelIcon>
          <span>{{ menuTab.fixed ? locale.fixedCancel : locale.fixed }}</span>
        </div>
        <slot name="menu" :item="menuTab"></slot>
        <div v-show="popoverRefOption.trigger == 'contextmenu' || !homePath" @click="removeOtherTab(menuTab)">
          <AgelIcon icon="Close"></AgelIcon>
          <span>{{ locale.close }}</span>
        </div>
        <div v-show="homePath && popoverRefOption.trigger == 'click'" @click="removeAllTab()">
          <AgelIcon icon="Close"></AgelIcon>
          <span>{{ locale.closeAll }}</span>
        </div>
      </div>
    </ElPopover>
  </div>
</template>

<script lang='ts'>
export default { name: 'AgelNavTabs', inheritAttrs: false }
</script>

<script setup lang='ts'>
import { computed, nextTick, reactive, ref } from 'vue'
import AgelIcon from "../AgelIcon"
import useLocale from "../utils/useLocale"

type TabProps = {
  title: string,
  path: string,
  icon?: string,
  fixed?: boolean,
  loading?: boolean
}

interface Props {
  tabs: TabProps[]     // v-model tabs
  routePath: string    // 当前路由 path
  homePath?: string,  // 首页
  more?: boolean,     // 更多按钮
  fixed?: boolean,    // 固定按钮
  reload?: boolean,   // 刷新按钮
  isBackground?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  more: true,
})

const emits = defineEmits(['update:tabs', 'pathChange', 'reload',])

const tabsRef = ref()
const popoverRef = ref()
const popoverRefOption = reactive({
  trigger: 'click',
  ref: null as any,
  offset: 5,
})
const menuCurrentPath = ref('')

const filterTabsList = computed(() => {
  const getNum = (tab: TabProps) => {
    if (tab.path == props.homePath) return 2
    if (tab.fixed) return 1
    return 0
  }
  return [...props.tabs].sort((a, b) => {
    return getNum(b) - getNum(a)
  })
})

const menuTab = computed(() => {
  return props.tabs.find(v => v.path === menuCurrentPath.value) as TabProps
})

const locale = useLocale({
  'zh-cn': {
    more: '更多',
    reload: '重新加载',
    fixed: '固定标签',
    fixedCancel: '取消固定标签',
    close: '关闭其他标签',
    closeAll: '关闭所有标签'
  },
  'en': {
    more: 'More',
    reload: 'Reload',
    fixed: 'Fixed tab',
    fixedCancel: 'Cancel fixed tab',
    close: 'Close other tab',
    closeAll: 'Close all tab',
  }
})

function removeTab(path: string) {
  let index = props.tabs.findIndex((item) => item.path === path)
  if (index === -1) return
  if (props.routePath === path) {
    if (props.tabs[index + 1]) {
      changeTab(props.tabs[index + 1].path)
    } else {
      changeTab(props.tabs[index - 1].path)
    }
  }
  const tabs = [...props.tabs]
  tabs.splice(index, 1)
  emits('update:tabs', tabs)
}

function removeOtherTab(tab: TabProps) {
  const tabs = props.tabs.filter(item => {
    return !isClosable(item) || item.path === tab.path
  })
  emits('update:tabs', tabs)
  changeTab(tab.path)
}

function removeAllTab() {
  const homeTab = props.tabs.find(v => v.path == props.homePath)
  if(homeTab){
    emits('update:tabs', [homeTab])
  changeTab(homeTab.path)
  }
}

function fixedTab(tab: TabProps) {
  tab.fixed = !tab.fixed
}

function changeTab(path: string) {
  if (path !== props.routePath) {
    emits('pathChange', path)
  }
}

function onReload(tab: TabProps) {
  tab.loading = true
  setTimeout(() => {
    tab.loading = false
  }, 300)
  emits('reload', tab)
}

function isClosable(tab: TabProps) {
  return !(tab.fixed || tab.path == props.homePath)
}

function hidePopover(callback?: () => void) {
  popoverRef?.value?.hide()
  callback && nextTick(callback)
}

function setPopoverVirtualRef(index: number) {
  if (tabsRef.value && tabsRef.value.querySelectorAll) {
    // 使用 refs 有延迟，改为 dom 操作 
    if (index === -1) {
      let dom = tabsRef.value.querySelector('.tabs-more-button')
      if (dom) {
        menuCurrentPath.value = props.routePath
        popoverRefOption.trigger = 'click'
        popoverRefOption.ref = dom
      }
    } else {
      let dom = tabsRef.value.querySelectorAll('.el-tabs__item')[index]
      if (dom) {
        menuCurrentPath.value = dom.id.substr(4)
        popoverRefOption.trigger = 'contextmenu'
        popoverRefOption.ref = dom
      }
    }
  }

}


</script >

<style>
.agel-nav-tabs {
  --tab-height: 26px;

  height: 40px;
  border-bottom: 1px solid var(--el-border-color-light);
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}


.agel-nav-tabs .el-tabs {
  --el-tabs-header-height: var(--tab-height);
}

.agel-nav-tabs.__has-more .el-tabs{
  width: calc(100% - 95px);
}

.agel-nav-tabs .el-tabs .el-tabs__nav-wrap{
  display: flex;
  align-items: center;
}

.agel-nav-tabs .el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: none;
  display: flex;
  align-items: center;
}

.agel-nav-tabs .el-tabs--card>.el-tabs__header {
  margin: 0px;
  border-bottom: 0px;
}

.agel-nav-tabs .el-tabs__nav-next,
.agel-nav-tabs .el-tabs__nav-prev {
  line-height: inherit;
  height: var(--tab-height);
  display: flex;
  align-items: center;
}

.agel-nav-tabs .el-tabs--card>.el-tabs__header .el-tabs__item .is-icon-close{
  top:inherit;
  right: inherit;
}

.agel-nav-tabs .agel-tab {
  display: flex;
  align-items: center;
  height: var(--tab-height);
}

.agel-nav-tabs .el-icon {
  margin-right: 4px;
  width: var(--el-font-size-small);
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}

.agel-nav-tabs .tabs-more-button {
  margin: 0px 10px;
  width: 75px;
  font-size: var(--el-font-size-small);
  height: var(--tab-height);
}


/* 隐藏默认 关闭标签 */
.agel-nav-tabs .agel-tab+.is-icon-close {
  display: none;
}

/*  固定样式 */
.agel-tab.fold-fixed-tab .el-icon {
  margin: 0px;
}

.agel-tab.fold-fixed-tab .tab-title {
  display: none;
}

/*  简洁风格 */
.agel-nav-tabs.__concise .el-tabs--card>.el-tabs__header .el-tabs__item {
  font-size: var(--el-font-size-small);
  padding-left: 15px !important;
  padding-right: 15px !important;
  border-bottom: 0px;
}

/* 背景圆角风格 */
.agel-nav-tabs.__is-background {
  --tab-height: 28px;
}

.agel-nav-tabs.__is-background .el-tabs--card>.el-tabs__header .el-tabs__item {
  font-size: var(--el-font-size-small);
  border-radius: var(--el-border-radius-base);
  border-bottom: 0px;
  margin-left: 10px;
  padding-left: 10px !important;
  padding-right: 10px !important;
  border-left: 0px;
  background: #eceef5;
}

/* 菜单样式 */
.el-popover.el-popper.agel-tabs-menu {
  --el-popover-padding: 0px;
}

.agel-tabs-menu-box>div {
  display: flex;
  align-items: center;
  font-size: var(--el-font-size-small);
  padding: 6px 15px;
  text-align: center;
  border-bottom: 1px solid var(--el-border-color-light);
  cursor: pointer;
  white-space: nowrap;
}

.agel-tabs-menu-box>div:hover {
  color: var(--el-color-primary);
}

.agel-tabs-menu-box .el-icon {
  margin-right: 5px;
}
</style>