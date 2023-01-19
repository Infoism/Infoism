<script setup lang="tsx">
import { event, EVENT_NAMES } from '../services/registerMicroApp';
import { useRouter } from 'vue-router'

defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>{{ $t('chuangKou') }}</h3>
  <a-space wrap>
    <a-space>
      <a-typography-text>{{ $t('maximize') }}:</a-typography-text>
      <a-switch></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('maximize') }}:</a-typography-text>
      <a-switch></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('maximize') }}:</a-typography-text>
      <a-switch></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('maximize') }}:</a-typography-text>
      <a-switch></a-switch>
    </a-space>
  </a-space>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

button:first-child {
  margin-left: 0;
}
</style>
