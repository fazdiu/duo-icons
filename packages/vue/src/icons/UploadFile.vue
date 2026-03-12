<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 2v6.5a1.5 1.5 0 0 0 1.356 1.493L13.5 10H20v10a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M14 2.043a2 2 0 0 1 .877.43l.123.113L19.414 7c.234.234.407.523.502.84l.04.16H14zM11.293 11.173l-2.121 2.121a1 1 0 1 0 1.414 1.414l.414-.414V17a1 1 0 1 0 2 0v-2.706l.414.414a1 1 0 1 0 1.414-1.414l-2.12-2.121a1 1 0 0 0-1.415 0"
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
