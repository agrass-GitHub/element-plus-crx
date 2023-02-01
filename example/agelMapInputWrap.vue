<template>
  <AgelMapInputBase v-if="load"></AgelMapInputBase>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import AgelMapInputBase from "./agelMapInputBase.vue";
const load = ref(false)
onMounted(() => {
  import("@amap/amap-jsapi-loader").then((module) => {
    const AMapLoader = module.default as any;
    (window as any)._AMapSecurityConfig = {
      securityJsCode: "37c6baee599002d347756e3d1277246c",
    };
    AMapLoader.load({
      key: "56f6a360f541889552ce0aea6469a3e3",
      plugins: ["AMap.PlaceSearch", "AMap.Autocomplete", "AMap.Geocoder"],
    }).then((AMap: any) => {
      (window as any).AMap = AMap
      load.value = true
    })
  })
})
</script>

<style>

</style>