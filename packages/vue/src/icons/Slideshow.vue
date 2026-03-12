<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M21 3a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.829-2.828-2.828 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 1 1 0-2z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M8 11a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1M12 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1M16 7a1 1 0 0 0-.993.883L15 8v5a1 1 0 0 0 1.993.117L17 13V8a1 1 0 0 0-1-1"
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
