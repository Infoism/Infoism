<template>
  <header header h-10 relative flex justify-center items-center>
    <a-space direction="vertical" size="large">
      <a-input-search :style="{ width: '320px' }" :placeholder="$t('souSuo')" />
    </a-space>
    <div flex-row flex pos-absolute right-0 h-full>
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
  </header>
</template>

<script setup lang="ts">
import { bridge } from '@infoism/lib';
import { useIsWindowMaximized } from '@/composable/useWindowController';
let isWindowMaximized = ref<unknown>(false);
useIsWindowMaximized(isWindowMaximized)

</script>

<style scoped lang="scss">
[header=""] {
  background-color: var(--color-bg-1);
}

[btn-icon=""] {
  &:hover {
    background-color: var(--color-bg-4);
    @apply cursor-pointer
  }

  &[btn-icon-danger=""] {
    @apply hover-bg-red
  }

  @apply no-drag h-auto px-2 flex justify-center items-center my-2 transition-all-200 hover-color-white
}
</style>
