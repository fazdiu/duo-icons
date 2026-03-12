<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M20 3a2 2 0 0 1 2 2v3H2V5a2 2 0 0 1 2-2zM14 13h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2"
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
