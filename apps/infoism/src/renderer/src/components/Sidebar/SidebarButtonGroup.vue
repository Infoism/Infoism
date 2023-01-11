<template>
  <Draggable v-model="sidebarOptions" item-key="id">
    <template #item="{ element }">
      <RouterLink :to="element.path">
        <SidebarButton color-text flex flex-col flex-1 :icon="element.icon"
          :active="element.path ? route.path.startsWith(element.path) : false"></SidebarButton>
      </RouterLink>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
// import components
import SidebarButton from './SidebarButton.vue'
import Draggable from 'vuedraggable'
import { RouterLink } from 'vue-router'
import { useSidebar, buttonGroupOptions } from '@/composable/useSidebar'
import { useRoute } from 'vue-router'

// props definition
defineProps<{
  options: buttonGroupOptions
}>()

const { sidebarOptions } = useSidebar()
const route = useRoute()

</script>

<style scoped>

</style>
