<template>
  <div
    w-12
    h-12
    b-l
    b-primary
    flex
    items-center
    justify-center
    icon-btn
    :class="{
      active
    }"
  >
    <div :class="icon" w-6 h-6 p-0></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  active?: boolean
}>()
</script>

<style scoped>
.active {
  color: var(--color-primary);
  box-shadow: inset 2px 0 0 0 white;
  background-color: var(--color-background-active);
}
</style>
