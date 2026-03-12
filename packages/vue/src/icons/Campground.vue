<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M13.176 3.434a1 1 0 1 1 1.648 1.133l-1.61 2.342L21.526 19H22a1 1 0 1 1 0 2h-4.634l-.044-.07-4.492-6.487a1.01 1.01 0 0 0-1.66 0L6.678 20.93l-.044.07H2a1 1 0 1 1 0-2h.474l8.313-12.092-1.611-2.342a1 1 0 0 1 1.648-1.133L12 5.144z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M12 16.757 14.938 21H9.062z"
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
