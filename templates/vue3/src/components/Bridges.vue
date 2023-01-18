<script setup lang="ts">
import { bridge } from '@infoism/core';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>{{ $t('chuangKou') }}</h3>
  <div class="card">
    <button type="button" @click="bridge.maximize()">{{ $t('maximize') }}</button>
    <button type="button" @click="bridge.unmaximize()">{{ $t('unmaximize') }}</button>
    <button type="button" @click="bridge.minimize()">{{ $t('minimize') }}</button>
    <button type="button" bg-red color-black @click="bridge.close()">{{ $t('close') }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
button:first-child {
  margin-left: 0;
}
</style>
