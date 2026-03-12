<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M5.553 5.658A3 3 0 0 1 8.236 4h7.528a3 3 0 0 1 2.683 1.658l1.386 2.771q.366-.15.72-.324a1 1 0 0 1 .894 1.79q-.36.16-.725.312l.961 1.923c.209.417.317.877.317 1.343V16a3 3 0 0 1-1 2.236V19.5a1.5 1.5 0 0 1-3 0V19H6v.5a1.5 1.5 0 0 1-3 0v-1.264c-.614-.55-1-1.348-1-2.236v-2.528c0-.466.109-.925.317-1.341l.953-1.908q-.362-.152-.715-.327a1.01 1.01 0 0 1-.45-1.343 1 1 0 0 1 1.342-.448q.355.175.72.324z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.342 6.553A1 1 0 0 1 8.236 6h7.528c.379 0 .725.214.894.553l1.27 2.538C16.38 9.555 14.294 10 12 10s-4.38-.445-5.927-.91zM16.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
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
