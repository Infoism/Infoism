<template>
  <aside class="sidebar" h-full w-12 flex-none flex flex-col items-center justify-start p-t-12 bg-danger>
    <SidebarButtonGroup :options="store.sidebarOptions" />
  </aside>
</template>

<script setup lang="ts">
import SidebarButtonGroup from './SidebarButtonGroup.vue'
import { useSidebarStore } from '@/store';

const store = useSidebarStore()
</script>

<style scoped>
.sidebar {
  background-color: var(--color-background-sidebar);
  border-width: 0 1px 0 0;
  border-color: var(--color-border-default);
  border-style: solid;
}
</style>
