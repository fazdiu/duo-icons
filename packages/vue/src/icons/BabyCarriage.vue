<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.746 2.609c.764-.296 1.566.093 1.877.773L12.643 10H18V8.5A2.5 2.5 0 0 1 20.5 6h.5a1 1 0 1 1 0 2h-.5a.5.5 0 0 0-.5.5V11a9 9 0 0 1-2.489 6.213c1.76.778 2.018 3.17.464 4.305s-3.755.163-3.961-1.751A3 3 0 0 1 14 19.5v-.015a9 9 0 0 1-6 0v.015c0 1.925-2.084 3.127-3.75 2.164-1.667-.962-1.666-3.368 0-4.33q.117-.067.239-.121C.063 12.574 1.769 4.927 7.746 2.609"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8.012 4.669A7 7 0 0 0 4.072 10h6.372L8.012 4.67z"
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
