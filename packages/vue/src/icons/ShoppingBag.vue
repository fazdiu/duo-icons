<template>
  <IconBase v-bind="props">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.464 3.282a2 2 0 0 1 2.964-.12l.108.12L17.468 8h2.985a1.49 1.49 0 0 1 1.484 1.655l-.092.766-.1.74-.082.554-.095.595-.108.625-.122.648-.136.661q-.108.5-.232.998a21 21 0 0 1-.832 2.584l-.221.54-.214.488-.202.434-.094.194-.249.49c-.32.61-.924.97-1.563 1.022l-.16.006H6.555a1.93 1.93 0 0 1-1.71-1.008l-.232-.45-.18-.37-.095-.205-.2-.449a21.5 21.5 0 0 1-1.108-3.276 35 35 0 0 1-.156-.654l-.142-.648-.127-.634-.112-.613-.1-.587-.087-.554-.074-.513-.09-.683-.066-.556-.017-.153a1.49 1.49 0 0 1 1.348-1.64L3.543 8h2.989z"
      class="duo-icons-secondary-layer"
      opacity=".3"
    /><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 4.562 9.135 8h5.73zM15.164 12.014a1 1 0 0 0-1.125.708l-.025.114-.5 3a1 1 0 0 0 1.947.442l.025-.114.5-3a1 1 0 0 0-.822-1.15M9.961 12.722a1 1 0 0 0-1.96.326l.013.116.5 3 .025.114a1 1 0 0 0 1.96-.326l-.013-.116-.5-3z"
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
