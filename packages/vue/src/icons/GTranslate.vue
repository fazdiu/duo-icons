<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="m12 22-1-3H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V4q0-.825.588-1.413A1.93 1.93 0 0 1 4 2h6l.875 3H20q.875 0 1.438.562T22 7v13q0 .825-.562 1.413Q20.875 22 20 22z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M13 21h7q.45 0 .725-.288A1 1 0 0 0 21 20V7q0-.45-.275-.725T20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275a8 8 0 0 1-.75 1.85A9.8 9.8 0 0 1 15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M15.1 13.825q.7-.825 1.063-1.575.362-.75.487-1.175h-3.975l.3 1.05h1q.2.375.475.813t.65.887M13.85 15.1l.55-.525a16 16 0 0 1-.637-.825q-.288-.4-.563-.85zM7.15 14.6q1.725 0 2.838-1.112T11.1 10.6a5 5 0 0 0-.012-.363 1.7 1.7 0 0 0-.063-.337h-3.95v1.55H9.3a1.9 1.9 0 0 1-.763 1.087q-.562.388-1.362.388-.975 0-1.675-.7T4.8 10.5q0-1.024.7-1.725a2.29 2.29 0 0 1 1.675-.7q.45 0 .85.162.4.163.725.488L9.975 7.55Q9.451 7 8.713 6.7a4.1 4.1 0 0 0-1.563-.3q-1.675 0-2.862 1.187T3.1 10.5t1.188 2.912Q5.475 14.6 7.15 14.6"
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
