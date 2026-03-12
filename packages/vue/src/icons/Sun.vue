<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      d="M12 18.5a1.5 1.5 0 0 1 1.493 1.356L13.5 20v1a1.5 1.5 0 0 1-2.993.144L10.5 21v-1a1.5 1.5 0 0 1 1.5-1.5M12 1.5a1.5 1.5 0 0 1 1.493 1.356L13.5 3v1a1.5 1.5 0 0 1-2.993.144L10.5 4V3A1.5 1.5 0 0 1 12 1.5M17.303 4.575a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114zM4.575 4.575a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122M21 10.5a1.5 1.5 0 0 1 .144 2.993L21 13.5h-1a1.5 1.5 0 0 1-.144-2.993L20 10.5zM4 10.5a1.5 1.5 0 0 1 .144 2.993L4 13.5H3a1.5 1.5 0 0 1-.144-2.993L3 10.5z"
      class="duo-icons-primary-layer"
    /><path
      fill="currentColor"
      d="M12 6c4.619 0 7.506 5 5.196 9A6 6 0 0 1 12 18c-4.619 0-7.506-5-5.196-9A6 6 0 0 1 12 6"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      d="M5.282 16.596a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114zM16.596 16.596a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122"
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
