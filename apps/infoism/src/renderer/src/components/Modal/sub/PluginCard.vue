<template>
  <div class="plugin-card">
    <div class="plugin-card-content">
      <img class="plugin-card-content-logo"
        :src="`https://raw.githubusercontent.com/Infoism/marketplace/master/packages/${name}/logo.png`" alt="">
      <a-space class="plugin-card-content-detail" direction="vertical">
        <div class="title">
          {{ config.title }}
        </div>
        <div class="description">
          {{ config.description }}
        </div>
        <div class="detail">
          {{ config.author }}
        </div>
      </a-space>
    </div>
    <div class="plugin-card-meta">
      <div class="data">
      </div>
      <a-space class="action">
        <a :href="`https://www.github.com/${config.repo}`" target="_blank">
          <a-button size="mini" shape="round">
            <template #icon>
              <div i-mdi-github></div>
            </template>
          </a-button>
        </a>
        <a-button size="mini" shape="round">
          <template #icon>
            <div i-mdi-download></div>
          </template>
        </a-button>
      </a-space>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { packageConfig } from '@store/usePlugins'

defineProps<{
  name: string;
  config: packageConfig
  installed?: boolean
}>()
</script>

<style scoped lang="scss">
.plugin-card {
  &-content {
    &-logo {
      @apply w20 h20 border-rounded-2 object-cover object-center
    }

    &-detail {
      .title {
        @apply font-bold text-base
      }

      .description {
        height: 50px;
      }

      .description,
      .detail {
        color: var(--color-text-3);
        @apply text-xs
      }

      @apply ml4
    }

    @apply flex flex-row
  }

  &-meta {
    @apply flex justify-between
  }

  background-color: var(--color-bg-2);
  @apply flex flex-col py2 px4 border-rounded-2
}
</style>
