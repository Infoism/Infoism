<template>
  <Draggable v-model="sidebarOptions" item-key="id">
    <template #item="{ element }">
      <SidebarButton color-text flex flex-col flex-1 :icon="element.icon"
        :active="element.path ? route.path.startsWith(element.path) : false"
        @click="MenuBtnOnClickGenerator(element)()"></SidebarButton>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import SidebarButton from './SidebarButton.vue'
import { useSidebar, buttonGroupOptions, buttonOption } from '@/composable/useSidebar'
import { useRoute, useRouter } from 'vue-router'
import Draggable from 'vuedraggable'

const { sidebarOptions } = useSidebar()

const router = useRouter()

const route = useRoute()
defineProps<{
  options: buttonGroupOptions
}>()

const MenuBtnOnClickGenerator = function (option: buttonOption): () => void {
  return () => {
    const { path } = option

    if (!path) {
      return
    }

    router.push(path)
  }
}
</script>

<style scoped>

</style>
