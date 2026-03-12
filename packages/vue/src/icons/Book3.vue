<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M4 5a3 3 0 0 1 3-3h11a2 2 0 0 1 2 2v12.99c0 .168-.038.322-.113.472l-.545 1.09a1 1 0 0 0 0 .895l.543 1.088A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM7 18h10.408a3 3 0 0 0 0 2H7a1 1 0 1 1 0-2"
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
