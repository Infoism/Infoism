<template>
  <WujieVue v-for="(app, index) in MicroApps" :url="app.entry" :name="app.name" :key="index" :alive="true" h-full
    w-full></WujieVue>
</template>

<script setup lang="ts">
import { loadPlugins } from '@/services/microapps/plugins';

const MicroApps = loadPlugins()

</script>

<style scoped>

</style>
