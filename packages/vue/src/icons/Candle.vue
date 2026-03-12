<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12.058 2.08a1 1 0 0 0-1.382.766c-.027.228-.1.449-.216.647-.1.165-.25.334-.514.58-.52.482-.837 1.059-.922 1.681-.074.572.04 1.153.326 1.655C9.842 8.296 10.84 9 11.903 9 13.285 9 15 8.034 15 6.194c0-.943-.422-1.829-.946-2.512-.528-.687-1.243-1.279-1.996-1.601z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M9 10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"
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
