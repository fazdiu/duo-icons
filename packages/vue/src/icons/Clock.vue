<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M12 4c6.928 0 11.258 7.5 7.794 13.5A9 9 0 0 1 12 22C5.072 22 .742 14.5 4.206 8.5A9 9 0 0 1 12 4"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M7.366 2.971A1 1 0 0 1 7 4.337a10.1 10.1 0 0 0-2.729 2.316 1 1 0 1 1-1.544-1.27 12 12 0 0 1 3.271-2.777 1 1 0 0 1 1.367.365zM18 2.606a12 12 0 0 1 3.272 2.776 1 1 0 0 1-1.544 1.27 10 10 0 0 0-2.729-2.315 1 1 0 0 1 1.002-1.731zM12 8a1 1 0 0 0-.993.883L11 9v3.986c-.003.222.068.44.202.617l.09.104 2.106 2.105a1 1 0 0 0 1.498-1.32l-.084-.094L13 12.586V9a1 1 0 0 0-1-1"
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
