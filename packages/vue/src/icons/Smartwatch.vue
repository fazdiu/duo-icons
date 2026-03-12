<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M9.5 2a2 2 0 0 0-2 2v1.29C7.963 5.104 8.47 5 9 5h6a4 4 0 0 1 1.5.29V4a2 2 0 0 0-2-2zM9 19a4 4 0 0 1-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29A4 4 0 0 1 15 19z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1V9a3 3 0 0 0-3-3z"
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
