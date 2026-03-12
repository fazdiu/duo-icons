<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M11.514 16.903a.6.6 0 0 1 .976 0l2.766 3.868a.6.6 0 0 1-.488.949H9.237a.6.6 0 0 1-.488-.949z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M20 4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3.71l-3.151-4.407a1.4 1.4 0 0 0-2.278 0L7.711 19H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
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
