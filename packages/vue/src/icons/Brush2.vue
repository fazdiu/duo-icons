<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="m20.485 10.586 1.06 1.06a2.5 2.5 0 0 1 .123 3.405l-.122.13-6.364 6.365a2.5 2.5 0 0 1-3.405.122l-.13-.122-1.061-1.06 9.9-9.9z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M2.808 2.808c.885-.886 2.01-1.33 3.184-1.203 1.161.125 2.225.792 3.056 1.846.888 1.127 1.7 2.732 2.336 4.174.311.704 1.16.874 1.676.475l.093-.081.615-.615a2.5 2.5 0 0 1 3.405-.122l.13.122 1.768 1.768-9.9 9.899-1.767-1.768a2.5 2.5 0 0 1-.122-3.405l.122-.13.615-.615c.5-.5.354-1.439-.394-1.769-1.442-.636-3.047-1.448-4.174-2.336-1.053-.831-1.72-1.895-1.846-3.056-.127-1.174.317-2.3 1.203-3.184"
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
