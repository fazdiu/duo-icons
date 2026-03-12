<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M12.477 4.546A1.01 1.01 0 0 1 13.5 3.127q.037.003.074.01c6.821 1.213 9.771 9.356 5.31 14.656s-12.988 3.784-15.348-2.73a9 9 0 0 1-.399-1.489 1.01 1.01 0 0 1 1.339-1.125q.036.013.07.028c4.214 1.892 8.895-1.488 8.426-6.083a6 6 0 0 0-.495-1.848"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M8.397 2.857c.04-.09.166-.09.206 0l.102.222a5.2 5.2 0 0 0 1.97 2.172l.157.092c.073.04.075.144.003.187l-.003.002-.158.092a5.2 5.2 0 0 0-2.07 2.394.113.113 0 0 1-.195.022q-.007-.01-.012-.022l-.102-.222a5.2 5.2 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1-.003-.187l.003-.002.158-.092a5.2 5.2 0 0 0 1.97-2.172zM5.565 7.716l.064.14a3.26 3.26 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.07.07 0 0 1-.122.013l-.008-.013-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059c.534-.326.964-.8 1.236-1.364l.064-.14a.07.07 0 0 1 .122-.013l.008.013z"
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
