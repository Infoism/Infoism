<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div pl8>
    <RouterLink no-drag to="/bridge">bridge</RouterLink>
    <RouterLink no-drag to="/event">event</RouterLink>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component :is="Component"></Component>
      </KeepAlive>
    </RouterView>
  </div>
</template>

<style scoped>

</style>
