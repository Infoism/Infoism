<template>
  <header class="header" h-12 relative flex justify-center items-center>
    <a-space direction="vertical" size="large">
      <a-input-search :style="{ width: '320px' }" placeholder="搜索" />
    </a-space>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  background-color: var(--color-bg-1);
}
</style>
