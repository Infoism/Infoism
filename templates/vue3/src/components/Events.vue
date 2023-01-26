<script setup lang="tsx">
import { Ref } from 'vue';
import { EVENT_NAMES } from '../services/registerMicroApp';
import { useEvent } from '../services/useEvent'

type EventFlags = {
  [k in EVENT_NAMES]: Ref<boolean>
}
const eventFlags = Object.fromEntries(Object.keys(EVENT_NAMES).map((value: string) => {
  const eventName = value.toLowerCase()
  const flag = useEvent(eventName as EVENT_NAMES, () => {
    alert(eventName)
  }, false)
  return [eventName, flag]
})) as EventFlags

</script>

<template>
  <h1>Events</h1>
  <h3>{{ $t('chuangKou') }}</h3>
  <a-space wrap>
    <a-space>
      <a-typography-text>{{ $t('maximize') }}:</a-typography-text>
      <a-switch v-model="eventFlags.maximize.value"></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('unmaximize') }}:</a-typography-text>
      <a-switch v-model="eventFlags.unmaximize.value"></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('minimize') }}:</a-typography-text>
      <a-switch v-model="eventFlags.minimize.value"></a-switch>
    </a-space>
    <a-space>
      <a-typography-text>{{ $t('close') }}:</a-typography-text>
      <a-switch v-model="eventFlags.close.value"></a-switch>
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
