<template>
  <a-space>
    <div btn-icon>
      <div i-ri-t-shirt-fill></div>
    </div>
    <div v-if="theme === 'dark'" btn-icon @click="changeTheme()">
      <div i-ri-sun-fill></div>
    </div>
    <div v-else btn-icon @click="changeTheme()">
      <div i-ri-moon-clear-fill></div>
    </div>
    <div btn-icon>
      <div @click="handleClickPluginStore()" i-ri-store-3-fill></div>
    </div>
    <div btn-icon>
      <div @click="handleClickSetting()" i-ri-settings-5-fill></div>
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { useTheme } from '@/store/useTheme';
import { Modal } from '@arco-design/web-vue';
import { storeToRefs } from 'pinia'
import { PluginStoreModal, SettingsModal } from '../Modal';

const themeStore = useTheme()

const { changeTheme } = themeStore
const { theme } = storeToRefs(themeStore)

const handleClickSetting = () => {
  Modal.confirm(SettingsModal)
}

const handleClickPluginStore = () => {
  Modal.confirm(PluginStoreModal)
}
</script>

<style scoped lang="scss">
[btn-icon=""] {
  &:hover {
    background-color: var(--color-neutral-3);
    @apply cursor-pointer
  }

  @apply no-drag px-1 py-1 flex justify-center items-center my-2 transition-all-200 border-rounded
}
</style>
