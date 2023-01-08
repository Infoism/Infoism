<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">{{ $t('count') }}{{ count }}</button>
    <p>
      {{ $t('edit') }}
      <code>components/HelloWorld.vue</code> {{ $t('testHMR') }}
    </p>
  </div>

  <p>
    {{ $t('checkOut') }}
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      {{ $t('createVue') }} </a
    >{{ $t('theOfficialVueViteStarter') }}
  </p>
  <p>
    {{ $t('install') }}
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    {{ $t('inYourIdeForABetterDx') }}
  </p>
  <p class="read-the-docs">{{ $t('clickOnTheViteAndVueLogosToLearnMore') }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
