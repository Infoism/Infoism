<script setup lang="ts">
import Sidebar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
</script>

<template>
  <div flex flex-row h-full>
    <Sidebar></Sidebar>
    <div flex flex-col h-full w-full>
      <Header></Header>
      <div h-full w-full no-drag class="microapp-container">
        <div class="microapp" h-full w-full border-rd-lt-2 overflow-hidden border-l-solid border-t-solid border-1px>
          <RouterView v-slot="{ Component }">
            <KeepAlive>
              <Component :is="Component"></Component>
            </KeepAlive>
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.microapp-container {
  background-color: var(--color-bg-1);
}

.microapp {
  background-color: var(--color-bg-2);
  border-color: var(--color-border-2);
}
</style>
