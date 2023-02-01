<template>
  <div flex-row flex h-full>
    <div @click="bridge.minimize()" btn-icon>
      <div i-clarity-window-min-line></div>
    </div>
    <div @click="bridge.unmaximize()" v-show="isWindowMaximized" btn-icon>
      <div i-clarity-window-restore-line></div>
    </div>
    <div @click="bridge.maximize()" v-show="!isWindowMaximized" btn-icon>
      <div i-clarity-window-max-line></div>
    </div>
    <div @click="bridge.close()" btn-icon btn-icon-danger>
      <div i-clarity-window-close-line></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bridge } from '@infoism/lib';
import { useIsWindowMaximized } from '@/composable/useWindowController';
let isWindowMaximized = ref<unknown>(false);
useIsWindowMaximized(isWindowMaximized)
</script>

<style scoped lang="scss">
[btn-icon=""] {
  &:hover {
    background-color: var(--color-neutral-3);
    @apply cursor-pointer
  }

  &[btn-icon-danger=""]:hover {
    background-color: rgb(var(--danger-6));
  }

  @apply no-drag h-auto px-2 py-1 flex justify-center items-center my-2 transition-all-200
}
</style>
