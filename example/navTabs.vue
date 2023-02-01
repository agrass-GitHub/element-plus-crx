<template>
  <ElContainer class="common-layout">
    <ElAside width="100px">Aside</ElAside>
    <ElContainer>
      <ElHeader>Header</ElHeader>

      <AgelNavTabs v-model:tabs="tabs" :route-path="route.path" home-path="/" more fixed reload zoom
        @path-change="pathChange" @reload="reload">
        <template #menu="{ item }">
          <div @click="fullScreen = true">
            <AgelIcon icon="FullScreen"></AgelIcon>
            <span>zoom In</span>
          </div>
        </template>
      </AgelNavTabs>

      <ElMain v-loading="!keepAlive" :class="{ 'full-screen': fullScreen }">
        <RouterView v-if="keepAlive">
          <TableSlot class="w100" style="padding: 0px;margin:0px;" size="mini"></TableSlot>
        </RouterView>
      </ElMain>
    </ElContainer>

    <AgelIcon v-show="fullScreen" icon="CircleCloseFilled" :size="30" class="close" @click="fullScreen = false">
    </AgelIcon>

  </ElContainer>
</template>

<script setup lang='ts'>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TableSlot from './tableSlot.vue';

const route = useRoute()
const router = useRouter()

const fullScreen = ref(false)
const keepAlive = ref(true)
const tabs = ref([
  { title: '首页', icon: 'HomeFilled', path: '/' },
  { title: 'Menu 菜单', path: '/component/menu' },
])

watch(() => route.path, () => {
  const index = tabs.value.findIndex((item) => item.path === route.path)
  if (index == -1) {
    tabs.value.push({
      path: route.path,
      icon: route.meta.icon as string,
      title: route.meta.title as string,
    })
  }
}, { immediate: true })

function pathChange(path: string) {
  router.push({ path })
}

function reload() {
  keepAlive.value = false
  nextTick(() => keepAlive.value = true)
}

</script>