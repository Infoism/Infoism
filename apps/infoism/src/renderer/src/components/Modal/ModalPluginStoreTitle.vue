<template>
  <a-space direction="vertical" fill>
    <h3 m0>插件商店</h3>
    <a-alert type="warning"
      title="注意">插件可以访问您的本地文件，并发出网络请求。它们还可能导致数据损坏或丢失。我们正在为插件制定适当的访问权限。同时，请确保只有在能够阅读和理解源代码时才安装插件。</a-alert>
    <a-divider />
    <div flex justify-center>
      <a-radio-group v-model="position" type="button">
        <a-radio v-for="label in PLUGIN_LABELS" :value="label">{{ PLUGIN_LABELS_MAP[label] }}</a-radio>
      </a-radio-group>
    </div>
</a-space>
</template>

<script setup lang="ts">
import { PLUGIN_LABELS, PLUGIN_LABELS_MAP } from '@/constant'
import { ref } from 'vue';
const position = ref('installed')

</script>

<style scoped></style>
