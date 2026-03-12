<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v1a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8.5 6A1.5 1.5 0 0 0 7 7.5v1A1.5 1.5 0 0 0 8.5 10h7A1.5 1.5 0 0 0 17 8.5v-1A1.5 1.5 0 0 0 15.5 6z"
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
