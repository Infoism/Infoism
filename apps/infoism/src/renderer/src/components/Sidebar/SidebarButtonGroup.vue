<template>
  <Draggable v-model="sidebarOptions" item-key="id">
    <template #item="{ element: buttonOption }">
      <RouterLink :to="getCachePath(buttonOption)">
        <SidebarButton color-text flex flex-col flex-1 :icon="buttonOption.icon" :active="isButtonActive(buttonOption)">
        </SidebarButton>
      </RouterLink>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
// import components
import SidebarButton from './SidebarButton.vue'
import Draggable from 'vuedraggable'
import { RouterLink } from 'vue-router'
import { useSidebar, buttonGroupOptions, ButtonOption } from '@/composable/useSidebar'
import { useRoute } from 'vue-router'

// props definition
defineProps<{
  options: buttonGroupOptions
}>()

const route = useRoute()
const { sidebarOptions } = useSidebar()
const getCachePath = (buttonOption: ButtonOption) => {
  return buttonOption.path || '/'
}
const isButtonActive = (buttonOption: ButtonOption) => (buttonOption.path ? route.path.startsWith(buttonOption.path) : false)

</script>

<style scoped>

</style>
