<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M11.44 6.507a1 1 0 0 0-1.276-.61 7 7 0 0 0-3.73 3.1A1 1 0 1 0 8.166 10a5.02 5.02 0 0 1 2.665-2.216 1 1 0 0 0 .61-1.276zM12 10c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 10"
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
