<template>
  <div class="panel" v-if="loading">
    <a-spin></a-spin>
  </div>
  <div class="panel" v-else-if="plugins.length === 0">
    <a-empty></a-empty>
  </div>
  <a-grid v-else :cols="{ xs: 2, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }" :colGap="12" :rowGap="16" w-full>
    <a-grid-item v-for="plugin in plugins">
      <plugin-card :name="plugin.name" :config="plugin.config"></plugin-card>
    </a-grid-item>
</a-grid>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlugins } from '@store/usePlugins'
const { plugins, loading } = storeToRefs(usePlugins())
</script>

<style lang="scss">
.plugin-store.arco-modal-simple {
  .arco-modal-body {
    margin: 0 -32px -24px;
    padding: 0 32px;
    @apply overflow-y-auto flex-1
  }

  @apply flex flex-col
}
</style>

<style scoped lang="scss">
.panel {
  @apply h-full w-full flex justify-center items-center
}
</style>
