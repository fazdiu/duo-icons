<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M15 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
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
