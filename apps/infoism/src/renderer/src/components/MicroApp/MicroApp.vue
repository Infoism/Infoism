<template>
  <WujieVue :url="entry" :name="name" :alive="true" h-full w-full></WujieVue>
</template>

<script setup lang="ts">
defineProps<{
  entry: string;
  name: string;
}>()

</script>

<style scoped>

</style>
