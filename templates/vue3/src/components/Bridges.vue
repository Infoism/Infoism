<script setup lang="ts">
import { bridge } from '@infoism/core';

</script>

<template>
  <h1>Bridges</h1>
  <h3>{{ $t('chuangKou') }}</h3>
  <a-space>
    <a-button type="outline" @click="bridge.maximize()">{{ $t('maximize') }}</a-button>
    <a-button type="outline" @click="bridge.unmaximize()">{{ $t('unmaximize') }}</a-button>
    <a-button type="outline" @click="bridge.minimize()">{{ $t('minimize') }}</a-button>
    <a-button type="primary" status="danger" @click="bridge.close()">{{ $t('close') }}</a-button>
    <a-button type="outline" @click="bridge.isMaximized()">{{ $t('checkIfWindowIsMaximized') }}</a-button>
  </a-space>
</template>
