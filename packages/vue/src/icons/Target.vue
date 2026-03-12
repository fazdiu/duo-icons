<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M12 2a1 1 0 0 1 .993.883L13 3v.055a9.005 9.005 0 0 1 7.911 7.674l.034.271H21a1 1 0 0 1 .117 1.993L21 13h-.055a9.005 9.005 0 0 1-7.674 7.911l-.271.034V21a1 1 0 0 1-1.993.117L11 21v-.055a9.005 9.005 0 0 1-7.911-7.674L3.055 13H3a1 1 0 0 1-.117-1.993L3 11h.055a9.005 9.005 0 0 1 7.674-7.911L11 3.055V3a1 1 0 0 1 1-1"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M12 7c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7"
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
