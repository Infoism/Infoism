<template>
  <Draggable v-model="sidebarStore.sidebarOptions" item-key="id">
    <template #item="{ element }">
      <SidebarButton
        color-text
        flex
        flex-col
        flex-1
        :icon="element.icon"
        :active="element.path ? route.path.startsWith(element.path) : false"
        @click="MenuBtnOnClickGenerator(element)()"
      ></SidebarButton>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import { buttonGroupOptions, buttonOption } from './constant'
import SidebarButton from './SidebarButton.vue'
import { useSidebarStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import Draggable from 'vuedraggable'

const sidebarStore = useSidebarStore()

const router = useRouter()

const route = useRoute()
defineProps<{
  options: buttonGroupOptions
}>()

const MenuBtnOnClickGenerator = function (option: buttonOption): () => void {
  return () => {
    const { path, callback } = option

    if (!path && !callback) {
      return
    }

    if (typeof callback === 'function') {
      setTimeout(callback, 0)
    }

    if (path) {
      router.push(path)
    }
  }
}
</script>

<style scoped></style>
