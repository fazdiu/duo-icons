<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 9c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A2 2 0 0 0 12 9M13.5 14h-3a2.5 2.5 0 0 0-2.495 2.336L8 16.5v.5a1 1 0 0 0 1.993.117L10 17v-.5a.5.5 0 0 1 .41-.492L10.5 16h3a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L16 17v-.5a2.5 2.5 0 0 0-2.336-2.495z"
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
