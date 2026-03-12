<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M11.022 3H18a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7c0 .715-.381 1.375-1 1.732v.768a1.5 1.5 0 0 1-3 0V19H7v.5a1.5 1.5 0 0 1-3 0v-.768A2 2 0 0 1 3 17v-7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1 3 3 0 0 1 3-3z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M15 15a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M6 15a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M11.618 5h2.764l-1.276 2.553a1 1 0 1 0 1.788.894L16.618 5H18a1 1 0 0 1 1 1v5H5V6a1 1 0 0 1 1-1h3.382L8.106 7.553a1 1 0 0 0 1.788.894z"
      class="duo-icons-primary-layer"
    />
  </IconBase>
</template>

<script setup lang="ts">
import IconBase from '../IconBase.vue';
import type { IconProps } from '../types';

// By using the interface here, IntelliSense is enabled for this component.
const props = defineProps<IconProps>();
</script>
