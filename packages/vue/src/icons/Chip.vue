<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 1 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 1 1 2 0v1h4V3a1 1 0 0 1 1-1"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M14 8h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
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
