<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M22 15v5a2 2 0 0 1-2 2h-1v-3a1 1 0 1 0-2 0v3h-4v-3a1 1 0 1 0-2 0v3H7v-3a1 1 0 1 0-2 0v3H4a2 2 0 0 1-2-2v-5z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M13 2a2 2 0 0 1 2 2v4a1 1 0 0 0 1 1h4a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2h4a1 1 0 0 0 1-1V4a2 2 0 0 1 2-2z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
</template>

<script setup lang="ts">
import IconBase from '../IconBase.vue';
import type { IconProps } from '../types';

// By using the interface here, IntelliSense is enabled for this component.
const props = defineProps<IconProps>();
</script>
