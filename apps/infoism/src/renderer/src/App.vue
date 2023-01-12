<script setup lang="ts">
import Sidebar from '@/components/Sidebar/index.vue'
import MicroApp from '@/components/MicroApp/index.vue'
import Header from '@/components/Header/index.vue'
</script>

<template>
  <div flex flex-row h-full>
    <Sidebar></Sidebar>
    <div flex flex-col h-full w-full>
      <Header></Header>
      <div h-full w-full class="microapp-container">
        <div class="microapp" h-full w-full border-rd-lt-2 overflow-hidden border-l-solid border-t-solid border-1px>
          <MicroApp></MicroApp>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.scss';

.microapp-container {
  background-color: var(--color-microapp-container);
}

.microapp {
  background-color: var(--color-background-inset);
  border-color: var(--color-border-muted);
}
</style>
