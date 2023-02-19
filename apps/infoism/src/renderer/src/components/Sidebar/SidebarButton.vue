<template>
  <div w-12 h-12 b-l flex items-center justify-center :class="{
    active
  }">
    <div :class="icon" w-6 h-6 p-0></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  icon: string
  active?: boolean
}>()
</script>

<style scoped>
.active {
  color: rgb(var(--primary-6));
  box-shadow: inset 2px 0 0 0 white;
  background-color: var(--color-bg-5);
}
</style>
