<template>
  <aside class="sidebar" h-full w-12 flex-none flex flex-col items-center justify-start p-t-16 >
    <SidebarButtonGroup :options="sidebarOptions" />
  </aside>
</template>

<script setup lang="ts">
import SidebarButtonGroup from './SidebarButtonGroup.vue'
import { useSidebar } from '@/composable/useSidebar';

const {sidebarOptions} = useSidebar()
</script>

<style scoped>
.sidebar {
  background-color: var(--color-background-sidebar);
}
</style>
