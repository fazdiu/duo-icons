<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M17 2a3 3 0 0 1 3 3v16a1 1 0 0 1-1.625.78l-1.875-1.5-1.875 1.5a1 1 0 0 1-1.332-.073L12 20.414l-1.293 1.293a1 1 0 0 1-1.332.074L7.5 20.28l-1.875 1.5A1 1 0 0 1 4 21V5a3 3 0 0 1 3-3z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M15 8H9a1 1 0 0 0-.117 1.993L9 10h6a1 1 0 0 0 .117-1.993zM12 12H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
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
