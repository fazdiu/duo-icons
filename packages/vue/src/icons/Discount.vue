<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M9.405 2.897a4 4 0 0 1 5.02-.136l.17.136.376.32c.274.234.605.389.96.45l.178.022.493.04a4 4 0 0 1 3.648 3.468l.021.2.04.494c.028.358.153.702.36.996l.11.142.322.376a4 4 0 0 1 .136 5.02l-.136.17-.321.376a2 2 0 0 0-.45.96l-.022.178-.039.493a4 4 0 0 1-3.468 3.648l-.201.021-.493.04a2 2 0 0 0-.996.36l-.142.111-.377.32a4 4 0 0 1-5.02.137l-.169-.136-.376-.321a2 2 0 0 0-.96-.45l-.178-.021-.493-.04a4 4 0 0 1-3.648-3.468l-.021-.2-.04-.494a2 2 0 0 0-.36-.996l-.111-.142-.321-.377a4 4 0 0 1-.136-5.02l.136-.169.32-.376c.234-.274.389-.605.45-.96l.022-.178.04-.493A4 4 0 0 1 7.197 3.75l.2-.021.494-.04c.358-.028.702-.153.996-.36l.142-.111.376-.32z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M14.293 8.293l-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0-1.414-1.414M14.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
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
