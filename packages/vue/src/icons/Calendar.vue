<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1"
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
