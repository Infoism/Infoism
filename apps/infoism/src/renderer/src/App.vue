<script setup lang="ts">
import Sidebar from '@/components/Sidebar/index.vue'
import MicroApp from '@/components/MicroApp/index.vue'
// const targetPage = `${location.origin}/vue`

// if (location.href !== targetPage) {
//   location.href = targetPage
// }
</script>

<template>
  <div flex flex-row h-full>
    <Sidebar></Sidebar>
    <MicroApp></MicroApp>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.scss';
</style>
