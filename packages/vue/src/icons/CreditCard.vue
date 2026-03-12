<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3zM18 14h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
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
