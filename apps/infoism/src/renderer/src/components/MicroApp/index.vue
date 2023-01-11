<template>
  <div v-for="(app, index) in MicroApps" v-show="route.path.startsWith(app.activeRule)" :id="app.name" :key="index"
    h-full w-full></div>
</template>

<script setup lang="ts">
import { generateMicroAppsConfiguration } from '@/services/microapps'
import { useRoute } from 'vue-router'

const MicroApps = generateMicroAppsConfiguration()
const route = useRoute()

</script>

<style scoped>

</style>
