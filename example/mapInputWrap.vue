<template>
  <mapInputBase v-if="load"></mapInputBase>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue'
import mapInputBase from './mapInputBase.vue'
const load = ref(false)

onMounted(() => {
  import('@amap/amap-jsapi-loader').then((module) => {
    const AMapLoader = module.default
    window._AMapSecurityConfig = {
      securityJsCode: 'cf97d613b904fbea6291d1809b8674d5'
    }
    AMapLoader.load({
      key: '2693b9843374215a41f585aa4114fc32',
      plugins: ['AMap.PlaceSearch', 'AMap.Autocomplete', 'AMap.AutoComplete', 'AMap.Geocoder']
    }).then((AMap) => {
      window.AMap = AMap
      load.value = true
    })
  })
})
</script>

<style></style>
