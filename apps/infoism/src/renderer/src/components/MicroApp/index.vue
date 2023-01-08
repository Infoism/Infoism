<template>
  <div
    v-for="(app, index) in MicroApps"
    v-show="route.path.startsWith(app.activeRule)"
    :id="app.container"
    :key="index"
    h-full
    w-full
  ></div>
</template>

<script setup lang="ts">
import { MicroApps } from '../../router/qiankun'
import { loadMicroApp } from 'qiankun'
import { useRoute } from 'vue-router'
import * as stores from '@store/index'

const route = useRoute()

const path = route.path
const currentAppIndex = MicroApps.findIndex((item) => path.includes(item.name))
if (currentAppIndex !== -1) {
  const currApp = MicroApps.splice(currentAppIndex, 1)[0]
  MicroApps.unshift(currApp)
}
// loadMicroApp 返回值是 app 的生命周期函数数组
MicroApps.map((item) =>
  loadMicroApp({
    ...item,
    // 通过在不同的container中加载子应用的方式实现KeepAlive
    container: `#${item.container}`,
    // 主应用和子应用之间用store通讯
    props: { stores }
  })
)
</script>

<style scoped></style>
