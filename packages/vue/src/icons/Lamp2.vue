<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14.83 14H9.17c.77 2.178 3.609 2.706 5.11.95.2-.233.362-.496.482-.778z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 2a1 1 0 0 1 .993.883L13 3v1.1l8.175 8.176c.609.608.223 1.63-.6 1.718l-.114.006H16.9c-.773 3.772-5.34 5.293-8.22 2.737a5 5 0 0 1-1.532-2.525L7.1 14H3.54c-.861 0-1.31-.995-.791-1.639l.077-.085L11 4.1V3a1 1 0 0 1 1-1"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.05 16.95a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M16.95 16.95a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414"
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
