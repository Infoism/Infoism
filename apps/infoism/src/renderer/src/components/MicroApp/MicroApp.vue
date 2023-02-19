<template>
  <WujieVue :url="entry" :plugins="plugins" :name="name" :alive="true" h-full w-full></WujieVue>
</template>

<script setup lang="ts">
import { useMicroappPlugins } from '@/services/microapps/pluins'
const plugins = useMicroappPlugins()
defineProps<{
  entry: string;
  name: string;
}>()

</script>

<style scoped>

</style>
