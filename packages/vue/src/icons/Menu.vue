<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M4 18a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 17q0-.424.288-.712A.97.97 0 0 1 4 16h11q.425 0 .713.288A.97.97 0 0 1 16 17q0 .424-.287.712A.97.97 0 0 1 15 18z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="m17.4 12 2.9 2.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-3.6-3.6a.96.96 0 0 1-.3-.7q0-.4.3-.7l3.6-3.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M4 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 7q0-.425.288-.713A.97.97 0 0 1 4 6h11a.97.97 0 0 1 .713.287A.97.97 0 0 1 16 7a.97.97 0 0 1-.287.713A.97.97 0 0 1 15 8z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M4 13a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 12q0-.425.288-.713A.97.97 0 0 1 4 11h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 12q0 .424-.287.712A.97.97 0 0 1 12 13z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    />
  </IconBase>
</template>

<script setup lang="ts">
import IconBase from '../IconBase.vue';
import type { IconProps } from '../types';

// By using the interface here, IntelliSense is enabled for this component.
const props = defineProps<IconProps>();
</script>
