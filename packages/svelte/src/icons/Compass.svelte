<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M16.243 7.757c-.354-.353-4.95.707-6.364 2.122-1.414 1.414-2.475 6.01-2.122 6.364.354.353 4.95-.707 6.364-2.122 1.415-1.414 2.475-6.01 2.122-6.364"
    class="duo-icons-primary-layer"
  />
</IconBase>
