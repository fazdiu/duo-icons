<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M17 10.5a1.5 1.5 0 0 1 1.493 1.356L18.5 12v.5h1a2 2 0 0 1 1.995 1.85l.005.15v3a2 2 0 0 1-1.85 1.995l-.15.005h-1v.5a1.5 1.5 0 0 1-2.993.144L15.5 20v-.5h-1a2 2 0 0 1-1.995-1.85l-.005-.15v-3a2 2 0 0 1 1.85-1.995l.15-.005h1V12a1.5 1.5 0 0 1 1.5-1.5"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M17 3.5A3.5 3.5 0 0 1 20.5 7v2a1.5 1.5 0 0 1-3 0V7a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1 0-3z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M9.5 2.5a1.5 1.5 0 0 1 0 3h-4v1H9a1.5 1.5 0 0 1 0 3H5.5v1H10a1.5 1.5 0 0 1 0 3H4.1a1.6 1.6 0 0 1-1.6-1.6V4.1a1.6 1.6 0 0 1 1.6-1.6z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M19.5 15h-1v2h1zM15.5 15h-1v2h1zM5 14.5A1.5 1.5 0 0 1 6.5 16v1a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 17v-1A1.5 1.5 0 0 1 5 14.5"
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
