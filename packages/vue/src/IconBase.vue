<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { IconProps } from './types';
import { SVG_ATTRIBUTES } from '../../shared/attributes';

const props = withDefaults(defineProps<IconProps>(), {
  size: SVG_ATTRIBUTES.size,
});

const attrs = useAttrs();

// We filter the attributes to remove 'class' and prevent duplication when using v-bind
const filteredAttrs = computed(() => {
  const { class: _, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <svg
    :xmlns="SVG_ATTRIBUTES.xmlns"
    :width="props.size"
    :height="props.size"
    :viewBox=SVG_ATTRIBUTES.viewBox
    :class="[SVG_ATTRIBUTES.className, $attrs.class]"
    v-bind="filteredAttrs"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
// We disabled automatic inheritance so that the classes
// only fall where we use :class and do not duplicate
export default { inheritAttrs: false };
</script>
