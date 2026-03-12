<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M3.255 3.667A1.01 1.01 0 0 1 4.022 2H16.5c3.464 0 5.629 3.75 3.897 6.75A4.5 4.5 0 0 1 16.5 11H4.022a1.01 1.01 0 0 1-.767-1.667l.754-.88a3 3 0 0 0 0-3.905l-.754-.88z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M3 16.5A4.5 4.5 0 0 1 7.5 12h12.478a1.01 1.01 0 0 1 .767 1.667l-.755.88a3 3 0 0 0 0 3.905l.755.88A1.01 1.01 0 0 1 19.978 21H7.5A4.5 4.5 0 0 1 3 16.5"
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
