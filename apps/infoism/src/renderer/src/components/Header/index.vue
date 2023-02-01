<template>
  <header header h-12 relative flex justify-center items-center>
    <a-space flex-1></a-space>
    <a-space flex-1 direction="vertical">
      <SearchButton></SearchButton>
    </a-space>
    <a-space flex-1 flex justify-end>
      <ToolBar></ToolBar>
      <WindowController></WindowController>
    </a-space>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
[header=""] {
  background-color: var(--color-bg-1);
  @apply flex
}

</style>
