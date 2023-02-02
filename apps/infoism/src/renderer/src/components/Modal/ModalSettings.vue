<!-- TODO 完善设置项 -->
<template>
  <div max-h-50vh overflow-auto ref="ContainerRef">
    <div>
      <a-tabs direction="vertical" default-active-key="1">
        <a-tab-pane key="1">
          <template #title>
            <span icon i-carbon-settings-adjust />常规
          </template>
          <a-space direction="vertical" fill>
            <a-row align="center">
              <a-col :span="8">当前版本</a-col>
              <a-col :span="16">
                <a-space>
                  <a-button type="primary">检查版本</a-button>
                  1.0.0
                </a-space>
              </a-col>
            </a-row>
            <a-row align="center">
              <a-col :span="8">语言</a-col>
              <a-col :span="16">
                <a-select v-model="configStore.general.lang" :style="{ width: '50%' }" placeholder="Please select ...">
                  <a-option value="en">English</a-option>
                  <a-option value="zh_cn">简体中文</a-option>
                </a-select>
              </a-col>
            </a-row>
          </a-space>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #title>
            <span icon i-carbon-idea />高级设置
          </template>
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #title>
            <span icon i-carbon-plug />插件
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfig } from '@/store/useConfig';

const ContainerRef = ref()
const configStore = useConfig()

</script>

<style scoped lang="scss">
[icon=""] {
  @apply inline-block v-mid mr1
}
</style>
