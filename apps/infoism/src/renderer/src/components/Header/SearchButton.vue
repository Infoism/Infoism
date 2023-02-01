<template>
  <div search-button>
    <a-space h-full w-full justify-center item-center>
      <div i-clarity-search-line></div>
      <div>搜索(Ctrl + K)</div>
    </a-space>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
[search-button=""] {
  &:hover {
    background-color: var(--color-secondary-hover);
    color: rgba(var(--gray-8), .8);
  }

  background-color: var(--color-secondary);
  color: rgba(var(--gray-6), .8);
  @apply flex py2 px4 no-drag border-rounded cursor-pointer transition-all-200 max-w-md min-w-xs max-h-8
}
</style>
